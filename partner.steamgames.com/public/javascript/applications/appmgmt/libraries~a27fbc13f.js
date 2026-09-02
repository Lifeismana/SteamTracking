/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [1997],
    {
      58661: (Gt, Mt, v) => {
        v.d(Mt, { d: () => Y });
        var H = v(90626),
          d = v(3316),
          Et = v.n(d),
          Wt = v(27664),
          tt = v(96714),
          bt = v(93563),
          wt = v(24633),
          ct = v(81887),
          It = v(23884),
          k = v(7351),
          Nt = ["x1", "y1", "x2", "y2", "key"],
          Bt = ["offset"];
        function yt(a) {
          "@babel/helpers - typeof";
          return (
            (yt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      typeof Symbol == "function" &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? "symbol"
                      : typeof o;
                  }),
            yt(a)
          );
        }
        function Dt(a, o) {
          var h = Object.keys(a);
          if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(a);
            o &&
              (u = u.filter(function (P) {
                return Object.getOwnPropertyDescriptor(a, P).enumerable;
              })),
              h.push.apply(h, u);
          }
          return h;
        }
        function K(a) {
          for (var o = 1; o < arguments.length; o++) {
            var h = arguments[o] != null ? arguments[o] : {};
            o % 2
              ? Dt(Object(h), !0).forEach(function (u) {
                  Lt(a, u, h[u]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    a,
                    Object.getOwnPropertyDescriptors(h),
                  )
                : Dt(Object(h)).forEach(function (u) {
                    Object.defineProperty(
                      a,
                      u,
                      Object.getOwnPropertyDescriptor(h, u),
                    );
                  });
          }
          return a;
        }
        function Lt(a, o, h) {
          return (
            (o = et(o)),
            o in a
              ? Object.defineProperty(a, o, {
                  value: h,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (a[o] = h),
            a
          );
        }
        function et(a) {
          var o = Rt(a, "string");
          return yt(o) == "symbol" ? o : o + "";
        }
        function Rt(a, o) {
          if (yt(a) != "object" || !a) return a;
          var h = a[Symbol.toPrimitive];
          if (h !== void 0) {
            var u = h.call(a, o || "default");
            if (yt(u) != "object") return u;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (o === "string" ? String : Number)(a);
        }
        function ut() {
          return (
            (ut = Object.assign
              ? Object.assign.bind()
              : function (a) {
                  for (var o = 1; o < arguments.length; o++) {
                    var h = arguments[o];
                    for (var u in h)
                      Object.prototype.hasOwnProperty.call(h, u) &&
                        (a[u] = h[u]);
                  }
                  return a;
                }),
            ut.apply(this, arguments)
          );
        }
        function B(a, o) {
          if (a == null) return {};
          var h = l(a, o),
            u,
            P;
          if (Object.getOwnPropertySymbols) {
            var E = Object.getOwnPropertySymbols(a);
            for (P = 0; P < E.length; P++)
              (u = E[P]),
                !(o.indexOf(u) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(a, u) &&
                  (h[u] = a[u]);
          }
          return h;
        }
        function l(a, o) {
          if (a == null) return {};
          var h = {};
          for (var u in a)
            if (Object.prototype.hasOwnProperty.call(a, u)) {
              if (o.indexOf(u) >= 0) continue;
              h[u] = a[u];
            }
          return h;
        }
        var c = function (o) {
          var h = o.fill;
          if (!h || h === "none") return null;
          var u = o.fillOpacity,
            P = o.x,
            E = o.y,
            W = o.width,
            $ = o.height,
            _ = o.ry;
          return H.createElement("rect", {
            x: P,
            y: E,
            ry: _,
            width: W,
            height: $,
            stroke: "none",
            fill: h,
            fillOpacity: u,
            className: "recharts-cartesian-grid-bg",
          });
        };
        function g(a, o) {
          var h;
          if (H.isValidElement(a)) h = H.cloneElement(a, o);
          else if (Et()(a)) h = a(o);
          else {
            var u = o.x1,
              P = o.y1,
              E = o.x2,
              W = o.y2,
              $ = o.key,
              _ = B(o, Nt),
              N = (0, bt.J9)(_, !1),
              p = N.offset,
              q = B(N, Bt);
            h = H.createElement(
              "line",
              ut({}, q, { x1: u, y1: P, x2: E, y2: W, fill: "none", key: $ }),
            );
          }
          return h;
        }
        function M(a) {
          var o = a.x,
            h = a.width,
            u = a.horizontal,
            P = u === void 0 ? !0 : u,
            E = a.horizontalPoints;
          if (!P || !E || !E.length) return null;
          var W = E.map(function ($, _) {
            var N = K(
              K({}, a),
              {},
              {
                x1: o,
                y1: $,
                x2: o + h,
                y2: $,
                key: "line-".concat(_),
                index: _,
              },
            );
            return g(P, N);
          });
          return H.createElement(
            "g",
            { className: "recharts-cartesian-grid-horizontal" },
            W,
          );
        }
        function ft(a) {
          var o = a.y,
            h = a.height,
            u = a.vertical,
            P = u === void 0 ? !0 : u,
            E = a.verticalPoints;
          if (!P || !E || !E.length) return null;
          var W = E.map(function ($, _) {
            var N = K(
              K({}, a),
              {},
              {
                x1: $,
                y1: o,
                x2: $,
                y2: o + h,
                key: "line-".concat(_),
                index: _,
              },
            );
            return g(P, N);
          });
          return H.createElement(
            "g",
            { className: "recharts-cartesian-grid-vertical" },
            W,
          );
        }
        function ot(a) {
          var o = a.horizontalFill,
            h = a.fillOpacity,
            u = a.x,
            P = a.y,
            E = a.width,
            W = a.height,
            $ = a.horizontalPoints,
            _ = a.horizontal,
            N = _ === void 0 ? !0 : _;
          if (!N || !o || !o.length) return null;
          var p = $.map(function (F) {
            return Math.round(F + P - P);
          }).sort(function (F, T) {
            return F - T;
          });
          P !== p[0] && p.unshift(0);
          var q = p.map(function (F, T) {
            var ht = !p[T + 1],
              dt = ht ? P + W - F : p[T + 1] - F;
            if (dt <= 0) return null;
            var G = T % o.length;
            return H.createElement("rect", {
              key: "react-".concat(T),
              y: F,
              x: u,
              height: dt,
              width: E,
              stroke: "none",
              fill: o[G],
              fillOpacity: h,
              className: "recharts-cartesian-grid-bg",
            });
          });
          return H.createElement(
            "g",
            { className: "recharts-cartesian-gridstripes-horizontal" },
            q,
          );
        }
        function Q(a) {
          var o = a.vertical,
            h = o === void 0 ? !0 : o,
            u = a.verticalFill,
            P = a.fillOpacity,
            E = a.x,
            W = a.y,
            $ = a.width,
            _ = a.height,
            N = a.verticalPoints;
          if (!h || !u || !u.length) return null;
          var p = N.map(function (F) {
            return Math.round(F + E - E);
          }).sort(function (F, T) {
            return F - T;
          });
          E !== p[0] && p.unshift(0);
          var q = p.map(function (F, T) {
            var ht = !p[T + 1],
              dt = ht ? E + $ - F : p[T + 1] - F;
            if (dt <= 0) return null;
            var G = T % u.length;
            return H.createElement("rect", {
              key: "react-".concat(T),
              x: F,
              y: W,
              width: dt,
              height: _,
              stroke: "none",
              fill: u[G],
              fillOpacity: P,
              className: "recharts-cartesian-grid-bg",
            });
          });
          return H.createElement(
            "g",
            { className: "recharts-cartesian-gridstripes-vertical" },
            q,
          );
        }
        var gt = function (o, h) {
            var u = o.xAxis,
              P = o.width,
              E = o.height,
              W = o.offset;
            return (0, wt.PW)(
              (0, ct.f)(
                K(
                  K(K({}, It.u.defaultProps), u),
                  {},
                  {
                    ticks: (0, wt.Rh)(u, !0),
                    viewBox: { x: 0, y: 0, width: P, height: E },
                  },
                ),
              ),
              W.left,
              W.left + W.width,
              h,
            );
          },
          U = function (o, h) {
            var u = o.yAxis,
              P = o.width,
              E = o.height,
              W = o.offset;
            return (0, wt.PW)(
              (0, ct.f)(
                K(
                  K(K({}, It.u.defaultProps), u),
                  {},
                  {
                    ticks: (0, wt.Rh)(u, !0),
                    viewBox: { x: 0, y: 0, width: P, height: E },
                  },
                ),
              ),
              W.top,
              W.top + W.height,
              h,
            );
          },
          rt = {
            horizontal: !0,
            vertical: !0,
            horizontalPoints: [],
            verticalPoints: [],
            stroke: "#ccc",
            fill: "none",
            verticalFill: [],
            horizontalFill: [],
          };
        function Y(a) {
          var o,
            h,
            u,
            P,
            E,
            W,
            $ = (0, k.yi)(),
            _ = (0, k.rY)(),
            N = (0, k.hj)(),
            p = K(
              K({}, a),
              {},
              {
                stroke: (o = a.stroke) !== null && o !== void 0 ? o : rt.stroke,
                fill: (h = a.fill) !== null && h !== void 0 ? h : rt.fill,
                horizontal:
                  (u = a.horizontal) !== null && u !== void 0
                    ? u
                    : rt.horizontal,
                horizontalFill:
                  (P = a.horizontalFill) !== null && P !== void 0
                    ? P
                    : rt.horizontalFill,
                vertical:
                  (E = a.vertical) !== null && E !== void 0 ? E : rt.vertical,
                verticalFill:
                  (W = a.verticalFill) !== null && W !== void 0
                    ? W
                    : rt.verticalFill,
                x: (0, tt.Et)(a.x) ? a.x : N.left,
                y: (0, tt.Et)(a.y) ? a.y : N.top,
                width: (0, tt.Et)(a.width) ? a.width : N.width,
                height: (0, tt.Et)(a.height) ? a.height : N.height,
              },
            ),
            q = p.x,
            F = p.y,
            T = p.width,
            ht = p.height,
            dt = p.syncWithTicks,
            G = p.horizontalValues,
            Tt = p.verticalValues,
            J = (0, k.pj)(),
            nt = (0, k.$G)();
          if (
            !(0, tt.Et)(T) ||
            T <= 0 ||
            !(0, tt.Et)(ht) ||
            ht <= 0 ||
            !(0, tt.Et)(q) ||
            q !== +q ||
            !(0, tt.Et)(F) ||
            F !== +F
          )
            return null;
          var V = p.verticalCoordinatesGenerator || gt,
            Z = p.horizontalCoordinatesGenerator || U,
            lt = p.horizontalPoints,
            st = p.verticalPoints;
          if ((!lt || !lt.length) && Et()(Z)) {
            var St = G && G.length,
              At = Z(
                {
                  yAxis: nt
                    ? K(K({}, nt), {}, { ticks: St ? G : nt.ticks })
                    : void 0,
                  width: $,
                  height: _,
                  offset: N,
                },
                St ? !0 : dt,
              );
            (0, Wt.R)(
              Array.isArray(At),
              "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
                yt(At),
                "]",
              ),
            ),
              Array.isArray(At) && (lt = At);
          }
          if ((!st || !st.length) && Et()(V)) {
            var jt = Tt && Tt.length,
              xt = V(
                {
                  xAxis: J
                    ? K(K({}, J), {}, { ticks: jt ? Tt : J.ticks })
                    : void 0,
                  width: $,
                  height: _,
                  offset: N,
                },
                jt ? !0 : dt,
              );
            (0, Wt.R)(
              Array.isArray(xt),
              "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
                yt(xt),
                "]",
              ),
            ),
              Array.isArray(xt) && (st = xt);
          }
          return H.createElement(
            "g",
            { className: "recharts-cartesian-grid" },
            H.createElement(c, {
              fill: p.fill,
              fillOpacity: p.fillOpacity,
              x: p.x,
              y: p.y,
              width: p.width,
              height: p.height,
              ry: p.ry,
            }),
            H.createElement(
              M,
              ut({}, p, {
                offset: N,
                horizontalPoints: lt,
                xAxis: J,
                yAxis: nt,
              }),
            ),
            H.createElement(
              ft,
              ut({}, p, { offset: N, verticalPoints: st, xAxis: J, yAxis: nt }),
            ),
            H.createElement(ot, ut({}, p, { horizontalPoints: lt })),
            H.createElement(Q, ut({}, p, { verticalPoints: st })),
          );
        }
        Y.displayName = "CartesianGrid";
      },
      61141: (Gt, Mt, v) => {
        v.d(Mt, { X: () => Oe });
        var H = v(98403),
          d = v(90626),
          Et = v(34164),
          Wt = v(86356),
          tt = v(3316),
          bt = v.n(tt),
          wt = v(82544),
          ct = v.n(wt),
          It = v(64609),
          k = v.n(It),
          Nt = v(27367),
          Bt = v.n(Nt),
          yt = v(58782),
          Dt = v.n(yt),
          K = v(33487),
          Lt = v(21687),
          et = v(75055),
          Rt = v(12244),
          ut = v(59640),
          B = v(96714),
          l = v(24633),
          c = v(93563),
          g = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
          M = ["key"],
          ft;
        function ot(e) {
          "@babel/helpers - typeof";
          return (
            (ot =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      typeof Symbol == "function" &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            ot(e)
          );
        }
        function Q(e, t) {
          if (e == null) return {};
          var n = gt(e, t),
            r,
            i;
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (i = 0; i < s.length; i++)
              (r = s[i]),
                !(t.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]);
          }
          return n;
        }
        function gt(e, t) {
          if (e == null) return {};
          var n = {};
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              if (t.indexOf(r) >= 0) continue;
              n[r] = e[r];
            }
          return n;
        }
        function U() {
          return (
            (U = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            U.apply(this, arguments)
          );
        }
        function rt(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Y(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2
              ? rt(Object(n), !0).forEach(function (r) {
                  p(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : rt(Object(n)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(n, r),
                    );
                  });
          }
          return e;
        }
        function a(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, q(r.key), r);
          }
        }
        function h(e, t, n) {
          return (
            t && o(e.prototype, t),
            n && o(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function u(e, t, n) {
          return (
            (t = $(t)),
            P(
              e,
              W()
                ? Reflect.construct(t, n || [], $(e).constructor)
                : t.apply(e, n),
            )
          );
        }
        function P(e, t) {
          if (t && (ot(t) === "object" || typeof t == "function")) return t;
          if (t !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return E(e);
        }
        function E(e) {
          if (e === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        function W() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (W = function () {
            return !!e;
          })();
        }
        function $(e) {
          return (
            ($ = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (n) {
                  return n.__proto__ || Object.getPrototypeOf(n);
                }),
            $(e)
          );
        }
        function _(e, t) {
          if (typeof t != "function" && t !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && N(e, t);
        }
        function N(e, t) {
          return (
            (N = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (r, i) {
                  return (r.__proto__ = i), r;
                }),
            N(e, t)
          );
        }
        function p(e, t, n) {
          return (
            (t = q(t)),
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function q(e) {
          var t = F(e, "string");
          return ot(t) == "symbol" ? t : t + "";
        }
        function F(e, t) {
          if (ot(e) != "object" || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (n !== void 0) {
            var r = n.call(e, t || "default");
            if (ot(r) != "object") return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }
        var T = (function (e) {
          function t() {
            var n;
            a(this, t);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              (n = u(this, t, [].concat(i))),
              p(n, "state", { isAnimationFinished: !0 }),
              p(n, "id", (0, B.NF)("recharts-area-")),
              p(n, "handleAnimationEnd", function () {
                var f = n.props.onAnimationEnd;
                n.setState({ isAnimationFinished: !0 }), bt()(f) && f();
              }),
              p(n, "handleAnimationStart", function () {
                var f = n.props.onAnimationStart;
                n.setState({ isAnimationFinished: !1 }), bt()(f) && f();
              }),
              n
            );
          }
          return (
            _(t, e),
            h(
              t,
              [
                {
                  key: "renderDots",
                  value: function (r, i, s) {
                    var f = this.props.isAnimationActive,
                      A = this.state.isAnimationFinished;
                    if (f && !A) return null;
                    var x = this.props,
                      m = x.dot,
                      y = x.points,
                      b = x.dataKey,
                      O = (0, c.J9)(this.props, !1),
                      S = (0, c.J9)(m, !0),
                      j = y.map(function (w, L) {
                        var I = Y(
                          Y(Y({ key: "dot-".concat(L), r: 3 }, O), S),
                          {},
                          {
                            index: L,
                            cx: w.x,
                            cy: w.y,
                            dataKey: b,
                            value: w.value,
                            payload: w.payload,
                            points: y,
                          },
                        );
                        return t.renderDotItem(m, I);
                      }),
                      R = {
                        clipPath: r
                          ? "url(#clipPath-"
                              .concat(i ? "" : "dots-")
                              .concat(s, ")")
                          : null,
                      };
                    return d.createElement(
                      et.W,
                      U({ className: "recharts-area-dots" }, R),
                      j,
                    );
                  },
                },
                {
                  key: "renderHorizontalRect",
                  value: function (r) {
                    var i = this.props,
                      s = i.baseLine,
                      f = i.points,
                      A = i.strokeWidth,
                      x = f[0].x,
                      m = f[f.length - 1].x,
                      y = r * Math.abs(x - m),
                      b = ct()(
                        f.map(function (O) {
                          return O.y || 0;
                        }),
                      );
                    return (
                      (0, B.Et)(s) && typeof s == "number"
                        ? (b = Math.max(s, b))
                        : s &&
                          Array.isArray(s) &&
                          s.length &&
                          (b = Math.max(
                            ct()(
                              s.map(function (O) {
                                return O.y || 0;
                              }),
                            ),
                            b,
                          )),
                      (0, B.Et)(b)
                        ? d.createElement("rect", {
                            x: x < m ? x : x - y,
                            y: 0,
                            width: y,
                            height: Math.floor(
                              b + (A ? parseInt("".concat(A), 10) : 1),
                            ),
                          })
                        : null
                    );
                  },
                },
                {
                  key: "renderVerticalRect",
                  value: function (r) {
                    var i = this.props,
                      s = i.baseLine,
                      f = i.points,
                      A = i.strokeWidth,
                      x = f[0].y,
                      m = f[f.length - 1].y,
                      y = r * Math.abs(x - m),
                      b = ct()(
                        f.map(function (O) {
                          return O.x || 0;
                        }),
                      );
                    return (
                      (0, B.Et)(s) && typeof s == "number"
                        ? (b = Math.max(s, b))
                        : s &&
                          Array.isArray(s) &&
                          s.length &&
                          (b = Math.max(
                            ct()(
                              s.map(function (O) {
                                return O.x || 0;
                              }),
                            ),
                            b,
                          )),
                      (0, B.Et)(b)
                        ? d.createElement("rect", {
                            x: 0,
                            y: x < m ? x : x - y,
                            width: b + (A ? parseInt("".concat(A), 10) : 1),
                            height: Math.floor(y),
                          })
                        : null
                    );
                  },
                },
                {
                  key: "renderClipRect",
                  value: function (r) {
                    var i = this.props.layout;
                    return i === "vertical"
                      ? this.renderVerticalRect(r)
                      : this.renderHorizontalRect(r);
                  },
                },
                {
                  key: "renderAreaStatically",
                  value: function (r, i, s, f) {
                    var A = this.props,
                      x = A.layout,
                      m = A.type,
                      y = A.stroke,
                      b = A.connectNulls,
                      O = A.isRange,
                      S = A.ref,
                      j = Q(A, g);
                    return d.createElement(
                      et.W,
                      { clipPath: s ? "url(#clipPath-".concat(f, ")") : null },
                      d.createElement(
                        K.I,
                        U({}, (0, c.J9)(j, !0), {
                          points: r,
                          connectNulls: b,
                          type: m,
                          baseLine: i,
                          layout: x,
                          stroke: "none",
                          className: "recharts-area-area",
                        }),
                      ),
                      y !== "none" &&
                        d.createElement(
                          K.I,
                          U({}, (0, c.J9)(this.props, !1), {
                            className: "recharts-area-curve",
                            layout: x,
                            type: m,
                            connectNulls: b,
                            fill: "none",
                            points: r,
                          }),
                        ),
                      y !== "none" &&
                        O &&
                        d.createElement(
                          K.I,
                          U({}, (0, c.J9)(this.props, !1), {
                            className: "recharts-area-curve",
                            layout: x,
                            type: m,
                            connectNulls: b,
                            fill: "none",
                            points: i,
                          }),
                        ),
                    );
                  },
                },
                {
                  key: "renderAreaWithAnimation",
                  value: function (r, i) {
                    var s = this,
                      f = this.props,
                      A = f.points,
                      x = f.baseLine,
                      m = f.isAnimationActive,
                      y = f.animationBegin,
                      b = f.animationDuration,
                      O = f.animationEasing,
                      S = f.animationId,
                      j = this.state,
                      R = j.prevPoints,
                      w = j.prevBaseLine;
                    return d.createElement(
                      Wt.Ay,
                      {
                        begin: y,
                        duration: b,
                        isActive: m,
                        easing: O,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: "area-".concat(S),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (L) {
                        var I = L.t;
                        if (R) {
                          var D = R.length / A.length,
                            z = A.map(function (at, Ot) {
                              var pt = Math.floor(Ot * D);
                              if (R[pt]) {
                                var mt = R[pt],
                                  Pt = (0, B.Dj)(mt.x, at.x),
                                  _t = (0, B.Dj)(mt.y, at.y);
                                return Y(Y({}, at), {}, { x: Pt(I), y: _t(I) });
                              }
                              return at;
                            }),
                            C;
                          if ((0, B.Et)(x) && typeof x == "number") {
                            var X = (0, B.Dj)(w, x);
                            C = X(I);
                          } else if (k()(x) || Bt()(x)) {
                            var it = (0, B.Dj)(w, 0);
                            C = it(I);
                          } else
                            C = x.map(function (at, Ot) {
                              var pt = Math.floor(Ot * D);
                              if (w[pt]) {
                                var mt = w[pt],
                                  Pt = (0, B.Dj)(mt.x, at.x),
                                  _t = (0, B.Dj)(mt.y, at.y);
                                return Y(Y({}, at), {}, { x: Pt(I), y: _t(I) });
                              }
                              return at;
                            });
                          return s.renderAreaStatically(z, C, r, i);
                        }
                        return d.createElement(
                          et.W,
                          null,
                          d.createElement(
                            "defs",
                            null,
                            d.createElement(
                              "clipPath",
                              { id: "animationClipPath-".concat(i) },
                              s.renderClipRect(I),
                            ),
                          ),
                          d.createElement(
                            et.W,
                            {
                              clipPath: "url(#animationClipPath-".concat(
                                i,
                                ")",
                              ),
                            },
                            s.renderAreaStatically(A, x, r, i),
                          ),
                        );
                      },
                    );
                  },
                },
                {
                  key: "renderArea",
                  value: function (r, i) {
                    var s = this.props,
                      f = s.points,
                      A = s.baseLine,
                      x = s.isAnimationActive,
                      m = this.state,
                      y = m.prevPoints,
                      b = m.prevBaseLine,
                      O = m.totalLength;
                    return x &&
                      f &&
                      f.length &&
                      ((!y && O > 0) || !Dt()(y, f) || !Dt()(b, A))
                      ? this.renderAreaWithAnimation(r, i)
                      : this.renderAreaStatically(f, A, r, i);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var r,
                      i = this.props,
                      s = i.hide,
                      f = i.dot,
                      A = i.points,
                      x = i.className,
                      m = i.top,
                      y = i.left,
                      b = i.xAxis,
                      O = i.yAxis,
                      S = i.width,
                      j = i.height,
                      R = i.isAnimationActive,
                      w = i.id;
                    if (s || !A || !A.length) return null;
                    var L = this.state.isAnimationFinished,
                      I = A.length === 1,
                      D = (0, Et.A)("recharts-area", x),
                      z = b && b.allowDataOverflow,
                      C = O && O.allowDataOverflow,
                      X = z || C,
                      it = k()(w) ? this.id : w,
                      at =
                        (r = (0, c.J9)(f, !1)) !== null && r !== void 0
                          ? r
                          : { r: 3, strokeWidth: 2 },
                      Ot = at.r,
                      pt = Ot === void 0 ? 3 : Ot,
                      mt = at.strokeWidth,
                      Pt = mt === void 0 ? 2 : mt,
                      _t = (0, c.sT)(f) ? f : {},
                      te = _t.clipDot,
                      ee = te === void 0 ? !0 : te,
                      Vt = pt * 2 + Pt;
                    return d.createElement(
                      et.W,
                      { className: D },
                      z || C
                        ? d.createElement(
                            "defs",
                            null,
                            d.createElement(
                              "clipPath",
                              { id: "clipPath-".concat(it) },
                              d.createElement("rect", {
                                x: z ? y : y - S / 2,
                                y: C ? m : m - j / 2,
                                width: z ? S : S * 2,
                                height: C ? j : j * 2,
                              }),
                            ),
                            !ee &&
                              d.createElement(
                                "clipPath",
                                { id: "clipPath-dots-".concat(it) },
                                d.createElement("rect", {
                                  x: y - Vt / 2,
                                  y: m - Vt / 2,
                                  width: S + Vt,
                                  height: j + Vt,
                                }),
                              ),
                          )
                        : null,
                      I ? null : this.renderArea(X, it),
                      (f || I) && this.renderDots(X, ee, it),
                      (!R || L) && Rt.Z.renderCallByParent(this.props, A),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (r, i) {
                    return r.animationId !== i.prevAnimationId
                      ? {
                          prevAnimationId: r.animationId,
                          curPoints: r.points,
                          curBaseLine: r.baseLine,
                          prevPoints: i.curPoints,
                          prevBaseLine: i.curBaseLine,
                        }
                      : r.points !== i.curPoints || r.baseLine !== i.curBaseLine
                        ? { curPoints: r.points, curBaseLine: r.baseLine }
                        : null;
                  },
                },
              ],
            )
          );
        })(d.PureComponent);
        (ft = T),
          p(T, "displayName", "Area"),
          p(T, "defaultProps", {
            stroke: "#3182bd",
            fill: "#3182bd",
            fillOpacity: 0.6,
            xAxisId: 0,
            yAxisId: 0,
            legendType: "line",
            connectNulls: !1,
            points: [],
            dot: !1,
            activeDot: !0,
            hide: !1,
            isAnimationActive: !ut.m.isSsr,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          }),
          p(T, "getBaseValue", function (e, t, n, r) {
            var i = e.layout,
              s = e.baseValue,
              f = t.props.baseValue,
              A = f ?? s;
            if ((0, B.Et)(A) && typeof A == "number") return A;
            var x = i === "horizontal" ? r : n,
              m = x.scale.domain();
            if (x.type === "number") {
              var y = Math.max(m[0], m[1]),
                b = Math.min(m[0], m[1]);
              return A === "dataMin"
                ? b
                : A === "dataMax" || y < 0
                  ? y
                  : Math.max(Math.min(m[0], m[1]), 0);
            }
            return A === "dataMin" ? m[0] : A === "dataMax" ? m[1] : m[0];
          }),
          p(T, "getComposedData", function (e) {
            var t = e.props,
              n = e.item,
              r = e.xAxis,
              i = e.yAxis,
              s = e.xAxisTicks,
              f = e.yAxisTicks,
              A = e.bandSize,
              x = e.dataKey,
              m = e.stackedData,
              y = e.dataStartIndex,
              b = e.displayedData,
              O = e.offset,
              S = t.layout,
              j = m && m.length,
              R = ft.getBaseValue(t, n, r, i),
              w = S === "horizontal",
              L = !1,
              I = b.map(function (z, C) {
                var X;
                j
                  ? (X = m[y + C])
                  : ((X = (0, l.kr)(z, x)),
                    Array.isArray(X) ? (L = !0) : (X = [R, X]));
                var it = X[1] == null || (j && (0, l.kr)(z, x) == null);
                return w
                  ? {
                      x: (0, l.nb)({
                        axis: r,
                        ticks: s,
                        bandSize: A,
                        entry: z,
                        index: C,
                      }),
                      y: it ? null : i.scale(X[1]),
                      value: X,
                      payload: z,
                    }
                  : {
                      x: it ? null : r.scale(X[1]),
                      y: (0, l.nb)({
                        axis: i,
                        ticks: f,
                        bandSize: A,
                        entry: z,
                        index: C,
                      }),
                      value: X,
                      payload: z,
                    };
              }),
              D;
            return (
              j || L
                ? (D = I.map(function (z) {
                    var C = Array.isArray(z.value) ? z.value[0] : null;
                    return w
                      ? {
                          x: z.x,
                          y: C != null && z.y != null ? i.scale(C) : null,
                        }
                      : { x: C != null ? r.scale(C) : null, y: z.y };
                  }))
                : (D = w ? i.scale(R) : r.scale(R)),
              Y({ points: I, baseLine: D, layout: S, isRange: L }, O)
            );
          }),
          p(T, "renderDotItem", function (e, t) {
            var n;
            if (d.isValidElement(e)) n = d.cloneElement(e, t);
            else if (bt()(e)) n = e(t);
            else {
              var r = (0, Et.A)(
                  "recharts-area-dot",
                  typeof e != "boolean" ? e.className : "",
                ),
                i = t.key,
                s = Q(t, M);
              n = d.createElement(Lt.c, U({}, s, { key: i, className: r }));
            }
            return n;
          });
        var ht = v(20283),
          dt = v(90865);
        function G(e) {
          "@babel/helpers - typeof";
          return (
            (G =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      typeof Symbol == "function" &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            G(e)
          );
        }
        function Tt(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function J(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, Kt(r.key), r);
          }
        }
        function nt(e, t, n) {
          return (
            t && J(e.prototype, t),
            n && J(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function V(e, t, n) {
          return (
            (t = St(t)),
            Z(
              e,
              st()
                ? Reflect.construct(t, n || [], St(e).constructor)
                : t.apply(e, n),
            )
          );
        }
        function Z(e, t) {
          if (t && (G(t) === "object" || typeof t == "function")) return t;
          if (t !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return lt(e);
        }
        function lt(e) {
          if (e === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        function st() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (st = function () {
            return !!e;
          })();
        }
        function St(e) {
          return (
            (St = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (n) {
                  return n.__proto__ || Object.getPrototypeOf(n);
                }),
            St(e)
          );
        }
        function At(e, t) {
          if (typeof t != "function" && t !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && jt(e, t);
        }
        function jt(e, t) {
          return (
            (jt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (r, i) {
                  return (r.__proto__ = i), r;
                }),
            jt(e, t)
          );
        }
        function xt(e, t, n) {
          return (
            (t = Kt(t)),
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Kt(e) {
          var t = re(e, "string");
          return G(t) == "symbol" ? t : t + "";
        }
        function re(e, t) {
          if (G(e) != "object" || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (n !== void 0) {
            var r = n.call(e, t || "default");
            if (G(r) != "object") return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }
        var Ht = (function (e) {
          function t() {
            return Tt(this, t), V(this, t, arguments);
          }
          return (
            At(t, e),
            nt(t, [
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ])
          );
        })(d.Component);
        xt(Ht, "displayName", "ZAxis"),
          xt(Ht, "defaultProps", {
            zAxisId: 0,
            range: [64, 64],
            scale: "auto",
            type: "number",
          });
        var ne = v(10800),
          ie = v(72040),
          ae = v(43998),
          oe = v(17134),
          Jt = v(53818),
          le = ["option", "isActive"];
        function $t() {
          return (
            ($t = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            $t.apply(this, arguments)
          );
        }
        function se(e, t) {
          if (e == null) return {};
          var n = ce(e, t),
            r,
            i;
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (i = 0; i < s.length; i++)
              (r = s[i]),
                !(t.indexOf(r) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]);
          }
          return n;
        }
        function ce(e, t) {
          if (e == null) return {};
          var n = {};
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              if (t.indexOf(r) >= 0) continue;
              n[r] = e[r];
            }
          return n;
        }
        function ue(e) {
          var t = e.option,
            n = e.isActive,
            r = se(e, le);
          return typeof t == "string"
            ? d.createElement(
                Jt.yp,
                $t(
                  {
                    option: d.createElement(oe.i, $t({ type: t }, r)),
                    isActive: n,
                    shapeType: "symbols",
                  },
                  r,
                ),
              )
            : d.createElement(
                Jt.yp,
                $t({ option: t, isActive: n, shapeType: "symbols" }, r),
              );
        }
        var fe;
        function Ct(e) {
          "@babel/helpers - typeof";
          return (
            (Ct =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      typeof Symbol == "function" &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Ct(e)
          );
        }
        function Ft() {
          return (
            (Ft = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Ft.apply(this, arguments)
          );
        }
        function Xt(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function vt(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2
              ? Xt(Object(n), !0).forEach(function (r) {
                  zt(e, r, n[r]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : Xt(Object(n)).forEach(function (r) {
                    Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(n, r),
                    );
                  });
          }
          return e;
        }
        function he(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function Yt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, qt(r.key), r);
          }
        }
        function de(e, t, n) {
          return (
            t && Yt(e.prototype, t),
            n && Yt(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }
        function ve(e, t, n) {
          return (
            (t = kt(t)),
            ye(
              e,
              Qt()
                ? Reflect.construct(t, n || [], kt(e).constructor)
                : t.apply(e, n),
            )
          );
        }
        function ye(e, t) {
          if (t && (Ct(t) === "object" || typeof t == "function")) return t;
          if (t !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return pe(e);
        }
        function pe(e) {
          if (e === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        function Qt() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Qt = function () {
            return !!e;
          })();
        }
        function kt(e) {
          return (
            (kt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (n) {
                  return n.__proto__ || Object.getPrototypeOf(n);
                }),
            kt(e)
          );
        }
        function me(e, t) {
          if (typeof t != "function" && t !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && Zt(e, t);
        }
        function Zt(e, t) {
          return (
            (Zt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (r, i) {
                  return (r.__proto__ = i), r;
                }),
            Zt(e, t)
          );
        }
        function zt(e, t, n) {
          return (
            (t = qt(t)),
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function qt(e) {
          var t = be(e, "string");
          return Ct(t) == "symbol" ? t : t + "";
        }
        function be(e, t) {
          if (Ct(e) != "object" || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (n !== void 0) {
            var r = n.call(e, t || "default");
            if (Ct(r) != "object") return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }
        var Ut = (function (e) {
          function t() {
            var n;
            he(this, t);
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
              i[s] = arguments[s];
            return (
              (n = ve(this, t, [].concat(i))),
              zt(n, "state", { isAnimationFinished: !1 }),
              zt(n, "handleAnimationEnd", function () {
                n.setState({ isAnimationFinished: !0 });
              }),
              zt(n, "handleAnimationStart", function () {
                n.setState({ isAnimationFinished: !1 });
              }),
              zt(n, "id", (0, B.NF)("recharts-scatter-")),
              n
            );
          }
          return (
            me(t, e),
            de(
              t,
              [
                {
                  key: "renderSymbolsStatically",
                  value: function (r) {
                    var i = this,
                      s = this.props,
                      f = s.shape,
                      A = s.activeShape,
                      x = s.activeIndex,
                      m = (0, c.J9)(this.props, !1);
                    return r.map(function (y, b) {
                      var O = x === b,
                        S = O ? A : f,
                        j = vt(vt({}, m), y);
                      return d.createElement(
                        et.W,
                        Ft(
                          {
                            className: "recharts-scatter-symbol",
                            key: "symbol-"
                              .concat(y?.cx, "-")
                              .concat(y?.cy, "-")
                              .concat(y?.size, "-")
                              .concat(b),
                          },
                          (0, ae.XC)(i.props, y, b),
                          { role: "img" },
                        ),
                        d.createElement(
                          ue,
                          Ft(
                            {
                              option: S,
                              isActive: O,
                              key: "symbol-".concat(b),
                            },
                            j,
                          ),
                        ),
                      );
                    });
                  },
                },
                {
                  key: "renderSymbolsWithAnimation",
                  value: function () {
                    var r = this,
                      i = this.props,
                      s = i.points,
                      f = i.isAnimationActive,
                      A = i.animationBegin,
                      x = i.animationDuration,
                      m = i.animationEasing,
                      y = i.animationId,
                      b = this.state.prevPoints;
                    return d.createElement(
                      Wt.Ay,
                      {
                        begin: A,
                        duration: x,
                        isActive: f,
                        easing: m,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: "pie-".concat(y),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (O) {
                        var S = O.t,
                          j = s.map(function (R, w) {
                            var L = b && b[w];
                            if (L) {
                              var I = (0, B.Dj)(L.cx, R.cx),
                                D = (0, B.Dj)(L.cy, R.cy),
                                z = (0, B.Dj)(L.size, R.size);
                              return vt(
                                vt({}, R),
                                {},
                                { cx: I(S), cy: D(S), size: z(S) },
                              );
                            }
                            var C = (0, B.Dj)(0, R.size);
                            return vt(vt({}, R), {}, { size: C(S) });
                          });
                        return d.createElement(
                          et.W,
                          null,
                          r.renderSymbolsStatically(j),
                        );
                      },
                    );
                  },
                },
                {
                  key: "renderSymbols",
                  value: function () {
                    var r = this.props,
                      i = r.points,
                      s = r.isAnimationActive,
                      f = this.state.prevPoints;
                    return s && i && i.length && (!f || !Dt()(f, i))
                      ? this.renderSymbolsWithAnimation()
                      : this.renderSymbolsStatically(i);
                  },
                },
                {
                  key: "renderErrorBar",
                  value: function () {
                    var r = this.props.isAnimationActive;
                    if (r && !this.state.isAnimationFinished) return null;
                    var i = this.props,
                      s = i.points,
                      f = i.xAxis,
                      A = i.yAxis,
                      x = i.children,
                      m = (0, c.aS)(x, ne.u);
                    return m
                      ? m.map(function (y, b) {
                          var O = y.props,
                            S = O.direction,
                            j = O.dataKey;
                          return d.cloneElement(y, {
                            key: "".concat(S, "-").concat(j, "-").concat(s[b]),
                            data: s,
                            xAxis: f,
                            yAxis: A,
                            layout: S === "x" ? "vertical" : "horizontal",
                            dataPointFormatter: function (w, L) {
                              return {
                                x: w.cx,
                                y: w.cy,
                                value: S === "x" ? +w.node.x : +w.node.y,
                                errorVal: (0, l.kr)(w, L),
                              };
                            },
                          });
                        })
                      : null;
                  },
                },
                {
                  key: "renderLine",
                  value: function () {
                    var r = this.props,
                      i = r.points,
                      s = r.line,
                      f = r.lineType,
                      A = r.lineJointType,
                      x = (0, c.J9)(this.props, !1),
                      m = (0, c.J9)(s, !1),
                      y,
                      b;
                    if (f === "joint")
                      y = i.map(function (D) {
                        return { x: D.cx, y: D.cy };
                      });
                    else if (f === "fitting") {
                      var O = (0, B.jG)(i),
                        S = O.xmin,
                        j = O.xmax,
                        R = O.a,
                        w = O.b,
                        L = function (z) {
                          return R * z + w;
                        };
                      y = [
                        { x: S, y: L(S) },
                        { x: j, y: L(j) },
                      ];
                    }
                    var I = vt(
                      vt(
                        vt({}, x),
                        {},
                        { fill: "none", stroke: x && x.fill },
                        m,
                      ),
                      {},
                      { points: y },
                    );
                    return (
                      d.isValidElement(s)
                        ? (b = d.cloneElement(s, I))
                        : bt()(s)
                          ? (b = s(I))
                          : (b = d.createElement(K.I, Ft({}, I, { type: A }))),
                      d.createElement(
                        et.W,
                        {
                          className: "recharts-scatter-line",
                          key: "recharts-scatter-line",
                        },
                        b,
                      )
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var r = this.props,
                      i = r.hide,
                      s = r.points,
                      f = r.line,
                      A = r.className,
                      x = r.xAxis,
                      m = r.yAxis,
                      y = r.left,
                      b = r.top,
                      O = r.width,
                      S = r.height,
                      j = r.id,
                      R = r.isAnimationActive;
                    if (i || !s || !s.length) return null;
                    var w = this.state.isAnimationFinished,
                      L = (0, Et.A)("recharts-scatter", A),
                      I = x && x.allowDataOverflow,
                      D = m && m.allowDataOverflow,
                      z = I || D,
                      C = k()(j) ? this.id : j;
                    return d.createElement(
                      et.W,
                      {
                        className: L,
                        clipPath: z ? "url(#clipPath-".concat(C, ")") : null,
                      },
                      I || D
                        ? d.createElement(
                            "defs",
                            null,
                            d.createElement(
                              "clipPath",
                              { id: "clipPath-".concat(C) },
                              d.createElement("rect", {
                                x: I ? y : y - O / 2,
                                y: D ? b : b - S / 2,
                                width: I ? O : O * 2,
                                height: D ? S : S * 2,
                              }),
                            ),
                          )
                        : null,
                      f && this.renderLine(),
                      this.renderErrorBar(),
                      d.createElement(
                        et.W,
                        { key: "recharts-scatter-symbols" },
                        this.renderSymbols(),
                      ),
                      (!R || w) && Rt.Z.renderCallByParent(this.props, s),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (r, i) {
                    return r.animationId !== i.prevAnimationId
                      ? {
                          prevAnimationId: r.animationId,
                          curPoints: r.points,
                          prevPoints: i.curPoints,
                        }
                      : r.points !== i.curPoints
                        ? { curPoints: r.points }
                        : null;
                  },
                },
              ],
            )
          );
        })(d.PureComponent);
        (fe = Ut),
          zt(Ut, "displayName", "Scatter"),
          zt(Ut, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            zAxisId: 0,
            legendType: "circle",
            lineType: "joint",
            lineJointType: "linear",
            data: [],
            shape: "circle",
            hide: !1,
            isAnimationActive: !ut.m.isSsr,
            animationBegin: 0,
            animationDuration: 400,
            animationEasing: "linear",
          }),
          zt(Ut, "getComposedData", function (e) {
            var t = e.xAxis,
              n = e.yAxis,
              r = e.zAxis,
              i = e.item,
              s = e.displayedData,
              f = e.xAxisTicks,
              A = e.yAxisTicks,
              x = e.offset,
              m = i.props.tooltipType,
              y = (0, c.aS)(i.props.children, ie.f),
              b = k()(t.dataKey) ? i.props.dataKey : t.dataKey,
              O = k()(n.dataKey) ? i.props.dataKey : n.dataKey,
              S = r && r.dataKey,
              j = r ? r.range : Ht.defaultProps.range,
              R = j && j[0],
              w = t.scale.bandwidth ? t.scale.bandwidth() : 0,
              L = n.scale.bandwidth ? n.scale.bandwidth() : 0,
              I = s.map(function (D, z) {
                var C = (0, l.kr)(D, b),
                  X = (0, l.kr)(D, O),
                  it = (!k()(S) && (0, l.kr)(D, S)) || "-",
                  at = [
                    {
                      name: k()(t.dataKey) ? i.props.name : t.name || t.dataKey,
                      unit: t.unit || "",
                      value: C,
                      payload: D,
                      dataKey: b,
                      type: m,
                    },
                    {
                      name: k()(n.dataKey) ? i.props.name : n.name || n.dataKey,
                      unit: n.unit || "",
                      value: X,
                      payload: D,
                      dataKey: O,
                      type: m,
                    },
                  ];
                it !== "-" &&
                  at.push({
                    name: r.name || r.dataKey,
                    unit: r.unit || "",
                    value: it,
                    payload: D,
                    dataKey: S,
                    type: m,
                  });
                var Ot = (0, l.nb)({
                    axis: t,
                    ticks: f,
                    bandSize: w,
                    entry: D,
                    index: z,
                    dataKey: b,
                  }),
                  pt = (0, l.nb)({
                    axis: n,
                    ticks: A,
                    bandSize: L,
                    entry: D,
                    index: z,
                    dataKey: O,
                  }),
                  mt = it !== "-" ? r.scale(it) : R,
                  Pt = Math.sqrt(Math.max(mt, 0) / Math.PI);
                return vt(
                  vt({}, D),
                  {},
                  {
                    cx: Ot,
                    cy: pt,
                    x: Ot - Pt,
                    y: pt - Pt,
                    xAxis: t,
                    yAxis: n,
                    zAxis: r,
                    width: 2 * Pt,
                    height: 2 * Pt,
                    size: mt,
                    node: { x: C, y: X, z: it },
                    tooltipPayload: at,
                    tooltipPosition: { x: Ot, y: pt },
                    payload: D,
                  },
                  y && y[z] && y[z].props,
                );
              });
            return vt({ points: I }, x);
          });
        var ge = v(90150),
          Ae = v(73077),
          xe = v(12260),
          Oe = (0, H.gu)({
            chartName: "ComposedChart",
            GraphicalChild: [dt.N, T, ht.y, Ut],
            axisComponents: [
              { axisType: "xAxis", AxisComp: ge.W },
              { axisType: "yAxis", AxisComp: Ae.h },
              { axisType: "zAxis", AxisComp: Ht },
            ],
            formatAxisMap: xe.pr,
          });
      },
      32671: (Gt, Mt, v) => {
        v.d(Mt, { u: () => B });
        var H = v(34164),
          d = v(90626),
          Et = v(51504),
          Wt = v.n(Et),
          tt = v(96714),
          bt = v(27664),
          wt = v(93563);
        function ct(l) {
          "@babel/helpers - typeof";
          return (
            (ct =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (c) {
                    return typeof c;
                  }
                : function (c) {
                    return c &&
                      typeof Symbol == "function" &&
                      c.constructor === Symbol &&
                      c !== Symbol.prototype
                      ? "symbol"
                      : typeof c;
                  }),
            ct(l)
          );
        }
        function It(l, c) {
          var g = Object.keys(l);
          if (Object.getOwnPropertySymbols) {
            var M = Object.getOwnPropertySymbols(l);
            c &&
              (M = M.filter(function (ft) {
                return Object.getOwnPropertyDescriptor(l, ft).enumerable;
              })),
              g.push.apply(g, M);
          }
          return g;
        }
        function k(l) {
          for (var c = 1; c < arguments.length; c++) {
            var g = arguments[c] != null ? arguments[c] : {};
            c % 2
              ? It(Object(g), !0).forEach(function (M) {
                  Nt(l, M, g[M]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    l,
                    Object.getOwnPropertyDescriptors(g),
                  )
                : It(Object(g)).forEach(function (M) {
                    Object.defineProperty(
                      l,
                      M,
                      Object.getOwnPropertyDescriptor(g, M),
                    );
                  });
          }
          return l;
        }
        function Nt(l, c, g) {
          return (
            (c = Bt(c)),
            c in l
              ? Object.defineProperty(l, c, {
                  value: g,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (l[c] = g),
            l
          );
        }
        function Bt(l) {
          var c = yt(l, "string");
          return ct(c) == "symbol" ? c : c + "";
        }
        function yt(l, c) {
          if (ct(l) != "object" || !l) return l;
          var g = l[Symbol.toPrimitive];
          if (g !== void 0) {
            var M = g.call(l, c || "default");
            if (ct(M) != "object") return M;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (c === "string" ? String : Number)(l);
        }
        function Dt(l, c) {
          return ut(l) || Rt(l, c) || Lt(l, c) || K();
        }
        function K() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Lt(l, c) {
          if (l) {
            if (typeof l == "string") return et(l, c);
            var g = Object.prototype.toString.call(l).slice(8, -1);
            if (
              (g === "Object" && l.constructor && (g = l.constructor.name),
              g === "Map" || g === "Set")
            )
              return Array.from(l);
            if (
              g === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)
            )
              return et(l, c);
          }
        }
        function et(l, c) {
          (c == null || c > l.length) && (c = l.length);
          for (var g = 0, M = new Array(c); g < c; g++) M[g] = l[g];
          return M;
        }
        function Rt(l, c) {
          var g =
            l == null
              ? null
              : (typeof Symbol < "u" && l[Symbol.iterator]) || l["@@iterator"];
          if (g != null) {
            var M,
              ft,
              ot,
              Q,
              gt = [],
              U = !0,
              rt = !1;
            try {
              if (((ot = (g = g.call(l)).next), c === 0)) {
                if (Object(g) !== g) return;
                U = !1;
              } else
                for (
                  ;
                  !(U = (M = ot.call(g)).done) &&
                  (gt.push(M.value), gt.length !== c);
                  U = !0
                );
            } catch (Y) {
              (rt = !0), (ft = Y);
            } finally {
              try {
                if (
                  !U &&
                  g.return != null &&
                  ((Q = g.return()), Object(Q) !== Q)
                )
                  return;
              } finally {
                if (rt) throw ft;
              }
            }
            return gt;
          }
        }
        function ut(l) {
          if (Array.isArray(l)) return l;
        }
        var B = (0, d.forwardRef)(function (l, c) {
          var g = l.aspect,
            M = l.initialDimension,
            ft = M === void 0 ? { width: -1, height: -1 } : M,
            ot = l.width,
            Q = ot === void 0 ? "100%" : ot,
            gt = l.height,
            U = gt === void 0 ? "100%" : gt,
            rt = l.minWidth,
            Y = rt === void 0 ? 0 : rt,
            a = l.minHeight,
            o = l.maxHeight,
            h = l.children,
            u = l.debounce,
            P = u === void 0 ? 0 : u,
            E = l.id,
            W = l.className,
            $ = l.onResize,
            _ = l.style,
            N = _ === void 0 ? {} : _,
            p = (0, d.useRef)(null),
            q = (0, d.useRef)();
          (q.current = $),
            (0, d.useImperativeHandle)(c, function () {
              return Object.defineProperty(p.current, "current", {
                get: function () {
                  return (
                    console.warn(
                      "The usage of ref.current.current is deprecated and will no longer be supported.",
                    ),
                    p.current
                  );
                },
                configurable: !0,
              });
            });
          var F = (0, d.useState)({
              containerWidth: ft.width,
              containerHeight: ft.height,
            }),
            T = Dt(F, 2),
            ht = T[0],
            dt = T[1],
            G = (0, d.useCallback)(function (J, nt) {
              dt(function (V) {
                var Z = Math.round(J),
                  lt = Math.round(nt);
                return V.containerWidth === Z && V.containerHeight === lt
                  ? V
                  : { containerWidth: Z, containerHeight: lt };
              });
            }, []);
          (0, d.useEffect)(
            function () {
              var J = function (St) {
                var At,
                  jt = St[0].contentRect,
                  xt = jt.width,
                  Kt = jt.height;
                G(xt, Kt),
                  (At = q.current) === null ||
                    At === void 0 ||
                    At.call(q, xt, Kt);
              };
              P > 0 && (J = Wt()(J, P, { trailing: !0, leading: !1 }));
              var nt = new ResizeObserver(J),
                V = p.current.getBoundingClientRect(),
                Z = V.width,
                lt = V.height;
              return (
                G(Z, lt),
                nt.observe(p.current),
                function () {
                  nt.disconnect();
                }
              );
            },
            [G, P],
          );
          var Tt = (0, d.useMemo)(
            function () {
              var J = ht.containerWidth,
                nt = ht.containerHeight;
              if (J < 0 || nt < 0) return null;
              (0, bt.R)(
                (0, tt._3)(Q) || (0, tt._3)(U),
                `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
                Q,
                U,
              ),
                (0, bt.R)(
                  !g || g > 0,
                  "The aspect(%s) must be greater than zero.",
                  g,
                );
              var V = (0, tt._3)(Q) ? J : Q,
                Z = (0, tt._3)(U) ? nt : U;
              g &&
                g > 0 &&
                (V ? (Z = V / g) : Z && (V = Z * g), o && Z > o && (Z = o)),
                (0, bt.R)(
                  V > 0 || Z > 0,
                  `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
                  V,
                  Z,
                  Q,
                  U,
                  Y,
                  a,
                  g,
                );
              var lt =
                !Array.isArray(h) && (0, wt.Mn)(h.type).endsWith("Chart");
              return d.Children.map(h, function (st) {
                return d.isValidElement(st)
                  ? (0, d.cloneElement)(
                      st,
                      k(
                        { width: V, height: Z },
                        lt
                          ? {
                              style: k(
                                {
                                  height: "100%",
                                  width: "100%",
                                  maxHeight: Z,
                                  maxWidth: V,
                                },
                                st.props.style,
                              ),
                            }
                          : {},
                      ),
                    )
                  : st;
              });
            },
            [g, h, U, o, a, Y, ht, Q],
          );
          return d.createElement(
            "div",
            {
              id: E ? "".concat(E) : void 0,
              className: (0, H.A)("recharts-responsive-container", W),
              style: k(
                k({}, N),
                {},
                {
                  width: Q,
                  height: U,
                  minWidth: Y,
                  minHeight: a,
                  maxHeight: o,
                },
              ),
              ref: p,
            },
            Tt,
          );
        });
      },
    },
  ]);
})();
