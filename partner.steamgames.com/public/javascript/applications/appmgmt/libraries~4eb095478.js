/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [1784],
  {
    121: (e, r, n) => {
      n.d(r, { JY: () => fi, sx: () => Ji, gL: () => Zi });
      var t = n(90626),
        i = n(42891),
        o = n(58584),
        a = n(3998),
        l = t.createContext(null);
      var u = function (e) {
          e();
        },
        c = function () {
          return u;
        };
      var s = {
        notify: function () {},
        get: function () {
          return [];
        },
      };
      function d(e, r) {
        var n,
          t = s;
        function i() {
          a.onStateChange && a.onStateChange();
        }
        function o() {
          n ||
            ((n = r ? r.addNestedSub(i) : e.subscribe(i)),
            (t = (function () {
              var e = c(),
                r = null,
                n = null;
              return {
                clear: function () {
                  (r = null), (n = null);
                },
                notify: function () {
                  e(function () {
                    for (var e = r; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function () {
                  for (var e = [], n = r; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function (e) {
                  var t = !0,
                    i = (n = { callback: e, next: null, prev: n });
                  return (
                    i.prev ? (i.prev.next = i) : (r = i),
                    function () {
                      t &&
                        null !== r &&
                        ((t = !1),
                        i.next ? (i.next.prev = i.prev) : (n = i.prev),
                        i.prev ? (i.prev.next = i.next) : (r = i.next));
                    }
                  );
                },
              };
            })()));
        }
        var a = {
          addNestedSub: function (e) {
            return o(), t.subscribe(e);
          },
          notifyNestedSubs: function () {
            t.notify();
          },
          handleChangeWrapper: i,
          isSubscribed: function () {
            return Boolean(n);
          },
          trySubscribe: o,
          tryUnsubscribe: function () {
            n && (n(), (n = void 0), t.clear(), (t = s));
          },
          getListeners: function () {
            return t;
          },
        };
        return a;
      }
      var p =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? t.useLayoutEffect
          : t.useEffect;
      const f = function (e) {
        var r = e.store,
          n = e.context,
          i = e.children,
          o = (0, t.useMemo)(
            function () {
              var e = d(r);
              return { store: r, subscription: e };
            },
            [r],
          ),
          a = (0, t.useMemo)(
            function () {
              return r.getState();
            },
            [r],
          );
        p(
          function () {
            var e = o.subscription;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              a !== r.getState() && e.notifyNestedSubs(),
              function () {
                e.tryUnsubscribe(), (e.onStateChange = null);
              }
            );
          },
          [o, a],
        );
        var u = n || l;
        return t.createElement(u.Provider, { value: o }, i);
      };
      var g = n(81115),
        v = n(904),
        m = n.n(v),
        b = n(44019),
        h = [
          "getDisplayName",
          "methodName",
          "renderCountProp",
          "shouldHandleStateChanges",
          "storeKey",
          "withRef",
          "forwardRef",
          "context",
        ],
        y = ["reactReduxForwardedRef"],
        I = [],
        D = [null, null];
      function x(e, r) {
        var n = e[1];
        return [r.payload, n + 1];
      }
      function E(e, r, n) {
        p(function () {
          return e.apply(void 0, r);
        }, n);
      }
      function w(e, r, n, t, i, o, a) {
        (e.current = t),
          (r.current = i),
          (n.current = !1),
          o.current && ((o.current = null), a());
      }
      function A(e, r, n, t, i, o, a, l, u, c) {
        if (e) {
          var s = !1,
            d = null,
            p = function () {
              if (!s) {
                var e,
                  n,
                  p = r.getState();
                try {
                  e = t(p, i.current);
                } catch (e) {
                  (n = e), (d = e);
                }
                n || (d = null),
                  e === o.current
                    ? a.current || u()
                    : ((o.current = e),
                      (l.current = e),
                      (a.current = !0),
                      c({ type: "STORE_UPDATED", payload: { error: n } }));
              }
            };
          (n.onStateChange = p), n.trySubscribe(), p();
          return function () {
            if (((s = !0), n.tryUnsubscribe(), (n.onStateChange = null), d))
              throw d;
          };
        }
      }
      var C = function () {
        return [null, 0];
      };
      function S(e, r) {
        void 0 === r && (r = {});
        var n = r,
          i = n.getDisplayName,
          a =
            void 0 === i
              ? function (e) {
                  return "ConnectAdvanced(" + e + ")";
                }
              : i,
          u = n.methodName,
          c = void 0 === u ? "connectAdvanced" : u,
          s = n.renderCountProp,
          p = void 0 === s ? void 0 : s,
          f = n.shouldHandleStateChanges,
          v = void 0 === f || f,
          S = n.storeKey,
          P = void 0 === S ? "store" : S,
          N = (n.withRef, n.forwardRef),
          R = void 0 !== N && N,
          B = n.context,
          O = void 0 === B ? l : B,
          T = (0, g.A)(n, h),
          L = O;
        return function (r) {
          var n = r.displayName || r.name || "Component",
            i = a(n),
            l = (0, o.A)({}, T, {
              getDisplayName: a,
              methodName: c,
              renderCountProp: p,
              shouldHandleStateChanges: v,
              storeKey: P,
              displayName: i,
              wrappedComponentName: n,
              WrappedComponent: r,
            }),
            u = T.pure;
          var s = u
            ? t.useMemo
            : function (e) {
                return e();
              };
          function f(n) {
            var i = (0, t.useMemo)(
                function () {
                  var e = n.reactReduxForwardedRef,
                    r = (0, g.A)(n, y);
                  return [n.context, e, r];
                },
                [n],
              ),
              a = i[0],
              u = i[1],
              c = i[2],
              p = (0, t.useMemo)(
                function () {
                  return a &&
                    a.Consumer &&
                    (0, b.isContextConsumer)(t.createElement(a.Consumer, null))
                    ? a
                    : L;
                },
                [a, L],
              ),
              f = (0, t.useContext)(p),
              m =
                Boolean(n.store) &&
                Boolean(n.store.getState) &&
                Boolean(n.store.dispatch);
            Boolean(f) && Boolean(f.store);
            var h = m ? n.store : f.store,
              S = (0, t.useMemo)(
                function () {
                  return (function (r) {
                    return e(r.dispatch, l);
                  })(h);
                },
                [h],
              ),
              P = (0, t.useMemo)(
                function () {
                  if (!v) return D;
                  var e = d(h, m ? null : f.subscription),
                    r = e.notifyNestedSubs.bind(e);
                  return [e, r];
                },
                [h, m, f],
              ),
              N = P[0],
              R = P[1],
              B = (0, t.useMemo)(
                function () {
                  return m ? f : (0, o.A)({}, f, { subscription: N });
                },
                [m, f, N],
              ),
              O = (0, t.useReducer)(x, I, C),
              T = O[0][0],
              G = O[1];
            if (T && T.error) throw T.error;
            var M = (0, t.useRef)(),
              _ = (0, t.useRef)(c),
              F = (0, t.useRef)(),
              k = (0, t.useRef)(!1),
              W = s(
                function () {
                  return F.current && c === _.current
                    ? F.current
                    : S(h.getState(), c);
                },
                [h, T, c],
              );
            E(w, [_, M, k, c, W, F, R]),
              E(A, [v, h, N, S, _, M, k, F, R, G], [h, N, S]);
            var U = (0, t.useMemo)(
              function () {
                return t.createElement(r, (0, o.A)({}, W, { ref: u }));
              },
              [u, r, W],
            );
            return (0, t.useMemo)(
              function () {
                return v ? t.createElement(p.Provider, { value: B }, U) : U;
              },
              [p, U, B],
            );
          }
          var h = u ? t.memo(f) : f;
          if (
            ((h.WrappedComponent = r), (h.displayName = f.displayName = i), R)
          ) {
            var S = t.forwardRef(function (e, r) {
              return t.createElement(
                h,
                (0, o.A)({}, e, { reactReduxForwardedRef: r }),
              );
            });
            return (S.displayName = i), (S.WrappedComponent = r), m()(S, r);
          }
          return m()(h, r);
        };
      }
      function P(e, r) {
        return e === r
          ? 0 !== e || 0 !== r || 1 / e == 1 / r
          : e != e && r != r;
      }
      function N(e, r) {
        if (P(e, r)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof r ||
          null === r
        )
          return !1;
        var n = Object.keys(e),
          t = Object.keys(r);
        if (n.length !== t.length) return !1;
        for (var i = 0; i < n.length; i++)
          if (
            !Object.prototype.hasOwnProperty.call(r, n[i]) ||
            !P(e[n[i]], r[n[i]])
          )
            return !1;
        return !0;
      }
      function R(e) {
        return function (r, n) {
          var t = e(r, n);
          function i() {
            return t;
          }
          return (i.dependsOnOwnProps = !1), i;
        };
      }
      function B(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function O(e, r) {
        return function (r, n) {
          n.displayName;
          var t = function (e, r) {
            return t.dependsOnOwnProps ? t.mapToProps(e, r) : t.mapToProps(e);
          };
          return (
            (t.dependsOnOwnProps = !0),
            (t.mapToProps = function (r, n) {
              (t.mapToProps = e), (t.dependsOnOwnProps = B(e));
              var i = t(r, n);
              return (
                "function" == typeof i &&
                  ((t.mapToProps = i),
                  (t.dependsOnOwnProps = B(i)),
                  (i = t(r, n))),
                i
              );
            }),
            t
          );
        };
      }
      const T = [
        function (e) {
          return "function" == typeof e ? O(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : R(function (e) {
                return { dispatch: e };
              });
        },
        function (e) {
          return e && "object" == typeof e
            ? R(function (r) {
                return (function (e, r) {
                  var n = {},
                    t = function (t) {
                      var i = e[t];
                      "function" == typeof i &&
                        (n[t] = function () {
                          return r(i.apply(void 0, arguments));
                        });
                    };
                  for (var i in e) t(i);
                  return n;
                })(e, r);
              })
            : void 0;
        },
      ];
      const L = [
        function (e) {
          return "function" == typeof e ? O(e) : void 0;
        },
        function (e) {
          return e
            ? void 0
            : R(function () {
                return {};
              });
        },
      ];
      function G(e, r, n) {
        return (0, o.A)({}, n, e, r);
      }
      const M = [
        function (e) {
          return "function" == typeof e
            ? (function (e) {
                return function (r, n) {
                  n.displayName;
                  var t,
                    i = n.pure,
                    o = n.areMergedPropsEqual,
                    a = !1;
                  return function (r, n, l) {
                    var u = e(r, n, l);
                    return (
                      a ? (i && o(u, t)) || (t = u) : ((a = !0), (t = u)), t
                    );
                  };
                };
              })(e)
            : void 0;
        },
        function (e) {
          return e
            ? void 0
            : function () {
                return G;
              };
        },
      ];
      var _ = [
        "initMapStateToProps",
        "initMapDispatchToProps",
        "initMergeProps",
      ];
      function F(e, r, n, t) {
        return function (i, o) {
          return n(e(i, o), r(t, o), o);
        };
      }
      function k(e, r, n, t, i) {
        var o,
          a,
          l,
          u,
          c,
          s = i.areStatesEqual,
          d = i.areOwnPropsEqual,
          p = i.areStatePropsEqual,
          f = !1;
        function g(i, f) {
          var g,
            v,
            m = !d(f, a),
            b = !s(i, o, f, a);
          return (
            (o = i),
            (a = f),
            m && b
              ? ((l = e(o, a)),
                r.dependsOnOwnProps && (u = r(t, a)),
                (c = n(l, u, a)))
              : m
                ? (e.dependsOnOwnProps && (l = e(o, a)),
                  r.dependsOnOwnProps && (u = r(t, a)),
                  (c = n(l, u, a)))
                : b
                  ? ((g = e(o, a)),
                    (v = !p(g, l)),
                    (l = g),
                    v && (c = n(l, u, a)),
                    c)
                  : c
          );
        }
        return function (i, s) {
          return f
            ? g(i, s)
            : ((l = e((o = i), (a = s))),
              (u = r(t, a)),
              (c = n(l, u, a)),
              (f = !0),
              c);
        };
      }
      function W(e, r) {
        var n = r.initMapStateToProps,
          t = r.initMapDispatchToProps,
          i = r.initMergeProps,
          o = (0, g.A)(r, _),
          a = n(e, o),
          l = t(e, o),
          u = i(e, o);
        return (o.pure ? k : F)(a, l, u, e, o);
      }
      var U = [
        "pure",
        "areStatesEqual",
        "areOwnPropsEqual",
        "areStatePropsEqual",
        "areMergedPropsEqual",
      ];
      function H(e, r, n) {
        for (var t = r.length - 1; t >= 0; t--) {
          var i = r[t](e);
          if (i) return i;
        }
        return function (r, t) {
          throw new Error(
            "Invalid value of type " +
              typeof e +
              " for " +
              n +
              " argument when connecting component " +
              t.wrappedComponentName +
              ".",
          );
        };
      }
      function j(e, r) {
        return e === r;
      }
      function q(e) {
        var r = void 0 === e ? {} : e,
          n = r.connectHOC,
          t = void 0 === n ? S : n,
          i = r.mapStateToPropsFactories,
          a = void 0 === i ? L : i,
          l = r.mapDispatchToPropsFactories,
          u = void 0 === l ? T : l,
          c = r.mergePropsFactories,
          s = void 0 === c ? M : c,
          d = r.selectorFactory,
          p = void 0 === d ? W : d;
        return function (e, r, n, i) {
          void 0 === i && (i = {});
          var l = i,
            c = l.pure,
            d = void 0 === c || c,
            f = l.areStatesEqual,
            v = void 0 === f ? j : f,
            m = l.areOwnPropsEqual,
            b = void 0 === m ? N : m,
            h = l.areStatePropsEqual,
            y = void 0 === h ? N : h,
            I = l.areMergedPropsEqual,
            D = void 0 === I ? N : I,
            x = (0, g.A)(l, U),
            E = H(e, a, "mapStateToProps"),
            w = H(r, u, "mapDispatchToProps"),
            A = H(n, s, "mergeProps");
          return t(
            p,
            (0, o.A)(
              {
                methodName: "connect",
                getDisplayName: function (e) {
                  return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: E,
                initMapDispatchToProps: w,
                initMergeProps: A,
                pure: d,
                areStatesEqual: v,
                areOwnPropsEqual: b,
                areStatePropsEqual: y,
                areMergedPropsEqual: D,
              },
              x,
            ),
          );
        };
      }
      const V = q();
      var K,
        z = n(72739);
      (K = z.unstable_batchedUpdates), (u = K);
      var Y = n(46311),
        J = n(48046),
        X =
          Number.isNaN ||
          function (e) {
            return "number" == typeof e && e != e;
          };
      function $(e, r) {
        return e === r || !(!X(e) || !X(r));
      }
      function Q(e, r) {
        if (e.length !== r.length) return !1;
        for (var n = 0; n < e.length; n++) if (!$(e[n], r[n])) return !1;
        return !0;
      }
      const Z = function (e, r) {
        var n;
        void 0 === r && (r = Q);
        var t,
          i = [],
          o = !1;
        return function () {
          for (var a = [], l = 0; l < arguments.length; l++)
            a[l] = arguments[l];
          return (
            (o && n === this && r(a, i)) ||
              ((t = e.apply(this, a)), (o = !0), (n = this), (i = a)),
            t
          );
        };
      };
      var ee = n(18651);
      function re(e, r) {}
      re.bind(null, "warn"), re.bind(null, "error");
      function ne() {}
      function te(e, r, n) {
        var t = r.map(function (r) {
          var t = (function (e, r) {
            return (0, o.A)({}, e, {}, r);
          })(n, r.options);
          return (
            e.addEventListener(r.eventName, r.fn, t),
            function () {
              e.removeEventListener(r.eventName, r.fn, t);
            }
          );
        });
        return function () {
          t.forEach(function (e) {
            e();
          });
        };
      }
      var ie = !0,
        oe = "Invariant failed";
      function ae(e) {
        this.message = e;
      }
      function le(e, r) {
        if (!e) throw new ae(ie ? oe : oe + ": " + (r || ""));
      }
      ae.prototype.toString = function () {
        return this.message;
      };
      var ue = (function (e) {
          function r() {
            for (
              var r, n = arguments.length, t = new Array(n), i = 0;
              i < n;
              i++
            )
              t[i] = arguments[i];
            return (
              ((r = e.call.apply(e, [this].concat(t)) || this).callbacks =
                null),
              (r.unbind = ne),
              (r.onWindowError = function (e) {
                var n = r.getCallbacks();
                n.isDragging() && n.tryAbort(),
                  e.error instanceof ae && e.preventDefault();
              }),
              (r.getCallbacks = function () {
                if (!r.callbacks)
                  throw new Error(
                    "Unable to find AppCallbacks in <ErrorBoundary/>",
                  );
                return r.callbacks;
              }),
              (r.setCallbacks = function (e) {
                r.callbacks = e;
              }),
              r
            );
          }
          (0, i.A)(r, e);
          var n = r.prototype;
          return (
            (n.componentDidMount = function () {
              this.unbind = te(window, [
                { eventName: "error", fn: this.onWindowError },
              ]);
            }),
            (n.componentDidCatch = function (e) {
              if (!(e instanceof ae)) throw e;
              this.setState({});
            }),
            (n.componentWillUnmount = function () {
              this.unbind();
            }),
            (n.render = function () {
              return this.props.children(this.setCallbacks);
            }),
            r
          );
        })(t.Component),
        ce = function (e) {
          return e + 1;
        },
        se = function (e, r) {
          var n = e.droppableId === r.droppableId,
            t = ce(e.index),
            i = ce(r.index);
          return n
            ? "\n      You have moved the item from position " +
                t +
                "\n      to position " +
                i +
                "\n    "
            : "\n    You have moved the item from position " +
                t +
                "\n    in list " +
                e.droppableId +
                "\n    to list " +
                r.droppableId +
                "\n    in position " +
                i +
                "\n  ";
        },
        de = function (e, r, n) {
          return r.droppableId === n.droppableId
            ? "\n      The item " +
                e +
                "\n      has been combined with " +
                n.draggableId
            : "\n      The item " +
                e +
                "\n      in list " +
                r.droppableId +
                "\n      has been combined with " +
                n.draggableId +
                "\n      in list " +
                n.droppableId +
                "\n    ";
        },
        pe = function (e) {
          return (
            "\n  The item has returned to its starting position\n  of " +
            ce(e.index) +
            "\n"
          );
        },
        fe = {
          dragHandleUsageInstructions:
            "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
          onDragStart: function (e) {
            return (
              "\n  You have lifted an item in position " +
              ce(e.source.index) +
              "\n"
            );
          },
          onDragUpdate: function (e) {
            var r = e.destination;
            if (r) return se(e.source, r);
            var n = e.combine;
            return n
              ? de(e.draggableId, e.source, n)
              : "You are over an area that cannot be dropped on";
          },
          onDragEnd: function (e) {
            if ("CANCEL" === e.reason)
              return (
                "\n      Movement cancelled.\n      " + pe(e.source) + "\n    "
              );
            var r = e.destination,
              n = e.combine;
            return r
              ? "\n      You have dropped the item.\n      " +
                  se(e.source, r) +
                  "\n    "
              : n
                ? "\n      You have dropped the item.\n      " +
                  de(e.draggableId, e.source, n) +
                  "\n    "
                : "\n    The item has been dropped while not over a drop area.\n    " +
                  pe(e.source) +
                  "\n  ";
          },
        },
        ge = { x: 0, y: 0 },
        ve = function (e, r) {
          return { x: e.x + r.x, y: e.y + r.y };
        },
        me = function (e, r) {
          return { x: e.x - r.x, y: e.y - r.y };
        },
        be = function (e, r) {
          return e.x === r.x && e.y === r.y;
        },
        he = function (e) {
          return { x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 };
        },
        ye = function (e, r, n) {
          var t;
          return (
            void 0 === n && (n = 0),
            ((t = {})[e] = r),
            (t["x" === e ? "y" : "x"] = n),
            t
          );
        },
        Ie = function (e, r) {
          return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
        },
        De = function (e, r) {
          return Math.min.apply(
            Math,
            r.map(function (r) {
              return Ie(e, r);
            }),
          );
        },
        xe = function (e) {
          return function (r) {
            return { x: e(r.x), y: e(r.y) };
          };
        },
        Ee = function (e, r) {
          return {
            top: e.top + r.y,
            left: e.left + r.x,
            bottom: e.bottom + r.y,
            right: e.right + r.x,
          };
        },
        we = function (e) {
          return [
            { x: e.left, y: e.top },
            { x: e.right, y: e.top },
            { x: e.left, y: e.bottom },
            { x: e.right, y: e.bottom },
          ];
        },
        Ae = function (e, r) {
          return r && r.shouldClipSubject
            ? (function (e, r) {
                var n = (0, J.l)({
                  top: Math.max(r.top, e.top),
                  right: Math.min(r.right, e.right),
                  bottom: Math.min(r.bottom, e.bottom),
                  left: Math.max(r.left, e.left),
                });
                return n.width <= 0 || n.height <= 0 ? null : n;
              })(r.pageMarginBox, e)
            : (0, J.l)(e);
        },
        Ce = function (e) {
          var r = e.page,
            n = e.withPlaceholder,
            t = e.axis,
            i = e.frame,
            a = (function (e, r) {
              return r ? Ee(e, r.scroll.diff.displacement) : e;
            })(r.marginBox, i),
            l = (function (e, r, n) {
              var t;
              return n && n.increasedBy
                ? (0, o.A)(
                    {},
                    e,
                    (((t = {})[r.end] = e[r.end] + n.increasedBy[r.line]), t),
                  )
                : e;
            })(a, t, n);
          return { page: r, withPlaceholder: n, active: Ae(l, i) };
        },
        Se = function (e, r) {
          e.frame || le(!1);
          var n = e.frame,
            t = me(r, n.scroll.initial),
            i = he(t),
            a = (0, o.A)({}, n, {
              scroll: {
                initial: n.scroll.initial,
                current: r,
                diff: { value: t, displacement: i },
                max: n.scroll.max,
              },
            }),
            l = Ce({
              page: e.subject.page,
              withPlaceholder: e.subject.withPlaceholder,
              axis: e.axis,
              frame: a,
            });
          return (0, o.A)({}, e, { frame: a, subject: l });
        };
      function Pe(e) {
        return Object.values
          ? Object.values(e)
          : Object.keys(e).map(function (r) {
              return e[r];
            });
      }
      function Ne(e, r) {
        if (e.findIndex) return e.findIndex(r);
        for (var n = 0; n < e.length; n++) if (r(e[n])) return n;
        return -1;
      }
      function Re(e, r) {
        if (e.find) return e.find(r);
        var n = Ne(e, r);
        return -1 !== n ? e[n] : void 0;
      }
      var Be = Z(function (e) {
          return e.reduce(function (e, r) {
            return (e[r.descriptor.id] = r), e;
          }, {});
        }),
        Oe = Z(function (e) {
          return e.reduce(function (e, r) {
            return (e[r.descriptor.id] = r), e;
          }, {});
        }),
        Te = Z(function (e) {
          return Pe(e);
        }),
        Le = Z(function (e) {
          return Pe(e);
        }),
        Ge = Z(function (e, r) {
          var n = Le(r)
            .filter(function (r) {
              return e === r.descriptor.droppableId;
            })
            .sort(function (e, r) {
              return e.descriptor.index - r.descriptor.index;
            });
          return n;
        });
      function Me(e) {
        return e.at && "REORDER" === e.at.type ? e.at.destination : null;
      }
      function _e(e) {
        return e.at && "COMBINE" === e.at.type ? e.at.combine : null;
      }
      var Fe = Z(function (e, r) {
          return r.filter(function (r) {
            return r.descriptor.id !== e.descriptor.id;
          });
        }),
        ke = function (e, r) {
          return e.descriptor.droppableId === r.descriptor.id;
        },
        We = { point: ge, value: 0 },
        Ue = { invisible: {}, visible: {}, all: [] },
        He = { displaced: Ue, displacedBy: We, at: null },
        je = function (e, r) {
          return function (n) {
            return e <= n && n <= r;
          };
        },
        qe = function (e) {
          var r = je(e.top, e.bottom),
            n = je(e.left, e.right);
          return function (t) {
            if (r(t.top) && r(t.bottom) && n(t.left) && n(t.right)) return !0;
            var i = r(t.top) || r(t.bottom),
              o = n(t.left) || n(t.right);
            if (i && o) return !0;
            var a = t.top < e.top && t.bottom > e.bottom,
              l = t.left < e.left && t.right > e.right;
            return !(!a || !l) || (a && o) || (l && i);
          };
        },
        Ve = function (e) {
          var r = je(e.top, e.bottom),
            n = je(e.left, e.right);
          return function (e) {
            return r(e.top) && r(e.bottom) && n(e.left) && n(e.right);
          };
        },
        Ke = {
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
        ze = {
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
        Ye = function (e) {
          var r = e.target,
            n = e.destination,
            t = e.viewport,
            i = e.withDroppableDisplacement,
            o = e.isVisibleThroughFrameFn,
            a = i
              ? (function (e, r) {
                  var n = r.frame ? r.frame.scroll.diff.displacement : ge;
                  return Ee(e, n);
                })(r, n)
              : r;
          return (
            (function (e, r, n) {
              return !!r.subject.active && n(r.subject.active)(e);
            })(a, n, o) &&
            (function (e, r, n) {
              return n(r)(e);
            })(a, t, o)
          );
        },
        Je = function (e) {
          return Ye((0, o.A)({}, e, { isVisibleThroughFrameFn: qe }));
        },
        Xe = function (e) {
          return Ye((0, o.A)({}, e, { isVisibleThroughFrameFn: Ve }));
        };
      function $e(e) {
        var r = e.afterDragging,
          n = e.destination,
          t = e.displacedBy,
          i = e.viewport,
          o = e.forceShouldAnimate,
          a = e.last;
        return r.reduce(
          function (e, r) {
            var l = (function (e, r) {
                var n = e.page.marginBox,
                  t = { top: r.point.y, right: 0, bottom: 0, left: r.point.x };
                return (0, J.l)((0, J.fT)(n, t));
              })(r, t),
              u = r.descriptor.id;
            if (
              (e.all.push(u),
              !Je({
                target: l,
                destination: n,
                viewport: i,
                withDroppableDisplacement: !0,
              }))
            )
              return (e.invisible[r.descriptor.id] = !0), e;
            var c = (function (e, r, n) {
                if ("boolean" == typeof n) return n;
                if (!r) return !0;
                var t = r.invisible,
                  i = r.visible;
                if (t[e]) return !1;
                var o = i[e];
                return !o || o.shouldAnimate;
              })(u, a, o),
              s = { draggableId: u, shouldAnimate: c };
            return (e.visible[u] = s), e;
          },
          { all: [], visible: {}, invisible: {} },
        );
      }
      function Qe(e) {
        var r = e.insideDestination,
          n = e.inHomeList,
          t = e.displacedBy,
          i = e.destination,
          o = (function (e, r) {
            if (!e.length) return 0;
            var n = e[e.length - 1].descriptor.index;
            return r.inHomeList ? n : n + 1;
          })(r, { inHomeList: n });
        return {
          displaced: Ue,
          displacedBy: t,
          at: {
            type: "REORDER",
            destination: { droppableId: i.descriptor.id, index: o },
          },
        };
      }
      function Ze(e) {
        var r = e.draggable,
          n = e.insideDestination,
          t = e.destination,
          i = e.viewport,
          o = e.displacedBy,
          a = e.last,
          l = e.index,
          u = e.forceShouldAnimate,
          c = ke(r, t);
        if (null == l)
          return Qe({
            insideDestination: n,
            inHomeList: c,
            displacedBy: o,
            destination: t,
          });
        var s = Re(n, function (e) {
          return e.descriptor.index === l;
        });
        if (!s)
          return Qe({
            insideDestination: n,
            inHomeList: c,
            displacedBy: o,
            destination: t,
          });
        var d = Fe(r, n),
          p = n.indexOf(s);
        return {
          displaced: $e({
            afterDragging: d.slice(p),
            destination: t,
            displacedBy: o,
            last: a,
            viewport: i.frame,
            forceShouldAnimate: u,
          }),
          displacedBy: o,
          at: {
            type: "REORDER",
            destination: { droppableId: t.descriptor.id, index: l },
          },
        };
      }
      function er(e, r) {
        return Boolean(r.effected[e]);
      }
      var rr = function (e) {
          var r = e.isMovingForward,
            n = e.isInHomeList,
            t = e.draggable,
            i = e.draggables,
            o = e.destination,
            a = e.insideDestination,
            l = e.previousImpact,
            u = e.viewport,
            c = e.afterCritical,
            s = l.at;
          if ((s || le(!1), "REORDER" === s.type)) {
            var d = (function (e) {
              var r = e.isMovingForward,
                n = e.isInHomeList,
                t = e.insideDestination,
                i = e.location;
              if (!t.length) return null;
              var o = i.index,
                a = r ? o + 1 : o - 1,
                l = t[0].descriptor.index,
                u = t[t.length - 1].descriptor.index;
              return a < l || a > (n ? u : u + 1) ? null : a;
            })({
              isMovingForward: r,
              isInHomeList: n,
              location: s.destination,
              insideDestination: a,
            });
            return null == d
              ? null
              : Ze({
                  draggable: t,
                  insideDestination: a,
                  destination: o,
                  viewport: u,
                  last: l.displaced,
                  displacedBy: l.displacedBy,
                  index: d,
                });
          }
          var p = (function (e) {
            var r = e.isMovingForward,
              n = e.destination,
              t = e.draggables,
              i = e.combine,
              o = e.afterCritical;
            if (!n.isCombineEnabled) return null;
            var a = i.draggableId,
              l = t[a].descriptor.index;
            return er(a, o) ? (r ? l : l - 1) : r ? l + 1 : l;
          })({
            isMovingForward: r,
            destination: o,
            displaced: l.displaced,
            draggables: i,
            combine: s.combine,
            afterCritical: c,
          });
          return null == p
            ? null
            : Ze({
                draggable: t,
                insideDestination: a,
                destination: o,
                viewport: u,
                last: l.displaced,
                displacedBy: l.displacedBy,
                index: p,
              });
        },
        nr = function (e) {
          var r = e.afterCritical,
            n = e.impact,
            t = e.draggables,
            i = _e(n);
          i || le(!1);
          var o = i.draggableId,
            a = t[o].page.borderBox.center,
            l = (function (e) {
              var r = e.displaced,
                n = e.afterCritical,
                t = e.combineWith,
                i = e.displacedBy,
                o = Boolean(r.visible[t] || r.invisible[t]);
              return er(t, n) ? (o ? ge : he(i.point)) : o ? i.point : ge;
            })({
              displaced: n.displaced,
              afterCritical: r,
              combineWith: o,
              displacedBy: n.displacedBy,
            });
          return ve(a, l);
        },
        tr = function (e, r) {
          return r.margin[e.start] + r.borderBox[e.size] / 2;
        },
        ir = function (e, r, n) {
          return (
            r[e.crossAxisStart] +
            n.margin[e.crossAxisStart] +
            n.borderBox[e.crossAxisSize] / 2
          );
        },
        or = function (e) {
          var r = e.axis,
            n = e.moveRelativeTo,
            t = e.isMoving;
          return ye(
            r.line,
            n.marginBox[r.end] + tr(r, t),
            ir(r, n.marginBox, t),
          );
        },
        ar = function (e) {
          var r = e.axis,
            n = e.moveRelativeTo,
            t = e.isMoving;
          return ye(
            r.line,
            n.marginBox[r.start] -
              (function (e, r) {
                return r.margin[e.end] + r.borderBox[e.size] / 2;
              })(r, t),
            ir(r, n.marginBox, t),
          );
        },
        lr = function (e) {
          var r = e.impact,
            n = e.draggable,
            t = e.draggables,
            i = e.droppable,
            o = e.afterCritical,
            a = Ge(i.descriptor.id, t),
            l = n.page,
            u = i.axis;
          if (!a.length)
            return (function (e) {
              var r = e.axis,
                n = e.moveInto,
                t = e.isMoving;
              return ye(
                r.line,
                n.contentBox[r.start] + tr(r, t),
                ir(r, n.contentBox, t),
              );
            })({ axis: u, moveInto: i.page, isMoving: l });
          var c = r.displaced,
            s = r.displacedBy,
            d = c.all[0];
          if (d) {
            var p = t[d];
            if (er(d, o))
              return ar({ axis: u, moveRelativeTo: p.page, isMoving: l });
            var f = (0, J.cY)(p.page, s.point);
            return ar({ axis: u, moveRelativeTo: f, isMoving: l });
          }
          var g = a[a.length - 1];
          if (g.descriptor.id === n.descriptor.id) return l.borderBox.center;
          if (er(g.descriptor.id, o)) {
            var v = (0, J.cY)(g.page, he(o.displacedBy.point));
            return or({ axis: u, moveRelativeTo: v, isMoving: l });
          }
          return or({ axis: u, moveRelativeTo: g.page, isMoving: l });
        },
        ur = function (e, r) {
          var n = e.frame;
          return n ? ve(r, n.scroll.diff.displacement) : r;
        },
        cr = function (e) {
          var r = (function (e) {
              var r = e.impact,
                n = e.draggable,
                t = e.droppable,
                i = e.draggables,
                o = e.afterCritical,
                a = n.page.borderBox.center,
                l = r.at;
              return t && l
                ? "REORDER" === l.type
                  ? lr({
                      impact: r,
                      draggable: n,
                      draggables: i,
                      droppable: t,
                      afterCritical: o,
                    })
                  : nr({ impact: r, draggables: i, afterCritical: o })
                : a;
            })(e),
            n = e.droppable;
          return n ? ur(n, r) : r;
        },
        sr = function (e, r) {
          var n = me(r, e.scroll.initial),
            t = he(n);
          return {
            frame: (0, J.l)({
              top: r.y,
              bottom: r.y + e.frame.height,
              left: r.x,
              right: r.x + e.frame.width,
            }),
            scroll: {
              initial: e.scroll.initial,
              max: e.scroll.max,
              current: r,
              diff: { value: n, displacement: t },
            },
          };
        };
      function dr(e, r) {
        return e.map(function (e) {
          return r[e];
        });
      }
      var pr = function (e) {
          var r = e.pageBorderBoxCenter,
            n = e.draggable,
            t = (function (e, r) {
              return ve(e.scroll.diff.displacement, r);
            })(e.viewport, r),
            i = me(t, n.page.borderBox.center);
          return ve(n.client.borderBox.center, i);
        },
        fr = function (e) {
          var r = e.draggable,
            n = e.destination,
            t = e.newPageBorderBoxCenter,
            i = e.viewport,
            a = e.withDroppableDisplacement,
            l = e.onlyOnMainAxis,
            u = void 0 !== l && l,
            c = me(t, r.page.borderBox.center),
            s = {
              target: Ee(r.page.borderBox, c),
              destination: n,
              withDroppableDisplacement: a,
              viewport: i,
            };
          return u
            ? (function (e) {
                return Ye(
                  (0, o.A)({}, e, {
                    isVisibleThroughFrameFn:
                      ((r = e.destination.axis),
                      function (e) {
                        var n = je(e.top, e.bottom),
                          t = je(e.left, e.right);
                        return function (e) {
                          return r === Ke
                            ? n(e.top) && n(e.bottom)
                            : t(e.left) && t(e.right);
                        };
                      }),
                  }),
                );
                var r;
              })(s)
            : Xe(s);
        },
        gr = function (e) {
          var r = e.isMovingForward,
            n = e.draggable,
            t = e.destination,
            i = e.draggables,
            a = e.previousImpact,
            l = e.viewport,
            u = e.previousPageBorderBoxCenter,
            c = e.previousClientSelection,
            s = e.afterCritical;
          if (!t.isEnabled) return null;
          var d = Ge(t.descriptor.id, i),
            p = ke(n, t),
            f =
              (function (e) {
                var r = e.isMovingForward,
                  n = e.draggable,
                  t = e.destination,
                  i = e.insideDestination,
                  a = e.previousImpact;
                if (!t.isCombineEnabled) return null;
                if (!Me(a)) return null;
                function l(e) {
                  var r = {
                    type: "COMBINE",
                    combine: { draggableId: e, droppableId: t.descriptor.id },
                  };
                  return (0, o.A)({}, a, { at: r });
                }
                var u = a.displaced.all,
                  c = u.length ? u[0] : null;
                if (r) return c ? l(c) : null;
                var s = Fe(n, i);
                if (!c)
                  return s.length ? l(s[s.length - 1].descriptor.id) : null;
                var d = Ne(s, function (e) {
                  return e.descriptor.id === c;
                });
                -1 === d && le(!1);
                var p = d - 1;
                return p < 0 ? null : l(s[p].descriptor.id);
              })({
                isMovingForward: r,
                draggable: n,
                destination: t,
                insideDestination: d,
                previousImpact: a,
              }) ||
              rr({
                isMovingForward: r,
                isInHomeList: p,
                draggable: n,
                draggables: i,
                destination: t,
                insideDestination: d,
                previousImpact: a,
                viewport: l,
                afterCritical: s,
              });
          if (!f) return null;
          var g = cr({
            impact: f,
            draggable: n,
            droppable: t,
            draggables: i,
            afterCritical: s,
          });
          if (
            fr({
              draggable: n,
              destination: t,
              newPageBorderBoxCenter: g,
              viewport: l.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          )
            return {
              clientSelection: pr({
                pageBorderBoxCenter: g,
                draggable: n,
                viewport: l,
              }),
              impact: f,
              scrollJumpRequest: null,
            };
          var v = me(g, u),
            m = (function (e) {
              var r = e.impact,
                n = e.viewport,
                t = e.destination,
                i = e.draggables,
                a = e.maxScrollChange,
                l = sr(n, ve(n.scroll.current, a)),
                u = t.frame ? Se(t, ve(t.frame.scroll.current, a)) : t,
                c = r.displaced,
                s = $e({
                  afterDragging: dr(c.all, i),
                  destination: t,
                  displacedBy: r.displacedBy,
                  viewport: l.frame,
                  last: c,
                  forceShouldAnimate: !1,
                }),
                d = $e({
                  afterDragging: dr(c.all, i),
                  destination: u,
                  displacedBy: r.displacedBy,
                  viewport: n.frame,
                  last: c,
                  forceShouldAnimate: !1,
                }),
                p = {},
                f = {},
                g = [c, s, d];
              return (
                c.all.forEach(function (e) {
                  var r = (function (e, r) {
                    for (var n = 0; n < r.length; n++) {
                      var t = r[n].visible[e];
                      if (t) return t;
                    }
                    return null;
                  })(e, g);
                  r ? (f[e] = r) : (p[e] = !0);
                }),
                (0, o.A)({}, r, {
                  displaced: { all: c.all, invisible: p, visible: f },
                })
              );
            })({
              impact: f,
              viewport: l,
              destination: t,
              draggables: i,
              maxScrollChange: v,
            });
          return { clientSelection: c, impact: m, scrollJumpRequest: v };
        },
        vr = function (e) {
          var r = e.subject.active;
          return r || le(!1), r;
        },
        mr = function (e, r) {
          var n = e.page.borderBox.center;
          return er(e.descriptor.id, r) ? me(n, r.displacedBy.point) : n;
        },
        br = function (e, r) {
          var n = e.page.borderBox;
          return er(e.descriptor.id, r) ? Ee(n, he(r.displacedBy.point)) : n;
        },
        hr = Z(function (e, r) {
          var n = r[e.line];
          return { value: n, point: ye(e.line, n) };
        }),
        yr = function (e, r) {
          return (0, o.A)({}, e, {
            scroll: (0, o.A)({}, e.scroll, { max: r }),
          });
        },
        Ir = function (e, r, n) {
          var t = e.frame;
          ke(r, e) && le(!1), e.subject.withPlaceholder && le(!1);
          var i = hr(e.axis, r.displaceBy).point,
            a = (function (e, r, n) {
              var t = e.axis;
              if ("virtual" === e.descriptor.mode) return ye(t.line, r[t.line]);
              var i = e.subject.page.contentBox[t.size],
                o =
                  Ge(e.descriptor.id, n).reduce(function (e, r) {
                    return e + r.client.marginBox[t.size];
                  }, 0) +
                  r[t.line] -
                  i;
              return o <= 0 ? null : ye(t.line, o);
            })(e, i, n),
            l = {
              placeholderSize: i,
              increasedBy: a,
              oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null,
            };
          if (!t) {
            var u = Ce({
              page: e.subject.page,
              withPlaceholder: l,
              axis: e.axis,
              frame: e.frame,
            });
            return (0, o.A)({}, e, { subject: u });
          }
          var c = a ? ve(t.scroll.max, a) : t.scroll.max,
            s = yr(t, c),
            d = Ce({
              page: e.subject.page,
              withPlaceholder: l,
              axis: e.axis,
              frame: s,
            });
          return (0, o.A)({}, e, { subject: d, frame: s });
        },
        Dr = function (e) {
          var r = e.isMovingForward,
            n = e.previousPageBorderBoxCenter,
            t = e.draggable,
            i = e.isOver,
            o = e.draggables,
            a = e.droppables,
            l = e.viewport,
            u = e.afterCritical,
            c = (function (e) {
              var r = e.isMovingForward,
                n = e.pageBorderBoxCenter,
                t = e.source,
                i = e.droppables,
                o = e.viewport,
                a = t.subject.active;
              if (!a) return null;
              var l = t.axis,
                u = je(a[l.start], a[l.end]),
                c = Te(i)
                  .filter(function (e) {
                    return e !== t;
                  })
                  .filter(function (e) {
                    return e.isEnabled;
                  })
                  .filter(function (e) {
                    return Boolean(e.subject.active);
                  })
                  .filter(function (e) {
                    return qe(o.frame)(vr(e));
                  })
                  .filter(function (e) {
                    var n = vr(e);
                    return r
                      ? a[l.crossAxisEnd] < n[l.crossAxisEnd]
                      : n[l.crossAxisStart] < a[l.crossAxisStart];
                  })
                  .filter(function (e) {
                    var r = vr(e),
                      n = je(r[l.start], r[l.end]);
                    return (
                      u(r[l.start]) ||
                      u(r[l.end]) ||
                      n(a[l.start]) ||
                      n(a[l.end])
                    );
                  })
                  .sort(function (e, n) {
                    var t = vr(e)[l.crossAxisStart],
                      i = vr(n)[l.crossAxisStart];
                    return r ? t - i : i - t;
                  })
                  .filter(function (e, r, n) {
                    return (
                      vr(e)[l.crossAxisStart] === vr(n[0])[l.crossAxisStart]
                    );
                  });
              if (!c.length) return null;
              if (1 === c.length) return c[0];
              var s = c.filter(function (e) {
                return je(vr(e)[l.start], vr(e)[l.end])(n[l.line]);
              });
              return 1 === s.length
                ? s[0]
                : s.length > 1
                  ? s.sort(function (e, r) {
                      return vr(e)[l.start] - vr(r)[l.start];
                    })[0]
                  : c.sort(function (e, r) {
                      var t = De(n, we(vr(e))),
                        i = De(n, we(vr(r)));
                      return t !== i ? t - i : vr(e)[l.start] - vr(r)[l.start];
                    })[0];
            })({
              isMovingForward: r,
              pageBorderBoxCenter: n,
              source: i,
              droppables: a,
              viewport: l,
            });
          if (!c) return null;
          var s = Ge(c.descriptor.id, o),
            d = (function (e) {
              var r = e.pageBorderBoxCenter,
                n = e.viewport,
                t = e.destination,
                i = e.insideDestination,
                o = e.afterCritical,
                a = i
                  .filter(function (e) {
                    return Xe({
                      target: br(e, o),
                      destination: t,
                      viewport: n.frame,
                      withDroppableDisplacement: !0,
                    });
                  })
                  .sort(function (e, n) {
                    var i = Ie(r, ur(t, mr(e, o))),
                      a = Ie(r, ur(t, mr(n, o)));
                    return i < a
                      ? -1
                      : a < i
                        ? 1
                        : e.descriptor.index - n.descriptor.index;
                  });
              return a[0] || null;
            })({
              pageBorderBoxCenter: n,
              viewport: l,
              destination: c,
              insideDestination: s,
              afterCritical: u,
            }),
            p = (function (e) {
              var r = e.previousPageBorderBoxCenter,
                n = e.moveRelativeTo,
                t = e.insideDestination,
                i = e.draggable,
                o = e.draggables,
                a = e.destination,
                l = e.viewport,
                u = e.afterCritical;
              if (!n) {
                if (t.length) return null;
                var c = {
                    displaced: Ue,
                    displacedBy: We,
                    at: {
                      type: "REORDER",
                      destination: { droppableId: a.descriptor.id, index: 0 },
                    },
                  },
                  s = cr({
                    impact: c,
                    draggable: i,
                    droppable: a,
                    draggables: o,
                    afterCritical: u,
                  }),
                  d = ke(i, a) ? a : Ir(a, i, o);
                return fr({
                  draggable: i,
                  destination: d,
                  newPageBorderBoxCenter: s,
                  viewport: l.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                })
                  ? c
                  : null;
              }
              var p,
                f = Boolean(
                  r[a.axis.line] <= n.page.borderBox.center[a.axis.line],
                ),
                g =
                  ((p = n.descriptor.index),
                  n.descriptor.id === i.descriptor.id || f ? p : p + 1),
                v = hr(a.axis, i.displaceBy);
              return Ze({
                draggable: i,
                insideDestination: t,
                destination: a,
                viewport: l,
                displacedBy: v,
                last: Ue,
                index: g,
              });
            })({
              previousPageBorderBoxCenter: n,
              destination: c,
              draggable: t,
              draggables: o,
              moveRelativeTo: d,
              insideDestination: s,
              viewport: l,
              afterCritical: u,
            });
          if (!p) return null;
          var f = cr({
            impact: p,
            draggable: t,
            droppable: c,
            draggables: o,
            afterCritical: u,
          });
          return {
            clientSelection: pr({
              pageBorderBoxCenter: f,
              draggable: t,
              viewport: l,
            }),
            impact: p,
            scrollJumpRequest: null,
          };
        },
        xr = function (e) {
          var r = e.at;
          return r
            ? "REORDER" === r.type
              ? r.destination.droppableId
              : r.combine.droppableId
            : null;
        },
        Er = function (e) {
          var r = e.state,
            n = e.type,
            t = (function (e, r) {
              var n = xr(e);
              return n ? r[n] : null;
            })(r.impact, r.dimensions.droppables),
            i = Boolean(t),
            o = r.dimensions.droppables[r.critical.droppable.id],
            a = t || o,
            l = a.axis.direction,
            u =
              ("vertical" === l && ("MOVE_UP" === n || "MOVE_DOWN" === n)) ||
              ("horizontal" === l && ("MOVE_LEFT" === n || "MOVE_RIGHT" === n));
          if (u && !i) return null;
          var c = "MOVE_DOWN" === n || "MOVE_RIGHT" === n,
            s = r.dimensions.draggables[r.critical.draggable.id],
            d = r.current.page.borderBoxCenter,
            p = r.dimensions,
            f = p.draggables,
            g = p.droppables;
          return u
            ? gr({
                isMovingForward: c,
                previousPageBorderBoxCenter: d,
                draggable: s,
                destination: a,
                draggables: f,
                viewport: r.viewport,
                previousClientSelection: r.current.client.selection,
                previousImpact: r.impact,
                afterCritical: r.afterCritical,
              })
            : Dr({
                isMovingForward: c,
                previousPageBorderBoxCenter: d,
                draggable: s,
                isOver: a,
                draggables: f,
                droppables: g,
                viewport: r.viewport,
                afterCritical: r.afterCritical,
              });
        };
      function wr(e) {
        return "DRAGGING" === e.phase || "COLLECTING" === e.phase;
      }
      function Ar(e) {
        var r = je(e.top, e.bottom),
          n = je(e.left, e.right);
        return function (e) {
          return r(e.y) && n(e.x);
        };
      }
      function Cr(e) {
        var r = e.pageBorderBox,
          n = e.draggable,
          t = e.droppables,
          i = Te(t).filter(function (e) {
            if (!e.isEnabled) return !1;
            var n,
              t,
              i = e.subject.active;
            if (!i) return !1;
            if (
              ((t = i),
              !(
                (n = r).left < t.right &&
                n.right > t.left &&
                n.top < t.bottom &&
                n.bottom > t.top
              ))
            )
              return !1;
            if (Ar(i)(r.center)) return !0;
            var o = e.axis,
              a = i.center[o.crossAxisLine],
              l = r[o.crossAxisStart],
              u = r[o.crossAxisEnd],
              c = je(i[o.crossAxisStart], i[o.crossAxisEnd]),
              s = c(l),
              d = c(u);
            return (!s && !d) || (s ? l < a : u > a);
          });
        return i.length
          ? 1 === i.length
            ? i[0].descriptor.id
            : (function (e) {
                var r = e.pageBorderBox,
                  n = e.draggable,
                  t = e.candidates,
                  i = n.page.borderBox.center,
                  o = t
                    .map(function (e) {
                      var n = e.axis,
                        t = ye(
                          e.axis.line,
                          r.center[n.line],
                          e.page.borderBox.center[n.crossAxisLine],
                        );
                      return { id: e.descriptor.id, distance: Ie(i, t) };
                    })
                    .sort(function (e, r) {
                      return r.distance - e.distance;
                    });
                return o[0] ? o[0].id : null;
              })({ pageBorderBox: r, draggable: n, candidates: i })
          : null;
      }
      var Sr = function (e, r) {
        return (0, J.l)(Ee(e, r));
      };
      function Pr(e) {
        var r = e.displaced,
          n = e.id;
        return Boolean(r.visible[n] || r.invisible[n]);
      }
      var Nr = function (e) {
          var r = e.pageOffset,
            n = e.draggable,
            t = e.draggables,
            i = e.droppables,
            o = e.previousImpact,
            a = e.viewport,
            l = e.afterCritical,
            u = Sr(n.page.borderBox, r),
            c = Cr({ pageBorderBox: u, draggable: n, droppables: i });
          if (!c) return He;
          var s = i[c],
            d = Ge(s.descriptor.id, t),
            p = (function (e, r) {
              var n = e.frame;
              return n ? Sr(r, n.scroll.diff.value) : r;
            })(s, u);
          return (
            (function (e) {
              var r = e.draggable,
                n = e.pageBorderBoxWithDroppableScroll,
                t = e.previousImpact,
                i = e.destination,
                o = e.insideDestination,
                a = e.afterCritical;
              if (!i.isCombineEnabled) return null;
              var l = i.axis,
                u = hr(i.axis, r.displaceBy),
                c = u.value,
                s = n[l.start],
                d = n[l.end],
                p = Re(Fe(r, o), function (e) {
                  var r = e.descriptor.id,
                    n = e.page.borderBox,
                    i = n[l.size] / 4,
                    o = er(r, a),
                    u = Pr({ displaced: t.displaced, id: r });
                  return o
                    ? u
                      ? d > n[l.start] + i && d < n[l.end] - i
                      : s > n[l.start] - c + i && s < n[l.end] - c - i
                    : u
                      ? d > n[l.start] + c + i && d < n[l.end] + c - i
                      : s > n[l.start] + i && s < n[l.end] - i;
                });
              return p
                ? {
                    displacedBy: u,
                    displaced: t.displaced,
                    at: {
                      type: "COMBINE",
                      combine: {
                        draggableId: p.descriptor.id,
                        droppableId: i.descriptor.id,
                      },
                    },
                  }
                : null;
            })({
              pageBorderBoxWithDroppableScroll: p,
              draggable: n,
              previousImpact: o,
              destination: s,
              insideDestination: d,
              afterCritical: l,
            }) ||
            (function (e) {
              var r = e.pageBorderBoxWithDroppableScroll,
                n = e.draggable,
                t = e.destination,
                i = e.insideDestination,
                o = e.last,
                a = e.viewport,
                l = e.afterCritical,
                u = t.axis,
                c = hr(t.axis, n.displaceBy),
                s = c.value,
                d = r[u.start],
                p = r[u.end],
                f = (function (e) {
                  var r = e.draggable,
                    n = e.closest,
                    t = e.inHomeList;
                  return n
                    ? t && n.descriptor.index > r.descriptor.index
                      ? n.descriptor.index - 1
                      : n.descriptor.index
                    : null;
                })({
                  draggable: n,
                  closest: Re(Fe(n, i), function (e) {
                    var r = e.descriptor.id,
                      n = e.page.borderBox.center[u.line],
                      t = er(r, l),
                      i = Pr({ displaced: o, id: r });
                    return t
                      ? i
                        ? p <= n
                        : d < n - s
                      : i
                        ? p <= n + s
                        : d < n;
                  }),
                  inHomeList: ke(n, t),
                });
              return Ze({
                draggable: n,
                insideDestination: i,
                destination: t,
                viewport: a,
                last: o,
                displacedBy: c,
                index: f,
              });
            })({
              pageBorderBoxWithDroppableScroll: p,
              draggable: n,
              destination: s,
              insideDestination: d,
              last: o.displaced,
              viewport: a,
              afterCritical: l,
            })
          );
        },
        Rr = function (e, r) {
          var n;
          return (0, o.A)({}, e, (((n = {})[r.descriptor.id] = r), n));
        },
        Br = function (e) {
          var r = e.previousImpact,
            n = e.impact,
            t = e.droppables,
            i = xr(r),
            a = xr(n);
          if (!i) return t;
          if (i === a) return t;
          var l = t[i];
          if (!l.subject.withPlaceholder) return t;
          var u = (function (e) {
            var r = e.subject.withPlaceholder;
            r || le(!1);
            var n = e.frame;
            if (!n) {
              var t = Ce({
                page: e.subject.page,
                axis: e.axis,
                frame: null,
                withPlaceholder: null,
              });
              return (0, o.A)({}, e, { subject: t });
            }
            var i = r.oldFrameMaxScroll;
            i || le(!1);
            var a = yr(n, i),
              l = Ce({
                page: e.subject.page,
                axis: e.axis,
                frame: a,
                withPlaceholder: null,
              });
            return (0, o.A)({}, e, { subject: l, frame: a });
          })(l);
          return Rr(t, u);
        },
        Or = function (e) {
          var r = e.state,
            n = e.clientSelection,
            t = e.dimensions,
            i = e.viewport,
            a = e.impact,
            l = e.scrollJumpRequest,
            u = i || r.viewport,
            c = t || r.dimensions,
            s = n || r.current.client.selection,
            d = me(s, r.initial.client.selection),
            p = {
              offset: d,
              selection: s,
              borderBoxCenter: ve(r.initial.client.borderBoxCenter, d),
            },
            f = {
              selection: ve(p.selection, u.scroll.current),
              borderBoxCenter: ve(p.borderBoxCenter, u.scroll.current),
              offset: ve(p.offset, u.scroll.diff.value),
            },
            g = { client: p, page: f };
          if ("COLLECTING" === r.phase)
            return (0, o.A)({ phase: "COLLECTING" }, r, {
              dimensions: c,
              viewport: u,
              current: g,
            });
          var v = c.draggables[r.critical.draggable.id],
            m =
              a ||
              Nr({
                pageOffset: f.offset,
                draggable: v,
                draggables: c.draggables,
                droppables: c.droppables,
                previousImpact: r.impact,
                viewport: u,
                afterCritical: r.afterCritical,
              }),
            b = (function (e) {
              var r = e.draggable,
                n = e.draggables,
                t = e.droppables,
                i = e.previousImpact,
                o = e.impact,
                a = Br({ previousImpact: i, impact: o, droppables: t }),
                l = xr(o);
              if (!l) return a;
              var u = t[l];
              if (ke(r, u)) return a;
              if (u.subject.withPlaceholder) return a;
              var c = Ir(u, r, n);
              return Rr(a, c);
            })({
              draggable: v,
              impact: m,
              previousImpact: r.impact,
              draggables: c.draggables,
              droppables: c.droppables,
            });
          return (0, o.A)({}, r, {
            current: g,
            dimensions: { draggables: c.draggables, droppables: b },
            impact: m,
            viewport: u,
            scrollJumpRequest: l || null,
            forceShouldAnimate: !l && null,
          });
        };
      var Tr = function (e) {
          var r = e.impact,
            n = e.viewport,
            t = e.draggables,
            i = e.destination,
            a = e.forceShouldAnimate,
            l = r.displaced,
            u = (function (e, r) {
              return e.map(function (e) {
                return r[e];
              });
            })(l.all, t),
            c = $e({
              afterDragging: u,
              destination: i,
              displacedBy: r.displacedBy,
              viewport: n.frame,
              forceShouldAnimate: a,
              last: l,
            });
          return (0, o.A)({}, r, { displaced: c });
        },
        Lr = function (e) {
          var r = e.impact,
            n = e.draggable,
            t = e.droppable,
            i = e.draggables,
            o = e.viewport,
            a = e.afterCritical,
            l = cr({
              impact: r,
              draggable: n,
              draggables: i,
              droppable: t,
              afterCritical: a,
            });
          return pr({ pageBorderBoxCenter: l, draggable: n, viewport: o });
        },
        Gr = function (e) {
          var r = e.state,
            n = e.dimensions,
            t = e.viewport;
          "SNAP" !== r.movementMode && le(!1);
          var i = r.impact,
            o = t || r.viewport,
            a = n || r.dimensions,
            l = a.draggables,
            u = a.droppables,
            c = l[r.critical.draggable.id],
            s = xr(i);
          s || le(!1);
          var d = u[s],
            p = Tr({ impact: i, viewport: o, destination: d, draggables: l }),
            f = Lr({
              impact: p,
              draggable: c,
              droppable: d,
              draggables: l,
              viewport: o,
              afterCritical: r.afterCritical,
            });
          return Or({
            impact: p,
            clientSelection: f,
            state: r,
            dimensions: a,
            viewport: o,
          });
        },
        Mr = function (e) {
          var r = e.draggable,
            n = e.home,
            t = e.draggables,
            i = e.viewport,
            o = hr(n.axis, r.displaceBy),
            a = Ge(n.descriptor.id, t),
            l = a.indexOf(r);
          -1 === l && le(!1);
          var u,
            c = a.slice(l + 1),
            s = c.reduce(function (e, r) {
              return (e[r.descriptor.id] = !0), e;
            }, {}),
            d = {
              inVirtualList: "virtual" === n.descriptor.mode,
              displacedBy: o,
              effected: s,
            };
          return {
            impact: {
              displaced: $e({
                afterDragging: c,
                destination: n,
                displacedBy: o,
                last: null,
                viewport: i.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: o,
              at: {
                type: "REORDER",
                destination:
                  ((u = r.descriptor),
                  { index: u.index, droppableId: u.droppableId }),
              },
            },
            afterCritical: d,
          };
        },
        _r = function (e) {
          0;
        },
        Fr = function (e) {
          0;
        },
        kr = function (e) {
          var r = e.additions,
            n = e.updatedDroppables,
            t = e.viewport,
            i = t.scroll.diff.value;
          return r.map(function (e) {
            var r = e.descriptor.droppableId,
              a = (function (e) {
                var r = e.frame;
                return r || le(!1), r;
              })(n[r]),
              l = a.scroll.diff.value,
              u = (function (e) {
                var r = e.draggable,
                  n = e.offset,
                  t = e.initialWindowScroll,
                  i = (0, J.cY)(r.client, n),
                  a = (0, J.SQ)(i, t);
                return (0, o.A)({}, r, {
                  placeholder: (0, o.A)({}, r.placeholder, { client: i }),
                  client: i,
                  page: a,
                });
              })({
                draggable: e,
                offset: ve(i, l),
                initialWindowScroll: t.scroll.initial,
              });
            return u;
          });
        },
        Wr = function (e) {
          return "SNAP" === e.movementMode;
        },
        Ur = function (e, r, n) {
          var t = (function (e, r) {
            return {
              draggables: e.draggables,
              droppables: Rr(e.droppables, r),
            };
          })(e.dimensions, r);
          return !Wr(e) || n
            ? Or({ state: e, dimensions: t })
            : Gr({ state: e, dimensions: t });
        };
      function Hr(e) {
        return e.isDragging && "SNAP" === e.movementMode
          ? (0, o.A)({ phase: "DRAGGING" }, e, { scrollJumpRequest: null })
          : e;
      }
      var jr = { phase: "IDLE", completed: null, shouldFlush: !1 },
        qr = function (e, r) {
          if ((void 0 === e && (e = jr), "FLUSH" === r.type))
            return (0, o.A)({}, jr, { shouldFlush: !0 });
          if ("INITIAL_PUBLISH" === r.type) {
            "IDLE" !== e.phase && le(!1);
            var n = r.payload,
              t = n.critical,
              i = n.clientSelection,
              a = n.viewport,
              l = n.dimensions,
              u = n.movementMode,
              c = l.draggables[t.draggable.id],
              s = l.droppables[t.droppable.id],
              d = {
                selection: i,
                borderBoxCenter: c.client.borderBox.center,
                offset: ge,
              },
              p = {
                client: d,
                page: {
                  selection: ve(d.selection, a.scroll.initial),
                  borderBoxCenter: ve(d.selection, a.scroll.initial),
                  offset: ve(d.selection, a.scroll.diff.value),
                },
              },
              f = Te(l.droppables).every(function (e) {
                return !e.isFixedOnPage;
              }),
              g = Mr({
                draggable: c,
                home: s,
                draggables: l.draggables,
                viewport: a,
              }),
              v = g.impact;
            return {
              phase: "DRAGGING",
              isDragging: !0,
              critical: t,
              movementMode: u,
              dimensions: l,
              initial: p,
              current: p,
              isWindowScrollAllowed: f,
              impact: v,
              afterCritical: g.afterCritical,
              onLiftImpact: v,
              viewport: a,
              scrollJumpRequest: null,
              forceShouldAnimate: null,
            };
          }
          if ("COLLECTION_STARTING" === r.type)
            return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase
              ? e
              : ("DRAGGING" !== e.phase && le(!1),
                (0, o.A)({ phase: "COLLECTING" }, e, { phase: "COLLECTING" }));
          if ("PUBLISH_WHILE_DRAGGING" === r.type)
            return (
              "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && le(!1),
              (function (e) {
                var r = e.state,
                  n = e.published;
                _r();
                var t = n.modified.map(function (e) {
                    var n = r.dimensions.droppables[e.droppableId];
                    return Se(n, e.scroll);
                  }),
                  i = (0, o.A)({}, r.dimensions.droppables, {}, Be(t)),
                  a = Oe(
                    kr({
                      additions: n.additions,
                      updatedDroppables: i,
                      viewport: r.viewport,
                    }),
                  ),
                  l = (0, o.A)({}, r.dimensions.draggables, {}, a);
                n.removals.forEach(function (e) {
                  delete l[e];
                });
                var u = { droppables: i, draggables: l },
                  c = xr(r.impact),
                  s = c ? u.droppables[c] : null,
                  d = u.draggables[r.critical.draggable.id],
                  p = u.droppables[r.critical.droppable.id],
                  f = Mr({
                    draggable: d,
                    home: p,
                    draggables: l,
                    viewport: r.viewport,
                  }),
                  g = f.impact,
                  v = f.afterCritical,
                  m = s && s.isCombineEnabled ? r.impact : g,
                  b = Nr({
                    pageOffset: r.current.page.offset,
                    draggable: u.draggables[r.critical.draggable.id],
                    draggables: u.draggables,
                    droppables: u.droppables,
                    previousImpact: m,
                    viewport: r.viewport,
                    afterCritical: v,
                  });
                Fr();
                var h = (0, o.A)({ phase: "DRAGGING" }, r, {
                  phase: "DRAGGING",
                  impact: b,
                  onLiftImpact: g,
                  dimensions: u,
                  afterCritical: v,
                  forceShouldAnimate: !1,
                });
                return "COLLECTING" === r.phase
                  ? h
                  : (0, o.A)({ phase: "DROP_PENDING" }, h, {
                      phase: "DROP_PENDING",
                      reason: r.reason,
                      isWaiting: !1,
                    });
              })({ state: e, published: r.payload })
            );
          if ("MOVE" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            wr(e) || le(!1);
            var m = r.payload.client;
            return be(m, e.current.client.selection)
              ? e
              : Or({
                  state: e,
                  clientSelection: m,
                  impact: Wr(e) ? e.impact : null,
                });
          }
          if ("UPDATE_DROPPABLE_SCROLL" === r.type) {
            if ("DROP_PENDING" === e.phase) return Hr(e);
            if ("COLLECTING" === e.phase) return Hr(e);
            wr(e) || le(!1);
            var b = r.payload,
              h = b.id,
              y = b.newScroll,
              I = e.dimensions.droppables[h];
            if (!I) return e;
            var D = Se(I, y);
            return Ur(e, D, !1);
          }
          if ("UPDATE_DROPPABLE_IS_ENABLED" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            wr(e) || le(!1);
            var x = r.payload,
              E = x.id,
              w = x.isEnabled,
              A = e.dimensions.droppables[E];
            A || le(!1), A.isEnabled === w && le(!1);
            var C = (0, o.A)({}, A, { isEnabled: w });
            return Ur(e, C, !0);
          }
          if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === r.type) {
            if ("DROP_PENDING" === e.phase) return e;
            wr(e) || le(!1);
            var S = r.payload,
              P = S.id,
              N = S.isCombineEnabled,
              R = e.dimensions.droppables[P];
            R || le(!1), R.isCombineEnabled === N && le(!1);
            var B = (0, o.A)({}, R, { isCombineEnabled: N });
            return Ur(e, B, !0);
          }
          if ("MOVE_BY_WINDOW_SCROLL" === r.type) {
            if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase)
              return e;
            wr(e) || le(!1), e.isWindowScrollAllowed || le(!1);
            var O = r.payload.newScroll;
            if (be(e.viewport.scroll.current, O)) return Hr(e);
            var T = sr(e.viewport, O);
            return Wr(e)
              ? Gr({ state: e, viewport: T })
              : Or({ state: e, viewport: T });
          }
          if ("UPDATE_VIEWPORT_MAX_SCROLL" === r.type) {
            if (!wr(e)) return e;
            var L = r.payload.maxScroll;
            if (be(L, e.viewport.scroll.max)) return e;
            var G = (0, o.A)({}, e.viewport, {
              scroll: (0, o.A)({}, e.viewport.scroll, { max: L }),
            });
            return (0, o.A)({ phase: "DRAGGING" }, e, { viewport: G });
          }
          if (
            "MOVE_UP" === r.type ||
            "MOVE_DOWN" === r.type ||
            "MOVE_LEFT" === r.type ||
            "MOVE_RIGHT" === r.type
          ) {
            if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase)
              return e;
            "DRAGGING" !== e.phase && le(!1);
            var M = Er({ state: e, type: r.type });
            return M
              ? Or({
                  state: e,
                  impact: M.impact,
                  clientSelection: M.clientSelection,
                  scrollJumpRequest: M.scrollJumpRequest,
                })
              : e;
          }
          if ("DROP_PENDING" === r.type) {
            var _ = r.payload.reason;
            return (
              "COLLECTING" !== e.phase && le(!1),
              (0, o.A)({ phase: "DROP_PENDING" }, e, {
                phase: "DROP_PENDING",
                isWaiting: !0,
                reason: _,
              })
            );
          }
          if ("DROP_ANIMATE" === r.type) {
            var F = r.payload,
              k = F.completed,
              W = F.dropDuration,
              U = F.newHomeClientOffset;
            return (
              "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && le(!1),
              {
                phase: "DROP_ANIMATING",
                completed: k,
                dropDuration: W,
                newHomeClientOffset: U,
                dimensions: e.dimensions,
              }
            );
          }
          return "DROP_COMPLETE" === r.type
            ? { phase: "IDLE", completed: r.payload.completed, shouldFlush: !1 }
            : e;
        },
        Vr = function (e) {
          return { type: "LIFT", payload: e };
        },
        Kr = function (e) {
          return { type: "PUBLISH_WHILE_DRAGGING", payload: e };
        },
        zr = function () {
          return { type: "COLLECTION_STARTING", payload: null };
        },
        Yr = function (e) {
          return { type: "UPDATE_DROPPABLE_SCROLL", payload: e };
        },
        Jr = function (e) {
          return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e };
        },
        Xr = function (e) {
          return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e };
        },
        $r = function (e) {
          return { type: "MOVE", payload: e };
        },
        Qr = function () {
          return { type: "MOVE_UP", payload: null };
        },
        Zr = function () {
          return { type: "MOVE_DOWN", payload: null };
        },
        en = function () {
          return { type: "MOVE_RIGHT", payload: null };
        },
        rn = function () {
          return { type: "MOVE_LEFT", payload: null };
        },
        nn = function () {
          return { type: "FLUSH", payload: null };
        },
        tn = function (e) {
          return { type: "DROP_COMPLETE", payload: e };
        },
        on = function (e) {
          return { type: "DROP", payload: e };
        },
        an = function () {
          return { type: "DROP_ANIMATION_FINISHED", payload: null };
        };
      var ln = "cubic-bezier(.2,1,.1,1)",
        un = { drop: 0, combining: 0.7 },
        cn = { drop: 0.75 },
        sn = 0.2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
        dn = {
          fluid: "opacity " + sn,
          snap: "transform " + sn + ", opacity " + sn,
          drop: function (e) {
            var r = e + "s " + ln;
            return "transform " + r + ", opacity " + r;
          },
          outOfTheWay: "transform " + sn,
          placeholder: "height " + sn + ", width " + sn + ", margin " + sn,
        },
        pn = function (e) {
          return be(e, ge) ? null : "translate(" + e.x + "px, " + e.y + "px)";
        },
        fn = pn,
        gn = function (e, r) {
          var n = pn(e);
          return n ? (r ? n + " scale(" + cn.drop + ")" : n) : null;
        },
        vn = 0.33,
        mn = 0.55,
        bn = mn - vn,
        hn = function (e) {
          var r = e.getState,
            n = e.dispatch;
          return function (e) {
            return function (t) {
              if ("DROP" === t.type) {
                var i = r(),
                  a = t.payload.reason;
                if ("COLLECTING" !== i.phase) {
                  if ("IDLE" !== i.phase) {
                    "DROP_PENDING" === i.phase && i.isWaiting && le(!1),
                      "DRAGGING" !== i.phase &&
                        "DROP_PENDING" !== i.phase &&
                        le(!1);
                    var l = i.critical,
                      u = i.dimensions,
                      c = u.draggables[i.critical.draggable.id],
                      s = (function (e) {
                        var r = e.draggables,
                          n = e.reason,
                          t = e.lastImpact,
                          i = e.home,
                          a = e.viewport,
                          l = e.onLiftImpact;
                        return t.at && "DROP" === n
                          ? "REORDER" === t.at.type
                            ? { impact: t, didDropInsideDroppable: !0 }
                            : {
                                impact: (0, o.A)({}, t, { displaced: Ue }),
                                didDropInsideDroppable: !0,
                              }
                          : {
                              impact: Tr({
                                draggables: r,
                                impact: l,
                                destination: i,
                                viewport: a,
                                forceShouldAnimate: !0,
                              }),
                              didDropInsideDroppable: !1,
                            };
                      })({
                        reason: a,
                        lastImpact: i.impact,
                        afterCritical: i.afterCritical,
                        onLiftImpact: i.onLiftImpact,
                        home: i.dimensions.droppables[i.critical.droppable.id],
                        viewport: i.viewport,
                        draggables: i.dimensions.draggables,
                      }),
                      d = s.impact,
                      p = s.didDropInsideDroppable,
                      f = p ? Me(d) : null,
                      g = p ? _e(d) : null,
                      v = {
                        index: l.draggable.index,
                        droppableId: l.droppable.id,
                      },
                      m = {
                        draggableId: c.descriptor.id,
                        type: c.descriptor.type,
                        source: v,
                        reason: a,
                        mode: i.movementMode,
                        destination: f,
                        combine: g,
                      },
                      b = (function (e) {
                        var r = e.impact,
                          n = e.draggable,
                          t = e.dimensions,
                          i = e.viewport,
                          o = e.afterCritical,
                          a = t.draggables,
                          l = t.droppables,
                          u = xr(r),
                          c = u ? l[u] : null,
                          s = l[n.descriptor.droppableId],
                          d = Lr({
                            impact: r,
                            draggable: n,
                            draggables: a,
                            afterCritical: o,
                            droppable: c || s,
                            viewport: i,
                          });
                        return me(d, n.client.borderBox.center);
                      })({
                        impact: d,
                        draggable: c,
                        dimensions: u,
                        viewport: i.viewport,
                        afterCritical: i.afterCritical,
                      }),
                      h = {
                        critical: i.critical,
                        afterCritical: i.afterCritical,
                        result: m,
                        impact: d,
                      };
                    if (!be(i.current.client.offset, b) || Boolean(m.combine)) {
                      var y = (function (e) {
                        var r = e.current,
                          n = e.destination,
                          t = e.reason,
                          i = Ie(r, n);
                        if (i <= 0) return vn;
                        if (i >= 1500) return mn;
                        var o = vn + bn * (i / 1500);
                        return Number(
                          ("CANCEL" === t ? 0.6 * o : o).toFixed(2),
                        );
                      })({
                        current: i.current.client.offset,
                        destination: b,
                        reason: a,
                      });
                      n(
                        (function (e) {
                          return { type: "DROP_ANIMATE", payload: e };
                        })({
                          newHomeClientOffset: b,
                          dropDuration: y,
                          completed: h,
                        }),
                      );
                    } else n(tn({ completed: h }));
                  }
                } else
                  n(
                    (function (e) {
                      return { type: "DROP_PENDING", payload: e };
                    })({ reason: a }),
                  );
              } else e(t);
            };
          };
        },
        yn = function (e) {
          return { x: e.pageXOffset, y: e.pageYOffset };
        };
      function In(e) {
        var r = e.onWindowScroll;
        var n = (0, ee.A)(function () {
            r(yn());
          }),
          t = (function (e) {
            return {
              eventName: "scroll",
              options: { passive: !0, capture: !1 },
              fn: function (r) {
                (r.target !== window && r.target !== window.document) || e();
              },
            };
          })(n),
          i = ne;
        function o() {
          return i !== ne;
        }
        return {
          start: function () {
            o() && le(!1), (i = te(window, [t]));
          },
          stop: function () {
            o() || le(!1), n.cancel(), i(), (i = ne);
          },
          isActive: o,
        };
      }
      var Dn = function (e) {
          var r = In({
            onWindowScroll: function (r) {
              e.dispatch({
                type: "MOVE_BY_WINDOW_SCROLL",
                payload: { newScroll: r },
              });
            },
          });
          return function (e) {
            return function (n) {
              r.isActive() || "INITIAL_PUBLISH" !== n.type || r.start(),
                r.isActive() &&
                  (function (e) {
                    return (
                      "DROP_COMPLETE" === e.type ||
                      "DROP_ANIMATE" === e.type ||
                      "FLUSH" === e.type
                    );
                  })(n) &&
                  r.stop(),
                e(n);
            };
          };
        },
        xn = function () {
          var e = [];
          return {
            add: function (r) {
              var n = setTimeout(function () {
                  return (function (r) {
                    var n = Ne(e, function (e) {
                      return e.timerId === r;
                    });
                    -1 === n && le(!1), e.splice(n, 1)[0].callback();
                  })(n);
                }),
                t = { timerId: n, callback: r };
              e.push(t);
            },
            flush: function () {
              if (e.length) {
                var r = [].concat(e);
                (e.length = 0),
                  r.forEach(function (e) {
                    clearTimeout(e.timerId), e.callback();
                  });
              }
            },
          };
        },
        En = function (e, r) {
          _r(), r(), Fr();
        },
        wn = function (e, r) {
          return {
            draggableId: e.draggable.id,
            type: e.droppable.type,
            source: { droppableId: e.droppable.id, index: e.draggable.index },
            mode: r,
          };
        },
        An = function (e, r, n, t) {
          if (e) {
            var i = (function (e) {
              var r = !1,
                n = !1,
                t = setTimeout(function () {
                  n = !0;
                }),
                i = function (i) {
                  r || n || ((r = !0), e(i), clearTimeout(t));
                };
              return (
                (i.wasCalled = function () {
                  return r;
                }),
                i
              );
            })(n);
            e(r, { announce: i }), i.wasCalled() || n(t(r));
          } else n(t(r));
        },
        Cn = function (e, r) {
          var n = (function (e, r) {
            var n = xn(),
              t = null,
              i = function (n) {
                t || le(!1),
                  (t = null),
                  En(0, function () {
                    return An(e().onDragEnd, n, r, fe.onDragEnd);
                  });
              };
            return {
              beforeCapture: function (r, n) {
                t && le(!1),
                  En(0, function () {
                    var t = e().onBeforeCapture;
                    t && t({ draggableId: r, mode: n });
                  });
              },
              beforeStart: function (r, n) {
                t && le(!1),
                  En(0, function () {
                    var t = e().onBeforeDragStart;
                    t && t(wn(r, n));
                  });
              },
              start: function (i, o) {
                t && le(!1);
                var a = wn(i, o);
                (t = {
                  mode: o,
                  lastCritical: i,
                  lastLocation: a.source,
                  lastCombine: null,
                }),
                  n.add(function () {
                    En(0, function () {
                      return An(e().onDragStart, a, r, fe.onDragStart);
                    });
                  });
              },
              update: function (i, a) {
                var l = Me(a),
                  u = _e(a);
                t || le(!1);
                var c = !(function (e, r) {
                  if (e === r) return !0;
                  var n =
                      e.draggable.id === r.draggable.id &&
                      e.draggable.droppableId === r.draggable.droppableId &&
                      e.draggable.type === r.draggable.type &&
                      e.draggable.index === r.draggable.index,
                    t =
                      e.droppable.id === r.droppable.id &&
                      e.droppable.type === r.droppable.type;
                  return n && t;
                })(i, t.lastCritical);
                c && (t.lastCritical = i);
                var s,
                  d,
                  p =
                    ((d = l),
                    !(
                      (null == (s = t.lastLocation) && null == d) ||
                      (null != s &&
                        null != d &&
                        s.droppableId === d.droppableId &&
                        s.index === d.index)
                    ));
                p && (t.lastLocation = l);
                var f = !(function (e, r) {
                  return (
                    (null == e && null == r) ||
                    (null != e &&
                      null != r &&
                      e.draggableId === r.draggableId &&
                      e.droppableId === r.droppableId)
                  );
                })(t.lastCombine, u);
                if ((f && (t.lastCombine = u), c || p || f)) {
                  var g = (0, o.A)({}, wn(i, t.mode), {
                    combine: u,
                    destination: l,
                  });
                  n.add(function () {
                    En(0, function () {
                      return An(e().onDragUpdate, g, r, fe.onDragUpdate);
                    });
                  });
                }
              },
              flush: function () {
                t || le(!1), n.flush();
              },
              drop: i,
              abort: function () {
                if (t) {
                  var e = (0, o.A)({}, wn(t.lastCritical, t.mode), {
                    combine: null,
                    destination: null,
                    reason: "CANCEL",
                  });
                  i(e);
                }
              },
            };
          })(e, r);
          return function (e) {
            return function (r) {
              return function (t) {
                if ("BEFORE_INITIAL_CAPTURE" !== t.type) {
                  if ("INITIAL_PUBLISH" === t.type) {
                    var i = t.payload.critical;
                    return (
                      n.beforeStart(i, t.payload.movementMode),
                      r(t),
                      void n.start(i, t.payload.movementMode)
                    );
                  }
                  if ("DROP_COMPLETE" === t.type) {
                    var o = t.payload.completed.result;
                    return n.flush(), r(t), void n.drop(o);
                  }
                  if ((r(t), "FLUSH" !== t.type)) {
                    var a = e.getState();
                    "DRAGGING" === a.phase && n.update(a.critical, a.impact);
                  } else n.abort();
                } else
                  n.beforeCapture(
                    t.payload.draggableId,
                    t.payload.movementMode,
                  );
              };
            };
          };
        },
        Sn = function (e) {
          return function (r) {
            return function (n) {
              if ("DROP_ANIMATION_FINISHED" === n.type) {
                var t = e.getState();
                "DROP_ANIMATING" !== t.phase && le(!1),
                  e.dispatch(tn({ completed: t.completed }));
              } else r(n);
            };
          };
        },
        Pn = function (e) {
          var r = null,
            n = null;
          return function (t) {
            return function (i) {
              if (
                (("FLUSH" !== i.type &&
                  "DROP_COMPLETE" !== i.type &&
                  "DROP_ANIMATION_FINISHED" !== i.type) ||
                  (n && (cancelAnimationFrame(n), (n = null)),
                  r && (r(), (r = null))),
                t(i),
                "DROP_ANIMATE" === i.type)
              ) {
                var o = {
                  eventName: "scroll",
                  options: { capture: !0, passive: !1, once: !0 },
                  fn: function () {
                    "DROP_ANIMATING" === e.getState().phase &&
                      e.dispatch({
                        type: "DROP_ANIMATION_FINISHED",
                        payload: null,
                      });
                  },
                };
                n = requestAnimationFrame(function () {
                  (n = null), (r = te(window, [o]));
                });
              }
            };
          };
        },
        Nn = function (e) {
          return function (r) {
            return function (n) {
              if ((r(n), "PUBLISH_WHILE_DRAGGING" === n.type)) {
                var t = e.getState();
                "DROP_PENDING" === t.phase &&
                  (t.isWaiting || e.dispatch(on({ reason: t.reason })));
              }
            };
          };
        },
        Rn = a.Zz,
        Bn = function (e) {
          var r,
            n = e.dimensionMarshal,
            t = e.focusMarshal,
            i = e.styleMarshal,
            o = e.getResponders,
            l = e.announce,
            u = e.autoScroller;
          return (0, a.y$)(
            qr,
            Rn(
              (0, a.Tw)(
                ((r = i),
                function () {
                  return function (e) {
                    return function (n) {
                      "INITIAL_PUBLISH" === n.type && r.dragging(),
                        "DROP_ANIMATE" === n.type &&
                          r.dropping(n.payload.completed.result.reason),
                        ("FLUSH" !== n.type && "DROP_COMPLETE" !== n.type) ||
                          r.resting(),
                        e(n);
                    };
                  };
                }),
                (function (e) {
                  return function () {
                    return function (r) {
                      return function (n) {
                        ("DROP_COMPLETE" !== n.type &&
                          "FLUSH" !== n.type &&
                          "DROP_ANIMATE" !== n.type) ||
                          e.stopPublishing(),
                          r(n);
                      };
                    };
                  };
                })(n),
                (function (e) {
                  return function (r) {
                    var n = r.getState,
                      t = r.dispatch;
                    return function (r) {
                      return function (i) {
                        if ("LIFT" === i.type) {
                          var o = i.payload,
                            a = o.id,
                            l = o.clientSelection,
                            u = o.movementMode,
                            c = n();
                          "DROP_ANIMATING" === c.phase &&
                            t(tn({ completed: c.completed })),
                            "IDLE" !== n().phase && le(!1),
                            t(nn()),
                            t({
                              type: "BEFORE_INITIAL_CAPTURE",
                              payload: { draggableId: a, movementMode: u },
                            });
                          var s = {
                              draggableId: a,
                              scrollOptions: {
                                shouldPublishImmediately: "SNAP" === u,
                              },
                            },
                            d = e.startPublishing(s),
                            p = d.critical,
                            f = d.dimensions,
                            g = d.viewport;
                          t({
                            type: "INITIAL_PUBLISH",
                            payload: {
                              critical: p,
                              dimensions: f,
                              clientSelection: l,
                              movementMode: u,
                              viewport: g,
                            },
                          });
                        } else r(i);
                      };
                    };
                  };
                })(n),
                hn,
                Sn,
                Pn,
                Nn,
                (function (e) {
                  return function (r) {
                    return function (n) {
                      return function (t) {
                        if (
                          (function (e) {
                            return (
                              "DROP_COMPLETE" === e.type ||
                              "DROP_ANIMATE" === e.type ||
                              "FLUSH" === e.type
                            );
                          })(t)
                        )
                          return e.stop(), void n(t);
                        if ("INITIAL_PUBLISH" === t.type) {
                          n(t);
                          var i = r.getState();
                          return (
                            "DRAGGING" !== i.phase && le(!1), void e.start(i)
                          );
                        }
                        n(t), e.scroll(r.getState());
                      };
                    };
                  };
                })(u),
                Dn,
                (function (e) {
                  var r = !1;
                  return function () {
                    return function (n) {
                      return function (t) {
                        if ("INITIAL_PUBLISH" === t.type)
                          return (
                            (r = !0),
                            e.tryRecordFocus(t.payload.critical.draggable.id),
                            n(t),
                            void e.tryRestoreFocusRecorded()
                          );
                        if ((n(t), r)) {
                          if ("FLUSH" === t.type)
                            return (r = !1), void e.tryRestoreFocusRecorded();
                          if ("DROP_COMPLETE" === t.type) {
                            r = !1;
                            var i = t.payload.completed.result;
                            i.combine &&
                              e.tryShiftRecord(
                                i.draggableId,
                                i.combine.draggableId,
                              ),
                              e.tryRestoreFocusRecorded();
                          }
                        }
                      };
                    };
                  };
                })(t),
                Cn(o, l),
              ),
            ),
          );
        };
      var On = function (e) {
          var r = e.scrollHeight,
            n = e.scrollWidth,
            t = e.height,
            i = e.width,
            o = me({ x: n, y: r }, { x: i, y: t });
          return { x: Math.max(0, o.x), y: Math.max(0, o.y) };
        },
        Tn = function (e) {
          var r = e.document.documentElement;
          return r || le(!1), r;
        },
        Ln = function (e) {
          var r = Tn(e);
          return On({
            scrollHeight: r.scrollHeight,
            scrollWidth: r.scrollWidth,
            width: r.clientWidth,
            height: r.clientHeight,
          });
        },
        Gn = function (e) {
          var r = e.windowToUse,
            n = e.critical,
            t = e.scrollOptions,
            i = e.registry;
          _r();
          var o = (function (e) {
              var r = yn(e),
                n = Ln(e),
                t = r.y,
                i = r.x,
                o = Tn(e),
                a = i + o.clientWidth,
                l = t + o.clientHeight;
              return {
                frame: (0, J.l)({ top: t, left: i, right: a, bottom: l }),
                scroll: {
                  initial: r,
                  current: r,
                  max: n,
                  diff: { value: ge, displacement: ge },
                },
              };
            })(r),
            a = o.scroll.current,
            l = n.droppable,
            u = i.droppable.getAllByType(l.type).map(function (e) {
              return e.callbacks.getDimensionAndWatchScroll(a, t);
            }),
            c = i.draggable.getAllByType(n.draggable.type).map(function (e) {
              return e.getDimension(a);
            }),
            s = { draggables: Oe(c), droppables: Be(u) };
          return Fr(), { dimensions: s, critical: n, viewport: o };
        };
      function Mn(e, r, n) {
        return (
          n.descriptor.id !== r.id &&
          n.descriptor.type === r.type &&
          "virtual" ===
            e.droppable.getById(n.descriptor.droppableId).descriptor.mode
        );
      }
      var _n,
        Fn,
        kn = function (e, r, n) {
          var t = null,
            i = (function (e) {
              var r = e.registry,
                n = e.callbacks,
                t = { additions: {}, removals: {}, modified: {} },
                i = null,
                o = function () {
                  i ||
                    (n.collectionStarting(),
                    (i = requestAnimationFrame(function () {
                      (i = null), _r();
                      var e = t,
                        o = e.additions,
                        a = e.removals,
                        l = e.modified,
                        u = Object.keys(o)
                          .map(function (e) {
                            return r.draggable.getById(e).getDimension(ge);
                          })
                          .sort(function (e, r) {
                            return e.descriptor.index - r.descriptor.index;
                          }),
                        c = Object.keys(l).map(function (e) {
                          return {
                            droppableId: e,
                            scroll: r.droppable
                              .getById(e)
                              .callbacks.getScrollWhileDragging(),
                          };
                        }),
                        s = {
                          additions: u,
                          removals: Object.keys(a),
                          modified: c,
                        };
                      (t = { additions: {}, removals: {}, modified: {} }),
                        Fr(),
                        n.publish(s);
                    })));
                };
              return {
                add: function (e) {
                  var r = e.descriptor.id;
                  (t.additions[r] = e),
                    (t.modified[e.descriptor.droppableId] = !0),
                    t.removals[r] && delete t.removals[r],
                    o();
                },
                remove: function (e) {
                  var r = e.descriptor;
                  (t.removals[r.id] = !0),
                    (t.modified[r.droppableId] = !0),
                    t.additions[r.id] && delete t.additions[r.id],
                    o();
                },
                stop: function () {
                  i &&
                    (cancelAnimationFrame(i),
                    (i = null),
                    (t = { additions: {}, removals: {}, modified: {} }));
                },
              };
            })({
              callbacks: {
                publish: n.publishWhileDragging,
                collectionStarting: n.collectionStarting,
              },
              registry: r,
            }),
            o = function (e) {
              t || le(!1);
              var n = t.critical.draggable;
              "ADDITION" === e.type && Mn(r, n, e.value) && i.add(e.value),
                "REMOVAL" === e.type && Mn(r, n, e.value) && i.remove(e.value);
            },
            a = {
              updateDroppableIsEnabled: function (e, i) {
                r.droppable.exists(e) || le(!1),
                  t && n.updateDroppableIsEnabled({ id: e, isEnabled: i });
              },
              updateDroppableIsCombineEnabled: function (e, i) {
                t &&
                  (r.droppable.exists(e) || le(!1),
                  n.updateDroppableIsCombineEnabled({
                    id: e,
                    isCombineEnabled: i,
                  }));
              },
              scrollDroppable: function (e, n) {
                t && r.droppable.getById(e).callbacks.scroll(n);
              },
              updateDroppableScroll: function (e, i) {
                t &&
                  (r.droppable.exists(e) || le(!1),
                  n.updateDroppableScroll({ id: e, newScroll: i }));
              },
              startPublishing: function (n) {
                t && le(!1);
                var i = r.draggable.getById(n.draggableId),
                  a = r.droppable.getById(i.descriptor.droppableId),
                  l = { draggable: i.descriptor, droppable: a.descriptor },
                  u = r.subscribe(o);
                return (
                  (t = { critical: l, unsubscribe: u }),
                  Gn({
                    windowToUse: e,
                    critical: l,
                    registry: r,
                    scrollOptions: n.scrollOptions,
                  })
                );
              },
              stopPublishing: function () {
                if (t) {
                  i.stop();
                  var e = t.critical.droppable;
                  r.droppable.getAllByType(e.type).forEach(function (e) {
                    return e.callbacks.dragStopped();
                  }),
                    t.unsubscribe(),
                    (t = null);
                }
              },
            };
          return a;
        },
        Wn = function (e, r) {
          return (
            "IDLE" === e.phase ||
            ("DROP_ANIMATING" === e.phase &&
              e.completed.result.draggableId !== r &&
              "DROP" === e.completed.result.reason)
          );
        },
        Un = function (e) {
          window.scrollBy(e.x, e.y);
        },
        Hn = Z(function (e) {
          return Te(e).filter(function (e) {
            return !!e.isEnabled && !!e.frame;
          });
        }),
        jn = function (e) {
          var r = e.center,
            n = e.destination,
            t = e.droppables;
          if (n) {
            var i = t[n];
            return i.frame ? i : null;
          }
          var o = (function (e, r) {
            var n = Re(Hn(r), function (r) {
              return r.frame || le(!1), Ar(r.frame.pageMarginBox)(e);
            });
            return n;
          })(r, t);
          return o;
        },
        qn = 0.25,
        Vn = 0.05,
        Kn = 28,
        zn = function (e) {
          return Math.pow(e, 2);
        },
        Yn = { stopDampeningAt: 1200, accelerateAt: 360 },
        Jn = function (e) {
          var r = e.startOfRange,
            n = e.endOfRange,
            t = e.current,
            i = n - r;
          return 0 === i ? 0 : (t - r) / i;
        },
        Xn = Yn.accelerateAt,
        $n = Yn.stopDampeningAt,
        Qn = function (e) {
          var r = e.distanceToEdge,
            n = e.thresholds,
            t = e.dragStartTime,
            i = e.shouldUseTimeDampening,
            o = (function (e, r) {
              if (e > r.startScrollingFrom) return 0;
              if (e <= r.maxScrollValueAt) return Kn;
              if (e === r.startScrollingFrom) return 1;
              var n = Jn({
                  startOfRange: r.maxScrollValueAt,
                  endOfRange: r.startScrollingFrom,
                  current: e,
                }),
                t = Kn * zn(1 - n);
              return Math.ceil(t);
            })(r, n);
          return 0 === o
            ? 0
            : i
              ? Math.max(
                  (function (e, r) {
                    var n = r,
                      t = $n,
                      i = Date.now() - n;
                    if (i >= $n) return e;
                    if (i < Xn) return 1;
                    var o = Jn({ startOfRange: Xn, endOfRange: t, current: i }),
                      a = e * zn(o);
                    return Math.ceil(a);
                  })(o, t),
                  1,
                )
              : o;
        },
        Zn = function (e) {
          var r = e.container,
            n = e.distanceToEdges,
            t = e.dragStartTime,
            i = e.axis,
            o = e.shouldUseTimeDampening,
            a = (function (e, r) {
              return {
                startScrollingFrom: e[r.size] * qn,
                maxScrollValueAt: e[r.size] * Vn,
              };
            })(r, i);
          return n[i.end] < n[i.start]
            ? Qn({
                distanceToEdge: n[i.end],
                thresholds: a,
                dragStartTime: t,
                shouldUseTimeDampening: o,
              })
            : -1 *
                Qn({
                  distanceToEdge: n[i.start],
                  thresholds: a,
                  dragStartTime: t,
                  shouldUseTimeDampening: o,
                });
        },
        et = xe(function (e) {
          return 0 === e ? 0 : e;
        }),
        rt = function (e) {
          var r = e.dragStartTime,
            n = e.container,
            t = e.subject,
            i = e.center,
            o = e.shouldUseTimeDampening,
            a = {
              top: i.y - n.top,
              right: n.right - i.x,
              bottom: n.bottom - i.y,
              left: i.x - n.left,
            },
            l = Zn({
              container: n,
              distanceToEdges: a,
              dragStartTime: r,
              axis: Ke,
              shouldUseTimeDampening: o,
            }),
            u = Zn({
              container: n,
              distanceToEdges: a,
              dragStartTime: r,
              axis: ze,
              shouldUseTimeDampening: o,
            }),
            c = et({ x: u, y: l });
          if (be(c, ge)) return null;
          var s = (function (e) {
            var r = e.container,
              n = e.subject,
              t = e.proposedScroll,
              i = n.height > r.height,
              o = n.width > r.width;
            return o || i
              ? o && i
                ? null
                : { x: o ? 0 : t.x, y: i ? 0 : t.y }
              : t;
          })({ container: n, subject: t, proposedScroll: c });
          return s ? (be(s, ge) ? null : s) : null;
        },
        nt = xe(function (e) {
          return 0 === e ? 0 : e > 0 ? 1 : -1;
        }),
        tt =
          ((_n = function (e, r) {
            return e < 0 ? e : e > r ? e - r : 0;
          }),
          function (e) {
            var r = e.current,
              n = e.max,
              t = e.change,
              i = ve(r, t),
              o = { x: _n(i.x, n.x), y: _n(i.y, n.y) };
            return be(o, ge) ? null : o;
          }),
        it = function (e) {
          var r = e.max,
            n = e.current,
            t = e.change,
            i = { x: Math.max(n.x, r.x), y: Math.max(n.y, r.y) },
            o = nt(t),
            a = tt({ max: i, current: n, change: o });
          return !a || (0 !== o.x && 0 === a.x) || (0 !== o.y && 0 === a.y);
        },
        ot = function (e, r) {
          return it({
            current: e.scroll.current,
            max: e.scroll.max,
            change: r,
          });
        },
        at = function (e, r) {
          var n = e.frame;
          return (
            !!n &&
            it({ current: n.scroll.current, max: n.scroll.max, change: r })
          );
        },
        lt = function (e) {
          var r = e.state,
            n = e.dragStartTime,
            t = e.shouldUseTimeDampening,
            i = e.scrollWindow,
            o = e.scrollDroppable,
            a = r.current.page.borderBoxCenter,
            l = r.dimensions.draggables[r.critical.draggable.id].page.marginBox;
          if (r.isWindowScrollAllowed) {
            var u = (function (e) {
              var r = e.viewport,
                n = e.subject,
                t = e.center,
                i = e.dragStartTime,
                o = e.shouldUseTimeDampening,
                a = rt({
                  dragStartTime: i,
                  container: r.frame,
                  subject: n,
                  center: t,
                  shouldUseTimeDampening: o,
                });
              return a && ot(r, a) ? a : null;
            })({
              dragStartTime: n,
              viewport: r.viewport,
              subject: l,
              center: a,
              shouldUseTimeDampening: t,
            });
            if (u) return void i(u);
          }
          var c = jn({
            center: a,
            destination: xr(r.impact),
            droppables: r.dimensions.droppables,
          });
          if (c) {
            var s = (function (e) {
              var r = e.droppable,
                n = e.subject,
                t = e.center,
                i = e.dragStartTime,
                o = e.shouldUseTimeDampening,
                a = r.frame;
              if (!a) return null;
              var l = rt({
                dragStartTime: i,
                container: a.pageMarginBox,
                subject: n,
                center: t,
                shouldUseTimeDampening: o,
              });
              return l && at(r, l) ? l : null;
            })({
              dragStartTime: n,
              droppable: c,
              subject: l,
              center: a,
              shouldUseTimeDampening: t,
            });
            s && o(c.descriptor.id, s);
          }
        },
        ut = function (e) {
          var r = e.move,
            n = e.scrollDroppable,
            t = e.scrollWindow,
            i = function (e, r) {
              if (!at(e, r)) return r;
              var t = (function (e, r) {
                var n = e.frame;
                return n && at(e, r)
                  ? tt({
                      current: n.scroll.current,
                      max: n.scroll.max,
                      change: r,
                    })
                  : null;
              })(e, r);
              if (!t) return n(e.descriptor.id, r), null;
              var i = me(r, t);
              return n(e.descriptor.id, i), me(r, i);
            },
            o = function (e, r, n) {
              if (!e) return n;
              if (!ot(r, n)) return n;
              var i = (function (e, r) {
                if (!ot(e, r)) return null;
                var n = e.scroll.max,
                  t = e.scroll.current;
                return tt({ current: t, max: n, change: r });
              })(r, n);
              if (!i) return t(n), null;
              var o = me(n, i);
              return t(o), me(n, o);
            };
          return function (e) {
            var n = e.scrollJumpRequest;
            if (n) {
              var t = xr(e.impact);
              t || le(!1);
              var a = i(e.dimensions.droppables[t], n);
              if (a) {
                var l = e.viewport,
                  u = o(e.isWindowScrollAllowed, l, a);
                u &&
                  (function (e, n) {
                    var t = ve(e.current.client.selection, n);
                    r({ client: t });
                  })(e, u);
              }
            }
          };
        },
        ct = function (e) {
          var r = e.scrollDroppable,
            n = e.scrollWindow,
            t = e.move,
            i = (function (e) {
              var r = e.scrollWindow,
                n = e.scrollDroppable,
                t = (0, ee.A)(r),
                i = (0, ee.A)(n),
                o = null,
                a = function (e) {
                  o || le(!1);
                  var r = o,
                    n = r.shouldUseTimeDampening,
                    a = r.dragStartTime;
                  lt({
                    state: e,
                    scrollWindow: t,
                    scrollDroppable: i,
                    dragStartTime: a,
                    shouldUseTimeDampening: n,
                  });
                };
              return {
                start: function (e) {
                  _r(), o && le(!1);
                  var r = Date.now(),
                    n = !1,
                    t = function () {
                      n = !0;
                    };
                  lt({
                    state: e,
                    dragStartTime: 0,
                    shouldUseTimeDampening: !1,
                    scrollWindow: t,
                    scrollDroppable: t,
                  }),
                    (o = { dragStartTime: r, shouldUseTimeDampening: n }),
                    Fr(),
                    n && a(e);
                },
                stop: function () {
                  o && (t.cancel(), i.cancel(), (o = null));
                },
                scroll: a,
              };
            })({ scrollWindow: n, scrollDroppable: r }),
            o = ut({ move: t, scrollWindow: n, scrollDroppable: r });
          return {
            scroll: function (e) {
              "DRAGGING" === e.phase &&
                ("FLUID" !== e.movementMode
                  ? e.scrollJumpRequest && o(e)
                  : i.scroll(e));
            },
            start: i.start,
            stop: i.stop,
          };
        },
        st = "data-rbd",
        dt = {
          base: (Fn = st + "-drag-handle"),
          draggableId: Fn + "-draggable-id",
          contextId: Fn + "-context-id",
        },
        pt = (function () {
          var e = st + "-draggable";
          return { base: e, contextId: e + "-context-id", id: e + "-id" };
        })(),
        ft = (function () {
          var e = st + "-droppable";
          return { base: e, contextId: e + "-context-id", id: e + "-id" };
        })(),
        gt = { contextId: st + "-scroll-container-context-id" },
        vt = function (e, r) {
          return e
            .map(function (e) {
              var n = e.styles[r];
              return n ? e.selector + " { " + n + " }" : "";
            })
            .join(" ");
        },
        mt = function (e) {
          var r,
            n,
            t,
            i =
              ((r = e),
              function (e) {
                return "[" + e + '="' + r + '"]';
              }),
            o =
              ((n = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    "),
              {
                selector: i(dt.contextId),
                styles: {
                  always:
                    "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                  resting: n,
                  dragging: "pointer-events: none;",
                  dropAnimating: n,
                },
              }),
            a = [
              ((t = "\n      transition: " + dn.outOfTheWay + ";\n    "),
              {
                selector: i(pt.contextId),
                styles: { dragging: t, dropAnimating: t, userCancel: t },
              }),
              o,
              {
                selector: i(ft.contextId),
                styles: { always: "overflow-anchor: none;" },
              },
              {
                selector: "body, :host",
                styles: {
                  dragging:
                    "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ",
                },
              },
            ];
          return {
            always: vt(a, "always"),
            resting: vt(a, "resting"),
            dragging: vt(a, "dragging"),
            dropAnimating: vt(a, "dropAnimating"),
            userCancel: vt(a, "userCancel"),
          };
        },
        bt =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement
            ? t.useLayoutEffect
            : t.useEffect,
        ht = function (e) {
          var r = e || document.querySelector("head");
          return r || le(!1), r;
        },
        yt = function (e) {
          var r = document.createElement("style");
          return e && r.setAttribute("nonce", e), (r.type = "text/css"), r;
        };
      function It(e) {
        return (e.composedPath && e.composedPath()[0]) || e.target;
      }
      function Dt(e, r, n) {
        var t,
          i = e && e.getRootNode(),
          o = i && i.querySelectorAll ? i : document,
          a = Re(
            ((t = o.querySelectorAll(r)), Array.prototype.slice.call(t)),
            n,
          );
        return !a && o.host ? Dt(o.host, r, n) : a;
      }
      var xt = function (e) {
        return e && e.ownerDocument ? e.ownerDocument.defaultView : window;
      };
      function Et(e) {
        return e instanceof xt(e).HTMLElement;
      }
      function wt(e, r, n) {
        var t = Dt(n, "[" + dt.contextId + '="' + e + '"]', function (e) {
          return e.getAttribute(dt.draggableId) === r;
        });
        return t && Et(t) ? t : null;
      }
      function At() {
        var e = { draggables: {}, droppables: {} },
          r = [];
        function n(e) {
          r.length &&
            r.forEach(function (r) {
              return r(e);
            });
        }
        function t(r) {
          return e.draggables[r] || null;
        }
        function i(r) {
          return e.droppables[r] || null;
        }
        return {
          draggable: {
            register: function (r) {
              (e.draggables[r.descriptor.id] = r),
                n({ type: "ADDITION", value: r });
            },
            update: function (r, n) {
              var t = e.draggables[n.descriptor.id];
              t &&
                t.uniqueId === r.uniqueId &&
                (delete e.draggables[n.descriptor.id],
                (e.draggables[r.descriptor.id] = r));
            },
            unregister: function (r) {
              var i = r.descriptor.id,
                o = t(i);
              o &&
                r.uniqueId === o.uniqueId &&
                (delete e.draggables[i], n({ type: "REMOVAL", value: r }));
            },
            getById: function (e) {
              var r = t(e);
              return r || le(!1), r;
            },
            findById: t,
            exists: function (e) {
              return Boolean(t(e));
            },
            getAllByType: function (r) {
              return Pe(e.draggables).filter(function (e) {
                return e.descriptor.type === r;
              });
            },
          },
          droppable: {
            register: function (r) {
              e.droppables[r.descriptor.id] = r;
            },
            unregister: function (r) {
              var n = i(r.descriptor.id);
              n &&
                r.uniqueId === n.uniqueId &&
                delete e.droppables[r.descriptor.id];
            },
            getById: function (e) {
              var r = i(e);
              return r || le(!1), r;
            },
            findById: i,
            exists: function (e) {
              return Boolean(i(e));
            },
            getAllByType: function (r) {
              return Pe(e.droppables).filter(function (e) {
                return e.descriptor.type === r;
              });
            },
          },
          subscribe: function (e) {
            return (
              r.push(e),
              function () {
                var n = r.indexOf(e);
                -1 !== n && r.splice(n, 1);
              }
            );
          },
          clean: function () {
            (e.draggables = {}), (e.droppables = {}), (r.length = 0);
          },
        };
      }
      var Ct = t.createContext(null),
        St = function () {
          var e = document.body;
          return e || le(!1), e;
        },
        Pt = {
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
        Nt = function (e) {
          return "rbd-announcement-" + e;
        };
      var Rt = 0,
        Bt = { separator: "::" };
      function Ot(e, r) {
        return (
          void 0 === r && (r = Bt),
          (0, Y.Kr)(
            function () {
              return "" + e + r.separator + Rt++;
            },
            [r.separator, e],
          )
        );
      }
      var Tt = t.createContext(null);
      function Lt(e) {
        0;
      }
      function Gt(e, r) {
        Lt();
      }
      function Mt(e) {
        var r = (0, t.useRef)(e);
        return (
          (0, t.useEffect)(function () {
            r.current = e;
          }),
          r
        );
      }
      var _t,
        Ft = (((_t = {})[13] = !0), (_t[9] = !0), _t),
        kt = function (e) {
          Ft[e.keyCode] && e.preventDefault();
        },
        Wt = (function () {
          var e = "visibilitychange";
          return "undefined" == typeof document
            ? e
            : Re([e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], function (e) {
                return "on" + e in document;
              }) || e;
        })();
      var Ut,
        Ht = { type: "IDLE" };
      function jt(e) {
        var r = e.cancel,
          n = e.completed,
          t = e.getPhase,
          i = e.setPhase;
        return [
          {
            eventName: "mousemove",
            fn: function (e) {
              var r = e.button,
                n = e.clientX,
                o = e.clientY;
              if (0 === r) {
                var a = { x: n, y: o },
                  l = t();
                if ("DRAGGING" === l.type)
                  return e.preventDefault(), void l.actions.move(a);
                "PENDING" !== l.type && le(!1);
                var u = l.point;
                if (
                  ((c = u),
                  (s = a),
                  Math.abs(s.x - c.x) >= 5 || Math.abs(s.y - c.y) >= 5)
                ) {
                  var c, s;
                  e.preventDefault();
                  var d = l.actions.fluidLift(a);
                  i({ type: "DRAGGING", actions: d });
                }
              }
            },
          },
          {
            eventName: "mouseup",
            fn: function (e) {
              var i = t();
              "DRAGGING" === i.type
                ? (e.preventDefault(),
                  i.actions.drop({ shouldBlockNextClick: !0 }),
                  n())
                : r();
            },
          },
          {
            eventName: "mousedown",
            fn: function (e) {
              "DRAGGING" === t().type && e.preventDefault(), r();
            },
          },
          {
            eventName: "keydown",
            fn: function (e) {
              if ("PENDING" !== t().type)
                return 27 === e.keyCode
                  ? (e.preventDefault(), void r())
                  : void kt(e);
              r();
            },
          },
          { eventName: "resize", fn: r },
          {
            eventName: "scroll",
            options: { passive: !0, capture: !1 },
            fn: function () {
              "PENDING" === t().type && r();
            },
          },
          {
            eventName: "webkitmouseforcedown",
            fn: function (e) {
              var n = t();
              "IDLE" === n.type && le(!1),
                n.actions.shouldRespectForcePress() ? r() : e.preventDefault();
            },
          },
          { eventName: Wt, fn: r },
        ];
      }
      function qt() {}
      var Vt =
        (((Ut = {})[34] = !0), (Ut[33] = !0), (Ut[36] = !0), (Ut[35] = !0), Ut);
      function Kt(e, r) {
        function n() {
          r(), e.cancel();
        }
        return [
          {
            eventName: "keydown",
            fn: function (t) {
              return 27 === t.keyCode
                ? (t.preventDefault(), void n())
                : 32 === t.keyCode
                  ? (t.preventDefault(), r(), void e.drop())
                  : 40 === t.keyCode
                    ? (t.preventDefault(), void e.moveDown())
                    : 38 === t.keyCode
                      ? (t.preventDefault(), void e.moveUp())
                      : 39 === t.keyCode
                        ? (t.preventDefault(), void e.moveRight())
                        : 37 === t.keyCode
                          ? (t.preventDefault(), void e.moveLeft())
                          : void (Vt[t.keyCode] ? t.preventDefault() : kt(t));
            },
          },
          { eventName: "mousedown", fn: n },
          { eventName: "mouseup", fn: n },
          { eventName: "click", fn: n },
          { eventName: "touchstart", fn: n },
          { eventName: "resize", fn: n },
          { eventName: "wheel", fn: n, options: { passive: !0 } },
          { eventName: Wt, fn: n },
        ];
      }
      var zt = { type: "IDLE" };
      var Yt = {
        input: !0,
        button: !0,
        textarea: !0,
        select: !0,
        option: !0,
        optgroup: !0,
        video: !0,
        audio: !0,
      };
      function Jt(e, r) {
        if (null == r) return !1;
        if (Boolean(Yt[r.tagName.toLowerCase()])) return !0;
        var n = r.getAttribute("contenteditable");
        return "true" === n || "" === n || (r !== e && Jt(e, r.parentElement));
      }
      function Xt(e, r) {
        var n = It(r);
        return !!Et(n) && Jt(e, n);
      }
      var $t = function (e) {
        return (0, J.l)(e.getBoundingClientRect()).center;
      };
      var Qt = (function () {
        var e = "matches";
        return "undefined" == typeof document
          ? e
          : Re([e, "msMatchesSelector", "webkitMatchesSelector"], function (e) {
              return e in Element.prototype;
            }) || e;
      })();
      function Zt(e, r) {
        return null == e ? null : e[Qt](r) ? e : Zt(e.parentElement, r);
      }
      function ei(e, r) {
        return e.closest ? e.closest(r) : Zt(e, r);
      }
      function ri(e, r) {
        if (!e || e === document || e === window) return null;
        var n = ei(e, r);
        return n || ri(e.getRootNode().host, r);
      }
      function ni(e, r) {
        var n = It(r);
        if (
          !(function (e) {
            return e instanceof xt(e).Element;
          })(n)
        )
          return null;
        var t = (function (e) {
            return "[" + dt.contextId + '="' + e + '"]';
          })(e),
          i = ri(n, t);
        return i && Et(i) ? i : null;
      }
      function ti(e) {
        e.preventDefault();
      }
      function ii(e) {
        var r = e.expected,
          n = e.phase,
          t = e.isLockActive;
        e.shouldWarn;
        return !!t() && r === n;
      }
      function oi(e) {
        var r = e.lockAPI,
          n = e.store,
          t = e.registry,
          i = e.draggableId;
        if (r.isClaimed()) return !1;
        var o = t.draggable.findById(i);
        return !!o && !!o.options.isEnabled && !!Wn(n.getState(), i);
      }
      function ai(e) {
        var r = e.lockAPI,
          n = e.contextId,
          t = e.store,
          i = e.registry,
          a = e.draggableId,
          l = e.forceSensorStop,
          u = e.sourceEvent;
        if (!oi({ lockAPI: r, store: t, registry: i, draggableId: a }))
          return null;
        var c,
          s,
          d = i.draggable.getById(a),
          p = (function (e, r, n) {
            var t = Dt(n, "[" + pt.contextId + '="' + e + '"]', function (e) {
              return e.getAttribute(pt.id) === r;
            });
            return t && Et(t) ? t : null;
          })(
            n,
            d.descriptor.id,
            ((s = (c = u) && c.composedPath && c.composedPath()[0]) &&
              s.getRootNode()) ||
              document,
          );
        if (!p) return null;
        if (u && !d.options.canDragInteractiveElements && Xt(p, u)) return null;
        var f = r.claim(l || ne),
          g = "PRE_DRAG";
        function v() {
          return d.options.shouldRespectForcePress;
        }
        function m() {
          return r.isActive(f);
        }
        var b = function (e, r) {
          ii({ expected: e, phase: g, isLockActive: m, shouldWarn: !0 }) &&
            t.dispatch(r());
        }.bind(null, "DRAGGING");
        function h(e) {
          function n() {
            r.release(), (g = "COMPLETED");
          }
          function i(r, i) {
            if (
              (void 0 === i && (i = { shouldBlockNextClick: !1 }),
              e.cleanup(),
              i.shouldBlockNextClick)
            ) {
              var o = te(window, [
                {
                  eventName: "click",
                  fn: ti,
                  options: { once: !0, passive: !1, capture: !0 },
                },
              ]);
              setTimeout(o);
            }
            n(), t.dispatch(on({ reason: r }));
          }
          return (
            "PRE_DRAG" !== g && (n(), "PRE_DRAG" !== g && le(!1)),
            t.dispatch(Vr(e.liftActionArgs)),
            (g = "DRAGGING"),
            (0, o.A)(
              {
                isActive: function () {
                  return ii({
                    expected: "DRAGGING",
                    phase: g,
                    isLockActive: m,
                    shouldWarn: !1,
                  });
                },
                shouldRespectForcePress: v,
                drop: function (e) {
                  return i("DROP", e);
                },
                cancel: function (e) {
                  return i("CANCEL", e);
                },
              },
              e.actions,
            )
          );
        }
        return {
          isActive: function () {
            return ii({
              expected: "PRE_DRAG",
              phase: g,
              isLockActive: m,
              shouldWarn: !1,
            });
          },
          shouldRespectForcePress: v,
          fluidLift: function (e) {
            var r = (0, ee.A)(function (e) {
                b(function () {
                  return $r({ client: e });
                });
              }),
              n = h({
                liftActionArgs: {
                  id: a,
                  clientSelection: e,
                  movementMode: "FLUID",
                },
                cleanup: function () {
                  return r.cancel();
                },
                actions: { move: r },
              });
            return (0, o.A)({}, n, { move: r });
          },
          snapLift: function () {
            var e = {
              moveUp: function () {
                return b(Qr);
              },
              moveRight: function () {
                return b(en);
              },
              moveDown: function () {
                return b(Zr);
              },
              moveLeft: function () {
                return b(rn);
              },
            };
            return h({
              liftActionArgs: {
                id: a,
                clientSelection: $t(p),
                movementMode: "SNAP",
              },
              cleanup: ne,
              actions: e,
            });
          },
          abort: function () {
            ii({
              expected: "PRE_DRAG",
              phase: g,
              isLockActive: m,
              shouldWarn: !0,
            }) && r.release();
          },
        };
      }
      var li = [
        function (e) {
          var r = (0, t.useRef)(Ht),
            n = (0, t.useRef)(ne),
            i = (0, Y.Kr)(
              function () {
                return {
                  eventName: "mousedown",
                  fn: function (r) {
                    if (
                      !r.defaultPrevented &&
                      0 === r.button &&
                      !(r.ctrlKey || r.metaKey || r.shiftKey || r.altKey)
                    ) {
                      var t = e.findClosestDraggableId(r);
                      if (t) {
                        var i = e.tryGetLock(t, l, { sourceEvent: r });
                        if (i) {
                          r.preventDefault();
                          var o = { x: r.clientX, y: r.clientY };
                          n.current(), s(i, o);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            o = (0, Y.Kr)(
              function () {
                return {
                  eventName: "webkitmouseforcewillbegin",
                  fn: function (r) {
                    if (!r.defaultPrevented) {
                      var n = e.findClosestDraggableId(r);
                      if (n) {
                        var t = e.findOptionsForDraggable(n);
                        t &&
                          (t.shouldRespectForcePress ||
                            (e.canGetLock(n) && r.preventDefault()));
                      }
                    }
                  },
                };
              },
              [e],
            ),
            a = (0, Y.hb)(
              function () {
                n.current = te(e.getWindow(), [o, i], {
                  passive: !1,
                  capture: !0,
                });
              },
              [e, o, i],
            ),
            l = (0, Y.hb)(
              function () {
                "IDLE" !== r.current.type &&
                  ((r.current = Ht), n.current(), a());
              },
              [a],
            ),
            u = (0, Y.hb)(
              function () {
                var e = r.current;
                l(),
                  "DRAGGING" === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  "PENDING" === e.type && e.actions.abort();
              },
              [l],
            ),
            c = (0, Y.hb)(
              function () {
                var t = jt({
                  cancel: u,
                  completed: l,
                  getPhase: function () {
                    return r.current;
                  },
                  setPhase: function (e) {
                    r.current = e;
                  },
                });
                n.current = te(e.getWindow(), t, { capture: !0, passive: !1 });
              },
              [e, u, l],
            ),
            s = (0, Y.hb)(
              function (e, n) {
                "IDLE" !== r.current.type && le(!1),
                  (r.current = { type: "PENDING", point: n, actions: e }),
                  c();
              },
              [c],
            );
          bt(
            function () {
              return (
                a(),
                function () {
                  n.current();
                }
              );
            },
            [a],
          );
        },
        function (e) {
          var r = (0, t.useRef)(qt),
            n = (0, Y.Kr)(
              function () {
                return {
                  eventName: "keydown",
                  fn: function (n) {
                    if (!n.defaultPrevented && 32 === n.keyCode) {
                      var t = e.findClosestDraggableId(n);
                      if (t) {
                        var o = e.tryGetLock(t, u, { sourceEvent: n });
                        if (o) {
                          n.preventDefault();
                          var a = !0,
                            l = o.snapLift();
                          r.current(),
                            (r.current = te(e.getWindow(), Kt(l, u), {
                              capture: !0,
                              passive: !1,
                            }));
                        }
                      }
                    }
                    function u() {
                      a || le(!1), (a = !1), r.current(), i();
                    }
                  },
                };
              },
              [e],
            ),
            i = (0, Y.hb)(
              function () {
                r.current = te(e.getWindow(), [n], {
                  passive: !1,
                  capture: !0,
                });
              },
              [e, n],
            );
          bt(
            function () {
              return (
                i(),
                function () {
                  r.current();
                }
              );
            },
            [i],
          );
        },
        function (e) {
          var r = (0, t.useRef)(zt),
            n = (0, t.useRef)(ne),
            i = (0, Y.hb)(function () {
              return r.current;
            }, []),
            o = (0, Y.hb)(function (e) {
              r.current = e;
            }, []),
            a = (0, Y.Kr)(
              function () {
                return {
                  eventName: "touchstart",
                  fn: function (r) {
                    if (!r.defaultPrevented) {
                      var t = e.findClosestDraggableId(r);
                      if (t) {
                        var i = e.tryGetLock(t, u, { sourceEvent: r });
                        if (i) {
                          var o = r.touches[0],
                            a = { x: o.clientX, y: o.clientY };
                          n.current(), p(i, a);
                        }
                      }
                    }
                  },
                };
              },
              [e],
            ),
            l = (0, Y.hb)(
              function () {
                n.current = te(e.getWindow(), [a], {
                  capture: !0,
                  passive: !1,
                });
              },
              [e, a],
            ),
            u = (0, Y.hb)(
              function () {
                var e = r.current;
                "IDLE" !== e.type &&
                  ("PENDING" === e.type && clearTimeout(e.longPressTimerId),
                  o(zt),
                  n.current(),
                  l());
              },
              [l, o],
            ),
            c = (0, Y.hb)(
              function () {
                var e = r.current;
                u(),
                  "DRAGGING" === e.type &&
                    e.actions.cancel({ shouldBlockNextClick: !0 }),
                  "PENDING" === e.type && e.actions.abort();
              },
              [u],
            ),
            s = (0, Y.hb)(
              function () {
                var r = { capture: !0, passive: !1 },
                  t = { cancel: c, completed: u, getPhase: i },
                  o = te(
                    e.getWindow(),
                    (function (e) {
                      var r = e.cancel,
                        n = e.completed,
                        t = e.getPhase;
                      return [
                        {
                          eventName: "touchmove",
                          options: { capture: !1 },
                          fn: function (e) {
                            var n = t();
                            if ("DRAGGING" === n.type) {
                              n.hasMoved = !0;
                              var i = e.touches[0],
                                o = { x: i.clientX, y: i.clientY };
                              e.preventDefault(), n.actions.move(o);
                            } else r();
                          },
                        },
                        {
                          eventName: "touchend",
                          fn: function (e) {
                            var i = t();
                            "DRAGGING" === i.type
                              ? (e.preventDefault(),
                                i.actions.drop({ shouldBlockNextClick: !0 }),
                                n())
                              : r();
                          },
                        },
                        {
                          eventName: "touchcancel",
                          fn: function (e) {
                            "DRAGGING" === t().type
                              ? (e.preventDefault(), r())
                              : r();
                          },
                        },
                        {
                          eventName: "touchforcechange",
                          fn: function (e) {
                            var n = t();
                            "IDLE" === n.type && le(!1);
                            var i = e.touches[0];
                            if (i && i.force >= 0.15) {
                              var o = n.actions.shouldRespectForcePress();
                              if ("PENDING" !== n.type)
                                return o
                                  ? n.hasMoved
                                    ? void e.preventDefault()
                                    : void r()
                                  : void e.preventDefault();
                              o && r();
                            }
                          },
                        },
                        { eventName: Wt, fn: r },
                      ];
                    })(t),
                    r,
                  ),
                  a = te(
                    e.getWindow(),
                    (function (e) {
                      var r = e.cancel,
                        n = e.getPhase;
                      return [
                        { eventName: "orientationchange", fn: r },
                        { eventName: "resize", fn: r },
                        {
                          eventName: "contextmenu",
                          fn: function (e) {
                            e.preventDefault();
                          },
                        },
                        {
                          eventName: "keydown",
                          fn: function (e) {
                            "DRAGGING" === n().type
                              ? (27 === e.keyCode && e.preventDefault(), r())
                              : r();
                          },
                        },
                        { eventName: Wt, fn: r },
                      ];
                    })(t),
                    r,
                  );
                n.current = function () {
                  o(), a();
                };
              },
              [e, c, i, u],
            ),
            d = (0, Y.hb)(
              function () {
                var e = i();
                "PENDING" !== e.type && le(!1);
                var r = e.actions.fluidLift(e.point);
                o({ type: "DRAGGING", actions: r, hasMoved: !1 });
              },
              [i, o],
            ),
            p = (0, Y.hb)(
              function (e, r) {
                "IDLE" !== i().type && le(!1);
                var n = setTimeout(d, 120);
                o({
                  type: "PENDING",
                  point: r,
                  actions: e,
                  longPressTimerId: n,
                }),
                  s();
              },
              [s, i, o, d],
            );
          bt(
            function () {
              return (
                l(),
                function () {
                  n.current();
                  var e = i();
                  "PENDING" === e.type &&
                    (clearTimeout(e.longPressTimerId), o(zt));
                }
              );
            },
            [i, l, o],
          ),
            bt(
              function () {
                return te(e.getWindow(), [
                  {
                    eventName: "touchmove",
                    fn: function () {},
                    options: { capture: !1, passive: !1 },
                  },
                ]);
              },
              [e],
            );
        },
      ];
      function ui(e) {
        var r = e.contextId,
          n = e.store,
          i = e.registry,
          o = e.customSensors,
          a = e.enableDefaultSensors,
          l = e.windowToUse,
          u = [].concat(a ? li : [], o || []),
          c = (0, t.useState)(function () {
            return (function () {
              var e = null;
              function r() {
                e || le(!1), (e = null);
              }
              return {
                isClaimed: function () {
                  return Boolean(e);
                },
                isActive: function (r) {
                  return r === e;
                },
                claim: function (r) {
                  e && le(!1);
                  var n = { abandon: r };
                  return (e = n), n;
                },
                release: r,
                tryAbandon: function () {
                  e && (e.abandon(), r());
                },
              };
            })();
          })[0],
          s = (0, Y.hb)(
            function (e, r) {
              e.isDragging && !r.isDragging && c.tryAbandon();
            },
            [c],
          );
        bt(
          function () {
            var e = n.getState();
            return n.subscribe(function () {
              var r = n.getState();
              s(e, r), (e = r);
            });
          },
          [c, n, s],
        ),
          bt(
            function () {
              return c.tryAbandon;
            },
            [c.tryAbandon],
          );
        var d = (0, Y.hb)(
            function (e) {
              return oi({ lockAPI: c, registry: i, store: n, draggableId: e });
            },
            [c, i, n],
          ),
          p = (0, Y.hb)(
            function (e, t, o) {
              return ai({
                lockAPI: c,
                registry: i,
                contextId: r,
                store: n,
                draggableId: e,
                forceSensorStop: t,
                sourceEvent: o && o.sourceEvent ? o.sourceEvent : null,
              });
            },
            [r, c, i, n],
          ),
          f = (0, Y.hb)(
            function (e) {
              return (function (e, r) {
                var n = ni(e, r);
                return n ? n.getAttribute(dt.draggableId) : null;
              })(r, e);
            },
            [r],
          ),
          g = (0, Y.hb)(
            function (e) {
              var r = i.draggable.findById(e);
              return r ? r.options : null;
            },
            [i.draggable],
          ),
          v = (0, Y.hb)(
            function () {
              c.isClaimed() &&
                (c.tryAbandon(),
                "IDLE" !== n.getState().phase && n.dispatch(nn()));
            },
            [c, n],
          ),
          m = (0, Y.hb)(c.isClaimed, [c]),
          b = (0, Y.hb)(
            function () {
              return l;
            },
            [l],
          ),
          h = (0, Y.Kr)(
            function () {
              return {
                canGetLock: d,
                tryGetLock: p,
                findClosestDraggableId: f,
                findOptionsForDraggable: g,
                tryReleaseLock: v,
                isLockClaimed: m,
                getWindow: b,
              };
            },
            [d, p, f, g, v, m, b],
          );
        Lt();
        for (var y = 0; y < u.length; y++) u[y](h);
      }
      var ci = function (e) {
        return {
          onBeforeCapture: e.onBeforeCapture,
          onBeforeDragStart: e.onBeforeDragStart,
          onDragStart: e.onDragStart,
          onDragEnd: e.onDragEnd,
          onDragUpdate: e.onDragUpdate,
        };
      };
      function si(e) {
        return e.current || le(!1), e.current;
      }
      function di(e) {
        var r = e.contextId,
          n = e.setCallbacks,
          i = e.sensors,
          l = e.nonce,
          u = e.dragHandleUsageInstructions,
          c = (0, t.useRef)(null),
          [s, d] = t.useState(),
          p = t.useMemo(
            function () {
              return s ? s.ownerDocument.defaultView : window;
            },
            [s],
          );
        Gt();
        var g = Mt(e),
          v = (0, Y.hb)(
            function () {
              return ci(g.current);
            },
            [g],
          ),
          m = (function (e) {
            var r = (0, Y.Kr)(
                function () {
                  return Nt(e);
                },
                [e],
              ),
              n = (0, t.useRef)(null);
            return (
              (0, t.useEffect)(
                function () {
                  var e = document.createElement("div");
                  return (
                    (n.current = e),
                    (e.id = r),
                    e.setAttribute("aria-live", "assertive"),
                    e.setAttribute("aria-atomic", "true"),
                    (0, o.A)(e.style, Pt),
                    St().appendChild(e),
                    function () {
                      setTimeout(function () {
                        var r = St();
                        r.contains(e) && r.removeChild(e),
                          e === n.current && (n.current = null);
                      });
                    }
                  );
                },
                [r],
              ),
              (0, Y.hb)(function (e) {
                var r = n.current;
                r && (r.textContent = e);
              }, [])
            );
          })(r),
          b = (function (e) {
            var r = e.contextId,
              n = e.text,
              i = Ot("hidden-text", { separator: "-" }),
              o = (0, Y.Kr)(
                function () {
                  return (
                    "rbd-hidden-text-" +
                    (e = { contextId: r, uniqueId: i }).contextId +
                    "-" +
                    e.uniqueId
                  );
                  var e;
                },
                [i, r],
              );
            return (
              (0, t.useEffect)(
                function () {
                  var e = document.createElement("div");
                  return (
                    (e.id = o),
                    (e.textContent = n),
                    (e.style.display = "none"),
                    St().appendChild(e),
                    function () {
                      var r = St();
                      r.contains(e) && r.removeChild(e);
                    }
                  );
                },
                [o, n],
              ),
              o
            );
          })({ contextId: r, text: u }),
          h = (function (e, r, n) {
            var i = (0, Y.Kr)(
                function () {
                  return mt(e);
                },
                [e],
              ),
              o = (0, t.useRef)(null),
              a = (0, t.useRef)(null),
              l = (0, Y.hb)(
                Z(function (e) {
                  var r = a.current;
                  r || le(!1), (r.textContent = e);
                }),
                [],
              ),
              u = (0, Y.hb)(function (e) {
                var r = o.current;
                r || le(!1), (r.textContent = e);
              }, []);
            bt(
              function () {
                (o.current || a.current) && le(!1);
                var t = yt(r),
                  c = yt(r);
                (o.current = t),
                  (a.current = c),
                  t.setAttribute(st + "-always", e),
                  c.setAttribute(st + "-dynamic", e);
                var s = ht(n);
                return (
                  s.appendChild(t),
                  s.appendChild(c),
                  u(i.always),
                  l(i.resting),
                  function () {
                    var e = function (e) {
                      var r = e.current;
                      r || le(!1), s.removeChild(r), (e.current = null);
                    };
                    e(o), e(a);
                  }
                );
              },
              [r, u, l, i.always, i.resting, e, n],
            );
            var c = (0, Y.hb)(
                function () {
                  return l(i.dragging);
                },
                [l, i.dragging],
              ),
              s = (0, Y.hb)(
                function (e) {
                  l("DROP" !== e ? i.userCancel : i.dropAnimating);
                },
                [l, i.dropAnimating, i.userCancel],
              ),
              d = (0, Y.hb)(
                function () {
                  a.current && l(i.resting);
                },
                [l, i.resting],
              );
            return (0, Y.Kr)(
              function () {
                return { dragging: c, dropping: s, resting: d };
              },
              [c, s, d],
            );
          })(r, l, e.stylesInsertionPoint),
          y = (0, Y.hb)(function (e) {
            si(c).dispatch(e);
          }, []),
          I = (0, Y.Kr)(
            function () {
              return (0, a.zH)(
                {
                  publishWhileDragging: Kr,
                  updateDroppableScroll: Yr,
                  updateDroppableIsEnabled: Jr,
                  updateDroppableIsCombineEnabled: Xr,
                  collectionStarting: zr,
                },
                y,
              );
            },
            [y],
          ),
          D = (function () {
            var e = (0, Y.Kr)(At, []);
            return (
              (0, t.useEffect)(
                function () {
                  return function () {
                    requestAnimationFrame(e.clean);
                  };
                },
                [e],
              ),
              e
            );
          })(),
          x = (0, Y.Kr)(
            function () {
              return kn(p, D, I);
            },
            [p, D, I],
          ),
          E = (0, Y.Kr)(
            function () {
              return ct(
                (0, o.A)(
                  { scrollWindow: Un, scrollDroppable: x.scrollDroppable },
                  (0, a.zH)({ move: $r }, y),
                ),
              );
            },
            [x.scrollDroppable, y],
          ),
          w = (function (e) {
            var r = (0, t.useRef)({}),
              n = (0, t.useRef)(null),
              i = (0, t.useRef)(null),
              o = (0, t.useRef)(!1),
              a = (0, Y.hb)(function (e, n) {
                var t = { id: e, focus: n };
                return (
                  (r.current[e] = t),
                  function () {
                    var n = r.current;
                    n[e] !== t && delete n[e];
                  }
                );
              }, []),
              l = (0, Y.hb)(
                function (r) {
                  var n = wt(e, r);
                  n && n !== document.activeElement && n.focus();
                },
                [e],
              ),
              u = (0, Y.hb)(function (e, r) {
                n.current === e && (n.current = r);
              }, []),
              c = (0, Y.hb)(
                function () {
                  i.current ||
                    (o.current &&
                      (i.current = requestAnimationFrame(function () {
                        i.current = null;
                        var e = n.current;
                        e && l(e);
                      })));
                },
                [l],
              ),
              s = (0, Y.hb)(function (e) {
                n.current = null;
                var r = document.activeElement;
                r && r.getAttribute(dt.draggableId) === e && (n.current = e);
              }, []);
            return (
              bt(function () {
                return (
                  (o.current = !0),
                  function () {
                    o.current = !1;
                    var e = i.current;
                    e && cancelAnimationFrame(e);
                  }
                );
              }, []),
              (0, Y.Kr)(
                function () {
                  return {
                    register: a,
                    tryRecordFocus: s,
                    tryRestoreFocusRecorded: c,
                    tryShiftRecord: u,
                  };
                },
                [a, s, c, u],
              )
            );
          })(r),
          A = (0, Y.Kr)(
            function () {
              return Bn({
                announce: m,
                autoScroller: E,
                dimensionMarshal: x,
                focusMarshal: w,
                getResponders: v,
                styleMarshal: h,
              });
            },
            [m, E, x, w, v, h],
          );
        s && (c.current = A);
        var C = (0, Y.hb)(function () {
            var e = si(c);
            "IDLE" !== e.getState().phase && e.dispatch(nn());
          }, []),
          S = (0, Y.hb)(function () {
            var e = si(c).getState();
            return e.isDragging || "DROP_ANIMATING" === e.phase;
          }, []);
        n(
          (0, Y.Kr)(
            function () {
              return { isDragging: S, tryAbort: C };
            },
            [S, C],
          ),
        );
        var P = (0, Y.hb)(function (e) {
            return Wn(si(c).getState(), e);
          }, []),
          N = (0, Y.hb)(function () {
            return wr(si(c).getState());
          }, []),
          R = (0, Y.Kr)(
            function () {
              return {
                marshal: x,
                focus: w,
                contextId: r,
                canLift: P,
                isMovementAllowed: N,
                dragHandleUsageInstructionsId: b,
                registry: D,
              };
            },
            [r, x, b, w, P, N, D],
          );
        return (
          ui({
            contextId: r,
            store: A,
            registry: D,
            customSensors: i,
            enableDefaultSensors: !1 !== e.enableDefaultSensors,
            windowToUse: p,
          }),
          (0, t.useEffect)(
            function () {
              return C;
            },
            [C],
          ),
          t.createElement(
            Tt.Provider,
            { value: R },
            t.createElement("div", { ref: d }),
            s && t.createElement(f, { context: Ct, store: A }, e.children),
          )
        );
      }
      var pi = 0;
      function fi(e) {
        var r = (0, Y.Kr)(function () {
            return "" + pi++;
          }, []),
          n = e.dragHandleUsageInstructions || fe.dragHandleUsageInstructions;
        return t.createElement(ue, null, function (i) {
          return t.createElement(
            di,
            {
              nonce: e.nonce,
              contextId: r,
              setCallbacks: i,
              dragHandleUsageInstructions: n,
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
      var gi = function (e) {
          return function (r) {
            return e === r;
          };
        },
        vi = gi("scroll"),
        mi = gi("auto"),
        bi =
          (gi("visible"),
          function (e, r) {
            return r(e.overflowX) || r(e.overflowY);
          }),
        hi = function (e) {
          var r = e.ownerDocument.defaultView.getComputedStyle(e),
            n = { overflowX: r.overflowX, overflowY: r.overflowY };
          return bi(n, vi) || bi(n, mi);
        },
        yi = function e(r) {
          return null == r ||
            r === document.body ||
            r === document.documentElement
            ? null
            : hi(r)
              ? r
              : e(r.parentElement);
        },
        Ii = function (e) {
          return { x: e.scrollLeft, y: e.scrollTop };
        },
        Di = function e(r) {
          return (
            !!r &&
            ("fixed" ===
              r.ownerDocument.defaultView.getComputedStyle(r).position ||
              e(r.parentElement))
          );
        },
        xi = function (e) {
          var r = e.ref,
            n = e.descriptor,
            t = e.env,
            i = e.windowScroll,
            o = e.direction,
            a = e.isDropDisabled,
            l = e.isCombineEnabled,
            u = e.shouldClipSubject,
            c = t.closestScrollable,
            s = (function (e, r) {
              var n = (0, J.YH)(e);
              if (!r) return n;
              if (e !== r) return n;
              var t = n.paddingBox.top - r.scrollTop,
                i = n.paddingBox.left - r.scrollLeft,
                o = t + r.scrollHeight,
                a = { top: t, right: i + r.scrollWidth, bottom: o, left: i },
                l = (0, J.fT)(a, n.border);
              return (0, J.ge)({
                borderBox: l,
                margin: n.margin,
                border: n.border,
                padding: n.padding,
              });
            })(r, c),
            d = (0, J.SQ)(s, i),
            p = (function () {
              if (!c) return null;
              var e = (0, J.YH)(c),
                r = {
                  scrollHeight: c.scrollHeight,
                  scrollWidth: c.scrollWidth,
                };
              return {
                client: e,
                page: (0, J.SQ)(e, i),
                scroll: Ii(c),
                scrollSize: r,
                shouldClipSubject: u,
              };
            })(),
            f = (function (e) {
              var r = e.descriptor,
                n = e.isEnabled,
                t = e.isCombineEnabled,
                i = e.isFixedOnPage,
                o = e.direction,
                a = e.client,
                l = e.page,
                u = e.closest,
                c = (function () {
                  if (!u) return null;
                  var e = u.scrollSize,
                    r = u.client,
                    n = On({
                      scrollHeight: e.scrollHeight,
                      scrollWidth: e.scrollWidth,
                      height: r.paddingBox.height,
                      width: r.paddingBox.width,
                    });
                  return {
                    pageMarginBox: u.page.marginBox,
                    frameClient: r,
                    scrollSize: e,
                    shouldClipSubject: u.shouldClipSubject,
                    scroll: {
                      initial: u.scroll,
                      current: u.scroll,
                      max: n,
                      diff: { value: ge, displacement: ge },
                    },
                  };
                })(),
                s = "vertical" === o ? Ke : ze;
              return {
                descriptor: r,
                isCombineEnabled: t,
                isFixedOnPage: i,
                axis: s,
                isEnabled: n,
                client: a,
                page: l,
                frame: c,
                subject: Ce({
                  page: l,
                  withPlaceholder: null,
                  axis: s,
                  frame: c,
                }),
              };
            })({
              descriptor: n,
              isEnabled: !a,
              isCombineEnabled: l,
              isFixedOnPage: t.isFixedOnPage,
              direction: o,
              client: s,
              page: d,
              closest: p,
            });
          return f;
        },
        Ei = { passive: !1 },
        wi = { passive: !0 },
        Ai = function (e) {
          return e.shouldPublishImmediately ? Ei : wi;
        };
      function Ci(e) {
        var r = (0, t.useContext)(e);
        return r || le(!1), r;
      }
      var Si = function (e) {
        return (e && e.env.closestScrollable) || null;
      };
      function Pi(e) {
        var r = (0, t.useRef)(null),
          n = Ci(Tt),
          i = Ot("droppable"),
          o = n.registry,
          a = n.marshal,
          l = Mt(e),
          u = (0, Y.Kr)(
            function () {
              return { id: e.droppableId, type: e.type, mode: e.mode };
            },
            [e.droppableId, e.mode, e.type],
          ),
          c = (0, t.useRef)(u),
          s = (0, Y.Kr)(
            function () {
              return Z(function (e, n) {
                r.current || le(!1);
                var t = { x: e, y: n };
                a.updateDroppableScroll(u.id, t);
              });
            },
            [u.id, a],
          ),
          d = (0, Y.hb)(function () {
            var e = r.current;
            return e && e.env.closestScrollable
              ? Ii(e.env.closestScrollable)
              : ge;
          }, []),
          p = (0, Y.hb)(
            function () {
              var e = d();
              s(e.x, e.y);
            },
            [d, s],
          ),
          f = (0, Y.Kr)(
            function () {
              return (0, ee.A)(p);
            },
            [p],
          ),
          g = (0, Y.hb)(
            function () {
              var e = r.current,
                n = Si(e);
              (e && n) || le(!1),
                e.scrollOptions.shouldPublishImmediately ? p() : f();
            },
            [f, p],
          ),
          v = (0, Y.hb)(
            function (e, t) {
              r.current && le(!1);
              var i = l.current,
                o = i.getDroppableRef();
              o || le(!1);
              var a = (function (e) {
                  return { closestScrollable: yi(e), isFixedOnPage: Di(e) };
                })(o),
                c = { ref: o, descriptor: u, env: a, scrollOptions: t };
              r.current = c;
              var s = xi({
                  ref: o,
                  descriptor: u,
                  env: a,
                  windowScroll: e,
                  direction: i.direction,
                  isDropDisabled: i.isDropDisabled,
                  isCombineEnabled: i.isCombineEnabled,
                  shouldClipSubject: !i.ignoreContainerClipping,
                }),
                d = a.closestScrollable;
              return (
                d &&
                  (d.setAttribute(gt.contextId, n.contextId),
                  d.addEventListener("scroll", g, Ai(c.scrollOptions))),
                s
              );
            },
            [n.contextId, u, g, l],
          ),
          m = (0, Y.hb)(function () {
            var e = r.current,
              n = Si(e);
            return (e && n) || le(!1), Ii(n);
          }, []),
          b = (0, Y.hb)(
            function () {
              var e = r.current;
              e || le(!1);
              var n = Si(e);
              (r.current = null),
                n &&
                  (f.cancel(),
                  n.removeAttribute(gt.contextId),
                  n.removeEventListener("scroll", g, Ai(e.scrollOptions)));
            },
            [g, f],
          ),
          h = (0, Y.hb)(function (e) {
            var n = r.current;
            n || le(!1);
            var t = Si(n);
            t || le(!1), (t.scrollTop += e.y), (t.scrollLeft += e.x);
          }, []),
          y = (0, Y.Kr)(
            function () {
              return {
                getDimensionAndWatchScroll: v,
                getScrollWhileDragging: m,
                dragStopped: b,
                scroll: h,
              };
            },
            [b, v, m, h],
          ),
          I = (0, Y.Kr)(
            function () {
              return { uniqueId: i, descriptor: u, callbacks: y };
            },
            [y, u, i],
          );
        bt(
          function () {
            return (
              (c.current = I.descriptor),
              o.droppable.register(I),
              function () {
                r.current && b(), o.droppable.unregister(I);
              }
            );
          },
          [y, u, b, I, a, o.droppable],
        ),
          bt(
            function () {
              r.current &&
                a.updateDroppableIsEnabled(c.current.id, !e.isDropDisabled);
            },
            [e.isDropDisabled, a],
          ),
          bt(
            function () {
              r.current &&
                a.updateDroppableIsCombineEnabled(
                  c.current.id,
                  e.isCombineEnabled,
                );
            },
            [e.isCombineEnabled, a],
          );
      }
      function Ni() {}
      var Ri = {
          width: 0,
          height: 0,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        Bi = function (e) {
          var r = e.isAnimatingOpenOnMount,
            n = e.placeholder,
            t = e.animate,
            i = (function (e) {
              var r = e.isAnimatingOpenOnMount,
                n = e.placeholder,
                t = e.animate;
              return r || "close" === t
                ? Ri
                : {
                    height: n.client.borderBox.height,
                    width: n.client.borderBox.width,
                    margin: n.client.margin,
                  };
            })({ isAnimatingOpenOnMount: r, placeholder: n, animate: t });
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
            transition: "none" !== t ? dn.placeholder : null,
          };
        };
      var Oi = t.memo(function (e) {
          var r = (0, t.useRef)(null),
            n = (0, Y.hb)(function () {
              r.current && (clearTimeout(r.current), (r.current = null));
            }, []),
            i = e.animate,
            o = e.onTransitionEnd,
            a = e.onClose,
            l = e.contextId,
            u = (0, t.useState)("open" === e.animate),
            c = u[0],
            s = u[1];
          (0, t.useEffect)(
            function () {
              return c
                ? "open" !== i
                  ? (n(), s(!1), Ni)
                  : r.current
                    ? Ni
                    : ((r.current = setTimeout(function () {
                        (r.current = null), s(!1);
                      })),
                      n)
                : Ni;
            },
            [i, c, n],
          );
          var d = (0, Y.hb)(
              function (e) {
                "height" === e.propertyName && (o(), "close" === i && a());
              },
              [i, a, o],
            ),
            p = Bi({
              isAnimatingOpenOnMount: c,
              animate: e.animate,
              placeholder: e.placeholder,
            });
          return t.createElement(e.placeholder.tagName, {
            style: p,
            "data-rbd-placeholder-context-id": l,
            onTransitionEnd: d,
            ref: e.innerRef,
          });
        }),
        Ti = t.createContext(null);
      var Li = (function (e) {
          function r() {
            for (
              var r, n = arguments.length, t = new Array(n), i = 0;
              i < n;
              i++
            )
              t[i] = arguments[i];
            return (
              ((r = e.call.apply(e, [this].concat(t)) || this).state = {
                isVisible: Boolean(r.props.on),
                data: r.props.on,
                animate: r.props.shouldAnimate && r.props.on ? "open" : "none",
              }),
              (r.onClose = function () {
                "close" === r.state.animate && r.setState({ isVisible: !1 });
              }),
              r
            );
          }
          return (
            (0, i.A)(r, e),
            (r.getDerivedStateFromProps = function (e, r) {
              return e.shouldAnimate
                ? e.on
                  ? { isVisible: !0, data: e.on, animate: "open" }
                  : r.isVisible
                    ? { isVisible: !0, data: r.data, animate: "close" }
                    : { isVisible: !1, animate: "close", data: null }
                : { isVisible: Boolean(e.on), data: e.on, animate: "none" };
            }),
            (r.prototype.render = function () {
              if (!this.state.isVisible) return null;
              var e = {
                onClose: this.onClose,
                data: this.state.data,
                animate: this.state.animate,
              };
              return this.props.children(e);
            }),
            r
          );
        })(t.PureComponent),
        Gi = 5e3,
        Mi = 4500,
        _i = function (e, r) {
          return r ? dn.drop(r.duration) : e ? dn.snap : dn.fluid;
        },
        Fi = function (e, r) {
          return e ? (r ? un.drop : un.combining) : null;
        };
      function ki(e) {
        return "DRAGGING" === e.type
          ? ((t = (n = e).dimension.client),
            (i = n.offset),
            (o = n.combineWith),
            (a = n.dropping),
            (l = Boolean(o)),
            (u = (function (e) {
              return null != e.forceShouldAnimate
                ? e.forceShouldAnimate
                : "SNAP" === e.mode;
            })(n)),
            (c = Boolean(a)),
            (s = c ? gn(i, l) : fn(i)),
            {
              position: "fixed",
              top: t.marginBox.top,
              left: t.marginBox.left,
              boxSizing: "border-box",
              width: t.borderBox.width,
              height: t.borderBox.height,
              transition: _i(u, a),
              transform: s,
              opacity: Fi(l, c),
              zIndex: c ? Mi : Gi,
              pointerEvents: "none",
            })
          : {
              transform: fn((r = e).offset),
              transition: r.shouldAnimateDisplacement ? null : "none",
            };
        var r, n, t, i, o, a, l, u, c, s;
      }
      function Wi(e) {
        var r = Ot("draggable"),
          n = e.descriptor,
          i = e.registry,
          o = e.getDraggableRef,
          a = e.canDragInteractiveElements,
          l = e.shouldRespectForcePress,
          u = e.isEnabled,
          c = (0, Y.Kr)(
            function () {
              return {
                canDragInteractiveElements: a,
                shouldRespectForcePress: l,
                isEnabled: u,
              };
            },
            [a, u, l],
          ),
          s = (0, Y.hb)(
            function (e) {
              var r = o();
              return (
                r || le(!1),
                (function (e, r, n) {
                  void 0 === n && (n = ge);
                  var t = window.getComputedStyle(r),
                    i = r.getBoundingClientRect(),
                    o = (0, J.a)(i, t),
                    a = (0, J.SQ)(o, n);
                  return {
                    descriptor: e,
                    placeholder: {
                      client: o,
                      tagName: r.tagName.toLowerCase(),
                      display: t.display,
                    },
                    displaceBy: { x: o.marginBox.width, y: o.marginBox.height },
                    client: o,
                    page: a,
                  };
                })(n, r, e)
              );
            },
            [n, o],
          ),
          d = (0, Y.Kr)(
            function () {
              return {
                uniqueId: r,
                descriptor: n,
                options: c,
                getDimension: s,
              };
            },
            [n, s, c, r],
          ),
          p = (0, t.useRef)(d),
          f = (0, t.useRef)(!0);
        bt(
          function () {
            return (
              i.draggable.register(p.current),
              function () {
                return i.draggable.unregister(p.current);
              }
            );
          },
          [i.draggable],
        ),
          bt(
            function () {
              if (f.current) f.current = !1;
              else {
                var e = p.current;
                (p.current = d), i.draggable.update(d, e);
              }
            },
            [d, i.draggable],
          );
      }
      function Ui(e, r, n) {
        Gt();
      }
      function Hi(e) {
        e.preventDefault();
      }
      var ji = function (e, r) {
          return e === r;
        },
        qi = function (e) {
          var r = e.combine,
            n = e.destination;
          return n ? n.droppableId : r ? r.droppableId : null;
        };
      function Vi(e) {
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
      var Ki = {
        mapped: {
          type: "SECONDARY",
          offset: ge,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: Vi(null),
        },
      };
      var zi = V(
        function () {
          var e,
            r,
            n,
            t =
              ((e = Z(function (e, r) {
                return { x: e, y: r };
              })),
              (r = Z(function (e, r, n, t, i) {
                return {
                  isDragging: !0,
                  isClone: r,
                  isDropAnimating: Boolean(i),
                  dropAnimation: i,
                  mode: e,
                  draggingOver: n,
                  combineWith: t,
                  combineTargetFor: null,
                };
              })),
              (n = Z(function (e, n, t, i, o, a, l) {
                return {
                  mapped: {
                    type: "DRAGGING",
                    dropping: null,
                    draggingOver: o,
                    combineWith: a,
                    mode: n,
                    offset: e,
                    dimension: t,
                    forceShouldAnimate: l,
                    snapshot: r(n, i, o, a, null),
                  },
                };
              })),
              function (t, i) {
                if (t.isDragging) {
                  if (t.critical.draggable.id !== i.draggableId) return null;
                  var o = t.current.client.offset,
                    a = t.dimensions.draggables[i.draggableId],
                    l = xr(t.impact),
                    u =
                      (s = t.impact).at && "COMBINE" === s.at.type
                        ? s.at.combine.draggableId
                        : null,
                    c = t.forceShouldAnimate;
                  return n(e(o.x, o.y), t.movementMode, a, i.isClone, l, u, c);
                }
                var s;
                if ("DROP_ANIMATING" === t.phase) {
                  var d = t.completed;
                  if (d.result.draggableId !== i.draggableId) return null;
                  var p = i.isClone,
                    f = t.dimensions.draggables[i.draggableId],
                    g = d.result,
                    v = g.mode,
                    m = qi(g),
                    b = (function (e) {
                      return e.combine ? e.combine.draggableId : null;
                    })(g),
                    h = {
                      duration: t.dropDuration,
                      curve: ln,
                      moveTo: t.newHomeClientOffset,
                      opacity: b ? un.drop : null,
                      scale: b ? cn.drop : null,
                    };
                  return {
                    mapped: {
                      type: "DRAGGING",
                      offset: t.newHomeClientOffset,
                      dimension: f,
                      dropping: h,
                      draggingOver: m,
                      combineWith: b,
                      mode: v,
                      forceShouldAnimate: null,
                      snapshot: r(v, p, m, b, h),
                    },
                  };
                }
                return null;
              }),
            i = (function () {
              var e = Z(function (e, r) {
                  return { x: e, y: r };
                }),
                r = Z(Vi),
                n = Z(function (e, n, t) {
                  return (
                    void 0 === n && (n = null),
                    {
                      mapped: {
                        type: "SECONDARY",
                        offset: e,
                        combineTargetFor: n,
                        shouldAnimateDisplacement: t,
                        snapshot: r(n),
                      },
                    }
                  );
                }),
                t = function (e) {
                  return e ? n(ge, e, !0) : null;
                },
                i = function (r, i, o, a) {
                  var l = o.displaced.visible[r],
                    u = Boolean(a.inVirtualList && a.effected[r]),
                    c = _e(o),
                    s = c && c.draggableId === r ? i : null;
                  if (!l) {
                    if (!u) return t(s);
                    if (o.displaced.invisible[r]) return null;
                    var d = he(a.displacedBy.point),
                      p = e(d.x, d.y);
                    return n(p, s, !0);
                  }
                  if (u) return t(s);
                  var f = o.displacedBy.point,
                    g = e(f.x, f.y);
                  return n(g, s, l.shouldAnimate);
                };
              return function (e, r) {
                if (e.isDragging)
                  return e.critical.draggable.id === r.draggableId
                    ? null
                    : i(
                        r.draggableId,
                        e.critical.draggable.id,
                        e.impact,
                        e.afterCritical,
                      );
                if ("DROP_ANIMATING" === e.phase) {
                  var n = e.completed;
                  return n.result.draggableId === r.draggableId
                    ? null
                    : i(
                        r.draggableId,
                        n.result.draggableId,
                        n.impact,
                        n.afterCritical,
                      );
                }
                return null;
              };
            })();
          return function (e, r) {
            return t(e, r) || i(e, r) || Ki;
          };
        },
        { dropAnimationFinished: an },
        null,
        { context: Ct, pure: !0, areStatePropsEqual: ji },
      )(function (e) {
        var r = (0, t.useRef)(null),
          n = (0, Y.hb)(function (e) {
            r.current = e;
          }, []),
          i = (0, Y.hb)(function () {
            return r.current;
          }, []),
          o = Ci(Tt),
          a = o.contextId,
          l = o.dragHandleUsageInstructionsId,
          u = o.registry,
          c = Ci(Ti),
          s = c.type,
          d = c.droppableId,
          p = (0, Y.Kr)(
            function () {
              return {
                id: e.draggableId,
                index: e.index,
                type: s,
                droppableId: d,
              };
            },
            [e.draggableId, e.index, s, d],
          ),
          f = e.children,
          g = e.draggableId,
          v = e.isEnabled,
          m = e.shouldRespectForcePress,
          b = e.canDragInteractiveElements,
          h = e.isClone,
          y = e.mapped,
          I = e.dropAnimationFinished;
        Ui(),
          Lt(),
          h ||
            Wi(
              (0, Y.Kr)(
                function () {
                  return {
                    descriptor: p,
                    registry: u,
                    getDraggableRef: i,
                    canDragInteractiveElements: b,
                    shouldRespectForcePress: m,
                    isEnabled: v,
                  };
                },
                [p, u, i, b, m, v],
              ),
            );
        var D = (0, Y.Kr)(
            function () {
              return v
                ? {
                    tabIndex: 0,
                    role: "button",
                    "aria-describedby": l,
                    "data-rbd-drag-handle-draggable-id": g,
                    "data-rbd-drag-handle-context-id": a,
                    draggable: !1,
                    onDragStart: Hi,
                  }
                : null;
            },
            [a, l, g, v],
          ),
          x = (0, Y.hb)(
            function (e) {
              "DRAGGING" === y.type &&
                y.dropping &&
                "transform" === e.propertyName &&
                I();
            },
            [I, y],
          ),
          E = (0, Y.Kr)(
            function () {
              var e = ki(y),
                r = "DRAGGING" === y.type && y.dropping ? x : null;
              return {
                innerRef: n,
                draggableProps: {
                  "data-rbd-draggable-context-id": a,
                  "data-rbd-draggable-id": g,
                  style: e,
                  onTransitionEnd: r,
                },
                dragHandleProps: D,
              };
            },
            [a, D, g, y, x, n],
          ),
          w = (0, Y.Kr)(
            function () {
              return {
                draggableId: p.id,
                type: p.type,
                source: { index: p.index, droppableId: p.droppableId },
              };
            },
            [p.droppableId, p.id, p.index, p.type],
          );
        return f(E, y.snapshot, w);
      });
      function Yi(e) {
        return Ci(Ti).isUsingCloneFor !== e.draggableId || e.isClone
          ? t.createElement(zi, e)
          : null;
      }
      function Ji(e) {
        var r = "boolean" != typeof e.isDragDisabled || !e.isDragDisabled,
          n = Boolean(e.disableInteractiveElementBlocking),
          i = Boolean(e.shouldRespectForcePress);
        return t.createElement(
          Yi,
          (0, o.A)({}, e, {
            isClone: !1,
            isEnabled: r,
            canDragInteractiveElements: n,
            shouldRespectForcePress: i,
          }),
        );
      }
      var Xi = function (e, r) {
          return e === r.droppable.type;
        },
        $i = function (e, r) {
          return r.draggables[e.draggable.id];
        };
      var Qi = {
          mode: "standard",
          type: "DEFAULT",
          direction: "vertical",
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || le(!1), document.body;
          },
        },
        Zi = V(
          function () {
            var e = {
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
              r = (0, o.A)({}, e, { shouldAnimatePlaceholder: !1 }),
              n = Z(function (e) {
                return {
                  draggableId: e.id,
                  type: e.type,
                  source: { index: e.index, droppableId: e.droppableId },
                };
              }),
              t = Z(function (t, i, o, a, l, u) {
                var c = l.descriptor.id;
                if (l.descriptor.droppableId === t) {
                  var s = u ? { render: u, dragging: n(l.descriptor) } : null,
                    d = {
                      isDraggingOver: o,
                      draggingOverWith: o ? c : null,
                      draggingFromThisWith: c,
                      isUsingPlaceholder: !0,
                    };
                  return {
                    placeholder: l.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: d,
                    useClone: s,
                  };
                }
                if (!i) return r;
                if (!a) return e;
                var p = {
                  isDraggingOver: o,
                  draggingOverWith: c,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: l.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: p,
                  useClone: null,
                };
              });
            return function (n, i) {
              var o = i.droppableId,
                a = i.type,
                l = !i.isDropDisabled,
                u = i.renderClone;
              if (n.isDragging) {
                var c = n.critical;
                if (!Xi(a, c)) return r;
                var s = $i(c, n.dimensions),
                  d = xr(n.impact) === o;
                return t(o, l, d, d, s, u);
              }
              if ("DROP_ANIMATING" === n.phase) {
                var p = n.completed;
                if (!Xi(a, p.critical)) return r;
                var f = $i(p.critical, n.dimensions);
                return t(o, l, qi(p.result) === o, xr(p.impact) === o, f, u);
              }
              if ("IDLE" === n.phase && n.completed && !n.shouldFlush) {
                var g = n.completed;
                if (!Xi(a, g.critical)) return r;
                var v = xr(g.impact) === o,
                  m = Boolean(g.impact.at && "COMBINE" === g.impact.at.type),
                  b = g.critical.droppable.id === o;
                return v ? (m ? e : r) : b ? e : r;
              }
              return r;
            };
          },
          {
            updateViewportMaxScroll: function (e) {
              return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e };
            },
          },
          null,
          { context: Ct, pure: !0, areStatePropsEqual: ji },
        )(function (e) {
          var r = (0, t.useContext)(Tt);
          r || le(!1);
          var n = r.contextId,
            i = r.isMovementAllowed,
            o = (0, t.useRef)(null),
            a = (0, t.useRef)(null),
            l = e.children,
            u = e.droppableId,
            c = e.type,
            s = e.mode,
            d = e.direction,
            p = e.ignoreContainerClipping,
            f = e.isDropDisabled,
            g = e.isCombineEnabled,
            v = e.snapshot,
            m = e.useClone,
            b = e.updateViewportMaxScroll,
            h = e.getContainerForClone,
            y = (0, Y.hb)(function () {
              return o.current;
            }, []),
            I = (0, Y.hb)(function (e) {
              o.current = e;
            }, []),
            D =
              ((0, Y.hb)(function () {
                return a.current;
              }, []),
              (0, Y.hb)(function (e) {
                a.current = e;
              }, []));
          Gt();
          var x = (0, Y.hb)(
            function () {
              var e;
              i() &&
                b({
                  maxScroll: Ln(
                    (null == (e = o.current)
                      ? void 0
                      : e.ownerDocument.defaultView) || window,
                  ),
                });
            },
            [i, b],
          );
          Pi({
            droppableId: u,
            type: c,
            mode: s,
            direction: d,
            isDropDisabled: f,
            isCombineEnabled: g,
            ignoreContainerClipping: p,
            getDroppableRef: y,
          });
          var E = t.createElement(
              Li,
              { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder },
              function (e) {
                var r = e.onClose,
                  i = e.data,
                  o = e.animate;
                return t.createElement(Oi, {
                  placeholder: i,
                  onClose: r,
                  innerRef: D,
                  animate: o,
                  contextId: n,
                  onTransitionEnd: x,
                });
              },
            ),
            w = (0, Y.Kr)(
              function () {
                return {
                  innerRef: I,
                  placeholder: E,
                  droppableProps: {
                    "data-rbd-droppable-id": u,
                    "data-rbd-droppable-context-id": n,
                  },
                };
              },
              [n, u, E, I],
            ),
            A = m ? m.dragging.draggableId : null,
            C = (0, Y.Kr)(
              function () {
                return { droppableId: u, type: c, isUsingCloneFor: A };
              },
              [u, A, c],
            );
          return t.createElement(
            Ti.Provider,
            { value: C },
            l(w, v),
            (function () {
              if (!m) return null;
              var e = m.dragging,
                r = m.render,
                n = t.createElement(
                  Yi,
                  {
                    draggableId: e.draggableId,
                    index: e.source.index,
                    isClone: !0,
                    isEnabled: !0,
                    shouldRespectForcePress: !1,
                    canDragInteractiveElements: !0,
                  },
                  function (n, t) {
                    return r(n, t, e);
                  },
                );
              return z.createPortal(n, h());
            })(),
          );
        });
      Zi.defaultProps = Qi;
    },
    59671: (e, r) => {
      var n = 60103,
        t = 60106,
        i = 60107,
        o = 60108,
        a = 60114,
        l = 60109,
        u = 60110,
        c = 60112,
        s = 60113,
        d = 60120,
        p = 60115,
        f = 60116,
        g = 60121,
        v = 60122,
        m = 60117,
        b = 60129,
        h = 60131;
      /** @license React v17.0.2
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ if ("function" == typeof Symbol && Symbol.for) {
        var y = Symbol.for;
        (n = y("react.element")),
          (t = y("react.portal")),
          (i = y("react.fragment")),
          (o = y("react.strict_mode")),
          (a = y("react.profiler")),
          (l = y("react.provider")),
          (u = y("react.context")),
          (c = y("react.forward_ref")),
          (s = y("react.suspense")),
          (d = y("react.suspense_list")),
          (p = y("react.memo")),
          (f = y("react.lazy")),
          (g = y("react.block")),
          (v = y("react.server.block")),
          (m = y("react.fundamental")),
          (b = y("react.debug_trace_mode")),
          (h = y("react.legacy_hidden"));
      }
      function I(e) {
        if ("object" == typeof e && null !== e) {
          var r = e.$$typeof;
          switch (r) {
            case n:
              switch ((e = e.type)) {
                case i:
                case a:
                case o:
                case s:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case c:
                    case f:
                    case p:
                    case l:
                      return e;
                    default:
                      return r;
                  }
              }
            case t:
              return r;
          }
        }
      }
      r.isContextConsumer = function (e) {
        return I(e) === u;
      };
    },
    44019: (e, r, n) => {
      e.exports = n(59671);
    },
  },
]);
