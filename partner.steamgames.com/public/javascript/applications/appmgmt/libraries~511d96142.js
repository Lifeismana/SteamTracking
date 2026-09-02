/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [5193],
    {
      55552: () => {},
      71353: () => {},
      62759: (xs, Dn, bt) => {
        "use strict";
        bt.d(Dn, { b: () => pt });
        var N = bt(98403),
          Ee = bt(90865),
          H = bt(90150),
          L = bt(73077),
          On = bt(12260),
          pt = (0, N.gu)({
            chartName: "LineChart",
            GraphicalChild: Ee.N,
            axisComponents: [
              { axisType: "xAxis", AxisComp: H.W },
              { axisType: "yAxis", AxisComp: L.h },
            ],
            formatAxisMap: On.pr,
          });
      },
      47316: (xs, Dn, bt) => {
        "use strict";
        bt.d(Dn, {
          h7: () => cr,
          Gc: () => Qn,
          Ln: () => Br,
          fM: () => ei,
          ck: () => Js,
          PF: () => Ks,
        });
        var N = bt(7850);
        function Ee(r) {
          if (typeof r == "string" || typeof r == "number") return "" + r;
          let u = "";
          if (Array.isArray(r))
            for (let f = 0, y; f < r.length; f++)
              (y = Ee(r[f])) !== "" && (u += (u && " ") + y);
          else for (let f in r) r[f] && (u += (u && " ") + f);
          return u;
        }
        var H = bt(81451),
          L = bt(90626),
          On = bt(72648);
        const pt = (r) => {
            let u;
            const f = new Set(),
              y = (W, v) => {
                const S = typeof W == "function" ? W(u) : W;
                if (!Object.is(S, u)) {
                  const P = u;
                  (u =
                    (v ?? (typeof S != "object" || S === null))
                      ? S
                      : Object.assign({}, u, S)),
                    f.forEach((I) => I(u, P));
                }
              },
              E = () => u,
              X = {
                setState: y,
                getState: E,
                getInitialState: () => V,
                subscribe: (W) => (f.add(W), () => f.delete(W)),
                destroy: () => {
                  console.warn(
                    "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
                  ),
                    f.clear();
                },
              },
              V = (u = r(y, E, X));
            return X;
          },
          $t = (r) => (r ? pt(r) : pt);
        var tn = (r) => (
          console.warn(
            "[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.",
          ),
          $t(r)
        );
        const { useDebugValue: Ct } = L,
          { useSyncExternalStoreWithSelector: Ht } = On,
          rn = (r) => r;
        function Ft(r, u = rn, f) {
          const y = Ht(
            r.subscribe,
            r.getState,
            r.getServerState || r.getInitialState,
            u,
            f,
          );
          return Ct(y), y;
        }
        const Bn = (r, u) => {
            const f = $t(r),
              y = (E, x = u) => Ft(f, E, x);
            return Object.assign(y, f), y;
          },
          zn = (r, u) => (r ? Bn(r, u) : Bn);
        function rt(r, u) {
          if (Object.is(r, u)) return !0;
          if (
            typeof r != "object" ||
            r === null ||
            typeof u != "object" ||
            u === null
          )
            return !1;
          if (r instanceof Map && u instanceof Map) {
            if (r.size !== u.size) return !1;
            for (const [y, E] of r) if (!Object.is(E, u.get(y))) return !1;
            return !0;
          }
          if (r instanceof Set && u instanceof Set) {
            if (r.size !== u.size) return !1;
            for (const y of r) if (!u.has(y)) return !1;
            return !0;
          }
          const f = Object.keys(r);
          if (f.length !== Object.keys(u).length) return !1;
          for (const y of f)
            if (
              !Object.prototype.hasOwnProperty.call(u, y) ||
              !Object.is(r[y], u[y])
            )
              return !1;
          return !0;
        }
        var wn = (r, u) => (
            console.warn(
              "[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`.",
            ),
            rt(r, u)
          ),
          Xn = bt(72739);
        const on = (0, L.createContext)(null),
          xn = on.Provider,
          vn = H.xc.error001();
        function Re(r, u) {
          const f = (0, L.useContext)(on);
          if (f === null) throw new Error(vn);
          return Ft(f, r, u);
        }
        function ot() {
          const r = (0, L.useContext)(on);
          if (r === null) throw new Error(vn);
          return (0, L.useMemo)(
            () => ({
              getState: r.getState,
              setState: r.setState,
              subscribe: r.subscribe,
            }),
            [r],
          );
        }
        const Wn = { display: "none" },
          Hn = {
            position: "absolute",
            width: 1,
            height: 1,
            margin: -1,
            border: 0,
            padding: 0,
            overflow: "hidden",
            clip: "rect(0px, 0px, 0px, 0px)",
            clipPath: "inset(100%)",
          },
          _n = "react-flow__node-desc",
          bn = "react-flow__edge-desc",
          G = "react-flow__aria-live",
          q = (r) => r.ariaLiveMessage;
        function K({ rfId: r }) {
          const u = Re(q);
          return (0, N.jsx)("div", {
            id: `${G}-${r}`,
            "aria-live": "assertive",
            "aria-atomic": "true",
            style: Hn,
            children: u,
          });
        }
        function k({ rfId: r, disableKeyboardA11y: u }) {
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsxs)("div", {
                id: `${_n}-${r}`,
                style: Wn,
                children: [
                  "Press enter or space to select a node.",
                  !u &&
                    "You can then use the arrow keys to move the node around.",
                  " Press delete to remove it and escape to cancel.",
                  " ",
                ],
              }),
              (0, N.jsx)("div", {
                id: `${bn}-${r}`,
                style: Wn,
                children:
                  "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
              }),
              !u && (0, N.jsx)(K, { rfId: r }),
            ],
          });
        }
        const B = (r) => (r.userSelectionActive ? "none" : "all"),
          ne = (0, L.forwardRef)(
            (
              {
                position: r = "top-left",
                children: u,
                className: f,
                style: y,
                ...E
              },
              x,
            ) => {
              const z = Re(B),
                R = `${r}`.split("-");
              return (0, N.jsx)("div", {
                className: Ee(["react-flow__panel", f, ...R]),
                style: { ...y, pointerEvents: z },
                ref: x,
                ...E,
                children: u,
              });
            },
          );
        function ae({ proOptions: r, position: u = "bottom-right" }) {
          return r?.hideAttribution
            ? null
            : (0, N.jsx)(ne, {
                position: u,
                className: "react-flow__attribution",
                "data-message":
                  "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",
                children: (0, N.jsx)("a", {
                  href: "https://reactflow.dev",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  "aria-label": "React Flow attribution",
                  children: "React Flow",
                }),
              });
        }
        const Oe = (r) => {
            const u = [],
              f = [];
            for (const [, y] of r.nodeLookup)
              y.selected && u.push(y.internals.userNode);
            for (const [, y] of r.edgeLookup) y.selected && f.push(y);
            return { selectedNodes: u, selectedEdges: f };
          },
          we = (r) => r.id;
        function ye(r, u) {
          return (
            rt(r.selectedNodes.map(we), u.selectedNodes.map(we)) &&
            rt(r.selectedEdges.map(we), u.selectedEdges.map(we))
          );
        }
        function ve({ onSelectionChange: r }) {
          const u = ot(),
            { selectedNodes: f, selectedEdges: y } = Re(Oe, ye);
          return (
            (0, L.useEffect)(() => {
              const E = { nodes: f, edges: y };
              r?.(E),
                u.getState().onSelectionChangeHandlers.forEach((x) => x(E));
            }, [f, y, r]),
            null
          );
        }
        const tt = (r) => !!r.onSelectionChangeHandlers;
        function it({ onSelectionChange: r }) {
          const u = Re(tt);
          return r || u ? (0, N.jsx)(ve, { onSelectionChange: r }) : null;
        }
        const Et = [0, 0],
          mt = { x: 0, y: 0, zoom: 1 },
          Xt = [
            ...[
              "nodes",
              "edges",
              "defaultNodes",
              "defaultEdges",
              "onConnect",
              "onConnectStart",
              "onConnectEnd",
              "onClickConnectStart",
              "onClickConnectEnd",
              "nodesDraggable",
              "nodesConnectable",
              "nodesFocusable",
              "edgesFocusable",
              "edgesReconnectable",
              "elevateNodesOnSelect",
              "elevateEdgesOnSelect",
              "minZoom",
              "maxZoom",
              "nodeExtent",
              "onNodesChange",
              "onEdgesChange",
              "elementsSelectable",
              "connectionMode",
              "snapGrid",
              "snapToGrid",
              "translateExtent",
              "connectOnClick",
              "defaultEdgeOptions",
              "fitView",
              "fitViewOptions",
              "onNodesDelete",
              "onEdgesDelete",
              "onDelete",
              "onNodeDrag",
              "onNodeDragStart",
              "onNodeDragStop",
              "onSelectionDrag",
              "onSelectionDragStart",
              "onSelectionDragStop",
              "onMoveStart",
              "onMove",
              "onMoveEnd",
              "noPanClassName",
              "nodeOrigin",
              "autoPanOnConnect",
              "autoPanOnNodeDrag",
              "onError",
              "connectionRadius",
              "isValidConnection",
              "selectNodesOnDrag",
              "nodeDragThreshold",
              "onBeforeDelete",
              "debug",
              "autoPanSpeed",
              "paneClickDistance",
            ],
            "rfId",
          ],
          ft = (r) => ({
            setNodes: r.setNodes,
            setEdges: r.setEdges,
            setMinZoom: r.setMinZoom,
            setMaxZoom: r.setMaxZoom,
            setTranslateExtent: r.setTranslateExtent,
            setNodeExtent: r.setNodeExtent,
            reset: r.reset,
            setDefaultNodesAndEdges: r.setDefaultNodesAndEdges,
            setPaneClickDistance: r.setPaneClickDistance,
          }),
          vt = {
            translateExtent: H.ZO,
            nodeOrigin: Et,
            minZoom: 0.5,
            maxZoom: 2,
            elementsSelectable: !0,
            noPanClassName: "nopan",
            rfId: "1",
            paneClickDistance: 0,
          };
        function sn(r) {
          const {
              setNodes: u,
              setEdges: f,
              setMinZoom: y,
              setMaxZoom: E,
              setTranslateExtent: x,
              setNodeExtent: z,
              reset: R,
              setDefaultNodesAndEdges: X,
              setPaneClickDistance: V,
            } = Re(ft, rt),
            W = ot();
          (0, L.useEffect)(
            () => (
              X(r.defaultNodes, r.defaultEdges),
              () => {
                (v.current = vt), R();
              }
            ),
            [],
          );
          const v = (0, L.useRef)(vt);
          return (
            (0, L.useEffect)(
              () => {
                for (const S of Xt) {
                  const P = r[S],
                    I = v.current[S];
                  P !== I &&
                    (typeof r[S] > "u" ||
                      (S === "nodes"
                        ? u(P)
                        : S === "edges"
                          ? f(P)
                          : S === "minZoom"
                            ? y(P)
                            : S === "maxZoom"
                              ? E(P)
                              : S === "translateExtent"
                                ? x(P)
                                : S === "nodeExtent"
                                  ? z(P)
                                  : S === "paneClickDistance"
                                    ? V(P)
                                    : S === "fitView"
                                      ? W.setState({ fitViewOnInit: P })
                                      : S === "fitViewOptions"
                                        ? W.setState({
                                            fitViewOnInitOptions: P,
                                          })
                                        : W.setState({ [S]: P })));
                }
                v.current = r;
              },
              Xt.map((S) => r[S]),
            ),
            null
          );
        }
        function En() {
          return typeof window > "u" || !window.matchMedia
            ? null
            : window.matchMedia("(prefers-color-scheme: dark)");
        }
        function at(r) {
          const [u, f] = (0, L.useState)(r === "system" ? null : r);
          return (
            (0, L.useEffect)(() => {
              if (r !== "system") {
                f(r);
                return;
              }
              const y = En(),
                E = () => f(y?.matches ? "dark" : "light");
              return (
                E(),
                y?.addEventListener("change", E),
                () => {
                  y?.removeEventListener("change", E);
                }
              );
            }, [r]),
            u !== null ? u : En()?.matches ? "dark" : "light"
          );
        }
        const Rt = typeof document < "u" ? document : null;
        function Pt(
          r = null,
          u = { target: Rt, actInsideInputWithModifier: !0 },
        ) {
          const [f, y] = (0, L.useState)(!1),
            E = (0, L.useRef)(!1),
            x = (0, L.useRef)(new Set([])),
            [z, R] = (0, L.useMemo)(() => {
              if (r !== null) {
                const V = (Array.isArray(r) ? r : [r])
                    .filter((v) => typeof v == "string")
                    .map((v) =>
                      v
                        .replace(
                          "+",
                          `
`,
                        )
                        .replace(
                          `

`,
                          `
+`,
                        )
                        .split(`
`),
                    ),
                  W = V.reduce((v, S) => v.concat(...S), []);
                return [V, W];
              }
              return [[], []];
            }, [r]);
          return (
            (0, L.useEffect)(() => {
              const X = u?.target || Rt;
              if (r !== null) {
                const V = (S) => {
                    if (
                      ((E.current = S.ctrlKey || S.metaKey || S.shiftKey),
                      (!E.current ||
                        (E.current && !u.actInsideInputWithModifier)) &&
                        (0, H.v5)(S))
                    )
                      return !1;
                    const I = Wt(S.code, R);
                    x.current.add(S[I]),
                      Bt(z, x.current, !1) && (S.preventDefault(), y(!0));
                  },
                  W = (S) => {
                    if (
                      (!E.current ||
                        (E.current && !u.actInsideInputWithModifier)) &&
                      (0, H.v5)(S)
                    )
                      return !1;
                    const I = Wt(S.code, R);
                    Bt(z, x.current, !0)
                      ? (y(!1), x.current.clear())
                      : x.current.delete(S[I]),
                      S.key === "Meta" && x.current.clear(),
                      (E.current = !1);
                  },
                  v = () => {
                    x.current.clear(), y(!1);
                  };
                return (
                  X?.addEventListener("keydown", V),
                  X?.addEventListener("keyup", W),
                  window.addEventListener("blur", v),
                  window.addEventListener("contextmenu", v),
                  () => {
                    X?.removeEventListener("keydown", V),
                      X?.removeEventListener("keyup", W),
                      window.removeEventListener("blur", v),
                      window.removeEventListener("contextmenu", v);
                  }
                );
              }
            }, [r, y]),
            f
          );
        }
        function Bt(r, u, f) {
          return r
            .filter((y) => f || y.length === u.size)
            .some((y) => y.every((E) => u.has(E)));
        }
        function Wt(r, u) {
          return u.includes(r) ? "code" : "key";
        }
        const It = () => {
          const r = ot();
          return (0, L.useMemo)(
            () => ({
              zoomIn: (u) => {
                const { panZoom: f } = r.getState();
                return f
                  ? f.scaleBy(1.2, { duration: u?.duration })
                  : Promise.resolve(!1);
              },
              zoomOut: (u) => {
                const { panZoom: f } = r.getState();
                return f
                  ? f.scaleBy(1 / 1.2, { duration: u?.duration })
                  : Promise.resolve(!1);
              },
              zoomTo: (u, f) => {
                const { panZoom: y } = r.getState();
                return y
                  ? y.scaleTo(u, { duration: f?.duration })
                  : Promise.resolve(!1);
              },
              getZoom: () => r.getState().transform[2],
              setViewport: async (u, f) => {
                const {
                  transform: [y, E, x],
                  panZoom: z,
                } = r.getState();
                return z
                  ? (await z.setViewport(
                      { x: u.x ?? y, y: u.y ?? E, zoom: u.zoom ?? x },
                      { duration: f?.duration },
                    ),
                    Promise.resolve(!0))
                  : Promise.resolve(!1);
              },
              getViewport: () => {
                const [u, f, y] = r.getState().transform;
                return { x: u, y: f, zoom: y };
              },
              fitView: (u) => {
                const {
                  nodeLookup: f,
                  minZoom: y,
                  maxZoom: E,
                  panZoom: x,
                  domNode: z,
                } = r.getState();
                if (!x || !z) return Promise.resolve(!1);
                const R = (0, H.YV)(f, u),
                  { width: X, height: V } = (0, H.Eo)(z);
                return (0, H.Pr)(
                  {
                    nodes: R,
                    width: X,
                    height: V,
                    minZoom: y,
                    maxZoom: E,
                    panZoom: x,
                  },
                  u,
                );
              },
              setCenter: async (u, f, y) => {
                const {
                    width: E,
                    height: x,
                    maxZoom: z,
                    panZoom: R,
                  } = r.getState(),
                  X = typeof y?.zoom < "u" ? y.zoom : z,
                  V = E / 2 - u * X,
                  W = x / 2 - f * X;
                return R
                  ? (await R.setViewport(
                      { x: V, y: W, zoom: X },
                      { duration: y?.duration },
                    ),
                    Promise.resolve(!0))
                  : Promise.resolve(!1);
              },
              fitBounds: async (u, f) => {
                const {
                    width: y,
                    height: E,
                    minZoom: x,
                    maxZoom: z,
                    panZoom: R,
                  } = r.getState(),
                  X = (0, H.R4)(u, y, E, x, z, f?.padding ?? 0.1);
                return R
                  ? (await R.setViewport(X, { duration: f?.duration }),
                    Promise.resolve(!0))
                  : Promise.resolve(!1);
              },
              screenToFlowPosition: (u, f = { snapToGrid: !0 }) => {
                const { transform: y, snapGrid: E, domNode: x } = r.getState();
                if (!x) return u;
                const { x: z, y: R } = x.getBoundingClientRect(),
                  X = { x: u.x - z, y: u.y - R };
                return (0, H.Ff)(X, y, f.snapToGrid, E);
              },
              flowToScreenPosition: (u) => {
                const { transform: f, domNode: y } = r.getState();
                if (!y) return u;
                const { x: E, y: x } = y.getBoundingClientRect(),
                  z = (0, H.zj)(u, f);
                return { x: z.x + E, y: z.y + x };
              },
            }),
            [],
          );
        };
        function Lt(r, u) {
          const f = [],
            y = new Map(),
            E = [];
          for (const x of r)
            if (x.type === "add") {
              E.push(x);
              continue;
            } else if (x.type === "remove" || x.type === "replace")
              y.set(x.id, [x]);
            else {
              const z = y.get(x.id);
              z ? z.push(x) : y.set(x.id, [x]);
            }
          for (const x of u) {
            const z = y.get(x.id);
            if (!z) {
              f.push(x);
              continue;
            }
            if (z[0].type === "remove") continue;
            if (z[0].type === "replace") {
              f.push({ ...z[0].item });
              continue;
            }
            const R = { ...x };
            for (const X of z) Xr(X, R);
            f.push(R);
          }
          return (
            E.length &&
              E.forEach((x) => {
                x.index !== void 0
                  ? f.splice(x.index, 0, { ...x.item })
                  : f.push({ ...x.item });
              }),
            f
          );
        }
        function Xr(r, u) {
          switch (r.type) {
            case "select": {
              u.selected = r.selected;
              break;
            }
            case "position": {
              typeof r.position < "u" && (u.position = r.position),
                typeof r.dragging < "u" && (u.dragging = r.dragging);
              break;
            }
            case "dimensions": {
              typeof r.dimensions < "u" &&
                ((u.measured ??= {}),
                (u.measured.width = r.dimensions.width),
                (u.measured.height = r.dimensions.height),
                r.setAttributes &&
                  ((u.width = r.dimensions.width),
                  (u.height = r.dimensions.height))),
                typeof r.resizing == "boolean" && (u.resizing = r.resizing);
              break;
            }
          }
        }
        function Yt(r, u) {
          return Lt(r, u);
        }
        function Er(r, u) {
          return Lt(r, u);
        }
        function an(r, u) {
          return { id: r, type: "select", selected: u };
        }
        function cn(r, u = new Set(), f = !1) {
          const y = [];
          for (const [E, x] of r) {
            const z = u.has(E);
            !(x.selected === void 0 && !z) &&
              x.selected !== z &&
              (f && (x.selected = z), y.push(an(x.id, z)));
          }
          return y;
        }
        function ir({ items: r = [], lookup: u }) {
          const f = [],
            y = new Map(r.map((E) => [E.id, E]));
          for (const [E, x] of r.entries()) {
            const z = u.get(x.id),
              R = z?.internals?.userNode ?? z;
            R !== void 0 &&
              R !== x &&
              f.push({ id: x.id, item: x, type: "replace" }),
              R === void 0 && f.push({ item: x, type: "add", index: E });
          }
          for (const [E] of u)
            y.get(E) === void 0 && f.push({ id: E, type: "remove" });
          return f;
        }
        function Ve(r) {
          return { id: r.id, type: "remove" };
        }
        const Je = (r) => (0, H.oB)(r),
          He = (r) => (0, H.b$)(r);
        function Ue(r) {
          return (0, L.forwardRef)(r);
        }
        const Nt = typeof window < "u" ? L.useLayoutEffect : L.useEffect;
        function Tt(r) {
          const [u, f] = (0, L.useState)(BigInt(0)),
            [y] = (0, L.useState)(() => Vt(() => f((E) => E + BigInt(1))));
          return (
            Nt(() => {
              const E = y.get();
              E.length && (r(E), y.reset());
            }, [u]),
            y
          );
        }
        function Vt(r) {
          let u = [];
          return {
            get: () => u,
            reset: () => {
              u = [];
            },
            push: (f) => {
              u.push(f), r();
            },
          };
        }
        const Kt = (0, L.createContext)(null);
        function Qt({ children: r }) {
          const u = ot(),
            f = (0, L.useCallback)((R) => {
              const {
                nodes: X = [],
                setNodes: V,
                hasDefaultNodes: W,
                onNodesChange: v,
                nodeLookup: S,
              } = u.getState();
              let P = X;
              for (const I of R) P = typeof I == "function" ? I(P) : I;
              W ? V(P) : v && v(ir({ items: P, lookup: S }));
            }, []),
            y = Tt(f),
            E = (0, L.useCallback)((R) => {
              const {
                edges: X = [],
                setEdges: V,
                hasDefaultEdges: W,
                onEdgesChange: v,
                edgeLookup: S,
              } = u.getState();
              let P = X;
              for (const I of R) P = typeof I == "function" ? I(P) : I;
              W ? V(P) : v && v(ir({ items: P, lookup: S }));
            }, []),
            x = Tt(E),
            z = (0, L.useMemo)(() => ({ nodeQueue: y, edgeQueue: x }), []);
          return (0, N.jsx)(Kt.Provider, { value: z, children: r });
        }
        function fn() {
          const r = (0, L.useContext)(Kt);
          if (!r)
            throw new Error(
              "useBatchContext must be used within a BatchProvider",
            );
          return r;
        }
        const ln = (r) => !!r.panZoom;
        function Jt() {
          const r = It(),
            u = ot(),
            f = fn(),
            y = Re(ln),
            E = (0, L.useMemo)(() => {
              const x = (v) => u.getState().nodeLookup.get(v),
                z = (v) => {
                  f.nodeQueue.push(v);
                },
                R = (v) => {
                  f.edgeQueue.push(v);
                },
                X = (v) => {
                  const { nodeLookup: S, nodeOrigin: P } = u.getState(),
                    I = Je(v) ? v : S.get(v.id),
                    F = I.parentId
                      ? (0, H.us)(I.position, I.measured, I.parentId, S, P)
                      : I.position,
                    Q = {
                      ...I,
                      position: F,
                      width: I.measured?.width ?? I.width,
                      height: I.measured?.height ?? I.height,
                    };
                  return (0, H.kM)(Q);
                },
                V = (v, S, P = { replace: !1 }) => {
                  z((I) =>
                    I.map((F) => {
                      if (F.id === v) {
                        const Q = typeof S == "function" ? S(F) : S;
                        return P.replace && Je(Q) ? Q : { ...F, ...Q };
                      }
                      return F;
                    }),
                  );
                },
                W = (v, S, P = { replace: !1 }) => {
                  R((I) =>
                    I.map((F) => {
                      if (F.id === v) {
                        const Q = typeof S == "function" ? S(F) : S;
                        return P.replace && He(Q) ? Q : { ...F, ...Q };
                      }
                      return F;
                    }),
                  );
                };
              return {
                getNodes: () => u.getState().nodes.map((v) => ({ ...v })),
                getNode: (v) => x(v)?.internals.userNode,
                getInternalNode: x,
                getEdges: () => {
                  const { edges: v = [] } = u.getState();
                  return v.map((S) => ({ ...S }));
                },
                getEdge: (v) => u.getState().edgeLookup.get(v),
                setNodes: z,
                setEdges: R,
                addNodes: (v) => {
                  const S = Array.isArray(v) ? v : [v];
                  f.nodeQueue.push((P) => [...P, ...S]);
                },
                addEdges: (v) => {
                  const S = Array.isArray(v) ? v : [v];
                  f.edgeQueue.push((P) => [...P, ...S]);
                },
                toObject: () => {
                  const {
                      nodes: v = [],
                      edges: S = [],
                      transform: P,
                    } = u.getState(),
                    [I, F, Q] = P;
                  return {
                    nodes: v.map((J) => ({ ...J })),
                    edges: S.map((J) => ({ ...J })),
                    viewport: { x: I, y: F, zoom: Q },
                  };
                },
                deleteElements: async ({ nodes: v = [], edges: S = [] }) => {
                  const {
                      nodes: P,
                      edges: I,
                      onNodesDelete: F,
                      onEdgesDelete: Q,
                      triggerNodeChanges: J,
                      triggerEdgeChanges: ie,
                      onDelete: Y,
                      onBeforeDelete: ce,
                    } = u.getState(),
                    { nodes: fe, edges: Te } = await (0, H.Tq)({
                      nodesToRemove: v,
                      edgesToRemove: S,
                      nodes: P,
                      edges: I,
                      onBeforeDelete: ce,
                    }),
                    Le = Te.length > 0,
                    Ke = fe.length > 0;
                  if (Le) {
                    const Fe = Te.map(Ve);
                    Q?.(Te), ie(Fe);
                  }
                  if (Ke) {
                    const Fe = fe.map(Ve);
                    F?.(fe), J(Fe);
                  }
                  return (
                    (Ke || Le) && Y?.({ nodes: fe, edges: Te }),
                    { deletedNodes: fe, deletedEdges: Te }
                  );
                },
                getIntersectingNodes: (v, S = !0, P) => {
                  const I = (0, H.mW)(v),
                    F = I ? v : X(v),
                    Q = P !== void 0;
                  return F
                    ? (P || u.getState().nodes).filter((J) => {
                        const ie = u.getState().nodeLookup.get(J.id);
                        if (
                          ie &&
                          !I &&
                          (J.id === v.id || !ie.internals.positionAbsolute)
                        )
                          return !1;
                        const Y = (0, H.kM)(Q ? J : ie),
                          ce = (0, H.X6)(Y, F);
                        return (S && ce > 0) || ce >= F.width * F.height;
                      })
                    : [];
                },
                isNodeIntersecting: (v, S, P = !0) => {
                  const F = (0, H.mW)(v) ? v : X(v);
                  if (!F) return !1;
                  const Q = (0, H.X6)(F, S);
                  return (P && Q > 0) || Q >= F.width * F.height;
                },
                updateNode: V,
                updateNodeData: (v, S, P = { replace: !1 }) => {
                  V(
                    v,
                    (I) => {
                      const F = typeof S == "function" ? S(I) : S;
                      return P.replace
                        ? { ...I, data: F }
                        : { ...I, data: { ...I.data, ...F } };
                    },
                    P,
                  );
                },
                updateEdge: W,
                updateEdgeData: (v, S, P = { replace: !1 }) => {
                  W(
                    v,
                    (I) => {
                      const F = typeof S == "function" ? S(I) : S;
                      return P.replace
                        ? { ...I, data: F }
                        : { ...I, data: { ...I.data, ...F } };
                    },
                    P,
                  );
                },
                getNodesBounds: (v) => {
                  const { nodeLookup: S, nodeOrigin: P } = u.getState();
                  return (0, H.Jo)(v, { nodeLookup: S, nodeOrigin: P });
                },
                getHandleConnections: ({ type: v, id: S, nodeId: P }) =>
                  Array.from(
                    u
                      .getState()
                      .connectionLookup.get(`${P}-${v}-${S ?? null}`)
                      ?.values() ?? [],
                  ),
              };
            }, []);
          return (0, L.useMemo)(
            () => ({ ...E, ...r, viewportInitialized: y }),
            [y],
          );
        }
        const Sr = (r) => r.selected,
          Wr = { actInsideInputWithModifier: !1 },
          Cr = typeof window < "u" ? window : void 0;
        function Yn({ deleteKeyCode: r, multiSelectionKeyCode: u }) {
          const f = ot(),
            { deleteElements: y } = Jt(),
            E = Pt(r, Wr),
            x = Pt(u, { target: Cr });
          (0, L.useEffect)(() => {
            if (E) {
              const { edges: z, nodes: R } = f.getState();
              y({ nodes: R.filter(Sr), edges: z.filter(Sr) }),
                f.setState({ nodesSelectionActive: !1 });
            }
          }, [E]),
            (0, L.useEffect)(() => {
              f.setState({ multiSelectionActive: x });
            }, [x]);
        }
        function ar(r) {
          const u = ot();
          (0, L.useEffect)(() => {
            const f = () => {
              if (!r.current) return !1;
              const y = (0, H.Eo)(r.current);
              (y.height === 0 || y.width === 0) &&
                u.getState().onError?.("004", H.xc.error004()),
                u.setState({ width: y.width || 500, height: y.height || 500 });
            };
            if (r.current) {
              f(), window.addEventListener("resize", f);
              const y = new ResizeObserver(() => f());
              return (
                y.observe(r.current),
                () => {
                  window.removeEventListener("resize", f),
                    y && r.current && y.unobserve(r.current);
                }
              );
            }
          }, []);
        }
        const Ln = {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          },
          vs = (r) => ({
            userSelectionActive: r.userSelectionActive,
            lib: r.lib,
          });
        function yo({
          onPaneContextMenu: r,
          zoomOnScroll: u = !0,
          zoomOnPinch: f = !0,
          panOnScroll: y = !1,
          panOnScrollSpeed: E = 0.5,
          panOnScrollMode: x = H.ny.Free,
          zoomOnDoubleClick: z = !0,
          panOnDrag: R = !0,
          defaultViewport: X,
          translateExtent: V,
          minZoom: W,
          maxZoom: v,
          zoomActivationKeyCode: S,
          preventScrolling: P = !0,
          children: I,
          noWheelClassName: F,
          noPanClassName: Q,
          onViewportChange: J,
          isControlledViewport: ie,
          paneClickDistance: Y,
        }) {
          const ce = ot(),
            fe = (0, L.useRef)(null),
            { userSelectionActive: Te, lib: Le } = Re(vs, rt),
            Ke = Pt(S),
            Fe = (0, L.useRef)();
          ar(fe);
          const De = (0, L.useCallback)(
            (ct) => {
              J?.({ x: ct[0], y: ct[1], zoom: ct[2] }),
                ie || ce.setState({ transform: ct });
            },
            [J, ie],
          );
          return (
            (0, L.useEffect)(() => {
              if (fe.current) {
                Fe.current = (0, H.kO)({
                  domNode: fe.current,
                  minZoom: W,
                  maxZoom: v,
                  translateExtent: V,
                  viewport: X,
                  paneClickDistance: Y,
                  onDraggingChange: (qe) => ce.setState({ paneDragging: qe }),
                  onPanZoomStart: (qe, We) => {
                    const { onViewportChangeStart: Xe, onMoveStart: et } =
                      ce.getState();
                    et?.(qe, We), Xe?.(We);
                  },
                  onPanZoom: (qe, We) => {
                    const { onViewportChange: Xe, onMove: et } = ce.getState();
                    et?.(qe, We), Xe?.(We);
                  },
                  onPanZoomEnd: (qe, We) => {
                    const { onViewportChangeEnd: Xe, onMoveEnd: et } =
                      ce.getState();
                    et?.(qe, We), Xe?.(We);
                  },
                });
                const { x: ct, y: dt, zoom: st } = Fe.current.getViewport();
                return (
                  ce.setState({
                    panZoom: Fe.current,
                    transform: [ct, dt, st],
                    domNode: fe.current.closest(".react-flow"),
                  }),
                  () => {
                    Fe.current?.destroy();
                  }
                );
              }
            }, []),
            (0, L.useEffect)(() => {
              Fe.current?.update({
                onPaneContextMenu: r,
                zoomOnScroll: u,
                zoomOnPinch: f,
                panOnScroll: y,
                panOnScrollSpeed: E,
                panOnScrollMode: x,
                zoomOnDoubleClick: z,
                panOnDrag: R,
                zoomActivationKeyPressed: Ke,
                preventScrolling: P,
                noPanClassName: Q,
                userSelectionActive: Te,
                noWheelClassName: F,
                lib: Le,
                onTransformChange: De,
              });
            }, [r, u, f, y, E, x, z, R, Ke, P, Q, Te, F, Le, De]),
            (0, N.jsx)("div", {
              className: "react-flow__renderer",
              ref: fe,
              style: Ln,
              children: I,
            })
          );
        }
        const _s = (r) => ({
          userSelectionActive: r.userSelectionActive,
          userSelectionRect: r.userSelectionRect,
        });
        function bs() {
          const { userSelectionActive: r, userSelectionRect: u } = Re(_s, rt);
          return r && u
            ? (0, N.jsx)("div", {
                className: "react-flow__selection react-flow__container",
                style: {
                  width: u.width,
                  height: u.height,
                  transform: `translate(${u.x}px, ${u.y}px)`,
                },
              })
            : null;
        }
        const Yr = (r, u) => (f) => {
            f.target === u.current && r?.(f);
          },
          Es = (r) => ({
            userSelectionActive: r.userSelectionActive,
            elementsSelectable: r.elementsSelectable,
            dragging: r.paneDragging,
          });
        function Ss({
          isSelecting: r,
          selectionKeyPressed: u,
          selectionMode: f = H.Qc.Full,
          panOnDrag: y,
          selectionOnDrag: E,
          onSelectionStart: x,
          onSelectionEnd: z,
          onPaneClick: R,
          onPaneContextMenu: X,
          onPaneScroll: V,
          onPaneMouseEnter: W,
          onPaneMouseMove: v,
          onPaneMouseLeave: S,
          children: P,
        }) {
          const I = (0, L.useRef)(null),
            F = ot(),
            Q = (0, L.useRef)(0),
            J = (0, L.useRef)(0),
            ie = (0, L.useRef)(),
            Y = (0, L.useRef)(new Map()),
            {
              userSelectionActive: ce,
              elementsSelectable: fe,
              dragging: Te,
            } = Re(Es, rt),
            Le = fe && (r || ce),
            Ke = (0, L.useRef)(!1),
            Fe = (0, L.useRef)(!1),
            De = () => {
              F.setState({ userSelectionActive: !1, userSelectionRect: null }),
                (Q.current = 0),
                (J.current = 0);
            },
            ct = ($e) => {
              if (Ke.current) {
                Ke.current = !1;
                return;
              }
              R?.($e),
                F.getState().resetSelectedElements(),
                F.setState({ nodesSelectionActive: !1 });
            },
            dt = ($e) => {
              if (Array.isArray(y) && y?.includes(2)) {
                $e.preventDefault();
                return;
              }
              X?.($e);
            },
            st = V ? ($e) => V($e) : void 0,
            qe = ($e) => {
              const {
                resetSelectedElements: _e,
                domNode: lt,
                edgeLookup: ut,
              } = F.getState();
              if (
                ((ie.current = lt?.getBoundingClientRect()),
                !fe ||
                  !r ||
                  $e.button !== 0 ||
                  $e.target !== I.current ||
                  !ie.current)
              )
                return;
              $e.target?.setPointerCapture?.($e.pointerId),
                (Fe.current = !0),
                (Ke.current = !1),
                (Y.current = new Map());
              for (const [_t, wt] of ut)
                Y.current.set(
                  wt.source,
                  Y.current.get(wt.source)?.add(_t) || new Set([_t]),
                ),
                  Y.current.set(
                    wt.target,
                    Y.current.get(wt.target)?.add(_t) || new Set([_t]),
                  );
              const { x: gt, y: St } = (0, H.q1)($e.nativeEvent, ie.current);
              _e(),
                F.setState({
                  userSelectionRect: {
                    width: 0,
                    height: 0,
                    startX: gt,
                    startY: St,
                    x: gt,
                    y: St,
                  },
                }),
                x?.($e);
            },
            We = ($e) => {
              const {
                userSelectionRect: _e,
                edgeLookup: lt,
                transform: ut,
                nodeLookup: gt,
                triggerNodeChanges: St,
                triggerEdgeChanges: _t,
              } = F.getState();
              if (!ie.current || !_e) return;
              Ke.current = !0;
              const { x: wt, y: At } = (0, H.q1)($e.nativeEvent, ie.current),
                { startX: Dt, startY: Ze } = _e,
                kt = {
                  startX: Dt,
                  startY: Ze,
                  x: wt < Dt ? wt : Dt,
                  y: At < Ze ? At : Ze,
                  width: Math.abs(wt - Dt),
                  height: Math.abs(At - Ze),
                },
                Ut = (0, H.U$)(gt, kt, ut, f === H.Qc.Partial, !0),
                Ot = new Set(),
                nt = new Set();
              for (const Mt of Ut) {
                nt.add(Mt.id);
                const jt = Y.current.get(Mt.id);
                if (jt) for (const dn of jt) Ot.add(dn);
              }
              if (Q.current !== nt.size) {
                Q.current = nt.size;
                const Mt = cn(gt, nt, !0);
                St(Mt);
              }
              if (J.current !== Ot.size) {
                J.current = Ot.size;
                const Mt = cn(lt, Ot);
                _t(Mt);
              }
              F.setState({
                userSelectionRect: kt,
                userSelectionActive: !0,
                nodesSelectionActive: !1,
              });
            },
            Xe = ($e) => {
              if ($e.button !== 0 || !Fe.current) return;
              $e.target?.releasePointerCapture?.($e.pointerId);
              const { userSelectionRect: _e } = F.getState();
              !ce && _e && $e.target === I.current && ct?.($e),
                Q.current > 0 && F.setState({ nodesSelectionActive: !0 }),
                De(),
                z?.($e),
                (u || E) && (Ke.current = !1),
                (Fe.current = !1);
            },
            et = y === !0 || (Array.isArray(y) && y.includes(0));
          return (0, N.jsxs)("div", {
            className: Ee([
              "react-flow__pane",
              { draggable: et, dragging: Te, selection: r },
            ]),
            onClick: Le ? void 0 : Yr(ct, I),
            onContextMenu: Yr(dt, I),
            onWheel: Yr(st, I),
            onPointerEnter: Le ? void 0 : W,
            onPointerDown: Le ? qe : v,
            onPointerMove: Le ? We : v,
            onPointerUp: Le ? Xe : void 0,
            onPointerLeave: S,
            ref: I,
            style: Ln,
            children: [P, (0, N.jsx)(bs, {})],
          });
        }
        function Kr({ id: r, store: u, unselect: f = !1, nodeRef: y }) {
          const {
              addSelectedNodes: E,
              unselectNodesAndEdges: x,
              multiSelectionActive: z,
              nodeLookup: R,
              onError: X,
            } = u.getState(),
            V = R.get(r);
          if (!V) {
            X?.("012", H.xc.error012(r));
            return;
          }
          u.setState({ nodesSelectionActive: !1 }),
            V.selected
              ? (f || (V.selected && z)) &&
                (x({ nodes: [V], edges: [] }),
                requestAnimationFrame(() => y?.current?.blur()))
              : E([r]);
        }
        function mo({
          nodeRef: r,
          disabled: u = !1,
          noDragClassName: f,
          handleSelector: y,
          nodeId: E,
          isSelectable: x,
          nodeClickDistance: z,
        }) {
          const R = ot(),
            [X, V] = (0, L.useState)(!1),
            W = (0, L.useRef)();
          return (
            (0, L.useEffect)(() => {
              W.current = (0, H.I$)({
                getStoreItems: () => R.getState(),
                onNodeMouseDown: (v) => {
                  Kr({ id: v, store: R, nodeRef: r });
                },
                onDragStart: () => {
                  V(!0);
                },
                onDragStop: () => {
                  V(!1);
                },
              });
            }, []),
            (0, L.useEffect)(() => {
              if (u) W.current?.destroy();
              else if (r.current)
                return (
                  W.current?.update({
                    noDragClassName: f,
                    handleSelector: y,
                    domNode: r.current,
                    isSelectable: x,
                    nodeId: E,
                    nodeClickDistance: z,
                  }),
                  () => {
                    W.current?.destroy();
                  }
                );
            }, [f, y, u, x, r, E]),
            X
          );
        }
        const wo = (r) => (u) =>
          u.selected && (u.draggable || (r && typeof u.draggable > "u"));
        function xo() {
          const r = ot();
          return (0, L.useCallback)((f) => {
            const {
                nodeExtent: y,
                snapToGrid: E,
                snapGrid: x,
                nodesDraggable: z,
                onError: R,
                updateNodePositions: X,
                nodeLookup: V,
                nodeOrigin: W,
              } = r.getState(),
              v = new Map(),
              S = wo(z),
              P = E ? x[0] : 5,
              I = E ? x[1] : 5,
              F = f.direction.x * P * f.factor,
              Q = f.direction.y * I * f.factor;
            for (const [, J] of V) {
              if (!S(J)) continue;
              let ie = {
                x: J.internals.positionAbsolute.x + F,
                y: J.internals.positionAbsolute.y + Q,
              };
              E && (ie = (0, H.s_)(ie, x));
              const { position: Y, positionAbsolute: ce } = (0, H.aE)({
                nodeId: J.id,
                nextPosition: ie,
                nodeLookup: V,
                nodeExtent: y,
                nodeOrigin: W,
                onError: R,
              });
              (J.position = Y),
                (J.internals.positionAbsolute = ce),
                v.set(J.id, J);
            }
            X(v);
          }, []);
        }
        const Zr = (0, L.createContext)(null),
          vo = Zr.Provider;
        Zr.Consumer;
        const Kn = () => (0, L.useContext)(Zr),
          _o = (r) => ({
            connectOnClick: r.connectOnClick,
            noPanClassName: r.noPanClassName,
            rfId: r.rfId,
          }),
          Cs = (r, u, f) => (y) => {
            const {
                connectionClickStartHandle: E,
                connectionMode: x,
                connection: z,
              } = y,
              { fromHandle: R, toHandle: X, isValid: V } = z,
              W = X?.nodeId === r && X?.id === u && X?.type === f;
            return {
              connectingFrom: R?.nodeId === r && R?.id === u && R?.type === f,
              connectingTo: W,
              clickConnecting: E?.nodeId === r && E?.id === u && E?.type === f,
              isPossibleEndHandle:
                x === H.WZ.Strict
                  ? R?.type !== f
                  : r !== R?.nodeId || u !== R?.id,
              connectionInProcess: !!R,
              valid: W && V,
            };
          };
        function Ns(
          {
            type: r = "source",
            position: u = H.yX.Top,
            isValidConnection: f,
            isConnectable: y = !0,
            isConnectableStart: E = !0,
            isConnectableEnd: x = !0,
            id: z,
            onConnect: R,
            children: X,
            className: V,
            onMouseDown: W,
            onTouchStart: v,
            ...S
          },
          P,
        ) {
          const I = z || null,
            F = r === "target",
            Q = ot(),
            J = Kn(),
            { connectOnClick: ie, noPanClassName: Y, rfId: ce } = Re(_o, rt),
            {
              connectingFrom: fe,
              connectingTo: Te,
              clickConnecting: Le,
              isPossibleEndHandle: Ke,
              connectionInProcess: Fe,
              valid: De,
            } = Re(Cs(J, I, r), rt);
          J || Q.getState().onError?.("010", H.xc.error010());
          const ct = (qe) => {
              const {
                  defaultEdgeOptions: We,
                  onConnect: Xe,
                  hasDefaultEdges: et,
                } = Q.getState(),
                $e = { ...We, ...qe };
              if (et) {
                const { edges: _e, setEdges: lt } = Q.getState();
                lt((0, H.rN)($e, _e));
              }
              Xe?.($e), R?.($e);
            },
            dt = (qe) => {
              if (!J) return;
              const We = (0, H.Er)(qe.nativeEvent);
              if (E && ((We && qe.button === 0) || !We)) {
                const Xe = Q.getState();
                H.aQ.onPointerDown(qe.nativeEvent, {
                  autoPanOnConnect: Xe.autoPanOnConnect,
                  connectionMode: Xe.connectionMode,
                  connectionRadius: Xe.connectionRadius,
                  domNode: Xe.domNode,
                  nodeLookup: Xe.nodeLookup,
                  lib: Xe.lib,
                  isTarget: F,
                  handleId: I,
                  nodeId: J,
                  flowId: Xe.rfId,
                  panBy: Xe.panBy,
                  cancelConnection: Xe.cancelConnection,
                  onConnectStart: Xe.onConnectStart,
                  onConnectEnd: Xe.onConnectEnd,
                  updateConnection: Xe.updateConnection,
                  onConnect: ct,
                  isValidConnection: f || Xe.isValidConnection,
                  getTransform: () => Q.getState().transform,
                  getFromHandle: () => Q.getState().connection.fromHandle,
                  autoPanSpeed: Xe.autoPanSpeed,
                });
              }
              We ? W?.(qe) : v?.(qe);
            },
            st = (qe) => {
              const {
                onClickConnectStart: We,
                onClickConnectEnd: Xe,
                connectionClickStartHandle: et,
                connectionMode: $e,
                isValidConnection: _e,
                lib: lt,
                rfId: ut,
                nodeLookup: gt,
                connection: St,
              } = Q.getState();
              if (!J || (!et && !E)) return;
              if (!et) {
                We?.(qe.nativeEvent, { nodeId: J, handleId: I, handleType: r }),
                  Q.setState({
                    connectionClickStartHandle: { nodeId: J, type: r, id: I },
                  });
                return;
              }
              const _t = (0, H.oj)(qe.target),
                wt = f || _e,
                { connection: At, isValid: Dt } = H.aQ.isValid(qe.nativeEvent, {
                  handle: { nodeId: J, id: I, type: r },
                  connectionMode: $e,
                  fromNodeId: et.nodeId,
                  fromHandleId: et.id || null,
                  fromType: et.type,
                  isValidConnection: wt,
                  flowId: ut,
                  doc: _t,
                  lib: lt,
                  nodeLookup: gt,
                });
              Dt && At && ct(At);
              const Ze = structuredClone(St);
              delete Ze.inProgress,
                (Ze.toPosition = Ze.toHandle ? Ze.toHandle.position : null),
                Xe?.(qe, Ze),
                Q.setState({ connectionClickStartHandle: null });
            };
          return (0, N.jsx)("div", {
            "data-handleid": I,
            "data-nodeid": J,
            "data-handlepos": u,
            "data-id": `${ce}-${J}-${I}-${r}`,
            className: Ee([
              "react-flow__handle",
              `react-flow__handle-${u}`,
              "nodrag",
              Y,
              V,
              {
                source: !F,
                target: F,
                connectable: y,
                connectablestart: E,
                connectableend: x,
                clickconnecting: Le,
                connectingfrom: fe,
                connectingto: Te,
                valid: De,
                connectionindicator: y && (!Fe || Ke) && (Fe ? x : E),
              },
            ]),
            onMouseDown: dt,
            onTouchStart: dt,
            onClick: ie ? st : void 0,
            ref: P,
            ...S,
            children: X,
          });
        }
        const cr = (0, L.memo)(Ue(Ns));
        function As({
          data: r,
          isConnectable: u,
          sourcePosition: f = H.yX.Bottom,
        }) {
          return (0, N.jsxs)(N.Fragment, {
            children: [
              r?.label,
              (0, N.jsx)(cr, { type: "source", position: f, isConnectable: u }),
            ],
          });
        }
        function Ms({
          data: r,
          isConnectable: u,
          targetPosition: f = H.yX.Top,
          sourcePosition: y = H.yX.Bottom,
        }) {
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(cr, { type: "target", position: f, isConnectable: u }),
              r?.label,
              (0, N.jsx)(cr, { type: "source", position: y, isConnectable: u }),
            ],
          });
        }
        function bo() {
          return null;
        }
        function $s({
          data: r,
          isConnectable: u,
          targetPosition: f = H.yX.Top,
        }) {
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(cr, { type: "target", position: f, isConnectable: u }),
              r?.label,
            ],
          });
        }
        const Nr = {
            ArrowUp: { x: 0, y: -1 },
            ArrowDown: { x: 0, y: 1 },
            ArrowLeft: { x: -1, y: 0 },
            ArrowRight: { x: 1, y: 0 },
          },
          Eo = { input: As, default: Ms, output: $s, group: bo };
        function Is(r) {
          return r.internals.handleBounds === void 0
            ? {
                width: r.width ?? r.initialWidth ?? r.style?.width,
                height: r.height ?? r.initialHeight ?? r.style?.height,
              }
            : {
                width: r.width ?? r.style?.width,
                height: r.height ?? r.style?.height,
              };
        }
        const ks = (r) => {
          const {
            width: u,
            height: f,
            x: y,
            y: E,
          } = (0, H.aZ)(r.nodeLookup, { filter: (x) => !!x.selected });
          return {
            width: (0, H.kf)(u) ? u : null,
            height: (0, H.kf)(f) ? f : null,
            userSelectionActive: r.userSelectionActive,
            transformString: `translate(${r.transform[0]}px,${r.transform[1]}px) scale(${r.transform[2]}) translate(${y}px,${E}px)`,
          };
        };
        function Ps({
          onSelectionContextMenu: r,
          noPanClassName: u,
          disableKeyboardA11y: f,
        }) {
          const y = ot(),
            {
              width: E,
              height: x,
              transformString: z,
              userSelectionActive: R,
            } = Re(ks, rt),
            X = xo(),
            V = (0, L.useRef)(null);
          if (
            ((0, L.useEffect)(() => {
              f || V.current?.focus({ preventScroll: !0 });
            }, [f]),
            mo({ nodeRef: V }),
            R || !E || !x)
          )
            return null;
          const W = r
              ? (S) => {
                  const P = y.getState().nodes.filter((I) => I.selected);
                  r(S, P);
                }
              : void 0,
            v = (S) => {
              Object.prototype.hasOwnProperty.call(Nr, S.key) &&
                (S.preventDefault(),
                X({ direction: Nr[S.key], factor: S.shiftKey ? 4 : 1 }));
            };
          return (0, N.jsx)("div", {
            className: Ee([
              "react-flow__nodesselection",
              "react-flow__container",
              u,
            ]),
            style: { transform: z },
            children: (0, N.jsx)("div", {
              ref: V,
              className: "react-flow__nodesselection-rect",
              onContextMenu: W,
              tabIndex: f ? void 0 : -1,
              onKeyDown: f ? void 0 : v,
              style: { width: E, height: x },
            }),
          });
        }
        const Gr = typeof window < "u" ? window : void 0,
          Ts = (r) => ({
            nodesSelectionActive: r.nodesSelectionActive,
            userSelectionActive: r.userSelectionActive,
          });
        function So({
          children: r,
          onPaneClick: u,
          onPaneMouseEnter: f,
          onPaneMouseMove: y,
          onPaneMouseLeave: E,
          onPaneContextMenu: x,
          onPaneScroll: z,
          paneClickDistance: R,
          deleteKeyCode: X,
          selectionKeyCode: V,
          selectionOnDrag: W,
          selectionMode: v,
          onSelectionStart: S,
          onSelectionEnd: P,
          multiSelectionKeyCode: I,
          panActivationKeyCode: F,
          zoomActivationKeyCode: Q,
          elementsSelectable: J,
          zoomOnScroll: ie,
          zoomOnPinch: Y,
          panOnScroll: ce,
          panOnScrollSpeed: fe,
          panOnScrollMode: Te,
          zoomOnDoubleClick: Le,
          panOnDrag: Ke,
          defaultViewport: Fe,
          translateExtent: De,
          minZoom: ct,
          maxZoom: dt,
          preventScrolling: st,
          onSelectionContextMenu: qe,
          noWheelClassName: We,
          noPanClassName: Xe,
          disableKeyboardA11y: et,
          onViewportChange: $e,
          isControlledViewport: _e,
        }) {
          const { nodesSelectionActive: lt, userSelectionActive: ut } = Re(Ts),
            gt = Pt(V, { target: Gr }),
            St = Pt(F, { target: Gr }),
            _t = St || Ke,
            wt = St || ce,
            At = W && _t !== !0,
            Dt = gt || ut || At;
          return (
            Yn({ deleteKeyCode: X, multiSelectionKeyCode: I }),
            (0, N.jsx)(yo, {
              onPaneContextMenu: x,
              elementsSelectable: J,
              zoomOnScroll: ie,
              zoomOnPinch: Y,
              panOnScroll: wt,
              panOnScrollSpeed: fe,
              panOnScrollMode: Te,
              zoomOnDoubleClick: Le,
              panOnDrag: !gt && _t,
              defaultViewport: Fe,
              translateExtent: De,
              minZoom: ct,
              maxZoom: dt,
              zoomActivationKeyCode: Q,
              preventScrolling: st,
              noWheelClassName: We,
              noPanClassName: Xe,
              onViewportChange: $e,
              isControlledViewport: _e,
              paneClickDistance: R,
              children: (0, N.jsxs)(Ss, {
                onSelectionStart: S,
                onSelectionEnd: P,
                onPaneClick: u,
                onPaneMouseEnter: f,
                onPaneMouseMove: y,
                onPaneMouseLeave: E,
                onPaneContextMenu: x,
                onPaneScroll: z,
                panOnDrag: _t,
                isSelecting: !!Dt,
                selectionMode: v,
                selectionKeyPressed: gt,
                selectionOnDrag: At,
                children: [
                  r,
                  lt &&
                    (0, N.jsx)(Ps, {
                      onSelectionContextMenu: qe,
                      noPanClassName: Xe,
                      disableKeyboardA11y: et,
                    }),
                ],
              }),
            })
          );
        }
        So.displayName = "FlowRenderer";
        const Ds = (0, L.memo)(So),
          Os = (r) => (u) =>
            r
              ? (0, H.U$)(
                  u.nodeLookup,
                  { x: 0, y: 0, width: u.width, height: u.height },
                  u.transform,
                  !0,
                ).map((f) => f.id)
              : Array.from(u.nodeLookup.keys());
        function Co(r) {
          return Re((0, L.useCallback)(Os(r), [r]), rt);
        }
        const Zt = (r) => r.updateNodeInternals;
        function No() {
          const r = Re(Zt),
            [u] = (0, L.useState)(() =>
              typeof ResizeObserver > "u"
                ? null
                : new ResizeObserver((f) => {
                    const y = new Map();
                    f.forEach((E) => {
                      const x = E.target.getAttribute("data-id");
                      y.set(x, { id: x, nodeElement: E.target, force: !0 });
                    }),
                      r(y);
                  }),
            );
          return (
            (0, L.useEffect)(
              () => () => {
                u?.disconnect();
              },
              [u],
            ),
            u
          );
        }
        function Bs({
          node: r,
          nodeType: u,
          hasDimensions: f,
          resizeObserver: y,
        }) {
          const E = ot(),
            x = (0, L.useRef)(null),
            z = (0, L.useRef)(null),
            R = (0, L.useRef)(r.sourcePosition),
            X = (0, L.useRef)(r.targetPosition),
            V = (0, L.useRef)(u),
            W = f && !!r.internals.handleBounds;
          return (
            (0, L.useEffect)(() => {
              x.current &&
                !r.hidden &&
                (!W || z.current !== x.current) &&
                (z.current && y?.unobserve(z.current),
                y?.observe(x.current),
                (z.current = x.current));
            }, [W, r.hidden]),
            (0, L.useEffect)(
              () => () => {
                z.current && (y?.unobserve(z.current), (z.current = null));
              },
              [],
            ),
            (0, L.useEffect)(() => {
              if (x.current) {
                const v = V.current !== u,
                  S = R.current !== r.sourcePosition,
                  P = X.current !== r.targetPosition;
                (v || S || P) &&
                  ((V.current = u),
                  (R.current = r.sourcePosition),
                  (X.current = r.targetPosition),
                  E.getState().updateNodeInternals(
                    new Map([
                      [r.id, { id: r.id, nodeElement: x.current, force: !0 }],
                    ]),
                  ));
              }
            }, [r.id, u, r.sourcePosition, r.targetPosition]),
            x
          );
        }
        function lr({
          id: r,
          onClick: u,
          onMouseEnter: f,
          onMouseMove: y,
          onMouseLeave: E,
          onContextMenu: x,
          onDoubleClick: z,
          nodesDraggable: R,
          elementsSelectable: X,
          nodesConnectable: V,
          nodesFocusable: W,
          resizeObserver: v,
          noDragClassName: S,
          noPanClassName: P,
          disableKeyboardA11y: I,
          rfId: F,
          nodeTypes: Q,
          nodeExtent: J,
          nodeClickDistance: ie,
          onError: Y,
        }) {
          const {
            node: ce,
            internals: fe,
            isParent: Te,
          } = Re((Ze) => {
            const kt = Ze.nodeLookup.get(r),
              Ut = Ze.parentLookup.has(r);
            return { node: kt, internals: kt.internals, isParent: Ut };
          }, rt);
          let Le = ce.type || "default",
            Ke = Q?.[Le] || Eo[Le];
          Ke === void 0 &&
            (Y?.("003", H.xc.error003(Le)),
            (Le = "default"),
            (Ke = Eo.default));
          const Fe = !!(ce.draggable || (R && typeof ce.draggable > "u")),
            De = !!(ce.selectable || (X && typeof ce.selectable > "u")),
            ct = !!(ce.connectable || (V && typeof ce.connectable > "u")),
            dt = !!(ce.focusable || (W && typeof ce.focusable > "u")),
            st = ot(),
            qe = (0, H.QE)(ce),
            We = Bs({
              node: ce,
              nodeType: Le,
              hasDimensions: qe,
              resizeObserver: v,
            }),
            Xe = mo({
              nodeRef: We,
              disabled: ce.hidden || !Fe,
              noDragClassName: S,
              handleSelector: ce.dragHandle,
              nodeId: r,
              isSelectable: De,
              nodeClickDistance: ie,
            }),
            et = xo();
          if (ce.hidden) return null;
          const $e = (0, H.uD)(ce),
            _e = Is(ce),
            lt = De || Fe || u || f || y || E,
            ut = f ? (Ze) => f(Ze, { ...fe.userNode }) : void 0,
            gt = y ? (Ze) => y(Ze, { ...fe.userNode }) : void 0,
            St = E ? (Ze) => E(Ze, { ...fe.userNode }) : void 0,
            _t = x ? (Ze) => x(Ze, { ...fe.userNode }) : void 0,
            wt = z ? (Ze) => z(Ze, { ...fe.userNode }) : void 0,
            At = (Ze) => {
              const { selectNodesOnDrag: kt, nodeDragThreshold: Ut } =
                st.getState();
              De &&
                (!kt || !Fe || Ut > 0) &&
                Kr({ id: r, store: st, nodeRef: We }),
                u && u(Ze, { ...fe.userNode });
            },
            Dt = (Ze) => {
              if (!((0, H.v5)(Ze.nativeEvent) || I))
                if (H.tn.includes(Ze.key) && De) {
                  const kt = Ze.key === "Escape";
                  Kr({ id: r, store: st, unselect: kt, nodeRef: We });
                } else
                  Fe &&
                    ce.selected &&
                    Object.prototype.hasOwnProperty.call(Nr, Ze.key) &&
                    (Ze.preventDefault(),
                    st.setState({
                      ariaLiveMessage: `Moved selected node ${Ze.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~fe.positionAbsolute.x}, y: ${~~fe.positionAbsolute.y}`,
                    }),
                    et({ direction: Nr[Ze.key], factor: Ze.shiftKey ? 4 : 1 }));
            };
          return (0, N.jsx)("div", {
            className: Ee([
              "react-flow__node",
              `react-flow__node-${Le}`,
              { [P]: Fe },
              ce.className,
              {
                selected: ce.selected,
                selectable: De,
                parent: Te,
                draggable: Fe,
                dragging: Xe,
              },
            ]),
            ref: We,
            style: {
              zIndex: fe.z,
              transform: `translate(${fe.positionAbsolute.x}px,${fe.positionAbsolute.y}px)`,
              pointerEvents: lt ? "all" : "none",
              visibility: qe ? "visible" : "hidden",
              ...ce.style,
              ..._e,
            },
            "data-id": r,
            "data-testid": `rf__node-${r}`,
            onMouseEnter: ut,
            onMouseMove: gt,
            onMouseLeave: St,
            onContextMenu: _t,
            onClick: At,
            onDoubleClick: wt,
            onKeyDown: dt ? Dt : void 0,
            tabIndex: dt ? 0 : void 0,
            role: dt ? "button" : void 0,
            "aria-describedby": I ? void 0 : `${_n}-${F}`,
            "aria-label": ce.ariaLabel,
            children: (0, N.jsx)(vo, {
              value: r,
              children: (0, N.jsx)(Ke, {
                id: r,
                data: ce.data,
                type: Le,
                positionAbsoluteX: fe.positionAbsolute.x,
                positionAbsoluteY: fe.positionAbsolute.y,
                selected: ce.selected,
                selectable: De,
                draggable: Fe,
                deletable: ce.deletable ?? !0,
                isConnectable: ct,
                sourcePosition: ce.sourcePosition,
                targetPosition: ce.targetPosition,
                dragging: Xe,
                dragHandle: ce.dragHandle,
                zIndex: fe.z,
                parentId: ce.parentId,
                ...$e,
              }),
            }),
          });
        }
        const Gt = (r) => ({
          nodesDraggable: r.nodesDraggable,
          nodesConnectable: r.nodesConnectable,
          nodesFocusable: r.nodesFocusable,
          elementsSelectable: r.elementsSelectable,
          onError: r.onError,
        });
        function Ao(r) {
          const {
              nodesDraggable: u,
              nodesConnectable: f,
              nodesFocusable: y,
              elementsSelectable: E,
              onError: x,
            } = Re(Gt, rt),
            z = Co(r.onlyRenderVisibleElements),
            R = No();
          return (0, N.jsx)("div", {
            className: "react-flow__nodes",
            style: Ln,
            children: z.map((X) =>
              (0, N.jsx)(
                lr,
                {
                  id: X,
                  nodeTypes: r.nodeTypes,
                  nodeExtent: r.nodeExtent,
                  onClick: r.onNodeClick,
                  onMouseEnter: r.onNodeMouseEnter,
                  onMouseMove: r.onNodeMouseMove,
                  onMouseLeave: r.onNodeMouseLeave,
                  onContextMenu: r.onNodeContextMenu,
                  onDoubleClick: r.onNodeDoubleClick,
                  noDragClassName: r.noDragClassName,
                  noPanClassName: r.noPanClassName,
                  rfId: r.rfId,
                  disableKeyboardA11y: r.disableKeyboardA11y,
                  resizeObserver: R,
                  nodesDraggable: u,
                  nodesConnectable: f,
                  nodesFocusable: y,
                  elementsSelectable: E,
                  nodeClickDistance: r.nodeClickDistance,
                  onError: x,
                },
                X,
              ),
            ),
          });
        }
        Ao.displayName = "NodeRenderer";
        const zt = (0, L.memo)(Ao);
        function zs(r) {
          return Re(
            (0, L.useCallback)(
              (f) => {
                if (!r) return f.edges.map((E) => E.id);
                const y = [];
                if (f.width && f.height)
                  for (const E of f.edges) {
                    const x = f.nodeLookup.get(E.source),
                      z = f.nodeLookup.get(E.target);
                    x &&
                      z &&
                      (0, H.uj)({
                        sourceNode: x,
                        targetNode: z,
                        width: f.width,
                        height: f.height,
                        transform: f.transform,
                      }) &&
                      y.push(E.id);
                  }
                return y;
              },
              [r],
            ),
            rt,
          );
        }
        const ur = ({ color: r = "none", strokeWidth: u = 1 }) =>
            (0, N.jsx)("polyline", {
              style: { stroke: r, strokeWidth: u },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              fill: "none",
              points: "-5,-4 0,0 -5,4",
            }),
          Ur = ({ color: r = "none", strokeWidth: u = 1 }) =>
            (0, N.jsx)("polyline", {
              style: { stroke: r, fill: r, strokeWidth: u },
              strokeLinecap: "round",
              strokeLinejoin: "round",
              points: "-5,-4 0,0 -5,4 -5,-4",
            }),
          hn = { [H.TG.Arrow]: ur, [H.TG.ArrowClosed]: Ur };
        function Mo(r) {
          const u = ot();
          return (0, L.useMemo)(
            () =>
              Object.prototype.hasOwnProperty.call(hn, r)
                ? hn[r]
                : (u.getState().onError?.("009", H.xc.error009(r)), null),
            [r],
          );
        }
        const $o = ({
            id: r,
            type: u,
            color: f,
            width: y = 12.5,
            height: E = 12.5,
            markerUnits: x = "strokeWidth",
            strokeWidth: z,
            orient: R = "auto-start-reverse",
          }) => {
            const X = Mo(u);
            return X
              ? (0, N.jsx)("marker", {
                  className: "react-flow__arrowhead",
                  id: r,
                  markerWidth: `${y}`,
                  markerHeight: `${E}`,
                  viewBox: "-10 -10 20 20",
                  markerUnits: x,
                  orient: R,
                  refX: "0",
                  refY: "0",
                  children: (0, N.jsx)(X, { color: f, strokeWidth: z }),
                })
              : null;
          },
          Sn = ({ defaultColor: r, rfId: u }) => {
            const f = Re((x) => x.edges),
              y = Re((x) => x.defaultEdgeOptions),
              E = (0, L.useMemo)(
                () =>
                  (0, H.Hm)(f, {
                    id: u,
                    defaultColor: r,
                    defaultMarkerStart: y?.markerStart,
                    defaultMarkerEnd: y?.markerEnd,
                  }),
                [f, y, u, r],
              );
            return E.length
              ? (0, N.jsx)("svg", {
                  className: "react-flow__marker",
                  children: (0, N.jsx)("defs", {
                    children: E.map((x) =>
                      (0, N.jsx)(
                        $o,
                        {
                          id: x.id,
                          type: x.type,
                          color: x.color,
                          width: x.width,
                          height: x.height,
                          markerUnits: x.markerUnits,
                          strokeWidth: x.strokeWidth,
                          orient: x.orient,
                        },
                        x.id,
                      ),
                    ),
                  }),
                })
              : null;
          };
        Sn.displayName = "MarkerDefinitions";
        var Ar = (0, L.memo)(Sn);
        function Io({
          x: r,
          y: u,
          label: f,
          labelStyle: y = {},
          labelShowBg: E = !0,
          labelBgStyle: x = {},
          labelBgPadding: z = [2, 4],
          labelBgBorderRadius: R = 2,
          children: X,
          className: V,
          ...W
        }) {
          const [v, S] = (0, L.useState)({ x: 1, y: 0, width: 0, height: 0 }),
            P = Ee(["react-flow__edge-textwrapper", V]),
            I = (0, L.useRef)(null);
          return (
            (0, L.useEffect)(() => {
              if (I.current) {
                const F = I.current.getBBox();
                S({ x: F.x, y: F.y, width: F.width, height: F.height });
              }
            }, [f]),
            typeof f > "u" || !f
              ? null
              : (0, N.jsxs)("g", {
                  transform: `translate(${r - v.width / 2} ${u - v.height / 2})`,
                  className: P,
                  visibility: v.width ? "visible" : "hidden",
                  ...W,
                  children: [
                    E &&
                      (0, N.jsx)("rect", {
                        width: v.width + 2 * z[0],
                        x: -z[0],
                        y: -z[1],
                        height: v.height + 2 * z[1],
                        className: "react-flow__edge-textbg",
                        style: x,
                        rx: R,
                        ry: R,
                      }),
                    (0, N.jsx)("text", {
                      className: "react-flow__edge-text",
                      y: v.height / 2,
                      dy: "0.3em",
                      ref: I,
                      style: y,
                      children: f,
                    }),
                    X,
                  ],
                })
          );
        }
        Io.displayName = "EdgeText";
        const Hs = (0, L.memo)(Io);
        function Mr({
          path: r,
          labelX: u,
          labelY: f,
          label: y,
          labelStyle: E,
          labelShowBg: x,
          labelBgStyle: z,
          labelBgPadding: R,
          labelBgBorderRadius: X,
          interactionWidth: V = 20,
          ...W
        }) {
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)("path", {
                ...W,
                d: r,
                fill: "none",
                className: Ee(["react-flow__edge-path", W.className]),
              }),
              V &&
                (0, N.jsx)("path", {
                  d: r,
                  fill: "none",
                  strokeOpacity: 0,
                  strokeWidth: V,
                  className: "react-flow__edge-interaction",
                }),
              y && (0, H.kf)(u) && (0, H.kf)(f)
                ? (0, N.jsx)(Hs, {
                    x: u,
                    y: f,
                    label: y,
                    labelStyle: E,
                    labelShowBg: x,
                    labelBgStyle: z,
                    labelBgPadding: R,
                    labelBgBorderRadius: X,
                  })
                : null,
            ],
          });
        }
        function ko({ pos: r, x1: u, y1: f, x2: y, y2: E }) {
          return r === H.yX.Left || r === H.yX.Right
            ? [0.5 * (u + y), f]
            : [u, 0.5 * (f + E)];
        }
        function Qr({
          sourceX: r,
          sourceY: u,
          sourcePosition: f = H.yX.Bottom,
          targetX: y,
          targetY: E,
          targetPosition: x = H.yX.Top,
        }) {
          const [z, R] = ko({ pos: f, x1: r, y1: u, x2: y, y2: E }),
            [X, V] = ko({ pos: x, x1: y, y1: E, x2: r, y2: u }),
            [W, v, S, P] = (0, H.e_)({
              sourceX: r,
              sourceY: u,
              targetX: y,
              targetY: E,
              sourceControlX: z,
              sourceControlY: R,
              targetControlX: X,
              targetControlY: V,
            });
          return [`M${r},${u} C${z},${R} ${X},${V} ${y},${E}`, W, v, S, P];
        }
        function Po(r) {
          return (0, L.memo)(
            ({
              id: u,
              sourceX: f,
              sourceY: y,
              targetX: E,
              targetY: x,
              sourcePosition: z = H.yX.Bottom,
              targetPosition: R = H.yX.Top,
              label: X,
              labelStyle: V,
              labelShowBg: W,
              labelBgStyle: v,
              labelBgPadding: S,
              labelBgBorderRadius: P,
              style: I,
              markerEnd: F,
              markerStart: Q,
              interactionWidth: J,
            }) => {
              const [ie, Y, ce] = Qr({
                  sourceX: f,
                  sourceY: y,
                  sourcePosition: z,
                  targetX: E,
                  targetY: x,
                  targetPosition: R,
                }),
                fe = r.isInternal ? void 0 : u;
              return (0, N.jsx)(Mr, {
                id: fe,
                path: ie,
                labelX: Y,
                labelY: ce,
                label: X,
                labelStyle: V,
                labelShowBg: W,
                labelBgStyle: v,
                labelBgPadding: S,
                labelBgBorderRadius: P,
                style: I,
                markerEnd: F,
                markerStart: Q,
                interactionWidth: J,
              });
            },
          );
        }
        const To = Po({ isInternal: !1 }),
          Do = Po({ isInternal: !0 });
        (To.displayName = "SimpleBezierEdge"),
          (Do.displayName = "SimpleBezierEdgeInternal");
        function Oo(r) {
          return (0, L.memo)(
            ({
              id: u,
              sourceX: f,
              sourceY: y,
              targetX: E,
              targetY: x,
              label: z,
              labelStyle: R,
              labelShowBg: X,
              labelBgStyle: V,
              labelBgPadding: W,
              labelBgBorderRadius: v,
              style: S,
              sourcePosition: P = H.yX.Bottom,
              targetPosition: I = H.yX.Top,
              markerEnd: F,
              markerStart: Q,
              pathOptions: J,
              interactionWidth: ie,
            }) => {
              const [Y, ce, fe] = (0, H.oN)({
                  sourceX: f,
                  sourceY: y,
                  sourcePosition: P,
                  targetX: E,
                  targetY: x,
                  targetPosition: I,
                  borderRadius: J?.borderRadius,
                  offset: J?.offset,
                }),
                Te = r.isInternal ? void 0 : u;
              return (0, N.jsx)(Mr, {
                id: Te,
                path: Y,
                labelX: ce,
                labelY: fe,
                label: z,
                labelStyle: R,
                labelShowBg: X,
                labelBgStyle: V,
                labelBgPadding: W,
                labelBgBorderRadius: v,
                style: S,
                markerEnd: F,
                markerStart: Q,
                interactionWidth: ie,
              });
            },
          );
        }
        const Bo = Oo({ isInternal: !1 }),
          jn = Oo({ isInternal: !0 });
        (Bo.displayName = "SmoothStepEdge"),
          (jn.displayName = "SmoothStepEdgeInternal");
        function Zn(r) {
          return (0, L.memo)(({ id: u, ...f }) => {
            const y = r.isInternal ? void 0 : u;
            return (0, N.jsx)(Bo, {
              ...f,
              id: y,
              pathOptions: (0, L.useMemo)(
                () => ({ borderRadius: 0, offset: f.pathOptions?.offset }),
                [f.pathOptions?.offset],
              ),
            });
          });
        }
        const dr = Zn({ isInternal: !1 }),
          Jr = Zn({ isInternal: !0 });
        (dr.displayName = "StepEdge"), (Jr.displayName = "StepEdgeInternal");
        function fr(r) {
          return (0, L.memo)(
            ({
              id: u,
              sourceX: f,
              sourceY: y,
              targetX: E,
              targetY: x,
              label: z,
              labelStyle: R,
              labelShowBg: X,
              labelBgStyle: V,
              labelBgPadding: W,
              labelBgBorderRadius: v,
              style: S,
              markerEnd: P,
              markerStart: I,
              interactionWidth: F,
            }) => {
              const [Q, J, ie] = (0, H.ah)({
                  sourceX: f,
                  sourceY: y,
                  targetX: E,
                  targetY: x,
                }),
                Y = r.isInternal ? void 0 : u;
              return (0, N.jsx)(Mr, {
                id: Y,
                path: Q,
                labelX: J,
                labelY: ie,
                label: z,
                labelStyle: R,
                labelShowBg: X,
                labelBgStyle: V,
                labelBgPadding: W,
                labelBgBorderRadius: v,
                style: S,
                markerEnd: P,
                markerStart: I,
                interactionWidth: F,
              });
            },
          );
        }
        const hr = fr({ isInternal: !1 }),
          pr = fr({ isInternal: !0 });
        (hr.displayName = "StraightEdge"),
          (pr.displayName = "StraightEdgeInternal");
        function Cn(r) {
          return (0, L.memo)(
            ({
              id: u,
              sourceX: f,
              sourceY: y,
              targetX: E,
              targetY: x,
              sourcePosition: z = H.yX.Bottom,
              targetPosition: R = H.yX.Top,
              label: X,
              labelStyle: V,
              labelShowBg: W,
              labelBgStyle: v,
              labelBgPadding: S,
              labelBgBorderRadius: P,
              style: I,
              markerEnd: F,
              markerStart: Q,
              pathOptions: J,
              interactionWidth: ie,
            }) => {
              const [Y, ce, fe] = (0, H.Fp)({
                  sourceX: f,
                  sourceY: y,
                  sourcePosition: z,
                  targetX: E,
                  targetY: x,
                  targetPosition: R,
                  curvature: J?.curvature,
                }),
                Te = r.isInternal ? void 0 : u;
              return (0, N.jsx)(Mr, {
                id: Te,
                path: Y,
                labelX: ce,
                labelY: fe,
                label: X,
                labelStyle: V,
                labelShowBg: W,
                labelBgStyle: v,
                labelBgPadding: S,
                labelBgBorderRadius: P,
                style: I,
                markerEnd: F,
                markerStart: Q,
                interactionWidth: ie,
              });
            },
          );
        }
        const $r = Cn({ isInternal: !1 }),
          Gn = Cn({ isInternal: !0 });
        ($r.displayName = "BezierEdge"),
          (Gn.displayName = "BezierEdgeInternal");
        const eo = {
            default: Gn,
            straight: pr,
            step: Jr,
            smoothstep: jn,
            simplebezier: Do,
          },
          Ir = {
            sourceX: null,
            sourceY: null,
            targetX: null,
            targetY: null,
            sourcePosition: null,
            targetPosition: null,
          },
          Ls = (r, u, f) =>
            f === H.yX.Left ? r - u : f === H.yX.Right ? r + u : r,
          kr = (r, u, f) =>
            f === H.yX.Top ? r - u : f === H.yX.Bottom ? r + u : r,
          Nn = "react-flow__edgeupdater";
        function zo({
          position: r,
          centerX: u,
          centerY: f,
          radius: y = 10,
          onMouseDown: E,
          onMouseEnter: x,
          onMouseOut: z,
          type: R,
        }) {
          return (0, N.jsx)("circle", {
            onMouseDown: E,
            onMouseEnter: x,
            onMouseOut: z,
            className: Ee([Nn, `${Nn}-${R}`]),
            cx: Ls(u, y, r),
            cy: kr(f, y, r),
            r: y,
            stroke: "transparent",
            fill: "transparent",
          });
        }
        function to({
          isReconnectable: r,
          reconnectRadius: u,
          edge: f,
          sourceX: y,
          sourceY: E,
          targetX: x,
          targetY: z,
          sourcePosition: R,
          targetPosition: X,
          onReconnect: V,
          onReconnectStart: W,
          onReconnectEnd: v,
          setReconnecting: S,
          setUpdateHover: P,
        }) {
          const I = ot(),
            F = (ce, fe) => {
              if (ce.button !== 0) return;
              const {
                  autoPanOnConnect: Te,
                  domNode: Le,
                  isValidConnection: Ke,
                  connectionMode: Fe,
                  connectionRadius: De,
                  lib: ct,
                  onConnectStart: dt,
                  onConnectEnd: st,
                  cancelConnection: qe,
                  nodeLookup: We,
                  rfId: Xe,
                  panBy: et,
                  updateConnection: $e,
                } = I.getState(),
                _e = fe.type === "target";
              S(!0), W?.(ce, f, fe.type);
              const lt = (gt, St) => {
                  S(!1), v?.(gt, f, fe.type, St);
                },
                ut = (gt) => V?.(f, gt);
              H.aQ.onPointerDown(ce.nativeEvent, {
                autoPanOnConnect: Te,
                connectionMode: Fe,
                connectionRadius: De,
                domNode: Le,
                handleId: fe.id,
                nodeId: fe.nodeId,
                nodeLookup: We,
                isTarget: _e,
                edgeUpdaterType: fe.type,
                lib: ct,
                flowId: Xe,
                cancelConnection: qe,
                panBy: et,
                isValidConnection: Ke,
                onConnect: ut,
                onConnectStart: dt,
                onConnectEnd: st,
                onReconnectEnd: lt,
                updateConnection: $e,
                getTransform: () => I.getState().transform,
                getFromHandle: () => I.getState().connection.fromHandle,
              });
            },
            Q = (ce) =>
              F(ce, {
                nodeId: f.target,
                id: f.targetHandle ?? null,
                type: "target",
              }),
            J = (ce) =>
              F(ce, {
                nodeId: f.source,
                id: f.sourceHandle ?? null,
                type: "source",
              }),
            ie = () => P(!0),
            Y = () => P(!1);
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (r === !0 || r === "source") &&
                (0, N.jsx)(zo, {
                  position: R,
                  centerX: y,
                  centerY: E,
                  radius: u,
                  onMouseDown: Q,
                  onMouseEnter: ie,
                  onMouseOut: Y,
                  type: "source",
                }),
              (r === !0 || r === "target") &&
                (0, N.jsx)(zo, {
                  position: X,
                  centerX: x,
                  centerY: z,
                  radius: u,
                  onMouseDown: J,
                  onMouseEnter: ie,
                  onMouseOut: Y,
                  type: "target",
                }),
            ],
          });
        }
        function js({
          id: r,
          edgesFocusable: u,
          edgesReconnectable: f,
          elementsSelectable: y,
          onClick: E,
          onDoubleClick: x,
          onContextMenu: z,
          onMouseEnter: R,
          onMouseMove: X,
          onMouseLeave: V,
          reconnectRadius: W,
          onReconnect: v,
          onReconnectStart: S,
          onReconnectEnd: P,
          rfId: I,
          edgeTypes: F,
          noPanClassName: Q,
          onError: J,
          disableKeyboardA11y: ie,
        }) {
          let Y = Re((nt) => nt.edgeLookup.get(r));
          const ce = Re((nt) => nt.defaultEdgeOptions);
          Y = ce ? { ...ce, ...Y } : Y;
          let fe = Y.type || "default",
            Te = F?.[fe] || eo[fe];
          Te === void 0 &&
            (J?.("011", H.xc.error011(fe)),
            (fe = "default"),
            (Te = eo.default));
          const Le = !!(Y.focusable || (u && typeof Y.focusable > "u")),
            Ke =
              typeof v < "u" &&
              (Y.reconnectable || (f && typeof Y.reconnectable > "u")),
            Fe = !!(Y.selectable || (y && typeof Y.selectable > "u")),
            De = (0, L.useRef)(null),
            [ct, dt] = (0, L.useState)(!1),
            [st, qe] = (0, L.useState)(!1),
            We = ot(),
            {
              zIndex: Xe,
              sourceX: et,
              sourceY: $e,
              targetX: _e,
              targetY: lt,
              sourcePosition: ut,
              targetPosition: gt,
            } = Re(
              (0, L.useCallback)(
                (nt) => {
                  const Mt = nt.nodeLookup.get(Y.source),
                    jt = nt.nodeLookup.get(Y.target);
                  if (!Mt || !jt) return { zIndex: Y.zIndex, ...Ir };
                  const dn = (0, H.b5)({
                    id: r,
                    sourceNode: Mt,
                    targetNode: jt,
                    sourceHandle: Y.sourceHandle || null,
                    targetHandle: Y.targetHandle || null,
                    connectionMode: nt.connectionMode,
                    onError: J,
                  });
                  return {
                    zIndex: (0, H.qX)({
                      selected: Y.selected,
                      zIndex: Y.zIndex,
                      sourceNode: Mt,
                      targetNode: jt,
                      elevateOnSelect: nt.elevateEdgesOnSelect,
                    }),
                    ...(dn || Ir),
                  };
                },
                [
                  Y.source,
                  Y.target,
                  Y.sourceHandle,
                  Y.targetHandle,
                  Y.selected,
                  Y.zIndex,
                ],
              ),
              rt,
            ),
            St = (0, L.useMemo)(
              () =>
                Y.markerStart
                  ? `url('#${(0, H.aW)(Y.markerStart, I)}')`
                  : void 0,
              [Y.markerStart, I],
            ),
            _t = (0, L.useMemo)(
              () =>
                Y.markerEnd ? `url('#${(0, H.aW)(Y.markerEnd, I)}')` : void 0,
              [Y.markerEnd, I],
            );
          if (
            Y.hidden ||
            et === null ||
            $e === null ||
            _e === null ||
            lt === null
          )
            return null;
          const wt = (nt) => {
              const {
                addSelectedEdges: Mt,
                unselectNodesAndEdges: jt,
                multiSelectionActive: dn,
              } = We.getState();
              Fe &&
                (We.setState({ nodesSelectionActive: !1 }),
                Y.selected && dn
                  ? (jt({ nodes: [], edges: [Y] }), De.current?.blur())
                  : Mt([r])),
                E && E(nt, Y);
            },
            At = x
              ? (nt) => {
                  x(nt, { ...Y });
                }
              : void 0,
            Dt = z
              ? (nt) => {
                  z(nt, { ...Y });
                }
              : void 0,
            Ze = R
              ? (nt) => {
                  R(nt, { ...Y });
                }
              : void 0,
            kt = X
              ? (nt) => {
                  X(nt, { ...Y });
                }
              : void 0,
            Ut = V
              ? (nt) => {
                  V(nt, { ...Y });
                }
              : void 0,
            Ot = (nt) => {
              if (!ie && H.tn.includes(nt.key) && Fe) {
                const { unselectNodesAndEdges: Mt, addSelectedEdges: jt } =
                  We.getState();
                nt.key === "Escape"
                  ? (De.current?.blur(), Mt({ edges: [Y] }))
                  : jt([r]);
              }
            };
          return (0, N.jsx)("svg", {
            style: { zIndex: Xe },
            children: (0, N.jsxs)("g", {
              className: Ee([
                "react-flow__edge",
                `react-flow__edge-${fe}`,
                Y.className,
                Q,
                {
                  selected: Y.selected,
                  animated: Y.animated,
                  inactive: !Fe && !E,
                  updating: ct,
                  selectable: Fe,
                },
              ]),
              onClick: wt,
              onDoubleClick: At,
              onContextMenu: Dt,
              onMouseEnter: Ze,
              onMouseMove: kt,
              onMouseLeave: Ut,
              onKeyDown: Le ? Ot : void 0,
              tabIndex: Le ? 0 : void 0,
              role: Le ? "button" : "img",
              "data-id": r,
              "data-testid": `rf__edge-${r}`,
              "aria-label":
                Y.ariaLabel === null
                  ? void 0
                  : Y.ariaLabel || `Edge from ${Y.source} to ${Y.target}`,
              "aria-describedby": Le ? `${bn}-${I}` : void 0,
              ref: De,
              children: [
                !st &&
                  (0, N.jsx)(Te, {
                    id: r,
                    source: Y.source,
                    target: Y.target,
                    type: Y.type,
                    selected: Y.selected,
                    animated: Y.animated,
                    selectable: Fe,
                    deletable: Y.deletable ?? !0,
                    label: Y.label,
                    labelStyle: Y.labelStyle,
                    labelShowBg: Y.labelShowBg,
                    labelBgStyle: Y.labelBgStyle,
                    labelBgPadding: Y.labelBgPadding,
                    labelBgBorderRadius: Y.labelBgBorderRadius,
                    sourceX: et,
                    sourceY: $e,
                    targetX: _e,
                    targetY: lt,
                    sourcePosition: ut,
                    targetPosition: gt,
                    data: Y.data,
                    style: Y.style,
                    sourceHandleId: Y.sourceHandle,
                    targetHandleId: Y.targetHandle,
                    markerStart: St,
                    markerEnd: _t,
                    pathOptions: "pathOptions" in Y ? Y.pathOptions : void 0,
                    interactionWidth: Y.interactionWidth,
                  }),
                Ke &&
                  (0, N.jsx)(to, {
                    edge: Y,
                    isReconnectable: Ke,
                    reconnectRadius: W,
                    onReconnect: v,
                    onReconnectStart: S,
                    onReconnectEnd: P,
                    sourceX: et,
                    sourceY: $e,
                    targetX: _e,
                    targetY: lt,
                    sourcePosition: ut,
                    targetPosition: gt,
                    setUpdateHover: dt,
                    setReconnecting: qe,
                  }),
              ],
            }),
          });
        }
        const Rs = (r) => ({
          edgesFocusable: r.edgesFocusable,
          edgesReconnectable: r.edgesReconnectable,
          elementsSelectable: r.elementsSelectable,
          connectionMode: r.connectionMode,
          onError: r.onError,
        });
        function Pr({
          defaultMarkerColor: r,
          onlyRenderVisibleElements: u,
          rfId: f,
          edgeTypes: y,
          noPanClassName: E,
          onReconnect: x,
          onEdgeContextMenu: z,
          onEdgeMouseEnter: R,
          onEdgeMouseMove: X,
          onEdgeMouseLeave: V,
          onEdgeClick: W,
          reconnectRadius: v,
          onEdgeDoubleClick: S,
          onReconnectStart: P,
          onReconnectEnd: I,
          disableKeyboardA11y: F,
        }) {
          const {
              edgesFocusable: Q,
              edgesReconnectable: J,
              elementsSelectable: ie,
              onError: Y,
            } = Re(Rs, rt),
            ce = zs(u);
          return (0, N.jsxs)("div", {
            className: "react-flow__edges",
            children: [
              (0, N.jsx)(Ar, { defaultColor: r, rfId: f }),
              ce.map((fe) =>
                (0, N.jsx)(
                  js,
                  {
                    id: fe,
                    edgesFocusable: Q,
                    edgesReconnectable: J,
                    elementsSelectable: ie,
                    noPanClassName: E,
                    onReconnect: x,
                    onContextMenu: z,
                    onMouseEnter: R,
                    onMouseMove: X,
                    onMouseLeave: V,
                    onClick: W,
                    reconnectRadius: v,
                    onDoubleClick: S,
                    onReconnectStart: P,
                    onReconnectEnd: I,
                    rfId: f,
                    onError: Y,
                    edgeTypes: y,
                    disableKeyboardA11y: F,
                  },
                  fe,
                ),
              ),
            ],
          });
        }
        Pr.displayName = "EdgeRenderer";
        const Ho = (0, L.memo)(Pr),
          Vs = (r) =>
            `translate(${r.transform[0]}px,${r.transform[1]}px) scale(${r.transform[2]})`;
        function Fs({ children: r }) {
          const u = Re(Vs);
          return (0, N.jsx)("div", {
            className:
              "react-flow__viewport xyflow__viewport react-flow__container",
            style: { transform: u },
            children: r,
          });
        }
        function Lo(r) {
          const u = Jt(),
            f = (0, L.useRef)(!1);
          (0, L.useEffect)(() => {
            !f.current &&
              u.viewportInitialized &&
              r &&
              (setTimeout(() => r(u), 1), (f.current = !0));
          }, [r, u.viewportInitialized]);
        }
        const jo = (r) => r.panZoom?.syncViewport;
        function Un(r) {
          const u = Re(jo),
            f = ot();
          return (
            (0, L.useEffect)(() => {
              r && (u?.(r), f.setState({ transform: [r.x, r.y, r.zoom] }));
            }, [r, u]),
            null
          );
        }
        function gr(r) {
          return r.connection.inProgress
            ? { ...r.connection, to: (0, H.Ff)(r.connection.to, r.transform) }
            : { ...r.connection };
        }
        function Ro(r) {
          return r
            ? (f) => {
                const y = gr(f);
                return r(y);
              }
            : gr;
        }
        function no(r) {
          const u = Ro(r);
          return Re(u, rt);
        }
        const Tr = (r) => ({
          nodesConnectable: r.nodesConnectable,
          isValid: r.connection.isValid,
          inProgress: r.connection.inProgress,
          width: r.width,
          height: r.height,
        });
        function Dr({ containerStyle: r, style: u, type: f, component: y }) {
          const {
            nodesConnectable: E,
            width: x,
            height: z,
            isValid: R,
            inProgress: X,
          } = Re(Tr, rt);
          return !(x && E && X)
            ? null
            : (0, N.jsx)("svg", {
                style: r,
                width: x,
                height: z,
                className: "react-flow__connectionline react-flow__container",
                children: (0, N.jsx)("g", {
                  className: Ee(["react-flow__connection", (0, H.HF)(R)]),
                  children: (0, N.jsx)(Or, {
                    style: u,
                    type: f,
                    CustomComponent: y,
                    isValid: R,
                  }),
                }),
              });
        }
        const Or = ({
          style: r,
          type: u = H.Do.Bezier,
          CustomComponent: f,
          isValid: y,
        }) => {
          const {
            inProgress: E,
            from: x,
            fromNode: z,
            fromHandle: R,
            fromPosition: X,
            to: V,
            toNode: W,
            toHandle: v,
            toPosition: S,
          } = no();
          if (!E) return;
          if (f)
            return (0, N.jsx)(f, {
              connectionLineType: u,
              connectionLineStyle: r,
              fromNode: z,
              fromHandle: R,
              fromX: x.x,
              fromY: x.y,
              toX: V.x,
              toY: V.y,
              fromPosition: X,
              toPosition: S,
              connectionStatus: (0, H.HF)(y),
              toNode: W,
              toHandle: v,
            });
          let P = "";
          const I = {
            sourceX: x.x,
            sourceY: x.y,
            sourcePosition: X,
            targetX: V.x,
            targetY: V.y,
            targetPosition: S,
          };
          switch (u) {
            case H.Do.Bezier:
              [P] = (0, H.Fp)(I);
              break;
            case H.Do.SimpleBezier:
              [P] = Qr(I);
              break;
            case H.Do.Step:
              [P] = (0, H.oN)({ ...I, borderRadius: 0 });
              break;
            case H.Do.SmoothStep:
              [P] = (0, H.oN)(I);
              break;
            default:
              [P] = (0, H.ah)(I);
          }
          return (0, N.jsx)("path", {
            d: P,
            fill: "none",
            className: "react-flow__connection-path",
            style: r,
          });
        };
        Or.displayName = "ConnectionLine";
        const un = {};
        function en(r = un) {
          const u = (0, L.useRef)(r),
            f = ot();
          (0, L.useEffect)(() => {}, [r]);
        }
        function qs() {
          const r = ot(),
            u = (0, L.useRef)(!1);
          (0, L.useEffect)(() => {}, []);
        }
        function yr({
          nodeTypes: r,
          edgeTypes: u,
          onInit: f,
          onNodeClick: y,
          onEdgeClick: E,
          onNodeDoubleClick: x,
          onEdgeDoubleClick: z,
          onNodeMouseEnter: R,
          onNodeMouseMove: X,
          onNodeMouseLeave: V,
          onNodeContextMenu: W,
          onSelectionContextMenu: v,
          onSelectionStart: S,
          onSelectionEnd: P,
          connectionLineType: I,
          connectionLineStyle: F,
          connectionLineComponent: Q,
          connectionLineContainerStyle: J,
          selectionKeyCode: ie,
          selectionOnDrag: Y,
          selectionMode: ce,
          multiSelectionKeyCode: fe,
          panActivationKeyCode: Te,
          zoomActivationKeyCode: Le,
          deleteKeyCode: Ke,
          onlyRenderVisibleElements: Fe,
          elementsSelectable: De,
          defaultViewport: ct,
          translateExtent: dt,
          minZoom: st,
          maxZoom: qe,
          preventScrolling: We,
          defaultMarkerColor: Xe,
          zoomOnScroll: et,
          zoomOnPinch: $e,
          panOnScroll: _e,
          panOnScrollSpeed: lt,
          panOnScrollMode: ut,
          zoomOnDoubleClick: gt,
          panOnDrag: St,
          onPaneClick: _t,
          onPaneMouseEnter: wt,
          onPaneMouseMove: At,
          onPaneMouseLeave: Dt,
          onPaneScroll: Ze,
          onPaneContextMenu: kt,
          paneClickDistance: Ut,
          nodeClickDistance: Ot,
          onEdgeContextMenu: nt,
          onEdgeMouseEnter: Mt,
          onEdgeMouseMove: jt,
          onEdgeMouseLeave: dn,
          reconnectRadius: wr,
          onReconnect: io,
          onReconnectStart: Mn,
          onReconnectEnd: pn,
          noDragClassName: Jn,
          noWheelClassName: Lr,
          noPanClassName: er,
          disableKeyboardA11y: $n,
          nodeExtent: xr,
          rfId: In,
          viewport: gn,
          onViewportChange: Rn,
        }) {
          return (
            en(r),
            en(u),
            qs(),
            Lo(f),
            Un(gn),
            (0, N.jsx)(Ds, {
              onPaneClick: _t,
              onPaneMouseEnter: wt,
              onPaneMouseMove: At,
              onPaneMouseLeave: Dt,
              onPaneContextMenu: kt,
              onPaneScroll: Ze,
              paneClickDistance: Ut,
              deleteKeyCode: Ke,
              selectionKeyCode: ie,
              selectionOnDrag: Y,
              selectionMode: ce,
              onSelectionStart: S,
              onSelectionEnd: P,
              multiSelectionKeyCode: fe,
              panActivationKeyCode: Te,
              zoomActivationKeyCode: Le,
              elementsSelectable: De,
              zoomOnScroll: et,
              zoomOnPinch: $e,
              zoomOnDoubleClick: gt,
              panOnScroll: _e,
              panOnScrollSpeed: lt,
              panOnScrollMode: ut,
              panOnDrag: St,
              defaultViewport: ct,
              translateExtent: dt,
              minZoom: st,
              maxZoom: qe,
              onSelectionContextMenu: v,
              preventScrolling: We,
              noDragClassName: Jn,
              noWheelClassName: Lr,
              noPanClassName: er,
              disableKeyboardA11y: $n,
              onViewportChange: Rn,
              isControlledViewport: !!gn,
              children: (0, N.jsxs)(Fs, {
                children: [
                  (0, N.jsx)(Ho, {
                    edgeTypes: u,
                    onEdgeClick: E,
                    onEdgeDoubleClick: z,
                    onReconnect: io,
                    onReconnectStart: Mn,
                    onReconnectEnd: pn,
                    onlyRenderVisibleElements: Fe,
                    onEdgeContextMenu: nt,
                    onEdgeMouseEnter: Mt,
                    onEdgeMouseMove: jt,
                    onEdgeMouseLeave: dn,
                    reconnectRadius: wr,
                    defaultMarkerColor: Xe,
                    noPanClassName: er,
                    disableKeyboardA11y: $n,
                    rfId: In,
                  }),
                  (0, N.jsx)(Dr, {
                    style: F,
                    type: I,
                    component: Q,
                    containerStyle: J,
                  }),
                  (0, N.jsx)("div", {
                    className: "react-flow__edgelabel-renderer",
                  }),
                  (0, N.jsx)(zt, {
                    nodeTypes: r,
                    onNodeClick: y,
                    onNodeDoubleClick: x,
                    onNodeMouseEnter: R,
                    onNodeMouseMove: X,
                    onNodeMouseLeave: V,
                    onNodeContextMenu: W,
                    nodeClickDistance: Ot,
                    onlyRenderVisibleElements: Fe,
                    noPanClassName: er,
                    noDragClassName: Jn,
                    disableKeyboardA11y: $n,
                    nodeExtent: xr,
                    rfId: In,
                  }),
                  (0, N.jsx)("div", {
                    className: "react-flow__viewport-portal",
                  }),
                ],
              }),
            })
          );
        }
        yr.displayName = "GraphView";
        const Xs = (0, L.memo)(yr),
          An = ({
            nodes: r,
            edges: u,
            defaultNodes: f,
            defaultEdges: y,
            width: E,
            height: x,
            fitView: z,
            nodeOrigin: R,
            nodeExtent: X,
          } = {}) => {
            const V = new Map(),
              W = new Map(),
              v = new Map(),
              S = new Map(),
              P = y ?? u ?? [],
              I = f ?? r ?? [],
              F = R ?? [0, 0],
              Q = X ?? H.ZO;
            (0, H.qn)(v, S, P),
              (0, H.bi)(I, V, W, {
                nodeOrigin: F,
                nodeExtent: Q,
                elevateNodesOnSelect: !1,
              });
            let J = [0, 0, 1];
            if (z && E && x) {
              const ie = (0, H.aZ)(V, {
                  filter: (Te) =>
                    !!(
                      (Te.width || Te.initialWidth) &&
                      (Te.height || Te.initialHeight)
                    ),
                }),
                { x: Y, y: ce, zoom: fe } = (0, H.R4)(ie, E, x, 0.5, 2, 0.1);
              J = [Y, ce, fe];
            }
            return {
              rfId: "1",
              width: 0,
              height: 0,
              transform: J,
              nodes: I,
              nodeLookup: V,
              parentLookup: W,
              edges: P,
              edgeLookup: S,
              connectionLookup: v,
              onNodesChange: null,
              onEdgesChange: null,
              hasDefaultNodes: f !== void 0,
              hasDefaultEdges: y !== void 0,
              panZoom: null,
              minZoom: 0.5,
              maxZoom: 2,
              translateExtent: H.ZO,
              nodeExtent: Q,
              nodesSelectionActive: !1,
              userSelectionActive: !1,
              userSelectionRect: null,
              connectionMode: H.WZ.Strict,
              domNode: null,
              paneDragging: !1,
              noPanClassName: "nopan",
              nodeOrigin: F,
              nodeDragThreshold: 1,
              snapGrid: [15, 15],
              snapToGrid: !1,
              nodesDraggable: !0,
              nodesConnectable: !0,
              nodesFocusable: !0,
              edgesFocusable: !0,
              edgesReconnectable: !0,
              elementsSelectable: !0,
              elevateNodesOnSelect: !0,
              elevateEdgesOnSelect: !1,
              fitViewOnInit: !1,
              fitViewDone: !1,
              fitViewOnInitOptions: void 0,
              selectNodesOnDrag: !0,
              multiSelectionActive: !1,
              connection: { ...H.bK },
              connectionClickStartHandle: null,
              connectOnClick: !0,
              ariaLiveMessage: "",
              autoPanOnConnect: !0,
              autoPanOnNodeDrag: !0,
              autoPanSpeed: 15,
              connectionRadius: 20,
              onError: H.KE,
              isValidConnection: void 0,
              onSelectionChangeHandlers: [],
              lib: "react",
              debug: !1,
            };
          },
          Vo = ({
            nodes: r,
            edges: u,
            defaultNodes: f,
            defaultEdges: y,
            width: E,
            height: x,
            fitView: z,
            nodeOrigin: R,
            nodeExtent: X,
          }) =>
            zn(
              (V, W) => ({
                ...An({
                  nodes: r,
                  edges: u,
                  width: E,
                  height: x,
                  fitView: z,
                  nodeOrigin: R,
                  nodeExtent: X,
                  defaultNodes: f,
                  defaultEdges: y,
                }),
                setNodes: (v) => {
                  const {
                    nodeLookup: S,
                    parentLookup: P,
                    nodeOrigin: I,
                    elevateNodesOnSelect: F,
                  } = W();
                  (0, H.bi)(v, S, P, {
                    nodeOrigin: I,
                    nodeExtent: X,
                    elevateNodesOnSelect: F,
                    checkEquality: !0,
                  }),
                    V({ nodes: v });
                },
                setEdges: (v) => {
                  const { connectionLookup: S, edgeLookup: P } = W();
                  (0, H.qn)(S, P, v), V({ edges: v });
                },
                setDefaultNodesAndEdges: (v, S) => {
                  if (v) {
                    const { setNodes: P } = W();
                    P(v), V({ hasDefaultNodes: !0 });
                  }
                  if (S) {
                    const { setEdges: P } = W();
                    P(S), V({ hasDefaultEdges: !0 });
                  }
                },
                updateNodeInternals: (v, S = { triggerFitView: !0 }) => {
                  const {
                      triggerNodeChanges: P,
                      nodeLookup: I,
                      parentLookup: F,
                      fitViewOnInit: Q,
                      fitViewDone: J,
                      fitViewOnInitOptions: ie,
                      domNode: Y,
                      nodeOrigin: ce,
                      nodeExtent: fe,
                      debug: Te,
                      fitViewSync: Le,
                    } = W(),
                    { changes: Ke, updatedInternals: Fe } = (0, H.uL)(
                      v,
                      I,
                      F,
                      Y,
                      ce,
                      fe,
                    );
                  if (Fe) {
                    if (
                      ((0, H.vS)(I, F, { nodeOrigin: ce, nodeExtent: fe }),
                      S.triggerFitView)
                    ) {
                      let De = J;
                      !J && Q && (De = Le({ ...ie, nodes: ie?.nodes })),
                        V({ fitViewDone: De });
                    } else V({});
                    Ke?.length > 0 &&
                      (Te &&
                        console.log("React Flow: trigger node changes", Ke),
                      P?.(Ke));
                  }
                },
                updateNodePositions: (v, S = !1) => {
                  const P = [],
                    I = [];
                  for (const [F, Q] of v) {
                    const J = !!(Q?.expandParent && Q?.parentId && Q?.position),
                      ie = {
                        id: F,
                        type: "position",
                        position: J
                          ? {
                              x: Math.max(0, Q.position.x),
                              y: Math.max(0, Q.position.y),
                            }
                          : Q.position,
                        dragging: S,
                      };
                    J &&
                      P.push({
                        id: F,
                        parentId: Q.parentId,
                        rect: {
                          ...Q.internals.positionAbsolute,
                          width: Q.measured.width,
                          height: Q.measured.height,
                        },
                      }),
                      I.push(ie);
                  }
                  if (P.length > 0) {
                    const {
                        nodeLookup: F,
                        parentLookup: Q,
                        nodeOrigin: J,
                      } = W(),
                      ie = (0, H.r8)(P, F, Q, J);
                    I.push(...ie);
                  }
                  W().triggerNodeChanges(I);
                },
                triggerNodeChanges: (v) => {
                  const {
                    onNodesChange: S,
                    setNodes: P,
                    nodes: I,
                    hasDefaultNodes: F,
                    debug: Q,
                  } = W();
                  if (v?.length) {
                    if (F) {
                      const J = Yt(v, I);
                      P(J);
                    }
                    Q && console.log("React Flow: trigger node changes", v),
                      S?.(v);
                  }
                },
                triggerEdgeChanges: (v) => {
                  const {
                    onEdgesChange: S,
                    setEdges: P,
                    edges: I,
                    hasDefaultEdges: F,
                    debug: Q,
                  } = W();
                  if (v?.length) {
                    if (F) {
                      const J = Er(v, I);
                      P(J);
                    }
                    Q && console.log("React Flow: trigger edge changes", v),
                      S?.(v);
                  }
                },
                addSelectedNodes: (v) => {
                  const {
                    multiSelectionActive: S,
                    edgeLookup: P,
                    nodeLookup: I,
                    triggerNodeChanges: F,
                    triggerEdgeChanges: Q,
                  } = W();
                  if (S) {
                    const J = v.map((ie) => an(ie, !0));
                    F(J);
                    return;
                  }
                  F(cn(I, new Set([...v]), !0)), Q(cn(P));
                },
                addSelectedEdges: (v) => {
                  const {
                    multiSelectionActive: S,
                    edgeLookup: P,
                    nodeLookup: I,
                    triggerNodeChanges: F,
                    triggerEdgeChanges: Q,
                  } = W();
                  if (S) {
                    const J = v.map((ie) => an(ie, !0));
                    Q(J);
                    return;
                  }
                  Q(cn(P, new Set([...v]))), F(cn(I, new Set(), !0));
                },
                unselectNodesAndEdges: ({ nodes: v, edges: S } = {}) => {
                  const {
                      edges: P,
                      nodes: I,
                      nodeLookup: F,
                      triggerNodeChanges: Q,
                      triggerEdgeChanges: J,
                    } = W(),
                    ie = v || I,
                    Y = S || P,
                    ce = ie.map((Te) => {
                      const Le = F.get(Te.id);
                      return Le && (Le.selected = !1), an(Te.id, !1);
                    }),
                    fe = Y.map((Te) => an(Te.id, !1));
                  Q(ce), J(fe);
                },
                setMinZoom: (v) => {
                  const { panZoom: S, maxZoom: P } = W();
                  S?.setScaleExtent([v, P]), V({ minZoom: v });
                },
                setMaxZoom: (v) => {
                  const { panZoom: S, minZoom: P } = W();
                  S?.setScaleExtent([P, v]), V({ maxZoom: v });
                },
                setTranslateExtent: (v) => {
                  W().panZoom?.setTranslateExtent(v), V({ translateExtent: v });
                },
                setPaneClickDistance: (v) => {
                  W().panZoom?.setClickDistance(v);
                },
                resetSelectedElements: () => {
                  const {
                      edges: v,
                      nodes: S,
                      triggerNodeChanges: P,
                      triggerEdgeChanges: I,
                    } = W(),
                    F = S.reduce(
                      (J, ie) => (ie.selected ? [...J, an(ie.id, !1)] : J),
                      [],
                    ),
                    Q = v.reduce(
                      (J, ie) => (ie.selected ? [...J, an(ie.id, !1)] : J),
                      [],
                    );
                  P(F), I(Q);
                },
                setNodeExtent: (v) => {
                  const {
                    nodes: S,
                    nodeLookup: P,
                    parentLookup: I,
                    nodeOrigin: F,
                    elevateNodesOnSelect: Q,
                    nodeExtent: J,
                  } = W();
                  (v[0][0] === J[0][0] &&
                    v[0][1] === J[0][1] &&
                    v[1][0] === J[1][0] &&
                    v[1][1] === J[1][1]) ||
                    ((0, H.bi)(S, P, I, {
                      nodeOrigin: F,
                      nodeExtent: v,
                      elevateNodesOnSelect: Q,
                      checkEquality: !1,
                    }),
                    V({ nodeExtent: v }));
                },
                panBy: (v) => {
                  const {
                    transform: S,
                    width: P,
                    height: I,
                    panZoom: F,
                    translateExtent: Q,
                  } = W();
                  return (0, H.No)({
                    delta: v,
                    panZoom: F,
                    transform: S,
                    translateExtent: Q,
                    width: P,
                    height: I,
                  });
                },
                fitView: (v) => {
                  const {
                    panZoom: S,
                    width: P,
                    height: I,
                    minZoom: F,
                    maxZoom: Q,
                    nodeLookup: J,
                  } = W();
                  if (!S) return Promise.resolve(!1);
                  const ie = (0, H.YV)(J, v);
                  return (0, H.Pr)(
                    {
                      nodes: ie,
                      width: P,
                      height: I,
                      panZoom: S,
                      minZoom: F,
                      maxZoom: Q,
                    },
                    v,
                  );
                },
                fitViewSync: (v) => {
                  const {
                    panZoom: S,
                    width: P,
                    height: I,
                    minZoom: F,
                    maxZoom: Q,
                    nodeLookup: J,
                  } = W();
                  if (!S) return !1;
                  const ie = (0, H.YV)(J, v);
                  return (
                    (0, H.Pr)(
                      {
                        nodes: ie,
                        width: P,
                        height: I,
                        panZoom: S,
                        minZoom: F,
                        maxZoom: Q,
                      },
                      v,
                    ),
                    ie.size > 0
                  );
                },
                cancelConnection: () => {
                  V({ connection: { ...H.bK } });
                },
                updateConnection: (v) => {
                  V({ connection: v });
                },
                reset: () => V({ ...An() }),
              }),
              Object.is,
            );
        function Br({
          initialNodes: r,
          initialEdges: u,
          defaultNodes: f,
          defaultEdges: y,
          initialWidth: E,
          initialHeight: x,
          fitView: z,
          nodeOrigin: R,
          nodeExtent: X,
          children: V,
        }) {
          const [W] = (0, L.useState)(() =>
            Vo({
              nodes: r,
              edges: u,
              defaultNodes: f,
              defaultEdges: y,
              width: E,
              height: x,
              fitView: z,
              nodeOrigin: R,
              nodeExtent: X,
            }),
          );
          return (0, N.jsx)(xn, {
            value: W,
            children: (0, N.jsx)(Qt, { children: V }),
          });
        }
        function Fo({
          children: r,
          nodes: u,
          edges: f,
          defaultNodes: y,
          defaultEdges: E,
          width: x,
          height: z,
          fitView: R,
          nodeOrigin: X,
          nodeExtent: V,
        }) {
          return (0, L.useContext)(on)
            ? (0, N.jsx)(N.Fragment, { children: r })
            : (0, N.jsx)(Br, {
                initialNodes: u,
                initialEdges: f,
                defaultNodes: y,
                defaultEdges: E,
                initialWidth: x,
                initialHeight: z,
                fitView: R,
                nodeOrigin: X,
                nodeExtent: V,
                children: r,
              });
        }
        const zr = {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          zIndex: 0,
        };
        function Ws(
          {
            nodes: r,
            edges: u,
            defaultNodes: f,
            defaultEdges: y,
            className: E,
            nodeTypes: x,
            edgeTypes: z,
            onNodeClick: R,
            onEdgeClick: X,
            onInit: V,
            onMove: W,
            onMoveStart: v,
            onMoveEnd: S,
            onConnect: P,
            onConnectStart: I,
            onConnectEnd: F,
            onClickConnectStart: Q,
            onClickConnectEnd: J,
            onNodeMouseEnter: ie,
            onNodeMouseMove: Y,
            onNodeMouseLeave: ce,
            onNodeContextMenu: fe,
            onNodeDoubleClick: Te,
            onNodeDragStart: Le,
            onNodeDrag: Ke,
            onNodeDragStop: Fe,
            onNodesDelete: De,
            onEdgesDelete: ct,
            onDelete: dt,
            onSelectionChange: st,
            onSelectionDragStart: qe,
            onSelectionDrag: We,
            onSelectionDragStop: Xe,
            onSelectionContextMenu: et,
            onSelectionStart: $e,
            onSelectionEnd: _e,
            onBeforeDelete: lt,
            connectionMode: ut,
            connectionLineType: gt = H.Do.Bezier,
            connectionLineStyle: St,
            connectionLineComponent: _t,
            connectionLineContainerStyle: wt,
            deleteKeyCode: At = "Backspace",
            selectionKeyCode: Dt = "Shift",
            selectionOnDrag: Ze = !1,
            selectionMode: kt = H.Qc.Full,
            panActivationKeyCode: Ut = "Space",
            multiSelectionKeyCode: Ot = (0, H.Ue)() ? "Meta" : "Control",
            zoomActivationKeyCode: nt = (0, H.Ue)() ? "Meta" : "Control",
            snapToGrid: Mt,
            snapGrid: jt,
            onlyRenderVisibleElements: dn = !1,
            selectNodesOnDrag: wr,
            nodesDraggable: io,
            nodesConnectable: Mn,
            nodesFocusable: pn,
            nodeOrigin: Jn = Et,
            edgesFocusable: Lr,
            edgesReconnectable: er,
            elementsSelectable: $n = !0,
            defaultViewport: xr = mt,
            minZoom: In = 0.5,
            maxZoom: gn = 2,
            translateExtent: Rn = H.ZO,
            preventScrolling: Qo = !0,
            nodeExtent: tr,
            defaultMarkerColor: Ai = "#b1b1b7",
            zoomOnScroll: kn = !0,
            zoomOnPinch: jr = !0,
            panOnScroll: Rr = !1,
            panOnScrollSpeed: Vr = 0.5,
            panOnScrollMode: Jo = H.ny.Free,
            zoomOnDoubleClick: es = !0,
            panOnDrag: ao = !0,
            onPaneClick: nr,
            onPaneMouseEnter: Pn,
            onPaneMouseMove: Mi,
            onPaneMouseLeave: $i,
            onPaneScroll: ht,
            onPaneContextMenu: co,
            paneClickDistance: lo = 0,
            nodeClickDistance: Ii = 0,
            children: ki,
            onReconnect: Fr,
            onReconnectStart: Tn,
            onReconnectEnd: ts,
            onEdgeContextMenu: uo,
            onEdgeDoubleClick: vr,
            onEdgeMouseEnter: ns,
            onEdgeMouseMove: rs,
            onEdgeMouseLeave: os,
            reconnectRadius: Pi = 10,
            onNodesChange: Ti,
            onEdgesChange: ss,
            noDragClassName: Di = "nodrag",
            noWheelClassName: Oi = "nowheel",
            noPanClassName: Bi = "nopan",
            fitView: is,
            fitViewOptions: as,
            connectOnClick: zi,
            attributionPosition: cs,
            proOptions: Hi,
            defaultEdgeOptions: Li,
            elevateNodesOnSelect: ji,
            elevateEdgesOnSelect: ls,
            disableKeyboardA11y: us = !1,
            autoPanOnConnect: ds,
            autoPanOnNodeDrag: _r,
            autoPanSpeed: fs,
            connectionRadius: hs,
            isValidConnection: Ri,
            onError: ga,
            style: fo,
            id: ps,
            nodeDragThreshold: ho,
            viewport: Vi,
            onViewportChange: Fi,
            width: qi,
            height: po,
            colorMode: gs = "light",
            debug: Xi,
            ...ys
          },
          Wi,
        ) {
          const go = ps || "1",
            Yi = at(gs);
          return (0, N.jsx)("div", {
            "data-testid": "rf__wrapper",
            ...ys,
            style: { ...fo, ...zr },
            ref: Wi,
            className: Ee(["react-flow", E, Yi]),
            id: ps,
            children: (0, N.jsxs)(Fo, {
              nodes: r,
              edges: u,
              width: qi,
              height: po,
              fitView: is,
              nodeOrigin: Jn,
              nodeExtent: tr,
              children: [
                (0, N.jsx)(Xs, {
                  onInit: V,
                  onNodeClick: R,
                  onEdgeClick: X,
                  onNodeMouseEnter: ie,
                  onNodeMouseMove: Y,
                  onNodeMouseLeave: ce,
                  onNodeContextMenu: fe,
                  onNodeDoubleClick: Te,
                  nodeTypes: x,
                  edgeTypes: z,
                  connectionLineType: gt,
                  connectionLineStyle: St,
                  connectionLineComponent: _t,
                  connectionLineContainerStyle: wt,
                  selectionKeyCode: Dt,
                  selectionOnDrag: Ze,
                  selectionMode: kt,
                  deleteKeyCode: At,
                  multiSelectionKeyCode: Ot,
                  panActivationKeyCode: Ut,
                  zoomActivationKeyCode: nt,
                  onlyRenderVisibleElements: dn,
                  defaultViewport: xr,
                  translateExtent: Rn,
                  minZoom: In,
                  maxZoom: gn,
                  preventScrolling: Qo,
                  zoomOnScroll: kn,
                  zoomOnPinch: jr,
                  zoomOnDoubleClick: es,
                  panOnScroll: Rr,
                  panOnScrollSpeed: Vr,
                  panOnScrollMode: Jo,
                  panOnDrag: ao,
                  onPaneClick: nr,
                  onPaneMouseEnter: Pn,
                  onPaneMouseMove: Mi,
                  onPaneMouseLeave: $i,
                  onPaneScroll: ht,
                  onPaneContextMenu: co,
                  paneClickDistance: lo,
                  nodeClickDistance: Ii,
                  onSelectionContextMenu: et,
                  onSelectionStart: $e,
                  onSelectionEnd: _e,
                  onReconnect: Fr,
                  onReconnectStart: Tn,
                  onReconnectEnd: ts,
                  onEdgeContextMenu: uo,
                  onEdgeDoubleClick: vr,
                  onEdgeMouseEnter: ns,
                  onEdgeMouseMove: rs,
                  onEdgeMouseLeave: os,
                  reconnectRadius: Pi,
                  defaultMarkerColor: Ai,
                  noDragClassName: Di,
                  noWheelClassName: Oi,
                  noPanClassName: Bi,
                  rfId: go,
                  disableKeyboardA11y: us,
                  nodeExtent: tr,
                  viewport: Vi,
                  onViewportChange: Fi,
                }),
                (0, N.jsx)(sn, {
                  nodes: r,
                  edges: u,
                  defaultNodes: f,
                  defaultEdges: y,
                  onConnect: P,
                  onConnectStart: I,
                  onConnectEnd: F,
                  onClickConnectStart: Q,
                  onClickConnectEnd: J,
                  nodesDraggable: io,
                  nodesConnectable: Mn,
                  nodesFocusable: pn,
                  edgesFocusable: Lr,
                  edgesReconnectable: er,
                  elementsSelectable: $n,
                  elevateNodesOnSelect: ji,
                  elevateEdgesOnSelect: ls,
                  minZoom: In,
                  maxZoom: gn,
                  nodeExtent: tr,
                  onNodesChange: Ti,
                  onEdgesChange: ss,
                  snapToGrid: Mt,
                  snapGrid: jt,
                  connectionMode: ut,
                  translateExtent: Rn,
                  connectOnClick: zi,
                  defaultEdgeOptions: Li,
                  fitView: is,
                  fitViewOptions: as,
                  onNodesDelete: De,
                  onEdgesDelete: ct,
                  onDelete: dt,
                  onNodeDragStart: Le,
                  onNodeDrag: Ke,
                  onNodeDragStop: Fe,
                  onSelectionDrag: We,
                  onSelectionDragStart: qe,
                  onSelectionDragStop: Xe,
                  onMove: W,
                  onMoveStart: v,
                  onMoveEnd: S,
                  noPanClassName: Bi,
                  nodeOrigin: Jn,
                  rfId: go,
                  autoPanOnConnect: ds,
                  autoPanOnNodeDrag: _r,
                  autoPanSpeed: fs,
                  onError: ga,
                  connectionRadius: hs,
                  isValidConnection: Ri,
                  selectNodesOnDrag: wr,
                  nodeDragThreshold: ho,
                  onBeforeDelete: lt,
                  paneClickDistance: lo,
                  debug: Xi,
                }),
                (0, N.jsx)(it, { onSelectionChange: st }),
                ki,
                (0, N.jsx)(ae, { proOptions: Hi, position: cs }),
                (0, N.jsx)(k, { rfId: go, disableKeyboardA11y: us }),
              ],
            }),
          });
        }
        var Qn = Ue(Ws);
        const ro = (r) =>
          r.domNode?.querySelector(".react-flow__edgelabel-renderer");
        function ra({ children: r }) {
          const u = Re(ro);
          return u ? createPortal(r, u) : null;
        }
        const Ys = (r) =>
          r.domNode?.querySelector(".react-flow__viewport-portal");
        function oa({ children: r }) {
          const u = Re(Ys);
          return u ? createPortal(r, u) : null;
        }
        function Ks() {
          const r = ot();
          return (0, L.useCallback)((u) => {
            const { domNode: f, updateNodeInternals: y } = r.getState(),
              E = Array.isArray(u) ? u : [u],
              x = new Map();
            E.forEach((z) => {
              const R = f?.querySelector(`.react-flow__node[data-id="${z}"]`);
              R && x.set(z, { id: z, nodeElement: R, force: !0 });
            }),
              requestAnimationFrame(() => y(x, { triggerFitView: !1 }));
          }, []);
        }
        const Zs = (r) => r.nodes;
        function qo() {
          return Re(Zs, shallow);
        }
        const Xo = (r) => r.edges;
        function Gs() {
          return Re(Xo, shallow);
        }
        const Us = (r) => ({
          x: r.transform[0],
          y: r.transform[1],
          zoom: r.transform[2],
        });
        function Qs() {
          return Re(Us, shallow);
        }
        function Js(r) {
          const [u, f] = (0, L.useState)(r),
            y = (0, L.useCallback)((E) => f((x) => Yt(E, x)), []);
          return [u, f, y];
        }
        function ei(r) {
          const [u, f] = (0, L.useState)(r),
            y = (0, L.useCallback)((E) => f((x) => Er(E, x)), []);
          return [u, f, y];
        }
        function mr({ onStart: r, onChange: u, onEnd: f }) {
          const y = ot();
          useEffect(() => {
            y.setState({ onViewportChangeStart: r });
          }, [r]),
            useEffect(() => {
              y.setState({ onViewportChange: u });
            }, [u]),
            useEffect(() => {
              y.setState({ onViewportChangeEnd: f });
            }, [f]);
        }
        function sa({ onChange: r }) {
          const u = ot();
          useEffect(() => {
            const f = [...u.getState().onSelectionChangeHandlers, r];
            return (
              u.setState({ onSelectionChangeHandlers: f }),
              () => {
                const y = u
                  .getState()
                  .onSelectionChangeHandlers.filter((E) => E !== r);
                u.setState({ onSelectionChangeHandlers: y });
              }
            );
          }, [r]);
        }
        const ti = (r) => (u) => {
            if (u.nodeLookup.size === 0) return !1;
            for (const [, { hidden: f, internals: y }] of u.nodeLookup)
              if (
                (r.includeHiddenNodes || !f) &&
                (y.handleBounds === void 0 || !nodeHasDimensions(y.userNode))
              )
                return !1;
            return !0;
          },
          ni = { includeHiddenNodes: !1 };
        function ia(r = ni) {
          return Re(ti(r));
        }
        function aa({
          type: r,
          id: u = null,
          nodeId: f,
          onConnect: y,
          onDisconnect: E,
        }) {
          const x = Kn(),
            z = f ?? x,
            R = useRef(null),
            X = Re(
              (V) => V.connectionLookup.get(`${z}-${r}-${u}`),
              areConnectionMapsEqual,
            );
          return (
            useEffect(() => {
              if (R.current && R.current !== X) {
                const V = X ?? new Map();
                handleConnectionChange(R.current, V, E),
                  handleConnectionChange(V, R.current, y);
              }
              R.current = X ?? new Map();
            }, [X, y, E]),
            useMemo(() => Array.from(X?.values() ?? []), [X])
          );
        }
        function ca(r) {
          return Re(
            useCallback(
              (f) => {
                const y = [],
                  E = Array.isArray(r),
                  x = E ? r : [r];
                for (const z of x) {
                  const R = f.nodeLookup.get(z);
                  R && y.push({ id: R.id, type: R.type, data: R.data });
                }
                return E ? y : (y[0] ?? null);
              },
              [r],
            ),
            shallowNodeData,
          );
        }
        function la(r) {
          return Re(
            useCallback((f) => f.nodeLookup.get(r), [r]),
            shallow,
          );
        }
        function ri({ dimensions: r, lineWidth: u, variant: f, className: y }) {
          return (0, N.jsx)("path", {
            strokeWidth: u,
            d: `M${r[0] / 2} 0 V${r[1]} M0 ${r[1] / 2} H${r[0]}`,
            className: Ee(["react-flow__background-pattern", f, y]),
          });
        }
        function oi({ radius: r, className: u }) {
          return (0, N.jsx)("circle", {
            cx: r,
            cy: r,
            r,
            className: Ee(["react-flow__background-pattern", "dots", u]),
          });
        }
        var nn;
        (function (r) {
          (r.Lines = "lines"), (r.Dots = "dots"), (r.Cross = "cross");
        })(nn || (nn = {}));
        const si = { [nn.Dots]: 1, [nn.Lines]: 1, [nn.Cross]: 6 },
          ii = (r) => ({
            transform: r.transform,
            patternId: `pattern-${r.rfId}`,
          });
        function Wo({
          id: r,
          variant: u = nn.Dots,
          gap: f = 20,
          size: y,
          lineWidth: E = 1,
          offset: x = 0,
          color: z,
          bgColor: R,
          style: X,
          className: V,
          patternClassName: W,
        }) {
          const v = (0, L.useRef)(null),
            { transform: S, patternId: P } = Re(ii, rt),
            I = y || si[u],
            F = u === nn.Dots,
            Q = u === nn.Cross,
            J = Array.isArray(f) ? f : [f, f],
            ie = [J[0] * S[2] || 1, J[1] * S[2] || 1],
            Y = I * S[2],
            ce = Array.isArray(x) ? x : [x, x],
            fe = Q ? [Y, Y] : ie,
            Te = [ce[0] * S[2] || 1 + fe[0] / 2, ce[1] * S[2] || 1 + fe[1] / 2],
            Le = `${P}${r || ""}`;
          return (0, N.jsxs)("svg", {
            className: Ee(["react-flow__background", V]),
            style: {
              ...X,
              ...Ln,
              "--xy-background-color-props": R,
              "--xy-background-pattern-color-props": z,
            },
            ref: v,
            "data-testid": "rf__background",
            children: [
              (0, N.jsx)("pattern", {
                id: Le,
                x: S[0] % ie[0],
                y: S[1] % ie[1],
                width: ie[0],
                height: ie[1],
                patternUnits: "userSpaceOnUse",
                patternTransform: `translate(-${Te[0]},-${Te[1]})`,
                children: F
                  ? (0, N.jsx)(oi, { radius: Y / 2, className: W })
                  : (0, N.jsx)(ri, {
                      dimensions: fe,
                      lineWidth: E,
                      variant: u,
                      className: W,
                    }),
              }),
              (0, N.jsx)("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: `url(#${Le})`,
              }),
            ],
          });
        }
        Wo.displayName = "Background";
        const ua = (0, L.memo)(Wo);
        function ai() {
          return (0, N.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 32",
            children: (0, N.jsx)("path", {
              d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
            }),
          });
        }
        function ci() {
          return (0, N.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 5",
            children: (0, N.jsx)("path", { d: "M0 0h32v4.2H0z" }),
          });
        }
        function li() {
          return (0, N.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 32 30",
            children: (0, N.jsx)("path", {
              d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
            }),
          });
        }
        function ui() {
          return (0, N.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 32",
            children: (0, N.jsx)("path", {
              d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
            }),
          });
        }
        function di() {
          return (0, N.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 25 32",
            children: (0, N.jsx)("path", {
              d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
            }),
          });
        }
        function Hr({ children: r, className: u, ...f }) {
          return (0, N.jsx)("button", {
            type: "button",
            className: Ee(["react-flow__controls-button", u]),
            ...f,
            children: r,
          });
        }
        const fi = (r) => ({
          isInteractive:
            r.nodesDraggable || r.nodesConnectable || r.elementsSelectable,
          minZoomReached: r.transform[2] <= r.minZoom,
          maxZoomReached: r.transform[2] >= r.maxZoom,
        });
        function oo({
          style: r,
          showZoom: u = !0,
          showFitView: f = !0,
          showInteractive: y = !0,
          fitViewOptions: E,
          onZoomIn: x,
          onZoomOut: z,
          onFitView: R,
          onInteractiveChange: X,
          className: V,
          children: W,
          position: v = "bottom-left",
          orientation: S = "vertical",
          "aria-label": P = "React Flow controls",
        }) {
          const I = ot(),
            {
              isInteractive: F,
              minZoomReached: Q,
              maxZoomReached: J,
            } = Re(fi, rt),
            { zoomIn: ie, zoomOut: Y, fitView: ce } = Jt(),
            fe = () => {
              ie(), x?.();
            },
            Te = () => {
              Y(), z?.();
            },
            Le = () => {
              ce(E), R?.();
            },
            Ke = () => {
              I.setState({
                nodesDraggable: !F,
                nodesConnectable: !F,
                elementsSelectable: !F,
              }),
                X?.(!F);
            },
            Fe = S === "horizontal" ? "horizontal" : "vertical";
          return (0, N.jsxs)(ne, {
            className: Ee(["react-flow__controls", Fe, V]),
            position: v,
            style: r,
            "data-testid": "rf__controls",
            "aria-label": P,
            children: [
              u &&
                (0, N.jsxs)(N.Fragment, {
                  children: [
                    (0, N.jsx)(Hr, {
                      onClick: fe,
                      className: "react-flow__controls-zoomin",
                      title: "zoom in",
                      "aria-label": "zoom in",
                      disabled: J,
                      children: (0, N.jsx)(ai, {}),
                    }),
                    (0, N.jsx)(Hr, {
                      onClick: Te,
                      className: "react-flow__controls-zoomout",
                      title: "zoom out",
                      "aria-label": "zoom out",
                      disabled: Q,
                      children: (0, N.jsx)(ci, {}),
                    }),
                  ],
                }),
              f &&
                (0, N.jsx)(Hr, {
                  className: "react-flow__controls-fitview",
                  onClick: Le,
                  title: "fit view",
                  "aria-label": "fit view",
                  children: (0, N.jsx)(li, {}),
                }),
              y &&
                (0, N.jsx)(Hr, {
                  className: "react-flow__controls-interactive",
                  onClick: Ke,
                  title: "toggle interactivity",
                  "aria-label": "toggle interactivity",
                  children: F ? (0, N.jsx)(di, {}) : (0, N.jsx)(ui, {}),
                }),
              W,
            ],
          });
        }
        oo.displayName = "Controls";
        const da = (0, L.memo)(oo);
        function hi({
          id: r,
          x: u,
          y: f,
          width: y,
          height: E,
          style: x,
          color: z,
          strokeColor: R,
          strokeWidth: X,
          className: V,
          borderRadius: W,
          shapeRendering: v,
          selected: S,
          onClick: P,
        }) {
          const { background: I, backgroundColor: F } = x || {},
            Q = z || I || F;
          return (0, N.jsx)("rect", {
            className: Ee(["react-flow__minimap-node", { selected: S }, V]),
            x: u,
            y: f,
            rx: W,
            ry: W,
            width: y,
            height: E,
            style: { fill: Q, stroke: R, strokeWidth: X },
            shapeRendering: v,
            onClick: P ? (J) => P(J, r) : void 0,
          });
        }
        const pi = (0, L.memo)(hi),
          gi = (r) => r.nodes.map((u) => u.id),
          so = (r) => (r instanceof Function ? r : () => r);
        function yi({
          nodeStrokeColor: r,
          nodeColor: u,
          nodeClassName: f = "",
          nodeBorderRadius: y = 5,
          nodeStrokeWidth: E,
          nodeComponent: x = pi,
          onClick: z,
        }) {
          const R = Re(gi, rt),
            X = so(u),
            V = so(r),
            W = so(f),
            v =
              typeof window > "u" || window.chrome
                ? "crispEdges"
                : "geometricPrecision";
          return (0, N.jsx)(N.Fragment, {
            children: R.map((S) =>
              (0, N.jsx)(
                Yo,
                {
                  id: S,
                  nodeColorFunc: X,
                  nodeStrokeColorFunc: V,
                  nodeClassNameFunc: W,
                  nodeBorderRadius: y,
                  nodeStrokeWidth: E,
                  NodeComponent: x,
                  onClick: z,
                  shapeRendering: v,
                },
                S,
              ),
            ),
          });
        }
        function mi({
          id: r,
          nodeColorFunc: u,
          nodeStrokeColorFunc: f,
          nodeClassNameFunc: y,
          nodeBorderRadius: E,
          nodeStrokeWidth: x,
          shapeRendering: z,
          NodeComponent: R,
          onClick: X,
        }) {
          const {
            node: V,
            x: W,
            y: v,
            width: S,
            height: P,
          } = Re((I) => {
            const F = I.nodeLookup.get(r),
              { x: Q, y: J } = F.internals.positionAbsolute,
              { width: ie, height: Y } = (0, H.uD)(F);
            return { node: F, x: Q, y: J, width: ie, height: Y };
          }, rt);
          return !V || V.hidden || !(0, H.QE)(V)
            ? null
            : (0, N.jsx)(R, {
                x: W,
                y: v,
                width: S,
                height: P,
                style: V.style,
                selected: !!V.selected,
                className: y(V),
                color: u(V),
                borderRadius: E,
                strokeColor: f(V),
                strokeWidth: x,
                shapeRendering: z,
                onClick: X,
                id: V.id,
              });
        }
        const Yo = (0, L.memo)(mi);
        var Ko = (0, L.memo)(yi);
        const Zo = 200,
          wi = 150,
          xi = (r) => {
            const u = {
              x: -r.transform[0] / r.transform[2],
              y: -r.transform[1] / r.transform[2],
              width: r.width / r.transform[2],
              height: r.height / r.transform[2],
            };
            return {
              viewBB: u,
              boundingRect:
                r.nodeLookup.size > 0
                  ? (0, H.Mi)((0, H.aZ)(r.nodeLookup), u)
                  : u,
              rfId: r.rfId,
              panZoom: r.panZoom,
              translateExtent: r.translateExtent,
              flowWidth: r.width,
              flowHeight: r.height,
            };
          },
          vi = "react-flow__minimap-desc";
        function Go({
          style: r,
          className: u,
          nodeStrokeColor: f,
          nodeColor: y,
          nodeClassName: E = "",
          nodeBorderRadius: x = 5,
          nodeStrokeWidth: z,
          nodeComponent: R,
          bgColor: X,
          maskColor: V,
          maskStrokeColor: W,
          maskStrokeWidth: v,
          position: S = "bottom-right",
          onClick: P,
          onNodeClick: I,
          pannable: F = !1,
          zoomable: Q = !1,
          ariaLabel: J = "React Flow mini map",
          inversePan: ie,
          zoomStep: Y = 10,
          offsetScale: ce = 5,
        }) {
          const fe = ot(),
            Te = (0, L.useRef)(null),
            {
              boundingRect: Le,
              viewBB: Ke,
              rfId: Fe,
              panZoom: De,
              translateExtent: ct,
              flowWidth: dt,
              flowHeight: st,
            } = Re(xi, rt),
            qe = r?.width ?? Zo,
            We = r?.height ?? wi,
            Xe = Le.width / qe,
            et = Le.height / We,
            $e = Math.max(Xe, et),
            _e = $e * qe,
            lt = $e * We,
            ut = ce * $e,
            gt = Le.x - (_e - Le.width) / 2 - ut,
            St = Le.y - (lt - Le.height) / 2 - ut,
            _t = _e + ut * 2,
            wt = lt + ut * 2,
            At = `${vi}-${Fe}`,
            Dt = (0, L.useRef)(0),
            Ze = (0, L.useRef)();
          (Dt.current = $e),
            (0, L.useEffect)(() => {
              if (Te.current && De)
                return (
                  (Ze.current = (0, H.di)({
                    domNode: Te.current,
                    panZoom: De,
                    getTransform: () => fe.getState().transform,
                    getViewScale: () => Dt.current,
                  })),
                  () => {
                    Ze.current?.destroy();
                  }
                );
            }, [De]),
            (0, L.useEffect)(() => {
              Ze.current?.update({
                translateExtent: ct,
                width: dt,
                height: st,
                inversePan: ie,
                pannable: F,
                zoomStep: Y,
                zoomable: Q,
              });
            }, [F, Q, ie, Y, ct, dt, st]);
          const kt = P
              ? (Ot) => {
                  const [nt, Mt] = Ze.current?.pointer(Ot) || [0, 0];
                  P(Ot, { x: nt, y: Mt });
                }
              : void 0,
            Ut = I
              ? (0, L.useCallback)((Ot, nt) => {
                  const Mt = fe.getState().nodeLookup.get(nt);
                  I(Ot, Mt);
                }, [])
              : void 0;
          return (0, N.jsx)(ne, {
            position: S,
            style: {
              ...r,
              "--xy-minimap-background-color-props":
                typeof X == "string" ? X : void 0,
              "--xy-minimap-mask-background-color-props":
                typeof V == "string" ? V : void 0,
              "--xy-minimap-mask-stroke-color-props":
                typeof W == "string" ? W : void 0,
              "--xy-minimap-mask-stroke-width-props":
                typeof v == "number" ? v * $e : void 0,
              "--xy-minimap-node-background-color-props":
                typeof y == "string" ? y : void 0,
              "--xy-minimap-node-stroke-color-props":
                typeof f == "string" ? f : void 0,
              "--xy-minimap-node-stroke-width-props":
                typeof z == "string" ? z : void 0,
            },
            className: Ee(["react-flow__minimap", u]),
            "data-testid": "rf__minimap",
            children: (0, N.jsxs)("svg", {
              width: qe,
              height: We,
              viewBox: `${gt} ${St} ${_t} ${wt}`,
              className: "react-flow__minimap-svg",
              role: "img",
              "aria-labelledby": At,
              ref: Te,
              onClick: kt,
              children: [
                J && (0, N.jsx)("title", { id: At, children: J }),
                (0, N.jsx)(Ko, {
                  onClick: Ut,
                  nodeColor: y,
                  nodeStrokeColor: f,
                  nodeBorderRadius: x,
                  nodeClassName: E,
                  nodeStrokeWidth: z,
                  nodeComponent: R,
                }),
                (0, N.jsx)("path", {
                  className: "react-flow__minimap-mask",
                  d: `M${gt - ut},${St - ut}h${_t + ut * 2}v${wt + ut * 2}h${-_t - ut * 2}z
        M${Ke.x},${Ke.y}h${Ke.width}v${Ke.height}h${-Ke.width}z`,
                  fillRule: "evenodd",
                  pointerEvents: "none",
                }),
              ],
            }),
          });
        }
        Go.displayName = "MiniMap";
        const fa = (0, L.memo)(Go);
        function _i({
          nodeId: r,
          position: u,
          variant: f = H.xN.Handle,
          className: y,
          style: E = {},
          children: x,
          color: z,
          minWidth: R = 10,
          minHeight: X = 10,
          maxWidth: V = Number.MAX_VALUE,
          maxHeight: W = Number.MAX_VALUE,
          keepAspectRatio: v = !1,
          shouldResize: S,
          onResizeStart: P,
          onResize: I,
          onResizeEnd: F,
        }) {
          const Q = Kn(),
            J = typeof r == "string" ? r : Q,
            ie = ot(),
            Y = (0, L.useRef)(null),
            ce = f === H.xN.Line ? "right" : "bottom-right",
            fe = u ?? ce,
            Te = (0, L.useRef)(null);
          (0, L.useEffect)(() => {
            if (!(!Y.current || !J))
              return (
                Te.current ||
                  (Te.current = (0, H.ET)({
                    domNode: Y.current,
                    nodeId: J,
                    getStoreItems: () => {
                      const {
                        nodeLookup: De,
                        transform: ct,
                        snapGrid: dt,
                        snapToGrid: st,
                        nodeOrigin: qe,
                        domNode: We,
                      } = ie.getState();
                      return {
                        nodeLookup: De,
                        transform: ct,
                        snapGrid: dt,
                        snapToGrid: st,
                        nodeOrigin: qe,
                        paneDomNode: We,
                      };
                    },
                    onChange: (De, ct) => {
                      const {
                          triggerNodeChanges: dt,
                          nodeLookup: st,
                          parentLookup: qe,
                          nodeOrigin: We,
                        } = ie.getState(),
                        Xe = [],
                        et = { x: De.x, y: De.y },
                        $e = st.get(J);
                      if ($e && $e.expandParent && $e.parentId) {
                        const _e = $e.origin ?? We,
                          lt = De.width ?? $e.measured.width,
                          ut = De.height ?? $e.measured.height,
                          gt = {
                            id: $e.id,
                            parentId: $e.parentId,
                            rect: {
                              width: lt,
                              height: ut,
                              ...(0, H.us)(
                                {
                                  x: De.x ?? $e.position.x,
                                  y: De.y ?? $e.position.y,
                                },
                                { width: lt, height: ut },
                                $e.parentId,
                                st,
                                _e,
                              ),
                            },
                          },
                          St = (0, H.r8)([gt], st, qe, We);
                        Xe.push(...St),
                          (et.x = De.x ? Math.max(_e[0] * lt, De.x) : void 0),
                          (et.y = De.y ? Math.max(_e[1] * ut, De.y) : void 0);
                      }
                      if (et.x !== void 0 && et.y !== void 0) {
                        const _e = {
                          id: J,
                          type: "position",
                          position: { ...et },
                        };
                        Xe.push(_e);
                      }
                      if (De.width !== void 0 && De.height !== void 0) {
                        const _e = {
                          id: J,
                          type: "dimensions",
                          resizing: !0,
                          setAttributes: !0,
                          dimensions: { width: De.width, height: De.height },
                        };
                        Xe.push(_e);
                      }
                      for (const _e of ct) {
                        const lt = { ..._e, type: "position" };
                        Xe.push(lt);
                      }
                      dt(Xe);
                    },
                    onEnd: () => {
                      const De = { id: J, type: "dimensions", resizing: !1 };
                      ie.getState().triggerNodeChanges([De]);
                    },
                  })),
                Te.current.update({
                  controlPosition: fe,
                  boundaries: {
                    minWidth: R,
                    minHeight: X,
                    maxWidth: V,
                    maxHeight: W,
                  },
                  keepAspectRatio: v,
                  onResizeStart: P,
                  onResize: I,
                  onResizeEnd: F,
                  shouldResize: S,
                }),
                () => {
                  Te.current?.destroy();
                }
              );
          }, [fe, R, X, V, W, v, P, I, F, S]);
          const Le = fe.split("-"),
            Ke = f === H.xN.Line ? "borderColor" : "backgroundColor",
            Fe = z ? { ...E, [Ke]: z } : E;
          return (0, N.jsx)("div", {
            className: Ee([
              "react-flow__resize-control",
              "nodrag",
              ...Le,
              f,
              y,
            ]),
            ref: Y,
            style: Fe,
            children: x,
          });
        }
        const Uo = (0, L.memo)(_i);
        function ha({
          nodeId: r,
          isVisible: u = !0,
          handleClassName: f,
          handleStyle: y,
          lineClassName: E,
          lineStyle: x,
          color: z,
          minWidth: R = 10,
          minHeight: X = 10,
          maxWidth: V = Number.MAX_VALUE,
          maxHeight: W = Number.MAX_VALUE,
          keepAspectRatio: v = !1,
          shouldResize: S,
          onResizeStart: P,
          onResize: I,
          onResizeEnd: F,
        }) {
          return u
            ? jsxs(Fragment, {
                children: [
                  XY_RESIZER_LINE_POSITIONS.map((Q) =>
                    jsx(
                      Uo,
                      {
                        className: E,
                        style: x,
                        nodeId: r,
                        position: Q,
                        variant: ResizeControlVariant.Line,
                        color: z,
                        minWidth: R,
                        minHeight: X,
                        maxWidth: V,
                        maxHeight: W,
                        onResizeStart: P,
                        keepAspectRatio: v,
                        shouldResize: S,
                        onResize: I,
                        onResizeEnd: F,
                      },
                      Q,
                    ),
                  ),
                  XY_RESIZER_HANDLE_POSITIONS.map((Q) =>
                    jsx(
                      Uo,
                      {
                        className: f,
                        style: y,
                        nodeId: r,
                        position: Q,
                        color: z,
                        minWidth: R,
                        minHeight: X,
                        maxWidth: V,
                        maxHeight: W,
                        onResizeStart: P,
                        keepAspectRatio: v,
                        shouldResize: S,
                        onResize: I,
                        onResizeEnd: F,
                      },
                      Q,
                    ),
                  ),
                ],
              })
            : null;
        }
        const bi = (r) => r.domNode?.querySelector(".react-flow__renderer");
        function Ei({ children: r }) {
          const u = Re(bi);
          return u ? createPortal(r, u) : null;
        }
        const Si = (r, u) =>
            r?.internals.positionAbsolute.x !==
              u?.internals.positionAbsolute.x ||
            r?.internals.positionAbsolute.y !==
              u?.internals.positionAbsolute.y ||
            r?.measured.width !== u?.measured.width ||
            r?.measured.height !== u?.measured.height ||
            r?.selected !== u?.selected ||
            r?.internals.z !== u?.internals.z,
          Ci = (r, u) => {
            if (r.size !== u.size) return !1;
            for (const [f, y] of r) if (Si(y, u.get(f))) return !1;
            return !0;
          },
          Ni = (r) => ({
            x: r.transform[0],
            y: r.transform[1],
            zoom: r.transform[2],
            selectedNodesCount: r.nodes.filter((u) => u.selected).length,
          });
        function pa({
          nodeId: r,
          children: u,
          className: f,
          style: y,
          isVisible: E,
          position: x = Position.Top,
          offset: z = 10,
          align: R = "center",
          ...X
        }) {
          const V = Kn(),
            W = useCallback(
              (fe) =>
                (Array.isArray(r) ? r : [r || V || ""]).reduce((Ke, Fe) => {
                  const De = fe.nodeLookup.get(Fe);
                  return De && Ke.set(De.id, De), Ke;
                }, new Map()),
              [r, V],
            ),
            v = Re(W, Ci),
            { x: S, y: P, zoom: I, selectedNodesCount: F } = Re(Ni, shallow);
          if (
            !(typeof E == "boolean"
              ? E
              : v.size === 1 && v.values().next().value.selected && F === 1) ||
            !v.size
          )
            return null;
          const J = getInternalNodesBounds(v),
            ie = Array.from(v.values()),
            Y = Math.max(...ie.map((fe) => fe.internals.z + 1)),
            ce = {
              position: "absolute",
              transform: getNodeToolbarTransform(
                J,
                { x: S, y: P, zoom: I },
                x,
                z,
                R,
              ),
              zIndex: Y,
              ...y,
            };
          return jsx(Ei, {
            children: jsx("div", {
              style: ce,
              className: cc(["react-flow__node-toolbar", f]),
              ...X,
              "data-id": ie.reduce((fe, Te) => `${fe}${Te.id} `, "").trim(),
              children: u,
            }),
          });
        }
      },
      81451: (xs, Dn, bt) => {
        "use strict";
        bt.d(Dn, {
          Do: () => et,
          WZ: () => st,
          TG: () => $e,
          ny: () => qe,
          yX: () => _e,
          xN: () => rr,
          Qc: () => We,
          I$: () => Ia,
          aQ: () => Ba,
          di: () => za,
          kO: () => Ca,
          ET: () => na,
          rN: () => Oi,
          bi: () => Fi,
          aE: () => wr,
          Hm: () => Ri,
          KE: () => jr,
          tn: () => dt,
          xc: () => De,
          us: () => $i,
          Pr: () => dn,
          e_: () => uo,
          Fp: () => rs,
          Mi: () => Qo,
          HF: () => St,
          Eo: () => co,
          b5: () => us,
          Tq: () => io,
          qX: () => Pi,
          q1: () => Tn,
          YV: () => jt,
          oj: () => lo,
          aZ: () => Ot,
          aW: () => hs,
          uD: () => Pn,
          Jo: () => Ut,
          U$: () => nt,
          X6: () => tr,
          oN: () => ji,
          ah: () => is,
          R4: () => es,
          r8: () => ys,
          ZO: () => ct,
          bK: () => Xe,
          b$: () => _t,
          uj: () => Ti,
          v5: () => ki,
          Ue: () => ao,
          Er: () => Fr,
          oB: () => wt,
          kf: () => kn,
          mW: () => Ai,
          QE: () => Mi,
          kM: () => gn,
          No: () => go,
          Ff: () => Vr,
          zj: () => Jo,
          s_: () => Rr,
          vS: () => Vi,
          qn: () => Yi,
          uL: () => Wi,
        });
        var N = { value: () => {} };
        function Ee() {
          for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
            if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o))
              throw new Error("illegal type: " + o);
            n[o] = [];
          }
          return new H(n);
        }
        function H(e) {
          this._ = e;
        }
        function L(e, t) {
          return e
            .trim()
            .split(/^|\s+/)
            .map(function (n) {
              var o = "",
                i = n.indexOf(".");
              if (
                (i >= 0 && ((o = n.slice(i + 1)), (n = n.slice(0, i))),
                n && !t.hasOwnProperty(n))
              )
                throw new Error("unknown type: " + n);
              return { type: n, name: o };
            });
        }
        H.prototype = Ee.prototype = {
          constructor: H,
          on: function (e, t) {
            var n = this._,
              o = L(e + "", n),
              i,
              l = -1,
              c = o.length;
            if (arguments.length < 2) {
              for (; ++l < c; )
                if ((i = (e = o[l]).type) && (i = On(n[i], e.name))) return i;
              return;
            }
            if (t != null && typeof t != "function")
              throw new Error("invalid callback: " + t);
            for (; ++l < c; )
              if ((i = (e = o[l]).type)) n[i] = pt(n[i], e.name, t);
              else if (t == null) for (i in n) n[i] = pt(n[i], e.name, null);
            return this;
          },
          copy: function () {
            var e = {},
              t = this._;
            for (var n in t) e[n] = t[n].slice();
            return new H(e);
          },
          call: function (e, t) {
            if ((i = arguments.length - 2) > 0)
              for (var n = new Array(i), o = 0, i, l; o < i; ++o)
                n[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(e))
              throw new Error("unknown type: " + e);
            for (l = this._[e], o = 0, i = l.length; o < i; ++o)
              l[o].value.apply(t, n);
          },
          apply: function (e, t, n) {
            if (!this._.hasOwnProperty(e))
              throw new Error("unknown type: " + e);
            for (var o = this._[e], i = 0, l = o.length; i < l; ++i)
              o[i].value.apply(t, n);
          },
        };
        function On(e, t) {
          for (var n = 0, o = e.length, i; n < o; ++n)
            if ((i = e[n]).name === t) return i.value;
        }
        function pt(e, t, n) {
          for (var o = 0, i = e.length; o < i; ++o)
            if (e[o].name === t) {
              (e[o] = N), (e = e.slice(0, o).concat(e.slice(o + 1)));
              break;
            }
          return n != null && e.push({ name: t, value: n }), e;
        }
        const $t = Ee;
        function tn() {}
        function Ct(e) {
          return e == null
            ? tn
            : function () {
                return this.querySelector(e);
              };
        }
        function Ht(e) {
          typeof e != "function" && (e = Ct(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), i = 0;
            i < n;
            ++i
          )
            for (
              var l = t[i],
                c = l.length,
                d = (o[i] = new Array(c)),
                p,
                g,
                m = 0;
              m < c;
              ++m
            )
              (p = l[m]) &&
                (g = e.call(p, p.__data__, m, l)) &&
                ("__data__" in p && (g.__data__ = p.__data__), (d[m] = g));
          return new Zt(o, this._parents);
        }
        function rn(e) {
          return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
        }
        function Ft() {
          return [];
        }
        function Bn(e) {
          return e == null
            ? Ft
            : function () {
                return this.querySelectorAll(e);
              };
        }
        function zn(e) {
          return function () {
            return rn(e.apply(this, arguments));
          };
        }
        function rt(e) {
          typeof e == "function" ? (e = zn(e)) : (e = Bn(e));
          for (
            var t = this._groups, n = t.length, o = [], i = [], l = 0;
            l < n;
            ++l
          )
            for (var c = t[l], d = c.length, p, g = 0; g < d; ++g)
              (p = c[g]) && (o.push(e.call(p, p.__data__, g, c)), i.push(p));
          return new Zt(o, i);
        }
        function wn(e) {
          return function () {
            return this.matches(e);
          };
        }
        function Xn(e) {
          return function (t) {
            return t.matches(e);
          };
        }
        var on = Array.prototype.find;
        function xn(e) {
          return function () {
            return on.call(this.children, e);
          };
        }
        function vn() {
          return this.firstElementChild;
        }
        function Re(e) {
          return this.select(
            e == null ? vn : xn(typeof e == "function" ? e : Xn(e)),
          );
        }
        var ot = Array.prototype.filter;
        function Wn() {
          return Array.from(this.children);
        }
        function Hn(e) {
          return function () {
            return ot.call(this.children, e);
          };
        }
        function _n(e) {
          return this.selectAll(
            e == null ? Wn : Hn(typeof e == "function" ? e : Xn(e)),
          );
        }
        function bn(e) {
          typeof e != "function" && (e = wn(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), i = 0;
            i < n;
            ++i
          )
            for (
              var l = t[i], c = l.length, d = (o[i] = []), p, g = 0;
              g < c;
              ++g
            )
              (p = l[g]) && e.call(p, p.__data__, g, l) && d.push(p);
          return new Zt(o, this._parents);
        }
        function G(e) {
          return new Array(e.length);
        }
        function q() {
          return new Zt(this._enter || this._groups.map(G), this._parents);
        }
        function K(e, t) {
          (this.ownerDocument = e.ownerDocument),
            (this.namespaceURI = e.namespaceURI),
            (this._next = null),
            (this._parent = e),
            (this.__data__ = t);
        }
        K.prototype = {
          constructor: K,
          appendChild: function (e) {
            return this._parent.insertBefore(e, this._next);
          },
          insertBefore: function (e, t) {
            return this._parent.insertBefore(e, t);
          },
          querySelector: function (e) {
            return this._parent.querySelector(e);
          },
          querySelectorAll: function (e) {
            return this._parent.querySelectorAll(e);
          },
        };
        function k(e) {
          return function () {
            return e;
          };
        }
        function B(e, t, n, o, i, l) {
          for (var c = 0, d, p = t.length, g = l.length; c < g; ++c)
            (d = t[c])
              ? ((d.__data__ = l[c]), (o[c] = d))
              : (n[c] = new K(e, l[c]));
          for (; c < p; ++c) (d = t[c]) && (i[c] = d);
        }
        function ne(e, t, n, o, i, l, c) {
          var d,
            p,
            g = new Map(),
            m = t.length,
            T = l.length,
            A = new Array(m),
            O;
          for (d = 0; d < m; ++d)
            (p = t[d]) &&
              ((A[d] = O = c.call(p, p.__data__, d, t) + ""),
              g.has(O) ? (i[d] = p) : g.set(O, p));
          for (d = 0; d < T; ++d)
            (O = c.call(e, l[d], d, l) + ""),
              (p = g.get(O))
                ? ((o[d] = p), (p.__data__ = l[d]), g.delete(O))
                : (n[d] = new K(e, l[d]));
          for (d = 0; d < m; ++d) (p = t[d]) && g.get(A[d]) === p && (i[d] = p);
        }
        function ae(e) {
          return e.__data__;
        }
        function Oe(e, t) {
          if (!arguments.length) return Array.from(this, ae);
          var n = t ? ne : B,
            o = this._parents,
            i = this._groups;
          typeof e != "function" && (e = k(e));
          for (
            var l = i.length,
              c = new Array(l),
              d = new Array(l),
              p = new Array(l),
              g = 0;
            g < l;
            ++g
          ) {
            var m = o[g],
              T = i[g],
              A = T.length,
              O = we(e.call(m, m && m.__data__, g, o)),
              me = O.length,
              he = (d[g] = new Array(me)),
              Ie = (c[g] = new Array(me)),
              le = (p[g] = new Array(A));
            n(m, T, he, Ie, le, O, t);
            for (var Ne = 0, ge = 0, U, ze; Ne < me; ++Ne)
              if ((U = he[Ne])) {
                for (Ne >= ge && (ge = Ne + 1); !(ze = Ie[ge]) && ++ge < me; );
                U._next = ze || null;
              }
          }
          return (c = new Zt(c, o)), (c._enter = d), (c._exit = p), c;
        }
        function we(e) {
          return typeof e == "object" && "length" in e ? e : Array.from(e);
        }
        function ye() {
          return new Zt(this._exit || this._groups.map(G), this._parents);
        }
        function ve(e, t, n) {
          var o = this.enter(),
            i = this,
            l = this.exit();
          return (
            typeof e == "function"
              ? ((o = e(o)), o && (o = o.selection()))
              : (o = o.append(e + "")),
            t != null && ((i = t(i)), i && (i = i.selection())),
            n == null ? l.remove() : n(l),
            o && i ? o.merge(i).order() : i
          );
        }
        function tt(e) {
          for (
            var t = e.selection ? e.selection() : e,
              n = this._groups,
              o = t._groups,
              i = n.length,
              l = o.length,
              c = Math.min(i, l),
              d = new Array(i),
              p = 0;
            p < c;
            ++p
          )
            for (
              var g = n[p],
                m = o[p],
                T = g.length,
                A = (d[p] = new Array(T)),
                O,
                me = 0;
              me < T;
              ++me
            )
              (O = g[me] || m[me]) && (A[me] = O);
          for (; p < i; ++p) d[p] = n[p];
          return new Zt(d, this._parents);
        }
        function it() {
          for (var e = this._groups, t = -1, n = e.length; ++t < n; )
            for (var o = e[t], i = o.length - 1, l = o[i], c; --i >= 0; )
              (c = o[i]) &&
                (l &&
                  c.compareDocumentPosition(l) ^ 4 &&
                  l.parentNode.insertBefore(c, l),
                (l = c));
          return this;
        }
        function Et(e) {
          e || (e = mt);
          function t(T, A) {
            return T && A ? e(T.__data__, A.__data__) : !T - !A;
          }
          for (
            var n = this._groups, o = n.length, i = new Array(o), l = 0;
            l < o;
            ++l
          ) {
            for (
              var c = n[l], d = c.length, p = (i[l] = new Array(d)), g, m = 0;
              m < d;
              ++m
            )
              (g = c[m]) && (p[m] = g);
            p.sort(t);
          }
          return new Zt(i, this._parents).order();
        }
        function mt(e, t) {
          return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        }
        function qt() {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        }
        function Xt() {
          return Array.from(this);
        }
        function ft() {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var o = e[t], i = 0, l = o.length; i < l; ++i) {
              var c = o[i];
              if (c) return c;
            }
          return null;
        }
        function vt() {
          let e = 0;
          for (const t of this) ++e;
          return e;
        }
        function sn() {
          return !this.node();
        }
        function En(e) {
          for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
            for (var i = t[n], l = 0, c = i.length, d; l < c; ++l)
              (d = i[l]) && e.call(d, d.__data__, l, i);
          return this;
        }
        var at = "http://www.w3.org/1999/xhtml";
        const Rt = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: at,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        };
        function Pt(e) {
          var t = (e += ""),
            n = t.indexOf(":");
          return (
            n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)),
            Rt.hasOwnProperty(t) ? { space: Rt[t], local: e } : e
          );
        }
        function Bt(e) {
          return function () {
            this.removeAttribute(e);
          };
        }
        function Wt(e) {
          return function () {
            this.removeAttributeNS(e.space, e.local);
          };
        }
        function It(e, t) {
          return function () {
            this.setAttribute(e, t);
          };
        }
        function Lt(e, t) {
          return function () {
            this.setAttributeNS(e.space, e.local, t);
          };
        }
        function Xr(e, t) {
          return function () {
            var n = t.apply(this, arguments);
            n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
          };
        }
        function Yt(e, t) {
          return function () {
            var n = t.apply(this, arguments);
            n == null
              ? this.removeAttributeNS(e.space, e.local)
              : this.setAttributeNS(e.space, e.local, n);
          };
        }
        function Er(e, t) {
          var n = Pt(e);
          if (arguments.length < 2) {
            var o = this.node();
            return n.local
              ? o.getAttributeNS(n.space, n.local)
              : o.getAttribute(n);
          }
          return this.each(
            (t == null
              ? n.local
                ? Wt
                : Bt
              : typeof t == "function"
                ? n.local
                  ? Yt
                  : Xr
                : n.local
                  ? Lt
                  : It)(n, t),
          );
        }
        function an(e) {
          return (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            (e.document && e) ||
            e.defaultView
          );
        }
        function cn(e) {
          return function () {
            this.style.removeProperty(e);
          };
        }
        function ir(e, t, n) {
          return function () {
            this.style.setProperty(e, t, n);
          };
        }
        function Ve(e, t, n) {
          return function () {
            var o = t.apply(this, arguments);
            o == null
              ? this.style.removeProperty(e)
              : this.style.setProperty(e, o, n);
          };
        }
        function Je(e, t, n) {
          return arguments.length > 1
            ? this.each(
                (t == null ? cn : typeof t == "function" ? Ve : ir)(
                  e,
                  t,
                  n ?? "",
                ),
              )
            : He(this.node(), e);
        }
        function He(e, t) {
          return (
            e.style.getPropertyValue(t) ||
            an(e).getComputedStyle(e, null).getPropertyValue(t)
          );
        }
        function Ue(e) {
          return function () {
            delete this[e];
          };
        }
        function Nt(e, t) {
          return function () {
            this[e] = t;
          };
        }
        function Tt(e, t) {
          return function () {
            var n = t.apply(this, arguments);
            n == null ? delete this[e] : (this[e] = n);
          };
        }
        function Vt(e, t) {
          return arguments.length > 1
            ? this.each(
                (t == null ? Ue : typeof t == "function" ? Tt : Nt)(e, t),
              )
            : this.node()[e];
        }
        function Kt(e) {
          return e.trim().split(/^|\s+/);
        }
        function Qt(e) {
          return e.classList || new fn(e);
        }
        function fn(e) {
          (this._node = e), (this._names = Kt(e.getAttribute("class") || ""));
        }
        fn.prototype = {
          add: function (e) {
            var t = this._names.indexOf(e);
            t < 0 &&
              (this._names.push(e),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          remove: function (e) {
            var t = this._names.indexOf(e);
            t >= 0 &&
              (this._names.splice(t, 1),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          contains: function (e) {
            return this._names.indexOf(e) >= 0;
          },
        };
        function ln(e, t) {
          for (var n = Qt(e), o = -1, i = t.length; ++o < i; ) n.add(t[o]);
        }
        function Jt(e, t) {
          for (var n = Qt(e), o = -1, i = t.length; ++o < i; ) n.remove(t[o]);
        }
        function Sr(e) {
          return function () {
            ln(this, e);
          };
        }
        function Wr(e) {
          return function () {
            Jt(this, e);
          };
        }
        function Cr(e, t) {
          return function () {
            (t.apply(this, arguments) ? ln : Jt)(this, e);
          };
        }
        function Yn(e, t) {
          var n = Kt(e + "");
          if (arguments.length < 2) {
            for (var o = Qt(this.node()), i = -1, l = n.length; ++i < l; )
              if (!o.contains(n[i])) return !1;
            return !0;
          }
          return this.each((typeof t == "function" ? Cr : t ? Sr : Wr)(n, t));
        }
        function ar() {
          this.textContent = "";
        }
        function Ln(e) {
          return function () {
            this.textContent = e;
          };
        }
        function vs(e) {
          return function () {
            var t = e.apply(this, arguments);
            this.textContent = t ?? "";
          };
        }
        function yo(e) {
          return arguments.length
            ? this.each(e == null ? ar : (typeof e == "function" ? vs : Ln)(e))
            : this.node().textContent;
        }
        function _s() {
          this.innerHTML = "";
        }
        function bs(e) {
          return function () {
            this.innerHTML = e;
          };
        }
        function Yr(e) {
          return function () {
            var t = e.apply(this, arguments);
            this.innerHTML = t ?? "";
          };
        }
        function Es(e) {
          return arguments.length
            ? this.each(e == null ? _s : (typeof e == "function" ? Yr : bs)(e))
            : this.node().innerHTML;
        }
        function Ss() {
          this.nextSibling && this.parentNode.appendChild(this);
        }
        function Kr() {
          return this.each(Ss);
        }
        function mo() {
          this.previousSibling &&
            this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        function wo() {
          return this.each(mo);
        }
        function xo(e) {
          return function () {
            var t = this.ownerDocument,
              n = this.namespaceURI;
            return n === at && t.documentElement.namespaceURI === at
              ? t.createElement(e)
              : t.createElementNS(n, e);
          };
        }
        function Zr(e) {
          return function () {
            return this.ownerDocument.createElementNS(e.space, e.local);
          };
        }
        function vo(e) {
          var t = Pt(e);
          return (t.local ? Zr : xo)(t);
        }
        function Kn(e) {
          var t = typeof e == "function" ? e : vo(e);
          return this.select(function () {
            return this.appendChild(t.apply(this, arguments));
          });
        }
        function _o() {
          return null;
        }
        function Cs(e, t) {
          var n = typeof e == "function" ? e : vo(e),
            o = t == null ? _o : typeof t == "function" ? t : Ct(t);
          return this.select(function () {
            return this.insertBefore(
              n.apply(this, arguments),
              o.apply(this, arguments) || null,
            );
          });
        }
        function Ns() {
          var e = this.parentNode;
          e && e.removeChild(this);
        }
        function cr() {
          return this.each(Ns);
        }
        function As() {
          var e = this.cloneNode(!1),
            t = this.parentNode;
          return t ? t.insertBefore(e, this.nextSibling) : e;
        }
        function Ms() {
          var e = this.cloneNode(!0),
            t = this.parentNode;
          return t ? t.insertBefore(e, this.nextSibling) : e;
        }
        function bo(e) {
          return this.select(e ? Ms : As);
        }
        function $s(e) {
          return arguments.length
            ? this.property("__data__", e)
            : this.node().__data__;
        }
        function Nr(e) {
          return function (t) {
            e.call(this, t, this.__data__);
          };
        }
        function Eo(e) {
          return e
            .trim()
            .split(/^|\s+/)
            .map(function (t) {
              var n = "",
                o = t.indexOf(".");
              return (
                o >= 0 && ((n = t.slice(o + 1)), (t = t.slice(0, o))),
                { type: t, name: n }
              );
            });
        }
        function Is(e) {
          return function () {
            var t = this.__on;
            if (t) {
              for (var n = 0, o = -1, i = t.length, l; n < i; ++n)
                (l = t[n]),
                  (!e.type || l.type === e.type) && l.name === e.name
                    ? this.removeEventListener(l.type, l.listener, l.options)
                    : (t[++o] = l);
              ++o ? (t.length = o) : delete this.__on;
            }
          };
        }
        function ks(e, t, n) {
          return function () {
            var o = this.__on,
              i,
              l = Nr(t);
            if (o) {
              for (var c = 0, d = o.length; c < d; ++c)
                if ((i = o[c]).type === e.type && i.name === e.name) {
                  this.removeEventListener(i.type, i.listener, i.options),
                    this.addEventListener(
                      i.type,
                      (i.listener = l),
                      (i.options = n),
                    ),
                    (i.value = t);
                  return;
                }
            }
            this.addEventListener(e.type, l, n),
              (i = {
                type: e.type,
                name: e.name,
                value: t,
                listener: l,
                options: n,
              }),
              o ? o.push(i) : (this.__on = [i]);
          };
        }
        function Ps(e, t, n) {
          var o = Eo(e + ""),
            i,
            l = o.length,
            c;
          if (arguments.length < 2) {
            var d = this.node().__on;
            if (d) {
              for (var p = 0, g = d.length, m; p < g; ++p)
                for (i = 0, m = d[p]; i < l; ++i)
                  if ((c = o[i]).type === m.type && c.name === m.name)
                    return m.value;
            }
            return;
          }
          for (d = t ? ks : Is, i = 0; i < l; ++i) this.each(d(o[i], t, n));
          return this;
        }
        function Gr(e, t, n) {
          var o = an(e),
            i = o.CustomEvent;
          typeof i == "function"
            ? (i = new i(t, n))
            : ((i = o.document.createEvent("Event")),
              n
                ? (i.initEvent(t, n.bubbles, n.cancelable),
                  (i.detail = n.detail))
                : i.initEvent(t, !1, !1)),
            e.dispatchEvent(i);
        }
        function Ts(e, t) {
          return function () {
            return Gr(this, e, t);
          };
        }
        function So(e, t) {
          return function () {
            return Gr(this, e, t.apply(this, arguments));
          };
        }
        function Ds(e, t) {
          return this.each((typeof t == "function" ? So : Ts)(e, t));
        }
        function* Os() {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var o = e[t], i = 0, l = o.length, c; i < l; ++i)
              (c = o[i]) && (yield c);
        }
        var Co = [null];
        function Zt(e, t) {
          (this._groups = e), (this._parents = t);
        }
        function No() {
          return new Zt([[document.documentElement]], Co);
        }
        function Bs() {
          return this;
        }
        Zt.prototype = No.prototype = {
          constructor: Zt,
          select: Ht,
          selectAll: rt,
          selectChild: Re,
          selectChildren: _n,
          filter: bn,
          data: Oe,
          enter: q,
          exit: ye,
          join: ve,
          merge: tt,
          selection: Bs,
          order: it,
          sort: Et,
          call: qt,
          nodes: Xt,
          node: ft,
          size: vt,
          empty: sn,
          each: En,
          attr: Er,
          style: Je,
          property: Vt,
          classed: Yn,
          text: yo,
          html: Es,
          raise: Kr,
          lower: wo,
          append: Kn,
          insert: Cs,
          remove: cr,
          clone: bo,
          datum: $s,
          on: Ps,
          dispatch: Ds,
          [Symbol.iterator]: Os,
        };
        const lr = No;
        function Gt(e) {
          return typeof e == "string"
            ? new Zt([[document.querySelector(e)]], [document.documentElement])
            : new Zt([[e]], Co);
        }
        function Ao(e) {
          let t;
          for (; (t = e.sourceEvent); ) e = t;
          return e;
        }
        function zt(e, t) {
          if (((e = Ao(e)), t === void 0 && (t = e.currentTarget), t)) {
            var n = t.ownerSVGElement || t;
            if (n.createSVGPoint) {
              var o = n.createSVGPoint();
              return (
                (o.x = e.clientX),
                (o.y = e.clientY),
                (o = o.matrixTransform(t.getScreenCTM().inverse())),
                [o.x, o.y]
              );
            }
            if (t.getBoundingClientRect) {
              var i = t.getBoundingClientRect();
              return [
                e.clientX - i.left - t.clientLeft,
                e.clientY - i.top - t.clientTop,
              ];
            }
          }
          return [e.pageX, e.pageY];
        }
        const zs = { passive: !1 },
          ur = { capture: !0, passive: !1 };
        function Ur(e) {
          e.stopImmediatePropagation();
        }
        function hn(e) {
          e.preventDefault(), e.stopImmediatePropagation();
        }
        function Mo(e) {
          var t = e.document.documentElement,
            n = Gt(e).on("dragstart.drag", hn, ur);
          "onselectstart" in t
            ? n.on("selectstart.drag", hn, ur)
            : ((t.__noselect = t.style.MozUserSelect),
              (t.style.MozUserSelect = "none"));
        }
        function $o(e, t) {
          var n = e.document.documentElement,
            o = Gt(e).on("dragstart.drag", null);
          t &&
            (o.on("click.drag", hn, ur),
            setTimeout(function () {
              o.on("click.drag", null);
            }, 0)),
            "onselectstart" in n
              ? o.on("selectstart.drag", null)
              : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
        }
        const Sn = (e) => () => e;
        function Ar(
          e,
          {
            sourceEvent: t,
            subject: n,
            target: o,
            identifier: i,
            active: l,
            x: c,
            y: d,
            dx: p,
            dy: g,
            dispatch: m,
          },
        ) {
          Object.defineProperties(this, {
            type: { value: e, enumerable: !0, configurable: !0 },
            sourceEvent: { value: t, enumerable: !0, configurable: !0 },
            subject: { value: n, enumerable: !0, configurable: !0 },
            target: { value: o, enumerable: !0, configurable: !0 },
            identifier: { value: i, enumerable: !0, configurable: !0 },
            active: { value: l, enumerable: !0, configurable: !0 },
            x: { value: c, enumerable: !0, configurable: !0 },
            y: { value: d, enumerable: !0, configurable: !0 },
            dx: { value: p, enumerable: !0, configurable: !0 },
            dy: { value: g, enumerable: !0, configurable: !0 },
            _: { value: m },
          });
        }
        Ar.prototype.on = function () {
          var e = this._.on.apply(this._, arguments);
          return e === this._ ? this : e;
        };
        function Io(e) {
          return !e.ctrlKey && !e.button;
        }
        function Hs() {
          return this.parentNode;
        }
        function Mr(e, t) {
          return t ?? { x: e.x, y: e.y };
        }
        function ko() {
          return navigator.maxTouchPoints || "ontouchstart" in this;
        }
        function Qr() {
          var e = Io,
            t = Hs,
            n = Mr,
            o = ko,
            i = {},
            l = $t("start", "drag", "end"),
            c = 0,
            d,
            p,
            g,
            m,
            T = 0;
          function A(U) {
            U.on("mousedown.drag", O)
              .filter(o)
              .on("touchstart.drag", Ie)
              .on("touchmove.drag", le, zs)
              .on("touchend.drag touchcancel.drag", Ne)
              .style("touch-action", "none")
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          function O(U, ze) {
            if (!(m || !e.call(this, U, ze))) {
              var je = ge(this, t.call(this, U, ze), U, ze, "mouse");
              je &&
                (Gt(U.view)
                  .on("mousemove.drag", me, ur)
                  .on("mouseup.drag", he, ur),
                Mo(U.view),
                Ur(U),
                (g = !1),
                (d = U.clientX),
                (p = U.clientY),
                je("start", U));
            }
          }
          function me(U) {
            if ((hn(U), !g)) {
              var ze = U.clientX - d,
                je = U.clientY - p;
              g = ze * ze + je * je > T;
            }
            i.mouse("drag", U);
          }
          function he(U) {
            Gt(U.view).on("mousemove.drag mouseup.drag", null),
              $o(U.view, g),
              hn(U),
              i.mouse("end", U);
          }
          function Ie(U, ze) {
            if (e.call(this, U, ze)) {
              var je = U.changedTouches,
                ue = t.call(this, U, ze),
                ke = je.length,
                Ce,
                Pe;
              for (Ce = 0; Ce < ke; ++Ce)
                (Pe = ge(this, ue, U, ze, je[Ce].identifier, je[Ce])) &&
                  (Ur(U), Pe("start", U, je[Ce]));
            }
          }
          function le(U) {
            var ze = U.changedTouches,
              je = ze.length,
              ue,
              ke;
            for (ue = 0; ue < je; ++ue)
              (ke = i[ze[ue].identifier]) && (hn(U), ke("drag", U, ze[ue]));
          }
          function Ne(U) {
            var ze = U.changedTouches,
              je = ze.length,
              ue,
              ke;
            for (
              m && clearTimeout(m),
                m = setTimeout(function () {
                  m = null;
                }, 500),
                ue = 0;
              ue < je;
              ++ue
            )
              (ke = i[ze[ue].identifier]) && (Ur(U), ke("end", U, ze[ue]));
          }
          function ge(U, ze, je, ue, ke, Ce) {
            var Pe = l.copy(),
              Ye = zt(Ce || je, ze),
              Ae,
              Me,
              _;
            if (
              (_ = n.call(
                U,
                new Ar("beforestart", {
                  sourceEvent: je,
                  target: A,
                  identifier: ke,
                  active: c,
                  x: Ye[0],
                  y: Ye[1],
                  dx: 0,
                  dy: 0,
                  dispatch: Pe,
                }),
                ue,
              )) != null
            )
              return (
                (Ae = _.x - Ye[0] || 0),
                (Me = _.y - Ye[1] || 0),
                function re(Z, de, xe) {
                  var se = Ye,
                    be;
                  switch (Z) {
                    case "start":
                      (i[ke] = re), (be = c++);
                      break;
                    case "end":
                      delete i[ke], --c;
                    case "drag":
                      (Ye = zt(xe || de, ze)), (be = c);
                      break;
                  }
                  Pe.call(
                    Z,
                    U,
                    new Ar(Z, {
                      sourceEvent: de,
                      subject: _,
                      target: A,
                      identifier: ke,
                      active: be,
                      x: Ye[0] + Ae,
                      y: Ye[1] + Me,
                      dx: Ye[0] - se[0],
                      dy: Ye[1] - se[1],
                      dispatch: Pe,
                    }),
                    ue,
                  );
                }
              );
          }
          return (
            (A.filter = function (U) {
              return arguments.length
                ? ((e = typeof U == "function" ? U : Sn(!!U)), A)
                : e;
            }),
            (A.container = function (U) {
              return arguments.length
                ? ((t = typeof U == "function" ? U : Sn(U)), A)
                : t;
            }),
            (A.subject = function (U) {
              return arguments.length
                ? ((n = typeof U == "function" ? U : Sn(U)), A)
                : n;
            }),
            (A.touchable = function (U) {
              return arguments.length
                ? ((o = typeof U == "function" ? U : Sn(!!U)), A)
                : o;
            }),
            (A.on = function () {
              var U = l.on.apply(l, arguments);
              return U === l ? A : U;
            }),
            (A.clickDistance = function (U) {
              return arguments.length ? ((T = (U = +U) * U), A) : Math.sqrt(T);
            }),
            A
          );
        }
        var Po = 1e-12;
        function To(e) {
          return ((e = Math.exp(e)) + 1 / e) / 2;
        }
        function Do(e) {
          return ((e = Math.exp(e)) - 1 / e) / 2;
        }
        function Oo(e) {
          return ((e = Math.exp(2 * e)) - 1) / (e + 1);
        }
        const Bo = (function e(t, n, o) {
          function i(l, c) {
            var d = l[0],
              p = l[1],
              g = l[2],
              m = c[0],
              T = c[1],
              A = c[2],
              O = m - d,
              me = T - p,
              he = O * O + me * me,
              Ie,
              le;
            if (he < Po)
              (le = Math.log(A / g) / t),
                (Ie = function (ue) {
                  return [d + ue * O, p + ue * me, g * Math.exp(t * ue * le)];
                });
            else {
              var Ne = Math.sqrt(he),
                ge = (A * A - g * g + o * he) / (2 * g * n * Ne),
                U = (A * A - g * g - o * he) / (2 * A * n * Ne),
                ze = Math.log(Math.sqrt(ge * ge + 1) - ge),
                je = Math.log(Math.sqrt(U * U + 1) - U);
              (le = (je - ze) / t),
                (Ie = function (ue) {
                  var ke = ue * le,
                    Ce = To(ze),
                    Pe = (g / (n * Ne)) * (Ce * Oo(t * ke + ze) - Do(ze));
                  return [d + Pe * O, p + Pe * me, (g * Ce) / To(t * ke + ze)];
                });
            }
            return (Ie.duration = (le * 1e3 * t) / Math.SQRT2), Ie;
          }
          return (
            (i.rho = function (l) {
              var c = Math.max(0.001, +l),
                d = c * c,
                p = d * d;
              return e(c, d, p);
            }),
            i
          );
        })(Math.SQRT2, 2, 4);
        var jn = 0,
          Zn = 0,
          dr = 0,
          Jr = 1e3,
          fr,
          hr,
          pr = 0,
          Cn = 0,
          $r = 0,
          Gn =
            typeof performance == "object" && performance.now
              ? performance
              : Date,
          eo =
            typeof window == "object" && window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : function (e) {
                  setTimeout(e, 17);
                };
        function Ir() {
          return Cn || (eo(Ls), (Cn = Gn.now() + $r));
        }
        function Ls() {
          Cn = 0;
        }
        function kr() {
          this._call = this._time = this._next = null;
        }
        kr.prototype = Nn.prototype = {
          constructor: kr,
          restart: function (e, t, n) {
            if (typeof e != "function")
              throw new TypeError("callback is not a function");
            (n = (n == null ? Ir() : +n) + (t == null ? 0 : +t)),
              !this._next &&
                hr !== this &&
                (hr ? (hr._next = this) : (fr = this), (hr = this)),
              (this._call = e),
              (this._time = n),
              Pr();
          },
          stop: function () {
            this._call && ((this._call = null), (this._time = 1 / 0), Pr());
          },
        };
        function Nn(e, t, n) {
          var o = new kr();
          return o.restart(e, t, n), o;
        }
        function zo() {
          Ir(), ++jn;
          for (var e = fr, t; e; )
            (t = Cn - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
          --jn;
        }
        function to() {
          (Cn = (pr = Gn.now()) + $r), (jn = Zn = 0);
          try {
            zo();
          } finally {
            (jn = 0), Rs(), (Cn = 0);
          }
        }
        function js() {
          var e = Gn.now(),
            t = e - pr;
          t > Jr && (($r -= t), (pr = e));
        }
        function Rs() {
          for (var e, t = fr, n, o = 1 / 0; t; )
            t._call
              ? (o > t._time && (o = t._time), (e = t), (t = t._next))
              : ((n = t._next),
                (t._next = null),
                (t = e ? (e._next = n) : (fr = n)));
          (hr = e), Pr(o);
        }
        function Pr(e) {
          if (!jn) {
            Zn && (Zn = clearTimeout(Zn));
            var t = e - Cn;
            t > 24
              ? (e < 1 / 0 && (Zn = setTimeout(to, e - Gn.now() - $r)),
                dr && (dr = clearInterval(dr)))
              : (dr || ((pr = Gn.now()), (dr = setInterval(js, Jr))),
                (jn = 1),
                eo(to));
          }
        }
        function Ho(e, t, n) {
          var o = new kr();
          return (
            (t = t == null ? 0 : +t),
            o.restart(
              (i) => {
                o.stop(), e(i + t);
              },
              t,
              n,
            ),
            o
          );
        }
        var Vs = $t("start", "end", "cancel", "interrupt"),
          Fs = [],
          Lo = 0,
          jo = 1,
          Un = 2,
          gr = 3,
          Ro = 4,
          no = 5,
          Tr = 6;
        function Dr(e, t, n, o, i, l) {
          var c = e.__transition;
          if (!c) e.__transition = {};
          else if (n in c) return;
          qs(e, n, {
            name: t,
            index: o,
            group: i,
            on: Vs,
            tween: Fs,
            time: l.time,
            delay: l.delay,
            duration: l.duration,
            ease: l.ease,
            timer: null,
            state: Lo,
          });
        }
        function Or(e, t) {
          var n = en(e, t);
          if (n.state > Lo) throw new Error("too late; already scheduled");
          return n;
        }
        function un(e, t) {
          var n = en(e, t);
          if (n.state > gr) throw new Error("too late; already running");
          return n;
        }
        function en(e, t) {
          var n = e.__transition;
          if (!n || !(n = n[t])) throw new Error("transition not found");
          return n;
        }
        function qs(e, t, n) {
          var o = e.__transition,
            i;
          (o[t] = n), (n.timer = Nn(l, 0, n.time));
          function l(g) {
            (n.state = jo),
              n.timer.restart(c, n.delay, n.time),
              n.delay <= g && c(g - n.delay);
          }
          function c(g) {
            var m, T, A, O;
            if (n.state !== jo) return p();
            for (m in o)
              if (((O = o[m]), O.name === n.name)) {
                if (O.state === gr) return Ho(c);
                O.state === Ro
                  ? ((O.state = Tr),
                    O.timer.stop(),
                    O.on.call("interrupt", e, e.__data__, O.index, O.group),
                    delete o[m])
                  : +m < t &&
                    ((O.state = Tr),
                    O.timer.stop(),
                    O.on.call("cancel", e, e.__data__, O.index, O.group),
                    delete o[m]);
              }
            if (
              (Ho(function () {
                n.state === gr &&
                  ((n.state = Ro), n.timer.restart(d, n.delay, n.time), d(g));
              }),
              (n.state = Un),
              n.on.call("start", e, e.__data__, n.index, n.group),
              n.state === Un)
            ) {
              for (
                n.state = gr,
                  i = new Array((A = n.tween.length)),
                  m = 0,
                  T = -1;
                m < A;
                ++m
              )
                (O = n.tween[m].value.call(e, e.__data__, n.index, n.group)) &&
                  (i[++T] = O);
              i.length = T + 1;
            }
          }
          function d(g) {
            for (
              var m =
                  g < n.duration
                    ? n.ease.call(null, g / n.duration)
                    : (n.timer.restart(p), (n.state = no), 1),
                T = -1,
                A = i.length;
              ++T < A;
            )
              i[T].call(e, m);
            n.state === no &&
              (n.on.call("end", e, e.__data__, n.index, n.group), p());
          }
          function p() {
            (n.state = Tr), n.timer.stop(), delete o[t];
            for (var g in o) return;
            delete e.__transition;
          }
        }
        function yr(e, t) {
          var n = e.__transition,
            o,
            i,
            l = !0,
            c;
          if (n) {
            t = t == null ? null : t + "";
            for (c in n) {
              if ((o = n[c]).name !== t) {
                l = !1;
                continue;
              }
              (i = o.state > Un && o.state < no),
                (o.state = Tr),
                o.timer.stop(),
                o.on.call(
                  i ? "interrupt" : "cancel",
                  e,
                  e.__data__,
                  o.index,
                  o.group,
                ),
                delete n[c];
            }
            l && delete e.__transition;
          }
        }
        function Xs(e) {
          return this.each(function () {
            yr(this, e);
          });
        }
        var An = bt(55797),
          Vo = 180 / Math.PI,
          Br = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1,
          };
        function Fo(e, t, n, o, i, l) {
          var c, d, p;
          return (
            (c = Math.sqrt(e * e + t * t)) && ((e /= c), (t /= c)),
            (p = e * n + t * o) && ((n -= e * p), (o -= t * p)),
            (d = Math.sqrt(n * n + o * o)) && ((n /= d), (o /= d), (p /= d)),
            e * o < t * n && ((e = -e), (t = -t), (p = -p), (c = -c)),
            {
              translateX: i,
              translateY: l,
              rotate: Math.atan2(t, e) * Vo,
              skewX: Math.atan(p) * Vo,
              scaleX: c,
              scaleY: d,
            }
          );
        }
        var zr;
        function Ws(e) {
          const t = new (
            typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix
          )(e + "");
          return t.isIdentity ? Br : Fo(t.a, t.b, t.c, t.d, t.e, t.f);
        }
        function Qn(e) {
          return e == null ||
            (zr ||
              (zr = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g",
              )),
            zr.setAttribute("transform", e),
            !(e = zr.transform.baseVal.consolidate()))
            ? Br
            : ((e = e.matrix), Fo(e.a, e.b, e.c, e.d, e.e, e.f));
        }
        function ro(e, t, n, o) {
          function i(g) {
            return g.length ? g.pop() + " " : "";
          }
          function l(g, m, T, A, O, me) {
            if (g !== T || m !== A) {
              var he = O.push("translate(", null, t, null, n);
              me.push(
                { i: he - 4, x: (0, An.A)(g, T) },
                { i: he - 2, x: (0, An.A)(m, A) },
              );
            } else (T || A) && O.push("translate(" + T + t + A + n);
          }
          function c(g, m, T, A) {
            g !== m
              ? (g - m > 180 ? (m += 360) : m - g > 180 && (g += 360),
                A.push({
                  i: T.push(i(T) + "rotate(", null, o) - 2,
                  x: (0, An.A)(g, m),
                }))
              : m && T.push(i(T) + "rotate(" + m + o);
          }
          function d(g, m, T, A) {
            g !== m
              ? A.push({
                  i: T.push(i(T) + "skewX(", null, o) - 2,
                  x: (0, An.A)(g, m),
                })
              : m && T.push(i(T) + "skewX(" + m + o);
          }
          function p(g, m, T, A, O, me) {
            if (g !== T || m !== A) {
              var he = O.push(i(O) + "scale(", null, ",", null, ")");
              me.push(
                { i: he - 4, x: (0, An.A)(g, T) },
                { i: he - 2, x: (0, An.A)(m, A) },
              );
            } else
              (T !== 1 || A !== 1) &&
                O.push(i(O) + "scale(" + T + "," + A + ")");
          }
          return function (g, m) {
            var T = [],
              A = [];
            return (
              (g = e(g)),
              (m = e(m)),
              l(g.translateX, g.translateY, m.translateX, m.translateY, T, A),
              c(g.rotate, m.rotate, T, A),
              d(g.skewX, m.skewX, T, A),
              p(g.scaleX, g.scaleY, m.scaleX, m.scaleY, T, A),
              (g = m = null),
              function (O) {
                for (var me = -1, he = A.length, Ie; ++me < he; )
                  T[(Ie = A[me]).i] = Ie.x(O);
                return T.join("");
              }
            );
          };
        }
        var ra = ro(Ws, "px, ", "px)", "deg)"),
          Ys = ro(Qn, ", ", ")", ")");
        function oa(e, t) {
          var n, o;
          return function () {
            var i = un(this, e),
              l = i.tween;
            if (l !== n) {
              o = n = l;
              for (var c = 0, d = o.length; c < d; ++c)
                if (o[c].name === t) {
                  (o = o.slice()), o.splice(c, 1);
                  break;
                }
            }
            i.tween = o;
          };
        }
        function Ks(e, t, n) {
          var o, i;
          if (typeof n != "function") throw new Error();
          return function () {
            var l = un(this, e),
              c = l.tween;
            if (c !== o) {
              i = (o = c).slice();
              for (
                var d = { name: t, value: n }, p = 0, g = i.length;
                p < g;
                ++p
              )
                if (i[p].name === t) {
                  i[p] = d;
                  break;
                }
              p === g && i.push(d);
            }
            l.tween = i;
          };
        }
        function Zs(e, t) {
          var n = this._id;
          if (((e += ""), arguments.length < 2)) {
            for (
              var o = en(this.node(), n).tween, i = 0, l = o.length, c;
              i < l;
              ++i
            )
              if ((c = o[i]).name === e) return c.value;
            return null;
          }
          return this.each((t == null ? oa : Ks)(n, e, t));
        }
        function qo(e, t, n) {
          var o = e._id;
          return (
            e.each(function () {
              var i = un(this, o);
              (i.value || (i.value = {}))[t] = n.apply(this, arguments);
            }),
            function (i) {
              return en(i, o).value[t];
            }
          );
        }
        var Xo = bt(25705),
          Gs = bt(92789),
          Us = bt(14553);
        function Qs(e, t) {
          var n;
          return (
            typeof t == "number"
              ? An.A
              : t instanceof Xo.Ay
                ? Gs.Ay
                : (n = (0, Xo.Ay)(t))
                  ? ((t = n), Gs.Ay)
                  : Us.A
          )(e, t);
        }
        function Js(e) {
          return function () {
            this.removeAttribute(e);
          };
        }
        function ei(e) {
          return function () {
            this.removeAttributeNS(e.space, e.local);
          };
        }
        function mr(e, t, n) {
          var o,
            i = n + "",
            l;
          return function () {
            var c = this.getAttribute(e);
            return c === i ? null : c === o ? l : (l = t((o = c), n));
          };
        }
        function sa(e, t, n) {
          var o,
            i = n + "",
            l;
          return function () {
            var c = this.getAttributeNS(e.space, e.local);
            return c === i ? null : c === o ? l : (l = t((o = c), n));
          };
        }
        function ti(e, t, n) {
          var o, i, l;
          return function () {
            var c,
              d = n(this),
              p;
            return d == null
              ? void this.removeAttribute(e)
              : ((c = this.getAttribute(e)),
                (p = d + ""),
                c === p
                  ? null
                  : c === o && p === i
                    ? l
                    : ((i = p), (l = t((o = c), d))));
          };
        }
        function ni(e, t, n) {
          var o, i, l;
          return function () {
            var c,
              d = n(this),
              p;
            return d == null
              ? void this.removeAttributeNS(e.space, e.local)
              : ((c = this.getAttributeNS(e.space, e.local)),
                (p = d + ""),
                c === p
                  ? null
                  : c === o && p === i
                    ? l
                    : ((i = p), (l = t((o = c), d))));
          };
        }
        function ia(e, t) {
          var n = Pt(e),
            o = n === "transform" ? Ys : Qs;
          return this.attrTween(
            e,
            typeof t == "function"
              ? (n.local ? ni : ti)(n, o, qo(this, "attr." + e, t))
              : t == null
                ? (n.local ? ei : Js)(n)
                : (n.local ? sa : mr)(n, o, t),
          );
        }
        function aa(e, t) {
          return function (n) {
            this.setAttribute(e, t.call(this, n));
          };
        }
        function ca(e, t) {
          return function (n) {
            this.setAttributeNS(e.space, e.local, t.call(this, n));
          };
        }
        function la(e, t) {
          var n, o;
          function i() {
            var l = t.apply(this, arguments);
            return l !== o && (n = (o = l) && ca(e, l)), n;
          }
          return (i._value = t), i;
        }
        function ri(e, t) {
          var n, o;
          function i() {
            var l = t.apply(this, arguments);
            return l !== o && (n = (o = l) && aa(e, l)), n;
          }
          return (i._value = t), i;
        }
        function oi(e, t) {
          var n = "attr." + e;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (t == null) return this.tween(n, null);
          if (typeof t != "function") throw new Error();
          var o = Pt(e);
          return this.tween(n, (o.local ? la : ri)(o, t));
        }
        function nn(e, t) {
          return function () {
            Or(this, e).delay = +t.apply(this, arguments);
          };
        }
        function si(e, t) {
          return (
            (t = +t),
            function () {
              Or(this, e).delay = t;
            }
          );
        }
        function ii(e) {
          var t = this._id;
          return arguments.length
            ? this.each((typeof e == "function" ? nn : si)(t, e))
            : en(this.node(), t).delay;
        }
        function Wo(e, t) {
          return function () {
            un(this, e).duration = +t.apply(this, arguments);
          };
        }
        function ua(e, t) {
          return (
            (t = +t),
            function () {
              un(this, e).duration = t;
            }
          );
        }
        function ai(e) {
          var t = this._id;
          return arguments.length
            ? this.each((typeof e == "function" ? Wo : ua)(t, e))
            : en(this.node(), t).duration;
        }
        function ci(e, t) {
          if (typeof t != "function") throw new Error();
          return function () {
            un(this, e).ease = t;
          };
        }
        function li(e) {
          var t = this._id;
          return arguments.length
            ? this.each(ci(t, e))
            : en(this.node(), t).ease;
        }
        function ui(e, t) {
          return function () {
            var n = t.apply(this, arguments);
            if (typeof n != "function") throw new Error();
            un(this, e).ease = n;
          };
        }
        function di(e) {
          if (typeof e != "function") throw new Error();
          return this.each(ui(this._id, e));
        }
        function Hr(e) {
          typeof e != "function" && (e = wn(e));
          for (
            var t = this._groups, n = t.length, o = new Array(n), i = 0;
            i < n;
            ++i
          )
            for (
              var l = t[i], c = l.length, d = (o[i] = []), p, g = 0;
              g < c;
              ++g
            )
              (p = l[g]) && e.call(p, p.__data__, g, l) && d.push(p);
          return new f(o, this._parents, this._name, this._id);
        }
        function fi(e) {
          if (e._id !== this._id) throw new Error();
          for (
            var t = this._groups,
              n = e._groups,
              o = t.length,
              i = n.length,
              l = Math.min(o, i),
              c = new Array(o),
              d = 0;
            d < l;
            ++d
          )
            for (
              var p = t[d],
                g = n[d],
                m = p.length,
                T = (c[d] = new Array(m)),
                A,
                O = 0;
              O < m;
              ++O
            )
              (A = p[O] || g[O]) && (T[O] = A);
          for (; d < o; ++d) c[d] = t[d];
          return new f(c, this._parents, this._name, this._id);
        }
        function oo(e) {
          return (e + "")
            .trim()
            .split(/^|\s+/)
            .every(function (t) {
              var n = t.indexOf(".");
              return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
            });
        }
        function da(e, t, n) {
          var o,
            i,
            l = oo(t) ? Or : un;
          return function () {
            var c = l(this, e),
              d = c.on;
            d !== o && (i = (o = d).copy()).on(t, n), (c.on = i);
          };
        }
        function hi(e, t) {
          var n = this._id;
          return arguments.length < 2
            ? en(this.node(), n).on.on(e)
            : this.each(da(n, e, t));
        }
        function pi(e) {
          return function () {
            var t = this.parentNode;
            for (var n in this.__transition) if (+n !== e) return;
            t && t.removeChild(this);
          };
        }
        function gi() {
          return this.on("end.remove", pi(this._id));
        }
        function so(e) {
          var t = this._name,
            n = this._id;
          typeof e != "function" && (e = Ct(e));
          for (
            var o = this._groups, i = o.length, l = new Array(i), c = 0;
            c < i;
            ++c
          )
            for (
              var d = o[c],
                p = d.length,
                g = (l[c] = new Array(p)),
                m,
                T,
                A = 0;
              A < p;
              ++A
            )
              (m = d[A]) &&
                (T = e.call(m, m.__data__, A, d)) &&
                ("__data__" in m && (T.__data__ = m.__data__),
                (g[A] = T),
                Dr(g[A], t, n, A, g, en(m, n)));
          return new f(l, this._parents, t, n);
        }
        function yi(e) {
          var t = this._name,
            n = this._id;
          typeof e != "function" && (e = Bn(e));
          for (
            var o = this._groups, i = o.length, l = [], c = [], d = 0;
            d < i;
            ++d
          )
            for (var p = o[d], g = p.length, m, T = 0; T < g; ++T)
              if ((m = p[T])) {
                for (
                  var A = e.call(m, m.__data__, T, p),
                    O,
                    me = en(m, n),
                    he = 0,
                    Ie = A.length;
                  he < Ie;
                  ++he
                )
                  (O = A[he]) && Dr(O, t, n, he, A, me);
                l.push(A), c.push(m);
              }
          return new f(l, c, t, n);
        }
        var mi = lr.prototype.constructor;
        function Yo() {
          return new mi(this._groups, this._parents);
        }
        function Ko(e, t) {
          var n, o, i;
          return function () {
            var l = He(this, e),
              c = (this.style.removeProperty(e), He(this, e));
            return l === c
              ? null
              : l === n && c === o
                ? i
                : (i = t((n = l), (o = c)));
          };
        }
        function Zo(e) {
          return function () {
            this.style.removeProperty(e);
          };
        }
        function wi(e, t, n) {
          var o,
            i = n + "",
            l;
          return function () {
            var c = He(this, e);
            return c === i ? null : c === o ? l : (l = t((o = c), n));
          };
        }
        function xi(e, t, n) {
          var o, i, l;
          return function () {
            var c = He(this, e),
              d = n(this),
              p = d + "";
            return (
              d == null &&
                (p = d = (this.style.removeProperty(e), He(this, e))),
              c === p
                ? null
                : c === o && p === i
                  ? l
                  : ((i = p), (l = t((o = c), d)))
            );
          };
        }
        function vi(e, t) {
          var n,
            o,
            i,
            l = "style." + t,
            c = "end." + l,
            d;
          return function () {
            var p = un(this, e),
              g = p.on,
              m = p.value[l] == null ? d || (d = Zo(t)) : void 0;
            (g !== n || i !== m) && (o = (n = g).copy()).on(c, (i = m)),
              (p.on = o);
          };
        }
        function Go(e, t, n) {
          var o = (e += "") == "transform" ? ra : Qs;
          return t == null
            ? this.styleTween(e, Ko(e, o)).on("end.style." + e, Zo(e))
            : typeof t == "function"
              ? this.styleTween(e, xi(e, o, qo(this, "style." + e, t))).each(
                  vi(this._id, e),
                )
              : this.styleTween(e, wi(e, o, t), n).on("end.style." + e, null);
        }
        function fa(e, t, n) {
          return function (o) {
            this.style.setProperty(e, t.call(this, o), n);
          };
        }
        function _i(e, t, n) {
          var o, i;
          function l() {
            var c = t.apply(this, arguments);
            return c !== i && (o = (i = c) && fa(e, c, n)), o;
          }
          return (l._value = t), l;
        }
        function Uo(e, t, n) {
          var o = "style." + (e += "");
          if (arguments.length < 2) return (o = this.tween(o)) && o._value;
          if (t == null) return this.tween(o, null);
          if (typeof t != "function") throw new Error();
          return this.tween(o, _i(e, t, n ?? ""));
        }
        function ha(e) {
          return function () {
            this.textContent = e;
          };
        }
        function bi(e) {
          return function () {
            var t = e(this);
            this.textContent = t ?? "";
          };
        }
        function Ei(e) {
          return this.tween(
            "text",
            typeof e == "function"
              ? bi(qo(this, "text", e))
              : ha(e == null ? "" : e + ""),
          );
        }
        function Si(e) {
          return function (t) {
            this.textContent = e.call(this, t);
          };
        }
        function Ci(e) {
          var t, n;
          function o() {
            var i = e.apply(this, arguments);
            return i !== n && (t = (n = i) && Si(i)), t;
          }
          return (o._value = e), o;
        }
        function Ni(e) {
          var t = "text";
          if (arguments.length < 1) return (t = this.tween(t)) && t._value;
          if (e == null) return this.tween(t, null);
          if (typeof e != "function") throw new Error();
          return this.tween(t, Ci(e));
        }
        function pa() {
          for (
            var e = this._name,
              t = this._id,
              n = E(),
              o = this._groups,
              i = o.length,
              l = 0;
            l < i;
            ++l
          )
            for (var c = o[l], d = c.length, p, g = 0; g < d; ++g)
              if ((p = c[g])) {
                var m = en(p, t);
                Dr(p, e, n, g, c, {
                  time: m.time + m.delay + m.duration,
                  delay: 0,
                  duration: m.duration,
                  ease: m.ease,
                });
              }
          return new f(o, this._parents, e, n);
        }
        function r() {
          var e,
            t,
            n = this,
            o = n._id,
            i = n.size();
          return new Promise(function (l, c) {
            var d = { value: c },
              p = {
                value: function () {
                  --i === 0 && l();
                },
              };
            n.each(function () {
              var g = un(this, o),
                m = g.on;
              m !== e &&
                ((t = (e = m).copy()),
                t._.cancel.push(d),
                t._.interrupt.push(d),
                t._.end.push(p)),
                (g.on = t);
            }),
              i === 0 && l();
          });
        }
        var u = 0;
        function f(e, t, n, o) {
          (this._groups = e),
            (this._parents = t),
            (this._name = n),
            (this._id = o);
        }
        function y(e) {
          return lr().transition(e);
        }
        function E() {
          return ++u;
        }
        var x = lr.prototype;
        f.prototype = y.prototype = {
          constructor: f,
          select: so,
          selectAll: yi,
          selectChild: x.selectChild,
          selectChildren: x.selectChildren,
          filter: Hr,
          merge: fi,
          selection: Yo,
          transition: pa,
          call: x.call,
          nodes: x.nodes,
          node: x.node,
          size: x.size,
          empty: x.empty,
          each: x.each,
          on: hi,
          attr: ia,
          attrTween: oi,
          style: Go,
          styleTween: Uo,
          text: Ei,
          textTween: Ni,
          remove: gi,
          tween: Zs,
          delay: ii,
          duration: ai,
          ease: li,
          easeVarying: di,
          end: r,
          [Symbol.iterator]: x[Symbol.iterator],
        };
        function z(e) {
          return e * e * e;
        }
        function R(e) {
          return --e * e * e + 1;
        }
        function X(e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        }
        var V = { time: null, delay: 0, duration: 250, ease: X };
        function W(e, t) {
          for (var n; !(n = e.__transition) || !(n = n[t]); )
            if (!(e = e.parentNode))
              throw new Error(`transition ${t} not found`);
          return n;
        }
        function v(e) {
          var t, n;
          e instanceof f
            ? ((t = e._id), (e = e._name))
            : ((t = E()),
              ((n = V).time = Ir()),
              (e = e == null ? null : e + ""));
          for (var o = this._groups, i = o.length, l = 0; l < i; ++l)
            for (var c = o[l], d = c.length, p, g = 0; g < d; ++g)
              (p = c[g]) && Dr(p, e, t, g, c, n || W(p, t));
          return new f(o, this._parents, e, t);
        }
        (lr.prototype.interrupt = Xs), (lr.prototype.transition = v);
        const S = (e) => () => e;
        function P(
          e,
          { sourceEvent: t, target: n, transform: o, dispatch: i },
        ) {
          Object.defineProperties(this, {
            type: { value: e, enumerable: !0, configurable: !0 },
            sourceEvent: { value: t, enumerable: !0, configurable: !0 },
            target: { value: n, enumerable: !0, configurable: !0 },
            transform: { value: o, enumerable: !0, configurable: !0 },
            _: { value: i },
          });
        }
        function I(e, t, n) {
          (this.k = e), (this.x = t), (this.y = n);
        }
        I.prototype = {
          constructor: I,
          scale: function (e) {
            return e === 1 ? this : new I(this.k * e, this.x, this.y);
          },
          translate: function (e, t) {
            return (e === 0) & (t === 0)
              ? this
              : new I(this.k, this.x + this.k * e, this.y + this.k * t);
          },
          apply: function (e) {
            return [e[0] * this.k + this.x, e[1] * this.k + this.y];
          },
          applyX: function (e) {
            return e * this.k + this.x;
          },
          applyY: function (e) {
            return e * this.k + this.y;
          },
          invert: function (e) {
            return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
          },
          invertX: function (e) {
            return (e - this.x) / this.k;
          },
          invertY: function (e) {
            return (e - this.y) / this.k;
          },
          rescaleX: function (e) {
            return e
              .copy()
              .domain(e.range().map(this.invertX, this).map(e.invert, e));
          },
          rescaleY: function (e) {
            return e
              .copy()
              .domain(e.range().map(this.invertY, this).map(e.invert, e));
          },
          toString: function () {
            return (
              "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            );
          },
        };
        var F = new I(1, 0, 0);
        Q.prototype = I.prototype;
        function Q(e) {
          for (; !e.__zoom; ) if (!(e = e.parentNode)) return F;
          return e.__zoom;
        }
        function J(e) {
          e.stopImmediatePropagation();
        }
        function ie(e) {
          e.preventDefault(), e.stopImmediatePropagation();
        }
        function Y(e) {
          return (!e.ctrlKey || e.type === "wheel") && !e.button;
        }
        function ce() {
          var e = this;
          return e instanceof SVGElement
            ? ((e = e.ownerSVGElement || e),
              e.hasAttribute("viewBox")
                ? ((e = e.viewBox.baseVal),
                  [
                    [e.x, e.y],
                    [e.x + e.width, e.y + e.height],
                  ])
                : [
                    [0, 0],
                    [e.width.baseVal.value, e.height.baseVal.value],
                  ])
            : [
                [0, 0],
                [e.clientWidth, e.clientHeight],
              ];
        }
        function fe() {
          return this.__zoom || F;
        }
        function Te(e) {
          return (
            -e.deltaY *
            (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
            (e.ctrlKey ? 10 : 1)
          );
        }
        function Le() {
          return navigator.maxTouchPoints || "ontouchstart" in this;
        }
        function Ke(e, t, n) {
          var o = e.invertX(t[0][0]) - n[0][0],
            i = e.invertX(t[1][0]) - n[1][0],
            l = e.invertY(t[0][1]) - n[0][1],
            c = e.invertY(t[1][1]) - n[1][1];
          return e.translate(
            i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
            c > l ? (l + c) / 2 : Math.min(0, l) || Math.max(0, c),
          );
        }
        function Fe() {
          var e = Y,
            t = ce,
            n = Ke,
            o = Te,
            i = Le,
            l = [0, 1 / 0],
            c = [
              [-1 / 0, -1 / 0],
              [1 / 0, 1 / 0],
            ],
            d = 250,
            p = Bo,
            g = $t("start", "zoom", "end"),
            m,
            T,
            A,
            O = 500,
            me = 150,
            he = 0,
            Ie = 10;
          function le(_) {
            _.property("__zoom", fe)
              .on("wheel.zoom", ke, { passive: !1 })
              .on("mousedown.zoom", Ce)
              .on("dblclick.zoom", Pe)
              .filter(i)
              .on("touchstart.zoom", Ye)
              .on("touchmove.zoom", Ae)
              .on("touchend.zoom touchcancel.zoom", Me)
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          (le.transform = function (_, re, Z, de) {
            var xe = _.selection ? _.selection() : _;
            xe.property("__zoom", fe),
              _ !== xe
                ? ze(_, re, Z, de)
                : xe.interrupt().each(function () {
                    je(this, arguments)
                      .event(de)
                      .start()
                      .zoom(
                        null,
                        typeof re == "function"
                          ? re.apply(this, arguments)
                          : re,
                      )
                      .end();
                  });
          }),
            (le.scaleBy = function (_, re, Z, de) {
              le.scaleTo(
                _,
                function () {
                  var xe = this.__zoom.k,
                    se =
                      typeof re == "function" ? re.apply(this, arguments) : re;
                  return xe * se;
                },
                Z,
                de,
              );
            }),
            (le.scaleTo = function (_, re, Z, de) {
              le.transform(
                _,
                function () {
                  var xe = t.apply(this, arguments),
                    se = this.__zoom,
                    be =
                      Z == null
                        ? U(xe)
                        : typeof Z == "function"
                          ? Z.apply(this, arguments)
                          : Z,
                    Ge = se.invert(be),
                    Qe =
                      typeof re == "function" ? re.apply(this, arguments) : re;
                  return n(ge(Ne(se, Qe), be, Ge), xe, c);
                },
                Z,
                de,
              );
            }),
            (le.translateBy = function (_, re, Z, de) {
              le.transform(
                _,
                function () {
                  return n(
                    this.__zoom.translate(
                      typeof re == "function" ? re.apply(this, arguments) : re,
                      typeof Z == "function" ? Z.apply(this, arguments) : Z,
                    ),
                    t.apply(this, arguments),
                    c,
                  );
                },
                null,
                de,
              );
            }),
            (le.translateTo = function (_, re, Z, de, xe) {
              le.transform(
                _,
                function () {
                  var se = t.apply(this, arguments),
                    be = this.__zoom,
                    Ge =
                      de == null
                        ? U(se)
                        : typeof de == "function"
                          ? de.apply(this, arguments)
                          : de;
                  return n(
                    F.translate(Ge[0], Ge[1])
                      .scale(be.k)
                      .translate(
                        typeof re == "function"
                          ? -re.apply(this, arguments)
                          : -re,
                        typeof Z == "function" ? -Z.apply(this, arguments) : -Z,
                      ),
                    se,
                    c,
                  );
                },
                de,
                xe,
              );
            });
          function Ne(_, re) {
            return (
              (re = Math.max(l[0], Math.min(l[1], re))),
              re === _.k ? _ : new I(re, _.x, _.y)
            );
          }
          function ge(_, re, Z) {
            var de = re[0] - Z[0] * _.k,
              xe = re[1] - Z[1] * _.k;
            return de === _.x && xe === _.y ? _ : new I(_.k, de, xe);
          }
          function U(_) {
            return [(+_[0][0] + +_[1][0]) / 2, (+_[0][1] + +_[1][1]) / 2];
          }
          function ze(_, re, Z, de) {
            _.on("start.zoom", function () {
              je(this, arguments).event(de).start();
            })
              .on("interrupt.zoom end.zoom", function () {
                je(this, arguments).event(de).end();
              })
              .tween("zoom", function () {
                var xe = this,
                  se = arguments,
                  be = je(xe, se).event(de),
                  Ge = t.apply(xe, se),
                  Qe =
                    Z == null
                      ? U(Ge)
                      : typeof Z == "function"
                        ? Z.apply(xe, se)
                        : Z,
                  yt = Math.max(Ge[1][0] - Ge[0][0], Ge[1][1] - Ge[0][1]),
                  s = xe.__zoom,
                  a = typeof re == "function" ? re.apply(xe, se) : re,
                  h = p(
                    s.invert(Qe).concat(yt / s.k),
                    a.invert(Qe).concat(yt / a.k),
                  );
                return function (w) {
                  if (w === 1) w = a;
                  else {
                    var b = h(w),
                      C = yt / b[2];
                    w = new I(C, Qe[0] - b[0] * C, Qe[1] - b[1] * C);
                  }
                  be.zoom(null, w);
                };
              });
          }
          function je(_, re, Z) {
            return (!Z && _.__zooming) || new ue(_, re);
          }
          function ue(_, re) {
            (this.that = _),
              (this.args = re),
              (this.active = 0),
              (this.sourceEvent = null),
              (this.extent = t.apply(_, re)),
              (this.taps = 0);
          }
          ue.prototype = {
            event: function (_) {
              return _ && (this.sourceEvent = _), this;
            },
            start: function () {
              return (
                ++this.active === 1 &&
                  ((this.that.__zooming = this), this.emit("start")),
                this
              );
            },
            zoom: function (_, re) {
              return (
                this.mouse &&
                  _ !== "mouse" &&
                  (this.mouse[1] = re.invert(this.mouse[0])),
                this.touch0 &&
                  _ !== "touch" &&
                  (this.touch0[1] = re.invert(this.touch0[0])),
                this.touch1 &&
                  _ !== "touch" &&
                  (this.touch1[1] = re.invert(this.touch1[0])),
                (this.that.__zoom = re),
                this.emit("zoom"),
                this
              );
            },
            end: function () {
              return (
                --this.active === 0 &&
                  (delete this.that.__zooming, this.emit("end")),
                this
              );
            },
            emit: function (_) {
              var re = Gt(this.that).datum();
              g.call(
                _,
                this.that,
                new P(_, {
                  sourceEvent: this.sourceEvent,
                  target: le,
                  type: _,
                  transform: this.that.__zoom,
                  dispatch: g,
                }),
                re,
              );
            },
          };
          function ke(_, ...re) {
            if (!e.apply(this, arguments)) return;
            var Z = je(this, re).event(_),
              de = this.__zoom,
              xe = Math.max(
                l[0],
                Math.min(l[1], de.k * Math.pow(2, o.apply(this, arguments))),
              ),
              se = zt(_);
            if (Z.wheel)
              (Z.mouse[0][0] !== se[0] || Z.mouse[0][1] !== se[1]) &&
                (Z.mouse[1] = de.invert((Z.mouse[0] = se))),
                clearTimeout(Z.wheel);
            else {
              if (de.k === xe) return;
              (Z.mouse = [se, de.invert(se)]), yr(this), Z.start();
            }
            ie(_),
              (Z.wheel = setTimeout(be, me)),
              Z.zoom(
                "mouse",
                n(ge(Ne(de, xe), Z.mouse[0], Z.mouse[1]), Z.extent, c),
              );
            function be() {
              (Z.wheel = null), Z.end();
            }
          }
          function Ce(_, ...re) {
            if (A || !e.apply(this, arguments)) return;
            var Z = _.currentTarget,
              de = je(this, re, !0).event(_),
              xe = Gt(_.view)
                .on("mousemove.zoom", Qe, !0)
                .on("mouseup.zoom", yt, !0),
              se = zt(_, Z),
              be = _.clientX,
              Ge = _.clientY;
            Mo(_.view),
              J(_),
              (de.mouse = [se, this.__zoom.invert(se)]),
              yr(this),
              de.start();
            function Qe(s) {
              if ((ie(s), !de.moved)) {
                var a = s.clientX - be,
                  h = s.clientY - Ge;
                de.moved = a * a + h * h > he;
              }
              de.event(s).zoom(
                "mouse",
                n(
                  ge(de.that.__zoom, (de.mouse[0] = zt(s, Z)), de.mouse[1]),
                  de.extent,
                  c,
                ),
              );
            }
            function yt(s) {
              xe.on("mousemove.zoom mouseup.zoom", null),
                $o(s.view, de.moved),
                ie(s),
                de.event(s).end();
            }
          }
          function Pe(_, ...re) {
            if (e.apply(this, arguments)) {
              var Z = this.__zoom,
                de = zt(_.changedTouches ? _.changedTouches[0] : _, this),
                xe = Z.invert(de),
                se = Z.k * (_.shiftKey ? 0.5 : 2),
                be = n(ge(Ne(Z, se), de, xe), t.apply(this, re), c);
              ie(_),
                d > 0
                  ? Gt(this).transition().duration(d).call(ze, be, de, _)
                  : Gt(this).call(le.transform, be, de, _);
            }
          }
          function Ye(_, ...re) {
            if (e.apply(this, arguments)) {
              var Z = _.touches,
                de = Z.length,
                xe = je(this, re, _.changedTouches.length === de).event(_),
                se,
                be,
                Ge,
                Qe;
              for (J(_), be = 0; be < de; ++be)
                (Ge = Z[be]),
                  (Qe = zt(Ge, this)),
                  (Qe = [Qe, this.__zoom.invert(Qe), Ge.identifier]),
                  xe.touch0
                    ? !xe.touch1 &&
                      xe.touch0[2] !== Qe[2] &&
                      ((xe.touch1 = Qe), (xe.taps = 0))
                    : ((xe.touch0 = Qe), (se = !0), (xe.taps = 1 + !!m));
              m && (m = clearTimeout(m)),
                se &&
                  (xe.taps < 2 &&
                    ((T = Qe[0]),
                    (m = setTimeout(function () {
                      m = null;
                    }, O))),
                  yr(this),
                  xe.start());
            }
          }
          function Ae(_, ...re) {
            if (this.__zooming) {
              var Z = je(this, re).event(_),
                de = _.changedTouches,
                xe = de.length,
                se,
                be,
                Ge,
                Qe;
              for (ie(_), se = 0; se < xe; ++se)
                (be = de[se]),
                  (Ge = zt(be, this)),
                  Z.touch0 && Z.touch0[2] === be.identifier
                    ? (Z.touch0[0] = Ge)
                    : Z.touch1 &&
                      Z.touch1[2] === be.identifier &&
                      (Z.touch1[0] = Ge);
              if (((be = Z.that.__zoom), Z.touch1)) {
                var yt = Z.touch0[0],
                  s = Z.touch0[1],
                  a = Z.touch1[0],
                  h = Z.touch1[1],
                  w = (w = a[0] - yt[0]) * w + (w = a[1] - yt[1]) * w,
                  b = (b = h[0] - s[0]) * b + (b = h[1] - s[1]) * b;
                (be = Ne(be, Math.sqrt(w / b))),
                  (Ge = [(yt[0] + a[0]) / 2, (yt[1] + a[1]) / 2]),
                  (Qe = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]);
              } else if (Z.touch0) (Ge = Z.touch0[0]), (Qe = Z.touch0[1]);
              else return;
              Z.zoom("touch", n(ge(be, Ge, Qe), Z.extent, c));
            }
          }
          function Me(_, ...re) {
            if (this.__zooming) {
              var Z = je(this, re).event(_),
                de = _.changedTouches,
                xe = de.length,
                se,
                be;
              for (
                J(_),
                  A && clearTimeout(A),
                  A = setTimeout(function () {
                    A = null;
                  }, O),
                  se = 0;
                se < xe;
                ++se
              )
                (be = de[se]),
                  Z.touch0 && Z.touch0[2] === be.identifier
                    ? delete Z.touch0
                    : Z.touch1 &&
                      Z.touch1[2] === be.identifier &&
                      delete Z.touch1;
              if (
                (Z.touch1 &&
                  !Z.touch0 &&
                  ((Z.touch0 = Z.touch1), delete Z.touch1),
                Z.touch0)
              )
                Z.touch0[1] = this.__zoom.invert(Z.touch0[0]);
              else if (
                (Z.end(),
                Z.taps === 2 &&
                  ((be = zt(be, this)),
                  Math.hypot(T[0] - be[0], T[1] - be[1]) < Ie))
              ) {
                var Ge = Gt(this).on("dblclick.zoom");
                Ge && Ge.apply(this, arguments);
              }
            }
          }
          return (
            (le.wheelDelta = function (_) {
              return arguments.length
                ? ((o = typeof _ == "function" ? _ : S(+_)), le)
                : o;
            }),
            (le.filter = function (_) {
              return arguments.length
                ? ((e = typeof _ == "function" ? _ : S(!!_)), le)
                : e;
            }),
            (le.touchable = function (_) {
              return arguments.length
                ? ((i = typeof _ == "function" ? _ : S(!!_)), le)
                : i;
            }),
            (le.extent = function (_) {
              return arguments.length
                ? ((t =
                    typeof _ == "function"
                      ? _
                      : S([
                          [+_[0][0], +_[0][1]],
                          [+_[1][0], +_[1][1]],
                        ])),
                  le)
                : t;
            }),
            (le.scaleExtent = function (_) {
              return arguments.length
                ? ((l[0] = +_[0]), (l[1] = +_[1]), le)
                : [l[0], l[1]];
            }),
            (le.translateExtent = function (_) {
              return arguments.length
                ? ((c[0][0] = +_[0][0]),
                  (c[1][0] = +_[1][0]),
                  (c[0][1] = +_[0][1]),
                  (c[1][1] = +_[1][1]),
                  le)
                : [
                    [c[0][0], c[0][1]],
                    [c[1][0], c[1][1]],
                  ];
            }),
            (le.constrain = function (_) {
              return arguments.length ? ((n = _), le) : n;
            }),
            (le.duration = function (_) {
              return arguments.length ? ((d = +_), le) : d;
            }),
            (le.interpolate = function (_) {
              return arguments.length ? ((p = _), le) : p;
            }),
            (le.on = function () {
              var _ = g.on.apply(g, arguments);
              return _ === g ? le : _;
            }),
            (le.clickDistance = function (_) {
              return arguments.length
                ? ((he = (_ = +_) * _), le)
                : Math.sqrt(he);
            }),
            (le.tapDistance = function (_) {
              return arguments.length ? ((Ie = +_), le) : Ie;
            }),
            le
          );
        }
        const De = {
            error001: () =>
              "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
            error002: () =>
              "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
            error003: (e) =>
              `Node type "${e}" not found. Using fallback type "default".`,
            error004: () =>
              "The React Flow parent container needs a width and a height to render the graph.",
            error005: () => "Only child nodes can use a parent extent.",
            error006: () =>
              "Can't create edge. An edge needs a source and a target.",
            error007: (e) => `The old edge with id=${e} does not exist.`,
            error009: (e) => `Marker type "${e}" doesn't exist.`,
            error008: (e, { id: t, sourceHandle: n, targetHandle: o }) =>
              `Couldn't create edge for ${e} handle id: "${e === "source" ? n : o}", edge id: ${t}.`,
            error010: () =>
              "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
            error011: (e) =>
              `Edge type "${e}" not found. Using fallback type "default".`,
            error012: (e) =>
              `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
            error013: (e = "react") =>
              `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
          },
          ct = [
            [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
            [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
          ],
          dt = ["Enter", " ", "Escape"];
        var st;
        (function (e) {
          (e.Strict = "strict"), (e.Loose = "loose");
        })(st || (st = {}));
        var qe;
        (function (e) {
          (e.Free = "free"),
            (e.Vertical = "vertical"),
            (e.Horizontal = "horizontal");
        })(qe || (qe = {}));
        var We;
        (function (e) {
          (e.Partial = "partial"), (e.Full = "full");
        })(We || (We = {}));
        const Xe = {
          inProgress: !1,
          isValid: null,
          from: null,
          fromHandle: null,
          fromPosition: null,
          fromNode: null,
          to: null,
          toHandle: null,
          toPosition: null,
          toNode: null,
        };
        var et;
        (function (e) {
          (e.Bezier = "default"),
            (e.Straight = "straight"),
            (e.Step = "step"),
            (e.SmoothStep = "smoothstep"),
            (e.SimpleBezier = "simplebezier");
        })(et || (et = {}));
        var $e;
        (function (e) {
          (e.Arrow = "arrow"), (e.ArrowClosed = "arrowclosed");
        })($e || ($e = {}));
        var _e;
        (function (e) {
          (e.Left = "left"),
            (e.Top = "top"),
            (e.Right = "right"),
            (e.Bottom = "bottom");
        })(_e || (_e = {}));
        const lt = {
          [_e.Left]: _e.Right,
          [_e.Right]: _e.Left,
          [_e.Top]: _e.Bottom,
          [_e.Bottom]: _e.Top,
        };
        function ut(e, t) {
          if (!e && !t) return !0;
          if (!e || !t || e.size !== t.size) return !1;
          if (!e.size && !t.size) return !0;
          for (const n of e.keys()) if (!t.has(n)) return !1;
          return !0;
        }
        function gt(e, t, n) {
          if (!n) return;
          const o = [];
          e.forEach((i, l) => {
            t?.has(l) || o.push(i);
          }),
            o.length && n(o);
        }
        function St(e) {
          return e === null ? null : e ? "valid" : "invalid";
        }
        const _t = (e) => "id" in e && "source" in e && "target" in e,
          wt = (e) =>
            "id" in e &&
            "position" in e &&
            !("source" in e) &&
            !("target" in e),
          At = (e) =>
            "id" in e &&
            "internals" in e &&
            !("source" in e) &&
            !("target" in e),
          Dt = (e, t, n) => {
            if (!e.id) return [];
            const o = new Set();
            return (
              n.forEach((i) => {
                i.source === e.id && o.add(i.target);
              }),
              t.filter((i) => o.has(i.id))
            );
          },
          Ze = (e, t, n) => {
            if (!e.id) return [];
            const o = new Set();
            return (
              n.forEach((i) => {
                i.target === e.id && o.add(i.source);
              }),
              t.filter((i) => o.has(i.id))
            );
          },
          kt = (e, t = [0, 0]) => {
            const { width: n, height: o } = Pn(e),
              i = e.origin ?? t,
              l = n * i[0],
              c = o * i[1];
            return { x: e.position.x - l, y: e.position.y - c };
          },
          Ut = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
            if (e.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
            const n = e.reduce(
              (o, i) => {
                const l = typeof i == "string";
                let c = !t.nodeLookup && !l ? i : void 0;
                t.nodeLookup &&
                  (c = l
                    ? t.nodeLookup.get(i)
                    : At(i)
                      ? i
                      : t.nodeLookup.get(i.id));
                const d = c
                  ? Rn(c, t.nodeOrigin)
                  : { x: 0, y: 0, x2: 0, y2: 0 };
                return $n(o, d);
              },
              { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
            );
            return In(n);
          },
          Ot = (e, t = {}) => {
            if (e.size === 0) return { x: 0, y: 0, width: 0, height: 0 };
            let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
            return (
              e.forEach((o) => {
                if (t.filter === void 0 || t.filter(o)) {
                  const i = Rn(o);
                  n = $n(n, i);
                }
              }),
              In(n)
            );
          },
          nt = (e, t, [n, o, i] = [0, 0, 1], l = !1, c = !1) => {
            const d = {
                ...Vr(t, [n, o, i]),
                width: t.width / i,
                height: t.height / i,
              },
              p = [];
            for (const g of e.values()) {
              const { measured: m, selectable: T = !0, hidden: A = !1 } = g;
              if ((c && !T) || A) continue;
              const O = m.width ?? g.width ?? g.initialWidth ?? null,
                me = m.height ?? g.height ?? g.initialHeight ?? null,
                he = tr(d, gn(g)),
                Ie = (O ?? 0) * (me ?? 0),
                le = l && he > 0;
              (!g.internals.handleBounds || le || he >= Ie || g.dragging) &&
                p.push(g);
            }
            return p;
          },
          Mt = (e, t) => {
            const n = new Set();
            return (
              e.forEach((o) => {
                n.add(o.id);
              }),
              t.filter((o) => n.has(o.source) || n.has(o.target))
            );
          };
        function jt(e, t) {
          const n = new Map(),
            o = t?.nodes ? new Set(t.nodes.map((i) => i.id)) : null;
          return (
            e.forEach((i) => {
              i.measured.width &&
                i.measured.height &&
                (t?.includeHiddenNodes || !i.hidden) &&
                (!o || o.has(i.id)) &&
                n.set(i.id, i);
            }),
            n
          );
        }
        async function dn(
          { nodes: e, width: t, height: n, panZoom: o, minZoom: i, maxZoom: l },
          c,
        ) {
          if (e.size === 0) return Promise.resolve(!1);
          const d = Ot(e),
            p = es(
              d,
              t,
              n,
              c?.minZoom ?? i,
              c?.maxZoom ?? l,
              c?.padding ?? 0.1,
            );
          return (
            await o.setViewport(p, { duration: c?.duration }),
            Promise.resolve(!0)
          );
        }
        function wr({
          nodeId: e,
          nextPosition: t,
          nodeLookup: n,
          nodeOrigin: o = [0, 0],
          nodeExtent: i,
          onError: l,
        }) {
          const c = n.get(e),
            d = c.parentId ? n.get(c.parentId) : void 0,
            { x: p, y: g } = d ? d.internals.positionAbsolute : { x: 0, y: 0 },
            m = c.origin ?? o;
          let T = i;
          if (c.extent === "parent" && !c.expandParent)
            if (!d) l?.("005", De.error005());
            else {
              const O = d.measured.width,
                me = d.measured.height;
              O &&
                me &&
                (T = [
                  [p, g],
                  [p + O, g + me],
                ]);
            }
          else
            d &&
              nr(c.extent) &&
              (T = [
                [c.extent[0][0] + p, c.extent[0][1] + g],
                [c.extent[1][0] + p, c.extent[1][1] + g],
              ]);
          const A = nr(T) ? pn(t, T, c.measured) : t;
          return {
            position: {
              x: A.x - p + c.measured.width * m[0],
              y: A.y - g + c.measured.height * m[1],
            },
            positionAbsolute: A,
          };
        }
        async function io({
          nodesToRemove: e = [],
          edgesToRemove: t = [],
          nodes: n,
          edges: o,
          onBeforeDelete: i,
        }) {
          const l = new Set(e.map((A) => A.id)),
            c = [];
          for (const A of n) {
            if (A.deletable === !1) continue;
            const O = l.has(A.id),
              me = !O && A.parentId && c.find((he) => he.id === A.parentId);
            (O || me) && c.push(A);
          }
          const d = new Set(t.map((A) => A.id)),
            p = o.filter((A) => A.deletable !== !1),
            m = Mt(c, p);
          for (const A of p)
            d.has(A.id) && !m.find((me) => me.id === A.id) && m.push(A);
          if (!i) return { edges: m, nodes: c };
          const T = await i({ nodes: c, edges: m });
          return typeof T == "boolean"
            ? T
              ? { edges: m, nodes: c }
              : { edges: [], nodes: [] }
            : T;
        }
        const Mn = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n),
          pn = (e = { x: 0, y: 0 }, t, n) => ({
            x: Mn(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
            y: Mn(e.y, t[0][1], t[1][1] - (n?.height ?? 0)),
          });
        function Jn(e, t, n) {
          const { width: o, height: i } = Pn(n),
            { x: l, y: c } = n.internals.positionAbsolute;
          return pn(
            e,
            [
              [l, c],
              [l + o, c + i],
            ],
            t,
          );
        }
        const Lr = (e, t, n) =>
            e < t
              ? Mn(Math.abs(e - t), 1, t) / t
              : e > n
                ? -Mn(Math.abs(e - n), 1, t) / t
                : 0,
          er = (e, t, n = 15, o = 40) => {
            const i = Lr(e.x, o, t.width - o) * n,
              l = Lr(e.y, o, t.height - o) * n;
            return [i, l];
          },
          $n = (e, t) => ({
            x: Math.min(e.x, t.x),
            y: Math.min(e.y, t.y),
            x2: Math.max(e.x2, t.x2),
            y2: Math.max(e.y2, t.y2),
          }),
          xr = ({ x: e, y: t, width: n, height: o }) => ({
            x: e,
            y: t,
            x2: e + n,
            y2: t + o,
          }),
          In = ({ x: e, y: t, x2: n, y2: o }) => ({
            x: e,
            y: t,
            width: n - e,
            height: o - t,
          }),
          gn = (e, t = [0, 0]) => {
            const { x: n, y: o } = At(e)
              ? e.internals.positionAbsolute
              : kt(e, t);
            return {
              x: n,
              y: o,
              width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
              height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
            };
          },
          Rn = (e, t = [0, 0]) => {
            const { x: n, y: o } = At(e)
              ? e.internals.positionAbsolute
              : kt(e, t);
            return {
              x: n,
              y: o,
              x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
              y2: o + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0),
            };
          },
          Qo = (e, t) => In($n(xr(e), xr(t))),
          tr = (e, t) => {
            const n = Math.max(
                0,
                Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x),
              ),
              o = Math.max(
                0,
                Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y),
              );
            return Math.ceil(n * o);
          },
          Ai = (e) => kn(e.width) && kn(e.height) && kn(e.x) && kn(e.y),
          kn = (e) => !isNaN(e) && isFinite(e),
          jr = (e, t) => {},
          Rr = (e, t = [1, 1]) => ({
            x: t[0] * Math.round(e.x / t[0]),
            y: t[1] * Math.round(e.y / t[1]),
          }),
          Vr = ({ x: e, y: t }, [n, o, i], l = !1, c = [1, 1]) => {
            const d = { x: (e - n) / i, y: (t - o) / i };
            return l ? Rr(d, c) : d;
          },
          Jo = ({ x: e, y: t }, [n, o, i]) => ({ x: e * i + n, y: t * i + o }),
          es = (e, t, n, o, i, l) => {
            const c = t / (e.width * (1 + l)),
              d = n / (e.height * (1 + l)),
              p = Math.min(c, d),
              g = Mn(p, o, i),
              m = e.x + e.width / 2,
              T = e.y + e.height / 2,
              A = t / 2 - m * g,
              O = n / 2 - T * g;
            return { x: A, y: O, zoom: g };
          },
          ao = () =>
            typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
        function nr(e) {
          return e !== void 0 && e !== "parent";
        }
        function Pn(e) {
          return {
            width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
            height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0,
          };
        }
        function Mi(e) {
          return (
            (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 &&
            (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0
          );
        }
        function $i(e, t = { width: 0, height: 0 }, n, o, i) {
          const l = { ...e },
            c = o.get(n);
          if (c) {
            const d = c.origin || i;
            (l.x += c.internals.positionAbsolute.x - (t.width ?? 0) * d[0]),
              (l.y += c.internals.positionAbsolute.y - (t.height ?? 0) * d[1]);
          }
          return l;
        }
        function ht(
          e,
          {
            snapGrid: t = [0, 0],
            snapToGrid: n = !1,
            transform: o,
            containerBounds: i,
          },
        ) {
          const { x: l, y: c } = Tn(e),
            d = Vr({ x: l - (i?.left ?? 0), y: c - (i?.top ?? 0) }, o),
            { x: p, y: g } = n ? Rr(d, t) : d;
          return { xSnapped: p, ySnapped: g, ...d };
        }
        const co = (e) => ({ width: e.offsetWidth, height: e.offsetHeight }),
          lo = (e) => e.getRootNode?.() || window?.document,
          Ii = ["INPUT", "SELECT", "TEXTAREA"];
        function ki(e) {
          const t = e.composedPath?.()?.[0] || e.target;
          return (
            Ii.includes(t?.nodeName) ||
            t?.hasAttribute?.("contenteditable") ||
            !!t?.closest(".nokey")
          );
        }
        const Fr = (e) => "clientX" in e,
          Tn = (e, t) => {
            const n = Fr(e),
              o = n ? e.clientX : e.touches?.[0].clientX,
              i = n ? e.clientY : e.touches?.[0].clientY;
            return { x: o - (t?.left ?? 0), y: i - (t?.top ?? 0) };
          },
          ts = (e, t, n, o, i) => {
            const l = t.querySelectorAll(`.${e}`);
            return !l || !l.length
              ? null
              : Array.from(l).map((c) => {
                  const d = c.getBoundingClientRect();
                  return {
                    id: c.getAttribute("data-handleid"),
                    type: e,
                    nodeId: i,
                    position: c.getAttribute("data-handlepos"),
                    x: (d.left - n.left) / o,
                    y: (d.top - n.top) / o,
                    ...co(c),
                  };
                });
          };
        function uo({
          sourceX: e,
          sourceY: t,
          targetX: n,
          targetY: o,
          sourceControlX: i,
          sourceControlY: l,
          targetControlX: c,
          targetControlY: d,
        }) {
          const p = e * 0.125 + i * 0.375 + c * 0.375 + n * 0.125,
            g = t * 0.125 + l * 0.375 + d * 0.375 + o * 0.125,
            m = Math.abs(p - e),
            T = Math.abs(g - t);
          return [p, g, m, T];
        }
        function vr(e, t) {
          return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
        }
        function ns({ pos: e, x1: t, y1: n, x2: o, y2: i, c: l }) {
          switch (e) {
            case _e.Left:
              return [t - vr(t - o, l), n];
            case _e.Right:
              return [t + vr(o - t, l), n];
            case _e.Top:
              return [t, n - vr(n - i, l)];
            case _e.Bottom:
              return [t, n + vr(i - n, l)];
          }
        }
        function rs({
          sourceX: e,
          sourceY: t,
          sourcePosition: n = _e.Bottom,
          targetX: o,
          targetY: i,
          targetPosition: l = _e.Top,
          curvature: c = 0.25,
        }) {
          const [d, p] = ns({ pos: n, x1: e, y1: t, x2: o, y2: i, c }),
            [g, m] = ns({ pos: l, x1: o, y1: i, x2: e, y2: t, c }),
            [T, A, O, me] = uo({
              sourceX: e,
              sourceY: t,
              targetX: o,
              targetY: i,
              sourceControlX: d,
              sourceControlY: p,
              targetControlX: g,
              targetControlY: m,
            });
          return [`M${e},${t} C${d},${p} ${g},${m} ${o},${i}`, T, A, O, me];
        }
        function os({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
          const i = Math.abs(n - e) / 2,
            l = n < e ? n + i : n - i,
            c = Math.abs(o - t) / 2,
            d = o < t ? o + c : o - c;
          return [l, d, i, c];
        }
        function Pi({
          sourceNode: e,
          targetNode: t,
          selected: n = !1,
          zIndex: o = 0,
          elevateOnSelect: i = !1,
        }) {
          if (!i) return o;
          const l = n || t.selected || e.selected,
            c = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
          return o + (l ? c : 0);
        }
        function Ti({
          sourceNode: e,
          targetNode: t,
          width: n,
          height: o,
          transform: i,
        }) {
          const l = $n(Rn(e), Rn(t));
          l.x === l.x2 && (l.x2 += 1), l.y === l.y2 && (l.y2 += 1);
          const c = {
            x: -i[0] / i[2],
            y: -i[1] / i[2],
            width: n / i[2],
            height: o / i[2],
          };
          return tr(c, In(l)) > 0;
        }
        const ss = ({
            source: e,
            sourceHandle: t,
            target: n,
            targetHandle: o,
          }) => `xy-edge__${e}${t || ""}-${n}${o || ""}`,
          Di = (e, t) =>
            t.some(
              (n) =>
                n.source === e.source &&
                n.target === e.target &&
                (n.sourceHandle === e.sourceHandle ||
                  (!n.sourceHandle && !e.sourceHandle)) &&
                (n.targetHandle === e.targetHandle ||
                  (!n.targetHandle && !e.targetHandle)),
            ),
          Oi = (e, t) => {
            if (!e.source || !e.target) return jr("006", De.error006()), t;
            let n;
            return (
              _t(e) ? (n = { ...e }) : (n = { ...e, id: ss(e) }),
              Di(n, t)
                ? t
                : (n.sourceHandle === null && delete n.sourceHandle,
                  n.targetHandle === null && delete n.targetHandle,
                  t.concat(n))
            );
          },
          Bi = (e, t, n, o = { shouldReplaceId: !0 }) => {
            const { id: i, ...l } = e;
            if (!t.source || !t.target) return jr("006", De.error006()), n;
            if (!n.find((p) => p.id === e.id))
              return jr("007", De.error007(i)), n;
            const d = {
              ...l,
              id: o.shouldReplaceId ? ss(t) : i,
              source: t.source,
              target: t.target,
              sourceHandle: t.sourceHandle,
              targetHandle: t.targetHandle,
            };
            return n.filter((p) => p.id !== i).concat(d);
          };
        function is({ sourceX: e, sourceY: t, targetX: n, targetY: o }) {
          const [i, l, c, d] = os({
            sourceX: e,
            sourceY: t,
            targetX: n,
            targetY: o,
          });
          return [`M ${e},${t}L ${n},${o}`, i, l, c, d];
        }
        const as = {
            [_e.Left]: { x: -1, y: 0 },
            [_e.Right]: { x: 1, y: 0 },
            [_e.Top]: { x: 0, y: -1 },
            [_e.Bottom]: { x: 0, y: 1 },
          },
          zi = ({ source: e, sourcePosition: t = _e.Bottom, target: n }) =>
            t === _e.Left || t === _e.Right
              ? e.x < n.x
                ? { x: 1, y: 0 }
                : { x: -1, y: 0 }
              : e.y < n.y
                ? { x: 0, y: 1 }
                : { x: 0, y: -1 },
          cs = (e, t) =>
            Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
        function Hi({
          source: e,
          sourcePosition: t = _e.Bottom,
          target: n,
          targetPosition: o = _e.Top,
          center: i,
          offset: l,
        }) {
          const c = as[t],
            d = as[o],
            p = { x: e.x + c.x * l, y: e.y + c.y * l },
            g = { x: n.x + d.x * l, y: n.y + d.y * l },
            m = zi({ source: p, sourcePosition: t, target: g }),
            T = m.x !== 0 ? "x" : "y",
            A = m[T];
          let O = [],
            me,
            he;
          const Ie = { x: 0, y: 0 },
            le = { x: 0, y: 0 },
            [Ne, ge, U, ze] = os({
              sourceX: e.x,
              sourceY: e.y,
              targetX: n.x,
              targetY: n.y,
            });
          if (c[T] * d[T] === -1) {
            (me = i.x ?? Ne), (he = i.y ?? ge);
            const ue = [
                { x: me, y: p.y },
                { x: me, y: g.y },
              ],
              ke = [
                { x: p.x, y: he },
                { x: g.x, y: he },
              ];
            c[T] === A ? (O = T === "x" ? ue : ke) : (O = T === "x" ? ke : ue);
          } else {
            const ue = [{ x: p.x, y: g.y }],
              ke = [{ x: g.x, y: p.y }];
            if (
              (T === "x"
                ? (O = c.x === A ? ke : ue)
                : (O = c.y === A ? ue : ke),
              t === o)
            ) {
              const Me = Math.abs(e[T] - n[T]);
              if (Me <= l) {
                const _ = Math.min(l - 1, l - Me);
                c[T] === A
                  ? (Ie[T] = (p[T] > e[T] ? -1 : 1) * _)
                  : (le[T] = (g[T] > n[T] ? -1 : 1) * _);
              }
            }
            if (t !== o) {
              const Me = T === "x" ? "y" : "x",
                _ = c[T] === d[Me],
                re = p[Me] > g[Me],
                Z = p[Me] < g[Me];
              ((c[T] === 1 && ((!_ && re) || (_ && Z))) ||
                (c[T] !== 1 && ((!_ && Z) || (_ && re)))) &&
                (O = T === "x" ? ue : ke);
            }
            const Ce = { x: p.x + Ie.x, y: p.y + Ie.y },
              Pe = { x: g.x + le.x, y: g.y + le.y },
              Ye = Math.max(Math.abs(Ce.x - O[0].x), Math.abs(Pe.x - O[0].x)),
              Ae = Math.max(Math.abs(Ce.y - O[0].y), Math.abs(Pe.y - O[0].y));
            Ye >= Ae
              ? ((me = (Ce.x + Pe.x) / 2), (he = O[0].y))
              : ((me = O[0].x), (he = (Ce.y + Pe.y) / 2));
          }
          return [
            [
              e,
              { x: p.x + Ie.x, y: p.y + Ie.y },
              ...O,
              { x: g.x + le.x, y: g.y + le.y },
              n,
            ],
            me,
            he,
            U,
            ze,
          ];
        }
        function Li(e, t, n, o) {
          const i = Math.min(cs(e, t) / 2, cs(t, n) / 2, o),
            { x: l, y: c } = t;
          if ((e.x === l && l === n.x) || (e.y === c && c === n.y))
            return `L${l} ${c}`;
          if (e.y === c) {
            const g = e.x < n.x ? -1 : 1,
              m = e.y < n.y ? 1 : -1;
            return `L ${l + i * g},${c}Q ${l},${c} ${l},${c + i * m}`;
          }
          const d = e.x < n.x ? 1 : -1,
            p = e.y < n.y ? -1 : 1;
          return `L ${l},${c + i * p}Q ${l},${c} ${l + i * d},${c}`;
        }
        function ji({
          sourceX: e,
          sourceY: t,
          sourcePosition: n = _e.Bottom,
          targetX: o,
          targetY: i,
          targetPosition: l = _e.Top,
          borderRadius: c = 5,
          centerX: d,
          centerY: p,
          offset: g = 20,
        }) {
          const [m, T, A, O, me] = Hi({
            source: { x: e, y: t },
            sourcePosition: n,
            target: { x: o, y: i },
            targetPosition: l,
            center: { x: d, y: p },
            offset: g,
          });
          return [
            m.reduce((Ie, le, Ne) => {
              let ge = "";
              return (
                Ne > 0 && Ne < m.length - 1
                  ? (ge = Li(m[Ne - 1], le, m[Ne + 1], c))
                  : (ge = `${Ne === 0 ? "M" : "L"}${le.x} ${le.y}`),
                (Ie += ge),
                Ie
              );
            }, ""),
            T,
            A,
            O,
            me,
          ];
        }
        function ls(e) {
          return (
            e &&
            !!(e.internals.handleBounds || e.handles?.length) &&
            !!(e.measured.width || e.width || e.initialWidth)
          );
        }
        function us(e) {
          const { sourceNode: t, targetNode: n } = e;
          if (!ls(t) || !ls(n)) return null;
          const o = t.internals.handleBounds || ds(t.handles),
            i = n.internals.handleBounds || ds(n.handles),
            l = fs(o?.source ?? [], e.sourceHandle),
            c = fs(
              e.connectionMode === st.Strict
                ? (i?.target ?? [])
                : (i?.target ?? []).concat(i?.source ?? []),
              e.targetHandle,
            );
          if (!l || !c)
            return (
              e.onError?.(
                "008",
                De.error008(l ? "target" : "source", {
                  id: e.id,
                  sourceHandle: e.sourceHandle,
                  targetHandle: e.targetHandle,
                }),
              ),
              null
            );
          const d = l?.position || _e.Bottom,
            p = c?.position || _e.Top,
            g = _r(t, l, d),
            m = _r(n, c, p);
          return {
            sourceX: g.x,
            sourceY: g.y,
            targetX: m.x,
            targetY: m.y,
            sourcePosition: d,
            targetPosition: p,
          };
        }
        function ds(e) {
          if (!e) return null;
          const t = [],
            n = [];
          for (const o of e)
            (o.width = o.width ?? 1),
              (o.height = o.height ?? 1),
              o.type === "source"
                ? t.push(o)
                : o.type === "target" && n.push(o);
          return { source: t, target: n };
        }
        function _r(e, t, n = _e.Left, o = !1) {
          const i = (t?.x ?? 0) + e.internals.positionAbsolute.x,
            l = (t?.y ?? 0) + e.internals.positionAbsolute.y,
            { width: c, height: d } = t ?? Pn(e);
          if (o) return { x: i + c / 2, y: l + d / 2 };
          switch (t?.position ?? n) {
            case _e.Top:
              return { x: i + c / 2, y: l };
            case _e.Right:
              return { x: i + c, y: l + d / 2 };
            case _e.Bottom:
              return { x: i + c / 2, y: l + d };
            case _e.Left:
              return { x: i, y: l + d / 2 };
          }
        }
        function fs(e, t) {
          return (e && (t ? e.find((n) => n.id === t) : e[0])) || null;
        }
        function hs(e, t) {
          return e
            ? typeof e == "string"
              ? e
              : `${t ? `${t}__` : ""}${Object.keys(e)
                  .sort()
                  .map((o) => `${o}=${e[o]}`)
                  .join("&")}`
            : "";
        }
        function Ri(
          e,
          {
            id: t,
            defaultColor: n,
            defaultMarkerStart: o,
            defaultMarkerEnd: i,
          },
        ) {
          const l = new Set();
          return e
            .reduce(
              (c, d) => (
                [d.markerStart || o, d.markerEnd || i].forEach((p) => {
                  if (p && typeof p == "object") {
                    const g = hs(p, t);
                    l.has(g) ||
                      (c.push({ id: g, color: p.color || n, ...p }), l.add(g));
                  }
                }),
                c
              ),
              [],
            )
            .sort((c, d) => c.id.localeCompare(d.id));
        }
        function ga(e, t, n, o, i) {
          let l = 0.5;
          i === "start" ? (l = 0) : i === "end" && (l = 1);
          let c = [(e.x + e.width * l) * t.zoom + t.x, e.y * t.zoom + t.y - o],
            d = [-100 * l, -100];
          switch (n) {
            case _e.Right:
              (c = [
                (e.x + e.width) * t.zoom + t.x + o,
                (e.y + e.height * l) * t.zoom + t.y,
              ]),
                (d = [0, -100 * l]);
              break;
            case _e.Bottom:
              (c[1] = (e.y + e.height) * t.zoom + t.y + o), (d[1] = 0);
              break;
            case _e.Left:
              (c = [
                e.x * t.zoom + t.x - o,
                (e.y + e.height * l) * t.zoom + t.y,
              ]),
                (d = [-100, -100 * l]);
              break;
          }
          return `translate(${c[0]}px, ${c[1]}px) translate(${d[0]}%, ${d[1]}%)`;
        }
        const fo = {
            nodeOrigin: [0, 0],
            nodeExtent: ct,
            elevateNodesOnSelect: !0,
            defaults: {},
          },
          ps = { ...fo, checkEquality: !0 };
        function ho(e, t) {
          const n = { ...e };
          for (const o in t) t[o] !== void 0 && (n[o] = t[o]);
          return n;
        }
        function Vi(e, t, n) {
          const o = ho(fo, n);
          for (const i of e.values())
            if (i.parentId) po(i, e, t, o);
            else {
              const l = kt(i, o.nodeOrigin),
                c = nr(i.extent) ? i.extent : o.nodeExtent,
                d = pn(l, c, Pn(i));
              i.internals.positionAbsolute = d;
            }
        }
        function Fi(e, t, n, o) {
          const i = ho(ps, o),
            l = new Map(t),
            c = i?.elevateNodesOnSelect ? 1e3 : 0;
          t.clear(), n.clear();
          for (const d of e) {
            let p = l.get(d.id);
            if (i.checkEquality && d === p?.internals.userNode) t.set(d.id, p);
            else {
              const g = kt(d, i.nodeOrigin),
                m = nr(d.extent) ? d.extent : i.nodeExtent,
                T = pn(g, m, Pn(d));
              (p = {
                ...i.defaults,
                ...d,
                measured: {
                  width: d.measured?.width,
                  height: d.measured?.height,
                },
                internals: {
                  positionAbsolute: T,
                  handleBounds: d.measured ? p?.internals.handleBounds : void 0,
                  z: gs(d, c),
                  userNode: d,
                },
              }),
                t.set(d.id, p);
            }
            d.parentId && po(p, t, n, o);
          }
        }
        function qi(e, t) {
          if (!e.parentId) return;
          const n = t.get(e.parentId);
          n ? n.set(e.id, e) : t.set(e.parentId, new Map([[e.id, e]]));
        }
        function po(e, t, n, o) {
          const {
              elevateNodesOnSelect: i,
              nodeOrigin: l,
              nodeExtent: c,
            } = ho(fo, o),
            d = e.parentId,
            p = t.get(d);
          if (!p) {
            console.warn(
              `Parent node ${d} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`,
            );
            return;
          }
          qi(e, n);
          const g = i ? 1e3 : 0,
            { x: m, y: T, z: A } = Xi(e, p, l, c, g),
            { positionAbsolute: O } = e.internals,
            me = m !== O.x || T !== O.y;
          (me || A !== e.internals.z) &&
            (e.internals = {
              ...e.internals,
              positionAbsolute: me ? { x: m, y: T } : O,
              z: A,
            });
        }
        function gs(e, t) {
          return (kn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
        }
        function Xi(e, t, n, o, i) {
          const { x: l, y: c } = t.internals.positionAbsolute,
            d = Pn(e),
            p = kt(e, n),
            g = nr(e.extent) ? pn(p, e.extent, d) : p;
          let m = pn({ x: l + g.x, y: c + g.y }, o, d);
          e.extent === "parent" && (m = Jn(m, d, t));
          const T = gs(e, i),
            A = t.internals.z ?? 0;
          return { x: m.x, y: m.y, z: A > T ? A : T };
        }
        function ys(e, t, n, o = [0, 0]) {
          const i = [],
            l = new Map();
          for (const c of e) {
            const d = t.get(c.parentId);
            if (!d) continue;
            const p = l.get(c.parentId)?.expandedRect ?? gn(d),
              g = Qo(p, c.rect);
            l.set(c.parentId, { expandedRect: g, parent: d });
          }
          return (
            l.size > 0 &&
              l.forEach(({ expandedRect: c, parent: d }, p) => {
                const g = d.internals.positionAbsolute,
                  m = Pn(d),
                  T = d.origin ?? o,
                  A = c.x < g.x ? Math.round(Math.abs(g.x - c.x)) : 0,
                  O = c.y < g.y ? Math.round(Math.abs(g.y - c.y)) : 0,
                  me = Math.max(m.width, Math.round(c.width)),
                  he = Math.max(m.height, Math.round(c.height)),
                  Ie = (me - m.width) * T[0],
                  le = (he - m.height) * T[1];
                (A > 0 || O > 0 || Ie || le) &&
                  (i.push({
                    id: p,
                    type: "position",
                    position: {
                      x: d.position.x - A + Ie,
                      y: d.position.y - O + le,
                    },
                  }),
                  n.get(p)?.forEach((Ne) => {
                    e.some((ge) => ge.id === Ne.id) ||
                      i.push({
                        id: Ne.id,
                        type: "position",
                        position: {
                          x: Ne.position.x + A,
                          y: Ne.position.y + O,
                        },
                      });
                  })),
                  (m.width < c.width || m.height < c.height || A || O) &&
                    i.push({
                      id: p,
                      type: "dimensions",
                      setAttributes: !0,
                      dimensions: {
                        width: me + (A ? T[0] * A - Ie : 0),
                        height: he + (O ? T[1] * O - le : 0),
                      },
                    });
              }),
            i
          );
        }
        function Wi(e, t, n, o, i, l) {
          const c = o?.querySelector(".xyflow__viewport");
          let d = !1;
          if (!c) return { changes: [], updatedInternals: d };
          const p = [],
            g = window.getComputedStyle(c),
            { m22: m } = new window.DOMMatrixReadOnly(g.transform),
            T = [];
          for (const A of e.values()) {
            const O = t.get(A.id);
            if (O)
              if (O.hidden)
                (O.internals = { ...O.internals, handleBounds: void 0 }),
                  (d = !0);
              else {
                const me = co(A.nodeElement),
                  he =
                    O.measured.width !== me.width ||
                    O.measured.height !== me.height;
                if (
                  !!(
                    me.width &&
                    me.height &&
                    (he || !O.internals.handleBounds || A.force)
                  )
                ) {
                  const le = A.nodeElement.getBoundingClientRect(),
                    Ne = nr(O.extent) ? O.extent : l;
                  let { positionAbsolute: ge } = O.internals;
                  O.parentId && O.extent === "parent"
                    ? (ge = Jn(ge, me, t.get(O.parentId)))
                    : Ne && (ge = pn(ge, Ne, me)),
                    (O.measured = me),
                    (O.internals = {
                      ...O.internals,
                      positionAbsolute: ge,
                      handleBounds: {
                        source: ts("source", A.nodeElement, le, m, O.id),
                        target: ts("target", A.nodeElement, le, m, O.id),
                      },
                    }),
                    O.parentId && po(O, t, n, { nodeOrigin: i }),
                    (d = !0),
                    he &&
                      (p.push({ id: O.id, type: "dimensions", dimensions: me }),
                      O.expandParent &&
                        O.parentId &&
                        T.push({
                          id: O.id,
                          parentId: O.parentId,
                          rect: gn(O, i),
                        }));
                }
              }
          }
          if (T.length > 0) {
            const A = ys(T, t, n, i);
            p.push(...A);
          }
          return { changes: p, updatedInternals: d };
        }
        async function go({
          delta: e,
          panZoom: t,
          transform: n,
          translateExtent: o,
          width: i,
          height: l,
        }) {
          if (!t || (!e.x && !e.y)) return Promise.resolve(!1);
          const c = await t.setViewportConstrained(
              { x: n[0] + e.x, y: n[1] + e.y, zoom: n[2] },
              [
                [0, 0],
                [i, l],
              ],
              o,
            ),
            d = !!c && (c.x !== n[0] || c.y !== n[1] || c.k !== n[2]);
          return Promise.resolve(d);
        }
        function Yi(e, t, n) {
          e.clear(), t.clear();
          for (const o of n) {
            const {
                source: i,
                target: l,
                sourceHandle: c = null,
                targetHandle: d = null,
              } = o,
              p = `${i}-source-${c}`,
              g = `${l}-target-${d}`,
              m = e.get(p) || new Map(),
              T = e.get(g) || new Map(),
              A = {
                edgeId: o.id,
                source: i,
                target: l,
                sourceHandle: c,
                targetHandle: d,
              };
            t.set(o.id, o),
              e.set(p, m.set(`${l}-${d}`, A)),
              e.set(g, T.set(`${i}-${c}`, A));
          }
        }
        function Wa(e, t) {
          if (e === null || t === null) return !1;
          const n = Array.isArray(e) ? e : [e],
            o = Array.isArray(t) ? t : [t];
          if (n.length !== o.length) return !1;
          for (let i = 0; i < n.length; i++)
            if (
              n[i].id !== o[i].id ||
              n[i].type !== o[i].type ||
              !Object.is(n[i].data, o[i].data)
            )
              return !1;
          return !0;
        }
        function ya(e, t) {
          if (!e.parentId) return !1;
          const n = t.get(e.parentId);
          return n ? (n.selected ? !0 : ya(n, t)) : !1;
        }
        function ma(e, t, n) {
          let o = e;
          do {
            if (o?.matches(t)) return !0;
            if (o === n) return !1;
            o = o.parentElement;
          } while (o);
          return !1;
        }
        function wa(e, t, n, o) {
          const i = new Map();
          for (const [l, c] of e)
            if (
              (c.selected || c.id === o) &&
              (!c.parentId || !ya(c, e)) &&
              (c.draggable || (t && typeof c.draggable > "u"))
            ) {
              const d = e.get(l);
              d &&
                i.set(l, {
                  id: l,
                  position: d.position || { x: 0, y: 0 },
                  distance: {
                    x: n.x - d.internals.positionAbsolute.x,
                    y: n.y - d.internals.positionAbsolute.y,
                  },
                  extent: d.extent,
                  parentId: d.parentId,
                  origin: d.origin,
                  expandParent: d.expandParent,
                  internals: {
                    positionAbsolute: d.internals.positionAbsolute || {
                      x: 0,
                      y: 0,
                    },
                  },
                  measured: {
                    width: d.measured.width ?? 0,
                    height: d.measured.height ?? 0,
                  },
                });
            }
          return i;
        }
        function Ki({
          nodeId: e,
          dragItems: t,
          nodeLookup: n,
          dragging: o = !0,
        }) {
          const i = [];
          for (const [c, d] of t) {
            const p = n.get(c)?.internals.userNode;
            p && i.push({ ...p, position: d.position, dragging: o });
          }
          if (!e) return [i[0], i];
          const l = n.get(e)?.internals.userNode;
          return [
            l
              ? {
                  ...l,
                  position: t.get(e)?.position || l.position,
                  dragging: o,
                }
              : i[0],
            i,
          ];
        }
        function Ia({
          onNodeMouseDown: e,
          getStoreItems: t,
          onDragStart: n,
          onDrag: o,
          onDragStop: i,
        }) {
          let l = { x: null, y: null },
            c = 0,
            d = new Map(),
            p = !1,
            g = { x: 0, y: 0 },
            m = null,
            T = !1,
            A = null,
            O = !1;
          function me({
            noDragClassName: Ie,
            handleSelector: le,
            domNode: Ne,
            isSelectable: ge,
            nodeId: U,
            nodeClickDistance: ze = 0,
          }) {
            A = Gt(Ne);
            function je({ x: Pe, y: Ye }, Ae) {
              const {
                nodeLookup: Me,
                nodeExtent: _,
                snapGrid: re,
                snapToGrid: Z,
                nodeOrigin: de,
                onNodeDrag: xe,
                onSelectionDrag: se,
                onError: be,
                updateNodePositions: Ge,
              } = t();
              l = { x: Pe, y: Ye };
              let Qe = !1,
                yt = { x: 0, y: 0, x2: 0, y2: 0 };
              if (d.size > 1 && _) {
                const s = Ot(d);
                yt = xr(s);
              }
              for (const [s, a] of d) {
                if (!Me.has(s)) continue;
                let h = { x: Pe - a.distance.x, y: Ye - a.distance.y };
                Z && (h = Rr(h, re));
                let w = [
                  [_[0][0], _[0][1]],
                  [_[1][0], _[1][1]],
                ];
                if (d.size > 1 && _ && !a.extent) {
                  const { positionAbsolute: $ } = a.internals,
                    D = $.x - yt.x + _[0][0],
                    te = $.x + a.measured.width - yt.x2 + _[1][0],
                    ee = $.y - yt.y + _[0][1],
                    pe = $.y + a.measured.height - yt.y2 + _[1][1];
                  w = [
                    [D, ee],
                    [te, pe],
                  ];
                }
                const { position: b, positionAbsolute: C } = wr({
                  nodeId: s,
                  nextPosition: h,
                  nodeLookup: Me,
                  nodeExtent: w,
                  nodeOrigin: de,
                  onError: be,
                });
                (Qe = Qe || a.position.x !== b.x || a.position.y !== b.y),
                  (a.position = b),
                  (a.internals.positionAbsolute = C);
              }
              if (Qe && (Ge(d, !0), Ae && (o || xe || (!U && se)))) {
                const [s, a] = Ki({ nodeId: U, dragItems: d, nodeLookup: Me });
                o?.(Ae, d, s, a), xe?.(Ae, s, a), U || se?.(Ae, a);
              }
            }
            async function ue() {
              if (!m) return;
              const { transform: Pe, panBy: Ye, autoPanSpeed: Ae } = t(),
                [Me, _] = er(g, m, Ae);
              (Me !== 0 || _ !== 0) &&
                ((l.x = (l.x ?? 0) - Me / Pe[2]),
                (l.y = (l.y ?? 0) - _ / Pe[2]),
                (await Ye({ x: Me, y: _ })) && je(l, null)),
                (c = requestAnimationFrame(ue));
            }
            function ke(Pe) {
              const {
                nodeLookup: Ye,
                multiSelectionActive: Ae,
                nodesDraggable: Me,
                transform: _,
                snapGrid: re,
                snapToGrid: Z,
                selectNodesOnDrag: de,
                onNodeDragStart: xe,
                onSelectionDragStart: se,
                unselectNodesAndEdges: be,
              } = t();
              (T = !0),
                (!de || !ge) && !Ae && U && (Ye.get(U)?.selected || be()),
                ge && de && U && e?.(U);
              const Ge = ht(Pe.sourceEvent, {
                transform: _,
                snapGrid: re,
                snapToGrid: Z,
                containerBounds: m,
              });
              if (
                ((l = Ge),
                (d = wa(Ye, Me, Ge, U)),
                d.size > 0 && (n || xe || (!U && se)))
              ) {
                const [Qe, yt] = Ki({
                  nodeId: U,
                  dragItems: d,
                  nodeLookup: Ye,
                });
                n?.(Pe.sourceEvent, d, Qe, yt),
                  xe?.(Pe.sourceEvent, Qe, yt),
                  U || se?.(Pe.sourceEvent, yt);
              }
            }
            const Ce = Qr()
              .clickDistance(ze)
              .on("start", (Pe) => {
                const {
                  domNode: Ye,
                  nodeDragThreshold: Ae,
                  transform: Me,
                  snapGrid: _,
                  snapToGrid: re,
                } = t();
                (m = Ye?.getBoundingClientRect() || null),
                  (O = !1),
                  Ae === 0 && ke(Pe),
                  (l = ht(Pe.sourceEvent, {
                    transform: Me,
                    snapGrid: _,
                    snapToGrid: re,
                    containerBounds: m,
                  })),
                  (g = Tn(Pe.sourceEvent, m));
              })
              .on("drag", (Pe) => {
                const {
                    autoPanOnNodeDrag: Ye,
                    transform: Ae,
                    snapGrid: Me,
                    snapToGrid: _,
                    nodeDragThreshold: re,
                    nodeLookup: Z,
                  } = t(),
                  de = ht(Pe.sourceEvent, {
                    transform: Ae,
                    snapGrid: Me,
                    snapToGrid: _,
                    containerBounds: m,
                  });
                if (
                  (((Pe.sourceEvent.type === "touchmove" &&
                    Pe.sourceEvent.touches.length > 1) ||
                    (U && !Z.has(U))) &&
                    (O = !0),
                  !O)
                ) {
                  if ((!p && Ye && T && ((p = !0), ue()), !T)) {
                    const xe = de.xSnapped - (l.x ?? 0),
                      se = de.ySnapped - (l.y ?? 0);
                    Math.sqrt(xe * xe + se * se) > re && ke(Pe);
                  }
                  (l.x !== de.xSnapped || l.y !== de.ySnapped) &&
                    d &&
                    T &&
                    ((g = Tn(Pe.sourceEvent, m)), je(de, Pe.sourceEvent));
                }
              })
              .on("end", (Pe) => {
                if (
                  !(!T || O) &&
                  ((p = !1), (T = !1), cancelAnimationFrame(c), d.size > 0)
                ) {
                  const {
                    nodeLookup: Ye,
                    updateNodePositions: Ae,
                    onNodeDragStop: Me,
                    onSelectionDragStop: _,
                  } = t();
                  if ((Ae(d, !1), i || Me || (!U && _))) {
                    const [re, Z] = Ki({
                      nodeId: U,
                      dragItems: d,
                      nodeLookup: Ye,
                      dragging: !1,
                    });
                    i?.(Pe.sourceEvent, d, re, Z),
                      Me?.(Pe.sourceEvent, re, Z),
                      U || _?.(Pe.sourceEvent, Z);
                  }
                }
              })
              .filter((Pe) => {
                const Ye = Pe.target;
                return (
                  !Pe.button &&
                  (!Ie || !ma(Ye, `.${Ie}`, Ne)) &&
                  (!le || ma(Ye, le, Ne))
                );
              });
            A.call(Ce);
          }
          function he() {
            A?.on(".drag", null);
          }
          return { update: me, destroy: he };
        }
        function ka(e, t, n) {
          const o = [],
            i = { x: e.x - n, y: e.y - n, width: n * 2, height: n * 2 };
          for (const l of t.values()) tr(i, gn(l)) > 0 && o.push(l);
          return o;
        }
        const Pa = 250;
        function Ta(e, t, n, o) {
          let i = [],
            l = 1 / 0;
          const c = ka(e, n, t + Pa);
          for (const d of c) {
            const p = [
              ...(d.internals.handleBounds?.source ?? []),
              ...(d.internals.handleBounds?.target ?? []),
            ];
            for (const g of p) {
              if (o.nodeId === g.nodeId && o.type === g.type && o.id === g.id)
                continue;
              const { x: m, y: T } = _r(d, g, g.position, !0),
                A = Math.sqrt(Math.pow(m - e.x, 2) + Math.pow(T - e.y, 2));
              A > t ||
                (A < l
                  ? ((i = [{ ...g, x: m, y: T }]), (l = A))
                  : A === l && i.push({ ...g, x: m, y: T }));
            }
          }
          if (!i.length) return null;
          if (i.length > 1) {
            const d = o.type === "source" ? "target" : "source";
            return i.find((p) => p.type === d) ?? i[0];
          }
          return i[0];
        }
        function xa(e, t, n, o, i, l = !1) {
          const c = o.get(e);
          if (!c) return null;
          const d =
              i === "strict"
                ? c.internals.handleBounds?.[t]
                : [
                    ...(c.internals.handleBounds?.source ?? []),
                    ...(c.internals.handleBounds?.target ?? []),
                  ],
            p = (n ? d?.find((g) => g.id === n) : d?.[0]) ?? null;
          return p && l ? { ...p, ..._r(c, p, p.position, !0) } : p;
        }
        function va(e, t) {
          return (
            e ||
            (t?.classList.contains("target")
              ? "target"
              : t?.classList.contains("source")
                ? "source"
                : null)
          );
        }
        function Da(e, t) {
          let n = null;
          return t ? (n = !0) : e && !t && (n = !1), n;
        }
        const _a = () => !0;
        function Oa(
          e,
          {
            connectionMode: t,
            connectionRadius: n,
            handleId: o,
            nodeId: i,
            edgeUpdaterType: l,
            isTarget: c,
            domNode: d,
            nodeLookup: p,
            lib: g,
            autoPanOnConnect: m,
            flowId: T,
            panBy: A,
            cancelConnection: O,
            onConnectStart: me,
            onConnect: he,
            onConnectEnd: Ie,
            isValidConnection: le = _a,
            onReconnectEnd: Ne,
            updateConnection: ge,
            getTransform: U,
            getFromHandle: ze,
            autoPanSpeed: je,
          },
        ) {
          const ue = lo(e.target);
          let ke = 0,
            Ce;
          const { x: Pe, y: Ye } = Tn(e),
            Ae = ue?.elementFromPoint(Pe, Ye),
            Me = va(l, Ae),
            _ = d?.getBoundingClientRect();
          if (!_ || !Me) return;
          const re = xa(i, Me, o, p, t);
          if (!re) return;
          let Z = Tn(e, _),
            de = !1,
            xe = null,
            se = !1,
            be = null;
          function Ge() {
            if (!m || !_) return;
            const [C, $] = er(Z, _, je);
            A({ x: C, y: $ }), (ke = requestAnimationFrame(Ge));
          }
          const Qe = { ...re, nodeId: i, type: Me, position: re.position },
            yt = p.get(i),
            a = {
              inProgress: !0,
              isValid: null,
              from: _r(yt, Qe, _e.Left, !0),
              fromHandle: Qe,
              fromPosition: Qe.position,
              fromNode: yt,
              to: Z,
              toHandle: null,
              toPosition: lt[Qe.position],
              toNode: null,
            };
          ge(a);
          let h = a;
          me?.(e, { nodeId: i, handleId: o, handleType: Me });
          function w(C) {
            if (!ze() || !Qe) {
              b(C);
              return;
            }
            const $ = U();
            (Z = Tn(C, _)),
              (Ce = Ta(Vr(Z, $, !1, [1, 1]), n, p, Qe)),
              de || (Ge(), (de = !0));
            const D = ba(C, {
              handle: Ce,
              connectionMode: t,
              fromNodeId: i,
              fromHandleId: o,
              fromType: c ? "target" : "source",
              isValidConnection: le,
              doc: ue,
              lib: g,
              flowId: T,
              nodeLookup: p,
            });
            (be = D.handleDomNode),
              (xe = D.connection),
              (se = Da(!!Ce, D.isValid));
            const te = {
              ...h,
              isValid: se,
              to: Ce && se ? Jo({ x: Ce.x, y: Ce.y }, $) : Z,
              toHandle: D.toHandle,
              toPosition:
                se && D.toHandle ? D.toHandle.position : lt[Qe.position],
              toNode: D.toHandle ? p.get(D.toHandle.nodeId) : null,
            };
            (se &&
              Ce &&
              h.toHandle &&
              te.toHandle &&
              h.toHandle.type === te.toHandle.type &&
              h.toHandle.nodeId === te.toHandle.nodeId &&
              h.toHandle.id === te.toHandle.id &&
              h.to.x === te.to.x &&
              h.to.y === te.to.y) ||
              (ge(te), (h = te));
          }
          function b(C) {
            (Ce || be) && xe && se && he?.(xe);
            const { inProgress: $, ...D } = h,
              te = { ...D, toPosition: h.toHandle ? h.toPosition : null };
            Ie?.(C, te),
              l && Ne?.(C, te),
              O(),
              cancelAnimationFrame(ke),
              (de = !1),
              (se = !1),
              (xe = null),
              (be = null),
              ue.removeEventListener("mousemove", w),
              ue.removeEventListener("mouseup", b),
              ue.removeEventListener("touchmove", w),
              ue.removeEventListener("touchend", b);
          }
          ue.addEventListener("mousemove", w),
            ue.addEventListener("mouseup", b),
            ue.addEventListener("touchmove", w),
            ue.addEventListener("touchend", b);
        }
        function ba(
          e,
          {
            handle: t,
            connectionMode: n,
            fromNodeId: o,
            fromHandleId: i,
            fromType: l,
            doc: c,
            lib: d,
            flowId: p,
            isValidConnection: g = _a,
            nodeLookup: m,
          },
        ) {
          const T = l === "target",
            A = t
              ? c.querySelector(
                  `.${d}-flow__handle[data-id="${p}-${t?.nodeId}-${t?.id}-${t?.type}"]`,
                )
              : null,
            { x: O, y: me } = Tn(e),
            he = c.elementFromPoint(O, me),
            Ie = he?.classList.contains(`${d}-flow__handle`) ? he : A,
            le = {
              handleDomNode: Ie,
              isValid: !1,
              connection: null,
              toHandle: null,
            };
          if (Ie) {
            const Ne = va(void 0, Ie),
              ge = Ie.getAttribute("data-nodeid"),
              U = Ie.getAttribute("data-handleid"),
              ze = Ie.classList.contains("connectable"),
              je = Ie.classList.contains("connectableend");
            if (!ge || !Ne) return le;
            const ue = {
              source: T ? ge : o,
              sourceHandle: T ? U : i,
              target: T ? o : ge,
              targetHandle: T ? i : U,
            };
            le.connection = ue;
            const Ce =
              ze &&
              je &&
              (n === st.Strict
                ? (T && Ne === "source") || (!T && Ne === "target")
                : ge !== o || U !== i);
            (le.isValid = Ce && g(ue)), (le.toHandle = xa(ge, Ne, U, m, n, !1));
          }
          return le;
        }
        const Ba = { onPointerDown: Oa, isValid: ba };
        function za({
          domNode: e,
          panZoom: t,
          getTransform: n,
          getViewScale: o,
        }) {
          const i = Gt(e);
          function l({
            translateExtent: d,
            width: p,
            height: g,
            zoomStep: m = 10,
            pannable: T = !0,
            zoomable: A = !0,
            inversePan: O = !1,
          }) {
            const me = (ge) => {
              const U = n();
              if (ge.sourceEvent.type !== "wheel" || !t) return;
              const ze =
                  -ge.sourceEvent.deltaY *
                  (ge.sourceEvent.deltaMode === 1
                    ? 0.05
                    : ge.sourceEvent.deltaMode
                      ? 1
                      : 0.002) *
                  m,
                je = U[2] * Math.pow(2, ze);
              t.scaleTo(je);
            };
            let he = [0, 0];
            const Ie = (ge) => {
                (ge.sourceEvent.type === "mousedown" ||
                  ge.sourceEvent.type === "touchstart") &&
                  (he = [
                    ge.sourceEvent.clientX ?? ge.sourceEvent.touches[0].clientX,
                    ge.sourceEvent.clientY ?? ge.sourceEvent.touches[0].clientY,
                  ]);
              },
              le = (ge) => {
                const U = n();
                if (
                  (ge.sourceEvent.type !== "mousemove" &&
                    ge.sourceEvent.type !== "touchmove") ||
                  !t
                )
                  return;
                const ze = [
                    ge.sourceEvent.clientX ?? ge.sourceEvent.touches[0].clientX,
                    ge.sourceEvent.clientY ?? ge.sourceEvent.touches[0].clientY,
                  ],
                  je = [ze[0] - he[0], ze[1] - he[1]];
                he = ze;
                const ue = o() * Math.max(U[2], Math.log(U[2])) * (O ? -1 : 1),
                  ke = { x: U[0] - je[0] * ue, y: U[1] - je[1] * ue },
                  Ce = [
                    [0, 0],
                    [p, g],
                  ];
                t.setViewportConstrained(
                  { x: ke.x, y: ke.y, zoom: U[2] },
                  Ce,
                  d,
                );
              },
              Ne = Fe()
                .on("start", Ie)
                .on("zoom", T ? le : null)
                .on("zoom.wheel", A ? me : null);
            i.call(Ne, {});
          }
          function c() {
            i.on("zoom", null);
          }
          return { update: l, destroy: c, pointer: zt };
        }
        const Ha = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k,
          ms = (e) => ({ x: e.x, y: e.y, zoom: e.k }),
          Zi = ({ x: e, y: t, zoom: n }) => F.translate(e, t).scale(n),
          qr = (e, t) => e.target.closest(`.${t}`),
          Ea = (e, t) => t === 2 && Array.isArray(e) && e.includes(2),
          Gi = (e, t = 0, n = () => {}) => {
            const o = typeof t == "number" && t > 0;
            return o || n(), o ? e.transition().duration(t).on("end", n) : e;
          },
          Sa = (e) => {
            const t = e.ctrlKey && ao() ? 10 : 1;
            return (
              -e.deltaY *
              (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 0.002) *
              t
            );
          };
        function La({
          zoomPanValues: e,
          noWheelClassName: t,
          d3Selection: n,
          d3Zoom: o,
          panOnScrollMode: i,
          panOnScrollSpeed: l,
          zoomOnPinch: c,
          onPanZoomStart: d,
          onPanZoom: p,
          onPanZoomEnd: g,
        }) {
          return (m) => {
            if (qr(m, t)) return !1;
            m.preventDefault(), m.stopImmediatePropagation();
            const T = n.property("__zoom").k || 1;
            if (m.ctrlKey && c) {
              const Ie = zt(m),
                le = Sa(m),
                Ne = T * Math.pow(2, le);
              o.scaleTo(n, Ne, Ie, m);
              return;
            }
            const A = m.deltaMode === 1 ? 20 : 1;
            let O = i === qe.Vertical ? 0 : m.deltaX * A,
              me = i === qe.Horizontal ? 0 : m.deltaY * A;
            !ao() &&
              m.shiftKey &&
              i !== qe.Vertical &&
              ((O = m.deltaY * A), (me = 0)),
              o.translateBy(n, -(O / T) * l, -(me / T) * l, { internal: !0 });
            const he = ms(n.property("__zoom"));
            clearTimeout(e.panScrollTimeout),
              e.isPanScrolling || ((e.isPanScrolling = !0), d?.(m, he)),
              e.isPanScrolling &&
                (p?.(m, he),
                (e.panScrollTimeout = setTimeout(() => {
                  g?.(m, he), (e.isPanScrolling = !1);
                }, 150)));
          };
        }
        function Ui({
          noWheelClassName: e,
          preventScrolling: t,
          d3ZoomHandler: n,
        }) {
          return function (o, i) {
            if ((!t && o.type === "wheel" && !o.ctrlKey) || qr(o, e))
              return null;
            o.preventDefault(), n.call(this, o, i);
          };
        }
        function Qi({
          zoomPanValues: e,
          onDraggingChange: t,
          onPanZoomStart: n,
        }) {
          return (o) => {
            if (o.sourceEvent?.internal) return;
            const i = ms(o.transform);
            (e.mouseButton = o.sourceEvent?.button || 0),
              (e.isZoomingOrPanning = !0),
              (e.prevViewport = i),
              o.sourceEvent?.type === "mousedown" && t(!0),
              n && n?.(o.sourceEvent, i);
          };
        }
        function Ji({
          zoomPanValues: e,
          panOnDrag: t,
          onPaneContextMenu: n,
          onTransformChange: o,
          onPanZoom: i,
        }) {
          return (l) => {
            (e.usedRightMouseButton = !!(n && Ea(t, e.mouseButton ?? 0))),
              l.sourceEvent?.sync ||
                o([l.transform.x, l.transform.y, l.transform.k]),
              i &&
                !l.sourceEvent?.internal &&
                i?.(l.sourceEvent, ms(l.transform));
          };
        }
        function ea({
          zoomPanValues: e,
          panOnDrag: t,
          panOnScroll: n,
          onDraggingChange: o,
          onPanZoomEnd: i,
          onPaneContextMenu: l,
        }) {
          return (c) => {
            if (
              !c.sourceEvent?.internal &&
              ((e.isZoomingOrPanning = !1),
              l &&
                Ea(t, e.mouseButton ?? 0) &&
                !e.usedRightMouseButton &&
                c.sourceEvent &&
                l(c.sourceEvent),
              (e.usedRightMouseButton = !1),
              o(!1),
              i && Ha(e.prevViewport, c.transform))
            ) {
              const d = ms(c.transform);
              (e.prevViewport = d),
                clearTimeout(e.timerId),
                (e.timerId = setTimeout(
                  () => {
                    i?.(c.sourceEvent, d);
                  },
                  n ? 150 : 0,
                ));
            }
          };
        }
        function ta({
          zoomActivationKeyPressed: e,
          zoomOnScroll: t,
          zoomOnPinch: n,
          panOnDrag: o,
          panOnScroll: i,
          zoomOnDoubleClick: l,
          userSelectionActive: c,
          noWheelClassName: d,
          noPanClassName: p,
          lib: g,
        }) {
          return (m) => {
            const T = e || t,
              A = n && m.ctrlKey;
            if (
              m.button === 1 &&
              m.type === "mousedown" &&
              (qr(m, `${g}-flow__node`) || qr(m, `${g}-flow__edge`))
            )
              return !0;
            if (
              (!o && !T && !i && !l && !n) ||
              c ||
              (qr(m, d) && m.type === "wheel") ||
              (qr(m, p) &&
                (m.type !== "wheel" || (i && m.type === "wheel" && !e))) ||
              (!n && m.ctrlKey && m.type === "wheel")
            )
              return !1;
            if (!n && m.type === "touchstart" && m.touches?.length > 1)
              return m.preventDefault(), !1;
            if (
              (!T && !i && !A && m.type === "wheel") ||
              (!o && (m.type === "mousedown" || m.type === "touchstart")) ||
              (Array.isArray(o) &&
                !o.includes(m.button) &&
                m.type === "mousedown")
            )
              return !1;
            const O =
              (Array.isArray(o) && o.includes(m.button)) ||
              !m.button ||
              m.button <= 1;
            return (!m.ctrlKey || m.type === "wheel") && O;
          };
        }
        function Ca({
          domNode: e,
          minZoom: t,
          maxZoom: n,
          paneClickDistance: o,
          translateExtent: i,
          viewport: l,
          onPanZoom: c,
          onPanZoomStart: d,
          onPanZoomEnd: p,
          onDraggingChange: g,
        }) {
          const m = {
              isZoomingOrPanning: !1,
              usedRightMouseButton: !1,
              prevViewport: { x: 0, y: 0, zoom: 0 },
              mouseButton: 0,
              timerId: void 0,
              panScrollTimeout: void 0,
              isPanScrolling: !1,
            },
            T = e.getBoundingClientRect(),
            A = Fe()
              .clickDistance(!kn(o) || o < 0 ? 0 : o)
              .scaleExtent([t, n])
              .translateExtent(i),
            O = Gt(e).call(A);
          ge(
            { x: l.x, y: l.y, zoom: Mn(l.zoom, t, n) },
            [
              [0, 0],
              [T.width, T.height],
            ],
            i,
          );
          const me = O.on("wheel.zoom"),
            he = O.on("dblclick.zoom");
          A.wheelDelta(Sa);
          function Ie(Ae, Me) {
            return O
              ? new Promise((_) => {
                  A?.transform(
                    Gi(O, Me?.duration, () => _(!0)),
                    Ae,
                  );
                })
              : Promise.resolve(!1);
          }
          function le({
            noWheelClassName: Ae,
            noPanClassName: Me,
            onPaneContextMenu: _,
            userSelectionActive: re,
            panOnScroll: Z,
            panOnDrag: de,
            panOnScrollMode: xe,
            panOnScrollSpeed: se,
            preventScrolling: be,
            zoomOnPinch: Ge,
            zoomOnScroll: Qe,
            zoomOnDoubleClick: yt,
            zoomActivationKeyPressed: s,
            lib: a,
            onTransformChange: h,
          }) {
            re && !m.isZoomingOrPanning && Ne();
            const b =
              Z && !s && !re
                ? La({
                    zoomPanValues: m,
                    noWheelClassName: Ae,
                    d3Selection: O,
                    d3Zoom: A,
                    panOnScrollMode: xe,
                    panOnScrollSpeed: se,
                    zoomOnPinch: Ge,
                    onPanZoomStart: d,
                    onPanZoom: c,
                    onPanZoomEnd: p,
                  })
                : Ui({
                    noWheelClassName: Ae,
                    preventScrolling: be,
                    d3ZoomHandler: me,
                  });
            if ((O.on("wheel.zoom", b, { passive: !1 }), !re)) {
              const $ = Qi({
                zoomPanValues: m,
                onDraggingChange: g,
                onPanZoomStart: d,
              });
              A.on("start", $);
              const D = Ji({
                zoomPanValues: m,
                panOnDrag: de,
                onPaneContextMenu: !!_,
                onPanZoom: c,
                onTransformChange: h,
              });
              A.on("zoom", D);
              const te = ea({
                zoomPanValues: m,
                panOnDrag: de,
                panOnScroll: Z,
                onPaneContextMenu: _,
                onPanZoomEnd: p,
                onDraggingChange: g,
              });
              A.on("end", te);
            }
            const C = ta({
              zoomActivationKeyPressed: s,
              panOnDrag: de,
              zoomOnScroll: Qe,
              panOnScroll: Z,
              zoomOnDoubleClick: yt,
              zoomOnPinch: Ge,
              userSelectionActive: re,
              noPanClassName: Me,
              noWheelClassName: Ae,
              lib: a,
            });
            A.filter(C),
              yt ? O.on("dblclick.zoom", he) : O.on("dblclick.zoom", null);
          }
          function Ne() {
            A.on("zoom", null);
          }
          async function ge(Ae, Me, _) {
            const re = Zi(Ae),
              Z = A?.constrain()(re, Me, _);
            return Z && (await Ie(Z)), new Promise((de) => de(Z));
          }
          async function U(Ae, Me) {
            const _ = Zi(Ae);
            return await Ie(_, Me), new Promise((re) => re(_));
          }
          function ze(Ae) {
            if (O) {
              const Me = Zi(Ae),
                _ = O.property("__zoom");
              (_.k !== Ae.zoom || _.x !== Ae.x || _.y !== Ae.y) &&
                A?.transform(O, Me, null, { sync: !0 });
            }
          }
          function je() {
            const Ae = O ? Q(O.node()) : { x: 0, y: 0, k: 1 };
            return { x: Ae.x, y: Ae.y, zoom: Ae.k };
          }
          function ue(Ae, Me) {
            return O
              ? new Promise((_) => {
                  A?.scaleTo(
                    Gi(O, Me?.duration, () => _(!0)),
                    Ae,
                  );
                })
              : Promise.resolve(!1);
          }
          function ke(Ae, Me) {
            return O
              ? new Promise((_) => {
                  A?.scaleBy(
                    Gi(O, Me?.duration, () => _(!0)),
                    Ae,
                  );
                })
              : Promise.resolve(!1);
          }
          function Ce(Ae) {
            A?.scaleExtent(Ae);
          }
          function Pe(Ae) {
            A?.translateExtent(Ae);
          }
          function Ye(Ae) {
            const Me = !kn(Ae) || Ae < 0 ? 0 : Ae;
            A?.clickDistance(Me);
          }
          return {
            update: le,
            destroy: Ne,
            setViewport: U,
            setViewportConstrained: ge,
            getViewport: je,
            scaleTo: ue,
            scaleBy: ke,
            setScaleExtent: Ce,
            setTranslateExtent: Pe,
            syncViewport: ze,
            setClickDistance: Ye,
          };
        }
        var rr;
        (function (e) {
          (e.Line = "line"), (e.Handle = "handle");
        })(rr || (rr = {}));
        const ja = null,
          Ya = null;
        function Na({
          width: e,
          prevWidth: t,
          height: n,
          prevHeight: o,
          affectsX: i,
          affectsY: l,
        }) {
          const c = e - t,
            d = n - o,
            p = [c > 0 ? 1 : c < 0 ? -1 : 0, d > 0 ? 1 : d < 0 ? -1 : 0];
          return c && i && (p[0] = p[0] * -1), d && l && (p[1] = p[1] * -1), p;
        }
        function Aa(e) {
          const t = e.includes("right") || e.includes("left"),
            n = e.includes("bottom") || e.includes("top"),
            o = e.includes("left"),
            i = e.includes("top");
          return { isHorizontal: t, isVertical: n, affectsX: o, affectsY: i };
        }
        function Vn(e, t) {
          return Math.max(0, t - e);
        }
        function Fn(e, t) {
          return Math.max(0, e - t);
        }
        function ws(e, t, n) {
          return Math.max(0, t - e, e - n);
        }
        function Ma(e, t) {
          return e ? !t : t;
        }
        function Ra(e, t, n, o, i, l, c, d) {
          let { affectsX: p, affectsY: g } = t;
          const { isHorizontal: m, isVertical: T } = t,
            A = m && T,
            { xSnapped: O, ySnapped: me } = n,
            { minWidth: he, maxWidth: Ie, minHeight: le, maxHeight: Ne } = o,
            { x: ge, y: U, width: ze, height: je, aspectRatio: ue } = e;
          let ke = Math.floor(m ? O - e.pointerX : 0),
            Ce = Math.floor(T ? me - e.pointerY : 0);
          const Pe = ze + (p ? -ke : ke),
            Ye = je + (g ? -Ce : Ce),
            Ae = -l[0] * ze,
            Me = -l[1] * je;
          let _ = ws(Pe, he, Ie),
            re = ws(Ye, le, Ne);
          if (c) {
            let xe = 0,
              se = 0;
            p && ke < 0
              ? (xe = Vn(ge + ke + Ae, c[0][0]))
              : !p && ke > 0 && (xe = Fn(ge + Pe + Ae, c[1][0])),
              g && Ce < 0
                ? (se = Vn(U + Ce + Me, c[0][1]))
                : !g && Ce > 0 && (se = Fn(U + Ye + Me, c[1][1])),
              (_ = Math.max(_, xe)),
              (re = Math.max(re, se));
          }
          if (d) {
            let xe = 0,
              se = 0;
            p && ke > 0
              ? (xe = Fn(ge + ke, d[0][0]))
              : !p && ke < 0 && (xe = Vn(ge + Pe, d[1][0])),
              g && Ce > 0
                ? (se = Fn(U + Ce, d[0][1]))
                : !g && Ce < 0 && (se = Vn(U + Ye, d[1][1])),
              (_ = Math.max(_, xe)),
              (re = Math.max(re, se));
          }
          if (i) {
            if (m) {
              const xe = ws(Pe / ue, le, Ne) * ue;
              if (((_ = Math.max(_, xe)), c)) {
                let se = 0;
                (!p && !g) || (p && !g && A)
                  ? (se = Fn(U + Me + Pe / ue, c[1][1]) * ue)
                  : (se = Vn(U + Me + (p ? ke : -ke) / ue, c[0][1]) * ue),
                  (_ = Math.max(_, se));
              }
              if (d) {
                let se = 0;
                (!p && !g) || (p && !g && A)
                  ? (se = Vn(U + Pe / ue, d[1][1]) * ue)
                  : (se = Fn(U + (p ? ke : -ke) / ue, d[0][1]) * ue),
                  (_ = Math.max(_, se));
              }
            }
            if (T) {
              const xe = ws(Ye * ue, he, Ie) / ue;
              if (((re = Math.max(re, xe)), c)) {
                let se = 0;
                (!p && !g) || (g && !p && A)
                  ? (se = Fn(ge + Ye * ue + Ae, c[1][0]) / ue)
                  : (se = Vn(ge + (g ? Ce : -Ce) * ue + Ae, c[0][0]) / ue),
                  (re = Math.max(re, se));
              }
              if (d) {
                let se = 0;
                (!p && !g) || (g && !p && A)
                  ? (se = Vn(ge + Ye * ue, d[1][0]) / ue)
                  : (se = Fn(ge + (g ? Ce : -Ce) * ue, d[0][0]) / ue),
                  (re = Math.max(re, se));
              }
            }
          }
          (Ce = Ce + (Ce < 0 ? re : -re)),
            (ke = ke + (ke < 0 ? _ : -_)),
            i &&
              (A
                ? Pe > Ye * ue
                  ? (Ce = (Ma(p, g) ? -ke : ke) / ue)
                  : (ke = (Ma(p, g) ? -Ce : Ce) * ue)
                : m
                  ? ((Ce = ke / ue), (g = p))
                  : ((ke = Ce * ue), (p = g)));
          const Z = p ? ge + ke : ge,
            de = g ? U + Ce : U;
          return {
            width: ze + (p ? -ke : ke),
            height: je + (g ? -Ce : Ce),
            x: l[0] * ke * (p ? -1 : 1) + Z,
            y: l[1] * Ce * (g ? -1 : 1) + de,
          };
        }
        const $a = { width: 0, height: 0, x: 0, y: 0 },
          Va = { ...$a, pointerX: 0, pointerY: 0, aspectRatio: 1 };
        function br(e) {
          return [
            [0, 0],
            [e.measured.width, e.measured.height],
          ];
        }
        function Fa(e, t, n) {
          const o = t.position.x + e.position.x,
            i = t.position.y + e.position.y,
            l = e.measured.width ?? 0,
            c = e.measured.height ?? 0,
            d = n[0] * l,
            p = n[1] * c;
          return [
            [o - d, i - p],
            [o + l - d, i + c - p],
          ];
        }
        function na({
          domNode: e,
          nodeId: t,
          getStoreItems: n,
          onChange: o,
          onEnd: i,
        }) {
          const l = Gt(e);
          function c({
            controlPosition: p,
            boundaries: g,
            keepAspectRatio: m,
            onResizeStart: T,
            onResize: A,
            onResizeEnd: O,
            shouldResize: me,
          }) {
            let he = { ...$a },
              Ie = { ...Va };
            const le = Aa(p);
            let Ne,
              ge = null,
              U = [],
              ze,
              je,
              ue;
            const ke = Qr()
              .on("start", (Ce) => {
                const {
                  nodeLookup: Pe,
                  transform: Ye,
                  snapGrid: Ae,
                  snapToGrid: Me,
                  nodeOrigin: _,
                  paneDomNode: re,
                } = n();
                if (((Ne = Pe.get(t)), !Ne)) return;
                ge = re?.getBoundingClientRect() ?? null;
                const { xSnapped: Z, ySnapped: de } = ht(Ce.sourceEvent, {
                  transform: Ye,
                  snapGrid: Ae,
                  snapToGrid: Me,
                  containerBounds: ge,
                });
                (he = {
                  width: Ne.measured.width ?? 0,
                  height: Ne.measured.height ?? 0,
                  x: Ne.position.x ?? 0,
                  y: Ne.position.y ?? 0,
                }),
                  (Ie = {
                    ...he,
                    pointerX: Z,
                    pointerY: de,
                    aspectRatio: he.width / he.height,
                  }),
                  (ze = void 0),
                  Ne.parentId &&
                    (Ne.extent === "parent" || Ne.expandParent) &&
                    ((ze = Pe.get(Ne.parentId)),
                    (je = ze && Ne.extent === "parent" ? br(ze) : void 0)),
                  (U = []),
                  (ue = void 0);
                for (const [xe, se] of Pe)
                  if (
                    se.parentId === t &&
                    (U.push({
                      id: xe,
                      position: { ...se.position },
                      extent: se.extent,
                    }),
                    se.extent === "parent" || se.expandParent)
                  ) {
                    const be = Fa(se, Ne, se.origin ?? _);
                    ue
                      ? (ue = [
                          [
                            Math.min(be[0][0], ue[0][0]),
                            Math.min(be[0][1], ue[0][1]),
                          ],
                          [
                            Math.max(be[1][0], ue[1][0]),
                            Math.max(be[1][1], ue[1][1]),
                          ],
                        ])
                      : (ue = be);
                  }
                T?.(Ce, { ...he });
              })
              .on("drag", (Ce) => {
                const {
                    transform: Pe,
                    snapGrid: Ye,
                    snapToGrid: Ae,
                    nodeOrigin: Me,
                  } = n(),
                  _ = ht(Ce.sourceEvent, {
                    transform: Pe,
                    snapGrid: Ye,
                    snapToGrid: Ae,
                    containerBounds: ge,
                  }),
                  re = [];
                if (!Ne) return;
                const { x: Z, y: de, width: xe, height: se } = he,
                  be = {},
                  Ge = Ne.origin ?? Me,
                  {
                    width: Qe,
                    height: yt,
                    x: s,
                    y: a,
                  } = Ra(Ie, le, _, g, m, Ge, je, ue),
                  h = Qe !== xe,
                  w = yt !== se,
                  b = s !== Z && h,
                  C = a !== de && w;
                if (!b && !C && !h && !w) return;
                if (
                  (b || C || Ge[0] === 1 || Ge[1] === 1) &&
                  ((be.x = b ? s : he.x),
                  (be.y = C ? a : he.y),
                  (he.x = be.x),
                  (he.y = be.y),
                  U.length > 0)
                ) {
                  const ee = s - Z,
                    pe = a - de;
                  for (const j of U)
                    (j.position = {
                      x: j.position.x - ee + Ge[0] * (Qe - xe),
                      y: j.position.y - pe + Ge[1] * (yt - se),
                    }),
                      re.push(j);
                }
                if (
                  ((h || w) &&
                    ((be.width = h ? Qe : he.width),
                    (be.height = w ? yt : he.height),
                    (he.width = be.width),
                    (he.height = be.height)),
                  ze && Ne.expandParent)
                ) {
                  const ee = Ge[0] * (be.width ?? 0);
                  be.x &&
                    be.x < ee &&
                    ((he.x = ee), (Ie.x = Ie.x - (be.x - ee)));
                  const pe = Ge[1] * (be.height ?? 0);
                  be.y &&
                    be.y < pe &&
                    ((he.y = pe), (Ie.y = Ie.y - (be.y - pe)));
                }
                const $ = Na({
                    width: he.width,
                    prevWidth: xe,
                    height: he.height,
                    prevHeight: se,
                    affectsX: le.affectsX,
                    affectsY: le.affectsY,
                  }),
                  D = { ...he, direction: $ };
                me?.(Ce, D) !== !1 && (A?.(Ce, D), o(be, re));
              })
              .on("end", (Ce) => {
                O?.(Ce, { ...he }), i?.();
              });
            l.call(ke);
          }
          function d() {
            l.on(".drag", null);
          }
          return { update: c, destroy: d };
        }
      },
      16303: (xs, Dn, bt) => {
        "use strict";
        bt.d(Dn, { A: () => yt });
        const N = (s) => {
            if (
              typeof s > "u" ||
              s === null ||
              typeof s == "bigint" ||
              Number.isNaN(s) ||
              s === 1 / 0 ||
              s === -1 / 0
            )
              return;
            if (["string", "number", "boolean"].includes(typeof s)) return s;
            if (Array.isArray(s)) return s.map(N).filter((h) => typeof h < "u");
            const a = {};
            for (const [h, w] of Object.entries(s)) {
              const b = N(w);
              typeof b < "u" && (a[h] = b);
            }
            return a;
          },
          Ee = (s, a, h = !1) => {
            if (!Array.isArray(s) || !Array.isArray(a))
              throw new Error("Both arguments should be arrays.");
            const w = s.length,
              b = a.length,
              C = w + b,
              $ = new Array(C);
            if (h) {
              for (let D = 0; D < b; D++) $[D] = a[b - D - 1];
              for (let D = 0; D < w; D++) $[D + b] = s[D];
              return $;
            }
            for (let D = 0; D < w; D++) $[D] = s[D];
            for (let D = 0; D < b; D++) $[D + w] = a[D];
            return $;
          },
          H = (s, a = new Map()) => {
            if (typeof s != "object" || s === null) return !1;
            if (a.has(s)) return !0;
            if ((a.set(s, !0), Array.isArray(s))) {
              for (let h = 0; h < s.length; h++) if (H(s[h], a)) return !0;
              return !1;
            }
            for (const h in s) if (H(s[h], a)) return !0;
            return !1;
          },
          L = (s, a, h, w = 1 / 0, b) => {
            if (!s || typeof s != "object") {
              let $;
              if (
                (!Number.isNaN(s) &&
                  s !== 1 / 0 &&
                  s !== -1 / 0 &&
                  typeof s != "bigint" &&
                  ($ = JSON.stringify(s, a, h)),
                $ === void 0)
              )
                switch (b) {
                  case se.throw:
                    throw new Error(
                      `Value is not valid in JSON, got ${String(s)}`,
                    );
                  case se.stringify:
                    return On(s);
                  default:
                    throw new Error(
                      "Should not reach here, please report this bug.",
                    );
                }
              return $;
            }
            const C =
              w < 1
                ? '"..."'
                : Array.isArray(s)
                  ? `[${s.map(($) => L($, a, h, w - 1, b)).join(",")}]`
                  : `{${Object.keys(s)
                      .map(($) => `"${$}": ${L(s[$], a, h, w - 1, b)}`)
                      .join(", ")}}`;
            return JSON.stringify(JSON.parse(C), a, h);
          },
          On = (s) =>
            s === void 0
              ? "undefined"
              : s === 1 / 0
                ? "Infinity"
                : s === -1 / 0
                  ? "-Infinity"
                  : Number.isNaN(s)
                    ? "NaN"
                    : typeof s == "bigint"
                      ? `${s}n`
                      : String(s),
          pt = (s, a = 1 / 0, h = !1, w = se.stringify) =>
            s === null
              ? "null"
              : Array.isArray(s) || typeof s == "object"
                ? L(s, void 0, h ? 1 : void 0, a, w)
                : L(s, void 0, void 0, void 0, w),
          $t = (s) =>
            typeof s == "boolean"
              ? 0
              : typeof s == "number"
                ? 1
                : typeof s == "string"
                  ? 2
                  : s === null
                    ? 3
                    : Array.isArray(s)
                      ? 4
                      : typeof s == "object"
                        ? 5
                        : typeof s == "symbol"
                          ? 6
                          : typeof s == "function"
                            ? 7
                            : typeof s == "bigint"
                              ? 8
                              : -1,
          tn = (s, a, h) => {
            const w = h.keyOrdersMap?.get(s),
              b = h.keyOrdersMap?.get(a);
            if (w !== void 0 && b !== void 0) return w - b;
            const C = $t(s),
              $ = $t(a);
            if (C !== $) return C - $;
            if (
              (s === null && a === null) ||
              (Array.isArray(s) && Array.isArray(a)) ||
              (C === 5 && $ === 5)
            )
              return 0;
            switch (typeof s) {
              case "number":
                return (Number.isNaN(s) && Number.isNaN(a)) ||
                  (s === 1 / 0 && a === 1 / 0) ||
                  (s === -1 / 0 && a === -1 / 0)
                  ? 0
                  : s - a;
              case "string":
                return (
                  h.ignoreCase &&
                    ((s = s.toLowerCase()), (a = a.toLowerCase())),
                  s < a ? -1 : s > a ? 1 : 0
                );
              case "boolean":
                return +s - +a;
              case "symbol":
              case "function":
                return String(s).localeCompare(String(a));
            }
            if (typeof s == "bigint" && typeof a == "bigint") {
              const D = BigInt(s) - BigInt(a);
              return D < 0 ? -1 : D > 0 ? 1 : 0;
            }
            return String(s).localeCompare(String(a));
          },
          Ct = (s) =>
            Array.isArray(s) ? "array" : s === null ? "null" : typeof s,
          Ht = (s, a, h, w, b, C, $, D) => {
            const te = { ignoreCase: D.ignoreCase },
              ee = pt(b, D.maxDepth, !0, D.undefinedBehavior).split(`
`),
              pe = pt(C, D.maxDepth, !0, D.undefinedBehavior).split(`
`);
            if (tn(b, C, te) !== 0)
              if (D.showModifications) {
                const j = Math.max(ee.length, pe.length);
                for (let M = ee.length; M < j; M++) ee.push("");
                for (let M = pe.length; M < j; M++) pe.push("");
                s.push({
                  level: $,
                  type: "modify",
                  text: h ? `"${h}": ${ee[0]}` : ee[0],
                });
                for (let M = 1; M < ee.length; M++)
                  s.push({
                    level: $ + (ee[M].match(/^\s+/)?.[0]?.length || 0),
                    type: "modify",
                    text: ee[M].replace(/^\s+/, "").replace(/,$/g, ""),
                  });
                for (let M = ee.length; M < j; M++)
                  s.push({ level: $, type: "equal", text: "" });
                a.push({
                  level: $,
                  type: "modify",
                  text: w ? `"${w}": ${pe[0]}` : pe[0],
                });
                for (let M = 1; M < pe.length; M++)
                  a.push({
                    level: $ + (pe[M].match(/^\s+/)?.[0]?.length || 0),
                    type: "modify",
                    text: pe[M].replace(/^\s+/, "").replace(/,$/g, ""),
                  });
                for (let M = pe.length; M < j; M++)
                  a.push({ level: $, type: "equal", text: "" });
              } else {
                s.push({
                  level: $,
                  type: "remove",
                  text: h ? `"${h}": ${ee[0]}` : ee[0],
                });
                for (let j = 1; j < ee.length; j++)
                  s.push({
                    level: $ + (ee[j].match(/^\s+/)?.[0]?.length || 0),
                    type: "remove",
                    text: ee[j].replace(/^\s+/, "").replace(/,$/g, ""),
                  });
                for (let j = 0; j < pe.length; j++)
                  s.push({ level: $, type: "equal", text: "" });
                for (let j = 0; j < ee.length; j++)
                  a.push({ level: $, type: "equal", text: "" });
                a.push({
                  level: $,
                  type: "add",
                  text: w ? `"${w}": ${pe[0]}` : pe[0],
                });
                for (let j = 1; j < pe.length; j++)
                  a.push({
                    level: $ + (pe[j].match(/^\s+/)?.[0]?.length || 0),
                    type: "add",
                    text: pe[j].replace(/^\s+/, "").replace(/,$/g, ""),
                  });
              }
            else {
              const j = Math.max(ee.length, pe.length);
              for (let M = ee.length; M < j; M++) ee.push("");
              for (let M = pe.length; M < j; M++) pe.push("");
              s.push({
                level: $,
                type: "equal",
                text: h ? `"${h}": ${ee[0]}` : ee[0],
              });
              for (let M = 1; M < ee.length; M++)
                s.push({
                  level: $ + (ee[M].match(/^\s+/)?.[0]?.length || 0),
                  type: "equal",
                  text: ee[M].replace(/^\s+/, "").replace(/,$/g, ""),
                });
              a.push({
                level: $,
                type: "equal",
                text: w ? `"${w}": ${pe[0]}` : pe[0],
              });
              for (let M = 1; M < pe.length; M++)
                a.push({
                  level: $ + (pe[M].match(/^\s+/)?.[0]?.length || 0),
                  type: "equal",
                  text: pe[M].replace(/^\s+/, "").replace(/,$/g, ""),
                });
            }
          },
          rn = (s, a) =>
            s.sort((h, w) => tn(h, w, { ignoreCase: a.ignoreCaseForKey })),
          Ft = (s, a, h = 1, w, b) => {
            if (h > (w.maxDepth || 1 / 0))
              return [
                [{ level: h, type: "equal", text: "..." }],
                [{ level: h, type: "equal", text: "..." }],
              ];
            let C = [],
              $ = [];
            if ((s === null && a === null) || (s === void 0 && a === void 0))
              return [C, $];
            if (s == null) {
              const j = L(a, void 0, 1, void 0, w.undefinedBehavior).split(`
`);
              for (let M = 0; M < j.length; M++)
                C.push({ level: h, type: "equal", text: "" }),
                  $.push({
                    level: h + (j[M].match(/^\s+/)?.[0]?.length || 0),
                    type: "add",
                    text: j[M].replace(/^\s+/, "").replace(/,$/g, ""),
                  });
              return [C, $];
            } else if (a == null) {
              const j = L(s, void 0, 1, void 0, w.undefinedBehavior).split(`
`);
              for (let M = 0; M < j.length; M++)
                C.push({
                  level: h + (j[M].match(/^\s+/)?.[0]?.length || 0),
                  type: "remove",
                  text: j[M].replace(/^\s+/, "").replace(/,$/g, ""),
                }),
                  $.push({ level: h, type: "equal", text: "" });
              return [C, $];
            }
            const D = Object.keys(s),
              te = Object.keys(a),
              ee = new Map();
            if (!w.preserveKeyOrder) rn(D, w), rn(te, w);
            else if (w.preserveKeyOrder === "before") {
              for (let j = 0; j < D.length; j++) ee.set(D[j], j);
              for (let j = 0; j < te.length; j++)
                ee.has(te[j]) || ee.set(te[j], D.length + j);
              te.sort((j, M) => ee.get(j) - ee.get(M));
            } else if (w.preserveKeyOrder === "after") {
              for (let j = 0; j < te.length; j++) ee.set(te[j], j);
              for (let j = 0; j < D.length; j++)
                ee.has(D[j]) || ee.set(D[j], te.length + j);
              D.sort((j, M) => ee.get(j) - ee.get(M));
            }
            const pe = { ignoreCase: w.ignoreCaseForKey, keyOrdersMap: ee };
            for (; D.length || te.length; ) {
              const j = D[0],
                M = te[0],
                oe = tn(j, M, pe);
              if (oe === 0)
                if (Ct(s[j]) !== Ct(a[M])) Ht(C, $, j, M, s[j], a[M], h, w);
                else if (Array.isArray(s[j])) {
                  const Se = [...s[j]],
                    Be = [...a[M]],
                    [xt, yn] = b(Se, Be, j, M, h, w, [], []);
                  (C = Ee(C, xt)), ($ = Ee($, yn));
                } else if (s[j] === null)
                  C.push({ level: h, type: "equal", text: `"${j}": null` }),
                    $.push({ level: h, type: "equal", text: `"${M}": null` });
                else if (typeof s[j] == "object") {
                  const Se = Ft(s[j], a[M], h + 1, w, b);
                  C.push({ level: h, type: "equal", text: `"${j}": {` }),
                    (C = Ee(C, Se[0])),
                    C.push({ level: h, type: "equal", text: "}" }),
                    $.push({ level: h, type: "equal", text: `"${M}": {` }),
                    ($ = Ee($, Se[1])),
                    $.push({ level: h, type: "equal", text: "}" });
                } else Ht(C, $, j, M, s[j], a[M], h, w);
              else if (D.length && te.length)
                if (oe < 0) {
                  const Se = L(
                    s[j],
                    void 0,
                    1,
                    void 0,
                    w.undefinedBehavior,
                  ).split(`
`);
                  for (let Be = 0; Be < Se.length; Be++) {
                    const xt = Se[Be].replace(/^\s+/, "").replace(/,$/g, "");
                    C.push({
                      level: h + (Se[Be].match(/^\s+/)?.[0]?.length || 0),
                      type: "remove",
                      text: Be ? xt : `"${j}": ${xt}`,
                    }),
                      $.push({ level: h, type: "equal", text: "" });
                  }
                } else {
                  const Se = L(
                    a[M],
                    void 0,
                    1,
                    void 0,
                    w.undefinedBehavior,
                  ).split(`
`);
                  for (let Be = 0; Be < Se.length; Be++) {
                    const xt = Se[Be].replace(/^\s+/, "").replace(/,$/g, "");
                    C.push({ level: h, type: "equal", text: "" }),
                      $.push({
                        level: h + (Se[Be].match(/^\s+/)?.[0]?.length || 0),
                        type: "add",
                        text: Be ? xt : `"${M}": ${xt}`,
                      });
                  }
                }
              else if (D.length) {
                const Se = L(
                  s[j],
                  void 0,
                  1,
                  void 0,
                  w.undefinedBehavior,
                ).split(`
`);
                for (let Be = 0; Be < Se.length; Be++) {
                  const xt = Se[Be].replace(/^\s+/, "").replace(/,$/g, "");
                  C.push({
                    level: h + (Se[Be].match(/^\s+/)?.[0]?.length || 0),
                    type: "remove",
                    text: Be ? xt : `"${j}": ${xt}`,
                  }),
                    $.push({ level: h, type: "equal", text: "" });
                }
              } else if (te.length) {
                const Se = L(
                  a[M],
                  void 0,
                  1,
                  void 0,
                  w.undefinedBehavior,
                ).split(`
`);
                for (let Be = 0; Be < Se.length; Be++) {
                  const xt = Se[Be].replace(/^\s+/, "").replace(/,$/g, "");
                  C.push({ level: h, type: "equal", text: "" }),
                    $.push({
                      level: h + (Se[Be].match(/^\s+/)?.[0]?.length || 0),
                      type: "add",
                      text: Be ? xt : `"${M}": ${xt}`,
                    });
                }
              }
              j
                ? M
                  ? oe === 0
                    ? (D.shift(), te.shift())
                    : oe < 0
                      ? D.shift()
                      : te.shift()
                  : D.shift()
                : te.shift();
            }
            if (C.length !== $.length)
              throw new Error(
                "Diff error: length not match for left & right, please report a bug with your data.",
              );
            return [C, $];
          };
        function Bn() {
          (this.__data__ = []), (this.size = 0);
        }
        var zn = Bn;
        function rt(s, a) {
          return s === a || (s !== s && a !== a);
        }
        var wn = rt,
          Xn = wn;
        function on(s, a) {
          for (var h = s.length; h--; ) if (Xn(s[h][0], a)) return h;
          return -1;
        }
        var xn = on,
          vn = xn,
          Re = Array.prototype,
          ot = Re.splice;
        function Wn(s) {
          var a = this.__data__,
            h = vn(a, s);
          if (h < 0) return !1;
          var w = a.length - 1;
          return h == w ? a.pop() : ot.call(a, h, 1), --this.size, !0;
        }
        var Hn = Wn,
          _n = xn;
        function bn(s) {
          var a = this.__data__,
            h = _n(a, s);
          return h < 0 ? void 0 : a[h][1];
        }
        var G = bn,
          q = xn;
        function K(s) {
          return q(this.__data__, s) > -1;
        }
        var k = K,
          B = xn;
        function ne(s, a) {
          var h = this.__data__,
            w = B(h, s);
          return w < 0 ? (++this.size, h.push([s, a])) : (h[w][1] = a), this;
        }
        var ae = ne,
          Oe = zn,
          we = Hn,
          ye = G,
          ve = k,
          tt = ae;
        function it(s) {
          var a = -1,
            h = s == null ? 0 : s.length;
          for (this.clear(); ++a < h; ) {
            var w = s[a];
            this.set(w[0], w[1]);
          }
        }
        (it.prototype.clear = Oe),
          (it.prototype.delete = we),
          (it.prototype.get = ye),
          (it.prototype.has = ve),
          (it.prototype.set = tt);
        var Et = it,
          mt = Et;
        function qt() {
          (this.__data__ = new mt()), (this.size = 0);
        }
        var Xt = qt;
        function ft(s) {
          var a = this.__data__,
            h = a.delete(s);
          return (this.size = a.size), h;
        }
        var vt = ft;
        function sn(s) {
          return this.__data__.get(s);
        }
        var En = sn;
        function at(s) {
          return this.__data__.has(s);
        }
        var Rt = at,
          Pt =
            typeof globalThis < "u"
              ? globalThis
              : typeof window < "u"
                ? window
                : typeof bt.g < "u"
                  ? bt.g
                  : typeof self < "u"
                    ? self
                    : {},
          Bt = typeof Pt == "object" && Pt && Pt.Object === Object && Pt,
          Wt = Bt,
          It = Wt,
          Lt =
            typeof self == "object" && self && self.Object === Object && self,
          Xr = It || Lt || Function("return this")(),
          Yt = Xr,
          Er = Yt,
          an = Er.Symbol,
          cn = an,
          ir = cn,
          Ve = Object.prototype,
          Je = Ve.hasOwnProperty,
          He = Ve.toString,
          Ue = ir ? ir.toStringTag : void 0;
        function Nt(s) {
          var a = Je.call(s, Ue),
            h = s[Ue];
          try {
            s[Ue] = void 0;
            var w = !0;
          } catch {}
          var b = He.call(s);
          return w && (a ? (s[Ue] = h) : delete s[Ue]), b;
        }
        var Tt = Nt,
          Vt = Object.prototype,
          Kt = Vt.toString;
        function Qt(s) {
          return Kt.call(s);
        }
        var fn = Qt,
          ln = cn,
          Jt = Tt,
          Sr = fn,
          Wr = "[object Null]",
          Cr = "[object Undefined]",
          Yn = ln ? ln.toStringTag : void 0;
        function ar(s) {
          return s == null
            ? s === void 0
              ? Cr
              : Wr
            : Yn && Yn in Object(s)
              ? Jt(s)
              : Sr(s);
        }
        var Ln = ar;
        function vs(s) {
          var a = typeof s;
          return s != null && (a == "object" || a == "function");
        }
        var yo = vs,
          _s = Ln,
          bs = yo,
          Yr = "[object AsyncFunction]",
          Es = "[object Function]",
          Ss = "[object GeneratorFunction]",
          Kr = "[object Proxy]";
        function mo(s) {
          if (!bs(s)) return !1;
          var a = _s(s);
          return a == Es || a == Ss || a == Yr || a == Kr;
        }
        var wo = mo,
          xo = Yt,
          Zr = xo["__core-js_shared__"],
          vo = Zr,
          Kn = vo,
          _o = (function () {
            var s = /[^.]+$/.exec((Kn && Kn.keys && Kn.keys.IE_PROTO) || "");
            return s ? "Symbol(src)_1." + s : "";
          })();
        function Cs(s) {
          return !!_o && _o in s;
        }
        var Ns = Cs,
          cr = Function.prototype,
          As = cr.toString;
        function Ms(s) {
          if (s != null) {
            try {
              return As.call(s);
            } catch {}
            try {
              return s + "";
            } catch {}
          }
          return "";
        }
        var bo = Ms,
          $s = wo,
          Nr = Ns,
          Eo = yo,
          Is = bo,
          ks = /[\\^$.*+?()[\]{}|]/g,
          Ps = /^\[object .+?Constructor\]$/,
          Gr = Function.prototype,
          Ts = Object.prototype,
          So = Gr.toString,
          Ds = Ts.hasOwnProperty,
          Os = RegExp(
            "^" +
              So.call(Ds)
                .replace(ks, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          );
        function Co(s) {
          if (!Eo(s) || Nr(s)) return !1;
          var a = $s(s) ? Os : Ps;
          return a.test(Is(s));
        }
        var Zt = Co;
        function No(s, a) {
          return s?.[a];
        }
        var Bs = No,
          lr = Zt,
          Gt = Bs;
        function Ao(s, a) {
          var h = Gt(s, a);
          return lr(h) ? h : void 0;
        }
        var zt = Ao,
          zs = zt,
          ur = Yt,
          Ur = zs(ur, "Map"),
          hn = Ur,
          Mo = zt,
          $o = Mo(Object, "create"),
          Sn = $o,
          Ar = Sn;
        function Io() {
          (this.__data__ = Ar ? Ar(null) : {}), (this.size = 0);
        }
        var Hs = Io;
        function Mr(s) {
          var a = this.has(s) && delete this.__data__[s];
          return (this.size -= a ? 1 : 0), a;
        }
        var ko = Mr,
          Qr = Sn,
          Po = "__lodash_hash_undefined__",
          To = Object.prototype,
          Do = To.hasOwnProperty;
        function Oo(s) {
          var a = this.__data__;
          if (Qr) {
            var h = a[s];
            return h === Po ? void 0 : h;
          }
          return Do.call(a, s) ? a[s] : void 0;
        }
        var Bo = Oo,
          jn = Sn,
          Zn = Object.prototype,
          dr = Zn.hasOwnProperty;
        function Jr(s) {
          var a = this.__data__;
          return jn ? a[s] !== void 0 : dr.call(a, s);
        }
        var fr = Jr,
          hr = Sn,
          pr = "__lodash_hash_undefined__";
        function Cn(s, a) {
          var h = this.__data__;
          return (
            (this.size += this.has(s) ? 0 : 1),
            (h[s] = hr && a === void 0 ? pr : a),
            this
          );
        }
        var $r = Cn,
          Gn = Hs,
          eo = ko,
          Ir = Bo,
          Ls = fr,
          kr = $r;
        function Nn(s) {
          var a = -1,
            h = s == null ? 0 : s.length;
          for (this.clear(); ++a < h; ) {
            var w = s[a];
            this.set(w[0], w[1]);
          }
        }
        (Nn.prototype.clear = Gn),
          (Nn.prototype.delete = eo),
          (Nn.prototype.get = Ir),
          (Nn.prototype.has = Ls),
          (Nn.prototype.set = kr);
        var zo = Nn,
          to = zo,
          js = Et,
          Rs = hn;
        function Pr() {
          (this.size = 0),
            (this.__data__ = {
              hash: new to(),
              map: new (Rs || js)(),
              string: new to(),
            });
        }
        var Ho = Pr;
        function Vs(s) {
          var a = typeof s;
          return a == "string" ||
            a == "number" ||
            a == "symbol" ||
            a == "boolean"
            ? s !== "__proto__"
            : s === null;
        }
        var Fs = Vs,
          Lo = Fs;
        function jo(s, a) {
          var h = s.__data__;
          return Lo(a) ? h[typeof a == "string" ? "string" : "hash"] : h.map;
        }
        var Un = jo,
          gr = Un;
        function Ro(s) {
          var a = gr(this, s).delete(s);
          return (this.size -= a ? 1 : 0), a;
        }
        var no = Ro,
          Tr = Un;
        function Dr(s) {
          return Tr(this, s).get(s);
        }
        var Or = Dr,
          un = Un;
        function en(s) {
          return un(this, s).has(s);
        }
        var qs = en,
          yr = Un;
        function Xs(s, a) {
          var h = yr(this, s),
            w = h.size;
          return h.set(s, a), (this.size += h.size == w ? 0 : 1), this;
        }
        var An = Xs,
          Vo = Ho,
          Br = no,
          Fo = Or,
          zr = qs,
          Ws = An;
        function Qn(s) {
          var a = -1,
            h = s == null ? 0 : s.length;
          for (this.clear(); ++a < h; ) {
            var w = s[a];
            this.set(w[0], w[1]);
          }
        }
        (Qn.prototype.clear = Vo),
          (Qn.prototype.delete = Br),
          (Qn.prototype.get = Fo),
          (Qn.prototype.has = zr),
          (Qn.prototype.set = Ws);
        var ro = Qn,
          ra = Et,
          Ys = hn,
          oa = ro,
          Ks = 200;
        function Zs(s, a) {
          var h = this.__data__;
          if (h instanceof ra) {
            var w = h.__data__;
            if (!Ys || w.length < Ks - 1)
              return w.push([s, a]), (this.size = ++h.size), this;
            h = this.__data__ = new oa(w);
          }
          return h.set(s, a), (this.size = h.size), this;
        }
        var qo = Zs,
          Xo = Et,
          Gs = Xt,
          Us = vt,
          Qs = En,
          Js = Rt,
          ei = qo;
        function mr(s) {
          var a = (this.__data__ = new Xo(s));
          this.size = a.size;
        }
        (mr.prototype.clear = Gs),
          (mr.prototype.delete = Us),
          (mr.prototype.get = Qs),
          (mr.prototype.has = Js),
          (mr.prototype.set = ei);
        var sa = mr,
          ti = "__lodash_hash_undefined__";
        function ni(s) {
          return this.__data__.set(s, ti), this;
        }
        var ia = ni;
        function aa(s) {
          return this.__data__.has(s);
        }
        var ca = aa,
          la = ro,
          ri = ia,
          oi = ca;
        function nn(s) {
          var a = -1,
            h = s == null ? 0 : s.length;
          for (this.__data__ = new la(); ++a < h; ) this.add(s[a]);
        }
        (nn.prototype.add = nn.prototype.push = ri), (nn.prototype.has = oi);
        var si = nn;
        function ii(s, a) {
          for (var h = -1, w = s == null ? 0 : s.length; ++h < w; )
            if (a(s[h], h, s)) return !0;
          return !1;
        }
        var Wo = ii;
        function ua(s, a) {
          return s.has(a);
        }
        var ai = ua,
          ci = si,
          li = Wo,
          ui = ai,
          di = 1,
          Hr = 2;
        function fi(s, a, h, w, b, C) {
          var $ = h & di,
            D = s.length,
            te = a.length;
          if (D != te && !($ && te > D)) return !1;
          var ee = C.get(s),
            pe = C.get(a);
          if (ee && pe) return ee == a && pe == s;
          var j = -1,
            M = !0,
            oe = h & Hr ? new ci() : void 0;
          for (C.set(s, a), C.set(a, s); ++j < D; ) {
            var Se = s[j],
              Be = a[j];
            if (w) var xt = $ ? w(Be, Se, j, a, s, C) : w(Se, Be, j, s, a, C);
            if (xt !== void 0) {
              if (xt) continue;
              M = !1;
              break;
            }
            if (oe) {
              if (
                !li(a, function (yn, qn) {
                  if (!ui(oe, qn) && (Se === yn || b(Se, yn, h, w, C)))
                    return oe.push(qn);
                })
              ) {
                M = !1;
                break;
              }
            } else if (!(Se === Be || b(Se, Be, h, w, C))) {
              M = !1;
              break;
            }
          }
          return C.delete(s), C.delete(a), M;
        }
        var oo = fi,
          da = Yt,
          hi = da.Uint8Array,
          pi = hi;
        function gi(s) {
          var a = -1,
            h = Array(s.size);
          return (
            s.forEach(function (w, b) {
              h[++a] = [b, w];
            }),
            h
          );
        }
        var so = gi;
        function yi(s) {
          var a = -1,
            h = Array(s.size);
          return (
            s.forEach(function (w) {
              h[++a] = w;
            }),
            h
          );
        }
        var mi = yi,
          Yo = cn,
          Ko = pi,
          Zo = wn,
          wi = oo,
          xi = so,
          vi = mi,
          Go = 1,
          fa = 2,
          _i = "[object Boolean]",
          Uo = "[object Date]",
          ha = "[object Error]",
          bi = "[object Map]",
          Ei = "[object Number]",
          Si = "[object RegExp]",
          Ci = "[object Set]",
          Ni = "[object String]",
          pa = "[object Symbol]",
          r = "[object ArrayBuffer]",
          u = "[object DataView]",
          f = Yo ? Yo.prototype : void 0,
          y = f ? f.valueOf : void 0;
        function E(s, a, h, w, b, C, $) {
          switch (h) {
            case u:
              if (s.byteLength != a.byteLength || s.byteOffset != a.byteOffset)
                return !1;
              (s = s.buffer), (a = a.buffer);
            case r:
              return !(
                s.byteLength != a.byteLength || !C(new Ko(s), new Ko(a))
              );
            case _i:
            case Uo:
            case Ei:
              return Zo(+s, +a);
            case ha:
              return s.name == a.name && s.message == a.message;
            case Si:
            case Ni:
              return s == a + "";
            case bi:
              var D = xi;
            case Ci:
              var te = w & Go;
              if ((D || (D = vi), s.size != a.size && !te)) return !1;
              var ee = $.get(s);
              if (ee) return ee == a;
              (w |= fa), $.set(s, a);
              var pe = wi(D(s), D(a), w, b, C, $);
              return $.delete(s), pe;
            case pa:
              if (y) return y.call(s) == y.call(a);
          }
          return !1;
        }
        var x = E;
        function z(s, a) {
          for (var h = -1, w = a.length, b = s.length; ++h < w; )
            s[b + h] = a[h];
          return s;
        }
        var R = z,
          X = Array.isArray,
          V = X,
          W = R,
          v = V;
        function S(s, a, h) {
          var w = a(s);
          return v(s) ? w : W(w, h(s));
        }
        var P = S;
        function I(s, a) {
          for (
            var h = -1, w = s == null ? 0 : s.length, b = 0, C = [];
            ++h < w;
          ) {
            var $ = s[h];
            a($, h, s) && (C[b++] = $);
          }
          return C;
        }
        var F = I;
        function Q() {
          return [];
        }
        var J = Q,
          ie = F,
          Y = J,
          ce = Object.prototype,
          fe = ce.propertyIsEnumerable,
          Te = Object.getOwnPropertySymbols,
          Le = Te
            ? function (s) {
                return s == null
                  ? []
                  : ((s = Object(s)),
                    ie(Te(s), function (a) {
                      return fe.call(s, a);
                    }));
              }
            : Y,
          Ke = Le;
        function Fe(s, a) {
          for (var h = -1, w = Array(s); ++h < s; ) w[h] = a(h);
          return w;
        }
        var De = Fe;
        function ct(s) {
          return s != null && typeof s == "object";
        }
        var dt = ct,
          st = Ln,
          qe = dt,
          We = "[object Arguments]";
        function Xe(s) {
          return qe(s) && st(s) == We;
        }
        var et = Xe,
          $e = et,
          _e = dt,
          lt = Object.prototype,
          ut = lt.hasOwnProperty,
          gt = lt.propertyIsEnumerable,
          St = $e(
            (function () {
              return arguments;
            })(),
          )
            ? $e
            : function (s) {
                return _e(s) && ut.call(s, "callee") && !gt.call(s, "callee");
              },
          _t = St,
          wt = { exports: {} };
        function At() {
          return !1;
        }
        var Dt = At;
        (function (s, a) {
          var h = Yt,
            w = Dt,
            b = a && !a.nodeType && a,
            C = b && !0 && s && !s.nodeType && s,
            $ = C && C.exports === b,
            D = $ ? h.Buffer : void 0,
            te = D ? D.isBuffer : void 0,
            ee = te || w;
          s.exports = ee;
        })(wt, wt.exports);
        var Ze = 9007199254740991,
          kt = /^(?:0|[1-9]\d*)$/;
        function Ut(s, a) {
          var h = typeof s;
          return (
            (a = a ?? Ze),
            !!a &&
              (h == "number" || (h != "symbol" && kt.test(s))) &&
              s > -1 &&
              s % 1 == 0 &&
              s < a
          );
        }
        var Ot = Ut,
          nt = 9007199254740991;
        function Mt(s) {
          return typeof s == "number" && s > -1 && s % 1 == 0 && s <= nt;
        }
        var jt = Mt,
          dn = Ln,
          wr = jt,
          io = dt,
          Mn = "[object Arguments]",
          pn = "[object Array]",
          Jn = "[object Boolean]",
          Lr = "[object Date]",
          er = "[object Error]",
          $n = "[object Function]",
          xr = "[object Map]",
          In = "[object Number]",
          gn = "[object Object]",
          Rn = "[object RegExp]",
          Qo = "[object Set]",
          tr = "[object String]",
          Ai = "[object WeakMap]",
          kn = "[object ArrayBuffer]",
          jr = "[object DataView]",
          Rr = "[object Float32Array]",
          Vr = "[object Float64Array]",
          Jo = "[object Int8Array]",
          es = "[object Int16Array]",
          ao = "[object Int32Array]",
          nr = "[object Uint8Array]",
          Pn = "[object Uint8ClampedArray]",
          Mi = "[object Uint16Array]",
          $i = "[object Uint32Array]",
          ht = {};
        (ht[Rr] =
          ht[Vr] =
          ht[Jo] =
          ht[es] =
          ht[ao] =
          ht[nr] =
          ht[Pn] =
          ht[Mi] =
          ht[$i] =
            !0),
          (ht[Mn] =
            ht[pn] =
            ht[kn] =
            ht[Jn] =
            ht[jr] =
            ht[Lr] =
            ht[er] =
            ht[$n] =
            ht[xr] =
            ht[In] =
            ht[gn] =
            ht[Rn] =
            ht[Qo] =
            ht[tr] =
            ht[Ai] =
              !1);
        function co(s) {
          return io(s) && wr(s.length) && !!ht[dn(s)];
        }
        var lo = co;
        function Ii(s) {
          return function (a) {
            return s(a);
          };
        }
        var ki = Ii,
          Fr = { exports: {} };
        (function (s, a) {
          var h = Wt,
            w = a && !a.nodeType && a,
            b = w && !0 && s && !s.nodeType && s,
            C = b && b.exports === w,
            $ = C && h.process,
            D = (function () {
              try {
                var te = b && b.require && b.require("util").types;
                return te || ($ && $.binding && $.binding("util"));
              } catch {}
            })();
          s.exports = D;
        })(Fr, Fr.exports);
        var Tn = lo,
          ts = ki,
          uo = Fr.exports,
          vr = uo && uo.isTypedArray,
          ns = vr ? ts(vr) : Tn,
          rs = ns,
          os = De,
          Pi = _t,
          Ti = V,
          ss = wt.exports,
          Di = Ot,
          Oi = rs,
          Bi = Object.prototype,
          is = Bi.hasOwnProperty;
        function as(s, a) {
          var h = Ti(s),
            w = !h && Pi(s),
            b = !h && !w && ss(s),
            C = !h && !w && !b && Oi(s),
            $ = h || w || b || C,
            D = $ ? os(s.length, String) : [],
            te = D.length;
          for (var ee in s)
            (a || is.call(s, ee)) &&
              !(
                $ &&
                (ee == "length" ||
                  (b && (ee == "offset" || ee == "parent")) ||
                  (C &&
                    (ee == "buffer" ||
                      ee == "byteLength" ||
                      ee == "byteOffset")) ||
                  Di(ee, te))
              ) &&
              D.push(ee);
          return D;
        }
        var zi = as,
          cs = Object.prototype;
        function Hi(s) {
          var a = s && s.constructor,
            h = (typeof a == "function" && a.prototype) || cs;
          return s === h;
        }
        var Li = Hi;
        function ji(s, a) {
          return function (h) {
            return s(a(h));
          };
        }
        var ls = ji,
          us = ls,
          ds = us(Object.keys, Object),
          _r = ds,
          fs = Li,
          hs = _r,
          Ri = Object.prototype,
          ga = Ri.hasOwnProperty;
        function fo(s) {
          if (!fs(s)) return hs(s);
          var a = [];
          for (var h in Object(s))
            ga.call(s, h) && h != "constructor" && a.push(h);
          return a;
        }
        var ps = fo,
          ho = wo,
          Vi = jt;
        function Fi(s) {
          return s != null && Vi(s.length) && !ho(s);
        }
        var qi = Fi,
          po = zi,
          gs = ps,
          Xi = qi;
        function ys(s) {
          return Xi(s) ? po(s) : gs(s);
        }
        var Wi = ys,
          go = P,
          Yi = Ke,
          Wa = Wi;
        function ya(s) {
          return go(s, Wa, Yi);
        }
        var ma = ya,
          wa = ma,
          Ki = 1,
          Ia = Object.prototype,
          ka = Ia.hasOwnProperty;
        function Pa(s, a, h, w, b, C) {
          var $ = h & Ki,
            D = wa(s),
            te = D.length,
            ee = wa(a),
            pe = ee.length;
          if (te != pe && !$) return !1;
          for (var j = te; j--; ) {
            var M = D[j];
            if (!($ ? M in a : ka.call(a, M))) return !1;
          }
          var oe = C.get(s),
            Se = C.get(a);
          if (oe && Se) return oe == a && Se == s;
          var Be = !0;
          C.set(s, a), C.set(a, s);
          for (var xt = $; ++j < te; ) {
            M = D[j];
            var yn = s[M],
              qn = a[M];
            if (w) var mn = $ ? w(qn, yn, M, a, s, C) : w(yn, qn, M, s, a, C);
            if (!(mn === void 0 ? yn === qn || b(yn, qn, h, w, C) : mn)) {
              Be = !1;
              break;
            }
            xt || (xt = M == "constructor");
          }
          if (Be && !xt) {
            var or = s.constructor,
              sr = a.constructor;
            or != sr &&
              "constructor" in s &&
              "constructor" in a &&
              !(
                typeof or == "function" &&
                or instanceof or &&
                typeof sr == "function" &&
                sr instanceof sr
              ) &&
              (Be = !1);
          }
          return C.delete(s), C.delete(a), Be;
        }
        var Ta = Pa,
          xa = zt,
          va = Yt,
          Da = xa(va, "DataView"),
          _a = Da,
          Oa = zt,
          ba = Yt,
          Ba = Oa(ba, "Promise"),
          za = Ba,
          Ha = zt,
          ms = Yt,
          Zi = Ha(ms, "Set"),
          qr = Zi,
          Ea = zt,
          Gi = Yt,
          Sa = Ea(Gi, "WeakMap"),
          La = Sa,
          Ui = _a,
          Qi = hn,
          Ji = za,
          ea = qr,
          ta = La,
          Ca = Ln,
          rr = bo,
          ja = "[object Map]",
          Ya = "[object Object]",
          Na = "[object Promise]",
          Aa = "[object Set]",
          Vn = "[object WeakMap]",
          Fn = "[object DataView]",
          ws = rr(Ui),
          Ma = rr(Qi),
          Ra = rr(Ji),
          $a = rr(ea),
          Va = rr(ta),
          br = Ca;
        ((Ui && br(new Ui(new ArrayBuffer(1))) != Fn) ||
          (Qi && br(new Qi()) != ja) ||
          (Ji && br(Ji.resolve()) != Na) ||
          (ea && br(new ea()) != Aa) ||
          (ta && br(new ta()) != Vn)) &&
          (br = function (s) {
            var a = Ca(s),
              h = a == Ya ? s.constructor : void 0,
              w = h ? rr(h) : "";
            if (w)
              switch (w) {
                case ws:
                  return Fn;
                case Ma:
                  return ja;
                case Ra:
                  return Na;
                case $a:
                  return Aa;
                case Va:
                  return Vn;
              }
            return a;
          });
        var Fa = br,
          na = sa,
          e = oo,
          t = x,
          n = Ta,
          o = Fa,
          i = V,
          l = wt.exports,
          c = rs,
          d = 1,
          p = "[object Arguments]",
          g = "[object Array]",
          m = "[object Object]",
          T = Object.prototype,
          A = T.hasOwnProperty;
        function O(s, a, h, w, b, C) {
          var $ = i(s),
            D = i(a),
            te = $ ? g : o(s),
            ee = D ? g : o(a);
          (te = te == p ? m : te), (ee = ee == p ? m : ee);
          var pe = te == m,
            j = ee == m,
            M = te == ee;
          if (M && l(s)) {
            if (!l(a)) return !1;
            ($ = !0), (pe = !1);
          }
          if (M && !pe)
            return (
              C || (C = new na()),
              $ || c(s) ? e(s, a, h, w, b, C) : t(s, a, te, h, w, b, C)
            );
          if (!(h & d)) {
            var oe = pe && A.call(s, "__wrapped__"),
              Se = j && A.call(a, "__wrapped__");
            if (oe || Se) {
              var Be = oe ? s.value() : s,
                xt = Se ? a.value() : a;
              return C || (C = new na()), b(Be, xt, h, w, C);
            }
          }
          return M ? (C || (C = new na()), n(s, a, h, w, b, C)) : !1;
        }
        var me = O,
          he = me,
          Ie = dt;
        function le(s, a, h, w, b) {
          return s === a
            ? !0
            : s == null || a == null || (!Ie(s) && !Ie(a))
              ? s !== s && a !== a
              : he(s, a, h, w, le, b);
        }
        var Ne = le,
          ge = Ne;
        function U(s, a, h) {
          h = typeof h == "function" ? h : void 0;
          var w = h ? h(s, a) : void 0;
          return w === void 0 ? ge(s, a, void 0, h) : !!w;
        }
        var ze = U;
        const je = (s, a, h) =>
            h.ignoreCase
              ? typeof s == "string" &&
                typeof a == "string" &&
                s.toLowerCase() === a.toLowerCase()
              : typeof s == "symbol" && typeof a == "symbol"
                ? s.toString() === a.toString()
                : h.recursiveEqual
                  ? ze(s, a, (w, b) =>
                      h.ignoreCase &&
                      typeof w == "string" &&
                      typeof b == "string"
                        ? w.toLowerCase() === b.toLowerCase()
                        : void 0,
                    )
                  : s === a,
          ue = (s, a) => {
            if (s === a) return 1;
            if (
              s === null ||
              a === null ||
              typeof s != "object" ||
              typeof a != "object"
            )
              return 0;
            let h = 0;
            for (const w in s)
              Object.prototype.hasOwnProperty.call(s, w) &&
                Object.prototype.hasOwnProperty.call(a, w) &&
                s[w] === a[w] &&
                h++;
            return Math.max(
              h / Object.keys(s).length,
              h / Object.keys(a).length,
            );
          },
          ke = (s, a, h, w, b) => {
            h && w
              ? (s.push({ level: b, type: "equal", text: `"${h}": [` }),
                a.push({ level: b, type: "equal", text: `"${w}": [` }))
              : (s.push({ level: b, type: "equal", text: "[" }),
                a.push({ level: b, type: "equal", text: "[" }));
          },
          Ce = (s, a, h) => {
            s.push({ level: h, type: "equal", text: "]" }),
              a.push({ level: h, type: "equal", text: "]" });
          },
          Pe = (s, a, h) => {
            s.push({ level: h + 1, type: "equal", text: "..." }),
              a.push({ level: h + 1, type: "equal", text: "..." });
          },
          Ye = (s, a, h, w, b, C) => {
            const $ = Array(s.length + 1)
                .fill(0)
                .map(() => Array(a.length + 1).fill(0)),
              D = Array(s.length + 1)
                .fill(0)
                .map(() => Array(a.length + 1).fill(0));
            for (let M = 1; M <= s.length; M++) D[M][0] = "up";
            for (let M = 1; M <= a.length; M++) D[0][M] = "left";
            for (let M = 1; M <= s.length; M++)
              for (let oe = 1; oe <= a.length; oe++) {
                const Se = Ct(s[M - 1]),
                  Be = Ct(a[oe - 1]);
                Se === Be && (Se === "array" || Se === "object")
                  ? C.recursiveEqual
                    ? je(s[M - 1], a[oe - 1], C) ||
                      ue(s[M - 1], a[oe - 1]) > 0.5
                      ? (($[M][oe] = $[M - 1][oe - 1] + 1), (D[M][oe] = "diag"))
                      : $[M - 1][oe] >= $[M][oe - 1]
                        ? (($[M][oe] = $[M - 1][oe]), (D[M][oe] = "up"))
                        : (($[M][oe] = $[M][oe - 1]), (D[M][oe] = "left"))
                    : (($[M][oe] = $[M - 1][oe - 1] + 1), (D[M][oe] = "diag"))
                  : je(s[M - 1], a[oe - 1], C)
                    ? (($[M][oe] = $[M - 1][oe - 1] + 1), (D[M][oe] = "diag"))
                    : $[M - 1][oe] >= $[M][oe - 1]
                      ? (($[M][oe] = $[M - 1][oe]), (D[M][oe] = "up"))
                      : (($[M][oe] = $[M][oe - 1]), (D[M][oe] = "left"));
              }
            let te = s.length,
              ee = a.length,
              pe = [],
              j = [];
            for (; te > 0 || ee > 0; )
              if (D[te][ee] === "diag") {
                const M = Ct(s[te - 1]);
                if (
                  C.recursiveEqual &&
                  (M === "array" || M === "object") &&
                  je(s[te - 1], a[ee - 1], C)
                ) {
                  const oe = [],
                    Se = [];
                  Ht(oe, Se, "", "", s[te - 1], a[ee - 1], b + 1, C),
                    (pe = Ee(pe, oe.reverse(), !0)),
                    (j = Ee(j, Se.reverse(), !0));
                } else if (M === "array") {
                  const [oe, Se] = Ae(s[te - 1], a[ee - 1], h, w, b + 1, C);
                  (pe = Ee(pe, oe.reverse(), !0)),
                    (j = Ee(j, Se.reverse(), !0));
                } else if (M === "object") {
                  const [oe, Se] = Ft(s[te - 1], a[ee - 1], b + 2, C, Ae);
                  pe.unshift({ level: b + 1, type: "equal", text: "}" }),
                    j.unshift({ level: b + 1, type: "equal", text: "}" }),
                    (pe = Ee(pe, oe.reverse(), !0)),
                    (j = Ee(j, Se.reverse(), !0)),
                    pe.unshift({ level: b + 1, type: "equal", text: "{" }),
                    j.unshift({ level: b + 1, type: "equal", text: "{" });
                } else {
                  const oe = [],
                    Se = [];
                  Ht(oe, Se, "", "", s[te - 1], a[ee - 1], b + 1, C),
                    (pe = Ee(pe, oe.reverse(), !0)),
                    (j = Ee(j, Se.reverse(), !0));
                }
                te--, ee--;
              } else if (D[te][ee] === "up")
                if (C.showModifications && te > 1 && D[te - 1][ee] === "left") {
                  const M = Ct(s[te - 1]),
                    oe = Ct(a[ee - 1]);
                  if (M === oe)
                    if (M === "array") {
                      const [Se, Be] = Ae(s[te - 1], a[ee - 1], h, w, b + 1, C);
                      (pe = Ee(pe, Se.reverse(), !0)),
                        (j = Ee(j, Be.reverse(), !0));
                    } else if (M === "object") {
                      const [Se, Be] = Ft(s[te - 1], a[ee - 1], b + 2, C, Ae);
                      pe.unshift({ level: b + 1, type: "equal", text: "}" }),
                        j.unshift({ level: b + 1, type: "equal", text: "}" }),
                        (pe = Ee(pe, Se.reverse(), !0)),
                        (j = Ee(j, Be.reverse(), !0)),
                        pe.unshift({ level: b + 1, type: "equal", text: "{" }),
                        j.unshift({ level: b + 1, type: "equal", text: "{" });
                    } else
                      pe.unshift({
                        level: b + 1,
                        type: "modify",
                        text: pt(
                          s[te - 1],
                          void 0,
                          void 0,
                          C.undefinedBehavior,
                        ),
                      }),
                        j.unshift({
                          level: b + 1,
                          type: "modify",
                          text: pt(
                            a[ee - 1],
                            void 0,
                            void 0,
                            C.undefinedBehavior,
                          ),
                        });
                  else {
                    const Se = [],
                      Be = [];
                    Ht(Se, Be, "", "", s[te - 1], a[ee - 1], b + 1, C),
                      (pe = Ee(pe, Se.reverse(), !0)),
                      (j = Ee(j, Be.reverse(), !0));
                  }
                  te--, ee--;
                } else {
                  const M = L(
                    s[te - 1],
                    void 0,
                    1,
                    void 0,
                    C.undefinedBehavior,
                  ).split(`
`);
                  for (let oe = M.length - 1; oe >= 0; oe--)
                    pe.unshift({
                      level: b + 1 + (M[oe].match(/^\s+/)?.[0]?.length || 0),
                      type: "remove",
                      text: M[oe].replace(/^\s+/, "").replace(/,$/g, ""),
                    }),
                      j.unshift({ level: b + 1, type: "equal", text: "" });
                  te--;
                }
              else {
                const M = L(
                  a[ee - 1],
                  void 0,
                  1,
                  void 0,
                  C.undefinedBehavior,
                ).split(`
`);
                for (let oe = M.length - 1; oe >= 0; oe--)
                  pe.unshift({ level: b + 1, type: "equal", text: "" }),
                    j.unshift({
                      level: b + 1 + (M[oe].match(/^\s+/)?.[0]?.length || 0),
                      type: "add",
                      text: M[oe].replace(/^\s+/, "").replace(/,$/g, ""),
                    });
                ee--;
              }
            return [pe, j];
          },
          Ae = (s, a, h, w, b, C, $ = [], D = []) => {
            if ((ke($, D, h, w, b), b >= (C.maxDepth || 1 / 0))) Pe($, D, b);
            else {
              const [te, ee] = Ye(s, a, h, w, b, C);
              ($ = Ee($, te)), (D = Ee(D, ee));
            }
            return Ce($, D, b), [$, D];
          };
        function Me(s, a) {
          for (const h of s)
            if (Ct(h) === "object") {
              if (!(a in h)) return !1;
              for (const b of Object.values(h))
                if (Array.isArray(b) && !Me(b, a)) return !1;
            } else if (Array.isArray(h) && !Me(h, a)) return !1;
          return !0;
        }
        function _(s, a, h, w, b, C, $ = [], D = []) {
          if (!C.compareKey) return de(s, a, h, w, b, C, $, D);
          const te = (ee) => ee.every((pe) => Ct(pe) === "object");
          if (!te(s) || !te(a) || !Me(s, C.compareKey) || !Me(a, C.compareKey))
            return de(s, a, h, w, b, C, $, D);
          if ((ke($, D, h, w, b), b >= (C.maxDepth || 1 / 0))) Pe($, D, b);
          else {
            const ee = new Set(),
              pe = new Set();
            for (let j = 0; j < s.length; j++) {
              const M = s[j];
              if (ee.has(j) || Ct(M) !== "object" || !(C.compareKey in M))
                continue;
              const oe = M[C.compareKey];
              let Se = -1;
              for (let Be = 0; Be < a.length; Be++) {
                if (pe.has(Be)) continue;
                const xt = a[Be];
                if (Ct(xt) !== "object" || !(C.compareKey in xt)) continue;
                const yn = xt[C.compareKey];
                if (je(oe, yn, C)) {
                  Se = Be;
                  break;
                }
              }
              if (Se !== -1) {
                const Be = a[Se],
                  xt = Ct(M),
                  yn = Ct(Be);
                if (xt !== yn) Ht($, D, "", "", M, Be, b + 1, C);
                else if (xt === "object") {
                  $.push({ level: b + 1, type: "equal", text: "{" }),
                    D.push({ level: b + 1, type: "equal", text: "{" });
                  const qn = Array.from(
                    new Set([...Object.keys(M), ...Object.keys(Be)]),
                  );
                  for (const mn of qn) {
                    const or = M[mn],
                      sr = Be[mn];
                    if (Array.isArray(or) && Array.isArray(sr)) {
                      const [qa, Xa] = _(or, sr, mn, mn, b + 2, C, [], []);
                      ($ = Ee($, qa)), (D = Ee(D, Xa));
                    } else if (Array.isArray(or) || Array.isArray(sr))
                      Ht($, D, mn, mn, or, sr, b + 2, C);
                    else {
                      const [qa, Xa] = Ft(
                        { [mn]: or },
                        { [mn]: sr },
                        b + 2,
                        C,
                        _,
                      );
                      ($ = Ee($, qa)), (D = Ee(D, Xa));
                    }
                  }
                  $.push({ level: b + 1, type: "equal", text: "}" }),
                    D.push({ level: b + 1, type: "equal", text: "}" });
                } else if (xt === "array") {
                  const [qn, mn] = _(M, Be, "", "", b + 1, C, [], []);
                  ($ = Ee($, qn)), (D = Ee(D, mn));
                } else
                  je(M, Be, C)
                    ? ($.push({
                        level: b + 1,
                        type: "equal",
                        text: pt(M, void 0, void 0, C.undefinedBehavior),
                      }),
                      D.push({
                        level: b + 1,
                        type: "equal",
                        text: pt(Be, void 0, void 0, C.undefinedBehavior),
                      }))
                    : C.showModifications
                      ? ($.push({
                          level: b + 1,
                          type: "modify",
                          text: pt(M, void 0, void 0, C.undefinedBehavior),
                        }),
                        D.push({
                          level: b + 1,
                          type: "modify",
                          text: pt(Be, void 0, void 0, C.undefinedBehavior),
                        }))
                      : ($.push({
                          level: b + 1,
                          type: "remove",
                          text: pt(M, void 0, void 0, C.undefinedBehavior),
                        }),
                        $.push({ level: b + 1, type: "equal", text: "" }),
                        D.push({ level: b + 1, type: "equal", text: "" }),
                        D.push({
                          level: b + 1,
                          type: "add",
                          text: pt(Be, void 0, void 0, C.undefinedBehavior),
                        }));
                ee.add(j), pe.add(Se);
              }
            }
            for (let j = 0; j < s.length; j++) {
              if (ee.has(j)) continue;
              const M = s[j],
                oe = L(M, void 0, 1, void 0, C.undefinedBehavior).split(`
`);
              for (let Se = 0; Se < oe.length; Se++)
                $.push({
                  level: b + 1 + (oe[Se].match(/^\s+/)?.[0]?.length || 0),
                  type: "remove",
                  text: oe[Se].replace(/^\s+/, "").replace(/,$/g, ""),
                }),
                  D.push({ level: b + 1, type: "equal", text: "" });
            }
            for (let j = 0; j < a.length; j++) {
              if (pe.has(j)) continue;
              const M = a[j],
                oe = L(M, void 0, 1, void 0, C.undefinedBehavior).split(`
`);
              for (let Se = 0; Se < oe.length; Se++)
                $.push({ level: b + 1, type: "equal", text: "" }),
                  D.push({
                    level: b + 1 + (oe[Se].match(/^\s+/)?.[0]?.length || 0),
                    type: "add",
                    text: oe[Se].replace(/^\s+/, "").replace(/,$/g, ""),
                  });
            }
          }
          return Ce($, D, b), [$, D];
        }
        const re = _;
        function Z(s, a, h, w, b, C, $) {
          let D = [],
            te = [];
          const ee = Array.from(
            new Set([...Object.keys(s || {}), ...Object.keys(a || {})]),
          );
          for (const pe of ee) {
            const j = s ? s[pe] : void 0,
              M = a ? a[pe] : void 0;
            if (
              Array.isArray(j) &&
              Array.isArray(M) &&
              w.compareKey &&
              $(j, w.compareKey) &&
              $(M, w.compareKey)
            ) {
              const [oe, Se] = C(j, M, "", "", h + 2, w, [], []);
              (D = Ee(D, oe)), (te = Ee(te, Se));
              continue;
            }
            if (Array.isArray(j) && Array.isArray(M)) {
              const [oe, Se] = b(j, M, "", "", h + 2, w, [], []);
              (D = Ee(D, oe)), (te = Ee(te, Se));
            } else if (Array.isArray(j) || Array.isArray(M))
              Ht(D, te, pe, pe, j, M, h + 2, w);
            else {
              const [oe, Se] = Ft({ [pe]: j }, { [pe]: M }, h + 2, w, b);
              (D = Ee(D, oe)), (te = Ee(te, Se));
            }
          }
          return [D, te];
        }
        const de = (s, a, h, w, b, C, $ = [], D = []) => {
            if (
              ((s = [...s]),
              (a = [...a]),
              ke($, D, h, w, b),
              b >= (C.maxDepth || 1 / 0))
            )
              Pe($, D, b);
            else
              for (; s.length || a.length; ) {
                const te = s[0],
                  ee = a[0],
                  pe = Ct(te),
                  j = Ct(ee);
                if (s.length && a.length) {
                  if (pe !== j) Ht($, D, "", "", te, ee, b + 1, C);
                  else if (
                    C.recursiveEqual &&
                    ["object", "array"].includes(pe) &&
                    je(te, ee, C)
                  )
                    Ht($, D, "", "", te, ee, b + 1, C);
                  else if (pe === "object") {
                    $.push({ level: b + 1, type: "equal", text: "{" }),
                      D.push({ level: b + 1, type: "equal", text: "{" });
                    let M, oe;
                    C.arrayDiffMethod === "compare-key"
                      ? ([M, oe] = Z(te, ee, b, C, de, re, Me))
                      : ([M, oe] = Ft(te, ee, b + 2, C, de)),
                      ($ = Ee($, M)),
                      (D = Ee(D, oe)),
                      $.push({ level: b + 1, type: "equal", text: "}" }),
                      D.push({ level: b + 1, type: "equal", text: "}" });
                  } else if (pe === "array")
                    if (
                      C.compareKey &&
                      Me(te, C.compareKey) &&
                      Me(ee, C.compareKey)
                    ) {
                      const [M, oe] = re(te, ee, "", "", b + 1, C, [], []);
                      ($ = Ee($, M)), (D = Ee(D, oe));
                    } else {
                      const [M, oe] = de(te, ee, "", "", b + 1, C, [], []);
                      ($ = Ee($, M)), (D = Ee(D, oe));
                    }
                  else
                    tn(te, ee, { ignoreCase: C.ignoreCase }) === 0
                      ? ($.push({
                          level: b + 1,
                          type: "equal",
                          text: pt(te, void 0, void 0, C.undefinedBehavior),
                        }),
                        D.push({
                          level: b + 1,
                          type: "equal",
                          text: pt(ee, void 0, void 0, C.undefinedBehavior),
                        }))
                      : C.showModifications
                        ? ($.push({
                            level: b + 1,
                            type: "modify",
                            text: pt(te, void 0, void 0, C.undefinedBehavior),
                          }),
                          D.push({
                            level: b + 1,
                            type: "modify",
                            text: pt(ee, void 0, void 0, C.undefinedBehavior),
                          }))
                        : ($.push({
                            level: b + 1,
                            type: "remove",
                            text: pt(te, void 0, void 0, C.undefinedBehavior),
                          }),
                          $.push({ level: b + 1, type: "equal", text: "" }),
                          D.push({ level: b + 1, type: "equal", text: "" }),
                          D.push({
                            level: b + 1,
                            type: "add",
                            text: pt(ee, void 0, void 0, C.undefinedBehavior),
                          }));
                  s.shift(), a.shift();
                } else if (s.length) {
                  const M = pt(te, void 0, !0, C.undefinedBehavior).split(`
`);
                  for (let oe = 0; oe < M.length; oe++)
                    $.push({
                      level: b + 1 + (M[oe].match(/^\s+/)?.[0]?.length || 0),
                      type: "remove",
                      text: M[oe].replace(/^\s+/, "").replace(/,$/g, ""),
                    }),
                      D.push({ level: b + 1, type: "equal", text: "" });
                  s.shift();
                } else if (a.length) {
                  const M = pt(ee, void 0, !0, C.undefinedBehavior).split(`
`);
                  for (let oe = 0; oe < M.length; oe++)
                    $.push({ level: b + 1, type: "equal", text: "" }),
                      D.push({
                        level: b + 1 + (M[oe].match(/^\s+/)?.[0]?.length || 0),
                        type: "add",
                        text: M[oe].replace(/^\s+/, "").replace(/,$/g, ""),
                      });
                  a.shift();
                }
              }
            return Ce($, D, b), [$, D];
          },
          xe = (s, a) => {
            if (!s || typeof s != "object") return s;
            if (Array.isArray(s)) {
              const w = [...s];
              return (
                w.sort((b, C) => tn(b, C, { ignoreCase: a?.ignoreCase })),
                w.map((b) => xe(b, a))
              );
            }
            const h = { ...s };
            for (const w in h) h[w] = xe(h[w], a);
            return h;
          };
        var se = (function (s) {
          return (
            (s.stringify = "stringify"),
            (s.ignore = "ignore"),
            (s.throw = "throw"),
            s
          );
        })({});
        const be = { level: 0, type: "equal", text: "" },
          Ge = { level: 0, type: "equal", text: "{" },
          Qe = { level: 0, type: "equal", text: "}" };
        let yt = class {
          detectCircular(a) {
            if (this.options.detectCircular && H(a))
              throw new Error(
                `Circular reference detected in object (with keys ${Object.keys(
                  a,
                )
                  .map((h) => `"${h}"`)
                  .join(", ")})`,
              );
          }
          sortResultLines(a, h) {
            for (let w = 0; w < a.length; w++) {
              let b = !1;
              for (let C = 1; C < a.length; C++)
                if (
                  a[C].type === "remove" &&
                  a[C - 1].type === "equal" &&
                  h[C].type === "equal" &&
                  h[C - 1].type === "add"
                ) {
                  const $ = a[C - 1];
                  (a[C - 1] = a[C]), (a[C] = $);
                  const D = h[C - 1];
                  (h[C - 1] = h[C]), (h[C] = D), (b = !0);
                }
              if (!b) break;
            }
          }
          calculateLineNumbers(a) {
            let h = 0;
            for (const w of a) w.text && (w.lineNumber = ++h);
          }
          calculateCommas(a) {
            const h = Array(a.length).fill(0);
            for (let w = a.length - 1; w > 0; w--)
              a[w].text ? (h[w - 1] = w) : (h[w - 1] = h[w]);
            for (let w = 0; w < a.length; w++)
              !a[w].text.endsWith("{") &&
                !a[w].text.endsWith("[") &&
                a[w].text &&
                h[w] &&
                a[w].level <= a[h[w]].level &&
                (a[w].comma = !0);
          }
          diff(a, h) {
            this.detectCircular(a),
              this.detectCircular(h),
              (this.options.arrayDiffMethod === "unorder-normal" ||
                this.options.arrayDiffMethod === "unorder-lcs") &&
                ((a = xe(a, this.options)), (h = xe(h, this.options))),
              this.options.undefinedBehavior === "ignore" &&
                ((a = N(a) ?? null), (h = N(h) ?? null));
            let w = [],
              b = [];
            const C = Ct(a),
              $ = Ct(h);
            if (C !== $) {
              (w = L(
                a,
                void 0,
                1,
                this.options.maxDepth,
                this.options.undefinedBehavior,
              )
                .split(`
`)
                .map((j) => ({
                  level: j.match(/^\s+/)?.[0]?.length || 0,
                  type: "remove",
                  text: j.replace(/^\s+/, "").replace(/,$/g, ""),
                  comma: j.endsWith(","),
                }))),
                (b = L(
                  h,
                  void 0,
                  1,
                  this.options.maxDepth,
                  this.options.undefinedBehavior,
                )
                  .split(`
`)
                  .map((j) => ({
                    level: j.match(/^\s+/)?.[0]?.length || 0,
                    type: "add",
                    text: j.replace(/^\s+/, "").replace(/,$/g, ""),
                    comma: j.endsWith(","),
                  })));
              const ee = w.length,
                pe = b.length;
              (w = Ee(
                w,
                Array(pe)
                  .fill(0)
                  .map(() => ({ ...be })),
              )),
                (b = Ee(
                  b,
                  Array(ee)
                    .fill(0)
                    .map(() => ({ ...be })),
                  !0,
                ));
            } else
              C === "object"
                ? (([w, b] = Ft(a, h, 1, this.options, this.arrayDiffFunc)),
                  w.unshift({ ...Ge }),
                  w.push({ ...Qe }),
                  b.unshift({ ...Ge }),
                  b.push({ ...Qe }))
                : C === "array"
                  ? ([w, b] = this.arrayDiffFunc(a, h, "", "", 0, this.options))
                  : a !== h
                    ? this.options.ignoreCase
                      ? typeof a == "string" &&
                        typeof h == "string" &&
                        a.toLowerCase() === h.toLowerCase() &&
                        ((w = [{ level: 0, type: "equal", text: a }]),
                        (b = [{ level: 0, type: "equal", text: h }]))
                      : this.options.showModifications
                        ? ((w = [
                            {
                              level: 0,
                              type: "modify",
                              text: L(
                                a,
                                void 0,
                                void 0,
                                this.options.maxDepth,
                                this.options.undefinedBehavior,
                              ),
                            },
                          ]),
                          (b = [
                            {
                              level: 0,
                              type: "modify",
                              text: L(
                                h,
                                void 0,
                                void 0,
                                this.options.maxDepth,
                                this.options.undefinedBehavior,
                              ),
                            },
                          ]))
                        : ((w = [
                            {
                              level: 0,
                              type: "remove",
                              text: L(
                                a,
                                void 0,
                                void 0,
                                this.options.maxDepth,
                                this.options.undefinedBehavior,
                              ),
                            },
                            { ...be },
                          ]),
                          (b = [
                            { ...be },
                            {
                              level: 0,
                              type: "add",
                              text: L(
                                h,
                                void 0,
                                void 0,
                                this.options.maxDepth,
                                this.options.undefinedBehavior,
                              ),
                            },
                          ]))
                    : ((w = [
                        {
                          level: 0,
                          type: "equal",
                          text: L(
                            a,
                            void 0,
                            void 0,
                            this.options.maxDepth,
                            this.options.undefinedBehavior,
                          ),
                        },
                      ]),
                      (b = [
                        {
                          level: 0,
                          type: "equal",
                          text: L(
                            h,
                            void 0,
                            void 0,
                            this.options.maxDepth,
                            this.options.undefinedBehavior,
                          ),
                        },
                      ]));
            return (
              this.sortResultLines(w, b),
              this.calculateLineNumbers(w),
              this.calculateLineNumbers(b),
              this.calculateCommas(w),
              this.calculateCommas(b),
              [w, b]
            );
          }
          constructor({
            detectCircular: a = !0,
            maxDepth: h = 1 / 0,
            showModifications: w = !0,
            arrayDiffMethod: b = "normal",
            ignoreCase: C = !1,
            ignoreCaseForKey: $ = !1,
            recursiveEqual: D = !1,
            preserveKeyOrder: te,
            compareKey: ee,
            undefinedBehavior: pe = "stringify",
          } = {}) {
            (this.options = {
              detectCircular: a,
              maxDepth: h,
              showModifications: w,
              arrayDiffMethod: b,
              ignoreCase: C,
              ignoreCaseForKey: $,
              recursiveEqual: D,
              preserveKeyOrder: te,
              compareKey: ee,
              undefinedBehavior: pe,
            }),
              b === "compare-key"
                ? (this.arrayDiffFunc = re)
                : b === "lcs" || b === "unorder-lcs"
                  ? (this.arrayDiffFunc = Ae)
                  : (this.arrayDiffFunc = de);
          }
        };
      },
      13017: (xs, Dn, bt) => {
        "use strict";
        bt.d(Dn, { A: () => bn });
        var N = bt(90626);
        const Ee = (G) => "hasLinesBefore" in G || "hasLinesAfter" in G,
          H = (G, q, K) => (Ee(G) ? K : q * (G.end - G.start + 1)),
          L = (G, q) => {
            const K = [];
            let k, B;
            if (G.length && q.length)
              for (
                G = [...G],
                  q = [...q],
                  k = { ...G.shift() },
                  B = { ...q.shift() };
                ;
              ) {
                if (k.start === B.start) {
                  const ne = Math.min(k.end, B.end);
                  K.push({ ...k, ...B, end: ne }), (k.start = B.start = ne);
                } else if (k.start < B.start) {
                  const ne = Math.min(k.end, B.start);
                  K.push({ ...B, ...k, end: ne }), (k.start = ne);
                } else {
                  const ne = Math.min(k.start, B.end);
                  K.push({ ...k, ...B, end: ne }), (B.start = ne);
                }
                if (!G.length || !q.length) break;
                k.start === k.end && (k = { ...G.shift() }),
                  B.start === B.end && (B = { ...q.shift() });
              }
            return (
              G.length ||
                K.push(
                  ...q.map((ne) => ({ ...ne, token: k.token || "plain" })),
                ),
              q.length || K.push(...G),
              K
            );
          },
          On = (G, q, K, k, B, ne, ae, Oe, we) => {
            if (!q.length) return [0, 0];
            let ye = 0,
              ve = 0;
            const tt = G[K];
            Ee(tt) ? (ye = q[K]) : (ye = q[K] + (k - tt.start) * ae);
            const it = G[B];
            return (
              Ee(it)
                ? (ve = we - q[B] - Oe)
                : (ve = we - q[B] - (ne - it.start) * ae),
              [ye, ve]
            );
          },
          pt = (G, q, K, k, B, ne) => {
            if (!q.length) return [0, 0, 0, 0];
            let ae = 0,
              Oe = 0,
              we = 0,
              ye = 0,
              ve = 0,
              tt = G.length - 1;
            for (;;) {
              const mt = Math.floor((ve + tt) / 2);
              if (
                (q[mt] + H(G[mt], B, ne) <= K ? (ve = mt + 1) : (tt = mt),
                ve === tt)
              ) {
                ae = ve;
                break;
              }
            }
            const it = G[ae];
            for (
              Ee(it)
                ? (we = it.start)
                : (we = it.start + Math.floor((K - q[ae]) / B)),
                ve = 0,
                tt = G.length - 1;
              ;
            ) {
              const mt = Math.floor((ve + tt + 1) / 2);
              if ((q[mt] >= k ? (tt = mt - 1) : (ve = mt), ve === tt)) {
                Oe = ve;
                break;
              }
            }
            const Et = G[Oe];
            return (
              Ee(Et)
                ? (ye = Et.end)
                : (ye = Et.start + Math.ceil((k - q[Oe]) / B)),
              [ae, we, Oe, ye]
            );
          };
        var $t = {};
        Object.defineProperty($t, "__esModule", { value: !0 }),
          ($t.applyPatch =
            $t.calcPatch =
            zn =
            $t.lcs =
            $t.diff =
            $t.diff_core =
              void 0);
        function tn(G, q) {
          const { b: K, eq: k, stack_base: B } = G;
          let { i: ne, N: ae, j: Oe, M: we, Z: ye, stack_top: ve } = G;
          for (;;)
            switch (q) {
              case 0: {
                e: for (; ae > 0 && we > 0; ) {
                  K.fill(0, 0, 2 * ye);
                  const tt = ae - we,
                    it = ae + we,
                    Et = it & 1,
                    mt = ne + ae - 1,
                    qt = Oe + we - 1,
                    Xt = (it + Et) / 2;
                  let ft;
                  t: for (let vt = 0; vt <= Xt; vt++) {
                    const sn = 2 * Math.max(0, vt - we) - vt,
                      En = vt - 2 * Math.max(0, vt - ae);
                    for (let at = sn; at <= En; at += 2) {
                      const Rt = K[at - 1 - ye * Math.floor((at - 1) / ye)],
                        Pt = K[at + 1 - ye * Math.floor((at + 1) / ye)],
                        Bt = at === -vt || (at !== vt && Rt < Pt) ? Pt : Rt + 1,
                        Wt = Bt - at;
                      let It = Bt,
                        Lt = Wt;
                      for (; It < ae && Lt < we && k(ne + It, Oe + Lt); )
                        It++, Lt++;
                      if (
                        ((K[at - ye * Math.floor(at / ye)] = It),
                        Et === 1 &&
                          (ft = tt - at) >= 1 - vt &&
                          ft < vt &&
                          It + K[ye + ft - ye * Math.floor(ft / ye)] >= ae)
                      )
                        if (vt > 1 || It !== Bt) {
                          (B[ve++] = ne + It),
                            (B[ve++] = ae - It),
                            (B[ve++] = Oe + Lt),
                            (B[ve++] = we - Lt),
                            (ae = Bt),
                            (we = Wt),
                            (ye = 2 * (Math.min(ae, we) + 1));
                          continue e;
                        } else break t;
                    }
                    for (let at = sn; at <= En; at += 2) {
                      const Rt =
                          K[ye + at - 1 - ye * Math.floor((at - 1) / ye)],
                        Pt = K[ye + at + 1 - ye * Math.floor((at + 1) / ye)],
                        Bt = at === -vt || (at !== vt && Rt < Pt) ? Pt : Rt + 1,
                        Wt = Bt - at;
                      let It = Bt,
                        Lt = Wt;
                      for (; It < ae && Lt < we && k(mt - It, qt - Lt); )
                        It++, Lt++;
                      if (
                        ((K[ye + at - ye * Math.floor(at / ye)] = It),
                        Et === 0 &&
                          (ft = tt - at) >= -vt &&
                          ft <= vt &&
                          It + K[ft - ye * Math.floor(ft / ye)] >= ae)
                      )
                        if (vt > 0 || It !== Bt) {
                          (B[ve++] = ne + ae - Bt),
                            (B[ve++] = Bt),
                            (B[ve++] = Oe + we - Wt),
                            (B[ve++] = Wt),
                            (ae = ae - It),
                            (we = we - Lt),
                            (ye = 2 * (Math.min(ae, we) + 1));
                          continue e;
                        } else break t;
                    }
                  }
                  if (ae !== we) {
                    we > ae
                      ? ((ne += ae), (Oe += ae), (we -= ae), (ae = 0))
                      : ((ne += we), (Oe += we), (ae -= we), (we = 0));
                    break;
                  }
                }
                if (ae + we !== 0)
                  if (G.pxe === ne || G.pye === Oe)
                    (G.pxe = ne + ae), (G.pye = Oe + we);
                  else {
                    const tt = G.pxs;
                    if (
                      ((G.oxs = G.pxs),
                      (G.oxe = G.pxe),
                      (G.oys = G.pys),
                      (G.oye = G.pye),
                      (G.pxs = ne),
                      (G.pxe = ne + ae),
                      (G.pys = Oe),
                      (G.pye = Oe + we),
                      tt >= 0)
                    )
                      return (
                        (G.i = ne),
                        (G.N = ae),
                        (G.j = Oe),
                        (G.M = we),
                        (G.Z = ye),
                        (G.stack_top = ve),
                        1
                      );
                  }
              }
              case 1: {
                if (ve === 0) return 2;
                (we = B[--ve]),
                  (Oe = B[--ve]),
                  (ae = B[--ve]),
                  (ne = B[--ve]),
                  (ye = 2 * (Math.min(ae, we) + 1)),
                  (q = 0);
              }
            }
        }
        let Ct = class {
          [Symbol.iterator]() {
            return this;
          }
          next() {
            const { state: q, result: K } = this;
            if (this.c > 1) return (K.done = !0), (K.value = void 0), K;
            const k = tn(q, this.c);
            return (
              (this.c = k),
              k === 1
                ? ((K.value = [q.oxs, q.oxe, q.oys, q.oye]), K)
                : q.pxs >= 0
                  ? ((K.value = [q.pxs, q.pxe, q.pys, q.pye]), K)
                  : ((K.done = !0), (K.value = void 0), K)
            );
          }
          constructor(q) {
            (this.state = q),
              (this.c = 0),
              (this.result = { value: null, done: !1 });
          }
        };
        function Ht(G, q, K, k, B) {
          const ne = (Math.min(q, k) + 1) * 2,
            ae = q + k,
            Oe = new (
              ae < 256 ? Uint8Array : ae < 65536 ? Uint16Array : Uint32Array
            )(2 * ne);
          return new Ct({
            i: G,
            N: q,
            j: K,
            M: k,
            Z: ne,
            b: Oe,
            eq: B,
            pxs: -1,
            pxe: -1,
            pys: -1,
            pye: -1,
            oxs: -1,
            oxe: -1,
            oys: -1,
            oye: -1,
            stack_top: 0,
            stack_base: [],
          });
        }
        $t.diff_core = Ht;
        function rn(G, q) {
          let [K, k, B] = [0, G.length, q.length];
          for (; K < k && K < B && G[K] === q[K]; ) K++;
          if (K === k && K === B) return [][Symbol.iterator]();
          for (; G[--k] === q[--B] && k > K && B > K; );
          const ne = (ae, Oe) => G[ae] === q[Oe];
          return Ht(K, k + 1 - K, K, B + 1 - K, ne);
        }
        $t.diff = rn;
        let Ft = class {
          [Symbol.iterator]() {
            return this;
          }
          next() {
            const q = this.diff.next();
            if (q.done) {
              const { i: we, j: ye, N: ve } = this;
              return (
                we < ve &&
                  ((q.done = !1), (q.value = [we, ye, ve - we]), (this.i = ve)),
                q
              );
            }
            const K = q.value,
              k = K[0],
              B = K[1],
              ne = K[3],
              { i: ae, j: Oe } = this;
            return (
              ae !== k &&
                (K.length--, (K[0] = ae), (K[1] = Oe), (K[2] = k - ae)),
              (this.i = B),
              (this.j = ne),
              q
            );
          }
          constructor(q, K) {
            (this.diff = q), (this.N = K), (this.i = 0), (this.j = 0);
          }
        };
        function Bn(G, q) {
          return new Ft(rn(G, q), G.length);
        }
        var zn = ($t.lcs = Bn);
        function* rt(G, q) {
          const K = ArrayBuffer.isView(G)
            ? Uint8Array.prototype.subarray
            : G.slice;
          for (const k of rn(G, q)) (k[2] = K.call(q, k[2], k[3])), yield k;
        }
        $t.calcPatch = rt;
        function* wn(G, q) {
          let K = 0;
          const k = ArrayBuffer.isView(G)
            ? Uint8Array.prototype.subarray
            : G.slice;
          for (const [B, ne, ae] of q)
            K < B && (yield k.call(G, K, B)),
              ae.length > 0 && (yield ae),
              (K = ne);
          K < G.length && (yield k.call(G, K));
        }
        $t.applyPatch = wn;
        const Xn = (G, q) => {
            const K = [];
            let k = 0;
            for (const B of G) K.push(k), (k += B.length + q);
            return K.push(k - q), K;
          },
          on = (G) => G.filter((q) => q.end > q.start),
          xn = (G, q, K) => {
            let k = [],
              B = [],
              ne = 0,
              ae = 0;
            if (K.mode === "word") {
              const we = K.wordSeparator || " ",
                ye = G.split(we),
                ve = q.split(we),
                tt = [...zn(ye, ve)],
                it = we.length,
                Et = Xn(ye, it),
                mt = Xn(ve, it);
              for (const [qt, Xt, ft] of tt)
                qt > ne &&
                  k.push({ type: "remove", start: Et[ne], end: Et[qt] }),
                  Xt > ae &&
                    B.push({ type: "add", start: mt[ae], end: mt[Xt] }),
                  (ne = qt + ft),
                  (ae = Xt + ft),
                  k.push({ start: Et[qt], end: Et[ne] }),
                  B.push({ start: mt[Xt], end: mt[ae] });
              return (
                G.length > ne &&
                  k.push({ type: "remove", start: Et[ne], end: G.length }),
                q.length > ae &&
                  B.push({ type: "add", start: mt[ae], end: q.length }),
                (k = on(k)),
                (B = on(B)),
                [k, B]
              );
            }
            const Oe = zn(G, q);
            for (const [we, ye, ve] of Oe)
              we > ne && k.push({ type: "remove", start: ne, end: we }),
                ye > ae && B.push({ type: "add", start: ae, end: ye }),
                (ne = we + ve),
                (ae = ye + ve),
                k.push({ start: we, end: ne }),
                B.push({ start: ye, end: ae });
            return (
              G.length > ne &&
                k.push({ type: "remove", start: ne, end: G.length }),
              q.length > ae &&
                B.push({ type: "add", start: ae, end: q.length }),
              (k = on(k)),
              (B = on(B)),
              [k, B]
            );
          },
          vn = (G, q, K) => {
            if (!G) return [{ token: "plain", start: K, end: q.length + K }];
            if (
              q === "undefined" ||
              q === "Infinity" ||
              q === "-Infinity" ||
              q === "NaN" ||
              /^\d+n$/i.test(q) ||
              q.startsWith("Symbol(") ||
              q.startsWith("function") ||
              q.startsWith("(")
            )
              return [{ token: "invalid", start: K, end: q.length + K }];
            if (!Number.isNaN(Number(q)))
              return [{ token: "number", start: K, end: q.length + K }];
            if (q === "true" || q === "false")
              return [{ token: "boolean", start: K, end: q.length + K }];
            if (q === "null")
              return [{ token: "null", start: K, end: q.length + K }];
            if (q.startsWith('"')) {
              if (q.endsWith(": [") || q.endsWith(": {"))
                return [
                  { token: "key", start: K, end: q.length - 3 + K },
                  {
                    token: "punctuation",
                    start: q.length - 3,
                    end: q.length - 2 + K,
                  },
                  {
                    token: "plain",
                    start: q.length - 2,
                    end: q.length - 1 + K,
                  },
                  {
                    token: "punctuation",
                    start: q.length - 1,
                    end: q.length + K,
                  },
                ];
              let k = 1;
              for (; k < q.length && q[k] !== '"'; ) q[k] === "\\" && ++k, ++k;
              return k === q.length - 1
                ? [{ token: "string", start: K, end: q.length + K }]
                : [
                    { token: "key", start: K, end: k + 1 + K },
                    { token: "punctuation", start: k + 1, end: k + 2 + K },
                    { token: "plain", start: k + 2, end: k + 3 + K },
                    ...vn(G, q.substring(k + 3), K + k + 3),
                  ];
            }
            return q === "{" || q === "}" || q === "[" || q === "]"
              ? [{ token: "punctuation", start: K, end: q.length + K }]
              : [{ token: "plain", start: K, end: q.length + K }];
          },
          Re = { threshold: 8, margin: 3 },
          ot = (G, q, K, k) => {
            if (!K || k) return [{ start: 0, end: G.length, isEqual: !1 }];
            const B = [];
            for (let ye = 0; ye < G.length; ye++)
              G[ye].type === "equal" && q[ye].type === "equal"
                ? B.length && B[B.length - 1].isEqual
                  ? B[B.length - 1].end++
                  : B.push({ start: ye, end: ye + 1, isEqual: !0 })
                : B.length && !B[B.length - 1].isEqual
                  ? B[B.length - 1].end++
                  : B.push({ start: ye, end: ye + 1, isEqual: !1 });
            const ne = K === !0 ? Re : { ...Re, ...K },
              { threshold: ae, margin: Oe } = ne;
            ae < Oe * 2 + 1 &&
              console.warn(
                `Threshold (${ae}) is no more than 2 margins + 1 "expand" line (${Oe} * 2 + 1), it's not necessary to hide unchanged areas which have less than ${Oe * 2 + 1} lines.`,
              );
            const we = [];
            for (let ye = 0; ye < B.length; ye++) {
              const ve = B[ye];
              if (
                !ve.isEqual ||
                ve.end - ve.start < ae ||
                ve.end - ve.start <= Oe * 2 + 1
              ) {
                we.push(ve);
                continue;
              }
              ye
                ? ye === B.length - 1
                  ? (we.push({
                      start: ve.start,
                      end: ve.start + Oe,
                      isEqual: !0,
                    }),
                    we.push({
                      hasLinesBefore: !1,
                      hasLinesAfter: !0,
                      start: ve.start + Oe,
                      end: G.length,
                      isEqual: !0,
                    }))
                  : (we.push({
                      start: ve.start,
                      end: ve.start + Oe,
                      isEqual: !0,
                    }),
                    we.push({
                      hasLinesBefore: !0,
                      hasLinesAfter: !0,
                      start: ve.start + Oe,
                      end: ve.end - Oe,
                      isEqual: !0,
                    }),
                    we.push({ start: ve.end - Oe, end: ve.end, isEqual: !0 }))
                : (we.push({
                    hasLinesBefore: !0,
                    hasLinesAfter: !1,
                    start: 0,
                    end: ve.end - Oe,
                    isEqual: !0,
                  }),
                  we.push({ start: ve.end - Oe, end: ve.end, isEqual: !0 }));
            }
            return we;
          },
          Wn = 2,
          Hn = 20,
          _n = {
            noChangeDetected: "No change detected",
            showLinesBefore: "\u2B61 Show %d lines before",
            showLinesAfter: "\u2B63 Show %d lines after",
            showAll: "\u2B65 Show all unchanged lines",
          },
          bn = (G) => {
            const [q, K] = G.diff,
              k = N.useMemo(
                () =>
                  q.length === K.length &&
                  q.every((Ve) => Ve.type === "equal") &&
                  K.every((Ve) => Ve.type === "equal"),
                [q, K],
              ),
              B = { ..._n, ...G.texts },
              ne = G.lineNumbers
                ? `calc(${String(q.length).length}ch + 16px)`
                : 0,
              ae = G.indent ?? Wn,
              Oe = ae === "tab" ? "	" : " ",
              we = ae === "tab" ? 1 : ae,
              ye = {
                mode: G.inlineDiffOptions?.mode || "char",
                wordSeparator: G.inlineDiffOptions?.wordSeparator || "",
              },
              ve = G.hideUnchangedLines ?? !1,
              {
                scrollContainer: tt = "body",
                itemHeight: it = 18,
                expandLineHeight: Et = 26,
              } = !G.virtual || G.virtual === !0 ? {} : G.virtual,
              mt = tt === "body" ? document.body : document.querySelector(tt),
              qt = N.useRef(q),
              Xt = N.useRef(K),
              ft = N.useRef(ot(q, K, ve, k)),
              vt = N.useRef([]),
              sn = N.useRef(0),
              En = N.useRef(null),
              [, at] = N.useState({}),
              Rt = () => {
                if (((vt.current = []), G.virtual)) {
                  let Ve = 0;
                  for (const Je of ft.current)
                    Ee(Je)
                      ? (vt.current.push(Ve), (Ve += Et))
                      : (vt.current.push(Ve), (Ve += it * (Je.end - Je.start)));
                  sn.current = ft.current.reduce(
                    (Je, He) =>
                      Ee(He) ? Je + Et : Je + (He.end - He.start) * it,
                    0,
                  );
                }
                at({});
              };
            N.useEffect(() => {
              (qt.current = q),
                (Xt.current = K),
                (ft.current = ot(q, K, ve, k)),
                Rt();
            }, [ve, q, K]),
              N.useEffect(() => {
                if (!G.virtual || !mt) return;
                const Ve = () => at({});
                return (
                  mt.addEventListener("scroll", Ve),
                  () => {
                    mt.removeEventListener("scroll", Ve);
                  }
                );
              }, [G.virtual, mt]);
            const Pt = (Ve) => (Je) => {
                const He = [...ft.current],
                  Ue = He[Ve];
                (He[Ve] = { ...Ue, end: Math.max(Ue.end - Je, Ue.start) }),
                  Ve + 1 < ft.current.length - 1 &&
                    (He[Ve + 1] = {
                      ...He[Ve + 1],
                      start: Math.max(Ue.end - Je, Ue.start),
                    }),
                  (ft.current = He),
                  Rt();
              },
              Bt = (Ve) => (Je) => {
                const He = [...ft.current],
                  Ue = He[Ve];
                (He[Ve] = { ...Ue, start: Math.min(Ue.start + Je, Ue.end) }),
                  Ve > 1 &&
                    (He[Ve - 1] = {
                      ...He[Ve - 1],
                      end: Math.min(Ue.start + Je, Ue.end),
                    }),
                  (ft.current = He),
                  Rt();
              },
              Wt = (Ve) => () => {
                const Je = [...ft.current],
                  He = Je[Ve];
                (Je[Ve] = { ...He, start: He.start, end: He.start }),
                  Ve + 1 < ft.current.length - 1
                    ? (Je[Ve + 1] = { ...Je[Ve + 1], start: He.start })
                    : (Je[Ve - 1] = { ...Je[Ve - 1], end: He.end }),
                  (ft.current = Je),
                  Rt();
              },
              It = (Ve, Je = [], He = !1, Ue = !1) =>
                N.createElement(
                  N.Fragment,
                  null,
                  Je.map((Nt, Tt) => {
                    const Vt = Ve.slice(Nt.start, Nt.end);
                    if (!Nt.type && !Nt.token) return Vt;
                    const Kt = [
                      Nt.type ? `inline-diff-${Nt.type}` : "",
                      Nt.token ? `token ${Nt.token}` : "",
                    ]
                      .filter(Boolean)
                      .join(" ");
                    return N.createElement(
                      "span",
                      { key: `${Tt}-${Nt.type}-${Vt}`, className: Kt },
                      Vt,
                    );
                  }),
                  He &&
                    (Ue
                      ? N.createElement(
                          "span",
                          { className: "token punctuation" },
                          ",",
                        )
                      : ","),
                ),
              Lt = (Ve, Je) => {
                const He = qt.current[Ve],
                  Ue = Xt.current[Ve],
                  [Nt, Tt] =
                    G.highlightInlineDiff &&
                    He.type === "modify" &&
                    Ue.type === "modify"
                      ? xn(He.text, Ue.text, ye)
                      : [[], []],
                  Vt = vn(Je, He.text, 0),
                  Kt = vn(Je, Ue.text, 0),
                  Qt = L(Vt, Nt),
                  fn = L(Kt, Tt),
                  ln = He.type !== "equal" ? (G.bgColour?.[He.type] ?? "") : "",
                  Jt = Ue.type !== "equal" ? (G.bgColour?.[Ue.type] ?? "") : "";
                return N.createElement(
                  "tr",
                  { key: Ve },
                  G.lineNumbers &&
                    N.createElement(
                      "td",
                      {
                        className: `line-${He.type} line-number`,
                        style: { backgroundColor: ln },
                      },
                      He.lineNumber,
                    ),
                  N.createElement(
                    "td",
                    {
                      className: `line-${He.type}`,
                      style: { backgroundColor: ln },
                    },
                    N.createElement(
                      "pre",
                      null,
                      He.text && Oe.repeat(He.level * we),
                      It(He.text, Qt, He.comma, Je),
                    ),
                  ),
                  G.lineNumbers &&
                    N.createElement(
                      "td",
                      {
                        className: `line-${Ue.type} line-number`,
                        style: { backgroundColor: Jt },
                      },
                      Ue.lineNumber,
                    ),
                  N.createElement(
                    "td",
                    {
                      className: `line-${Ue.type}`,
                      style: { backgroundColor: Jt },
                    },
                    N.createElement(
                      "pre",
                      null,
                      Ue.text && Oe.repeat(Ue.level * we),
                      It(Ue.text, fn, Ue.comma, Je),
                    ),
                  ),
                );
              },
              Xr = (Ve, Je, He, Ue) =>
                N.createElement(
                  N.Fragment,
                  null,
                  Ve &&
                    N.createElement(
                      "button",
                      { onClick: () => Pt(Ue)(He) },
                      B.showLinesBefore.replaceAll("%d", String(He)),
                    ),
                  N.createElement(
                    "button",
                    { onClick: () => Wt(Ue)() },
                    B.showAll,
                  ),
                  Je &&
                    N.createElement(
                      "button",
                      { onClick: () => Bt(Ue)(He) },
                      B.showLinesAfter.replaceAll("%d", String(He)),
                    ),
                ),
              Yt = (Ve, Je, He, Ue, Nt) => {
                let { start: Tt, end: Vt } = Ve;
                if (
                  ((Tt = Math.max(Tt, He)), (Vt = Math.min(Vt, Ue)), Tt === Vt)
                )
                  return null;
                if (!Ee(Ve))
                  return Array(Vt - Tt)
                    .fill(0)
                    .map((ln, Jt) => Lt(Tt + Jt, Nt));
                const { hasLinesBefore: Kt, hasLinesAfter: Qt } = Ve,
                  fn =
                    typeof ve == "boolean" ? Hn : ve.expandMoreLinesLimit || Hn;
                return [
                  N.createElement(
                    "tr",
                    { key: `expand-line-${Je}`, className: "expand-line" },
                    N.createElement(
                      "td",
                      {
                        colSpan: 4,
                        className: `${Kt ? "has-lines-before" : ""} ${Qt ? "has-lines-after" : ""}`,
                      },
                      typeof ve != "boolean" && ve.expandLineRenderer
                        ? ve.expandLineRenderer({
                            hasLinesBefore: Kt,
                            hasLinesAfter: Qt,
                            onExpandBefore: Pt(Je),
                            onExpandAfter: Bt(Je),
                            onExpandAll: Wt(Je),
                          })
                        : Xr(Kt, Qt, fn, Je),
                    ),
                  ),
                ];
              },
              Er = (Ve) => {
                if (k && ve)
                  return N.createElement(
                    "tr",
                    { key: "message-line", className: "message-line" },
                    N.createElement("td", { colSpan: 4 }, B.noChangeDetected),
                  );
                if (!G.virtual)
                  return ft.current.map((Yn, ar) =>
                    Yt(Yn, ar, 0, qt.current.length, Ve),
                  );
                const Je = mt?.clientHeight ?? 0,
                  He = mt?.scrollTop ?? 0,
                  Ue = He + Je;
                let Nt = En.current,
                  Tt = Nt?.offsetTop ?? 0;
                for (; Nt?.offsetParent && Nt?.offsetParent !== mt; )
                  (Nt = Nt.offsetParent), (Tt += Nt.offsetTop);
                if (Tt > Ue || Tt + sn.current < He)
                  return N.createElement(
                    "tr",
                    null,
                    N.createElement("td", {
                      colSpan: 4,
                      style: { height: `${sn.current}px` },
                    }),
                  );
                const Vt = He - Tt,
                  Kt = Ue - Tt,
                  [Qt, fn, ln, Jt] = pt(ft.current, vt.current, Vt, Kt, it, Et),
                  [Sr, Wr] = On(
                    ft.current,
                    vt.current,
                    Qt,
                    fn,
                    ln,
                    Jt,
                    it,
                    Et,
                    sn.current,
                  ),
                  Cr = ft.current.slice(Qt, ln + 1);
                return Cr.length
                  ? N.createElement(
                      N.Fragment,
                      null,
                      N.createElement(
                        "tr",
                        null,
                        N.createElement("td", {
                          colSpan: 4,
                          style: { height: Sr, padding: 0 },
                        }),
                      ),
                      Cr.map((Yn, ar) => Yt(Yn, ar, fn, Jt, Ve)),
                      N.createElement(
                        "tr",
                        null,
                        N.createElement("td", {
                          colSpan: 4,
                          style: { height: Wr, padding: 0 },
                        }),
                      ),
                    )
                  : N.createElement(
                      "tr",
                      null,
                      N.createElement("td", {
                        colSpan: 4,
                        style: { height: `${sn.current}px` },
                      }),
                    );
              },
              an = () =>
                N.createElement(
                  "colgroup",
                  { className: "measure-line" },
                  G.lineNumbers &&
                    N.createElement("col", { style: { width: ne } }),
                  N.createElement("col", null),
                  G.lineNumbers &&
                    N.createElement("col", { style: { width: ne } }),
                  N.createElement("col", null),
                ),
              cn = [
                "json-diff-viewer",
                G.virtual && "json-diff-viewer-virtual",
                G.syntaxHighlight &&
                  `json-diff-viewer-theme-${G.syntaxHighlight.theme || "monokai"}`,
                G.className,
              ]
                .filter(Boolean)
                .join(" "),
              ir = !!G.syntaxHighlight;
            return N.createElement(
              "table",
              { className: cn, style: G.style },
              an(),
              N.createElement("tbody", { ref: En }, Er(ir)),
            );
          };
        bn.displayName = "Viewer";
      },
      18010: (xs, Dn, bt) => {
        "use strict";
        bt.d(Dn, { P2: () => Xn });
        const N = (k, B) => B.some((ne) => k instanceof ne);
        let Ee, H;
        function L() {
          return (
            Ee ||
            (Ee = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          );
        }
        function On() {
          return (
            H ||
            (H = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          );
        }
        const pt = new WeakMap(),
          $t = new WeakMap(),
          tn = new WeakMap();
        function Ct(k) {
          const B = new Promise((ne, ae) => {
            const Oe = () => {
                k.removeEventListener("success", we),
                  k.removeEventListener("error", ye);
              },
              we = () => {
                ne(rt(k.result)), Oe();
              },
              ye = () => {
                ae(k.error), Oe();
              };
            k.addEventListener("success", we), k.addEventListener("error", ye);
          });
          return tn.set(B, k), B;
        }
        function Ht(k) {
          if (pt.has(k)) return;
          const B = new Promise((ne, ae) => {
            const Oe = () => {
                k.removeEventListener("complete", we),
                  k.removeEventListener("error", ye),
                  k.removeEventListener("abort", ye);
              },
              we = () => {
                ne(), Oe();
              },
              ye = () => {
                ae(k.error || new DOMException("AbortError", "AbortError")),
                  Oe();
              };
            k.addEventListener("complete", we),
              k.addEventListener("error", ye),
              k.addEventListener("abort", ye);
          });
          pt.set(k, B);
        }
        let rn = {
          get(k, B, ne) {
            if (k instanceof IDBTransaction) {
              if (B === "done") return pt.get(k);
              if (B === "store")
                return ne.objectStoreNames[1]
                  ? void 0
                  : ne.objectStore(ne.objectStoreNames[0]);
            }
            return rt(k[B]);
          },
          set(k, B, ne) {
            return (k[B] = ne), !0;
          },
          has(k, B) {
            return k instanceof IDBTransaction &&
              (B === "done" || B === "store")
              ? !0
              : B in k;
          },
        };
        function Ft(k) {
          rn = k(rn);
        }
        function Bn(k) {
          return On().includes(k)
            ? function (...B) {
                return k.apply(wn(this), B), rt(this.request);
              }
            : function (...B) {
                return rt(k.apply(wn(this), B));
              };
        }
        function zn(k) {
          return typeof k == "function"
            ? Bn(k)
            : (k instanceof IDBTransaction && Ht(k),
              N(k, L()) ? new Proxy(k, rn) : k);
        }
        function rt(k) {
          if (k instanceof IDBRequest) return Ct(k);
          if ($t.has(k)) return $t.get(k);
          const B = zn(k);
          return B !== k && ($t.set(k, B), tn.set(B, k)), B;
        }
        const wn = (k) => tn.get(k);
        function Xn(
          k,
          B,
          { blocked: ne, upgrade: ae, blocking: Oe, terminated: we } = {},
        ) {
          const ye = indexedDB.open(k, B),
            ve = rt(ye);
          return (
            ae &&
              ye.addEventListener("upgradeneeded", (tt) => {
                ae(
                  rt(ye.result),
                  tt.oldVersion,
                  tt.newVersion,
                  rt(ye.transaction),
                  tt,
                );
              }),
            ne &&
              ye.addEventListener("blocked", (tt) =>
                ne(tt.oldVersion, tt.newVersion, tt),
              ),
            ve
              .then((tt) => {
                we && tt.addEventListener("close", () => we()),
                  Oe &&
                    tt.addEventListener("versionchange", (it) =>
                      Oe(it.oldVersion, it.newVersion, it),
                    );
              })
              .catch(() => {}),
            ve
          );
        }
        function on(k, { blocked: B } = {}) {
          const ne = indexedDB.deleteDatabase(k);
          return (
            B && ne.addEventListener("blocked", (ae) => B(ae.oldVersion, ae)),
            rt(ne).then(() => {})
          );
        }
        const xn = ["get", "getKey", "getAll", "getAllKeys", "count"],
          vn = ["put", "add", "delete", "clear"],
          Re = new Map();
        function ot(k, B) {
          if (!(k instanceof IDBDatabase && !(B in k) && typeof B == "string"))
            return;
          if (Re.get(B)) return Re.get(B);
          const ne = B.replace(/FromIndex$/, ""),
            ae = B !== ne,
            Oe = vn.includes(ne);
          if (
            !(ne in (ae ? IDBIndex : IDBObjectStore).prototype) ||
            !(Oe || xn.includes(ne))
          )
            return;
          const we = async function (ye, ...ve) {
            const tt = this.transaction(ye, Oe ? "readwrite" : "readonly");
            let it = tt.store;
            return (
              ae && (it = it.index(ve.shift())),
              (await Promise.all([it[ne](...ve), Oe && tt.done]))[0]
            );
          };
          return Re.set(B, we), we;
        }
        Ft((k) => ({
          ...k,
          get: (B, ne, ae) => ot(B, ne) || k.get(B, ne, ae),
          has: (B, ne) => !!ot(B, ne) || k.has(B, ne),
        }));
        const Wn = ["continue", "continuePrimaryKey", "advance"],
          Hn = {},
          _n = new WeakMap(),
          bn = new WeakMap(),
          G = {
            get(k, B) {
              if (!Wn.includes(B)) return k[B];
              let ne = Hn[B];
              return (
                ne ||
                  (ne = Hn[B] =
                    function (...ae) {
                      _n.set(this, bn.get(this)[B](...ae));
                    }),
                ne
              );
            },
          };
        async function* q(...k) {
          let B = this;
          if ((B instanceof IDBCursor || (B = await B.openCursor(...k)), !B))
            return;
          B = B;
          const ne = new Proxy(B, G);
          for (bn.set(ne, B), tn.set(ne, wn(B)); B; )
            yield ne, (B = await (_n.get(ne) || B.continue())), _n.delete(ne);
        }
        function K(k, B) {
          return (
            (B === Symbol.asyncIterator &&
              N(k, [IDBIndex, IDBObjectStore, IDBCursor])) ||
            (B === "iterate" && N(k, [IDBIndex, IDBObjectStore]))
          );
        }
        Ft((k) => ({
          ...k,
          get(B, ne, ae) {
            return K(B, ne) ? q : k.get(B, ne, ae);
          },
          has(B, ne) {
            return K(B, ne) || k.has(B, ne);
          },
        }));
      },
    },
  ]);
})();
