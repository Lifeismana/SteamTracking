/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [81784],
    {
      121: (Er, tr, P) => {
        P.d(tr, { JY: () => Os, sx: () => Du, gL: () => ca });
        var D = P(90626),
          de = P(42891),
          A = P(58584),
          X = P(3998),
          te = D.createContext(null);
        const xe = null;
        function fe(e) {
          e();
        }
        var ne = fe,
          pe = function (r) {
            return (ne = r);
          },
          Oe = function () {
            return ne;
          };
        function ve() {
          var e = Oe(),
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
        var ae = {
          notify: function () {},
          get: function () {
            return [];
          },
        };
        function Te(e, r) {
          var t,
            n = ae;
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
            t || ((t = r ? r.addNestedSub(o) : e.subscribe(o)), (n = ve()));
          }
          function f() {
            t && (t(), (t = void 0), n.clear(), (n = ae));
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
        var Ne =
          typeof window < "u" &&
          typeof window.document < "u" &&
          typeof window.document.createElement < "u"
            ? D.useLayoutEffect
            : D.useEffect;
        function nr(e) {
          var r = e.store,
            t = e.context,
            n = e.children,
            a = (0, D.useMemo)(
              function () {
                var l = Te(r);
                return { store: r, subscription: l };
              },
              [r],
            ),
            i = (0, D.useMemo)(
              function () {
                return r.getState();
              },
              [r],
            );
          Ne(
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
          var o = t || te;
          return D.createElement(o.Provider, { value: a }, n);
        }
        const ar = nr;
        var ge = P(81115),
          F = P(904),
          V = P.n(F),
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
        function ir(e, r, t) {
          Ne(function () {
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
                    b,
                    y;
                  try {
                    b = n(g, a.current);
                  } catch (I) {
                    (y = I), (c = I);
                  }
                  y || (c = null),
                    b === i.current
                      ? o.current || s()
                      : ((i.current = b),
                        (l.current = b),
                        (o.current = !0),
                        f({ type: "STORE_UPDATED", payload: { error: y } }));
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
        var C = function () {
          return [null, 0];
        };
        function Me(e, r) {
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
            b = g === void 0 ? !1 : g,
            y = t.context,
            I = y === void 0 ? te : y,
            S = (0, ge.A)(t, Rr);
          if (0) var x;
          var w = I;
          return function (R) {
            var N = R.displayName || R.name || "Component",
              B = a(N),
              T = (0, A.A)({}, S, {
                getDisplayName: a,
                methodName: o,
                renderCountProp: s,
                shouldHandleStateChanges: d,
                storeKey: u,
                displayName: B,
                wrappedComponentName: N,
                WrappedComponent: R,
              }),
              L = S.pure;
            function O(U) {
              return e(U.dispatch, T);
            }
            var J = L
              ? D.useMemo
              : function (U) {
                  return U();
                };
            function Q(U) {
              var ue = (0, D.useMemo)(
                  function () {
                    var rr = U.reactReduxForwardedRef,
                      At = (0, ge.A)(U, Br);
                    return [U.context, rr, At];
                  },
                  [U],
                ),
                _ = ue[0],
                _e = ue[1],
                De = ue[2],
                ce = (0, D.useMemo)(
                  function () {
                    return _ &&
                      _.Consumer &&
                      (0, Pr.isContextConsumer)(
                        D.createElement(_.Consumer, null),
                      )
                      ? _
                      : w;
                  },
                  [_, w],
                ),
                ee = (0, D.useContext)(ce),
                Ie = !!U.store && !!U.store.getState && !!U.store.dispatch,
                Ir = !!ee && !!ee.store,
                re = Ie ? U.store : ee.store,
                er = (0, D.useMemo)(
                  function () {
                    return O(re);
                  },
                  [re],
                ),
                xr = (0, D.useMemo)(
                  function () {
                    if (!d) return Tr;
                    var rr = Te(re, Ie ? null : ee.subscription),
                      At = rr.notifyNestedSubs.bind(rr);
                    return [rr, At];
                  },
                  [re, Ie, ee],
                ),
                Be = xr[0],
                Sr = xr[1],
                Cr = (0, D.useMemo)(
                  function () {
                    return Ie ? ee : (0, A.A)({}, ee, { subscription: Be });
                  },
                  [Ie, ee, Be],
                ),
                da = (0, D.useReducer)(Nr, Or, C),
                Au = da[0],
                wr = Au[0],
                Eu = da[1];
              if (wr && wr.error) throw wr.error;
              var fa = (0, D.useRef)(),
                St = (0, D.useRef)(De),
                Ar = (0, D.useRef)(),
                pa = (0, D.useRef)(!1),
                Ct = J(
                  function () {
                    return Ar.current && De === St.current
                      ? Ar.current
                      : er(re.getState(), De);
                  },
                  [re, wr, De],
                );
              ir(Mr, [St, fa, pa, De, Ct, Ar, Sr]),
                ir(Lr, [d, re, Be, er, St, fa, pa, Ar, Sr, Eu], [re, Be, er]);
              var wt = (0, D.useMemo)(
                  function () {
                    return D.createElement(R, (0, A.A)({}, Ct, { ref: _e }));
                  },
                  [_e, R, Ct],
                ),
                Pu = (0, D.useMemo)(
                  function () {
                    return d
                      ? D.createElement(ce.Provider, { value: Cr }, wt)
                      : wt;
                  },
                  [ce, wt, Cr],
                );
              return Pu;
            }
            var j = L ? D.memo(Q) : Q;
            if (
              ((j.WrappedComponent = R), (j.displayName = Q.displayName = B), b)
            ) {
              var Z = D.forwardRef(function (ue, _) {
                return D.createElement(
                  j,
                  (0, A.A)({}, ue, { reactReduxForwardedRef: _ }),
                );
              });
              return (Z.displayName = B), (Z.WrappedComponent = R), V()(Z, R);
            }
            return V()(j, R);
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
          return (0, A.A)({}, t, e, r);
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
          function b() {
            return (
              e.dependsOnOwnProps && (c = e(f, d)),
              r.dependsOnOwnProps && (u = r(n, d)),
              (p = t(c, u, d)),
              p
            );
          }
          function y() {
            var S = e(f, d),
              x = !l(S, c);
            return (c = S), x && (p = t(c, u, d)), p;
          }
          function I(S, x) {
            var w = !o(x, d),
              E = !i(S, f, x, d);
            return (f = S), (d = x), w && E ? g() : w ? b() : E ? y() : p;
          }
          return function (x, w) {
            return s ? I(x, w) : v(x, w);
          };
        }
        function Ba(e, r) {
          var t = r.initMapStateToProps,
            n = r.initMapDispatchToProps,
            a = r.initMergeProps,
            i = (0, ge.A)(r, Ea),
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
            n = t === void 0 ? Me : t,
            a = r.mapStateToPropsFactories,
            i = a === void 0 ? Ia : a,
            o = r.mapDispatchToPropsFactories,
            l = o === void 0 ? ha : o,
            s = r.mergePropsFactories,
            f = s === void 0 ? Aa : s,
            d = r.selectorFactory,
            c = d === void 0 ? Ba : d;
          return function (p, v, g, b) {
            b === void 0 && (b = {});
            var y = b,
              I = y.pure,
              S = I === void 0 ? !0 : I,
              x = y.areStatesEqual,
              w = x === void 0 ? Ta : x,
              E = y.areOwnPropsEqual,
              R = E === void 0 ? Fr : E,
              N = y.areStatePropsEqual,
              B = N === void 0 ? Fr : N,
              T = y.areMergedPropsEqual,
              L = T === void 0 ? Fr : T,
              O = (0, ge.A)(y, Oa),
              J = Wr(p, i, "mapStateToProps"),
              Q = Wr(v, l, "mapDispatchToProps"),
              j = Wr(g, f, "mergeProps");
            return n(
              c,
              (0, A.A)(
                {
                  methodName: "connect",
                  getDisplayName: function (U) {
                    return "Connect(" + U + ")";
                  },
                  shouldHandleStateChanges: !!p,
                  initMapStateToProps: J,
                  initMapDispatchToProps: Q,
                  initMergeProps: j,
                  pure: S,
                  areStatesEqual: w,
                  areOwnPropsEqual: R,
                  areStatePropsEqual: B,
                  areMergedPropsEqual: L,
                },
                O,
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
                    var b = s.current(g);
                    if (r(b, d.current)) return;
                    (d.current = b), (f.current = g);
                  } catch (y) {
                    l.current = y;
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
        pe(Tt.unstable_batchedUpdates);
        var h = P(46311),
          M = P(48046),
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
        const G = Wa;
        var Le = P(18651),
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
          za = Lt.bind(null, "error");
        function ie() {}
        function ja(e, r) {
          return (0, A.A)({}, e, {}, r);
        }
        function K(e, r, t) {
          var n = r.map(function (a) {
            var i = ja(t, a.options);
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
        function Fe(e) {
          this.message = e;
        }
        Fe.prototype.toString = function () {
          return this.message;
        };
        function m(e, r) {
          if (!e) throw Ka ? new Fe(Ft) : new Fe(Ft + ": " + (r || ""));
        }
        var Ya = (function (e) {
            (0, de.A)(r, e);
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
                (n.unbind = ie),
                (n.onWindowError = function (l) {
                  var s = n.getCallbacks();
                  s.isDragging() && s.tryAbort();
                  var f = l.error;
                  f instanceof Fe && l.preventDefault();
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
                this.unbind = K(window, [
                  { eventName: "error", fn: this.onWindowError },
                ]);
              }),
              (t.componentDidCatch = function (a) {
                if (a instanceof Fe) {
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
          })(D.Component),
          Ja = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
          or = function (r) {
            return r + 1;
          },
          Xa = function (r) {
            return (
              `
  You have lifted an item in position ` +
              or(r.source.index) +
              `
`
            );
          },
          Gt = function (r, t) {
            var n = r.droppableId === t.droppableId,
              a = or(r.index),
              i = or(t.index);
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
              or(r.index) +
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
          lr = {
            dragHandleUsageInstructions: Ja,
            onDragStart: Xa,
            onDragUpdate: Qa,
            onDragEnd: Za,
          },
          W = { x: 0, y: 0 },
          k = function (r, t) {
            return { x: r.x + t.x, y: r.y + t.y };
          },
          q = function (r, t) {
            return { x: r.x - t.x, y: r.y - t.y };
          },
          oe = function (r, t) {
            return r.x === t.x && r.y === t.y;
          },
          Se = function (r) {
            return { x: r.x !== 0 ? -r.x : 0, y: r.y !== 0 ? -r.y : 0 };
          },
          me = function (r, t, n) {
            var a;
            return (
              n === void 0 && (n = 0),
              (a = {}),
              (a[r] = t),
              (a[r === "x" ? "y" : "x"] = n),
              a
            );
          },
          Ge = function (r, t) {
            return Math.sqrt(Math.pow(t.x - r.x, 2) + Math.pow(t.y - r.y, 2));
          },
          Ut = function (r, t) {
            return Math.min.apply(
              Math,
              t.map(function (n) {
                return Ge(r, n);
              }),
            );
          },
          Ht = function (r) {
            return function (t) {
              return { x: r(t.x), y: r(t.y) };
            };
          },
          _a = function (e, r) {
            var t = (0, M.l)({
              top: Math.max(r.top, e.top),
              right: Math.min(r.right, e.right),
              bottom: Math.min(r.bottom, e.bottom),
              left: Math.max(r.left, e.left),
            });
            return t.width <= 0 || t.height <= 0 ? null : t;
          },
          We = function (r, t) {
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
            return t ? We(r, t.scroll.diff.displacement) : r;
          },
          ti = function (r, t, n) {
            if (n && n.increasedBy) {
              var a;
              return (0, A.A)(
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
              : (0, M.l)(r);
          },
          Ce = function (e) {
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
            e.frame || m(!1);
            var t = e.frame,
              n = q(r, t.scroll.initial),
              a = Se(n),
              i = (0, A.A)({}, t, {
                scroll: {
                  initial: t.scroll.initial,
                  current: r,
                  diff: { value: n, displacement: a },
                  max: t.scroll.max,
                },
              }),
              o = Ce({
                page: e.subject.page,
                withPlaceholder: e.subject.withPlaceholder,
                axis: e.axis,
                frame: i,
              }),
              l = (0, A.A)({}, e, { frame: i, subject: o });
            return l;
          };
        function ai(e) {
          return Number.isInteger
            ? Number.isInteger(e)
            : typeof e == "number" && isFinite(e) && Math.floor(e) === e;
        }
        function sr(e) {
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
        function be(e, r) {
          if (e.find) return e.find(r);
          var t = Ur(e, r);
          if (t !== -1) return e[t];
        }
        function ii(e) {
          return Array.prototype.slice.call(e);
        }
        var qt = G(function (e) {
            return e.reduce(function (r, t) {
              return (r[t.descriptor.id] = t), r;
            }, {});
          }),
          $t = G(function (e) {
            return e.reduce(function (r, t) {
              return (r[t.descriptor.id] = t), r;
            }, {});
          }),
          ur = G(function (e) {
            return sr(e);
          }),
          oi = G(function (e) {
            return sr(e);
          }),
          we = G(function (e, r) {
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
        function cr(e) {
          return e.at && e.at.type === "COMBINE" ? e.at.combine : null;
        }
        var dr = G(function (e, r) {
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
              var b = {
                type: "COMBINE",
                combine: { draggableId: g, droppableId: n.descriptor.id },
              };
              return (0, A.A)({}, i, { at: b });
            }
            var s = i.displaced.all,
              f = s.length ? s[0] : null;
            if (r) return f ? l(f) : null;
            var d = dr(t, a);
            if (!f) {
              if (!d.length) return null;
              var c = d[d.length - 1];
              return l(c.descriptor.id);
            }
            var u = Ur(d, function (g) {
              return g.descriptor.id === f;
            });
            u === -1 && m(!1);
            var p = u - 1;
            if (p < 0) return null;
            var v = d[p];
            return l(v.descriptor.id);
          },
          Ae = function (e, r) {
            return e.descriptor.droppableId === r.descriptor.id;
          },
          zt = { point: W, value: 0 },
          ke = { invisible: {}, visible: {}, all: [] },
          si = { displaced: ke, displacedBy: zt, at: null },
          Y = function (e, r) {
            return function (t) {
              return e <= t && t <= r;
            };
          },
          jt = function (e) {
            var r = Y(e.top, e.bottom),
              t = Y(e.left, e.right);
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
            var r = Y(e.top, e.bottom),
              t = Y(e.left, e.right);
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
              var t = Y(r.top, r.bottom),
                n = Y(r.left, r.right);
              return function (a) {
                return e === Vr
                  ? t(a.top) && t(a.bottom)
                  : n(a.left) && n(a.right);
              };
            };
          },
          di = function (r, t) {
            var n = t.frame ? t.frame.scroll.diff.displacement : W;
            return We(r, n);
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
            return qr((0, A.A)({}, r, { isVisibleThroughFrameFn: jt }));
          },
          Yt = function (r) {
            return qr((0, A.A)({}, r, { isVisibleThroughFrameFn: ui }));
          },
          gi = function (r) {
            return qr(
              (0, A.A)({}, r, {
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
          return (0, M.l)((0, M.fT)(t, n));
        }
        function Ue(e) {
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
            displaced: ke,
            displacedBy: n,
            at: {
              type: "REORDER",
              destination: { droppableId: a.descriptor.id, index: i },
            },
          };
        }
        function fr(e) {
          var r = e.draggable,
            t = e.insideDestination,
            n = e.destination,
            a = e.viewport,
            i = e.displacedBy,
            o = e.last,
            l = e.index,
            s = e.forceShouldAnimate,
            f = Ae(r, n);
          if (l == null)
            return Jt({
              insideDestination: t,
              inHomeList: f,
              displacedBy: i,
              destination: n,
            });
          var d = be(t, function (g) {
            return g.descriptor.index === l;
          });
          if (!d)
            return Jt({
              insideDestination: t,
              inHomeList: f,
              displacedBy: i,
              destination: n,
            });
          var c = dr(r, t),
            u = t.indexOf(d),
            p = c.slice(u),
            v = Ue({
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
        function le(e, r) {
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
              f = le(o, i);
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
            if ((d || m(!1), d.type === "REORDER")) {
              var c = Di({
                isMovingForward: r,
                isInHomeList: t,
                location: d.destination,
                insideDestination: o,
              });
              return c == null
                ? null
                : fr({
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
              : fr({
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
            return le(n, t) ? (i ? W : Se(a.point)) : i ? a.point : W;
          },
          Si = function (e) {
            var r = e.afterCritical,
              t = e.impact,
              n = e.draggables,
              a = cr(t);
            a || m(!1);
            var i = a.draggableId,
              o = n[i].page.borderBox.center,
              l = xi({
                displaced: t.displaced,
                afterCritical: r,
                combineWith: i,
                displacedBy: t.displacedBy,
              });
            return k(o, l);
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
            return me(
              t.line,
              n.marginBox[t.end] + Xt(t, a),
              $r(t, n.marginBox, a),
            );
          },
          Zt = function (r) {
            var t = r.axis,
              n = r.moveRelativeTo,
              a = r.isMoving;
            return me(
              t.line,
              n.marginBox[t.start] - Ci(t, a),
              $r(t, n.marginBox, a),
            );
          },
          wi = function (r) {
            var t = r.axis,
              n = r.moveInto,
              a = r.isMoving;
            return me(
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
              o = we(a.descriptor.id, n),
              l = t.page,
              s = a.axis;
            if (!o.length)
              return wi({ axis: s, moveInto: a.page, isMoving: l });
            var f = r.displaced,
              d = r.displacedBy,
              c = f.all[0];
            if (c) {
              var u = n[c];
              if (le(c, i))
                return Zt({ axis: s, moveRelativeTo: u.page, isMoving: l });
              var p = (0, M.cY)(u.page, d.point);
              return Zt({ axis: s, moveRelativeTo: p, isMoving: l });
            }
            var v = o[o.length - 1];
            if (v.descriptor.id === t.descriptor.id) return l.borderBox.center;
            if (le(v.descriptor.id, i)) {
              var g = (0, M.cY)(v.page, Se(i.displacedBy.point));
              return Qt({ axis: s, moveRelativeTo: g, isMoving: l });
            }
            return Qt({ axis: s, moveRelativeTo: v.page, isMoving: l });
          },
          zr = function (e, r) {
            var t = e.frame;
            return t ? k(r, t.scroll.diff.displacement) : r;
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
          pr = function (e) {
            var r = Ei(e),
              t = e.droppable,
              n = t ? zr(t, r) : r;
            return n;
          },
          _t = function (e, r) {
            var t = q(r, e.scroll.initial),
              n = Se(t),
              a = (0, M.l)({
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
              o = _t(t, k(t.scroll.current, i)),
              l = n.frame ? kr(n, k(n.frame.scroll.current, i)) : n,
              s = r.displaced,
              f = Ue({
                afterDragging: en(s.all, a),
                destination: n,
                displacedBy: r.displacedBy,
                viewport: o.frame,
                last: s,
                forceShouldAnimate: !1,
              }),
              d = Ue({
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
              var b = Pi(g, p);
              if (b) {
                u[g] = b;
                return;
              }
              c[g] = !0;
            });
            var v = (0, A.A)({}, r, {
              displaced: { all: s.all, invisible: c, visible: u },
            });
            return v;
          },
          Bi = function (e, r) {
            return k(e.scroll.diff.displacement, r);
          },
          jr = function (e) {
            var r = e.pageBorderBoxCenter,
              t = e.draggable,
              n = e.viewport,
              a = Bi(n, r),
              i = q(a, t.page.borderBox.center);
            return k(t.client.borderBox.center, i);
          },
          rn = function (e) {
            var r = e.draggable,
              t = e.destination,
              n = e.newPageBorderBoxCenter,
              a = e.viewport,
              i = e.withDroppableDisplacement,
              o = e.onlyOnMainAxis,
              l = o === void 0 ? !1 : o,
              s = q(n, r.page.borderBox.center),
              f = We(r.page.borderBox, s),
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
            var d = we(n.descriptor.id, a),
              c = Ae(t, n),
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
            var p = pr({
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
              var g = jr({ pageBorderBoxCenter: p, draggable: t, viewport: o });
              return { clientSelection: g, impact: u, scrollJumpRequest: null };
            }
            var b = q(p, l),
              y = Ri({
                impact: u,
                viewport: o,
                destination: n,
                draggables: a,
                maxScrollChange: b,
              });
            return { clientSelection: s, impact: y, scrollJumpRequest: b };
          },
          H = function (r) {
            var t = r.subject.active;
            return t || m(!1), t;
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
              s = Y(o[l.start], o[l.end]),
              f = ur(a)
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
                  return jt(i.frame)(H(c));
                })
                .filter(function (c) {
                  var u = H(c);
                  return r
                    ? o[l.crossAxisEnd] < u[l.crossAxisEnd]
                    : u[l.crossAxisStart] < o[l.crossAxisStart];
                })
                .filter(function (c) {
                  var u = H(c),
                    p = Y(u[l.start], u[l.end]);
                  return (
                    s(u[l.start]) || s(u[l.end]) || p(o[l.start]) || p(o[l.end])
                  );
                })
                .sort(function (c, u) {
                  var p = H(c)[l.crossAxisStart],
                    v = H(u)[l.crossAxisStart];
                  return r ? p - v : v - p;
                })
                .filter(function (c, u, p) {
                  return H(c)[l.crossAxisStart] === H(p[0])[l.crossAxisStart];
                });
            if (!f.length) return null;
            if (f.length === 1) return f[0];
            var d = f.filter(function (c) {
              var u = Y(H(c)[l.start], H(c)[l.end]);
              return u(t[l.line]);
            });
            return d.length === 1
              ? d[0]
              : d.length > 1
                ? d.sort(function (c, u) {
                    return H(c)[l.start] - H(u)[l.start];
                  })[0]
                : f.sort(function (c, u) {
                    var p = Ut(t, Vt(H(c))),
                      v = Ut(t, Vt(H(u)));
                    return p !== v ? p - v : H(c)[l.start] - H(u)[l.start];
                  })[0];
          },
          tn = function (r, t) {
            var n = r.page.borderBox.center;
            return le(r.descriptor.id, t) ? q(n, t.displacedBy.point) : n;
          },
          Ni = function (r, t) {
            var n = r.page.borderBox;
            return le(r.descriptor.id, t) ? We(n, Se(t.displacedBy.point)) : n;
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
                  var f = Ge(r, zr(n, tn(l, i))),
                    d = Ge(r, zr(n, tn(s, i)));
                  return f < d
                    ? -1
                    : d < f
                      ? 1
                      : l.descriptor.index - s.descriptor.index;
                });
            return o[0] || null;
          },
          He = G(function (r, t) {
            var n = t[r.line];
            return { value: n, point: me(r.line, n) };
          }),
          Li = function (r, t, n) {
            var a = r.axis;
            if (r.descriptor.mode === "virtual") return me(a.line, t[a.line]);
            var i = r.subject.page.contentBox[a.size],
              o = we(r.descriptor.id, n),
              l = o.reduce(function (d, c) {
                return d + c.client.marginBox[a.size];
              }, 0),
              s = l + t[a.line],
              f = s - i;
            return f <= 0 ? null : me(a.line, f);
          },
          nn = function (r, t) {
            return (0, A.A)({}, r, {
              scroll: (0, A.A)({}, r.scroll, { max: t }),
            });
          },
          an = function (r, t, n) {
            var a = r.frame;
            Ae(t, r) && m(!1), r.subject.withPlaceholder && m(!1);
            var i = He(r.axis, t.displaceBy).point,
              o = Li(r, i, n),
              l = {
                placeholderSize: i,
                increasedBy: o,
                oldFrameMaxScroll: r.frame ? r.frame.scroll.max : null,
              };
            if (!a) {
              var s = Ce({
                page: r.subject.page,
                withPlaceholder: l,
                axis: r.axis,
                frame: r.frame,
              });
              return (0, A.A)({}, r, { subject: s });
            }
            var f = o ? k(a.scroll.max, o) : a.scroll.max,
              d = nn(a, f),
              c = Ce({
                page: r.subject.page,
                withPlaceholder: l,
                axis: r.axis,
                frame: d,
              });
            return (0, A.A)({}, r, { subject: c, frame: d });
          },
          Fi = function (r) {
            var t = r.subject.withPlaceholder;
            t || m(!1);
            var n = r.frame;
            if (!n) {
              var a = Ce({
                page: r.subject.page,
                axis: r.axis,
                frame: null,
                withPlaceholder: null,
              });
              return (0, A.A)({}, r, { subject: a });
            }
            var i = t.oldFrameMaxScroll;
            i || m(!1);
            var o = nn(n, i),
              l = Ce({
                page: r.subject.page,
                axis: r.axis,
                frame: o,
                withPlaceholder: null,
              });
            return (0, A.A)({}, r, { subject: l, frame: o });
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
                  displaced: ke,
                  displacedBy: zt,
                  at: {
                    type: "REORDER",
                    destination: { droppableId: o.descriptor.id, index: 0 },
                  },
                },
                d = pr({
                  impact: f,
                  draggable: a,
                  droppable: o,
                  draggables: i,
                  afterCritical: s,
                }),
                c = Ae(a, o) ? o : an(o, a, i),
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
                var b = t.descriptor.index;
                return t.descriptor.id === a.descriptor.id || p ? b : b + 1;
              })(),
              g = He(o.axis, a.displaceBy);
            return fr({
              draggable: a,
              insideDestination: n,
              destination: o,
              viewport: l,
              displacedBy: g,
              last: ke,
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
            var d = we(f.descriptor.id, i),
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
            var p = pr({
                impact: u,
                draggable: n,
                droppable: f,
                draggables: i,
                afterCritical: s,
              }),
              v = jr({ pageBorderBoxCenter: p, draggable: n, viewport: l });
            return { clientSelection: v, impact: u, scrollJumpRequest: null };
          },
          $ = function (e) {
            var r = e.at;
            return r
              ? r.type === "REORDER"
                ? r.destination.droppableId
                : r.combine.droppableId
              : null;
          },
          ki = function (r, t) {
            var n = $(r);
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
        function he(e) {
          return e.phase === "DRAGGING" || e.phase === "COLLECTING";
        }
        function on(e) {
          var r = Y(e.top, e.bottom),
            t = Y(e.left, e.right);
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
                  s = me(
                    o.axis.line,
                    r.center[l.line],
                    o.page.borderBox.center[l.crossAxisLine],
                  );
                return { id: o.descriptor.id, distance: Ge(a, s) };
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
            a = ur(n).filter(function (i) {
              if (!i.isEnabled) return !1;
              var o = i.subject.active;
              if (!o || !Hi(r, o)) return !1;
              if (on(o)(r.center)) return !0;
              var l = i.axis,
                s = o.center[l.crossAxisLine],
                f = r[l.crossAxisStart],
                d = r[l.crossAxisEnd],
                c = Y(o[l.crossAxisStart], o[l.crossAxisEnd]),
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
            return (0, M.l)(We(r, t));
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
        function zi(e) {
          var r = e.draggable,
            t = e.closest,
            n = e.inHomeList;
          return t
            ? n && t.descriptor.index > r.descriptor.index
              ? t.descriptor.index - 1
              : t.descriptor.index
            : null;
        }
        var ji = function (e) {
            var r = e.pageBorderBoxWithDroppableScroll,
              t = e.draggable,
              n = e.destination,
              a = e.insideDestination,
              i = e.last,
              o = e.viewport,
              l = e.afterCritical,
              s = n.axis,
              f = He(n.axis, t.displaceBy),
              d = f.value,
              c = r[s.start],
              u = r[s.end],
              p = dr(t, a),
              v = be(p, function (b) {
                var y = b.descriptor.id,
                  I = b.page.borderBox.center[s.line],
                  S = le(y, l),
                  x = sn({ displaced: i, id: y });
                return S ? (x ? u <= I : c < I - d) : x ? u <= I + d : c < I;
              }),
              g = zi({ draggable: t, closest: v, inHomeList: Ae(t, n) });
            return fr({
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
              s = He(a.axis, r.displaceBy),
              f = s.value,
              d = t[l.start],
              c = t[l.end],
              u = dr(r, i),
              p = be(u, function (g) {
                var b = g.descriptor.id,
                  y = g.page.borderBox,
                  I = y[l.size],
                  S = I / Ki,
                  x = le(b, o),
                  w = sn({ displaced: n.displaced, id: b });
                return x
                  ? w
                    ? c > y[l.start] + S && c < y[l.end] - S
                    : d > y[l.start] - f + S && d < y[l.end] - f - S
                  : w
                    ? c > y[l.start] + f + S && c < y[l.end] + f - S
                    : d > y[l.start] + S && d < y[l.end] - S;
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
              c = we(d.descriptor.id, n),
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
              ji({
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
            return (0, A.A)({}, e, ((t = {}), (t[r.descriptor.id] = r), t));
          },
          Ji = function (r) {
            var t = r.previousImpact,
              n = r.impact,
              a = r.droppables,
              i = $(t),
              o = $(n);
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
              l = $(i);
            if (!l) return o;
            var s = n[l];
            if (Ae(r, s) || s.subject.withPlaceholder) return o;
            var f = an(s, r, t);
            return Kr(o, f);
          },
          Ve = function (e) {
            var r = e.state,
              t = e.clientSelection,
              n = e.dimensions,
              a = e.viewport,
              i = e.impact,
              o = e.scrollJumpRequest,
              l = a || r.viewport,
              s = n || r.dimensions,
              f = t || r.current.client.selection,
              d = q(f, r.initial.client.selection),
              c = {
                offset: d,
                selection: f,
                borderBoxCenter: k(r.initial.client.borderBoxCenter, d),
              },
              u = {
                selection: k(c.selection, l.scroll.current),
                borderBoxCenter: k(c.borderBoxCenter, l.scroll.current),
                offset: k(c.offset, l.scroll.diff.value),
              },
              p = { client: c, page: u };
            if (r.phase === "COLLECTING")
              return (0, A.A)({ phase: "COLLECTING" }, r, {
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
              b = Xi({
                draggable: v,
                impact: g,
                previousImpact: r.impact,
                draggables: s.draggables,
                droppables: s.droppables,
              }),
              y = (0, A.A)({}, r, {
                current: p,
                dimensions: { draggables: s.draggables, droppables: b },
                impact: g,
                viewport: l,
                scrollJumpRequest: o || null,
                forceShouldAnimate: o ? !1 : null,
              });
            return y;
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
              s = Ue({
                afterDragging: l,
                destination: a,
                displacedBy: r.displacedBy,
                viewport: t.frame,
                forceShouldAnimate: i,
                last: o,
              });
            return (0, A.A)({}, r, { displaced: s });
          },
          dn = function (e) {
            var r = e.impact,
              t = e.draggable,
              n = e.droppable,
              a = e.draggables,
              i = e.viewport,
              o = e.afterCritical,
              l = pr({
                impact: r,
                draggable: t,
                draggables: a,
                droppable: n,
                afterCritical: o,
              });
            return jr({ pageBorderBoxCenter: l, draggable: t, viewport: i });
          },
          fn = function (e) {
            var r = e.state,
              t = e.dimensions,
              n = e.viewport;
            r.movementMode !== "SNAP" && m(!1);
            var a = r.impact,
              i = n || r.viewport,
              o = t || r.dimensions,
              l = o.draggables,
              s = o.droppables,
              f = l[r.critical.draggable.id],
              d = $(a);
            d || m(!1);
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
            return Ve({
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
              i = He(t.axis, r.displaceBy),
              o = we(t.descriptor.id, n),
              l = o.indexOf(r);
            l === -1 && m(!1);
            var s = o.slice(l + 1),
              f = s.reduce(function (p, v) {
                return (p[v.descriptor.id] = !0), p;
              }, {}),
              d = {
                inVirtualList: t.descriptor.mode === "virtual",
                displacedBy: i,
                effected: f,
              },
              c = Ue({
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
          qe = function (r) {},
          $e = function (r) {},
          eo = function (e) {
            var r = e.draggable,
              t = e.offset,
              n = e.initialWindowScroll,
              a = (0, M.cY)(r.client, t),
              i = (0, M.SQ)(a, n),
              o = (0, A.A)({}, r, {
                placeholder: (0, A.A)({}, r.placeholder, { client: a }),
                client: a,
                page: i,
              });
            return o;
          },
          ro = function (e) {
            var r = e.frame;
            return r || m(!1), r;
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
                d = k(a, f),
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
            qe();
            var n = t.modified.map(function (S) {
                var x = r.dimensions.droppables[S.droppableId],
                  w = kr(x, S.scroll);
                return w;
              }),
              a = (0, A.A)({}, r.dimensions.droppables, {}, qt(n)),
              i = $t(
                to({
                  additions: t.additions,
                  updatedDroppables: a,
                  viewport: r.viewport,
                }),
              ),
              o = (0, A.A)({}, r.dimensions.draggables, {}, i);
            t.removals.forEach(function (S) {
              delete o[S];
            });
            var l = { droppables: a, draggables: o },
              s = $(r.impact),
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
              b = un({
                pageOffset: r.current.page.offset,
                draggable: l.draggables[r.critical.draggable.id],
                draggables: l.draggables,
                droppables: l.droppables,
                previousImpact: g,
                viewport: r.viewport,
                afterCritical: v,
              });
            $e();
            var y = (0, A.A)({ phase: "DRAGGING" }, r, {
              phase: "DRAGGING",
              impact: b,
              onLiftImpact: p,
              dimensions: l,
              afterCritical: v,
              forceShouldAnimate: !1,
            });
            if (r.phase === "COLLECTING") return y;
            var I = (0, A.A)({ phase: "DROP_PENDING" }, y, {
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
              ? Ve({ state: r, dimensions: a })
              : fn({ state: r, dimensions: a });
          };
        function Xr(e) {
          return e.isDragging && e.movementMode === "SNAP"
            ? (0, A.A)({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
            : e;
        }
        var vn = { phase: "IDLE", completed: null, shouldFlush: !1 },
          ao = function (e, r) {
            if ((e === void 0 && (e = vn), r.type === "FLUSH"))
              return (0, A.A)({}, vn, { shouldFlush: !0 });
            if (r.type === "INITIAL_PUBLISH") {
              e.phase !== "IDLE" && m(!1);
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
                  offset: W,
                },
                c = {
                  client: d,
                  page: {
                    selection: k(d.selection, i.scroll.initial),
                    borderBoxCenter: k(d.selection, i.scroll.initial),
                    offset: k(d.selection, i.scroll.diff.value),
                  },
                },
                u = ur(o.droppables).every(function (Cr) {
                  return !Cr.isFixedOnPage;
                }),
                p = pn({
                  draggable: s,
                  home: f,
                  draggables: o.draggables,
                  viewport: i,
                }),
                v = p.impact,
                g = p.afterCritical,
                b = {
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
              return b;
            }
            if (r.type === "COLLECTION_STARTING") {
              if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
                return e;
              e.phase !== "DRAGGING" && m(!1);
              var y = (0, A.A)({ phase: "COLLECTING" }, e, {
                phase: "COLLECTING",
              });
              return y;
            }
            if (r.type === "PUBLISH_WHILE_DRAGGING")
              return (
                e.phase === "COLLECTING" || e.phase === "DROP_PENDING" || m(!1),
                no({ state: e, published: r.payload })
              );
            if (r.type === "MOVE") {
              if (e.phase === "DROP_PENDING") return e;
              he(e) || m(!1);
              var I = r.payload.client;
              return oe(I, e.current.client.selection)
                ? e
                : Ve({
                    state: e,
                    clientSelection: I,
                    impact: Yr(e) ? e.impact : null,
                  });
            }
            if (r.type === "UPDATE_DROPPABLE_SCROLL") {
              if (e.phase === "DROP_PENDING" || e.phase === "COLLECTING")
                return Xr(e);
              he(e) || m(!1);
              var S = r.payload,
                x = S.id,
                w = S.newScroll,
                E = e.dimensions.droppables[x];
              if (!E) return e;
              var R = kr(E, w);
              return Jr(e, R, !1);
            }
            if (r.type === "UPDATE_DROPPABLE_IS_ENABLED") {
              if (e.phase === "DROP_PENDING") return e;
              he(e) || m(!1);
              var N = r.payload,
                B = N.id,
                T = N.isEnabled,
                L = e.dimensions.droppables[B];
              L || m(!1), L.isEnabled === T && m(!1);
              var O = (0, A.A)({}, L, { isEnabled: T });
              return Jr(e, O, !0);
            }
            if (r.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
              if (e.phase === "DROP_PENDING") return e;
              he(e) || m(!1);
              var J = r.payload,
                Q = J.id,
                j = J.isCombineEnabled,
                Z = e.dimensions.droppables[Q];
              Z || m(!1), Z.isCombineEnabled === j && m(!1);
              var U = (0, A.A)({}, Z, { isCombineEnabled: j });
              return Jr(e, U, !0);
            }
            if (r.type === "MOVE_BY_WINDOW_SCROLL") {
              if (e.phase === "DROP_PENDING" || e.phase === "DROP_ANIMATING")
                return e;
              he(e) || m(!1), e.isWindowScrollAllowed || m(!1);
              var ue = r.payload.newScroll;
              if (oe(e.viewport.scroll.current, ue)) return Xr(e);
              var _ = _t(e.viewport, ue);
              return Yr(e)
                ? fn({ state: e, viewport: _ })
                : Ve({ state: e, viewport: _ });
            }
            if (r.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
              if (!he(e)) return e;
              var _e = r.payload.maxScroll;
              if (oe(_e, e.viewport.scroll.max)) return e;
              var De = (0, A.A)({}, e.viewport, {
                scroll: (0, A.A)({}, e.viewport.scroll, { max: _e }),
              });
              return (0, A.A)({ phase: "DRAGGING" }, e, { viewport: De });
            }
            if (
              r.type === "MOVE_UP" ||
              r.type === "MOVE_DOWN" ||
              r.type === "MOVE_LEFT" ||
              r.type === "MOVE_RIGHT"
            ) {
              if (e.phase === "COLLECTING" || e.phase === "DROP_PENDING")
                return e;
              e.phase !== "DRAGGING" && m(!1);
              var ce = Ui({ state: e, type: r.type });
              return ce
                ? Ve({
                    state: e,
                    impact: ce.impact,
                    clientSelection: ce.clientSelection,
                    scrollJumpRequest: ce.scrollJumpRequest,
                  })
                : e;
            }
            if (r.type === "DROP_PENDING") {
              var ee = r.payload.reason;
              e.phase !== "COLLECTING" && m(!1);
              var Ie = (0, A.A)({ phase: "DROP_PENDING" }, e, {
                phase: "DROP_PENDING",
                isWaiting: !0,
                reason: ee,
              });
              return Ie;
            }
            if (r.type === "DROP_ANIMATE") {
              var Ir = r.payload,
                re = Ir.completed,
                er = Ir.dropDuration,
                xr = Ir.newHomeClientOffset;
              e.phase === "DRAGGING" || e.phase === "DROP_PENDING" || m(!1);
              var Be = {
                phase: "DROP_ANIMATING",
                completed: re,
                dropDuration: er,
                newHomeClientOffset: xr,
                dimensions: e.dimensions,
              };
              return Be;
            }
            if (r.type === "DROP_COMPLETE") {
              var Sr = r.payload.completed;
              return { phase: "IDLE", completed: Sr, shouldFlush: !1 };
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
                    t().phase !== "IDLE" && m(!1),
                    n(Qr()),
                    n(io({ draggableId: l, movementMode: f }));
                  var c = { shouldPublishImmediately: f === "SNAP" },
                    u = { draggableId: l, scrollOptions: c },
                    p = e.startPublishing(u),
                    v = p.critical,
                    g = p.dimensions,
                    b = p.viewport;
                  xo(v, g),
                    n(
                      lo({
                        critical: v,
                        dimensions: g,
                        clientSelection: s,
                        movementMode: f,
                        viewport: b,
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
          ze = { opacity: { drop: 0, combining: 0.7 }, scale: { drop: 0.75 } },
          et = { outOfTheWay: 0.2, minDropTime: 0.33, maxDropTime: 0.55 },
          ye = et.outOfTheWay + "s " + _r.outOfTheWay,
          je = {
            fluid: "opacity " + ye,
            snap: "transform " + ye + ", opacity " + ye,
            drop: function (r) {
              var t = r + "s " + _r.drop;
              return "transform " + t + ", opacity " + t;
            },
            outOfTheWay: "transform " + ye,
            placeholder: "height " + ye + ", width " + ye + ", margin " + ye,
          },
          hn = function (r) {
            return oe(r, W) ? null : "translate(" + r.x + "px, " + r.y + "px)";
          },
          rt = {
            moveTo: hn,
            drop: function (r, t) {
              var n = hn(r);
              return n ? (t ? n + " scale(" + ze.scale.drop + ")" : n) : null;
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
              a = Ge(r, t);
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
              s = $(r),
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
              u = q(c, t.client.borderBox.center);
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
            var s = (0, A.A)({}, n, { displaced: ke });
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
                  l && m(!1),
                    i.phase === "DRAGGING" ||
                      i.phase === "DROP_PENDING" ||
                      m(!1);
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
                    g = p ? cr(u) : null,
                    b = {
                      index: s.draggable.index,
                      droppableId: s.droppable.id,
                    },
                    y = {
                      draggableId: d.descriptor.id,
                      type: d.descriptor.type,
                      source: b,
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
                      result: y,
                      impact: u,
                    },
                    x = !oe(i.current.client.offset, I) || !!y.combine;
                  if (!x) {
                    t(Zr({ completed: S }));
                    return;
                  }
                  var w = Eo({
                      current: i.current.client.offset,
                      destination: I,
                      reason: o,
                    }),
                    E = {
                      newHomeClientOffset: I,
                      dropDuration: w,
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
          var n = (0, Le.A)(t),
            a = Oo(n),
            i = ie;
          function o() {
            return i !== ie;
          }
          function l() {
            o() && m(!1), (i = K(window, [a]));
          }
          function s() {
            o() || m(!1), n.cancel(), i(), (i = ie);
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
                o === -1 && m(!1);
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
          Ke = function (r, t) {
            qe(), t(), $e();
          },
          vr = function (r, t) {
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
                n && m(!1),
                  Ke("onBeforeCapture", function () {
                    var v = e().onBeforeCapture;
                    if (v) {
                      var g = { draggableId: u, mode: p };
                      v(g);
                    }
                  });
              },
              i = function (u, p) {
                n && m(!1),
                  Ke("onBeforeDragStart", function () {
                    var v = e().onBeforeDragStart;
                    v && v(vr(u, p));
                  });
              },
              o = function (u, p) {
                n && m(!1);
                var v = vr(u, p);
                (n = {
                  mode: p,
                  lastCritical: u,
                  lastLocation: v.source,
                  lastCombine: null,
                }),
                  t.add(function () {
                    Ke("onDragStart", function () {
                      return nt(e().onDragStart, v, r, lr.onDragStart);
                    });
                  });
              },
              l = function (u, p) {
                var v = Hr(p),
                  g = cr(p);
                n || m(!1);
                var b = !ko(u, n.lastCritical);
                b && (n.lastCritical = u);
                var y = !Go(n.lastLocation, v);
                y && (n.lastLocation = v);
                var I = !Wo(n.lastCombine, g);
                if ((I && (n.lastCombine = g), !(!b && !y && !I))) {
                  var S = (0, A.A)({}, vr(u, n.mode), {
                    combine: g,
                    destination: v,
                  });
                  t.add(function () {
                    Ke("onDragUpdate", function () {
                      return nt(e().onDragUpdate, S, r, lr.onDragUpdate);
                    });
                  });
                }
              },
              s = function () {
                n || m(!1), t.flush();
              },
              f = function (u) {
                n || m(!1),
                  (n = null),
                  Ke("onDragEnd", function () {
                    return nt(e().onDragEnd, u, r, lr.onDragEnd);
                  });
              },
              d = function () {
                if (n) {
                  var u = (0, A.A)({}, vr(n.lastCritical, n.mode), {
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
                n.phase !== "DROP_ANIMATING" && m(!1),
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
                    (t = null), (r = K(window, [o]));
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
          zo = function (e) {
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
          jo = function (r) {
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
                  if (jo(n)) {
                    e.stop(), t(n);
                    return;
                  }
                  if (n.type === "INITIAL_PUBLISH") {
                    t(n);
                    var a = r.getState();
                    a.phase !== "DRAGGING" && m(!1), e.start(a);
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
          Jo = X.Zz,
          Xo = function (e) {
            var r = e.dimensionMarshal,
              t = e.focusMarshal,
              n = e.styleMarshal,
              a = e.getResponders,
              i = e.announce,
              o = e.autoScroller;
            return (0, X.y$)(
              ao,
              Jo(
                (0, X.Tw)(
                  Co(n),
                  $o(r),
                  So(r),
                  Bo,
                  Vo,
                  qo,
                  Yo,
                  Ko(o),
                  Mo,
                  zo(t),
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
                  (a = null), qe();
                  var d = n,
                    c = d.additions,
                    u = d.removals,
                    p = d.modified,
                    v = Object.keys(c)
                      .map(function (y) {
                        return r.draggable.getById(y).getDimension(W);
                      })
                      .sort(function (y, I) {
                        return y.descriptor.index - I.descriptor.index;
                      }),
                    g = Object.keys(p).map(function (y) {
                      var I = r.droppable.getById(y),
                        S = I.callbacks.getScrollWhileDragging();
                      return { droppableId: y, scroll: S };
                    }),
                    b = { additions: v, removals: Object.keys(u), modified: g };
                  (n = at()), $e(), t.publish(b);
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
              i = q({ x: t, y: r }, { x: a, y: n }),
              o = { x: Math.max(0, i.x), y: Math.max(0, i.y) };
            return o;
          },
          Sn = function (e) {
            var r = e.document.documentElement;
            return r || m(!1), r;
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
              d = (0, M.l)({ top: n, left: a, right: s, bottom: f }),
              c = {
                frame: d,
                scroll: {
                  initial: r,
                  current: r,
                  max: t,
                  diff: { value: W, displacement: W },
                },
              };
            return c;
          },
          _o = function (e) {
            var r = e.windowToUse,
              t = e.critical,
              n = e.scrollOptions,
              a = e.registry;
            qe();
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
            $e();
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
                r.droppable.exists(v) || m(!1),
                  n && t.updateDroppableIsEnabled({ id: v, isEnabled: g });
              },
              o = function (v, g) {
                n &&
                  (r.droppable.exists(v) || m(!1),
                  t.updateDroppableIsCombineEnabled({
                    id: v,
                    isCombineEnabled: g,
                  }));
              },
              l = function (v, g) {
                n &&
                  (r.droppable.exists(v) || m(!1),
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
                n || m(!1);
                var g = n.critical.draggable;
                v.type === "ADDITION" && wn(r, g, v.value) && a.add(v.value),
                  v.type === "REMOVAL" &&
                    wn(r, g, v.value) &&
                    a.remove(v.value);
              },
              c = function (v) {
                n && m(!1);
                var g = r.draggable.getById(v.draggableId),
                  b = r.droppable.getById(g.descriptor.droppableId),
                  y = { draggable: g.descriptor, droppable: b.descriptor },
                  I = r.subscribe(d);
                return (
                  (n = { critical: y, unsubscribe: I }),
                  _o({
                    windowToUse: e,
                    critical: y,
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
          nl = G(function (e) {
            return ur(e).filter(function (r) {
              return !(!r.isEnabled || !r.frame);
            });
          }),
          al = function (r, t) {
            var n = be(nl(t), function (a) {
              return a.frame || m(!1), on(a.frame.pageMarginBox)(r);
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
          se = {
            startFromPercentage: 0.25,
            maxScrollAtPercentage: 0.05,
            maxPixelScroll: 28,
            ease: function (r) {
              return Math.pow(r, 2);
            },
            durationDampening: { stopDampeningAt: 1200, accelerateAt: 360 },
          },
          ol = function (e, r) {
            var t = e[r.size] * se.startFromPercentage,
              n = e[r.size] * se.maxScrollAtPercentage,
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
            if (e <= r.maxScrollValueAt) return se.maxPixelScroll;
            if (e === r.startScrollingFrom) return it;
            var t = En({
                startOfRange: r.maxScrollValueAt,
                endOfRange: r.startScrollingFrom,
                current: e,
              }),
              n = 1 - t,
              a = se.maxPixelScroll * se.ease(n);
            return Math.ceil(a);
          },
          Pn = se.durationDampening.accelerateAt,
          Rn = se.durationDampening.stopDampeningAt,
          sl = function (e, r) {
            var t = r,
              n = Rn,
              a = Date.now(),
              i = a - t;
            if (i >= Rn) return e;
            if (i < Pn) return it;
            var o = En({ startOfRange: Pn, endOfRange: n, current: i }),
              l = e * se.ease(o);
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
            if (oe(f, W)) return null;
            var d = ul({ container: t, subject: n, proposedScroll: f });
            return d ? (oe(d, W) ? null : d) : null;
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
                i = k(t, a),
                o = { x: e(i.x, n.x), y: e(i.y, n.y) };
              return oe(o, W) ? null : o;
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
              destination: $(r.impact),
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
              n = (0, Le.A)(r),
              a = (0, Le.A)(t),
              i = null,
              o = function (d) {
                i || m(!1);
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
                qe(), i && m(!1);
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
                  $e(),
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
                var c = k(f.current.client.selection, d);
                r({ client: c });
              },
              i = function (f, d) {
                if (!st(f, d)) return d;
                var c = pl(f, d);
                if (!c) return t(f.descriptor.id, d), null;
                var u = q(d, c);
                t(f.descriptor.id, u);
                var p = q(d, u);
                return p;
              },
              o = function (f, d, c) {
                if (!f || !lt(d, c)) return c;
                var u = fl(d, c);
                if (!u) return n(c), null;
                var p = q(c, u);
                n(p);
                var v = q(c, p);
                return v;
              },
              l = function (f) {
                var d = f.scrollJumpRequest;
                if (d) {
                  var c = $(f.impact);
                  c || m(!1);
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
          Ee = "data-rbd",
          Pe = (function () {
            var e = Ee + "-drag-handle";
            return {
              base: e,
              draggableId: e + "-draggable-id",
              contextId: e + "-context-id",
            };
          })(),
          ut = (function () {
            var e = Ee + "-draggable";
            return { base: e, contextId: e + "-context-id", id: e + "-id" };
          })(),
          yl = (function () {
            var e = Ee + "-droppable";
            return { base: e, contextId: e + "-context-id", id: e + "-id" };
          })(),
          Ln = { contextId: Ee + "-scroll-container-context-id" },
          Dl = function (r) {
            return function (t) {
              return "[" + t + '="' + r + '"]';
            };
          },
          Ye = function (r, t) {
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
                  selector: r(Pe.contextId),
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
                  je.outOfTheWay +
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
              always: Ye(o, "always"),
              resting: Ye(o, "resting"),
              dragging: Ye(o, "dragging"),
              dropAnimating: Ye(o, "dropAnimating"),
              userCancel: Ye(o, "userCancel"),
            };
          },
          z =
            typeof window < "u" &&
            typeof window.document < "u" &&
            typeof window.document.createElement < "u"
              ? D.useLayoutEffect
              : D.useEffect,
          Sl = function (r) {
            var t = r || document.querySelector("head");
            return t || m(!1), t;
          },
          Fn = function (r) {
            var t = document.createElement("style");
            return r && t.setAttribute("nonce", r), (t.type = "text/css"), t;
          };
        function Cl(e, r, t) {
          var n = (0, h.Kr)(
              function () {
                return xl(e);
              },
              [e],
            ),
            a = (0, D.useRef)(null),
            i = (0, D.useRef)(null),
            o = (0, h.hb)(
              G(function (u) {
                var p = i.current;
                p || m(!1), (p.textContent = u);
              }),
              [],
            ),
            l = (0, h.hb)(function (u) {
              var p = a.current;
              p || m(!1), (p.textContent = u);
            }, []);
          z(
            function () {
              (!a.current && !i.current) || m(!1);
              var u = Fn(r),
                p = Fn(r);
              (a.current = u),
                (i.current = p),
                u.setAttribute(Ee + "-always", e),
                p.setAttribute(Ee + "-dynamic", e);
              var v = Sl(t);
              return (
                v.appendChild(u),
                v.appendChild(p),
                l(n.always),
                o(n.resting),
                function () {
                  var g = function (y) {
                    var I = y.current;
                    I || m(!1), v.removeChild(I), (y.current = null);
                  };
                  g(a), g(i);
                }
              );
            },
            [r, l, o, n.always, n.resting, e, t],
          );
          var s = (0, h.hb)(
              function () {
                return o(n.dragging);
              },
              [o, n.dragging],
            ),
            f = (0, h.hb)(
              function (u) {
                if (u === "DROP") {
                  o(n.dropAnimating);
                  return;
                }
                o(n.userCancel);
              },
              [o, n.dropAnimating, n.userCancel],
            ),
            d = (0, h.hb)(
              function () {
                i.current && o(n.resting);
              },
              [o, n.resting],
            ),
            c = (0, h.Kr)(
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
            o = be(i, t);
          return !o && a.host ? ct(a.host, r, t) : o;
        }
        var Wn = function (e) {
          return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
        };
        function Je(e) {
          return e instanceof Wn(e).HTMLElement;
        }
        function kn(e, r, t) {
          var n = "[" + Pe.contextId + '="' + e + '"]',
            a = ct(t, n, function (i) {
              return i.getAttribute(Pe.draggableId) === r;
            });
          return !a || !Je(a) ? null : a;
        }
        function Al(e) {
          var r = (0, D.useRef)({}),
            t = (0, D.useRef)(null),
            n = (0, D.useRef)(null),
            a = (0, D.useRef)(!1),
            i = (0, h.hb)(function (u, p) {
              var v = { id: u, focus: p };
              return (
                (r.current[u] = v),
                function () {
                  var b = r.current,
                    y = b[u];
                  y !== v && delete b[u];
                }
              );
            }, []),
            o = (0, h.hb)(
              function (u) {
                var p = kn(e, u);
                p && p !== document.activeElement && p.focus();
              },
              [e],
            ),
            l = (0, h.hb)(function (u, p) {
              t.current === u && (t.current = p);
            }, []),
            s = (0, h.hb)(
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
            f = (0, h.hb)(function (u) {
              t.current = null;
              var p = document.activeElement;
              p && p.getAttribute(Pe.draggableId) === u && (t.current = u);
            }, []);
          z(function () {
            return (
              (a.current = !0),
              function () {
                a.current = !1;
                var u = n.current;
                u && cancelAnimationFrame(u);
              }
            );
          }, []);
          var d = (0, h.Kr)(
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
            return u || m(!1), u;
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
              return sr(e.draggables).filter(function (p) {
                return p.descriptor.type === u;
              });
            },
          };
          function l(c) {
            return e.droppables[c] || null;
          }
          function s(c) {
            var u = l(c);
            return u || m(!1), u;
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
              return sr(e.droppables).filter(function (p) {
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
          var e = (0, h.Kr)(El, []);
          return (
            (0, D.useEffect)(
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
        var dt = D.createContext(null),
          Xe = function () {
            var e = document.body;
            return e || m(!1), e;
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
          var r = (0, h.Kr)(
              function () {
                return Bl(e);
              },
              [e],
            ),
            t = (0, D.useRef)(null);
          (0, D.useEffect)(
            function () {
              var i = document.createElement("div");
              return (
                (t.current = i),
                (i.id = r),
                i.setAttribute("aria-live", "assertive"),
                i.setAttribute("aria-atomic", "true"),
                (0, A.A)(i.style, Rl),
                Xe().appendChild(i),
                function () {
                  setTimeout(function () {
                    var s = Xe();
                    s.contains(i) && s.removeChild(i),
                      i === t.current && (t.current = null);
                  });
                }
              );
            },
            [r],
          );
          var n = (0, h.hb)(function (a) {
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
            (0, h.Kr)(
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
            a = (0, h.Kr)(
              function () {
                return Ml({ contextId: r, uniqueId: n });
              },
              [n, r],
            );
          return (
            (0, D.useEffect)(
              function () {
                var o = document.createElement("div");
                return (
                  (o.id = a),
                  (o.textContent = t),
                  (o.style.display = "none"),
                  Xe().appendChild(o),
                  function () {
                    var s = Xe();
                    s.contains(o) && s.removeChild(o);
                  }
                );
              },
              [a, t],
            ),
            a
          );
        }
        var gr = D.createContext(null),
          Fl = {
            react: "^16.8.5 || ^17.0.0 || ^18.0.0",
            "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
          },
          Gl = /(\d+)\.(\d+)\.(\d+)/,
          Hn = function (r) {
            var t = Gl.exec(r);
            t == null && m(!1);
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
        function Qe(e, r) {}
        function Hl() {
          Qe(function () {
            kl(Fl.react, D.version), Ul(document);
          }, []);
        }
        function pt(e) {
          var r = (0, D.useRef)(e);
          return (
            (0, D.useEffect)(function () {
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
            e && m(!1);
            var l = { abandon: o };
            return (e = l), l;
          }
          function a() {
            e || m(!1), (e = null);
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
          zl = 33,
          jl = 34,
          Kl = 35,
          Yl = 36,
          Jl = 37,
          Xl = 38,
          Ql = 39,
          Zl = 40,
          mr,
          _l = ((mr = {}), (mr[$l] = !0), (mr[ql] = !0), mr),
          qn = function (e) {
            _l[e.keyCode] && e.preventDefault();
          },
          br = (function () {
            var e = "visibilitychange";
            if (typeof document > "u") return e;
            var r = [e, "ms" + e, "webkit" + e, "moz" + e, "o" + e],
              t = be(r, function (n) {
                return "on" + n in document;
              });
            return t || e;
          })(),
          $n = 0,
          zn = 5;
        function es(e, r) {
          return Math.abs(r.x - e.x) >= zn || Math.abs(r.y - e.y) >= zn;
        }
        var jn = { type: "IDLE" };
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
                  c.type !== "PENDING" && m(!1);
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
                  (l.type === "IDLE" && m(!1),
                  l.actions.shouldRespectForcePress())
                ) {
                  r();
                  return;
                }
                o.preventDefault();
              },
            },
            { eventName: br, fn: r },
          ];
        }
        function ts(e) {
          var r = (0, D.useRef)(jn),
            t = (0, D.useRef)(ie),
            n = (0, h.Kr)(
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
            a = (0, h.Kr)(
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
            i = (0, h.hb)(
              function () {
                var c = { passive: !1, capture: !0 };
                t.current = K(e.getWindow(), [a, n], c);
              },
              [e, a, n],
            ),
            o = (0, h.hb)(
              function () {
                var d = r.current;
                d.type !== "IDLE" && ((r.current = jn), t.current(), i());
              },
              [i],
            ),
            l = (0, h.hb)(
              function () {
                var d = r.current;
                o(),
                  d.type === "DRAGGING" &&
                    d.actions.cancel({ shouldBlockNextClick: !0 }),
                  d.type === "PENDING" && d.actions.abort();
              },
              [o],
            ),
            s = (0, h.hb)(
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
                t.current = K(e.getWindow(), u, c);
              },
              [e, l, o],
            ),
            f = (0, h.hb)(
              function (c, u) {
                r.current.type !== "IDLE" && m(!1),
                  (r.current = { type: "PENDING", point: u, actions: c }),
                  s();
              },
              [s],
            );
          z(
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
        var Re;
        function ns() {}
        var as =
          ((Re = {}),
          (Re[jl] = !0),
          (Re[zl] = !0),
          (Re[Yl] = !0),
          (Re[Kl] = !0),
          Re);
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
            { eventName: br, fn: t },
          ];
        }
        function os(e) {
          var r = (0, D.useRef)(ns),
            t = (0, h.Kr)(
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
                      s || m(!1), (s = !1), r.current(), n();
                    }
                    r.current = K(e.getWindow(), is(f, d), {
                      capture: !0,
                      passive: !1,
                    });
                  },
                };
              },
              [e],
            ),
            n = (0, h.hb)(
              function () {
                var i = { passive: !1, capture: !0 };
                r.current = K(e.getWindow(), [t], i);
              },
              [e, t],
            );
          z(
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
            { eventName: br, fn: r },
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
                o.type === "IDLE" && m(!1);
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
            { eventName: br, fn: r },
          ];
        }
        function ds(e) {
          var r = (0, D.useRef)(gt),
            t = (0, D.useRef)(ie),
            n = (0, h.hb)(function () {
              return r.current;
            }, []),
            a = (0, h.hb)(function (p) {
              r.current = p;
            }, []),
            i = (0, h.Kr)(
              function () {
                return {
                  eventName: "touchstart",
                  fn: function (p) {
                    if (!p.defaultPrevented) {
                      var v = e.findClosestDraggableId(p);
                      if (v) {
                        var g = e.tryGetLock(v, l, { sourceEvent: p });
                        if (g) {
                          var b = p.touches[0],
                            y = b.clientX,
                            I = b.clientY,
                            S = { x: y, y: I };
                          t.current(), c(g, S);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            o = (0, h.hb)(
              function () {
                var p = { capture: !0, passive: !1 };
                t.current = K(e.getWindow(), [i], p);
              },
              [e, i],
            ),
            l = (0, h.hb)(
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
            s = (0, h.hb)(
              function () {
                var u = r.current;
                l(),
                  u.type === "DRAGGING" &&
                    u.actions.cancel({ shouldBlockNextClick: !0 }),
                  u.type === "PENDING" && u.actions.abort();
              },
              [l],
            ),
            f = (0, h.hb)(
              function () {
                var p = { capture: !0, passive: !1 },
                  v = { cancel: s, completed: l, getPhase: n },
                  g = K(e.getWindow(), cs(v), p),
                  b = K(e.getWindow(), us(v), p);
                t.current = function () {
                  g(), b();
                };
              },
              [e, s, n, l],
            ),
            d = (0, h.hb)(
              function () {
                var p = n();
                p.type !== "PENDING" && m(!1);
                var v = p.actions.fluidLift(p.point);
                a({ type: "DRAGGING", actions: v, hasMoved: !1 });
              },
              [n, a],
            ),
            c = (0, h.hb)(
              function (p, v) {
                n().type !== "IDLE" && m(!1);
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
          z(
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
            z(
              function () {
                var p = K(e.getWindow(), [
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
          return Je(t) ? Kn(e, t) : !1;
        }
        var gs = function (e) {
          return (0, M.l)(e.getBoundingClientRect()).center;
        };
        function ms(e) {
          return e instanceof Wn(e).Element;
        }
        var bs = (function () {
          var e = "matches";
          if (typeof document > "u") return e;
          var r = [e, "msMatchesSelector", "webkitMatchesSelector"],
            t = be(r, function (n) {
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
          return "[" + Pe.contextId + '="' + e + '"]';
        }
        function Ds(e, r) {
          var t = Gn(r);
          if (!ms(t)) return null;
          var n = ys(e),
            a = Jn(t, n);
          return !a || !Je(a) ? null : a;
        }
        function Is(e, r) {
          var t = Ds(e, r);
          return t ? t.getAttribute(Pe.draggableId) : null;
        }
        function xs(e, r, t) {
          var n = "[" + ut.contextId + '="' + e + '"]',
            a = ct(t, n, function (i) {
              return i.getAttribute(ut.id) === r;
            });
          return !a || !Je(a) ? null : a;
        }
        function Ss(e) {
          e.preventDefault();
        }
        function hr(e) {
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
          var c = r.claim(o || ie),
            u = "PRE_DRAG";
          function p() {
            return f.options.shouldRespectForcePress;
          }
          function v() {
            return r.isActive(c);
          }
          function g(E, R) {
            hr({ expected: E, phase: u, isLockActive: v, shouldWarn: !0 }) &&
              n.dispatch(R());
          }
          var b = g.bind(null, "DRAGGING");
          function y(E) {
            function R() {
              r.release(), (u = "COMPLETED");
            }
            u !== "PRE_DRAG" && (R(), u !== "PRE_DRAG" && m(!1)),
              n.dispatch(oo(E.liftActionArgs)),
              (u = "DRAGGING");
            function N(B, T) {
              if (
                (T === void 0 && (T = { shouldBlockNextClick: !1 }),
                E.cleanup(),
                T.shouldBlockNextClick)
              ) {
                var L = K(window, [
                  {
                    eventName: "click",
                    fn: Ss,
                    options: { once: !0, passive: !1, capture: !0 },
                  },
                ]);
                setTimeout(L);
              }
              R(), n.dispatch(mn({ reason: B }));
            }
            return (0, A.A)(
              {
                isActive: function () {
                  return hr({
                    expected: "DRAGGING",
                    phase: u,
                    isLockActive: v,
                    shouldWarn: !1,
                  });
                },
                shouldRespectForcePress: p,
                drop: function (T) {
                  return N("DROP", T);
                },
                cancel: function (T) {
                  return N("CANCEL", T);
                },
              },
              E.actions,
            );
          }
          function I(E) {
            var R = (0, Le.A)(function (B) {
                b(function () {
                  return gn({ client: B });
                });
              }),
              N = y({
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
            return (0, A.A)({}, N, { move: R });
          }
          function S() {
            var E = {
              moveUp: function () {
                return b(mo);
              },
              moveRight: function () {
                return b(ho);
              },
              moveDown: function () {
                return b(bo);
              },
              moveLeft: function () {
                return b(yo);
              },
            };
            return y({
              liftActionArgs: {
                id: i,
                clientSelection: gs(d),
                movementMode: "SNAP",
              },
              cleanup: ie,
              actions: E,
            });
          }
          function x() {
            var E = hr({
              expected: "PRE_DRAG",
              phase: u,
              isLockActive: v,
              shouldWarn: !0,
            });
            E && r.release();
          }
          var w = {
            isActive: function () {
              return hr({
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
          return w;
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
            s = (0, D.useState)(function () {
              return Vl();
            })[0],
            f = (0, h.hb)(
              function (x, w) {
                x.isDragging && !w.isDragging && s.tryAbandon();
              },
              [s],
            );
          z(
            function () {
              var x = t.getState(),
                w = t.subscribe(function () {
                  var E = t.getState();
                  f(x, E), (x = E);
                });
              return w;
            },
            [s, t, f],
          ),
            z(
              function () {
                return s.tryAbandon;
              },
              [s.tryAbandon],
            );
          var d = (0, h.hb)(
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
            c = (0, h.hb)(
              function (S, x, w) {
                return Cs({
                  lockAPI: s,
                  registry: n,
                  contextId: r,
                  store: t,
                  draggableId: S,
                  forceSensorStop: x,
                  sourceEvent: w && w.sourceEvent ? w.sourceEvent : null,
                });
              },
              [r, s, n, t],
            ),
            u = (0, h.hb)(
              function (S) {
                return Is(r, S);
              },
              [r],
            ),
            p = (0, h.hb)(
              function (S) {
                var x = n.draggable.findById(S);
                return x ? x.options : null;
              },
              [n.draggable],
            ),
            v = (0, h.hb)(
              function () {
                s.isClaimed() &&
                  (s.tryAbandon(),
                  t.getState().phase !== "IDLE" && t.dispatch(Qr()));
              },
              [s, t],
            ),
            g = (0, h.hb)(s.isClaimed, [s]),
            b = (0, h.hb)(
              function () {
                return o;
              },
              [o],
            ),
            y = (0, h.Kr)(
              function () {
                return {
                  canGetLock: d,
                  tryGetLock: c,
                  findClosestDraggableId: u,
                  findOptionsForDraggable: p,
                  tryReleaseLock: v,
                  isLockClaimed: g,
                  getWindow: b,
                };
              },
              [d, c, u, p, v, g, b],
            );
          fs(l);
          for (var I = 0; I < l.length; I++) l[I](y);
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
        function Ze(e) {
          return e.current || m(!1), e.current;
        }
        function Ps(e) {
          var r = e.contextId,
            t = e.setCallbacks,
            n = e.sensors,
            a = e.nonce,
            i = e.dragHandleUsageInstructions,
            o = (0, D.useRef)(null),
            [l, s] = D.useState(),
            f = D.useMemo(
              function () {
                return l ? l.ownerDocument.defaultView : window;
              },
              [l],
            );
          Hl();
          var d = pt(e),
            c = (0, h.hb)(
              function () {
                return Es(d.current);
              },
              [d],
            ),
            u = Ol(r),
            p = Ll({ contextId: r, text: i }),
            v = Cl(r, a, e.stylesInsertionPoint),
            g = (0, h.hb)(function (O) {
              Ze(o).dispatch(O);
            }, []),
            b = (0, h.Kr)(
              function () {
                return (0, X.zH)(
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
            y = Pl(),
            I = (0, h.Kr)(
              function () {
                return rl(f, y, b);
              },
              [f, y, b],
            ),
            S = (0, h.Kr)(
              function () {
                return hl(
                  (0, A.A)(
                    { scrollWindow: tl, scrollDroppable: I.scrollDroppable },
                    (0, X.zH)({ move: gn }, g),
                  ),
                );
              },
              [I.scrollDroppable, g],
            ),
            x = Al(r),
            w = (0, h.Kr)(
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
          l && (o.current = w);
          var E = (0, h.hb)(function () {
              var O = Ze(o),
                J = O.getState();
              J.phase !== "IDLE" && O.dispatch(Qr());
            }, []),
            R = (0, h.hb)(function () {
              var O = Ze(o).getState();
              return O.isDragging || O.phase === "DROP_ANIMATING";
            }, []),
            N = (0, h.Kr)(
              function () {
                return { isDragging: R, tryAbort: E };
              },
              [R, E],
            );
          t(N);
          var B = (0, h.hb)(function (O) {
              return An(Ze(o).getState(), O);
            }, []),
            T = (0, h.hb)(function () {
              return he(Ze(o).getState());
            }, []),
            L = (0, h.Kr)(
              function () {
                return {
                  marshal: I,
                  focus: x,
                  contextId: r,
                  canLift: B,
                  isMovementAllowed: T,
                  dragHandleUsageInstructionsId: p,
                  registry: y,
                };
              },
              [r, I, p, x, B, T, y],
            );
          return (
            As({
              contextId: r,
              store: w,
              registry: y,
              customSensors: n,
              enableDefaultSensors: e.enableDefaultSensors !== !1,
              windowToUse: f,
            }),
            (0, D.useEffect)(
              function () {
                return E;
              },
              [E],
            ),
            D.createElement(
              gr.Provider,
              { value: L },
              D.createElement("div", { ref: s }),
              l && D.createElement(ar, { context: dt, store: w }, e.children),
            )
          );
        }
        var Qn = 0;
        function Rs() {
          Qn = 0;
        }
        function Bs() {
          return (0, h.Kr)(function () {
            return "" + Qn++;
          }, []);
        }
        function Uu() {
          Rs(), Nl();
        }
        function Os(e) {
          var r = Bs(),
            t = e.dragHandleUsageInstructions || lr.dragHandleUsageInstructions;
          return D.createElement(Ya, null, function (n) {
            return D.createElement(
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
                    diff: { value: W, displacement: W },
                  },
                };
              })(),
              d = i === "vertical" ? Vr : Kt,
              c = Ce({ page: l, withPlaceholder: null, axis: d, frame: f }),
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
            var n = (0, M.YH)(r);
            if (!t || r !== t) return n;
            var a = n.paddingBox.top - t.scrollTop,
              i = n.paddingBox.left - t.scrollLeft,
              o = a + t.scrollHeight,
              l = i + t.scrollWidth,
              s = { top: a, right: l, bottom: o, left: i },
              f = (0, M.fT)(s, n.border),
              d = (0, M.ge)({
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
              c = (0, M.SQ)(d, a),
              u = (function () {
                if (!f) return null;
                var v = (0, M.YH)(f),
                  g = {
                    scrollHeight: f.scrollHeight,
                    scrollWidth: f.scrollWidth,
                  };
                return {
                  client: v,
                  page: (0, M.SQ)(v, a),
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
        function yr(e) {
          var r = (0, D.useContext)(e);
          return r || m(!1), r;
        }
        var Dr = function (r) {
          return (r && r.env.closestScrollable) || null;
        };
        function $s(e) {
          var r = (0, D.useRef)(null),
            t = yr(gr),
            n = ft("droppable"),
            a = t.registry,
            i = t.marshal,
            o = pt(e),
            l = (0, h.Kr)(
              function () {
                return { id: e.droppableId, type: e.type, mode: e.mode };
              },
              [e.droppableId, e.mode, e.type],
            ),
            s = (0, D.useRef)(l),
            f = (0, h.Kr)(
              function () {
                return G(function (x, w) {
                  r.current || m(!1);
                  var E = { x, y: w };
                  i.updateDroppableScroll(l.id, E);
                });
              },
              [l.id, i],
            ),
            d = (0, h.hb)(function () {
              var x = r.current;
              return !x || !x.env.closestScrollable
                ? W
                : bt(x.env.closestScrollable);
            }, []),
            c = (0, h.hb)(
              function () {
                var x = d();
                f(x.x, x.y);
              },
              [d, f],
            ),
            u = (0, h.Kr)(
              function () {
                return (0, Le.A)(c);
              },
              [c],
            ),
            p = (0, h.hb)(
              function () {
                var x = r.current,
                  w = Dr(x);
                (x && w) || m(!1);
                var E = x.scrollOptions;
                if (E.shouldPublishImmediately) {
                  c();
                  return;
                }
                u();
              },
              [u, c],
            ),
            v = (0, h.hb)(
              function (x, w) {
                r.current && m(!1);
                var E = o.current,
                  R = E.getDroppableRef();
                R || m(!1);
                var N = Ws(R),
                  B = { ref: R, descriptor: l, env: N, scrollOptions: w };
                r.current = B;
                var T = Hs({
                    ref: R,
                    descriptor: l,
                    env: N,
                    windowScroll: x,
                    direction: E.direction,
                    isDropDisabled: E.isDropDisabled,
                    isCombineEnabled: E.isCombineEnabled,
                    shouldClipSubject: !E.ignoreContainerClipping,
                  }),
                  L = N.closestScrollable;
                return (
                  L &&
                    (L.setAttribute(Ln.contextId, t.contextId),
                    L.addEventListener("scroll", p, ra(B.scrollOptions))),
                  T
                );
              },
              [t.contextId, l, p, o],
            ),
            g = (0, h.hb)(function () {
              var x = r.current,
                w = Dr(x);
              return (x && w) || m(!1), bt(w);
            }, []),
            b = (0, h.hb)(
              function () {
                var x = r.current;
                x || m(!1);
                var w = Dr(x);
                (r.current = null),
                  w &&
                    (u.cancel(),
                    w.removeAttribute(Ln.contextId),
                    w.removeEventListener("scroll", p, ra(x.scrollOptions)));
              },
              [p, u],
            ),
            y = (0, h.hb)(function (x) {
              var w = r.current;
              w || m(!1);
              var E = Dr(w);
              E || m(!1), (E.scrollTop += x.y), (E.scrollLeft += x.x);
            }, []),
            I = (0, h.Kr)(
              function () {
                return {
                  getDimensionAndWatchScroll: v,
                  getScrollWhileDragging: g,
                  dragStopped: b,
                  scroll: y,
                };
              },
              [b, v, g, y],
            ),
            S = (0, h.Kr)(
              function () {
                return { uniqueId: n, descriptor: l, callbacks: I };
              },
              [I, l, n],
            );
          z(
            function () {
              return (
                (s.current = S.descriptor),
                a.droppable.register(S),
                function () {
                  r.current && b(), a.droppable.unregister(S);
                }
              );
            },
            [I, l, b, S, i, a.droppable],
          ),
            z(
              function () {
                r.current &&
                  i.updateDroppableIsEnabled(s.current.id, !e.isDropDisabled);
              },
              [e.isDropDisabled, i],
            ),
            z(
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
          zs = function (r) {
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
          js = function (r) {
            var t = r.isAnimatingOpenOnMount,
              n = r.placeholder,
              a = r.animate,
              i = zs({ isAnimatingOpenOnMount: t, placeholder: n, animate: a });
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
              transition: a !== "none" ? je.placeholder : null,
            };
          };
        function Ks(e) {
          var r = (0, D.useRef)(null),
            t = (0, h.hb)(function () {
              r.current && (clearTimeout(r.current), (r.current = null));
            }, []),
            n = e.animate,
            a = e.onTransitionEnd,
            i = e.onClose,
            o = e.contextId,
            l = (0, D.useState)(e.animate === "open"),
            s = l[0],
            f = l[1];
          (0, D.useEffect)(
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
          var d = (0, h.hb)(
              function (u) {
                u.propertyName === "height" && (a(), n === "close" && i());
              },
              [n, i, a],
            ),
            c = js({
              isAnimatingOpenOnMount: s,
              animate: e.animate,
              placeholder: e.placeholder,
            });
          return D.createElement(e.placeholder.tagName, {
            style: c,
            "data-rbd-placeholder-context-id": o,
            onTransitionEnd: d,
            ref: e.innerRef,
          });
        }
        var Ys = D.memo(Ks),
          yt = D.createContext(null);
        function na(e) {
          (e && Je(e)) || m(!1);
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
              t.droppableId || m(!1), typeof t.droppableId != "string" && m(!1);
            },
            function (r) {
              var t = r.props;
              Dt(t.isDropDisabled) || m(!1),
                Dt(t.isCombineEnabled) || m(!1),
                Dt(t.ignoreContainerClipping) || m(!1);
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
              t.renderClone || m(!1);
            },
            function (r) {
              var t = r.getPlaceholderRef;
              t() && m(!1);
            },
          ];
        function Zs(e) {
          Qe(function () {
            It(e, Js),
              e.props.mode === "standard" && It(e, Xs),
              e.props.mode === "virtual" && It(e, Qs);
          });
        }
        var _s = (function (e) {
            (0, de.A)(r, e);
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
          })(D.PureComponent),
          aa = { dragging: 5e3, dropAnimating: 4500 },
          eu = function (r, t) {
            return t ? je.drop(t.duration) : r ? je.snap : je.fluid;
          },
          ru = function (r, t) {
            return r ? (t ? ze.opacity.drop : ze.opacity.combining) : null;
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
          t === void 0 && (t = W);
          var n = window.getComputedStyle(r),
            a = r.getBoundingClientRect(),
            i = (0, M.a)(a, n),
            o = (0, M.SQ)(i, t),
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
            s = (0, h.Kr)(
              function () {
                return {
                  canDragInteractiveElements: i,
                  shouldRespectForcePress: o,
                  isEnabled: l,
                };
              },
              [i, l, o],
            ),
            f = (0, h.hb)(
              function (p) {
                var v = a();
                return v || m(!1), ou(t, v, p);
              },
              [t, a],
            ),
            d = (0, h.Kr)(
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
            c = (0, D.useRef)(d),
            u = (0, D.useRef)(!0);
          z(
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
            z(
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
          Qe(function () {
            function n(i) {
              return "Draggable[id: " + i + "]: ";
            }
            var a = e.draggableId;
            a || m(!1),
              typeof a != "string" && m(!1),
              ai(e.index) || m(!1),
              e.mapped.type !== "DRAGGING" &&
                (na(t()), e.isEnabled && (kn(r, a, t()) || m(!1)));
          });
        }
        function uu(e) {}
        function cu(e) {
          e.preventDefault();
        }
        function du(e) {
          var r = (0, D.useRef)(null),
            t = (0, h.hb)(function (B) {
              r.current = B;
            }, []),
            n = (0, h.hb)(function () {
              return r.current;
            }, []),
            a = yr(gr),
            i = a.contextId,
            o = a.dragHandleUsageInstructionsId,
            l = a.registry,
            s = yr(yt),
            f = s.type,
            d = s.droppableId,
            c = (0, h.Kr)(
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
            b = e.canDragInteractiveElements,
            y = e.isClone,
            I = e.mapped,
            S = e.dropAnimationFinished;
          if ((su(e, i, n), uu(y), !y)) {
            var x = (0, h.Kr)(
              function () {
                return {
                  descriptor: c,
                  registry: l,
                  getDraggableRef: n,
                  canDragInteractiveElements: b,
                  shouldRespectForcePress: g,
                  isEnabled: v,
                };
              },
              [c, l, n, b, g, v],
            );
            lu(x);
          }
          var w = (0, h.Kr)(
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
            E = (0, h.hb)(
              function (B) {
                I.type === "DRAGGING" &&
                  I.dropping &&
                  B.propertyName === "transform" &&
                  S();
              },
              [S, I],
            ),
            R = (0, h.Kr)(
              function () {
                var B = iu(I),
                  T = I.type === "DRAGGING" && I.dropping ? E : null,
                  L = {
                    innerRef: t,
                    draggableProps: {
                      "data-rbd-draggable-context-id": i,
                      "data-rbd-draggable-id": p,
                      style: B,
                      onTransitionEnd: T,
                    },
                    dragHandleProps: w,
                  };
                return L;
              },
              [i, w, p, I, E, t],
            ),
            N = (0, h.Kr)(
              function () {
                return {
                  draggableId: c.id,
                  type: c.type,
                  source: { index: c.index, droppableId: c.droppableId },
                };
              },
              [c.droppableId, c.id, c.index, c.type],
            );
          return u(R, I.snapshot, N);
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
          var e = G(function (a, i) {
              return { x: a, y: i };
            }),
            r = G(function (a, i, o, l, s) {
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
            t = G(function (a, i, o, l, s, f, d) {
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
                  f = $(i.impact),
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
                  b = g.mode,
                  y = oa(g),
                  I = fu(g),
                  S = i.dropDuration,
                  x = {
                    duration: S,
                    curve: _r.drop,
                    moveTo: i.newHomeClientOffset,
                    opacity: I ? ze.opacity.drop : null,
                    scale: I ? ze.scale.drop : null,
                  };
                return {
                  mapped: {
                    type: "DRAGGING",
                    offset: i.newHomeClientOffset,
                    dimension: v,
                    dropping: x,
                    draggingOver: y,
                    combineWith: I,
                    mode: b,
                    forceShouldAnimate: null,
                    snapshot: r(b, p, y, I, x),
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
            offset: W,
            combineTargetFor: null,
            shouldAnimateDisplacement: !0,
            snapshot: la(null),
          },
        };
        function mu() {
          var e = G(function (o, l) {
              return { x: o, y: l };
            }),
            r = G(la),
            t = G(function (o, l, s) {
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
              return l ? t(W, l, !0) : null;
            },
            a = function (l, s, f, d) {
              var c = f.displaced.visible[l],
                u = !!(d.inVirtualList && d.effected[l]),
                p = cr(f),
                v = p && p.draggableId === l ? s : null;
              if (!c) {
                if (!u) return n(v);
                if (f.displaced.invisible[l]) return null;
                var g = Se(d.displacedBy.point),
                  b = e(g.x, g.y);
                return t(b, v, !0);
              }
              if (u) return n(v);
              var y = f.displacedBy.point,
                I = e(y.x, y.y);
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
          var r = yr(yt),
            t = r.isUsingCloneFor;
          return t === e.draggableId && !e.isClone
            ? null
            : D.createElement(yu, e);
        }
        function Du(e) {
          var r = typeof e.isDragDisabled == "boolean" ? !e.isDragDisabled : !0,
            t = !!e.disableInteractiveElementBlocking,
            n = !!e.shouldRespectForcePress;
          return D.createElement(
            sa,
            (0, A.A)({}, e, {
              isClone: !1,
              isEnabled: r,
              canDragInteractiveElements: t,
              shouldRespectForcePress: n,
            }),
          );
        }
        function Iu(e) {
          var r = (0, D.useContext)(gr);
          r || m(!1);
          var t = r.contextId,
            n = r.isMovementAllowed,
            a = (0, D.useRef)(null),
            i = (0, D.useRef)(null),
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
            b = e.updateViewportMaxScroll,
            y = e.getContainerForClone,
            I = (0, h.hb)(function () {
              return a.current;
            }, []),
            S = (0, h.hb)(function (O) {
              a.current = O;
            }, []),
            x = (0, h.hb)(function () {
              return i.current;
            }, []),
            w = (0, h.hb)(function (O) {
              i.current = O;
            }, []);
          Zs({ props: e, getDroppableRef: I, getPlaceholderRef: x });
          var E = (0, h.hb)(
            function () {
              if (n()) {
                var O;
                b({
                  maxScroll: Cn(
                    ((O = a.current) == null
                      ? void 0
                      : O.ownerDocument.defaultView) || window,
                  ),
                });
              }
            },
            [n, b],
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
          var R = D.createElement(
              _s,
              { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
              function (O) {
                var J = O.onClose,
                  Q = O.data,
                  j = O.animate;
                return D.createElement(Ys, {
                  placeholder: Q,
                  onClose: J,
                  innerRef: w,
                  animate: j,
                  contextId: t,
                  onTransitionEnd: E,
                });
              },
            ),
            N = (0, h.Kr)(
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
            B = g ? g.dragging.draggableId : null,
            T = (0, h.Kr)(
              function () {
                return { droppableId: l, type: s, isUsingCloneFor: B };
              },
              [l, B, s],
            );
          function L() {
            if (!g) return null;
            var O = g.dragging,
              J = g.render,
              Q = D.createElement(
                sa,
                {
                  draggableId: O.draggableId,
                  index: O.source.index,
                  isClone: !0,
                  isEnabled: !0,
                  shouldRespectForcePress: !1,
                  canDragInteractiveElements: !0,
                },
                function (j, Z) {
                  return J(j, Z, O);
                },
              );
            return Tt.createPortal(Q, y());
          }
          return D.createElement(yt.Provider, { value: T }, o(N, v), L());
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
              t = (0, A.A)({}, r, { shouldAnimatePlaceholder: !1 }),
              n = G(function (o) {
                return {
                  draggableId: o.id,
                  type: o.type,
                  source: { index: o.index, droppableId: o.droppableId },
                };
              }),
              a = G(function (o, l, s, f, d, c) {
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
                var b = {
                  isDraggingOver: s,
                  draggingOverWith: u,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: d.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: b,
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
                    g = $(l.impact) === f;
                  return a(f, c, g, g, v, u);
                }
                if (l.phase === "DROP_ANIMATING") {
                  var b = l.completed;
                  if (!xt(d, b.critical)) return t;
                  var y = ua(b.critical, l.dimensions);
                  return a(f, c, oa(b.result) === f, $(b.impact) === f, y, u);
                }
                if (l.phase === "IDLE" && l.completed && !l.shouldFlush) {
                  var I = l.completed;
                  if (!xt(d, I.critical)) return t;
                  var S = $(I.impact) === f,
                    x = !!(I.impact.at && I.impact.at.type === "COMBINE"),
                    w = I.critical.droppable.id === f;
                  return S ? (x ? r : t) : w ? r : t;
                }
                return t;
              };
            return i;
          },
          Su = { updateViewportMaxScroll: go };
        function Cu() {
          return document.body || m(!1), document.body;
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
      59671: (Er, tr) => {
        var P; /** @license React v17.0.2
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var D = 60103,
          de = 60106,
          A = 60107,
          X = 60108,
          te = 60114,
          xe = 60109,
          fe = 60110,
          ne = 60112,
          pe = 60113,
          Oe = 60120,
          ve = 60115,
          ae = 60116,
          Te = 60121,
          Ne = 60122,
          nr = 60117,
          ar = 60129,
          ge = 60131;
        if (typeof Symbol == "function" && Symbol.for) {
          var F = Symbol.for;
          (D = F("react.element")),
            (de = F("react.portal")),
            (A = F("react.fragment")),
            (X = F("react.strict_mode")),
            (te = F("react.profiler")),
            (xe = F("react.provider")),
            (fe = F("react.context")),
            (ne = F("react.forward_ref")),
            (pe = F("react.suspense")),
            (Oe = F("react.suspense_list")),
            (ve = F("react.memo")),
            (ae = F("react.lazy")),
            (Te = F("react.block")),
            (Ne = F("react.server.block")),
            (nr = F("react.fundamental")),
            (ar = F("react.debug_trace_mode")),
            (ge = F("react.legacy_hidden"));
        }
        function V(C) {
          if (typeof C == "object" && C !== null) {
            var Me = C.$$typeof;
            switch (Me) {
              case D:
                switch (((C = C.type), C)) {
                  case A:
                  case te:
                  case X:
                  case pe:
                  case Oe:
                    return C;
                  default:
                    switch (((C = C && C.$$typeof), C)) {
                      case fe:
                      case ne:
                      case ae:
                      case ve:
                      case xe:
                        return C;
                      default:
                        return Me;
                    }
                }
              case de:
                return Me;
            }
          }
        }
        var Pr = xe,
          Rr = D,
          Br = ne,
          Or = A,
          Tr = ae,
          Et = ve,
          Nr = de,
          ir = te,
          Mr = X,
          Lr = pe;
        (P = fe),
          (P = Pr),
          (P = Rr),
          (P = Br),
          (P = Or),
          (P = Tr),
          (P = Et),
          (P = Nr),
          (P = ir),
          (P = Mr),
          (P = Lr),
          (P = function () {
            return !1;
          }),
          (P = function () {
            return !1;
          }),
          (tr.isContextConsumer = function (C) {
            return V(C) === fe;
          }),
          (P = function (C) {
            return V(C) === xe;
          }),
          (P = function (C) {
            return typeof C == "object" && C !== null && C.$$typeof === D;
          }),
          (P = function (C) {
            return V(C) === ne;
          }),
          (P = function (C) {
            return V(C) === A;
          }),
          (P = function (C) {
            return V(C) === ae;
          }),
          (P = function (C) {
            return V(C) === ve;
          }),
          (P = function (C) {
            return V(C) === de;
          }),
          (P = function (C) {
            return V(C) === te;
          }),
          (P = function (C) {
            return V(C) === X;
          }),
          (P = function (C) {
            return V(C) === pe;
          }),
          (P = function (C) {
            return (
              typeof C == "string" ||
              typeof C == "function" ||
              C === A ||
              C === te ||
              C === ar ||
              C === X ||
              C === pe ||
              C === Oe ||
              C === ge ||
              (typeof C == "object" &&
                C !== null &&
                (C.$$typeof === ae ||
                  C.$$typeof === ve ||
                  C.$$typeof === xe ||
                  C.$$typeof === fe ||
                  C.$$typeof === ne ||
                  C.$$typeof === nr ||
                  C.$$typeof === Te ||
                  C[0] === Ne))
            );
          }),
          (P = V);
      },
      44019: (Er, tr, P) => {
        Er.exports = P(59671);
      },
    },
  ]);
})();
