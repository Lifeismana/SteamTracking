/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [46853],
    {
      48046: (I, y, b) => {
        b.d(y, {
          SQ: () => E,
          YH: () => L,
          a: () => W,
          cY: () => R,
          fT: () => d,
          ge: () => f,
          l: () => i,
        });
        var p = b(68841),
          i = function (n) {
            var e = n.top,
              w = n.right,
              h = n.bottom,
              P = n.left,
              N = w - P,
              M = h - e,
              r = {
                top: e,
                right: w,
                bottom: h,
                left: P,
                width: N,
                height: M,
                x: P,
                y: e,
                center: { x: (w + P) / 2, y: (h + e) / 2 },
              };
            return r;
          },
          d = function (n, e) {
            return {
              top: n.top - e.top,
              left: n.left - e.left,
              bottom: n.bottom + e.bottom,
              right: n.right + e.right,
            };
          },
          u = function (n, e) {
            return {
              top: n.top + e.top,
              left: n.left + e.left,
              bottom: n.bottom - e.bottom,
              right: n.right - e.right,
            };
          },
          a = function (n, e) {
            return {
              top: n.top + e.y,
              left: n.left + e.x,
              bottom: n.bottom + e.y,
              right: n.right + e.x,
            };
          },
          c = { top: 0, right: 0, bottom: 0, left: 0 },
          f = function (n) {
            var e = n.borderBox,
              w = n.margin,
              h = w === void 0 ? c : w,
              P = n.border,
              N = P === void 0 ? c : P,
              M = n.padding,
              r = M === void 0 ? c : M,
              t = i(d(e, h)),
              o = i(u(e, N)),
              l = i(u(o, r));
            return {
              marginBox: t,
              borderBox: i(e),
              paddingBox: o,
              contentBox: l,
              margin: h,
              border: N,
              padding: r,
            };
          },
          s = function (n) {
            var e = n.slice(0, -2),
              w = n.slice(-2);
            if (w !== "px") return 0;
            var h = Number(e);
            return isNaN(h) && (0, p.A)(!1), h;
          },
          O = function () {
            return { x: window.pageXOffset, y: window.pageYOffset };
          },
          R = function (n, e) {
            var w = n.borderBox,
              h = n.border,
              P = n.margin,
              N = n.padding,
              M = a(w, e);
            return f({ borderBox: M, border: h, margin: P, padding: N });
          },
          E = function (n, e) {
            return e === void 0 && (e = O()), R(n, e);
          },
          W = function (n, e) {
            var w = {
                top: s(e.marginTop),
                right: s(e.marginRight),
                bottom: s(e.marginBottom),
                left: s(e.marginLeft),
              },
              h = {
                top: s(e.paddingTop),
                right: s(e.paddingRight),
                bottom: s(e.paddingBottom),
                left: s(e.paddingLeft),
              },
              P = {
                top: s(e.borderTopWidth),
                right: s(e.borderRightWidth),
                bottom: s(e.borderBottomWidth),
                left: s(e.borderLeftWidth),
              };
            return f({ borderBox: n, margin: w, padding: h, border: P });
          },
          L = function (n) {
            var e = n.getBoundingClientRect(),
              w = window.getComputedStyle(n);
            return W(e, w);
          };
      },
      18651: (I, y, b) => {
        b.d(y, { A: () => i });
        var p = function (u) {
          var a = [],
            c = null,
            f = function () {
              for (
                var O = arguments.length, R = new Array(O), E = 0;
                E < O;
                E++
              )
                R[E] = arguments[E];
              (a = R),
                !c &&
                  (c = requestAnimationFrame(function () {
                    (c = null), u.apply(void 0, a);
                  }));
            };
          return (
            (f.cancel = function () {
              c && (cancelAnimationFrame(c), (c = null));
            }),
            f
          );
        };
        const i = p;
      },
      3998: (I, y, b) => {
        b.d(y, { Tw: () => M, Zz: () => N, y$: () => W, zH: () => P });
        var p = b(54883);
        function i(r) {
          return (
            "Minified Redux error #" +
            r +
            "; visit https://redux.js.org/Errors?code=" +
            r +
            " for the full message or use the non-minified dev environment for full errors. "
          );
        }
        var d = (function () {
            return (
              (typeof Symbol == "function" && Symbol.observable) ||
              "@@observable"
            );
          })(),
          u = function () {
            return Math.random().toString(36).substring(7).split("").join(".");
          },
          a = {
            INIT: "@@redux/INIT" + u(),
            REPLACE: "@@redux/REPLACE" + u(),
            PROBE_UNKNOWN_ACTION: function () {
              return "@@redux/PROBE_UNKNOWN_ACTION" + u();
            },
          };
        function c(r) {
          if (typeof r != "object" || r === null) return !1;
          for (var t = r; Object.getPrototypeOf(t) !== null; )
            t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(r) === t;
        }
        function f(r) {
          if (r === void 0) return "undefined";
          if (r === null) return "null";
          var t = typeof r;
          switch (t) {
            case "boolean":
            case "string":
            case "number":
            case "symbol":
            case "function":
              return t;
          }
          if (Array.isArray(r)) return "array";
          if (R(r)) return "date";
          if (O(r)) return "error";
          var o = s(r);
          switch (o) {
            case "Symbol":
            case "Promise":
            case "WeakMap":
            case "WeakSet":
            case "Map":
            case "Set":
              return o;
          }
          return t.slice(8, -1).toLowerCase().replace(/\s/g, "");
        }
        function s(r) {
          return typeof r.constructor == "function" ? r.constructor.name : null;
        }
        function O(r) {
          return (
            r instanceof Error ||
            (typeof r.message == "string" &&
              r.constructor &&
              typeof r.constructor.stackTraceLimit == "number")
          );
        }
        function R(r) {
          return r instanceof Date
            ? !0
            : typeof r.toDateString == "function" &&
                typeof r.getDate == "function" &&
                typeof r.setDate == "function";
        }
        function E(r) {
          var t = typeof r;
          return t;
        }
        function W(r, t, o) {
          var l;
          if (
            (typeof t == "function" && typeof o == "function") ||
            (typeof o == "function" && typeof arguments[3] == "function")
          )
            throw new Error(i(0));
          if (
            (typeof t == "function" &&
              typeof o > "u" &&
              ((o = t), (t = void 0)),
            typeof o < "u")
          ) {
            if (typeof o != "function") throw new Error(i(1));
            return o(W)(r, t);
          }
          if (typeof r != "function") throw new Error(i(2));
          var g = r,
            _ = t,
            x = [],
            m = x,
            A = !1;
          function C() {
            m === x && (m = x.slice());
          }
          function K() {
            if (A) throw new Error(i(3));
            return _;
          }
          function $(v) {
            if (typeof v != "function") throw new Error(i(4));
            if (A) throw new Error(i(5));
            var T = !0;
            return (
              C(),
              m.push(v),
              function () {
                if (T) {
                  if (A) throw new Error(i(6));
                  (T = !1), C();
                  var S = m.indexOf(v);
                  m.splice(S, 1), (x = null);
                }
              }
            );
          }
          function B(v) {
            if (!c(v)) throw new Error(i(7));
            if (typeof v.type > "u") throw new Error(i(8));
            if (A) throw new Error(i(9));
            try {
              (A = !0), (_ = g(_, v));
            } finally {
              A = !1;
            }
            for (var T = (x = m), D = 0; D < T.length; D++) {
              var S = T[D];
              S();
            }
            return v;
          }
          function U(v) {
            if (typeof v != "function") throw new Error(i(10));
            (g = v), B({ type: a.REPLACE });
          }
          function k() {
            var v,
              T = $;
            return (
              (v = {
                subscribe: function (S) {
                  if (typeof S != "object" || S === null)
                    throw new Error(i(11));
                  function F() {
                    S.next && S.next(K());
                  }
                  F();
                  var Y = T(F);
                  return { unsubscribe: Y };
                },
              }),
              (v[d] = function () {
                return this;
              }),
              v
            );
          }
          return (
            B({ type: a.INIT }),
            (l = { dispatch: B, subscribe: $, getState: K, replaceReducer: U }),
            (l[d] = k),
            l
          );
        }
        var L = null;
        function j(r) {
          typeof console < "u" &&
            typeof console.error == "function" &&
            console.error(r);
          try {
            throw new Error(r);
          } catch {}
        }
        function n(r, t, o, l) {
          var g = Object.keys(t),
            _ =
              o && o.type === a.INIT
                ? "preloadedState argument passed to createStore"
                : "previous state received by the reducer";
          if (g.length === 0)
            return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
          if (!c(r))
            return (
              "The " +
              _ +
              ' has unexpected type of "' +
              E(r) +
              '". Expected argument to be an object with the following ' +
              ('keys: "' + g.join('", "') + '"')
            );
          var x = Object.keys(r).filter(function (m) {
            return !t.hasOwnProperty(m) && !l[m];
          });
          if (
            (x.forEach(function (m) {
              l[m] = !0;
            }),
            !(o && o.type === a.REPLACE) && x.length > 0)
          )
            return (
              "Unexpected " +
              (x.length > 1 ? "keys" : "key") +
              " " +
              ('"' + x.join('", "') + '" found in ' + _ + ". ") +
              "Expected to find one of the known reducer keys instead: " +
              ('"' + g.join('", "') + '". Unexpected keys will be ignored.')
            );
        }
        function e(r) {
          Object.keys(r).forEach(function (t) {
            var o = r[t],
              l = o(void 0, { type: a.INIT });
            if (typeof l > "u") throw new Error(i(12));
            if (typeof o(void 0, { type: a.PROBE_UNKNOWN_ACTION() }) > "u")
              throw new Error(i(13));
          });
        }
        function w(r) {
          for (var t = Object.keys(r), o = {}, l = 0; l < t.length; l++) {
            var g = t[l];
            typeof r[g] == "function" && (o[g] = r[g]);
          }
          var _ = Object.keys(o),
            x,
            m;
          try {
            e(o);
          } catch (A) {
            m = A;
          }
          return function (C, K) {
            if ((C === void 0 && (C = {}), m)) throw m;
            if (0) var $;
            for (var B = !1, U = {}, k = 0; k < _.length; k++) {
              var v = _[k],
                T = o[v],
                D = C[v],
                S = T(D, K);
              if (typeof S > "u") {
                var F = K && K.type;
                throw new Error(i(14));
              }
              (U[v] = S), (B = B || S !== D);
            }
            return (B = B || _.length !== Object.keys(C).length), B ? U : C;
          };
        }
        function h(r, t) {
          return function () {
            return t(r.apply(this, arguments));
          };
        }
        function P(r, t) {
          if (typeof r == "function") return h(r, t);
          if (typeof r != "object" || r === null) throw new Error(i(16));
          var o = {};
          for (var l in r) {
            var g = r[l];
            typeof g == "function" && (o[l] = h(g, t));
          }
          return o;
        }
        function N() {
          for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
            t[o] = arguments[o];
          return t.length === 0
            ? function (l) {
                return l;
              }
            : t.length === 1
              ? t[0]
              : t.reduce(function (l, g) {
                  return function () {
                    return l(g.apply(void 0, arguments));
                  };
                });
        }
        function M() {
          for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
            t[o] = arguments[o];
          return function (l) {
            return function () {
              var g = l.apply(void 0, arguments),
                _ = function () {
                  throw new Error(i(15));
                },
                x = {
                  getState: g.getState,
                  dispatch: function () {
                    return _.apply(void 0, arguments);
                  },
                },
                m = t.map(function (A) {
                  return A(x);
                });
              return (
                (_ = N.apply(void 0, m)(g.dispatch)),
                (0, p.A)((0, p.A)({}, g), {}, { dispatch: _ })
              );
            };
          };
        }
      },
      46311: (I, y, b) => {
        b.d(y, { Kr: () => a, hb: () => c });
        var p = b(90626);
        function i(f, s) {
          if (f.length !== s.length) return !1;
          for (var O = 0; O < f.length; O++) if (f[O] !== s[O]) return !1;
          return !0;
        }
        function d(f, s) {
          var O = (0, p.useState)(function () {
              return { inputs: s, result: f() };
            })[0],
            R = (0, p.useRef)(!0),
            E = (0, p.useRef)(O),
            W =
              R.current || !!(s && E.current.inputs && i(s, E.current.inputs)),
            L = W ? E.current : { inputs: s, result: f() };
          return (
            (0, p.useEffect)(
              function () {
                (R.current = !1), (E.current = L);
              },
              [L],
            ),
            L.result
          );
        }
        function u(f, s) {
          return d(function () {
            return f;
          }, s);
        }
        var a = d,
          c = u;
      },
      55635: (I, y, b) => {
        b.d(y, { A: () => i });
        var p = b(53144);
        function i(d, u, a) {
          return (
            (u = (0, p.A)(u)) in d
              ? Object.defineProperty(d, u, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (d[u] = a),
            d
          );
        }
      },
      54883: (I, y, b) => {
        b.d(y, { A: () => d });
        var p = b(55635);
        function i(u, a) {
          var c = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(u);
            a &&
              (f = f.filter(function (s) {
                return Object.getOwnPropertyDescriptor(u, s).enumerable;
              })),
              c.push.apply(c, f);
          }
          return c;
        }
        function d(u) {
          for (var a = 1; a < arguments.length; a++) {
            var c = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? i(Object(c), !0).forEach(function (f) {
                  (0, p.A)(u, f, c[f]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(c),
                  )
                : i(Object(c)).forEach(function (f) {
                    Object.defineProperty(
                      u,
                      f,
                      Object.getOwnPropertyDescriptor(c, f),
                    );
                  });
          }
          return u;
        }
      },
      53144: (I, y, b) => {
        b.d(y, { A: () => d });
        var p = b(11052);
        function i(u, a) {
          if ((0, p.A)(u) != "object" || !u) return u;
          var c = u[Symbol.toPrimitive];
          if (c !== void 0) {
            var f = c.call(u, a || "default");
            if ((0, p.A)(f) != "object") return f;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        function d(u) {
          var a = i(u, "string");
          return (0, p.A)(a) == "symbol" ? a : a + "";
        }
      },
      11052: (I, y, b) => {
        b.d(y, { A: () => p });
        function p(i) {
          "@babel/helpers - typeof";
          return (
            (p =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (d) {
                    return typeof d;
                  }
                : function (d) {
                    return d &&
                      typeof Symbol == "function" &&
                      d.constructor === Symbol &&
                      d !== Symbol.prototype
                      ? "symbol"
                      : typeof d;
                  }),
            p(i)
          );
        }
      },
    },
  ]);
})();
