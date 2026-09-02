/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [1784],
    {
      121: (ge, Z, P) => {
        P.d(Z, { JY: () => Os, sx: () => Du, gL: () => ca });
        var m = P(90626),
          j = P(42891),
          C = P(58584),
          B = P(3998),
          N = m.createContext(null);
        const k = null;
        function F(e) {
          e();
        }
        var ne = F,
          me = function (r) {
            return (ne = r);
          },
          Ne = function () {
            return ne;
          };
        function be() {
          var e = Ne(),
            r = null,
            t = null;
          return {
            clear: function () {
              (r = null), (t = null);
            },
            notify: function () {
              e(function () {
                for (var a = r; a; ) a.callback(), (a = a.next);
              });
            },
            get: function () {
              for (var a = [], i = r; i; ) a.push(i), (i = i.next);
              return a;
            },
            subscribe: function (a) {
              var i = !0,
                o = (t = { callback: a, next: null, prev: t });
              return (
                o.prev ? (o.prev.next = o) : (r = o),
                function () {
                  !i ||
                    r === null ||
                    ((i = !1),
                    o.next ? (o.next.prev = o.prev) : (t = o.prev),
                    o.prev ? (o.prev.next = o.next) : (r = o.next));
                }
              );
            },
          };
        }
        var se = {
          notify: function () {},
          get: function () {
            return [];
          },
        };
        function Me(e, r) {
          var t,
            n = se;
          function a(c) {
            return s(), n.subscribe(c);
          }
          function i() {
            n.notify();
          }
          function o() {
            d.onStateChange && d.onStateChange();
          }
          function l() {
            return !!t;
          }
          function s() {
            t || ((t = r ? r.addNestedSub(o) : e.subscribe(o)), (n = be()));
          }
          function f() {
            t && (t(), (t = void 0), n.clear(), (n = se));
          }
          var d = {
            addNestedSub: a,
            notifyNestedSubs: i,
            handleChangeWrapper: o,
            isSubscribed: l,
            trySubscribe: s,
            tryUnsubscribe: f,
            getListeners: function () {
              return n;
            },
          };
          return d;
        }
        var Le =
          typeof window < "u" &&
          typeof window.document < "u" &&
          typeof window.document.createElement < "u"
            ? m.useLayoutEffect
            : m.useEffect;
        function ar(e) {
          var r = e.store,
            t = e.context,
            n = e.children,
            a = (0, m.useMemo)(
              function () {
                var l = Me(r);
                return { store: r, subscription: l };
              },
              [r],
            ),
            i = (0, m.useMemo)(
              function () {
                return r.getState();
              },
              [r],
            );
          Le(
            function () {
              var l = a.subscription;
              return (
                (l.onStateChange = l.notifyNestedSubs),
                l.trySubscribe(),
                i !== r.getState() && l.notifyNestedSubs(),
                function () {
                  l.tryUnsubscribe(), (l.onStateChange = null);
                }
              );
            },
            [a, i],
          );
          var o = t || N;
          return m.createElement(o.Provider, { value: a }, n);
        }
        const ir = ar;
        var he = P(81115),
          U = P(904),
          K = P.n(U),
          Pr = P(44019),
          Rr = [
            "getDisplayName",
            "methodName",
            "renderCountProp",
            "shouldHandleStateChanges",
            "storeKey",
            "withRef",
            "forwardRef",
            "context",
          ],
          Br = ["reactReduxForwardedRef"],
          Or = [],
          Tr = [null, null],
          Et = function (r) {
            try {
              return JSON.stringify(r);
            } catch {
              return String(r);
            }
          };
        function Nr(e, r) {
          var t = e[1];
          return [r.payload, t + 1];
        }
        function or(e, r, t) {
          Le(function () {
            return e.apply(void 0, r);
          }, t);
        }
        function Mr(e, r, t, n, a, i, o) {
          (e.current = n),
            (r.current = a),
            (t.current = !1),
            i.current && ((i.current = null), o());
        }
        function Lr(e, r, t, n, a, i, o, l, s, f) {
          if (e) {
            var d = !1,
              c = null,
              u = function () {
                if (!d) {
                  var g = r.getState(),
                    h,
                    D;
                  try {
                    h = n(g, a.current);
                  } catch (I) {
                    (D = I), (c = I);
                  }
                  D || (c = null),
                    h === i.current
                      ? o.current || s()
                      : ((i.current = h),
                        (l.current = h),
                        (o.current = !0),
                        f({ type: "STORE_UPDATED", payload: { error: D } }));
                }
              };
            (t.onStateChange = u), t.trySubscribe(), u();
            var p = function () {
              if (((d = !0), t.tryUnsubscribe(), (t.onStateChange = null), c))
                throw c;
            };
            return p;
          }
        }
        var w = function () {
          return [null, 0];
        };
        function Fe(e, r) {
          r === void 0 && (r = {});
          var t = r,
            n = t.getDisplayName,
            a =
              n === void 0
                ? function (E) {
                    return "ConnectAdvanced(" + E + ")";
                  }
                : n,
            i = t.methodName,
            o = i === void 0 ? "connectAdvanced" : i,
            l = t.renderCountProp,
            s = l === void 0 ? void 0 : l,
            f = t.shouldHandleStateChanges,
            d = f === void 0 ? !0 : f,
            c = t.storeKey,
            u = c === void 0 ? "store" : c,
            p = t.withRef,
            v = p === void 0 ? !1 : p,
            g = t.forwardRef,
            h = g === void 0 ? !1 : g,
            D = t.context,
            I = D === void 0 ? N : D,
            S = (0, he.A)(t, Rr);
          if (0) var x;
          var A = I;
          return function (R) {
            var L = R.displayName || R.name || "Component",
              O = a(L),
              M = (0, C.A)({}, S, {
                getDisplayName: a,
                methodName: o,
                renderCountProp: s,
                shouldHandleStateChanges: d,
                storeKey: u,
                displayName: O,
                wrappedComponentName: L,
                WrappedComponent: R,
              }),
              W = S.pure;
            function T($) {
              return e($.dispatch, M);
            }
            var re = W
              ? m.useMemo
              : function ($) {
                  return $();
                };
            function te($) {
              var pe = (0, m.useMemo)(
                  function () {
                    var nr = $.reactReduxForwardedRef,
                      At = (0, he.A)($, Br);
                    return [$.context, nr, At];
                  },
                  [$],
                ),
                ie = pe[0],
                rr = pe[1],
                Se = pe[2],
                ve = (0, m.useMemo)(
                  function () {
                    return ie &&
                      ie.Consumer &&
                      (0, Pr.isContextConsumer)(
                        m.createElement(ie.Consumer, null),
                      )
                      ? ie
                      : A;
                  },
                  [ie, A],
                ),
                oe = (0, m.useContext)(ve),
                Ce = !!$.store && !!$.store.getState && !!$.store.dispatch,
                xr = !!oe && !!oe.store,
                le = Ce ? $.store : oe.store,
                tr = (0, m.useMemo)(
                  function () {
                    return T(le);
                  },
                  [le],
                ),
                Sr = (0, m.useMemo)(
                  function () {
                    if (!d) return Tr;
                    var nr = Me(le, Ce ? null : oe.subscription),
                      At = nr.notifyNestedSubs.bind(nr);
                    return [nr, At];
                  },
                  [le, Ce, oe],
                ),
                Te = Sr[0],
                Cr = Sr[1],
                wr = (0, m.useMemo)(
                  function () {
                    return Ce ? oe : (0, C.A)({}, oe, { subscription: Te });
                  },
                  [Ce, oe, Te],
                ),
                da = (0, m.useReducer)(Nr, Or, w),
                Au = da[0],
                Ar = Au[0],
                Eu = da[1];
              if (Ar && Ar.error) throw Ar.error;
              var fa = (0, m.useRef)(),
                St = (0, m.useRef)(Se),
                Er = (0, m.useRef)(),
                pa = (0, m.useRef)(!1),
                Ct = re(
                  function () {
                    return Er.current && Se === St.current
                      ? Er.current
                      : tr(le.getState(), Se);
                  },
                  [le, Ar, Se],
                );
              or(Mr, [St, fa, pa, Se, Ct, Er, Cr]),
                or(Lr, [d, le, Te, tr, St, fa, pa, Er, Cr, Eu], [le, Te, tr]);
              var wt = (0, m.useMemo)(
                  function () {
                    return m.createElement(R, (0, C.A)({}, Ct, { ref: rr }));
                  },
                  [rr, R, Ct],
                ),
                Pu = (0, m.useMemo)(
                  function () {
                    return d
                      ? m.createElement(ve.Provider, { value: wr }, wt)
                      : wt;
                  },
                  [ve, wt, wr],
                );
              return Pu;
            }
            var Q = W ? m.memo(te) : te;
            if (
              ((Q.WrappedComponent = R),
              (Q.displayName = te.displayName = O),
              h)
            ) {
              var ae = m.forwardRef(function (pe, ie) {
                return m.createElement(
                  Q,
                  (0, C.A)({}, pe, { reactReduxForwardedRef: ie }),
                );
              });
              return (
                (ae.displayName = O), (ae.WrappedComponent = R), K()(ae, R)
              );
            }
            return K()(Q, R);
          };
        }
        function Pt(e, r) {
          return e === r
            ? e !== 0 || r !== 0 || 1 / e === 1 / r
            : e !== e && r !== r;
        }
        function Fr(e, r) {
          if (Pt(e, r)) return !0;
          if (
            typeof e != "object" ||
            e === null ||
            typeof r != "object" ||
            r === null
          )
            return !1;
          var t = Object.keys(e),
            n = Object.keys(r);
          if (t.length !== n.length) return !1;
          for (var a = 0; a < t.length; a++)
            if (
              !Object.prototype.hasOwnProperty.call(r, t[a]) ||
              !Pt(e[t[a]], r[t[a]])
            )
              return !1;
          return !0;
        }
        function va(e, r) {
          var t = {},
            n = function (o) {
              var l = e[o];
              typeof l == "function" &&
                (t[o] = function () {
                  return r(l.apply(void 0, arguments));
                });
            };
          for (var a in e) n(a);
          return t;
        }
        function Gr(e) {
          return function (t, n) {
            var a = e(t, n);
            function i() {
              return a;
            }
            return (i.dependsOnOwnProps = !1), i;
          };
        }
        function Rt(e) {
          return e.dependsOnOwnProps !== null && e.dependsOnOwnProps !== void 0
            ? !!e.dependsOnOwnProps
            : e.length !== 1;
        }
        function Bt(e, r) {
          return function (n, a) {
            var i = a.displayName,
              o = function (s, f) {
                return o.dependsOnOwnProps
                  ? o.mapToProps(s, f)
                  : o.mapToProps(s);
              };
            return (
              (o.dependsOnOwnProps = !0),
              (o.mapToProps = function (s, f) {
                (o.mapToProps = e), (o.dependsOnOwnProps = Rt(e));
                var d = o(s, f);
                return (
                  typeof d == "function" &&
                    ((o.mapToProps = d),
                    (o.dependsOnOwnProps = Rt(d)),
                    (d = o(s, f))),
                  d
                );
              }),
              o
            );
          };
        }
        function ga(e) {
          return typeof e == "function" ? Bt(e, "mapDispatchToProps") : void 0;
        }
        function ma(e) {
          return e
            ? void 0
            : Gr(function (r) {
                return { dispatch: r };
              });
        }
        function ba(e) {
          return e && typeof e == "object"
            ? Gr(function (r) {
                return va(e, r);
              })
            : void 0;
        }
        const ha = [ga, ma, ba];
        function ya(e) {
          return typeof e == "function" ? Bt(e, "mapStateToProps") : void 0;
        }
        function Da(e) {
          return e
            ? void 0
            : Gr(function () {
                return {};
              });
        }
        const Ia = [ya, Da];
        function xa(e, r, t) {
          return (0, C.A)({}, t, e, r);
        }
        function Sa(e) {
          return function (t, n) {
            var a = n.displayName,
              i = n.pure,
              o = n.areMergedPropsEqual,
              l = !1,
              s;
            return function (d, c, u) {
              var p = e(d, c, u);
              return l ? (!i || !o(p, s)) && (s = p) : ((l = !0), (s = p)), s;
            };
          };
        }
        function Ca(e) {
          return typeof e == "function" ? Sa(e) : void 0;
        }
        function wa(e) {
          return e
            ? void 0
            : function () {
                return xa;
              };
        }
        const Aa = [Ca, wa];
        var Ea = [
          "initMapStateToProps",
          "initMapDispatchToProps",
          "initMergeProps",
        ];
        function Pa(e, r, t, n) {
          return function (i, o) {
            return t(e(i, o), r(n, o), o);
          };
        }
        function Ra(e, r, t, n, a) {
          var i = a.areStatesEqual,
            o = a.areOwnPropsEqual,
            l = a.areStatePropsEqual,
            s = !1,
            f,
            d,
            c,
            u,
            p;
          function v(S, x) {
            return (
              (f = S),
              (d = x),
              (c = e(f, d)),
              (u = r(n, d)),
              (p = t(c, u, d)),
              (s = !0),
              p
            );
          }
          function g() {
            return (
              (c = e(f, d)),
              r.dependsOnOwnProps && (u = r(n, d)),
              (p = t(c, u, d)),
              p
            );
          }
          function h() {
            return (
              e.dependsOnOwnProps && (c = e(f, d)),
              r.dependsOnOwnProps && (u = r(n, d)),
              (p = t(c, u, d)),
              p
            );
          }
          function D() {
            var S = e(f, d),
              x = !l(S, c);
            return (c = S), x && (p = t(c, u, d)), p;
          }
          function I(S, x) {
            var A = !o(x, d),
              E = !i(S, f, x, d);
            return (f = S), (d = x), A && E ? g() : A ? h() : E ? D() : p;
          }
          return function (x, A) {
            return s ? I(x, A) : v(x, A);
          };
        }
        function Ba(e, r) {
          var t = r.initMapStateToProps,
            n = r.initMapDispatchToProps,
            a = r.initMergeProps,
            i = (0, he.A)(r, Ea),
            o = t(e, i),
            l = n(e, i),
            s = a(e, i),
            f = i.pure ? Ra : Pa;
          return f(o, l, s, e, i);
        }
        var Oa = [
          "pure",
          "areStatesEqual",
          "areOwnPropsEqual",
          "areStatePropsEqual",
          "areMergedPropsEqual",
        ];
        function Wr(e, r, t) {
          for (var n = r.length - 1; n >= 0; n--) {
            var a = r[n](e);
            if (a) return a;
          }
          return function (i, o) {
            throw new Error(
              "Invalid value of type " +
                typeof e +
                " for " +
                t +
                " argument when connecting component " +
                o.wrappedComponentName +
                ".",
            );
          };
        }
        function Ta(e, r) {
          return e === r;
        }
        function Na(e) {
          var r = e === void 0 ? {} : e,
            t = r.connectHOC,
            n = t === void 0 ? Fe : t,
            a = r.mapStateToPropsFactories,
            i = a === void 0 ? Ia : a,
            o = r.mapDispatchToPropsFactories,
            l = o === void 0 ? ha : o,
            s = r.mergePropsFactories,
            f = s === void 0 ? Aa : s,
            d = r.selectorFactory,
            c = d === void 0 ? Ba : d;
          return function (p, v, g, h) {
            h === void 0 && (h = {});
            var D = h,
              I = D.pure,
              S = I === void 0 ? !0 : I,
              x = D.areStatesEqual,
              A = x === void 0 ? Ta : x,
              E = D.areOwnPropsEqual,
              R = E === void 0 ? Fr : E,
              L = D.areStatePropsEqual,
              O = L === void 0 ? Fr : L,
              M = D.areMergedPropsEqual,
              W = M === void 0 ? Fr : M,
              T = (0, he.A)(D, Oa),
              re = Wr(p, i, "mapStateToProps"),
              te = Wr(v, l, "mapDispatchToProps"),
              Q = Wr(g, f, "mergeProps");
            return n(
              c,
              (0, C.A)(
                {
                  methodName: "connect",
                  getDisplayName: function ($) {
                    return "Connect(" + $ + ")";
                  },
                  shouldHandleStateChanges: !!p,
                  initMapStateToProps: re,
                  initMapDispatchToProps: te,
                  initMergeProps: Q,
                  pure: S,
                  areStatesEqual: A,
                  areOwnPropsEqual: R,
                  areStatePropsEqual: O,
                  areMergedPropsEqual: W,
                },
                T,
              ),
            );
          };
        }
        const Ot = Na();
        function Ru() {
          var e = useContext(ReactReduxContext);
          return e;
        }
        function Bu(e) {
          e === void 0 && (e = ReactReduxContext);
          var r =
            e === ReactReduxContext
              ? useDefaultReduxContext
              : function () {
                  return useContext(e);
                };
          return function () {
            var n = r(),
              a = n.store;
            return a;
          };
        }
        var Ou = null;
        function Tu(e) {
          e === void 0 && (e = ReactReduxContext);
          var r =
            e === ReactReduxContext ? useDefaultStore : createStoreHook(e);
          return function () {
            var n = r();
            return n.dispatch;
          };
        }
        var Nu = null,
          Ma = function (r, t) {
            return r === t;
          };
        function La(e, r, t, n) {
          var a = useReducer(function (v) {
              return v + 1;
            }, 0),
            i = a[1],
            o = useMemo(
              function () {
                return createSubscription(t, n);
              },
              [t, n],
            ),
            l = useRef(),
            s = useRef(),
            f = useRef(),
            d = useRef(),
            c = t.getState(),
            u;
          try {
            if (e !== s.current || c !== f.current || l.current) {
              var p = e(c);
              d.current === void 0 || !r(p, d.current)
                ? (u = p)
                : (u = d.current);
            } else u = d.current;
          } catch (v) {
            throw (
              (l.current &&
                (v.message +=
                  `
The error may be correlated with this previous error:
` +
                  l.current.stack +
                  `

`),
              v)
            );
          }
          return (
            useIsomorphicLayoutEffect(function () {
              (s.current = e),
                (f.current = c),
                (d.current = u),
                (l.current = void 0);
            }),
            useIsomorphicLayoutEffect(
              function () {
                function v() {
                  try {
                    var g = t.getState();
                    if (g === f.current) return;
                    var h = s.current(g);
                    if (r(h, d.current)) return;
                    (d.current = h), (f.current = g);
                  } catch (D) {
                    l.current = D;
                  }
                  i();
                }
                return (
                  (o.onStateChange = v),
                  o.trySubscribe(),
                  v(),
                  function () {
                    return o.tryUnsubscribe();
                  }
                );
              },
              [t, o],
            ),
            u
          );
        }
        function Mu(e) {
          e === void 0 && (e = ReactReduxContext);
          var r =
            e === ReactReduxContext
              ? useDefaultReduxContext
              : function () {
                  return useContext(e);
                };
          return function (n, a) {
            a === void 0 && (a = Ma);
            var i = r(),
              o = i.store,
              l = i.subscription,
              s = La(n, a, o, l);
            return useDebugValue(s), s;
          };
        }
        var Lu = null,
          Tt = P(72739);
        me(Tt.unstable_batchedUpdates);
        var y = P(46311),
          G = P(48046),
          Nt =
            Number.isNaN ||
            function (r) {
              return typeof r == "number" && r !== r;
            };
        function Fa(e, r) {
          return !!(e === r || (Nt(e) && Nt(r)));
        }
        function Ga(e, r) {
          if (e.length !== r.length) return !1;
          for (var t = 0; t < e.length; t++) if (!Fa(e[t], r[t])) return !1;
          return !0;
        }
        function Wa(e, r) {
          r === void 0 && (r = Ga);
          var t,
            n = [],
            a,
            i = !1;
          function o() {
            for (var l = [], s = 0; s < arguments.length; s++)
              l[s] = arguments[s];
            return (
              (i && t === this && r(l, n)) ||
                ((a = e.apply(this, l)), (i = !0), (t = this), (n = l)),
              a
            );
          }
          return o;
        }
        const H = Wa;
        var Ge = P(18651),
          ka = !0,
          Ua = /[ \t]{2,}/g,
          Ha = /^[ \t]*/gm,
          Mt = function (r) {
            return r.replace(Ua, " ").replace(Ha, "").trim();
          },
          Va = function (r) {
            return Mt(
              `
  %creact-beautiful-dnd

  %c` +
                Mt(r) +
                `

  %c\u{1F477}\u200D This is a development only message. It will be removed in production builds.
`,
            );
          },
          qa = function (r) {
            return [
              Va(r),
              "color: #00C584; font-size: 1.2em; font-weight: bold;",
              "line-height: 1.5",
              "color: #723874;",
            ];
          },
          $a = "__react-beautiful-dnd-disable-dev-warnings";
        function Lt(e, r) {
          var t;
          ka ||
            (typeof window < "u" && window[$a]) ||
            (t = console)[e].apply(t, qa(r));
        }
        var Fu = Lt.bind(null, "warn"),
          ja = Lt.bind(null, "error");
        function ue() {}
        function za(e, r) {
          return (0, C.A)({}, e, {}, r);
        }
        function _(e, r, t) {
          var n = r.map(function (a) {
            var i = za(t, a.options);
            return (
              e.addEventListener(a.eventName, a.fn, i),
              function () {
                e.removeEventListener(a.eventName, a.fn, i);
              }
            );
          });
          return function () {
            n.forEach(function (i) {
              i();
            });
          };
        }
        var Ka = !0,
          Ft = "Invariant failed";
        function We(e) {
          this.message = e;
        }
        We.prototype.toString = function () {
          return this.message;
        };
        function b(e, r) {
          if (!e) throw Ka ? new We(Ft) : new We(Ft + ": " + (r || ""));
        }
        var Ya = (function (e) {
            (0, j.A)(r, e);
            function r() {
              for (
                var n, a = arguments.length, i = new Array(a), o = 0;
                o < a;
                o++
              )
                i[o] = arguments[o];
              return (
                (n = e.call.apply(e, [this].concat(i)) || this),
                (n.callbacks = null),
                (n.unbind = ue),
                (n.onWindowError = function (l) {
                  var s = n.getCallbacks();
                  s.isDragging() && s.tryAbort();
                  var f = l.error;
                  f instanceof We && l.preventDefault();
                }),
                (n.getCallbacks = function () {
                  if (!n.callbacks)
                    throw new Error(
                      "Unable to find AppCallbacks in <ErrorBoundary/>",
                    );
                  return n.callbacks;
                }),
                (n.setCallbacks = function (l) {
                  n.callbacks = l;
                }),
                n
              );
            }
            var t = r.prototype;
            return (
              (t.componentDidMount = function () {
                this.unbind = _(window, [
                  { eventName: "error", fn: this.onWindowError },
                ]);
              }),
              (t.componentDidCatch = function (a) {
                if (a instanceof We) {
                  this.setState({});
                  return;
                }
                throw a;
              }),
              (t.componentWillUnmount = function () {
                this.unbind();
              }),
              (t.render = function () {
                return this.props.children(this.setCallbacks);
              }),
              r
            );
          })(m.Component),
          Ja = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
          lr = function (r) {
            return r + 1;
          },
          Xa = function (r) {
            return (
              `
  You have lifted an item in position ` +
              lr(r.source.index) +
              `
`
            );
          },
          Gt = function (r, t) {
            var n = r.droppableId === t.droppableId,
              a = lr(r.index),
              i = lr(t.index);
            return n
              ? `
      You have moved the item from position ` +
                  a +
                  `
      to position ` +
                  i +
                  `
    `
              : `
    You have moved the item from position ` +
                  a +
                  `
    in list ` +
                  r.droppableId +
                  `
    to list ` +
                  t.droppableId +
                  `
    in position ` +
                  i +
                  `
  `;
          },
          Wt = function (r, t, n) {
            var a = t.droppableId === n.droppableId;
            return a
              ? `
      The item ` +
                  r +
                  `
      has been combined with ` +
                  n.draggableId
              : `
      The item ` +
                  r +
                  `
      in list ` +
                  t.droppableId +
                  `
      has been combined with ` +
                  n.draggableId +
                  `
      in list ` +
                  n.droppableId +
                  `
    `;
          },
          Qa = function (r) {
            var t = r.destination;
            if (t) return Gt(r.source, t);
            var n = r.combine;
            return n
              ? Wt(r.draggableId, r.source, n)
              : "You are over an area that cannot be dropped on";
          },
          kt = function (r) {
            return (
              `
  The item has returned to its starting position
  of ` +
              lr(r.index) +
              `
`
            );
          },
          Za = function (r) {
            if (r.reason === "CANCEL")
              return (
                `
      Movement cancelled.
      ` +
                kt(r.source) +
                `
    `
              );
            var t = r.destination,
              n = r.combine;
            return t
              ? `
      You have dropped the item.
      ` +
                  Gt(r.source, t) +
                  `
    `
              : n
                ? `
      You have dropped the item.
      ` +
                  Wt(r.draggableId, r.source, n) +
                  `
    `
                : `
    The item has been dropped while not over a drop area.
    ` +
                  kt(r.source) +
                  `
  `;
          },
          sr = {
            dragHandleUsageInstructions: Ja,
            onDragStart: Xa,
            onDragUpdate: Qa,
            onDragEnd: Za,
          },
          V = { x: 0, y: 0 },
          q = function (r, t) {
            return { x: r.x + t.x, y: r.y + t.y };
          },
          Y = function (r, t) {
            return { x: r.x - t.x, y: r.y - t.y };
          },
          ce = function (r, t) {
            return r.x === t.x && r.y === t.y;
          },
          we = function (r) {
            return { x: r.x !== 0 ? -r.x : 0, y: r.y !== 0 ? -r.y : 0 };
          },
          ye = function (r, t, n) {
            var a;
            return (
              n === void 0 && (n = 0),
              (a = {}),
              (a[r] = t),
              (a[r === "x" ? "y" : "x"] = n),
              a
            );
          },
          ke = function (r, t) {
            return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2));
          },
          Ut = function (r, t) {
            return Math.min.apply(
              Math,
              t.map(function (n) {
                return ke(r, n);
              }),
            );
          },
          Ht = function (r) {
            return function (t) {
              return { x: r(t.x), y: r(t.y) };
            };
          },
          _a = function (e, r) {
            var t = (0, G.l)({
              top: Math.max(r.top, e.top),
              right: Math.min(r.right, e.right),
              bottom: Math.min(r.bottom, e.bottom),
              left: Math.max(r.left, e.left),
            });
            return t.width <= 0 || t.height <= 0 ? null : t;
          },
          Ue = function (r, t) {
            return {
              top: r.top + t.y,
              left: r.left + t.x,
              bottom: r.bottom + t.y,
              right: r.right + t.x,
            };
          },
          Vt = function (r) {
            return [
              { x: r.left, y: r.top },
              { x: r.right, y: r.top },
              { x: r.left, y: r.bottom },
              { x: r.right, y: r.bottom },
            ];
          },
          ei = { top: 0, right: 0, bottom: 0, left: 0 },
          ri = function (r, t) {
            return t ? Ue(r, t.scroll.diff.displacement) : r;
          },
          ti = function (r, t, n) {
            if (n && n.increasedBy) {
              var a;
              return (0, C.A)(
                {},
                r,
                ((a = {}), (a[t.end] = r[t.end] + n.increasedBy[t.line]), a),
              );
            }
            return r;
          },
          ni = function (r, t) {
            return t && t.shouldClipSubject
              ? _a(t.pageMarginBox, r)
              : (0, G.l)(r);
          },
          Ae = function (e) {
            var r = e.page,
              t = e.withPlaceholder,
              n = e.axis,
              a = e.frame,
              i = ri(r.marginBox, a),
              o = ti(i, n, t),
              l = ni(o, a);
            return { page: r, withPlaceholder: t, active: l };
          },
          kr = function (e, r) {
            e.frame || b(!1);
            var t = e.frame,
              n = Y(r, t.scroll.initial),
              a = we(n),
              i = (0, C.A)({}, t, {
                scroll: {
                  initial: t.scroll.initial,
                  current: r,
                  diff: { value: n, displacement: a },
                  max: t.scroll.max,
                },
              }),
              o = Ae({
                page: e.subject.page,
                withPlaceholder: e.subject.withPlaceholder,
                axis: e.axis,
                frame: i,
              }),
              l = (0, C.A)({}, e, { frame: i, subject: o });
            return l;
          };
        function ai(e) {
          return Number.isInteger
            ? Number.isInteger(e)
            : typeof e == "number" && isFinite(e) && Math.floor(e) === e;
        }
        function ur(e) {
          return Object.values
            ? Object.values(e)
            : Object.keys(e).map(function (r) {
                return e[r];
              });
        }
        function Ur(e, r) {
          if (e.findIndex) return e.findIndex(r);
          for (var t = 0; t < e.length; t++) if (r(e[t])) return t;
          return -1;
        }
        function De(e, r) {
          if (e.find) return e.find(r);
          var t = Ur(e, r);
          if (t !== -1) return e[t];
        }
        function ii(e) {
          return Array.prototype.slice.call(e);
        }
        var qt = H(function (e) {
            return e.reduce(function (r, t) {
              return (r[t.descriptor.id] = t), r;
            }, {});
          }),
          $t = H(function (e) {
            return e.reduce(function (r, t) {
              return (r[t.descriptor.id] = t), r;
            }, {});
          }),
          cr = H(function (e) {
            return ur(e);
          }),
          oi = H(function (e) {
            return ur(e);
          }),
          Ee = H(function (e, r) {
            var t = oi(r)
              .filter(function (n) {
                return e === n.descriptor.droppableId;
              })
              .sort(function (n, a) {
                return n.descriptor.index - a.descriptor.index;
              });
            return t;
          });
        function Hr(e) {
          return e.at && e.at.type === "REORDER" ? e.at.destination : null;
        }
        function dr(e) {
          return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
        }
        var fr = H(function (e, r) {
            return r.filter(function (t) {
              return t.descriptor.id !== e.descriptor.id;
            });
          }),
          li = function (e) {
            var r = e.isMovingForward,
              t = e.draggable,
              n = e.destination,
              a = e.insideDestination,
              i = e.previousImpact;
            if (!n.isCombineEnabled) return null;
            var o = Hr(i);
            if (!o) return null;
            function l(g) {
              var h = {
                type: "COMBINE",
                combine: { draggableId: g, droppableId: n.descriptor.id },
              };
              return (0, C.A)({}, i, { at: h });
            }
            var s = i.displaced.all,
              f = s.length ? s[0] : null;
            if (r) return f ? l(f) : null;
            var d = fr(t, a);
            if (!f) {
              if (!d.length) return null;
              var c = d[d.length - 1];
              return l(c.descriptor.id);
            }
            var u = Ur(d, function (g) {
              return g.descriptor.id === f;
            });
            u === -1 && b(!1);
            var p = u - 1;
            if (p < 0) return null;
            var v = d[p];
            return l(v.descriptor.id);
          },
          Pe = function (e, r) {
            return e.descriptor.droppableId === r.descriptor.id;
          },
          jt = { point: V, value: 0 },
          He = { invisible: {}, visible: {}, all: [] },
          si = { displaced: He, displacedBy: jt, at: null },
          ee = function (e, r) {
            return function (t) {
              return e <= t && t <= r;
            };
          },
          zt = function (e) {
            var r = ee(e.top, e.bottom),
              t = ee(e.left, e.right);
            return function (n) {
              var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
              if (a) return !0;
              var i = r(n.top) || r(n.bottom),
                o = t(n.left) || t(n.right),
                l = i && o;
              if (l) return !0;
              var s = n.top < e.top && n.bottom > e.bottom,
                f = n.left < e.left && n.right > e.right,
                d = s && f;
              if (d) return !0;
              var c = (s && o) || (f && i);
              return c;
            };
          },
          ui = function (e) {
            var r = ee(e.top, e.bottom),
              t = ee(e.left, e.right);
            return function (n) {
              var a = r(n.top) && r(n.bottom) && t(n.left) && t(n.right);
              return a;
            };
          },
          Vr = {
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
          Kt = {
            direction: "horizontal",
            line: "x",
            crossAxisLine: "y",
            start: "left",
            end: "right",
            size: "width",
            crossAxisStart: "top",
            crossAxisEnd: "bottom",
            crossAxisSize: "height",
          },
          ci = function (e) {
            return function (r) {
              var t = ee(r.top, r.bottom),
                n = ee(r.left, r.right);
              return function (a) {
                return e === Vr
                  ? t(a.top) && t(a.bottom)
                  : n(a.left) && n(a.right);
              };
            };
          },
          di = function (r, t) {
            var n = t.frame ? t.frame.scroll.diff.displacement : V;
            return Ue(r, n);
          },
          fi = function (r, t, n) {
            return t.subject.active ? n(t.subject.active)(r) : !1;
          },
          pi = function (r, t, n) {
            return n(t)(r);
          },
          qr = function (r) {
            var t = r.target,
              n = r.destination,
              a = r.viewport,
              i = r.withDroppableDisplacement,
              o = r.isVisibleThroughFrameFn,
              l = i ? di(t, n) : t;
            return fi(l, n, o) && pi(l, a, o);
          },
          vi = function (r) {
            return qr((0, C.A)({}, r, { isVisibleThroughFrameFn: zt }));
          },
          Yt = function (r) {
            return qr((0, C.A)({}, r, { isVisibleThroughFrameFn: ui }));
          },
          gi = function (r) {
            return qr(
              (0, C.A)({}, r, {
                isVisibleThroughFrameFn: ci(r.destination.axis),
              }),
            );
          },
          mi = function (r, t, n) {
            if (typeof n == "boolean") return n;
            if (!t) return !0;
            var a = t.invisible,
              i = t.visible;
            if (a[r]) return !1;
            var o = i[r];
            return o ? o.shouldAnimate : !0;
          };
        function bi(e, r) {
          var t = e.page.marginBox,
            n = { top: r.point.y, right: 0, bottom: 0, left: r.point.x };
          return (0, G.l)((0, G.fT)(t, n));
        }
        function Ve(e) {
          var r = e.afterDragging,
            t = e.destination,
            n = e.displacedBy,
            a = e.viewport,
            i = e.forceShouldAnimate,
            o = e.last;
          return r.reduce(
            function (s, f) {
              var d = bi(f, n),
                c = f.descriptor.id;
              s.all.push(c);
              var u = vi({
                target: d,
                destination: t,
                viewport: a,
                withDroppableDisplacement: !0,
              });
              if (!u) return (s.invisible[f.descriptor.id] = !0), s;
              var p = mi(c, o, i),
                v = { draggableId: c, shouldAnimate: p };
              return (s.visible[c] = v), s;
            },
            { all: [], visible: {}, invisible: {} },
          );
        }
        function hi(e, r) {
          if (!e.length) return 0;
          var t = e[e.length - 1].descriptor.index;
          return r.inHomeList ? t : t + 1;
        }
        function Jt(e) {
          var r = e.insideDestination,
            t = e.inHomeList,
            n = e.displacedBy,
            a = e.destination,
            i = hi(r, { inHomeList: t });
          return {
            displaced: He,
            displacedBy: n,
            at: {
              type: "REORDER",
              destination: { droppableId: a.descriptor.id, index: i },
            },
          };
        }
        function pr(e) {
          var r = e.draggable,
            t = e.insideDestination,
            n = e.destination,
            a = e.viewport,
            i = e.displacedBy,
            o = e.last,
            l = e.index,
            s = e.forceShouldAnimate,
            f = Pe(r, n);
          if (l == null)
            return Jt({
              insideDestination: t,
              inHomeList: f,
              displacedBy: i,
              destination: n,
            });
          var d = De(t, function (g) {
            return g.descriptor.index === l;
          });
          if (!d)
            return Jt({
              insideDestination: t,
              inHomeList: f,
              displacedBy: i,
              destination: n,
            });
          var c = fr(r, t),
            u = t.indexOf(d),
            p = c.slice(u),
            v = Ve({
              afterDragging: p,
              destination: n,
              displacedBy: i,
              last: o,
              viewport: a.frame,
              forceShouldAnimate: s,
            });
          return {
            displaced: v,
            displacedBy: i,
            at: {
              type: "REORDER",
              destination: { droppableId: n.descriptor.id, index: l },
            },
          };
        }
        function de(e, r) {
          return !!r.effected[e];
        }
        var yi = function (e) {
            var r = e.isMovingForward,
              t = e.destination,
              n = e.draggables,
              a = e.combine,
              i = e.afterCritical;
            if (!t.isCombineEnabled) return null;
            var o = a.draggableId,
              l = n[o],
              s = l.descriptor.index,
              f = de(o, i);
            return f ? (r ? s : s - 1) : r ? s + 1 : s;
          },
          Di = function (e) {
            var r = e.isMovingForward,
              t = e.isInHomeList,
              n = e.insideDestination,
              a = e.location;
            if (!n.length) return null;
            var i = a.index,
              o = r ? i + 1 : i - 1,
              l = n[0].descriptor.index,
              s = n[n.length - 1].descriptor.index,
              f = t ? s : s + 1;
            return o < l || o > f ? null : o;
          },
          Ii = function (e) {
            var r = e.isMovingForward,
              t = e.isInHomeList,
              n = e.draggable,
              a = e.draggables,
              i = e.destination,
              o = e.insideDestination,
              l = e.previousImpact,
              s = e.viewport,
              f = e.afterCritical,
              d = l.at;
            if ((d || b(!1), d.type === "REORDER")) {
              var c = Di({
                isMovingForward: r,
                isInHomeList: t,
                location: d.destination,
                insideDestination: o,
              });
              return c == null
                ? null
                : pr({
                    draggable: n,
                    insideDestination: o,
                    destination: i,
                    viewport: s,
                    last: l.displaced,
                    displacedBy: l.displacedBy,
                    index: c,
                  });
            }
            var u = yi({
              isMovingForward: r,
              destination: i,
              displaced: l.displaced,
              draggables: a,
              combine: d.combine,
              afterCritical: f,
            });
            return u == null
              ? null
              : pr({
                  draggable: n,
                  insideDestination: o,
                  destination: i,
                  viewport: s,
                  last: l.displaced,
                  displacedBy: l.displacedBy,
                  index: u,
                });
          },
          xi = function (e) {
            var r = e.displaced,
              t = e.afterCritical,
              n = e.combineWith,
              a = e.displacedBy,
              i = !!(r.visible[n] || r.invisible[n]);
            return de(n, t) ? (i ? V : we(a.point)) : i ? a.point : V;
          },
          Si = function (e) {
            var r = e.afterCritical,
              t = e.impact,
              n = e.draggables,
              a = dr(t);
            a || b(!1);
            var i = a.draggableId,
              o = n[i].page.borderBox.center,
              l = xi({
                displaced: t.displaced,
                afterCritical: r,
                combineWith: i,
                displacedBy: t.displacedBy,
              });
            return q(o, l);
          },
          Xt = function (r, t) {
            return t.margin[r.start] + t.borderBox[r.size] / 2;
          },
          Ci = function (r, t) {
            return t.margin[r.end] + t.borderBox[r.size] / 2;
          },
          $r = function (r, t, n) {
            return (
              t[r.crossAxisStart] +
              n.margin[r.crossAxisStart] +
              n.borderBox[r.crossAxisSize] / 2
            );
          },
          Qt = function (r) {
            var t = r.axis,
              n = r.moveRelativeTo,
              a = r.isMoving;
            return ye(
              t.line,
              n.marginBox[t.end] + Xt(t, a),
              $r(t, n.marginBox, a),
            );
          },
          Zt = function (r) {
            var t = r.axis,
              n = r.moveRelativeTo,
              a = r.isMoving;
            return ye(
              t.line,
              n.marginBox[t.start] - Ci(t, a),
              $r(t, n.marginBox, a),
            );
          },
          wi = function (r) {
            var t = r.axis,
              n = r.moveInto,
              a = r.isMoving;
            return ye(
              t.line,
              n.contentBox[t.start] + Xt(t, a),
              $r(t, n.contentBox, a),
            );
          },
          Ai = function (e) {
            var r = e.impact,
              t = e.draggable,
              n = e.draggables,
              a = e.droppable,
              i = e.afterCritical,
              o = Ee(a.descriptor.id, n),
              l = t.page,
              s = a.axis;
            if (!o.length)
              return wi({ axis: s, moveInto: a.page, isMoving: l });
            var f = r.displaced,
              d = r.displacedBy,
              c = f.all[0];
            if (c) {
              var u = n[c];
              if (de(c, i))
                return Zt({ axis: s, moveRelativeTo: u.page, isMoving: l });
              var p = (0, G.cY)(u.page, d.point);
              return Zt({ axis: s, moveRelativeTo: p, isMoving: l });
            }
            var v = o[o.length - 1];
            if (v.descriptor.id === t.descriptor.id) return l.borderBox.center;
            if (de(v.descriptor.id, i)) {
              var g = (0, G.cY)(v.page, we(i.displacedBy.point));
              return Qt({ axis: s, moveRelativeTo: g, isMoving: l });
            }
            return Qt({ axis: s, moveRelativeTo: v.page, isMoving: l });
          },
          jr = function (e, r) {
            var t = e.frame;
            return t ? q(r, t.scroll.diff.displacement) : r;
          },
          Ei = function (r) {
            var t = r.impact,
              n = r.draggable,
              a = r.droppable,
              i = r.draggables,
              o = r.afterCritical,
              l = n.page.borderBox.center,
              s = t.at;
            return !a || !s
              ? l
              : s.type === "REORDER"
                ? Ai({
                    impact: t,
                    draggable: n,
                    draggables: i,
                    droppable: a,
                    afterCritical: o,
                  })
                : Si({ impact: t, draggables: i, afterCritical: o });
          },
          vr = function (e) {
            var r = Ei(e),
              t = e.droppable,
              n = t ? jr(t, r) : r;
            return n;
          },
          _t = function (e, r) {
            var t = Y(r, e.scroll.initial),
              n = we(t),
              a = (0, G.l)({
                top: r.y,
                bottom: r.y + e.frame.height,
                left: r.x,
                right: r.x + e.frame.width,
              }),
              i = {
                frame: a,
                scroll: {
                  initial: e.scroll.initial,
                  max: e.scroll.max,
                  current: r,
                  diff: { value: t, displacement: n },
                },
              };
            return i;
          };
        function en(e, r) {
          return e.map(function (t) {
            return r[t];
          });
        }
        function Pi(e, r) {
          for (var t = 0; t < r.length; t++) {
            var n = r[t].visible[e];
            if (n) return n;
          }
          return null;
        }
        var Ri = function (e) {
            var r = e.impact,
              t = e.viewport,
              n = e.destination,
              a = e.draggables,
              i = e.maxScrollChange,
              o = _t(t, q(t.scroll.current, i)),
              l = n.frame ? kr(n, q(n.frame.scroll.current, i)) : n,
              s = r.displaced,
              f = Ve({
                afterDragging: en(s.all, a),
                destination: n,
                displacedBy: r.displacedBy,
                viewport: o.frame,
                last: s,
                forceShouldAnimate: !1,
              }),
              d = Ve({
                afterDragging: en(s.all, a),
                destination: l,
                displacedBy: r.displacedBy,
                viewport: t.frame,
                last: s,
                forceShouldAnimate: !1,
              }),
              c = {},
              u = {},
              p = [s, f, d];
            s.all.forEach(function (g) {
              var h = Pi(g, p);
              if (h) {
                u[g] = h;
                return;
              }
              c[g] = !0;
            });
            var v = (0, C.A)({}, r, {
              displaced: { all: s.all, invisible: c, visible: u },
            });
            return v;
          },
          Bi = function (e, r) {
            return q(e.scroll.diff.displacement, r);
          },
          zr = function (e) {
            var r = e.pageBorderBoxCenter,
              t = e.draggable,
              n = e.viewport,
              a = Bi(n, r),
              i = Y(a, t.page.borderBox.center);
            return q(t.client.borderBox.center, i);
          },
          rn = function (e) {
            var r = e.draggable,
              t = e.destination,
              n = e.newPageBorderBoxCenter,
              a = e.viewport,
              i = e.withDroppableDisplacement,
              o = e.onlyOnMainAxis,
              l = o === void 0 ? !1 : o,
              s = Y(n, r.page.borderBox.center),
              f = Ue(r.page.borderBox, s),
              d = {
                target: f,
                destination: t,
                withDroppableDisplacement: i,
                viewport: a,
              };
            return l ? gi(d) : Yt(d);
          },
          Oi = function (e) {
            var r = e.isMovingForward,
              t = e.draggable,
              n = e.destination,
              a = e.draggables,
              i = e.previousImpact,
              o = e.viewport,
              l = e.previousPageBorderBoxCenter,
              s = e.previousClientSelection,
              f = e.afterCritical;
            if (!n.isEnabled) return null;
            var d = Ee(n.descriptor.id, a),
              c = Pe(t, n),
              u =
                li({
                  isMovingForward: r,
                  draggable: t,
                  destination: n,
                  insideDestination: d,
                  previousImpact: i,
                }) ||
                Ii({
                  isMovingForward: r,
                  isInHomeList: c,
                  draggable: t,
                  draggables: a,
                  destination: n,
                  insideDestination: d,
                  previousImpact: i,
                  viewport: o,
                  afterCritical: f,
                });
            if (!u) return null;
            var p = vr({
                impact: u,
                draggable: t,
                droppable: n,
                draggables: a,
                afterCritical: f,
              }),
              v = rn({
                draggable: t,
                destination: n,
                newPageBorderBoxCenter: p,
                viewport: o.frame,
                withDroppableDisplacement: !1,
                onlyOnMainAxis: !0,
              });
            if (v) {
              var g = zr({ pageBorderBoxCenter: p, draggable: t, viewport: o });
              return { clientSelection: g, impact: u, scrollJumpRequest: null };
            }
            var h = Y(p, l),
              D = Ri({
                impact: u,
                viewport: o,
                destination: n,
                draggables: a,
                maxScrollChange: h,
              });
            return { clientSelection: s, impact: D, scrollJumpRequest: h };
          },
          z = function (r) {
            var t = r.subject.active;
            return t || b(!1), t;
          },
          Ti = function (e) {
            var r = e.isMovingForward,
              t = e.pageBorderBoxCenter,
              n = e.source,
              a = e.droppables,
              i = e.viewport,
              o = n.subject.active;
            if (!o) return null;
            var l = n.axis,
              s = ee(o[l.start], o[l.end]),
              f = cr(a)
                .filter(function (c) {
                  return c !== n;
                })
                .filter(function (c) {
                  return c.isEnabled;
                })
                .filter(function (c) {
                  return !!c.subject.active;
                })
                .filter(function (c) {
                  return zt(i.frame)(z(c));
                })
                .filter(function (c) {
                  var u = z(c);
                  return r
                    ? o[l.crossAxisEnd] < u[l.crossAxisEnd]
                    : u[l.crossAxisStart] < o[l.crossAxisStart];
                })
                .filter(function (c) {
                  var u = z(c),
                    p = ee(u[l.start], u[l.end]);
                  return (
                    s(u[l.start]) || s(u[l.end]) || p(o[l.start]) || p(o[l.end])
                  );
                })
                .sort(function (c, u) {
                  var p = z(c)[l.crossAxisStart],
                    v = z(u)[l.crossAxisStart];
                  return r ? p - v : v - p;
                })
                .filter(function (c, u, p) {
                  return z(c)[l.crossAxisStart] === z(p[0])[l.crossAxisStart];
                });
            if (!f.length) return null;
            if (f.length === 1) return f[0];
            var d = f.filter(function (c) {
              var u = ee(z(c)[l.start], z(c)[l.end]);
              return u(t[l.line]);
            });
            return d.length === 1
              ? d[0]
              : d.length > 1
                ? d.sort(function (c, u) {
                    return z(c)[l.start] - z(u)[l.start];
                  })[0]
                : f.sort(function (c, u) {
                    var p = Ut(t, Vt(z(c))),
                      v = Ut(t, Vt(z(u)));
                    return p !== v ? p - v : z(c)[l.start] - z(u)[l.start];
                  })[0];
          },
          tn = function (r, t) {
            var n = r.page.borderBox.center;
            return de(r.descriptor.id, t) ? Y(n, t.displacedBy.point) : n;
          },
          Ni = function (r, t) {
            var n = r.page.borderBox;
            return de(r.descriptor.id, t) ? Ue(n, we(t.displacedBy.point)) : n;
          },
          Mi = function (e) {
            var r = e.pageBorderBoxCenter,
              t = e.viewport,
              n = e.destination,
              a = e.insideDestination,
              i = e.afterCritical,
              o = a
                .filter(function (l) {
                  return Yt({
                    target: Ni(l, i),
                    destination: n,
                    viewport: t.frame,
                    withDroppableDisplacement: !0,
                  });
                })
                .sort(function (l, s) {
                  var f = ke(r, jr(n, tn(l, i))),
                    d = ke(r, jr(n, tn(s, i)));
                  return f < d
                    ? -1
                    : d < f
                      ? 1
                      : l.descriptor.index - s.descriptor.index;
                });
            return o[0] || null;
          },
          qe = H(function (r, t) {
            var n = t[r.line];
            return { value: n, point: ye(r.line, n) };
          }),
          Li = function (r, t, n) {
            var a = r.axis;
            if (r.descriptor.mode === "virtual") return ye(a.line, t[a.line]);
            var i = r.subject.page.contentBox[a.size],
              o = Ee(r.descriptor.id, n),
              l = o.reduce(function (d, c) {
                return d + c.client.marginBox[a.size];
              }, 0),
              s = l + t[a.line],
              f = s - i;
            return f <= 0 ? null : ye(a.line, f);
          },
          nn = function (r, t) {
            return (0, C.A)({}, r, {
              scroll: (0, C.A)({}, r.scroll, { max: t }),
            });
          },
          an = function (r, t, n) {
            var a = r.frame;
            Pe(t, r) && b(!1), r.subject.withPlaceholder && b(!1);
            var i = qe(r.axis, t.displaceBy).point,
              o = Li(r, i, n),
              l = {
                placeholderSize: i,
                increasedBy: o,
                oldFrameMaxScroll: r.frame ? r.frame.scroll.max : null,
              };
            if (!a) {
              var s = Ae({
                page: r.subject.page,
                withPlaceholder: l,
                axis: r.axis,
                frame: r.frame,
              });
              return (0, C.A)({}, r, { subject: s });
            }
            var f = o ? q(a.scroll.max, o) : a.scroll.max,
              d = nn(a, f),
              c = Ae({
                page: r.subject.page,
                withPlaceholder: l,
                axis: r.axis,
                frame: d,
              });
            return (0, C.A)({}, r, { subject: c, frame: d });
          },
          Fi = function (r) {
            var t = r.subject.withPlaceholder;
            t || b(!1);
            var n = r.frame;
            if (!n) {
              var a = Ae({
                page: r.subject.page,
                axis: r.axis,
                frame: null,
                withPlaceholder: null,
              });
              return (0, C.A)({}, r, { subject: a });
            }
            var i = t.oldFrameMaxScroll;
            i || b(!1);
            var o = nn(n, i),
              l = Ae({
                page: r.subject.page,
                axis: r.axis,
                frame: o,
                withPlaceholder: null,
              });
            return (0, C.A)({}, r, { subject: l, frame: o });
          },
          Gi = function (e) {
            var r = e.previousPageBorderBoxCenter,
              t = e.moveRelativeTo,
              n = e.insideDestination,
              a = e.draggable,
              i = e.draggables,
              o = e.destination,
              l = e.viewport,
              s = e.afterCritical;
            if (!t) {
              if (n.length) return null;
              var f = {
                  displaced: He,
                  displacedBy: jt,
                  at: {
                    type: "REORDER",
                    destination: { droppableId: o.descriptor.id, index: 0 },
                  },
                },
                d = vr({
                  impact: f,
                  draggable: a,
                  droppable: o,
                  draggables: i,
                  afterCritical: s,
                }),
                c = Pe(a, o) ? o : an(o, a, i),
                u = rn({
                  draggable: a,
                  destination: c,
                  newPageBorderBoxCenter: d,
                  viewport: l.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                });
              return u ? f : null;
            }
            var p = r[o.axis.line] <= t.page.borderBox.center[o.axis.line],
              v = (function () {
                var h = t.descriptor.index;
                return t.descriptor.id === a.descriptor.id || p ? h : h + 1;
              })(),
              g = qe(o.axis, a.displaceBy);
            return pr({
              draggable: a,
              insideDestination: n,
              destination: o,
              viewport: l,
              displacedBy: g,
              last: He,
              index: v,
            });
          },
          Wi = function (e) {
            var r = e.isMovingForward,
              t = e.previousPageBorderBoxCenter,
              n = e.draggable,
              a = e.isOver,
              i = e.draggables,
              o = e.droppables,
              l = e.viewport,
              s = e.afterCritical,
              f = Ti({
                isMovingForward: r,
                pageBorderBoxCenter: t,
                source: a,
                droppables: o,
                viewport: l,
              });
            if (!f) return null;
            var d = Ee(f.descriptor.id, i),
              c = Mi({
                pageBorderBoxCenter: t,
                viewport: l,
                destination: f,
                insideDestination: d,
                afterCritical: s,
              }),
              u = Gi({
                previousPageBorderBoxCenter: t,
                destination: f,
                draggable: n,
                draggables: i,
                moveRelativeTo: c,
                insideDestination: d,
                viewport: l,
                afterCritical: s,
              });
            if (!u) return null;
            var p = vr({
                impact: u,
                draggable: n,
                droppable: f,
                draggables: i,
                afterCritical: s,
              }),
              v = zr({ pageBorderBoxCenter: p, draggable: n, viewport: l });
            return { clientSelection: v, impact: u, scrollJumpRequest: null };
          },
          J = function (e) {
            var r = e.at;
            return r
              ? r.type === "REORDER"
                ? r.destination.droppableId
                : r.combine.droppableId
              : null;
          },
          ki = function (r, t) {
            var n = J(r);
            return n ? t[n] : null;
          },
          Ui = function (e) {
            var r = e.state,
              t = e.type,
              n = ki(r.impact, r.dimensions.droppables),
              a = !!n,
              i = r.dimensions.droppables[r.critical.droppable.id],
              o = n || i,
              l = o.axis.direction,
              s =
                (l === "vertical" && (t === "MOVE_UP" || t === "MOVE_DOWN")) ||
                (l === "horizontal" &&
                  (t === "MOVE_LEFT" || t === "MOVE_RIGHT"));
            if (s && !a) return null;
            var f = t === "MOVE_DOWN" || t === "MOVE_RIGHT",
              d = r.dimensions.draggables[r.critical.draggable.id],
              c = r.current.page.borderBoxCenter,
              u = r.dimensions,
              p = u.draggables,
              v = u.droppables;
            return s
              ? Oi({
                  isMovingForward: f,
                  previousPageBorderBoxCenter: c,
                  draggable: d,
                  destination: o,
                  draggables: p,
                  viewport: r.viewport,
                  previousClientSelection: r.current.client.selection,
                  previousImpact: r.impact,
                  afterCritical: r.afterCritical,
                })
              : Wi({
                  isMovingForward: f,
                  previousPageBorderBoxCenter: c,
                  draggable: d,
                  isOver: o,
                  draggables: p,
                  droppables: v,
                  viewport: r.viewport,
                  afterCritical: r.afterCritical,
                });
          };
        function Ie(e) {
          return e.phase === "DRAGGING" || e.phase === "COLLECTING";
        }
        function on(e) {
          var r = ee(e.top, e.bottom),
            t = ee(e.left, e.right);
          return function (a) {
            return r(a.y) && t(a.x);
          };
        }
        function Hi(e, r) {
          return (
            e.left < r.right &&
            e.right > r.left &&
            e.top < r.bottom &&
            e.bottom > r.top
          );
        }
        function Vi(e) {
          var r = e.pageBorderBox,
            t = e.draggable,
            n = e.candidates,
            a = t.page.borderBox.center,
            i = n
              .map(function (o) {
                var l = o.axis,
                  s = ye(
                    o.axis.line,
                    r.center[l.line],
                    o.page.borderBox.center[l.crossAxisLine],
                  );
                return { id: o.descriptor.id, distance: ke(a, s) };
              })
              .sort(function (o, l) {
                return l.distance - o.distance;
              });
          return i[0] ? i[0].id : null;
        }
        function qi(e) {
          var r = e.pageBorderBox,
            t = e.draggable,
            n = e.droppables,
            a = cr(n).filter(function (i) {
              if (!i.isEnabled) return !1;
              var o = i.subject.active;
              if (!o || !Hi(r, o)) return !1;
              if (on(o)(r.center)) return !0;
              var l = i.axis,
                s = o.center[l.crossAxisLine],
                f = r[l.crossAxisStart],
                d = r[l.crossAxisEnd],
                c = ee(o[l.crossAxisStart], o[l.crossAxisEnd]),
                u = c(f),
                p = c(d);
              return !u && !p ? !0 : u ? f < s : d > s;
            });
          return a.length
            ? a.length === 1
              ? a[0].descriptor.id
              : Vi({ pageBorderBox: r, draggable: t, candidates: a })
            : null;
        }
        var ln = function (r, t) {
            return (0, G.l)(Ue(r, t));
          },
          $i = function (e, r) {
            var t = e.frame;
            return t ? ln(r, t.scroll.diff.value) : r;
          };
        function sn(e) {
          var r = e.displaced,
            t = e.id;
          return !!(r.visible[t] || r.invisible[t]);
        }
        function ji(e) {
          var r = e.draggable,
            t = e.closest,
            n = e.inHomeList;
          return t
            ? n && t.descriptor.index > r.descriptor.index
              ? t.descriptor.index - 1
              : t.descriptor.index
            : null;
        }
        var zi = function (e) {
            var r = e.pageBorderBoxWithDroppableScroll,
              t = e.draggable,
              n = e.destination,
              a = e.insideDestination,
              i = e.last,
              o = e.viewport,
              l = e.afterCritical,
              s = n.axis,
              f = qe(n.axis, t.displaceBy),
              d = f.value,
              c = r[s.start],
              u = r[s.end],
              p = fr(t, a),
              v = De(p, function (h) {
                var D = h.descriptor.id,
                  I = h.page.borderBox.center[s.line],
                  S = de(D, l),
                  x = sn({ displaced: i, id: D });
                return S ? (x ? u <= I : c < I - d) : x ? u <= I + d : c < I;
              }),
              g = ji({ draggable: t, closest: v, inHomeList: Pe(t, n) });
            return pr({
              draggable: t,
              insideDestination: a,
              destination: n,
              viewport: o,
              last: i,
              displacedBy: f,
              index: g,
            });
          },
          Ki = 4,
          Yi = function (e) {
            var r = e.draggable,
              t = e.pageBorderBoxWithDroppableScroll,
              n = e.previousImpact,
              a = e.destination,
              i = e.insideDestination,
              o = e.afterCritical;
            if (!a.isCombineEnabled) return null;
            var l = a.axis,
              s = qe(a.axis, r.displaceBy),
              f = s.value,
              d = t[l.start],
              c = t[l.end],
              u = fr(r, i),
              p = De(u, function (g) {
                var h = g.descriptor.id,
                  D = g.page.borderBox,
                  I = D[l.size],
                  S = I / Ki,
                  x = de(h, o),
                  A = sn({ displaced: n.displaced, id: h });
                return x
                  ? A
                    ? c > D[l.start] + S && c < D[l.end] - S
                    : d > D[l.start] - f + S && d < D[l.end] - f - S
                  : A
                    ? c > D[l.start] + f + S && c < D[l.end] + f - S
                    : d > D[l.start] + S && d < D[l.end] - S;
              });
            if (!p) return null;
            var v = {
              displacedBy: s,
              displaced: n.displaced,
              at: {
                type: "COMBINE",
                combine: {
                  draggableId: p.descriptor.id,
                  droppableId: a.descriptor.id,
                },
              },
            };
            return v;
          },
          un = function (e) {
            var r = e.pageOffset,
              t = e.draggable,
              n = e.draggables,
              a = e.droppables,
              i = e.previousImpact,
              o = e.viewport,
              l = e.afterCritical,
              s = ln(t.page.borderBox, r),
              f = qi({ pageBorderBox: s, draggable: t, droppables: a });
            if (!f) return si;
            var d = a[f],
              c = Ee(d.descriptor.id, n),
              u = $i(d, s);
            return (
              Yi({
                pageBorderBoxWithDroppableScroll: u,
                draggable: t,
                previousImpact: i,
                destination: d,
                insideDestination: c,
                afterCritical: l,
              }) ||
              zi({
                pageBorderBoxWithDroppableScroll: u,
                draggable: t,
                destination: d,
                insideDestination: c,
                last: i.displaced,
                viewport: o,
                afterCritical: l,
              })
            );
          },
          Kr = function (e, r) {
            var t;
            return (0, C.A)({}, e, ((t = {}), (t[r.descriptor.id] = r), t));
          },
          Ji = function (r) {
            var t = r.previousImpact,
              n = r.impact,
              a = r.droppables,
              i = J(t),
              o = J(n);
            if (!i || i === o) return a;
            var l = a[i];
            if (!l.subject.withPlaceholder) return a;
            var s = Fi(l);
            return Kr(a, s);
          },
          Xi = function (e) {
            var r = e.draggable,
              t = e.draggables,
              n = e.droppables,
              a = e.previousImpact,
              i = e.impact,
              o = Ji({ previousImpact: a, impact: i, droppables: n }),
              l = J(i);
            if (!l) return o;
            var s = n[l];
            if (Pe(r, s) || s.subject.withPlaceholder) return o;
            var f = an(s, r, t);
            return Kr(o, f);
          },
          $e = function (e) {
            var r = e.state,
              t = e.clientSelection,
              n = e.dimensions,
              a = e.viewport,
              i = e.impact,
              o = e.scrollJumpRequest,
              l = a || r.viewport,
              s = n || r.dimensions,
              f = t || r.current.client.selection,
              d = Y(f, r.initial.client.selection),
              c = {
                offset: d,
                selection: f,
                borderBoxCenter: q(r.initial.client.borderBoxCenter, d),
              },
              u = {
                selection: q(c.selection, l.scroll.current),
                borderBoxCenter: q(c.borderBoxCenter, l.scroll.current),
                offset: q(c.offset, l.scroll.diff.value),
              },
              p = { client: c, page: u };
            if (r.phase === "COLLECTING")
              return (0, C.A)({ phase: "COLLECTING" }, r, {
                dimensions: s,
                viewport: l,
                current: p,
              });
            var v = s.draggables[r.critical.draggable.id],
              g =
                i ||
                un({
                  pageOffset: u.offset,
                  draggable: v,
                  draggables: s.draggables,
                  droppables: s.droppables,
                  previousImpact: r.impact,
                  viewport: l,
                  afterCritical: r.afterCritical,
                }),
              h = Xi({
                draggable: v,
                impact: g,
                previousImpact: r.impact,
                draggables: s.draggables,
                droppables: s.droppables,
              }),
              D = (0, C.A)({}, r, {
                current: p,
                dimensions: { draggables: s.draggables, droppables: h },
                impact: g,
                viewport: l,
                scrollJumpRequest: o || null,
                forceShouldAnimate: o ? !1 : null,
              });
            return D;
          };
        function Qi(e, r) {
          return e.map(function (t) {
            return r[t];
          });
        }
        var cn = function (e) {
            var r = e.impact,
              t = e.viewport,
              n = e.draggables,
              a = e.destination,
              i = e.forceShouldAnimate,
              o = r.displaced,
              l = Qi(o.all, n),
              s = Ve({
                afterDragging: l,
                destination: a,
                displacedBy: r.displacedBy,
                viewport: t.frame,
                forceShouldAnimate: i,
                last: o,
              });
            return (0, C.A)({}, r, { displaced: s });
          },
          dn = function (e) {
            var r = e.impact,
              t = e.draggable,
              n = e.droppable,
              a = e.draggables,
              i = e.viewport,
              o = e.afterCritical,
              l = vr({
                impact: r,
                draggable: t,
                draggables: a,
                droppable: n,
                afterCritical: o,
              });
            return zr({ pageBorderBoxCenter: l, draggable: t, viewport: i });
          },
          fn = function (e) {
            var r = e.state,
              t = e.dimensions,
              n = e.viewport;
            r.movementMode !== "SNAP" && b(!1);
            var a = r.impact,
              i = n || r.viewport,
              o = t || r.dimensions,
              l = o.draggables,
              s = o.droppables,
              f = l[r.critical.draggable.id],
              d = J(a);
            d || b(!1);
            var c = s[d],
              u = cn({ impact: a, viewport: i, destination: c, draggables: l }),
              p = dn({
                impact: u,
                draggable: f,
                droppable: c,
                draggables: l,
                viewport: i,
                afterCritical: r.afterCritical,
              });
            return $e({
              impact: u,
              clientSelection: p,
              state: r,
              dimensions: o,
              viewport: i,
            });
          },
          Zi = function (e) {
            return { index: e.index, droppableId: e.droppableId };
          },
          pn = function (e) {
            var r = e.draggable,
              t = e.home,
              n = e.draggables,
              a = e.viewport,
              i = qe(t.axis, r.displaceBy),
              o = Ee(t.descriptor.id, n),
              l = o.indexOf(r);
            l === -1 && b(!1);
            var s = o.slice(l + 1),
              f = s.reduce(function (p, v) {
                return (p[v.descriptor.id] = !0), p;
              }, {}),
              d = {
                inVirtualList: t.descriptor.mode === "virtual",
                displacedBy: i,
                effected: f,
              },
              c = Ve({
                afterDragging: s,
                destination: t,
                displacedBy: i,
                last: null,
                viewport: a.frame,
                forceShouldAnimate: !1,
              }),
              u = {
                displaced: c,
                displacedBy: i,
                at: { type: "REORDER", destination: Zi(r.descriptor) },
              };
            return { impact: u, afterCritical: d };
          },
          _i = function (e, r) {
            return {
              draggables: e.draggables,
              droppables: Kr(e.droppables, r),
            };
          },
          je = function (r) {},
          ze = function (r) {},
          eo = function (e) {
            var r = e.draggable,
              t = e.offset,
              n = e.initialWindowScroll,
              a = (0, G.cY)(r.client, t),
              i = (0, G.SQ)(a, n),
              o = (0, C.A)({}, r, {
                placeholder: (0, C.A)({}, r.placeholder, { client: a }),
                client: a,
                page: i,
              });
            return o;
          },
          ro = function (e) {
            var r = e.frame;
            return r || b(!1), r;
          },
          to = function (e) {
            var r = e.additions,
              t = e.updatedDroppables,
              n = e.viewport,
              a = n.scroll.diff.value;
            return r.map(function (i) {
              var o = i.descriptor.droppableId,
                l = t[o],
                s = ro(l),
                f = s.scroll.diff.value,
                d = q(a, f),
                c = eo({
                  draggable: i,
                  offset: d,
                  initialWindowScroll: n.scroll.initial,
                });
              return c;
            });
          },
          no = function (e) {
            var r = e.state,
              t = e.published;
            je();
            var n = t.modified.map(function (S) {
                var x = r.dimensions.droppables[S.droppableId],
                  A = kr(x, S.scroll);
                return A;
              }),
              a = (0, C.A)({}, r.dimensions.droppables, {}, qt(n)),
              i = $t(
                to({
                  additions: t.additions,
                  updatedDroppables: a,
                  viewport: r.viewport,
                }),
              ),
              o = (0, C.A)({}, r.dimensions.draggables, {}, i);
            t.removals.forEach(function (S) {
              delete o[S];
            });
            var l = { droppables: a, draggables: o },
              s = J(r.impact),
              f = s ? l.droppables[s] : null,
              d = l.draggables[r.critical.draggable.id],
              c = l.droppables[r.critical.droppable.id],
              u = pn({
                draggable: d,
                home: c,
                draggables: o,
                viewport: r.viewport,
              }),
              p = u.impact,
              v = u.afterCritical,
              g = f && f.isCombineEnabled ? r.impact : p,
              h = un({
                pageOffset: r.current.page.offset,
                draggable: l.draggables[r.critical.draggable.id],
                draggables: l.draggables,
                droppables: l.droppables,
                previousImpact: g,
                viewport: r.viewport,
                afterCritical: v,
              });
            ze();
            var D = (0, C.A)({ phase: "DRAGGING" }, r, {
              phase: "DRAGGING",
              impact: h,
              onLiftImpact: p,
              dimensions: l,
              afterCritical: v,
              forceShouldAnimate: !1,
            });
            if (r.phase === "COLLECTING") return D;
            var I = (0, C.A)({ phase: "DROP_PENDING" }, D, {
              phase: "DROP_PENDING",
              reason: r.reason,
              isWaiting: !1,
            });
            return I;
          },
          Yr = function (r) {
            return r.movementMode === "SNAP";
          },
          Jr = function (r, t, n) {
            var a = _i(r.dimensions, t);
            return !Yr(r) || n
              ? $e({ state: r, dimensions: a })
              : fn({ state: r, dimensions: a });
          };
        function Xr(e) {
          return e.isDragging && e.movementMode === "SNAP"
            ? (0, C.A)({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
            : e;
        }
        var vn = { phase: "IDLE", completed: null, shouldFlush: !1 },
          ao = function (e, r) {
            if ((e === void 0 && (e = vn), r.type === "FLUSH"))
              return (0, C.A)({}, vn, { shouldFlush: !0 });
            if (r.type === "INITIAL_PUBLISH") {
              e.phase !== "IDLE" && b(!1);
              var t = r.payload,
                n = t.critical,
                a = t.clientSelection,
                i = t.viewport,
                o = t.dimensions,
                l = t.movementMode,
                s = o.draggables[n.draggable.id],
                f = o.droppables[n.droppable.id],
                d = {
                  selection: a,
                  borderBoxCenter: s.client.borderBox.center,
                  offset: V,
                },
                c = {
                  client: d,
                  page: {
                    selection: q(d.selection, i.scroll.initial),
                    borderBoxCenter: q(d.selection, i.scroll.initial),
                    offset: q(d.selection, i.scroll.diff.value),
                  },
                },
                u = cr(o.droppables).every(function (wr) {
                  return !wr.isFixedOnPage;
                }),
                p = pn({
                  draggable: s,
                  home: f,
                  draggables: o.draggables,
                  viewport: i,
                }),
                v = p.impact,
                g = p.afterCritical,
                h = {
                  phase: "DRAGGING",
                  isDragging: !0,
                  critical: n,
                  movementMode: l,
                  dimensions: o,
                  initial: c,
                  current: c,
                  isWindowScrollAllowed: u,
                  impact: v,
                  afterCritical: g,
                  onLiftImpact: v,
                  viewport: i,
                  scrollJumpRequest: null,
                  forceShouldAnimate: null,
                };
              return h;
            }
            if (r.type === "COLLECTION_STARTING") {
              if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
                return e;
              e.phase !== "DRAGGING" && b(!1);
              var D = (0, C.A)({ phase: "COLLECTING" }, e, {
                phase: "COLLECTING",
              });
              return D;
            }
            if (r.type === "PUBLISH_WHILE_DRAGGING")
              return (
                e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || b(!1),
                no({ state: e, published: r.payload })
              );
            if (r.type === "MOVE") {
              if (e.phase === "DROP_PENDING") return e;
              Ie(e) || b(!1);
              var I = r.payload.client;
              return ce(I, e.current.client.selection)
                ? e
                : $e({
                    state: e,
                    clientSelection: I,
                    impact: Yr(e) ? e.impact : null,
                  });
            }
            if (r.type === "UPDATE_DROPPABLE_SCROLL") {
              if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
                return Xr(e);
              Ie(e) || b(!1);
              var S = r.payload,
                x = S.id,
                A = S.newScroll,
                E = e.dimensions.droppables[x];
              if (!E) return e;
              var R = kr(E, A);
              return Jr(e, R, !1);
            }
            if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
              if (e.phase === "DROP_PENDING") return e;
              Ie(e) || b(!1);
              var L = r.payload,
                O = L.id,
                M = L.isEnabled,
                W = e.dimensions.droppables[O];
              W || b(!1), W.isEnabled === M && b(!1);
              var T = (0, C.A)({}, W, { isEnabled: M });
              return Jr(e, T, !0);
            }
            if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
              if (e.phase === "DROP_PENDING") return e;
              Ie(e) || b(!1);
              var re = r.payload,
                te = re.id,
                Q = re.isCombineEnabled,
                ae = e.dimensions.droppables[te];
              ae || b(!1), ae.isCombineEnabled === Q && b(!1);
              var $ = (0, C.A)({}, ae, { isCombineEnabled: Q });
              return Jr(e, $, !0);
            }
            if (r.type === "MOVE_BY_WINDOW_SCROLL") {
              if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
                return e;
              Ie(e) || b(!1), e.isWindowScrollAllowed || b(!1);
              var pe = r.payload.newScroll;
              if (ce(e.viewport.scroll.current, pe)) return Xr(e);
              var ie = _t(e.viewport, pe);
              return Yr(e)
                ? fn({ state: e, viewport: ie })
                : $e({ state: e, viewport: ie });
            }
            if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
              if (!Ie(e)) return e;
              var rr = r.payload.maxScroll;
              if (ce(rr, e.viewport.scroll.max)) return e;
              var Se = (0, C.A)({}, e.viewport, {
                scroll: (0, C.A)({}, e.viewport.scroll, { max: rr }),
              });
              return (0, C.A)({ phase: "DRAGGING" }, e, { viewport: Se });
            }
            if (
              r.type === "MOVE_UP" ||
              r.type === "MOVE_DOWN" ||
              r.type === "MOVE_LEFT" ||
              r.type === "MOVE_RIGHT"
            ) {
              if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
                return e;
              e.phase !== "DRAGGING" && b(!1);
              var ve = Ui({ state: e, type: r.type });
              return ve
                ? $e({
                    state: e,
                    impact: ve.impact,
                    clientSelection: ve.clientSelection,
                    scrollJumpRequest: ve.scrollJumpRequest,
                  })
                : e;
            }
            if (r.type === "DROP_PENDING") {
              var oe = r.payload.reason;
              e.phase !== "COLLECTING" && b(!1);
              var Ce = (0, C.A)({ phase: "DROP_PENDING" }, e, {
                phase: "DROP_PENDING",
                isWaiting: !0,
                reason: oe,
              });
              return Ce;
            }
            if (r.type === "DROP_ANIMATE") {
              var xr = r.payload,
                le = xr.completed,
                tr = xr.dropDuration,
                Sr = xr.newHomeClientOffset;
              e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || b(!1);
              var Te = {
                phase: "DROP_ANIMATING",
                completed: le,
                dropDuration: tr,
                newHomeClientOffset: Sr,
                dimensions: e.dimensions,
              };
              return Te;
            }
            if (r.type === "DROP_COMPLETE") {
              var Cr = r.payload.completed;
              return { phase: "IDLE", completed: Cr, shouldFlush: !1 };
            }
            return e;
          },
          io = function (r) {
            return { type: "BEFORE_INITIAL_CAPTURE", payload: r };
          },
          oo = function (r) {
            return { type: "LIFT", payload: r };
          },
          lo = function (r) {
            return { type: "INITIAL_PUBLISH", payload: r };
          },
          so = function (r) {
            return { type: "PUBLISH_WHILE_DRAGGING", payload: r };
          },
          uo = function () {
            return { type: "COLLECTION_STARTING", payload: null };
          },
          co = function (r) {
            return { type: "UPDATE_DROPPABLE_SCROLL", payload: r };
          },
          fo = function (r) {
            return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: r };
          },
          po = function (r) {
            return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: r };
          },
          gn = function (r) {
            return { type: "MOVE", payload: r };
          },
          vo = function (r) {
            return { type: "MOVE_BY_WINDOW_SCROLL", payload: r };
          },
          go = function (r) {
            return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: r };
          },
          mo = function () {
            return { type: "MOVE_UP", payload: null };
          },
          bo = function () {
            return { type: "MOVE_DOWN", payload: null };
          },
          ho = function () {
            return { type: "MOVE_RIGHT", payload: null };
          },
          yo = function () {
            return { type: "MOVE_LEFT", payload: null };
          },
          Qr = function () {
            return { type: "FLUSH", payload: null };
          },
          Do = function (r) {
            return { type: "DROP_ANIMATE", payload: r };
          },
          Zr = function (r) {
            return { type: "DROP_COMPLETE", payload: r };
          },
          mn = function (r) {
            return { type: "DROP", payload: r };
          },
          Io = function (r) {
            return { type: "DROP_PENDING", payload: r };
          },
          bn = function () {
            return { type: "DROP_ANIMATION_FINISHED", payload: null };
          };
        function Gu(e) {
          if (!(e.length <= 1)) {
            for (
              var r = e.map(function (l) {
                  return l.descriptor.index;
                }),
                t = {},
                n = 1;
              n < r.length;
              n++
            ) {
              var a = r[n],
                i = r[n - 1];
              a !== i + 1 && (t[a] = !0);
            }
            if (Object.keys(t).length)
              var o = r
                .map(function (l) {
                  var s = !!t[l];
                  return s ? "[\u{1F525}" + l + "]" : "" + l;
                })
                .join(", ");
          }
        }
        function xo(e, r) {
          if (0) var t;
        }
        var So = function (e) {
            return function (r) {
              var t = r.getState,
                n = r.dispatch;
              return function (a) {
                return function (i) {
                  if (i.type !== "LIFT") {
                    a(i);
                    return;
                  }
                  var o = i.payload,
                    l = o.id,
                    s = o.clientSelection,
                    f = o.movementMode,
                    d = t();
                  d.phase === "DROP_ANIMATING" &&
                    n(Zr({ completed: d.completed })),
                    t().phase !== "IDLE" && b(!1),
                    n(Qr()),
                    n(io({ draggableId: l, movementMode: f }));
                  var c = { shouldPublishImmediately: f === "SNAP" },
                    u = { draggableId: l, scrollOptions: c },
                    p = e.startPublishing(u),
                    v = p.critical,
                    g = p.dimensions,
                    h = p.viewport;
                  xo(v, g),
                    n(
                      lo({
                        critical: v,
                        dimensions: g,
                        clientSelection: s,
                        movementMode: f,
                        viewport: h,
                      }),
                    );
                };
              };
            };
          },
          Co = function (e) {
            return function () {
              return function (r) {
                return function (t) {
                  t.type === "INITIAL_PUBLISH" && e.dragging(),
                    t.type === "DROP_ANIMATE" &&
                      e.dropping(t.payload.completed.result.reason),
                    (t.type === "FLUSH" || t.type === "DROP_COMPLETE") &&
                      e.resting(),
                    r(t);
                };
              };
            };
          },
          _r = {
            outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
            drop: "cubic-bezier(.2,1,.1,1)",
          },
          Ke = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
          et = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
          xe = et.outOfTheWay + "s " + _r.outOfTheWay,
          Ye = {
            fluid: "opacity " + xe,
            snap: "transform " + xe + ", opacity " + xe,
            drop: function (r) {
              var t = r + "s " + _r.drop;
              return "transform " + t + ", opacity " + t;
            },
            outOfTheWay: "transform " + xe,
            placeholder: "height " + xe + ", width " + xe + ", margin " + xe,
          },
          hn = function (r) {
            return ce(r, V) ? null : "translate(" + r.x + "px, " + r.y + "px)";
          },
          rt = {
            moveTo: hn,
            drop: function (r, t) {
              var n = hn(r);
              return n ? (t ? n + " scale(" + Ke.scale.drop + ")" : n) : null;
            },
          },
          tt = et.minDropTime,
          yn = et.maxDropTime,
          wo = yn - tt,
          Dn = 1500,
          Ao = 0.6,
          Eo = function (e) {
            var r = e.current,
              t = e.destination,
              n = e.reason,
              a = ke(r, t);
            if (a <= 0) return tt;
            if (a >= Dn) return yn;
            var i = a / Dn,
              o = tt + wo * i,
              l = n === "CANCEL" ? o * Ao : o;
            return Number(l.toFixed(2));
          },
          Po = function (e) {
            var r = e.impact,
              t = e.draggable,
              n = e.dimensions,
              a = e.viewport,
              i = e.afterCritical,
              o = n.draggables,
              l = n.droppables,
              s = J(r),
              f = s ? l[s] : null,
              d = l[t.descriptor.droppableId],
              c = dn({
                impact: r,
                draggable: t,
                draggables: o,
                afterCritical: i,
                droppable: f || d,
                viewport: a,
              }),
              u = Y(c, t.client.borderBox.center);
            return u;
          },
          Ro = function (e) {
            var r = e.draggables,
              t = e.reason,
              n = e.lastImpact,
              a = e.home,
              i = e.viewport,
              o = e.onLiftImpact;
            if (!n.at || t !== "DROP") {
              var l = cn({
                draggables: r,
                impact: o,
                destination: a,
                viewport: i,
                forceShouldAnimate: !0,
              });
              return { impact: l, didDropInsideDroppable: !1 };
            }
            if (n.at.type === "REORDER")
              return { impact: n, didDropInsideDroppable: !0 };
            var s = (0, C.A)({}, n, { displaced: He });
            return { impact: s, didDropInsideDroppable: !0 };
          },
          Bo = function (e) {
            var r = e.getState,
              t = e.dispatch;
            return function (n) {
              return function (a) {
                if (a.type !== "DROP") {
                  n(a);
                  return;
                }
                var i = r(),
                  o = a.payload.reason;
                if (i.phase === "COLLECTING") {
                  t(Io({ reason: o }));
                  return;
                }
                if (i.phase !== "IDLE") {
                  var l = i.phase === "DROP_PENDING" && i.isWaiting;
                  l && b(!1),
                    i.phase === "DRAGGING" ||
                      i.phase === "DROP_PENDING" ||
                      b(!1);
                  var s = i.critical,
                    f = i.dimensions,
                    d = f.draggables[i.critical.draggable.id],
                    c = Ro({
                      reason: o,
                      lastImpact: i.impact,
                      afterCritical: i.afterCritical,
                      onLiftImpact: i.onLiftImpact,
                      home: i.dimensions.droppables[i.critical.droppable.id],
                      viewport: i.viewport,
                      draggables: i.dimensions.draggables,
                    }),
                    u = c.impact,
                    p = c.didDropInsideDroppable,
                    v = p ? Hr(u) : null,
                    g = p ? dr(u) : null,
                    h = {
                      index: s.draggable.index,
                      droppableId: s.droppable.id,
                    },
                    D = {
                      draggableId: d.descriptor.id,
                      type: d.descriptor.type,
                      source: h,
                      reason: o,
                      mode: i.movementMode,
                      destination: v,
                      combine: g,
                    },
                    I = Po({
                      impact: u,
                      draggable: d,
                      dimensions: f,
                      viewport: i.viewport,
                      afterCritical: i.afterCritical,
                    }),
                    S = {
                      critical: i.critical,
                      afterCritical: i.afterCritical,
                      result: D,
                      impact: u,
                    },
                    x = !ce(i.current.client.offset, I) || !!D.combine;
                  if (!x) {
                    t(Zr({ completed: S }));
                    return;
                  }
                  var A = Eo({
                      current: i.current.client.offset,
                      destination: I,
                      reason: o,
                    }),
                    E = {
                      newHomeClientOffset: I,
                      dropDuration: A,
                      completed: S,
                    };
                  t(Do(E));
                }
              };
            };
          },
          In = function (e) {
            return { x: e.pageXOffset, y: e.pageYOffset };
          };
        function Oo(e) {
          return {
            eventName: "scroll",
            options: { passive: !0, capture: !1 },
            fn: function (t) {
              (t.target !== window && t.target !== window.document) || e();
            },
          };
        }
        function To(e) {
          var r = e.onWindowScroll;
          function t() {
            r(In());
          }
          var n = (0, Ge.A)(t),
            a = Oo(n),
            i = ue;
          function o() {
            return i !== ue;
          }
          function l() {
            o() && b(!1), (i = _(window, [a]));
          }
          function s() {
            o() || b(!1), n.cancel(), i(), (i = ue);
          }
          return { start: l, stop: s, isActive: o };
        }
        var No = function (r) {
            return (
              r.type === "DROP_COMPLETE" ||
              r.type === "DROP_ANIMATE" ||
              r.type === "FLUSH"
            );
          },
          Mo = function (e) {
            var r = To({
              onWindowScroll: function (n) {
                e.dispatch(vo({ newScroll: n }));
              },
            });
            return function (t) {
              return function (n) {
                !r.isActive() && n.type === "INITIAL_PUBLISH" && r.start(),
                  r.isActive() && No(n) && r.stop(),
                  t(n);
              };
            };
          },
          Lo = function (e) {
            var r = !1,
              t = !1,
              n = setTimeout(function () {
                t = !0;
              }),
              a = function (o) {
                r || t || ((r = !0), e(o), clearTimeout(n));
              };
            return (
              (a.wasCalled = function () {
                return r;
              }),
              a
            );
          },
          Fo = function () {
            var e = [],
              r = function (i) {
                var o = Ur(e, function (f) {
                  return f.timerId === i;
                });
                o === -1 && b(!1);
                var l = e.splice(o, 1),
                  s = l[0];
                s.callback();
              },
              t = function (i) {
                var o = setTimeout(function () {
                    return r(o);
                  }),
                  l = { timerId: o, callback: i };
                e.push(l);
              },
              n = function () {
                if (e.length) {
                  var i = [].concat(e);
                  (e.length = 0),
                    i.forEach(function (o) {
                      clearTimeout(o.timerId), o.callback();
                    });
                }
              };
            return { add: t, flush: n };
          },
          Go = function (r, t) {
            return r == null && t == null
              ? !0
              : r == null || t == null
                ? !1
                : r.droppableId === t.droppableId && r.index === t.index;
          },
          Wo = function (r, t) {
            return r == null && t == null
              ? !0
              : r == null || t == null
                ? !1
                : r.draggableId === t.draggableId &&
                  r.droppableId === t.droppableId;
          },
          ko = function (r, t) {
            if (r === t) return !0;
            var n =
                r.draggable.id === t.draggable.id &&
                r.draggable.droppableId === t.draggable.droppableId &&
                r.draggable.type === t.draggable.type &&
                r.draggable.index === t.draggable.index,
              a =
                r.droppable.id === t.droppable.id &&
                r.droppable.type === t.droppable.type;
            return n && a;
          },
          Je = function (r, t) {
            je(), t(), ze();
          },
          gr = function (r, t) {
            return {
              draggableId: r.draggable.id,
              type: r.droppable.type,
              source: { droppableId: r.droppable.id, index: r.draggable.index },
              mode: t,
            };
          },
          nt = function (r, t, n, a) {
            if (!r) {
              n(a(t));
              return;
            }
            var i = Lo(n),
              o = { announce: i };
            r(t, o), i.wasCalled() || n(a(t));
          },
          Uo = function (e, r) {
            var t = Fo(),
              n = null,
              a = function (u, p) {
                n && b(!1),
                  Je("onBeforeCapture", function () {
                    var v = e().onBeforeCapture;
                    if (v) {
                      var g = { draggableId: u, mode: p };
                      v(g);
                    }
                  });
              },
              i = function (u, p) {
                n && b(!1),
                  Je("onBeforeDragStart", function () {
                    var v = e().onBeforeDragStart;
                    v && v(gr(u, p));
                  });
              },
              o = function (u, p) {
                n && b(!1);
                var v = gr(u, p);
                (n = {
                  mode: p,
                  lastCritical: u,
                  lastLocation: v.source,
                  lastCombine: null,
                }),
                  t.add(function () {
                    Je("onDragStart", function () {
                      return nt(e().onDragStart, v, r, sr.onDragStart);
                    });
                  });
              },
              l = function (u, p) {
                var v = Hr(p),
                  g = dr(p);
                n || b(!1);
                var h = !ko(u, n.lastCritical);
                h && (n.lastCritical = u);
                var D = !Go(n.lastLocation, v);
                D && (n.lastLocation = v);
                var I = !Wo(n.lastCombine, g);
                if ((I && (n.lastCombine = g), !(!h && !D && !I))) {
                  var S = (0, C.A)({}, gr(u, n.mode), {
                    combine: g,
                    destination: v,
                  });
                  t.add(function () {
                    Je("onDragUpdate", function () {
                      return nt(e().onDragUpdate, S, r, sr.onDragUpdate);
                    });
                  });
                }
              },
              s = function () {
                n || b(!1), t.flush();
              },
              f = function (u) {
                n || b(!1),
                  (n = null),
                  Je("onDragEnd", function () {
                    return nt(e().onDragEnd, u, r, sr.onDragEnd);
                  });
              },
              d = function () {
                if (n) {
                  var u = (0, C.A)({}, gr(n.lastCritical, n.mode), {
                    combine: null,
                    destination: null,
                    reason: "CANCEL",
                  });
                  f(u);
                }
              };
            return {
              beforeCapture: a,
              beforeStart: i,
              start: o,
              update: l,
              flush: s,
              drop: f,
              abort: d,
            };
          },
          Ho = function (e, r) {
            var t = Uo(e, r);
            return function (n) {
              return function (a) {
                return function (i) {
                  if (i.type === "BEFORE_INITIAL_CAPTURE") {
                    t.beforeCapture(
                      i.payload.draggableId,
                      i.payload.movementMode,
                    );
                    return;
                  }
                  if (i.type === "INITIAL_PUBLISH") {
                    var o = i.payload.critical;
                    t.beforeStart(o, i.payload.movementMode),
                      a(i),
                      t.start(o, i.payload.movementMode);
                    return;
                  }
                  if (i.type === "DROP_COMPLETE") {
                    var l = i.payload.completed.result;
                    t.flush(), a(i), t.drop(l);
                    return;
                  }
                  if ((a(i), i.type === "FLUSH")) {
                    t.abort();
                    return;
                  }
                  var s = n.getState();
                  s.phase === "DRAGGING" && t.update(s.critical, s.impact);
                };
              };
            };
          },
          Vo = function (e) {
            return function (r) {
              return function (t) {
                if (t.type !== "DROP_ANIMATION_FINISHED") {
                  r(t);
                  return;
                }
                var n = e.getState();
                n.phase !== "DROP_ANIMATING" && b(!1),
                  e.dispatch(Zr({ completed: n.completed }));
              };
            };
          },
          qo = function (e) {
            var r = null,
              t = null;
            function n() {
              t && (cancelAnimationFrame(t), (t = null)),
                r && (r(), (r = null));
            }
            return function (a) {
              return function (i) {
                if (
                  ((i.type === "FLUSH" ||
                    i.type === "DROP_COMPLETE" ||
                    i.type === "DROP_ANIMATION_FINISHED") &&
                    n(),
                  a(i),
                  i.type === "DROP_ANIMATE")
                ) {
                  var o = {
                    eventName: "scroll",
                    options: { capture: !0, passive: !1, once: !0 },
                    fn: function () {
                      var s = e.getState();
                      s.phase === "DROP_ANIMATING" && e.dispatch(bn());
                    },
                  };
                  t = requestAnimationFrame(function () {
                    (t = null), (r = _(window, [o]));
                  });
                }
              };
            };
          },
          $o = function (e) {
            return function () {
              return function (r) {
                return function (t) {
                  (t.type === "DROP_COMPLETE" ||
                    t.type === "FLUSH" ||
                    t.type === "DROP_ANIMATE") &&
                    e.stopPublishing(),
                    r(t);
                };
              };
            };
          },
          jo = function (e) {
            var r = !1;
            return function () {
              return function (t) {
                return function (n) {
                  if (n.type === "INITIAL_PUBLISH") {
                    (r = !0),
                      e.tryRecordFocus(n.payload.critical.draggable.id),
                      t(n),
                      e.tryRestoreFocusRecorded();
                    return;
                  }
                  if ((t(n), !!r)) {
                    if (n.type === "FLUSH") {
                      (r = !1), e.tryRestoreFocusRecorded();
                      return;
                    }
                    if (n.type === "DROP_COMPLETE") {
                      r = !1;
                      var a = n.payload.completed.result;
                      a.combine &&
                        e.tryShiftRecord(a.draggableId, a.combine.draggableId),
                        e.tryRestoreFocusRecorded();
                    }
                  }
                };
              };
            };
          },
          zo = function (r) {
            return (
              r.type === "DROP_COMPLETE" ||
              r.type === "DROP_ANIMATE" ||
              r.type === "FLUSH"
            );
          },
          Ko = function (e) {
            return function (r) {
              return function (t) {
                return function (n) {
                  if (zo(n)) {
                    e.stop(), t(n);
                    return;
                  }
                  if (n.type === "INITIAL_PUBLISH") {
                    t(n);
                    var a = r.getState();
                    a.phase !== "DRAGGING" && b(!1), e.start(a);
                    return;
                  }
                  t(n), e.scroll(r.getState());
                };
              };
            };
          },
          Yo = function (e) {
            return function (r) {
              return function (t) {
                if ((r(t), t.type === "PUBLISH_WHILE_DRAGGING")) {
                  var n = e.getState();
                  n.phase === "DROP_PENDING" &&
                    (n.isWaiting || e.dispatch(mn({ reason: n.reason })));
                }
              };
            };
          },
          Jo = B.Zz,
          Xo = function (e) {
            var r = e.dimensionMarshal,
              t = e.focusMarshal,
              n = e.styleMarshal,
              a = e.getResponders,
              i = e.announce,
              o = e.autoScroller;
            return (0, B.y$)(
              ao,
              Jo(
                (0, B.Tw)(
                  Co(n),
                  $o(r),
                  So(r),
                  Bo,
                  Vo,
                  qo,
                  Yo,
                  Ko(o),
                  Mo,
                  jo(t),
                  Ho(a, i),
                ),
              ),
            );
          },
          at = function () {
            return { additions: {}, removals: {}, modified: {} };
          };
        function Qo(e) {
          var r = e.registry,
            t = e.callbacks,
            n = at(),
            a = null,
            i = function () {
              a ||
                (t.collectionStarting(),
                (a = requestAnimationFrame(function () {
                  (a = null), je();
                  var d = n,
                    c = d.additions,
                    u = d.removals,
                    p = d.modified,
                    v = Object.keys(c)
                      .map(function (D) {
                        return r.draggable.getById(D).getDimension(V);
                      })
                      .sort(function (D, I) {
                        return D.descriptor.index - I.descriptor.index;
                      }),
                    g = Object.keys(p).map(function (D) {
                      var I = r.droppable.getById(D),
                        S = I.callbacks.getScrollWhileDragging();
                      return { droppableId: D, scroll: S };
                    }),
                    h = { additions: v, removals: Object.keys(u), modified: g };
                  (n = at()), ze(), t.publish(h);
                })));
            },
            o = function (d) {
              var c = d.descriptor.id;
              (n.additions[c] = d),
                (n.modified[d.descriptor.droppableId] = !0),
                n.removals[c] && delete n.removals[c],
                i();
            },
            l = function (d) {
              var c = d.descriptor;
              (n.removals[c.id] = !0),
                (n.modified[c.droppableId] = !0),
                n.additions[c.id] && delete n.additions[c.id],
                i();
            },
            s = function () {
              a && (cancelAnimationFrame(a), (a = null), (n = at()));
            };
          return { add: o, remove: l, stop: s };
        }
        var xn = function (e) {
            var r = e.scrollHeight,
              t = e.scrollWidth,
              n = e.height,
              a = e.width,
              i = Y({ x: t, y: r }, { x: a, y: n }),
              o = { x: Math.max(0, i.x), y: Math.max(0, i.y) };
            return o;
          },
          Sn = function (e) {
            var r = e.document.documentElement;
            return r || b(!1), r;
          },
          Cn = function (e) {
            var r = Sn(e),
              t = xn({
                scrollHeight: r.scrollHeight,
                scrollWidth: r.scrollWidth,
                width: r.clientWidth,
                height: r.clientHeight,
              });
            return t;
          },
          Zo = function (e) {
            var r = In(e),
              t = Cn(e),
              n = r.y,
              a = r.x,
              i = Sn(e),
              o = i.clientWidth,
              l = i.clientHeight,
              s = a + o,
              f = n + l,
              d = (0, G.l)({ top: n, left: a, right: s, bottom: f }),
              c = {
                frame: d,
                scroll: {
                  initial: r,
                  current: r,
                  max: t,
                  diff: { value: V, displacement: V },
                },
              };
            return c;
          },
          _o = function (e) {
            var r = e.windowToUse,
              t = e.critical,
              n = e.scrollOptions,
              a = e.registry;
            je();
            var i = Zo(r),
              o = i.scroll.current,
              l = t.droppable,
              s = a.droppable.getAllByType(l.type).map(function (u) {
                return u.callbacks.getDimensionAndWatchScroll(o, n);
              }),
              f = a.draggable.getAllByType(t.draggable.type).map(function (u) {
                return u.getDimension(o);
              }),
              d = { draggables: $t(f), droppables: qt(s) };
            ze();
            var c = { dimensions: d, critical: t, viewport: i };
            return c;
          };
        function wn(e, r, t) {
          if (t.descriptor.id === r.id || t.descriptor.type !== r.type)
            return !1;
          var n = e.droppable.getById(t.descriptor.droppableId);
          return n.descriptor.mode === "virtual";
        }
        var rl = function (e, r, t) {
            var n = null,
              a = Qo({
                callbacks: {
                  publish: t.publishWhileDragging,
                  collectionStarting: t.collectionStarting,
                },
                registry: r,
              }),
              i = function (v, g) {
                r.droppable.exists(v) || b(!1),
                  n && t.updateDroppableIsEnabled({ id: v, isEnabled: g });
              },
              o = function (v, g) {
                n &&
                  (r.droppable.exists(v) || b(!1),
                  t.updateDroppableIsCombineEnabled({
                    id: v,
                    isCombineEnabled: g,
                  }));
              },
              l = function (v, g) {
                n &&
                  (r.droppable.exists(v) || b(!1),
                  t.updateDroppableScroll({ id: v, newScroll: g }));
              },
              s = function (v, g) {
                n && r.droppable.getById(v).callbacks.scroll(g);
              },
              f = function () {
                if (n) {
                  a.stop();
                  var v = n.critical.droppable;
                  r.droppable.getAllByType(v.type).forEach(function (g) {
                    return g.callbacks.dragStopped();
                  }),
                    n.unsubscribe(),
                    (n = null);
                }
              },
              d = function (v) {
                n || b(!1);
                var g = n.critical.draggable;
                v.type === "ADDITION" && wn(r, g, v.value) && a.add(v.value),
                  v.type === "REMOVAL" &&
                    wn(r, g, v.value) &&
                    a.remove(v.value);
              },
              c = function (v) {
                n && b(!1);
                var g = r.draggable.getById(v.draggableId),
                  h = r.droppable.getById(g.descriptor.droppableId),
                  D = { draggable: g.descriptor, droppable: h.descriptor },
                  I = r.subscribe(d);
                return (
                  (n = { critical: D, unsubscribe: I }),
                  _o({
                    windowToUse: e,
                    critical: D,
                    registry: r,
                    scrollOptions: v.scrollOptions,
                  })
                );
              },
              u = {
                updateDroppableIsEnabled: i,
                updateDroppableIsCombineEnabled: o,
                scrollDroppable: s,
                updateDroppableScroll: l,
                startPublishing: c,
                stopPublishing: f,
              };
            return u;
          },
          An = function (e, r) {
            return e.phase === "IDLE"
              ? !0
              : e.phase !== "DROP_ANIMATING" ||
                  e.completed.result.draggableId === r
                ? !1
                : e.completed.result.reason === "DROP";
          },
          tl = function (e) {
            window.scrollBy(e.x, e.y);
          },
          nl = H(function (e) {
            return cr(e).filter(function (r) {
              return !(!r.isEnabled || !r.frame);
            });
          }),
          al = function (r, t) {
            var n = De(nl(t), function (a) {
              return a.frame || b(!1), on(a.frame.pageMarginBox)(r);
            });
            return n;
          },
          il = function (e) {
            var r = e.center,
              t = e.destination,
              n = e.droppables;
            if (t) {
              var a = n[t];
              return a.frame ? a : null;
            }
            var i = al(r, n);
            return i;
          },
          fe = {
            startFromPercentage: 0.25,
            maxScrollAtPercentage: 0.05,
            maxPixelScroll: 28,
            ease: function (r) {
              return Math.pow(r, 2);
            },
            durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
          },
          ol = function (e, r) {
            var t = e[r.size] * fe.startFromPercentage,
              n = e[r.size] * fe.maxScrollAtPercentage,
              a = { startScrollingFrom: t, maxScrollValueAt: n };
            return a;
          },
          En = function (e) {
            var r = e.startOfRange,
              t = e.endOfRange,
              n = e.current,
              a = t - r;
            if (a === 0) return 0;
            var i = n - r,
              o = i / a;
            return o;
          },
          it = 1,
          ll = function (e, r) {
            if (e > r.startScrollingFrom) return 0;
            if (e <= r.maxScrollValueAt) return fe.maxPixelScroll;
            if (e === r.startScrollingFrom) return it;
            var t = En({
                startOfRange: r.maxScrollValueAt,
                endOfRange: r.startScrollingFrom,
                current: e,
              }),
              n = 1 - t,
              a = fe.maxPixelScroll * fe.ease(n);
            return Math.ceil(a);
          },
          Pn = fe.durationDampening.accelerateAt,
          Rn = fe.durationDampening.stopDampeningAt,
          sl = function (e, r) {
            var t = r,
              n = Rn,
              a = Date.now(),
              i = a - t;
            if (i >= Rn) return e;
            if (i < Pn) return it;
            var o = En({ startOfRange: Pn, endOfRange: n, current: i }),
              l = e * fe.ease(o);
            return Math.ceil(l);
          },
          Bn = function (e) {
            var r = e.distanceToEdge,
              t = e.thresholds,
              n = e.dragStartTime,
              a = e.shouldUseTimeDampening,
              i = ll(r, t);
            return i === 0 ? 0 : a ? Math.max(sl(i, n), it) : i;
          },
          On = function (e) {
            var r = e.container,
              t = e.distanceToEdges,
              n = e.dragStartTime,
              a = e.axis,
              i = e.shouldUseTimeDampening,
              o = ol(r, a),
              l = t[a.end] < t[a.start];
            return l
              ? Bn({
                  distanceToEdge: t[a.end],
                  thresholds: o,
                  dragStartTime: n,
                  shouldUseTimeDampening: i,
                })
              : -1 *
                  Bn({
                    distanceToEdge: t[a.start],
                    thresholds: o,
                    dragStartTime: n,
                    shouldUseTimeDampening: i,
                  });
          },
          ul = function (e) {
            var r = e.container,
              t = e.subject,
              n = e.proposedScroll,
              a = t.height > r.height,
              i = t.width > r.width;
            return !i && !a
              ? n
              : i && a
                ? null
                : { x: i ? 0 : n.x, y: a ? 0 : n.y };
          },
          cl = Ht(function (e) {
            return e === 0 ? 0 : e;
          }),
          Tn = function (e) {
            var r = e.dragStartTime,
              t = e.container,
              n = e.subject,
              a = e.center,
              i = e.shouldUseTimeDampening,
              o = {
                top: a.y - t.top,
                right: t.right - a.x,
                bottom: t.bottom - a.y,
                left: a.x - t.left,
              },
              l = On({
                container: t,
                distanceToEdges: o,
                dragStartTime: r,
                axis: Vr,
                shouldUseTimeDampening: i,
              }),
              s = On({
                container: t,
                distanceToEdges: o,
                dragStartTime: r,
                axis: Kt,
                shouldUseTimeDampening: i,
              }),
              f = cl({ x: s, y: l });
            if (ce(f, V)) return null;
            var d = ul({ container: t, subject: n, proposedScroll: f });
            return d ? (ce(d, V) ? null : d) : null;
          },
          dl = Ht(function (e) {
            return e === 0 ? 0 : e > 0 ? 1 : -1;
          }),
          ot = (function () {
            var e = function (t, n) {
              return t < 0 ? t : t > n ? t - n : 0;
            };
            return function (r) {
              var t = r.current,
                n = r.max,
                a = r.change,
                i = q(t, a),
                o = { x: e(i.x, n.x), y: e(i.y, n.y) };
              return ce(o, V) ? null : o;
            };
          })(),
          Nn = function (r) {
            var t = r.max,
              n = r.current,
              a = r.change,
              i = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
              o = dl(a),
              l = ot({ max: i, current: n, change: o });
            return !l || (o.x !== 0 && l.x === 0) || (o.y !== 0 && l.y === 0);
          },
          lt = function (r, t) {
            return Nn({
              current: r.scroll.current,
              max: r.scroll.max,
              change: t,
            });
          },
          fl = function (r, t) {
            if (!lt(r, t)) return null;
            var n = r.scroll.max,
              a = r.scroll.current;
            return ot({ current: a, max: n, change: t });
          },
          st = function (r, t) {
            var n = r.frame;
            return n
              ? Nn({ current: n.scroll.current, max: n.scroll.max, change: t })
              : !1;
          },
          pl = function (r, t) {
            var n = r.frame;
            return !n || !st(r, t)
              ? null
              : ot({ current: n.scroll.current, max: n.scroll.max, change: t });
          },
          vl = function (e) {
            var r = e.viewport,
              t = e.subject,
              n = e.center,
              a = e.dragStartTime,
              i = e.shouldUseTimeDampening,
              o = Tn({
                dragStartTime: a,
                container: r.frame,
                subject: t,
                center: n,
                shouldUseTimeDampening: i,
              });
            return o && lt(r, o) ? o : null;
          },
          gl = function (e) {
            var r = e.droppable,
              t = e.subject,
              n = e.center,
              a = e.dragStartTime,
              i = e.shouldUseTimeDampening,
              o = r.frame;
            if (!o) return null;
            var l = Tn({
              dragStartTime: a,
              container: o.pageMarginBox,
              subject: t,
              center: n,
              shouldUseTimeDampening: i,
            });
            return l && st(r, l) ? l : null;
          },
          Mn = function (e) {
            var r = e.state,
              t = e.dragStartTime,
              n = e.shouldUseTimeDampening,
              a = e.scrollWindow,
              i = e.scrollDroppable,
              o = r.current.page.borderBoxCenter,
              l = r.dimensions.draggables[r.critical.draggable.id],
              s = l.page.marginBox;
            if (r.isWindowScrollAllowed) {
              var f = r.viewport,
                d = vl({
                  dragStartTime: t,
                  viewport: f,
                  subject: s,
                  center: o,
                  shouldUseTimeDampening: n,
                });
              if (d) {
                a(d);
                return;
              }
            }
            var c = il({
              center: o,
              destination: J(r.impact),
              droppables: r.dimensions.droppables,
            });
            if (c) {
              var u = gl({
                dragStartTime: t,
                droppable: c,
                subject: s,
                center: o,
                shouldUseTimeDampening: n,
              });
              u && i(c.descriptor.id, u);
            }
          },
          ml = function (e) {
            var r = e.scrollWindow,
              t = e.scrollDroppable,
              n = (0, Ge.A)(r),
              a = (0, Ge.A)(t),
              i = null,
              o = function (d) {
                i || b(!1);
                var c = i,
                  u = c.shouldUseTimeDampening,
                  p = c.dragStartTime;
                Mn({
                  state: d,
                  scrollWindow: n,
                  scrollDroppable: a,
                  dragStartTime: p,
                  shouldUseTimeDampening: u,
                });
              },
              l = function (d) {
                je(), i && b(!1);
                var c = Date.now(),
                  u = !1,
                  p = function () {
                    u = !0;
                  };
                Mn({
                  state: d,
                  dragStartTime: 0,
                  shouldUseTimeDampening: !1,
                  scrollWindow: p,
                  scrollDroppable: p,
                }),
                  (i = { dragStartTime: c, shouldUseTimeDampening: u }),
                  ze(),
                  u && o(d);
              },
              s = function () {
                i && (n.cancel(), a.cancel(), (i = null));
              };
            return { start: l, stop: s, scroll: o };
          },
          bl = function (e) {
            var r = e.move,
              t = e.scrollDroppable,
              n = e.scrollWindow,
              a = function (f, d) {
                var c = q(f.current.client.selection, d);
                r({ client: c });
              },
              i = function (f, d) {
                if (!st(f, d)) return d;
                var c = pl(f, d);
                if (!c) return t(f.descriptor.id, d), null;
                var u = Y(d, c);
                t(f.descriptor.id, u);
                var p = Y(d, u);
                return p;
              },
              o = function (f, d, c) {
                if (!f || !lt(d, c)) return c;
                var u = fl(d, c);
                if (!u) return n(c), null;
                var p = Y(c, u);
                n(p);
                var v = Y(c, p);
                return v;
              },
              l = function (f) {
                var d = f.scrollJumpRequest;
                if (d) {
                  var c = J(f.impact);
                  c || b(!1);
                  var u = i(f.dimensions.droppables[c], d);
                  if (u) {
                    var p = f.viewport,
                      v = o(f.isWindowScrollAllowed, p, u);
                    v && a(f, v);
                  }
                }
              };
            return l;
          },
          hl = function (e) {
            var r = e.scrollDroppable,
              t = e.scrollWindow,
              n = e.move,
              a = ml({ scrollWindow: t, scrollDroppable: r }),
              i = bl({ move: n, scrollWindow: t, scrollDroppable: r }),
              o = function (f) {
                if (f.phase === "DRAGGING") {
                  if (f.movementMode === "FLUID") {
                    a.scroll(f);
                    return;
                  }
                  f.scrollJumpRequest && i(f);
                }
              },
              l = { scroll: o, start: a.start, stop: a.stop };
            return l;
          },
          Re = "data-rbd",
          Be = (function () {
            var e = Re + "-drag-handle";
            return {
              base: e,
              draggableId: e + "-draggable-id",
              contextId: e + "-context-id",
            };
          })(),
          ut = (function () {
            var e = Re + "-draggable";
            return { base: e, contextId: e + "-context-id", id: e + "-id" };
          })(),
          yl = (function () {
            var e = Re + "-droppable";
            return { base: e, contextId: e + "-context-id", id: e + "-id" };
          })(),
          Ln = { contextId: Re + "-scroll-container-context-id" },
          Dl = function (r) {
            return function (t) {
              return "[" + t + '="' + r + '"]';
            };
          },
          Xe = function (r, t) {
            return r
              .map(function (n) {
                var a = n.styles[t];
                return a ? n.selector + " { " + a + " }" : "";
              })
              .join(" ");
          },
          Il = "pointer-events: none;",
          xl = function (e) {
            var r = Dl(e),
              t = (function () {
                var l = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
                return {
                  selector: r(Be.contextId),
                  styles: {
                    always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                    resting: l,
                    dragging: Il,
                    dropAnimating: l,
                  },
                };
              })(),
              n = (function () {
                var l =
                  `
      transition: ` +
                  Ye.outOfTheWay +
                  `;
    `;
                return {
                  selector: r(ut.contextId),
                  styles: { dragging: l, dropAnimating: l, userCancel: l },
                };
              })(),
              a = {
                selector: r(yl.contextId),
                styles: { always: "overflow-anchor: none;" },
              },
              i = {
                selector: "body, :host",
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
              o = [n, t, a, i];
            return {
              always: Xe(o, "always"),
              resting: Xe(o, "resting"),
              dragging: Xe(o, "dragging"),
              dropAnimating: Xe(o, "dropAnimating"),
              userCancel: Xe(o, "userCancel"),
            };
          },
          X =
            typeof window < "u" &&
            typeof window.document < "u" &&
            typeof window.document.createElement < "u"
              ? m.useLayoutEffect
              : m.useEffect,
          Sl = function (r) {
            var t = r || document.querySelector("head");
            return t || b(!1), t;
          },
          Fn = function (r) {
            var t = document.createElement("style");
            return r && t.setAttribute("nonce", r), (t.type = "text/css"), t;
          };
        function Cl(e, r, t) {
          var n = (0, y.Kr)(
              function () {
                return xl(e);
              },
              [e],
            ),
            a = (0, m.useRef)(null),
            i = (0, m.useRef)(null),
            o = (0, y.hb)(
              H(function (u) {
                var p = i.current;
                p || b(!1), (p.textContent = u);
              }),
              [],
            ),
            l = (0, y.hb)(function (u) {
              var p = a.current;
              p || b(!1), (p.textContent = u);
            }, []);
          X(
            function () {
              (!a.current && !i.current) || b(!1);
              var u = Fn(r),
                p = Fn(r);
              (a.current = u),
                (i.current = p),
                u.setAttribute(Re + "-always", e),
                p.setAttribute(Re + "-dynamic", e);
              var v = Sl(t);
              return (
                v.appendChild(u),
                v.appendChild(p),
                l(n.always),
                o(n.resting),
                function () {
                  var g = function (D) {
                    var I = D.current;
                    I || b(!1), v.removeChild(I), (D.current = null);
                  };
                  g(a), g(i);
                }
              );
            },
            [r, l, o, n.always, n.resting, e, t],
          );
          var s = (0, y.hb)(
              function () {
                return o(n.dragging);
              },
              [o, n.dragging],
            ),
            f = (0, y.hb)(
              function (u) {
                if (u === "DROP") {
                  o(n.dropAnimating);
                  return;
                }
                o(n.userCancel);
              },
              [o, n.dropAnimating, n.userCancel],
            ),
            d = (0, y.hb)(
              function () {
                i.current && o(n.resting);
              },
              [o, n.resting],
            ),
            c = (0, y.Kr)(
              function () {
                return { dragging: s, dropping: f, resting: d };
              },
              [s, f, d],
            );
          return c;
        }
        function Gn(e) {
          var r = e.composedPath && e.composedPath()[0];
          return r || e.target;
        }
        function wl(e) {
          var r = e && e.composedPath && e.composedPath()[0],
            t = r && r.getRootNode();
          return t || document;
        }
        function ct(e, r, t) {
          var n = e && e.getRootNode(),
            a = n && n.querySelectorAll ? n : document,
            i = ii(a.querySelectorAll(r)),
            o = De(i, t);
          return !o && a.host ? ct(a.host, r, t) : o;
        }
        var Wn = function (e) {
          return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
        };
        function Qe(e) {
          return e instanceof Wn(e).HTMLElement;
        }
        function kn(e, r, t) {
          var n = "[" + Be.contextId + '="' + e + '"]',
            a = ct(t, n, function (i) {
              return i.getAttribute(Be.draggableId) === r;
            });
          return !a || !Qe(a) ? null : a;
        }
        function Al(e) {
          var r = (0, m.useRef)({}),
            t = (0, m.useRef)(null),
            n = (0, m.useRef)(null),
            a = (0, m.useRef)(!1),
            i = (0, y.hb)(function (u, p) {
              var v = { id: u, focus: p };
              return (
                (r.current[u] = v),
                function () {
                  var h = r.current,
                    D = h[u];
                  D !== v && delete h[u];
                }
              );
            }, []),
            o = (0, y.hb)(
              function (u) {
                var p = kn(e, u);
                p && p !== document.activeElement && p.focus();
              },
              [e],
            ),
            l = (0, y.hb)(function (u, p) {
              t.current === u && (t.current = p);
            }, []),
            s = (0, y.hb)(
              function () {
                n.current ||
                  (a.current &&
                    (n.current = requestAnimationFrame(function () {
                      n.current = null;
                      var u = t.current;
                      u && o(u);
                    })));
              },
              [o],
            ),
            f = (0, y.hb)(function (u) {
              t.current = null;
              var p = document.activeElement;
              p && p.getAttribute(Be.draggableId) === u && (t.current = u);
            }, []);
          X(function () {
            return (
              (a.current = !0),
              function () {
                a.current = !1;
                var u = n.current;
                u && cancelAnimationFrame(u);
              }
            );
          }, []);
          var d = (0, y.Kr)(
            function () {
              return {
                register: i,
                tryRecordFocus: f,
                tryRestoreFocusRecorded: s,
                tryShiftRecord: l,
              };
            },
            [i, f, s, l],
          );
          return d;
        }
        function El() {
          var e = { draggables: {}, droppables: {} },
            r = [];
          function t(c) {
            return (
              r.push(c),
              function () {
                var p = r.indexOf(c);
                p !== -1 && r.splice(p, 1);
              }
            );
          }
          function n(c) {
            r.length &&
              r.forEach(function (u) {
                return u(c);
              });
          }
          function a(c) {
            return e.draggables[c] || null;
          }
          function i(c) {
            var u = a(c);
            return u || b(!1), u;
          }
          var o = {
            register: function (u) {
              (e.draggables[u.descriptor.id] = u),
                n({ type: "ADDITION", value: u });
            },
            update: function (u, p) {
              var v = e.draggables[p.descriptor.id];
              v &&
                v.uniqueId === u.uniqueId &&
                (delete e.draggables[p.descriptor.id],
                (e.draggables[u.descriptor.id] = u));
            },
            unregister: function (u) {
              var p = u.descriptor.id,
                v = a(p);
              v &&
                u.uniqueId === v.uniqueId &&
                (delete e.draggables[p], n({ type: "REMOVAL", value: u }));
            },
            getById: i,
            findById: a,
            exists: function (u) {
              return !!a(u);
            },
            getAllByType: function (u) {
              return ur(e.draggables).filter(function (p) {
                return p.descriptor.type === u;
              });
            },
          };
          function l(c) {
            return e.droppables[c] || null;
          }
          function s(c) {
            var u = l(c);
            return u || b(!1), u;
          }
          var f = {
            register: function (u) {
              e.droppables[u.descriptor.id] = u;
            },
            unregister: function (u) {
              var p = l(u.descriptor.id);
              p &&
                u.uniqueId === p.uniqueId &&
                delete e.droppables[u.descriptor.id];
            },
            getById: s,
            findById: l,
            exists: function (u) {
              return !!l(u);
            },
            getAllByType: function (u) {
              return ur(e.droppables).filter(function (p) {
                return p.descriptor.type === u;
              });
            },
          };
          function d() {
            (e.draggables = {}), (e.droppables = {}), (r.length = 0);
          }
          return { draggable: o, droppable: f, subscribe: t, clean: d };
        }
        function Pl() {
          var e = (0, y.Kr)(El, []);
          return (
            (0, m.useEffect)(
              function () {
                return function () {
                  requestAnimationFrame(e.clean);
                };
              },
              [e],
            ),
            e
          );
        }
        var dt = m.createContext(null),
          Ze = function () {
            var e = document.body;
            return e || b(!1), e;
          },
          Rl = {
            position: "absolute",
            width: "1px",
            height: "1px",
            margin: "-1px",
            border: "0",
            padding: "0",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            "clip-path": "inset(100%)",
          },
          Bl = function (r) {
            return "rbd-announcement-" + r;
          };
        function Ol(e) {
          var r = (0, y.Kr)(
              function () {
                return Bl(e);
              },
              [e],
            ),
            t = (0, m.useRef)(null);
          (0, m.useEffect)(
            function () {
              var i = document.createElement("div");
              return (
                (t.current = i),
                (i.id = r),
                i.setAttribute("aria-live", "assertive"),
                i.setAttribute("aria-atomic", "true"),
                (0, C.A)(i.style, Rl),
                Ze().appendChild(i),
                function () {
                  setTimeout(function () {
                    var s = Ze();
                    s.contains(i) && s.removeChild(i),
                      i === t.current && (t.current = null);
                  });
                }
              );
            },
            [r],
          );
          var n = (0, y.hb)(function (a) {
            var i = t.current;
            if (i) {
              i.textContent = a;
              return;
            }
          }, []);
          return n;
        }
        var Un = 0,
          Tl = { separator: "::" };
        function Nl() {
          Un = 0;
        }
        function ft(e, r) {
          return (
            r === void 0 && (r = Tl),
            (0, y.Kr)(
              function () {
                return "" + e + r.separator + Un++;
              },
              [r.separator, e],
            )
          );
        }
        function Ml(e) {
          var r = e.contextId,
            t = e.uniqueId;
          return "rbd-hidden-text-" + r + "-" + t;
        }
        function Ll(e) {
          var r = e.contextId,
            t = e.text,
            n = ft("hidden-text", { separator: "-" }),
            a = (0, y.Kr)(
              function () {
                return Ml({ contextId: r, uniqueId: n });
              },
              [n, r],
            );
          return (
            (0, m.useEffect)(
              function () {
                var o = document.createElement("div");
                return (
                  (o.id = a),
                  (o.textContent = t),
                  (o.style.display = "none"),
                  Ze().appendChild(o),
                  function () {
                    var s = Ze();
                    s.contains(o) && s.removeChild(o);
                  }
                );
              },
              [a, t],
            ),
            a
          );
        }
        var mr = m.createContext(null),
          Fl = {
            react: "^16.8.5 || ^17.0.0 || ^18.0.0",
            "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
          },
          Gl = /(\d+)\.(\d+)\.(\d+)/,
          Hn = function (r) {
            var t = Gl.exec(r);
            t == null && b(!1);
            var n = Number(t[1]),
              a = Number(t[2]),
              i = Number(t[3]);
            return { major: n, minor: a, patch: i, raw: r };
          },
          Wl = function (r, t) {
            return t.major > r.major
              ? !0
              : t.major < r.major
                ? !1
                : t.minor > r.minor
                  ? !0
                  : t.minor < r.minor
                    ? !1
                    : t.patch >= r.patch;
          },
          kl = function (e, r) {
            var t = Hn(e),
              n = Hn(r);
            Wl(t, n);
          },
          Wu = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md
`,
          Ul = function (e) {
            var r = e.doctype;
            r && (r.name.toLowerCase(), r.publicId);
          };
        function ku(e) {}
        function _e(e, r) {}
        function Hl() {
          _e(function () {
            kl(Fl.react, m.version), Ul(document);
          }, []);
        }
        function pt(e) {
          var r = (0, m.useRef)(e);
          return (
            (0, m.useEffect)(function () {
              r.current = e;
            }),
            r
          );
        }
        function Vl() {
          var e = null;
          function r() {
            return !!e;
          }
          function t(o) {
            return o === e;
          }
          function n(o) {
            e && b(!1);
            var l = { abandon: o };
            return (e = l), l;
          }
          function a() {
            e || b(!1), (e = null);
          }
          function i() {
            e && (e.abandon(), a());
          }
          return {
            isClaimed: r,
            isActive: t,
            claim: n,
            release: a,
            tryAbandon: i,
          };
        }
        var ql = 9,
          $l = 13,
          vt = 27,
          Vn = 32,
          jl = 33,
          zl = 34,
          Kl = 35,
          Yl = 36,
          Jl = 37,
          Xl = 38,
          Ql = 39,
          Zl = 40,
          br,
          _l = ((br = {}), (br[$l] = !0), (br[ql] = !0), br),
          qn = function (e) {
            _l[e.keyCode] && e.preventDefault();
          },
          hr = (function () {
            var e = "visibilitychange";
            if (typeof document > "u") return e;
            var r = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e],
              t = De(r, function (n) {
                return "on" + n in document;
              });
            return t || e;
          })(),
          $n = 0,
          jn = 5;
        function es(e, r) {
          return Math.abs(r.x - e.x) >= jn || Math.abs(r.y - e.y) >= jn;
        }
        var zn = { type: "IDLE" };
        function rs(e) {
          var r = e.cancel,
            t = e.completed,
            n = e.getPhase,
            a = e.setPhase;
          return [
            {
              eventName: "mousemove",
              fn: function (o) {
                var l = o.button,
                  s = o.clientX,
                  f = o.clientY;
                if (l === $n) {
                  var d = { x: s, y: f },
                    c = n();
                  if (c.type === "DRAGGING") {
                    o.preventDefault(), c.actions.move(d);
                    return;
                  }
                  c.type !== "PENDING" && b(!1);
                  var u = c.point;
                  if (es(u, d)) {
                    o.preventDefault();
                    var p = c.actions.fluidLift(d);
                    a({ type: "DRAGGING", actions: p });
                  }
                }
              },
            },
            {
              eventName: "mouseup",
              fn: function (o) {
                var l = n();
                if (l.type !== "DRAGGING") {
                  r();
                  return;
                }
                o.preventDefault(),
                  l.actions.drop({ shouldBlockNextClick: !0 }),
                  t();
              },
            },
            {
              eventName: "mousedown",
              fn: function (o) {
                n().type === "DRAGGING" && o.preventDefault(), r();
              },
            },
            {
              eventName: "keydown",
              fn: function (o) {
                var l = n();
                if (l.type === "PENDING") {
                  r();
                  return;
                }
                if (o.keyCode === vt) {
                  o.preventDefault(), r();
                  return;
                }
                qn(o);
              },
            },
            { eventName: "resize", fn: r },
            {
              eventName: "scroll",
              options: { passive: !0, capture: !1 },
              fn: function () {
                n().type === "PENDING" && r();
              },
            },
            {
              eventName: "webkitmouseforcedown",
              fn: function (o) {
                var l = n();
                if (
                  (l.type === "IDLE" && b(!1),
                  l.actions.shouldRespectForcePress())
                ) {
                  r();
                  return;
                }
                o.preventDefault();
              },
            },
            { eventName: hr, fn: r },
          ];
        }
        function ts(e) {
          var r = (0, m.useRef)(zn),
            t = (0, m.useRef)(ue),
            n = (0, y.Kr)(
              function () {
                return {
                  eventName: "mousedown",
                  fn: function (c) {
                    if (
                      !c.defaultPrevented &&
                      c.button === $n &&
                      !(c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)
                    ) {
                      var u = e.findClosestDraggableId(c);
                      if (u) {
                        var p = e.tryGetLock(u, o, { sourceEvent: c });
                        if (p) {
                          c.preventDefault();
                          var v = { x: c.clientX, y: c.clientY };
                          t.current(), f(p, v);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            a = (0, y.Kr)(
              function () {
                return {
                  eventName: "webkitmouseforcewillbegin",
                  fn: function (c) {
                    if (!c.defaultPrevented) {
                      var u = e.findClosestDraggableId(c);
                      if (u) {
                        var p = e.findOptionsForDraggable(u);
                        p &&
                          (p.shouldRespectForcePress ||
                            (e.canGetLock(u) && c.preventDefault()));
                      }
                    }
                  },
                };
              },
              [e],
            ),
            i = (0, y.hb)(
              function () {
                var c = { passive: !1, capture: !0 };
                t.current = _(e.getWindow(), [a, n], c);
              },
              [e, a, n],
            ),
            o = (0, y.hb)(
              function () {
                var d = r.current;
                d.type !== "IDLE" && ((r.current = zn), t.current(), i());
              },
              [i],
            ),
            l = (0, y.hb)(
              function () {
                var d = r.current;
                o(),
                  d.type === "DRAGGING" &&
                    d.actions.cancel({ shouldBlockNextClick: !0 }),
                  d.type === "PENDING" && d.actions.abort();
              },
              [o],
            ),
            s = (0, y.hb)(
              function () {
                var c = { capture: !0, passive: !1 },
                  u = rs({
                    cancel: l,
                    completed: o,
                    getPhase: function () {
                      return r.current;
                    },
                    setPhase: function (v) {
                      r.current = v;
                    },
                  });
                t.current = _(e.getWindow(), u, c);
              },
              [e, l, o],
            ),
            f = (0, y.hb)(
              function (c, u) {
                r.current.type !== "IDLE" && b(!1),
                  (r.current = { type: "PENDING", point: u, actions: c }),
                  s();
              },
              [s],
            );
          X(
            function () {
              return (
                i(),
                function () {
                  t.current();
                }
              );
            },
            [i],
          );
        }
        var Oe;
        function ns() {}
        var as =
          ((Oe = {}),
          (Oe[zl] = !0),
          (Oe[jl] = !0),
          (Oe[Yl] = !0),
          (Oe[Kl] = !0),
          Oe);
        function is(e, r) {
          function t() {
            r(), e.cancel();
          }
          function n() {
            r(), e.drop();
          }
          return [
            {
              eventName: "keydown",
              fn: function (i) {
                if (i.keyCode === vt) {
                  i.preventDefault(), t();
                  return;
                }
                if (i.keyCode === Vn) {
                  i.preventDefault(), n();
                  return;
                }
                if (i.keyCode === Zl) {
                  i.preventDefault(), e.moveDown();
                  return;
                }
                if (i.keyCode === Xl) {
                  i.preventDefault(), e.moveUp();
                  return;
                }
                if (i.keyCode === Ql) {
                  i.preventDefault(), e.moveRight();
                  return;
                }
                if (i.keyCode === Jl) {
                  i.preventDefault(), e.moveLeft();
                  return;
                }
                if (as[i.keyCode]) {
                  i.preventDefault();
                  return;
                }
                qn(i);
              },
            },
            { eventName: "mousedown", fn: t },
            { eventName: "mouseup", fn: t },
            { eventName: "click", fn: t },
            { eventName: "touchstart", fn: t },
            { eventName: "resize", fn: t },
            { eventName: "wheel", fn: t, options: { passive: !0 } },
            { eventName: hr, fn: t },
          ];
        }
        function os(e) {
          var r = (0, m.useRef)(ns),
            t = (0, y.Kr)(
              function () {
                return {
                  eventName: "keydown",
                  fn: function (i) {
                    if (i.defaultPrevented || i.keyCode !== Vn) return;
                    var o = e.findClosestDraggableId(i);
                    if (!o) return;
                    var l = e.tryGetLock(o, d, { sourceEvent: i });
                    if (!l) return;
                    i.preventDefault();
                    var s = !0,
                      f = l.snapLift();
                    r.current();
                    function d() {
                      s || b(!1), (s = !1), r.current(), n();
                    }
                    r.current = _(e.getWindow(), is(f, d), {
                      capture: !0,
                      passive: !1,
                    });
                  },
                };
              },
              [e],
            ),
            n = (0, y.hb)(
              function () {
                var i = { passive: !1, capture: !0 };
                r.current = _(e.getWindow(), [t], i);
              },
              [e, t],
            );
          X(
            function () {
              return (
                n(),
                function () {
                  r.current();
                }
              );
            },
            [n],
          );
        }
        var gt = { type: "IDLE" },
          ls = 120,
          ss = 0.15;
        function us(e) {
          var r = e.cancel,
            t = e.getPhase;
          return [
            { eventName: "orientationchange", fn: r },
            { eventName: "resize", fn: r },
            {
              eventName: "contextmenu",
              fn: function (a) {
                a.preventDefault();
              },
            },
            {
              eventName: "keydown",
              fn: function (a) {
                if (t().type !== "DRAGGING") {
                  r();
                  return;
                }
                a.keyCode === vt && a.preventDefault(), r();
              },
            },
            { eventName: hr, fn: r },
          ];
        }
        function cs(e) {
          var r = e.cancel,
            t = e.completed,
            n = e.getPhase;
          return [
            {
              eventName: "touchmove",
              options: { capture: !1 },
              fn: function (i) {
                var o = n();
                if (o.type !== "DRAGGING") {
                  r();
                  return;
                }
                o.hasMoved = !0;
                var l = i.touches[0],
                  s = l.clientX,
                  f = l.clientY,
                  d = { x: s, y: f };
                i.preventDefault(), o.actions.move(d);
              },
            },
            {
              eventName: "touchend",
              fn: function (i) {
                var o = n();
                if (o.type !== "DRAGGING") {
                  r();
                  return;
                }
                i.preventDefault(),
                  o.actions.drop({ shouldBlockNextClick: !0 }),
                  t();
              },
            },
            {
              eventName: "touchcancel",
              fn: function (i) {
                if (n().type !== "DRAGGING") {
                  r();
                  return;
                }
                i.preventDefault(), r();
              },
            },
            {
              eventName: "touchforcechange",
              fn: function (i) {
                var o = n();
                o.type === "IDLE" && b(!1);
                var l = i.touches[0];
                if (l) {
                  var s = l.force >= ss;
                  if (s) {
                    var f = o.actions.shouldRespectForcePress();
                    if (o.type === "PENDING") {
                      f && r();
                      return;
                    }
                    if (f) {
                      if (o.hasMoved) {
                        i.preventDefault();
                        return;
                      }
                      r();
                      return;
                    }
                    i.preventDefault();
                  }
                }
              },
            },
            { eventName: hr, fn: r },
          ];
        }
        function ds(e) {
          var r = (0, m.useRef)(gt),
            t = (0, m.useRef)(ue),
            n = (0, y.hb)(function () {
              return r.current;
            }, []),
            a = (0, y.hb)(function (p) {
              r.current = p;
            }, []),
            i = (0, y.Kr)(
              function () {
                return {
                  eventName: "touchstart",
                  fn: function (p) {
                    if (!p.defaultPrevented) {
                      var v = e.findClosestDraggableId(p);
                      if (v) {
                        var g = e.tryGetLock(v, l, { sourceEvent: p });
                        if (g) {
                          var h = p.touches[0],
                            D = h.clientX,
                            I = h.clientY,
                            S = { x: D, y: I };
                          t.current(), c(g, S);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            o = (0, y.hb)(
              function () {
                var p = { capture: !0, passive: !1 };
                t.current = _(e.getWindow(), [i], p);
              },
              [e, i],
            ),
            l = (0, y.hb)(
              function () {
                var u = r.current;
                u.type !== "IDLE" &&
                  (u.type === "PENDING" && clearTimeout(u.longPressTimerId),
                  a(gt),
                  t.current(),
                  o());
              },
              [o, a],
            ),
            s = (0, y.hb)(
              function () {
                var u = r.current;
                l(),
                  u.type === "DRAGGING" &&
                    u.actions.cancel({ shouldBlockNextClick: !0 }),
                  u.type === "PENDING" && u.actions.abort();
              },
              [l],
            ),
            f = (0, y.hb)(
              function () {
                var p = { capture: !0, passive: !1 },
                  v = { cancel: s, completed: l, getPhase: n },
                  g = _(e.getWindow(), cs(v), p),
                  h = _(e.getWindow(), us(v), p);
                t.current = function () {
                  g(), h();
                };
              },
              [e, s, n, l],
            ),
            d = (0, y.hb)(
              function () {
                var p = n();
                p.type !== "PENDING" && b(!1);
                var v = p.actions.fluidLift(p.point);
                a({ type: "DRAGGING", actions: v, hasMoved: !1 });
              },
              [n, a],
            ),
            c = (0, y.hb)(
              function (p, v) {
                n().type !== "IDLE" && b(!1);
                var g = setTimeout(d, ls);
                a({
                  type: "PENDING",
                  point: v,
                  actions: p,
                  longPressTimerId: g,
                }),
                  f();
              },
              [f, n, a, d],
            );
          X(
            function () {
              return (
                o(),
                function () {
                  t.current();
                  var v = n();
                  v.type === "PENDING" &&
                    (clearTimeout(v.longPressTimerId), a(gt));
                }
              );
            },
            [n, o, a],
          ),
            X(
              function () {
                var p = _(e.getWindow(), [
                  {
                    eventName: "touchmove",
                    fn: function () {},
                    options: { capture: !1, passive: !1 },
                  },
                ]);
                return p;
              },
              [e],
            );
        }
        function fs(e) {}
        var ps = {
          input: !0,
          button: !0,
          textarea: !0,
          select: !0,
          option: !0,
          optgroup: !0,
          video: !0,
          audio: !0,
        };
        function Kn(e, r) {
          if (r == null) return !1;
          var t = !!ps[r.tagName.toLowerCase()];
          if (t) return !0;
          var n = r.getAttribute("contenteditable");
          return n === "true" || n === ""
            ? !0
            : r === e
              ? !1
              : Kn(e, r.parentElement);
        }
        function vs(e, r) {
          var t = Gn(r);
          return Qe(t) ? Kn(e, t) : !1;
        }
        var gs = function (e) {
          return (0, G.l)(e.getBoundingClientRect()).center;
        };
        function ms(e) {
          return e instanceof Wn(e).Element;
        }
        var bs = (function () {
          var e = "matches";
          if (typeof document > "u") return e;
          var r = [e, "msMatchesSelector", "webkitMatchesSelector"],
            t = De(r, function (n) {
              return n in Element.prototype;
            });
          return t || e;
        })();
        function Yn(e, r) {
          return e == null ? null : e[bs](r) ? e : Yn(e.parentElement, r);
        }
        function hs(e, r) {
          return e.closest ? e.closest(r) : Yn(e, r);
        }
        function Jn(e, r) {
          if (!e || e === document || e === window) return null;
          var t = hs(e, r);
          if (t) return t;
          var n = e.getRootNode();
          return Jn(n.host, r);
        }
        function ys(e) {
          return "[" + Be.contextId + '="' + e + '"]';
        }
        function Ds(e, r) {
          var t = Gn(r);
          if (!ms(t)) return null;
          var n = ys(e),
            a = Jn(t, n);
          return !a || !Qe(a) ? null : a;
        }
        function Is(e, r) {
          var t = Ds(e, r);
          return t ? t.getAttribute(Be.draggableId) : null;
        }
        function xs(e, r, t) {
          var n = "[" + ut.contextId + '="' + e + '"]',
            a = ct(t, n, function (i) {
              return i.getAttribute(ut.id) === r;
            });
          return !a || !Qe(a) ? null : a;
        }
        function Ss(e) {
          e.preventDefault();
        }
        function yr(e) {
          var r = e.expected,
            t = e.phase,
            n = e.isLockActive,
            a = e.shouldWarn;
          return !(!n() || r !== t);
        }
        function Xn(e) {
          var r = e.lockAPI,
            t = e.store,
            n = e.registry,
            a = e.draggableId;
          if (r.isClaimed()) return !1;
          var i = n.draggable.findById(a);
          return !(!i || !i.options.isEnabled || !An(t.getState(), a));
        }
        function Cs(e) {
          var r = e.lockAPI,
            t = e.contextId,
            n = e.store,
            a = e.registry,
            i = e.draggableId,
            o = e.forceSensorStop,
            l = e.sourceEvent,
            s = Xn({ lockAPI: r, store: n, registry: a, draggableId: i });
          if (!s) return null;
          var f = a.draggable.getById(i),
            d = xs(t, f.descriptor.id, wl(l));
          if (!d || (l && !f.options.canDragInteractiveElements && vs(d, l)))
            return null;
          var c = r.claim(o || ue),
            u = "PRE_DRAG";
          function p() {
            return f.options.shouldRespectForcePress;
          }
          function v() {
            return r.isActive(c);
          }
          function g(E, R) {
            yr({ expected: E, phase: u, isLockActive: v, shouldWarn: !0 }) &&
              n.dispatch(R());
          }
          var h = g.bind(null, "DRAGGING");
          function D(E) {
            function R() {
              r.release(), (u = "COMPLETED");
            }
            u !== "PRE_DRAG" && (R(), u !== "PRE_DRAG" && b(!1)),
              n.dispatch(oo(E.liftActionArgs)),
              (u = "DRAGGING");
            function L(O, M) {
              if (
                (M === void 0 && (M = { shouldBlockNextClick: !1 }),
                E.cleanup(),
                M.shouldBlockNextClick)
              ) {
                var W = _(window, [
                  {
                    eventName: "click",
                    fn: Ss,
                    options: { once: !0, passive: !1, capture: !0 },
                  },
                ]);
                setTimeout(W);
              }
              R(), n.dispatch(mn({ reason: O }));
            }
            return (0, C.A)(
              {
                isActive: function () {
                  return yr({
                    expected: "DRAGGING",
                    phase: u,
                    isLockActive: v,
                    shouldWarn: !1,
                  });
                },
                shouldRespectForcePress: p,
                drop: function (M) {
                  return L("DROP", M);
                },
                cancel: function (M) {
                  return L("CANCEL", M);
                },
              },
              E.actions,
            );
          }
          function I(E) {
            var R = (0, Ge.A)(function (O) {
                h(function () {
                  return gn({ client: O });
                });
              }),
              L = D({
                liftActionArgs: {
                  id: i,
                  clientSelection: E,
                  movementMode: "FLUID",
                },
                cleanup: function () {
                  return R.cancel();
                },
                actions: { move: R },
              });
            return (0, C.A)({}, L, { move: R });
          }
          function S() {
            var E = {
              moveUp: function () {
                return h(mo);
              },
              moveRight: function () {
                return h(ho);
              },
              moveDown: function () {
                return h(bo);
              },
              moveLeft: function () {
                return h(yo);
              },
            };
            return D({
              liftActionArgs: {
                id: i,
                clientSelection: gs(d),
                movementMode: "SNAP",
              },
              cleanup: ue,
              actions: E,
            });
          }
          function x() {
            var E = yr({
              expected: "PRE_DRAG",
              phase: u,
              isLockActive: v,
              shouldWarn: !0,
            });
            E && r.release();
          }
          var A = {
            isActive: function () {
              return yr({
                expected: "PRE_DRAG",
                phase: u,
                isLockActive: v,
                shouldWarn: !1,
              });
            },
            shouldRespectForcePress: p,
            fluidLift: I,
            snapLift: S,
            abort: x,
          };
          return A;
        }
        var ws = [ts, os, ds];
        function As(e) {
          var r = e.contextId,
            t = e.store,
            n = e.registry,
            a = e.customSensors,
            i = e.enableDefaultSensors,
            o = e.windowToUse,
            l = [].concat(i ? ws : [], a || []),
            s = (0, m.useState)(function () {
              return Vl();
            })[0],
            f = (0, y.hb)(
              function (x, A) {
                x.isDragging && !A.isDragging && s.tryAbandon();
              },
              [s],
            );
          X(
            function () {
              var x = t.getState(),
                A = t.subscribe(function () {
                  var E = t.getState();
                  f(x, E), (x = E);
                });
              return A;
            },
            [s, t, f],
          ),
            X(
              function () {
                return s.tryAbandon;
              },
              [s.tryAbandon],
            );
          var d = (0, y.hb)(
              function (S) {
                return Xn({
                  lockAPI: s,
                  registry: n,
                  store: t,
                  draggableId: S,
                });
              },
              [s, n, t],
            ),
            c = (0, y.hb)(
              function (S, x, A) {
                return Cs({
                  lockAPI: s,
                  registry: n,
                  contextId: r,
                  store: t,
                  draggableId: S,
                  forceSensorStop: x,
                  sourceEvent: A && A.sourceEvent ? A.sourceEvent : null,
                });
              },
              [r, s, n, t],
            ),
            u = (0, y.hb)(
              function (S) {
                return Is(r, S);
              },
              [r],
            ),
            p = (0, y.hb)(
              function (S) {
                var x = n.draggable.findById(S);
                return x ? x.options : null;
              },
              [n.draggable],
            ),
            v = (0, y.hb)(
              function () {
                s.isClaimed() &&
                  (s.tryAbandon(),
                  t.getState().phase !== "IDLE" && t.dispatch(Qr()));
              },
              [s, t],
            ),
            g = (0, y.hb)(s.isClaimed, [s]),
            h = (0, y.hb)(
              function () {
                return o;
              },
              [o],
            ),
            D = (0, y.Kr)(
              function () {
                return {
                  canGetLock: d,
                  tryGetLock: c,
                  findClosestDraggableId: u,
                  findOptionsForDraggable: p,
                  tryReleaseLock: v,
                  isLockClaimed: g,
                  getWindow: h,
                };
              },
              [d, c, u, p, v, g, h],
            );
          fs(l);
          for (var I = 0; I < l.length; I++) l[I](D);
        }
        var Es = function (r) {
          return {
            onBeforeCapture: r.onBeforeCapture,
            onBeforeDragStart: r.onBeforeDragStart,
            onDragStart: r.onDragStart,
            onDragEnd: r.onDragEnd,
            onDragUpdate: r.onDragUpdate,
          };
        };
        function er(e) {
          return e.current || b(!1), e.current;
        }
        function Ps(e) {
          var r = e.contextId,
            t = e.setCallbacks,
            n = e.sensors,
            a = e.nonce,
            i = e.dragHandleUsageInstructions,
            o = (0, m.useRef)(null),
            [l, s] = m.useState(),
            f = m.useMemo(
              function () {
                return l ? l.ownerDocument.defaultView : window;
              },
              [l],
            );
          Hl();
          var d = pt(e),
            c = (0, y.hb)(
              function () {
                return Es(d.current);
              },
              [d],
            ),
            u = Ol(r),
            p = Ll({ contextId: r, text: i }),
            v = Cl(r, a, e.stylesInsertionPoint),
            g = (0, y.hb)(function (T) {
              er(o).dispatch(T);
            }, []),
            h = (0, y.Kr)(
              function () {
                return (0, B.zH)(
                  {
                    publishWhileDragging: so,
                    updateDroppableScroll: co,
                    updateDroppableIsEnabled: fo,
                    updateDroppableIsCombineEnabled: po,
                    collectionStarting: uo,
                  },
                  g,
                );
              },
              [g],
            ),
            D = Pl(),
            I = (0, y.Kr)(
              function () {
                return rl(f, D, h);
              },
              [f, D, h],
            ),
            S = (0, y.Kr)(
              function () {
                return hl(
                  (0, C.A)(
                    { scrollWindow: tl, scrollDroppable: I.scrollDroppable },
                    (0, B.zH)({ move: gn }, g),
                  ),
                );
              },
              [I.scrollDroppable, g],
            ),
            x = Al(r),
            A = (0, y.Kr)(
              function () {
                return Xo({
                  announce: u,
                  autoScroller: S,
                  dimensionMarshal: I,
                  focusMarshal: x,
                  getResponders: c,
                  styleMarshal: v,
                });
              },
              [u, S, I, x, c, v],
            );
          l && (o.current = A);
          var E = (0, y.hb)(function () {
              var T = er(o),
                re = T.getState();
              re.phase !== "IDLE" && T.dispatch(Qr());
            }, []),
            R = (0, y.hb)(function () {
              var T = er(o).getState();
              return T.isDragging || T.phase === "DROP_ANIMATING";
            }, []),
            L = (0, y.Kr)(
              function () {
                return { isDragging: R, tryAbort: E };
              },
              [R, E],
            );
          t(L);
          var O = (0, y.hb)(function (T) {
              return An(er(o).getState(), T);
            }, []),
            M = (0, y.hb)(function () {
              return Ie(er(o).getState());
            }, []),
            W = (0, y.Kr)(
              function () {
                return {
                  marshal: I,
                  focus: x,
                  contextId: r,
                  canLift: O,
                  isMovementAllowed: M,
                  dragHandleUsageInstructionsId: p,
                  registry: D,
                };
              },
              [r, I, p, x, O, M, D],
            );
          return (
            As({
              contextId: r,
              store: A,
              registry: D,
              customSensors: n,
              enableDefaultSensors: e.enableDefaultSensors !== !1,
              windowToUse: f,
            }),
            (0, m.useEffect)(
              function () {
                return E;
              },
              [E],
            ),
            m.createElement(
              mr.Provider,
              { value: W },
              m.createElement("div", { ref: s }),
              l && m.createElement(ir, { context: dt, store: A }, e.children),
            )
          );
        }
        var Qn = 0;
        function Rs() {
          Qn = 0;
        }
        function Bs() {
          return (0, y.Kr)(function () {
            return "" + Qn++;
          }, []);
        }
        function Uu() {
          Rs(), Nl();
        }
        function Os(e) {
          var r = Bs(),
            t = e.dragHandleUsageInstructions || sr.dragHandleUsageInstructions;
          return m.createElement(Ya, null, function (n) {
            return m.createElement(
              Ps,
              {
                nonce: e.nonce,
                contextId: r,
                setCallbacks: n,
                dragHandleUsageInstructions: t,
                enableDefaultSensors: e.enableDefaultSensors,
                sensors: e.sensors,
                onBeforeCapture: e.onBeforeCapture,
                onBeforeDragStart: e.onBeforeDragStart,
                onDragStart: e.onDragStart,
                onDragUpdate: e.onDragUpdate,
                onDragEnd: e.onDragEnd,
                stylesInsertionPoint: e.stylesInsertionPoint,
              },
              e.children,
            );
          });
        }
        var mt = function (r) {
            return function (t) {
              return r === t;
            };
          },
          Ts = mt("scroll"),
          Ns = mt("auto"),
          Ms = mt("visible"),
          Zn = function (r, t) {
            return t(r.overflowX) || t(r.overflowY);
          },
          Ls = function (r, t) {
            return t(r.overflowX) && t(r.overflowY);
          },
          _n = function (r) {
            var t = r.ownerDocument.defaultView.getComputedStyle(r),
              n = { overflowX: t.overflowX, overflowY: t.overflowY };
            return Zn(n, Ts) || Zn(n, Ns);
          },
          Fs = function () {
            return !1;
            var r, t, n, a;
          },
          ea = function e(r) {
            return r == null
              ? null
              : r === document.body
                ? Fs()
                  ? r
                  : null
                : r === document.documentElement
                  ? null
                  : _n(r)
                    ? r
                    : e(r.parentElement);
          },
          Hu = function (e) {
            if (e) var r = ea(e.parentElement);
          },
          bt = function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          Gs = function e(r) {
            if (!r) return !1;
            var t = r.ownerDocument.defaultView.getComputedStyle(r);
            return t.position === "fixed" ? !0 : e(r.parentElement);
          },
          Ws = function (e) {
            var r = ea(e),
              t = Gs(e);
            return { closestScrollable: r, isFixedOnPage: t };
          },
          ks = function (e) {
            var r = e.descriptor,
              t = e.isEnabled,
              n = e.isCombineEnabled,
              a = e.isFixedOnPage,
              i = e.direction,
              o = e.client,
              l = e.page,
              s = e.closest,
              f = (function () {
                if (!s) return null;
                var p = s.scrollSize,
                  v = s.client,
                  g = xn({
                    scrollHeight: p.scrollHeight,
                    scrollWidth: p.scrollWidth,
                    height: v.paddingBox.height,
                    width: v.paddingBox.width,
                  });
                return {
                  pageMarginBox: s.page.marginBox,
                  frameClient: v,
                  scrollSize: p,
                  shouldClipSubject: s.shouldClipSubject,
                  scroll: {
                    initial: s.scroll,
                    current: s.scroll,
                    max: g,
                    diff: { value: V, displacement: V },
                  },
                };
              })(),
              d = i === "vertical" ? Vr : Kt,
              c = Ae({ page: l, withPlaceholder: null, axis: d, frame: f }),
              u = {
                descriptor: r,
                isCombineEnabled: n,
                isFixedOnPage: a,
                axis: d,
                isEnabled: t,
                client: o,
                page: l,
                frame: f,
                subject: c,
              };
            return u;
          },
          Us = function (r, t) {
            var n = (0, G.YH)(r);
            if (!t || r !== t) return n;
            var a = n.paddingBox.top - t.scrollTop,
              i = n.paddingBox.left - t.scrollLeft,
              o = a + t.scrollHeight,
              l = i + t.scrollWidth,
              s = { top: a, right: l, bottom: o, left: i },
              f = (0, G.fT)(s, n.border),
              d = (0, G.ge)({
                borderBox: f,
                margin: n.margin,
                border: n.border,
                padding: n.padding,
              });
            return d;
          },
          Hs = function (e) {
            var r = e.ref,
              t = e.descriptor,
              n = e.env,
              a = e.windowScroll,
              i = e.direction,
              o = e.isDropDisabled,
              l = e.isCombineEnabled,
              s = e.shouldClipSubject,
              f = n.closestScrollable,
              d = Us(r, f),
              c = (0, G.SQ)(d, a),
              u = (function () {
                if (!f) return null;
                var v = (0, G.YH)(f),
                  g = {
                    scrollHeight: f.scrollHeight,
                    scrollWidth: f.scrollWidth,
                  };
                return {
                  client: v,
                  page: (0, G.SQ)(v, a),
                  scroll: bt(f),
                  scrollSize: g,
                  shouldClipSubject: s,
                };
              })(),
              p = ks({
                descriptor: t,
                isEnabled: !o,
                isCombineEnabled: l,
                isFixedOnPage: n.isFixedOnPage,
                direction: i,
                client: d,
                page: c,
                closest: u,
              });
            return p;
          },
          Vs = { passive: !1 },
          qs = { passive: !0 },
          ra = function (e) {
            return e.shouldPublishImmediately ? Vs : qs;
          };
        function Dr(e) {
          var r = (0, m.useContext)(e);
          return r || b(!1), r;
        }
        var Ir = function (r) {
          return (r && r.env.closestScrollable) || null;
        };
        function $s(e) {
          var r = (0, m.useRef)(null),
            t = Dr(mr),
            n = ft("droppable"),
            a = t.registry,
            i = t.marshal,
            o = pt(e),
            l = (0, y.Kr)(
              function () {
                return { id: e.droppableId, type: e.type, mode: e.mode };
              },
              [e.droppableId, e.mode, e.type],
            ),
            s = (0, m.useRef)(l),
            f = (0, y.Kr)(
              function () {
                return H(function (x, A) {
                  r.current || b(!1);
                  var E = { x, y: A };
                  i.updateDroppableScroll(l.id, E);
                });
              },
              [l.id, i],
            ),
            d = (0, y.hb)(function () {
              var x = r.current;
              return !x || !x.env.closestScrollable
                ? V
                : bt(x.env.closestScrollable);
            }, []),
            c = (0, y.hb)(
              function () {
                var x = d();
                f(x.x, x.y);
              },
              [d, f],
            ),
            u = (0, y.Kr)(
              function () {
                return (0, Ge.A)(c);
              },
              [c],
            ),
            p = (0, y.hb)(
              function () {
                var x = r.current,
                  A = Ir(x);
                (x && A) || b(!1);
                var E = x.scrollOptions;
                if (E.shouldPublishImmediately) {
                  c();
                  return;
                }
                u();
              },
              [u, c],
            ),
            v = (0, y.hb)(
              function (x, A) {
                r.current && b(!1);
                var E = o.current,
                  R = E.getDroppableRef();
                R || b(!1);
                var L = Ws(R),
                  O = { ref: R, descriptor: l, env: L, scrollOptions: A };
                r.current = O;
                var M = Hs({
                    ref: R,
                    descriptor: l,
                    env: L,
                    windowScroll: x,
                    direction: E.direction,
                    isDropDisabled: E.isDropDisabled,
                    isCombineEnabled: E.isCombineEnabled,
                    shouldClipSubject: !E.ignoreContainerClipping,
                  }),
                  W = L.closestScrollable;
                return (
                  W &&
                    (W.setAttribute(Ln.contextId, t.contextId),
                    W.addEventListener("scroll", p, ra(O.scrollOptions))),
                  M
                );
              },
              [t.contextId, l, p, o],
            ),
            g = (0, y.hb)(function () {
              var x = r.current,
                A = Ir(x);
              return (x && A) || b(!1), bt(A);
            }, []),
            h = (0, y.hb)(
              function () {
                var x = r.current;
                x || b(!1);
                var A = Ir(x);
                (r.current = null),
                  A &&
                    (u.cancel(),
                    A.removeAttribute(Ln.contextId),
                    A.removeEventListener("scroll", p, ra(x.scrollOptions)));
              },
              [p, u],
            ),
            D = (0, y.hb)(function (x) {
              var A = r.current;
              A || b(!1);
              var E = Ir(A);
              E || b(!1), (E.scrollTop += x.y), (E.scrollLeft += x.x);
            }, []),
            I = (0, y.Kr)(
              function () {
                return {
                  getDimensionAndWatchScroll: v,
                  getScrollWhileDragging: g,
                  dragStopped: h,
                  scroll: D,
                };
              },
              [h, v, g, D],
            ),
            S = (0, y.Kr)(
              function () {
                return { uniqueId: n, descriptor: l, callbacks: I };
              },
              [I, l, n],
            );
          X(
            function () {
              return (
                (s.current = S.descriptor),
                a.droppable.register(S),
                function () {
                  r.current && h(), a.droppable.unregister(S);
                }
              );
            },
            [I, l, h, S, i, a.droppable],
          ),
            X(
              function () {
                r.current &&
                  i.updateDroppableIsEnabled(s.current.id, !e.isDropDisabled);
              },
              [e.isDropDisabled, i],
            ),
            X(
              function () {
                r.current &&
                  i.updateDroppableIsCombineEnabled(
                    s.current.id,
                    e.isCombineEnabled,
                  );
              },
              [e.isCombineEnabled, i],
            );
        }
        function ht() {}
        var ta = { width: 0, height: 0, margin: ei },
          js = function (r) {
            var t = r.isAnimatingOpenOnMount,
              n = r.placeholder,
              a = r.animate;
            return t || a === "close"
              ? ta
              : {
                  height: n.client.borderBox.height,
                  width: n.client.borderBox.width,
                  margin: n.client.margin,
                };
          },
          zs = function (r) {
            var t = r.isAnimatingOpenOnMount,
              n = r.placeholder,
              a = r.animate,
              i = js({ isAnimatingOpenOnMount: t, placeholder: n, animate: a });
            return {
              display: n.display,
              boxSizing: "border-box",
              width: i.width,
              height: i.height,
              marginTop: i.margin.top,
              marginRight: i.margin.right,
              marginBottom: i.margin.bottom,
              marginLeft: i.margin.left,
              flexShrink: "0",
              flexGrow: "0",
              pointerEvents: "none",
              transition: a !== "none" ? Ye.placeholder : null,
            };
          };
        function Ks(e) {
          var r = (0, m.useRef)(null),
            t = (0, y.hb)(function () {
              r.current && (clearTimeout(r.current), (r.current = null));
            }, []),
            n = e.animate,
            a = e.onTransitionEnd,
            i = e.onClose,
            o = e.contextId,
            l = (0, m.useState)(e.animate === "open"),
            s = l[0],
            f = l[1];
          (0, m.useEffect)(
            function () {
              return s
                ? n !== "open"
                  ? (t(), f(!1), ht)
                  : r.current
                    ? ht
                    : ((r.current = setTimeout(function () {
                        (r.current = null), f(!1);
                      })),
                      t)
                : ht;
            },
            [n, s, t],
          );
          var d = (0, y.hb)(
              function (u) {
                u.propertyName === "height" && (a(), n === "close" && i());
              },
              [n, i, a],
            ),
            c = zs({
              isAnimatingOpenOnMount: s,
              animate: e.animate,
              placeholder: e.placeholder,
            });
          return m.createElement(e.placeholder.tagName, {
            style: c,
            "data-rbd-placeholder-context-id": o,
            onTransitionEnd: d,
            ref: e.innerRef,
          });
        }
        var Ys = m.memo(Ks),
          yt = m.createContext(null);
        function na(e) {
          (e && Qe(e)) || b(!1);
        }
        function Dt(e) {
          return typeof e == "boolean";
        }
        function It(e, r) {
          r.forEach(function (t) {
            return t(e);
          });
        }
        var Js = [
            function (r) {
              var t = r.props;
              t.droppableId || b(!1), typeof t.droppableId != "string" && b(!1);
            },
            function (r) {
              var t = r.props;
              Dt(t.isDropDisabled) || b(!1),
                Dt(t.isCombineEnabled) || b(!1),
                Dt(t.ignoreContainerClipping) || b(!1);
            },
            function (r) {
              var t = r.getDroppableRef;
              na(t());
            },
          ],
          Xs = [
            function (r) {
              var t = r.props,
                n = r.getPlaceholderRef;
              if (t.placeholder) var a = n();
            },
          ],
          Qs = [
            function (r) {
              var t = r.props;
              t.renderClone || b(!1);
            },
            function (r) {
              var t = r.getPlaceholderRef;
              t() && b(!1);
            },
          ];
        function Zs(e) {
          _e(function () {
            It(e, Js),
              e.props.mode === "standard" && It(e, Xs),
              e.props.mode === "virtual" && It(e, Qs);
          });
        }
        var _s = (function (e) {
            (0, j.A)(r, e);
            function r() {
              for (
                var n, a = arguments.length, i = new Array(a), o = 0;
                o < a;
                o++
              )
                i[o] = arguments[o];
              return (
                (n = e.call.apply(e, [this].concat(i)) || this),
                (n.state = {
                  isVisible: !!n.props.on,
                  data: n.props.on,
                  animate:
                    n.props.shouldAnimate && n.props.on ? "open" : "none",
                }),
                (n.onClose = function () {
                  n.state.animate === "close" && n.setState({ isVisible: !1 });
                }),
                n
              );
            }
            r.getDerivedStateFromProps = function (a, i) {
              return a.shouldAnimate
                ? a.on
                  ? { isVisible: !0, data: a.on, animate: "open" }
                  : i.isVisible
                    ? { isVisible: !0, data: i.data, animate: "close" }
                    : { isVisible: !1, animate: "close", data: null }
                : { isVisible: !!a.on, data: a.on, animate: "none" };
            };
            var t = r.prototype;
            return (
              (t.render = function () {
                if (!this.state.isVisible) return null;
                var a = {
                  onClose: this.onClose,
                  data: this.state.data,
                  animate: this.state.animate,
                };
                return this.props.children(a);
              }),
              r
            );
          })(m.PureComponent),
          aa = { dragging: 5e3, dropAnimating: 4500 },
          eu = function (r, t) {
            return t ? Ye.drop(t.duration) : r ? Ye.snap : Ye.fluid;
          },
          ru = function (r, t) {
            return r ? (t ? Ke.opacity.drop : Ke.opacity.combining) : null;
          },
          tu = function (r) {
            return r.forceShouldAnimate != null
              ? r.forceShouldAnimate
              : r.mode === "SNAP";
          };
        function nu(e) {
          var r = e.dimension,
            t = r.client,
            n = e.offset,
            a = e.combineWith,
            i = e.dropping,
            o = !!a,
            l = tu(e),
            s = !!i,
            f = s ? rt.drop(n, o) : rt.moveTo(n),
            d = {
              position: "fixed",
              top: t.marginBox.top,
              left: t.marginBox.left,
              boxSizing: "border-box",
              width: t.borderBox.width,
              height: t.borderBox.height,
              transition: eu(l, i),
              transform: f,
              opacity: ru(o, s),
              zIndex: s ? aa.dropAnimating : aa.dragging,
              pointerEvents: "none",
            };
          return d;
        }
        function au(e) {
          return {
            transform: rt.moveTo(e.offset),
            transition: e.shouldAnimateDisplacement ? null : "none",
          };
        }
        function iu(e) {
          return e.type === "DRAGGING" ? nu(e) : au(e);
        }
        function ou(e, r, t) {
          t === void 0 && (t = V);
          var n = window.getComputedStyle(r),
            a = r.getBoundingClientRect(),
            i = (0, G.a)(a, n),
            o = (0, G.SQ)(i, t),
            l = {
              client: i,
              tagName: r.tagName.toLowerCase(),
              display: n.display,
            },
            s = { x: i.marginBox.width, y: i.marginBox.height },
            f = {
              descriptor: e,
              placeholder: l,
              displaceBy: s,
              client: i,
              page: o,
            };
          return f;
        }
        function lu(e) {
          var r = ft("draggable"),
            t = e.descriptor,
            n = e.registry,
            a = e.getDraggableRef,
            i = e.canDragInteractiveElements,
            o = e.shouldRespectForcePress,
            l = e.isEnabled,
            s = (0, y.Kr)(
              function () {
                return {
                  canDragInteractiveElements: i,
                  shouldRespectForcePress: o,
                  isEnabled: l,
                };
              },
              [i, l, o],
            ),
            f = (0, y.hb)(
              function (p) {
                var v = a();
                return v || b(!1), ou(t, v, p);
              },
              [t, a],
            ),
            d = (0, y.Kr)(
              function () {
                return {
                  uniqueId: r,
                  descriptor: t,
                  options: s,
                  getDimension: f,
                };
              },
              [t, f, s, r],
            ),
            c = (0, m.useRef)(d),
            u = (0, m.useRef)(!0);
          X(
            function () {
              return (
                n.draggable.register(c.current),
                function () {
                  return n.draggable.unregister(c.current);
                }
              );
            },
            [n.draggable],
          ),
            X(
              function () {
                if (u.current) {
                  u.current = !1;
                  return;
                }
                var p = c.current;
                (c.current = d), n.draggable.update(d, p);
              },
              [d, n.draggable],
            );
        }
        function su(e, r, t) {
          _e(function () {
            function n(i) {
              return "Draggable[id: " + i + "]: ";
            }
            var a = e.draggableId;
            a || b(!1),
              typeof a != "string" && b(!1),
              ai(e.index) || b(!1),
              e.mapped.type !== "DRAGGING" &&
                (na(t()), e.isEnabled && (kn(r, a, t()) || b(!1)));
          });
        }
        function uu(e) {}
        function cu(e) {
          e.preventDefault();
        }
        function du(e) {
          var r = (0, m.useRef)(null),
            t = (0, y.hb)(function (O) {
              r.current = O;
            }, []),
            n = (0, y.hb)(function () {
              return r.current;
            }, []),
            a = Dr(mr),
            i = a.contextId,
            o = a.dragHandleUsageInstructionsId,
            l = a.registry,
            s = Dr(yt),
            f = s.type,
            d = s.droppableId,
            c = (0, y.Kr)(
              function () {
                return {
                  id: e.draggableId,
                  index: e.index,
                  type: f,
                  droppableId: d,
                };
              },
              [e.draggableId, e.index, f, d],
            ),
            u = e.children,
            p = e.draggableId,
            v = e.isEnabled,
            g = e.shouldRespectForcePress,
            h = e.canDragInteractiveElements,
            D = e.isClone,
            I = e.mapped,
            S = e.dropAnimationFinished;
          if ((su(e, i, n), uu(D), !D)) {
            var x = (0, y.Kr)(
              function () {
                return {
                  descriptor: c,
                  registry: l,
                  getDraggableRef: n,
                  canDragInteractiveElements: h,
                  shouldRespectForcePress: g,
                  isEnabled: v,
                };
              },
              [c, l, n, h, g, v],
            );
            lu(x);
          }
          var A = (0, y.Kr)(
              function () {
                return v
                  ? {
                      tabIndex: 0,
                      role: "button",
                      "aria-describedby": o,
                      "data-rbd-drag-handle-draggable-id": p,
                      "data-rbd-drag-handle-context-id": i,
                      draggable: !1,
                      onDragStart: cu,
                    }
                  : null;
              },
              [i, o, p, v],
            ),
            E = (0, y.hb)(
              function (O) {
                I.type === "DRAGGING" &&
                  I.dropping &&
                  O.propertyName === "transform" &&
                  S();
              },
              [S, I],
            ),
            R = (0, y.Kr)(
              function () {
                var O = iu(I),
                  M = I.type === "DRAGGING" && I.dropping ? E : null,
                  W = {
                    innerRef: t,
                    draggableProps: {
                      "data-rbd-draggable-context-id": i,
                      "data-rbd-draggable-id": p,
                      style: O,
                      onTransitionEnd: M,
                    },
                    dragHandleProps: A,
                  };
                return W;
              },
              [i, A, p, I, E, t],
            ),
            L = (0, y.Kr)(
              function () {
                return {
                  draggableId: c.id,
                  type: c.type,
                  source: { index: c.index, droppableId: c.droppableId },
                };
              },
              [c.droppableId, c.id, c.index, c.type],
            );
          return u(R, I.snapshot, L);
        }
        var ia = function (e, r) {
            return e === r;
          },
          oa = function (e) {
            var r = e.combine,
              t = e.destination;
            return t ? t.droppableId : r ? r.droppableId : null;
          },
          fu = function (r) {
            return r.combine ? r.combine.draggableId : null;
          },
          pu = function (r) {
            return r.at && r.at.type === "COMBINE"
              ? r.at.combine.draggableId
              : null;
          };
        function vu() {
          var e = H(function (a, i) {
              return { x: a, y: i };
            }),
            r = H(function (a, i, o, l, s) {
              return {
                isDragging: !0,
                isClone: i,
                isDropAnimating: !!s,
                dropAnimation: s,
                mode: a,
                draggingOver: o,
                combineWith: l,
                combineTargetFor: null,
              };
            }),
            t = H(function (a, i, o, l, s, f, d) {
              return {
                mapped: {
                  type: "DRAGGING",
                  dropping: null,
                  draggingOver: s,
                  combineWith: f,
                  mode: i,
                  offset: a,
                  dimension: o,
                  forceShouldAnimate: d,
                  snapshot: r(i, l, s, f, null),
                },
              };
            }),
            n = function (i, o) {
              if (i.isDragging) {
                if (i.critical.draggable.id !== o.draggableId) return null;
                var l = i.current.client.offset,
                  s = i.dimensions.draggables[o.draggableId],
                  f = J(i.impact),
                  d = pu(i.impact),
                  c = i.forceShouldAnimate;
                return t(e(l.x, l.y), i.movementMode, s, o.isClone, f, d, c);
              }
              if (i.phase === "DROP_ANIMATING") {
                var u = i.completed;
                if (u.result.draggableId !== o.draggableId) return null;
                var p = o.isClone,
                  v = i.dimensions.draggables[o.draggableId],
                  g = u.result,
                  h = g.mode,
                  D = oa(g),
                  I = fu(g),
                  S = i.dropDuration,
                  x = {
                    duration: S,
                    curve: _r.drop,
                    moveTo: i.newHomeClientOffset,
                    opacity: I ? Ke.opacity.drop : null,
                    scale: I ? Ke.scale.drop : null,
                  };
                return {
                  mapped: {
                    type: "DRAGGING",
                    offset: i.newHomeClientOffset,
                    dimension: v,
                    dropping: x,
                    draggingOver: D,
                    combineWith: I,
                    mode: h,
                    forceShouldAnimate: null,
                    snapshot: r(h, p, D, I, x),
                  },
                };
              }
              return null;
            };
          return n;
        }
        function la(e) {
          return {
            isDragging: !1,
            isDropAnimating: !1,
            isClone: !1,
            dropAnimation: null,
            mode: null,
            draggingOver: null,
            combineTargetFor: e,
            combineWith: null,
          };
        }
        var gu = {
          mapped: {
            type: "SECONDARY",
            offset: V,
            combineTargetFor: null,
            shouldAnimateDisplacement: !0,
            snapshot: la(null),
          },
        };
        function mu() {
          var e = H(function (o, l) {
              return { x: o, y: l };
            }),
            r = H(la),
            t = H(function (o, l, s) {
              return (
                l === void 0 && (l = null),
                {
                  mapped: {
                    type: "SECONDARY",
                    offset: o,
                    combineTargetFor: l,
                    shouldAnimateDisplacement: s,
                    snapshot: r(l),
                  },
                }
              );
            }),
            n = function (l) {
              return l ? t(V, l, !0) : null;
            },
            a = function (l, s, f, d) {
              var c = f.displaced.visible[l],
                u = !!(d.inVirtualList && d.effected[l]),
                p = dr(f),
                v = p && p.draggableId === l ? s : null;
              if (!c) {
                if (!u) return n(v);
                if (f.displaced.invisible[l]) return null;
                var g = we(d.displacedBy.point),
                  h = e(g.x, g.y);
                return t(h, v, !0);
              }
              if (u) return n(v);
              var D = f.displacedBy.point,
                I = e(D.x, D.y);
              return t(I, v, c.shouldAnimate);
            },
            i = function (l, s) {
              if (l.isDragging)
                return l.critical.draggable.id === s.draggableId
                  ? null
                  : a(
                      s.draggableId,
                      l.critical.draggable.id,
                      l.impact,
                      l.afterCritical,
                    );
              if (l.phase === "DROP_ANIMATING") {
                var f = l.completed;
                return f.result.draggableId === s.draggableId
                  ? null
                  : a(
                      s.draggableId,
                      f.result.draggableId,
                      f.impact,
                      f.afterCritical,
                    );
              }
              return null;
            };
          return i;
        }
        var bu = function () {
            var r = vu(),
              t = mu(),
              n = function (i, o) {
                return r(i, o) || t(i, o) || gu;
              };
            return n;
          },
          hu = { dropAnimationFinished: bn },
          yu = Ot(bu, hu, null, {
            context: dt,
            pure: !0,
            areStatePropsEqual: ia,
          })(du);
        function sa(e) {
          var r = Dr(yt),
            t = r.isUsingCloneFor;
          return t === e.draggableId && !e.isClone
            ? null
            : m.createElement(yu, e);
        }
        function Du(e) {
          var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
            t = !!e.disableInteractiveElementBlocking,
            n = !!e.shouldRespectForcePress;
          return m.createElement(
            sa,
            (0, C.A)({}, e, {
              isClone: !1,
              isEnabled: r,
              canDragInteractiveElements: t,
              shouldRespectForcePress: n,
            }),
          );
        }
        function Iu(e) {
          var r = (0, m.useContext)(mr);
          r || b(!1);
          var t = r.contextId,
            n = r.isMovementAllowed,
            a = (0, m.useRef)(null),
            i = (0, m.useRef)(null),
            o = e.children,
            l = e.droppableId,
            s = e.type,
            f = e.mode,
            d = e.direction,
            c = e.ignoreContainerClipping,
            u = e.isDropDisabled,
            p = e.isCombineEnabled,
            v = e.snapshot,
            g = e.useClone,
            h = e.updateViewportMaxScroll,
            D = e.getContainerForClone,
            I = (0, y.hb)(function () {
              return a.current;
            }, []),
            S = (0, y.hb)(function (T) {
              a.current = T;
            }, []),
            x = (0, y.hb)(function () {
              return i.current;
            }, []),
            A = (0, y.hb)(function (T) {
              i.current = T;
            }, []);
          Zs({ props: e, getDroppableRef: I, getPlaceholderRef: x });
          var E = (0, y.hb)(
            function () {
              if (n()) {
                var T;
                h({
                  maxScroll: Cn(
                    ((T = a.current) == null
                      ? void 0
                      : T.ownerDocument.defaultView) || window,
                  ),
                });
              }
            },
            [n, h],
          );
          $s({
            droppableId: l,
            type: s,
            mode: f,
            direction: d,
            isDropDisabled: u,
            isCombineEnabled: p,
            ignoreContainerClipping: c,
            getDroppableRef: I,
          });
          var R = m.createElement(
              _s,
              { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
              function (T) {
                var re = T.onClose,
                  te = T.data,
                  Q = T.animate;
                return m.createElement(Ys, {
                  placeholder: te,
                  onClose: re,
                  innerRef: A,
                  animate: Q,
                  contextId: t,
                  onTransitionEnd: E,
                });
              },
            ),
            L = (0, y.Kr)(
              function () {
                return {
                  innerRef: S,
                  placeholder: R,
                  droppableProps: {
                    "data-rbd-droppable-id": l,
                    "data-rbd-droppable-context-id": t,
                  },
                };
              },
              [t, l, R, S],
            ),
            O = g ? g.dragging.draggableId : null,
            M = (0, y.Kr)(
              function () {
                return { droppableId: l, type: s, isUsingCloneFor: O };
              },
              [l, O, s],
            );
          function W() {
            if (!g) return null;
            var T = g.dragging,
              re = g.render,
              te = m.createElement(
                sa,
                {
                  draggableId: T.draggableId,
                  index: T.source.index,
                  isClone: !0,
                  isEnabled: !0,
                  shouldRespectForcePress: !1,
                  canDragInteractiveElements: !0,
                },
                function (Q, ae) {
                  return re(Q, ae, T);
                },
              );
            return Tt.createPortal(te, D());
          }
          return m.createElement(yt.Provider, { value: M }, o(L, v), W());
        }
        var xt = function (r, t) {
            return r === t.droppable.type;
          },
          ua = function (r, t) {
            return t.draggables[r.draggable.id];
          },
          xu = function () {
            var r = {
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
              t = (0, C.A)({}, r, { shouldAnimatePlaceholder: !1 }),
              n = H(function (o) {
                return {
                  draggableId: o.id,
                  type: o.type,
                  source: { index: o.index, droppableId: o.droppableId },
                };
              }),
              a = H(function (o, l, s, f, d, c) {
                var u = d.descriptor.id,
                  p = d.descriptor.droppableId === o;
                if (p) {
                  var v = c ? { render: c, dragging: n(d.descriptor) } : null,
                    g = {
                      isDraggingOver: s,
                      draggingOverWith: s ? u : null,
                      draggingFromThisWith: u,
                      isUsingPlaceholder: !0,
                    };
                  return {
                    placeholder: d.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: g,
                    useClone: v,
                  };
                }
                if (!l) return t;
                if (!f) return r;
                var h = {
                  isDraggingOver: s,
                  draggingOverWith: u,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: d.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: h,
                  useClone: null,
                };
              }),
              i = function (l, s) {
                var f = s.droppableId,
                  d = s.type,
                  c = !s.isDropDisabled,
                  u = s.renderClone;
                if (l.isDragging) {
                  var p = l.critical;
                  if (!xt(d, p)) return t;
                  var v = ua(p, l.dimensions),
                    g = J(l.impact) === f;
                  return a(f, c, g, g, v, u);
                }
                if (l.phase === "DROP_ANIMATING") {
                  var h = l.completed;
                  if (!xt(d, h.critical)) return t;
                  var D = ua(h.critical, l.dimensions);
                  return a(f, c, oa(h.result) === f, J(h.impact) === f, D, u);
                }
                if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
                  var I = l.completed;
                  if (!xt(d, I.critical)) return t;
                  var S = J(I.impact) === f,
                    x = !!(I.impact.at && I.impact.at.type === "COMBINE"),
                    A = I.critical.droppable.id === f;
                  return S ? (x ? r : t) : A ? r : t;
                }
                return t;
              };
            return i;
          },
          Su = { updateViewportMaxScroll: go };
        function Cu() {
          return document.body || b(!1), document.body;
        }
        var wu = {
            mode: "standard",
            type: "DEFAULT",
            direction: "vertical",
            isDropDisabled: !1,
            isCombineEnabled: !1,
            ignoreContainerClipping: !1,
            renderClone: null,
            getContainerForClone: Cu,
          },
          ca = Ot(xu, Su, null, {
            context: dt,
            pure: !0,
            areStatePropsEqual: ia,
          })(Iu);
        ca.defaultProps = wu;
      },
      59671: (ge, Z) => {
        var P; /** @license React v17.0.2
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var m = 60103,
          j = 60106,
          C = 60107,
          B = 60108,
          N = 60114,
          k = 60109,
          F = 60110,
          ne = 60112,
          me = 60113,
          Ne = 60120,
          be = 60115,
          se = 60116,
          Me = 60121,
          Le = 60122,
          ar = 60117,
          ir = 60129,
          he = 60131;
        if (typeof Symbol == "function" && Symbol.for) {
          var U = Symbol.for;
          (m = U("react.element")),
            (j = U("react.portal")),
            (C = U("react.fragment")),
            (B = U("react.strict_mode")),
            (N = U("react.profiler")),
            (k = U("react.provider")),
            (F = U("react.context")),
            (ne = U("react.forward_ref")),
            (me = U("react.suspense")),
            (Ne = U("react.suspense_list")),
            (be = U("react.memo")),
            (se = U("react.lazy")),
            (Me = U("react.block")),
            (Le = U("react.server.block")),
            (ar = U("react.fundamental")),
            (ir = U("react.debug_trace_mode")),
            (he = U("react.legacy_hidden"));
        }
        function K(w) {
          if (typeof w == "object" && w !== null) {
            var Fe = w.$$typeof;
            switch (Fe) {
              case m:
                switch (((w = w.type), w)) {
                  case C:
                  case N:
                  case B:
                  case me:
                  case Ne:
                    return w;
                  default:
                    switch (((w = w && w.$$typeof), w)) {
                      case F:
                      case ne:
                      case se:
                      case be:
                      case k:
                        return w;
                      default:
                        return Fe;
                    }
                }
              case j:
                return Fe;
            }
          }
        }
        var Pr = k,
          Rr = m,
          Br = ne,
          Or = C,
          Tr = se,
          Et = be,
          Nr = j,
          or = N,
          Mr = B,
          Lr = me;
        (P = F),
          (P = Pr),
          (P = Rr),
          (P = Br),
          (P = Or),
          (P = Tr),
          (P = Et),
          (P = Nr),
          (P = or),
          (P = Mr),
          (P = Lr),
          (P = function () {
            return !1;
          }),
          (P = function () {
            return !1;
          }),
          (Z.isContextConsumer = function (w) {
            return K(w) === F;
          }),
          (P = function (w) {
            return K(w) === k;
          }),
          (P = function (w) {
            return typeof w == "object" && w !== null && w.$$typeof === m;
          }),
          (P = function (w) {
            return K(w) === ne;
          }),
          (P = function (w) {
            return K(w) === C;
          }),
          (P = function (w) {
            return K(w) === se;
          }),
          (P = function (w) {
            return K(w) === be;
          }),
          (P = function (w) {
            return K(w) === j;
          }),
          (P = function (w) {
            return K(w) === N;
          }),
          (P = function (w) {
            return K(w) === B;
          }),
          (P = function (w) {
            return K(w) === me;
          }),
          (P = function (w) {
            return (
              typeof w == "string" ||
              typeof w == "function" ||
              w === C ||
              w === N ||
              w === ir ||
              w === B ||
              w === me ||
              w === Ne ||
              w === he ||
              (typeof w == "object" &&
                w !== null &&
                (w.$$typeof === se ||
                  w.$$typeof === be ||
                  w.$$typeof === k ||
                  w.$$typeof === F ||
                  w.$$typeof === ne ||
                  w.$$typeof === ar ||
                  w.$$typeof === Me ||
                  w[0] === Le))
            );
          }),
          (P = K);
      },
      44019: (ge, Z, P) => {
        ge.exports = P(59671);
      },
      55635: (ge, Z, P) => {
        P.d(Z, { A: () => j });
        var m = P(53144);
        function j(C, B, N) {
          return (
            (B = (0, m.A)(B)) in C
              ? Object.defineProperty(C, B, {
                  value: N,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (C[B] = N),
            C
          );
        }
      },
      54883: (ge, Z, P) => {
        P.d(Z, { A: () => C });
        var m = P(55635);
        function j(B, N) {
          var k = Object.keys(B);
          if (Object.getOwnPropertySymbols) {
            var F = Object.getOwnPropertySymbols(B);
            N &&
              (F = F.filter(function (ne) {
                return Object.getOwnPropertyDescriptor(B, ne).enumerable;
              })),
              k.push.apply(k, F);
          }
          return k;
        }
        function C(B) {
          for (var N = 1; N < arguments.length; N++) {
            var k = arguments[N] != null ? arguments[N] : {};
            N % 2
              ? j(Object(k), !0).forEach(function (F) {
                  (0, m.A)(B, F, k[F]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    B,
                    Object.getOwnPropertyDescriptors(k),
                  )
                : j(Object(k)).forEach(function (F) {
                    Object.defineProperty(
                      B,
                      F,
                      Object.getOwnPropertyDescriptor(k, F),
                    );
                  });
          }
          return B;
        }
      },
      53144: (ge, Z, P) => {
        P.d(Z, { A: () => C });
        var m = P(11052);
        function j(B, N) {
          if ((0, m.A)(B) != "object" || !B) return B;
          var k = B[Symbol.toPrimitive];
          if (k !== void 0) {
            var F = k.call(B, N || "default");
            if ((0, m.A)(F) != "object") return F;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (N === "string" ? String : Number)(B);
        }
        function C(B) {
          var N = j(B, "string");
          return (0, m.A)(N) == "symbol" ? N : N + "";
        }
      },
      11052: (ge, Z, P) => {
        P.d(Z, { A: () => m });
        function m(j) {
          "@babel/helpers - typeof";
          return (
            (m =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (C) {
                    return typeof C;
                  }
                : function (C) {
                    return C &&
                      typeof Symbol == "function" &&
                      C.constructor === Symbol &&
                      C !== Symbol.prototype
                      ? "symbol"
                      : typeof C;
                  }),
            m(j)
          );
        }
      },
    },
  ]);
})();
