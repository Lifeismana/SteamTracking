/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [8310],
    {
      89558: (Bt, Ze, V) => {
        V.d(Ze, { JY: () => Oo, sx: () => Bl, gL: () => fs });
        var h = V(90626),
          Pe = V(72739),
          j = V(3998),
          We = V(61702),
          je = V(72648);
        function Ee(n) {
          n();
        }
        let ke = Ee;
        const te = (n) => (ke = n),
          ne = () => ke,
          ue = Symbol.for("react-redux-context"),
          De = typeof globalThis < "u" ? globalThis : {};
        function Le() {
          var n;
          if (!h.createContext) return {};
          const i = (n = De[ue]) != null ? n : (De[ue] = new Map());
          let c = i.get(h.createContext);
          return (
            c || ((c = h.createContext(null)), i.set(h.createContext, c)), c
          );
        }
        const Ue = Le(),
          at = null;
        function Je(n = ReactReduxContext) {
          return function () {
            return useContext(n);
          };
        }
        const le = null;
        let M = null;
        const ye = (n) => {
            M = n;
          },
          pt = (n, i) => n === i;
        function Ft(n = ReactReduxContext) {
          const i =
            n === ReactReduxContext
              ? useDefaultReduxContext
              : createReduxContextHook(n);
          return function (u, d = {}) {
            const {
                equalityFn: p = pt,
                stabilityCheck: m = void 0,
                noopCheck: y = void 0,
              } = typeof d == "function" ? { equalityFn: d } : d,
              {
                store: _,
                subscription: I,
                getServerState: S,
                stabilityCheck: $,
                noopCheck: x,
              } = i(),
              O = useRef(!0),
              Z = useCallback(
                {
                  [u.name](B) {
                    return u(B);
                  },
                }[u.name],
                [u, $, m],
              ),
              F = M(I.addNestedSub, _.getState, S || _.getState, Z, p);
            return useDebugValue(F), F;
          };
        }
        const Gt = null;
        var mt = V(58584),
          Mt = V(81115),
          Wt = V(904),
          wt = V.n(Wt),
          gt = V(98193);
        const Ln = [
          "initMapStateToProps",
          "initMapDispatchToProps",
          "initMergeProps",
        ];
        function ct(
          n,
          i,
          c,
          u,
          { areStatesEqual: d, areOwnPropsEqual: p, areStatePropsEqual: m },
        ) {
          let y = !1,
            _,
            I,
            S,
            $,
            x;
          function O(X, re) {
            return (
              (_ = X),
              (I = re),
              (S = n(_, I)),
              ($ = i(u, I)),
              (x = c(S, $, I)),
              (y = !0),
              x
            );
          }
          function Z() {
            return (
              (S = n(_, I)),
              i.dependsOnOwnProps && ($ = i(u, I)),
              (x = c(S, $, I)),
              x
            );
          }
          function F() {
            return (
              n.dependsOnOwnProps && (S = n(_, I)),
              i.dependsOnOwnProps && ($ = i(u, I)),
              (x = c(S, $, I)),
              x
            );
          }
          function B() {
            const X = n(_, I),
              re = !m(X, S);
            return (S = X), re && (x = c(S, $, I)), x;
          }
          function K(X, re) {
            const Y = !p(re, I),
              oe = !d(X, _, re, I);
            return (_ = X), (I = re), Y && oe ? Z() : Y ? F() : oe ? B() : x;
          }
          return function (re, Y) {
            return y ? K(re, Y) : O(re, Y);
          };
        }
        function Jt(n, i) {
          let {
              initMapStateToProps: c,
              initMapDispatchToProps: u,
              initMergeProps: d,
            } = i,
            p = (0, Mt.A)(i, Ln);
          const m = c(n, p),
            y = u(n, p),
            _ = d(n, p);
          return ct(m, y, _, n, p);
        }
        function ln(n, i) {
          const c = {};
          for (const u in n) {
            const d = n[u];
            typeof d == "function" && (c[u] = (...p) => i(d(...p)));
          }
          return c;
        }
        function vt(n) {
          return function (c) {
            const u = n(c);
            function d() {
              return u;
            }
            return (d.dependsOnOwnProps = !1), d;
          };
        }
        function un(n) {
          return n.dependsOnOwnProps ? !!n.dependsOnOwnProps : n.length !== 1;
        }
        function Bn(n, i) {
          return function (u, { displayName: d }) {
            const p = function (y, _) {
              return p.dependsOnOwnProps
                ? p.mapToProps(y, _)
                : p.mapToProps(y, void 0);
            };
            return (
              (p.dependsOnOwnProps = !0),
              (p.mapToProps = function (y, _) {
                (p.mapToProps = n), (p.dependsOnOwnProps = un(n));
                let I = p(y, _);
                return (
                  typeof I == "function" &&
                    ((p.mapToProps = I),
                    (p.dependsOnOwnProps = un(I)),
                    (I = p(y, _))),
                  I
                );
              }),
              p
            );
          };
        }
        function ht(n, i) {
          return (c, u) => {
            throw new Error(
              `Invalid value of type ${typeof n} for ${i} argument when connecting component ${u.wrappedComponentName}.`,
            );
          };
        }
        function Ve(n) {
          return n && typeof n == "object"
            ? vt((i) => ln(n, i))
            : n
              ? typeof n == "function"
                ? Bn(n, "mapDispatchToProps")
                : ht(n, "mapDispatchToProps")
              : vt((i) => ({ dispatch: i }));
        }
        function Vt(n) {
          return n
            ? typeof n == "function"
              ? Bn(n, "mapStateToProps")
              : ht(n, "mapStateToProps")
            : vt(() => ({}));
        }
        function dn(n, i, c) {
          return (0, mt.A)({}, c, n, i);
        }
        function zt(n) {
          return function (c, { displayName: u, areMergedPropsEqual: d }) {
            let p = !1,
              m;
            return function (_, I, S) {
              const $ = n(_, I, S);
              return p ? d($, m) || (m = $) : ((p = !0), (m = $)), m;
            };
          };
        }
        function Kt(n) {
          return n
            ? typeof n == "function"
              ? zt(n)
              : ht(n, "mergeProps")
            : () => dn;
        }
        function Dt() {
          const n = ne();
          let i = null,
            c = null;
          return {
            clear() {
              (i = null), (c = null);
            },
            notify() {
              n(() => {
                let u = i;
                for (; u; ) u.callback(), (u = u.next);
              });
            },
            get() {
              let u = [],
                d = i;
              for (; d; ) u.push(d), (d = d.next);
              return u;
            },
            subscribe(u) {
              let d = !0,
                p = (c = { callback: u, next: null, prev: c });
              return (
                p.prev ? (p.prev.next = p) : (i = p),
                function () {
                  !d ||
                    i === null ||
                    ((d = !1),
                    p.next ? (p.next.prev = p.prev) : (c = p.prev),
                    p.prev ? (p.prev.next = p.next) : (i = p.next));
                }
              );
            },
          };
        }
        const rt = { notify() {}, get: () => [] };
        function Pt(n, i) {
          let c,
            u = rt,
            d = 0,
            p = !1;
          function m(F) {
            S();
            const B = u.subscribe(F);
            let K = !1;
            return () => {
              K || ((K = !0), B(), $());
            };
          }
          function y() {
            u.notify();
          }
          function _() {
            Z.onStateChange && Z.onStateChange();
          }
          function I() {
            return p;
          }
          function S() {
            d++,
              c || ((c = i ? i.addNestedSub(_) : n.subscribe(_)), (u = Dt()));
          }
          function $() {
            d--, c && d === 0 && (c(), (c = void 0), u.clear(), (u = rt));
          }
          function x() {
            p || ((p = !0), S());
          }
          function O() {
            p && ((p = !1), $());
          }
          const Z = {
            addNestedSub: m,
            notifyNestedSubs: y,
            handleChangeWrapper: _,
            isSubscribed: I,
            trySubscribe: x,
            tryUnsubscribe: O,
            getListeners: () => u,
          };
          return Z;
        }
        const st =
          typeof window < "u" &&
          typeof window.document < "u" &&
          typeof window.document.createElement < "u"
            ? h.useLayoutEffect
            : h.useEffect;
        function Ot(n, i) {
          return n === i
            ? n !== 0 || i !== 0 || 1 / n === 1 / i
            : n !== n && i !== i;
        }
        function Ht(n, i) {
          if (Ot(n, i)) return !0;
          if (
            typeof n != "object" ||
            n === null ||
            typeof i != "object" ||
            i === null
          )
            return !1;
          const c = Object.keys(n),
            u = Object.keys(i);
          if (c.length !== u.length) return !1;
          for (let d = 0; d < c.length; d++)
            if (
              !Object.prototype.hasOwnProperty.call(i, c[d]) ||
              !Ot(n[c[d]], i[c[d]])
            )
              return !1;
          return !0;
        }
        const Fn = () => {
            throw new Error("uSES not initialized!");
          },
          qt = ["reactReduxForwardedRef"];
        let Nt = Fn;
        const Gn = (n) => {
            Nt = n;
          },
          Mn = null,
          jt = [null, null],
          mr = (n) => {
            try {
              return JSON.stringify(n);
            } catch {
              return String(n);
            }
          };
        function gr(n, i, c) {
          st(() => n(...i), c);
        }
        function pn(n, i, c, u, d, p) {
          (n.current = u),
            (c.current = !1),
            d.current && ((d.current = null), p());
        }
        function Wn(n, i, c, u, d, p, m, y, _, I, S) {
          if (!n) return () => {};
          let $ = !1,
            x = null;
          const O = () => {
            if ($ || !y.current) return;
            const F = i.getState();
            let B, K;
            try {
              B = u(F, d.current);
            } catch (X) {
              (K = X), (x = X);
            }
            K || (x = null),
              B === p.current
                ? m.current || I()
                : ((p.current = B), (_.current = B), (m.current = !0), S());
          };
          return (
            (c.onStateChange = O),
            c.trySubscribe(),
            O(),
            () => {
              if ((($ = !0), c.tryUnsubscribe(), (c.onStateChange = null), x))
                throw x;
            }
          );
        }
        const vr = () => Mn;
        function hr(n, i) {
          return n === i;
        }
        let Et = !1;
        function mn(
          n,
          i,
          c,
          {
            pure: u,
            areStatesEqual: d = hr,
            areOwnPropsEqual: p = Ht,
            areStatePropsEqual: m = Ht,
            areMergedPropsEqual: y = Ht,
            forwardRef: _ = !1,
            context: I = Ue,
          } = {},
        ) {
          const S = I,
            $ = Vt(n),
            x = Ve(i),
            O = Kt(c),
            Z = !!n;
          return (B) => {
            const K = B.displayName || B.name || "Component",
              X = `Connect(${K})`,
              re = {
                shouldHandleStateChanges: Z,
                displayName: X,
                wrappedComponentName: K,
                WrappedComponent: B,
                initMapStateToProps: $,
                initMapDispatchToProps: x,
                initMergeProps: O,
                areStatesEqual: d,
                areStatePropsEqual: m,
                areOwnPropsEqual: p,
                areMergedPropsEqual: y,
              };
            function Y(ge) {
              const [me, Xe, ve] = h.useMemo(() => {
                  const { reactReduxForwardedRef: ft } = ge,
                    Lt = (0, Mt.A)(ge, qt);
                  return [ge.context, ft, Lt];
                }, [ge]),
                nt = h.useMemo(
                  () =>
                    me &&
                    me.Consumer &&
                    (0, gt.isContextConsumer)(
                      h.createElement(me.Consumer, null),
                    )
                      ? me
                      : S,
                  [me, S],
                ),
                ze = h.useContext(nt),
                xt = !!ge.store && !!ge.store.getState && !!ge.store.dispatch,
                Rn = !!ze && !!ze.store,
                ot = xt ? ge.store : ze.store,
                dr = Rn ? ze.getServerState : ot.getState,
                Ko = h.useMemo(() => Jt(ot.dispatch, re), [ot]),
                [sn, yi] = h.useMemo(() => {
                  if (!Z) return jt;
                  const ft = Pt(ot, xt ? void 0 : ze.subscription),
                    Lt = ft.notifyNestedSubs.bind(ft);
                  return [ft, Lt];
                }, [ot, xt, ze]),
                fr = h.useMemo(
                  () => (xt ? ze : (0, mt.A)({}, ze, { subscription: sn })),
                  [xt, ze, sn],
                ),
                $i = h.useRef(),
                Ho = h.useRef(ve),
                Zn = h.useRef(),
                qo = h.useRef(!1),
                Ql = h.useRef(!1),
                _i = h.useRef(!1),
                Xo = h.useRef();
              st(
                () => (
                  (_i.current = !0),
                  () => {
                    _i.current = !1;
                  }
                ),
                [],
              );
              const Yo = h.useMemo(
                  () => () =>
                    Zn.current && ve === Ho.current
                      ? Zn.current
                      : Ko(ot.getState(), ve),
                  [ot, ve],
                ),
                ps = h.useMemo(
                  () => (Lt) =>
                    sn
                      ? Wn(Z, ot, sn, Ko, Ho, $i, qo, _i, Zn, yi, Lt)
                      : () => {},
                  [sn],
                );
              gr(pn, [Ho, $i, qo, ve, Zn, yi]);
              let pr;
              try {
                pr = Nt(ps, Yo, dr ? () => Ko(dr(), ve) : Yo);
              } catch (ft) {
                throw (
                  (Xo.current &&
                    (ft.message += `
The error may be correlated with this previous error:
${Xo.current.stack}

`),
                  ft)
                );
              }
              st(() => {
                (Xo.current = void 0), (Zn.current = void 0), ($i.current = pr);
              });
              const Qo = h.useMemo(
                () => h.createElement(B, (0, mt.A)({}, pr, { ref: Xe })),
                [Xe, B, pr],
              );
              return h.useMemo(
                () =>
                  Z ? h.createElement(nt.Provider, { value: fr }, Qo) : Qo,
                [nt, Qo, fr],
              );
            }
            const ie = h.memo(Y);
            if (
              ((ie.WrappedComponent = B),
              (ie.displayName = Y.displayName = X),
              _)
            ) {
              const me = h.forwardRef(function (ve, nt) {
                return h.createElement(
                  ie,
                  (0, mt.A)({}, ve, { reactReduxForwardedRef: nt }),
                );
              });
              return (
                (me.displayName = X), (me.WrappedComponent = B), wt()(me, B)
              );
            }
            return wt()(ie, B);
          };
        }
        const Jn = mn;
        function br({
          store: n,
          context: i,
          children: c,
          serverState: u,
          stabilityCheck: d = "once",
          noopCheck: p = "once",
        }) {
          const m = h.useMemo(() => {
              const I = Pt(n);
              return {
                store: n,
                subscription: I,
                getServerState: u ? () => u : void 0,
                stabilityCheck: d,
                noopCheck: p,
              };
            }, [n, u, d, p]),
            y = h.useMemo(() => n.getState(), [n]);
          st(() => {
            const { subscription: I } = m;
            return (
              (I.onStateChange = I.notifyNestedSubs),
              I.trySubscribe(),
              y !== n.getState() && I.notifyNestedSubs(),
              () => {
                I.tryUnsubscribe(), (I.onStateChange = void 0);
              }
            );
          }, [m, y]);
          const _ = i || Ue;
          return h.createElement(_.Provider, { value: m }, c);
        }
        const yr = br;
        function Ii(n = ReactReduxContext) {
          const i =
            n === ReactReduxContext
              ? useDefaultReduxContext
              : createReduxContextHook(n);
          return function () {
            const { store: u } = i();
            return u;
          };
        }
        const xi = null;
        function k(n = ReactReduxContext) {
          const i =
            n === ReactReduxContext ? useDefaultStore : createStoreHook(n);
          return function () {
            return i().dispatch;
          };
        }
        const E = null;
        ye(je.useSyncExternalStoreWithSelector),
          Gn(We.useSyncExternalStore),
          te(Pe.unstable_batchedUpdates);
        var g = V(46311),
          T = V(48046),
          ce =
            Number.isNaN ||
            function (i) {
              return typeof i == "number" && i !== i;
            };
        function de(n, i) {
          return !!(n === i || (ce(n) && ce(i)));
        }
        function pe(n, i) {
          if (n.length !== i.length) return !1;
          for (var c = 0; c < n.length; c++) if (!de(n[c], i[c])) return !1;
          return !0;
        }
        function ee(n, i) {
          i === void 0 && (i = pe);
          var c = null;
          function u() {
            for (var d = [], p = 0; p < arguments.length; p++)
              d[p] = arguments[p];
            if (c && c.lastThis === this && i(d, c.lastArgs))
              return c.lastResult;
            var m = n.apply(this, d);
            return (c = { lastResult: m, lastArgs: d, lastThis: this }), m;
          }
          return (
            (u.clear = function () {
              c = null;
            }),
            u
          );
        }
        var Ye = V(18651);
        const Ke = !0,
          Si = /[ \t]{2,}/g,
          ki = /^[ \t]*/gm,
          $r = (n) => n.replace(Si, " ").replace(ki, "").trim(),
          _r = (n) =>
            $r(`
  %c@hello-pangea/dnd

  %c${$r(n)}

  %c\u{1F477}\u200D This is a development only message. It will be removed in production builds.
`),
          Ir = (n) => [
            _r(n),
            "color: #00C584; font-size: 1.2em; font-weight: bold;",
            "line-height: 1.5",
            "color: #723874;",
          ],
          Vn = "__@hello-pangea/dnd-disable-dev-warnings";
        function Ut(n, i) {
          Ke || (typeof window < "u" && window[Vn]) || console[n](...Ir(i));
        }
        const wi = Ut.bind(null, "warn"),
          xr = Ut.bind(null, "error");
        function it() {}
        function Sr(n, i) {
          return { ...n, ...i };
        }
        function Be(n, i, c) {
          const u = i.map((d) => {
            const p = Sr(c, d.options);
            return (
              n.addEventListener(d.eventName, d.fn, p),
              function () {
                n.removeEventListener(d.eventName, d.fn, p);
              }
            );
          });
          return function () {
            u.forEach((p) => {
              p();
            });
          };
        }
        const kr = !0,
          wr = "Invariant failed";
        class Xt extends Error {}
        Xt.prototype.toString = function () {
          return this.message;
        };
        function L(n, i) {
          if (!n) throw kr ? new Xt(wr) : new Xt(`${wr}: ${i || ""}`);
        }
        class zr extends h.Component {
          constructor(...i) {
            super(...i),
              (this.callbacks = null),
              (this.unbind = it),
              (this.onWindowError = (c) => {
                const u = this.getCallbacks();
                u.isDragging() && u.tryAbort(),
                  c.error instanceof Xt && c.preventDefault();
              }),
              (this.getCallbacks = () => {
                if (!this.callbacks)
                  throw new Error(
                    "Unable to find AppCallbacks in <ErrorBoundary/>",
                  );
                return this.callbacks;
              }),
              (this.setCallbacks = (c) => {
                this.callbacks = c;
              });
          }
          componentDidMount() {
            this.unbind = Be(window, [
              { eventName: "error", fn: this.onWindowError },
            ]);
          }
          componentDidCatch(i) {
            if (i instanceof Xt) {
              this.setState({});
              return;
            }
            throw i;
          }
          componentWillUnmount() {
            this.unbind();
          }
          render() {
            return this.props.children(this.setCallbacks);
          }
        }
        const Dr = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
          At = (n) => n + 1,
          gn = (n) => `
  You have lifted an item in position ${At(n.source.index)}
`,
          Ae = (n, i) => {
            const c = n.droppableId === i.droppableId,
              u = At(n.index),
              d = At(i.index);
            return c
              ? `
      You have moved the item from position ${u}
      to position ${d}
    `
              : `
    You have moved the item from position ${u}
    in list ${n.droppableId}
    to list ${i.droppableId}
    in position ${d}
  `;
          },
          Kn = (n, i, c) =>
            i.droppableId === c.droppableId
              ? `
      The item ${n}
      has been combined with ${c.draggableId}`
              : `
      The item ${n}
      in list ${i.droppableId}
      has been combined with ${c.draggableId}
      in list ${c.droppableId}
    `,
          Pr = (n) => {
            const i = n.destination;
            if (i) return Ae(n.source, i);
            const c = n.combine;
            return c
              ? Kn(n.draggableId, n.source, c)
              : "You are over an area that cannot be dropped on";
          },
          Or = (n) => `
  The item has returned to its starting position
  of ${At(n.index)}
`;
        var lt = {
          dragHandleUsageInstructions: Dr,
          onDragStart: gn,
          onDragUpdate: Pr,
          onDragEnd: (n) => {
            if (n.reason === "CANCEL")
              return `
      Movement cancelled.
      ${Or(n.source)}
    `;
            const i = n.destination,
              c = n.combine;
            return i
              ? `
      You have dropped the item.
      ${Ae(n.source, i)}
    `
              : c
                ? `
      You have dropped the item.
      ${Kn(n.draggableId, n.source, c)}
    `
                : `
    The item has been dropped while not over a drop area.
    ${Or(n.source)}
  `;
          },
        };
        const we = { x: 0, y: 0 },
          xe = (n, i) => ({ x: n.x + i.x, y: n.y + i.y }),
          Fe = (n, i) => ({ x: n.x - i.x, y: n.y - i.y }),
          He = (n, i) => n.x === i.x && n.y === i.y,
          bt = (n) => ({ x: n.x !== 0 ? -n.x : 0, y: n.y !== 0 ? -n.y : 0 }),
          Qe = (n, i, c = 0) => (n === "x" ? { x: i, y: c } : { x: c, y: i }),
          A = (n, i) => Math.sqrt((i.x - n.x) ** 2 + (i.y - n.y) ** 2),
          N = (n, i) => Math.min(...i.map((c) => A(n, c))),
          C = (n) => (i) => ({ x: n(i.x), y: n(i.y) });
        var P = (n, i) => {
          const c = (0, T.l)({
            top: Math.max(i.top, n.top),
            right: Math.min(i.right, n.right),
            bottom: Math.min(i.bottom, n.bottom),
            left: Math.max(i.left, n.left),
          });
          return c.width <= 0 || c.height <= 0 ? null : c;
        };
        const t = (n, i) => ({
            top: n.top + i.y,
            left: n.left + i.x,
            bottom: n.bottom + i.y,
            right: n.right + i.x,
          }),
          o = (n) => [
            { x: n.left, y: n.top },
            { x: n.right, y: n.top },
            { x: n.left, y: n.bottom },
            { x: n.right, y: n.bottom },
          ],
          f = { top: 0, right: 0, bottom: 0, left: 0 },
          w = (n, i) => (i ? t(n, i.scroll.diff.displacement) : n),
          $e = (n, i, c) =>
            c && c.increasedBy
              ? { ...n, [i.end]: n[i.end] + c.increasedBy[i.line] }
              : n,
          W = (n, i) =>
            i && i.shouldClipSubject ? P(i.pageMarginBox, n) : (0, T.l)(n);
        var Q = ({ page: n, withPlaceholder: i, axis: c, frame: u }) => {
            const d = w(n.marginBox, u),
              p = $e(d, c, i),
              m = W(p, u);
            return { page: n, withPlaceholder: i, active: m };
          },
          he = (n, i) => {
            n.frame || L(!1);
            const c = n.frame,
              u = Fe(i, c.scroll.initial),
              d = bt(u),
              p = {
                ...c,
                scroll: {
                  initial: c.scroll.initial,
                  current: i,
                  diff: { value: u, displacement: d },
                  max: c.scroll.max,
                },
              },
              m = Q({
                page: n.subject.page,
                withPlaceholder: n.subject.withPlaceholder,
                axis: n.axis,
                frame: p,
              });
            return { ...n, frame: p, subject: m };
          };
        const Ge = ee((n) =>
            n.reduce((i, c) => ((i[c.descriptor.id] = c), i), {}),
          ),
          Te = ee((n) => n.reduce((i, c) => ((i[c.descriptor.id] = c), i), {})),
          Me = ee((n) => Object.values(n)),
          Yt = ee((n) => Object.values(n));
        var Tt = ee((n, i) =>
          Yt(i)
            .filter((u) => n === u.descriptor.droppableId)
            .sort((u, d) => u.descriptor.index - d.descriptor.index),
        );
        function Nr(n) {
          return n.at && n.at.type === "REORDER" ? n.at.destination : null;
        }
        function fe(n) {
          return n.at && n.at.type === "COMBINE" ? n.at.combine : null;
        }
        var Ct = ee((n, i) =>
            i.filter((c) => c.descriptor.id !== n.descriptor.id),
          ),
          _e = ({
            isMovingForward: n,
            draggable: i,
            destination: c,
            insideDestination: u,
            previousImpact: d,
          }) => {
            if (!c.isCombineEnabled || !Nr(d)) return null;
            function m(O) {
              const Z = {
                type: "COMBINE",
                combine: { draggableId: O, droppableId: c.descriptor.id },
              };
              return { ...d, at: Z };
            }
            const y = d.displaced.all,
              _ = y.length ? y[0] : null;
            if (n) return _ ? m(_) : null;
            const I = Ct(i, u);
            if (!_) {
              if (!I.length) return null;
              const O = I[I.length - 1];
              return m(O.descriptor.id);
            }
            const S = I.findIndex((O) => O.descriptor.id === _);
            S === -1 && L(!1);
            const $ = S - 1;
            if ($ < 0) return null;
            const x = I[$];
            return m(x.descriptor.id);
          },
          Qt = (n, i) => n.descriptor.droppableId === i.descriptor.id;
        const Di = { point: we, value: 0 },
          vn = { invisible: {}, visible: {}, all: [] };
        var ta = { displaced: vn, displacedBy: Di, at: null },
          et = (n, i) => (c) => n <= c && c <= i,
          Pi = (n) => {
            const i = et(n.top, n.bottom),
              c = et(n.left, n.right);
            return (u) => {
              if (i(u.top) && i(u.bottom) && c(u.left) && c(u.right)) return !0;
              const p = i(u.top) || i(u.bottom),
                m = c(u.left) || c(u.right);
              if (p && m) return !0;
              const _ = u.top < n.top && u.bottom > n.bottom,
                I = u.left < n.left && u.right > n.right;
              return _ && I ? !0 : (_ && m) || (I && p);
            };
          },
          na = (n) => {
            const i = et(n.top, n.bottom),
              c = et(n.left, n.right);
            return (u) => i(u.top) && i(u.bottom) && c(u.left) && c(u.right);
          };
        const jr = {
            direction: "vertical",
            line: "y",
            crossAxisLine: "x",
            start: "top",
            end: "bottom",
            size: "height",
            crossAxisStart: "left",
            crossAxisEnd: "right",
            crossAxisSize: "width",
          },
          Oi = {
            direction: "horizontal",
            line: "x",
            crossAxisLine: "y",
            start: "left",
            end: "right",
            size: "width",
            crossAxisStart: "top",
            crossAxisEnd: "bottom",
            crossAxisSize: "height",
          };
        var ra = (n) => (i) => {
          const c = et(i.top, i.bottom),
            u = et(i.left, i.right);
          return (d) =>
            n === jr ? c(d.top) && c(d.bottom) : u(d.left) && u(d.right);
        };
        const ia = (n, i) => {
            const c = i.frame ? i.frame.scroll.diff.displacement : we;
            return t(n, c);
          },
          oa = (n, i, c) => (i.subject.active ? c(i.subject.active)(n) : !1),
          aa = (n, i, c) => c(i)(n),
          Er = ({
            target: n,
            destination: i,
            viewport: c,
            withDroppableDisplacement: u,
            isVisibleThroughFrameFn: d,
          }) => {
            const p = u ? ia(n, i) : n;
            return oa(p, i, d) && aa(p, c, d);
          },
          ca = (n) => Er({ ...n, isVisibleThroughFrameFn: Pi }),
          Ni = (n) => Er({ ...n, isVisibleThroughFrameFn: na }),
          vs = (n) =>
            Er({ ...n, isVisibleThroughFrameFn: ra(n.destination.axis) }),
          sa = (n, i, c) => {
            if (typeof c == "boolean") return c;
            if (!i) return !0;
            const { invisible: u, visible: d } = i;
            if (u[n]) return !1;
            const p = d[n];
            return p ? p.shouldAnimate : !0;
          };
        function la(n, i) {
          const c = n.page.marginBox,
            u = { top: i.point.y, right: 0, bottom: 0, left: i.point.x };
          return (0, T.l)((0, T.fT)(c, u));
        }
        function en({
          afterDragging: n,
          destination: i,
          displacedBy: c,
          viewport: u,
          forceShouldAnimate: d,
          last: p,
        }) {
          return n.reduce(
            function (y, _) {
              const I = la(_, c),
                S = _.descriptor.id;
              if (
                (y.all.push(S),
                !ca({
                  target: I,
                  destination: i,
                  viewport: u,
                  withDroppableDisplacement: !0,
                }))
              )
                return (y.invisible[_.descriptor.id] = !0), y;
              const x = sa(S, p, d),
                O = { draggableId: S, shouldAnimate: x };
              return (y.visible[S] = O), y;
            },
            { all: [], visible: {}, invisible: {} },
          );
        }
        function ua(n, i) {
          if (!n.length) return 0;
          const c = n[n.length - 1].descriptor.index;
          return i.inHomeList ? c : c + 1;
        }
        function ji({
          insideDestination: n,
          inHomeList: i,
          displacedBy: c,
          destination: u,
        }) {
          const d = ua(n, { inHomeList: i });
          return {
            displaced: vn,
            displacedBy: c,
            at: {
              type: "REORDER",
              destination: { droppableId: u.descriptor.id, index: d },
            },
          };
        }
        function Hn({
          draggable: n,
          insideDestination: i,
          destination: c,
          viewport: u,
          displacedBy: d,
          last: p,
          index: m,
          forceShouldAnimate: y,
        }) {
          const _ = Qt(n, c);
          if (m == null)
            return ji({
              insideDestination: i,
              inHomeList: _,
              displacedBy: d,
              destination: c,
            });
          const I = i.find((Z) => Z.descriptor.index === m);
          if (!I)
            return ji({
              insideDestination: i,
              inHomeList: _,
              displacedBy: d,
              destination: c,
            });
          const S = Ct(n, i),
            $ = i.indexOf(I),
            x = S.slice($);
          return {
            displaced: en({
              afterDragging: x,
              destination: c,
              displacedBy: d,
              last: p,
              viewport: u.frame,
              forceShouldAnimate: y,
            }),
            displacedBy: d,
            at: {
              type: "REORDER",
              destination: { droppableId: c.descriptor.id, index: m },
            },
          };
        }
        function yt(n, i) {
          return !!i.effected[n];
        }
        var da = ({
            isMovingForward: n,
            destination: i,
            draggables: c,
            combine: u,
            afterCritical: d,
          }) => {
            if (!i.isCombineEnabled) return null;
            const p = u.draggableId,
              y = c[p].descriptor.index;
            return yt(p, d) ? (n ? y : y - 1) : n ? y + 1 : y;
          },
          fa = ({
            isMovingForward: n,
            isInHomeList: i,
            insideDestination: c,
            location: u,
          }) => {
            if (!c.length) return null;
            const d = u.index,
              p = n ? d + 1 : d - 1,
              m = c[0].descriptor.index,
              y = c[c.length - 1].descriptor.index,
              _ = i ? y : y + 1;
            return p < m || p > _ ? null : p;
          },
          hs = ({
            isMovingForward: n,
            isInHomeList: i,
            draggable: c,
            draggables: u,
            destination: d,
            insideDestination: p,
            previousImpact: m,
            viewport: y,
            afterCritical: _,
          }) => {
            const I = m.at;
            if ((I || L(!1), I.type === "REORDER")) {
              const $ = fa({
                isMovingForward: n,
                isInHomeList: i,
                location: I.destination,
                insideDestination: p,
              });
              return $ == null
                ? null
                : Hn({
                    draggable: c,
                    insideDestination: p,
                    destination: d,
                    viewport: y,
                    last: m.displaced,
                    displacedBy: m.displacedBy,
                    index: $,
                  });
            }
            const S = da({
              isMovingForward: n,
              destination: d,
              displaced: m.displaced,
              draggables: u,
              combine: I.combine,
              afterCritical: _,
            });
            return S == null
              ? null
              : Hn({
                  draggable: c,
                  insideDestination: p,
                  destination: d,
                  viewport: y,
                  last: m.displaced,
                  displacedBy: m.displacedBy,
                  index: S,
                });
          },
          Ei = ({
            displaced: n,
            afterCritical: i,
            combineWith: c,
            displacedBy: u,
          }) => {
            const d = !!(n.visible[c] || n.invisible[c]);
            return yt(c, i) ? (d ? we : bt(u.point)) : d ? u.point : we;
          },
          pa = ({ afterCritical: n, impact: i, draggables: c }) => {
            const u = fe(i);
            u || L(!1);
            const d = u.draggableId,
              p = c[d].page.borderBox.center,
              m = Ei({
                displaced: i.displaced,
                afterCritical: n,
                combineWith: d,
                displacedBy: i.displacedBy,
              });
            return xe(p, m);
          };
        const Ur = (n, i) => i.margin[n.start] + i.borderBox[n.size] / 2,
          ma = (n, i) => i.margin[n.end] + i.borderBox[n.size] / 2,
          Ui = (n, i, c) =>
            i[n.crossAxisStart] +
            c.margin[n.crossAxisStart] +
            c.borderBox[n.crossAxisSize] / 2,
          ga = ({ axis: n, moveRelativeTo: i, isMoving: c }) =>
            Qe(n.line, i.marginBox[n.end] + Ur(n, c), Ui(n, i.marginBox, c)),
          va = ({ axis: n, moveRelativeTo: i, isMoving: c }) =>
            Qe(n.line, i.marginBox[n.start] - ma(n, c), Ui(n, i.marginBox, c)),
          bs = ({ axis: n, moveInto: i, isMoving: c }) =>
            Qe(
              n.line,
              i.contentBox[n.start] + Ur(n, c),
              Ui(n, i.contentBox, c),
            );
        var ys = ({
            impact: n,
            draggable: i,
            draggables: c,
            droppable: u,
            afterCritical: d,
          }) => {
            const p = Tt(u.descriptor.id, c),
              m = i.page,
              y = u.axis;
            if (!p.length)
              return bs({ axis: y, moveInto: u.page, isMoving: m });
            const { displaced: _, displacedBy: I } = n,
              S = _.all[0];
            if (S) {
              const x = c[S];
              if (yt(S, d))
                return va({ axis: y, moveRelativeTo: x.page, isMoving: m });
              const O = (0, T.cY)(x.page, I.point);
              return va({ axis: y, moveRelativeTo: O, isMoving: m });
            }
            const $ = p[p.length - 1];
            if ($.descriptor.id === i.descriptor.id) return m.borderBox.center;
            if (yt($.descriptor.id, d)) {
              const x = (0, T.cY)($.page, bt(d.displacedBy.point));
              return ga({ axis: y, moveRelativeTo: x, isMoving: m });
            }
            return ga({ axis: y, moveRelativeTo: $.page, isMoving: m });
          },
          Ar = (n, i) => {
            const c = n.frame;
            return c ? xe(i, c.scroll.diff.displacement) : i;
          };
        const ha = ({
          impact: n,
          draggable: i,
          droppable: c,
          draggables: u,
          afterCritical: d,
        }) => {
          const p = i.page.borderBox.center,
            m = n.at;
          return !c || !m
            ? p
            : m.type === "REORDER"
              ? ys({
                  impact: n,
                  draggable: i,
                  draggables: u,
                  droppable: c,
                  afterCritical: d,
                })
              : pa({ impact: n, draggables: u, afterCritical: d });
        };
        var Tr = (n) => {
            const i = ha(n),
              c = n.droppable;
            return c ? Ar(c, i) : i;
          },
          Ai = (n, i) => {
            const c = Fe(i, n.scroll.initial),
              u = bt(c);
            return {
              frame: (0, T.l)({
                top: i.y,
                bottom: i.y + n.frame.height,
                left: i.x,
                right: i.x + n.frame.width,
              }),
              scroll: {
                initial: n.scroll.initial,
                max: n.scroll.max,
                current: i,
                diff: { value: c, displacement: u },
              },
            };
          };
        function Cr(n, i) {
          return n.map((c) => i[c]);
        }
        function ba(n, i) {
          for (let c = 0; c < i.length; c++) {
            const u = i[c].visible[n];
            if (u) return u;
          }
          return null;
        }
        var qn = ({
            impact: n,
            viewport: i,
            destination: c,
            draggables: u,
            maxScrollChange: d,
          }) => {
            const p = Ai(i, xe(i.scroll.current, d)),
              m = c.frame ? he(c, xe(c.frame.scroll.current, d)) : c,
              y = n.displaced,
              _ = en({
                afterDragging: Cr(y.all, u),
                destination: c,
                displacedBy: n.displacedBy,
                viewport: p.frame,
                last: y,
                forceShouldAnimate: !1,
              }),
              I = en({
                afterDragging: Cr(y.all, u),
                destination: m,
                displacedBy: n.displacedBy,
                viewport: i.frame,
                last: y,
                forceShouldAnimate: !1,
              }),
              S = {},
              $ = {},
              x = [y, _, I];
            return (
              y.all.forEach((Z) => {
                const F = ba(Z, x);
                if (F) {
                  $[Z] = F;
                  return;
                }
                S[Z] = !0;
              }),
              { ...n, displaced: { all: y.all, invisible: S, visible: $ } }
            );
          },
          Ti = (n, i) => xe(n.scroll.diff.displacement, i),
          Xn = ({ pageBorderBoxCenter: n, draggable: i, viewport: c }) => {
            const u = Ti(c, n),
              d = Fe(u, i.page.borderBox.center);
            return xe(i.client.borderBox.center, d);
          },
          Ci = ({
            draggable: n,
            destination: i,
            newPageBorderBoxCenter: c,
            viewport: u,
            withDroppableDisplacement: d,
            onlyOnMainAxis: p = !1,
          }) => {
            const m = Fe(c, n.page.borderBox.center),
              _ = {
                target: t(n.page.borderBox, m),
                destination: i,
                withDroppableDisplacement: d,
                viewport: u,
              };
            return p ? vs(_) : Ni(_);
          },
          ya = ({
            isMovingForward: n,
            draggable: i,
            destination: c,
            draggables: u,
            previousImpact: d,
            viewport: p,
            previousPageBorderBoxCenter: m,
            previousClientSelection: y,
            afterCritical: _,
          }) => {
            if (!c.isEnabled) return null;
            const I = Tt(c.descriptor.id, u),
              S = Qt(i, c),
              $ =
                _e({
                  isMovingForward: n,
                  draggable: i,
                  destination: c,
                  insideDestination: I,
                  previousImpact: d,
                }) ||
                hs({
                  isMovingForward: n,
                  isInHomeList: S,
                  draggable: i,
                  draggables: u,
                  destination: c,
                  insideDestination: I,
                  previousImpact: d,
                  viewport: p,
                  afterCritical: _,
                });
            if (!$) return null;
            const x = Tr({
              impact: $,
              draggable: i,
              droppable: c,
              draggables: u,
              afterCritical: _,
            });
            if (
              Ci({
                draggable: i,
                destination: c,
                newPageBorderBoxCenter: x,
                viewport: p.frame,
                withDroppableDisplacement: !1,
                onlyOnMainAxis: !0,
              })
            )
              return {
                clientSelection: Xn({
                  pageBorderBoxCenter: x,
                  draggable: i,
                  viewport: p,
                }),
                impact: $,
                scrollJumpRequest: null,
              };
            const Z = Fe(x, m),
              F = qn({
                impact: $,
                viewport: p,
                destination: c,
                draggables: u,
                maxScrollChange: Z,
              });
            return { clientSelection: y, impact: F, scrollJumpRequest: Z };
          };
        const Oe = (n) => {
          const i = n.subject.active;
          return i || L(!1), i;
        };
        var $a = ({
          isMovingForward: n,
          pageBorderBoxCenter: i,
          source: c,
          droppables: u,
          viewport: d,
        }) => {
          const p = c.subject.active;
          if (!p) return null;
          const m = c.axis,
            y = et(p[m.start], p[m.end]),
            _ = Me(u)
              .filter((S) => S !== c)
              .filter((S) => S.isEnabled)
              .filter((S) => !!S.subject.active)
              .filter((S) => Pi(d.frame)(Oe(S)))
              .filter((S) => {
                const $ = Oe(S);
                return n
                  ? p[m.crossAxisEnd] < $[m.crossAxisEnd]
                  : $[m.crossAxisStart] < p[m.crossAxisStart];
              })
              .filter((S) => {
                const $ = Oe(S),
                  x = et($[m.start], $[m.end]);
                return (
                  y($[m.start]) || y($[m.end]) || x(p[m.start]) || x(p[m.end])
                );
              })
              .sort((S, $) => {
                const x = Oe(S)[m.crossAxisStart],
                  O = Oe($)[m.crossAxisStart];
                return n ? x - O : O - x;
              })
              .filter(
                (S, $, x) =>
                  Oe(S)[m.crossAxisStart] === Oe(x[0])[m.crossAxisStart],
              );
          if (!_.length) return null;
          if (_.length === 1) return _[0];
          const I = _.filter((S) =>
            et(Oe(S)[m.start], Oe(S)[m.end])(i[m.line]),
          );
          return I.length === 1
            ? I[0]
            : I.length > 1
              ? I.sort((S, $) => Oe(S)[m.start] - Oe($)[m.start])[0]
              : _.sort((S, $) => {
                  const x = N(i, o(Oe(S))),
                    O = N(i, o(Oe($)));
                  return x !== O ? x - O : Oe(S)[m.start] - Oe($)[m.start];
                })[0];
        };
        const _a = (n, i) => {
            const c = n.page.borderBox.center;
            return yt(n.descriptor.id, i) ? Fe(c, i.displacedBy.point) : c;
          },
          $s = (n, i) => {
            const c = n.page.borderBox;
            return yt(n.descriptor.id, i) ? t(c, bt(i.displacedBy.point)) : c;
          };
        var _s = ({
            pageBorderBoxCenter: n,
            viewport: i,
            destination: c,
            insideDestination: u,
            afterCritical: d,
          }) =>
            u
              .filter((m) =>
                Ni({
                  target: $s(m, d),
                  destination: c,
                  viewport: i.frame,
                  withDroppableDisplacement: !0,
                }),
              )
              .sort((m, y) => {
                const _ = A(n, Ar(c, _a(m, d))),
                  I = A(n, Ar(c, _a(y, d)));
                return _ < I
                  ? -1
                  : I < _
                    ? 1
                    : m.descriptor.index - y.descriptor.index;
              })[0] || null,
          hn = ee(function (i, c) {
            const u = c[i.line];
            return { value: u, point: Qe(i.line, u) };
          });
        const Rr = (n, i, c) => {
            const u = n.axis;
            if (n.descriptor.mode === "virtual") return Qe(u.line, i[u.line]);
            const d = n.subject.page.contentBox[u.size],
              _ =
                Tt(n.descriptor.id, c).reduce(
                  (I, S) => I + S.client.marginBox[u.size],
                  0,
                ) +
                i[u.line] -
                d;
            return _ <= 0 ? null : Qe(u.line, _);
          },
          Zr = (n, i) => ({ ...n, scroll: { ...n.scroll, max: i } }),
          Ia = (n, i, c) => {
            const u = n.frame;
            Qt(i, n) && L(!1), n.subject.withPlaceholder && L(!1);
            const d = hn(n.axis, i.displaceBy).point,
              p = Rr(n, d, c),
              m = {
                placeholderSize: d,
                increasedBy: p,
                oldFrameMaxScroll: n.frame ? n.frame.scroll.max : null,
              };
            if (!u) {
              const S = Q({
                page: n.subject.page,
                withPlaceholder: m,
                axis: n.axis,
                frame: n.frame,
              });
              return { ...n, subject: S };
            }
            const y = p ? xe(u.scroll.max, p) : u.scroll.max,
              _ = Zr(u, y),
              I = Q({
                page: n.subject.page,
                withPlaceholder: m,
                axis: n.axis,
                frame: _,
              });
            return { ...n, subject: I, frame: _ };
          },
          Is = (n) => {
            const i = n.subject.withPlaceholder;
            i || L(!1);
            const c = n.frame;
            if (!c) {
              const m = Q({
                page: n.subject.page,
                axis: n.axis,
                frame: null,
                withPlaceholder: null,
              });
              return { ...n, subject: m };
            }
            const u = i.oldFrameMaxScroll;
            u || L(!1);
            const d = Zr(c, u),
              p = Q({
                page: n.subject.page,
                axis: n.axis,
                frame: d,
                withPlaceholder: null,
              });
            return { ...n, subject: p, frame: d };
          };
        var xs = ({
            previousPageBorderBoxCenter: n,
            moveRelativeTo: i,
            insideDestination: c,
            draggable: u,
            draggables: d,
            destination: p,
            viewport: m,
            afterCritical: y,
          }) => {
            if (!i) {
              if (c.length) return null;
              const $ = {
                  displaced: vn,
                  displacedBy: Di,
                  at: {
                    type: "REORDER",
                    destination: { droppableId: p.descriptor.id, index: 0 },
                  },
                },
                x = Tr({
                  impact: $,
                  draggable: u,
                  droppable: p,
                  draggables: d,
                  afterCritical: y,
                }),
                O = Qt(u, p) ? p : Ia(p, u, d);
              return Ci({
                draggable: u,
                destination: O,
                newPageBorderBoxCenter: x,
                viewport: m.frame,
                withDroppableDisplacement: !1,
                onlyOnMainAxis: !0,
              })
                ? $
                : null;
            }
            const _ = n[p.axis.line] <= i.page.borderBox.center[p.axis.line],
              I = (() => {
                const $ = i.descriptor.index;
                return i.descriptor.id === u.descriptor.id || _ ? $ : $ + 1;
              })(),
              S = hn(p.axis, u.displaceBy);
            return Hn({
              draggable: u,
              insideDestination: c,
              destination: p,
              viewport: m,
              displacedBy: S,
              last: vn,
              index: I,
            });
          },
          Ss = ({
            isMovingForward: n,
            previousPageBorderBoxCenter: i,
            draggable: c,
            isOver: u,
            draggables: d,
            droppables: p,
            viewport: m,
            afterCritical: y,
          }) => {
            const _ = $a({
              isMovingForward: n,
              pageBorderBoxCenter: i,
              source: u,
              droppables: p,
              viewport: m,
            });
            if (!_) return null;
            const I = Tt(_.descriptor.id, d),
              S = _s({
                pageBorderBoxCenter: i,
                viewport: m,
                destination: _,
                insideDestination: I,
                afterCritical: y,
              }),
              $ = xs({
                previousPageBorderBoxCenter: i,
                destination: _,
                draggable: c,
                draggables: d,
                moveRelativeTo: S,
                insideDestination: I,
                viewport: m,
                afterCritical: y,
              });
            if (!$) return null;
            const x = Tr({
              impact: $,
              draggable: c,
              droppable: _,
              draggables: d,
              afterCritical: y,
            });
            return {
              clientSelection: Xn({
                pageBorderBoxCenter: x,
                draggable: c,
                viewport: m,
              }),
              impact: $,
              scrollJumpRequest: null,
            };
          },
          tt = (n) => {
            const i = n.at;
            return i
              ? i.type === "REORDER"
                ? i.destination.droppableId
                : i.combine.droppableId
              : null;
          };
        const ks = (n, i) => {
          const c = tt(n);
          return c ? i[c] : null;
        };
        var ws = ({ state: n, type: i }) => {
          const c = ks(n.impact, n.dimensions.droppables),
            u = !!c,
            d = n.dimensions.droppables[n.critical.droppable.id],
            p = c || d,
            m = p.axis.direction,
            y =
              (m === "vertical" && (i === "MOVE_UP" || i === "MOVE_DOWN")) ||
              (m === "horizontal" && (i === "MOVE_LEFT" || i === "MOVE_RIGHT"));
          if (y && !u) return null;
          const _ = i === "MOVE_DOWN" || i === "MOVE_RIGHT",
            I = n.dimensions.draggables[n.critical.draggable.id],
            S = n.current.page.borderBoxCenter,
            { draggables: $, droppables: x } = n.dimensions;
          return y
            ? ya({
                isMovingForward: _,
                previousPageBorderBoxCenter: S,
                draggable: I,
                destination: p,
                draggables: $,
                viewport: n.viewport,
                previousClientSelection: n.current.client.selection,
                previousImpact: n.impact,
                afterCritical: n.afterCritical,
              })
            : Ss({
                isMovingForward: _,
                previousPageBorderBoxCenter: S,
                draggable: I,
                isOver: p,
                draggables: $,
                droppables: x,
                viewport: n.viewport,
                afterCritical: n.afterCritical,
              });
        };
        function tn(n) {
          return n.phase === "DRAGGING" || n.phase === "COLLECTING";
        }
        function xa(n) {
          const i = et(n.top, n.bottom),
            c = et(n.left, n.right);
          return function (d) {
            return i(d.y) && c(d.x);
          };
        }
        function Sa(n, i) {
          return (
            n.left < i.right &&
            n.right > i.left &&
            n.top < i.bottom &&
            n.bottom > i.top
          );
        }
        function ka({ pageBorderBox: n, draggable: i, candidates: c }) {
          const u = i.page.borderBox.center,
            d = c
              .map((p) => {
                const m = p.axis,
                  y = Qe(
                    p.axis.line,
                    n.center[m.line],
                    p.page.borderBox.center[m.crossAxisLine],
                  );
                return { id: p.descriptor.id, distance: A(u, y) };
              })
              .sort((p, m) => m.distance - p.distance);
          return d[0] ? d[0].id : null;
        }
        function zs({ pageBorderBox: n, draggable: i, droppables: c }) {
          const u = Me(c).filter((d) => {
            if (!d.isEnabled) return !1;
            const p = d.subject.active;
            if (!p || !Sa(n, p)) return !1;
            if (xa(p)(n.center)) return !0;
            const m = d.axis,
              y = p.center[m.crossAxisLine],
              _ = n[m.crossAxisStart],
              I = n[m.crossAxisEnd],
              S = et(p[m.crossAxisStart], p[m.crossAxisEnd]),
              $ = S(_),
              x = S(I);
            return !$ && !x ? !0 : $ ? _ < y : I > y;
          });
          return u.length
            ? u.length === 1
              ? u[0].descriptor.id
              : ka({ pageBorderBox: n, draggable: i, candidates: u })
            : null;
        }
        const Ri = (n, i) => (0, T.l)(t(n, i));
        var Zi = (n, i) => {
          const c = n.frame;
          return c ? Ri(i, c.scroll.diff.value) : i;
        };
        function Lr({ displaced: n, id: i }) {
          return !!(n.visible[i] || n.invisible[i]);
        }
        function wa({ draggable: n, closest: i, inHomeList: c }) {
          return i
            ? c && i.descriptor.index > n.descriptor.index
              ? i.descriptor.index - 1
              : i.descriptor.index
            : null;
        }
        var za = ({
          pageBorderBoxWithDroppableScroll: n,
          draggable: i,
          destination: c,
          insideDestination: u,
          last: d,
          viewport: p,
          afterCritical: m,
        }) => {
          const y = c.axis,
            _ = hn(c.axis, i.displaceBy),
            I = _.value,
            S = n[y.start],
            $ = n[y.end],
            O =
              Ct(i, u).find((F) => {
                const B = F.descriptor.id,
                  K = F.page.borderBox.center[y.line],
                  X = yt(B, m),
                  re = Lr({ displaced: d, id: B });
                return X ? (re ? $ <= K : S < K - I) : re ? $ <= K + I : S < K;
              }) || null,
            Z = wa({ draggable: i, closest: O, inHomeList: Qt(i, c) });
          return Hn({
            draggable: i,
            insideDestination: u,
            destination: c,
            viewport: p,
            last: d,
            displacedBy: _,
            index: Z,
          });
        };
        const Da = 4;
        var Li = ({
            draggable: n,
            pageBorderBoxWithDroppableScroll: i,
            previousImpact: c,
            destination: u,
            insideDestination: d,
            afterCritical: p,
          }) => {
            if (!u.isCombineEnabled) return null;
            const m = u.axis,
              y = hn(u.axis, n.displaceBy),
              _ = y.value,
              I = i[m.start],
              S = i[m.end],
              x = Ct(n, d).find((Z) => {
                const F = Z.descriptor.id,
                  B = Z.page.borderBox,
                  X = B[m.size] / Da,
                  re = yt(F, p),
                  Y = Lr({ displaced: c.displaced, id: F });
                return re
                  ? Y
                    ? S > B[m.start] + X && S < B[m.end] - X
                    : I > B[m.start] - _ + X && I < B[m.end] - _ - X
                  : Y
                    ? S > B[m.start] + _ + X && S < B[m.end] + _ - X
                    : I > B[m.start] + X && I < B[m.end] - X;
              });
            return x
              ? {
                  displacedBy: y,
                  displaced: c.displaced,
                  at: {
                    type: "COMBINE",
                    combine: {
                      draggableId: x.descriptor.id,
                      droppableId: u.descriptor.id,
                    },
                  },
                }
              : null;
          },
          Bi = ({
            pageOffset: n,
            draggable: i,
            draggables: c,
            droppables: u,
            previousImpact: d,
            viewport: p,
            afterCritical: m,
          }) => {
            const y = Ri(i.page.borderBox, n),
              _ = zs({ pageBorderBox: y, draggable: i, droppables: u });
            if (!_) return ta;
            const I = u[_],
              S = Tt(I.descriptor.id, c),
              $ = Zi(I, y);
            return (
              Li({
                pageBorderBoxWithDroppableScroll: $,
                draggable: i,
                previousImpact: d,
                destination: I,
                insideDestination: S,
                afterCritical: m,
              }) ||
              za({
                pageBorderBoxWithDroppableScroll: $,
                draggable: i,
                destination: I,
                insideDestination: S,
                last: d.displaced,
                viewport: p,
                afterCritical: m,
              })
            );
          },
          Br = (n, i) => ({ ...n, [i.descriptor.id]: i });
        const Fi = ({ previousImpact: n, impact: i, droppables: c }) => {
          const u = tt(n),
            d = tt(i);
          if (!u || u === d) return c;
          const p = c[u];
          if (!p.subject.withPlaceholder) return c;
          const m = Is(p);
          return Br(c, m);
        };
        var Ds = ({
            draggable: n,
            draggables: i,
            droppables: c,
            previousImpact: u,
            impact: d,
          }) => {
            const p = Fi({ previousImpact: u, impact: d, droppables: c }),
              m = tt(d);
            if (!m) return p;
            const y = c[m];
            if (Qt(n, y) || y.subject.withPlaceholder) return p;
            const _ = Ia(y, n, i);
            return Br(p, _);
          },
          bn = ({
            state: n,
            clientSelection: i,
            dimensions: c,
            viewport: u,
            impact: d,
            scrollJumpRequest: p,
          }) => {
            const m = u || n.viewport,
              y = c || n.dimensions,
              _ = i || n.current.client.selection,
              I = Fe(_, n.initial.client.selection),
              S = {
                offset: I,
                selection: _,
                borderBoxCenter: xe(n.initial.client.borderBoxCenter, I),
              },
              $ = {
                selection: xe(S.selection, m.scroll.current),
                borderBoxCenter: xe(S.borderBoxCenter, m.scroll.current),
                offset: xe(S.offset, m.scroll.diff.value),
              },
              x = { client: S, page: $ };
            if (n.phase === "COLLECTING")
              return { ...n, dimensions: y, viewport: m, current: x };
            const O = y.draggables[n.critical.draggable.id],
              Z =
                d ||
                Bi({
                  pageOffset: $.offset,
                  draggable: O,
                  draggables: y.draggables,
                  droppables: y.droppables,
                  previousImpact: n.impact,
                  viewport: m,
                  afterCritical: n.afterCritical,
                }),
              F = Ds({
                draggable: O,
                impact: Z,
                previousImpact: n.impact,
                draggables: y.draggables,
                droppables: y.droppables,
              });
            return {
              ...n,
              current: x,
              dimensions: { draggables: y.draggables, droppables: F },
              impact: Z,
              viewport: m,
              scrollJumpRequest: p || null,
              forceShouldAnimate: p ? !1 : null,
            };
          };
        function Ps(n, i) {
          return n.map((c) => i[c]);
        }
        var Gi = ({
            impact: n,
            viewport: i,
            draggables: c,
            destination: u,
            forceShouldAnimate: d,
          }) => {
            const p = n.displaced,
              m = Ps(p.all, c),
              y = en({
                afterDragging: m,
                destination: u,
                displacedBy: n.displacedBy,
                viewport: i.frame,
                forceShouldAnimate: d,
                last: p,
              });
            return { ...n, displaced: y };
          },
          yn = ({
            impact: n,
            draggable: i,
            droppable: c,
            draggables: u,
            viewport: d,
            afterCritical: p,
          }) => {
            const m = Tr({
              impact: n,
              draggable: i,
              draggables: u,
              droppable: c,
              afterCritical: p,
            });
            return Xn({ pageBorderBoxCenter: m, draggable: i, viewport: d });
          },
          Fr = ({ state: n, dimensions: i, viewport: c }) => {
            n.movementMode !== "SNAP" && L(!1);
            const u = n.impact,
              d = c || n.viewport,
              p = i || n.dimensions,
              { draggables: m, droppables: y } = p,
              _ = m[n.critical.draggable.id],
              I = tt(u);
            I || L(!1);
            const S = y[I],
              $ = Gi({ impact: u, viewport: d, destination: S, draggables: m }),
              x = yn({
                impact: $,
                draggable: _,
                droppable: S,
                draggables: m,
                viewport: d,
                afterCritical: n.afterCritical,
              });
            return bn({
              impact: $,
              clientSelection: x,
              state: n,
              dimensions: p,
              viewport: d,
            });
          },
          Yn = (n) => ({ index: n.index, droppableId: n.droppableId }),
          $n = ({ draggable: n, home: i, draggables: c, viewport: u }) => {
            const d = hn(i.axis, n.displaceBy),
              p = Tt(i.descriptor.id, c),
              m = p.indexOf(n);
            m === -1 && L(!1);
            const y = p.slice(m + 1),
              _ = y.reduce((x, O) => ((x[O.descriptor.id] = !0), x), {}),
              I = {
                inVirtualList: i.descriptor.mode === "virtual",
                displacedBy: d,
                effected: _,
              };
            return {
              impact: {
                displaced: en({
                  afterDragging: y,
                  destination: i,
                  displacedBy: d,
                  last: null,
                  viewport: u.frame,
                  forceShouldAnimate: !1,
                }),
                displacedBy: d,
                at: { type: "REORDER", destination: Yn(n.descriptor) },
              },
              afterCritical: I,
            };
          },
          Os = (n, i) => ({
            draggables: n.draggables,
            droppables: Br(n.droppables, i),
          });
        const _n = (n) => {},
          nn = (n) => {};
        var Ns = ({ draggable: n, offset: i, initialWindowScroll: c }) => {
            const u = (0, T.cY)(n.client, i),
              d = (0, T.SQ)(u, c);
            return {
              ...n,
              placeholder: { ...n.placeholder, client: u },
              client: u,
              page: d,
            };
          },
          js = (n) => {
            const i = n.frame;
            return i || L(!1), i;
          },
          Es = ({ additions: n, updatedDroppables: i, viewport: c }) => {
            const u = c.scroll.diff.value;
            return n.map((d) => {
              const p = d.descriptor.droppableId,
                m = i[p],
                _ = js(m).scroll.diff.value,
                I = xe(u, _);
              return Ns({
                draggable: d,
                offset: I,
                initialWindowScroll: c.scroll.initial,
              });
            });
          };
        const Us = "Processing dynamic changes";
        var Pa = ({ state: n, published: i }) => {
          _n();
          const c = i.modified.map((K) => {
              const X = n.dimensions.droppables[K.droppableId];
              return he(X, K.scroll);
            }),
            u = { ...n.dimensions.droppables, ...Ge(c) },
            d = Te(
              Es({
                additions: i.additions,
                updatedDroppables: u,
                viewport: n.viewport,
              }),
            ),
            p = { ...n.dimensions.draggables, ...d };
          i.removals.forEach((K) => {
            delete p[K];
          });
          const m = { droppables: u, draggables: p },
            y = tt(n.impact),
            _ = y ? m.droppables[y] : null,
            I = m.draggables[n.critical.draggable.id],
            S = m.droppables[n.critical.droppable.id],
            { impact: $, afterCritical: x } = $n({
              draggable: I,
              home: S,
              draggables: p,
              viewport: n.viewport,
            }),
            O = _ && _.isCombineEnabled ? n.impact : $,
            Z = Bi({
              pageOffset: n.current.page.offset,
              draggable: m.draggables[n.critical.draggable.id],
              draggables: m.draggables,
              droppables: m.droppables,
              previousImpact: O,
              viewport: n.viewport,
              afterCritical: x,
            });
          nn(Us);
          const F = {
            ...n,
            phase: "DRAGGING",
            impact: Z,
            onLiftImpact: $,
            dimensions: m,
            afterCritical: x,
            forceShouldAnimate: !1,
          };
          return n.phase === "COLLECTING"
            ? F
            : { ...F, phase: "DROP_PENDING", reason: n.reason, isWaiting: !1 };
        };
        const Qn = (n) => n.movementMode === "SNAP",
          er = (n, i, c) => {
            const u = Os(n.dimensions, i);
            return !Qn(n) || c
              ? bn({ state: n, dimensions: u })
              : Fr({ state: n, dimensions: u });
          };
        function Mi(n) {
          return n.isDragging && n.movementMode === "SNAP"
            ? { ...n, scrollJumpRequest: null }
            : n;
        }
        const Oa = { phase: "IDLE", completed: null, shouldFlush: !1 };
        var Na = (n = Oa, i) => {
          if (i.type === "FLUSH") return { ...Oa, shouldFlush: !0 };
          if (i.type === "INITIAL_PUBLISH") {
            n.phase !== "IDLE" && L(!1);
            const {
                critical: c,
                clientSelection: u,
                viewport: d,
                dimensions: p,
                movementMode: m,
              } = i.payload,
              y = p.draggables[c.draggable.id],
              _ = p.droppables[c.droppable.id],
              I = {
                selection: u,
                borderBoxCenter: y.client.borderBox.center,
                offset: we,
              },
              S = {
                client: I,
                page: {
                  selection: xe(I.selection, d.scroll.initial),
                  borderBoxCenter: xe(I.selection, d.scroll.initial),
                  offset: xe(I.selection, d.scroll.diff.value),
                },
              },
              $ = Me(p.droppables).every((F) => !F.isFixedOnPage),
              { impact: x, afterCritical: O } = $n({
                draggable: y,
                home: _,
                draggables: p.draggables,
                viewport: d,
              });
            return {
              phase: "DRAGGING",
              isDragging: !0,
              critical: c,
              movementMode: m,
              dimensions: p,
              initial: S,
              current: S,
              isWindowScrollAllowed: $,
              impact: x,
              afterCritical: O,
              onLiftImpact: x,
              viewport: d,
              scrollJumpRequest: null,
              forceShouldAnimate: null,
            };
          }
          if (i.type === "COLLECTION_STARTING")
            return n.phase === "COLLECTING" || n.phase === "DROP_PENDING"
              ? n
              : (n.phase !== "DRAGGING" && L(!1),
                { ...n, phase: "COLLECTING" });
          if (i.type === "PUBLISH_WHILE_DRAGGING")
            return (
              n.phase === "COLLECTING" || n.phase === "DROP_PENDING" || L(!1),
              Pa({ state: n, published: i.payload })
            );
          if (i.type === "MOVE") {
            if (n.phase === "DROP_PENDING") return n;
            tn(n) || L(!1);
            const { client: c } = i.payload;
            return He(c, n.current.client.selection)
              ? n
              : bn({
                  state: n,
                  clientSelection: c,
                  impact: Qn(n) ? n.impact : null,
                });
          }
          if (i.type === "UPDATE_DROPPABLE_SCROLL") {
            if (n.phase === "DROP_PENDING" || n.phase === "COLLECTING")
              return Mi(n);
            tn(n) || L(!1);
            const { id: c, newScroll: u } = i.payload,
              d = n.dimensions.droppables[c];
            if (!d) return n;
            const p = he(d, u);
            return er(n, p, !1);
          }
          if (i.type === "UPDATE_DROPPABLE_IS_ENABLED") {
            if (n.phase === "DROP_PENDING") return n;
            tn(n) || L(!1);
            const { id: c, isEnabled: u } = i.payload,
              d = n.dimensions.droppables[c];
            d || L(!1), d.isEnabled === u && L(!1);
            const p = { ...d, isEnabled: u };
            return er(n, p, !0);
          }
          if (i.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
            if (n.phase === "DROP_PENDING") return n;
            tn(n) || L(!1);
            const { id: c, isCombineEnabled: u } = i.payload,
              d = n.dimensions.droppables[c];
            d || L(!1), d.isCombineEnabled === u && L(!1);
            const p = { ...d, isCombineEnabled: u };
            return er(n, p, !0);
          }
          if (i.type === "MOVE_BY_WINDOW_SCROLL") {
            if (n.phase === "DROP_PENDING" || n.phase === "DROP_ANIMATING")
              return n;
            tn(n) || L(!1), n.isWindowScrollAllowed || L(!1);
            const c = i.payload.newScroll;
            if (He(n.viewport.scroll.current, c)) return Mi(n);
            const u = Ai(n.viewport, c);
            return Qn(n)
              ? Fr({ state: n, viewport: u })
              : bn({ state: n, viewport: u });
          }
          if (i.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
            if (!tn(n)) return n;
            const c = i.payload.maxScroll;
            if (He(c, n.viewport.scroll.max)) return n;
            const u = {
              ...n.viewport,
              scroll: { ...n.viewport.scroll, max: c },
            };
            return { ...n, viewport: u };
          }
          if (
            i.type === "MOVE_UP" ||
            i.type === "MOVE_DOWN" ||
            i.type === "MOVE_LEFT" ||
            i.type === "MOVE_RIGHT"
          ) {
            if (n.phase === "COLLECTING" || n.phase === "DROP_PENDING")
              return n;
            n.phase !== "DRAGGING" && L(!1);
            const c = ws({ state: n, type: i.type });
            return c
              ? bn({
                  state: n,
                  impact: c.impact,
                  clientSelection: c.clientSelection,
                  scrollJumpRequest: c.scrollJumpRequest,
                })
              : n;
          }
          if (i.type === "DROP_PENDING") {
            const c = i.payload.reason;
            return (
              n.phase !== "COLLECTING" && L(!1),
              { ...n, phase: "DROP_PENDING", isWaiting: !0, reason: c }
            );
          }
          if (i.type === "DROP_ANIMATE") {
            const {
              completed: c,
              dropDuration: u,
              newHomeClientOffset: d,
            } = i.payload;
            return (
              n.phase === "DRAGGING" || n.phase === "DROP_PENDING" || L(!1),
              {
                phase: "DROP_ANIMATING",
                completed: c,
                dropDuration: u,
                newHomeClientOffset: d,
                dimensions: n.dimensions,
              }
            );
          }
          if (i.type === "DROP_COMPLETE") {
            const { completed: c } = i.payload;
            return { phase: "IDLE", completed: c, shouldFlush: !1 };
          }
          return n;
        };
        const ja = (n) => ({ type: "BEFORE_INITIAL_CAPTURE", payload: n }),
          ut = (n) => ({ type: "LIFT", payload: n }),
          Ea = (n) => ({ type: "INITIAL_PUBLISH", payload: n }),
          Ua = (n) => ({ type: "PUBLISH_WHILE_DRAGGING", payload: n }),
          Aa = () => ({ type: "COLLECTION_STARTING", payload: null }),
          Wi = (n) => ({ type: "UPDATE_DROPPABLE_SCROLL", payload: n }),
          Ta = (n) => ({ type: "UPDATE_DROPPABLE_IS_ENABLED", payload: n }),
          Ca = (n) => ({
            type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
            payload: n,
          }),
          Ji = (n) => ({ type: "MOVE", payload: n }),
          Ra = (n) => ({ type: "MOVE_BY_WINDOW_SCROLL", payload: n }),
          Za = (n) => ({ type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: n }),
          La = () => ({ type: "MOVE_UP", payload: null }),
          Ba = () => ({ type: "MOVE_DOWN", payload: null }),
          Fa = () => ({ type: "MOVE_RIGHT", payload: null }),
          Ga = () => ({ type: "MOVE_LEFT", payload: null }),
          Gr = () => ({ type: "FLUSH", payload: null }),
          Ma = (n) => ({ type: "DROP_ANIMATE", payload: n }),
          Mr = (n) => ({ type: "DROP_COMPLETE", payload: n }),
          Vi = (n) => ({ type: "DROP", payload: n }),
          Wa = (n) => ({ type: "DROP_PENDING", payload: n }),
          Ja = () => ({ type: "DROP_ANIMATION_FINISHED", payload: null });
        function As(n) {
          if (n.length <= 1) return;
          const i = n.map((d) => d.descriptor.index),
            c = {};
          for (let d = 1; d < i.length; d++) {
            const p = i[d],
              m = i[d - 1];
            p !== m + 1 && (c[p] = !0);
          }
          if (!Object.keys(c).length) return;
          const u = i
            .map((d) => (!!c[d] ? `[\u{1F525}${d}]` : `${d}`))
            .join(", ");
        }
        function Ts(n, i) {}
        var Va =
            (n) =>
            ({ getState: i, dispatch: c }) =>
            (u) =>
            (d) => {
              if (d.type !== "LIFT") {
                u(d);
                return;
              }
              const { id: p, clientSelection: m, movementMode: y } = d.payload,
                _ = i();
              _.phase === "DROP_ANIMATING" && c(Mr({ completed: _.completed })),
                i().phase !== "IDLE" && L(!1),
                c(Gr()),
                c(ja({ draggableId: p, movementMode: y }));
              const S = {
                  draggableId: p,
                  scrollOptions: { shouldPublishImmediately: y === "SNAP" },
                },
                {
                  critical: $,
                  dimensions: x,
                  viewport: O,
                } = n.startPublishing(S);
              c(
                Ea({
                  critical: $,
                  dimensions: x,
                  clientSelection: m,
                  movementMode: y,
                  viewport: O,
                }),
              );
            },
          Ka = (n) => () => (i) => (c) => {
            c.type === "INITIAL_PUBLISH" && n.dragging(),
              c.type === "DROP_ANIMATE" &&
                n.dropping(c.payload.completed.result.reason),
              (c.type === "FLUSH" || c.type === "DROP_COMPLETE") && n.resting(),
              i(c);
          };
        const Wr = {
            outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
            drop: "cubic-bezier(.2,1,.1,1)",
          },
          In = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
          Ha = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
          Rt = `${Ha.outOfTheWay}s ${Wr.outOfTheWay}`,
          xn = {
            fluid: `opacity ${Rt}`,
            snap: `transform ${Rt}, opacity ${Rt}`,
            drop: (n) => {
              const i = `${n}s ${Wr.drop}`;
              return `transform ${i}, opacity ${i}`;
            },
            outOfTheWay: `transform ${Rt}`,
            placeholder: `height ${Rt}, width ${Rt}, margin ${Rt}`,
          },
          Ki = (n) => (He(n, we) ? void 0 : `translate(${n.x}px, ${n.y}px)`),
          Jr = {
            moveTo: Ki,
            drop: (n, i) => {
              const c = Ki(n);
              if (c) return i ? `${c} scale(${In.scale.drop})` : c;
            },
          },
          { minDropTime: Vr, maxDropTime: Hi } = Ha,
          qa = Hi - Vr,
          Xa = 1500,
          Cs = 0.6;
        var Rs = ({ current: n, destination: i, reason: c }) => {
            const u = A(n, i);
            if (u <= 0) return Vr;
            if (u >= Xa) return Hi;
            const d = u / Xa,
              p = Vr + qa * d,
              m = c === "CANCEL" ? p * Cs : p;
            return Number(m.toFixed(2));
          },
          Zs = ({
            impact: n,
            draggable: i,
            dimensions: c,
            viewport: u,
            afterCritical: d,
          }) => {
            const { draggables: p, droppables: m } = c,
              y = tt(n),
              _ = y ? m[y] : null,
              I = m[i.descriptor.droppableId],
              S = yn({
                impact: n,
                draggable: i,
                draggables: p,
                afterCritical: d,
                droppable: _ || I,
                viewport: u,
              });
            return Fe(S, i.client.borderBox.center);
          },
          Ls = ({
            draggables: n,
            reason: i,
            lastImpact: c,
            home: u,
            viewport: d,
            onLiftImpact: p,
          }) =>
            !c.at || i !== "DROP"
              ? {
                  impact: Gi({
                    draggables: n,
                    impact: p,
                    destination: u,
                    viewport: d,
                    forceShouldAnimate: !0,
                  }),
                  didDropInsideDroppable: !1,
                }
              : c.at.type === "REORDER"
                ? { impact: c, didDropInsideDroppable: !0 }
                : {
                    impact: { ...c, displaced: vn },
                    didDropInsideDroppable: !0,
                  },
          Fs =
            ({ getState: n, dispatch: i }) =>
            (c) =>
            (u) => {
              if (u.type !== "DROP") {
                c(u);
                return;
              }
              const d = n(),
                p = u.payload.reason;
              if (d.phase === "COLLECTING") {
                i(Wa({ reason: p }));
                return;
              }
              if (d.phase === "IDLE") return;
              d.phase === "DROP_PENDING" && d.isWaiting && L(!1),
                d.phase === "DRAGGING" || d.phase === "DROP_PENDING" || L(!1);
              const y = d.critical,
                _ = d.dimensions,
                I = _.draggables[d.critical.draggable.id],
                { impact: S, didDropInsideDroppable: $ } = Ls({
                  reason: p,
                  lastImpact: d.impact,
                  afterCritical: d.afterCritical,
                  onLiftImpact: d.onLiftImpact,
                  home: d.dimensions.droppables[d.critical.droppable.id],
                  viewport: d.viewport,
                  draggables: d.dimensions.draggables,
                }),
                x = $ ? Nr(S) : null,
                O = $ ? fe(S) : null,
                Z = { index: y.draggable.index, droppableId: y.droppable.id },
                F = {
                  draggableId: I.descriptor.id,
                  type: I.descriptor.type,
                  source: Z,
                  reason: p,
                  mode: d.movementMode,
                  destination: x,
                  combine: O,
                },
                B = Zs({
                  impact: S,
                  draggable: I,
                  dimensions: _,
                  viewport: d.viewport,
                  afterCritical: d.afterCritical,
                }),
                K = {
                  critical: d.critical,
                  afterCritical: d.afterCritical,
                  result: F,
                  impact: S,
                };
              if (!(!He(d.current.client.offset, B) || !!F.combine)) {
                i(Mr({ completed: K }));
                return;
              }
              const re = Rs({
                current: d.current.client.offset,
                destination: B,
                reason: p,
              });
              i(Ma({ newHomeClientOffset: B, dropDuration: re, completed: K }));
            },
          qi = () => ({ x: window.pageXOffset, y: window.pageYOffset });
        function Gs(n) {
          return {
            eventName: "scroll",
            options: { passive: !0, capture: !1 },
            fn: (i) => {
              (i.target !== window && i.target !== window.document) || n();
            },
          };
        }
        function Ms({ onWindowScroll: n }) {
          function i() {
            n(qi());
          }
          const c = (0, Ye.A)(i),
            u = Gs(c);
          let d = it;
          function p() {
            return d !== it;
          }
          function m() {
            p() && L(!1), (d = Be(window, [u]));
          }
          function y() {
            p() || L(!1), c.cancel(), d(), (d = it);
          }
          return { start: m, stop: y, isActive: p };
        }
        const Ws = (n) =>
          n.type === "DROP_COMPLETE" ||
          n.type === "DROP_ANIMATE" ||
          n.type === "FLUSH";
        var Js = (n) => {
            const i = Ms({
              onWindowScroll: (c) => {
                n.dispatch(Ra({ newScroll: c }));
              },
            });
            return (c) => (u) => {
              !i.isActive() && u.type === "INITIAL_PUBLISH" && i.start(),
                i.isActive() && Ws(u) && i.stop(),
                c(u);
            };
          },
          Vs = (n) => {
            let i = !1,
              c = !1;
            const u = setTimeout(() => {
                c = !0;
              }),
              d = (p) => {
                i || c || ((i = !0), n(p), clearTimeout(u));
              };
            return (d.wasCalled = () => i), d;
          },
          Ya = () => {
            const n = [],
              i = (d) => {
                const p = n.findIndex((y) => y.timerId === d);
                p === -1 && L(!1);
                const [m] = n.splice(p, 1);
                m.callback();
              };
            return {
              add: (d) => {
                const p = setTimeout(() => i(p)),
                  m = { timerId: p, callback: d };
                n.push(m);
              },
              flush: () => {
                if (!n.length) return;
                const d = [...n];
                (n.length = 0),
                  d.forEach((p) => {
                    clearTimeout(p.timerId), p.callback();
                  });
              },
            };
          };
        const Qa = (n, i) =>
            n == null && i == null
              ? !0
              : n == null || i == null
                ? !1
                : n.droppableId === i.droppableId && n.index === i.index,
          Ks = (n, i) =>
            n == null && i == null
              ? !0
              : n == null || i == null
                ? !1
                : n.draggableId === i.draggableId &&
                  n.droppableId === i.droppableId,
          Hs = (n, i) => {
            if (n === i) return !0;
            const c =
                n.draggable.id === i.draggable.id &&
                n.draggable.droppableId === i.draggable.droppableId &&
                n.draggable.type === i.draggable.type &&
                n.draggable.index === i.draggable.index,
              u =
                n.droppable.id === i.droppable.id &&
                n.droppable.type === i.droppable.type;
            return c && u;
          },
          Sn = (n, i) => {
            _n(), i(), nn();
          },
          Kr = (n, i) => ({
            draggableId: n.draggable.id,
            type: n.droppable.type,
            source: { droppableId: n.droppable.id, index: n.draggable.index },
            mode: i,
          });
        function Zt(n, i, c, u) {
          if (!n) {
            c(u(i));
            return;
          }
          const d = Vs(c);
          n(i, { announce: d }), d.wasCalled() || c(u(i));
        }
        var $t = (n, i) => {
            const c = Ya();
            let u = null;
            const d = ($, x) => {
                u && L(!1),
                  Sn("onBeforeCapture", () => {
                    const O = n().onBeforeCapture;
                    O && O({ draggableId: $, mode: x });
                  });
              },
              p = ($, x) => {
                u && L(!1),
                  Sn("onBeforeDragStart", () => {
                    const O = n().onBeforeDragStart;
                    O && O(Kr($, x));
                  });
              },
              m = ($, x) => {
                u && L(!1);
                const O = Kr($, x);
                (u = {
                  mode: x,
                  lastCritical: $,
                  lastLocation: O.source,
                  lastCombine: null,
                }),
                  c.add(() => {
                    Sn("onDragStart", () =>
                      Zt(n().onDragStart, O, i, lt.onDragStart),
                    );
                  });
              },
              y = ($, x) => {
                const O = Nr(x),
                  Z = fe(x);
                u || L(!1);
                const F = !Hs($, u.lastCritical);
                F && (u.lastCritical = $);
                const B = !Qa(u.lastLocation, O);
                B && (u.lastLocation = O);
                const K = !Ks(u.lastCombine, Z);
                if ((K && (u.lastCombine = Z), !F && !B && !K)) return;
                const X = { ...Kr($, u.mode), combine: Z, destination: O };
                c.add(() => {
                  Sn("onDragUpdate", () =>
                    Zt(n().onDragUpdate, X, i, lt.onDragUpdate),
                  );
                });
              },
              _ = () => {
                u || L(!1), c.flush();
              },
              I = ($) => {
                u || L(!1),
                  (u = null),
                  Sn("onDragEnd", () => Zt(n().onDragEnd, $, i, lt.onDragEnd));
              };
            return {
              beforeCapture: d,
              beforeStart: p,
              start: m,
              update: y,
              flush: _,
              drop: I,
              abort: () => {
                if (!u) return;
                const $ = {
                  ...Kr(u.lastCritical, u.mode),
                  combine: null,
                  destination: null,
                  reason: "CANCEL",
                };
                I($);
              },
            };
          },
          kn = (n, i) => {
            const c = $t(n, i);
            return (u) => (d) => (p) => {
              if (p.type === "BEFORE_INITIAL_CAPTURE") {
                c.beforeCapture(p.payload.draggableId, p.payload.movementMode);
                return;
              }
              if (p.type === "INITIAL_PUBLISH") {
                const y = p.payload.critical;
                c.beforeStart(y, p.payload.movementMode),
                  d(p),
                  c.start(y, p.payload.movementMode);
                return;
              }
              if (p.type === "DROP_COMPLETE") {
                const y = p.payload.completed.result;
                c.flush(), d(p), c.drop(y);
                return;
              }
              if ((d(p), p.type === "FLUSH")) {
                c.abort();
                return;
              }
              const m = u.getState();
              m.phase === "DRAGGING" && c.update(m.critical, m.impact);
            };
          },
          qs = (n) => (i) => (c) => {
            if (c.type !== "DROP_ANIMATION_FINISHED") {
              i(c);
              return;
            }
            const u = n.getState();
            u.phase !== "DROP_ANIMATING" && L(!1),
              n.dispatch(Mr({ completed: u.completed }));
          },
          Xs = (n) => {
            let i = null,
              c = null;
            function u() {
              c && (cancelAnimationFrame(c), (c = null)),
                i && (i(), (i = null));
            }
            return (d) => (p) => {
              if (
                ((p.type === "FLUSH" ||
                  p.type === "DROP_COMPLETE" ||
                  p.type === "DROP_ANIMATION_FINISHED") &&
                  u(),
                d(p),
                p.type !== "DROP_ANIMATE")
              )
                return;
              const m = {
                eventName: "scroll",
                options: { capture: !0, passive: !1, once: !0 },
                fn: function () {
                  n.getState().phase === "DROP_ANIMATING" && n.dispatch(Ja());
                },
              };
              c = requestAnimationFrame(() => {
                (c = null), (i = Be(window, [m]));
              });
            };
          },
          Ys = (n) => () => (i) => (c) => {
            (c.type === "DROP_COMPLETE" ||
              c.type === "FLUSH" ||
              c.type === "DROP_ANIMATE") &&
              n.stopPublishing(),
              i(c);
          },
          Hr = (n) => {
            let i = !1;
            return () => (c) => (u) => {
              if (u.type === "INITIAL_PUBLISH") {
                (i = !0),
                  n.tryRecordFocus(u.payload.critical.draggable.id),
                  c(u),
                  n.tryRestoreFocusRecorded();
                return;
              }
              if ((c(u), !!i)) {
                if (u.type === "FLUSH") {
                  (i = !1), n.tryRestoreFocusRecorded();
                  return;
                }
                if (u.type === "DROP_COMPLETE") {
                  i = !1;
                  const d = u.payload.completed.result;
                  d.combine &&
                    n.tryShiftRecord(d.draggableId, d.combine.draggableId),
                    n.tryRestoreFocusRecorded();
                }
              }
            };
          };
        const Qs = (n) =>
          n.type === "DROP_COMPLETE" ||
          n.type === "DROP_ANIMATE" ||
          n.type === "FLUSH";
        var el = (n) => (i) => (c) => (u) => {
            if (Qs(u)) {
              n.stop(), c(u);
              return;
            }
            if (u.type === "INITIAL_PUBLISH") {
              c(u);
              const d = i.getState();
              d.phase !== "DRAGGING" && L(!1), n.start(d);
              return;
            }
            c(u), n.scroll(i.getState());
          },
          Xi = (n) => (i) => (c) => {
            if ((i(c), c.type !== "PUBLISH_WHILE_DRAGGING")) return;
            const u = n.getState();
            u.phase === "DROP_PENDING" &&
              (u.isWaiting || n.dispatch(Vi({ reason: u.reason })));
          };
        const tr = j.Zz;
        var Yi = ({
          dimensionMarshal: n,
          focusMarshal: i,
          styleMarshal: c,
          getResponders: u,
          announce: d,
          autoScroller: p,
        }) =>
          (0, j.y$)(
            Na,
            tr(
              (0, j.Tw)(
                Ka(c),
                Ys(n),
                Va(n),
                Fs,
                qs,
                Xs,
                Xi,
                el(p),
                Js,
                Hr(i),
                kn(u, d),
              ),
            ),
          );
        const qr = () => ({ additions: {}, removals: {}, modified: {} });
        function ec({ registry: n, callbacks: i }) {
          let c = qr(),
            u = null;
          const d = () => {
            u ||
              (i.collectionStarting(),
              (u = requestAnimationFrame(() => {
                (u = null), _n();
                const { additions: _, removals: I, modified: S } = c,
                  $ = Object.keys(_)
                    .map((Z) => n.draggable.getById(Z).getDimension(we))
                    .sort((Z, F) => Z.descriptor.index - F.descriptor.index),
                  x = Object.keys(S).map((Z) => {
                    const B = n.droppable
                      .getById(Z)
                      .callbacks.getScrollWhileDragging();
                    return { droppableId: Z, scroll: B };
                  }),
                  O = { additions: $, removals: Object.keys(I), modified: x };
                (c = qr()), nn(), i.publish(O);
              })));
          };
          return {
            add: (_) => {
              const I = _.descriptor.id;
              (c.additions[I] = _),
                (c.modified[_.descriptor.droppableId] = !0),
                c.removals[I] && delete c.removals[I],
                d();
            },
            remove: (_) => {
              const I = _.descriptor;
              (c.removals[I.id] = !0),
                (c.modified[I.droppableId] = !0),
                c.additions[I.id] && delete c.additions[I.id],
                d();
            },
            stop: () => {
              u && (cancelAnimationFrame(u), (u = null), (c = qr()));
            },
          };
        }
        var Qi = ({ scrollHeight: n, scrollWidth: i, height: c, width: u }) => {
            const d = Fe({ x: i, y: n }, { x: u, y: c });
            return { x: Math.max(0, d.x), y: Math.max(0, d.y) };
          },
          eo = () => {
            const n = document.documentElement;
            return n || L(!1), n;
          },
          to = () => {
            const n = eo();
            return Qi({
              scrollHeight: n.scrollHeight,
              scrollWidth: n.scrollWidth,
              width: n.clientWidth,
              height: n.clientHeight,
            });
          },
          tc = () => {
            const n = qi(),
              i = to(),
              c = n.y,
              u = n.x,
              d = eo(),
              p = d.clientWidth,
              m = d.clientHeight,
              y = u + p,
              _ = c + m;
            return {
              frame: (0, T.l)({ top: c, left: u, right: y, bottom: _ }),
              scroll: {
                initial: n,
                current: n,
                max: i,
                diff: { value: we, displacement: we },
              },
            };
          },
          tl = ({ critical: n, scrollOptions: i, registry: c }) => {
            _n();
            const u = tc(),
              d = u.scroll.current,
              p = n.droppable,
              m = c.droppable
                .getAllByType(p.type)
                .map((S) => S.callbacks.getDimensionAndWatchScroll(d, i)),
              y = c.draggable
                .getAllByType(n.draggable.type)
                .map((S) => S.getDimension(d)),
              _ = { draggables: Te(y), droppables: Ge(m) };
            return nn(), { dimensions: _, critical: n, viewport: u };
          };
        function nc(n, i, c) {
          return !(
            c.descriptor.id === i.id ||
            c.descriptor.type !== i.type ||
            n.droppable.getById(c.descriptor.droppableId).descriptor.mode !==
              "virtual"
          );
        }
        var rn = (n, i) => {
            let c = null;
            const u = ec({
                callbacks: {
                  publish: i.publishWhileDragging,
                  collectionStarting: i.collectionStarting,
                },
                registry: n,
              }),
              d = (x, O) => {
                n.droppable.exists(x) || L(!1),
                  c && i.updateDroppableIsEnabled({ id: x, isEnabled: O });
              },
              p = (x, O) => {
                c &&
                  (n.droppable.exists(x) || L(!1),
                  i.updateDroppableIsCombineEnabled({
                    id: x,
                    isCombineEnabled: O,
                  }));
              },
              m = (x, O) => {
                c &&
                  (n.droppable.exists(x) || L(!1),
                  i.updateDroppableScroll({ id: x, newScroll: O }));
              },
              y = (x, O) => {
                c && n.droppable.getById(x).callbacks.scroll(O);
              },
              _ = () => {
                if (!c) return;
                u.stop();
                const x = c.critical.droppable;
                n.droppable
                  .getAllByType(x.type)
                  .forEach((O) => O.callbacks.dragStopped()),
                  c.unsubscribe(),
                  (c = null);
              },
              I = (x) => {
                c || L(!1);
                const O = c.critical.draggable;
                x.type === "ADDITION" && nc(n, O, x.value) && u.add(x.value),
                  x.type === "REMOVAL" &&
                    nc(n, O, x.value) &&
                    u.remove(x.value);
              };
            return {
              updateDroppableIsEnabled: d,
              updateDroppableIsCombineEnabled: p,
              scrollDroppable: y,
              updateDroppableScroll: m,
              startPublishing: (x) => {
                c && L(!1);
                const O = n.draggable.getById(x.draggableId),
                  Z = n.droppable.getById(O.descriptor.droppableId),
                  F = { draggable: O.descriptor, droppable: Z.descriptor },
                  B = n.subscribe(I);
                return (
                  (c = { critical: F, unsubscribe: B }),
                  tl({
                    critical: F,
                    registry: n,
                    scrollOptions: x.scrollOptions,
                  })
                );
              },
              stopPublishing: _,
            };
          },
          no = (n, i) =>
            n.phase === "IDLE"
              ? !0
              : n.phase !== "DROP_ANIMATING" ||
                  n.completed.result.draggableId === i
                ? !1
                : n.completed.result.reason === "DROP",
          rc = (n) => {
            window.scrollBy(n.x, n.y);
          };
        const ic = ee((n) => Me(n).filter((i) => !(!i.isEnabled || !i.frame))),
          oc = (n, i) =>
            ic(i).find(
              (u) => (u.frame || L(!1), xa(u.frame.pageMarginBox)(n)),
            ) || null;
        var ac = ({ center: n, destination: i, droppables: c }) => {
          if (i) {
            const d = c[i];
            return d.frame ? d : null;
          }
          return oc(n, c);
        };
        const wn = {
          startFromPercentage: 0.25,
          maxScrollAtPercentage: 0.05,
          maxPixelScroll: 28,
          ease: (n) => n ** 2,
          durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
          disabled: !1,
        };
        var nl = (n, i, c = () => wn) => {
            const u = c(),
              d = n[i.size] * u.startFromPercentage,
              p = n[i.size] * u.maxScrollAtPercentage;
            return { startScrollingFrom: d, maxScrollValueAt: p };
          },
          cc = ({ startOfRange: n, endOfRange: i, current: c }) => {
            const u = i - n;
            return u === 0 ? 0 : (c - n) / u;
          },
          ro = 1,
          rl = (n, i, c = () => wn) => {
            const u = c();
            if (n > i.startScrollingFrom) return 0;
            if (n <= i.maxScrollValueAt) return u.maxPixelScroll;
            if (n === i.startScrollingFrom) return ro;
            const p =
                1 -
                cc({
                  startOfRange: i.maxScrollValueAt,
                  endOfRange: i.startScrollingFrom,
                  current: n,
                }),
              m = u.maxPixelScroll * u.ease(p);
            return Math.ceil(m);
          },
          il = (n, i, c) => {
            const u = c(),
              d = u.durationDampening.accelerateAt,
              p = u.durationDampening.stopDampeningAt,
              m = i,
              y = p,
              I = Date.now() - m;
            if (I >= p) return n;
            if (I < d) return ro;
            const S = cc({ startOfRange: d, endOfRange: y, current: I }),
              $ = n * u.ease(S);
            return Math.ceil($);
          },
          sc = ({
            distanceToEdge: n,
            thresholds: i,
            dragStartTime: c,
            shouldUseTimeDampening: u,
            getAutoScrollerOptions: d,
          }) => {
            const p = rl(n, i, d);
            return p === 0 ? 0 : u ? Math.max(il(p, c, d), ro) : p;
          },
          lc = ({
            container: n,
            distanceToEdges: i,
            dragStartTime: c,
            axis: u,
            shouldUseTimeDampening: d,
            getAutoScrollerOptions: p,
          }) => {
            const m = nl(n, u, p);
            return i[u.end] < i[u.start]
              ? sc({
                  distanceToEdge: i[u.end],
                  thresholds: m,
                  dragStartTime: c,
                  shouldUseTimeDampening: d,
                  getAutoScrollerOptions: p,
                })
              : -1 *
                  sc({
                    distanceToEdge: i[u.start],
                    thresholds: m,
                    dragStartTime: c,
                    shouldUseTimeDampening: d,
                    getAutoScrollerOptions: p,
                  });
          },
          ol = ({ container: n, subject: i, proposedScroll: c }) => {
            const u = i.height > n.height,
              d = i.width > n.width;
            return !d && !u
              ? c
              : d && u
                ? null
                : { x: d ? 0 : c.x, y: u ? 0 : c.y };
          };
        const al = C((n) => (n === 0 ? 0 : n));
        var uc = ({
          dragStartTime: n,
          container: i,
          subject: c,
          center: u,
          shouldUseTimeDampening: d,
          getAutoScrollerOptions: p,
        }) => {
          const m = {
              top: u.y - i.top,
              right: i.right - u.x,
              bottom: i.bottom - u.y,
              left: u.x - i.left,
            },
            y = lc({
              container: i,
              distanceToEdges: m,
              dragStartTime: n,
              axis: jr,
              shouldUseTimeDampening: d,
              getAutoScrollerOptions: p,
            }),
            _ = lc({
              container: i,
              distanceToEdges: m,
              dragStartTime: n,
              axis: Oi,
              shouldUseTimeDampening: d,
              getAutoScrollerOptions: p,
            }),
            I = al({ x: _, y });
          if (He(I, we)) return null;
          const S = ol({ container: i, subject: c, proposedScroll: I });
          return S ? (He(S, we) ? null : S) : null;
        };
        const cl = C((n) => (n === 0 ? 0 : n > 0 ? 1 : -1)),
          io = (() => {
            const n = (i, c) => (i < 0 ? i : i > c ? i - c : 0);
            return ({ current: i, max: c, change: u }) => {
              const d = xe(i, u),
                p = { x: n(d.x, c.x), y: n(d.y, c.y) };
              return He(p, we) ? null : p;
            };
          })(),
          dc = ({ max: n, current: i, change: c }) => {
            const u = { x: Math.max(i.x, n.x), y: Math.max(i.y, n.y) },
              d = cl(c),
              p = io({ max: u, current: i, change: d });
            return !p || (d.x !== 0 && p.x === 0) || (d.y !== 0 && p.y === 0);
          },
          oo = (n, i) =>
            dc({ current: n.scroll.current, max: n.scroll.max, change: i }),
          sl = (n, i) => {
            if (!oo(n, i)) return null;
            const c = n.scroll.max,
              u = n.scroll.current;
            return io({ current: u, max: c, change: i });
          },
          ao = (n, i) => {
            const c = n.frame;
            return c
              ? dc({ current: c.scroll.current, max: c.scroll.max, change: i })
              : !1;
          },
          ll = (n, i) => {
            const c = n.frame;
            return !c || !ao(n, i)
              ? null
              : io({ current: c.scroll.current, max: c.scroll.max, change: i });
          };
        var ul = ({
            viewport: n,
            subject: i,
            center: c,
            dragStartTime: u,
            shouldUseTimeDampening: d,
            getAutoScrollerOptions: p,
          }) => {
            const m = uc({
              dragStartTime: u,
              container: n.frame,
              subject: i,
              center: c,
              shouldUseTimeDampening: d,
              getAutoScrollerOptions: p,
            });
            return m && oo(n, m) ? m : null;
          },
          dl = ({
            droppable: n,
            subject: i,
            center: c,
            dragStartTime: u,
            shouldUseTimeDampening: d,
            getAutoScrollerOptions: p,
          }) => {
            const m = n.frame;
            if (!m) return null;
            const y = uc({
              dragStartTime: u,
              container: m.pageMarginBox,
              subject: i,
              center: c,
              shouldUseTimeDampening: d,
              getAutoScrollerOptions: p,
            });
            return y && ao(n, y) ? y : null;
          },
          fc = ({
            state: n,
            dragStartTime: i,
            shouldUseTimeDampening: c,
            scrollWindow: u,
            scrollDroppable: d,
            getAutoScrollerOptions: p,
          }) => {
            const m = n.current.page.borderBoxCenter,
              _ =
                n.dimensions.draggables[n.critical.draggable.id].page.marginBox;
            if (n.isWindowScrollAllowed) {
              const $ = n.viewport,
                x = ul({
                  dragStartTime: i,
                  viewport: $,
                  subject: _,
                  center: m,
                  shouldUseTimeDampening: c,
                  getAutoScrollerOptions: p,
                });
              if (x) {
                u(x);
                return;
              }
            }
            const I = ac({
              center: m,
              destination: tt(n.impact),
              droppables: n.dimensions.droppables,
            });
            if (!I) return;
            const S = dl({
              dragStartTime: i,
              droppable: I,
              subject: _,
              center: m,
              shouldUseTimeDampening: c,
              getAutoScrollerOptions: p,
            });
            S && d(I.descriptor.id, S);
          },
          fl = ({
            scrollWindow: n,
            scrollDroppable: i,
            getAutoScrollerOptions: c = () => wn,
          }) => {
            const u = (0, Ye.A)(n),
              d = (0, Ye.A)(i);
            let p = null;
            const m = (I) => {
              p || L(!1);
              const { shouldUseTimeDampening: S, dragStartTime: $ } = p;
              fc({
                state: I,
                scrollWindow: u,
                scrollDroppable: d,
                dragStartTime: $,
                shouldUseTimeDampening: S,
                getAutoScrollerOptions: c,
              });
            };
            return {
              start: (I) => {
                _n(), p && L(!1);
                const S = Date.now();
                let $ = !1;
                const x = () => {
                  $ = !0;
                };
                fc({
                  state: I,
                  dragStartTime: 0,
                  shouldUseTimeDampening: !1,
                  scrollWindow: x,
                  scrollDroppable: x,
                  getAutoScrollerOptions: c,
                }),
                  (p = { dragStartTime: S, shouldUseTimeDampening: $ }),
                  nn(),
                  $ && m(I);
              },
              stop: () => {
                p && (u.cancel(), d.cancel(), (p = null));
              },
              scroll: m,
            };
          },
          pl = ({ move: n, scrollDroppable: i, scrollWindow: c }) => {
            const u = (y, _) => {
                const I = xe(y.current.client.selection, _);
                n({ client: I });
              },
              d = (y, _) => {
                if (!ao(y, _)) return _;
                const I = ll(y, _);
                if (!I) return i(y.descriptor.id, _), null;
                const S = Fe(_, I);
                return i(y.descriptor.id, S), Fe(_, S);
              },
              p = (y, _, I) => {
                if (!y || !oo(_, I)) return I;
                const S = sl(_, I);
                if (!S) return c(I), null;
                const $ = Fe(I, S);
                return c($), Fe(I, $);
              };
            return (y) => {
              const _ = y.scrollJumpRequest;
              if (!_) return;
              const I = tt(y.impact);
              I || L(!1);
              const S = d(y.dimensions.droppables[I], _);
              if (!S) return;
              const $ = y.viewport,
                x = p(y.isWindowScrollAllowed, $, S);
              x && u(y, x);
            };
          },
          ml = ({
            scrollDroppable: n,
            scrollWindow: i,
            move: c,
            getAutoScrollerOptions: u,
          }) => {
            const d = fl({
                scrollWindow: i,
                scrollDroppable: n,
                getAutoScrollerOptions: u,
              }),
              p = pl({ move: c, scrollWindow: i, scrollDroppable: n });
            return {
              scroll: (_) => {
                if (!(u().disabled || _.phase !== "DRAGGING")) {
                  if (_.movementMode === "FLUID") {
                    d.scroll(_);
                    return;
                  }
                  _.scrollJumpRequest && p(_);
                }
              },
              start: d.start,
              stop: d.stop,
            };
          };
        const zn = "data-rfd",
          Dn = (() => {
            const n = `${zn}-drag-handle`;
            return {
              base: n,
              draggableId: `${n}-draggable-id`,
              contextId: `${n}-context-id`,
            };
          })(),
          Xr = (() => {
            const n = `${zn}-draggable`;
            return { base: n, contextId: `${n}-context-id`, id: `${n}-id` };
          })(),
          pc = (() => {
            const n = `${zn}-droppable`;
            return { base: n, contextId: `${n}-context-id`, id: `${n}-id` };
          })(),
          co = { contextId: `${zn}-scroll-container-context-id` },
          mc = (n) => (i) => `[${i}="${n}"]`,
          Pn = (n, i) =>
            n
              .map((c) => {
                const u = c.styles[i];
                return u ? `${c.selector} { ${u} }` : "";
              })
              .join(" "),
          gc = "pointer-events: none;";
        var gl = (n) => {
            const i = mc(n),
              c = (() => {
                const y = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
                return {
                  selector: i(Dn.contextId),
                  styles: {
                    always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                    resting: y,
                    dragging: gc,
                    dropAnimating: y,
                  },
                };
              })(),
              u = (() => {
                const y = `
      transition: ${xn.outOfTheWay};
    `;
                return {
                  selector: i(Xr.contextId),
                  styles: { dragging: y, dropAnimating: y, userCancel: y },
                };
              })(),
              d = {
                selector: i(pc.contextId),
                styles: { always: "overflow-anchor: none;" },
              },
              m = [
                u,
                c,
                d,
                {
                  selector: "body",
                  styles: {
                    dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
                  },
                },
              ];
            return {
              always: Pn(m, "always"),
              resting: Pn(m, "resting"),
              dragging: Pn(m, "dragging"),
              dropAnimating: Pn(m, "dropAnimating"),
              userCancel: Pn(m, "userCancel"),
            };
          },
          ae =
            typeof window < "u" &&
            typeof window.document < "u" &&
            typeof window.document.createElement < "u"
              ? h.useLayoutEffect
              : h.useEffect;
        const nr = () => {
            const n = document.querySelector("head");
            return n || L(!1), n;
          },
          Yr = (n) => {
            const i = document.createElement("style");
            return n && i.setAttribute("nonce", n), (i.type = "text/css"), i;
          };
        function Ce(n, i) {
          const c = (0, g.Kr)(() => gl(n), [n]),
            u = (0, h.useRef)(null),
            d = (0, h.useRef)(null),
            p = (0, g.hb)(
              ee(($) => {
                const x = d.current;
                x || L(!1), (x.textContent = $);
              }),
              [],
            ),
            m = (0, g.hb)(($) => {
              const x = u.current;
              x || L(!1), (x.textContent = $);
            }, []);
          ae(() => {
            (!u.current && !d.current) || L(!1);
            const $ = Yr(i),
              x = Yr(i);
            return (
              (u.current = $),
              (d.current = x),
              $.setAttribute(`${zn}-always`, n),
              x.setAttribute(`${zn}-dynamic`, n),
              nr().appendChild($),
              nr().appendChild(x),
              m(c.always),
              p(c.resting),
              () => {
                const O = (Z) => {
                  const F = Z.current;
                  F || L(!1), nr().removeChild(F), (Z.current = null);
                };
                O(u), O(d);
              }
            );
          }, [i, m, p, c.always, c.resting, n]);
          const y = (0, g.hb)(() => p(c.dragging), [p, c.dragging]),
            _ = (0, g.hb)(
              ($) => {
                if ($ === "DROP") {
                  p(c.dropAnimating);
                  return;
                }
                p(c.userCancel);
              },
              [p, c.dropAnimating, c.userCancel],
            ),
            I = (0, g.hb)(() => {
              d.current && p(c.resting);
            }, [p, c.resting]);
          return (0, g.Kr)(
            () => ({ dragging: y, dropping: _, resting: I }),
            [y, _, I],
          );
        }
        function so(n, i) {
          return Array.from(n.querySelectorAll(i));
        }
        var On = (n) =>
          n && n.ownerDocument && n.ownerDocument.defaultView
            ? n.ownerDocument.defaultView
            : window;
        function Nn(n) {
          return n instanceof On(n).HTMLElement;
        }
        function Qr(n, i) {
          const c = `[${Dn.contextId}="${n}"]`,
            u = so(document, c);
          if (!u.length) return null;
          const d = u.find((p) => p.getAttribute(Dn.draggableId) === i);
          return !d || !Nn(d) ? null : d;
        }
        function lo(n) {
          const i = (0, h.useRef)({}),
            c = (0, h.useRef)(null),
            u = (0, h.useRef)(null),
            d = (0, h.useRef)(!1),
            p = (0, g.hb)(function (x, O) {
              const Z = { id: x, focus: O };
              return (
                (i.current[x] = Z),
                function () {
                  const B = i.current;
                  B[x] !== Z && delete B[x];
                }
              );
            }, []),
            m = (0, g.hb)(
              function (x) {
                const O = Qr(n, x);
                O && O !== document.activeElement && O.focus();
              },
              [n],
            ),
            y = (0, g.hb)(function (x, O) {
              c.current === x && (c.current = O);
            }, []),
            _ = (0, g.hb)(
              function () {
                u.current ||
                  (d.current &&
                    (u.current = requestAnimationFrame(() => {
                      u.current = null;
                      const x = c.current;
                      x && m(x);
                    })));
              },
              [m],
            ),
            I = (0, g.hb)(function (x) {
              c.current = null;
              const O = document.activeElement;
              O && O.getAttribute(Dn.draggableId) === x && (c.current = x);
            }, []);
          return (
            ae(
              () => (
                (d.current = !0),
                function () {
                  d.current = !1;
                  const x = u.current;
                  x && cancelAnimationFrame(x);
                }
              ),
              [],
            ),
            (0, g.Kr)(
              () => ({
                register: p,
                tryRecordFocus: I,
                tryRestoreFocusRecorded: _,
                tryShiftRecord: y,
              }),
              [p, I, _, y],
            )
          );
        }
        function uo() {
          const n = { draggables: {}, droppables: {} },
            i = [];
          function c($) {
            return (
              i.push($),
              function () {
                const O = i.indexOf($);
                O !== -1 && i.splice(O, 1);
              }
            );
          }
          function u($) {
            i.length && i.forEach((x) => x($));
          }
          function d($) {
            return n.draggables[$] || null;
          }
          function p($) {
            const x = d($);
            return x || L(!1), x;
          }
          const m = {
            register: ($) => {
              (n.draggables[$.descriptor.id] = $),
                u({ type: "ADDITION", value: $ });
            },
            update: ($, x) => {
              const O = n.draggables[x.descriptor.id];
              O &&
                O.uniqueId === $.uniqueId &&
                (delete n.draggables[x.descriptor.id],
                (n.draggables[$.descriptor.id] = $));
            },
            unregister: ($) => {
              const x = $.descriptor.id,
                O = d(x);
              O &&
                $.uniqueId === O.uniqueId &&
                (delete n.draggables[x],
                n.droppables[$.descriptor.droppableId] &&
                  u({ type: "REMOVAL", value: $ }));
            },
            getById: p,
            findById: d,
            exists: ($) => !!d($),
            getAllByType: ($) =>
              Object.values(n.draggables).filter(
                (x) => x.descriptor.type === $,
              ),
          };
          function y($) {
            return n.droppables[$] || null;
          }
          function _($) {
            const x = y($);
            return x || L(!1), x;
          }
          const I = {
            register: ($) => {
              n.droppables[$.descriptor.id] = $;
            },
            unregister: ($) => {
              const x = y($.descriptor.id);
              x &&
                $.uniqueId === x.uniqueId &&
                delete n.droppables[$.descriptor.id];
            },
            getById: _,
            findById: y,
            exists: ($) => !!y($),
            getAllByType: ($) =>
              Object.values(n.droppables).filter(
                (x) => x.descriptor.type === $,
              ),
          };
          function S() {
            (n.draggables = {}), (n.droppables = {}), (i.length = 0);
          }
          return { draggable: m, droppable: I, subscribe: c, clean: S };
        }
        function fo() {
          const n = (0, g.Kr)(uo, []);
          return (
            (0, h.useEffect)(
              () =>
                function () {
                  h.version.startsWith("16") || h.version.startsWith("17")
                    ? requestAnimationFrame(n.clean)
                    : n.clean();
                },
              [n],
            ),
            n
          );
        }
        var ei = h.createContext(null),
          jn = () => {
            const n = document.body;
            return n || L(!1), n;
          },
          hc = {
            position: "absolute",
            width: "1px",
            height: "1px",
            margin: "-1px",
            border: "0",
            padding: "0",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            "clip-path": "inset(100%)",
          };
        const po = (n) => `rfd-announcement-${n}`;
        function bc(n) {
          const i = (0, g.Kr)(() => po(n), [n]),
            c = (0, h.useRef)(null);
          return (
            (0, h.useEffect)(
              function () {
                const p = document.createElement("div");
                return (
                  (c.current = p),
                  (p.id = i),
                  p.setAttribute("aria-live", "assertive"),
                  p.setAttribute("aria-atomic", "true"),
                  (0, mt.A)(p.style, hc),
                  jn().appendChild(p),
                  function () {
                    setTimeout(function () {
                      const _ = jn();
                      _.contains(p) && _.removeChild(p),
                        p === c.current && (c.current = null);
                    });
                  }
                );
              },
              [i],
            ),
            (0, g.hb)((d) => {
              const p = c.current;
              if (p) {
                p.textContent = d;
                return;
              }
            }, [])
          );
        }
        let ti = 0;
        const ni = { separator: "::" };
        function mo() {
          ti = 0;
        }
        function yc(n, i = ni) {
          return (0, g.Kr)(() => `${n}${i.separator}${ti++}`, [i.separator, n]);
        }
        function $c(n, i = ni) {
          const c = h.useId();
          return (0, g.Kr)(() => `${n}${i.separator}${c}`, [i.separator, n, c]);
        }
        var ri = $c;
        function _c({ contextId: n, uniqueId: i }) {
          return `rfd-hidden-text-${n}-${i}`;
        }
        function Ic({ contextId: n, text: i }) {
          const c = ri("hidden-text", { separator: "-" }),
            u = (0, g.Kr)(() => _c({ contextId: n, uniqueId: c }), [c, n]);
          return (
            (0, h.useEffect)(
              function () {
                const p = document.createElement("div");
                return (
                  (p.id = u),
                  (p.textContent = i),
                  (p.style.display = "none"),
                  jn().appendChild(p),
                  function () {
                    const y = jn();
                    y.contains(p) && y.removeChild(p);
                  }
                );
              },
              [u, i],
            ),
            u
          );
        }
        var En = h.createContext(null),
          xc = {
            react: "^16.8.5 || ^17.0.0 || ^18.0.0",
            "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
          };
        const go = /(\d+)\.(\d+)\.(\d+)/,
          vo = (n) => {
            const i = go.exec(n);
            i == null && L(!1);
            const c = Number(i[1]),
              u = Number(i[2]),
              d = Number(i[3]);
            return { major: c, minor: u, patch: d, raw: n };
          },
          Sc = (n, i) =>
            i.major > n.major
              ? !0
              : i.major < n.major
                ? !1
                : i.minor > n.minor
                  ? !0
                  : i.minor < n.minor
                    ? !1
                    : i.patch >= n.patch;
        var ho = (n, i) => {
          const c = vo(n),
            u = vo(i);
          Sc(c, u);
        };
        const kc = null;
        var bo = (n) => {
          const i = n.doctype;
          i && (i.name.toLowerCase(), i.publicId);
        };
        function wc(n) {}
        function Un(n, i) {}
        function zc() {
          Un(() => {
            ho(xc.react, h.version), bo(document);
          }, []);
        }
        function rr(n) {
          const i = (0, h.useRef)(n);
          return (
            (0, h.useEffect)(() => {
              i.current = n;
            }),
            i
          );
        }
        function yo() {
          let n = null;
          function i() {
            return !!n;
          }
          function c(m) {
            return m === n;
          }
          function u(m) {
            n && L(!1);
            const y = { abandon: m };
            return (n = y), y;
          }
          function d() {
            n || L(!1), (n = null);
          }
          function p() {
            n && (n.abandon(), d());
          }
          return {
            isClaimed: i,
            isActive: c,
            claim: u,
            release: d,
            tryAbandon: p,
          };
        }
        function on(n) {
          return n.phase === "IDLE" || n.phase === "DROP_ANIMATING"
            ? !1
            : n.isDragging;
        }
        const $o = 9,
          _o = 13,
          ir = 27,
          ii = 32,
          Dc = 33,
          oi = 34,
          hl = 35,
          Io = 36,
          bl = 37,
          Pc = 38,
          Oc = 39,
          Nc = 40,
          jc = { [_o]: !0, [$o]: !0 };
        var xo = (n) => {
            jc[n.keyCode] && n.preventDefault();
          },
          or = (() => {
            const n = "visibilitychange";
            return typeof document > "u"
              ? n
              : [n, `ms${n}`, `webkit${n}`, `moz${n}`, `o${n}`].find(
                  (u) => `on${u}` in document,
                ) || n;
          })();
        const So = 0,
          ko = 5;
        function $l(n, i) {
          return Math.abs(i.x - n.x) >= ko || Math.abs(i.y - n.y) >= ko;
        }
        const qe = { type: "IDLE" };
        function Ec({ cancel: n, completed: i, getPhase: c, setPhase: u }) {
          return [
            {
              eventName: "mousemove",
              fn: (d) => {
                const { button: p, clientX: m, clientY: y } = d;
                if (p !== So) return;
                const _ = { x: m, y },
                  I = c();
                if (I.type === "DRAGGING") {
                  d.preventDefault(), I.actions.move(_);
                  return;
                }
                I.type !== "PENDING" && L(!1);
                const S = I.point;
                if (!$l(S, _)) return;
                d.preventDefault();
                const $ = I.actions.fluidLift(_);
                u({ type: "DRAGGING", actions: $ });
              },
            },
            {
              eventName: "mouseup",
              fn: (d) => {
                const p = c();
                if (p.type !== "DRAGGING") {
                  n();
                  return;
                }
                d.preventDefault(),
                  p.actions.drop({ shouldBlockNextClick: !0 }),
                  i();
              },
            },
            {
              eventName: "mousedown",
              fn: (d) => {
                c().type === "DRAGGING" && d.preventDefault(), n();
              },
            },
            {
              eventName: "keydown",
              fn: (d) => {
                if (c().type === "PENDING") {
                  n();
                  return;
                }
                if (d.keyCode === ir) {
                  d.preventDefault(), n();
                  return;
                }
                xo(d);
              },
            },
            { eventName: "resize", fn: n },
            {
              eventName: "scroll",
              options: { passive: !0, capture: !1 },
              fn: () => {
                c().type === "PENDING" && n();
              },
            },
            {
              eventName: "webkitmouseforcedown",
              fn: (d) => {
                const p = c();
                if (
                  (p.type === "IDLE" && L(!1),
                  p.actions.shouldRespectForcePress())
                ) {
                  n();
                  return;
                }
                d.preventDefault();
              },
            },
            { eventName: or, fn: n },
          ];
        }
        function Uc(n) {
          const i = (0, h.useRef)(qe),
            c = (0, h.useRef)(it),
            u = (0, g.Kr)(
              () => ({
                eventName: "mousedown",
                fn: function ($) {
                  if (
                    $.defaultPrevented ||
                    $.button !== So ||
                    $.ctrlKey ||
                    $.metaKey ||
                    $.shiftKey ||
                    $.altKey
                  )
                    return;
                  const x = n.findClosestDraggableId($);
                  if (!x) return;
                  const O = n.tryGetLock(x, m, { sourceEvent: $ });
                  if (!O) return;
                  $.preventDefault();
                  const Z = { x: $.clientX, y: $.clientY };
                  c.current(), I(O, Z);
                },
              }),
              [n],
            ),
            d = (0, g.Kr)(
              () => ({
                eventName: "webkitmouseforcewillbegin",
                fn: (S) => {
                  if (S.defaultPrevented) return;
                  const $ = n.findClosestDraggableId(S);
                  if (!$) return;
                  const x = n.findOptionsForDraggable($);
                  x &&
                    (x.shouldRespectForcePress ||
                      (n.canGetLock($) && S.preventDefault()));
                },
              }),
              [n],
            ),
            p = (0, g.hb)(
              function () {
                const $ = { passive: !1, capture: !0 };
                c.current = Be(window, [d, u], $);
              },
              [d, u],
            ),
            m = (0, g.hb)(() => {
              i.current.type !== "IDLE" && ((i.current = qe), c.current(), p());
            }, [p]),
            y = (0, g.hb)(() => {
              const S = i.current;
              m(),
                S.type === "DRAGGING" &&
                  S.actions.cancel({ shouldBlockNextClick: !0 }),
                S.type === "PENDING" && S.actions.abort();
            }, [m]),
            _ = (0, g.hb)(
              function () {
                const $ = { capture: !0, passive: !1 },
                  x = Ec({
                    cancel: y,
                    completed: m,
                    getPhase: () => i.current,
                    setPhase: (O) => {
                      i.current = O;
                    },
                  });
                c.current = Be(window, x, $);
              },
              [y, m],
            ),
            I = (0, g.hb)(
              function ($, x) {
                i.current.type !== "IDLE" && L(!1),
                  (i.current = { type: "PENDING", point: x, actions: $ }),
                  _();
              },
              [_],
            );
          ae(
            function () {
              return (
                p(),
                function () {
                  c.current();
                }
              );
            },
            [p],
          );
        }
        function Ac() {}
        const Tc = { [oi]: !0, [Dc]: !0, [Io]: !0, [hl]: !0 };
        function Cc(n, i) {
          function c() {
            i(), n.cancel();
          }
          function u() {
            i(), n.drop();
          }
          return [
            {
              eventName: "keydown",
              fn: (d) => {
                if (d.keyCode === ir) {
                  d.preventDefault(), c();
                  return;
                }
                if (d.keyCode === ii) {
                  d.preventDefault(), u();
                  return;
                }
                if (d.keyCode === Nc) {
                  d.preventDefault(), n.moveDown();
                  return;
                }
                if (d.keyCode === Pc) {
                  d.preventDefault(), n.moveUp();
                  return;
                }
                if (d.keyCode === Oc) {
                  d.preventDefault(), n.moveRight();
                  return;
                }
                if (d.keyCode === bl) {
                  d.preventDefault(), n.moveLeft();
                  return;
                }
                if (Tc[d.keyCode]) {
                  d.preventDefault();
                  return;
                }
                xo(d);
              },
            },
            { eventName: "mousedown", fn: c },
            { eventName: "mouseup", fn: c },
            { eventName: "click", fn: c },
            { eventName: "touchstart", fn: c },
            { eventName: "resize", fn: c },
            { eventName: "wheel", fn: c, options: { passive: !0 } },
            { eventName: or, fn: c },
          ];
        }
        function Rc(n) {
          const i = (0, h.useRef)(Ac),
            c = (0, g.Kr)(
              () => ({
                eventName: "keydown",
                fn: function (p) {
                  if (p.defaultPrevented || p.keyCode !== ii) return;
                  const m = n.findClosestDraggableId(p);
                  if (!m) return;
                  const y = n.tryGetLock(m, S, { sourceEvent: p });
                  if (!y) return;
                  p.preventDefault();
                  let _ = !0;
                  const I = y.snapLift();
                  i.current();
                  function S() {
                    _ || L(!1), (_ = !1), i.current(), u();
                  }
                  i.current = Be(window, Cc(I, S), {
                    capture: !0,
                    passive: !1,
                  });
                },
              }),
              [n],
            ),
            u = (0, g.hb)(
              function () {
                const p = { passive: !1, capture: !0 };
                i.current = Be(window, [c], p);
              },
              [c],
            );
          ae(
            function () {
              return (
                u(),
                function () {
                  i.current();
                }
              );
            },
            [u],
          );
        }
        const ai = { type: "IDLE" },
          Zc = 120,
          Lc = 0.15;
        function Bc({ cancel: n, getPhase: i }) {
          return [
            { eventName: "orientationchange", fn: n },
            { eventName: "resize", fn: n },
            {
              eventName: "contextmenu",
              fn: (c) => {
                c.preventDefault();
              },
            },
            {
              eventName: "keydown",
              fn: (c) => {
                if (i().type !== "DRAGGING") {
                  n();
                  return;
                }
                c.keyCode === ir && c.preventDefault(), n();
              },
            },
            { eventName: or, fn: n },
          ];
        }
        function Fc({ cancel: n, completed: i, getPhase: c }) {
          return [
            {
              eventName: "touchmove",
              options: { capture: !1 },
              fn: (u) => {
                const d = c();
                if (d.type !== "DRAGGING") {
                  n();
                  return;
                }
                d.hasMoved = !0;
                const { clientX: p, clientY: m } = u.touches[0],
                  y = { x: p, y: m };
                u.preventDefault(), d.actions.move(y);
              },
            },
            {
              eventName: "touchend",
              fn: (u) => {
                const d = c();
                if (d.type !== "DRAGGING") {
                  n();
                  return;
                }
                u.preventDefault(),
                  d.actions.drop({ shouldBlockNextClick: !0 }),
                  i();
              },
            },
            {
              eventName: "touchcancel",
              fn: (u) => {
                if (c().type !== "DRAGGING") {
                  n();
                  return;
                }
                u.preventDefault(), n();
              },
            },
            {
              eventName: "touchforcechange",
              fn: (u) => {
                const d = c();
                d.type === "IDLE" && L(!1);
                const p = u.touches[0];
                if (!p || !(p.force >= Lc)) return;
                const y = d.actions.shouldRespectForcePress();
                if (d.type === "PENDING") {
                  y && n();
                  return;
                }
                if (y) {
                  if (d.hasMoved) {
                    u.preventDefault();
                    return;
                  }
                  n();
                  return;
                }
                u.preventDefault();
              },
            },
            { eventName: or, fn: n },
          ];
        }
        function Gc(n) {
          const i = (0, h.useRef)(ai),
            c = (0, h.useRef)(it),
            u = (0, g.hb)(function () {
              return i.current;
            }, []),
            d = (0, g.hb)(function (O) {
              i.current = O;
            }, []),
            p = (0, g.Kr)(
              () => ({
                eventName: "touchstart",
                fn: function (O) {
                  if (O.defaultPrevented) return;
                  const Z = n.findClosestDraggableId(O);
                  if (!Z) return;
                  const F = n.tryGetLock(Z, y, { sourceEvent: O });
                  if (!F) return;
                  const B = O.touches[0],
                    { clientX: K, clientY: X } = B,
                    re = { x: K, y: X };
                  c.current(), $(F, re);
                },
              }),
              [n],
            ),
            m = (0, g.hb)(
              function () {
                const O = { capture: !0, passive: !1 };
                c.current = Be(window, [p], O);
              },
              [p],
            ),
            y = (0, g.hb)(() => {
              const x = i.current;
              x.type !== "IDLE" &&
                (x.type === "PENDING" && clearTimeout(x.longPressTimerId),
                d(ai),
                c.current(),
                m());
            }, [m, d]),
            _ = (0, g.hb)(() => {
              const x = i.current;
              y(),
                x.type === "DRAGGING" &&
                  x.actions.cancel({ shouldBlockNextClick: !0 }),
                x.type === "PENDING" && x.actions.abort();
            }, [y]),
            I = (0, g.hb)(
              function () {
                const O = { capture: !0, passive: !1 },
                  Z = { cancel: _, completed: y, getPhase: u },
                  F = Be(window, Fc(Z), O),
                  B = Be(window, Bc(Z), O);
                c.current = function () {
                  F(), B();
                };
              },
              [_, u, y],
            ),
            S = (0, g.hb)(
              function () {
                const O = u();
                O.type !== "PENDING" && L(!1);
                const Z = O.actions.fluidLift(O.point);
                d({ type: "DRAGGING", actions: Z, hasMoved: !1 });
              },
              [u, d],
            ),
            $ = (0, g.hb)(
              function (O, Z) {
                u().type !== "IDLE" && L(!1);
                const F = setTimeout(S, Zc);
                d({
                  type: "PENDING",
                  point: Z,
                  actions: O,
                  longPressTimerId: F,
                }),
                  I();
              },
              [I, u, d, S],
            );
          ae(
            function () {
              return (
                m(),
                function () {
                  c.current();
                  const Z = u();
                  Z.type === "PENDING" &&
                    (clearTimeout(Z.longPressTimerId), d(ai));
                }
              );
            },
            [u, m, d],
          ),
            ae(function () {
              return Be(window, [
                {
                  eventName: "touchmove",
                  fn: () => {},
                  options: { capture: !1, passive: !1 },
                },
              ]);
            }, []);
        }
        function wo(n) {}
        const An = [
          "input",
          "button",
          "textarea",
          "select",
          "option",
          "optgroup",
          "video",
          "audio",
        ];
        function be(n, i) {
          if (i == null) return !1;
          if (An.includes(i.tagName.toLowerCase())) return !0;
          const u = i.getAttribute("contenteditable");
          return u === "true" || u === ""
            ? !0
            : i === n
              ? !1
              : be(n, i.parentElement);
        }
        function zo(n, i) {
          const c = i.target;
          return Nn(c) ? be(n, c) : !1;
        }
        var ci = (n) => (0, T.l)(n.getBoundingClientRect()).center;
        function ar(n) {
          return n instanceof On(n).Element;
        }
        const Ie = (() => {
          const n = "matches";
          return typeof document > "u"
            ? n
            : [n, "msMatchesSelector", "webkitMatchesSelector"].find(
                (u) => u in Element.prototype,
              ) || n;
        })();
        function si(n, i) {
          return n == null ? null : n[Ie](i) ? n : si(n.parentElement, i);
        }
        function _l(n, i) {
          return n.closest ? n.closest(i) : si(n, i);
        }
        function li(n) {
          return `[${Dn.contextId}="${n}"]`;
        }
        function Il(n, i) {
          const c = i.target;
          if (!ar(c)) return null;
          const u = li(n),
            d = _l(c, u);
          return !d || !Nn(d) ? null : d;
        }
        function _t(n, i) {
          const c = Il(n, i);
          return c ? c.getAttribute(Dn.draggableId) : null;
        }
        function xl(n, i) {
          const c = `[${Xr.contextId}="${n}"]`,
            d = so(document, c).find((p) => p.getAttribute(Xr.id) === i);
          return !d || !Nn(d) ? null : d;
        }
        function Sl(n) {
          n.preventDefault();
        }
        function ui({ expected: n, phase: i, isLockActive: c, shouldWarn: u }) {
          return !(!c() || n !== i);
        }
        function Mc({ lockAPI: n, store: i, registry: c, draggableId: u }) {
          if (n.isClaimed()) return !1;
          const d = c.draggable.findById(u);
          return !(!d || !d.options.isEnabled || !no(i.getState(), u));
        }
        function di({
          lockAPI: n,
          contextId: i,
          store: c,
          registry: u,
          draggableId: d,
          forceSensorStop: p,
          sourceEvent: m,
        }) {
          if (!Mc({ lockAPI: n, store: c, registry: u, draggableId: d }))
            return null;
          const _ = u.draggable.getById(d),
            I = xl(i, _.descriptor.id);
          if (!I || (m && !_.options.canDragInteractiveElements && zo(I, m)))
            return null;
          const S = n.claim(p || it);
          let $ = "PRE_DRAG";
          function x() {
            return _.options.shouldRespectForcePress;
          }
          function O() {
            return n.isActive(S);
          }
          function Z(oe, ie) {
            ui({ expected: oe, phase: $, isLockActive: O, shouldWarn: !0 }) &&
              c.dispatch(ie());
          }
          const F = Z.bind(null, "DRAGGING");
          function B(oe) {
            function ie() {
              n.release(), ($ = "COMPLETED");
            }
            $ !== "PRE_DRAG" && (ie(), L(!1)),
              c.dispatch(ut(oe.liftActionArgs)),
              ($ = "DRAGGING");
            function ge(me, Xe = { shouldBlockNextClick: !1 }) {
              if ((oe.cleanup(), Xe.shouldBlockNextClick)) {
                const ve = Be(window, [
                  {
                    eventName: "click",
                    fn: Sl,
                    options: { once: !0, passive: !1, capture: !0 },
                  },
                ]);
                setTimeout(ve);
              }
              ie(), c.dispatch(Vi({ reason: me }));
            }
            return {
              isActive: () =>
                ui({
                  expected: "DRAGGING",
                  phase: $,
                  isLockActive: O,
                  shouldWarn: !1,
                }),
              shouldRespectForcePress: x,
              drop: (me) => ge("DROP", me),
              cancel: (me) => ge("CANCEL", me),
              ...oe.actions,
            };
          }
          function K(oe) {
            const ie = (0, Ye.A)((me) => {
              F(() => Ji({ client: me }));
            });
            return {
              ...B({
                liftActionArgs: {
                  id: d,
                  clientSelection: oe,
                  movementMode: "FLUID",
                },
                cleanup: () => ie.cancel(),
                actions: { move: ie },
              }),
              move: ie,
            };
          }
          function X() {
            const oe = {
              moveUp: () => F(La),
              moveRight: () => F(Fa),
              moveDown: () => F(Ba),
              moveLeft: () => F(Ga),
            };
            return B({
              liftActionArgs: {
                id: d,
                clientSelection: ci(I),
                movementMode: "SNAP",
              },
              cleanup: it,
              actions: oe,
            });
          }
          function re() {
            ui({
              expected: "PRE_DRAG",
              phase: $,
              isLockActive: O,
              shouldWarn: !0,
            }) && n.release();
          }
          return {
            isActive: () =>
              ui({
                expected: "PRE_DRAG",
                phase: $,
                isLockActive: O,
                shouldWarn: !1,
              }),
            shouldRespectForcePress: x,
            fluidLift: K,
            snapLift: X,
            abort: re,
          };
        }
        const kl = [Uc, Rc, Gc];
        function wl({
          contextId: n,
          store: i,
          registry: c,
          customSensors: u,
          enableDefaultSensors: d,
        }) {
          const p = [...(d ? kl : []), ...(u || [])],
            m = (0, h.useState)(() => yo())[0],
            y = (0, g.hb)(
              function (B, K) {
                on(B) && !on(K) && m.tryAbandon();
              },
              [m],
            );
          ae(
            function () {
              let B = i.getState();
              return i.subscribe(() => {
                const X = i.getState();
                y(B, X), (B = X);
              });
            },
            [m, i, y],
          ),
            ae(() => m.tryAbandon, [m.tryAbandon]);
          const _ = (0, g.hb)(
              (F) => Mc({ lockAPI: m, registry: c, store: i, draggableId: F }),
              [m, c, i],
            ),
            I = (0, g.hb)(
              (F, B, K) =>
                di({
                  lockAPI: m,
                  registry: c,
                  contextId: n,
                  store: i,
                  draggableId: F,
                  forceSensorStop: B || null,
                  sourceEvent: K && K.sourceEvent ? K.sourceEvent : null,
                }),
              [n, m, c, i],
            ),
            S = (0, g.hb)((F) => _t(n, F), [n]),
            $ = (0, g.hb)(
              (F) => {
                const B = c.draggable.findById(F);
                return B ? B.options : null;
              },
              [c.draggable],
            ),
            x = (0, g.hb)(
              function () {
                m.isClaimed() &&
                  (m.tryAbandon(),
                  i.getState().phase !== "IDLE" && i.dispatch(Gr()));
              },
              [m, i],
            ),
            O = (0, g.hb)(() => m.isClaimed(), [m]),
            Z = (0, g.Kr)(
              () => ({
                canGetLock: _,
                tryGetLock: I,
                findClosestDraggableId: S,
                findOptionsForDraggable: $,
                tryReleaseLock: x,
                isLockClaimed: O,
              }),
              [_, I, S, $, x, O],
            );
          wo(p);
          for (let F = 0; F < p.length; F++) p[F](Z);
        }
        const Do = (n) => ({
            onBeforeCapture: (i) => {
              const c = () => {
                n.onBeforeCapture && n.onBeforeCapture(i);
              };
              h.version.startsWith("16") || h.version.startsWith("17")
                ? c()
                : (0, Pe.flushSync)(c);
            },
            onBeforeDragStart: n.onBeforeDragStart,
            onDragStart: n.onDragStart,
            onDragEnd: n.onDragEnd,
            onDragUpdate: n.onDragUpdate,
          }),
          zl = (n) => ({
            ...wn,
            ...n.autoScrollerOptions,
            durationDampening: {
              ...wn.durationDampening,
              ...n.autoScrollerOptions,
            },
          });
        function an(n) {
          return n.current || L(!1), n.current;
        }
        function Dl(n) {
          const {
              contextId: i,
              setCallbacks: c,
              sensors: u,
              nonce: d,
              dragHandleUsageInstructions: p,
            } = n,
            m = (0, h.useRef)(null);
          zc();
          const y = rr(n),
            _ = (0, g.hb)(() => Do(y.current), [y]),
            I = (0, g.hb)(() => zl(y.current), [y]),
            S = bc(i),
            $ = Ic({ contextId: i, text: p }),
            x = Ce(i, d),
            O = (0, g.hb)((ve) => {
              an(m).dispatch(ve);
            }, []),
            Z = (0, g.Kr)(
              () =>
                (0, j.zH)(
                  {
                    publishWhileDragging: Ua,
                    updateDroppableScroll: Wi,
                    updateDroppableIsEnabled: Ta,
                    updateDroppableIsCombineEnabled: Ca,
                    collectionStarting: Aa,
                  },
                  O,
                ),
              [O],
            ),
            F = fo(),
            B = (0, g.Kr)(() => rn(F, Z), [F, Z]),
            K = (0, g.Kr)(
              () =>
                ml({
                  scrollWindow: rc,
                  scrollDroppable: B.scrollDroppable,
                  getAutoScrollerOptions: I,
                  ...(0, j.zH)({ move: Ji }, O),
                }),
              [B.scrollDroppable, O, I],
            ),
            X = lo(i),
            re = (0, g.Kr)(
              () =>
                Yi({
                  announce: S,
                  autoScroller: K,
                  dimensionMarshal: B,
                  focusMarshal: X,
                  getResponders: _,
                  styleMarshal: x,
                }),
              [S, K, B, X, _, x],
            );
          m.current = re;
          const Y = (0, g.hb)(() => {
              const ve = an(m);
              ve.getState().phase !== "IDLE" && ve.dispatch(Gr());
            }, []),
            oe = (0, g.hb)(() => {
              const ve = an(m).getState();
              return ve.phase === "DROP_ANIMATING"
                ? !0
                : ve.phase === "IDLE"
                  ? !1
                  : ve.isDragging;
            }, []),
            ie = (0, g.Kr)(() => ({ isDragging: oe, tryAbort: Y }), [oe, Y]);
          c(ie);
          const ge = (0, g.hb)((ve) => no(an(m).getState(), ve), []),
            me = (0, g.hb)(() => tn(an(m).getState()), []),
            Xe = (0, g.Kr)(
              () => ({
                marshal: B,
                focus: X,
                contextId: i,
                canLift: ge,
                isMovementAllowed: me,
                dragHandleUsageInstructionsId: $,
                registry: F,
              }),
              [i, B, $, X, ge, me, F],
            );
          return (
            wl({
              contextId: i,
              store: re,
              registry: F,
              customSensors: u || null,
              enableDefaultSensors: n.enableDefaultSensors !== !1,
            }),
            (0, h.useEffect)(() => Y, [Y]),
            h.createElement(
              En.Provider,
              { value: Xe },
              h.createElement(yr, { context: ei, store: re }, n.children),
            )
          );
        }
        let fi = 0;
        function Pl() {
          fi = 0;
        }
        function Wc() {
          return (0, g.Kr)(() => `${fi++}`, []);
        }
        function Ol() {
          return h.useId();
        }
        var Po = Ol;
        function au() {
          "useId" in React || (Pl(), mo());
        }
        function Oo(n) {
          const i = Po(),
            c = n.dragHandleUsageInstructions || lt.dragHandleUsageInstructions;
          return h.createElement(zr, null, (u) =>
            h.createElement(
              Dl,
              {
                nonce: n.nonce,
                contextId: i,
                setCallbacks: u,
                dragHandleUsageInstructions: c,
                enableDefaultSensors: n.enableDefaultSensors,
                sensors: n.sensors,
                onBeforeCapture: n.onBeforeCapture,
                onBeforeDragStart: n.onBeforeDragStart,
                onDragStart: n.onDragStart,
                onDragUpdate: n.onDragUpdate,
                onDragEnd: n.onDragEnd,
                autoScrollerOptions: n.autoScrollerOptions,
              },
              n.children,
            ),
          );
        }
        const Jc = { dragging: 5e3, dropAnimating: 4500 },
          No = (n, i) => (i ? xn.drop(i.duration) : n ? xn.snap : xn.fluid),
          Nl = (n, i) => {
            if (n) return i ? In.opacity.drop : In.opacity.combining;
          },
          jo = (n) =>
            n.forceShouldAnimate != null
              ? n.forceShouldAnimate
              : n.mode === "SNAP";
        function jl(n) {
          const c = n.dimension.client,
            { offset: u, combineWith: d, dropping: p } = n,
            m = !!d,
            y = jo(n),
            _ = !!p,
            I = _ ? Jr.drop(u, m) : Jr.moveTo(u);
          return {
            position: "fixed",
            top: c.marginBox.top,
            left: c.marginBox.left,
            boxSizing: "border-box",
            width: c.borderBox.width,
            height: c.borderBox.height,
            transition: No(y, p),
            transform: I,
            opacity: Nl(m, _),
            zIndex: _ ? Jc.dropAnimating : Jc.dragging,
            pointerEvents: "none",
          };
        }
        function Vc(n) {
          return {
            transform: Jr.moveTo(n.offset),
            transition: n.shouldAnimateDisplacement ? void 0 : "none",
          };
        }
        function El(n) {
          return n.type === "DRAGGING" ? jl(n) : Vc(n);
        }
        function Eo(n, i, c = we) {
          const u = window.getComputedStyle(i),
            d = i.getBoundingClientRect(),
            p = (0, T.a)(d, u),
            m = (0, T.SQ)(p, c),
            y = {
              client: p,
              tagName: i.tagName.toLowerCase(),
              display: u.display,
            },
            _ = { x: p.marginBox.width, y: p.marginBox.height };
          return {
            descriptor: n,
            placeholder: y,
            displaceBy: _,
            client: p,
            page: m,
          };
        }
        function Ul(n) {
          const i = ri("draggable"),
            {
              descriptor: c,
              registry: u,
              getDraggableRef: d,
              canDragInteractiveElements: p,
              shouldRespectForcePress: m,
              isEnabled: y,
            } = n,
            _ = (0, g.Kr)(
              () => ({
                canDragInteractiveElements: p,
                shouldRespectForcePress: m,
                isEnabled: y,
              }),
              [p, y, m],
            ),
            I = (0, g.hb)(
              (O) => {
                const Z = d();
                return Z || L(!1), Eo(c, Z, O);
              },
              [c, d],
            ),
            S = (0, g.Kr)(
              () => ({
                uniqueId: i,
                descriptor: c,
                options: _,
                getDimension: I,
              }),
              [c, I, _, i],
            ),
            $ = (0, h.useRef)(S),
            x = (0, h.useRef)(!0);
          ae(
            () => (
              u.draggable.register($.current),
              () => u.draggable.unregister($.current)
            ),
            [u.draggable],
          ),
            ae(() => {
              if (x.current) {
                x.current = !1;
                return;
              }
              const O = $.current;
              ($.current = S), u.draggable.update(S, O);
            }, [S, u.draggable]);
        }
        var cr = h.createContext(null);
        function Kc(n) {
          (n && Nn(n)) || L(!1);
        }
        function Uo(n, i, c) {
          Un(() => {
            function u(p) {
              return `Draggable[id: ${p}]: `;
            }
            const d = n.draggableId;
            d || L(!1),
              typeof d != "string" && L(!1),
              Number.isInteger(n.index) || L(!1),
              n.mapped.type !== "DRAGGING" &&
                (Kc(c()), n.isEnabled && (Qr(i, d) || L(!1)));
          });
        }
        function Al(n) {}
        function Tn(n) {
          const i = (0, h.useContext)(n);
          return i || L(!1), i;
        }
        function Tl(n) {
          n.preventDefault();
        }
        var Cl = (n) => {
            const i = (0, h.useRef)(null),
              c = (0, g.hb)((ie = null) => {
                i.current = ie;
              }, []),
              u = (0, g.hb)(() => i.current, []),
              {
                contextId: d,
                dragHandleUsageInstructionsId: p,
                registry: m,
              } = Tn(En),
              { type: y, droppableId: _ } = Tn(cr),
              I = (0, g.Kr)(
                () => ({
                  id: n.draggableId,
                  index: n.index,
                  type: y,
                  droppableId: _,
                }),
                [n.draggableId, n.index, y, _],
              ),
              {
                children: S,
                draggableId: $,
                isEnabled: x,
                shouldRespectForcePress: O,
                canDragInteractiveElements: Z,
                isClone: F,
                mapped: B,
                dropAnimationFinished: K,
              } = n;
            if ((Uo(n, d, u), Al(F), !F)) {
              const ie = (0, g.Kr)(
                () => ({
                  descriptor: I,
                  registry: m,
                  getDraggableRef: u,
                  canDragInteractiveElements: Z,
                  shouldRespectForcePress: O,
                  isEnabled: x,
                }),
                [I, m, u, Z, O, x],
              );
              Ul(ie);
            }
            const X = (0, g.Kr)(
                () =>
                  x
                    ? {
                        tabIndex: 0,
                        role: "button",
                        "aria-describedby": p,
                        "data-rfd-drag-handle-draggable-id": $,
                        "data-rfd-drag-handle-context-id": d,
                        draggable: !1,
                        onDragStart: Tl,
                      }
                    : null,
                [d, p, $, x],
              ),
              re = (0, g.hb)(
                (ie) => {
                  B.type === "DRAGGING" &&
                    B.dropping &&
                    ie.propertyName === "transform" &&
                    (h.version.startsWith("16") || h.version.startsWith("17")
                      ? K()
                      : (0, Pe.flushSync)(K));
                },
                [K, B],
              ),
              Y = (0, g.Kr)(() => {
                const ie = El(B),
                  ge = B.type === "DRAGGING" && B.dropping ? re : void 0;
                return {
                  innerRef: c,
                  draggableProps: {
                    "data-rfd-draggable-context-id": d,
                    "data-rfd-draggable-id": $,
                    style: ie,
                    onTransitionEnd: ge,
                  },
                  dragHandleProps: X,
                };
              }, [d, X, $, B, re, c]),
              oe = (0, g.Kr)(
                () => ({
                  draggableId: I.id,
                  type: I.type,
                  source: { index: I.index, droppableId: I.droppableId },
                }),
                [I.droppableId, I.id, I.index, I.type],
              );
            return h.createElement(h.Fragment, null, S(Y, B.snapshot, oe));
          },
          pi = (n, i) => n === i,
          qc = (n) => {
            const { combine: i, destination: c } = n;
            return c ? c.droppableId : i ? i.droppableId : null;
          };
        const Ao = (n) => (n.combine ? n.combine.draggableId : null),
          Rl = (n) =>
            n.at && n.at.type === "COMBINE" ? n.at.combine.draggableId : null;
        function sr() {
          const n = ee((d, p) => ({ x: d, y: p })),
            i = ee((d, p, m = null, y = null, _ = null) => ({
              isDragging: !0,
              isClone: p,
              isDropAnimating: !!_,
              dropAnimation: _,
              mode: d,
              draggingOver: m,
              combineWith: y,
              combineTargetFor: null,
            })),
            c = ee((d, p, m, y, _ = null, I = null, S = null) => ({
              mapped: {
                type: "DRAGGING",
                dropping: null,
                draggingOver: _,
                combineWith: I,
                mode: p,
                offset: d,
                dimension: m,
                forceShouldAnimate: S,
                snapshot: i(p, y, _, I, null),
              },
            }));
          return (d, p) => {
            if (on(d)) {
              if (d.critical.draggable.id !== p.draggableId) return null;
              const m = d.current.client.offset,
                y = d.dimensions.draggables[p.draggableId],
                _ = tt(d.impact),
                I = Rl(d.impact),
                S = d.forceShouldAnimate;
              return c(n(m.x, m.y), d.movementMode, y, p.isClone, _, I, S);
            }
            if (d.phase === "DROP_ANIMATING") {
              const m = d.completed;
              if (m.result.draggableId !== p.draggableId) return null;
              const y = p.isClone,
                _ = d.dimensions.draggables[p.draggableId],
                I = m.result,
                S = I.mode,
                $ = qc(I),
                x = Ao(I),
                Z = {
                  duration: d.dropDuration,
                  curve: Wr.drop,
                  moveTo: d.newHomeClientOffset,
                  opacity: x ? In.opacity.drop : null,
                  scale: x ? In.scale.drop : null,
                };
              return {
                mapped: {
                  type: "DRAGGING",
                  offset: d.newHomeClientOffset,
                  dimension: _,
                  dropping: Z,
                  draggingOver: $,
                  combineWith: x,
                  mode: S,
                  forceShouldAnimate: null,
                  snapshot: i(S, y, $, x, Z),
                },
              };
            }
            return null;
          };
        }
        function Xc(n = null) {
          return {
            isDragging: !1,
            isDropAnimating: !1,
            isClone: !1,
            dropAnimation: null,
            mode: null,
            draggingOver: null,
            combineTargetFor: n,
            combineWith: null,
          };
        }
        const Zl = {
          mapped: {
            type: "SECONDARY",
            offset: we,
            combineTargetFor: null,
            shouldAnimateDisplacement: !0,
            snapshot: Xc(null),
          },
        };
        function Ll() {
          const n = ee((m, y) => ({ x: m, y })),
            i = ee(Xc),
            c = ee((m, y = null, _) => ({
              mapped: {
                type: "SECONDARY",
                offset: m,
                combineTargetFor: y,
                shouldAnimateDisplacement: _,
                snapshot: i(y),
              },
            })),
            u = (m) => (m ? c(we, m, !0) : null),
            d = (m, y, _, I) => {
              const S = _.displaced.visible[m],
                $ = !!(I.inVirtualList && I.effected[m]),
                x = fe(_),
                O = x && x.draggableId === m ? y : null;
              if (!S) {
                if (!$) return u(O);
                if (_.displaced.invisible[m]) return null;
                const B = bt(I.displacedBy.point),
                  K = n(B.x, B.y);
                return c(K, O, !0);
              }
              if ($) return u(O);
              const Z = _.displacedBy.point,
                F = n(Z.x, Z.y);
              return c(F, O, S.shouldAnimate);
            };
          return (m, y) => {
            if (on(m))
              return m.critical.draggable.id === y.draggableId
                ? null
                : d(
                    y.draggableId,
                    m.critical.draggable.id,
                    m.impact,
                    m.afterCritical,
                  );
            if (m.phase === "DROP_ANIMATING") {
              const _ = m.completed;
              return _.result.draggableId === y.draggableId
                ? null
                : d(
                    y.draggableId,
                    _.result.draggableId,
                    _.impact,
                    _.afterCritical,
                  );
            }
            return null;
          };
        }
        var Cn = Jn(
          () => {
            const n = sr(),
              i = Ll();
            return (u, d) => n(u, d) || i(u, d) || Zl;
          },
          { dropAnimationFinished: Ja },
          null,
          { context: ei, areStatePropsEqual: pi },
        )(Cl);
        function lr(n) {
          return Tn(cr).isUsingCloneFor === n.draggableId && !n.isClone
            ? null
            : h.createElement(Cn, n);
        }
        function Bl(n) {
          const i =
              typeof n.isDragDisabled == "boolean" ? !n.isDragDisabled : !0,
            c = !!n.disableInteractiveElementBlocking,
            u = !!n.shouldRespectForcePress;
          return h.createElement(
            lr,
            (0, mt.A)({}, n, {
              isClone: !1,
              isEnabled: i,
              canDragInteractiveElements: c,
              shouldRespectForcePress: u,
            }),
          );
        }
        const Co = (n) => (i) => n === i,
          Fl = Co("scroll"),
          Gl = Co("auto"),
          mi = Co("visible"),
          Ro = (n, i) => i(n.overflowX) || i(n.overflowY),
          Zo = (n, i) => i(n.overflowX) && i(n.overflowY),
          Qc = (n) => {
            const i = window.getComputedStyle(n),
              c = { overflowX: i.overflowX, overflowY: i.overflowY };
            return Ro(c, Fl) || Ro(c, Gl);
          },
          Lo = () => !1,
          Bo = (n) =>
            n == null
              ? null
              : n === document.body
                ? Lo()
                  ? n
                  : null
                : n === document.documentElement
                  ? null
                  : Qc(n)
                    ? n
                    : Bo(n.parentElement);
        var su = (n) => {
            !n || Bo(n.parentElement);
          },
          gi = (n) => ({ x: n.scrollLeft, y: n.scrollTop });
        const es = (n) =>
          n
            ? window.getComputedStyle(n).position === "fixed"
              ? !0
              : es(n.parentElement)
            : !1;
        var ts = (n) => {
            const i = Bo(n),
              c = es(n);
            return { closestScrollable: i, isFixedOnPage: c };
          },
          Ml = ({
            descriptor: n,
            isEnabled: i,
            isCombineEnabled: c,
            isFixedOnPage: u,
            direction: d,
            client: p,
            page: m,
            closest: y,
          }) => {
            const _ = (() => {
                if (!y) return null;
                const { scrollSize: x, client: O } = y,
                  Z = Qi({
                    scrollHeight: x.scrollHeight,
                    scrollWidth: x.scrollWidth,
                    height: O.paddingBox.height,
                    width: O.paddingBox.width,
                  });
                return {
                  pageMarginBox: y.page.marginBox,
                  frameClient: O,
                  scrollSize: x,
                  shouldClipSubject: y.shouldClipSubject,
                  scroll: {
                    initial: y.scroll,
                    current: y.scroll,
                    max: Z,
                    diff: { value: we, displacement: we },
                  },
                };
              })(),
              I = d === "vertical" ? jr : Oi,
              S = Q({ page: m, withPlaceholder: null, axis: I, frame: _ });
            return {
              descriptor: n,
              isCombineEnabled: c,
              isFixedOnPage: u,
              axis: I,
              isEnabled: i,
              client: p,
              page: m,
              frame: _,
              subject: S,
            };
          };
        const ns = (n, i) => {
          const c = (0, T.YH)(n);
          if (!i || n !== i) return c;
          const u = c.paddingBox.top - i.scrollTop,
            d = c.paddingBox.left - i.scrollLeft,
            p = u + i.scrollHeight,
            m = d + i.scrollWidth,
            y = { top: u, right: m, bottom: p, left: d },
            _ = (0, T.fT)(y, c.border);
          return (0, T.ge)({
            borderBox: _,
            margin: c.margin,
            border: c.border,
            padding: c.padding,
          });
        };
        var rs = ({
          ref: n,
          descriptor: i,
          env: c,
          windowScroll: u,
          direction: d,
          isDropDisabled: p,
          isCombineEnabled: m,
          shouldClipSubject: y,
        }) => {
          const _ = c.closestScrollable,
            I = ns(n, _),
            S = (0, T.SQ)(I, u),
            $ = (() => {
              if (!_) return null;
              const O = (0, T.YH)(_),
                Z = {
                  scrollHeight: _.scrollHeight,
                  scrollWidth: _.scrollWidth,
                };
              return {
                client: O,
                page: (0, T.SQ)(O, u),
                scroll: gi(_),
                scrollSize: Z,
                shouldClipSubject: y,
              };
            })();
          return Ml({
            descriptor: i,
            isEnabled: !p,
            isCombineEnabled: m,
            isFixedOnPage: c.isFixedOnPage,
            direction: d,
            client: I,
            page: S,
            closest: $,
          });
        };
        const is = { passive: !1 },
          Wl = { passive: !0 };
        var Fo = (n) => (n.shouldPublishImmediately ? is : Wl);
        const It = (n) => (n && n.env.closestScrollable) || null;
        function os(n) {
          const i = (0, h.useRef)(null),
            c = Tn(En),
            u = ri("droppable"),
            { registry: d, marshal: p } = c,
            m = rr(n),
            y = (0, g.Kr)(
              () => ({ id: n.droppableId, type: n.type, mode: n.mode }),
              [n.droppableId, n.mode, n.type],
            ),
            _ = (0, h.useRef)(y),
            I = (0, g.Kr)(
              () =>
                ee((Y, oe) => {
                  i.current || L(!1);
                  const ie = { x: Y, y: oe };
                  p.updateDroppableScroll(y.id, ie);
                }),
              [y.id, p],
            ),
            S = (0, g.hb)(() => {
              const Y = i.current;
              return !Y || !Y.env.closestScrollable
                ? we
                : gi(Y.env.closestScrollable);
            }, []),
            $ = (0, g.hb)(() => {
              const Y = S();
              I(Y.x, Y.y);
            }, [S, I]),
            x = (0, g.Kr)(() => (0, Ye.A)($), [$]),
            O = (0, g.hb)(() => {
              const Y = i.current,
                oe = It(Y);
              if (
                ((Y && oe) || L(!1), Y.scrollOptions.shouldPublishImmediately)
              ) {
                $();
                return;
              }
              x();
            }, [x, $]),
            Z = (0, g.hb)(
              (Y, oe) => {
                i.current && L(!1);
                const ie = m.current,
                  ge = ie.getDroppableRef();
                ge || L(!1);
                const me = ts(ge),
                  Xe = { ref: ge, descriptor: y, env: me, scrollOptions: oe };
                i.current = Xe;
                const ve = rs({
                    ref: ge,
                    descriptor: y,
                    env: me,
                    windowScroll: Y,
                    direction: ie.direction,
                    isDropDisabled: ie.isDropDisabled,
                    isCombineEnabled: ie.isCombineEnabled,
                    shouldClipSubject: !ie.ignoreContainerClipping,
                  }),
                  nt = me.closestScrollable;
                return (
                  nt &&
                    (nt.setAttribute(co.contextId, c.contextId),
                    nt.addEventListener("scroll", O, Fo(Xe.scrollOptions))),
                  ve
                );
              },
              [c.contextId, y, O, m],
            ),
            F = (0, g.hb)(() => {
              const Y = i.current,
                oe = It(Y);
              return (Y && oe) || L(!1), gi(oe);
            }, []),
            B = (0, g.hb)(() => {
              const Y = i.current;
              Y || L(!1);
              const oe = It(Y);
              (i.current = null),
                oe &&
                  (x.cancel(),
                  oe.removeAttribute(co.contextId),
                  oe.removeEventListener("scroll", O, Fo(Y.scrollOptions)));
            }, [O, x]),
            K = (0, g.hb)((Y) => {
              const oe = i.current;
              oe || L(!1);
              const ie = It(oe);
              ie || L(!1), (ie.scrollTop += Y.y), (ie.scrollLeft += Y.x);
            }, []),
            X = (0, g.Kr)(
              () => ({
                getDimensionAndWatchScroll: Z,
                getScrollWhileDragging: F,
                dragStopped: B,
                scroll: K,
              }),
              [B, Z, F, K],
            ),
            re = (0, g.Kr)(
              () => ({ uniqueId: u, descriptor: y, callbacks: X }),
              [X, y, u],
            );
          ae(
            () => (
              (_.current = re.descriptor),
              d.droppable.register(re),
              () => {
                i.current && B(), d.droppable.unregister(re);
              }
            ),
            [X, y, B, re, p, d.droppable],
          ),
            ae(() => {
              i.current &&
                p.updateDroppableIsEnabled(_.current.id, !n.isDropDisabled);
            }, [n.isDropDisabled, p]),
            ae(() => {
              i.current &&
                p.updateDroppableIsCombineEnabled(
                  _.current.id,
                  n.isCombineEnabled,
                );
            }, [n.isCombineEnabled, p]);
        }
        function ur() {}
        const Go = { width: 0, height: 0, margin: f },
          Jl = ({ isAnimatingOpenOnMount: n, placeholder: i, animate: c }) =>
            n || c === "close"
              ? Go
              : {
                  height: i.client.borderBox.height,
                  width: i.client.borderBox.width,
                  margin: i.client.margin,
                },
          Mo = ({ isAnimatingOpenOnMount: n, placeholder: i, animate: c }) => {
            const u = Jl({
              isAnimatingOpenOnMount: n,
              placeholder: i,
              animate: c,
            });
            return {
              display: i.display,
              boxSizing: "border-box",
              width: u.width,
              height: u.height,
              marginTop: u.margin.top,
              marginRight: u.margin.right,
              marginBottom: u.margin.bottom,
              marginLeft: u.margin.left,
              flexShrink: "0",
              flexGrow: "0",
              pointerEvents: "none",
              transition: c !== "none" ? xn.placeholder : null,
            };
          },
          Vl = (n) => {
            const i = (0, h.useRef)(null),
              c = (0, g.hb)(() => {
                i.current && (clearTimeout(i.current), (i.current = null));
              }, []),
              { animate: u, onTransitionEnd: d, onClose: p, contextId: m } = n,
              [y, _] = (0, h.useState)(n.animate === "open");
            (0, h.useEffect)(
              () =>
                y
                  ? u !== "open"
                    ? (c(), _(!1), ur)
                    : i.current
                      ? ur
                      : ((i.current = setTimeout(() => {
                          (i.current = null), _(!1);
                        })),
                        c)
                  : ur,
              [u, y, c],
            );
            const I = (0, g.hb)(
                ($) => {
                  $.propertyName === "height" && (d(), u === "close" && p());
                },
                [u, p, d],
              ),
              S = Mo({
                isAnimatingOpenOnMount: y,
                animate: n.animate,
                placeholder: n.placeholder,
              });
            return h.createElement(n.placeholder.tagName, {
              style: S,
              "data-rfd-placeholder-context-id": m,
              onTransitionEnd: I,
              ref: n.innerRef,
            });
          };
        var as = h.memo(Vl);
        function cn(n) {
          return typeof n == "boolean";
        }
        function Wo(n, i) {
          i.forEach((c) => c(n));
        }
        const vi = [
            function ({ props: i }) {
              i.droppableId || L(!1), typeof i.droppableId != "string" && L(!1);
            },
            function ({ props: i }) {
              cn(i.isDropDisabled) || L(!1),
                cn(i.isCombineEnabled) || L(!1),
                cn(i.ignoreContainerClipping) || L(!1);
            },
            function ({ getDroppableRef: i }) {
              Kc(i());
            },
          ],
          cs = [
            function ({ props: i, getPlaceholderRef: c }) {
              !i.placeholder || c();
            },
          ],
          Kl = [
            function ({ props: i }) {
              i.renderClone || L(!1);
            },
            function ({ getPlaceholderRef: i }) {
              i() && L(!1);
            },
          ];
        function Hl(n) {
          Un(() => {
            Wo(n, vi),
              n.props.mode === "standard" && Wo(n, cs),
              n.props.mode === "virtual" && Wo(n, Kl);
          });
        }
        class ss extends h.PureComponent {
          constructor(...i) {
            super(...i),
              (this.state = {
                isVisible: !!this.props.on,
                data: this.props.on,
                animate:
                  this.props.shouldAnimate && this.props.on ? "open" : "none",
              }),
              (this.onClose = () => {
                this.state.animate === "close" &&
                  this.setState({ isVisible: !1 });
              });
          }
          static getDerivedStateFromProps(i, c) {
            return i.shouldAnimate
              ? i.on
                ? { isVisible: !0, data: i.on, animate: "open" }
                : c.isVisible
                  ? { isVisible: !0, data: c.data, animate: "close" }
                  : { isVisible: !1, animate: "close", data: null }
              : { isVisible: !!i.on, data: i.on, animate: "none" };
          }
          render() {
            if (!this.state.isVisible) return null;
            const i = {
              onClose: this.onClose,
              data: this.state.data,
              animate: this.state.animate,
            };
            return this.props.children(i);
          }
        }
        var us = (n) => {
          const i = (0, h.useContext)(En);
          i || L(!1);
          const { contextId: c, isMovementAllowed: u } = i,
            d = (0, h.useRef)(null),
            p = (0, h.useRef)(null),
            {
              children: m,
              droppableId: y,
              type: _,
              mode: I,
              direction: S,
              ignoreContainerClipping: $,
              isDropDisabled: x,
              isCombineEnabled: O,
              snapshot: Z,
              useClone: F,
              updateViewportMaxScroll: B,
              getContainerForClone: K,
            } = n,
            X = (0, g.hb)(() => d.current, []),
            re = (0, g.hb)((ze = null) => {
              d.current = ze;
            }, []),
            Y = (0, g.hb)(() => p.current, []),
            oe = (0, g.hb)((ze = null) => {
              p.current = ze;
            }, []);
          Hl({ props: n, getDroppableRef: X, getPlaceholderRef: Y });
          const ie = (0, g.hb)(() => {
            u() && B({ maxScroll: to() });
          }, [u, B]);
          os({
            droppableId: y,
            type: _,
            mode: I,
            direction: S,
            isDropDisabled: x,
            isCombineEnabled: O,
            ignoreContainerClipping: $,
            getDroppableRef: X,
          });
          const ge = (0, g.Kr)(
              () =>
                h.createElement(
                  ss,
                  {
                    on: n.placeholder,
                    shouldAnimate: n.shouldAnimatePlaceholder,
                  },
                  ({ onClose: ze, data: xt, animate: Rn }) =>
                    h.createElement(as, {
                      placeholder: xt,
                      onClose: ze,
                      innerRef: oe,
                      animate: Rn,
                      contextId: c,
                      onTransitionEnd: ie,
                    }),
                ),
              [c, ie, n.placeholder, n.shouldAnimatePlaceholder, oe],
            ),
            me = (0, g.Kr)(
              () => ({
                innerRef: re,
                placeholder: ge,
                droppableProps: {
                  "data-rfd-droppable-id": y,
                  "data-rfd-droppable-context-id": c,
                },
              }),
              [c, y, ge, re],
            ),
            Xe = F ? F.dragging.draggableId : null,
            ve = (0, g.Kr)(
              () => ({ droppableId: y, type: _, isUsingCloneFor: Xe }),
              [y, Xe, _],
            );
          function nt() {
            if (!F) return null;
            const { dragging: ze, render: xt } = F,
              Rn = h.createElement(
                lr,
                {
                  draggableId: ze.draggableId,
                  index: ze.source.index,
                  isClone: !0,
                  isEnabled: !0,
                  shouldRespectForcePress: !1,
                  canDragInteractiveElements: !0,
                },
                (ot, dr) => xt(ot, dr, ze),
              );
            return Pe.createPortal(Rn, K());
          }
          return h.createElement(cr.Provider, { value: ve }, m(me, Z), nt());
        };
        function ql() {
          return document.body || L(!1), document.body;
        }
        const Jo = {
            mode: "standard",
            type: "DEFAULT",
            direction: "vertical",
            isDropDisabled: !1,
            isCombineEnabled: !1,
            ignoreContainerClipping: !1,
            renderClone: null,
            getContainerForClone: ql,
          },
          ds = (n) => {
            let i = { ...n },
              c;
            for (c in Jo) n[c] === void 0 && (i = { ...i, [c]: Jo[c] });
            return i;
          },
          hi = (n, i) => n === i.droppable.type,
          Vo = (n, i) => i.draggables[n.draggable.id];
        var fs = Jn(
          () => {
            const n = {
                placeholder: null,
                shouldAnimatePlaceholder: !0,
                snapshot: {
                  isDraggingOver: !1,
                  draggingOverWith: null,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !1,
                },
                useClone: null,
              },
              i = { ...n, shouldAnimatePlaceholder: !1 },
              c = ee((p) => ({
                draggableId: p.id,
                type: p.type,
                source: { index: p.index, droppableId: p.droppableId },
              })),
              u = ee((p, m, y, _, I, S) => {
                const $ = I.descriptor.id;
                if (I.descriptor.droppableId === p) {
                  const Z = S ? { render: S, dragging: c(I.descriptor) } : null,
                    F = {
                      isDraggingOver: y,
                      draggingOverWith: y ? $ : null,
                      draggingFromThisWith: $,
                      isUsingPlaceholder: !0,
                    };
                  return {
                    placeholder: I.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: F,
                    useClone: Z,
                  };
                }
                if (!m) return i;
                if (!_) return n;
                const O = {
                  isDraggingOver: y,
                  draggingOverWith: $,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: I.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: O,
                  useClone: null,
                };
              });
            return (p, m) => {
              const y = ds(m),
                _ = y.droppableId,
                I = y.type,
                S = !y.isDropDisabled,
                $ = y.renderClone;
              if (on(p)) {
                const x = p.critical;
                if (!hi(I, x)) return i;
                const O = Vo(x, p.dimensions),
                  Z = tt(p.impact) === _;
                return u(_, S, Z, Z, O, $);
              }
              if (p.phase === "DROP_ANIMATING") {
                const x = p.completed;
                if (!hi(I, x.critical)) return i;
                const O = Vo(x.critical, p.dimensions);
                return u(_, S, qc(x.result) === _, tt(x.impact) === _, O, $);
              }
              if (p.phase === "IDLE" && p.completed && !p.shouldFlush) {
                const x = p.completed;
                if (!hi(I, x.critical)) return i;
                const O = tt(x.impact) === _,
                  Z = !!(x.impact.at && x.impact.at.type === "COMBINE"),
                  F = x.critical.droppable.id === _;
                return O ? (Z ? n : i) : F ? n : i;
              }
              return i;
            };
          },
          { updateViewportMaxScroll: Za },
          (n, i, c) => ({ ...ds(c), ...n, ...i }),
          { context: ei, areStatePropsEqual: pi },
        )(us);
      },
      38877: (Bt, Ze) => {
        var V; /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var h = Symbol.for("react.element"),
          Pe = Symbol.for("react.portal"),
          j = Symbol.for("react.fragment"),
          We = Symbol.for("react.strict_mode"),
          je = Symbol.for("react.profiler"),
          Ee = Symbol.for("react.provider"),
          ke = Symbol.for("react.context"),
          te = Symbol.for("react.server_context"),
          ne = Symbol.for("react.forward_ref"),
          ue = Symbol.for("react.suspense"),
          De = Symbol.for("react.suspense_list"),
          Le = Symbol.for("react.memo"),
          Ue = Symbol.for("react.lazy"),
          at = Symbol.for("react.offscreen"),
          Je;
        Je = Symbol.for("react.module.reference");
        function le(M) {
          if (typeof M == "object" && M !== null) {
            var ye = M.$$typeof;
            switch (ye) {
              case h:
                switch (((M = M.type), M)) {
                  case j:
                  case je:
                  case We:
                  case ue:
                  case De:
                    return M;
                  default:
                    switch (((M = M && M.$$typeof), M)) {
                      case te:
                      case ke:
                      case ne:
                      case Ue:
                      case Le:
                      case Ee:
                        return M;
                      default:
                        return ye;
                    }
                }
              case Pe:
                return ye;
            }
          }
        }
        (V = ke),
          (V = Ee),
          (V = h),
          (V = ne),
          (V = j),
          (V = Ue),
          (V = Le),
          (V = Pe),
          (V = je),
          (V = We),
          (V = ue),
          (V = De),
          (V = function () {
            return !1;
          }),
          (V = function () {
            return !1;
          }),
          (Ze.isContextConsumer = function (M) {
            return le(M) === ke;
          }),
          (V = function (M) {
            return le(M) === Ee;
          }),
          (V = function (M) {
            return typeof M == "object" && M !== null && M.$$typeof === h;
          }),
          (V = function (M) {
            return le(M) === ne;
          }),
          (Ze.isFragment = function (M) {
            return le(M) === j;
          }),
          (V = function (M) {
            return le(M) === Ue;
          }),
          (V = function (M) {
            return le(M) === Le;
          }),
          (V = function (M) {
            return le(M) === Pe;
          }),
          (V = function (M) {
            return le(M) === je;
          }),
          (V = function (M) {
            return le(M) === We;
          }),
          (V = function (M) {
            return le(M) === ue;
          }),
          (V = function (M) {
            return le(M) === De;
          }),
          (V = function (M) {
            return (
              typeof M == "string" ||
              typeof M == "function" ||
              M === j ||
              M === je ||
              M === We ||
              M === ue ||
              M === De ||
              M === at ||
              (typeof M == "object" &&
                M !== null &&
                (M.$$typeof === Ue ||
                  M.$$typeof === Le ||
                  M.$$typeof === Ee ||
                  M.$$typeof === ke ||
                  M.$$typeof === ne ||
                  M.$$typeof === Je ||
                  M.getModuleId !== void 0))
            );
          }),
          (V = le);
      },
      98193: (Bt, Ze, V) => {
        Bt.exports = V(38877);
      },
      68980: (Bt, Ze, V) => {
        V.d(Ze, {
          YOg: () => cn,
          rLB: () => $i,
          auy: () => Pe,
          k5n: () => y,
          Whr: () => lr,
          euz: () => S,
          aig: () => Yc,
          Ikc: () => cs,
          A$I: () => h,
          YjP: () => ar,
          uEf: () => du,
          ZSL: () => g,
        });
        var h = {};
        V.r(h),
          V.d(h, {
            K3: () => ln,
            r0: () => vt,
            o: () => Pt,
            zM: () => Ot,
            zr: () => ct,
            l7: () => Jt,
            gF: () => We,
            Gl: () => je,
            p6: () => dn,
            w$: () => Dt,
            p0: () => ue,
            hQ: () => Ve,
            Rp: () => M,
            Zg: () => Wt,
            Os: () => Le,
            F: () => ht,
            nd: () => fn,
            uX: () => wt,
            ug: () => gt,
            fO: () => te,
            AC: () => qt,
            Ak: () => ne,
            ai: () => st,
            Yj: () => rt,
            kB: () => Kt,
            Z0: () => Ee,
            Zv: () => Nt,
            uR: () => Ue,
            kM: () => ke,
          });
        var Pe = {};
        V.r(Pe),
          V.d(Pe, {
            bigint: () => vu,
            boolean: () => gu,
            date: () => hu,
            number: () => mu,
            string: () => pu,
          });
        var j = V(62617);
        const We = /^[cC][0-9a-z]{6,}$/,
          je = /^[0-9a-z]+$/,
          Ee = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
          ke = /^[0-9a-vA-V]{20}$/,
          te = /^[A-Za-z0-9]{27}$/,
          ne = /^[a-zA-Z0-9_-]{21}$/,
          ue =
            /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
          De =
            /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
          Le =
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
          Ue = (e) =>
            e
              ? new RegExp(
                  `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
                )
              : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          at = null,
          Je = null,
          le = null,
          M =
            /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
          ye =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          pt =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          Ft = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
          Gt = null,
          mt =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          Mt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
        function Wt() {
          return new RegExp(Mt, "u");
        }
        const wt =
            /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
          gt =
            /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
          Ln = (e) => {
            const r = util.escapeRegex(e ?? ":");
            return new RegExp(
              `^(?:[0-9A-F]{2}${r}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${r}){5}[0-9a-f]{2}$`,
            );
          },
          ct =
            /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
          Jt =
            /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
          ln =
            /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
          vt = /^[A-Za-z0-9_-]*$/,
          un =
            /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
          Bn =
            /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
          ht = /^https?$/,
          Ve = /^\+[1-9]\d{6,14}$/,
          Vt =
            "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
          dn = new RegExp(`^${Vt}$`);
        function zt(e) {
          const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
          return typeof e.precision == "number"
            ? e.precision === -1
              ? `${r}`
              : e.precision === 0
                ? `${r}:[0-5]\\d`
                : `${r}:[0-5]\\d\\.\\d{${e.precision}}`
            : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
        }
        function Kt(e) {
          return new RegExp(`^${zt(e)}$`);
        }
        function Dt(e) {
          const r = zt({ precision: e.precision }),
            a = ["Z"];
          e.local && a.push(""),
            e.offset && a.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
          const s = `${r}(?:${a.join("|")})`;
          return new RegExp(`^${Vt}T(?:${s})$`);
        }
        const rt = (e) => {
            const r = e
              ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
              : "[\\s\\S]*";
            return new RegExp(`^${r}$`);
          },
          Pt = /^-?\d+n?$/,
          fn = /^-?\d+$/,
          st = /^-?\d+(?:\.\d+)?$/,
          Ot = /^(?:true|false)$/i,
          Ht = /^null$/i,
          Fn = /^undefined$/i,
          qt = /^[^A-Z]*$/,
          Nt = /^[^a-z]*$/,
          Gn = /^[0-9a-fA-F]*$/;
        function Mn(e, r) {
          return new RegExp(`^[A-Za-z0-9+/]{${e}}${r}$`);
        }
        function jt(e) {
          return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
        }
        const mr = /^[0-9a-fA-F]{32}$/,
          gr = null,
          pn = null,
          Wn = /^[0-9a-fA-F]{40}$/,
          vr = null,
          hr = null,
          Et = /^[0-9a-fA-F]{64}$/,
          mn = null,
          Jn = null,
          br = /^[0-9a-fA-F]{96}$/,
          yr = null,
          Ii = null,
          xi = /^[0-9a-fA-F]{128}$/,
          k = null,
          E = null;
        var g = V(99482);
        const T = j.xI("$ZodCheck", (e, r) => {
            var a;
            e._zod ?? (e._zod = {}),
              (e._zod.def = r),
              (a = e._zod).onattach ?? (a.onattach = []);
          }),
          ce = { number: "number", bigint: "bigint", object: "date" },
          de = j.xI("$ZodCheckLessThan", (e, r) => {
            T.init(e, r);
            const a = ce[typeof r.value];
            e._zod.onattach.push((s) => {
              const l = s._zod.bag,
                v =
                  (r.inclusive ? l.maximum : l.exclusiveMaximum) ??
                  Number.POSITIVE_INFINITY;
              r.value < v &&
                (r.inclusive
                  ? (l.maximum = r.value)
                  : (l.exclusiveMaximum = r.value));
            }),
              (e._zod.check = (s) => {
                (r.inclusive ? s.value <= r.value : s.value < r.value) ||
                  s.issues.push({
                    origin: a,
                    code: "too_big",
                    maximum:
                      typeof r.value == "object" ? r.value.getTime() : r.value,
                    input: s.value,
                    inclusive: r.inclusive,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          pe = j.xI("$ZodCheckGreaterThan", (e, r) => {
            T.init(e, r);
            const a = ce[typeof r.value];
            e._zod.onattach.push((s) => {
              const l = s._zod.bag,
                v =
                  (r.inclusive ? l.minimum : l.exclusiveMinimum) ??
                  Number.NEGATIVE_INFINITY;
              r.value > v &&
                (r.inclusive
                  ? (l.minimum = r.value)
                  : (l.exclusiveMinimum = r.value));
            }),
              (e._zod.check = (s) => {
                (r.inclusive ? s.value >= r.value : s.value > r.value) ||
                  s.issues.push({
                    origin: a,
                    code: "too_small",
                    minimum:
                      typeof r.value == "object" ? r.value.getTime() : r.value,
                    input: s.value,
                    inclusive: r.inclusive,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          ee = j.xI("$ZodCheckMultipleOf", (e, r) => {
            T.init(e, r),
              e._zod.onattach.push((a) => {
                var s;
                (s = a._zod.bag).multipleOf ?? (s.multipleOf = r.value);
              }),
              (e._zod.check = (a) => {
                if (typeof a.value != typeof r.value)
                  throw new Error(
                    "Cannot mix number and bigint in multiple_of check.",
                  );
                (typeof a.value == "bigint"
                  ? a.value % r.value === BigInt(0)
                  : g.LG(a.value, r.value) === 0) ||
                  a.issues.push({
                    origin: typeof a.value,
                    code: "not_multiple_of",
                    divisor: r.value,
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          Ye = j.xI("$ZodCheckNumberFormat", (e, r) => {
            T.init(e, r), (r.format = r.format || "float64");
            const a = r.format?.includes("int"),
              s = a ? "int" : "number",
              [l, v] = g.zH[r.format];
            e._zod.onattach.push((b) => {
              const D = b._zod.bag;
              (D.format = r.format),
                (D.minimum = l),
                (D.maximum = v),
                a && (D.pattern = fn);
            }),
              (e._zod.check = (b) => {
                const D = b.value;
                if (a) {
                  if (!Number.isInteger(D)) {
                    b.issues.push({
                      expected: s,
                      format: r.format,
                      code: "invalid_type",
                      continue: !1,
                      input: D,
                      inst: e,
                    });
                    return;
                  }
                  if (!Number.isSafeInteger(D)) {
                    D > 0
                      ? b.issues.push({
                          input: D,
                          code: "too_big",
                          maximum: Number.MAX_SAFE_INTEGER,
                          note: "Integers must be within the safe integer range.",
                          inst: e,
                          origin: s,
                          inclusive: !0,
                          continue: !r.abort,
                        })
                      : b.issues.push({
                          input: D,
                          code: "too_small",
                          minimum: Number.MIN_SAFE_INTEGER,
                          note: "Integers must be within the safe integer range.",
                          inst: e,
                          origin: s,
                          inclusive: !0,
                          continue: !r.abort,
                        });
                    return;
                  }
                }
                D < l &&
                  b.issues.push({
                    origin: "number",
                    input: D,
                    code: "too_small",
                    minimum: l,
                    inclusive: !0,
                    inst: e,
                    continue: !r.abort,
                  }),
                  D > v &&
                    b.issues.push({
                      origin: "number",
                      input: D,
                      code: "too_big",
                      maximum: v,
                      inclusive: !0,
                      inst: e,
                      continue: !r.abort,
                    });
              });
          }),
          Ke = null,
          Si = null,
          ki = null,
          $r = null,
          _r = j.xI("$ZodCheckMaxLength", (e, r) => {
            var a;
            T.init(e, r),
              (a = e._zod.def).when ??
                (a.when = (s) => {
                  const l = s.value;
                  return !g.cl(l) && l.length !== void 0;
                }),
              e._zod.onattach.push((s) => {
                const l = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
                r.maximum < l && (s._zod.bag.maximum = r.maximum);
              }),
              (e._zod.check = (s) => {
                const l = s.value;
                if (l.length <= r.maximum) return;
                const b = g.Rc(l);
                s.issues.push({
                  origin: b,
                  code: "too_big",
                  maximum: r.maximum,
                  inclusive: !0,
                  input: l,
                  inst: e,
                  continue: !r.abort,
                });
              });
          }),
          Ir = j.xI("$ZodCheckMinLength", (e, r) => {
            var a;
            T.init(e, r),
              (a = e._zod.def).when ??
                (a.when = (s) => {
                  const l = s.value;
                  return !g.cl(l) && l.length !== void 0;
                }),
              e._zod.onattach.push((s) => {
                const l = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
                r.minimum > l && (s._zod.bag.minimum = r.minimum);
              }),
              (e._zod.check = (s) => {
                const l = s.value;
                if (l.length >= r.minimum) return;
                const b = g.Rc(l);
                s.issues.push({
                  origin: b,
                  code: "too_small",
                  minimum: r.minimum,
                  inclusive: !0,
                  input: l,
                  inst: e,
                  continue: !r.abort,
                });
              });
          }),
          Vn = j.xI("$ZodCheckLengthEquals", (e, r) => {
            var a;
            T.init(e, r),
              (a = e._zod.def).when ??
                (a.when = (s) => {
                  const l = s.value;
                  return !g.cl(l) && l.length !== void 0;
                }),
              e._zod.onattach.push((s) => {
                const l = s._zod.bag;
                (l.minimum = r.length),
                  (l.maximum = r.length),
                  (l.length = r.length);
              }),
              (e._zod.check = (s) => {
                const l = s.value,
                  v = l.length;
                if (v === r.length) return;
                const b = g.Rc(l),
                  D = v > r.length;
                s.issues.push({
                  origin: b,
                  ...(D
                    ? { code: "too_big", maximum: r.length }
                    : { code: "too_small", minimum: r.length }),
                  inclusive: !0,
                  exact: !0,
                  input: s.value,
                  inst: e,
                  continue: !r.abort,
                });
              });
          }),
          Ut = j.xI("$ZodCheckStringFormat", (e, r) => {
            var a, s;
            T.init(e, r),
              e._zod.onattach.push((l) => {
                const v = l._zod.bag;
                (v.format = r.format),
                  r.pattern &&
                    (v.patterns ?? (v.patterns = new Set()),
                    v.patterns.add(r.pattern));
              }),
              r.pattern
                ? ((a = e._zod).check ??
                  (a.check = (l) => {
                    (r.pattern.lastIndex = 0),
                      !r.pattern.test(l.value) &&
                        l.issues.push({
                          origin: "string",
                          code: "invalid_format",
                          format: r.format,
                          input: l.value,
                          ...(r.pattern
                            ? { pattern: r.pattern.toString() }
                            : {}),
                          inst: e,
                          continue: !r.abort,
                        });
                  }))
                : ((s = e._zod).check ?? (s.check = () => {}));
          }),
          wi = j.xI("$ZodCheckRegex", (e, r) => {
            Ut.init(e, r),
              (e._zod.check = (a) => {
                (r.pattern.lastIndex = 0),
                  !r.pattern.test(a.value) &&
                    a.issues.push({
                      origin: "string",
                      code: "invalid_format",
                      format: "regex",
                      input: a.value,
                      pattern: r.pattern.toString(),
                      inst: e,
                      continue: !r.abort,
                    });
              });
          }),
          xr = j.xI("$ZodCheckLowerCase", (e, r) => {
            r.pattern ?? (r.pattern = qt), Ut.init(e, r);
          }),
          it = j.xI("$ZodCheckUpperCase", (e, r) => {
            r.pattern ?? (r.pattern = Nt), Ut.init(e, r);
          }),
          Sr = j.xI("$ZodCheckIncludes", (e, r) => {
            T.init(e, r);
            const a = g.$f(r.includes),
              s = new RegExp(
                typeof r.position == "number" ? `^.{${r.position}}${a}` : a,
              );
            (r.pattern = s),
              e._zod.onattach.push((l) => {
                const v = l._zod.bag;
                v.patterns ?? (v.patterns = new Set()), v.patterns.add(s);
              }),
              (e._zod.check = (l) => {
                l.value.includes(r.includes, r.position) ||
                  l.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "includes",
                    includes: r.includes,
                    input: l.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          Be = j.xI("$ZodCheckStartsWith", (e, r) => {
            T.init(e, r);
            const a = new RegExp(`^${g.$f(r.prefix)}.*`);
            r.pattern ?? (r.pattern = a),
              e._zod.onattach.push((s) => {
                const l = s._zod.bag;
                l.patterns ?? (l.patterns = new Set()), l.patterns.add(a);
              }),
              (e._zod.check = (s) => {
                s.value.startsWith(r.prefix) ||
                  s.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "starts_with",
                    prefix: r.prefix,
                    input: s.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          kr = j.xI("$ZodCheckEndsWith", (e, r) => {
            T.init(e, r);
            const a = new RegExp(`.*${g.$f(r.suffix)}$`);
            r.pattern ?? (r.pattern = a),
              e._zod.onattach.push((s) => {
                const l = s._zod.bag;
                l.patterns ?? (l.patterns = new Set()), l.patterns.add(a);
              }),
              (e._zod.check = (s) => {
                s.value.endsWith(r.suffix) ||
                  s.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "ends_with",
                    suffix: r.suffix,
                    input: s.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          });
        function wr(e, r, a) {
          e.issues.length && r.issues.push(...util.prefixIssues(a, e.issues));
        }
        const Xt = null,
          L = null,
          zr = j.xI("$ZodCheckOverwrite", (e, r) => {
            T.init(e, r),
              (e._zod.check = (a) => {
                a.value = r.tx(a.value);
              });
          });
        class Dr {
          constructor(r = []) {
            (this.content = []), (this.indent = 0), this && (this.args = r);
          }
          indented(r) {
            (this.indent += 1), r(this), (this.indent -= 1);
          }
          write(r) {
            if (typeof r == "function") {
              r(this, { execution: "sync" }), r(this, { execution: "async" });
              return;
            }
            const s = r
                .split(`
`)
                .filter((b) => b),
              l = Math.min(...s.map((b) => b.length - b.trimStart().length)),
              v = s
                .map((b) => b.slice(l))
                .map((b) => " ".repeat(this.indent * 2) + b);
            for (const b of v) this.content.push(b);
          }
          compile() {
            const r = Function,
              a = this?.args,
              l = [...(this?.content ?? [""]).map((v) => `  ${v}`)];
            return new r(
              ...a,
              l.join(`
`),
            );
          }
        }
        const At = (e, r) => {
            (e.name = "$ZodError"),
              Object.defineProperty(e, "_zod", {
                value: e._zod,
                enumerable: !1,
              }),
              Object.defineProperty(e, "issues", { value: r, enumerable: !1 }),
              (e.message = JSON.stringify(r, g.k8, 2)),
              Object.defineProperty(e, "toString", {
                value: () => e.message,
                enumerable: !1,
              });
          },
          gn = (0, j.xI)("$ZodError", At),
          Ae = (0, j.xI)("$ZodError", At, { Parent: Error });
        function Kn(e, r = (a) => a.message) {
          const a = {},
            s = [];
          for (const l of e.issues)
            l.path.length > 0
              ? ((a[l.path[0]] = a[l.path[0]] || []), a[l.path[0]].push(r(l)))
              : s.push(r(l));
          return { formErrors: s, fieldErrors: a };
        }
        function Pr(e, r = (a) => a.message) {
          const a = { _errors: [] },
            s = (l, v = []) => {
              for (const b of l.issues)
                if (b.code === "invalid_union" && b.errors.length)
                  b.errors.map((D) => s({ issues: D }, [...v, ...b.path]));
                else if (b.code === "invalid_key")
                  s({ issues: b.issues }, [...v, ...b.path]);
                else if (b.code === "invalid_element")
                  s({ issues: b.issues }, [...v, ...b.path]);
                else {
                  const D = [...v, ...b.path];
                  if (D.length === 0) a._errors.push(r(b));
                  else {
                    let U = a,
                      R = 0;
                    for (; R < D.length; ) {
                      const G = D[R];
                      R === D.length - 1
                        ? ((U[G] = U[G] || { _errors: [] }),
                          U[G]._errors.push(r(b)))
                        : (U[G] = U[G] || { _errors: [] }),
                        (U = U[G]),
                        R++;
                    }
                  }
                }
            };
          return s(e), a;
        }
        function Or(e, r = (a) => a.message) {
          const a = { errors: [] },
            s = (l, v = []) => {
              var b, D;
              for (const U of l.issues)
                if (U.code === "invalid_union" && U.errors.length)
                  U.errors.map((R) => s({ issues: R }, [...v, ...U.path]));
                else if (U.code === "invalid_key")
                  s({ issues: U.issues }, [...v, ...U.path]);
                else if (U.code === "invalid_element")
                  s({ issues: U.issues }, [...v, ...U.path]);
                else {
                  const R = [...v, ...U.path];
                  if (R.length === 0) {
                    a.errors.push(r(U));
                    continue;
                  }
                  let G = a,
                    H = 0;
                  for (; H < R.length; ) {
                    const q = R[H],
                      J = H === R.length - 1;
                    typeof q == "string"
                      ? (G.properties ?? (G.properties = {}),
                        (b = G.properties)[q] ?? (b[q] = { errors: [] }),
                        (G = G.properties[q]))
                      : (G.items ?? (G.items = []),
                        (D = G.items)[q] ?? (D[q] = { errors: [] }),
                        (G = G.items[q])),
                      J && G.errors.push(r(U)),
                      H++;
                  }
                }
            };
          return s(e), a;
        }
        function zi(e) {
          const r = [],
            a = e.map((s) => (typeof s == "object" ? s.key : s));
          for (const s of a)
            typeof s == "number"
              ? r.push(`[${s}]`)
              : typeof s == "symbol"
                ? r.push(`[${JSON.stringify(String(s))}]`)
                : /[^\w$]/.test(s)
                  ? r.push(`[${JSON.stringify(s)}]`)
                  : (r.length && r.push("."), r.push(s));
          return r.join("");
        }
        function ea(e) {
          const r = [],
            a = [...e.issues].sort(
              (s, l) => (s.path ?? []).length - (l.path ?? []).length,
            );
          for (const s of a)
            r.push(`\u2716 ${s.message}`),
              s.path?.length && r.push(`  \u2192 at ${zi(s.path)}`);
          return r.join(`
`);
        }
        const lt = (e) => (r, a, s, l) => {
            const v = s ? { ...s, async: !1 } : { async: !1 },
              b = r._zod.run({ value: a, issues: [] }, v);
            if (b instanceof Promise) throw new j.GT();
            if (b.issues.length) {
              const D = new (l?.Err ?? e)(
                b.issues.map((U) => g.iR(U, v, j.$W())),
              );
              throw (g.gx(D, l?.callee), D);
            }
            return b.value;
          },
          we = lt(Ae),
          xe = (e) => async (r, a, s, l) => {
            const v = s ? { ...s, async: !0 } : { async: !0 };
            let b = r._zod.run({ value: a, issues: [] }, v);
            if ((b instanceof Promise && (b = await b), b.issues.length)) {
              const D = new (l?.Err ?? e)(
                b.issues.map((U) => g.iR(U, v, j.$W())),
              );
              throw (g.gx(D, l?.callee), D);
            }
            return b.value;
          },
          Fe = xe(Ae),
          He = (e) => (r, a, s) => {
            const l = s ? { ...s, async: !1 } : { async: !1 },
              v = r._zod.run({ value: a, issues: [] }, l);
            if (v instanceof Promise) throw new j.GT();
            return v.issues.length
              ? {
                  success: !1,
                  error: new (e ?? gn)(v.issues.map((b) => g.iR(b, l, j.$W()))),
                }
              : { success: !0, data: v.value };
          },
          bt = He(Ae),
          Qe = (e) => async (r, a, s) => {
            const l = s ? { ...s, async: !0 } : { async: !0 };
            let v = r._zod.run({ value: a, issues: [] }, l);
            return (
              v instanceof Promise && (v = await v),
              v.issues.length
                ? {
                    success: !1,
                    error: new e(v.issues.map((b) => g.iR(b, l, j.$W()))),
                  }
                : { success: !0, data: v.value }
            );
          },
          A = Qe(Ae),
          N = (e) => (r, a, s) => {
            const l = s
              ? { ...s, direction: "backward" }
              : { direction: "backward" };
            return lt(e)(r, a, l);
          },
          C = N(Ae),
          P = (e) => (r, a, s) => lt(e)(r, a, s),
          t = P(Ae),
          o = (e) => async (r, a, s) => {
            const l = s
              ? { ...s, direction: "backward" }
              : { direction: "backward" };
            return xe(e)(r, a, l);
          },
          f = o(Ae),
          w = (e) => async (r, a, s) => xe(e)(r, a, s),
          $e = w(Ae),
          W = (e) => (r, a, s) => {
            const l = s
              ? { ...s, direction: "backward" }
              : { direction: "backward" };
            return He(e)(r, a, l);
          },
          Q = W(Ae),
          he = (e) => (r, a, s) => He(e)(r, a, s),
          Ge = he(Ae),
          Te = (e) => async (r, a, s) => {
            const l = s
              ? { ...s, direction: "backward" }
              : { direction: "backward" };
            return Qe(e)(r, a, l);
          },
          Me = Te(Ae),
          Yt = (e) => async (r, a, s) => Qe(e)(r, a, s),
          Tt = Yt(Ae),
          Nr = { major: 4, minor: 4, patch: 3 },
          fe = j.xI("$ZodType", (e, r) => {
            var a;
            e ?? (e = {}),
              (e._zod.def = r),
              (e._zod.bag = e._zod.bag || {}),
              (e._zod.version = Nr);
            const s = [...(e._zod.def.checks ?? [])];
            e._zod.traits.has("$ZodCheck") && s.unshift(e);
            for (const l of s) for (const v of l._zod.onattach) v(e);
            if (s.length === 0)
              (a = e._zod).deferred ?? (a.deferred = []),
                e._zod.deferred?.push(() => {
                  e._zod.run = e._zod.parse;
                });
            else {
              const l = (b, D, U) => {
                  let R = g.QH(b),
                    G;
                  for (const H of D) {
                    if (H._zod.def.when) {
                      if (g.rL(b) || !H._zod.def.when(b)) continue;
                    } else if (R) continue;
                    const q = b.issues.length,
                      J = H._zod.check(b);
                    if (J instanceof Promise && U?.async === !1)
                      throw new j.GT();
                    if (G || J instanceof Promise)
                      G = (G ?? Promise.resolve()).then(async () => {
                        await J,
                          b.issues.length !== q && (R || (R = g.QH(b, q)));
                      });
                    else {
                      if (b.issues.length === q) continue;
                      R || (R = g.QH(b, q));
                    }
                  }
                  return G ? G.then(() => b) : b;
                },
                v = (b, D, U) => {
                  if (g.QH(b)) return (b.aborted = !0), b;
                  const R = l(D, s, U);
                  if (R instanceof Promise) {
                    if (U.async === !1) throw new j.GT();
                    return R.then((G) => e._zod.parse(G, U));
                  }
                  return e._zod.parse(R, U);
                };
              e._zod.run = (b, D) => {
                if (D.skipChecks) return e._zod.parse(b, D);
                if (D.direction === "backward") {
                  const R = e._zod.parse(
                    { value: b.value, issues: [] },
                    { ...D, skipChecks: !0 },
                  );
                  return R instanceof Promise
                    ? R.then((G) => v(G, b, D))
                    : v(R, b, D);
                }
                const U = e._zod.parse(b, D);
                if (U instanceof Promise) {
                  if (D.async === !1) throw new j.GT();
                  return U.then((R) => l(R, s, D));
                }
                return l(U, s, D);
              };
            }
            g.gJ(e, "~standard", () => ({
              validate: (l) => {
                try {
                  const v = bt(e, l);
                  return v.success
                    ? { value: v.data }
                    : { issues: v.error?.issues };
                } catch {
                  return A(e, l).then((b) =>
                    b.success ? { value: b.data } : { issues: b.error?.issues },
                  );
                }
              },
              vendor: "zod",
              version: 1,
            }));
          }),
          Ct = j.xI("$ZodString", (e, r) => {
            fe.init(e, r),
              (e._zod.pattern =
                [...(e?._zod.bag?.patterns ?? [])].pop() ?? rt(e._zod.bag)),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = String(a.value);
                  } catch {}
                return (
                  typeof a.value == "string" ||
                    a.issues.push({
                      expected: "string",
                      code: "invalid_type",
                      input: a.value,
                      inst: e,
                    }),
                  a
                );
              });
          }),
          _e = j.xI("$ZodStringFormat", (e, r) => {
            Ut.init(e, r), Ct.init(e, r);
          }),
          Qt = j.xI("$ZodGUID", (e, r) => {
            r.pattern ?? (r.pattern = Le), _e.init(e, r);
          }),
          Di = j.xI("$ZodUUID", (e, r) => {
            if (r.version) {
              const s = {
                v1: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                v5: 5,
                v6: 6,
                v7: 7,
                v8: 8,
              }[r.version];
              if (s === void 0)
                throw new Error(`Invalid UUID version: "${r.version}"`);
              r.pattern ?? (r.pattern = Ue(s));
            } else r.pattern ?? (r.pattern = Ue());
            _e.init(e, r);
          }),
          vn = j.xI("$ZodEmail", (e, r) => {
            r.pattern ?? (r.pattern = M), _e.init(e, r);
          }),
          gs = j.xI("$ZodURL", (e, r) => {
            _e.init(e, r),
              (e._zod.check = (a) => {
                try {
                  const s = a.value.trim();
                  if (
                    !r.normalize &&
                    r.protocol?.source === ht.source &&
                    !/^https?:\/\//i.test(s)
                  ) {
                    a.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid URL format",
                      input: a.value,
                      inst: e,
                      continue: !r.abort,
                    });
                    return;
                  }
                  const l = new URL(s);
                  r.hostname &&
                    ((r.hostname.lastIndex = 0),
                    r.hostname.test(l.hostname) ||
                      a.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid hostname",
                        pattern: r.hostname.source,
                        input: a.value,
                        inst: e,
                        continue: !r.abort,
                      })),
                    r.protocol &&
                      ((r.protocol.lastIndex = 0),
                      r.protocol.test(
                        l.protocol.endsWith(":")
                          ? l.protocol.slice(0, -1)
                          : l.protocol,
                      ) ||
                        a.issues.push({
                          code: "invalid_format",
                          format: "url",
                          note: "Invalid protocol",
                          pattern: r.protocol.source,
                          input: a.value,
                          inst: e,
                          continue: !r.abort,
                        })),
                    r.normalize ? (a.value = l.href) : (a.value = s);
                  return;
                } catch {
                  a.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
                }
              });
          }),
          ta = j.xI("$ZodEmoji", (e, r) => {
            r.pattern ?? (r.pattern = Wt()), _e.init(e, r);
          }),
          et = j.xI("$ZodNanoID", (e, r) => {
            r.pattern ?? (r.pattern = ne), _e.init(e, r);
          }),
          Pi = j.xI("$ZodCUID", (e, r) => {
            r.pattern ?? (r.pattern = We), _e.init(e, r);
          }),
          na = j.xI("$ZodCUID2", (e, r) => {
            r.pattern ?? (r.pattern = je), _e.init(e, r);
          }),
          jr = j.xI("$ZodULID", (e, r) => {
            r.pattern ?? (r.pattern = Ee), _e.init(e, r);
          }),
          Oi = j.xI("$ZodXID", (e, r) => {
            r.pattern ?? (r.pattern = ke), _e.init(e, r);
          }),
          ra = j.xI("$ZodKSUID", (e, r) => {
            r.pattern ?? (r.pattern = te), _e.init(e, r);
          }),
          ia = j.xI("$ZodISODateTime", (e, r) => {
            r.pattern ?? (r.pattern = Dt(r)), _e.init(e, r);
          }),
          oa = j.xI("$ZodISODate", (e, r) => {
            r.pattern ?? (r.pattern = dn), _e.init(e, r);
          }),
          aa = j.xI("$ZodISOTime", (e, r) => {
            r.pattern ?? (r.pattern = Kt(r)), _e.init(e, r);
          }),
          Er = j.xI("$ZodISODuration", (e, r) => {
            r.pattern ?? (r.pattern = ue), _e.init(e, r);
          }),
          ca = j.xI("$ZodIPv4", (e, r) => {
            r.pattern ?? (r.pattern = wt),
              _e.init(e, r),
              (e._zod.bag.format = "ipv4");
          }),
          Ni = j.xI("$ZodIPv6", (e, r) => {
            r.pattern ?? (r.pattern = gt),
              _e.init(e, r),
              (e._zod.bag.format = "ipv6"),
              (e._zod.check = (a) => {
                try {
                  new URL(`http://[${a.value}]`);
                } catch {
                  a.issues.push({
                    code: "invalid_format",
                    format: "ipv6",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
                }
              });
          }),
          vs = null,
          sa = j.xI("$ZodCIDRv4", (e, r) => {
            r.pattern ?? (r.pattern = ct), _e.init(e, r);
          }),
          la = j.xI("$ZodCIDRv6", (e, r) => {
            r.pattern ?? (r.pattern = Jt),
              _e.init(e, r),
              (e._zod.check = (a) => {
                const s = a.value.split("/");
                try {
                  if (s.length !== 2) throw new Error();
                  const [l, v] = s;
                  if (!v) throw new Error();
                  const b = Number(v);
                  if (`${b}` !== v) throw new Error();
                  if (b < 0 || b > 128) throw new Error();
                  new URL(`http://[${l}]`);
                } catch {
                  a.issues.push({
                    code: "invalid_format",
                    format: "cidrv6",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
                }
              });
          });
        function en(e) {
          if (e === "") return !0;
          if (/\s/.test(e) || e.length % 4 !== 0) return !1;
          try {
            return atob(e), !0;
          } catch {
            return !1;
          }
        }
        const ua = j.xI("$ZodBase64", (e, r) => {
          r.pattern ?? (r.pattern = ln),
            _e.init(e, r),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (a) => {
              en(a.value) ||
                a.issues.push({
                  code: "invalid_format",
                  format: "base64",
                  input: a.value,
                  inst: e,
                  continue: !r.abort,
                });
            });
        });
        function ji(e) {
          if (!vt.test(e)) return !1;
          const r = e.replace(/[-_]/g, (s) => (s === "-" ? "+" : "/")),
            a = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
          return en(a);
        }
        const Hn = j.xI("$ZodBase64URL", (e, r) => {
            r.pattern ?? (r.pattern = vt),
              _e.init(e, r),
              (e._zod.bag.contentEncoding = "base64url"),
              (e._zod.check = (a) => {
                ji(a.value) ||
                  a.issues.push({
                    code: "invalid_format",
                    format: "base64url",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          yt = j.xI("$ZodE164", (e, r) => {
            r.pattern ?? (r.pattern = Ve), _e.init(e, r);
          });
        function da(e, r = null) {
          try {
            const a = e.split(".");
            if (a.length !== 3) return !1;
            const [s] = a;
            if (!s) return !1;
            const l = JSON.parse(atob(s));
            return !(
              ("typ" in l && l?.typ !== "JWT") ||
              !l.alg ||
              (r && (!("alg" in l) || l.alg !== r))
            );
          } catch {
            return !1;
          }
        }
        const fa = j.xI("$ZodJWT", (e, r) => {
            _e.init(e, r),
              (e._zod.check = (a) => {
                da(a.value, r.alg) ||
                  a.issues.push({
                    code: "invalid_format",
                    format: "jwt",
                    input: a.value,
                    inst: e,
                    continue: !r.abort,
                  });
              });
          }),
          hs = null,
          Ei = j.xI("$ZodNumber", (e, r) => {
            fe.init(e, r),
              (e._zod.pattern = e._zod.bag.pattern ?? st),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = Number(a.value);
                  } catch {}
                const l = a.value;
                if (
                  typeof l == "number" &&
                  !Number.isNaN(l) &&
                  Number.isFinite(l)
                )
                  return a;
                const v =
                  typeof l == "number"
                    ? Number.isNaN(l)
                      ? "NaN"
                      : Number.isFinite(l)
                        ? void 0
                        : "Infinity"
                    : void 0;
                return (
                  a.issues.push({
                    expected: "number",
                    code: "invalid_type",
                    input: l,
                    inst: e,
                    ...(v ? { received: v } : {}),
                  }),
                  a
                );
              });
          }),
          pa = j.xI("$ZodNumberFormat", (e, r) => {
            Ye.init(e, r), Ei.init(e, r);
          }),
          Ur = j.xI("$ZodBoolean", (e, r) => {
            fe.init(e, r),
              (e._zod.pattern = Ot),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = !!a.value;
                  } catch {}
                const l = a.value;
                return (
                  typeof l == "boolean" ||
                    a.issues.push({
                      expected: "boolean",
                      code: "invalid_type",
                      input: l,
                      inst: e,
                    }),
                  a
                );
              });
          }),
          ma = j.xI("$ZodBigInt", (e, r) => {
            fe.init(e, r),
              (e._zod.pattern = Pt),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = BigInt(a.value);
                  } catch {}
                return (
                  typeof a.value == "bigint" ||
                    a.issues.push({
                      expected: "bigint",
                      code: "invalid_type",
                      input: a.value,
                      inst: e,
                    }),
                  a
                );
              });
          }),
          Ui = null,
          ga = null,
          va = null,
          bs = null,
          ys = null,
          Ar = j.xI("$ZodUnknown", (e, r) => {
            fe.init(e, r), (e._zod.parse = (a) => a);
          }),
          ha = j.xI("$ZodNever", (e, r) => {
            fe.init(e, r),
              (e._zod.parse = (a, s) => (
                a.issues.push({
                  expected: "never",
                  code: "invalid_type",
                  input: a.value,
                  inst: e,
                }),
                a
              ));
          }),
          Tr = null,
          Ai = j.xI("$ZodDate", (e, r) => {
            fe.init(e, r),
              (e._zod.parse = (a, s) => {
                if (r.coerce)
                  try {
                    a.value = new Date(a.value);
                  } catch {}
                const l = a.value,
                  v = l instanceof Date;
                return (
                  (v && !Number.isNaN(l.getTime())) ||
                    a.issues.push({
                      expected: "date",
                      code: "invalid_type",
                      input: l,
                      ...(v ? { received: "Invalid Date" } : {}),
                      inst: e,
                    }),
                  a
                );
              });
          });
        function Cr(e, r, a) {
          e.issues.length && r.issues.push(...g.lQ(a, e.issues)),
            (r.value[a] = e.value);
        }
        const ba = j.xI("$ZodArray", (e, r) => {
          fe.init(e, r),
            (e._zod.parse = (a, s) => {
              const l = a.value;
              if (!Array.isArray(l))
                return (
                  a.issues.push({
                    expected: "array",
                    code: "invalid_type",
                    input: l,
                    inst: e,
                  }),
                  a
                );
              a.value = Array(l.length);
              const v = [];
              for (let b = 0; b < l.length; b++) {
                const D = l[b],
                  U = r.element._zod.run({ value: D, issues: [] }, s);
                U instanceof Promise
                  ? v.push(U.then((R) => Cr(R, a, b)))
                  : Cr(U, a, b);
              }
              return v.length ? Promise.all(v).then(() => a) : a;
            });
        });
        function qn(e, r, a, s, l, v) {
          const b = a in s;
          if (e.issues.length) {
            if (l && v && !b) return;
            r.issues.push(...g.lQ(a, e.issues));
          }
          if (!b && !l) {
            e.issues.length ||
              r.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: void 0,
                path: [a],
              });
            return;
          }
          e.value === void 0
            ? b && (r.value[a] = void 0)
            : (r.value[a] = e.value);
        }
        function Ti(e) {
          const r = Object.keys(e.shape);
          for (const s of r)
            if (!e.shape?.[s]?._zod?.traits?.has("$ZodType"))
              throw new Error(
                `Invalid element at key "${s}": expected a Zod schema`,
              );
          const a = g.NM(e.shape);
          return {
            ...e,
            keys: r,
            keySet: new Set(r),
            numKeys: r.length,
            optionalKeys: new Set(a),
          };
        }
        function Xn(e, r, a, s, l, v) {
          const b = [],
            D = l.keySet,
            U = l.catchall._zod,
            R = U.def.type,
            G = U.optin === "optional",
            H = U.optout === "optional";
          for (const q in r) {
            if (q === "__proto__" || D.has(q)) continue;
            if (R === "never") {
              b.push(q);
              continue;
            }
            const J = U.run({ value: r[q], issues: [] }, s);
            J instanceof Promise
              ? e.push(J.then((se) => qn(se, a, q, r, G, H)))
              : qn(J, a, q, r, G, H);
          }
          return (
            b.length &&
              a.issues.push({
                code: "unrecognized_keys",
                keys: b,
                input: r,
                inst: v,
              }),
            e.length ? Promise.all(e).then(() => a) : a
          );
        }
        const Ci = j.xI("$ZodObject", (e, r) => {
            if (
              (fe.init(e, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get)
            ) {
              const D = r.shape;
              Object.defineProperty(r, "shape", {
                get: () => {
                  const U = { ...D };
                  return Object.defineProperty(r, "shape", { value: U }), U;
                },
              });
            }
            const s = g.PO(() => Ti(r));
            g.gJ(e._zod, "propValues", () => {
              const D = r.shape,
                U = {};
              for (const R in D) {
                const G = D[R]._zod;
                if (G.values) {
                  U[R] ?? (U[R] = new Set());
                  for (const H of G.values) U[R].add(H);
                }
              }
              return U;
            });
            const l = g.Gv,
              v = r.catchall;
            let b;
            e._zod.parse = (D, U) => {
              b ?? (b = s.value);
              const R = D.value;
              if (!l(R))
                return (
                  D.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: R,
                    inst: e,
                  }),
                  D
                );
              D.value = {};
              const G = [],
                H = b.shape;
              for (const q of b.keys) {
                const J = H[q],
                  se = J._zod.optin === "optional",
                  St = J._zod.optout === "optional",
                  Ne = J._zod.run({ value: R[q], issues: [] }, U);
                Ne instanceof Promise
                  ? G.push(Ne.then((ms) => qn(ms, D, q, R, se, St)))
                  : qn(Ne, D, q, R, se, St);
              }
              return v
                ? Xn(G, R, D, U, s.value, e)
                : G.length
                  ? Promise.all(G).then(() => D)
                  : D;
            };
          }),
          ya = j.xI("$ZodObjectJIT", (e, r) => {
            Ci.init(e, r);
            const a = e._zod.parse,
              s = g.PO(() => Ti(r)),
              l = (q) => {
                const J = new Dr(["shape", "payload", "ctx"]),
                  se = s.value,
                  St = (kt) => {
                    const Se = g.UQ(kt);
                    return `shape[${Se}]._zod.run({ value: input[${Se}], issues: [] }, ctx)`;
                  };
                J.write("const input = payload.value;");
                const Ne = Object.create(null);
                let ms = 0;
                for (const kt of se.keys) Ne[kt] = `key_${ms++}`;
                J.write("const newResult = {};");
                for (const kt of se.keys) {
                  const Se = Ne[kt],
                    Re = g.UQ(kt),
                    tu = q[kt],
                    nu = tu?._zod?.optin === "optional",
                    yu = tu?._zod?.optout === "optional";
                  J.write(`const ${Se} = ${St(kt)};`),
                    nu && yu
                      ? J.write(`
        if (${Se}.issues.length) {
          if (${Re} in input) {
            payload.issues = payload.issues.concat(${Se}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Re}, ...iss.path] : [${Re}]
            })));
          }
        }
        
        if (${Se}.value === undefined) {
          if (${Re} in input) {
            newResult[${Re}] = undefined;
          }
        } else {
          newResult[${Re}] = ${Se}.value;
        }
        
      `)
                      : nu
                        ? J.write(`
        if (${Se}.issues.length) {
          payload.issues = payload.issues.concat(${Se}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Re}, ...iss.path] : [${Re}]
          })));
        }
        
        if (${Se}.value === undefined) {
          if (${Re} in input) {
            newResult[${Re}] = undefined;
          }
        } else {
          newResult[${Re}] = ${Se}.value;
        }
        
      `)
                        : J.write(`
        const ${Se}_present = ${Re} in input;
        if (${Se}.issues.length) {
          payload.issues = payload.issues.concat(${Se}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Re}, ...iss.path] : [${Re}]
          })));
        }
        if (!${Se}_present && !${Se}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${Re}]
          });
        }

        if (${Se}_present) {
          if (${Se}.value === undefined) {
            newResult[${Re}] = undefined;
          } else {
            newResult[${Re}] = ${Se}.value;
          }
        }

      `);
                }
                J.write("payload.value = newResult;"),
                  J.write("return payload;");
                const bu = J.compile();
                return (kt, Se) => bu(q, kt, Se);
              };
            let v;
            const b = g.Gv,
              D = !j.cr.jitless,
              U = g.hI,
              R = D && U.value,
              G = r.catchall;
            let H;
            e._zod.parse = (q, J) => {
              H ?? (H = s.value);
              const se = q.value;
              return b(se)
                ? D && R && J?.async === !1 && J.jitless !== !0
                  ? (v || (v = l(r.shape)),
                    (q = v(q, J)),
                    G ? Xn([], se, q, J, H, e) : q)
                  : a(q, J)
                : (q.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: se,
                    inst: e,
                  }),
                  q);
            };
          });
        function Oe(e, r, a, s) {
          for (const v of e)
            if (v.issues.length === 0) return (r.value = v.value), r;
          const l = e.filter((v) => !g.QH(v));
          return l.length === 1
            ? ((r.value = l[0].value), l[0])
            : (r.issues.push({
                code: "invalid_union",
                input: r.value,
                inst: a,
                errors: e.map((v) => v.issues.map((b) => g.iR(b, s, j.$W()))),
              }),
              r);
        }
        const $a = j.xI("$ZodUnion", (e, r) => {
          fe.init(e, r),
            g.gJ(e._zod, "optin", () =>
              r.options.some((s) => s._zod.optin === "optional")
                ? "optional"
                : void 0,
            ),
            g.gJ(e._zod, "optout", () =>
              r.options.some((s) => s._zod.optout === "optional")
                ? "optional"
                : void 0,
            ),
            g.gJ(e._zod, "values", () => {
              if (r.options.every((s) => s._zod.values))
                return new Set(
                  r.options.flatMap((s) => Array.from(s._zod.values)),
                );
            }),
            g.gJ(e._zod, "pattern", () => {
              if (r.options.every((s) => s._zod.pattern)) {
                const s = r.options.map((l) => l._zod.pattern);
                return new RegExp(
                  `^(${s.map((l) => g.p6(l.source)).join("|")})$`,
                );
              }
            });
          const a = r.options.length === 1 ? r.options[0]._zod.run : null;
          e._zod.parse = (s, l) => {
            if (a) return a(s, l);
            let v = !1;
            const b = [];
            for (const D of r.options) {
              const U = D._zod.run({ value: s.value, issues: [] }, l);
              if (U instanceof Promise) b.push(U), (v = !0);
              else {
                if (U.issues.length === 0) return U;
                b.push(U);
              }
            }
            return v
              ? Promise.all(b).then((D) => Oe(D, s, e, l))
              : Oe(b, s, e, l);
          };
        });
        function _a(e, r, a, s) {
          const l = e.filter((v) => v.issues.length === 0);
          return l.length === 1
            ? ((r.value = l[0].value), r)
            : (l.length === 0
                ? r.issues.push({
                    code: "invalid_union",
                    input: r.value,
                    inst: a,
                    errors: e.map((v) =>
                      v.issues.map((b) =>
                        util.finalizeIssue(b, s, core.config()),
                      ),
                    ),
                  })
                : r.issues.push({
                    code: "invalid_union",
                    input: r.value,
                    inst: a,
                    errors: [],
                    inclusive: !1,
                  }),
              r);
        }
        const $s = null,
          _s = null,
          hn = j.xI("$ZodIntersection", (e, r) => {
            fe.init(e, r),
              (e._zod.parse = (a, s) => {
                const l = a.value,
                  v = r.left._zod.run({ value: l, issues: [] }, s),
                  b = r.right._zod.run({ value: l, issues: [] }, s);
                return v instanceof Promise || b instanceof Promise
                  ? Promise.all([v, b]).then(([U, R]) => Zr(a, U, R))
                  : Zr(a, v, b);
              });
          });
        function Rr(e, r) {
          if (e === r) return { valid: !0, data: e };
          if (e instanceof Date && r instanceof Date && +e == +r)
            return { valid: !0, data: e };
          if (g.Qd(e) && g.Qd(r)) {
            const a = Object.keys(r),
              s = Object.keys(e).filter((v) => a.indexOf(v) !== -1),
              l = { ...e, ...r };
            for (const v of s) {
              const b = Rr(e[v], r[v]);
              if (!b.valid)
                return { valid: !1, mergeErrorPath: [v, ...b.mergeErrorPath] };
              l[v] = b.data;
            }
            return { valid: !0, data: l };
          }
          if (Array.isArray(e) && Array.isArray(r)) {
            if (e.length !== r.length) return { valid: !1, mergeErrorPath: [] };
            const a = [];
            for (let s = 0; s < e.length; s++) {
              const l = e[s],
                v = r[s],
                b = Rr(l, v);
              if (!b.valid)
                return { valid: !1, mergeErrorPath: [s, ...b.mergeErrorPath] };
              a.push(b.data);
            }
            return { valid: !0, data: a };
          }
          return { valid: !1, mergeErrorPath: [] };
        }
        function Zr(e, r, a) {
          const s = new Map();
          let l;
          for (const D of r.issues)
            if (D.code === "unrecognized_keys") {
              l ?? (l = D);
              for (const U of D.keys)
                s.has(U) || s.set(U, {}), (s.get(U).l = !0);
            } else e.issues.push(D);
          for (const D of a.issues)
            if (D.code === "unrecognized_keys")
              for (const U of D.keys)
                s.has(U) || s.set(U, {}), (s.get(U).r = !0);
            else e.issues.push(D);
          const v = [...s].filter(([, D]) => D.l && D.r).map(([D]) => D);
          if ((v.length && l && e.issues.push({ ...l, keys: v }), g.QH(e)))
            return e;
          const b = Rr(r.value, a.value);
          if (!b.valid)
            throw new Error(
              `Unmergable intersection. Error path: ${JSON.stringify(b.mergeErrorPath)}`,
            );
          return (e.value = b.data), e;
        }
        const Ia = null;
        function Is(e, r) {
          for (let a = e.length - 1; a >= 0; a--)
            if (e[a]._zod[r] !== "optional") return a + 1;
          return 0;
        }
        function xs(e, r, a) {
          e.issues.length && r.issues.push(...util.prefixIssues(a, e.issues)),
            (r.value[a] = e.value);
        }
        function Ss(e, r, a, s, l) {
          for (let v = 0; v < a.length; v++) {
            const b = e[v],
              D = v < s.length;
            if (b.issues.length) {
              if (!D && v >= l) {
                r.value.length = v;
                break;
              }
              r.issues.push(...util.prefixIssues(v, b.issues));
            }
            r.value[v] = b.value;
          }
          for (
            let v = r.value.length - 1;
            v >= s.length &&
            a[v]._zod.optout === "optional" &&
            r.value[v] === void 0;
            v--
          )
            r.value.length = v;
          return r;
        }
        const tt = null,
          ks = null;
        function ws(e, r, a, s, l, v, b) {
          e.issues.length &&
            (util.propertyKeyTypes.has(typeof s)
              ? a.issues.push(...util.prefixIssues(s, e.issues))
              : a.issues.push({
                  code: "invalid_key",
                  origin: "map",
                  input: l,
                  inst: v,
                  issues: e.issues.map((D) =>
                    util.finalizeIssue(D, b, core.config()),
                  ),
                })),
            r.issues.length &&
              (util.propertyKeyTypes.has(typeof s)
                ? a.issues.push(...util.prefixIssues(s, r.issues))
                : a.issues.push({
                    origin: "map",
                    code: "invalid_element",
                    input: l,
                    inst: v,
                    key: s,
                    issues: r.issues.map((D) =>
                      util.finalizeIssue(D, b, core.config()),
                    ),
                  })),
            a.value.set(e.value, r.value);
        }
        const tn = null;
        function xa(e, r) {
          e.issues.length && r.issues.push(...e.issues), r.value.add(e.value);
        }
        const Sa = j.xI("$ZodEnum", (e, r) => {
            fe.init(e, r);
            const a = g.w5(r.entries),
              s = new Set(a);
            (e._zod.values = s),
              (e._zod.pattern = new RegExp(
                `^(${a
                  .filter((l) => g.qQ.has(typeof l))
                  .map((l) => (typeof l == "string" ? g.$f(l) : l.toString()))
                  .join("|")})$`,
              )),
              (e._zod.parse = (l, v) => {
                const b = l.value;
                return (
                  s.has(b) ||
                    l.issues.push({
                      code: "invalid_value",
                      values: a,
                      input: b,
                      inst: e,
                    }),
                  l
                );
              });
          }),
          ka = j.xI("$ZodLiteral", (e, r) => {
            if ((fe.init(e, r), r.values.length === 0))
              throw new Error(
                "Cannot create literal schema with no valid values",
              );
            const a = new Set(r.values);
            (e._zod.values = a),
              (e._zod.pattern = new RegExp(
                `^(${r.values.map((s) => (typeof s == "string" ? g.$f(s) : s ? g.$f(s.toString()) : String(s))).join("|")})$`,
              )),
              (e._zod.parse = (s, l) => {
                const v = s.value;
                return (
                  a.has(v) ||
                    s.issues.push({
                      code: "invalid_value",
                      values: r.values,
                      input: v,
                      inst: e,
                    }),
                  s
                );
              });
          }),
          zs = null,
          Ri = j.xI("$ZodTransform", (e, r) => {
            fe.init(e, r),
              (e._zod.optin = "optional"),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward")
                  throw new j.cV(e.constructor.name);
                const l = r.transform(a.value, a);
                if (s.async)
                  return (l instanceof Promise ? l : Promise.resolve(l)).then(
                    (b) => ((a.value = b), (a.fallback = !0), a),
                  );
                if (l instanceof Promise) throw new j.GT();
                return (a.value = l), (a.fallback = !0), a;
              });
          });
        function Zi(e, r) {
          return r === void 0 && (e.issues.length || e.fallback)
            ? { issues: [], value: void 0 }
            : e;
        }
        const Lr = j.xI("$ZodOptional", (e, r) => {
            fe.init(e, r),
              (e._zod.optin = "optional"),
              (e._zod.optout = "optional"),
              g.gJ(e._zod, "values", () =>
                r.innerType._zod.values
                  ? new Set([...r.innerType._zod.values, void 0])
                  : void 0,
              ),
              g.gJ(e._zod, "pattern", () => {
                const a = r.innerType._zod.pattern;
                return a ? new RegExp(`^(${g.p6(a.source)})?$`) : void 0;
              }),
              (e._zod.parse = (a, s) => {
                if (r.innerType._zod.optin === "optional") {
                  const l = a.value,
                    v = r.innerType._zod.run(a, s);
                  return v instanceof Promise
                    ? v.then((b) => Zi(b, l))
                    : Zi(v, l);
                }
                return a.value === void 0 ? a : r.innerType._zod.run(a, s);
              });
          }),
          wa = j.xI("$ZodExactOptional", (e, r) => {
            Lr.init(e, r),
              g.gJ(e._zod, "values", () => r.innerType._zod.values),
              g.gJ(e._zod, "pattern", () => r.innerType._zod.pattern),
              (e._zod.parse = (a, s) => r.innerType._zod.run(a, s));
          }),
          za = j.xI("$ZodNullable", (e, r) => {
            fe.init(e, r),
              g.gJ(e._zod, "optin", () => r.innerType._zod.optin),
              g.gJ(e._zod, "optout", () => r.innerType._zod.optout),
              g.gJ(e._zod, "pattern", () => {
                const a = r.innerType._zod.pattern;
                return a ? new RegExp(`^(${g.p6(a.source)}|null)$`) : void 0;
              }),
              g.gJ(e._zod, "values", () =>
                r.innerType._zod.values
                  ? new Set([...r.innerType._zod.values, null])
                  : void 0,
              ),
              (e._zod.parse = (a, s) =>
                a.value === null ? a : r.innerType._zod.run(a, s));
          }),
          Da = j.xI("$ZodDefault", (e, r) => {
            fe.init(e, r),
              (e._zod.optin = "optional"),
              g.gJ(e._zod, "values", () => r.innerType._zod.values),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward")
                  return r.innerType._zod.run(a, s);
                if (a.value === void 0) return (a.value = r.defaultValue), a;
                const l = r.innerType._zod.run(a, s);
                return l instanceof Promise
                  ? l.then((v) => Li(v, r))
                  : Li(l, r);
              });
          });
        function Li(e, r) {
          return e.value === void 0 && (e.value = r.defaultValue), e;
        }
        const Bi = j.xI("$ZodPrefault", (e, r) => {
            fe.init(e, r),
              (e._zod.optin = "optional"),
              g.gJ(e._zod, "values", () => r.innerType._zod.values),
              (e._zod.parse = (a, s) => (
                s.direction === "backward" ||
                  (a.value === void 0 && (a.value = r.defaultValue)),
                r.innerType._zod.run(a, s)
              ));
          }),
          Br = j.xI("$ZodNonOptional", (e, r) => {
            fe.init(e, r),
              g.gJ(e._zod, "values", () => {
                const a = r.innerType._zod.values;
                return a ? new Set([...a].filter((s) => s !== void 0)) : void 0;
              }),
              (e._zod.parse = (a, s) => {
                const l = r.innerType._zod.run(a, s);
                return l instanceof Promise
                  ? l.then((v) => Fi(v, e))
                  : Fi(l, e);
              });
          });
        function Fi(e, r) {
          return (
            !e.issues.length &&
              e.value === void 0 &&
              e.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: e.value,
                inst: r,
              }),
            e
          );
        }
        const Ds = null,
          bn = j.xI("$ZodCatch", (e, r) => {
            fe.init(e, r),
              (e._zod.optin = "optional"),
              g.gJ(e._zod, "optout", () => r.innerType._zod.optout),
              g.gJ(e._zod, "values", () => r.innerType._zod.values),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward")
                  return r.innerType._zod.run(a, s);
                const l = r.innerType._zod.run(a, s);
                return l instanceof Promise
                  ? l.then(
                      (v) => (
                        (a.value = v.value),
                        v.issues.length &&
                          ((a.value = r.catchValue({
                            ...a,
                            error: {
                              issues: v.issues.map((b) => g.iR(b, s, j.$W())),
                            },
                            input: a.value,
                          })),
                          (a.issues = []),
                          (a.fallback = !0)),
                        a
                      ),
                    )
                  : ((a.value = l.value),
                    l.issues.length &&
                      ((a.value = r.catchValue({
                        ...a,
                        error: {
                          issues: l.issues.map((v) => g.iR(v, s, j.$W())),
                        },
                        input: a.value,
                      })),
                      (a.issues = []),
                      (a.fallback = !0)),
                    a);
              });
          }),
          Ps = null,
          Gi = j.xI("$ZodPipe", (e, r) => {
            fe.init(e, r),
              g.gJ(e._zod, "values", () => r.in._zod.values),
              g.gJ(e._zod, "optin", () => r.in._zod.optin),
              g.gJ(e._zod, "optout", () => r.out._zod.optout),
              g.gJ(e._zod, "propValues", () => r.in._zod.propValues),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward") {
                  const v = r.out._zod.run(a, s);
                  return v instanceof Promise
                    ? v.then((b) => yn(b, r.in, s))
                    : yn(v, r.in, s);
                }
                const l = r.in._zod.run(a, s);
                return l instanceof Promise
                  ? l.then((v) => yn(v, r.out, s))
                  : yn(l, r.out, s);
              });
          });
        function yn(e, r, a) {
          return e.issues.length
            ? ((e.aborted = !0), e)
            : r._zod.run(
                { value: e.value, issues: e.issues, fallback: e.fallback },
                a,
              );
        }
        const Fr = j.xI("$ZodCodec", (e, r) => {
          fe.init(e, r),
            g.gJ(e._zod, "values", () => r.in._zod.values),
            g.gJ(e._zod, "optin", () => r.in._zod.optin),
            g.gJ(e._zod, "optout", () => r.out._zod.optout),
            g.gJ(e._zod, "propValues", () => r.in._zod.propValues),
            (e._zod.parse = (a, s) => {
              if ((s.direction || "forward") === "forward") {
                const v = r.in._zod.run(a, s);
                return v instanceof Promise
                  ? v.then((b) => Yn(b, r, s))
                  : Yn(v, r, s);
              } else {
                const v = r.out._zod.run(a, s);
                return v instanceof Promise
                  ? v.then((b) => Yn(b, r, s))
                  : Yn(v, r, s);
              }
            });
        });
        function Yn(e, r, a) {
          if (e.issues.length) return (e.aborted = !0), e;
          if ((a.direction || "forward") === "forward") {
            const l = r.transform(e.value, e);
            return l instanceof Promise
              ? l.then((v) => $n(e, v, r.out, a))
              : $n(e, l, r.out, a);
          } else {
            const l = r.reverseTransform(e.value, e);
            return l instanceof Promise
              ? l.then((v) => $n(e, v, r.in, a))
              : $n(e, l, r.in, a);
          }
        }
        function $n(e, r, a, s) {
          return e.issues.length
            ? ((e.aborted = !0), e)
            : a._zod.run({ value: r, issues: e.issues }, s);
        }
        const Os = null,
          _n = j.xI("$ZodReadonly", (e, r) => {
            fe.init(e, r),
              g.gJ(e._zod, "propValues", () => r.innerType._zod.propValues),
              g.gJ(e._zod, "values", () => r.innerType._zod.values),
              g.gJ(e._zod, "optin", () => r.innerType?._zod?.optin),
              g.gJ(e._zod, "optout", () => r.innerType?._zod?.optout),
              (e._zod.parse = (a, s) => {
                if (s.direction === "backward")
                  return r.innerType._zod.run(a, s);
                const l = r.innerType._zod.run(a, s);
                return l instanceof Promise ? l.then(nn) : nn(l);
              });
          });
        function nn(e) {
          return (e.value = Object.freeze(e.value)), e;
        }
        const Ns = null,
          js = null,
          Es = null,
          Us = null,
          Pa = j.xI("$ZodCustom", (e, r) => {
            T.init(e, r),
              fe.init(e, r),
              (e._zod.parse = (a, s) => a),
              (e._zod.check = (a) => {
                const s = a.value,
                  l = r.fn(s);
                if (l instanceof Promise) return l.then((v) => Qn(v, a, s, e));
                Qn(l, a, s, e);
              });
          });
        function Qn(e, r, a, s) {
          if (!e) {
            const l = {
              code: "custom",
              input: a,
              inst: s,
              path: [...(s._zod.def.path ?? [])],
              continue: !s._zod.def.abort,
            };
            s._zod.def.params && (l.params = s._zod.def.params),
              r.issues.push(g.sn(l));
          }
        }
        var er;
        const Mi = Symbol("ZodOutput"),
          Oa = Symbol("ZodInput");
        class Na {
          constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
          }
          add(r, ...a) {
            const s = a[0];
            return (
              this._map.set(r, s),
              s &&
                typeof s == "object" &&
                "id" in s &&
                this._idmap.set(s.id, r),
              this
            );
          }
          clear() {
            return (this._map = new WeakMap()), (this._idmap = new Map()), this;
          }
          remove(r) {
            const a = this._map.get(r);
            return (
              a &&
                typeof a == "object" &&
                "id" in a &&
                this._idmap.delete(a.id),
              this._map.delete(r),
              this
            );
          }
          get(r) {
            const a = r._zod.parent;
            if (a) {
              const s = { ...(this.get(a) ?? {}) };
              delete s.id;
              const l = { ...s, ...this._map.get(r) };
              return Object.keys(l).length ? l : void 0;
            }
            return this._map.get(r);
          }
          has(r) {
            return this._map.has(r);
          }
        }
        function ja() {
          return new Na();
        }
        (er = globalThis).__zod_globalRegistry ??
          (er.__zod_globalRegistry = ja());
        const ut = globalThis.__zod_globalRegistry;
        function Ea(e, r) {
          return new e({ type: "string", ...g.A2(r) });
        }
        function Ua(e, r) {
          return new e({ type: "string", coerce: !0, ...g.A2(r) });
        }
        function Aa(e, r) {
          return new e({
            type: "string",
            format: "email",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Wi(e, r) {
          return new e({
            type: "string",
            format: "guid",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Ta(e, r) {
          return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Ca(e, r) {
          return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v4",
            ...g.A2(r),
          });
        }
        function Ji(e, r) {
          return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v6",
            ...g.A2(r),
          });
        }
        function Ra(e, r) {
          return new e({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v7",
            ...g.A2(r),
          });
        }
        function Za(e, r) {
          return new e({
            type: "string",
            format: "url",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function La(e, r) {
          return new e({
            type: "string",
            format: "emoji",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Ba(e, r) {
          return new e({
            type: "string",
            format: "nanoid",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Fa(e, r) {
          return new e({
            type: "string",
            format: "cuid",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Ga(e, r) {
          return new e({
            type: "string",
            format: "cuid2",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Gr(e, r) {
          return new e({
            type: "string",
            format: "ulid",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Ma(e, r) {
          return new e({
            type: "string",
            format: "xid",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Mr(e, r) {
          return new e({
            type: "string",
            format: "ksuid",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Vi(e, r) {
          return new e({
            type: "string",
            format: "ipv4",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Wa(e, r) {
          return new e({
            type: "string",
            format: "ipv6",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Ja(e, r) {
          return new e({
            type: "string",
            format: "mac",
            check: "string_format",
            abort: !1,
            ...util.normalizeParams(r),
          });
        }
        function As(e, r) {
          return new e({
            type: "string",
            format: "cidrv4",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Ts(e, r) {
          return new e({
            type: "string",
            format: "cidrv6",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Va(e, r) {
          return new e({
            type: "string",
            format: "base64",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Ka(e, r) {
          return new e({
            type: "string",
            format: "base64url",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function Wr(e, r) {
          return new e({
            type: "string",
            format: "e164",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        function In(e, r) {
          return new e({
            type: "string",
            format: "jwt",
            check: "string_format",
            abort: !1,
            ...g.A2(r),
          });
        }
        const Ha = {
          Any: null,
          Minute: -1,
          Second: 0,
          Millisecond: 3,
          Microsecond: 6,
        };
        function Rt(e, r) {
          return new e({
            type: "string",
            format: "datetime",
            check: "string_format",
            offset: !1,
            local: !1,
            precision: null,
            ...g.A2(r),
          });
        }
        function xn(e, r) {
          return new e({
            type: "string",
            format: "date",
            check: "string_format",
            ...g.A2(r),
          });
        }
        function Ki(e, r) {
          return new e({
            type: "string",
            format: "time",
            check: "string_format",
            precision: null,
            ...g.A2(r),
          });
        }
        function Jr(e, r) {
          return new e({
            type: "string",
            format: "duration",
            check: "string_format",
            ...g.A2(r),
          });
        }
        function Vr(e, r) {
          return new e({ type: "number", checks: [], ...g.A2(r) });
        }
        function Hi(e, r) {
          return new e({ type: "number", coerce: !0, checks: [], ...g.A2(r) });
        }
        function qa(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "safeint",
            ...g.A2(r),
          });
        }
        function Xa(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "float32",
            ...util.normalizeParams(r),
          });
        }
        function Cs(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "float64",
            ...util.normalizeParams(r),
          });
        }
        function Rs(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "int32",
            ...util.normalizeParams(r),
          });
        }
        function Zs(e, r) {
          return new e({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "uint32",
            ...util.normalizeParams(r),
          });
        }
        function Ls(e, r) {
          return new e({ type: "boolean", ...util.normalizeParams(r) });
        }
        function Bs(e, r) {
          return new e({ type: "boolean", coerce: !0, ...g.A2(r) });
        }
        function Fs(e, r) {
          return new e({ type: "bigint", ...util.normalizeParams(r) });
        }
        function qi(e, r) {
          return new e({ type: "bigint", coerce: !0, ...g.A2(r) });
        }
        function Gs(e, r) {
          return new e({
            type: "bigint",
            check: "bigint_format",
            abort: !1,
            format: "int64",
            ...util.normalizeParams(r),
          });
        }
        function Ms(e, r) {
          return new e({
            type: "bigint",
            check: "bigint_format",
            abort: !1,
            format: "uint64",
            ...util.normalizeParams(r),
          });
        }
        function Ws(e, r) {
          return new e({ type: "symbol", ...util.normalizeParams(r) });
        }
        function ru(e, r) {
          return new e({ type: "undefined", ...util.normalizeParams(r) });
        }
        function Js(e, r) {
          return new e({ type: "null", ...util.normalizeParams(r) });
        }
        function Vs(e) {
          return new e({ type: "any" });
        }
        function Ya(e) {
          return new e({ type: "unknown" });
        }
        function Qa(e, r) {
          return new e({ type: "never", ...g.A2(r) });
        }
        function Ks(e, r) {
          return new e({ type: "void", ...util.normalizeParams(r) });
        }
        function Hs(e, r) {
          return new e({ type: "date", ...util.normalizeParams(r) });
        }
        function Sn(e, r) {
          return new e({ type: "date", coerce: !0, ...g.A2(r) });
        }
        function Kr(e, r) {
          return new e({ type: "nan", ...util.normalizeParams(r) });
        }
        function Zt(e, r) {
          return new de({
            check: "less_than",
            ...g.A2(r),
            value: e,
            inclusive: !1,
          });
        }
        function $t(e, r) {
          return new de({
            check: "less_than",
            ...g.A2(r),
            value: e,
            inclusive: !0,
          });
        }
        function kn(e, r) {
          return new pe({
            check: "greater_than",
            ...g.A2(r),
            value: e,
            inclusive: !1,
          });
        }
        function dt(e, r) {
          return new pe({
            check: "greater_than",
            ...g.A2(r),
            value: e,
            inclusive: !0,
          });
        }
        function qs(e) {
          return kn(0, e);
        }
        function iu(e) {
          return Zt(0, e);
        }
        function Xs(e) {
          return $t(0, e);
        }
        function Ys(e) {
          return dt(0, e);
        }
        function Hr(e, r) {
          return new ee({ check: "multiple_of", ...g.A2(r), value: e });
        }
        function Qs(e, r) {
          return new checks.$ZodCheckMaxSize({
            check: "max_size",
            ...util.normalizeParams(r),
            maximum: e,
          });
        }
        function el(e, r) {
          return new checks.$ZodCheckMinSize({
            check: "min_size",
            ...util.normalizeParams(r),
            minimum: e,
          });
        }
        function ou(e, r) {
          return new checks.$ZodCheckSizeEquals({
            check: "size_equals",
            ...util.normalizeParams(r),
            size: e,
          });
        }
        function Xi(e, r) {
          return new _r({ check: "max_length", ...g.A2(r), maximum: e });
        }
        function tr(e, r) {
          return new Ir({ check: "min_length", ...g.A2(r), minimum: e });
        }
        function Yi(e, r) {
          return new Vn({ check: "length_equals", ...g.A2(r), length: e });
        }
        function qr(e, r) {
          return new wi({
            check: "string_format",
            format: "regex",
            ...g.A2(r),
            pattern: e,
          });
        }
        function ec(e) {
          return new xr({
            check: "string_format",
            format: "lowercase",
            ...g.A2(e),
          });
        }
        function Qi(e) {
          return new it({
            check: "string_format",
            format: "uppercase",
            ...g.A2(e),
          });
        }
        function eo(e, r) {
          return new Sr({
            check: "string_format",
            format: "includes",
            ...g.A2(r),
            includes: e,
          });
        }
        function to(e, r) {
          return new Be({
            check: "string_format",
            format: "starts_with",
            ...g.A2(r),
            prefix: e,
          });
        }
        function tc(e, r) {
          return new kr({
            check: "string_format",
            format: "ends_with",
            ...g.A2(r),
            suffix: e,
          });
        }
        function tl(e, r, a) {
          return new checks.$ZodCheckProperty({
            check: "property",
            property: e,
            schema: r,
            ...util.normalizeParams(a),
          });
        }
        function nc(e, r) {
          return new checks.$ZodCheckMimeType({
            check: "mime_type",
            mime: e,
            ...util.normalizeParams(r),
          });
        }
        function rn(e) {
          return new zr({ check: "overwrite", tx: e });
        }
        function no(e) {
          return rn((r) => r.normalize(e));
        }
        function rc() {
          return rn((e) => e.trim());
        }
        function ic() {
          return rn((e) => e.toLowerCase());
        }
        function oc() {
          return rn((e) => e.toUpperCase());
        }
        function ac() {
          return rn((e) => g.Yv(e));
        }
        function wn(e, r, a) {
          return new e({ type: "array", element: r, ...g.A2(a) });
        }
        function nl(e, r, a) {
          return new e({
            type: "union",
            options: r,
            ...util.normalizeParams(a),
          });
        }
        function cc(e, r, a) {
          return new e({
            type: "union",
            options: r,
            inclusive: !1,
            ...util.normalizeParams(a),
          });
        }
        function ro(e, r, a, s) {
          return new e({
            type: "union",
            options: a,
            discriminator: r,
            ...util.normalizeParams(s),
          });
        }
        function rl(e, r, a) {
          return new e({ type: "intersection", left: r, right: a });
        }
        function il(e, r, a, s) {
          const l = a instanceof schemas.$ZodType,
            v = l ? s : a,
            b = l ? a : null;
          return new e({
            type: "tuple",
            items: r,
            rest: b,
            ...util.normalizeParams(v),
          });
        }
        function sc(e, r, a, s) {
          return new e({
            type: "record",
            keyType: r,
            valueType: a,
            ...util.normalizeParams(s),
          });
        }
        function lc(e, r, a, s) {
          return new e({
            type: "map",
            keyType: r,
            valueType: a,
            ...util.normalizeParams(s),
          });
        }
        function ol(e, r, a) {
          return new e({
            type: "set",
            valueType: r,
            ...util.normalizeParams(a),
          });
        }
        function al(e, r, a) {
          const s = Array.isArray(r)
            ? Object.fromEntries(r.map((l) => [l, l]))
            : r;
          return new e({
            type: "enum",
            entries: s,
            ...util.normalizeParams(a),
          });
        }
        function uc(e, r, a) {
          return new e({
            type: "enum",
            entries: r,
            ...util.normalizeParams(a),
          });
        }
        function cl(e, r, a) {
          return new e({
            type: "literal",
            values: Array.isArray(r) ? r : [r],
            ...util.normalizeParams(a),
          });
        }
        function io(e, r) {
          return new e({ type: "file", ...util.normalizeParams(r) });
        }
        function dc(e, r) {
          return new e({ type: "transform", transform: r });
        }
        function oo(e, r) {
          return new e({ type: "optional", innerType: r });
        }
        function sl(e, r) {
          return new e({ type: "nullable", innerType: r });
        }
        function ao(e, r, a) {
          return new e({
            type: "default",
            innerType: r,
            get defaultValue() {
              return typeof a == "function" ? a() : util.shallowClone(a);
            },
          });
        }
        function ll(e, r, a) {
          return new e({
            type: "nonoptional",
            innerType: r,
            ...util.normalizeParams(a),
          });
        }
        function ul(e, r) {
          return new e({ type: "success", innerType: r });
        }
        function dl(e, r, a) {
          return new e({
            type: "catch",
            innerType: r,
            catchValue: typeof a == "function" ? a : () => a,
          });
        }
        function fc(e, r, a) {
          return new e({ type: "pipe", in: r, out: a });
        }
        function fl(e, r) {
          return new e({ type: "readonly", innerType: r });
        }
        function pl(e, r, a) {
          return new e({
            type: "template_literal",
            parts: r,
            ...util.normalizeParams(a),
          });
        }
        function ml(e, r) {
          return new e({ type: "lazy", getter: r });
        }
        function zn(e, r) {
          return new e({ type: "promise", innerType: r });
        }
        function Dn(e, r, a) {
          const s = util.normalizeParams(a);
          return (
            s.abort ?? (s.abort = !0),
            new e({ type: "custom", check: "custom", fn: r, ...s })
          );
        }
        function Xr(e, r, a) {
          return new e({ type: "custom", check: "custom", fn: r, ...g.A2(a) });
        }
        function pc(e, r) {
          const a = co(
            (s) => (
              (s.addIssue = (l) => {
                if (typeof l == "string")
                  s.issues.push(g.sn(l, s.value, a._zod.def));
                else {
                  const v = l;
                  v.fatal && (v.continue = !1),
                    v.code ?? (v.code = "custom"),
                    v.input ?? (v.input = s.value),
                    v.inst ?? (v.inst = a),
                    v.continue ?? (v.continue = !a._zod.def.abort),
                    s.issues.push(g.sn(v));
                }
              }),
              e(s.value, s)
            ),
            r,
          );
          return a;
        }
        function co(e, r) {
          const a = new T({ check: "custom", ...g.A2(r) });
          return (a._zod.check = e), a;
        }
        function mc(e) {
          const r = new T({ check: "describe" });
          return (
            (r._zod.onattach = [
              (a) => {
                const s = ut.get(a) ?? {};
                ut.add(a, { ...s, description: e });
              },
            ]),
            (r._zod.check = () => {}),
            r
          );
        }
        function Pn(e) {
          const r = new T({ check: "meta" });
          return (
            (r._zod.onattach = [
              (a) => {
                const s = ut.get(a) ?? {};
                ut.add(a, { ...s, ...e });
              },
            ]),
            (r._zod.check = () => {}),
            r
          );
        }
        function gc(e, r) {
          const a = g.A2(r);
          let s = a.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            l = a.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
          a.case !== "sensitive" &&
            ((s = s.map((J) => (typeof J == "string" ? J.toLowerCase() : J))),
            (l = l.map((J) => (typeof J == "string" ? J.toLowerCase() : J))));
          const v = new Set(s),
            b = new Set(l),
            D = e.Codec ?? Fr,
            U = e.Boolean ?? Ur,
            R = e.String ?? Ct,
            G = new R({ type: "string", error: a.error }),
            H = new U({ type: "boolean", error: a.error }),
            q = new D({
              type: "pipe",
              in: G,
              out: H,
              transform: (J, se) => {
                let St = J;
                return (
                  a.case !== "sensitive" && (St = St.toLowerCase()),
                  v.has(St)
                    ? !0
                    : b.has(St)
                      ? !1
                      : (se.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [...v, ...b],
                          input: se.value,
                          inst: q,
                          continue: !1,
                        }),
                        {})
                );
              },
              reverseTransform: (J, se) =>
                J === !0 ? s[0] || "true" : l[0] || "false",
              error: a.error,
            });
          return q;
        }
        function gl(e, r, a, s = {}) {
          const l = util.normalizeParams(s),
            v = {
              ...util.normalizeParams(s),
              check: "string_format",
              type: "string",
              format: r,
              fn: typeof a == "function" ? a : (D) => a.test(D),
              ...l,
            };
          return a instanceof RegExp && (v.pattern = a), new e(v);
        }
        function vc(e) {
          let r = e?.target ?? "draft-2020-12";
          return (
            r === "draft-4" && (r = "draft-04"),
            r === "draft-7" && (r = "draft-07"),
            {
              processors: e.processors ?? {},
              metadataRegistry: e?.metadata ?? ut,
              target: r,
              unrepresentable: e?.unrepresentable ?? "throw",
              override: e?.override ?? (() => {}),
              io: e?.io ?? "output",
              counter: 0,
              seen: new Map(),
              cycles: e?.cycles ?? "ref",
              reused: e?.reused ?? "inline",
              external: e?.external ?? void 0,
            }
          );
        }
        function ae(e, r, a = { path: [], schemaPath: [] }) {
          var s;
          const l = e._zod.def,
            v = r.seen.get(e);
          if (v)
            return (
              v.count++,
              a.schemaPath.includes(e) && (v.cycle = a.path),
              v.schema
            );
          const b = { schema: {}, count: 1, cycle: void 0, path: a.path };
          r.seen.set(e, b);
          const D = e._zod.toJSONSchema?.();
          if (D) b.schema = D;
          else {
            const G = { ...a, schemaPath: [...a.schemaPath, e], path: a.path };
            if (e._zod.processJSONSchema)
              e._zod.processJSONSchema(r, b.schema, G);
            else {
              const q = b.schema,
                J = r.processors[l.type];
              if (!J)
                throw new Error(
                  `[toJSONSchema]: Non-representable type encountered: ${l.type}`,
                );
              J(e, r, q, G);
            }
            const H = e._zod.parent;
            H &&
              (b.ref || (b.ref = H),
              ae(H, r, G),
              (r.seen.get(H).isParent = !0));
          }
          const U = r.metadataRegistry.get(e);
          return (
            U && Object.assign(b.schema, U),
            r.io === "input" &&
              Ce(e) &&
              (delete b.schema.examples, delete b.schema.default),
            r.io === "input" &&
              "_prefault" in b.schema &&
              ((s = b.schema).default ?? (s.default = b.schema._prefault)),
            delete b.schema._prefault,
            r.seen.get(e).schema
          );
        }
        function nr(e, r) {
          const a = e.seen.get(r);
          if (!a) throw new Error("Unprocessed schema. This is a bug in Zod.");
          const s = new Map();
          for (const b of e.seen.entries()) {
            const D = e.metadataRegistry.get(b[0])?.id;
            if (D) {
              const U = s.get(D);
              if (U && U !== b[0])
                throw new Error(
                  `Duplicate schema id "${D}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
                );
              s.set(D, b[0]);
            }
          }
          const l = (b) => {
              const D = e.target === "draft-2020-12" ? "$defs" : "definitions";
              if (e.external) {
                const H = e.external.registry.get(b[0])?.id,
                  q = e.external.uri ?? ((se) => se);
                if (H) return { ref: q(H) };
                const J =
                  b[1].defId ?? b[1].schema.id ?? `schema${e.counter++}`;
                return (
                  (b[1].defId = J),
                  { defId: J, ref: `${q("__shared")}#/${D}/${J}` }
                );
              }
              if (b[1] === a) return { ref: "#" };
              const R = `#/${D}/`,
                G = b[1].schema.id ?? `__schema${e.counter++}`;
              return { defId: G, ref: R + G };
            },
            v = (b) => {
              if (b[1].schema.$ref) return;
              const D = b[1],
                { ref: U, defId: R } = l(b);
              (D.def = { ...D.schema }), R && (D.defId = R);
              const G = D.schema;
              for (const H in G) delete G[H];
              G.$ref = U;
            };
          if (e.cycles === "throw")
            for (const b of e.seen.entries()) {
              const D = b[1];
              if (D.cycle)
                throw new Error(`Cycle detected: #/${D.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
            }
          for (const b of e.seen.entries()) {
            const D = b[1];
            if (r === b[0]) {
              v(b);
              continue;
            }
            if (e.external) {
              const R = e.external.registry.get(b[0])?.id;
              if (r !== b[0] && R) {
                v(b);
                continue;
              }
            }
            if (e.metadataRegistry.get(b[0])?.id) {
              v(b);
              continue;
            }
            if (D.cycle) {
              v(b);
              continue;
            }
            if (D.count > 1 && e.reused === "ref") {
              v(b);
              continue;
            }
          }
        }
        function Yr(e, r) {
          const a = e.seen.get(r);
          if (!a) throw new Error("Unprocessed schema. This is a bug in Zod.");
          const s = (D) => {
            const U = e.seen.get(D);
            if (U.ref === null) return;
            const R = U.def ?? U.schema,
              G = { ...R },
              H = U.ref;
            if (((U.ref = null), H)) {
              s(H);
              const J = e.seen.get(H),
                se = J.schema;
              if (
                (se.$ref &&
                (e.target === "draft-07" ||
                  e.target === "draft-04" ||
                  e.target === "openapi-3.0")
                  ? ((R.allOf = R.allOf ?? []), R.allOf.push(se))
                  : Object.assign(R, se),
                Object.assign(R, G),
                D._zod.parent === H)
              )
                for (const Ne in R)
                  Ne === "$ref" || Ne === "allOf" || Ne in G || delete R[Ne];
              if (se.$ref && J.def)
                for (const Ne in R)
                  Ne === "$ref" ||
                    Ne === "allOf" ||
                    (Ne in J.def &&
                      JSON.stringify(R[Ne]) === JSON.stringify(J.def[Ne]) &&
                      delete R[Ne]);
            }
            const q = D._zod.parent;
            if (q && q !== H) {
              s(q);
              const J = e.seen.get(q);
              if (J?.schema.$ref && ((R.$ref = J.schema.$ref), J.def))
                for (const se in R)
                  se === "$ref" ||
                    se === "allOf" ||
                    (se in J.def &&
                      JSON.stringify(R[se]) === JSON.stringify(J.def[se]) &&
                      delete R[se]);
            }
            e.override({ zodSchema: D, jsonSchema: R, path: U.path ?? [] });
          };
          for (const D of [...e.seen.entries()].reverse()) s(D[0]);
          const l = {};
          if (
            (e.target === "draft-2020-12"
              ? (l.$schema = "https://json-schema.org/draft/2020-12/schema")
              : e.target === "draft-07"
                ? (l.$schema = "http://json-schema.org/draft-07/schema#")
                : e.target === "draft-04"
                  ? (l.$schema = "http://json-schema.org/draft-04/schema#")
                  : e.target,
            e.external?.uri)
          ) {
            const D = e.external.registry.get(r)?.id;
            if (!D) throw new Error("Schema is missing an `id` property");
            l.$id = e.external.uri(D);
          }
          Object.assign(l, a.def ?? a.schema);
          const v = e.metadataRegistry.get(r)?.id;
          v !== void 0 && l.id === v && delete l.id;
          const b = e.external?.defs ?? {};
          for (const D of e.seen.entries()) {
            const U = D[1];
            U.def &&
              U.defId &&
              (U.def.id === U.defId && delete U.def.id, (b[U.defId] = U.def));
          }
          e.external ||
            (Object.keys(b).length > 0 &&
              (e.target === "draft-2020-12"
                ? (l.$defs = b)
                : (l.definitions = b)));
          try {
            const D = JSON.parse(JSON.stringify(l));
            return (
              Object.defineProperty(D, "~standard", {
                value: {
                  ...r["~standard"],
                  jsonSchema: {
                    input: On(r, "input", e.processors),
                    output: On(r, "output", e.processors),
                  },
                },
                enumerable: !1,
                writable: !1,
              }),
              D
            );
          } catch {
            throw new Error("Error converting schema to JSON.");
          }
        }
        function Ce(e, r) {
          const a = r ?? { seen: new Set() };
          if (a.seen.has(e)) return !1;
          a.seen.add(e);
          const s = e._zod.def;
          if (s.type === "transform") return !0;
          if (s.type === "array") return Ce(s.element, a);
          if (s.type === "set") return Ce(s.valueType, a);
          if (s.type === "lazy") return Ce(s.getter(), a);
          if (
            s.type === "promise" ||
            s.type === "optional" ||
            s.type === "nonoptional" ||
            s.type === "nullable" ||
            s.type === "readonly" ||
            s.type === "default" ||
            s.type === "prefault"
          )
            return Ce(s.innerType, a);
          if (s.type === "intersection") return Ce(s.left, a) || Ce(s.right, a);
          if (s.type === "record" || s.type === "map")
            return Ce(s.keyType, a) || Ce(s.valueType, a);
          if (s.type === "pipe")
            return e._zod.traits.has("$ZodCodec")
              ? !0
              : Ce(s.in, a) || Ce(s.out, a);
          if (s.type === "object") {
            for (const l in s.shape) if (Ce(s.shape[l], a)) return !0;
            return !1;
          }
          if (s.type === "union") {
            for (const l of s.options) if (Ce(l, a)) return !0;
            return !1;
          }
          if (s.type === "tuple") {
            for (const l of s.items) if (Ce(l, a)) return !0;
            return !!(s.rest && Ce(s.rest, a));
          }
          return !1;
        }
        const so =
            (e, r = {}) =>
            (a) => {
              const s = vc({ ...a, processors: r });
              return ae(e, s), nr(s, e), Yr(s, e);
            },
          On =
            (e, r, a = {}) =>
            (s) => {
              const { libraryOptions: l, target: v } = s ?? {},
                b = vc({ ...(l ?? {}), target: v, io: r, processors: a });
              return ae(e, b), nr(b, e), Yr(b, e);
            },
          Nn = {
            guid: "uuid",
            url: "uri",
            datetime: "date-time",
            json_string: "json-string",
            regex: "",
          },
          Qr = (e, r, a, s) => {
            const l = a;
            l.type = "string";
            const {
              minimum: v,
              maximum: b,
              format: D,
              patterns: U,
              contentEncoding: R,
            } = e._zod.bag;
            if (
              (typeof v == "number" && (l.minLength = v),
              typeof b == "number" && (l.maxLength = b),
              D &&
                ((l.format = Nn[D] ?? D),
                l.format === "" && delete l.format,
                D === "time" && delete l.format),
              R && (l.contentEncoding = R),
              U && U.size > 0)
            ) {
              const G = [...U];
              G.length === 1
                ? (l.pattern = G[0].source)
                : G.length > 1 &&
                  (l.allOf = [
                    ...G.map((H) => ({
                      ...(r.target === "draft-07" ||
                      r.target === "draft-04" ||
                      r.target === "openapi-3.0"
                        ? { type: "string" }
                        : {}),
                      pattern: H.source,
                    })),
                  ]);
            }
          },
          lo = (e, r, a, s) => {
            const l = a,
              {
                minimum: v,
                maximum: b,
                format: D,
                multipleOf: U,
                exclusiveMaximum: R,
                exclusiveMinimum: G,
              } = e._zod.bag;
            typeof D == "string" && D.includes("int")
              ? (l.type = "integer")
              : (l.type = "number");
            const H =
                typeof G == "number" && G >= (v ?? Number.NEGATIVE_INFINITY),
              q = typeof R == "number" && R <= (b ?? Number.POSITIVE_INFINITY),
              J = r.target === "draft-04" || r.target === "openapi-3.0";
            H
              ? J
                ? ((l.minimum = G), (l.exclusiveMinimum = !0))
                : (l.exclusiveMinimum = G)
              : typeof v == "number" && (l.minimum = v),
              q
                ? J
                  ? ((l.maximum = R), (l.exclusiveMaximum = !0))
                  : (l.exclusiveMaximum = R)
                : typeof b == "number" && (l.maximum = b),
              typeof U == "number" && (l.multipleOf = U);
          },
          uo = (e, r, a, s) => {
            a.type = "boolean";
          },
          fo = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
          },
          ei = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
          },
          jn = (e, r, a, s) => {
            r.target === "openapi-3.0"
              ? ((a.type = "string"), (a.nullable = !0), (a.enum = [null]))
              : (a.type = "null");
          },
          vl = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
          },
          hc = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
          },
          po = (e, r, a, s) => {
            a.not = {};
          },
          bc = (e, r, a, s) => {},
          ti = (e, r, a, s) => {},
          ni = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
          },
          mo = (e, r, a, s) => {
            const l = e._zod.def,
              v = (0, g.w5)(l.entries);
            v.every((b) => typeof b == "number") && (a.type = "number"),
              v.every((b) => typeof b == "string") && (a.type = "string"),
              (a.enum = v);
          },
          yc = (e, r, a, s) => {
            const l = e._zod.def,
              v = [];
            for (const b of l.values)
              if (b === void 0) {
                if (r.unrepresentable === "throw")
                  throw new Error(
                    "Literal `undefined` cannot be represented in JSON Schema",
                  );
              } else if (typeof b == "bigint") {
                if (r.unrepresentable === "throw")
                  throw new Error(
                    "BigInt literals cannot be represented in JSON Schema",
                  );
                v.push(Number(b));
              } else v.push(b);
            if (v.length !== 0)
              if (v.length === 1) {
                const b = v[0];
                (a.type = b === null ? "null" : typeof b),
                  r.target === "draft-04" || r.target === "openapi-3.0"
                    ? (a.enum = [b])
                    : (a.const = b);
              } else
                v.every((b) => typeof b == "number") && (a.type = "number"),
                  v.every((b) => typeof b == "string") && (a.type = "string"),
                  v.every((b) => typeof b == "boolean") && (a.type = "boolean"),
                  v.every((b) => b === null) && (a.type = "null"),
                  (a.enum = v);
          },
          $c = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
          },
          ri = (e, r, a, s) => {
            const l = a,
              v = e._zod.pattern;
            if (!v) throw new Error("Pattern not found in template literal");
            (l.type = "string"), (l.pattern = v.source);
          },
          _c = (e, r, a, s) => {
            const l = a,
              v = {
                type: "string",
                format: "binary",
                contentEncoding: "binary",
              },
              { minimum: b, maximum: D, mime: U } = e._zod.bag;
            b !== void 0 && (v.minLength = b),
              D !== void 0 && (v.maxLength = D),
              U
                ? U.length === 1
                  ? ((v.contentMediaType = U[0]), Object.assign(l, v))
                  : (Object.assign(l, v),
                    (l.anyOf = U.map((R) => ({ contentMediaType: R }))))
                : Object.assign(l, v);
          },
          Ic = (e, r, a, s) => {
            a.type = "boolean";
          },
          En = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error(
                "Custom types cannot be represented in JSON Schema",
              );
          },
          xc = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error(
                "Function types cannot be represented in JSON Schema",
              );
          },
          go = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error(
                "Transforms cannot be represented in JSON Schema",
              );
          },
          vo = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
          },
          Sc = (e, r, a, s) => {
            if (r.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
          },
          ho = (e, r, a, s) => {
            const l = a,
              v = e._zod.def,
              { minimum: b, maximum: D } = e._zod.bag;
            typeof b == "number" && (l.minItems = b),
              typeof D == "number" && (l.maxItems = D),
              (l.type = "array"),
              (l.items = ae(v.element, r, {
                ...s,
                path: [...s.path, "items"],
              }));
          },
          kc = (e, r, a, s) => {
            const l = a,
              v = e._zod.def;
            (l.type = "object"), (l.properties = {});
            const b = v.shape;
            for (const R in b)
              l.properties[R] = ae(b[R], r, {
                ...s,
                path: [...s.path, "properties", R],
              });
            const D = new Set(Object.keys(b)),
              U = new Set(
                [...D].filter((R) => {
                  const G = v.shape[R]._zod;
                  return r.io === "input"
                    ? G.optin === void 0
                    : G.optout === void 0;
                }),
              );
            U.size > 0 && (l.required = Array.from(U)),
              v.catchall?._zod.def.type === "never"
                ? (l.additionalProperties = !1)
                : v.catchall
                  ? v.catchall &&
                    (l.additionalProperties = ae(v.catchall, r, {
                      ...s,
                      path: [...s.path, "additionalProperties"],
                    }))
                  : r.io === "output" && (l.additionalProperties = !1);
          },
          bo = (e, r, a, s) => {
            const l = e._zod.def,
              v = l.inclusive === !1,
              b = l.options.map((D, U) =>
                ae(D, r, { ...s, path: [...s.path, v ? "oneOf" : "anyOf", U] }),
              );
            v ? (a.oneOf = b) : (a.anyOf = b);
          },
          wc = (e, r, a, s) => {
            const l = e._zod.def,
              v = ae(l.left, r, { ...s, path: [...s.path, "allOf", 0] }),
              b = ae(l.right, r, { ...s, path: [...s.path, "allOf", 1] }),
              D = (R) => "allOf" in R && Object.keys(R).length === 1,
              U = [...(D(v) ? v.allOf : [v]), ...(D(b) ? b.allOf : [b])];
            a.allOf = U;
          },
          Un = (e, r, a, s) => {
            const l = a,
              v = e._zod.def;
            l.type = "array";
            const b = r.target === "draft-2020-12" ? "prefixItems" : "items",
              D =
                r.target === "draft-2020-12" || r.target === "openapi-3.0"
                  ? "items"
                  : "additionalItems",
              U = v.items.map((q, J) =>
                ae(q, r, { ...s, path: [...s.path, b, J] }),
              ),
              R = v.rest
                ? ae(v.rest, r, {
                    ...s,
                    path: [
                      ...s.path,
                      D,
                      ...(r.target === "openapi-3.0" ? [v.items.length] : []),
                    ],
                  })
                : null;
            r.target === "draft-2020-12"
              ? ((l.prefixItems = U), R && (l.items = R))
              : r.target === "openapi-3.0"
                ? ((l.items = { anyOf: U }),
                  R && l.items.anyOf.push(R),
                  (l.minItems = U.length),
                  R || (l.maxItems = U.length))
                : ((l.items = U), R && (l.additionalItems = R));
            const { minimum: G, maximum: H } = e._zod.bag;
            typeof G == "number" && (l.minItems = G),
              typeof H == "number" && (l.maxItems = H);
          },
          zc = (e, r, a, s) => {
            const l = a,
              v = e._zod.def;
            l.type = "object";
            const b = v.keyType,
              U = b._zod.bag?.patterns;
            if (v.mode === "loose" && U && U.size > 0) {
              const G = ae(v.valueType, r, {
                ...s,
                path: [...s.path, "patternProperties", "*"],
              });
              l.patternProperties = {};
              for (const H of U) l.patternProperties[H.source] = G;
            } else
              (r.target === "draft-07" || r.target === "draft-2020-12") &&
                (l.propertyNames = ae(v.keyType, r, {
                  ...s,
                  path: [...s.path, "propertyNames"],
                })),
                (l.additionalProperties = ae(v.valueType, r, {
                  ...s,
                  path: [...s.path, "additionalProperties"],
                }));
            const R = b._zod.values;
            if (R) {
              const G = [...R].filter(
                (H) => typeof H == "string" || typeof H == "number",
              );
              G.length > 0 && (l.required = G);
            }
          },
          rr = (e, r, a, s) => {
            const l = e._zod.def,
              v = ae(l.innerType, r, s),
              b = r.seen.get(e);
            r.target === "openapi-3.0"
              ? ((b.ref = l.innerType), (a.nullable = !0))
              : (a.anyOf = [v, { type: "null" }]);
          },
          yo = (e, r, a, s) => {
            const l = e._zod.def;
            ae(l.innerType, r, s);
            const v = r.seen.get(e);
            v.ref = l.innerType;
          },
          on = (e, r, a, s) => {
            const l = e._zod.def;
            ae(l.innerType, r, s);
            const v = r.seen.get(e);
            (v.ref = l.innerType),
              (a.default = JSON.parse(JSON.stringify(l.defaultValue)));
          },
          $o = (e, r, a, s) => {
            const l = e._zod.def;
            ae(l.innerType, r, s);
            const v = r.seen.get(e);
            (v.ref = l.innerType),
              r.io === "input" &&
                (a._prefault = JSON.parse(JSON.stringify(l.defaultValue)));
          },
          _o = (e, r, a, s) => {
            const l = e._zod.def;
            ae(l.innerType, r, s);
            const v = r.seen.get(e);
            v.ref = l.innerType;
            let b;
            try {
              b = l.catchValue(void 0);
            } catch {
              throw new Error(
                "Dynamic catch values are not supported in JSON Schema",
              );
            }
            a.default = b;
          },
          ir = (e, r, a, s) => {
            const l = e._zod.def,
              v = l.in._zod.traits.has("$ZodTransform"),
              b = r.io === "input" ? (v ? l.out : l.in) : l.out;
            ae(b, r, s);
            const D = r.seen.get(e);
            D.ref = b;
          },
          ii = (e, r, a, s) => {
            const l = e._zod.def;
            ae(l.innerType, r, s);
            const v = r.seen.get(e);
            (v.ref = l.innerType), (a.readOnly = !0);
          },
          Dc = (e, r, a, s) => {
            const l = e._zod.def;
            ae(l.innerType, r, s);
            const v = r.seen.get(e);
            v.ref = l.innerType;
          },
          oi = (e, r, a, s) => {
            const l = e._zod.def;
            ae(l.innerType, r, s);
            const v = r.seen.get(e);
            v.ref = l.innerType;
          },
          Io = {
            string: Qr,
            number: lo,
            boolean: uo,
            bigint: fo,
            symbol: ei,
            null: jn,
            undefined: vl,
            void: hc,
            never: po,
            any: bc,
            unknown: ti,
            date: ni,
            enum: mo,
            literal: yc,
            nan: $c,
            template_literal: ri,
            file: _c,
            success: Ic,
            custom: En,
            function: xc,
            transform: go,
            map: vo,
            set: Sc,
            array: ho,
            object: kc,
            union: bo,
            intersection: wc,
            tuple: Un,
            record: zc,
            nullable: rr,
            nonoptional: yo,
            default: on,
            prefault: $o,
            catch: _o,
            pipe: ir,
            readonly: ii,
            promise: Dc,
            optional: oi,
            lazy: (e, r, a, s) => {
              const l = e._zod.innerType;
              ae(l, r, s);
              const v = r.seen.get(e);
              v.ref = l;
            },
          };
        function bl(e, r) {
          if ("_idmap" in e) {
            const s = e,
              l = initializeContext({ ...r, processors: Io }),
              v = {};
            for (const U of s._idmap.entries()) {
              const [R, G] = U;
              process(G, l);
            }
            const b = {},
              D = { registry: s, uri: r?.uri, defs: v };
            l.external = D;
            for (const U of s._idmap.entries()) {
              const [R, G] = U;
              extractDefs(l, G), (b[R] = finalize(l, G));
            }
            if (Object.keys(v).length > 0) {
              const U = l.target === "draft-2020-12" ? "$defs" : "definitions";
              b.__shared = { [U]: v };
            }
            return { schemas: b };
          }
          const a = initializeContext({ ...r, processors: Io });
          return process(e, a), extractDefs(a, e), finalize(a, e);
        }
        const Pc = j.xI("ZodISODateTime", (e, r) => {
          ia.init(e, r), Ie.init(e, r);
        });
        function Oc(e) {
          return Rt(Pc, e);
        }
        const Nc = j.xI("ZodISODate", (e, r) => {
          oa.init(e, r), Ie.init(e, r);
        });
        function jc(e) {
          return xn(Nc, e);
        }
        const xo = j.xI("ZodISOTime", (e, r) => {
          aa.init(e, r), Ie.init(e, r);
        });
        function yl(e) {
          return Ki(xo, e);
        }
        const or = j.xI("ZodISODuration", (e, r) => {
          Er.init(e, r), Ie.init(e, r);
        });
        function So(e) {
          return Jr(or, e);
        }
        const ko = (e, r) => {
            gn.init(e, r),
              (e.name = "ZodError"),
              Object.defineProperties(e, {
                format: { value: (a) => Pr(e, a) },
                flatten: { value: (a) => Kn(e, a) },
                addIssue: {
                  value: (a) => {
                    e.issues.push(a),
                      (e.message = JSON.stringify(e.issues, g.k8, 2));
                  },
                },
                addIssues: {
                  value: (a) => {
                    e.issues.push(...a),
                      (e.message = JSON.stringify(e.issues, g.k8, 2));
                  },
                },
                isEmpty: {
                  get() {
                    return e.issues.length === 0;
                  },
                },
              });
          },
          $l = null,
          qe = j.xI("ZodError", ko, { Parent: Error }),
          Ec = lt(qe),
          Uc = xe(qe),
          Ac = He(qe),
          Tc = Qe(qe),
          Cc = N(qe),
          Rc = P(qe),
          ai = o(qe),
          Zc = w(qe),
          Lc = W(qe),
          Bc = he(qe),
          Fc = Te(qe),
          Gc = Yt(qe),
          wo = new WeakMap();
        function An(e, r, a) {
          const s = Object.getPrototypeOf(e);
          let l = wo.get(s);
          if ((l || ((l = new Set()), wo.set(s, l)), !l.has(r))) {
            l.add(r);
            for (const v in a) {
              const b = a[v];
              Object.defineProperty(s, v, {
                configurable: !0,
                enumerable: !1,
                get() {
                  const D = b.bind(this);
                  return (
                    Object.defineProperty(this, v, {
                      configurable: !0,
                      writable: !0,
                      enumerable: !0,
                      value: D,
                    }),
                    D
                  );
                },
                set(D) {
                  Object.defineProperty(this, v, {
                    configurable: !0,
                    writable: !0,
                    enumerable: !0,
                    value: D,
                  });
                },
              });
            }
          }
        }
        const be = j.xI(
            "ZodType",
            (e, r) => (
              fe.init(e, r),
              Object.assign(e["~standard"], {
                jsonSchema: { input: On(e, "input"), output: On(e, "output") },
              }),
              (e.toJSONSchema = so(e, {})),
              (e.def = r),
              (e.type = r.type),
              Object.defineProperty(e, "_def", { value: r }),
              (e.parse = (a, s) => Ec(e, a, s, { callee: e.parse })),
              (e.safeParse = (a, s) => Ac(e, a, s)),
              (e.parseAsync = async (a, s) =>
                Uc(e, a, s, { callee: e.parseAsync })),
              (e.safeParseAsync = async (a, s) => Tc(e, a, s)),
              (e.spa = e.safeParseAsync),
              (e.encode = (a, s) => Cc(e, a, s)),
              (e.decode = (a, s) => Rc(e, a, s)),
              (e.encodeAsync = async (a, s) => ai(e, a, s)),
              (e.decodeAsync = async (a, s) => Zc(e, a, s)),
              (e.safeEncode = (a, s) => Lc(e, a, s)),
              (e.safeDecode = (a, s) => Bc(e, a, s)),
              (e.safeEncodeAsync = async (a, s) => Fc(e, a, s)),
              (e.safeDecodeAsync = async (a, s) => Gc(e, a, s)),
              An(e, "ZodType", {
                check(...a) {
                  const s = this.def;
                  return this.clone(
                    g.zM(s, {
                      checks: [
                        ...(s.checks ?? []),
                        ...a.map((l) =>
                          typeof l == "function"
                            ? {
                                _zod: {
                                  check: l,
                                  def: { check: "custom" },
                                  onattach: [],
                                },
                              }
                            : l,
                        ),
                      ],
                    }),
                    { parent: !0 },
                  );
                },
                with(...a) {
                  return this.check(...a);
                },
                clone(a, s) {
                  return g.o8(this, a, s);
                },
                brand() {
                  return this;
                },
                register(a, s) {
                  return a.add(this, s), this;
                },
                refine(a, s) {
                  return this.check(lu(a, s));
                },
                superRefine(a, s) {
                  return this.check(uu(a, s));
                },
                overwrite(a) {
                  return this.check(rn(a));
                },
                optional() {
                  return B(this);
                },
                exactOptional() {
                  return X(this);
                },
                nullable() {
                  return Y(this);
                },
                nullish() {
                  return B(Y(this));
                },
                nonoptional(a) {
                  return nt(this, a);
                },
                array() {
                  return cn(this);
                },
                or(a) {
                  return ls([this, a]);
                },
                and(a) {
                  return Vo(this, a);
                },
                transform(a) {
                  return yi(this, Z(a));
                },
                default(a) {
                  return ge(this, a);
                },
                prefault(a) {
                  return Xe(this, a);
                },
                catch(a) {
                  return ot(this, a);
                },
                pipe(a) {
                  return yi(this, a);
                },
                readonly() {
                  return Ql(this);
                },
                describe(a) {
                  const s = this.clone();
                  return ut.add(s, { description: a }), s;
                },
                meta(...a) {
                  if (a.length === 0) return ut.get(this);
                  const s = this.clone();
                  return ut.add(s, a[0]), s;
                },
                isOptional() {
                  return this.safeParse(void 0).success;
                },
                isNullable() {
                  return this.safeParse(null).success;
                },
                apply(a) {
                  return a(this);
                },
              }),
              Object.defineProperty(e, "description", {
                get() {
                  return ut.get(e)?.description;
                },
                configurable: !0,
              }),
              e
            ),
          ),
          zo = j.xI("_ZodString", (e, r) => {
            Ct.init(e, r),
              be.init(e, r),
              (e._zod.processJSONSchema = (s, l, v) => Qr(e, s, l, v));
            const a = e._zod.bag;
            (e.format = a.format ?? null),
              (e.minLength = a.minimum ?? null),
              (e.maxLength = a.maximum ?? null),
              An(e, "_ZodString", {
                regex(...s) {
                  return this.check(qr(...s));
                },
                includes(...s) {
                  return this.check(eo(...s));
                },
                startsWith(...s) {
                  return this.check(to(...s));
                },
                endsWith(...s) {
                  return this.check(tc(...s));
                },
                min(...s) {
                  return this.check(tr(...s));
                },
                max(...s) {
                  return this.check(Xi(...s));
                },
                length(...s) {
                  return this.check(Yi(...s));
                },
                nonempty(...s) {
                  return this.check(tr(1, ...s));
                },
                lowercase(s) {
                  return this.check(ec(s));
                },
                uppercase(s) {
                  return this.check(Qi(s));
                },
                trim() {
                  return this.check(rc());
                },
                normalize(...s) {
                  return this.check(no(...s));
                },
                toLowerCase() {
                  return this.check(ic());
                },
                toUpperCase() {
                  return this.check(oc());
                },
                slugify() {
                  return this.check(ac());
                },
              });
          }),
          ci = j.xI("ZodString", (e, r) => {
            Ct.init(e, r),
              zo.init(e, r),
              (e.email = (a) => e.check(Aa(si, a))),
              (e.url = (a) => e.check(Za(di, a))),
              (e.jwt = (a) => e.check(In(Ao, a))),
              (e.emoji = (a) => e.check(La(Do, a))),
              (e.guid = (a) => e.check(Wi(li, a))),
              (e.uuid = (a) => e.check(Ta(_t, a))),
              (e.uuidv4 = (a) => e.check(Ca(_t, a))),
              (e.uuidv6 = (a) => e.check(Ji(_t, a))),
              (e.uuidv7 = (a) => e.check(Ra(_t, a))),
              (e.nanoid = (a) => e.check(Ba(an, a))),
              (e.guid = (a) => e.check(Wi(li, a))),
              (e.cuid = (a) => e.check(Fa(fi, a))),
              (e.cuid2 = (a) => e.check(Ga(Wc, a))),
              (e.ulid = (a) => e.check(Gr(Po, a))),
              (e.base64 = (a) => e.check(Va(Tn, a))),
              (e.base64url = (a) => e.check(Ka(Hc, a))),
              (e.xid = (a) => e.check(Ma(Oo, a))),
              (e.ksuid = (a) => e.check(Mr(No, a))),
              (e.ipv4 = (a) => e.check(Vi(jo, a))),
              (e.ipv6 = (a) => e.check(Wa(Eo, a))),
              (e.cidrv4 = (a) => e.check(As(cr, a))),
              (e.cidrv6 = (a) => e.check(Ts(Uo, a))),
              (e.e164 = (a) => e.check(Wr(pi, a))),
              (e.datetime = (a) => e.check(Oc(a))),
              (e.date = (a) => e.check(jc(a))),
              (e.time = (a) => e.check(yl(a))),
              (e.duration = (a) => e.check(So(a)));
          });
        function ar(e) {
          return Ea(ci, e);
        }
        const Ie = j.xI("ZodStringFormat", (e, r) => {
            _e.init(e, r), zo.init(e, r);
          }),
          si = j.xI("ZodEmail", (e, r) => {
            vn.init(e, r), Ie.init(e, r);
          });
        function _l(e) {
          return core._email(si, e);
        }
        const li = j.xI("ZodGUID", (e, r) => {
          Qt.init(e, r), Ie.init(e, r);
        });
        function Il(e) {
          return core._guid(li, e);
        }
        const _t = j.xI("ZodUUID", (e, r) => {
          Di.init(e, r), Ie.init(e, r);
        });
        function xl(e) {
          return core._uuid(_t, e);
        }
        function Sl(e) {
          return core._uuidv4(_t, e);
        }
        function ui(e) {
          return core._uuidv6(_t, e);
        }
        function Mc(e) {
          return core._uuidv7(_t, e);
        }
        const di = j.xI("ZodURL", (e, r) => {
          gs.init(e, r), Ie.init(e, r);
        });
        function kl(e) {
          return core._url(di, e);
        }
        function wl(e) {
          return core._url(di, {
            protocol: core.regexes.httpProtocol,
            hostname: core.regexes.domain,
            ...util.normalizeParams(e),
          });
        }
        const Do = j.xI("ZodEmoji", (e, r) => {
          ta.init(e, r), Ie.init(e, r);
        });
        function zl(e) {
          return core._emoji(Do, e);
        }
        const an = j.xI("ZodNanoID", (e, r) => {
          et.init(e, r), Ie.init(e, r);
        });
        function Dl(e) {
          return core._nanoid(an, e);
        }
        const fi = j.xI("ZodCUID", (e, r) => {
          Pi.init(e, r), Ie.init(e, r);
        });
        function Pl(e) {
          return core._cuid(fi, e);
        }
        const Wc = j.xI("ZodCUID2", (e, r) => {
          na.init(e, r), Ie.init(e, r);
        });
        function Ol(e) {
          return core._cuid2(Wc, e);
        }
        const Po = j.xI("ZodULID", (e, r) => {
          jr.init(e, r), Ie.init(e, r);
        });
        function au(e) {
          return core._ulid(Po, e);
        }
        const Oo = j.xI("ZodXID", (e, r) => {
          Oi.init(e, r), Ie.init(e, r);
        });
        function Jc(e) {
          return core._xid(Oo, e);
        }
        const No = j.xI("ZodKSUID", (e, r) => {
          ra.init(e, r), Ie.init(e, r);
        });
        function Nl(e) {
          return core._ksuid(No, e);
        }
        const jo = j.xI("ZodIPv4", (e, r) => {
          ca.init(e, r), Ie.init(e, r);
        });
        function jl(e) {
          return core._ipv4(jo, e);
        }
        const Vc = null;
        function El(e) {
          return core._mac(Vc, e);
        }
        const Eo = j.xI("ZodIPv6", (e, r) => {
          Ni.init(e, r), Ie.init(e, r);
        });
        function Ul(e) {
          return core._ipv6(Eo, e);
        }
        const cr = j.xI("ZodCIDRv4", (e, r) => {
          sa.init(e, r), Ie.init(e, r);
        });
        function Kc(e) {
          return core._cidrv4(cr, e);
        }
        const Uo = j.xI("ZodCIDRv6", (e, r) => {
          la.init(e, r), Ie.init(e, r);
        });
        function Al(e) {
          return core._cidrv6(Uo, e);
        }
        const Tn = j.xI("ZodBase64", (e, r) => {
          ua.init(e, r), Ie.init(e, r);
        });
        function Tl(e) {
          return core._base64(Tn, e);
        }
        const Hc = j.xI("ZodBase64URL", (e, r) => {
          Hn.init(e, r), Ie.init(e, r);
        });
        function Cl(e) {
          return core._base64url(Hc, e);
        }
        const pi = j.xI("ZodE164", (e, r) => {
          yt.init(e, r), Ie.init(e, r);
        });
        function qc(e) {
          return core._e164(pi, e);
        }
        const Ao = j.xI("ZodJWT", (e, r) => {
          fa.init(e, r), Ie.init(e, r);
        });
        function Rl(e) {
          return core._jwt(Ao, e);
        }
        const sr = null;
        function Xc(e, r, a = {}) {
          return core._stringFormat(sr, e, r, a);
        }
        function Zl(e) {
          return core._stringFormat(sr, "hostname", core.regexes.hostname, e);
        }
        function Ll(e) {
          return core._stringFormat(sr, "hex", core.regexes.hex, e);
        }
        function cu(e, r) {
          const a = r?.enc ?? "hex",
            s = `${e}_${a}`,
            l = core.regexes[s];
          if (!l) throw new Error(`Unrecognized hash format: ${s}`);
          return core._stringFormat(sr, s, l, r);
        }
        const To = j.xI("ZodNumber", (e, r) => {
          Ei.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (s, l, v) => lo(e, s, l, v)),
            An(e, "ZodNumber", {
              gt(s, l) {
                return this.check(kn(s, l));
              },
              gte(s, l) {
                return this.check(dt(s, l));
              },
              min(s, l) {
                return this.check(dt(s, l));
              },
              lt(s, l) {
                return this.check(Zt(s, l));
              },
              lte(s, l) {
                return this.check($t(s, l));
              },
              max(s, l) {
                return this.check($t(s, l));
              },
              int(s) {
                return this.check(lr(s));
              },
              safe(s) {
                return this.check(lr(s));
              },
              positive(s) {
                return this.check(kn(0, s));
              },
              nonnegative(s) {
                return this.check(dt(0, s));
              },
              negative(s) {
                return this.check(Zt(0, s));
              },
              nonpositive(s) {
                return this.check($t(0, s));
              },
              multipleOf(s, l) {
                return this.check(Hr(s, l));
              },
              step(s, l) {
                return this.check(Hr(s, l));
              },
              finite() {
                return this;
              },
            });
          const a = e._zod.bag;
          (e.minValue =
            Math.max(
              a.minimum ?? Number.NEGATIVE_INFINITY,
              a.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
            ) ?? null),
            (e.maxValue =
              Math.min(
                a.maximum ?? Number.POSITIVE_INFINITY,
                a.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
              ) ?? null),
            (e.isInt =
              (a.format ?? "").includes("int") ||
              Number.isSafeInteger(a.multipleOf ?? 0.5)),
            (e.isFinite = !0),
            (e.format = a.format ?? null);
        });
        function Yc(e) {
          return Vr(To, e);
        }
        const Cn = j.xI("ZodNumberFormat", (e, r) => {
          pa.init(e, r), To.init(e, r);
        });
        function lr(e) {
          return qa(Cn, e);
        }
        function Bl(e) {
          return core._float32(Cn, e);
        }
        function Co(e) {
          return core._float64(Cn, e);
        }
        function Fl(e) {
          return core._int32(Cn, e);
        }
        function Gl(e) {
          return core._uint32(Cn, e);
        }
        const mi = j.xI("ZodBoolean", (e, r) => {
          Ur.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => uo(e, a, s, l));
        });
        function Ro(e) {
          return core._boolean(mi, e);
        }
        const Zo = j.xI("ZodBigInt", (e, r) => {
          ma.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (s, l, v) => fo(e, s, l, v)),
            (e.gte = (s, l) => e.check(dt(s, l))),
            (e.min = (s, l) => e.check(dt(s, l))),
            (e.gt = (s, l) => e.check(kn(s, l))),
            (e.gte = (s, l) => e.check(dt(s, l))),
            (e.min = (s, l) => e.check(dt(s, l))),
            (e.lt = (s, l) => e.check(Zt(s, l))),
            (e.lte = (s, l) => e.check($t(s, l))),
            (e.max = (s, l) => e.check($t(s, l))),
            (e.positive = (s) => e.check(kn(BigInt(0), s))),
            (e.negative = (s) => e.check(Zt(BigInt(0), s))),
            (e.nonpositive = (s) => e.check($t(BigInt(0), s))),
            (e.nonnegative = (s) => e.check(dt(BigInt(0), s))),
            (e.multipleOf = (s, l) => e.check(Hr(s, l)));
          const a = e._zod.bag;
          (e.minValue = a.minimum ?? null),
            (e.maxValue = a.maximum ?? null),
            (e.format = a.format ?? null);
        });
        function Qc(e) {
          return core._bigint(Zo, e);
        }
        const Lo = null;
        function Bo(e) {
          return core._int64(Lo, e);
        }
        function su(e) {
          return core._uint64(Lo, e);
        }
        const gi = null;
        function es(e) {
          return core._symbol(gi, e);
        }
        const ts = null;
        function Ml(e) {
          return core._undefined(ts, e);
        }
        const ns = null;
        function rs(e) {
          return core._null(ns, e);
        }
        const is = null;
        function Wl() {
          return core._any(is);
        }
        const Fo = j.xI("ZodUnknown", (e, r) => {
          Ar.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => ti(e, a, s, l));
        });
        function It() {
          return Ya(Fo);
        }
        const os = j.xI("ZodNever", (e, r) => {
          ha.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => po(e, a, s, l));
        });
        function ur(e) {
          return Qa(os, e);
        }
        const Go = null;
        function Jl(e) {
          return core._void(Go, e);
        }
        const Mo = j.xI("ZodDate", (e, r) => {
          Ai.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (s, l, v) => ni(e, s, l, v)),
            (e.min = (s, l) => e.check(dt(s, l))),
            (e.max = (s, l) => e.check($t(s, l)));
          const a = e._zod.bag;
          (e.minDate = a.minimum ? new Date(a.minimum) : null),
            (e.maxDate = a.maximum ? new Date(a.maximum) : null);
        });
        function Vl(e) {
          return core._date(Mo, e);
        }
        const as = j.xI("ZodArray", (e, r) => {
          ba.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => ho(e, a, s, l)),
            (e.element = r.element),
            An(e, "ZodArray", {
              min(a, s) {
                return this.check(tr(a, s));
              },
              nonempty(a) {
                return this.check(tr(1, a));
              },
              max(a, s) {
                return this.check(Xi(a, s));
              },
              length(a, s) {
                return this.check(Yi(a, s));
              },
              unwrap() {
                return this.element;
              },
            });
        });
        function cn(e, r) {
          return wn(as, e, r);
        }
        function Wo(e) {
          const r = e._zod.def.shape;
          return y(Object.keys(r));
        }
        const vi = j.xI("ZodObject", (e, r) => {
          ya.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => kc(e, a, s, l)),
            g.gJ(e, "shape", () => r.shape),
            An(e, "ZodObject", {
              keyof() {
                return y(Object.keys(this._zod.def.shape));
              },
              catchall(a) {
                return this.clone({ ...this._zod.def, catchall: a });
              },
              passthrough() {
                return this.clone({ ...this._zod.def, catchall: It() });
              },
              loose() {
                return this.clone({ ...this._zod.def, catchall: It() });
              },
              strict() {
                return this.clone({ ...this._zod.def, catchall: ur() });
              },
              strip() {
                return this.clone({ ...this._zod.def, catchall: void 0 });
              },
              extend(a) {
                return g.X$(this, a);
              },
              safeExtend(a) {
                return g.W0(this, a);
              },
              merge(a) {
                return g.h1(this, a);
              },
              pick(a) {
                return g.Up(this, a);
              },
              omit(a) {
                return g.cJ(this, a);
              },
              partial(...a) {
                return g.OH(F, this, a[0]);
              },
              required(...a) {
                return g.mw(ve, this, a[0]);
              },
            });
        });
        function cs(e, r) {
          const a = { type: "object", shape: e ?? {}, ...g.A2(r) };
          return new vi(a);
        }
        function Kl(e, r) {
          return new vi({
            type: "object",
            shape: e,
            catchall: ur(),
            ...util.normalizeParams(r),
          });
        }
        function Hl(e, r) {
          return new vi({
            type: "object",
            shape: e,
            catchall: It(),
            ...util.normalizeParams(r),
          });
        }
        const ss = j.xI("ZodUnion", (e, r) => {
          $a.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => bo(e, a, s, l)),
            (e.options = r.options);
        });
        function ls(e, r) {
          return new ss({ type: "union", options: e, ...g.A2(r) });
        }
        const us = null;
        function ql(e, r) {
          return new us({
            type: "union",
            options: e,
            inclusive: !1,
            ...util.normalizeParams(r),
          });
        }
        const Jo = null;
        function ds(e, r, a) {
          return new Jo({
            type: "union",
            options: r,
            discriminator: e,
            ...util.normalizeParams(a),
          });
        }
        const hi = j.xI("ZodIntersection", (e, r) => {
          hn.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => wc(e, a, s, l));
        });
        function Vo(e, r) {
          return new hi({ type: "intersection", left: e, right: r });
        }
        const Xl = null;
        function Yl(e, r, a) {
          const s = r instanceof core.$ZodType,
            l = s ? a : r,
            v = s ? r : null;
          return new Xl({
            type: "tuple",
            items: e,
            rest: v,
            ...util.normalizeParams(l),
          });
        }
        const bi = null;
        function fs(e, r, a) {
          return !r || !r._zod
            ? new bi({
                type: "record",
                keyType: ar(),
                valueType: e,
                ...util.normalizeParams(r),
              })
            : new bi({
                type: "record",
                keyType: e,
                valueType: r,
                ...util.normalizeParams(a),
              });
        }
        function n(e, r, a) {
          const s = core.clone(e);
          return (
            (s._zod.values = void 0),
            new bi({
              type: "record",
              keyType: s,
              valueType: r,
              ...util.normalizeParams(a),
            })
          );
        }
        function i(e, r, a) {
          return new bi({
            type: "record",
            keyType: e,
            valueType: r,
            mode: "loose",
            ...util.normalizeParams(a),
          });
        }
        const c = null;
        function u(e, r, a) {
          return new c({
            type: "map",
            keyType: e,
            valueType: r,
            ...util.normalizeParams(a),
          });
        }
        const d = null;
        function p(e, r) {
          return new d({
            type: "set",
            valueType: e,
            ...util.normalizeParams(r),
          });
        }
        const m = j.xI("ZodEnum", (e, r) => {
          Sa.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (s, l, v) => mo(e, s, l, v)),
            (e.enum = r.entries),
            (e.options = Object.values(r.entries));
          const a = new Set(Object.keys(r.entries));
          (e.extract = (s, l) => {
            const v = {};
            for (const b of s)
              if (a.has(b)) v[b] = r.entries[b];
              else throw new Error(`Key ${b} not found in enum`);
            return new m({ ...r, checks: [], ...g.A2(l), entries: v });
          }),
            (e.exclude = (s, l) => {
              const v = { ...r.entries };
              for (const b of s)
                if (a.has(b)) delete v[b];
                else throw new Error(`Key ${b} not found in enum`);
              return new m({ ...r, checks: [], ...g.A2(l), entries: v });
            });
        });
        function y(e, r) {
          const a = Array.isArray(e)
            ? Object.fromEntries(e.map((s) => [s, s]))
            : e;
          return new m({ type: "enum", entries: a, ...g.A2(r) });
        }
        function _(e, r) {
          return new m({
            type: "enum",
            entries: e,
            ...util.normalizeParams(r),
          });
        }
        const I = j.xI("ZodLiteral", (e, r) => {
          ka.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => yc(e, a, s, l)),
            (e.values = new Set(r.values)),
            Object.defineProperty(e, "value", {
              get() {
                if (r.values.length > 1)
                  throw new Error(
                    "This schema contains multiple valid literal values. Use `.values` instead.",
                  );
                return r.values[0];
              },
            });
        });
        function S(e, r) {
          return new I({
            type: "literal",
            values: Array.isArray(e) ? e : [e],
            ...g.A2(r),
          });
        }
        const $ = null;
        function x(e) {
          return core._file($, e);
        }
        const O = j.xI("ZodTransform", (e, r) => {
          Ri.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => go(e, a, s, l)),
            (e._zod.parse = (a, s) => {
              if (s.direction === "backward")
                throw new j.cV(e.constructor.name);
              a.addIssue = (v) => {
                if (typeof v == "string") a.issues.push(g.sn(v, a.value, r));
                else {
                  const b = v;
                  b.fatal && (b.continue = !1),
                    b.code ?? (b.code = "custom"),
                    b.input ?? (b.input = a.value),
                    b.inst ?? (b.inst = e),
                    a.issues.push(g.sn(b));
                }
              };
              const l = r.transform(a.value, a);
              return l instanceof Promise
                ? l.then((v) => ((a.value = v), (a.fallback = !0), a))
                : ((a.value = l), (a.fallback = !0), a);
            });
        });
        function Z(e) {
          return new O({ type: "transform", transform: e });
        }
        const F = j.xI("ZodOptional", (e, r) => {
          Lr.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => oi(e, a, s, l)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function B(e) {
          return new F({ type: "optional", innerType: e });
        }
        const K = j.xI("ZodExactOptional", (e, r) => {
          wa.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => oi(e, a, s, l)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function X(e) {
          return new K({ type: "optional", innerType: e });
        }
        const re = j.xI("ZodNullable", (e, r) => {
          za.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => rr(e, a, s, l)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function Y(e) {
          return new re({ type: "nullable", innerType: e });
        }
        function oe(e) {
          return B(Y(e));
        }
        const ie = j.xI("ZodDefault", (e, r) => {
          Da.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => on(e, a, s, l)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeDefault = e.unwrap);
        });
        function ge(e, r) {
          return new ie({
            type: "default",
            innerType: e,
            get defaultValue() {
              return typeof r == "function" ? r() : g.yG(r);
            },
          });
        }
        const me = j.xI("ZodPrefault", (e, r) => {
          Bi.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => $o(e, a, s, l)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function Xe(e, r) {
          return new me({
            type: "prefault",
            innerType: e,
            get defaultValue() {
              return typeof r == "function" ? r() : g.yG(r);
            },
          });
        }
        const ve = j.xI("ZodNonOptional", (e, r) => {
          Br.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => yo(e, a, s, l)),
            (e.unwrap = () => e._zod.def.innerType);
        });
        function nt(e, r) {
          return new ve({ type: "nonoptional", innerType: e, ...g.A2(r) });
        }
        const ze = null;
        function xt(e) {
          return new ze({ type: "success", innerType: e });
        }
        const Rn = j.xI("ZodCatch", (e, r) => {
          bn.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => _o(e, a, s, l)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeCatch = e.unwrap);
        });
        function ot(e, r) {
          return new Rn({
            type: "catch",
            innerType: e,
            catchValue: typeof r == "function" ? r : () => r,
          });
        }
        const dr = null;
        function Ko(e) {
          return core._nan(dr, e);
        }
        const sn = j.xI("ZodPipe", (e, r) => {
          Gi.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => ir(e, a, s, l)),
            (e.in = r.in),
            (e.out = r.out);
        });
        function yi(e, r) {
          return new sn({ type: "pipe", in: e, out: r });
        }
        const fr = j.xI("ZodCodec", (e, r) => {
          sn.init(e, r), Fr.init(e, r);
        });
        function $i(e, r, a) {
          return new fr({
            type: "pipe",
            in: e,
            out: r,
            transform: a.decode,
            reverseTransform: a.encode,
          });
        }
        function Ho(e) {
          const r = e._zod.def;
          return new fr({
            type: "pipe",
            in: r.out,
            out: r.in,
            transform: r.reverseTransform,
            reverseTransform: r.transform,
          });
        }
        const Zn = null,
          qo = j.xI("ZodReadonly", (e, r) => {
            _n.init(e, r),
              be.init(e, r),
              (e._zod.processJSONSchema = (a, s, l) => ii(e, a, s, l)),
              (e.unwrap = () => e._zod.def.innerType);
          });
        function Ql(e) {
          return new qo({ type: "readonly", innerType: e });
        }
        const _i = null;
        function Xo(e, r) {
          return new _i({
            type: "template_literal",
            parts: e,
            ...util.normalizeParams(r),
          });
        }
        const Yo = null;
        function ps(e) {
          return new Yo({ type: "lazy", getter: e });
        }
        const pr = null;
        function Qo(e) {
          return new pr({ type: "promise", innerType: e });
        }
        const eu = null;
        function ft(e) {
          return new eu({
            type: "function",
            input: Array.isArray(e?.input)
              ? Yl(e?.input)
              : (e?.input ?? cn(It())),
            output: e?.output ?? It(),
          });
        }
        const Lt = j.xI("ZodCustom", (e, r) => {
          Pa.init(e, r),
            be.init(e, r),
            (e._zod.processJSONSchema = (a, s, l) => En(e, a, s, l));
        });
        function $u(e) {
          const r = new core.$ZodCheck({ check: "custom" });
          return (r._zod.check = e), r;
        }
        function _u(e, r) {
          return core._custom(Lt, e ?? (() => !0), r);
        }
        function lu(e, r = {}) {
          return Xr(Lt, e, r);
        }
        function uu(e, r) {
          return pc(e, r);
        }
        const Iu = mc,
          xu = Pn;
        function Su(e, r = {}) {
          const a = new Lt({
            type: "custom",
            check: "custom",
            fn: (s) => s instanceof e,
            abort: !0,
            ...util.normalizeParams(r),
          });
          return (
            (a._zod.bag.Class = e),
            (a._zod.check = (s) => {
              s.value instanceof e ||
                s.issues.push({
                  code: "invalid_type",
                  expected: e.name,
                  input: s.value,
                  inst: a,
                  path: [...(a._zod.def.path ?? [])],
                });
            }),
            a
          );
        }
        const du = (...e) => gc({ Codec: fr, Boolean: mi, String: ci }, ...e);
        function ku(e) {
          const r = ps(() => ls([ar(e), Yc(), Ro(), rs(), cn(r), fs(ar(), r)]));
          return r;
        }
        function wu(e, r) {
          return new Zn({ type: "pipe", in: Z(e), out: r });
        }
        var fu = V(84847);
        function pu(e) {
          return Ua(ci, e);
        }
        function mu(e) {
          return Hi(To, e);
        }
        function gu(e) {
          return Bs(mi, e);
        }
        function vu(e) {
          return qi(Zo, e);
        }
        function hu(e) {
          return Sn(Mo, e);
        }
        (0, j.$W)((0, fu.A)());
        const zu = null;
      },
      62617: (Bt, Ze, V) => {
        V.d(Ze, {
          $W: () => te,
          GT: () => je,
          cV: () => Ee,
          cr: () => ke,
          xI: () => j,
        });
        var h;
        const Pe = Object.freeze({ status: "aborted" });
        function j(ne, ue, De) {
          function Le(le, M) {
            if (
              (le._zod ||
                Object.defineProperty(le, "_zod", {
                  value: { def: M, constr: Je, traits: new Set() },
                  enumerable: !1,
                }),
              le._zod.traits.has(ne))
            )
              return;
            le._zod.traits.add(ne), ue(le, M);
            const ye = Je.prototype,
              pt = Object.keys(ye);
            for (let Ft = 0; Ft < pt.length; Ft++) {
              const Gt = pt[Ft];
              Gt in le || (le[Gt] = ye[Gt].bind(le));
            }
          }
          const Ue = De?.Parent ?? Object;
          class at extends Ue {}
          Object.defineProperty(at, "name", { value: ne });
          function Je(le) {
            var M;
            const ye = De?.Parent ? new at() : this;
            Le(ye, le), (M = ye._zod).deferred ?? (M.deferred = []);
            for (const pt of ye._zod.deferred) pt();
            return ye;
          }
          return (
            Object.defineProperty(Je, "init", { value: Le }),
            Object.defineProperty(Je, Symbol.hasInstance, {
              value: (le) =>
                De?.Parent && le instanceof De.Parent
                  ? !0
                  : le?._zod?.traits?.has(ne),
            }),
            Object.defineProperty(Je, "name", { value: ne }),
            Je
          );
        }
        const We = Symbol("zod_brand");
        class je extends Error {
          constructor() {
            super(
              "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
            );
          }
        }
        class Ee extends Error {
          constructor(ue) {
            super(`Encountered unidirectional transform during encode: ${ue}`),
              (this.name = "ZodEncodeError");
          }
        }
        (h = globalThis).__zod_globalConfig ?? (h.__zod_globalConfig = {});
        const ke = globalThis.__zod_globalConfig;
        function te(ne) {
          return ne && Object.assign(ke, ne), ke;
        }
      },
      99482: (Bt, Ze, V) => {
        V.d(Ze, {
          $f: () => ht,
          A2: () => Vt,
          B7: () => zt,
          GW: () => Wn,
          Gv: () => gt,
          LG: () => Ue,
          NM: () => Kt,
          OH: () => Fn,
          PO: () => ue,
          QH: () => Nt,
          Qd: () => ct,
          Rc: () => pn,
          UQ: () => Mt,
          Up: () => Pt,
          W0: () => Ot,
          X$: () => st,
          Yv: () => Wt,
          cJ: () => fn,
          cl: () => De,
          gJ: () => Je,
          gx: () => wt,
          h1: () => Ht,
          hI: () => Ln,
          iR: () => mr,
          jw: () => te,
          k8: () => ne,
          lQ: () => Mn,
          mw: () => qt,
          o8: () => Ve,
          p6: () => Le,
          qQ: () => un,
          rL: () => Gn,
          sn: () => vr,
          w5: () => ke,
          yG: () => Jt,
          zH: () => Dt,
          zM: () => ye,
        });
        var h = V(62617);
        function Pe(k) {
          return k;
        }
        function j(k) {
          return k;
        }
        function We(k) {}
        function je(k) {
          throw new Error("Unexpected value in exhaustive check");
        }
        function Ee(k) {}
        function ke(k) {
          const E = Object.values(k).filter((T) => typeof T == "number");
          return Object.entries(k)
            .filter(([T, ce]) => E.indexOf(+T) === -1)
            .map(([T, ce]) => ce);
        }
        function te(k, E = "|") {
          return k.map((g) => zt(g)).join(E);
        }
        function ne(k, E) {
          return typeof E == "bigint" ? E.toString() : E;
        }
        function ue(k) {
          return {
            get value() {
              {
                const g = k();
                return Object.defineProperty(this, "value", { value: g }), g;
              }
              throw new Error("cached value already set");
            },
          };
        }
        function De(k) {
          return k == null;
        }
        function Le(k) {
          const E = k.startsWith("^") ? 1 : 0,
            g = k.endsWith("$") ? k.length - 1 : k.length;
          return k.slice(E, g);
        }
        function Ue(k, E) {
          const g = k / E,
            T = Math.round(g),
            ce = Number.EPSILON * Math.max(Math.abs(g), 1);
          return Math.abs(g - T) < ce ? 0 : g - T;
        }
        const at = Symbol("evaluating");
        function Je(k, E, g) {
          let T;
          Object.defineProperty(k, E, {
            get() {
              if (T !== at) return T === void 0 && ((T = at), (T = g())), T;
            },
            set(ce) {
              Object.defineProperty(k, E, { value: ce });
            },
            configurable: !0,
          });
        }
        function le(k) {
          return Object.create(
            Object.getPrototypeOf(k),
            Object.getOwnPropertyDescriptors(k),
          );
        }
        function M(k, E, g) {
          Object.defineProperty(k, E, {
            value: g,
            writable: !0,
            enumerable: !0,
            configurable: !0,
          });
        }
        function ye(...k) {
          const E = {};
          for (const g of k) {
            const T = Object.getOwnPropertyDescriptors(g);
            Object.assign(E, T);
          }
          return Object.defineProperties({}, E);
        }
        function pt(k) {
          return ye(k._zod.def);
        }
        function Ft(k, E) {
          return E ? E.reduce((g, T) => g?.[T], k) : k;
        }
        function Gt(k) {
          const E = Object.keys(k),
            g = E.map((T) => k[T]);
          return Promise.all(g).then((T) => {
            const ce = {};
            for (let de = 0; de < E.length; de++) ce[E[de]] = T[de];
            return ce;
          });
        }
        function mt(k = 10) {
          const E = "abcdefghijklmnopqrstuvwxyz";
          let g = "";
          for (let T = 0; T < k; T++)
            g += E[Math.floor(Math.random() * E.length)];
          return g;
        }
        function Mt(k) {
          return JSON.stringify(k);
        }
        function Wt(k) {
          return k
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
        }
        const wt =
          "captureStackTrace" in Error ? Error.captureStackTrace : (...k) => {};
        function gt(k) {
          return typeof k == "object" && k !== null && !Array.isArray(k);
        }
        const Ln = ue(() => {
          if (
            h.cr.jitless ||
            (typeof navigator < "u" &&
              navigator?.userAgent?.includes("Cloudflare"))
          )
            return !1;
          try {
            const k = Function;
            return new k(""), !0;
          } catch {
            return !1;
          }
        });
        function ct(k) {
          if (gt(k) === !1) return !1;
          const E = k.constructor;
          if (E === void 0 || typeof E != "function") return !0;
          const g = E.prototype;
          return !(
            gt(g) === !1 ||
            Object.prototype.hasOwnProperty.call(g, "isPrototypeOf") === !1
          );
        }
        function Jt(k) {
          return ct(k)
            ? { ...k }
            : Array.isArray(k)
              ? [...k]
              : k instanceof Map
                ? new Map(k)
                : k instanceof Set
                  ? new Set(k)
                  : k;
        }
        function ln(k) {
          let E = 0;
          for (const g in k) Object.prototype.hasOwnProperty.call(k, g) && E++;
          return E;
        }
        const vt = (k) => {
            const E = typeof k;
            switch (E) {
              case "undefined":
                return "undefined";
              case "string":
                return "string";
              case "number":
                return Number.isNaN(k) ? "nan" : "number";
              case "boolean":
                return "boolean";
              case "function":
                return "function";
              case "bigint":
                return "bigint";
              case "symbol":
                return "symbol";
              case "object":
                return Array.isArray(k)
                  ? "array"
                  : k === null
                    ? "null"
                    : k.then &&
                        typeof k.then == "function" &&
                        k.catch &&
                        typeof k.catch == "function"
                      ? "promise"
                      : typeof Map < "u" && k instanceof Map
                        ? "map"
                        : typeof Set < "u" && k instanceof Set
                          ? "set"
                          : typeof Date < "u" && k instanceof Date
                            ? "date"
                            : typeof File < "u" && k instanceof File
                              ? "file"
                              : "object";
              default:
                throw new Error(`Unknown data type: ${E}`);
            }
          },
          un = new Set(["string", "number", "symbol"]),
          Bn = new Set([
            "string",
            "number",
            "bigint",
            "boolean",
            "symbol",
            "undefined",
          ]);
        function ht(k) {
          return k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function Ve(k, E, g) {
          const T = new k._zod.constr(E ?? k._zod.def);
          return (!E || g?.parent) && (T._zod.parent = k), T;
        }
        function Vt(k) {
          const E = k;
          if (!E) return {};
          if (typeof E == "string") return { error: () => E };
          if (E?.message !== void 0) {
            if (E?.error !== void 0)
              throw new Error(
                "Cannot specify both `message` and `error` params",
              );
            E.error = E.message;
          }
          return (
            delete E.message,
            typeof E.error == "string" ? { ...E, error: () => E.error } : E
          );
        }
        function dn(k) {
          let E;
          return new Proxy(
            {},
            {
              get(g, T, ce) {
                return E ?? (E = k()), Reflect.get(E, T, ce);
              },
              set(g, T, ce, de) {
                return E ?? (E = k()), Reflect.set(E, T, ce, de);
              },
              has(g, T) {
                return E ?? (E = k()), Reflect.has(E, T);
              },
              deleteProperty(g, T) {
                return E ?? (E = k()), Reflect.deleteProperty(E, T);
              },
              ownKeys(g) {
                return E ?? (E = k()), Reflect.ownKeys(E);
              },
              getOwnPropertyDescriptor(g, T) {
                return E ?? (E = k()), Reflect.getOwnPropertyDescriptor(E, T);
              },
              defineProperty(g, T, ce) {
                return E ?? (E = k()), Reflect.defineProperty(E, T, ce);
              },
            },
          );
        }
        function zt(k) {
          return typeof k == "bigint"
            ? k.toString() + "n"
            : typeof k == "string"
              ? `"${k}"`
              : `${k}`;
        }
        function Kt(k) {
          return Object.keys(k).filter(
            (E) =>
              k[E]._zod.optin === "optional" && k[E]._zod.optout === "optional",
          );
        }
        const Dt = {
            safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
            int32: [-2147483648, 2147483647],
            uint32: [0, 4294967295],
            float32: [-34028234663852886e22, 34028234663852886e22],
            float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
          },
          rt = {
            int64: [
              BigInt("-9223372036854775808"),
              BigInt("9223372036854775807"),
            ],
            uint64: [BigInt(0), BigInt("18446744073709551615")],
          };
        function Pt(k, E) {
          const g = k._zod.def,
            T = g.checks;
          if (T && T.length > 0)
            throw new Error(
              ".pick() cannot be used on object schemas containing refinements",
            );
          const de = ye(k._zod.def, {
            get shape() {
              const pe = {};
              for (const ee in E) {
                if (!(ee in g.shape))
                  throw new Error(`Unrecognized key: "${ee}"`);
                E[ee] && (pe[ee] = g.shape[ee]);
              }
              return M(this, "shape", pe), pe;
            },
            checks: [],
          });
          return Ve(k, de);
        }
        function fn(k, E) {
          const g = k._zod.def,
            T = g.checks;
          if (T && T.length > 0)
            throw new Error(
              ".omit() cannot be used on object schemas containing refinements",
            );
          const de = ye(k._zod.def, {
            get shape() {
              const pe = { ...k._zod.def.shape };
              for (const ee in E) {
                if (!(ee in g.shape))
                  throw new Error(`Unrecognized key: "${ee}"`);
                E[ee] && delete pe[ee];
              }
              return M(this, "shape", pe), pe;
            },
            checks: [],
          });
          return Ve(k, de);
        }
        function st(k, E) {
          if (!ct(E))
            throw new Error("Invalid input to extend: expected a plain object");
          const g = k._zod.def.checks;
          if (g && g.length > 0) {
            const de = k._zod.def.shape;
            for (const pe in E)
              if (Object.getOwnPropertyDescriptor(de, pe) !== void 0)
                throw new Error(
                  "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                );
          }
          const ce = ye(k._zod.def, {
            get shape() {
              const de = { ...k._zod.def.shape, ...E };
              return M(this, "shape", de), de;
            },
          });
          return Ve(k, ce);
        }
        function Ot(k, E) {
          if (!ct(E))
            throw new Error(
              "Invalid input to safeExtend: expected a plain object",
            );
          const g = ye(k._zod.def, {
            get shape() {
              const T = { ...k._zod.def.shape, ...E };
              return M(this, "shape", T), T;
            },
          });
          return Ve(k, g);
        }
        function Ht(k, E) {
          if (k._zod.def.checks?.length)
            throw new Error(
              ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
            );
          const g = ye(k._zod.def, {
            get shape() {
              const T = { ...k._zod.def.shape, ...E._zod.def.shape };
              return M(this, "shape", T), T;
            },
            get catchall() {
              return E._zod.def.catchall;
            },
            checks: E._zod.def.checks ?? [],
          });
          return Ve(k, g);
        }
        function Fn(k, E, g) {
          const ce = E._zod.def.checks;
          if (ce && ce.length > 0)
            throw new Error(
              ".partial() cannot be used on object schemas containing refinements",
            );
          const pe = ye(E._zod.def, {
            get shape() {
              const ee = E._zod.def.shape,
                Ye = { ...ee };
              if (g)
                for (const Ke in g) {
                  if (!(Ke in ee)) throw new Error(`Unrecognized key: "${Ke}"`);
                  g[Ke] &&
                    (Ye[Ke] = k
                      ? new k({ type: "optional", innerType: ee[Ke] })
                      : ee[Ke]);
                }
              else
                for (const Ke in ee)
                  Ye[Ke] = k
                    ? new k({ type: "optional", innerType: ee[Ke] })
                    : ee[Ke];
              return M(this, "shape", Ye), Ye;
            },
            checks: [],
          });
          return Ve(E, pe);
        }
        function qt(k, E, g) {
          const T = ye(E._zod.def, {
            get shape() {
              const ce = E._zod.def.shape,
                de = { ...ce };
              if (g)
                for (const pe in g) {
                  if (!(pe in de)) throw new Error(`Unrecognized key: "${pe}"`);
                  g[pe] &&
                    (de[pe] = new k({
                      type: "nonoptional",
                      innerType: ce[pe],
                    }));
                }
              else
                for (const pe in ce)
                  de[pe] = new k({ type: "nonoptional", innerType: ce[pe] });
              return M(this, "shape", de), de;
            },
          });
          return Ve(E, T);
        }
        function Nt(k, E = 0) {
          if (k.aborted === !0) return !0;
          for (let g = E; g < k.issues.length; g++)
            if (k.issues[g]?.continue !== !0) return !0;
          return !1;
        }
        function Gn(k, E = 0) {
          if (k.aborted === !0) return !0;
          for (let g = E; g < k.issues.length; g++)
            if (k.issues[g]?.continue === !1) return !0;
          return !1;
        }
        function Mn(k, E) {
          return E.map((g) => {
            var T;
            return (T = g).path ?? (T.path = []), g.path.unshift(k), g;
          });
        }
        function jt(k) {
          return typeof k == "string" ? k : k?.message;
        }
        function mr(k, E, g) {
          const T = k.message
              ? k.message
              : (jt(k.inst?._zod.def?.error?.(k)) ??
                jt(E?.error?.(k)) ??
                jt(g.customError?.(k)) ??
                jt(g.localeError?.(k)) ??
                "Invalid input"),
            { inst: ce, continue: de, input: pe, ...ee } = k;
          return (
            ee.path ?? (ee.path = []),
            (ee.message = T),
            E?.reportInput && (ee.input = pe),
            ee
          );
        }
        function gr(k) {
          return k instanceof Set
            ? "set"
            : k instanceof Map
              ? "map"
              : k instanceof File
                ? "file"
                : "unknown";
        }
        function pn(k) {
          return Array.isArray(k)
            ? "array"
            : typeof k == "string"
              ? "string"
              : "unknown";
        }
        function Wn(k) {
          const E = typeof k;
          switch (E) {
            case "number":
              return Number.isNaN(k) ? "nan" : "number";
            case "object": {
              if (k === null) return "null";
              if (Array.isArray(k)) return "array";
              const g = k;
              if (
                g &&
                Object.getPrototypeOf(g) !== Object.prototype &&
                "constructor" in g &&
                g.constructor
              )
                return g.constructor.name;
            }
          }
          return E;
        }
        function vr(...k) {
          const [E, g, T] = k;
          return typeof E == "string"
            ? { message: E, code: "custom", input: g, inst: T }
            : { ...E };
        }
        function hr(k) {
          return Object.entries(k)
            .filter(([E, g]) => Number.isNaN(Number.parseInt(E, 10)))
            .map((E) => E[1]);
        }
        function Et(k) {
          const E = atob(k),
            g = new Uint8Array(E.length);
          for (let T = 0; T < E.length; T++) g[T] = E.charCodeAt(T);
          return g;
        }
        function mn(k) {
          let E = "";
          for (let g = 0; g < k.length; g++) E += String.fromCharCode(k[g]);
          return btoa(E);
        }
        function Jn(k) {
          const E = k.replace(/-/g, "+").replace(/_/g, "/"),
            g = "=".repeat((4 - (E.length % 4)) % 4);
          return Et(E + g);
        }
        function br(k) {
          return mn(k)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
        }
        function yr(k) {
          const E = k.replace(/^0x/, "");
          if (E.length % 2 !== 0) throw new Error("Invalid hex string length");
          const g = new Uint8Array(E.length / 2);
          for (let T = 0; T < E.length; T += 2)
            g[T / 2] = Number.parseInt(E.slice(T, T + 2), 16);
          return g;
        }
        function Ii(k) {
          return Array.from(k)
            .map((E) => E.toString(16).padStart(2, "0"))
            .join("");
        }
        class xi {
          constructor(...E) {}
        }
      },
      84847: (Bt, Ze, V) => {
        V.d(Ze, { A: () => j });
        var h = V(99482);
        const Pe = () => {
          const We = {
            string: { unit: "characters", verb: "to have" },
            file: { unit: "bytes", verb: "to have" },
            array: { unit: "items", verb: "to have" },
            set: { unit: "items", verb: "to have" },
            map: { unit: "entries", verb: "to have" },
          };
          function je(te) {
            return We[te] ?? null;
          }
          const Ee = {
              regex: "input",
              email: "email address",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datetime",
              date: "ISO date",
              time: "ISO time",
              duration: "ISO duration",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              mac: "MAC address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded string",
              base64url: "base64url-encoded string",
              json_string: "JSON string",
              e164: "E.164 number",
              jwt: "JWT",
              template_literal: "input",
            },
            ke = { nan: "NaN" };
          return (te) => {
            switch (te.code) {
              case "invalid_type": {
                const ne = ke[te.expected] ?? te.expected,
                  ue = h.GW(te.input),
                  De = ke[ue] ?? ue;
                return `Invalid input: expected ${ne}, received ${De}`;
              }
              case "invalid_value":
                return te.values.length === 1
                  ? `Invalid input: expected ${h.B7(te.values[0])}`
                  : `Invalid option: expected one of ${h.jw(te.values, "|")}`;
              case "too_big": {
                const ne = te.inclusive ? "<=" : "<",
                  ue = je(te.origin);
                return ue
                  ? `Too big: expected ${te.origin ?? "value"} to have ${ne}${te.maximum.toString()} ${ue.unit ?? "elements"}`
                  : `Too big: expected ${te.origin ?? "value"} to be ${ne}${te.maximum.toString()}`;
              }
              case "too_small": {
                const ne = te.inclusive ? ">=" : ">",
                  ue = je(te.origin);
                return ue
                  ? `Too small: expected ${te.origin} to have ${ne}${te.minimum.toString()} ${ue.unit}`
                  : `Too small: expected ${te.origin} to be ${ne}${te.minimum.toString()}`;
              }
              case "invalid_format": {
                const ne = te;
                return ne.format === "starts_with"
                  ? `Invalid string: must start with "${ne.prefix}"`
                  : ne.format === "ends_with"
                    ? `Invalid string: must end with "${ne.suffix}"`
                    : ne.format === "includes"
                      ? `Invalid string: must include "${ne.includes}"`
                      : ne.format === "regex"
                        ? `Invalid string: must match pattern ${ne.pattern}`
                        : `Invalid ${Ee[ne.format] ?? te.format}`;
              }
              case "not_multiple_of":
                return `Invalid number: must be a multiple of ${te.divisor}`;
              case "unrecognized_keys":
                return `Unrecognized key${te.keys.length > 1 ? "s" : ""}: ${h.jw(te.keys, ", ")}`;
              case "invalid_key":
                return `Invalid key in ${te.origin}`;
              case "invalid_union":
                return te.options &&
                  Array.isArray(te.options) &&
                  te.options.length > 0
                  ? `Invalid discriminator value. Expected ${te.options.map((ue) => `'${ue}'`).join(" | ")}`
                  : "Invalid input";
              case "invalid_element":
                return `Invalid value in ${te.origin}`;
              default:
                return "Invalid input";
            }
          };
        };
        function j() {
          return { localeError: Pe() };
        }
      },
      10410: (Bt, Ze, V) => {
        V.r(Ze),
          V.d(Ze, {
            ar: () => j,
            az: () => je,
            be: () => te,
            bg: () => ue,
            ca: () => Le,
            cs: () => at,
            da: () => le,
            de: () => ye,
            el: () => Ft,
            en: () => Gt.A,
            eo: () => Mt,
            es: () => wt,
            fa: () => Ln,
            fi: () => Jt,
            fr: () => vt,
            frCA: () => Bn,
            he: () => Ve,
            hr: () => dn,
            hu: () => Kt,
            hy: () => fn,
            id: () => Ot,
            is: () => Fn,
            it: () => Nt,
            ja: () => Mn,
            ka: () => mr,
            kh: () => Wn,
            km: () => pn,
            ko: () => hr,
            lt: () => br,
            mk: () => Ii,
            ms: () => k,
            nl: () => g,
            no: () => ce,
            ota: () => pe,
            pl: () => Si,
            ps: () => Ye,
            pt: () => $r,
            ro: () => Ir,
            ru: () => wi,
            sl: () => it,
            sv: () => Be,
            ta: () => wr,
            th: () => L,
            tr: () => Dr,
            ua: () => Ae,
            uk: () => gn,
            ur: () => Pr,
            uz: () => zi,
            vi: () => lt,
            yo: () => Qe,
            zhCN: () => xe,
            zhTW: () => He,
          });
        var h = V(99482);
        const Pe = () => {
          const A = {
            string: {
              unit: "\u062D\u0631\u0641",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            file: {
              unit: "\u0628\u0627\u064A\u062A",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            array: {
              unit: "\u0639\u0646\u0635\u0631",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            set: {
              unit: "\u0639\u0646\u0635\u0631",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0645\u062F\u062E\u0644",
              email:
                "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
              url: "\u0631\u0627\u0628\u0637",
              emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              duration:
                "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
              ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
              cidrv4:
                "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
              cidrv6:
                "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
              base64:
                "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
              base64url:
                "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
              json_string:
                "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
              e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
              jwt: "JWT",
              template_literal: "\u0645\u062F\u062E\u0644",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${t.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${w}`
                  : `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${o}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${h.B7(t.values[0])}`
                  : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${t.maximum.toString()} ${f.unit ?? "\u0639\u0646\u0635\u0631"}`
                  : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${t.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${t.minimum.toString()} ${f.unit}`
                  : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${t.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${t.prefix}"`
                  : o.format === "ends_with"
                    ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${o.pattern}`
                        : `${C[o.format] ?? t.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
              }
              case "not_multiple_of":
                return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${t.divisor}`;
              case "unrecognized_keys":
                return `\u0645\u0639\u0631\u0641${t.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${t.keys.length > 1 ? "\u0629" : ""}: ${h.jw(t.keys, "\u060C ")}`;
              case "invalid_key":
                return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
              case "invalid_union":
                return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
              case "invalid_element":
                return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${t.origin}`;
              default:
                return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
            }
          };
        };
        function j() {
          return { localeError: Pe() };
        }
        const We = () => {
          const A = {
            string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
            file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
            array: { unit: "element", verb: "olmal\u0131d\u0131r" },
            set: { unit: "element", verb: "olmal\u0131d\u0131r" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "input",
              email: "email address",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datetime",
              date: "ISO date",
              time: "ISO time",
              duration: "ISO duration",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded string",
              base64url: "base64url-encoded string",
              json_string: "JSON string",
              e164: "E.164 number",
              jwt: "JWT",
              template_literal: "input",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${t.expected}, daxil olan ${w}`
                  : `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${o}, daxil olan ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${h.B7(t.values[0])}`
                  : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${o}${t.maximum.toString()} ${f.unit ?? "element"}`
                  : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${t.origin ?? "d\u0259y\u0259r"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${o}${t.minimum.toString()} ${f.unit}`
                  : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Yanl\u0131\u015F m\u0259tn: "${o.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
                  : o.format === "ends_with"
                    ? `Yanl\u0131\u015F m\u0259tn: "${o.suffix}" il\u0259 bitm\u0259lidir`
                    : o.format === "includes"
                      ? `Yanl\u0131\u015F m\u0259tn: "${o.includes}" daxil olmal\u0131d\u0131r`
                      : o.format === "regex"
                        ? `Yanl\u0131\u015F m\u0259tn: ${o.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                        : `Yanl\u0131\u015F ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Yanl\u0131\u015F \u0259d\u0259d: ${t.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan a\xE7ar${t.keys.length > 1 ? "lar" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
              case "invalid_union":
                return "Yanl\u0131\u015F d\u0259y\u0259r";
              case "invalid_element":
                return `${t.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
              default:
                return "Yanl\u0131\u015F d\u0259y\u0259r";
            }
          };
        };
        function je() {
          return { localeError: We() };
        }
        function Ee(A, N, C, P) {
          const t = Math.abs(A),
            o = t % 10,
            f = t % 100;
          return f >= 11 && f <= 19
            ? P
            : o === 1
              ? N
              : o >= 2 && o <= 4
                ? C
                : P;
        }
        const ke = () => {
          const A = {
            string: {
              unit: {
                one: "\u0441\u0456\u043C\u0432\u0430\u043B",
                few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
                many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            array: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            set: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            file: {
              unit: {
                one: "\u0431\u0430\u0439\u0442",
                few: "\u0431\u0430\u0439\u0442\u044B",
                many: "\u0431\u0430\u0439\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0443\u0432\u043E\u0434",
              email: "email \u0430\u0434\u0440\u0430\u0441",
              url: "URL",
              emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0447\u0430\u0441",
              duration:
                "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
              ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
              cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
              base64:
                "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
              base64url:
                "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
              json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
              e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
              jwt: "JWT",
              template_literal: "\u0443\u0432\u043E\u0434",
            },
            P = {
              nan: "NaN",
              number: "\u043B\u0456\u043A",
              array: "\u043C\u0430\u0441\u0456\u045E",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${t.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${w}`
                  : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${o}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${h.B7(t.values[0])}`
                  : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                if (f) {
                  const w = Number(t.maximum),
                    $e = Ee(w, f.unit.one, f.unit.few, f.unit.many);
                  return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${f.verb} ${o}${t.maximum.toString()} ${$e}`;
                }
                return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                if (f) {
                  const w = Number(t.minimum),
                    $e = Ee(w, f.unit.one, f.unit.few, f.unit.many);
                  return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${f.verb} ${o}${t.minimum.toString()} ${$e}`;
                }
                return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${t.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${o.includes}"`
                      : o.format === "regex"
                        ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                        : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${t.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
              case "invalid_union":
                return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
              case "invalid_element":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${t.origin}`;
              default:
                return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
            }
          };
        };
        function te() {
          return { localeError: ke() };
        }
        const ne = () => {
          const A = {
            string: {
              unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            file: {
              unit: "\u0431\u0430\u0439\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            array: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            set: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0432\u0445\u043E\u0434",
              email:
                "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0432\u0440\u0435\u043C\u0435",
              duration:
                "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
              cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              base64:
                "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
              base64url:
                "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
              json_string: "JSON \u043D\u0438\u0437",
              e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
              jwt: "JWT",
              template_literal: "\u0432\u0445\u043E\u0434",
            },
            P = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0438\u0432",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${t.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${w}`
                  : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${o}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${h.B7(t.values[0])}`
                  : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${t.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${o}${t.maximum.toString()} ${f.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`
                  : `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${t.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${t.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${o}${t.minimum.toString()} ${f.unit}`
                  : `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${t.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                if (o.format === "starts_with")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${o.prefix}"`;
                if (o.format === "ends_with")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${o.suffix}"`;
                if (o.format === "includes")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${o.includes}"`;
                if (o.format === "regex")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${o.pattern}`;
                let f =
                  "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
                return (
                  o.format === "emoji" &&
                    (f =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  o.format === "datetime" &&
                    (f =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  o.format === "date" &&
                    (f =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
                  o.format === "time" &&
                    (f =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  o.format === "duration" &&
                    (f =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
                  `${f} ${C[o.format] ?? t.format}`
                );
              }
              case "not_multiple_of":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${t.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${t.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${t.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
              case "invalid_element":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${t.origin}`;
              default:
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
            }
          };
        };
        function ue() {
          return { localeError: ne() };
        }
        const De = () => {
          const A = {
            string: { unit: "car\xE0cters", verb: "contenir" },
            file: { unit: "bytes", verb: "contenir" },
            array: { unit: "elements", verb: "contenir" },
            set: { unit: "elements", verb: "contenir" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "entrada",
              email: "adre\xE7a electr\xF2nica",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "data i hora ISO",
              date: "data ISO",
              time: "hora ISO",
              duration: "durada ISO",
              ipv4: "adre\xE7a IPv4",
              ipv6: "adre\xE7a IPv6",
              cidrv4: "rang IPv4",
              cidrv6: "rang IPv6",
              base64: "cadena codificada en base64",
              base64url: "cadena codificada en base64url",
              json_string: "cadena JSON",
              e164: "n\xFAmero E.164",
              jwt: "JWT",
              template_literal: "entrada",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Tipus inv\xE0lid: s'esperava instanceof ${t.expected}, s'ha rebut ${w}`
                  : `Tipus inv\xE0lid: s'esperava ${o}, s'ha rebut ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Valor inv\xE0lid: s'esperava ${h.B7(t.values[0])}`
                  : `Opci\xF3 inv\xE0lida: s'esperava una de ${h.jw(t.values, " o ")}`;
              case "too_big": {
                const o = t.inclusive ? "com a m\xE0xim" : "menys de",
                  f = N(t.origin);
                return f
                  ? `Massa gran: s'esperava que ${t.origin ?? "el valor"} contingu\xE9s ${o} ${t.maximum.toString()} ${f.unit ?? "elements"}`
                  : `Massa gran: s'esperava que ${t.origin ?? "el valor"} fos ${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? "com a m\xEDnim" : "m\xE9s de",
                  f = N(t.origin);
                return f
                  ? `Massa petit: s'esperava que ${t.origin} contingu\xE9s ${o} ${t.minimum.toString()} ${f.unit}`
                  : `Massa petit: s'esperava que ${t.origin} fos ${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Format inv\xE0lid: ha de comen\xE7ar amb "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Format inv\xE0lid: ha d'acabar amb "${o.suffix}"`
                    : o.format === "includes"
                      ? `Format inv\xE0lid: ha d'incloure "${o.includes}"`
                      : o.format === "regex"
                        ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${o.pattern}`
                        : `Format inv\xE0lid per a ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${t.divisor}`;
              case "unrecognized_keys":
                return `Clau${t.keys.length > 1 ? "s" : ""} no reconeguda${t.keys.length > 1 ? "s" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Clau inv\xE0lida a ${t.origin}`;
              case "invalid_union":
                return "Entrada inv\xE0lida";
              case "invalid_element":
                return `Element inv\xE0lid a ${t.origin}`;
              default:
                return "Entrada inv\xE0lida";
            }
          };
        };
        function Le() {
          return { localeError: De() };
        }
        const Ue = () => {
          const A = {
            string: { unit: "znak\u016F", verb: "m\xEDt" },
            file: { unit: "bajt\u016F", verb: "m\xEDt" },
            array: { unit: "prvk\u016F", verb: "m\xEDt" },
            set: { unit: "prvk\u016F", verb: "m\xEDt" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "regul\xE1rn\xED v\xFDraz",
              email: "e-mailov\xE1 adresa",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "datum a \u010Das ve form\xE1tu ISO",
              date: "datum ve form\xE1tu ISO",
              time: "\u010Das ve form\xE1tu ISO",
              duration: "doba trv\xE1n\xED ISO",
              ipv4: "IPv4 adresa",
              ipv6: "IPv6 adresa",
              cidrv4: "rozsah IPv4",
              cidrv6: "rozsah IPv6",
              base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
              base64url:
                "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
              json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
              e164: "\u010D\xEDslo E.164",
              jwt: "JWT",
              template_literal: "vstup",
            },
            P = {
              nan: "NaN",
              number: "\u010D\xEDslo",
              string: "\u0159et\u011Bzec",
              function: "funkce",
              array: "pole",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${t.expected}, obdr\u017Eeno ${w}`
                  : `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${o}, obdr\u017Eeno ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${h.B7(t.values[0])}`
                  : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${o}${t.maximum.toString()} ${f.unit ?? "prvk\u016F"}`
                  : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED m\xEDt ${o}${t.minimum.toString()} ${f.unit ?? "prvk\u016F"}`
                  : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${t.origin ?? "hodnota"} mus\xED b\xFDt ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${o.suffix}"`
                    : o.format === "includes"
                      ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${o.includes}"`
                      : o.format === "regex"
                        ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${o.pattern}`
                        : `Neplatn\xFD form\xE1t ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${t.divisor}`;
              case "unrecognized_keys":
                return `Nezn\xE1m\xE9 kl\xED\u010De: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Neplatn\xFD kl\xED\u010D v ${t.origin}`;
              case "invalid_union":
                return "Neplatn\xFD vstup";
              case "invalid_element":
                return `Neplatn\xE1 hodnota v ${t.origin}`;
              default:
                return "Neplatn\xFD vstup";
            }
          };
        };
        function at() {
          return { localeError: Ue() };
        }
        const Je = () => {
          const A = {
            string: { unit: "tegn", verb: "havde" },
            file: { unit: "bytes", verb: "havde" },
            array: { unit: "elementer", verb: "indeholdt" },
            set: { unit: "elementer", verb: "indeholdt" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "input",
              email: "e-mailadresse",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO dato- og klokkesl\xE6t",
              date: "ISO-dato",
              time: "ISO-klokkesl\xE6t",
              duration: "ISO-varighed",
              ipv4: "IPv4-omr\xE5de",
              ipv6: "IPv6-omr\xE5de",
              cidrv4: "IPv4-spektrum",
              cidrv6: "IPv6-spektrum",
              base64: "base64-kodet streng",
              base64url: "base64url-kodet streng",
              json_string: "JSON-streng",
              e164: "E.164-nummer",
              jwt: "JWT",
              template_literal: "input",
            },
            P = {
              nan: "NaN",
              string: "streng",
              number: "tal",
              boolean: "boolean",
              array: "liste",
              object: "objekt",
              set: "s\xE6t",
              file: "fil",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Ugyldigt input: forventede instanceof ${t.expected}, fik ${w}`
                  : `Ugyldigt input: forventede ${o}, fik ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ugyldig v\xE6rdi: forventede ${h.B7(t.values[0])}`
                  : `Ugyldigt valg: forventede en af f\xF8lgende ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin),
                  w = P[t.origin] ?? t.origin;
                return f
                  ? `For stor: forventede ${w ?? "value"} ${f.verb} ${o} ${t.maximum.toString()} ${f.unit ?? "elementer"}`
                  : `For stor: forventede ${w ?? "value"} havde ${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin),
                  w = P[t.origin] ?? t.origin;
                return f
                  ? `For lille: forventede ${w} ${f.verb} ${o} ${t.minimum.toString()} ${f.unit}`
                  : `For lille: forventede ${w} havde ${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ugyldig streng: skal starte med "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Ugyldig streng: skal ende med "${o.suffix}"`
                    : o.format === "includes"
                      ? `Ugyldig streng: skal indeholde "${o.includes}"`
                      : o.format === "regex"
                        ? `Ugyldig streng: skal matche m\xF8nsteret ${o.pattern}`
                        : `Ugyldig ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ugyldigt tal: skal v\xE6re deleligt med ${t.divisor}`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ugyldig n\xF8gle i ${t.origin}`;
              case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
              case "invalid_element":
                return `Ugyldig v\xE6rdi i ${t.origin}`;
              default:
                return "Ugyldigt input";
            }
          };
        };
        function le() {
          return { localeError: Je() };
        }
        const M = () => {
          const A = {
            string: { unit: "Zeichen", verb: "zu haben" },
            file: { unit: "Bytes", verb: "zu haben" },
            array: { unit: "Elemente", verb: "zu haben" },
            set: { unit: "Elemente", verb: "zu haben" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "Eingabe",
              email: "E-Mail-Adresse",
              url: "URL",
              emoji: "Emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO-Datum und -Uhrzeit",
              date: "ISO-Datum",
              time: "ISO-Uhrzeit",
              duration: "ISO-Dauer",
              ipv4: "IPv4-Adresse",
              ipv6: "IPv6-Adresse",
              cidrv4: "IPv4-Bereich",
              cidrv6: "IPv6-Bereich",
              base64: "Base64-codierter String",
              base64url: "Base64-URL-codierter String",
              json_string: "JSON-String",
              e164: "E.164-Nummer",
              jwt: "JWT",
              template_literal: "Eingabe",
            },
            P = { nan: "NaN", number: "Zahl", array: "Array" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Ung\xFCltige Eingabe: erwartet instanceof ${t.expected}, erhalten ${w}`
                  : `Ung\xFCltige Eingabe: erwartet ${o}, erhalten ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ung\xFCltige Eingabe: erwartet ${h.B7(t.values[0])}`
                  : `Ung\xFCltige Option: erwartet eine von ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${o}${t.maximum.toString()} ${f.unit ?? "Elemente"} hat`
                  : `Zu gro\xDF: erwartet, dass ${t.origin ?? "Wert"} ${o}${t.maximum.toString()} ist`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Zu klein: erwartet, dass ${t.origin} ${o}${t.minimum.toString()} ${f.unit} hat`
                  : `Zu klein: erwartet, dass ${t.origin} ${o}${t.minimum.toString()} ist`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ung\xFCltiger String: muss mit "${o.prefix}" beginnen`
                  : o.format === "ends_with"
                    ? `Ung\xFCltiger String: muss mit "${o.suffix}" enden`
                    : o.format === "includes"
                      ? `Ung\xFCltiger String: muss "${o.includes}" enthalten`
                      : o.format === "regex"
                        ? `Ung\xFCltiger String: muss dem Muster ${o.pattern} entsprechen`
                        : `Ung\xFCltig: ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ung\xFCltige Zahl: muss ein Vielfaches von ${t.divisor} sein`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ung\xFCltiger Schl\xFCssel in ${t.origin}`;
              case "invalid_union":
                return "Ung\xFCltige Eingabe";
              case "invalid_element":
                return `Ung\xFCltiger Wert in ${t.origin}`;
              default:
                return "Ung\xFCltige Eingabe";
            }
          };
        };
        function ye() {
          return { localeError: M() };
        }
        const pt = () => {
          const A = {
            string: {
              unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            file: {
              unit: "bytes",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            array: {
              unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            set: {
              unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            map: {
              unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
              email:
                "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1",
              date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
              time: "ISO \u03CE\u03C1\u03B1",
              duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1",
              ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4",
              ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6",
              mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC",
              cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4",
              cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6",
              base64:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64",
              base64url:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url",
              json_string:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON",
              e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164",
              jwt: "JWT",
              template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return typeof t.expected == "string" &&
                  /^[A-Z]/.test(t.expected)
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${t.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${w}`
                  : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${o}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${h.B7(t.values[0])}`
                  : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${t.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${o}${t.maximum.toString()} ${f.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}`
                  : `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${t.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${t.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${o}${t.minimum.toString()} ${f.unit}`
                  : `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${t.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${o.pattern}`
                        : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${t.divisor}`;
              case "unrecognized_keys":
                return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${t.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${t.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${t.origin}`;
              case "invalid_union":
                return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
              case "invalid_element":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${t.origin}`;
              default:
                return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
            }
          };
        };
        function Ft() {
          return { localeError: pt() };
        }
        var Gt = V(84847);
        const mt = () => {
          const A = {
            string: { unit: "karaktrojn", verb: "havi" },
            file: { unit: "bajtojn", verb: "havi" },
            array: { unit: "elementojn", verb: "havi" },
            set: { unit: "elementojn", verb: "havi" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "enigo",
              email: "retadreso",
              url: "URL",
              emoji: "emo\u011Dio",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO-datotempo",
              date: "ISO-dato",
              time: "ISO-tempo",
              duration: "ISO-da\u016Dro",
              ipv4: "IPv4-adreso",
              ipv6: "IPv6-adreso",
              cidrv4: "IPv4-rango",
              cidrv6: "IPv6-rango",
              base64: "64-ume kodita karaktraro",
              base64url: "URL-64-ume kodita karaktraro",
              json_string: "JSON-karaktraro",
              e164: "E.164-nombro",
              jwt: "JWT",
              template_literal: "enigo",
            },
            P = {
              nan: "NaN",
              number: "nombro",
              array: "tabelo",
              null: "senvalora",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Nevalida enigo: atendi\u011Dis instanceof ${t.expected}, ricevi\u011Dis ${w}`
                  : `Nevalida enigo: atendi\u011Dis ${o}, ricevi\u011Dis ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Nevalida enigo: atendi\u011Dis ${h.B7(t.values[0])}`
                  : `Nevalida opcio: atendi\u011Dis unu el ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Tro granda: atendi\u011Dis ke ${t.origin ?? "valoro"} havu ${o}${t.maximum.toString()} ${f.unit ?? "elementojn"}`
                  : `Tro granda: atendi\u011Dis ke ${t.origin ?? "valoro"} havu ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Tro malgranda: atendi\u011Dis ke ${t.origin} havu ${o}${t.minimum.toString()} ${f.unit}`
                  : `Tro malgranda: atendi\u011Dis ke ${t.origin} estu ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Nevalida karaktraro: devas komenci\u011Di per "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Nevalida karaktraro: devas fini\u011Di per "${o.suffix}"`
                    : o.format === "includes"
                      ? `Nevalida karaktraro: devas inkluzivi "${o.includes}"`
                      : o.format === "regex"
                        ? `Nevalida karaktraro: devas kongrui kun la modelo ${o.pattern}`
                        : `Nevalida ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Nevalida nombro: devas esti oblo de ${t.divisor}`;
              case "unrecognized_keys":
                return `Nekonata${t.keys.length > 1 ? "j" : ""} \u015Dlosilo${t.keys.length > 1 ? "j" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Nevalida \u015Dlosilo en ${t.origin}`;
              case "invalid_union":
                return "Nevalida enigo";
              case "invalid_element":
                return `Nevalida valoro en ${t.origin}`;
              default:
                return "Nevalida enigo";
            }
          };
        };
        function Mt() {
          return { localeError: mt() };
        }
        const Wt = () => {
          const A = {
            string: { unit: "caracteres", verb: "tener" },
            file: { unit: "bytes", verb: "tener" },
            array: { unit: "elementos", verb: "tener" },
            set: { unit: "elementos", verb: "tener" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "entrada",
              email: "direcci\xF3n de correo electr\xF3nico",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "fecha y hora ISO",
              date: "fecha ISO",
              time: "hora ISO",
              duration: "duraci\xF3n ISO",
              ipv4: "direcci\xF3n IPv4",
              ipv6: "direcci\xF3n IPv6",
              cidrv4: "rango IPv4",
              cidrv6: "rango IPv6",
              base64: "cadena codificada en base64",
              base64url: "URL codificada en base64",
              json_string: "cadena JSON",
              e164: "n\xFAmero E.164",
              jwt: "JWT",
              template_literal: "entrada",
            },
            P = {
              nan: "NaN",
              string: "texto",
              number: "n\xFAmero",
              boolean: "booleano",
              array: "arreglo",
              object: "objeto",
              set: "conjunto",
              file: "archivo",
              date: "fecha",
              bigint: "n\xFAmero grande",
              symbol: "s\xEDmbolo",
              undefined: "indefinido",
              null: "nulo",
              function: "funci\xF3n",
              map: "mapa",
              record: "registro",
              tuple: "tupla",
              enum: "enumeraci\xF3n",
              union: "uni\xF3n",
              literal: "literal",
              promise: "promesa",
              void: "vac\xEDo",
              never: "nunca",
              unknown: "desconocido",
              any: "cualquiera",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Entrada inv\xE1lida: se esperaba instanceof ${t.expected}, recibido ${w}`
                  : `Entrada inv\xE1lida: se esperaba ${o}, recibido ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Entrada inv\xE1lida: se esperaba ${h.B7(t.values[0])}`
                  : `Opci\xF3n inv\xE1lida: se esperaba una de ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin),
                  w = P[t.origin] ?? t.origin;
                return f
                  ? `Demasiado grande: se esperaba que ${w ?? "valor"} tuviera ${o}${t.maximum.toString()} ${f.unit ?? "elementos"}`
                  : `Demasiado grande: se esperaba que ${w ?? "valor"} fuera ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin),
                  w = P[t.origin] ?? t.origin;
                return f
                  ? `Demasiado peque\xF1o: se esperaba que ${w} tuviera ${o}${t.minimum.toString()} ${f.unit}`
                  : `Demasiado peque\xF1o: se esperaba que ${w} fuera ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Cadena inv\xE1lida: debe comenzar con "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Cadena inv\xE1lida: debe terminar en "${o.suffix}"`
                    : o.format === "includes"
                      ? `Cadena inv\xE1lida: debe incluir "${o.includes}"`
                      : o.format === "regex"
                        ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${o.pattern}`
                        : `Inv\xE1lido ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${t.divisor}`;
              case "unrecognized_keys":
                return `Llave${t.keys.length > 1 ? "s" : ""} desconocida${t.keys.length > 1 ? "s" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Llave inv\xE1lida en ${P[t.origin] ?? t.origin}`;
              case "invalid_union":
                return "Entrada inv\xE1lida";
              case "invalid_element":
                return `Valor inv\xE1lido en ${P[t.origin] ?? t.origin}`;
              default:
                return "Entrada inv\xE1lida";
            }
          };
        };
        function wt() {
          return { localeError: Wt() };
        }
        const gt = () => {
          const A = {
            string: {
              unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            file: {
              unit: "\u0628\u0627\u06CC\u062A",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            array: {
              unit: "\u0622\u06CC\u062A\u0645",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            set: {
              unit: "\u0622\u06CC\u062A\u0645",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0648\u0631\u0648\u062F\u06CC",
              email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
              url: "URL",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
              time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              duration:
                "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              ipv4: "IPv4 \u0622\u062F\u0631\u0633",
              ipv6: "IPv6 \u0622\u062F\u0631\u0633",
              cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
              cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
              base64: "base64-encoded \u0631\u0634\u062A\u0647",
              base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
              json_string: "JSON \u0631\u0634\u062A\u0647",
              e164: "E.164 \u0639\u062F\u062F",
              jwt: "JWT",
              template_literal: "\u0648\u0631\u0648\u062F\u06CC",
            },
            P = {
              nan: "NaN",
              number: "\u0639\u062F\u062F",
              array: "\u0622\u0631\u0627\u06CC\u0647",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${t.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${w} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`
                  : `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${o} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${w} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${h.B7(t.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
                  : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${h.jw(t.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} ${f.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
                  : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${t.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} \u0628\u0627\u0634\u062F`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} ${f.unit} \u0628\u0627\u0634\u062F`
                  : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} \u0628\u0627\u0634\u062F`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
                  : o.format === "ends_with"
                    ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${o.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
                    : o.format === "includes"
                      ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${o.includes}" \u0628\u0627\u0634\u062F`
                      : o.format === "regex"
                        ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${o.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                        : `${C[o.format] ?? t.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
              }
              case "not_multiple_of":
                return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${t.divisor} \u0628\u0627\u0634\u062F`;
              case "unrecognized_keys":
                return `\u06A9\u0644\u06CC\u062F${t.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${t.origin}`;
              case "invalid_union":
                return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
              case "invalid_element":
                return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${t.origin}`;
              default:
                return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
            }
          };
        };
        function Ln() {
          return { localeError: gt() };
        }
        const ct = () => {
          const A = {
            string: { unit: "merkki\xE4", subject: "merkkijonon" },
            file: { unit: "tavua", subject: "tiedoston" },
            array: { unit: "alkiota", subject: "listan" },
            set: { unit: "alkiota", subject: "joukon" },
            number: { unit: "", subject: "luvun" },
            bigint: { unit: "", subject: "suuren kokonaisluvun" },
            int: { unit: "", subject: "kokonaisluvun" },
            date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "s\xE4\xE4nn\xF6llinen lauseke",
              email: "s\xE4hk\xF6postiosoite",
              url: "URL-osoite",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO-aikaleima",
              date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
              time: "ISO-aika",
              duration: "ISO-kesto",
              ipv4: "IPv4-osoite",
              ipv6: "IPv6-osoite",
              cidrv4: "IPv4-alue",
              cidrv6: "IPv6-alue",
              base64: "base64-koodattu merkkijono",
              base64url: "base64url-koodattu merkkijono",
              json_string: "JSON-merkkijono",
              e164: "E.164-luku",
              jwt: "JWT",
              template_literal: "templaattimerkkijono",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Virheellinen tyyppi: odotettiin instanceof ${t.expected}, oli ${w}`
                  : `Virheellinen tyyppi: odotettiin ${o}, oli ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${h.B7(t.values[0])}`
                  : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Liian suuri: ${f.subject} t\xE4ytyy olla ${o}${t.maximum.toString()} ${f.unit}`.trim()
                  : `Liian suuri: arvon t\xE4ytyy olla ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Liian pieni: ${f.subject} t\xE4ytyy olla ${o}${t.minimum.toString()} ${f.unit}`.trim()
                  : `Liian pieni: arvon t\xE4ytyy olla ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${o.suffix}"`
                    : o.format === "includes"
                      ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${o.includes}"`
                      : o.format === "regex"
                        ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${o.pattern}`
                        : `Virheellinen ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Virheellinen luku: t\xE4ytyy olla luvun ${t.divisor} monikerta`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return "Virheellinen avain tietueessa";
              case "invalid_union":
                return "Virheellinen unioni";
              case "invalid_element":
                return "Virheellinen arvo joukossa";
              default:
                return "Virheellinen sy\xF6te";
            }
          };
        };
        function Jt() {
          return { localeError: ct() };
        }
        const ln = () => {
          const A = {
            string: { unit: "caract\xE8res", verb: "avoir" },
            file: { unit: "octets", verb: "avoir" },
            array: { unit: "\xE9l\xE9ments", verb: "avoir" },
            set: { unit: "\xE9l\xE9ments", verb: "avoir" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "entr\xE9e",
              email: "adresse e-mail",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "date et heure ISO",
              date: "date ISO",
              time: "heure ISO",
              duration: "dur\xE9e ISO",
              ipv4: "adresse IPv4",
              ipv6: "adresse IPv6",
              cidrv4: "plage IPv4",
              cidrv6: "plage IPv6",
              base64: "cha\xEEne encod\xE9e en base64",
              base64url: "cha\xEEne encod\xE9e en base64url",
              json_string: "cha\xEEne JSON",
              e164: "num\xE9ro E.164",
              jwt: "JWT",
              template_literal: "entr\xE9e",
            },
            P = {
              string: "cha\xEEne",
              number: "nombre",
              int: "entier",
              boolean: "bool\xE9en",
              bigint: "grand entier",
              symbol: "symbole",
              undefined: "ind\xE9fini",
              null: "null",
              never: "jamais",
              void: "vide",
              date: "date",
              array: "tableau",
              object: "objet",
              tuple: "tuple",
              record: "enregistrement",
              map: "carte",
              set: "ensemble",
              file: "fichier",
              nonoptional: "non-optionnel",
              nan: "NaN",
              function: "fonction",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Entr\xE9e invalide : instanceof ${t.expected} attendu, ${w} re\xE7u`
                  : `Entr\xE9e invalide : ${o} attendu, ${w} re\xE7u`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Entr\xE9e invalide : ${h.B7(t.values[0])} attendu`
                  : `Option invalide : une valeur parmi ${h.jw(t.values, "|")} attendue`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Trop grand : ${P[t.origin] ?? "valeur"} doit ${f.verb} ${o}${t.maximum.toString()} ${f.unit ?? "\xE9l\xE9ment(s)"}`
                  : `Trop grand : ${P[t.origin] ?? "valeur"} doit \xEAtre ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Trop petit : ${P[t.origin] ?? "valeur"} doit ${f.verb} ${o}${t.minimum.toString()} ${f.unit}`
                  : `Trop petit : ${P[t.origin] ?? "valeur"} doit \xEAtre ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
                    : o.format === "includes"
                      ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
                      : o.format === "regex"
                        ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${o.pattern}`
                        : `${C[o.format] ?? t.format} invalide`;
              }
              case "not_multiple_of":
                return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
              case "unrecognized_keys":
                return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Cl\xE9 invalide dans ${t.origin}`;
              case "invalid_union":
                return "Entr\xE9e invalide";
              case "invalid_element":
                return `Valeur invalide dans ${t.origin}`;
              default:
                return "Entr\xE9e invalide";
            }
          };
        };
        function vt() {
          return { localeError: ln() };
        }
        const un = () => {
          const A = {
            string: { unit: "caract\xE8res", verb: "avoir" },
            file: { unit: "octets", verb: "avoir" },
            array: { unit: "\xE9l\xE9ments", verb: "avoir" },
            set: { unit: "\xE9l\xE9ments", verb: "avoir" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "entr\xE9e",
              email: "adresse courriel",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "date-heure ISO",
              date: "date ISO",
              time: "heure ISO",
              duration: "dur\xE9e ISO",
              ipv4: "adresse IPv4",
              ipv6: "adresse IPv6",
              cidrv4: "plage IPv4",
              cidrv6: "plage IPv6",
              base64: "cha\xEEne encod\xE9e en base64",
              base64url: "cha\xEEne encod\xE9e en base64url",
              json_string: "cha\xEEne JSON",
              e164: "num\xE9ro E.164",
              jwt: "JWT",
              template_literal: "entr\xE9e",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Entr\xE9e invalide : attendu instanceof ${t.expected}, re\xE7u ${w}`
                  : `Entr\xE9e invalide : attendu ${o}, re\xE7u ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Entr\xE9e invalide : attendu ${h.B7(t.values[0])}`
                  : `Option invalide : attendu l'une des valeurs suivantes ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "\u2264" : "<",
                  f = N(t.origin);
                return f
                  ? `Trop grand : attendu que ${t.origin ?? "la valeur"} ait ${o}${t.maximum.toString()} ${f.unit}`
                  : `Trop grand : attendu que ${t.origin ?? "la valeur"} soit ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? "\u2265" : ">",
                  f = N(t.origin);
                return f
                  ? `Trop petit : attendu que ${t.origin} ait ${o}${t.minimum.toString()} ${f.unit}`
                  : `Trop petit : attendu que ${t.origin} soit ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Cha\xEEne invalide : doit commencer par "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Cha\xEEne invalide : doit se terminer par "${o.suffix}"`
                    : o.format === "includes"
                      ? `Cha\xEEne invalide : doit inclure "${o.includes}"`
                      : o.format === "regex"
                        ? `Cha\xEEne invalide : doit correspondre au motif ${o.pattern}`
                        : `${C[o.format] ?? t.format} invalide`;
              }
              case "not_multiple_of":
                return `Nombre invalide : doit \xEAtre un multiple de ${t.divisor}`;
              case "unrecognized_keys":
                return `Cl\xE9${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Cl\xE9 invalide dans ${t.origin}`;
              case "invalid_union":
                return "Entr\xE9e invalide";
              case "invalid_element":
                return `Valeur invalide dans ${t.origin}`;
              default:
                return "Entr\xE9e invalide";
            }
          };
        };
        function Bn() {
          return { localeError: un() };
        }
        const ht = () => {
          const A = {
              string: {
                label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA",
                gender: "f",
              },
              number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
              boolean: {
                label:
                  "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9",
                gender: "m",
              },
              bigint: { label: "BigInt", gender: "m" },
              date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
              array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
              object: {
                label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8",
                gender: "m",
              },
              null: {
                label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)",
                gender: "m",
              },
              undefined: {
                label:
                  "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)",
                gender: "m",
              },
              symbol: {
                label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)",
                gender: "m",
              },
              function: {
                label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4",
                gender: "f",
              },
              map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
              set: {
                label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)",
                gender: "f",
              },
              file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
              promise: { label: "Promise", gender: "m" },
              NaN: { label: "NaN", gender: "m" },
              unknown: {
                label:
                  "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2",
                gender: "m",
              },
              value: { label: "\u05E2\u05E8\u05DA", gender: "m" },
            },
            N = {
              string: {
                unit: "\u05EA\u05D5\u05D5\u05D9\u05DD",
                shortLabel: "\u05E7\u05E6\u05E8",
                longLabel: "\u05D0\u05E8\u05D5\u05DA",
              },
              file: {
                unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              array: {
                unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              set: {
                unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              number: {
                unit: "",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
            },
            C = (W) => (W ? A[W] : void 0),
            P = (W) => {
              const Q = C(W);
              return Q ? Q.label : (W ?? A.unknown.label);
            },
            t = (W) => `\u05D4${P(W)}`,
            o = (W) =>
              (C(W)?.gender ?? "m") === "f"
                ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA"
                : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA",
            f = (W) => (W ? (N[W] ?? null) : null),
            w = {
              regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              email: {
                label:
                  "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
                gender: "f",
              },
              url: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
                gender: "f",
              },
              emoji: {
                label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
                gender: "m",
              },
              uuid: { label: "UUID", gender: "m" },
              nanoid: { label: "nanoid", gender: "m" },
              guid: { label: "GUID", gender: "m" },
              cuid: { label: "cuid", gender: "m" },
              cuid2: { label: "cuid2", gender: "m" },
              ulid: { label: "ULID", gender: "m" },
              xid: { label: "XID", gender: "m" },
              ksuid: { label: "KSUID", gender: "m" },
              datetime: {
                label:
                  "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
                gender: "m",
              },
              date: {
                label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
                gender: "m",
              },
              time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
              duration: {
                label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
                gender: "m",
              },
              ipv4: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
                gender: "f",
              },
              ipv6: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
                gender: "f",
              },
              cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
              cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
              base64: {
                label:
                  "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
                gender: "f",
              },
              base64url: {
                label:
                  "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
                gender: "f",
              },
              json_string: {
                label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
                gender: "f",
              },
              e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
              jwt: { label: "JWT", gender: "m" },
              ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
              uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
            },
            $e = { nan: "NaN" };
          return (W) => {
            switch (W.code) {
              case "invalid_type": {
                const Q = W.expected,
                  he = $e[Q ?? ""] ?? P(Q),
                  Ge = h.GW(W.input),
                  Te = $e[Ge] ?? A[Ge]?.label ?? Ge;
                return /^[A-Z]/.test(W.expected)
                  ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${W.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${Te}`
                  : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${he}, \u05D4\u05EA\u05E7\u05D1\u05DC ${Te}`;
              }
              case "invalid_value": {
                if (W.values.length === 1)
                  return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${h.B7(W.values[0])}`;
                const Q = W.values.map((Te) => h.B7(Te));
                if (W.values.length === 2)
                  return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${Q[0]} \u05D0\u05D5 ${Q[1]}`;
                const he = Q[Q.length - 1];
                return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${Q.slice(0, -1).join(", ")} \u05D0\u05D5 ${he}`;
              }
              case "too_big": {
                const Q = f(W.origin),
                  he = t(W.origin ?? "value");
                if (W.origin === "string")
                  return `${Q?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${he} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${W.maximum.toString()} ${Q?.unit ?? ""} ${W.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
                if (W.origin === "number") {
                  const Me = W.inclusive
                    ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${W.maximum}`
                    : `\u05E7\u05D8\u05DF \u05DE-${W.maximum}`;
                  return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${he} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${Me}`;
                }
                if (W.origin === "array" || W.origin === "set") {
                  const Me =
                      W.origin === "set"
                        ? "\u05E6\u05E8\u05D9\u05DB\u05D4"
                        : "\u05E6\u05E8\u05D9\u05DA",
                    Yt = W.inclusive
                      ? `${W.maximum} ${Q?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA`
                      : `\u05E4\u05D7\u05D5\u05EA \u05DE-${W.maximum} ${Q?.unit ?? ""}`;
                  return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${he} ${Me} \u05DC\u05D4\u05DB\u05D9\u05DC ${Yt}`.trim();
                }
                const Ge = W.inclusive ? "<=" : "<",
                  Te = o(W.origin ?? "value");
                return Q?.unit
                  ? `${Q.longLabel} \u05DE\u05D3\u05D9: ${he} ${Te} ${Ge}${W.maximum.toString()} ${Q.unit}`
                  : `${Q?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${he} ${Te} ${Ge}${W.maximum.toString()}`;
              }
              case "too_small": {
                const Q = f(W.origin),
                  he = t(W.origin ?? "value");
                if (W.origin === "string")
                  return `${Q?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${he} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${W.minimum.toString()} ${Q?.unit ?? ""} ${W.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
                if (W.origin === "number") {
                  const Me = W.inclusive
                    ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${W.minimum}`
                    : `\u05D2\u05D3\u05D5\u05DC \u05DE-${W.minimum}`;
                  return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${he} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${Me}`;
                }
                if (W.origin === "array" || W.origin === "set") {
                  const Me =
                    W.origin === "set"
                      ? "\u05E6\u05E8\u05D9\u05DB\u05D4"
                      : "\u05E6\u05E8\u05D9\u05DA";
                  if (W.minimum === 1 && W.inclusive) {
                    const Tt =
                      (W.origin === "set",
                      "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
                    return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${he} ${Me} \u05DC\u05D4\u05DB\u05D9\u05DC ${Tt}`;
                  }
                  const Yt = W.inclusive
                    ? `${W.minimum} ${Q?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8`
                    : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${W.minimum} ${Q?.unit ?? ""}`;
                  return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${he} ${Me} \u05DC\u05D4\u05DB\u05D9\u05DC ${Yt}`.trim();
                }
                const Ge = W.inclusive ? ">=" : ">",
                  Te = o(W.origin ?? "value");
                return Q?.unit
                  ? `${Q.shortLabel} \u05DE\u05D3\u05D9: ${he} ${Te} ${Ge}${W.minimum.toString()} ${Q.unit}`
                  : `${Q?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${he} ${Te} ${Ge}${W.minimum.toString()}`;
              }
              case "invalid_format": {
                const Q = W;
                if (Q.format === "starts_with")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${Q.prefix}"`;
                if (Q.format === "ends_with")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${Q.suffix}"`;
                if (Q.format === "includes")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${Q.includes}"`;
                if (Q.format === "regex")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${Q.pattern}`;
                const he = w[Q.format],
                  Ge = he?.label ?? Q.format,
                  Me =
                    (he?.gender ?? "m") === "f"
                      ? "\u05EA\u05E7\u05D9\u05E0\u05D4"
                      : "\u05EA\u05E7\u05D9\u05DF";
                return `${Ge} \u05DC\u05D0 ${Me}`;
              }
              case "not_multiple_of":
                return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${W.divisor}`;
              case "unrecognized_keys":
                return `\u05DE\u05E4\u05EA\u05D7${W.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${W.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${h.jw(W.keys, ", ")}`;
              case "invalid_key":
                return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
              case "invalid_union":
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
              case "invalid_element":
                return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${t(W.origin ?? "array")}`;
              default:
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
            }
          };
        };
        function Ve() {
          return { localeError: ht() };
        }
        const Vt = () => {
          const A = {
            string: { unit: "znakova", verb: "imati" },
            file: { unit: "bajtova", verb: "imati" },
            array: { unit: "stavki", verb: "imati" },
            set: { unit: "stavki", verb: "imati" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "unos",
              email: "email adresa",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datum i vrijeme",
              date: "ISO datum",
              time: "ISO vrijeme",
              duration: "ISO trajanje",
              ipv4: "IPv4 adresa",
              ipv6: "IPv6 adresa",
              cidrv4: "IPv4 raspon",
              cidrv6: "IPv6 raspon",
              base64: "base64 kodirani tekst",
              base64url: "base64url kodirani tekst",
              json_string: "JSON tekst",
              e164: "E.164 broj",
              jwt: "JWT",
              template_literal: "unos",
            },
            P = {
              nan: "NaN",
              string: "tekst",
              number: "broj",
              boolean: "boolean",
              array: "niz",
              object: "objekt",
              set: "skup",
              file: "datoteka",
              date: "datum",
              bigint: "bigint",
              symbol: "simbol",
              undefined: "undefined",
              null: "null",
              function: "funkcija",
              map: "mapa",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Neispravan unos: o\u010Dekuje se instanceof ${t.expected}, a primljeno je ${w}`
                  : `Neispravan unos: o\u010Dekuje se ${o}, a primljeno je ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Neispravna vrijednost: o\u010Dekivano ${h.B7(t.values[0])}`
                  : `Neispravna opcija: o\u010Dekivano jedno od ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin),
                  w = P[t.origin] ?? t.origin;
                return f
                  ? `Preveliko: o\u010Dekivano da ${w ?? "vrijednost"} ima ${o}${t.maximum.toString()} ${f.unit ?? "elemenata"}`
                  : `Preveliko: o\u010Dekivano da ${w ?? "vrijednost"} bude ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin),
                  w = P[t.origin] ?? t.origin;
                return f
                  ? `Premalo: o\u010Dekivano da ${w} ima ${o}${t.minimum.toString()} ${f.unit}`
                  : `Premalo: o\u010Dekivano da ${w} bude ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Neispravan tekst: mora zapo\u010Dinjati s "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Neispravan tekst: mora zavr\u0161avati s "${o.suffix}"`
                    : o.format === "includes"
                      ? `Neispravan tekst: mora sadr\u017Eavati "${o.includes}"`
                      : o.format === "regex"
                        ? `Neispravan tekst: mora odgovarati uzorku ${o.pattern}`
                        : `Neispravna ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Neispravan broj: mora biti vi\u0161ekratnik od ${t.divisor}`;
              case "unrecognized_keys":
                return `Neprepoznat${t.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Neispravan klju\u010D u ${P[t.origin] ?? t.origin}`;
              case "invalid_union":
                return "Neispravan unos";
              case "invalid_element":
                return `Neispravna vrijednost u ${P[t.origin] ?? t.origin}`;
              default:
                return "Neispravan unos";
            }
          };
        };
        function dn() {
          return { localeError: Vt() };
        }
        const zt = () => {
          const A = {
            string: { unit: "karakter", verb: "legyen" },
            file: { unit: "byte", verb: "legyen" },
            array: { unit: "elem", verb: "legyen" },
            set: { unit: "elem", verb: "legyen" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "bemenet",
              email: "email c\xEDm",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO id\u0151b\xE9lyeg",
              date: "ISO d\xE1tum",
              time: "ISO id\u0151",
              duration: "ISO id\u0151intervallum",
              ipv4: "IPv4 c\xEDm",
              ipv6: "IPv6 c\xEDm",
              cidrv4: "IPv4 tartom\xE1ny",
              cidrv6: "IPv6 tartom\xE1ny",
              base64: "base64-k\xF3dolt string",
              base64url: "base64url-k\xF3dolt string",
              json_string: "JSON string",
              e164: "E.164 sz\xE1m",
              jwt: "JWT",
              template_literal: "bemenet",
            },
            P = { nan: "NaN", number: "sz\xE1m", array: "t\xF6mb" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${t.expected}, a kapott \xE9rt\xE9k ${w}`
                  : `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${o}, a kapott \xE9rt\xE9k ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${h.B7(t.values[0])}`
                  : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `T\xFAl nagy: ${t.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${o}${t.maximum.toString()} ${f.unit ?? "elem"}`
                  : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${t.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} m\xE9rete t\xFAl kicsi ${o}${t.minimum.toString()} ${f.unit}`
                  : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${t.origin} t\xFAl kicsi ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\xC9rv\xE9nytelen string: "${o.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
                  : o.format === "ends_with"
                    ? `\xC9rv\xE9nytelen string: "${o.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
                    : o.format === "includes"
                      ? `\xC9rv\xE9nytelen string: "${o.includes}" \xE9rt\xE9ket kell tartalmaznia`
                      : o.format === "regex"
                        ? `\xC9rv\xE9nytelen string: ${o.pattern} mint\xE1nak kell megfelelnie`
                        : `\xC9rv\xE9nytelen ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\xC9rv\xE9nytelen sz\xE1m: ${t.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
              case "unrecognized_keys":
                return `Ismeretlen kulcs${t.keys.length > 1 ? "s" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\xC9rv\xE9nytelen kulcs ${t.origin}`;
              case "invalid_union":
                return "\xC9rv\xE9nytelen bemenet";
              case "invalid_element":
                return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${t.origin}`;
              default:
                return "\xC9rv\xE9nytelen bemenet";
            }
          };
        };
        function Kt() {
          return { localeError: zt() };
        }
        function Dt(A, N, C) {
          return Math.abs(A) === 1 ? N : C;
        }
        function rt(A) {
          if (!A) return "";
          const N = [
              "\u0561",
              "\u0565",
              "\u0568",
              "\u056B",
              "\u0578",
              "\u0578\u0582",
              "\u0585",
            ],
            C = A[A.length - 1];
          return A + (N.includes(C) ? "\u0576" : "\u0568");
        }
        const Pt = () => {
          const A = {
            string: {
              unit: {
                one: "\u0576\u0577\u0561\u0576",
                many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            file: {
              unit: {
                one: "\u0562\u0561\u0575\u0569",
                many: "\u0562\u0561\u0575\u0569\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            array: {
              unit: {
                one: "\u057F\u0561\u0580\u0580",
                many: "\u057F\u0561\u0580\u0580\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            set: {
              unit: {
                one: "\u057F\u0561\u0580\u0580",
                many: "\u057F\u0561\u0580\u0580\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0574\u0578\u0582\u057F\u0584",
              email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
              url: "URL",
              emoji: "\u0567\u0574\u0578\u057B\u056B",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
              date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
              time: "ISO \u056A\u0561\u0574",
              duration:
                "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
              ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
              ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
              cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
              cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
              base64:
                "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
              base64url:
                "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
              json_string: "JSON \u057F\u0578\u0572",
              e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
              jwt: "JWT",
              template_literal: "\u0574\u0578\u0582\u057F\u0584",
            },
            P = {
              nan: "NaN",
              number: "\u0569\u056B\u057E",
              array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${t.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${w}`
                  : `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${o}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${h.B7(t.values[1])}`
                  : `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                if (f) {
                  const w = Number(t.maximum),
                    $e = Dt(w, f.unit.one, f.unit.many);
                  return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${rt(t.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${o}${t.maximum.toString()} ${$e}`;
                }
                return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${rt(t.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                if (f) {
                  const w = Number(t.minimum),
                    $e = Dt(w, f.unit.one, f.unit.many);
                  return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${rt(t.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${o}${t.minimum.toString()} ${$e}`;
                }
                return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${rt(t.origin)} \u056C\u056B\u0576\u056B ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${o.prefix}"-\u0578\u057E`
                  : o.format === "ends_with"
                    ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${o.suffix}"-\u0578\u057E`
                    : o.format === "includes"
                      ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${o.includes}"`
                      : o.format === "regex"
                        ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${o.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`
                        : `\u054D\u056D\u0561\u056C ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${t.divisor}-\u056B`;
              case "unrecognized_keys":
                return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${t.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${rt(t.origin)}-\u0578\u0582\u0574`;
              case "invalid_union":
                return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
              case "invalid_element":
                return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${rt(t.origin)}-\u0578\u0582\u0574`;
              default:
                return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
            }
          };
        };
        function fn() {
          return { localeError: Pt() };
        }
        const st = () => {
          const A = {
            string: { unit: "karakter", verb: "memiliki" },
            file: { unit: "byte", verb: "memiliki" },
            array: { unit: "item", verb: "memiliki" },
            set: { unit: "item", verb: "memiliki" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "input",
              email: "alamat email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "tanggal dan waktu format ISO",
              date: "tanggal format ISO",
              time: "jam format ISO",
              duration: "durasi format ISO",
              ipv4: "alamat IPv4",
              ipv6: "alamat IPv6",
              cidrv4: "rentang alamat IPv4",
              cidrv6: "rentang alamat IPv6",
              base64: "string dengan enkode base64",
              base64url: "string dengan enkode base64url",
              json_string: "string JSON",
              e164: "angka E.164",
              jwt: "JWT",
              template_literal: "input",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Input tidak valid: diharapkan instanceof ${t.expected}, diterima ${w}`
                  : `Input tidak valid: diharapkan ${o}, diterima ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Input tidak valid: diharapkan ${h.B7(t.values[0])}`
                  : `Pilihan tidak valid: diharapkan salah satu dari ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Terlalu besar: diharapkan ${t.origin ?? "value"} memiliki ${o}${t.maximum.toString()} ${f.unit ?? "elemen"}`
                  : `Terlalu besar: diharapkan ${t.origin ?? "value"} menjadi ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Terlalu kecil: diharapkan ${t.origin} memiliki ${o}${t.minimum.toString()} ${f.unit}`
                  : `Terlalu kecil: diharapkan ${t.origin} menjadi ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `String tidak valid: harus dimulai dengan "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `String tidak valid: harus berakhir dengan "${o.suffix}"`
                    : o.format === "includes"
                      ? `String tidak valid: harus menyertakan "${o.includes}"`
                      : o.format === "regex"
                        ? `String tidak valid: harus sesuai pola ${o.pattern}`
                        : `${C[o.format] ?? t.format} tidak valid`;
              }
              case "not_multiple_of":
                return `Angka tidak valid: harus kelipatan dari ${t.divisor}`;
              case "unrecognized_keys":
                return `Kunci tidak dikenali ${t.keys.length > 1 ? "s" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Kunci tidak valid di ${t.origin}`;
              case "invalid_union":
                return "Input tidak valid";
              case "invalid_element":
                return `Nilai tidak valid di ${t.origin}`;
              default:
                return "Input tidak valid";
            }
          };
        };
        function Ot() {
          return { localeError: st() };
        }
        const Ht = () => {
          const A = {
            string: { unit: "stafi", verb: "a\xF0 hafa" },
            file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
            array: { unit: "hluti", verb: "a\xF0 hafa" },
            set: { unit: "hluti", verb: "a\xF0 hafa" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "gildi",
              email: "netfang",
              url: "vefsl\xF3\xF0",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO dagsetning og t\xEDmi",
              date: "ISO dagsetning",
              time: "ISO t\xEDmi",
              duration: "ISO t\xEDmalengd",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded strengur",
              base64url: "base64url-encoded strengur",
              json_string: "JSON strengur",
              e164: "E.164 t\xF6lugildi",
              jwt: "JWT",
              template_literal: "gildi",
            },
            P = { nan: "NaN", number: "n\xFAmer", array: "fylki" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Rangt gildi: \xDE\xFA sl\xF3st inn ${w} \xFEar sem \xE1 a\xF0 vera instanceof ${t.expected}`
                  : `Rangt gildi: \xDE\xFA sl\xF3st inn ${w} \xFEar sem \xE1 a\xF0 vera ${o}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Rangt gildi: gert r\xE1\xF0 fyrir ${h.B7(t.values[0])}`
                  : `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${t.origin ?? "gildi"} hafi ${o}${t.maximum.toString()} ${f.unit ?? "hluti"}`
                  : `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${t.origin ?? "gildi"} s\xE9 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${t.origin} hafi ${o}${t.minimum.toString()} ${f.unit}`
                  : `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${t.origin} s\xE9 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${o.includes}"`
                      : o.format === "regex"
                        ? `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${o.pattern}`
                        : `Rangt ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${t.divisor}`;
              case "unrecognized_keys":
                return `\xD3\xFEekkt ${t.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Rangur lykill \xED ${t.origin}`;
              case "invalid_union":
                return "Rangt gildi";
              case "invalid_element":
                return `Rangt gildi \xED ${t.origin}`;
              default:
                return "Rangt gildi";
            }
          };
        };
        function Fn() {
          return { localeError: Ht() };
        }
        const qt = () => {
          const A = {
            string: { unit: "caratteri", verb: "avere" },
            file: { unit: "byte", verb: "avere" },
            array: { unit: "elementi", verb: "avere" },
            set: { unit: "elementi", verb: "avere" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "input",
              email: "indirizzo email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "data e ora ISO",
              date: "data ISO",
              time: "ora ISO",
              duration: "durata ISO",
              ipv4: "indirizzo IPv4",
              ipv6: "indirizzo IPv6",
              cidrv4: "intervallo IPv4",
              cidrv6: "intervallo IPv6",
              base64: "stringa codificata in base64",
              base64url: "URL codificata in base64",
              json_string: "stringa JSON",
              e164: "numero E.164",
              jwt: "JWT",
              template_literal: "input",
            },
            P = { nan: "NaN", number: "numero", array: "vettore" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Input non valido: atteso instanceof ${t.expected}, ricevuto ${w}`
                  : `Input non valido: atteso ${o}, ricevuto ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Input non valido: atteso ${h.B7(t.values[0])}`
                  : `Opzione non valida: atteso uno tra ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Troppo grande: ${t.origin ?? "valore"} deve avere ${o}${t.maximum.toString()} ${f.unit ?? "elementi"}`
                  : `Troppo grande: ${t.origin ?? "valore"} deve essere ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Troppo piccolo: ${t.origin} deve avere ${o}${t.minimum.toString()} ${f.unit}`
                  : `Troppo piccolo: ${t.origin} deve essere ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Stringa non valida: deve iniziare con "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Stringa non valida: deve terminare con "${o.suffix}"`
                    : o.format === "includes"
                      ? `Stringa non valida: deve includere "${o.includes}"`
                      : o.format === "regex"
                        ? `Stringa non valida: deve corrispondere al pattern ${o.pattern}`
                        : `Input non valido: ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Numero non valido: deve essere un multiplo di ${t.divisor}`;
              case "unrecognized_keys":
                return `Chiav${t.keys.length > 1 ? "i" : "e"} non riconosciut${t.keys.length > 1 ? "e" : "a"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Chiave non valida in ${t.origin}`;
              case "invalid_union":
                return "Input non valido";
              case "invalid_element":
                return `Valore non valido in ${t.origin}`;
              default:
                return "Input non valido";
            }
          };
        };
        function Nt() {
          return { localeError: qt() };
        }
        const Gn = () => {
          const A = {
            string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
            file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
            array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
            set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u5165\u529B\u5024",
              email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
              url: "URL",
              emoji: "\u7D75\u6587\u5B57",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO\u65E5\u6642",
              date: "ISO\u65E5\u4ED8",
              time: "ISO\u6642\u523B",
              duration: "ISO\u671F\u9593",
              ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
              ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
              cidrv4: "IPv4\u7BC4\u56F2",
              cidrv6: "IPv6\u7BC4\u56F2",
              base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
              base64url:
                "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
              json_string: "JSON\u6587\u5B57\u5217",
              e164: "E.164\u756A\u53F7",
              jwt: "JWT",
              template_literal: "\u5165\u529B\u5024",
            },
            P = { nan: "NaN", number: "\u6570\u5024", array: "\u914D\u5217" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u7121\u52B9\u306A\u5165\u529B: instanceof ${t.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${w}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`
                  : `\u7121\u52B9\u306A\u5165\u529B: ${o}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${w}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u7121\u52B9\u306A\u5165\u529B: ${h.B7(t.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
                  : `\u7121\u52B9\u306A\u9078\u629E: ${h.jw(t.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              case "too_big": {
                const o = t.inclusive
                    ? "\u4EE5\u4E0B\u3067\u3042\u308B"
                    : "\u3088\u308A\u5C0F\u3055\u3044",
                  f = N(t.origin);
                return f
                  ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${f.unit ?? "\u8981\u7D20"}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : `\u5927\u304D\u3059\u304E\u308B\u5024: ${t.origin ?? "\u5024"}\u306F${t.maximum.toString()}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              }
              case "too_small": {
                const o = t.inclusive
                    ? "\u4EE5\u4E0A\u3067\u3042\u308B"
                    : "\u3088\u308A\u5927\u304D\u3044",
                  f = N(t.origin);
                return f
                  ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${f.unit}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${t.origin}\u306F${t.minimum.toString()}${o}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : o.format === "ends_with"
                    ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                    : o.format === "includes"
                      ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${o.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                      : o.format === "regex"
                        ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${o.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                        : `\u7121\u52B9\u306A${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u7121\u52B9\u306A\u6570\u5024: ${t.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              case "unrecognized_keys":
                return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${t.keys.length > 1 ? "\u7FA4" : ""}: ${h.jw(t.keys, "\u3001")}`;
              case "invalid_key":
                return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
              case "invalid_union":
                return "\u7121\u52B9\u306A\u5165\u529B";
              case "invalid_element":
                return `${t.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
              default:
                return "\u7121\u52B9\u306A\u5165\u529B";
            }
          };
        };
        function Mn() {
          return { localeError: Gn() };
        }
        const jt = () => {
          const A = {
            string: {
              unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            file: {
              unit: "\u10D1\u10D0\u10D8\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            array: {
              unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            set: {
              unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
              email:
                "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              url: "URL",
              emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
              date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
              time: "\u10D3\u10E0\u10DD",
              duration:
                "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
              ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              cidrv4:
                "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
              cidrv6:
                "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
              base64:
                "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
              base64url:
                "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
              json_string: "JSON \u10D5\u10D4\u10DA\u10D8",
              e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
              jwt: "JWT",
              template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
            },
            P = {
              nan: "NaN",
              number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
              string: "\u10D5\u10D4\u10DA\u10D8",
              boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
              function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
              array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${t.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${w}`
                  : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${o}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${h.B7(t.values[0])}`
                  : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${h.jw(t.values, "|")}-\u10D3\u10D0\u10DC`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${t.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${f.verb} ${o}${t.maximum.toString()} ${f.unit}`
                  : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${t.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${t.origin} ${f.verb} ${o}${t.minimum.toString()} ${f.unit}`
                  : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${t.origin} \u10D8\u10E7\u10DD\u10E1 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${o.prefix}"-\u10D8\u10D7`
                  : o.format === "ends_with"
                    ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${o.suffix}"-\u10D8\u10D7`
                    : o.format === "includes"
                      ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${o.includes}"-\u10E1`
                      : o.format === "regex"
                        ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${o.pattern}`
                        : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${t.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
              case "unrecognized_keys":
                return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${t.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${t.origin}-\u10E8\u10D8`;
              case "invalid_union":
                return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
              case "invalid_element":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${t.origin}-\u10E8\u10D8`;
              default:
                return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
            }
          };
        };
        function mr() {
          return { localeError: jt() };
        }
        const gr = () => {
          const A = {
            string: {
              unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            file: {
              unit: "\u1794\u17C3",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            array: {
              unit: "\u1792\u17B6\u178F\u17BB",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            set: {
              unit: "\u1792\u17B6\u178F\u17BB",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex:
                "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
              email:
                "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
              url: "URL",
              emoji:
                "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
              date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
              time: "\u1798\u17C9\u17C4\u1784 ISO",
              duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
              ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
              ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
              cidrv4:
                "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
              cidrv6:
                "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
              base64:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
              base64url:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
              json_string:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
              e164: "\u179B\u17C1\u1781 E.164",
              jwt: "JWT",
              template_literal:
                "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
            },
            P = {
              nan: "NaN",
              number: "\u179B\u17C1\u1781",
              array: "\u17A2\u17B6\u179A\u17C1 (Array)",
              null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${t.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${w}`
                  : `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${o} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${h.B7(t.values[0])}`
                  : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${t.maximum.toString()} ${f.unit ?? "\u1792\u17B6\u178F\u17BB"}`
                  : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${o} ${t.minimum.toString()} ${f.unit}`
                  : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${t.origin} ${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${o.pattern}`
                        : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${t.divisor}`;
              case "unrecognized_keys":
                return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
              case "invalid_union":
                return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
              case "invalid_element":
                return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${t.origin}`;
              default:
                return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
            }
          };
        };
        function pn() {
          return { localeError: gr() };
        }
        function Wn() {
          return pn();
        }
        const vr = () => {
          const A = {
            string: { unit: "\uBB38\uC790", verb: "to have" },
            file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
            array: { unit: "\uAC1C", verb: "to have" },
            set: { unit: "\uAC1C", verb: "to have" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\uC785\uB825",
              email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
              url: "URL",
              emoji: "\uC774\uBAA8\uC9C0",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
              date: "ISO \uB0A0\uC9DC",
              time: "ISO \uC2DC\uAC04",
              duration: "ISO \uAE30\uAC04",
              ipv4: "IPv4 \uC8FC\uC18C",
              ipv6: "IPv6 \uC8FC\uC18C",
              cidrv4: "IPv4 \uBC94\uC704",
              cidrv6: "IPv6 \uBC94\uC704",
              base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
              base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
              json_string: "JSON \uBB38\uC790\uC5F4",
              e164: "E.164 \uBC88\uD638",
              jwt: "JWT",
              template_literal: "\uC785\uB825",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${t.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${w}\uC785\uB2C8\uB2E4`
                  : `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${o}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${w}\uC785\uB2C8\uB2E4`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${h.B7(t.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
                  : `\uC798\uBABB\uB41C \uC635\uC158: ${h.jw(t.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
              case "too_big": {
                const o = t.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
                  f =
                    o === "\uBBF8\uB9CC"
                      ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
                      : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
                  w = N(t.origin),
                  $e = w?.unit ?? "\uC694\uC18C";
                return w
                  ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()}${$e} ${o}${f}`
                  : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${t.maximum.toString()} ${o}${f}`;
              }
              case "too_small": {
                const o = t.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
                  f =
                    o === "\uC774\uC0C1"
                      ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
                      : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
                  w = N(t.origin),
                  $e = w?.unit ?? "\uC694\uC18C";
                return w
                  ? `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()}${$e} ${o}${f}`
                  : `${t.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${t.minimum.toString()} ${o}${f}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
                  : o.format === "ends_with"
                    ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
                    : o.format === "includes"
                      ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${o.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
                      : o.format === "regex"
                        ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${o.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                        : `\uC798\uBABB\uB41C ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\uC798\uBABB\uB41C \uC22B\uC790: ${t.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
              case "unrecognized_keys":
                return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\uC798\uBABB\uB41C \uD0A4: ${t.origin}`;
              case "invalid_union":
                return "\uC798\uBABB\uB41C \uC785\uB825";
              case "invalid_element":
                return `\uC798\uBABB\uB41C \uAC12: ${t.origin}`;
              default:
                return "\uC798\uBABB\uB41C \uC785\uB825";
            }
          };
        };
        function hr() {
          return { localeError: vr() };
        }
        const Et = (A) => A.charAt(0).toUpperCase() + A.slice(1);
        function mn(A) {
          const N = Math.abs(A),
            C = N % 10,
            P = N % 100;
          return (P >= 11 && P <= 19) || C === 0
            ? "many"
            : C === 1
              ? "one"
              : "few";
        }
        const Jn = () => {
          const A = {
            string: {
              unit: {
                one: "simbolis",
                few: "simboliai",
                many: "simboli\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
                  notInclusive: "turi b\u016Bti trumpesn\u0117 kaip",
                },
                bigger: {
                  inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
                  notInclusive: "turi b\u016Bti ilgesn\u0117 kaip",
                },
              },
            },
            file: {
              unit: { one: "baitas", few: "baitai", many: "bait\u0173" },
              verb: {
                smaller: {
                  inclusive: "turi b\u016Bti ne didesnis kaip",
                  notInclusive: "turi b\u016Bti ma\u017Eesnis kaip",
                },
                bigger: {
                  inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
                  notInclusive: "turi b\u016Bti didesnis kaip",
                },
              },
            },
            array: {
              unit: {
                one: "element\u0105",
                few: "elementus",
                many: "element\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi tur\u0117ti ne daugiau kaip",
                  notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
                },
                bigger: {
                  inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
                  notInclusive: "turi tur\u0117ti daugiau kaip",
                },
              },
            },
            set: {
              unit: {
                one: "element\u0105",
                few: "elementus",
                many: "element\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi tur\u0117ti ne daugiau kaip",
                  notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
                },
                bigger: {
                  inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
                  notInclusive: "turi tur\u0117ti daugiau kaip",
                },
              },
            },
          };
          function N(t, o, f, w) {
            const $e = A[t] ?? null;
            return $e === null
              ? $e
              : {
                  unit: $e.unit[o],
                  verb: $e.verb[w][f ? "inclusive" : "notInclusive"],
                };
          }
          const C = {
              regex: "\u012Fvestis",
              email: "el. pa\u0161to adresas",
              url: "URL",
              emoji: "jaustukas",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO data ir laikas",
              date: "ISO data",
              time: "ISO laikas",
              duration: "ISO trukm\u0117",
              ipv4: "IPv4 adresas",
              ipv6: "IPv6 adresas",
              cidrv4: "IPv4 tinklo prefiksas (CIDR)",
              cidrv6: "IPv6 tinklo prefiksas (CIDR)",
              base64: "base64 u\u017Ekoduota eilut\u0117",
              base64url: "base64url u\u017Ekoduota eilut\u0117",
              json_string: "JSON eilut\u0117",
              e164: "E.164 numeris",
              jwt: "JWT",
              template_literal: "\u012Fvestis",
            },
            P = {
              nan: "NaN",
              number: "skai\u010Dius",
              bigint: "sveikasis skai\u010Dius",
              string: "eilut\u0117",
              boolean: "login\u0117 reik\u0161m\u0117",
              undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
              function: "funkcija",
              symbol: "simbolis",
              array: "masyvas",
              object: "objektas",
              null: "nulin\u0117 reik\u0161m\u0117",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Gautas tipas ${w}, o tik\u0117tasi - instanceof ${t.expected}`
                  : `Gautas tipas ${w}, o tik\u0117tasi - ${o}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Privalo b\u016Bti ${h.B7(t.values[0])}`
                  : `Privalo b\u016Bti vienas i\u0161 ${h.jw(t.values, "|")} pasirinkim\u0173`;
              case "too_big": {
                const o = P[t.origin] ?? t.origin,
                  f = N(
                    t.origin,
                    mn(Number(t.maximum)),
                    t.inclusive ?? !1,
                    "smaller",
                  );
                if (f?.verb)
                  return `${Et(o ?? t.origin ?? "reik\u0161m\u0117")} ${f.verb} ${t.maximum.toString()} ${f.unit ?? "element\u0173"}`;
                const w = t.inclusive
                  ? "ne didesnis kaip"
                  : "ma\u017Eesnis kaip";
                return `${Et(o ?? t.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${w} ${t.maximum.toString()} ${f?.unit}`;
              }
              case "too_small": {
                const o = P[t.origin] ?? t.origin,
                  f = N(
                    t.origin,
                    mn(Number(t.minimum)),
                    t.inclusive ?? !1,
                    "bigger",
                  );
                if (f?.verb)
                  return `${Et(o ?? t.origin ?? "reik\u0161m\u0117")} ${f.verb} ${t.minimum.toString()} ${f.unit ?? "element\u0173"}`;
                const w = t.inclusive
                  ? "ne ma\u017Eesnis kaip"
                  : "didesnis kaip";
                return `${Et(o ?? t.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${w} ${t.minimum.toString()} ${f?.unit}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Eilut\u0117 privalo prasid\u0117ti "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Eilut\u0117 privalo pasibaigti "${o.suffix}"`
                    : o.format === "includes"
                      ? `Eilut\u0117 privalo \u012Ftraukti "${o.includes}"`
                      : o.format === "regex"
                        ? `Eilut\u0117 privalo atitikti ${o.pattern}`
                        : `Neteisingas ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Skai\u010Dius privalo b\u016Bti ${t.divisor} kartotinis.`;
              case "unrecognized_keys":
                return `Neatpa\u017Eint${t.keys.length > 1 ? "i" : "as"} rakt${t.keys.length > 1 ? "ai" : "as"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return "Rastas klaidingas raktas";
              case "invalid_union":
                return "Klaidinga \u012Fvestis";
              case "invalid_element": {
                const o = P[t.origin] ?? t.origin;
                return `${Et(o ?? t.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
              }
              default:
                return "Klaidinga \u012Fvestis";
            }
          };
        };
        function br() {
          return { localeError: Jn() };
        }
        const yr = () => {
          const A = {
            string: {
              unit: "\u0437\u043D\u0430\u0446\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            file: {
              unit: "\u0431\u0430\u0458\u0442\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            array: {
              unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            set: {
              unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0432\u043D\u0435\u0441",
              email:
                "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u045F\u0438",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
              date: "ISO \u0434\u0430\u0442\u0443\u043C",
              time: "ISO \u0432\u0440\u0435\u043C\u0435",
              duration:
                "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
              cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
              cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
              base64:
                "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
              base64url:
                "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
              json_string: "JSON \u043D\u0438\u0437\u0430",
              e164: "E.164 \u0431\u0440\u043E\u0458",
              jwt: "JWT",
              template_literal: "\u0432\u043D\u0435\u0441",
            },
            P = {
              nan: "NaN",
              number: "\u0431\u0440\u043E\u0458",
              array: "\u043D\u0438\u0437\u0430",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${t.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${w}`
                  : `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${o}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Invalid input: expected ${h.B7(t.values[0])}`
                  : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${o}${t.maximum.toString()} ${f.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
                  : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0438\u043C\u0430 ${o}${t.minimum.toString()} ${f.unit}`
                  : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${t.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${o.pattern}`
                        : `Invalid ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${t.divisor}`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${t.origin}`;
              case "invalid_union":
                return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
              case "invalid_element":
                return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${t.origin}`;
              default:
                return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
            }
          };
        };
        function Ii() {
          return { localeError: yr() };
        }
        const xi = () => {
          const A = {
            string: { unit: "aksara", verb: "mempunyai" },
            file: { unit: "bait", verb: "mempunyai" },
            array: { unit: "elemen", verb: "mempunyai" },
            set: { unit: "elemen", verb: "mempunyai" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "input",
              email: "alamat e-mel",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "tarikh masa ISO",
              date: "tarikh ISO",
              time: "masa ISO",
              duration: "tempoh ISO",
              ipv4: "alamat IPv4",
              ipv6: "alamat IPv6",
              cidrv4: "julat IPv4",
              cidrv6: "julat IPv6",
              base64: "string dikodkan base64",
              base64url: "string dikodkan base64url",
              json_string: "string JSON",
              e164: "nombor E.164",
              jwt: "JWT",
              template_literal: "input",
            },
            P = { nan: "NaN", number: "nombor" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Input tidak sah: dijangka instanceof ${t.expected}, diterima ${w}`
                  : `Input tidak sah: dijangka ${o}, diterima ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Input tidak sah: dijangka ${h.B7(t.values[0])}`
                  : `Pilihan tidak sah: dijangka salah satu daripada ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Terlalu besar: dijangka ${t.origin ?? "nilai"} ${f.verb} ${o}${t.maximum.toString()} ${f.unit ?? "elemen"}`
                  : `Terlalu besar: dijangka ${t.origin ?? "nilai"} adalah ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Terlalu kecil: dijangka ${t.origin} ${f.verb} ${o}${t.minimum.toString()} ${f.unit}`
                  : `Terlalu kecil: dijangka ${t.origin} adalah ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `String tidak sah: mesti bermula dengan "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `String tidak sah: mesti berakhir dengan "${o.suffix}"`
                    : o.format === "includes"
                      ? `String tidak sah: mesti mengandungi "${o.includes}"`
                      : o.format === "regex"
                        ? `String tidak sah: mesti sepadan dengan corak ${o.pattern}`
                        : `${C[o.format] ?? t.format} tidak sah`;
              }
              case "not_multiple_of":
                return `Nombor tidak sah: perlu gandaan ${t.divisor}`;
              case "unrecognized_keys":
                return `Kunci tidak dikenali: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Kunci tidak sah dalam ${t.origin}`;
              case "invalid_union":
                return "Input tidak sah";
              case "invalid_element":
                return `Nilai tidak sah dalam ${t.origin}`;
              default:
                return "Input tidak sah";
            }
          };
        };
        function k() {
          return { localeError: xi() };
        }
        const E = () => {
          const A = {
            string: { unit: "tekens", verb: "heeft" },
            file: { unit: "bytes", verb: "heeft" },
            array: { unit: "elementen", verb: "heeft" },
            set: { unit: "elementen", verb: "heeft" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "invoer",
              email: "emailadres",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datum en tijd",
              date: "ISO datum",
              time: "ISO tijd",
              duration: "ISO duur",
              ipv4: "IPv4-adres",
              ipv6: "IPv6-adres",
              cidrv4: "IPv4-bereik",
              cidrv6: "IPv6-bereik",
              base64: "base64-gecodeerde tekst",
              base64url: "base64 URL-gecodeerde tekst",
              json_string: "JSON string",
              e164: "E.164-nummer",
              jwt: "JWT",
              template_literal: "invoer",
            },
            P = { nan: "NaN", number: "getal" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Ongeldige invoer: verwacht instanceof ${t.expected}, ontving ${w}`
                  : `Ongeldige invoer: verwacht ${o}, ontving ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ongeldige invoer: verwacht ${h.B7(t.values[0])}`
                  : `Ongeldige optie: verwacht \xE9\xE9n van ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin),
                  w =
                    t.origin === "date"
                      ? "laat"
                      : t.origin === "string"
                        ? "lang"
                        : "groot";
                return f
                  ? `Te ${w}: verwacht dat ${t.origin ?? "waarde"} ${o}${t.maximum.toString()} ${f.unit ?? "elementen"} ${f.verb}`
                  : `Te ${w}: verwacht dat ${t.origin ?? "waarde"} ${o}${t.maximum.toString()} is`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin),
                  w =
                    t.origin === "date"
                      ? "vroeg"
                      : t.origin === "string"
                        ? "kort"
                        : "klein";
                return f
                  ? `Te ${w}: verwacht dat ${t.origin} ${o}${t.minimum.toString()} ${f.unit} ${f.verb}`
                  : `Te ${w}: verwacht dat ${t.origin} ${o}${t.minimum.toString()} is`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ongeldige tekst: moet met "${o.prefix}" beginnen`
                  : o.format === "ends_with"
                    ? `Ongeldige tekst: moet op "${o.suffix}" eindigen`
                    : o.format === "includes"
                      ? `Ongeldige tekst: moet "${o.includes}" bevatten`
                      : o.format === "regex"
                        ? `Ongeldige tekst: moet overeenkomen met patroon ${o.pattern}`
                        : `Ongeldig: ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;
              case "unrecognized_keys":
                return `Onbekende key${t.keys.length > 1 ? "s" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ongeldige key in ${t.origin}`;
              case "invalid_union":
                return "Ongeldige invoer";
              case "invalid_element":
                return `Ongeldige waarde in ${t.origin}`;
              default:
                return "Ongeldige invoer";
            }
          };
        };
        function g() {
          return { localeError: E() };
        }
        const T = () => {
          const A = {
            string: { unit: "tegn", verb: "\xE5 ha" },
            file: { unit: "bytes", verb: "\xE5 ha" },
            array: { unit: "elementer", verb: "\xE5 inneholde" },
            set: { unit: "elementer", verb: "\xE5 inneholde" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "input",
              email: "e-postadresse",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO dato- og klokkeslett",
              date: "ISO-dato",
              time: "ISO-klokkeslett",
              duration: "ISO-varighet",
              ipv4: "IPv4-omr\xE5de",
              ipv6: "IPv6-omr\xE5de",
              cidrv4: "IPv4-spekter",
              cidrv6: "IPv6-spekter",
              base64: "base64-enkodet streng",
              base64url: "base64url-enkodet streng",
              json_string: "JSON-streng",
              e164: "E.164-nummer",
              jwt: "JWT",
              template_literal: "input",
            },
            P = { nan: "NaN", number: "tall", array: "liste" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Ugyldig input: forventet instanceof ${t.expected}, fikk ${w}`
                  : `Ugyldig input: forventet ${o}, fikk ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ugyldig verdi: forventet ${h.B7(t.values[0])}`
                  : `Ugyldig valg: forventet en av ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${o}${t.maximum.toString()} ${f.unit ?? "elementer"}`
                  : `For stor(t): forventet ${t.origin ?? "value"} til \xE5 ha ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `For lite(n): forventet ${t.origin} til \xE5 ha ${o}${t.minimum.toString()} ${f.unit}`
                  : `For lite(n): forventet ${t.origin} til \xE5 ha ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ugyldig streng: m\xE5 starte med "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Ugyldig streng: m\xE5 ende med "${o.suffix}"`
                    : o.format === "includes"
                      ? `Ugyldig streng: m\xE5 inneholde "${o.includes}"`
                      : o.format === "regex"
                        ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${o.pattern}`
                        : `Ugyldig ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${t.divisor}`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ugyldig n\xF8kkel i ${t.origin}`;
              case "invalid_union":
                return "Ugyldig input";
              case "invalid_element":
                return `Ugyldig verdi i ${t.origin}`;
              default:
                return "Ugyldig input";
            }
          };
        };
        function ce() {
          return { localeError: T() };
        }
        const de = () => {
          const A = {
            string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
            file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
            array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
            set: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "giren",
              email: "epostag\xE2h",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO heng\xE2m\u0131",
              date: "ISO tarihi",
              time: "ISO zaman\u0131",
              duration: "ISO m\xFCddeti",
              ipv4: "IPv4 ni\u015F\xE2n\u0131",
              ipv6: "IPv6 ni\u015F\xE2n\u0131",
              cidrv4: "IPv4 menzili",
              cidrv6: "IPv6 menzili",
              base64: "base64-\u015Fifreli metin",
              base64url: "base64url-\u015Fifreli metin",
              json_string: "JSON metin",
              e164: "E.164 say\u0131s\u0131",
              jwt: "JWT",
              template_literal: "giren",
            },
            P = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `F\xE2sit giren: umulan instanceof ${t.expected}, al\u0131nan ${w}`
                  : `F\xE2sit giren: umulan ${o}, al\u0131nan ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `F\xE2sit giren: umulan ${h.B7(t.values[0])}`
                  : `F\xE2sit tercih: m\xFBteberler ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${o}${t.maximum.toString()} ${f.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
                  : `Fazla b\xFCy\xFCk: ${t.origin ?? "value"}, ${o}${t.maximum.toString()} olmal\u0131yd\u0131.`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${o}${t.minimum.toString()} ${f.unit} sahip olmal\u0131yd\u0131.`
                  : `Fazla k\xFC\xE7\xFCk: ${t.origin}, ${o}${t.minimum.toString()} olmal\u0131yd\u0131.`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `F\xE2sit metin: "${o.prefix}" ile ba\u015Flamal\u0131.`
                  : o.format === "ends_with"
                    ? `F\xE2sit metin: "${o.suffix}" ile bitmeli.`
                    : o.format === "includes"
                      ? `F\xE2sit metin: "${o.includes}" ihtiv\xE2 etmeli.`
                      : o.format === "regex"
                        ? `F\xE2sit metin: ${o.pattern} nak\u015F\u0131na uymal\u0131.`
                        : `F\xE2sit ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `F\xE2sit say\u0131: ${t.divisor} kat\u0131 olmal\u0131yd\u0131.`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan anahtar ${t.keys.length > 1 ? "s" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} i\xE7in tan\u0131nmayan anahtar var.`;
              case "invalid_union":
                return "Giren tan\u0131namad\u0131.";
              case "invalid_element":
                return `${t.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
              default:
                return "K\u0131ymet tan\u0131namad\u0131.";
            }
          };
        };
        function pe() {
          return { localeError: de() };
        }
        const ee = () => {
          const A = {
            string: {
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
            file: {
              unit: "\u0628\u0627\u06CC\u067C\u0633",
              verb: "\u0648\u0644\u0631\u064A",
            },
            array: {
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
            set: {
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0648\u0631\u0648\u062F\u064A",
              email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
              url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
              date: "\u0646\u06D0\u067C\u0647",
              time: "\u0648\u062E\u062A",
              duration: "\u0645\u0648\u062F\u0647",
              ipv4: "\u062F IPv4 \u067E\u062A\u0647",
              ipv6: "\u062F IPv6 \u067E\u062A\u0647",
              cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
              cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
              base64: "base64-encoded \u0645\u062A\u0646",
              base64url: "base64url-encoded \u0645\u062A\u0646",
              json_string: "JSON \u0645\u062A\u0646",
              e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
              jwt: "JWT",
              template_literal: "\u0648\u0631\u0648\u062F\u064A",
            },
            P = {
              nan: "NaN",
              number: "\u0639\u062F\u062F",
              array: "\u0627\u0631\u06D0",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${t.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${w} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`
                  : `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${o} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${w} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${h.B7(t.values[0])} \u0648\u0627\u06CC`
                  : `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${h.jw(t.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${t.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} ${f.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`
                  : `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${t.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${o}${t.maximum.toString()} \u0648\u064A`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} ${f.unit} \u0648\u0644\u0631\u064A`
                  : `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${t.origin} \u0628\u0627\u06CC\u062F ${o}${t.minimum.toString()} \u0648\u064A`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${o.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`
                  : o.format === "ends_with"
                    ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${o.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`
                    : o.format === "includes"
                      ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${o.includes}" \u0648\u0644\u0631\u064A`
                      : o.format === "regex"
                        ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${o.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`
                        : `${C[o.format] ?? t.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
              }
              case "not_multiple_of":
                return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${t.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
              case "unrecognized_keys":
                return `\u0646\u0627\u0633\u0645 ${t.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${t.origin} \u06A9\u06D0`;
              case "invalid_union":
                return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
              case "invalid_element":
                return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${t.origin} \u06A9\u06D0`;
              default:
                return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
            }
          };
        };
        function Ye() {
          return { localeError: ee() };
        }
        const Ke = () => {
          const A = {
            string: { unit: "znak\xF3w", verb: "mie\u0107" },
            file: { unit: "bajt\xF3w", verb: "mie\u0107" },
            array: { unit: "element\xF3w", verb: "mie\u0107" },
            set: { unit: "element\xF3w", verb: "mie\u0107" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "wyra\u017Cenie",
              email: "adres email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "data i godzina w formacie ISO",
              date: "data w formacie ISO",
              time: "godzina w formacie ISO",
              duration: "czas trwania ISO",
              ipv4: "adres IPv4",
              ipv6: "adres IPv6",
              cidrv4: "zakres IPv4",
              cidrv6: "zakres IPv6",
              base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
              base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
              json_string: "ci\u0105g znak\xF3w w formacie JSON",
              e164: "liczba E.164",
              jwt: "JWT",
              template_literal: "wej\u015Bcie",
            },
            P = { nan: "NaN", number: "liczba", array: "tablica" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${t.expected}, otrzymano ${w}`
                  : `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${o}, otrzymano ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${h.B7(t.values[0])}`
                  : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${t.maximum.toString()} ${f.unit ?? "element\xF3w"}`
                  : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${o}${t.minimum.toString()} ${f.unit ?? "element\xF3w"}`
                  : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${t.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${o.suffix}"`
                    : o.format === "includes"
                      ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${o.includes}"`
                      : o.format === "regex"
                        ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${o.pattern}`
                        : `Nieprawid\u0142ow(y/a/e) ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${t.divisor}`;
              case "unrecognized_keys":
                return `Nierozpoznane klucze${t.keys.length > 1 ? "s" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Nieprawid\u0142owy klucz w ${t.origin}`;
              case "invalid_union":
                return "Nieprawid\u0142owe dane wej\u015Bciowe";
              case "invalid_element":
                return `Nieprawid\u0142owa warto\u015B\u0107 w ${t.origin}`;
              default:
                return "Nieprawid\u0142owe dane wej\u015Bciowe";
            }
          };
        };
        function Si() {
          return { localeError: Ke() };
        }
        const ki = () => {
          const A = {
            string: { unit: "caracteres", verb: "ter" },
            file: { unit: "bytes", verb: "ter" },
            array: { unit: "itens", verb: "ter" },
            set: { unit: "itens", verb: "ter" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "padr\xE3o",
              email: "endere\xE7o de e-mail",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "data e hora ISO",
              date: "data ISO",
              time: "hora ISO",
              duration: "dura\xE7\xE3o ISO",
              ipv4: "endere\xE7o IPv4",
              ipv6: "endere\xE7o IPv6",
              cidrv4: "faixa de IPv4",
              cidrv6: "faixa de IPv6",
              base64: "texto codificado em base64",
              base64url: "URL codificada em base64",
              json_string: "texto JSON",
              e164: "n\xFAmero E.164",
              jwt: "JWT",
              template_literal: "entrada",
            },
            P = { nan: "NaN", number: "n\xFAmero", null: "nulo" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Tipo inv\xE1lido: esperado instanceof ${t.expected}, recebido ${w}`
                  : `Tipo inv\xE1lido: esperado ${o}, recebido ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Entrada inv\xE1lida: esperado ${h.B7(t.values[0])}`
                  : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Muito grande: esperado que ${t.origin ?? "valor"} tivesse ${o}${t.maximum.toString()} ${f.unit ?? "elementos"}`
                  : `Muito grande: esperado que ${t.origin ?? "valor"} fosse ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Muito pequeno: esperado que ${t.origin} tivesse ${o}${t.minimum.toString()} ${f.unit}`
                  : `Muito pequeno: esperado que ${t.origin} fosse ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Texto inv\xE1lido: deve come\xE7ar com "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Texto inv\xE1lido: deve terminar com "${o.suffix}"`
                    : o.format === "includes"
                      ? `Texto inv\xE1lido: deve incluir "${o.includes}"`
                      : o.format === "regex"
                        ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${o.pattern}`
                        : `${C[o.format] ?? t.format} inv\xE1lido`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${t.divisor}`;
              case "unrecognized_keys":
                return `Chave${t.keys.length > 1 ? "s" : ""} desconhecida${t.keys.length > 1 ? "s" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Chave inv\xE1lida em ${t.origin}`;
              case "invalid_union":
                return "Entrada inv\xE1lida";
              case "invalid_element":
                return `Valor inv\xE1lido em ${t.origin}`;
              default:
                return "Campo inv\xE1lido";
            }
          };
        };
        function $r() {
          return { localeError: ki() };
        }
        const _r = () => {
          const A = {
            string: { unit: "caractere", verb: "s\u0103 aib\u0103" },
            file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" },
            array: { unit: "elemente", verb: "s\u0103 aib\u0103" },
            set: { unit: "elemente", verb: "s\u0103 aib\u0103" },
            map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "intrare",
              email: "adres\u0103 de email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "dat\u0103 \u0219i or\u0103 ISO",
              date: "dat\u0103 ISO",
              time: "or\u0103 ISO",
              duration: "durat\u0103 ISO",
              ipv4: "adres\u0103 IPv4",
              ipv6: "adres\u0103 IPv6",
              mac: "adres\u0103 MAC",
              cidrv4: "interval IPv4",
              cidrv6: "interval IPv6",
              base64: "\u0219ir codat base64",
              base64url: "\u0219ir codat base64url",
              json_string: "\u0219ir JSON",
              e164: "num\u0103r E.164",
              jwt: "JWT",
              template_literal: "intrare",
            },
            P = {
              nan: "NaN",
              string: "\u0219ir",
              number: "num\u0103r",
              boolean: "boolean",
              function: "func\u021Bie",
              array: "matrice",
              object: "obiect",
              undefined: "nedefinit",
              symbol: "simbol",
              bigint: "num\u0103r mare",
              void: "void",
              never: "never",
              map: "hart\u0103",
              set: "set",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return `Intrare invalid\u0103: a\u0219teptat ${o}, primit ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Intrare invalid\u0103: a\u0219teptat ${h.B7(t.values[0])}`
                  : `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Prea mare: a\u0219teptat ca ${t.origin ?? "valoarea"} ${f.verb} ${o}${t.maximum.toString()} ${f.unit ?? "elemente"}`
                  : `Prea mare: a\u0219teptat ca ${t.origin ?? "valoarea"} s\u0103 fie ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Prea mic: a\u0219teptat ca ${t.origin} ${f.verb} ${o}${t.minimum.toString()} ${f.unit}`
                  : `Prea mic: a\u0219teptat ca ${t.origin} s\u0103 fie ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u0218ir invalid: trebuie s\u0103 se termine cu "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${o.pattern}`
                        : `Format invalid: ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${t.divisor}`;
              case "unrecognized_keys":
                return `Chei nerecunoscute: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Cheie invalid\u0103 \xEEn ${t.origin}`;
              case "invalid_union":
                return "Intrare invalid\u0103";
              case "invalid_element":
                return `Valoare invalid\u0103 \xEEn ${t.origin}`;
              default:
                return "Intrare invalid\u0103";
            }
          };
        };
        function Ir() {
          return { localeError: _r() };
        }
        function Vn(A, N, C, P) {
          const t = Math.abs(A),
            o = t % 10,
            f = t % 100;
          return f >= 11 && f <= 19
            ? P
            : o === 1
              ? N
              : o >= 2 && o <= 4
                ? C
                : P;
        }
        const Ut = () => {
          const A = {
            string: {
              unit: {
                one: "\u0441\u0438\u043C\u0432\u043E\u043B",
                few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
                many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            file: {
              unit: {
                one: "\u0431\u0430\u0439\u0442",
                few: "\u0431\u0430\u0439\u0442\u0430",
                many: "\u0431\u0430\u0439\u0442",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            array: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            set: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0432\u0432\u043E\u0434",
              email: "email \u0430\u0434\u0440\u0435\u0441",
              url: "URL",
              emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0432\u0440\u0435\u043C\u044F",
              duration:
                "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
              cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              base64:
                "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
              base64url:
                "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
              json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
              e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
              jwt: "JWT",
              template_literal: "\u0432\u0432\u043E\u0434",
            },
            P = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0441\u0438\u0432",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${t.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${w}`
                  : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${o}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${h.B7(t.values[0])}`
                  : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                if (f) {
                  const w = Number(t.maximum),
                    $e = Vn(w, f.unit.one, f.unit.few, f.unit.many);
                  return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${t.maximum.toString()} ${$e}`;
                }
                return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                if (f) {
                  const w = Number(t.minimum),
                    $e = Vn(w, f.unit.one, f.unit.few, f.unit.many);
                  return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${o}${t.minimum.toString()} ${$e}`;
                }
                return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${t.origin} \u0431\u0443\u0434\u0435\u0442 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${o.includes}"`
                      : o.format === "regex"
                        ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                        : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${t.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${t.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0438" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${t.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
              case "invalid_element":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${t.origin}`;
              default:
                return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
            }
          };
        };
        function wi() {
          return { localeError: Ut() };
        }
        const xr = () => {
          const A = {
            string: { unit: "znakov", verb: "imeti" },
            file: { unit: "bajtov", verb: "imeti" },
            array: { unit: "elementov", verb: "imeti" },
            set: { unit: "elementov", verb: "imeti" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "vnos",
              email: "e-po\u0161tni naslov",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO datum in \u010Das",
              date: "ISO datum",
              time: "ISO \u010Das",
              duration: "ISO trajanje",
              ipv4: "IPv4 naslov",
              ipv6: "IPv6 naslov",
              cidrv4: "obseg IPv4",
              cidrv6: "obseg IPv6",
              base64: "base64 kodiran niz",
              base64url: "base64url kodiran niz",
              json_string: "JSON niz",
              e164: "E.164 \u0161tevilka",
              jwt: "JWT",
              template_literal: "vnos",
            },
            P = { nan: "NaN", number: "\u0161tevilo", array: "tabela" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Neveljaven vnos: pri\u010Dakovano instanceof ${t.expected}, prejeto ${w}`
                  : `Neveljaven vnos: pri\u010Dakovano ${o}, prejeto ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Neveljaven vnos: pri\u010Dakovano ${h.B7(t.values[0])}`
                  : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} imelo ${o}${t.maximum.toString()} ${f.unit ?? "elementov"}`
                  : `Preveliko: pri\u010Dakovano, da bo ${t.origin ?? "vrednost"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Premajhno: pri\u010Dakovano, da bo ${t.origin} imelo ${o}${t.minimum.toString()} ${f.unit}`
                  : `Premajhno: pri\u010Dakovano, da bo ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Neveljaven niz: mora se za\u010Deti z "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Neveljaven niz: mora se kon\u010Dati z "${o.suffix}"`
                    : o.format === "includes"
                      ? `Neveljaven niz: mora vsebovati "${o.includes}"`
                      : o.format === "regex"
                        ? `Neveljaven niz: mora ustrezati vzorcu ${o.pattern}`
                        : `Neveljaven ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${t.divisor}`;
              case "unrecognized_keys":
                return `Neprepoznan${t.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Neveljaven klju\u010D v ${t.origin}`;
              case "invalid_union":
                return "Neveljaven vnos";
              case "invalid_element":
                return `Neveljavna vrednost v ${t.origin}`;
              default:
                return "Neveljaven vnos";
            }
          };
        };
        function it() {
          return { localeError: xr() };
        }
        const Sr = () => {
          const A = {
            string: { unit: "tecken", verb: "att ha" },
            file: { unit: "bytes", verb: "att ha" },
            array: { unit: "objekt", verb: "att inneh\xE5lla" },
            set: { unit: "objekt", verb: "att inneh\xE5lla" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "regulj\xE4rt uttryck",
              email: "e-postadress",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO-datum och tid",
              date: "ISO-datum",
              time: "ISO-tid",
              duration: "ISO-varaktighet",
              ipv4: "IPv4-intervall",
              ipv6: "IPv6-intervall",
              cidrv4: "IPv4-spektrum",
              cidrv6: "IPv6-spektrum",
              base64: "base64-kodad str\xE4ng",
              base64url: "base64url-kodad str\xE4ng",
              json_string: "JSON-str\xE4ng",
              e164: "E.164-nummer",
              jwt: "JWT",
              template_literal: "mall-literal",
            },
            P = { nan: "NaN", number: "antal", array: "lista" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${t.expected}, fick ${w}`
                  : `Ogiltig inmatning: f\xF6rv\xE4ntat ${o}, fick ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${h.B7(t.values[0])}`
                  : `Ogiltigt val: f\xF6rv\xE4ntade en av ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.maximum.toString()} ${f.unit ?? "element"}`
                  : `F\xF6r stor(t): f\xF6rv\xE4ntat ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.minimum.toString()} ${f.unit}`
                  : `F\xF6r lite(t): f\xF6rv\xE4ntade ${t.origin ?? "v\xE4rdet"} att ha ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${o.suffix}"`
                    : o.format === "includes"
                      ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${o.includes}"`
                      : o.format === "regex"
                        ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${o.pattern}"`
                        : `Ogiltig(t) ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ogiltigt tal: m\xE5ste vara en multipel av ${t.divisor}`;
              case "unrecognized_keys":
                return `${t.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Ogiltig nyckel i ${t.origin ?? "v\xE4rdet"}`;
              case "invalid_union":
                return "Ogiltig input";
              case "invalid_element":
                return `Ogiltigt v\xE4rde i ${t.origin ?? "v\xE4rdet"}`;
              default:
                return "Ogiltig input";
            }
          };
        };
        function Be() {
          return { localeError: Sr() };
        }
        const kr = () => {
          const A = {
            string: {
              unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            file: {
              unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            array: {
              unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            set: {
              unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
              email:
                "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
              date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
              time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
              duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
              ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
              ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
              cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
              cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
              base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
              base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
              json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
              e164: "E.164 \u0B8E\u0BA3\u0BCD",
              jwt: "JWT",
              template_literal: "input",
            },
            P = {
              nan: "NaN",
              number: "\u0B8E\u0BA3\u0BCD",
              array: "\u0B85\u0BA3\u0BBF",
              null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${t.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${w}`
                  : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${o}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${h.B7(t.values[0])}`
                  : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${h.jw(t.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${t.maximum.toString()} ${f.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${o}${t.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${o}${t.minimum.toString()} ${f.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${t.origin} ${o}${t.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : o.format === "ends_with"
                    ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                    : o.format === "includes"
                      ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${o.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                      : o.format === "regex"
                        ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${o.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                        : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${t.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              case "unrecognized_keys":
                return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${t.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
              case "invalid_union":
                return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
              case "invalid_element":
                return `${t.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
              default:
                return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
            }
          };
        };
        function wr() {
          return { localeError: kr() };
        }
        const Xt = () => {
          const A = {
            string: {
              unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            file: {
              unit: "\u0E44\u0E1A\u0E15\u0E4C",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            array: {
              unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            set: {
              unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex:
                "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
              email:
                "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
              url: "URL",
              emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
              time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              duration:
                "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
              ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
              cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
              cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
              base64:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
              base64url:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
              json_string:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
              e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
              jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
              template_literal:
                "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
            },
            P = {
              nan: "NaN",
              number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
              array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
              null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${t.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${w}`
                  : `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${o} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${h.B7(t.values[0])}`
                  : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive
                    ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
                    : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
                  f = N(t.origin);
                return f
                  ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.maximum.toString()} ${f.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
                  : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive
                    ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
                    : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
                  f = N(t.origin);
                return f
                  ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.minimum.toString()} ${f.unit}`
                  : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${t.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${o} ${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${o.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
                      : o.format === "regex"
                        ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${o.pattern}`
                        : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${t.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
              case "unrecognized_keys":
                return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
              case "invalid_union":
                return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
              case "invalid_element":
                return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${t.origin}`;
              default:
                return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
            }
          };
        };
        function L() {
          return { localeError: Xt() };
        }
        const zr = () => {
          const A = {
            string: { unit: "karakter", verb: "olmal\u0131" },
            file: { unit: "bayt", verb: "olmal\u0131" },
            array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
            set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "girdi",
              email: "e-posta adresi",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO tarih ve saat",
              date: "ISO tarih",
              time: "ISO saat",
              duration: "ISO s\xFCre",
              ipv4: "IPv4 adresi",
              ipv6: "IPv6 adresi",
              cidrv4: "IPv4 aral\u0131\u011F\u0131",
              cidrv6: "IPv6 aral\u0131\u011F\u0131",
              base64: "base64 ile \u015Fifrelenmi\u015F metin",
              base64url: "base64url ile \u015Fifrelenmi\u015F metin",
              json_string: "JSON dizesi",
              e164: "E.164 say\u0131s\u0131",
              jwt: "JWT",
              template_literal: "\u015Eablon dizesi",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${t.expected}, al\u0131nan ${w}`
                  : `Ge\xE7ersiz de\u011Fer: beklenen ${o}, al\u0131nan ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Ge\xE7ersiz de\u011Fer: beklenen ${h.B7(t.values[0])}`
                  : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\xC7ok b\xFCy\xFCk: beklenen ${t.origin ?? "de\u011Fer"} ${o}${t.maximum.toString()} ${f.unit ?? "\xF6\u011Fe"}`
                  : `\xC7ok b\xFCy\xFCk: beklenen ${t.origin ?? "de\u011Fer"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${t.origin} ${o}${t.minimum.toString()} ${f.unit}`
                  : `\xC7ok k\xFC\xE7\xFCk: beklenen ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Ge\xE7ersiz metin: "${o.prefix}" ile ba\u015Flamal\u0131`
                  : o.format === "ends_with"
                    ? `Ge\xE7ersiz metin: "${o.suffix}" ile bitmeli`
                    : o.format === "includes"
                      ? `Ge\xE7ersiz metin: "${o.includes}" i\xE7ermeli`
                      : o.format === "regex"
                        ? `Ge\xE7ersiz metin: ${o.pattern} desenine uymal\u0131`
                        : `Ge\xE7ersiz ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Ge\xE7ersiz say\u0131: ${t.divisor} ile tam b\xF6l\xFCnebilmeli`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan anahtar${t.keys.length > 1 ? "lar" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} i\xE7inde ge\xE7ersiz anahtar`;
              case "invalid_union":
                return "Ge\xE7ersiz de\u011Fer";
              case "invalid_element":
                return `${t.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
              default:
                return "Ge\xE7ersiz de\u011Fer";
            }
          };
        };
        function Dr() {
          return { localeError: zr() };
        }
        const At = () => {
          const A = {
            string: {
              unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            file: {
              unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            array: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            set: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex:
                "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
              email:
                "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime:
                "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
              date: "\u0434\u0430\u0442\u0430 ISO",
              time: "\u0447\u0430\u0441 ISO",
              duration:
                "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
              ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
              ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
              cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
              cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
              base64:
                "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
              base64url:
                "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
              json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
              e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
              jwt: "JWT",
              template_literal:
                "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
            },
            P = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0438\u0432",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${t.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${w}`
                  : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${o}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${h.B7(t.values[0])}`
                  : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${f.verb} ${o}${t.maximum.toString()} ${f.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
                  : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} ${f.verb} ${o}${t.minimum.toString()} ${f.unit}`
                  : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${t.origin} \u0431\u0443\u0434\u0435 ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${o.includes}"`
                      : o.format === "regex"
                        ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${o.pattern}`
                        : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${t.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${t.keys.length > 1 ? "\u0456" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${t.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
              case "invalid_element":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${t.origin}`;
              default:
                return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
            }
          };
        };
        function gn() {
          return { localeError: At() };
        }
        function Ae() {
          return gn();
        }
        const Kn = () => {
          const A = {
            string: {
              unit: "\u062D\u0631\u0648\u0641",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            file: {
              unit: "\u0628\u0627\u0626\u0679\u0633",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            array: {
              unit: "\u0622\u0626\u0679\u0645\u0632",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            set: {
              unit: "\u0622\u0626\u0679\u0645\u0632",
              verb: "\u06C1\u0648\u0646\u0627",
            },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0627\u0646 \u067E\u0679",
              email:
                "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
              uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              uuidv4:
                "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
              uuidv6:
                "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
              nanoid:
                "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              cuid2:
                "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
              ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
              xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
              ksuid:
                "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              datetime:
                "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
              date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
              time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
              duration:
                "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
              ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              cidrv4:
                "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
              cidrv6:
                "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
              base64:
                "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
              base64url:
                "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
              json_string:
                "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
              e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
              jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
              template_literal: "\u0627\u0646 \u067E\u0679",
            },
            P = {
              nan: "NaN",
              number: "\u0646\u0645\u0628\u0631",
              array: "\u0622\u0631\u06D2",
              null: "\u0646\u0644",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${t.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${w} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`
                  : `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${o} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${w} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${h.B7(t.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
                  : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${h.jw(t.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${o}${t.maximum.toString()} ${f.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
                  : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${t.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${o}${t.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u06D2 ${o}${t.minimum.toString()} ${f.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
                  : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${t.origin} \u06A9\u0627 ${o}${t.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                  : o.format === "ends_with"
                    ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                    : o.format === "includes"
                      ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${o.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                      : o.format === "regex"
                        ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${o.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                        : `\u063A\u0644\u0637 ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${t.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
              case "unrecognized_keys":
                return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${t.keys.length > 1 ? "\u0632" : ""}: ${h.jw(t.keys, "\u060C ")}`;
              case "invalid_key":
                return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
              case "invalid_union":
                return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
              case "invalid_element":
                return `${t.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
              default:
                return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
            }
          };
        };
        function Pr() {
          return { localeError: Kn() };
        }
        const Or = () => {
          const A = {
            string: { unit: "belgi", verb: "bo\u2018lishi kerak" },
            file: { unit: "bayt", verb: "bo\u2018lishi kerak" },
            array: { unit: "element", verb: "bo\u2018lishi kerak" },
            set: { unit: "element", verb: "bo\u2018lishi kerak" },
            map: { unit: "yozuv", verb: "bo\u2018lishi kerak" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "kirish",
              email: "elektron pochta manzili",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO sana va vaqti",
              date: "ISO sana",
              time: "ISO vaqt",
              duration: "ISO davomiylik",
              ipv4: "IPv4 manzil",
              ipv6: "IPv6 manzil",
              mac: "MAC manzil",
              cidrv4: "IPv4 diapazon",
              cidrv6: "IPv6 diapazon",
              base64: "base64 kodlangan satr",
              base64url: "base64url kodlangan satr",
              json_string: "JSON satr",
              e164: "E.164 raqam",
              jwt: "JWT",
              template_literal: "kirish",
            },
            P = { nan: "NaN", number: "raqam", array: "massiv" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${t.expected}, qabul qilingan ${w}`
                  : `Noto\u2018g\u2018ri kirish: kutilgan ${o}, qabul qilingan ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `Noto\u2018g\u2018ri kirish: kutilgan ${h.B7(t.values[0])}`
                  : `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Juda katta: kutilgan ${t.origin ?? "qiymat"} ${o}${t.maximum.toString()} ${f.unit} ${f.verb}`
                  : `Juda katta: kutilgan ${t.origin ?? "qiymat"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Juda kichik: kutilgan ${t.origin} ${o}${t.minimum.toString()} ${f.unit} ${f.verb}`
                  : `Juda kichik: kutilgan ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Noto\u2018g\u2018ri satr: "${o.prefix}" bilan boshlanishi kerak`
                  : o.format === "ends_with"
                    ? `Noto\u2018g\u2018ri satr: "${o.suffix}" bilan tugashi kerak`
                    : o.format === "includes"
                      ? `Noto\u2018g\u2018ri satr: "${o.includes}" ni o\u2018z ichiga olishi kerak`
                      : o.format === "regex"
                        ? `Noto\u2018g\u2018ri satr: ${o.pattern} shabloniga mos kelishi kerak`
                        : `Noto\u2018g\u2018ri ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `Noto\u2018g\u2018ri raqam: ${t.divisor} ning karralisi bo\u2018lishi kerak`;
              case "unrecognized_keys":
                return `Noma\u2019lum kalit${t.keys.length > 1 ? "lar" : ""}: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} dagi kalit noto\u2018g\u2018ri`;
              case "invalid_union":
                return "Noto\u2018g\u2018ri kirish";
              case "invalid_element":
                return `${t.origin} da noto\u2018g\u2018ri qiymat`;
              default:
                return "Noto\u2018g\u2018ri kirish";
            }
          };
        };
        function zi() {
          return { localeError: Or() };
        }
        const ea = () => {
          const A = {
            string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" },
            file: { unit: "byte", verb: "c\xF3" },
            array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
            set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u0111\u1EA7u v\xE0o",
              email: "\u0111\u1ECBa ch\u1EC9 email",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ng\xE0y gi\u1EDD ISO",
              date: "ng\xE0y ISO",
              time: "gi\u1EDD ISO",
              duration: "kho\u1EA3ng th\u1EDDi gian ISO",
              ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
              ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
              cidrv4: "d\u1EA3i IPv4",
              cidrv6: "d\u1EA3i IPv6",
              base64: "chu\u1ED7i m\xE3 h\xF3a base64",
              base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
              json_string: "chu\u1ED7i JSON",
              e164: "s\u1ED1 E.164",
              jwt: "JWT",
              template_literal: "\u0111\u1EA7u v\xE0o",
            },
            P = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${t.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${w}`
                  : `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${o}, nh\u1EADn \u0111\u01B0\u1EE3c ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${h.B7(t.values[0])}`
                  : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${f.verb} ${o}${t.maximum.toString()} ${f.unit ?? "ph\u1EA7n t\u1EED"}`
                  : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${t.origin ?? "gi\xE1 tr\u1ECB"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${f.verb} ${o}${t.minimum.toString()} ${f.unit}`
                  : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${o.suffix}"`
                    : o.format === "includes"
                      ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${o.includes}"`
                      : o.format === "regex"
                        ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${o.pattern}`
                        : `${C[o.format] ?? t.format} kh\xF4ng h\u1EE3p l\u1EC7`;
              }
              case "not_multiple_of":
                return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${t.divisor}`;
              case "unrecognized_keys":
                return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
              case "invalid_union":
                return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
              case "invalid_element":
                return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${t.origin}`;
              default:
                return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
            }
          };
        };
        function lt() {
          return { localeError: ea() };
        }
        const we = () => {
          const A = {
            string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" },
            file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" },
            array: { unit: "\u9879", verb: "\u5305\u542B" },
            set: { unit: "\u9879", verb: "\u5305\u542B" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u8F93\u5165",
              email: "\u7535\u5B50\u90AE\u4EF6",
              url: "URL",
              emoji: "\u8868\u60C5\u7B26\u53F7",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO\u65E5\u671F\u65F6\u95F4",
              date: "ISO\u65E5\u671F",
              time: "ISO\u65F6\u95F4",
              duration: "ISO\u65F6\u957F",
              ipv4: "IPv4\u5730\u5740",
              ipv6: "IPv6\u5730\u5740",
              cidrv4: "IPv4\u7F51\u6BB5",
              cidrv6: "IPv6\u7F51\u6BB5",
              base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
              base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
              json_string: "JSON\u5B57\u7B26\u4E32",
              e164: "E.164\u53F7\u7801",
              jwt: "JWT",
              template_literal: "\u8F93\u5165",
            },
            P = {
              nan: "NaN",
              number: "\u6570\u5B57",
              array: "\u6570\u7EC4",
              null: "\u7A7A\u503C(null)",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${t.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${w}`
                  : `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${o}\uFF0C\u5B9E\u9645\u63A5\u6536 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${h.B7(t.values[0])}`
                  : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${o}${t.maximum.toString()} ${f.unit ?? "\u4E2A\u5143\u7D20"}`
                  : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${t.origin ?? "\u503C"} ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${o}${t.minimum.toString()} ${f.unit}`
                  : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${t.origin} ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.prefix}" \u5F00\u5934`
                  : o.format === "ends_with"
                    ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${o.suffix}" \u7ED3\u5C3E`
                    : o.format === "includes"
                      ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${o.includes}"`
                      : o.format === "regex"
                        ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${o.pattern}`
                        : `\u65E0\u6548${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${t.divisor} \u7684\u500D\u6570`;
              case "unrecognized_keys":
                return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `${t.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
              case "invalid_union":
                return "\u65E0\u6548\u8F93\u5165";
              case "invalid_element":
                return `${t.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
              default:
                return "\u65E0\u6548\u8F93\u5165";
            }
          };
        };
        function xe() {
          return { localeError: we() };
        }
        const Fe = () => {
          const A = {
            string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" },
            file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" },
            array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
            set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u8F38\u5165",
              email: "\u90F5\u4EF6\u5730\u5740",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "ISO \u65E5\u671F\u6642\u9593",
              date: "ISO \u65E5\u671F",
              time: "ISO \u6642\u9593",
              duration: "ISO \u671F\u9593",
              ipv4: "IPv4 \u4F4D\u5740",
              ipv6: "IPv6 \u4F4D\u5740",
              cidrv4: "IPv4 \u7BC4\u570D",
              cidrv6: "IPv6 \u7BC4\u570D",
              base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
              base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
              json_string: "JSON \u5B57\u4E32",
              e164: "E.164 \u6578\u503C",
              jwt: "JWT",
              template_literal: "\u8F38\u5165",
            },
            P = { nan: "NaN" };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${t.expected}\uFF0C\u4F46\u6536\u5230 ${w}`
                  : `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${o}\uFF0C\u4F46\u6536\u5230 ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${h.B7(t.values[0])}`
                  : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${o}${t.maximum.toString()} ${f.unit ?? "\u500B\u5143\u7D20"}`
                  : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${t.origin ?? "\u503C"} \u61C9\u70BA ${o}${t.maximum.toString()}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${o}${t.minimum.toString()} ${f.unit}`
                  : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${t.origin} \u61C9\u70BA ${o}${t.minimum.toString()}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.prefix}" \u958B\u982D`
                  : o.format === "ends_with"
                    ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${o.suffix}" \u7D50\u5C3E`
                    : o.format === "includes"
                      ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${o.includes}"`
                      : o.format === "regex"
                        ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${o.pattern}`
                        : `\u7121\u6548\u7684 ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${t.divisor} \u7684\u500D\u6578`;
              case "unrecognized_keys":
                return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${t.keys.length > 1 ? "\u5011" : ""}\uFF1A${h.jw(t.keys, "\u3001")}`;
              case "invalid_key":
                return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
              case "invalid_union":
                return "\u7121\u6548\u7684\u8F38\u5165\u503C";
              case "invalid_element":
                return `${t.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
              default:
                return "\u7121\u6548\u7684\u8F38\u5165\u503C";
            }
          };
        };
        function He() {
          return { localeError: Fe() };
        }
        const bt = () => {
          const A = {
            string: { unit: "\xE0mi", verb: "n\xED" },
            file: { unit: "bytes", verb: "n\xED" },
            array: { unit: "nkan", verb: "n\xED" },
            set: { unit: "nkan", verb: "n\xED" },
          };
          function N(t) {
            return A[t] ?? null;
          }
          const C = {
              regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
              email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
              url: "URL",
              emoji: "emoji",
              uuid: "UUID",
              uuidv4: "UUIDv4",
              uuidv6: "UUIDv6",
              nanoid: "nanoid",
              guid: "GUID",
              cuid: "cuid",
              cuid2: "cuid2",
              ulid: "ULID",
              xid: "XID",
              ksuid: "KSUID",
              datetime: "\xE0k\xF3k\xF2 ISO",
              date: "\u1ECDj\u1ECD\u0301 ISO",
              time: "\xE0k\xF3k\xF2 ISO",
              duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
              ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
              ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
              cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
              cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
              base64:
                "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
              base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
              json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
              e164: "n\u1ECD\u0301mb\xE0 E.164",
              jwt: "JWT",
              template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
            },
            P = {
              nan: "NaN",
              number: "n\u1ECD\u0301mb\xE0",
              array: "akop\u1ECD",
            };
          return (t) => {
            switch (t.code) {
              case "invalid_type": {
                const o = P[t.expected] ?? t.expected,
                  f = h.GW(t.input),
                  w = P[f] ?? f;
                return /^[A-Z]/.test(t.expected)
                  ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${t.expected}, \xE0m\u1ECD\u0300 a r\xED ${w}`
                  : `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${o}, \xE0m\u1ECD\u0300 a r\xED ${w}`;
              }
              case "invalid_value":
                return t.values.length === 1
                  ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${h.B7(t.values[0])}`
                  : `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${h.jw(t.values, "|")}`;
              case "too_big": {
                const o = t.inclusive ? "<=" : "<",
                  f = N(t.origin);
                return f
                  ? `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${t.origin ?? "iye"} ${f.verb} ${o}${t.maximum} ${f.unit}`
                  : `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${o}${t.maximum}`;
              }
              case "too_small": {
                const o = t.inclusive ? ">=" : ">",
                  f = N(t.origin);
                return f
                  ? `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${t.origin} ${f.verb} ${o}${t.minimum} ${f.unit}`
                  : `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${o}${t.minimum}`;
              }
              case "invalid_format": {
                const o = t;
                return o.format === "starts_with"
                  ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${o.prefix}"`
                  : o.format === "ends_with"
                    ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${o.suffix}"`
                    : o.format === "includes"
                      ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${o.includes}"`
                      : o.format === "regex"
                        ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${o.pattern}`
                        : `A\u1E63\xEC\u1E63e: ${C[o.format] ?? t.format}`;
              }
              case "not_multiple_of":
                return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${t.divisor}`;
              case "unrecognized_keys":
                return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${h.jw(t.keys, ", ")}`;
              case "invalid_key":
                return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${t.origin}`;
              case "invalid_union":
                return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
              case "invalid_element":
                return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${t.origin}`;
              default:
                return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
            }
          };
        };
        function Qe() {
          return { localeError: bt() };
        }
      },
    },
  ]);
})();
