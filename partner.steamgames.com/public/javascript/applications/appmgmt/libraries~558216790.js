/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6853],
  {
    48046: (t, r, n) => {
      n.d(r, {
        SQ: () => l,
        YH: () => b,
        a: () => d,
        cY: () => p,
        fT: () => i,
        ge: () => c,
        l: () => o,
      });
      var e = n(68841),
        o = function (t) {
          var r = t.top,
            n = t.right,
            e = t.bottom,
            o = t.left;
          return {
            top: r,
            right: n,
            bottom: e,
            left: o,
            width: n - o,
            height: e - r,
            x: o,
            y: r,
            center: { x: (n + o) / 2, y: (e + r) / 2 },
          };
        },
        i = function (t, r) {
          return {
            top: t.top - r.top,
            left: t.left - r.left,
            bottom: t.bottom + r.bottom,
            right: t.right + r.right,
          };
        },
        u = function (t, r) {
          return {
            top: t.top + r.top,
            left: t.left + r.left,
            bottom: t.bottom - r.bottom,
            right: t.right - r.right,
          };
        },
        f = { top: 0, right: 0, bottom: 0, left: 0 },
        c = function (t) {
          var r = t.borderBox,
            n = t.margin,
            e = void 0 === n ? f : n,
            c = t.border,
            a = void 0 === c ? f : c,
            p = t.padding,
            l = void 0 === p ? f : p,
            d = o(i(r, e)),
            b = o(u(r, a)),
            g = o(u(b, l));
          return {
            marginBox: d,
            borderBox: o(r),
            paddingBox: b,
            contentBox: g,
            margin: e,
            border: a,
            padding: l,
          };
        },
        a = function (t) {
          var r = t.slice(0, -2);
          if ("px" !== t.slice(-2)) return 0;
          var n = Number(r);
          return isNaN(n) && (0, e.A)(!1), n;
        },
        p = function (t, r) {
          var n,
            e,
            o = t.borderBox,
            i = t.border,
            u = t.margin,
            f = t.padding,
            a =
              ((e = r),
              {
                top: (n = o).top + e.y,
                left: n.left + e.x,
                bottom: n.bottom + e.y,
                right: n.right + e.x,
              });
          return c({ borderBox: a, border: i, margin: u, padding: f });
        },
        l = function (t, r) {
          return (
            void 0 === r &&
              (r = { x: window.pageXOffset, y: window.pageYOffset }),
            p(t, r)
          );
        },
        d = function (t, r) {
          var n = {
              top: a(r.marginTop),
              right: a(r.marginRight),
              bottom: a(r.marginBottom),
              left: a(r.marginLeft),
            },
            e = {
              top: a(r.paddingTop),
              right: a(r.paddingRight),
              bottom: a(r.paddingBottom),
              left: a(r.paddingLeft),
            },
            o = {
              top: a(r.borderTopWidth),
              right: a(r.borderRightWidth),
              bottom: a(r.borderBottomWidth),
              left: a(r.borderLeftWidth),
            };
          return c({ borderBox: t, margin: n, padding: e, border: o });
        },
        b = function (t) {
          var r = t.getBoundingClientRect(),
            n = window.getComputedStyle(t);
          return d(r, n);
        };
    },
    18651: (t, r, n) => {
      n.d(r, { A: () => e });
      const e = function (t) {
        var r = [],
          n = null,
          e = function () {
            for (var e = arguments.length, o = new Array(e), i = 0; i < e; i++)
              o[i] = arguments[i];
            (r = o),
              n ||
                (n = requestAnimationFrame(function () {
                  (n = null), t.apply(void 0, r);
                }));
          };
        return (
          (e.cancel = function () {
            n && (cancelAnimationFrame(n), (n = null));
          }),
          e
        );
      };
    },
    3998: (t, r, n) => {
      n.d(r, { Tw: () => b, Zz: () => d, y$: () => a, zH: () => l });
      var e = n(54883);
      function o(t) {
        return (
          "Minified Redux error #" +
          t +
          "; visit https://redux.js.org/Errors?code=" +
          t +
          " for the full message or use the non-minified dev environment for full errors. "
        );
      }
      var i =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        u = function () {
          return Math.random().toString(36).substring(7).split("").join(".");
        },
        f = {
          INIT: "@@redux/INIT" + u(),
          REPLACE: "@@redux/REPLACE" + u(),
          PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + u();
          },
        };
      function c(t) {
        if ("object" != typeof t || null === t) return !1;
        for (var r = t; null !== Object.getPrototypeOf(r); )
          r = Object.getPrototypeOf(r);
        return Object.getPrototypeOf(t) === r;
      }
      function a(t, r, n) {
        var e;
        if (
          ("function" == typeof r && "function" == typeof n) ||
          ("function" == typeof n && "function" == typeof arguments[3])
        )
          throw new Error(o(0));
        if (
          ("function" == typeof r && void 0 === n && ((n = r), (r = void 0)),
          void 0 !== n)
        ) {
          if ("function" != typeof n) throw new Error(o(1));
          return n(a)(t, r);
        }
        if ("function" != typeof t) throw new Error(o(2));
        var u = t,
          p = r,
          l = [],
          d = l,
          b = !1;
        function g() {
          d === l && (d = l.slice());
        }
        function s() {
          if (b) throw new Error(o(3));
          return p;
        }
        function y(t) {
          if ("function" != typeof t) throw new Error(o(4));
          if (b) throw new Error(o(5));
          var r = !0;
          return (
            g(),
            d.push(t),
            function () {
              if (r) {
                if (b) throw new Error(o(6));
                (r = !1), g();
                var n = d.indexOf(t);
                d.splice(n, 1), (l = null);
              }
            }
          );
        }
        function h(t) {
          if (!c(t)) throw new Error(o(7));
          if (void 0 === t.type) throw new Error(o(8));
          if (b) throw new Error(o(9));
          try {
            (b = !0), (p = u(p, t));
          } finally {
            b = !1;
          }
          for (var r = (l = d), n = 0; n < r.length; n++) {
            (0, r[n])();
          }
          return t;
        }
        return (
          h({ type: f.INIT }),
          ((e = {
            dispatch: h,
            subscribe: y,
            getState: s,
            replaceReducer: function (t) {
              if ("function" != typeof t) throw new Error(o(10));
              (u = t), h({ type: f.REPLACE });
            },
          })[i] = function () {
            var t,
              r = y;
            return (
              ((t = {
                subscribe: function (t) {
                  if ("object" != typeof t || null === t)
                    throw new Error(o(11));
                  function n() {
                    t.next && t.next(s());
                  }
                  return n(), { unsubscribe: r(n) };
                },
              })[i] = function () {
                return this;
              }),
              t
            );
          }),
          e
        );
      }
      function p(t, r) {
        return function () {
          return r(t.apply(this, arguments));
        };
      }
      function l(t, r) {
        if ("function" == typeof t) return p(t, r);
        if ("object" != typeof t || null === t) throw new Error(o(16));
        var n = {};
        for (var e in t) {
          var i = t[e];
          "function" == typeof i && (n[e] = p(i, r));
        }
        return n;
      }
      function d() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return 0 === r.length
          ? function (t) {
              return t;
            }
          : 1 === r.length
            ? r[0]
            : r.reduce(function (t, r) {
                return function () {
                  return t(r.apply(void 0, arguments));
                };
              });
      }
      function b() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
          r[n] = arguments[n];
        return function (t) {
          return function () {
            var n = t.apply(void 0, arguments),
              i = function () {
                throw new Error(o(15));
              },
              u = {
                getState: n.getState,
                dispatch: function () {
                  return i.apply(void 0, arguments);
                },
              },
              f = r.map(function (t) {
                return t(u);
              });
            return (
              (i = d.apply(void 0, f)(n.dispatch)),
              (0, e.A)((0, e.A)({}, n), {}, { dispatch: i })
            );
          };
        };
      }
    },
    46311: (t, r, n) => {
      n.d(r, { Kr: () => i, hb: () => u });
      var e = n(90626);
      function o(t, r) {
        var n = (0, e.useState)(function () {
            return { inputs: r, result: t() };
          })[0],
          o = (0, e.useRef)(!0),
          i = (0, e.useRef)(n),
          u =
            o.current ||
            Boolean(
              r &&
                i.current.inputs &&
                (function (t, r) {
                  if (t.length !== r.length) return !1;
                  for (var n = 0; n < t.length; n++)
                    if (t[n] !== r[n]) return !1;
                  return !0;
                })(r, i.current.inputs),
            )
              ? i.current
              : { inputs: r, result: t() };
        return (
          (0, e.useEffect)(
            function () {
              (o.current = !1), (i.current = u);
            },
            [u],
          ),
          u.result
        );
      }
      var i = o,
        u = function (t, r) {
          return o(function () {
            return t;
          }, r);
        };
    },
    55635: (t, r, n) => {
      n.d(r, { A: () => o });
      var e = n(53144);
      function o(t, r, n) {
        return (
          (r = (0, e.A)(r)) in t
            ? Object.defineProperty(t, r, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[r] = n),
          t
        );
      }
    },
    54883: (t, r, n) => {
      n.d(r, { A: () => i });
      var e = n(55635);
      function o(t, r) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          r &&
            (e = e.filter(function (r) {
              return Object.getOwnPropertyDescriptor(t, r).enumerable;
            })),
            n.push.apply(n, e);
        }
        return n;
      }
      function i(t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? o(Object(n), !0).forEach(function (r) {
                (0, e.A)(t, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                    t,
                    r,
                    Object.getOwnPropertyDescriptor(n, r),
                  );
                });
        }
        return t;
      }
    },
    53144: (t, r, n) => {
      n.d(r, { A: () => o });
      var e = n(11052);
      function o(t) {
        var r = (function (t, r) {
          if ("object" != (0, e.A)(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var o = n.call(t, r || "default");
            if ("object" != (0, e.A)(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === r ? String : Number)(t);
        })(t, "string");
        return "symbol" == (0, e.A)(r) ? r : r + "";
      }
    },
    11052: (t, r, n) => {
      function e(t) {
        return (
          (e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          e(t)
        );
      }
      n.d(r, { A: () => e });
    },
  },
]);
