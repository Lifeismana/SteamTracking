/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [57333, 38843],
    {
      98001: (j, oe, i) => {
        "use strict";
        i.d(oe, { v: () => k });
        var t = i(72609);
        function m(Q) {
          const { appid: J, profileUrl: V, dlc: K } = Q,
            W = V
              ? `${V}/achievements/${J}`
              : `${Config.COMMUNITY_BASE_URL}achievements/${J}`;
          return K !== void 0 ? `${W}?dlc=${K}` : W;
        }
        function k(Q) {
          const { appid: J, profileUrl: V } = Q;
          return V
            ? `${V}/stats/${J}/achievements/`
            : `${t.TS.COMMUNITY_BASE_URL}stats/${J}/achievements/`;
        }
      },
      94381: (j, oe, i) => {
        "use strict";
        i.d(oe, { S: () => P });
        var t = i(7850),
          m = i(68031),
          k = i(31857);
        function Q(X) {
          return (0, t.jsx)(k.I, {
            ...X,
            viewBox: 16,
            children: (0, t.jsx)("path", {
              d: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
        }
        var J = i(21895),
          V = i(64238),
          K = i.n(V),
          W = i(80549);
        function P(X) {
          const {
              checked: Y,
              onChange: le,
              disabled: _,
              children: N,
              ref: L,
              variant: se,
              color: R,
              align: ie = "center",
              icon: ee,
              ...ye
            } = X,
            te = Y === "indeterminate",
            w = ee ?? (te ? z : Q),
            ue = () => {
              _ || (le && le(te ? !0 : !Y));
            },
            me = (ae) => {
              _ ||
                (ae.key === " " &&
                  (ue(), ae.preventDefault(), ae.stopPropagation()));
            },
            H = (0, W.f)("Checkbox", se);
          return (0, t.jsxs)(m.s, {
            align: ie,
            ref: L,
            role: "checkbox",
            "aria-checked": te ? "mixed" : Y,
            "data-state": T(Y),
            className: K()(J.Root, J[`Variant-${H}`], _ && J.Disabled),
            onClick: ue,
            tabIndex: 0,
            onKeyDown: me,
            cursor: "default",
            "aria-disabled": _,
            "data-accent-color": R,
            ...ye,
            children: [
              (0, t.jsx)("div", {
                className: J.Checkbox,
                children: Y && (0, t.jsx)(w, { className: J.Icon }),
              }),
              N,
            ],
          });
        }
        function T(X) {
          return X === "indeterminate" ? X : X ? "checked" : "unchecked";
        }
        function z(X) {
          return (0, t.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
              d: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      84909: (j, oe, i) => {
        "use strict";
        i.d(oe, { AM: () => me, Pr: () => w });
        var t = i(7850),
          m = i(90626),
          k = i(73788),
          Q = i(8083),
          J = i(94621),
          V = i(18938),
          K = i(24660),
          W = i(38566),
          P = i(54130),
          T = i(71742),
          z = i(64238),
          X = i.n(z),
          Y = i(3877),
          le = i(3166),
          _ = i(28020);
        const N = (0, m.createContext)(null);
        function L(H) {
          const { children: ae, ...q } = H,
            re = te(q);
          return (0, t.jsx)(N.Provider, { value: re, children: ae });
        }
        function se(H) {
          const { children: ae } = H,
            q = m.Children.only(ae),
            re = (0, m.useContext)(N);
          return q
            ? re
              ? (0, m.cloneElement)(q, {
                  ...re.getReferenceProps(q.props),
                  ref: (0, V.XB)(q.props.ref, re.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function R(H) {
          const { children: ae, className: q, ref: re, label: ce } = H,
            ge = (0, m.useContext)(N),
            Ie = (0, k.SV)([re, ge?.floating.refs.setFloating]);
          if (!ge)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!ge.open) return null;
          let Tt = m.Children.only(ae),
            Dt = m.Fragment;
          return (
            Tt.type == me.FocusManager &&
              ((Tt = m.Children.only(Tt.props.children)), (Dt = ie)),
            (0, t.jsx)(Dt, {
              children: (0, t.jsx)(_.HF, {
                presentation: ge.presentation,
                sizing: ge.sizing,
                floatingRef: Ie,
                floatingProps: ge.getFloatingProps(),
                floatingStyles: ge.floating.floatingStyles,
                referenceElement: ge.floating.elements.domReference,
                className: X()((0, Y.T)(), q),
                label: ce,
                children: Tt,
              }),
            })
          );
        }
        function ie(H) {
          return (0, le.Qn)()
            ? (0, t.jsx)(ee, { ...H })
            : (0, t.jsx)(ye, { ...H });
        }
        function ee(H) {
          const { children: ae } = H,
            q = (0, m.useContext)(N);
          (0, T.wT)(
            !!q,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const re = () => q.floating.context.onOpenChange(!1),
            ce = m.useRef(void 0);
          return (
            (0, K.O7)(ce, !0, !0),
            (0, t.jsx)(W.D6, {
              navID: "Popover",
              onCancelButton: re,
              modal: !0,
              navTreeRef: ce,
              children: (0, t.jsx)("div", {
                style: { display: "contents" },
                children: (0, t.jsx)(P.q, { children: ae }),
              }),
            })
          );
        }
        function ye(H) {
          const { children: ae } = H,
            q = (0, m.useContext)(N);
          return (
            (0, T.wT)(
              !!q,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, t.jsx)(k.s3, {
              context: q.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: ae,
            })
          );
        }
        function te(H) {
          const {
            open: ae,
            interactions: q = {},
            width: re,
            maxHeight: ce,
            gutter: ge,
            scroll: Ie,
          } = H;
          let Tt = ae;
          const Dt = (0, _.Pr)(H.presentation),
            Z = w(H, Tt, Dt),
            ve = { enabled: !!q.click },
            mn = typeof q.click == "function" ? q.click(ve) : ve,
            qn = (0, k.kp)(Z.context, mn),
            Gt = { enabled: !!q.focus },
            _n = typeof q.focus == "function" ? q.focus(Gt) : Gt,
            es = (0, k.iQ)(Z.context, _n),
            Kn = { handleClose: (0, k.iB)() },
            cs = typeof q.hover == "function" ? q.hover(Kn) : Kn,
            E = (0, k.Mk)(Z.context, { enabled: !!q.hover, ...cs }),
            Yt = (0, k.s9)(Z.context),
            { getFloatingProps: St, getReferenceProps: pr } = (0, k.bv)([
              qn,
              es,
              E,
              Yt,
            ]);
          return {
            floating: Z,
            getFloatingProps: St,
            getReferenceProps: pr,
            open: Tt,
            presentation: Dt,
            sizing: { width: re, maxHeight: ce, gutter: ge, scroll: Ie },
          };
        }
        function w(H, ae, q) {
          const { onOpenChange: re, placement: ce } = H,
            ge = q === "anchor";
          return (0, k.we)({
            open: ae,
            onOpenChange: re,
            middleware: ge ? ue(H) : [],
            whileElementsMounted: ge ? Q.ll : void 0,
            placement: ce && typeof ce == "object" ? ce.initial : ce,
            strategy: "fixed",
            platform: {
              ...Q.iD,
              getOffsetParent: (Ie) => Ie?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function ue(H) {
          const { gutter: ae = 0, placement: q } = H,
            re = [],
            ce = q && typeof q == "object";
          return (
            ce && q.offset
              ? re.push((0, J.cY)(q.offset))
              : (!ce || q.offset === void 0) && re.push((0, J.cY)(2)),
            ce && q.flip
              ? re.push((0, J.UU)(q.flip))
              : (!ce || q.flip === void 0) && re.push((0, J.UU)()),
            ce && q.shift
              ? re.push((0, J.BN)(q.shift))
              : (!ce || q.shift === void 0) && re.push((0, J.BN)()),
            re.push(
              (0, J.Ej)({
                apply: (ge) => {
                  const { rects: Ie, elements: Tt, availableHeight: Dt } = ge,
                    Z = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((H.scroll && (Z.overflowY = "auto"), H.width)) {
                    case "target": {
                      Z.width = `${Ie.reference.width}px`;
                      break;
                    }
                    case "content": {
                      Z.width = `${Ie.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let mn = Ie.reference.width;
                      Ie.floating.width > mn &&
                        mn < 200 &&
                        (mn = Ie.floating.width),
                        (Z.width = `${mn}px`);
                    }
                  }
                  typeof H.width == "function" &&
                    (Z.width = H.width({
                      unContentWidth: Ie.floating.width,
                      unTargetWidth: Ie.reference.width,
                    }));
                  const ve =
                    typeof ae == "number" ? `${ae}px` : `var(--spacing-${ae})`;
                  typeof H.maxHeight == "function"
                    ? (Z.maxHeight = H.maxHeight({
                        unAvailableHeight: Dt,
                        gutter: ve,
                      }))
                    : typeof H.maxHeight == "number"
                      ? (Z.maxHeight = `min( calc( ${Dt}px - ${ve} ), ${H.maxHeight}px )`)
                      : typeof ae == "number"
                        ? (Z.maxHeight = `${Dt - ae}px`)
                        : (Z.maxHeight = `calc( ${Dt}px - var(--spacing-${ae}) )`),
                    Object.assign(Tt.floating.style, Z),
                    Tt.floating.style.setProperty(
                      "--popover-max-height",
                      Z.maxHeight,
                    );
                },
              }),
            ),
            re
          );
        }
        const me = { Root: L, Anchor: se, Positioner: R, FocusManager: ie };
      },
      31857: (j, oe, i) => {
        "use strict";
        i.d(oe, { I: () => V });
        var t = i(7850),
          m = i(69289),
          k = i(8928),
          Q = i(16619),
          J = i.n(Q);
        function V(z) {
          return (0, t.jsx)("svg", { ...P(z) });
        }
        const K = [
          ...k.L,
          {
            prop: "size",
            responsive: !0,
            className: (z) => Q[`IconSize-${z}`],
          },
          {
            prop: "color",
            className: Q.Color,
            cssProperty: (z) => ["--icon-color", W(z)],
          },
          {
            prop: "hitSlop",
            className: Q.HitSlop,
            cssProperty: (z) => [
              "--hit-slop-custom",
              typeof z == "string" ? z : "",
            ],
          },
          k.h.find(({ prop: z }) => z === "cursor"),
        ];
        function W(z) {
          return !z || z[0] === "#" ? z : (0, m.w7)(z);
        }
        function P(z) {
          const { viewBox: X, ...Y } = z,
            _ = { className: Y.size ? void 0 : Q.IconSizeDefault, ...Y };
          return X && (_.viewBox = T(X)), (0, m.mz)(_, K);
        }
        function T(z) {
          if (z)
            return typeof z == "number"
              ? `0 0 ${z} ${z}`
              : typeof z == "string"
                ? z
                : `0 0 ${z.width} ${z.height}`;
        }
      },
      12204: (j, oe, i) => {
        "use strict";
        i.d(oe, { V: () => Q });
        var t = i(7850),
          m = i(31857);
        const k = {
          up: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function Q(J) {
          const { direction: V = "down" } = J,
            K = k[V];
          return (0, t.jsx)(m.I, {
            ...J,
            viewBox: 20,
            children: (0, t.jsx)("path", {
              transform: K,
              d: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      95994: (j, oe, i) => {
        "use strict";
        i.d(oe, { x: () => T });
        var t = i(7850),
          m = i(70182),
          k = i(64238),
          Q = i.n(k),
          J = i(8928),
          V = i(69289),
          K = i(75180),
          W = i.n(K),
          P = i(3166);
        function T(X) {
          const { as: Y = "div", ref: le, focusable: _, navProps: N, ...L } = X,
            se = (0, P.Qn)(),
            R = (0, V.mz)({ ...L, className: Q()(K.Grid, X.className) }, z),
            ie = _ ?? N?.focusable ?? !!L.onClick,
            ee = (0, t.jsx)(Y, { ref: le, ...R });
          return se
            ? (0, t.jsx)(m.J, {
                "flow-children": "grid",
                ...(N || {}),
                focusable: ie,
                children: ee,
              })
            : ee;
        }
        const z = [
          ...J.h,
          {
            prop: "display",
            responsive: !0,
            className: K.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: K.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: K.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: K.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: K.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: K.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: K.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: K.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: K.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: K.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: K.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: K.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: K.Gap,
            cssProperty: (X) => ["--grid-gap", `var(--spacing-${X})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: K.Gap,
            cssProperty: (X) => ["--grid-gap-x", `var(--spacing-${X})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: K.Gap,
            cssProperty: (X) => ["--grid-gap-y", `var(--spacing-${X})`],
          },
        ];
      },
      57152: (j, oe, i) => {
        "use strict";
        i.d(oe, { D: () => Y });
        var t = i(7850),
          m = i(39049),
          k = i(8928),
          Q = i(15252),
          J = i(69289),
          V = i(90626);
        function K(N) {
          const { depth: L } = useContext(W);
          return jsx(W.Provider, {
            value: { depth: L + 1 },
            children: jsx(Box, { ...N }),
          });
        }
        const W = V.createContext({ depth: 0 });
        function P() {
          return (0, V.useContext)(W).depth;
        }
        var T = i(3877),
          z = i(64238),
          X = i.n(z);
        function Y(N) {
          const { level: L = "auto", className: se, color: R } = N,
            ie = P(),
            ee = _(L, ie);
          return (0, t.jsx)(ee, {
            ...(0, J.mz)(
              { ...N, className: X()((0, T.T)(), m.Heading, se) },
              le,
            ),
          });
        }
        const le = [
          ...Q.U6,
          ...k.L,
          {
            prop: "size",
            responsive: !0,
            className: (N) => m[`HeadingSize-${N}`],
          },
        ];
        function _(N, L) {
          if (N === "auto" && L === 0) return "h1";
          const se = N === "auto" ? L.toString() : N;
          return /^[1-6]$/.test(se)
            ? "h" + se
            : N === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${se}".`,
                ),
                "h1");
        }
      },
      79014: (j, oe, i) => {
        "use strict";
        i.d(oe, { A: () => k, i: () => m });
        var t = i(90626);
        function m(Q, ...J) {
          const V = [],
            K = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let W = 0,
            P;
          for (; (P = K.exec(Q)); ) {
            (W += P[0].length), V.push(P[1]);
            const T = parseInt(P[2]),
              z = P[3] || "",
              X = m(z, ...J),
              le = (T >= 1 && T <= J.length ? J[T - 1] : null)
                ? t.cloneElement(J[T - 1], {}, z ? X : null)
                : z;
            V.push(le);
          }
          return V.push(Q.substr(W)), t.createElement(t.Fragment, null, ...V);
        }
        function k(Q, J = ["b", "i", "br"]) {
          const V = J.join("|"),
            K = [],
            W = new RegExp(
              `(?<before>.*?)<(?<tagname>${V})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let P = 0,
            T;
          for (; (T = W.exec(Q)); ) {
            if (!T.groups) continue;
            if (!T.groups?.endtag) {
              const _ = T.groups.before.length + T.groups.tagname.length + 2;
              (P += _), (W.lastIndex = T.index + _), K.push(T.groups.before);
              const N = T[2],
                L = t.createElement(N);
              K.push(L);
              continue;
            }
            (P += T[0].length), K.push(T.groups.before);
            const z = T.groups.tagname,
              X = T.groups.contents || "";
            let Y = null;
            X && (Y = k(X, J));
            const le = t.createElement(z, {}, Y);
            K.push(le);
          }
          return K.push(Q.slice(P)), t.createElement(t.Fragment, null, ...K);
        }
      },
      76962: (j, oe, i) => {
        "use strict";
        i.d(oe, { y: () => z });
        var t = i(7850),
          m = i(24660),
          k = i(38566),
          Q = i(54130),
          J = i(64238),
          V = i.n(J),
          K = i(90626),
          W = i(3166),
          P = i(88208),
          T = i.n(P);
        const z = Object.assign(X, { Root: Y, Content: _ });
        function X(N) {
          const { children: L, className: se, ...R } = N;
          return (0, t.jsx)(z.Root, {
            ...R,
            children: (0, t.jsx)(z.Content, { className: se, children: L }),
          });
        }
        function Y(N) {
          const {
              onClose: L,
              className: se,
              navID: R,
              children: ie,
              allowScrollBehind: ee,
              ...ye
            } = N,
            [te, w] = K.useState(!1),
            ue = K.useCallback((H) => {
              H &&
                (H.showModal(),
                H.ownerDocument.defaultView &&
                  w(
                    H.ownerDocument.body.scrollHeight >
                      H.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            me = K.useCallback(
              (H) => {
                H.target == H.currentTarget && L("backdropclick");
              },
              [L],
            );
          return (0, t.jsx)(le, {
            navID: R ?? "ModalDialog",
            onClose: L,
            children: (0, t.jsx)("dialog", {
              ref: ue,
              className: V()(P.ModalDialog, !ee && te && P.PreventScroll, se),
              onClose: () => L("onclose"),
              onClick: me,
              ...ye,
              children: (0, t.jsx)(Q.q, { children: ie }),
            }),
          });
        }
        function le(N) {
          const { navID: L, onClose: se, children: R } = N,
            ie = K.useCallback(() => se("cancelbutton"), [se]),
            ee = K.useRef(void 0);
          return (
            (0, m.O7)(ee, !0, !0),
            (0, W.Qn)()
              ? (0, t.jsx)(k.D6, {
                  navID: L ?? "ModalDialog",
                  onCancelButton: ie,
                  modal: !0,
                  navTreeRef: ee,
                  children: R,
                })
              : (0, t.jsx)(t.Fragment, { children: R })
          );
        }
        function _(N) {
          const { className: L, children: se } = N;
          return (0, t.jsx)("div", {
            className: V()(P.ModalDialogContent, L),
            onClick: (R) => R.stopPropagation(),
            children: se,
          });
        }
      },
      47604: (j, oe, i) => {
        "use strict";
        i.d(oe, { s: () => P });
        var t = i(7850),
          m = i(19298),
          k = i(64238),
          Q = i.n(k),
          J = i(36118),
          V = i(76962),
          K = i(5598),
          W = i.n(K);
        function P(T) {
          const {
            onClose: z,
            className: X,
            navID: Y,
            children: le,
            strTitle: _,
            wideMode: N,
            ...L
          } = T;
          return (0, t.jsx)(V.y, {
            onClose: z,
            navID: Y ?? "SimpleModalDialog",
            ...L,
            children: (0, t.jsxs)("div", {
              className: Q()(X, W().SimpleModalDialog, N && W().WideMode),
              children: [
                " ",
                (0, t.jsxs)(m.Z, {
                  className: W().SimpleModalDialogHeader,
                  children: [
                    _ &&
                      (0, t.jsx)("h2", {
                        className: W().SimpleModalDialogTitle,
                        children: _,
                      }),
                    (0, t.jsx)("button", {
                      onClick: (se) => (z("xclick"), se.preventDefault(), !1),
                      className: W().XButton,
                      children: (0, t.jsx)(J.tmm, {}),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: W().SimpleModalContentCtn,
                  children: le,
                }),
              ],
            }),
          });
        }
      },
      27990: (j, oe, i) => {
        "use strict";
        i.d(oe, { W4: () => K, h$: () => P });
        var t = i(7850),
          m = i(90626),
          k = i(72609),
          Q = i(38340);
        function J(T, z) {
          return {
            store_page_asset_url: `${k.TS.BASE_URL_SHARED_CDN}store_item_assets/steam/apps/${T}/%s?t=${z}`,
          };
        }
        const V = m.createContext({ store_page_asset_url: "" });
        function K(T) {
          const z =
            T.store_page_asset_url !== void 0
              ? { store_page_asset_url: T.store_page_asset_url }
              : J(T.appid, T.app_last_modified);
          return (0, t.jsx)(V.Provider, { value: z, children: T.children });
        }
        const W = () => m.useContext(V);
        function P() {
          const { store_page_asset_url: T } = W();
          return m.useCallback(
            (z) => {
              if (z)
                if (z.startsWith(Q.qR + "/")) {
                  const X = z.replace(Q.qR + "/", "");
                  return T.replace("%s", X);
                } else return z;
            },
            [T],
          );
        }
      },
      45497: (j, oe, i) => {
        "use strict";
        i.d(oe, { n: () => ee });
        var t = i(7850),
          m = i(29950),
          k = i(33770),
          Q = i(7487),
          J = i(99412),
          V = i(24660),
          K = i(90626),
          W = i(70187),
          P = i(39239),
          T = i(53113),
          z = i(3166),
          X = i(94162),
          Y = i(27990),
          le = i(33001),
          _ = i.n(le);
        function N(te) {
          return new Q.OJ(new Q.R8());
        }
        function L(te) {
          const w = new Map([
            ...Array.from(W.W4.entries()),
            ["img", { Constructor: ye, autocloses: !1 }],
            ["sup", { Constructor: se, autocloses: !1 }],
            [
              "h6",
              { Constructor: R, autocloses: !1, skipFollowingNewline: !0 },
            ],
          ]);
          return te && w.set("url", { Constructor: ie, autocloses: !1 }), w;
        }
        function se(te) {
          return (0, t.jsx)("sup", { children: te.children });
        }
        function R(te) {
          return (0, t.jsx)("h6", { children: te.children });
        }
        function ie(te) {
          let w = (0, m.J)(W.j$(te.args));
          return (
            !w &&
              typeof te.children == "string" &&
              (0, T.DZ)(te.children) &&
              (w = (0, m.J)(te.children)),
            w
              ? (0, t.jsx)(V.Ii, { href: w, children: te.children })
              : te.children || ""
          );
        }
        function ee(te) {
          const { text: w, languageOverride: ue, bBypassLinkFilter: me } = te,
            [H] = (0, K.useState)(new k.B(L(me), N, ue || J.Bhc));
          return (0, t.jsx)("div", {
            className: _().StorePageBBCode,
            children: H.ParseBBCode(w, {}, !0),
          });
        }
        function ye(te) {
          const { showErrorInfo: w } = te.context,
            ue = (0, Y.h$)(),
            me = te.args.alt ?? "";
          if (!!te.args.mp4 || te.args.webm) {
            const ae = ue(te.args.webm),
              q = ue(te.args.mp4),
              re = ue(te.args.poster),
              ce = (0, X.Wr)() || (0, X.Ae)(),
              ge = (Ie) => {
                const Tt = Ie.currentTarget;
                Tt.paused ? Tt.play() : Tt.pause();
              };
            return (0, t.jsxs)("video", {
              className: _().StoreVideo,
              poster: re,
              "aria-label": me,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              onClick: ge,
              children: [
                ae &&
                  !ce &&
                  (0, t.jsx)("source", { src: ae, type: "video/webm" }),
                q &&
                  !z.TS.IN_CLIENT &&
                  (0, t.jsx)("source", { src: q, type: "video/mp4" }),
              ],
            });
          } else {
            const ae = ue(te.args.src);
            return w
              ? (0, t.jsx)(P.i, { className: _().StoreImage, src: ae })
              : (0, t.jsx)("img", {
                  className: _().StoreImage,
                  src: ae,
                  alt: me,
                });
          }
        }
      },
      21079: (j, oe, i) => {
        "use strict";
        i.d(oe, {
          Dk: () => le,
          Mu: () => L,
          Y8: () => se,
          ws: () => _,
          zo: () => N,
        });
        var t = i(72604),
          m = i(35038),
          k = i(83153),
          Q = i(9682),
          J = i(41735),
          V = i.n(J),
          K = i(80902),
          W = i(75233),
          P = i(68312),
          T = i(77187),
          z = i(3166),
          X = i(90626);
        function Y(ee) {
          return ["AppRelevanceStore", "FriendsRecommended", ee];
        }
        function le(ee) {
          const ye = (0, P.KV)();
          return (0, K.I)({
            queryKey: Y(ee),
            queryFn: () => R(ye, ee),
            enabled: z.iA.logged_in,
          });
        }
        function _() {
          const ee = (0, W.jE)();
          return X.useCallback(
            (ye, te) => {
              ee.setQueryData(Y(ye), te);
            },
            [ee],
          );
        }
        function N(ee) {
          return (0, K.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", ee],
            queryFn: () => ie(ee),
            enabled: z.iA.logged_in,
          });
        }
        function L() {
          return (0, T.PG)("App Relevance Store Top Sellers", {
            sort: k.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function se() {
          const { data: ee } = L();
          return ee;
        }
        async function R(ee, ye) {
          const te = m.w.Init(Q.KV);
          te.Body().set_appid(ye);
          const w = await Q.YK.GetFriendsRecommendedApp(ee, te),
            ue = w.GetEResult();
          if (ue == t.R) return w.Body().toObject();
          throw `Error ${ue} failed to call GetFriendsRecommendedApp ${ye}`;
        }
        async function ie(ee) {
          let ye = { appid: ee },
            te = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const ue = (
            await V().get(
              `${z.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: ye, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            ue &&
              ue.success == t.R &&
              (ue.results.similar_played_apps &&
                (te.arrSimilarPlayedApps = ue.results.similar_played_apps.map(
                  (me) => ({
                    appid: me.appid,
                    playtimeForever: me.playtime_forever,
                  }),
                )),
              ue.results.recommended_by_ir && (te.bRecommendedByIR = !0)),
            te
          );
        }
      },
      25509: (j, oe, i) => {
        "use strict";
        i.d(oe, { k: () => K });
        var t = i(14947),
          m = i(98609),
          k = Object.defineProperty,
          Q = Object.getOwnPropertyDescriptor,
          J = (W, P, T, z) => {
            for (
              var X = z > 1 ? void 0 : z ? Q(P, T) : P, Y = W.length - 1, le;
              Y >= 0;
              Y--
            )
              (le = W[Y]) && (X = (z ? le(P, T, X) : le(X)) || X);
            return z && X && k(P, T, X), X;
          };
        class V {
          m_ItemDefinition = null;
          m_ItemKV = null;
          constructor(P, T) {
            (0, t.Gn)(this), this.LoadItemDefinition(P, T);
          }
          LoadItemDefinition(P, T) {
            P
              ? (this.m_ItemDefinition = {
                  item_type: P.item_type,
                  item_class: P.item_class,
                  item_description: P.item_description,
                  editor_accountid: P.editor_accountid,
                  deleted: P.deleted,
                  active: P.active,
                  appid: P.appid,
                  item_image_composed: P.item_image_composed,
                  item_image_large: P.item_image_large,
                  item_image_small: P.item_image_small,
                  item_key_values: P.item_key_values,
                  item_movie_mp4: P.item_movie_mp4,
                  item_movie_mp4_small: P.item_movie_mp4_small,
                  item_internal_name: P.item_name,
                  item_series: P.item_series,
                  item_movie_webm: P.item_movie_webm,
                  item_movie_webm_small: P.item_movie_webm_small,
                  item_image_composed_foil: P.item_image_composed_foil,
                  item_last_changed: P.item_last_changed,
                  broadcast_channel_id: P.broadcast_channel_id,
                })
              : (this.m_ItemDefinition = T),
              (this.m_ItemKV = JSON.parse(
                this.m_ItemDefinition.item_key_values,
              ));
          }
          get AppID() {
            return this.m_ItemDefinition.appid;
          }
          get BIsActive() {
            return this.m_ItemDefinition.active;
          }
          get ItemID() {
            return this.m_ItemDefinition.item_type;
          }
          get BIsDeleted() {
            return this.m_ItemDefinition.deleted;
          }
          get ItemClass() {
            return this.m_ItemDefinition.item_class;
          }
          get CommunityItemDef() {
            return this.m_ItemDefinition;
          }
        }
        J([t.sH], V.prototype, "m_ItemDefinition", 2),
          J([t.sH], V.prototype, "m_ItemKV", 2);
        function K(W, P) {
          return `${m.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${W}/${P}`;
        }
      },
      63547: (j, oe, i) => {
        "use strict";
        i.d(oe, { QW: () => _, VZ: () => le, g: () => X, kF: () => z });
        var t = i(72604),
          m = i(35038),
          k = i(55051),
          Q = i(72609),
          J = i(80902),
          V = i(75233),
          K = i(51614),
          W = i(90626),
          P = i(68312);
        const T = "PlaytestInvites";
        function z() {
          const N = (0, P.KV)();
          return (0, J.I)({
            queryKey: [T],
            queryFn: async () => {
              const L = m.w.Init(k.rX),
                se = await k.BX.GetInvites(N, L);
              if (se.GetEResult() != t.R)
                throw new Error(
                  `Error from usePlaytestInvite: ${se.GetEResult()} ${se.GetErrorMessage()}`,
                );
              return se.Body()?.toObject().invites ?? [];
            },
          });
        }
        function X(N) {
          const L = (0, P.KV)(),
            se = (0, V.jE)();
          return (0, K.n)({
            mutationFn: async (R) => {
              const ie = m.w.Init(k.q);
              ie.Body().add_invite_ids(N),
                ie.Body().set_status(R.bAccept ? k.b1.T5 : k.b1.eh);
              const ee = await k.BX.UpdateInvites(L, ie);
              if (ee.GetEResult() != t.R)
                throw {
                  result: ee.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${ee.GetErrorMessage()} ( ${ee.GetEResult()} )`,
                };
            },
            onSuccess: (R, ie) => {
              se.setQueryData([T], (ee) =>
                ee.map((ye) =>
                  ye.invite_id === N
                    ? { ...ye, status: ie.bAccept ? k.b1.T5 : k.b1.eh }
                    : ye,
                ),
              );
            },
            onError: () => {
              se.invalidateQueries({ queryKey: [T] });
            },
          });
        }
        function Y(N) {
          return ["PlaytestUserStatus", N];
        }
        function le(N) {
          const L = (0, P.KV)();
          return (0, J.I)({
            queryKey: Y(N),
            queryFn: async () => {
              if (Q.iA.logged_in) {
                const se = m.w.Init(k.eW);
                N && se.Body().set_appid(N);
                const R = await k.BX.GetUserStatus(L, se);
                if (R.GetEResult() != t.R)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${R.GetEResult()} ${R.GetErrorMessage()}`,
                  );
                return R.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function _() {
          const N = (0, V.jE)();
          return W.useCallback(
            (L, se) => {
              N.setQueryData(Y(L), se);
            },
            [N],
          );
        }
      },
      90114: (j, oe, i) => {
        "use strict";
        i.r(oe),
          i.d(oe, {
            OpenInDesktopClient: () => P,
            default: () => z,
            useOpenWebInSteamClient: () => T,
          });
        var t = i(7850),
          m = i(90626),
          k = i(25792),
          Q = i(97824),
          J = i.n(Q),
          V = i(3166),
          K = i(97996),
          W = i(18210);
        const P = (0, k.Nr)(function (Y) {
          const { fnOpenInSteamClient: le } = T();
          return (0, t.jsx)("div", {
            className: Q.OpenInBannerContainer,
            children: (0, t.jsxs)("div", {
              className: Q.OpenInBannerContent,
              children: [
                (0, t.jsx)("div", {
                  className: Q.BannerButtonContainer,
                  children: (0, t.jsx)("div", {
                    onClick: le,
                    className: Q.BannerButton,
                    children: (0, W.we)(
                      "#OpenInDesktopAppBanner_OpenAppButton",
                    ),
                  }),
                }),
                (0, t.jsx)("div", {
                  className: Q.BannerMessage,
                  children: (0, t.jsxs)("div", {
                    className: Q.BannerTitle,
                    children: [
                      (0, t.jsx)("b", {
                        children: (0, W.we)(
                          "#OpenInDesktopAppBanner_NotSignedIn",
                        ),
                      }),
                      (0, t.jsx)("br", {}),
                      (0, W.we)("#OpenInDesktopAppBanner_Body"),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
        function T() {
          return {
            fnOpenInSteamClient: m.useCallback(() => {
              let Y = `${(0, V.yl)()}//openurl/`;
              const le = (0, K.VY)("browserid");
              if (le) {
                const _ = new URL(window.location.href),
                  N = new URLSearchParams(_.search);
                N.set("utm_bid", le),
                  (Y += _.origin + _.pathname + "?" + N.toString() + _.hash);
              } else Y += window.location.href;
              window.location.href = Y;
            }, []),
          };
        }
        const z = P;
      },
      62038: (j, oe, i) => {
        "use strict";
        i.r(oe),
          i.d(oe, {
            AccessibilityFeatureDisplay: () => _,
            AccessibilityFeaturesFromCategories: () => le,
            AccessibilityIcon: () => N,
          });
        var t = i(7850),
          m = i(90626),
          k = i(18210),
          Q = i(3166),
          J = i(63404),
          V = i.n(J),
          K = i(24660),
          W = i(99412);
        const P = {
            bAccessibilityDifficultyLevels:
              "#Accessibility_Feature_AdjustableDifficulty",
            bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
            bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
            bAccessibilityBackgroundVolumeControls:
              "#Accessibility_Feature_CustomVolumeControls",
            bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
            bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
            bAccessibilityResizableUI:
              "#Accessibility_Feature_AdjustableTextSize",
            bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
            bAccessibilityColorAlternatives:
              "#Accessibility_Feature_ColorAlternatives",
            bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
            bAccessibilityKeyboardOnlyOption:
              "#Accessibility_Feature_KeyboardOnlyOption",
            bAccessibilityMouseOnlyOption:
              "#Accessibility_Feature_MouseOnlyOption",
            bAccessibilityTouchOnlyOption:
              "#Accessibility_Feature_TouchOnlyOption",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "#Accessibility_Feature_WithoutQuickTimeEvents",
            bAccessibilityChatTexttoSpeech:
              "#Accessibility_Feature_TextToSpeech",
            bAccessibilityChatSpeechtoText:
              "#Accessibility_Feature_SpeechToText",
            bAccessibilityPlayableAtYourOwnPace:
              "#Accessibility_Feature_PlayableAtYourOwnPace",
            bAccessibilityPlayableWithoutVision:
              "#Accessibility_Feature_PlayableWithoutVision",
            bAccessibilityContrastControls:
              "#Accessibility_Feature_ContrastControls",
          },
          T = {
            bAccessibilityDifficultyLevels: "adjustable_difficulty",
            bAccessibilitySaveAnytime: "save_anytime",
            bAccessibilityNarratedMenus: "narrated_game_menus",
            bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
            bAccessibilityStereoSound: "stereo_sound",
            bAccessibilitySurroundSound: "surround_sound",
            bAccessibilityResizableUI: "adjustable_text_size",
            bAccessibilitySubtitles: "subtitle_options",
            bAccessibilityColorAlternatives: "color_alternatives",
            bAccessibilityCameraComfort: "camera_comfort",
            bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
            bAccessibilityMouseOnlyOption: "mouse_only_option",
            bAccessibilityTouchOnlyOption: "touch_only_option",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "playable_without_timed_input",
            bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
            bAccessibilityChatSpeechtoText: "chat_speech_to_text",
            bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
            bAccessibilityPlayableWithoutVision: "playable_without_vision",
            bAccessibilityContrastControls: "contrast_controls",
          };
        var z = ((R) => (
          (R.Gameplay = "gameplay"),
          (R.Visual = "visual"),
          (R.Audio = "audio"),
          (R.Input = "input"),
          R
        ))(z || {});
        const X = {
            bAccessibilityDifficultyLevels: "gameplay",
            bAccessibilitySaveAnytime: "gameplay",
            bAccessibilityNarratedMenus: "audio",
            bAccessibilityBackgroundVolumeControls: "audio",
            bAccessibilityStereoSound: "audio",
            bAccessibilitySurroundSound: "audio",
            bAccessibilityResizableUI: "visual",
            bAccessibilitySubtitles: "visual",
            bAccessibilityColorAlternatives: "visual",
            bAccessibilityCameraComfort: "visual",
            bAccessibilityPlayableWithoutVision: "visual",
            bAccessibilityContrastControls: "visual",
            bAccessibilityKeyboardOnlyOption: "input",
            bAccessibilityMouseOnlyOption: "input",
            bAccessibilityTouchOnlyOption: "input",
            bAccessibilityPlayableWithoutQuicktimeEvents: "input",
            bAccessibilityChatTexttoSpeech: "input",
            bAccessibilityChatSpeechtoText: "input",
            bAccessibilityPlayableAtYourOwnPace: "input",
          },
          Y = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function le(R) {
          return {
            bAccessibilityResizableUI: R.includes(W.mWc),
            bAccessibilitySubtitles: R.includes(W.sCr),
            bAccessibilityColorAlternatives: R.includes(W.eEM),
            bAccessibilityCameraComfort: R.includes(W.YAh),
            bAccessibilityBackgroundVolumeControls: R.includes(W.Tby),
            bAccessibilityStereoSound: R.includes(W.a2r),
            bAccessibilitySurroundSound: R.includes(W.Obu),
            bAccessibilityNarratedMenus: R.includes(W.C0f),
            bAccessibilityChatSpeechtoText: R.includes(W.FpT),
            bAccessibilityChatTexttoSpeech: R.includes(W.r_E),
            bAccessibilityPlayableWithoutQuicktimeEvents: R.includes(W.eY9),
            bAccessibilityKeyboardOnlyOption: R.includes(W.TQL),
            bAccessibilityMouseOnlyOption: R.includes(W.beA),
            bAccessibilityTouchOnlyOption: R.includes(W.Pw_),
            bAccessibilityDifficultyLevels: R.includes(W.j2d),
            bAccessibilitySaveAnytime: R.includes(W.Rnx),
            bAccessibilityPlayableAtYourOwnPace: R.includes(W.eAR),
            bAccessibilityPlayableWithoutVision: R.includes(W.tIg),
            bAccessibilityContrastControls: R.includes(W.vVO),
          };
        }
        function _(R) {
          const [ie, ee] = (0, m.useState)(R.initialOpen ?? !1),
            ye = m.useId(),
            te = Object.entries(R.features)
              .filter(([me, H]) => H)
              .map(([me]) => me);
          if (te.length === 0) return null;
          const w = {};
          te.forEach((me) => {
            const H = X[me];
            (w[H] ??= []), w[H].push(me);
          });
          const ue = Object.keys(w).length > 1;
          return (0, t.jsxs)("details", {
            className: V().Details,
            open: ie,
            onToggle: (me) => ee(me.currentTarget.open),
            children: [
              (0, t.jsxs)(K.f_, {
                className: V().Summary,
                children: [
                  (0, t.jsx)("div", {
                    className: V().ImageContainer,
                    children: (0, t.jsx)(N, {
                      className: V().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, t.jsxs)("span", {
                    className: V().FeatureNameContainer,
                    id: ye,
                    children: [
                      (0, t.jsx)("span", {
                        className: V().FeatureName,
                        children: ie
                          ? (0, k.we)("#AccessibilityFeatures")
                          : (0, k.we)(
                              "#AccessibilityFeaturesWithCount",
                              te.length,
                            ),
                      }),
                      (0, t.jsx)("a", {
                        className: V().InfoLink,
                        href: `${Q.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("ul", {
                className: V().FeatureList,
                "aria-labelledby": ye,
                children: [
                  ue &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        w.gameplay &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "gameplay",
                              features: w.gameplay,
                              open: ie,
                            }),
                          }),
                        w.visual &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "visual",
                              features: w.visual,
                              open: ie,
                            }),
                          }),
                        w.audio &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "audio",
                              features: w.audio,
                              open: ie,
                            }),
                          }),
                        w.input &&
                          (0, t.jsx)("li", {
                            children: (0, t.jsx)(L, {
                              group: "input",
                              features: w.input,
                              open: ie,
                            }),
                          }),
                      ],
                    }),
                  !ue &&
                    te.map((me) =>
                      (0, t.jsx)(
                        "li",
                        { children: (0, t.jsx)(se, { feature: me, open: ie }) },
                        me,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function N(R) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...R,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function L(R) {
          const ie = m.useId();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)("span", {
                className: V().GroupLabel,
                id: ie,
                children: (0, k.we)(Y[R.group]),
              }),
              (0, t.jsx)("ul", {
                className: V().FeatureGroupItems,
                "aria-labelledby": ie,
                children: R.features.map((ee) =>
                  (0, t.jsx)(
                    "li",
                    { children: (0, t.jsx)(se, { feature: ee, open: R.open }) },
                    ee,
                  ),
                ),
              }),
            ],
          });
        }
        function se(R) {
          return (0, t.jsx)(K.Ii, {
            href: `${Q.TS.STORE_BASE_URL}category/${T[R.feature]}`,
            className: V().InfoRow,
            focusable: R.open,
            children: (0, t.jsx)("span", {
              className: V().FeatureNameContainer,
              children: (0, t.jsx)("span", {
                className: V().FeatureName,
                children: (0, k.we)(P[R.feature]),
              }),
            }),
          });
        }
      },
      61711: (j, oe, i) => {
        "use strict";
        i.r(oe), i.d(oe, { default: () => X });
        var t = i(7850),
          m = i(54130),
          k = i(19298),
          Q = i(20169),
          J = i(97525),
          V = i(18210),
          K = i(3166),
          W = i(1205),
          P = i.n(W),
          T = i(94502),
          z = i(36707);
        function X(Y) {
          const {
              title: le,
              navKey: _,
              seeAllLink: N,
              appIDs: L,
              sortOrder: se,
              scorePenaltyIfOwned: R,
              capsuleSize: ie,
              bFullWidth: ee,
            } = Y,
            ye = (0, K.Qn)(),
            { bShowSeeMoreHint: te, panelProps: w } = (0, J.i)(N);
          return (0, t.jsx)(k.Z, {
            className: (0, z.A)(P().StoreItemsCarousel, ee && P().FullWidth),
            navEntryPreferPosition: Q.iU.PREFERRED_CHILD,
            ...w,
            children: (0, t.jsxs)(m.q, {
              children: [
                (0, t.jsxs)("div", {
                  className: P().Header,
                  children: [
                    (0, t.jsx)("div", { className: P().Title, children: le }),
                    !ye && (0, t.jsx)(T.H, { url: N }),
                    ye &&
                      (0, t.jsx)(J.o, {
                        label: (0, V.we)("#StoreApp_SeeAll"),
                        shown: te,
                      }),
                  ],
                }),
                (0, t.jsx)(k.Z, {
                  preferredFocus: !0,
                  children: (0, t.jsx)(T._, {
                    navKey: _,
                    classes: P().StorePageCarousel,
                    appIDs: L,
                    maxItemCount: 4,
                    sortOrder: se,
                    scorePenaltyIfOwned: R,
                    capsuleSize: ie,
                  }),
                }),
              ],
            }),
          });
        }
      },
      94502: (j, oe, i) => {
        "use strict";
        i.d(oe, { H: () => w, _: () => ee });
        var t = i(7850),
          m = i(24660),
          k = i(78192),
          Q = i(90626),
          J = i(24805),
          V = i(18994),
          K = i(6469),
          W = i(10142),
          P = i(10349),
          T = i(84676),
          z = i(36707),
          X = i(18210),
          Y = i(3166),
          le = i(68538),
          _ = i(96117),
          N = i(89524),
          L = i.n(N);
        const se = -1,
          R = parseInt(L().strScrollSnapCarouselItemHeight),
          ie = 250;
        function ee(ue) {
          const {
              navKey: me,
              classes: H,
              appIDs: ae,
              sortOrder: q,
              scorePenaltyIfOwned: re,
              capsuleSize: ce,
              maxItemCount: ge,
              mapAppToCreatorClan: Ie,
              strFeatureFirstAppMsg: Tt,
              setNumberVisibleItems: Dt,
            } = ue,
            Z = (0, V.a4)(910),
            ve = (0, Y.Qn)(),
            [mn, qn] = (0, K.L2)(),
            [Gt, _n] = Q.useState(ae),
            es = (0, T.zX)(ae, J.Xh),
            [Kn, cs] = Q.useState(null);
          Q.useEffect(() => {
            if (es == T.Sq) return;
            const Yt = ae.filter(
              (St) => !W.A.Get().BIsStoreItemMissing(St, k.c6.qI),
            );
            if (Tt && Z && !ve && Yt.length > 0 && Yt[0] == ae[0]) {
              const St = [Yt[0], se, ...Yt.slice(1)];
              _n(St), cs(Tt), Dt?.(St.length);
            } else _n(Yt), Dt?.(Yt.length);
          }, [ae, ve, Z, es, Dt, Tt]);
          const E = ve;
          return (0, t.jsx)(le.F, {
            className: (0, z.A)(H, {
              SaleSectionCarousel: !0,
              [L().Carousel]: !0,
            }),
            visibleElements: ge,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderHeight: R,
            lazyRenderPlaceholderWidth: ie,
            gap: 12,
            hideArrows: !1,
            screenIsWide: Z,
            navKey: me,
            bForceSimpleCarousel: E,
            children: te(qn, Gt, q ?? "none", re ?? 3).map((Yt, St) =>
              (0, t.jsx)(
                ye,
                {
                  appID: Yt,
                  size: ce,
                  creatorClanAccountID: Ie?.get(Yt),
                  strFeaturingMsg: St == 0 && Kn ? Kn : void 0,
                },
                Yt,
              ),
            ),
          });
        }
        function ye(ue) {
          const {
              appID: me,
              size: H,
              creatorClanAccountID: ae,
              strFeaturingMsg: q,
            } = ue,
            [re] = (0, T.G6)(me, k.c6.qI, J.Xh);
          if (me == se)
            return (0, t.jsx)("div", {
              className: (0, z.A)({
                [L().Capsule]: !0,
                [L().Small]: H == "small",
              }),
            });
          if (!re)
            return (0, t.jsx)("div", {
              className: (0, z.A)(L().Capsule, L().Placeholder),
            });
          const ce = (0, P._4)(re.GetStoreItemType(), re.GetAppType()),
            ge = { id: re.GetID(), type: ce },
            Ie = !!q;
          return (0, t.jsx)("div", {
            className: (0, z.A)({
              [L().Capsule]: !0,
              [L().TwoWide]: Ie,
              [L().Small]: H == "small",
            }),
            children: (0, t.jsx)(_.W, {
              capsule: ge,
              imageType: "header",
              bHidePlatforms: !0,
              bHideStoreHover: Ie,
              creatorAccountID: ae,
              strDoubleCapsuleMessage: Ie ? (0, X.we)(q) : void 0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function te(ue, me, H, ae) {
          const q = Q.useMemo(
              () => me.filter((ce) => !ue.BIsGameIgnored(ce)),
              [me, ue],
            ),
            re = Q.useMemo(
              () => Array.from({ length: q.length }, () => Math.random()),
              [q.length],
            );
          return H == "shuffle"
            ? q
                .map((ce, ge) => {
                  const Ie =
                    (ue.BIsGameOwned(ce) ? ae : 0) +
                    (Math.sqrt(ge) + 2) * re[ge] +
                    Math.sqrt(ge);
                  return { id: ce, score: Ie };
                })
                .sort((ce, ge) => ce.score - ge.score)
                .map((ce) => ce.id)
            : H == "scored"
              ? q
                  .map((ce, ge) => ({
                    id: ce,
                    score: ue.BIsGameOwned(ce) ? ae + ge : ge,
                  }))
                  .sort((ce, ge) => ce.score - ge.score)
                  .map((ce) => ce.id)
              : q;
        }
        function w(ue) {
          const { url: me } = ue;
          return me
            ? (0, t.jsx)(m.Ii, {
                href: me,
                className: (0, z.A)(
                  L().SeeAllLink,
                  "btnv6_grey_black btn_medium",
                ),
                children: (0, t.jsx)("span", {
                  children: (0, X.we)("#StoreApp_SeeAll"),
                }),
              })
            : void 0;
        }
      },
      98190: (j, oe, i) => {
        "use strict";
        i.r(oe),
          i.d(oe, {
            AppGameInterestCacheInit: () => Zo,
            AppStoreBrowseCacheInit: () => Jo,
            default: () => Uh,
          });
        var t = i(7850),
          m = i(90626),
          k = i(65329),
          Q = i(72849),
          J = i(7582),
          V = i(53025),
          K = i(71157),
          W = i(90537),
          P = i(24660),
          T = i(19298),
          z = i(20169),
          X = i(95174),
          Y = i(39905),
          le = i(77495),
          _ = i(12037),
          N = i(36118),
          L = i(18210);
        function se(s) {
          return (0, t.jsxs)("div", {
            className: _.LatestUpdateButtonCtn,
            children: [
              (0, t.jsx)("div", {
                className: _.LatestUpdateIcon,
                children: (0, t.jsx)(N.UTF, { role: "presentation" }),
              }),
              (0, t.jsx)(P.ml, {
                className: _.LatestUpdateButton,
                onClick: s.onClick,
                children: Y.Z.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, L._l)(s.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function R(s) {
          const { nUpdateTime: e, announcementGID: n, onClick: r } = s,
            a = n ? le.O3.GetClanEventFromAnnouncementGID(n) : null,
            o = X.u;
          return (0, t.jsxs)("div", {
            className: _.Container,
            children: [
              (0, t.jsxs)("h2", {
                children: [
                  (0, L.we)("#EventBrowse_LastUpdateDate", (0, L._l)(e)),
                  (0, t.jsx)(P.ml, {
                    className: _.SectionButton,
                    onClick: (c) => {
                      r?.(), c.stopPropagation(), c.preventDefault();
                    },
                    children: (0, L.we)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!a &&
                (0, t.jsx)(T.Z, {
                  className: _.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: z.iU.PREFERRED_CHILD,
                  children: (0, t.jsx)(o, {
                    event: a,
                    onClick: (c) => {
                      r?.(), c.stopPropagation(), c.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var ie = i(54130),
          ee = i(56492),
          ye = i(33902),
          te = i(71568),
          w = i(3166);
        const ue = 500;
        function me(s) {
          const {
              strClassName: e,
              rgEvents: n,
              fnEventShowModal: r,
              elPostRowElement: a,
              bViewAllShowInfiniteScroll: o,
              nSummaryMaxLength: c,
            } = s,
            d = (0, ye.d)(),
            u = (0, te.R7)(),
            g = (0, w.Qn)();
          let f = 2,
            h = ue + 1;
          return (
            u.ownerWindow.window
              ? (h = u.ownerWindow.window.innerWidth)
              : d.viewportWidth && (h = d.viewportWidth.value),
            (f = h <= ue ? 1 : 2),
            n && n.length == 0 && !a
              ? null
              : (0, t.jsxs)(T.Z, {
                  className: e,
                  "flow-children": "row",
                  children: [
                    !!n &&
                      n.length > 0 &&
                      (0, t.jsx)("div", {
                        className: _.Container,
                        children: (0, t.jsxs)(ie.q, {
                          children: [
                            (0, t.jsxs)("h2", {
                              children: [
                                Y.Z.Localize("#EventBrowse_RecentEvents"),
                                !g &&
                                  !!n &&
                                  (0, t.jsx)(t.Fragment, {
                                    children:
                                      o && r
                                        ? (0, t.jsx)(P.ml, {
                                            className: _.SectionButton,
                                            onClick: () => r(n[0]),
                                            children: Y.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, t.jsx)(ee.tj, {
                                            eventModel: n[0],
                                            route: ee.PH.k_eViewWebSiteHub,
                                            className: _.SectionButton,
                                            children: Y.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          }),
                                  }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: _.EventsSummariesCtn,
                              children: n.slice(0, f).map((x) => {
                                const v =
                                  r && !(0, ee.sY)()
                                    ? (I) => {
                                        r(x),
                                          I.stopPropagation(),
                                          I.preventDefault();
                                      }
                                    : void 0;
                                return (0, t.jsx)(
                                  X.u,
                                  {
                                    event: x,
                                    onClick: v,
                                    nSummaryMaxLength: c,
                                  },
                                  x.GID,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                    a,
                  ],
                })
          );
        }
        var H = i(49984),
          ae = i(19188),
          q = i(96538),
          re = i(30096);
        function ce(s) {
          const {
              trackingLocation: e,
              strClassName: n,
              bViewAllShowInfiniteScroll: r,
            } = s,
            [a, o, c] = (0, re.uD)(),
            [d, u] = (0, m.useState)(null),
            [g, f] = (0, m.useState)(void 0),
            h = (0, W.Y)(),
            x = (0, m.useCallback)(() => {
              u(null), c();
            }, [c]),
            v = (0, m.useCallback)(
              (Be) => {
                e &&
                  Be &&
                  Be.BIsPartnerEvent() &&
                  h.MarkEventRead(Be.GID, Be.clanSteamID.GetAccountID(), e) &&
                  h.Flush(),
                  u(Be),
                  f(void 0),
                  o();
              },
              [e, h, o],
            ),
            { last_update_event: I, rgEvents: B } = ge({
              ...s,
              fnEventShowModal: v,
            }),
            A = (0, m.useCallback)(() => {
              const {
                event_gid: Be,
                announcement_gid: sn,
                clan_account_id: Kt,
              } = I;
              e && Be && h.MarkEventRead(Be, Kt, e) && h.Flush(),
                f(sn),
                u(null),
                o();
            }, [I, o, h, e]);
          (0, m.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (Be, sn) => {
                f(sn), u(null), f(sn), o();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [o],
          );
          const S = (0, w.Qn)(),
            D = !!I && !!I.rtime,
            $ =
              D && !!I.announcement_gid && (!B || B.length == 0)
                ? I.announcement_gid
                : void 0;
          let G;
          return (
            D && $
              ? (G = (0, t.jsx)(R, {
                  nUpdateTime: I.rtime,
                  announcementGID: $,
                  onClick: A,
                }))
              : D &&
                !$ &&
                !S &&
                (G = (0, t.jsx)(se, { nUpdateTime: I.rtime, onClick: A })),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(q.EN, {
                  active: a,
                  children: (0, t.jsx)(Tt, {
                    ...s,
                    announcementGID: g || d?.AnnouncementGID,
                    eventModel: d,
                    closeModal: x,
                  }),
                }),
                (0, t.jsx)(me, {
                  elPostRowElement: G,
                  rgEvents: B,
                  fnEventShowModal: v,
                  bViewAllShowInfiniteScroll: r,
                  strClassName: n,
                }),
              ],
            })
          );
        }
        function ge(s) {
          const {
              appid: e,
              event_customization: n,
              partnerEventStore: r,
              trackingLocation: a,
              fnEventShowModal: o,
            } = s,
            [c, d] = (0, m.useState)(null),
            [u, g] = (0, m.useState)(null),
            f = (0, W.Y)(),
            [h] = (0, K.Q)("emgid", void 0),
            [x] = (0, K.Q)("announce_gid", void 0);
          return (
            (0, m.useEffect)(() => {
              const v = (0, H.v)("EventWebRowEmbed");
              let I = !1;
              if (Ie(v)) {
                (I = v.bPreLoaded), d(v.last_update_event);
                const B = [];
                v.announcementGIDList.forEach((A) => {
                  const S = le.O3.GetClanEventFromAnnouncementGID(A);
                  S && B.push(S);
                }),
                  g(B);
              }
              I ||
                (async () => {
                  const A = await r.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    e,
                    0,
                    2,
                    n,
                  );
                  g(A),
                    a &&
                      A &&
                      A.length > 0 &&
                      (A.filter((S) => S.BIsPartnerEvent()).forEach((S) =>
                        f.MarkEventShown(
                          S.GID,
                          S.clanSteamID.GetAccountID(),
                          a,
                        ),
                      ),
                      f.Flush());
                })();
            }, [e, n, o, r, f, a]),
            (0, m.useEffect)(() => {
              if (u != null && (h || x)) {
                const v = u.find((I) => I.GID === h || I.AnnouncementGID == x);
                v
                  ? o(v)
                  : (async () => {
                      const B = h
                        ? await r.LoadPartnerEventFromClanEventGID(e, h, 0)
                        : await r.LoadPartnerEventFromAnnoucementGID(e, x, 0);
                      B && g([...u, B]);
                    })();
              }
            }, [h, x, u, o, g, r, e]),
            { last_update_event: c, rgEvents: u }
          );
        }
        function Ie(s) {
          const e = s;
          return e && typeof e == "object"
            ? e.bPreLoaded !== void 0 &&
                typeof e.bPreLoaded == "boolean" &&
                Array.isArray(e.announcementGIDList)
            : !1;
        }
        function Tt(s) {
          const {
              appid: e,
              partnerEventStore: n,
              trackingLocation: r,
              announcementGID: a,
              eventModel: o,
              closeModal: c,
            } = s,
            d = (0, w.Qn)();
          return (0, t.jsx)(ae.N, {
            className: d ? void 0 : _.StoreHeaderAdjust,
            eventClassName: d ? _.GamePadUIWidthAdjust : void 0,
            appid: e,
            trackingLocation: r,
            announcementGID: a,
            partnerEventStore: n,
            eventModel: o ?? void 0,
            closeModal: c,
          });
        }
        function Dt(s) {
          const e = (0, J.s4)(),
            n = new Date(e.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            r = Math.floor(n.getTime() / 1e3),
            { appid: a } = s;
          return (0, t.jsx)(ce, {
            appid: a,
            partnerEventStore: V.$.Get(),
            event_customization: {
              rtime_oldestevent: r,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [k.G$._C],
            },
            strClassName: "early_access_announcements",
            trackingLocation: Q.Tc.j$,
          });
        }
        var Z = i(99412),
          ve = i(64868),
          mn = i(41735),
          qn = i.n(mn),
          Gt = i(29522),
          _n = i(58483),
          es = i(82385),
          Kn = i(29245),
          cs = i(27284),
          E = i(40358),
          Yt = i(18057),
          St = i(6019);
        function pr(s) {
          const e = (0, m.useRef)(null),
            n = (0, _n.LJ)(),
            r = Number(s.appID),
            a = (0, Gt.$5)(r),
            { data: o } = (0, E.J$)(a),
            [c, d] = (0, m.useState)(null);
          (0, m.useEffect)(
            () => (
              (async () => {
                const I = qn().CancelToken.source();
                e.current = I.cancel;
                const B = {
                    exclude_tags: ["steam_game_festival_artist_statement"],
                    require_tags: ["steam_game_festival_broadcast"],
                  },
                  A = await le.O3.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    r,
                    0,
                    1,
                    B,
                  );
                I.token.reason || (A.length > 0 && d(A[0]));
              })(),
              () => {
                e.current && e.current("DemoAndQuickPitch: Unmounting");
              }
            ),
            [r],
          );
          const [u, g, f] = (0, ve.uD)(),
            h = c ? c.GetNameWithFallback((0, Z.sfN)(w.TS.LANGUAGE)) : null,
            x = c ? c.BHasEventEnded() : !0;
          return !o ||
            !o.related_items?.demo_appid ||
            o.related_items?.demo_appid.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)("div", {
                    className: St.TileContainer,
                    children: [
                      (0, t.jsxs)("div", {
                        className: St.TileTitleContainer,
                        children: [
                          (0, t.jsxs)("div", {
                            className: St.TileTitleInnerContainer,
                            children: [
                              (0, t.jsx)("div", {
                                className: St.TileTitle,
                                children: (0, L.we)(
                                  "#Sale_DownloadDemo",
                                  o.name || "",
                                ),
                              }),
                              (0, t.jsx)(Kn.Q, { id: a }),
                            ],
                          }),
                          (0, t.jsx)(cs.j, {
                            id: a,
                            className: St.TileActionButton,
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: St.TileActionContainer,
                        children:
                          c &&
                          h &&
                          (0, t.jsxs)("div", {
                            className: St.TileActionInnerContainer,
                            children: [
                              x
                                ? (0, t.jsx)("h1", {
                                    children: (0, L.we)(
                                      "#EventBrowse_RecentUpdates",
                                    ),
                                  })
                                : (0, t.jsx)("h1", {
                                    children: (0, L.we)(
                                      "#EventCalendar_TuneIn",
                                    ),
                                  }),
                              (0, t.jsxs)("div", {
                                className: St.TileActionInner,
                                onClick: g,
                                children: [
                                  (0, t.jsx)("div", {
                                    className: St.TileActionInnerTitle,
                                    children: h,
                                  }),
                                  (0, t.jsx)("div", {
                                    className: St.TileActionInnerText,
                                    children: (0, t.jsx)(Yt.K4, {
                                      dateAndTime:
                                        c.GetStartTimeAndDateUnixSeconds(),
                                      bSingleLine: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(q.EN, {
                    active: u,
                    children: (0, t.jsx)(es.AD, {
                      initialEvent: c,
                      bShowOnlyInitialEvent: !1,
                      partnerEventStore: le.O3,
                      emoticonStore: n,
                      showAppHeader: !0,
                      closeModal: f,
                    }),
                  }),
                ],
              });
        }
        var Ns = i(20076),
          qo = i(84750),
          F = i(36707),
          _o = i(27510),
          Ft = i.n(_o),
          Fe = i(56718),
          ds = i(53906);
        const Kh = new qo.cE();
        var Ds = ((s) => (
          (s[(s.EPurchaseNoticeType_ControllerRequired = 0)] =
            "EPurchaseNoticeType_ControllerRequired"),
          (s[(s.EPurchaseNoticeType_VRRequired = 1)] =
            "EPurchaseNoticeType_VRRequired"),
          (s[(s.EPurchaseNoticeType_VRSupported = 2)] =
            "EPurchaseNoticeType_VRSupported"),
          s
        ))(Ds || {});
        function el(s) {
          const { appid: e, type: n } = s;
          switch (n) {
            case 0:
              return (0, t.jsx)(tl, { appid: e, controllerType: ds.Oh });
            case 1:
              return (0, t.jsx)(nl, {});
            default:
              return (0, t.jsx)(sl, {});
          }
        }
        function tl(s) {
          return (0, t.jsxs)("div", {
            className: (0, F.A)(Ft().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, F.A)(Ft().PurchaseNoticeImageContainer),
                children: (0, t.jsx)(Fe.xIk, {
                  type: "xbox",
                  className: (0, F.A)(Ft().PurchaseNoticeImage, Ft().Tilt),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, F.A)(Ft().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_ControllerRequired"),
              }),
            ],
          });
        }
        function nl(s) {
          return (0, t.jsxs)("div", {
            className: (0, F.A)(Ft().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, F.A)(Ft().PurchaseNoticeImageContainer),
                children: (0, t.jsx)(Fe.oqe, {
                  className: (0, F.A)(Ft().PurchaseNoticeImage, Ft().VROnly),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, F.A)(Ft().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_VRRequired"),
              }),
            ],
          });
        }
        function sl(s) {
          return (0, t.jsxs)("div", {
            className: (0, F.A)(Ft().PurchaseNoticeContainer),
            children: [
              (0, t.jsx)("div", {
                className: (0, F.A)(
                  Ft().PurchaseNoticeImageContainer,
                  Ft().VRSupported,
                ),
                children: (0, t.jsx)(Fe.Kkn, {
                  className: (0, F.A)(
                    Ft().PurchaseNoticeImage,
                    Ft().VRSupported,
                  ),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, F.A)(Ft().PurchaseNoticeLabel),
                children: (0, L.we)("#PurchaseNotice_VRSupported"),
              }),
            ],
          });
        }
        const fr = el;
        var Ei = i(97525),
          rl = i(24805),
          Pi = i(813),
          Mi = i(60480),
          Ti = ((s) => (
            (s[(s.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (s[(s.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            s
          ))(Ti || {}),
          il = i(10142),
          Si = i(84676),
          Li = i(72147),
          al = i(51249),
          Pe = i.n(al),
          Oi = i(94502);
        function ol(s) {
          const {
              clanID: e,
              title: n,
              seeAllLink: r,
              appIDs: a,
              rgAppIDToCreatorIDs: o,
              rgAllCreatorClanIDs: c,
              strFeatureFirstAppMsg: d,
              bFullWidth: u,
            } = s,
            g = (0, Si.zX)(a, rl.Xh),
            f = (0, m.useMemo)(() => {
              const x = new Map(
                Object.entries(o).map(([v, I]) => [Number(v), I]),
              );
              if (g != Si.Sq && e == Ti.k_CreatorHomeAll) {
                const v = new Set(c);
                a.forEach((I) => {
                  if (!x.has(I)) {
                    const B = il.A.Get().GetApp(I);
                    B &&
                      B.GetAllCreatorClanIDs()?.some((A) =>
                        v.has(A) ? (x.set(I, A), !0) : !1,
                      );
                  }
                });
              }
              return x;
            }, [o, g, e, c, a]),
            h = "developer";
          return a.length > 0
            ? (0, t.jsx)(ll, {
                creatorHomeType: h,
                clanID: e,
                titleOverride: n,
                seeAllLink: r,
                appIDs: a,
                mapAppIDsToCreatorClanID: f,
                strFeatureFirstAppMsg: d,
                bFullWidth: u,
              })
            : (0, t.jsx)(cl, { creatorHomeType: h, clanID: e, bFullWidth: u });
        }
        function ll(s) {
          const {
              creatorHomeType: e,
              clanID: n,
              titleOverride: r,
              seeAllLink: a,
              appIDs: o,
              mapAppIDsToCreatorClanID: c,
              strFeatureFirstAppMsg: d,
              bFullWidth: u,
            } = s,
            g = (0, w.Qn)(),
            [f, h] = (0, Pi.TB)(n),
            { creatorHome: x } = (0, Mi.FV)(n),
            v = x?.GetCreatorHomeURL(e),
            [I, B] = m.useState(void 0),
            { bShowSeeMoreHint: A, panelProps: S } = (0, Ei.i)(a);
          if (!x) return;
          const D = !g && (d ? I == 1 : I <= 2) && h;
          return (0, t.jsx)(T.Z, {
            className: (0, F.A)(
              Pe().CreatorHomeWithItems,
              D ? Pe().WithFollowBtn : "",
              u && Pe().FullWidth,
            ),
            navEntryPreferPosition: z.iU.PREFERRED_CHILD,
            ...S,
            children: (0, t.jsxs)(ie.q, {
              children: [
                h?.creator_page_bg_url &&
                  (0, t.jsx)("div", {
                    className: Pe().Background,
                    style: { backgroundImage: `url(${h.creator_page_bg_url})` },
                  }),
                (0, t.jsxs)(T.Z, {
                  className: Pe().Header,
                  "flow-children": "row",
                  children: [
                    (0, t.jsxs)("div", {
                      className: Pe().ClanInfoRow,
                      children: [
                        !!h &&
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)(P.Ii, {
                              href: v,
                              focusable: v !== a,
                              children: (0, t.jsx)("img", {
                                className: Pe().ClanAvatarImage,
                                src: x.GetAvatarURLFullSize(),
                              }),
                            }),
                          }),
                        (0, t.jsx)("img", {
                          className: Pe().AvatarBackground,
                          src: x.GetAvatarURLFullSize(),
                        }),
                        (0, t.jsx)("div", {
                          className: Pe().ClanName,
                          children: (0, t.jsx)("a", {
                            href: v,
                            children: r || x.GetName(),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: Pe().ButtonContainer,
                      children: [
                        !!(!D && h && !g) &&
                          (0, t.jsx)(Li.of, {
                            className: Pe().CarouselFollowButton,
                            clanAccountID: n,
                          }),
                        !g && (0, t.jsx)(Oi.H, { url: a }),
                        g &&
                          (0, t.jsx)(Ei.o, {
                            label: (0, L.we)("#StoreApp_SeeAll"),
                            shown: A,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)(T.Z, {
                  className: (0, F.A)(
                    Pe().CarouselContentsRow,
                    D && Pe().WithFollowSection,
                  ),
                  preferredFocus: !0,
                  children: [
                    (0, t.jsx)(Oi._, {
                      navKey: "store_page_" + e,
                      classes: Pe().Carousel,
                      appIDs: o,
                      maxItemCount: D ? I : 4,
                      mapAppToCreatorClan: c,
                      strFeatureFirstAppMsg: d,
                      setNumberVisibleItems: B,
                    }),
                    D &&
                      (0, t.jsx)("div", {
                        className: Pe().CarouselFollowSection,
                        children: (0, t.jsx)(Ai, {
                          clanID: n,
                          creatorName: x.GetName(),
                          creatorUrl: v,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function cl(s) {
          const { creatorHomeType: e, clanID: n, bFullWidth: r } = s,
            [a, o] = (0, Pi.TB)(n),
            { creatorHome: c } = (0, Mi.FV)(n),
            d = c?.GetCreatorHomeURL(e);
          if (c)
            return (0, t.jsxs)("div", {
              className: (0, F.A)(
                Pe().CreatorHomeWithoutItems,
                r && Pe().FullWidth,
              ),
              children: [
                o?.creator_page_bg_url &&
                  (0, t.jsx)("div", {
                    className: Pe().Background,
                    style: { backgroundImage: `url(${o.creator_page_bg_url})` },
                  }),
                (0, t.jsx)("div", {
                  children: (0, t.jsx)("a", {
                    href: d,
                    children: (0, t.jsx)("img", {
                      className: Pe().ClanAvatarImage,
                      src: c.GetAvatarURLFullSize(),
                    }),
                  }),
                }),
                (0, t.jsx)(Ai, {
                  clanID: n,
                  creatorName: c.GetName(),
                  creatorUrl: d,
                }),
              ],
            });
        }
        function Ai(s) {
          const { clanID: e, creatorName: n, creatorUrl: r } = s;
          return (0, t.jsxs)("div", {
            className: Pe().ClanInfoColumn,
            children: [
              (0, t.jsx)("div", {
                className: Pe().ClanFollowTitle,
                children: (0, t.jsx)("a", {
                  href: r,
                  children: (0, L.we)("#StoreApp_FollowCreator", n),
                }),
              }),
              (0, t.jsx)("div", {
                className: Pe().ClanFollowSubtitle,
                children: (0, L.we)("#StoreApp_FollowCreatorSubtitle"),
              }),
              (0, t.jsx)("div", {
                className: Pe().ClanFollowButtonContainer,
                children: (0, t.jsx)(Li.of, {
                  className: Pe().FollowButton,
                  clanAccountID: e,
                }),
              }),
            ],
          });
        }
        var us = i(14947),
          Fs = i(12997),
          hr = i(64271),
          dl = i(65946),
          ul = Object.defineProperty,
          ml = Object.getOwnPropertyDescriptor,
          Ws = (s, e, n, r) => {
            for (
              var a = r > 1 ? void 0 : r ? ml(e, n) : e, o = s.length - 1, c;
              o >= 0;
              o--
            )
              (c = s[o]) && (a = (r ? c(e, n, a) : c(a)) || a);
            return r && a && ul(e, n, a), a;
          };
        function gl(s) {
          let {
              id: e,
              dashManifests: n,
              hlsManifest: r,
              screenshot: a,
              title: o,
              category: c,
              statsURL: d,
            } = s,
            u = fl(),
            [g, f, h, x] = (0, dl.q3)(() => [
              !u.BPlayTrailer(e),
              u.BAutoplayEnabled(),
              u.GetPlayerVolume(),
              u.BAudioMuted(),
            ]),
            v = (0, m.useCallback)(() => {
              u.FireTrailerPlaybackEnded();
            }, [u]);
          return pl(g)
            ? (0, t.jsx)(Fs.v, {
                autoplayEnabled: f,
                setAutoplayEnabled: u.GetSetAutoplayEnabled(),
                playerVolume: h,
                setPlayerVolume: u.GetSetPlayerVolume(),
                audioMuted: x,
                setAudioMuted: u.GetSetAudioMuted(),
                children: (0, t.jsx)(hr.P, {
                  dashManifests: n,
                  hlsManifest: r,
                  screenshot: a,
                  forcePause: g,
                  onPlaybackEnd: v,
                  altText: o,
                  title: o,
                  category: c,
                  statsURL: d,
                }),
              })
            : null;
        }
        function pl(s) {
          let e = m.useRef(!1);
          return s || (e.current = !0), e.current;
        }
        class ms {
          m_mapTrailerPlay = new Map();
          m_fnOnTrailerEnd;
          m_bAutoplayEnabled = !1;
          m_fnSetAutoplayEnabled;
          m_flPlayerVolume = 1;
          m_fnSetPlayerVolume;
          m_bAudioMuted = !0;
          m_fnSetAudioMuted;
          constructor() {
            (0, us.Gn)(this);
          }
          InitAutoplayMethods(e, n) {
            (this.m_bAutoplayEnabled = e), (this.m_fnSetAutoplayEnabled = n);
          }
          InitPlayerVolumeMethods(e, n) {
            (this.m_flPlayerVolume = e / 100),
              (this.m_fnSetPlayerVolume = (r) => {
                (r = r * 100), n(r);
              });
          }
          InitAudioMutedMethods(e, n) {
            (this.m_bAudioMuted = e), (this.m_fnSetAudioMuted = n);
          }
          UpdateAutoplay(e) {
            this.m_bAutoplayEnabled = e;
          }
          UpdateVolume(e) {
            this.m_flPlayerVolume = e / 100;
          }
          UpdateMuted(e) {
            this.m_bAudioMuted = e;
          }
          BAutoplayEnabled() {
            return this.m_bAutoplayEnabled;
          }
          GetSetAutoplayEnabled() {
            return this.m_fnSetAutoplayEnabled;
          }
          GetPlayerVolume() {
            return this.m_flPlayerVolume;
          }
          GetSetPlayerVolume() {
            return this.m_fnSetPlayerVolume;
          }
          BAudioMuted() {
            return this.m_bAudioMuted;
          }
          GetSetAudioMuted() {
            return this.m_fnSetAudioMuted;
          }
          SetTrailerState(e, n) {
            this.m_mapTrailerPlay.set(e, n);
          }
          SetTrailerEndCallback(e) {
            this.m_fnOnTrailerEnd = e;
          }
          FireTrailerPlaybackEnded() {
            this.m_fnOnTrailerEnd && this.m_fnOnTrailerEnd();
          }
          BPlayTrailer(e) {
            let n = this.m_mapTrailerPlay.get(e);
            return n === void 0 ? !1 : n;
          }
        }
        Ws([us.sH], ms.prototype, "m_mapTrailerPlay", 2),
          Ws([us.sH], ms.prototype, "m_bAutoplayEnabled", 2),
          Ws([us.sH], ms.prototype, "m_flPlayerVolume", 2),
          Ws([us.sH], ms.prototype, "m_bAudioMuted", 2);
        let Rs = null;
        function fl() {
          return (
            Rs ||
              ((Rs = new ms()),
              window.dispatchEvent(
                new CustomEvent("valve_gamehighlighttrailers_ready", {
                  detail: Rs,
                }),
              )),
            Rs
          );
        }
        var yr = i(67705),
          Fn = i(51079),
          xe = i(17479),
          Gn = i(71421);
        function gn(s) {
          const e = s.strSecondaryCategory
              ? `${w.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}%2C${s.strSecondaryCategory}`
              : `${w.TS.STORE_BASE_URL}search/?controllersupport=${s.strCategory}`,
            n = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("div", {
                  className: (0, F.A)(
                    xe.ImgSection,
                    s.bHightlightRow && xe.HighlightRow,
                    s.bHighlightGPRequired && xe.GamepadRequired,
                  ),
                  children: s.tagImage,
                }),
                (0, t.jsxs)("div", {
                  className: (0, F.A)(
                    xe.LocSection,
                    s.bHighlightText && xe.HighlightText,
                    s.bHightlightRow && xe.HighlightRow,
                    s.bHighlightGPRequired && xe.GamepadRequired,
                  ),
                  children: [
                    (0, t.jsx)("div", {
                      className: (0, F.A)(
                        xe.LocString,
                        s.bHighlightText && xe.HighlightText,
                        s.bHightlightRow && xe.HighlightRow,
                        s.bHighlightGPRequired && xe.GamepadRequired,
                        s.bPersonalized && xe.Personalized,
                      ),
                      children: (0, L.we)(s.strLocalizationToken),
                    }),
                    s.strTooltipString &&
                      (0, t.jsx)(Gn.he, {
                        toolTipContent: (0, L.we)(s.strTooltipString),
                        className: xe.ToolTipContainer,
                        children: (0, t.jsx)("span", {
                          className: xe.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return s.strCategory
            ? (0, t.jsx)("a", { href: e, className: xe.InfoRow, children: n })
            : (0, t.jsx)("div", { className: xe.InfoRow, children: n });
        }
        function Gh(s) {
          return jsx("div", {
            className: styles.PreviewContainer,
            children: jsx(zi, { bPreview: !0, ...s }),
          });
        }
        function hl(s) {
          return (0, t.jsx)(t.Fragment, {
            children:
              (s.bPartialXboxControllerSupport ||
                s.bFullXboxControllerSupport) &&
              (0, t.jsx)("div", {
                className: xe.StoreSidebarContainer,
                children: (0, t.jsx)(zi, { ...s }),
              }),
          });
        }
        function yl() {
          return (0, t.jsx)(gn, {
            tagImage: (0, t.jsx)(Fe.Moo, {
              className: (0, F.A)(xe.Tilt, xe.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function xl() {
          return (0, t.jsxs)("div", {
            className: (0, F.A)(xe.PurchaseNoticeContainer),
            children: [
              (0, t.jsx)(Fe.Kz1, {
                className: (0, F.A)(xe.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, t.jsx)("div", {
                className: (0, F.A)(xe.PurchaseNoticeLabel),
                children: (0, L.we)(
                  "#Store_ControllerSupport_GamepadPreferred",
                ),
              }),
            ],
          });
        }
        function vl(s) {
          const { bNoKeyboardSupport: e, bGamepadPreferred: n } = s;
          return (0, t.jsxs)("div", {
            className: (0, F.A)(xe.NoticeContainer),
            children: [e && (0, t.jsx)(yl, {}), n && !e && (0, t.jsx)(xl, {})],
          });
        }
        function zi(s) {
          const {
            bControllerSupportWizardComplete: e,
            bPS4ControllerSupport: n,
            bPS5ControllerSupport: r,
            bPS4ControllerBTSupport: a,
            bPS5ControllerBTSupport: o,
            bFullXboxControllerSupport: c,
            bPartialXboxControllerSupport: d,
            bSteamInputAPISupport: u,
            bHasOther: g,
            bHasPS4: f,
            bHasPS5: h,
            bHasXbox: x,
            bPreview: v,
          } = s;
          let I = [];
          if (n && r && a && o) {
            const B = (0, t.jsx)(Fe.pcV, {
                className: xe.SmallerSVG,
                controllerType: ds._X,
                partial: !c,
                role: "presentation",
              }),
              A = f || h;
            I.push(
              (0, t.jsx)(
                gn,
                {
                  tagImage: B,
                  strLocalizationToken: A
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: A,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (n) {
              const B = (0, t.jsx)(Fe.pcV, {
                className: xe.SmallerSVG,
                controllerType: ds._X,
                partial: !c,
                role: "presentation",
              });
              a
                ? I.push(
                    (0, t.jsx)(
                      gn,
                      {
                        tagImage: B,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: f,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : I.push(
                    (0, t.jsx)(
                      gn,
                      {
                        tagImage: B,
                        strLocalizationToken: f
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: f,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (r) {
              const B = (0, t.jsx)(Fe.pcV, {
                className: xe.SmallerSVG,
                controllerType: ds.HD,
                partial: !c,
                role: "presentation",
              });
              o
                ? I.push(
                    (0, t.jsx)(
                      gn,
                      {
                        tagImage: B,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: h,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : I.push(
                    (0, t.jsx)(
                      gn,
                      {
                        tagImage: B,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: h,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, t.jsx)(t.Fragment, {
            children:
              (d || c) &&
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: xe.ControllerSupportLevelString,
                    children: (0, L.we)(
                      c
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, t.jsx)(gn, {
                    tagImage: (0, t.jsx)(Fe.pcV, {
                      className: xe.SmallerSVG,
                      controllerType: ds.Oh,
                      partial: !c,
                      role: "presentation",
                    }),
                    strLocalizationToken: x
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: x,
                    strCategory: "18",
                  }),
                  I,
                  u &&
                    (0, t.jsx)(gn, {
                      tagImage: (0, t.jsx)(Fe.kdM, {
                        className: xe.BiggerSVG,
                        bGreyOutRightSide: !c,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!v && !e) || (!u && g && !x)) &&
                    (0, t.jsx)(gn, {
                      tagImage: (0, t.jsx)(Fe.vet, {
                        className: xe.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        g || f || h
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: g || f || h,
                    }),
                  (0, t.jsx)(vl, { ...s }),
                ],
              }),
          });
        }
        const Ni = hl;
        var Di = i(61711),
          jl = i(45156),
          bl = i(399),
          je = i.n(bl),
          ws = i(98609),
          Bl = i(92442),
          Qt = i(72865),
          xr = i(37901);
        const pe = {};
        (pe.arabic = () => i.e(70667).then(i.t.bind(i, 70667, 19))),
          (pe.brazilian = () => i.e(58167).then(i.t.bind(i, 58167, 19))),
          (pe.bulgarian = () => i.e(75936).then(i.t.bind(i, 75936, 19))),
          (pe.czech = () => i.e(67478).then(i.t.bind(i, 67478, 19))),
          (pe.danish = () => i.e(77178).then(i.t.bind(i, 77178, 19))),
          (pe.dutch = () => i.e(62063).then(i.t.bind(i, 62063, 19))),
          (pe.english = () => i.e(91253).then(i.t.bind(i, 91253, 19))),
          (pe.finnish = () => i.e(66690).then(i.t.bind(i, 66690, 19))),
          (pe.french = () => i.e(32763).then(i.t.bind(i, 32763, 19))),
          (pe.german = () => i.e(82937).then(i.t.bind(i, 82937, 19))),
          (pe.greek = () => i.e(36501).then(i.t.bind(i, 36501, 19))),
          (pe.hungarian = () => i.e(41812).then(i.t.bind(i, 41812, 19))),
          (pe.indonesian = () => i.e(35383).then(i.t.bind(i, 35383, 19))),
          (pe.italian = () => i.e(48149).then(i.t.bind(i, 48149, 19))),
          (pe.japanese = () => i.e(89876).then(i.t.bind(i, 89876, 19))),
          (pe.koreana = () => i.e(21470).then(i.t.bind(i, 99089, 19))),
          (pe.latam = () => i.e(69206).then(i.t.bind(i, 69206, 19))),
          (pe.malay = () => i.e(74357).then(i.t.bind(i, 74357, 19))),
          (pe.norwegian = () => i.e(94025).then(i.t.bind(i, 94025, 19))),
          (pe.polish = () => i.e(92494).then(i.t.bind(i, 92494, 19))),
          (pe.portuguese = () => i.e(23862).then(i.t.bind(i, 1481, 19))),
          (pe.romanian = () => i.e(48824).then(i.t.bind(i, 48824, 19))),
          (pe.russian = () => i.e(50208).then(i.t.bind(i, 50208, 19))),
          (pe.sc_schinese = () => i.e(63354).then(i.t.bind(i, 63354, 19))),
          (pe.schinese = () => i.e(63875).then(i.t.bind(i, 63875, 19))),
          (pe.spanish = () => i.e(34053).then(i.t.bind(i, 34053, 19))),
          (pe.swedish = () => i.e(38804).then(i.t.bind(i, 38804, 19))),
          (pe.tchinese = () => i.e(48688).then(i.t.bind(i, 48688, 19))),
          (pe.thai = () => i.e(79173).then(i.t.bind(i, 79173, 19))),
          (pe.turkish = () => i.e(75629).then(i.t.bind(i, 75629, 19))),
          (pe.ukrainian = () => i.e(22319).then(i.t.bind(i, 22319, 19))),
          (pe.vietnamese = () => i.e(33844).then(i.t.bind(i, 33844, 19)));
        async function Il(s) {
          if (pe[s]) return pe[s]();
        }
        const p = (0, xr.l)(Il),
          El = new Map([
            [2379780, { strInternalAppName: "Balatro", strBannerType: "bus" }],
            [
              413150,
              { strInternalAppName: "StardewValley", strBannerType: "farmer" },
            ],
            [
              1086940,
              { strInternalAppName: "BaldursGate3", strBannerType: "knight" },
            ],
            [
              1091500,
              { strInternalAppName: "Cyberpunk2077", strBannerType: "robot" },
            ],
            [
              1245620,
              { strInternalAppName: "EldenRing", strBannerType: "campfire" },
            ],
            [
              1794680,
              {
                strInternalAppName: "VampireSurvivors",
                strBannerType: "zombies",
              },
            ],
            [
              1174180,
              {
                strInternalAppName: "RedDeadRedemption2",
                strBannerType: "campfire",
              },
            ],
            [
              990080,
              { strInternalAppName: "HogwartsLegacy", strBannerType: "family" },
            ],
            [1942280, { strInternalAppName: "Brotato", strBannerType: "bus" }],
            [
              1868140,
              { strInternalAppName: "DaveTheDiver", strBannerType: "beach" },
            ],
            [
              1145360,
              { strInternalAppName: "Hades", strBannerType: "campfire" },
            ],
            [
              292030,
              { strInternalAppName: "TheWitcher3", strBannerType: "campfire" },
            ],
            [
              646570,
              { strInternalAppName: "SlayTheSpire", strBannerType: "city" },
            ],
            [
              2344520,
              { strInternalAppName: "Diablo4", strBannerType: "knight" },
            ],
            [
              1145350,
              { strInternalAppName: "Hades2", strBannerType: "campfire" },
            ],
            [
              250900,
              {
                strInternalAppName: "TheBindingOfIsaacRebirth",
                strBannerType: "busstop",
              },
            ],
            [
              377160,
              { strInternalAppName: "Fallout4", strBannerType: "apocalypse" },
            ],
            [
              2321470,
              {
                strInternalAppName: "DeepRockGalacticSurvivor",
                strBannerType: "miner",
              },
            ],
            [
              367520,
              { strInternalAppName: "HollowKnight", strBannerType: "miner" },
            ],
            [
              1030300,
              {
                strInternalAppName: "HollowKnightSilksong",
                strBannerType: "knight",
              },
            ],
            [
              2767030,
              { strInternalAppName: "MarvelRivals", strBannerType: "porch" },
            ],
            [
              2679460,
              {
                strInternalAppName: "MetaphorReFantazio",
                strBannerType: "bed",
              },
            ],
            [
              1313140,
              { strInternalAppName: "CultOfTheLamb", strBannerType: "city" },
            ],
            [
              275850,
              { strInternalAppName: "NoMansSky", strBannerType: "astronaut" },
            ],
            [
              2694490,
              { strInternalAppName: "PathOfExile2", strBannerType: "knight" },
            ],
            [
              1687950,
              { strInternalAppName: "Persona5Royal", strBannerType: "anime" },
            ],
            [
              582010,
              {
                strInternalAppName: "MonsterHunterWorld",
                strBannerType: "campfire",
              },
            ],
            [
              2142790,
              {
                strInternalAppName: "FieldsOfMistria",
                strBannerType: "farmer",
              },
            ],
            [
              553850,
              { strInternalAppName: "HELLDIVERS2", strBannerType: "porch" },
            ],
            [
              1623730,
              { strInternalAppName: "Palworld", strBannerType: "woodsman" },
            ],
            [588650, { strInternalAppName: "DeadCells", strBannerType: "bus" }],
            [
              1903340,
              {
                strInternalAppName: "ClairObscurExpedition33",
                strBannerType: "campfire",
              },
            ],
            [
              2993780,
              { strInternalAppName: "FantasyLifei", strBannerType: "woodsman" },
            ],
            [
              2623190,
              { strInternalAppName: "Oblivion", strBannerType: "knight" },
            ],
            [
              230410,
              { strInternalAppName: "Warframe", strBannerType: "robot" },
            ],
            [
              1551360,
              { strInternalAppName: "ForzaHorizon5", strBannerType: "car" },
            ],
            [
              976730,
              {
                strInternalAppName: "HaloMasterChiefCollection",
                strBannerType: "robot",
              },
            ],
            [12210, { strInternalAppName: "GTAIV", strBannerType: "car" }],
            [1562430, { strInternalAppName: "Dredge", strBannerType: "beach" }],
            [
              1446780,
              {
                strInternalAppName: "MonsterHunterRise",
                strBannerType: "campfire",
              },
            ],
            [
              3164500,
              { strInternalAppName: "Schedule1", strBannerType: "city" },
            ],
            [
              1817070,
              {
                strInternalAppName: "SpiderManRemastered",
                strBannerType: "superhero",
              },
            ],
            [
              105600,
              { strInternalAppName: "Terraria", strBannerType: "miner" },
            ],
            [
              1293830,
              { strInternalAppName: "ForzaHorizon4", strBannerType: "car" },
            ],
            [3527290, { strInternalAppName: "Peak", strBannerType: "porch" }],
            [
              2161700,
              { strInternalAppName: "Persona3Reload", strBannerType: "anime" },
            ],
            [
              1850570,
              {
                strInternalAppName: "DeathStranding",
                strBannerType: "busstop",
              },
            ],
            [
              2552430,
              { strInternalAppName: "KingdomHearts", strBannerType: "family" },
            ],
            [
              504230,
              { strInternalAppName: "Celeste", strBannerType: "adventurer" },
            ],
            [
              632470,
              { strInternalAppName: "DiscoElysium", strBannerType: "city" },
            ],
            [
              227300,
              {
                strInternalAppName: "EuroTruckSimulator2",
                strBannerType: "car",
              },
            ],
            [
              3405340,
              { strInternalAppName: "Megabonk", strBannerType: "zombies" },
            ],
            [
              2062430,
              { strInternalAppName: "BallxPit", strBannerType: "city" },
            ],
            [
              2592160,
              { strInternalAppName: "Dispatch", strBannerType: "superhero" },
            ],
            [
              1771300,
              {
                strInternalAppName: "KingdomComeDeliverance2",
                strBannerType: "knight",
              },
            ],
            [3241660, { strInternalAppName: "REPO", strBannerType: "porch" }],
            [
              1984270,
              {
                strInternalAppName: "DigimonStoryTimeStranger",
                strBannerType: "anime",
              },
            ],
            [2878980, { strInternalAppName: "NBA2K25", strBannerType: "city" }],
            [
              108600,
              {
                strInternalAppName: "ProjectZomboid",
                strBannerType: "zombies",
              },
            ],
            [
              381210,
              {
                strInternalAppName: "DeadByDaylight",
                strBannerType: "zombies",
              },
            ],
            [
              1401590,
              {
                strInternalAppName: "DisneyDreamlightValley",
                strBannerType: "family",
              },
            ],
            [
              892970,
              { strInternalAppName: "Valheim", strBannerType: "knight" },
            ],
          ]),
          Pl = new Map([
            ["adventurer", { className: je().Adventurer }],
            ["anime", { className: je().Anime }],
            ["apocalypse", { className: je().Apocalypse }],
            ["astronaut", { className: je().Astronaut }],
            ["beach", { className: je().Beach }],
            ["bed", { className: je().Bed }],
            ["bus", { className: je().Bus }],
            ["busstop", { className: je().BusStop }],
            ["campfire", { className: je().Campfire }],
            ["car", { className: je().Car }],
            ["city", { className: je().City }],
            ["family", { className: je().Family }],
            ["farmer", { className: je().Farmer }],
            ["knight", { className: je().Knight }],
            ["miner", { className: je().Miner }],
            ["porch", { className: je().Porch }],
            ["robot", { className: je().Robot }],
            ["superhero", { className: je().Superhero }],
            ["woodsman", { className: je().Woodsman }],
            ["zombies", { className: je().Zombies }],
          ]);
        function Ml(s) {
          return El.get(s);
        }
        function Tl(s) {
          return Pl.get(s);
        }
        function Yh(s) {
          const { appid: e } = s,
            { data: n } = useStoreItemDefaultInfo({ appid: e }),
            r = useIsSteamDeckForSaleInUserCountry();
          return !n || !n.name || !r
            ? null
            : jsx(Fi, { appid: e, app_name: n.name });
        }
        function Fi(s) {
          const { appid: e } = s,
            n = Ml(e);
          return n ? (0, t.jsx)(Sl, { appBannerDef: n, ...s }) : null;
        }
        function Sl(s) {
          const { appid: e, appBannerDef: n, app_name: r } = s,
            a = Tl(n.strBannerType),
            o = (0, Qt.aL)(
              ws.TS.STORE_BASE_URL +
                `app/${Bl.wy}?deckapp=${e}&utm_source=topplayed_app_banner&utm_campaign=${e}`,
              "topplayed_app_banner",
              e,
            );
          return a
            ? (0, t.jsxs)("div", {
                className: je().BannerWrapper,
                children: [
                  (0, t.jsxs)("div", {
                    className: je().BannerTitle,
                    children: [
                      (0, t.jsx)("div", { className: je().DeckLogo }),
                      p.Localize("#DeckTopPlayedAppBanner_Title"),
                    ],
                  }),
                  (0, t.jsx)("a", {
                    href: o,
                    className: (0, F.A)(je().TopPlayedBannerCtn, a.className),
                    children: (0, t.jsxs)("div", {
                      className: je().BannerRightContent,
                      children: [
                        (0, t.jsx)("div", {
                          className: je().BannerHeader,
                          children: p.Localize(
                            "#DeckTopPlayedAppBanner_Header",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: je().BannerGameText,
                          children: p.LocalizeReact(
                            "#DeckTopPlayedAppBanner_GameText",
                            (0, t.jsx)("span", { children: r }),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (console.warn(`No banner type found for ${n.strBannerType}`),
              null);
        }
        var Wi = i(17809),
          Ll = i(41032),
          gs = i(21721),
          Wn = i(27894),
          Ol = i(94846),
          Yn = i.n(Ol),
          vr = i(48357),
          Al = i(64774);
        function zl(s) {
          const { appid: e } = s,
            n = (0, Gt.$5)(e),
            { data: r } = (0, E.lv)(n),
            { data: a } = (0, E.J$)(n),
            o = (0, Wn.n)(a);
          return !r || !a
            ? null
            : (0, t.jsxs)(T.Z, {
                focusable: !0,
                className: Yn().ParentWidgetContainer,
                onActivate: () => {
                  window.location.href = o;
                },
                children: [
                  (0, t.jsx)("div", {
                    className: (0, F.A)(Yn().ParentCapsuleImageContainer),
                    children: (0, t.jsx)("a", {
                      href: o,
                      children: (0, t.jsx)("img", {
                        className: Yn().ParentCapsuleImage,
                        src: (0, gs.b0)(r, "small_capsule"),
                      }),
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: Yn().AppDetails,
                    children: [
                      (0, t.jsx)("a", {
                        className: (0, F.A)(Yn().GameName),
                        href: o,
                        children: a.name,
                      }),
                      (0, t.jsxs)("div", {
                        className: Yn().PriceContainer,
                        children: [
                          (0, t.jsx)(vr.NF, { id: n }),
                          (0, t.jsx)(Al.r, {
                            appid: e,
                            className: Yn().AddToWishlistButton,
                            bTextMode: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }
        var Se = i(19813),
          jr = i(64415),
          Nl = i(90405);
        function Ri(s, e) {
          return (0, m.useMemo)(() => {
            let r = [],
              a = new Map();
            for (let o of s)
              if (
                (o.featured &&
                  (r.push({ type: "trailer", key: `t_${o.id}`, data: o }),
                  a.set(o.id, !0)),
                r.length >= 2)
              )
                break;
            for (let o of e)
              r.push({ type: "screenshot", key: `s_${o.name}`, data: o });
            for (let o of s)
              a.has(o.id) ||
                r.push({ type: "trailer", key: `t_${o.id}`, data: o });
            return r;
          }, [s, e]);
        }
        var Wt = i(31382),
          Dl = i(52951),
          ts = i(47045),
          U = i(72609),
          O = i(68031),
          b = i(15252),
          de = i(60351);
        function Us(s) {
          const { id: e, bSelfPurchaseOption: n, bHideNewTag: r } = s,
            { data: a } = (0, E.J$)(e);
          return a
            ? (0, t.jsx)(vr.NF, {
                id: e,
                bPurchaseOptionDisplay: !0,
                bHidePrePurchase: !0,
                bSelfPurchaseOption: n,
                bHideNewTag: r,
              })
            : null;
        }
        var rn = i(42993),
          pn = i(75233),
          an = i(80902),
          ps = i(51614),
          fs = i(57589);
        const hs = new fs.wd("GameInterest");
        function ns(s, e) {
          return ["GameInterest", s, e];
        }
        function Fl(s, e, n, r) {
          s.setQueryData(ns(e, n), r);
        }
        function Wl(s) {
          const e = (0, pn.jE)(),
            n = (0, rn.LH)();
          return (
            m.useEffect(() => {
              const { appid: r, userInterest: a, markReady: o } = s;
              Fl(e, n, r, a), o();
            }, [e, n, s]),
            null
          );
        }
        function ys(s) {
          const e = (0, rn.LH)();
          return (0, an.I)({
            queryKey: ns(e, s),
            enabled: !!e,
            queryFn: async () => {
              throw (
                (hs.Info(
                  "Fetching user game interest from the back end for ",
                  s,
                ),
                new Error("Fetching user game interest is not yet supported"))
              );
            },
          });
        }
        function br(s, e, n) {
          const r = (0, pn.jE)(),
            a = (0, Qt.ru)(),
            o = (0, rn.LH)();
          return (0, ps.n)({
            mutationKey: [e, ...ns(o, s)],
            mutationFn: async (c) => {
              hs.Info(`Mutating ${s} for ${e}`, c);
              const d = new FormData();
              d.set("sessionid", (0, w.KC)()),
                d.set("appid", s.toString()),
                d.set("snr", a);
              const { url: u, new_interest: g } = n(c, d);
              hs.Info(" new interest before backend call", g),
                r.setQueryData(ns(o, s), g);
              try {
                const f = await fetch(u, { method: "POST", body: d });
                return f.ok
                  ? !0
                  : (hs.Info(`request to ${e} ${s} failed with ${f}`, c), !1);
              } catch (f) {
                return hs.Info(`request to ${e} ${s} failed with ${f}`, c), !1;
              }
            },
            onSuccess: (c, d) => {
              c || r.setQueryData(ns(o, s), d.old_interest);
            },
            onError: (c, d, u) => {
              r.setQueryData(ns(o, s), d.old_interest);
            },
          });
        }
        function wi(s) {
          return br(s, "wishlist", (e, n) => {
            const { wishlist: r, old_interest: a } = e,
              o = { ...a, wishlist: r },
              c = r
                ? `${w.TS.STORE_BASE_URL}api/addtowishlist`
                : `${w.TS.STORE_BASE_URL}api/removefromwishlist`;
            return { new_interest: o, url: c };
          });
        }
        function Rl(s) {
          return br(s, "ignore", (e, n) => {
            const { ignored: r, ignored_reason: a, old_interest: o } = e,
              c = { ...o, ignored: r, ignored_reason: a };
            r && a !== void 0
              ? n.set("ignore_reason", a.toString())
              : n.set("remove", "1");
            const d = `${w.TS.STORE_BASE_URL}recommended/ignorerecommendation/`;
            return { new_interest: c, url: d };
          });
        }
        function wl(s) {
          return br(s, "follow", (e, n) => {
            const { following: r, old_interest: a } = e,
              o = { ...a, following: r };
            r || n.set("unfollow", "1");
            const c = `${w.TS.STORE_BASE_URL}explore/followgame/`;
            return { new_interest: o, url: c };
          });
        }
        var Ui = i(20525);
        function Ul(s) {
          let { trailers: e, screenshots: n, appid: r } = s;
          return (0, t.jsx)(Wt.QY, {
            supportsFullscreen: !1,
            supportsTheater: !0,
            children: (0, t.jsx)(Gl, {
              children: (0, t.jsx)(Cl, {
                trailers: e,
                screenshots: n,
                appid: r,
              }),
            }),
          });
        }
        function Cl(s) {
          let { trailers: e, screenshots: n, appid: r } = s,
            a = (0, Wt.ri)(),
            o = a?.strMode == "theater",
            c = (0, Wt.Dy)(a, "theater"),
            d = (0, Wt.Dy)(a, "none"),
            u = (0, Dl.tw)(),
            [g, f] = Yl(o, d),
            h = Ri(e, n);
          Kl(h);
          const x = m.useCallback(
            (B) => {
              a.refTheater && a.refTheater(B);
            },
            [a],
          );
          if ((m.use(ts.n.Ready()), h.length == 0)) return null;
          let v = h.map((B, A) =>
              B.type == "screenshot"
                ? (0, t.jsx)(
                    kl,
                    { autoFocus: A == 0, screenshot: B.data },
                    B.key,
                  )
                : B.type == "trailer"
                  ? (0, t.jsx)(
                      Vl,
                      { autoFocus: A == 0, trailer: B.data },
                      B.key,
                    )
                  : null,
            ),
            I = o ? "" : ts.n.Localize("#TrailerPlayer_FullScreen_Tooltip");
          return (0, t.jsx)("div", {
            ref: x,
            className: Se.TheaterDialog,
            popover: "manual",
            children: (0, t.jsx)("div", {
              className: Se.FocusRingClip,
              children: (0, t.jsx)(ie.q, {
                rootClassName: Se.FocusRingRoot,
                disableFocusRing: o,
                children: (0, t.jsxs)(T.Z, {
                  ref: u.ref,
                  navRef: u.navRef,
                  className: Se.GamepadCarousel,
                  "flow-children": "row",
                  navEntryPreferPosition: z.iU.MAINTAIN_X,
                  onOptionsActionDescription: I,
                  onOptionsButton: c,
                  onCancelButton: o ? d : void 0,
                  onGamepadDirection: g,
                  onFocusWithin: f,
                  children: [
                    r && (0, t.jsx)(ec, { appid: r, fnExitTheaterMode: d }),
                    v,
                  ],
                }),
              }),
            }),
          });
        }
        function Kl(s) {
          let e = s.length;
          (0, m.useLayoutEffect)(() => {
            if (e < 1) return;
            document
              .querySelectorAll(".gamehighlight_gamepadskeleton")
              .forEach((r) => r.remove());
          }, [e]);
        }
        function Gl(s) {
          let { children: e } = s,
            n = (0, m.useCallback)(() => {}, []),
            [r, a] = (0, m.useState)(!0);
          return (0, t.jsx)(Fs.v, {
            autoplayEnabled: !1,
            setAutoplayEnabled: n,
            playerVolume: 1,
            setPlayerVolume: n,
            audioMuted: r,
            setAudioMuted: a,
            children: e,
          });
        }
        function Yl(s, e) {
          let n = (0, m.useCallback)(
            (a) => {
              s && !a && e();
            },
            [s, e],
          );
          return [(0, m.useCallback)((a) => !!s, [s]), n];
        }
        function kl(s) {
          let { screenshot: e, autoFocus: n } = s,
            r = (0, F.A)(Se.CarouselItem, Se.Screenshot);
          return (0, t.jsx)(T.Z, {
            className: r,
            autoFocus: n,
            focusable: !0,
            onOKActionDescription: "",
            children: (0, t.jsx)("img", { src: e.full, alt: e.altText }),
          });
        }
        function Vl(s) {
          let { trailer: e, autoFocus: n } = s;
          return e.dashManifests
            ? (0, t.jsx)(ql, { trailer: e, autoFocus: n })
            : (0, t.jsx)(Ql, { trailer: e, autoFocus: n });
        }
        function Ql(s) {
          let { trailer: e, autoFocus: n } = s,
            r = (0, m.useRef)(null),
            [a, o] = $l(),
            c = (0, re.Ue)(r, o),
            [d, u] = Zl(r),
            g = Jl(d),
            f = Xl(r),
            h = (0, m.useCallback)(
              (A) => {
                let S = r.current;
                if (A.detail.button == jr.pR.TRIGGER_LEFT && S) {
                  (S.currentTime = Math.max(0, S.currentTime - 10)),
                    A.preventDefault(),
                    A.stopPropagation();
                  return;
                }
                if (A.detail.button == jr.pR.TRIGGER_RIGHT && S) {
                  (S.currentTime = Math.min(S.duration, S.currentTime + 10)),
                    A.preventDefault(),
                    A.stopPropagation();
                  return;
                }
              },
              [r],
            );
          if (!e.webmMax) return null;
          let x = e.poster || "",
            v = a.bMuted
              ? ts.n.Localize("#TrailerPlayer_Unmute_Tooltip")
              : ts.n.Localize("#TrailerPlayer_Mute_Tooltip"),
            I = a.bPaused
              ? ts.n.Localize("#TrailerPlayer_Play_Tooltip")
              : ts.n.Localize("#TrailerPlayer_Pause_Tooltip"),
            B = (0, F.A)(Se.CarouselItem, Se.SingleFileTrailer);
          return (0, t.jsx)(T.Z, {
            className: B,
            onActivate: u,
            onOKActionDescription: I,
            ...g,
            onSecondaryButton: f,
            onSecondaryActionDescription: v,
            onButtonDown: h,
            autoFocus: n,
            children: (0, t.jsx)("video", {
              ref: c,
              controls: !0,
              muted: !0,
              disablePictureInPicture: !0,
              controlsList: "nodownload",
              playsInline: !0,
              preload: "none",
              poster: x,
              children: (0, t.jsx)("source", {
                src: e.webmMax,
                type: "video/webm",
              }),
            }),
          });
        }
        function $l() {
          let [s, e] = (0, m.useState)({ bPaused: !0, bMuted: !0 }),
            n = (0, re.QS)(
              (r) => {
                if (!r) return () => {};
                let a = () => {
                    e((u) => ({ ...u, bMuted: r.muted }));
                  },
                  o = () => {
                    e((u) => ({ ...u, bPaused: !1 }));
                  },
                  c = () => {
                    e((u) => ({ ...u, bPaused: !0 }));
                  };
                return (
                  r.addEventListener("volumechange", a),
                  r.addEventListener("play", o),
                  r.addEventListener("pause", c),
                  () => {
                    r.removeEventListener("volumechange", a),
                      r.removeEventListener("play", o),
                      r.removeEventListener("pause", c);
                  }
                );
              },
              [e],
            );
          return [s, n];
        }
        function Zl(s) {
          let e = (0, m.useRef)(!1),
            n = (0, m.useRef)(null),
            r = (0, m.useCallback)(
              (o) => {
                let c = s.current;
                if (c && ((e.current = o), !n.current)) {
                  if (!o) {
                    c.paused || c.pause();
                    return;
                  }
                  (n.current = c.play()),
                    n.current
                      .then(() => {
                        !e.current && s.current && s.current.pause(),
                          (n.current = null);
                      })
                      .catch(() => {
                        n.current = null;
                      });
                }
              },
              [s],
            ),
            a = (0, m.useCallback)(() => {
              let o = s.current;
              o && r(o.paused);
            }, [r, s]);
          return [r, a];
        }
        function Jl(s) {
          let e = (0, m.useCallback)(() => s(!0), [s]),
            n = (0, m.useCallback)(() => s(!1), [s]);
          return { onGamepadFocus: e, onGamepadBlur: n };
        }
        function Xl(s) {
          return (0, m.useCallback)(() => {
            let n = s.current;
            n && (n.muted = !n.muted);
          }, [s]);
        }
        function Hl(s) {
          const { poster: e, bVideoReady: n } = s;
          return e
            ? (0, t.jsxs)("div", {
                className: (0, F.A)(Se.StillPoster, n && Se.VideoStarted),
                children: [
                  (0, t.jsx)("img", {
                    className: (0, F.A)(Se.Poster),
                    src: e,
                    alt: "",
                  }),
                  (0, t.jsx)(Ui.ud, { className: Se.Icon }),
                ],
              })
            : null;
        }
        function ql(s) {
          let { trailer: e, autoFocus: n } = s,
            [r, a] = (0, m.useState)(!1),
            [o, c] = (0, m.useState)(!1),
            [d, u] = (0, re.TP)();
          const g = m.useCallback(() => {
            a(!0);
          }, []);
          let f,
            h = (0, F.A)(Se.CarouselItem, Se.DashTrailer);
          return (0, t.jsxs)(T.Z, {
            ref: u,
            className: h,
            onFocusWithin: c,
            autoFocus: n,
            children: [
              (0, t.jsx)(Hl, { poster: e.poster, bVideoReady: r }),
              (0, t.jsx)(Nl.K, {
                mode: "JustLoad",
                horizontal: !0,
                holdGamepadFocus: !0,
                children: (0, t.jsx)(hr.P, {
                  dashManifests: e.dashManifests,
                  hlsManifest: e.hlsManifest,
                  screenshot: e.poster,
                  altText: e.title,
                  forcePause: !o || !d,
                  onPlaybackEnd: f,
                  onPlaybackStart: g,
                  title: e.title,
                  category: e.category,
                  statsURL: e.statsURL,
                }),
              }),
            ],
          });
        }
        function _l(s, e) {
          return U.TS.STORE_ITEM_BASE_URL + s.replace("${FILENAME}", e);
        }
        function ec(s) {
          const { appid: e, fnExitTheaterMode: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.wl)({ appid: e }),
            { data: o } = (0, E.lv)({ appid: e }),
            { data: c } = ys(e),
            { mutateAsync: d } = wi(e),
            u = !!c?.wishlist,
            g = !c?.owned,
            f = m.useCallback(() => {
              c && d({ wishlist: !c.wishlist, old_interest: c });
            }, [d, c]);
          let h, x;
          g &&
            c &&
            ((h = Y.Z.Localize(
              u ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
            )),
            (x = f));
          const v = m.useCallback(() => {
            window.postMessage({ method: "FocusPurchaseOptions" });
          }, []);
          if (!o) return null;
          let I = (0, F.A)(Se.CarouselItem, Se.TitleCard);
          return (0, t.jsx)(T.Z, {
            className: I,
            onActivate: v,
            onSecondaryActionDescription: h,
            onSecondaryButton: x,
            onOptionsActionDescription: null,
            onOptionsButton: () => {},
            onFocus: n,
            children: (0, t.jsxs)(O.s, {
              position: "absolute",
              inset: "0 0 0 0",
              direction: "column",
              overflow: "hidden",
              children: [
                (0, t.jsx)("img", {
                  className: Se.Header,
                  src: _l(o.asset_url_format, o.header),
                  alt: "",
                }),
                (0, t.jsxs)(O.s, {
                  className: Se.Bottom,
                  flexGrow: "1",
                  flexShrink: "1",
                  direction: "column",
                  overflow: "hidden",
                  padding: "3",
                  paddingTop: "2",
                  children: [
                    (0, t.jsx)(O.s, {
                      flexGrow: "0",
                      flexShrink: "0",
                      children: (0, t.jsx)(b.EY, {
                        contrast: "title",
                        weight: "heavy",
                        size: { initial: "2", md: "4", lg: "6" },
                        children: r?.name,
                      }),
                    }),
                    (0, t.jsx)(de.az, {
                      flexGrow: "1",
                      overflow: "hidden",
                      children: (0, t.jsx)(b.EY, {
                        size: { initial: "1", md: "2", lg: "4" },
                        lineClamp: 7,
                        contrast: "body",
                        children: a?.short_description,
                      }),
                    }),
                    r?.best_purchase_option &&
                      (0, t.jsxs)(O.s, {
                        className: Se.BottomRow,
                        flexGrow: "0",
                        flexShrink: "0",
                        children: [
                          (0, t.jsx)(Us, { id: { appid: e }, bHideNewTag: !0 }),
                          g &&
                            (0, t.jsxs)(O.s, {
                              className: Se.WishlistButton,
                              children: [
                                u
                                  ? (0, t.jsx)(N.qnF, {
                                      className: Se.StarIcon,
                                    })
                                  : (0, t.jsx)(N.T4m, {
                                      className: Se.StarIcon,
                                    }),
                                (0, t.jsx)(Fe.xwO, {
                                  button: "X",
                                  className: Se.ButtonIcon,
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        var Me = i(20338),
          ss = i(84456),
          Ci = i(7817),
          xs = i(71742);
        function tc() {
          let s = document.cookie.match(
            /(^|; )bGameHighlightAutoplayDisabled=([^;]*)/,
          );
          return !(s && s[2] == "true");
        }
        function nc(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let n = s ? "false" : "true";
          document.cookie = `bGameHighlightAutoplayDisabled=${n}; expires=${e.toUTCString()};path=/`;
        }
        function sc() {
          let s = document.cookie.match(
              /(^|; )flGameHighlightPlayerVolume=([^;]*)/,
            ),
            e = s && s[2] ? parseFloat(s[2]) : 80;
          return e < 0 ? 0 : e > 100 ? 100 : e;
        }
        function rc(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10),
            (document.cookie = `flGameHighlightPlayerVolume=${s}; expires=${e.toUTCString()};path=/`);
        }
        function ic() {
          let s = document.cookie.match(
            /(^|; )bGameHighlightAudioEnabled=([^;]*)/,
          );
          return s && s[2] == "true";
        }
        function ac(s) {
          let e = new Date();
          e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let n = s ? "true" : "false";
          document.cookie = `bGameHighlightAudioEnabled=${n}; expires=${e.toUTCString()};path=/`;
        }
        function oc(s) {
          let { children: e } = s,
            [n, r] = (0, m.useState)(tc),
            a = (0, m.useCallback)((h) => {
              nc(h), r(h);
            }, []),
            [o, c] = (0, m.useState)(sc),
            d = (0, m.useCallback)((h) => {
              (h = h * 100), rc(h), c(h);
            }, []),
            [u, g] = (0, m.useState)(ic),
            f = (0, m.useCallback)((h) => {
              ac(!h), g(!h);
            }, []);
          return (0, t.jsx)(Fs.v, {
            autoplayEnabled: n,
            setAutoplayEnabled: a,
            playerVolume: o / 100,
            setPlayerVolume: d,
            audioMuted: !u,
            setAudioMuted: f,
            children: e,
          });
        }
        function lc() {
          return (0, Fs.F)().m_bAutoplayEnabled ?? !1;
        }
        const Ki = (0, m.createContext)(void 0);
        function cc(s) {
          let { orderedItems: e, children: n } = s,
            r = lc(),
            [a, o] = (0, m.useState)(() => uc(e, r)),
            c = (0, m.useMemo)(() => {
              if (e.length == 0)
                return {
                  strActiveID: "",
                  strActiveType: "",
                  strPreviousID: "",
                  strNextID: "",
                  fnSetActive: o,
                };
              let d = e.findIndex((h) => h.key == a);
              d = d || 0;
              let u = e[d].type,
                g = Br("previous", e, d, r),
                f = Br("next", e, d, r);
              return {
                strActiveID: a,
                strActiveType: u,
                strPreviousID: g,
                strNextID: f,
                fnSetActive: o,
              };
            }, [a, o, e, r]);
          return (0, t.jsx)(Ki.Provider, { value: c, children: n });
        }
        function on() {
          let s = (0, m.useContext)(Ki);
          return (
            (0, xs.wT)(
              s != null,
              "useHighlightContext used outside of HighlightContextProvider",
            ),
            s
          );
        }
        function Gi(s) {
          let e = on();
          return s == e.strActiveID;
        }
        function dc(s) {
          let e = on();
          return s == e.strNextID;
        }
        function uc(s, e) {
          return (
            (0, xs.wT)(s.length > 0, "Unexpected length"),
            s[0].type == "trailer" && !e ? Br("next", s, 0, e) : s[0].key
          );
        }
        function Br(s, e, n, r) {
          (0, xs.wT)(e.length > 0, "Unexpected length");
          let a = n;
          do
            if (
              (s == "next"
                ? (a = (a + 1) % e.length)
                : (a = (a - 1 + e.length) % e.length),
              e[a].type != "trailer" || r)
            )
              break;
          while (a != n);
          return e[a].key;
        }
        var Rt = i(69131),
          vs = i(13854);
        function mc(s) {
          let { items: e } = s,
            {
              refStrip: n,
              refTrack: r,
              refThumb: a,
              fnRegisterItemElement: o,
            } = gc(),
            d = (0, Wt.ri)()?.strMode == "theater";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: (0, F.A)(Rt.StripSkeleton, d && Rt.TheaterMode),
                children: [
                  (0, t.jsx)("div", { className: Rt.Items }),
                  (0, t.jsx)("div", { className: Rt.Scrollbar }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: (0, F.A)(Rt.Strip, d && Rt.TheaterMode),
                children: [
                  (0, t.jsx)(pc, {
                    refStrip: n,
                    items: e,
                    registerItemElement: o,
                  }),
                  (0, t.jsx)(yc, { refTrack: r, refThumb: a }),
                ],
              }),
            ],
          });
        }
        function gc() {
          let s = on(),
            e = (0, m.useRef)(null),
            n = (0, m.useRef)(null),
            r = (0, m.useRef)(null),
            a = (0, m.useRef)(null),
            o = (0, m.useRef)(void 0);
          o.current || (o.current = new Map()),
            (0, m.useEffect)(() => {
              const u = r.current,
                g = n.current,
                f = e.current;
              if (!u || !g || !f) return;
              let h = f.matches(":dir(rtl)"),
                x = () => {
                  a.current ||
                    (a.current = requestAnimationFrame(() => {
                      a.current = null;
                      let v = g.getBoundingClientRect(),
                        I = u.getBoundingClientRect(),
                        B = v.width - I.width,
                        A = f.scrollWidth - f.clientWidth,
                        S;
                      h
                        ? (S = (0, vs.Fu)(f.scrollLeft, -A, 0, -B, 0))
                        : (S = (0, vs.Fu)(f.scrollLeft, 0, A, 0, B)),
                        (u.style.transform = `translateX( ${S}px )`);
                    }));
                };
              return (
                f.addEventListener("scroll", x, { passive: !0 }),
                () => {
                  f.removeEventListener("scroll", x),
                    a.current && cancelAnimationFrame(a.current);
                }
              );
            }, []),
            (0, m.useEffect)(() => {
              const u = r.current,
                g = n.current,
                f = e.current;
              if (!u || !g || !f) return;
              let h = null,
                x = f.matches(":dir(rtl)"),
                v = (A) => {
                  if (!h) return;
                  let S = A.clientX - h.nInitialClientX,
                    D = (0, vs.OQ)(h.nInitialPosition + S, 0, h.nTrackWidth),
                    C = (0, vs.Fu)(D, 0, h.nTrackWidth, 0, h.nScrollWidth);
                  x && (C = -(h.nScrollWidth - C)),
                    f.scrollTo({ left: C, behavior: "auto" });
                },
                I = (A) => {
                  g.setPointerCapture(A.pointerId);
                  let S = g.getBoundingClientRect(),
                    D = u.getBoundingClientRect(),
                    C = S.width - D.width,
                    $ = f.scrollWidth - f.clientWidth,
                    G = Math.max(D.left - S.left, 0),
                    Be = A.clientX;
                  A.target != u &&
                    ((G = A.clientX - S.left),
                    (G -= Math.floor(D.width / 2)),
                    (G = (0, vs.OQ)(G, 0, C))),
                    (h = {
                      nInitialPosition: G,
                      nInitialClientX: Be,
                      nTrackWidth: C,
                      nScrollWidth: $,
                    }),
                    (document.body.style.userSelect = "none"),
                    v(A);
                },
                B = (A) => {
                  (h = null), (document.body.style.userSelect = "");
                };
              return (
                g.addEventListener("pointerdown", I),
                g.addEventListener("pointermove", v),
                g.addEventListener("lostpointercapture", B),
                () => {
                  g.removeEventListener("pointerdown", I),
                    g.removeEventListener("pointermove", v),
                    g.removeEventListener("lostpointercapture", B);
                }
              );
            }, []);
          let c = s.strActiveID;
          (0, m.useEffect)(() => {
            let u = o.current.get(c);
            if (!u) return;
            const g = e.current;
            if (!g) return;
            let f = g.getBoundingClientRect(),
              h = u.getBoundingClientRect();
            if (h.left < f.left || h.right > f.right) {
              let x = h.left - f.left + g.scrollLeft;
              g.scrollTo({ left: x, behavior: "smooth" });
            }
          }, [c]);
          let d = (0, m.useCallback)(
            (u, g) => {
              g ? o.current.set(u, g) : o.current.delete(u);
            },
            [o],
          );
          return {
            refStrip: e,
            refTrack: n,
            refThumb: r,
            fnRegisterItemElement: d,
          };
        }
        function pc(s) {
          let { refStrip: e, items: n, registerItemElement: r } = s,
            a = fc(),
            o = n.map((c) =>
              (0, t.jsx)(hc, { item: c, registerItemElement: r }, c.key),
            );
          return (0, t.jsx)("div", {
            ref: e,
            className: Rt.StripItems,
            onKeyDown: a,
            tabIndex: 0,
            children: o,
          });
        }
        function fc() {
          let s = on();
          return (0, m.useCallback)(
            (n) => {
              n.repeat ||
                (n.code == "ArrowLeft"
                  ? (n.currentTarget.matches(":dir(rtl)")
                      ? s.strNextID && s.fnSetActive(s.strNextID)
                      : s.strPreviousID && s.fnSetActive(s.strPreviousID),
                    n.preventDefault())
                  : n.code == "ArrowRight" &&
                    (n.currentTarget.matches(":dir(rtl)")
                      ? s.strPreviousID && s.fnSetActive(s.strPreviousID)
                      : s.strNextID && s.fnSetActive(s.strNextID),
                    n.preventDefault()));
            },
            [s],
          );
        }
        function hc(s) {
          let { item: e, registerItemElement: n } = s,
            r = on(),
            a = e.key == r.strActiveID,
            o = () => r.fnSetActive(e.key),
            c = e.key,
            d = (0, m.useCallback)((f) => n(c, f), [c, n]),
            u = e.data.thumbnail ? e.data.thumbnail : "",
            g = (0, F.A)(Rt.Item, a && Rt.Active);
          return (0, t.jsxs)("div", {
            ref: d,
            className: g,
            onClick: o,
            children: [
              !!u && (0, t.jsx)("img", { src: u, alt: "" }),
              e.type == "trailer" &&
                (0, t.jsx)("div", {
                  className: Rt.PlayIcon,
                  children: (0, t.jsx)(Ui.ud, {}),
                }),
            ],
          });
        }
        function yc(s) {
          let { refTrack: e, refThumb: n } = s,
            r = on(),
            a = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
            o = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
          return (0, t.jsxs)("div", {
            className: Rt.StripScrollbar,
            children: [
              (0, t.jsx)("div", {
                className: Rt.Arrow,
                onClick: a,
                children: (0, t.jsx)(Cs, { direction: "left" }),
              }),
              (0, t.jsx)("div", {
                ref: e,
                className: Rt.Track,
                children: (0, t.jsx)("div", { ref: n, className: Rt.Thumb }),
              }),
              (0, t.jsx)("div", {
                className: Rt.Arrow,
                onClick: o,
                children: (0, t.jsx)(Cs, { direction: "right" }),
              }),
            ],
          });
        }
        function Cs(s) {
          let { direction: e } = s;
          return e == "right"
            ? (0, t.jsx)("svg", {
                viewBox: "0 0 49 79",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, t.jsx)("path", {
                  d: "M8.81647 0L48 39.5005L8.81647 79L0 70.1124L30.3671 39.4995L0 8.88756L8.81647 0Z",
                  fill: "currentColor",
                }),
              })
            : (0, t.jsx)("svg", {
                viewBox: "0 0 49 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, t.jsx)("path", {
                  d: "M39.3427 79.6279L0.159182 40.1274L39.3427 0.627931L48.1592 9.51549L17.7921 40.1284L48.1592 70.7404L39.3427 79.6279Z",
                  fill: "currentColor",
                }),
              });
        }
        var Yi = i(82734),
          xc = i(95396),
          Ks = i(86048);
        const vc = 5e3;
        function jc(s) {
          let { appName: e, trailers: n, screenshots: r } = s,
            a = bc(),
            o = Ri(n, r);
          return (
            Bc(o),
            o.length == 0
              ? null
              : (0, t.jsx)(Wt.QY, {
                  supportsTheater: !a,
                  supportsFullscreen: (0, Yi.tg)(),
                  children: (0, t.jsx)(oc, {
                    children: (0, t.jsx)(cc, {
                      orderedItems: o,
                      children: (0, t.jsxs)(Ec, {
                        children: [
                          (0, t.jsx)(Mc, { appName: e, items: o }),
                          (0, t.jsx)(mc, { items: o }),
                        ],
                      }),
                    }),
                  }),
                })
          );
        }
        function bc() {
          return (
            (0, xc.$)(`(max-width: ${Me.storeNarrowResponsiveWidth})`) ||
            U.TS.IN_MOBILE_WEBVIEW
          );
        }
        function Bc(s) {
          let e = s.length;
          (0, m.useLayoutEffect)(() => {
            if (e < 1) return;
            document
              .querySelectorAll(".gamehighlight_desktopskeleton")
              .forEach((r) => r.remove());
          }, [e]);
        }
        const ki = (0, m.createContext)(!1);
        function Ic() {
          return (0, m.useContext)(ki);
        }
        function Ec(s) {
          let { children: e } = s,
            [n, r] = (0, m.useState)(!1),
            a = (0, m.useCallback)((u) => r(u.isIntersecting), []),
            o = (0, re.BL)(a),
            { refRoot: c } = Pc(n),
            d = (0, re.Ue)(o, c);
          return (0, t.jsx)(ki.Provider, {
            value: n,
            children: (0, t.jsx)("div", { ref: d, children: e }),
          });
        }
        function Pc(s) {
          let e = (0, m.useRef)(null),
            n = (0, m.useRef)(0),
            r = (0, m.useRef)(!1),
            a = (0, m.useRef)(s),
            o = on(),
            c = (0, m.useRef)(o);
          c.current = o;
          let u = ((0, Wt.ri)()?.strMode ?? "none") != "none",
            g = (0, m.useRef)(u);
          g.current = u;
          let f = (0, m.useCallback)(() => {
              if (
                !c.current ||
                c.current.strActiveType != "screenshot" ||
                n.current ||
                r.current ||
                g.current ||
                !a.current
              )
                return;
              let v = () => {
                (n.current = 0), c.current.fnSetActive(c.current.strNextID);
              };
              n.current = window.setTimeout(v, vc);
            }, []),
            h = (0, m.useCallback)(() => {
              n.current && (window.clearTimeout(n.current), (n.current = 0));
            }, []),
            x = o.strActiveID;
          return (
            (0, m.useEffect)(() => {
              f();
            }, [x]),
            (0, m.useEffect)(() => {
              u ? h() : f();
            }, [u]),
            (0, m.useEffect)(() => {
              const v = e.current;
              if (!v) return;
              let I = () => {
                  document.visibilityState == "visible" ? f() : h();
                },
                B = () => {
                  (r.current = !0), h();
                },
                A = () => {
                  (r.current = !1), f();
                };
              return (
                v.addEventListener("pointerenter", B),
                v.addEventListener("pointerleave", A),
                document.addEventListener("visibilitychange", I),
                () => {
                  v.removeEventListener("pointerenter", B),
                    v.removeEventListener("pointerleave", A),
                    document.addEventListener("visibilitychange", I);
                }
              );
            }, []),
            (0, m.useEffect)(() => {
              (a.current = s), s ? f() : h();
            }, [s, f, h]),
            { refRoot: e }
          );
        }
        function Mc(s) {
          let { appName: e, items: n } = s,
            r = on(),
            a = Ac(),
            o = (0, Wt.ri)(),
            c = o?.strMode == "theater",
            [d, u] = zc(),
            [g, f] = (0, Ks.Rb)(),
            h = g ? r.strActiveID : "",
            x = Sc(r),
            v = (0, re.Ue)(o?.refTheater, x),
            I = n.map((S) =>
              S.type == "screenshot"
                ? (0, t.jsx)(
                    Nc,
                    { id: S.key, screenshot: S.data, focus: S.key == h },
                    S.key,
                  )
                : S.type == "trailer"
                  ? (0, t.jsx)(
                      Dc,
                      { id: S.key, trailer: S.data, focus: S.key == h },
                      S.key,
                    )
                  : null,
            ),
            B = r.strPreviousID ? () => r.fnSetActive(r.strPreviousID) : void 0,
            A = r.strNextID ? () => r.fnSetActive(r.strNextID) : void 0;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Tc, {
                ref: v,
                className: Me.TheaterDialog,
                ...f,
                children: (0, t.jsxs)("div", {
                  className: Me.TheaterModeFrame,
                  children: [
                    (0, t.jsx)(Lc, { appName: e }),
                    (0, t.jsxs)("div", {
                      ref: o?.refFullscreen,
                      className: Me.ItemViewArea,
                      ...u,
                      onKeyDown: a,
                      tabIndex: 0,
                      children: [
                        I,
                        (0, t.jsx)("div", {
                          className: (0, F.A)(
                            Me.FullscreenArrow,
                            d && Me.Visible,
                            Me.Previous,
                          ),
                          onClick: B,
                          "data-keepcontrols": !0,
                          children: (0, t.jsx)(Cs, { direction: "left" }),
                        }),
                        (0, t.jsx)("div", {
                          className: (0, F.A)(
                            Me.FullscreenArrow,
                            d && Me.Visible,
                            Me.Next,
                          ),
                          onClick: A,
                          "data-keepcontrols": !0,
                          children: (0, t.jsx)(Cs, { direction: "right" }),
                        }),
                      ],
                    }),
                    (0, t.jsx)(Oc, { items: n, activeItem: r.strActiveID }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, F.A)(Me.SkeletonViewArea, c && Me.TheaterMode),
              }),
            ],
          });
        }
        function Tc(s) {
          let { ref: e, children: n, ...r } = s,
            a = (0, Wt.ri)(),
            o = a?.strMode,
            c = (0, Wt.Dy)(a, "none"),
            d = (0, m.useCallback)(
              (u) => {
                u.target === u.currentTarget && c();
              },
              [c],
            );
          return (
            (0, m.useEffect)(() => {
              if (o != "theater") return;
              let u = (g) => {
                g.key == "Escape" && !g.repeat && c();
              };
              return (
                window.addEventListener("keydown", u),
                () => window.removeEventListener("keydown", u)
              );
            }, [o, c]),
            (0, t.jsx)("div", {
              ref: e,
              ...r,
              popover: "manual",
              onClick: d,
              children: n,
            })
          );
        }
        function Sc(s) {
          let e = (0, m.useCallback)(
            (n) => {
              n == "left" && s.strNextID
                ? s.fnSetActive(s.strNextID)
                : n == "right" &&
                  s.strPreviousID &&
                  s.fnSetActive(s.strPreviousID);
            },
            [s],
          );
          return (0, Ks.zO)(e);
        }
        function Lc(s) {
          let { appName: e } = s,
            n = (0, Wt.ri)(),
            r = (0, Wt.Dy)(n, "none");
          return (0, t.jsxs)("div", {
            className: Me.TheaterModeHeader,
            children: [
              (0, t.jsx)("div", {
                className: Me.Center,
                children: (0, L.we)("#GameHighlight_Theater_Header", e),
              }),
              (0, t.jsx)("div", {
                className: Me.Right,
                children: (0, t.jsx)(N.tmm, { onClick: r }),
              }),
            ],
          });
        }
        function Oc(s) {
          let { items: e, activeItem: n } = s,
            r = e.findIndex((o) => n && o.key == n),
            a = "";
          return (
            r >= 0 &&
              (a = (0, L.we)(
                "#GameHighlight_Theater_ItemCount",
                r + 1,
                e.length,
              )),
            (0, t.jsx)("div", {
              className: Me.TheaterModeFooter,
              children: a.length > 0 && (0, t.jsx)("div", { children: a }),
            })
          );
        }
        function Ac() {
          let s = on();
          return (0, m.useCallback)(
            (n) => {
              n.repeat ||
                s.strActiveType == "trailer" ||
                (n.code == "ArrowLeft"
                  ? (n.currentTarget.matches(":dir(rtl)")
                      ? s.strNextID && s.fnSetActive(s.strNextID)
                      : s.strPreviousID && s.fnSetActive(s.strPreviousID),
                    n.preventDefault())
                  : n.code == "ArrowRight" &&
                    (n.currentTarget.matches(":dir(rtl)")
                      ? s.strPreviousID && s.fnSetActive(s.strPreviousID)
                      : s.strNextID && s.fnSetActive(s.strNextID),
                    n.preventDefault()));
            },
            [s],
          );
        }
        function zc() {
          let [s, e] = (0, ss.if)(),
            n = (0, m.useRef)({ element: void 0, bKeepControls: !1 }),
            r = (0, m.useCallback)(
              (g) => {
                if (g.target == n.current.element) return;
                let f = (0, ss.Ae)(g);
                n.current = { element: g.target, bKeepControls: f };
              },
              [n],
            ),
            a = (0, m.useCallback)(
              (g) => {
                if (n.current.bKeepControls) {
                  e(!0, 0);
                  return;
                }
                e(!0, g);
              },
              [n, e],
            ),
            o = (0, m.useCallback)(
              (g) => {
                g.pointerType != "touch" && (r(g), a((0, ss.Av)(g)));
              },
              [a, r],
            ),
            c = (0, m.useCallback)(
              (g) => {
                g.pointerType != "touch" && (r(g), a((0, ss.Av)(g)));
              },
              [r, a],
            ),
            d = (0, m.useCallback)(
              (g) => {
                g.pointerType != "touch" &&
                  ((n.current = { element: void 0, bKeepControls: !1 }),
                  a((0, ss.Ug)()));
              },
              [n, a],
            ),
            u = (0, m.useCallback)(
              (g) => {
                a((0, ss.Av)(g));
              },
              [a],
            );
          return [
            s,
            {
              onPointerEnter: o,
              onPointerMove: c,
              onPointerLeave: d,
              onPointerDown: u,
            },
          ];
        }
        function Nc(s) {
          let { id: e, screenshot: n, focus: r } = s,
            a = Gi(e),
            o = dc(e),
            c = Vi(a || o),
            d = (0, Wt.ri)(),
            u = (0, Wt.Dy)(d, "theater"),
            g = !d?.strMode || d.strMode == "none",
            f = (0, Ks.b$)(r);
          if (!c) return null;
          let h = (0, F.A)(
              Me.ViewedItem,
              a && Me.Active,
              Me.Screenshot,
              g && Me.PageEmbedded,
            ),
            x = n.full,
            v = g ? u : void 0;
          return (0, t.jsxs)("div", {
            ref: f,
            className: h,
            onClick: v,
            tabIndex: 0,
            children: [
              (0, t.jsx)("img", { src: x, alt: n.altText }),
              (0, t.jsxs)("div", {
                className: Me.Controls,
                children: [
                  d?.bSupportsTheater && (0, t.jsx)(Ci.tS, {}),
                  d?.bSupportsFullscreen && (0, t.jsx)(Ci.Wc, {}),
                ],
              }),
            ],
          });
        }
        function Dc(s) {
          let { id: e, trailer: n, focus: r } = s,
            a = Gi(e),
            o = Vi(a),
            [c, d] = (0, re.TP)(),
            u = Ic(),
            g = on(),
            f = (0, m.useCallback)(() => g.fnSetActive(g.strNextID), [g]);
          if (!o) return null;
          let h = (0, F.A)(Me.ViewedItem, a && Me.Active, Me.Trailer);
          return (0, t.jsx)(Wt.vG, {
            drop: !(0, Yi.tg)(),
            children: (0, t.jsx)("div", {
              ref: d,
              className: h,
              children: (0, t.jsx)(hr.P, {
                dashManifests: n.dashManifests,
                hlsManifest: n.hlsManifest,
                screenshot: n.poster,
                altText: n.title,
                forcePause: !a || !c || !u,
                onPlaybackEnd: f,
                title: n.title,
                category: n.category,
                statsURL: n.statsURL,
                focus: r,
              }),
            }),
          });
        }
        function Vi(s) {
          let e = (0, m.useRef)(!1);
          return s && (e.current = !0), e.current;
        }
        var kn = i(55051),
          kt = i(26356),
          Fc = i(46477),
          Wc = i(6046),
          Rc = i(35111),
          fn = i.n(Rc),
          Vn = i(41944);
        function wc(s) {
          const { appID: e, results: n, appName: r, tab: a = kt.ZJ } = s,
            o = (0, w.Qn)();
          let c;
          a == kt.JR
            ? (c = (0, L.we)(
                "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
              ))
            : a == kt.c9
              ? (c = (0, L.we)(
                  "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
                ))
              : a == kt.bY
                ? (c = (0, L.we)(
                    "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
                  ))
                : (c = o
                    ? (0, L.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
                      )
                    : (0, L.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
                      ));
          const d = m.useId();
          return n
            ? (0, t.jsxs)("div", {
                className: fn().BannerContainer,
                role: "group",
                "aria-labelledby": d,
                children: [
                  (0, t.jsx)("div", {
                    className: fn().BannerHeader,
                    id: d,
                    children: c,
                  }),
                  (0, t.jsx)(Qi, { ...s }),
                ],
              })
            : null;
        }
        function Qi(s) {
          const {
              appID: e,
              results: n,
              appName: r,
              tab: a = kt.ZJ,
              className: o,
            } = s,
            c = (0, w.Qn)();
          let d, u;
          if (
            (a == kt.c9
              ? ((d = (0, t.jsx)(Vn.aw, {
                  category: n.steamos_resolved_category,
                })),
                (u = (0, t.jsx)(Uc, { category: n.steamos_resolved_category })))
              : a == kt.JR
                ? ((d = (0, t.jsx)(Vn.Ez, {
                    category: n.machine_resolved_category,
                  })),
                  (u = (0, t.jsx)(Ir, {
                    category: n.machine_resolved_category,
                  })))
                : a == kt.bY
                  ? ((d = (0, t.jsx)(Vn.Ez, {
                      category: n.frame_resolved_category,
                    })),
                    (u = (0, t.jsx)(Ir, {
                      category: n.frame_resolved_category,
                    })))
                  : ((d = (0, t.jsx)(Vn.Ez, { category: n.resolved_category })),
                    (u = (0, t.jsx)(Ir, { category: n.resolved_category }))),
            !n)
          )
            return null;
          const g = n?.steam_deck_blog_url && a != kt.bY;
          return (0, t.jsxs)("div", {
            className: (0, F.A)(
              c ? fn().BannerContent : fn().BannerContentDesktop,
              o,
            ),
            children: [
              (0, t.jsxs)("div", { children: [d, u] }),
              (0, t.jsx)(Cc, {
                results: n,
                learnMore: (0, L.we)(
                  "#SteamDeckVerified_Store_CompatSection_LearnMore",
                ),
                appName: r || "",
                eStartingTab: a,
              }),
              g && (0, t.jsx)("div", { className: fn().Divider }),
              g &&
                (0, t.jsx)(Vn.Tz, {
                  url: n.steam_deck_blog_url,
                  containerClass: fn().DeveloperComments_Anchor,
                  bIncludeIcon: !0,
                }),
            ],
          });
        }
        function Ir(s) {
          const { category: e } = s;
          return (0, t.jsx)("span", {
            className: fn().CompatibilityDetailRatingDescription,
            children: (0, L.we)((0, Vn.Dy)(e)),
          });
        }
        function Uc(s) {
          const { category: e } = s;
          return (0, t.jsx)("span", {
            className: fn().CompatibilityDetailRatingDescription,
            children: (0, L.we)((0, Vn.wW)(e)),
          });
        }
        function Cc(s) {
          const {
              results: e,
              learnMore: n,
              appName: r,
              eStartingTab: a = kt.ZJ,
            } = s,
            [o, c] = (0, m.useState)(!1);
          let d = m.useCallback(
            (f) => {
              const h = (0, Fc.D)();
              h && h.AddEvent(kn.Xm.gS), c(!0);
            },
            [c],
          );
          const u = () => {
            c(!1);
          };
          let g = {
            onOKButton: void 0,
            onOKActionDescription: null,
            onCancelActionDescription: Y.Z.Localize("#Button_Close"),
            onCancelButton: () => c(!1),
          };
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsx)(P.Ii, {
                className: fn().LearnMore,
                onClick: d,
                children: n,
              }),
              (0, t.jsx)(q.mt, {
                active: o,
                onDismiss: u,
                modalClassName: "DeckVerifiedModalDialog",
                children: (0, t.jsx)(ie.q, {
                  children: (0, t.jsx)(Wc.Ay, {
                    results: e,
                    buttonProps: g,
                    appName: r,
                    eStartingTab: a,
                  }),
                }),
              }),
            ],
          });
        }
        const Kc = wc;
        var Gc = i(4880),
          en = i(72604),
          Er = i(66243),
          Yc = i(47604),
          kc = i(64238),
          Qn = i.n(kc),
          be = i(45931),
          wt = i(37520),
          zt = i(46146),
          Te = i(35038),
          ln = i(19982),
          Xt = i(68312);
        const Rn = "0",
          $i = "-1",
          js = "wishlistcategories";
        function Zi(s, e, n) {
          return [js, s, e, n];
        }
        function Ji(s, e, n, r) {
          return {
            queryKey: Zi(e, !n || n === "0" ? "" : n, r),
            queryFn: () => Vc(s, e, n, r),
            staleTime: 600 * 1e3,
          };
        }
        async function Vc(s, e, n, r) {
          if (!e || (n != e && !r)) return [];
          let a = [];
          if (r) {
            const o = Te.w.Init(ln.Y);
            o.Body().set_steamid(e),
              o.Body().set_share_token(r),
              (a =
                (await ln.FQ.GetSharedWishlistCategories(s, o))
                  .Body()
                  .toObject().categories ?? []);
          } else {
            const o = Te.w.Init(ln.tP);
            a =
              (await ln.FQ.GetWishlistCategories(s, o)).Body().toObject()
                .categories ?? [];
          }
          return Sr(a);
        }
        function Gs(s, e) {
          const n = (0, rn.LH)(),
            r = (0, Xt.KV)();
          return (0, an.I)(Ji(r, s, n, e));
        }
        function Qc(s, e) {
          const n = (0, rn.LH)(),
            r = (0, Xt.KV)(),
            a = m.useCallback((o) => new Map(o.map((c) => [c.id, c])), []);
          return (0, an.I)({ ...Ji(r, s, n, e), select: a });
        }
        const Pr = "wishlistappidcategories";
        function Mr(s, e) {
          return [Pr, s, e];
        }
        function $c(s, e, n) {
          return {
            queryKey: Mr(e, n),
            queryFn: async () => {
              const r = Te.w.Init(ln.vu);
              r.Body().set_appid(n);
              const a = await ln.FQ.GetItemCategories(s, r);
              return a.BSuccess()
                ? Sr(a.Body().toObject().categories ?? [])
                : [];
            },
            staleTime: 600 * 1e3,
          };
        }
        function Tr(s, e) {
          const n = (0, Xt.KV)();
          return (0, an.I)($c(n, s, e));
        }
        function Xi(s) {
          const e = (0, Xt.KV)(),
            n = (0, pn.jE)();
          return (0, ps.n)({
            mutationFn: async (r) => {
              const a = Te.w.Init(ln.Vh);
              a.Body().set_appid(r.appid),
                a.Body().set_category_name(r.categoryName),
                a.Body().set_categoryid(r.categoryID);
              const o = await ln.FQ.AddWishlistItemCategory(e, a);
              let c = { eresult: o.GetEResult() };
              return (
                o.BSuccess() &&
                  (c.category = {
                    id: o.Body().categoryid(),
                    name: o.Body().name(),
                    cItems: o.Body().item_count(),
                    bNotificationOptIn: !!o.Body().notification_opt_in(),
                  }),
                c
              );
            },
            onSuccess(r, a) {
              n.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", s],
                exact: !1,
              }),
                n.invalidateQueries({ queryKey: [js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: Mr(s, a.appid) });
            },
          });
        }
        function Hi(s) {
          const e = (0, Xt.KV)(),
            n = (0, pn.jE)();
          return (0, ps.n)({
            mutationFn: async (r) => {
              const a = Te.w.Init(ln.sF);
              return (
                a.Body().set_appid(r.appid),
                a.Body().set_categoryid(r.categoryID),
                (await ln.FQ.RemoveWishlistItemCategory(e, a)).GetEResult()
              );
            },
            onSuccess(r, a) {
              n.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", s],
                exact: !1,
              }),
                n.invalidateQueries({ queryKey: [js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: Mr(s, a.appid) });
            },
          });
        }
        function kh(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async (r) => {
              const a = CProtoBufMsg.Init(
                CWishlist_RenameWishlistCategory_Request,
              );
              return (
                a.Body().set_categoryid(r.categoryID),
                a.Body().set_name(r.name),
                {
                  eresult: (
                    await WishlistService.RenameWishlistCategory(e, a)
                  ).GetEResult(),
                }
              );
            },
            onSuccess() {
              n.invalidateQueries({ queryKey: [js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: [Pr, s], exact: !1 });
            },
          });
        }
        const qi = 256;
        function Vh(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient();
          return useMutation({
            mutationFn: async (r) => {
              const a = {
                eresult: k_EResultOK,
                rgAppIDsUpdated: [],
                rgAppIDsFailed: [],
              };
              if (r.rgAppIDs.length === 0 || (!r.categoryID && !r.categoryName))
                return (a.eresult = k_EResultInvalidParam), a;
              let o = r.categoryID;
              for (let c = 0; c < r.rgAppIDs.length; c += qi) {
                const d = r.rgAppIDs.slice(c, c + qi),
                  u = CProtoBufMsg.Init(
                    CWishlist_SetWishlistItemCategoryBulk_Request,
                  );
                for (const h of d) u.Body().add_appids(h);
                o && o !== Rn
                  ? u.Body().set_categoryid(o)
                  : u.Body().set_category_name(r.categoryName),
                  u.Body().set_remove(!!r.bRemove);
                const g = await WishlistService.SetWishlistItemCategoryBulk(
                  e,
                  u,
                );
                if (!g.BSuccess()) {
                  (a.eresult = g.GetEResult()),
                    a.rgAppIDsFailed.push(...r.rgAppIDs.slice(c));
                  break;
                }
                const f = g.Body().toObject();
                a.rgAppIDsUpdated.push(...(f.appids_updated ?? [])),
                  a.rgAppIDsFailed.push(...(f.appids_failed ?? [])),
                  !a.category &&
                    f.category &&
                    ((a.category = Sr([f.category])[0]),
                    (o = o ?? a.category?.id));
              }
              return a;
            },
            onSuccess(r) {
              r.rgAppIDsUpdated.length !== 0 &&
                (n.invalidateQueries({
                  queryKey: ["WishlistSortedFiltered", s],
                  exact: !1,
                }),
                n.invalidateQueries({ queryKey: [js, s], exact: !1 }),
                n.invalidateQueries({ queryKey: [Pr, s], exact: !1 }));
            },
          });
        }
        const Ys = "wishlist_recent_categories";
        function _i(s) {
          return {
            queryKey: [Ys],
            queryFn: async () => (await s.GetObject(Ys)) ?? [],
            staleTime: 3600 * 1e3,
          };
        }
        function ea() {
          const s = (0, Xt.rX)();
          return (0, an.I)(_i(s));
        }
        function ta() {
          const s = (0, Xt.rX)(),
            e = (0, pn.jE)();
          return (0, ps.n)({
            mutationFn: async (n) => {
              const r = (await e.ensureQueryData(_i(s))) ?? [],
                a = Array.from(new Set([...n.rgCategoryIDs, r])).slice(0, 3);
              return await s.StoreObject(Ys, a), a;
            },
            onSuccess: async (n) => {
              e.setQueryData([Ys], n);
            },
          });
        }
        function Sr(s) {
          return (
            s.map((n) => ({
              id: n.categoryid,
              name: n.name,
              cItems: n.item_count ?? 0,
              bNotificationOptIn: !!n.notification_opt_in,
            })) ?? []
          ).sort((n, r) =>
            n.cItems !== r.cItems
              ? r.cItems - n.cItems
              : n.name.localeCompare(r.name),
          );
        }
        function na(s) {
          const { data: e } = Gs(s);
          return m.useMemo(() => {
            let n = [
              {
                id: Rn,
                name: (0, be.g)("#Wishlist_Categories_Suggested_Birthday"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: Rn,
                name: (0, be.g)("#Wishlist_Categories_Suggested_Recommended"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: Rn,
                name: (0, be.g)("#Wishlist_Categories_Suggested_Discount"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
            ];
            for (const r of e ?? [])
              n = n.filter(
                (a) =>
                  a.name.toLocaleLowerCase() !== r.name.toLocaleLowerCase(),
              );
            return n;
          }, [e]);
        }
        function Qh(s) {
          const e = useActiveServiceTransport(),
            n = useQueryClient(),
            r = Zi(s, s, void 0);
          return useMutation({
            mutationFn: async (a) => {
              const o = await Zc(e, a);
              if (o !== k_EResultOK)
                throw new Error(
                  `SetWishlistCategoryNotifications returned EResult ${o}`,
                );
            },
            onMutate: async (a) => {
              await n.cancelQueries({ queryKey: r }),
                n.setQueryData(r, (o) => {
                  if (!o) return a;
                  const c = new Map(a.map((d) => [d.id, d]));
                  return o.map((d) => c.get(d.id) ?? { ...d });
                });
            },
            onError: () => n.invalidateQueries({ queryKey: r }),
          });
        }
        async function Zc(s, e) {
          if (e.length === 0) return k_EResultInvalidParam;
          const n = CProtoBufMsg.Init(
            CWishlist_SetWishlistCategoryNotifications_Request,
          );
          for (const a of e) {
            const o =
              new CWishlist_SetWishlistCategoryNotifications_Request_CategorySettings();
            o.set_categoryid(a.id),
              o.set_notification_opt_in(a.bNotificationOptIn),
              n.Body().add_categories(o);
          }
          return (
            await WishlistService.SetWishlistCategoryNotifications(s, n)
          ).GetEResult();
        }
        const Jc = parseInt(zt.wishlistCategoryMaxDisplayChars);
        var Lr = ((s) => (
          (s[(s.k_ECategoryButtonAction_None = 0)] =
            "k_ECategoryButtonAction_None"),
          (s[(s.k_ECategoryButtonAction_Filter = 1)] =
            "k_ECategoryButtonAction_Filter"),
          (s[(s.k_ECategoryButtonAction_Add = 2)] =
            "k_ECategoryButtonAction_Add"),
          (s[(s.k_ECategoryButtonAction_Remove = 3)] =
            "k_ECategoryButtonAction_Remove"),
          (s[(s.k_ECategoryButtonAction_Select = 4)] =
            "k_ECategoryButtonAction_Select"),
          s
        ))(Lr || {});
        function bs(s) {
          const {
              rgCategories: e,
              header: n,
              onClick: r,
              eAction: a,
              bMultiline: o,
              bShowEmptyLabel: c,
              bShowAllButton: d,
              containerClassName: u,
              size: g,
              bShowCounts: f,
            } = s,
            h = m.useRef(null),
            x = a !== 3 && a !== 0;
          let v = [],
            I = !1;
          for (const A of e) {
            A.bSelected && (I = !0);
            const S = A.id === Rn ? A.name : A.id,
              D = (0, t.jsx)(
                sa,
                {
                  category: A,
                  selected: x && !!A.bSelected,
                  onClick: r ? () => r(A.name, A.id) : void 0,
                  eAction: a ?? 0,
                  bShowCount: f,
                },
                S,
              );
            v.push(D);
          }
          const B = (0, be.g)("#Wishlist_Controls_Categories_All");
          return (
            m.useEffect(() => {
              h.current?.Node().BFocusWithin() &&
                h.current.Node().ForceMeasureFocusRing();
            }, [e]),
            (0, t.jsxs)(T.Z, {
              className: Qn()(zt.CategoriesCtn, u),
              scrollIntoViewWhenChildFocused: !0,
              children: [
                n !== null &&
                  (0, t.jsx)("span", {
                    className: zt.CategoryListHeader,
                    children:
                      n ?? (0, be.g)("#Wishlist_Controls_Categories_Header"),
                  }),
                (0, t.jsxs)(T.Z, {
                  className: Qn()(
                    zt.CategoryList,
                    o && zt.Multiline,
                    g === "small" && zt.Small,
                    g === "default" && zt.ForceDefaultSize,
                  ),
                  "flow-children": o ? "grid" : "row",
                  focusableIfEmpty: e.length > 0,
                  navRef: h,
                  children: [
                    d &&
                      (0, t.jsx)(sa, {
                        category: {
                          cItems: 0,
                          id: $i,
                          name: B,
                          bNotificationOptIn: !1,
                        },
                        selected: !I,
                        onClick: () => r && r(B, $i),
                        onOKActionDescription: (0, be.g)(
                          "#Wishlist_Gamepad_Filter_Clear_Category",
                        ),
                      }),
                    v,
                    !e.length &&
                      c &&
                      (0, t.jsx)("div", {
                        className: zt.CategoryListHeader,
                        children: (0, be.g)("#Wishlist_Categories_None"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function sa(s) {
          const {
              category: e,
              selected: n,
              className: r,
              onOKActionDescription: a,
              onClick: o,
              eAction: c,
              bShowCount: d,
            } = s,
            u = c === 3,
            g = c === 1,
            f = e.name.length >= Jc;
          let h = a;
          g && !h
            ? (h = (0, be.g)("#Wishlist_Gamepad_Filter_Category"))
            : c === 2 && !h
              ? (h = (0, be.g)("#Wishlist_Gamepad_Add_Category"))
              : c === 3 &&
                !h &&
                (h = (0, be.g)("#Wishlist_Gamepad_Removecategory"));
          const x = {
              onOKActionDescription: h,
              onOKButton: () => o && o(),
              focusClassName: zt.Focused,
            },
            v = !!o;
          let I;
          return (
            f
              ? (I = e.name)
              : u && v
                ? (I = (0, be.g)(
                    "#Wishlist_Controls_Categories_Remove_Tooltip",
                  ))
                : g &&
                  v &&
                  (I = (0, be.g)(
                    "#Wishlist_Controls_Categories_Filter_Tooltip",
                  )),
            (0, t.jsx)(Gn.Gq, {
              toolTipContent: I,
              usePointerEvents: !0,
              children: (0, t.jsxs)(P.fu, {
                className: Qn()(
                  zt.CategoryBtn,
                  u && zt.Removable,
                  n && zt.Selected,
                  !v && zt.NotActionable,
                  r,
                ),
                onClick: o,
                ...x,
                children: [
                  (0, t.jsx)("span", {
                    className: zt.CategoryName,
                    children: e.name,
                  }),
                  d &&
                    e.cItems > 0 &&
                    (0, t.jsxs)("span", { children: ["(", e.cItems, ")"] }),
                  u && (0, t.jsx)(N.i6V, {}),
                ],
              }),
            })
          );
        }
        function Xc(s) {
          const { categoryCount: e, onClick: n, bSimulateHover: r } = s;
          return (0, t.jsx)(Gn.Gq, {
            toolTipContent: (0, be.g)("#Wishlist_Controls_Categories_Manage"),
            usePointerEvents: !0,
            children: (0, t.jsx)(P.fu, {
              className: Qn()(
                zt.CategoryBtn,
                zt.CategorySettingsBtn,
                r && zt.Focused,
              ),
              onClick: n,
              children: e > 0 ? (0, t.jsx)(N.vmx, {}) : (0, t.jsx)(N.FWt, {}),
            }),
          });
        }
        const ra = 16;
        function ia(s) {
          const {
              appid: e,
              steamid: n,
              onClose: r,
              filteredCategoryIDs: a,
              onAdvanced: o,
            } = s,
            [c, d] = m.useState([]),
            u = ta(),
            { data: g } = (0, E.J$)({ appid: e }),
            f =
              g && g.name && g.visible
                ? (0, be.g)("#Wishlist_Controls_Categories_Manageitem", g?.name)
                : (0, be.g)("#Wishlist_Controls_Categories_Manage"),
            { data: h } = Gs(n),
            x = !!o && !!h && h.length > 0,
            v = m.useCallback(() => {
              u.mutate({ rgCategoryIDs: c.reverse() }), r();
            }, [u, c, r]),
            I = (B) => {
              a && a.has(B) && v();
            };
          return (0, t.jsx)(Yc.s, {
            onClose: v,
            strTitle: f,
            navID: "AddWishlistCategoryDialog",
            className: wt.DialogContent,
            children: (0, t.jsxs)(T.Z, {
              "flow-children": "column",
              children: [
                (0, t.jsx)(qc, {
                  appid: e,
                  steamid: n,
                  onCategoryAdd: (B) => d([...c, B].slice(-3)),
                  onCategoryRemove: I,
                }),
                (0, t.jsxs)(T.Z, {
                  className: wt.Buttons,
                  children: [
                    x &&
                      (0, t.jsx)(Er.Oh, {
                        onClick: o,
                        children: (0, be.g)(
                          "#Wishlist_Categories_Dialog_Advanced",
                        ),
                      }),
                    (0, t.jsx)(Er.n9, {
                      onClick: v,
                      children: Y.Z.Localize("#Button_Done"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Hc(s, e, n, r) {
          const { data: a } = Tr(n, e),
            { data: o } = ea(),
            c = (d, u) => {
              const g = new Set(u);
              return [
                ...u.map((h) => d.find((x) => x.id === h)).filter((h) => !!h),
                ...d.filter((h) => !g.has(h.id)),
              ];
            };
          return m.useMemo(() => {
            if (!a) return [];
            const d = new Set(a?.map((x) => x.id) ?? []),
              u = s.filter((x) => !d.has(x.id));
            if (!r || r.length === 0)
              return c(
                u.filter((x) => x.cItems > 0),
                o ?? [],
              );
            const g = r.toLocaleLowerCase();
            let f = !1,
              h = u.filter((x) => {
                let v = x.name.toLocaleLowerCase();
                return f || (f = v === g), v.indexOf(g) > -1;
              });
            return (
              (h = c(h, [])),
              f ||
                h.unshift({
                  id: Rn,
                  name: r,
                  cItems: 0,
                  bNotificationOptIn: !1,
                }),
              h
            );
          }, [a, o, s, r]);
        }
        function qc(s) {
          const {
              appid: e,
              steamid: n,
              onCategoryAdd: r,
              onCategoryRemove: a,
            } = s,
            [o, c] = m.useState(""),
            [d, u] = m.useState(void 0),
            g = Gs(n);
          m.useEffect(() => {
            !d && g.data && u(g.data);
          }, [g.data, d]);
          const f = Xi(n),
            h = async ($, G) => {
              if (!$ || e === 0) return;
              const Be = await f.mutateAsync({
                appid: e,
                categoryName: $,
                categoryID: G ?? Rn,
              });
              Be.eresult === en.R &&
                Be.category?.id &&
                (r(Be.category.id),
                d &&
                  !d.some((sn) => sn.id === Be.category.id) &&
                  u((sn) => [...sn, Be.category]));
            },
            x = Hi(n),
            v = ($) => {
              e !== 0 && (x.mutate({ appid: e, categoryID: $ }), a($));
            },
            I = ($) => {
              $.stopPropagation(),
                $.preventDefault(),
                !(!o || o.length === 0) && (c(""), h(o));
            },
            { data: B } = Tr(n, e),
            A = na(n),
            S = A.length > 0,
            D = Hc(d ?? [], e, n, o),
            C = (0, w.Qn)();
          return (0, t.jsxs)(T.Z, {
            className: wt.CategorySelectorCtn,
            "flow-children": "column",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: wt.ListHeader,
                    children: (0, be.g)(
                      "#Wishlist_Controls_Categories_Header_Current",
                    ),
                  }),
                  (0, t.jsx)(bs, {
                    rgCategories: B ?? [],
                    header: null,
                    eAction: Lr.k_ECategoryButtonAction_Remove,
                    onClick: ($, G) => v(G),
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: wt.DialogCategoryCtn,
                  }),
                  !!B && B.length >= ra && (0, t.jsx)(_c, {}),
                ],
              }),
              (0, t.jsxs)("form", {
                className: wt.SearchForm,
                onSubmit: I,
                children: [
                  (0, t.jsx)(P.BA, {
                    autoFocus: !0,
                    value: o,
                    className: wt.SearchInput,
                    type: "search",
                    placeholder: (0, be.g)(
                      "#Wishlist_Categories_Dialog_Search",
                    ),
                    onChange: ($) => c($.target.value),
                    onOKActionDescription:
                      o.length > 0
                        ? (0, be.g)("#Wishlist_Categories_Dialog_Add")
                        : null,
                    maxLength: 500,
                  }),
                  !C &&
                    (0, t.jsx)("div", {
                      className: Qn()(
                        wt.AddCategoryBtnCtn,
                        o.length > 0 && wt.Visible,
                      ),
                      children: (0, t.jsx)(Er.Oh, {
                        onClick: I,
                        children: (0, be.g)("#Wishlist_Categories_Dialog_Add"),
                      }),
                    }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("div", {
                    className: wt.ListHeader,
                    children: (0, be.g)(
                      "#Wishlist_Controls_Categories_Header_Other",
                    ),
                  }),
                  (0, t.jsx)(bs, {
                    rgCategories: D,
                    onClick: h,
                    header: null,
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: wt.DialogCategoryCtn,
                    eAction: Lr.k_ECategoryButtonAction_Add,
                  }),
                ],
              }),
              S &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      className: wt.ListHeader,
                      children: (0, be.g)(
                        "#Wishlist_Controls_Categories_Header_Suggested",
                      ),
                    }),
                    (0, t.jsx)(bs, {
                      rgCategories: A,
                      onClick: h,
                      header: null,
                      bMultiline: !0,
                      containerClassName: Qn()(
                        wt.DialogCategoryCtn,
                        wt.Suggested,
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function _c() {
          return (0, t.jsx)("div", {
            className: wt.MaxCategoriesMessage,
            children: (0, be.g)("#Wishlist_Categories_Max_Per_App_Reached", ra),
          });
        }
        var Or = i(31518);
        function aa(s, e) {
          if (!s.current) return;
          const n = s.current.closest(".queue_menu_flyout");
          n &&
            (e
              ? n.classList.add("force_expand")
              : n.classList.remove("force_expand"));
        }
        function ed(s) {
          const { appid: e } = s,
            n = (0, rn.LH)(),
            [r, a] = m.useState(void 0),
            [o, c] = m.useState(!1),
            d = m.useRef(null),
            [u, g] = (0, Ks.OP)(),
            { data: f } = Qc(n),
            { data: h } = Gs(n),
            x = na(n),
            { data: v } = ea(),
            { data: I } = Tr(n, e),
            B = Xi(n),
            A = Hi(n),
            S = ta(),
            D = async (Kt, _t) => {
              if (!r) return;
              const gr = _t ? r.find((De) => De.id === _t) : void 0;
              if (gr?.bSelected)
                A.mutate({ appid: e, categoryID: gr.id }),
                  a(
                    r.map((De) =>
                      De.id === _t
                        ? {
                            ...De,
                            bSelected: !1,
                            cItems: Math.max(0, De.cItems - 1),
                          }
                        : De,
                    ),
                  );
              else if (Kt) {
                const De = await B.mutateAsync({
                  appid: e,
                  categoryName: Kt,
                  categoryID: _t ?? Rn,
                });
                if (De.eresult === en.R && De.category?.id) {
                  const Xo = { ...De.category, bSelected: !0 };
                  a(
                    (Ch) => Ch?.map((Ho) => (Ho.name === Kt ? Xo : Ho)) ?? [Xo],
                  ),
                    S.mutate({ rgCategoryIDs: [De.category.id] });
                }
              }
            },
            C = (Kt) => {
              Kt.stopPropagation(), Kt.preventDefault(), aa(d, !0), c(!0);
            },
            $ = () => {
              c(!1), aa(d, !1), a(void 0);
            },
            G = 6;
          if (
            (m.useEffect(() => {
              if (r || !f || !h || !I || !v || !x) return;
              let Kt = new Set(I.map((De) => De.id) ?? []),
                _t = I.map((De) => ({ ...De, bSelected: !0 }));
              const gr = v.map((De) => f.get(De)).filter((De) => !!De);
              for (const De of [...gr, ...h]) {
                if (_t.length >= G) break;
                Kt.has(De.id) || (_t.push(De), Kt.add(De.id));
              }
              _t.length < G &&
                (_t = [..._t, ...(x?.slice(0, G - _t.length) ?? [])]),
                a(_t);
            }, [r, h, f, v, I, x]),
            !r || r.length === 0)
          )
            return null;
          const Be = r.filter((Kt) => !Kt.bSelected),
            sn = r.filter((Kt) => Kt.bSelected);
          return (0, t.jsxs)("div", {
            className: Or.CategoriesMenuOption,
            ref: d,
            children: [
              (0, t.jsxs)(P.ml, {
                className: Or.HeaderCtn,
                ...g,
                onClick: C,
                children: [
                  (0, t.jsx)("div", {
                    className: Or.Label,
                    children: (0, L.we)("#Wishlist_QuickAdd_Header"),
                  }),
                  (0, t.jsx)(Xc, {
                    categoryCount: I?.length ?? 0,
                    bSimulateHover: u,
                    onClick: () => {},
                  }),
                ],
              }),
              sn.length > 0 &&
                (0, t.jsx)(bs, {
                  rgCategories: sn,
                  header: null,
                  onClick: D,
                  bMultiline: !0,
                }),
              Be.length > 0 &&
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, L.we)(
                        "#Wishlist_QuickAdd_RecentAndSuggested",
                      ),
                    }),
                    (0, t.jsx)(bs, {
                      rgCategories: Be,
                      header: null,
                      onClick: D,
                      bMultiline: !0,
                    }),
                  ],
                }),
              o && (0, t.jsx)(ia, { appid: e, steamid: n, onClose: $ }),
            ],
          });
        }
        var ne = i(78192),
          Bs = i(24179),
          oa = i(79882),
          la = i(63547),
          td = i(68094);
        function Ar(s) {
          return s.packageid
            ? { packageid: s.packageid }
            : { bundleid: s.bundleid };
        }
        function nd(s) {
          return (0, td.ER)(Ar(s));
        }
        var zr = i(49147);
        function Is() {
          const s = (0, Xt.KV)(),
            e = U.iA.accountid;
          return (0, an.I)(sd(s, e));
        }
        function sd(s, e) {
          return {
            queryKey: ca(e),
            queryFn: async () => {
              if (!e) return new Set();
              const n = await rd(s, e);
              return new Set(n);
            },
            placeholderData: new Set(),
            staleTime: 600 * 1e3,
          };
        }
        function ca(s) {
          return ["AccountActiveLicenses", s ?? 0];
        }
        async function rd(s, e) {
          throw new zr.x(en.Sq, "Not implemented");
        }
        function da() {
          const s = (0, pn.jE)(),
            e = U.iA.accountid;
          return m.useCallback(
            (n) => {
              s.setQueryData(ca(e), () => new Set(n));
            },
            [s, e],
          );
        }
        function id(s, e) {
          return !s?.appid ||
            s.type === ne.uE._i ||
            !e ||
            !e.included_appids?.length ||
            !e.included_types?.length
            ? !1
            : e.included_appids.length > 1 &&
                !e.included_appids.includes(s.appid) &&
                e.included_types.every((n) => n === ne.uE._i);
        }
        function ua(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            n = e?.included_items?.included_packages;
          return m.useMemo(() => {
            const r = new Set();
            for (const a of n || []) a.id && id(e, a) && r.add(a.id);
            return r;
          }, [e, n]);
        }
        function ad(s) {
          const { data: e } = (0, E.is)({ appid: s }),
            n = ua(s),
            r = e?.purchase_options;
          return m.useMemo(() => {
            if (r)
              return r
                .filter((a) => a.packageid && n.has(a.packageid))
                .sort(
                  (a, o) =>
                    Number(a.final_price_in_cents || 0) -
                    Number(o.final_price_in_cents || 0),
                );
          }, [r, n]);
        }
        var rs = i(67529);
        const hn = m.createContext({ appid: rs.sc, nOptions: 0 }),
          ma = m.createContext({ ShowConfirmDialog: () => {} });
        var od = i(1880),
          ld = i(15568);
        function cd(s) {
          const {
            active: e,
            onOK: n,
            closeModal: r,
            bCloseOnOK: a,
            children: o,
            ...c
          } = s;
          if (!e) return null;
          const d =
            (typeof c.strTitle == "string" && c.strTitle) ||
            (0, L.we)("#Steam_Platform");
          return (0, t.jsx)(ld.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: d,
            children: (0, t.jsx)(od.o0, {
              ...c,
              onCancel: r,
              onOK: () => {
                n(), a && r();
              },
              children: o,
            }),
          });
        }
        function dd(s) {
          const { bCloseOnOK: e = !0, children: n, ...r } = s,
            [a, o, c] = (0, re.uD)();
          return [
            (0, t.jsx)(cd, {
              active: a,
              bCloseOnOK: e,
              closeModal: c,
              ...r,
              children: n,
            }),
            o,
            c,
          ];
        }
        function ud(s) {
          const [e, n] = m.useState(""),
            [r, a] = m.useState(""),
            [o, c] = dd({
              bCloseOnOK: !0,
              bAlertDialog: !0,
              onOK: () => {},
              strTitle: e,
              strDescription: r,
            }),
            d = m.useCallback(
              (g, f) => {
                n(g), a(f), c();
              },
              [c],
            ),
            u = m.useMemo(() => ({ ShowConfirmDialog: d }), [d]);
          return (0, t.jsxs)(ma.Provider, {
            value: u,
            children: [s.children, o],
          });
        }
        var md = i(21763),
          $n = i.n(md),
          gd = i(62452);
        const pd = (s) => (0, t.jsx)(gd.u, { icon: !0, ...s }),
          $h = (s) => jsx(ButtonLinkBase, { icon: !0, ...s });
        var Le = i(8892),
          fd = i(80755);
        function Nr(s) {
          const { color: e, onClick: n, strIconTitle: r, children: a } = s,
            o = (c) => {
              c.stopPropagation(), n && n(c);
            };
          return r
            ? (0, t.jsx)(pd, {
                color: e,
                onClick: o,
                title: r,
                width: "36px",
                minWidth: "36px",
                children: a,
              })
            : (0, t.jsx)(Le.$, { color: e, onClick: o, children: a });
        }
        function hd(s) {
          const {
              onActivate: e,
              onOKActionDescription: n,
              onSecondaryButton: r,
              onSecondaryActionDescription: a,
              price: o,
              okIcon: c,
            } = s,
            d = !1;
          return o || n || (d && a)
            ? (0, t.jsxs)(O.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "stretch",
                justify: "end",
                gap: "2",
                children: [
                  o,
                  d &&
                    a &&
                    (0, t.jsx)(Nr, { onClick: r, children: (0, fd.gh)(a) }),
                  n &&
                    (c
                      ? (0, t.jsx)(Nr, {
                          color: "storegreen",
                          onClick: e,
                          strIconTitle: n,
                          children: c,
                        })
                      : (0, t.jsx)(Nr, {
                          color: "storegreen",
                          onClick: e,
                          children: n,
                        })),
                ],
              })
            : null;
        }
        function Zh(s) {
          const { option: e } = s,
            n = e.type == "item" && !!e.data.is_edition,
            r = e.type == "item" && e.data.package_group;
          return jsx(Fragment, { children: !1 });
        }
        function yn(s) {
          const {
              className: e,
              option: n,
              color: r = "blue",
              allowSingleLine: a,
              allowTwoColumn: o,
              price: c,
              okIcon: d,
              children: u,
              ...g
            } = s,
            { nOptions: f } = m.useContext(hn),
            h = f == 1;
          return (0, t.jsx)(ie.q, {
            rootClassName: $n().FocusRing,
            children: (0, t.jsxs)(T.Z, {
              className: (0, F.A)(
                $n().PurchaseOption,
                r == "green" && $n().Green,
                a && $n().AllowSingleLine,
                o && $n().AllowTwoColumn,
                h && $n().OnlyChild,
              ),
              focusable: !0,
              ...g,
              children: [
                h &&
                  o &&
                  (0, t.jsx)("div", {
                    className: $n().LeftColumn,
                    children: u,
                  }),
                !(h && o) && u,
                (0, t.jsx)(hd, { ...g, price: c, okIcon: d }),
                !1,
              ],
            }),
          });
        }
        var ga = i(13977),
          yd = i(13620);
        function Dr(s) {
          const e = (0, Qt.Gd)();
          return m.useCallback(() => {
            s.packageid
              ? window.AddItemToCart(s.packageid, void 0, e)
              : s.bundleid && window.AddItemToCart(void 0, s.bundleid, e);
          }, [e, s.packageid, s.bundleid]);
        }
        function ks(s, e) {
          return m.useCallback(() => {
            (0, ga.o)(s, e);
          }, [s, e]);
        }
        function xd(s, e) {
          return m.useCallback(() => {
            (0, ga.M)(s, e);
          }, [s, e]);
        }
        function Vs(s) {
          const { data: e } = (0, E.J$)(s),
            { ShowConfirmDialog: n } = m.useContext(ma),
            { data: r = new Set() } = Is(),
            a = da(),
            o = (0, yd.S)(s);
          return m.useCallback(() => {
            o.mutateAsync().then(([d, u]) => {
              let g,
                f = e?.name || "";
              if (d != en.R)
                g = p.Localize(
                  "#AppPage_PurchaseOption_AddToLibraryError",
                  f,
                  d,
                );
              else {
                g = p.Localize("#AppPage_PurchaseOption_AddedToLibrary", f);
                for (let h of u.packageids_added || []) r.add(h);
                a(Array.from(r));
              }
              n(f, g);
            });
          }, [o, n, e?.name, r, a]);
        }
        var wn = i(57152);
        function vd(s) {
          const { id: e, bPrepurchase: n } = s,
            { data: r } = (0, E.J$)(e);
          return r
            ? n
              ? p.Localize("#AppPage_Prepurchase", r.name)
              : r.name
            : null;
        }
        function xn(s) {
          const { id: e, title: n, bPrepurchase: r = !1, children: a } = s;
          return (0, t.jsxs)(wn.D, {
            size: "4",
            weight: "heavy",
            children: [n || (0, t.jsx)(vd, { id: e, bPrepurchase: r }), a],
          });
        }
        function vn(s) {
          const { children: e } = s;
          return (0, t.jsx)(O.s, {
            direction: "column",
            flexGrow: "1",
            gap: "2",
            overflow: "hidden",
            children: e,
          });
        }
        function jd(s) {
          const { option: e } = s,
            n = { appid: e.appid },
            { data: r } = (0, E.J$)(n),
            a = Vs(n),
            o = (0, Bs.$Y)(),
            c = e.bStandalone,
            d = o.data?.has(e.appid),
            u = xd(e.appid, r?.name ?? ""),
            g = (0, Wn.n)(r),
            f = m.useCallback(() => {
              g && (window.location.href = g);
            }, [g]);
          return r
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(yn, {
                  color: "green",
                  allowSingleLine: !e.label,
                  allowTwoColumn: !!e.label,
                  option: e,
                  onActivate: u,
                  onOKActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_Download",
                  ),
                  onSecondaryButton: c ? f : void 0,
                  onSecondaryActionDescription: c
                    ? p.Localize("#AppPage_PurchaseOption_MoreInfo")
                    : void 0,
                  onOptionsButton: d ? void 0 : a,
                  onOptionsActionDescription: d
                    ? void 0
                    : p.Localize("#AppPage_PurchaseOption_AddToLibrary"),
                  children: [
                    (0, t.jsx)(xn, {
                      title: p.Localize(
                        "#AppPage_PurchaseOption_DownloadDemo",
                        r.name,
                      ),
                    }),
                    (0, t.jsx)(vn, {
                      children: (0, t.jsx)(b.EY, { children: e.label }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var jn = i(44983),
          Lt = i(16114);
        function bd(s) {
          const { option: e } = s,
            n = m.useContext(hn),
            { data: r } = (0, E.J$)({ appid: n.appid }),
            a = ks(n.appid, r?.name ?? ""),
            o = (0, jn._2)(),
            c =
              r &&
              r.free_weekend &&
              (r.free_weekend.start_time || 0) <= o &&
              (r.free_weekend.end_time || 0) > o;
          return r
            ? (0, t.jsxs)(yn, {
                option: e,
                color: "green",
                allowSingleLine: !0,
                onActivate: a,
                onOKActionDescription: p.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, t.jsx)(xn, {
                    title: p.Localize("#AppPage_PurchaseOption_Play", r.name),
                  }),
                  (0, t.jsxs)(vn, {
                    children: [
                      !c &&
                        (0, t.jsx)(b.EY, {
                          children: p.Localize(
                            r.type == ne.uE.ue
                              ? "#AppPage_PurchaseOption_FreeDemo"
                              : "#AppPage_PurchaseOption_FreeToPlay",
                          ),
                        }),
                      c &&
                        (0, t.jsx)(b.EY, {
                          children: p.Localize(
                            "#AppPage_PurchaseOption_FreeWeekend",
                            (0, Lt.TW)(r.free_weekend.end_time, {
                              weekday: void 0,
                              year: void 0,
                              hour: "numeric",
                              minute: "numeric",
                            }),
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        }
        var pa = i(7487),
          Bd = i(52574),
          Id = i(91937),
          Ed = i(49144),
          Pd = i(33770),
          Md = i(59443),
          fa = i(51596),
          Qs = i(43434);
        function ha(s) {
          const { text: e, onURLDetected: n } = s,
            r = m.useCallback(
              (o) => {
                let c = (0, fa.P)(o.args) ?? (0, fa.P)(o.args, "href");
                return (
                  (0, Qs.p)(c) && (c = (0, Qs.E)(c)), n && n(c), (0, Md._r)(o)
                );
              },
              [n],
            );
          return m
            .useMemo(() => {
              const o = (d) => new pa.OJ(new pa.R8()),
                c = { ...Bd.L, ...Ed.I, ...Id.F, url: { Constructor: r } };
              return new Pd.B(c, o, w.TS.LANGUAGE);
            }, [r])
            .ParseBBCode(e, void 0);
        }
        var ya = i(34360),
          Td = i(16346),
          Sd = i(59869),
          Fr = i.n(Sd);
        function Ld(s) {
          const { option: e } = s,
            n = Dr(e),
            r = e.packageid
              ? { packageid: e.packageid }
              : { bundleid: e.bundleid };
          return (0, t.jsxs)(ya.kt, {
            className: Fr().MenuItem,
            onSelected: n,
            children: [
              (0, t.jsx)("div", {
                className: Fr().Name,
                children: e.purchase_option_name,
              }),
              (0, t.jsx)("div", {
                className: Fr().Price,
                children: (0, t.jsx)(vr.AO, { id: r, purchaseOption: e }),
              }),
            ],
          });
        }
        function Od(s) {
          const { option: e } = s;
          return (0, t.jsx)(ya.tz, {
            label: e.data.package_group.dropdown_title,
            children: e.data.items.map((n) =>
              (0, t.jsx)(Ld, { option: n }, n.packageid ?? n.bundleid),
            ),
          });
        }
        function Ad(s) {
          if (s.data.package_group.name == "subscriptions") return !0;
          for (let e of s.data.items)
            if (!e.recurrence_info?.packageid) return !1;
          return !0;
        }
        function zd(s) {
          const { option: e } = s,
            { appid: n } = m.useContext(hn),
            { data: r } = (0, E.J$)({ appid: n }),
            a = e.data.package_group,
            [o, c] = m.useState(""),
            d = (0, Qt.aL)(o),
            u = m.useCallback(() => {
              o && (window.location.href = d);
            }, [o, d]),
            g = m.useCallback(
              (f) => {
                (0, Td.lX)((0, t.jsx)(Od, { option: e }), f);
              },
              [e],
            );
          return (0, t.jsxs)(yn, {
            option: e,
            allowTwoColumn: !0,
            onActivate: g,
            onSecondaryButton: o ? u : void 0,
            onSecondaryActionDescription: o
              ? p.Localize("#AppPage_PurchaseOption_MoreInfo")
              : void 0,
            children: [
              (0, t.jsx)(xn, {
                title:
                  a.dropdown_title ||
                  p.Localize("#AppPage_Dropdown_DefaultTitle", r?.name),
              }),
              (0, t.jsxs)(vn, {
                children: [
                  a.dropdown_description_bbcode &&
                    (0, t.jsx)(b.EY, {
                      size: "2",
                      children: (0, t.jsx)(ha, {
                        text: a.dropdown_description_bbcode,
                        onURLDetected: c,
                      }),
                    }),
                  !a.dropdown_description_bbcode &&
                    Ad(e) &&
                    (0, t.jsx)(b.EY, {
                      size: "2",
                      children: p.Localize(
                        "#AppPage_Dropdown_DefaultDescription_Subscription",
                      ),
                    }),
                ],
              }),
              (0, t.jsx)(O.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "end",
                justify: "end",
                gap: "2",
                children: (0, t.jsx)(Le.$, {
                  color: "greyneutral",
                  variant: "dark",
                  children: p.Localize("#AppPage_PurchaseOption_ViewOptions"),
                }),
              }),
            ],
          });
        }
        var xa = i(79014);
        function Nd(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.lv)({ appid: e });
          if (!n || !r) return null;
          const a = (0, gs.b0)(r, "community_icon");
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !1,
              (0, t.jsx)(b.EY, {
                children: (0, xa.i)(
                  p.Localize(
                    "#AppPage_PurchaseOption_IncludedWithMasterSub",
                    n.name,
                  ),
                  (0, t.jsx)("b", {}),
                ),
              }),
            ],
          });
        }
        function Dd(s) {
          const { option: e, appidMasterSub: n } = s,
            r = m.useContext(hn),
            { data: a } = (0, E.J$)({ appid: r.appid }),
            o = ks(r.appid, a?.name ?? "");
          return a
            ? (0, t.jsxs)(yn, {
                option: e,
                color: "green",
                onActivate: o,
                onOKActionDescription: p.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, t.jsx)(xn, {
                    title: p.Localize("#AppPage_PurchaseOption_Play", a.name),
                  }),
                  (0, t.jsxs)(vn, {
                    children: [
                      !n &&
                        (0, t.jsx)(b.EY, {
                          children: p.Localize(
                            "#AppPage_PurchaseOption_Play_Description",
                            a.name,
                          ),
                        }),
                      n && (0, t.jsx)(Nd, { appid: n }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function Fd(s) {
          const { option: e, appidPlaytest: n, bIsOpen: r } = s,
            { data: a } = (0, E.J$)({ appid: n }),
            { data: o } = (0, E.by)({ appid: n }),
            { data: c } = (0, la.VZ)(n);
          if (!a || !o || !c) return null;
          const d = c?.[0]?.status || kn.EX.Rw;
          console.log(c, d);
          let u, g, f;
          switch (d) {
            case kn.EX.Rw:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                r
                  ? (o.steam_release_date || Z.TQt) < (0, jn._2)()
                    ? (g = "#AppPage_PurchaseOption_Playtest_Open")
                    : (g = "#AppPage_PurchaseOption_Playtest_Open_Unreleased")
                  : (g = "#AppPage_PurchaseOption_JoinPlaytest_Description");
              break;
            case kn.EX.OT:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                (g = "#AppPage_PurchaseOption_JoinPlaytest_InvitePending");
              break;
            case kn.EX.IS:
              (u = "#AppPage_PurchaseOption_JoinPlaytest"),
                (g = "#AppPage_PurchaseOption_JoinPlaytest_InvitedByFriend");
              break;
            case kn.EX.m7:
              (o.steam_release_date || Z.TQt) < (0, jn._2)()
                ? ((u = "#AppPage_PurchaseOption_Playtest_Accepted_Title"),
                  (g = "#AppPage_PurchaseOption_Playtest_Accepted"))
                : (o.is_preload,
                  (u =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable_Title"),
                  (g =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable"));
              break;
            default:
              (0, xs.wT)(!1, `Unknown playtest status ${d}`);
          }
          return (
            f && U.iA.logged_in,
            u && g
              ? (0, t.jsxs)(yn, {
                  option: e,
                  onActivate: f,
                  children: [
                    (0, t.jsx)(xn, { title: p.Localize(u, a.name) }),
                    (0, t.jsx)(vn, {
                      children: (0, t.jsx)(b.EY, { children: p.Localize(g) }),
                    }),
                  ],
                })
              : null
          );
        }
        var Wd = i(18574),
          cn = i.n(Wd);
        function Rd(s) {
          const { option: e } = s,
            n = { appid: e.appid },
            { data: r } = (0, E.J$)(n),
            a = (0, Wn.n)(r),
            o = m.useCallback(() => {
              a && (window.location.href = a);
            }, [a]);
          return r
            ? (0, t.jsx)(t.Fragment, {
                children: (0, t.jsxs)(yn, {
                  option: e,
                  onActivate: o,
                  onOKActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_MoreInfo",
                  ),
                  children: [
                    (0, t.jsx)(xn, { title: e.title }),
                    (0, t.jsx)(vn, {
                      children: (0, t.jsx)(b.EY, {
                        size: "2",
                        children: e.description,
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function wd(s) {
          const { discount: e } = s;
          (0, ve.bB)({ msInterval: 1e3 });
          const n = (0, jn._2)();
          if (e.discount_end_date <= n) return null;
          const r = Math.max(e.discount_end_date - n, 0),
            a = e.discount_description,
            o = p.Localize(a, (0, Lt.R2)(r));
          return o == a
            ? null
            : (0, t.jsx)(b.EY, { contrast: "body", size: "2", children: o });
        }
        function Ud(s) {
          const { option: e } = s;
          return !e || !e.discount_pct || e.hide_discount_pct_for_compliance
            ? null
            : U.iA.country_code == "PL"
              ? (0, t.jsx)(b.EY, {
                  size: "2",
                  children: p.Localize("#AppPage_Discount_Last30"),
                })
              : null;
        }
        function Cd(s) {
          const { option: e, discount: n } = s,
            r = m.useContext(hn),
            { data: a } = (0, E.J$)({ appid: r.appid }),
            { data: o } = (0, E.J$)({ appid: n.master_sub_appid || rs.sc });
          if (!a || !o || e.discount_pct <= 0) return null;
          const c = n.discount_description,
            d = p.Localize(c, "", e.discount_pct || 0, o.name, a.name);
          return c == d
            ? null
            : (0, t.jsx)(b.EY, { contrast: "body", size: "2", children: d });
        }
        function Kd(s) {
          const { option: e } = s;
          if (!e) return null;
          if (e.is_free_to_keep && e.free_to_keep_ends)
            return (0, t.jsx)(b.EY, {
              contrast: "body",
              size: "2",
              children: p.Localize(
                "#AppPage_PurchaseOption_FreeToKeepDescription",
                (0, Lt.TW)(e.free_to_keep_ends, {
                  weekday: void 0,
                  year: void 0,
                  hour: "numeric",
                  minute: "numeric",
                }),
              ),
            });
          if (!e?.active_discounts?.length) return null;
          const n = (0, jn._2)(),
            r = e.active_discounts.reduce((o, c) =>
              c.discount_end_date != Z.TQt &&
              (!o ||
                (c.discount_end_date > n &&
                  c.discount_end_date < o.discount_end_date))
                ? c
                : o,
            );
          let a = "";
          if (r.discount_end_date == Z.TQt)
            a = (0, t.jsx)(Cd, { option: e, discount: r });
          else if (
            r.discount_end_date != Z.TQt &&
            r.discount_end_date - n > 2880 * 60
          ) {
            const o = r.discount_description + "_date";
            (a = p.Localize(
              o,
              (0, Lt.TW)(r.discount_end_date, {
                weekday: void 0,
                year: void 0,
              }),
            )),
              a == o && (a = null);
          } else return (0, t.jsx)(wd, { discount: r });
          return a
            ? (0, t.jsx)(b.EY, { contrast: "body", size: "2", children: a })
            : null;
        }
        function Wr(s) {
          const { option: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Kd, { option: e }),
              (0, t.jsx)(Ud, { option: e }),
            ],
          });
        }
        var Rr = i(74107),
          Gd = i(58123),
          $s = i.n(Gd);
        function wr(s) {
          const { id: e, bSelfPurchaseOption: n } = s,
            { data: r } = (0, E.Q_)(e),
            { data: a } = (0, E.J$)(e);
          if (!a) return null;
          const o = n && a.item_type == ne.c6.RD ? a.self_purchase_option : r;
          return !o?.hide_discount_pct_for_compliance || o.discount_pct <= 0
            ? null
            : (0, t.jsx)("table", {
                className: $s().SaleTechPriceGrid,
                children: (0, t.jsxs)("tbody", {
                  children: [
                    (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("th", {
                          children: Rr.F5.Localize("#PriceGrid_NormalPrice"),
                        }),
                        (0, t.jsx)("th", {
                          children: Rr.F5.Localize("#PriceGrid_RecentPrice"),
                        }),
                        (0, t.jsx)("th", {
                          children: Rr.F5.Localize("#PriceGrid_CurrentPrice"),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("tr", {
                      children: [
                        (0, t.jsx)("td", {
                          className: $s().OriginalPrice,
                          children: o.formatted_original_price,
                        }),
                        (0, t.jsx)("td", {
                          className: $s().LowestRecentPrice,
                          children: o.formatted_lowest_recent_price,
                        }),
                        (0, t.jsx)("td", {
                          className: $s().FinalPrice,
                          children: o.formatted_final_price,
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        var va = i(81055),
          Yd = i(54652),
          kd = i.n(Yd);
        function Ur(s) {
          const { id: e } = s,
            { data: n } = (0, E.J$)(e),
            { data: r } = (0, E.by)(e),
            { data: a } = (0, E.Q_)(e),
            { data: o } = (0, Bs.$Y)();
          if (!n || !r || !a || !o) return null;
          const c = "bundleid" in e && !a.must_purchase_as_set,
            d = r?.is_coming_soon && !!r?.advance_access_date;
          let u = null,
            g,
            f;
          if (c)
            (n.included_appids?.filter((x) => !o.has(x)) || []).length > 0 &&
              ((g = "slate-12"),
              (f = "blue-8"),
              (u = p.Localize(
                "#AppPage_PurchaseOption_CompleteYourCollection",
              )));
          else if (d) {
            const h = (0, Lt.TW)(r.advance_access_date, {
              weekday: void 0,
              month: "short",
              day: "numeric",
              year: void 0,
            });
            (g = "slate-12"),
              (f = "blue-8"),
              (u = p.Localize("#AppPage_AdvanceAccess_Banner", h));
          }
          return u
            ? (0, t.jsx)(O.s, {
                className: kd().PurchaseOptionBanner,
                paddingX: "1",
                background: f,
                children: (0, t.jsx)(b.EY, {
                  size: "1",
                  color: g,
                  contrast: "title",
                  whiteSpace: "nowrap",
                  truncate: !0,
                  children: u,
                }),
              })
            : null;
        }
        var Vd = i(76962),
          ja = i(8928),
          Cr = i(69289),
          ba = i(89611);
        function tn(s) {
          const e = (0, Cr.mz)({ ...s, className: s.className }, Qd);
          return (0, t.jsx)("img", { ...e });
        }
        const Qd = [
          ...ja.h,
          {
            prop: "objectFit",
            className: ba.ObjectFit,
            cssProperty: "--object-fit",
          },
          {
            prop: "objectPosition",
            className: ba.ObjectPosition,
            cssProperty: "--object-position",
          },
        ];
        function Zs(s, e) {
          return U.TS.STORE_ITEM_BASE_URL + s.replace("${FILENAME}", e);
        }
        function $d(s) {
          const { closeModal: e } = s,
            n = m.useContext(hn),
            { data: r } = (0, E.J$)({ appid: n.appid }),
            { data: a } = (0, E.lv)({ appid: n.appid });
          return (0, t.jsxs)(O.s, {
            direction: "column",
            height: "90vh",
            overflow: "hidden",
            align: "center",
            gap: "2",
            children: [
              (0, t.jsx)(de.az, {
                aspectRatio: "748 / 896",
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "90%",
                overflow: "hidden",
                children:
                  r &&
                  a &&
                  (0, t.jsx)(tn, {
                    width: "100%",
                    src: Zs(a.asset_url_format, a.edition_comparison),
                    alt: r.name,
                  }),
              }),
              (0, t.jsx)(de.az, {
                flexGrow: "0",
                flexShrink: "0",
                children: (0, t.jsx)(Le.$, {
                  onClick: e,
                  children: Y.Z.Localize("#Button_Close"),
                }),
              }),
            ],
          });
        }
        const Js = new fs.wd("PurchaseOptions");
        function Ba(s) {
          const { id: e } = s,
            { data: n } = (0, E.J$)(e);
          return n?.purchase_description_bbcode
            ? (0, t.jsx)("div", {
                children: (0, t.jsx)(ha, {
                  text: n.purchase_description_bbcode,
                }),
              })
            : null;
        }
        function Ia(s) {
          const { id: e } = s,
            { data: n } = (0, E.by)(e),
            { data: r } = Is();
          if (
            !n ||
            !n.advance_access_date ||
            !n.steam_release_date ||
            !r ||
            !n.is_coming_soon
          )
            return null;
          const a = "packageid" in e && r.has(e.packageid),
            o = (0, jn._2)(),
            c = (0, Lt.IH)(n.advance_access_date - o),
            d = (0, Lt.IH)(n.steam_release_date - n.advance_access_date);
          let u;
          return (
            o > n.advance_access_date
              ? (u = a
                  ? "#AppPage_AdvanceAccess_Now_Owned"
                  : "#AppPage_AdvanceAccess_Now")
              : (u = a
                  ? "#AppPage_AdvanceAccess_Starts_Owned"
                  : "#AppPage_AdvanceAccess_Starts"),
            u
              ? (0, t.jsx)(b.EY, {
                  size: "2",
                  color: "blue-10",
                  children: p.Localize(u, c, d),
                })
              : null
          );
        }
        function Zd(s) {
          const { id: e, option: n } = s,
            r = m.useContext(hn),
            { data: a } = (0, E.J$)(e),
            { data: o } = (0, E.J$)({ appid: r.appid }),
            { data: c } = (0, E.by)(e),
            { data: d } = Is(),
            u = Vs(e),
            g = ks(r.appid, o?.name ?? "");
          if (!a || !o || !d) return null;
          const f = "packageid" in e && d.has(e.packageid);
          Js.Debug(a);
          let h = a.self_purchase_option?.packageid
              ? a.self_purchase_option
              : a.best_purchase_option,
            x = p.Localize("#AppPage_PurchaseOption_GetFreeToKeep", o.name);
          const v = f && h?.is_free_to_keep;
          let I = v ? g : u,
            B = p.Localize(
              v
                ? "#AppPage_PurchaseOption_PlayNow"
                : "#AppPage_PurchaseOption_AddToLibrary",
            );
          return (
            Js.Debug(e, h, a),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Ur, { id: e }),
                (0, t.jsxs)(yn, {
                  option: n,
                  onActivate: I,
                  onOKActionDescription: B,
                  price: (0, t.jsx)(Us, {
                    id: e,
                    bSelfPurchaseOption: !!a.self_purchase_option?.packageid,
                  }),
                  children: [
                    (0, t.jsx)(xn, {
                      id: e,
                      title: x,
                      bPrepurchase: (0, va.Nq)(c, h),
                    }),
                    f &&
                      (0, t.jsx)(b.EY, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: p.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, t.jsxs)(vn, {
                      children: [
                        (0, t.jsx)(wr, {
                          id: e,
                          bSelfPurchaseOption:
                            !!a.self_purchase_option?.packageid,
                        }),
                        (0, t.jsx)(Ia, { id: e }),
                        (0, t.jsx)(Wr, { option: h }),
                        (0, t.jsx)(Ba, { id: e }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Jd(s) {
          const { id: e, option: n } = s,
            r = m.useContext(hn),
            { data: a } = (0, E.J$)(e),
            { data: o } = (0, E.J$)({ appid: r.appid }),
            { data: c } = (0, E.by)(e),
            { data: d } = Is(),
            u = Vs(e),
            g = Dr(n.data),
            [f, h, x] = (0, ve.uD)(!1);
          if (!a || !o) return null;
          Js.Debug(a);
          let v = a.self_purchase_option?.packageid
            ? a.self_purchase_option
            : a.best_purchase_option;
          if (v?.is_free_to_keep) return (0, t.jsx)(Zd, { ...s });
          const I =
              n.bAvailableForFree &&
              n.data.packageid &&
              !d?.has(n.data.packageid),
            B = "packageid" in e && !!d?.has(e.packageid);
          let A, S;
          n.data.is_edition &&
            ((A = h),
            (S = p.Localize("#AppPage_PurchaseOption_CompareEditions")));
          let D, C;
          return (
            I &&
              ((D = u),
              (C = p.Localize("#AppPage_PurchaseOption_AddToLibrary"))),
            Js.Debug(e, v, a),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Ur, { id: e }),
                (0, t.jsxs)(yn, {
                  option: n,
                  allowTwoColumn: !0,
                  onActivate: g,
                  onOKActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: A,
                  onSecondaryActionDescription: S,
                  onOptionsButton: D,
                  onOptionsActionDescription: C,
                  price: (0, t.jsx)(Us, {
                    id: e,
                    bSelfPurchaseOption: !!a.self_purchase_option?.packageid,
                  }),
                  okIcon: (0, t.jsx)(Fe.JBW, { width: "24", height: "24" }),
                  children: [
                    (0, t.jsx)(xn, { id: e, bPrepurchase: (0, va.Nq)(c, v) }),
                    B &&
                      (0, t.jsx)(b.EY, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: p.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, t.jsxs)(vn, {
                      children: [
                        (0, t.jsx)(wr, {
                          id: e,
                          bSelfPurchaseOption:
                            !!a.self_purchase_option?.packageid,
                        }),
                        (0, t.jsx)(Ia, { id: e }),
                        (0, t.jsx)(Wr, { option: v }),
                        (0, t.jsx)(Ba, { id: e }),
                      ],
                    }),
                  ],
                }),
                f &&
                  n.data.is_edition &&
                  (0, t.jsx)(Vd.y.Root, {
                    onClose: x,
                    children: (0, t.jsx)($d, { closeModal: x }),
                  }),
              ],
            })
          );
        }
        var Xd = i(95036),
          Es = i.n(Xd),
          Xs = i(43135);
        const Hd = new fs.wd("PurchaseOptions");
        function qd(s) {
          const { id: e, option: n } = s,
            { data: r } = (0, E.J$)(e),
            { data: a } = (0, E.lv)(e),
            { data: o } = (0, Bs.$Y)(),
            c = Dr(n.data),
            d = (0, Wn.n)(r),
            u = m.useCallback(() => {
              d && (window.location.href = d);
            }, [d]);
          if (!r || !o) return console.warn("Not ready", e, r, a, o), null;
          const g = r.included_appids?.length || 0,
            f = r.included_appids?.filter((B) => !o.has(B)) || [],
            h = r.included_appids?.filter((B) => o.has(B)) || [];
          let x = f.length,
            I =
              g != f.length
                ? "#AppPage_BuyThisBundle_Partial"
                : "#AppPage_BuyThisBundle";
          return (
            f.length == 0 &&
              ((I = "#AppPage_CollectionComplete"),
              (x = r.included_appids?.length || 0)),
            Hd.Debug(e, r.best_purchase_option, r),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(Ur, { id: e }),
                (0, t.jsxs)(yn, {
                  option: n,
                  onActivate: c,
                  onOKActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: u,
                  onSecondaryActionDescription: p.Localize(
                    "#AppPage_PurchaseOption_BundleInfo",
                  ),
                  price: (0, t.jsx)(Us, { id: e, bSelfPurchaseOption: !0 }),
                  okIcon: (0, t.jsx)(Fe.JBW, { width: "24", height: "24" }),
                  children: [
                    (0, t.jsx)(xn, {
                      id: e,
                      children: (0, t.jsxs)(b.EY, {
                        size: "3",
                        color: "blue-8",
                        children: [
                          " ",
                          p.Localize("#AppPage_PurchaseOption_Bundle"),
                        ],
                      }),
                    }),
                    (0, t.jsxs)(vn, {
                      children: [
                        (0, t.jsx)(wr, { id: e, bSelfPurchaseOption: !0 }),
                        (0, t.jsxs)(O.s, {
                          direction: "column",
                          flexGrow: "1",
                          flexShrink: "1",
                          overflow: "hidden",
                          gap: "1",
                          children: [
                            (0, t.jsx)(Wr, { option: r.best_purchase_option }),
                            (0, t.jsxs)(O.s, {
                              direction: "column",
                              flexGrow: "1",
                              overflow: "hidden",
                              children: [
                                (0, t.jsx)(b.EY, {
                                  size: "2",
                                  children: p.LocalizePlural(
                                    I,
                                    x,
                                    r.best_purchase_option?.discount_pct ||
                                      r.best_purchase_option
                                        ?.bundle_discount_pct ||
                                      0,
                                  ),
                                }),
                                (0, t.jsx)(eu, {
                                  apps: [...f, ...h],
                                  setOwnedApps: o,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function Jh(s) {
          const { rgAppids: e } = s;
          return e.length == 0
            ? null
            : jsx("div", {
                className: styles.AppImages,
                children: e?.map((n) => jsx(_d, { appid: n }, n)),
              });
        }
        function _d(s) {
          const { appid: e } = s,
            { data: n } = useStoreItemDefaultInfo({ appid: e }),
            { data: r } = useStoreItemAssets({ appid: e });
          if (!n || !r) return console.warn("Not ready", e), null;
          const a = r && StoreAssetURL(r, "small_capsule");
          return jsx(Fragment, { children: jsx("img", { src: a, alt: "" }) });
        }
        function eu(s) {
          const { apps: e, setOwnedApps: n } = s,
            r = 6,
            [a, o] = m.useState(e.length > r + 1 ? r : e.length),
            c = m.useRef(null),
            d = (0, re.wY)((g) => {
              if (c.current) {
                const f = g.contentRect,
                  h = c.current?.getBoundingClientRect();
                let x = f.height,
                  v = 0;
                for (let I of g.target.children) {
                  if (I.tagName != "LI") continue;
                  const B = I.getBoundingClientRect();
                  if (
                    (v != e.length - 1 && B.height < x - h.height) ||
                    (v == e.length - 1 && B.height < x)
                  )
                    v++, (x -= B.height);
                  else break;
                }
                a != v && o(v),
                  (c.current.style.opacity = v == e.length ? "0" : "1");
              }
            });
          if (e.length == 0 || a == 0) return null;
          const u = e.length - a;
          return (0, t.jsxs)("ul", {
            className: Es().AppList,
            ref: d,
            children: [
              e
                .slice(0, a)
                .map((g) => (0, t.jsx)(tu, { appid: g, bOwned: n.has(g) }, g)),
              (0, t.jsx)(b.EY, {
                ref: c,
                size: "2",
                children: p.LocalizePlural("#AppPage_AdditionalItem", u),
              }),
            ],
          });
        }
        function tu(s) {
          const { appid: e, bOwned: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.lv)({ appid: e }),
            o = (0, Gt.h0)({ appid: e }),
            { data: c } = (0, E.lv)(o);
          if (!r) return null;
          const d =
            (a && (0, gs.b0)(a, "community_icon")) ||
            (c && (0, gs.b0)(c, "community_icon"));
          return (0, t.jsxs)("li", {
            className: Es().BundleApp,
            children: [
              (0, t.jsx)("div", {
                className: Es().AppIcon,
                children: d && (0, t.jsx)("img", { src: d, alt: "" }),
              }),
              (0, t.jsxs)("div", {
                className: Es().AppText,
                children: [
                  (0, t.jsx)(b.EY, {
                    size: "2",
                    contrast: n ? "description" : "subtitle",
                    lineClamp: n ? 1 : 2,
                    children: r.name,
                  }),
                  n &&
                    (0, t.jsx)(b.EY, {
                      size: "1",
                      weight: "heavy",
                      color: "storegreen-10",
                      className: Es().InLibrary,
                      children: (0, Xs.eI)("in_library"),
                    }),
                ],
              }),
            ],
          });
        }
        var Ot = i(86336),
          Kr = i(24809),
          nu = i(23413),
          su = i.n(nu);
        function Ea(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return (0, t.jsx)(Wn.p, {
            storeItem: n,
            children: (0, t.jsx)(Ot.W, { size: "2", children: n?.name }),
          });
        }
        function ru(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return n
            ? (0, t.jsx)("li", { children: (0, t.jsx)(Ea, { appid: e }) })
            : null;
        }
        function Pa(s) {
          const {
            appid: e,
            strLocTagTitle: n,
            strLocTagBody: r,
            rgAppidParent: a,
            color: o,
          } = s;
          return (0, t.jsx)(Kr.k, {
            children: (0, t.jsxs)(O.s, {
              background: o,
              direction: "column",
              padding: "3",
              children: [
                (0, t.jsx)(wn.D, { size: "5", children: p.Localize(n) }),
                a.length == 1 &&
                  (0, t.jsx)(b.EY, {
                    children: p.LocalizeReact(
                      r,
                      (0, t.jsx)(Ea, { appid: a[0] }),
                    ),
                  }),
                a.length > 1 &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)(b.EY, {
                        children: p.Localize("#AppPage_DLCWarning_OneOf"),
                      }),
                      (0, t.jsx)("ul", {
                        className: su().AppList,
                        children: a.map((c) => (0, t.jsx)(ru, { appid: c }, c)),
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function iu(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n ||
            n.type != ne.uE.Ov ||
            !n.related_items?.parent_appid ||
            n.related_items.parent_appid == rs.sc
            ? null
            : (0, t.jsx)(Pa, {
                appid: e,
                strLocTagTitle: "#AppPage_DLCWarning_Title_Soundtrack",
                strLocTagBody: "#AppPage_DLCWarning_Soundtrack",
                rgAppidParent: [n.related_items.parent_appid],
                color: "crimson-7",
              });
        }
        function au(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || n.type != ne.uE._i || !n.related_items?.parent_appid
            ? null
            : (0, t.jsx)(ou, {
                appid: e,
                appidParent: n.related_items.parent_appid,
              });
        }
        function ou(s) {
          const { appid: e, appidParent: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.J$)({ appid: n });
          if (!r || !a || r.type != ne.uE._i) return null;
          const c =
              a && a.type == ne.uE.Sv
                ? "#AppPage_DLCWarning_Software"
                : "#AppPage_DLCWarning",
            d = r.related_items?.dlc_parent_appids?.length
              ? r.related_items?.dlc_parent_appids
              : [n];
          return (0, t.jsx)(Pa, {
            appid: e,
            strLocTagTitle: "#AppPage_DLCWarning_Title",
            strLocTagBody: c,
            rgAppidParent: d,
            color: "purple-7",
          });
        }
        function lu(s) {
          const { appid: e } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(iu, { appid: e }),
              (0, t.jsx)(au, { appid: e }),
            ],
          });
        }
        var cu = i(3348),
          Gr = i(47875),
          du = i(25792),
          uu = i(90114),
          mu = i(56680),
          gu = i.n(mu);
        const Yr = (0, du.Nr)(function (e) {
          const {
              appid: n,
              bAllowRemove: r,
              children: a,
              color: o,
              width: c,
            } = e,
            d = (0, rn.LH)(),
            { data: u } = ys(n),
            g = wi(n),
            [f, h, x] = (0, re.uD)();
          (0, m.use)(Y.Z.Ready());
          const v = !!d;
          if (v && !u) return null;
          const I = v && !!u?.wishlist;
          if (I && !r) return null;
          const B = () => {
              g.mutateAsync({ wishlist: !I, old_interest: u });
            },
            A = I ? "#RemoveFromWishlist_ttip" : "#AddToWishlist_ttip",
            S = I ? "#Wishlisted" : "#AddToYourWishlist";
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Gn.Gq, {
                toolTipContent: Y.Z.Localize(A),
                children: (0, t.jsx)(Le.$, {
                  color: o,
                  width: c,
                  onClick: v ? B : h,
                  children: a ? a(I) : Y.Z.Localize(S),
                }),
              }),
              !v && (0, t.jsx)(pu, { active: f, closeModal: x }),
            ],
          });
        });
        function pu(s) {
          const { active: e, closeModal: n } = s,
            { fnOpenInSteamClient: r } = (0, uu.useOpenWebInSteamClient)();
          return (
            (0, m.use)(p.Ready()),
            (0, t.jsx)(q.EN, {
              active: e,
              children: (0, t.jsxs)(q.o0, {
                strTitle: p.Localize("#OpenInDesktopAppBanner_NotSignedIn"),
                className: gu().WishlistModalOverride,
                strDescription: p.Localize("#Wishlist_NotSignedIn"),
                closeModal: n,
                bAlertDialog: !0,
                children: [
                  (0, t.jsxs)(O.s, {
                    direction: "row",
                    gap: "4",
                    paddingTop: "4",
                    paddingBottom: "4",
                    children: [
                      (0, t.jsx)(Le.$, {
                        onClick: r,
                        children: p.Localize(
                          "#OpenInDesktopAppBanner_OpenAppButton",
                        ),
                      }),
                      (0, t.jsx)(Le.$, {
                        color: "dull",
                        onClick: Gr.l,
                        children: Y.Z.Localize("#Login_SignIn"),
                      }),
                    ],
                  }),
                  (0, t.jsx)(b.EY, {
                    children: (0, L.oW)(
                      Y.Z.Localize("#GotSteam_NeedSteam"),
                      (0, t.jsx)(Ot.Y, {
                        href: `${ws.TS.STORE_BASE_URL}about`,
                      }),
                    ),
                  }),
                ],
              }),
            })
          );
        }
        var fu = i(97393),
          Hs = i.n(fu);
        function Ma(s) {
          const { id: e } = s,
            { data: n } = (0, E.qI)(e);
          if (!n) return null;
          const r = [];
          return (
            n.windows &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Hs().PlatformIcon,
                    children: (0, t.jsx)(N.eJJ, {}),
                  },
                  "windows",
                ),
              ),
            n.mac &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Hs().PlatformIcon,
                    children: (0, t.jsx)(N.kPc, {}),
                  },
                  "mac",
                ),
              ),
            n.steamos_linux &&
              r.push(
                (0, t.jsx)(
                  "div",
                  {
                    className: Hs().PlatformIcon,
                    children: (0, t.jsx)(N.Qte, {}),
                  },
                  "steamos",
                ),
              ),
            r.length == 0
              ? null
              : (0, t.jsx)("div", {
                  className: Hs().PlatformIcons,
                  children: r,
                })
          );
        }
        var hu = i(77774),
          Zn = i.n(hu);
        function yu(s, e) {
          if (e) return "#AppPage_ComingSoon_UnlocksIn_Software";
          switch (s) {
            case ne.uE.Wz:
              return "#AppPage_ComingSoon_UnlocksIn_Video";
            case ne.uE.gQ:
              return "#AppPage_ComingSoon_UnlocksIn_Series";
            case ne.uE._i:
              return "#AppPage_ComingSoon_UnlocksIn_DLC";
            default:
              return "#AppPage_ComingSoon_UnlocksIn";
          }
        }
        function xu(s, e) {
          return e
            ? s.custom_release_date_message
              ? s.custom_release_date_message
              : s.steam_release_date
                ? (0, Lt.$z)(s.steam_release_date)
                : ""
            : "";
        }
        function vu(s, e, n) {
          return s ? s != "date_full" : e ? !0 : !n;
        }
        function ju(s) {
          const {
              appid: e,
              bHasPrePurchaseSub: n,
              bGetsSoftwareTreatment: r,
              bShowReleaseDateIfComingSoon: a,
              strOffsitePrice: o,
              preload: c,
            } = s,
            { data: d } = (0, E.J$)({ appid: e }),
            { data: u } = (0, E.by)({ appid: e }),
            g = (0, cu.VM)(u);
          if (!d || !u) return null;
          const f = u.coming_soon_display,
            h = u.steam_release_date,
            x = !!h && h < (0, jn._2)(),
            v = f == "text_comingsoon" || f == "text_tba",
            I = f != "text_comingsoon",
            B = d.type == ne.uE._i,
            A = f ? g : xu(u, a),
            S = !!A,
            D = n && !v && S,
            C = !x && !!h && !vu(f, u.custom_release_date_message, a);
          return (0, t.jsxs)(Kr.k, {
            children: [
              (0, t.jsxs)(O.s, {
                direction: "row",
                className: Zn().ComingSoon,
                children: [
                  (0, t.jsxs)(O.s, {
                    direction: "column",
                    className: Zn().Content,
                    children: [
                      x &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(wn.D, {
                              size: "5",
                              children: p.Localize("#AppPage_ComingSoon_Title"),
                            }),
                            (0, t.jsx)(b.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: p.Localize(
                                "#AppPage_ComingSoon_ReleaseDatePassed",
                              ),
                            }),
                          ],
                        }),
                      !x &&
                        D &&
                        (0, t.jsx)(wn.D, {
                          size: "5",
                          children: p.Localize(
                            "#AppPage_ComingSoon_ReleasesOn",
                            A,
                          ),
                        }),
                      !x &&
                        !D &&
                        (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)(b.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: p.Localize(
                                B
                                  ? "#AppPage_ComingSoon_NotYetAvailable_DLC"
                                  : "#AppPage_ComingSoon_NotYetAvailable",
                              ),
                            }),
                            S &&
                              (0, t.jsxs)(wn.D, {
                                size: "5",
                                children: [
                                  I &&
                                    `${p.Localize("#AppPage_ComingSoon_IntendedRelease")}: `,
                                  A,
                                ],
                              }),
                          ],
                        }),
                      C &&
                        (0, t.jsx)(b.EY, {
                          size: "2",
                          children: p.Localize(
                            yu(d.type, r),
                            (0, Lt.Hq)(h - (0, jn._2)(), {
                              eSuffix: Lt.a8.None,
                            }),
                          ),
                        }),
                      o &&
                        (0, t.jsx)(b.EY, {
                          size: "3",
                          weight: "heavy",
                          className: Zn().OffsitePrice,
                          children: o,
                        }),
                    ],
                  }),
                  !n && (0, t.jsx)(bu, { appid: e }),
                ],
              }),
              c && (0, t.jsx)(Bu, { appid: e, preload: c }),
            ],
          });
        }
        function bu(s) {
          const { appid: e } = s,
            { data: n } = ys(e);
          if (!n) return null;
          const r = n.wishlist;
          return (0, t.jsxs)(O.s, {
            direction: "column",
            className: Zn().Reminder,
            children: [
              (0, t.jsxs)(O.s, {
                direction: "column",
                className: Zn().Note,
                children: [
                  r &&
                    (0, t.jsx)(b.EY, {
                      size: "2",
                      children: p.Localize(
                        "#AppPage_ComingSoon_WishlistReminder_On",
                      ),
                    }),
                  !r &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(b.EY, {
                          size: "2",
                          children: p.Localize(
                            "#AppPage_ComingSoon_WishlistPrompt",
                          ),
                        }),
                        (0, t.jsx)(b.EY, {
                          size: "2",
                          children: p.Localize(
                            "#AppPage_ComingSoon_WishlistReminder",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              r &&
                (0, t.jsx)(Ot.Y, {
                  href: `${w.TS.STORE_BASE_URL}wishlist/`,
                  children: p.Localize("#AppPage_ComingSoon_ViewWishlist"),
                }),
              !r && (0, t.jsx)(Yr, { appid: e, color: "storegreen" }),
            ],
          });
        }
        function Bu(s) {
          const { appid: e, preload: n } = s,
            { subidFreeOnDemand: r, bOwnedPermanent: a } = n,
            { data: o } = (0, E.J$)({ appid: e }),
            c = (0, rn.LH)(),
            d = o?.free_weekend?.appid ?? e,
            u = ks(d, o?.name ?? "");
          if (!o) return null;
          const g = !!c && !!r && !a;
          return (0, t.jsxs)(O.s, {
            direction: "column",
            className: Zn().Preload,
            children: [
              (0, t.jsx)(Ma, { id: { appid: e } }),
              (0, t.jsx)(wn.D, {
                size: "5",
                children: p.Localize(
                  "#AppPage_ComingSoon_PreloadTitle",
                  o.name,
                ),
              }),
              (0, t.jsxs)(O.s, {
                direction: "row",
                className: Zn().PreloadActions,
                children: [
                  (0, t.jsx)(Le.$, {
                    onClick: u,
                    children: p.Localize("#AppPage_ComingSoon_PreloadButton"),
                  }),
                  g && (0, t.jsx)(Iu, { subid: r }),
                ],
              }),
            ],
          });
        }
        function Iu(s) {
          const e = Vs({ packageid: s.subid });
          return (0, t.jsx)(Le.$, {
            color: "greyneutral",
            onClick: e,
            children: p.Localize("#AppPage_ComingSoon_AddToLibrary"),
          });
        }
        const Ht = new fs.wd("PurchaseOptions"),
          Ta = !1;
        function Eu(s) {
          const {
              appid: e,
              rgOwnedApps: n,
              rgOwnedPackages: r,
              playtestStatus: a,
              rgFreePackagesAvailable: o,
              strAccountTypeDescription: c,
              comingSoon: d,
            } = s,
            u = (0, Bs._7)(!0),
            g = da(),
            f = (0, la.QW)(),
            [h, x] = m.useState(!1);
          return (
            m.useEffect(() => {
              Ht.Debug("Initializing PurchaseOptions"),
                Ht.Debug("rgOwnedApps", n),
                Ht.Debug("rgActiveLicenses", r),
                Ht.Debug("playtestStatus", a),
                Ht.Debug("rgFreePackagesAvailable", o),
                Ht.Debug("strAccountTypeDescription", c),
                u(n),
                g(r),
                Ta && a && f(a.appid, a),
                x(!0);
            }, [e, r, n, a, u, g, f, o, c]),
            m.use(p.Ready()),
            m.use(Y.Z.Ready()),
            h
              ? (0, t.jsx)(m.Suspense, {
                  children: (0, t.jsx)(Mu, {
                    appid: e,
                    rgPackagesAvailableForFree: o,
                    strAccountTypeDescription: c,
                    comingSoon: d,
                  }),
                })
              : null
          );
        }
        function Pu(s, e, n) {
          const { data: r } = (0, E.J$)({ appid: s }),
            { data: a } = (0, E.is)({ appid: s }),
            { data: o } = (0, Bs.$Y)(),
            c = ua(s),
            d = a?.purchase_options;
          return (
            Ht.Debug(d),
            m.useMemo(() => {
              if (!r || !d || !o) return null;
              const g = r.is_free && !r.is_free_temporarily,
                f = (0, jn._2)(),
                h =
                  r.free_weekend &&
                  (r.free_weekend.start_time || 0) <= f &&
                  (r.free_weekend.end_time || 0) > f,
                x = new Set(e),
                v = [];
              if (!g)
                if (o.has(s)) v.push({ type: "play" });
                else {
                  const $ = (a.purchase_options || [])
                    .map((G) => G.free_with_master_sub_appid)
                    .filter((G) => !!G);
                  Ht.Debug($);
                  for (const G of $)
                    if (G && o.has(G)) {
                      v.push({ type: "play", appidMasterSub: G });
                      break;
                    }
                }
              if (Ta) {
                const $ = r.related_items?.playtests || [];
                if ($.length > 0)
                  for (const G of $)
                    G &&
                      v.push({
                        type: "playtest",
                        appidPlaytest: G.appid,
                        bIsOpen: !!G.is_open,
                      });
              }
              const I = new Set(),
                B = new Set(
                  (r.related_items?.standalone_demos || []).map(($) => $.appid),
                );
              for (let $ of r.related_items?.demos?.filter(
                (G) => G.show_above_purchase,
              ) || [])
                I.has($.appid) ||
                  (v.push({
                    type: "demo",
                    appid: $.appid,
                    label: $.label,
                    bStandalone: B.has($.appid),
                  }),
                  I.add($.appid));
              (g || h) && v.push({ type: "free" });
              const A = new Map();
              for (let $ of a.package_groups || [])
                A.set($.name, { id: $.name, package_group: $, items: [] });
              let S = !!r.related_items?.related_f2p;
              const D = new Set(
                d.map(($) => $.free_to_keep_base_package).filter(($) => !!$),
              );
              for (let $ of d)
                $.is_free_license &&
                  !$.package_group &&
                  (v.push({
                    type: "item",
                    data: $,
                    bAvailableForFree: !!$.packageid && x.has($.packageid),
                  }),
                  D.add($.packageid));
              let C;
              for (let $ of d)
                if (
                  !D.has($.packageid) &&
                  !($.packageid && c.has($.packageid))
                ) {
                  if (S && !$.is_edition && r.related_items) {
                    const G = r.related_items.related_f2p;
                    v.push({
                      type: "related",
                      appid: G.appid,
                      title: G.header_text,
                      description: G.description_text,
                    }),
                      (S = !1);
                  }
                  $.package_group !== C?.id &&
                    ($.package_group
                      ? ((C = A.get($.package_group)),
                        C?.package_group.display_type == ne.aq.V &&
                          v.push({ type: "dropdown", data: C }))
                      : (C = void 0)),
                    C && C?.package_group.display_type == ne.aq.V
                      ? C.items.push($)
                      : v.push({
                          type: "item",
                          data: $,
                          bAvailableForFree:
                            !!$.packageid && x.has($.packageid),
                        });
                }
              return Ht.Debug(A), v;
            }, [s, r, a, d, o, e, c])
          );
        }
        function Mu(s) {
          const {
              appid: e,
              rgPackagesAvailableForFree: n,
              strAccountTypeDescription: r,
              comingSoon: a,
            } = s,
            { data: o } = (0, E.J$)({ appid: e }),
            c = Pu(e, n, r),
            d = m.useRef(null),
            u = m.useCallback((g) => {
              g.data?.method == "FocusPurchaseOptions" &&
                (d.current?.NavTree().Activate(),
                d.current?.TakeFocus(jr.pR.OK));
            }, []);
          return (
            m.useEffect(
              () => (
                window.addEventListener("message", u),
                () => window.removeEventListener("message", u)
              ),
              [u],
            ),
            !o || !c
              ? (Ht.Warning("Not ready", e), null)
              : (Ht.Debug(o),
                Ht.Debug(c),
                (0, t.jsx)(hn.Provider, {
                  value: { appid: e, nOptions: c.length },
                  children: (0, t.jsx)(ud, {
                    children: (0, t.jsxs)(T.Z, {
                      className: cn().PurchaseOptionDisplay,
                      navEntryPreferPosition: z.iU.PREFERRED_CHILD,
                      navRef: d,
                      children: [
                        a && (0, t.jsx)(ju, { appid: e, ...a }),
                        (0, t.jsx)(lu, { appid: e }),
                        c.length > 0 &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Kr.k, {
                                children: (0, t.jsx)(b.EY, {
                                  size: "3",
                                  contrast: "title",
                                  weight: "heavy",
                                  children: p.Localize(
                                    "#AppPage_PurchaseOptions_Title",
                                  ),
                                }),
                              }),
                              c.length > 2 && (0, t.jsx)(Tu, { options: c }),
                              c.length <= 2 &&
                                (0, t.jsxs)(T.Z, {
                                  className: (0, F.A)(
                                    cn().PurchaseOptionCarouselWrapper,
                                    c.length <= 2 && cn().NoCarousel,
                                    c.length == 1 && cn().Single,
                                  ),
                                  preferredFocus: !0,
                                  children: [
                                    c.length <= 2 &&
                                      (0, t.jsx)(kr, { option: c[0] }),
                                    c.length == 2 &&
                                      (0, t.jsx)(kr, { option: c[1] }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }))
          );
        }
        function kr(s) {
          const { option: e } = s;
          let n = null;
          switch (e.type) {
            case "item":
              e.data.packageid
                ? (n = (0, t.jsx)(Jd, { id: Ar(e.data), option: e }))
                : (n = (0, t.jsx)(qd, { id: Ar(e.data), option: e }));
              break;
            case "dropdown":
              n = (0, t.jsx)(zd, { option: e });
              break;
            case "demo":
              n = (0, t.jsx)(jd, { option: e });
              break;
            case "free":
              n = (0, t.jsx)(bd, { option: e });
              break;
            case "play":
              n = (0, t.jsx)(Dd, {
                option: e,
                appidMasterSub: e.appidMasterSub,
              });
              break;
            case "playtest":
              n = (0, t.jsx)(Fd, {
                option: e,
                appidPlaytest: e.appidPlaytest,
                bIsOpen: e.bIsOpen,
              });
              break;
            case "related":
              n = (0, t.jsx)(Rd, { option: e });
              break;
            default:
          }
          return n
            ? (0, t.jsx)("div", {
                className: cn().PurchaseOptionWrapper,
                children: n,
              })
            : null;
        }
        function Tu(s) {
          const { options: e } = s,
            n = "purchase_options",
            [r, a] = (0, oa.Eh)(n),
            o = 0.96,
            c = 256,
            d = 8,
            u = parseInt(cn().CarouselPaddingTop),
            g = parseInt(cn().CarouselPaddingBottom),
            f = m.useCallback(
              (v, I, B, A) => {
                const S = e[v];
                return (0, t.jsx)("div", {
                  style: { width: I, height: B },
                  children: (0, t.jsx)(kr, { option: S }),
                });
              },
              [e],
            ),
            h = m.useCallback(() => c, [c]),
            x = m.useCallback(
              (v) => {
                const I = e[v];
                switch (I.type) {
                  case "item":
                    return nd(I.data);
                  case "dropdown":
                    return "dropdown_package_group_" + I.data.id;
                  case "demo":
                    return "demo_" + I.appid;
                  case "free":
                    return "free";
                  case "playtest":
                    return "playtest_" + I.appidPlaytest;
                  case "play":
                    return "play_" + I.appidMasterSub;
                  case "related":
                    return "related_" + I.appid;
                  default:
                    return (
                      (0, xs.wT)(!1, "Unknown purchase option type", I.type),
                      "unknown"
                    );
                }
              },
              [e],
            );
          return e.length == 0
            ? null
            : (0, t.jsx)(T.Z, {
                className: (0, F.A)(
                  cn().PurchaseOptionCarouselWrapper,
                  r != 0 && cn().NotLeft,
                ),
                preferredFocus: !0,
                children: (0, t.jsx)(oa.jy, {
                  name: n,
                  "aria-label": p.Localize("#AppPage_PurchaseOptions_Title"),
                  className: (0, F.A)(
                    cn().PurchaseOptionsCarousel,
                    "PurchaseOptions",
                  ),
                  focusedColumn: r,
                  setFocusedColumn: a,
                  nNumItems: e.length,
                  nHeight: c / o + u + g,
                  nItemHeight: c / o,
                  nItemMarginX: d,
                  fnGetColumnWidth: h,
                  fnGetId: x,
                  fnItemRenderer: f,
                  scrollToAlignment: "center",
                }),
              });
        }
        var Ut = i(78365),
          Jn = i(24642);
        const Su = 0,
          Lu = 1,
          Ou = 2,
          Au = 3,
          zu = 4,
          Nu = 5;
        var Vr = i(95242),
          Du = i(91405),
          Sa = i(9843);
        const Fu = m.lazy(() =>
          Promise.all([i.e(53080), i.e(56925), i.e(39233), i.e(24102)]).then(
            i.bind(i, 75850),
          ),
        );
        function Qr(s) {
          const { rgPackageIDs: e, strButtonToken: n } = s,
            [r, a] = m.useState(void 0),
            o = e.map((x) => ({ packageid: x })),
            { mutate: c, isPending: d } = (0, Du.w)(o),
            { data: u } = (0, Sa.UI)(),
            g =
              u !== void 0 &&
              e.length > 0 &&
              e.every((x) => (0, Sa.lb)(u, x, void 0)),
            f = m.useCallback(() => a(void 0), []),
            h = m.useCallback(() => {
              c(void 0, { onSuccess: (x) => a(x) });
            }, [c]);
          return e.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  r &&
                    (0, t.jsx)(m.Suspense, {
                      children: (0, t.jsx)(Fu, {
                        lineItemIDs: r,
                        closeCart: f,
                      }),
                    }),
                  g
                    ? (0, t.jsx)(Le.v, {
                        navProps: { preferredFocus: !0 },
                        color: "storegreen",
                        focusable: !0,
                        href: `${U.TS.STORE_BASE_URL}cart/`,
                        children: be.d.Localize("#AddToCartButton_InCart"),
                      })
                    : (0, t.jsx)(Le.$, {
                        navProps: { preferredFocus: !0 },
                        color: "storegreen",
                        disabled: d,
                        onClick: h,
                        children: p.Localize(n),
                      }),
                ],
              });
        }
        var qs = i(95994);
        const Wu = "17px";
        function La(s) {
          const {
            overhang: e = Wu,
            marginTop: n,
            marginBottom: r,
            buttonBarContents: a,
            children: o,
          } = s;
          return (0, t.jsxs)(qs.x, {
            columns: "1fr",
            rows: `auto ${e}`,
            marginTop: n,
            marginBottom: r,
            children: [o, (0, t.jsx)(Ru, { children: a })],
          });
        }
        function Ru(s) {
          const { children: e } = s;
          return (0, t.jsx)(O.s, {
            marginX: "4",
            alignSelf: "end",
            justify: "end",
            gap: "1",
            zIndex: "1",
            gridColumn: "1",
            gridRow: "1 / -1",
            navProps: { navEntryPreferPosition: z.iU.PREFERRED_CHILD },
            children: e,
          });
        }
        var wu = i(26666),
          Xn = i.n(wu);
        const Uu = 6,
          Cu = 5,
          Ku = 135;
        function Gu(s) {
          const { appid: e, rgOptions: n } = s;
          return (0, t.jsx)(t.Fragment, {
            children: n.map((r) =>
              (0, t.jsx)(Yu, { appid: e, option: r }, r.packageid),
            ),
          });
        }
        function Yu(s) {
          const { appid: e, option: n } = s,
            r = n.packageid,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.J$)({ packageid: r }),
            { data: c } = Is(),
            d = m.useMemo(() => {
              const h = new Map();
              for (const x of a?.included_items?.included_apps || [])
                x.id && h.set(x.id, x);
              return (o?.included_appids || [])
                .map((x) => h.get(x))
                .filter((x) => !!x);
            }, [a, o]);
          if (!o) return null;
          const u = !!c?.has(r),
            g = !!o.purchase_description_bbcode,
            f = d.slice(0, Uu);
          return (0, t.jsx)(La, {
            marginBottom: "4",
            buttonBarContents: (0, t.jsx)(ku, { pkg: o, option: n }),
            children: (0, t.jsxs)(de.az, {
              position: "relative",
              gridRow: "1",
              gridColumn: "1",
              padding: "4",
              paddingTop: "2",
              paddingBottom: "5",
              radius: "md",
              className: Xn().PackBody,
              children: [
                u &&
                  (0, t.jsx)(O.s, {
                    align: "center",
                    gap: "1",
                    position: "absolute",
                    inset: "-8px auto auto 6px",
                    paddingX: "1",
                    className: Xn().PackInLibrary,
                    children: (0, Xs.eI)("in_library"),
                  }),
                (0, t.jsxs)(O.s, {
                  justify: "between",
                  align: "center",
                  children: [
                    (0, t.jsx)(b.EY, {
                      size: "5",
                      children: p.Localize(
                        "#AppPage_Dropdown_DefaultTitle",
                        n.purchase_option_name || o.name || "",
                      ),
                    }),
                    (0, t.jsx)(de.az, {
                      marginBottom: "1",
                      children: (0, t.jsx)(Ma, { id: { packageid: r } }),
                    }),
                  ],
                }),
                !g && d.length > 1 && (0, t.jsx)(Vu, { rgApps: d }),
                f.length > 1 &&
                  (0, t.jsx)(de.az, {
                    position: "relative",
                    padding: "2",
                    className: Xn().PackCapsulesCtn,
                    children: (0, t.jsx)(de.az, {
                      className: (0, F.A)(
                        Xn().PackCapsules,
                        f.length >= Cu && Xn().PackCapsulesCollapsed,
                      ),
                      children: f.map((h, x) =>
                        (0, t.jsx)(Qu, { appid: h.id, zIndex: 10 - x }, h.id),
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function ku(s) {
          const { pkg: e, option: n } = s,
            r = m.useMemo(() => [n.packageid], [n.packageid]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Oa, {
                children: (0, t.jsx)(Le.v, {
                  focusable: !0,
                  href: (0, Gr._)(e),
                  children: p.Localize("#AppPage_PurchaseOption_MoreInfo"),
                }),
              }),
              (0, t.jsxs)(Oa, {
                children: [
                  (0, t.jsx)(Vr.z, { purchaseOption: n }),
                  (0, t.jsx)(Qr, {
                    rgPackageIDs: r,
                    strButtonToken: "#AppPage_PurchaseOption_AddToCart",
                  }),
                ],
              }),
            ],
          });
        }
        function Oa(s) {
          const { children: e } = s;
          return (0, t.jsx)(O.s, {
            align: "center",
            gap: "1",
            zIndex: "1",
            className: Xn().PackActionGroup,
            children: e,
          });
        }
        function Vu(s) {
          const { rgApps: e } = s,
            [n, r] = m.useState(!1),
            a = m.useCallback(() => r((u) => !u), []),
            o = m.useMemo(() => {
              let u = 0,
                g = 0;
              for (const f of e) {
                const h = (f.name || "").length;
                if (g > 0 && u + h >= Ku) break;
                (u += h), g++;
              }
              return g;
            }, [e]),
            c = o < e.length,
            d = c && !n ? e.slice(0, o) : e;
          return (0, t.jsx)(T.Z, {
            children: (0, t.jsxs)(b.EY, {
              size: "2",
              marginY: "2",
              children: [
                (0, t.jsx)("b", {
                  children: p.LocalizePlural(
                    "#AppPage_DLCPack_IncludesItems",
                    e.length,
                    (0, Jn.D)(e.length),
                  ),
                }),
                " ",
                d.map((u, g) =>
                  (0, t.jsxs)(
                    m.Fragment,
                    {
                      children: [
                        g > 0 && ", ",
                        (0, t.jsx)(Ot.Y, {
                          href: (0, Gr._)(u),
                          whiteSpace: "nowrap",
                          children: u.name,
                        }),
                      ],
                    },
                    u.id,
                  ),
                ),
                c && (n ? " " : "\u2026 "),
                c &&
                  (0, t.jsx)(Ot.W, {
                    onClick: a,
                    children: p.Localize(
                      n
                        ? "#AppPage_DLCPack_ShowLess"
                        : "#AppPage_DLCPack_ShowMore",
                    ),
                  }),
              ],
            }),
          });
        }
        function Qu(s) {
          const { appid: e, zIndex: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, E.lv)({ appid: e }),
            o =
              a?.asset_url_format && a.small_capsule
                ? Zs(a.asset_url_format, a.small_capsule)
                : void 0;
          return o
            ? (0, t.jsx)(de.az, {
                position: "relative",
                display: "inline-block",
                height: "45px",
                width: "120px",
                overflow: "hidden",
                className: Xn().PackCapsule,
                style: { zIndex: n },
                children: (0, t.jsx)(tn, {
                  height: "100%",
                  width: "100%",
                  src: o,
                  alt: r?.name || "",
                }),
              })
            : null;
        }
        var $u = i(16071),
          Ct = i.n($u);
        const _s = 5;
        function Zu(s) {
          switch (s) {
            case Lu:
              return "#AppPage_DLC_Highlight_New";
            case Ou:
              return "#AppPage_DLC_Highlight_ComingSoon";
            case Au:
              return "#AppPage_DLC_Highlight_PlayerFavorite";
            case zu:
              return "#AppPage_DLC_Highlight_Recommended";
            case Nu:
              return "#AppPage_DLC_Highlight_RecommendedForNewPlayers";
            default:
              return null;
          }
        }
        function Ju(s) {
          switch (s) {
            case "in_cart":
              return Ct().FlagInCart;
            case "in_library":
              return Ct().FlagInLibrary;
            case "on_wishlist":
              return Ct().FlagOnWishlist;
            case "ignored":
            case "excluded_by_preferences":
              return Ct().FlagIgnored;
          }
        }
        function Xu(s) {
          const {
              appid: e,
              rgRows: n,
              nDlcBrowseCount: r,
              nNumDLCExcludedByPreferences: a,
              addAllToCart: o,
            } = s,
            [c, d] = m.useState(!1),
            u = m.useCallback(() => d(!0), []),
            { data: g } = (0, E.J$)({ appid: e }),
            f = ad(e);
          if (!g || (n.length == 0 && a == 0 && !f?.length)) return null;
          m.use(p.Ready()), m.use(be.d.Ready());
          const h = g.type == ne.uE.Sv,
            x = !c && n.length > _s,
            v = x ? n.slice(0, _s) : n;
          return (0, t.jsx)(m.Suspense, {
            children: (0, t.jsxs)(O.s, {
              direction: "column",
              gap: "4",
              marginY: "5",
              children: [
                (0, t.jsxs)(Ut.YZ, {
                  "flow-children": "column",
                  children: [
                    (0, t.jsxs)(O.s, {
                      direction: "row",
                      justify: "between",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, t.jsx)(b.EY, {
                          size: "3",
                          contrast: "title",
                          weight: "heavy",
                          children: p.Localize(
                            h
                              ? "#AppPage_DLC_Header_Software"
                              : "#AppPage_DLC_Header",
                          ),
                        }),
                        r > 0 &&
                          (0, t.jsx)(Ot.Y, {
                            size: "2",
                            href: `${U.TS.STORE_BASE_URL}dlc/${e}/`,
                            children: p.Localize(
                              "#AppPage_DLC_BrowseAll",
                              (0, Jn.D)(r),
                            ),
                          }),
                      ],
                    }),
                    a > 0 &&
                      (0, t.jsx)(de.az, {
                        padding: "1",
                        paddingStart: "0",
                        marginBottom: "1",
                        children: (0, t.jsx)(b.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          children: (0, ve.xh)(
                            p.LocalizePlural(
                              "#AppPage_DLC_ExcludedByPreferences",
                              a,
                            ),
                            (0, t.jsx)(Ot.Y, {
                              href: `${U.TS.STORE_BASE_URL}account/preferences/`,
                            }),
                          ),
                        }),
                      }),
                    v.map((I, B) =>
                      (0, t.jsx)(Hu, { row: I, bRevealed: B >= _s }, I.appid),
                    ),
                    x &&
                      (0, t.jsxs)(O.s, {
                        direction: "row",
                        justify: "between",
                        align: "center",
                        marginTop: "1",
                        className: Ct().Footer,
                        children: [
                          (0, t.jsx)(Le.$, {
                            onClick: u,
                            children: p.Localize("#AppPage_DLC_SeeAll"),
                          }),
                          (0, t.jsx)(b.EY, {
                            size: "2",
                            color: "greyneutral-11",
                            children: p.Localize(
                              "#AppPage_DLC_ShowingResults",
                              "1",
                              (0, Jn.D)(_s),
                              (0, Jn.D)(r),
                            ),
                          }),
                        ],
                      }),
                    !x &&
                      n.length < r &&
                      (0, t.jsx)(de.az, {
                        marginTop: "1",
                        children: (0, t.jsx)(b.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          className: Ct().PartialList,
                          children: p.Localize(
                            "#AppPage_DLC_ShowingPartialList",
                            (0, Jn.D)(n.length),
                            (0, Jn.D)(r),
                          ),
                        }),
                      }),
                  ],
                }),
                !x &&
                  o &&
                  (0, t.jsxs)(O.s, {
                    direction: "row",
                    justify: "between",
                    align: "center",
                    gap: "2",
                    marginTop: "2",
                    padding: "2",
                    className: Ct().AddAllToCart,
                    children: [
                      (0, t.jsx)(b.EY, {
                        size: "3",
                        weight: "heavy",
                        children: o.strTotalPrice,
                      }),
                      (0, t.jsx)(Qr, {
                        rgPackageIDs: o.rgPackageIDs,
                        strButtonToken: "#AppPage_DLC_BuyAll",
                      }),
                    ],
                  }),
                !!f?.length && (0, t.jsx)(Gu, { appid: e, rgOptions: f }),
              ],
            }),
          });
        }
        function Hu(s) {
          const { bRevealed: e } = s,
            { appid: n, packageid: r, nHighlightReason: a } = s.row,
            { data: o } = (0, E.J$)({ appid: n }),
            { data: c } = (0, E.mr)(r ? { packageid: r } : void 0),
            d = a !== Su,
            { data: u } = (0, E.lv)(d ? { appid: n } : void 0),
            g = (0, Xs.qz)({ appid: n });
          if (!o) return null;
          const f = Zu(a),
            h =
              u?.asset_url_format && u.small_capsule
                ? Zs(u.asset_url_format, u.small_capsule)
                : void 0;
          return (0, t.jsxs)(Wn.p, {
            storeItem: o,
            className: (0, F.A)(
              Ct().Row,
              d && Ct().Highlight,
              e && Ct().Revealed,
            ),
            children: [
              d &&
                h &&
                (0, t.jsx)(tn, {
                  maxHeight: "87px",
                  flexGrow: "0",
                  src: h,
                  alt: o.name,
                }),
              (0, t.jsxs)(O.s, {
                direction: "column",
                align: "start",
                gap: "1",
                paddingEnd: "1",
                className: Ct().Name,
                children: [
                  g &&
                    (0, t.jsx)(b.EY, {
                      size: "1",
                      marginBottom: "1",
                      className: (0, F.A)(Ct().Pill, Ju(g)),
                      children: (0, Xs.eI)(g),
                    }),
                  f &&
                    (0, t.jsx)(b.EY, {
                      size: "1",
                      className: (0, F.A)(Ct().Pill, Ct().HighlightReason),
                      children: p.Localize(f),
                    }),
                  (0, t.jsx)(b.EY, { size: "3", children: o.name }),
                ],
              }),
              (0, t.jsxs)(de.az, {
                flexShrink: "0",
                textAlign: "end",
                className: Ct().Price,
                children: [
                  o.is_free &&
                    (0, t.jsx)(b.EY, {
                      size: "4",
                      children: p.Localize("#AppPage_DLC_Free"),
                    }),
                  !o.is_free &&
                    c &&
                    (0, t.jsx)(Vr.z, { purchaseOption: c, size: "inline" }),
                  !o.is_free &&
                    !c &&
                    (0, t.jsx)(b.EY, {
                      size: "4",
                      children: p.Localize("#AppPage_DLC_NoPrice"),
                    }),
                ],
              }),
            ],
          });
        }
        var qu = i(72723),
          bn = i.n(qu);
        function _u(s) {
          const {
              thisDLC: e,
              rgDependencies: n,
              rgPackageIDsToAdd: r,
              strTotalPrice: a,
            } = s,
            o = n.length == 1,
            { data: c } = (0, E.J$)({ appid: e.appid }),
            { data: d } = (0, E.J$)(o ? { appid: n[0].appid } : void 0);
          if (!c || n.length == 0 || (o && !d)) return null;
          m.use(p.Ready()), m.use(be.d.Ready());
          const u = n[0].bRequired,
            g = o
              ? p.Localize(
                  u
                    ? "#AppPage_DLCDependency_RequiredTitle"
                    : "#AppPage_DLCDependency_RecommendedTitle",
                )
              : null,
            f = o
              ? p.Localize(
                  u
                    ? "#AppPage_DLCDependency_RequiredDesc"
                    : "#AppPage_DLCDependency_RecommendedDesc",
                  c.name || "",
                  d.name || "",
                )
              : p.Localize("#AppPage_DLCDependency_MultipleDesc", c.name || "");
          return (0, t.jsx)(m.Suspense, {
            children: (0, t.jsx)(La, {
              marginTop: "5",
              marginBottom: "5",
              buttonBarContents: (0, t.jsx)(em, {
                rgPackageIDs: r,
                strTotalPrice: a,
              }),
              children: (0, t.jsxs)(Ut.YZ, {
                "flow-children": "column",
                className: bn().Body,
                children: [
                  g &&
                    (0, t.jsx)(b.EY, {
                      size: "6",
                      contrast: "title",
                      marginBottom: "2",
                      children: g,
                    }),
                  (0, t.jsx)(b.EY, {
                    size: "3",
                    children: (0, ve.xh)(
                      f,
                      (0, t.jsx)("b", {}),
                      (0, t.jsx)("b", {}),
                    ),
                  }),
                  (0, t.jsxs)(T.Z, {
                    "flow-children": "row",
                    className: bn().Capsules,
                    children: [
                      (0, t.jsx)(Aa, {
                        appid: e.appid,
                        packageid: e.packageid,
                        strCallout: p.Localize(
                          "#AppPage_DLCDependency_ThisDLC",
                        ),
                      }),
                      n.map((h) =>
                        (0, t.jsxs)(
                          m.Fragment,
                          {
                            children: [
                              (0, t.jsx)(de.az, {
                                "aria-hidden": !0,
                                className: bn().Separator,
                                children: "+",
                              }),
                              (0, t.jsx)(Aa, {
                                appid: h.appid,
                                packageid: h.packageid,
                                strCallout: p.Localize(
                                  h.bRequired
                                    ? "#AppPage_DLCDependency_RequiredTab"
                                    : "#AppPage_DLCDependency_RecommendedTab",
                                ),
                              }),
                            ],
                          },
                          h.appid,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function em(s) {
          const { rgPackageIDs: e, strTotalPrice: n } = s;
          return (0, t.jsxs)(O.s, {
            align: "center",
            gap: "1",
            className: bn().ActionGroup,
            children: [
              (0, t.jsx)(b.EY, {
                size: "3",
                className: bn().Total,
                children: n,
              }),
              (0, t.jsx)(Qr, {
                rgPackageIDs: e,
                strButtonToken: "#AppPage_DLCDependency_AddAllToCart",
              }),
            ],
          });
        }
        function Aa(s) {
          const { appid: e, packageid: n, strCallout: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.lv)({ appid: e }),
            { data: c } = (0, E.mr)(n ? { packageid: n } : void 0);
          if (!a) return null;
          const d =
            o?.asset_url_format && o.small_capsule
              ? Zs(o.asset_url_format, o.small_capsule)
              : void 0;
          return (0, t.jsxs)(T.Z, {
            "flow-children": "column",
            className: bn().Item,
            children: [
              (0, t.jsx)(O.s, {
                justify: "center",
                position: "absolute",
                inset: "-16px 0 auto 0",
                className: bn().CalloutRow,
                children: (0, t.jsx)(b.EY, {
                  size: "1",
                  contrast: "title",
                  className: bn().Callout,
                  children: r,
                }),
              }),
              (0, t.jsxs)(Wn.p, {
                storeItem: a,
                className: bn().Link,
                children: [
                  d &&
                    (0, t.jsx)(tn, {
                      display: "block",
                      width: "100%",
                      src: d,
                      alt: a.name || "",
                    }),
                  (0, t.jsxs)(de.az, {
                    children: [
                      a.is_free &&
                        (0, t.jsx)(b.EY, {
                          size: "3",
                          children: p.Localize("#AppPage_DLC_Free"),
                        }),
                      !a.is_free &&
                        c &&
                        (0, t.jsx)(Vr.z, { purchaseOption: c, size: "inline" }),
                      !a.is_free &&
                        !c &&
                        (0, t.jsx)(b.EY, {
                          size: "3",
                          children: p.Localize("#AppPage_DLC_NoPrice"),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var za = i(96253),
          tm = i(48205),
          qt = i.n(tm),
          nm = i(21690);
        function sm(s) {
          const {
              appid: e,
              oTags: n,
              oCreatorLinks: r,
              reviewSummaryRecent: a,
              strIdForReviewSummary: o,
            } = s,
            c = new Map();
          for (const [u, g] of Object.entries(n)) c.set(u, g);
          const d = new Map();
          for (const [u, g] of Object.entries(r)) d.set(u, g);
          return (
            m.useLayoutEffect(() => {
              const u = document.querySelector("#summaryBarTop");
              u && (u.style.height = "unset");
            }, []),
            m.use(p.Ready()),
            (0, t.jsx)(m.Suspense, {
              children: (0, t.jsxs)(T.Z, {
                className: qt().SummaryBarTop,
                "flow-children": "grid",
                navEntryPreferPosition: z.iU.MAINTAIN_X,
                resetNavOnEntry: !0,
                children: [
                  (0, t.jsx)(lm, {
                    appid: e,
                    recent: a,
                    strIdForReviewSummary: o,
                  }),
                  (0, t.jsx)(rm, { appid: e }),
                  (0, t.jsx)(om, { appid: e, mapTags: c }),
                  (0, t.jsx)(cm, { appid: e, mapCreatorLinks: d }),
                ],
              }),
            })
          );
        }
        function er(s) {
          const { children: e } = s;
          return (0, t.jsx)("div", {
            className: qt().Title,
            children: (0, t.jsx)(b.EY, { contrast: "title", children: e }),
          });
        }
        function rm(s) {
          const { appid: e } = s,
            n = m.useMemo(
              () => (0, w.Tc)("hardwarecompatibility", "application_config"),
              [],
            ),
            {
              bSteamDeck: r,
              bSteamOS: a,
              bSteamMachine: o,
              bSteamFrame: c,
            } = (0, nm.Ec)(),
            [d, u] = m.useMemo(
              () =>
                o
                  ? [
                      kt.JR,
                      p.Localize("#AppPage_SummaryBar_SteamMachineCompat"),
                    ]
                  : c
                    ? [
                        kt.bY,
                        p.Localize("#AppPage_SummaryBar_SteamFrameCompat"),
                      ]
                    : a && !r
                      ? [kt.c9, p.Localize("#AppPage_SummaryBar_SteamOSCompat")]
                      : [
                          kt.ZJ,
                          p.Localize("#AppPage_SummaryBar_SteamDeckCompat"),
                        ],
              [r, a, o, c],
            );
          return n
            ? (0, t.jsxs)(T.Z, {
                className: (0, F.A)(
                  qt().SummaryBarSection,
                  qt().SteamDeckCompat,
                ),
                children: [
                  (0, t.jsx)(er, { children: u }),
                  (0, t.jsx)(Qi, {
                    className: qt().SteamDeckCompatContent,
                    appID: e,
                    results: n,
                    tab: d,
                  }),
                ],
              })
            : null;
        }
        function im(s) {
          const e = s.Element?.getBoundingClientRect(),
            n = s.m_Parent?.Element?.getBoundingClientRect();
          return !e || !n ? !1 : e.bottom <= n.bottom;
        }
        function am(s) {
          const { tag: e } = s,
            n = (0, Qt.aL)(
              U.TS.STORE_BASE_URL + `tags/${(0, za.ut)(U.TS.LANGUAGE)}/${e}`,
            );
          return (0, t.jsx)(P.Ii, {
            className: qt().Tag,
            href: n,
            fnCanTakeFocus: im,
            children: (0, t.jsx)(de.az, {
              background: "blue-5",
              paddingX: "1",
              paddingY: "0",
              children: (0, t.jsx)(b.EY, { color: "blue-8", children: e }),
            }),
          });
        }
        function om(s) {
          const { appid: e, mapTags: n } = s;
          return (0, t.jsxs)(Ut.YZ, {
            className: (0, F.A)(qt().SummaryBarSection, qt().UserTags),
            focusable: !0,
            children: [
              (0, t.jsx)(er, {
                children: p.Localize("#AppPage_SummaryBar_UserTags"),
              }),
              (0, t.jsx)(T.Z, {
                className: qt().Tags,
                children: Array.from(n.entries()).map(([r, a]) =>
                  (0, t.jsx)(am, { tag: r }, r),
                ),
              }),
            ],
          });
        }
        function Na(s) {
          const {
            label: e,
            reviewScoreDescription: n,
            percentage: r,
            count: a,
          } = s;
          return !e || !n || r == null || !a
            ? null
            : (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(b.EY, {
                    contrast: "body",
                    children: p.Localize(e),
                  }),
                  " ",
                  (0, t.jsx)(b.EY, { color: "blue-8", children: n }),
                  " ",
                  (0, t.jsxs)(b.EY, {
                    contrast: "body",
                    children: [
                      "(",
                      p.Localize("#AppPage_ReviewStats", r, (0, Jn.D)(a)),
                      ")",
                    ],
                  }),
                ],
              });
        }
        function lm(s) {
          const { appid: e, recent: n, strIdForReviewSummary: r } = s,
            { data: a } = (0, E.ik)({ appid: e }),
            o = m.useCallback(() => {
              window.MoveFocusToId(r);
            }, [r]);
          return !a || !a.summary_filtered?.review_count
            ? null
            : (0, t.jsxs)(T.Z, {
                className: qt().SummaryBarSection,
                onActivate: o,
                children: [
                  (0, t.jsx)(er, {
                    children: p.Localize("#AppPage_SummaryBar_UserReviews"),
                  }),
                  (0, t.jsx)(Na, {
                    label: "#AppPage_Reviews_AllTime",
                    reviewScoreDescription:
                      a.summary_filtered?.review_score_label,
                    percentage: a.summary_filtered.percent_positive,
                    count: a.summary_filtered.review_count,
                  }),
                  n &&
                    (0, t.jsx)(Na, {
                      label: "#AppPage_Reviews_Recent",
                      reviewScoreDescription: n.description,
                      percentage: n.percentage,
                      count: n.count,
                    }),
                ],
              });
        }
        function cm(s) {
          const { appid: e, mapCreatorLinks: n } = s,
            { data: r } = (0, E.wl)({ appid: e }),
            { data: a } = (0, E.by)({ appid: e }),
            { data: o } = (0, E._F)({ appid: e }),
            c = o?.links_and_info?.manufacturers?.map((d) => ({ name: d }));
          return r
            ? (0, t.jsxs)(Ut.YZ, {
                className: (0, F.A)(qt().SummaryBarSection, qt().GameInfo),
                children: [
                  (0, t.jsx)(er, {
                    children: p.Localize("#AppPage_SummaryBar_GameInfo"),
                  }),
                  (0, t.jsx)("table", {
                    children: (0, t.jsxs)("tbody", {
                      children: [
                        (0, t.jsx)($r, {
                          label: "#AppPage_SummaryBar_Developer",
                          strType: "developer",
                          rgCreators: r.developers,
                          mapCreatorLinks: n,
                        }),
                        (0, t.jsx)($r, {
                          label: "#AppPage_SummaryBar_Publisher",
                          strType: "publisher",
                          rgCreators: r.publishers,
                          mapCreatorLinks: n,
                        }),
                        (0, t.jsx)($r, {
                          label: "#AppPage_SummaryBar_Manufacturer",
                          strType: "manufacturer",
                          rgCreators: c,
                        }),
                        a?.steam_release_date &&
                          (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)(b.EY, {
                                  contrast: "body",
                                  children: p.Localize(
                                    "#AppPage_SummaryBar_ReleaseDate",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("td", {
                                children: (0, t.jsx)(b.EY, {
                                  contrast: "body",
                                  children: (0, Lt._l)(a?.steam_release_date, {
                                    fullmonthname: !1,
                                    bUseRelativeNames: !1,
                                    bIncludeDayName: !1,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        }
        function dm(s) {
          const { creator: e, strType: n, mapCreatorLinks: r } = s,
            a = (0, Qt.aL)(r?.get(e.name)),
            o = (0, Qt.aL)(
              U.TS.STORE_BASE_URL +
                `search/?${n}=${encodeURIComponent(e.name)}`,
            ),
            c = a || o;
          return (0, t.jsx)(P.Ii, {
            href: c,
            children: (0, t.jsx)(b.EY, {
              color: "blue-8",
              whiteSpace: "nowrap",
              children: e.name,
            }),
          });
        }
        function $r(s) {
          const { label: e, strType: n, rgCreators: r, mapCreatorLinks: a } = s,
            o = 4;
          return !r || r.length == 0
            ? null
            : (0, t.jsxs)("tr", {
                children: [
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(b.EY, {
                      contrast: "body",
                      children: p.Localize(e),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(T.Z, {
                      children: (0, t.jsxs)(b.EY, {
                        contrast: "body",
                        lineClamp: 3,
                        children: [
                          r
                            .slice(0, o)
                            .map((c, d) =>
                              (0, t.jsxs)(
                                m.Fragment,
                                {
                                  children: [
                                    d != 0 &&
                                      (0, t.jsx)("span", { children: ", " }),
                                    (0, t.jsx)(dm, {
                                      strType: n,
                                      creator: c,
                                      mapCreatorLinks: a,
                                    }),
                                  ],
                                },
                                c.creator_clan_account_id || c.name,
                              ),
                            ),
                          r.length > o &&
                            (0, t.jsx)("span", {
                              children: p.Localize(
                                "#AppPage_SummaryBar_AndMore",
                                r.length - 4,
                              ),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
        }
        function um(s) {
          const e = (0, pn.jE)();
          return (
            m.useEffect(() => {
              const { rgPayloads: n, markReady: r } = s;
              for (let a of n || [])
                for (let o of a.rgStoreItems || [])
                  (0, E.vB)(e, o, a.dataRequestStoreItems);
              r();
            }, [e, s]),
            null
          );
        }
        var Ps = i(45497),
          mm = i(9246),
          Da = i.n(mm),
          gm = i(2259),
          pm = i(8611),
          nn = i.n(pm);
        function Zr(s) {
          const { children: e, className: n } = s,
            {
              setExpanded: r,
              refContents: a,
              bCollapsible: o,
              refPanel: c,
              bExpanded: d,
              bCollapsed: u,
            } = Wa(),
            g = m.useCallback(() => {
              r(!d);
            }, [d, r]);
          return (0, t.jsx)(T.Z, {
            ref: c,
            className: (0, F.A)(nn().AutoCollapsePanel, n),
            focusableIfEmpty: !0,
            onActivate: o ? g : void 0,
            children: (0, t.jsxs)(
              T.Z,
              {
                focusable: o,
                children: [
                  (0, t.jsx)("div", {
                    ref: a,
                    className: (0, F.A)(
                      nn().Contents,
                      u && nn().Collapsed,
                      d && nn().Expanded,
                    ),
                    children: e,
                  }),
                  o &&
                    (0, t.jsx)("div", {
                      className: nn().ReadMore,
                      children: p.Localize(
                        d ? "#btn_read_less" : "#btn_read_more",
                      ),
                    }),
                ],
              },
              u ? "collapsed" : "expanded",
            ),
          });
        }
        function Fa(s) {
          const { children: e, className: n } = s,
            {
              setExpanded: r,
              refContents: a,
              bCollapsible: o,
              refPanel: c,
              bExpanded: d,
              bCollapsed: u,
            } = Wa(),
            g = m.useCallback(
              (h) => {
                h && r(!0);
              },
              [r],
            ),
            f = m.useCallback(() => {
              r(!1);
            }, [r]);
          return (0, t.jsxs)(Ut.YZ, {
            ref: c,
            className: (0, F.A)(nn().AutoCollapsePanel, n),
            onExplicitFocusLevelChanged: o ? g : void 0,
            children: [
              (0, t.jsx)("div", {
                ref: a,
                className: (0, F.A)(
                  nn().Contents,
                  u && nn().Collapsed,
                  d && nn().Expanded,
                ),
                children: e,
              }),
              o &&
                !d &&
                (0, t.jsx)("div", {
                  className: nn().ReadMore,
                  children: p.Localize("#btn_read_more"),
                }),
              o &&
                d &&
                (0, t.jsx)(T.Z, {
                  className: nn().ReadMore,
                  onActivate: f,
                  children: p.Localize("#btn_read_less"),
                }),
            ],
          });
        }
        function Wa() {
          const [s, e] = m.useState(!1),
            [n, r] = m.useState(!1),
            a = m.useRef(null),
            o = m.useRef(!1),
            c = m.useCallback(
              (f) => {
                s || r(f.target.scrollHeight > f.target.clientHeight);
              },
              [s],
            ),
            d = (0, gm.wY)(c),
            u = n && !s;
          return (
            m.useLayoutEffect(() => {
              o.current &&
                !s &&
                a.current?.scrollIntoView({ block: "nearest" }),
                (o.current = !1);
            }, [s]),
            {
              setExpanded: m.useCallback(
                (f) => {
                  e(f), f || (o.current = !0);
                },
                [e, o],
              ),
              refContents: d,
              refPanel: a,
              bCollapsed: u,
              bExpanded: s,
              bCollapsible: n,
            }
          );
        }
        function fm(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.LM)({ appid: e });
          return (
            m.use(p.Ready()),
            !n || n.type == null || !r
              ? null
              : (0, t.jsxs)(Zr, {
                  className: Da().AboutThisGame,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("h2", {
                      className: Da().Header,
                      children: p.Localize(
                        p.GetAppTypeLocKey("#About_This", n.type),
                      ),
                    }),
                    (0, t.jsx)(Ps.n, { text: r }),
                  ],
                })
          );
        }
        var hm = i(11512),
          ym = i(38404),
          Vt = i.n(ym);
        const xm = {
          1: "date_full",
          2: "date_month",
          3: "date_quarter",
          4: "date_year",
        };
        function vm(s) {
          const e = s.release_from_early_access_date,
            n = xm[s.release_from_early_access_style];
          return !e || !n ? "" : (0, hm.M)(n, e);
        }
        function jm(s) {
          const { appid: e, staleUpdate: n, bIsAppEditor: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E.by)({ appid: e }),
            { data: c } = (0, E._F)({ appid: e }),
            [d, u] = m.useState(!1),
            g = m.useCallback(() => u((B) => !B), []);
          if ((m.use(p.Ready()), !a || !o)) return null;
          const f = a.type == ne.uE.Sv,
            h = !!o.is_coming_soon,
            x = vm(o);
          let v = "#AppPage_EarlyAccess_Header",
            I = "#AppPage_EarlyAccess_BannerDesc";
          return (
            h
              ? ((v = "#AppPage_EarlyAccess_Header_Soon"),
                (I = "#AppPage_EarlyAccess_BannerDesc_Soon"))
              : f &&
                ((v = "#AppPage_EarlyAccess_Header_Software"),
                (I = "#AppPage_EarlyAccess_BannerDesc_Software")),
            (0, t.jsxs)(Ut.YZ, {
              className: Vt().EarlyAccess,
              "flow-children": "column",
              children: [
                !!x &&
                  (0, t.jsx)("div", {
                    className: Vt().LeavingEarlyAccess,
                    children: p.Localize("#AppPage_EarlyAccess_LeaveWhen", x),
                  }),
                (0, t.jsxs)(T.Z, {
                  className: Vt().Banner,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)("h2", {
                      className: Vt().Title,
                      children: p.Localize(v),
                    }),
                    (0, t.jsx)("p", {
                      className: Vt().Desc,
                      children: p.Localize(I),
                    }),
                    (0, t.jsx)(Ot.W, {
                      onClick: g,
                      children: p.Localize(
                        d
                          ? "#AppPage_EarlyAccess_ShowLess"
                          : "#AppPage_EarlyAccess_ShowMore",
                      ),
                    }),
                    d &&
                      (0, t.jsx)(bm, {
                        earlyAccess: c?.early_access,
                        staleUpdate: n,
                        bIsAppEditor: r,
                        bSoftware: f,
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function bm(s) {
          const {
              earlyAccess: e,
              staleUpdate: n,
              bIsAppEditor: r,
              bSoftware: a,
            } = s,
            o = `${U.TS.STORE_BASE_URL}earlyaccessfaq/`,
            c = !!e?.description_bbcode;
          let d;
          c
            ? (d = [
                {
                  text: e?.description_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_WhatDevsSay",
                },
              ])
            : (d = [
                {
                  text: e?.why_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_Why",
                },
                {
                  text: e?.how_long_bbcode,
                  tokenHeader: a
                    ? "#AppPage_EarlyAccess_HowLong_Software"
                    : "#AppPage_EarlyAccess_HowLong",
                },
                {
                  text: e?.full_version_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_FullVersion",
                },
                {
                  text: e?.current_state_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_CurrentState",
                },
                {
                  text: e?.pricing_bbcode,
                  tokenHeader: a
                    ? "#AppPage_EarlyAccess_Pricing_Software"
                    : "#AppPage_EarlyAccess_Pricing",
                },
                {
                  text: e?.community_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_Community",
                },
              ]);
          const u = d.some((g) => !!g.text);
          return (0, t.jsxs)(T.Z, {
            className: Vt().Details,
            "flow-children": "column",
            children: [
              (0, t.jsxs)("p", {
                className: Vt().Warn,
                children: [
                  p.Localize(
                    a
                      ? "#AppPage_EarlyAccess_Warn_Software"
                      : "#AppPage_EarlyAccess_Warn",
                  ),
                  " ",
                  (0, t.jsx)(P.Ii, {
                    className: Vt().Link,
                    href: o,
                    children: p.Localize("#AppPage_EarlyAccess_LearnMore"),
                  }),
                ],
              }),
              !!n && (0, t.jsx)(Im, { staleUpdate: n, bIsAppEditor: r }),
              u &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    !c &&
                      (0, t.jsx)("div", {
                        className: Vt().DevsSay,
                        children: p.Localize(
                          "#AppPage_EarlyAccess_WhatDevsSay",
                        ),
                      }),
                    d.map((g, f) =>
                      (0, t.jsx)(
                        Bm,
                        { text: g.text, tokenHeader: g.tokenHeader },
                        f,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function Bm(s) {
          const { text: e, tokenHeader: n } = s;
          return e
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("h3", {
                    className: Vt().Question,
                    children: p.Localize(n),
                  }),
                  (0, t.jsx)("div", {
                    className: Vt().Answer,
                    children: (0, ve.xh)(
                      p.Localize("#AppPage_EarlyAccess_Quote"),
                      (0, t.jsx)(Ps.n, { text: e }),
                    ),
                  }),
                ],
              })
            : null;
        }
        function Im(s) {
          const { staleUpdate: e, bIsAppEditor: n } = s,
            { nMonthsAgo: r, bNoUpdatesEverPublished: a } = e;
          let o;
          if (!r && a) o = p.Localize("#AppPage_EarlyAccess_NoUpdates");
          else if (r && r > 24) {
            const c = Math.floor(r / 12);
            o = p.LocalizePlural("#AppPage_EarlyAccess_StaleYears", c);
          } else o = p.LocalizePlural("#AppPage_EarlyAccess_StaleMonths", r);
          return (0, t.jsxs)("div", {
            className: Vt().Stale,
            children: [
              o,
              " ",
              p.Localize("#AppPage_EarlyAccess_StaleWarning2"),
              n &&
                (0, t.jsx)("div", {
                  className: Vt().StaleDevs,
                  children: (0, ve.xh)(
                    p.Localize("#AppPage_EarlyAccess_StaleDevs"),
                    (0, t.jsx)(P.Ii, {
                      className: Vt().Link,
                      href: `${U.TS.PARTNER_BASE_URL}doc/store/earlyaccess#update_notice`,
                    }),
                  ),
                }),
            ],
          });
        }
        var Em = i(14844),
          Jr = i.n(Em);
        function Pm(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e });
          m.use(p.Ready());
          const r = n?.section;
          return r?.length
            ? (0, t.jsx)("div", {
                className: Jr().PageSections,
                children: r.map((a, o) => (0, t.jsx)(Mm, { section: a }, o)),
              })
            : null;
        }
        function Mm(s) {
          const { label: e, content_bbcode: n, banner: r } = s.section;
          return (0, t.jsxs)(Zr, {
            className: Jr().PageSection,
            "flow-children": "column",
            children: [
              e && (0, t.jsx)("h2", { className: Jr().Header, children: e }),
              n && (0, t.jsx)(Ps.n, { text: n }),
            ],
          });
        }
        var Tm = i(45200),
          Sm = i.n(Tm);
        function Lm(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e });
          return (
            m.use(p.Ready()),
            n?.legal_notice_bbcode
              ? (0, t.jsx)(Fa, {
                  className: Sm().LegalNotice,
                  children: (0, t.jsx)(Ps.n, {
                    text: n.legal_notice_bbcode,
                    bBypassLinkFilter: !0,
                  }),
                })
              : null
          );
        }
        function Om(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = n?.press_review;
          return r?.length
            ? (m.use(p.Ready()),
              (0, t.jsx)(de.az, {
                width: "616px",
                maxWidth: "100%",
                marginTop: "5",
                children: (0, t.jsxs)(Ut.YZ, {
                  children: [
                    (0, t.jsx)(wn.D, {
                      level: "2",
                      size: "2",
                      weight: "heavy",
                      contrast: "title",
                      children: p.Localize("#AppPage_PressReviews_Header"),
                    }),
                    r.map((a, o) => (0, t.jsx)(Am, { review: a }, o)),
                  ],
                }),
              }))
            : null;
        }
        function Am(s) {
          const { quote: e, score: n, site: r, url: a } = s.review;
          let o = e;
          e && r && (o = p.Localize("#AppPage_PressReviews_Quote", e));
          let c = r;
          r &&
            a &&
            (c = (0, t.jsx)(Ot.Y, { href: a, color: "blue-8", children: r }));
          let d = c;
          return (
            n && r
              ? (d = p.LocalizeReact("#AppPage_PressReviews_Attribution", n, c))
              : n && (d = n),
            (0, t.jsxs)(de.az, {
              marginBottom: "3",
              children: [
                o && (0, t.jsx)(b.EY, { as: "div", size: "2", children: o }),
                d && (0, t.jsx)(b.EY, { as: "div", size: "2", children: d }),
              ],
            })
          );
        }
        function Ra(s) {
          const { strHeading: e, strIntro: n, strBody: r } = s;
          return (0, t.jsx)(de.az, {
            maxWidth: "100%",
            marginTop: "5",
            children: (0, t.jsxs)(Zr, {
              children: [
                (0, t.jsx)(wn.D, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children: e,
                }),
                (0, t.jsx)(b.EY, {
                  as: "p",
                  size: "3",
                  marginTop: "3",
                  marginBottom: "2",
                  children: n,
                }),
                (0, t.jsx)(b.EY, {
                  as: "p",
                  size: "3",
                  whiteSpace: "pre-line",
                  style: { fontStyle: "italic" },
                  children: r,
                }),
              ],
            }),
          });
        }
        function zm(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = n?.content_survey_ai_notes;
          return r
            ? (m.use(p.Ready()),
              (0, t.jsx)(Ra, {
                strHeading: p.Localize("#AppPage_AIDisclosure_Header"),
                strIntro: p.Localize("#AppPage_AIDisclosure_Intro"),
                strBody: r,
              }))
            : null;
        }
        var dn = i(32093),
          Bn = i(18735);
        const Nm = null,
          Xr = [
            {
              descid: Bn.ED,
              parentDescID: 0,
              strNameToken: "#ContentDescriptor_GeneralMatureContent",
              strUserDescToken:
                "#ContentDescriptor_GeneralMatureContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Bn.M,
              parentDescID: Bn.ED,
              strNameToken: "#ContentDescriptor_FrequentViolenceOrGore",
              strUserDescToken:
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Bn.mx,
              parentDescID: Bn.ED,
              strNameToken: "#ContentDescriptor_NudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_NudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: Bn.T4,
              parentDescID: Bn.mx,
              strNameToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
            {
              descid: Bn.u7,
              parentDescID: Bn.T4,
              strNameToken: "#ContentDescriptor_AdultOnlySexualContent",
              strUserDescToken:
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
          ];
        function Xh() {
          return Xr;
        }
        function Hr(s) {
          return Xr.find((e) => e.descid === s);
        }
        function Hh(s) {
          return s.some((e) => Hr(e)?.bAdultsOnly);
        }
        function wa(s, e) {
          return !s.bAdultsOnly || !Nm.includes(e);
        }
        function qh(s, e) {
          return e.some((n) => {
            const r = Hr(n);
            return r && !wa(r, s);
          });
        }
        function Dm(s) {
          return Xr.filter((e) => !wa(e, s)).map((e) => e.descid);
        }
        function _h(s, e) {
          return [...new Set([...s, ...Dm(e)])].sort((r, a) => r - a);
        }
        function Fm(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.x2)({ appid: e }),
            a = n?.content_descriptorids;
          if (
            !n ||
            n.type == null ||
            !a?.length ||
            r === void 0 ||
            (0, dn.nA)(w.TS.EREALM)
          )
            return null;
          m.use(p.Ready()), m.use(Y.Z.Ready());
          let o = r?.content_survey_notes;
          if (!o) {
            const c = [];
            for (const d of a) {
              const u = Hr(d);
              u?.bCustomerFacing && c.push(Y.Z.Localize(u.strNameToken));
            }
            o = p.Localize(
              p.GetAppTypeLocKey("#AppPage_MatureContent_Descriptors", n.type),
              c.join(", "),
            );
          }
          return (0, t.jsx)(Ra, {
            strHeading: p.Localize("#AppPage_MatureContent_Header"),
            strIntro: p.Localize("#AppPage_MatureContent_Intro"),
            strBody: o,
          });
        }
        var Ua = i(62038),
          Wm = i(55367),
          Oe = i.n(Wm),
          Ca = i(83321),
          qr = i(7967),
          _r = i(32994),
          Rm = i(3471),
          Ee = i.n(Rm);
        function Ms(s) {
          return Ka(s)
            ? (0, L.we)("#Language_" + (0, Z.LgB)(s.elanguage))
            : Ga(s)
              ? (0, L.we)("#language_ext_" + (0, Z.c6v)(s.eadditionallanguage))
              : (0, L.we)("#language_selection_none");
        }
        function wm(s) {
          if (!s) return [];
          const e = [];
          for (let n = 0; n < s.length; n++)
            s[s.length - n - 1] == "1" && e.push(n);
          return e;
        }
        function Um(s) {
          if (!s) return [];
          const e = [],
            n = BigInt(s);
          for (let r = Z.Bhc; r < Z.bP9; r++)
            (n >> BigInt(r)) & BigInt(1) && e.push(r);
          return e;
        }
        function Ka(s) {
          return s.elanguage != null && s.elanguage != -1;
        }
        function Ga(s) {
          return s.eadditionallanguage != null && s.eadditionallanguage != -1;
        }
        function Cm(s, e) {
          let n;
          if (!s || !e?.length)
            return {
              rgSorted: [],
              nForceVisible: 0,
              firstPreferredLanguage: n,
            };
          const r = [],
            a = [
              s.preferences?.primary_language ?? Z.Bhc,
              ...Um(s.preferences?.secondary_languages),
            ].filter((g) => g != null),
            o = new Set();
          for (const g of a) {
            const f = e.findIndex((h) => h.elanguage == g);
            f != -1 &&
              (r.push({ ...e[f], preferred: !0 }),
              o.add(g),
              n || (n = { ...e[f], preferred: !0 }));
          }
          const c = wm(s.preferences?.additional_languages),
            d = new Set();
          for (const g of c) {
            const f = e.findIndex((h) => h.eadditionallanguage == g);
            f != -1 && (r.push({ ...e[f], preferred: !0 }), d.add(g));
          }
          const u = r.length;
          for (const g of e)
            if (Ka(g)) {
              if (o.has(g.elanguage)) continue;
              r.push({ ...g, preferred: !1 }), o.add(g.elanguage);
            } else if (Ga(g)) {
              if (d.has(g.elanguage)) continue;
              r.push({ ...g, preferred: !1 }), d.add(g.eadditionallanguage);
            }
          return { rgSorted: r, nForceVisible: u, firstPreferredLanguage: n };
        }
        function Km(s) {
          const { appid: e, initialOpen: n } = s,
            [r, a] = (0, m.useState)(n ?? !1),
            { data: o } = (0, E.Zx)({ appid: e }),
            { data: c } = (0, E.J$)({ appid: e }),
            { data: d } = (0, _r.lI)(),
            [u, g] = (0, m.useState)(!1),
            f = (0, Ca.LT)("md"),
            h = m.useId(),
            {
              rgSorted: x,
              nForceVisible: v,
              firstPreferredLanguage: I,
            } = m.useMemo(() => Cm(d, o ?? []), [d, o]);
          if (!x.length || !c || c.type == ne.uE.Ov) return null;
          const B = c.type == ne.uE.Wz || c.type == ne.uE.gQ,
            A = f ? Ee().CheckColumn : Ee().IconColumn,
            S = f ? Ym : km;
          return (0, t.jsxs)(P.fF, {
            className: Ee().Details,
            focusableIfEmpty: !0,
            open: r,
            onToggle: (D) => a(D.currentTarget.open),
            children: [
              (0, t.jsxs)(
                P.f_,
                {
                  className: Ee().Summary,
                  children: [
                    (0, t.jsx)("div", {
                      className: Ee().ImageContainer,
                      children: (0, t.jsx)(N.vCk, { className: Ee().Image }),
                    }),
                    (0, t.jsxs)("div", {
                      className: Ee().TextBox,
                      children: [
                        (0, t.jsx)(b.EY, {
                          color: "blue-8",
                          children: p.Localize(
                            "#languages_supported",
                            x.length,
                          ),
                        }),
                        !r && (0, t.jsx)(Gm, { language: I }),
                      ],
                    }),
                    r &&
                      (0, t.jsx)("div", {
                        className: Ee().Open,
                        children: "-",
                      }),
                    !r &&
                      (0, t.jsx)("div", {
                        className: Ee().Closed,
                        children: "+",
                      }),
                  ],
                },
                r ? "open" : "closed",
              ),
              (0, t.jsxs)(qr.Qg, {
                className: Ee().LanguageGrid,
                focusable: r,
                children: [
                  !f &&
                    (0, t.jsxs)("div", {
                      className: Ee().Legend,
                      children: [
                        (0, t.jsx)(b.EY, {
                          color: "greyneutral-11",
                          children: p.Localize("#language_header_subtitles"),
                        }),
                        (0, t.jsx)("div", {
                          className: Ee().LegendIconContainer,
                          children: (0, t.jsx)(N._b5, {
                            className: Ee().LegendIcon,
                          }),
                        }),
                        (0, t.jsx)(b.EY, {
                          color: "greyneutral-11",
                          children: p.Localize(
                            "#language_header_full_audio_short",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: Ee().LegendIconContainer,
                          children: (0, t.jsx)(N.fSs, {
                            className: Ee().LegendIcon,
                          }),
                        }),
                      ],
                    }),
                  (0, t.jsxs)("table", {
                    className: Ee().LanguageTable,
                    children: [
                      (0, t.jsxs)("colgroup", {
                        children: [
                          (0, t.jsx)("col", { className: Ee().LanguageName }),
                          (0, t.jsx)("col", { className: A }),
                          (0, t.jsx)("col", { className: A }),
                          f && (0, t.jsx)("col", { className: A }),
                        ],
                      }),
                      f &&
                        (0, t.jsx)("thead", {
                          children: (0, t.jsxs)("tr", {
                            children: [
                              (0, t.jsx)("th", {}),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(b.EY, {
                                  color: "greyneutral-11",
                                  children: p.Localize(
                                    B
                                      ? "#language_header_interface_video"
                                      : "#language_header_interface",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(b.EY, {
                                  color: "greyneutral-11",
                                  children: p.Localize(
                                    "#language_header_subtitles",
                                  ),
                                }),
                              }),
                              (0, t.jsx)("th", {
                                children: (0, t.jsx)(b.EY, {
                                  color: "greyneutral-11",
                                  children: p.Localize(
                                    "#language_header_full_audio",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                      (0, t.jsx)("tbody", {
                        children: x.map((D, C) =>
                          (0, t.jsx)(S, { language: D }, C),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Gm(s) {
          const { language: e } = s,
            { data: n } = (0, _r.lI)();
          if (!n) return null;
          if (!e || (!e.supported && !e.subtitles && !e.full_audio)) {
            let r = n.preferences?.primary_language ?? Z.Bhc;
            return (
              (r == Z.xPp || r >= Z.bP9) && (r = Z.Bhc),
              (0, t.jsx)(b.EY, {
                color: "blue-8",
                children: (0, L.we)("#Language_" + (0, Z.LgB)(r)),
              })
            );
          } else {
            let r;
            return (
              e.full_audio
                ? e.subtitles
                  ? (r = "#language_supported_subtitles_audio")
                  : (r = "#language_supported_audio")
                : e.subtitles
                  ? (r = "#language_supported_subtitles")
                  : (r = "#language_supported_interface"),
              (0, t.jsx)(b.EY, {
                color: "storegreen-7",
                children: p.Localize(r, Ms(e)),
              })
            );
          }
        }
        function Ym(s) {
          const { language: e } = s,
            n = (0, Ca.LT)("md");
          return !e.supported && !e.full_audio && !e.subtitles
            ? (0, t.jsxs)("tr", {
                className: (0, F.A)(e.preferred && Ee().Preferred),
                children: [
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)(b.EY, {
                      color: e.preferred ? "storegreen-7" : "blue-8",
                      children: Ms(e),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    colSpan: 3,
                    children: p.Localize("#language_not_supported"),
                  }),
                ],
              })
            : (0, t.jsxs)("tr", {
                className: (0, F.A)(e.preferred && Ee().Preferred),
                children: [
                  (0, t.jsx)("td", { className: Ee().Name, children: Ms(e) }),
                  (0, t.jsx)("td", {
                    children:
                      (e.supported &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                  (0, t.jsx)("td", {
                    children:
                      (e.subtitles &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                  (0, t.jsx)("td", {
                    children:
                      (e.full_audio &&
                        (0, t.jsx)("span", { children: "\u2714" })) ||
                      (0, t.jsx)(t.Fragment, {}),
                  }),
                ],
              });
        }
        function km(s) {
          const { language: e } = s;
          return !e.supported && !e.full_audio && !e.subtitles
            ? (0, t.jsx)("tr", {
                className: (0, F.A)(e.preferred && Ee().Preferred),
                children: (0, t.jsx)("td", {
                  colSpan: 3,
                  children: p.Localize("#language_not_supported_inline", Ms(e)),
                }),
              })
            : (0, t.jsxs)("tr", {
                className: (0, F.A)(e.preferred && Ee().Preferred),
                children: [
                  (0, t.jsx)("td", { className: Ee().Name, children: Ms(e) }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                      className: Ee().SmallIcon,
                      children:
                        (e.subtitles && (0, t.jsx)(N._b5, {})) ||
                        (0, t.jsx)(t.Fragment, {}),
                    }),
                  }),
                  (0, t.jsx)("td", {
                    children: (0, t.jsx)("div", {
                      className: Ee().SmallIcon,
                      children:
                        (e.full_audio && (0, t.jsx)(N.fSs, {})) ||
                        (0, t.jsx)(t.Fragment, {}),
                    }),
                  }),
                ],
              });
        }
        function tr(s) {
          return (0, t.jsx)(de.az, {
            marginBottom: "2",
            children: (0, t.jsx)(b.EY, {
              contrast: "title",
              size: "2",
              weight: "heavy",
              style: { letterSpacing: "0.5px" },
              children: s.text,
            }),
          });
        }
        function Vm(s) {
          const { appid: e, rgCategories: n, controllersUsed: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            { data: o } = (0, E._F)({ appid: e }),
            c = m.useMemo(() => {
              const x = new Set(a?.categories?.feature_categoryids ?? []);
              return (
                a?.categories?.supported_player_categoryids?.forEach((v) =>
                  x.add(v),
                ),
                a?.categories?.controller_categoryids?.forEach((v) => x.add(v)),
                x
              );
            }, [a]),
            { data: d } = (0, E.is)({ appid: e }),
            g =
              d?.purchase_options?.find(
                (x) =>
                  x.free_with_master_sub_appid &&
                  x.free_with_master_sub_appid != rs.sc,
              )?.free_with_master_sub_appid ?? rs.sc;
          if (
            (m.use(p.Ready()),
            m.use(Y.Z.Ready()),
            !a || a.type == null || a?.type == ne.uE.Hk || !o)
          )
            return null;
          const f = n.filter((x) => c.has(x.categoryid ?? 0));
          if (a.type == ne.uE.Ov && f.length == 0) return null;
          const { vetted: h } = o;
          return (0, t.jsxs)(Ut.YZ, {
            className: Oe().CategorySection,
            "flow-children": "column",
            children: [
              (0, t.jsx)(tr, { text: p.Localize("#AppPage_Features") }),
              (0, t.jsxs)(b.EY, {
                color: "blue-8",
                size: "2",
                children: [
                  f.length > 0 &&
                    (0, t.jsx)(t.Fragment, {
                      children: (0, t.jsx)(T.Z, {
                        className: Oe().CategoryLinks,
                        "flow-children": "column",
                        children: f.map((x, v) =>
                          (0, t.jsx)(Zm, { category: x }, v),
                        ),
                      }),
                    }),
                  !h && (0, t.jsx)(Xm, { appid: e }),
                  (0, t.jsx)(Ua.AccessibilityFeatureDisplay, {
                    features: (0, Ua.AccessibilityFeaturesFromCategories)(
                      a?.categories?.feature_categoryids ?? [],
                    ),
                  }),
                  (0, t.jsx)(Km, { appid: e }),
                  (0, t.jsx)(Ni, { ...Hm(e, c, r, o) }),
                  (0, t.jsxs)(b.EY, {
                    color: "gold-11",
                    children: [
                      (0, t.jsx)(_m, { extraDetails: o }),
                      (0, t.jsx)(ig, { extraDetails: o }),
                      (0, t.jsx)(tg, { extraDetails: o }),
                      (0, t.jsx)(Ya, { eulas: o.eula ?? [] }),
                      g != rs.sc && (0, t.jsx)(ng, { appid: g }),
                      (0, t.jsx)(rg, { extraDetails: o }),
                      (0, t.jsx)(ag, { extraDetails: o }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Qm(s) {
          switch (s.categoryid) {
            case Z.Wmb:
            case Z.q0f:
              return "category1=" + s.categoryid;
            case Z.PBc:
              return "vrsupport=401";
            case Z.zWR:
              return "vrsupport=402";
            default:
              return "category2=" + s.categoryid;
          }
        }
        function $m(s) {
          return (
            s == Z.Y5S ||
            s == Z.mv5 ||
            (s >= Z.KH9 && s <= Z.fui) ||
            (s >= Z.mWc && s <= Z.vVO)
          );
        }
        function Zm(s) {
          const { category: e } = s,
            n = (0, Qt.aL)(`${w.TS.STORE_BASE_URL}search/?${Qm(e)}`);
          return $m(e.categoryid)
            ? null
            : (0, t.jsxs)(P.Ii, {
                href: n,
                className: (0, F.A)(Oe().SearchLink),
                children: [
                  (0, t.jsx)("div", {
                    className: Oe().IconContainer,
                    children: (0, t.jsx)("img", {
                      className: Oe().Icon,
                      src: `${w.TS.IMG_URL}/${e.image_path}`,
                      alt: "",
                    }),
                  }),
                  (0, t.jsx)(b.EY, {
                    className: Oe().FeatureString,
                    marginLeft: "2",
                    children: p.Localize(e.display_name),
                  }),
                ],
              });
        }
        const Jm = 60;
        function Xm(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.by)({ appid: e });
          if (!n || w.TS.EREALM == dn.TU.k_ESteamRealmChina) return null;
          const a = r?.steam_release_date ?? 0,
            o = a != 0 && Date.now() / 1e3 - a < 86400 * Jm;
          let c, d;
          switch (n.type) {
            case ne.uE.HT:
              (c = o
                ? "#feature_learning_about_game"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_game");
              break;
            case ne.uE.Sv:
              (c = o
                ? "#feature_learning_about_software"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_software");
              break;
            case ne.uE._i:
              (c = o
                ? "#feature_learning_about_dlc"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_dlc");
              break;
            case ne.uE.RA:
              (c = o
                ? "#feature_learning_about_mod"
                : "#feature_profile_features_limited"),
                (d = "#feature_learning_about_desc_mod");
              break;
          }
          if (!c || !d) return null;
          const u = `${w.TS.IMG_URL}v6/ico/${o ? "ico_learning_about_game.png" : "ico_info.png"}`;
          return (0, t.jsxs)(T.Z, {
            className: Oe().LearningAbout,
            children: [
              (0, t.jsx)("div", {
                className: Oe().IconContainer,
                children: (0, t.jsx)("img", {
                  className: Oe().Icon,
                  src: u,
                  alt: "",
                }),
              }),
              (0, t.jsxs)(b.EY, {
                className: Oe().FeatureString,
                marginLeft: "2",
                children: [p.Localize(c), " "],
              }),
            ],
          });
        }
        function Hm(s, e, n, r) {
          const {
              controller_wizard_complete: a,
              no_mouse_keyboard_support: o,
            } = r,
            c =
              !!n.has_any_controller &&
              !n.has_ps4_controller &&
              !n.has_ps5_controller &&
              !n.has_xbox_controller;
          return {
            unAppID: s,
            bFullXboxControllerSupport: e.has(Z.mv5),
            bPartialXboxControllerSupport: e.has(Z.Y5S),
            bPS4ControllerSupport: e.has(Z.KH9),
            bPS4ControllerBTSupport: e.has(Z.wFw),
            bPS5ControllerSupport: e.has(Z.wFw),
            bPS5ControllerBTSupport: e.has(Z.lDg),
            bSteamInputAPISupport: e.has(Z.R2g),
            bNoKeyboardSupport: o,
            bGamepadPreferred: e.has(Z.fui),
            bControllerSupportWizardComplete: a,
            bHasXbox: !!n.has_xbox_controller,
            bHasPS4: !!n.has_ps4_controller,
            bHasPS5: !!n.has_ps5_controller,
            bHasOther: c,
          };
        }
        function qm(s) {
          const { activationLimit: e } = s;
          return e
            ? e == "Unlimited"
              ? (0, t.jsx)("div", {
                  className: Oe().ActivationLimit,
                  children: p.Localize(
                    "#feature_machine_activation_limit_unlimited",
                  ),
                })
              : (0, t.jsx)("div", {
                  className: Oe().ActivationLimit,
                  children: p.Localize("#feature_machine_activation_limit", e),
                })
            : null;
        }
        function _m(s) {
          const { extraDetails: e } = s,
            { drm_third_party_type: n, drm_activation_limit: r } = e;
          return n
            ? (0, t.jsx)("div", {
                className: Oe().ThirdPartyNotice,
                children: (0, t.jsxs)(b.EY, {
                  children: [
                    p.Localize("#feature_third_party_drm", n),
                    (0, t.jsx)(qm, { activationLimit: r }),
                  ],
                }),
              })
            : null;
        }
        function eg(s) {
          return s == "secureboot_tpm2"
            ? p.Localize(
                "#feature_anticheat_bootprotection_secureboottpm2_desc",
              )
            : "";
        }
        function tg(s) {
          const { extraDetails: e } = s,
            { anticheat: n } = e;
          if (!n) return null;
          const {
            kernel_mode: r,
            boot_protection: a,
            uninstall_completely: o,
            name: c,
            boot_protection_name: d,
          } = n;
          return (0, t.jsxs)("div", {
            className: (0, F.A)(Oe().ThirdPartyNotice, Oe().Anticheat),
            children: [
              (0, t.jsx)(b.EY, {
                children: p.Localize(
                  r
                    ? "#feature_includes_kernel_anti_cheat"
                    : "#feature_includes_non_kernel_anti_cheat",
                ),
              }),
              (0, t.jsxs)(b.EY, {
                color: "bronze-12",
                children: [
                  c,
                  r &&
                    !o &&
                    (0, t.jsx)(b.EY, {
                      children: p.Localize(
                        "#feature_anti_cheat_requires_manual_removal",
                      ),
                    }),
                ],
              }),
              a &&
                (0, t.jsxs)(b.EY, {
                  children: [
                    p.Localize("#feature_anticheat_bootprotection"),
                    (0, t.jsx)("div", {
                      className: Oe().BootProtectionName,
                      children: eg(d),
                    }),
                  ],
                }),
            ],
          });
        }
        function ng(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || !n.name
            ? null
            : (0, t.jsx)(sg, {
                appid: e,
                title: p.Localize("#feature_master_sub_app_eula", n.name),
              });
        }
        function sg(s) {
          const { appid: e, title: n } = s,
            { data: r } = (0, E._F)({ appid: e });
          return r ? (0, t.jsx)(Ya, { eulas: r.eula ?? [], title: n }) : null;
        }
        function Ya(s) {
          const { eulas: e, title: n } = s;
          if (!e?.length) return null;
          const r = n || p.Localize("#feature_third_party_eula");
          return (0, t.jsxs)("div", {
            className: (0, F.A)(Oe().ThirdPartyNotice, Oe().Eulas),
            children: [
              (0, t.jsxs)(b.EY, { children: [r, " "] }),
              e.map((a, o) =>
                (0, t.jsx)(
                  P.Ii,
                  {
                    className: Oe().Link,
                    href: a.url,
                    children: (0, t.jsx)(b.EY, {
                      color: "bronze-12",
                      children: a.name,
                    }),
                  },
                  o,
                ),
              ),
            ],
          });
        }
        function rg(s) {
          return s.extraDetails.refund_checks_ea_playtime
            ? (0, t.jsx)("div", {
                className: Oe().ThirdPartyNotice,
                children: (0, t.jsx)(b.EY, {
                  children: p.Localize("#feature_third_party_refund_playtime"),
                }),
              })
            : null;
        }
        function ig(s) {
          const { extraDetails: e } = s,
            {
              user_account_third_party: n,
              user_account_third_party_link_to_steam: r,
            } = e;
          return n
            ? (0, t.jsx)("div", {
                className: (0, F.A)(
                  Oe().ThirdPartyNotice,
                  Oe().ThirdPartyAccount,
                ),
                children: (0, t.jsxs)(b.EY, {
                  children: [
                    p.Localize("#feature_external_account_service", n),
                    !!r &&
                      (0, t.jsx)(t.Fragment, {
                        children: p.Localize(
                          "#feature_external_account_service_canlink",
                        ),
                      }),
                  ],
                }),
              })
            : null;
        }
        function ag(s) {
          const { extraDetails: e } = s,
            { ai_generation_service: n } = e;
          return !n || !n.name
            ? null
            : (0, t.jsx)("div", {
                className: Oe().ThirdPartyNotice,
                children: (0, t.jsx)(b.EY, {
                  children: (0, xa.i)(
                    p.Localize(
                      "#feature_ai_generated_content_external_account_service",
                      n.name,
                    ),
                    (0, t.jsx)(P.Ii, { href: n.url }),
                  ),
                }),
              });
        }
        var og = i(76985),
          $t = i.n(og),
          nr = i(48473);
        function lg(s) {
          const { appid: e, tracks: n, metadata: r } = s,
            { data: a } = (0, E.J$)({ appid: e }),
            [o, c] = m.useState(n[0]?.discNumber ?? 1),
            d = m.useMemo(() => {
              let u = new Map();
              for (const g of n ?? [])
                u.has(g.discNumber)
                  ? u.get(g.discNumber)?.tracks.push(g)
                  : u.set(g.discNumber, {
                      discNumber: g.discNumber,
                      tracks: [g],
                    });
              return u;
            }, [n]);
          return !a || a.type == null || !n?.length
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsxs)(Ut.YZ, {
                    className: $t().TrackListContainer,
                    "flow-children": "column",
                    children: [
                      d.size > 1 &&
                        (0, t.jsx)(T.Z, {
                          "flow-children": "row",
                          className: $t().DiscTabs,
                          children: Array.from(d.values()).map((u) =>
                            (0, t.jsx)(
                              Le.$,
                              {
                                variant:
                                  u.discNumber == o ? "inverted" : void 0,
                                onClick: () => c(u.discNumber),
                                children: p.Localize(
                                  "#music_disc_tab",
                                  u.discNumber,
                                ),
                              },
                              u.discNumber,
                            ),
                          ),
                        }),
                      (0, t.jsx)(qr.Qg, {
                        className: $t().TrackList,
                        children: (0, t.jsx)(cg, { tracks: d.get(o).tracks }),
                      }),
                    ],
                  }),
                  (0, t.jsx)(Ut.YZ, {
                    className: $t().MetadataContainer,
                    "flow-children": "column",
                    children: (0, t.jsx)(qr.Qg, {
                      className: $t().Metadata,
                      children: (0, t.jsx)(gg, { metadata: r }),
                    }),
                  }),
                ],
              });
        }
        function cg(s) {
          const { tracks: e } = s;
          return (0, t.jsx)(b.EY, {
            color: "greyneutral-12",
            children: (0, t.jsxs)("table", {
              className: $t().TrackTable,
              children: [
                (0, t.jsxs)("colgroup", {
                  children: [
                    (0, t.jsx)("col", { className: $t().Number }),
                    (0, t.jsx)("col", { className: $t().Name }),
                    (0, t.jsx)("col", { className: $t().Length }),
                  ],
                }),
                (0, t.jsx)("tbody", {
                  children: e.map((n, r) =>
                    (0, t.jsx)(dg, { track: n, odd: r % 2 != 0 }, r),
                  ),
                }),
              ],
            }),
          });
        }
        function dg(s) {
          const { track: e, odd: n } = s;
          return (0, t.jsxs)("tr", {
            className: (0, F.A)(n && $t().Odd),
            children: [
              (0, t.jsx)("td", { children: e.trackNumber }),
              (0, t.jsx)("td", { children: ug(e) }),
              (0, t.jsx)("td", { className: $t().Length, children: mg(e) }),
            ],
          });
        }
        function ug(s) {
          if (!s.originalName || !s.originalNameLanguage)
            return s.internationalName;
          const e = L.pf.GetELanguageFallbackOrder()[0] ?? Z.Bhc;
          return (0, Z.wwZ)(e) == s.originalNameLanguage
            ? (0, nr.EK)(s.originalName)
            : p.Localize(
                "#music_localized_track_name",
                (0, nr.EK)(s.internationalName),
                (0, nr.EK)(s.originalName),
              );
        }
        function mg(s) {
          return p.Localize(
            "#music_album_track_duration",
            s.lengthMinutes,
            s.lengthSeconds.toString().padStart(2, "0"),
          );
        }
        function gg(s) {
          const { metadata: e } = s;
          return e
            ? (0, t.jsxs)(O.s, {
                direction: "column",
                className: $t().Credits,
                marginTop: "4",
                children: [
                  (0, t.jsx)(b.EY, {
                    size: "5",
                    weight: "heavy",
                    children: p.Localize("#music_album_metadata"),
                  }),
                  (0, t.jsx)(qs.x, {
                    columns: "max-content max-content",
                    gapX: "2",
                    margin: "2",
                    children: e.map((n) =>
                      (0, t.jsx)(pg, { metadata: n }, n.field),
                    ),
                  }),
                ],
              })
            : null;
        }
        function ka(s, e) {
          return s.find((n) => n.language == e);
        }
        function pg(s) {
          const { metadata: e } = s;
          if (!e || !e.values?.length) return null;
          const { field: n, values: r } = e,
            a = "#music_album_metadata_key_" + n,
            o = L.pf.GetELanguageFallbackOrder()[0] ?? Z.Bhc,
            c = ka(r, o) || ka(r, Z.Bhc);
          return c
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(b.EY, {
                    className: $t().CreditName,
                    children: p.Localize(a),
                  }),
                  (0, t.jsx)(b.EY, { children: (0, nr.EK)(c.value) }),
                ],
              })
            : null;
        }
        var sr = i(84909),
          Hn = i(43462),
          fg = i(19218),
          ei = i.n(fg);
        const hg = new fs.wd("InterestButtons");
        function yg(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e });
          return !n || n.type == null
            ? null
            : (0, t.jsx)(T.Z, {
                className: ei().ButtonRow,
                "flow-children": "column",
                children: (0, t.jsxs)(O.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, t.jsx)(Bg, { appid: e }),
                    (0, t.jsxs)(O.s, {
                      direction: "row",
                      width: "100%",
                      gap: "1",
                      children: [
                        (0, t.jsx)(xg, { appid: e }),
                        (0, t.jsx)(vg, { appid: e }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function ti(s) {
          const { options: e, children: n } = s;
          return (0, t.jsxs)("span", {
            className: ei().WidestChildContainer,
            children: [
              e.map((r, a) =>
                (0, t.jsx)("span", { className: ei().Hidden, children: r }, a),
              ),
              (0, t.jsx)("span", { children: n }),
            ],
          });
        }
        function Va() {
          return (0, t.jsx)(de.az, {
            width: "16px",
            marginRight: "1",
            marginTop: "1",
            children: (0, t.jsx)(Fe.MGO, {}),
          });
        }
        function xg(s) {
          const { appid: e } = s,
            { data: n } = ys(e),
            r = wl(e);
          if (!n) return null;
          const { following: a = !1 } = n,
            o = (u) => {
              r.mutateAsync({ following: u, old_interest: n });
            },
            c = p.Localize("#button_follow"),
            d = (0, t.jsxs)(O.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, t.jsx)(Va, {}), p.Localize("#button_follow_undo")],
            });
          return (0, t.jsx)(de.az, {
            flexGrow: "1",
            children: (0, t.jsxs)(Le.$, {
              color: "greyneutral",
              onClick: () => o(!a),
              width: "100%",
              children: [
                (0, t.jsx)(de.az, {
                  children: a ? (0, t.jsx)(N.c9e, {}) : (0, t.jsx)(N.pPV, {}),
                }),
                (0, t.jsx)(ti, { options: [c, d], children: a ? d : c }),
              ],
            }),
          });
        }
        function vg(s) {
          const { appid: e } = s,
            { data: n } = ys(e),
            r = Rl(e),
            [a, o] = m.useState(!1);
          if (!n) return null;
          const { ignored: c = !1, ignored_reason: d } = n,
            u = !!c && (d ?? !1),
            g = (v, I) => {
              hg.Info("ignoring", v, I),
                r.mutateAsync({
                  ignored: v,
                  ignored_reason: I,
                  old_interest: n,
                });
            },
            f = (v) => {
              g(v !== !1, v === !1 ? void 0 : v), o(!1);
            },
            h = p.Localize("#button_ignore"),
            x = (0, t.jsxs)(O.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, t.jsx)(Va, {}), p.Localize("#button_ignore_undo")],
            });
          return (0, t.jsx)(de.az, {
            flexGrow: "1",
            children: (0, t.jsxs)(sr.AM.Root, {
              open: a,
              onOpenChange: o,
              children: [
                (0, t.jsx)(sr.AM.Anchor, {
                  children: (0, t.jsx)(Le.$, {
                    color: "greyneutral",
                    onClick: () => o(!a),
                    width: "100%",
                    children: (0, t.jsx)(ti, {
                      options: [h, x],
                      children: c ? x : h,
                    }),
                  }),
                }),
                (0, t.jsx)(sr.AM.Positioner, {
                  children: (0, t.jsx)(sr.AM.FocusManager, {
                    children: (0, t.jsx)(de.az, {
                      border: "1",
                      borderColor: "blue-7",
                      background: "greyneutral-4",
                      elevation: "1",
                      padding: "1",
                      children: (0, t.jsx)(ie.q, {
                        children: (0, t.jsxs)(O.s, {
                          direction: "column",
                          children: [
                            (0, t.jsx)(ni, {
                              type: Hn.RI.$m,
                              currentType: u,
                              select: f,
                            }),
                            (0, t.jsx)(ni, {
                              type: Hn.RI.yK,
                              currentType: u,
                              select: f,
                            }),
                            (0, t.jsx)(ni, {
                              type: !1,
                              currentType: u,
                              select: f,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function jg(s) {
          switch (s) {
            default:
            case !1:
              return "#ignore_reason_none_header";
            case Hn.RI.$m:
              return "#ignore_reason_generic_header";
            case Hn.RI.yK:
              return "#ignore_reason_otherstore_header";
          }
        }
        function bg(s) {
          switch (s) {
            default:
            case !1:
              return "#ignore_reason_none_desc";
            case Hn.RI.$m:
              return "#ignore_reason_generic_desc";
            case Hn.RI.yK:
              return "#ignore_reason_otherstore_desc";
          }
        }
        function ni(s) {
          const { type: e, currentType: n, select: r } = s;
          return (0, t.jsx)(T.Z, {
            focusable: !0,
            onActivate: () => r(e),
            autoFocus: n == Hn.RI.$m,
            children: (0, t.jsxs)(O.s, {
              direction: "row",
              padding: "2",
              maxWidth: "275px",
              gap: "2",
              children: [
                (0, t.jsx)(de.az, {
                  minWidth: "16px",
                  maxWidth: "16px",
                  children:
                    e === n &&
                    (0, t.jsx)(b.EY, { children: (0, t.jsx)(Fe.MGO, {}) }),
                }),
                (0, t.jsxs)(O.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, t.jsx)(b.EY, {
                      color: "greyneutral-12",
                      weight: "heavy",
                      children: p.Localize(jg(e)),
                    }),
                    (0, t.jsx)(b.EY, {
                      color: "greyneutral-11",
                      children: p.Localize(bg(e)),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Bg(s) {
          const { appid: e } = s,
            [n, r] = m.useState(!1),
            a = (0, rn.LH)(),
            o = (0, t.jsxs)(O.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, t.jsx)(de.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, t.jsx)(N.T4m, {}),
                }),
                p.Localize("#button_wishlist"),
              ],
            }),
            c = (0, t.jsxs)(O.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, t.jsx)(de.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, t.jsx)(N.qnF, {}),
                }),
                p.Localize("#button_wishlist_undo"),
              ],
            });
          return (0, t.jsx)(de.az, {
            children: (0, t.jsxs)(T.Z, {
              onSecondaryButton: () => r(!0),
              onSecondaryActionDescription: p.Localize(
                "#wishlist_manage_categories",
              ),
              children: [
                (0, t.jsx)(Yr, {
                  appid: e,
                  bAllowRemove: !0,
                  width: "100%",
                  children: (d) =>
                    (0, t.jsx)(ti, { options: [o, c], children: d ? c : o }),
                }),
                n &&
                  (0, t.jsx)(ia, {
                    appid: e,
                    steamid: a,
                    onClose: () => r(!1),
                  }),
              ],
            }),
          });
        }
        var Ig = i(60993),
          rr = i.n(Ig),
          ir = i(21079),
          si = i(58612),
          Eg = i(20125),
          Pg = i(9094),
          Qa = i(74679),
          Mg = i(20117);
        function Ts(s, e) {
          return (s || []).map((n) => ({
            accountid: Mg.b2.ToAccountID(n.steamid),
            nMinutesPlayedRecent: n.minutes_played || 0,
            nMinutesPlayedForever: n.minutes_played_forever || 0,
            bInGame: e,
          }));
        }
        function $a(s) {
          return Ts(s.in_wishlist, !1);
        }
        function Za(s, e) {
          const n = Ts(s.in_game, !0).concat(
            Ts(s.played_recently, !1),
            Ts(s.played_ever, !1),
            Ts(s.owns, !1),
          );
          return e ? n.filter((r) => r.nMinutesPlayedForever > 0) : n;
        }
        function Tg(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, si.Nd)(s);
          return m.useMemo(
            () =>
              !e || !n
                ? null
                : {
                    rgFriendsThatOwn: Za(n, !!e.is_free),
                    rgFriendsThatWant: $a(n),
                  },
            [e, n],
          );
        }
        var Sg = i(35675),
          Ss = i(60001);
        async function Lg(s, e) {
          const n = (0, Eg.Am)(U.TS.STORE_BASE_URL, e, U.iA.country_code),
            o = (await (await fetch(n)).json()).rgCurations[s] || {};
          return Object.entries(o).map((c) => ({
            clan_accountid: Number(c[0]),
            recommendation: c[1],
          }));
        }
        function Og(s) {
          return (0, an.I)({
            queryKey: ["UserCurations" + U.iA.accountid],
            queryFn: async () => Lg(s, U.iA.accountid),
            enabled: !!U.iA.accountid,
          });
        }
        function Ag(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, E.wl)({ appid: s }),
            { data: r } = (0, E.xz)({ appid: s }),
            { data: a } = (0, E.ik)({ appid: s }),
            { data: o } = (0, E.Zx)({ appid: s }),
            { data: c } = (0, ir.Dk)(s),
            { data: d } = (0, Qa.yt)(),
            { data: u } = (0, ir.zo)(s),
            { data: g } = (0, ir.Mu)(),
            { data: f } = (0, si.Nd)(s),
            { data: h } = (0, _r.lI)(),
            { data: x } = (0, Pg.nU)(U.iA.steamid),
            { data: v } = (0, Sg.Gw)(),
            { data: I } = Og(s);
          return m.useMemo(() => {
            if (
              !e ||
              !n ||
              !r ||
              !a ||
              !o ||
              !c ||
              !d ||
              !u ||
              !g ||
              !f ||
              !h ||
              !x ||
              !v ||
              !I
            )
              return null;
            const B = { appid: s };
            (B.nCurrentUserPlaytimeMins =
              f.your_info?.minutes_played_forever || 0),
              (B.bCurrentUserOwns = !!f.your_info?.owned),
              (B.bFromInteractiveRecommender = u.bRecommendedByIR),
              B.bCurrentUserOwns ||
                ((B.rgSimilarApps = u.arrSimilarPlayedApps || []),
                B.rgSimilarApps?.length == 0 &&
                  (B.rgMatchingTagsPlayed =
                    d.filter((G) => r?.find((Be) => Be.tagid == G.tagid)) ||
                    []));
            let A =
              (h.preferences?.review_score_preference == kn.Wf.Yy &&
                a.summary_unfiltered) ||
              a.summary_filtered;
            const S = A?.review_score || ne.j6.sZ;
            (B.bPositiveReviews = S > ne.j6.lo),
              (B.bNegativeReviews = S > ne.j6.sZ && S < ne.j6.hc),
              (B.eReviewScore = S),
              (B.strReviewScoreLabel = A?.review_score_label),
              e.type != ne.uE.Hk && e.type != ne.uE.Ov
                ? (B.bUserLanguageSupported = !!o.find(
                    (G) => G.elanguage == h.preferences?.primary_language,
                  ))
                : (B.bUserLanguageSupported = !0);
            const C = g.GetItems().findIndex((G) => G.GetAppID() == s);
            C != -1 && (C < 25 ? (B.bTopSeller = !0) : (B.bPopular = !0));
            const $ = !!x.items.find((G) => G.appid == s);
            return (
              (B.bWishlisted = $),
              (B.rgExcludedTags =
                h.tag_preferences?.tags_to_exclude?.filter((G) =>
                  r?.find((Be) => Be.tagid == G.tagid),
                ) || []),
              (B.rgPublishersFollowed = n.publishers?.filter(
                (G) =>
                  G.creator_clan_account_id &&
                  v?.get(G.creator_clan_account_id)?.is_creator,
              )),
              (B.rgDevelopersFollowed = n.developers?.filter(
                (G) =>
                  G.creator_clan_account_id &&
                  v?.get(G.creator_clan_account_id)?.is_creator,
              )),
              (B.rgFranchisesFollowed = n.franchises?.filter(
                (G) =>
                  G.creator_clan_account_id &&
                  v?.get(G.creator_clan_account_id)?.is_creator,
              )),
              (B.rgPublishersFollowed = B.rgPublishersFollowed?.filter(
                (G) =>
                  !B.rgDevelopersFollowed?.find(
                    (Be) =>
                      Be.creator_clan_account_id == G.creator_clan_account_id,
                  ),
              )),
              (B.rgCuratorsPositive = I.filter(
                (G) => G.recommendation == Ss.tV.$D,
              ).map((G) => G.clan_accountid)),
              (B.rgCuratorsNegative = I.filter(
                (G) => G.recommendation == Ss.tV.qP,
              ).map((G) => G.clan_accountid)),
              (B.rgFriendsRecommended = c.accountids_recommended || []),
              (B.rgFriendsDisrecommended = c.accountids_not_recommended || []),
              (B.rgFriendsWishlisted = $a(f).map((G) => G.accountid)),
              (B.rgFriendsOwned = Za(f, !!e.is_free).map((G) => G.accountid)),
              B
            );
          }, [s, n, I, v, f, c, g, e, r, d, a, h, u, o, x]);
        }
        function ar(s, e = !1) {
          return (s / 60).toFixed(e || s < 1200 ? 1 : 0);
        }
        var zg = i(13290),
          Un = i.n(zg),
          un = ((s) => (
            (s[(s.Info = 0)] = "Info"),
            (s[(s.Positive = 1)] = "Positive"),
            (s[(s.Negative = 2)] = "Negative"),
            s
          ))(un || {});
        function is(s) {
          const { type: e, description: n, children: r } = s;
          let a = (0, t.jsx)(Fe.$$j, {});
          return (
            e == 1
              ? (a = (0, t.jsx)(Fe.MGO, { className: Un().Positive }))
              : e == 2 && (a = (0, t.jsx)(N.tmm, { className: Un().Negative })),
            (0, t.jsxs)("div", {
              className: Un().Reason,
              children: [
                (0, t.jsxs)("div", {
                  className: Un().TopLine,
                  children: [
                    (0, t.jsx)("div", { className: Un().Icon, children: a }),
                    (0, t.jsx)("div", {
                      className: Un().Description,
                      children: n,
                    }),
                  ],
                }),
                r &&
                  (0, t.jsx)("div", {
                    className: Un().Additional,
                    children: r,
                  }),
                (0, t.jsx)("div", { className: Un().Divider }),
              ],
            })
          );
        }
        function ri(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(is, { type: 0, description: e, children: n });
        }
        function Ls(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(is, { type: 1, description: e, children: n });
        }
        function Ja(s) {
          const { description: e, children: n } = s;
          return (0, t.jsx)(is, { type: 2, description: e, children: n });
        }
        var Ng = i(2699),
          Dg = i.n(Ng);
        function Xa(s) {
          const { children: e } = s;
          return (0, t.jsx)(T.Z, { className: Dg().AvatarList, children: e });
        }
        var Os = i(85978),
          As = i(93191),
          ii = i(30986),
          Fg = i(77614),
          or = i.n(Fg);
        function Ha(s) {
          const e = (0, rn.LH)(),
            { data: n } = (0, Os.jn)(e);
          return (0, As.n)(n, e) + `/friendsthatplay/${s}`;
        }
        function qa(s) {
          const { accountid: e, reviewAppId: n, bShowName: r, friend: a } = s,
            o = (0, Os.jn)(e);
          if (!o.data || !o.data.public_data) return null;
          const c =
              n && o.data ? `${(0, As.n)(o.data)}/recommended/${n}` : void 0,
            d = o.data.public_data.persona_name;
          return (0, t.jsxs)(P.Ii, {
            className: or().FriendAvatarLink,
            href: c || (0, As.n)(o.data),
            "data-miniprofile": e,
            children: [
              (0, t.jsx)(ii.wm, { playerLinkDetails: o.data, alt: d }),
              r &&
                d &&
                (0, t.jsxs)("div", {
                  className: or().Details,
                  children: [
                    (0, t.jsx)("div", { className: or().Name, children: d }),
                    a && (0, t.jsx)(Wg, { friend: a }),
                  ],
                }),
            ],
          });
        }
        function Wg(s) {
          const { friend: e } = s;
          let n;
          return (
            e.bInGame
              ? (n = p.Localize("#AppPage_FriendOwnership_NowPlaying"))
              : e.nMinutesPlayedRecent > 0 &&
                (n = p.Localize(
                  "#AppPage_FriendOwnership_PlayedHours",
                  ar(e.nMinutesPlayedRecent, !0),
                )),
            n
              ? (0, t.jsx)("div", { className: or().Playtime, children: n })
              : null
          );
        }
        function Rg(s) {
          const { accountid: e, appid: n, bLinkToReview: r } = s;
          return (0, t.jsx)(qa, { accountid: e, reviewAppId: r ? n : void 0 });
        }
        function wg(s) {
          const { rgFriends: e, appid: n, bLinkToReview: r } = s;
          return (0, t.jsx)(Xa, {
            children: e.map((a) =>
              (0, t.jsx)(Rg, { accountid: a, appid: n, bLinkToReview: r }, a),
            ),
          });
        }
        function lr(s) {
          const {
              type: e,
              appid: n,
              strLocTag: r,
              rgFriends: a,
              nMax: o = 5,
              bLinkToReview: c,
            } = s,
            d = Ha(n);
          if (!a || a.length == 0) return null;
          let u = (0, ve.xh)(
            p.LocalizePlural(r, a.length),
            (0, t.jsx)(P.Ii, { href: d }),
          );
          return (0, t.jsx)(is, {
            type: e,
            description: u,
            children: (0, t.jsx)(wg, {
              rgFriends: a.slice(0, o),
              appid: n,
              bLinkToReview: c,
            }),
          });
        }
        var Ug = i(55483);
        function Cg(s) {
          const { url: e, avatarUrl: n, alt: r } = s;
          return (0, t.jsx)(Gn.he, {
            toolTipContent: r,
            children: (0, t.jsx)(P.Ii, {
              href: e,
              children: (0, t.jsx)(ii.Ul, { avatarURL: n, alt: r }),
            }),
          });
        }
        function Kg(s) {
          const { accountid: e, appid: n, fnURLGenerator: r } = s,
            a = (0, Ug.TB)(e);
          if (!a.data) return null;
          const o = r(a.data, n);
          return (0, t.jsx)(Cg, {
            url: o,
            avatarUrl: a.data.avatar_full_url,
            alt: a.data.group_name,
          });
        }
        function Gg(s) {
          const { rgCurators: e, appid: n, fnURLGenerator: r } = s;
          return (0, t.jsx)(Xa, {
            children: e.map((a) =>
              (0, t.jsx)(Kg, { accountid: a, appid: n, fnURLGenerator: r }, a),
            ),
          });
        }
        function ai(s) {
          const {
              type: e,
              fnURLGenerator: n,
              appid: r,
              strLocTag: a,
              rgCurators: o,
              nMax: c = 6,
            } = s,
            d = (0, Qt.aL)(
              U.TS.STORE_BASE_URL + `curators/mycuratorsreviewing/?appid=${r}`,
            );
          if (!o || o.length == 0) return null;
          let u = (0, ve.xh)(p.Localize(a), (0, t.jsx)(P.Ii, { href: d }));
          return (0, t.jsx)(is, {
            type: e,
            description: u,
            children: (0, t.jsx)(Gg, {
              rgCurators: o.slice(0, c),
              appid: r,
              fnURLGenerator: n,
            }),
          });
        }
        var Yg = i(57102),
          _a = i.n(Yg);
        function kg(s) {
          const { tag: e } = s;
          return (0, t.jsx)(P.Ii, {
            className: _a().Tag,
            href: `${U.TS.STORE_BASE_URL}tags/${(0, Z.wwZ)((0, Z.sfN)(U.TS.LANGUAGE))}/${e.name}`,
            children: e.name,
          });
        }
        function eo(s) {
          const { rgTags: e } = s;
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: _a().TagList,
                children: e.map((n) => (0, t.jsx)(kg, { tag: n }, n.tagid)),
              });
        }
        var Vg = i(54629),
          cr = i.n(Vg),
          Qg = i(80702);
        function $g(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E.lv)({ appid: e });
          if (!n || !r) return null;
          const a = (0, gs.b0)(r, "community_icon");
          return (0, t.jsx)(Qg.Q, {
            id: { appid: e },
            bPreventNavigation: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: { minWidth: "320px", zIndex: 5e3 },
            },
            children: (0, t.jsxs)(Wn.p, {
              className: cr().AppIconAndName,
              storeItem: n,
              children: [
                (0, t.jsx)("div", {
                  className: cr().AppIcon,
                  children: a && (0, t.jsx)("img", { src: a, alt: "" }),
                }),
                (0, t.jsx)("div", {
                  className: cr().AppName,
                  children: n.name,
                }),
              ],
            }),
          });
        }
        function Zg(s) {
          const { rgApps: e } = s;
          return e.length == 0
            ? null
            : (0, t.jsx)("div", {
                className: cr().AppList,
                children: e.map((n) =>
                  (0, t.jsx)($g, { appid: n.appid }, n.appid),
                ),
              });
        }
        function Jg(s) {
          const { appid: e, friendsRecommended: n, recommendedTags: r } = s,
            [a, o] = m.useState(!1),
            c = (0, ir.ws)(),
            d = (0, Qa.Fx)();
          return (
            m.useEffect(() => {
              c(e, n), d(r), o(!0);
            }, [e, n, r, c, d]),
            m.use(p.Ready()),
            m.use(Y.Z.Ready()),
            a
              ? (0, t.jsx)(m.Suspense, {
                  children: (0, t.jsx)(Hg, { appid: e }),
                })
              : null
          );
        }
        function to(s, e) {
          const { data: n } = (0, E.J$)({ appid: e.appid });
          return p.GetAppTypePluralLocKey(s, n?.type || ne.uE.HT);
        }
        function Xg(s, e) {
          const { data: n } = (0, E.J$)({ appid: e.appid });
          return p.GetAppTypeLocKey(s, n?.type || ne.uE.HT);
        }
        function oi(s, e) {
          const n = Xg(s, e);
          return p.Localize(n);
        }
        function Hg(s) {
          const { appid: e } = s,
            n = Ag(e);
          return n
            ? (0, t.jsxs)(Ut.YZ, {
                className: rr().RecommendationReasonsDisplay,
                navEntryPreferPosition: z.iU.PREFERRED_CHILD,
                children: [
                  (0, t.jsx)(qg, { reasons: n }),
                  (0, t.jsx)(_g, { reasons: n }),
                  (0, t.jsx)(np, { reasons: n }),
                  (0, t.jsx)(sp, { reasons: n }),
                  (0, t.jsx)(rp, { reasons: n }),
                  (0, t.jsx)(ap, { reasons: n }),
                  (0, t.jsx)(ip, { reasons: n }),
                  (0, t.jsx)(op, { reasons: n }),
                  (0, t.jsx)(lp, { reasons: n }),
                  (0, t.jsx)(mp, { reasons: n }),
                  (0, t.jsx)(gp, { reasons: n }),
                  (0, t.jsx)(pp, { reasons: n }),
                  (0, t.jsx)(fp, { reasons: n }),
                  (0, t.jsx)(hp, { reasons: n }),
                  (0, t.jsx)(yp, { reasons: n }),
                  (0, t.jsx)(xp, { reasons: n }),
                  (0, t.jsx)(vp, { reasons: n }),
                  (0, t.jsx)(jp, { reasons: n }),
                ],
              })
            : null;
        }
        function qg(s) {
          const { reasons: e } = s,
            n = oi("#AppPage_RecommendationReason_Header", e);
          return (0, t.jsx)(tr, { text: n });
        }
        function _g(s) {
          const { reasons: e } = s;
          if (e.nCurrentUserPlaytimeMins > 0) {
            const n = ar(e.nCurrentUserPlaytimeMins);
            return (0, t.jsx)(ri, {
              description: p.Localize(
                "#AppPage_RecommendationReason_Playtime",
                n,
              ),
            });
          } else if (e.bCurrentUserOwns)
            return (0, t.jsx)(ri, {
              description: p.Localize(
                "#AppPage_RecommendationReason_InLibrary",
              ),
            });
          return null;
        }
        function ep(s) {
          const { reasons: e } = s,
            n = oi("#AppPage_RecommendationReason_MatchingApps", e);
          return (0, t.jsx)(Ls, {
            description: n,
            children: (0, t.jsx)(Zg, { rgApps: e.rgSimilarApps }),
          });
        }
        function tp(s) {
          const { reasons: e } = s,
            n = oi("#AppPage_RecommendationReason_MatchingTags", e);
          return (0, t.jsx)(Ls, {
            description: n,
            children: (0, t.jsx)(eo, { rgTags: e.rgMatchingTagsPlayed }),
          });
        }
        function np(s) {
          const { reasons: e } = s;
          return e.rgSimilarApps && e.rgSimilarApps.length > 0
            ? (0, t.jsx)(ep, { reasons: e })
            : e.rgMatchingTagsPlayed && e.rgMatchingTagsPlayed.length > 0
              ? (0, t.jsx)(tp, { reasons: e })
              : null;
        }
        function sp(s) {
          const { reasons: e } = s;
          return e.bFromInteractiveRecommender
            ? (0, t.jsx)(Ls, {
                description: p.Localize(
                  "#AppPage_RecommendationReason_FromInteractiveRecommender",
                ),
              })
            : null;
        }
        function rp(s) {
          const { reasons: e } = s;
          return e.bPositiveReviews || e.bNegativeReviews
            ? (0, t.jsx)(is, {
                type: e.bPositiveReviews ? un.Positive : un.Negative,
                description: (0, ve.xh)(
                  p.Localize(
                    "#AppPage_RecommendationReason_UserReviews",
                    e.strReviewScoreLabel,
                  ),
                  (0, t.jsx)("span", {
                    className: (0, F.A)(
                      rr().ReviewScore,
                      e.bPositiveReviews ? rr().Positive : rr().Negative,
                    ),
                  }),
                ),
              })
            : null;
        }
        function ip(s) {
          const { reasons: e } = s;
          return !e.bTopSeller && !e.bPopular
            ? null
            : (0, t.jsx)(Ls, {
                description: p.Localize(
                  e.bTopSeller
                    ? "#AppPage_RecommendationReason_TopSeller"
                    : "#AppPage_RecommendationReason_Popular",
                ),
              });
        }
        function ap(s) {
          const { reasons: e } = s;
          return e.bUserLanguageSupported
            ? null
            : (0, t.jsx)(Ja, {
                description: (0, ve.xh)(
                  p.Localize(
                    "#AppPage_RecommendationReason_LanguageUnsupported",
                  ),
                  (0, t.jsx)(P.Ii, {
                    href: `${U.TS.STORE_BASE_URL}account/languagepreferences/`,
                  }),
                ),
              });
        }
        function op(s) {
          const { reasons: e } = s,
            n = (0, Qt.aL)(U.TS.STORE_BASE_URL + "wishlist");
          return e.bWishlisted
            ? (0, t.jsx)(Ls, {
                description: (0, ve.xh)(
                  p.Localize("#AppPage_RecommendationReason_Wishlisted"),
                  (0, t.jsx)(P.Ii, { href: n }),
                ),
              })
            : null;
        }
        function lp(s) {
          const { reasons: e } = s;
          return !e.rgExcludedTags || e.rgExcludedTags.length == 0
            ? null
            : (0, t.jsx)(Ja, {
                description: (0, ve.xh)(
                  p.Localize("#AppPage_RecommendationReason_ExcludedTags"),
                  (0, t.jsx)(P.Ii, {
                    href: `${U.TS.STORE_BASE_URL}account/preferences`,
                  }),
                ),
                children: (0, t.jsx)(eo, { rgTags: e.rgExcludedTags }),
              });
        }
        function cp(s, e) {
          return s.vanity_url
            ? `${U.TS.STORE_BASE_URL}${e}/${s.vanity_url}`
            : `${U.TS.STORE_BASE_URL}curator/${s.clanAccountID}`;
        }
        function dp(s, e, n) {
          return `${cp(s, e)}?appid=${n}`;
        }
        function up(s) {
          return s.vanity_url
            ? `${U.TS.COMMUNITY_BASE_URL}groups/${s.vanity_url}`
            : `${U.TS.COMMUNITY_BASE_URL}gid/${s.clanSteamID?.ConvertTo64BitString()}`;
        }
        function no(s, e) {
          return `${up(s)}/curation/app/${e}`;
        }
        function li(s) {
          const { reasons: e, type: n, strLocTag: r, rgCreators: a } = s;
          if (!a || a.length == 0) return null;
          const o = (c, d) => dp(c, n, d);
          return (0, t.jsx)(ai, {
            appid: e.appid,
            type: un.Positive,
            fnURLGenerator: o,
            strLocTag: r,
            rgCurators: a.map((c) => c.creator_clan_account_id),
          });
        }
        function mp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(li, {
            reasons: e,
            type: "developer",
            strLocTag: "#AppPage_RecommendationReason_FollowedDeveloper",
            rgCreators: e?.rgDevelopersFollowed,
          });
        }
        function gp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(li, {
            reasons: e,
            type: "publisher",
            strLocTag: "#AppPage_RecommendationReason_FollowedPublisher",
            rgCreators: e?.rgPublishersFollowed,
          });
        }
        function pp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(li, {
            reasons: e,
            type: "franchise",
            strLocTag: "#AppPage_RecommendationReason_FollowedFranchise",
            rgCreators: e?.rgFranchisesFollowed,
          });
        }
        function fp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ai, {
            appid: e.appid,
            type: un.Positive,
            fnURLGenerator: no,
            strLocTag: "#AppPage_RecommendationReason_CuratorRecommended",
            rgCurators: e.rgCuratorsPositive,
          });
        }
        function hp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(ai, {
            appid: e.appid,
            type: un.Negative,
            fnURLGenerator: no,
            strLocTag: "#AppPage_RecommendationReason_CuratorDisrecommended",
            rgCurators: e.rgCuratorsNegative,
          });
        }
        function yp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(lr, {
            appid: e.appid,
            type: un.Positive,
            strLocTag: "#AppPage_RecommendationReason_FriendsRecommended",
            rgFriends: e.rgFriendsRecommended,
            bLinkToReview: !0,
          });
        }
        function xp(s) {
          const { reasons: e } = s;
          return (0, t.jsx)(lr, {
            appid: e.appid,
            type: un.Negative,
            strLocTag: "#AppPage_RecommendationReason_FriendsDisrecommended",
            rgFriends: e.rgFriendsDisrecommended,
            bLinkToReview: !0,
          });
        }
        function vp(s) {
          const { reasons: e } = s,
            n = to("#AppPage_RecommendationReason_FriendsWishlisted", e);
          return (0, t.jsx)(lr, {
            appid: e.appid,
            type: un.Info,
            strLocTag: n,
            rgFriends: e.rgFriendsWishlisted,
          });
        }
        function jp(s) {
          const { reasons: e } = s,
            n = to("#AppPage_RecommendationReason_FriendsOwned", e);
          return (0, t.jsx)(lr, {
            appid: e.appid,
            type: un.Info,
            strLocTag: n,
            rgFriends: e.rgFriendsOwned,
          });
        }
        var bp = i(16836),
          ci = i.n(bp);
        const Bp = 6,
          Ip = 2;
        function Ep(s) {
          const { appid: e, bCanShowOwners: n } = s,
            r = Tg(e),
            { data: a } = (0, E.J$)({ appid: e }),
            o = r?.rgFriendsThatWant || [],
            c = n ? r?.rgFriendsThatOwn || [] : [];
          if (o.length == 0 && c.length == 0) return null;
          m.use(p.Ready());
          const d = a?.type || ne.uE.HT;
          return (0, t.jsxs)(Ut.YZ, {
            className: ci().FriendOwnership,
            "flow-children": "column",
            children: [
              o.length > 0 &&
                (0, t.jsx)(so, {
                  appid: e,
                  strLocTag: p.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsWishlisted",
                    d,
                  ),
                  rgFriends: o,
                  bShowNames: o.length <= Ip,
                  bShowPlaytime: !1,
                }),
              c.length > 0 &&
                (0, t.jsx)(so, {
                  appid: e,
                  strLocTag: p.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsOwned",
                    d,
                  ),
                  rgFriends: c,
                  bShowNames: !0,
                  bShowPlaytime: !0,
                }),
            ],
          });
        }
        function so(s) {
          const {
              appid: e,
              strLocTag: n,
              rgFriends: r,
              bShowNames: a,
              bShowPlaytime: o,
            } = s,
            c = Ha(e),
            d = (0, ve.xh)(
              p.LocalizePlural(n, r.length),
              (0, t.jsx)(P.Ii, { href: c }),
            );
          return (0, t.jsx)(ri, {
            description: d,
            children: (0, t.jsx)(T.Z, {
              className: (0, F.A)(ci().FriendList, a && ci().WithNames),
              "flow-children": a ? "grid" : "row",
              children: r
                .slice(0, Bp)
                .map((u) =>
                  (0, t.jsx)(
                    qa,
                    {
                      accountid: u.accountid,
                      bShowName: a,
                      friend: o ? u : void 0,
                    },
                    u.accountid,
                  ),
                ),
            }),
          });
        }
        var Pp = i(35413),
          Mp = i(78747),
          At = i.n(Mp);
        function dr(s) {
          if (!s || !/^https?:/.test(s)) return;
          if (!(0, Qs.p)(s)) return s;
          const e = (0, Qs.E)(s);
          return w.TS.IN_CLIENT ? "steam://openurl_external/" + e : e;
        }
        function Tp(s) {
          const { curator: e, recommendation: n } = s,
            r = oo(n.link_url),
            a = dr(n.link_url),
            o = !!r?.iframe || !!r?.image;
          return (0, t.jsxs)("div", {
            className: At().Container,
            children: [
              (0, t.jsx)("h2", {
                children: p.Localize("#AppPage_Curator_Title"),
              }),
              (0, t.jsxs)(Ut.YZ, {
                "flow-children": "row",
                className: At().Review,
                children: [
                  o &&
                    (0, t.jsxs)(O.s, {
                      direction: "column",
                      className: At().Video,
                      gap: "1",
                      align: "center",
                      children: [
                        r.iframe &&
                          (0, t.jsx)("iframe", {
                            src: r.iframe,
                            frameBorder: "0",
                            allowFullScreen: !0,
                            title: "referring_curator_video_embed",
                          }),
                        r.image &&
                          (0, t.jsxs)(P.Ii, {
                            href: a,
                            className: At().VideoThumbnail,
                            children: [
                              (0, t.jsx)("img", {
                                src: r.image,
                                alt: p.Localize(
                                  "#AppPage_Curator_VideoThumbnail",
                                ),
                              }),
                              (0, t.jsx)("div", {
                                className: At().PlayOverlay,
                                children: (0, t.jsx)(Fe.jGG, {}),
                              }),
                            ],
                          }),
                        (0, t.jsx)(ro, { ...s }),
                      ],
                    }),
                  (0, t.jsx)("div", {
                    className: (0, F.A)(At().DetailRight, !o && At().NoVideo),
                    children: (0, t.jsx)("div", {
                      className: At().Blurb,
                      children: (0, t.jsxs)(O.s, {
                        direction: "column",
                        gap: "1",
                        children: [
                          (0, t.jsxs)(O.s, {
                            direction: "row",
                            gap: "1",
                            children: [
                              (0, t.jsx)("div", {
                                className: At().Avatar,
                                children: (0, t.jsx)("img", {
                                  src: (0, Pp.t)(e.avatar_sha, "full"),
                                  alt: "",
                                }),
                              }),
                              (0, t.jsxs)(O.s, {
                                direction: "column",
                                flexGrow: "1",
                                children: [
                                  (0, t.jsx)(Sp, {
                                    state: n.recommendation_state,
                                  }),
                                  (0, t.jsx)(b.EY, {
                                    size: "2",
                                    color: "greyneutral-11",
                                    children: (0, t.jsxs)(O.s, {
                                      direction: "row",
                                      gap: "1",
                                      children: [
                                        (0, ve.xh)(
                                          p.Localize(
                                            "#AppPage_Curator_By",
                                            e.name,
                                          ),
                                          (0, t.jsx)(P.Ii, { href: e.link }),
                                        ),
                                        (0, Lt.$z)(n.time_recommended, {
                                          month: "long",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)(O.s, {
                                direction: "row",
                                children: [
                                  !!n.received_for_free &&
                                    (0, t.jsx)(io, {
                                      strToolTip: p.Localize(
                                        "#AppPage_Curator_ReceivedForFree",
                                      ),
                                      strIcon: "icon_free.png",
                                    }),
                                  !!n.received_compensation &&
                                    (0, t.jsx)(io, {
                                      strToolTip: p.Localize(
                                        "#AppPage_Curator_ReceivedCompensation",
                                      ),
                                      strIcon: "icon_compensation.png",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)(Lp, { strBlurb: n.blurb }),
                          !o &&
                            (0, t.jsx)(O.s, {
                              direction: "row",
                              children: (0, t.jsx)(ro, { ...s }),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function ro(s) {
          const { recommendation: e, curator_preferences: n } = s,
            r = oo(e.link_url),
            a = dr(e.link_url),
            o = dr(n?.discussion_url),
            c = !!r?.iframe || !!r?.image;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              a &&
                (0, t.jsx)(ao, {
                  strURL: a,
                  bPlayIcon: c,
                  strText: p.Localize(
                    c
                      ? "#AppPage_Curator_WatchFullReview"
                      : "#AppPage_Curator_ReadFullReview",
                  ),
                }),
              o &&
                (0, t.jsx)(ao, {
                  strURL: o,
                  strText: p.Localize("#AppPage_Curator_Discuss"),
                }),
            ],
          });
        }
        function io(s) {
          const { strToolTip: e, strIcon: n } = s;
          return (0, t.jsx)(Gn.he, {
            toolTipContent: e,
            children: (0, t.jsx)("div", {
              className: At().CuratorReceived,
              children: (0, t.jsx)("img", {
                src: `${w.TS.IMG_URL}/curators/${n}`,
                alt: "",
              }),
            }),
          });
        }
        function Sp(s) {
          switch (s.state) {
            case Ss.tV.$D:
              return (0, t.jsx)("span", {
                className: (0, F.A)(At().ReviewTitle, At().Recommended),
                children: p.Localize("#AppPage_Curator_Recommended"),
              });
            case Ss.tV.qP:
              return (0, t.jsx)("span", {
                className: (0, F.A)(At().ReviewTitle, At().NotRecommended),
                children: p.Localize("#AppPage_Curator_NotRecommended"),
              });
            case Ss.tV.y8:
              return (0, t.jsx)("span", {
                className: (0, F.A)(At().ReviewTitle, At().Informational),
                children: p.Localize("#AppPage_Curator_Informational"),
              });
            default:
              return null;
          }
        }
        function Lp(s) {
          const e = (s.strBlurb ?? "").split(`
`);
          return e.length == 0
            ? null
            : ((e[0] = p.Localize("#AppPage_Curator_QuoteLeft") + e[0].trim()),
              (e[e.length - 1] =
                e[e.length - 1].trim() +
                p.Localize("#AppPage_Curator_QuoteRight")),
              (0, t.jsx)(b.EY, {
                className: At().BlurbText,
                children: e.map((n, r) =>
                  (0, t.jsx)("div", { children: n }, r),
                ),
              }));
        }
        function ao(s) {
          const { strURL: e, strText: n, bPlayIcon: r } = s;
          return (0, t.jsx)(Gn.he, {
            toolTipContent: e,
            children: (0, t.jsx)(P.Ii, {
              className: (0, F.A)(
                "btnv6_blue_hoverfade",
                "btn_small_thin",
                At().ActionButton,
              ),
              href: e,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, t.jsxs)("span", {
                children: [
                  r &&
                    (0, t.jsx)("span", {
                      className: At().PlayIcon,
                      children: (0, t.jsx)(Fe.jGG, {}),
                    }),
                  n,
                ],
              }),
            }),
          });
        }
        function oo(s) {
          if (!s) return;
          const e = [
            [
              /(?:youtube\.com|youtu\.be)\/(?:watch)?(?:\?v=)?([a-zA-Z0-9_-]+)/,
              { image: "https://img.youtube.com/vi/%s/mqdefault.jpg" },
            ],
            [
              /nicovideo\.jp\/watch\/([sm0-9]+)/,
              { iframe: "https://embed.nicovideo.jp/watch/%s" },
            ],
            [
              /escapistmagazine\.com\/videos\/view\/.+\/([0-9]+)/,
              { iframe: "https://www.escapistmagazine.com/videos/embed/%s" },
            ],
            [
              /youku\.com\/v_show\/id_([0-9A-z=]+)/,
              { iframe: "https://player.youku.com/embed/%s" },
            ],
            [
              /bilibili\.com\/video\/av([0-9]+)/,
              {
                iframe:
                  "https://www.bilibili.com/blackboard/player.html?aid=%s",
              },
            ],
          ];
          for (const [n, r] of e) {
            const a = s.match(n);
            if (a)
              return {
                iframe: r.iframe?.replace("%s", a[1]),
                image: r.image?.replace("%s", a[1]),
              };
          }
        }
        const fe = {};
        (fe.arabic = () => i.e(3143).then(i.t.bind(i, 3143, 19))),
          (fe.brazilian = () => i.e(38043).then(i.t.bind(i, 38043, 19))),
          (fe.bulgarian = () => i.e(60308).then(i.t.bind(i, 60308, 19))),
          (fe.czech = () => i.e(99922).then(i.t.bind(i, 99922, 19))),
          (fe.danish = () => i.e(32134).then(i.t.bind(i, 32134, 19))),
          (fe.dutch = () => i.e(47899).then(i.t.bind(i, 47899, 19))),
          (fe.english = () => i.e(31513).then(i.t.bind(i, 31513, 19))),
          (fe.finnish = () => i.e(86910).then(i.t.bind(i, 86910, 19))),
          (fe.french = () => i.e(67007).then(i.t.bind(i, 67007, 19))),
          (fe.german = () => i.e(84597).then(i.t.bind(i, 84597, 19))),
          (fe.greek = () => i.e(79169).then(i.t.bind(i, 79169, 19))),
          (fe.hungarian = () => i.e(28968).then(i.t.bind(i, 28968, 19))),
          (fe.indonesian = () => i.e(17427).then(i.t.bind(i, 17427, 19))),
          (fe.italian = () => i.e(65521).then(i.t.bind(i, 65521, 19))),
          (fe.japanese = () => i.e(49560).then(i.t.bind(i, 49560, 19))),
          (fe.koreana = () => i.e(68858).then(i.t.bind(i, 68858, 19))),
          (fe.latam = () => i.e(73682).then(i.t.bind(i, 73682, 19))),
          (fe.malay = () => i.e(20073).then(i.t.bind(i, 20073, 19))),
          (fe.norwegian = () => i.e(93341).then(i.t.bind(i, 93341, 19))),
          (fe.polish = () => i.e(48634).then(i.t.bind(i, 48634, 19))),
          (fe.portuguese = () => i.e(64794).then(i.t.bind(i, 64794, 19))),
          (fe.romanian = () => i.e(3380).then(i.t.bind(i, 3380, 19))),
          (fe.russian = () => i.e(37940).then(i.t.bind(i, 37940, 19))),
          (fe.sc_schinese = () => i.e(72910).then(i.t.bind(i, 72910, 19))),
          (fe.schinese = () => i.e(3431).then(i.t.bind(i, 3431, 19))),
          (fe.spanish = () => i.e(12737).then(i.t.bind(i, 12737, 19))),
          (fe.swedish = () => i.e(83504).then(i.t.bind(i, 61123, 19))),
          (fe.tchinese = () => i.e(25804).then(i.t.bind(i, 25804, 19))),
          (fe.thai = () => i.e(25401).then(i.t.bind(i, 25401, 19))),
          (fe.turkish = () => i.e(2593).then(i.t.bind(i, 2593, 19))),
          (fe.ukrainian = () => i.e(94219).then(i.t.bind(i, 94219, 19))),
          (fe.vietnamese = () => i.e(95784).then(i.t.bind(i, 95784, 19)));
        async function Op(s) {
          if (fe[s]) return fe[s]();
        }
        const Nt = (0, xr.l)(Op);
        var Ap = i(66575),
          Zt = i.n(Ap);
        const ey = 0,
          lo = 1,
          co = 2,
          zp = 3,
          uo = 4;
        var M = i(80613),
          y = i.n(M),
          l = i(75245);
        const ty = 0,
          Np = 1,
          Dp = 2,
          Fp = 3,
          Wp = 4,
          Rp = 5,
          wp = 6,
          Up = 7,
          Cp = 8,
          Kp = 9,
          Gp = 10,
          Yp = 11,
          kp = 12,
          Vp = 13,
          Qp = 14,
          $p = 15,
          Zp = 16,
          Jp = 17,
          Xp = 18,
          Hp = 19,
          ny = 0,
          qp = 1,
          _p = 2,
          e0 = 3,
          t0 = 4,
          n0 = 5,
          s0 = 6,
          r0 = 7,
          i0 = 8,
          a0 = 9;
        function sy(s) {
          return "unknown ERatingAgency ( " + s + " )";
        }
        function ry(s) {
          return "unknown EAppRatingSource ( " + s + " )";
        }
        function iy(s) {
          return "unknown ERatingDescriptorImage ( " + s + " )";
        }
        class We extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.descriptors || l.Sg(We.M()),
              M.Message.initialize(this, e, 0, -1, [1, 2, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    descriptors: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    official_id: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    esrb_online_music_not_rated: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    esrb_online_interactions_not_rated: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    descriptor_images: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = l.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(We.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new We();
            return We.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(We.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(We.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRatingAuxData";
          }
        }
        class Re extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.rating_agency || l.Sg(Re.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    rating: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    source: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    banned: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                    required_age: {
                      n: 5,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    use_age_gate: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    aux_data: { n: 7, c: We },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = l.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Re.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Re();
            return Re.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Re.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Re.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AppRating";
          }
        }
        function ay(s) {
          return "unknown EContentSurveyMatureTag ( " + s + " )";
        }
        class Ae extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.elanguage || l.Sg(Ae.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    elanguage: {
                      n: 1,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    text: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = l.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ae.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ae();
            return Ae.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ae.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ae.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyLocalizedText";
          }
        }
        class ze extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.customer_notes || l.Sg(ze.M()),
              M.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    customer_notes: { n: 1, c: Ae, r: !0, q: !0 },
                    customer_notes_ai: { n: 2, c: Ae, r: !0, q: !0 },
                    mature_tags: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                    has_mature_content: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    ai_external_service_name: {
                      n: 5,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    ai_external_service_url: {
                      n: 6,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = l.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ze.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ze();
            return ze.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ze.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ze.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyDisclosure";
          }
        }
        const oy = 1,
          ly = 2,
          cy = 3,
          dy = 4,
          uy = 5,
          my = 6,
          gy = 7,
          py = 8,
          fy = 9,
          hy = 10,
          yy = 11,
          xy = 12,
          vy = 13,
          jy = 14,
          by = 15,
          By = 16,
          Iy = 17,
          Ey = 18,
          Py = 19,
          My = 20,
          Ty = 21,
          Sy = 22,
          Ly = 23,
          Oy = 24,
          Ay = 25,
          zy = 26,
          Ny = 27,
          Dy = 28,
          Fy = 29,
          Wy = 30,
          Ry = 31,
          wy = 32,
          Uy = 33,
          Cy = 34,
          Ky = 35,
          Gy = 36,
          Yy = 37,
          ky = 38,
          Vy = 39,
          Qy = 40,
          $y = 41,
          Zy = 42,
          Jy = 43,
          Xy = 44,
          Hy = 45,
          qy = 46,
          _y = 47,
          ex = 48,
          tx = 49,
          nx = 50,
          o0 = 60,
          l0 = 61,
          c0 = 62,
          d0 = 63,
          u0 = 64,
          sx = 80,
          rx = 81,
          ix = 82,
          ax = 83,
          ox = 90,
          lx = 91,
          cx = 95;
        function dx(s) {
          return "unknown EPriceConversionMethod ( " + s + " )";
        }
        function ux(s) {
          return "unknown EProtoBillingType ( " + s + " )";
        }
        function mx(s) {
          return "unknown EProtoActivationCode ( " + s + " )";
        }
        function gx(s) {
          return "unknown EProtoProposalState ( " + s + " )";
        }
        function px(s) {
          return "unknown EContentDescriptorSurveyState ( " + s + " )";
        }
        function fx(s) {
          return "unknown ERatingQuestionaireCategory ( " + s + " )";
        }
        function hx(s) {
          return "unknown EGeneratedGameRatingVersion ( " + s + " )";
        }
        function yx(s) {
          return "unknown EGameContentCategory ( " + s + " )";
        }
        function xx(s) {
          return "unknown EContentSurveySection ( " + s + " )";
        }
        function vx(s) {
          return "unknown EContentSurveySource ( " + s + " )";
        }
        function jx(s) {
          return "unknown EContentSurveyChildAppType ( " + s + " )";
        }
        function bx(s) {
          return "unknown EContentSurveyInheritAction ( " + s + " )";
        }
        function Bx(s) {
          return "unknown EGeneratedAIContentType ( " + s + " )";
        }
        class Mt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mt.prototype.method || l.Sg(Mt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    method: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = l.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Mt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Mt();
            return Mt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Mt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Mt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductInfo_ForceEmitPriceConversion";
          }
        }
        class we extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.survey_section || l.Sg(we.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    survey_section: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    time_reviewed: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    accountid_reviewer: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = l.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(we.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new we();
            return we.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(we.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(we.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "SurveySectionReviewed";
          }
        }
        class Ue extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.content_category || l.Sg(Ue.M()),
              M.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    content_category: {
                      n: 1,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    questionaire_categories: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = l.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ue.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ue();
            return Ue.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ue.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ue.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameContent";
          }
        }
        class Ce extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.rating_agency || l.Sg(Ce.M()),
              M.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    rating_agency: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    rating: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    required_age: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    descriptors: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: l.qM.readString,
                      bw: l.gp.writeRepeatedString,
                    },
                    banned: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = l.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ce.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ce();
            return Ce.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ce.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ce.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRating";
          }
        }
        class Ke extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.timestamp_generated || l.Sg(Ke.M()),
              M.Message.initialize(this, e, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    timestamp_generated: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    generated_version: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    ratings: { n: 3, c: Ce, r: !0, q: !0 },
                    content_categories: { n: 4, c: Ue, r: !0, q: !0 },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = l.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ke.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ke();
            return Ke.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ke.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ke.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GeneratedGameRatings";
          }
        }
        class Ge extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.desc_code_generated || l.Sg(Ge.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: {
                    desc_code_generated: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_copyright_infringement_guarantee: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_content_moderation_strategy: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    external_service_name: {
                      n: 4,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    external_service_url: {
                      n: 5,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_external_service_how_content_available_to_players: {
                      n: 6,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    desc_external_service_monetization: {
                      n: 7,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = l.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ge.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ge();
            return Ge.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ge.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ge.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "AIContentSurvey";
          }
        }
        class Ye extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.disclosure || l.Sg(Ye.M()),
              M.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    disclosure: { n: 1, c: ze },
                    interactive_elements: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = l.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ye.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ye();
            return Ye.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ye.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ye.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentSurveyAuxData";
          }
        }
        class ke extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.id || l.Sg(ke.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    id: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = l.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ke.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ke();
            return ke.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ke.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ke.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptor";
          }
        }
        class Ve extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.surveyid || l.Sg(Ve.M()),
              M.Message.initialize(this, e, 0, -1, [3, 11, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    state: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    descriptors: { n: 3, c: ke, r: !0, q: !0 },
                    timestamp_started: {
                      n: 4,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    timestamp_updated: {
                      n: 5,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    timestamp_finished: {
                      n: 6,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    accountid: {
                      n: 7,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    developer_notes: {
                      n: 8,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    keyvalues: {
                      n: 9,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    ratings: { n: 10, c: Ke },
                    categories: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: l.qM.readEnum,
                      pbr: l.qM.readPackedEnum,
                      bw: l.gp.writeRepeatedEnum,
                    },
                    ai_survey: { n: 12, c: Ge },
                    internal_notes: {
                      n: 13,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    all_ratings: { n: 14, c: Re, r: !0, q: !0 },
                    sections_reviewed: { n: 15, c: we, r: !0, q: !0 },
                    disclosure: { n: 16, c: ze },
                    inherited_surveyid: {
                      n: 17,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    started_from_scratch: {
                      n: 18,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    survey_aux_data: { n: 19, c: Ye },
                    source: { n: 20, br: l.qM.readEnum, bw: l.gp.writeEnum },
                    flags: {
                      n: 21,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = l.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ve.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ve();
            return Ve.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ve.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ve.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "ContentDescriptorSurvey";
          }
        }
        class Qe extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.appid || l.Sg(Qe.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = l.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Qe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Qe();
            return Qe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Qe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Qe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetActiveSurvey_Request";
          }
        }
        class $e extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.appid || l.Sg($e.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                    include_descriptors: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_keyvalues: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_categories: {
                      n: 4,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_ai_survey: {
                      n: 5,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    include_all_ratings: {
                      n: 6,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = l.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT($e.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new $e();
            return $e.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj($e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0($e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetWorkingSurvey_Request";
          }
        }
        class Ne extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.surveyid || l.Sg(Ne.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    surveyid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    survey: { n: 2, c: Ve },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = l.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ne.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ne();
            return Ne.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ne.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ne.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAppContentDescriptors_GetSurvey_Response";
          }
        }
        var mo;
        ((s) => {
          function e(r, a, o) {
            return r.SendMsg(
              "AppContentDescriptor.GetActiveSurvey#1",
              (0, Te.I8)(Qe, a, o),
              Ne,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          s.GetActiveSurvey = e;
          function n(r, a, o) {
            return r.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, Te.I8)($e, a, o),
              Ne,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          s.GetWorkingSurvey = n;
        })(mo || (mo = {}));
        const m0 = new Map([
            [Np, "esrb"],
            [Dp, "pegi"],
            [Fp, "bbfc"],
            [Wp, "usk"],
            [Rp, "oflc"],
            [wp, "nzoflc"],
            [Up, "cero"],
            [Cp, "kgrb"],
            [Kp, "gmedia"],
            [Gp, "dejus"],
            [Yp, "mda"],
            [kp, "fpb"],
            [Vp, "csrr"],
            [Qp, "crl"],
            [$p, "agcom"],
            [Zp, "igrs"],
            [Jp, "steam_germany"],
            [Xp, "steam_australia"],
            [Hp, "cadpa"],
          ]),
          g0 = "crl",
          p0 = "dejus",
          f0 = "0",
          h0 = "pending";
        function y0(s) {
          return m0.get(s) ?? "";
        }
        function x0(s) {
          return s ? Nt.Localize("#GameRating_Agency_" + s.toUpperCase()) : "";
        }
        function v0(s, e) {
          return !s || !e
            ? ""
            : Nt.Localize("#GameRating_Rating_" + s + "_" + e);
        }
        function j0(s) {
          return Nt.Localize("#GameRating_RARSText_" + s);
        }
        const di = new Map([
          [
            qp,
            {
              strFile: "love",
              strToken: "#GameRating_DescriptorImage_CERO_Love",
            },
          ],
          [
            _p,
            {
              strFile: "sexual_content",
              strToken: "#GameRating_DescriptorImage_CERO_SexualContent",
            },
          ],
          [
            e0,
            {
              strFile: "violence",
              strToken: "#GameRating_DescriptorImage_CERO_Violence",
            },
          ],
          [
            t0,
            {
              strFile: "horror",
              strToken: "#GameRating_DescriptorImage_CERO_Horror",
            },
          ],
          [
            n0,
            {
              strFile: "drinking_smoking",
              strToken: "#GameRating_DescriptorImage_CERO_DrinkingSmoking",
            },
          ],
          [
            s0,
            {
              strFile: "gambling",
              strToken: "#GameRating_DescriptorImage_CERO_Gambling",
            },
          ],
          [
            r0,
            {
              strFile: "crime",
              strToken: "#GameRating_DescriptorImage_CERO_Crime",
            },
          ],
          [
            i0,
            {
              strFile: "drugs",
              strToken: "#GameRating_DescriptorImage_CERO_Drugs",
            },
          ],
          [
            a0,
            {
              strFile: "language",
              strToken: "#GameRating_DescriptorImage_CERO_Language",
            },
          ],
        ]);
        function b0(s) {
          const e = di.get(s);
          if (e)
            return {
              strURL: `${U.TS.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${e.strFile}.png`,
              strAlt: Nt.Localize(e.strToken),
            };
        }
        function Ix(s) {
          const e = di.get(s);
          if (e)
            return `[img]${Config.MEDIA_CDN_URL}store/Ratings/CERO/${e.strFile}.png[/img]`;
        }
        function Ex(s) {
          const e = [];
          for (const n of s) {
            const r = n.toLowerCase();
            for (const [a, o] of di)
              if (r.includes(`cero/${o.strFile}.png`)) {
                e.push(a);
                break;
              }
          }
          return e;
        }
        const B0 = new Map([
          [lo, "#GameRating_ContentCategoryDescriptor_60"],
          [co, "#GameRating_ContentCategoryDescriptor_61"],
          [uo, "#GameRating_ContentCategoryDescriptor_62"],
          [zp, "#GameRating_ContentCategoryDescriptor_63"],
        ]);
        function go(s) {
          return s
            .map((e) => B0.get(e))
            .filter((e) => e !== void 0)
            .map((e) => Nt.Localize(e));
        }
        const I0 = new Map([
          ["in-game purchases", lo],
          ["in-game purchases (includes random items)", co],
          ["users interact", uo],
        ]);
        function E0(s) {
          const e = [];
          for (const n of s) {
            const r = n.trim();
            if (!r) continue;
            const a = I0.get(r.toLowerCase()),
              o = a !== void 0 ? go([a])[0] : r;
            e.includes(o) || e.push(o);
          }
          return e;
        }
        const P0 = new Map([
          [o0, "#GameRating_ContentCategoryDescriptor_60"],
          [l0, "#GameRating_ContentCategoryDescriptor_61"],
          [c0, "#GameRating_ContentCategoryDescriptor_62"],
          [d0, "#GameRating_ContentCategoryDescriptor_63"],
          [u0, "#GameRating_ContentCategoryDescriptor_64"],
        ]);
        function Px(s) {
          const e = [];
          for (const n of s)
            if (
              n.content_category ===
              EGameContentCategory.k_EGameContentCategory_InteractiveElements
            )
              for (const r of n.questionaire_categories ?? []) {
                const a = P0.get(r);
                a && e.push(GameRatingLocalization.Localize(a));
              }
          return e;
        }
        function po(s) {
          const { rating: e } = s,
            { strType: n, strRating: r } = e;
          if (r === h0)
            return (0, t.jsxs)("div", {
              className: (0, F.A)(Zt().GameRating, "GameRating"),
              children: [
                (0, t.jsx)(O.s, {
                  direction: "row",
                  justify: "between",
                  className: Zt().Title,
                  children: Nt.Localize("#GameRating_Pending"),
                }),
                (0, t.jsx)(fo, { strType: n }),
              ],
            });
          const a = n === g0 ? [j0(r)] : e.rgDescriptors,
            o = e.bOnlineMusicNotRated || e.bOnlineInteractionsNotRated;
          return (0, t.jsxs)(O.s, {
            direction: "column",
            gap: "3",
            className: Zt().GameRating,
            children: [
              n === p0
                ? e.nRequiredAge > 0 &&
                  (0, t.jsx)(b.EY, {
                    size: "3",
                    contrast: "title",
                    className: (0, F.A)(Zt().RequiredAge, "RequiredAge"),
                    children: Nt.Localize(
                      "#GameRating_Age_DEJUS",
                      e.nRequiredAge,
                    ),
                  })
                : e.bBanned && (0, t.jsx)(M0, {}),
              !e.bBanned &&
                (0, t.jsxs)(O.s, {
                  direction: "row",
                  gap: "3",
                  className: Zt().Details,
                  children: [
                    (0, t.jsx)("div", {
                      className: Zt().Icon,
                      children: (0, t.jsx)(T0, { rating: e }),
                    }),
                    (0, t.jsxs)(O.s, {
                      direction: "column",
                      gap: "2",
                      children: [
                        a.length > 0 &&
                          (0, t.jsx)(b.EY, {
                            as: "p",
                            contrast: "body",
                            className: Zt().DescriptorText,
                            children: a.join(`
`),
                          }),
                        (0, t.jsx)(S0, { rating: e }),
                        o &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              e.bOnlineMusicNotRated &&
                                (0, t.jsx)(b.EY, {
                                  as: "p",
                                  contrast: "body",
                                  className: Zt().DescriptorText,
                                  children: Nt.Localize(
                                    "#GameRating_OnlineMusicNotice",
                                  ),
                                }),
                              e.bOnlineInteractionsNotRated &&
                                (0, t.jsx)(b.EY, {
                                  as: "p",
                                  contrast: "body",
                                  className: Zt().DescriptorText,
                                  children: Nt.Localize(
                                    "#GameRating_OnlineInteractionsNotice",
                                  ),
                                }),
                            ],
                          }),
                        (0, t.jsx)(L0, { rating: e }),
                      ],
                    }),
                  ],
                }),
              (0, t.jsx)(fo, { strType: n }),
            ],
          });
        }
        function M0() {
          return (0, t.jsx)(O.s, {
            direction: "row",
            justify: "between",
            className: Zt().Title,
            children: Nt.LocalizeReact(
              "#GameRating_ContentClassification",
              (0, t.jsx)("span", {
                className: Zt().Banned,
                children: Nt.Localize("#GameRating_Banned"),
              }),
            ),
          });
        }
        function T0(s) {
          const {
            strType: e,
            strRating: n,
            strImageURL: r,
            strImageTarget: a,
          } = s.rating;
          if (n === f0)
            return (0, t.jsx)("div", {
              className: Zt().AllAges,
              children: Nt.Localize("#GameRating_AllAges"),
            });
          if (!r) return null;
          const o = v0(e, n);
          return a
            ? (0, t.jsx)(P.Ii, {
                href: a,
                onOKActionDescription: o,
                children: (0, t.jsx)(tn, { src: r, alt: o }),
              })
            : (0, t.jsx)(tn, { src: r, alt: o });
        }
        function S0(s) {
          const e = (s.rating.rgDescriptorImages ?? [])
            .map((n) => b0(n))
            .filter((n) => n !== void 0);
          return e.length === 0
            ? null
            : (0, t.jsx)(O.s, {
                direction: "column",
                align: "start",
                gap: "1",
                children: e.map((n, r) =>
                  (0, t.jsx)(
                    tn,
                    { src: n.strURL, alt: n.strAlt, title: n.strAlt },
                    r,
                  ),
                ),
              });
        }
        function L0(s) {
          const {
              rgRatingInteractiveElements: e,
              rgSurveyInteractiveElements: n,
            } = s.rating,
            r = e.length > 0,
            a = r ? e : n;
          return a.length === 0
            ? null
            : (0, t.jsxs)(de.az, {
                children: [
                  (0, t.jsx)(b.EY, {
                    as: "p",
                    contrast: "note",
                    children: Nt.Localize(
                      r
                        ? "#GameRating_InteractiveElements_Title"
                        : "#GameRating_ContentCategory_InteractiveElements",
                    ),
                  }),
                  (0, t.jsx)(b.EY, {
                    as: "p",
                    contrast: "body",
                    className: Zt().DescriptorText,
                    children: a.join(Nt.Localize("#GameRating_ListDelimiter")),
                  }),
                ],
              });
        }
        function fo(s) {
          const e = x0(s.strType);
          return e
            ? (0, t.jsx)(b.EY, {
                contrast: "body",
                size: "2",
                className: "Agency",
                children: Nt.Localize("#GameRating_RatingBy", e),
              })
            : null;
        }
        function ho(s) {
          return {
            strType: s.type || (s.agency !== void 0 ? y0(s.agency) : ""),
            strRating: s.rating ?? "",
            bBanned: !!s.banned,
            nRequiredAge: s.required_age ?? 0,
            rgDescriptors: s.descriptors ?? [],
            rgDescriptorImages: s.descriptor_images ?? [],
            bOnlineMusicNotRated: !!s.esrb_online_music_not_rated,
            bOnlineInteractionsNotRated: !!s.esrb_online_interactions_not_rated,
            rgRatingInteractiveElements: E0(
              (s.interactive_elements ?? "").split(/[\r\n,]+/),
            ),
            rgSurveyInteractiveElements: go(
              s.survey_interactive_elements ?? [],
            ),
            strImageURL: O0(s),
            strImageTarget: s.image_target || void 0,
          };
        }
        function O0(s) {
          if (s.image_url)
            return `${U.TS.STORE_CDN_URL}${s.image_url}?${s.image_target ? "v=3" : "v=2"}`;
        }
        function A0(s) {
          const { data: e } = (0, E.x2)({ appid: s.appid });
          return (
            m.use(Nt.Ready()),
            e?.rating ? (0, t.jsx)(po, { rating: ho(e) }) : null
          );
        }
        var z0 = i(15106),
          yo = i.n(z0);
        function N0(s) {
          return null;
        }
        function D0(s) {
          const { data: e } = (0, E.x2)({ appid: s.appid });
          return (
            m.use(p.Ready()),
            m.use(Nt.Ready()),
            e?.rating
              ? (0, t.jsxs)("div", {
                  className: yo().ValveOnly,
                  children: [
                    (0, t.jsxs)("div", {
                      className: yo().ValveOnlyTitle,
                      children: [
                        p.Localize("#AppPage_GameRating_SectionTitle"),
                        " (VO)",
                      ],
                    }),
                    (0, t.jsx)(po, { rating: ho(e) }),
                  ],
                })
              : null
          );
        }
        var ui = i(98001);
        function F0(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            n = (0, Gt.AP)(s),
            { data: r } = (0, si.Nd)(n),
            a = r?.your_info;
          if (!a?.owned || !a.minutes_played_forever) return null;
          const o = !!e?.categories?.feature_categoryids?.includes(Z.Vb8);
          return {
            nMinutesForever: a.minutes_played_forever,
            nMinutesLastTwoWeeks: a.minutes_played ?? 0,
            bShowStatsLinks: o && !(0, dn.nA)(U.TS.EREALM),
            nSteamworksAppid: n,
          };
        }
        function W0(s) {
          const {
              nMinutesForever: e,
              nMinutesLastTwoWeeks: n,
              bShowStatsLinks: r,
              nSteamworksAppid: a,
            } = s.stats,
            { data: o } = (0, Os.jn)(U.iA.steamid);
          m.use(p.Ready());
          const c = `${(0, As.n)(o, U.iA.steamid)}/stats/appid/${a}`,
            d = (0, ui.v)({ appid: a });
          return (0, t.jsxs)(O.s, {
            direction: "column",
            children: [
              (0, t.jsxs)(b.EY, {
                size: "3",
                color: "slate-11",
                children: [
                  n > 0 &&
                    `${p.Localize("#AppPage_MyActivity_HoursLastTwoWeeks", ar(n))} / `,
                  p.Localize("#AppPage_MyActivity_HoursOnRecord", ar(e)),
                ],
              }),
              r &&
                (0, t.jsxs)(O.s, {
                  gap: "2",
                  children: [
                    (0, t.jsx)(Ot.Y, {
                      size: "3",
                      color: "blue-8",
                      href: c,
                      children: p.Localize("#AppPage_MyActivity_ViewStats"),
                    }),
                    (0, t.jsx)(Ot.Y, {
                      size: "3",
                      color: "blue-8",
                      href: d,
                      children: p.Localize(
                        "#AppPage_MyActivity_ViewGlobalStats",
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        var R0 = i(80974),
          ur = i.n(R0);
        function w0(s) {
          return ((0, dn.nA)(U.TS.EREALM) ? "steamchina://" : "steam://") + s;
        }
        function U0(s) {
          const {
              appid: e,
              bOwned: n,
              masterSub: r,
              timedTrial: a,
              playAppid: o,
            } = s,
            { data: c } = (0, E.J$)({ appid: e }),
            d = F0(e);
          if (!c || (!n && !d)) return null;
          m.use(p.Ready());
          const u = c.type == ne.uE.Hk,
            g = !!a && a.nSecondsRemaining == 0 && !!r?.subscription,
            f = n && !u && !g;
          return (0, t.jsxs)(O.s, {
            direction: "column",
            paddingX: "5",
            paddingY: "3",
            background: "greyneutral-2 80%",
            children: [
              n && r && (0, t.jsx)(K0, { masterSub: r, bTrial: !!a }),
              n && !r && (0, t.jsx)(C0, { strAppName: c.name ?? "" }),
              n && g && (0, t.jsx)(Y0, { subscription: r.subscription }),
              f &&
                (0, t.jsx)(G0, {
                  strAppName: c.name ?? "",
                  masterSub: r,
                  timedTrial: a,
                }),
              (0, t.jsxs)(T.Z, {
                className: ur().Actions,
                "flow-children": "row",
                children: [
                  f &&
                    o !== null &&
                    (0, t.jsx)(k0, { appid: o, eType: c.type }),
                  f &&
                    !!a &&
                    (0, t.jsx)(V0, { nSecondsRemaining: a.nSecondsRemaining }),
                  !!d && (0, t.jsx)(W0, { stats: d }),
                ],
              }),
            ],
          });
        }
        function xo() {
          return (0, t.jsxs)(O.s, {
            className: ur().InLibraryFlag,
            gap: "1",
            flexShrink: "0",
            align: "center",
            height: "18px",
            paddingX: "1",
            background: "storegreen-10",
            children: [
              (0, t.jsx)(Fe.wpD, { className: ur().InLibrarySVG }),
              (0, t.jsx)(b.EY, {
                size: "1",
                color: "slate-1",
                children: p.Localize("#AppPage_Owned_InLibraryFlag"),
              }),
            ],
          });
        }
        function C0(s) {
          const { strAppName: e } = s;
          return (0, t.jsxs)(O.s, {
            gap: "2",
            justify: "between",
            paddingBottom: "3",
            className: ur().InLibraryRow,
            children: [
              (0, t.jsx)(b.EY, {
                size: "4",
                color: "storegreen-10",
                children: p.Localize("#AppPage_Owned_AlreadyInLibrary", e),
              }),
              (0, t.jsx)(xo, {}),
            ],
          });
        }
        function K0(s) {
          const { masterSub: e, bTrial: n } = s,
            { strPackageName: r, subscription: a } = e,
            o = n
              ? "#AppPage_Owned_MasterSubTrialHeader"
              : "#AppPage_Owned_MasterSubHeader";
          return (0, t.jsxs)(O.s, {
            align: "center",
            gap: "2",
            children: [
              a?.strBadgeImage
                ? (0, t.jsx)(O.s, {
                    background: "blue-7",
                    justify: "center",
                    align: "center",
                    paddingY: "1",
                    paddingLeft: "2",
                    paddingRight: "5",
                    children: (0, t.jsx)(tn, {
                      src: a.strBadgeImage,
                      alt: "",
                      height: "18px",
                    }),
                  })
                : (0, t.jsx)(xo, {}),
              (0, t.jsx)(de.az, {
                flexGrow: "0",
                children: (0, t.jsx)(b.EY, {
                  size: "4",
                  color: "storegreen-10",
                  children: p.Localize(o, r),
                }),
              }),
              !!a &&
                (0, t.jsx)(de.az, {
                  flexShrink: "0",
                  children: (0, t.jsx)(Ot.Y, {
                    href: a.strInfoURL,
                    size: "2",
                    color: "text-light",
                    underline: "always",
                    children: p.Localize(
                      "#AppPage_Owned_MasterSubBrowse",
                      a.strName,
                    ),
                  }),
                }),
            ],
          });
        }
        function G0(s) {
          const { strAppName: e, masterSub: n, timedTrial: r } = s,
            a = n?.subscription;
          let o = null;
          if (r) {
            const c = (0, Lt.Hq)(r.nSecondsAllowed, { eSuffix: Lt.a8.None });
            a
              ? (o = (0, ve.xh)(
                  p.Localize("#AppPage_Owned_TrialWithMasterSub", c, a.strName),
                  (0, t.jsx)(Ot.Y, { href: a.strInfoURL }),
                ))
              : (o = p.Localize("#AppPage_Owned_TrialFree", e, c));
          } else
            a &&
              (o = (0, ve.xh)(
                p.Localize("#AppPage_Owned_MasterSubDesc", a.strName),
                (0, t.jsx)(Ot.Y, { href: a.strInfoURL }),
              ));
          return o
            ? (0, t.jsx)(b.EY, { size: "3", marginTop: "3", children: o })
            : null;
        }
        function Y0(s) {
          const { subscription: e } = s;
          return (0, t.jsx)(b.EY, {
            size: "3",
            marginTop: "3",
            children: (0, ve.xh)(
              p.Localize("#AppPage_Owned_TrialEnded", e.strName),
              (0, t.jsx)(Ot.Y, { href: e.strInfoURL }),
            ),
          });
        }
        function k0(s) {
          const { appid: e, eType: n } = s;
          let r = "#AppPage_Owned_Play";
          return (
            n == ne.uE.Sv
              ? (r = "#AppPage_Owned_Use")
              : n == ne.uE.Wz
                ? (r = "#AppPage_Owned_Watch")
                : n == ne.uE.Ov && (r = "#AppPage_Owned_PlayMusic"),
            (0, t.jsx)(Le.v, {
              focusable: !0,
              color: "blue",
              href: w0(`launch/${e}/Dialog`),
              children: p.Localize(r),
            })
          );
        }
        function V0(s) {
          const { nSecondsRemaining: e } = s;
          return e <= 0
            ? null
            : (0, t.jsx)(b.EY, {
                size: "4",
                color: "text-light",
                children: (0, Lt.Hq)(e, { eSuffix: Lt.a8.Remaining }),
              });
        }
        var Q0 = i(9682);
        function vo(s, e) {
          return ["OwnReview", s, e];
        }
        function $0(s) {
          const e = (0, Xt.KV)(),
            n = (0, Gt.AP)(s),
            r = Z0(e, U.iA.steamid, n);
          return (0, an.I)(r);
        }
        function Z0(s, e, n) {
          return {
            queryKey: vo(e, n),
            queryFn: async () => {
              const r = await Q0.YK.GetIndividualRecommendations(s, {
                requests: [{ steamid: e, appid: n }],
              });
              if (r.GetEResult() == en.p) return null;
              if (r.GetEResult() != en.R)
                throw new zr.x(
                  r.GetEResult(),
                  "Error from GetIndividualRecommendations",
                );
              return r.Body().recommendations()[0]?.toObject() ?? null;
            },
            staleTime: 1 / 0,
          };
        }
        function J0(s) {
          const e = (0, pn.jE)(),
            n = (0, Gt.AP)(s);
          return m.useCallback(
            (r) => {
              e.setQueryData(vo(U.iA.steamid, n), r);
            },
            [e, n],
          );
        }
        var X0 = i(85743),
          mi = i(28794),
          H0 = i(57581),
          q0 = i(15751),
          jo = i.n(q0),
          _0 = i(6876),
          gi = i.n(_0);
        function ef(s) {
          const { review: e, eAppType: n, nSteamworksAppid: r, onEdit: a } = s,
            { data: o } = (0, Os.jn)(U.iA.steamid);
          m.use(p.Ready());
          const c = (0, X0.Fi)((0, As.n)(o, U.iA.steamid), r),
            d = e.is_public
              ? "#AppPage_OwnReview_PostedPublic"
              : "#AppPage_OwnReview_PostedFriendsOnly";
          return (0, t.jsxs)(O.s, {
            direction: "column",
            padding: "4",
            borderColor: "greyneutral-9 50%",
            children: [
              (0, t.jsx)(tf, { review: e, eAppType: n }),
              (0, t.jsxs)(O.s, {
                direction: "column",
                background: "greyneutral-11 14%",
                children: [
                  (0, t.jsx)(sf, { review: e }),
                  (0, t.jsxs)(O.s, {
                    direction: "column",
                    gap: "3",
                    padding: "3",
                    children: [
                      (0, t.jsxs)(O.s, {
                        gap: "3",
                        align: "center",
                        children: [
                          (0, t.jsx)(nf, { bPositive: !!e.voted_up }),
                          (0, t.jsx)(de.az, {
                            flexGrow: "1",
                            children: (0, t.jsx)(b.EY, {
                              size: "3",
                              color: "slate-11",
                              children: p.Localize(d),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)(rf, { review: e }),
                      (0, t.jsxs)(O.s, {
                        gap: "2",
                        justify: "end",
                        children: [
                          (0, t.jsx)(Le.$, {
                            focusable: !0,
                            color: "blue",
                            onClick: a,
                            children: p.Localize("#AppPage_OwnReview_Edit"),
                          }),
                          (0, t.jsx)(Le.v, {
                            focusable: !0,
                            color: "blue",
                            href: c,
                            children: p.Localize("#AppPage_OwnReview_View"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function tf(s) {
          const { review: e, eAppType: n } = s,
            r = p.GetAppTypeLocKey(
              "#AppPage_OwnReview_Reviewed",
              n ?? ne.uE.HT,
            ),
            a = (0, Lt._l)(e.time_created ?? 0, { fullmonthname: !0 });
          return (0, t.jsxs)(b.EY, {
            size: "5",
            weight: "medium",
            color: "text-light",
            contrast: "title",
            marginBottom: "2",
            children: [
              p.Localize(r, a),
              !!e.time_updated &&
                ` (${p.Localize("#AppPage_OwnReview_Updated", (0, Lt._l)(e.time_updated, { fullmonthname: !0 }))})`,
            ],
          });
        }
        function nf(s) {
          const { bPositive: e } = s;
          return (0, t.jsx)("div", {
            className: (0, F.A)(gi().ThumbIcon, !e && gi().Down),
            children: (0, t.jsx)(N.twC, {}),
          });
        }
        function sf(s) {
          const { review: e } = s,
            n = e.votes_up ?? 0,
            r = e.comment_count ?? 0;
          return !n && !r
            ? null
            : (0, t.jsxs)(O.s, {
                gap: "3",
                align: "center",
                paddingX: "4",
                paddingY: "2",
                background: "greyneutral-9 50%",
                children: [
                  n > 0 &&
                    (0, t.jsx)(b.EY, {
                      size: "3",
                      children: p.LocalizePlural(
                        "#AppPage_OwnReview_HelpfulCount",
                        n,
                      ),
                    }),
                  r > 0 &&
                    (0, t.jsxs)(O.s, {
                      gap: "1",
                      align: "center",
                      children: [
                        (0, t.jsx)(b.EY, { size: "3", children: r }),
                        (0, t.jsx)(N.MwB, { className: gi().CommentIcon }),
                      ],
                    }),
                ],
              });
        }
        function rf(s) {
          const { review: e } = s,
            [n, r] = m.useState(!1),
            a = m.useCallback(() => r(!0), []);
          if (!e.developer_response) return null;
          m.use(mi.c.Ready());
          const o = (0, Lt._l)(e.time_developer_responded ?? 0, {
            fullmonthname: !0,
            bUseRelativeNames: !1,
          });
          return (0, t.jsxs)(O.s, {
            direction: "column",
            gap: "2",
            children: [
              (0, t.jsxs)(O.s, {
                gap: "2",
                align: "center",
                wrap: "wrap",
                children: [
                  (0, t.jsx)(b.EY, {
                    size: "3",
                    color: "slate-11",
                    children: mi.c.Localize(
                      "#Review_OfficialDeveloperResponseExistsDate",
                      o,
                    ),
                  }),
                  !n &&
                    (0, t.jsx)(Le.$, {
                      focusable: !0,
                      size: "1",
                      variant: "ghost",
                      color: "blue",
                      onClick: a,
                      children: mi.c.Localize(
                        "#Review_OfficialDeveloperResponse_View",
                      ),
                    }),
                ],
              }),
              n &&
                (0, t.jsx)(de.az, {
                  padding: "3",
                  background: "greyneutral-9 50%",
                  className: (0, F.A)(jo().BBCodeContent, jo().Community),
                  children: (0, t.jsx)(H0.J, {
                    text: e.developer_response,
                    bBeWary: !0,
                  }),
                }),
            ],
          });
        }
        var af = i(3877),
          of = i(24089);
        function lf() {
          return of.TextEntry;
        }
        var cf = i(86946),
          df = i(80549);
        function uf(s) {
          const {
              rows: e = 3,
              resize: n = "none",
              ref: r,
              value: a,
              onTextChange: o,
              onChange: c,
              disabled: d,
              variant: u,
              ...g
            } = s,
            f = (B) => {
              d || (o(B.target.value), c && c(B));
            },
            h = (0, df.f)("TextArea", u),
            x = (0, w.Qn)(),
            v = (0, cf.w)({
              ...g,
              className: Qn()((0, af.T)(), lf()),
              style: { resize: n },
              cursor: "text",
              disabled: d,
              variant: h,
            }),
            I = x ? P.dO : "textarea";
          return (0, t.jsx)(I, {
            ref: r,
            ...v,
            value: a || "",
            onChange: f,
            rows: e,
            readOnly: d,
            "aria-disabled": d,
          });
        }
        var mf = i(12204),
          pi = i(94381),
          bo = i(8833);
        function gf(s) {
          const { orientation: e = "horizontal", size: n = "1", ...r } = s;
          return (0, t.jsx)("div", {
            role: "separator",
            "aria-orientation": e,
            ...(0, Cr.mz)({ ...r, size: n, className: bo.Separator }, pf),
          });
        }
        const pf = [
          ...ja.L,
          { prop: "size", className: (s) => bo[`Size-${s}`], responsive: !0 },
          {
            prop: "color",
            cssProperty: (s) => ["--separator-color", (0, Cr.w7)(s)],
          },
        ];
        var Bo = i(28361),
          fi = i(16412);
        function ff(s, e) {
          const n = (0, Gt.AP)(s),
            r = (0, Qt.ru)("recommend-game");
          return (0, ps.n)({
            mutationFn: (a) => (e ? xf(e, a) : yf(s, n, a, r)),
            onSuccess: () => {
              window.location.reload();
            },
          });
        }
        function hf(s) {
          function e(r) {
            return typeof r == "boolean" || r === void 0 || r === null
              ? r
                ? "1"
                : "0"
              : String(r);
          }
          const n = new FormData();
          return (
            Object.entries(s).forEach(([r, a]) => {
              if (Array.isArray(a)) for (const o of a) n.append(r + "[]", e(o));
              else n.append(r, e(a));
            }),
            n
          );
        }
        async function yf(s, e, n, r) {
          const a = await Io(`${U.TS.STORE_BASE_URL}friends/recommendgame`, {
            appid: s,
            steamworksappid: e,
            comment: n.review ?? "",
            rated_up: n.voted_up,
            is_public: n.is_public,
            language: n.language ?? "",
            received_compensation: n.received_compensation,
            disable_comments: n.comments_disabled,
            sessionid: (0, w.KC)(),
            hide_in_steam_china: !(0, dn.nA)(U.TS.EREALM),
            saved_hardware_id: n.saved_hardware_id,
            snr: r,
          });
          if (!a.success) throw new Error(a.strError ?? "");
        }
        async function xf(s, e) {
          if (
            (
              await Io(`${U.TS.STORE_BASE_URL}userreviews/update/${s}`, {
                review_text: e.review ?? "",
                voted_up: e.voted_up,
                is_public: e.is_public,
                language: e.language ?? "",
                received_compensation: e.received_compensation,
                comments_disabled: e.comments_disabled,
                saved_hardware_id: e.saved_hardware_id,
                sessionid: (0, w.KC)(),
              })
            ).success != en.R
          )
            throw new Error("");
        }
        async function Io(s, e) {
          const n = hf(e);
          return await (
            await fetch(s, { method: "POST", body: n, credentials: "include" })
          )
            .json()
            .catch(() => ({}));
        }
        function Mx(s) {
          return "unknown EValveIndexComponent ( " + s + " )";
        }
        function Tx(s) {
          return "unknown EFramePromoSerialRedemptionSource ( " + s + " )";
        }
        class Ze extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.serial_number || l.Sg(Ze.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = l.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Ze.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ze();
            return Ze.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Ze.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Ze.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Request";
          }
        }
        class Je extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.accountid || l.Sg(Je.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    accountid: {
                      n: 1,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    registration_complete: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = l.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Je.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Je();
            return Je.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Je.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Je.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Accounts";
          }
        }
        class Xe extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.accounts || l.Sg(Xe.M()),
              M.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: { accounts: { n: 1, c: Je, r: !0, q: !0 } },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = l.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Xe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Xe();
            return Xe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Xe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Xe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Response";
          }
        }
        class He extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.serial_number || l.Sg(He.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = l.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(He.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new He();
            return He.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(He.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(He.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Request";
          }
        }
        class In extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return In.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new In();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new In();
            return In.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return In.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              In.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Response";
          }
        }
        class qe extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.serial_number || l.Sg(qe.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = l.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(qe.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new qe();
            return qe.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(qe.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(qe.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Request";
          }
        }
        class En extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return En.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new En();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new En();
            return En.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return En.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              En.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Response";
          }
        }
        class _e extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.appidorname || l.Sg(_e.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    appidorname: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    templatename: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = l.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(_e.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new _e();
            return _e.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(_e.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(_e.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_ControllerConfig";
          }
        }
        class et extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.serial_number || l.Sg(et.M()),
              M.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    configurations: { n: 4, c: _e, r: !0, q: !0 },
                    controller_type: {
                      n: 5,
                      d: 2,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    only_for_this_serial: {
                      n: 6,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = l.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(et.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new et();
            return et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(et.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(et.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Request";
          }
        }
        class Pn extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Pn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Pn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Pn();
            return Pn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Pn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Pn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Response";
          }
        }
        class tt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.serial_number || l.Sg(tt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    appidorname: {
                      n: 4,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_type: {
                      n: 5,
                      d: 2,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                    only_for_this_serial: {
                      n: 6,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = l.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(tt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new tt();
            return tt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(tt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(tt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_Request";
          }
        }
        class nt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.appidorname || l.Sg(nt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    appidorname: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    templatename: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    serial_number: {
                      n: 4,
                      d: "",
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    autosave: {
                      n: 5,
                      d: !1,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = l.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(nt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new nt();
            return nt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(nt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(nt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_ControllerConfig";
          }
        }
        class st extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.configurations || l.Sg(st.M()),
              M.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { configurations: { n: 1, c: nt, r: !0, q: !0 } },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = l.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(st.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new st();
            return st.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(st.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(st.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerGetConfig_Response";
          }
        }
        class rt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.serial_number || l.Sg(rt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = l.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(rt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new rt();
            return rt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(rt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(rt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Request";
          }
        }
        class Mn extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Mn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Mn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Mn();
            return Mn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Mn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Mn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Response";
          }
        }
        class it extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.serial_number || l.Sg(it.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    publishedfileid: {
                      n: 2,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    accountid: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = l.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(it.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new it();
            return it.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(it.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(it.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Request";
          }
        }
        class Tn extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Tn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Tn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Tn();
            return Tn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Tn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Tn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Response";
          }
        }
        class at extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.serial_number || l.Sg(at.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    accountid: {
                      n: 2,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = l.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(at.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new at();
            return at.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(at.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(at.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetPersonalizationFile_Request";
          }
        }
        class ot extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.publishedfileid || l.Sg(ot.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    publishedfileid: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = l.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ot.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ot();
            return ot.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ot.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ot.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetPersonalizationFile_Response";
          }
        }
        class lt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.product_name || l.Sg(lt.M()),
              M.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    product_name: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    values: { n: 2, c: ct, r: !0, q: !0 },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = l.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(lt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new lt();
            return lt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(lt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(lt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Request";
          }
        }
        class ct extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.key || l.Sg(ct.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    key: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = l.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ct.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ct();
            return ct.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ct.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ct.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Request_Pair";
          }
        }
        class dt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.values || l.Sg(dt.M()),
              M.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    values: { n: 1, c: ut, r: !0, q: !0 },
                    components: { n: 2, c: mt, r: !0, q: !0 },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = l.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(dt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new dt();
            return dt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(dt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(dt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response";
          }
        }
        class ut extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.key || l.Sg(ut.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    key: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = l.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ut.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ut();
            return ut.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ut.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ut.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response_Pair";
          }
        }
        class mt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.name || l.Sg(mt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    name: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    image: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                    value: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = l.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(mt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new mt();
            return mt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(mt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(mt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_VRCompatibilityCheck_Response_ComponentDisplay";
          }
        }
        class gt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.serial_number || l.Sg(gt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    manufacturer_serial_number: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    component_code: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    component_type: {
                      n: 4,
                      br: l.qM.readEnum,
                      bw: l.gp.writeEnum,
                    },
                    estimated_time_registered: {
                      n: 5,
                      br: l.qM.readInt32,
                      bw: l.gp.writeInt32,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = l.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(gt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new gt();
            return gt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(gt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(gt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Request";
          }
        }
        class Sn extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Sn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Sn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Sn();
            return Sn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Sn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Sn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Response";
          }
        }
        class pt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.serial_number || l.Sg(pt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = l.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(pt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new pt();
            return pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(pt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(pt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSteamDeckComponents_Request";
          }
        }
        class ft extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.json_components || l.Sg(ft.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    json_components: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = l.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ft.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ft();
            return ft.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ft.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ft.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSteamDeckComponents_Response";
          }
        }
        class ht extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.friendly_name || l.Sg(ht.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    friendly_name: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    system_info: { n: 2, c: k.Lu },
                    backfill_user_reviews: {
                      n: 3,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = l.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(ht.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new ht();
            return ht.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(ht.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(ht.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SaveHardware_Request";
          }
        }
        class yt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.hardware_id || l.Sg(yt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = l.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(yt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new yt();
            return yt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(yt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(yt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SaveHardware_Response";
          }
        }
        class xt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xt.prototype.hardware_id || l.Sg(xt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    friendly_name: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    timestamp_created: {
                      n: 3,
                      br: l.qM.readUint32,
                      bw: l.gp.writeUint32,
                    },
                    hardware_cluster_id: {
                      n: 4,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    system_info: { n: 5, c: k.Lu },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = l.w0(xt.M())), xt.sm_mbf;
          }
          toObject(e = !1) {
            return xt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(xt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(xt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new xt();
            return xt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(xt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(xt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SavedHardware_Details";
          }
        }
        class vt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vt.prototype.steamid || l.Sg(vt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: l.qM.readFixed64String,
                      bw: l.gp.writeFixed64String,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = l.w0(vt.M())), vt.sm_mbf;
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(vt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(vt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new vt();
            return vt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(vt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(vt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSavedHardwareList_Request";
          }
        }
        class jt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.saved_hardware || l.Sg(jt.M()),
              M.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: { saved_hardware: { n: 1, c: xt, r: !0, q: !0 } },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = l.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(jt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new jt();
            return jt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(jt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(jt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_GetSavedHardwareList_Response";
          }
        }
        class bt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.hardware_id || l.Sg(bt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    hardware_id: {
                      n: 1,
                      br: l.qM.readUint64String,
                      bw: l.gp.writeUint64String,
                    },
                    delete_hardware: {
                      n: 2,
                      br: l.qM.readBool,
                      bw: l.gp.writeBool,
                    },
                    friendly_name_update: {
                      n: 3,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = l.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(bt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new bt();
            return bt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(bt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(bt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Request";
          }
        }
        class Ln extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ln.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new Ln();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Ln();
            return Ln.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Ln.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Ln.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Response";
          }
        }
        class Bt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.serial_number || l.Sg(Bt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    machine_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = l.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Bt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Bt();
            return Bt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Bt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Bt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Request";
          }
        }
        class On extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return On.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new On();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new On();
            return On.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return On.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              On.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Response";
          }
        }
        class It extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              It.prototype.controllers || l.Sg(It.M()),
              M.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: { controllers: { n: 1, c: Et, r: !0, q: !0 } },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = l.w0(It.M())), It.sm_mbf;
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(It.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(It.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new It();
            return It.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(It.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(It.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Request";
          }
        }
        class Et extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Et.prototype.serial_number || l.Sg(Et.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    serial_number: {
                      n: 1,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                    controller_code: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = l.w0(Et.M())), Et.sm_mbf;
          }
          toObject(e = !1) {
            return Et.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Et.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Et.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Et();
            return Et.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Et.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Et.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Request_Controller";
          }
        }
        class An extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return An.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new An();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new An();
            return An.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return An.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              An.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Response";
          }
        }
        class Pt extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pt.prototype.serial || l.Sg(Pt.M()),
              M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    serial: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                    component_serial: {
                      n: 2,
                      br: l.qM.readString,
                      bw: l.gp.writeString,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = l.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, n) {
            return l.BT(Pt.M(), e, n);
          }
          static fromObject(e) {
            return l.Uq(Pt.M(), e);
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new Pt();
            return Pt.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return l.zj(Pt.MBF(), e, n);
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {
            l.i0(Pt.M(), e, n);
          }
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Request";
          }
        }
        class zn extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), M.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return zn.toObject(e, this);
          }
          static toObject(e, n) {
            return e ? { $jspbMessageInstance: n } : {};
          }
          static fromObject(e) {
            return new zn();
          }
          static deserializeBinary(e) {
            let n = new (y().BinaryReader)(e),
              r = new zn();
            return zn.deserializeBinaryFromReader(r, n);
          }
          static deserializeBinaryFromReader(e, n) {
            return e;
          }
          serializeBinary() {
            var e = new (y().BinaryWriter)();
            return zn.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, n) {}
          serializeBase64String() {
            var e = new (y().BinaryWriter)();
            return (
              zn.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Response";
          }
        }
        var hi;
        ((s) => {
          function e(S, D, C) {
            return S.SendMsg(
              "AccountHardware.RegisterSteamController#1",
              (0, Te.I8)(He, D, C),
              In,
              { ePrivilege: 1 },
            );
          }
          s.RegisterSteamController = e;
          function n(S, D, C) {
            return S.SendMsg(
              "AccountHardware.CompleteSteamControllerRegistration#1",
              (0, Te.I8)(qe, D, C),
              En,
              { ePrivilege: 1 },
            );
          }
          s.CompleteSteamControllerRegistration = n;
          function r(S, D, C) {
            return S.SendMsg(
              "AccountHardware.QueryAccountsRegisteredToController#1",
              (0, Te.I8)(Ze, D, C),
              Xe,
              { ePrivilege: 1 },
            );
          }
          s.QueryAccountsRegisteredToController = r;
          function a(S, D, C) {
            return S.SendMsg(
              "AccountHardware.UpdateControllerUsageReport#1",
              (0, Te.I8)(It, D, C),
              An,
              { ePrivilege: 1 },
            );
          }
          s.UpdateControllerUsageReport = a;
          function o(S, D, C) {
            return S.SendMsg(
              "AccountHardware.SetDesiredControllerConfigForApp#1",
              (0, Te.I8)(et, D, C),
              Pn,
              { ePrivilege: 1 },
            );
          }
          s.SetDesiredControllerConfigForApp = o;
          function c(S, D, C) {
            return S.SendMsg(
              "AccountHardware.GetDesiredControllerConfigForApp#1",
              (0, Te.I8)(tt, D, C),
              st,
              { ePrivilege: 1 },
            );
          }
          s.GetDesiredControllerConfigForApp = c;
          function d(S, D, C) {
            return S.SendMsg(
              "AccountHardware.DeRegisterSteamController#1",
              (0, Te.I8)(rt, D, C),
              Mn,
              { ePrivilege: 1 },
            );
          }
          s.DeRegisterSteamController = d;
          function u(S, D, C) {
            return S.SendMsg(
              "AccountHardware.SetControllerPersonalizationFile#1",
              (0, Te.I8)(it, D, C),
              Tn,
              { ePrivilege: 1 },
            );
          }
          s.SetControllerPersonalizationFile = u;
          function g(S, D, C) {
            return S.SendMsg(
              "AccountHardware.GetControllerPersonalizationFile#1",
              (0, Te.I8)(at, D, C),
              ot,
              { ePrivilege: 1 },
            );
          }
          s.GetControllerPersonalizationFile = g;
          function f(S, D, C) {
            return S.SendMsg(
              "AccountHardware.VRCompatibilityCheck#1",
              (0, Te.I8)(lt, D, C),
              dt,
              { ePrivilege: 0 },
            );
          }
          s.VRCompatibilityCheck = f;
          function h(S, D, C) {
            return S.SendMsg(
              "AccountHardware.RegisterValveIndexComponent#1",
              (0, Te.I8)(gt, D, C),
              Sn,
              { ePrivilege: 1 },
            );
          }
          s.RegisterValveIndexComponent = h;
          function x(S, D, C) {
            return S.SendMsg(
              "AccountHardware.GetSteamDeckComponents#1",
              (0, Te.I8)(pt, D, C),
              ft,
              { ePrivilege: 1 },
            );
          }
          s.GetSteamDeckComponents = x;
          function v(S, D, C) {
            return S.SendMsg(
              "AccountHardware.SaveHardware#1",
              (0, Te.I8)(ht, D, C),
              yt,
              { ePrivilege: 1 },
            );
          }
          s.SaveHardware = v;
          function I(S, D, C) {
            return S.SendMsg(
              "AccountHardware.ManageSavedHardware#1",
              (0, Te.I8)(bt, D, C),
              Ln,
              { ePrivilege: 1 },
            );
          }
          s.ManageSavedHardware = I;
          function B(S, D, C) {
            return S.SendMsg(
              "AccountHardware.GetSavedHardwareList#1",
              (0, Te.I8)(vt, D, C),
              jt,
              { ePrivilege: 1 },
            );
          }
          s.GetSavedHardwareList = B;
          function A(S, D, C) {
            return S.SendMsg(
              "AccountHardware.RegisterSteamMachine#1",
              (0, Te.I8)(Bt, D, C),
              On,
              { ePrivilege: 1 },
            );
          }
          s.RegisterSteamMachine = A;
        })(hi || (hi = {}));
        var Eo;
        ((s) => {
          function e(n, r, a) {
            return n.SendMsg(
              "AccountHardwarePromotions.RedeemFramePromoPackage#1",
              (0, Te.I8)(Pt, r, a),
              zn,
              { ePrivilege: 1 },
            );
          }
          s.RedeemFramePromoPackage = e;
        })(Eo || (Eo = {}));
        var Po = i(44930),
          vf = i(94162);
        function Mo(s) {
          return ["SavedHardware", s];
        }
        function jf(s) {
          const e = (0, Xt.KV)();
          return (0, an.I)(bf(e, U.iA.steamid, s));
        }
        function bf(s, e, n) {
          return {
            queryKey: Mo(e),
            queryFn: async () => {
              const r = await hi.GetSavedHardwareList(s, { steamid: e });
              if (!r.BSuccess())
                throw new zr.x(
                  r.GetEResult(),
                  "Error from GetSavedHardwareList",
                );
              return r.Body().toObject().saved_hardware ?? [];
            },
            enabled: n,
            staleTime: 300 * 1e3,
          };
        }
        const Bf = 1770934110;
        function If() {
          const s = (0, pn.jE)(),
            e = Ef();
          m.useEffect(() => {
            if (e)
              return SteamClient.BrowserView.RegisterForMessageFromParent(
                (r) => {
                  r == "OnCloseSaveHardwareDialog" &&
                    s.invalidateQueries({ queryKey: Mo(U.iA.steamid) });
                },
              ).unregister;
          }, [s, e]);
          const n = m.useCallback(() => {
            SteamClient.BrowserView.PostMessageToParent(
              "ShowSavedHardwareDialog",
              "",
            );
          }, []);
          return e ? n : void 0;
        }
        function Ef() {
          if (
            !(0, Po.Dp)("BrowserView.PostMessageToParent") ||
            !(0, Po.Dp)("BrowserView.RegisterForMessageFromParent")
          )
            return !1;
          const s = (0, vf.MP)();
          return s == 0 || s >= Bf;
        }
        var Pf = i(74049),
          To = i.n(Pf);
        const Mf = "6862-8119-C23E-EA7B",
          Tf = 8e3,
          Sf = za.Nb.filter((s) => s != "sc_schinese" && s != "arabic");
        function Lf(s) {
          const { appid: e, review: n } = s,
            { data: r } = (0, E.J$)({ appid: e }),
            { data: a } = (0, Os.jn)(U.iA.steamid),
            [o, c] = m.useState(() => Df(n)),
            [d, u] = m.useState(""),
            g = ff(e, n?.recommendationid),
            f = g.mutate,
            h = m.useCallback((D) => {
              c((C) => ({ ...C, ...D }));
            }, []),
            x = m.useCallback((D) => h({ review: D }), [h]),
            v = r?.name ?? "",
            I = m.useCallback(() => {
              if (!o.review?.trim()) {
                u(p.Localize("#AppPage_WriteReview_ErrorNoText"));
                return;
              }
              if (o.voted_up === void 0) {
                u(p.Localize("#AppPage_WriteReview_ErrorNoRating", v));
                return;
              }
              u(""), f(o);
            }, [o, f, v]);
          if (!r) return null;
          m.use(p.Ready()), m.use(Y.Z.Ready());
          const B = !!n,
            A = r.type ?? ne.uE.HT,
            S = g.error
              ? g.error.message ||
                p.Localize("#AppPage_WriteReview_ErrorPosting")
              : "";
          return (0, t.jsx)(Ut.YZ, {
            navEntryPreferPosition: z.iU.PREFERRED_CHILD,
            children: (0, t.jsxs)(O.s, {
              direction: "column",
              gap: "3",
              padding: "4",
              borderColor: "greyneutral-9 50%",
              children: [
                (0, t.jsx)(Of, { strAppName: v, eAppType: A, bUpdate: B }),
                (0, t.jsxs)(O.s, {
                  gap: "3",
                  children: [
                    !!a &&
                      (0, t.jsx)(ii.wm, {
                        playerLinkDetails: a,
                        size: "MediumLarge",
                        statusPosition: "border",
                        alt: "",
                      }),
                    (0, t.jsxs)(O.s, {
                      direction: "column",
                      gap: "3",
                      flexGrow: "1",
                      navProps: { preferredFocus: !0 },
                      children: [
                        (!!d || !!S) &&
                          (0, t.jsx)(b.EY, {
                            size: "3",
                            color: "red-10",
                            children: d || S,
                          }),
                        (0, t.jsx)(uf, {
                          value: o.review ?? "",
                          onTextChange: x,
                          placeholder: p.Localize(
                            "#AppPage_WriteReview_Placeholder",
                          ),
                          rows: 4,
                          maxLength: Tf,
                        }),
                        (0, t.jsx)(Af, {
                          review: o,
                          bFreeApp: !!r.is_free,
                          UpdateForm: h,
                        }),
                        (0, t.jsx)(Nf, {
                          bVotedUp: o.voted_up,
                          eAppType: A,
                          bUpdate: B,
                          bPosting: g.isPending,
                          UpdateForm: h,
                          OnSubmit: I,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Of(s) {
          const { strAppName: e, eAppType: n, bUpdate: r } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(b.EY, {
                size: "5",
                color: "blue-11",
                children: p.Localize(
                  r
                    ? "#AppPage_WriteReview_TitleUpdate"
                    : "#AppPage_WriteReview_Title",
                  e,
                ),
              }),
              (0, t.jsx)(b.EY, {
                size: "3",
                color: "greyneutral-11",
                children: (0, ve.xh)(
                  p.Localize(
                    p.GetAppTypeLocKey("#AppPage_WriteReview_Desc", n),
                  ),
                  (0, t.jsx)(Ot.Y, {
                    underline: "always",
                    color: "blue-8",
                    href: `${U.TS.HELP_BASE_URL}faqs/view/${Mf}`,
                  }),
                ),
              }),
              (0, dn.nA)(U.TS.EREALM) &&
                (0, t.jsx)(b.EY, {
                  size: "3",
                  color: "brown-10",
                  children: p.Localize("#AppPage_WriteReview_ChinaDisclaimer"),
                }),
            ],
          });
        }
        function Af(s) {
          const { review: e, bFreeApp: n, UpdateForm: r } = s,
            [a, o] = m.useState(!1),
            c = m.useCallback(() => o((B) => !B), []),
            d = m.useCallback((B) => r({ is_public: B.data }), [r]),
            u = m.useCallback((B) => r({ language: B.data }), [r]),
            g = m.useCallback((B) => r({ comments_disabled: !B }), [r]),
            f = m.useCallback((B) => r({ received_compensation: B }), [r]),
            h = p.Localize("#AppPage_WriteReview_Visibility"),
            x = p.Localize("#AppPage_WriteReview_Language"),
            v = [
              {
                label: p.Localize("#AppPage_WriteReview_VisibilityPublic"),
                data: !0,
              },
              {
                label: p.Localize("#AppPage_WriteReview_VisibilityFriends"),
                data: !1,
              },
            ],
            I = Sf.map((B) => ({ label: (0, Bo.$A)(B), data: B }));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(Le.$, {
                variant: "basic",
                color: "greyneutral",
                width: "100%",
                focusable: !0,
                onClick: c,
                children: (0, t.jsxs)(O.s, {
                  justify: "between",
                  align: "center",
                  width: "100%",
                  children: [
                    p.Localize("#AppPage_WriteReview_Settings"),
                    (0, t.jsx)(mf.V, { direction: a ? "up" : "down" }),
                  ],
                }),
              }),
              a &&
                (0, t.jsxs)(O.s, {
                  direction: "column",
                  gap: "2",
                  children: [
                    (0, t.jsxs)(O.s, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, t.jsx)(b.EY, { size: "3", children: h }),
                        U.iA.is_limited
                          ? (0, t.jsx)(b.EY, {
                              size: "3",
                              color: "greyneutral-11",
                              children: p.Localize(
                                "#AppPage_WriteReview_VisibilityLimited",
                              ),
                            })
                          : (0, t.jsx)(de.az, {
                              width: "50%",
                              children: (0, t.jsx)(fi.ZU, {
                                controlled: !0,
                                rgOptions: v,
                                selectedOption: !!e.is_public,
                                onChange: d,
                                menuLabel: h,
                              }),
                            }),
                      ],
                    }),
                    !(0, dn.nA)(U.TS.EREALM) &&
                      (0, t.jsxs)(O.s, {
                        justify: "between",
                        align: "center",
                        gap: "2",
                        children: [
                          (0, t.jsx)(b.EY, { size: "3", children: x }),
                          (0, t.jsx)(de.az, {
                            width: "50%",
                            children: (0, t.jsx)(fi.ZU, {
                              controlled: !0,
                              rgOptions: I,
                              selectedOption: e.language,
                              onChange: u,
                              menuLabel: x,
                              strDefaultLabel: (0, Bo.$A)(e.language ?? ""),
                            }),
                          }),
                        ],
                      }),
                    (0, t.jsx)(pi.S, {
                      checked: !e.comments_disabled,
                      onChange: g,
                      children: (0, t.jsx)(b.EY, {
                        size: "3",
                        children: p.Localize(
                          "#AppPage_WriteReview_AllowComments",
                        ),
                      }),
                    }),
                    (0, t.jsx)(zf, {
                      strSavedHardwareID: e.saved_hardware_id,
                      UpdateForm: r,
                    }),
                    !n &&
                      (0, t.jsx)(pi.S, {
                        checked: !!e.received_compensation,
                        onChange: f,
                        children: (0, t.jsx)(b.EY, {
                          size: "3",
                          children: p.Localize(
                            "#AppPage_WriteReview_ReceivedFree",
                          ),
                        }),
                      }),
                    (0, t.jsx)(gf, { color: "greyneutral-9 50%", size: "4" }),
                  ],
                }),
            ],
          });
        }
        function zf(s) {
          const { strSavedHardwareID: e, UpdateForm: n } = s,
            [r, a] = m.useState(!!e),
            { data: o, isPending: c } = jf(r),
            d = If(),
            u = m.useCallback(
              (v) => {
                a(v), v || n({ saved_hardware_id: void 0 });
              },
              [n],
            ),
            g = m.useCallback((v) => n({ saved_hardware_id: v.data }), [n]),
            f = o?.[0]?.hardware_id;
          m.useEffect(() => {
            r && !e && f && n({ saved_hardware_id: f });
          }, [r, e, f, n]);
          const h = p.Localize("#AppPage_WriteReview_PCSpecs"),
            x = (o ?? []).map((v) => ({
              label: v.friendly_name ?? "",
              data: v.hardware_id ?? "",
            }));
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(pi.S, {
                checked: r,
                onChange: u,
                children: (0, t.jsx)(b.EY, {
                  size: "3",
                  children: p.Localize("#AppPage_WriteReview_AttachHardware"),
                }),
              }),
              r &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)(O.s, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, t.jsx)(b.EY, { size: "3", children: h }),
                        (0, t.jsx)(de.az, {
                          width: "50%",
                          children: (0, t.jsx)(fi.ZU, {
                            controlled: !0,
                            disabled: !x.length,
                            rgOptions: x,
                            selectedOption: e,
                            onChange: g,
                            menuLabel: h,
                            strDefaultLabel: c
                              ? Y.Z.Localize("#Loading")
                              : p.Localize("#AppPage_WriteReview_PCSpecsNone"),
                          }),
                        }),
                      ],
                    }),
                    !!d &&
                      (0, t.jsx)(O.s, {
                        justify: "end",
                        children: (0, t.jsx)(Le.$, {
                          focusable: !0,
                          variant: "basic",
                          color: "greyneutral",
                          onClick: d,
                          children: p.Localize("#AppPage_WriteReview_AddPC"),
                        }),
                      }),
                  ],
                }),
            ],
          });
        }
        function Nf(s) {
          const {
              bVotedUp: e,
              eAppType: n,
              bUpdate: r,
              bPosting: a,
              UpdateForm: o,
              OnSubmit: c,
            } = s,
            d = m.useCallback(() => o({ voted_up: !0 }), [o]),
            u = m.useCallback(() => o({ voted_up: !1 }), [o]);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(O.s, {
                direction: "column",
                gap: "2",
                children: [
                  (0, t.jsx)(b.EY, {
                    size: "4",
                    children: p.Localize(
                      p.GetAppTypeLocKey("#AppPage_WriteReview_Recommend", n),
                    ),
                  }),
                  (0, t.jsxs)(O.s, {
                    gap: "2",
                    children: [
                      (0, t.jsx)(So, {
                        bThumbsUp: !0,
                        bSelected: e === !0,
                        onSelect: d,
                      }),
                      (0, t.jsx)(So, {
                        bThumbsUp: !1,
                        bSelected: e === !1,
                        onSelect: u,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(O.s, {
                justify: "end",
                children: (0, t.jsx)(Le.$, {
                  focusable: !0,
                  color: "blue",
                  loading: a,
                  onClick: c,
                  children: p.Localize(
                    r
                      ? "#AppPage_WriteReview_Update"
                      : "#AppPage_WriteReview_Post",
                  ),
                }),
              }),
            ],
          });
        }
        function So(s) {
          const { bThumbsUp: e, bSelected: n, onSelect: r } = s;
          return (0, t.jsx)(Le.$, {
            focusable: !0,
            variant: "basic",
            color: n ? "blue" : "greyneutral",
            onClick: r,
            children: (0, t.jsxs)(O.s, {
              direction: "row",
              gap: "1",
              align: "center",
              children: [
                (0, t.jsx)(N.twC, {
                  className: (0, F.A)(
                    To().VerdictIcon,
                    !e && To().VerdictIconDown,
                  ),
                }),
                (0, t.jsx)(b.EY, {
                  size: "4",
                  contrast: "title",
                  children: p.Localize(
                    e
                      ? "#AppPage_WriteReview_RecommendYes"
                      : "#AppPage_WriteReview_RecommendNo",
                  ),
                }),
              ],
            }),
          });
        }
        function Df(s) {
          const e = (0, dn.nA)(U.TS.EREALM);
          return s
            ? {
                ...s,
                language: e || !s.language ? Lo() : s.language,
                comments_disabled: s.comments_disabled || e,
                is_public: s.is_public && !U.iA.is_limited,
              }
            : {
                is_public: !U.iA.is_limited,
                language: Lo(),
                comments_disabled: e,
              };
        }
        function Lo() {
          return (0, dn.nA)(U.TS.EREALM)
            ? "schinese"
            : U.TS.LANGUAGE == "korean"
              ? "koreana"
              : U.TS.LANGUAGE;
        }
        function Ff(s) {
          const { appid: e, ownReview: n } = s,
            r = J0(e),
            [a, o] = m.useState(!1);
          return (
            m.useEffect(() => {
              r(n), o(!0);
            }, [n, r]),
            a ? (0, t.jsx)(Wf, { appid: e }) : null
          );
        }
        function Wf(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = $0(e),
            a = (0, Gt.AP)(e),
            [o, c] = m.useState(!1),
            d = m.useCallback(() => c(!0), []);
          return n
            ? (0, t.jsx)(O.s, {
                direction: "column",
                paddingX: "5",
                paddingY: "3",
                background: "greyneutral-2 80%",
                children:
                  r && !o
                    ? (0, t.jsx)(ef, {
                        review: r,
                        eAppType: n.type,
                        nSteamworksAppid: a,
                        onEdit: d,
                      })
                    : (0, t.jsx)(Lf, { appid: e, review: r ?? null }),
              })
            : null;
        }
        var Rf = i(27990),
          wf = i(48338),
          Uf = i.n(wf),
          Cf = i(75995),
          Nn = i.n(Cf);
        const Oo = {
          2023: Nn().Year2023,
          2024: Nn().Year2024,
          2025: Nn().Year2025,
        };
        function Kf(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            r = (n?.steam_award ?? [])
              .filter((a) => !!a.localization?.title && !!Oo[a.award_year])
              .sort((a, o) => o.award_year - a.award_year);
          return r.length
            ? (0, t.jsx)(O.s, {
                direction: "column",
                gap: "4",
                children: r.map((a) =>
                  (0, t.jsx)(Gf, { award: a }, `${a.award_year}_${a.voteid}`),
                ),
              })
            : null;
        }
        function Gf(s) {
          const { award: e } = s,
            n = e.award_year,
            r = (0, Qt.aL)(`${U.TS.STORE_BASE_URL}steamawards/${n}/`);
          return (0, t.jsxs)(P.Ii, {
            className: (0, F.A)(Nn().Banner, Oo[n]),
            href: r,
            children: [
              (0, t.jsxs)("div", {
                className: Nn().Titles,
                children: [
                  (0, t.jsx)("span", {
                    className: Nn().AwardsTitle,
                    children: p.Localize("#AppPage_SteamAwards_Title"),
                  }),
                  (0, t.jsx)("span", { className: Nn().Year, children: n }),
                ],
              }),
              (0, t.jsx)("div", {
                className: Nn().Winner,
                children: p.Localize("#AppPage_SteamAwards_Winner"),
              }),
              (0, t.jsx)("div", {
                className: Nn().Category,
                children: e.localization.title,
              }),
            ],
          });
        }
        var Yf = i(72390),
          as = i.n(Yf);
        function kf(s) {
          const { appid: e } = s,
            { metacritic: n, app: r, bShow: a, nScore: o } = Ao(e);
          return (
            m.use(p.Ready()),
            !a || !r
              ? null
              : (0, t.jsxs)(O.s, {
                  align: "start",
                  paddingY: "2",
                  direction: "row",
                  children: [
                    (0, t.jsx)(O.s, {
                      className: (0, F.A)(
                        as().Score,
                        o > 0 ? Vf(o, r.type) : as().Low,
                      ),
                      width: "50px",
                      height: "50px",
                      flexShrink: "0",
                      align: "center",
                      justify: "center",
                      children: o > 0 ? o : "NA",
                    }),
                    (0, t.jsxs)(O.s, {
                      direction: "column",
                      paddingLeft: "2",
                      children: [
                        (0, t.jsx)($f, {}),
                        o > 0
                          ? n?.url && (0, t.jsx)(Qf, { url: n.url })
                          : (0, t.jsx)(b.EY, {
                              size: "2",
                              children: p.Localize(
                                "#AppPage_Metacritic_NotReviewed",
                              ),
                            }),
                      ],
                    }),
                  ],
                })
          );
        }
        function Ao(s) {
          const { data: e } = (0, E.J$)({ appid: s }),
            { data: n } = (0, E._F)({ appid: s }),
            r = e?.type === ne.uE.ue ? e.related_items?.parent_appid : void 0,
            { data: a } = (0, E._F)(r ? { appid: r } : void 0);
          if (!e) return { bShow: !1, nScore: 0 };
          const o = n?.metacritic,
            c = (r ? a?.metacritic?.score : o?.score) ?? 0;
          return {
            metacritic: o,
            app: e,
            nScore: c,
            bShow: !!o?.always_show || c > 0,
          };
        }
        function Vf(s, e) {
          const n = e === ne.uE.Wz || e === ne.uE.gQ,
            r = n ? 61 : 75,
            a = n ? 40 : 50;
          return s >= r ? as().High : s >= a ? as().Medium : as().Low;
        }
        function Qf(s) {
          const { url: e } = s;
          return (0, t.jsxs)(Ot.Y, {
            size: "2",
            color: "blue-8",
            href: w.TS.IN_CLIENT ? `steam://openurl/${e}` : e,
            target: w.TS.IN_CLIENT ? void 0 : "_blank",
            children: [
              p.Localize("#AppPage_Metacritic_ReadCriticReviews"),
              (0, t.jsx)("span", {
                className: as().ExternalIcon,
                children: (0, t.jsx)(N.GrD, {}),
              }),
            ],
          });
        }
        function $f(s) {
          return (0, t.jsxs)(O.s, {
            direction: "row",
            gap: "1",
            align: "center",
            children: [
              (0, t.jsx)(tn, {
                src: `${w.TS.IMG_URL}v6/mc_logo_no_text.png`,
                alt: "",
                width: "24px",
                height: "24px",
                flexShrink: "0",
              }),
              (0, t.jsx)(b.EY, {
                size: "7",
                weight: "heavy",
                contrast: "title",
                children: "metacritic",
              }),
            ],
          });
        }
        function Zf(s) {
          const { appid: e } = s,
            { data: n } = (0, E._F)({ appid: e }),
            { bShow: r } = Ao(e);
          m.use(p.Ready());
          const a =
              n?.partner_awards_bbcode && n.partner_awards_bbcode.length > 0,
            o = n?.steam_award && n.steam_award.length > 0;
          return (
            console.log("Rendering steam awards", s),
            !a && !o && !r
              ? null
              : (0, t.jsxs)(Fa, {
                  className: Uf().StoreAwards,
                  "flow-children": "column",
                  children: [
                    (0, t.jsx)(tr, {
                      text: p.Localize("#AppPage_Awards_Header"),
                    }),
                    (0, t.jsx)(kf, { appid: e }),
                    (0, t.jsx)(Kf, { appid: e }),
                    n?.partner_awards_bbcode &&
                      (0, t.jsx)(Ps.n, { text: n.partner_awards_bbcode }),
                  ],
                })
          );
        }
        var mr = i(23386),
          zo = i(25509),
          Jf = i(30452),
          No = i.n(Jf),
          Xf = i(94255),
          Jt = i.n(Xf);
        function yi(s) {
          const {
              title: e,
              link_text: n,
              url: r,
              linkType: a = "inline",
              children: o,
              total_count: c,
              link_footer: d,
              block_footer: u,
            } = s,
            g = (0, w.Qn)(),
            f = g
              ? (0, t.jsx)(b.EY, {
                  contrast: "title",
                  size: "2",
                  weight: "heavy",
                  style: { letterSpacing: "0.5px" },
                  children: e,
                })
              : (0, t.jsx)(b.EY, {
                  contrast: "body",
                  size: "2",
                  weight: "regular",
                  children: e,
                }),
            h = a == "inline" ? Jt().InlineLink : Jt().OverlayLink;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(_f, { title: e, link_text: n ?? xi(c), url: r }),
              (0, t.jsx)("div", {
                className: "noOpinionatedGlobalStyles",
                children: (0, t.jsxs)(O.s, {
                  direction: "column",
                  gap: "2",
                  className: Jt().ShopLink,
                  children: [
                    (0, t.jsx)(P.Ii, {
                      className: (0, F.A)(h, Jt().Link),
                      "flow-children": "column",
                      focusClassName: Jt().ShowLink,
                      focusable: !0,
                      href: r,
                      "aria-label": xi(c),
                      children: (0, t.jsxs)(O.s, {
                        direction: "column",
                        gap: g ? "1" : "2",
                        children: [
                          f,
                          (0, t.jsxs)(qs.x, {
                            autoFlow: "column",
                            autoColumns: "1fr",
                            gap: "2",
                            alignItems: "center",
                            justifyContent: "center",
                            className: Jt().Items,
                            children: [o, (0, t.jsx)(qf, { total_count: c })],
                          }),
                          n &&
                            (0, t.jsx)("div", {
                              className: Jt().ActivateLabel,
                              children: (0, t.jsx)(de.az, {
                                background: "blue-8",
                                padding: "2",
                                radius: "sm",
                                children: (0, t.jsx)(b.EY, {
                                  size: "2",
                                  contrast: "title",
                                  children: n,
                                }),
                              }),
                            }),
                          d,
                        ],
                      }),
                    }),
                    u,
                  ],
                }),
              }),
            ],
          });
        }
        function Hf(s) {
          return s == null
            ? p.Localize("#ShopLink_ViewAll_NoCount_Narrow")
            : s >= 1e3
              ? p.Localize(
                  "#ShopLink_ViewAll_NarrowThousands",
                  (s / 1e3).toFixed(),
                )
              : p.Localize("#ShopLink_ViewAll_NarrowUnderThousand", s);
        }
        function xi(s) {
          return s == null
            ? p.Localize("#ShopLink_ViewAll_NoCount")
            : s >= 1e3
              ? p.Localize(
                  "#ShopLink_ViewAll_WideThousands",
                  (s / 1e3).toFixed(),
                )
              : p.Localize("#ShopLink_ViewAll_WideUnderThousand", s);
        }
        function qf(s) {
          const { total_count: e } = s;
          return (0, t.jsx)(qs.x, {
            className: Jt().AllText,
            height: "100%",
            background: "greyneutral-5",
            children: (0, t.jsxs)(de.az, {
              alignSelf: "center",
              textAlign: "center",
              justifySelf: "center",
              children: [
                (0, t.jsx)(b.EY, {
                  contrast: "description",
                  className: Jt().Wide,
                  children: xi(e),
                }),
                (0, t.jsx)(b.EY, {
                  contrast: "description",
                  className: Jt().Narrow,
                  children: Hf(e),
                }),
              ],
            }),
          });
        }
        function _f(s) {
          const { title: e, link_text: n, url: r } = s;
          return (0, t.jsx)("a", {
            href: r,
            className: Jt().ResponsiveLink,
            children: (0, t.jsxs)(O.s, {
              direction: "row",
              background: "blue-3",
              padding: "2",
              align: "center",
              children: [
                (0, t.jsxs)(b.EY, {
                  contrast: "subtitle",
                  className: Jt().Text,
                  children: [e, " - ", n],
                }),
                (0, t.jsx)(b.EY, {
                  contrast: "subtitle",
                  className: Jt().Arrow,
                  children: (0, t.jsx)(Fe.cLJ, { direction: "right" }),
                }),
              ],
            }),
          });
        }
        function eh(s, e) {
          switch (e.item_class) {
            case mr.sU:
            case mr.zs:
              return `${ws.TS.COMMUNITY_CDN_URL}economy/profilebackground/items/${s}/${e.image_large}?size=320x200`;
            case mr.Tl:
              return (0, zo.k)(s, e.image_small);
            default:
              return (0, zo.k)(s, e.image_large);
          }
        }
        function th(s) {
          const { appid: e, items: n, total_count: r, shop_url: a } = s;
          return (
            m.use(p.Ready()),
            n?.length
              ? (0, t.jsx)(yi, {
                  title: p.Localize("#AppPage_PointsShop_Header"),
                  url: a,
                  total_count: r,
                  children: n.map((o) =>
                    (0, t.jsx)(
                      de.az,
                      {
                        alignSelf: "center",
                        children: (0, t.jsx)(tn, {
                          className: (0, F.A)(
                            No().ItemImage,
                            o.item_class == mr.sU && No().ProfileBackground,
                          ),
                          src: eh(e, o),
                          alt: o.title,
                        }),
                      },
                      o.defid,
                    ),
                  ),
                })
              : null
          );
        }
        var nh = i(30820),
          vi = i.n(nh);
        const Do = 256;
        function sh(s) {
          const e = `${ws.TS.COMMUNITY_CDN_URL}economy/image/${s}/${Do}fx${Do}f`;
          return { src: e, srcSet: `${e} 1x, ${e}dpx2x 2x` };
        }
        function rh(s) {
          const { items: e, shop_url: n } = s;
          return (
            m.use(p.Ready()),
            e?.length
              ? (0, t.jsx)(yi, {
                  title: p.Localize("#AppPage_ItemShop_Header"),
                  link_text: p.Localize("#AppPage_ItemShop_ShopAll"),
                  url: n,
                  linkType: "overlay",
                  children: e.map((r) =>
                    (0, t.jsxs)(
                      de.az,
                      {
                        className: vi().Item,
                        textAlign: "center",
                        children: [
                          (0, t.jsx)(tn, {
                            className: vi().ItemImage,
                            ...sh(r.icon_url),
                            alt: r.name,
                          }),
                          (0, t.jsx)(b.EY, {
                            size: "2",
                            weight: "heavy",
                            className: vi().Price,
                            children: r.price,
                          }),
                        ],
                      },
                      r.itemdefid,
                    ),
                  ),
                })
              : null
          );
        }
        const Fo = "steamQueryPersist";
        function Sx(s) {
          return s.meta?.[Fo];
        }
        const Wo = m.createContext(void 0),
          Lx = Wo.Provider;
        function Ro(s) {
          const { area: e, maxAgeSeconds: n, meta: r, ...a } = s,
            o = m.useContext(Wo),
            c = m.useMemo(() => wo(r, e, n), [r, e, n]);
          return (0, an.I)({ ...a, meta: c, persister: o?.GetPersister(e) });
        }
        function wo(s, e, n) {
          return { ...s, [Fo]: { area: e, maxAgeSeconds: n } };
        }
        async function Ox(s, e) {
          const { area: n, maxAgeSeconds: r, meta: a, ...o } = e,
            c = { ...o, meta: wo(a, n, r), staleTime: 0 },
            d = s.getQueryState(o.queryKey);
          d &&
            d.fetchStatus !== "idle" &&
            (await s.fetchQuery(c).catch(() => {})),
            await s.fetchQuery(c);
        }
        const ih = Date.now();
        function Ax(s) {
          return s > 0 && s < ih;
        }
        var Uo = i(27386);
        const zs = 0;
        function ji(s, ...e) {
          return ["achievements", s, ...e];
        }
        const ah = (s) => ji(s, "schema");
        function Co(s, e) {
          if (!(e === void 0 || e === ""))
            return `${U.TS.BASE_URL_SHARED_CDN}community_assets/images/apps/${s}/${e}`;
        }
        async function oh(s, e, n) {
          const r = await Uo.xtC.GetGameAchievements(s, {
            appid: e,
            language: n,
          });
          if (r.GetEResult() === en.p)
            return {
              appid: e,
              language: n,
              groups: [],
              schema_hash: 0,
              schema_version: 0,
            };
          if (r.GetEResult() !== en.R)
            throw (
              (console.error(
                "Received error from GetGameAchievements",
                r.GetEResult(),
              ),
              new Error(`Error from GetGameAchievements: ${r.GetEResult()}`))
            );
          const a = {};
          a[zs] = {
            id: zs,
            archived: !1,
            developeronly: !1,
            ispublic: !0,
            dlcappid: 0,
            order: -1,
            achievements: [],
          };
          const o = r.Body().groups().toString();
          r
            .Body()
            .groups()
            .forEach((u) => {
              const g = u.groupid();
              a[g] = {
                id: g,
                name: u.localized_name(),
                archived: u.archived() ?? !1,
                ispublic: u.ispublic() ?? !0,
                developeronly: u.developeronly() ?? !1,
                dlcappid: u.dlcappid() ?? 0,
                order: u.order() ?? 0,
                achievements: [],
              };
            }),
            r
              .Body()
              .toObject()
              ?.achievements?.forEach((u) => {
                const g = u.groupid ?? zs;
                a[g].achievements.push({
                  internal_key: u.internal_key ?? 0,
                  api_name: u.internal_name ?? "",
                  name: u.localized_name,
                  description: u.localized_desc,
                  hidden: u.hidden ?? !1,
                  archived: u.archived ?? !1,
                  icon_achieved: Co(e, u.icon),
                  icon_unachieved: Co(e, u.icon_gray),
                  groupid: u.groupid ?? zs,
                  min_progress: u.min_progress_int ?? u.min_progress_float,
                  max_progress: u.max_progress_int ?? u.max_progress_float,
                });
              });
          const c = Object.values(a)
            .filter((u) => u.achievements.length > 0)
            .sort((u, g) => u.order - g.order);
          return {
            appid: e,
            language: n,
            groups: c,
            schema_hash: r.Body()?.schema_hash() ?? 0,
            schema_version: r.Body()?.schema_version() ?? 0,
          };
        }
        const lh = (s) => ji(s, "globalpercentages");
        async function ch(s, e) {
          const n = await Uo.xtC.GetGlobalAchievementPercentages(s, {
            appid: e,
          });
          if (n.GetEResult() === en.p) return { percentages: {} };
          if (n.GetEResult() !== en.R)
            throw (
              (console.error(
                "Received error from GetGlobalAchievementPercentages",
                n.GetEResult(),
              ),
              new Error(
                `Error from GetGlobalAchievementPercentages: ${n.GetEResult()}`,
              ))
            );
          return {
            percentages: n
              .Body()
              .achievements()
              .reduce((a, o) => {
                const c = o.internal_key();
                return (
                  c === void 0 || (a[c] = o.player_percent_unlocked() ?? 0.1), a
                );
              }, {}),
          };
        }
        function zx(s, e) {
          return ji(s, "user_achievements", e);
        }
        function bi(s, e, n, r) {
          const a = (n?.achievements() ?? []).reduce((c, d) => {
              const u = d.internal_key();
              return (
                (c[u] = {
                  internal_key: u,
                  unlocked: d.unlocked(),
                  unlock_time: d.unlock_time(),
                  progress: d.progress_int() ?? d.progress_float(),
                }),
                c
              );
            }, {}),
            o = (n?.groups() ?? []).reduce((c, d) => {
              const u = d.groupid(),
                g = d.is_completed(),
                f = d.time_completed();
              return (
                (c[u] = {
                  groupid: u,
                  is_achievable: d.is_achievable(),
                  completed_achievements: d.completed_achievements() ?? 0,
                  is_completed: g === void 0 ? !1 : g,
                  time_completed: f || void 0,
                }),
                c
              );
            }, {});
          return {
            appid: s,
            steamid: e,
            achievements: a,
            groups: o,
            schema_hash: r,
          };
        }
        function Nx(s, e) {
          if (!s) return e;
          const n = { ...s.groups };
          for (const r of Object.values(e.groups)) {
            const a = s.groups[r.groupid];
            n[r.groupid] = {
              ...r,
              is_completed: (a?.is_completed ?? !1) || r.is_completed,
              time_completed: a?.time_completed ?? r.time_completed,
            };
          }
          return {
            ...s,
            achievements: { ...s.achievements, ...e.achievements },
            groups: n,
          };
        }
        class dh extends Error {
          constructor() {
            super("GetUserAchievements: server unreachable");
          }
        }
        function uh(s) {
          const e = s.Hdr().transport_error();
          return e === k_ETransportError_RequestNotSent ||
            e === k_ETransportError_ResponseNotReceived
            ? !0
            : s.GetEResult() === k_EResultNoConnection ||
                s.GetEResult() === k_EResultTimeout;
        }
        async function Dx(s, e, n) {
          if (n == "" || n == "0") return bi(e, n, void 0, 0);
          const r = await PlayerService.GetUserAchievements(s, {
            appid: e,
            steamid: n,
          });
          if (
            r.GetEResult() === k_EResultAccessDenied ||
            r.GetEResult() === k_EResultAccountNotFound
          )
            return bi(e, n, void 0, 0);
          if (uh(r)) throw new dh();
          if (r.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from GetUserAchievements",
                r.GetEResult(),
              ),
              new Error(`Error from GetUserAchievements: ${r.GetEResult()}`))
            );
          return bi(e, n, r.Body(), r.Body()?.schema_hash() ?? 0);
        }
        const he = {};
        (he.arabic = () => i.e(94507).then(i.t.bind(i, 94507, 19))),
          (he.brazilian = () => i.e(29815).then(i.t.bind(i, 29815, 19))),
          (he.bulgarian = () => i.e(79200).then(i.t.bind(i, 79200, 19))),
          (he.czech = () => i.e(81142).then(i.t.bind(i, 81142, 19))),
          (he.danish = () => i.e(42394).then(i.t.bind(i, 42394, 19))),
          (he.dutch = () => i.e(80559).then(i.t.bind(i, 80559, 19))),
          (he.english = () => i.e(92885).then(i.t.bind(i, 92885, 19))),
          (he.finnish = () => i.e(22754).then(i.t.bind(i, 22754, 19))),
          (he.french = () => i.e(89627).then(i.t.bind(i, 89627, 19))),
          (he.german = () => i.e(8281).then(i.t.bind(i, 8281, 19))),
          (he.greek = () => i.e(53749).then(i.t.bind(i, 53749, 19))),
          (he.hungarian = () => i.e(88180).then(i.t.bind(i, 88180, 19))),
          (he.indonesian = () => i.e(13303).then(i.t.bind(i, 13303, 19))),
          (he.italian = () => i.e(28757).then(i.t.bind(i, 28757, 19))),
          (he.japanese = () => i.e(88468).then(i.t.bind(i, 88468, 19))),
          (he.koreana = () => i.e(82558).then(i.t.bind(i, 82558, 19))),
          (he.latam = () => i.e(3894).then(i.t.bind(i, 3894, 19))),
          (he.malay = () => i.e(35957).then(i.t.bind(i, 35957, 19))),
          (he.norwegian = () => i.e(43081).then(i.t.bind(i, 43081, 19))),
          (he.polish = () => i.e(63822).then(i.t.bind(i, 63822, 19))),
          (he.portuguese = () => i.e(16470).then(i.t.bind(i, 16470, 19))),
          (he.romanian = () => i.e(46488).then(i.t.bind(i, 46488, 19))),
          (he.russian = () => i.e(50272).then(i.t.bind(i, 50272, 19))),
          (he.sc_schinese = () => i.e(88794).then(i.t.bind(i, 88794, 19))),
          (he.schinese = () => i.e(15171).then(i.t.bind(i, 15171, 19))),
          (he.spanish = () => i.e(34341).then(i.t.bind(i, 34341, 19))),
          (he.swedish = () => i.e(61844).then(i.t.bind(i, 61844, 19))),
          (he.tchinese = () => i.e(71088).then(i.t.bind(i, 71088, 19))),
          (he.thai = () => i.e(49829).then(i.t.bind(i, 49829, 19))),
          (he.turkish = () => i.e(95917).then(i.t.bind(i, 95917, 19))),
          (he.ukrainian = () => i.e(15151).then(i.t.bind(i, 15151, 19))),
          (he.vietnamese = () => i.e(53460).then(i.t.bind(i, 53460, 19)));
        async function mh(s) {
          if (he[s]) return he[s]();
        }
        const Ko = (0, xr.l)(mh);
        function gh(s) {
          return {
            ...s,
            groups: s.groups.map((e) =>
              e.id === zs
                ? { ...e, name: Ko.Localize("#Achievements_Set_BaseGame") }
                : e,
            ),
          };
        }
        function Go(s, e) {
          return {
            queryKey: ah(e),
            queryFn: async () => {
              const n = U.TS.LANGUAGE;
              return oh(s, e, n);
            },
            select: gh,
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function Yo(s) {
          const e = (0, Xt.KV)();
          return Ro(Go(e, s));
        }
        function ph(s, e) {
          return {
            queryKey: lh(e),
            queryFn: async () => ch(s, e),
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function Bi(s) {
          const e = (0, Xt.KV)();
          return Ro(ph(e, s));
        }
        function Fx(s, e) {
          const { data: n } = Bi(s);
          if (n) return n.percentages[e] ?? void 0;
        }
        function Ii(s, e, n) {
          return {
            queryKey: GetUserAchievementsQueryKey(e, n),
            queryFn: async () => GetUserAchievements(s, e, n),
            staleTime: 600 * 1e3,
            area: "achievements",
          };
        }
        function ko(s, e, n) {
          const { fnFetchLocalUserAchievements: r } = useAchievementsHost(),
            a = !!r && !!e && n.error instanceof ServerUnreachableError,
            o = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "local_user_achievements",
                e,
                n.errorUpdatedAt,
              ),
              queryFn: async () => (await r(s, e)) ?? null,
              enabled: a,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
            }),
            c = a ? o.data : void 0,
            d = o.dataUpdatedAt;
          return useMemo(
            () =>
              c
                ? {
                    ...n,
                    data: MergeLocalUserAchievements(n.data, c),
                    dataUpdatedAt: Math.max(n.dataUpdatedAt, d),
                  }
                : n,
            [n, c, d],
          );
        }
        function Wx(s, e) {
          const n = useActiveServiceTransport(),
            r = usePersistedQuery(Ii(n, s, e));
          return ko(s, e, r);
        }
        function Rx(s, e) {
          const n = useActiveServiceTransport(),
            r = Yo(s),
            a = Bi(s),
            o = usePersistedQuery({ ...Ii(n, s, e ?? ""), enabled: !!e }),
            c = ko(s, e ?? "", o),
            d = !!e,
            u = r.data,
            g = d ? c.data : void 0,
            f = u != null && (!d || g !== void 0),
            h = () => (f ? GetAchievementsSummary(u, a.data, g) : void 0),
            x = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                s,
                "summary",
                e ?? "",
                r.dataUpdatedAt,
                a.dataUpdatedAt,
                d ? c.dataUpdatedAt : 0,
              ),
              queryFn: () => {
                const D = h();
                if (D === void 0)
                  throw new Error("No achievements schema to summarize");
                return D;
              },
              initialData: h,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: f,
            }),
            v = d ? [r, c] : [r],
            I = v.find((D) => D.data === void 0),
            B = I?.isPending ?? !1,
            A = v.find((D) => D.isError),
            S = I ? void 0 : x.data;
          return {
            isPending: B,
            isError: !B && S === void 0,
            error: A?.error ?? null,
            data: S,
          };
        }
        async function wx(s, e, n, r) {
          await FetchPersistedQuery(s, Ii(e, n, r));
        }
        async function Ux(s, e, n) {
          await FetchPersistedQuery(s, Go(e, n));
        }
        var fh = i(93237),
          Dn = i.n(fh);
        const hh = 10;
        function yh(s) {
          return s === void 0 ? !1 : s <= hh;
        }
        function Cx(s) {
          return (s?.groups_achievable?.total ?? 0) != 0;
        }
        function xh(s, e) {
          return s.achievements.some(
            (n) =>
              (!s.archived && !n.archived) ||
              e?.achievements[n.internal_key]?.unlocked == !0,
          );
        }
        function Kx(s, e) {
          if (Array.isArray(s))
            return (
              s.length > 1 ||
              (s.length == 1 && s[0] !== k_DefaultAchievementGroup)
            );
          {
            const n = s.groups.filter((r) => xh(r, e));
            return (
              n.length > 1 ||
              (n.length == 1 && n[0].id !== k_DefaultAchievementGroup)
            );
          }
        }
        function Gx(s, e) {
          return new Intl.DateTimeFormat(GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hourCycle: e ? "h23" : void 0,
          }).format(new Date(s * 1e3));
        }
        function Yx(s, e) {
          const n = e > 0 ? s / e : 0,
            r = n.toLocaleString(GetPreferredLocales(), {
              style: "percent",
              maximumFractionDigits: e > 100 ? 1 : 0,
            });
          return { percentUnlocked: n, percentUnlockedStr: r };
        }
        function kx(s) {
          return ((s ?? 0) / 100).toLocaleString(GetPreferredLocales(), {
            style: "percent",
            maximumFractionDigits: 1,
            minimumFractionDigits: 1,
          });
        }
        function Vx(s) {
          return s >= 17891964e-1;
        }
        function vh(s) {
          if (s !== void 0)
            return { "--icon-size": s == "fill" ? "100%" : `${s}px` };
        }
        function jh(s) {
          const {
              imgURL: e,
              glow: n,
              pauseAnimation: r,
              hidden: a,
              alt: o,
              hideNativeTooltip: c = !1,
              className: d,
              size: u,
              ...g
            } = s,
            [f, h] = m.useState(!1),
            x = m.useCallback((B) => {
              B &&
                (B.complete
                  ? h(!0)
                  : (B.onload = () => {
                      h(!0);
                    }));
            }, []),
            v = n && (a || f),
            I = vh(u);
          return (0, t.jsxs)("div", {
            className: (0, F.A)(
              Dn().AchievementIconWrapper,
              d,
              r && Dn().RareAchievementNoAnimation,
            ),
            style: I,
            ...g,
            children: [
              v &&
                (0, t.jsx)("div", {
                  className: Dn().RareAchievementIconGlowContainerRoot,
                  children: (0, t.jsx)("div", {
                    className: Dn().RareAchievementIconGlowContainer,
                    children: (0, t.jsx)("div", {
                      className: Dn().RareAchievementIconGlow,
                    }),
                  }),
                }),
              a
                ? (0, t.jsx)("div", {
                    className: (0, F.A)(Dn().HiddenLabel, v && Dn().IconGlow),
                    children: "?",
                  })
                : (0, t.jsx)("img", {
                    ref: x,
                    className: (0, F.A)(Dn().Icon, v && Dn().IconGlow),
                    src: e == "" ? void 0 : e,
                    loading: "lazy",
                    alt: o,
                    title: c ? void 0 : o,
                  }),
            ],
          });
        }
        function Vo(s) {
          const {
              achievement: e,
              globalUnlockPercentage: n,
              unlocked: r,
              forceVisible: a = !1,
              hidden: o,
              ...c
            } = s,
            d = o ?? (r ? !1 : !a && e.hidden),
            u = (r ? e.icon_achieved : e.icon_unachieved) ?? "",
            g = r && yh(n),
            f = d ? Ko.Localize("#AchievementSpoilerName") : (e.name ?? " ");
          return (0, t.jsx)(jh, {
            hidden: d,
            imgURL: u,
            glow: g,
            alt: f,
            ...c,
          });
        }
        function Qx(s) {
          const {
              hidden: e,
              forceVisible: n,
              size: r,
              className: a,
              style: o,
              unlocked: c,
              ...d
            } = s,
            { appid: u, achievement: g, progress: f } = d,
            h = useGlobalAchievementPercentage(u, g.internal_key);
          return jsx(AchievementToolTip, {
            ...d,
            children: jsx(Vo, {
              achievement: g,
              globalUnlockPercentage: h,
              unlocked: c ?? f?.unlocked ?? !1,
              hidden: e,
              forceVisible: n,
              size: r,
              className: a,
              style: o,
              hideNativeTooltip: !0,
            }),
          });
        }
        function bh(s, e) {
          const { data: n } = Yo(s);
          if (!n || e) return;
          const r = new Set();
          let a = 0;
          const o = [];
          for (const c of n.groups) {
            const d = c.achievements.filter((u) => !u.archived);
            if (!(!d || !d?.length || c.archived)) {
              if (e) {
                if (c.dlcappid != e) continue;
              } else if (c.dlcappid) {
                r.add(c.dlcappid);
                continue;
              }
              o.push(...d), a++;
            }
          }
          if (o?.length)
            return { achievements: o, nDLCCount: 0, nGroupCount: 1 };
        }
        function Bh(s) {
          const { appid: e, dlcappid: n, iconCount: r = 4 } = s;
          m.use(p.Ready());
          const a = bh(e, n),
            o = Bi(e),
            c = (0, w.Qn)();
          if (!a || o.isPending) return null;
          const { achievements: d, nDLCCount: u, nGroupCount: g } = a,
            h = d
              .sort((D, C) => {
                if (!D.hidden && C.hidden) return -1;
                if (D.hidden && !C.hidden) return 1;
                const $ = o?.data?.percentages?.[D.internal_key] ?? 0;
                return (o?.data?.percentages?.[C.internal_key] ?? 0) - $;
              })
              .slice(0, r),
            x = Array(r - h.length).fill(void 0),
            v = (0, ui.v)({ appid: e, dlc: n }),
            I = (0, ui.v)({ appid: e, dlc: "all" }),
            B =
              u == 0 || !c
                ? null
                : (0, t.jsx)(b.EY, {
                    color: "plum-8",
                    size: "2",
                    children: p.Localize("#AppPage_Achievements_DLCCount", u),
                  }),
            A =
              u == 0 || c
                ? null
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      g > 1 &&
                        (0, t.jsx)(Ot.Y, {
                          size: "2",
                          contrast: "title",
                          href: v,
                          children: p.Localize(
                            "#AppPage_Achievements_GroupCount",
                            g,
                          ),
                        }),
                      (0, t.jsx)(Ot.Y, {
                        size: "2",
                        color: "plum-8",
                        href: I,
                        children: p.Localize(
                          "#AppPage_Achievements_DLCCount",
                          u,
                        ),
                      }),
                    ],
                  }),
            S =
              g <= 1 || !c
                ? void 0
                : p.Localize("#AppPage_Achievements_GroupCount", g);
          return (0, t.jsxs)(yi, {
            title: p.Localize(
              c
                ? "#AppPage_Achievements_Header"
                : "#AppPage_Achievements_Header_Desktop",
            ),
            link_text: S,
            total_count: d?.length,
            url: v,
            link_footer: B,
            block_footer: A,
            children: [
              x.map((D, C) => (0, t.jsx)(de.az, {}, C)),
              h.map((D, C) =>
                (0, t.jsx)(
                  Vo,
                  { achievement: D, unlocked: !D.hidden, size: "fill" },
                  D.api_name,
                ),
              ),
            ],
          });
        }
        var Ih = i(73644),
          Eh = i(4515),
          Ph = i(35177),
          Cn = i.n(Ph);
        const Mh = 30,
          Th = [
            {
              eType: ne.xY.kT,
              strPath: "quickref",
              strLabel: "#AppPage_LinksAndInfo_QuickRef",
            },
            {
              eType: ne.xY._b,
              strPath: "manual",
              strLabel: "#AppPage_LinksAndInfo_Manual",
            },
            {
              eType: ne.xY.cb,
              strPath: "warranty",
              strLabel: "#AppPage_LinksAndInfo_Warranty",
            },
          ];
        function Sh(s) {
          const { appid: e } = s,
            { data: n } = (0, E.J$)({ appid: e }),
            { data: r } = (0, E._F)({ appid: e }),
            { data: a } = (0, E.bg)({ appid: e }),
            { data: o } = (0, E.is)({ appid: e }),
            c = (0, Gt.AP)(e);
          if ((m.use(p.Ready()), !n)) return null;
          const d = U.TS.EREALM === dn.TU.k_ESteamRealmChina;
          return (0, t.jsxs)(Ut.YZ, {
            className: Cn().LinksAndInfo,
            children: [
              (0, t.jsx)(tr, {
                text: p.Localize("#AppPage_LinksAndInfo_Header"),
              }),
              (0, t.jsx)(os, {
                url: `${U.TS.COMMUNITY_BASE_URL}app/${e}`,
                label: "#AppPage_LinksAndInfo_CommunityHub",
              }),
              (!d || Qo(n)) &&
                (0, t.jsx)(Lh, {
                  children: (0, t.jsx)(Oh, {
                    appid: e,
                    steamworksAppID: c,
                    app: n,
                    bSteamChina: d,
                    links: r?.links_and_info,
                    rgSocialLinks: a,
                    bRequiresShipping: !!o?.purchase_options?.some(
                      (u) => u.requires_shipping,
                    ),
                  }),
                }),
            ],
          });
        }
        function Lh(s) {
          const [e, n] = m.useState(!1),
            r = m.useCallback(() => n((a) => !a), []);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(T.Z, {
                className: "responsive_banner_link",
                onActivate: r,
                "aria-expanded": e,
                children: [
                  (0, t.jsx)("div", {
                    className: "responsive_banner_link_title",
                    children: p.Localize("#AppPage_LinksAndInfo_MoreLinks"),
                  }),
                  (0, t.jsx)("div", {
                    className: e ? "expand_section expanded" : "expand_section",
                  }),
                ],
              }),
              e &&
                (0, t.jsx)("div", {
                  className: Cn().MoreLinks,
                  children: s.children,
                }),
            ],
          });
        }
        function Qo(s) {
          return s.type != ne.uE.RA && s.type != ne.uE.ue && s.type != ne.uE.FS;
        }
        function Oh(s) {
          const {
              appid: e,
              steamworksAppID: n,
              app: r,
              bSteamChina: a,
              links: o,
              rgSocialLinks: c,
              bRequiresShipping: d,
            } = s,
            u = !!r.categories?.feature_categoryids?.includes(Mh);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              !a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    d &&
                      (0, t.jsx)(os, {
                        url: `${U.TS.STORE_BASE_URL}hardware_order_terms`,
                        label: "#AppPage_LinksAndInfo_HardwareOrderTerms",
                        bStoreNav: !0,
                      }),
                    (0, t.jsx)(ls, {
                      url: o?.website,
                      label: p.Localize("#AppPage_LinksAndInfo_Website"),
                    }),
                    c?.map((g) =>
                      (0, t.jsx)(
                        zh,
                        { social: g },
                        `${g.link_type}_${g.url ?? g.text}`,
                      ),
                    ),
                    Th.filter((g) =>
                      o?.available_documents?.includes(g.eType),
                    ).map((g) =>
                      (0, t.jsx)(
                        Ah,
                        {
                          url: `${U.TS.STORE_BASE_URL}${g.strPath}/${e}`,
                          label: g.strLabel,
                        },
                        g.eType,
                      ),
                    ),
                    (0, t.jsx)(ls, {
                      url: o?.online_manual_url,
                      label: p.Localize("#AppPage_LinksAndInfo_Manual"),
                    }),
                    (0, t.jsx)(ls, {
                      url: o?.health_warning_url,
                      label: p.Localize("#AppPage_LinksAndInfo_HealthWarning"),
                    }),
                    (0, t.jsx)(ls, {
                      url: o?.privacy_policy_url,
                      label: p.Localize("#AppPage_LinksAndInfo_PrivacyPolicy"),
                    }),
                    (0, t.jsx)(ls, {
                      url: o?.stats_url,
                      label: p.Localize("#AppPage_LinksAndInfo_Stats"),
                    }),
                  ],
                }),
              Qo(r) &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)(os, {
                      url: `${U.TS.STORE_BASE_URL}newshub/?appids=${e}`,
                      label: "#AppPage_LinksAndInfo_UpdateHistory",
                      bStoreNav: !0,
                    }),
                    (0, t.jsx)(os, {
                      url: `${U.TS.STORE_BASE_URL}newshub/app/${e}`,
                      label: "#AppPage_LinksAndInfo_News",
                      bStoreNav: !0,
                    }),
                  ],
                }),
              !a &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    u &&
                      (0, t.jsx)(os, {
                        url: `${U.TS.COMMUNITY_BASE_URL}app/${n}/workshop/`,
                        label: "#AppPage_LinksAndInfo_Workshop",
                      }),
                    r.name &&
                      (0, t.jsx)(os, {
                        url: `${U.TS.COMMUNITY_BASE_URL}actions/Search?T=ClanAccount&K=${encodeURIComponent(r.name)}`,
                        label: "#AppPage_LinksAndInfo_CommunityGroups",
                      }),
                  ],
                }),
            ],
          });
        }
        function os(s) {
          const { url: e, label: n, bStoreNav: r } = s,
            a = (0, Qt.aL)(r ? e : void 0);
          return (0, t.jsx)(P.Ii, {
            className: Cn().LinkRow,
            href: a || e,
            children: (0, t.jsx)(b.EY, {
              color: "blue-8",
              children: p.Localize(n),
            }),
          });
        }
        function Ah(s) {
          const { url: e, label: n } = s;
          return (0, t.jsxs)(P.Ii, {
            className: Cn().LinkRow,
            href: U.TS.IN_CLIENT ? `steam://openurl_external/${e}` : e,
            target: U.TS.IN_CLIENT ? void 0 : "_blank",
            children: [
              (0, t.jsx)(b.EY, { color: "blue-8", children: p.Localize(n) }),
              (0, t.jsx)($o, {}),
            ],
          });
        }
        function ls(s) {
          const { url: e, label: n, children: r } = s,
            a = dr(e);
          return a
            ? (0, t.jsxs)(P.Ii, {
                className: Cn().LinkRow,
                href: a,
                target: U.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: [
                  r,
                  (0, t.jsx)(b.EY, { color: "blue-8", children: n }),
                  (0, t.jsx)($o, {}),
                ],
              })
            : null;
        }
        function zh(s) {
          const { social: e } = s,
            n = e.link_type ?? ne.jL.I0,
            r = (0, Eh.X)(n);
          if (!r) return null;
          const a = (0, L.we)(`#StoreAdmin_SocialMedia_Type_${r}`),
            o = (0, t.jsx)(Ih.k6, { linkType: n, className: Cn().SocialIcon });
          return e.url
            ? (0, t.jsx)(ls, { url: e.url, label: a, children: o })
            : (0, t.jsxs)("div", {
                className: Cn().LinkRow,
                children: [
                  o,
                  (0, t.jsx)(b.EY, {
                    contrast: "body",
                    children: `${a} ${e.text ?? ""}`,
                  }),
                ],
              });
        }
        function $o() {
          return (0, t.jsx)("span", {
            className: Cn().ExternalIcon,
            children: (0, t.jsx)(N.GrD, {}),
          });
        }
        const Nh = m.lazy(() => i.e(85139).then(i.bind(i, 64193))),
          Dh = m.lazy(async () => ({
            default: (await i.e(85139).then(i.bind(i, 64193)))
              .SeasonPassDisplayFromStoreBrowse,
          })),
          Fh = m.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(87937),
              i.e(28792),
              i.e(56589),
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(36786),
              i.e(55050),
              i.e(60480),
              i.e(60839),
              i.e(14632),
              i.e(5858),
              i.e(90914),
              i.e(54409),
              i.e(73810),
              i.e(96032),
              i.e(92705),
              i.e(9438),
              i.e(49928),
              i.e(49968),
              i.e(34004),
              i.e(11095),
              i.e(65050),
              i.e(50762),
              i.e(23027),
            ]).then(i.bind(i, 98144)),
          ),
          Wh = m.lazy(() =>
            Promise.all([
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(60480),
              i.e(60839),
              i.e(5858),
              i.e(90914),
              i.e(96032),
              i.e(92705),
              i.e(65050),
              i.e(58612),
              i.e(93125),
              i.e(89672),
            ]).then(i.bind(i, 66825)),
          ),
          Rh = m.lazy(() =>
            Promise.all([
              i.e(36597),
              i.e(56589),
              i.e(85599),
              i.e(33512),
              i.e(94781),
              i.e(18307),
              i.e(8892),
              i.e(80702),
              i.e(48355),
              i.e(36786),
              i.e(55050),
              i.e(60480),
              i.e(60839),
              i.e(14632),
              i.e(54409),
              i.e(73810),
              i.e(49968),
              i.e(34004),
              i.e(11095),
              i.e(14867),
              i.e(8319),
              i.e(10177),
              i.e(68396),
            ]).then(i.bind(i, 2422)),
          ),
          wh = m.lazy(async () => ({
            default: (await Promise.resolve().then(i.bind(i, 62038)))
              .AccessibilityFeatureDisplay,
          }));
        function Uh(s) {
          const { appid: e } = s,
            n = (0, yr.Fd)("store_page_asset_url", "application_config");
          return (0, t.jsx)(Rf.W4, {
            store_page_asset_url: n,
            children: (0, t.jsx)(Jo, {
              children: (0, t.jsx)(Zo, {
                children: (0, t.jsxs)(Ll.QA, {
                  eAdultOnlyMediaBehavior: "allowed",
                  children: [
                    (0, t.jsx)(Ns.X, {
                      config: {
                        "events-row": () =>
                          (0, t.jsx)(Wi.d, {
                            children: (0, t.jsx)(Dt, { appid: e }),
                          }),
                        "deck-topplayed-banner": (r) =>
                          (0, t.jsx)(Fi, { ...r }),
                        "steamawardsvote-embed": () =>
                          (0, t.jsx)(Fh, { appID: e }),
                        "demo-and-quick-pitch": () =>
                          (0, t.jsx)(Wi.d, {
                            children: (0, t.jsx)(pr, { appID: e }),
                          }),
                        "deck-verified-results": (r) =>
                          (0, t.jsx)(Kc, {
                            appID: e,
                            results: (0, yr.Tc)(
                              "hardwarecompatibility",
                              "application_config",
                            ),
                            appName: (0, yr.Tc)(
                              "appname",
                              "application_config",
                            ),
                            ...r,
                          }),
                        "gamehighlight-trailer": (r) =>
                          (0, t.jsx)(gl, { ...r }),
                        "gamehighlight-gamepadcarousel": (r) =>
                          (0, t.jsx)(Ul, { ...r }),
                        "gamehighlight-desktopcarousel": (r) =>
                          (0, t.jsx)(jc, { ...r }),
                        "discovery-queue-app-widget": () =>
                          (0, t.jsx)(Wh, { appID: e }),
                        "game-notice-controller-required": () =>
                          (0, t.jsx)(fr, {
                            appid: e,
                            type: Ds.EPurchaseNoticeType_ControllerRequired,
                          }),
                        "game-notice-vr-required": () =>
                          (0, t.jsx)(fr, {
                            type: Ds.EPurchaseNoticeType_VRRequired,
                          }),
                        "game-notice-vr-supported": () =>
                          (0, t.jsx)(fr, {
                            type: Ds.EPurchaseNoticeType_VRSupported,
                          }),
                        "season-pass-display": (r) => (0, t.jsx)(Nh, { ...r }),
                        "season-pass-display-gamepad": () =>
                          (0, t.jsx)(Dh, { appid: e }),
                        "storeitems-carousel": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "recommended",
                            children: (0, t.jsx)(Di.default, { ...r }),
                          }),
                        "storeitems-carousel-dlc": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "dlc",
                            children: (0, t.jsx)(Di.default, { ...r }),
                          }),
                        "creatorhome-carousel": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "creator",
                            children: (0, t.jsx)(ol, { ...r }),
                          }),
                        parentappwidget: (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: r.feature,
                            children: (0, t.jsx)(zl, { appid: r.appid }),
                          }),
                        appreviews: (r) => (0, t.jsx)(Gc.l, { ...r }),
                        "wishlist-item-categories": (r) =>
                          (0, t.jsx)(ed, { ...r }),
                        "purchase-options": (r) => (0, t.jsx)(Eu, { ...r }),
                        "purchase-options-dlc": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "game-purchase-dlc",
                            children: (0, t.jsx)(Xu, { ...r, appid: e }),
                          }),
                        "purchase-options-dependent-dlc": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "dlc-dependency",
                            children: (0, t.jsx)(_u, { ...r }),
                          }),
                        "summary-bar-top": (r) => (0, t.jsx)(sm, { ...r }),
                        "features-section": (r) =>
                          (0, t.jsx)(Vm, { ...r, appid: e }),
                        "about-this-game": () => (0, t.jsx)(fm, { appid: e }),
                        "page-sections": () => (0, t.jsx)(Pm, { appid: e }),
                        "legal-notice": () => (0, t.jsx)(Lm, { appid: e }),
                        "press-reviews": () => (0, t.jsx)(Om, { appid: e }),
                        "ai-disclosure": () => (0, t.jsx)(zm, { appid: e }),
                        "mature-content-description": () =>
                          (0, t.jsx)(Fm, { appid: e }),
                        "music-album-details": (r) =>
                          (0, t.jsx)(lg, { ...r, appid: e }),
                        "interest-buttons": (r) => (0, t.jsx)(yg, { appid: e }),
                        "add-to-wishlist": (r) =>
                          (0, t.jsx)(Yr, { ...r, color: "storegreen" }),
                        "recommendation-reasons": (r) =>
                          (0, t.jsx)(Jg, { ...r, appid: e }),
                        "friend-ownership": (r) =>
                          (0, t.jsx)(Ep, { ...r, appid: e }),
                        "referring-curator-review": (r) =>
                          (0, t.jsx)(Tp, { ...r }),
                        "game-rating": () => (0, t.jsx)(N0, { appid: e }),
                        "game-rating-section": () =>
                          (0, t.jsx)(A0, { appid: e }),
                        achievements: (r) =>
                          (0, t.jsx)(Bh, {
                            appid: r.parent_appid ?? e,
                            dlcappid: r.dlcappid,
                          }),
                        "early-access": (r) =>
                          (0, t.jsx)(jm, { ...r, appid: e }),
                        "ownership-banner": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "owned-game",
                            children: (0, t.jsx)(U0, { ...r, appid: e }),
                          }),
                        "store-awards": () => (0, t.jsx)(Zf, { appid: e }),
                        "points-shop-items": (r) => (0, t.jsx)(th, { ...r }),
                        "item-shop-items": (r) => (0, t.jsx)(rh, { ...r }),
                        "links-and-info": () => (0, t.jsx)(Sh, { appid: e }),
                        "write-review": (r) =>
                          (0, t.jsx)(Fn.Ay, {
                            feature: "owned-game",
                            children: (0, t.jsx)(Ff, { ...r, appid: e }),
                          }),
                      },
                    }),
                    (0, t.jsx)(Ns.X, {
                      omitFocusNavTreeBridge: !0,
                      config: {
                        "review-award": () => (0, t.jsx)(jl.Ay, {}),
                        "broadcast-embed": (r) =>
                          (0, t.jsx)(Rh, { ...s, appid: r.appid }),
                        "store-sidebar-accessibility-info": (r) =>
                          (0, t.jsx)(wh, { features: r }),
                        "store-sidebar-controller-support-info": (r) =>
                          (0, t.jsx)(Ni, { ...r }),
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }
        function Zo(s) {
          const { children: e } = s,
            [n, r] = m.useState(!1);
          return n
            ? e
            : (0, t.jsx)(Ns.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-gameinterest-cache": (a) =>
                    (0, t.jsx)(Wl, { ...a, markReady: () => r(!0) }),
                },
              });
        }
        function Jo(s) {
          const { children: e } = s,
            [n, r] = m.useState(!1);
          return n
            ? e
            : (0, t.jsx)(Ns.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-store-browse-cache": (a) =>
                    (0, t.jsx)(um, { ...a, markReady: () => r(!0) }),
                },
              });
        }
      },
      93237: (j) => {
        j.exports = {
          "duration-app-launch": "800ms",
          Icon: "M5YgSyrfvCXXY_XYhYzcl",
          AchievementIconWrapper: "_1DmdUWkRKPlUYGtbBrrRtx",
          RareAchievementIconGlowContainerRoot: "_1R1QQtfmrxNkfIGlKSdDqG",
          RareAchievementIconGlowContainer: "kt0NXHlg2kFjVkiN_2eEL",
          rotate: "_1ovVdJrqKKpglnX8FYej3J",
          RareAchievementNoAnimation: "_1mSBKtmFFZvwBLtxBOMwak",
          RareAchievementIconGlow: "_3vFmYitX2pXuOenxR0blk8",
          IconGlow: "_2BCoqu4wd4ehkJkelVhjb3",
          HiddenLabel: "_1smYxH70zcX0D3CUQDwF3o",
          BackgroundAnimation: "_2XvhZ8yFczR-W7gwjaWoPT",
          "ItemFocusAnim-darkerGrey-nocolor": "NK0YaI2_mwagRH7-tm_GE",
          "ItemFocusAnim-darkerGrey": "_1HU-Kl32lDEq7yT3ba8R5G",
          "ItemFocusAnim-darkGreySettings": "_3PM-EU4OtOaw12xVeiCzRL",
          "ItemFocusAnim-darkGrey": "_1EXXhQ3MOk6cW2xYESY_2i",
          "ItemFocusAnim-grey": "_2V88aGECYldq8tqX286rzp",
          "ItemFocusAnim-translucent-white-10": "_9lQAMImHGe5qClr8AL2Vc",
          "ItemFocusAnim-translucent-white-20": "_3I_vGf7ujHONdHYkGitG6t",
          "ItemFocusAnimBorder-darkGrey": "YU4V8GFJ50LIlOS68c6Wc",
          "ItemFocusAnim-green": "_1qBrpfK0gqYyjGTNuC0FHo",
          focusAnimation: "_1vLld9YwBtNMfxoDxGo2Z4",
          hoverAnimation: "_3JxsbmkLDkwKiYvrnnqOtd",
        };
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
      89611: (j) => {
        j.exports = {
          ObjectFit: "_NIZ2fYFBu6WSnEE1H6i3",
          ObjectPosition: "_3OZ4rrlKzwAYOKP9HdqUrq",
        };
      },
      24089: (j) => {
        j.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      8833: (j) => {
        j.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
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
      75180: (j) => {
        j.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
        };
      },
      39049: (j) => {
        j.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      66575: (j) => {
        j.exports = {
          GameRating: "dIVKtZR3FPk--WsTHPpCg",
          Title: "g6OWaWhTs7-jMnb_ipVdD",
          Banned: "_2OBX7mi9MwO3wh8vz69RW_",
          RequiredAge: "_3ixbRnhEXoSAFMMOxMR7kP",
          Icon: "_3NX32L22YZdobMQdeHDTRz",
          DescriptorText: "_3x1L_MQDZD6RKFHPJQDmCN",
          AllAges: "_2VePhLetNEJD1gctFnUgIC",
        };
      },
      58123: (j) => {
        j.exports = {
          SaleTechPriceGrid: "_14x0A0cAhaV-g8Od_xGbRL",
          LowestRecentPrice: "yLlRefh-UYhYZLE0_k-BK",
          FinalPrice: "_3P_1WcsVP8GJKQ8olprKQ2",
        };
      },
      88208: (j) => {
        j.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      5598: (j) => {
        j.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      9246: (j) => {
        j.exports = {
          narrowWidth: "500px",
          AboutThisGame: "zeZyN-4SGkKN1ukmy4_Ns",
          Header: "_2bGVPSkxnJDt2vN54TTfNK",
        };
      },
      56680: (j) => {
        j.exports = { WishlistModalOverride: "_3V4Y44VzkkQWUAtDh6jQfA" };
      },
      8611: (j) => {
        j.exports = {
          narrowWidth: "500px",
          AutoCollapsePanel: "_2OFBKij25NOweLoQKnH-Hl",
          Contents: "_3z2f7_LIqrKVFzXn-nSN98",
          Collapsed: "_2EgdWaUHP8QhQdix9MlF0d",
          Expanded: "_35-z7zCVOx1yWKf8cJjZkH",
          ReadMore: "_1qDLg0KVwgnZmMwUt99Egn",
          ReadMoreBorderPulse: "_4w9-SNzzdsOMsBG-Ztqf4",
        };
      },
      78747: (j) => {
        j.exports = {
          Container: "_2fN9Ufmh18msZ2F2Tvk4xy",
          Review: "GjOrllO2lWUDh-q5xW-yh",
          Video: "_1B_treg9z5S0DYtv4B2RDc",
          VideoThumbnail: "_3mf5Rtv6HYXZVTxqOYQbBn",
          PlayOverlay: "_1qClaf6FsIipDDUZRsUUbZ",
          PlayIcon: "_2pX0wr8m0s0gCZdHf1uABw",
          DetailRight: "_3glB4FwLdnWk0HbYsZu2CW",
          NoVideo: "_1YdBZgEGPw811XZZnFZf6p",
          Blurb: "_1xWSWeWA0WhhtjcjOw1SKJ",
          Notes: "_2GDWQy36nGG2HVC8I2cHWJ",
          BlurbText: "_2A6WzqPZVha8D0cLveWr_2",
          CuratorReceived: "_2JfTBx-oL3rgrWp-Mcceah",
          Avatar: "_2STaox80L0TUAyTTWvgg7K",
          CuratorInfo: "WDMiZwGT09DlTY2Zolj4H",
          ReviewTitle: "_3Gf4l7NBeeqbvtQVCV1JR4",
          Recommended: "luHN4D2sNDLnLyxeBlF6S",
          NotRecommended: "MScyX4kNlmotUkn4yfT87",
          Informational: "_3xT11pNcMt5vQZZryBo89j",
          Attribution: "Ae6CVnStJmXj4P1nm4fyH",
          ReviewDate: "_1-xxEVmOFH_ALirCqnOMnk",
          ReviewText: "_1bxDLybmzg3qlRHA0uPpgw",
          ActionButtonContainer: "_2DQYZmNg65M853z4QxNcEm",
          ActionButton: "_38k1l9_8MwKGpdKbFVO0iR",
        };
      },
      399: (j) => {
        j.exports = {
          TopPlayedBannerCtn: "_3m4H3O5OzhRFzeMBr1GiJh",
          DeckLogo: "_2fWPD8Bedv6c-yWTvZgAqn",
          BannerTitle: "R1EIDJDmlv3wymunXxGRz",
          BannerRightContent: "_3xmin8LWu9-cWEzsA9HEqJ",
          BannerHeader: "_2qmB_riG0azA3gECMHzEs_",
          BannerGameText: "VTRpu0RD7FA2Cn1UIp_Sn",
          Adventurer: "_2Vfzito2cEHtvOnl6hWD2t",
          Anime: "_1ms_oh1o4LBbEJqlW8N4RN",
          Apocalypse: "_2ba_EyebFU2kLncHcEzoDD",
          Astronaut: "W2X9qKmJY1fAkIM7GsolJ",
          Beach: "_2_LFdeCE0gMxtEUKki5NqO",
          Bed: "_1oByLIlDSo2XnZICLfSwvI",
          Bus: "OB7zhBm37vzrd_8riRWex",
          BusStop: "_2rd1Qm-OWFA2YmwiW-AghQ",
          Campfire: "fWKU1FqjXbYwqp1oB_xBs",
          Car: "GeAKpVY8Ba6-QT7tznVks",
          City: "_2QdugEdfMAb6V79yJPUR9L",
          Family: "_1g6v39jh2MnE5vuJnDagye",
          Farmer: "_3HFHolp6BQ7uMIedbyxc7D",
          Knight: "_2O7EV4jX-WO2knwBjeJz_D",
          Miner: "_13chpvw7DnNOsWqu92qK7_",
          Porch: "_3M4GVoRT9lg9yBm6y1dCSi",
          Robot: "_2RASj4ZnI-VHE5mRp8zKoB",
          Superhero: "_2HvlKfWJXw_ynFe07XKdY8",
          Woodsman: "_1CL5Wdh_nHnOYZvnjVA8YD",
          Zombies: "_3Ox405Kuu5XWIbPA9UvtBS",
        };
      },
      72723: (j) => {
        j.exports = {
          Body: "gWQvQ7aZkfTUnQOpDv4Kf",
          Capsules: "_1vjLJiRQDnGVGagJgrX2vw",
          Item: "_2WnGgbEVDGWA6Aiw-Iac2P",
          CalloutRow: "_2wSV8GFu39c1jHvjlHefEk",
          Callout: "_38aaH3e_WuX02rED-F5LmP",
          Link: "_3r5JsPI6ThzHIlTKWEG3hE",
          Separator: "_3P74cVQ7H470Sa83yRrh9a",
          ActionGroup: "_2-u-jSAp9SDeNep-55FcIH",
          Total: "_2b_TYMpDt3KAMX5DUL-a60",
        };
      },
      26666: (j) => {
        j.exports = {
          PackBody: "_1zq333d3pW7338j8MOxfoG",
          PackInLibrary: "_1-sgh5Na-U3TZmO_toUckA",
          PackCapsulesCtn: "_2jS1JS0vHcRTtKK5vN9bGo",
          PackCapsules: "CfSj_bx6zkyciRhJhRV4c",
          PackCapsulesCollapsed: "_3BI6mqK_SNTj5MBr8unOIZ",
          PackCapsule: "_3Cmt3xhzt5m1iqRlGl85t2",
          PackActionGroup: "_1_rYPVtMNifGny-euMweMD",
        };
      },
      16071: (j) => {
        j.exports = {
          Row: "_3ZALGXUTUz9dMhpygZfEdz",
          FlagInLibrary: "_3J48uHl9Qq29G8SehTatYH",
          FlagOnWishlist: "_32GtArPK5vie6wQkr_eb7v",
          FlagInCart: "K1EJQRP74k3RqoneQCEf0",
          FlagIgnored: "_2_0lJhNfAjXG-HPV-9zVAu",
          Price: "_17AaRdslMVuhHBhcGgPgku",
          Highlight: "fHbnLbbM5MIuAK3uVlGNu",
          Name: "_2yxFkEsqp_Q09rVOSLXhE5",
          HighlightReason: "UyursQIO7t9_SSLgITA19",
          Pill: "_3aNRifG-b3UQH_dr4ksC-T",
          Footer: "_1dVpIbJBuAfOZVuTI3NAbh",
          PartialList: "_3EpqTNpUJjZtEVKKKl3j82",
          AddAllToCart: "_19v2LelCK8HYDasOcWgZXu",
          Revealed: "_3q1MdA6e49037eOZQKOiAq",
          DLCRowReveal: "_3K-29pm9jNOERms32B8gs7",
        };
      },
      38404: (j) => {
        j.exports = {
          EarlyAccess: "_1T_V-LxtA8jew8eiZAQrDD",
          LeavingEarlyAccess: "_2rqsrOwTXLhlSthqDd-y0q",
          Banner: "_2YvNHzQ1VSnCS0ReE6v9T-",
          Title: "_3_95-MF8UOtlX2WqBSCPKN",
          Desc: "qt-OB_c0QQpC8k9v0X_dP",
          Details: "_2UGCx9L9_8NyGSgDyiuyLT",
          Warn: "_1GwZ7imQJcMFj_OCNlAY0n",
          Stale: "_1_3oFMPoQlBsbOcivPi9_d",
          StaleDevs: "TdPVzAhAirPmDB4nB3Cnx",
          DevsSay: "_3wEJCC6E8v86rS7edXsnmn",
          Question: "_1CZg_6pRD4X5aFvbD3VXN5",
          Answer: "_3lCa8UpT82vkN-BV_hD_CH",
          Link: "_29rMxnVxsbWIDWSxuA9idP",
        };
      },
      55367: (j) => {
        j.exports = {
          CategorySection: "_2LrShr7IWhwfZHCuws5N_O",
          CategoryLinks: "_3vOT4NU0o9mYCU_6o_CCRh",
          SearchLink: "_3-Crx2dI9tgqfo1yOT0jw8",
          FeatureString: "_2OKLR5HZU6R8HIQRFgvQBC",
          IconContainer: "_2prv4ehi70tjwqV7eeUpNn",
          Icon: "_15-uJ3AkgzMBpkybqwjiKt",
          LearningAbout: "pi0uqQekyrRHnJCaUyg1u",
          ThirdPartyNotice: "_3IUbntWc11AYm240qy6cLU",
          Row: "hgTWadPUVdT2y17u5wU7Y",
          Anticheat: "_1diznsEx0RUvdMbTwROVEu",
          Name: "_261S1NxSb_IbVaNg77Y9i5",
          BootProtection: "_1SiKZVlI9CdyQnLvyTUYLy",
          ThirdPartyAccount: "_1oaAmtSoqPhwLiGjQ0Y3OG",
          Type: "_1qNe_uLNeOV6BKlQ09jU3n",
        };
      },
      77614: (j) => {
        j.exports = {
          FriendAvatarLink: "_1HwFByD2tVkgQjdeo3upUL",
          Details: "_3pLLJpVOHHWcI5UvltWXQZ",
          Name: "_1MsiMQXdRUXrfqSEZ7ewHM",
          Playtime: "RmetILTrNzddKrz3r4CGf",
        };
      },
      16836: (j) => {
        j.exports = {
          narrowWidth: "500px",
          FriendOwnership: "q5QNi4yaj2QV4U77xNSKp",
          FriendList: "_1jkvh5RzUyV-afkmRZBsEt",
          WithNames: "_1YludsZff-JSeiUJGTaBFP",
        };
      },
      20338: (j) => {
        j.exports = {
          storeNarrowResponsiveWidth: "910px",
          TheaterDialog: "xunB9e_XJHY-ooP2zNKag",
          TheaterModeHeader: "_17YJmMg813A6ympHsbwM7n",
          TheaterModeFooter: "_2469TwTWqAicsI1RnlvsCU",
          TheaterModeFrame: "_35w3v2QgvaAyQ5US4OJOMN",
          Center: "_1nooJM8SlOrumMla-n5kcg",
          Right: "_124rcqdHDS-7ZiS4Ug15rj",
          SkeletonViewArea: "_2Jk5sZuh6Yam81wQzpBUWj",
          TheaterMode: "_1_fv9P3XnAj9M8zRjBUsm0",
          ItemViewArea: "_33i4zSWeCfsTaa25tHu5Us",
          FullscreenArrow: "_258hIVgneRO0dUbgnPZh_R",
          Visible: "_2--1QTPdJLonnu6CEnIlNX",
          Next: "fpXUftvcJkKb5pMG7ctH0",
          Previous: "_1h__Z4jtufgzUAJJ5y1c1v",
          ViewedItem: "_2KIVa7T6PMqAVvVKkwdVZO",
          Active: "_2CZHqKcmYmjWbdMK4aidRV",
          Screenshot: "_2zBrte9SWvr4lSb3lAkNpR",
          PageEmbedded: "TunqbQieNpnpnbQo2LG9Q",
          Controls: "_2h-RE4j4pbuPMtOjZ_fCyr",
        };
      },
      69131: (j) => {
        j.exports = {
          StripSkeleton: "_3-9sYm9MJfEc7DUv7-tqG2",
          TheaterMode: "_1l7ZtmzPX6TqB7rvA1wdUR",
          Items: "_2Y9cdZVnoEU6uCzgX9P8gO",
          Scrollbar: "_3uF_Wfs589dYv9BQRlFmZt",
          Strip: "_3CdIWRo2e9D_FxVHjVII7d",
          StripItems: "ZpjLn9D4rTIVnM4axYSoG",
          Item: "_2Ose8zPg3MlKQQeG9nwv24",
          PlayIcon: "_2qzM1XTf6NXdHvCDD9D-PF",
          Active: "_2uCL56lGO9iUUcLEtE83zG",
          StripScrollbar: "_2Z-YccLz9coJD6SBV13Fya",
          Arrow: "_2lIBEOcXRC3KKhDamcV9t",
          Track: "_2SBCUqLfy4PgWdonAHX_fR",
          Thumb: "_3DXmyv2Yx-lnmLz03GryEd",
        };
      },
      19813: (j) => {
        j.exports = {
          TheaterDialog: "_1cR7UuAEyt152HSNWylbqz",
          FocusRingRoot: "_3zXPOFGaYWCD3fd-ESi70A",
          FocusRingClip: "_2jZfIoMOoZQx6kdcgBhMHa",
          GamepadCarousel: "PYe6PtelQzh2UB7OtpWMk",
          CarouselItem: "_3ulAzvZbXfVEZatmwdipsk",
          StillPoster: "_3pCSQuZSNLXT9AhGtOXpNb",
          VideoStarted: "_1lbow7a3gRkR7fjSzCyrXr",
          Poster: "_3ExPGBI8XGCQSuFfQ6JAlj",
          Icon: "qcq_UlIfBHLqkTw-IcrR8",
          TitleCard: "_3HXfy0jxwE_OWJIKKyQFUE",
          Bottom: "_1QDEDk1q1y-jG5E4UV5-rC",
          SingleFileTrailer: "_3i1CkfhnBQSj5NuMV9PxnF",
          Screenshot: "p0NZiXp9agvT1BeWoCNDK",
          DashTrailer: "_1B_rAEDcFM9o79CoGmnUgM",
          BottomRow: "_3ZLxtge6-gw9pSzVXTf4gd",
          WishlistButton: "_23N7SSBmU_2S4o8Kc8NBEg",
          StarIcon: "_3LKNblFkXFm-hTnW4lMeOQ",
          ButtonIcon: "FP1PcTBe4kKmycVNKGtk3",
        };
      },
      15106: (j) => {
        j.exports = {
          ValveOnly: "i3Trnr-2zDw22nSlGIYhQ",
          ValveOnlyTitle: "_2C-VGSnf7BOn19tKqciPFV",
        };
      },
      19218: (j) => {
        j.exports = {
          WidestChildContainer: "_3YUWXt-ylyufqMm-YAliva",
          Hidden: "_29niryxpei49tSjYOBokyK",
        };
      },
      30820: (j) => {
        j.exports = {
          Item: "_2YfN55cMXVU9OD0d3_LoX3",
          ItemImage: "_2Zh_TIIvdD8EtU6ZxtELog",
          Price: "_1Fz-4Scga6rZOdvvmk2jLV",
        };
      },
      45200: (j) => {
        j.exports = { LegalNotice: "_2bOEuokOOajSeGl2yZEcPh" };
      },
      35177: (j) => {
        j.exports = {
          LinksAndInfo: "_3TuBg7_-ESlXR8VdekZAh6",
          MoreLinks: "_38qMxU84U3MdKhwOyNRvBh",
          LinkRow: "_3Fsj47byOWjgdvPZrMt79B",
          SocialIcon: "_2MvdxngdrJtnwX501aUgFu",
          ExternalIcon: "_2WUly4aWb_9foEZI0ARnK1",
        };
      },
      72390: (j) => {
        j.exports = {
          Score: "_3KFgbk3IzIHdQyWbx3ixQd",
          High: "_2gwFIDqCXQrEFHQkkMylvp",
          Medium: "_1WRij-yZeVQrXpyB2BQ5Hu",
          Low: "_20XeCHY1vgYRARXPiXK8qr",
          ExternalIcon: "_2_11-nL5KwLaw57DKAUUxk",
        };
      },
      76985: (j) => {
        j.exports = {
          narrowWidth: "500px",
          TrackListContainer: "_1B94J6blto63JooX8xE8x2",
          DiscTabs: "_1f6LeASDnCawGhXbVgpGbN",
          TrackList: "_21qq2GkE5LyRbZDBkOQ1li",
          TrackTable: "_23UelU4wgZXygL_sXDYvsg",
          Number: "_3thPgGlKH6Yk_mzgsffxqm",
          Name: "_3uE097OXGUs1NHySOUIIvS",
          Length: "_2X2HpO9BwpkWRjK97-LN0",
          Odd: "_2lXiCmpwORaq53wIqXcIGO",
        };
      },
      95036: (j) => {
        j.exports = {
          AppList: "_3WieBjkVb28rpePKxyn3gl",
          AppText: "sqjdG_fjedZUmCmzyHdpN",
          InLibrary: "PIsyQ6ew7BEmrOpzzJKCT",
          AppIcon: "_1zJQxJZsmaRcsnMKVsj1SD",
          AppImages: "_2cKkqSc2Aw1kr_8SzTKYNF",
          PlatformIcons: "Wd0ssUN-E1g_6nF5cApwN",
          PlatformIcon: "_2_NmZjBVcuMKTZkfsRP_HD",
          DiscountAndPrice: "_2ooDkAkePuzL0kjqCaU2lR",
        };
      },
      54652: (j) => {
        j.exports = { PurchaseOptionBanner: "_1P2U635xpdOLT2_aa1xwdL" };
      },
      21763: (j) => {
        j.exports = {
          PurchaseOption: "_3TUpv9-O4TIdg6P4Fx3oE7",
          Green: "PnUl8lQhMsTJfCeDt3Hea",
          OnlyChild: "_1Cty2Al1wcwqrIfgzp797A",
          AllowSingleLine: "zw6LBxJeRCbByX-rRxjyh",
          AllowTwoColumn: "_2AYML2I4RE2b74cxTDrgs",
          LeftColumn: "_2TQm9gAofDprradamqfdnX",
          DebugInfo: "_2CZQTTB4EFxu3TE_6mM47o",
          FocusRing: "_1flB_uKuLjatwxoY8KvUUG",
        };
      },
      97393: (j) => {
        j.exports = {
          PlatformIcons: "_34fO3Y9HSHm3JfPdMRIf8m",
          PlatformIcon: "_27rt4wNpnea7jUH3nWwj8m",
        };
      },
      59869: (j) => {
        j.exports = { MenuItem: "_3VWkkleXCrqxmjyoSCylnk" };
      },
      80974: (j) => {
        j.exports = {
          InLibraryRow: "_1Ea1bwlHmxO1UmYTEQ8jHC",
          InLibraryFlag: "_2GveL49aC8sm8Mey1StYth",
          InLibrarySVG: "_2HPdYtyoJJ6hsAHw3jTQ10",
          Actions: "_2vmUZW0F1kvoznIng92EOn",
        };
      },
      14844: (j) => {
        j.exports = {
          PageSections: "_1_PU6_24UNZMD-aymVilmB",
          PageSection: "_2WpiheNBkhzJpmxQ4Arawu",
          Header: "y5728HUyiI5XdCDBm5D7A",
          Banner: "_3hkPxq8NpEEOtbG7MPXNUy",
        };
      },
      30452: (j) => {
        j.exports = {
          ItemImage: "_2emVfokDB6oT4pOU15fVVR",
          ProfileBackground: "_vaAGc8YOYW7s9yJPKtHf",
        };
      },
      6876: (j) => {
        j.exports = {
          ThumbIcon: "_2lDikjo0mk970SwUm3DRTK",
          Down: "_1Cwc3y07Is4gEGD1Q0zKc_",
          CommentIcon: "_2obrbR9xy_xows-ok2qmxn",
        };
      },
      18574: (j) => {
        j.exports = {
          CarouselPaddingTop: "8px",
          CarouselPaddingBottom: "8px",
          PurchaseOptionDisplay: "_2zQCVD-7iZA3eShAcWuSrv",
          PurchaseOptionCarouselWrapper: "_2FFRq4AxO47tckosaUvn2X",
          NoCarousel: "_18-XQUf8L7zxxacjLnq08M",
          Single: "_1i8lZsm1WSza_LBo1riVvc",
          PurchaseOptionsCarousel: "_149hLCvHEvVVEn7fORfG75",
          PurchaseOptionWrapper: "_1F2jbNP9IHRfKonl_3baY8",
        };
      },
      77774: (j) => {
        j.exports = {
          ComingSoon: "VcfhtxgxhXCS5YBzd4O22",
          OffsitePrice: "_3nVt7tQlJcd-SJe7k_lDmO",
          Content: "yN2IR7l0MpF7rTD6dlS9f",
          Reminder: "_2KJX1jAw_ha_T3Dv2bDULi",
          Note: "rM8RXPAb9DnacUnfXKjkg",
          Preload: "_2uqsForJwTJzUiCcKC6WK7",
          PreloadActions: "_8FtJtmmrluBTGIheOirY_",
        };
      },
      23413: (j) => {
        j.exports = { AppList: "_1MVRGLawsCpcXLFlFkKAGL" };
      },
      60993: (j) => {
        j.exports = {
          narrowWidth: "500px",
          RecommendationReasonsDisplay: "_8A-vhpEBdS-qVF5Jl9jc7",
          ReviewScore: "DpGN2-UG7sEXIZDAb2xtu",
          Positive: "_1kiOvqf3wN3kBFxMVI8w-3",
          Negative: "_1UTMsJhG80MMvkig6Pw7UN",
        };
      },
      54629: (j) => {
        j.exports = {
          AppList: "_12s81WYtM0B0CmDPB6BMY0",
          AppIconAndName: "_3CcmNvL8ajAAtVfsoFxFRA",
          AppIcon: "_1abKISd0PdmRu72s9yPT6D",
          AppName: "_2VU-DDzaxFtQJqLuyn0IQw",
        };
      },
      2699: (j) => {
        j.exports = { AvatarList: "fIVYEi9n1QY4vaQuxZYW0" };
      },
      13290: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Reason: "_2m2v9tWbf72NndX7vCQd3D",
          TopLine: "_1-A6rmFS2woZVY0AjEpaRx",
          Icon: "_2DPsFVf6FeqLONYXI_xame",
          Positive: "_2JQ3YzNKEfGoIo7Y4JIPZo",
          Negative: "_3vjAexY4vrU7H4bRPWQS1P",
          Additional: "A9r5gdP2l607_aZQG4U0f",
          Divider: "QsaD3B8iBvo8FI0s8Heyb",
        };
      },
      57102: (j) => {
        j.exports = {
          TagList: "_3jV1ymbnCcg8o3qq78ndN7",
          Tag: "gctfUSqAf4-wM1_s7LW7C",
        };
      },
      74049: (j) => {
        j.exports = {
          VerdictIcon: "_9yuiPD5NCU4QYi8jzKFrC",
          VerdictIconDown: "_2j8Acce2gU2Mnn4slpUyTf",
        };
      },
      94255: (j) => {
        j.exports = {
          ShopLink: "lqD2vDqW515szC9Dt3o8c",
          Items: "pge6cRE3xuT4D-kvcijJs",
          ActivateLabel: "Ywd6FXH3HxWEfSO_4XhD",
          Link: "_2773Feh3LQ2SD5dtpRj6hJ",
          AllText: "IfnLtAVfojeH3V-6ObQjr",
          Narrow: "_1ElroLhDfZVa0RFIGapb2J",
          Wide: "_3wGfw-n0Vvme1W7TMRVn1I",
          ShowLink: "_1VS2woF-3sJBcdv8ku8V7m",
          OverlayLink: "_9c2z0an8oHdeFIpJYVdD6",
          InlineLink: "_3qVPPRLyJLnqCVDKgRBYMz",
          ResponsiveLink: "V1oPnW4SHTQZyfLtIOACA",
          Text: "_1VPalkyDcngLWmtdDU2UOT",
          Arrow: "_2UhU5Y9TVx7gCVaf863aKB",
        };
      },
      75995: (j) => {
        j.exports = {
          SteamAwards: "jJURdXW1ChOFN-_p287Zm",
          Banner: "FIGm-_qZMzF3jFUHQ3WnL",
          Titles: "_2J_cQuvocvg37gIlzurEay",
          Winner: "n_444AQvZuBuGzXn2ekfZ",
          Category: "_3kIk6XVA93BAg1PpnlC8jR",
          Year: "jlMMBNsV2V8eRl6Kr0Vsn",
          Year2023: "_3QOYUCrBHECSTWOJukosMs",
          Year2024: "_2TAHqCxVB487j7ILyr5mt3",
          Year2025: "_23ICoTwOCxBIpOwj40sp4h",
        };
      },
      48338: (j) => {
        j.exports = { StoreAwards: "_1CixVKuNHvP6aAZqdbx6nN" };
      },
      3471: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Summary: "_3Prm5m5vhL6ZyDzq9BAi-Q",
          FeatureList: "_3Vfkk-MdImFuKEOrcb0-iS",
          CategoryIcon: "_3q4P9LQHRxDb5N6xxg2cno",
          FeatureNameContainer: "_22m8Q03ftyieJoZUjjJh7f",
          GroupLabel: "_3B6ryPkScWm0fGLpTRaOdy",
          FeatureGroupItems: "_3pZio2UegeDHK5If5lsACR",
          InfoRow: "MebJlVvjledfLjBzNnZks",
          FeatureName: "_2XVo6DmEk_3H8El012J6n3",
          Details: "_3i5pyKjdWnRPqCqWMAmwAb",
          ImageContainer: "_2hLfFwbFsdutlEoG1YjlJe",
          TextBox: "_2_4UfjDA56JkBQwKFByppO",
          Open: "_3qssZq9veZ21NuSSKhTJzE",
          Closed: "HymTK4fzKIl6TGUAtolY6",
          Image: "_33C0hhqH__tmabqGo9QM7O",
          LanguageGrid: "r1YWhYsuFs6pCiaVudl7_",
          LanguageTable: "_1n3a9ye5GfFJ8UdeJ_lC3x",
          LanguageName: "_1gw_w8O9ZchSa2H7_sKPn8",
          CheckColumn: "lPImL9ec29fzNjpS8eeK",
          IconColumn: "_3a5h4jO6SE2kOxAYQfL9Fo",
          SmallIcon: "_2f_urgKOdrn6b3U0a-jFtr",
          Name: "_1J6g7KRhXGw5v-ypP0JKr1",
          Preferred: "_1oX4_5EeXRAXfEE_XiMdjI",
          ShowAll: "_2XP4Qg7E45wuX1whgAsXdH",
          Legend: "_3-IKyLDYxOmAynwPHDVNBL",
          LegendIconContainer: "_2LWUNzwOXwiI1D7TCBxdmE",
          LegendIcon: "_33w2I_6YeeKbxCFtG37Hwh",
        };
      },
      33001: (j) => {
        j.exports = {
          narrowWidth: "500px",
          StorePageBBCode: "_3n5Cn3P3AZI_zLOe5_jB9D",
          StoreImage: "L_7jPXkXscN-QxB458CKV",
          StoreVideo: "_1SedSl74BXCZ_7ixbPl5ml",
        };
      },
      48205: (j) => {
        j.exports = {
          SummaryBarTop: "_1Som9GnszokLGAScqhSozy",
          SummaryBarSection: "_1eIF6oOHrg65kqvbTZmsnv",
          SteamDeckCompat: "_3q5iA4c82x-s_zPm2_mCo6",
          SteamDeckCompatContent: "_3qJR5P57v1Vom-xKZtX_qF",
          HWCompatWrapper: "U0BM13LMuE54MZPv298tt",
          UserTags: "lNpjDNeYU0mE_mITujuVJ",
          Tags: "A_YEuhEOff4v5HceIOAPP",
          Title: "Iuddf6nrTCmOY1Cgf_Gw_",
        };
      },
      31518: (j) => {
        j.exports = {
          CategoriesMenuOption: "_2-cvnCNnFqBG5u89enudpK",
          Label: "KldL9MJqWdVCahi3zvX-E",
          HeaderCtn: "_3WNoErKGw4jngFeVPfTZfs",
        };
      },
      37520: (j) => {
        j.exports = {
          DialogContent: "_16pXKCOoRIbFwtZHgqjB8K",
          SearchForm: "WKTuaTjd0YaeJa49cFaSk",
          AddCategoryBtnCtn: "_2iyGkBsDUSp94uk2MlLz1W",
          Visible: "_2MUWoUxUqeFYQh8spy5bpH",
          SearchInput: "_3MO9bYl8-oPkXVO9nu_FXh",
          CategorySelectorCtn: "dGWKt0BhpSa4efl8jRzwR",
          ListHeader: "Y4Cx2WnIKvFCo_RLEflGd",
          DialogCategoryCtn: "_1lH7WZP40yb1SOyXWbcjOH",
          Suggested: "_1ma6_Ey6CqTCDCkq0tqrH4",
          MaxCategoriesMessage: "_223Zevm4T9O8RGEnzI5jHT",
          Buttons: "_2_jN6aSsudj0rOSKRlnwP9",
        };
      },
      46146: (j) => {
        j.exports = {
          wishlistCategoryMaxDisplayChars: "30",
          CategoriesCtn: "_1Ua4366mxFvXUSFTfIlJ-i",
          CategoryListHeader: "_3Ra2jK42XFbrJlIPtsmMfC",
          CategoryList: "_1FrjJkMKzXxdevx_oYK2Nx",
          Multiline: "_16SkCu-YheGIHn8_WtMVnd",
          ForceDefaultSize: "wxjYffVQAVCuubF0aydb5",
          Small: "Tj_sAx3peeMFFwrrnIjIK",
          CategoryBtn: "_1c0u5zo_wZGsAM08nfEEKu",
          NotActionable: "ySn3WlbDgR3ay1P7i3gjT",
          CategoryName: "_1QX11E_2wBgWuzEO7M7ps9",
          Focused: "_2BMRaClxLpIT5YJoDcejhm",
          Selected: "_2vVKhV_YC031wyUrFu6vJx",
          Removable: "_2rdKi5D2dn1dWLtySZS1w7",
          CategorySettingsBtn: "KA8f-sx_XEMnp78-pwZgl",
        };
      },
      6019: (j) => {
        j.exports = {
          TileContainer: "_3YSNlqOERJPDvATbhSyba4",
          TileTitleContainer: "huv5kmY_qRW6CUhP41AX4",
          TileTitleInnerContainer: "_3SemwneNsiLL2pOP4TMon4",
          TileTitle: "_3VhToXcFT_z0HLnw5z1X2d",
          TileActionButton: "NxUN-s-MoparNLrvqVXsN",
          TileSubtitle: "_2FwWgtYbin1N6QcDJJEU3v",
          TileActionContainer: "_1AC_XZBw0R_ud0pPAJ1Nln",
          TileActionInnerContainer: "_2H9PUu43H_69AuO6gTZVdC",
          TileActionInner: "_3Fxxrw6yvbcJc-MzPwHIpB",
          TileActionInnerTitle: "zB1xwvSCbLzyQMcJvBafw",
          TileActionInnerText: "-piyES0-cnJFXEv4BGexr",
        };
      },
      12037: (j) => {
        j.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
          BackgroundAnimation: "_295HzH0_Gg7fchG1zO9Km7",
          "ItemFocusAnim-darkerGrey-nocolor": "_291aUneSnsR7SSD43BPEYt",
          "ItemFocusAnim-darkerGrey": "_3T-aeBZd_novjXZhPEqJ_L",
          "ItemFocusAnim-darkGreySettings": "ekd5ku98aKtUXOuTnlUpj",
          "ItemFocusAnim-darkGrey": "peNld_fsioxlGFxQfdd8I",
          "ItemFocusAnim-grey": "_1433gddOHXCko3qPvXFRFS",
          "ItemFocusAnim-translucent-white-10": "_3ZEmb3nXVV6Jl3vO3gd3n2",
          "ItemFocusAnim-translucent-white-20": "EoCuk2lmX0KUPR7Ja5J0J",
          "ItemFocusAnimBorder-darkGrey": "_3FtKchinLpLv8OXrbvS81w",
          "ItemFocusAnim-green": "_23vh8vhEvEmJ5bnq2YZfx8",
          focusAnimation: "wTWp1KqP_zaAfiOc2ovCo",
          hoverAnimation: "_2knkM4Dk-kiPNpW81PgE0Y",
        };
      },
      97824: (j) => {
        j.exports = {
          OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
          OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
          ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
          BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
          BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
          BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
          BannerButton: "_1jso7z80FWGn42k1HP0_cf",
        };
      },
      27510: (j) => {
        j.exports = {
          "duration-app-launch": "800ms",
          PurchaseNoticeContainer: "_2wT0yS1pvmL0ILuaiLHaBb",
          RightHandImage: "_3G-YXeWc1jffse8M8ct7hJ",
          PurchaseNoticeLabel: "dTa5uAAOq-wFRgQQG7xRm",
          PurchaseNoticeImageContainer: "_3Q2RgkhEvzbM10OBqMeTDB",
          VRSupported: "iqWk_VV3jdvFbRFaBkWRB",
          PurchaseNoticeImage: "_19Tk4I5-EL-sVXsUaa3hwU",
          Tilt: "_3dAAfHHQ8xq74OLmQXo9V4",
          VROnly: "_11BzgaR-a1UCE-aOC3bMCD",
          BackgroundAnimation: "_1J1jrrETaG-3_8wMEeqpxY",
          "ItemFocusAnim-darkerGrey-nocolor": "_3yvzhClP6mJaghIH0GHKiv",
          "ItemFocusAnim-darkerGrey": "_1czfyTnV7yzFQJdFsTmDJT",
          "ItemFocusAnim-darkGreySettings": "_20J2LUfIRwm4TI5vyu-UFE",
          "ItemFocusAnim-darkGrey": "_1_qHMTE8sRRjCMuxLoZMl2",
          "ItemFocusAnim-grey": "jagchSyBiPamV4PALsowV",
          "ItemFocusAnim-translucent-white-10": "_3ZVEkEzGePMK1PBQ_GpIb1",
          "ItemFocusAnim-translucent-white-20": "_38eVNkJEvCSuIwBUyo7Qrg",
          "ItemFocusAnimBorder-darkGrey": "_2C7zuRFt6F6RcgTOiWBVnr",
          "ItemFocusAnim-green": "_1IMTjdceyCiJjpowdAaHgY",
          focusAnimation: "_1tLo_FTRTZsAztlpw36eHl",
          hoverAnimation: "_3oGieUcvOTZppk7m3PHA6L",
        };
      },
      63404: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Details: "_8DSX9d1ihrMSeZUFC9elD",
          Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
          FeatureList: "TwihVkmmqI5XLg6P4fpwF",
          CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
          FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
          GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
          FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
          InfoRow: "_1RmibngWLogcFmO93kGFgq",
          FeatureName: "ny6hWVK6ii05H200KRhds",
          ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
          InfoLink: "_2xmH7agKi37v9kwFHi093S",
        };
      },
      17479: (j) => {
        j.exports = {
          narrowWidth: "500px",
          ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
          GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
          ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
          EditButton: "_1nt4AvPVzCcmifUL2j41GY",
          Spacer: "D6yaJy1vHTj3skoSwQCmn",
          Top: "_17TBmwVnz8B0fYk9NMgjcC",
          Bottom: "_1mdhhjdhefzfINtpGJDw_F",
          EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
          LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
          Label: "_2aDfpXF8ktFHq439q_1vAi",
          BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
          Set: "_1CXRFvJ5iqKqlENSWgeHPP",
          DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
          StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
          StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
          ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
          InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
          LocSection: "_3KAysk4dlhWETa6ixz7V2j",
          HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
          GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
          Personalized: "_1g3WgidGN68CDX4XQPGnl6",
          HighlightRow: "N97okiqePUqGpdeNrIxUU",
          LocString: "_3FBEGAfvLQj4qYjstmZAPE",
          ImgSection: "dxuI55RF56-dzbuXjj2W0",
          SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
          BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
          PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
          StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
          PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
          PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
          NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
          ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
          Tilt: "_1NEHd7t-JVZYdk68QMEph-",
          ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
          ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
        };
      },
      51249: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Header: "_1QLD0WY-y0hqefed0ZhMn1",
          FullWidth: "xCXUyx3dF-dUDB7Y3lQp0",
          CarouselContentsRow: "_2CT-9HYp0yLUhxQviGsEM",
          WithFollowSection: "_2qwt8I2HnbOSGvdebzv4hf",
          CreatorHomeWithItems: "XIDYByW4BEOm-YiOiwGmO",
          WithFollowBtn: "Md5hrkaRH5SlzG0VFNLCQ",
          Carousel: "_3FF8OOtLO0K4fsjePly_rQ",
          Background: "_2Tqj7EzRCeIvjCq0R1MZiy",
          AvatarBackground: "_3SJGdY8UrEOW9-M8zAiXEi",
          ClanInfoRow: "_1KPIgTd9QjHihuus7qFfvw",
          ButtonContainer: "_3o1Ri_nyL6GsPbTQZGSZcT",
          CarouselFollowButton: "_33J1_MYWJVjXbCkBFCNr6f",
          ClanName: "_1l0-iEDSNo_iZ95BUT31hW",
          ClanAvatarImage: "PO1KWbUEvLt8ZVYRTAvMt",
          CarouselFollowSection: "_3-Zh-Ypvsn0buzyWGzuOQf",
          ClanInfoColumn: "fL1BVr1TCO7p3NcU6YlxG",
          CreatorHomeWithoutItems: "_24bEdzyRcz_FKDUqulljpX",
          ClanFollowTitle: "cSNCliWjnECzm1QAZPjDw",
          ClanFollowButtonContainer: "_2CipbQE9-jPKtQxmGJxtAs",
          FollowButton: "sAZjP8hrS9narmNgqgbXf",
        };
      },
      94846: (j) => {
        j.exports = {
          narrowWidth: "500px",
          ParentWidgetContainer: "_2fynndXXlBKZiRaoG9GuDP",
          ParentCapsuleImageContainer: "mcjC8_8ivZdyhU3QKlFrN",
          ParentCapsuleImage: "_2Ti5cIvl7SlIoK7eSIapbL",
          GameName: "_2xz5bttITZV5JH17r1qZsG",
          AppDetails: "IaIxKAMKgbunAgg62ymgi",
          PriceContainer: "_2i6LXaKqXiO0KV4Im0Fw-0",
          AddToWishlistButton: "RccYVBGN6ikWjuKE_Ba6N",
        };
      },
      1205: (j) => {
        j.exports = {
          narrowWidth: "500px",
          Header: "kR_xyFf2ghgC-Jexsw_5v",
          FullWidth: "_263kQddRJk-a3OP3ANz0Bv",
          StoreItemsCarousel: "_2BG1JKMgeqn_cr0rbRhRNA",
          StorePageCarousel: "_1wsWr6qsx_k-ElMmSpGcf",
          Title: "_2BGZunVy7Z0-h18owewCzo",
        };
      },
      89524: (j) => {
        j.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          strScrollSnapCarouselItemHeight: "168px",
          Carousel: "jGiY7rrZh0o9qrh7XNnZU",
          Capsule: "_292IWiCTro5jiTmIxiDfyc",
          Small: "_1mQ-hKJYGkL9gG76spf6uy",
          TwoWide: "_25IMXSN3XeXOPiu-sYHV1U",
          Placeholder: "_1tX6f_kWb07D_qLWgL7-Ah",
          SeeAllLink: "_1SnxJyZ5foWgNRCNLmKm6H",
          BackgroundAnimation: "_1upvVPGAs4gPDPuPdiwYLw",
          "ItemFocusAnim-darkerGrey-nocolor": "HZYxQObJqyV14ZPiEV6Lk",
          "ItemFocusAnim-darkerGrey": "_2ezINEgZ6JsrAsAeqd9me7",
          "ItemFocusAnim-darkGreySettings": "_3hMFH9HQiviY-7U9Fku-Bk",
          "ItemFocusAnim-darkGrey": "_1X6dhTonzVQgrOwVCmKMAA",
          "ItemFocusAnim-grey": "_10lr_URcMaBKxQoDCDSiW9",
          "ItemFocusAnim-translucent-white-10": "_2qAvXvRSJ5YY0wBBIwBCVs",
          "ItemFocusAnim-translucent-white-20": "_1jA2vfdCnoLEOAQXduMla",
          "ItemFocusAnimBorder-darkGrey": "_24pyz7i5duUDYEkH6dcM8a",
          "ItemFocusAnim-green": "_1Z9fl4e9G4PQnLxyIHXNKG",
          focusAnimation: "_268HCaPK9gD6A2Mw_o7sqP",
          hoverAnimation: "DbNTwkzqEh5siXLRNvICD",
        };
      },
    },
  ]);
})();
