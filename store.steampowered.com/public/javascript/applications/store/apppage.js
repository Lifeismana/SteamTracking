/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [57333, 38843],
    {
      84909: (y, ie, a) => {
        "use strict";
        a.d(ie, { A: () => W, p: () => he });
        var e = a(7850),
          c = a(90626),
          w = a(73788),
          $ = a(8083),
          X = a(94621),
          V = a(18938),
          B = a(24660),
          N = a(38566),
          L = a(54130),
          I = a(71742),
          Y = a(64238),
          te = a.n(Y),
          G = a(3877),
          se = a(3166);
        const k = (0, c.createContext)(null);
        function b(M) {
          const { children: K, ...F } = M,
            ne = ue(F);
          return (0, e.jsx)(k.Provider, { value: ne, children: K });
        }
        function j(M) {
          const { children: K } = M,
            F = c.Children.only(K),
            ne = (0, c.useContext)(k);
          return F
            ? ne
              ? (0, c.cloneElement)(F, {
                  ...ne.getReferenceProps(F.props),
                  ref: (0, V.XB)(F.props.ref, ne.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function H(M) {
          const { children: K, className: F, ref: ne } = M,
            E = (0, c.useContext)(k),
            ee = (0, w.SV)([
              ne,
              E?.floating.refs.setFloating,
              (je) => je?.showPopover?.(),
            ]);
          if (!E)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!E.open) return null;
          let O = c.Children.only(K),
            oe = c.Fragment;
          O.type == W.FocusManager &&
            ((O = c.Children.only(O.props.children)), (oe = T));
          const Ae = (0, c.cloneElement)(O, {
            ref: ee,
            style: { ...E.floating.floatingStyles },
            className: te()((0, G.T)(), F),
            popover: "manual",
            ...E.getFloatingProps(),
          });
          return (0, e.jsx)(oe, { children: Ae });
        }
        function T(M) {
          return (0, se.Qn)()
            ? (0, e.jsx)(q, { ...M })
            : (0, e.jsx)(_, { ...M });
        }
        function q(M) {
          const { children: K } = M,
            F = (0, c.useContext)(k);
          (0, I.wT)(
            !!F,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const ne = () => F.floating.context.onOpenChange(!1),
            E = c.useRef(void 0);
          return (
            (0, B.O7)(E, !!E.current, !1),
            (0, e.jsx)(N.D6, {
              navID: "Popover",
              onCancelButton: ne,
              modal: !0,
              navTreeRef: E,
              children: (0, e.jsx)("div", {
                style: { display: "contents" },
                children: (0, e.jsx)(L.q, { children: K }),
              }),
            })
          );
        }
        function _(M) {
          const { children: K } = M,
            F = (0, c.useContext)(k);
          return (
            (0, I.wT)(
              !!F,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, e.jsx)(w.s3, {
              context: F.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: K,
            })
          );
        }
        function ue(M) {
          const {
            open: K,
            onOpenChange: F,
            placement: ne,
            interactions: E = {},
          } = M;
          let ee = K;
          const O = (0, w.we)({
              open: ee,
              onOpenChange: F,
              middleware: he(M),
              whileElementsMounted: $.ll,
              placement: ne && typeof ne == "object" ? ne.initial : ne,
              strategy: "fixed",
              platform: {
                ...$.iD,
                getOffsetParent: (gt) =>
                  gt?.ownerDocument?.defaultView ?? window,
              },
            }),
            oe = { enabled: !!E.click },
            Ae = typeof E.click == "function" ? E.click(oe) : oe,
            je = (0, w.kp)(O.context, Ae),
            Ue = { enabled: !!E.focus },
            U = typeof E.focus == "function" ? E.focus(Ue) : Ue,
            ge = (0, w.iQ)(O.context, U),
            et = { handleClose: (0, w.iB)() },
            Me = typeof E.hover == "function" ? E.hover(et) : et,
            Ge = (0, w.Mk)(O.context, { enabled: !!E.hover, ...Me }),
            ct = (0, w.s9)(O.context),
            { getFloatingProps: dt, getReferenceProps: ut } = (0, w.bv)([
              je,
              ge,
              Ge,
              ct,
            ]);
          return {
            floating: O,
            getFloatingProps: dt,
            getReferenceProps: ut,
            open: ee,
          };
        }
        function he(M) {
          const { gutter: K = 0, placement: F } = M,
            ne = [],
            E = F && typeof F == "object";
          return (
            E && F.offset
              ? ne.push((0, X.cY)(F.offset))
              : (!E || F.offset === void 0) && ne.push((0, X.cY)(2)),
            E && F.flip
              ? ne.push((0, X.UU)(F.flip))
              : (!E || F.flip === void 0) && ne.push((0, X.UU)()),
            E && F.shift
              ? ne.push((0, X.BN)(F.shift))
              : (!E || F.shift === void 0) && ne.push((0, X.BN)()),
            ne.push(
              (0, X.Ej)({
                apply: (ee) => {
                  const { rects: O, elements: oe, availableHeight: Ae } = ee,
                    je = { boxSizing: "border-box", zIndex: "1" };
                  switch ((M.scroll && (je.overflowY = "auto"), M.width)) {
                    case "target": {
                      je.width = `${O.reference.width}px`;
                      break;
                    }
                    case "content": {
                      je.width = `${O.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let U = O.reference.width;
                      O.floating.width > U && U < 200 && (U = O.floating.width),
                        (je.width = `${U}px`);
                    }
                  }
                  typeof M.width == "function" &&
                    (je.width = M.width({
                      unContentWidth: O.floating.width,
                      unTargetWidth: O.reference.width,
                    }));
                  const Ue =
                    typeof K == "number" ? `${K}px` : `var(--spacing-${K})`;
                  typeof M.maxHeight == "function"
                    ? (je.maxHeight = M.maxHeight({
                        unAvailableHeight: Ae,
                        gutter: Ue,
                      }))
                    : typeof M.maxHeight == "number"
                      ? (je.maxHeight = `min( calc( ${Ae}px - ${Ue} ), ${M.maxHeight}px )`)
                      : typeof K == "number"
                        ? (je.maxHeight = `${Ae - K}px`)
                        : (je.maxHeight = `calc( ${Ae}px - var(--spacing-${K}) )`),
                    Object.assign(oe.floating.style, je),
                    oe.floating.style.setProperty(
                      "--popover-max-height",
                      je.maxHeight,
                    );
                },
              }),
            ),
            ne
          );
        }
        const W = { Root: b, Anchor: j, Positioner: H, FocusManager: T };
      },
      95994: (y, ie, a) => {
        "use strict";
        a.d(ie, { x: () => I });
        var e = a(7850),
          c = a(70182),
          w = a(64238),
          $ = a.n(w),
          X = a(8928),
          V = a(69289),
          B = a(75180),
          N = a.n(B),
          L = a(3166);
        function I(te) {
          const {
              as: G = "div",
              ref: se,
              focusable: k,
              navProps: b,
              ...j
            } = te,
            H = (0, L.Qn)(),
            T = (0, V.mz)({ ...j, className: $()(B.Grid, te.className) }, Y),
            q = k ?? b?.focusable ?? !!j.onClick,
            _ = (0, e.jsx)(G, { ref: se, ...T });
          return H
            ? (0, e.jsx)(c.J, {
                "flow-children": "grid",
                ...(b || {}),
                focusable: q,
                children: _,
              })
            : _;
        }
        const Y = [
          ...X.h,
          {
            prop: "display",
            responsive: !0,
            className: B.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: B.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: B.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: B.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: B.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: B.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: B.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: B.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: B.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: B.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: B.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: B.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: B.Gap,
            cssProperty: (te) => ["--grid-gap", `var(--spacing-${te})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: B.Gap,
            cssProperty: (te) => ["--grid-gap-x", `var(--spacing-${te})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: B.Gap,
            cssProperty: (te) => ["--grid-gap-y", `var(--spacing-${te})`],
          },
        ];
      },
      57152: (y, ie, a) => {
        "use strict";
        a.d(ie, { D: () => G });
        var e = a(7850),
          c = a(39049),
          w = a(8928),
          $ = a(15252),
          X = a(69289),
          V = a(90626);
        function B(b) {
          const { depth: j } = useContext(N);
          return jsx(N.Provider, {
            value: { depth: j + 1 },
            children: jsx(Box, { ...b }),
          });
        }
        const N = V.createContext({ depth: 0 });
        function L() {
          return (0, V.useContext)(N).depth;
        }
        var I = a(3877),
          Y = a(64238),
          te = a.n(Y);
        function G(b) {
          const { level: j = "auto", className: H, color: T } = b,
            q = L(),
            _ = k(j, q);
          return (0, e.jsx)(_, {
            ...(0, X.mz)(
              { ...b, className: te()((0, I.T)(), c.Heading, H) },
              se,
            ),
          });
        }
        const se = [
          ...$.U6,
          ...w.L,
          {
            prop: "size",
            responsive: !0,
            className: (b) => c[`HeadingSize-${b}`],
          },
        ];
        function k(b, j) {
          if (b === "auto" && j === 0) return "h1";
          const H = b === "auto" ? j.toString() : b;
          return /^[1-6]$/.test(H)
            ? "h" + H
            : b === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${H}".`,
                ),
                "h1");
        }
      },
      79014: (y, ie, a) => {
        "use strict";
        a.d(ie, { A: () => w, i: () => c });
        var e = a(90626);
        function c($, ...X) {
          const V = [],
            B = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let N = 0,
            L;
          for (; (L = B.exec($)); ) {
            (N += L[0].length), V.push(L[1]);
            const I = parseInt(L[2]),
              Y = L[3] || "",
              te = c(Y, ...X),
              se = (I >= 1 && I <= X.length ? X[I - 1] : null)
                ? e.cloneElement(X[I - 1], {}, Y ? te : null)
                : Y;
            V.push(se);
          }
          return V.push($.substr(N)), e.createElement(e.Fragment, null, ...V);
        }
        function w($, X = ["b", "i", "br"]) {
          const V = X.join("|"),
            B = [],
            N = new RegExp(
              `(?<before>.*?)<(?<tagname>${V})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let L = 0,
            I;
          for (; (I = N.exec($)); ) {
            if (!I.groups) continue;
            if (!I.groups?.endtag) {
              const k = I.groups.before.length + I.groups.tagname.length + 2;
              (L += k), (N.lastIndex = I.index + k), B.push(I.groups.before);
              const b = I[2],
                j = e.createElement(b);
              B.push(j);
              continue;
            }
            (L += I[0].length), B.push(I.groups.before);
            const Y = I.groups.tagname,
              te = I.groups.contents || "";
            let G = null;
            te && (G = w(te, X));
            const se = e.createElement(Y, {}, G);
            B.push(se);
          }
          return B.push($.slice(L)), e.createElement(e.Fragment, null, ...B);
        }
      },
      76962: (y, ie, a) => {
        "use strict";
        a.d(ie, { y: () => Y });
        var e = a(7850),
          c = a(24660),
          w = a(38566),
          $ = a(54130),
          X = a(64238),
          V = a.n(X),
          B = a(90626),
          N = a(3166),
          L = a(88208),
          I = a.n(L);
        const Y = Object.assign(te, { Root: G, Content: k });
        function te(b) {
          const { children: j, className: H, ...T } = b;
          return (0, e.jsx)(Y.Root, {
            ...T,
            children: (0, e.jsx)(Y.Content, { className: H, children: j }),
          });
        }
        function G(b) {
          const {
              onClose: j,
              className: H,
              navID: T,
              children: q,
              allowScrollBehind: _,
              ...ue
            } = b,
            [he, W] = B.useState(!1),
            M = B.useCallback((F) => {
              F &&
                (F.showModal(),
                F.ownerDocument.defaultView &&
                  W(
                    F.ownerDocument.body.scrollHeight >
                      F.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            K = B.useCallback(
              (F) => {
                F.target == F.currentTarget && j("backdropclick");
              },
              [j],
            );
          return (0, e.jsx)(se, {
            navID: T ?? "ModalDialog",
            onClose: j,
            children: (0, e.jsx)("dialog", {
              ref: M,
              className: V()(L.ModalDialog, !_ && he && L.PreventScroll, H),
              onClose: () => j("onclose"),
              onClick: K,
              ...ue,
              children: (0, e.jsx)($.q, { children: q }),
            }),
          });
        }
        function se(b) {
          const { navID: j, onClose: H, children: T } = b,
            q = B.useCallback(() => H("cancelbutton"), [H]),
            _ = B.useRef(void 0);
          return (
            (0, c.O7)(_, !0, !0),
            (0, N.Qn)()
              ? (0, e.jsx)(w.D6, {
                  navID: j ?? "ModalDialog",
                  onCancelButton: q,
                  modal: !0,
                  navTreeRef: _,
                  children: T,
                })
              : (0, e.jsx)(e.Fragment, { children: T })
          );
        }
        function k(b) {
          const { className: j, children: H } = b;
          return (0, e.jsx)("div", {
            className: V()(L.ModalDialogContent, j),
            onClick: (T) => T.stopPropagation(),
            children: H,
          });
        }
      },
      47604: (y, ie, a) => {
        "use strict";
        a.d(ie, { s: () => L });
        var e = a(7850),
          c = a(19298),
          w = a(64238),
          $ = a.n(w),
          X = a(36118),
          V = a(76962),
          B = a(5598),
          N = a.n(B);
        function L(I) {
          const {
            onClose: Y,
            className: te,
            navID: G,
            children: se,
            strTitle: k,
            ...b
          } = I;
          return (0, e.jsx)(V.y, {
            onClose: Y,
            navID: G ?? "SimpleModalDialog",
            ...b,
            children: (0, e.jsxs)("div", {
              className: $()(te, N().SimpleModalDialog),
              children: [
                " ",
                (0, e.jsxs)(c.Z, {
                  className: N().SimpleModalDialogHeader,
                  children: [
                    k &&
                      (0, e.jsx)("h2", {
                        className: N().SimpleModalDialogTitle,
                        children: k,
                      }),
                    (0, e.jsx)("button", {
                      onClick: (j) => (Y("xclick"), j.preventDefault(), !1),
                      className: N().XButton,
                      children: (0, e.jsx)(X.tmm, {}),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: N().SimpleModalContentCtn,
                  children: se,
                }),
              ],
            }),
          });
        }
      },
      42555: (y, ie, a) => {
        "use strict";
        a.d(ie, { n: () => F });
        var e = a(7850),
          c = a(33770),
          w = a(7487),
          $ = a(99412),
          X = a(90626),
          V = a(70187),
          B = a(24660),
          N = a(38340),
          L = a(98609);
        function I() {
          const E = new URL(window.location.href),
            O = E.pathname.split("/")?.[2],
            oe = E.searchParams.get("beta") || "0",
            Ae = oe === "1" || oe === "true" || oe === "yes";
          return `${L.TS.STORE_ICON_BASE_URL}${O}/`;
        }
        function Y(E) {
          return (E = E.replace(N.qR, I())), E.replace("http://", "https://");
        }
        function te(E) {
          return E.replace(/{STEAM_APP_IMAGE}/g, I());
        }
        var G = a(25269),
          se = a(53113),
          k = a(18210),
          b = a(39239),
          j = a(33001),
          H = a.n(j),
          T = a(67705),
          q = a(3166),
          _ = a(94162);
        function ue(E) {
          return new w.OJ(new w.R8());
        }
        function he(E) {
          const ee = new Map([
            ...Array.from(V.W4.entries()),
            ["img", { Constructor: ne, autocloses: !1 }],
            ["sup", { Constructor: W, autocloses: !1 }],
            [
              "h6",
              { Constructor: M, autocloses: !1, skipFollowingNewline: !0 },
            ],
          ]);
          return E && ee.set("url", { Constructor: K, autocloses: !1 }), ee;
        }
        function W(E) {
          return (0, e.jsx)("sup", { children: E.children });
        }
        function M(E) {
          return (0, e.jsx)("h6", { children: E.children });
        }
        function K(E) {
          let ee = (0, G.J)(V.j$(E.args));
          return (
            !ee &&
              typeof E.children == "string" &&
              (0, se.DZ)(E.children) &&
              (ee = (0, G.J)(E.children)),
            ee
              ? (0, e.jsx)(B.Ii, { href: ee, children: E.children })
              : E.children || ""
          );
        }
        function F(E) {
          const { text: ee, languageOverride: O, bBypassLinkFilter: oe } = E,
            [Ae] = (0, X.useState)(new c.B(he(oe), ue, O || $.Bhc));
          return (0, e.jsx)("div", {
            className: H().StorePageBBCode,
            children: Ae.ParseBBCode(ee, {}, !0),
          });
        }
        function ne(E) {
          const { showErrorInfo: ee } = E.context;
          let O = E?.children?.toString();
          if (
            (O == null || O == null || O.length == 0) &&
            ((O = E?.args?.[""] || E?.args?.src),
            O == null || O == null || O.length == 0)
          )
            return "";
          const oe = (0, T.Fd)("store_page_asset_url", "application_config"),
            Ae = (0, T.Fd)("store_page_extra_assets_url", "application_config"),
            je = (0, T.Fd)("store_page_extra_assets_map", "application_config");
          if (oe && O.startsWith(N.qR + "/")) {
            const Ue = O.replace(N.qR + "/", "").toLowerCase(),
              U = je[Ue];
            if (U) {
              const ge = [];
              let et = !1;
              for (const Me of U) {
                const Ge = Me.urlPart;
                ge.push({
                  url: Ae.replace("%s", Ge),
                  extension: Me.extension,
                  alt_text: Me.alt_text ?? null,
                }),
                  (et = et || ["mp4", "webm"].includes(Me.extension));
              }
              if (et) {
                const Me = ge.find((C) => C.extension === "webm")?.url,
                  Ge = ge.find((C) => C.extension === "mp4")?.url,
                  ct = ge.find(
                    (C) =>
                      C.extension === ".poster.webp" ||
                      C.extension === ".poster.avif",
                  )?.url,
                  dt = ge.find(
                    (C) =>
                      C.alt_text?.length > 0 &&
                      (C.extension === "webm" || C.extension === "webm"),
                  )?.alt_text,
                  ut = (0, _.Wr)() || (0, _.Ae)(),
                  gt = (C) => {
                    const Ne = C.currentTarget;
                    Ne.paused ? Ne.play() : Ne.pause();
                  };
                return (0, e.jsxs)("video", {
                  className: H().StoreVideo,
                  poster: ct,
                  "aria-label": dt,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  onClick: gt,
                  children: [
                    Me &&
                      !ut &&
                      (0, e.jsx)("source", { src: Me, type: "video/webm" }),
                    Ge &&
                      !q.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: Ge, type: "video/mp4" }),
                  ],
                });
              } else {
                const Me = ge[0]?.alt_text,
                  Ge = ge[0]?.url;
                return (0, e.jsx)("img", {
                  className: H().StoreImage,
                  src: Ge,
                  alt: Me,
                });
              }
            } else O = oe.replace("%s", Ue);
          } else O = Y(O);
          return ee
            ? (0, e.jsx)(b.i, { className: H().StoreImage, src: O })
            : (0, e.jsx)("img", {
                className: H().StoreImage,
                src: O,
                alt: (0, k.we)("#EventEditor_InsertImage_URL"),
              });
        }
      },
      21079: (y, ie, a) => {
        "use strict";
        a.d(ie, {
          Dk: () => se,
          Mu: () => j,
          Y8: () => H,
          ws: () => k,
          zo: () => b,
        });
        var e = a(72604),
          c = a(35038),
          w = a(83153),
          $ = a(9682),
          X = a(41735),
          V = a.n(X),
          B = a(80902),
          N = a(75233),
          L = a(68312),
          I = a(77187),
          Y = a(3166),
          te = a(90626);
        function G(_) {
          return ["AppRelevanceStore", "FriendsRecommended", _];
        }
        function se(_) {
          const ue = (0, L.KV)();
          return (0, B.I)({
            queryKey: G(_),
            queryFn: () => T(ue, _),
            enabled: Y.iA.logged_in,
          });
        }
        function k() {
          const _ = (0, N.jE)();
          return te.useCallback(
            (ue, he) => {
              _.setQueryData(G(ue), he);
            },
            [_],
          );
        }
        function b(_) {
          return (0, B.I)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", _],
            queryFn: () => q(_),
            enabled: Y.iA.logged_in,
          });
        }
        function j() {
          return (0, I.PG)("App Relevance Store Top Sellers", {
            sort: w.Dq.Rm,
            start: 0,
            count: 100,
          });
        }
        function H() {
          const { data: _ } = j();
          return _;
        }
        async function T(_, ue) {
          const he = c.w.Init($.KV);
          he.Body().set_appid(ue);
          const W = await $.YK.GetFriendsRecommendedApp(_, he),
            M = W.GetEResult();
          if (M == e.R) return W.Body().toObject();
          throw `Error ${M} failed to call GetFriendsRecommendedApp ${ue}`;
        }
        async function q(_) {
          let ue = { appid: _ },
            he = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const M = (
            await V().get(
              `${Y.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: ue, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            M &&
              M.success == e.R &&
              (M.results.similar_played_apps &&
                (he.arrSimilarPlayedApps = M.results.similar_played_apps.map(
                  (K) => ({
                    appid: K.appid,
                    playtimeForever: K.playtime_forever,
                  }),
                )),
              M.results.recommended_by_ir && (he.bRecommendedByIR = !0)),
            he
          );
        }
      },
      63547: (y, ie, a) => {
        "use strict";
        a.d(ie, { QW: () => k, VZ: () => se, g: () => te, kF: () => Y });
        var e = a(72604),
          c = a(35038),
          w = a(55051),
          $ = a(72609),
          X = a(80902),
          V = a(75233),
          B = a(51614),
          N = a(90626),
          L = a(68312);
        const I = "PlaytestInvites";
        function Y() {
          const b = (0, L.KV)();
          return (0, X.I)({
            queryKey: [I],
            queryFn: async () => {
              const j = c.w.Init(w.rX),
                H = await w.BX.GetInvites(b, j);
              if (H.GetEResult() != e.R)
                throw new Error(
                  `Error from usePlaytestInvite: ${H.GetEResult()} ${H.GetErrorMessage()}`,
                );
              return H.Body()?.toObject().invites ?? [];
            },
          });
        }
        function te(b) {
          const j = (0, L.KV)(),
            H = (0, V.jE)();
          return (0, B.n)({
            mutationFn: async (T) => {
              const q = c.w.Init(w.q);
              q.Body().add_invite_ids(b),
                q.Body().set_status(T.bAccept ? w.b1.T5 : w.b1.eh);
              const _ = await w.BX.UpdateInvites(j, q);
              if (_.GetEResult() != e.R)
                throw {
                  result: _.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${_.GetErrorMessage()} ( ${_.GetEResult()} )`,
                };
            },
            onSuccess: (T, q) => {
              H.setQueryData([I], (_) =>
                _.map((ue) =>
                  ue.invite_id === b
                    ? { ...ue, status: q.bAccept ? w.b1.T5 : w.b1.eh }
                    : ue,
                ),
              );
            },
            onError: () => {
              H.invalidateQueries({ queryKey: [I] });
            },
          });
        }
        function G(b) {
          return ["PlaytestUserStatus", b];
        }
        function se(b) {
          const j = (0, L.KV)();
          return (0, X.I)({
            queryKey: G(b),
            queryFn: async () => {
              if ($.iA.logged_in) {
                const H = c.w.Init(w.eW);
                b && H.Body().set_appid(b);
                const T = await w.BX.GetUserStatus(j, H);
                if (T.GetEResult() != e.R)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${T.GetEResult()} ${T.GetErrorMessage()}`,
                  );
                return T.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function k() {
          const b = (0, V.jE)();
          return N.useCallback(
            (j, H) => {
              b.setQueryData(G(j), H);
            },
            [b],
          );
        }
      },
      90114: (y, ie, a) => {
        "use strict";
        a.r(ie),
          a.d(ie, {
            OpenInDesktopClient: () => L,
            default: () => Y,
            useOpenWebInSteamClient: () => I,
          });
        var e = a(7850),
          c = a(90626),
          w = a(25792),
          $ = a(97824),
          X = a.n($),
          V = a(3166),
          B = a(97996),
          N = a(18210);
        const L = (0, w.Nr)(function (G) {
          const { fnOpenInSteamClient: se } = I();
          return (0, e.jsx)("div", {
            className: $.OpenInBannerContainer,
            children: (0, e.jsxs)("div", {
              className: $.OpenInBannerContent,
              children: [
                (0, e.jsx)("div", {
                  className: $.BannerButtonContainer,
                  children: (0, e.jsx)("div", {
                    onClick: se,
                    className: $.BannerButton,
                    children: (0, N.we)(
                      "#OpenInDesktopAppBanner_OpenAppButton",
                    ),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: $.BannerMessage,
                  children: (0, e.jsxs)("div", {
                    className: $.BannerTitle,
                    children: [
                      (0, e.jsx)("b", {
                        children: (0, N.we)(
                          "#OpenInDesktopAppBanner_NotSignedIn",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, N.we)("#OpenInDesktopAppBanner_Body"),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
        function I() {
          return {
            fnOpenInSteamClient: c.useCallback(() => {
              let G = `${(0, V.yl)()}//openurl/`;
              const se = (0, B.VY)("browserid");
              if (se) {
                const k = new URL(window.location.href),
                  b = new URLSearchParams(k.search);
                b.set("utm_bid", se),
                  (G += k.origin + k.pathname + "?" + b.toString() + k.hash);
              } else G += window.location.href;
              window.location.href = G;
            }, []),
          };
        }
        const Y = L;
      },
      62038: (y, ie, a) => {
        "use strict";
        a.r(ie),
          a.d(ie, {
            AccessibilityFeatureDisplay: () => k,
            AccessibilityFeaturesFromCategories: () => se,
            AccessibilityIcon: () => b,
          });
        var e = a(7850),
          c = a(90626),
          w = a(18210),
          $ = a(3166),
          X = a(63404),
          V = a.n(X),
          B = a(24660),
          N = a(99412);
        const L = {
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
          I = {
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
        var Y = ((T) => (
          (T.Gameplay = "gameplay"),
          (T.Visual = "visual"),
          (T.Audio = "audio"),
          (T.Input = "input"),
          T
        ))(Y || {});
        const te = {
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
          G = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function se(T) {
          return {
            bAccessibilityResizableUI: T.includes(N.mWc),
            bAccessibilitySubtitles: T.includes(N.sCr),
            bAccessibilityColorAlternatives: T.includes(N.eEM),
            bAccessibilityCameraComfort: T.includes(N.YAh),
            bAccessibilityBackgroundVolumeControls: T.includes(N.Tby),
            bAccessibilityStereoSound: T.includes(N.a2r),
            bAccessibilitySurroundSound: T.includes(N.Obu),
            bAccessibilityNarratedMenus: T.includes(N.C0f),
            bAccessibilityChatSpeechtoText: T.includes(N.FpT),
            bAccessibilityChatTexttoSpeech: T.includes(N.r_E),
            bAccessibilityPlayableWithoutQuicktimeEvents: T.includes(N.eY9),
            bAccessibilityKeyboardOnlyOption: T.includes(N.TQL),
            bAccessibilityMouseOnlyOption: T.includes(N.beA),
            bAccessibilityTouchOnlyOption: T.includes(N.Pw_),
            bAccessibilityDifficultyLevels: T.includes(N.j2d),
            bAccessibilitySaveAnytime: T.includes(N.Rnx),
            bAccessibilityPlayableAtYourOwnPace: T.includes(N.eAR),
            bAccessibilityPlayableWithoutVision: T.includes(N.tIg),
            bAccessibilityContrastControls: T.includes(N.vVO),
          };
        }
        function k(T) {
          const [q, _] = (0, c.useState)(T.initialOpen ?? !1),
            ue = c.useId(),
            he = Object.entries(T.features)
              .filter(([K, F]) => F)
              .map(([K]) => K);
          if (he.length === 0) return null;
          const W = {};
          he.forEach((K) => {
            const F = te[K];
            (W[F] ??= []), W[F].push(K);
          });
          const M = Object.keys(W).length > 1;
          return (0, e.jsxs)("details", {
            className: V().Details,
            open: q,
            onToggle: (K) => _(K.currentTarget.open),
            children: [
              (0, e.jsxs)(B.f_, {
                className: V().Summary,
                children: [
                  (0, e.jsx)("div", {
                    className: V().ImageContainer,
                    children: (0, e.jsx)(b, {
                      className: V().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, e.jsxs)("span", {
                    className: V().FeatureNameContainer,
                    id: ue,
                    children: [
                      (0, e.jsx)("span", {
                        className: V().FeatureName,
                        children: q
                          ? (0, w.we)("#AccessibilityFeatures")
                          : (0, w.we)(
                              "#AccessibilityFeaturesWithCount",
                              he.length,
                            ),
                      }),
                      (0, e.jsx)("a", {
                        className: V().InfoLink,
                        href: `${$.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("ul", {
                className: V().FeatureList,
                "aria-labelledby": ue,
                children: [
                  M &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        W.gameplay &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(j, {
                              group: "gameplay",
                              features: W.gameplay,
                              open: q,
                            }),
                          }),
                        W.visual &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(j, {
                              group: "visual",
                              features: W.visual,
                              open: q,
                            }),
                          }),
                        W.audio &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(j, {
                              group: "audio",
                              features: W.audio,
                              open: q,
                            }),
                          }),
                        W.input &&
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(j, {
                              group: "input",
                              features: W.input,
                              open: q,
                            }),
                          }),
                      ],
                    }),
                  !M &&
                    he.map((K) =>
                      (0, e.jsx)(
                        "li",
                        { children: (0, e.jsx)(H, { feature: K, open: q }) },
                        K,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function b(T) {
          return (0, e.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ...T,
            children: [
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, e.jsx)("path", {
                fill: "currentColor",
                d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function j(T) {
          const q = c.useId();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("span", {
                className: V().GroupLabel,
                id: q,
                children: (0, w.we)(G[T.group]),
              }),
              (0, e.jsx)("ul", {
                className: V().FeatureGroupItems,
                "aria-labelledby": q,
                children: T.features.map((_) =>
                  (0, e.jsx)(
                    "li",
                    { children: (0, e.jsx)(H, { feature: _, open: T.open }) },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        function H(T) {
          return (0, e.jsx)(B.Ii, {
            href: `${$.TS.STORE_BASE_URL}category/${I[T.feature]}`,
            className: V().InfoRow,
            focusable: T.open,
            children: (0, e.jsx)("span", {
              className: V().FeatureNameContainer,
              children: (0, e.jsx)("span", {
                className: V().FeatureName,
                children: (0, w.we)(L[T.feature]),
              }),
            }),
          });
        }
      },
      61711: (y, ie, a) => {
        "use strict";
        a.r(ie), a.d(ie, { default: () => te });
        var e = a(7850),
          c = a(54130),
          w = a(19298),
          $ = a(20169),
          X = a(97525),
          V = a(18210),
          B = a(3166),
          N = a(1205),
          L = a.n(N),
          I = a(94502),
          Y = a(36707);
        function te(G) {
          const {
              title: se,
              navKey: k,
              seeAllLink: b,
              appIDs: j,
              sortOrder: H,
              scorePenaltyIfOwned: T,
              capsuleSize: q,
              bFullWidth: _,
            } = G,
            ue = (0, B.Qn)(),
            { bShowSeeMoreHint: he, panelProps: W } = (0, X.i)(b);
          return (0, e.jsx)(w.Z, {
            className: (0, Y.A)(L().StoreItemsCarousel, _ && L().FullWidth),
            navEntryPreferPosition: $.iU.PREFERRED_CHILD,
            ...W,
            children: (0, e.jsxs)(c.q, {
              children: [
                (0, e.jsxs)("div", {
                  className: L().Header,
                  children: [
                    (0, e.jsx)("div", { className: L().Title, children: se }),
                    !ue && (0, e.jsx)(I.H, { url: b }),
                    ue &&
                      (0, e.jsx)(X.o, {
                        label: (0, V.we)("#StoreApp_SeeAll"),
                        shown: he,
                      }),
                  ],
                }),
                (0, e.jsx)(w.Z, {
                  preferredFocus: !0,
                  children: (0, e.jsx)(I._, {
                    navKey: k,
                    classes: L().StorePageCarousel,
                    appIDs: j,
                    maxItemCount: 4,
                    sortOrder: H,
                    scorePenaltyIfOwned: T,
                    capsuleSize: q,
                  }),
                }),
              ],
            }),
          });
        }
      },
      94502: (y, ie, a) => {
        "use strict";
        a.d(ie, { H: () => W, _: () => _ });
        var e = a(7850),
          c = a(24660),
          w = a(56062),
          $ = a(90626),
          X = a(24805),
          V = a(18994),
          B = a(6469),
          N = a(10142),
          L = a(10349),
          I = a(84676),
          Y = a(36707),
          te = a(18210),
          G = a(3166),
          se = a(68538),
          k = a(96117),
          b = a(89524),
          j = a.n(b);
        const H = -1,
          T = parseInt(j().strScrollSnapCarouselItemHeight),
          q = 250;
        function _(M) {
          const {
              navKey: K,
              classes: F,
              appIDs: ne,
              sortOrder: E,
              scorePenaltyIfOwned: ee,
              capsuleSize: O,
              maxItemCount: oe,
              mapAppToCreatorClan: Ae,
              strFeatureFirstAppMsg: je,
              setNumberVisibleItems: Ue,
            } = M,
            U = (0, V.a4)(910),
            ge = (0, G.Qn)(),
            [et, Me] = (0, B.L2)(),
            [Ge, ct] = $.useState(ne),
            dt = (0, I.zX)(ne, X.Xh),
            [ut, gt] = $.useState(null);
          $.useEffect(() => {
            if (dt == I.Sq) return;
            const Ne = ne.filter(
              (De) => !N.A.Get().BIsStoreItemMissing(De, w.c6.qI),
            );
            if (je && U && !ge && Ne.length > 0 && Ne[0] == ne[0]) {
              const De = [Ne[0], H, ...Ne.slice(1)];
              ct(De), gt(je), Ue?.(De.length);
            } else ct(Ne), Ue?.(Ne.length);
          }, [ne, ge, U, dt, Ue, je]);
          const C = ge;
          return (0, e.jsx)(se.F, {
            className: (0, Y.A)(F, {
              SaleSectionCarousel: !0,
              [j().Carousel]: !0,
            }),
            visibleElements: oe,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderHeight: T,
            lazyRenderPlaceholderWidth: q,
            gap: 12,
            hideArrows: !1,
            screenIsWide: U,
            navKey: K,
            bForceSimpleCarousel: C,
            children: he(Me, Ge, E ?? "none", ee ?? 3).map((Ne, De) =>
              (0, e.jsx)(
                ue,
                {
                  appID: Ne,
                  size: O,
                  creatorClanAccountID: Ae?.get(Ne),
                  strFeaturingMsg: De == 0 && ut ? ut : void 0,
                },
                Ne,
              ),
            ),
          });
        }
        function ue(M) {
          const {
              appID: K,
              size: F,
              creatorClanAccountID: ne,
              strFeaturingMsg: E,
            } = M,
            [ee] = (0, I.G6)(K, w.c6.qI, X.Xh);
          if (K == H)
            return (0, e.jsx)("div", {
              className: (0, Y.A)({
                [j().Capsule]: !0,
                [j().Small]: F == "small",
              }),
            });
          if (!ee)
            return (0, e.jsx)("div", {
              className: (0, Y.A)(j().Capsule, j().Placeholder),
            });
          const O = (0, L._4)(ee.GetStoreItemType(), ee.GetAppType()),
            oe = { id: ee.GetID(), type: O },
            Ae = !!E;
          return (0, e.jsx)("div", {
            className: (0, Y.A)({
              [j().Capsule]: !0,
              [j().TwoWide]: Ae,
              [j().Small]: F == "small",
            }),
            children: (0, e.jsx)(k.W, {
              capsule: oe,
              imageType: "header",
              bHidePlatforms: !0,
              bHideStoreHover: Ae,
              creatorAccountID: ne,
              strDoubleCapsuleMessage: Ae ? (0, te.we)(E) : void 0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function he(M, K, F, ne) {
          const E = $.useMemo(
              () => K.filter((O) => !M.BIsGameIgnored(O)),
              [K, M],
            ),
            ee = $.useMemo(
              () => Array.from({ length: E.length }, () => Math.random()),
              [E.length],
            );
          return F == "shuffle"
            ? E.map((O, oe) => {
                const Ae =
                  (M.BIsGameOwned(O) ? ne : 0) +
                  (Math.sqrt(oe) + 2) * ee[oe] +
                  Math.sqrt(oe);
                return { id: O, score: Ae };
              })
                .sort((O, oe) => O.score - oe.score)
                .map((O) => O.id)
            : F == "scored"
              ? E.map((O, oe) => ({
                  id: O,
                  score: M.BIsGameOwned(O) ? ne + oe : oe,
                }))
                  .sort((O, oe) => O.score - oe.score)
                  .map((O) => O.id)
              : E;
        }
        function W(M) {
          const { url: K } = M;
          return K
            ? (0, e.jsx)(c.Ii, {
                href: K,
                className: (0, Y.A)(
                  j().SeeAllLink,
                  "btnv6_grey_black btn_medium",
                ),
                children: (0, e.jsx)("span", {
                  children: (0, te.we)("#StoreApp_SeeAll"),
                }),
              })
            : void 0;
        }
      },
      78767: (y, ie, a) => {
        "use strict";
        a.r(ie),
          a.d(ie, {
            AppGameInterestCacheInit: () => Ja,
            AppStoreBrowseCacheInit: () => $a,
            default: () => xu,
          });
        var e = a(7850),
          c = a(90626),
          w = a(65329),
          $ = a(72849),
          X = a(7582),
          V = a(53025),
          B = a(71157),
          N = a(90537),
          L = a(24660),
          I = a(19298),
          Y = a(20169),
          te = a(95174),
          G = a(39905),
          se = a(79118),
          k = a(12037),
          b = a(36118),
          j = a(18210);
        function H(n) {
          return (0, e.jsxs)("div", {
            className: k.LatestUpdateButtonCtn,
            children: [
              (0, e.jsx)("div", {
                className: k.LatestUpdateIcon,
                children: (0, e.jsx)(b.UTF, { role: "presentation" }),
              }),
              (0, e.jsx)(L.ml, {
                className: k.LatestUpdateButton,
                onClick: n.onClick,
                children: G.Z.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, j._l)(n.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function T(n) {
          const { nUpdateTime: t, announcementGID: s, onClick: o } = n,
            r = s ? se.O3.GetClanEventFromAnnouncementGID(s) : null,
            i = te.u;
          return (0, e.jsxs)("div", {
            className: k.Container,
            children: [
              (0, e.jsxs)("h2", {
                children: [
                  (0, j.we)("#EventBrowse_LastUpdateDate", (0, j._l)(t)),
                  (0, e.jsx)(L.ml, {
                    className: k.SectionButton,
                    onClick: (l) => {
                      o?.(), l.stopPropagation(), l.preventDefault();
                    },
                    children: (0, j.we)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!r &&
                (0, e.jsx)(I.Z, {
                  className: k.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: Y.iU.PREFERRED_CHILD,
                  children: (0, e.jsx)(i, {
                    event: r,
                    onClick: (l) => {
                      o?.(), l.stopPropagation(), l.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var q = a(54130),
          _ = a(56492),
          ue = a(33902),
          he = a(71568),
          W = a(3166);
        const M = 500;
        function K(n) {
          const {
              strClassName: t,
              rgEvents: s,
              fnEventShowModal: o,
              elPostRowElement: r,
              bViewAllShowInfiniteScroll: i,
              nSummaryMaxLength: l,
            } = n,
            u = (0, ue.d)(),
            d = (0, he.R7)(),
            p = (0, W.Qn)();
          let m = 2,
            h = M + 1;
          return (
            d.ownerWindow.window
              ? (h = d.ownerWindow.window.innerWidth)
              : u.viewportWidth && (h = u.viewportWidth.value),
            (m = h <= M ? 1 : 2),
            s && s.length == 0 && !r
              ? null
              : (0, e.jsxs)(I.Z, {
                  className: t,
                  "flow-children": "row",
                  children: [
                    !!s &&
                      s.length > 0 &&
                      (0, e.jsx)("div", {
                        className: k.Container,
                        children: (0, e.jsxs)(q.q, {
                          children: [
                            (0, e.jsxs)("h2", {
                              children: [
                                G.Z.Localize("#EventBrowse_RecentEvents"),
                                !p &&
                                  !!s &&
                                  (0, e.jsx)(e.Fragment, {
                                    children:
                                      i && o
                                        ? (0, e.jsx)(L.ml, {
                                            className: k.SectionButton,
                                            onClick: () => o(s[0]),
                                            children: G.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, e.jsx)(_.tj, {
                                            eventModel: s[0],
                                            route: _.PH.k_eViewWebSiteHub,
                                            className: k.SectionButton,
                                            children: G.Z.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          }),
                                  }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: k.EventsSummariesCtn,
                              children: s.slice(0, m).map((f) => {
                                const x =
                                  o && !(0, _.sY)()
                                    ? (v) => {
                                        o(f),
                                          v.stopPropagation(),
                                          v.preventDefault();
                                      }
                                    : void 0;
                                return (0, e.jsx)(
                                  te.u,
                                  {
                                    event: f,
                                    onClick: x,
                                    nSummaryMaxLength: l,
                                  },
                                  f.GID,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                    r,
                  ],
                })
          );
        }
        var F = a(49984),
          ne = a(19188),
          E = a(96538),
          ee = a(30096);
        function O(n) {
          const {
              trackingLocation: t,
              strClassName: s,
              bViewAllShowInfiniteScroll: o,
            } = n,
            [r, i, l] = (0, ee.uD)(),
            [u, d] = (0, c.useState)(null),
            [p, m] = (0, c.useState)(void 0),
            h = (0, N.Y)(),
            f = (0, c.useCallback)(() => {
              d(null), l();
            }, [l]),
            x = (0, c.useCallback)(
              (z) => {
                t &&
                  z &&
                  z.BIsPartnerEvent() &&
                  h.MarkEventRead(z.GID, z.clanSteamID.GetAccountID(), t) &&
                  h.Flush(),
                  d(z),
                  m(void 0),
                  i();
              },
              [t, h, i],
            ),
            { last_update_event: v, rgEvents: A } = oe({
              ...n,
              fnEventShowModal: x,
            }),
            P = (0, c.useCallback)(() => {
              const {
                event_gid: z,
                announcement_gid: Te,
                clan_account_id: Ee,
              } = v;
              t && z && h.MarkEventRead(z, Ee, t) && h.Flush(),
                m(Te),
                d(null),
                i();
            }, [v, i, h, t]);
          (0, c.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (z, Te) => {
                m(Te), d(null), m(Te), i();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [i],
          );
          const R = (0, W.Qn)(),
            ae = !!v && !!v.rtime,
            Z =
              ae && !!v.announcement_gid && (!A || A.length == 0)
                ? v.announcement_gid
                : void 0;
          let J;
          return (
            ae && Z
              ? (J = (0, e.jsx)(T, {
                  nUpdateTime: v.rtime,
                  announcementGID: Z,
                  onClick: P,
                }))
              : ae &&
                !Z &&
                !R &&
                (J = (0, e.jsx)(H, { nUpdateTime: v.rtime, onClick: P })),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(E.EN, {
                  active: r,
                  children: (0, e.jsx)(je, {
                    ...n,
                    announcementGID: p || u?.AnnouncementGID,
                    eventModel: u,
                    closeModal: f,
                  }),
                }),
                (0, e.jsx)(K, {
                  elPostRowElement: J,
                  rgEvents: A,
                  fnEventShowModal: x,
                  bViewAllShowInfiniteScroll: o,
                  strClassName: s,
                }),
              ],
            })
          );
        }
        function oe(n) {
          const {
              appid: t,
              event_customization: s,
              partnerEventStore: o,
              trackingLocation: r,
              fnEventShowModal: i,
            } = n,
            [l, u] = (0, c.useState)(null),
            [d, p] = (0, c.useState)(null),
            m = (0, N.Y)(),
            [h] = (0, B.Q)("emgid", void 0),
            [f] = (0, B.Q)("announce_gid", void 0);
          return (
            (0, c.useEffect)(() => {
              const x = (0, F.v)("EventWebRowEmbed");
              let v = !1;
              if (Ae(x)) {
                (v = x.bPreLoaded), u(x.last_update_event);
                const A = [];
                x.announcementGIDList.forEach((P) => {
                  const R = se.O3.GetClanEventFromAnnouncementGID(P);
                  R && A.push(R);
                }),
                  p(A);
              }
              v ||
                (async () => {
                  const P = await o.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    t,
                    0,
                    2,
                    s,
                  );
                  p(P),
                    r &&
                      P &&
                      P.length > 0 &&
                      (P.filter((R) => R.BIsPartnerEvent()).forEach((R) =>
                        m.MarkEventShown(
                          R.GID,
                          R.clanSteamID.GetAccountID(),
                          r,
                        ),
                      ),
                      m.Flush());
                })();
            }, [t, s, i, o, m, r]),
            (0, c.useEffect)(() => {
              if (d != null && (h || f)) {
                const x = d.find((v) => v.GID === h || v.AnnouncementGID == f);
                x
                  ? i(x)
                  : (async () => {
                      const A = h
                        ? await o.LoadPartnerEventFromClanEventGID(t, h, 0)
                        : await o.LoadPartnerEventFromAnnoucementGID(t, f, 0);
                      A && p([...d, A]);
                    })();
              }
            }, [h, f, d, i, p, o, t]),
            { last_update_event: l, rgEvents: d }
          );
        }
        function Ae(n) {
          const t = n;
          return t && typeof t == "object"
            ? t.bPreLoaded !== void 0 &&
                typeof t.bPreLoaded == "boolean" &&
                Array.isArray(t.announcementGIDList)
            : !1;
        }
        function je(n) {
          const {
              appid: t,
              partnerEventStore: s,
              trackingLocation: o,
              announcementGID: r,
              eventModel: i,
              closeModal: l,
            } = n,
            u = (0, W.Qn)();
          return (0, e.jsx)(ne.N, {
            className: u ? void 0 : k.StoreHeaderAdjust,
            eventClassName: u ? k.GamePadUIWidthAdjust : void 0,
            appid: t,
            trackingLocation: o,
            announcementGID: r,
            partnerEventStore: s,
            eventModel: i ?? void 0,
            closeModal: l,
          });
        }
        function Ue(n) {
          const t = (0, X.s4)(),
            s = new Date(t.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            o = Math.floor(s.getTime() / 1e3),
            { appid: r } = n;
          return (0, e.jsx)(O, {
            appid: r,
            partnerEventStore: V.$.Get(),
            event_customization: {
              rtime_oldestevent: o,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [w.G$._C],
            },
            strClassName: "early_access_announcements",
            trackingLocation: $.Tc.j$,
          });
        }
        var U = a(99412),
          ge = a(64868),
          et = a(41735),
          Me = a.n(et),
          Ge = a(29522),
          ct = a(58483),
          dt = a(82385),
          ut = a(29245),
          gt = a(27284),
          C = a(40358),
          Ne = a(72429),
          De = a(6019);
        function eo(n) {
          const t = (0, c.useRef)(null),
            s = (0, ct.LJ)(),
            o = Number(n.appID),
            r = (0, Ge.$5)(o),
            { data: i } = (0, C.J$)(r),
            [l, u] = (0, c.useState)(null);
          (0, c.useEffect)(
            () => (
              (async () => {
                const v = Me().CancelToken.source();
                t.current = v.cancel;
                const A = {
                    exclude_tags: ["steam_game_festival_artist_statement"],
                    require_tags: ["steam_game_festival_broadcast"],
                  },
                  P = await se.O3.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    o,
                    0,
                    1,
                    A,
                  );
                v.token.reason || (P.length > 0 && u(P[0]));
              })(),
              () => {
                t.current && t.current("DemoAndQuickPitch: Unmounting");
              }
            ),
            [o],
          );
          const [d, p, m] = (0, ge.uD)(),
            h = l ? l.GetNameWithFallback((0, U.sfN)(W.TS.LANGUAGE)) : null,
            f = l ? l.BHasEventEnded() : !0;
          return !i ||
            !i.related_items?.demo_appid ||
            i.related_items?.demo_appid.length == 0
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsxs)("div", {
                    className: De.TileContainer,
                    children: [
                      (0, e.jsxs)("div", {
                        className: De.TileTitleContainer,
                        children: [
                          (0, e.jsxs)("div", {
                            className: De.TileTitleInnerContainer,
                            children: [
                              (0, e.jsx)("div", {
                                className: De.TileTitle,
                                children: (0, j.we)(
                                  "#Sale_DownloadDemo",
                                  i.name || "",
                                ),
                              }),
                              (0, e.jsx)(ut.Q, { id: r }),
                            ],
                          }),
                          (0, e.jsx)(gt.j, {
                            id: r,
                            className: De.TileActionButton,
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: De.TileActionContainer,
                        children:
                          l &&
                          h &&
                          (0, e.jsxs)("div", {
                            className: De.TileActionInnerContainer,
                            children: [
                              f
                                ? (0, e.jsx)("h1", {
                                    children: (0, j.we)(
                                      "#EventBrowse_RecentUpdates",
                                    ),
                                  })
                                : (0, e.jsx)("h1", {
                                    children: (0, j.we)(
                                      "#EventCalendar_TuneIn",
                                    ),
                                  }),
                              (0, e.jsxs)("div", {
                                className: De.TileActionInner,
                                onClick: p,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: De.TileActionInnerTitle,
                                    children: h,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: De.TileActionInnerText,
                                    children: (0, e.jsx)(Ne.K4, {
                                      dateAndTime:
                                        l.GetStartTimeAndDateUnixSeconds(),
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
                  (0, e.jsx)(E.EN, {
                    active: d,
                    children: (0, e.jsx)(dt.AD, {
                      initialEvent: l,
                      bShowOnlyInitialEvent: !1,
                      partnerEventStore: se.O3,
                      emoticonStore: s,
                      showAppHeader: !0,
                      closeModal: m,
                    }),
                  }),
                ],
              });
        }
        var qt = a(20076),
          to = a(84750),
          D = a(36707),
          no = a(27510),
          Oe = a.n(no),
          Le = a(56718),
          _t = a(53906);
        const yu = new to.cE();
        var en = ((n) => (
          (n[(n.EPurchaseNoticeType_ControllerRequired = 0)] =
            "EPurchaseNoticeType_ControllerRequired"),
          (n[(n.EPurchaseNoticeType_VRRequired = 1)] =
            "EPurchaseNoticeType_VRRequired"),
          (n[(n.EPurchaseNoticeType_VRSupported = 2)] =
            "EPurchaseNoticeType_VRSupported"),
          n
        ))(en || {});
        function so(n) {
          const { appid: t, type: s } = n;
          switch (s) {
            case 0:
              return (0, e.jsx)(ao, { appid: t, controllerType: _t.Oh });
            case 1:
              return (0, e.jsx)(oo, {});
            default:
              return (0, e.jsx)(ro, {});
          }
        }
        function ao(n) {
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Oe().PurchaseNoticeContainer),
            children: [
              (0, e.jsx)("div", {
                className: (0, D.A)(Oe().PurchaseNoticeImageContainer),
                children: (0, e.jsx)(Le.xIk, {
                  type: "xbox",
                  className: (0, D.A)(Oe().PurchaseNoticeImage, Oe().Tilt),
                }),
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(Oe().PurchaseNoticeLabel),
                children: (0, j.we)("#PurchaseNotice_ControllerRequired"),
              }),
            ],
          });
        }
        function oo(n) {
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Oe().PurchaseNoticeContainer),
            children: [
              (0, e.jsx)("div", {
                className: (0, D.A)(Oe().PurchaseNoticeImageContainer),
                children: (0, e.jsx)(Le.oqe, {
                  className: (0, D.A)(Oe().PurchaseNoticeImage, Oe().VROnly),
                }),
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(Oe().PurchaseNoticeLabel),
                children: (0, j.we)("#PurchaseNotice_VRRequired"),
              }),
            ],
          });
        }
        function ro(n) {
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Oe().PurchaseNoticeContainer),
            children: [
              (0, e.jsx)("div", {
                className: (0, D.A)(
                  Oe().PurchaseNoticeImageContainer,
                  Oe().VRSupported,
                ),
                children: (0, e.jsx)(Le.Kkn, {
                  className: (0, D.A)(
                    Oe().PurchaseNoticeImage,
                    Oe().VRSupported,
                  ),
                }),
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(Oe().PurchaseNoticeLabel),
                children: (0, j.we)("#PurchaseNotice_VRSupported"),
              }),
            ],
          });
        }
        const Tn = so;
        var ps = a(97525),
          io = a(24805),
          ms = a(813),
          hs = a(60480),
          gs = ((n) => (
            (n[(n.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (n[(n.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            n
          ))(gs || {}),
          lo = a(10142),
          fs = a(84676),
          xs = a(37934),
          co = a(51249),
          ve = a.n(co),
          vs = a(94502);
        function uo(n) {
          const {
              clanID: t,
              title: s,
              seeAllLink: o,
              appIDs: r,
              rgAppIDToCreatorIDs: i,
              rgAllCreatorClanIDs: l,
              strFeatureFirstAppMsg: u,
              bFullWidth: d,
            } = n,
            p = (0, fs.zX)(r, io.Xh),
            m = (0, c.useMemo)(() => {
              const f = new Map(
                Object.entries(i).map(([x, v]) => [Number(x), v]),
              );
              if (p != fs.Sq && t == gs.k_CreatorHomeAll) {
                const x = new Set(l);
                r.forEach((v) => {
                  if (!f.has(v)) {
                    const A = lo.A.Get().GetApp(v);
                    A &&
                      A.GetAllCreatorClanIDs()?.some((P) =>
                        x.has(P) ? (f.set(v, P), !0) : !1,
                      );
                  }
                });
              }
              return f;
            }, [i, p, t, l, r]),
            h = "developer";
          return r.length > 0
            ? (0, e.jsx)(po, {
                creatorHomeType: h,
                clanID: t,
                titleOverride: s,
                seeAllLink: o,
                appIDs: r,
                mapAppIDsToCreatorClanID: m,
                strFeatureFirstAppMsg: u,
                bFullWidth: d,
              })
            : (0, e.jsx)(mo, { creatorHomeType: h, clanID: t, bFullWidth: d });
        }
        function po(n) {
          const {
              creatorHomeType: t,
              clanID: s,
              titleOverride: o,
              seeAllLink: r,
              appIDs: i,
              mapAppIDsToCreatorClanID: l,
              strFeatureFirstAppMsg: u,
              bFullWidth: d,
            } = n,
            p = (0, W.Qn)(),
            [m, h] = (0, ms.TB)(s),
            { creatorHome: f } = (0, hs.FV)(s),
            x = f?.GetCreatorHomeURL(t),
            [v, A] = c.useState(void 0),
            { bShowSeeMoreHint: P, panelProps: R } = (0, ps.i)(r);
          if (!f) return;
          const ae = !p && (u ? v == 1 : v <= 2) && h;
          return (0, e.jsx)(I.Z, {
            className: (0, D.A)(
              ve().CreatorHomeWithItems,
              ae ? ve().WithFollowBtn : "",
              d && ve().FullWidth,
            ),
            navEntryPreferPosition: Y.iU.PREFERRED_CHILD,
            ...R,
            children: (0, e.jsxs)(q.q, {
              children: [
                h?.creator_page_bg_url &&
                  (0, e.jsx)("div", {
                    className: ve().Background,
                    style: { backgroundImage: `url(${h.creator_page_bg_url})` },
                  }),
                (0, e.jsxs)(I.Z, {
                  className: ve().Header,
                  "flow-children": "row",
                  children: [
                    (0, e.jsxs)("div", {
                      className: ve().ClanInfoRow,
                      children: [
                        !!h &&
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(L.Ii, {
                              href: x,
                              focusable: x !== r,
                              children: (0, e.jsx)("img", {
                                className: ve().ClanAvatarImage,
                                src: f.GetAvatarURLFullSize(),
                              }),
                            }),
                          }),
                        (0, e.jsx)("img", {
                          className: ve().AvatarBackground,
                          src: f.GetAvatarURLFullSize(),
                        }),
                        (0, e.jsx)("div", {
                          className: ve().ClanName,
                          children: (0, e.jsx)("a", {
                            href: x,
                            children: o || f.GetName(),
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: ve().ButtonContainer,
                      children: [
                        !!(!ae && h && !p) &&
                          (0, e.jsx)(xs.of, {
                            className: ve().CarouselFollowButton,
                            clanAccountID: s,
                          }),
                        !p && (0, e.jsx)(vs.H, { url: r }),
                        p &&
                          (0, e.jsx)(ps.o, {
                            label: (0, j.we)("#StoreApp_SeeAll"),
                            shown: P,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsxs)(I.Z, {
                  className: (0, D.A)(
                    ve().CarouselContentsRow,
                    ae && ve().WithFollowSection,
                  ),
                  preferredFocus: !0,
                  children: [
                    (0, e.jsx)(vs._, {
                      navKey: "store_page_" + t,
                      classes: ve().Carousel,
                      appIDs: i,
                      maxItemCount: ae ? v : 4,
                      mapAppToCreatorClan: l,
                      strFeatureFirstAppMsg: u,
                      setNumberVisibleItems: A,
                    }),
                    ae &&
                      (0, e.jsx)("div", {
                        className: ve().CarouselFollowSection,
                        children: (0, e.jsx)(ys, {
                          clanID: s,
                          creatorName: f.GetName(),
                          creatorUrl: x,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function mo(n) {
          const { creatorHomeType: t, clanID: s, bFullWidth: o } = n,
            [r, i] = (0, ms.TB)(s),
            { creatorHome: l } = (0, hs.FV)(s),
            u = l?.GetCreatorHomeURL(t);
          if (l)
            return (0, e.jsxs)("div", {
              className: (0, D.A)(
                ve().CreatorHomeWithoutItems,
                o && ve().FullWidth,
              ),
              children: [
                i?.creator_page_bg_url &&
                  (0, e.jsx)("div", {
                    className: ve().Background,
                    style: { backgroundImage: `url(${i.creator_page_bg_url})` },
                  }),
                (0, e.jsx)("div", {
                  children: (0, e.jsx)("a", {
                    href: u,
                    children: (0, e.jsx)("img", {
                      className: ve().ClanAvatarImage,
                      src: l.GetAvatarURLFullSize(),
                    }),
                  }),
                }),
                (0, e.jsx)(ys, {
                  clanID: s,
                  creatorName: l.GetName(),
                  creatorUrl: u,
                }),
              ],
            });
        }
        function ys(n) {
          const { clanID: t, creatorName: s, creatorUrl: o } = n;
          return (0, e.jsxs)("div", {
            className: ve().ClanInfoColumn,
            children: [
              (0, e.jsx)("div", {
                className: ve().ClanFollowTitle,
                children: (0, e.jsx)("a", {
                  href: o,
                  children: (0, j.we)("#StoreApp_FollowCreator", s),
                }),
              }),
              (0, e.jsx)("div", {
                className: ve().ClanFollowSubtitle,
                children: (0, j.we)("#StoreApp_FollowCreatorSubtitle"),
              }),
              (0, e.jsx)("div", {
                className: ve().ClanFollowButtonContainer,
                children: (0, e.jsx)(xs.of, {
                  className: ve().FollowButton,
                  clanAccountID: t,
                }),
              }),
            ],
          });
        }
        var Wt = a(14947),
          tn = a(12997),
          En = a(64271),
          ho = a(65946),
          go = Object.defineProperty,
          fo = Object.getOwnPropertyDescriptor,
          nn = (n, t, s, o) => {
            for (
              var r = o > 1 ? void 0 : o ? fo(t, s) : t, i = n.length - 1, l;
              i >= 0;
              i--
            )
              (l = n[i]) && (r = (o ? l(t, s, r) : l(r)) || r);
            return o && r && go(t, s, r), r;
          };
        function xo(n) {
          let {
              id: t,
              dashManifests: s,
              hlsManifest: o,
              screenshot: r,
              title: i,
              category: l,
              statsURL: u,
            } = n,
            d = yo(),
            [p, m, h, f] = (0, ho.q3)(() => [
              !d.BPlayTrailer(t),
              d.BAutoplayEnabled(),
              d.GetPlayerVolume(),
              d.BAudioMuted(),
            ]),
            x = (0, c.useCallback)(() => {
              d.FireTrailerPlaybackEnded();
            }, [d]);
          return vo(p)
            ? (0, e.jsx)(tn.v, {
                autoplayEnabled: m,
                setAutoplayEnabled: d.GetSetAutoplayEnabled(),
                playerVolume: h,
                setPlayerVolume: d.GetSetPlayerVolume(),
                audioMuted: f,
                setAudioMuted: d.GetSetAudioMuted(),
                children: (0, e.jsx)(En.P, {
                  dashManifests: s,
                  hlsManifest: o,
                  screenshot: r,
                  forcePause: p,
                  onPlaybackEnd: x,
                  altText: i,
                  title: i,
                  category: l,
                  statsURL: u,
                }),
              })
            : null;
        }
        function vo(n) {
          let t = c.useRef(!1);
          return n || (t.current = !0), t.current;
        }
        class Ut {
          m_mapTrailerPlay = new Map();
          m_fnOnTrailerEnd;
          m_bAutoplayEnabled = !1;
          m_fnSetAutoplayEnabled;
          m_flPlayerVolume = 1;
          m_fnSetPlayerVolume;
          m_bAudioMuted = !0;
          m_fnSetAudioMuted;
          constructor() {
            (0, Wt.Gn)(this);
          }
          InitAutoplayMethods(t, s) {
            (this.m_bAutoplayEnabled = t), (this.m_fnSetAutoplayEnabled = s);
          }
          InitPlayerVolumeMethods(t, s) {
            (this.m_flPlayerVolume = t / 100),
              (this.m_fnSetPlayerVolume = (o) => {
                (o = o * 100), s(o);
              });
          }
          InitAudioMutedMethods(t, s) {
            (this.m_bAudioMuted = t), (this.m_fnSetAudioMuted = s);
          }
          UpdateAutoplay(t) {
            this.m_bAutoplayEnabled = t;
          }
          UpdateVolume(t) {
            this.m_flPlayerVolume = t / 100;
          }
          UpdateMuted(t) {
            this.m_bAudioMuted = t;
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
          SetTrailerState(t, s) {
            this.m_mapTrailerPlay.set(t, s);
          }
          SetTrailerEndCallback(t) {
            this.m_fnOnTrailerEnd = t;
          }
          FireTrailerPlaybackEnded() {
            this.m_fnOnTrailerEnd && this.m_fnOnTrailerEnd();
          }
          BPlayTrailer(t) {
            let s = this.m_mapTrailerPlay.get(t);
            return s === void 0 ? !1 : s;
          }
        }
        nn([Wt.sH], Ut.prototype, "m_mapTrailerPlay", 2),
          nn([Wt.sH], Ut.prototype, "m_bAutoplayEnabled", 2),
          nn([Wt.sH], Ut.prototype, "m_flPlayerVolume", 2),
          nn([Wt.sH], Ut.prototype, "m_bAudioMuted", 2);
        let sn = null;
        function yo() {
          return (
            sn ||
              ((sn = new Ut()),
              window.dispatchEvent(
                new CustomEvent("valve_gamehighlighttrailers_ready", {
                  detail: sn,
                }),
              )),
            sn
          );
        }
        var Cs = a(67705),
          zt = a(51079),
          ce = a(17479),
          ft = a(71421);
        function tt(n) {
          const t = n.strSecondaryCategory
              ? `${W.TS.STORE_BASE_URL}search/?controllersupport=${n.strCategory}%2C${n.strSecondaryCategory}`
              : `${W.TS.STORE_BASE_URL}search/?controllersupport=${n.strCategory}`,
            s = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: (0, D.A)(
                    ce.ImgSection,
                    n.bHightlightRow && ce.HighlightRow,
                    n.bHighlightGPRequired && ce.GamepadRequired,
                  ),
                  children: n.tagImage,
                }),
                (0, e.jsxs)("div", {
                  className: (0, D.A)(
                    ce.LocSection,
                    n.bHighlightText && ce.HighlightText,
                    n.bHightlightRow && ce.HighlightRow,
                    n.bHighlightGPRequired && ce.GamepadRequired,
                  ),
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, D.A)(
                        ce.LocString,
                        n.bHighlightText && ce.HighlightText,
                        n.bHightlightRow && ce.HighlightRow,
                        n.bHighlightGPRequired && ce.GamepadRequired,
                        n.bPersonalized && ce.Personalized,
                      ),
                      children: (0, j.we)(n.strLocalizationToken),
                    }),
                    n.strTooltipString &&
                      (0, e.jsx)(ft.he, {
                        toolTipContent: (0, j.we)(n.strTooltipString),
                        className: ce.ToolTipContainer,
                        children: (0, e.jsx)("span", {
                          className: ce.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return n.strCategory
            ? (0, e.jsx)("a", { href: t, className: ce.InfoRow, children: s })
            : (0, e.jsx)("div", { className: ce.InfoRow, children: s });
        }
        function Cu(n) {
          return jsx("div", {
            className: styles.PreviewContainer,
            children: jsx(As, { bPreview: !0, ...n }),
          });
        }
        function Co(n) {
          return (0, e.jsx)(e.Fragment, {
            children:
              (n.bPartialXboxControllerSupport ||
                n.bFullXboxControllerSupport) &&
              (0, e.jsx)("div", {
                className: ce.StoreSidebarContainer,
                children: (0, e.jsx)(As, { ...n }),
              }),
          });
        }
        function Ao() {
          return (0, e.jsx)(tt, {
            tagImage: (0, e.jsx)(Le.Moo, {
              className: (0, D.A)(ce.Tilt, ce.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function jo() {
          return (0, e.jsxs)("div", {
            className: (0, D.A)(ce.PurchaseNoticeContainer),
            children: [
              (0, e.jsx)(Le.Kz1, {
                className: (0, D.A)(ce.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(ce.PurchaseNoticeLabel),
                children: (0, j.we)(
                  "#Store_ControllerSupport_GamepadPreferred",
                ),
              }),
            ],
          });
        }
        function Po(n) {
          const { bNoKeyboardSupport: t, bGamepadPreferred: s } = n;
          return (0, e.jsxs)("div", {
            className: (0, D.A)(ce.NoticeContainer),
            children: [t && (0, e.jsx)(Ao, {}), s && !t && (0, e.jsx)(jo, {})],
          });
        }
        function As(n) {
          const {
            bControllerSupportWizardComplete: t,
            bPS4ControllerSupport: s,
            bPS5ControllerSupport: o,
            bPS4ControllerBTSupport: r,
            bPS5ControllerBTSupport: i,
            bFullXboxControllerSupport: l,
            bPartialXboxControllerSupport: u,
            bSteamInputAPISupport: d,
            bHasOther: p,
            bHasPS4: m,
            bHasPS5: h,
            bHasXbox: f,
            bPreview: x,
          } = n;
          let v = [];
          if (s && o && r && i) {
            const A = (0, e.jsx)(Le.pcV, {
                className: ce.SmallerSVG,
                controllerType: _t._X,
                partial: !l,
                role: "presentation",
              }),
              P = m || h;
            v.push(
              (0, e.jsx)(
                tt,
                {
                  tagImage: A,
                  strLocalizationToken: P
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: P,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (s) {
              const A = (0, e.jsx)(Le.pcV, {
                className: ce.SmallerSVG,
                controllerType: _t._X,
                partial: !l,
                role: "presentation",
              });
              r
                ? v.push(
                    (0, e.jsx)(
                      tt,
                      {
                        tagImage: A,
                        strLocalizationToken: m
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: m,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : v.push(
                    (0, e.jsx)(
                      tt,
                      {
                        tagImage: A,
                        strLocalizationToken: m
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: m,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (o) {
              const A = (0, e.jsx)(Le.pcV, {
                className: ce.SmallerSVG,
                controllerType: _t.HD,
                partial: !l,
                role: "presentation",
              });
              i
                ? v.push(
                    (0, e.jsx)(
                      tt,
                      {
                        tagImage: A,
                        strLocalizationToken: h
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: h,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : v.push(
                    (0, e.jsx)(
                      tt,
                      {
                        tagImage: A,
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
          return (0, e.jsx)(e.Fragment, {
            children:
              (u || l) &&
              (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: ce.ControllerSupportLevelString,
                    children: (0, j.we)(
                      l
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, e.jsx)(tt, {
                    tagImage: (0, e.jsx)(Le.pcV, {
                      className: ce.SmallerSVG,
                      controllerType: _t.Oh,
                      partial: !l,
                      role: "presentation",
                    }),
                    strLocalizationToken: f
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: f,
                    strCategory: "18",
                  }),
                  v,
                  d &&
                    (0, e.jsx)(tt, {
                      tagImage: (0, e.jsx)(Le.kdM, {
                        className: ce.BiggerSVG,
                        bGreyOutRightSide: !l,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!x && !t) || (!d && p && !f)) &&
                    (0, e.jsx)(tt, {
                      tagImage: (0, e.jsx)(Le.vet, {
                        className: ce.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        p || m || h
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: p || m || h,
                    }),
                  (0, e.jsx)(Po, { ...n }),
                ],
              }),
          });
        }
        const js = Co;
        var Ps = a(61711),
          So = a(45156),
          Io = a(61723),
          pe = a.n(Io),
          Ss = a(98609),
          bo = a(92442),
          Qe = a(72865);
        const To = new Map([
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
          Eo = new Map([
            ["adventurer", { className: pe().Adventurer }],
            ["anime", { className: pe().Anime }],
            ["apocalypse", { className: pe().Apocalypse }],
            ["astronaut", { className: pe().Astronaut }],
            ["beach", { className: pe().Beach }],
            ["bed", { className: pe().Bed }],
            ["bus", { className: pe().Bus }],
            ["busstop", { className: pe().BusStop }],
            ["campfire", { className: pe().Campfire }],
            ["car", { className: pe().Car }],
            ["city", { className: pe().City }],
            ["family", { className: pe().Family }],
            ["farmer", { className: pe().Farmer }],
            ["knight", { className: pe().Knight }],
            ["miner", { className: pe().Miner }],
            ["porch", { className: pe().Porch }],
            ["robot", { className: pe().Robot }],
            ["superhero", { className: pe().Superhero }],
            ["woodsman", { className: pe().Woodsman }],
            ["zombies", { className: pe().Zombies }],
          ]);
        function Lo(n) {
          return To.get(n);
        }
        function Do(n) {
          return Eo.get(n);
        }
        function Ro(n) {
          const { appid: t } = n,
            s = Lo(t);
          return s ? (0, e.jsx)(No, { appBannerDef: s, ...n }) : null;
        }
        function No(n) {
          const { appid: t, appBannerDef: s, app_name: o } = n,
            r = Do(s.strBannerType),
            i = (0, Qe.aL)(
              Ss.TS.STORE_BASE_URL +
                `app/${bo.wy}?deckapp=${t}&utm_source=topplayed_app_banner&utm_campaign=${t}`,
              "topplayed_app_banner",
              t,
            );
          return r
            ? (0, e.jsxs)("div", {
                className: pe().BannerWrapper,
                children: [
                  (0, e.jsxs)("div", {
                    className: pe().BannerTitle,
                    children: [
                      (0, e.jsx)("div", { className: pe().DeckLogo }),
                      (0, j.we)("#DeckTopPlayedAppBanner_Title"),
                    ],
                  }),
                  (0, e.jsx)("a", {
                    href: i,
                    className: (0, D.A)(pe().TopPlayedBannerCtn, r.className),
                    children: (0, e.jsxs)("div", {
                      className: pe().BannerRightContent,
                      children: [
                        (0, e.jsx)("div", {
                          className: pe().BannerHeader,
                          children: (0, j.we)("#DeckTopPlayedAppBanner_Header"),
                        }),
                        (0, e.jsx)("div", {
                          className: pe().BannerGameText,
                          children: (0, j.PP)(
                            "#DeckTopPlayedAppBanner_GameText",
                            (0, e.jsx)("span", { children: o }),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (console.warn(`No banner type found for ${s.strBannerType}`),
              null);
        }
        var Is = a(17809),
          Oo = a(41032),
          Ln = a(21721),
          xt = a(27894),
          Bo = a(81081),
          Mo = a(94846),
          vt = a.n(Mo),
          Dn = a(48357);
        function Fo(n) {
          const { appid: t } = n,
            s = (0, Ge.$5)(t),
            { data: o } = (0, C.lv)(s),
            { data: r } = (0, C.J$)(s),
            i = (0, xt.n)(r);
          return !o || !r
            ? null
            : (0, e.jsxs)(I.Z, {
                focusable: !0,
                className: vt().ParentWidgetContainer,
                onActivate: () => {
                  window.location.href = i;
                },
                children: [
                  (0, e.jsx)("div", {
                    className: (0, D.A)(vt().ParentCapsuleImageContainer),
                    children: (0, e.jsx)("a", {
                      href: i,
                      children: (0, e.jsx)("img", {
                        className: vt().ParentCapsuleImage,
                        src: (0, Ln.b0)(o, "small_capsule"),
                      }),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: vt().AppDetails,
                    children: [
                      (0, e.jsx)("a", {
                        className: (0, D.A)(vt().GameName),
                        href: i,
                        children: r.name,
                      }),
                      (0, e.jsxs)("div", {
                        className: vt().PriceContainer,
                        children: [
                          (0, e.jsx)(Dn.NF, { id: s }),
                          (0, e.jsx)(Bo.r, {
                            appid: t,
                            className: vt().AddToWishlistButton,
                            bTextMode: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }
        var Pe = a(70600),
          Rn = a(64415),
          wo = a(64377);
        function bs(n, t) {
          return (0, c.useMemo)(() => {
            let o = [],
              r = new Map();
            for (let i of n)
              if (
                (i.featured &&
                  (o.push({ type: "trailer", key: `t_${i.id}`, data: i }),
                  r.set(i.id, !0)),
                o.length >= 2)
              )
                break;
            for (let i of t)
              o.push({ type: "screenshot", key: `s_${i.name}`, data: i });
            for (let i of n)
              r.has(i.id) ||
                o.push({ type: "trailer", key: `t_${i.id}`, data: i });
            return o;
          }, [n, t]);
        }
        var Fe = a(31382),
          _o = a(52951),
          Lt = a(47045),
          de = a(72609),
          Q = a(68031),
          S = a(15252),
          Ie = a(60351),
          Nn = a(74107),
          Wo = a(58123),
          an = a.n(Wo);
        function Uo(n) {
          const { id: t } = n,
            { data: s } = (0, C.Q_)(t),
            { data: o } = (0, C.J$)(t);
          return !o ||
            !s ||
            !s?.hide_discount_pct_for_compliance ||
            s.discount_pct <= 0
            ? null
            : (0, e.jsx)("table", {
                className: an().SaleTechPriceGrid,
                children: (0, e.jsxs)("tbody", {
                  children: [
                    (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", {
                          children: Nn.F5.Localize("#PriceGrid_NormalPrice"),
                        }),
                        (0, e.jsx)("th", {
                          children: Nn.F5.Localize("#PriceGrid_RecentPrice"),
                        }),
                        (0, e.jsx)("th", {
                          children: Nn.F5.Localize("#PriceGrid_CurrentPrice"),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("td", {
                          className: an().OriginalPrice,
                          children: s.formatted_original_price,
                        }),
                        (0, e.jsx)("td", {
                          className: an().LowestRecentPrice,
                          children: s.formatted_lowest_recent_price,
                        }),
                        (0, e.jsx)("td", {
                          className: an().FinalPrice,
                          children: s.formatted_final_price,
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function on(n) {
          const { id: t, bSelfPurchaseOption: s, bHideNewTag: o } = n,
            { data: r } = (0, C.J$)(t);
          return r
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(Uo, { id: t }),
                  (0, e.jsx)(Dn.NF, {
                    id: t,
                    bPurchaseOptionDisplay: !0,
                    bHidePrePurchase: !0,
                    bSelfPurchaseOption: s,
                    bHideNewTag: o,
                  }),
                ],
              })
            : null;
        }
        var Ze = a(42993),
          yt = a(75233),
          Ct = a(80902),
          rn = a(51614),
          Gt = a(57589);
        const Kt = new Gt.wd("GameInterest");
        function Dt(n, t) {
          return ["GameInterest", n, t];
        }
        function zo(n, t, s, o) {
          n.setQueryData(Dt(t, s), o);
        }
        function Go(n) {
          const t = (0, yt.jE)(),
            s = (0, Ze.LH)();
          return (
            c.useEffect(() => {
              const { appid: o, userInterest: r, markReady: i } = n;
              zo(t, s, o, r), i();
            }, [t, s, n]),
            null
          );
        }
        function Ht(n) {
          const t = (0, Ze.LH)();
          return (0, Ct.I)({
            queryKey: Dt(t, n),
            enabled: !!t,
            queryFn: async () => {
              throw (
                (Kt.Info(
                  "Fetching user game interest from the back end for ",
                  n,
                ),
                new Error("Fetching user game interest is not yet supported"))
              );
            },
          });
        }
        function On(n, t, s) {
          const o = (0, yt.jE)(),
            r = (0, Qe.ru)(),
            i = (0, Ze.LH)();
          return (0, rn.n)({
            mutationKey: [t, ...Dt(i, n)],
            mutationFn: async (l) => {
              Kt.Info(`Mutating ${n} for ${t}`, l);
              const u = new FormData();
              u.set("sessionid", (0, W.KC)()),
                u.set("appid", n.toString()),
                u.set("snr", r);
              const { url: d, new_interest: p } = s(l, u);
              Kt.Info(" new interest before backend call", p),
                o.setQueryData(Dt(i, n), p);
              try {
                const m = await fetch(d, { method: "POST", body: u });
                return m.ok
                  ? !0
                  : (Kt.Info(`request to ${t} ${n} failed with ${m}`, l), !1);
              } catch (m) {
                return Kt.Info(`request to ${t} ${n} failed with ${m}`, l), !1;
              }
            },
            onSuccess: (l, u) => {
              l || o.setQueryData(Dt(i, n), u.old_interest);
            },
            onError: (l, u, d) => {
              o.setQueryData(Dt(i, n), u.old_interest);
            },
          });
        }
        function Ts(n) {
          return On(n, "wishlist", (t, s) => {
            const { wishlist: o, old_interest: r } = t,
              i = { ...r, wishlist: o },
              l = o
                ? `${W.TS.STORE_BASE_URL}api/addtowishlist`
                : `${W.TS.STORE_BASE_URL}api/removefromwishlist`;
            return { new_interest: i, url: l };
          });
        }
        function Ko(n) {
          return On(n, "ignore", (t, s) => {
            const { ignored: o, ignored_reason: r, old_interest: i } = t,
              l = { ...i, ignored: o, ignored_reason: r };
            o && r !== void 0
              ? s.set("ignore_reason", r.toString())
              : s.set("remove", "1");
            const u = `${W.TS.STORE_BASE_URL}recommended/ignorerecommendation/`;
            return { new_interest: l, url: u };
          });
        }
        function Ho(n) {
          return On(n, "follow", (t, s) => {
            const { following: o, old_interest: r } = t,
              i = { ...r, following: o };
            o || s.set("unfollow", "1");
            const l = `${W.TS.STORE_BASE_URL}explore/followgame/`;
            return { new_interest: i, url: l };
          });
        }
        var Es = a(20525);
        function Vo(n) {
          let { trailers: t, screenshots: s, appid: o } = n;
          return (0, e.jsx)(Fe.QY, {
            supportsFullscreen: !1,
            supportsTheater: !0,
            children: (0, e.jsx)(Qo, {
              children: (0, e.jsx)(ko, {
                trailers: t,
                screenshots: s,
                appid: o,
              }),
            }),
          });
        }
        function ko(n) {
          let { trailers: t, screenshots: s, appid: o } = n,
            r = (0, Fe.ri)(),
            i = r.strMode == "theater",
            l = (0, Fe.Dy)(r, "theater"),
            u = (0, Fe.Dy)(r, "none"),
            d = (0, _o.tw)(),
            [p, m] = Zo(i, u),
            h = bs(t, s);
          if ((Yo(h), c.use(Lt.n.Ready()), h.length == 0)) return null;
          let f = h.map((v, A) =>
              v.type == "screenshot"
                ? (0, e.jsx)(
                    Jo,
                    { autoFocus: A == 0, screenshot: v.data },
                    v.key,
                  )
                : v.type == "trailer"
                  ? (0, e.jsx)(
                      $o,
                      { autoFocus: A == 0, trailer: v.data },
                      v.key,
                    )
                  : null,
            ),
            x = i ? "" : Lt.n.Localize("#TrailerPlayer_FullScreen_Tooltip");
          return (0, e.jsx)("div", {
            ref: r.refTheater,
            className: Pe.TheaterDialog,
            popover: "manual",
            children: (0, e.jsx)("div", {
              className: Pe.FocusRingClip,
              children: (0, e.jsx)(q.q, {
                rootClassName: Pe.FocusRingRoot,
                disableFocusRing: i,
                children: (0, e.jsxs)(I.Z, {
                  ref: d.ref,
                  navRef: d.navRef,
                  className: Pe.GamepadCarousel,
                  "flow-children": "row",
                  navEntryPreferPosition: Y.iU.MAINTAIN_X,
                  onOptionsActionDescription: x,
                  onOptionsButton: l,
                  onCancelButton: i ? u : void 0,
                  onGamepadDirection: p,
                  onFocusWithin: m,
                  children: [
                    o && (0, e.jsx)(rr, { appid: o, fnExitTheaterMode: u }),
                    f,
                  ],
                }),
              }),
            }),
          });
        }
        function Yo(n) {
          let t = n.length;
          (0, c.useLayoutEffect)(() => {
            if (t < 1) return;
            document
              .querySelectorAll(".gamehighlight_gamepadskeleton")
              .forEach((o) => o.remove());
          }, [t]);
        }
        function Qo(n) {
          let { children: t } = n,
            s = (0, c.useCallback)(() => {}, []),
            [o, r] = (0, c.useState)(!0);
          return (0, e.jsx)(tn.v, {
            autoplayEnabled: !1,
            setAutoplayEnabled: s,
            playerVolume: 1,
            setPlayerVolume: s,
            audioMuted: o,
            setAudioMuted: r,
            children: t,
          });
        }
        function Zo(n, t) {
          let s = (0, c.useCallback)(
            (r) => {
              n && !r && t();
            },
            [n, t],
          );
          return [(0, c.useCallback)((r) => !!n, [n]), s];
        }
        function Jo(n) {
          let { screenshot: t, autoFocus: s } = n,
            o = (0, D.A)(Pe.CarouselItem, Pe.Screenshot);
          return (0, e.jsx)(I.Z, {
            className: o,
            autoFocus: s,
            focusable: !0,
            onOKActionDescription: "",
            children: (0, e.jsx)("img", { src: t.full, alt: t.altText }),
          });
        }
        function $o(n) {
          let { trailer: t, autoFocus: s } = n;
          return t.dashManifests
            ? (0, e.jsx)(ar, { trailer: t, autoFocus: s })
            : (0, e.jsx)(Xo, { trailer: t, autoFocus: s });
        }
        function Xo(n) {
          let { trailer: t, autoFocus: s } = n,
            o = (0, c.useRef)(null),
            [r, i] = qo(),
            l = (0, ee.Ue)(o, i),
            [u, d] = er(o),
            p = tr(u),
            m = nr(o),
            h = (0, c.useCallback)(
              (P) => {
                let R = o.current;
                if (P.detail.button == Rn.pR.TRIGGER_LEFT && R) {
                  (R.currentTime = Math.max(0, R.currentTime - 10)),
                    P.preventDefault(),
                    P.stopPropagation();
                  return;
                }
                if (P.detail.button == Rn.pR.TRIGGER_RIGHT && R) {
                  (R.currentTime = Math.min(R.duration, R.currentTime + 10)),
                    P.preventDefault(),
                    P.stopPropagation();
                  return;
                }
              },
              [o],
            );
          if (!t.webmMax) return null;
          let f = t.poster || "",
            x = r.bMuted
              ? Lt.n.Localize("#TrailerPlayer_Unmute_Tooltip")
              : Lt.n.Localize("#TrailerPlayer_Mute_Tooltip"),
            v = r.bPaused
              ? Lt.n.Localize("#TrailerPlayer_Play_Tooltip")
              : Lt.n.Localize("#TrailerPlayer_Pause_Tooltip"),
            A = (0, D.A)(Pe.CarouselItem, Pe.SingleFileTrailer);
          return (0, e.jsx)(I.Z, {
            className: A,
            onActivate: d,
            onOKActionDescription: v,
            ...p,
            onSecondaryButton: m,
            onSecondaryActionDescription: x,
            onButtonDown: h,
            autoFocus: s,
            children: (0, e.jsx)("video", {
              ref: l,
              controls: !0,
              muted: !0,
              disablePictureInPicture: !0,
              controlsList: "nodownload",
              playsInline: !0,
              preload: "none",
              poster: f,
              children: (0, e.jsx)("source", {
                src: t.webmMax,
                type: "video/webm",
              }),
            }),
          });
        }
        function qo() {
          let [n, t] = (0, c.useState)({ bPaused: !0, bMuted: !0 }),
            s = (0, ee.QS)(
              (o) => {
                let r = () => {
                    t((d) => ({ ...d, bMuted: o.muted }));
                  },
                  i = () => {
                    t((d) => ({ ...d, bPaused: !1 }));
                  },
                  l = () => {
                    t((d) => ({ ...d, bPaused: !0 }));
                  };
                return (
                  o.addEventListener("volumechange", r),
                  o.addEventListener("play", i),
                  o.addEventListener("pause", l),
                  () => {
                    o.removeEventListener("volumechange", r),
                      o.removeEventListener("play", i),
                      o.removeEventListener("pause", l);
                  }
                );
              },
              [t],
            );
          return [n, s];
        }
        function er(n) {
          let t = (0, c.useRef)(!1),
            s = (0, c.useRef)(null),
            o = (0, c.useCallback)(
              (i) => {
                let l = n.current;
                if (l && ((t.current = i), !s.current)) {
                  if (!i) {
                    l.paused || l.pause();
                    return;
                  }
                  (s.current = l.play()),
                    s.current
                      .then(() => {
                        !t.current && n.current && n.current.pause(),
                          (s.current = null);
                      })
                      .catch(() => {
                        s.current = null;
                      });
                }
              },
              [n],
            ),
            r = (0, c.useCallback)(() => {
              let i = n.current;
              i && o(i.paused);
            }, [o, n]);
          return [o, r];
        }
        function tr(n) {
          let t = (0, c.useCallback)(() => n(!0), [n]),
            s = (0, c.useCallback)(() => n(!1), [n]);
          return { onGamepadFocus: t, onGamepadBlur: s };
        }
        function nr(n) {
          return (0, c.useCallback)(() => {
            let s = n.current;
            s && (s.muted = !s.muted);
          }, [n]);
        }
        function sr(n) {
          const { poster: t, bVideoReady: s } = n;
          return t
            ? (0, e.jsxs)("div", {
                className: (0, D.A)(Pe.StillPoster, s && Pe.VideoStarted),
                children: [
                  (0, e.jsx)("img", { className: (0, D.A)(Pe.Poster), src: t }),
                  (0, e.jsx)(Es.ud, { className: Pe.Icon }),
                ],
              })
            : null;
        }
        function ar(n) {
          let { trailer: t, autoFocus: s } = n,
            [o, r] = (0, c.useState)(!1),
            [i, l] = (0, c.useState)(!1),
            [u, d] = (0, ee.TP)();
          const p = c.useCallback(() => {
            r(!0);
          }, []);
          let m = null,
            h = (0, D.A)(Pe.CarouselItem, Pe.DashTrailer);
          return (0, e.jsxs)(I.Z, {
            ref: d,
            className: h,
            onFocusWithin: l,
            autoFocus: s,
            children: [
              (0, e.jsx)(sr, { poster: t.poster, bVideoReady: o }),
              (0, e.jsx)(wo.K, {
                mode: "JustLoad",
                horizontal: !0,
                holdGamepadFocus: !0,
                children: (0, e.jsx)(En.P, {
                  dashManifests: t.dashManifests,
                  hlsManifest: t.hlsManifest,
                  screenshot: t.poster,
                  altText: t.title,
                  forcePause: !i || !u,
                  onPlaybackEnd: m,
                  onPlaybackStart: p,
                  title: t.title,
                  category: t.category,
                  statsURL: t.statsURL,
                }),
              }),
            ],
          });
        }
        function or(n, t) {
          return de.TS.STORE_ITEM_BASE_URL + n.replace("${FILENAME}", t);
        }
        function rr(n) {
          const { appid: t, fnExitTheaterMode: s } = n,
            { data: o } = (0, C.J$)({ appid: t }),
            { data: r } = (0, C.wl)({ appid: t }),
            { data: i } = (0, C.lv)({ appid: t }),
            { data: l } = Ht(t),
            { mutateAsync: u } = Ts(t),
            d = !!l?.wishlist,
            p = !l?.owned,
            m = c.useCallback(() => {
              l && u({ wishlist: !l.wishlist, old_interest: l });
            }, [u, l]);
          let h, f;
          p &&
            l &&
            ((h = G.Z.Localize(
              d ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
            )),
            (f = m));
          const x = c.useCallback(() => {
            window.postMessage({ method: "FocusPurchaseOptions" });
          }, []);
          if (!i) return null;
          let v = (0, D.A)(Pe.CarouselItem, Pe.TitleCard);
          return (0, e.jsx)(I.Z, {
            className: v,
            onActivate: x,
            onSecondaryActionDescription: h,
            onSecondaryButton: f,
            onOptionsActionDescription: null,
            onOptionsButton: () => {},
            onFocus: s,
            children: (0, e.jsxs)(Q.s, {
              position: "absolute",
              inset: "0 0 0 0",
              direction: "column",
              overflow: "hidden",
              children: [
                (0, e.jsx)("img", {
                  className: Pe.Header,
                  src: or(i.asset_url_format, i.header),
                }),
                (0, e.jsxs)(Q.s, {
                  className: Pe.Bottom,
                  flexGrow: "1",
                  flexShrink: "1",
                  direction: "column",
                  overflow: "hidden",
                  padding: "3",
                  paddingTop: "2",
                  children: [
                    (0, e.jsx)(Q.s, {
                      flexGrow: "0",
                      flexShrink: "0",
                      children: (0, e.jsx)(S.EY, {
                        contrast: "title",
                        weight: "heavy",
                        size: { initial: "2", md: "4", lg: "6" },
                        children: o.name,
                      }),
                    }),
                    (0, e.jsx)(Ie.az, {
                      flexGrow: "1",
                      overflow: "hidden",
                      children: (0, e.jsx)(S.EY, {
                        size: { initial: "1", md: "2", lg: "4" },
                        lineClamp: 7,
                        contrast: "body",
                        children: r.short_description,
                      }),
                    }),
                    o.best_purchase_option &&
                      (0, e.jsxs)(Q.s, {
                        className: Pe.BottomRow,
                        flexGrow: "0",
                        flexShrink: "0",
                        children: [
                          (0, e.jsx)(on, { id: { appid: t }, bHideNewTag: !0 }),
                          p &&
                            (0, e.jsxs)(Q.s, {
                              className: Pe.WishlistButton,
                              children: [
                                d
                                  ? (0, e.jsx)(b.qnF, {
                                      className: Pe.StarIcon,
                                    })
                                  : (0, e.jsx)(b.T4m, {
                                      className: Pe.StarIcon,
                                    }),
                                (0, e.jsx)(Le.xwO, {
                                  button: "X",
                                  className: Pe.ButtonIcon,
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
        var ye = a(15955),
          Rt = a(84456),
          Ls = a(7817),
          ln = a(71742);
        function ir() {
          let n = document.cookie.match(
            /(^|; )bGameHighlightAutoplayDisabled=([^;]*)/,
          );
          return !(n && n[2] == "true");
        }
        function lr(n) {
          let t = new Date();
          t.setTime(t.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let s = n ? "false" : "true";
          document.cookie = `bGameHighlightAutoplayDisabled=${s}; expires=${t.toUTCString()};path=/`;
        }
        function cr() {
          let n = document.cookie.match(
              /(^|; )flGameHighlightPlayerVolume=([^;]*)/,
            ),
            t = n && n[2] ? parseFloat(n[2]) : 80;
          return t < 0 ? 0 : t > 100 ? 100 : t;
        }
        function dr(n) {
          let t = new Date();
          t.setTime(t.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10),
            (document.cookie = `flGameHighlightPlayerVolume=${n}; expires=${t.toUTCString()};path=/`);
        }
        function ur() {
          let n = document.cookie.match(
            /(^|; )bGameHighlightAudioEnabled=([^;]*)/,
          );
          return n && n[2] == "true";
        }
        function pr(n) {
          let t = new Date();
          t.setTime(t.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let s = n ? "true" : "false";
          document.cookie = `bGameHighlightAudioEnabled=${s}; expires=${t.toUTCString()};path=/`;
        }
        function mr(n) {
          let { children: t } = n,
            [s, o] = (0, c.useState)(ir),
            r = (0, c.useCallback)((h) => {
              lr(h), o(h);
            }, []),
            [i, l] = (0, c.useState)(cr),
            u = (0, c.useCallback)((h) => {
              (h = h * 100), dr(h), l(h);
            }, []),
            [d, p] = (0, c.useState)(ur),
            m = (0, c.useCallback)((h) => {
              pr(!h), p(!h);
            }, []);
          return (0, e.jsx)(tn.v, {
            autoplayEnabled: s,
            setAutoplayEnabled: r,
            playerVolume: i / 100,
            setPlayerVolume: u,
            audioMuted: !d,
            setAudioMuted: m,
            children: t,
          });
        }
        function hr() {
          return (0, tn.F)().m_bAutoplayEnabled;
        }
        const Ds = (0, c.createContext)(void 0);
        function gr(n) {
          let { orderedItems: t, children: s } = n,
            o = hr(),
            [r, i] = (0, c.useState)(() => xr(t, o)),
            l = (0, c.useMemo)(() => {
              if (t.length == 0)
                return {
                  strActiveID: "",
                  strActiveType: "",
                  strPreviousID: "",
                  strNextID: "",
                  fnSetActive: i,
                };
              let u = t.findIndex((h) => h.key == r);
              u = u || 0;
              let d = t[u].type,
                p = Bn("previous", t, u, o),
                m = Bn("next", t, u, o);
              return {
                strActiveID: r,
                strActiveType: d,
                strPreviousID: p,
                strNextID: m,
                fnSetActive: i,
              };
            }, [r, i, t, o]);
          return (0, e.jsx)(Ds.Provider, { value: l, children: s });
        }
        function Je() {
          return (0, c.useContext)(Ds);
        }
        function Rs(n) {
          let t = Je();
          return n == t.strActiveID;
        }
        function fr(n) {
          let t = Je();
          return n == t.strNextID;
        }
        function xr(n, t) {
          return (
            (0, ln.wT)(n.length > 0, "Unexpected length"),
            n[0].type == "trailer" && !t ? Bn("next", n, 0, t) : n[0].key
          );
        }
        function Bn(n, t, s, o) {
          (0, ln.wT)(t.length > 0, "Unexpected length");
          let r = s;
          do
            if (
              (n == "next"
                ? (r = (r + 1) % t.length)
                : (r = (r - 1 + t.length) % t.length),
              t[r].type != "trailer" || o)
            )
              break;
          while (r != s);
          return t[r].key;
        }
        var we = a(37216),
          Vt = a(13854);
        function vr(n) {
          let { items: t } = n,
            {
              refStrip: s,
              refTrack: o,
              refThumb: r,
              fnRegisterItemElement: i,
            } = yr(),
            u = (0, Fe.ri)().strMode == "theater";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, D.A)(we.StripSkeleton, u && we.TheaterMode),
                children: [
                  (0, e.jsx)("div", { className: we.Items }),
                  (0, e.jsx)("div", { className: we.Scrollbar }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: (0, D.A)(we.Strip, u && we.TheaterMode),
                children: [
                  (0, e.jsx)(Cr, {
                    refStrip: s,
                    items: t,
                    registerItemElement: i,
                  }),
                  (0, e.jsx)(Pr, { refTrack: o, refThumb: r }),
                ],
              }),
            ],
          });
        }
        function yr() {
          let n = Je(),
            t = (0, c.useRef)(null),
            s = (0, c.useRef)(null),
            o = (0, c.useRef)(null),
            r = (0, c.useRef)(null),
            i = (0, c.useRef)(void 0);
          i.current || (i.current = new Map()),
            (0, c.useEffect)(() => {
              let d = o.current,
                p = s.current,
                m = t.current,
                h = m.matches(":dir(rtl)"),
                f = () => {
                  r.current ||
                    (r.current = requestAnimationFrame(() => {
                      r.current = null;
                      let x = p.getBoundingClientRect(),
                        v = d.getBoundingClientRect(),
                        A = x.width - v.width,
                        P = m.scrollWidth - m.clientWidth,
                        R;
                      h
                        ? (R = (0, Vt.Fu)(m.scrollLeft, -P, 0, -A, 0))
                        : (R = (0, Vt.Fu)(m.scrollLeft, 0, P, 0, A)),
                        (d.style.transform = `translateX( ${R}px )`);
                    }));
                };
              return (
                m.addEventListener("scroll", f, { passive: !0 }),
                () => {
                  m.removeEventListener("scroll", f),
                    r.current && cancelAnimationFrame(r.current);
                }
              );
            }, []),
            (0, c.useEffect)(() => {
              let d = o.current,
                p = s.current,
                m = t.current,
                h = null,
                f = m.matches(":dir(rtl)"),
                x = (P) => {
                  if (!h) return;
                  let R = P.clientX - h.nInitialClientX,
                    ae = (0, Vt.OQ)(h.nInitialPosition + R, 0, h.nTrackWidth),
                    me = (0, Vt.Fu)(ae, 0, h.nTrackWidth, 0, h.nScrollWidth);
                  f && (me = -(h.nScrollWidth - me)),
                    m.scrollTo({ left: me, behavior: "auto" });
                },
                v = (P) => {
                  p.setPointerCapture(P.pointerId);
                  let R = p.getBoundingClientRect(),
                    ae = d.getBoundingClientRect(),
                    me = R.width - ae.width,
                    Z = m.scrollWidth - m.clientWidth,
                    J = Math.max(ae.left - R.left, 0),
                    z = P.clientX;
                  P.target != d &&
                    ((J = P.clientX - R.left),
                    (J -= Math.floor(ae.width / 2)),
                    (J = (0, Vt.OQ)(J, 0, me))),
                    (h = {
                      nInitialPosition: J,
                      nInitialClientX: z,
                      nTrackWidth: me,
                      nScrollWidth: Z,
                    }),
                    (document.body.style.userSelect = "none"),
                    x(P);
                },
                A = (P) => {
                  (h = null), (document.body.style.userSelect = "");
                };
              return (
                p.addEventListener("pointerdown", v),
                p.addEventListener("pointermove", x),
                p.addEventListener("lostpointercapture", A),
                () => {
                  p.removeEventListener("pointerdown", v),
                    p.removeEventListener("pointermove", x),
                    p.removeEventListener("lostpointercapture", A);
                }
              );
            }, []);
          let l = n.strActiveID;
          (0, c.useEffect)(() => {
            let d = i.current.get(l);
            if (!d) return;
            let p = t.current,
              m = p.getBoundingClientRect(),
              h = d.getBoundingClientRect();
            if (h.left < m.left || h.right > m.right) {
              let f = h.left - m.left + p.scrollLeft;
              p.scrollTo({ left: f, behavior: "smooth" });
            }
          }, [l]);
          let u = (0, c.useCallback)(
            (d, p) => {
              p ? i.current.set(d, p) : i.current.delete(d);
            },
            [i],
          );
          return {
            refStrip: t,
            refTrack: s,
            refThumb: o,
            fnRegisterItemElement: u,
          };
        }
        function Cr(n) {
          let { refStrip: t, items: s, registerItemElement: o } = n,
            r = Ar(),
            i = s.map((l) =>
              (0, e.jsx)(jr, { item: l, registerItemElement: o }, l.key),
            );
          return (0, e.jsx)("div", {
            ref: t,
            className: we.StripItems,
            onKeyDown: r,
            tabIndex: 0,
            children: i,
          });
        }
        function Ar() {
          let n = Je();
          return (0, c.useCallback)(
            (s) => {
              s.repeat ||
                (s.code == "ArrowLeft"
                  ? (s.currentTarget.matches(":dir(rtl)")
                      ? n.strNextID && n.fnSetActive(n.strNextID)
                      : n.strPreviousID && n.fnSetActive(n.strPreviousID),
                    s.preventDefault())
                  : s.code == "ArrowRight" &&
                    (s.currentTarget.matches(":dir(rtl)")
                      ? n.strPreviousID && n.fnSetActive(n.strPreviousID)
                      : n.strNextID && n.fnSetActive(n.strNextID),
                    s.preventDefault()));
            },
            [n],
          );
        }
        function jr(n) {
          let { item: t, registerItemElement: s } = n,
            o = Je(),
            r = t.key == o.strActiveID,
            i = () => o.fnSetActive(t.key),
            l = t.key,
            u = (0, c.useCallback)((m) => s(l, m), [l, s]),
            d = t.data.thumbnail ? t.data.thumbnail : "",
            p = (0, D.A)(we.Item, r && we.Active);
          return (0, e.jsxs)("div", {
            ref: u,
            className: p,
            onClick: i,
            children: [
              !!d && (0, e.jsx)("img", { src: d }),
              t.type == "trailer" &&
                (0, e.jsx)("div", {
                  className: we.PlayIcon,
                  children: (0, e.jsx)(Es.ud, {}),
                }),
            ],
          });
        }
        function Pr(n) {
          let { refTrack: t, refThumb: s } = n,
            o = Je(),
            r = o.strPreviousID ? () => o.fnSetActive(o.strPreviousID) : null,
            i = o.strNextID ? () => o.fnSetActive(o.strNextID) : null;
          return (0, e.jsxs)("div", {
            className: we.StripScrollbar,
            children: [
              (0, e.jsx)("div", {
                className: we.Arrow,
                onClick: r,
                children: (0, e.jsx)(cn, { direction: "left" }),
              }),
              (0, e.jsx)("div", {
                ref: t,
                className: we.Track,
                children: (0, e.jsx)("div", { ref: s, className: we.Thumb }),
              }),
              (0, e.jsx)("div", {
                className: we.Arrow,
                onClick: i,
                children: (0, e.jsx)(cn, { direction: "right" }),
              }),
            ],
          });
        }
        function cn(n) {
          let { direction: t } = n;
          return t == "right"
            ? (0, e.jsx)("svg", {
                viewBox: "0 0 49 79",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, e.jsx)("path", {
                  d: "M8.81647 0L48 39.5005L8.81647 79L0 70.1124L30.3671 39.4995L0 8.88756L8.81647 0Z",
                  fill: "currentColor",
                }),
              })
            : (0, e.jsx)("svg", {
                viewBox: "0 0 49 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, e.jsx)("path", {
                  d: "M39.3427 79.6279L0.159182 40.1274L39.3427 0.627931L48.1592 9.51549L17.7921 40.1284L48.1592 70.7404L39.3427 79.6279Z",
                  fill: "currentColor",
                }),
              });
        }
        var Ns = a(82734),
          Sr = a(95396),
          dn = a(86048);
        const Ir = 5e3;
        function br(n) {
          let { appName: t, trailers: s, screenshots: o } = n,
            r = Tr(),
            i = bs(s, o);
          return (
            Er(i),
            i.length == 0
              ? null
              : (0, e.jsx)(Fe.QY, {
                  supportsTheater: !r,
                  supportsFullscreen: (0, Ns.tg)(),
                  children: (0, e.jsx)(mr, {
                    children: (0, e.jsx)(gr, {
                      orderedItems: i,
                      children: (0, e.jsxs)(Dr, {
                        children: [
                          (0, e.jsx)(Nr, { appName: t, items: i }),
                          (0, e.jsx)(vr, { items: i }),
                        ],
                      }),
                    }),
                  }),
                })
          );
        }
        function Tr() {
          return (
            (0, Sr.$)(`(max-width: ${ye.storeNarrowResponsiveWidth})`) ||
            de.TS.IN_MOBILE_WEBVIEW
          );
        }
        function Er(n) {
          let t = n.length;
          (0, c.useLayoutEffect)(() => {
            if (t < 1) return;
            document
              .querySelectorAll(".gamehighlight_desktopskeleton")
              .forEach((o) => o.remove());
          }, [t]);
        }
        const Os = (0, c.createContext)(!1);
        function Lr() {
          return (0, c.useContext)(Os);
        }
        function Dr(n) {
          let { children: t } = n,
            [s, o] = (0, c.useState)(!1),
            r = (0, c.useCallback)((d) => o(d.isIntersecting), []),
            i = (0, ee.BL)(r),
            { refRoot: l } = Rr(s),
            u = (0, ee.Ue)(i, l);
          return (0, e.jsx)(Os.Provider, {
            value: s,
            children: (0, e.jsx)("div", { ref: u, children: t }),
          });
        }
        function Rr(n) {
          let t = (0, c.useRef)(null),
            s = (0, c.useRef)(0),
            o = (0, c.useRef)(!1),
            r = (0, c.useRef)(n),
            i = Je(),
            l = (0, c.useRef)(i);
          l.current = i;
          let d = (0, Fe.ri)().strMode != "none",
            p = (0, c.useRef)(d);
          p.current = d;
          let m = (0, c.useCallback)(() => {
              if (
                !l.current ||
                l.current.strActiveType != "screenshot" ||
                s.current ||
                o.current ||
                p.current ||
                !r.current
              )
                return;
              let x = () => {
                (s.current = 0), l.current.fnSetActive(l.current.strNextID);
              };
              s.current = window.setTimeout(x, Ir);
            }, []),
            h = (0, c.useCallback)(() => {
              s.current && (window.clearTimeout(s.current), (s.current = 0));
            }, []),
            f = i.strActiveID;
          return (
            (0, c.useEffect)(() => {
              m();
            }, [f]),
            (0, c.useEffect)(() => {
              d ? h() : m();
            }, [d]),
            (0, c.useEffect)(() => {
              let x = t.current,
                v = () => {
                  document.visibilityState == "visible" ? m() : h();
                },
                A = () => {
                  (o.current = !0), h();
                },
                P = () => {
                  (o.current = !1), m();
                };
              return (
                x.addEventListener("pointerenter", A),
                x.addEventListener("pointerleave", P),
                document.addEventListener("visibilitychange", v),
                () => {
                  x.removeEventListener("pointerenter", A),
                    x.removeEventListener("pointerleave", P),
                    document.addEventListener("visibilitychange", v);
                }
              );
            }, []),
            (0, c.useEffect)(() => {
              (r.current = n), n ? m() : h();
            }, [n, m, h]),
            { refRoot: t }
          );
        }
        function Nr(n) {
          let { appName: t, items: s } = n,
            o = Je(),
            r = wr(),
            i = (0, Fe.ri)(),
            l = i.strMode == "theater",
            [u, d] = _r(),
            [p, m] = (0, dn.Rb)(),
            h = p ? o.strActiveID : "",
            f = Br(o),
            x = (0, ee.Ue)(i.refTheater, f),
            v = s.map((R) =>
              R.type == "screenshot"
                ? (0, e.jsx)(
                    Wr,
                    { id: R.key, screenshot: R.data, focus: R.key == h },
                    R.key,
                  )
                : R.type == "trailer"
                  ? (0, e.jsx)(
                      Ur,
                      { id: R.key, trailer: R.data, focus: R.key == h },
                      R.key,
                    )
                  : null,
            ),
            A = o.strPreviousID ? () => o.fnSetActive(o.strPreviousID) : null,
            P = o.strNextID ? () => o.fnSetActive(o.strNextID) : null;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Or, {
                ref: x,
                className: ye.TheaterDialog,
                ...m,
                children: (0, e.jsxs)("div", {
                  className: ye.TheaterModeFrame,
                  children: [
                    (0, e.jsx)(Mr, { appName: t }),
                    (0, e.jsxs)("div", {
                      ref: i.refFullscreen,
                      className: ye.ItemViewArea,
                      ...d,
                      onKeyDown: r,
                      tabIndex: 0,
                      children: [
                        v,
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            ye.FullscreenArrow,
                            u && ye.Visible,
                            ye.Previous,
                          ),
                          onClick: A,
                          "data-keepcontrols": !0,
                          children: (0, e.jsx)(cn, { direction: "left" }),
                        }),
                        (0, e.jsx)("div", {
                          className: (0, D.A)(
                            ye.FullscreenArrow,
                            u && ye.Visible,
                            ye.Next,
                          ),
                          onClick: P,
                          "data-keepcontrols": !0,
                          children: (0, e.jsx)(cn, { direction: "right" }),
                        }),
                      ],
                    }),
                    (0, e.jsx)(Fr, { items: s, activeItem: o.strActiveID }),
                  ],
                }),
              }),
              (0, e.jsx)("div", {
                className: (0, D.A)(ye.SkeletonViewArea, l && ye.TheaterMode),
              }),
            ],
          });
        }
        function Or(n) {
          let { ref: t, children: s, ...o } = n,
            r = (0, Fe.ri)(),
            i = r.strMode,
            l = (0, Fe.Dy)(r, "none"),
            u = (0, c.useCallback)(
              (d) => {
                d.target === d.currentTarget && l();
              },
              [l],
            );
          return (
            (0, c.useEffect)(() => {
              if (i != "theater") return;
              let d = (p) => {
                p.key == "Escape" && !p.repeat && l();
              };
              return (
                window.addEventListener("keydown", d),
                () => window.removeEventListener("keydown", d)
              );
            }, [i, l]),
            (0, e.jsx)("div", {
              ref: t,
              ...o,
              popover: "manual",
              onClick: u,
              children: s,
            })
          );
        }
        function Br(n) {
          let t = (0, c.useCallback)(
            (s) => {
              s == "left" && n.strNextID
                ? n.fnSetActive(n.strNextID)
                : s == "right" &&
                  n.strPreviousID &&
                  n.fnSetActive(n.strPreviousID);
            },
            [n],
          );
          return (0, dn.zO)(t);
        }
        function Mr(n) {
          let { appName: t } = n,
            s = (0, Fe.ri)(),
            o = (0, Fe.Dy)(s, "none");
          return (0, e.jsxs)("div", {
            className: ye.TheaterModeHeader,
            children: [
              (0, e.jsx)("div", {
                className: ye.Center,
                children: (0, j.we)("#GameHighlight_Theater_Header", t),
              }),
              (0, e.jsx)("div", {
                className: ye.Right,
                children: (0, e.jsx)(b.tmm, { onClick: o }),
              }),
            ],
          });
        }
        function Fr(n) {
          let { items: t, activeItem: s } = n,
            o = t.findIndex((i) => s && i.key == s),
            r = "";
          return (
            o >= 0 &&
              (r = (0, j.we)(
                "#GameHighlight_Theater_ItemCount",
                o + 1,
                t.length,
              )),
            (0, e.jsx)("div", {
              className: ye.TheaterModeFooter,
              children: r.length > 0 && (0, e.jsx)("div", { children: r }),
            })
          );
        }
        function wr() {
          let n = Je();
          return (0, c.useCallback)(
            (s) => {
              s.repeat ||
                n.strActiveType == "trailer" ||
                (s.code == "ArrowLeft"
                  ? (s.currentTarget.matches(":dir(rtl)")
                      ? n.strNextID && n.fnSetActive(n.strNextID)
                      : n.strPreviousID && n.fnSetActive(n.strPreviousID),
                    s.preventDefault())
                  : s.code == "ArrowRight" &&
                    (s.currentTarget.matches(":dir(rtl)")
                      ? n.strPreviousID && n.fnSetActive(n.strPreviousID)
                      : n.strNextID && n.fnSetActive(n.strNextID),
                    s.preventDefault()));
            },
            [n],
          );
        }
        function _r() {
          let [n, t] = (0, Rt.if)(),
            s = (0, c.useRef)({ element: void 0, bKeepControls: !1 }),
            o = (0, c.useCallback)(
              (p) => {
                if (p.target == s.current.element) return;
                let m = (0, Rt.Ae)(p);
                s.current = { element: p.target, bKeepControls: m };
              },
              [s],
            ),
            r = (0, c.useCallback)(
              (p) => {
                if (s.current.bKeepControls) {
                  t(!0, 0);
                  return;
                }
                t(!0, p);
              },
              [s, t],
            ),
            i = (0, c.useCallback)(
              (p) => {
                p.pointerType != "touch" && (o(p), r((0, Rt.Av)(p)));
              },
              [r, o],
            ),
            l = (0, c.useCallback)(
              (p) => {
                p.pointerType != "touch" && (o(p), r((0, Rt.Av)(p)));
              },
              [o, r],
            ),
            u = (0, c.useCallback)(
              (p) => {
                p.pointerType != "touch" &&
                  ((s.current = { element: void 0, bKeepControls: !1 }),
                  r((0, Rt.Ug)()));
              },
              [s, r],
            ),
            d = (0, c.useCallback)(
              (p) => {
                r((0, Rt.Av)(p));
              },
              [r],
            );
          return [
            n,
            {
              onPointerEnter: i,
              onPointerMove: l,
              onPointerLeave: u,
              onPointerDown: d,
            },
          ];
        }
        function Wr(n) {
          let { id: t, screenshot: s, focus: o } = n,
            r = Rs(t),
            i = fr(t),
            l = Bs(r || i),
            u = (0, Fe.ri)(),
            d = (0, Fe.Dy)(u, "theater"),
            p = u.strMode == "none",
            m = (0, dn.b$)(o);
          if (!l) return null;
          let h = (0, D.A)(
              ye.ViewedItem,
              r && ye.Active,
              ye.Screenshot,
              p && ye.PageEmbedded,
            ),
            f = (u.strMode != "none", s.full),
            x = p ? d : null;
          return (0, e.jsxs)("div", {
            ref: m,
            className: h,
            onClick: x,
            tabIndex: 0,
            children: [
              (0, e.jsx)("img", { src: f, alt: s.altText }),
              (0, e.jsxs)("div", {
                className: ye.Controls,
                children: [
                  u.bSupportsTheater && (0, e.jsx)(Ls.tS, {}),
                  u.bSupportsFullscreen && (0, e.jsx)(Ls.Wc, {}),
                ],
              }),
            ],
          });
        }
        function Ur(n) {
          let { id: t, trailer: s, focus: o } = n,
            r = Rs(t),
            i = Bs(r),
            [l, u] = (0, ee.TP)(),
            d = Lr(),
            p = Je(),
            m = (0, c.useCallback)(() => p.fnSetActive(p.strNextID), [p]);
          if (!i) return null;
          let h = (0, D.A)(ye.ViewedItem, r && ye.Active, ye.Trailer);
          return (0, e.jsx)(Fe.vG, {
            drop: !(0, Ns.tg)(),
            children: (0, e.jsx)("div", {
              ref: u,
              className: h,
              children: (0, e.jsx)(En.P, {
                dashManifests: s.dashManifests,
                hlsManifest: s.hlsManifest,
                screenshot: s.poster,
                altText: s.title,
                forcePause: !r || !l || !d,
                onPlaybackEnd: m,
                title: s.title,
                category: s.category,
                statsURL: s.statsURL,
                focus: o,
              }),
            }),
          });
        }
        function Bs(n) {
          let t = (0, c.useRef)(!1);
          return n && (t.current = !0), t.current;
        }
        var At = a(55051),
          ze = a(26356),
          zr = a(46477),
          Gr = a(6046),
          Kr = a(35111),
          nt = a.n(Kr),
          jt = a(41944);
        function Hr(n) {
          const { appID: t, results: s, appName: o, tab: r = ze.ZJ } = n,
            i = (0, W.Qn)();
          let l;
          r == ze.JR
            ? (l = (0, j.we)(
                "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
              ))
            : r == ze.c9
              ? (l = (0, j.we)(
                  "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
                ))
              : r == ze.bY
                ? (l = (0, j.we)(
                    "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
                  ))
                : (l = i
                    ? (0, j.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
                      )
                    : (0, j.we)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
                      ));
          const u = c.useId();
          return s
            ? (0, e.jsxs)("div", {
                className: nt().BannerContainer,
                role: "group",
                "aria-labelledby": u,
                children: [
                  (0, e.jsx)("div", {
                    className: nt().BannerHeader,
                    id: u,
                    children: l,
                  }),
                  (0, e.jsx)(Ms, { ...n }),
                ],
              })
            : null;
        }
        function Ms(n) {
          const {
              appID: t,
              results: s,
              appName: o,
              tab: r = ze.ZJ,
              className: i,
            } = n,
            l = (0, W.Qn)();
          let u, d;
          if (
            (r == ze.c9
              ? ((u = (0, e.jsx)(jt.aw, {
                  category: s.steamos_resolved_category,
                })),
                (d = (0, e.jsx)(Vr, { category: s.steamos_resolved_category })))
              : r == ze.JR
                ? ((u = (0, e.jsx)(jt.Ez, {
                    category: s.machine_resolved_category,
                  })),
                  (d = (0, e.jsx)(Mn, {
                    category: s.machine_resolved_category,
                  })))
                : r == ze.bY
                  ? ((u = (0, e.jsx)(jt.Ez, {
                      category: s.frame_resolved_category,
                    })),
                    (d = (0, e.jsx)(Mn, {
                      category: s.frame_resolved_category,
                    })))
                  : ((u = (0, e.jsx)(jt.Ez, { category: s.resolved_category })),
                    (d = (0, e.jsx)(Mn, { category: s.resolved_category }))),
            !s)
          )
            return null;
          const p = s?.steam_deck_blog_url && r != ze.bY;
          return (0, e.jsxs)("div", {
            className: (0, D.A)(
              l ? nt().BannerContent : nt().BannerContentDesktop,
              i,
            ),
            children: [
              (0, e.jsxs)("div", { children: [u, d] }),
              (0, e.jsx)(kr, {
                results: s,
                learnMore: (0, j.we)(
                  "#SteamDeckVerified_Store_CompatSection_LearnMore",
                ),
                appName: o || "",
                eStartingTab: r,
              }),
              p && (0, e.jsx)("div", { className: nt().Divider }),
              p &&
                (0, e.jsx)(jt.Tz, {
                  url: s.steam_deck_blog_url,
                  containerClass: nt().DeveloperComments_Anchor,
                  bIncludeIcon: !0,
                }),
            ],
          });
        }
        function Mn(n) {
          const { category: t } = n;
          return (0, e.jsx)("span", {
            className: nt().CompatibilityDetailRatingDescription,
            children: (0, j.we)((0, jt.Dy)(t)),
          });
        }
        function Vr(n) {
          const { category: t } = n;
          return (0, e.jsx)("span", {
            className: nt().CompatibilityDetailRatingDescription,
            children: (0, j.we)((0, jt.wW)(t)),
          });
        }
        function kr(n) {
          const {
              results: t,
              learnMore: s,
              appName: o,
              eStartingTab: r = ze.ZJ,
            } = n,
            [i, l] = (0, c.useState)(!1);
          let u = c.useCallback(
            (m) => {
              const h = (0, zr.D)();
              h && h.AddEvent(At.Xm.gS), l(!0);
            },
            [l],
          );
          const d = () => {
            l(!1);
          };
          let p = {
            onOKButton: void 0,
            onOKActionDescription: null,
            onCancelActionDescription: G.Z.Localize("#Button_Close"),
            onCancelButton: () => l(!1),
          };
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(L.Ii, {
                className: nt().LearnMore,
                onClick: u,
                children: s,
              }),
              (0, e.jsx)(E.mt, {
                active: i,
                onDismiss: d,
                modalClassName: "DeckVerifiedModalDialog",
                children: (0, e.jsx)(q.q, {
                  children: (0, e.jsx)(Gr.Ay, {
                    results: t,
                    buttonProps: p,
                    appName: o,
                    eStartingTab: r,
                  }),
                }),
              }),
            ],
          });
        }
        const Yr = Hr;
        var Qr = a(3609),
          un = a(72604),
          Fs = a(66243),
          Zr = a(47604),
          Jr = a(64238),
          Nt = a.n(Jr),
          fe = a(45931),
          _e = a(37520),
          Be = a(46146),
          kt = a(35038),
          $e = a(19982),
          pt = a(68312);
        const Pt = "0",
          ws = "-1",
          Fn = "wishlistcategories";
        function _s(n, t, s) {
          return [Fn, n, t, s];
        }
        function Ws(n, t, s, o) {
          return {
            queryKey: _s(t, !s || s === "0" ? "" : s, o),
            queryFn: () => $r(n, t, s, o),
            staleTime: 600 * 1e3,
          };
        }
        async function $r(n, t, s, o) {
          if (!t || (s != t && !o)) return [];
          let r = [];
          if (o) {
            const i = kt.w.Init($e.Y);
            i.Body().set_steamid(t),
              i.Body().set_share_token(o),
              (r =
                (await $e.FQ.GetSharedWishlistCategories(n, i))
                  .Body()
                  .toObject().categories ?? []);
          } else {
            const i = kt.w.Init($e.tP);
            r =
              (await $e.FQ.GetWishlistCategories(n, i)).Body().toObject()
                .categories ?? [];
          }
          return Vs(r);
        }
        function wn(n, t) {
          const s = (0, Ze.LH)(),
            o = (0, pt.KV)();
          return (0, Ct.I)(Ws(o, n, s, t));
        }
        function Xr(n, t) {
          const s = (0, Ze.LH)(),
            o = (0, pt.KV)(),
            r = c.useCallback((i) => new Map(i.map((l) => [l.id, l])), []);
          return (0, Ct.I)({ ...Ws(o, n, s, t), select: r });
        }
        function _n(n, t) {
          return ["wishlistappidcategories", n, t];
        }
        function qr(n, t, s) {
          return {
            queryKey: _n(t, s),
            queryFn: async () => {
              const o = kt.w.Init($e.vu);
              o.Body().set_appid(s);
              const r = await $e.FQ.GetItemCategories(n, o);
              return r.BSuccess()
                ? Vs(r.Body().toObject().categories ?? [])
                : [];
            },
            staleTime: 600 * 1e3,
          };
        }
        function Wn(n, t) {
          const s = (0, pt.KV)();
          return (0, Ct.I)(qr(s, n, t));
        }
        function Us(n) {
          const t = (0, pt.KV)(),
            s = (0, yt.jE)();
          return (0, rn.n)({
            mutationFn: async (o) => {
              const r = kt.w.Init($e.Vh);
              r.Body().set_appid(o.appid),
                r.Body().set_category_name(o.categoryName),
                r.Body().set_categoryid(o.categoryID);
              const i = await $e.FQ.AddWishlistItemCategory(t, r);
              let l = { eresult: i.GetEResult() };
              return (
                i.BSuccess() &&
                  (l.category = {
                    id: i.Body().categoryid(),
                    name: i.Body().name(),
                    cItems: i.Body().item_count(),
                    bNotificationOptIn: !!i.Body().notification_opt_in(),
                  }),
                l
              );
            },
            onSuccess(o, r) {
              s.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", n],
                exact: !1,
              }),
                s.invalidateQueries({ queryKey: [Fn, n], exact: !1 }),
                s.invalidateQueries({ queryKey: _n(n, r.appid) });
            },
          });
        }
        function zs(n) {
          const t = (0, pt.KV)(),
            s = (0, yt.jE)();
          return (0, rn.n)({
            mutationFn: async (o) => {
              const r = kt.w.Init($e.sF);
              return (
                r.Body().set_appid(o.appid),
                r.Body().set_categoryid(o.categoryID),
                (await $e.FQ.RemoveWishlistItemCategory(t, r)).GetEResult()
              );
            },
            onSuccess(o, r) {
              s.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", n],
                exact: !1,
              }),
                s.invalidateQueries({ queryKey: [Fn, n], exact: !1 }),
                s.invalidateQueries({ queryKey: _n(n, r.appid) });
            },
          });
        }
        const pn = "wishlist_recent_categories";
        function Gs(n) {
          return {
            queryKey: [pn],
            queryFn: async () => (await n.GetObject(pn)) ?? [],
            staleTime: 3600 * 1e3,
          };
        }
        function Ks() {
          const n = (0, pt.rX)();
          return (0, Ct.I)(Gs(n));
        }
        function Hs() {
          const n = (0, pt.rX)(),
            t = (0, yt.jE)();
          return (0, rn.n)({
            mutationFn: async (s) => {
              const o = (await t.ensureQueryData(Gs(n))) ?? [],
                r = Array.from(new Set([...s.rgCategoryIDs, o])).slice(0, 3);
              return await n.StoreObject(pn, r), r;
            },
            onSuccess: async (s) => {
              t.setQueryData([pn], s);
            },
          });
        }
        function Vs(n) {
          return (
            n.map((s) => ({
              id: s.categoryid,
              name: s.name,
              cItems: s.item_count ?? 0,
              bNotificationOptIn: !!s.notification_opt_in,
            })) ?? []
          ).sort((s, o) =>
            s.cItems !== o.cItems
              ? o.cItems - s.cItems
              : s.name.localeCompare(o.name),
          );
        }
        function ks(n) {
          const { data: t } = wn(n);
          return c.useMemo(() => {
            let s = [
              {
                id: Pt,
                name: (0, fe.g)("#Wishlist_Categories_Suggested_Birthday"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: Pt,
                name: (0, fe.g)("#Wishlist_Categories_Suggested_Recommended"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                id: Pt,
                name: (0, fe.g)("#Wishlist_Categories_Suggested_Discount"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
            ];
            for (const o of t ?? [])
              s = s.filter(
                (r) =>
                  r.name.toLocaleLowerCase() !== o.name.toLocaleLowerCase(),
              );
            return s;
          }, [t]);
        }
        function Au(n) {
          const t = useActiveServiceTransport(),
            s = useQueryClient(),
            o = _s(n, n, void 0);
          return useMutation({
            mutationFn: async (r) => {
              const i = await ei(t, r);
              if (i !== k_EResultOK)
                throw new Error(
                  `SetWishlistCategoryNotifications returned EResult ${i}`,
                );
            },
            onMutate: async (r) => {
              await s.cancelQueries({ queryKey: o }),
                s.setQueryData(o, (i) => {
                  if (!i) return r;
                  const l = new Map(r.map((u) => [u.id, u]));
                  return i.map((u) => l.get(u.id) ?? { ...u });
                });
            },
            onError: () => s.invalidateQueries({ queryKey: o }),
          });
        }
        async function ei(n, t) {
          if (t.length === 0) return k_EResultInvalidParam;
          const s = CProtoBufMsg.Init(
            CWishlist_SetWishlistCategoryNotifications_Request,
          );
          for (const r of t) {
            const i =
              new CWishlist_SetWishlistCategoryNotifications_Request_CategorySettings();
            i.set_categoryid(r.id),
              i.set_notification_opt_in(r.bNotificationOptIn),
              s.Body().add_categories(i);
          }
          return (
            await WishlistService.SetWishlistCategoryNotifications(n, s)
          ).GetEResult();
        }
        const ti = parseInt(Be.wishlistCategoryMaxDisplayChars);
        var Un = ((n) => (
          (n[(n.k_ECategoryButtonAction_None = 0)] =
            "k_ECategoryButtonAction_None"),
          (n[(n.k_ECategoryButtonAction_Filter = 1)] =
            "k_ECategoryButtonAction_Filter"),
          (n[(n.k_ECategoryButtonAction_Add = 2)] =
            "k_ECategoryButtonAction_Add"),
          (n[(n.k_ECategoryButtonAction_Remove = 3)] =
            "k_ECategoryButtonAction_Remove"),
          n
        ))(Un || {});
        function Yt(n) {
          const {
              rgCategories: t,
              header: s,
              onClick: o,
              eAction: r,
              bMultiline: i,
              bShowEmptyLabel: l,
              bShowAllButton: u,
              containerClassName: d,
              size: p,
              bShowCounts: m,
            } = n,
            h = c.useRef(null),
            f = r !== 3 && r !== 0;
          let x = [],
            v = !1;
          for (const P of t) {
            P.bSelected && (v = !0);
            const R = P.id === Pt ? P.name : P.id,
              ae = (0, e.jsx)(
                Ys,
                {
                  category: P,
                  selected: f && !!P.bSelected,
                  onClick: o ? () => o(P.name, P.id) : void 0,
                  eAction: r ?? 0,
                  bShowCount: m,
                },
                R,
              );
            x.push(ae);
          }
          const A = (0, fe.g)("#Wishlist_Controls_Categories_All");
          return (
            c.useEffect(() => {
              h.current?.Node().BFocusWithin() &&
                h.current.Node().ForceMeasureFocusRing();
            }, [t]),
            (0, e.jsxs)(I.Z, {
              className: Nt()(Be.CategoriesCtn, d),
              scrollIntoViewWhenChildFocused: !0,
              children: [
                s !== null &&
                  (0, e.jsx)("span", {
                    className: Be.CategoryListHeader,
                    children:
                      s ?? (0, fe.g)("#Wishlist_Controls_Categories_Header"),
                  }),
                (0, e.jsxs)(I.Z, {
                  className: Nt()(
                    Be.CategoryList,
                    i && Be.Multiline,
                    p === "small" && Be.Small,
                  ),
                  "flow-children": i ? "grid" : "row",
                  focusableIfEmpty: t.length > 0,
                  navRef: h,
                  children: [
                    u &&
                      (0, e.jsx)(Ys, {
                        category: {
                          cItems: 0,
                          id: ws,
                          name: A,
                          bNotificationOptIn: !1,
                        },
                        selected: !v,
                        onClick: () => o && o(A, ws),
                        onOKActionDescription: (0, fe.g)(
                          "#Wishlist_Gamepad_Filter_Clear_Category",
                        ),
                      }),
                    x,
                    !t.length &&
                      l &&
                      (0, e.jsx)("div", {
                        className: Be.CategoryListHeader,
                        children: (0, fe.g)("#Wishlist_Categories_None"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function Ys(n) {
          const {
              category: t,
              selected: s,
              className: o,
              onOKActionDescription: r,
              onClick: i,
              eAction: l,
              bShowCount: u,
            } = n,
            d = l === 3,
            p = l === 1,
            m = t.name.length >= ti;
          let h = r;
          p && !h
            ? (h = (0, fe.g)("#Wishlist_Gamepad_Filter_Category"))
            : l === 2 && !h
              ? (h = (0, fe.g)("#Wishlist_Gamepad_Add_Category"))
              : l === 3 &&
                !h &&
                (h = (0, fe.g)("#Wishlist_Gamepad_Removecategory"));
          const f = {
              onOKActionDescription: h,
              onOKButton: () => i && i(),
              focusClassName: Be.Focused,
            },
            x = !!i;
          let v;
          return (
            m
              ? (v = t.name)
              : d && x
                ? (v = (0, fe.g)(
                    "#Wishlist_Controls_Categories_Remove_Tooltip",
                  ))
                : p &&
                  x &&
                  (v = (0, fe.g)(
                    "#Wishlist_Controls_Categories_Filter_Tooltip",
                  )),
            (0, e.jsx)(ft.Gq, {
              toolTipContent: v,
              usePointerEvents: !0,
              children: (0, e.jsxs)(L.fu, {
                className: Nt()(
                  Be.CategoryBtn,
                  d && Be.Removable,
                  s && Be.Selected,
                  !x && Be.NotActionable,
                  o,
                ),
                onClick: i,
                ...f,
                children: [
                  (0, e.jsx)("span", {
                    className: Be.CategoryName,
                    children: t.name,
                  }),
                  u &&
                    t.cItems > 0 &&
                    (0, e.jsxs)("span", { children: ["(", t.cItems, ")"] }),
                  d && (0, e.jsx)(b.i6V, {}),
                ],
              }),
            })
          );
        }
        function ni(n) {
          const { categoryCount: t, onClick: s, bSimulateHover: o } = n;
          return (0, e.jsx)(ft.Gq, {
            toolTipContent: (0, fe.g)("#Wishlist_Controls_Categories_Manage"),
            usePointerEvents: !0,
            children: (0, e.jsx)(L.fu, {
              className: Nt()(
                Be.CategoryBtn,
                Be.CategorySettingsBtn,
                o && Be.Focused,
              ),
              onClick: s,
              children: t > 0 ? (0, e.jsx)(b.vmx, {}) : (0, e.jsx)(b.FWt, {}),
            }),
          });
        }
        const Qs = 16;
        function Zs(n) {
          const {
              appid: t,
              steamid: s,
              onClose: o,
              filteredCategoryIDs: r,
            } = n,
            [i, l] = c.useState([]),
            u = Hs(),
            { data: d } = (0, C.J$)({ appid: t }),
            p =
              d && d.name && d.visible
                ? (0, fe.g)("#Wishlist_Controls_Categories_Manageitem", d?.name)
                : (0, fe.g)("#Wishlist_Controls_Categories_Manage"),
            m = c.useCallback(() => {
              u.mutate({ rgCategoryIDs: i.reverse() }), o();
            }, [u, i, o]),
            h = (f) => {
              r && r.has(f) && m();
            };
          return (0, e.jsx)(Zr.s, {
            onClose: m,
            strTitle: p,
            navID: "AddWishlistCategoryDialog",
            className: _e.DialogContent,
            children: (0, e.jsx)(I.Z, {
              "flow-children": "column",
              children: (0, e.jsx)(ai, {
                appid: t,
                steamid: s,
                onCategoryAdd: (f) => l([...i, f].slice(-3)),
                onCategoryRemove: h,
                onClose: m,
              }),
            }),
          });
        }
        function si(n, t, s, o) {
          const { data: r } = Wn(s, t),
            { data: i } = Ks(),
            l = (u, d) => {
              const p = new Set(d);
              return [
                ...d.map((h) => u.find((f) => f.id === h)).filter((h) => !!h),
                ...u.filter((h) => !p.has(h.id)),
              ];
            };
          return c.useMemo(() => {
            if (!r) return [];
            const u = new Set(r?.map((f) => f.id) ?? []),
              d = n.filter((f) => !u.has(f.id));
            if (!o || o.length === 0)
              return l(
                d.filter((f) => f.cItems > 0),
                i ?? [],
              );
            const p = o.toLocaleLowerCase();
            let m = !1,
              h = d.filter((f) => {
                let x = f.name.toLocaleLowerCase();
                return m || (m = x === p), x.indexOf(p) > -1;
              });
            return (
              (h = l(h, [])),
              m ||
                h.unshift({
                  id: Pt,
                  name: o,
                  cItems: 0,
                  bNotificationOptIn: !1,
                }),
              h
            );
          }, [r, i, n, o]);
        }
        function ai(n) {
          const {
              appid: t,
              steamid: s,
              onCategoryAdd: o,
              onCategoryRemove: r,
              onClose: i,
            } = n,
            [l, u] = c.useState(""),
            [d, p] = c.useState(void 0),
            m = wn(s);
          c.useEffect(() => {
            !d && m.data && p(m.data);
          }, [m.data, d]);
          const h = Us(s),
            f = async (J, z) => {
              if (!J || t === 0) return;
              const Te = await h.mutateAsync({
                appid: t,
                categoryName: J,
                categoryID: z ?? Pt,
              });
              Te.eresult === un.R &&
                Te.category?.id &&
                (o(Te.category.id),
                d &&
                  !d.some((Ee) => Ee.id === Te.category.id) &&
                  p((Ee) => [...Ee, Te.category]));
            },
            x = zs(s),
            v = (J) => {
              t !== 0 && (x.mutate({ appid: t, categoryID: J }), r(J));
            },
            A = (J) => {
              J.stopPropagation(),
                J.preventDefault(),
                !(!l || l.length === 0) && (u(""), f(l));
            },
            { data: P } = Wn(s, t),
            R = ks(s),
            ae = R.length > 0,
            me = si(d ?? [], t, s, l),
            Z = (0, W.Qn)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(I.Z, {
                className: _e.CategorySelectorCtn,
                "flow-children": "column",
                children: [
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: _e.ListHeader,
                        children: (0, fe.g)(
                          "#Wishlist_Controls_Categories_Header_Current",
                        ),
                      }),
                      (0, e.jsx)(Yt, {
                        rgCategories: P ?? [],
                        header: null,
                        eAction: Un.k_ECategoryButtonAction_Remove,
                        onClick: (J, z) => v(z),
                        bMultiline: !0,
                        bShowEmptyLabel: !0,
                        containerClassName: _e.DialogCategoryCtn,
                      }),
                      !!P && P.length >= Qs && (0, e.jsx)(oi, {}),
                    ],
                  }),
                  (0, e.jsxs)("form", {
                    className: _e.SearchForm,
                    onSubmit: A,
                    children: [
                      (0, e.jsx)(L.BA, {
                        autoFocus: !0,
                        value: l,
                        className: _e.SearchInput,
                        type: "search",
                        placeholder: (0, fe.g)(
                          "#Wishlist_Categories_Dialog_Search",
                        ),
                        onChange: (J) => u(J.target.value),
                        onOKActionDescription:
                          l.length > 0
                            ? (0, fe.g)("#Wishlist_Categories_Dialog_Add")
                            : null,
                        maxLength: 500,
                      }),
                      !Z &&
                        (0, e.jsx)("div", {
                          className: Nt()(
                            _e.AddCategoryBtnCtn,
                            l.length > 0 && _e.Visible,
                          ),
                          children: (0, e.jsx)(Fs.Oh, {
                            onClick: A,
                            children: (0, fe.g)(
                              "#Wishlist_Categories_Dialog_Add",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("div", {
                        className: _e.ListHeader,
                        children: (0, fe.g)(
                          "#Wishlist_Controls_Categories_Header_Other",
                        ),
                      }),
                      (0, e.jsx)(Yt, {
                        rgCategories: me,
                        onClick: f,
                        header: null,
                        bMultiline: !0,
                        bShowEmptyLabel: !0,
                        containerClassName: _e.DialogCategoryCtn,
                        eAction: Un.k_ECategoryButtonAction_Add,
                      }),
                    ],
                  }),
                  ae &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: _e.ListHeader,
                          children: (0, fe.g)(
                            "#Wishlist_Controls_Categories_Header_Suggested",
                          ),
                        }),
                        (0, e.jsx)(Yt, {
                          rgCategories: R,
                          onClick: f,
                          header: null,
                          bMultiline: !0,
                          containerClassName: Nt()(
                            _e.DialogCategoryCtn,
                            _e.Suggested,
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              (0, e.jsx)(I.Z, {
                className: _e.Buttons,
                children: (0, e.jsx)(Fs.n9, {
                  onClick: i,
                  children: G.Z.Localize("#Button_Done"),
                }),
              }),
            ],
          });
        }
        function oi() {
          return (0, e.jsx)("div", {
            className: _e.MaxCategoriesMessage,
            children: (0, fe.g)("#Wishlist_Categories_Max_Per_App_Reached", Qs),
          });
        }
        var zn = a(31518);
        function Js(n, t) {
          if (!n.current) return;
          const s = n.current.closest(".queue_menu_flyout");
          s &&
            (t
              ? s.classList.add("force_expand")
              : s.classList.remove("force_expand"));
        }
        function ri(n) {
          const { appid: t } = n,
            s = (0, Ze.LH)(),
            [o, r] = c.useState(void 0),
            [i, l] = c.useState(!1),
            u = c.useRef(null),
            [d, p] = (0, dn.OP)(),
            { data: m } = Xr(s),
            { data: h } = wn(s),
            f = ks(s),
            { data: x } = Ks(),
            { data: v } = Wn(s, t),
            A = Us(s),
            P = zs(s),
            R = Hs(),
            ae = async (Ee, Ye) => {
              if (!o) return;
              const bn = Ye ? o.find((Se) => Se.id === Ye) : void 0;
              if (bn?.bSelected)
                P.mutate({ appid: t, categoryID: bn.id }),
                  r(
                    o.map((Se) =>
                      Se.id === Ye
                        ? {
                            ...Se,
                            bSelected: !1,
                            cItems: Math.max(0, Se.cItems - 1),
                          }
                        : Se,
                    ),
                  );
              else if (Ee) {
                const Se = await A.mutateAsync({
                  appid: t,
                  categoryName: Ee,
                  categoryID: Ye ?? Pt,
                });
                if (Se.eresult === un.R && Se.category?.id) {
                  const Xa = { ...Se.category, bSelected: !0 };
                  r(
                    (vu) => vu?.map((qa) => (qa.name === Ee ? Xa : qa)) ?? [Xa],
                  ),
                    R.mutate({ rgCategoryIDs: [Se.category.id] });
                }
              }
            },
            me = (Ee) => {
              Ee.stopPropagation(), Ee.preventDefault(), Js(u, !0), l(!0);
            },
            Z = () => {
              l(!1), Js(u, !1), r(void 0);
            },
            J = 6;
          if (
            (c.useEffect(() => {
              if (o || !m || !h || !v || !x || !f) return;
              let Ee = new Set(v.map((Se) => Se.id) ?? []),
                Ye = v.map((Se) => ({ ...Se, bSelected: !0 }));
              const bn = x.map((Se) => m.get(Se)).filter((Se) => !!Se);
              for (const Se of [...bn, ...h]) {
                if (Ye.length >= J) break;
                Ee.has(Se.id) || (Ye.push(Se), Ee.add(Se.id));
              }
              Ye.length < J &&
                (Ye = [...Ye, ...(f?.slice(0, J - Ye.length) ?? [])]),
                r(Ye);
            }, [o, h, m, x, v, f]),
            !o || o.length === 0)
          )
            return null;
          const z = o.filter((Ee) => !Ee.bSelected),
            Te = o.filter((Ee) => Ee.bSelected);
          return (0, e.jsxs)("div", {
            className: zn.CategoriesMenuOption,
            ref: u,
            children: [
              (0, e.jsxs)(L.ml, {
                className: zn.HeaderCtn,
                ...p,
                onClick: me,
                children: [
                  (0, e.jsx)("div", {
                    className: zn.Label,
                    children: (0, j.we)("#Wishlist_QuickAdd_Header"),
                  }),
                  (0, e.jsx)(ni, {
                    categoryCount: v?.length ?? 0,
                    bSimulateHover: d,
                    onClick: () => {},
                  }),
                ],
              }),
              Te.length > 0 &&
                (0, e.jsx)(Yt, {
                  rgCategories: Te,
                  header: null,
                  onClick: ae,
                  bMultiline: !0,
                }),
              z.length > 0 &&
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("div", {
                      children: (0, j.we)(
                        "#Wishlist_QuickAdd_RecentAndSuggested",
                      ),
                    }),
                    (0, e.jsx)(Yt, {
                      rgCategories: z,
                      header: null,
                      onClick: ae,
                      bMultiline: !0,
                    }),
                  ],
                }),
              i && (0, e.jsx)(Zs, { appid: t, steamid: s, onClose: Z }),
            ],
          });
        }
        var le = a(56062),
          Qt = a(24179),
          $s = a(79882),
          Xs = a(63547),
          ii = a(68094);
        function Gn(n) {
          return n.packageid
            ? { packageid: n.packageid }
            : { bundleid: n.bundleid };
        }
        function li(n) {
          return (0, ii.ER)(Gn(n));
        }
        var ci = a(49147);
        function Ot() {
          const n = (0, pt.KV)(),
            t = de.iA.accountid;
          return (0, Ct.I)(di(n, t));
        }
        function di(n, t) {
          return {
            queryKey: qs(t),
            queryFn: async () => {
              if (!t) return new Set();
              const s = await ui(n, t);
              return new Set(s);
            },
            placeholderData: new Set(),
            staleTime: 600 * 1e3,
          };
        }
        function qs(n) {
          return ["AccountActiveLicenses", n ?? 0];
        }
        async function ui(n, t) {
          throw new ci.x(un.Sq, "Not implemented");
        }
        function ea() {
          const n = (0, yt.jE)(),
            t = de.iA.accountid;
          return c.useCallback(
            (s) => {
              n.setQueryData(qs(t), () => new Set(s));
            },
            [n, t],
          );
        }
        function pi(n, t) {
          return !n?.appid ||
            n.type === le.uE._i ||
            !t ||
            !t.included_appids?.length ||
            !t.included_types?.length
            ? !1
            : t.included_appids.length > 1 &&
                !t.included_appids.includes(n.appid) &&
                t.included_types.every((s) => s === le.uE._i);
        }
        function ta(n) {
          const { data: t } = (0, C.J$)({ appid: n }),
            s = t?.included_items?.included_packages;
          return c.useMemo(() => {
            const o = new Set();
            for (const r of s || []) r.id && pi(t, r) && o.add(r.id);
            return o;
          }, [t, s]);
        }
        function mi(n) {
          const { data: t } = (0, C.is)({ appid: n }),
            s = ta(n),
            o = t?.purchase_options;
          return c.useMemo(() => {
            if (o)
              return o
                .filter((r) => r.packageid && s.has(r.packageid))
                .sort(
                  (r, i) =>
                    Number(r.final_price_in_cents || 0) -
                    Number(i.final_price_in_cents || 0),
                );
          }, [o, s]);
        }
        var Bt = a(67529);
        const st = c.createContext({ appid: Bt.sc, nOptions: 0 }),
          na = c.createContext({ ShowConfirmDialog: () => {} });
        var hi = a(1880),
          gi = a(15568);
        function fi(n) {
          const {
            active: t,
            onOK: s,
            closeModal: o,
            bCloseOnOK: r,
            children: i,
            ...l
          } = n;
          if (!t) return null;
          const u =
            (typeof l.strTitle == "string" && l.strTitle) ||
            (0, j.we)("#Steam_Platform");
          return (0, e.jsx)(gi.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: u,
            children: (0, e.jsx)(hi.o0, {
              ...l,
              onCancel: o,
              onOK: () => {
                s(), r && o();
              },
              children: i,
            }),
          });
        }
        function xi(n) {
          const { bCloseOnOK: t = !0, children: s, ...o } = n,
            [r, i, l] = (0, ee.uD)();
          return [
            (0, e.jsx)(fi, {
              active: r,
              bCloseOnOK: t,
              closeModal: l,
              ...o,
              children: s,
            }),
            i,
            l,
          ];
        }
        function vi(n) {
          const [t, s] = c.useState(""),
            [o, r] = c.useState(""),
            [i, l] = xi({
              bCloseOnOK: !0,
              bAlertDialog: !0,
              onOK: () => {},
              strTitle: t,
              strDescription: o,
            }),
            u = c.useCallback(
              (p, m) => {
                s(p), r(m), l();
              },
              [l],
            ),
            d = c.useMemo(() => ({ ShowConfirmDialog: u }), [u]);
          return (0, e.jsxs)(na.Provider, {
            value: d,
            children: [n.children, i],
          });
        }
        var yi = a(31275);
        const re = {};
        (re.arabic = () => a.e(70667).then(a.t.bind(a, 70667, 19))),
          (re.brazilian = () => a.e(58167).then(a.t.bind(a, 58167, 19))),
          (re.bulgarian = () => a.e(75936).then(a.t.bind(a, 75936, 19))),
          (re.czech = () => a.e(67478).then(a.t.bind(a, 67478, 19))),
          (re.danish = () => a.e(77178).then(a.t.bind(a, 77178, 19))),
          (re.dutch = () => a.e(62063).then(a.t.bind(a, 62063, 19))),
          (re.english = () => a.e(91253).then(a.t.bind(a, 91253, 19))),
          (re.finnish = () => a.e(66690).then(a.t.bind(a, 66690, 19))),
          (re.french = () => a.e(32763).then(a.t.bind(a, 32763, 19))),
          (re.german = () => a.e(82937).then(a.t.bind(a, 82937, 19))),
          (re.greek = () => a.e(36501).then(a.t.bind(a, 36501, 19))),
          (re.hungarian = () => a.e(41812).then(a.t.bind(a, 41812, 19))),
          (re.indonesian = () => a.e(35383).then(a.t.bind(a, 35383, 19))),
          (re.italian = () => a.e(48149).then(a.t.bind(a, 48149, 19))),
          (re.japanese = () => a.e(89876).then(a.t.bind(a, 89876, 19))),
          (re.koreana = () => a.e(21470).then(a.t.bind(a, 21470, 19))),
          (re.latam = () => a.e(69206).then(a.t.bind(a, 69206, 19))),
          (re.malay = () => a.e(74357).then(a.t.bind(a, 74357, 19))),
          (re.norwegian = () => a.e(94025).then(a.t.bind(a, 94025, 19))),
          (re.polish = () => a.e(92494).then(a.t.bind(a, 92494, 19))),
          (re.portuguese = () => a.e(23862).then(a.t.bind(a, 1481, 19))),
          (re.romanian = () => a.e(48824).then(a.t.bind(a, 48824, 19))),
          (re.russian = () => a.e(50208).then(a.t.bind(a, 50208, 19))),
          (re.schinese = () => a.e(63875).then(a.t.bind(a, 63875, 19))),
          (re.spanish = () => a.e(34053).then(a.t.bind(a, 34053, 19))),
          (re.swedish = () => a.e(38804).then(a.t.bind(a, 38804, 19))),
          (re.tchinese = () => a.e(48688).then(a.t.bind(a, 48688, 19))),
          (re.thai = () => a.e(79173).then(a.t.bind(a, 79173, 19))),
          (re.turkish = () => a.e(75629).then(a.t.bind(a, 75629, 19))),
          (re.ukrainian = () => a.e(22319).then(a.t.bind(a, 22319, 19))),
          (re.vietnamese = () => a.e(33844).then(a.t.bind(a, 33844, 19)));
        async function Ci(n) {
          if (re[n]) return re[n]();
        }
        const g = (0, yi.l)(Ci);
        var Ai = a(21763),
          St = a.n(Ai),
          Re = a(79611),
          sa = a(80755);
        function aa(n) {
          const { color: t, onClick: s, children: o } = n,
            r = (i) => {
              i.stopPropagation(), s && s(i);
            };
          return (0, e.jsx)(Re.$, { color: t, onClick: r, children: o });
        }
        function ji(n) {
          const {
              onActivate: t,
              onOKActionDescription: s,
              onSecondaryButton: o,
              onSecondaryActionDescription: r,
            } = n,
            i = !1;
          return s || (i && r)
            ? (0, e.jsxs)(Q.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "end",
                justify: "end",
                gap: "2",
                children: [
                  i &&
                    r &&
                    (0, e.jsx)(aa, { onClick: o, children: (0, sa.gh)(r) }),
                  s &&
                    (0, e.jsx)(aa, {
                      color: "storegreen",
                      onClick: t,
                      children: (0, sa.gh)(s),
                    }),
                ],
              })
            : null;
        }
        function ju(n) {
          const { option: t } = n,
            s = t.type == "item" && !!t.data.is_edition,
            o = t.type == "item" && t.data.package_group;
          return jsx(Fragment, { children: !1 });
        }
        function at(n) {
          const {
              className: t,
              option: s,
              color: o = "blue",
              allowSingleLine: r,
              allowTwoColumn: i,
              children: l,
              ...u
            } = n,
            { nOptions: d } = c.useContext(st),
            p = d == 1;
          return (0, e.jsx)(q.q, {
            rootClassName: St().FocusRing,
            children: (0, e.jsxs)(I.Z, {
              className: (0, D.A)(
                St().PurchaseOption,
                o == "green" && St().Green,
                r && St().AllowSingleLine,
                i && St().AllowTwoColumn,
                p && St().OnlyChild,
              ),
              focusable: !0,
              ...u,
              children: [
                p &&
                  i &&
                  (0, e.jsx)("div", {
                    className: St().LeftColumn,
                    children: l,
                  }),
                !(p && i) && l,
                (0, e.jsx)(ji, { ...u }),
                !1,
              ],
            }),
          });
        }
        var oa = a(13977),
          Pi = a(97825);
        function Kn(n) {
          const t = (0, Qe.Gd)();
          return c.useCallback(() => {
            n.packageid
              ? window.AddItemToCart(n.packageid, void 0, t)
              : n.bundleid && window.AddItemToCart(void 0, n.bundleid, t);
          }, [t, n.packageid, n.bundleid]);
        }
        function mn(n, t) {
          return c.useCallback(() => {
            (0, oa.o)(n, t);
          }, [n, t]);
        }
        function Si(n, t) {
          return c.useCallback(() => {
            (0, oa.M)(n, t);
          }, [n, t]);
        }
        function hn(n) {
          const { data: t } = (0, C.J$)(n),
            { ShowConfirmDialog: s } = c.useContext(na),
            { data: o = new Set() } = Ot(),
            r = ea(),
            i = (0, Pi.S)(n);
          return c.useCallback(() => {
            i.mutateAsync().then(([u, d]) => {
              let p,
                m = t?.name || "";
              if (u != un.R)
                p = g.Localize(
                  "#AppPage_PurchaseOption_AddToLibraryError",
                  m,
                  u,
                );
              else {
                p = g.Localize("#AppPage_PurchaseOption_AddedToLibrary", m);
                for (let h of d.packageids_added || []) o.add(h);
                r(Array.from(o));
              }
              s(m, p);
            });
          }, [i, s, t?.name, o, r]);
        }
        var Mt = a(57152);
        function Ii(n) {
          const { id: t, bPrepurchase: s } = n,
            { data: o } = (0, C.J$)(t);
          return o
            ? s
              ? g.Localize("#AppPage_Prepurchase", o.name)
              : o.name
            : null;
        }
        function ot(n) {
          const { id: t, title: s, bPrepurchase: o = !1, children: r } = n;
          return (0, e.jsxs)(Mt.D, {
            size: "4",
            weight: "heavy",
            children: [s || (0, e.jsx)(Ii, { id: t, bPrepurchase: o }), r],
          });
        }
        function rt(n) {
          const { children: t } = n;
          return (0, e.jsx)(Q.s, {
            direction: "column",
            flexGrow: "1",
            gap: "3",
            overflow: "hidden",
            children: t,
          });
        }
        function bi(n) {
          const { option: t } = n,
            s = { appid: t.appid },
            { data: o } = (0, C.J$)(s),
            r = hn(s),
            i = (0, Qt.$Y)(),
            l = t.bStandalone,
            u = i.data?.has(t.appid),
            d = Si(t.appid, o?.name ?? ""),
            p = (0, xt.n)(o),
            m = c.useCallback(() => {
              p && (window.location.href = p);
            }, [p]);
          return o
            ? (0, e.jsx)(e.Fragment, {
                children: (0, e.jsxs)(at, {
                  color: "green",
                  allowSingleLine: !t.label,
                  allowTwoColumn: !!t.label,
                  option: t,
                  onActivate: d,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_Download",
                  ),
                  onSecondaryButton: l ? m : void 0,
                  onSecondaryActionDescription: l
                    ? g.Localize("#AppPage_PurchaseOption_MoreInfo")
                    : void 0,
                  onOptionsButton: u ? void 0 : r,
                  onOptionsActionDescription: u
                    ? void 0
                    : g.Localize("#AppPage_PurchaseOption_AddToLibrary"),
                  children: [
                    (0, e.jsx)(ot, {
                      title: g.Localize(
                        "#AppPage_PurchaseOption_DownloadDemo",
                        o.name,
                      ),
                    }),
                    (0, e.jsx)(rt, {
                      children: (0, e.jsx)(S.EY, { children: t.label }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var it = a(44983),
          He = a(16114);
        function Ti(n) {
          const { option: t } = n,
            s = c.useContext(st),
            { data: o } = (0, C.J$)({ appid: s.appid }),
            r = mn(s.appid, o?.name ?? ""),
            i = (0, it._2)(),
            l =
              o &&
              o.free_weekend &&
              (o.free_weekend.start_time || 0) <= i &&
              (o.free_weekend.end_time || 0) > i;
          return o
            ? (0, e.jsxs)(at, {
                option: t,
                color: "green",
                allowSingleLine: !0,
                onActivate: r,
                onOKActionDescription: g.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, e.jsx)(ot, {
                    title: g.Localize("#AppPage_PurchaseOption_Play", o.name),
                  }),
                  (0, e.jsxs)(rt, {
                    children: [
                      !l &&
                        (0, e.jsx)(S.EY, {
                          children: g.Localize(
                            o.type == le.uE.ue
                              ? "#AppPage_PurchaseOption_FreeDemo"
                              : "#AppPage_PurchaseOption_FreeToPlay",
                          ),
                        }),
                      l &&
                        (0, e.jsx)(S.EY, {
                          children: g.Localize(
                            "#AppPage_PurchaseOption_FreeWeekend",
                            (0, He.TW)(o.free_weekend.end_time, {
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
        var ra = a(7487),
          Ei = a(52574),
          Li = a(91937),
          Di = a(49144),
          Ri = a(33770),
          Ni = a(59443),
          ia = a(51596),
          gn = a(43434);
        function la(n) {
          const { text: t, onURLDetected: s } = n,
            o = c.useCallback(
              (i) => {
                let l = (0, ia.P)(i.args) ?? (0, ia.P)(i.args, "href");
                return (
                  (0, gn.p)(l) && (l = (0, gn.E)(l)), s && s(l), (0, Ni._r)(i)
                );
              },
              [s],
            );
          return c
            .useMemo(() => {
              const i = (u) => new ra.OJ(new ra.R8()),
                l = { ...Ei.L, ...Di.I, ...Li.F, url: { Constructor: o } };
              return new Ri.B(l, i, W.TS.LANGUAGE);
            }, [o])
            .ParseBBCode(t, void 0);
        }
        var ca = a(34360),
          Oi = a(16346),
          Bi = a(59869),
          Hn = a.n(Bi);
        function Mi(n) {
          const { option: t } = n,
            s = Kn(t),
            o = t.packageid
              ? { packageid: t.packageid }
              : { bundleid: t.bundleid };
          return (0, e.jsxs)(ca.kt, {
            className: Hn().MenuItem,
            onSelected: s,
            children: [
              (0, e.jsx)("div", {
                className: Hn().Name,
                children: t.purchase_option_name,
              }),
              (0, e.jsx)("div", {
                className: Hn().Price,
                children: (0, e.jsx)(Dn.AO, { id: o, purchaseOption: t }),
              }),
            ],
          });
        }
        function Fi(n) {
          const { option: t } = n;
          return (0, e.jsx)(ca.tz, {
            label: t.data.package_group.dropdown_title,
            children: t.data.items.map((s) =>
              (0, e.jsx)(Mi, { option: s }, s.packageid ?? s.bundleid),
            ),
          });
        }
        function wi(n) {
          if (n.data.package_group.name == "subscriptions") return !0;
          for (let t of n.data.items)
            if (!t.recurrence_info?.packageid) return !1;
          return !0;
        }
        function _i(n) {
          const { option: t } = n,
            { appid: s } = c.useContext(st),
            { data: o } = (0, C.J$)({ appid: s }),
            r = t.data.package_group,
            [i, l] = c.useState(""),
            u = (0, Qe.aL)(i),
            d = c.useCallback(() => {
              i && (window.location.href = u);
            }, [i, u]),
            p = c.useCallback(
              (m) => {
                (0, Oi.lX)((0, e.jsx)(Fi, { option: t }), m);
              },
              [t],
            );
          return (0, e.jsxs)(at, {
            option: t,
            allowTwoColumn: !0,
            onActivate: p,
            onSecondaryButton: i ? d : void 0,
            onSecondaryActionDescription: i
              ? g.Localize("#AppPage_PurchaseOption_MoreInfo")
              : void 0,
            children: [
              (0, e.jsx)(ot, {
                title:
                  r.dropdown_title ||
                  g.Localize("#AppPage_Dropdown_DefaultTitle", o?.name),
              }),
              (0, e.jsxs)(rt, {
                children: [
                  r.dropdown_description_bbcode &&
                    (0, e.jsx)(S.EY, {
                      size: "2",
                      children: (0, e.jsx)(la, {
                        text: r.dropdown_description_bbcode,
                        onURLDetected: l,
                      }),
                    }),
                  !r.dropdown_description_bbcode &&
                    wi(t) &&
                    (0, e.jsx)(S.EY, {
                      size: "2",
                      children: g.Localize(
                        "#AppPage_Dropdown_DefaultDescription_Subscription",
                      ),
                    }),
                ],
              }),
              (0, e.jsx)(Q.s, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "end",
                justify: "end",
                gap: "2",
                children: (0, e.jsx)(Re.$, {
                  color: "greyneutral",
                  variant: "dark",
                  children: g.Localize("#AppPage_PurchaseOption_ViewOptions"),
                }),
              }),
            ],
          });
        }
        var da = a(79014);
        function Wi(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t }),
            { data: o } = (0, C.lv)({ appid: t });
          if (!s || !o) return null;
          const r = (0, Ln.b0)(o, "community_icon");
          return (0, e.jsxs)(e.Fragment, {
            children: [
              !1,
              (0, e.jsx)(S.EY, {
                children: (0, da.i)(
                  g.Localize(
                    "#AppPage_PurchaseOption_IncludedWithMasterSub",
                    s.name,
                  ),
                  (0, e.jsx)("b", {}),
                ),
              }),
            ],
          });
        }
        function Ui(n) {
          const { option: t, appidMasterSub: s } = n,
            o = c.useContext(st),
            { data: r } = (0, C.J$)({ appid: o.appid }),
            i = mn(o.appid, r?.name ?? "");
          return r
            ? (0, e.jsxs)(at, {
                option: t,
                color: "green",
                onActivate: i,
                onOKActionDescription: g.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, e.jsx)(ot, {
                    title: g.Localize("#AppPage_PurchaseOption_Play", r.name),
                  }),
                  (0, e.jsxs)(rt, {
                    children: [
                      !s &&
                        (0, e.jsx)(S.EY, {
                          children: g.Localize(
                            "#AppPage_PurchaseOption_Play_Description",
                            r.name,
                          ),
                        }),
                      s && (0, e.jsx)(Wi, { appid: s }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function zi(n) {
          const { option: t, appidPlaytest: s, bIsOpen: o } = n,
            { data: r } = (0, C.J$)({ appid: s }),
            { data: i } = (0, C.by)({ appid: s }),
            { data: l } = (0, Xs.VZ)(s);
          if (!r || !i || !l) return null;
          const u = l?.[0]?.status || At.EX.Rw;
          console.log(l, u);
          let d, p, m;
          switch (u) {
            case At.EX.Rw:
              (d = "#AppPage_PurchaseOption_JoinPlaytest"),
                o
                  ? (i.steam_release_date || U.TQt) < (0, it._2)()
                    ? (p = "#AppPage_PurchaseOption_Playtest_Open")
                    : (p = "#AppPage_PurchaseOption_Playtest_Open_Unreleased")
                  : (p = "#AppPage_PurchaseOption_JoinPlaytest_Description");
              break;
            case At.EX.OT:
              (d = "#AppPage_PurchaseOption_JoinPlaytest"),
                (p = "#AppPage_PurchaseOption_JoinPlaytest_InvitePending");
              break;
            case At.EX.IS:
              (d = "#AppPage_PurchaseOption_JoinPlaytest"),
                (p = "#AppPage_PurchaseOption_JoinPlaytest_InvitedByFriend");
              break;
            case At.EX.m7:
              (i.steam_release_date || U.TQt) < (0, it._2)()
                ? ((d = "#AppPage_PurchaseOption_Playtest_Accepted_Title"),
                  (p = "#AppPage_PurchaseOption_Playtest_Accepted"))
                : (i.is_preload,
                  (d =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable_Title"),
                  (p =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable"));
              break;
            default:
              (0, ln.wT)(!1, `Unknown playtest status ${u}`);
          }
          return (
            m && de.iA.logged_in,
            d && p
              ? (0, e.jsxs)(at, {
                  option: t,
                  onActivate: m,
                  children: [
                    (0, e.jsx)(ot, { title: g.Localize(d, r.name) }),
                    (0, e.jsx)(rt, {
                      children: (0, e.jsx)(S.EY, { children: g.Localize(p) }),
                    }),
                  ],
                })
              : null
          );
        }
        var Gi = a(18574),
          Xe = a.n(Gi);
        function Ki(n) {
          const { option: t } = n,
            s = { appid: t.appid },
            { data: o } = (0, C.J$)(s),
            r = (0, xt.n)(o),
            i = c.useCallback(() => {
              r && (window.location.href = r);
            }, [r]);
          return o
            ? (0, e.jsx)(e.Fragment, {
                children: (0, e.jsxs)(at, {
                  option: t,
                  onActivate: i,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_MoreInfo",
                  ),
                  children: [
                    (0, e.jsx)(ot, { title: t.title }),
                    (0, e.jsx)(rt, {
                      children: (0, e.jsx)(S.EY, {
                        size: "2",
                        children: t.description,
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function Hi(n) {
          const { discount: t } = n;
          (0, ge.bB)({ msInterval: 1e3 });
          const s = (0, it._2)();
          if (t.discount_end_date <= s) return null;
          const o = Math.max(t.discount_end_date - s, 0),
            r = t.discount_description,
            i = g.Localize(r, (0, He.R2)(o));
          return i == r
            ? null
            : (0, e.jsx)(S.EY, { contrast: "body", size: "2", children: i });
        }
        function Vi(n) {
          const { option: t } = n;
          return !t || !t.discount_pct || t.hide_discount_pct_for_compliance
            ? null
            : de.iA.country_code == "PL"
              ? (0, e.jsx)(S.EY, {
                  size: "2",
                  children: g.Localize("#AppPage_Discount_Last30"),
                })
              : null;
        }
        function ki(n) {
          const { option: t, discount: s } = n,
            o = c.useContext(st),
            { data: r } = (0, C.J$)({ appid: o.appid }),
            { data: i } = (0, C.J$)({ appid: s.master_sub_appid || Bt.sc });
          if (!r || !i || t.discount_pct <= 0) return null;
          const l = s.discount_description,
            u = g.Localize(l, "", t.discount_pct || 0, i.name, r.name);
          return l == u
            ? null
            : (0, e.jsx)(S.EY, { contrast: "body", size: "2", children: u });
        }
        function Yi(n) {
          const { option: t } = n;
          if (!t) return null;
          if (t.is_free_to_keep && t.free_to_keep_ends)
            return (0, e.jsx)(S.EY, {
              contrast: "body",
              size: "2",
              children: g.Localize(
                "#AppPage_PurchaseOption_FreeToKeepDescription",
                (0, He.TW)(t.free_to_keep_ends, {
                  weekday: void 0,
                  year: void 0,
                  hour: "numeric",
                  minute: "numeric",
                }),
              ),
            });
          if (!t?.active_discounts?.length) return null;
          const s = (0, it._2)(),
            o = t.active_discounts.reduce((i, l) =>
              l.discount_end_date != U.TQt &&
              (!i ||
                (l.discount_end_date > s &&
                  l.discount_end_date < i.discount_end_date))
                ? l
                : i,
            );
          let r = "";
          if (o.discount_end_date == U.TQt)
            r = (0, e.jsx)(ki, { option: t, discount: o });
          else if (
            o.discount_end_date != U.TQt &&
            o.discount_end_date - s > 2880 * 60
          ) {
            const i = o.discount_description + "_date";
            (r = g.Localize(
              i,
              (0, He.TW)(o.discount_end_date, {
                weekday: void 0,
                year: void 0,
              }),
            )),
              r == i && (r = null);
          } else return (0, e.jsx)(Hi, { discount: o });
          return r
            ? (0, e.jsx)(S.EY, { contrast: "body", size: "2", children: r })
            : null;
        }
        function Vn(n) {
          const { option: t } = n;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Yi, { option: t }),
              (0, e.jsx)(Vi, { option: t }),
            ],
          });
        }
        var ua = a(81055),
          Qi = a(54652),
          Zi = a.n(Qi);
        function kn(n) {
          const { id: t } = n,
            { data: s } = (0, C.J$)(t),
            { data: o } = (0, C.by)(t),
            { data: r } = Ot(),
            { data: i } = (0, C.Q_)(t),
            { data: l } = (0, Qt.$Y)();
          if (!s || !o || !r || !i || !l) return null;
          const u = "packageid" in t && r.has(t.packageid),
            d = "bundleid" in t && !i.must_purchase_as_set,
            p = o?.is_coming_soon && !!o?.advance_access_date;
          let m = null,
            h,
            f;
          if (u)
            (h = "greyneutral-1"),
              (f = "storegreen-10"),
              (m = g.Localize("#AppPage_PurchaseOption_InLibrary"));
          else if (d)
            (s.included_appids?.filter((v) => !l.has(v)) || []).length > 0 &&
              ((h = "slate-12"),
              (f = "blue-8"),
              (m = g.Localize(
                "#AppPage_PurchaseOption_CompleteYourCollection",
              )));
          else if (p) {
            const x = (0, He.TW)(o.advance_access_date, {
              weekday: void 0,
              month: "short",
              day: "numeric",
              year: void 0,
            });
            (h = "slate-12"),
              (f = "blue-8"),
              (m = g.Localize("#AppPage_AdvanceAccess_Banner", x));
          }
          return m
            ? (0, e.jsx)(Q.s, {
                className: Zi().PurchaseOptionBanner,
                paddingX: "1",
                background: f,
                children: (0, e.jsx)(S.EY, {
                  size: "1",
                  color: h,
                  contrast: "title",
                  whiteSpace: "nowrap",
                  truncate: !0,
                  children: m,
                }),
              })
            : null;
        }
        var Ji = a(76962),
          $i = a(8928),
          Xi = a(69289),
          pa = a(89611);
        function Yn(n) {
          const t = (0, Xi.mz)({ ...n, className: n.className }, qi);
          return (0, e.jsx)("img", { ...t });
        }
        const qi = [
          ...$i.h,
          {
            prop: "objectFit",
            className: pa.ObjectFit,
            cssProperty: "--object-fit",
          },
          {
            prop: "objectPosition",
            className: pa.ObjectPosition,
            cssProperty: "--object-position",
          },
        ];
        function Qn(n, t) {
          return de.TS.STORE_ITEM_BASE_URL + n.replace("${FILENAME}", t);
        }
        function el(n) {
          const { closeModal: t } = n,
            s = c.useContext(st),
            { data: o } = (0, C.J$)({ appid: s.appid }),
            { data: r } = (0, C.lv)({ appid: s.appid });
          return (0, e.jsxs)(Q.s, {
            direction: "column",
            height: "90vh",
            overflow: "hidden",
            align: "center",
            gap: "2",
            children: [
              (0, e.jsx)(Ie.az, {
                aspectRatio: "748 / 896",
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "90%",
                overflow: "hidden",
                children:
                  o &&
                  r &&
                  (0, e.jsx)(Yn, {
                    width: "100%",
                    src: Qn(r.asset_url_format, r.edition_comparison),
                    alt: o.name,
                  }),
              }),
              (0, e.jsx)(Ie.az, {
                flexGrow: "0",
                flexShrink: "0",
                children: (0, e.jsx)(Re.$, {
                  onClick: t,
                  children: G.Z.Localize("#Button_Close"),
                }),
              }),
            ],
          });
        }
        const fn = new Gt.wd("PurchaseOptions");
        function ma(n) {
          const { id: t } = n,
            { data: s } = (0, C.J$)(t);
          return s?.purchase_description_bbcode
            ? (0, e.jsx)("div", {
                children: (0, e.jsx)(la, {
                  text: s.purchase_description_bbcode,
                }),
              })
            : null;
        }
        function ha(n) {
          const { id: t } = n,
            { data: s } = (0, C.by)(t),
            { data: o } = Ot();
          if (
            !s ||
            !s.advance_access_date ||
            !s.steam_release_date ||
            !o ||
            !s.is_coming_soon
          )
            return null;
          const r = "packageid" in t && o.has(t.packageid),
            i = (0, it._2)(),
            l = (0, He.IH)(s.advance_access_date - i),
            u = (0, He.IH)(s.steam_release_date - s.advance_access_date);
          let d;
          return (
            i > s.advance_access_date
              ? (d = r
                  ? "#AppPage_AdvanceAccess_Now_Owned"
                  : "#AppPage_AdvanceAccess_Now")
              : (d = r
                  ? "#AppPage_AdvanceAccess_Starts_Owned"
                  : "#AppPage_AdvanceAccess_Starts"),
            d
              ? (0, e.jsx)(S.EY, {
                  size: "2",
                  color: "blue-10",
                  children: g.Localize(d, l, u),
                })
              : null
          );
        }
        function tl(n) {
          const { id: t, option: s } = n,
            o = c.useContext(st),
            { data: r } = (0, C.J$)(t),
            { data: i } = (0, C.J$)({ appid: o.appid }),
            { data: l } = (0, C.by)(t),
            { data: u } = Ot(),
            d = hn(t),
            p = mn(o.appid, i?.name ?? "");
          if (!r || !i || !u) return null;
          const m = "packageid" in t && u.has(t.packageid);
          fn.Debug(r);
          let h = r.self_purchase_option?.packageid
              ? r.self_purchase_option
              : r.best_purchase_option,
            f = g.Localize("#AppPage_PurchaseOption_GetFreeToKeep", i.name);
          const x = m && h?.is_free_to_keep;
          let v = x ? p : d,
            A = g.Localize(
              x
                ? "#AppPage_PurchaseOption_PlayNow"
                : "#AppPage_PurchaseOption_AddToLibrary",
            );
          return (
            fn.Debug(t, h, r),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(kn, { id: t }),
                (0, e.jsxs)(at, {
                  option: s,
                  onActivate: v,
                  onOKActionDescription: A,
                  children: [
                    (0, e.jsx)(ot, {
                      id: t,
                      title: f,
                      bPrepurchase: (0, ua.Nq)(l, h),
                    }),
                    (0, e.jsxs)(rt, {
                      children: [
                        (0, e.jsx)(on, {
                          id: t,
                          bSelfPurchaseOption:
                            !!r.self_purchase_option?.packageid,
                        }),
                        (0, e.jsx)(ha, { id: t }),
                        (0, e.jsx)(Vn, { option: h }),
                        (0, e.jsx)(ma, { id: t }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function nl(n) {
          const { id: t, option: s } = n,
            o = c.useContext(st),
            { data: r } = (0, C.J$)(t),
            { data: i } = (0, C.J$)({ appid: o.appid }),
            { data: l } = (0, C.by)(t),
            { data: u } = Ot(),
            d = hn(t),
            p = Kn(s.data),
            [m, h, f] = (0, ge.uD)(!1);
          if (!r || !i) return null;
          fn.Debug(r);
          let x = r.self_purchase_option?.packageid
            ? r.self_purchase_option
            : r.best_purchase_option;
          if (x?.is_free_to_keep) return (0, e.jsx)(tl, { ...n });
          const v =
            s.bAvailableForFree &&
            s.data.packageid &&
            !u?.has(s.data.packageid);
          let A, P;
          s.data.is_edition &&
            ((A = h),
            (P = g.Localize("#AppPage_PurchaseOption_CompareEditions")));
          let R, ae;
          return (
            v &&
              ((R = d),
              (ae = g.Localize("#AppPage_PurchaseOption_AddToLibrary"))),
            fn.Debug(t, x, r),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(kn, { id: t }),
                (0, e.jsxs)(at, {
                  option: s,
                  allowTwoColumn: !0,
                  onActivate: p,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: A,
                  onSecondaryActionDescription: P,
                  onOptionsButton: R,
                  onOptionsActionDescription: ae,
                  children: [
                    (0, e.jsx)(ot, { id: t, bPrepurchase: (0, ua.Nq)(l, x) }),
                    (0, e.jsxs)(rt, {
                      children: [
                        (0, e.jsx)(on, {
                          id: t,
                          bSelfPurchaseOption:
                            !!r.self_purchase_option?.packageid,
                        }),
                        (0, e.jsx)(ha, { id: t }),
                        (0, e.jsx)(Vn, { option: x }),
                        (0, e.jsx)(ma, { id: t }),
                      ],
                    }),
                  ],
                }),
                m &&
                  s.data.is_edition &&
                  (0, e.jsx)(Ji.y.Root, {
                    onClose: f,
                    children: (0, e.jsx)(el, { closeModal: f }),
                  }),
              ],
            })
          );
        }
        var sl = a(95036),
          ga = a.n(sl);
        const al = new Gt.wd("PurchaseOptions");
        function ol(n) {
          const { id: t, option: s } = n,
            { data: o } = (0, C.J$)(t),
            { data: r } = (0, C.lv)(t),
            { data: i } = (0, Qt.$Y)(),
            l = Kn(s.data),
            u = (0, xt.n)(o),
            d = c.useCallback(() => {
              u && (window.location.href = u);
            }, [u]);
          if (!o || !i) return console.warn("Not ready", t, o, r, i), null;
          const p = o.included_appids?.length || 0,
            m = o.included_appids?.filter((v) => !i.has(v)) || [];
          let h = m.length,
            x =
              p != m.length
                ? "#AppPage_BuyThisBundle_Partial"
                : "#AppPage_BuyThisBundle";
          return (
            m.length == 0 &&
              ((x = "#AppPage_CollectionComplete"),
              (h = o.included_appids?.length || 0)),
            al.Debug(t, o.best_purchase_option, o),
            (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(kn, { id: t }),
                (0, e.jsxs)(at, {
                  option: s,
                  onActivate: l,
                  onOKActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: d,
                  onSecondaryActionDescription: g.Localize(
                    "#AppPage_PurchaseOption_BundleInfo",
                  ),
                  children: [
                    (0, e.jsx)(ot, {
                      id: t,
                      children: (0, e.jsxs)(S.EY, {
                        size: "3",
                        color: "blue-8",
                        children: [
                          " ",
                          g.Localize("#AppPage_PurchaseOption_Bundle"),
                        ],
                      }),
                    }),
                    (0, e.jsxs)(rt, {
                      children: [
                        (0, e.jsx)(on, { id: t, bSelfPurchaseOption: !0 }),
                        (0, e.jsxs)(Q.s, {
                          direction: "column",
                          flexGrow: "1",
                          flexShrink: "1",
                          overflow: "hidden",
                          gap: "1",
                          children: [
                            (0, e.jsx)(Vn, { option: o.best_purchase_option }),
                            (0, e.jsxs)(Q.s, {
                              direction: "column",
                              flexGrow: "1",
                              overflow: "hidden",
                              children: [
                                (0, e.jsx)(S.EY, {
                                  size: "2",
                                  children: g.LocalizePlural(
                                    x,
                                    h,
                                    o.best_purchase_option?.discount_pct ||
                                      o.best_purchase_option
                                        ?.bundle_discount_pct ||
                                      0,
                                  ),
                                }),
                                (0, e.jsx)(il, { apps: m }),
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
        function Pu(n) {
          const { rgAppids: t } = n;
          return t.length == 0
            ? null
            : jsx("div", {
                className: styles.AppImages,
                children: t?.map((s) => jsx(rl, { appid: s }, s)),
              });
        }
        function rl(n) {
          const { appid: t } = n,
            { data: s } = useStoreItemDefaultInfo({ appid: t }),
            { data: o } = useStoreItemAssets({ appid: t });
          if (!s || !o) return console.warn("Not ready", t), null;
          const r = o && StoreAssetURL(o, "small_capsule");
          return jsx(Fragment, { children: jsx("img", { src: r, alt: "" }) });
        }
        function il(n) {
          const { apps: t } = n,
            s = 6,
            [o, r] = c.useState(Math.min(t.length, s)),
            i = c.useRef(null),
            l = (0, ee.wY)((d) => {
              if (i.current) {
                const p = d.contentRect,
                  m = i.current?.getBoundingClientRect();
                let h = p.height,
                  f = 0;
                for (let x of d.target.children) {
                  if (x.tagName != "LI") continue;
                  const v = x.getBoundingClientRect();
                  if (
                    (f != t.length - 1 && v.height < h - m.height) ||
                    (f == t.length - 1 && v.height < h)
                  )
                    f++, (h -= v.height);
                  else break;
                }
                o != f && r(f),
                  (i.current.style.opacity = f == t.length ? "0" : "1");
              }
            });
          if (t.length == 0 || o == 0) return null;
          const u = t.length - o;
          return (0, e.jsxs)("ul", {
            className: ga().AppList,
            ref: l,
            children: [
              t.slice(0, o).map((d) => (0, e.jsx)(ll, { appid: d }, d)),
              (0, e.jsx)(S.EY, {
                ref: i,
                size: "2",
                children: g.Localize("#AppPage_AdditionalItems", u),
              }),
            ],
          });
        }
        function ll(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t });
          return s
            ? (0, e.jsx)("li", {
                className: ga().BundleApp,
                children: (0, e.jsx)(S.EY, {
                  size: "2",
                  lineClamp: 2,
                  children: s.name,
                }),
              })
            : null;
        }
        var It = a(86336),
          Zn = a(24809),
          cl = a(23413),
          dl = a.n(cl);
        function fa(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t });
          return (0, e.jsx)(xt.p, {
            storeItem: s,
            children: (0, e.jsx)(It.W, { size: "2", children: s?.name }),
          });
        }
        function ul(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t });
          return s
            ? (0, e.jsx)("li", { children: (0, e.jsx)(fa, { appid: t }) })
            : null;
        }
        function xa(n) {
          const {
            appid: t,
            strLocTagTitle: s,
            strLocTagBody: o,
            rgAppidParent: r,
            color: i,
          } = n;
          return (0, e.jsx)(Zn.k, {
            children: (0, e.jsxs)(Q.s, {
              background: i,
              direction: "column",
              padding: "3",
              children: [
                (0, e.jsx)(Mt.D, { size: "5", children: g.Localize(s) }),
                r.length == 1 &&
                  (0, e.jsx)(S.EY, {
                    children: g.LocalizeReact(
                      o,
                      (0, e.jsx)(fa, { appid: r[0] }),
                    ),
                  }),
                r.length > 1 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(S.EY, {
                        children: g.Localize("#AppPage_DLCWarning_OneOf"),
                      }),
                      (0, e.jsx)("ul", {
                        className: dl().AppList,
                        children: r.map((l) => (0, e.jsx)(ul, { appid: l }, l)),
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function pl(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t });
          return !s ||
            s.type != le.uE.Ov ||
            !s.related_items?.parent_appid ||
            s.related_items.parent_appid == Bt.sc
            ? null
            : (0, e.jsx)(xa, {
                appid: t,
                strLocTagTitle: "#AppPage_DLCWarning_Title_Soundtrack",
                strLocTagBody: "#AppPage_DLCWarning_Soundtrack",
                rgAppidParent: [s.related_items.parent_appid],
                color: "crimson-7",
              });
        }
        function ml(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t });
          return !s || s.type != le.uE._i || !s.related_items?.parent_appid
            ? null
            : (0, e.jsx)(hl, {
                appid: t,
                appidParent: s.related_items.parent_appid,
              });
        }
        function hl(n) {
          const { appid: t, appidParent: s } = n,
            { data: o } = (0, C.J$)({ appid: t }),
            { data: r } = (0, C.J$)({ appid: s });
          if (!o || !r || o.type != le.uE._i) return null;
          const l =
              r && r.type == le.uE.Sv
                ? "#AppPage_DLCWarning_Software"
                : "#AppPage_DLCWarning",
            u = o.related_items?.dlc_parent_appids?.length
              ? o.related_items?.dlc_parent_appids
              : [s];
          return (0, e.jsx)(xa, {
            appid: t,
            strLocTagTitle: "#AppPage_DLCWarning_Title",
            strLocTagBody: l,
            rgAppidParent: u,
            color: "purple-7",
          });
        }
        function gl(n) {
          const { appid: t } = n;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(pl, { appid: t }),
              (0, e.jsx)(ml, { appid: t }),
            ],
          });
        }
        var fl = a(3348),
          Jn = a(47875),
          xl = a(25792),
          vl = a(90114),
          yl = a(56680),
          Cl = a.n(yl);
        const $n = (0, xl.Nr)(function (t) {
          const {
              appid: s,
              bAllowRemove: o,
              children: r,
              color: i,
              width: l,
            } = t,
            u = (0, Ze.LH)(),
            { data: d } = Ht(s),
            p = Ts(s),
            [m, h, f] = (0, ee.uD)();
          (0, c.use)(G.Z.Ready());
          const x = !!u;
          if (x && !d) return null;
          const v = x && !!d?.wishlist;
          if (v && !o) return null;
          const A = () => {
              p.mutateAsync({ wishlist: !v, old_interest: d });
            },
            P = v ? "#RemoveFromWishlist_ttip" : "#AddToWishlist_ttip",
            R = v ? "#Wishlisted" : "#AddToYourWishlist";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ft.Gq, {
                toolTipContent: G.Z.Localize(P),
                children: (0, e.jsx)(Re.$, {
                  color: i,
                  width: l,
                  onClick: x ? A : h,
                  children: r ? r(v) : G.Z.Localize(R),
                }),
              }),
              !x && (0, e.jsx)(Al, { active: m, closeModal: f }),
            ],
          });
        });
        function Al(n) {
          const { active: t, closeModal: s } = n,
            { fnOpenInSteamClient: o } = (0, vl.useOpenWebInSteamClient)();
          return (
            (0, c.use)(g.Ready()),
            (0, e.jsx)(E.EN, {
              active: t,
              children: (0, e.jsxs)(E.o0, {
                strTitle: g.Localize("#OpenInDesktopAppBanner_NotSignedIn"),
                className: Cl().WishlistModalOverride,
                strDescription: g.Localize("#Wishlist_NotSignedIn"),
                closeModal: s,
                bAlertDialog: !0,
                children: [
                  (0, e.jsxs)(Q.s, {
                    direction: "row",
                    gap: "4",
                    paddingTop: "4",
                    paddingBottom: "4",
                    children: [
                      (0, e.jsx)(Re.$, {
                        onClick: o,
                        children: g.Localize(
                          "#OpenInDesktopAppBanner_OpenAppButton",
                        ),
                      }),
                      (0, e.jsx)(Re.$, {
                        color: "dull",
                        onClick: Jn.l,
                        children: G.Z.Localize("#Login_SignIn"),
                      }),
                    ],
                  }),
                  (0, e.jsx)(S.EY, {
                    children: (0, j.oW)(
                      G.Z.Localize("#GotSteam_NeedSteam"),
                      (0, e.jsx)(It.Y, {
                        href: `${Ss.TS.STORE_BASE_URL}about`,
                      }),
                    ),
                  }),
                ],
              }),
            })
          );
        }
        var jl = a(97393),
          xn = a.n(jl);
        function va(n) {
          const { id: t } = n,
            { data: s } = (0, C.qI)(t);
          if (!s) return null;
          const o = [];
          return (
            s.windows &&
              o.push(
                (0, e.jsx)(
                  "div",
                  {
                    className: xn().PlatformIcon,
                    children: (0, e.jsx)(b.eJJ, {}),
                  },
                  "windows",
                ),
              ),
            s.mac &&
              o.push(
                (0, e.jsx)(
                  "div",
                  {
                    className: xn().PlatformIcon,
                    children: (0, e.jsx)(b.kPc, {}),
                  },
                  "mac",
                ),
              ),
            s.steamos_linux &&
              o.push(
                (0, e.jsx)(
                  "div",
                  {
                    className: xn().PlatformIcon,
                    children: (0, e.jsx)(b.Qte, {}),
                  },
                  "steamos",
                ),
              ),
            o.length == 0
              ? null
              : (0, e.jsx)("div", {
                  className: xn().PlatformIcons,
                  children: o,
                })
          );
        }
        var Pl = a(77774),
          bt = a.n(Pl);
        function Sl(n, t) {
          if (t) return "#AppPage_ComingSoon_UnlocksIn_Software";
          switch (n) {
            case le.uE.Wz:
              return "#AppPage_ComingSoon_UnlocksIn_Video";
            case le.uE.gQ:
              return "#AppPage_ComingSoon_UnlocksIn_Series";
            case le.uE._i:
              return "#AppPage_ComingSoon_UnlocksIn_DLC";
            default:
              return "#AppPage_ComingSoon_UnlocksIn";
          }
        }
        function Il(n, t) {
          return t
            ? n.custom_release_date_message
              ? n.custom_release_date_message
              : n.steam_release_date
                ? (0, He.$z)(n.steam_release_date)
                : ""
            : "";
        }
        function bl(n, t, s) {
          return n ? n != "date_full" : t ? !0 : !s;
        }
        function Tl(n) {
          const {
              appid: t,
              bHasPrePurchaseSub: s,
              bGetsSoftwareTreatment: o,
              bShowReleaseDateIfComingSoon: r,
              strOffsitePrice: i,
              preload: l,
            } = n,
            { data: u } = (0, C.J$)({ appid: t }),
            { data: d } = (0, C.by)({ appid: t }),
            p = (0, fl.VM)(d);
          if (!u || !d) return null;
          const m = d.coming_soon_display,
            h = d.steam_release_date,
            f = !!h && h < (0, it._2)(),
            x = m == "text_comingsoon" || m == "text_tba",
            v = m != "text_comingsoon",
            A = u.type == le.uE._i,
            P = m ? p : Il(d, r),
            R = !!P,
            ae = s && !x && R,
            me = !f && !!h && !bl(m, d.custom_release_date_message, r);
          return (0, e.jsxs)(Zn.k, {
            children: [
              (0, e.jsxs)(Q.s, {
                direction: "row",
                className: bt().ComingSoon,
                children: [
                  (0, e.jsxs)(Q.s, {
                    direction: "column",
                    className: bt().Content,
                    children: [
                      f &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)(Mt.D, {
                              size: "5",
                              children: g.Localize("#AppPage_ComingSoon_Title"),
                            }),
                            (0, e.jsx)(S.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: g.Localize(
                                "#AppPage_ComingSoon_ReleaseDatePassed",
                              ),
                            }),
                          ],
                        }),
                      !f &&
                        ae &&
                        (0, e.jsx)(Mt.D, {
                          size: "5",
                          children: g.Localize(
                            "#AppPage_ComingSoon_ReleasesOn",
                            P,
                          ),
                        }),
                      !f &&
                        !ae &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)(S.EY, {
                              size: "2",
                              color: "greyneutral-11",
                              children: g.Localize(
                                A
                                  ? "#AppPage_ComingSoon_NotYetAvailable_DLC"
                                  : "#AppPage_ComingSoon_NotYetAvailable",
                              ),
                            }),
                            R &&
                              (0, e.jsxs)(Mt.D, {
                                size: "5",
                                children: [
                                  v &&
                                    `${g.Localize("#AppPage_ComingSoon_IntendedRelease")}: `,
                                  P,
                                ],
                              }),
                          ],
                        }),
                      me &&
                        (0, e.jsx)(S.EY, {
                          size: "2",
                          children: g.Localize(
                            Sl(u.type, o),
                            (0, He.Hq)(h - (0, it._2)(), {
                              eSuffix: He.a8.None,
                            }),
                          ),
                        }),
                      i &&
                        (0, e.jsx)(S.EY, {
                          size: "3",
                          weight: "heavy",
                          className: bt().OffsitePrice,
                          children: i,
                        }),
                    ],
                  }),
                  !s && (0, e.jsx)(El, { appid: t }),
                ],
              }),
              l && (0, e.jsx)(Ll, { appid: t, preload: l }),
            ],
          });
        }
        function El(n) {
          const { appid: t } = n,
            { data: s } = Ht(t);
          if (!s) return null;
          const o = s.wishlist;
          return (0, e.jsxs)(Q.s, {
            direction: "column",
            className: bt().Reminder,
            children: [
              (0, e.jsxs)(Q.s, {
                direction: "column",
                className: bt().Note,
                children: [
                  o &&
                    (0, e.jsx)(S.EY, {
                      size: "2",
                      children: g.Localize(
                        "#AppPage_ComingSoon_WishlistReminder_On",
                      ),
                    }),
                  !o &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(S.EY, {
                          size: "2",
                          children: g.Localize(
                            "#AppPage_ComingSoon_WishlistPrompt",
                          ),
                        }),
                        (0, e.jsx)(S.EY, {
                          size: "2",
                          children: g.Localize(
                            "#AppPage_ComingSoon_WishlistReminder",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              o &&
                (0, e.jsx)(It.Y, {
                  href: `${W.TS.STORE_BASE_URL}wishlist/`,
                  children: g.Localize("#AppPage_ComingSoon_ViewWishlist"),
                }),
              !o && (0, e.jsx)($n, { appid: t, color: "storegreen" }),
            ],
          });
        }
        function Ll(n) {
          const { appid: t, preload: s } = n,
            { subidFreeOnDemand: o, bOwnedPermanent: r } = s,
            { data: i } = (0, C.J$)({ appid: t }),
            l = (0, Ze.LH)(),
            u = i?.free_weekend?.appid ?? t,
            d = mn(u, i?.name ?? "");
          if (!i) return null;
          const p = !!l && !!o && !r;
          return (0, e.jsxs)(Q.s, {
            direction: "column",
            className: bt().Preload,
            children: [
              (0, e.jsx)(va, { id: { appid: t } }),
              (0, e.jsx)(Mt.D, {
                size: "5",
                children: g.Localize(
                  "#AppPage_ComingSoon_PreloadTitle",
                  i.name,
                ),
              }),
              (0, e.jsxs)(Q.s, {
                direction: "row",
                className: bt().PreloadActions,
                children: [
                  (0, e.jsx)(Re.$, {
                    onClick: d,
                    children: g.Localize("#AppPage_ComingSoon_PreloadButton"),
                  }),
                  p && (0, e.jsx)(Dl, { subid: o }),
                ],
              }),
            ],
          });
        }
        function Dl(n) {
          const t = hn({ packageid: n.subid });
          return (0, e.jsx)(Re.$, {
            color: "greyneutral",
            onClick: t,
            children: g.Localize("#AppPage_ComingSoon_AddToLibrary"),
          });
        }
        const Ve = new Gt.wd("PurchaseOptions"),
          ya = !1;
        function Rl(n) {
          const {
              appid: t,
              rgOwnedApps: s,
              rgOwnedPackages: o,
              playtestStatus: r,
              rgFreePackagesAvailable: i,
              strAccountTypeDescription: l,
              comingSoon: u,
            } = n,
            d = (0, Qt._7)(!0),
            p = ea(),
            m = (0, Xs.QW)(),
            [h, f] = c.useState(!1);
          return (
            c.useEffect(() => {
              Ve.Debug("Initializing PurchaseOptions"),
                Ve.Debug("rgOwnedApps", s),
                Ve.Debug("rgActiveLicenses", o),
                Ve.Debug("playtestStatus", r),
                Ve.Debug("rgFreePackagesAvailable", i),
                Ve.Debug("strAccountTypeDescription", l),
                d(s),
                p(o),
                ya && r && m(r.appid, r),
                f(!0);
            }, [t, o, s, r, d, p, m, i, l]),
            c.use(g.Ready()),
            c.use(G.Z.Ready()),
            h
              ? (0, e.jsx)(c.Suspense, {
                  children: (0, e.jsx)(Ol, {
                    appid: t,
                    rgPackagesAvailableForFree: i,
                    strAccountTypeDescription: l,
                    comingSoon: u,
                  }),
                })
              : null
          );
        }
        function Nl(n, t, s) {
          const { data: o } = (0, C.J$)({ appid: n }),
            { data: r } = (0, C.is)({ appid: n }),
            { data: i } = (0, Qt.$Y)(),
            l = ta(n),
            u = r?.purchase_options;
          return (
            Ve.Debug(u),
            c.useMemo(() => {
              if (!o || !u || !i) return null;
              const p = o.is_free && !o.is_free_temporarily,
                m = (0, it._2)(),
                h =
                  o.free_weekend &&
                  (o.free_weekend.start_time || 0) <= m &&
                  (o.free_weekend.end_time || 0) > m,
                f = new Set(t),
                x = [];
              if (!p)
                if (i.has(n)) x.push({ type: "play" });
                else {
                  const Z = (r.purchase_options || [])
                    .map((J) => J.free_with_master_sub_appid)
                    .filter((J) => !!J);
                  Ve.Debug(Z);
                  for (const J of Z)
                    if (J && i.has(J)) {
                      x.push({ type: "play", appidMasterSub: J });
                      break;
                    }
                }
              if (ya) {
                const Z = o.related_items?.playtests || [];
                if (Z.length > 0)
                  for (const J of Z)
                    J &&
                      x.push({
                        type: "playtest",
                        appidPlaytest: J.appid,
                        bIsOpen: !!J.is_open,
                      });
              }
              const v = new Set(),
                A = new Set(
                  (o.related_items?.standalone_demos || []).map((Z) => Z.appid),
                );
              for (let Z of o.related_items?.demos?.filter(
                (J) => J.show_above_purchase,
              ) || [])
                v.has(Z.appid) ||
                  (x.push({
                    type: "demo",
                    appid: Z.appid,
                    label: Z.label,
                    bStandalone: A.has(Z.appid),
                  }),
                  v.add(Z.appid));
              (p || h) && x.push({ type: "free" });
              const P = new Map();
              for (let Z of r.package_groups || [])
                P.set(Z.name, { id: Z.name, package_group: Z, items: [] });
              let R = !!o.related_items?.related_f2p;
              const ae = new Set(
                u.map((Z) => Z.free_to_keep_base_package).filter((Z) => !!Z),
              );
              let me;
              for (let Z of u)
                if (
                  !ae.has(Z.packageid) &&
                  !(Z.packageid && l.has(Z.packageid))
                ) {
                  if (R && !Z.is_edition && o.related_items) {
                    const J = o.related_items.related_f2p;
                    x.push({
                      type: "related",
                      appid: J.appid,
                      title: J.header_text,
                      description: J.description_text,
                    }),
                      (R = !1);
                  }
                  Z.package_group !== me?.id &&
                    (Z.package_group
                      ? ((me = P.get(Z.package_group)),
                        me?.package_group.display_type == le.aq.V &&
                          x.push({ type: "dropdown", data: me }))
                      : (me = void 0)),
                    me && me?.package_group.display_type == le.aq.V
                      ? me.items.push(Z)
                      : x.push({
                          type: "item",
                          data: Z,
                          bAvailableForFree:
                            !!Z.packageid && f.has(Z.packageid),
                        });
                }
              return Ve.Debug(P), x;
            }, [n, o, r, u, i, t, l])
          );
        }
        function Ol(n) {
          const {
              appid: t,
              rgPackagesAvailableForFree: s,
              strAccountTypeDescription: o,
              comingSoon: r,
            } = n,
            { data: i } = (0, C.J$)({ appid: t }),
            l = Nl(t, s, o),
            u = c.useRef(null),
            d = c.useCallback((p) => {
              p.data?.method == "FocusPurchaseOptions" &&
                (u.current?.NavTree().Activate(),
                u.current?.TakeFocus(Rn.pR.OK));
            }, []);
          return (
            c.useEffect(
              () => (
                window.addEventListener("message", d),
                () => window.removeEventListener("message", d)
              ),
              [d],
            ),
            !i || !l
              ? (Ve.Warning("Not ready", t), null)
              : (Ve.Debug(i),
                Ve.Debug(l),
                (0, e.jsx)(st.Provider, {
                  value: { appid: t, nOptions: l.length },
                  children: (0, e.jsx)(vi, {
                    children: (0, e.jsxs)(I.Z, {
                      className: Xe().PurchaseOptionDisplay,
                      navEntryPreferPosition: Y.iU.PREFERRED_CHILD,
                      navRef: u,
                      children: [
                        r && (0, e.jsx)(Tl, { appid: t, ...r }),
                        (0, e.jsx)(gl, { appid: t }),
                        l.length > 0 &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)(Zn.k, {
                                children: (0, e.jsx)(S.EY, {
                                  size: "3",
                                  contrast: "title",
                                  weight: "heavy",
                                  children: g.Localize(
                                    "#AppPage_PurchaseOptions_Title",
                                  ),
                                }),
                              }),
                              l.length > 2 && (0, e.jsx)(Bl, { options: l }),
                              l.length <= 2 &&
                                (0, e.jsxs)(I.Z, {
                                  className: (0, D.A)(
                                    Xe().PurchaseOptionCarouselWrapper,
                                    l.length <= 2 && Xe().NoCarousel,
                                    l.length == 1 && Xe().Single,
                                  ),
                                  preferredFocus: !0,
                                  children: [
                                    l.length <= 2 &&
                                      (0, e.jsx)(Xn, { option: l[0] }),
                                    l.length == 2 &&
                                      (0, e.jsx)(Xn, { option: l[1] }),
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
        function Xn(n) {
          const { option: t } = n;
          let s = null;
          switch (t.type) {
            case "item":
              t.data.packageid
                ? (s = (0, e.jsx)(nl, { id: Gn(t.data), option: t }))
                : (s = (0, e.jsx)(ol, { id: Gn(t.data), option: t }));
              break;
            case "dropdown":
              s = (0, e.jsx)(_i, { option: t });
              break;
            case "demo":
              s = (0, e.jsx)(bi, { option: t });
              break;
            case "free":
              s = (0, e.jsx)(Ti, { option: t });
              break;
            case "play":
              s = (0, e.jsx)(Ui, {
                option: t,
                appidMasterSub: t.appidMasterSub,
              });
              break;
            case "playtest":
              s = (0, e.jsx)(zi, {
                option: t,
                appidPlaytest: t.appidPlaytest,
                bIsOpen: t.bIsOpen,
              });
              break;
            case "related":
              s = (0, e.jsx)(Ki, { option: t });
              break;
            default:
          }
          return s
            ? (0, e.jsx)("div", {
                className: Xe().PurchaseOptionWrapper,
                children: s,
              })
            : null;
        }
        function Bl(n) {
          const { options: t } = n,
            s = "purchase_options",
            [o, r] = (0, $s.Eh)(s),
            i = 0.91,
            l = 240,
            u = parseInt(Xe().CarouselPaddingTop),
            d = parseInt(Xe().CarouselPaddingBottom),
            p = c.useCallback(
              (f, x, v, A) => {
                const P = t[f];
                return (0, e.jsx)("div", {
                  style: { width: x, height: v },
                  children: (0, e.jsx)(Xn, { option: P }),
                });
              },
              [t],
            ),
            m = c.useCallback(() => l, [l]),
            h = c.useCallback(
              (f) => {
                const x = t[f];
                switch (x.type) {
                  case "item":
                    return li(x.data);
                  case "dropdown":
                    return "dropdown_package_group_" + x.data.id;
                  case "demo":
                    return "demo_" + x.appid;
                  case "free":
                    return "free";
                  case "playtest":
                    return "playtest_" + x.appidPlaytest;
                  case "play":
                    return "play_" + x.appidMasterSub;
                  case "related":
                    return "related_" + x.appid;
                  default:
                    return (
                      (0, ln.wT)(!1, "Unknown purchase option type", x.type),
                      "unknown"
                    );
                }
              },
              [t],
            );
          return t.length == 0
            ? null
            : (0, e.jsx)(I.Z, {
                className: (0, D.A)(
                  Xe().PurchaseOptionCarouselWrapper,
                  o != 0 && Xe().NotLeft,
                ),
                preferredFocus: !0,
                children: (0, e.jsx)($s.jy, {
                  name: s,
                  "aria-label": g.Localize("#AppPage_PurchaseOptions_Title"),
                  className: (0, D.A)(
                    Xe().PurchaseOptionsCarousel,
                    "PurchaseOptions",
                  ),
                  focusedColumn: o,
                  setFocusedColumn: r,
                  nNumItems: t.length,
                  nHeight: l / i + u + d,
                  nItemHeight: l / i,
                  nItemMarginX: 10,
                  fnGetColumnWidth: m,
                  fnGetId: h,
                  fnItemRenderer: p,
                  scrollToAlignment: "center",
                }),
              });
        }
        var Ca = a(91405),
          vn = a(9843),
          lt = a(78365),
          Tt = a(24642);
        const Ml = 0,
          Fl = 1,
          wl = 2,
          _l = 3,
          Wl = 4,
          Ul = 5;
        var qn = a(43135),
          Aa = a(95242),
          ja = a(95994),
          zl = a(26666),
          mt = a.n(zl);
        const Gl = 6,
          Kl = 5,
          Hl = 135;
        function Vl(n) {
          const { appid: t, rgOptions: s } = n;
          return (0, e.jsx)(e.Fragment, {
            children: s.map((o) =>
              (0, e.jsx)(kl, { appid: t, option: o }, o.packageid),
            ),
          });
        }
        function kl(n) {
          const { appid: t, option: s } = n,
            o = s.packageid,
            { data: r } = (0, C.J$)({ appid: t }),
            { data: i } = (0, C.J$)({ packageid: o }),
            { data: l } = Ot(),
            { data: u } = (0, vn.UI)(),
            { mutate: d } = (0, Ca.A)(o, void 0),
            p = c.useCallback(() => d(void 0), [d]),
            m = c.useMemo(() => {
              const A = new Map();
              for (const P of r?.included_items?.included_apps || [])
                P.id && A.set(P.id, P);
              return (i?.included_appids || [])
                .map((P) => A.get(P))
                .filter((P) => !!P);
            }, [r, i]);
          if (!i) return null;
          const h = !!l?.has(o),
            f = (0, vn.lb)(u, o, void 0),
            x = !!i.purchase_description_bbcode,
            v = m.slice(0, Gl);
          return (0, e.jsxs)(ja.x, {
            marginBottom: "4",
            columns: "1fr",
            rows: "auto var( --pack-action-overhang )",
            className: mt().Pack,
            children: [
              (0, e.jsxs)(Ie.az, {
                position: "relative",
                gridRow: "1",
                gridColumn: "1",
                padding: "4",
                paddingTop: "2",
                paddingBottom: "5",
                radius: "md",
                className: mt().PackBody,
                children: [
                  h &&
                    (0, e.jsx)(Q.s, {
                      align: "center",
                      gap: "1",
                      position: "absolute",
                      inset: "-8px auto auto 6px",
                      paddingX: "1",
                      className: mt().PackInLibrary,
                      children: (0, qn.eI)("in_library"),
                    }),
                  (0, e.jsxs)(Q.s, {
                    justify: "between",
                    align: "center",
                    children: [
                      (0, e.jsx)(S.EY, {
                        size: "5",
                        children: g.Localize(
                          "#AppPage_Dropdown_DefaultTitle",
                          s.purchase_option_name || i.name || "",
                        ),
                      }),
                      (0, e.jsx)(Ie.az, {
                        marginBottom: "1",
                        children: (0, e.jsx)(va, { id: { packageid: o } }),
                      }),
                    ],
                  }),
                  !x && m.length > 1 && (0, e.jsx)(Yl, { rgApps: m }),
                  v.length > 1 &&
                    (0, e.jsx)(Ie.az, {
                      position: "relative",
                      padding: "2",
                      className: mt().PackCapsulesCtn,
                      children: (0, e.jsx)(Ie.az, {
                        className: (0, D.A)(
                          mt().PackCapsules,
                          v.length >= Kl && mt().PackCapsulesCollapsed,
                        ),
                        children: v.map((A, P) =>
                          (0, e.jsx)(Ql, { appid: A.id, zIndex: 10 - P }, A.id),
                        ),
                      }),
                    }),
                ],
              }),
              (0, e.jsxs)(Q.s, {
                marginX: "4",
                alignSelf: "end",
                justify: "end",
                gap: "1",
                gridColumn: "1",
                gridRow: "1 / -1",
                navProps: { navEntryPreferPosition: Y.iU.PREFERRED_CHILD },
                children: [
                  (0, e.jsx)(Pa, {
                    children: (0, e.jsx)(Re.v, {
                      focusable: !0,
                      href: (0, Jn._)(i),
                      children: g.Localize("#AppPage_PurchaseOption_MoreInfo"),
                    }),
                  }),
                  (0, e.jsxs)(Pa, {
                    children: [
                      (0, e.jsx)(Aa.z, { purchaseOption: s }),
                      f
                        ? (0, e.jsx)(Re.v, {
                            navProps: { preferredFocus: !0 },
                            color: "storegreen",
                            href: `${de.TS.STORE_BASE_URL}cart/`,
                            children: fe.d.Localize("#AddToCartButton_InCart"),
                          })
                        : (0, e.jsx)(Re.$, {
                            navProps: { preferredFocus: !0 },
                            color: "storegreen",
                            onClick: p,
                            children: g.Localize(
                              "#AppPage_PurchaseOption_AddToCart",
                            ),
                          }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Pa(n) {
          const { children: t } = n;
          return (0, e.jsx)(Q.s, {
            align: "center",
            gap: "1",
            zIndex: "1",
            className: mt().PackActionGroup,
            children: t,
          });
        }
        function Yl(n) {
          const { rgApps: t } = n,
            [s, o] = c.useState(!1),
            r = c.useCallback(() => o((d) => !d), []),
            i = c.useMemo(() => {
              let d = 0,
                p = 0;
              for (const m of t) {
                const h = (m.name || "").length;
                if (p > 0 && d + h >= Hl) break;
                (d += h), p++;
              }
              return p;
            }, [t]),
            l = i < t.length,
            u = l && !s ? t.slice(0, i) : t;
          return (0, e.jsx)(I.Z, {
            children: (0, e.jsxs)(S.EY, {
              size: "2",
              marginY: "2",
              children: [
                (0, e.jsx)("b", {
                  children: g.LocalizePlural(
                    "#AppPage_DLCPack_IncludesItems",
                    t.length,
                    (0, Tt.D)(t.length),
                  ),
                }),
                " ",
                u.map((d, p) =>
                  (0, e.jsxs)(
                    c.Fragment,
                    {
                      children: [
                        p > 0 && ", ",
                        (0, e.jsx)(It.Y, {
                          href: (0, Jn._)(d),
                          whiteSpace: "nowrap",
                          children: d.name,
                        }),
                      ],
                    },
                    d.id,
                  ),
                ),
                l && (s ? " " : "\u2026 "),
                l &&
                  (0, e.jsx)(It.W, {
                    onClick: r,
                    children: g.Localize(
                      s
                        ? "#AppPage_DLCPack_ShowLess"
                        : "#AppPage_DLCPack_ShowMore",
                    ),
                  }),
              ],
            }),
          });
        }
        function Ql(n) {
          const { appid: t, zIndex: s } = n,
            { data: o } = (0, C.J$)({ appid: t }),
            { data: r } = (0, C.lv)({ appid: t }),
            i =
              r?.asset_url_format && r.small_capsule
                ? Qn(r.asset_url_format, r.small_capsule)
                : void 0;
          return i
            ? (0, e.jsx)(Ie.az, {
                position: "relative",
                display: "inline-block",
                height: "45px",
                width: "120px",
                overflow: "hidden",
                className: mt().PackCapsule,
                style: { zIndex: s },
                children: (0, e.jsx)(Yn, {
                  height: "100%",
                  width: "100%",
                  src: i,
                  alt: o?.name || "",
                }),
              })
            : null;
        }
        var Zl = a(16071),
          We = a.n(Zl);
        const Jl = c.lazy(() =>
            Promise.all([a.e(68388), a.e(56925), a.e(29424), a.e(9246)]).then(
              a.bind(a, 95936),
            ),
          ),
          yn = 5;
        function $l(n) {
          switch (n) {
            case Fl:
              return "#AppPage_DLC_Highlight_New";
            case wl:
              return "#AppPage_DLC_Highlight_ComingSoon";
            case _l:
              return "#AppPage_DLC_Highlight_PlayerFavorite";
            case Wl:
              return "#AppPage_DLC_Highlight_Recommended";
            case Ul:
              return "#AppPage_DLC_Highlight_RecommendedForNewPlayers";
            default:
              return null;
          }
        }
        function Xl(n) {
          switch (n) {
            case "in_cart":
              return We().FlagInCart;
            case "in_library":
              return We().FlagInLibrary;
            case "on_wishlist":
              return We().FlagOnWishlist;
            case "ignored":
            case "excluded_by_preferences":
              return We().FlagIgnored;
          }
        }
        function ql(n) {
          const {
              appid: t,
              rgRows: s,
              nDlcBrowseCount: o,
              nNumDLCExcludedByPreferences: r,
              addAllToCart: i,
            } = n,
            [l, u] = c.useState(!1),
            d = c.useCallback(() => u(!0), []),
            { data: p } = (0, C.J$)({ appid: t }),
            m = mi(t);
          if (!p || (s.length == 0 && r == 0 && !m?.length)) return null;
          c.use(g.Ready()), c.use(fe.d.Ready());
          const h = p.type == le.uE.Sv,
            f = !l && s.length > yn,
            x = f ? s.slice(0, yn) : s;
          return (0, e.jsx)(c.Suspense, {
            children: (0, e.jsxs)(Q.s, {
              direction: "column",
              gap: "4",
              marginY: "5",
              children: [
                (0, e.jsxs)(lt.YZ, {
                  "flow-children": "column",
                  children: [
                    (0, e.jsxs)(Q.s, {
                      direction: "row",
                      justify: "between",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, e.jsx)(S.EY, {
                          size: "3",
                          contrast: "title",
                          weight: "heavy",
                          children: g.Localize(
                            h
                              ? "#AppPage_DLC_Header_Software"
                              : "#AppPage_DLC_Header",
                          ),
                        }),
                        o > 0 &&
                          (0, e.jsx)(It.Y, {
                            size: "2",
                            href: `${de.TS.STORE_BASE_URL}dlc/${t}/`,
                            children: g.Localize(
                              "#AppPage_DLC_BrowseAll",
                              (0, Tt.D)(o),
                            ),
                          }),
                      ],
                    }),
                    r > 0 &&
                      (0, e.jsx)(Ie.az, {
                        padding: "1",
                        paddingStart: "0",
                        marginBottom: "1",
                        children: (0, e.jsx)(S.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          children: (0, ge.xh)(
                            g.LocalizePlural(
                              "#AppPage_DLC_ExcludedByPreferences",
                              r,
                            ),
                            (0, e.jsx)(It.Y, {
                              href: `${de.TS.STORE_BASE_URL}account/preferences/`,
                            }),
                          ),
                        }),
                      }),
                    x.map((v, A) =>
                      (0, e.jsx)(ec, { row: v, bRevealed: A >= yn }, v.appid),
                    ),
                    f &&
                      (0, e.jsxs)(Q.s, {
                        direction: "row",
                        justify: "between",
                        align: "center",
                        marginTop: "1",
                        className: We().Footer,
                        children: [
                          (0, e.jsx)(Re.$, {
                            onClick: d,
                            children: g.Localize("#AppPage_DLC_SeeAll"),
                          }),
                          (0, e.jsx)(S.EY, {
                            size: "2",
                            color: "greyneutral-11",
                            children: g.Localize(
                              "#AppPage_DLC_ShowingResults",
                              "1",
                              (0, Tt.D)(yn),
                              (0, Tt.D)(o),
                            ),
                          }),
                        ],
                      }),
                    !f &&
                      s.length < o &&
                      (0, e.jsx)(Ie.az, {
                        marginTop: "1",
                        children: (0, e.jsx)(S.EY, {
                          size: "2",
                          color: "greyneutral-11",
                          className: We().PartialList,
                          children: g.Localize(
                            "#AppPage_DLC_ShowingPartialList",
                            (0, Tt.D)(s.length),
                            (0, Tt.D)(o),
                          ),
                        }),
                      }),
                  ],
                }),
                !f && i && (0, e.jsx)(tc, { addAllToCart: i }),
                !!m?.length && (0, e.jsx)(Vl, { appid: t, rgOptions: m }),
              ],
            }),
          });
        }
        function ec(n) {
          const { bRevealed: t } = n,
            { appid: s, packageid: o, nHighlightReason: r } = n.row,
            { data: i } = (0, C.J$)({ appid: s }),
            { data: l } = (0, C.mr)(o ? { packageid: o } : void 0),
            u = r !== Ml,
            { data: d } = (0, C.lv)(u ? { appid: s } : void 0),
            p = (0, qn.qz)({ appid: s });
          if (!i) return null;
          const m = $l(r),
            h =
              d?.asset_url_format && d.small_capsule
                ? Qn(d.asset_url_format, d.small_capsule)
                : void 0;
          return (0, e.jsxs)(xt.p, {
            storeItem: i,
            className: (0, D.A)(
              We().Row,
              u && We().Highlight,
              t && We().Revealed,
            ),
            children: [
              u &&
                h &&
                (0, e.jsx)(Yn, {
                  maxHeight: "87px",
                  flexGrow: "0",
                  src: h,
                  alt: i.name,
                }),
              (0, e.jsxs)(Q.s, {
                direction: "column",
                align: "start",
                gap: "1",
                paddingEnd: "1",
                className: We().Name,
                children: [
                  p &&
                    (0, e.jsx)(S.EY, {
                      size: "1",
                      marginBottom: "1",
                      className: (0, D.A)(We().Pill, Xl(p)),
                      children: (0, qn.eI)(p),
                    }),
                  m &&
                    (0, e.jsx)(S.EY, {
                      size: "1",
                      className: (0, D.A)(We().Pill, We().HighlightReason),
                      children: g.Localize(m),
                    }),
                  (0, e.jsx)(S.EY, { size: "3", children: i.name }),
                ],
              }),
              (0, e.jsxs)(Ie.az, {
                flexShrink: "0",
                textAlign: "end",
                className: We().Price,
                children: [
                  i.is_free &&
                    (0, e.jsx)(S.EY, {
                      size: "4",
                      children: g.Localize("#AppPage_DLC_Free"),
                    }),
                  !i.is_free &&
                    l &&
                    (0, e.jsx)(Aa.z, { purchaseOption: l, size: "inline" }),
                  !i.is_free &&
                    !l &&
                    (0, e.jsx)(S.EY, {
                      size: "4",
                      children: g.Localize("#AppPage_DLC_NoPrice"),
                    }),
                ],
              }),
            ],
          });
        }
        function tc(n) {
          const { rgPackageIDs: t, strTotalPrice: s } = n.addAllToCart,
            [o, r] = c.useState(void 0),
            i = t.map((f) => ({ packageid: f })),
            { mutate: l, isPending: u } = (0, Ca.w)(i),
            { data: d } = (0, vn.UI)(),
            p = d !== void 0 && t.every((f) => (0, vn.lb)(d, f, void 0)),
            m = c.useCallback(() => r(void 0), []),
            h = c.useCallback(() => {
              l(void 0, { onSuccess: (f) => r(f) });
            }, [l]);
          return (0, e.jsxs)(Q.s, {
            direction: "row",
            justify: "between",
            align: "center",
            gap: "2",
            marginTop: "2",
            padding: "2",
            className: We().AddAllToCart,
            children: [
              o &&
                (0, e.jsx)(c.Suspense, {
                  children: (0, e.jsx)(Jl, { lineItemIDs: o, closeCart: m }),
                }),
              (0, e.jsx)(S.EY, { size: "3", weight: "heavy", children: s }),
              p
                ? (0, e.jsx)(Re.v, {
                    color: "storegreen",
                    href: `${de.TS.STORE_BASE_URL}cart/`,
                    children: fe.d.Localize("#AddToCartButton_InCart"),
                  })
                : (0, e.jsx)(Re.$, {
                    color: "storegreen",
                    disabled: u,
                    onClick: h,
                    children: g.Localize("#AppPage_DLC_BuyAll"),
                  }),
            ],
          });
        }
        var nc = a(96253),
          sc = a(48205),
          ke = a.n(sc),
          ac = a(21690);
        function oc(n) {
          const {
              appid: t,
              oTags: s,
              oCreatorLinks: o,
              reviewSummaryRecent: r,
              strIdForReviewSummary: i,
            } = n,
            l = new Map();
          for (const [d, p] of Object.entries(s)) l.set(d, p);
          const u = new Map();
          for (const [d, p] of Object.entries(o)) u.set(d, p);
          return (
            c.useLayoutEffect(() => {
              const d = document.querySelector("#summaryBarTop");
              d && (d.style.height = "unset");
            }, []),
            c.use(g.Ready()),
            (0, e.jsx)(c.Suspense, {
              children: (0, e.jsxs)(I.Z, {
                className: ke().SummaryBarTop,
                "flow-children": "grid",
                navEntryPreferPosition: Y.iU.MAINTAIN_X,
                resetNavOnEntry: !0,
                children: [
                  (0, e.jsx)(dc, {
                    appid: t,
                    recent: r,
                    strIdForReviewSummary: i,
                  }),
                  (0, e.jsx)(rc, { appid: t }),
                  (0, e.jsx)(cc, { appid: t, mapTags: l }),
                  (0, e.jsx)(uc, { appid: t, mapCreatorLinks: u }),
                ],
              }),
            })
          );
        }
        function Cn(n) {
          const { children: t } = n;
          return (0, e.jsx)("div", {
            className: ke().Title,
            children: (0, e.jsx)(S.EY, { contrast: "title", children: t }),
          });
        }
        function rc(n) {
          const { appid: t } = n,
            s = c.useMemo(
              () => (0, W.Tc)("hardwarecompatibility", "application_config"),
              [],
            ),
            {
              bSteamDeck: o,
              bSteamOS: r,
              bSteamMachine: i,
              bSteamFrame: l,
            } = (0, ac.Ec)(),
            [u, d] = c.useMemo(
              () =>
                i
                  ? [
                      ze.JR,
                      g.Localize("#AppPage_SummaryBar_SteamMachineCompat"),
                    ]
                  : l
                    ? [
                        ze.bY,
                        g.Localize("#AppPage_SummaryBar_SteamFrameCompat"),
                      ]
                    : r && !o
                      ? [ze.c9, g.Localize("#AppPage_SummaryBar_SteamOSCompat")]
                      : [
                          ze.ZJ,
                          g.Localize("#AppPage_SummaryBar_SteamDeckCompat"),
                        ],
              [o, r, i, l],
            );
          return s
            ? (0, e.jsxs)(I.Z, {
                className: (0, D.A)(
                  ke().SummaryBarSection,
                  ke().SteamDeckCompat,
                ),
                children: [
                  (0, e.jsx)(Cn, { children: d }),
                  (0, e.jsx)(Ms, {
                    className: ke().SteamDeckCompatContent,
                    appID: t,
                    results: s,
                    tab: u,
                  }),
                ],
              })
            : null;
        }
        function ic(n) {
          const t = n.Element?.getBoundingClientRect(),
            s = n.m_Parent?.Element?.getBoundingClientRect();
          return !t || !s ? !1 : t.bottom <= s.bottom;
        }
        function lc(n) {
          const { tag: t } = n,
            s = (0, Qe.aL)(
              de.TS.STORE_BASE_URL + `tags/${(0, nc.ut)(de.TS.LANGUAGE)}/${t}`,
            );
          return (0, e.jsx)(L.Ii, {
            className: ke().Tag,
            href: s,
            fnCanTakeFocus: ic,
            children: (0, e.jsx)(Ie.az, {
              background: "blue-5",
              paddingX: "1",
              paddingY: "0",
              children: (0, e.jsx)(S.EY, { color: "blue-8", children: t }),
            }),
          });
        }
        function cc(n) {
          const { appid: t, mapTags: s } = n;
          return (0, e.jsxs)(lt.YZ, {
            className: (0, D.A)(ke().SummaryBarSection, ke().UserTags),
            focusable: !0,
            children: [
              (0, e.jsx)(Cn, {
                children: g.Localize("#AppPage_SummaryBar_UserTags"),
              }),
              (0, e.jsx)(I.Z, {
                className: ke().Tags,
                children: Array.from(s.entries()).map(([o, r]) =>
                  (0, e.jsx)(lc, { tag: o }, o),
                ),
              }),
            ],
          });
        }
        function Sa(n) {
          const {
            label: t,
            reviewScoreDescription: s,
            percentage: o,
            count: r,
          } = n;
          return !t || !s || o == null || !r
            ? null
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(S.EY, {
                    contrast: "body",
                    children: g.Localize(t),
                  }),
                  " ",
                  (0, e.jsx)(S.EY, { color: "blue-8", children: s }),
                  " ",
                  (0, e.jsxs)(S.EY, {
                    contrast: "body",
                    children: [
                      "(",
                      g.Localize("#AppPage_ReviewStats", o, (0, Tt.D)(r)),
                      ")",
                    ],
                  }),
                ],
              });
        }
        function dc(n) {
          const { appid: t, recent: s, strIdForReviewSummary: o } = n,
            { data: r } = (0, C.ik)({ appid: t }),
            i = c.useCallback(() => {
              window.MoveFocusToId(o);
            }, [o]);
          return !r || !r.summary_filtered?.review_count
            ? null
            : (0, e.jsxs)(I.Z, {
                className: ke().SummaryBarSection,
                onActivate: i,
                children: [
                  (0, e.jsx)(Cn, {
                    children: g.Localize("#AppPage_SummaryBar_UserReviews"),
                  }),
                  (0, e.jsx)(Sa, {
                    label: "#AppPage_Reviews_AllTime",
                    reviewScoreDescription:
                      r.summary_filtered?.review_score_label,
                    percentage: r.summary_filtered.percent_positive,
                    count: r.summary_filtered.review_count,
                  }),
                  s &&
                    (0, e.jsx)(Sa, {
                      label: "#AppPage_Reviews_Recent",
                      reviewScoreDescription: s.description,
                      percentage: s.percentage,
                      count: s.count,
                    }),
                ],
              });
        }
        function uc(n) {
          const { appid: t, mapCreatorLinks: s } = n,
            { data: o } = (0, C.wl)({ appid: t }),
            { data: r } = (0, C.by)({ appid: t });
          return o
            ? (0, e.jsxs)(lt.YZ, {
                className: (0, D.A)(ke().SummaryBarSection, ke().GameInfo),
                children: [
                  (0, e.jsx)(Cn, {
                    children: g.Localize("#AppPage_SummaryBar_GameInfo"),
                  }),
                  (0, e.jsx)("table", {
                    children: (0, e.jsxs)("tbody", {
                      children: [
                        (0, e.jsx)(Ia, {
                          label: "#AppPage_SummaryBar_Developer",
                          strType: "developer",
                          rgCreators: o.developers,
                          mapCreatorLinks: s,
                        }),
                        (0, e.jsx)(Ia, {
                          label: "#AppPage_SummaryBar_Publisher",
                          strType: "publisher",
                          rgCreators: o.publishers,
                          mapCreatorLinks: s,
                        }),
                        r?.steam_release_date &&
                          (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("td", {
                                children: (0, e.jsx)(S.EY, {
                                  contrast: "body",
                                  children: g.Localize(
                                    "#AppPage_SummaryBar_ReleaseDate",
                                  ),
                                }),
                              }),
                              (0, e.jsx)("td", {
                                children: (0, e.jsx)(S.EY, {
                                  contrast: "body",
                                  children: (0, He._l)(r?.steam_release_date, {
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
        function pc(n) {
          const { creator: t, strType: s, mapCreatorLinks: o } = n,
            r = (0, Qe.aL)(o.get(t.name)),
            i = (0, Qe.aL)(de.TS.STORE_BASE_URL + `search/?${s}=${t.name}`),
            l = r || i;
          return (0, e.jsx)(L.Ii, {
            href: l,
            children: (0, e.jsx)(S.EY, {
              color: "blue-8",
              whiteSpace: "nowrap",
              children: t.name,
            }),
          });
        }
        function Ia(n) {
          const { label: t, strType: s, rgCreators: o, mapCreatorLinks: r } = n,
            i = 4;
          return !o || o.length == 0
            ? null
            : (0, e.jsxs)("tr", {
                children: [
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)(S.EY, {
                      contrast: "body",
                      children: g.Localize(t),
                    }),
                  }),
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)(I.Z, {
                      children: (0, e.jsxs)(S.EY, {
                        contrast: "body",
                        lineClamp: 3,
                        children: [
                          o
                            .slice(0, i)
                            .map((l, u) =>
                              (0, e.jsxs)(
                                c.Fragment,
                                {
                                  children: [
                                    u != 0 &&
                                      (0, e.jsx)("span", { children: ", " }),
                                    (0, e.jsx)(pc, {
                                      strType: s,
                                      creator: l,
                                      mapCreatorLinks: r,
                                    }),
                                  ],
                                },
                                l.creator_clan_account_id || l.name,
                              ),
                            ),
                          o.length > i &&
                            (0, e.jsx)("span", {
                              children: g.Localize(
                                "#AppPage_SummaryBar_AndMore",
                                o.length - 4,
                              ),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
        }
        function mc(n) {
          const t = (0, yt.jE)();
          return (
            c.useEffect(() => {
              const { rgPayloads: s, markReady: o } = n;
              for (let r of s || [])
                for (let i of r.rgStoreItems || [])
                  (0, C.vB)(t, i, r.dataRequestStoreItems);
              o();
            }, [t, n]),
            null
          );
        }
        var es = a(42555),
          hc = a(9246),
          ba = a.n(hc),
          gc = a(2259),
          fc = a(8611),
          Ft = a.n(fc);
        function ts(n) {
          const { children: t, className: s, wrapperComponent: o = I.Z } = n,
            [r, i] = c.useState(!1),
            [l, u] = c.useState(!1),
            d = c.useRef(null),
            p = c.useRef(!1),
            m = c.useCallback(
              (v) => {
                r || u(v.target.scrollHeight > v.target.clientHeight);
              },
              [r],
            ),
            h = (0, gc.wY)(m),
            f = l && !r,
            x = c.useCallback(() => {
              (p.current = r), i(!r);
            }, [r]);
          return (
            c.useLayoutEffect(() => {
              p.current &&
                !r &&
                d.current?.scrollIntoView({ block: "nearest" }),
                (p.current = !1);
            }, [r]),
            (0, e.jsx)("div", {
              className: Ft().FocusBar,
              children: (0, e.jsx)(o, {
                ref: d,
                className: (0, D.A)(Ft().AutoCollapsePanel, s),
                focusableIfEmpty: !0,
                noFocusRing: !0,
                onActivate: l ? x : void 0,
                children: (0, e.jsxs)(I.Z, {
                  focusable: l,
                  noFocusRing: !0,
                  children: [
                    (0, e.jsx)("div", {
                      ref: h,
                      className: (0, D.A)(
                        Ft().Contents,
                        f && Ft().Collapsed,
                        r && Ft().Expanded,
                      ),
                      children: t,
                    }),
                    l &&
                      (0, e.jsx)("div", {
                        className: Ft().ReadMore,
                        children: g.Localize(
                          r ? "#btn_read_less" : "#btn_read_more",
                        ),
                      }),
                  ],
                }),
              }),
            })
          );
        }
        function xc(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t }),
            { data: o } = (0, C.LM)({ appid: t });
          return (
            c.use(g.Ready()),
            !s || s.type == null || !o
              ? null
              : (0, e.jsxs)(ts, {
                  className: ba().AboutThisGame,
                  "flow-children": "column",
                  children: [
                    (0, e.jsx)("h2", {
                      className: ba().Header,
                      children: g.Localize(
                        g.GetAppTypeLocKey("#About_This", s.type),
                      ),
                    }),
                    (0, e.jsx)(es.n, { text: o }),
                  ],
                })
          );
        }
        var vc = a(14844),
          ns = a.n(vc);
        function yc(n) {
          const { appid: t } = n,
            { data: s } = (0, C._F)({ appid: t });
          c.use(g.Ready());
          const o = s?.section;
          return o?.length
            ? (0, e.jsx)("div", {
                className: ns().PageSections,
                children: o.map((r, i) => (0, e.jsx)(Cc, { section: r }, i)),
              })
            : null;
        }
        function Cc(n) {
          const { label: t, content_bbcode: s, banner: o } = n.section;
          return (0, e.jsxs)(ts, {
            className: ns().PageSection,
            "flow-children": "column",
            children: [
              t && (0, e.jsx)("h2", { className: ns().Header, children: t }),
              s && (0, e.jsx)(es.n, { text: s }),
            ],
          });
        }
        var Ac = a(45200),
          jc = a.n(Ac);
        function Pc(n) {
          const { appid: t } = n,
            { data: s } = (0, C._F)({ appid: t });
          return (
            c.use(g.Ready()),
            s?.legal_notice_bbcode
              ? (0, e.jsx)(ts, {
                  className: jc().LegalNotice,
                  wrapperComponent: lt.YZ,
                  children: (0, e.jsx)(es.n, {
                    text: s.legal_notice_bbcode,
                    bBypassLinkFilter: !0,
                  }),
                })
              : null
          );
        }
        var Sc = a(32093),
          Ta = a(62038),
          Ic = a(55367),
          Ce = a.n(Ic),
          Ea = a(83321),
          ss = a(7967),
          as = a(32994),
          bc = a(3471),
          xe = a.n(bc);
        function Zt(n) {
          return La(n)
            ? (0, j.we)("#Language_" + (0, U.LgB)(n.elanguage))
            : Da(n)
              ? (0, j.we)("#language_ext_" + (0, U.c6v)(n.eadditionallanguage))
              : (0, j.we)("#language_selection_none");
        }
        function Tc(n) {
          if (!n) return [];
          const t = [];
          for (let s = 0; s < n.length; s++)
            n[n.length - s - 1] == "1" && t.push(s);
          return t;
        }
        function Ec(n) {
          if (!n) return [];
          const t = [],
            s = BigInt(n);
          for (let o = U.Bhc; o < U.bP9; o++)
            (s >> BigInt(o)) & BigInt(1) && t.push(o);
          return t;
        }
        function La(n) {
          return n.elanguage != null && n.elanguage != -1;
        }
        function Da(n) {
          return n.eadditionallanguage != null && n.eadditionallanguage != -1;
        }
        function Lc(n, t) {
          let s;
          if (!n || !t?.length)
            return {
              rgSorted: [],
              nForceVisible: 0,
              firstPreferredLanguage: s,
            };
          const o = [],
            r = [
              n.preferences?.primary_language ?? U.Bhc,
              ...Ec(n.preferences?.secondary_languages),
            ].filter((p) => p != null),
            i = new Set();
          for (const p of r) {
            const m = t.findIndex((h) => h.elanguage == p);
            m != -1 &&
              (o.push({ ...t[m], preferred: !0 }),
              i.add(p),
              s || (s = { ...t[m], preferred: !0 }));
          }
          const l = Tc(n.preferences?.additional_languages),
            u = new Set();
          for (const p of l) {
            const m = t.findIndex((h) => h.eadditionallanguage == p);
            m != -1 && (o.push({ ...t[m], preferred: !0 }), u.add(p));
          }
          const d = o.length;
          for (const p of t)
            if (La(p)) {
              if (i.has(p.elanguage)) continue;
              o.push({ ...p, preferred: !1 }), i.add(p.elanguage);
            } else if (Da(p)) {
              if (u.has(p.elanguage)) continue;
              o.push({ ...p, preferred: !1 }), u.add(p.eadditionallanguage);
            }
          return { rgSorted: o, nForceVisible: d, firstPreferredLanguage: s };
        }
        function Dc(n) {
          const { appid: t, initialOpen: s } = n,
            [o, r] = (0, c.useState)(s ?? !1),
            { data: i } = (0, C.Zx)({ appid: t }),
            { data: l } = (0, C.J$)({ appid: t }),
            { data: u } = (0, as.lI)(),
            [d, p] = (0, c.useState)(!1),
            m = (0, Ea.LT)("md"),
            h = c.useId(),
            {
              rgSorted: f,
              nForceVisible: x,
              firstPreferredLanguage: v,
            } = c.useMemo(() => Lc(u, i ?? []), [u, i]);
          if (!f.length || !l || l.type == le.uE.Ov) return null;
          const A = l.type == le.uE.Wz || l.type == le.uE.gQ,
            P = m ? xe().CheckColumn : xe().IconColumn,
            R = m ? Nc : Oc;
          return (0, e.jsxs)(L.fF, {
            className: xe().Details,
            focusableIfEmpty: !0,
            open: o,
            onToggle: (ae) => r(ae.currentTarget.open),
            children: [
              (0, e.jsxs)(
                L.f_,
                {
                  className: xe().Summary,
                  children: [
                    (0, e.jsx)("div", {
                      className: xe().ImageContainer,
                      children: (0, e.jsx)(b.vCk, { className: xe().Image }),
                    }),
                    (0, e.jsxs)("div", {
                      className: xe().TextBox,
                      children: [
                        (0, e.jsx)(S.EY, {
                          color: "blue-8",
                          children: g.Localize(
                            "#languages_supported",
                            f.length,
                          ),
                        }),
                        !o && (0, e.jsx)(Rc, { language: v }),
                      ],
                    }),
                    o &&
                      (0, e.jsx)("div", {
                        className: xe().Open,
                        children: "-",
                      }),
                    !o &&
                      (0, e.jsx)("div", {
                        className: xe().Closed,
                        children: "+",
                      }),
                  ],
                },
                o ? "open" : "closed",
              ),
              (0, e.jsxs)(ss.Qg, {
                className: xe().LanguageGrid,
                focusable: o,
                children: [
                  !m &&
                    (0, e.jsxs)("div", {
                      className: xe().Legend,
                      children: [
                        (0, e.jsx)(S.EY, {
                          color: "greyneutral-11",
                          children: g.Localize("#language_header_subtitles"),
                        }),
                        (0, e.jsx)("div", {
                          className: xe().LegendIconContainer,
                          children: (0, e.jsx)(b._b5, {
                            className: xe().LegendIcon,
                          }),
                        }),
                        (0, e.jsx)(S.EY, {
                          color: "greyneutral-11",
                          children: g.Localize(
                            "#language_header_full_audio_short",
                          ),
                        }),
                        (0, e.jsx)("div", {
                          className: xe().LegendIconContainer,
                          children: (0, e.jsx)(b.fSs, {
                            className: xe().LegendIcon,
                          }),
                        }),
                      ],
                    }),
                  (0, e.jsxs)("table", {
                    className: xe().LanguageTable,
                    children: [
                      (0, e.jsxs)("colgroup", {
                        children: [
                          (0, e.jsx)("col", { className: xe().LanguageName }),
                          (0, e.jsx)("col", { className: P }),
                          (0, e.jsx)("col", { className: P }),
                          m && (0, e.jsx)("col", { className: P }),
                        ],
                      }),
                      m &&
                        (0, e.jsx)("thead", {
                          children: (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", {}),
                              (0, e.jsx)("th", {
                                children: (0, e.jsx)(S.EY, {
                                  color: "greyneutral-11",
                                  children: g.Localize(
                                    A
                                      ? "#language_header_interface_video"
                                      : "#language_header_interface",
                                  ),
                                }),
                              }),
                              (0, e.jsx)("th", {
                                children: (0, e.jsx)(S.EY, {
                                  color: "greyneutral-11",
                                  children: g.Localize(
                                    "#language_header_subtitles",
                                  ),
                                }),
                              }),
                              (0, e.jsx)("th", {
                                children: (0, e.jsx)(S.EY, {
                                  color: "greyneutral-11",
                                  children: g.Localize(
                                    "#language_header_full_audio",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                      (0, e.jsx)("tbody", {
                        children: f.map((ae, me) =>
                          (0, e.jsx)(R, { language: ae }, me),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Rc(n) {
          const { language: t } = n,
            { data: s } = (0, as.lI)();
          if (!s) return null;
          if (!t || (!t.supported && !t.subtitles && !t.full_audio)) {
            const o = s.preferences?.primary_language ?? U.Bhc;
            return (0, e.jsx)(S.EY, {
              color: "blue-8",
              children: (0, j.we)("#Language_" + (0, U.LgB)(o)),
            });
          } else {
            let o;
            return (
              t.full_audio
                ? t.subtitles
                  ? (o = "#language_supported_subtitles_audio")
                  : (o = "#language_supported_audio")
                : t.subtitles
                  ? (o = "#language_supported_subtitles")
                  : (o = "#language_supported_interface"),
              (0, e.jsx)(S.EY, {
                color: "storegreen-7",
                children: g.Localize(o, Zt(t)),
              })
            );
          }
        }
        function Nc(n) {
          const { language: t } = n,
            s = (0, Ea.LT)("md");
          return !t.supported && !t.full_audio && !t.subtitles
            ? (0, e.jsxs)("tr", {
                className: (0, D.A)(t.preferred && xe().Preferred),
                children: [
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)(S.EY, {
                      color: t.preferred ? "storegreen-7" : "blue-8",
                      children: Zt(t),
                    }),
                  }),
                  (0, e.jsx)("td", {
                    colSpan: 3,
                    children: g.Localize("#language_not_supported"),
                  }),
                ],
              })
            : (0, e.jsxs)("tr", {
                className: (0, D.A)(t.preferred && xe().Preferred),
                children: [
                  (0, e.jsx)("td", { className: xe().Name, children: Zt(t) }),
                  (0, e.jsx)("td", {
                    children:
                      (t.supported &&
                        (0, e.jsx)("span", { children: "\u2714" })) ||
                      (0, e.jsx)(e.Fragment, {}),
                  }),
                  (0, e.jsx)("td", {
                    children:
                      (t.subtitles &&
                        (0, e.jsx)("span", { children: "\u2714" })) ||
                      (0, e.jsx)(e.Fragment, {}),
                  }),
                  (0, e.jsx)("td", {
                    children:
                      (t.full_audio &&
                        (0, e.jsx)("span", { children: "\u2714" })) ||
                      (0, e.jsx)(e.Fragment, {}),
                  }),
                ],
              });
        }
        function Oc(n) {
          const { language: t } = n;
          return !t.supported && !t.full_audio && !t.subtitles
            ? (0, e.jsx)("tr", {
                className: (0, D.A)(t.preferred && xe().Preferred),
                children: (0, e.jsx)("td", {
                  colSpan: 3,
                  children: g.Localize("#language_not_supported_inline", Zt(t)),
                }),
              })
            : (0, e.jsxs)("tr", {
                className: (0, D.A)(t.preferred && xe().Preferred),
                children: [
                  (0, e.jsx)("td", { className: xe().Name, children: Zt(t) }),
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)("div", {
                      className: xe().SmallIcon,
                      children:
                        (t.subtitles && (0, e.jsx)(b._b5, {})) ||
                        (0, e.jsx)(e.Fragment, {}),
                    }),
                  }),
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)("div", {
                      className: xe().SmallIcon,
                      children:
                        (t.full_audio && (0, e.jsx)(b.fSs, {})) ||
                        (0, e.jsx)(e.Fragment, {}),
                    }),
                  }),
                ],
              });
        }
        function Bc(n) {
          const { appid: t, rgCategories: s, controllersUsed: o } = n,
            { data: r } = (0, C.J$)({ appid: t }),
            { data: i } = (0, C._F)({ appid: t }),
            l = c.useMemo(() => {
              const f = new Set(r?.categories?.feature_categoryids ?? []);
              return (
                r?.categories?.supported_player_categoryids?.forEach((x) =>
                  f.add(x),
                ),
                r?.categories?.controller_categoryids?.forEach((x) => f.add(x)),
                f
              );
            }, [r]),
            { data: u } = (0, C.is)({ appid: t }),
            p =
              u?.purchase_options?.find(
                (f) =>
                  f.free_with_master_sub_appid &&
                  f.free_with_master_sub_appid != Bt.sc,
              )?.free_with_master_sub_appid ?? Bt.sc;
          if (
            (c.use(g.Ready()),
            c.use(G.Z.Ready()),
            !r || r.type == null || r?.type == le.uE.Hk || !i)
          )
            return null;
          const m = s.filter((f) => l.has(f.categoryid ?? 0));
          if (r.type == le.uE.Ov && m.length == 0) return null;
          const { vetted: h } = i;
          return (0, e.jsxs)(lt.YZ, {
            className: Ce().CategorySection,
            "flow-children": "column",
            children: [
              (0, e.jsx)(S.EY, {
                className: Ce().FeaturesHeader,
                children: g.Localize("#AppPage_Features"),
              }),
              (0, e.jsxs)(S.EY, {
                color: "blue-8",
                size: "2",
                children: [
                  m.length > 0 &&
                    (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsx)(I.Z, {
                        className: Ce().CategoryLinks,
                        "flow-children": "column",
                        children: m.map((f, x) =>
                          (0, e.jsx)(wc, { category: f }, x),
                        ),
                      }),
                    }),
                  !h && (0, e.jsx)(Wc, { appid: t }),
                  (0, e.jsx)(Ta.AccessibilityFeatureDisplay, {
                    features: (0, Ta.AccessibilityFeaturesFromCategories)(
                      r?.categories?.feature_categoryids ?? [],
                    ),
                  }),
                  (0, e.jsx)(Dc, { appid: t }),
                  (0, e.jsx)(js, { ...Uc(t, l, o, i) }),
                  (0, e.jsxs)(S.EY, {
                    color: "gold-11",
                    children: [
                      (0, e.jsx)(Gc, { extraDetails: i }),
                      (0, e.jsx)(Qc, { extraDetails: i }),
                      (0, e.jsx)(Hc, { extraDetails: i }),
                      (0, e.jsx)(Ra, { eulas: i.eula ?? [] }),
                      p != Bt.sc && (0, e.jsx)(Vc, { appid: p }),
                      (0, e.jsx)(Yc, { extraDetails: i }),
                      (0, e.jsx)(Zc, { extraDetails: i }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Mc(n) {
          switch (n.categoryid) {
            case U.Wmb:
            case U.q0f:
              return "category1=" + n.categoryid;
            case U.PBc:
              return "vrsupport=401";
            case U.zWR:
              return "vrsupport=402";
            default:
              return "category2=" + n.categoryid;
          }
        }
        function Fc(n) {
          return (
            n == U.Y5S ||
            n == U.mv5 ||
            (n >= U.KH9 && n <= U.fui) ||
            (n >= U.mWc && n <= U.vVO)
          );
        }
        function wc(n) {
          const { category: t } = n,
            s = (0, Qe.aL)(`${W.TS.STORE_BASE_URL}search/?${Mc(t)}`);
          return Fc(t.categoryid)
            ? null
            : (0, e.jsxs)(L.Ii, {
                href: s,
                className: (0, D.A)(Ce().SearchLink),
                children: [
                  (0, e.jsx)("div", {
                    className: Ce().IconContainer,
                    children: (0, e.jsx)("img", {
                      className: Ce().Icon,
                      src: `${W.TS.IMG_URL}/${t.image_path}`,
                      alt: "",
                    }),
                  }),
                  (0, e.jsx)(S.EY, {
                    className: Ce().FeatureString,
                    marginLeft: "2",
                    children: g.Localize(t.display_name),
                  }),
                ],
              });
        }
        const _c = 60;
        function Wc(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t }),
            { data: o } = (0, C.by)({ appid: t });
          if (!s || W.TS.EREALM == Sc.TU.k_ESteamRealmChina) return null;
          const r = o?.steam_release_date ?? 0,
            i = r != 0 && Date.now() / 1e3 - r < 86400 * _c;
          let l, u;
          switch (s.type) {
            case le.uE.HT:
              (l = i
                ? "#feature_learning_about_game"
                : "#feature_profile_features_limited"),
                (u = "#feature_learning_about_desc_game");
              break;
            case le.uE.Sv:
              (l = i
                ? "#feature_learning_about_software"
                : "#feature_profile_features_limited"),
                (u = "#feature_learning_about_desc_software");
              break;
            case le.uE._i:
              (l = i
                ? "#feature_learning_about_dlc"
                : "#feature_profile_features_limited"),
                (u = "#feature_learning_about_desc_dlc");
              break;
            case le.uE.RA:
              (l = i
                ? "#feature_learning_about_mod"
                : "#feature_profile_features_limited"),
                (u = "#feature_learning_about_desc_mod");
              break;
          }
          if (!l || !u) return null;
          const d = `${W.TS.IMG_URL}v6/ico/${i ? "ico_learning_about_game.png" : "ico_info.png"}`;
          return (0, e.jsxs)(I.Z, {
            className: Ce().LearningAbout,
            children: [
              (0, e.jsx)("div", {
                className: Ce().IconContainer,
                children: (0, e.jsx)("img", {
                  className: Ce().Icon,
                  src: d,
                  alt: "",
                }),
              }),
              (0, e.jsxs)(S.EY, {
                className: Ce().FeatureString,
                marginLeft: "2",
                children: [g.Localize(l), " "],
              }),
            ],
          });
        }
        function Uc(n, t, s, o) {
          const {
              controller_wizard_complete: r,
              no_mouse_keyboard_support: i,
            } = o,
            l =
              !!s.has_any_controller &&
              !s.has_ps4_controller &&
              !s.has_ps5_controller &&
              !s.has_xbox_controller;
          return {
            unAppID: n,
            bFullXboxControllerSupport: t.has(U.mv5),
            bPartialXboxControllerSupport: t.has(U.Y5S),
            bPS4ControllerSupport: t.has(U.KH9),
            bPS4ControllerBTSupport: t.has(U.wFw),
            bPS5ControllerSupport: t.has(U.wFw),
            bPS5ControllerBTSupport: t.has(U.lDg),
            bSteamInputAPISupport: t.has(U.R2g),
            bNoKeyboardSupport: i,
            bGamepadPreferred: t.has(U.fui),
            bControllerSupportWizardComplete: r,
            bHasXbox: !!s.has_xbox_controller,
            bHasPS4: !!s.has_ps4_controller,
            bHasPS5: !!s.has_ps5_controller,
            bHasOther: l,
          };
        }
        function zc(n) {
          const { activationLimit: t } = n;
          return t
            ? t == "Unlimited"
              ? (0, e.jsx)("div", {
                  className: Ce().ActivationLimit,
                  children: g.Localize(
                    "#feature_machine_activation_limit_unlimited",
                  ),
                })
              : (0, e.jsx)("div", {
                  className: Ce().ActivationLimit,
                  children: g.Localize("#feature_machine_activation_limit", t),
                })
            : null;
        }
        function Gc(n) {
          const { extraDetails: t } = n,
            { drm_third_party_type: s, drm_activation_limit: o } = t;
          return s
            ? (0, e.jsx)("div", {
                className: Ce().ThirdPartyNotice,
                children: (0, e.jsxs)(S.EY, {
                  children: [
                    g.Localize("#feature_third_party_drm", s),
                    (0, e.jsx)(zc, { activationLimit: o }),
                  ],
                }),
              })
            : null;
        }
        function Kc(n) {
          return n == "secureboot_tpm2"
            ? g.Localize(
                "#feature_anticheat_bootprotection_secureboottpm2_desc",
              )
            : "";
        }
        function Hc(n) {
          const { extraDetails: t } = n,
            { anticheat: s } = t;
          if (!s) return null;
          const {
            kernel_mode: o,
            boot_protection: r,
            uninstall_completely: i,
            name: l,
            boot_protection_name: u,
          } = s;
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Ce().ThirdPartyNotice, Ce().Anticheat),
            children: [
              (0, e.jsx)(S.EY, {
                children: g.Localize(
                  o
                    ? "#feature_includes_kernel_anti_cheat"
                    : "#feature_includes_non_kernel_anti_cheat",
                ),
              }),
              (0, e.jsxs)(S.EY, {
                color: "bronze-12",
                children: [
                  l,
                  o &&
                    !i &&
                    (0, e.jsx)(S.EY, {
                      children: g.Localize(
                        "#feature_anti_cheat_requires_manual_removal",
                      ),
                    }),
                ],
              }),
              r &&
                (0, e.jsxs)(S.EY, {
                  children: [
                    g.Localize("#feature_anticheat_bootprotection"),
                    (0, e.jsx)("div", {
                      className: Ce().BootProtectionName,
                      children: Kc(u),
                    }),
                  ],
                }),
            ],
          });
        }
        function Vc(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t });
          return !s || !s.name
            ? null
            : (0, e.jsx)(kc, {
                appid: t,
                title: g.Localize("#feature_master_sub_app_eula", s.name),
              });
        }
        function kc(n) {
          const { appid: t, title: s } = n,
            { data: o } = (0, C._F)({ appid: t });
          return o ? (0, e.jsx)(Ra, { eulas: o.eula ?? [], title: s }) : null;
        }
        function Ra(n) {
          const { eulas: t, title: s } = n;
          if (!t?.length) return null;
          const o = s || g.Localize("#feature_third_party_eula");
          return (0, e.jsxs)("div", {
            className: (0, D.A)(Ce().ThirdPartyNotice, Ce().Eulas),
            children: [
              (0, e.jsxs)(S.EY, { children: [o, " "] }),
              t.map((r, i) =>
                (0, e.jsx)(
                  L.Ii,
                  {
                    className: Ce().Link,
                    href: r.url,
                    children: (0, e.jsx)(S.EY, {
                      color: "bronze-12",
                      children: r.name,
                    }),
                  },
                  i,
                ),
              ),
            ],
          });
        }
        function Yc(n) {
          return n.extraDetails.refund_checks_ea_playtime
            ? (0, e.jsx)("div", {
                className: Ce().ThirdPartyNotice,
                children: (0, e.jsx)(S.EY, {
                  children: g.Localize("#feature_third_party_refund_playtime"),
                }),
              })
            : null;
        }
        function Qc(n) {
          const { extraDetails: t } = n,
            {
              user_account_third_party: s,
              user_account_third_party_link_to_steam: o,
            } = t;
          return s
            ? (0, e.jsx)("div", {
                className: (0, D.A)(
                  Ce().ThirdPartyNotice,
                  Ce().ThirdPartyAccount,
                ),
                children: (0, e.jsxs)(S.EY, {
                  children: [
                    g.Localize("#feature_external_account_service", s),
                    !!o &&
                      (0, e.jsx)(e.Fragment, {
                        children: g.Localize(
                          "#feature_external_account_service_canlink",
                        ),
                      }),
                  ],
                }),
              })
            : null;
        }
        function Zc(n) {
          const { extraDetails: t } = n,
            { ai_generation_service: s } = t;
          return !s || !s.name
            ? null
            : (0, e.jsx)("div", {
                className: Ce().ThirdPartyNotice,
                children: (0, e.jsx)(S.EY, {
                  children: (0, da.i)(
                    g.Localize(
                      "#feature_ai_generated_content_external_account_service",
                      s.name,
                    ),
                    (0, e.jsx)(L.Ii, { href: s.url }),
                  ),
                }),
              });
        }
        var Jc = a(76985),
          Ke = a.n(Jc),
          An = a(48473);
        function $c(n) {
          const { appid: t, tracks: s, metadata: o } = n,
            { data: r } = (0, C.J$)({ appid: t }),
            [i, l] = c.useState(s[0]?.discNumber ?? 1),
            u = c.useMemo(() => {
              let d = new Map();
              for (const p of s ?? [])
                d.has(p.discNumber)
                  ? d.get(p.discNumber)?.tracks.push(p)
                  : d.set(p.discNumber, {
                      discNumber: p.discNumber,
                      tracks: [p],
                    });
              return d;
            }, [s]);
          return !r || r.type == null || !s?.length
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsxs)(lt.YZ, {
                    className: Ke().TrackListContainer,
                    "flow-children": "column",
                    children: [
                      u.size > 1 &&
                        (0, e.jsx)(I.Z, {
                          "flow-children": "row",
                          className: Ke().DiscTabs,
                          children: Array.from(u.values()).map((d) =>
                            (0, e.jsx)(
                              Re.$,
                              {
                                variant:
                                  d.discNumber == i ? "inverted" : void 0,
                                onClick: () => l(d.discNumber),
                                children: g.Localize(
                                  "#music_disc_tab",
                                  d.discNumber,
                                ),
                              },
                              d.discNumber,
                            ),
                          ),
                        }),
                      (0, e.jsx)(ss.Qg, {
                        className: Ke().TrackList,
                        children: (0, e.jsx)(Xc, { tracks: u.get(i).tracks }),
                      }),
                    ],
                  }),
                  (0, e.jsx)(lt.YZ, {
                    className: Ke().MetadataContainer,
                    "flow-children": "column",
                    children: (0, e.jsx)(ss.Qg, {
                      className: Ke().Metadata,
                      children: (0, e.jsx)(nd, { metadata: o }),
                    }),
                  }),
                ],
              });
        }
        function Xc(n) {
          const { tracks: t } = n;
          return (0, e.jsx)(S.EY, {
            color: "greyneutral-12",
            children: (0, e.jsxs)("table", {
              className: Ke().TrackTable,
              children: [
                (0, e.jsxs)("colgroup", {
                  children: [
                    (0, e.jsx)("col", { className: Ke().Number }),
                    (0, e.jsx)("col", { className: Ke().Name }),
                    (0, e.jsx)("col", { className: Ke().Length }),
                  ],
                }),
                (0, e.jsx)("tbody", {
                  children: t.map((s, o) =>
                    (0, e.jsx)(qc, { track: s, odd: o % 2 != 0 }, o),
                  ),
                }),
              ],
            }),
          });
        }
        function qc(n) {
          const { track: t, odd: s } = n;
          return (0, e.jsxs)("tr", {
            className: (0, D.A)(s && Ke().Odd),
            children: [
              (0, e.jsx)("td", { children: t.trackNumber }),
              (0, e.jsx)("td", { children: ed(t) }),
              (0, e.jsx)("td", { className: Ke().Length, children: td(t) }),
            ],
          });
        }
        function ed(n) {
          if (!n.originalName || !n.originalNameLanguage)
            return n.internationalName;
          const t = j.pf.GetELanguageFallbackOrder()[0] ?? U.Bhc;
          return (0, U.wwZ)(t) == n.originalNameLanguage
            ? (0, An.EK)(n.originalName)
            : g.Localize(
                "#music_localized_track_name",
                (0, An.EK)(n.internationalName),
                (0, An.EK)(n.originalName),
              );
        }
        function td(n) {
          return g.Localize(
            "#music_album_track_duration",
            n.lengthMinutes,
            n.lengthSeconds.toString().padStart(2, "0"),
          );
        }
        function nd(n) {
          const { metadata: t } = n;
          return t
            ? (0, e.jsxs)(Q.s, {
                direction: "column",
                className: Ke().Credits,
                marginTop: "4",
                children: [
                  (0, e.jsx)(S.EY, {
                    size: "5",
                    weight: "heavy",
                    children: g.Localize("#music_album_metadata"),
                  }),
                  (0, e.jsx)(ja.x, {
                    columns: "max-content max-content",
                    gapX: "2",
                    margin: "2",
                    children: t.map((s) =>
                      (0, e.jsx)(sd, { metadata: s }, s.field),
                    ),
                  }),
                ],
              })
            : null;
        }
        function Na(n, t) {
          return n.find((s) => s.language == t);
        }
        function sd(n) {
          const { metadata: t } = n;
          if (!t || !t.values?.length) return null;
          const { field: s, values: o } = t,
            r = "#music_album_metadata_key_" + s,
            i = j.pf.GetELanguageFallbackOrder()[0] ?? U.Bhc,
            l = Na(o, i) || Na(o, U.Bhc);
          return l
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(S.EY, {
                    className: Ke().CreditName,
                    children: g.Localize(r),
                  }),
                  (0, e.jsx)(S.EY, { children: (0, An.EK)(l.value) }),
                ],
              })
            : null;
        }
        var jn = a(84909),
          Et = a(43462),
          ad = a(19218),
          os = a.n(ad);
        const od = new Gt.wd("InterestButtons");
        function rd(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t });
          return !s || s.type == null
            ? null
            : (0, e.jsx)(I.Z, {
                className: os().ButtonRow,
                "flow-children": "column",
                children: (0, e.jsxs)(Q.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, e.jsx)(ud, { appid: t }),
                    (0, e.jsxs)(Q.s, {
                      direction: "row",
                      width: "100%",
                      gap: "1",
                      children: [
                        (0, e.jsx)(id, { appid: t }),
                        (0, e.jsx)(ld, { appid: t }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function rs(n) {
          const { options: t, children: s } = n;
          return (0, e.jsxs)("span", {
            className: os().WidestChildContainer,
            children: [
              t.map((o, r) =>
                (0, e.jsx)("span", { className: os().Hidden, children: o }, r),
              ),
              (0, e.jsx)("span", { children: s }),
            ],
          });
        }
        function Oa() {
          return (0, e.jsx)(Ie.az, {
            width: "16px",
            marginRight: "1",
            marginTop: "1",
            children: (0, e.jsx)(Le.MGO, {}),
          });
        }
        function id(n) {
          const { appid: t } = n,
            { data: s } = Ht(t),
            o = Ho(t);
          if (!s) return null;
          const { following: r = !1 } = s,
            i = (d) => {
              o.mutateAsync({ following: d, old_interest: s });
            },
            l = g.Localize("#button_follow"),
            u = (0, e.jsxs)(Q.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, e.jsx)(Oa, {}), g.Localize("#button_follow_undo")],
            });
          return (0, e.jsx)(Ie.az, {
            flexGrow: "1",
            children: (0, e.jsxs)(Re.$, {
              color: "greyneutral",
              onClick: () => i(!r),
              width: "100%",
              children: [
                (0, e.jsx)(Ie.az, {
                  children: r ? (0, e.jsx)(b.c9e, {}) : (0, e.jsx)(b.pPV, {}),
                }),
                (0, e.jsx)(rs, { options: [l, u], children: r ? u : l }),
              ],
            }),
          });
        }
        function ld(n) {
          const { appid: t } = n,
            { data: s } = Ht(t),
            o = Ko(t),
            [r, i] = c.useState(!1);
          if (!s) return null;
          const { ignored: l = !1, ignored_reason: u } = s,
            d = !!l && (u ?? !1),
            p = (x, v) => {
              od.Info("ignoring", x, v),
                o.mutateAsync({
                  ignored: x,
                  ignored_reason: v,
                  old_interest: s,
                });
            },
            m = (x) => {
              p(x !== !1, x === !1 ? void 0 : x), i(!1);
            },
            h = g.Localize("#button_ignore"),
            f = (0, e.jsxs)(Q.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, e.jsx)(Oa, {}), g.Localize("#button_ignore_undo")],
            });
          return (0, e.jsx)(Ie.az, {
            flexGrow: "1",
            children: (0, e.jsxs)(jn.A.Root, {
              open: r,
              onOpenChange: i,
              children: [
                (0, e.jsx)(jn.A.Anchor, {
                  children: (0, e.jsx)(Re.$, {
                    color: "greyneutral",
                    onClick: () => i(!r),
                    width: "100%",
                    children: (0, e.jsx)(rs, {
                      options: [h, f],
                      children: l ? f : h,
                    }),
                  }),
                }),
                (0, e.jsx)(jn.A.Positioner, {
                  children: (0, e.jsx)(jn.A.FocusManager, {
                    children: (0, e.jsx)(Ie.az, {
                      border: "1",
                      borderColor: "blue-7",
                      background: "greyneutral-4",
                      elevation: "1",
                      padding: "1",
                      children: (0, e.jsx)(q.q, {
                        children: (0, e.jsxs)(Q.s, {
                          direction: "column",
                          children: [
                            (0, e.jsx)(is, {
                              type: Et.RI.$m,
                              currentType: d,
                              select: m,
                            }),
                            (0, e.jsx)(is, {
                              type: Et.RI.yK,
                              currentType: d,
                              select: m,
                            }),
                            (0, e.jsx)(is, {
                              type: !1,
                              currentType: d,
                              select: m,
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
        function cd(n) {
          switch (n) {
            default:
            case !1:
              return "#ignore_reason_none_header";
            case Et.RI.$m:
              return "#ignore_reason_generic_header";
            case Et.RI.yK:
              return "#ignore_reason_otherstore_header";
          }
        }
        function dd(n) {
          switch (n) {
            default:
            case !1:
              return "#ignore_reason_none_desc";
            case Et.RI.$m:
              return "#ignore_reason_generic_desc";
            case Et.RI.yK:
              return "#ignore_reason_otherstore_desc";
          }
        }
        function is(n) {
          const { type: t, currentType: s, select: o } = n;
          return (0, e.jsx)(I.Z, {
            focusable: !0,
            onActivate: () => o(t),
            autoFocus: s == Et.RI.$m,
            children: (0, e.jsxs)(Q.s, {
              direction: "row",
              padding: "2",
              maxWidth: "275px",
              gap: "2",
              children: [
                (0, e.jsx)(Ie.az, {
                  minWidth: "16px",
                  maxWidth: "16px",
                  children:
                    t === s &&
                    (0, e.jsx)(S.EY, { children: (0, e.jsx)(Le.MGO, {}) }),
                }),
                (0, e.jsxs)(Q.s, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, e.jsx)(S.EY, {
                      color: "greyneutral-12",
                      weight: "heavy",
                      children: g.Localize(cd(t)),
                    }),
                    (0, e.jsx)(S.EY, {
                      color: "greyneutral-11",
                      children: g.Localize(dd(t)),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function ud(n) {
          const { appid: t } = n,
            [s, o] = c.useState(!1),
            r = (0, Ze.LH)(),
            i = (0, e.jsxs)(Q.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, e.jsx)(Ie.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, e.jsx)(b.T4m, {}),
                }),
                g.Localize("#button_wishlist"),
              ],
            }),
            l = (0, e.jsxs)(Q.s, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, e.jsx)(Ie.az, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, e.jsx)(b.qnF, {}),
                }),
                g.Localize("#button_wishlist_undo"),
              ],
            });
          return (0, e.jsx)(Ie.az, {
            children: (0, e.jsxs)(I.Z, {
              onSecondaryButton: () => o(!0),
              onSecondaryActionDescription: g.Localize(
                "#wishlist_manage_categories",
              ),
              children: [
                (0, e.jsx)($n, {
                  appid: t,
                  bAllowRemove: !0,
                  width: "100%",
                  children: (u) =>
                    (0, e.jsx)(rs, { options: [i, l], children: u ? l : i }),
                }),
                s &&
                  (0, e.jsx)(Zs, {
                    appid: t,
                    steamid: r,
                    onClose: () => o(!1),
                  }),
              ],
            }),
          });
        }
        var pd = a(60993),
          Jt = a.n(pd),
          Pn = a(21079),
          md = a(58612),
          hd = a(20125),
          gd = a(9094),
          Ba = a(20117),
          Ma = a(74679),
          fd = a(35675),
          $t = a(60001);
        async function xd(n, t) {
          const s = (0, hd.Am)(de.TS.STORE_BASE_URL, t, de.iA.country_code),
            i = (await (await fetch(s)).json()).rgCurations[n] || {};
          return Object.entries(i).map((l) => ({
            clan_accountid: Number(l[0]),
            recommendation: l[1],
          }));
        }
        function vd(n) {
          return (0, Ct.I)({
            queryKey: ["UserCurations" + de.iA.accountid],
            queryFn: async () => xd(n, de.iA.accountid),
            enabled: !!de.iA.accountid,
          });
        }
        function yd(n) {
          const { data: t } = (0, C.J$)({ appid: n }),
            { data: s } = (0, C.wl)({ appid: n }),
            { data: o } = (0, C.xz)({ appid: n }),
            { data: r } = (0, C.ik)({ appid: n }),
            { data: i } = (0, C.Zx)({ appid: n }),
            { data: l } = (0, Pn.Dk)(n),
            { data: u } = (0, Ma.yt)(),
            { data: d } = (0, Pn.zo)(n),
            { data: p } = (0, Pn.Mu)(),
            { data: m } = (0, md.Nd)(n),
            { data: h } = (0, as.lI)(),
            { data: f } = (0, gd.nU)(de.iA.steamid),
            { data: x } = (0, fd.Gw)(),
            { data: v } = vd(n);
          return c.useMemo(() => {
            if (
              !t ||
              !s ||
              !o ||
              !r ||
              !i ||
              !l ||
              !u ||
              !d ||
              !p ||
              !m ||
              !h ||
              !f ||
              !x ||
              !v
            )
              return null;
            const A = { appid: n };
            (A.nCurrentUserPlaytimeMins =
              m.your_info?.minutes_played_forever || 0),
              (A.bCurrentUserOwns = !!m.your_info?.owned),
              (A.bFromInteractiveRecommender = d.bRecommendedByIR),
              A.bCurrentUserOwns ||
                ((A.rgSimilarApps = d.arrSimilarPlayedApps || []),
                A.rgSimilarApps?.length == 0 &&
                  (A.rgMatchingTagsPlayed =
                    u.filter((z) => o?.find((Te) => Te.tagid == z.tagid)) ||
                    []));
            let P =
              (h.preferences?.review_score_preference == At.Wf.Yy &&
                r.summary_unfiltered) ||
              r.summary_filtered;
            const R = P?.review_score || le.j6.sZ;
            (A.bPositiveReviews = R > le.j6.lo),
              (A.bNegativeReviews = R > le.j6.sZ && R < le.j6.hc),
              (A.eReviewScore = R),
              (A.strReviewScoreLabel = P?.review_score_label),
              t.type != le.uE.Hk && t.type != le.uE.Ov
                ? (A.bUserLanguageSupported = !!i.find(
                    (z) => z.elanguage == h.preferences?.primary_language,
                  ))
                : (A.bUserLanguageSupported = !0);
            const me = p.GetItems().findIndex((z) => z.GetAppID() == n);
            me != -1 && (me < 25 ? (A.bTopSeller = !0) : (A.bPopular = !0));
            const Z = !!f.items.find((z) => z.appid == n);
            (A.bWishlisted = Z),
              (A.rgExcludedTags =
                h.tag_preferences?.tags_to_exclude?.filter((z) =>
                  o?.find((Te) => Te.tagid == z.tagid),
                ) || []),
              (A.rgPublishersFollowed = s.publishers?.filter(
                (z) =>
                  z.creator_clan_account_id &&
                  x?.get(z.creator_clan_account_id)?.is_creator,
              )),
              (A.rgDevelopersFollowed = s.developers?.filter(
                (z) =>
                  z.creator_clan_account_id &&
                  x?.get(z.creator_clan_account_id)?.is_creator,
              )),
              (A.rgFranchisesFollowed = s.franchises?.filter(
                (z) =>
                  z.creator_clan_account_id &&
                  x?.get(z.creator_clan_account_id)?.is_creator,
              )),
              (A.rgPublishersFollowed = A.rgPublishersFollowed?.filter(
                (z) =>
                  !A.rgDevelopersFollowed?.find(
                    (Te) =>
                      Te.creator_clan_account_id == z.creator_clan_account_id,
                  ),
              )),
              (A.rgCuratorsPositive = v
                .filter((z) => z.recommendation == $t.tV.$D)
                .map((z) => z.clan_accountid)),
              (A.rgCuratorsNegative = v
                .filter((z) => z.recommendation == $t.tV.qP)
                .map((z) => z.clan_accountid)),
              (A.rgFriendsRecommended = l.accountids_recommended || []),
              (A.rgFriendsDisrecommended = l.accountids_not_recommended || []),
              (A.rgFriendsWishlisted =
                m.in_wishlist?.map((z) => Ba.b2.ToAccountID(z.steamid)) || []);
            let J = (m.played_recently || []).concat(
              m.played_ever || [],
              m.owns || [],
            );
            return (
              (A.rgFriendsOwned = J.map((z) => Ba.b2.ToAccountID(z.steamid))), A
            );
          }, [n, s, v, x, m, l, p, t, o, u, r, h, d, i, f]);
        }
        var Cd = a(13290),
          ht = a.n(Cd),
          qe = ((n) => (
            (n[(n.Info = 0)] = "Info"),
            (n[(n.Positive = 1)] = "Positive"),
            (n[(n.Negative = 2)] = "Negative"),
            n
          ))(qe || {});
        function wt(n) {
          const { type: t, description: s, children: o } = n;
          let r = (0, e.jsx)(Le.$$j, {});
          return (
            t == 1
              ? (r = (0, e.jsx)(Le.MGO, { className: ht().Positive }))
              : t == 2 && (r = (0, e.jsx)(b.tmm, { className: ht().Negative })),
            (0, e.jsxs)("div", {
              className: ht().Reason,
              children: [
                (0, e.jsxs)("div", {
                  className: ht().TopLine,
                  children: [
                    (0, e.jsx)("div", { className: ht().Icon, children: r }),
                    (0, e.jsx)("div", {
                      className: ht().Description,
                      children: s,
                    }),
                  ],
                }),
                o &&
                  (0, e.jsx)("div", {
                    className: ht().Additional,
                    children: o,
                  }),
                (0, e.jsx)("div", { className: ht().Divider }),
              ],
            })
          );
        }
        function Fa(n) {
          const { description: t, children: s } = n;
          return (0, e.jsx)(wt, { type: 0, description: t, children: s });
        }
        function Xt(n) {
          const { description: t, children: s } = n;
          return (0, e.jsx)(wt, { type: 1, description: t, children: s });
        }
        function wa(n) {
          const { description: t, children: s } = n;
          return (0, e.jsx)(wt, { type: 2, description: t, children: s });
        }
        var _a = a(85978),
          Wa = a(93191),
          Ad = a(2699),
          jd = a.n(Ad);
        function Ua(n) {
          const { children: t } = n;
          return (0, e.jsx)(I.Z, { className: jd().AvatarList, children: t });
        }
        var za = a(30986);
        function Pd(n) {
          const { accountid: t, appid: s, bLinkToReview: o } = n,
            r = (0, _a.jn)(t);
          if (!r.data || !r.data.public_data) return null;
          const i = (0, Wa.n)(r.data),
            l = o ? `${i}/recommended/${s}` : i;
          return (0, e.jsx)(L.Ii, {
            href: l,
            "data-miniprofile": t,
            children: (0, e.jsx)(za.wm, {
              playerLinkDetails: r.data,
              alt: r.data.public_data.persona_name,
            }),
          });
        }
        function Sd(n) {
          const { rgFriends: t, appid: s, bLinkToReview: o } = n;
          return (0, e.jsx)(Ua, {
            children: t.map((r) =>
              (0, e.jsx)(Pd, { accountid: r, appid: s, bLinkToReview: o }, r),
            ),
          });
        }
        function Sn(n) {
          const {
              type: t,
              appid: s,
              strLocTag: o,
              rgFriends: r,
              nMax: i = 5,
              bLinkToReview: l,
            } = n,
            u = (0, Ze.LH)(),
            { data: d } = (0, _a.jn)(u),
            p = (0, Wa.n)(d) + `/friendsthatplay/${s}`;
          if (!r || r.length == 0) return null;
          let m = (0, ge.xh)(
            g.LocalizePlural(o, r.length),
            (0, e.jsx)(L.Ii, { href: p }),
          );
          return (0, e.jsx)(wt, {
            type: t,
            description: m,
            children: (0, e.jsx)(Sd, {
              rgFriends: r.slice(0, i),
              appid: s,
              bLinkToReview: l,
            }),
          });
        }
        var Id = a(55483);
        function bd(n) {
          const { url: t, avatarUrl: s, alt: o } = n;
          return (0, e.jsx)(ft.he, {
            toolTipContent: o,
            children: (0, e.jsx)(L.Ii, {
              href: t,
              children: (0, e.jsx)(za.Ul, { avatarURL: s, alt: o }),
            }),
          });
        }
        function Td(n) {
          const { accountid: t, appid: s, fnURLGenerator: o } = n,
            r = (0, Id.TB)(t);
          if (!r.data) return null;
          const i = o(r.data, s);
          return (0, e.jsx)(bd, {
            url: i,
            avatarUrl: r.data.avatar_full_url,
            alt: r.data.group_name,
          });
        }
        function Ed(n) {
          const { rgCurators: t, appid: s, fnURLGenerator: o } = n;
          return (0, e.jsx)(Ua, {
            children: t.map((r) =>
              (0, e.jsx)(Td, { accountid: r, appid: s, fnURLGenerator: o }, r),
            ),
          });
        }
        function ls(n) {
          const {
              type: t,
              fnURLGenerator: s,
              appid: o,
              strLocTag: r,
              rgCurators: i,
              nMax: l = 6,
            } = n,
            u = (0, Qe.aL)(
              de.TS.STORE_BASE_URL + `curators/mycuratorsreviewing/?appid=${o}`,
            );
          if (!i || i.length == 0) return null;
          let d = (0, ge.xh)(g.Localize(r), (0, e.jsx)(L.Ii, { href: u }));
          return (0, e.jsx)(wt, {
            type: t,
            description: d,
            children: (0, e.jsx)(Ed, {
              rgCurators: i.slice(0, l),
              appid: o,
              fnURLGenerator: s,
            }),
          });
        }
        var Ld = a(57102),
          Ga = a.n(Ld);
        function Dd(n) {
          const { tag: t } = n;
          return (0, e.jsx)(L.Ii, {
            className: Ga().Tag,
            href: `${de.TS.STORE_BASE_URL}tags/${(0, U.wwZ)((0, U.sfN)(de.TS.LANGUAGE))}/${t.name}`,
            children: t.name,
          });
        }
        function Ka(n) {
          const { rgTags: t } = n;
          return t.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: Ga().TagList,
                children: t.map((s) => (0, e.jsx)(Dd, { tag: s }, s.tagid)),
              });
        }
        var Rd = a(54629),
          In = a.n(Rd),
          Nd = a(80702);
        function Od(n) {
          const { appid: t } = n,
            { data: s } = (0, C.J$)({ appid: t }),
            { data: o } = (0, C.lv)({ appid: t });
          if (!s || !o) return null;
          const r = (0, Ln.b0)(o, "community_icon");
          return (0, e.jsx)(Nd.Q, {
            id: { appid: t },
            bPreventNavigation: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: { minWidth: "320px", zIndex: 5e3 },
            },
            children: (0, e.jsxs)(xt.p, {
              className: In().AppIconAndName,
              storeItem: s,
              children: [
                (0, e.jsx)("div", {
                  className: In().AppIcon,
                  children: r && (0, e.jsx)("img", { src: r, alt: "" }),
                }),
                (0, e.jsx)("div", {
                  className: In().AppName,
                  children: s.name,
                }),
              ],
            }),
          });
        }
        function Bd(n) {
          const { rgApps: t } = n;
          return t.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: In().AppList,
                children: t.map((s) =>
                  (0, e.jsx)(Od, { appid: s.appid }, s.appid),
                ),
              });
        }
        function Md(n) {
          const { appid: t, friendsRecommended: s, recommendedTags: o } = n,
            [r, i] = c.useState(!1),
            l = (0, Pn.ws)(),
            u = (0, Ma.Fx)();
          return (
            c.useEffect(() => {
              l(t, s), u(o), i(!0);
            }, [t, s, o, l, u]),
            c.use(g.Ready()),
            c.use(G.Z.Ready()),
            r
              ? (0, e.jsx)(c.Suspense, {
                  children: (0, e.jsx)(wd, { appid: t }),
                })
              : null
          );
        }
        function Ha(n, t) {
          const { data: s } = (0, C.J$)({ appid: t.appid });
          return g.GetAppTypePluralLocKey(n, s?.type || le.uE.HT);
        }
        function Fd(n, t) {
          const { data: s } = (0, C.J$)({ appid: t.appid });
          return g.GetAppTypeLocKey(n, s?.type || le.uE.HT);
        }
        function cs(n, t) {
          const s = Fd(n, t);
          return g.Localize(s);
        }
        function wd(n) {
          const { appid: t } = n,
            s = yd(t);
          return s
            ? (0, e.jsxs)(lt.YZ, {
                className: Jt().RecommendationReasonsDisplay,
                navEntryPreferPosition: Y.iU.PREFERRED_CHILD,
                children: [
                  (0, e.jsx)(_d, { reasons: s }),
                  (0, e.jsx)(Wd, { reasons: s }),
                  (0, e.jsx)(Gd, { reasons: s }),
                  (0, e.jsx)(Kd, { reasons: s }),
                  (0, e.jsx)(Hd, { reasons: s }),
                  (0, e.jsx)(kd, { reasons: s }),
                  (0, e.jsx)(Vd, { reasons: s }),
                  (0, e.jsx)(Yd, { reasons: s }),
                  (0, e.jsx)(Qd, { reasons: s }),
                  (0, e.jsx)(Xd, { reasons: s }),
                  (0, e.jsx)(qd, { reasons: s }),
                  (0, e.jsx)(eu, { reasons: s }),
                  (0, e.jsx)(tu, { reasons: s }),
                  (0, e.jsx)(nu, { reasons: s }),
                  (0, e.jsx)(su, { reasons: s }),
                  (0, e.jsx)(au, { reasons: s }),
                  (0, e.jsx)(ou, { reasons: s }),
                  (0, e.jsx)(ru, { reasons: s }),
                ],
              })
            : null;
        }
        function _d(n) {
          const { reasons: t } = n,
            s = cs("#AppPage_RecommendationReason_Header", t);
          return (0, e.jsx)("div", { className: Jt().Header, children: s });
        }
        function Wd(n) {
          const { reasons: t } = n;
          if (t.nCurrentUserPlaytimeMins > 0) {
            let s =
              t.nCurrentUserPlaytimeMins >= 1200
                ? Math.round(t.nCurrentUserPlaytimeMins / 60)
                : Math.round((t.nCurrentUserPlaytimeMins * 10) / 60) / 10;
            return (0, e.jsx)(Fa, {
              description: g.Localize(
                "#AppPage_RecommendationReason_Playtime",
                s,
              ),
            });
          } else if (t.bCurrentUserOwns)
            return (0, e.jsx)(Fa, {
              description: g.Localize(
                "#AppPage_RecommendationReason_InLibrary",
              ),
            });
          return null;
        }
        function Ud(n) {
          const { reasons: t } = n,
            s = cs("#AppPage_RecommendationReason_MatchingApps", t);
          return (0, e.jsx)(Xt, {
            description: s,
            children: (0, e.jsx)(Bd, { rgApps: t.rgSimilarApps }),
          });
        }
        function zd(n) {
          const { reasons: t } = n,
            s = cs("#AppPage_RecommendationReason_MatchingTags", t);
          return (0, e.jsx)(Xt, {
            description: s,
            children: (0, e.jsx)(Ka, { rgTags: t.rgMatchingTagsPlayed }),
          });
        }
        function Gd(n) {
          const { reasons: t } = n;
          return t.rgSimilarApps && t.rgSimilarApps.length > 0
            ? (0, e.jsx)(Ud, { reasons: t })
            : t.rgMatchingTagsPlayed && t.rgMatchingTagsPlayed.length > 0
              ? (0, e.jsx)(zd, { reasons: t })
              : null;
        }
        function Kd(n) {
          const { reasons: t } = n;
          return t.bFromInteractiveRecommender
            ? (0, e.jsx)(Xt, {
                description: g.Localize(
                  "#AppPage_RecommendationReason_FromInteractiveRecommender",
                ),
              })
            : null;
        }
        function Hd(n) {
          const { reasons: t } = n;
          return t.bPositiveReviews || t.bNegativeReviews
            ? (0, e.jsx)(wt, {
                type: t.bPositiveReviews ? qe.Positive : qe.Negative,
                description: (0, ge.xh)(
                  g.Localize(
                    "#AppPage_RecommendationReason_UserReviews",
                    t.strReviewScoreLabel,
                  ),
                  (0, e.jsx)("span", {
                    className: (0, D.A)(
                      Jt().ReviewScore,
                      t.bPositiveReviews ? Jt().Positive : Jt().Negative,
                    ),
                  }),
                ),
              })
            : null;
        }
        function Vd(n) {
          const { reasons: t } = n;
          return !t.bTopSeller && !t.bPopular
            ? null
            : (0, e.jsx)(Xt, {
                description: g.Localize(
                  t.bTopSeller
                    ? "#AppPage_RecommendationReason_TopSeller"
                    : "#AppPage_RecommendationReason_Popular",
                ),
              });
        }
        function kd(n) {
          const { reasons: t } = n;
          return t.bUserLanguageSupported
            ? null
            : (0, e.jsx)(wa, {
                description: (0, ge.xh)(
                  g.Localize(
                    "#AppPage_RecommendationReason_LanguageUnsupported",
                  ),
                  (0, e.jsx)(L.Ii, {
                    href: `${de.TS.STORE_BASE_URL}account/languagepreferences/`,
                  }),
                ),
              });
        }
        function Yd(n) {
          const { reasons: t } = n,
            s = (0, Qe.aL)(de.TS.STORE_BASE_URL + "wishlist");
          return t.bWishlisted
            ? (0, e.jsx)(Xt, {
                description: (0, ge.xh)(
                  g.Localize("#AppPage_RecommendationReason_Wishlisted"),
                  (0, e.jsx)(L.Ii, { href: s }),
                ),
              })
            : null;
        }
        function Qd(n) {
          const { reasons: t } = n;
          return !t.rgExcludedTags || t.rgExcludedTags.length == 0
            ? null
            : (0, e.jsx)(wa, {
                description: (0, ge.xh)(
                  g.Localize("#AppPage_RecommendationReason_ExcludedTags"),
                  (0, e.jsx)(L.Ii, {
                    href: `${de.TS.STORE_BASE_URL}account/preferences`,
                  }),
                ),
                children: (0, e.jsx)(Ka, { rgTags: t.rgExcludedTags }),
              });
        }
        function Zd(n, t) {
          return n.vanity_url
            ? `${de.TS.STORE_BASE_URL}${t}/${n.vanity_url}`
            : `${de.TS.STORE_BASE_URL}curator/${n.clanAccountID}`;
        }
        function Jd(n, t, s) {
          return `${Zd(n, t)}?appid=${s}`;
        }
        function $d(n) {
          return n.vanity_url
            ? `${de.TS.COMMUNITY_BASE_URL}groups/${n.vanity_url}`
            : `${de.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID?.ConvertTo64BitString()}`;
        }
        function Va(n, t) {
          return `${$d(n)}/curation/app/${t}`;
        }
        function ds(n) {
          const { reasons: t, type: s, strLocTag: o, rgCreators: r } = n;
          if (!r || r.length == 0) return null;
          const i = (l, u) => Jd(l, s, u);
          return (0, e.jsx)(ls, {
            appid: t.appid,
            type: qe.Positive,
            fnURLGenerator: i,
            strLocTag: o,
            rgCurators: r.map((l) => l.creator_clan_account_id),
          });
        }
        function Xd(n) {
          const { reasons: t } = n;
          return (0, e.jsx)(ds, {
            reasons: t,
            type: "developer",
            strLocTag: "#AppPage_RecommendationReason_FollowedDeveloper",
            rgCreators: t?.rgDevelopersFollowed,
          });
        }
        function qd(n) {
          const { reasons: t } = n;
          return (0, e.jsx)(ds, {
            reasons: t,
            type: "publisher",
            strLocTag: "#AppPage_RecommendationReason_FollowedPublisher",
            rgCreators: t?.rgPublishersFollowed,
          });
        }
        function eu(n) {
          const { reasons: t } = n;
          return (0, e.jsx)(ds, {
            reasons: t,
            type: "franchise",
            strLocTag: "#AppPage_RecommendationReason_FollowedFranchise",
            rgCreators: t?.rgFranchisesFollowed,
          });
        }
        function tu(n) {
          const { reasons: t } = n;
          return (0, e.jsx)(ls, {
            appid: t.appid,
            type: qe.Positive,
            fnURLGenerator: Va,
            strLocTag: "#AppPage_RecommendationReason_CuratorRecommended",
            rgCurators: t.rgCuratorsPositive,
          });
        }
        function nu(n) {
          const { reasons: t } = n;
          return (0, e.jsx)(ls, {
            appid: t.appid,
            type: qe.Negative,
            fnURLGenerator: Va,
            strLocTag: "#AppPage_RecommendationReason_CuratorDisrecommended",
            rgCurators: t.rgCuratorsNegative,
          });
        }
        function su(n) {
          const { reasons: t } = n;
          return (0, e.jsx)(Sn, {
            appid: t.appid,
            type: qe.Positive,
            strLocTag: "#AppPage_RecommendationReason_FriendsRecommended",
            rgFriends: t.rgFriendsRecommended,
            bLinkToReview: !0,
          });
        }
        function au(n) {
          const { reasons: t } = n;
          return (0, e.jsx)(Sn, {
            appid: t.appid,
            type: qe.Negative,
            strLocTag: "#AppPage_RecommendationReason_FriendsDisrecommended",
            rgFriends: t.rgFriendsDisrecommended,
            bLinkToReview: !0,
          });
        }
        function ou(n) {
          const { reasons: t } = n,
            s = Ha("#AppPage_RecommendationReason_FriendsWishlisted", t);
          return (0, e.jsx)(Sn, {
            appid: t.appid,
            type: qe.Info,
            strLocTag: s,
            rgFriends: t.rgFriendsWishlisted,
          });
        }
        function ru(n) {
          const { reasons: t } = n,
            s = Ha("#AppPage_RecommendationReason_FriendsOwned", t);
          return (0, e.jsx)(Sn, {
            appid: t.appid,
            type: qe.Info,
            strLocTag: s,
            rgFriends: t.rgFriendsOwned,
          });
        }
        var iu = a(35413),
          lu = a(78747),
          be = a.n(lu);
        function cu(n) {
          const { curator: t, recommendation: s } = n,
            o = Za(s.link_url),
            r = us(s.link_url),
            i = !!o?.iframe || !!o?.image;
          return (0, e.jsxs)("div", {
            className: be().Container,
            children: [
              (0, e.jsx)("h2", {
                children: g.Localize("#AppPage_Curator_Title"),
              }),
              (0, e.jsxs)(lt.YZ, {
                "flow-children": "row",
                className: be().Review,
                children: [
                  i &&
                    (0, e.jsxs)(Q.s, {
                      direction: "column",
                      className: be().Video,
                      gap: "1",
                      align: "center",
                      children: [
                        o.iframe &&
                          (0, e.jsx)("iframe", {
                            src: o.iframe,
                            frameBorder: "0",
                            allowFullScreen: !0,
                            title: "referring_curator_video_embed",
                          }),
                        o.image &&
                          (0, e.jsxs)(L.Ii, {
                            href: r,
                            className: be().VideoThumbnail,
                            children: [
                              (0, e.jsx)("img", {
                                src: o.image,
                                alt: g.Localize(
                                  "#AppPage_Curator_VideoThumbnail",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: be().PlayOverlay,
                                children: (0, e.jsx)(Le.jGG, {}),
                              }),
                            ],
                          }),
                        (0, e.jsx)(ka, { ...n }),
                      ],
                    }),
                  (0, e.jsx)("div", {
                    className: (0, D.A)(be().DetailRight, !i && be().NoVideo),
                    children: (0, e.jsx)("div", {
                      className: be().Blurb,
                      children: (0, e.jsxs)(Q.s, {
                        direction: "column",
                        gap: "1",
                        children: [
                          (0, e.jsxs)(Q.s, {
                            direction: "row",
                            gap: "1",
                            children: [
                              (0, e.jsx)("div", {
                                className: be().Avatar,
                                children: (0, e.jsx)("img", {
                                  src: (0, iu.t)(t.avatar_sha, "full"),
                                  alt: "",
                                }),
                              }),
                              (0, e.jsxs)(Q.s, {
                                direction: "column",
                                flexGrow: "1",
                                children: [
                                  (0, e.jsx)(du, {
                                    state: s.recommendation_state,
                                  }),
                                  (0, e.jsx)(S.EY, {
                                    size: "2",
                                    color: "greyneutral-11",
                                    children: (0, e.jsxs)(Q.s, {
                                      direction: "row",
                                      gap: "1",
                                      children: [
                                        (0, ge.xh)(
                                          g.Localize(
                                            "#AppPage_Curator_By",
                                            t.name,
                                          ),
                                          (0, e.jsx)(L.Ii, { href: t.link }),
                                        ),
                                        (0, He.$z)(s.time_recommended, {
                                          month: "long",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, e.jsxs)(Q.s, {
                                direction: "row",
                                children: [
                                  !!s.received_for_free &&
                                    (0, e.jsx)(Ya, {
                                      strToolTip: g.Localize(
                                        "#AppPage_Curator_ReceivedForFree",
                                      ),
                                      strIcon: "icon_free.png",
                                    }),
                                  !!s.received_compensation &&
                                    (0, e.jsx)(Ya, {
                                      strToolTip: g.Localize(
                                        "#AppPage_Curator_ReceivedCompensation",
                                      ),
                                      strIcon: "icon_compensation.png",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, e.jsx)(uu, { strBlurb: s.blurb }),
                          !i &&
                            (0, e.jsx)(Q.s, {
                              direction: "row",
                              children: (0, e.jsx)(ka, { ...n }),
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
        function ka(n) {
          const { recommendation: t, curator_preferences: s } = n,
            o = Za(t.link_url),
            r = us(t.link_url),
            i = us(s?.discussion_url),
            l = !!o?.iframe || !!o?.image;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              r &&
                (0, e.jsx)(Qa, {
                  strURL: r,
                  bPlayIcon: l,
                  strText: g.Localize(
                    l
                      ? "#AppPage_Curator_WatchFullReview"
                      : "#AppPage_Curator_ReadFullReview",
                  ),
                }),
              i &&
                (0, e.jsx)(Qa, {
                  strURL: i,
                  strText: g.Localize("#AppPage_Curator_Discuss"),
                }),
            ],
          });
        }
        function Ya(n) {
          const { strToolTip: t, strIcon: s } = n;
          return (0, e.jsx)(ft.he, {
            toolTipContent: t,
            children: (0, e.jsx)("div", {
              className: be().CuratorReceived,
              children: (0, e.jsx)("img", {
                src: `${W.TS.IMG_URL}/curators/${s}`,
                alt: "",
              }),
            }),
          });
        }
        function du(n) {
          switch (n.state) {
            case $t.tV.$D:
              return (0, e.jsx)("span", {
                className: (0, D.A)(be().ReviewTitle, be().Recommended),
                children: g.Localize("#AppPage_Curator_Recommended"),
              });
            case $t.tV.qP:
              return (0, e.jsx)("span", {
                className: (0, D.A)(be().ReviewTitle, be().NotRecommended),
                children: g.Localize("#AppPage_Curator_NotRecommended"),
              });
            case $t.tV.y8:
              return (0, e.jsx)("span", {
                className: (0, D.A)(be().ReviewTitle, be().Informational),
                children: g.Localize("#AppPage_Curator_Informational"),
              });
            default:
              return null;
          }
        }
        function uu(n) {
          const t = (n.strBlurb ?? "").split(`
`);
          return t.length == 0
            ? null
            : ((t[0] = g.Localize("#AppPage_Curator_QuoteLeft") + t[0].trim()),
              (t[t.length - 1] =
                t[t.length - 1].trim() +
                g.Localize("#AppPage_Curator_QuoteRight")),
              (0, e.jsx)(S.EY, {
                className: be().BlurbText,
                children: t.map((s, o) =>
                  (0, e.jsx)("div", { children: s }, o),
                ),
              }));
        }
        function Qa(n) {
          const { strURL: t, strText: s, bPlayIcon: o } = n;
          return (0, e.jsx)(ft.he, {
            toolTipContent: t,
            children: (0, e.jsx)(L.Ii, {
              className: (0, D.A)(
                "btnv6_blue_hoverfade",
                "btn_small_thin",
                be().ActionButton,
              ),
              href: t,
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, e.jsxs)("span", {
                children: [
                  o &&
                    (0, e.jsx)("span", {
                      className: be().PlayIcon,
                      children: (0, e.jsx)(Le.jGG, {}),
                    }),
                  s,
                ],
              }),
            }),
          });
        }
        function us(n) {
          if (!n || !/^https?:/.test(n)) return;
          if (!(0, gn.p)(n)) return n;
          const t = (0, gn.E)(n);
          return W.TS.IN_CLIENT ? "steam://openurl_external/" + t : t;
        }
        function Za(n) {
          if (!n) return;
          const t = [
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
          for (const [s, o] of t) {
            const r = n.match(s);
            if (r)
              return {
                iframe: o.iframe?.replace("%s", r[1]),
                image: o.image?.replace("%s", r[1]),
              };
          }
        }
        const pu = c.lazy(() => a.e(85139).then(a.bind(a, 74824))),
          mu = c.lazy(() =>
            Promise.all([
              a.e(36597),
              a.e(87937),
              a.e(10400),
              a.e(56589),
              a.e(85599),
              a.e(33512),
              a.e(18307),
              a.e(79611),
              a.e(94781),
              a.e(80702),
              a.e(48355),
              a.e(60480),
              a.e(97169),
              a.e(5858),
              a.e(63089),
              a.e(1703),
              a.e(33884),
              a.e(13749),
              a.e(13524),
              a.e(51706),
              a.e(88943),
              a.e(10385),
              a.e(94932),
              a.e(73810),
              a.e(14237),
              a.e(79139),
              a.e(34004),
              a.e(53337),
              a.e(23027),
            ]).then(a.bind(a, 67598)),
          ),
          hu = c.lazy(() =>
            Promise.all([
              a.e(85599),
              a.e(33512),
              a.e(18307),
              a.e(79611),
              a.e(94781),
              a.e(80702),
              a.e(48355),
              a.e(60480),
              a.e(5858),
              a.e(1703),
              a.e(68578),
              a.e(13749),
              a.e(51706),
              a.e(88943),
              a.e(14237),
              a.e(7368),
              a.e(89672),
            ]).then(a.bind(a, 87663)),
          ),
          gu = c.lazy(() =>
            Promise.all([
              a.e(36597),
              a.e(56589),
              a.e(85599),
              a.e(33512),
              a.e(18307),
              a.e(79611),
              a.e(94781),
              a.e(80702),
              a.e(48355),
              a.e(60480),
              a.e(97169),
              a.e(63089),
              a.e(1703),
              a.e(33884),
              a.e(13524),
              a.e(94932),
              a.e(73810),
              a.e(79139),
              a.e(34004),
              a.e(10177),
              a.e(68396),
            ]).then(a.bind(a, 2422)),
          ),
          fu = c.lazy(async () => ({
            default: (await Promise.resolve().then(a.bind(a, 62038)))
              .AccessibilityFeatureDisplay,
          }));
        function xu(n) {
          const { appid: t } = n;
          return (0, e.jsx)($a, {
            children: (0, e.jsx)(Ja, {
              children: (0, e.jsxs)(Oo.QA, {
                eAdultOnlyMediaBehavior: "allowed",
                children: [
                  (0, e.jsx)(qt.X, {
                    config: {
                      "events-row": () =>
                        (0, e.jsx)(Is.d, {
                          children: (0, e.jsx)(Ue, { appid: t }),
                        }),
                      "deck-topplayed-banner": (s) => (0, e.jsx)(Ro, { ...s }),
                      "steamawardsvote-embed": () =>
                        (0, e.jsx)(mu, { appID: t }),
                      "demo-and-quick-pitch": () =>
                        (0, e.jsx)(Is.d, {
                          children: (0, e.jsx)(eo, { appID: t }),
                        }),
                      "deck-verified-results": (s) =>
                        (0, e.jsx)(Yr, {
                          appID: t,
                          results: (0, Cs.Tc)(
                            "hardwarecompatibility",
                            "application_config",
                          ),
                          appName: (0, Cs.Tc)("appname", "application_config"),
                          ...s,
                        }),
                      "gamehighlight-trailer": (s) => (0, e.jsx)(xo, { ...s }),
                      "gamehighlight-gamepadcarousel": (s) =>
                        (0, e.jsx)(Vo, { ...s }),
                      "gamehighlight-desktopcarousel": (s) =>
                        (0, e.jsx)(br, { ...s }),
                      "discovery-queue-app-widget": () =>
                        (0, e.jsx)(hu, { appID: t }),
                      "game-notice-controller-required": () =>
                        (0, e.jsx)(Tn, {
                          appid: t,
                          type: en.EPurchaseNoticeType_ControllerRequired,
                        }),
                      "game-notice-vr-required": () =>
                        (0, e.jsx)(Tn, {
                          type: en.EPurchaseNoticeType_VRRequired,
                        }),
                      "game-notice-vr-supported": () =>
                        (0, e.jsx)(Tn, {
                          type: en.EPurchaseNoticeType_VRSupported,
                        }),
                      "season-pass-display": (s) => (0, e.jsx)(pu, { ...s }),
                      "storeitems-carousel": (s) =>
                        (0, e.jsx)(zt.Ay, {
                          feature: "recommended",
                          children: (0, e.jsx)(Ps.default, { ...s }),
                        }),
                      "storeitems-carousel-dlc": (s) =>
                        (0, e.jsx)(zt.Ay, {
                          feature: "dlc",
                          children: (0, e.jsx)(Ps.default, { ...s }),
                        }),
                      "creatorhome-carousel": (s) =>
                        (0, e.jsx)(zt.Ay, {
                          feature: "creator",
                          children: (0, e.jsx)(uo, { ...s }),
                        }),
                      parentappwidget: (s) =>
                        (0, e.jsx)(zt.Ay, {
                          feature: s.feature,
                          children: (0, e.jsx)(Fo, { appid: s.appid }),
                        }),
                      appreviews: (s) => (0, e.jsx)(Qr.l, { ...s }),
                      "wishlist-item-categories": (s) =>
                        (0, e.jsx)(ri, { ...s }),
                      "purchase-options": (s) => (0, e.jsx)(Rl, { ...s }),
                      "purchase-options-dlc": (s) =>
                        (0, e.jsx)(zt.Ay, {
                          feature: "game-purchase-dlc",
                          children: (0, e.jsx)(ql, { ...s, appid: t }),
                        }),
                      "summary-bar-top": (s) => (0, e.jsx)(oc, { ...s }),
                      "features-section": (s) =>
                        (0, e.jsx)(Bc, { ...s, appid: t }),
                      "about-this-game": () => (0, e.jsx)(xc, { appid: t }),
                      "page-sections": () => (0, e.jsx)(yc, { appid: t }),
                      "legal-notice": () => (0, e.jsx)(Pc, { appid: t }),
                      "music-album-details": (s) =>
                        (0, e.jsx)($c, { ...s, appid: t }),
                      "interest-buttons": (s) => (0, e.jsx)(rd, { appid: t }),
                      "add-to-wishlist": (s) =>
                        (0, e.jsx)($n, { ...s, color: "storegreen" }),
                      "recommendation-reasons": (s) =>
                        (0, e.jsx)(Md, { ...s, appid: t }),
                      "referring-curator-review": (s) =>
                        (0, e.jsx)(cu, { ...s }),
                    },
                  }),
                  (0, e.jsx)(qt.X, {
                    omitFocusNavTreeBridge: !0,
                    config: {
                      "review-award": () => (0, e.jsx)(So.Ay, {}),
                      "broadcast-embed": (s) =>
                        (0, e.jsx)(gu, { ...n, appid: s.appid }),
                      "store-sidebar-accessibility-info": (s) =>
                        (0, e.jsx)(fu, { features: s }),
                      "store-sidebar-controller-support-info": (s) =>
                        (0, e.jsx)(js, { ...s }),
                    },
                  }),
                ],
              }),
            }),
          });
        }
        function Ja(n) {
          const { children: t } = n,
            [s, o] = c.useState(!1);
          return s
            ? t
            : (0, e.jsx)(qt.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-gameinterest-cache": (r) =>
                    (0, e.jsx)(Go, { ...r, markReady: () => o(!0) }),
                },
              });
        }
        function $a(n) {
          const { children: t } = n,
            [s, o] = c.useState(!1);
          return s
            ? t
            : (0, e.jsx)(qt.X, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-store-browse-cache": (r) =>
                    (0, e.jsx)(mc, { ...r, markReady: () => o(!0) }),
                },
              });
        }
      },
      89611: (y) => {
        y.exports = {
          ObjectFit: "_NIZ2fYFBu6WSnEE1H6i3",
          ObjectPosition: "_3OZ4rrlKzwAYOKP9HdqUrq",
        };
      },
      75180: (y) => {
        y.exports = {
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
      39049: (y) => {
        y.exports = {
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
      58123: (y) => {
        y.exports = {
          SaleTechPriceGrid: "_14x0A0cAhaV-g8Od_xGbRL",
          LowestRecentPrice: "yLlRefh-UYhYZLE0_k-BK",
          FinalPrice: "_3P_1WcsVP8GJKQ8olprKQ2",
        };
      },
      88208: (y) => {
        y.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      5598: (y) => {
        y.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      9246: (y) => {
        y.exports = {
          narrowWidth: "500px",
          AboutThisGame: "zeZyN-4SGkKN1ukmy4_Ns",
          Header: "_2bGVPSkxnJDt2vN54TTfNK",
        };
      },
      56680: (y) => {
        y.exports = { WishlistModalOverride: "_3V4Y44VzkkQWUAtDh6jQfA" };
      },
      8611: (y) => {
        y.exports = {
          narrowWidth: "500px",
          AutoCollapsePanel: "_2OFBKij25NOweLoQKnH-Hl",
          Contents: "_3z2f7_LIqrKVFzXn-nSN98",
          Collapsed: "_2EgdWaUHP8QhQdix9MlF0d",
          Expanded: "_35-z7zCVOx1yWKf8cJjZkH",
          ReadMore: "_1qDLg0KVwgnZmMwUt99Egn",
          ReadMoreBorderPulse: "_4w9-SNzzdsOMsBG-Ztqf4",
          FocusBar: "WC8nw_mRpkmAmaj7GHVoG",
          AutoCollapsePulse: "_26g-1uv3LcTu-5eGjLp_dP",
        };
      },
      78747: (y) => {
        y.exports = {
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
      26666: (y) => {
        y.exports = {
          Pack: "_1jiAiKcI7kT5n1ZJuBz3OB",
          PackBody: "_1zq333d3pW7338j8MOxfoG",
          PackInLibrary: "_1-sgh5Na-U3TZmO_toUckA",
          PackCapsulesCtn: "_2jS1JS0vHcRTtKK5vN9bGo",
          PackCapsules: "CfSj_bx6zkyciRhJhRV4c",
          PackCapsulesCollapsed: "_3BI6mqK_SNTj5MBr8unOIZ",
          PackCapsule: "_3Cmt3xhzt5m1iqRlGl85t2",
          PackActionGroup: "_1_rYPVtMNifGny-euMweMD",
        };
      },
      16071: (y) => {
        y.exports = {
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
      55367: (y) => {
        y.exports = {
          FeaturesHeader: "_2vQT0AgFmnLEuve59-iug3",
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
      19218: (y) => {
        y.exports = {
          WidestChildContainer: "_3YUWXt-ylyufqMm-YAliva",
          Hidden: "_29niryxpei49tSjYOBokyK",
        };
      },
      45200: (y) => {
        y.exports = { LegalNotice: "_2bOEuokOOajSeGl2yZEcPh" };
      },
      76985: (y) => {
        y.exports = {
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
      95036: (y) => {
        y.exports = {
          AppList: "_3WieBjkVb28rpePKxyn3gl",
          AppImages: "_2cKkqSc2Aw1kr_8SzTKYNF",
          PlatformIcons: "Wd0ssUN-E1g_6nF5cApwN",
          PlatformIcon: "_2_NmZjBVcuMKTZkfsRP_HD",
          DiscountAndPrice: "_2ooDkAkePuzL0kjqCaU2lR",
        };
      },
      54652: (y) => {
        y.exports = { PurchaseOptionBanner: "_1P2U635xpdOLT2_aa1xwdL" };
      },
      21763: (y) => {
        y.exports = {
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
      97393: (y) => {
        y.exports = {
          PlatformIcons: "_34fO3Y9HSHm3JfPdMRIf8m",
          PlatformIcon: "_27rt4wNpnea7jUH3nWwj8m",
        };
      },
      59869: (y) => {
        y.exports = { MenuItem: "_3VWkkleXCrqxmjyoSCylnk" };
      },
      14844: (y) => {
        y.exports = {
          PageSections: "_1_PU6_24UNZMD-aymVilmB",
          PageSection: "_2WpiheNBkhzJpmxQ4Arawu",
          Header: "y5728HUyiI5XdCDBm5D7A",
          Banner: "_3hkPxq8NpEEOtbG7MPXNUy",
        };
      },
      18574: (y) => {
        y.exports = {
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
      77774: (y) => {
        y.exports = {
          ComingSoon: "VcfhtxgxhXCS5YBzd4O22",
          OffsitePrice: "_3nVt7tQlJcd-SJe7k_lDmO",
          Content: "yN2IR7l0MpF7rTD6dlS9f",
          Reminder: "_2KJX1jAw_ha_T3Dv2bDULi",
          Note: "rM8RXPAb9DnacUnfXKjkg",
          Preload: "_2uqsForJwTJzUiCcKC6WK7",
          PreloadActions: "_8FtJtmmrluBTGIheOirY_",
        };
      },
      23413: (y) => {
        y.exports = { AppList: "_1MVRGLawsCpcXLFlFkKAGL" };
      },
      60993: (y) => {
        y.exports = {
          narrowWidth: "500px",
          RecommendationReasonsDisplay: "_8A-vhpEBdS-qVF5Jl9jc7",
          Header: "_37F_eUYhbVWVvWWgkfRkqf",
          ReviewScore: "DpGN2-UG7sEXIZDAb2xtu",
          Positive: "_1kiOvqf3wN3kBFxMVI8w-3",
          Negative: "_1UTMsJhG80MMvkig6Pw7UN",
        };
      },
      54629: (y) => {
        y.exports = {
          AppList: "_12s81WYtM0B0CmDPB6BMY0",
          AppIconAndName: "_3CcmNvL8ajAAtVfsoFxFRA",
          AppIcon: "_1abKISd0PdmRu72s9yPT6D",
          AppName: "_2VU-DDzaxFtQJqLuyn0IQw",
        };
      },
      2699: (y) => {
        y.exports = { AvatarList: "fIVYEi9n1QY4vaQuxZYW0" };
      },
      13290: (y) => {
        y.exports = {
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
      57102: (y) => {
        y.exports = {
          TagList: "_3jV1ymbnCcg8o3qq78ndN7",
          Tag: "gctfUSqAf4-wM1_s7LW7C",
        };
      },
      3471: (y) => {
        y.exports = {
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
      33001: (y) => {
        y.exports = {
          narrowWidth: "500px",
          StorePageBBCode: "_3n5Cn3P3AZI_zLOe5_jB9D",
          StoreImage: "L_7jPXkXscN-QxB458CKV",
          StoreVideo: "_1SedSl74BXCZ_7ixbPl5ml",
        };
      },
      48205: (y) => {
        y.exports = {
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
      31518: (y) => {
        y.exports = {
          CategoriesMenuOption: "_2-cvnCNnFqBG5u89enudpK",
          Label: "KldL9MJqWdVCahi3zvX-E",
          HeaderCtn: "_3WNoErKGw4jngFeVPfTZfs",
        };
      },
      37520: (y) => {
        y.exports = {
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
      46146: (y) => {
        y.exports = {
          wishlistCategoryMaxDisplayChars: "30",
          CategoriesCtn: "_1Ua4366mxFvXUSFTfIlJ-i",
          CategoryListHeader: "_3Ra2jK42XFbrJlIPtsmMfC",
          CategoryList: "_1FrjJkMKzXxdevx_oYK2Nx",
          Multiline: "_16SkCu-YheGIHn8_WtMVnd",
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
      6019: (y) => {
        y.exports = {
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
      12037: (y) => {
        y.exports = {
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
      97824: (y) => {
        y.exports = {
          OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
          OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
          ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
          BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
          BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
          BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
          BannerButton: "_1jso7z80FWGn42k1HP0_cf",
        };
      },
      27510: (y) => {
        y.exports = {
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
      63404: (y) => {
        y.exports = {
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
      17479: (y) => {
        y.exports = {
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
      51249: (y) => {
        y.exports = {
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
      94846: (y) => {
        y.exports = {
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
      1205: (y) => {
        y.exports = {
          narrowWidth: "500px",
          Header: "kR_xyFf2ghgC-Jexsw_5v",
          FullWidth: "_263kQddRJk-a3OP3ANz0Bv",
          StoreItemsCarousel: "_2BG1JKMgeqn_cr0rbRhRNA",
          StorePageCarousel: "_1wsWr6qsx_k-ElMmSpGcf",
          Title: "_2BGZunVy7Z0-h18owewCzo",
        };
      },
      89524: (y) => {
        y.exports = {
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
      15955: (y) => {
        y.exports = {
          storeNarrowResponsiveWidth: "910px",
          TheaterDialog: "_2LTQCvpGyFO806nkXurNE3",
          TheaterModeHeader: "_1i4ygMVdcBqF0ARYxp_tk5",
          TheaterModeFooter: "_3KpVJvYK0Kg4JlezHipbO-",
          TheaterModeFrame: "_3xAL780ykDyLO-xDuTgjHr",
          Center: "_3KPRxtJAJXmOtkgDn495Ra",
          Right: "_1-rpRk5iDBLQ9Yr8gAOLVg",
          SkeletonViewArea: "_18mK2DQSWK6rhEoF3BiGlf",
          TheaterMode: "_2M5VHVoDj7cEeG_Sq9Nfxp",
          ItemViewArea: "_7uoIsggaW3jDWxwMtlOy8",
          FullscreenArrow: "KkkFLdIE4YTPfdeoIQoo2",
          Visible: "_3q0hI5sbgcmpVuwBKatnhv",
          Next: "_2XmwxD18W2cEXHlvhYbcyJ",
          Previous: "_1EBlS2FQmejekYhQDC-Kmh",
          ViewedItem: "_29RD-6nVM1ZsiWWlkICHj_",
          Active: "_12fD6HsYoCTsLA50fqBiX9",
          Screenshot: "_3R7Y3WNTdNhOgbZ21bs9xD",
          PageEmbedded: "Oh37M-rKB_EeqpigY-fF_",
          Controls: "_1-KK-_5TKZfLdri4MpeGD8",
        };
      },
      37216: (y) => {
        y.exports = {
          StripSkeleton: "_10CMdNEAjTNQ2B8FYmuDDv",
          TheaterMode: "_2Cx8GckLIvEMflF7fc-JYz",
          Items: "_3RaF9xdu3xYnya4v856Hd2",
          Scrollbar: "_1KWgAv5EXrGMLZ7T77kOxk",
          Strip: "_3iK8kx5bYvc5UXmW7XZh5V",
          StripItems: "_21pEuTVe17EOUzkHK8ZGnJ",
          Item: "deMuRscIE7upszCfACmbK",
          PlayIcon: "_3p2KFN7o1Z8EV4_sbV5b25",
          Active: "_3VIimult0z05qCgQN1CfPg",
          StripScrollbar: "_1DvsO7ezbpz3pIVBWOLOzF",
          Arrow: "_2LR-6h1uKQt4bj21r14zy5",
          Track: "IJs3gGlk7XiekF90xqQtx",
          Thumb: "_2kGps6wpqMKuwW2LinnWW6",
        };
      },
      70600: (y) => {
        y.exports = {
          TheaterDialog: "eAntzEAgQPDbynwFmCjT6",
          FocusRingRoot: "_3SseNLlWRUSh4WLnN2aLYa",
          FocusRingClip: "_2N2pOqeMRNyt7Ov6byou1W",
          GamepadCarousel: "_37QdQ9pnGu3WgatTPnOP1D",
          CarouselItem: "_3eFhSH3a_Uh0AF_AWuqHjR",
          StillPoster: "_3dXa0LwyVTHtiDmLdQMWRf",
          VideoStarted: "tN78A9Uh28E1x212ny6Yq",
          Poster: "_1V_gSi1f7czrRSVL0vnsdx",
          Icon: "_2EVWyymrYul8YWhcdwdPl3",
          TitleCard: "_1nLEdpxu_F32ex_rg0_jew",
          Bottom: "_12CljMZ1pAd-gKKiVB5Wxc",
          SingleFileTrailer: "_3pzTJNRx9UoRhXeeA2IisY",
          Screenshot: "_3MyKwsurcFxFwiLabbudSk",
          DashTrailer: "_1Aoum4NTlVVCFiiAiXQbkQ",
          BottomRow: "_3w6DlMoNcBYJowmTkPUvRh",
          WishlistButton: "_3zsPA4_Sk0JUb1auieWgUJ",
          StarIcon: "t1LMouAzeAadJbWvMJbdH",
          ButtonIcon: "_1cugSsUJQZgGaT5y3eMrQo",
        };
      },
      61723: (y) => {
        y.exports = {
          TopPlayedBannerCtn: "_28-JzhtXHYEcY9I5iFk3YP",
          DeckLogo: "E-ox_4OryQdke1181LNoB",
          BannerTitle: "s1wKhoJ4gbSLtf27P3_EZ",
          BannerRightContent: "_34ZA0IltnucVU_mKBtcc8E",
          BannerHeader: "_2whUPn_CZ5_BidCN9GODA5",
          BannerGameText: "OXgVBMVdP9Ecu6IgqZ3_n",
          Adventurer: "raNwGKfW_4_WgrvVN7dq_",
          Anime: "EwXMZcXfMhx8IXHsX2jwt",
          Apocalypse: "IXTWgAQld_EMABNkCGbWH",
          Astronaut: "LNbx62cQQ_D4Ln0UFRSZR",
          Beach: "_3PDsNvk9wHPIT_meJVEv39",
          Bed: "_3diT7BTktlk0puAWr6yL9w",
          Bus: "lZhhgVZvpy277i5CIZsxv",
          BusStop: "_3uXZSulc-St3wA_mxmp0A_",
          Campfire: "yBV0Z8rYkNE2hhalghMvt",
          Car: "_2Z4fMLt-xMQ9mMYQ6F8Apk",
          City: "ZNsKNiDvYdo0fdE1DD7M0",
          Family: "f5iMmXzfk0F0i8JDhk-0G",
          Farmer: "_34SPdiHy-XcKAe7xr1tUCM",
          Knight: "_3LVfeJCSquA6caK-yXajmH",
          Miner: "_1YxR3MFhDWSooqc0R5jKLw",
          Porch: "_2z91XhCKqvwmYqkRndpTq3",
          Robot: "_1jvo4urjLahEQx0CgrItEb",
          Superhero: "_2v6byLboEtxj9hPQ_kgSJz",
          Woodsman: "urO4erFoFvnP14FJ41NMD",
          Zombies: "_3OCIBFe-fNBm1tXmL490m4",
        };
      },
    },
  ]);
})();
