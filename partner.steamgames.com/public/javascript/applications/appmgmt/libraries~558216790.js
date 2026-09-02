/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [6853],
    {
      48046: (k, I, S) => {
        S.d(I, {
          SQ: () => m,
          YH: () => L,
          a: () => W,
          cY: () => N,
          fT: () => R,
          ge: () => s,
          l: () => i,
        });
        var O = S(68841),
          i = function (n) {
            var e = n.top,
              g = n.right,
              p = n.bottom,
              w = n.left,
              B = g - w,
              C = p - e,
              r = {
                top: e,
                right: g,
                bottom: p,
                left: w,
                width: B,
                height: C,
                x: w,
                y: e,
                center: { x: (g + w) / 2, y: (p + e) / 2 },
              };
            return r;
          },
          R = function (n, e) {
            return {
              top: n.top - e.top,
              left: n.left - e.left,
              bottom: n.bottom + e.bottom,
              right: n.right + e.right,
            };
          },
          _ = function (n, e) {
            return {
              top: n.top + e.top,
              left: n.left + e.left,
              bottom: n.bottom - e.bottom,
              right: n.right - e.right,
            };
          },
          h = function (n, e) {
            return {
              top: n.top + e.y,
              left: n.left + e.x,
              bottom: n.bottom + e.y,
              right: n.right + e.x,
            };
          },
          l = { top: 0, right: 0, bottom: 0, left: 0 },
          s = function (n) {
            var e = n.borderBox,
              g = n.margin,
              p = g === void 0 ? l : g,
              w = n.border,
              B = w === void 0 ? l : w,
              C = n.padding,
              r = C === void 0 ? l : C,
              t = i(R(e, p)),
              o = i(_(e, B)),
              a = i(_(o, r));
            return {
              marginBox: t,
              borderBox: i(e),
              paddingBox: o,
              contentBox: a,
              margin: p,
              border: B,
              padding: r,
            };
          },
          u = function (n) {
            var e = n.slice(0, -2),
              g = n.slice(-2);
            if (g !== "px") return 0;
            var p = Number(e);
            return isNaN(p) && (0, O.A)(!1), p;
          },
          b = function () {
            return { x: window.pageXOffset, y: window.pageYOffset };
          },
          N = function (n, e) {
            var g = n.borderBox,
              p = n.border,
              w = n.margin,
              B = n.padding,
              C = h(g, e);
            return s({ borderBox: C, border: p, margin: w, padding: B });
          },
          m = function (n, e) {
            return e === void 0 && (e = b()), N(n, e);
          },
          W = function (n, e) {
            var g = {
                top: u(e.marginTop),
                right: u(e.marginRight),
                bottom: u(e.marginBottom),
                left: u(e.marginLeft),
              },
              p = {
                top: u(e.paddingTop),
                right: u(e.paddingRight),
                bottom: u(e.paddingBottom),
                left: u(e.paddingLeft),
              },
              w = {
                top: u(e.borderTopWidth),
                right: u(e.borderRightWidth),
                bottom: u(e.borderBottomWidth),
                left: u(e.borderLeftWidth),
              };
            return s({ borderBox: n, margin: g, padding: p, border: w });
          },
          L = function (n) {
            var e = n.getBoundingClientRect(),
              g = window.getComputedStyle(n);
            return W(e, g);
          };
      },
      18651: (k, I, S) => {
        S.d(I, { A: () => i });
        var O = function (_) {
          var h = [],
            l = null,
            s = function () {
              for (
                var b = arguments.length, N = new Array(b), m = 0;
                m < b;
                m++
              )
                N[m] = arguments[m];
              (h = N),
                !l &&
                  (l = requestAnimationFrame(function () {
                    (l = null), _.apply(void 0, h);
                  }));
            };
          return (
            (s.cancel = function () {
              l && (cancelAnimationFrame(l), (l = null));
            }),
            s
          );
        };
        const i = O;
      },
      3998: (k, I, S) => {
        S.d(I, { Tw: () => C, Zz: () => B, y$: () => W, zH: () => w });
        var O = S(54883);
        function i(r) {
          return (
            "Minified Redux error #" +
            r +
            "; visit https://redux.js.org/Errors?code=" +
            r +
            " for the full message or use the non-minified dev environment for full errors. "
          );
        }
        var R = (function () {
            return (
              (typeof Symbol == "function" && Symbol.observable) ||
              "@@observable"
            );
          })(),
          _ = function () {
            return Math.random().toString(36).substring(7).split("").join(".");
          },
          h = {
            INIT: "@@redux/INIT" + _(),
            REPLACE: "@@redux/REPLACE" + _(),
            PROBE_UNKNOWN_ACTION: function () {
              return "@@redux/PROBE_UNKNOWN_ACTION" + _();
            },
          };
        function l(r) {
          if (typeof r != "object" || r === null) return !1;
          for (var t = r; Object.getPrototypeOf(t) !== null; )
            t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(r) === t;
        }
        function s(r) {
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
          if (N(r)) return "date";
          if (b(r)) return "error";
          var o = u(r);
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
        function u(r) {
          return typeof r.constructor == "function" ? r.constructor.name : null;
        }
        function b(r) {
          return (
            r instanceof Error ||
            (typeof r.message == "string" &&
              r.constructor &&
              typeof r.constructor.stackTraceLimit == "number")
          );
        }
        function N(r) {
          return r instanceof Date
            ? !0
            : typeof r.toDateString == "function" &&
                typeof r.getDate == "function" &&
                typeof r.setDate == "function";
        }
        function m(r) {
          var t = typeof r;
          return t;
        }
        function W(r, t, o) {
          var a;
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
          var f = r,
            v = t,
            y = [],
            d = y,
            E = !1;
          function j() {
            d === y && (d = y.slice());
          }
          function D() {
            if (E) throw new Error(i(3));
            return v;
          }
          function $(c) {
            if (typeof c != "function") throw new Error(i(4));
            if (E) throw new Error(i(5));
            var T = !0;
            return (
              j(),
              d.push(c),
              function () {
                if (T) {
                  if (E) throw new Error(i(6));
                  (T = !1), j();
                  var x = d.indexOf(c);
                  d.splice(x, 1), (y = null);
                }
              }
            );
          }
          function P(c) {
            if (!l(c)) throw new Error(i(7));
            if (typeof c.type > "u") throw new Error(i(8));
            if (E) throw new Error(i(9));
            try {
              (E = !0), (v = f(v, c));
            } finally {
              E = !1;
            }
            for (var T = (y = d), M = 0; M < T.length; M++) {
              var x = T[M];
              x();
            }
            return c;
          }
          function U(c) {
            if (typeof c != "function") throw new Error(i(10));
            (f = c), P({ type: h.REPLACE });
          }
          function K() {
            var c,
              T = $;
            return (
              (c = {
                subscribe: function (x) {
                  if (typeof x != "object" || x === null)
                    throw new Error(i(11));
                  function F() {
                    x.next && x.next(D());
                  }
                  F();
                  var Y = T(F);
                  return { unsubscribe: Y };
                },
              }),
              (c[R] = function () {
                return this;
              }),
              c
            );
          }
          return (
            P({ type: h.INIT }),
            (a = { dispatch: P, subscribe: $, getState: D, replaceReducer: U }),
            (a[R] = K),
            a
          );
        }
        var L = null;
        function A(r) {
          typeof console < "u" &&
            typeof console.error == "function" &&
            console.error(r);
          try {
            throw new Error(r);
          } catch {}
        }
        function n(r, t, o, a) {
          var f = Object.keys(t),
            v =
              o && o.type === h.INIT
                ? "preloadedState argument passed to createStore"
                : "previous state received by the reducer";
          if (f.length === 0)
            return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
          if (!l(r))
            return (
              "The " +
              v +
              ' has unexpected type of "' +
              m(r) +
              '". Expected argument to be an object with the following ' +
              ('keys: "' + f.join('", "') + '"')
            );
          var y = Object.keys(r).filter(function (d) {
            return !t.hasOwnProperty(d) && !a[d];
          });
          if (
            (y.forEach(function (d) {
              a[d] = !0;
            }),
            !(o && o.type === h.REPLACE) && y.length > 0)
          )
            return (
              "Unexpected " +
              (y.length > 1 ? "keys" : "key") +
              " " +
              ('"' + y.join('", "') + '" found in ' + v + ". ") +
              "Expected to find one of the known reducer keys instead: " +
              ('"' + f.join('", "') + '". Unexpected keys will be ignored.')
            );
        }
        function e(r) {
          Object.keys(r).forEach(function (t) {
            var o = r[t],
              a = o(void 0, { type: h.INIT });
            if (typeof a > "u") throw new Error(i(12));
            if (typeof o(void 0, { type: h.PROBE_UNKNOWN_ACTION() }) > "u")
              throw new Error(i(13));
          });
        }
        function g(r) {
          for (var t = Object.keys(r), o = {}, a = 0; a < t.length; a++) {
            var f = t[a];
            typeof r[f] == "function" && (o[f] = r[f]);
          }
          var v = Object.keys(o),
            y,
            d;
          try {
            e(o);
          } catch (E) {
            d = E;
          }
          return function (j, D) {
            if ((j === void 0 && (j = {}), d)) throw d;
            if (0) var $;
            for (var P = !1, U = {}, K = 0; K < v.length; K++) {
              var c = v[K],
                T = o[c],
                M = j[c],
                x = T(M, D);
              if (typeof x > "u") {
                var F = D && D.type;
                throw new Error(i(14));
              }
              (U[c] = x), (P = P || x !== M);
            }
            return (P = P || v.length !== Object.keys(j).length), P ? U : j;
          };
        }
        function p(r, t) {
          return function () {
            return t(r.apply(this, arguments));
          };
        }
        function w(r, t) {
          if (typeof r == "function") return p(r, t);
          if (typeof r != "object" || r === null) throw new Error(i(16));
          var o = {};
          for (var a in r) {
            var f = r[a];
            typeof f == "function" && (o[a] = p(f, t));
          }
          return o;
        }
        function B() {
          for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
            t[o] = arguments[o];
          return t.length === 0
            ? function (a) {
                return a;
              }
            : t.length === 1
              ? t[0]
              : t.reduce(function (a, f) {
                  return function () {
                    return a(f.apply(void 0, arguments));
                  };
                });
        }
        function C() {
          for (var r = arguments.length, t = new Array(r), o = 0; o < r; o++)
            t[o] = arguments[o];
          return function (a) {
            return function () {
              var f = a.apply(void 0, arguments),
                v = function () {
                  throw new Error(i(15));
                },
                y = {
                  getState: f.getState,
                  dispatch: function () {
                    return v.apply(void 0, arguments);
                  },
                },
                d = t.map(function (E) {
                  return E(y);
                });
              return (
                (v = B.apply(void 0, d)(f.dispatch)),
                (0, O.A)((0, O.A)({}, f), {}, { dispatch: v })
              );
            };
          };
        }
      },
      46311: (k, I, S) => {
        S.d(I, { Kr: () => h, hb: () => l });
        var O = S(90626);
        function i(s, u) {
          if (s.length !== u.length) return !1;
          for (var b = 0; b < s.length; b++) if (s[b] !== u[b]) return !1;
          return !0;
        }
        function R(s, u) {
          var b = (0, O.useState)(function () {
              return { inputs: u, result: s() };
            })[0],
            N = (0, O.useRef)(!0),
            m = (0, O.useRef)(b),
            W =
              N.current || !!(u && m.current.inputs && i(u, m.current.inputs)),
            L = W ? m.current : { inputs: u, result: s() };
          return (
            (0, O.useEffect)(
              function () {
                (N.current = !1), (m.current = L);
              },
              [L],
            ),
            L.result
          );
        }
        function _(s, u) {
          return R(function () {
            return s;
          }, u);
        }
        var h = R,
          l = _;
      },
    },
  ]);
})();
