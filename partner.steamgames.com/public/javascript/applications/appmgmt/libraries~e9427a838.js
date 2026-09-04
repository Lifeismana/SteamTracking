/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7935],
    {
      20283: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { y: () => ct });
        var s = n(90626),
          rt = n(34164),
          K = n(86356),
          q = n(58782),
          U = n.n(q),
          Q = n(64609),
          z = n.n(Q),
          et = n(75055),
          ot = n(10800),
          at = n(72040),
          it = n(12244),
          F = n(96714),
          dt = n(93563),
          V = n(59640),
          pt = n(24633),
          Pt = n(43998),
          L = n(68841),
          Kt = n(53818),
          Dt = ["x", "y"];
        function wt(l) {
          "@babel/helpers - typeof";
          return (
            (wt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (h) {
                    return typeof h;
                  }
                : function (h) {
                    return h &&
                      typeof Symbol == "function" &&
                      h.constructor === Symbol &&
                      h !== Symbol.prototype
                      ? "symbol"
                      : typeof h;
                  }),
            wt(l)
          );
        }
        function Mt() {
          return (
            (Mt = Object.assign
              ? Object.assign.bind()
              : function (l) {
                  for (var h = 1; h < arguments.length; h++) {
                    var O = arguments[h];
                    for (var f in O)
                      Object.prototype.hasOwnProperty.call(O, f) &&
                        (l[f] = O[f]);
                  }
                  return l;
                }),
            Mt.apply(this, arguments)
          );
        }
        function $(l, h) {
          var O = Object.keys(l);
          if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(l);
            h &&
              (f = f.filter(function (D) {
                return Object.getOwnPropertyDescriptor(l, D).enumerable;
              })),
              O.push.apply(O, f);
          }
          return O;
        }
        function w(l) {
          for (var h = 1; h < arguments.length; h++) {
            var O = arguments[h] != null ? arguments[h] : {};
            h % 2
              ? $(Object(O), !0).forEach(function (f) {
                  M(l, f, O[f]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    l,
                    Object.getOwnPropertyDescriptors(O),
                  )
                : $(Object(O)).forEach(function (f) {
                    Object.defineProperty(
                      l,
                      f,
                      Object.getOwnPropertyDescriptor(O, f),
                    );
                  });
          }
          return l;
        }
        function M(l, h, O) {
          return (
            (h = g(h)),
            h in l
              ? Object.defineProperty(l, h, {
                  value: O,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (l[h] = O),
            l
          );
        }
        function g(l) {
          var h = v(l, "string");
          return wt(h) == "symbol" ? h : h + "";
        }
        function v(l, h) {
          if (wt(l) != "object" || !l) return l;
          var O = l[Symbol.toPrimitive];
          if (O !== void 0) {
            var f = O.call(l, h || "default");
            if (wt(f) != "object") return f;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (h === "string" ? String : Number)(l);
        }
        function ut(l, h) {
          if (l == null) return {};
          var O = lt(l, h),
            f,
            D;
          if (Object.getOwnPropertySymbols) {
            var tt = Object.getOwnPropertySymbols(l);
            for (D = 0; D < tt.length; D++)
              (f = tt[D]),
                !(h.indexOf(f) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(l, f) &&
                  (O[f] = l[f]);
          }
          return O;
        }
        function lt(l, h) {
          if (l == null) return {};
          var O = {};
          for (var f in l)
            if (Object.prototype.hasOwnProperty.call(l, f)) {
              if (h.indexOf(f) >= 0) continue;
              O[f] = l[f];
            }
          return O;
        }
        function Nt(l, h) {
          var O = l.x,
            f = l.y,
            D = ut(l, Dt),
            tt = "".concat(O),
            Et = parseInt(tt, 10),
            Wt = "".concat(f),
            Ft = parseInt(Wt, 10),
            ie = "".concat(h.height || D.height),
            k = parseInt(ie, 10),
            G = "".concat(h.width || D.width),
            j = parseInt(G, 10);
          return w(
            w(w(w(w({}, h), D), Et ? { x: Et } : {}), Ft ? { y: Ft } : {}),
            {},
            { height: k, width: j, name: h.name, radius: h.radius },
          );
        }
        function C(l) {
          return s.createElement(
            Kt.yp,
            Mt(
              {
                shapeType: "rectangle",
                propTransformer: Nt,
                activeClassName: "recharts-active-bar",
              },
              l,
            ),
          );
        }
        var B = function (h) {
            var O =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0;
            return function (f, D) {
              if (typeof h == "number") return h;
              var tt = (0, F.Et)(f) || (0, F.uy)(f);
              return tt ? h(f, D) : (tt || (0, L.A)(!1), O);
            };
          },
          nt = ["value", "background"],
          bt;
        function P(l) {
          "@babel/helpers - typeof";
          return (
            (P =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (h) {
                    return typeof h;
                  }
                : function (h) {
                    return h &&
                      typeof Symbol == "function" &&
                      h.constructor === Symbol &&
                      h !== Symbol.prototype
                      ? "symbol"
                      : typeof h;
                  }),
            P(l)
          );
        }
        function m(l, h) {
          if (l == null) return {};
          var O = S(l, h),
            f,
            D;
          if (Object.getOwnPropertySymbols) {
            var tt = Object.getOwnPropertySymbols(l);
            for (D = 0; D < tt.length; D++)
              (f = tt[D]),
                !(h.indexOf(f) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(l, f) &&
                  (O[f] = l[f]);
          }
          return O;
        }
        function S(l, h) {
          if (l == null) return {};
          var O = {};
          for (var f in l)
            if (Object.prototype.hasOwnProperty.call(l, f)) {
              if (h.indexOf(f) >= 0) continue;
              O[f] = l[f];
            }
          return O;
        }
        function _() {
          return (
            (_ = Object.assign
              ? Object.assign.bind()
              : function (l) {
                  for (var h = 1; h < arguments.length; h++) {
                    var O = arguments[h];
                    for (var f in O)
                      Object.prototype.hasOwnProperty.call(O, f) &&
                        (l[f] = O[f]);
                  }
                  return l;
                }),
            _.apply(this, arguments)
          );
        }
        function E(l, h) {
          var O = Object.keys(l);
          if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(l);
            h &&
              (f = f.filter(function (D) {
                return Object.getOwnPropertyDescriptor(l, D).enumerable;
              })),
              O.push.apply(O, f);
          }
          return O;
        }
        function c(l) {
          for (var h = 1; h < arguments.length; h++) {
            var O = arguments[h] != null ? arguments[h] : {};
            h % 2
              ? E(Object(O), !0).forEach(function (f) {
                  xt(l, f, O[f]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    l,
                    Object.getOwnPropertyDescriptors(O),
                  )
                : E(Object(O)).forEach(function (f) {
                    Object.defineProperty(
                      l,
                      f,
                      Object.getOwnPropertyDescriptor(O, f),
                    );
                  });
          }
          return l;
        }
        function o(l, h) {
          if (!(l instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        function p(l, h) {
          for (var O = 0; O < h.length; O++) {
            var f = h[O];
            (f.enumerable = f.enumerable || !1),
              (f.configurable = !0),
              "value" in f && (f.writable = !0),
              Object.defineProperty(l, Ut(f.key), f);
          }
        }
        function b(l, h, O) {
          return (
            h && p(l.prototype, h),
            O && p(l, O),
            Object.defineProperty(l, "prototype", { writable: !1 }),
            l
          );
        }
        function R(l, h, O) {
          return (
            (h = Z(h)),
            J(
              l,
              It()
                ? Reflect.construct(h, O || [], Z(l).constructor)
                : h.apply(l, O),
            )
          );
        }
        function J(l, h) {
          if (h && (P(h) === "object" || typeof h == "function")) return h;
          if (h !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Y(l);
        }
        function Y(l) {
          if (l === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return l;
        }
        function It() {
          try {
            var l = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (It = function () {
            return !!l;
          })();
        }
        function Z(l) {
          return (
            (Z = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (O) {
                  return O.__proto__ || Object.getPrototypeOf(O);
                }),
            Z(l)
          );
        }
        function vt(l, h) {
          if (typeof h != "function" && h !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (l.prototype = Object.create(h && h.prototype, {
            constructor: { value: l, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(l, "prototype", { writable: !1 }),
            h && ft(l, h);
        }
        function ft(l, h) {
          return (
            (ft = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (f, D) {
                  return (f.__proto__ = D), f;
                }),
            ft(l, h)
          );
        }
        function xt(l, h, O) {
          return (
            (h = Ut(h)),
            h in l
              ? Object.defineProperty(l, h, {
                  value: O,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (l[h] = O),
            l
          );
        }
        function Ut(l) {
          var h = Vt(l, "string");
          return P(h) == "symbol" ? h : h + "";
        }
        function Vt(l, h) {
          if (P(l) != "object" || !l) return l;
          var O = l[Symbol.toPrimitive];
          if (O !== void 0) {
            var f = O.call(l, h || "default");
            if (P(f) != "object") return f;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (h === "string" ? String : Number)(l);
        }
        var ct = (function (l) {
          function h() {
            var O;
            o(this, h);
            for (
              var f = arguments.length, D = new Array(f), tt = 0;
              tt < f;
              tt++
            )
              D[tt] = arguments[tt];
            return (
              (O = R(this, h, [].concat(D))),
              xt(O, "state", { isAnimationFinished: !1 }),
              xt(O, "id", (0, F.NF)("recharts-bar-")),
              xt(O, "handleAnimationEnd", function () {
                var Et = O.props.onAnimationEnd;
                O.setState({ isAnimationFinished: !0 }), Et && Et();
              }),
              xt(O, "handleAnimationStart", function () {
                var Et = O.props.onAnimationStart;
                O.setState({ isAnimationFinished: !1 }), Et && Et();
              }),
              O
            );
          }
          return (
            vt(h, l),
            b(
              h,
              [
                {
                  key: "renderRectanglesStatically",
                  value: function (f) {
                    var D = this,
                      tt = this.props,
                      Et = tt.shape,
                      Wt = tt.dataKey,
                      Ft = tt.activeIndex,
                      ie = tt.activeBar,
                      k = (0, dt.J9)(this.props, !1);
                    return (
                      f &&
                      f.map(function (G, j) {
                        var yt = j === Ft,
                          mt = yt ? ie : Et,
                          kt = c(
                            c(c({}, k), G),
                            {},
                            {
                              isActive: yt,
                              option: mt,
                              index: j,
                              dataKey: Wt,
                              onAnimationStart: D.handleAnimationStart,
                              onAnimationEnd: D.handleAnimationEnd,
                            },
                          );
                        return s.createElement(
                          et.W,
                          _(
                            { className: "recharts-bar-rectangle" },
                            (0, Pt.XC)(D.props, G, j),
                            {
                              key: "rectangle-"
                                .concat(G?.x, "-")
                                .concat(G?.y, "-")
                                .concat(G?.value, "-")
                                .concat(j),
                            },
                          ),
                          s.createElement(C, kt),
                        );
                      })
                    );
                  },
                },
                {
                  key: "renderRectanglesWithAnimation",
                  value: function () {
                    var f = this,
                      D = this.props,
                      tt = D.data,
                      Et = D.layout,
                      Wt = D.isAnimationActive,
                      Ft = D.animationBegin,
                      ie = D.animationDuration,
                      k = D.animationEasing,
                      G = D.animationId,
                      j = this.state.prevData;
                    return s.createElement(
                      K.Ay,
                      {
                        begin: Ft,
                        duration: ie,
                        isActive: Wt,
                        easing: k,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: "bar-".concat(G),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (yt) {
                        var mt = yt.t,
                          kt = tt.map(function (Ht, qt) {
                            var N = j && j[qt];
                            if (N) {
                              var X = (0, F.Dj)(N.x, Ht.x),
                                _t = (0, F.Dj)(N.y, Ht.y),
                                At = (0, F.Dj)(N.width, Ht.width),
                                Zt = (0, F.Dj)(N.height, Ht.height);
                              return c(
                                c({}, Ht),
                                {},
                                {
                                  x: X(mt),
                                  y: _t(mt),
                                  width: At(mt),
                                  height: Zt(mt),
                                },
                              );
                            }
                            if (Et === "horizontal") {
                              var Be = (0, F.Dj)(0, Ht.height),
                                Le = Be(mt);
                              return c(
                                c({}, Ht),
                                {},
                                { y: Ht.y + Ht.height - Le, height: Le },
                              );
                            }
                            var Pe = (0, F.Dj)(0, Ht.width),
                              Ce = Pe(mt);
                            return c(c({}, Ht), {}, { width: Ce });
                          });
                        return s.createElement(
                          et.W,
                          null,
                          f.renderRectanglesStatically(kt),
                        );
                      },
                    );
                  },
                },
                {
                  key: "renderRectangles",
                  value: function () {
                    var f = this.props,
                      D = f.data,
                      tt = f.isAnimationActive,
                      Et = this.state.prevData;
                    return tt && D && D.length && (!Et || !U()(Et, D))
                      ? this.renderRectanglesWithAnimation()
                      : this.renderRectanglesStatically(D);
                  },
                },
                {
                  key: "renderBackground",
                  value: function () {
                    var f = this,
                      D = this.props,
                      tt = D.data,
                      Et = D.dataKey,
                      Wt = D.activeIndex,
                      Ft = (0, dt.J9)(this.props.background, !1);
                    return tt.map(function (ie, k) {
                      var G = ie.value,
                        j = ie.background,
                        yt = m(ie, nt);
                      if (!j) return null;
                      var mt = c(
                        c(
                          c(c(c({}, yt), {}, { fill: "#eee" }, j), Ft),
                          (0, Pt.XC)(f.props, ie, k),
                        ),
                        {},
                        {
                          onAnimationStart: f.handleAnimationStart,
                          onAnimationEnd: f.handleAnimationEnd,
                          dataKey: Et,
                          index: k,
                          className: "recharts-bar-background-rectangle",
                        },
                      );
                      return s.createElement(
                        C,
                        _(
                          {
                            key: "background-bar-".concat(k),
                            option: f.props.background,
                            isActive: k === Wt,
                          },
                          mt,
                        ),
                      );
                    });
                  },
                },
                {
                  key: "renderErrorBar",
                  value: function (f, D) {
                    if (
                      this.props.isAnimationActive &&
                      !this.state.isAnimationFinished
                    )
                      return null;
                    var tt = this.props,
                      Et = tt.data,
                      Wt = tt.xAxis,
                      Ft = tt.yAxis,
                      ie = tt.layout,
                      k = tt.children,
                      G = (0, dt.aS)(k, ot.u);
                    if (!G) return null;
                    var j =
                        ie === "vertical" ? Et[0].height / 2 : Et[0].width / 2,
                      yt = function (Ht, qt) {
                        var N = Array.isArray(Ht.value)
                          ? Ht.value[1]
                          : Ht.value;
                        return {
                          x: Ht.x,
                          y: Ht.y,
                          value: N,
                          errorVal: (0, pt.kr)(Ht, qt),
                        };
                      },
                      mt = {
                        clipPath: f ? "url(#clipPath-".concat(D, ")") : null,
                      };
                    return s.createElement(
                      et.W,
                      mt,
                      G.map(function (kt) {
                        return s.cloneElement(kt, {
                          key: "error-bar-"
                            .concat(D, "-")
                            .concat(kt.props.dataKey),
                          data: Et,
                          xAxis: Wt,
                          yAxis: Ft,
                          layout: ie,
                          offset: j,
                          dataPointFormatter: yt,
                        });
                      }),
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var f = this.props,
                      D = f.hide,
                      tt = f.data,
                      Et = f.className,
                      Wt = f.xAxis,
                      Ft = f.yAxis,
                      ie = f.left,
                      k = f.top,
                      G = f.width,
                      j = f.height,
                      yt = f.isAnimationActive,
                      mt = f.background,
                      kt = f.id;
                    if (D || !tt || !tt.length) return null;
                    var Ht = this.state.isAnimationFinished,
                      qt = (0, rt.A)("recharts-bar", Et),
                      N = Wt && Wt.allowDataOverflow,
                      X = Ft && Ft.allowDataOverflow,
                      _t = N || X,
                      At = z()(kt) ? this.id : kt;
                    return s.createElement(
                      et.W,
                      { className: qt },
                      N || X
                        ? s.createElement(
                            "defs",
                            null,
                            s.createElement(
                              "clipPath",
                              { id: "clipPath-".concat(At) },
                              s.createElement("rect", {
                                x: N ? ie : ie - G / 2,
                                y: X ? k : k - j / 2,
                                width: N ? G : G * 2,
                                height: X ? j : j * 2,
                              }),
                            ),
                          )
                        : null,
                      s.createElement(
                        et.W,
                        {
                          className: "recharts-bar-rectangles",
                          clipPath: _t
                            ? "url(#clipPath-".concat(At, ")")
                            : null,
                        },
                        mt ? this.renderBackground() : null,
                        this.renderRectangles(),
                      ),
                      this.renderErrorBar(_t, At),
                      (!yt || Ht) && it.Z.renderCallByParent(this.props, tt),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (f, D) {
                    return f.animationId !== D.prevAnimationId
                      ? {
                          prevAnimationId: f.animationId,
                          curData: f.data,
                          prevData: D.curData,
                        }
                      : f.data !== D.curData
                        ? { curData: f.data }
                        : null;
                  },
                },
              ],
            )
          );
        })(s.PureComponent);
        (bt = ct),
          xt(ct, "displayName", "Bar"),
          xt(ct, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            legendType: "rect",
            minPointSize: 0,
            hide: !1,
            data: [],
            layout: "vertical",
            activeBar: !1,
            isAnimationActive: !V.m.isSsr,
            animationBegin: 0,
            animationDuration: 400,
            animationEasing: "ease",
          }),
          xt(ct, "getComposedData", function (l) {
            var h = l.props,
              O = l.item,
              f = l.barPosition,
              D = l.bandSize,
              tt = l.xAxis,
              Et = l.yAxis,
              Wt = l.xAxisTicks,
              Ft = l.yAxisTicks,
              ie = l.stackedData,
              k = l.dataStartIndex,
              G = l.displayedData,
              j = l.offset,
              yt = (0, pt.xi)(f, O);
            if (!yt) return null;
            var mt = h.layout,
              kt = O.type.defaultProps,
              Ht = kt !== void 0 ? c(c({}, kt), O.props) : O.props,
              qt = Ht.dataKey,
              N = Ht.children,
              X = Ht.minPointSize,
              _t = mt === "horizontal" ? Et : tt,
              At = ie ? _t.scale.domain() : null,
              Zt = (0, pt.DW)({ numericAxis: _t }),
              Be = (0, dt.aS)(N, at.f),
              Le = G.map(function (Pe, Ce) {
                var We, je, Ye, qe, on, un;
                ie
                  ? (We = (0, pt._f)(ie[k + Ce], At))
                  : ((We = (0, pt.kr)(Pe, qt)),
                    Array.isArray(We) || (We = [Zt, We]));
                var tn = B(X, bt.defaultProps.minPointSize)(We[1], Ce);
                if (mt === "horizontal") {
                  var bn,
                    Mn = [Et.scale(We[0]), Et.scale(We[1])],
                    _n = Mn[0],
                    jn = Mn[1];
                  (je = (0, pt.y2)({
                    axis: tt,
                    ticks: Wt,
                    bandSize: D,
                    offset: yt.offset,
                    entry: Pe,
                    index: Ce,
                  })),
                    (Ye =
                      (bn = jn ?? _n) !== null && bn !== void 0 ? bn : void 0),
                    (qe = yt.size);
                  var Wn = _n - jn;
                  if (
                    ((on = Number.isNaN(Wn) ? 0 : Wn),
                    (un = { x: je, y: Et.y, width: qe, height: Et.height }),
                    Math.abs(tn) > 0 && Math.abs(on) < Math.abs(tn))
                  ) {
                    var Nn =
                      (0, F.sA)(on || tn) * (Math.abs(tn) - Math.abs(on));
                    (Ye -= Nn), (on += Nn);
                  }
                } else {
                  var In = [tt.scale(We[0]), tt.scale(We[1])],
                    Rn = In[0],
                    Zn = In[1];
                  if (
                    ((je = Rn),
                    (Ye = (0, pt.y2)({
                      axis: Et,
                      ticks: Ft,
                      bandSize: D,
                      offset: yt.offset,
                      entry: Pe,
                      index: Ce,
                    })),
                    (qe = Zn - Rn),
                    (on = yt.size),
                    (un = { x: tt.x, y: Ye, width: tt.width, height: on }),
                    Math.abs(tn) > 0 && Math.abs(qe) < Math.abs(tn))
                  ) {
                    var fr =
                      (0, F.sA)(qe || tn) * (Math.abs(tn) - Math.abs(qe));
                    qe += fr;
                  }
                }
                return c(
                  c(
                    c({}, Pe),
                    {},
                    {
                      x: je,
                      y: Ye,
                      width: qe,
                      height: on,
                      value: ie ? We : We[1],
                      payload: Pe,
                      background: un,
                    },
                    Be && Be[Ce] && Be[Ce].props,
                  ),
                  {},
                  {
                    tooltipPayload: [(0, pt.zb)(O, Pe)],
                    tooltipPosition: { x: je + qe / 2, y: Ye + on / 2 },
                  },
                );
              });
            return c({ data: Le, layout: mt }, j);
          });
      },
      23884: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { u: () => _ });
        var s = n(90626),
          rt = n(3316),
          K = n.n(rt),
          q = n(52686),
          U = n.n(q),
          Q = n(34164),
          z = n(80103),
          et = n(75055),
          ot = n(34656),
          at = n(25068),
          it = n(96714),
          F = n(43998),
          dt = n(93563),
          V = n(81887),
          pt = ["viewBox"],
          Pt = ["viewBox"],
          L = ["ticks"];
        function Kt(E) {
          "@babel/helpers - typeof";
          return (
            (Kt =
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
            Kt(E)
          );
        }
        function Dt() {
          return (
            (Dt = Object.assign
              ? Object.assign.bind()
              : function (E) {
                  for (var c = 1; c < arguments.length; c++) {
                    var o = arguments[c];
                    for (var p in o)
                      Object.prototype.hasOwnProperty.call(o, p) &&
                        (E[p] = o[p]);
                  }
                  return E;
                }),
            Dt.apply(this, arguments)
          );
        }
        function wt(E, c) {
          var o = Object.keys(E);
          if (Object.getOwnPropertySymbols) {
            var p = Object.getOwnPropertySymbols(E);
            c &&
              (p = p.filter(function (b) {
                return Object.getOwnPropertyDescriptor(E, b).enumerable;
              })),
              o.push.apply(o, p);
          }
          return o;
        }
        function Mt(E) {
          for (var c = 1; c < arguments.length; c++) {
            var o = arguments[c] != null ? arguments[c] : {};
            c % 2
              ? wt(Object(o), !0).forEach(function (p) {
                  P(E, p, o[p]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    E,
                    Object.getOwnPropertyDescriptors(o),
                  )
                : wt(Object(o)).forEach(function (p) {
                    Object.defineProperty(
                      E,
                      p,
                      Object.getOwnPropertyDescriptor(o, p),
                    );
                  });
          }
          return E;
        }
        function $(E, c) {
          if (E == null) return {};
          var o = w(E, c),
            p,
            b;
          if (Object.getOwnPropertySymbols) {
            var R = Object.getOwnPropertySymbols(E);
            for (b = 0; b < R.length; b++)
              (p = R[b]),
                !(c.indexOf(p) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(E, p) &&
                  (o[p] = E[p]);
          }
          return o;
        }
        function w(E, c) {
          if (E == null) return {};
          var o = {};
          for (var p in E)
            if (Object.prototype.hasOwnProperty.call(E, p)) {
              if (c.indexOf(p) >= 0) continue;
              o[p] = E[p];
            }
          return o;
        }
        function M(E, c) {
          if (!(E instanceof c))
            throw new TypeError("Cannot call a class as a function");
        }
        function g(E, c) {
          for (var o = 0; o < c.length; o++) {
            var p = c[o];
            (p.enumerable = p.enumerable || !1),
              (p.configurable = !0),
              "value" in p && (p.writable = !0),
              Object.defineProperty(E, m(p.key), p);
          }
        }
        function v(E, c, o) {
          return (
            c && g(E.prototype, c),
            o && g(E, o),
            Object.defineProperty(E, "prototype", { writable: !1 }),
            E
          );
        }
        function ut(E, c, o) {
          return (
            (c = B(c)),
            lt(
              E,
              C()
                ? Reflect.construct(c, o || [], B(E).constructor)
                : c.apply(E, o),
            )
          );
        }
        function lt(E, c) {
          if (c && (Kt(c) === "object" || typeof c == "function")) return c;
          if (c !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Nt(E);
        }
        function Nt(E) {
          if (E === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return E;
        }
        function C() {
          try {
            var E = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (C = function () {
            return !!E;
          })();
        }
        function B(E) {
          return (
            (B = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                }),
            B(E)
          );
        }
        function nt(E, c) {
          if (typeof c != "function" && c !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (E.prototype = Object.create(c && c.prototype, {
            constructor: { value: E, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(E, "prototype", { writable: !1 }),
            c && bt(E, c);
        }
        function bt(E, c) {
          return (
            (bt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (p, b) {
                  return (p.__proto__ = b), p;
                }),
            bt(E, c)
          );
        }
        function P(E, c, o) {
          return (
            (c = m(c)),
            c in E
              ? Object.defineProperty(E, c, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (E[c] = o),
            E
          );
        }
        function m(E) {
          var c = S(E, "string");
          return Kt(c) == "symbol" ? c : c + "";
        }
        function S(E, c) {
          if (Kt(E) != "object" || !E) return E;
          var o = E[Symbol.toPrimitive];
          if (o !== void 0) {
            var p = o.call(E, c || "default");
            if (Kt(p) != "object") return p;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (c === "string" ? String : Number)(E);
        }
        var _ = (function (E) {
          function c(o) {
            var p;
            return (
              M(this, c),
              (p = ut(this, c, [o])),
              (p.state = { fontSize: "", letterSpacing: "" }),
              p
            );
          }
          return (
            nt(c, E),
            v(
              c,
              [
                {
                  key: "shouldComponentUpdate",
                  value: function (p, b) {
                    var R = p.viewBox,
                      J = $(p, pt),
                      Y = this.props,
                      It = Y.viewBox,
                      Z = $(Y, Pt);
                    return (
                      !(0, z.b)(R, It) ||
                      !(0, z.b)(J, Z) ||
                      !(0, z.b)(b, this.state)
                    );
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    var p = this.layerReference;
                    if (p) {
                      var b = p.getElementsByClassName(
                        "recharts-cartesian-axis-tick-value",
                      )[0];
                      b &&
                        this.setState({
                          fontSize: window.getComputedStyle(b).fontSize,
                          letterSpacing:
                            window.getComputedStyle(b).letterSpacing,
                        });
                    }
                  },
                },
                {
                  key: "getTickLineCoord",
                  value: function (p) {
                    var b = this.props,
                      R = b.x,
                      J = b.y,
                      Y = b.width,
                      It = b.height,
                      Z = b.orientation,
                      vt = b.tickSize,
                      ft = b.mirror,
                      xt = b.tickMargin,
                      Ut,
                      Vt,
                      ct,
                      l,
                      h,
                      O,
                      f = ft ? -1 : 1,
                      D = p.tickSize || vt,
                      tt = (0, it.Et)(p.tickCoord) ? p.tickCoord : p.coordinate;
                    switch (Z) {
                      case "top":
                        (Ut = Vt = p.coordinate),
                          (l = J + +!ft * It),
                          (ct = l - f * D),
                          (O = ct - f * xt),
                          (h = tt);
                        break;
                      case "left":
                        (ct = l = p.coordinate),
                          (Vt = R + +!ft * Y),
                          (Ut = Vt - f * D),
                          (h = Ut - f * xt),
                          (O = tt);
                        break;
                      case "right":
                        (ct = l = p.coordinate),
                          (Vt = R + +ft * Y),
                          (Ut = Vt + f * D),
                          (h = Ut + f * xt),
                          (O = tt);
                        break;
                      default:
                        (Ut = Vt = p.coordinate),
                          (l = J + +ft * It),
                          (ct = l + f * D),
                          (O = ct + f * xt),
                          (h = tt);
                        break;
                    }
                    return {
                      line: { x1: Ut, y1: ct, x2: Vt, y2: l },
                      tick: { x: h, y: O },
                    };
                  },
                },
                {
                  key: "getTickTextAnchor",
                  value: function () {
                    var p = this.props,
                      b = p.orientation,
                      R = p.mirror,
                      J;
                    switch (b) {
                      case "left":
                        J = R ? "start" : "end";
                        break;
                      case "right":
                        J = R ? "end" : "start";
                        break;
                      default:
                        J = "middle";
                        break;
                    }
                    return J;
                  },
                },
                {
                  key: "getTickVerticalAnchor",
                  value: function () {
                    var p = this.props,
                      b = p.orientation,
                      R = p.mirror,
                      J = "end";
                    switch (b) {
                      case "left":
                      case "right":
                        J = "middle";
                        break;
                      case "top":
                        J = R ? "start" : "end";
                        break;
                      default:
                        J = R ? "end" : "start";
                        break;
                    }
                    return J;
                  },
                },
                {
                  key: "renderAxisLine",
                  value: function () {
                    var p = this.props,
                      b = p.x,
                      R = p.y,
                      J = p.width,
                      Y = p.height,
                      It = p.orientation,
                      Z = p.mirror,
                      vt = p.axisLine,
                      ft = Mt(
                        Mt(
                          Mt({}, (0, dt.J9)(this.props, !1)),
                          (0, dt.J9)(vt, !1),
                        ),
                        {},
                        { fill: "none" },
                      );
                    if (It === "top" || It === "bottom") {
                      var xt = +(
                        (It === "top" && !Z) ||
                        (It === "bottom" && Z)
                      );
                      ft = Mt(
                        Mt({}, ft),
                        {},
                        { x1: b, y1: R + xt * Y, x2: b + J, y2: R + xt * Y },
                      );
                    } else {
                      var Ut = +(
                        (It === "left" && !Z) ||
                        (It === "right" && Z)
                      );
                      ft = Mt(
                        Mt({}, ft),
                        {},
                        { x1: b + Ut * J, y1: R, x2: b + Ut * J, y2: R + Y },
                      );
                    }
                    return s.createElement(
                      "line",
                      Dt({}, ft, {
                        className: (0, Q.A)(
                          "recharts-cartesian-axis-line",
                          U()(vt, "className"),
                        ),
                      }),
                    );
                  },
                },
                {
                  key: "renderTicks",
                  value: function (p, b, R) {
                    var J = this,
                      Y = this.props,
                      It = Y.tickLine,
                      Z = Y.stroke,
                      vt = Y.tick,
                      ft = Y.tickFormatter,
                      xt = Y.unit,
                      Ut = (0, V.f)(
                        Mt(Mt({}, this.props), {}, { ticks: p }),
                        b,
                        R,
                      ),
                      Vt = this.getTickTextAnchor(),
                      ct = this.getTickVerticalAnchor(),
                      l = (0, dt.J9)(this.props, !1),
                      h = (0, dt.J9)(vt, !1),
                      O = Mt(
                        Mt({}, l),
                        {},
                        { fill: "none" },
                        (0, dt.J9)(It, !1),
                      ),
                      f = Ut.map(function (D, tt) {
                        var Et = J.getTickLineCoord(D),
                          Wt = Et.line,
                          Ft = Et.tick,
                          ie = Mt(
                            Mt(
                              Mt(
                                Mt({ textAnchor: Vt, verticalAnchor: ct }, l),
                                {},
                                { stroke: "none", fill: Z },
                                h,
                              ),
                              Ft,
                            ),
                            {},
                            {
                              index: tt,
                              payload: D,
                              visibleTicksCount: Ut.length,
                              tickFormatter: ft,
                            },
                          );
                        return s.createElement(
                          et.W,
                          Dt(
                            {
                              className: "recharts-cartesian-axis-tick",
                              key: "tick-"
                                .concat(D.value, "-")
                                .concat(D.coordinate, "-")
                                .concat(D.tickCoord),
                            },
                            (0, F.XC)(J.props, D, tt),
                          ),
                          It &&
                            s.createElement(
                              "line",
                              Dt({}, O, Wt, {
                                className: (0, Q.A)(
                                  "recharts-cartesian-axis-tick-line",
                                  U()(It, "className"),
                                ),
                              }),
                            ),
                          vt &&
                            c.renderTickItem(
                              vt,
                              ie,
                              ""
                                .concat(K()(ft) ? ft(D.value, tt) : D.value)
                                .concat(xt || ""),
                            ),
                        );
                      });
                    return s.createElement(
                      "g",
                      { className: "recharts-cartesian-axis-ticks" },
                      f,
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var p = this,
                      b = this.props,
                      R = b.axisLine,
                      J = b.width,
                      Y = b.height,
                      It = b.ticksGenerator,
                      Z = b.className,
                      vt = b.hide;
                    if (vt) return null;
                    var ft = this.props,
                      xt = ft.ticks,
                      Ut = $(ft, L),
                      Vt = xt;
                    return (
                      K()(It) &&
                        (Vt = xt && xt.length > 0 ? It(this.props) : It(Ut)),
                      J <= 0 || Y <= 0 || !Vt || !Vt.length
                        ? null
                        : s.createElement(
                            et.W,
                            {
                              className: (0, Q.A)("recharts-cartesian-axis", Z),
                              ref: function (l) {
                                p.layerReference = l;
                              },
                            },
                            R && this.renderAxisLine(),
                            this.renderTicks(
                              Vt,
                              this.state.fontSize,
                              this.state.letterSpacing,
                            ),
                            at.J.renderCallByParent(this.props),
                          )
                    );
                  },
                },
              ],
              [
                {
                  key: "renderTickItem",
                  value: function (p, b, R) {
                    var J,
                      Y = (0, Q.A)(
                        b.className,
                        "recharts-cartesian-axis-tick-value",
                      );
                    return (
                      s.isValidElement(p)
                        ? (J = s.cloneElement(
                            p,
                            Mt(Mt({}, b), {}, { className: Y }),
                          ))
                        : K()(p)
                          ? (J = p(Mt(Mt({}, b), {}, { className: Y })))
                          : (J = s.createElement(
                              ot.E,
                              Dt({}, b, {
                                className: "recharts-cartesian-axis-tick-value",
                              }),
                              R,
                            )),
                      J
                    );
                  },
                },
              ],
            )
          );
        })(s.Component);
        P(_, "displayName", "CartesianAxis"),
          P(_, "defaultProps", {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            viewBox: { x: 0, y: 0, width: 0, height: 0 },
            orientation: "bottom",
            ticks: [],
            stroke: "#666",
            tickLine: !0,
            axisLine: !0,
            tick: !0,
            mirror: !1,
            minTickGap: 5,
            tickSize: 6,
            tickMargin: 2,
            interval: "preserveEnd",
          });
      },
      10800: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { u: () => Nt });
        var s = n(90626),
          rt = n(68841),
          K = n(75055),
          q = n(93563),
          U = [
            "offset",
            "layout",
            "width",
            "dataKey",
            "data",
            "dataPointFormatter",
            "xAxis",
            "yAxis",
          ];
        function Q(C) {
          "@babel/helpers - typeof";
          return (
            (Q =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (B) {
                    return typeof B;
                  }
                : function (B) {
                    return B &&
                      typeof Symbol == "function" &&
                      B.constructor === Symbol &&
                      B !== Symbol.prototype
                      ? "symbol"
                      : typeof B;
                  }),
            Q(C)
          );
        }
        function z() {
          return (
            (z = Object.assign
              ? Object.assign.bind()
              : function (C) {
                  for (var B = 1; B < arguments.length; B++) {
                    var nt = arguments[B];
                    for (var bt in nt)
                      Object.prototype.hasOwnProperty.call(nt, bt) &&
                        (C[bt] = nt[bt]);
                  }
                  return C;
                }),
            z.apply(this, arguments)
          );
        }
        function et(C, B) {
          return dt(C) || F(C, B) || at(C, B) || ot();
        }
        function ot() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function at(C, B) {
          if (C) {
            if (typeof C == "string") return it(C, B);
            var nt = Object.prototype.toString.call(C).slice(8, -1);
            if (
              (nt === "Object" && C.constructor && (nt = C.constructor.name),
              nt === "Map" || nt === "Set")
            )
              return Array.from(C);
            if (
              nt === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(nt)
            )
              return it(C, B);
          }
        }
        function it(C, B) {
          (B == null || B > C.length) && (B = C.length);
          for (var nt = 0, bt = new Array(B); nt < B; nt++) bt[nt] = C[nt];
          return bt;
        }
        function F(C, B) {
          var nt =
            C == null
              ? null
              : (typeof Symbol < "u" && C[Symbol.iterator]) || C["@@iterator"];
          if (nt != null) {
            var bt,
              P,
              m,
              S,
              _ = [],
              E = !0,
              c = !1;
            try {
              if (((m = (nt = nt.call(C)).next), B === 0)) {
                if (Object(nt) !== nt) return;
                E = !1;
              } else
                for (
                  ;
                  !(E = (bt = m.call(nt)).done) &&
                  (_.push(bt.value), _.length !== B);
                  E = !0
                );
            } catch (o) {
              (c = !0), (P = o);
            } finally {
              try {
                if (
                  !E &&
                  nt.return != null &&
                  ((S = nt.return()), Object(S) !== S)
                )
                  return;
              } finally {
                if (c) throw P;
              }
            }
            return _;
          }
        }
        function dt(C) {
          if (Array.isArray(C)) return C;
        }
        function V(C, B) {
          if (C == null) return {};
          var nt = pt(C, B),
            bt,
            P;
          if (Object.getOwnPropertySymbols) {
            var m = Object.getOwnPropertySymbols(C);
            for (P = 0; P < m.length; P++)
              (bt = m[P]),
                !(B.indexOf(bt) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(C, bt) &&
                  (nt[bt] = C[bt]);
          }
          return nt;
        }
        function pt(C, B) {
          if (C == null) return {};
          var nt = {};
          for (var bt in C)
            if (Object.prototype.hasOwnProperty.call(C, bt)) {
              if (B.indexOf(bt) >= 0) continue;
              nt[bt] = C[bt];
            }
          return nt;
        }
        function Pt(C, B) {
          if (!(C instanceof B))
            throw new TypeError("Cannot call a class as a function");
        }
        function L(C, B) {
          for (var nt = 0; nt < B.length; nt++) {
            var bt = B[nt];
            (bt.enumerable = bt.enumerable || !1),
              (bt.configurable = !0),
              "value" in bt && (bt.writable = !0),
              Object.defineProperty(C, ut(bt.key), bt);
          }
        }
        function Kt(C, B, nt) {
          return (
            B && L(C.prototype, B),
            nt && L(C, nt),
            Object.defineProperty(C, "prototype", { writable: !1 }),
            C
          );
        }
        function Dt(C, B, nt) {
          return (
            (B = w(B)),
            wt(
              C,
              $()
                ? Reflect.construct(B, nt || [], w(C).constructor)
                : B.apply(C, nt),
            )
          );
        }
        function wt(C, B) {
          if (B && (Q(B) === "object" || typeof B == "function")) return B;
          if (B !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Mt(C);
        }
        function Mt(C) {
          if (C === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return C;
        }
        function $() {
          try {
            var C = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return ($ = function () {
            return !!C;
          })();
        }
        function w(C) {
          return (
            (w = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (nt) {
                  return nt.__proto__ || Object.getPrototypeOf(nt);
                }),
            w(C)
          );
        }
        function M(C, B) {
          if (typeof B != "function" && B !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (C.prototype = Object.create(B && B.prototype, {
            constructor: { value: C, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(C, "prototype", { writable: !1 }),
            B && g(C, B);
        }
        function g(C, B) {
          return (
            (g = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (bt, P) {
                  return (bt.__proto__ = P), bt;
                }),
            g(C, B)
          );
        }
        function v(C, B, nt) {
          return (
            (B = ut(B)),
            B in C
              ? Object.defineProperty(C, B, {
                  value: nt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (C[B] = nt),
            C
          );
        }
        function ut(C) {
          var B = lt(C, "string");
          return Q(B) == "symbol" ? B : B + "";
        }
        function lt(C, B) {
          if (Q(C) != "object" || !C) return C;
          var nt = C[Symbol.toPrimitive];
          if (nt !== void 0) {
            var bt = nt.call(C, B || "default");
            if (Q(bt) != "object") return bt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (B === "string" ? String : Number)(C);
        }
        var Nt = (function (C) {
          function B() {
            return Pt(this, B), Dt(this, B, arguments);
          }
          return (
            M(B, C),
            Kt(B, [
              {
                key: "render",
                value: function () {
                  var bt = this.props,
                    P = bt.offset,
                    m = bt.layout,
                    S = bt.width,
                    _ = bt.dataKey,
                    E = bt.data,
                    c = bt.dataPointFormatter,
                    o = bt.xAxis,
                    p = bt.yAxis,
                    b = V(bt, U),
                    R = (0, q.J9)(b, !1);
                  this.props.direction === "x" &&
                    o.type !== "number" &&
                    (0, rt.A)(!1);
                  var J = E.map(function (Y) {
                    var It = c(Y, _),
                      Z = It.x,
                      vt = It.y,
                      ft = It.value,
                      xt = It.errorVal;
                    if (!xt) return null;
                    var Ut = [],
                      Vt,
                      ct;
                    if (Array.isArray(xt)) {
                      var l = et(xt, 2);
                      (Vt = l[0]), (ct = l[1]);
                    } else Vt = ct = xt;
                    if (m === "vertical") {
                      var h = o.scale,
                        O = vt + P,
                        f = O + S,
                        D = O - S,
                        tt = h(ft - Vt),
                        Et = h(ft + ct);
                      Ut.push({ x1: Et, y1: f, x2: Et, y2: D }),
                        Ut.push({ x1: tt, y1: O, x2: Et, y2: O }),
                        Ut.push({ x1: tt, y1: f, x2: tt, y2: D });
                    } else if (m === "horizontal") {
                      var Wt = p.scale,
                        Ft = Z + P,
                        ie = Ft - S,
                        k = Ft + S,
                        G = Wt(ft - Vt),
                        j = Wt(ft + ct);
                      Ut.push({ x1: ie, y1: j, x2: k, y2: j }),
                        Ut.push({ x1: Ft, y1: G, x2: Ft, y2: j }),
                        Ut.push({ x1: ie, y1: G, x2: k, y2: G });
                    }
                    return s.createElement(
                      K.W,
                      z(
                        {
                          className: "recharts-errorBar",
                          key: "bar-".concat(
                            Ut.map(function (yt) {
                              return ""
                                .concat(yt.x1, "-")
                                .concat(yt.x2, "-")
                                .concat(yt.y1, "-")
                                .concat(yt.y2);
                            }),
                          ),
                        },
                        R,
                      ),
                      Ut.map(function (yt) {
                        return s.createElement(
                          "line",
                          z({}, yt, {
                            key: "line-"
                              .concat(yt.x1, "-")
                              .concat(yt.x2, "-")
                              .concat(yt.y1, "-")
                              .concat(yt.y2),
                          }),
                        );
                      }),
                    );
                  });
                  return s.createElement(
                    K.W,
                    { className: "recharts-errorBars" },
                    J,
                  );
                },
              },
            ])
          );
        })(s.Component);
        v(Nt, "defaultProps", {
          stroke: "black",
          strokeWidth: 1.5,
          width: 5,
          offset: 0,
          layout: "horizontal",
        }),
          v(Nt, "displayName", "ErrorBar");
      },
      90865: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { N: () => It });
        var s = n(90626),
          rt = n(86356),
          K = n(3316),
          q = n.n(K),
          U = n(64609),
          Q = n.n(U),
          z = n(58782),
          et = n.n(z),
          ot = n(34164),
          at = n(33487),
          it = n(21687),
          F = n(75055),
          dt = n(12244),
          V = n(10800),
          pt = n(96714),
          Pt = n(93563),
          L = n(59640),
          Kt = n(24633),
          Dt = ["type", "layout", "connectNulls", "ref"],
          wt = ["key"];
        function Mt(Z) {
          "@babel/helpers - typeof";
          return (
            (Mt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (vt) {
                    return typeof vt;
                  }
                : function (vt) {
                    return vt &&
                      typeof Symbol == "function" &&
                      vt.constructor === Symbol &&
                      vt !== Symbol.prototype
                      ? "symbol"
                      : typeof vt;
                  }),
            Mt(Z)
          );
        }
        function $(Z, vt) {
          if (Z == null) return {};
          var ft = w(Z, vt),
            xt,
            Ut;
          if (Object.getOwnPropertySymbols) {
            var Vt = Object.getOwnPropertySymbols(Z);
            for (Ut = 0; Ut < Vt.length; Ut++)
              (xt = Vt[Ut]),
                !(vt.indexOf(xt) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(Z, xt) &&
                  (ft[xt] = Z[xt]);
          }
          return ft;
        }
        function w(Z, vt) {
          if (Z == null) return {};
          var ft = {};
          for (var xt in Z)
            if (Object.prototype.hasOwnProperty.call(Z, xt)) {
              if (vt.indexOf(xt) >= 0) continue;
              ft[xt] = Z[xt];
            }
          return ft;
        }
        function M() {
          return (
            (M = Object.assign
              ? Object.assign.bind()
              : function (Z) {
                  for (var vt = 1; vt < arguments.length; vt++) {
                    var ft = arguments[vt];
                    for (var xt in ft)
                      Object.prototype.hasOwnProperty.call(ft, xt) &&
                        (Z[xt] = ft[xt]);
                  }
                  return Z;
                }),
            M.apply(this, arguments)
          );
        }
        function g(Z, vt) {
          var ft = Object.keys(Z);
          if (Object.getOwnPropertySymbols) {
            var xt = Object.getOwnPropertySymbols(Z);
            vt &&
              (xt = xt.filter(function (Ut) {
                return Object.getOwnPropertyDescriptor(Z, Ut).enumerable;
              })),
              ft.push.apply(ft, xt);
          }
          return ft;
        }
        function v(Z) {
          for (var vt = 1; vt < arguments.length; vt++) {
            var ft = arguments[vt] != null ? arguments[vt] : {};
            vt % 2
              ? g(Object(ft), !0).forEach(function (xt) {
                  R(Z, xt, ft[xt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    Z,
                    Object.getOwnPropertyDescriptors(ft),
                  )
                : g(Object(ft)).forEach(function (xt) {
                    Object.defineProperty(
                      Z,
                      xt,
                      Object.getOwnPropertyDescriptor(ft, xt),
                    );
                  });
          }
          return Z;
        }
        function ut(Z) {
          return B(Z) || C(Z) || Nt(Z) || lt();
        }
        function lt() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Nt(Z, vt) {
          if (Z) {
            if (typeof Z == "string") return nt(Z, vt);
            var ft = Object.prototype.toString.call(Z).slice(8, -1);
            if (
              (ft === "Object" && Z.constructor && (ft = Z.constructor.name),
              ft === "Map" || ft === "Set")
            )
              return Array.from(Z);
            if (
              ft === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ft)
            )
              return nt(Z, vt);
          }
        }
        function C(Z) {
          if (
            (typeof Symbol < "u" && Z[Symbol.iterator] != null) ||
            Z["@@iterator"] != null
          )
            return Array.from(Z);
        }
        function B(Z) {
          if (Array.isArray(Z)) return nt(Z);
        }
        function nt(Z, vt) {
          (vt == null || vt > Z.length) && (vt = Z.length);
          for (var ft = 0, xt = new Array(vt); ft < vt; ft++) xt[ft] = Z[ft];
          return xt;
        }
        function bt(Z, vt) {
          if (!(Z instanceof vt))
            throw new TypeError("Cannot call a class as a function");
        }
        function P(Z, vt) {
          for (var ft = 0; ft < vt.length; ft++) {
            var xt = vt[ft];
            (xt.enumerable = xt.enumerable || !1),
              (xt.configurable = !0),
              "value" in xt && (xt.writable = !0),
              Object.defineProperty(Z, J(xt.key), xt);
          }
        }
        function m(Z, vt, ft) {
          return (
            vt && P(Z.prototype, vt),
            ft && P(Z, ft),
            Object.defineProperty(Z, "prototype", { writable: !1 }),
            Z
          );
        }
        function S(Z, vt, ft) {
          return (
            (vt = o(vt)),
            _(
              Z,
              c()
                ? Reflect.construct(vt, ft || [], o(Z).constructor)
                : vt.apply(Z, ft),
            )
          );
        }
        function _(Z, vt) {
          if (vt && (Mt(vt) === "object" || typeof vt == "function")) return vt;
          if (vt !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return E(Z);
        }
        function E(Z) {
          if (Z === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return Z;
        }
        function c() {
          try {
            var Z = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (c = function () {
            return !!Z;
          })();
        }
        function o(Z) {
          return (
            (o = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (ft) {
                  return ft.__proto__ || Object.getPrototypeOf(ft);
                }),
            o(Z)
          );
        }
        function p(Z, vt) {
          if (typeof vt != "function" && vt !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (Z.prototype = Object.create(vt && vt.prototype, {
            constructor: { value: Z, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(Z, "prototype", { writable: !1 }),
            vt && b(Z, vt);
        }
        function b(Z, vt) {
          return (
            (b = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (xt, Ut) {
                  return (xt.__proto__ = Ut), xt;
                }),
            b(Z, vt)
          );
        }
        function R(Z, vt, ft) {
          return (
            (vt = J(vt)),
            vt in Z
              ? Object.defineProperty(Z, vt, {
                  value: ft,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (Z[vt] = ft),
            Z
          );
        }
        function J(Z) {
          var vt = Y(Z, "string");
          return Mt(vt) == "symbol" ? vt : vt + "";
        }
        function Y(Z, vt) {
          if (Mt(Z) != "object" || !Z) return Z;
          var ft = Z[Symbol.toPrimitive];
          if (ft !== void 0) {
            var xt = ft.call(Z, vt || "default");
            if (Mt(xt) != "object") return xt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (vt === "string" ? String : Number)(Z);
        }
        var It = (function (Z) {
          function vt() {
            var ft;
            bt(this, vt);
            for (
              var xt = arguments.length, Ut = new Array(xt), Vt = 0;
              Vt < xt;
              Vt++
            )
              Ut[Vt] = arguments[Vt];
            return (
              (ft = S(this, vt, [].concat(Ut))),
              R(ft, "state", { isAnimationFinished: !0, totalLength: 0 }),
              R(ft, "generateSimpleStrokeDasharray", function (ct, l) {
                return "".concat(l, "px ").concat(ct - l, "px");
              }),
              R(ft, "getStrokeDasharray", function (ct, l, h) {
                var O = h.reduce(function (k, G) {
                  return k + G;
                });
                if (!O) return ft.generateSimpleStrokeDasharray(l, ct);
                for (
                  var f = Math.floor(ct / O),
                    D = ct % O,
                    tt = l - ct,
                    Et = [],
                    Wt = 0,
                    Ft = 0;
                  Wt < h.length;
                  Ft += h[Wt], ++Wt
                )
                  if (Ft + h[Wt] > D) {
                    Et = [].concat(ut(h.slice(0, Wt)), [D - Ft]);
                    break;
                  }
                var ie = Et.length % 2 === 0 ? [0, tt] : [tt];
                return []
                  .concat(ut(vt.repeat(h, f)), ut(Et), ie)
                  .map(function (k) {
                    return "".concat(k, "px");
                  })
                  .join(", ");
              }),
              R(ft, "id", (0, pt.NF)("recharts-line-")),
              R(ft, "pathRef", function (ct) {
                ft.mainCurve = ct;
              }),
              R(ft, "handleAnimationEnd", function () {
                ft.setState({ isAnimationFinished: !0 }),
                  ft.props.onAnimationEnd && ft.props.onAnimationEnd();
              }),
              R(ft, "handleAnimationStart", function () {
                ft.setState({ isAnimationFinished: !1 }),
                  ft.props.onAnimationStart && ft.props.onAnimationStart();
              }),
              ft
            );
          }
          return (
            p(vt, Z),
            m(
              vt,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    if (this.props.isAnimationActive) {
                      var xt = this.getTotalLength();
                      this.setState({ totalLength: xt });
                    }
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    if (this.props.isAnimationActive) {
                      var xt = this.getTotalLength();
                      xt !== this.state.totalLength &&
                        this.setState({ totalLength: xt });
                    }
                  },
                },
                {
                  key: "getTotalLength",
                  value: function () {
                    var xt = this.mainCurve;
                    try {
                      return (
                        (xt && xt.getTotalLength && xt.getTotalLength()) || 0
                      );
                    } catch {
                      return 0;
                    }
                  },
                },
                {
                  key: "renderErrorBar",
                  value: function (xt, Ut) {
                    if (
                      this.props.isAnimationActive &&
                      !this.state.isAnimationFinished
                    )
                      return null;
                    var Vt = this.props,
                      ct = Vt.points,
                      l = Vt.xAxis,
                      h = Vt.yAxis,
                      O = Vt.layout,
                      f = Vt.children,
                      D = (0, Pt.aS)(f, V.u);
                    if (!D) return null;
                    var tt = function (Ft, ie) {
                        return {
                          x: Ft.x,
                          y: Ft.y,
                          value: Ft.value,
                          errorVal: (0, Kt.kr)(Ft.payload, ie),
                        };
                      },
                      Et = {
                        clipPath: xt ? "url(#clipPath-".concat(Ut, ")") : null,
                      };
                    return s.createElement(
                      F.W,
                      Et,
                      D.map(function (Wt) {
                        return s.cloneElement(Wt, {
                          key: "bar-".concat(Wt.props.dataKey),
                          data: ct,
                          xAxis: l,
                          yAxis: h,
                          layout: O,
                          dataPointFormatter: tt,
                        });
                      }),
                    );
                  },
                },
                {
                  key: "renderDots",
                  value: function (xt, Ut, Vt) {
                    var ct = this.props.isAnimationActive;
                    if (ct && !this.state.isAnimationFinished) return null;
                    var l = this.props,
                      h = l.dot,
                      O = l.points,
                      f = l.dataKey,
                      D = (0, Pt.J9)(this.props, !1),
                      tt = (0, Pt.J9)(h, !0),
                      Et = O.map(function (Ft, ie) {
                        var k = v(
                          v(v({ key: "dot-".concat(ie), r: 3 }, D), tt),
                          {},
                          {
                            index: ie,
                            cx: Ft.x,
                            cy: Ft.y,
                            value: Ft.value,
                            dataKey: f,
                            payload: Ft.payload,
                            points: O,
                          },
                        );
                        return vt.renderDotItem(h, k);
                      }),
                      Wt = {
                        clipPath: xt
                          ? "url(#clipPath-"
                              .concat(Ut ? "" : "dots-")
                              .concat(Vt, ")")
                          : null,
                      };
                    return s.createElement(
                      F.W,
                      M({ className: "recharts-line-dots", key: "dots" }, Wt),
                      Et,
                    );
                  },
                },
                {
                  key: "renderCurveStatically",
                  value: function (xt, Ut, Vt, ct) {
                    var l = this.props,
                      h = l.type,
                      O = l.layout,
                      f = l.connectNulls,
                      D = l.ref,
                      tt = $(l, Dt),
                      Et = v(
                        v(
                          v({}, (0, Pt.J9)(tt, !0)),
                          {},
                          {
                            fill: "none",
                            className: "recharts-line-curve",
                            clipPath: Ut
                              ? "url(#clipPath-".concat(Vt, ")")
                              : null,
                            points: xt,
                          },
                          ct,
                        ),
                        {},
                        { type: h, layout: O, connectNulls: f },
                      );
                    return s.createElement(
                      at.I,
                      M({}, Et, { pathRef: this.pathRef }),
                    );
                  },
                },
                {
                  key: "renderCurveWithAnimation",
                  value: function (xt, Ut) {
                    var Vt = this,
                      ct = this.props,
                      l = ct.points,
                      h = ct.strokeDasharray,
                      O = ct.isAnimationActive,
                      f = ct.animationBegin,
                      D = ct.animationDuration,
                      tt = ct.animationEasing,
                      Et = ct.animationId,
                      Wt = ct.animateNewValues,
                      Ft = ct.width,
                      ie = ct.height,
                      k = this.state,
                      G = k.prevPoints,
                      j = k.totalLength;
                    return s.createElement(
                      rt.Ay,
                      {
                        begin: f,
                        duration: D,
                        isActive: O,
                        easing: tt,
                        from: { t: 0 },
                        to: { t: 1 },
                        key: "line-".concat(Et),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (yt) {
                        var mt = yt.t;
                        if (G) {
                          var kt = G.length / l.length,
                            Ht = l.map(function (At, Zt) {
                              var Be = Math.floor(Zt * kt);
                              if (G[Be]) {
                                var Le = G[Be],
                                  Pe = (0, pt.Dj)(Le.x, At.x),
                                  Ce = (0, pt.Dj)(Le.y, At.y);
                                return v(
                                  v({}, At),
                                  {},
                                  { x: Pe(mt), y: Ce(mt) },
                                );
                              }
                              if (Wt) {
                                var We = (0, pt.Dj)(Ft * 2, At.x),
                                  je = (0, pt.Dj)(ie / 2, At.y);
                                return v(
                                  v({}, At),
                                  {},
                                  { x: We(mt), y: je(mt) },
                                );
                              }
                              return v(v({}, At), {}, { x: At.x, y: At.y });
                            });
                          return Vt.renderCurveStatically(Ht, xt, Ut);
                        }
                        var qt = (0, pt.Dj)(0, j),
                          N = qt(mt),
                          X;
                        if (h) {
                          var _t = ""
                            .concat(h)
                            .split(/[,\s]+/gim)
                            .map(function (At) {
                              return parseFloat(At);
                            });
                          X = Vt.getStrokeDasharray(N, j, _t);
                        } else X = Vt.generateSimpleStrokeDasharray(j, N);
                        return Vt.renderCurveStatically(l, xt, Ut, {
                          strokeDasharray: X,
                        });
                      },
                    );
                  },
                },
                {
                  key: "renderCurve",
                  value: function (xt, Ut) {
                    var Vt = this.props,
                      ct = Vt.points,
                      l = Vt.isAnimationActive,
                      h = this.state,
                      O = h.prevPoints,
                      f = h.totalLength;
                    return l &&
                      ct &&
                      ct.length &&
                      ((!O && f > 0) || !et()(O, ct))
                      ? this.renderCurveWithAnimation(xt, Ut)
                      : this.renderCurveStatically(ct, xt, Ut);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var xt,
                      Ut = this.props,
                      Vt = Ut.hide,
                      ct = Ut.dot,
                      l = Ut.points,
                      h = Ut.className,
                      O = Ut.xAxis,
                      f = Ut.yAxis,
                      D = Ut.top,
                      tt = Ut.left,
                      Et = Ut.width,
                      Wt = Ut.height,
                      Ft = Ut.isAnimationActive,
                      ie = Ut.id;
                    if (Vt || !l || !l.length) return null;
                    var k = this.state.isAnimationFinished,
                      G = l.length === 1,
                      j = (0, ot.A)("recharts-line", h),
                      yt = O && O.allowDataOverflow,
                      mt = f && f.allowDataOverflow,
                      kt = yt || mt,
                      Ht = Q()(ie) ? this.id : ie,
                      qt =
                        (xt = (0, Pt.J9)(ct, !1)) !== null && xt !== void 0
                          ? xt
                          : { r: 3, strokeWidth: 2 },
                      N = qt.r,
                      X = N === void 0 ? 3 : N,
                      _t = qt.strokeWidth,
                      At = _t === void 0 ? 2 : _t,
                      Zt = (0, Pt.sT)(ct) ? ct : {},
                      Be = Zt.clipDot,
                      Le = Be === void 0 ? !0 : Be,
                      Pe = X * 2 + At;
                    return s.createElement(
                      F.W,
                      { className: j },
                      yt || mt
                        ? s.createElement(
                            "defs",
                            null,
                            s.createElement(
                              "clipPath",
                              { id: "clipPath-".concat(Ht) },
                              s.createElement("rect", {
                                x: yt ? tt : tt - Et / 2,
                                y: mt ? D : D - Wt / 2,
                                width: yt ? Et : Et * 2,
                                height: mt ? Wt : Wt * 2,
                              }),
                            ),
                            !Le &&
                              s.createElement(
                                "clipPath",
                                { id: "clipPath-dots-".concat(Ht) },
                                s.createElement("rect", {
                                  x: tt - Pe / 2,
                                  y: D - Pe / 2,
                                  width: Et + Pe,
                                  height: Wt + Pe,
                                }),
                              ),
                          )
                        : null,
                      !G && this.renderCurve(kt, Ht),
                      this.renderErrorBar(kt, Ht),
                      (G || ct) && this.renderDots(kt, Le, Ht),
                      (!Ft || k) && dt.Z.renderCallByParent(this.props, l),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (xt, Ut) {
                    return xt.animationId !== Ut.prevAnimationId
                      ? {
                          prevAnimationId: xt.animationId,
                          curPoints: xt.points,
                          prevPoints: Ut.curPoints,
                        }
                      : xt.points !== Ut.curPoints
                        ? { curPoints: xt.points }
                        : null;
                  },
                },
                {
                  key: "repeat",
                  value: function (xt, Ut) {
                    for (
                      var Vt =
                          xt.length % 2 !== 0 ? [].concat(ut(xt), [0]) : xt,
                        ct = [],
                        l = 0;
                      l < Ut;
                      ++l
                    )
                      ct = [].concat(ut(ct), ut(Vt));
                    return ct;
                  },
                },
                {
                  key: "renderDotItem",
                  value: function (xt, Ut) {
                    var Vt;
                    if (s.isValidElement(xt)) Vt = s.cloneElement(xt, Ut);
                    else if (q()(xt)) Vt = xt(Ut);
                    else {
                      var ct = Ut.key,
                        l = $(Ut, wt),
                        h = (0, ot.A)(
                          "recharts-line-dot",
                          typeof xt != "boolean" ? xt.className : "",
                        );
                      Vt = s.createElement(
                        it.c,
                        M({ key: ct }, l, { className: h }),
                      );
                    }
                    return Vt;
                  },
                },
              ],
            )
          );
        })(s.PureComponent);
        R(It, "displayName", "Line"),
          R(It, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            connectNulls: !1,
            activeDot: !0,
            dot: !0,
            legendType: "line",
            stroke: "#3182bd",
            strokeWidth: 1,
            fill: "#fff",
            points: [],
            isAnimationActive: !L.m.isSsr,
            animateNewValues: !0,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
            hide: !1,
            label: !1,
          }),
          R(It, "getComposedData", function (Z) {
            var vt = Z.props,
              ft = Z.xAxis,
              xt = Z.yAxis,
              Ut = Z.xAxisTicks,
              Vt = Z.yAxisTicks,
              ct = Z.dataKey,
              l = Z.bandSize,
              h = Z.displayedData,
              O = Z.offset,
              f = vt.layout,
              D = h.map(function (tt, Et) {
                var Wt = (0, Kt.kr)(tt, ct);
                return f === "horizontal"
                  ? {
                      x: (0, Kt.nb)({
                        axis: ft,
                        ticks: Ut,
                        bandSize: l,
                        entry: tt,
                        index: Et,
                      }),
                      y: Q()(Wt) ? null : xt.scale(Wt),
                      value: Wt,
                      payload: tt,
                    }
                  : {
                      x: Q()(Wt) ? null : ft.scale(Wt),
                      y: (0, Kt.nb)({
                        axis: xt,
                        ticks: Vt,
                        bandSize: l,
                        entry: tt,
                        index: Et,
                      }),
                      value: Wt,
                      payload: tt,
                    };
              });
            return v({ points: D, layout: f }, O);
          });
      },
      59136: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { e: () => p });
        var s = n(90626),
          rt = n(3316),
          K = n.n(rt),
          q = n(49556),
          U = n.n(q),
          Q = n(34164),
          z = n(75055),
          et = n(25068),
          ot = n(83349),
          at = n(96714),
          it = n(12260),
          F = n(27664),
          dt = n(93563),
          V = n(7351);
        function pt(b) {
          "@babel/helpers - typeof";
          return (
            (pt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (R) {
                    return typeof R;
                  }
                : function (R) {
                    return R &&
                      typeof Symbol == "function" &&
                      R.constructor === Symbol &&
                      R !== Symbol.prototype
                      ? "symbol"
                      : typeof R;
                  }),
            pt(b)
          );
        }
        function Pt(b, R) {
          if (!(b instanceof R))
            throw new TypeError("Cannot call a class as a function");
        }
        function L(b, R) {
          for (var J = 0; J < R.length; J++) {
            var Y = R[J];
            (Y.enumerable = Y.enumerable || !1),
              (Y.configurable = !0),
              "value" in Y && (Y.writable = !0),
              Object.defineProperty(b, Nt(Y.key), Y);
          }
        }
        function Kt(b, R, J) {
          return (
            R && L(b.prototype, R),
            J && L(b, J),
            Object.defineProperty(b, "prototype", { writable: !1 }),
            b
          );
        }
        function Dt(b, R, J) {
          return (
            (R = w(R)),
            wt(
              b,
              $()
                ? Reflect.construct(R, J || [], w(b).constructor)
                : R.apply(b, J),
            )
          );
        }
        function wt(b, R) {
          if (R && (pt(R) === "object" || typeof R == "function")) return R;
          if (R !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Mt(b);
        }
        function Mt(b) {
          if (b === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return b;
        }
        function $() {
          try {
            var b = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return ($ = function () {
            return !!b;
          })();
        }
        function w(b) {
          return (
            (w = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (J) {
                  return J.__proto__ || Object.getPrototypeOf(J);
                }),
            w(b)
          );
        }
        function M(b, R) {
          if (typeof R != "function" && R !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (b.prototype = Object.create(R && R.prototype, {
            constructor: { value: b, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(b, "prototype", { writable: !1 }),
            R && g(b, R);
        }
        function g(b, R) {
          return (
            (g = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (Y, It) {
                  return (Y.__proto__ = It), Y;
                }),
            g(b, R)
          );
        }
        function v(b, R) {
          var J = Object.keys(b);
          if (Object.getOwnPropertySymbols) {
            var Y = Object.getOwnPropertySymbols(b);
            R &&
              (Y = Y.filter(function (It) {
                return Object.getOwnPropertyDescriptor(b, It).enumerable;
              })),
              J.push.apply(J, Y);
          }
          return J;
        }
        function ut(b) {
          for (var R = 1; R < arguments.length; R++) {
            var J = arguments[R] != null ? arguments[R] : {};
            R % 2
              ? v(Object(J), !0).forEach(function (Y) {
                  lt(b, Y, J[Y]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    b,
                    Object.getOwnPropertyDescriptors(J),
                  )
                : v(Object(J)).forEach(function (Y) {
                    Object.defineProperty(
                      b,
                      Y,
                      Object.getOwnPropertyDescriptor(J, Y),
                    );
                  });
          }
          return b;
        }
        function lt(b, R, J) {
          return (
            (R = Nt(R)),
            R in b
              ? Object.defineProperty(b, R, {
                  value: J,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (b[R] = J),
            b
          );
        }
        function Nt(b) {
          var R = C(b, "string");
          return pt(R) == "symbol" ? R : R + "";
        }
        function C(b, R) {
          if (pt(b) != "object" || !b) return b;
          var J = b[Symbol.toPrimitive];
          if (J !== void 0) {
            var Y = J.call(b, R || "default");
            if (pt(Y) != "object") return Y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (R === "string" ? String : Number)(b);
        }
        function B(b, R) {
          return S(b) || m(b, R) || bt(b, R) || nt();
        }
        function nt() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function bt(b, R) {
          if (b) {
            if (typeof b == "string") return P(b, R);
            var J = Object.prototype.toString.call(b).slice(8, -1);
            if (
              (J === "Object" && b.constructor && (J = b.constructor.name),
              J === "Map" || J === "Set")
            )
              return Array.from(b);
            if (
              J === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(J)
            )
              return P(b, R);
          }
        }
        function P(b, R) {
          (R == null || R > b.length) && (R = b.length);
          for (var J = 0, Y = new Array(R); J < R; J++) Y[J] = b[J];
          return Y;
        }
        function m(b, R) {
          var J =
            b == null
              ? null
              : (typeof Symbol < "u" && b[Symbol.iterator]) || b["@@iterator"];
          if (J != null) {
            var Y,
              It,
              Z,
              vt,
              ft = [],
              xt = !0,
              Ut = !1;
            try {
              if (((Z = (J = J.call(b)).next), R === 0)) {
                if (Object(J) !== J) return;
                xt = !1;
              } else
                for (
                  ;
                  !(xt = (Y = Z.call(J)).done) &&
                  (ft.push(Y.value), ft.length !== R);
                  xt = !0
                );
            } catch (Vt) {
              (Ut = !0), (It = Vt);
            } finally {
              try {
                if (
                  !xt &&
                  J.return != null &&
                  ((vt = J.return()), Object(vt) !== vt)
                )
                  return;
              } finally {
                if (Ut) throw It;
              }
            }
            return ft;
          }
        }
        function S(b) {
          if (Array.isArray(b)) return b;
        }
        function _() {
          return (
            (_ = Object.assign
              ? Object.assign.bind()
              : function (b) {
                  for (var R = 1; R < arguments.length; R++) {
                    var J = arguments[R];
                    for (var Y in J)
                      Object.prototype.hasOwnProperty.call(J, Y) &&
                        (b[Y] = J[Y]);
                  }
                  return b;
                }),
            _.apply(this, arguments)
          );
        }
        var E = function (R, J) {
            var Y;
            return (
              s.isValidElement(R)
                ? (Y = s.cloneElement(R, J))
                : K()(R)
                  ? (Y = R(J))
                  : (Y = s.createElement(
                      "line",
                      _({}, J, { className: "recharts-reference-line-line" }),
                    )),
              Y
            );
          },
          c = function (R, J, Y, It, Z, vt, ft, xt, Ut) {
            var Vt = Z.x,
              ct = Z.y,
              l = Z.width,
              h = Z.height;
            if (Y) {
              var O = Ut.y,
                f = R.y.apply(O, { position: vt });
              if ((0, ot.R)(Ut, "discard") && !R.y.isInRange(f)) return null;
              var D = [
                { x: Vt + l, y: f },
                { x: Vt, y: f },
              ];
              return xt === "left" ? D.reverse() : D;
            }
            if (J) {
              var tt = Ut.x,
                Et = R.x.apply(tt, { position: vt });
              if ((0, ot.R)(Ut, "discard") && !R.x.isInRange(Et)) return null;
              var Wt = [
                { x: Et, y: ct + h },
                { x: Et, y: ct },
              ];
              return ft === "top" ? Wt.reverse() : Wt;
            }
            if (It) {
              var Ft = Ut.segment,
                ie = Ft.map(function (k) {
                  return R.apply(k, { position: vt });
                });
              return (0, ot.R)(Ut, "discard") &&
                U()(ie, function (k) {
                  return !R.isInRange(k);
                })
                ? null
                : ie;
            }
            return null;
          };
        function o(b) {
          var R = b.x,
            J = b.y,
            Y = b.segment,
            It = b.xAxisId,
            Z = b.yAxisId,
            vt = b.shape,
            ft = b.className,
            xt = b.alwaysShow,
            Ut = (0, V.Yp)(),
            Vt = (0, V.AF)(It),
            ct = (0, V.Nk)(Z),
            l = (0, V.sk)();
          if (!Ut || !l) return null;
          (0, F.R)(
            xt === void 0,
            'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
          );
          var h = (0, it.P2)({ x: Vt.scale, y: ct.scale }),
            O = (0, at.vh)(R),
            f = (0, at.vh)(J),
            D = Y && Y.length === 2,
            tt = c(
              h,
              O,
              f,
              D,
              l,
              b.position,
              Vt.orientation,
              ct.orientation,
              b,
            );
          if (!tt) return null;
          var Et = B(tt, 2),
            Wt = Et[0],
            Ft = Wt.x,
            ie = Wt.y,
            k = Et[1],
            G = k.x,
            j = k.y,
            yt = (0, ot.R)(b, "hidden") ? "url(#".concat(Ut, ")") : void 0,
            mt = ut(
              ut({ clipPath: yt }, (0, dt.J9)(b, !0)),
              {},
              { x1: Ft, y1: ie, x2: G, y2: j },
            );
          return s.createElement(
            z.W,
            { className: (0, Q.A)("recharts-reference-line", ft) },
            E(vt, mt),
            et.J.renderCallByParent(
              b,
              (0, it.vh)({ x1: Ft, y1: ie, x2: G, y2: j }),
            ),
          );
        }
        var p = (function (b) {
          function R() {
            return Pt(this, R), Dt(this, R, arguments);
          }
          return (
            M(R, b),
            Kt(R, [
              {
                key: "render",
                value: function () {
                  return s.createElement(o, this.props);
                },
              },
            ])
          );
        })(s.Component);
        lt(p, "displayName", "ReferenceLine"),
          lt(p, "defaultProps", {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            fill: "none",
            stroke: "#ccc",
            fillOpacity: 1,
            strokeWidth: 1,
            position: "middle",
          });
      },
      90150: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { W: () => $ });
        var s = n(90626),
          rt = n(34164),
          K = n(7351),
          q = n(23884),
          U = n(24633);
        function Q(w) {
          "@babel/helpers - typeof";
          return (
            (Q =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (M) {
                    return typeof M;
                  }
                : function (M) {
                    return M &&
                      typeof Symbol == "function" &&
                      M.constructor === Symbol &&
                      M !== Symbol.prototype
                      ? "symbol"
                      : typeof M;
                  }),
            Q(w)
          );
        }
        function z(w, M) {
          if (!(w instanceof M))
            throw new TypeError("Cannot call a class as a function");
        }
        function et(w, M) {
          for (var g = 0; g < M.length; g++) {
            var v = M[g];
            (v.enumerable = v.enumerable || !1),
              (v.configurable = !0),
              "value" in v && (v.writable = !0),
              Object.defineProperty(w, Kt(v.key), v);
          }
        }
        function ot(w, M, g) {
          return (
            M && et(w.prototype, M),
            g && et(w, g),
            Object.defineProperty(w, "prototype", { writable: !1 }),
            w
          );
        }
        function at(w, M, g) {
          return (
            (M = V(M)),
            it(
              w,
              dt()
                ? Reflect.construct(M, g || [], V(w).constructor)
                : M.apply(w, g),
            )
          );
        }
        function it(w, M) {
          if (M && (Q(M) === "object" || typeof M == "function")) return M;
          if (M !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return F(w);
        }
        function F(w) {
          if (w === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return w;
        }
        function dt() {
          try {
            var w = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (dt = function () {
            return !!w;
          })();
        }
        function V(w) {
          return (
            (V = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (g) {
                  return g.__proto__ || Object.getPrototypeOf(g);
                }),
            V(w)
          );
        }
        function pt(w, M) {
          if (typeof M != "function" && M !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (w.prototype = Object.create(M && M.prototype, {
            constructor: { value: w, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(w, "prototype", { writable: !1 }),
            M && Pt(w, M);
        }
        function Pt(w, M) {
          return (
            (Pt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (v, ut) {
                  return (v.__proto__ = ut), v;
                }),
            Pt(w, M)
          );
        }
        function L(w, M, g) {
          return (
            (M = Kt(M)),
            M in w
              ? Object.defineProperty(w, M, {
                  value: g,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (w[M] = g),
            w
          );
        }
        function Kt(w) {
          var M = Dt(w, "string");
          return Q(M) == "symbol" ? M : M + "";
        }
        function Dt(w, M) {
          if (Q(w) != "object" || !w) return w;
          var g = w[Symbol.toPrimitive];
          if (g !== void 0) {
            var v = g.call(w, M || "default");
            if (Q(v) != "object") return v;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (M === "string" ? String : Number)(w);
        }
        function wt() {
          return (
            (wt = Object.assign
              ? Object.assign.bind()
              : function (w) {
                  for (var M = 1; M < arguments.length; M++) {
                    var g = arguments[M];
                    for (var v in g)
                      Object.prototype.hasOwnProperty.call(g, v) &&
                        (w[v] = g[v]);
                  }
                  return w;
                }),
            wt.apply(this, arguments)
          );
        }
        function Mt(w) {
          var M = w.xAxisId,
            g = (0, K.yi)(),
            v = (0, K.rY)(),
            ut = (0, K.AF)(M);
          return ut == null
            ? null
            : s.createElement(
                q.u,
                wt({}, ut, {
                  className: (0, rt.A)(
                    "recharts-".concat(ut.axisType, " ").concat(ut.axisType),
                    ut.className,
                  ),
                  viewBox: { x: 0, y: 0, width: g, height: v },
                  ticksGenerator: function (Nt) {
                    return (0, U.Rh)(Nt, !0);
                  },
                }),
              );
        }
        var $ = (function (w) {
          function M() {
            return z(this, M), at(this, M, arguments);
          }
          return (
            pt(M, w),
            ot(M, [
              {
                key: "render",
                value: function () {
                  return s.createElement(Mt, this.props);
                },
              },
            ])
          );
        })(s.Component);
        L($, "displayName", "XAxis"),
          L($, "defaultProps", {
            allowDecimals: !0,
            hide: !1,
            orientation: "bottom",
            width: 0,
            height: 30,
            mirror: !1,
            xAxisId: 0,
            tickCount: 5,
            type: "category",
            padding: { left: 0, right: 0 },
            allowDataOverflow: !1,
            scale: "auto",
            reversed: !1,
            allowDuplicatedCategory: !0,
          });
      },
      73077: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { h: () => $ });
        var s = n(90626),
          rt = n(34164),
          K = n(7351),
          q = n(23884),
          U = n(24633);
        function Q(w) {
          "@babel/helpers - typeof";
          return (
            (Q =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (M) {
                    return typeof M;
                  }
                : function (M) {
                    return M &&
                      typeof Symbol == "function" &&
                      M.constructor === Symbol &&
                      M !== Symbol.prototype
                      ? "symbol"
                      : typeof M;
                  }),
            Q(w)
          );
        }
        function z(w, M) {
          if (!(w instanceof M))
            throw new TypeError("Cannot call a class as a function");
        }
        function et(w, M) {
          for (var g = 0; g < M.length; g++) {
            var v = M[g];
            (v.enumerable = v.enumerable || !1),
              (v.configurable = !0),
              "value" in v && (v.writable = !0),
              Object.defineProperty(w, Kt(v.key), v);
          }
        }
        function ot(w, M, g) {
          return (
            M && et(w.prototype, M),
            g && et(w, g),
            Object.defineProperty(w, "prototype", { writable: !1 }),
            w
          );
        }
        function at(w, M, g) {
          return (
            (M = V(M)),
            it(
              w,
              dt()
                ? Reflect.construct(M, g || [], V(w).constructor)
                : M.apply(w, g),
            )
          );
        }
        function it(w, M) {
          if (M && (Q(M) === "object" || typeof M == "function")) return M;
          if (M !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return F(w);
        }
        function F(w) {
          if (w === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return w;
        }
        function dt() {
          try {
            var w = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (dt = function () {
            return !!w;
          })();
        }
        function V(w) {
          return (
            (V = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (g) {
                  return g.__proto__ || Object.getPrototypeOf(g);
                }),
            V(w)
          );
        }
        function pt(w, M) {
          if (typeof M != "function" && M !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (w.prototype = Object.create(M && M.prototype, {
            constructor: { value: w, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(w, "prototype", { writable: !1 }),
            M && Pt(w, M);
        }
        function Pt(w, M) {
          return (
            (Pt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (v, ut) {
                  return (v.__proto__ = ut), v;
                }),
            Pt(w, M)
          );
        }
        function L(w, M, g) {
          return (
            (M = Kt(M)),
            M in w
              ? Object.defineProperty(w, M, {
                  value: g,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (w[M] = g),
            w
          );
        }
        function Kt(w) {
          var M = Dt(w, "string");
          return Q(M) == "symbol" ? M : M + "";
        }
        function Dt(w, M) {
          if (Q(w) != "object" || !w) return w;
          var g = w[Symbol.toPrimitive];
          if (g !== void 0) {
            var v = g.call(w, M || "default");
            if (Q(v) != "object") return v;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (M === "string" ? String : Number)(w);
        }
        function wt() {
          return (
            (wt = Object.assign
              ? Object.assign.bind()
              : function (w) {
                  for (var M = 1; M < arguments.length; M++) {
                    var g = arguments[M];
                    for (var v in g)
                      Object.prototype.hasOwnProperty.call(g, v) &&
                        (w[v] = g[v]);
                  }
                  return w;
                }),
            wt.apply(this, arguments)
          );
        }
        var Mt = function (M) {
            var g = M.yAxisId,
              v = (0, K.yi)(),
              ut = (0, K.rY)(),
              lt = (0, K.Nk)(g);
            return lt == null
              ? null
              : s.createElement(
                  q.u,
                  wt({}, lt, {
                    className: (0, rt.A)(
                      "recharts-".concat(lt.axisType, " ").concat(lt.axisType),
                      lt.className,
                    ),
                    viewBox: { x: 0, y: 0, width: v, height: ut },
                    ticksGenerator: function (C) {
                      return (0, U.Rh)(C, !0);
                    },
                  }),
                );
          },
          $ = (function (w) {
            function M() {
              return z(this, M), at(this, M, arguments);
            }
            return (
              pt(M, w),
              ot(M, [
                {
                  key: "render",
                  value: function () {
                    return s.createElement(Mt, this.props);
                  },
                },
              ])
            );
          })(s.Component);
        L($, "displayName", "YAxis"),
          L($, "defaultProps", {
            allowDuplicatedCategory: !0,
            allowDecimals: !0,
            hide: !1,
            orientation: "left",
            width: 60,
            height: 0,
            mirror: !1,
            yAxisId: 0,
            tickCount: 5,
            type: "number",
            padding: { top: 0, bottom: 0 },
            allowDataOverflow: !1,
            scale: "auto",
            reversed: !1,
          });
      },
      81887: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { f: () => Mt });
        var s = n(3316),
          rt = n.n(s),
          K = n(96714),
          q = n(15654),
          U = n(59640),
          Q = n(12260);
        function z($, w, M) {
          if (w < 1) return [];
          if (w === 1 && M === void 0) return $;
          for (var g = [], v = 0; v < $.length; v += w)
            if (M === void 0 || M($[v]) === !0) g.push($[v]);
            else return;
          return g;
        }
        function et($, w, M) {
          var g = { width: $.width + w.width, height: $.height + w.height };
          return (0, Q.bx)(g, M);
        }
        function ot($, w, M) {
          var g = M === "width",
            v = $.x,
            ut = $.y,
            lt = $.width,
            Nt = $.height;
          return w === 1
            ? { start: g ? v : ut, end: g ? v + lt : ut + Nt }
            : { start: g ? v + lt : ut + Nt, end: g ? v : ut };
        }
        function at($, w, M, g, v) {
          if ($ * w < $ * g || $ * w > $ * v) return !1;
          var ut = M();
          return (
            $ * (w - ($ * ut) / 2 - g) >= 0 && $ * (w + ($ * ut) / 2 - v) <= 0
          );
        }
        function it($, w) {
          return z($, w + 1);
        }
        function F($, w, M, g, v) {
          for (
            var ut = (g || []).slice(),
              lt = w.start,
              Nt = w.end,
              C = 0,
              B = 1,
              nt = lt,
              bt = function () {
                var S = g?.[C];
                if (S === void 0) return { v: z(g, B) };
                var _ = C,
                  E,
                  c = function () {
                    return E === void 0 && (E = M(S, _)), E;
                  },
                  o = S.coordinate,
                  p = C === 0 || at($, o, c, nt, Nt);
                p || ((C = 0), (nt = lt), (B += 1)),
                  p && ((nt = o + $ * (c() / 2 + v)), (C += B));
              },
              P;
            B <= ut.length;
          )
            if (((P = bt()), P)) return P.v;
          return [];
        }
        function dt($) {
          "@babel/helpers - typeof";
          return (
            (dt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (w) {
                    return typeof w;
                  }
                : function (w) {
                    return w &&
                      typeof Symbol == "function" &&
                      w.constructor === Symbol &&
                      w !== Symbol.prototype
                      ? "symbol"
                      : typeof w;
                  }),
            dt($)
          );
        }
        function V($, w) {
          var M = Object.keys($);
          if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols($);
            w &&
              (g = g.filter(function (v) {
                return Object.getOwnPropertyDescriptor($, v).enumerable;
              })),
              M.push.apply(M, g);
          }
          return M;
        }
        function pt($) {
          for (var w = 1; w < arguments.length; w++) {
            var M = arguments[w] != null ? arguments[w] : {};
            w % 2
              ? V(Object(M), !0).forEach(function (g) {
                  Pt($, g, M[g]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    $,
                    Object.getOwnPropertyDescriptors(M),
                  )
                : V(Object(M)).forEach(function (g) {
                    Object.defineProperty(
                      $,
                      g,
                      Object.getOwnPropertyDescriptor(M, g),
                    );
                  });
          }
          return $;
        }
        function Pt($, w, M) {
          return (
            (w = L(w)),
            w in $
              ? Object.defineProperty($, w, {
                  value: M,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : ($[w] = M),
            $
          );
        }
        function L($) {
          var w = Kt($, "string");
          return dt(w) == "symbol" ? w : w + "";
        }
        function Kt($, w) {
          if (dt($) != "object" || !$) return $;
          var M = $[Symbol.toPrimitive];
          if (M !== void 0) {
            var g = M.call($, w || "default");
            if (dt(g) != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (w === "string" ? String : Number)($);
        }
        function Dt($, w, M, g, v) {
          for (
            var ut = (g || []).slice(),
              lt = ut.length,
              Nt = w.start,
              C = w.end,
              B = function (P) {
                var m = ut[P],
                  S,
                  _ = function () {
                    return S === void 0 && (S = M(m, P)), S;
                  };
                if (P === lt - 1) {
                  var E = $ * (m.coordinate + ($ * _()) / 2 - C);
                  ut[P] = m = pt(
                    pt({}, m),
                    {},
                    { tickCoord: E > 0 ? m.coordinate - E * $ : m.coordinate },
                  );
                } else
                  ut[P] = m = pt(pt({}, m), {}, { tickCoord: m.coordinate });
                var c = at($, m.tickCoord, _, Nt, C);
                c &&
                  ((C = m.tickCoord - $ * (_() / 2 + v)),
                  (ut[P] = pt(pt({}, m), {}, { isShow: !0 })));
              },
              nt = lt - 1;
            nt >= 0;
            nt--
          )
            B(nt);
          return ut;
        }
        function wt($, w, M, g, v, ut) {
          var lt = (g || []).slice(),
            Nt = lt.length,
            C = w.start,
            B = w.end;
          if (ut) {
            var nt = g[Nt - 1],
              bt = M(nt, Nt - 1),
              P = $ * (nt.coordinate + ($ * bt) / 2 - B);
            lt[Nt - 1] = nt = pt(
              pt({}, nt),
              {},
              { tickCoord: P > 0 ? nt.coordinate - P * $ : nt.coordinate },
            );
            var m = at(
              $,
              nt.tickCoord,
              function () {
                return bt;
              },
              C,
              B,
            );
            m &&
              ((B = nt.tickCoord - $ * (bt / 2 + v)),
              (lt[Nt - 1] = pt(pt({}, nt), {}, { isShow: !0 })));
          }
          for (
            var S = ut ? Nt - 1 : Nt,
              _ = function (o) {
                var p = lt[o],
                  b,
                  R = function () {
                    return b === void 0 && (b = M(p, o)), b;
                  };
                if (o === 0) {
                  var J = $ * (p.coordinate - ($ * R()) / 2 - C);
                  lt[o] = p = pt(
                    pt({}, p),
                    {},
                    { tickCoord: J < 0 ? p.coordinate - J * $ : p.coordinate },
                  );
                } else
                  lt[o] = p = pt(pt({}, p), {}, { tickCoord: p.coordinate });
                var Y = at($, p.tickCoord, R, C, B);
                Y &&
                  ((C = p.tickCoord + $ * (R() / 2 + v)),
                  (lt[o] = pt(pt({}, p), {}, { isShow: !0 })));
              },
              E = 0;
            E < S;
            E++
          )
            _(E);
          return lt;
        }
        function Mt($, w, M) {
          var g = $.tick,
            v = $.ticks,
            ut = $.viewBox,
            lt = $.minTickGap,
            Nt = $.orientation,
            C = $.interval,
            B = $.tickFormatter,
            nt = $.unit,
            bt = $.angle;
          if (!v || !v.length || !g) return [];
          if ((0, K.Et)(C) || U.m.isSsr)
            return it(v, typeof C == "number" && (0, K.Et)(C) ? C : 0);
          var P = [],
            m = Nt === "top" || Nt === "bottom" ? "width" : "height",
            S =
              nt && m === "width"
                ? (0, q.Pu)(nt, { fontSize: w, letterSpacing: M })
                : { width: 0, height: 0 },
            _ = function (p, b) {
              var R = rt()(B) ? B(p.value, b) : p.value;
              return m === "width"
                ? et((0, q.Pu)(R, { fontSize: w, letterSpacing: M }), S, bt)
                : (0, q.Pu)(R, { fontSize: w, letterSpacing: M })[m];
            },
            E =
              v.length >= 2 ? (0, K.sA)(v[1].coordinate - v[0].coordinate) : 1,
            c = ot(ut, E, m);
          return C === "equidistantPreserveStart"
            ? F(E, c, _, v, lt)
            : (C === "preserveStart" || C === "preserveStartEnd"
                ? (P = wt(E, c, _, v, lt, C === "preserveStartEnd"))
                : (P = Dt(E, c, _, v, lt)),
              P.filter(function (o) {
                return o.isShow;
              }));
        }
      },
      98403: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { gu: () => aa });
        var s = n(90626),
          rt = n(64609),
          K = n.n(rt),
          q = n(3316),
          U = n.n(q),
          Q = n(50199),
          z = n.n(Q),
          et = n(52686),
          ot = n.n(et),
          at = n(20206),
          it = n.n(at),
          F = n(51504),
          dt = n.n(F),
          V = n(34164),
          pt = n(68841),
          Pt = n(67125),
          L = n(75055),
          Kt = n(30230),
          Dt = n(75620),
          wt = n(21687),
          Mt = n(52857),
          $ = n(93563),
          w = n(28583),
          M = n(34656),
          g = n(24633),
          v = n(96714);
        function ut(u) {
          "@babel/helpers - typeof";
          return (
            (ut =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            ut(u)
          );
        }
        function lt(u, a) {
          var A = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(u);
            a &&
              (y = y.filter(function (Tt) {
                return Object.getOwnPropertyDescriptor(u, Tt).enumerable;
              })),
              A.push.apply(A, y);
          }
          return A;
        }
        function Nt(u) {
          for (var a = 1; a < arguments.length; a++) {
            var A = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? lt(Object(A), !0).forEach(function (y) {
                  C(u, y, A[y]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(A),
                  )
                : lt(Object(A)).forEach(function (y) {
                    Object.defineProperty(
                      u,
                      y,
                      Object.getOwnPropertyDescriptor(A, y),
                    );
                  });
          }
          return u;
        }
        function C(u, a, A) {
          return (
            (a = B(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = A),
            u
          );
        }
        function B(u) {
          var a = nt(u, "string");
          return ut(a) == "symbol" ? a : a + "";
        }
        function nt(u, a) {
          if (ut(u) != "object" || !u) return u;
          var A = u[Symbol.toPrimitive];
          if (A !== void 0) {
            var y = A.call(u, a || "default");
            if (ut(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var bt = ["Webkit", "Moz", "O", "ms"],
          P = function (a, A) {
            if (!a) return null;
            var y = a.replace(/(\w)/, function (zt) {
                return zt.toUpperCase();
              }),
              Tt = bt.reduce(function (zt, Xt) {
                return Nt(Nt({}, zt), {}, C({}, Xt + y, A));
              }, {});
            return (Tt[a] = A), Tt;
          };
        function m(u) {
          "@babel/helpers - typeof";
          return (
            (m =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            m(u)
          );
        }
        function S() {
          return (
            (S = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var A = arguments[a];
                    for (var y in A)
                      Object.prototype.hasOwnProperty.call(A, y) &&
                        (u[y] = A[y]);
                  }
                  return u;
                }),
            S.apply(this, arguments)
          );
        }
        function _(u, a) {
          var A = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(u);
            a &&
              (y = y.filter(function (Tt) {
                return Object.getOwnPropertyDescriptor(u, Tt).enumerable;
              })),
              A.push.apply(A, y);
          }
          return A;
        }
        function E(u) {
          for (var a = 1; a < arguments.length; a++) {
            var A = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? _(Object(A), !0).forEach(function (y) {
                  ft(u, y, A[y]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(A),
                  )
                : _(Object(A)).forEach(function (y) {
                    Object.defineProperty(
                      u,
                      y,
                      Object.getOwnPropertyDescriptor(A, y),
                    );
                  });
          }
          return u;
        }
        function c(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function o(u, a) {
          for (var A = 0; A < a.length; A++) {
            var y = a[A];
            (y.enumerable = y.enumerable || !1),
              (y.configurable = !0),
              "value" in y && (y.writable = !0),
              Object.defineProperty(u, xt(y.key), y);
          }
        }
        function p(u, a, A) {
          return (
            a && o(u.prototype, a),
            A && o(u, A),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function b(u, a, A) {
          return (
            (a = It(a)),
            R(
              u,
              Y()
                ? Reflect.construct(a, A || [], It(u).constructor)
                : a.apply(u, A),
            )
          );
        }
        function R(u, a) {
          if (a && (m(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return J(u);
        }
        function J(u) {
          if (u === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return u;
        }
        function Y() {
          try {
            var u = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Y = function () {
            return !!u;
          })();
        }
        function It(u) {
          return (
            (It = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (A) {
                  return A.__proto__ || Object.getPrototypeOf(A);
                }),
            It(u)
          );
        }
        function Z(u, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (u.prototype = Object.create(a && a.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            a && vt(u, a);
        }
        function vt(u, a) {
          return (
            (vt = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (y, Tt) {
                  return (y.__proto__ = Tt), y;
                }),
            vt(u, a)
          );
        }
        function ft(u, a, A) {
          return (
            (a = xt(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = A),
            u
          );
        }
        function xt(u) {
          var a = Ut(u, "string");
          return m(a) == "symbol" ? a : a + "";
        }
        function Ut(u, a) {
          if (m(u) != "object" || !u) return u;
          var A = u[Symbol.toPrimitive];
          if (A !== void 0) {
            var y = A.call(u, a || "default");
            if (m(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var Vt = function (a) {
            var A = a.data,
              y = a.startIndex,
              Tt = a.endIndex,
              zt = a.x,
              Xt = a.width,
              te = a.travellerWidth;
            if (!A || !A.length) return {};
            var ae = A.length,
              le = (0, w.z)()
                .domain(z()(0, ae))
                .range([zt, zt + Xt - te]),
              pe = le.domain().map(function (ve) {
                return le(ve);
              });
            return {
              isTextActive: !1,
              isSlideMoving: !1,
              isTravellerMoving: !1,
              isTravellerFocused: !1,
              startX: le(y),
              endX: le(Tt),
              scale: le,
              scaleValues: pe,
            };
          },
          ct = function (a) {
            return a.changedTouches && !!a.changedTouches.length;
          },
          l = (function (u) {
            function a(A) {
              var y;
              return (
                c(this, a),
                (y = b(this, a, [A])),
                ft(y, "handleDrag", function (Tt) {
                  y.leaveTimer &&
                    (clearTimeout(y.leaveTimer), (y.leaveTimer = null)),
                    y.state.isTravellerMoving
                      ? y.handleTravellerMove(Tt)
                      : y.state.isSlideMoving && y.handleSlideDrag(Tt);
                }),
                ft(y, "handleTouchMove", function (Tt) {
                  Tt.changedTouches != null &&
                    Tt.changedTouches.length > 0 &&
                    y.handleDrag(Tt.changedTouches[0]);
                }),
                ft(y, "handleDragEnd", function () {
                  y.setState(
                    { isTravellerMoving: !1, isSlideMoving: !1 },
                    function () {
                      var Tt = y.props,
                        zt = Tt.endIndex,
                        Xt = Tt.onDragEnd,
                        te = Tt.startIndex;
                      Xt?.({ endIndex: zt, startIndex: te });
                    },
                  ),
                    y.detachDragEndListener();
                }),
                ft(y, "handleLeaveWrapper", function () {
                  (y.state.isTravellerMoving || y.state.isSlideMoving) &&
                    (y.leaveTimer = window.setTimeout(
                      y.handleDragEnd,
                      y.props.leaveTimeOut,
                    ));
                }),
                ft(y, "handleEnterSlideOrTraveller", function () {
                  y.setState({ isTextActive: !0 });
                }),
                ft(y, "handleLeaveSlideOrTraveller", function () {
                  y.setState({ isTextActive: !1 });
                }),
                ft(y, "handleSlideDragStart", function (Tt) {
                  var zt = ct(Tt) ? Tt.changedTouches[0] : Tt;
                  y.setState({
                    isTravellerMoving: !1,
                    isSlideMoving: !0,
                    slideMoveStartX: zt.pageX,
                  }),
                    y.attachDragEndListener();
                }),
                (y.travellerDragStartHandlers = {
                  startX: y.handleTravellerDragStart.bind(y, "startX"),
                  endX: y.handleTravellerDragStart.bind(y, "endX"),
                }),
                (y.state = {}),
                y
              );
            }
            return (
              Z(a, u),
              p(
                a,
                [
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.leaveTimer &&
                        (clearTimeout(this.leaveTimer),
                        (this.leaveTimer = null)),
                        this.detachDragEndListener();
                    },
                  },
                  {
                    key: "getIndex",
                    value: function (y) {
                      var Tt = y.startX,
                        zt = y.endX,
                        Xt = this.state.scaleValues,
                        te = this.props,
                        ae = te.gap,
                        le = te.data,
                        pe = le.length - 1,
                        ve = Math.min(Tt, zt),
                        fe = Math.max(Tt, zt),
                        me = a.getIndexInRange(Xt, ve),
                        Ue = a.getIndexInRange(Xt, fe);
                      return {
                        startIndex: me - (me % ae),
                        endIndex: Ue === pe ? pe : Ue - (Ue % ae),
                      };
                    },
                  },
                  {
                    key: "getTextOfTick",
                    value: function (y) {
                      var Tt = this.props,
                        zt = Tt.data,
                        Xt = Tt.tickFormatter,
                        te = Tt.dataKey,
                        ae = (0, g.kr)(zt[y], te, y);
                      return U()(Xt) ? Xt(ae, y) : ae;
                    },
                  },
                  {
                    key: "attachDragEndListener",
                    value: function () {
                      window.addEventListener(
                        "mouseup",
                        this.handleDragEnd,
                        !0,
                      ),
                        window.addEventListener(
                          "touchend",
                          this.handleDragEnd,
                          !0,
                        ),
                        window.addEventListener(
                          "mousemove",
                          this.handleDrag,
                          !0,
                        );
                    },
                  },
                  {
                    key: "detachDragEndListener",
                    value: function () {
                      window.removeEventListener(
                        "mouseup",
                        this.handleDragEnd,
                        !0,
                      ),
                        window.removeEventListener(
                          "touchend",
                          this.handleDragEnd,
                          !0,
                        ),
                        window.removeEventListener(
                          "mousemove",
                          this.handleDrag,
                          !0,
                        );
                    },
                  },
                  {
                    key: "handleSlideDrag",
                    value: function (y) {
                      var Tt = this.state,
                        zt = Tt.slideMoveStartX,
                        Xt = Tt.startX,
                        te = Tt.endX,
                        ae = this.props,
                        le = ae.x,
                        pe = ae.width,
                        ve = ae.travellerWidth,
                        fe = ae.startIndex,
                        me = ae.endIndex,
                        Ue = ae.onChange,
                        Me = y.pageX - zt;
                      Me > 0
                        ? (Me = Math.min(
                            Me,
                            le + pe - ve - te,
                            le + pe - ve - Xt,
                          ))
                        : Me < 0 && (Me = Math.max(Me, le - Xt, le - te));
                      var xe = this.getIndex({
                        startX: Xt + Me,
                        endX: te + Me,
                      });
                      (xe.startIndex !== fe || xe.endIndex !== me) &&
                        Ue &&
                        Ue(xe),
                        this.setState({
                          startX: Xt + Me,
                          endX: te + Me,
                          slideMoveStartX: y.pageX,
                        });
                    },
                  },
                  {
                    key: "handleTravellerDragStart",
                    value: function (y, Tt) {
                      var zt = ct(Tt) ? Tt.changedTouches[0] : Tt;
                      this.setState({
                        isSlideMoving: !1,
                        isTravellerMoving: !0,
                        movingTravellerId: y,
                        brushMoveStartX: zt.pageX,
                      }),
                        this.attachDragEndListener();
                    },
                  },
                  {
                    key: "handleTravellerMove",
                    value: function (y) {
                      var Tt = this.state,
                        zt = Tt.brushMoveStartX,
                        Xt = Tt.movingTravellerId,
                        te = Tt.endX,
                        ae = Tt.startX,
                        le = this.state[Xt],
                        pe = this.props,
                        ve = pe.x,
                        fe = pe.width,
                        me = pe.travellerWidth,
                        Ue = pe.onChange,
                        Me = pe.gap,
                        xe = pe.data,
                        ue = {
                          startX: this.state.startX,
                          endX: this.state.endX,
                        },
                        ye = y.pageX - zt;
                      ye > 0
                        ? (ye = Math.min(ye, ve + fe - me - le))
                        : ye < 0 && (ye = Math.max(ye, ve - le)),
                        (ue[Xt] = le + ye);
                      var oe = this.getIndex(ue),
                        se = oe.startIndex,
                        Ot = oe.endIndex,
                        jt = function () {
                          var ee = xe.length - 1;
                          return (
                            (Xt === "startX" &&
                              (te > ae ? se % Me === 0 : Ot % Me === 0)) ||
                            (te < ae && Ot === ee) ||
                            (Xt === "endX" &&
                              (te > ae ? Ot % Me === 0 : se % Me === 0)) ||
                            (te > ae && Ot === ee)
                          );
                        };
                      this.setState(
                        ft(ft({}, Xt, le + ye), "brushMoveStartX", y.pageX),
                        function () {
                          Ue && jt() && Ue(oe);
                        },
                      );
                    },
                  },
                  {
                    key: "handleTravellerMoveKeyboard",
                    value: function (y, Tt) {
                      var zt = this,
                        Xt = this.state,
                        te = Xt.scaleValues,
                        ae = Xt.startX,
                        le = Xt.endX,
                        pe = this.state[Tt],
                        ve = te.indexOf(pe);
                      if (ve !== -1) {
                        var fe = ve + y;
                        if (!(fe === -1 || fe >= te.length)) {
                          var me = te[fe];
                          (Tt === "startX" && me >= le) ||
                            (Tt === "endX" && me <= ae) ||
                            this.setState(ft({}, Tt, me), function () {
                              zt.props.onChange(
                                zt.getIndex({
                                  startX: zt.state.startX,
                                  endX: zt.state.endX,
                                }),
                              );
                            });
                        }
                      }
                    },
                  },
                  {
                    key: "renderBackground",
                    value: function () {
                      var y = this.props,
                        Tt = y.x,
                        zt = y.y,
                        Xt = y.width,
                        te = y.height,
                        ae = y.fill,
                        le = y.stroke;
                      return s.createElement("rect", {
                        stroke: le,
                        fill: ae,
                        x: Tt,
                        y: zt,
                        width: Xt,
                        height: te,
                      });
                    },
                  },
                  {
                    key: "renderPanorama",
                    value: function () {
                      var y = this.props,
                        Tt = y.x,
                        zt = y.y,
                        Xt = y.width,
                        te = y.height,
                        ae = y.data,
                        le = y.children,
                        pe = y.padding,
                        ve = s.Children.only(le);
                      return ve
                        ? s.cloneElement(ve, {
                            x: Tt,
                            y: zt,
                            width: Xt,
                            height: te,
                            margin: pe,
                            compact: !0,
                            data: ae,
                          })
                        : null;
                    },
                  },
                  {
                    key: "renderTravellerLayer",
                    value: function (y, Tt) {
                      var zt,
                        Xt,
                        te = this,
                        ae = this.props,
                        le = ae.y,
                        pe = ae.travellerWidth,
                        ve = ae.height,
                        fe = ae.traveller,
                        me = ae.ariaLabel,
                        Ue = ae.data,
                        Me = ae.startIndex,
                        xe = ae.endIndex,
                        ue = Math.max(y, this.props.x),
                        ye = E(
                          E({}, (0, $.J9)(this.props, !1)),
                          {},
                          { x: ue, y: le, width: pe, height: ve },
                        ),
                        oe =
                          me ||
                          "Min value: "
                            .concat(
                              (zt = Ue[Me]) === null || zt === void 0
                                ? void 0
                                : zt.name,
                              ", Max value: ",
                            )
                            .concat(
                              (Xt = Ue[xe]) === null || Xt === void 0
                                ? void 0
                                : Xt.name,
                            );
                      return s.createElement(
                        L.W,
                        {
                          tabIndex: 0,
                          role: "slider",
                          "aria-label": oe,
                          "aria-valuenow": y,
                          className: "recharts-brush-traveller",
                          onMouseEnter: this.handleEnterSlideOrTraveller,
                          onMouseLeave: this.handleLeaveSlideOrTraveller,
                          onMouseDown: this.travellerDragStartHandlers[Tt],
                          onTouchStart: this.travellerDragStartHandlers[Tt],
                          onKeyDown: function (Ot) {
                            ["ArrowLeft", "ArrowRight"].includes(Ot.key) &&
                              (Ot.preventDefault(),
                              Ot.stopPropagation(),
                              te.handleTravellerMoveKeyboard(
                                Ot.key === "ArrowRight" ? 1 : -1,
                                Tt,
                              ));
                          },
                          onFocus: function () {
                            te.setState({ isTravellerFocused: !0 });
                          },
                          onBlur: function () {
                            te.setState({ isTravellerFocused: !1 });
                          },
                          style: { cursor: "col-resize" },
                        },
                        a.renderTraveller(fe, ye),
                      );
                    },
                  },
                  {
                    key: "renderSlide",
                    value: function (y, Tt) {
                      var zt = this.props,
                        Xt = zt.y,
                        te = zt.height,
                        ae = zt.stroke,
                        le = zt.travellerWidth,
                        pe = Math.min(y, Tt) + le,
                        ve = Math.max(Math.abs(Tt - y) - le, 0);
                      return s.createElement("rect", {
                        className: "recharts-brush-slide",
                        onMouseEnter: this.handleEnterSlideOrTraveller,
                        onMouseLeave: this.handleLeaveSlideOrTraveller,
                        onMouseDown: this.handleSlideDragStart,
                        onTouchStart: this.handleSlideDragStart,
                        style: { cursor: "move" },
                        stroke: "none",
                        fill: ae,
                        fillOpacity: 0.2,
                        x: pe,
                        y: Xt,
                        width: ve,
                        height: te,
                      });
                    },
                  },
                  {
                    key: "renderText",
                    value: function () {
                      var y = this.props,
                        Tt = y.startIndex,
                        zt = y.endIndex,
                        Xt = y.y,
                        te = y.height,
                        ae = y.travellerWidth,
                        le = y.stroke,
                        pe = this.state,
                        ve = pe.startX,
                        fe = pe.endX,
                        me = 5,
                        Ue = { pointerEvents: "none", fill: le };
                      return s.createElement(
                        L.W,
                        { className: "recharts-brush-texts" },
                        s.createElement(
                          M.E,
                          S(
                            {
                              textAnchor: "end",
                              verticalAnchor: "middle",
                              x: Math.min(ve, fe) - me,
                              y: Xt + te / 2,
                            },
                            Ue,
                          ),
                          this.getTextOfTick(Tt),
                        ),
                        s.createElement(
                          M.E,
                          S(
                            {
                              textAnchor: "start",
                              verticalAnchor: "middle",
                              x: Math.max(ve, fe) + ae + me,
                              y: Xt + te / 2,
                            },
                            Ue,
                          ),
                          this.getTextOfTick(zt),
                        ),
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var y = this.props,
                        Tt = y.data,
                        zt = y.className,
                        Xt = y.children,
                        te = y.x,
                        ae = y.y,
                        le = y.width,
                        pe = y.height,
                        ve = y.alwaysShowText,
                        fe = this.state,
                        me = fe.startX,
                        Ue = fe.endX,
                        Me = fe.isTextActive,
                        xe = fe.isSlideMoving,
                        ue = fe.isTravellerMoving,
                        ye = fe.isTravellerFocused;
                      if (
                        !Tt ||
                        !Tt.length ||
                        !(0, v.Et)(te) ||
                        !(0, v.Et)(ae) ||
                        !(0, v.Et)(le) ||
                        !(0, v.Et)(pe) ||
                        le <= 0 ||
                        pe <= 0
                      )
                        return null;
                      var oe = (0, V.A)("recharts-brush", zt),
                        se = s.Children.count(Xt) === 1,
                        Ot = P("userSelect", "none");
                      return s.createElement(
                        L.W,
                        {
                          className: oe,
                          onMouseLeave: this.handleLeaveWrapper,
                          onTouchMove: this.handleTouchMove,
                          style: Ot,
                        },
                        this.renderBackground(),
                        se && this.renderPanorama(),
                        this.renderSlide(me, Ue),
                        this.renderTravellerLayer(me, "startX"),
                        this.renderTravellerLayer(Ue, "endX"),
                        (Me || xe || ue || ye || ve) && this.renderText(),
                      );
                    },
                  },
                ],
                [
                  {
                    key: "renderDefaultTraveller",
                    value: function (y) {
                      var Tt = y.x,
                        zt = y.y,
                        Xt = y.width,
                        te = y.height,
                        ae = y.stroke,
                        le = Math.floor(zt + te / 2) - 1;
                      return s.createElement(
                        s.Fragment,
                        null,
                        s.createElement("rect", {
                          x: Tt,
                          y: zt,
                          width: Xt,
                          height: te,
                          fill: ae,
                          stroke: "none",
                        }),
                        s.createElement("line", {
                          x1: Tt + 1,
                          y1: le,
                          x2: Tt + Xt - 1,
                          y2: le,
                          fill: "none",
                          stroke: "#fff",
                        }),
                        s.createElement("line", {
                          x1: Tt + 1,
                          y1: le + 2,
                          x2: Tt + Xt - 1,
                          y2: le + 2,
                          fill: "none",
                          stroke: "#fff",
                        }),
                      );
                    },
                  },
                  {
                    key: "renderTraveller",
                    value: function (y, Tt) {
                      var zt;
                      return (
                        s.isValidElement(y)
                          ? (zt = s.cloneElement(y, Tt))
                          : U()(y)
                            ? (zt = y(Tt))
                            : (zt = a.renderDefaultTraveller(Tt)),
                        zt
                      );
                    },
                  },
                  {
                    key: "getDerivedStateFromProps",
                    value: function (y, Tt) {
                      var zt = y.data,
                        Xt = y.width,
                        te = y.x,
                        ae = y.travellerWidth,
                        le = y.updateId,
                        pe = y.startIndex,
                        ve = y.endIndex;
                      if (zt !== Tt.prevData || le !== Tt.prevUpdateId)
                        return E(
                          {
                            prevData: zt,
                            prevTravellerWidth: ae,
                            prevUpdateId: le,
                            prevX: te,
                            prevWidth: Xt,
                          },
                          zt && zt.length
                            ? Vt({
                                data: zt,
                                width: Xt,
                                x: te,
                                travellerWidth: ae,
                                startIndex: pe,
                                endIndex: ve,
                              })
                            : { scale: null, scaleValues: null },
                        );
                      if (
                        Tt.scale &&
                        (Xt !== Tt.prevWidth ||
                          te !== Tt.prevX ||
                          ae !== Tt.prevTravellerWidth)
                      ) {
                        Tt.scale.range([te, te + Xt - ae]);
                        var fe = Tt.scale.domain().map(function (me) {
                          return Tt.scale(me);
                        });
                        return {
                          prevData: zt,
                          prevTravellerWidth: ae,
                          prevUpdateId: le,
                          prevX: te,
                          prevWidth: Xt,
                          startX: Tt.scale(y.startIndex),
                          endX: Tt.scale(y.endIndex),
                          scaleValues: fe,
                        };
                      }
                      return null;
                    },
                  },
                  {
                    key: "getIndexInRange",
                    value: function (y, Tt) {
                      for (
                        var zt = y.length, Xt = 0, te = zt - 1;
                        te - Xt > 1;
                      ) {
                        var ae = Math.floor((Xt + te) / 2);
                        y[ae] > Tt ? (te = ae) : (Xt = ae);
                      }
                      return Tt >= y[te] ? te : Xt;
                    },
                  },
                ],
              )
            );
          })(s.PureComponent);
        ft(l, "displayName", "Brush"),
          ft(l, "defaultProps", {
            height: 40,
            travellerWidth: 5,
            gap: 1,
            fill: "#fff",
            stroke: "#666",
            padding: { top: 1, right: 1, bottom: 1, left: 1 },
            leaveTimeOut: 1e3,
            alwaysShowText: !1,
          });
        var h = n(15654),
          O = n(11766),
          f = n(25068),
          D = n(83349),
          tt = n(12260),
          Et = n(27664);
        function Wt() {
          return (
            (Wt = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var A = arguments[a];
                    for (var y in A)
                      Object.prototype.hasOwnProperty.call(A, y) &&
                        (u[y] = A[y]);
                  }
                  return u;
                }),
            Wt.apply(this, arguments)
          );
        }
        function Ft(u) {
          "@babel/helpers - typeof";
          return (
            (Ft =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            Ft(u)
          );
        }
        function ie(u, a) {
          var A = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(u);
            a &&
              (y = y.filter(function (Tt) {
                return Object.getOwnPropertyDescriptor(u, Tt).enumerable;
              })),
              A.push.apply(A, y);
          }
          return A;
        }
        function k(u) {
          for (var a = 1; a < arguments.length; a++) {
            var A = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? ie(Object(A), !0).forEach(function (y) {
                  At(u, y, A[y]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(A),
                  )
                : ie(Object(A)).forEach(function (y) {
                    Object.defineProperty(
                      u,
                      y,
                      Object.getOwnPropertyDescriptor(A, y),
                    );
                  });
          }
          return u;
        }
        function G(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function j(u, a) {
          for (var A = 0; A < a.length; A++) {
            var y = a[A];
            (y.enumerable = y.enumerable || !1),
              (y.configurable = !0),
              "value" in y && (y.writable = !0),
              Object.defineProperty(u, Zt(y.key), y);
          }
        }
        function yt(u, a, A) {
          return (
            a && j(u.prototype, a),
            A && j(u, A),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function mt(u, a, A) {
          return (
            (a = N(a)),
            kt(
              u,
              qt()
                ? Reflect.construct(a, A || [], N(u).constructor)
                : a.apply(u, A),
            )
          );
        }
        function kt(u, a) {
          if (a && (Ft(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Ht(u);
        }
        function Ht(u) {
          if (u === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return u;
        }
        function qt() {
          try {
            var u = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (qt = function () {
            return !!u;
          })();
        }
        function N(u) {
          return (
            (N = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (A) {
                  return A.__proto__ || Object.getPrototypeOf(A);
                }),
            N(u)
          );
        }
        function X(u, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (u.prototype = Object.create(a && a.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            a && _t(u, a);
        }
        function _t(u, a) {
          return (
            (_t = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (y, Tt) {
                  return (y.__proto__ = Tt), y;
                }),
            _t(u, a)
          );
        }
        function At(u, a, A) {
          return (
            (a = Zt(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = A),
            u
          );
        }
        function Zt(u) {
          var a = Be(u, "string");
          return Ft(a) == "symbol" ? a : a + "";
        }
        function Be(u, a) {
          if (Ft(u) != "object" || !u) return u;
          var A = u[Symbol.toPrimitive];
          if (A !== void 0) {
            var y = A.call(u, a || "default");
            if (Ft(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var Le = function (a) {
            var A = a.x,
              y = a.y,
              Tt = a.xAxis,
              zt = a.yAxis,
              Xt = (0, tt.P2)({ x: Tt.scale, y: zt.scale }),
              te = Xt.apply({ x: A, y }, { bandAware: !0 });
            return (0, D.R)(a, "discard") && !Xt.isInRange(te) ? null : te;
          },
          Pe = (function (u) {
            function a() {
              return G(this, a), mt(this, a, arguments);
            }
            return (
              X(a, u),
              yt(a, [
                {
                  key: "render",
                  value: function () {
                    var y = this.props,
                      Tt = y.x,
                      zt = y.y,
                      Xt = y.r,
                      te = y.alwaysShow,
                      ae = y.clipPathId,
                      le = (0, v.vh)(Tt),
                      pe = (0, v.vh)(zt);
                    if (
                      ((0, Et.R)(
                        te === void 0,
                        'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                      ),
                      !le || !pe)
                    )
                      return null;
                    var ve = Le(this.props);
                    if (!ve) return null;
                    var fe = ve.x,
                      me = ve.y,
                      Ue = this.props,
                      Me = Ue.shape,
                      xe = Ue.className,
                      ue = (0, D.R)(this.props, "hidden")
                        ? "url(#".concat(ae, ")")
                        : void 0,
                      ye = k(
                        k({ clipPath: ue }, (0, $.J9)(this.props, !0)),
                        {},
                        { cx: fe, cy: me },
                      );
                    return s.createElement(
                      L.W,
                      { className: (0, V.A)("recharts-reference-dot", xe) },
                      a.renderDot(Me, ye),
                      f.J.renderCallByParent(this.props, {
                        x: fe - Xt,
                        y: me - Xt,
                        width: 2 * Xt,
                        height: 2 * Xt,
                      }),
                    );
                  },
                },
              ])
            );
          })(s.Component);
        At(Pe, "displayName", "ReferenceDot"),
          At(Pe, "defaultProps", {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            r: 10,
            fill: "#fff",
            stroke: "#ccc",
            fillOpacity: 1,
            strokeWidth: 1,
          }),
          At(Pe, "renderDot", function (u, a) {
            var A;
            return (
              s.isValidElement(u)
                ? (A = s.cloneElement(u, a))
                : U()(u)
                  ? (A = u(a))
                  : (A = s.createElement(
                      wt.c,
                      Wt({}, a, {
                        cx: a.cx,
                        cy: a.cy,
                        className: "recharts-reference-dot-dot",
                      }),
                    )),
              A
            );
          });
        var Ce = n(59136);
        function We() {
          return (
            (We = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var A = arguments[a];
                    for (var y in A)
                      Object.prototype.hasOwnProperty.call(A, y) &&
                        (u[y] = A[y]);
                  }
                  return u;
                }),
            We.apply(this, arguments)
          );
        }
        function je(u) {
          "@babel/helpers - typeof";
          return (
            (je =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            je(u)
          );
        }
        function Ye(u, a) {
          var A = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(u);
            a &&
              (y = y.filter(function (Tt) {
                return Object.getOwnPropertyDescriptor(u, Tt).enumerable;
              })),
              A.push.apply(A, y);
          }
          return A;
        }
        function qe(u) {
          for (var a = 1; a < arguments.length; a++) {
            var A = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? Ye(Object(A), !0).forEach(function (y) {
                  Rn(u, y, A[y]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(A),
                  )
                : Ye(Object(A)).forEach(function (y) {
                    Object.defineProperty(
                      u,
                      y,
                      Object.getOwnPropertyDescriptor(A, y),
                    );
                  });
          }
          return u;
        }
        function on(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function un(u, a) {
          for (var A = 0; A < a.length; A++) {
            var y = a[A];
            (y.enumerable = y.enumerable || !1),
              (y.configurable = !0),
              "value" in y && (y.writable = !0),
              Object.defineProperty(u, Zn(y.key), y);
          }
        }
        function tn(u, a, A) {
          return (
            a && un(u.prototype, a),
            A && un(u, A),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function bn(u, a, A) {
          return (
            (a = Wn(a)),
            Mn(
              u,
              jn()
                ? Reflect.construct(a, A || [], Wn(u).constructor)
                : a.apply(u, A),
            )
          );
        }
        function Mn(u, a) {
          if (a && (je(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return _n(u);
        }
        function _n(u) {
          if (u === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return u;
        }
        function jn() {
          try {
            var u = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (jn = function () {
            return !!u;
          })();
        }
        function Wn(u) {
          return (
            (Wn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (A) {
                  return A.__proto__ || Object.getPrototypeOf(A);
                }),
            Wn(u)
          );
        }
        function Nn(u, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (u.prototype = Object.create(a && a.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            a && In(u, a);
        }
        function In(u, a) {
          return (
            (In = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (y, Tt) {
                  return (y.__proto__ = Tt), y;
                }),
            In(u, a)
          );
        }
        function Rn(u, a, A) {
          return (
            (a = Zn(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = A),
            u
          );
        }
        function Zn(u) {
          var a = fr(u, "string");
          return je(a) == "symbol" ? a : a + "";
        }
        function fr(u, a) {
          if (je(u) != "object" || !u) return u;
          var A = u[Symbol.toPrimitive];
          if (A !== void 0) {
            var y = A.call(u, a || "default");
            if (je(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var dr = function (a, A, y, Tt, zt) {
            var Xt = zt.x1,
              te = zt.x2,
              ae = zt.y1,
              le = zt.y2,
              pe = zt.xAxis,
              ve = zt.yAxis;
            if (!pe || !ve) return null;
            var fe = (0, tt.P2)({ x: pe.scale, y: ve.scale }),
              me = {
                x: a ? fe.x.apply(Xt, { position: "start" }) : fe.x.rangeMin,
                y: y ? fe.y.apply(ae, { position: "start" }) : fe.y.rangeMin,
              },
              Ue = {
                x: A ? fe.x.apply(te, { position: "end" }) : fe.x.rangeMax,
                y: Tt ? fe.y.apply(le, { position: "end" }) : fe.y.rangeMax,
              };
            return (0, D.R)(zt, "discard") &&
              (!fe.isInRange(me) || !fe.isInRange(Ue))
              ? null
              : (0, tt.sl)(me, Ue);
          },
          hr = (function (u) {
            function a() {
              return on(this, a), bn(this, a, arguments);
            }
            return (
              Nn(a, u),
              tn(a, [
                {
                  key: "render",
                  value: function () {
                    var y = this.props,
                      Tt = y.x1,
                      zt = y.x2,
                      Xt = y.y1,
                      te = y.y2,
                      ae = y.className,
                      le = y.alwaysShow,
                      pe = y.clipPathId;
                    (0, Et.R)(
                      le === void 0,
                      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.',
                    );
                    var ve = (0, v.vh)(Tt),
                      fe = (0, v.vh)(zt),
                      me = (0, v.vh)(Xt),
                      Ue = (0, v.vh)(te),
                      Me = this.props.shape;
                    if (!ve && !fe && !me && !Ue && !Me) return null;
                    var xe = dr(ve, fe, me, Ue, this.props);
                    if (!xe && !Me) return null;
                    var ue = (0, D.R)(this.props, "hidden")
                      ? "url(#".concat(pe, ")")
                      : void 0;
                    return s.createElement(
                      L.W,
                      { className: (0, V.A)("recharts-reference-area", ae) },
                      a.renderRect(
                        Me,
                        qe(qe({ clipPath: ue }, (0, $.J9)(this.props, !0)), xe),
                      ),
                      f.J.renderCallByParent(this.props, xe),
                    );
                  },
                },
              ])
            );
          })(s.Component);
        Rn(hr, "displayName", "ReferenceArea"),
          Rn(hr, "defaultProps", {
            isFront: !1,
            ifOverflow: "discard",
            xAxisId: 0,
            yAxisId: 0,
            r: 10,
            fill: "#ccc",
            fillOpacity: 0.5,
            stroke: "none",
            strokeWidth: 1,
          }),
          Rn(hr, "renderRect", function (u, a) {
            var A;
            return (
              s.isValidElement(u)
                ? (A = s.cloneElement(u, a))
                : U()(u)
                  ? (A = u(a))
                  : (A = s.createElement(
                      Mt.M,
                      We({}, a, { className: "recharts-reference-area-rect" }),
                    )),
              A
            );
          });
        function br(u) {
          return Br(u) || er(u) || Fn(u) || Jr();
        }
        function Jr() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Fn(u, a) {
          if (u) {
            if (typeof u == "string") return $n(u, a);
            var A = Object.prototype.toString.call(u).slice(8, -1);
            if (
              (A === "Object" && u.constructor && (A = u.constructor.name),
              A === "Map" || A === "Set")
            )
              return Array.from(u);
            if (
              A === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)
            )
              return $n(u, a);
          }
        }
        function er(u) {
          if (
            (typeof Symbol < "u" && u[Symbol.iterator] != null) ||
            u["@@iterator"] != null
          )
            return Array.from(u);
        }
        function Br(u) {
          if (Array.isArray(u)) return $n(u);
        }
        function $n(u, a) {
          (a == null || a > u.length) && (a = u.length);
          for (var A = 0, y = new Array(a); A < a; A++) y[A] = u[A];
          return y;
        }
        var zn = function (a, A, y, Tt, zt) {
            var Xt = (0, $.aS)(a, Ce.e),
              te = (0, $.aS)(a, Pe),
              ae = [].concat(br(Xt), br(te)),
              le = (0, $.aS)(a, hr),
              pe = "".concat(Tt, "Id"),
              ve = Tt[0],
              fe = A;
            if (
              (ae.length &&
                (fe = ae.reduce(function (Me, xe) {
                  if (
                    xe.props[pe] === y &&
                    (0, D.R)(xe.props, "extendDomain") &&
                    (0, v.Et)(xe.props[ve])
                  ) {
                    var ue = xe.props[ve];
                    return [Math.min(Me[0], ue), Math.max(Me[1], ue)];
                  }
                  return Me;
                }, fe)),
              le.length)
            ) {
              var me = "".concat(ve, "1"),
                Ue = "".concat(ve, "2");
              fe = le.reduce(function (Me, xe) {
                if (
                  xe.props[pe] === y &&
                  (0, D.R)(xe.props, "extendDomain") &&
                  (0, v.Et)(xe.props[me]) &&
                  (0, v.Et)(xe.props[Ue])
                ) {
                  var ue = xe.props[me],
                    ye = xe.props[Ue];
                  return [Math.min(Me[0], ue, ye), Math.max(Me[1], ue, ye)];
                }
                return Me;
              }, fe);
            }
            return (
              zt &&
                zt.length &&
                (fe = zt.reduce(function (Me, xe) {
                  return (0, v.Et)(xe)
                    ? [Math.min(Me[0], xe), Math.max(Me[1], xe)]
                    : Me;
                }, fe)),
              fe
            );
          },
          Kn = n(90134),
          Tr = n(80103),
          nr = n(29570),
          xr = n.n(nr),
          rr = new (xr())(),
          dn = "recharts.syncMouseEvents",
          Ln = n(43998);
        function kn(u) {
          "@babel/helpers - typeof";
          return (
            (kn =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            kn(u)
          );
        }
        function Qn(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function Nr(u, a) {
          for (var A = 0; A < a.length; A++) {
            var y = a[A];
            (y.enumerable = y.enumerable || !1),
              (y.configurable = !0),
              "value" in y && (y.writable = !0),
              Object.defineProperty(u, Ar(y.key), y);
          }
        }
        function pi(u, a, A) {
          return (
            a && Nr(u.prototype, a),
            A && Nr(u, A),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function Or(u, a, A) {
          return (
            (a = Ar(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = A),
            u
          );
        }
        function Ar(u) {
          var a = Zr(u, "string");
          return kn(a) == "symbol" ? a : a + "";
        }
        function Zr(u, a) {
          if (kn(u) != "object" || !u) return u;
          var A = u[Symbol.toPrimitive];
          if (A !== void 0) {
            var y = A.call(u, a || "default");
            if (kn(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var wn = (function () {
          function u() {
            Qn(this, u),
              Or(this, "activeIndex", 0),
              Or(this, "coordinateList", []),
              Or(this, "layout", "horizontal");
          }
          return pi(u, [
            {
              key: "setDetails",
              value: function (A) {
                var y,
                  Tt = A.coordinateList,
                  zt = Tt === void 0 ? null : Tt,
                  Xt = A.container,
                  te = Xt === void 0 ? null : Xt,
                  ae = A.layout,
                  le = ae === void 0 ? null : ae,
                  pe = A.offset,
                  ve = pe === void 0 ? null : pe,
                  fe = A.mouseHandlerCallback,
                  me = fe === void 0 ? null : fe;
                (this.coordinateList =
                  (y = zt ?? this.coordinateList) !== null && y !== void 0
                    ? y
                    : []),
                  (this.container = te ?? this.container),
                  (this.layout = le ?? this.layout),
                  (this.offset = ve ?? this.offset),
                  (this.mouseHandlerCallback = me ?? this.mouseHandlerCallback),
                  (this.activeIndex = Math.min(
                    Math.max(this.activeIndex, 0),
                    this.coordinateList.length - 1,
                  ));
              },
            },
            {
              key: "focus",
              value: function () {
                this.spoofMouse();
              },
            },
            {
              key: "keyboardEvent",
              value: function (A) {
                if (this.coordinateList.length !== 0)
                  switch (A.key) {
                    case "ArrowRight": {
                      if (this.layout !== "horizontal") return;
                      (this.activeIndex = Math.min(
                        this.activeIndex + 1,
                        this.coordinateList.length - 1,
                      )),
                        this.spoofMouse();
                      break;
                    }
                    case "ArrowLeft": {
                      if (this.layout !== "horizontal") return;
                      (this.activeIndex = Math.max(this.activeIndex - 1, 0)),
                        this.spoofMouse();
                      break;
                    }
                    default:
                      break;
                  }
              },
            },
            {
              key: "setIndex",
              value: function (A) {
                this.activeIndex = A;
              },
            },
            {
              key: "spoofMouse",
              value: function () {
                var A, y;
                if (
                  this.layout === "horizontal" &&
                  this.coordinateList.length !== 0
                ) {
                  var Tt = this.container.getBoundingClientRect(),
                    zt = Tt.x,
                    Xt = Tt.y,
                    te = Tt.height,
                    ae = this.coordinateList[this.activeIndex].coordinate,
                    le =
                      ((A = window) === null || A === void 0
                        ? void 0
                        : A.scrollX) || 0,
                    pe =
                      ((y = window) === null || y === void 0
                        ? void 0
                        : y.scrollY) || 0,
                    ve = zt + ae + le,
                    fe = Xt + this.offset.top + te / 2 + pe;
                  this.mouseHandlerCallback({ pageX: ve, pageY: fe });
                }
              },
            },
          ]);
        })();
        function pr(u, a, A) {
          if (A === "number" && a === !0 && Array.isArray(u)) {
            var y = u?.[0],
              Tt = u?.[1];
            if (y && Tt && (0, v.Et)(y) && (0, v.Et)(Tt)) return !0;
          }
          return !1;
        }
        var Pr = n(53818),
          ir = n(33487);
        function Lr(u) {
          "@babel/helpers - typeof";
          return (
            (Lr =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            Lr(u)
          );
        }
        var ar = ["x", "y", "top", "left", "width", "height", "className"];
        function vi() {
          return (
            (vi = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var A = arguments[a];
                    for (var y in A)
                      Object.prototype.hasOwnProperty.call(A, y) &&
                        (u[y] = A[y]);
                  }
                  return u;
                }),
            vi.apply(this, arguments)
          );
        }
        function Ur(u, a) {
          var A = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(u);
            a &&
              (y = y.filter(function (Tt) {
                return Object.getOwnPropertyDescriptor(u, Tt).enumerable;
              })),
              A.push.apply(A, y);
          }
          return A;
        }
        function Ii(u) {
          for (var a = 1; a < arguments.length; a++) {
            var A = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? Ur(Object(A), !0).forEach(function (y) {
                  Mr(u, y, A[y]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(A),
                  )
                : Ur(Object(A)).forEach(function (y) {
                    Object.defineProperty(
                      u,
                      y,
                      Object.getOwnPropertyDescriptor(A, y),
                    );
                  });
          }
          return u;
        }
        function Mr(u, a, A) {
          return (
            (a = Ri(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = A),
            u
          );
        }
        function Ri(u) {
          var a = Qr(u, "string");
          return Lr(a) == "symbol" ? a : a + "";
        }
        function Qr(u, a) {
          if (Lr(u) != "object" || !u) return u;
          var A = u[Symbol.toPrimitive];
          if (A !== void 0) {
            var y = A.call(u, a || "default");
            if (Lr(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        function Bi(u, a) {
          if (u == null) return {};
          var A = Cr(u, a),
            y,
            Tt;
          if (Object.getOwnPropertySymbols) {
            var zt = Object.getOwnPropertySymbols(u);
            for (Tt = 0; Tt < zt.length; Tt++)
              (y = zt[Tt]),
                !(a.indexOf(y) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(u, y) &&
                  (A[y] = u[y]);
          }
          return A;
        }
        function Cr(u, a) {
          if (u == null) return {};
          var A = {};
          for (var y in u)
            if (Object.prototype.hasOwnProperty.call(u, y)) {
              if (a.indexOf(y) >= 0) continue;
              A[y] = u[y];
            }
          return A;
        }
        var yi = function (a, A, y, Tt, zt, Xt) {
            return "M"
              .concat(a, ",")
              .concat(zt, "v")
              .concat(Tt, "M")
              .concat(Xt, ",")
              .concat(A, "h")
              .concat(y);
          },
          Dr = function (a) {
            var A = a.x,
              y = A === void 0 ? 0 : A,
              Tt = a.y,
              zt = Tt === void 0 ? 0 : Tt,
              Xt = a.top,
              te = Xt === void 0 ? 0 : Xt,
              ae = a.left,
              le = ae === void 0 ? 0 : ae,
              pe = a.width,
              ve = pe === void 0 ? 0 : pe,
              fe = a.height,
              me = fe === void 0 ? 0 : fe,
              Ue = a.className,
              Me = Bi(a, ar),
              xe = Ii(
                { x: y, y: zt, top: te, left: le, width: ve, height: me },
                Me,
              );
            return !(0, v.Et)(y) ||
              !(0, v.Et)(zt) ||
              !(0, v.Et)(ve) ||
              !(0, v.Et)(me) ||
              !(0, v.Et)(te) ||
              !(0, v.Et)(le)
              ? null
              : s.createElement(
                  "path",
                  vi({}, (0, $.J9)(xe, !0), {
                    className: (0, V.A)("recharts-cross", Ue),
                    d: yi(y, zt, ve, me, te, le),
                  }),
                );
          };
        function Xn(u, a, A, y) {
          var Tt = y / 2;
          return {
            stroke: "none",
            fill: "#ccc",
            x: u === "horizontal" ? a.x - Tt : A.left + 0.5,
            y: u === "horizontal" ? A.top + 0.5 : a.y - Tt,
            width: u === "horizontal" ? y : A.width - 1,
            height: u === "horizontal" ? A.height - 1 : y,
          };
        }
        function vr(u) {
          var a = u.cx,
            A = u.cy,
            y = u.radius,
            Tt = u.startAngle,
            zt = u.endAngle,
            Xt = (0, Kn.IZ)(a, A, y, Tt),
            te = (0, Kn.IZ)(a, A, y, zt);
          return {
            points: [Xt, te],
            cx: a,
            cy: A,
            radius: y,
            startAngle: Tt,
            endAngle: zt,
          };
        }
        var Ni = n(24588);
        function or(u, a, A) {
          var y, Tt, zt, Xt;
          if (u === "horizontal")
            (y = a.x), (zt = y), (Tt = A.top), (Xt = A.top + A.height);
          else if (u === "vertical")
            (Tt = a.y), (Xt = Tt), (y = A.left), (zt = A.left + A.width);
          else if (a.cx != null && a.cy != null)
            if (u === "centric") {
              var te = a.cx,
                ae = a.cy,
                le = a.innerRadius,
                pe = a.outerRadius,
                ve = a.angle,
                fe = (0, Kn.IZ)(te, ae, le, ve),
                me = (0, Kn.IZ)(te, ae, pe, ve);
              (y = fe.x), (Tt = fe.y), (zt = me.x), (Xt = me.y);
            } else return vr(a);
          return [
            { x: y, y: Tt },
            { x: zt, y: Xt },
          ];
        }
        function ur(u) {
          "@babel/helpers - typeof";
          return (
            (ur =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            ur(u)
          );
        }
        function Er(u, a) {
          var A = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(u);
            a &&
              (y = y.filter(function (Tt) {
                return Object.getOwnPropertyDescriptor(u, Tt).enumerable;
              })),
              A.push.apply(A, y);
          }
          return A;
        }
        function Wr(u) {
          for (var a = 1; a < arguments.length; a++) {
            var A = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? Er(Object(A), !0).forEach(function (y) {
                  wi(u, y, A[y]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(A),
                  )
                : Er(Object(A)).forEach(function (y) {
                    Object.defineProperty(
                      u,
                      y,
                      Object.getOwnPropertyDescriptor(A, y),
                    );
                  });
          }
          return u;
        }
        function wi(u, a, A) {
          return (
            (a = lr(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = A),
            u
          );
        }
        function lr(u) {
          var a = Si(u, "string");
          return ur(a) == "symbol" ? a : a + "";
        }
        function Si(u, a) {
          if (ur(u) != "object" || !u) return u;
          var A = u[Symbol.toPrimitive];
          if (A !== void 0) {
            var y = A.call(u, a || "default");
            if (ur(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        function qr(u) {
          var a,
            A,
            y = u.element,
            Tt = u.tooltipEventType,
            zt = u.isActive,
            Xt = u.activeCoordinate,
            te = u.activePayload,
            ae = u.offset,
            le = u.activeTooltipIndex,
            pe = u.tooltipAxisBandSize,
            ve = u.layout,
            fe = u.chartName,
            me =
              (a = y.props.cursor) !== null && a !== void 0
                ? a
                : (A = y.type.defaultProps) === null || A === void 0
                  ? void 0
                  : A.cursor;
          if (
            !y ||
            !me ||
            !zt ||
            !Xt ||
            (fe !== "ScatterChart" && Tt !== "axis")
          )
            return null;
          var Ue,
            Me = ir.I;
          if (fe === "ScatterChart") (Ue = Xt), (Me = Dr);
          else if (fe === "BarChart") (Ue = Xn(ve, Xt, ae, pe)), (Me = Mt.M);
          else if (ve === "radial") {
            var xe = vr(Xt),
              ue = xe.cx,
              ye = xe.cy,
              oe = xe.radius,
              se = xe.startAngle,
              Ot = xe.endAngle;
            (Ue = {
              cx: ue,
              cy: ye,
              startAngle: se,
              endAngle: Ot,
              innerRadius: oe,
              outerRadius: oe,
            }),
              (Me = Ni.h);
          } else (Ue = { points: or(ve, Xt, ae) }), (Me = ir.I);
          var jt = Wr(
            Wr(
              Wr(Wr({ stroke: "#ccc", pointerEvents: "none" }, ae), Ue),
              (0, $.J9)(me, !1),
            ),
            {},
            {
              payload: te,
              payloadIndex: le,
              className: (0, V.A)("recharts-tooltip-cursor", me.className),
            },
          );
          return (0, s.isValidElement)(me)
            ? (0, s.cloneElement)(me, jt)
            : (0, s.createElement)(Me, jt);
        }
        var ti = n(7351),
          Li = ["item"],
          ei = [
            "children",
            "className",
            "width",
            "height",
            "style",
            "compact",
            "title",
            "desc",
          ];
        function sr(u) {
          "@babel/helpers - typeof";
          return (
            (sr =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      typeof Symbol == "function" &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  }),
            sr(u)
          );
        }
        function kr() {
          return (
            (kr = Object.assign
              ? Object.assign.bind()
              : function (u) {
                  for (var a = 1; a < arguments.length; a++) {
                    var A = arguments[a];
                    for (var y in A)
                      Object.prototype.hasOwnProperty.call(A, y) &&
                        (u[y] = A[y]);
                  }
                  return u;
                }),
            kr.apply(this, arguments)
          );
        }
        function Ti(u, a) {
          return st(u) || W(u, a) || Re(u, a) || T();
        }
        function T() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function W(u, a) {
          var A =
            u == null
              ? null
              : (typeof Symbol < "u" && u[Symbol.iterator]) || u["@@iterator"];
          if (A != null) {
            var y,
              Tt,
              zt,
              Xt,
              te = [],
              ae = !0,
              le = !1;
            try {
              if (((zt = (A = A.call(u)).next), a === 0)) {
                if (Object(A) !== A) return;
                ae = !1;
              } else
                for (
                  ;
                  !(ae = (y = zt.call(A)).done) &&
                  (te.push(y.value), te.length !== a);
                  ae = !0
                );
            } catch (pe) {
              (le = !0), (Tt = pe);
            } finally {
              try {
                if (
                  !ae &&
                  A.return != null &&
                  ((Xt = A.return()), Object(Xt) !== Xt)
                )
                  return;
              } finally {
                if (le) throw Tt;
              }
            }
            return te;
          }
        }
        function st(u) {
          if (Array.isArray(u)) return u;
        }
        function St(u, a) {
          if (u == null) return {};
          var A = Bt(u, a),
            y,
            Tt;
          if (Object.getOwnPropertySymbols) {
            var zt = Object.getOwnPropertySymbols(u);
            for (Tt = 0; Tt < zt.length; Tt++)
              (y = zt[Tt]),
                !(a.indexOf(y) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(u, y) &&
                  (A[y] = u[y]);
          }
          return A;
        }
        function Bt(u, a) {
          if (u == null) return {};
          var A = {};
          for (var y in u)
            if (Object.prototype.hasOwnProperty.call(u, y)) {
              if (a.indexOf(y) >= 0) continue;
              A[y] = u[y];
            }
          return A;
        }
        function Jt(u, a) {
          if (!(u instanceof a))
            throw new TypeError("Cannot call a class as a function");
        }
        function re(u, a) {
          for (var A = 0; A < a.length; A++) {
            var y = a[A];
            (y.enumerable = y.enumerable || !1),
              (y.configurable = !0),
              "value" in y && (y.writable = !0),
              Object.defineProperty(u, yr(y.key), y);
          }
        }
        function he(u, a, A) {
          return (
            a && re(u.prototype, a),
            A && re(u, A),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            u
          );
        }
        function ge(u, a, A) {
          return (
            (a = nn(a)),
            Xe(
              u,
              en()
                ? Reflect.construct(a, A || [], nn(u).constructor)
                : a.apply(u, A),
            )
          );
        }
        function Xe(u, a) {
          if (a && (sr(a) === "object" || typeof a == "function")) return a;
          if (a !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return ze(u);
        }
        function ze(u) {
          if (u === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return u;
        }
        function en() {
          try {
            var u = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (en = function () {
            return !!u;
          })();
        }
        function nn(u) {
          return (
            (nn = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (A) {
                  return A.__proto__ || Object.getPrototypeOf(A);
                }),
            nn(u)
          );
        }
        function An(u, a) {
          if (typeof a != "function" && a !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (u.prototype = Object.create(a && a.prototype, {
            constructor: { value: u, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(u, "prototype", { writable: !1 }),
            a && Sn(u, a);
        }
        function Sn(u, a) {
          return (
            (Sn = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (y, Tt) {
                  return (y.__proto__ = Tt), y;
                }),
            Sn(u, a)
          );
        }
        function hn(u) {
          return En(u) || He(u) || Re(u) || Se();
        }
        function Se() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Re(u, a) {
          if (u) {
            if (typeof u == "string") return cn(u, a);
            var A = Object.prototype.toString.call(u).slice(8, -1);
            if (
              (A === "Object" && u.constructor && (A = u.constructor.name),
              A === "Map" || A === "Set")
            )
              return Array.from(u);
            if (
              A === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)
            )
              return cn(u, a);
          }
        }
        function He(u) {
          if (
            (typeof Symbol < "u" && u[Symbol.iterator] != null) ||
            u["@@iterator"] != null
          )
            return Array.from(u);
        }
        function En(u) {
          if (Array.isArray(u)) return cn(u);
        }
        function cn(u, a) {
          (a == null || a > u.length) && (a = u.length);
          for (var A = 0, y = new Array(a); A < a; A++) y[A] = u[A];
          return y;
        }
        function pn(u, a) {
          var A = Object.keys(u);
          if (Object.getOwnPropertySymbols) {
            var y = Object.getOwnPropertySymbols(u);
            a &&
              (y = y.filter(function (Tt) {
                return Object.getOwnPropertyDescriptor(u, Tt).enumerable;
              })),
              A.push.apply(A, y);
          }
          return A;
        }
        function $t(u) {
          for (var a = 1; a < arguments.length; a++) {
            var A = arguments[a] != null ? arguments[a] : {};
            a % 2
              ? pn(Object(A), !0).forEach(function (y) {
                  Ie(u, y, A[y]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    u,
                    Object.getOwnPropertyDescriptors(A),
                  )
                : pn(Object(A)).forEach(function (y) {
                    Object.defineProperty(
                      u,
                      y,
                      Object.getOwnPropertyDescriptor(A, y),
                    );
                  });
          }
          return u;
        }
        function Ie(u, a, A) {
          return (
            (a = yr(a)),
            a in u
              ? Object.defineProperty(u, a, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (u[a] = A),
            u
          );
        }
        function yr(u) {
          var a = Kr(u, "string");
          return sr(a) == "symbol" ? a : a + "";
        }
        function Kr(u, a) {
          if (sr(u) != "object" || !u) return u;
          var A = u[Symbol.toPrimitive];
          if (A !== void 0) {
            var y = A.call(u, a || "default");
            if (sr(y) != "object") return y;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (a === "string" ? String : Number)(u);
        }
        var ni = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] },
          ri = { width: "100%", height: "100%" },
          mi = { x: 0, y: 0 };
        function Fr(u) {
          return u;
        }
        var Mi = function (a, A) {
            return A === "horizontal"
              ? a.x
              : A === "vertical"
                ? a.y
                : A === "centric"
                  ? a.angle
                  : a.radius;
          },
          ii = function (a, A, y, Tt) {
            var zt = A.find(function (pe) {
              return pe && pe.index === y;
            });
            if (zt) {
              if (a === "horizontal") return { x: zt.coordinate, y: Tt.y };
              if (a === "vertical") return { x: Tt.x, y: zt.coordinate };
              if (a === "centric") {
                var Xt = zt.coordinate,
                  te = Tt.radius;
                return $t(
                  $t($t({}, Tt), (0, Kn.IZ)(Tt.cx, Tt.cy, te, Xt)),
                  {},
                  { angle: Xt, radius: te },
                );
              }
              var ae = zt.coordinate,
                le = Tt.angle;
              return $t(
                $t($t({}, Tt), (0, Kn.IZ)(Tt.cx, Tt.cy, ae, le)),
                {},
                { angle: le, radius: ae },
              );
            }
            return mi;
          },
          gi = function (a, A) {
            var y = A.graphicalItems,
              Tt = A.dataStartIndex,
              zt = A.dataEndIndex,
              Xt = (y ?? []).reduce(function (te, ae) {
                var le = ae.props.data;
                return le && le.length ? [].concat(hn(te), hn(le)) : te;
              }, []);
            return Xt.length > 0
              ? Xt
              : a && a.length && (0, v.Et)(Tt) && (0, v.Et)(zt)
                ? a.slice(Tt, zt + 1)
                : [];
          };
        function Ci(u) {
          return u === "number" ? [0, "auto"] : void 0;
        }
        var Cn = function (a, A, y, Tt) {
            var zt = a.graphicalItems,
              Xt = a.tooltipAxis,
              te = gi(A, a);
            return y < 0 || !zt || !zt.length || y >= te.length
              ? null
              : zt.reduce(function (ae, le) {
                  var pe,
                    ve =
                      (pe = le.props.data) !== null && pe !== void 0 ? pe : A;
                  ve &&
                    a.dataStartIndex + a.dataEndIndex !== 0 &&
                    a.dataEndIndex - a.dataStartIndex >= y &&
                    (ve = ve.slice(a.dataStartIndex, a.dataEndIndex + 1));
                  var fe;
                  if (Xt.dataKey && !Xt.allowDuplicatedCategory) {
                    var me = ve === void 0 ? te : ve;
                    fe = (0, v.eP)(me, Xt.dataKey, Tt);
                  } else fe = (ve && ve[y]) || te[y];
                  return fe ? [].concat(hn(ae), [(0, g.zb)(le, fe)]) : ae;
                }, []);
          },
          Ui = function (a, A, y, Tt) {
            var zt = Tt || { x: a.chartX, y: a.chartY },
              Xt = Mi(zt, y),
              te = a.orderedTooltipTicks,
              ae = a.tooltipAxis,
              le = a.tooltipTicks,
              pe = (0, g.gH)(Xt, te, le, ae);
            if (pe >= 0 && le) {
              var ve = le[pe] && le[pe].value,
                fe = Cn(a, A, pe, ve),
                me = ii(y, te, pe, zt);
              return {
                activeTooltipIndex: pe,
                activeLabel: ve,
                activePayload: fe,
                activeCoordinate: me,
              };
            }
            return null;
          },
          ta = function (a, A) {
            var y = A.axes,
              Tt = A.graphicalItems,
              zt = A.axisType,
              Xt = A.axisIdKey,
              te = A.stackGroups,
              ae = A.dataStartIndex,
              le = A.dataEndIndex,
              pe = a.layout,
              ve = a.children,
              fe = a.stackOffset,
              me = (0, g._L)(pe, zt);
            return y.reduce(function (Ue, Me) {
              var xe,
                ue =
                  Me.type.defaultProps !== void 0
                    ? $t($t({}, Me.type.defaultProps), Me.props)
                    : Me.props,
                ye = ue.type,
                oe = ue.dataKey,
                se = ue.allowDataOverflow,
                Ot = ue.allowDuplicatedCategory,
                jt = ue.scale,
                Gt = ue.ticks,
                ee = ue.includeHidden,
                ne = ue[Xt];
              if (Ue[ne]) return Ue;
              var Ee = gi(a.data, {
                  graphicalItems: Tt.filter(function (ke) {
                    var sn,
                      Bn =
                        Xt in ke.props
                          ? ke.props[Xt]
                          : (sn = ke.type.defaultProps) === null ||
                              sn === void 0
                            ? void 0
                            : sn[Xt];
                    return Bn === ne;
                  }),
                  dataStartIndex: ae,
                  dataEndIndex: le,
                }),
                we = Ee.length,
                Oe,
                Ke,
                Ne;
              pr(ue.domain, se, ye) &&
                ((Oe = (0, g.AQ)(ue.domain, null, se)),
                me &&
                  (ye === "number" || jt !== "auto") &&
                  (Ne = (0, g.Ay)(Ee, oe, "category")));
              var Te = Ci(ye);
              if (!Oe || Oe.length === 0) {
                var Fe,
                  $e = (Fe = ue.domain) !== null && Fe !== void 0 ? Fe : Te;
                if (oe) {
                  if (((Oe = (0, g.Ay)(Ee, oe, ye)), ye === "category" && me)) {
                    var Je = (0, v.CG)(Oe);
                    Ot && Je
                      ? ((Ke = Oe), (Oe = z()(0, we)))
                      : Ot ||
                        (Oe = (0, g.KC)($e, Oe, Me).reduce(function (ke, sn) {
                          return ke.indexOf(sn) >= 0
                            ? ke
                            : [].concat(hn(ke), [sn]);
                        }, []));
                  } else if (ye === "category")
                    Ot
                      ? (Oe = Oe.filter(function (ke) {
                          return ke !== "" && !K()(ke);
                        }))
                      : (Oe = (0, g.KC)($e, Oe, Me).reduce(function (ke, sn) {
                          return ke.indexOf(sn) >= 0 || sn === "" || K()(sn)
                            ? ke
                            : [].concat(hn(ke), [sn]);
                        }, []));
                  else if (ye === "number") {
                    var Ge = (0, g.A1)(
                      Ee,
                      Tt.filter(function (ke) {
                        var sn,
                          Bn,
                          Hn =
                            Xt in ke.props
                              ? ke.props[Xt]
                              : (sn = ke.type.defaultProps) === null ||
                                  sn === void 0
                                ? void 0
                                : sn[Xt],
                          mr =
                            "hide" in ke.props
                              ? ke.props.hide
                              : (Bn = ke.type.defaultProps) === null ||
                                  Bn === void 0
                                ? void 0
                                : Bn.hide;
                        return Hn === ne && (ee || !mr);
                      }),
                      oe,
                      zt,
                      pe,
                    );
                    Ge && (Oe = Ge);
                  }
                  me &&
                    (ye === "number" || jt !== "auto") &&
                    (Ne = (0, g.Ay)(Ee, oe, "category"));
                } else
                  me
                    ? (Oe = z()(0, we))
                    : te && te[ne] && te[ne].hasStack && ye === "number"
                      ? (Oe =
                          fe === "expand"
                            ? [0, 1]
                            : (0, g.Mk)(te[ne].stackGroups, ae, le))
                      : (Oe = (0, g.vf)(
                          Ee,
                          Tt.filter(function (ke) {
                            var sn =
                                Xt in ke.props
                                  ? ke.props[Xt]
                                  : ke.type.defaultProps[Xt],
                              Bn =
                                "hide" in ke.props
                                  ? ke.props.hide
                                  : ke.type.defaultProps.hide;
                            return sn === ne && (ee || !Bn);
                          }),
                          ye,
                          pe,
                          !0,
                        ));
                if (ye === "number")
                  (Oe = zn(ve, Oe, ne, zt, Gt)),
                    $e && (Oe = (0, g.AQ)($e, Oe, se));
                else if (ye === "category" && $e) {
                  var mn = $e,
                    Un = Oe.every(function (ke) {
                      return mn.indexOf(ke) >= 0;
                    });
                  Un && (Oe = mn);
                }
              }
              return $t(
                $t({}, Ue),
                {},
                Ie(
                  {},
                  ne,
                  $t(
                    $t({}, ue),
                    {},
                    {
                      axisType: zt,
                      domain: Oe,
                      categoricalDomain: Ne,
                      duplicateDomain: Ke,
                      originalDomain:
                        (xe = ue.domain) !== null && xe !== void 0 ? xe : Te,
                      isCategorical: me,
                      layout: pe,
                    },
                  ),
                ),
              );
            }, {});
          },
          ln = function (a, A) {
            var y = A.graphicalItems,
              Tt = A.Axis,
              zt = A.axisType,
              Xt = A.axisIdKey,
              te = A.stackGroups,
              ae = A.dataStartIndex,
              le = A.dataEndIndex,
              pe = a.layout,
              ve = a.children,
              fe = gi(a.data, {
                graphicalItems: y,
                dataStartIndex: ae,
                dataEndIndex: le,
              }),
              me = fe.length,
              Ue = (0, g._L)(pe, zt),
              Me = -1;
            return y.reduce(function (xe, ue) {
              var ye =
                  ue.type.defaultProps !== void 0
                    ? $t($t({}, ue.type.defaultProps), ue.props)
                    : ue.props,
                oe = ye[Xt],
                se = Ci("number");
              if (!xe[oe]) {
                Me++;
                var Ot;
                return (
                  Ue
                    ? (Ot = z()(0, me))
                    : te && te[oe] && te[oe].hasStack
                      ? ((Ot = (0, g.Mk)(te[oe].stackGroups, ae, le)),
                        (Ot = zn(ve, Ot, oe, zt)))
                      : ((Ot = (0, g.AQ)(
                          se,
                          (0, g.vf)(
                            fe,
                            y.filter(function (jt) {
                              var Gt,
                                ee,
                                ne =
                                  Xt in jt.props
                                    ? jt.props[Xt]
                                    : (Gt = jt.type.defaultProps) === null ||
                                        Gt === void 0
                                      ? void 0
                                      : Gt[Xt],
                                Ee =
                                  "hide" in jt.props
                                    ? jt.props.hide
                                    : (ee = jt.type.defaultProps) === null ||
                                        ee === void 0
                                      ? void 0
                                      : ee.hide;
                              return ne === oe && !Ee;
                            }),
                            "number",
                            pe,
                          ),
                          Tt.defaultProps.allowDataOverflow,
                        )),
                        (Ot = zn(ve, Ot, oe, zt))),
                  $t(
                    $t({}, xe),
                    {},
                    Ie(
                      {},
                      oe,
                      $t(
                        $t({ axisType: zt }, Tt.defaultProps),
                        {},
                        {
                          hide: !0,
                          orientation: ot()(
                            ni,
                            "".concat(zt, ".").concat(Me % 2),
                            null,
                          ),
                          domain: Ot,
                          originalDomain: se,
                          isCategorical: Ue,
                          layout: pe,
                        },
                      ),
                    ),
                  )
                );
              }
              return xe;
            }, {});
          },
          ea = function (a, A) {
            var y = A.axisType,
              Tt = y === void 0 ? "xAxis" : y,
              zt = A.AxisComp,
              Xt = A.graphicalItems,
              te = A.stackGroups,
              ae = A.dataStartIndex,
              le = A.dataEndIndex,
              pe = a.children,
              ve = "".concat(Tt, "Id"),
              fe = (0, $.aS)(pe, zt),
              me = {};
            return (
              fe && fe.length
                ? (me = ta(a, {
                    axes: fe,
                    graphicalItems: Xt,
                    axisType: Tt,
                    axisIdKey: ve,
                    stackGroups: te,
                    dataStartIndex: ae,
                    dataEndIndex: le,
                  }))
                : Xt &&
                  Xt.length &&
                  (me = ln(a, {
                    Axis: zt,
                    graphicalItems: Xt,
                    axisType: Tt,
                    axisIdKey: ve,
                    stackGroups: te,
                    dataStartIndex: ae,
                    dataEndIndex: le,
                  })),
              me
            );
          },
          ai = function (a) {
            var A = (0, v.lX)(a),
              y = (0, g.Rh)(A, !1, !0);
            return {
              tooltipTicks: y,
              orderedTooltipTicks: it()(y, function (Tt) {
                return Tt.coordinate;
              }),
              tooltipAxis: A,
              tooltipAxisBandSize: (0, g.Hj)(A, y),
            };
          },
          $r = function (a) {
            var A = a.children,
              y = a.defaultShowTooltip,
              Tt = (0, $.BU)(A, l),
              zt = 0,
              Xt = 0;
            return (
              a.data && a.data.length !== 0 && (Xt = a.data.length - 1),
              Tt &&
                Tt.props &&
                (Tt.props.startIndex >= 0 && (zt = Tt.props.startIndex),
                Tt.props.endIndex >= 0 && (Xt = Tt.props.endIndex)),
              {
                chartX: 0,
                chartY: 0,
                dataStartIndex: zt,
                dataEndIndex: Xt,
                activeTooltipIndex: -1,
                isTooltipActive: !!y,
              }
            );
          },
          na = function (a) {
            return !a || !a.length
              ? !1
              : a.some(function (A) {
                  var y = (0, $.Mn)(A && A.type);
                  return y && y.indexOf("Bar") >= 0;
                });
          },
          Wi = function (a) {
            return a === "horizontal"
              ? { numericAxisName: "yAxis", cateAxisName: "xAxis" }
              : a === "vertical"
                ? { numericAxisName: "xAxis", cateAxisName: "yAxis" }
                : a === "centric"
                  ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" }
                  : {
                      numericAxisName: "angleAxis",
                      cateAxisName: "radiusAxis",
                    };
          },
          ra = function (a, A) {
            var y = a.props,
              Tt = a.graphicalItems,
              zt = a.xAxisMap,
              Xt = zt === void 0 ? {} : zt,
              te = a.yAxisMap,
              ae = te === void 0 ? {} : te,
              le = y.width,
              pe = y.height,
              ve = y.children,
              fe = y.margin || {},
              me = (0, $.BU)(ve, l),
              Ue = (0, $.BU)(ve, Dt.s),
              Me = Object.keys(ae).reduce(
                function (Ot, jt) {
                  var Gt = ae[jt],
                    ee = Gt.orientation;
                  return !Gt.mirror && !Gt.hide
                    ? $t($t({}, Ot), {}, Ie({}, ee, Ot[ee] + Gt.width))
                    : Ot;
                },
                { left: fe.left || 0, right: fe.right || 0 },
              ),
              xe = Object.keys(Xt).reduce(
                function (Ot, jt) {
                  var Gt = Xt[jt],
                    ee = Gt.orientation;
                  return !Gt.mirror && !Gt.hide
                    ? $t(
                        $t({}, Ot),
                        {},
                        Ie({}, ee, ot()(Ot, "".concat(ee)) + Gt.height),
                      )
                    : Ot;
                },
                { top: fe.top || 0, bottom: fe.bottom || 0 },
              ),
              ue = $t($t({}, xe), Me),
              ye = ue.bottom;
            me && (ue.bottom += me.props.height || l.defaultProps.height),
              Ue && A && (ue = (0, g.s0)(ue, Tt, y, A));
            var oe = le - ue.left - ue.right,
              se = pe - ue.top - ue.bottom;
            return $t(
              $t({ brushBottom: ye }, ue),
              {},
              { width: Math.max(oe, 0), height: Math.max(se, 0) },
            );
          },
          ia = function (a, A) {
            if (A === "xAxis") return a[A].width;
            if (A === "yAxis") return a[A].height;
          },
          aa = function (a) {
            var A = a.chartName,
              y = a.GraphicalChild,
              Tt = a.defaultTooltipEventType,
              zt = Tt === void 0 ? "axis" : Tt,
              Xt = a.validateTooltipEventTypes,
              te = Xt === void 0 ? ["axis"] : Xt,
              ae = a.axisComponents,
              le = a.legendContent,
              pe = a.formatAxisMap,
              ve = a.defaultProps,
              fe = function (ue, ye) {
                var oe = ye.graphicalItems,
                  se = ye.stackGroups,
                  Ot = ye.offset,
                  jt = ye.updateId,
                  Gt = ye.dataStartIndex,
                  ee = ye.dataEndIndex,
                  ne = ue.barSize,
                  Ee = ue.layout,
                  we = ue.barGap,
                  Oe = ue.barCategoryGap,
                  Ke = ue.maxBarSize,
                  Ne = Wi(Ee),
                  Te = Ne.numericAxisName,
                  Fe = Ne.cateAxisName,
                  $e = na(oe),
                  Je = [];
                return (
                  oe.forEach(function (Ge, mn) {
                    var Un = gi(ue.data, {
                        graphicalItems: [Ge],
                        dataStartIndex: Gt,
                        dataEndIndex: ee,
                      }),
                      ke =
                        Ge.type.defaultProps !== void 0
                          ? $t($t({}, Ge.type.defaultProps), Ge.props)
                          : Ge.props,
                      sn = ke.dataKey,
                      Bn = ke.maxBarSize,
                      Hn = ke["".concat(Te, "Id")],
                      mr = ke["".concat(Fe, "Id")],
                      Di = {},
                      Gn = ae.reduce(function (wr, Vn) {
                        var oa,
                          Pa,
                          bi = ye["".concat(Vn.axisType, "Map")],
                          ki = ke["".concat(Vn.axisType, "Id")];
                        (bi && bi[ki]) ||
                          Vn.axisType === "zAxis" ||
                          (0, pt.A)(!1);
                        var Ki = bi[ki];
                        return $t(
                          $t({}, wr),
                          {},
                          Ie(
                            Ie({}, Vn.axisType, Ki),
                            "".concat(Vn.axisType, "Ticks"),
                            (0, g.Rh)(Ki),
                          ),
                        );
                      }, Di),
                      _r = Gn[Fe],
                      oi = Gn["".concat(Fe, "Ticks")],
                      zr =
                        se &&
                        se[Hn] &&
                        se[Hn].hasStack &&
                        (0, g.kA)(Ge, se[Hn].stackGroups),
                      ui = (0, $.Mn)(Ge.type).indexOf("Bar") >= 0,
                      jr = (0, g.Hj)(_r, oi),
                      Xr = [],
                      li =
                        $e &&
                        (0, g.tA)({
                          barSize: ne,
                          stackGroups: se,
                          totalSize: ia(Gn, Fe),
                        });
                    if (ui) {
                      var si,
                        Hr,
                        ci = K()(Bn) ? Ke : Bn,
                        Ir =
                          (si =
                            (Hr = (0, g.Hj)(_r, oi, !0)) !== null &&
                            Hr !== void 0
                              ? Hr
                              : ci) !== null && si !== void 0
                            ? si
                            : 0;
                      (Xr = (0, g.BX)({
                        barGap: we,
                        barCategoryGap: Oe,
                        bandSize: Ir !== jr ? Ir : jr,
                        sizeList: li[mr],
                        maxBarSize: ci,
                      })),
                        Ir !== jr &&
                          (Xr = Xr.map(function (wr) {
                            return $t(
                              $t({}, wr),
                              {},
                              {
                                position: $t(
                                  $t({}, wr.position),
                                  {},
                                  { offset: wr.position.offset - Ir / 2 },
                                ),
                              },
                            );
                          }));
                    }
                    var fi = Ge && Ge.type && Ge.type.getComposedData;
                    fi &&
                      Je.push({
                        props: $t(
                          $t(
                            {},
                            fi(
                              $t(
                                $t({}, Gn),
                                {},
                                {
                                  displayedData: Un,
                                  props: ue,
                                  dataKey: sn,
                                  item: Ge,
                                  bandSize: jr,
                                  barPosition: Xr,
                                  offset: Ot,
                                  stackedData: zr,
                                  layout: Ee,
                                  dataStartIndex: Gt,
                                  dataEndIndex: ee,
                                },
                              ),
                            ),
                          ),
                          {},
                          Ie(
                            Ie(
                              Ie(
                                { key: Ge.key || "item-".concat(mn) },
                                Te,
                                Gn[Te],
                              ),
                              Fe,
                              Gn[Fe],
                            ),
                            "animationId",
                            jt,
                          ),
                        ),
                        childIndex: (0, $.AW)(Ge, ue.children),
                        item: Ge,
                      });
                  }),
                  Je
                );
              },
              me = function (ue, ye) {
                var oe = ue.props,
                  se = ue.dataStartIndex,
                  Ot = ue.dataEndIndex,
                  jt = ue.updateId;
                if (!(0, $.Me)({ props: oe })) return null;
                var Gt = oe.children,
                  ee = oe.layout,
                  ne = oe.stackOffset,
                  Ee = oe.data,
                  we = oe.reverseStackOrder,
                  Oe = Wi(ee),
                  Ke = Oe.numericAxisName,
                  Ne = Oe.cateAxisName,
                  Te = (0, $.aS)(Gt, y),
                  Fe = (0, g.Mn)(
                    Ee,
                    Te,
                    "".concat(Ke, "Id"),
                    "".concat(Ne, "Id"),
                    ne,
                    we,
                  ),
                  $e = ae.reduce(function (ke, sn) {
                    var Bn = "".concat(sn.axisType, "Map");
                    return $t(
                      $t({}, ke),
                      {},
                      Ie(
                        {},
                        Bn,
                        ea(
                          oe,
                          $t(
                            $t({}, sn),
                            {},
                            {
                              graphicalItems: Te,
                              stackGroups: sn.axisType === Ke && Fe,
                              dataStartIndex: se,
                              dataEndIndex: Ot,
                            },
                          ),
                        ),
                      ),
                    );
                  }, {}),
                  Je = ra(
                    $t($t({}, $e), {}, { props: oe, graphicalItems: Te }),
                    ye?.legendBBox,
                  );
                Object.keys($e).forEach(function (ke) {
                  $e[ke] = pe(oe, $e[ke], Je, ke.replace("Map", ""), A);
                });
                var Ge = $e["".concat(Ne, "Map")],
                  mn = ai(Ge),
                  Un = fe(
                    oe,
                    $t(
                      $t({}, $e),
                      {},
                      {
                        dataStartIndex: se,
                        dataEndIndex: Ot,
                        updateId: jt,
                        graphicalItems: Te,
                        stackGroups: Fe,
                        offset: Je,
                      },
                    ),
                  );
                return $t(
                  $t(
                    {
                      formattedGraphicalItems: Un,
                      graphicalItems: Te,
                      offset: Je,
                      stackGroups: Fe,
                    },
                    mn,
                  ),
                  $e,
                );
              },
              Ue = (function (xe) {
                function ue(ye) {
                  var oe, se, Ot;
                  return (
                    Jt(this, ue),
                    (Ot = ge(this, ue, [ye])),
                    Ie(
                      Ot,
                      "eventEmitterSymbol",
                      Symbol("rechartsEventEmitter"),
                    ),
                    Ie(Ot, "accessibilityManager", new wn()),
                    Ie(Ot, "handleLegendBBoxUpdate", function (jt) {
                      if (jt) {
                        var Gt = Ot.state,
                          ee = Gt.dataStartIndex,
                          ne = Gt.dataEndIndex,
                          Ee = Gt.updateId;
                        Ot.setState(
                          $t(
                            { legendBBox: jt },
                            me(
                              {
                                props: Ot.props,
                                dataStartIndex: ee,
                                dataEndIndex: ne,
                                updateId: Ee,
                              },
                              $t($t({}, Ot.state), {}, { legendBBox: jt }),
                            ),
                          ),
                        );
                      }
                    }),
                    Ie(Ot, "handleReceiveSyncEvent", function (jt, Gt, ee) {
                      if (Ot.props.syncId === jt) {
                        if (
                          ee === Ot.eventEmitterSymbol &&
                          typeof Ot.props.syncMethod != "function"
                        )
                          return;
                        Ot.applySyncEvent(Gt);
                      }
                    }),
                    Ie(Ot, "handleBrushChange", function (jt) {
                      var Gt = jt.startIndex,
                        ee = jt.endIndex;
                      if (
                        Gt !== Ot.state.dataStartIndex ||
                        ee !== Ot.state.dataEndIndex
                      ) {
                        var ne = Ot.state.updateId;
                        Ot.setState(function () {
                          return $t(
                            { dataStartIndex: Gt, dataEndIndex: ee },
                            me(
                              {
                                props: Ot.props,
                                dataStartIndex: Gt,
                                dataEndIndex: ee,
                                updateId: ne,
                              },
                              Ot.state,
                            ),
                          );
                        }),
                          Ot.triggerSyncEvent({
                            dataStartIndex: Gt,
                            dataEndIndex: ee,
                          });
                      }
                    }),
                    Ie(Ot, "handleMouseEnter", function (jt) {
                      var Gt = Ot.getMouseInfo(jt);
                      if (Gt) {
                        var ee = $t($t({}, Gt), {}, { isTooltipActive: !0 });
                        Ot.setState(ee), Ot.triggerSyncEvent(ee);
                        var ne = Ot.props.onMouseEnter;
                        U()(ne) && ne(ee, jt);
                      }
                    }),
                    Ie(Ot, "triggeredAfterMouseMove", function (jt) {
                      var Gt = Ot.getMouseInfo(jt),
                        ee = Gt
                          ? $t($t({}, Gt), {}, { isTooltipActive: !0 })
                          : { isTooltipActive: !1 };
                      Ot.setState(ee), Ot.triggerSyncEvent(ee);
                      var ne = Ot.props.onMouseMove;
                      U()(ne) && ne(ee, jt);
                    }),
                    Ie(Ot, "handleItemMouseEnter", function (jt) {
                      Ot.setState(function () {
                        return {
                          isTooltipActive: !0,
                          activeItem: jt,
                          activePayload: jt.tooltipPayload,
                          activeCoordinate: jt.tooltipPosition || {
                            x: jt.cx,
                            y: jt.cy,
                          },
                        };
                      });
                    }),
                    Ie(Ot, "handleItemMouseLeave", function () {
                      Ot.setState(function () {
                        return { isTooltipActive: !1 };
                      });
                    }),
                    Ie(Ot, "handleMouseMove", function (jt) {
                      jt.persist(), Ot.throttleTriggeredAfterMouseMove(jt);
                    }),
                    Ie(Ot, "handleMouseLeave", function (jt) {
                      Ot.throttleTriggeredAfterMouseMove.cancel();
                      var Gt = { isTooltipActive: !1 };
                      Ot.setState(Gt), Ot.triggerSyncEvent(Gt);
                      var ee = Ot.props.onMouseLeave;
                      U()(ee) && ee(Gt, jt);
                    }),
                    Ie(Ot, "handleOuterEvent", function (jt) {
                      var Gt = (0, $.X_)(jt),
                        ee = ot()(Ot.props, "".concat(Gt));
                      if (Gt && U()(ee)) {
                        var ne, Ee;
                        /.*touch.*/i.test(Gt)
                          ? (Ee = Ot.getMouseInfo(jt.changedTouches[0]))
                          : (Ee = Ot.getMouseInfo(jt)),
                          ee((ne = Ee) !== null && ne !== void 0 ? ne : {}, jt);
                      }
                    }),
                    Ie(Ot, "handleClick", function (jt) {
                      var Gt = Ot.getMouseInfo(jt);
                      if (Gt) {
                        var ee = $t($t({}, Gt), {}, { isTooltipActive: !0 });
                        Ot.setState(ee), Ot.triggerSyncEvent(ee);
                        var ne = Ot.props.onClick;
                        U()(ne) && ne(ee, jt);
                      }
                    }),
                    Ie(Ot, "handleMouseDown", function (jt) {
                      var Gt = Ot.props.onMouseDown;
                      if (U()(Gt)) {
                        var ee = Ot.getMouseInfo(jt);
                        Gt(ee, jt);
                      }
                    }),
                    Ie(Ot, "handleMouseUp", function (jt) {
                      var Gt = Ot.props.onMouseUp;
                      if (U()(Gt)) {
                        var ee = Ot.getMouseInfo(jt);
                        Gt(ee, jt);
                      }
                    }),
                    Ie(Ot, "handleTouchMove", function (jt) {
                      jt.changedTouches != null &&
                        jt.changedTouches.length > 0 &&
                        Ot.throttleTriggeredAfterMouseMove(
                          jt.changedTouches[0],
                        );
                    }),
                    Ie(Ot, "handleTouchStart", function (jt) {
                      jt.changedTouches != null &&
                        jt.changedTouches.length > 0 &&
                        Ot.handleMouseDown(jt.changedTouches[0]);
                    }),
                    Ie(Ot, "handleTouchEnd", function (jt) {
                      jt.changedTouches != null &&
                        jt.changedTouches.length > 0 &&
                        Ot.handleMouseUp(jt.changedTouches[0]);
                    }),
                    Ie(Ot, "handleDoubleClick", function (jt) {
                      var Gt = Ot.props.onDoubleClick;
                      if (U()(Gt)) {
                        var ee = Ot.getMouseInfo(jt);
                        Gt(ee, jt);
                      }
                    }),
                    Ie(Ot, "handleContextMenu", function (jt) {
                      var Gt = Ot.props.onContextMenu;
                      if (U()(Gt)) {
                        var ee = Ot.getMouseInfo(jt);
                        Gt(ee, jt);
                      }
                    }),
                    Ie(Ot, "triggerSyncEvent", function (jt) {
                      Ot.props.syncId !== void 0 &&
                        rr.emit(dn, Ot.props.syncId, jt, Ot.eventEmitterSymbol);
                    }),
                    Ie(Ot, "applySyncEvent", function (jt) {
                      var Gt = Ot.props,
                        ee = Gt.layout,
                        ne = Gt.syncMethod,
                        Ee = Ot.state.updateId,
                        we = jt.dataStartIndex,
                        Oe = jt.dataEndIndex;
                      if (
                        jt.dataStartIndex !== void 0 ||
                        jt.dataEndIndex !== void 0
                      )
                        Ot.setState(
                          $t(
                            { dataStartIndex: we, dataEndIndex: Oe },
                            me(
                              {
                                props: Ot.props,
                                dataStartIndex: we,
                                dataEndIndex: Oe,
                                updateId: Ee,
                              },
                              Ot.state,
                            ),
                          ),
                        );
                      else if (jt.activeTooltipIndex !== void 0) {
                        var Ke = jt.chartX,
                          Ne = jt.chartY,
                          Te = jt.activeTooltipIndex,
                          Fe = Ot.state,
                          $e = Fe.offset,
                          Je = Fe.tooltipTicks;
                        if (!$e) return;
                        if (typeof ne == "function") Te = ne(Je, jt);
                        else if (ne === "value") {
                          Te = -1;
                          for (var Ge = 0; Ge < Je.length; Ge++)
                            if (Je[Ge].value === jt.activeLabel) {
                              Te = Ge;
                              break;
                            }
                        }
                        var mn = $t($t({}, $e), {}, { x: $e.left, y: $e.top }),
                          Un = Math.min(Ke, mn.x + mn.width),
                          ke = Math.min(Ne, mn.y + mn.height),
                          sn = Je[Te] && Je[Te].value,
                          Bn = Cn(Ot.state, Ot.props.data, Te),
                          Hn = Je[Te]
                            ? {
                                x: ee === "horizontal" ? Je[Te].coordinate : Un,
                                y: ee === "horizontal" ? ke : Je[Te].coordinate,
                              }
                            : mi;
                        Ot.setState(
                          $t(
                            $t({}, jt),
                            {},
                            {
                              activeLabel: sn,
                              activeCoordinate: Hn,
                              activePayload: Bn,
                              activeTooltipIndex: Te,
                            },
                          ),
                        );
                      } else Ot.setState(jt);
                    }),
                    Ie(Ot, "renderCursor", function (jt) {
                      var Gt,
                        ee = Ot.state,
                        ne = ee.isTooltipActive,
                        Ee = ee.activeCoordinate,
                        we = ee.activePayload,
                        Oe = ee.offset,
                        Ke = ee.activeTooltipIndex,
                        Ne = ee.tooltipAxisBandSize,
                        Te = Ot.getTooltipEventType(),
                        Fe =
                          (Gt = jt.props.active) !== null && Gt !== void 0
                            ? Gt
                            : ne,
                        $e = Ot.props.layout,
                        Je = jt.key || "_recharts-cursor";
                      return s.createElement(qr, {
                        key: Je,
                        activeCoordinate: Ee,
                        activePayload: we,
                        activeTooltipIndex: Ke,
                        chartName: A,
                        element: jt,
                        isActive: Fe,
                        layout: $e,
                        offset: Oe,
                        tooltipAxisBandSize: Ne,
                        tooltipEventType: Te,
                      });
                    }),
                    Ie(Ot, "renderPolarAxis", function (jt, Gt, ee) {
                      var ne = ot()(jt, "type.axisType"),
                        Ee = ot()(Ot.state, "".concat(ne, "Map")),
                        we = jt.type.defaultProps,
                        Oe =
                          we !== void 0 ? $t($t({}, we), jt.props) : jt.props,
                        Ke = Ee && Ee[Oe["".concat(ne, "Id")]];
                      return (0, s.cloneElement)(
                        jt,
                        $t(
                          $t({}, Ke),
                          {},
                          {
                            className: (0, V.A)(ne, Ke.className),
                            key: jt.key || "".concat(Gt, "-").concat(ee),
                            ticks: (0, g.Rh)(Ke, !0),
                          },
                        ),
                      );
                    }),
                    Ie(Ot, "renderPolarGrid", function (jt) {
                      var Gt = jt.props,
                        ee = Gt.radialLines,
                        ne = Gt.polarAngles,
                        Ee = Gt.polarRadius,
                        we = Ot.state,
                        Oe = we.radiusAxisMap,
                        Ke = we.angleAxisMap,
                        Ne = (0, v.lX)(Oe),
                        Te = (0, v.lX)(Ke),
                        Fe = Te.cx,
                        $e = Te.cy,
                        Je = Te.innerRadius,
                        Ge = Te.outerRadius;
                      return (0, s.cloneElement)(jt, {
                        polarAngles: Array.isArray(ne)
                          ? ne
                          : (0, g.Rh)(Te, !0).map(function (mn) {
                              return mn.coordinate;
                            }),
                        polarRadius: Array.isArray(Ee)
                          ? Ee
                          : (0, g.Rh)(Ne, !0).map(function (mn) {
                              return mn.coordinate;
                            }),
                        cx: Fe,
                        cy: $e,
                        innerRadius: Je,
                        outerRadius: Ge,
                        key: jt.key || "polar-grid",
                        radialLines: ee,
                      });
                    }),
                    Ie(Ot, "renderLegend", function () {
                      var jt = Ot.state.formattedGraphicalItems,
                        Gt = Ot.props,
                        ee = Gt.children,
                        ne = Gt.width,
                        Ee = Gt.height,
                        we = Ot.props.margin || {},
                        Oe = ne - (we.left || 0) - (we.right || 0),
                        Ke = (0, O.g)({
                          children: ee,
                          formattedGraphicalItems: jt,
                          legendWidth: Oe,
                          legendContent: le,
                        });
                      if (!Ke) return null;
                      var Ne = Ke.item,
                        Te = St(Ke, Li);
                      return (0, s.cloneElement)(
                        Ne,
                        $t(
                          $t({}, Te),
                          {},
                          {
                            chartWidth: ne,
                            chartHeight: Ee,
                            margin: we,
                            onBBoxUpdate: Ot.handleLegendBBoxUpdate,
                          },
                        ),
                      );
                    }),
                    Ie(Ot, "renderTooltip", function () {
                      var jt,
                        Gt = Ot.props,
                        ee = Gt.children,
                        ne = Gt.accessibilityLayer,
                        Ee = (0, $.BU)(ee, Kt.m);
                      if (!Ee) return null;
                      var we = Ot.state,
                        Oe = we.isTooltipActive,
                        Ke = we.activeCoordinate,
                        Ne = we.activePayload,
                        Te = we.activeLabel,
                        Fe = we.offset,
                        $e =
                          (jt = Ee.props.active) !== null && jt !== void 0
                            ? jt
                            : Oe;
                      return (0, s.cloneElement)(Ee, {
                        viewBox: $t($t({}, Fe), {}, { x: Fe.left, y: Fe.top }),
                        active: $e,
                        label: Te,
                        payload: $e ? Ne : [],
                        coordinate: Ke,
                        accessibilityLayer: ne,
                      });
                    }),
                    Ie(Ot, "renderBrush", function (jt) {
                      var Gt = Ot.props,
                        ee = Gt.margin,
                        ne = Gt.data,
                        Ee = Ot.state,
                        we = Ee.offset,
                        Oe = Ee.dataStartIndex,
                        Ke = Ee.dataEndIndex,
                        Ne = Ee.updateId;
                      return (0, s.cloneElement)(jt, {
                        key: jt.key || "_recharts-brush",
                        onChange: (0, g.HQ)(
                          Ot.handleBrushChange,
                          jt.props.onChange,
                        ),
                        data: ne,
                        x: (0, v.Et)(jt.props.x) ? jt.props.x : we.left,
                        y: (0, v.Et)(jt.props.y)
                          ? jt.props.y
                          : we.top +
                            we.height +
                            we.brushBottom -
                            (ee.bottom || 0),
                        width: (0, v.Et)(jt.props.width)
                          ? jt.props.width
                          : we.width,
                        startIndex: Oe,
                        endIndex: Ke,
                        updateId: "brush-".concat(Ne),
                      });
                    }),
                    Ie(Ot, "renderReferenceElement", function (jt, Gt, ee) {
                      if (!jt) return null;
                      var ne = Ot,
                        Ee = ne.clipPathId,
                        we = Ot.state,
                        Oe = we.xAxisMap,
                        Ke = we.yAxisMap,
                        Ne = we.offset,
                        Te = jt.type.defaultProps || {},
                        Fe = jt.props,
                        $e = Fe.xAxisId,
                        Je = $e === void 0 ? Te.xAxisId : $e,
                        Ge = Fe.yAxisId,
                        mn = Ge === void 0 ? Te.yAxisId : Ge;
                      return (0, s.cloneElement)(jt, {
                        key: jt.key || "".concat(Gt, "-").concat(ee),
                        xAxis: Oe[Je],
                        yAxis: Ke[mn],
                        viewBox: {
                          x: Ne.left,
                          y: Ne.top,
                          width: Ne.width,
                          height: Ne.height,
                        },
                        clipPathId: Ee,
                      });
                    }),
                    Ie(Ot, "renderActivePoints", function (jt) {
                      var Gt = jt.item,
                        ee = jt.activePoint,
                        ne = jt.basePoint,
                        Ee = jt.childIndex,
                        we = jt.isRange,
                        Oe = [],
                        Ke = Gt.props.key,
                        Ne =
                          Gt.item.type.defaultProps !== void 0
                            ? $t(
                                $t({}, Gt.item.type.defaultProps),
                                Gt.item.props,
                              )
                            : Gt.item.props,
                        Te = Ne.activeDot,
                        Fe = Ne.dataKey,
                        $e = $t(
                          $t(
                            {
                              index: Ee,
                              dataKey: Fe,
                              cx: ee.x,
                              cy: ee.y,
                              r: 4,
                              fill: (0, g.Ps)(Gt.item),
                              strokeWidth: 2,
                              stroke: "#fff",
                              payload: ee.payload,
                              value: ee.value,
                            },
                            (0, $.J9)(Te, !1),
                          ),
                          (0, Ln._U)(Te),
                        );
                      return (
                        Oe.push(
                          ue.renderActiveDot(
                            Te,
                            $e,
                            "".concat(Ke, "-activePoint-").concat(Ee),
                          ),
                        ),
                        ne
                          ? Oe.push(
                              ue.renderActiveDot(
                                Te,
                                $t($t({}, $e), {}, { cx: ne.x, cy: ne.y }),
                                "".concat(Ke, "-basePoint-").concat(Ee),
                              ),
                            )
                          : we && Oe.push(null),
                        Oe
                      );
                    }),
                    Ie(Ot, "renderGraphicChild", function (jt, Gt, ee) {
                      var ne = Ot.filterFormatItem(jt, Gt, ee);
                      if (!ne) return null;
                      var Ee = Ot.getTooltipEventType(),
                        we = Ot.state,
                        Oe = we.isTooltipActive,
                        Ke = we.tooltipAxis,
                        Ne = we.activeTooltipIndex,
                        Te = we.activeLabel,
                        Fe = Ot.props.children,
                        $e = (0, $.BU)(Fe, Kt.m),
                        Je = ne.props,
                        Ge = Je.points,
                        mn = Je.isRange,
                        Un = Je.baseLine,
                        ke =
                          ne.item.type.defaultProps !== void 0
                            ? $t(
                                $t({}, ne.item.type.defaultProps),
                                ne.item.props,
                              )
                            : ne.item.props,
                        sn = ke.activeDot,
                        Bn = ke.hide,
                        Hn = ke.activeBar,
                        mr = ke.activeShape,
                        Di = !!(!Bn && Oe && $e && (sn || Hn || mr)),
                        Gn = {};
                      Ee !== "axis" && $e && $e.props.trigger === "click"
                        ? (Gn = {
                            onClick: (0, g.HQ)(
                              Ot.handleItemMouseEnter,
                              jt.props.onClick,
                            ),
                          })
                        : Ee !== "axis" &&
                          (Gn = {
                            onMouseLeave: (0, g.HQ)(
                              Ot.handleItemMouseLeave,
                              jt.props.onMouseLeave,
                            ),
                            onMouseEnter: (0, g.HQ)(
                              Ot.handleItemMouseEnter,
                              jt.props.onMouseEnter,
                            ),
                          });
                      var _r = (0, s.cloneElement)(
                        jt,
                        $t($t({}, ne.props), Gn),
                      );
                      function oi(Vn) {
                        return typeof Ke.dataKey == "function"
                          ? Ke.dataKey(Vn.payload)
                          : null;
                      }
                      if (Di)
                        if (Ne >= 0) {
                          var zr, ui;
                          if (Ke.dataKey && !Ke.allowDuplicatedCategory) {
                            var jr =
                              typeof Ke.dataKey == "function"
                                ? oi
                                : "payload.".concat(Ke.dataKey.toString());
                            (zr = (0, v.eP)(Ge, jr, Te)),
                              (ui = mn && Un && (0, v.eP)(Un, jr, Te));
                          } else (zr = Ge?.[Ne]), (ui = mn && Un && Un[Ne]);
                          if (mr || Hn) {
                            var Xr =
                              jt.props.activeIndex !== void 0
                                ? jt.props.activeIndex
                                : Ne;
                            return [
                              (0, s.cloneElement)(
                                jt,
                                $t(
                                  $t($t({}, ne.props), Gn),
                                  {},
                                  { activeIndex: Xr },
                                ),
                              ),
                              null,
                              null,
                            ];
                          }
                          if (!K()(zr))
                            return [_r].concat(
                              hn(
                                Ot.renderActivePoints({
                                  item: ne,
                                  activePoint: zr,
                                  basePoint: ui,
                                  childIndex: Ne,
                                  isRange: mn,
                                }),
                              ),
                            );
                        } else {
                          var li,
                            si =
                              (li = Ot.getItemByXY(
                                Ot.state.activeCoordinate,
                              )) !== null && li !== void 0
                                ? li
                                : { graphicalItem: _r },
                            Hr = si.graphicalItem,
                            ci = Hr.item,
                            Ir = ci === void 0 ? jt : ci,
                            fi = Hr.childIndex,
                            wr = $t(
                              $t($t({}, ne.props), Gn),
                              {},
                              { activeIndex: fi },
                            );
                          return [(0, s.cloneElement)(Ir, wr), null, null];
                        }
                      return mn ? [_r, null, null] : [_r, null];
                    }),
                    Ie(Ot, "renderCustomized", function (jt, Gt, ee) {
                      return (0, s.cloneElement)(
                        jt,
                        $t(
                          $t(
                            { key: "recharts-customized-".concat(ee) },
                            Ot.props,
                          ),
                          Ot.state,
                        ),
                      );
                    }),
                    Ie(Ot, "renderMap", {
                      CartesianGrid: { handler: Fr, once: !0 },
                      ReferenceArea: { handler: Ot.renderReferenceElement },
                      ReferenceLine: { handler: Fr },
                      ReferenceDot: { handler: Ot.renderReferenceElement },
                      XAxis: { handler: Fr },
                      YAxis: { handler: Fr },
                      Brush: { handler: Ot.renderBrush, once: !0 },
                      Bar: { handler: Ot.renderGraphicChild },
                      Line: { handler: Ot.renderGraphicChild },
                      Area: { handler: Ot.renderGraphicChild },
                      Radar: { handler: Ot.renderGraphicChild },
                      RadialBar: { handler: Ot.renderGraphicChild },
                      Scatter: { handler: Ot.renderGraphicChild },
                      Pie: { handler: Ot.renderGraphicChild },
                      Funnel: { handler: Ot.renderGraphicChild },
                      Tooltip: { handler: Ot.renderCursor, once: !0 },
                      PolarGrid: { handler: Ot.renderPolarGrid, once: !0 },
                      PolarAngleAxis: { handler: Ot.renderPolarAxis },
                      PolarRadiusAxis: { handler: Ot.renderPolarAxis },
                      Customized: { handler: Ot.renderCustomized },
                    }),
                    (Ot.clipPathId = "".concat(
                      (oe = ye.id) !== null && oe !== void 0
                        ? oe
                        : (0, v.NF)("recharts"),
                      "-clip",
                    )),
                    (Ot.throttleTriggeredAfterMouseMove = dt()(
                      Ot.triggeredAfterMouseMove,
                      (se = ye.throttleDelay) !== null && se !== void 0
                        ? se
                        : 1e3 / 60,
                    )),
                    (Ot.state = {}),
                    Ot
                  );
                }
                return (
                  An(ue, xe),
                  he(ue, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var oe, se;
                        this.addListener(),
                          this.accessibilityManager.setDetails({
                            container: this.container,
                            offset: {
                              left:
                                (oe = this.props.margin.left) !== null &&
                                oe !== void 0
                                  ? oe
                                  : 0,
                              top:
                                (se = this.props.margin.top) !== null &&
                                se !== void 0
                                  ? se
                                  : 0,
                            },
                            coordinateList: this.state.tooltipTicks,
                            mouseHandlerCallback: this.triggeredAfterMouseMove,
                            layout: this.props.layout,
                          }),
                          this.displayDefaultTooltip();
                      },
                    },
                    {
                      key: "displayDefaultTooltip",
                      value: function () {
                        var oe = this.props,
                          se = oe.children,
                          Ot = oe.data,
                          jt = oe.height,
                          Gt = oe.layout,
                          ee = (0, $.BU)(se, Kt.m);
                        if (ee) {
                          var ne = ee.props.defaultIndex;
                          if (
                            !(
                              typeof ne != "number" ||
                              ne < 0 ||
                              ne > this.state.tooltipTicks.length - 1
                            )
                          ) {
                            var Ee =
                                this.state.tooltipTicks[ne] &&
                                this.state.tooltipTicks[ne].value,
                              we = Cn(this.state, Ot, ne, Ee),
                              Oe = this.state.tooltipTicks[ne].coordinate,
                              Ke = (this.state.offset.top + jt) / 2,
                              Ne = Gt === "horizontal",
                              Te = Ne ? { x: Oe, y: Ke } : { y: Oe, x: Ke },
                              Fe = this.state.formattedGraphicalItems.find(
                                function (Je) {
                                  var Ge = Je.item;
                                  return Ge.type.name === "Scatter";
                                },
                              );
                            Fe &&
                              ((Te = $t(
                                $t({}, Te),
                                Fe.props.points[ne].tooltipPosition,
                              )),
                              (we = Fe.props.points[ne].tooltipPayload));
                            var $e = {
                              activeTooltipIndex: ne,
                              isTooltipActive: !0,
                              activeLabel: Ee,
                              activePayload: we,
                              activeCoordinate: Te,
                            };
                            this.setState($e),
                              this.renderCursor(ee),
                              this.accessibilityManager.setIndex(ne);
                          }
                        }
                      },
                    },
                    {
                      key: "getSnapshotBeforeUpdate",
                      value: function (oe, se) {
                        if (!this.props.accessibilityLayer) return null;
                        if (
                          (this.state.tooltipTicks !== se.tooltipTicks &&
                            this.accessibilityManager.setDetails({
                              coordinateList: this.state.tooltipTicks,
                            }),
                          this.props.layout !== oe.layout &&
                            this.accessibilityManager.setDetails({
                              layout: this.props.layout,
                            }),
                          this.props.margin !== oe.margin)
                        ) {
                          var Ot, jt;
                          this.accessibilityManager.setDetails({
                            offset: {
                              left:
                                (Ot = this.props.margin.left) !== null &&
                                Ot !== void 0
                                  ? Ot
                                  : 0,
                              top:
                                (jt = this.props.margin.top) !== null &&
                                jt !== void 0
                                  ? jt
                                  : 0,
                            },
                          });
                        }
                        return null;
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (oe) {
                        (0, $.OV)(
                          [(0, $.BU)(oe.children, Kt.m)],
                          [(0, $.BU)(this.props.children, Kt.m)],
                        ) || this.displayDefaultTooltip();
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        this.removeListener(),
                          this.throttleTriggeredAfterMouseMove.cancel();
                      },
                    },
                    {
                      key: "getTooltipEventType",
                      value: function () {
                        var oe = (0, $.BU)(this.props.children, Kt.m);
                        if (oe && typeof oe.props.shared == "boolean") {
                          var se = oe.props.shared ? "axis" : "item";
                          return te.indexOf(se) >= 0 ? se : zt;
                        }
                        return zt;
                      },
                    },
                    {
                      key: "getMouseInfo",
                      value: function (oe) {
                        if (!this.container) return null;
                        var se = this.container,
                          Ot = se.getBoundingClientRect(),
                          jt = (0, h.A3)(Ot),
                          Gt = {
                            chartX: Math.round(oe.pageX - jt.left),
                            chartY: Math.round(oe.pageY - jt.top),
                          },
                          ee = Ot.width / se.offsetWidth || 1,
                          ne = this.inRange(Gt.chartX, Gt.chartY, ee);
                        if (!ne) return null;
                        var Ee = this.state,
                          we = Ee.xAxisMap,
                          Oe = Ee.yAxisMap,
                          Ke = this.getTooltipEventType(),
                          Ne = Ui(
                            this.state,
                            this.props.data,
                            this.props.layout,
                            ne,
                          );
                        if (Ke !== "axis" && we && Oe) {
                          var Te = (0, v.lX)(we).scale,
                            Fe = (0, v.lX)(Oe).scale,
                            $e = Te && Te.invert ? Te.invert(Gt.chartX) : null,
                            Je = Fe && Fe.invert ? Fe.invert(Gt.chartY) : null;
                          return $t(
                            $t({}, Gt),
                            {},
                            { xValue: $e, yValue: Je },
                            Ne,
                          );
                        }
                        return Ne ? $t($t({}, Gt), Ne) : null;
                      },
                    },
                    {
                      key: "inRange",
                      value: function (oe, se) {
                        var Ot =
                            arguments.length > 2 && arguments[2] !== void 0
                              ? arguments[2]
                              : 1,
                          jt = this.props.layout,
                          Gt = oe / Ot,
                          ee = se / Ot;
                        if (jt === "horizontal" || jt === "vertical") {
                          var ne = this.state.offset,
                            Ee =
                              Gt >= ne.left &&
                              Gt <= ne.left + ne.width &&
                              ee >= ne.top &&
                              ee <= ne.top + ne.height;
                          return Ee ? { x: Gt, y: ee } : null;
                        }
                        var we = this.state,
                          Oe = we.angleAxisMap,
                          Ke = we.radiusAxisMap;
                        if (Oe && Ke) {
                          var Ne = (0, v.lX)(Oe);
                          return (0, Kn.yy)({ x: Gt, y: ee }, Ne);
                        }
                        return null;
                      },
                    },
                    {
                      key: "parseEventsOfWrapper",
                      value: function () {
                        var oe = this.props.children,
                          se = this.getTooltipEventType(),
                          Ot = (0, $.BU)(oe, Kt.m),
                          jt = {};
                        Ot &&
                          se === "axis" &&
                          (Ot.props.trigger === "click"
                            ? (jt = { onClick: this.handleClick })
                            : (jt = {
                                onMouseEnter: this.handleMouseEnter,
                                onDoubleClick: this.handleDoubleClick,
                                onMouseMove: this.handleMouseMove,
                                onMouseLeave: this.handleMouseLeave,
                                onTouchMove: this.handleTouchMove,
                                onTouchStart: this.handleTouchStart,
                                onTouchEnd: this.handleTouchEnd,
                                onContextMenu: this.handleContextMenu,
                              }));
                        var Gt = (0, Ln._U)(this.props, this.handleOuterEvent);
                        return $t($t({}, Gt), jt);
                      },
                    },
                    {
                      key: "addListener",
                      value: function () {
                        rr.on(dn, this.handleReceiveSyncEvent);
                      },
                    },
                    {
                      key: "removeListener",
                      value: function () {
                        rr.removeListener(dn, this.handleReceiveSyncEvent);
                      },
                    },
                    {
                      key: "filterFormatItem",
                      value: function (oe, se, Ot) {
                        for (
                          var jt = this.state.formattedGraphicalItems,
                            Gt = 0,
                            ee = jt.length;
                          Gt < ee;
                          Gt++
                        ) {
                          var ne = jt[Gt];
                          if (
                            ne.item === oe ||
                            ne.props.key === oe.key ||
                            (se === (0, $.Mn)(ne.item.type) &&
                              Ot === ne.childIndex)
                          )
                            return ne;
                        }
                        return null;
                      },
                    },
                    {
                      key: "renderClipPath",
                      value: function () {
                        var oe = this.clipPathId,
                          se = this.state.offset,
                          Ot = se.left,
                          jt = se.top,
                          Gt = se.height,
                          ee = se.width;
                        return s.createElement(
                          "defs",
                          null,
                          s.createElement(
                            "clipPath",
                            { id: oe },
                            s.createElement("rect", {
                              x: Ot,
                              y: jt,
                              height: Gt,
                              width: ee,
                            }),
                          ),
                        );
                      },
                    },
                    {
                      key: "getXScales",
                      value: function () {
                        var oe = this.state.xAxisMap;
                        return oe
                          ? Object.entries(oe).reduce(function (se, Ot) {
                              var jt = Ti(Ot, 2),
                                Gt = jt[0],
                                ee = jt[1];
                              return $t($t({}, se), {}, Ie({}, Gt, ee.scale));
                            }, {})
                          : null;
                      },
                    },
                    {
                      key: "getYScales",
                      value: function () {
                        var oe = this.state.yAxisMap;
                        return oe
                          ? Object.entries(oe).reduce(function (se, Ot) {
                              var jt = Ti(Ot, 2),
                                Gt = jt[0],
                                ee = jt[1];
                              return $t($t({}, se), {}, Ie({}, Gt, ee.scale));
                            }, {})
                          : null;
                      },
                    },
                    {
                      key: "getXScaleByAxisId",
                      value: function (oe) {
                        var se;
                        return (se = this.state.xAxisMap) === null ||
                          se === void 0 ||
                          (se = se[oe]) === null ||
                          se === void 0
                          ? void 0
                          : se.scale;
                      },
                    },
                    {
                      key: "getYScaleByAxisId",
                      value: function (oe) {
                        var se;
                        return (se = this.state.yAxisMap) === null ||
                          se === void 0 ||
                          (se = se[oe]) === null ||
                          se === void 0
                          ? void 0
                          : se.scale;
                      },
                    },
                    {
                      key: "getItemByXY",
                      value: function (oe) {
                        var se = this.state,
                          Ot = se.formattedGraphicalItems,
                          jt = se.activeItem;
                        if (Ot && Ot.length)
                          for (var Gt = 0, ee = Ot.length; Gt < ee; Gt++) {
                            var ne = Ot[Gt],
                              Ee = ne.props,
                              we = ne.item,
                              Oe =
                                we.type.defaultProps !== void 0
                                  ? $t($t({}, we.type.defaultProps), we.props)
                                  : we.props,
                              Ke = (0, $.Mn)(we.type);
                            if (Ke === "Bar") {
                              var Ne = (Ee.data || []).find(function (Je) {
                                return (0, Mt.J)(oe, Je);
                              });
                              if (Ne) return { graphicalItem: ne, payload: Ne };
                            } else if (Ke === "RadialBar") {
                              var Te = (Ee.data || []).find(function (Je) {
                                return (0, Kn.yy)(oe, Je);
                              });
                              if (Te) return { graphicalItem: ne, payload: Te };
                            } else if (
                              (0, Pr.NE)(ne, jt) ||
                              (0, Pr.nZ)(ne, jt) ||
                              (0, Pr.xQ)(ne, jt)
                            ) {
                              var Fe = (0, Pr.GG)({
                                  graphicalItem: ne,
                                  activeTooltipItem: jt,
                                  itemData: Oe.data,
                                }),
                                $e =
                                  Oe.activeIndex === void 0
                                    ? Fe
                                    : Oe.activeIndex;
                              return {
                                graphicalItem: $t(
                                  $t({}, ne),
                                  {},
                                  { childIndex: $e },
                                ),
                                payload: (0, Pr.xQ)(ne, jt)
                                  ? Oe.data[Fe]
                                  : ne.props.data[Fe],
                              };
                            }
                          }
                        return null;
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var oe = this;
                        if (!(0, $.Me)(this)) return null;
                        var se = this.props,
                          Ot = se.children,
                          jt = se.className,
                          Gt = se.width,
                          ee = se.height,
                          ne = se.style,
                          Ee = se.compact,
                          we = se.title,
                          Oe = se.desc,
                          Ke = St(se, ei),
                          Ne = (0, $.J9)(Ke, !1);
                        if (Ee)
                          return s.createElement(
                            ti.DR,
                            {
                              state: this.state,
                              width: this.props.width,
                              height: this.props.height,
                              clipPathId: this.clipPathId,
                            },
                            s.createElement(
                              Pt.u,
                              kr({}, Ne, {
                                width: Gt,
                                height: ee,
                                title: we,
                                desc: Oe,
                              }),
                              this.renderClipPath(),
                              (0, $.ee)(Ot, this.renderMap),
                            ),
                          );
                        if (this.props.accessibilityLayer) {
                          var Te, Fe;
                          (Ne.tabIndex =
                            (Te = this.props.tabIndex) !== null && Te !== void 0
                              ? Te
                              : 0),
                            (Ne.role =
                              (Fe = this.props.role) !== null && Fe !== void 0
                                ? Fe
                                : "application"),
                            (Ne.onKeyDown = function (Je) {
                              oe.accessibilityManager.keyboardEvent(Je);
                            }),
                            (Ne.onFocus = function () {
                              oe.accessibilityManager.focus();
                            });
                        }
                        var $e = this.parseEventsOfWrapper();
                        return s.createElement(
                          ti.DR,
                          {
                            state: this.state,
                            width: this.props.width,
                            height: this.props.height,
                            clipPathId: this.clipPathId,
                          },
                          s.createElement(
                            "div",
                            kr(
                              {
                                className: (0, V.A)("recharts-wrapper", jt),
                                style: $t(
                                  {
                                    position: "relative",
                                    cursor: "default",
                                    width: Gt,
                                    height: ee,
                                  },
                                  ne,
                                ),
                              },
                              $e,
                              {
                                ref: function (Ge) {
                                  oe.container = Ge;
                                },
                              },
                            ),
                            s.createElement(
                              Pt.u,
                              kr({}, Ne, {
                                width: Gt,
                                height: ee,
                                title: we,
                                desc: Oe,
                                style: ri,
                              }),
                              this.renderClipPath(),
                              (0, $.ee)(Ot, this.renderMap),
                            ),
                            this.renderLegend(),
                            this.renderTooltip(),
                          ),
                        );
                      },
                    },
                  ])
                );
              })(s.Component);
            Ie(Ue, "displayName", A),
              Ie(
                Ue,
                "defaultProps",
                $t(
                  {
                    layout: "horizontal",
                    stackOffset: "none",
                    barCategoryGap: "10%",
                    barGap: 4,
                    margin: { top: 5, right: 5, bottom: 5, left: 5 },
                    reverseStackOrder: !1,
                    syncMethod: "index",
                  },
                  ve,
                ),
              ),
              Ie(Ue, "getDerivedStateFromProps", function (xe, ue) {
                var ye = xe.dataKey,
                  oe = xe.data,
                  se = xe.children,
                  Ot = xe.width,
                  jt = xe.height,
                  Gt = xe.layout,
                  ee = xe.stackOffset,
                  ne = xe.margin,
                  Ee = ue.dataStartIndex,
                  we = ue.dataEndIndex;
                if (ue.updateId === void 0) {
                  var Oe = $r(xe);
                  return $t(
                    $t(
                      $t({}, Oe),
                      {},
                      { updateId: 0 },
                      me($t($t({ props: xe }, Oe), {}, { updateId: 0 }), ue),
                    ),
                    {},
                    {
                      prevDataKey: ye,
                      prevData: oe,
                      prevWidth: Ot,
                      prevHeight: jt,
                      prevLayout: Gt,
                      prevStackOffset: ee,
                      prevMargin: ne,
                      prevChildren: se,
                    },
                  );
                }
                if (
                  ye !== ue.prevDataKey ||
                  oe !== ue.prevData ||
                  Ot !== ue.prevWidth ||
                  jt !== ue.prevHeight ||
                  Gt !== ue.prevLayout ||
                  ee !== ue.prevStackOffset ||
                  !(0, Tr.b)(ne, ue.prevMargin)
                ) {
                  var Ke = $r(xe),
                    Ne = {
                      chartX: ue.chartX,
                      chartY: ue.chartY,
                      isTooltipActive: ue.isTooltipActive,
                    },
                    Te = $t(
                      $t({}, Ui(ue, oe, Gt)),
                      {},
                      { updateId: ue.updateId + 1 },
                    ),
                    Fe = $t($t($t({}, Ke), Ne), Te);
                  return $t(
                    $t($t({}, Fe), me($t({ props: xe }, Fe), ue)),
                    {},
                    {
                      prevDataKey: ye,
                      prevData: oe,
                      prevWidth: Ot,
                      prevHeight: jt,
                      prevLayout: Gt,
                      prevStackOffset: ee,
                      prevMargin: ne,
                      prevChildren: se,
                    },
                  );
                }
                if (!(0, $.OV)(se, ue.prevChildren)) {
                  var $e,
                    Je,
                    Ge,
                    mn,
                    Un = (0, $.BU)(se, l),
                    ke =
                      Un &&
                      ($e =
                        (Je = Un.props) === null || Je === void 0
                          ? void 0
                          : Je.startIndex) !== null &&
                      $e !== void 0
                        ? $e
                        : Ee,
                    sn =
                      Un &&
                      (Ge =
                        (mn = Un.props) === null || mn === void 0
                          ? void 0
                          : mn.endIndex) !== null &&
                      Ge !== void 0
                        ? Ge
                        : we,
                    Bn = ke !== Ee || sn !== we,
                    Hn = !K()(oe),
                    mr = Hn && !Bn ? ue.updateId : ue.updateId + 1;
                  return $t(
                    $t(
                      { updateId: mr },
                      me(
                        $t(
                          $t({ props: xe }, ue),
                          {},
                          {
                            updateId: mr,
                            dataStartIndex: ke,
                            dataEndIndex: sn,
                          },
                        ),
                        ue,
                      ),
                    ),
                    {},
                    { prevChildren: se, dataStartIndex: ke, dataEndIndex: sn },
                  );
                }
                return null;
              }),
              Ie(Ue, "renderActiveDot", function (xe, ue, ye) {
                var oe;
                return (
                  (0, s.isValidElement)(xe)
                    ? (oe = (0, s.cloneElement)(xe, ue))
                    : U()(xe)
                      ? (oe = xe(ue))
                      : (oe = s.createElement(wt.c, ue)),
                  s.createElement(
                    L.W,
                    { className: "recharts-active-dot", key: ye },
                    oe,
                  )
                );
              });
            var Me = (0, s.forwardRef)(function (ue, ye) {
              return s.createElement(Ue, kr({}, ue, { ref: ye }));
            });
            return (Me.displayName = Ue.displayName), Me;
          };
      },
      72040: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { f: () => s });
        var s = function (K) {
          return null;
        };
        s.displayName = "Cell";
      },
      25068: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { J: () => m });
        var s = n(90626),
          rt = n(64609),
          K = n.n(rt),
          q = n(3316),
          U = n.n(q),
          Q = n(97827),
          z = n.n(Q),
          et = n(34164),
          ot = n(34656),
          at = n(93563),
          it = n(96714),
          F = n(90134);
        function dt(c) {
          "@babel/helpers - typeof";
          return (
            (dt =
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
            dt(c)
          );
        }
        var V = ["offset"];
        function pt(c) {
          return Dt(c) || Kt(c) || L(c) || Pt();
        }
        function Pt() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function L(c, o) {
          if (c) {
            if (typeof c == "string") return wt(c, o);
            var p = Object.prototype.toString.call(c).slice(8, -1);
            if (
              (p === "Object" && c.constructor && (p = c.constructor.name),
              p === "Map" || p === "Set")
            )
              return Array.from(c);
            if (
              p === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p)
            )
              return wt(c, o);
          }
        }
        function Kt(c) {
          if (
            (typeof Symbol < "u" && c[Symbol.iterator] != null) ||
            c["@@iterator"] != null
          )
            return Array.from(c);
        }
        function Dt(c) {
          if (Array.isArray(c)) return wt(c);
        }
        function wt(c, o) {
          (o == null || o > c.length) && (o = c.length);
          for (var p = 0, b = new Array(o); p < o; p++) b[p] = c[p];
          return b;
        }
        function Mt(c, o) {
          if (c == null) return {};
          var p = $(c, o),
            b,
            R;
          if (Object.getOwnPropertySymbols) {
            var J = Object.getOwnPropertySymbols(c);
            for (R = 0; R < J.length; R++)
              (b = J[R]),
                !(o.indexOf(b) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(c, b) &&
                  (p[b] = c[b]);
          }
          return p;
        }
        function $(c, o) {
          if (c == null) return {};
          var p = {};
          for (var b in c)
            if (Object.prototype.hasOwnProperty.call(c, b)) {
              if (o.indexOf(b) >= 0) continue;
              p[b] = c[b];
            }
          return p;
        }
        function w(c, o) {
          var p = Object.keys(c);
          if (Object.getOwnPropertySymbols) {
            var b = Object.getOwnPropertySymbols(c);
            o &&
              (b = b.filter(function (R) {
                return Object.getOwnPropertyDescriptor(c, R).enumerable;
              })),
              p.push.apply(p, b);
          }
          return p;
        }
        function M(c) {
          for (var o = 1; o < arguments.length; o++) {
            var p = arguments[o] != null ? arguments[o] : {};
            o % 2
              ? w(Object(p), !0).forEach(function (b) {
                  g(c, b, p[b]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    c,
                    Object.getOwnPropertyDescriptors(p),
                  )
                : w(Object(p)).forEach(function (b) {
                    Object.defineProperty(
                      c,
                      b,
                      Object.getOwnPropertyDescriptor(p, b),
                    );
                  });
          }
          return c;
        }
        function g(c, o, p) {
          return (
            (o = v(o)),
            o in c
              ? Object.defineProperty(c, o, {
                  value: p,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (c[o] = p),
            c
          );
        }
        function v(c) {
          var o = ut(c, "string");
          return dt(o) == "symbol" ? o : o + "";
        }
        function ut(c, o) {
          if (dt(c) != "object" || !c) return c;
          var p = c[Symbol.toPrimitive];
          if (p !== void 0) {
            var b = p.call(c, o || "default");
            if (dt(b) != "object") return b;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (o === "string" ? String : Number)(c);
        }
        function lt() {
          return (
            (lt = Object.assign
              ? Object.assign.bind()
              : function (c) {
                  for (var o = 1; o < arguments.length; o++) {
                    var p = arguments[o];
                    for (var b in p)
                      Object.prototype.hasOwnProperty.call(p, b) &&
                        (c[b] = p[b]);
                  }
                  return c;
                }),
            lt.apply(this, arguments)
          );
        }
        var Nt = function (o) {
            var p = o.value,
              b = o.formatter,
              R = K()(o.children) ? p : o.children;
            return U()(b) ? b(R) : R;
          },
          C = function (o, p) {
            var b = (0, it.sA)(p - o),
              R = Math.min(Math.abs(p - o), 360);
            return b * R;
          },
          B = function (o, p, b) {
            var R = o.position,
              J = o.viewBox,
              Y = o.offset,
              It = o.className,
              Z = J,
              vt = Z.cx,
              ft = Z.cy,
              xt = Z.innerRadius,
              Ut = Z.outerRadius,
              Vt = Z.startAngle,
              ct = Z.endAngle,
              l = Z.clockWise,
              h = (xt + Ut) / 2,
              O = C(Vt, ct),
              f = O >= 0 ? 1 : -1,
              D,
              tt;
            R === "insideStart"
              ? ((D = Vt + f * Y), (tt = l))
              : R === "insideEnd"
                ? ((D = ct - f * Y), (tt = !l))
                : R === "end" && ((D = ct + f * Y), (tt = l)),
              (tt = O <= 0 ? tt : !tt);
            var Et = (0, F.IZ)(vt, ft, h, D),
              Wt = (0, F.IZ)(vt, ft, h, D + (tt ? 1 : -1) * 359),
              Ft = "M"
                .concat(Et.x, ",")
                .concat(
                  Et.y,
                  `
    A`,
                )
                .concat(h, ",")
                .concat(h, ",0,1,")
                .concat(
                  tt ? 0 : 1,
                  `,
    `,
                )
                .concat(Wt.x, ",")
                .concat(Wt.y),
              ie = K()(o.id) ? (0, it.NF)("recharts-radial-line-") : o.id;
            return s.createElement(
              "text",
              lt({}, b, {
                dominantBaseline: "central",
                className: (0, et.A)("recharts-radial-bar-label", It),
              }),
              s.createElement(
                "defs",
                null,
                s.createElement("path", { id: ie, d: Ft }),
              ),
              s.createElement("textPath", { xlinkHref: "#".concat(ie) }, p),
            );
          },
          nt = function (o) {
            var p = o.viewBox,
              b = o.offset,
              R = o.position,
              J = p,
              Y = J.cx,
              It = J.cy,
              Z = J.innerRadius,
              vt = J.outerRadius,
              ft = J.startAngle,
              xt = J.endAngle,
              Ut = (ft + xt) / 2;
            if (R === "outside") {
              var Vt = (0, F.IZ)(Y, It, vt + b, Ut),
                ct = Vt.x,
                l = Vt.y;
              return {
                x: ct,
                y: l,
                textAnchor: ct >= Y ? "start" : "end",
                verticalAnchor: "middle",
              };
            }
            if (R === "center")
              return {
                x: Y,
                y: It,
                textAnchor: "middle",
                verticalAnchor: "middle",
              };
            if (R === "centerTop")
              return {
                x: Y,
                y: It,
                textAnchor: "middle",
                verticalAnchor: "start",
              };
            if (R === "centerBottom")
              return {
                x: Y,
                y: It,
                textAnchor: "middle",
                verticalAnchor: "end",
              };
            var h = (Z + vt) / 2,
              O = (0, F.IZ)(Y, It, h, Ut),
              f = O.x,
              D = O.y;
            return {
              x: f,
              y: D,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          },
          bt = function (o) {
            var p = o.viewBox,
              b = o.parentViewBox,
              R = o.offset,
              J = o.position,
              Y = p,
              It = Y.x,
              Z = Y.y,
              vt = Y.width,
              ft = Y.height,
              xt = ft >= 0 ? 1 : -1,
              Ut = xt * R,
              Vt = xt > 0 ? "end" : "start",
              ct = xt > 0 ? "start" : "end",
              l = vt >= 0 ? 1 : -1,
              h = l * R,
              O = l > 0 ? "end" : "start",
              f = l > 0 ? "start" : "end";
            if (J === "top") {
              var D = {
                x: It + vt / 2,
                y: Z - xt * R,
                textAnchor: "middle",
                verticalAnchor: Vt,
              };
              return M(
                M({}, D),
                b ? { height: Math.max(Z - b.y, 0), width: vt } : {},
              );
            }
            if (J === "bottom") {
              var tt = {
                x: It + vt / 2,
                y: Z + ft + Ut,
                textAnchor: "middle",
                verticalAnchor: ct,
              };
              return M(
                M({}, tt),
                b
                  ? {
                      height: Math.max(b.y + b.height - (Z + ft), 0),
                      width: vt,
                    }
                  : {},
              );
            }
            if (J === "left") {
              var Et = {
                x: It - h,
                y: Z + ft / 2,
                textAnchor: O,
                verticalAnchor: "middle",
              };
              return M(
                M({}, Et),
                b ? { width: Math.max(Et.x - b.x, 0), height: ft } : {},
              );
            }
            if (J === "right") {
              var Wt = {
                x: It + vt + h,
                y: Z + ft / 2,
                textAnchor: f,
                verticalAnchor: "middle",
              };
              return M(
                M({}, Wt),
                b
                  ? { width: Math.max(b.x + b.width - Wt.x, 0), height: ft }
                  : {},
              );
            }
            var Ft = b ? { width: vt, height: ft } : {};
            return J === "insideLeft"
              ? M(
                  {
                    x: It + h,
                    y: Z + ft / 2,
                    textAnchor: f,
                    verticalAnchor: "middle",
                  },
                  Ft,
                )
              : J === "insideRight"
                ? M(
                    {
                      x: It + vt - h,
                      y: Z + ft / 2,
                      textAnchor: O,
                      verticalAnchor: "middle",
                    },
                    Ft,
                  )
                : J === "insideTop"
                  ? M(
                      {
                        x: It + vt / 2,
                        y: Z + Ut,
                        textAnchor: "middle",
                        verticalAnchor: ct,
                      },
                      Ft,
                    )
                  : J === "insideBottom"
                    ? M(
                        {
                          x: It + vt / 2,
                          y: Z + ft - Ut,
                          textAnchor: "middle",
                          verticalAnchor: Vt,
                        },
                        Ft,
                      )
                    : J === "insideTopLeft"
                      ? M(
                          {
                            x: It + h,
                            y: Z + Ut,
                            textAnchor: f,
                            verticalAnchor: ct,
                          },
                          Ft,
                        )
                      : J === "insideTopRight"
                        ? M(
                            {
                              x: It + vt - h,
                              y: Z + Ut,
                              textAnchor: O,
                              verticalAnchor: ct,
                            },
                            Ft,
                          )
                        : J === "insideBottomLeft"
                          ? M(
                              {
                                x: It + h,
                                y: Z + ft - Ut,
                                textAnchor: f,
                                verticalAnchor: Vt,
                              },
                              Ft,
                            )
                          : J === "insideBottomRight"
                            ? M(
                                {
                                  x: It + vt - h,
                                  y: Z + ft - Ut,
                                  textAnchor: O,
                                  verticalAnchor: Vt,
                                },
                                Ft,
                              )
                            : z()(J) &&
                                ((0, it.Et)(J.x) || (0, it._3)(J.x)) &&
                                ((0, it.Et)(J.y) || (0, it._3)(J.y))
                              ? M(
                                  {
                                    x: It + (0, it.F4)(J.x, vt),
                                    y: Z + (0, it.F4)(J.y, ft),
                                    textAnchor: "end",
                                    verticalAnchor: "end",
                                  },
                                  Ft,
                                )
                              : M(
                                  {
                                    x: It + vt / 2,
                                    y: Z + ft / 2,
                                    textAnchor: "middle",
                                    verticalAnchor: "middle",
                                  },
                                  Ft,
                                );
          },
          P = function (o) {
            return "cx" in o && (0, it.Et)(o.cx);
          };
        function m(c) {
          var o = c.offset,
            p = o === void 0 ? 5 : o,
            b = Mt(c, V),
            R = M({ offset: p }, b),
            J = R.viewBox,
            Y = R.position,
            It = R.value,
            Z = R.children,
            vt = R.content,
            ft = R.className,
            xt = ft === void 0 ? "" : ft,
            Ut = R.textBreakAll;
          if (
            !J ||
            (K()(It) && K()(Z) && !(0, s.isValidElement)(vt) && !U()(vt))
          )
            return null;
          if ((0, s.isValidElement)(vt)) return (0, s.cloneElement)(vt, R);
          var Vt;
          if (U()(vt)) {
            if (((Vt = (0, s.createElement)(vt, R)), (0, s.isValidElement)(Vt)))
              return Vt;
          } else Vt = Nt(R);
          var ct = P(J),
            l = (0, at.J9)(R, !0);
          if (ct && (Y === "insideStart" || Y === "insideEnd" || Y === "end"))
            return B(R, Vt, l);
          var h = ct ? nt(R) : bt(R);
          return s.createElement(
            ot.E,
            lt({ className: (0, et.A)("recharts-label", xt) }, l, h, {
              breakAll: Ut,
            }),
            Vt,
          );
        }
        m.displayName = "Label";
        var S = function (o) {
            var p = o.cx,
              b = o.cy,
              R = o.angle,
              J = o.startAngle,
              Y = o.endAngle,
              It = o.r,
              Z = o.radius,
              vt = o.innerRadius,
              ft = o.outerRadius,
              xt = o.x,
              Ut = o.y,
              Vt = o.top,
              ct = o.left,
              l = o.width,
              h = o.height,
              O = o.clockWise,
              f = o.labelViewBox;
            if (f) return f;
            if ((0, it.Et)(l) && (0, it.Et)(h)) {
              if ((0, it.Et)(xt) && (0, it.Et)(Ut))
                return { x: xt, y: Ut, width: l, height: h };
              if ((0, it.Et)(Vt) && (0, it.Et)(ct))
                return { x: Vt, y: ct, width: l, height: h };
            }
            return (0, it.Et)(xt) && (0, it.Et)(Ut)
              ? { x: xt, y: Ut, width: 0, height: 0 }
              : (0, it.Et)(p) && (0, it.Et)(b)
                ? {
                    cx: p,
                    cy: b,
                    startAngle: J || R || 0,
                    endAngle: Y || R || 0,
                    innerRadius: vt || 0,
                    outerRadius: ft || Z || It || 0,
                    clockWise: O,
                  }
                : o.viewBox
                  ? o.viewBox
                  : {};
          },
          _ = function (o, p) {
            return o
              ? o === !0
                ? s.createElement(m, { key: "label-implicit", viewBox: p })
                : (0, it.vh)(o)
                  ? s.createElement(m, {
                      key: "label-implicit",
                      viewBox: p,
                      value: o,
                    })
                  : (0, s.isValidElement)(o)
                    ? o.type === m
                      ? (0, s.cloneElement)(o, {
                          key: "label-implicit",
                          viewBox: p,
                        })
                      : s.createElement(m, {
                          key: "label-implicit",
                          content: o,
                          viewBox: p,
                        })
                    : U()(o)
                      ? s.createElement(m, {
                          key: "label-implicit",
                          content: o,
                          viewBox: p,
                        })
                      : z()(o)
                        ? s.createElement(
                            m,
                            lt({ viewBox: p }, o, { key: "label-implicit" }),
                          )
                        : null
              : null;
          },
          E = function (o, p) {
            var b =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0;
            if (!o || (!o.children && b && !o.label)) return null;
            var R = o.children,
              J = S(o),
              Y = (0, at.aS)(R, m).map(function (Z, vt) {
                return (0, s.cloneElement)(Z, {
                  viewBox: p || J,
                  key: "label-".concat(vt),
                });
              });
            if (!b) return Y;
            var It = _(o.label, p || J);
            return [It].concat(pt(Y));
          };
        (m.parseViewBox = S), (m.renderCallByParent = E);
      },
      12244: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { Z: () => nt });
        var s = n(90626),
          rt = n(64609),
          K = n.n(rt),
          q = n(97827),
          U = n.n(q),
          Q = n(3316),
          z = n.n(Q),
          et = n(73912),
          ot = n.n(et),
          at = n(25068),
          it = n(75055),
          F = n(93563),
          dt = n(24633);
        function V(m) {
          "@babel/helpers - typeof";
          return (
            (V =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (S) {
                    return typeof S;
                  }
                : function (S) {
                    return S &&
                      typeof Symbol == "function" &&
                      S.constructor === Symbol &&
                      S !== Symbol.prototype
                      ? "symbol"
                      : typeof S;
                  }),
            V(m)
          );
        }
        var pt = ["valueAccessor"],
          Pt = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
        function L(m) {
          return Mt(m) || wt(m) || Dt(m) || Kt();
        }
        function Kt() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Dt(m, S) {
          if (m) {
            if (typeof m == "string") return $(m, S);
            var _ = Object.prototype.toString.call(m).slice(8, -1);
            if (
              (_ === "Object" && m.constructor && (_ = m.constructor.name),
              _ === "Map" || _ === "Set")
            )
              return Array.from(m);
            if (
              _ === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
            )
              return $(m, S);
          }
        }
        function wt(m) {
          if (
            (typeof Symbol < "u" && m[Symbol.iterator] != null) ||
            m["@@iterator"] != null
          )
            return Array.from(m);
        }
        function Mt(m) {
          if (Array.isArray(m)) return $(m);
        }
        function $(m, S) {
          (S == null || S > m.length) && (S = m.length);
          for (var _ = 0, E = new Array(S); _ < S; _++) E[_] = m[_];
          return E;
        }
        function w() {
          return (
            (w = Object.assign
              ? Object.assign.bind()
              : function (m) {
                  for (var S = 1; S < arguments.length; S++) {
                    var _ = arguments[S];
                    for (var E in _)
                      Object.prototype.hasOwnProperty.call(_, E) &&
                        (m[E] = _[E]);
                  }
                  return m;
                }),
            w.apply(this, arguments)
          );
        }
        function M(m, S) {
          var _ = Object.keys(m);
          if (Object.getOwnPropertySymbols) {
            var E = Object.getOwnPropertySymbols(m);
            S &&
              (E = E.filter(function (c) {
                return Object.getOwnPropertyDescriptor(m, c).enumerable;
              })),
              _.push.apply(_, E);
          }
          return _;
        }
        function g(m) {
          for (var S = 1; S < arguments.length; S++) {
            var _ = arguments[S] != null ? arguments[S] : {};
            S % 2
              ? M(Object(_), !0).forEach(function (E) {
                  v(m, E, _[E]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    m,
                    Object.getOwnPropertyDescriptors(_),
                  )
                : M(Object(_)).forEach(function (E) {
                    Object.defineProperty(
                      m,
                      E,
                      Object.getOwnPropertyDescriptor(_, E),
                    );
                  });
          }
          return m;
        }
        function v(m, S, _) {
          return (
            (S = ut(S)),
            S in m
              ? Object.defineProperty(m, S, {
                  value: _,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (m[S] = _),
            m
          );
        }
        function ut(m) {
          var S = lt(m, "string");
          return V(S) == "symbol" ? S : S + "";
        }
        function lt(m, S) {
          if (V(m) != "object" || !m) return m;
          var _ = m[Symbol.toPrimitive];
          if (_ !== void 0) {
            var E = _.call(m, S || "default");
            if (V(E) != "object") return E;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (S === "string" ? String : Number)(m);
        }
        function Nt(m, S) {
          if (m == null) return {};
          var _ = C(m, S),
            E,
            c;
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(m);
            for (c = 0; c < o.length; c++)
              (E = o[c]),
                !(S.indexOf(E) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(m, E) &&
                  (_[E] = m[E]);
          }
          return _;
        }
        function C(m, S) {
          if (m == null) return {};
          var _ = {};
          for (var E in m)
            if (Object.prototype.hasOwnProperty.call(m, E)) {
              if (S.indexOf(E) >= 0) continue;
              _[E] = m[E];
            }
          return _;
        }
        var B = function (S) {
          return Array.isArray(S.value) ? ot()(S.value) : S.value;
        };
        function nt(m) {
          var S = m.valueAccessor,
            _ = S === void 0 ? B : S,
            E = Nt(m, pt),
            c = E.data,
            o = E.dataKey,
            p = E.clockWise,
            b = E.id,
            R = E.textBreakAll,
            J = Nt(E, Pt);
          return !c || !c.length
            ? null
            : s.createElement(
                it.W,
                { className: "recharts-label-list" },
                c.map(function (Y, It) {
                  var Z = K()(o) ? _(Y, It) : (0, dt.kr)(Y && Y.payload, o),
                    vt = K()(b) ? {} : { id: "".concat(b, "-").concat(It) };
                  return s.createElement(
                    at.J,
                    w({}, (0, F.J9)(Y, !0), J, vt, {
                      parentViewBox: Y.parentViewBox,
                      value: Z,
                      textBreakAll: R,
                      viewBox: at.J.parseViewBox(
                        K()(p) ? Y : g(g({}, Y), {}, { clockWise: p }),
                      ),
                      key: "label-".concat(It),
                      index: It,
                    }),
                  );
                }),
              );
        }
        nt.displayName = "LabelList";
        function bt(m, S) {
          return m
            ? m === !0
              ? s.createElement(nt, { key: "labelList-implicit", data: S })
              : s.isValidElement(m) || z()(m)
                ? s.createElement(nt, {
                    key: "labelList-implicit",
                    data: S,
                    content: m,
                  })
                : U()(m)
                  ? s.createElement(
                      nt,
                      w({ data: S }, m, { key: "labelList-implicit" }),
                    )
                  : null
            : null;
        }
        function P(m, S) {
          var _ =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          if (!m || (!m.children && _ && !m.label)) return null;
          var E = m.children,
            c = (0, F.aS)(E, nt).map(function (p, b) {
              return (0, s.cloneElement)(p, {
                data: S,
                key: "labelList-".concat(b),
              });
            });
          if (!_) return c;
          var o = bt(m.label, S);
          return [o].concat(L(c));
        }
        nt.renderCallByParent = P;
      },
      75620: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { s: () => Vt });
        var s = n(90626),
          rt = n(3316),
          K = n.n(rt),
          q = n(34164),
          U = n(27664),
          Q = n(67125),
          z = n(17134),
          et = n(43998);
        function ot(ct) {
          "@babel/helpers - typeof";
          return (
            (ot =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (l) {
                    return typeof l;
                  }
                : function (l) {
                    return l &&
                      typeof Symbol == "function" &&
                      l.constructor === Symbol &&
                      l !== Symbol.prototype
                      ? "symbol"
                      : typeof l;
                  }),
            ot(ct)
          );
        }
        function at() {
          return (
            (at = Object.assign
              ? Object.assign.bind()
              : function (ct) {
                  for (var l = 1; l < arguments.length; l++) {
                    var h = arguments[l];
                    for (var O in h)
                      Object.prototype.hasOwnProperty.call(h, O) &&
                        (ct[O] = h[O]);
                  }
                  return ct;
                }),
            at.apply(this, arguments)
          );
        }
        function it(ct, l) {
          var h = Object.keys(ct);
          if (Object.getOwnPropertySymbols) {
            var O = Object.getOwnPropertySymbols(ct);
            l &&
              (O = O.filter(function (f) {
                return Object.getOwnPropertyDescriptor(ct, f).enumerable;
              })),
              h.push.apply(h, O);
          }
          return h;
        }
        function F(ct) {
          for (var l = 1; l < arguments.length; l++) {
            var h = arguments[l] != null ? arguments[l] : {};
            l % 2
              ? it(Object(h), !0).forEach(function (O) {
                  w(ct, O, h[O]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    ct,
                    Object.getOwnPropertyDescriptors(h),
                  )
                : it(Object(h)).forEach(function (O) {
                    Object.defineProperty(
                      ct,
                      O,
                      Object.getOwnPropertyDescriptor(h, O),
                    );
                  });
          }
          return ct;
        }
        function dt(ct, l) {
          if (!(ct instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function V(ct, l) {
          for (var h = 0; h < l.length; h++) {
            var O = l[h];
            (O.enumerable = O.enumerable || !1),
              (O.configurable = !0),
              "value" in O && (O.writable = !0),
              Object.defineProperty(ct, M(O.key), O);
          }
        }
        function pt(ct, l, h) {
          return (
            l && V(ct.prototype, l),
            h && V(ct, h),
            Object.defineProperty(ct, "prototype", { writable: !1 }),
            ct
          );
        }
        function Pt(ct, l, h) {
          return (
            (l = wt(l)),
            L(
              ct,
              Dt()
                ? Reflect.construct(l, h || [], wt(ct).constructor)
                : l.apply(ct, h),
            )
          );
        }
        function L(ct, l) {
          if (l && (ot(l) === "object" || typeof l == "function")) return l;
          if (l !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Kt(ct);
        }
        function Kt(ct) {
          if (ct === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return ct;
        }
        function Dt() {
          try {
            var ct = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Dt = function () {
            return !!ct;
          })();
        }
        function wt(ct) {
          return (
            (wt = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (h) {
                  return h.__proto__ || Object.getPrototypeOf(h);
                }),
            wt(ct)
          );
        }
        function Mt(ct, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (ct.prototype = Object.create(l && l.prototype, {
            constructor: { value: ct, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(ct, "prototype", { writable: !1 }),
            l && $(ct, l);
        }
        function $(ct, l) {
          return (
            ($ = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (O, f) {
                  return (O.__proto__ = f), O;
                }),
            $(ct, l)
          );
        }
        function w(ct, l, h) {
          return (
            (l = M(l)),
            l in ct
              ? Object.defineProperty(ct, l, {
                  value: h,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (ct[l] = h),
            ct
          );
        }
        function M(ct) {
          var l = g(ct, "string");
          return ot(l) == "symbol" ? l : l + "";
        }
        function g(ct, l) {
          if (ot(ct) != "object" || !ct) return ct;
          var h = ct[Symbol.toPrimitive];
          if (h !== void 0) {
            var O = h.call(ct, l || "default");
            if (ot(O) != "object") return O;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (l === "string" ? String : Number)(ct);
        }
        var v = 32,
          ut = (function (ct) {
            function l() {
              return dt(this, l), Pt(this, l, arguments);
            }
            return (
              Mt(l, ct),
              pt(l, [
                {
                  key: "renderIcon",
                  value: function (O) {
                    var f = this.props.inactiveColor,
                      D = v / 2,
                      tt = v / 6,
                      Et = v / 3,
                      Wt = O.inactive ? f : O.color;
                    if (O.type === "plainline")
                      return s.createElement("line", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: Wt,
                        strokeDasharray: O.payload.strokeDasharray,
                        x1: 0,
                        y1: D,
                        x2: v,
                        y2: D,
                        className: "recharts-legend-icon",
                      });
                    if (O.type === "line")
                      return s.createElement("path", {
                        strokeWidth: 4,
                        fill: "none",
                        stroke: Wt,
                        d: "M0,"
                          .concat(D, "h")
                          .concat(
                            Et,
                            `
            A`,
                          )
                          .concat(tt, ",")
                          .concat(tt, ",0,1,1,")
                          .concat(2 * Et, ",")
                          .concat(
                            D,
                            `
            H`,
                          )
                          .concat(v, "M")
                          .concat(2 * Et, ",")
                          .concat(
                            D,
                            `
            A`,
                          )
                          .concat(tt, ",")
                          .concat(tt, ",0,1,1,")
                          .concat(Et, ",")
                          .concat(D),
                        className: "recharts-legend-icon",
                      });
                    if (O.type === "rect")
                      return s.createElement("path", {
                        stroke: "none",
                        fill: Wt,
                        d: "M0,"
                          .concat(v / 8, "h")
                          .concat(v, "v")
                          .concat((v * 3) / 4, "h")
                          .concat(-v, "z"),
                        className: "recharts-legend-icon",
                      });
                    if (s.isValidElement(O.legendIcon)) {
                      var Ft = F({}, O);
                      return (
                        delete Ft.legendIcon, s.cloneElement(O.legendIcon, Ft)
                      );
                    }
                    return s.createElement(z.i, {
                      fill: Wt,
                      cx: D,
                      cy: D,
                      size: v,
                      sizeType: "diameter",
                      type: O.type,
                    });
                  },
                },
                {
                  key: "renderItems",
                  value: function () {
                    var O = this,
                      f = this.props,
                      D = f.payload,
                      tt = f.iconSize,
                      Et = f.layout,
                      Wt = f.formatter,
                      Ft = f.inactiveColor,
                      ie = { x: 0, y: 0, width: v, height: v },
                      k = {
                        display: Et === "horizontal" ? "inline-block" : "block",
                        marginRight: 10,
                      },
                      G = {
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginRight: 4,
                      };
                    return D.map(function (j, yt) {
                      var mt = j.formatter || Wt,
                        kt = (0, q.A)(
                          w(
                            w(
                              { "recharts-legend-item": !0 },
                              "legend-item-".concat(yt),
                              !0,
                            ),
                            "inactive",
                            j.inactive,
                          ),
                        );
                      if (j.type === "none") return null;
                      var Ht = K()(j.value) ? null : j.value;
                      (0, U.R)(
                        !K()(j.value),
                        `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`,
                      );
                      var qt = j.inactive ? Ft : j.color;
                      return s.createElement(
                        "li",
                        at(
                          {
                            className: kt,
                            style: k,
                            key: "legend-item-".concat(yt),
                          },
                          (0, et.XC)(O.props, j, yt),
                        ),
                        s.createElement(
                          Q.u,
                          { width: tt, height: tt, viewBox: ie, style: G },
                          O.renderIcon(j),
                        ),
                        s.createElement(
                          "span",
                          {
                            className: "recharts-legend-item-text",
                            style: { color: qt },
                          },
                          mt ? mt(Ht, j, yt) : Ht,
                        ),
                      );
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var O = this.props,
                      f = O.payload,
                      D = O.layout,
                      tt = O.align;
                    if (!f || !f.length) return null;
                    var Et = {
                      padding: 0,
                      margin: 0,
                      textAlign: D === "horizontal" ? tt : "left",
                    };
                    return s.createElement(
                      "ul",
                      { className: "recharts-default-legend", style: Et },
                      this.renderItems(),
                    );
                  },
                },
              ])
            );
          })(s.PureComponent);
        w(ut, "displayName", "Legend"),
          w(ut, "defaultProps", {
            iconSize: 14,
            layout: "horizontal",
            align: "center",
            verticalAlign: "middle",
            inactiveColor: "#ccc",
          });
        var lt = n(96714),
          Nt = n(43149);
        function C(ct) {
          "@babel/helpers - typeof";
          return (
            (C =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (l) {
                    return typeof l;
                  }
                : function (l) {
                    return l &&
                      typeof Symbol == "function" &&
                      l.constructor === Symbol &&
                      l !== Symbol.prototype
                      ? "symbol"
                      : typeof l;
                  }),
            C(ct)
          );
        }
        var B = ["ref"];
        function nt(ct, l) {
          var h = Object.keys(ct);
          if (Object.getOwnPropertySymbols) {
            var O = Object.getOwnPropertySymbols(ct);
            l &&
              (O = O.filter(function (f) {
                return Object.getOwnPropertyDescriptor(ct, f).enumerable;
              })),
              h.push.apply(h, O);
          }
          return h;
        }
        function bt(ct) {
          for (var l = 1; l < arguments.length; l++) {
            var h = arguments[l] != null ? arguments[l] : {};
            l % 2
              ? nt(Object(h), !0).forEach(function (O) {
                  J(ct, O, h[O]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    ct,
                    Object.getOwnPropertyDescriptors(h),
                  )
                : nt(Object(h)).forEach(function (O) {
                    Object.defineProperty(
                      ct,
                      O,
                      Object.getOwnPropertyDescriptor(h, O),
                    );
                  });
          }
          return ct;
        }
        function P(ct, l) {
          if (!(ct instanceof l))
            throw new TypeError("Cannot call a class as a function");
        }
        function m(ct, l) {
          for (var h = 0; h < l.length; h++) {
            var O = l[h];
            (O.enumerable = O.enumerable || !1),
              (O.configurable = !0),
              "value" in O && (O.writable = !0),
              Object.defineProperty(ct, Y(O.key), O);
          }
        }
        function S(ct, l, h) {
          return (
            l && m(ct.prototype, l),
            h && m(ct, h),
            Object.defineProperty(ct, "prototype", { writable: !1 }),
            ct
          );
        }
        function _(ct, l, h) {
          return (
            (l = p(l)),
            E(
              ct,
              o()
                ? Reflect.construct(l, h || [], p(ct).constructor)
                : l.apply(ct, h),
            )
          );
        }
        function E(ct, l) {
          if (l && (C(l) === "object" || typeof l == "function")) return l;
          if (l !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return c(ct);
        }
        function c(ct) {
          if (ct === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return ct;
        }
        function o() {
          try {
            var ct = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (o = function () {
            return !!ct;
          })();
        }
        function p(ct) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (h) {
                  return h.__proto__ || Object.getPrototypeOf(h);
                }),
            p(ct)
          );
        }
        function b(ct, l) {
          if (typeof l != "function" && l !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (ct.prototype = Object.create(l && l.prototype, {
            constructor: { value: ct, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(ct, "prototype", { writable: !1 }),
            l && R(ct, l);
        }
        function R(ct, l) {
          return (
            (R = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (O, f) {
                  return (O.__proto__ = f), O;
                }),
            R(ct, l)
          );
        }
        function J(ct, l, h) {
          return (
            (l = Y(l)),
            l in ct
              ? Object.defineProperty(ct, l, {
                  value: h,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (ct[l] = h),
            ct
          );
        }
        function Y(ct) {
          var l = It(ct, "string");
          return C(l) == "symbol" ? l : l + "";
        }
        function It(ct, l) {
          if (C(ct) != "object" || !ct) return ct;
          var h = ct[Symbol.toPrimitive];
          if (h !== void 0) {
            var O = h.call(ct, l || "default");
            if (C(O) != "object") return O;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (l === "string" ? String : Number)(ct);
        }
        function Z(ct, l) {
          if (ct == null) return {};
          var h = vt(ct, l),
            O,
            f;
          if (Object.getOwnPropertySymbols) {
            var D = Object.getOwnPropertySymbols(ct);
            for (f = 0; f < D.length; f++)
              (O = D[f]),
                !(l.indexOf(O) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(ct, O) &&
                  (h[O] = ct[O]);
          }
          return h;
        }
        function vt(ct, l) {
          if (ct == null) return {};
          var h = {};
          for (var O in ct)
            if (Object.prototype.hasOwnProperty.call(ct, O)) {
              if (l.indexOf(O) >= 0) continue;
              h[O] = ct[O];
            }
          return h;
        }
        function ft(ct) {
          return ct.value;
        }
        function xt(ct, l) {
          if (s.isValidElement(ct)) return s.cloneElement(ct, l);
          if (typeof ct == "function") return s.createElement(ct, l);
          var h = l.ref,
            O = Z(l, B);
          return s.createElement(ut, O);
        }
        var Ut = 1,
          Vt = (function (ct) {
            function l() {
              var h;
              P(this, l);
              for (
                var O = arguments.length, f = new Array(O), D = 0;
                D < O;
                D++
              )
                f[D] = arguments[D];
              return (
                (h = _(this, l, [].concat(f))),
                J(h, "lastBoundingBox", { width: -1, height: -1 }),
                h
              );
            }
            return (
              b(l, ct),
              S(
                l,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.updateBBox();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function () {
                      this.updateBBox();
                    },
                  },
                  {
                    key: "getBBox",
                    value: function () {
                      if (
                        this.wrapperNode &&
                        this.wrapperNode.getBoundingClientRect
                      ) {
                        var O = this.wrapperNode.getBoundingClientRect();
                        return (
                          (O.height = this.wrapperNode.offsetHeight),
                          (O.width = this.wrapperNode.offsetWidth),
                          O
                        );
                      }
                      return null;
                    },
                  },
                  {
                    key: "updateBBox",
                    value: function () {
                      var O = this.props.onBBoxUpdate,
                        f = this.getBBox();
                      f
                        ? (Math.abs(f.width - this.lastBoundingBox.width) >
                            Ut ||
                            Math.abs(f.height - this.lastBoundingBox.height) >
                              Ut) &&
                          ((this.lastBoundingBox.width = f.width),
                          (this.lastBoundingBox.height = f.height),
                          O && O(f))
                        : (this.lastBoundingBox.width !== -1 ||
                            this.lastBoundingBox.height !== -1) &&
                          ((this.lastBoundingBox.width = -1),
                          (this.lastBoundingBox.height = -1),
                          O && O(null));
                    },
                  },
                  {
                    key: "getBBoxSnapshot",
                    value: function () {
                      return this.lastBoundingBox.width >= 0 &&
                        this.lastBoundingBox.height >= 0
                        ? bt({}, this.lastBoundingBox)
                        : { width: 0, height: 0 };
                    },
                  },
                  {
                    key: "getDefaultPosition",
                    value: function (O) {
                      var f = this.props,
                        D = f.layout,
                        tt = f.align,
                        Et = f.verticalAlign,
                        Wt = f.margin,
                        Ft = f.chartWidth,
                        ie = f.chartHeight,
                        k,
                        G;
                      if (
                        !O ||
                        ((O.left === void 0 || O.left === null) &&
                          (O.right === void 0 || O.right === null))
                      )
                        if (tt === "center" && D === "vertical") {
                          var j = this.getBBoxSnapshot();
                          k = { left: ((Ft || 0) - j.width) / 2 };
                        } else
                          k =
                            tt === "right"
                              ? { right: (Wt && Wt.right) || 0 }
                              : { left: (Wt && Wt.left) || 0 };
                      if (
                        !O ||
                        ((O.top === void 0 || O.top === null) &&
                          (O.bottom === void 0 || O.bottom === null))
                      )
                        if (Et === "middle") {
                          var yt = this.getBBoxSnapshot();
                          G = { top: ((ie || 0) - yt.height) / 2 };
                        } else
                          G =
                            Et === "bottom"
                              ? { bottom: (Wt && Wt.bottom) || 0 }
                              : { top: (Wt && Wt.top) || 0 };
                      return bt(bt({}, k), G);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var O = this,
                        f = this.props,
                        D = f.content,
                        tt = f.width,
                        Et = f.height,
                        Wt = f.wrapperStyle,
                        Ft = f.payloadUniqBy,
                        ie = f.payload,
                        k = bt(
                          bt(
                            {
                              position: "absolute",
                              width: tt || "auto",
                              height: Et || "auto",
                            },
                            this.getDefaultPosition(Wt),
                          ),
                          Wt,
                        );
                      return s.createElement(
                        "div",
                        {
                          className: "recharts-legend-wrapper",
                          style: k,
                          ref: function (j) {
                            O.wrapperNode = j;
                          },
                        },
                        xt(
                          D,
                          bt(
                            bt({}, this.props),
                            {},
                            { payload: (0, Nt.s)(ie, Ft, ft) },
                          ),
                        ),
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getWithHeight",
                    value: function (O, f) {
                      var D = bt(bt({}, this.defaultProps), O.props),
                        tt = D.layout;
                      return tt === "vertical" && (0, lt.Et)(O.props.height)
                        ? { height: O.props.height }
                        : tt === "horizontal"
                          ? { width: O.props.width || f }
                          : null;
                    },
                  },
                ],
              )
            );
          })(s.PureComponent);
        J(Vt, "displayName", "Legend"),
          J(Vt, "defaultProps", {
            iconSize: 14,
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          });
      },
      34656: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { E: () => ct });
        var s = n(90626),
          rt = n(64609),
          K = n.n(rt),
          q = n(34164),
          U = n(96714),
          Q = n(59640),
          z = n(93563),
          et = n(15654);
        function ot(l) {
          "@babel/helpers - typeof";
          return (
            (ot =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (h) {
                    return typeof h;
                  }
                : function (h) {
                    return h &&
                      typeof Symbol == "function" &&
                      h.constructor === Symbol &&
                      h !== Symbol.prototype
                      ? "symbol"
                      : typeof h;
                  }),
            ot(l)
          );
        }
        function at(l, h) {
          return pt(l) || V(l, h) || F(l, h) || it();
        }
        function it() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function F(l, h) {
          if (l) {
            if (typeof l == "string") return dt(l, h);
            var O = Object.prototype.toString.call(l).slice(8, -1);
            if (
              (O === "Object" && l.constructor && (O = l.constructor.name),
              O === "Map" || O === "Set")
            )
              return Array.from(l);
            if (
              O === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)
            )
              return dt(l, h);
          }
        }
        function dt(l, h) {
          (h == null || h > l.length) && (h = l.length);
          for (var O = 0, f = new Array(h); O < h; O++) f[O] = l[O];
          return f;
        }
        function V(l, h) {
          var O =
            l == null
              ? null
              : (typeof Symbol < "u" && l[Symbol.iterator]) || l["@@iterator"];
          if (O != null) {
            var f,
              D,
              tt,
              Et,
              Wt = [],
              Ft = !0,
              ie = !1;
            try {
              if (((tt = (O = O.call(l)).next), h === 0)) {
                if (Object(O) !== O) return;
                Ft = !1;
              } else
                for (
                  ;
                  !(Ft = (f = tt.call(O)).done) &&
                  (Wt.push(f.value), Wt.length !== h);
                  Ft = !0
                );
            } catch (k) {
              (ie = !0), (D = k);
            } finally {
              try {
                if (
                  !Ft &&
                  O.return != null &&
                  ((Et = O.return()), Object(Et) !== Et)
                )
                  return;
              } finally {
                if (ie) throw D;
              }
            }
            return Wt;
          }
        }
        function pt(l) {
          if (Array.isArray(l)) return l;
        }
        function Pt(l, h) {
          if (!(l instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        function L(l, h) {
          for (var O = 0; O < h.length; O++) {
            var f = h[O];
            (f.enumerable = f.enumerable || !1),
              (f.configurable = !0),
              "value" in f && (f.writable = !0),
              Object.defineProperty(l, Dt(f.key), f);
          }
        }
        function Kt(l, h, O) {
          return (
            h && L(l.prototype, h),
            O && L(l, O),
            Object.defineProperty(l, "prototype", { writable: !1 }),
            l
          );
        }
        function Dt(l) {
          var h = wt(l, "string");
          return ot(h) == "symbol" ? h : h + "";
        }
        function wt(l, h) {
          if (ot(l) != "object" || !l) return l;
          var O = l[Symbol.toPrimitive];
          if (O !== void 0) {
            var f = O.call(l, h || "default");
            if (ot(f) != "object") return f;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (h === "string" ? String : Number)(l);
        }
        var Mt = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
          $ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
          w = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
          M = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
          g = {
            cm: 96 / 2.54,
            mm: 96 / 25.4,
            pt: 96 / 72,
            pc: 96 / 6,
            in: 96,
            Q: 96 / (2.54 * 40),
            px: 1,
          },
          v = Object.keys(g),
          ut = "NaN";
        function lt(l, h) {
          return l * g[h];
        }
        var Nt = (function () {
          function l(h, O) {
            Pt(this, l),
              (this.num = h),
              (this.unit = O),
              (this.num = h),
              (this.unit = O),
              Number.isNaN(h) && (this.unit = ""),
              O !== "" && !w.test(O) && ((this.num = NaN), (this.unit = "")),
              v.includes(O) && ((this.num = lt(h, O)), (this.unit = "px"));
          }
          return Kt(
            l,
            [
              {
                key: "add",
                value: function (O) {
                  return this.unit !== O.unit
                    ? new l(NaN, "")
                    : new l(this.num + O.num, this.unit);
                },
              },
              {
                key: "subtract",
                value: function (O) {
                  return this.unit !== O.unit
                    ? new l(NaN, "")
                    : new l(this.num - O.num, this.unit);
                },
              },
              {
                key: "multiply",
                value: function (O) {
                  return this.unit !== "" &&
                    O.unit !== "" &&
                    this.unit !== O.unit
                    ? new l(NaN, "")
                    : new l(this.num * O.num, this.unit || O.unit);
                },
              },
              {
                key: "divide",
                value: function (O) {
                  return this.unit !== "" &&
                    O.unit !== "" &&
                    this.unit !== O.unit
                    ? new l(NaN, "")
                    : new l(this.num / O.num, this.unit || O.unit);
                },
              },
              {
                key: "toString",
                value: function () {
                  return "".concat(this.num).concat(this.unit);
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return Number.isNaN(this.num);
                },
              },
            ],
            [
              {
                key: "parse",
                value: function (O) {
                  var f,
                    D = (f = M.exec(O)) !== null && f !== void 0 ? f : [],
                    tt = at(D, 3),
                    Et = tt[1],
                    Wt = tt[2];
                  return new l(parseFloat(Et), Wt ?? "");
                },
              },
            ],
          );
        })();
        function C(l) {
          if (l.includes(ut)) return ut;
          for (var h = l; h.includes("*") || h.includes("/"); ) {
            var O,
              f = (O = Mt.exec(h)) !== null && O !== void 0 ? O : [],
              D = at(f, 4),
              tt = D[1],
              Et = D[2],
              Wt = D[3],
              Ft = Nt.parse(tt ?? ""),
              ie = Nt.parse(Wt ?? ""),
              k = Et === "*" ? Ft.multiply(ie) : Ft.divide(ie);
            if (k.isNaN()) return ut;
            h = h.replace(Mt, k.toString());
          }
          for (; h.includes("+") || /.-\d+(?:\.\d+)?/.test(h); ) {
            var G,
              j = (G = $.exec(h)) !== null && G !== void 0 ? G : [],
              yt = at(j, 4),
              mt = yt[1],
              kt = yt[2],
              Ht = yt[3],
              qt = Nt.parse(mt ?? ""),
              N = Nt.parse(Ht ?? ""),
              X = kt === "+" ? qt.add(N) : qt.subtract(N);
            if (X.isNaN()) return ut;
            h = h.replace($, X.toString());
          }
          return h;
        }
        var B = /\(([^()]*)\)/;
        function nt(l) {
          for (var h = l; h.includes("("); ) {
            var O = B.exec(h),
              f = at(O, 2),
              D = f[1];
            h = h.replace(B, C(D));
          }
          return h;
        }
        function bt(l) {
          var h = l.replace(/\s+/g, "");
          return (h = nt(h)), (h = C(h)), h;
        }
        function P(l) {
          try {
            return bt(l);
          } catch {
            return ut;
          }
        }
        function m(l) {
          var h = P(l.slice(5, -1));
          return h === ut ? "" : h;
        }
        var S = [
            "x",
            "y",
            "lineHeight",
            "capHeight",
            "scaleToFit",
            "textAnchor",
            "verticalAnchor",
            "fill",
          ],
          _ = ["dx", "dy", "angle", "className", "breakAll"];
        function E() {
          return (
            (E = Object.assign
              ? Object.assign.bind()
              : function (l) {
                  for (var h = 1; h < arguments.length; h++) {
                    var O = arguments[h];
                    for (var f in O)
                      Object.prototype.hasOwnProperty.call(O, f) &&
                        (l[f] = O[f]);
                  }
                  return l;
                }),
            E.apply(this, arguments)
          );
        }
        function c(l, h) {
          if (l == null) return {};
          var O = o(l, h),
            f,
            D;
          if (Object.getOwnPropertySymbols) {
            var tt = Object.getOwnPropertySymbols(l);
            for (D = 0; D < tt.length; D++)
              (f = tt[D]),
                !(h.indexOf(f) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(l, f) &&
                  (O[f] = l[f]);
          }
          return O;
        }
        function o(l, h) {
          if (l == null) return {};
          var O = {};
          for (var f in l)
            if (Object.prototype.hasOwnProperty.call(l, f)) {
              if (h.indexOf(f) >= 0) continue;
              O[f] = l[f];
            }
          return O;
        }
        function p(l, h) {
          return It(l) || Y(l, h) || R(l, h) || b();
        }
        function b() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function R(l, h) {
          if (l) {
            if (typeof l == "string") return J(l, h);
            var O = Object.prototype.toString.call(l).slice(8, -1);
            if (
              (O === "Object" && l.constructor && (O = l.constructor.name),
              O === "Map" || O === "Set")
            )
              return Array.from(l);
            if (
              O === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)
            )
              return J(l, h);
          }
        }
        function J(l, h) {
          (h == null || h > l.length) && (h = l.length);
          for (var O = 0, f = new Array(h); O < h; O++) f[O] = l[O];
          return f;
        }
        function Y(l, h) {
          var O =
            l == null
              ? null
              : (typeof Symbol < "u" && l[Symbol.iterator]) || l["@@iterator"];
          if (O != null) {
            var f,
              D,
              tt,
              Et,
              Wt = [],
              Ft = !0,
              ie = !1;
            try {
              if (((tt = (O = O.call(l)).next), h === 0)) {
                if (Object(O) !== O) return;
                Ft = !1;
              } else
                for (
                  ;
                  !(Ft = (f = tt.call(O)).done) &&
                  (Wt.push(f.value), Wt.length !== h);
                  Ft = !0
                );
            } catch (k) {
              (ie = !0), (D = k);
            } finally {
              try {
                if (
                  !Ft &&
                  O.return != null &&
                  ((Et = O.return()), Object(Et) !== Et)
                )
                  return;
              } finally {
                if (ie) throw D;
              }
            }
            return Wt;
          }
        }
        function It(l) {
          if (Array.isArray(l)) return l;
        }
        var Z = /[ \f\n\r\t\v\u2028\u2029]+/,
          vt = function (h) {
            var O = h.children,
              f = h.breakAll,
              D = h.style;
            try {
              var tt = [];
              K()(O) ||
                (f
                  ? (tt = O.toString().split(""))
                  : (tt = O.toString().split(Z)));
              var Et = tt.map(function (Ft) {
                  return { word: Ft, width: (0, et.Pu)(Ft, D).width };
                }),
                Wt = f ? 0 : (0, et.Pu)("\xA0", D).width;
              return { wordsWithComputedWidth: Et, spaceWidth: Wt };
            } catch {
              return null;
            }
          },
          ft = function (h, O, f, D, tt) {
            var Et = h.maxLines,
              Wt = h.children,
              Ft = h.style,
              ie = h.breakAll,
              k = (0, U.Et)(Et),
              G = Wt,
              j = function () {
                var on =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : [];
                return on.reduce(function (un, tn) {
                  var bn = tn.word,
                    Mn = tn.width,
                    _n = un[un.length - 1];
                  if (_n && (D == null || tt || _n.width + Mn + f < Number(D)))
                    _n.words.push(bn), (_n.width += Mn + f);
                  else {
                    var jn = { words: [bn], width: Mn };
                    un.push(jn);
                  }
                  return un;
                }, []);
              },
              yt = j(O),
              mt = function (on) {
                return on.reduce(function (un, tn) {
                  return un.width > tn.width ? un : tn;
                });
              };
            if (!k) return yt;
            for (
              var kt = "\u2026",
                Ht = function (on) {
                  var un = G.slice(0, on),
                    tn = vt({
                      breakAll: ie,
                      style: Ft,
                      children: un + kt,
                    }).wordsWithComputedWidth,
                    bn = j(tn),
                    Mn = bn.length > Et || mt(bn).width > Number(D);
                  return [Mn, bn];
                },
                qt = 0,
                N = G.length - 1,
                X = 0,
                _t;
              qt <= N && X <= G.length - 1;
            ) {
              var At = Math.floor((qt + N) / 2),
                Zt = At - 1,
                Be = Ht(Zt),
                Le = p(Be, 2),
                Pe = Le[0],
                Ce = Le[1],
                We = Ht(At),
                je = p(We, 1),
                Ye = je[0];
              if (
                (!Pe && !Ye && (qt = At + 1),
                Pe && Ye && (N = At - 1),
                !Pe && Ye)
              ) {
                _t = Ce;
                break;
              }
              X++;
            }
            return _t || yt;
          },
          xt = function (h) {
            var O = K()(h) ? [] : h.toString().split(Z);
            return [{ words: O }];
          },
          Ut = function (h) {
            var O = h.width,
              f = h.scaleToFit,
              D = h.children,
              tt = h.style,
              Et = h.breakAll,
              Wt = h.maxLines;
            if ((O || f) && !Q.m.isSsr) {
              var Ft,
                ie,
                k = vt({ breakAll: Et, children: D, style: tt });
              if (k) {
                var G = k.wordsWithComputedWidth,
                  j = k.spaceWidth;
                (Ft = G), (ie = j);
              } else return xt(D);
              return ft(
                { breakAll: Et, children: D, maxLines: Wt, style: tt },
                Ft,
                ie,
                O,
                f,
              );
            }
            return xt(D);
          },
          Vt = "#808080",
          ct = function (h) {
            var O = h.x,
              f = O === void 0 ? 0 : O,
              D = h.y,
              tt = D === void 0 ? 0 : D,
              Et = h.lineHeight,
              Wt = Et === void 0 ? "1em" : Et,
              Ft = h.capHeight,
              ie = Ft === void 0 ? "0.71em" : Ft,
              k = h.scaleToFit,
              G = k === void 0 ? !1 : k,
              j = h.textAnchor,
              yt = j === void 0 ? "start" : j,
              mt = h.verticalAnchor,
              kt = mt === void 0 ? "end" : mt,
              Ht = h.fill,
              qt = Ht === void 0 ? Vt : Ht,
              N = c(h, S),
              X = (0, s.useMemo)(
                function () {
                  return Ut({
                    breakAll: N.breakAll,
                    children: N.children,
                    maxLines: N.maxLines,
                    scaleToFit: G,
                    style: N.style,
                    width: N.width,
                  });
                },
                [N.breakAll, N.children, N.maxLines, G, N.style, N.width],
              ),
              _t = N.dx,
              At = N.dy,
              Zt = N.angle,
              Be = N.className,
              Le = N.breakAll,
              Pe = c(N, _);
            if (!(0, U.vh)(f) || !(0, U.vh)(tt)) return null;
            var Ce = f + ((0, U.Et)(_t) ? _t : 0),
              We = tt + ((0, U.Et)(At) ? At : 0),
              je;
            switch (kt) {
              case "start":
                je = m("calc(".concat(ie, ")"));
                break;
              case "middle":
                je = m(
                  "calc("
                    .concat((X.length - 1) / 2, " * -")
                    .concat(Wt, " + (")
                    .concat(ie, " / 2))"),
                );
                break;
              default:
                je = m("calc(".concat(X.length - 1, " * -").concat(Wt, ")"));
                break;
            }
            var Ye = [];
            if (G) {
              var qe = X[0].width,
                on = N.width;
              Ye.push("scale(".concat(((0, U.Et)(on) ? on / qe : 1) / qe, ")"));
            }
            return (
              Zt &&
                Ye.push(
                  "rotate(".concat(Zt, ", ").concat(Ce, ", ").concat(We, ")"),
                ),
              Ye.length && (Pe.transform = Ye.join(" ")),
              s.createElement(
                "text",
                E({}, (0, z.J9)(Pe, !0), {
                  x: Ce,
                  y: We,
                  className: (0, q.A)("recharts-text", Be),
                  textAnchor: yt,
                  fill: qt.includes("url") ? Vt : qt,
                }),
                X.map(function (un, tn) {
                  var bn = un.words.join(Le ? "" : " ");
                  return s.createElement(
                    "tspan",
                    {
                      x: Ce,
                      dy: tn === 0 ? je : Wt,
                      key: "".concat(bn, "-").concat(tn),
                    },
                    bn,
                  );
                }),
              )
            );
          };
      },
      30230: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { m: () => qt });
        var s = n(90626),
          rt = n(20206),
          K = n.n(rt),
          q = n(64609),
          U = n.n(q),
          Q = n(34164),
          z = n(96714);
        function et(N) {
          "@babel/helpers - typeof";
          return (
            (et =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (X) {
                    return typeof X;
                  }
                : function (X) {
                    return X &&
                      typeof Symbol == "function" &&
                      X.constructor === Symbol &&
                      X !== Symbol.prototype
                      ? "symbol"
                      : typeof X;
                  }),
            et(N)
          );
        }
        function ot() {
          return (
            (ot = Object.assign
              ? Object.assign.bind()
              : function (N) {
                  for (var X = 1; X < arguments.length; X++) {
                    var _t = arguments[X];
                    for (var At in _t)
                      Object.prototype.hasOwnProperty.call(_t, At) &&
                        (N[At] = _t[At]);
                  }
                  return N;
                }),
            ot.apply(this, arguments)
          );
        }
        function at(N, X) {
          return pt(N) || V(N, X) || F(N, X) || it();
        }
        function it() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function F(N, X) {
          if (N) {
            if (typeof N == "string") return dt(N, X);
            var _t = Object.prototype.toString.call(N).slice(8, -1);
            if (
              (_t === "Object" && N.constructor && (_t = N.constructor.name),
              _t === "Map" || _t === "Set")
            )
              return Array.from(N);
            if (
              _t === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_t)
            )
              return dt(N, X);
          }
        }
        function dt(N, X) {
          (X == null || X > N.length) && (X = N.length);
          for (var _t = 0, At = new Array(X); _t < X; _t++) At[_t] = N[_t];
          return At;
        }
        function V(N, X) {
          var _t =
            N == null
              ? null
              : (typeof Symbol < "u" && N[Symbol.iterator]) || N["@@iterator"];
          if (_t != null) {
            var At,
              Zt,
              Be,
              Le,
              Pe = [],
              Ce = !0,
              We = !1;
            try {
              if (((Be = (_t = _t.call(N)).next), X === 0)) {
                if (Object(_t) !== _t) return;
                Ce = !1;
              } else
                for (
                  ;
                  !(Ce = (At = Be.call(_t)).done) &&
                  (Pe.push(At.value), Pe.length !== X);
                  Ce = !0
                );
            } catch (je) {
              (We = !0), (Zt = je);
            } finally {
              try {
                if (
                  !Ce &&
                  _t.return != null &&
                  ((Le = _t.return()), Object(Le) !== Le)
                )
                  return;
              } finally {
                if (We) throw Zt;
              }
            }
            return Pe;
          }
        }
        function pt(N) {
          if (Array.isArray(N)) return N;
        }
        function Pt(N, X) {
          var _t = Object.keys(N);
          if (Object.getOwnPropertySymbols) {
            var At = Object.getOwnPropertySymbols(N);
            X &&
              (At = At.filter(function (Zt) {
                return Object.getOwnPropertyDescriptor(N, Zt).enumerable;
              })),
              _t.push.apply(_t, At);
          }
          return _t;
        }
        function L(N) {
          for (var X = 1; X < arguments.length; X++) {
            var _t = arguments[X] != null ? arguments[X] : {};
            X % 2
              ? Pt(Object(_t), !0).forEach(function (At) {
                  Kt(N, At, _t[At]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    N,
                    Object.getOwnPropertyDescriptors(_t),
                  )
                : Pt(Object(_t)).forEach(function (At) {
                    Object.defineProperty(
                      N,
                      At,
                      Object.getOwnPropertyDescriptor(_t, At),
                    );
                  });
          }
          return N;
        }
        function Kt(N, X, _t) {
          return (
            (X = Dt(X)),
            X in N
              ? Object.defineProperty(N, X, {
                  value: _t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (N[X] = _t),
            N
          );
        }
        function Dt(N) {
          var X = wt(N, "string");
          return et(X) == "symbol" ? X : X + "";
        }
        function wt(N, X) {
          if (et(N) != "object" || !N) return N;
          var _t = N[Symbol.toPrimitive];
          if (_t !== void 0) {
            var At = _t.call(N, X || "default");
            if (et(At) != "object") return At;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (X === "string" ? String : Number)(N);
        }
        function Mt(N) {
          return Array.isArray(N) && (0, z.vh)(N[0]) && (0, z.vh)(N[1])
            ? N.join(" ~ ")
            : N;
        }
        var $ = function (X) {
          var _t = X.separator,
            At = _t === void 0 ? " : " : _t,
            Zt = X.contentStyle,
            Be = Zt === void 0 ? {} : Zt,
            Le = X.itemStyle,
            Pe = Le === void 0 ? {} : Le,
            Ce = X.labelStyle,
            We = Ce === void 0 ? {} : Ce,
            je = X.payload,
            Ye = X.formatter,
            qe = X.itemSorter,
            on = X.wrapperClassName,
            un = X.labelClassName,
            tn = X.label,
            bn = X.labelFormatter,
            Mn = X.accessibilityLayer,
            _n = Mn === void 0 ? !1 : Mn,
            jn = function () {
              if (je && je.length) {
                var br = { padding: 0, margin: 0 },
                  Jr = (qe ? K()(je, qe) : je).map(function (Fn, er) {
                    if (Fn.type === "none") return null;
                    var Br = L(
                        {
                          display: "block",
                          paddingTop: 4,
                          paddingBottom: 4,
                          color: Fn.color || "#000",
                        },
                        Pe,
                      ),
                      $n = Fn.formatter || Ye || Mt,
                      zn = Fn.value,
                      Kn = Fn.name,
                      Tr = zn,
                      nr = Kn;
                    if ($n && Tr != null && nr != null) {
                      var xr = $n(zn, Kn, Fn, er, je);
                      if (Array.isArray(xr)) {
                        var rr = at(xr, 2);
                        (Tr = rr[0]), (nr = rr[1]);
                      } else Tr = xr;
                    }
                    return s.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(er),
                        style: Br,
                      },
                      (0, z.vh)(nr)
                        ? s.createElement(
                            "span",
                            { className: "recharts-tooltip-item-name" },
                            nr,
                          )
                        : null,
                      (0, z.vh)(nr)
                        ? s.createElement(
                            "span",
                            { className: "recharts-tooltip-item-separator" },
                            At,
                          )
                        : null,
                      s.createElement(
                        "span",
                        { className: "recharts-tooltip-item-value" },
                        Tr,
                      ),
                      s.createElement(
                        "span",
                        { className: "recharts-tooltip-item-unit" },
                        Fn.unit || "",
                      ),
                    );
                  });
                return s.createElement(
                  "ul",
                  { className: "recharts-tooltip-item-list", style: br },
                  Jr,
                );
              }
              return null;
            },
            Wn = L(
              {
                margin: 0,
                padding: 10,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                whiteSpace: "nowrap",
              },
              Be,
            ),
            Nn = L({ margin: 0 }, We),
            In = !U()(tn),
            Rn = In ? tn : "",
            Zn = (0, Q.A)("recharts-default-tooltip", on),
            fr = (0, Q.A)("recharts-tooltip-label", un);
          In && bn && je !== void 0 && je !== null && (Rn = bn(tn, je));
          var dr = _n ? { role: "status", "aria-live": "assertive" } : {};
          return s.createElement(
            "div",
            ot({ className: Zn, style: Wn }, dr),
            s.createElement(
              "p",
              { className: fr, style: Nn },
              s.isValidElement(Rn) ? Rn : "".concat(Rn),
            ),
            jn(),
          );
        };
        function w(N) {
          "@babel/helpers - typeof";
          return (
            (w =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (X) {
                    return typeof X;
                  }
                : function (X) {
                    return X &&
                      typeof Symbol == "function" &&
                      X.constructor === Symbol &&
                      X !== Symbol.prototype
                      ? "symbol"
                      : typeof X;
                  }),
            w(N)
          );
        }
        function M(N, X, _t) {
          return (
            (X = g(X)),
            X in N
              ? Object.defineProperty(N, X, {
                  value: _t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (N[X] = _t),
            N
          );
        }
        function g(N) {
          var X = v(N, "string");
          return w(X) == "symbol" ? X : X + "";
        }
        function v(N, X) {
          if (w(N) != "object" || !N) return N;
          var _t = N[Symbol.toPrimitive];
          if (_t !== void 0) {
            var At = _t.call(N, X || "default");
            if (w(At) != "object") return At;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (X === "string" ? String : Number)(N);
        }
        var ut = "recharts-tooltip-wrapper",
          lt = { visibility: "hidden" };
        function Nt(N) {
          var X = N.coordinate,
            _t = N.translateX,
            At = N.translateY;
          return (0, Q.A)(
            ut,
            M(
              M(
                M(
                  M(
                    {},
                    "".concat(ut, "-right"),
                    (0, z.Et)(_t) && X && (0, z.Et)(X.x) && _t >= X.x,
                  ),
                  "".concat(ut, "-left"),
                  (0, z.Et)(_t) && X && (0, z.Et)(X.x) && _t < X.x,
                ),
                "".concat(ut, "-bottom"),
                (0, z.Et)(At) && X && (0, z.Et)(X.y) && At >= X.y,
              ),
              "".concat(ut, "-top"),
              (0, z.Et)(At) && X && (0, z.Et)(X.y) && At < X.y,
            ),
          );
        }
        function C(N) {
          var X = N.allowEscapeViewBox,
            _t = N.coordinate,
            At = N.key,
            Zt = N.offsetTopLeft,
            Be = N.position,
            Le = N.reverseDirection,
            Pe = N.tooltipDimension,
            Ce = N.viewBox,
            We = N.viewBoxDimension;
          if (Be && (0, z.Et)(Be[At])) return Be[At];
          var je = _t[At] - Pe - Zt,
            Ye = _t[At] + Zt;
          if (X[At]) return Le[At] ? je : Ye;
          if (Le[At]) {
            var qe = je,
              on = Ce[At];
            return qe < on ? Math.max(Ye, Ce[At]) : Math.max(je, Ce[At]);
          }
          var un = Ye + Pe,
            tn = Ce[At] + We;
          return un > tn ? Math.max(je, Ce[At]) : Math.max(Ye, Ce[At]);
        }
        function B(N) {
          var X = N.translateX,
            _t = N.translateY,
            At = N.useTranslate3d;
          return {
            transform: At
              ? "translate3d(".concat(X, "px, ").concat(_t, "px, 0)")
              : "translate(".concat(X, "px, ").concat(_t, "px)"),
          };
        }
        function nt(N) {
          var X = N.allowEscapeViewBox,
            _t = N.coordinate,
            At = N.offsetTopLeft,
            Zt = N.position,
            Be = N.reverseDirection,
            Le = N.tooltipBox,
            Pe = N.useTranslate3d,
            Ce = N.viewBox,
            We,
            je,
            Ye;
          return (
            Le.height > 0 && Le.width > 0 && _t
              ? ((je = C({
                  allowEscapeViewBox: X,
                  coordinate: _t,
                  key: "x",
                  offsetTopLeft: At,
                  position: Zt,
                  reverseDirection: Be,
                  tooltipDimension: Le.width,
                  viewBox: Ce,
                  viewBoxDimension: Ce.width,
                })),
                (Ye = C({
                  allowEscapeViewBox: X,
                  coordinate: _t,
                  key: "y",
                  offsetTopLeft: At,
                  position: Zt,
                  reverseDirection: Be,
                  tooltipDimension: Le.height,
                  viewBox: Ce,
                  viewBoxDimension: Ce.height,
                })),
                (We = B({
                  translateX: je,
                  translateY: Ye,
                  useTranslate3d: Pe,
                })))
              : (We = lt),
            {
              cssProperties: We,
              cssClasses: Nt({
                translateX: je,
                translateY: Ye,
                coordinate: _t,
              }),
            }
          );
        }
        function bt(N) {
          "@babel/helpers - typeof";
          return (
            (bt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (X) {
                    return typeof X;
                  }
                : function (X) {
                    return X &&
                      typeof Symbol == "function" &&
                      X.constructor === Symbol &&
                      X !== Symbol.prototype
                      ? "symbol"
                      : typeof X;
                  }),
            bt(N)
          );
        }
        function P(N, X) {
          var _t = Object.keys(N);
          if (Object.getOwnPropertySymbols) {
            var At = Object.getOwnPropertySymbols(N);
            X &&
              (At = At.filter(function (Zt) {
                return Object.getOwnPropertyDescriptor(N, Zt).enumerable;
              })),
              _t.push.apply(_t, At);
          }
          return _t;
        }
        function m(N) {
          for (var X = 1; X < arguments.length; X++) {
            var _t = arguments[X] != null ? arguments[X] : {};
            X % 2
              ? P(Object(_t), !0).forEach(function (At) {
                  It(N, At, _t[At]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    N,
                    Object.getOwnPropertyDescriptors(_t),
                  )
                : P(Object(_t)).forEach(function (At) {
                    Object.defineProperty(
                      N,
                      At,
                      Object.getOwnPropertyDescriptor(_t, At),
                    );
                  });
          }
          return N;
        }
        function S(N, X) {
          if (!(N instanceof X))
            throw new TypeError("Cannot call a class as a function");
        }
        function _(N, X) {
          for (var _t = 0; _t < X.length; _t++) {
            var At = X[_t];
            (At.enumerable = At.enumerable || !1),
              (At.configurable = !0),
              "value" in At && (At.writable = !0),
              Object.defineProperty(N, Z(At.key), At);
          }
        }
        function E(N, X, _t) {
          return (
            X && _(N.prototype, X),
            _t && _(N, _t),
            Object.defineProperty(N, "prototype", { writable: !1 }),
            N
          );
        }
        function c(N, X, _t) {
          return (
            (X = R(X)),
            o(
              N,
              b()
                ? Reflect.construct(X, _t || [], R(N).constructor)
                : X.apply(N, _t),
            )
          );
        }
        function o(N, X) {
          if (X && (bt(X) === "object" || typeof X == "function")) return X;
          if (X !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return p(N);
        }
        function p(N) {
          if (N === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return N;
        }
        function b() {
          try {
            var N = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (b = function () {
            return !!N;
          })();
        }
        function R(N) {
          return (
            (R = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (_t) {
                  return _t.__proto__ || Object.getPrototypeOf(_t);
                }),
            R(N)
          );
        }
        function J(N, X) {
          if (typeof X != "function" && X !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (N.prototype = Object.create(X && X.prototype, {
            constructor: { value: N, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(N, "prototype", { writable: !1 }),
            X && Y(N, X);
        }
        function Y(N, X) {
          return (
            (Y = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (At, Zt) {
                  return (At.__proto__ = Zt), At;
                }),
            Y(N, X)
          );
        }
        function It(N, X, _t) {
          return (
            (X = Z(X)),
            X in N
              ? Object.defineProperty(N, X, {
                  value: _t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (N[X] = _t),
            N
          );
        }
        function Z(N) {
          var X = vt(N, "string");
          return bt(X) == "symbol" ? X : X + "";
        }
        function vt(N, X) {
          if (bt(N) != "object" || !N) return N;
          var _t = N[Symbol.toPrimitive];
          if (_t !== void 0) {
            var At = _t.call(N, X || "default");
            if (bt(At) != "object") return At;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (X === "string" ? String : Number)(N);
        }
        var ft = 1,
          xt = (function (N) {
            function X() {
              var _t;
              S(this, X);
              for (
                var At = arguments.length, Zt = new Array(At), Be = 0;
                Be < At;
                Be++
              )
                Zt[Be] = arguments[Be];
              return (
                (_t = c(this, X, [].concat(Zt))),
                It(_t, "state", {
                  dismissed: !1,
                  dismissedAtCoordinate: { x: 0, y: 0 },
                  lastBoundingBox: { width: -1, height: -1 },
                }),
                It(_t, "handleKeyDown", function (Le) {
                  if (Le.key === "Escape") {
                    var Pe, Ce, We, je;
                    _t.setState({
                      dismissed: !0,
                      dismissedAtCoordinate: {
                        x:
                          (Pe =
                            (Ce = _t.props.coordinate) === null || Ce === void 0
                              ? void 0
                              : Ce.x) !== null && Pe !== void 0
                            ? Pe
                            : 0,
                        y:
                          (We =
                            (je = _t.props.coordinate) === null || je === void 0
                              ? void 0
                              : je.y) !== null && We !== void 0
                            ? We
                            : 0,
                      },
                    });
                  }
                }),
                _t
              );
            }
            return (
              J(X, N),
              E(X, [
                {
                  key: "updateBBox",
                  value: function () {
                    if (
                      this.wrapperNode &&
                      this.wrapperNode.getBoundingClientRect
                    ) {
                      var At = this.wrapperNode.getBoundingClientRect();
                      (Math.abs(At.width - this.state.lastBoundingBox.width) >
                        ft ||
                        Math.abs(
                          At.height - this.state.lastBoundingBox.height,
                        ) > ft) &&
                        this.setState({
                          lastBoundingBox: {
                            width: At.width,
                            height: At.height,
                          },
                        });
                    } else
                      (this.state.lastBoundingBox.width !== -1 ||
                        this.state.lastBoundingBox.height !== -1) &&
                        this.setState({
                          lastBoundingBox: { width: -1, height: -1 },
                        });
                  },
                },
                {
                  key: "componentDidMount",
                  value: function () {
                    document.addEventListener("keydown", this.handleKeyDown),
                      this.updateBBox();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    document.removeEventListener("keydown", this.handleKeyDown);
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var At, Zt;
                    this.props.active && this.updateBBox(),
                      this.state.dismissed &&
                        (((At = this.props.coordinate) === null || At === void 0
                          ? void 0
                          : At.x) !== this.state.dismissedAtCoordinate.x ||
                          ((Zt = this.props.coordinate) === null ||
                          Zt === void 0
                            ? void 0
                            : Zt.y) !== this.state.dismissedAtCoordinate.y) &&
                        (this.state.dismissed = !1);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var At = this,
                      Zt = this.props,
                      Be = Zt.active,
                      Le = Zt.allowEscapeViewBox,
                      Pe = Zt.animationDuration,
                      Ce = Zt.animationEasing,
                      We = Zt.children,
                      je = Zt.coordinate,
                      Ye = Zt.hasPayload,
                      qe = Zt.isAnimationActive,
                      on = Zt.offset,
                      un = Zt.position,
                      tn = Zt.reverseDirection,
                      bn = Zt.useTranslate3d,
                      Mn = Zt.viewBox,
                      _n = Zt.wrapperStyle,
                      jn = nt({
                        allowEscapeViewBox: Le,
                        coordinate: je,
                        offsetTopLeft: on,
                        position: un,
                        reverseDirection: tn,
                        tooltipBox: this.state.lastBoundingBox,
                        useTranslate3d: bn,
                        viewBox: Mn,
                      }),
                      Wn = jn.cssClasses,
                      Nn = jn.cssProperties,
                      In = m(
                        m(
                          {
                            transition:
                              qe && Be
                                ? "transform ".concat(Pe, "ms ").concat(Ce)
                                : void 0,
                          },
                          Nn,
                        ),
                        {},
                        {
                          pointerEvents: "none",
                          visibility:
                            !this.state.dismissed && Be && Ye
                              ? "visible"
                              : "hidden",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        },
                        _n,
                      );
                    return s.createElement(
                      "div",
                      {
                        tabIndex: -1,
                        className: Wn,
                        style: In,
                        ref: function (Zn) {
                          At.wrapperNode = Zn;
                        },
                      },
                      We,
                    );
                  },
                },
              ])
            );
          })(s.PureComponent),
          Ut = n(59640),
          Vt = n(43149);
        function ct(N) {
          "@babel/helpers - typeof";
          return (
            (ct =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (X) {
                    return typeof X;
                  }
                : function (X) {
                    return X &&
                      typeof Symbol == "function" &&
                      X.constructor === Symbol &&
                      X !== Symbol.prototype
                      ? "symbol"
                      : typeof X;
                  }),
            ct(N)
          );
        }
        function l(N, X) {
          var _t = Object.keys(N);
          if (Object.getOwnPropertySymbols) {
            var At = Object.getOwnPropertySymbols(N);
            X &&
              (At = At.filter(function (Zt) {
                return Object.getOwnPropertyDescriptor(N, Zt).enumerable;
              })),
              _t.push.apply(_t, At);
          }
          return _t;
        }
        function h(N) {
          for (var X = 1; X < arguments.length; X++) {
            var _t = arguments[X] != null ? arguments[X] : {};
            X % 2
              ? l(Object(_t), !0).forEach(function (At) {
                  j(N, At, _t[At]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    N,
                    Object.getOwnPropertyDescriptors(_t),
                  )
                : l(Object(_t)).forEach(function (At) {
                    Object.defineProperty(
                      N,
                      At,
                      Object.getOwnPropertyDescriptor(_t, At),
                    );
                  });
          }
          return N;
        }
        function O(N, X) {
          if (!(N instanceof X))
            throw new TypeError("Cannot call a class as a function");
        }
        function f(N, X) {
          for (var _t = 0; _t < X.length; _t++) {
            var At = X[_t];
            (At.enumerable = At.enumerable || !1),
              (At.configurable = !0),
              "value" in At && (At.writable = !0),
              Object.defineProperty(N, yt(At.key), At);
          }
        }
        function D(N, X, _t) {
          return (
            X && f(N.prototype, X),
            _t && f(N, _t),
            Object.defineProperty(N, "prototype", { writable: !1 }),
            N
          );
        }
        function tt(N, X, _t) {
          return (
            (X = ie(X)),
            Et(
              N,
              Ft()
                ? Reflect.construct(X, _t || [], ie(N).constructor)
                : X.apply(N, _t),
            )
          );
        }
        function Et(N, X) {
          if (X && (ct(X) === "object" || typeof X == "function")) return X;
          if (X !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Wt(N);
        }
        function Wt(N) {
          if (N === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return N;
        }
        function Ft() {
          try {
            var N = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (Ft = function () {
            return !!N;
          })();
        }
        function ie(N) {
          return (
            (ie = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (_t) {
                  return _t.__proto__ || Object.getPrototypeOf(_t);
                }),
            ie(N)
          );
        }
        function k(N, X) {
          if (typeof X != "function" && X !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (N.prototype = Object.create(X && X.prototype, {
            constructor: { value: N, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(N, "prototype", { writable: !1 }),
            X && G(N, X);
        }
        function G(N, X) {
          return (
            (G = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (At, Zt) {
                  return (At.__proto__ = Zt), At;
                }),
            G(N, X)
          );
        }
        function j(N, X, _t) {
          return (
            (X = yt(X)),
            X in N
              ? Object.defineProperty(N, X, {
                  value: _t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (N[X] = _t),
            N
          );
        }
        function yt(N) {
          var X = mt(N, "string");
          return ct(X) == "symbol" ? X : X + "";
        }
        function mt(N, X) {
          if (ct(N) != "object" || !N) return N;
          var _t = N[Symbol.toPrimitive];
          if (_t !== void 0) {
            var At = _t.call(N, X || "default");
            if (ct(At) != "object") return At;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (X === "string" ? String : Number)(N);
        }
        function kt(N) {
          return N.dataKey;
        }
        function Ht(N, X) {
          return s.isValidElement(N)
            ? s.cloneElement(N, X)
            : typeof N == "function"
              ? s.createElement(N, X)
              : s.createElement($, X);
        }
        var qt = (function (N) {
          function X() {
            return O(this, X), tt(this, X, arguments);
          }
          return (
            k(X, N),
            D(X, [
              {
                key: "render",
                value: function () {
                  var At = this,
                    Zt = this.props,
                    Be = Zt.active,
                    Le = Zt.allowEscapeViewBox,
                    Pe = Zt.animationDuration,
                    Ce = Zt.animationEasing,
                    We = Zt.content,
                    je = Zt.coordinate,
                    Ye = Zt.filterNull,
                    qe = Zt.isAnimationActive,
                    on = Zt.offset,
                    un = Zt.payload,
                    tn = Zt.payloadUniqBy,
                    bn = Zt.position,
                    Mn = Zt.reverseDirection,
                    _n = Zt.useTranslate3d,
                    jn = Zt.viewBox,
                    Wn = Zt.wrapperStyle,
                    Nn = un ?? [];
                  Ye &&
                    Nn.length &&
                    (Nn = (0, Vt.s)(
                      un.filter(function (Rn) {
                        return (
                          Rn.value != null &&
                          (Rn.hide !== !0 || At.props.includeHidden)
                        );
                      }),
                      tn,
                      kt,
                    ));
                  var In = Nn.length > 0;
                  return s.createElement(
                    xt,
                    {
                      allowEscapeViewBox: Le,
                      animationDuration: Pe,
                      animationEasing: Ce,
                      isAnimationActive: qe,
                      active: Be,
                      coordinate: je,
                      hasPayload: In,
                      offset: on,
                      position: bn,
                      reverseDirection: Mn,
                      useTranslate3d: _n,
                      viewBox: jn,
                      wrapperStyle: Wn,
                    },
                    Ht(We, h(h({}, this.props), {}, { payload: Nn })),
                  );
                },
              },
            ])
          );
        })(s.PureComponent);
        j(qt, "displayName", "Tooltip"),
          j(qt, "defaultProps", {
            accessibilityLayer: !1,
            allowEscapeViewBox: { x: !1, y: !1 },
            animationDuration: 400,
            animationEasing: "ease",
            contentStyle: {},
            coordinate: { x: 0, y: 0 },
            cursor: !0,
            cursorStyle: {},
            filterNull: !0,
            isAnimationActive: !Ut.m.isSsr,
            itemStyle: {},
            labelStyle: {},
            offset: 10,
            reverseDirection: { x: !1, y: !1 },
            separator: " : ",
            trigger: "hover",
            useTranslate3d: !1,
            viewBox: { x: 0, y: 0, height: 0, width: 0 },
            wrapperStyle: {},
          });
      },
      75055: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { W: () => et });
        var s = n(90626),
          rt = n(34164),
          K = n(93563),
          q = ["children", "className"];
        function U() {
          return (
            (U = Object.assign
              ? Object.assign.bind()
              : function (ot) {
                  for (var at = 1; at < arguments.length; at++) {
                    var it = arguments[at];
                    for (var F in it)
                      Object.prototype.hasOwnProperty.call(it, F) &&
                        (ot[F] = it[F]);
                  }
                  return ot;
                }),
            U.apply(this, arguments)
          );
        }
        function Q(ot, at) {
          if (ot == null) return {};
          var it = z(ot, at),
            F,
            dt;
          if (Object.getOwnPropertySymbols) {
            var V = Object.getOwnPropertySymbols(ot);
            for (dt = 0; dt < V.length; dt++)
              (F = V[dt]),
                !(at.indexOf(F) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(ot, F) &&
                  (it[F] = ot[F]);
          }
          return it;
        }
        function z(ot, at) {
          if (ot == null) return {};
          var it = {};
          for (var F in ot)
            if (Object.prototype.hasOwnProperty.call(ot, F)) {
              if (at.indexOf(F) >= 0) continue;
              it[F] = ot[F];
            }
          return it;
        }
        var et = s.forwardRef(function (ot, at) {
          var it = ot.children,
            F = ot.className,
            dt = Q(ot, q),
            V = (0, rt.A)("recharts-layer", F);
          return s.createElement(
            "g",
            U({ className: V }, (0, K.J9)(dt, !0), { ref: at }),
            it,
          );
        });
      },
      67125: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { u: () => et });
        var s = n(90626),
          rt = n(34164),
          K = n(93563),
          q = [
            "children",
            "width",
            "height",
            "viewBox",
            "className",
            "style",
            "title",
            "desc",
          ];
        function U() {
          return (
            (U = Object.assign
              ? Object.assign.bind()
              : function (ot) {
                  for (var at = 1; at < arguments.length; at++) {
                    var it = arguments[at];
                    for (var F in it)
                      Object.prototype.hasOwnProperty.call(it, F) &&
                        (ot[F] = it[F]);
                  }
                  return ot;
                }),
            U.apply(this, arguments)
          );
        }
        function Q(ot, at) {
          if (ot == null) return {};
          var it = z(ot, at),
            F,
            dt;
          if (Object.getOwnPropertySymbols) {
            var V = Object.getOwnPropertySymbols(ot);
            for (dt = 0; dt < V.length; dt++)
              (F = V[dt]),
                !(at.indexOf(F) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(ot, F) &&
                  (it[F] = ot[F]);
          }
          return it;
        }
        function z(ot, at) {
          if (ot == null) return {};
          var it = {};
          for (var F in ot)
            if (Object.prototype.hasOwnProperty.call(ot, F)) {
              if (at.indexOf(F) >= 0) continue;
              it[F] = ot[F];
            }
          return it;
        }
        function et(ot) {
          var at = ot.children,
            it = ot.width,
            F = ot.height,
            dt = ot.viewBox,
            V = ot.className,
            pt = ot.style,
            Pt = ot.title,
            L = ot.desc,
            Kt = Q(ot, q),
            Dt = dt || { width: it, height: F, x: 0, y: 0 },
            wt = (0, rt.A)("recharts-surface", V);
          return s.createElement(
            "svg",
            U({}, (0, K.J9)(Kt, !0, "svg"), {
              className: wt,
              width: it,
              height: F,
              style: pt,
              viewBox: ""
                .concat(Dt.x, " ")
                .concat(Dt.y, " ")
                .concat(Dt.width, " ")
                .concat(Dt.height),
            }),
            s.createElement("title", null, Pt),
            s.createElement("desc", null, L),
            at,
          );
        }
      },
      7351: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, {
          DR: () => Dt,
          pj: () => w,
          rY: () => C,
          yi: () => Nt,
          Yp: () => wt,
          hj: () => lt,
          sk: () => ut,
          AF: () => $,
          Nk: () => v,
          $G: () => g,
        });
        var s = n(90626),
          rt = n(68841),
          K = n(81639),
          q = n.n(K),
          U = n(17489),
          Q = n.n(U),
          z = n(81334),
          et = n.n(z),
          ot = et()(
            function (B) {
              return { x: B.left, y: B.top, width: B.width, height: B.height };
            },
            function (B) {
              return [
                "l",
                B.left,
                "t",
                B.top,
                "w",
                B.width,
                "h",
                B.height,
              ].join("");
            },
          ),
          at = n(96714);
        function it(B) {
          "@babel/helpers - typeof";
          return (
            (it =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (nt) {
                    return typeof nt;
                  }
                : function (nt) {
                    return nt &&
                      typeof Symbol == "function" &&
                      nt.constructor === Symbol &&
                      nt !== Symbol.prototype
                      ? "symbol"
                      : typeof nt;
                  }),
            it(B)
          );
        }
        var F = (0, s.createContext)(void 0),
          dt = (0, s.createContext)(void 0),
          V = (0, s.createContext)(void 0),
          pt = (0, s.createContext)({}),
          Pt = (0, s.createContext)(void 0),
          L = (0, s.createContext)(0),
          Kt = (0, s.createContext)(0),
          Dt = function (nt) {
            var bt = nt.state,
              P = bt.xAxisMap,
              m = bt.yAxisMap,
              S = bt.offset,
              _ = nt.clipPathId,
              E = nt.children,
              c = nt.width,
              o = nt.height,
              p = ot(S);
            return s.createElement(
              F.Provider,
              { value: P },
              s.createElement(
                dt.Provider,
                { value: m },
                s.createElement(
                  pt.Provider,
                  { value: S },
                  s.createElement(
                    V.Provider,
                    { value: p },
                    s.createElement(
                      Pt.Provider,
                      { value: _ },
                      s.createElement(
                        L.Provider,
                        { value: o },
                        s.createElement(Kt.Provider, { value: c }, E),
                      ),
                    ),
                  ),
                ),
              ),
            );
          },
          wt = function () {
            return (0, s.useContext)(Pt);
          };
        function Mt(B) {
          var nt = Object.keys(B);
          return nt.length === 0
            ? "There are no available ids."
            : "Available ids are: ".concat(nt, ".");
        }
        var $ = function (nt) {
            var bt = (0, s.useContext)(F);
            bt == null && (0, rt.A)(!1);
            var P = bt[nt];
            return P == null && (0, rt.A)(!1), P;
          },
          w = function () {
            var nt = (0, s.useContext)(F);
            return (0, at.lX)(nt);
          },
          M = function () {
            var nt = useContext(dt);
            return getAnyElementOfObject(nt);
          },
          g = function () {
            var nt = (0, s.useContext)(dt),
              bt = q()(nt, function (P) {
                return Q()(P.domain, Number.isFinite);
              });
            return bt || (0, at.lX)(nt);
          },
          v = function (nt) {
            var bt = (0, s.useContext)(dt);
            bt == null && (0, rt.A)(!1);
            var P = bt[nt];
            return P == null && (0, rt.A)(!1), P;
          },
          ut = function () {
            var nt = (0, s.useContext)(V);
            return nt;
          },
          lt = function () {
            return (0, s.useContext)(pt);
          },
          Nt = function () {
            return (0, s.useContext)(Kt);
          },
          C = function () {
            return (0, s.useContext)(L);
          };
      },
      33487: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { I: () => ie });
        var s = n(90626);
        function rt() {}
        function K(k, G, j) {
          k._context.bezierCurveTo(
            (2 * k._x0 + k._x1) / 3,
            (2 * k._y0 + k._y1) / 3,
            (k._x0 + 2 * k._x1) / 3,
            (k._y0 + 2 * k._y1) / 3,
            (k._x0 + 4 * k._x1 + G) / 6,
            (k._y0 + 4 * k._y1 + j) / 6,
          );
        }
        function q(k) {
          this._context = k;
        }
        q.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 3:
                K(this, this._x1, this._y1);
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            }
            (this._line || (this._line !== 0 && this._point === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (k, G) {
            switch (((k = +k), (G = +G), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(k, G)
                    : this._context.moveTo(k, G);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3),
                  this._context.lineTo(
                    (5 * this._x0 + this._x1) / 6,
                    (5 * this._y0 + this._y1) / 6,
                  );
              default:
                K(this, k, G);
                break;
            }
            (this._x0 = this._x1),
              (this._x1 = k),
              (this._y0 = this._y1),
              (this._y1 = G);
          },
        };
        function U(k) {
          return new q(k);
        }
        function Q(k) {
          this._context = k;
        }
        Q.prototype = {
          areaStart: rt,
          areaEnd: rt,
          lineStart: function () {
            (this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 1: {
                this._context.moveTo(this._x2, this._y2),
                  this._context.closePath();
                break;
              }
              case 2: {
                this._context.moveTo(
                  (this._x2 + 2 * this._x3) / 3,
                  (this._y2 + 2 * this._y3) / 3,
                ),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3,
                  ),
                  this._context.closePath();
                break;
              }
              case 3: {
                this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4);
                break;
              }
            }
          },
          point: function (k, G) {
            switch (((k = +k), (G = +G), this._point)) {
              case 0:
                (this._point = 1), (this._x2 = k), (this._y2 = G);
                break;
              case 1:
                (this._point = 2), (this._x3 = k), (this._y3 = G);
                break;
              case 2:
                (this._point = 3),
                  (this._x4 = k),
                  (this._y4 = G),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + k) / 6,
                    (this._y0 + 4 * this._y1 + G) / 6,
                  );
                break;
              default:
                K(this, k, G);
                break;
            }
            (this._x0 = this._x1),
              (this._x1 = k),
              (this._y0 = this._y1),
              (this._y1 = G);
          },
        };
        function z(k) {
          return new Q(k);
        }
        function et(k) {
          this._context = k;
        }
        et.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            (this._line || (this._line !== 0 && this._point === 3)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (k, G) {
            switch (((k = +k), (G = +G), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var j = (this._x0 + 4 * this._x1 + k) / 6,
                  yt = (this._y0 + 4 * this._y1 + G) / 6;
                this._line
                  ? this._context.lineTo(j, yt)
                  : this._context.moveTo(j, yt);
                break;
              case 3:
                this._point = 4;
              default:
                K(this, k, G);
                break;
            }
            (this._x0 = this._x1),
              (this._x1 = k),
              (this._y0 = this._y1),
              (this._y1 = G);
          },
        };
        function ot(k) {
          return new et(k);
        }
        class at {
          constructor(G, j) {
            (this._context = G), (this._x = j);
          }
          areaStart() {
            this._line = 0;
          }
          areaEnd() {
            this._line = NaN;
          }
          lineStart() {
            this._point = 0;
          }
          lineEnd() {
            (this._line || (this._line !== 0 && this._point === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          }
          point(G, j) {
            switch (((G = +G), (j = +j), this._point)) {
              case 0: {
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(G, j)
                    : this._context.moveTo(G, j);
                break;
              }
              case 1:
                this._point = 2;
              default: {
                this._x
                  ? this._context.bezierCurveTo(
                      (this._x0 = (this._x0 + G) / 2),
                      this._y0,
                      this._x0,
                      j,
                      G,
                      j,
                    )
                  : this._context.bezierCurveTo(
                      this._x0,
                      (this._y0 = (this._y0 + j) / 2),
                      G,
                      this._y0,
                      G,
                      j,
                    );
                break;
              }
            }
            (this._x0 = G), (this._y0 = j);
          }
        }
        class it {
          constructor(G) {
            this._context = G;
          }
          lineStart() {
            this._point = 0;
          }
          lineEnd() {}
          point(G, j) {
            if (((G = +G), (j = +j), this._point === 0)) this._point = 1;
            else {
              const yt = pointRadial(this._x0, this._y0),
                mt = pointRadial(this._x0, (this._y0 = (this._y0 + j) / 2)),
                kt = pointRadial(G, this._y0),
                Ht = pointRadial(G, j);
              this._context.moveTo(...yt),
                this._context.bezierCurveTo(...mt, ...kt, ...Ht);
            }
            (this._x0 = G), (this._y0 = j);
          }
        }
        function F(k) {
          return new at(k, !0);
        }
        function dt(k) {
          return new at(k, !1);
        }
        function V(k) {
          return new it(k);
        }
        function pt(k) {
          this._context = k;
        }
        pt.prototype = {
          areaStart: rt,
          areaEnd: rt,
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            this._point && this._context.closePath();
          },
          point: function (k, G) {
            (k = +k),
              (G = +G),
              this._point
                ? this._context.lineTo(k, G)
                : ((this._point = 1), this._context.moveTo(k, G));
          },
        };
        function Pt(k) {
          return new pt(k);
        }
        function L(k) {
          this._context = k;
        }
        L.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            this._point = 0;
          },
          lineEnd: function () {
            (this._line || (this._line !== 0 && this._point === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (k, G) {
            switch (((k = +k), (G = +G), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(k, G)
                    : this._context.moveTo(k, G);
                break;
              case 1:
                this._point = 2;
              default:
                this._context.lineTo(k, G);
                break;
            }
          },
        };
        function Kt(k) {
          return new L(k);
        }
        function Dt(k) {
          return k < 0 ? -1 : 1;
        }
        function wt(k, G, j) {
          var yt = k._x1 - k._x0,
            mt = G - k._x1,
            kt = (k._y1 - k._y0) / (yt || (mt < 0 && -0)),
            Ht = (j - k._y1) / (mt || (yt < 0 && -0)),
            qt = (kt * mt + Ht * yt) / (yt + mt);
          return (
            (Dt(kt) + Dt(Ht)) *
              Math.min(Math.abs(kt), Math.abs(Ht), 0.5 * Math.abs(qt)) || 0
          );
        }
        function Mt(k, G) {
          var j = k._x1 - k._x0;
          return j ? ((3 * (k._y1 - k._y0)) / j - G) / 2 : G;
        }
        function $(k, G, j) {
          var yt = k._x0,
            mt = k._y0,
            kt = k._x1,
            Ht = k._y1,
            qt = (kt - yt) / 3;
          k._context.bezierCurveTo(
            yt + qt,
            mt + qt * G,
            kt - qt,
            Ht - qt * j,
            kt,
            Ht,
          );
        }
        function w(k) {
          this._context = k;
        }
        w.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
              (this._point = 0);
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                $(this, this._t0, Mt(this, this._t0));
                break;
            }
            (this._line || (this._line !== 0 && this._point === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line);
          },
          point: function (k, G) {
            var j = NaN;
            if (((k = +k), (G = +G), !(k === this._x1 && G === this._y1))) {
              switch (this._point) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(k, G)
                      : this._context.moveTo(k, G);
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  (this._point = 3), $(this, Mt(this, (j = wt(this, k, G))), j);
                  break;
                default:
                  $(this, this._t0, (j = wt(this, k, G)));
                  break;
              }
              (this._x0 = this._x1),
                (this._x1 = k),
                (this._y0 = this._y1),
                (this._y1 = G),
                (this._t0 = j);
            }
          },
        };
        function M(k) {
          this._context = new g(k);
        }
        (M.prototype = Object.create(w.prototype)).point = function (k, G) {
          w.prototype.point.call(this, G, k);
        };
        function g(k) {
          this._context = k;
        }
        g.prototype = {
          moveTo: function (k, G) {
            this._context.moveTo(G, k);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (k, G) {
            this._context.lineTo(G, k);
          },
          bezierCurveTo: function (k, G, j, yt, mt, kt) {
            this._context.bezierCurveTo(G, k, yt, j, kt, mt);
          },
        };
        function v(k) {
          return new w(k);
        }
        function ut(k) {
          return new M(k);
        }
        function lt(k) {
          this._context = k;
        }
        lt.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = []), (this._y = []);
          },
          lineEnd: function () {
            var k = this._x,
              G = this._y,
              j = k.length;
            if (j)
              if (
                (this._line
                  ? this._context.lineTo(k[0], G[0])
                  : this._context.moveTo(k[0], G[0]),
                j === 2)
              )
                this._context.lineTo(k[1], G[1]);
              else
                for (
                  var yt = Nt(k), mt = Nt(G), kt = 0, Ht = 1;
                  Ht < j;
                  ++kt, ++Ht
                )
                  this._context.bezierCurveTo(
                    yt[0][kt],
                    mt[0][kt],
                    yt[1][kt],
                    mt[1][kt],
                    k[Ht],
                    G[Ht],
                  );
            (this._line || (this._line !== 0 && j === 1)) &&
              this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null);
          },
          point: function (k, G) {
            this._x.push(+k), this._y.push(+G);
          },
        };
        function Nt(k) {
          var G,
            j = k.length - 1,
            yt,
            mt = new Array(j),
            kt = new Array(j),
            Ht = new Array(j);
          for (
            mt[0] = 0, kt[0] = 2, Ht[0] = k[0] + 2 * k[1], G = 1;
            G < j - 1;
            ++G
          )
            (mt[G] = 1), (kt[G] = 4), (Ht[G] = 4 * k[G] + 2 * k[G + 1]);
          for (
            mt[j - 1] = 2,
              kt[j - 1] = 7,
              Ht[j - 1] = 8 * k[j - 1] + k[j],
              G = 1;
            G < j;
            ++G
          )
            (yt = mt[G] / kt[G - 1]), (kt[G] -= yt), (Ht[G] -= yt * Ht[G - 1]);
          for (mt[j - 1] = Ht[j - 1] / kt[j - 1], G = j - 2; G >= 0; --G)
            mt[G] = (Ht[G] - mt[G + 1]) / kt[G];
          for (kt[j - 1] = (k[j] + mt[j - 1]) / 2, G = 0; G < j - 1; ++G)
            kt[G] = 2 * k[G + 1] - mt[G + 1];
          return [mt, kt];
        }
        function C(k) {
          return new lt(k);
        }
        function B(k, G) {
          (this._context = k), (this._t = G);
        }
        B.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            (this._x = this._y = NaN), (this._point = 0);
          },
          lineEnd: function () {
            0 < this._t &&
              this._t < 1 &&
              this._point === 2 &&
              this._context.lineTo(this._x, this._y),
              (this._line || (this._line !== 0 && this._point === 1)) &&
                this._context.closePath(),
              this._line >= 0 &&
                ((this._t = 1 - this._t), (this._line = 1 - this._line));
          },
          point: function (k, G) {
            switch (((k = +k), (G = +G), this._point)) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(k, G)
                    : this._context.moveTo(k, G);
                break;
              case 1:
                this._point = 2;
              default: {
                if (this._t <= 0)
                  this._context.lineTo(this._x, G), this._context.lineTo(k, G);
                else {
                  var j = this._x * (1 - this._t) + k * this._t;
                  this._context.lineTo(j, this._y), this._context.lineTo(j, G);
                }
                break;
              }
            }
            (this._x = k), (this._y = G);
          },
        };
        function nt(k) {
          return new B(k, 0.5);
        }
        function bt(k) {
          return new B(k, 0);
        }
        function P(k) {
          return new B(k, 1);
        }
        var m = n(57949),
          S = n(94770),
          _ = n(5823);
        function E(k) {
          return k[0];
        }
        function c(k) {
          return k[1];
        }
        function o(k, G) {
          var j = (0, S.A)(!0),
            yt = null,
            mt = Kt,
            kt = null,
            Ht = (0, _.i)(qt);
          (k = typeof k == "function" ? k : k === void 0 ? E : (0, S.A)(k)),
            (G = typeof G == "function" ? G : G === void 0 ? c : (0, S.A)(G));
          function qt(N) {
            var X,
              _t = (N = (0, m.A)(N)).length,
              At,
              Zt = !1,
              Be;
            for (yt == null && (kt = mt((Be = Ht()))), X = 0; X <= _t; ++X)
              !(X < _t && j((At = N[X]), X, N)) === Zt &&
                ((Zt = !Zt) ? kt.lineStart() : kt.lineEnd()),
                Zt && kt.point(+k(At, X, N), +G(At, X, N));
            if (Be) return (kt = null), Be + "" || null;
          }
          return (
            (qt.x = function (N) {
              return arguments.length
                ? ((k = typeof N == "function" ? N : (0, S.A)(+N)), qt)
                : k;
            }),
            (qt.y = function (N) {
              return arguments.length
                ? ((G = typeof N == "function" ? N : (0, S.A)(+N)), qt)
                : G;
            }),
            (qt.defined = function (N) {
              return arguments.length
                ? ((j = typeof N == "function" ? N : (0, S.A)(!!N)), qt)
                : j;
            }),
            (qt.curve = function (N) {
              return arguments.length
                ? ((mt = N), yt != null && (kt = mt(yt)), qt)
                : mt;
            }),
            (qt.context = function (N) {
              return arguments.length
                ? (N == null ? (yt = kt = null) : (kt = mt((yt = N))), qt)
                : yt;
            }),
            qt
          );
        }
        function p(k, G, j) {
          var yt = null,
            mt = (0, S.A)(!0),
            kt = null,
            Ht = Kt,
            qt = null,
            N = (0, _.i)(X);
          (k = typeof k == "function" ? k : k === void 0 ? E : (0, S.A)(+k)),
            (G =
              typeof G == "function"
                ? G
                : G === void 0
                  ? (0, S.A)(0)
                  : (0, S.A)(+G)),
            (j = typeof j == "function" ? j : j === void 0 ? c : (0, S.A)(+j));
          function X(At) {
            var Zt,
              Be,
              Le,
              Pe = (At = (0, m.A)(At)).length,
              Ce,
              We = !1,
              je,
              Ye = new Array(Pe),
              qe = new Array(Pe);
            for (kt == null && (qt = Ht((je = N()))), Zt = 0; Zt <= Pe; ++Zt) {
              if (!(Zt < Pe && mt((Ce = At[Zt]), Zt, At)) === We)
                if ((We = !We)) (Be = Zt), qt.areaStart(), qt.lineStart();
                else {
                  for (
                    qt.lineEnd(), qt.lineStart(), Le = Zt - 1;
                    Le >= Be;
                    --Le
                  )
                    qt.point(Ye[Le], qe[Le]);
                  qt.lineEnd(), qt.areaEnd();
                }
              We &&
                ((Ye[Zt] = +k(Ce, Zt, At)),
                (qe[Zt] = +G(Ce, Zt, At)),
                qt.point(
                  yt ? +yt(Ce, Zt, At) : Ye[Zt],
                  j ? +j(Ce, Zt, At) : qe[Zt],
                ));
            }
            if (je) return (qt = null), je + "" || null;
          }
          function _t() {
            return o().defined(mt).curve(Ht).context(kt);
          }
          return (
            (X.x = function (At) {
              return arguments.length
                ? ((k = typeof At == "function" ? At : (0, S.A)(+At)),
                  (yt = null),
                  X)
                : k;
            }),
            (X.x0 = function (At) {
              return arguments.length
                ? ((k = typeof At == "function" ? At : (0, S.A)(+At)), X)
                : k;
            }),
            (X.x1 = function (At) {
              return arguments.length
                ? ((yt =
                    At == null
                      ? null
                      : typeof At == "function"
                        ? At
                        : (0, S.A)(+At)),
                  X)
                : yt;
            }),
            (X.y = function (At) {
              return arguments.length
                ? ((G = typeof At == "function" ? At : (0, S.A)(+At)),
                  (j = null),
                  X)
                : G;
            }),
            (X.y0 = function (At) {
              return arguments.length
                ? ((G = typeof At == "function" ? At : (0, S.A)(+At)), X)
                : G;
            }),
            (X.y1 = function (At) {
              return arguments.length
                ? ((j =
                    At == null
                      ? null
                      : typeof At == "function"
                        ? At
                        : (0, S.A)(+At)),
                  X)
                : j;
            }),
            (X.lineX0 = X.lineY0 =
              function () {
                return _t().x(k).y(G);
              }),
            (X.lineY1 = function () {
              return _t().x(k).y(j);
            }),
            (X.lineX1 = function () {
              return _t().x(yt).y(G);
            }),
            (X.defined = function (At) {
              return arguments.length
                ? ((mt = typeof At == "function" ? At : (0, S.A)(!!At)), X)
                : mt;
            }),
            (X.curve = function (At) {
              return arguments.length
                ? ((Ht = At), kt != null && (qt = Ht(kt)), X)
                : Ht;
            }),
            (X.context = function (At) {
              return arguments.length
                ? (At == null ? (kt = qt = null) : (qt = Ht((kt = At))), X)
                : kt;
            }),
            X
          );
        }
        var b = n(4842),
          R = n.n(b),
          J = n(3316),
          Y = n.n(J),
          It = n(34164),
          Z = n(43998),
          vt = n(93563),
          ft = n(96714);
        function xt(k) {
          "@babel/helpers - typeof";
          return (
            (xt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (G) {
                    return typeof G;
                  }
                : function (G) {
                    return G &&
                      typeof Symbol == "function" &&
                      G.constructor === Symbol &&
                      G !== Symbol.prototype
                      ? "symbol"
                      : typeof G;
                  }),
            xt(k)
          );
        }
        function Ut() {
          return (
            (Ut = Object.assign
              ? Object.assign.bind()
              : function (k) {
                  for (var G = 1; G < arguments.length; G++) {
                    var j = arguments[G];
                    for (var yt in j)
                      Object.prototype.hasOwnProperty.call(j, yt) &&
                        (k[yt] = j[yt]);
                  }
                  return k;
                }),
            Ut.apply(this, arguments)
          );
        }
        function Vt(k, G) {
          var j = Object.keys(k);
          if (Object.getOwnPropertySymbols) {
            var yt = Object.getOwnPropertySymbols(k);
            G &&
              (yt = yt.filter(function (mt) {
                return Object.getOwnPropertyDescriptor(k, mt).enumerable;
              })),
              j.push.apply(j, yt);
          }
          return j;
        }
        function ct(k) {
          for (var G = 1; G < arguments.length; G++) {
            var j = arguments[G] != null ? arguments[G] : {};
            G % 2
              ? Vt(Object(j), !0).forEach(function (yt) {
                  l(k, yt, j[yt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    k,
                    Object.getOwnPropertyDescriptors(j),
                  )
                : Vt(Object(j)).forEach(function (yt) {
                    Object.defineProperty(
                      k,
                      yt,
                      Object.getOwnPropertyDescriptor(j, yt),
                    );
                  });
          }
          return k;
        }
        function l(k, G, j) {
          return (
            (G = h(G)),
            G in k
              ? Object.defineProperty(k, G, {
                  value: j,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (k[G] = j),
            k
          );
        }
        function h(k) {
          var G = O(k, "string");
          return xt(G) == "symbol" ? G : G + "";
        }
        function O(k, G) {
          if (xt(k) != "object" || !k) return k;
          var j = k[Symbol.toPrimitive];
          if (j !== void 0) {
            var yt = j.call(k, G || "default");
            if (xt(yt) != "object") return yt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (G === "string" ? String : Number)(k);
        }
        var f = {
            curveBasisClosed: z,
            curveBasisOpen: ot,
            curveBasis: U,
            curveBumpX: F,
            curveBumpY: dt,
            curveLinearClosed: Pt,
            curveLinear: Kt,
            curveMonotoneX: v,
            curveMonotoneY: ut,
            curveNatural: C,
            curveStep: nt,
            curveStepAfter: P,
            curveStepBefore: bt,
          },
          D = function (G) {
            return G.x === +G.x && G.y === +G.y;
          },
          tt = function (G) {
            return G.x;
          },
          Et = function (G) {
            return G.y;
          },
          Wt = function (G, j) {
            if (Y()(G)) return G;
            var yt = "curve".concat(R()(G));
            return (yt === "curveMonotone" || yt === "curveBump") && j
              ? f["".concat(yt).concat(j === "vertical" ? "Y" : "X")]
              : f[yt] || Kt;
          },
          Ft = function (G) {
            var j = G.type,
              yt = j === void 0 ? "linear" : j,
              mt = G.points,
              kt = mt === void 0 ? [] : mt,
              Ht = G.baseLine,
              qt = G.layout,
              N = G.connectNulls,
              X = N === void 0 ? !1 : N,
              _t = Wt(yt, qt),
              At = X
                ? kt.filter(function (Pe) {
                    return D(Pe);
                  })
                : kt,
              Zt;
            if (Array.isArray(Ht)) {
              var Be = X
                  ? Ht.filter(function (Pe) {
                      return D(Pe);
                    })
                  : Ht,
                Le = At.map(function (Pe, Ce) {
                  return ct(ct({}, Pe), {}, { base: Be[Ce] });
                });
              return (
                qt === "vertical"
                  ? (Zt = p()
                      .y(Et)
                      .x1(tt)
                      .x0(function (Pe) {
                        return Pe.base.x;
                      }))
                  : (Zt = p()
                      .x(tt)
                      .y1(Et)
                      .y0(function (Pe) {
                        return Pe.base.y;
                      })),
                Zt.defined(D).curve(_t),
                Zt(Le)
              );
            }
            return (
              qt === "vertical" && (0, ft.Et)(Ht)
                ? (Zt = p().y(Et).x1(tt).x0(Ht))
                : (0, ft.Et)(Ht)
                  ? (Zt = p().x(tt).y1(Et).y0(Ht))
                  : (Zt = o().x(tt).y(Et)),
              Zt.defined(D).curve(_t),
              Zt(At)
            );
          },
          ie = function (G) {
            var j = G.className,
              yt = G.points,
              mt = G.path,
              kt = G.pathRef;
            if ((!yt || !yt.length) && !mt) return null;
            var Ht = yt && yt.length ? Ft(G) : mt;
            return s.createElement(
              "path",
              Ut({}, (0, vt.J9)(G, !1), (0, Z._U)(G), {
                className: (0, It.A)("recharts-curve", j),
                d: Ht,
                ref: kt,
              }),
            );
          };
      },
      21687: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { c: () => Q });
        var s = n(90626),
          rt = n(34164),
          K = n(43998),
          q = n(93563);
        function U() {
          return (
            (U = Object.assign
              ? Object.assign.bind()
              : function (z) {
                  for (var et = 1; et < arguments.length; et++) {
                    var ot = arguments[et];
                    for (var at in ot)
                      Object.prototype.hasOwnProperty.call(ot, at) &&
                        (z[at] = ot[at]);
                  }
                  return z;
                }),
            U.apply(this, arguments)
          );
        }
        var Q = function (et) {
          var ot = et.cx,
            at = et.cy,
            it = et.r,
            F = et.className,
            dt = (0, rt.A)("recharts-dot", F);
          return ot === +ot && at === +at && it === +it
            ? s.createElement(
                "circle",
                U({}, (0, q.J9)(et, !1), (0, K._U)(et), {
                  className: dt,
                  cx: ot,
                  cy: at,
                  r: it,
                }),
              )
            : null;
        };
      },
      52857: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { J: () => Dt, M: () => Mt });
        var s = n(90626),
          rt = n(34164),
          K = n(86356),
          q = n(93563);
        function U($) {
          "@babel/helpers - typeof";
          return (
            (U =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (w) {
                    return typeof w;
                  }
                : function (w) {
                    return w &&
                      typeof Symbol == "function" &&
                      w.constructor === Symbol &&
                      w !== Symbol.prototype
                      ? "symbol"
                      : typeof w;
                  }),
            U($)
          );
        }
        function Q() {
          return (
            (Q = Object.assign
              ? Object.assign.bind()
              : function ($) {
                  for (var w = 1; w < arguments.length; w++) {
                    var M = arguments[w];
                    for (var g in M)
                      Object.prototype.hasOwnProperty.call(M, g) &&
                        ($[g] = M[g]);
                  }
                  return $;
                }),
            Q.apply(this, arguments)
          );
        }
        function z($, w) {
          return F($) || it($, w) || ot($, w) || et();
        }
        function et() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function ot($, w) {
          if ($) {
            if (typeof $ == "string") return at($, w);
            var M = Object.prototype.toString.call($).slice(8, -1);
            if (
              (M === "Object" && $.constructor && (M = $.constructor.name),
              M === "Map" || M === "Set")
            )
              return Array.from($);
            if (
              M === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
            )
              return at($, w);
          }
        }
        function at($, w) {
          (w == null || w > $.length) && (w = $.length);
          for (var M = 0, g = new Array(w); M < w; M++) g[M] = $[M];
          return g;
        }
        function it($, w) {
          var M =
            $ == null
              ? null
              : (typeof Symbol < "u" && $[Symbol.iterator]) || $["@@iterator"];
          if (M != null) {
            var g,
              v,
              ut,
              lt,
              Nt = [],
              C = !0,
              B = !1;
            try {
              if (((ut = (M = M.call($)).next), w === 0)) {
                if (Object(M) !== M) return;
                C = !1;
              } else
                for (
                  ;
                  !(C = (g = ut.call(M)).done) &&
                  (Nt.push(g.value), Nt.length !== w);
                  C = !0
                );
            } catch (nt) {
              (B = !0), (v = nt);
            } finally {
              try {
                if (
                  !C &&
                  M.return != null &&
                  ((lt = M.return()), Object(lt) !== lt)
                )
                  return;
              } finally {
                if (B) throw v;
              }
            }
            return Nt;
          }
        }
        function F($) {
          if (Array.isArray($)) return $;
        }
        function dt($, w) {
          var M = Object.keys($);
          if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols($);
            w &&
              (g = g.filter(function (v) {
                return Object.getOwnPropertyDescriptor($, v).enumerable;
              })),
              M.push.apply(M, g);
          }
          return M;
        }
        function V($) {
          for (var w = 1; w < arguments.length; w++) {
            var M = arguments[w] != null ? arguments[w] : {};
            w % 2
              ? dt(Object(M), !0).forEach(function (g) {
                  pt($, g, M[g]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    $,
                    Object.getOwnPropertyDescriptors(M),
                  )
                : dt(Object(M)).forEach(function (g) {
                    Object.defineProperty(
                      $,
                      g,
                      Object.getOwnPropertyDescriptor(M, g),
                    );
                  });
          }
          return $;
        }
        function pt($, w, M) {
          return (
            (w = Pt(w)),
            w in $
              ? Object.defineProperty($, w, {
                  value: M,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : ($[w] = M),
            $
          );
        }
        function Pt($) {
          var w = L($, "string");
          return U(w) == "symbol" ? w : w + "";
        }
        function L($, w) {
          if (U($) != "object" || !$) return $;
          var M = $[Symbol.toPrimitive];
          if (M !== void 0) {
            var g = M.call($, w || "default");
            if (U(g) != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (w === "string" ? String : Number)($);
        }
        var Kt = function (w, M, g, v, ut) {
            var lt = Math.min(Math.abs(g) / 2, Math.abs(v) / 2),
              Nt = v >= 0 ? 1 : -1,
              C = g >= 0 ? 1 : -1,
              B = (v >= 0 && g >= 0) || (v < 0 && g < 0) ? 1 : 0,
              nt;
            if (lt > 0 && ut instanceof Array) {
              for (var bt = [0, 0, 0, 0], P = 0, m = 4; P < m; P++)
                bt[P] = ut[P] > lt ? lt : ut[P];
              (nt = "M".concat(w, ",").concat(M + Nt * bt[0])),
                bt[0] > 0 &&
                  (nt += "A "
                    .concat(bt[0], ",")
                    .concat(bt[0], ",0,0,")
                    .concat(B, ",")
                    .concat(w + C * bt[0], ",")
                    .concat(M)),
                (nt += "L ".concat(w + g - C * bt[1], ",").concat(M)),
                bt[1] > 0 &&
                  (nt += "A "
                    .concat(bt[1], ",")
                    .concat(bt[1], ",0,0,")
                    .concat(
                      B,
                      `,
        `,
                    )
                    .concat(w + g, ",")
                    .concat(M + Nt * bt[1])),
                (nt += "L ".concat(w + g, ",").concat(M + v - Nt * bt[2])),
                bt[2] > 0 &&
                  (nt += "A "
                    .concat(bt[2], ",")
                    .concat(bt[2], ",0,0,")
                    .concat(
                      B,
                      `,
        `,
                    )
                    .concat(w + g - C * bt[2], ",")
                    .concat(M + v)),
                (nt += "L ".concat(w + C * bt[3], ",").concat(M + v)),
                bt[3] > 0 &&
                  (nt += "A "
                    .concat(bt[3], ",")
                    .concat(bt[3], ",0,0,")
                    .concat(
                      B,
                      `,
        `,
                    )
                    .concat(w, ",")
                    .concat(M + v - Nt * bt[3])),
                (nt += "Z");
            } else if (lt > 0 && ut === +ut && ut > 0) {
              var S = Math.min(lt, ut);
              nt = "M "
                .concat(w, ",")
                .concat(
                  M + Nt * S,
                  `
            A `,
                )
                .concat(S, ",")
                .concat(S, ",0,0,")
                .concat(B, ",")
                .concat(w + C * S, ",")
                .concat(
                  M,
                  `
            L `,
                )
                .concat(w + g - C * S, ",")
                .concat(
                  M,
                  `
            A `,
                )
                .concat(S, ",")
                .concat(S, ",0,0,")
                .concat(B, ",")
                .concat(w + g, ",")
                .concat(
                  M + Nt * S,
                  `
            L `,
                )
                .concat(w + g, ",")
                .concat(
                  M + v - Nt * S,
                  `
            A `,
                )
                .concat(S, ",")
                .concat(S, ",0,0,")
                .concat(B, ",")
                .concat(w + g - C * S, ",")
                .concat(
                  M + v,
                  `
            L `,
                )
                .concat(w + C * S, ",")
                .concat(
                  M + v,
                  `
            A `,
                )
                .concat(S, ",")
                .concat(S, ",0,0,")
                .concat(B, ",")
                .concat(w, ",")
                .concat(M + v - Nt * S, " Z");
            } else
              nt = "M "
                .concat(w, ",")
                .concat(M, " h ")
                .concat(g, " v ")
                .concat(v, " h ")
                .concat(-g, " Z");
            return nt;
          },
          Dt = function (w, M) {
            if (!w || !M) return !1;
            var g = w.x,
              v = w.y,
              ut = M.x,
              lt = M.y,
              Nt = M.width,
              C = M.height;
            if (Math.abs(Nt) > 0 && Math.abs(C) > 0) {
              var B = Math.min(ut, ut + Nt),
                nt = Math.max(ut, ut + Nt),
                bt = Math.min(lt, lt + C),
                P = Math.max(lt, lt + C);
              return g >= B && g <= nt && v >= bt && v <= P;
            }
            return !1;
          },
          wt = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            radius: 0,
            isAnimationActive: !1,
            isUpdateAnimationActive: !1,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          },
          Mt = function (w) {
            var M = V(V({}, wt), w),
              g = (0, s.useRef)(),
              v = (0, s.useState)(-1),
              ut = z(v, 2),
              lt = ut[0],
              Nt = ut[1];
            (0, s.useEffect)(function () {
              if (g.current && g.current.getTotalLength)
                try {
                  var b = g.current.getTotalLength();
                  b && Nt(b);
                } catch {}
            }, []);
            var C = M.x,
              B = M.y,
              nt = M.width,
              bt = M.height,
              P = M.radius,
              m = M.className,
              S = M.animationEasing,
              _ = M.animationDuration,
              E = M.animationBegin,
              c = M.isAnimationActive,
              o = M.isUpdateAnimationActive;
            if (
              C !== +C ||
              B !== +B ||
              nt !== +nt ||
              bt !== +bt ||
              nt === 0 ||
              bt === 0
            )
              return null;
            var p = (0, rt.A)("recharts-rectangle", m);
            return o
              ? s.createElement(
                  K.Ay,
                  {
                    canBegin: lt > 0,
                    from: { width: nt, height: bt, x: C, y: B },
                    to: { width: nt, height: bt, x: C, y: B },
                    duration: _,
                    animationEasing: S,
                    isActive: o,
                  },
                  function (b) {
                    var R = b.width,
                      J = b.height,
                      Y = b.x,
                      It = b.y;
                    return s.createElement(
                      K.Ay,
                      {
                        canBegin: lt > 0,
                        from: "0px ".concat(lt === -1 ? 1 : lt, "px"),
                        to: "".concat(lt, "px 0px"),
                        attributeName: "strokeDasharray",
                        begin: E,
                        duration: _,
                        isActive: c,
                        easing: S,
                      },
                      s.createElement(
                        "path",
                        Q({}, (0, q.J9)(M, !0), {
                          className: p,
                          d: Kt(Y, It, R, J, P),
                          ref: g,
                        }),
                      ),
                    );
                  },
                )
              : s.createElement(
                  "path",
                  Q({}, (0, q.J9)(M, !0), {
                    className: p,
                    d: Kt(C, B, nt, bt, P),
                  }),
                );
          };
      },
      24588: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { h: () => Kt });
        var s = n(90626),
          rt = n(34164),
          K = n(93563),
          q = n(90134),
          U = n(96714);
        function Q(Dt) {
          "@babel/helpers - typeof";
          return (
            (Q =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (wt) {
                    return typeof wt;
                  }
                : function (wt) {
                    return wt &&
                      typeof Symbol == "function" &&
                      wt.constructor === Symbol &&
                      wt !== Symbol.prototype
                      ? "symbol"
                      : typeof wt;
                  }),
            Q(Dt)
          );
        }
        function z() {
          return (
            (z = Object.assign
              ? Object.assign.bind()
              : function (Dt) {
                  for (var wt = 1; wt < arguments.length; wt++) {
                    var Mt = arguments[wt];
                    for (var $ in Mt)
                      Object.prototype.hasOwnProperty.call(Mt, $) &&
                        (Dt[$] = Mt[$]);
                  }
                  return Dt;
                }),
            z.apply(this, arguments)
          );
        }
        function et(Dt, wt) {
          var Mt = Object.keys(Dt);
          if (Object.getOwnPropertySymbols) {
            var $ = Object.getOwnPropertySymbols(Dt);
            wt &&
              ($ = $.filter(function (w) {
                return Object.getOwnPropertyDescriptor(Dt, w).enumerable;
              })),
              Mt.push.apply(Mt, $);
          }
          return Mt;
        }
        function ot(Dt) {
          for (var wt = 1; wt < arguments.length; wt++) {
            var Mt = arguments[wt] != null ? arguments[wt] : {};
            wt % 2
              ? et(Object(Mt), !0).forEach(function ($) {
                  at(Dt, $, Mt[$]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    Dt,
                    Object.getOwnPropertyDescriptors(Mt),
                  )
                : et(Object(Mt)).forEach(function ($) {
                    Object.defineProperty(
                      Dt,
                      $,
                      Object.getOwnPropertyDescriptor(Mt, $),
                    );
                  });
          }
          return Dt;
        }
        function at(Dt, wt, Mt) {
          return (
            (wt = it(wt)),
            wt in Dt
              ? Object.defineProperty(Dt, wt, {
                  value: Mt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (Dt[wt] = Mt),
            Dt
          );
        }
        function it(Dt) {
          var wt = F(Dt, "string");
          return Q(wt) == "symbol" ? wt : wt + "";
        }
        function F(Dt, wt) {
          if (Q(Dt) != "object" || !Dt) return Dt;
          var Mt = Dt[Symbol.toPrimitive];
          if (Mt !== void 0) {
            var $ = Mt.call(Dt, wt || "default");
            if (Q($) != "object") return $;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (wt === "string" ? String : Number)(Dt);
        }
        var dt = function (wt, Mt) {
            var $ = (0, U.sA)(Mt - wt),
              w = Math.min(Math.abs(Mt - wt), 359.999);
            return $ * w;
          },
          V = function (wt) {
            var Mt = wt.cx,
              $ = wt.cy,
              w = wt.radius,
              M = wt.angle,
              g = wt.sign,
              v = wt.isExternal,
              ut = wt.cornerRadius,
              lt = wt.cornerIsExternal,
              Nt = ut * (v ? 1 : -1) + w,
              C = Math.asin(ut / Nt) / q.Kg,
              B = lt ? M : M + g * C,
              nt = (0, q.IZ)(Mt, $, Nt, B),
              bt = (0, q.IZ)(Mt, $, w, B),
              P = lt ? M - g * C : M,
              m = (0, q.IZ)(Mt, $, Nt * Math.cos(C * q.Kg), P);
            return {
              center: nt,
              circleTangency: bt,
              lineTangency: m,
              theta: C,
            };
          },
          pt = function (wt) {
            var Mt = wt.cx,
              $ = wt.cy,
              w = wt.innerRadius,
              M = wt.outerRadius,
              g = wt.startAngle,
              v = wt.endAngle,
              ut = dt(g, v),
              lt = g + ut,
              Nt = (0, q.IZ)(Mt, $, M, g),
              C = (0, q.IZ)(Mt, $, M, lt),
              B = "M "
                .concat(Nt.x, ",")
                .concat(
                  Nt.y,
                  `
    A `,
                )
                .concat(M, ",")
                .concat(
                  M,
                  `,0,
    `,
                )
                .concat(+(Math.abs(ut) > 180), ",")
                .concat(
                  +(g > lt),
                  `,
    `,
                )
                .concat(C.x, ",")
                .concat(
                  C.y,
                  `
  `,
                );
            if (w > 0) {
              var nt = (0, q.IZ)(Mt, $, w, g),
                bt = (0, q.IZ)(Mt, $, w, lt);
              B += "L "
                .concat(bt.x, ",")
                .concat(
                  bt.y,
                  `
            A `,
                )
                .concat(w, ",")
                .concat(
                  w,
                  `,0,
            `,
                )
                .concat(+(Math.abs(ut) > 180), ",")
                .concat(
                  +(g <= lt),
                  `,
            `,
                )
                .concat(nt.x, ",")
                .concat(nt.y, " Z");
            } else B += "L ".concat(Mt, ",").concat($, " Z");
            return B;
          },
          Pt = function (wt) {
            var Mt = wt.cx,
              $ = wt.cy,
              w = wt.innerRadius,
              M = wt.outerRadius,
              g = wt.cornerRadius,
              v = wt.forceCornerRadius,
              ut = wt.cornerIsExternal,
              lt = wt.startAngle,
              Nt = wt.endAngle,
              C = (0, U.sA)(Nt - lt),
              B = V({
                cx: Mt,
                cy: $,
                radius: M,
                angle: lt,
                sign: C,
                cornerRadius: g,
                cornerIsExternal: ut,
              }),
              nt = B.circleTangency,
              bt = B.lineTangency,
              P = B.theta,
              m = V({
                cx: Mt,
                cy: $,
                radius: M,
                angle: Nt,
                sign: -C,
                cornerRadius: g,
                cornerIsExternal: ut,
              }),
              S = m.circleTangency,
              _ = m.lineTangency,
              E = m.theta,
              c = ut ? Math.abs(lt - Nt) : Math.abs(lt - Nt) - P - E;
            if (c < 0)
              return v
                ? "M "
                    .concat(bt.x, ",")
                    .concat(
                      bt.y,
                      `
        a`,
                    )
                    .concat(g, ",")
                    .concat(g, ",0,0,1,")
                    .concat(
                      g * 2,
                      `,0
        a`,
                    )
                    .concat(g, ",")
                    .concat(g, ",0,0,1,")
                    .concat(
                      -g * 2,
                      `,0
      `,
                    )
                : pt({
                    cx: Mt,
                    cy: $,
                    innerRadius: w,
                    outerRadius: M,
                    startAngle: lt,
                    endAngle: Nt,
                  });
            var o = "M "
              .concat(bt.x, ",")
              .concat(
                bt.y,
                `
    A`,
              )
              .concat(g, ",")
              .concat(g, ",0,0,")
              .concat(+(C < 0), ",")
              .concat(nt.x, ",")
              .concat(
                nt.y,
                `
    A`,
              )
              .concat(M, ",")
              .concat(M, ",0,")
              .concat(+(c > 180), ",")
              .concat(+(C < 0), ",")
              .concat(S.x, ",")
              .concat(
                S.y,
                `
    A`,
              )
              .concat(g, ",")
              .concat(g, ",0,0,")
              .concat(+(C < 0), ",")
              .concat(_.x, ",")
              .concat(
                _.y,
                `
  `,
              );
            if (w > 0) {
              var p = V({
                  cx: Mt,
                  cy: $,
                  radius: w,
                  angle: lt,
                  sign: C,
                  isExternal: !0,
                  cornerRadius: g,
                  cornerIsExternal: ut,
                }),
                b = p.circleTangency,
                R = p.lineTangency,
                J = p.theta,
                Y = V({
                  cx: Mt,
                  cy: $,
                  radius: w,
                  angle: Nt,
                  sign: -C,
                  isExternal: !0,
                  cornerRadius: g,
                  cornerIsExternal: ut,
                }),
                It = Y.circleTangency,
                Z = Y.lineTangency,
                vt = Y.theta,
                ft = ut ? Math.abs(lt - Nt) : Math.abs(lt - Nt) - J - vt;
              if (ft < 0 && g === 0)
                return "".concat(o, "L").concat(Mt, ",").concat($, "Z");
              o += "L"
                .concat(Z.x, ",")
                .concat(
                  Z.y,
                  `
      A`,
                )
                .concat(g, ",")
                .concat(g, ",0,0,")
                .concat(+(C < 0), ",")
                .concat(It.x, ",")
                .concat(
                  It.y,
                  `
      A`,
                )
                .concat(w, ",")
                .concat(w, ",0,")
                .concat(+(ft > 180), ",")
                .concat(+(C > 0), ",")
                .concat(b.x, ",")
                .concat(
                  b.y,
                  `
      A`,
                )
                .concat(g, ",")
                .concat(g, ",0,0,")
                .concat(+(C < 0), ",")
                .concat(R.x, ",")
                .concat(R.y, "Z");
            } else o += "L".concat(Mt, ",").concat($, "Z");
            return o;
          },
          L = {
            cx: 0,
            cy: 0,
            innerRadius: 0,
            outerRadius: 0,
            startAngle: 0,
            endAngle: 0,
            cornerRadius: 0,
            forceCornerRadius: !1,
            cornerIsExternal: !1,
          },
          Kt = function (wt) {
            var Mt = ot(ot({}, L), wt),
              $ = Mt.cx,
              w = Mt.cy,
              M = Mt.innerRadius,
              g = Mt.outerRadius,
              v = Mt.cornerRadius,
              ut = Mt.forceCornerRadius,
              lt = Mt.cornerIsExternal,
              Nt = Mt.startAngle,
              C = Mt.endAngle,
              B = Mt.className;
            if (g < M || Nt === C) return null;
            var nt = (0, rt.A)("recharts-sector", B),
              bt = g - M,
              P = (0, U.F4)(v, bt, 0, !0),
              m;
            return (
              P > 0 && Math.abs(Nt - C) < 360
                ? (m = Pt({
                    cx: $,
                    cy: w,
                    innerRadius: M,
                    outerRadius: g,
                    cornerRadius: Math.min(P, bt / 2),
                    forceCornerRadius: ut,
                    cornerIsExternal: lt,
                    startAngle: Nt,
                    endAngle: C,
                  }))
                : (m = pt({
                    cx: $,
                    cy: w,
                    innerRadius: M,
                    outerRadius: g,
                    startAngle: Nt,
                    endAngle: C,
                  })),
              s.createElement(
                "path",
                z({}, (0, K.J9)(Mt, !0), { className: nt, d: m, role: "img" }),
              )
            );
          };
      },
      17134: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { i: () => G });
        var s = n(90626),
          rt = n(4842),
          K = n.n(rt);
        const q = Math.abs,
          U = Math.atan2,
          Q = Math.cos,
          z = Math.max,
          et = Math.min,
          ot = Math.sin,
          at = Math.sqrt,
          it = 1e-12,
          F = Math.PI,
          dt = F / 2,
          V = 2 * F;
        function pt(j) {
          return j > 1 ? 0 : j < -1 ? F : Math.acos(j);
        }
        function Pt(j) {
          return j >= 1 ? dt : j <= -1 ? -dt : Math.asin(j);
        }
        const L = {
            draw(j, yt) {
              const mt = at(yt / F);
              j.moveTo(mt, 0), j.arc(0, 0, mt, 0, V);
            },
          },
          Kt = {
            draw(j, yt) {
              const mt = at(yt / 5) / 2;
              j.moveTo(-3 * mt, -mt),
                j.lineTo(-mt, -mt),
                j.lineTo(-mt, -3 * mt),
                j.lineTo(mt, -3 * mt),
                j.lineTo(mt, -mt),
                j.lineTo(3 * mt, -mt),
                j.lineTo(3 * mt, mt),
                j.lineTo(mt, mt),
                j.lineTo(mt, 3 * mt),
                j.lineTo(-mt, 3 * mt),
                j.lineTo(-mt, mt),
                j.lineTo(-3 * mt, mt),
                j.closePath();
            },
          },
          Dt = at(1 / 3),
          wt = Dt * 2,
          Mt = {
            draw(j, yt) {
              const mt = at(yt / wt),
                kt = mt * Dt;
              j.moveTo(0, -mt),
                j.lineTo(kt, 0),
                j.lineTo(0, mt),
                j.lineTo(-kt, 0),
                j.closePath();
            },
          },
          $ = {
            draw(j, yt) {
              const mt = at(yt),
                kt = -mt / 2;
              j.rect(kt, kt, mt, mt);
            },
          },
          w = 0.8908130915292852,
          M = ot(F / 10) / ot((7 * F) / 10),
          g = ot(V / 10) * M,
          v = -Q(V / 10) * M,
          ut = {
            draw(j, yt) {
              const mt = at(yt * w),
                kt = g * mt,
                Ht = v * mt;
              j.moveTo(0, -mt), j.lineTo(kt, Ht);
              for (let qt = 1; qt < 5; ++qt) {
                const N = (V * qt) / 5,
                  X = Q(N),
                  _t = ot(N);
                j.lineTo(_t * mt, -X * mt),
                  j.lineTo(X * kt - _t * Ht, _t * kt + X * Ht);
              }
              j.closePath();
            },
          },
          lt = at(3),
          Nt = {
            draw(j, yt) {
              const mt = -at(yt / (lt * 3));
              j.moveTo(0, mt * 2),
                j.lineTo(-lt * mt, -mt),
                j.lineTo(lt * mt, -mt),
                j.closePath();
            },
          },
          C = -0.5,
          B = at(3) / 2,
          nt = 1 / at(12),
          bt = (nt / 2 + 1) * 3,
          P = {
            draw(j, yt) {
              const mt = at(yt / bt),
                kt = mt / 2,
                Ht = mt * nt,
                qt = kt,
                N = mt * nt + mt,
                X = -qt,
                _t = N;
              j.moveTo(kt, Ht),
                j.lineTo(qt, N),
                j.lineTo(X, _t),
                j.lineTo(C * kt - B * Ht, B * kt + C * Ht),
                j.lineTo(C * qt - B * N, B * qt + C * N),
                j.lineTo(C * X - B * _t, B * X + C * _t),
                j.lineTo(C * kt + B * Ht, C * Ht - B * kt),
                j.lineTo(C * qt + B * N, C * N - B * qt),
                j.lineTo(C * X + B * _t, C * _t - B * X),
                j.closePath();
            },
          };
        var m = n(94770),
          S = n(5823);
        const _ = at(3),
          E = {
            draw(j, yt) {
              const mt = at(yt + et(yt / 28, 0.75)) * 0.59436,
                kt = mt / 2,
                Ht = kt * _;
              j.moveTo(0, mt),
                j.lineTo(0, -mt),
                j.moveTo(-Ht, -kt),
                j.lineTo(Ht, kt),
                j.moveTo(-Ht, kt),
                j.lineTo(Ht, -kt);
            },
          },
          c = {
            draw(j, yt) {
              const mt = at(yt) * 0.62625;
              j.moveTo(0, -mt),
                j.lineTo(mt, 0),
                j.lineTo(0, mt),
                j.lineTo(-mt, 0),
                j.closePath();
            },
          },
          o = {
            draw(j, yt) {
              const mt = at(yt - et(yt / 7, 2)) * 0.87559;
              j.moveTo(-mt, 0),
                j.lineTo(mt, 0),
                j.moveTo(0, mt),
                j.lineTo(0, -mt);
            },
          },
          p = {
            draw(j, yt) {
              const mt = at(yt) * 0.4431;
              j.moveTo(mt, mt),
                j.lineTo(mt, -mt),
                j.lineTo(-mt, -mt),
                j.lineTo(-mt, mt),
                j.closePath();
            },
          },
          b = at(3),
          R = {
            draw(j, yt) {
              const mt = at(yt) * 0.6824,
                kt = mt / 2,
                Ht = (mt * b) / 2;
              j.moveTo(0, -mt),
                j.lineTo(Ht, kt),
                j.lineTo(-Ht, kt),
                j.closePath();
            },
          },
          J = {
            draw(j, yt) {
              const mt = at(yt - et(yt / 6, 1.7)) * 0.6189;
              j.moveTo(-mt, -mt),
                j.lineTo(mt, mt),
                j.moveTo(-mt, mt),
                j.lineTo(mt, -mt);
            },
          },
          Y = [L, Kt, Mt, $, ut, Nt, P],
          It = [L, o, J, R, E, p, c];
        function Z(j, yt) {
          let mt = null,
            kt = (0, S.i)(Ht);
          (j = typeof j == "function" ? j : (0, m.A)(j || L)),
            (yt =
              typeof yt == "function"
                ? yt
                : (0, m.A)(yt === void 0 ? 64 : +yt));
          function Ht() {
            let qt;
            if (
              (mt || (mt = qt = kt()),
              j.apply(this, arguments).draw(mt, +yt.apply(this, arguments)),
              qt)
            )
              return (mt = null), qt + "" || null;
          }
          return (
            (Ht.type = function (qt) {
              return arguments.length
                ? ((j = typeof qt == "function" ? qt : (0, m.A)(qt)), Ht)
                : j;
            }),
            (Ht.size = function (qt) {
              return arguments.length
                ? ((yt = typeof qt == "function" ? qt : (0, m.A)(+qt)), Ht)
                : yt;
            }),
            (Ht.context = function (qt) {
              return arguments.length ? ((mt = qt ?? null), Ht) : mt;
            }),
            Ht
          );
        }
        var vt = n(34164),
          ft = n(93563);
        function xt(j) {
          "@babel/helpers - typeof";
          return (
            (xt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (yt) {
                    return typeof yt;
                  }
                : function (yt) {
                    return yt &&
                      typeof Symbol == "function" &&
                      yt.constructor === Symbol &&
                      yt !== Symbol.prototype
                      ? "symbol"
                      : typeof yt;
                  }),
            xt(j)
          );
        }
        var Ut = ["type", "size", "sizeType"];
        function Vt() {
          return (
            (Vt = Object.assign
              ? Object.assign.bind()
              : function (j) {
                  for (var yt = 1; yt < arguments.length; yt++) {
                    var mt = arguments[yt];
                    for (var kt in mt)
                      Object.prototype.hasOwnProperty.call(mt, kt) &&
                        (j[kt] = mt[kt]);
                  }
                  return j;
                }),
            Vt.apply(this, arguments)
          );
        }
        function ct(j, yt) {
          var mt = Object.keys(j);
          if (Object.getOwnPropertySymbols) {
            var kt = Object.getOwnPropertySymbols(j);
            yt &&
              (kt = kt.filter(function (Ht) {
                return Object.getOwnPropertyDescriptor(j, Ht).enumerable;
              })),
              mt.push.apply(mt, kt);
          }
          return mt;
        }
        function l(j) {
          for (var yt = 1; yt < arguments.length; yt++) {
            var mt = arguments[yt] != null ? arguments[yt] : {};
            yt % 2
              ? ct(Object(mt), !0).forEach(function (kt) {
                  h(j, kt, mt[kt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    j,
                    Object.getOwnPropertyDescriptors(mt),
                  )
                : ct(Object(mt)).forEach(function (kt) {
                    Object.defineProperty(
                      j,
                      kt,
                      Object.getOwnPropertyDescriptor(mt, kt),
                    );
                  });
          }
          return j;
        }
        function h(j, yt, mt) {
          return (
            (yt = O(yt)),
            yt in j
              ? Object.defineProperty(j, yt, {
                  value: mt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (j[yt] = mt),
            j
          );
        }
        function O(j) {
          var yt = f(j, "string");
          return xt(yt) == "symbol" ? yt : yt + "";
        }
        function f(j, yt) {
          if (xt(j) != "object" || !j) return j;
          var mt = j[Symbol.toPrimitive];
          if (mt !== void 0) {
            var kt = mt.call(j, yt || "default");
            if (xt(kt) != "object") return kt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (yt === "string" ? String : Number)(j);
        }
        function D(j, yt) {
          if (j == null) return {};
          var mt = tt(j, yt),
            kt,
            Ht;
          if (Object.getOwnPropertySymbols) {
            var qt = Object.getOwnPropertySymbols(j);
            for (Ht = 0; Ht < qt.length; Ht++)
              (kt = qt[Ht]),
                !(yt.indexOf(kt) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(j, kt) &&
                  (mt[kt] = j[kt]);
          }
          return mt;
        }
        function tt(j, yt) {
          if (j == null) return {};
          var mt = {};
          for (var kt in j)
            if (Object.prototype.hasOwnProperty.call(j, kt)) {
              if (yt.indexOf(kt) >= 0) continue;
              mt[kt] = j[kt];
            }
          return mt;
        }
        var Et = {
            symbolCircle: L,
            symbolCross: Kt,
            symbolDiamond: Mt,
            symbolSquare: $,
            symbolStar: ut,
            symbolTriangle: Nt,
            symbolWye: P,
          },
          Wt = Math.PI / 180,
          Ft = function (yt) {
            var mt = "symbol".concat(K()(yt));
            return Et[mt] || L;
          },
          ie = function (yt, mt, kt) {
            if (mt === "area") return yt;
            switch (kt) {
              case "cross":
                return (5 * yt * yt) / 9;
              case "diamond":
                return (0.5 * yt * yt) / Math.sqrt(3);
              case "square":
                return yt * yt;
              case "star": {
                var Ht = 18 * Wt;
                return (
                  1.25 *
                  yt *
                  yt *
                  (Math.tan(Ht) - Math.tan(Ht * 2) * Math.pow(Math.tan(Ht), 2))
                );
              }
              case "triangle":
                return (Math.sqrt(3) * yt * yt) / 4;
              case "wye":
                return ((21 - 10 * Math.sqrt(3)) * yt * yt) / 8;
              default:
                return (Math.PI * yt * yt) / 4;
            }
          },
          k = function (yt, mt) {
            Et["symbol".concat(K()(yt))] = mt;
          },
          G = function (yt) {
            var mt = yt.type,
              kt = mt === void 0 ? "circle" : mt,
              Ht = yt.size,
              qt = Ht === void 0 ? 64 : Ht,
              N = yt.sizeType,
              X = N === void 0 ? "area" : N,
              _t = D(yt, Ut),
              At = l(l({}, _t), {}, { type: kt, size: qt, sizeType: X }),
              Zt = function () {
                var je = Ft(kt),
                  Ye = Z()
                    .type(je)
                    .size(ie(qt, X, kt));
                return Ye();
              },
              Be = At.className,
              Le = At.cx,
              Pe = At.cy,
              Ce = (0, ft.J9)(At, !0);
            return Le === +Le && Pe === +Pe && qt === +qt
              ? s.createElement(
                  "path",
                  Vt({}, Ce, {
                    className: (0, vt.A)("recharts-symbols", Be),
                    transform: "translate(".concat(Le, ", ").concat(Pe, ")"),
                    d: Zt(),
                  }),
                )
              : null;
          };
        G.registerSymbol = k;
      },
      53818: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, {
          yp: () => It,
          GG: () => O,
          NE: () => Z,
          nZ: () => vt,
          xQ: () => ft,
        });
        var s = n(90626),
          rt = n(3316),
          K = n.n(rt),
          q = n(23449),
          U = n.n(q),
          Q = n(23734),
          z = n.n(Q),
          et = n(58782),
          ot = n.n(et),
          at = n(52857),
          it = n(34164),
          F = n(86356),
          dt = n(93563);
        function V(f) {
          "@babel/helpers - typeof";
          return (
            (V =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (D) {
                    return typeof D;
                  }
                : function (D) {
                    return D &&
                      typeof Symbol == "function" &&
                      D.constructor === Symbol &&
                      D !== Symbol.prototype
                      ? "symbol"
                      : typeof D;
                  }),
            V(f)
          );
        }
        function pt() {
          return (
            (pt = Object.assign
              ? Object.assign.bind()
              : function (f) {
                  for (var D = 1; D < arguments.length; D++) {
                    var tt = arguments[D];
                    for (var Et in tt)
                      Object.prototype.hasOwnProperty.call(tt, Et) &&
                        (f[Et] = tt[Et]);
                  }
                  return f;
                }),
            pt.apply(this, arguments)
          );
        }
        function Pt(f, D) {
          return Mt(f) || wt(f, D) || Kt(f, D) || L();
        }
        function L() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Kt(f, D) {
          if (f) {
            if (typeof f == "string") return Dt(f, D);
            var tt = Object.prototype.toString.call(f).slice(8, -1);
            if (
              (tt === "Object" && f.constructor && (tt = f.constructor.name),
              tt === "Map" || tt === "Set")
            )
              return Array.from(f);
            if (
              tt === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(tt)
            )
              return Dt(f, D);
          }
        }
        function Dt(f, D) {
          (D == null || D > f.length) && (D = f.length);
          for (var tt = 0, Et = new Array(D); tt < D; tt++) Et[tt] = f[tt];
          return Et;
        }
        function wt(f, D) {
          var tt =
            f == null
              ? null
              : (typeof Symbol < "u" && f[Symbol.iterator]) || f["@@iterator"];
          if (tt != null) {
            var Et,
              Wt,
              Ft,
              ie,
              k = [],
              G = !0,
              j = !1;
            try {
              if (((Ft = (tt = tt.call(f)).next), D === 0)) {
                if (Object(tt) !== tt) return;
                G = !1;
              } else
                for (
                  ;
                  !(G = (Et = Ft.call(tt)).done) &&
                  (k.push(Et.value), k.length !== D);
                  G = !0
                );
            } catch (yt) {
              (j = !0), (Wt = yt);
            } finally {
              try {
                if (
                  !G &&
                  tt.return != null &&
                  ((ie = tt.return()), Object(ie) !== ie)
                )
                  return;
              } finally {
                if (j) throw Wt;
              }
            }
            return k;
          }
        }
        function Mt(f) {
          if (Array.isArray(f)) return f;
        }
        function $(f, D) {
          var tt = Object.keys(f);
          if (Object.getOwnPropertySymbols) {
            var Et = Object.getOwnPropertySymbols(f);
            D &&
              (Et = Et.filter(function (Wt) {
                return Object.getOwnPropertyDescriptor(f, Wt).enumerable;
              })),
              tt.push.apply(tt, Et);
          }
          return tt;
        }
        function w(f) {
          for (var D = 1; D < arguments.length; D++) {
            var tt = arguments[D] != null ? arguments[D] : {};
            D % 2
              ? $(Object(tt), !0).forEach(function (Et) {
                  M(f, Et, tt[Et]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    f,
                    Object.getOwnPropertyDescriptors(tt),
                  )
                : $(Object(tt)).forEach(function (Et) {
                    Object.defineProperty(
                      f,
                      Et,
                      Object.getOwnPropertyDescriptor(tt, Et),
                    );
                  });
          }
          return f;
        }
        function M(f, D, tt) {
          return (
            (D = g(D)),
            D in f
              ? Object.defineProperty(f, D, {
                  value: tt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (f[D] = tt),
            f
          );
        }
        function g(f) {
          var D = v(f, "string");
          return V(D) == "symbol" ? D : D + "";
        }
        function v(f, D) {
          if (V(f) != "object" || !f) return f;
          var tt = f[Symbol.toPrimitive];
          if (tt !== void 0) {
            var Et = tt.call(f, D || "default");
            if (V(Et) != "object") return Et;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (D === "string" ? String : Number)(f);
        }
        var ut = function (D, tt, Et, Wt, Ft) {
            var ie = Et - Wt,
              k;
            return (
              (k = "M ".concat(D, ",").concat(tt)),
              (k += "L ".concat(D + Et, ",").concat(tt)),
              (k += "L ".concat(D + Et - ie / 2, ",").concat(tt + Ft)),
              (k += "L ".concat(D + Et - ie / 2 - Wt, ",").concat(tt + Ft)),
              (k += "L ".concat(D, ",").concat(tt, " Z")),
              k
            );
          },
          lt = {
            x: 0,
            y: 0,
            upperWidth: 0,
            lowerWidth: 0,
            height: 0,
            isUpdateAnimationActive: !1,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          },
          Nt = function (D) {
            var tt = w(w({}, lt), D),
              Et = (0, s.useRef)(),
              Wt = (0, s.useState)(-1),
              Ft = Pt(Wt, 2),
              ie = Ft[0],
              k = Ft[1];
            (0, s.useEffect)(function () {
              if (Et.current && Et.current.getTotalLength)
                try {
                  var Zt = Et.current.getTotalLength();
                  Zt && k(Zt);
                } catch {}
            }, []);
            var G = tt.x,
              j = tt.y,
              yt = tt.upperWidth,
              mt = tt.lowerWidth,
              kt = tt.height,
              Ht = tt.className,
              qt = tt.animationEasing,
              N = tt.animationDuration,
              X = tt.animationBegin,
              _t = tt.isUpdateAnimationActive;
            if (
              G !== +G ||
              j !== +j ||
              yt !== +yt ||
              mt !== +mt ||
              kt !== +kt ||
              (yt === 0 && mt === 0) ||
              kt === 0
            )
              return null;
            var At = (0, it.A)("recharts-trapezoid", Ht);
            return _t
              ? s.createElement(
                  F.Ay,
                  {
                    canBegin: ie > 0,
                    from: {
                      upperWidth: 0,
                      lowerWidth: 0,
                      height: kt,
                      x: G,
                      y: j,
                    },
                    to: {
                      upperWidth: yt,
                      lowerWidth: mt,
                      height: kt,
                      x: G,
                      y: j,
                    },
                    duration: N,
                    animationEasing: qt,
                    isActive: _t,
                  },
                  function (Zt) {
                    var Be = Zt.upperWidth,
                      Le = Zt.lowerWidth,
                      Pe = Zt.height,
                      Ce = Zt.x,
                      We = Zt.y;
                    return s.createElement(
                      F.Ay,
                      {
                        canBegin: ie > 0,
                        from: "0px ".concat(ie === -1 ? 1 : ie, "px"),
                        to: "".concat(ie, "px 0px"),
                        attributeName: "strokeDasharray",
                        begin: X,
                        duration: N,
                        easing: qt,
                      },
                      s.createElement(
                        "path",
                        pt({}, (0, dt.J9)(tt, !0), {
                          className: At,
                          d: ut(Ce, We, Be, Le, Pe),
                          ref: Et,
                        }),
                      ),
                    );
                  },
                )
              : s.createElement(
                  "g",
                  null,
                  s.createElement(
                    "path",
                    pt({}, (0, dt.J9)(tt, !0), {
                      className: At,
                      d: ut(G, j, yt, mt, kt),
                    }),
                  ),
                );
          },
          C = n(24588),
          B = n(75055),
          nt = n(17134),
          bt = [
            "option",
            "shapeType",
            "propTransformer",
            "activeClassName",
            "isActive",
          ];
        function P(f) {
          "@babel/helpers - typeof";
          return (
            (P =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (D) {
                    return typeof D;
                  }
                : function (D) {
                    return D &&
                      typeof Symbol == "function" &&
                      D.constructor === Symbol &&
                      D !== Symbol.prototype
                      ? "symbol"
                      : typeof D;
                  }),
            P(f)
          );
        }
        function m(f, D) {
          if (f == null) return {};
          var tt = S(f, D),
            Et,
            Wt;
          if (Object.getOwnPropertySymbols) {
            var Ft = Object.getOwnPropertySymbols(f);
            for (Wt = 0; Wt < Ft.length; Wt++)
              (Et = Ft[Wt]),
                !(D.indexOf(Et) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(f, Et) &&
                  (tt[Et] = f[Et]);
          }
          return tt;
        }
        function S(f, D) {
          if (f == null) return {};
          var tt = {};
          for (var Et in f)
            if (Object.prototype.hasOwnProperty.call(f, Et)) {
              if (D.indexOf(Et) >= 0) continue;
              tt[Et] = f[Et];
            }
          return tt;
        }
        function _(f, D) {
          var tt = Object.keys(f);
          if (Object.getOwnPropertySymbols) {
            var Et = Object.getOwnPropertySymbols(f);
            D &&
              (Et = Et.filter(function (Wt) {
                return Object.getOwnPropertyDescriptor(f, Wt).enumerable;
              })),
              tt.push.apply(tt, Et);
          }
          return tt;
        }
        function E(f) {
          for (var D = 1; D < arguments.length; D++) {
            var tt = arguments[D] != null ? arguments[D] : {};
            D % 2
              ? _(Object(tt), !0).forEach(function (Et) {
                  c(f, Et, tt[Et]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    f,
                    Object.getOwnPropertyDescriptors(tt),
                  )
                : _(Object(tt)).forEach(function (Et) {
                    Object.defineProperty(
                      f,
                      Et,
                      Object.getOwnPropertyDescriptor(tt, Et),
                    );
                  });
          }
          return f;
        }
        function c(f, D, tt) {
          return (
            (D = o(D)),
            D in f
              ? Object.defineProperty(f, D, {
                  value: tt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (f[D] = tt),
            f
          );
        }
        function o(f) {
          var D = p(f, "string");
          return P(D) == "symbol" ? D : D + "";
        }
        function p(f, D) {
          if (P(f) != "object" || !f) return f;
          var tt = f[Symbol.toPrimitive];
          if (tt !== void 0) {
            var Et = tt.call(f, D || "default");
            if (P(Et) != "object") return Et;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (D === "string" ? String : Number)(f);
        }
        function b(f, D) {
          return E(E({}, D), f);
        }
        function R(f, D) {
          return f === "symbols";
        }
        function J(f) {
          var D = f.shapeType,
            tt = f.elementProps;
          switch (D) {
            case "rectangle":
              return s.createElement(at.M, tt);
            case "trapezoid":
              return s.createElement(Nt, tt);
            case "sector":
              return s.createElement(C.h, tt);
            case "symbols":
              if (R(D, tt)) return s.createElement(nt.i, tt);
              break;
            default:
              return null;
          }
        }
        function Y(f) {
          return (0, s.isValidElement)(f) ? f.props : f;
        }
        function It(f) {
          var D = f.option,
            tt = f.shapeType,
            Et = f.propTransformer,
            Wt = Et === void 0 ? b : Et,
            Ft = f.activeClassName,
            ie = Ft === void 0 ? "recharts-active-shape" : Ft,
            k = f.isActive,
            G = m(f, bt),
            j;
          if ((0, s.isValidElement)(D))
            j = (0, s.cloneElement)(D, E(E({}, G), Y(D)));
          else if (K()(D)) j = D(G);
          else if (U()(D) && !z()(D)) {
            var yt = Wt(D, G);
            j = s.createElement(J, { shapeType: tt, elementProps: yt });
          } else {
            var mt = G;
            j = s.createElement(J, { shapeType: tt, elementProps: mt });
          }
          return k ? s.createElement(B.W, { className: ie }, j) : j;
        }
        function Z(f, D) {
          return D != null && "trapezoids" in f.props;
        }
        function vt(f, D) {
          return D != null && "sectors" in f.props;
        }
        function ft(f, D) {
          return D != null && "points" in f.props;
        }
        function xt(f, D) {
          var tt,
            Et,
            Wt =
              f.x ===
                (D == null || (tt = D.labelViewBox) === null || tt === void 0
                  ? void 0
                  : tt.x) || f.x === D.x,
            Ft =
              f.y ===
                (D == null || (Et = D.labelViewBox) === null || Et === void 0
                  ? void 0
                  : Et.y) || f.y === D.y;
          return Wt && Ft;
        }
        function Ut(f, D) {
          var tt = f.endAngle === D.endAngle,
            Et = f.startAngle === D.startAngle;
          return tt && Et;
        }
        function Vt(f, D) {
          var tt = f.x === D.x,
            Et = f.y === D.y,
            Wt = f.z === D.z;
          return tt && Et && Wt;
        }
        function ct(f, D) {
          var tt;
          return (
            Z(f, D) ? (tt = xt) : vt(f, D) ? (tt = Ut) : ft(f, D) && (tt = Vt),
            tt
          );
        }
        function l(f, D) {
          var tt;
          return (
            Z(f, D)
              ? (tt = "trapezoids")
              : vt(f, D)
                ? (tt = "sectors")
                : ft(f, D) && (tt = "points"),
            tt
          );
        }
        function h(f, D) {
          if (Z(f, D)) {
            var tt;
            return (tt = D.tooltipPayload) === null ||
              tt === void 0 ||
              (tt = tt[0]) === null ||
              tt === void 0 ||
              (tt = tt.payload) === null ||
              tt === void 0
              ? void 0
              : tt.payload;
          }
          if (vt(f, D)) {
            var Et;
            return (Et = D.tooltipPayload) === null ||
              Et === void 0 ||
              (Et = Et[0]) === null ||
              Et === void 0 ||
              (Et = Et.payload) === null ||
              Et === void 0
              ? void 0
              : Et.payload;
          }
          return ft(f, D) ? D.payload : {};
        }
        function O(f) {
          var D = f.activeTooltipItem,
            tt = f.graphicalItem,
            Et = f.itemData,
            Wt = l(tt, D),
            Ft = h(tt, D),
            ie = Et.filter(function (G, j) {
              var yt = ot()(Ft, G),
                mt = tt.props[Wt].filter(function (qt) {
                  var N = ct(tt, D);
                  return N(qt, D);
                }),
                kt = tt.props[Wt].indexOf(mt[mt.length - 1]),
                Ht = j === kt;
              return yt && Ht;
            }),
            k = Et.indexOf(ie[ie.length - 1]);
          return k;
        }
      },
      12260: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, {
          P2: () => $,
          bx: () => M,
          pr: () => Kt,
          sl: () => Dt,
          vh: () => wt,
        });
        var s = n(90338),
          rt = n.n(s),
          K = n(17489),
          q = n.n(K),
          U = n(24633),
          Q = n(93563),
          z = n(96714),
          et = n(20283);
        function ot(g) {
          "@babel/helpers - typeof";
          return (
            (ot =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (v) {
                    return typeof v;
                  }
                : function (v) {
                    return v &&
                      typeof Symbol == "function" &&
                      v.constructor === Symbol &&
                      v !== Symbol.prototype
                      ? "symbol"
                      : typeof v;
                  }),
            ot(g)
          );
        }
        function at(g, v) {
          if (!(g instanceof v))
            throw new TypeError("Cannot call a class as a function");
        }
        function it(g, v) {
          for (var ut = 0; ut < v.length; ut++) {
            var lt = v[ut];
            (lt.enumerable = lt.enumerable || !1),
              (lt.configurable = !0),
              "value" in lt && (lt.writable = !0),
              Object.defineProperty(g, Pt(lt.key), lt);
          }
        }
        function F(g, v, ut) {
          return (
            v && it(g.prototype, v),
            ut && it(g, ut),
            Object.defineProperty(g, "prototype", { writable: !1 }),
            g
          );
        }
        function dt(g, v) {
          var ut = Object.keys(g);
          if (Object.getOwnPropertySymbols) {
            var lt = Object.getOwnPropertySymbols(g);
            v &&
              (lt = lt.filter(function (Nt) {
                return Object.getOwnPropertyDescriptor(g, Nt).enumerable;
              })),
              ut.push.apply(ut, lt);
          }
          return ut;
        }
        function V(g) {
          for (var v = 1; v < arguments.length; v++) {
            var ut = arguments[v] != null ? arguments[v] : {};
            v % 2
              ? dt(Object(ut), !0).forEach(function (lt) {
                  pt(g, lt, ut[lt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    g,
                    Object.getOwnPropertyDescriptors(ut),
                  )
                : dt(Object(ut)).forEach(function (lt) {
                    Object.defineProperty(
                      g,
                      lt,
                      Object.getOwnPropertyDescriptor(ut, lt),
                    );
                  });
          }
          return g;
        }
        function pt(g, v, ut) {
          return (
            (v = Pt(v)),
            v in g
              ? Object.defineProperty(g, v, {
                  value: ut,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (g[v] = ut),
            g
          );
        }
        function Pt(g) {
          var v = L(g, "string");
          return ot(v) == "symbol" ? v : v + "";
        }
        function L(g, v) {
          if (ot(g) != "object" || !g) return g;
          var ut = g[Symbol.toPrimitive];
          if (ut !== void 0) {
            var lt = ut.call(g, v || "default");
            if (ot(lt) != "object") return lt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (v === "string" ? String : Number)(g);
        }
        var Kt = function (v, ut, lt, Nt, C) {
            var B = v.width,
              nt = v.height,
              bt = v.layout,
              P = v.children,
              m = Object.keys(ut),
              S = {
                left: lt.left,
                leftMirror: lt.left,
                right: B - lt.right,
                rightMirror: B - lt.right,
                top: lt.top,
                topMirror: lt.top,
                bottom: nt - lt.bottom,
                bottomMirror: nt - lt.bottom,
              },
              _ = !!(0, Q.BU)(P, et.y);
            return m.reduce(function (E, c) {
              var o = ut[c],
                p = o.orientation,
                b = o.domain,
                R = o.padding,
                J = R === void 0 ? {} : R,
                Y = o.mirror,
                It = o.reversed,
                Z = "".concat(p).concat(Y ? "Mirror" : ""),
                vt,
                ft,
                xt,
                Ut,
                Vt;
              if (
                o.type === "number" &&
                (o.padding === "gap" || o.padding === "no-gap")
              ) {
                var ct = b[1] - b[0],
                  l = 1 / 0,
                  h = o.categoricalDomain.sort(z.ck);
                if (
                  (h.forEach(function (G, j) {
                    j > 0 && (l = Math.min((G || 0) - (h[j - 1] || 0), l));
                  }),
                  Number.isFinite(l))
                ) {
                  var O = l / ct,
                    f = o.layout === "vertical" ? lt.height : lt.width;
                  if (
                    (o.padding === "gap" && (vt = (O * f) / 2),
                    o.padding === "no-gap")
                  ) {
                    var D = (0, z.F4)(v.barCategoryGap, O * f),
                      tt = (O * f) / 2;
                    vt = tt - D - ((tt - D) / f) * D;
                  }
                }
              }
              Nt === "xAxis"
                ? (ft = [
                    lt.left + (J.left || 0) + (vt || 0),
                    lt.left + lt.width - (J.right || 0) - (vt || 0),
                  ])
                : Nt === "yAxis"
                  ? (ft =
                      bt === "horizontal"
                        ? [
                            lt.top + lt.height - (J.bottom || 0),
                            lt.top + (J.top || 0),
                          ]
                        : [
                            lt.top + (J.top || 0) + (vt || 0),
                            lt.top + lt.height - (J.bottom || 0) - (vt || 0),
                          ])
                  : (ft = o.range),
                It && (ft = [ft[1], ft[0]]);
              var Et = (0, U.W7)(o, C, _),
                Wt = Et.scale,
                Ft = Et.realScaleType;
              Wt.domain(b).range(ft), (0, U.YB)(Wt);
              var ie = (0, U.w7)(Wt, V(V({}, o), {}, { realScaleType: Ft }));
              Nt === "xAxis"
                ? ((Vt = (p === "top" && !Y) || (p === "bottom" && Y)),
                  (xt = lt.left),
                  (Ut = S[Z] - Vt * o.height))
                : Nt === "yAxis" &&
                  ((Vt = (p === "left" && !Y) || (p === "right" && Y)),
                  (xt = S[Z] - Vt * o.width),
                  (Ut = lt.top));
              var k = V(
                V(V({}, o), ie),
                {},
                {
                  realScaleType: Ft,
                  x: xt,
                  y: Ut,
                  scale: Wt,
                  width: Nt === "xAxis" ? lt.width : o.width,
                  height: Nt === "yAxis" ? lt.height : o.height,
                },
              );
              return (
                (k.bandSize = (0, U.Hj)(k, ie)),
                !o.hide && Nt === "xAxis"
                  ? (S[Z] += (Vt ? -1 : 1) * k.height)
                  : o.hide || (S[Z] += (Vt ? -1 : 1) * k.width),
                V(V({}, E), {}, pt({}, c, k))
              );
            }, {});
          },
          Dt = function (v, ut) {
            var lt = v.x,
              Nt = v.y,
              C = ut.x,
              B = ut.y;
            return {
              x: Math.min(lt, C),
              y: Math.min(Nt, B),
              width: Math.abs(C - lt),
              height: Math.abs(B - Nt),
            };
          },
          wt = function (v) {
            var ut = v.x1,
              lt = v.y1,
              Nt = v.x2,
              C = v.y2;
            return Dt({ x: ut, y: lt }, { x: Nt, y: C });
          },
          Mt = (function () {
            function g(v) {
              at(this, g), (this.scale = v);
            }
            return F(
              g,
              [
                {
                  key: "domain",
                  get: function () {
                    return this.scale.domain;
                  },
                },
                {
                  key: "range",
                  get: function () {
                    return this.scale.range;
                  },
                },
                {
                  key: "rangeMin",
                  get: function () {
                    return this.range()[0];
                  },
                },
                {
                  key: "rangeMax",
                  get: function () {
                    return this.range()[1];
                  },
                },
                {
                  key: "bandwidth",
                  get: function () {
                    return this.scale.bandwidth;
                  },
                },
                {
                  key: "apply",
                  value: function (ut) {
                    var lt =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : {},
                      Nt = lt.bandAware,
                      C = lt.position;
                    if (ut !== void 0) {
                      if (C)
                        switch (C) {
                          case "start":
                            return this.scale(ut);
                          case "middle": {
                            var B = this.bandwidth ? this.bandwidth() / 2 : 0;
                            return this.scale(ut) + B;
                          }
                          case "end": {
                            var nt = this.bandwidth ? this.bandwidth() : 0;
                            return this.scale(ut) + nt;
                          }
                          default:
                            return this.scale(ut);
                        }
                      if (Nt) {
                        var bt = this.bandwidth ? this.bandwidth() / 2 : 0;
                        return this.scale(ut) + bt;
                      }
                      return this.scale(ut);
                    }
                  },
                },
                {
                  key: "isInRange",
                  value: function (ut) {
                    var lt = this.range(),
                      Nt = lt[0],
                      C = lt[lt.length - 1];
                    return Nt <= C ? ut >= Nt && ut <= C : ut >= C && ut <= Nt;
                  },
                },
              ],
              [
                {
                  key: "create",
                  value: function (ut) {
                    return new g(ut);
                  },
                },
              ],
            );
          })();
        pt(Mt, "EPS", 1e-4);
        var $ = function (v) {
          var ut = Object.keys(v).reduce(function (lt, Nt) {
            return V(V({}, lt), {}, pt({}, Nt, Mt.create(v[Nt])));
          }, {});
          return V(
            V({}, ut),
            {},
            {
              apply: function (Nt) {
                var C =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  B = C.bandAware,
                  nt = C.position;
                return rt()(Nt, function (bt, P) {
                  return ut[P].apply(bt, { bandAware: B, position: nt });
                });
              },
              isInRange: function (Nt) {
                return q()(Nt, function (C, B) {
                  return ut[B].isInRange(C);
                });
              },
            },
          );
        };
        function w(g) {
          return ((g % 180) + 180) % 180;
        }
        var M = function (v) {
          var ut = v.width,
            lt = v.height,
            Nt =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0,
            C = w(Nt),
            B = (C * Math.PI) / 180,
            nt = Math.atan(lt / ut),
            bt =
              B > nt && B < Math.PI - nt ? lt / Math.sin(B) : ut / Math.cos(B);
          return Math.abs(bt);
        };
      },
      24633: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, {
          s0: () => ou,
          gH: () => ru,
          YB: () => vu,
          HQ: () => hu,
          xi: () => yu,
          Hj: () => _u,
          BX: () => au,
          tA: () => iu,
          DW: () => Su,
          y2: () => wu,
          nb: () => Eu,
          PW: () => fu,
          Ay: () => xa,
          vf: () => su,
          Mk: () => Cu,
          Ps: () => Fa,
          Mn: () => Au,
          kA: () => Tu,
          Rh: () => du,
          w7: () => Pu,
          zb: () => Iu,
          kr: () => Vr,
          _L: () => cu,
          KC: () => ju,
          A1: () => lu,
          W7: () => pu,
          AQ: () => Du,
          _f: () => mu,
        });
        var s = {};
        n.r(s),
          n.d(s, {
            scaleBand: () => rt.A,
            scaleDiverging: () => Ma,
            scaleDivergingLog: () => Ca,
            scaleDivergingPow: () => sa,
            scaleDivergingSqrt: () => to,
            scaleDivergingSymlog: () => Da,
            scaleIdentity: () => X,
            scaleImplicit: () => Mn.h,
            scaleLinear: () => N,
            scaleLog: () => qe,
            scaleOrdinal: () => Mn.A,
            scalePoint: () => rt.z,
            scalePow: () => In,
            scaleQuantile: () => nr,
            scaleQuantize: () => xr,
            scaleRadial: () => dr,
            scaleSequential: () => Ea,
            scaleSequentialLog: () => wa,
            scaleSequentialPow: () => la,
            scaleSequentialQuantile: () => Ta,
            scaleSequentialSqrt: () => Qa,
            scaleSequentialSymlog: () => Sa,
            scaleSqrt: () => Rn,
            scaleSymlog: () => bn,
            scaleThreshold: () => rr,
            scaleTime: () => Ja,
            scaleUtc: () => Za,
            tickFormat: () => Ht,
          });
        var rt = n(28583);
        const K = Math.sqrt(50),
          q = Math.sqrt(10),
          U = Math.sqrt(2);
        function Q(t, e, r) {
          const i = (e - t) / Math.max(0, r),
            d = Math.floor(Math.log10(i)),
            x = i / Math.pow(10, d),
            I = x >= K ? 10 : x >= q ? 5 : x >= U ? 2 : 1;
          let H, gt, ht;
          return (
            d < 0
              ? ((ht = Math.pow(10, -d) / I),
                (H = Math.round(t * ht)),
                (gt = Math.round(e * ht)),
                H / ht < t && ++H,
                gt / ht > e && --gt,
                (ht = -ht))
              : ((ht = Math.pow(10, d) * I),
                (H = Math.round(t / ht)),
                (gt = Math.round(e / ht)),
                H * ht < t && ++H,
                gt * ht > e && --gt),
            gt < H && 0.5 <= r && r < 2 ? Q(t, e, r * 2) : [H, gt, ht]
          );
        }
        function z(t, e, r) {
          if (((e = +e), (t = +t), (r = +r), !(r > 0))) return [];
          if (t === e) return [t];
          const i = e < t,
            [d, x, I] = i ? Q(e, t, r) : Q(t, e, r);
          if (!(x >= d)) return [];
          const H = x - d + 1,
            gt = new Array(H);
          if (i)
            if (I < 0) for (let ht = 0; ht < H; ++ht) gt[ht] = (x - ht) / -I;
            else for (let ht = 0; ht < H; ++ht) gt[ht] = (x - ht) * I;
          else if (I < 0) for (let ht = 0; ht < H; ++ht) gt[ht] = (d + ht) / -I;
          else for (let ht = 0; ht < H; ++ht) gt[ht] = (d + ht) * I;
          return gt;
        }
        function et(t, e, r) {
          return (e = +e), (t = +t), (r = +r), Q(t, e, r)[2];
        }
        function ot(t, e, r) {
          (e = +e), (t = +t), (r = +r);
          const i = e < t,
            d = i ? et(e, t, r) : et(t, e, r);
          return (i ? -1 : 1) * (d < 0 ? 1 / -d : d);
        }
        function at(t, e) {
          return t == null || e == null
            ? NaN
            : t < e
              ? -1
              : t > e
                ? 1
                : t >= e
                  ? 0
                  : NaN;
        }
        function it(t, e) {
          return t == null || e == null
            ? NaN
            : e < t
              ? -1
              : e > t
                ? 1
                : e >= t
                  ? 0
                  : NaN;
        }
        function F(t) {
          let e, r, i;
          t.length !== 2
            ? ((e = at),
              (r = (H, gt) => at(t(H), gt)),
              (i = (H, gt) => t(H) - gt))
            : ((e = t === at || t === it ? t : dt), (r = t), (i = t));
          function d(H, gt, ht = 0, Yt = H.length) {
            if (ht < Yt) {
              if (e(gt, gt) !== 0) return Yt;
              do {
                const Lt = (ht + Yt) >>> 1;
                r(H[Lt], gt) < 0 ? (ht = Lt + 1) : (Yt = Lt);
              } while (ht < Yt);
            }
            return ht;
          }
          function x(H, gt, ht = 0, Yt = H.length) {
            if (ht < Yt) {
              if (e(gt, gt) !== 0) return Yt;
              do {
                const Lt = (ht + Yt) >>> 1;
                r(H[Lt], gt) <= 0 ? (ht = Lt + 1) : (Yt = Lt);
              } while (ht < Yt);
            }
            return ht;
          }
          function I(H, gt, ht = 0, Yt = H.length) {
            const Lt = d(H, gt, ht, Yt - 1);
            return Lt > ht && i(H[Lt - 1], gt) > -i(H[Lt], gt) ? Lt - 1 : Lt;
          }
          return { left: d, center: I, right: x };
        }
        function dt() {
          return 0;
        }
        function V(t) {
          return t === null ? NaN : +t;
        }
        function* pt(t, e) {
          if (e === void 0)
            for (let r of t) r != null && (r = +r) >= r && (yield r);
          else {
            let r = -1;
            for (let i of t)
              (i = e(i, ++r, t)) != null && (i = +i) >= i && (yield i);
          }
        }
        const Pt = F(at),
          L = Pt.right,
          Kt = Pt.left,
          Dt = F(V).center,
          wt = L;
        var Mt = n(25705),
          $ = n(92789);
        function w(t, e) {
          return (isNumberArray(e) ? numberArray : M)(t, e);
        }
        function M(t, e) {
          var r = e ? e.length : 0,
            i = t ? Math.min(r, t.length) : 0,
            d = new Array(i),
            x = new Array(r),
            I;
          for (I = 0; I < i; ++I) d[I] = nt(t[I], e[I]);
          for (; I < r; ++I) x[I] = e[I];
          return function (H) {
            for (I = 0; I < i; ++I) x[I] = d[I](H);
            return x;
          };
        }
        function g(t, e) {
          var r = new Date();
          return (
            (t = +t),
            (e = +e),
            function (i) {
              return r.setTime(t * (1 - i) + e * i), r;
            }
          );
        }
        var v = n(55797);
        function ut(t, e) {
          var r = {},
            i = {},
            d;
          (t === null || typeof t != "object") && (t = {}),
            (e === null || typeof e != "object") && (e = {});
          for (d in e) d in t ? (r[d] = nt(t[d], e[d])) : (i[d] = e[d]);
          return function (x) {
            for (d in r) i[d] = r[d](x);
            return i;
          };
        }
        var lt = n(14553),
          Nt = n(47180);
        function C(t, e) {
          e || (e = []);
          var r = t ? Math.min(e.length, t.length) : 0,
            i = e.slice(),
            d;
          return function (x) {
            for (d = 0; d < r; ++d) i[d] = t[d] * (1 - x) + e[d] * x;
            return i;
          };
        }
        function B(t) {
          return ArrayBuffer.isView(t) && !(t instanceof DataView);
        }
        function nt(t, e) {
          var r = typeof e,
            i;
          return e == null || r === "boolean"
            ? (0, Nt.A)(e)
            : (r === "number"
                ? v.A
                : r === "string"
                  ? (i = (0, Mt.Ay)(e))
                    ? ((e = i), $.Ay)
                    : lt.A
                  : e instanceof Mt.Ay
                    ? $.Ay
                    : e instanceof Date
                      ? g
                      : B(e)
                        ? C
                        : Array.isArray(e)
                          ? M
                          : (typeof e.valueOf != "function" &&
                                typeof e.toString != "function") ||
                              isNaN(e)
                            ? ut
                            : v.A)(t, e);
        }
        function bt(t, e) {
          return (
            (t = +t),
            (e = +e),
            function (r) {
              return Math.round(t * (1 - r) + e * r);
            }
          );
        }
        function P(t) {
          return function () {
            return t;
          };
        }
        function m(t) {
          return +t;
        }
        var S = [0, 1];
        function _(t) {
          return t;
        }
        function E(t, e) {
          return (e -= t = +t)
            ? function (r) {
                return (r - t) / e;
              }
            : P(isNaN(e) ? NaN : 0.5);
        }
        function c(t, e) {
          var r;
          return (
            t > e && ((r = t), (t = e), (e = r)),
            function (i) {
              return Math.max(t, Math.min(e, i));
            }
          );
        }
        function o(t, e, r) {
          var i = t[0],
            d = t[1],
            x = e[0],
            I = e[1];
          return (
            d < i
              ? ((i = E(d, i)), (x = r(I, x)))
              : ((i = E(i, d)), (x = r(x, I))),
            function (H) {
              return x(i(H));
            }
          );
        }
        function p(t, e, r) {
          var i = Math.min(t.length, e.length) - 1,
            d = new Array(i),
            x = new Array(i),
            I = -1;
          for (
            t[i] < t[0] &&
            ((t = t.slice().reverse()), (e = e.slice().reverse()));
            ++I < i;
          )
            (d[I] = E(t[I], t[I + 1])), (x[I] = r(e[I], e[I + 1]));
          return function (H) {
            var gt = wt(t, H, 1, i) - 1;
            return x[gt](d[gt](H));
          };
        }
        function b(t, e) {
          return e
            .domain(t.domain())
            .range(t.range())
            .interpolate(t.interpolate())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function R() {
          var t = S,
            e = S,
            r = nt,
            i,
            d,
            x,
            I = _,
            H,
            gt,
            ht;
          function Yt() {
            var Qt = Math.min(t.length, e.length);
            return (
              I !== _ && (I = c(t[0], t[Qt - 1])),
              (H = Qt > 2 ? p : o),
              (gt = ht = null),
              Lt
            );
          }
          function Lt(Qt) {
            return Qt == null || isNaN((Qt = +Qt))
              ? x
              : (gt || (gt = H(t.map(i), e, r)))(i(I(Qt)));
          }
          return (
            (Lt.invert = function (Qt) {
              return I(d((ht || (ht = H(e, t.map(i), v.A)))(Qt)));
            }),
            (Lt.domain = function (Qt) {
              return arguments.length
                ? ((t = Array.from(Qt, m)), Yt())
                : t.slice();
            }),
            (Lt.range = function (Qt) {
              return arguments.length
                ? ((e = Array.from(Qt)), Yt())
                : e.slice();
            }),
            (Lt.rangeRound = function (Qt) {
              return (e = Array.from(Qt)), (r = bt), Yt();
            }),
            (Lt.clamp = function (Qt) {
              return arguments.length ? ((I = Qt ? !0 : _), Yt()) : I !== _;
            }),
            (Lt.interpolate = function (Qt) {
              return arguments.length ? ((r = Qt), Yt()) : r;
            }),
            (Lt.unknown = function (Qt) {
              return arguments.length ? ((x = Qt), Lt) : x;
            }),
            function (Qt, de) {
              return (i = Qt), (d = de), Yt();
            }
          );
        }
        function J() {
          return R()(_, _);
        }
        var Y = n(34777),
          It =
            /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function Z(t) {
          if (!(e = It.exec(t))) throw new Error("invalid format: " + t);
          var e;
          return new vt({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10],
          });
        }
        Z.prototype = vt.prototype;
        function vt(t) {
          (this.fill = t.fill === void 0 ? " " : t.fill + ""),
            (this.align = t.align === void 0 ? ">" : t.align + ""),
            (this.sign = t.sign === void 0 ? "-" : t.sign + ""),
            (this.symbol = t.symbol === void 0 ? "" : t.symbol + ""),
            (this.zero = !!t.zero),
            (this.width = t.width === void 0 ? void 0 : +t.width),
            (this.comma = !!t.comma),
            (this.precision = t.precision === void 0 ? void 0 : +t.precision),
            (this.trim = !!t.trim),
            (this.type = t.type === void 0 ? "" : t.type + "");
        }
        vt.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (this.width === void 0 ? "" : Math.max(1, this.width | 0)) +
            (this.comma ? "," : "") +
            (this.precision === void 0
              ? ""
              : "." + Math.max(0, this.precision | 0)) +
            (this.trim ? "~" : "") +
            this.type
          );
        };
        function ft(t) {
          return Math.abs((t = Math.round(t))) >= 1e21
            ? t.toLocaleString("en").replace(/,/g, "")
            : t.toString(10);
        }
        function xt(t, e) {
          if (!isFinite(t) || t === 0) return null;
          var r = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
              "e",
            ),
            i = t.slice(0, r);
          return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(r + 1)];
        }
        function Ut(t) {
          return (t = xt(Math.abs(t))), t ? t[1] : NaN;
        }
        function Vt(t, e) {
          return Math.max(
            0,
            Math.max(-8, Math.min(8, Math.floor(Ut(e) / 3))) * 3 -
              Ut(Math.abs(t)),
          );
        }
        function ct(t, e) {
          return function (r, i) {
            for (
              var d = r.length, x = [], I = 0, H = t[0], gt = 0;
              d > 0 &&
              H > 0 &&
              (gt + H + 1 > i && (H = Math.max(1, i - gt)),
              x.push(r.substring((d -= H), d + H)),
              !((gt += H + 1) > i));
            )
              H = t[(I = (I + 1) % t.length)];
            return x.reverse().join(e);
          };
        }
        function l(t) {
          return function (e) {
            return e.replace(/[0-9]/g, function (r) {
              return t[+r];
            });
          };
        }
        function h(t) {
          t: for (var e = t.length, r = 1, i = -1, d; r < e; ++r)
            switch (t[r]) {
              case ".":
                i = d = r;
                break;
              case "0":
                i === 0 && (i = r), (d = r);
                break;
              default:
                if (!+t[r]) break t;
                i > 0 && (i = 0);
                break;
            }
          return i > 0 ? t.slice(0, i) + t.slice(d + 1) : t;
        }
        var O;
        function f(t, e) {
          var r = xt(t, e);
          if (!r) return (O = void 0), t.toPrecision(e);
          var i = r[0],
            d = r[1],
            x = d - (O = Math.max(-8, Math.min(8, Math.floor(d / 3))) * 3) + 1,
            I = i.length;
          return x === I
            ? i
            : x > I
              ? i + new Array(x - I + 1).join("0")
              : x > 0
                ? i.slice(0, x) + "." + i.slice(x)
                : "0." +
                  new Array(1 - x).join("0") +
                  xt(t, Math.max(0, e + x - 1))[0];
        }
        function D(t, e) {
          var r = xt(t, e);
          if (!r) return t + "";
          var i = r[0],
            d = r[1];
          return d < 0
            ? "0." + new Array(-d).join("0") + i
            : i.length > d + 1
              ? i.slice(0, d + 1) + "." + i.slice(d + 1)
              : i + new Array(d - i.length + 2).join("0");
        }
        const tt = {
          "%": (t, e) => (t * 100).toFixed(e),
          b: (t) => Math.round(t).toString(2),
          c: (t) => t + "",
          d: ft,
          e: (t, e) => t.toExponential(e),
          f: (t, e) => t.toFixed(e),
          g: (t, e) => t.toPrecision(e),
          o: (t) => Math.round(t).toString(8),
          p: (t, e) => D(t * 100, e),
          r: D,
          s: f,
          X: (t) => Math.round(t).toString(16).toUpperCase(),
          x: (t) => Math.round(t).toString(16),
        };
        function Et(t) {
          return t;
        }
        var Wt = Array.prototype.map,
          Ft = [
            "y",
            "z",
            "a",
            "f",
            "p",
            "n",
            "\xB5",
            "m",
            "",
            "k",
            "M",
            "G",
            "T",
            "P",
            "E",
            "Z",
            "Y",
          ];
        function ie(t) {
          var e =
              t.grouping === void 0 || t.thousands === void 0
                ? Et
                : ct(Wt.call(t.grouping, Number), t.thousands + ""),
            r = t.currency === void 0 ? "" : t.currency[0] + "",
            i = t.currency === void 0 ? "" : t.currency[1] + "",
            d = t.decimal === void 0 ? "." : t.decimal + "",
            x = t.numerals === void 0 ? Et : l(Wt.call(t.numerals, String)),
            I = t.percent === void 0 ? "%" : t.percent + "",
            H = t.minus === void 0 ? "\u2212" : t.minus + "",
            gt = t.nan === void 0 ? "NaN" : t.nan + "";
          function ht(Lt, Qt) {
            Lt = Z(Lt);
            var de = Lt.fill,
              be = Lt.align,
              Ae = Lt.sign,
              Ve = Lt.symbol,
              Ze = Lt.zero,
              yn = Lt.width,
              xn = Lt.comma,
              Qe = Lt.precision,
              Tn = Lt.trim,
              _e = Lt.type;
            _e === "n"
              ? ((xn = !0), (_e = "g"))
              : tt[_e] || (Qe === void 0 && (Qe = 12), (Tn = !0), (_e = "g")),
              (Ze || (de === "0" && be === "=")) &&
                ((Ze = !0), (de = "0"), (be = "="));
            var gn =
                (Qt && Qt.prefix !== void 0 ? Qt.prefix : "") +
                (Ve === "$"
                  ? r
                  : Ve === "#" && /[boxX]/.test(_e)
                    ? "0" + _e.toLowerCase()
                    : ""),
              Sr =
                (Ve === "$" ? i : /[%p]/.test(_e) ? I : "") +
                (Qt && Qt.suffix !== void 0 ? Qt.suffix : ""),
              Zi = tt[_e],
              Aa = /[defgprs%]/.test(_e);
            Qe =
              Qe === void 0
                ? 6
                : /[gprs]/.test(_e)
                  ? Math.max(1, Math.min(21, Qe))
                  : Math.max(0, Math.min(20, Qe));
            function Qi(an) {
              var Rr = gn,
                Yn = Sr,
                Yr,
                qi,
                Ai;
              if (_e === "c") (Yn = Zi(an) + Yn), (an = "");
              else {
                an = +an;
                var Pi = an < 0 || 1 / an < 0;
                if (
                  ((an = isNaN(an) ? gt : Zi(Math.abs(an), Qe)),
                  Tn && (an = h(an)),
                  Pi && +an == 0 && Ae !== "+" && (Pi = !1),
                  (Rr =
                    (Pi
                      ? Ae === "("
                        ? Ae
                        : H
                      : Ae === "-" || Ae === "("
                        ? ""
                        : Ae) + Rr),
                  (Yn =
                    (_e === "s" && !isNaN(an) && O !== void 0
                      ? Ft[8 + O / 3]
                      : "") +
                    Yn +
                    (Pi && Ae === "(" ? ")" : "")),
                  Aa)
                ) {
                  for (Yr = -1, qi = an.length; ++Yr < qi; )
                    if (((Ai = an.charCodeAt(Yr)), 48 > Ai || Ai > 57)) {
                      (Yn =
                        (Ai === 46 ? d + an.slice(Yr + 1) : an.slice(Yr)) + Yn),
                        (an = an.slice(0, Yr));
                      break;
                    }
                }
              }
              xn && !Ze && (an = e(an, 1 / 0));
              var Ei = Rr.length + an.length + Yn.length,
                gr = Ei < yn ? new Array(yn - Ei + 1).join(de) : "";
              switch (
                (xn &&
                  Ze &&
                  ((an = e(gr + an, gr.length ? yn - Yn.length : 1 / 0)),
                  (gr = "")),
                be)
              ) {
                case "<":
                  an = Rr + an + Yn + gr;
                  break;
                case "=":
                  an = Rr + gr + an + Yn;
                  break;
                case "^":
                  an =
                    gr.slice(0, (Ei = gr.length >> 1)) +
                    Rr +
                    an +
                    Yn +
                    gr.slice(Ei);
                  break;
                default:
                  an = gr + Rr + an + Yn;
                  break;
              }
              return x(an);
            }
            return (
              (Qi.toString = function () {
                return Lt + "";
              }),
              Qi
            );
          }
          function Yt(Lt, Qt) {
            var de = Math.max(-8, Math.min(8, Math.floor(Ut(Qt) / 3))) * 3,
              be = Math.pow(10, -de),
              Ae = ht(((Lt = Z(Lt)), (Lt.type = "f"), Lt), {
                suffix: Ft[8 + de / 3],
              });
            return function (Ve) {
              return Ae(be * Ve);
            };
          }
          return { format: ht, formatPrefix: Yt };
        }
        var k, G, j;
        yt({ thousands: ",", grouping: [3], currency: ["$", ""] });
        function yt(t) {
          return (k = ie(t)), (G = k.format), (j = k.formatPrefix), k;
        }
        function mt(t, e) {
          return (
            (t = Math.abs(t)),
            (e = Math.abs(e) - t),
            Math.max(0, Ut(e) - Ut(t)) + 1
          );
        }
        function kt(t) {
          return Math.max(0, -Ut(Math.abs(t)));
        }
        function Ht(t, e, r, i) {
          var d = ot(t, e, r),
            x;
          switch (((i = Z(i ?? ",f")), i.type)) {
            case "s": {
              var I = Math.max(Math.abs(t), Math.abs(e));
              return (
                i.precision == null &&
                  !isNaN((x = Vt(d, I))) &&
                  (i.precision = x),
                j(i, I)
              );
            }
            case "":
            case "e":
            case "g":
            case "p":
            case "r": {
              i.precision == null &&
                !isNaN((x = mt(d, Math.max(Math.abs(t), Math.abs(e))))) &&
                (i.precision = x - (i.type === "e"));
              break;
            }
            case "f":
            case "%": {
              i.precision == null &&
                !isNaN((x = kt(d))) &&
                (i.precision = x - (i.type === "%") * 2);
              break;
            }
          }
          return G(i);
        }
        function qt(t) {
          var e = t.domain;
          return (
            (t.ticks = function (r) {
              var i = e();
              return z(i[0], i[i.length - 1], r ?? 10);
            }),
            (t.tickFormat = function (r, i) {
              var d = e();
              return Ht(d[0], d[d.length - 1], r ?? 10, i);
            }),
            (t.nice = function (r) {
              r == null && (r = 10);
              var i = e(),
                d = 0,
                x = i.length - 1,
                I = i[d],
                H = i[x],
                gt,
                ht,
                Yt = 10;
              for (
                H < I &&
                ((ht = I), (I = H), (H = ht), (ht = d), (d = x), (x = ht));
                Yt-- > 0;
              ) {
                if (((ht = et(I, H, r)), ht === gt))
                  return (i[d] = I), (i[x] = H), e(i);
                if (ht > 0)
                  (I = Math.floor(I / ht) * ht), (H = Math.ceil(H / ht) * ht);
                else if (ht < 0)
                  (I = Math.ceil(I * ht) / ht), (H = Math.floor(H * ht) / ht);
                else break;
                gt = ht;
              }
              return t;
            }),
            t
          );
        }
        function N() {
          var t = J();
          return (
            (t.copy = function () {
              return b(t, N());
            }),
            Y.C.apply(t, arguments),
            qt(t)
          );
        }
        function X(t) {
          var e;
          function r(i) {
            return i == null || isNaN((i = +i)) ? e : i;
          }
          return (
            (r.invert = r),
            (r.domain = r.range =
              function (i) {
                return arguments.length
                  ? ((t = Array.from(i, m)), r)
                  : t.slice();
              }),
            (r.unknown = function (i) {
              return arguments.length ? ((e = i), r) : e;
            }),
            (r.copy = function () {
              return X(t).unknown(e);
            }),
            (t = arguments.length ? Array.from(t, m) : [0, 1]),
            qt(r)
          );
        }
        function _t(t, e) {
          t = t.slice();
          var r = 0,
            i = t.length - 1,
            d = t[r],
            x = t[i],
            I;
          return (
            x < d && ((I = r), (r = i), (i = I), (I = d), (d = x), (x = I)),
            (t[r] = e.floor(d)),
            (t[i] = e.ceil(x)),
            t
          );
        }
        function At(t) {
          return Math.log(t);
        }
        function Zt(t) {
          return Math.exp(t);
        }
        function Be(t) {
          return -Math.log(-t);
        }
        function Le(t) {
          return -Math.exp(-t);
        }
        function Pe(t) {
          return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
        }
        function Ce(t) {
          return t === 10
            ? Pe
            : t === Math.E
              ? Math.exp
              : (e) => Math.pow(t, e);
        }
        function We(t) {
          return t === Math.E
            ? Math.log
            : (t === 10 && Math.log10) ||
                (t === 2 && Math.log2) ||
                ((t = Math.log(t)), (e) => Math.log(e) / t);
        }
        function je(t) {
          return (e, r) => -t(-e, r);
        }
        function Ye(t) {
          const e = t(At, Zt),
            r = e.domain;
          let i = 10,
            d,
            x;
          function I() {
            return (
              (d = We(i)),
              (x = Ce(i)),
              r()[0] < 0 ? ((d = je(d)), (x = je(x)), t(Be, Le)) : t(At, Zt),
              e
            );
          }
          return (
            (e.base = function (H) {
              return arguments.length ? ((i = +H), I()) : i;
            }),
            (e.domain = function (H) {
              return arguments.length ? (r(H), I()) : r();
            }),
            (e.ticks = (H) => {
              const gt = r();
              let ht = gt[0],
                Yt = gt[gt.length - 1];
              const Lt = Yt < ht;
              Lt && ([ht, Yt] = [Yt, ht]);
              let Qt = d(ht),
                de = d(Yt),
                be,
                Ae;
              const Ve = H == null ? 10 : +H;
              let Ze = [];
              if (!(i % 1) && de - Qt < Ve) {
                if (((Qt = Math.floor(Qt)), (de = Math.ceil(de)), ht > 0)) {
                  for (; Qt <= de; ++Qt)
                    for (be = 1; be < i; ++be)
                      if (
                        ((Ae = Qt < 0 ? be / x(-Qt) : be * x(Qt)), !(Ae < ht))
                      ) {
                        if (Ae > Yt) break;
                        Ze.push(Ae);
                      }
                } else
                  for (; Qt <= de; ++Qt)
                    for (be = i - 1; be >= 1; --be)
                      if (
                        ((Ae = Qt > 0 ? be / x(-Qt) : be * x(Qt)), !(Ae < ht))
                      ) {
                        if (Ae > Yt) break;
                        Ze.push(Ae);
                      }
                Ze.length * 2 < Ve && (Ze = z(ht, Yt, Ve));
              } else Ze = z(Qt, de, Math.min(de - Qt, Ve)).map(x);
              return Lt ? Ze.reverse() : Ze;
            }),
            (e.tickFormat = (H, gt) => {
              if (
                (H == null && (H = 10),
                gt == null && (gt = i === 10 ? "s" : ","),
                typeof gt != "function" &&
                  (!(i % 1) && (gt = Z(gt)).precision == null && (gt.trim = !0),
                  (gt = G(gt))),
                H === 1 / 0)
              )
                return gt;
              const ht = Math.max(1, (i * H) / e.ticks().length);
              return (Yt) => {
                let Lt = Yt / x(Math.round(d(Yt)));
                return Lt * i < i - 0.5 && (Lt *= i), Lt <= ht ? gt(Yt) : "";
              };
            }),
            (e.nice = () =>
              r(
                _t(r(), {
                  floor: (H) => x(Math.floor(d(H))),
                  ceil: (H) => x(Math.ceil(d(H))),
                }),
              )),
            e
          );
        }
        function qe() {
          const t = Ye(R()).domain([1, 10]);
          return (
            (t.copy = () => b(t, qe()).base(t.base())),
            Y.C.apply(t, arguments),
            t
          );
        }
        function on(t) {
          return function (e) {
            return Math.sign(e) * Math.log1p(Math.abs(e / t));
          };
        }
        function un(t) {
          return function (e) {
            return Math.sign(e) * Math.expm1(Math.abs(e)) * t;
          };
        }
        function tn(t) {
          var e = 1,
            r = t(on(e), un(e));
          return (
            (r.constant = function (i) {
              return arguments.length ? t(on((e = +i)), un(e)) : e;
            }),
            qt(r)
          );
        }
        function bn() {
          var t = tn(R());
          return (
            (t.copy = function () {
              return b(t, bn()).constant(t.constant());
            }),
            Y.C.apply(t, arguments)
          );
        }
        var Mn = n(97458);
        function _n(t) {
          return function (e) {
            return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
          };
        }
        function jn(t) {
          return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
        }
        function Wn(t) {
          return t < 0 ? -t * t : t * t;
        }
        function Nn(t) {
          var e = t(_, _),
            r = 1;
          function i() {
            return r === 1
              ? t(_, _)
              : r === 0.5
                ? t(jn, Wn)
                : t(_n(r), _n(1 / r));
          }
          return (
            (e.exponent = function (d) {
              return arguments.length ? ((r = +d), i()) : r;
            }),
            qt(e)
          );
        }
        function In() {
          var t = Nn(R());
          return (
            (t.copy = function () {
              return b(t, In()).exponent(t.exponent());
            }),
            Y.C.apply(t, arguments),
            t
          );
        }
        function Rn() {
          return In.apply(null, arguments).exponent(0.5);
        }
        function Zn(t) {
          return Math.sign(t) * t * t;
        }
        function fr(t) {
          return Math.sign(t) * Math.sqrt(Math.abs(t));
        }
        function dr() {
          var t = J(),
            e = [0, 1],
            r = !1,
            i;
          function d(x) {
            var I = fr(t(x));
            return isNaN(I) ? i : r ? Math.round(I) : I;
          }
          return (
            (d.invert = function (x) {
              return t.invert(Zn(x));
            }),
            (d.domain = function (x) {
              return arguments.length ? (t.domain(x), d) : t.domain();
            }),
            (d.range = function (x) {
              return arguments.length
                ? (t.range((e = Array.from(x, m)).map(Zn)), d)
                : e.slice();
            }),
            (d.rangeRound = function (x) {
              return d.range(x).round(!0);
            }),
            (d.round = function (x) {
              return arguments.length ? ((r = !!x), d) : r;
            }),
            (d.clamp = function (x) {
              return arguments.length ? (t.clamp(x), d) : t.clamp();
            }),
            (d.unknown = function (x) {
              return arguments.length ? ((i = x), d) : i;
            }),
            (d.copy = function () {
              return dr(t.domain(), e).round(r).clamp(t.clamp()).unknown(i);
            }),
            Y.C.apply(d, arguments),
            qt(d)
          );
        }
        function hr(t, e) {
          let r;
          if (e === void 0)
            for (const i of t)
              i != null && (r < i || (r === void 0 && i >= i)) && (r = i);
          else {
            let i = -1;
            for (let d of t)
              (d = e(d, ++i, t)) != null &&
                (r < d || (r === void 0 && d >= d)) &&
                (r = d);
          }
          return r;
        }
        function br(t, e) {
          let r;
          if (e === void 0)
            for (const i of t)
              i != null && (r > i || (r === void 0 && i >= i)) && (r = i);
          else {
            let i = -1;
            for (let d of t)
              (d = e(d, ++i, t)) != null &&
                (r > d || (r === void 0 && d >= d)) &&
                (r = d);
          }
          return r;
        }
        function Jr(t, ...e) {
          if (typeof t[Symbol.iterator] != "function")
            throw new TypeError("values is not iterable");
          t = Array.from(t);
          let [r] = e;
          if ((r && r.length !== 2) || e.length > 1) {
            const i = Uint32Array.from(t, (d, x) => x);
            return (
              e.length > 1
                ? ((e = e.map((d) => t.map(d))),
                  i.sort((d, x) => {
                    for (const I of e) {
                      const H = er(I[d], I[x]);
                      if (H) return H;
                    }
                  }))
                : ((r = t.map(r)), i.sort((d, x) => er(r[d], r[x]))),
              permute(t, i)
            );
          }
          return t.sort(Fn(r));
        }
        function Fn(t = at) {
          if (t === at) return er;
          if (typeof t != "function")
            throw new TypeError("compare is not a function");
          return (e, r) => {
            const i = t(e, r);
            return i || i === 0 ? i : (t(r, r) === 0) - (t(e, e) === 0);
          };
        }
        function er(t, e) {
          return (
            (t == null || !(t >= t)) - (e == null || !(e >= e)) ||
            (t < e ? -1 : t > e ? 1 : 0)
          );
        }
        function Br(t, e, r = 0, i = 1 / 0, d) {
          if (
            ((e = Math.floor(e)),
            (r = Math.floor(Math.max(0, r))),
            (i = Math.floor(Math.min(t.length - 1, i))),
            !(r <= e && e <= i))
          )
            return t;
          for (d = d === void 0 ? er : Fn(d); i > r; ) {
            if (i - r > 600) {
              const gt = i - r + 1,
                ht = e - r + 1,
                Yt = Math.log(gt),
                Lt = 0.5 * Math.exp((2 * Yt) / 3),
                Qt =
                  0.5 *
                  Math.sqrt((Yt * Lt * (gt - Lt)) / gt) *
                  (ht - gt / 2 < 0 ? -1 : 1),
                de = Math.max(r, Math.floor(e - (ht * Lt) / gt + Qt)),
                be = Math.min(i, Math.floor(e + ((gt - ht) * Lt) / gt + Qt));
              Br(t, e, de, be, d);
            }
            const x = t[e];
            let I = r,
              H = i;
            for ($n(t, r, e), d(t[i], x) > 0 && $n(t, r, i); I < H; ) {
              for ($n(t, I, H), ++I, --H; d(t[I], x) < 0; ) ++I;
              for (; d(t[H], x) > 0; ) --H;
            }
            d(t[r], x) === 0 ? $n(t, r, H) : (++H, $n(t, H, i)),
              H <= e && (r = H + 1),
              e <= H && (i = H - 1);
          }
          return t;
        }
        function $n(t, e, r) {
          const i = t[e];
          (t[e] = t[r]), (t[r] = i);
        }
        function zn(t, e, r) {
          if (
            ((t = Float64Array.from(pt(t, r))),
            !(!(i = t.length) || isNaN((e = +e))))
          ) {
            if (e <= 0 || i < 2) return br(t);
            if (e >= 1) return hr(t);
            var i,
              d = (i - 1) * e,
              x = Math.floor(d),
              I = hr(Br(t, x).subarray(0, x + 1)),
              H = br(t.subarray(x + 1));
            return I + (H - I) * (d - x);
          }
        }
        function Kn(t, e, r = V) {
          if (!(!(i = t.length) || isNaN((e = +e)))) {
            if (e <= 0 || i < 2) return +r(t[0], 0, t);
            if (e >= 1) return +r(t[i - 1], i - 1, t);
            var i,
              d = (i - 1) * e,
              x = Math.floor(d),
              I = +r(t[x], x, t),
              H = +r(t[x + 1], x + 1, t);
            return I + (H - I) * (d - x);
          }
        }
        function Tr(t, e, r = number) {
          if (!isNaN((e = +e))) {
            if (
              ((i = Float64Array.from(t, (H, gt) => number(r(t[gt], gt, t)))),
              e <= 0)
            )
              return minIndex(i);
            if (e >= 1) return maxIndex(i);
            var i,
              d = Uint32Array.from(t, (H, gt) => gt),
              x = i.length - 1,
              I = Math.floor(x * e);
            return (
              quickselect(d, I, 0, x, (H, gt) => ascendingDefined(i[H], i[gt])),
              (I = greatest(d.subarray(0, I + 1), (H) => i[H])),
              I >= 0 ? I : -1
            );
          }
        }
        function nr() {
          var t = [],
            e = [],
            r = [],
            i;
          function d() {
            var I = 0,
              H = Math.max(1, e.length);
            for (r = new Array(H - 1); ++I < H; ) r[I - 1] = Kn(t, I / H);
            return x;
          }
          function x(I) {
            return I == null || isNaN((I = +I)) ? i : e[wt(r, I)];
          }
          return (
            (x.invertExtent = function (I) {
              var H = e.indexOf(I);
              return H < 0
                ? [NaN, NaN]
                : [
                    H > 0 ? r[H - 1] : t[0],
                    H < r.length ? r[H] : t[t.length - 1],
                  ];
            }),
            (x.domain = function (I) {
              if (!arguments.length) return t.slice();
              t = [];
              for (let H of I) H != null && !isNaN((H = +H)) && t.push(H);
              return t.sort(at), d();
            }),
            (x.range = function (I) {
              return arguments.length ? ((e = Array.from(I)), d()) : e.slice();
            }),
            (x.unknown = function (I) {
              return arguments.length ? ((i = I), x) : i;
            }),
            (x.quantiles = function () {
              return r.slice();
            }),
            (x.copy = function () {
              return nr().domain(t).range(e).unknown(i);
            }),
            Y.C.apply(x, arguments)
          );
        }
        function xr() {
          var t = 0,
            e = 1,
            r = 1,
            i = [0.5],
            d = [0, 1],
            x;
          function I(gt) {
            return gt != null && gt <= gt ? d[wt(i, gt, 0, r)] : x;
          }
          function H() {
            var gt = -1;
            for (i = new Array(r); ++gt < r; )
              i[gt] = ((gt + 1) * e - (gt - r) * t) / (r + 1);
            return I;
          }
          return (
            (I.domain = function (gt) {
              return arguments.length
                ? (([t, e] = gt), (t = +t), (e = +e), H())
                : [t, e];
            }),
            (I.range = function (gt) {
              return arguments.length
                ? ((r = (d = Array.from(gt)).length - 1), H())
                : d.slice();
            }),
            (I.invertExtent = function (gt) {
              var ht = d.indexOf(gt);
              return ht < 0
                ? [NaN, NaN]
                : ht < 1
                  ? [t, i[0]]
                  : ht >= r
                    ? [i[r - 1], e]
                    : [i[ht - 1], i[ht]];
            }),
            (I.unknown = function (gt) {
              return arguments.length && (x = gt), I;
            }),
            (I.thresholds = function () {
              return i.slice();
            }),
            (I.copy = function () {
              return xr().domain([t, e]).range(d).unknown(x);
            }),
            Y.C.apply(qt(I), arguments)
          );
        }
        function rr() {
          var t = [0.5],
            e = [0, 1],
            r,
            i = 1;
          function d(x) {
            return x != null && x <= x ? e[wt(t, x, 0, i)] : r;
          }
          return (
            (d.domain = function (x) {
              return arguments.length
                ? ((t = Array.from(x)),
                  (i = Math.min(t.length, e.length - 1)),
                  d)
                : t.slice();
            }),
            (d.range = function (x) {
              return arguments.length
                ? ((e = Array.from(x)),
                  (i = Math.min(t.length, e.length - 1)),
                  d)
                : e.slice();
            }),
            (d.invertExtent = function (x) {
              var I = e.indexOf(x);
              return [t[I - 1], t[I]];
            }),
            (d.unknown = function (x) {
              return arguments.length ? ((r = x), d) : r;
            }),
            (d.copy = function () {
              return rr().domain(t).range(e).unknown(r);
            }),
            Y.C.apply(d, arguments)
          );
        }
        const dn = 1e3,
          Ln = dn * 60,
          kn = Ln * 60,
          Qn = kn * 24,
          Nr = Qn * 7,
          pi = Qn * 30,
          Or = Qn * 365,
          Ar = new Date(),
          Zr = new Date();
        function wn(t, e, r, i) {
          function d(x) {
            return (
              t((x = arguments.length === 0 ? new Date() : new Date(+x))), x
            );
          }
          return (
            (d.floor = (x) => (t((x = new Date(+x))), x)),
            (d.ceil = (x) => (t((x = new Date(x - 1))), e(x, 1), t(x), x)),
            (d.round = (x) => {
              const I = d(x),
                H = d.ceil(x);
              return x - I < H - x ? I : H;
            }),
            (d.offset = (x, I) => (
              e((x = new Date(+x)), I == null ? 1 : Math.floor(I)), x
            )),
            (d.range = (x, I, H) => {
              const gt = [];
              if (
                ((x = d.ceil(x)),
                (H = H == null ? 1 : Math.floor(H)),
                !(x < I) || !(H > 0))
              )
                return gt;
              let ht;
              do gt.push((ht = new Date(+x))), e(x, H), t(x);
              while (ht < x && x < I);
              return gt;
            }),
            (d.filter = (x) =>
              wn(
                (I) => {
                  if (I >= I) for (; t(I), !x(I); ) I.setTime(I - 1);
                },
                (I, H) => {
                  if (I >= I)
                    if (H < 0) for (; ++H <= 0; ) for (; e(I, -1), !x(I); );
                    else for (; --H >= 0; ) for (; e(I, 1), !x(I); );
                },
              )),
            r &&
              ((d.count = (x, I) => (
                Ar.setTime(+x),
                Zr.setTime(+I),
                t(Ar),
                t(Zr),
                Math.floor(r(Ar, Zr))
              )),
              (d.every = (x) => (
                (x = Math.floor(x)),
                !isFinite(x) || !(x > 0)
                  ? null
                  : x > 1
                    ? d.filter(
                        i
                          ? (I) => i(I) % x === 0
                          : (I) => d.count(0, I) % x === 0,
                      )
                    : d
              ))),
            d
          );
        }
        const pr = wn(
          () => {},
          (t, e) => {
            t.setTime(+t + e);
          },
          (t, e) => e - t,
        );
        pr.every = (t) => (
          (t = Math.floor(t)),
          !isFinite(t) || !(t > 0)
            ? null
            : t > 1
              ? wn(
                  (e) => {
                    e.setTime(Math.floor(e / t) * t);
                  },
                  (e, r) => {
                    e.setTime(+e + r * t);
                  },
                  (e, r) => (r - e) / t,
                )
              : pr
        );
        const Pr = pr.range,
          ir = wn(
            (t) => {
              t.setTime(t - t.getMilliseconds());
            },
            (t, e) => {
              t.setTime(+t + e * dn);
            },
            (t, e) => (e - t) / dn,
            (t) => t.getUTCSeconds(),
          ),
          Lr = ir.range,
          ar = wn(
            (t) => {
              t.setTime(t - t.getMilliseconds() - t.getSeconds() * dn);
            },
            (t, e) => {
              t.setTime(+t + e * Ln);
            },
            (t, e) => (e - t) / Ln,
            (t) => t.getMinutes(),
          ),
          vi = ar.range,
          Ur = wn(
            (t) => {
              t.setUTCSeconds(0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * Ln);
            },
            (t, e) => (e - t) / Ln,
            (t) => t.getUTCMinutes(),
          ),
          Ii = Ur.range,
          Mr = wn(
            (t) => {
              t.setTime(
                t -
                  t.getMilliseconds() -
                  t.getSeconds() * dn -
                  t.getMinutes() * Ln,
              );
            },
            (t, e) => {
              t.setTime(+t + e * kn);
            },
            (t, e) => (e - t) / kn,
            (t) => t.getHours(),
          ),
          Ri = Mr.range,
          Qr = wn(
            (t) => {
              t.setUTCMinutes(0, 0, 0);
            },
            (t, e) => {
              t.setTime(+t + e * kn);
            },
            (t, e) => (e - t) / kn,
            (t) => t.getUTCHours(),
          ),
          Bi = Qr.range,
          Cr = wn(
            (t) => t.setHours(0, 0, 0, 0),
            (t, e) => t.setDate(t.getDate() + e),
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * Ln) /
              Qn,
            (t) => t.getDate() - 1,
          ),
          yi = Cr.range,
          Dr = wn(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / Qn,
            (t) => t.getUTCDate() - 1,
          ),
          Xn = Dr.range,
          vr = wn(
            (t) => {
              t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + e);
            },
            (t, e) => (e - t) / Qn,
            (t) => Math.floor(t / Qn),
          ),
          Ni = vr.range;
        function or(t) {
          return wn(
            (e) => {
              e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
                e.setHours(0, 0, 0, 0);
            },
            (e, r) => {
              e.setDate(e.getDate() + r * 7);
            },
            (e, r) =>
              (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * Ln) /
              Nr,
          );
        }
        const ur = or(0),
          Er = or(1),
          Wr = or(2),
          wi = or(3),
          lr = or(4),
          Si = or(5),
          qr = or(6),
          ti = ur.range,
          Li = Er.range,
          ei = Wr.range,
          sr = wi.range,
          kr = lr.range,
          Ti = Si.range,
          T = qr.range;
        function W(t) {
          return wn(
            (e) => {
              e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
                e.setUTCHours(0, 0, 0, 0);
            },
            (e, r) => {
              e.setUTCDate(e.getUTCDate() + r * 7);
            },
            (e, r) => (r - e) / Nr,
          );
        }
        const st = W(0),
          St = W(1),
          Bt = W(2),
          Jt = W(3),
          re = W(4),
          he = W(5),
          ge = W(6),
          Xe = st.range,
          ze = St.range,
          en = Bt.range,
          nn = Jt.range,
          An = re.range,
          Sn = he.range,
          hn = ge.range,
          Se = wn(
            (t) => {
              t.setDate(1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setMonth(t.getMonth() + e);
            },
            (t, e) =>
              e.getMonth() -
              t.getMonth() +
              (e.getFullYear() - t.getFullYear()) * 12,
            (t) => t.getMonth(),
          ),
          Re = Se.range,
          He = wn(
            (t) => {
              t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCMonth(t.getUTCMonth() + e);
            },
            (t, e) =>
              e.getUTCMonth() -
              t.getUTCMonth() +
              (e.getUTCFullYear() - t.getUTCFullYear()) * 12,
            (t) => t.getUTCMonth(),
          ),
          En = He.range,
          cn = wn(
            (t) => {
              t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setFullYear(t.getFullYear() + e);
            },
            (t, e) => e.getFullYear() - t.getFullYear(),
            (t) => t.getFullYear(),
          );
        cn.every = (t) =>
          !isFinite((t = Math.floor(t))) || !(t > 0)
            ? null
            : wn(
                (e) => {
                  e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                    e.setMonth(0, 1),
                    e.setHours(0, 0, 0, 0);
                },
                (e, r) => {
                  e.setFullYear(e.getFullYear() + r * t);
                },
              );
        const pn = cn.range,
          $t = wn(
            (t) => {
              t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCFullYear(t.getUTCFullYear() + e);
            },
            (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
            (t) => t.getUTCFullYear(),
          );
        $t.every = (t) =>
          !isFinite((t = Math.floor(t))) || !(t > 0)
            ? null
            : wn(
                (e) => {
                  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                    e.setUTCMonth(0, 1),
                    e.setUTCHours(0, 0, 0, 0);
                },
                (e, r) => {
                  e.setUTCFullYear(e.getUTCFullYear() + r * t);
                },
              );
        const Ie = $t.range;
        function yr(t, e, r, i, d, x) {
          const I = [
            [ir, 1, dn],
            [ir, 5, 5 * dn],
            [ir, 15, 15 * dn],
            [ir, 30, 30 * dn],
            [x, 1, Ln],
            [x, 5, 5 * Ln],
            [x, 15, 15 * Ln],
            [x, 30, 30 * Ln],
            [d, 1, kn],
            [d, 3, 3 * kn],
            [d, 6, 6 * kn],
            [d, 12, 12 * kn],
            [i, 1, Qn],
            [i, 2, 2 * Qn],
            [r, 1, Nr],
            [e, 1, pi],
            [e, 3, 3 * pi],
            [t, 1, Or],
          ];
          function H(ht, Yt, Lt) {
            const Qt = Yt < ht;
            Qt && ([ht, Yt] = [Yt, ht]);
            const de =
                Lt && typeof Lt.range == "function" ? Lt : gt(ht, Yt, Lt),
              be = de ? de.range(ht, +Yt + 1) : [];
            return Qt ? be.reverse() : be;
          }
          function gt(ht, Yt, Lt) {
            const Qt = Math.abs(Yt - ht) / Lt,
              de = F(([, , Ve]) => Ve).right(I, Qt);
            if (de === I.length) return t.every(ot(ht / Or, Yt / Or, Lt));
            if (de === 0) return pr.every(Math.max(ot(ht, Yt, Lt), 1));
            const [be, Ae] = I[Qt / I[de - 1][2] < I[de][2] / Qt ? de - 1 : de];
            return be.every(Ae);
          }
          return [H, gt];
        }
        const [Kr, ni] = yr($t, He, st, vr, Qr, Ur),
          [ri, mi] = yr(cn, Se, ur, Cr, Mr, ar);
        function Fr(t) {
          if (0 <= t.y && t.y < 100) {
            var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return e.setFullYear(t.y), e;
          }
          return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
        }
        function Mi(t) {
          if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y), e;
          }
          return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
        }
        function ii(t, e, r) {
          return { y: t, m: e, d: r, H: 0, M: 0, S: 0, L: 0 };
        }
        function gi(t) {
          var e = t.dateTime,
            r = t.date,
            i = t.time,
            d = t.periods,
            x = t.days,
            I = t.shortDays,
            H = t.months,
            gt = t.shortMonths,
            ht = ai(d),
            Yt = $r(d),
            Lt = ai(x),
            Qt = $r(x),
            de = ai(I),
            be = $r(I),
            Ae = ai(H),
            Ve = $r(H),
            Ze = ai(gt),
            yn = $r(gt),
            xn = {
              a: Ai,
              A: Pi,
              b: Ei,
              B: gr,
              c: null,
              d: Me,
              e: Me,
              f: se,
              g: Te,
              G: $e,
              H: xe,
              I: ue,
              j: ye,
              L: oe,
              m: Ot,
              M: jt,
              p: Ru,
              q: Bu,
              Q: fi,
              s: wr,
              S: Gt,
              u: ee,
              U: ne,
              V: we,
              w: Oe,
              W: Ke,
              x: null,
              X: null,
              y: Ne,
              Y: Fe,
              Z: Je,
              "%": Ir,
            },
            Qe = {
              a: Nu,
              A: Lu,
              b: Uu,
              B: Wu,
              c: null,
              d: Ge,
              e: Ge,
              f: Bn,
              g: li,
              G: Hr,
              H: mn,
              I: Un,
              j: ke,
              L: sn,
              m: Hn,
              M: mr,
              p: ku,
              q: Ku,
              Q: fi,
              s: wr,
              S: Di,
              u: Gn,
              U: _r,
              V: zr,
              w: ui,
              W: jr,
              x: null,
              X: null,
              y: Xr,
              Y: si,
              Z: ci,
              "%": Ir,
            },
            Tn = {
              a: Aa,
              A: Qi,
              b: an,
              B: Rr,
              c: Yn,
              d: zt,
              e: zt,
              f: ve,
              g: a,
              G: u,
              H: te,
              I: te,
              j: Xt,
              L: pe,
              m: Tt,
              M: ae,
              p: Zi,
              q: y,
              Q: me,
              s: Ue,
              S: le,
              u: Wi,
              U: ra,
              V: ia,
              w: na,
              W: aa,
              x: Yr,
              X: qi,
              y: a,
              Y: u,
              Z: A,
              "%": fe,
            };
          (xn.x = _e(r, xn)),
            (xn.X = _e(i, xn)),
            (xn.c = _e(e, xn)),
            (Qe.x = _e(r, Qe)),
            (Qe.X = _e(i, Qe)),
            (Qe.c = _e(e, Qe));
          function _e(De, rn) {
            return function (fn) {
              var ce = [],
                Jn = -1,
                On = 0,
                qn = De.length,
                tr,
                hi,
                Ga;
              for (fn instanceof Date || (fn = new Date(+fn)); ++Jn < qn; )
                De.charCodeAt(Jn) === 37 &&
                  (ce.push(De.slice(On, Jn)),
                  (hi = Ci[(tr = De.charAt(++Jn))]) != null
                    ? (tr = De.charAt(++Jn))
                    : (hi = tr === "e" ? " " : "0"),
                  (Ga = rn[tr]) && (tr = Ga(fn, hi)),
                  ce.push(tr),
                  (On = Jn + 1));
              return ce.push(De.slice(On, Jn)), ce.join("");
            };
          }
          function gn(De, rn) {
            return function (fn) {
              var ce = ii(1900, void 0, 1),
                Jn = Sr(ce, De, (fn += ""), 0),
                On,
                qn;
              if (Jn != fn.length) return null;
              if ("Q" in ce) return new Date(ce.Q);
              if ("s" in ce)
                return new Date(ce.s * 1e3 + ("L" in ce ? ce.L : 0));
              if (
                (rn && !("Z" in ce) && (ce.Z = 0),
                "p" in ce && (ce.H = (ce.H % 12) + ce.p * 12),
                ce.m === void 0 && (ce.m = "q" in ce ? ce.q : 0),
                "V" in ce)
              ) {
                if (ce.V < 1 || ce.V > 53) return null;
                "w" in ce || (ce.w = 1),
                  "Z" in ce
                    ? ((On = Mi(ii(ce.y, 0, 1))),
                      (qn = On.getUTCDay()),
                      (On = qn > 4 || qn === 0 ? St.ceil(On) : St(On)),
                      (On = Dr.offset(On, (ce.V - 1) * 7)),
                      (ce.y = On.getUTCFullYear()),
                      (ce.m = On.getUTCMonth()),
                      (ce.d = On.getUTCDate() + ((ce.w + 6) % 7)))
                    : ((On = Fr(ii(ce.y, 0, 1))),
                      (qn = On.getDay()),
                      (On = qn > 4 || qn === 0 ? Er.ceil(On) : Er(On)),
                      (On = Cr.offset(On, (ce.V - 1) * 7)),
                      (ce.y = On.getFullYear()),
                      (ce.m = On.getMonth()),
                      (ce.d = On.getDate() + ((ce.w + 6) % 7)));
              } else
                ("W" in ce || "U" in ce) &&
                  ("w" in ce ||
                    (ce.w = "u" in ce ? ce.u % 7 : "W" in ce ? 1 : 0),
                  (qn =
                    "Z" in ce
                      ? Mi(ii(ce.y, 0, 1)).getUTCDay()
                      : Fr(ii(ce.y, 0, 1)).getDay()),
                  (ce.m = 0),
                  (ce.d =
                    "W" in ce
                      ? ((ce.w + 6) % 7) + ce.W * 7 - ((qn + 5) % 7)
                      : ce.w + ce.U * 7 - ((qn + 6) % 7)));
              return "Z" in ce
                ? ((ce.H += (ce.Z / 100) | 0), (ce.M += ce.Z % 100), Mi(ce))
                : Fr(ce);
            };
          }
          function Sr(De, rn, fn, ce) {
            for (
              var Jn = 0, On = rn.length, qn = fn.length, tr, hi;
              Jn < On;
            ) {
              if (ce >= qn) return -1;
              if (((tr = rn.charCodeAt(Jn++)), tr === 37)) {
                if (
                  ((tr = rn.charAt(Jn++)),
                  (hi = Tn[tr in Ci ? rn.charAt(Jn++) : tr]),
                  !hi || (ce = hi(De, fn, ce)) < 0)
                )
                  return -1;
              } else if (tr != fn.charCodeAt(ce++)) return -1;
            }
            return ce;
          }
          function Zi(De, rn, fn) {
            var ce = ht.exec(rn.slice(fn));
            return ce
              ? ((De.p = Yt.get(ce[0].toLowerCase())), fn + ce[0].length)
              : -1;
          }
          function Aa(De, rn, fn) {
            var ce = de.exec(rn.slice(fn));
            return ce
              ? ((De.w = be.get(ce[0].toLowerCase())), fn + ce[0].length)
              : -1;
          }
          function Qi(De, rn, fn) {
            var ce = Lt.exec(rn.slice(fn));
            return ce
              ? ((De.w = Qt.get(ce[0].toLowerCase())), fn + ce[0].length)
              : -1;
          }
          function an(De, rn, fn) {
            var ce = Ze.exec(rn.slice(fn));
            return ce
              ? ((De.m = yn.get(ce[0].toLowerCase())), fn + ce[0].length)
              : -1;
          }
          function Rr(De, rn, fn) {
            var ce = Ae.exec(rn.slice(fn));
            return ce
              ? ((De.m = Ve.get(ce[0].toLowerCase())), fn + ce[0].length)
              : -1;
          }
          function Yn(De, rn, fn) {
            return Sr(De, e, rn, fn);
          }
          function Yr(De, rn, fn) {
            return Sr(De, r, rn, fn);
          }
          function qi(De, rn, fn) {
            return Sr(De, i, rn, fn);
          }
          function Ai(De) {
            return I[De.getDay()];
          }
          function Pi(De) {
            return x[De.getDay()];
          }
          function Ei(De) {
            return gt[De.getMonth()];
          }
          function gr(De) {
            return H[De.getMonth()];
          }
          function Ru(De) {
            return d[+(De.getHours() >= 12)];
          }
          function Bu(De) {
            return 1 + ~~(De.getMonth() / 3);
          }
          function Nu(De) {
            return I[De.getUTCDay()];
          }
          function Lu(De) {
            return x[De.getUTCDay()];
          }
          function Uu(De) {
            return gt[De.getUTCMonth()];
          }
          function Wu(De) {
            return H[De.getUTCMonth()];
          }
          function ku(De) {
            return d[+(De.getUTCHours() >= 12)];
          }
          function Ku(De) {
            return 1 + ~~(De.getUTCMonth() / 3);
          }
          return {
            format: function (De) {
              var rn = _e((De += ""), xn);
              return (
                (rn.toString = function () {
                  return De;
                }),
                rn
              );
            },
            parse: function (De) {
              var rn = gn((De += ""), !1);
              return (
                (rn.toString = function () {
                  return De;
                }),
                rn
              );
            },
            utcFormat: function (De) {
              var rn = _e((De += ""), Qe);
              return (
                (rn.toString = function () {
                  return De;
                }),
                rn
              );
            },
            utcParse: function (De) {
              var rn = gn((De += ""), !0);
              return (
                (rn.toString = function () {
                  return De;
                }),
                rn
              );
            },
          };
        }
        var Ci = { "-": "", _: " ", 0: "0" },
          Cn = /^\s*\d+/,
          Ui = /^%/,
          ta = /[\\^$*+?|[\]().{}]/g;
        function ln(t, e, r) {
          var i = t < 0 ? "-" : "",
            d = (i ? -t : t) + "",
            x = d.length;
          return i + (x < r ? new Array(r - x + 1).join(e) + d : d);
        }
        function ea(t) {
          return t.replace(ta, "\\$&");
        }
        function ai(t) {
          return new RegExp("^(?:" + t.map(ea).join("|") + ")", "i");
        }
        function $r(t) {
          return new Map(t.map((e, r) => [e.toLowerCase(), r]));
        }
        function na(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 1));
          return i ? ((t.w = +i[0]), r + i[0].length) : -1;
        }
        function Wi(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 1));
          return i ? ((t.u = +i[0]), r + i[0].length) : -1;
        }
        function ra(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i ? ((t.U = +i[0]), r + i[0].length) : -1;
        }
        function ia(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i ? ((t.V = +i[0]), r + i[0].length) : -1;
        }
        function aa(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i ? ((t.W = +i[0]), r + i[0].length) : -1;
        }
        function u(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 4));
          return i ? ((t.y = +i[0]), r + i[0].length) : -1;
        }
        function a(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i
            ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)), r + i[0].length)
            : -1;
        }
        function A(t, e, r) {
          var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(r, r + 6));
          return i
            ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00"))), r + i[0].length)
            : -1;
        }
        function y(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 1));
          return i ? ((t.q = i[0] * 3 - 3), r + i[0].length) : -1;
        }
        function Tt(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i ? ((t.m = i[0] - 1), r + i[0].length) : -1;
        }
        function zt(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i ? ((t.d = +i[0]), r + i[0].length) : -1;
        }
        function Xt(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 3));
          return i ? ((t.m = 0), (t.d = +i[0]), r + i[0].length) : -1;
        }
        function te(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i ? ((t.H = +i[0]), r + i[0].length) : -1;
        }
        function ae(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i ? ((t.M = +i[0]), r + i[0].length) : -1;
        }
        function le(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 2));
          return i ? ((t.S = +i[0]), r + i[0].length) : -1;
        }
        function pe(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 3));
          return i ? ((t.L = +i[0]), r + i[0].length) : -1;
        }
        function ve(t, e, r) {
          var i = Cn.exec(e.slice(r, r + 6));
          return i ? ((t.L = Math.floor(i[0] / 1e3)), r + i[0].length) : -1;
        }
        function fe(t, e, r) {
          var i = Ui.exec(e.slice(r, r + 1));
          return i ? r + i[0].length : -1;
        }
        function me(t, e, r) {
          var i = Cn.exec(e.slice(r));
          return i ? ((t.Q = +i[0]), r + i[0].length) : -1;
        }
        function Ue(t, e, r) {
          var i = Cn.exec(e.slice(r));
          return i ? ((t.s = +i[0]), r + i[0].length) : -1;
        }
        function Me(t, e) {
          return ln(t.getDate(), e, 2);
        }
        function xe(t, e) {
          return ln(t.getHours(), e, 2);
        }
        function ue(t, e) {
          return ln(t.getHours() % 12 || 12, e, 2);
        }
        function ye(t, e) {
          return ln(1 + Cr.count(cn(t), t), e, 3);
        }
        function oe(t, e) {
          return ln(t.getMilliseconds(), e, 3);
        }
        function se(t, e) {
          return oe(t, e) + "000";
        }
        function Ot(t, e) {
          return ln(t.getMonth() + 1, e, 2);
        }
        function jt(t, e) {
          return ln(t.getMinutes(), e, 2);
        }
        function Gt(t, e) {
          return ln(t.getSeconds(), e, 2);
        }
        function ee(t) {
          var e = t.getDay();
          return e === 0 ? 7 : e;
        }
        function ne(t, e) {
          return ln(ur.count(cn(t) - 1, t), e, 2);
        }
        function Ee(t) {
          var e = t.getDay();
          return e >= 4 || e === 0 ? lr(t) : lr.ceil(t);
        }
        function we(t, e) {
          return (
            (t = Ee(t)), ln(lr.count(cn(t), t) + (cn(t).getDay() === 4), e, 2)
          );
        }
        function Oe(t) {
          return t.getDay();
        }
        function Ke(t, e) {
          return ln(Er.count(cn(t) - 1, t), e, 2);
        }
        function Ne(t, e) {
          return ln(t.getFullYear() % 100, e, 2);
        }
        function Te(t, e) {
          return (t = Ee(t)), ln(t.getFullYear() % 100, e, 2);
        }
        function Fe(t, e) {
          return ln(t.getFullYear() % 1e4, e, 4);
        }
        function $e(t, e) {
          var r = t.getDay();
          return (
            (t = r >= 4 || r === 0 ? lr(t) : lr.ceil(t)),
            ln(t.getFullYear() % 1e4, e, 4)
          );
        }
        function Je(t) {
          var e = t.getTimezoneOffset();
          return (
            (e > 0 ? "-" : ((e *= -1), "+")) +
            ln((e / 60) | 0, "0", 2) +
            ln(e % 60, "0", 2)
          );
        }
        function Ge(t, e) {
          return ln(t.getUTCDate(), e, 2);
        }
        function mn(t, e) {
          return ln(t.getUTCHours(), e, 2);
        }
        function Un(t, e) {
          return ln(t.getUTCHours() % 12 || 12, e, 2);
        }
        function ke(t, e) {
          return ln(1 + Dr.count($t(t), t), e, 3);
        }
        function sn(t, e) {
          return ln(t.getUTCMilliseconds(), e, 3);
        }
        function Bn(t, e) {
          return sn(t, e) + "000";
        }
        function Hn(t, e) {
          return ln(t.getUTCMonth() + 1, e, 2);
        }
        function mr(t, e) {
          return ln(t.getUTCMinutes(), e, 2);
        }
        function Di(t, e) {
          return ln(t.getUTCSeconds(), e, 2);
        }
        function Gn(t) {
          var e = t.getUTCDay();
          return e === 0 ? 7 : e;
        }
        function _r(t, e) {
          return ln(st.count($t(t) - 1, t), e, 2);
        }
        function oi(t) {
          var e = t.getUTCDay();
          return e >= 4 || e === 0 ? re(t) : re.ceil(t);
        }
        function zr(t, e) {
          return (
            (t = oi(t)),
            ln(re.count($t(t), t) + ($t(t).getUTCDay() === 4), e, 2)
          );
        }
        function ui(t) {
          return t.getUTCDay();
        }
        function jr(t, e) {
          return ln(St.count($t(t) - 1, t), e, 2);
        }
        function Xr(t, e) {
          return ln(t.getUTCFullYear() % 100, e, 2);
        }
        function li(t, e) {
          return (t = oi(t)), ln(t.getUTCFullYear() % 100, e, 2);
        }
        function si(t, e) {
          return ln(t.getUTCFullYear() % 1e4, e, 4);
        }
        function Hr(t, e) {
          var r = t.getUTCDay();
          return (
            (t = r >= 4 || r === 0 ? re(t) : re.ceil(t)),
            ln(t.getUTCFullYear() % 1e4, e, 4)
          );
        }
        function ci() {
          return "+0000";
        }
        function Ir() {
          return "%";
        }
        function fi(t) {
          return +t;
        }
        function wr(t) {
          return Math.floor(+t / 1e3);
        }
        var Vn, oa, Pa, bi, ki;
        Ki({
          dateTime: "%x, %X",
          date: "%-m/%-d/%Y",
          time: "%-I:%M:%S %p",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        });
        function Ki(t) {
          return (
            (Vn = gi(t)),
            (oa = Vn.format),
            (Pa = Vn.parse),
            (bi = Vn.utcFormat),
            (ki = Vn.utcParse),
            Vn
          );
        }
        function Va(t) {
          return new Date(t);
        }
        function Ya(t) {
          return t instanceof Date ? +t : +new Date(+t);
        }
        function ua(t, e, r, i, d, x, I, H, gt, ht) {
          var Yt = J(),
            Lt = Yt.invert,
            Qt = Yt.domain,
            de = ht(".%L"),
            be = ht(":%S"),
            Ae = ht("%I:%M"),
            Ve = ht("%I %p"),
            Ze = ht("%a %d"),
            yn = ht("%b %d"),
            xn = ht("%B"),
            Qe = ht("%Y");
          function Tn(_e) {
            return (
              gt(_e) < _e
                ? de
                : H(_e) < _e
                  ? be
                  : I(_e) < _e
                    ? Ae
                    : x(_e) < _e
                      ? Ve
                      : i(_e) < _e
                        ? d(_e) < _e
                          ? Ze
                          : yn
                        : r(_e) < _e
                          ? xn
                          : Qe
            )(_e);
          }
          return (
            (Yt.invert = function (_e) {
              return new Date(Lt(_e));
            }),
            (Yt.domain = function (_e) {
              return arguments.length ? Qt(Array.from(_e, Ya)) : Qt().map(Va);
            }),
            (Yt.ticks = function (_e) {
              var gn = Qt();
              return t(gn[0], gn[gn.length - 1], _e ?? 10);
            }),
            (Yt.tickFormat = function (_e, gn) {
              return gn == null ? Tn : ht(gn);
            }),
            (Yt.nice = function (_e) {
              var gn = Qt();
              return (
                (!_e || typeof _e.range != "function") &&
                  (_e = e(gn[0], gn[gn.length - 1], _e ?? 10)),
                _e ? Qt(_t(gn, _e)) : Yt
              );
            }),
            (Yt.copy = function () {
              return b(Yt, ua(t, e, r, i, d, x, I, H, gt, ht));
            }),
            Yt
          );
        }
        function Ja() {
          return Y.C.apply(
            ua(ri, mi, cn, Se, ur, Cr, Mr, ar, ir, oa).domain([
              new Date(2e3, 0, 1),
              new Date(2e3, 0, 2),
            ]),
            arguments,
          );
        }
        function Za() {
          return Y.C.apply(
            ua(Kr, ni, $t, He, st, Dr, Qr, Ur, ir, bi).domain([
              Date.UTC(2e3, 0, 1),
              Date.UTC(2e3, 0, 2),
            ]),
            arguments,
          );
        }
        function Fi() {
          var t = 0,
            e = 1,
            r,
            i,
            d,
            x,
            I = _,
            H = !1,
            gt;
          function ht(Lt) {
            return Lt == null || isNaN((Lt = +Lt))
              ? gt
              : I(
                  d === 0
                    ? 0.5
                    : ((Lt = (x(Lt) - r) * d),
                      H ? Math.max(0, Math.min(1, Lt)) : Lt),
                );
          }
          (ht.domain = function (Lt) {
            return arguments.length
              ? (([t, e] = Lt),
                (r = x((t = +t))),
                (i = x((e = +e))),
                (d = r === i ? 0 : 1 / (i - r)),
                ht)
              : [t, e];
          }),
            (ht.clamp = function (Lt) {
              return arguments.length ? ((H = !!Lt), ht) : H;
            }),
            (ht.interpolator = function (Lt) {
              return arguments.length ? ((I = Lt), ht) : I;
            });
          function Yt(Lt) {
            return function (Qt) {
              var de, be;
              return arguments.length
                ? (([de, be] = Qt), (I = Lt(de, be)), ht)
                : [I(0), I(1)];
            };
          }
          return (
            (ht.range = Yt(nt)),
            (ht.rangeRound = Yt(bt)),
            (ht.unknown = function (Lt) {
              return arguments.length ? ((gt = Lt), ht) : gt;
            }),
            function (Lt) {
              return (
                (x = Lt),
                (r = Lt(t)),
                (i = Lt(e)),
                (d = r === i ? 0 : 1 / (i - r)),
                ht
              );
            }
          );
        }
        function Gr(t, e) {
          return e
            .domain(t.domain())
            .interpolator(t.interpolator())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function Ea() {
          var t = qt(Fi()(_));
          return (
            (t.copy = function () {
              return Gr(t, Ea());
            }),
            Y.K.apply(t, arguments)
          );
        }
        function wa() {
          var t = Ye(Fi()).domain([1, 10]);
          return (
            (t.copy = function () {
              return Gr(t, wa()).base(t.base());
            }),
            Y.K.apply(t, arguments)
          );
        }
        function Sa() {
          var t = tn(Fi());
          return (
            (t.copy = function () {
              return Gr(t, Sa()).constant(t.constant());
            }),
            Y.K.apply(t, arguments)
          );
        }
        function la() {
          var t = Nn(Fi());
          return (
            (t.copy = function () {
              return Gr(t, la()).exponent(t.exponent());
            }),
            Y.K.apply(t, arguments)
          );
        }
        function Qa() {
          return la.apply(null, arguments).exponent(0.5);
        }
        function Ta() {
          var t = [],
            e = _;
          function r(i) {
            if (i != null && !isNaN((i = +i)))
              return e((wt(t, i, 1) - 1) / (t.length - 1));
          }
          return (
            (r.domain = function (i) {
              if (!arguments.length) return t.slice();
              t = [];
              for (let d of i) d != null && !isNaN((d = +d)) && t.push(d);
              return t.sort(at), r;
            }),
            (r.interpolator = function (i) {
              return arguments.length ? ((e = i), r) : e;
            }),
            (r.range = function () {
              return t.map((i, d) => e(d / (t.length - 1)));
            }),
            (r.quantiles = function (i) {
              return Array.from({ length: i + 1 }, (d, x) => zn(t, x / i));
            }),
            (r.copy = function () {
              return Ta(e).domain(t);
            }),
            Y.K.apply(r, arguments)
          );
        }
        function qa(t, e) {
          e === void 0 && ((e = t), (t = nt));
          for (
            var r = 0, i = e.length - 1, d = e[0], x = new Array(i < 0 ? 0 : i);
            r < i;
          )
            x[r] = t(d, (d = e[++r]));
          return function (I) {
            var H = Math.max(0, Math.min(i - 1, Math.floor((I *= i))));
            return x[H](I - H);
          };
        }
        function $i() {
          var t = 0,
            e = 0.5,
            r = 1,
            i = 1,
            d,
            x,
            I,
            H,
            gt,
            ht = _,
            Yt,
            Lt = !1,
            Qt;
          function de(Ae) {
            return isNaN((Ae = +Ae))
              ? Qt
              : ((Ae = 0.5 + ((Ae = +Yt(Ae)) - x) * (i * Ae < i * x ? H : gt)),
                ht(Lt ? Math.max(0, Math.min(1, Ae)) : Ae));
          }
          (de.domain = function (Ae) {
            return arguments.length
              ? (([t, e, r] = Ae),
                (d = Yt((t = +t))),
                (x = Yt((e = +e))),
                (I = Yt((r = +r))),
                (H = d === x ? 0 : 0.5 / (x - d)),
                (gt = x === I ? 0 : 0.5 / (I - x)),
                (i = x < d ? -1 : 1),
                de)
              : [t, e, r];
          }),
            (de.clamp = function (Ae) {
              return arguments.length ? ((Lt = !!Ae), de) : Lt;
            }),
            (de.interpolator = function (Ae) {
              return arguments.length ? ((ht = Ae), de) : ht;
            });
          function be(Ae) {
            return function (Ve) {
              var Ze, yn, xn;
              return arguments.length
                ? (([Ze, yn, xn] = Ve), (ht = qa(Ae, [Ze, yn, xn])), de)
                : [ht(0), ht(0.5), ht(1)];
            };
          }
          return (
            (de.range = be(nt)),
            (de.rangeRound = be(bt)),
            (de.unknown = function (Ae) {
              return arguments.length ? ((Qt = Ae), de) : Qt;
            }),
            function (Ae) {
              return (
                (Yt = Ae),
                (d = Ae(t)),
                (x = Ae(e)),
                (I = Ae(r)),
                (H = d === x ? 0 : 0.5 / (x - d)),
                (gt = x === I ? 0 : 0.5 / (I - x)),
                (i = x < d ? -1 : 1),
                de
              );
            }
          );
        }
        function Ma() {
          var t = qt($i()(_));
          return (
            (t.copy = function () {
              return Gr(t, Ma());
            }),
            Y.K.apply(t, arguments)
          );
        }
        function Ca() {
          var t = Ye($i()).domain([0.1, 1, 10]);
          return (
            (t.copy = function () {
              return Gr(t, Ca()).base(t.base());
            }),
            Y.K.apply(t, arguments)
          );
        }
        function Da() {
          var t = tn($i());
          return (
            (t.copy = function () {
              return Gr(t, Da()).constant(t.constant());
            }),
            Y.K.apply(t, arguments)
          );
        }
        function sa() {
          var t = Nn($i());
          return (
            (t.copy = function () {
              return Gr(t, sa()).exponent(t.exponent());
            }),
            Y.K.apply(t, arguments)
          );
        }
        function to() {
          return sa.apply(null, arguments).exponent(0.5);
        }
        function xi(t, e) {
          if ((I = t.length) > 1)
            for (var r = 1, i, d, x = t[e[0]], I, H = x.length; r < I; ++r)
              for (d = x, x = t[e[r]], i = 0; i < H; ++i)
                x[i][1] += x[i][0] = isNaN(d[i][1]) ? d[i][0] : d[i][1];
        }
        function eo(t, e) {
          if ((i = t.length) > 0) {
            for (var r, i, d = 0, x = t[0].length, I; d < x; ++d) {
              for (I = r = 0; r < i; ++r) I += t[r][d][1] || 0;
              if (I) for (r = 0; r < i; ++r) t[r][d][1] /= I;
            }
            xi(t, e);
          }
        }
        function no(t, e) {
          if ((d = t.length) > 0) {
            for (var r = 0, i = t[e[0]], d, x = i.length; r < x; ++r) {
              for (var I = 0, H = 0; I < d; ++I) H += t[I][r][1] || 0;
              i[r][1] += i[r][0] = -H / 2;
            }
            xi(t, e);
          }
        }
        function ro(t, e) {
          if (!(!((I = t.length) > 0) || !((x = (d = t[e[0]]).length) > 0))) {
            for (var r = 0, i = 1, d, x, I; i < x; ++i) {
              for (var H = 0, gt = 0, ht = 0; H < I; ++H) {
                for (
                  var Yt = t[e[H]],
                    Lt = Yt[i][1] || 0,
                    Qt = Yt[i - 1][1] || 0,
                    de = (Lt - Qt) / 2,
                    be = 0;
                  be < H;
                  ++be
                ) {
                  var Ae = t[e[be]],
                    Ve = Ae[i][1] || 0,
                    Ze = Ae[i - 1][1] || 0;
                  de += Ve - Ze;
                }
                (gt += Lt), (ht += de * Lt);
              }
              (d[i - 1][1] += d[i - 1][0] = r), gt && (r -= ht / gt);
            }
            (d[i - 1][1] += d[i - 1][0] = r), xi(t, e);
          }
        }
        var io = n(57949),
          zi = n(94770);
        function ca(t) {
          for (var e = t.length, r = new Array(e); --e >= 0; ) r[e] = e;
          return r;
        }
        function ao(t, e) {
          return t[e];
        }
        function oo(t) {
          const e = [];
          return (e.key = t), e;
        }
        function uo() {
          var t = (0, zi.A)([]),
            e = ca,
            r = xi,
            i = ao;
          function d(x) {
            var I = Array.from(t.apply(this, arguments), oo),
              H,
              gt = I.length,
              ht = -1,
              Yt;
            for (const Lt of x)
              for (H = 0, ++ht; H < gt; ++H)
                (I[H][ht] = [0, +i(Lt, I[H].key, ht, x)]).data = Lt;
            for (H = 0, Yt = (0, io.A)(e(I)); H < gt; ++H) I[Yt[H]].index = H;
            return r(I, Yt), I;
          }
          return (
            (d.keys = function (x) {
              return arguments.length
                ? ((t = typeof x == "function" ? x : (0, zi.A)(Array.from(x))),
                  d)
                : t;
            }),
            (d.value = function (x) {
              return arguments.length
                ? ((i = typeof x == "function" ? x : (0, zi.A)(+x)), d)
                : i;
            }),
            (d.order = function (x) {
              return arguments.length
                ? ((e =
                    x == null
                      ? ca
                      : typeof x == "function"
                        ? x
                        : (0, zi.A)(Array.from(x))),
                  d)
                : e;
            }),
            (d.offset = function (x) {
              return arguments.length ? ((r = x ?? xi), d) : r;
            }),
            d
          );
        }
        var lo = n(82544),
          Xi = n.n(lo),
          so = n(6702),
          Hi = n.n(so),
          co = n(64609),
          cr = n.n(co),
          fo = n(3316),
          _i = n.n(fo),
          ho = n(77837),
          po = n.n(ho),
          vo = n(52686),
          _a = n.n(vo),
          yo = n(21205),
          mo = n.n(yo),
          go = n(27367),
          fa = n.n(go),
          bo = n(4842),
          xo = n.n(bo),
          Oo = n(58782),
          Ao = n.n(Oo),
          Po = n(20206),
          Eo = n.n(Po),
          wo = n(14469),
          vn = n.n(wo);
        function So(t) {
          return Do(t) || Co(t) || Mo(t) || To();
        }
        function To() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Mo(t, e) {
          if (t) {
            if (typeof t == "string") return da(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (
              (r === "Object" && t.constructor && (r = t.constructor.name),
              r === "Map" || r === "Set")
            )
              return Array.from(t);
            if (
              r === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return da(t, e);
          }
        }
        function Co(t) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function Do(t) {
          if (Array.isArray(t)) return da(t);
        }
        function da(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
          return i;
        }
        var _o = function (e) {
            return e;
          },
          ja = { "@@functional/placeholder": !0 },
          Ia = function (e) {
            return e === ja;
          },
          Ra = function (e) {
            return function r() {
              return arguments.length === 0 ||
                (arguments.length === 1 &&
                  Ia(arguments.length <= 0 ? void 0 : arguments[0]))
                ? r
                : e.apply(void 0, arguments);
            };
          },
          jo = function t(e, r) {
            return e === 1
              ? r
              : Ra(function () {
                  for (
                    var i = arguments.length, d = new Array(i), x = 0;
                    x < i;
                    x++
                  )
                    d[x] = arguments[x];
                  var I = d.filter(function (H) {
                    return H !== ja;
                  }).length;
                  return I >= e
                    ? r.apply(void 0, d)
                    : t(
                        e - I,
                        Ra(function () {
                          for (
                            var H = arguments.length, gt = new Array(H), ht = 0;
                            ht < H;
                            ht++
                          )
                            gt[ht] = arguments[ht];
                          var Yt = d.map(function (Lt) {
                            return Ia(Lt) ? gt.shift() : Lt;
                          });
                          return r.apply(void 0, So(Yt).concat(gt));
                        }),
                      );
                });
          },
          Gi = function (e) {
            return jo(e.length, e);
          },
          Vi = function (e, r) {
            for (var i = [], d = e; d < r; ++d) i[d - e] = d;
            return i;
          },
          Ba = Gi(function (t, e) {
            return Array.isArray(e)
              ? e.map(t)
              : Object.keys(e)
                  .map(function (r) {
                    return e[r];
                  })
                  .map(t);
          }),
          Na = function () {
            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
              r[i] = arguments[i];
            if (!r.length) return _o;
            var d = r.reverse(),
              x = d[0],
              I = d.slice(1);
            return function () {
              return I.reduce(
                function (H, gt) {
                  return gt(H);
                },
                x.apply(void 0, arguments),
              );
            };
          },
          Yi = function (e) {
            return Array.isArray(e)
              ? e.reverse()
              : e.split("").reverse.join("");
          },
          ha = function (e) {
            var r = null,
              i = null;
            return function () {
              for (
                var d = arguments.length, x = new Array(d), I = 0;
                I < d;
                I++
              )
                x[I] = arguments[I];
              return (
                (r &&
                  x.every(function (H, gt) {
                    return H === r[gt];
                  })) ||
                  ((r = x), (i = e.apply(void 0, x))),
                i
              );
            };
          };
        function Io(t) {
          var e;
          return (
            t === 0
              ? (e = 1)
              : (e = Math.floor(new (vn())(t).abs().log(10).toNumber()) + 1),
            e
          );
        }
        function Ro(t, e, r) {
          for (var i = new (vn())(t), d = 0, x = []; i.lt(e) && d < 1e5; )
            x.push(i.toNumber()), (i = i.add(r)), d++;
          return x;
        }
        var Bo = Gi(function (t, e, r) {
            var i = +t,
              d = +e;
            return i + r * (d - i);
          }),
          No = Gi(function (t, e, r) {
            var i = e - +t;
            return (i = i || 1 / 0), (r - t) / i;
          }),
          Lo = Gi(function (t, e, r) {
            var i = e - +t;
            return (i = i || 1 / 0), Math.max(0, Math.min(1, (r - t) / i));
          });
        const Ji = {
          rangeStep: Ro,
          getDigitCount: Io,
          interpolateNumber: Bo,
          uninterpolateNumber: No,
          uninterpolateTruncation: Lo,
        };
        function pa(t) {
          return ko(t) || Wo(t) || La(t) || Uo();
        }
        function Uo() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Wo(t) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(t))
            return Array.from(t);
        }
        function ko(t) {
          if (Array.isArray(t)) return va(t);
        }
        function di(t, e) {
          return $o(t) || Fo(t, e) || La(t, e) || Ko();
        }
        function Ko() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function La(t, e) {
          if (t) {
            if (typeof t == "string") return va(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (
              (r === "Object" && t.constructor && (r = t.constructor.name),
              r === "Map" || r === "Set")
            )
              return Array.from(t);
            if (
              r === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return va(t, e);
          }
        }
        function va(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
          return i;
        }
        function Fo(t, e) {
          if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
            var r = [],
              i = !0,
              d = !1,
              x = void 0;
            try {
              for (
                var I = t[Symbol.iterator](), H;
                !(i = (H = I.next()).done) &&
                (r.push(H.value), !(e && r.length === e));
                i = !0
              );
            } catch (gt) {
              (d = !0), (x = gt);
            } finally {
              try {
                !i && I.return != null && I.return();
              } finally {
                if (d) throw x;
              }
            }
            return r;
          }
        }
        function $o(t) {
          if (Array.isArray(t)) return t;
        }
        function ya(t) {
          var e = di(t, 2),
            r = e[0],
            i = e[1],
            d = r,
            x = i;
          return r > i && ((d = i), (x = r)), [d, x];
        }
        function ma(t, e, r) {
          if (t.lte(0)) return new (vn())(0);
          var i = Ji.getDigitCount(t.toNumber()),
            d = new (vn())(10).pow(i),
            x = t.div(d),
            I = i !== 1 ? 0.05 : 0.1,
            H = new (vn())(Math.ceil(x.div(I).toNumber())).add(r).mul(I),
            gt = H.mul(d);
          return e ? gt : new (vn())(Math.ceil(gt));
        }
        function Ua(t, e, r) {
          var i = 1,
            d = new (vn())(t);
          if (!d.isint() && r) {
            var x = Math.abs(t);
            x < 1
              ? ((i = new (vn())(10).pow(Ji.getDigitCount(t) - 1)),
                (d = new (vn())(Math.floor(d.div(i).toNumber())).mul(i)))
              : x > 1 && (d = new (vn())(Math.floor(t)));
          } else
            t === 0
              ? (d = new (vn())(Math.floor((e - 1) / 2)))
              : r || (d = new (vn())(Math.floor(t)));
          var I = Math.floor((e - 1) / 2),
            H = Na(
              Ba(function (gt) {
                return d.add(new (vn())(gt - I).mul(i)).toNumber();
              }),
              Vi,
            );
          return H(0, e);
        }
        function Wa(t, e, r, i) {
          var d =
            arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
          if (!Number.isFinite((e - t) / (r - 1)))
            return {
              step: new (vn())(0),
              tickMin: new (vn())(0),
              tickMax: new (vn())(0),
            };
          var x = ma(new (vn())(e).sub(t).div(r - 1), i, d),
            I;
          t <= 0 && e >= 0
            ? (I = new (vn())(0))
            : ((I = new (vn())(t).add(e).div(2)),
              (I = I.sub(new (vn())(I).mod(x))));
          var H = Math.ceil(I.sub(t).div(x).toNumber()),
            gt = Math.ceil(new (vn())(e).sub(I).div(x).toNumber()),
            ht = H + gt + 1;
          return ht > r
            ? Wa(t, e, r, i, d + 1)
            : (ht < r &&
                ((gt = e > 0 ? gt + (r - ht) : gt),
                (H = e > 0 ? H : H + (r - ht))),
              {
                step: x,
                tickMin: I.sub(new (vn())(H).mul(x)),
                tickMax: I.add(new (vn())(gt).mul(x)),
              });
        }
        function zo(t) {
          var e = di(t, 2),
            r = e[0],
            i = e[1],
            d =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 6,
            x =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            I = Math.max(d, 2),
            H = ya([r, i]),
            gt = di(H, 2),
            ht = gt[0],
            Yt = gt[1];
          if (ht === -1 / 0 || Yt === 1 / 0) {
            var Lt =
              Yt === 1 / 0
                ? [ht].concat(
                    pa(
                      Vi(0, d - 1).map(function () {
                        return 1 / 0;
                      }),
                    ),
                  )
                : [].concat(
                    pa(
                      Vi(0, d - 1).map(function () {
                        return -1 / 0;
                      }),
                    ),
                    [Yt],
                  );
            return r > i ? Yi(Lt) : Lt;
          }
          if (ht === Yt) return Ua(ht, d, x);
          var Qt = Wa(ht, Yt, I, x),
            de = Qt.step,
            be = Qt.tickMin,
            Ae = Qt.tickMax,
            Ve = Ji.rangeStep(be, Ae.add(new (vn())(0.1).mul(de)), de);
          return r > i ? Yi(Ve) : Ve;
        }
        function Xo(t) {
          var e = di(t, 2),
            r = e[0],
            i = e[1],
            d =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 6,
            x =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            I = Math.max(d, 2),
            H = ya([r, i]),
            gt = di(H, 2),
            ht = gt[0],
            Yt = gt[1];
          if (ht === -1 / 0 || Yt === 1 / 0) return [r, i];
          if (ht === Yt) return Ua(ht, d, x);
          var Lt = ma(new (vn())(Yt).sub(ht).div(I - 1), x, 0),
            Qt = Na(
              Ba(function (be) {
                return new (vn())(ht).add(new (vn())(be).mul(Lt)).toNumber();
              }),
              Vi,
            ),
            de = Qt(0, I).filter(function (be) {
              return be >= ht && be <= Yt;
            });
          return r > i ? Yi(de) : de;
        }
        function Ho(t, e) {
          var r = di(t, 2),
            i = r[0],
            d = r[1],
            x =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !0,
            I = ya([i, d]),
            H = di(I, 2),
            gt = H[0],
            ht = H[1];
          if (gt === -1 / 0 || ht === 1 / 0) return [i, d];
          if (gt === ht) return [gt];
          var Yt = Math.max(e, 2),
            Lt = ma(new (vn())(ht).sub(gt).div(Yt - 1), x, 0),
            Qt = [].concat(
              pa(
                Ji.rangeStep(
                  new (vn())(gt),
                  new (vn())(ht).sub(new (vn())(0.99).mul(Lt)),
                  Lt,
                ),
              ),
              [ht],
            );
          return i > d ? Yi(Qt) : Qt;
        }
        var Go = ha(zo),
          Fu = ha(Xo),
          Vo = ha(Ho),
          Yo = n(10800),
          Pn = n(96714),
          ga = n(93563),
          Jo = n(11766);
        function ji(t) {
          "@babel/helpers - typeof";
          return (
            (ji =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      typeof Symbol == "function" &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            ji(t)
          );
        }
        function ka(t) {
          return tu(t) || qo(t) || Qo(t) || Zo();
        }
        function Zo() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Qo(t, e) {
          if (t) {
            if (typeof t == "string") return ba(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            if (
              (r === "Object" && t.constructor && (r = t.constructor.name),
              r === "Map" || r === "Set")
            )
              return Array.from(t);
            if (
              r === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return ba(t, e);
          }
        }
        function qo(t) {
          if (
            (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
            t["@@iterator"] != null
          )
            return Array.from(t);
        }
        function tu(t) {
          if (Array.isArray(t)) return ba(t);
        }
        function ba(t, e) {
          (e == null || e > t.length) && (e = t.length);
          for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
          return i;
        }
        function Ka(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e &&
              (i = i.filter(function (d) {
                return Object.getOwnPropertyDescriptor(t, d).enumerable;
              })),
              r.push.apply(r, i);
          }
          return r;
        }
        function Dn(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e] != null ? arguments[e] : {};
            e % 2
              ? Ka(Object(r), !0).forEach(function (i) {
                  Oi(t, i, r[i]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : Ka(Object(r)).forEach(function (i) {
                    Object.defineProperty(
                      t,
                      i,
                      Object.getOwnPropertyDescriptor(r, i),
                    );
                  });
          }
          return t;
        }
        function Oi(t, e, r) {
          return (
            (e = eu(e)),
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }
        function eu(t) {
          var e = nu(t, "string");
          return ji(e) == "symbol" ? e : e + "";
        }
        function nu(t, e) {
          if (ji(t) != "object" || !t) return t;
          var r = t[Symbol.toPrimitive];
          if (r !== void 0) {
            var i = r.call(t, e || "default");
            if (ji(i) != "object") return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (e === "string" ? String : Number)(t);
        }
        function Vr(t, e, r) {
          return cr()(t) || cr()(e)
            ? r
            : (0, Pn.vh)(e)
              ? _a()(t, e, r)
              : _i()(e)
                ? e(t)
                : r;
        }
        function xa(t, e, r, i) {
          var d = mo()(t, function (H) {
            return Vr(H, e);
          });
          if (r === "number") {
            var x = d.filter(function (H) {
              return (0, Pn.Et)(H) || parseFloat(H);
            });
            return x.length ? [Hi()(x), Xi()(x)] : [1 / 0, -1 / 0];
          }
          var I = i
            ? d.filter(function (H) {
                return !cr()(H);
              })
            : d;
          return I.map(function (H) {
            return (0, Pn.vh)(H) || H instanceof Date ? H : "";
          });
        }
        var ru = function (e) {
            var r,
              i =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : [],
              d = arguments.length > 2 ? arguments[2] : void 0,
              x = arguments.length > 3 ? arguments[3] : void 0,
              I = -1,
              H = (r = i?.length) !== null && r !== void 0 ? r : 0;
            if (H <= 1) return 0;
            if (
              x &&
              x.axisType === "angleAxis" &&
              Math.abs(Math.abs(x.range[1] - x.range[0]) - 360) <= 1e-6
            )
              for (var gt = x.range, ht = 0; ht < H; ht++) {
                var Yt = ht > 0 ? d[ht - 1].coordinate : d[H - 1].coordinate,
                  Lt = d[ht].coordinate,
                  Qt = ht >= H - 1 ? d[0].coordinate : d[ht + 1].coordinate,
                  de = void 0;
                if ((0, Pn.sA)(Lt - Yt) !== (0, Pn.sA)(Qt - Lt)) {
                  var be = [];
                  if ((0, Pn.sA)(Qt - Lt) === (0, Pn.sA)(gt[1] - gt[0])) {
                    de = Qt;
                    var Ae = Lt + gt[1] - gt[0];
                    (be[0] = Math.min(Ae, (Ae + Yt) / 2)),
                      (be[1] = Math.max(Ae, (Ae + Yt) / 2));
                  } else {
                    de = Yt;
                    var Ve = Qt + gt[1] - gt[0];
                    (be[0] = Math.min(Lt, (Ve + Lt) / 2)),
                      (be[1] = Math.max(Lt, (Ve + Lt) / 2));
                  }
                  var Ze = [
                    Math.min(Lt, (de + Lt) / 2),
                    Math.max(Lt, (de + Lt) / 2),
                  ];
                  if ((e > Ze[0] && e <= Ze[1]) || (e >= be[0] && e <= be[1])) {
                    I = d[ht].index;
                    break;
                  }
                } else {
                  var yn = Math.min(Yt, Qt),
                    xn = Math.max(Yt, Qt);
                  if (e > (yn + Lt) / 2 && e <= (xn + Lt) / 2) {
                    I = d[ht].index;
                    break;
                  }
                }
              }
            else
              for (var Qe = 0; Qe < H; Qe++)
                if (
                  (Qe === 0 &&
                    e <= (i[Qe].coordinate + i[Qe + 1].coordinate) / 2) ||
                  (Qe > 0 &&
                    Qe < H - 1 &&
                    e > (i[Qe].coordinate + i[Qe - 1].coordinate) / 2 &&
                    e <= (i[Qe].coordinate + i[Qe + 1].coordinate) / 2) ||
                  (Qe === H - 1 &&
                    e > (i[Qe].coordinate + i[Qe - 1].coordinate) / 2)
                ) {
                  I = i[Qe].index;
                  break;
                }
            return I;
          },
          Fa = function (e) {
            var r,
              i = e,
              d = i.type.displayName,
              x =
                (r = e.type) !== null && r !== void 0 && r.defaultProps
                  ? Dn(Dn({}, e.type.defaultProps), e.props)
                  : e.props,
              I = x.stroke,
              H = x.fill,
              gt;
            switch (d) {
              case "Line":
                gt = I;
                break;
              case "Area":
              case "Radar":
                gt = I && I !== "none" ? I : H;
                break;
              default:
                gt = H;
                break;
            }
            return gt;
          },
          iu = function (e) {
            var r = e.barSize,
              i = e.totalSize,
              d = e.stackGroups,
              x = d === void 0 ? {} : d;
            if (!x) return {};
            for (
              var I = {}, H = Object.keys(x), gt = 0, ht = H.length;
              gt < ht;
              gt++
            )
              for (
                var Yt = x[H[gt]].stackGroups,
                  Lt = Object.keys(Yt),
                  Qt = 0,
                  de = Lt.length;
                Qt < de;
                Qt++
              ) {
                var be = Yt[Lt[Qt]],
                  Ae = be.items,
                  Ve = be.cateAxisId,
                  Ze = Ae.filter(function (gn) {
                    return (0, ga.Mn)(gn.type).indexOf("Bar") >= 0;
                  });
                if (Ze && Ze.length) {
                  var yn = Ze[0].type.defaultProps,
                    xn =
                      yn !== void 0 ? Dn(Dn({}, yn), Ze[0].props) : Ze[0].props,
                    Qe = xn.barSize,
                    Tn = xn[Ve];
                  I[Tn] || (I[Tn] = []);
                  var _e = cr()(Qe) ? r : Qe;
                  I[Tn].push({
                    item: Ze[0],
                    stackList: Ze.slice(1),
                    barSize: cr()(_e) ? void 0 : (0, Pn.F4)(_e, i, 0),
                  });
                }
              }
            return I;
          },
          au = function (e) {
            var r = e.barGap,
              i = e.barCategoryGap,
              d = e.bandSize,
              x = e.sizeList,
              I = x === void 0 ? [] : x,
              H = e.maxBarSize,
              gt = I.length;
            if (gt < 1) return null;
            var ht = (0, Pn.F4)(r, d, 0, !0),
              Yt,
              Lt = [];
            if (I[0].barSize === +I[0].barSize) {
              var Qt = !1,
                de = d / gt,
                be = I.reduce(function (Qe, Tn) {
                  return Qe + Tn.barSize || 0;
                }, 0);
              (be += (gt - 1) * ht),
                be >= d && ((be -= (gt - 1) * ht), (ht = 0)),
                be >= d && de > 0 && ((Qt = !0), (de *= 0.9), (be = gt * de));
              var Ae = ((d - be) / 2) >> 0,
                Ve = { offset: Ae - ht, size: 0 };
              Yt = I.reduce(function (Qe, Tn) {
                var _e = {
                    item: Tn.item,
                    position: {
                      offset: Ve.offset + Ve.size + ht,
                      size: Qt ? de : Tn.barSize,
                    },
                  },
                  gn = [].concat(ka(Qe), [_e]);
                return (
                  (Ve = gn[gn.length - 1].position),
                  Tn.stackList &&
                    Tn.stackList.length &&
                    Tn.stackList.forEach(function (Sr) {
                      gn.push({ item: Sr, position: Ve });
                    }),
                  gn
                );
              }, Lt);
            } else {
              var Ze = (0, Pn.F4)(i, d, 0, !0);
              d - 2 * Ze - (gt - 1) * ht <= 0 && (ht = 0);
              var yn = (d - 2 * Ze - (gt - 1) * ht) / gt;
              yn > 1 && (yn >>= 0);
              var xn = H === +H ? Math.min(yn, H) : yn;
              Yt = I.reduce(function (Qe, Tn, _e) {
                var gn = [].concat(ka(Qe), [
                  {
                    item: Tn.item,
                    position: {
                      offset: Ze + (yn + ht) * _e + (yn - xn) / 2,
                      size: xn,
                    },
                  },
                ]);
                return (
                  Tn.stackList &&
                    Tn.stackList.length &&
                    Tn.stackList.forEach(function (Sr) {
                      gn.push({
                        item: Sr,
                        position: gn[gn.length - 1].position,
                      });
                    }),
                  gn
                );
              }, Lt);
            }
            return Yt;
          },
          ou = function (e, r, i, d) {
            var x = i.children,
              I = i.width,
              H = i.margin,
              gt = I - (H.left || 0) - (H.right || 0),
              ht = (0, Jo.g)({ children: x, legendWidth: gt });
            if (ht) {
              var Yt = d || {},
                Lt = Yt.width,
                Qt = Yt.height,
                de = ht.align,
                be = ht.verticalAlign,
                Ae = ht.layout;
              if (
                (Ae === "vertical" ||
                  (Ae === "horizontal" && be === "middle")) &&
                de !== "center" &&
                (0, Pn.Et)(e[de])
              )
                return Dn(Dn({}, e), {}, Oi({}, de, e[de] + (Lt || 0)));
              if (
                (Ae === "horizontal" ||
                  (Ae === "vertical" && de === "center")) &&
                be !== "middle" &&
                (0, Pn.Et)(e[be])
              )
                return Dn(Dn({}, e), {}, Oi({}, be, e[be] + (Qt || 0)));
            }
            return e;
          },
          uu = function (e, r, i) {
            return cr()(r)
              ? !0
              : e === "horizontal"
                ? r === "yAxis"
                : e === "vertical" || i === "x"
                  ? r === "xAxis"
                  : i === "y"
                    ? r === "yAxis"
                    : !0;
          },
          $a = function (e, r, i, d, x) {
            var I = r.props.children,
              H = (0, ga.aS)(I, Yo.u).filter(function (ht) {
                return uu(d, x, ht.props.direction);
              });
            if (H && H.length) {
              var gt = H.map(function (ht) {
                return ht.props.dataKey;
              });
              return e.reduce(
                function (ht, Yt) {
                  var Lt = Vr(Yt, i);
                  if (cr()(Lt)) return ht;
                  var Qt = Array.isArray(Lt) ? [Hi()(Lt), Xi()(Lt)] : [Lt, Lt],
                    de = gt.reduce(
                      function (be, Ae) {
                        var Ve = Vr(Yt, Ae, 0),
                          Ze = Qt[0] - Math.abs(Array.isArray(Ve) ? Ve[0] : Ve),
                          yn = Qt[1] + Math.abs(Array.isArray(Ve) ? Ve[1] : Ve);
                        return [Math.min(Ze, be[0]), Math.max(yn, be[1])];
                      },
                      [1 / 0, -1 / 0],
                    );
                  return [Math.min(de[0], ht[0]), Math.max(de[1], ht[1])];
                },
                [1 / 0, -1 / 0],
              );
            }
            return null;
          },
          lu = function (e, r, i, d, x) {
            var I = r
              .map(function (H) {
                return $a(e, H, i, x, d);
              })
              .filter(function (H) {
                return !cr()(H);
              });
            return I && I.length
              ? I.reduce(
                  function (H, gt) {
                    return [Math.min(H[0], gt[0]), Math.max(H[1], gt[1])];
                  },
                  [1 / 0, -1 / 0],
                )
              : null;
          },
          su = function (e, r, i, d, x) {
            var I = r.map(function (gt) {
              var ht = gt.props.dataKey;
              return (
                (i === "number" && ht && $a(e, gt, ht, d)) || xa(e, ht, i, x)
              );
            });
            if (i === "number")
              return I.reduce(
                function (gt, ht) {
                  return [Math.min(gt[0], ht[0]), Math.max(gt[1], ht[1])];
                },
                [1 / 0, -1 / 0],
              );
            var H = {};
            return I.reduce(function (gt, ht) {
              for (var Yt = 0, Lt = ht.length; Yt < Lt; Yt++)
                H[ht[Yt]] || ((H[ht[Yt]] = !0), gt.push(ht[Yt]));
              return gt;
            }, []);
          },
          cu = function (e, r) {
            return (
              (e === "horizontal" && r === "xAxis") ||
              (e === "vertical" && r === "yAxis") ||
              (e === "centric" && r === "angleAxis") ||
              (e === "radial" && r === "radiusAxis")
            );
          },
          fu = function (e, r, i, d) {
            if (d)
              return e.map(function (gt) {
                return gt.coordinate;
              });
            var x,
              I,
              H = e.map(function (gt) {
                return (
                  gt.coordinate === r && (x = !0),
                  gt.coordinate === i && (I = !0),
                  gt.coordinate
                );
              });
            return x || H.push(r), I || H.push(i), H;
          },
          du = function (e, r, i) {
            if (!e) return null;
            var d = e.scale,
              x = e.duplicateDomain,
              I = e.type,
              H = e.range,
              gt = e.realScaleType === "scaleBand" ? d.bandwidth() / 2 : 2,
              ht =
                (r || i) && I === "category" && d.bandwidth
                  ? d.bandwidth() / gt
                  : 0;
            if (
              ((ht =
                e.axisType === "angleAxis" && H?.length >= 2
                  ? (0, Pn.sA)(H[0] - H[1]) * 2 * ht
                  : ht),
              r && (e.ticks || e.niceTicks))
            ) {
              var Yt = (e.ticks || e.niceTicks).map(function (Lt) {
                var Qt = x ? x.indexOf(Lt) : Lt;
                return { coordinate: d(Qt) + ht, value: Lt, offset: ht };
              });
              return Yt.filter(function (Lt) {
                return !fa()(Lt.coordinate);
              });
            }
            return e.isCategorical && e.categoricalDomain
              ? e.categoricalDomain.map(function (Lt, Qt) {
                  return {
                    coordinate: d(Lt) + ht,
                    value: Lt,
                    index: Qt,
                    offset: ht,
                  };
                })
              : d.ticks && !i
                ? d.ticks(e.tickCount).map(function (Lt) {
                    return { coordinate: d(Lt) + ht, value: Lt, offset: ht };
                  })
                : d.domain().map(function (Lt, Qt) {
                    return {
                      coordinate: d(Lt) + ht,
                      value: x ? x[Lt] : Lt,
                      index: Qt,
                      offset: ht,
                    };
                  });
          },
          Oa = new WeakMap(),
          hu = function (e, r) {
            if (typeof r != "function") return e;
            Oa.has(e) || Oa.set(e, new WeakMap());
            var i = Oa.get(e);
            if (i.has(r)) return i.get(r);
            var d = function () {
              e.apply(void 0, arguments), r.apply(void 0, arguments);
            };
            return i.set(r, d), d;
          },
          pu = function (e, r, i) {
            var d = e.scale,
              x = e.type,
              I = e.layout,
              H = e.axisType;
            if (d === "auto")
              return I === "radial" && H === "radiusAxis"
                ? { scale: rt.A(), realScaleType: "band" }
                : I === "radial" && H === "angleAxis"
                  ? { scale: N(), realScaleType: "linear" }
                  : x === "category" &&
                      r &&
                      (r.indexOf("LineChart") >= 0 ||
                        r.indexOf("AreaChart") >= 0 ||
                        (r.indexOf("ComposedChart") >= 0 && !i))
                    ? { scale: rt.z(), realScaleType: "point" }
                    : x === "category"
                      ? { scale: rt.A(), realScaleType: "band" }
                      : { scale: N(), realScaleType: "linear" };
            if (po()(d)) {
              var gt = "scale".concat(xo()(d));
              return {
                scale: (s[gt] || rt.z)(),
                realScaleType: s[gt] ? gt : "point",
              };
            }
            return _i()(d)
              ? { scale: d }
              : { scale: rt.z(), realScaleType: "point" };
          },
          za = 1e-4,
          vu = function (e) {
            var r = e.domain();
            if (!(!r || r.length <= 2)) {
              var i = r.length,
                d = e.range(),
                x = Math.min(d[0], d[1]) - za,
                I = Math.max(d[0], d[1]) + za,
                H = e(r[0]),
                gt = e(r[i - 1]);
              (H < x || H > I || gt < x || gt > I) &&
                e.domain([r[0], r[i - 1]]);
            }
          },
          yu = function (e, r) {
            if (!e) return null;
            for (var i = 0, d = e.length; i < d; i++)
              if (e[i].item === r) return e[i].position;
            return null;
          },
          mu = function (e, r) {
            if (!r || r.length !== 2 || !(0, Pn.Et)(r[0]) || !(0, Pn.Et)(r[1]))
              return e;
            var i = Math.min(r[0], r[1]),
              d = Math.max(r[0], r[1]),
              x = [e[0], e[1]];
            return (
              (!(0, Pn.Et)(e[0]) || e[0] < i) && (x[0] = i),
              (!(0, Pn.Et)(e[1]) || e[1] > d) && (x[1] = d),
              x[0] > d && (x[0] = d),
              x[1] < i && (x[1] = i),
              x
            );
          },
          gu = function (e) {
            var r = e.length;
            if (!(r <= 0))
              for (var i = 0, d = e[0].length; i < d; ++i)
                for (var x = 0, I = 0, H = 0; H < r; ++H) {
                  var gt = fa()(e[H][i][1]) ? e[H][i][0] : e[H][i][1];
                  gt >= 0
                    ? ((e[H][i][0] = x),
                      (e[H][i][1] = x + gt),
                      (x = e[H][i][1]))
                    : ((e[H][i][0] = I),
                      (e[H][i][1] = I + gt),
                      (I = e[H][i][1]));
                }
          },
          bu = function (e) {
            var r = e.length;
            if (!(r <= 0))
              for (var i = 0, d = e[0].length; i < d; ++i)
                for (var x = 0, I = 0; I < r; ++I) {
                  var H = fa()(e[I][i][1]) ? e[I][i][0] : e[I][i][1];
                  H >= 0
                    ? ((e[I][i][0] = x), (e[I][i][1] = x + H), (x = e[I][i][1]))
                    : ((e[I][i][0] = 0), (e[I][i][1] = 0));
                }
          },
          xu = {
            sign: gu,
            expand: eo,
            none: xi,
            silhouette: no,
            wiggle: ro,
            positive: bu,
          },
          Ou = function (e, r, i) {
            var d = r.map(function (H) {
                return H.props.dataKey;
              }),
              x = xu[i],
              I = uo()
                .keys(d)
                .value(function (H, gt) {
                  return +Vr(H, gt, 0);
                })
                .order(ca)
                .offset(x);
            return I(e);
          },
          Au = function (e, r, i, d, x, I) {
            if (!e) return null;
            var H = I ? r.reverse() : r,
              gt = {},
              ht = H.reduce(function (Lt, Qt) {
                var de,
                  be =
                    (de = Qt.type) !== null && de !== void 0 && de.defaultProps
                      ? Dn(Dn({}, Qt.type.defaultProps), Qt.props)
                      : Qt.props,
                  Ae = be.stackId,
                  Ve = be.hide;
                if (Ve) return Lt;
                var Ze = be[i],
                  yn = Lt[Ze] || { hasStack: !1, stackGroups: {} };
                if ((0, Pn.vh)(Ae)) {
                  var xn = yn.stackGroups[Ae] || {
                    numericAxisId: i,
                    cateAxisId: d,
                    items: [],
                  };
                  xn.items.push(Qt),
                    (yn.hasStack = !0),
                    (yn.stackGroups[Ae] = xn);
                } else
                  yn.stackGroups[(0, Pn.NF)("_stackId_")] = {
                    numericAxisId: i,
                    cateAxisId: d,
                    items: [Qt],
                  };
                return Dn(Dn({}, Lt), {}, Oi({}, Ze, yn));
              }, gt),
              Yt = {};
            return Object.keys(ht).reduce(function (Lt, Qt) {
              var de = ht[Qt];
              if (de.hasStack) {
                var be = {};
                de.stackGroups = Object.keys(de.stackGroups).reduce(function (
                  Ae,
                  Ve,
                ) {
                  var Ze = de.stackGroups[Ve];
                  return Dn(
                    Dn({}, Ae),
                    {},
                    Oi({}, Ve, {
                      numericAxisId: i,
                      cateAxisId: d,
                      items: Ze.items,
                      stackedData: Ou(e, Ze.items, x),
                    }),
                  );
                }, be);
              }
              return Dn(Dn({}, Lt), {}, Oi({}, Qt, de));
            }, Yt);
          },
          Pu = function (e, r) {
            var i = r.realScaleType,
              d = r.type,
              x = r.tickCount,
              I = r.originalDomain,
              H = r.allowDecimals,
              gt = i || r.scale;
            if (gt !== "auto" && gt !== "linear") return null;
            if (
              x &&
              d === "number" &&
              I &&
              (I[0] === "auto" || I[1] === "auto")
            ) {
              var ht = e.domain();
              if (!ht.length) return null;
              var Yt = Go(ht, x, H);
              return e.domain([Hi()(Yt), Xi()(Yt)]), { niceTicks: Yt };
            }
            if (x && d === "number") {
              var Lt = e.domain(),
                Qt = Vo(Lt, x, H);
              return { niceTicks: Qt };
            }
            return null;
          };
        function Eu(t) {
          var e = t.axis,
            r = t.ticks,
            i = t.bandSize,
            d = t.entry,
            x = t.index,
            I = t.dataKey;
          if (e.type === "category") {
            if (
              !e.allowDuplicatedCategory &&
              e.dataKey &&
              !cr()(d[e.dataKey])
            ) {
              var H = (0, Pn.eP)(r, "value", d[e.dataKey]);
              if (H) return H.coordinate + i / 2;
            }
            return r[x] ? r[x].coordinate + i / 2 : null;
          }
          var gt = Vr(d, cr()(I) ? e.dataKey : I);
          return cr()(gt) ? null : e.scale(gt);
        }
        var wu = function (e) {
            var r = e.axis,
              i = e.ticks,
              d = e.offset,
              x = e.bandSize,
              I = e.entry,
              H = e.index;
            if (r.type === "category") return i[H] ? i[H].coordinate + d : null;
            var gt = Vr(I, r.dataKey, r.domain[H]);
            return cr()(gt) ? null : r.scale(gt) - x / 2 + d;
          },
          Su = function (e) {
            var r = e.numericAxis,
              i = r.scale.domain();
            if (r.type === "number") {
              var d = Math.min(i[0], i[1]),
                x = Math.max(i[0], i[1]);
              return d <= 0 && x >= 0 ? 0 : x < 0 ? x : d;
            }
            return i[0];
          },
          Tu = function (e, r) {
            var i,
              d =
                (i = e.type) !== null && i !== void 0 && i.defaultProps
                  ? Dn(Dn({}, e.type.defaultProps), e.props)
                  : e.props,
              x = d.stackId;
            if ((0, Pn.vh)(x)) {
              var I = r[x];
              if (I) {
                var H = I.items.indexOf(e);
                return H >= 0 ? I.stackedData[H] : null;
              }
            }
            return null;
          },
          Mu = function (e) {
            return e.reduce(
              function (r, i) {
                return [
                  Hi()(i.concat([r[0]]).filter(Pn.Et)),
                  Xi()(i.concat([r[1]]).filter(Pn.Et)),
                ];
              },
              [1 / 0, -1 / 0],
            );
          },
          Cu = function (e, r, i) {
            return Object.keys(e)
              .reduce(
                function (d, x) {
                  var I = e[x],
                    H = I.stackedData,
                    gt = H.reduce(
                      function (ht, Yt) {
                        var Lt = Mu(Yt.slice(r, i + 1));
                        return [Math.min(ht[0], Lt[0]), Math.max(ht[1], Lt[1])];
                      },
                      [1 / 0, -1 / 0],
                    );
                  return [Math.min(gt[0], d[0]), Math.max(gt[1], d[1])];
                },
                [1 / 0, -1 / 0],
              )
              .map(function (d) {
                return d === 1 / 0 || d === -1 / 0 ? 0 : d;
              });
          },
          Xa = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
          Ha = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
          Du = function (e, r, i) {
            if (_i()(e)) return e(r, i);
            if (!Array.isArray(e)) return r;
            var d = [];
            if ((0, Pn.Et)(e[0])) d[0] = i ? e[0] : Math.min(e[0], r[0]);
            else if (Xa.test(e[0])) {
              var x = +Xa.exec(e[0])[1];
              d[0] = r[0] - x;
            } else _i()(e[0]) ? (d[0] = e[0](r[0])) : (d[0] = r[0]);
            if ((0, Pn.Et)(e[1])) d[1] = i ? e[1] : Math.max(e[1], r[1]);
            else if (Ha.test(e[1])) {
              var I = +Ha.exec(e[1])[1];
              d[1] = r[1] + I;
            } else _i()(e[1]) ? (d[1] = e[1](r[1])) : (d[1] = r[1]);
            return d;
          },
          _u = function (e, r, i) {
            if (e && e.scale && e.scale.bandwidth) {
              var d = e.scale.bandwidth();
              if (!i || d > 0) return d;
            }
            if (e && r && r.length >= 2) {
              for (
                var x = Eo()(r, function (Lt) {
                    return Lt.coordinate;
                  }),
                  I = 1 / 0,
                  H = 1,
                  gt = x.length;
                H < gt;
                H++
              ) {
                var ht = x[H],
                  Yt = x[H - 1];
                I = Math.min((ht.coordinate || 0) - (Yt.coordinate || 0), I);
              }
              return I === 1 / 0 ? 0 : I;
            }
            return i ? void 0 : 0;
          },
          ju = function (e, r, i) {
            return !e ||
              !e.length ||
              Ao()(e, _a()(i, "type.defaultProps.domain"))
              ? r
              : e;
          },
          Iu = function (e, r) {
            var i = e.type.defaultProps
                ? Dn(Dn({}, e.type.defaultProps), e.props)
                : e.props,
              d = i.dataKey,
              x = i.name,
              I = i.unit,
              H = i.formatter,
              gt = i.tooltipType,
              ht = i.chartType,
              Yt = i.hide;
            return Dn(
              Dn({}, (0, ga.J9)(e, !1)),
              {},
              {
                dataKey: d,
                unit: I,
                formatter: H,
                name: x || d,
                color: Fa(e),
                value: Vr(r, d),
                type: gt,
                payload: r,
                chartType: ht,
                hide: Yt,
              },
            );
          };
      },
      15654: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A3: () => M, Pu: () => w });
        var s = n(59640);
        function rt(g) {
          "@babel/helpers - typeof";
          return (
            (rt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (v) {
                    return typeof v;
                  }
                : function (v) {
                    return v &&
                      typeof Symbol == "function" &&
                      v.constructor === Symbol &&
                      v !== Symbol.prototype
                      ? "symbol"
                      : typeof v;
                  }),
            rt(g)
          );
        }
        function K(g, v) {
          var ut = Object.keys(g);
          if (Object.getOwnPropertySymbols) {
            var lt = Object.getOwnPropertySymbols(g);
            v &&
              (lt = lt.filter(function (Nt) {
                return Object.getOwnPropertyDescriptor(g, Nt).enumerable;
              })),
              ut.push.apply(ut, lt);
          }
          return ut;
        }
        function q(g) {
          for (var v = 1; v < arguments.length; v++) {
            var ut = arguments[v] != null ? arguments[v] : {};
            v % 2
              ? K(Object(ut), !0).forEach(function (lt) {
                  U(g, lt, ut[lt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    g,
                    Object.getOwnPropertyDescriptors(ut),
                  )
                : K(Object(ut)).forEach(function (lt) {
                    Object.defineProperty(
                      g,
                      lt,
                      Object.getOwnPropertyDescriptor(ut, lt),
                    );
                  });
          }
          return g;
        }
        function U(g, v, ut) {
          return (
            (v = Q(v)),
            v in g
              ? Object.defineProperty(g, v, {
                  value: ut,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (g[v] = ut),
            g
          );
        }
        function Q(g) {
          var v = z(g, "string");
          return rt(v) == "symbol" ? v : v + "";
        }
        function z(g, v) {
          if (rt(g) != "object" || !g) return g;
          var ut = g[Symbol.toPrimitive];
          if (ut !== void 0) {
            var lt = ut.call(g, v || "default");
            if (rt(lt) != "object") return lt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (v === "string" ? String : Number)(g);
        }
        function et(g) {
          return F(g) || it(g) || at(g) || ot();
        }
        function ot() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function at(g, v) {
          if (g) {
            if (typeof g == "string") return dt(g, v);
            var ut = Object.prototype.toString.call(g).slice(8, -1);
            if (
              (ut === "Object" && g.constructor && (ut = g.constructor.name),
              ut === "Map" || ut === "Set")
            )
              return Array.from(g);
            if (
              ut === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ut)
            )
              return dt(g, v);
          }
        }
        function it(g) {
          if (
            (typeof Symbol < "u" && g[Symbol.iterator] != null) ||
            g["@@iterator"] != null
          )
            return Array.from(g);
        }
        function F(g) {
          if (Array.isArray(g)) return dt(g);
        }
        function dt(g, v) {
          (v == null || v > g.length) && (v = g.length);
          for (var ut = 0, lt = new Array(v); ut < v; ut++) lt[ut] = g[ut];
          return lt;
        }
        var V = { widthCache: {}, cacheCount: 0 },
          pt = 2e3,
          Pt = {
            position: "absolute",
            top: "-20000px",
            left: 0,
            padding: 0,
            margin: 0,
            border: "none",
            whiteSpace: "pre",
          },
          L = null,
          Kt = "recharts_measurement_span";
        function Dt(g, v) {
          return L.indexOf(g) >= 0 && v === +v ? "".concat(v, "px") : v;
        }
        function wt(g) {
          var v = g.split(""),
            ut = v.reduce(function (lt, Nt) {
              return Nt === Nt.toUpperCase()
                ? [].concat(et(lt), ["-", Nt.toLowerCase()])
                : [].concat(et(lt), [Nt]);
            }, []);
          return ut.join("");
        }
        var Mt = function (v) {
          return Object.keys(v).reduce(function (ut, lt) {
            return "".concat(ut).concat(wt(lt), ":").concat(Dt(lt, v[lt]), ";");
          }, "");
        };
        function $(g) {
          var v = q({}, g);
          return (
            Object.keys(v).forEach(function (ut) {
              v[ut] || delete v[ut];
            }),
            v
          );
        }
        var w = function (v) {
            var ut =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            if (v == null || s.m.isSsr) return { width: 0, height: 0 };
            var lt = $(ut),
              Nt = JSON.stringify({ text: v, copyStyle: lt });
            if (V.widthCache[Nt]) return V.widthCache[Nt];
            try {
              var C = document.getElementById(Kt);
              C ||
                ((C = document.createElement("span")),
                C.setAttribute("id", Kt),
                C.setAttribute("aria-hidden", "true"),
                document.body.appendChild(C));
              var B = q(q({}, Pt), lt);
              Object.assign(C.style, B), (C.textContent = "".concat(v));
              var nt = C.getBoundingClientRect(),
                bt = { width: nt.width, height: nt.height };
              return (
                (V.widthCache[Nt] = bt),
                ++V.cacheCount > pt &&
                  ((V.cacheCount = 0), (V.widthCache = {})),
                bt
              );
            } catch {
              return { width: 0, height: 0 };
            }
          },
          M = function (v) {
            return {
              top: v.top + window.scrollY - document.documentElement.clientTop,
              left:
                v.left + window.scrollX - document.documentElement.clientLeft,
            };
          };
      },
      96714: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, {
          CG: () => wt,
          Dj: () => Mt,
          Et: () => dt,
          F4: () => Kt,
          NF: () => L,
          _3: () => F,
          ck: () => M,
          eP: () => $,
          jG: () => w,
          lX: () => Dt,
          sA: () => it,
          uy: () => V,
          vh: () => pt,
        });
        var s = n(77837),
          rt = n.n(s),
          K = n(27367),
          q = n.n(K),
          U = n(52686),
          Q = n.n(U),
          z = n(2017),
          et = n.n(z),
          ot = n(64609),
          at = n.n(ot),
          it = function (v) {
            return v === 0 ? 0 : v > 0 ? 1 : -1;
          },
          F = function (v) {
            return rt()(v) && v.indexOf("%") === v.length - 1;
          },
          dt = function (v) {
            return et()(v) && !q()(v);
          },
          V = function (v) {
            return at()(v);
          },
          pt = function (v) {
            return dt(v) || rt()(v);
          },
          Pt = 0,
          L = function (v) {
            var ut = ++Pt;
            return "".concat(v || "").concat(ut);
          },
          Kt = function (v, ut) {
            var lt =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : 0,
              Nt =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : !1;
            if (!dt(v) && !rt()(v)) return lt;
            var C;
            if (F(v)) {
              var B = v.indexOf("%");
              C = (ut * parseFloat(v.slice(0, B))) / 100;
            } else C = +v;
            return q()(C) && (C = lt), Nt && C > ut && (C = ut), C;
          },
          Dt = function (v) {
            if (!v) return null;
            var ut = Object.keys(v);
            return ut && ut.length ? v[ut[0]] : null;
          },
          wt = function (v) {
            if (!Array.isArray(v)) return !1;
            for (var ut = v.length, lt = {}, Nt = 0; Nt < ut; Nt++)
              if (!lt[v[Nt]]) lt[v[Nt]] = !0;
              else return !0;
            return !1;
          },
          Mt = function (v, ut) {
            return dt(v) && dt(ut)
              ? function (lt) {
                  return v + lt * (ut - v);
                }
              : function () {
                  return ut;
                };
          };
        function $(g, v, ut) {
          return !g || !g.length
            ? null
            : g.find(function (lt) {
                return (
                  lt && (typeof v == "function" ? v(lt) : Q()(lt, v)) === ut
                );
              });
        }
        var w = function (v) {
            if (!v || !v.length) return null;
            for (
              var ut = v.length,
                lt = 0,
                Nt = 0,
                C = 0,
                B = 0,
                nt = 1 / 0,
                bt = -1 / 0,
                P = 0,
                m = 0,
                S = 0;
              S < ut;
              S++
            )
              (P = v[S].cx || 0),
                (m = v[S].cy || 0),
                (lt += P),
                (Nt += m),
                (C += P * m),
                (B += P * P),
                (nt = Math.min(nt, P)),
                (bt = Math.max(bt, P));
            var _ =
              ut * B !== lt * lt ? (ut * C - lt * Nt) / (ut * B - lt * lt) : 0;
            return { xmin: nt, xmax: bt, a: _, b: (Nt - _ * lt) / ut };
          },
          M = function (v, ut) {
            return dt(v) && dt(ut)
              ? v - ut
              : rt()(v) && rt()(ut)
                ? v.localeCompare(ut)
                : v instanceof Date && ut instanceof Date
                  ? v.getTime() - ut.getTime()
                  : String(v).localeCompare(String(ut));
          };
      },
      59640: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { m: () => rt });
        var s = function () {
            return !(
              typeof window < "u" &&
              window.document &&
              window.document.createElement &&
              window.setTimeout
            );
          },
          rt = {
            isSsr: s(),
            get: function (q) {
              return rt[q];
            },
            set: function (q, U) {
              if (typeof q == "string") rt[q] = U;
              else {
                var Q = Object.keys(q);
                Q &&
                  Q.length &&
                  Q.forEach(function (z) {
                    rt[z] = q[z];
                  });
              }
            },
          };
      },
      83349: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { R: () => s });
        var s = function (K, q) {
          var U = K.alwaysShow,
            Q = K.ifOverflow;
          return U && (Q = "extendDomain"), Q === q;
        };
      },
      27664: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { R: () => rt });
        var s = !1,
          rt = function (q, U) {
            for (
              var Q = arguments.length,
                z = new Array(Q > 2 ? Q - 2 : 0),
                et = 2;
              et < Q;
              et++
            )
              z[et - 2] = arguments[et];
            if (
              s &&
              typeof console < "u" &&
              console.warn &&
              (U === void 0 &&
                console.warn("LogUtils requires an error message argument"),
              !q)
            )
              if (U === void 0)
                console.warn(
                  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
                );
              else {
                var ot = 0;
                console.warn(
                  U.replace(/%s/g, function () {
                    return z[ot++];
                  }),
                );
              }
          };
      },
      90134: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { IZ: () => Mt, Kg: () => Kt, yy: () => lt });
        var s = n(64609),
          rt = n.n(s),
          K = n(90626),
          q = n(3316),
          U = n.n(q);
        function Q(C) {
          "@babel/helpers - typeof";
          return (
            (Q =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (B) {
                    return typeof B;
                  }
                : function (B) {
                    return B &&
                      typeof Symbol == "function" &&
                      B.constructor === Symbol &&
                      B !== Symbol.prototype
                      ? "symbol"
                      : typeof B;
                  }),
            Q(C)
          );
        }
        function z(C, B) {
          var nt = Object.keys(C);
          if (Object.getOwnPropertySymbols) {
            var bt = Object.getOwnPropertySymbols(C);
            B &&
              (bt = bt.filter(function (P) {
                return Object.getOwnPropertyDescriptor(C, P).enumerable;
              })),
              nt.push.apply(nt, bt);
          }
          return nt;
        }
        function et(C) {
          for (var B = 1; B < arguments.length; B++) {
            var nt = arguments[B] != null ? arguments[B] : {};
            B % 2
              ? z(Object(nt), !0).forEach(function (bt) {
                  ot(C, bt, nt[bt]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    C,
                    Object.getOwnPropertyDescriptors(nt),
                  )
                : z(Object(nt)).forEach(function (bt) {
                    Object.defineProperty(
                      C,
                      bt,
                      Object.getOwnPropertyDescriptor(nt, bt),
                    );
                  });
          }
          return C;
        }
        function ot(C, B, nt) {
          return (
            (B = at(B)),
            B in C
              ? Object.defineProperty(C, B, {
                  value: nt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (C[B] = nt),
            C
          );
        }
        function at(C) {
          var B = it(C, "string");
          return Q(B) == "symbol" ? B : B + "";
        }
        function it(C, B) {
          if (Q(C) != "object" || !C) return C;
          var nt = C[Symbol.toPrimitive];
          if (nt !== void 0) {
            var bt = nt.call(C, B || "default");
            if (Q(bt) != "object") return bt;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (B === "string" ? String : Number)(C);
        }
        function F(C, B) {
          return L(C) || Pt(C, B) || V(C, B) || dt();
        }
        function dt() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function V(C, B) {
          if (C) {
            if (typeof C == "string") return pt(C, B);
            var nt = Object.prototype.toString.call(C).slice(8, -1);
            if (
              (nt === "Object" && C.constructor && (nt = C.constructor.name),
              nt === "Map" || nt === "Set")
            )
              return Array.from(C);
            if (
              nt === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(nt)
            )
              return pt(C, B);
          }
        }
        function pt(C, B) {
          (B == null || B > C.length) && (B = C.length);
          for (var nt = 0, bt = new Array(B); nt < B; nt++) bt[nt] = C[nt];
          return bt;
        }
        function Pt(C, B) {
          var nt =
            C == null
              ? null
              : (typeof Symbol < "u" && C[Symbol.iterator]) || C["@@iterator"];
          if (nt != null) {
            var bt,
              P,
              m,
              S,
              _ = [],
              E = !0,
              c = !1;
            try {
              if (((m = (nt = nt.call(C)).next), B === 0)) {
                if (Object(nt) !== nt) return;
                E = !1;
              } else
                for (
                  ;
                  !(E = (bt = m.call(nt)).done) &&
                  (_.push(bt.value), _.length !== B);
                  E = !0
                );
            } catch (o) {
              (c = !0), (P = o);
            } finally {
              try {
                if (
                  !E &&
                  nt.return != null &&
                  ((S = nt.return()), Object(S) !== S)
                )
                  return;
              } finally {
                if (c) throw P;
              }
            }
            return _;
          }
        }
        function L(C) {
          if (Array.isArray(C)) return C;
        }
        var Kt = Math.PI / 180,
          Dt = function (B) {
            return (B * Math.PI) / 180;
          },
          wt = function (B) {
            return (B * 180) / Math.PI;
          },
          Mt = function (B, nt, bt, P) {
            return {
              x: B + Math.cos(-Kt * P) * bt,
              y: nt + Math.sin(-Kt * P) * bt,
            };
          },
          $ = function (B, nt) {
            var bt =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : { top: 0, right: 0, bottom: 0, left: 0 };
            return (
              Math.min(
                Math.abs(B - (bt.left || 0) - (bt.right || 0)),
                Math.abs(nt - (bt.top || 0) - (bt.bottom || 0)),
              ) / 2
            );
          },
          w = function (B, nt, bt, P, m) {
            var S = B.width,
              _ = B.height,
              E = B.startAngle,
              c = B.endAngle,
              o = getPercentValue(B.cx, S, S / 2),
              p = getPercentValue(B.cy, _, _ / 2),
              b = $(S, _, bt),
              R = getPercentValue(B.innerRadius, b, 0),
              J = getPercentValue(B.outerRadius, b, b * 0.8),
              Y = Object.keys(nt);
            return Y.reduce(function (It, Z) {
              var vt = nt[Z],
                ft = vt.domain,
                xt = vt.reversed,
                Ut;
              if (isNil(vt.range))
                P === "angleAxis"
                  ? (Ut = [E, c])
                  : P === "radiusAxis" && (Ut = [R, J]),
                  xt && (Ut = [Ut[1], Ut[0]]);
              else {
                Ut = vt.range;
                var Vt = Ut,
                  ct = F(Vt, 2);
                (E = ct[0]), (c = ct[1]);
              }
              var l = parseScale(vt, m),
                h = l.realScaleType,
                O = l.scale;
              O.domain(ft).range(Ut), checkDomainOfScale(O);
              var f = getTicksOfScale(
                  O,
                  et(et({}, vt), {}, { realScaleType: h }),
                ),
                D = et(
                  et(et({}, vt), f),
                  {},
                  {
                    range: Ut,
                    radius: J,
                    realScaleType: h,
                    scale: O,
                    cx: o,
                    cy: p,
                    innerRadius: R,
                    outerRadius: J,
                    startAngle: E,
                    endAngle: c,
                  },
                );
              return et(et({}, It), {}, ot({}, Z, D));
            }, {});
          },
          M = function (B, nt) {
            var bt = B.x,
              P = B.y,
              m = nt.x,
              S = nt.y;
            return Math.sqrt(Math.pow(bt - m, 2) + Math.pow(P - S, 2));
          },
          g = function (B, nt) {
            var bt = B.x,
              P = B.y,
              m = nt.cx,
              S = nt.cy,
              _ = M({ x: bt, y: P }, { x: m, y: S });
            if (_ <= 0) return { radius: _ };
            var E = (bt - m) / _,
              c = Math.acos(E);
            return (
              P > S && (c = 2 * Math.PI - c),
              { radius: _, angle: wt(c), angleInRadian: c }
            );
          },
          v = function (B) {
            var nt = B.startAngle,
              bt = B.endAngle,
              P = Math.floor(nt / 360),
              m = Math.floor(bt / 360),
              S = Math.min(P, m);
            return { startAngle: nt - S * 360, endAngle: bt - S * 360 };
          },
          ut = function (B, nt) {
            var bt = nt.startAngle,
              P = nt.endAngle,
              m = Math.floor(bt / 360),
              S = Math.floor(P / 360),
              _ = Math.min(m, S);
            return B + _ * 360;
          },
          lt = function (B, nt) {
            var bt = B.x,
              P = B.y,
              m = g({ x: bt, y: P }, nt),
              S = m.radius,
              _ = m.angle,
              E = nt.innerRadius,
              c = nt.outerRadius;
            if (S < E || S > c) return !1;
            if (S === 0) return !0;
            var o = v(nt),
              p = o.startAngle,
              b = o.endAngle,
              R = _,
              J;
            if (p <= b) {
              for (; R > b; ) R -= 360;
              for (; R < p; ) R += 360;
              J = R >= p && R <= b;
            } else {
              for (; R > p; ) R -= 360;
              for (; R < b; ) R += 360;
              J = R >= b && R <= p;
            }
            return J
              ? et(et({}, nt), {}, { radius: S, angle: ut(R, nt) })
              : null;
          },
          Nt = function (B) {
            return !isValidElement(B) && !isFunction(B) && typeof B != "boolean"
              ? B.className
              : "";
          };
      },
      93563: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, {
          AW: () => R,
          BU: () => C,
          J9: () => E,
          Me: () => nt,
          Mn: () => g,
          OV: () => c,
          X_: () => b,
          aS: () => Nt,
          ee: () => p,
          sT: () => m,
        });
        var s = n(52686),
          rt = n.n(s),
          K = n(64609),
          q = n.n(K),
          U = n(77837),
          Q = n.n(U),
          z = n(3316),
          et = n.n(z),
          ot = n(97827),
          at = n.n(ot),
          it = n(90626),
          F = n(98193),
          dt = n(96714),
          V = n(80103),
          pt = n(43998),
          Pt = ["children"],
          L = ["children"];
        function Kt(J, Y) {
          if (J == null) return {};
          var It = Dt(J, Y),
            Z,
            vt;
          if (Object.getOwnPropertySymbols) {
            var ft = Object.getOwnPropertySymbols(J);
            for (vt = 0; vt < ft.length; vt++)
              (Z = ft[vt]),
                !(Y.indexOf(Z) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(J, Z) &&
                  (It[Z] = J[Z]);
          }
          return It;
        }
        function Dt(J, Y) {
          if (J == null) return {};
          var It = {};
          for (var Z in J)
            if (Object.prototype.hasOwnProperty.call(J, Z)) {
              if (Y.indexOf(Z) >= 0) continue;
              It[Z] = J[Z];
            }
          return It;
        }
        function wt(J) {
          "@babel/helpers - typeof";
          return (
            (wt =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (Y) {
                    return typeof Y;
                  }
                : function (Y) {
                    return Y &&
                      typeof Symbol == "function" &&
                      Y.constructor === Symbol &&
                      Y !== Symbol.prototype
                      ? "symbol"
                      : typeof Y;
                  }),
            wt(J)
          );
        }
        var Mt = {
            click: "onClick",
            mousedown: "onMouseDown",
            mouseup: "onMouseUp",
            mouseover: "onMouseOver",
            mousemove: "onMouseMove",
            mouseout: "onMouseOut",
            mouseenter: "onMouseEnter",
            mouseleave: "onMouseLeave",
            touchcancel: "onTouchCancel",
            touchend: "onTouchEnd",
            touchmove: "onTouchMove",
            touchstart: "onTouchStart",
            contextmenu: "onContextMenu",
            dblclick: "onDoubleClick",
          },
          $ = null,
          w = null,
          M = null,
          g = function (Y) {
            return typeof Y == "string"
              ? Y
              : Y
                ? Y.displayName || Y.name || "Component"
                : "";
          },
          v = null,
          ut = null,
          lt = function J(Y) {
            if (Y === v && Array.isArray(ut)) return ut;
            var It = [];
            return (
              it.Children.forEach(Y, function (Z) {
                q()(Z) ||
                  ((0, F.isFragment)(Z)
                    ? (It = It.concat(J(Z.props.children)))
                    : It.push(Z));
              }),
              (ut = It),
              (v = Y),
              It
            );
          };
        function Nt(J, Y) {
          var It = [],
            Z = [];
          return (
            Array.isArray(Y)
              ? (Z = Y.map(function (vt) {
                  return g(vt);
                }))
              : (Z = [g(Y)]),
            lt(J).forEach(function (vt) {
              var ft = rt()(vt, "type.displayName") || rt()(vt, "type.name");
              Z.indexOf(ft) !== -1 && It.push(vt);
            }),
            It
          );
        }
        function C(J, Y) {
          var It = Nt(J, Y);
          return It && It[0];
        }
        var B = function (Y, It) {
            var Z = [],
              vt;
            return (
              Array.isArray(It)
                ? (vt = It.map(function (ft) {
                    return g(ft);
                  }))
                : (vt = [g(It)]),
              lt(Y).forEach(function (ft) {
                var xt = get(ft, "type.displayName");
                (xt && vt.indexOf(xt) !== -1) || Z.push(ft);
              }),
              Z
            );
          },
          nt = function (Y) {
            if (!Y || !Y.props) return !1;
            var It = Y.props,
              Z = It.width,
              vt = It.height;
            return !(!(0, dt.Et)(Z) || Z <= 0 || !(0, dt.Et)(vt) || vt <= 0);
          },
          bt = [
            "a",
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animate",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "circle",
            "clipPath",
            "color-profile",
            "cursor",
            "defs",
            "desc",
            "ellipse",
            "feBlend",
            "feColormatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "filter",
            "font",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-url",
            "foreignObject",
            "g",
            "glyph",
            "glyphRef",
            "hkern",
            "image",
            "line",
            "lineGradient",
            "marker",
            "mask",
            "metadata",
            "missing-glyph",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialGradient",
            "rect",
            "script",
            "set",
            "stop",
            "style",
            "svg",
            "switch",
            "symbol",
            "text",
            "textPath",
            "title",
            "tref",
            "tspan",
            "use",
            "view",
            "vkern",
          ],
          P = function (Y) {
            return Y && Y.type && Q()(Y.type) && bt.indexOf(Y.type) >= 0;
          },
          m = function (Y) {
            return Y && wt(Y) === "object" && "clipDot" in Y;
          },
          S = function (Y, It, Z, vt) {
            var ft,
              xt =
                (ft =
                  pt.VU === null || pt.VU === void 0 ? void 0 : pt.VU[vt]) !==
                  null && ft !== void 0
                  ? ft
                  : [];
            return (
              It.startsWith("data-") ||
              (!et()(Y) && ((vt && xt.includes(It)) || pt.QQ.includes(It))) ||
              (Z && pt.j2.includes(It))
            );
          },
          _ = function (Y) {
            var It = [];
            return (
              lt(Y).forEach(function (Z) {
                P(Z) && It.push(Z);
              }),
              It
            );
          },
          E = function (Y, It, Z) {
            if (!Y || typeof Y == "function" || typeof Y == "boolean")
              return null;
            var vt = Y;
            if (((0, it.isValidElement)(Y) && (vt = Y.props), !at()(vt)))
              return null;
            var ft = {};
            return (
              Object.keys(vt).forEach(function (xt) {
                var Ut;
                S(
                  (Ut = vt) === null || Ut === void 0 ? void 0 : Ut[xt],
                  xt,
                  It,
                  Z,
                ) && (ft[xt] = vt[xt]);
              }),
              ft
            );
          },
          c = function J(Y, It) {
            if (Y === It) return !0;
            var Z = it.Children.count(Y);
            if (Z !== it.Children.count(It)) return !1;
            if (Z === 0) return !0;
            if (Z === 1)
              return o(
                Array.isArray(Y) ? Y[0] : Y,
                Array.isArray(It) ? It[0] : It,
              );
            for (var vt = 0; vt < Z; vt++) {
              var ft = Y[vt],
                xt = It[vt];
              if (Array.isArray(ft) || Array.isArray(xt)) {
                if (!J(ft, xt)) return !1;
              } else if (!o(ft, xt)) return !1;
            }
            return !0;
          },
          o = function (Y, It) {
            if (q()(Y) && q()(It)) return !0;
            if (!q()(Y) && !q()(It)) {
              var Z = Y.props || {},
                vt = Z.children,
                ft = Kt(Z, Pt),
                xt = It.props || {},
                Ut = xt.children,
                Vt = Kt(xt, L);
              return vt && Ut
                ? (0, V.b)(ft, Vt) && c(vt, Ut)
                : !vt && !Ut
                  ? (0, V.b)(ft, Vt)
                  : !1;
            }
            return !1;
          },
          p = function (Y, It) {
            var Z = [],
              vt = {};
            return (
              lt(Y).forEach(function (ft, xt) {
                if (P(ft)) Z.push(ft);
                else if (ft) {
                  var Ut = g(ft.type),
                    Vt = It[Ut] || {},
                    ct = Vt.handler,
                    l = Vt.once;
                  if (ct && (!l || !vt[Ut])) {
                    var h = ct(ft, Ut, xt);
                    Z.push(h), (vt[Ut] = !0);
                  }
                }
              }),
              Z
            );
          },
          b = function (Y) {
            var It = Y && Y.type;
            return It && Mt[It] ? Mt[It] : null;
          },
          R = function (Y, It) {
            return lt(It).indexOf(Y);
          };
      },
      80103: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { b: () => s });
        function s(rt, K) {
          for (var q in rt)
            if (
              {}.hasOwnProperty.call(rt, q) &&
              (!{}.hasOwnProperty.call(K, q) || rt[q] !== K[q])
            )
              return !1;
          for (var U in K)
            if ({}.hasOwnProperty.call(K, U) && !{}.hasOwnProperty.call(rt, U))
              return !1;
          return !0;
        }
      },
      11766: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { g: () => at });
        var s = n(75620),
          rt = n(24633),
          K = n(93563);
        function q(it) {
          "@babel/helpers - typeof";
          return (
            (q =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (F) {
                    return typeof F;
                  }
                : function (F) {
                    return F &&
                      typeof Symbol == "function" &&
                      F.constructor === Symbol &&
                      F !== Symbol.prototype
                      ? "symbol"
                      : typeof F;
                  }),
            q(it)
          );
        }
        function U(it, F) {
          var dt = Object.keys(it);
          if (Object.getOwnPropertySymbols) {
            var V = Object.getOwnPropertySymbols(it);
            F &&
              (V = V.filter(function (pt) {
                return Object.getOwnPropertyDescriptor(it, pt).enumerable;
              })),
              dt.push.apply(dt, V);
          }
          return dt;
        }
        function Q(it) {
          for (var F = 1; F < arguments.length; F++) {
            var dt = arguments[F] != null ? arguments[F] : {};
            F % 2
              ? U(Object(dt), !0).forEach(function (V) {
                  z(it, V, dt[V]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    it,
                    Object.getOwnPropertyDescriptors(dt),
                  )
                : U(Object(dt)).forEach(function (V) {
                    Object.defineProperty(
                      it,
                      V,
                      Object.getOwnPropertyDescriptor(dt, V),
                    );
                  });
          }
          return it;
        }
        function z(it, F, dt) {
          return (
            (F = et(F)),
            F in it
              ? Object.defineProperty(it, F, {
                  value: dt,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (it[F] = dt),
            it
          );
        }
        function et(it) {
          var F = ot(it, "string");
          return q(F) == "symbol" ? F : F + "";
        }
        function ot(it, F) {
          if (q(it) != "object" || !it) return it;
          var dt = it[Symbol.toPrimitive];
          if (dt !== void 0) {
            var V = dt.call(it, F || "default");
            if (q(V) != "object") return V;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (F === "string" ? String : Number)(it);
        }
        var at = function (F) {
          var dt = F.children,
            V = F.formattedGraphicalItems,
            pt = F.legendWidth,
            Pt = F.legendContent,
            L = (0, K.BU)(dt, s.s);
          if (!L) return null;
          var Kt = s.s.defaultProps,
            Dt = Kt !== void 0 ? Q(Q({}, Kt), L.props) : {},
            wt;
          return (
            L.props && L.props.payload
              ? (wt = L.props && L.props.payload)
              : Pt === "children"
                ? (wt = (V || []).reduce(function (Mt, $) {
                    var w = $.item,
                      M = $.props,
                      g = M.sectors || M.data || [];
                    return Mt.concat(
                      g.map(function (v) {
                        return {
                          type: L.props.iconType || w.props.legendType,
                          value: v.name,
                          color: v.fill,
                          payload: v,
                        };
                      }),
                    );
                  }, []))
                : (wt = (V || []).map(function (Mt) {
                    var $ = Mt.item,
                      w = $.type.defaultProps,
                      M = w !== void 0 ? Q(Q({}, w), $.props) : {},
                      g = M.dataKey,
                      v = M.name,
                      ut = M.legendType,
                      lt = M.hide;
                    return {
                      inactive: lt,
                      dataKey: g,
                      type: Dt.iconType || ut || "square",
                      color: (0, rt.Ps)($),
                      value: v || g,
                      payload: M,
                    };
                  })),
            Q(
              Q(Q({}, Dt), s.s.getWithHeight(L, pt)),
              {},
              { payload: wt, item: L },
            )
          );
        };
      },
      43149: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { s: () => U });
        var s = n(17744),
          rt = n.n(s),
          K = n(3316),
          q = n.n(K);
        function U(Q, z, et) {
          return z === !0 ? rt()(Q, et) : q()(z) ? rt()(Q, z) : Q;
        }
      },
      43998: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, {
          QQ: () => Q,
          VU: () => et,
          XC: () => F,
          _U: () => at,
          j2: () => ot,
        });
        var s = n(90626),
          rt = n(97827),
          K = n.n(rt);
        function q(dt) {
          "@babel/helpers - typeof";
          return (
            (q =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (V) {
                    return typeof V;
                  }
                : function (V) {
                    return V &&
                      typeof Symbol == "function" &&
                      V.constructor === Symbol &&
                      V !== Symbol.prototype
                      ? "symbol"
                      : typeof V;
                  }),
            q(dt)
          );
        }
        var U = ["viewBox", "children"],
          Q = [
            "aria-activedescendant",
            "aria-atomic",
            "aria-autocomplete",
            "aria-busy",
            "aria-checked",
            "aria-colcount",
            "aria-colindex",
            "aria-colspan",
            "aria-controls",
            "aria-current",
            "aria-describedby",
            "aria-details",
            "aria-disabled",
            "aria-errormessage",
            "aria-expanded",
            "aria-flowto",
            "aria-haspopup",
            "aria-hidden",
            "aria-invalid",
            "aria-keyshortcuts",
            "aria-label",
            "aria-labelledby",
            "aria-level",
            "aria-live",
            "aria-modal",
            "aria-multiline",
            "aria-multiselectable",
            "aria-orientation",
            "aria-owns",
            "aria-placeholder",
            "aria-posinset",
            "aria-pressed",
            "aria-readonly",
            "aria-relevant",
            "aria-required",
            "aria-roledescription",
            "aria-rowcount",
            "aria-rowindex",
            "aria-rowspan",
            "aria-selected",
            "aria-setsize",
            "aria-sort",
            "aria-valuemax",
            "aria-valuemin",
            "aria-valuenow",
            "aria-valuetext",
            "className",
            "color",
            "height",
            "id",
            "lang",
            "max",
            "media",
            "method",
            "min",
            "name",
            "style",
            "target",
            "width",
            "role",
            "tabIndex",
            "accentHeight",
            "accumulate",
            "additive",
            "alignmentBaseline",
            "allowReorder",
            "alphabetic",
            "amplitude",
            "arabicForm",
            "ascent",
            "attributeName",
            "attributeType",
            "autoReverse",
            "azimuth",
            "baseFrequency",
            "baselineShift",
            "baseProfile",
            "bbox",
            "begin",
            "bias",
            "by",
            "calcMode",
            "capHeight",
            "clip",
            "clipPath",
            "clipPathUnits",
            "clipRule",
            "colorInterpolation",
            "colorInterpolationFilters",
            "colorProfile",
            "colorRendering",
            "contentScriptType",
            "contentStyleType",
            "cursor",
            "cx",
            "cy",
            "d",
            "decelerate",
            "descent",
            "diffuseConstant",
            "direction",
            "display",
            "divisor",
            "dominantBaseline",
            "dur",
            "dx",
            "dy",
            "edgeMode",
            "elevation",
            "enableBackground",
            "end",
            "exponent",
            "externalResourcesRequired",
            "fill",
            "fillOpacity",
            "fillRule",
            "filter",
            "filterRes",
            "filterUnits",
            "floodColor",
            "floodOpacity",
            "focusable",
            "fontFamily",
            "fontSize",
            "fontSizeAdjust",
            "fontStretch",
            "fontStyle",
            "fontVariant",
            "fontWeight",
            "format",
            "from",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyphName",
            "glyphOrientationHorizontal",
            "glyphOrientationVertical",
            "glyphRef",
            "gradientTransform",
            "gradientUnits",
            "hanging",
            "horizAdvX",
            "horizOriginX",
            "href",
            "ideographic",
            "imageRendering",
            "in2",
            "in",
            "intercept",
            "k1",
            "k2",
            "k3",
            "k4",
            "k",
            "kernelMatrix",
            "kernelUnitLength",
            "kerning",
            "keyPoints",
            "keySplines",
            "keyTimes",
            "lengthAdjust",
            "letterSpacing",
            "lightingColor",
            "limitingConeAngle",
            "local",
            "markerEnd",
            "markerHeight",
            "markerMid",
            "markerStart",
            "markerUnits",
            "markerWidth",
            "mask",
            "maskContentUnits",
            "maskUnits",
            "mathematical",
            "mode",
            "numOctaves",
            "offset",
            "opacity",
            "operator",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "overlinePosition",
            "overlineThickness",
            "paintOrder",
            "panose1",
            "pathLength",
            "patternContentUnits",
            "patternTransform",
            "patternUnits",
            "pointerEvents",
            "pointsAtX",
            "pointsAtY",
            "pointsAtZ",
            "preserveAlpha",
            "preserveAspectRatio",
            "primitiveUnits",
            "r",
            "radius",
            "refX",
            "refY",
            "renderingIntent",
            "repeatCount",
            "repeatDur",
            "requiredExtensions",
            "requiredFeatures",
            "restart",
            "result",
            "rotate",
            "rx",
            "ry",
            "seed",
            "shapeRendering",
            "slope",
            "spacing",
            "specularConstant",
            "specularExponent",
            "speed",
            "spreadMethod",
            "startOffset",
            "stdDeviation",
            "stemh",
            "stemv",
            "stitchTiles",
            "stopColor",
            "stopOpacity",
            "strikethroughPosition",
            "strikethroughThickness",
            "string",
            "stroke",
            "strokeDasharray",
            "strokeDashoffset",
            "strokeLinecap",
            "strokeLinejoin",
            "strokeMiterlimit",
            "strokeOpacity",
            "strokeWidth",
            "surfaceScale",
            "systemLanguage",
            "tableValues",
            "targetX",
            "targetY",
            "textAnchor",
            "textDecoration",
            "textLength",
            "textRendering",
            "to",
            "transform",
            "u1",
            "u2",
            "underlinePosition",
            "underlineThickness",
            "unicode",
            "unicodeBidi",
            "unicodeRange",
            "unitsPerEm",
            "vAlphabetic",
            "values",
            "vectorEffect",
            "version",
            "vertAdvY",
            "vertOriginX",
            "vertOriginY",
            "vHanging",
            "vIdeographic",
            "viewTarget",
            "visibility",
            "vMathematical",
            "widths",
            "wordSpacing",
            "writingMode",
            "x1",
            "x2",
            "x",
            "xChannelSelector",
            "xHeight",
            "xlinkActuate",
            "xlinkArcrole",
            "xlinkHref",
            "xlinkRole",
            "xlinkShow",
            "xlinkTitle",
            "xlinkType",
            "xmlBase",
            "xmlLang",
            "xmlns",
            "xmlnsXlink",
            "xmlSpace",
            "y1",
            "y2",
            "y",
            "yChannelSelector",
            "z",
            "zoomAndPan",
            "ref",
            "key",
            "angle",
          ],
          z = ["points", "pathLength"],
          et = { svg: U, polygon: z, polyline: z },
          ot = [
            "dangerouslySetInnerHTML",
            "onCopy",
            "onCopyCapture",
            "onCut",
            "onCutCapture",
            "onPaste",
            "onPasteCapture",
            "onCompositionEnd",
            "onCompositionEndCapture",
            "onCompositionStart",
            "onCompositionStartCapture",
            "onCompositionUpdate",
            "onCompositionUpdateCapture",
            "onFocus",
            "onFocusCapture",
            "onBlur",
            "onBlurCapture",
            "onChange",
            "onChangeCapture",
            "onBeforeInput",
            "onBeforeInputCapture",
            "onInput",
            "onInputCapture",
            "onReset",
            "onResetCapture",
            "onSubmit",
            "onSubmitCapture",
            "onInvalid",
            "onInvalidCapture",
            "onLoad",
            "onLoadCapture",
            "onError",
            "onErrorCapture",
            "onKeyDown",
            "onKeyDownCapture",
            "onKeyPress",
            "onKeyPressCapture",
            "onKeyUp",
            "onKeyUpCapture",
            "onAbort",
            "onAbortCapture",
            "onCanPlay",
            "onCanPlayCapture",
            "onCanPlayThrough",
            "onCanPlayThroughCapture",
            "onDurationChange",
            "onDurationChangeCapture",
            "onEmptied",
            "onEmptiedCapture",
            "onEncrypted",
            "onEncryptedCapture",
            "onEnded",
            "onEndedCapture",
            "onLoadedData",
            "onLoadedDataCapture",
            "onLoadedMetadata",
            "onLoadedMetadataCapture",
            "onLoadStart",
            "onLoadStartCapture",
            "onPause",
            "onPauseCapture",
            "onPlay",
            "onPlayCapture",
            "onPlaying",
            "onPlayingCapture",
            "onProgress",
            "onProgressCapture",
            "onRateChange",
            "onRateChangeCapture",
            "onSeeked",
            "onSeekedCapture",
            "onSeeking",
            "onSeekingCapture",
            "onStalled",
            "onStalledCapture",
            "onSuspend",
            "onSuspendCapture",
            "onTimeUpdate",
            "onTimeUpdateCapture",
            "onVolumeChange",
            "onVolumeChangeCapture",
            "onWaiting",
            "onWaitingCapture",
            "onAuxClick",
            "onAuxClickCapture",
            "onClick",
            "onClickCapture",
            "onContextMenu",
            "onContextMenuCapture",
            "onDoubleClick",
            "onDoubleClickCapture",
            "onDrag",
            "onDragCapture",
            "onDragEnd",
            "onDragEndCapture",
            "onDragEnter",
            "onDragEnterCapture",
            "onDragExit",
            "onDragExitCapture",
            "onDragLeave",
            "onDragLeaveCapture",
            "onDragOver",
            "onDragOverCapture",
            "onDragStart",
            "onDragStartCapture",
            "onDrop",
            "onDropCapture",
            "onMouseDown",
            "onMouseDownCapture",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseMove",
            "onMouseMoveCapture",
            "onMouseOut",
            "onMouseOutCapture",
            "onMouseOver",
            "onMouseOverCapture",
            "onMouseUp",
            "onMouseUpCapture",
            "onSelect",
            "onSelectCapture",
            "onTouchCancel",
            "onTouchCancelCapture",
            "onTouchEnd",
            "onTouchEndCapture",
            "onTouchMove",
            "onTouchMoveCapture",
            "onTouchStart",
            "onTouchStartCapture",
            "onPointerDown",
            "onPointerDownCapture",
            "onPointerMove",
            "onPointerMoveCapture",
            "onPointerUp",
            "onPointerUpCapture",
            "onPointerCancel",
            "onPointerCancelCapture",
            "onPointerEnter",
            "onPointerEnterCapture",
            "onPointerLeave",
            "onPointerLeaveCapture",
            "onPointerOver",
            "onPointerOverCapture",
            "onPointerOut",
            "onPointerOutCapture",
            "onGotPointerCapture",
            "onGotPointerCaptureCapture",
            "onLostPointerCapture",
            "onLostPointerCaptureCapture",
            "onScroll",
            "onScrollCapture",
            "onWheel",
            "onWheelCapture",
            "onAnimationStart",
            "onAnimationStartCapture",
            "onAnimationEnd",
            "onAnimationEndCapture",
            "onAnimationIteration",
            "onAnimationIterationCapture",
            "onTransitionEnd",
            "onTransitionEndCapture",
          ],
          at = function (V, pt) {
            if (!V || typeof V == "function" || typeof V == "boolean")
              return null;
            var Pt = V;
            if (((0, s.isValidElement)(V) && (Pt = V.props), !K()(Pt)))
              return null;
            var L = {};
            return (
              Object.keys(Pt).forEach(function (Kt) {
                ot.includes(Kt) &&
                  (L[Kt] =
                    pt ||
                    function (Dt) {
                      return Pt[Kt](Pt, Dt);
                    });
              }),
              L
            );
          },
          it = function (V, pt, Pt) {
            return function (L) {
              return V(pt, Pt, L), null;
            };
          },
          F = function (V, pt, Pt) {
            if (!K()(V) || q(V) !== "object") return null;
            var L = null;
            return (
              Object.keys(V).forEach(function (Kt) {
                var Dt = V[Kt];
                ot.includes(Kt) &&
                  typeof Dt == "function" &&
                  (L || (L = {}), (L[Kt] = it(Dt, pt, Pt)));
              }),
              L
            );
          };
      },
      14469: function (Rt, Ct, n) {
        var s; /*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE */
        (function (rt) {
          "use strict";
          var K = 1e9,
            q = {
              precision: 20,
              rounding: 4,
              toExpNeg: -7,
              toExpPos: 21,
              LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
            },
            U = !0,
            Q = "[DecimalError] ",
            z = Q + "Invalid argument: ",
            et = Q + "Exponent out of range: ",
            ot = Math.floor,
            at = Math.pow,
            it = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            F,
            dt = 1e7,
            V = 7,
            pt = 9007199254740991,
            Pt = ot(pt / V),
            L = {};
          (L.absoluteValue = L.abs =
            function () {
              var P = new this.constructor(this);
              return P.s && (P.s = 1), P;
            }),
            (L.comparedTo = L.cmp =
              function (P) {
                var m,
                  S,
                  _,
                  E,
                  c = this;
                if (((P = new c.constructor(P)), c.s !== P.s))
                  return c.s || -P.s;
                if (c.e !== P.e) return (c.e > P.e) ^ (c.s < 0) ? 1 : -1;
                for (
                  _ = c.d.length, E = P.d.length, m = 0, S = _ < E ? _ : E;
                  m < S;
                  ++m
                )
                  if (c.d[m] !== P.d[m])
                    return (c.d[m] > P.d[m]) ^ (c.s < 0) ? 1 : -1;
                return _ === E ? 0 : (_ > E) ^ (c.s < 0) ? 1 : -1;
              }),
            (L.decimalPlaces = L.dp =
              function () {
                var P = this,
                  m = P.d.length - 1,
                  S = (m - P.e) * V;
                if (((m = P.d[m]), m)) for (; m % 10 == 0; m /= 10) S--;
                return S < 0 ? 0 : S;
              }),
            (L.dividedBy = L.div =
              function (P) {
                return Mt(this, new this.constructor(P));
              }),
            (L.dividedToIntegerBy = L.idiv =
              function (P) {
                var m = this,
                  S = m.constructor;
                return lt(Mt(m, new S(P), 0, 1), S.precision);
              }),
            (L.equals = L.eq =
              function (P) {
                return !this.cmp(P);
              }),
            (L.exponent = function () {
              return w(this);
            }),
            (L.greaterThan = L.gt =
              function (P) {
                return this.cmp(P) > 0;
              }),
            (L.greaterThanOrEqualTo = L.gte =
              function (P) {
                return this.cmp(P) >= 0;
              }),
            (L.isInteger = L.isint =
              function () {
                return this.e > this.d.length - 2;
              }),
            (L.isNegative = L.isneg =
              function () {
                return this.s < 0;
              }),
            (L.isPositive = L.ispos =
              function () {
                return this.s > 0;
              }),
            (L.isZero = function () {
              return this.s === 0;
            }),
            (L.lessThan = L.lt =
              function (P) {
                return this.cmp(P) < 0;
              }),
            (L.lessThanOrEqualTo = L.lte =
              function (P) {
                return this.cmp(P) < 1;
              }),
            (L.logarithm = L.log =
              function (P) {
                var m,
                  S = this,
                  _ = S.constructor,
                  E = _.precision,
                  c = E + 5;
                if (P === void 0) P = new _(10);
                else if (((P = new _(P)), P.s < 1 || P.eq(F)))
                  throw Error(Q + "NaN");
                if (S.s < 1) throw Error(Q + (S.s ? "NaN" : "-Infinity"));
                return S.eq(F)
                  ? new _(0)
                  : ((U = !1),
                    (m = Mt(v(S, c), v(P, c), c)),
                    (U = !0),
                    lt(m, E));
              }),
            (L.minus = L.sub =
              function (P) {
                var m = this;
                return (
                  (P = new m.constructor(P)),
                  m.s == P.s ? Nt(m, P) : Kt(m, ((P.s = -P.s), P))
                );
              }),
            (L.modulo = L.mod =
              function (P) {
                var m,
                  S = this,
                  _ = S.constructor,
                  E = _.precision;
                if (((P = new _(P)), !P.s)) throw Error(Q + "NaN");
                return S.s
                  ? ((U = !1),
                    (m = Mt(S, P, 0, 1).times(P)),
                    (U = !0),
                    S.minus(m))
                  : lt(new _(S), E);
              }),
            (L.naturalExponential = L.exp =
              function () {
                return $(this);
              }),
            (L.naturalLogarithm = L.ln =
              function () {
                return v(this);
              }),
            (L.negated = L.neg =
              function () {
                var P = new this.constructor(this);
                return (P.s = -P.s || 0), P;
              }),
            (L.plus = L.add =
              function (P) {
                var m = this;
                return (
                  (P = new m.constructor(P)),
                  m.s == P.s ? Kt(m, P) : Nt(m, ((P.s = -P.s), P))
                );
              }),
            (L.precision = L.sd =
              function (P) {
                var m,
                  S,
                  _,
                  E = this;
                if (P !== void 0 && P !== !!P && P !== 1 && P !== 0)
                  throw Error(z + P);
                if (
                  ((m = w(E) + 1),
                  (_ = E.d.length - 1),
                  (S = _ * V + 1),
                  (_ = E.d[_]),
                  _)
                ) {
                  for (; _ % 10 == 0; _ /= 10) S--;
                  for (_ = E.d[0]; _ >= 10; _ /= 10) S++;
                }
                return P && m > S ? m : S;
              }),
            (L.squareRoot = L.sqrt =
              function () {
                var P,
                  m,
                  S,
                  _,
                  E,
                  c,
                  o,
                  p = this,
                  b = p.constructor;
                if (p.s < 1) {
                  if (!p.s) return new b(0);
                  throw Error(Q + "NaN");
                }
                for (
                  P = w(p),
                    U = !1,
                    E = Math.sqrt(+p),
                    E == 0 || E == 1 / 0
                      ? ((m = wt(p.d)),
                        (m.length + P) % 2 == 0 && (m += "0"),
                        (E = Math.sqrt(m)),
                        (P = ot((P + 1) / 2) - (P < 0 || P % 2)),
                        E == 1 / 0
                          ? (m = "5e" + P)
                          : ((m = E.toExponential()),
                            (m = m.slice(0, m.indexOf("e") + 1) + P)),
                        (_ = new b(m)))
                      : (_ = new b(E.toString())),
                    S = b.precision,
                    E = o = S + 3;
                  ;
                )
                  if (
                    ((c = _),
                    (_ = c.plus(Mt(p, c, o + 2)).times(0.5)),
                    wt(c.d).slice(0, o) === (m = wt(_.d)).slice(0, o))
                  ) {
                    if (((m = m.slice(o - 3, o + 1)), E == o && m == "4999")) {
                      if ((lt(c, S + 1, 0), c.times(c).eq(p))) {
                        _ = c;
                        break;
                      }
                    } else if (m != "9999") break;
                    o += 4;
                  }
                return (U = !0), lt(_, S);
              }),
            (L.times = L.mul =
              function (P) {
                var m,
                  S,
                  _,
                  E,
                  c,
                  o,
                  p,
                  b,
                  R,
                  J = this,
                  Y = J.constructor,
                  It = J.d,
                  Z = (P = new Y(P)).d;
                if (!J.s || !P.s) return new Y(0);
                for (
                  P.s *= J.s,
                    S = J.e + P.e,
                    b = It.length,
                    R = Z.length,
                    b < R &&
                      ((c = It), (It = Z), (Z = c), (o = b), (b = R), (R = o)),
                    c = [],
                    o = b + R,
                    _ = o;
                  _--;
                )
                  c.push(0);
                for (_ = R; --_ >= 0; ) {
                  for (m = 0, E = b + _; E > _; )
                    (p = c[E] + Z[_] * It[E - _ - 1] + m),
                      (c[E--] = (p % dt) | 0),
                      (m = (p / dt) | 0);
                  c[E] = ((c[E] + m) % dt) | 0;
                }
                for (; !c[--o]; ) c.pop();
                return (
                  m ? ++S : c.shift(),
                  (P.d = c),
                  (P.e = S),
                  U ? lt(P, Y.precision) : P
                );
              }),
            (L.toDecimalPlaces = L.todp =
              function (P, m) {
                var S = this,
                  _ = S.constructor;
                return (
                  (S = new _(S)),
                  P === void 0
                    ? S
                    : (Dt(P, 0, K),
                      m === void 0 ? (m = _.rounding) : Dt(m, 0, 8),
                      lt(S, P + w(S) + 1, m))
                );
              }),
            (L.toExponential = function (P, m) {
              var S,
                _ = this,
                E = _.constructor;
              return (
                P === void 0
                  ? (S = C(_, !0))
                  : (Dt(P, 0, K),
                    m === void 0 ? (m = E.rounding) : Dt(m, 0, 8),
                    (_ = lt(new E(_), P + 1, m)),
                    (S = C(_, !0, P + 1))),
                S
              );
            }),
            (L.toFixed = function (P, m) {
              var S,
                _,
                E = this,
                c = E.constructor;
              return P === void 0
                ? C(E)
                : (Dt(P, 0, K),
                  m === void 0 ? (m = c.rounding) : Dt(m, 0, 8),
                  (_ = lt(new c(E), P + w(E) + 1, m)),
                  (S = C(_.abs(), !1, P + w(_) + 1)),
                  E.isneg() && !E.isZero() ? "-" + S : S);
            }),
            (L.toInteger = L.toint =
              function () {
                var P = this,
                  m = P.constructor;
                return lt(new m(P), w(P) + 1, m.rounding);
              }),
            (L.toNumber = function () {
              return +this;
            }),
            (L.toPower = L.pow =
              function (P) {
                var m,
                  S,
                  _,
                  E,
                  c,
                  o,
                  p = this,
                  b = p.constructor,
                  R = 12,
                  J = +(P = new b(P));
                if (!P.s) return new b(F);
                if (((p = new b(p)), !p.s)) {
                  if (P.s < 1) throw Error(Q + "Infinity");
                  return p;
                }
                if (p.eq(F)) return p;
                if (((_ = b.precision), P.eq(F))) return lt(p, _);
                if (
                  ((m = P.e), (S = P.d.length - 1), (o = m >= S), (c = p.s), o)
                ) {
                  if ((S = J < 0 ? -J : J) <= pt) {
                    for (
                      E = new b(F), m = Math.ceil(_ / V + 4), U = !1;
                      S % 2 && ((E = E.times(p)), B(E.d, m)),
                        (S = ot(S / 2)),
                        S !== 0;
                    )
                      (p = p.times(p)), B(p.d, m);
                    return (U = !0), P.s < 0 ? new b(F).div(E) : lt(E, _);
                  }
                } else if (c < 0) throw Error(Q + "NaN");
                return (
                  (c = c < 0 && P.d[Math.max(m, S)] & 1 ? -1 : 1),
                  (p.s = 1),
                  (U = !1),
                  (E = P.times(v(p, _ + R))),
                  (U = !0),
                  (E = $(E)),
                  (E.s = c),
                  E
                );
              }),
            (L.toPrecision = function (P, m) {
              var S,
                _,
                E = this,
                c = E.constructor;
              return (
                P === void 0
                  ? ((S = w(E)), (_ = C(E, S <= c.toExpNeg || S >= c.toExpPos)))
                  : (Dt(P, 1, K),
                    m === void 0 ? (m = c.rounding) : Dt(m, 0, 8),
                    (E = lt(new c(E), P, m)),
                    (S = w(E)),
                    (_ = C(E, P <= S || S <= c.toExpNeg, P))),
                _
              );
            }),
            (L.toSignificantDigits = L.tosd =
              function (P, m) {
                var S = this,
                  _ = S.constructor;
                return (
                  P === void 0
                    ? ((P = _.precision), (m = _.rounding))
                    : (Dt(P, 1, K),
                      m === void 0 ? (m = _.rounding) : Dt(m, 0, 8)),
                  lt(new _(S), P, m)
                );
              }),
            (L.toString =
              L.valueOf =
              L.val =
              L.toJSON =
                function () {
                  var P = this,
                    m = w(P),
                    S = P.constructor;
                  return C(P, m <= S.toExpNeg || m >= S.toExpPos);
                });
          function Kt(P, m) {
            var S,
              _,
              E,
              c,
              o,
              p,
              b,
              R,
              J = P.constructor,
              Y = J.precision;
            if (!P.s || !m.s) return m.s || (m = new J(P)), U ? lt(m, Y) : m;
            if (
              ((b = P.d),
              (R = m.d),
              (o = P.e),
              (E = m.e),
              (b = b.slice()),
              (c = o - E),
              c)
            ) {
              for (
                c < 0
                  ? ((_ = b), (c = -c), (p = R.length))
                  : ((_ = R), (E = o), (p = b.length)),
                  o = Math.ceil(Y / V),
                  p = o > p ? o + 1 : p + 1,
                  c > p && ((c = p), (_.length = 1)),
                  _.reverse();
                c--;
              )
                _.push(0);
              _.reverse();
            }
            for (
              p = b.length,
                c = R.length,
                p - c < 0 && ((c = p), (_ = R), (R = b), (b = _)),
                S = 0;
              c;
            )
              (S = ((b[--c] = b[c] + R[c] + S) / dt) | 0), (b[c] %= dt);
            for (S && (b.unshift(S), ++E), p = b.length; b[--p] == 0; ) b.pop();
            return (m.d = b), (m.e = E), U ? lt(m, Y) : m;
          }
          function Dt(P, m, S) {
            if (P !== ~~P || P < m || P > S) throw Error(z + P);
          }
          function wt(P) {
            var m,
              S,
              _,
              E = P.length - 1,
              c = "",
              o = P[0];
            if (E > 0) {
              for (c += o, m = 1; m < E; m++)
                (_ = P[m] + ""), (S = V - _.length), S && (c += g(S)), (c += _);
              (o = P[m]), (_ = o + ""), (S = V - _.length), S && (c += g(S));
            } else if (o === 0) return "0";
            for (; o % 10 === 0; ) o /= 10;
            return c + o;
          }
          var Mt = (function () {
            function P(_, E) {
              var c,
                o = 0,
                p = _.length;
              for (_ = _.slice(); p--; )
                (c = _[p] * E + o), (_[p] = (c % dt) | 0), (o = (c / dt) | 0);
              return o && _.unshift(o), _;
            }
            function m(_, E, c, o) {
              var p, b;
              if (c != o) b = c > o ? 1 : -1;
              else
                for (p = b = 0; p < c; p++)
                  if (_[p] != E[p]) {
                    b = _[p] > E[p] ? 1 : -1;
                    break;
                  }
              return b;
            }
            function S(_, E, c) {
              for (var o = 0; c--; )
                (_[c] -= o),
                  (o = _[c] < E[c] ? 1 : 0),
                  (_[c] = o * dt + _[c] - E[c]);
              for (; !_[0] && _.length > 1; ) _.shift();
            }
            return function (_, E, c, o) {
              var p,
                b,
                R,
                J,
                Y,
                It,
                Z,
                vt,
                ft,
                xt,
                Ut,
                Vt,
                ct,
                l,
                h,
                O,
                f,
                D,
                tt = _.constructor,
                Et = _.s == E.s ? 1 : -1,
                Wt = _.d,
                Ft = E.d;
              if (!_.s) return new tt(_);
              if (!E.s) throw Error(Q + "Division by zero");
              for (
                b = _.e - E.e,
                  f = Ft.length,
                  h = Wt.length,
                  Z = new tt(Et),
                  vt = Z.d = [],
                  R = 0;
                Ft[R] == (Wt[R] || 0);
              )
                ++R;
              if (
                (Ft[R] > (Wt[R] || 0) && --b,
                c == null
                  ? (Vt = c = tt.precision)
                  : o
                    ? (Vt = c + (w(_) - w(E)) + 1)
                    : (Vt = c),
                Vt < 0)
              )
                return new tt(0);
              if (((Vt = (Vt / V + 2) | 0), (R = 0), f == 1))
                for (J = 0, Ft = Ft[0], Vt++; (R < h || J) && Vt--; R++)
                  (ct = J * dt + (Wt[R] || 0)),
                    (vt[R] = (ct / Ft) | 0),
                    (J = (ct % Ft) | 0);
              else {
                for (
                  J = (dt / (Ft[0] + 1)) | 0,
                    J > 1 &&
                      ((Ft = P(Ft, J)),
                      (Wt = P(Wt, J)),
                      (f = Ft.length),
                      (h = Wt.length)),
                    l = f,
                    ft = Wt.slice(0, f),
                    xt = ft.length;
                  xt < f;
                )
                  ft[xt++] = 0;
                (D = Ft.slice()),
                  D.unshift(0),
                  (O = Ft[0]),
                  Ft[1] >= dt / 2 && ++O;
                do
                  (J = 0),
                    (p = m(Ft, ft, f, xt)),
                    p < 0
                      ? ((Ut = ft[0]),
                        f != xt && (Ut = Ut * dt + (ft[1] || 0)),
                        (J = (Ut / O) | 0),
                        J > 1
                          ? (J >= dt && (J = dt - 1),
                            (Y = P(Ft, J)),
                            (It = Y.length),
                            (xt = ft.length),
                            (p = m(Y, ft, It, xt)),
                            p == 1 && (J--, S(Y, f < It ? D : Ft, It)))
                          : (J == 0 && (p = J = 1), (Y = Ft.slice())),
                        (It = Y.length),
                        It < xt && Y.unshift(0),
                        S(ft, Y, xt),
                        p == -1 &&
                          ((xt = ft.length),
                          (p = m(Ft, ft, f, xt)),
                          p < 1 && (J++, S(ft, f < xt ? D : Ft, xt))),
                        (xt = ft.length))
                      : p === 0 && (J++, (ft = [0])),
                    (vt[R++] = J),
                    p && ft[0]
                      ? (ft[xt++] = Wt[l] || 0)
                      : ((ft = [Wt[l]]), (xt = 1));
                while ((l++ < h || ft[0] !== void 0) && Vt--);
              }
              return (
                vt[0] || vt.shift(), (Z.e = b), lt(Z, o ? c + w(Z) + 1 : c)
              );
            };
          })();
          function $(P, m) {
            var S,
              _,
              E,
              c,
              o,
              p,
              b = 0,
              R = 0,
              J = P.constructor,
              Y = J.precision;
            if (w(P) > 16) throw Error(et + w(P));
            if (!P.s) return new J(F);
            for (
              m == null ? ((U = !1), (p = Y)) : (p = m), o = new J(0.03125);
              P.abs().gte(0.1);
            )
              (P = P.times(o)), (R += 5);
            for (
              _ = ((Math.log(at(2, R)) / Math.LN10) * 2 + 5) | 0,
                p += _,
                S = E = c = new J(F),
                J.precision = p;
              ;
            ) {
              if (
                ((E = lt(E.times(P), p)),
                (S = S.times(++b)),
                (o = c.plus(Mt(E, S, p))),
                wt(o.d).slice(0, p) === wt(c.d).slice(0, p))
              ) {
                for (; R--; ) c = lt(c.times(c), p);
                return (J.precision = Y), m == null ? ((U = !0), lt(c, Y)) : c;
              }
              c = o;
            }
          }
          function w(P) {
            for (var m = P.e * V, S = P.d[0]; S >= 10; S /= 10) m++;
            return m;
          }
          function M(P, m, S) {
            if (m > P.LN10.sd())
              throw (
                ((U = !0),
                S && (P.precision = S),
                Error(Q + "LN10 precision limit exceeded"))
              );
            return lt(new P(P.LN10), m);
          }
          function g(P) {
            for (var m = ""; P--; ) m += "0";
            return m;
          }
          function v(P, m) {
            var S,
              _,
              E,
              c,
              o,
              p,
              b,
              R,
              J,
              Y = 1,
              It = 10,
              Z = P,
              vt = Z.d,
              ft = Z.constructor,
              xt = ft.precision;
            if (Z.s < 1) throw Error(Q + (Z.s ? "NaN" : "-Infinity"));
            if (Z.eq(F)) return new ft(0);
            if ((m == null ? ((U = !1), (R = xt)) : (R = m), Z.eq(10)))
              return m == null && (U = !0), M(ft, R);
            if (
              ((R += It),
              (ft.precision = R),
              (S = wt(vt)),
              (_ = S.charAt(0)),
              (c = w(Z)),
              Math.abs(c) < 15e14)
            ) {
              for (; (_ < 7 && _ != 1) || (_ == 1 && S.charAt(1) > 3); )
                (Z = Z.times(P)), (S = wt(Z.d)), (_ = S.charAt(0)), Y++;
              (c = w(Z)),
                _ > 1
                  ? ((Z = new ft("0." + S)), c++)
                  : (Z = new ft(_ + "." + S.slice(1)));
            } else
              return (
                (b = M(ft, R + 2, xt).times(c + "")),
                (Z = v(new ft(_ + "." + S.slice(1)), R - It).plus(b)),
                (ft.precision = xt),
                m == null ? ((U = !0), lt(Z, xt)) : Z
              );
            for (
              p = o = Z = Mt(Z.minus(F), Z.plus(F), R),
                J = lt(Z.times(Z), R),
                E = 3;
              ;
            ) {
              if (
                ((o = lt(o.times(J), R)),
                (b = p.plus(Mt(o, new ft(E), R))),
                wt(b.d).slice(0, R) === wt(p.d).slice(0, R))
              )
                return (
                  (p = p.times(2)),
                  c !== 0 && (p = p.plus(M(ft, R + 2, xt).times(c + ""))),
                  (p = Mt(p, new ft(Y), R)),
                  (ft.precision = xt),
                  m == null ? ((U = !0), lt(p, xt)) : p
                );
              (p = b), (E += 2);
            }
          }
          function ut(P, m) {
            var S, _, E;
            for (
              (S = m.indexOf(".")) > -1 && (m = m.replace(".", "")),
                (_ = m.search(/e/i)) > 0
                  ? (S < 0 && (S = _),
                    (S += +m.slice(_ + 1)),
                    (m = m.substring(0, _)))
                  : S < 0 && (S = m.length),
                _ = 0;
              m.charCodeAt(_) === 48;
            )
              ++_;
            for (E = m.length; m.charCodeAt(E - 1) === 48; ) --E;
            if (((m = m.slice(_, E)), m)) {
              if (
                ((E -= _),
                (S = S - _ - 1),
                (P.e = ot(S / V)),
                (P.d = []),
                (_ = (S + 1) % V),
                S < 0 && (_ += V),
                _ < E)
              ) {
                for (_ && P.d.push(+m.slice(0, _)), E -= V; _ < E; )
                  P.d.push(+m.slice(_, (_ += V)));
                (m = m.slice(_)), (_ = V - m.length);
              } else _ -= E;
              for (; _--; ) m += "0";
              if ((P.d.push(+m), U && (P.e > Pt || P.e < -Pt)))
                throw Error(et + S);
            } else (P.s = 0), (P.e = 0), (P.d = [0]);
            return P;
          }
          function lt(P, m, S) {
            var _,
              E,
              c,
              o,
              p,
              b,
              R,
              J,
              Y = P.d;
            for (o = 1, c = Y[0]; c >= 10; c /= 10) o++;
            if (((_ = m - o), _ < 0)) (_ += V), (E = m), (R = Y[(J = 0)]);
            else {
              if (((J = Math.ceil((_ + 1) / V)), (c = Y.length), J >= c))
                return P;
              for (R = c = Y[J], o = 1; c >= 10; c /= 10) o++;
              (_ %= V), (E = _ - V + o);
            }
            if (
              (S !== void 0 &&
                ((c = at(10, o - E - 1)),
                (p = ((R / c) % 10) | 0),
                (b = m < 0 || Y[J + 1] !== void 0 || R % c),
                (b =
                  S < 4
                    ? (p || b) && (S == 0 || S == (P.s < 0 ? 3 : 2))
                    : p > 5 ||
                      (p == 5 &&
                        (S == 4 ||
                          b ||
                          (S == 6 &&
                            ((_ > 0
                              ? E > 0
                                ? R / at(10, o - E)
                                : 0
                              : Y[J - 1]) %
                              10) &
                              1) ||
                          S == (P.s < 0 ? 8 : 7))))),
              m < 1 || !Y[0])
            )
              return (
                b
                  ? ((c = w(P)),
                    (Y.length = 1),
                    (m = m - c - 1),
                    (Y[0] = at(10, (V - (m % V)) % V)),
                    (P.e = ot(-m / V) || 0))
                  : ((Y.length = 1), (Y[0] = P.e = P.s = 0)),
                P
              );
            if (
              (_ == 0
                ? ((Y.length = J), (c = 1), J--)
                : ((Y.length = J + 1),
                  (c = at(10, V - _)),
                  (Y[J] =
                    E > 0 ? (((R / at(10, o - E)) % at(10, E)) | 0) * c : 0)),
              b)
            )
              for (;;)
                if (J == 0) {
                  (Y[0] += c) == dt && ((Y[0] = 1), ++P.e);
                  break;
                } else {
                  if (((Y[J] += c), Y[J] != dt)) break;
                  (Y[J--] = 0), (c = 1);
                }
            for (_ = Y.length; Y[--_] === 0; ) Y.pop();
            if (U && (P.e > Pt || P.e < -Pt)) throw Error(et + w(P));
            return P;
          }
          function Nt(P, m) {
            var S,
              _,
              E,
              c,
              o,
              p,
              b,
              R,
              J,
              Y,
              It = P.constructor,
              Z = It.precision;
            if (!P.s || !m.s)
              return m.s ? (m.s = -m.s) : (m = new It(P)), U ? lt(m, Z) : m;
            if (
              ((b = P.d),
              (Y = m.d),
              (_ = m.e),
              (R = P.e),
              (b = b.slice()),
              (o = R - _),
              o)
            ) {
              for (
                J = o < 0,
                  J
                    ? ((S = b), (o = -o), (p = Y.length))
                    : ((S = Y), (_ = R), (p = b.length)),
                  E = Math.max(Math.ceil(Z / V), p) + 2,
                  o > E && ((o = E), (S.length = 1)),
                  S.reverse(),
                  E = o;
                E--;
              )
                S.push(0);
              S.reverse();
            } else {
              for (
                E = b.length, p = Y.length, J = E < p, J && (p = E), E = 0;
                E < p;
                E++
              )
                if (b[E] != Y[E]) {
                  J = b[E] < Y[E];
                  break;
                }
              o = 0;
            }
            for (
              J && ((S = b), (b = Y), (Y = S), (m.s = -m.s)),
                p = b.length,
                E = Y.length - p;
              E > 0;
              --E
            )
              b[p++] = 0;
            for (E = Y.length; E > o; ) {
              if (b[--E] < Y[E]) {
                for (c = E; c && b[--c] === 0; ) b[c] = dt - 1;
                --b[c], (b[E] += dt);
              }
              b[E] -= Y[E];
            }
            for (; b[--p] === 0; ) b.pop();
            for (; b[0] === 0; b.shift()) --_;
            return b[0] ? ((m.d = b), (m.e = _), U ? lt(m, Z) : m) : new It(0);
          }
          function C(P, m, S) {
            var _,
              E = w(P),
              c = wt(P.d),
              o = c.length;
            return (
              m
                ? (S && (_ = S - o) > 0
                    ? (c = c.charAt(0) + "." + c.slice(1) + g(_))
                    : o > 1 && (c = c.charAt(0) + "." + c.slice(1)),
                  (c = c + (E < 0 ? "e" : "e+") + E))
                : E < 0
                  ? ((c = "0." + g(-E - 1) + c),
                    S && (_ = S - o) > 0 && (c += g(_)))
                  : E >= o
                    ? ((c += g(E + 1 - o)),
                      S && (_ = S - E - 1) > 0 && (c = c + "." + g(_)))
                    : ((_ = E + 1) < o &&
                        (c = c.slice(0, _) + "." + c.slice(_)),
                      S &&
                        (_ = S - o) > 0 &&
                        (E + 1 === o && (c += "."), (c += g(_)))),
              P.s < 0 ? "-" + c : c
            );
          }
          function B(P, m) {
            if (P.length > m) return (P.length = m), !0;
          }
          function nt(P) {
            var m, S, _;
            function E(c) {
              var o = this;
              if (!(o instanceof E)) return new E(c);
              if (((o.constructor = E), c instanceof E)) {
                (o.s = c.s), (o.e = c.e), (o.d = (c = c.d) ? c.slice() : c);
                return;
              }
              if (typeof c == "number") {
                if (c * 0 !== 0) throw Error(z + c);
                if (c > 0) o.s = 1;
                else if (c < 0) (c = -c), (o.s = -1);
                else {
                  (o.s = 0), (o.e = 0), (o.d = [0]);
                  return;
                }
                if (c === ~~c && c < 1e7) {
                  (o.e = 0), (o.d = [c]);
                  return;
                }
                return ut(o, c.toString());
              } else if (typeof c != "string") throw Error(z + c);
              if (
                (c.charCodeAt(0) === 45
                  ? ((c = c.slice(1)), (o.s = -1))
                  : (o.s = 1),
                it.test(c))
              )
                ut(o, c);
              else throw Error(z + c);
            }
            if (
              ((E.prototype = L),
              (E.ROUND_UP = 0),
              (E.ROUND_DOWN = 1),
              (E.ROUND_CEIL = 2),
              (E.ROUND_FLOOR = 3),
              (E.ROUND_HALF_UP = 4),
              (E.ROUND_HALF_DOWN = 5),
              (E.ROUND_HALF_EVEN = 6),
              (E.ROUND_HALF_CEIL = 7),
              (E.ROUND_HALF_FLOOR = 8),
              (E.clone = nt),
              (E.config = E.set = bt),
              P === void 0 && (P = {}),
              P)
            )
              for (
                _ = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"],
                  m = 0;
                m < _.length;
              )
                P.hasOwnProperty((S = _[m++])) || (P[S] = this[S]);
            return E.config(P), E;
          }
          function bt(P) {
            if (!P || typeof P != "object") throw Error(Q + "Object expected");
            var m,
              S,
              _,
              E = [
                "precision",
                1,
                K,
                "rounding",
                0,
                8,
                "toExpNeg",
                -1 / 0,
                0,
                "toExpPos",
                0,
                1 / 0,
              ];
            for (m = 0; m < E.length; m += 3)
              if ((_ = P[(S = E[m])]) !== void 0)
                if (ot(_) === _ && _ >= E[m + 1] && _ <= E[m + 2]) this[S] = _;
                else throw Error(z + S + ": " + _);
            if ((_ = P[(S = "LN10")]) !== void 0)
              if (_ == Math.LN10) this[S] = new this(_);
              else throw Error(z + S + ": " + _);
            return this;
          }
          (q = nt(q)),
            (q.default = q.Decimal = q),
            (F = new q(1)),
            (s = function () {
              return q;
            }.call(Ct, n, Ct, Rt)),
            s !== void 0 && (Rt.exports = s);
        })(this);
      },
      29570: (Rt) => {
        "use strict";
        var Ct = Object.prototype.hasOwnProperty,
          n = "~";
        function s() {}
        Object.create &&
          ((s.prototype = Object.create(null)), new s().__proto__ || (n = !1));
        function rt(Q, z, et) {
          (this.fn = Q), (this.context = z), (this.once = et || !1);
        }
        function K(Q, z, et, ot, at) {
          if (typeof et != "function")
            throw new TypeError("The listener must be a function");
          var it = new rt(et, ot || Q, at),
            F = n ? n + z : z;
          return (
            Q._events[F]
              ? Q._events[F].fn
                ? (Q._events[F] = [Q._events[F], it])
                : Q._events[F].push(it)
              : ((Q._events[F] = it), Q._eventsCount++),
            Q
          );
        }
        function q(Q, z) {
          --Q._eventsCount === 0 ? (Q._events = new s()) : delete Q._events[z];
        }
        function U() {
          (this._events = new s()), (this._eventsCount = 0);
        }
        (U.prototype.eventNames = function () {
          var z = [],
            et,
            ot;
          if (this._eventsCount === 0) return z;
          for (ot in (et = this._events))
            Ct.call(et, ot) && z.push(n ? ot.slice(1) : ot);
          return Object.getOwnPropertySymbols
            ? z.concat(Object.getOwnPropertySymbols(et))
            : z;
        }),
          (U.prototype.listeners = function (z) {
            var et = n ? n + z : z,
              ot = this._events[et];
            if (!ot) return [];
            if (ot.fn) return [ot.fn];
            for (var at = 0, it = ot.length, F = new Array(it); at < it; at++)
              F[at] = ot[at].fn;
            return F;
          }),
          (U.prototype.listenerCount = function (z) {
            var et = n ? n + z : z,
              ot = this._events[et];
            return ot ? (ot.fn ? 1 : ot.length) : 0;
          }),
          (U.prototype.emit = function (z, et, ot, at, it, F) {
            var dt = n ? n + z : z;
            if (!this._events[dt]) return !1;
            var V = this._events[dt],
              pt = arguments.length,
              Pt,
              L;
            if (V.fn) {
              switch (
                (V.once && this.removeListener(z, V.fn, void 0, !0), pt)
              ) {
                case 1:
                  return V.fn.call(V.context), !0;
                case 2:
                  return V.fn.call(V.context, et), !0;
                case 3:
                  return V.fn.call(V.context, et, ot), !0;
                case 4:
                  return V.fn.call(V.context, et, ot, at), !0;
                case 5:
                  return V.fn.call(V.context, et, ot, at, it), !0;
                case 6:
                  return V.fn.call(V.context, et, ot, at, it, F), !0;
              }
              for (L = 1, Pt = new Array(pt - 1); L < pt; L++)
                Pt[L - 1] = arguments[L];
              V.fn.apply(V.context, Pt);
            } else {
              var Kt = V.length,
                Dt;
              for (L = 0; L < Kt; L++)
                switch (
                  (V[L].once && this.removeListener(z, V[L].fn, void 0, !0), pt)
                ) {
                  case 1:
                    V[L].fn.call(V[L].context);
                    break;
                  case 2:
                    V[L].fn.call(V[L].context, et);
                    break;
                  case 3:
                    V[L].fn.call(V[L].context, et, ot);
                    break;
                  case 4:
                    V[L].fn.call(V[L].context, et, ot, at);
                    break;
                  default:
                    if (!Pt)
                      for (Dt = 1, Pt = new Array(pt - 1); Dt < pt; Dt++)
                        Pt[Dt - 1] = arguments[Dt];
                    V[L].fn.apply(V[L].context, Pt);
                }
            }
            return !0;
          }),
          (U.prototype.on = function (z, et, ot) {
            return K(this, z, et, ot, !1);
          }),
          (U.prototype.once = function (z, et, ot) {
            return K(this, z, et, ot, !0);
          }),
          (U.prototype.removeListener = function (z, et, ot, at) {
            var it = n ? n + z : z;
            if (!this._events[it]) return this;
            if (!et) return q(this, it), this;
            var F = this._events[it];
            if (F.fn)
              F.fn === et &&
                (!at || F.once) &&
                (!ot || F.context === ot) &&
                q(this, it);
            else {
              for (var dt = 0, V = [], pt = F.length; dt < pt; dt++)
                (F[dt].fn !== et ||
                  (at && !F[dt].once) ||
                  (ot && F[dt].context !== ot)) &&
                  V.push(F[dt]);
              V.length
                ? (this._events[it] = V.length === 1 ? V[0] : V)
                : q(this, it);
            }
            return this;
          }),
          (U.prototype.removeAllListeners = function (z) {
            var et;
            return (
              z
                ? ((et = n ? n + z : z), this._events[et] && q(this, et))
                : ((this._events = new s()), (this._eventsCount = 0)),
              this
            );
          }),
          (U.prototype.off = U.prototype.removeListener),
          (U.prototype.addListener = U.prototype.on),
          (U.prefixed = n),
          (U.EventEmitter = U),
          (Rt.exports = U);
      },
      34231: (Rt) => {
        function Ct(n, s, rt) {
          switch (rt.length) {
            case 0:
              return n.call(s);
            case 1:
              return n.call(s, rt[0]);
            case 2:
              return n.call(s, rt[0], rt[1]);
            case 3:
              return n.call(s, rt[0], rt[1], rt[2]);
          }
          return n.apply(s, rt);
        }
        Rt.exports = Ct;
      },
      28383: (Rt) => {
        function Ct(n, s) {
          for (var rt = -1, K = n == null ? 0 : n.length; ++rt < K; )
            if (!s(n[rt], rt, n)) return !1;
          return !0;
        }
        Rt.exports = Ct;
      },
      77223: (Rt, Ct, n) => {
        var s = n(74021);
        function rt(K, q) {
          var U = K == null ? 0 : K.length;
          return !!U && s(K, q, 0) > -1;
        }
        Rt.exports = rt;
      },
      64959: (Rt) => {
        function Ct(n, s, rt) {
          for (var K = -1, q = n == null ? 0 : n.length; ++K < q; )
            if (rt(s, n[K])) return !0;
          return !1;
        }
        Rt.exports = Ct;
      },
      18296: (Rt) => {
        function Ct(n) {
          return n.split("");
        }
        Rt.exports = Ct;
      },
      22503: (Rt, Ct, n) => {
        var s = n(39155);
        function rt(K, q) {
          var U = !0;
          return (
            s(K, function (Q, z, et) {
              return (U = !!q(Q, z, et)), U;
            }),
            U
          );
        }
        Rt.exports = rt;
      },
      16869: (Rt, Ct, n) => {
        var s = n(4036);
        function rt(K, q, U) {
          for (var Q = -1, z = K.length; ++Q < z; ) {
            var et = K[Q],
              ot = q(et);
            if (ot != null && (at === void 0 ? ot === ot && !s(ot) : U(ot, at)))
              var at = ot,
                it = et;
          }
          return it;
        }
        Rt.exports = rt;
      },
      75509: (Rt) => {
        function Ct(n, s, rt, K) {
          for (var q = n.length, U = rt + (K ? 1 : -1); K ? U-- : ++U < q; )
            if (s(n[U], U, n)) return U;
          return -1;
        }
        Rt.exports = Ct;
      },
      18174: (Rt, Ct, n) => {
        var s = n(49666),
          rt = n(4497);
        function K(q, U, Q, z, et) {
          var ot = -1,
            at = q.length;
          for (Q || (Q = rt), et || (et = []); ++ot < at; ) {
            var it = q[ot];
            U > 0 && Q(it)
              ? U > 1
                ? K(it, U - 1, Q, z, et)
                : s(et, it)
              : z || (et[et.length] = it);
          }
          return et;
        }
        Rt.exports = K;
      },
      31517: (Rt) => {
        function Ct(n, s) {
          return n > s;
        }
        Rt.exports = Ct;
      },
      74021: (Rt, Ct, n) => {
        var s = n(75509),
          rt = n(57929),
          K = n(79989);
        function q(U, Q, z) {
          return Q === Q ? K(U, Q, z) : s(U, rt, z);
        }
        Rt.exports = q;
      },
      57929: (Rt) => {
        function Ct(n) {
          return n !== n;
        }
        Rt.exports = Ct;
      },
      40106: (Rt) => {
        function Ct(n, s) {
          return n < s;
        }
        Rt.exports = Ct;
      },
      82401: (Rt, Ct, n) => {
        var s = n(27742),
          rt = n(93328),
          K = n(12507),
          q = n(47014),
          U = n(75323),
          Q = n(97371),
          z = n(9756),
          et = n(91398),
          ot = n(83491);
        function at(it, F, dt) {
          F.length
            ? (F = s(F, function (Pt) {
                return ot(Pt)
                  ? function (L) {
                      return rt(L, Pt.length === 1 ? Pt[0] : Pt);
                    }
                  : Pt;
              }))
            : (F = [et]);
          var V = -1;
          F = s(F, Q(K));
          var pt = q(it, function (Pt, L, Kt) {
            var Dt = s(F, function (wt) {
              return wt(Pt);
            });
            return { criteria: Dt, index: ++V, value: Pt };
          });
          return U(pt, function (Pt, L) {
            return z(Pt, L, dt);
          });
        }
        Rt.exports = at;
      },
      32849: (Rt) => {
        var Ct = Math.ceil,
          n = Math.max;
        function s(rt, K, q, U) {
          for (
            var Q = -1, z = n(Ct((K - rt) / (q || 1)), 0), et = Array(z);
            z--;
          )
            (et[U ? z : ++Q] = rt), (rt += q);
          return et;
        }
        Rt.exports = s;
      },
      5456: (Rt, Ct, n) => {
        var s = n(91398),
          rt = n(28979),
          K = n(81271);
        function q(U, Q) {
          return K(rt(U, Q, s), U + "");
        }
        Rt.exports = q;
      },
      59576: (Rt, Ct, n) => {
        var s = n(12732),
          rt = n(47489),
          K = n(91398),
          q = rt
            ? function (U, Q) {
                return rt(U, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: s(Q),
                  writable: !0,
                });
              }
            : K;
        Rt.exports = q;
      },
      35270: (Rt) => {
        function Ct(n, s, rt) {
          var K = -1,
            q = n.length;
          s < 0 && (s = -s > q ? 0 : q + s),
            (rt = rt > q ? q : rt),
            rt < 0 && (rt += q),
            (q = s > rt ? 0 : (rt - s) >>> 0),
            (s >>>= 0);
          for (var U = Array(q); ++K < q; ) U[K] = n[K + s];
          return U;
        }
        Rt.exports = Ct;
      },
      41190: (Rt, Ct, n) => {
        var s = n(39155);
        function rt(K, q) {
          var U;
          return (
            s(K, function (Q, z, et) {
              return (U = q(Q, z, et)), !U;
            }),
            !!U
          );
        }
        Rt.exports = rt;
      },
      75323: (Rt) => {
        function Ct(n, s) {
          var rt = n.length;
          for (n.sort(s); rt--; ) n[rt] = n[rt].value;
          return n;
        }
        Rt.exports = Ct;
      },
      38846: (Rt, Ct, n) => {
        var s = n(44658),
          rt = /^\s+/;
        function K(q) {
          return q && q.slice(0, s(q) + 1).replace(rt, "");
        }
        Rt.exports = K;
      },
      3507: (Rt, Ct, n) => {
        var s = n(99177),
          rt = n(77223),
          K = n(64959),
          q = n(5713),
          U = n(23119),
          Q = n(73697),
          z = 200;
        function et(ot, at, it) {
          var F = -1,
            dt = rt,
            V = ot.length,
            pt = !0,
            Pt = [],
            L = Pt;
          if (it) (pt = !1), (dt = K);
          else if (V >= z) {
            var Kt = at ? null : U(ot);
            if (Kt) return Q(Kt);
            (pt = !1), (dt = q), (L = new s());
          } else L = at ? [] : Pt;
          t: for (; ++F < V; ) {
            var Dt = ot[F],
              wt = at ? at(Dt) : Dt;
            if (((Dt = it || Dt !== 0 ? Dt : 0), pt && wt === wt)) {
              for (var Mt = L.length; Mt--; ) if (L[Mt] === wt) continue t;
              at && L.push(wt), Pt.push(Dt);
            } else dt(L, wt, it) || (L !== Pt && L.push(wt), Pt.push(Dt));
          }
          return Pt;
        }
        Rt.exports = et;
      },
      30440: (Rt, Ct, n) => {
        var s = n(35270);
        function rt(K, q, U) {
          var Q = K.length;
          return (U = U === void 0 ? Q : U), !q && U >= Q ? K : s(K, q, U);
        }
        Rt.exports = rt;
      },
      20292: (Rt, Ct, n) => {
        var s = n(4036);
        function rt(K, q) {
          if (K !== q) {
            var U = K !== void 0,
              Q = K === null,
              z = K === K,
              et = s(K),
              ot = q !== void 0,
              at = q === null,
              it = q === q,
              F = s(q);
            if (
              (!at && !F && !et && K > q) ||
              (et && ot && it && !at && !F) ||
              (Q && ot && it) ||
              (!U && it) ||
              !z
            )
              return 1;
            if (
              (!Q && !et && !F && K < q) ||
              (F && U && z && !Q && !et) ||
              (at && U && z) ||
              (!ot && z) ||
              !it
            )
              return -1;
          }
          return 0;
        }
        Rt.exports = rt;
      },
      9756: (Rt, Ct, n) => {
        var s = n(20292);
        function rt(K, q, U) {
          for (
            var Q = -1,
              z = K.criteria,
              et = q.criteria,
              ot = z.length,
              at = U.length;
            ++Q < ot;
          ) {
            var it = s(z[Q], et[Q]);
            if (it) {
              if (Q >= at) return it;
              var F = U[Q];
              return it * (F == "desc" ? -1 : 1);
            }
          }
          return K.index - q.index;
        }
        Rt.exports = rt;
      },
      94829: (Rt, Ct, n) => {
        var s = n(30440),
          rt = n(6076),
          K = n(96402),
          q = n(6468);
        function U(Q) {
          return function (z) {
            z = q(z);
            var et = rt(z) ? K(z) : void 0,
              ot = et ? et[0] : z.charAt(0),
              at = et ? s(et, 1).join("") : z.slice(1);
            return ot[Q]() + at;
          };
        }
        Rt.exports = U;
      },
      25200: (Rt, Ct, n) => {
        var s = n(12507),
          rt = n(97244),
          K = n(33640);
        function q(U) {
          return function (Q, z, et) {
            var ot = Object(Q);
            if (!rt(Q)) {
              var at = s(z, 3);
              (Q = K(Q)),
                (z = function (F) {
                  return at(ot[F], F, ot);
                });
            }
            var it = U(Q, z, et);
            return it > -1 ? ot[at ? Q[it] : it] : void 0;
          };
        }
        Rt.exports = q;
      },
      35966: (Rt, Ct, n) => {
        var s = n(32849),
          rt = n(6238),
          K = n(5598);
        function q(U) {
          return function (Q, z, et) {
            return (
              et && typeof et != "number" && rt(Q, z, et) && (z = et = void 0),
              (Q = K(Q)),
              z === void 0 ? ((z = Q), (Q = 0)) : (z = K(z)),
              (et = et === void 0 ? (Q < z ? 1 : -1) : K(et)),
              s(Q, z, et, U)
            );
          };
        }
        Rt.exports = q;
      },
      23119: (Rt, Ct, n) => {
        var s = n(64507),
          rt = n(7204),
          K = n(73697),
          q = 1 / 0,
          U =
            s && 1 / K(new s([, -0]))[1] == q
              ? function (Q) {
                  return new s(Q);
                }
              : rt;
        Rt.exports = U;
      },
      6076: (Rt) => {
        var Ct = "\\ud800-\\udfff",
          n = "\\u0300-\\u036f",
          s = "\\ufe20-\\ufe2f",
          rt = "\\u20d0-\\u20ff",
          K = n + s + rt,
          q = "\\ufe0e\\ufe0f",
          U = "\\u200d",
          Q = RegExp("[" + U + Ct + K + q + "]");
        function z(et) {
          return Q.test(et);
        }
        Rt.exports = z;
      },
      4497: (Rt, Ct, n) => {
        var s = n(38039),
          rt = n(69214),
          K = n(83491),
          q = s ? s.isConcatSpreadable : void 0;
        function U(Q) {
          return K(Q) || rt(Q) || !!(q && Q && Q[q]);
        }
        Rt.exports = U;
      },
      6238: (Rt, Ct, n) => {
        var s = n(31722),
          rt = n(97244),
          K = n(62439),
          q = n(97827);
        function U(Q, z, et) {
          if (!q(et)) return !1;
          var ot = typeof z;
          return (
            ot == "number"
              ? rt(et) && K(z, et.length)
              : ot == "string" && z in et
          )
            ? s(et[z], Q)
            : !1;
        }
        Rt.exports = U;
      },
      28979: (Rt, Ct, n) => {
        var s = n(34231),
          rt = Math.max;
        function K(q, U, Q) {
          return (
            (U = rt(U === void 0 ? q.length - 1 : U, 0)),
            function () {
              for (
                var z = arguments,
                  et = -1,
                  ot = rt(z.length - U, 0),
                  at = Array(ot);
                ++et < ot;
              )
                at[et] = z[U + et];
              et = -1;
              for (var it = Array(U + 1); ++et < U; ) it[et] = z[et];
              return (it[U] = Q(at)), s(q, this, it);
            }
          );
        }
        Rt.exports = K;
      },
      81271: (Rt, Ct, n) => {
        var s = n(59576),
          rt = n(89997),
          K = rt(s);
        Rt.exports = K;
      },
      89997: (Rt) => {
        var Ct = 800,
          n = 16,
          s = Date.now;
        function rt(K) {
          var q = 0,
            U = 0;
          return function () {
            var Q = s(),
              z = n - (Q - U);
            if (((U = Q), z > 0)) {
              if (++q >= Ct) return arguments[0];
            } else q = 0;
            return K.apply(void 0, arguments);
          };
        }
        Rt.exports = rt;
      },
      79989: (Rt) => {
        function Ct(n, s, rt) {
          for (var K = rt - 1, q = n.length; ++K < q; )
            if (n[K] === s) return K;
          return -1;
        }
        Rt.exports = Ct;
      },
      96402: (Rt, Ct, n) => {
        var s = n(18296),
          rt = n(6076),
          K = n(52512);
        function q(U) {
          return rt(U) ? K(U) : s(U);
        }
        Rt.exports = q;
      },
      44658: (Rt) => {
        var Ct = /\s/;
        function n(s) {
          for (var rt = s.length; rt-- && Ct.test(s.charAt(rt)); );
          return rt;
        }
        Rt.exports = n;
      },
      52512: (Rt) => {
        var Ct = "\\ud800-\\udfff",
          n = "\\u0300-\\u036f",
          s = "\\ufe20-\\ufe2f",
          rt = "\\u20d0-\\u20ff",
          K = n + s + rt,
          q = "\\ufe0e\\ufe0f",
          U = "[" + Ct + "]",
          Q = "[" + K + "]",
          z = "\\ud83c[\\udffb-\\udfff]",
          et = "(?:" + Q + "|" + z + ")",
          ot = "[^" + Ct + "]",
          at = "(?:\\ud83c[\\udde6-\\uddff]){2}",
          it = "[\\ud800-\\udbff][\\udc00-\\udfff]",
          F = "\\u200d",
          dt = et + "?",
          V = "[" + q + "]?",
          pt = "(?:" + F + "(?:" + [ot, at, it].join("|") + ")" + V + dt + ")*",
          Pt = V + dt + pt,
          L = "(?:" + [ot + Q + "?", Q, at, it, U].join("|") + ")",
          Kt = RegExp(z + "(?=" + z + ")|" + L + Pt, "g");
        function Dt(wt) {
          return wt.match(Kt) || [];
        }
        Rt.exports = Dt;
      },
      12732: (Rt) => {
        function Ct(n) {
          return function () {
            return n;
          };
        }
        Rt.exports = Ct;
      },
      18663: (Rt, Ct, n) => {
        var s = n(97827),
          rt = n(26846),
          K = n(52352),
          q = "Expected a function",
          U = Math.max,
          Q = Math.min;
        function z(et, ot, at) {
          var it,
            F,
            dt,
            V,
            pt,
            Pt,
            L = 0,
            Kt = !1,
            Dt = !1,
            wt = !0;
          if (typeof et != "function") throw new TypeError(q);
          (ot = K(ot) || 0),
            s(at) &&
              ((Kt = !!at.leading),
              (Dt = "maxWait" in at),
              (dt = Dt ? U(K(at.maxWait) || 0, ot) : dt),
              (wt = "trailing" in at ? !!at.trailing : wt));
          function Mt(C) {
            var B = it,
              nt = F;
            return (it = F = void 0), (L = C), (V = et.apply(nt, B)), V;
          }
          function $(C) {
            return (L = C), (pt = setTimeout(g, ot)), Kt ? Mt(C) : V;
          }
          function w(C) {
            var B = C - Pt,
              nt = C - L,
              bt = ot - B;
            return Dt ? Q(bt, dt - nt) : bt;
          }
          function M(C) {
            var B = C - Pt,
              nt = C - L;
            return Pt === void 0 || B >= ot || B < 0 || (Dt && nt >= dt);
          }
          function g() {
            var C = rt();
            if (M(C)) return v(C);
            pt = setTimeout(g, w(C));
          }
          function v(C) {
            return (pt = void 0), wt && it ? Mt(C) : ((it = F = void 0), V);
          }
          function ut() {
            pt !== void 0 && clearTimeout(pt),
              (L = 0),
              (it = Pt = F = pt = void 0);
          }
          function lt() {
            return pt === void 0 ? V : v(rt());
          }
          function Nt() {
            var C = rt(),
              B = M(C);
            if (((it = arguments), (F = this), (Pt = C), B)) {
              if (pt === void 0) return $(Pt);
              if (Dt) return clearTimeout(pt), (pt = setTimeout(g, ot)), Mt(Pt);
            }
            return pt === void 0 && (pt = setTimeout(g, ot)), V;
          }
          return (Nt.cancel = ut), (Nt.flush = lt), Nt;
        }
        Rt.exports = z;
      },
      17489: (Rt, Ct, n) => {
        var s = n(28383),
          rt = n(22503),
          K = n(12507),
          q = n(83491),
          U = n(6238);
        function Q(z, et, ot) {
          var at = q(z) ? s : rt;
          return ot && U(z, et, ot) && (et = void 0), at(z, K(et, 3));
        }
        Rt.exports = Q;
      },
      81639: (Rt, Ct, n) => {
        var s = n(25200),
          rt = n(45323),
          K = s(rt);
        Rt.exports = K;
      },
      45323: (Rt, Ct, n) => {
        var s = n(75509),
          rt = n(12507),
          K = n(41703),
          q = Math.max;
        function U(Q, z, et) {
          var ot = Q == null ? 0 : Q.length;
          if (!ot) return -1;
          var at = et == null ? 0 : K(et);
          return at < 0 && (at = q(ot + at, 0)), s(Q, rt(z, 3), at);
        }
        Rt.exports = U;
      },
      21205: (Rt, Ct, n) => {
        var s = n(18174),
          rt = n(67160);
        function K(q, U) {
          return s(rt(q, U), 1);
        }
        Rt.exports = K;
      },
      23734: (Rt, Ct, n) => {
        var s = n(78714),
          rt = n(34172),
          K = "[object Boolean]";
        function q(U) {
          return U === !0 || U === !1 || (rt(U) && s(U) == K);
        }
        Rt.exports = q;
      },
      58782: (Rt, Ct, n) => {
        var s = n(16536);
        function rt(K, q) {
          return s(K, q);
        }
        Rt.exports = rt;
      },
      27367: (Rt, Ct, n) => {
        var s = n(2017);
        function rt(K) {
          return s(K) && K != +K;
        }
        Rt.exports = rt;
      },
      64609: (Rt) => {
        function Ct(n) {
          return n == null;
        }
        Rt.exports = Ct;
      },
      2017: (Rt, Ct, n) => {
        var s = n(78714),
          rt = n(34172),
          K = "[object Number]";
        function q(U) {
          return typeof U == "number" || (rt(U) && s(U) == K);
        }
        Rt.exports = q;
      },
      73912: (Rt) => {
        function Ct(n) {
          var s = n == null ? 0 : n.length;
          return s ? n[s - 1] : void 0;
        }
        Rt.exports = Ct;
      },
      90338: (Rt, Ct, n) => {
        var s = n(51458),
          rt = n(17707),
          K = n(12507);
        function q(U, Q) {
          var z = {};
          return (
            (Q = K(Q, 3)),
            rt(U, function (et, ot, at) {
              s(z, ot, Q(et, ot, at));
            }),
            z
          );
        }
        Rt.exports = q;
      },
      82544: (Rt, Ct, n) => {
        var s = n(16869),
          rt = n(31517),
          K = n(91398);
        function q(U) {
          return U && U.length ? s(U, K, rt) : void 0;
        }
        Rt.exports = q;
      },
      6702: (Rt, Ct, n) => {
        var s = n(16869),
          rt = n(40106),
          K = n(91398);
        function q(U) {
          return U && U.length ? s(U, K, rt) : void 0;
        }
        Rt.exports = q;
      },
      7204: (Rt) => {
        function Ct() {}
        Rt.exports = Ct;
      },
      26846: (Rt, Ct, n) => {
        var s = n(26467),
          rt = function () {
            return s.Date.now();
          };
        Rt.exports = rt;
      },
      50199: (Rt, Ct, n) => {
        var s = n(35966),
          rt = s();
        Rt.exports = rt;
      },
      49556: (Rt, Ct, n) => {
        var s = n(17214),
          rt = n(12507),
          K = n(41190),
          q = n(83491),
          U = n(6238);
        function Q(z, et, ot) {
          var at = q(z) ? s : K;
          return ot && U(z, et, ot) && (et = void 0), at(z, rt(et, 3));
        }
        Rt.exports = Q;
      },
      20206: (Rt, Ct, n) => {
        var s = n(18174),
          rt = n(82401),
          K = n(5456),
          q = n(6238),
          U = K(function (Q, z) {
            if (Q == null) return [];
            var et = z.length;
            return (
              et > 1 && q(Q, z[0], z[1])
                ? (z = [])
                : et > 2 && q(z[0], z[1], z[2]) && (z = [z[0]]),
              rt(Q, s(z, 1), [])
            );
          });
        Rt.exports = U;
      },
      51504: (Rt, Ct, n) => {
        var s = n(18663),
          rt = n(97827),
          K = "Expected a function";
        function q(U, Q, z) {
          var et = !0,
            ot = !0;
          if (typeof U != "function") throw new TypeError(K);
          return (
            rt(z) &&
              ((et = "leading" in z ? !!z.leading : et),
              (ot = "trailing" in z ? !!z.trailing : ot)),
            s(U, Q, { leading: et, maxWait: Q, trailing: ot })
          );
        }
        Rt.exports = q;
      },
      5598: (Rt, Ct, n) => {
        var s = n(52352),
          rt = 1 / 0,
          K = 17976931348623157e292;
        function q(U) {
          if (!U) return U === 0 ? U : 0;
          if (((U = s(U)), U === rt || U === -rt)) {
            var Q = U < 0 ? -1 : 1;
            return Q * K;
          }
          return U === U ? U : 0;
        }
        Rt.exports = q;
      },
      41703: (Rt, Ct, n) => {
        var s = n(5598);
        function rt(K) {
          var q = s(K),
            U = q % 1;
          return q === q ? (U ? q - U : q) : 0;
        }
        Rt.exports = rt;
      },
      52352: (Rt, Ct, n) => {
        var s = n(38846),
          rt = n(97827),
          K = n(4036),
          q = NaN,
          U = /^[-+]0x[0-9a-f]+$/i,
          Q = /^0b[01]+$/i,
          z = /^0o[0-7]+$/i,
          et = parseInt;
        function ot(at) {
          if (typeof at == "number") return at;
          if (K(at)) return q;
          if (rt(at)) {
            var it = typeof at.valueOf == "function" ? at.valueOf() : at;
            at = rt(it) ? it + "" : it;
          }
          if (typeof at != "string") return at === 0 ? at : +at;
          at = s(at);
          var F = Q.test(at);
          return F || z.test(at)
            ? et(at.slice(2), F ? 2 : 8)
            : U.test(at)
              ? q
              : +at;
        }
        Rt.exports = ot;
      },
      17744: (Rt, Ct, n) => {
        var s = n(12507),
          rt = n(3507);
        function K(q, U) {
          return q && q.length ? rt(q, s(U, 2)) : [];
        }
        Rt.exports = K;
      },
      4842: (Rt, Ct, n) => {
        var s = n(94829),
          rt = s("toUpperCase");
        Rt.exports = rt;
      },
      38877: (Rt, Ct) => {
        "use strict";
        var n; /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var s = Symbol.for("react.element"),
          rt = Symbol.for("react.portal"),
          K = Symbol.for("react.fragment"),
          q = Symbol.for("react.strict_mode"),
          U = Symbol.for("react.profiler"),
          Q = Symbol.for("react.provider"),
          z = Symbol.for("react.context"),
          et = Symbol.for("react.server_context"),
          ot = Symbol.for("react.forward_ref"),
          at = Symbol.for("react.suspense"),
          it = Symbol.for("react.suspense_list"),
          F = Symbol.for("react.memo"),
          dt = Symbol.for("react.lazy"),
          V = Symbol.for("react.offscreen"),
          pt;
        pt = Symbol.for("react.module.reference");
        function Pt(L) {
          if (typeof L == "object" && L !== null) {
            var Kt = L.$$typeof;
            switch (Kt) {
              case s:
                switch (((L = L.type), L)) {
                  case K:
                  case U:
                  case q:
                  case at:
                  case it:
                    return L;
                  default:
                    switch (((L = L && L.$$typeof), L)) {
                      case et:
                      case z:
                      case ot:
                      case dt:
                      case F:
                      case Q:
                        return L;
                      default:
                        return Kt;
                    }
                }
              case rt:
                return Kt;
            }
          }
        }
        (n = z),
          (n = Q),
          (n = s),
          (n = ot),
          (n = K),
          (n = dt),
          (n = F),
          (n = rt),
          (n = U),
          (n = q),
          (n = at),
          (n = it),
          (n = function () {
            return !1;
          }),
          (n = function () {
            return !1;
          }),
          (Ct.isContextConsumer = function (L) {
            return Pt(L) === z;
          }),
          (n = function (L) {
            return Pt(L) === Q;
          }),
          (n = function (L) {
            return typeof L == "object" && L !== null && L.$$typeof === s;
          }),
          (n = function (L) {
            return Pt(L) === ot;
          }),
          (Ct.isFragment = function (L) {
            return Pt(L) === K;
          }),
          (n = function (L) {
            return Pt(L) === dt;
          }),
          (n = function (L) {
            return Pt(L) === F;
          }),
          (n = function (L) {
            return Pt(L) === rt;
          }),
          (n = function (L) {
            return Pt(L) === U;
          }),
          (n = function (L) {
            return Pt(L) === q;
          }),
          (n = function (L) {
            return Pt(L) === at;
          }),
          (n = function (L) {
            return Pt(L) === it;
          }),
          (n = function (L) {
            return (
              typeof L == "string" ||
              typeof L == "function" ||
              L === K ||
              L === U ||
              L === q ||
              L === at ||
              L === it ||
              L === V ||
              (typeof L == "object" &&
                L !== null &&
                (L.$$typeof === dt ||
                  L.$$typeof === F ||
                  L.$$typeof === Q ||
                  L.$$typeof === z ||
                  L.$$typeof === ot ||
                  L.$$typeof === pt ||
                  L.getModuleId !== void 0))
            );
          }),
          (n = Pt);
      },
      98193: (Rt, Ct, n) => {
        "use strict";
        Rt.exports = n(38877);
      },
      86356: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { Ay: () => Ti });
        var s = n(90626),
          rt = n(61410),
          K = n.n(rt);
        const { getOwnPropertyNames: q, getOwnPropertySymbols: U } = Object,
          { hasOwnProperty: Q } = Object.prototype;
        function z(T, W) {
          return function (St, Bt, Jt) {
            return T(St, Bt, Jt) && W(St, Bt, Jt);
          };
        }
        function et(T) {
          return function (st, St, Bt) {
            if (!st || !St || typeof st != "object" || typeof St != "object")
              return T(st, St, Bt);
            const { cache: Jt } = Bt,
              re = Jt.get(st),
              he = Jt.get(St);
            if (re && he) return re === St && he === st;
            Jt.set(st, St), Jt.set(St, st);
            const ge = T(st, St, Bt);
            return Jt.delete(st), Jt.delete(St), ge;
          };
        }
        function ot(T) {
          return T?.[Symbol.toStringTag];
        }
        function at(T) {
          return q(T).concat(U(T));
        }
        const it = Object.hasOwn || ((T, W) => Q.call(T, W));
        function F(T, W) {
          return T === W || (!T && !W && T !== T && W !== W);
        }
        const dt = "__v",
          V = "__o",
          pt = "_owner",
          { getOwnPropertyDescriptor: Pt, keys: L } = Object;
        function Kt(T, W) {
          return (
            T.byteLength === W.byteLength &&
            B(new Uint8Array(T), new Uint8Array(W))
          );
        }
        function Dt(T, W, st) {
          let St = T.length;
          if (W.length !== St) return !1;
          for (; St-- > 0; )
            if (!st.equals(T[St], W[St], St, St, T, W, st)) return !1;
          return !0;
        }
        function wt(T, W) {
          return (
            T.byteLength === W.byteLength &&
            B(
              new Uint8Array(T.buffer, T.byteOffset, T.byteLength),
              new Uint8Array(W.buffer, W.byteOffset, W.byteLength),
            )
          );
        }
        function Mt(T, W) {
          return F(T.getTime(), W.getTime());
        }
        function $(T, W) {
          return (
            T.name === W.name &&
            T.message === W.message &&
            T.cause === W.cause &&
            T.stack === W.stack
          );
        }
        function w(T, W) {
          return T === W;
        }
        function M(T, W, st) {
          const St = T.size;
          if (St !== W.size) return !1;
          if (!St) return !0;
          const Bt = new Array(St),
            Jt = T.entries();
          let re,
            he,
            ge = 0;
          for (; (re = Jt.next()) && !re.done; ) {
            const Xe = W.entries();
            let ze = !1,
              en = 0;
            for (; (he = Xe.next()) && !he.done; ) {
              if (Bt[en]) {
                en++;
                continue;
              }
              const nn = re.value,
                An = he.value;
              if (
                st.equals(nn[0], An[0], ge, en, T, W, st) &&
                st.equals(nn[1], An[1], nn[0], An[0], T, W, st)
              ) {
                ze = Bt[en] = !0;
                break;
              }
              en++;
            }
            if (!ze) return !1;
            ge++;
          }
          return !0;
        }
        const g = F;
        function v(T, W, st) {
          const St = L(T);
          let Bt = St.length;
          if (L(W).length !== Bt) return !1;
          for (; Bt-- > 0; ) if (!bt(T, W, st, St[Bt])) return !1;
          return !0;
        }
        function ut(T, W, st) {
          const St = at(T);
          let Bt = St.length;
          if (at(W).length !== Bt) return !1;
          let Jt, re, he;
          for (; Bt-- > 0; )
            if (
              ((Jt = St[Bt]),
              !bt(T, W, st, Jt) ||
                ((re = Pt(T, Jt)),
                (he = Pt(W, Jt)),
                (re || he) &&
                  (!re ||
                    !he ||
                    re.configurable !== he.configurable ||
                    re.enumerable !== he.enumerable ||
                    re.writable !== he.writable)))
            )
              return !1;
          return !0;
        }
        function lt(T, W) {
          return F(T.valueOf(), W.valueOf());
        }
        function Nt(T, W) {
          return T.source === W.source && T.flags === W.flags;
        }
        function C(T, W, st) {
          const St = T.size;
          if (St !== W.size) return !1;
          if (!St) return !0;
          const Bt = new Array(St),
            Jt = T.values();
          let re, he;
          for (; (re = Jt.next()) && !re.done; ) {
            const ge = W.values();
            let Xe = !1,
              ze = 0;
            for (; (he = ge.next()) && !he.done; ) {
              if (
                !Bt[ze] &&
                st.equals(re.value, he.value, re.value, he.value, T, W, st)
              ) {
                Xe = Bt[ze] = !0;
                break;
              }
              ze++;
            }
            if (!Xe) return !1;
          }
          return !0;
        }
        function B(T, W) {
          let st = T.byteLength;
          if (W.byteLength !== st || T.byteOffset !== W.byteOffset) return !1;
          for (; st-- > 0; ) if (T[st] !== W[st]) return !1;
          return !0;
        }
        function nt(T, W) {
          return (
            T.hostname === W.hostname &&
            T.pathname === W.pathname &&
            T.protocol === W.protocol &&
            T.port === W.port &&
            T.hash === W.hash &&
            T.username === W.username &&
            T.password === W.password
          );
        }
        function bt(T, W, st, St) {
          return (St === pt || St === V || St === dt) &&
            (T.$$typeof || W.$$typeof)
            ? !0
            : it(W, St) && st.equals(T[St], W[St], St, St, T, W, st);
        }
        const P = "[object ArrayBuffer]",
          m = "[object Arguments]",
          S = "[object Boolean]",
          _ = "[object DataView]",
          E = "[object Date]",
          c = "[object Error]",
          o = "[object Map]",
          p = "[object Number]",
          b = "[object Object]",
          R = "[object RegExp]",
          J = "[object Set]",
          Y = "[object String]",
          It = {
            "[object Int8Array]": !0,
            "[object Uint8Array]": !0,
            "[object Uint8ClampedArray]": !0,
            "[object Int16Array]": !0,
            "[object Uint16Array]": !0,
            "[object Int32Array]": !0,
            "[object Uint32Array]": !0,
            "[object Float16Array]": !0,
            "[object Float32Array]": !0,
            "[object Float64Array]": !0,
            "[object BigInt64Array]": !0,
            "[object BigUint64Array]": !0,
          },
          Z = "[object URL]",
          vt = Object.prototype.toString;
        function ft({
          areArrayBuffersEqual: T,
          areArraysEqual: W,
          areDataViewsEqual: st,
          areDatesEqual: St,
          areErrorsEqual: Bt,
          areFunctionsEqual: Jt,
          areMapsEqual: re,
          areNumbersEqual: he,
          areObjectsEqual: ge,
          arePrimitiveWrappersEqual: Xe,
          areRegExpsEqual: ze,
          areSetsEqual: en,
          areTypedArraysEqual: nn,
          areUrlsEqual: An,
          unknownTagComparators: Sn,
        }) {
          return function (Se, Re, He) {
            if (Se === Re) return !0;
            if (Se == null || Re == null) return !1;
            const En = typeof Se;
            if (En !== typeof Re) return !1;
            if (En !== "object")
              return En === "number"
                ? he(Se, Re, He)
                : En === "function"
                  ? Jt(Se, Re, He)
                  : !1;
            const cn = Se.constructor;
            if (cn !== Re.constructor) return !1;
            if (cn === Object) return ge(Se, Re, He);
            if (Array.isArray(Se)) return W(Se, Re, He);
            if (cn === Date) return St(Se, Re, He);
            if (cn === RegExp) return ze(Se, Re, He);
            if (cn === Map) return re(Se, Re, He);
            if (cn === Set) return en(Se, Re, He);
            const pn = vt.call(Se);
            if (pn === E) return St(Se, Re, He);
            if (pn === R) return ze(Se, Re, He);
            if (pn === o) return re(Se, Re, He);
            if (pn === J) return en(Se, Re, He);
            if (pn === b)
              return (
                typeof Se.then != "function" &&
                typeof Re.then != "function" &&
                ge(Se, Re, He)
              );
            if (pn === Z) return An(Se, Re, He);
            if (pn === c) return Bt(Se, Re, He);
            if (pn === m) return ge(Se, Re, He);
            if (It[pn]) return nn(Se, Re, He);
            if (pn === P) return T(Se, Re, He);
            if (pn === _) return st(Se, Re, He);
            if (pn === S || pn === p || pn === Y) return Xe(Se, Re, He);
            if (Sn) {
              let $t = Sn[pn];
              if (!$t) {
                const Ie = ot(Se);
                Ie && ($t = Sn[Ie]);
              }
              if ($t) return $t(Se, Re, He);
            }
            return !1;
          };
        }
        function xt({ circular: T, createCustomConfig: W, strict: st }) {
          let St = {
            areArrayBuffersEqual: Kt,
            areArraysEqual: st ? ut : Dt,
            areDataViewsEqual: wt,
            areDatesEqual: Mt,
            areErrorsEqual: $,
            areFunctionsEqual: w,
            areMapsEqual: st ? z(M, ut) : M,
            areNumbersEqual: g,
            areObjectsEqual: st ? ut : v,
            arePrimitiveWrappersEqual: lt,
            areRegExpsEqual: Nt,
            areSetsEqual: st ? z(C, ut) : C,
            areTypedArraysEqual: st ? z(B, ut) : B,
            areUrlsEqual: nt,
            unknownTagComparators: void 0,
          };
          if ((W && (St = Object.assign({}, St, W(St))), T)) {
            const Bt = et(St.areArraysEqual),
              Jt = et(St.areMapsEqual),
              re = et(St.areObjectsEqual),
              he = et(St.areSetsEqual);
            St = Object.assign({}, St, {
              areArraysEqual: Bt,
              areMapsEqual: Jt,
              areObjectsEqual: re,
              areSetsEqual: he,
            });
          }
          return St;
        }
        function Ut(T) {
          return function (W, st, St, Bt, Jt, re, he) {
            return T(W, st, he);
          };
        }
        function Vt({
          circular: T,
          comparator: W,
          createState: st,
          equals: St,
          strict: Bt,
        }) {
          if (st)
            return function (he, ge) {
              const { cache: Xe = T ? new WeakMap() : void 0, meta: ze } = st();
              return W(he, ge, { cache: Xe, equals: St, meta: ze, strict: Bt });
            };
          if (T)
            return function (he, ge) {
              return W(he, ge, {
                cache: new WeakMap(),
                equals: St,
                meta: void 0,
                strict: Bt,
              });
            };
          const Jt = { cache: void 0, equals: St, meta: void 0, strict: Bt };
          return function (he, ge) {
            return W(he, ge, Jt);
          };
        }
        const ct = Wt(),
          l = Wt({ strict: !0 }),
          h = Wt({ circular: !0 }),
          O = Wt({ circular: !0, strict: !0 }),
          f = Wt({ createInternalComparator: () => F }),
          D = Wt({ strict: !0, createInternalComparator: () => F }),
          tt = Wt({ circular: !0, createInternalComparator: () => F }),
          Et = Wt({
            circular: !0,
            createInternalComparator: () => F,
            strict: !0,
          });
        function Wt(T = {}) {
          const {
              circular: W = !1,
              createInternalComparator: st,
              createState: St,
              strict: Bt = !1,
            } = T,
            Jt = xt(T),
            re = ft(Jt),
            he = st ? st(re) : Ut(re);
          return Vt({
            circular: W,
            comparator: re,
            createState: St,
            equals: he,
            strict: Bt,
          });
        }
        function Ft(T) {
          typeof requestAnimationFrame < "u" && requestAnimationFrame(T);
        }
        function ie(T) {
          var W =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 0,
            st = -1,
            St = function Bt(Jt) {
              st < 0 && (st = Jt), Jt - st > W ? (T(Jt), (st = -1)) : Ft(Bt);
            };
          requestAnimationFrame(St);
        }
        function k(T) {
          "@babel/helpers - typeof";
          return (
            (k =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (W) {
                    return typeof W;
                  }
                : function (W) {
                    return W &&
                      typeof Symbol == "function" &&
                      W.constructor === Symbol &&
                      W !== Symbol.prototype
                      ? "symbol"
                      : typeof W;
                  }),
            k(T)
          );
        }
        function G(T) {
          return Ht(T) || kt(T) || yt(T) || j();
        }
        function j() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function yt(T, W) {
          if (T) {
            if (typeof T == "string") return mt(T, W);
            var st = Object.prototype.toString.call(T).slice(8, -1);
            if (
              (st === "Object" && T.constructor && (st = T.constructor.name),
              st === "Map" || st === "Set")
            )
              return Array.from(T);
            if (
              st === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(st)
            )
              return mt(T, W);
          }
        }
        function mt(T, W) {
          (W == null || W > T.length) && (W = T.length);
          for (var st = 0, St = new Array(W); st < W; st++) St[st] = T[st];
          return St;
        }
        function kt(T) {
          if (
            (typeof Symbol < "u" && T[Symbol.iterator] != null) ||
            T["@@iterator"] != null
          )
            return Array.from(T);
        }
        function Ht(T) {
          if (Array.isArray(T)) return T;
        }
        function qt() {
          var T = {},
            W = function () {
              return null;
            },
            st = !1,
            St = function Bt(Jt) {
              if (!st) {
                if (Array.isArray(Jt)) {
                  if (!Jt.length) return;
                  var re = Jt,
                    he = G(re),
                    ge = he[0],
                    Xe = he.slice(1);
                  if (typeof ge == "number") {
                    ie(Bt.bind(null, Xe), ge);
                    return;
                  }
                  Bt(ge), ie(Bt.bind(null, Xe));
                  return;
                }
                k(Jt) === "object" && ((T = Jt), W(T)),
                  typeof Jt == "function" && Jt();
              }
            };
          return {
            stop: function () {
              st = !0;
            },
            start: function (Jt) {
              (st = !1), St(Jt);
            },
            subscribe: function (Jt) {
              return (
                (W = Jt),
                function () {
                  W = function () {
                    return null;
                  };
                }
              );
            },
          };
        }
        function N(T) {
          "@babel/helpers - typeof";
          return (
            (N =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (W) {
                    return typeof W;
                  }
                : function (W) {
                    return W &&
                      typeof Symbol == "function" &&
                      W.constructor === Symbol &&
                      W !== Symbol.prototype
                      ? "symbol"
                      : typeof W;
                  }),
            N(T)
          );
        }
        function X(T, W) {
          var st = Object.keys(T);
          if (Object.getOwnPropertySymbols) {
            var St = Object.getOwnPropertySymbols(T);
            W &&
              (St = St.filter(function (Bt) {
                return Object.getOwnPropertyDescriptor(T, Bt).enumerable;
              })),
              st.push.apply(st, St);
          }
          return st;
        }
        function _t(T) {
          for (var W = 1; W < arguments.length; W++) {
            var st = arguments[W] != null ? arguments[W] : {};
            W % 2
              ? X(Object(st), !0).forEach(function (St) {
                  At(T, St, st[St]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    T,
                    Object.getOwnPropertyDescriptors(st),
                  )
                : X(Object(st)).forEach(function (St) {
                    Object.defineProperty(
                      T,
                      St,
                      Object.getOwnPropertyDescriptor(st, St),
                    );
                  });
          }
          return T;
        }
        function At(T, W, st) {
          return (
            (W = Zt(W)),
            W in T
              ? Object.defineProperty(T, W, {
                  value: st,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (T[W] = st),
            T
          );
        }
        function Zt(T) {
          var W = Be(T, "string");
          return N(W) === "symbol" ? W : String(W);
        }
        function Be(T, W) {
          if (N(T) !== "object" || T === null) return T;
          var st = T[Symbol.toPrimitive];
          if (st !== void 0) {
            var St = st.call(T, W || "default");
            if (N(St) !== "object") return St;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (W === "string" ? String : Number)(T);
        }
        var Le = function (W, st) {
            return [Object.keys(W), Object.keys(st)].reduce(function (St, Bt) {
              return St.filter(function (Jt) {
                return Bt.includes(Jt);
              });
            });
          },
          Pe = function (W) {
            return W;
          },
          Ce = function (W) {
            return W.replace(/([A-Z])/g, function (st) {
              return "-".concat(st.toLowerCase());
            });
          },
          We = function () {
            var W;
            (W = console).log.apply(W, arguments);
          },
          je = function (W) {
            return function (st) {
              return We(W, st), st;
            };
          },
          Ye = function (W, st) {
            return function () {
              for (
                var St = arguments.length, Bt = new Array(St), Jt = 0;
                Jt < St;
                Jt++
              )
                Bt[Jt] = arguments[Jt];
              var re = st.apply(void 0, Bt),
                he = W || st.name || "anonymous function",
                ge = "(".concat(Bt.map(JSON.stringify).join(", "), ")");
              return (
                We(
                  ""
                    .concat(he, ": ")
                    .concat(ge, " => ")
                    .concat(JSON.stringify(re)),
                ),
                re
              );
            };
          },
          qe = function (W, st) {
            return Object.keys(st).reduce(function (St, Bt) {
              return _t(_t({}, St), {}, At({}, Bt, W(Bt, st[Bt])));
            }, {});
          },
          on = function (W, st, St) {
            return W.map(function (Bt) {
              return "".concat(Ce(Bt), " ").concat(st, "ms ").concat(St);
            }).join(",");
          },
          un = !1,
          tn = function (W, st, St, Bt, Jt, re, he, ge) {
            if (
              un &&
              typeof console < "u" &&
              console.warn &&
              (st === void 0 &&
                console.warn("LogUtils requires an error message argument"),
              !W)
            )
              if (st === void 0)
                console.warn(
                  "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
                );
              else {
                var Xe = [St, Bt, Jt, re, he, ge],
                  ze = 0;
                console.warn(
                  st.replace(/%s/g, function () {
                    return Xe[ze++];
                  }),
                );
              }
          };
        function bn(T, W) {
          return jn(T) || _n(T, W) || In(T, W) || Mn();
        }
        function Mn() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function _n(T, W) {
          var st =
            T == null
              ? null
              : (typeof Symbol < "u" && T[Symbol.iterator]) || T["@@iterator"];
          if (st != null) {
            var St,
              Bt,
              Jt,
              re,
              he = [],
              ge = !0,
              Xe = !1;
            try {
              if (((Jt = (st = st.call(T)).next), W === 0)) {
                if (Object(st) !== st) return;
                ge = !1;
              } else
                for (
                  ;
                  !(ge = (St = Jt.call(st)).done) &&
                  (he.push(St.value), he.length !== W);
                  ge = !0
                );
            } catch (ze) {
              (Xe = !0), (Bt = ze);
            } finally {
              try {
                if (
                  !ge &&
                  st.return != null &&
                  ((re = st.return()), Object(re) !== re)
                )
                  return;
              } finally {
                if (Xe) throw Bt;
              }
            }
            return he;
          }
        }
        function jn(T) {
          if (Array.isArray(T)) return T;
        }
        function Wn(T) {
          return Zn(T) || Rn(T) || In(T) || Nn();
        }
        function Nn() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function In(T, W) {
          if (T) {
            if (typeof T == "string") return fr(T, W);
            var st = Object.prototype.toString.call(T).slice(8, -1);
            if (
              (st === "Object" && T.constructor && (st = T.constructor.name),
              st === "Map" || st === "Set")
            )
              return Array.from(T);
            if (
              st === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(st)
            )
              return fr(T, W);
          }
        }
        function Rn(T) {
          if (
            (typeof Symbol < "u" && T[Symbol.iterator] != null) ||
            T["@@iterator"] != null
          )
            return Array.from(T);
        }
        function Zn(T) {
          if (Array.isArray(T)) return fr(T);
        }
        function fr(T, W) {
          (W == null || W > T.length) && (W = T.length);
          for (var st = 0, St = new Array(W); st < W; st++) St[st] = T[st];
          return St;
        }
        var dr = 1e-4,
          hr = function (W, st) {
            return [0, 3 * W, 3 * st - 6 * W, 3 * W - 3 * st + 1];
          },
          br = function (W, st) {
            return W.map(function (St, Bt) {
              return St * Math.pow(st, Bt);
            }).reduce(function (St, Bt) {
              return St + Bt;
            });
          },
          Jr = function (W, st) {
            return function (St) {
              var Bt = hr(W, st);
              return br(Bt, St);
            };
          },
          Fn = function (W, st) {
            return function (St) {
              var Bt = hr(W, st),
                Jt = [].concat(
                  Wn(
                    Bt.map(function (re, he) {
                      return re * he;
                    }).slice(1),
                  ),
                  [0],
                );
              return br(Jt, St);
            };
          },
          er = function () {
            for (
              var W = arguments.length, st = new Array(W), St = 0;
              St < W;
              St++
            )
              st[St] = arguments[St];
            var Bt = st[0],
              Jt = st[1],
              re = st[2],
              he = st[3];
            if (st.length === 1)
              switch (st[0]) {
                case "linear":
                  (Bt = 0), (Jt = 0), (re = 1), (he = 1);
                  break;
                case "ease":
                  (Bt = 0.25), (Jt = 0.1), (re = 0.25), (he = 1);
                  break;
                case "ease-in":
                  (Bt = 0.42), (Jt = 0), (re = 1), (he = 1);
                  break;
                case "ease-out":
                  (Bt = 0.42), (Jt = 0), (re = 0.58), (he = 1);
                  break;
                case "ease-in-out":
                  (Bt = 0), (Jt = 0), (re = 0.58), (he = 1);
                  break;
                default: {
                  var ge = st[0].split("(");
                  if (
                    ge[0] === "cubic-bezier" &&
                    ge[1].split(")")[0].split(",").length === 4
                  ) {
                    var Xe = ge[1]
                        .split(")")[0]
                        .split(",")
                        .map(function (Se) {
                          return parseFloat(Se);
                        }),
                      ze = bn(Xe, 4);
                    (Bt = ze[0]), (Jt = ze[1]), (re = ze[2]), (he = ze[3]);
                  } else
                    tn(
                      !1,
                      "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s",
                      st,
                    );
                }
              }
            tn(
              [Bt, re, Jt, he].every(function (Se) {
                return typeof Se == "number" && Se >= 0 && Se <= 1;
              }),
              "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s",
              st,
            );
            var en = Jr(Bt, re),
              nn = Jr(Jt, he),
              An = Fn(Bt, re),
              Sn = function (Re) {
                return Re > 1 ? 1 : Re < 0 ? 0 : Re;
              },
              hn = function (Re) {
                for (var He = Re > 1 ? 1 : Re, En = He, cn = 0; cn < 8; ++cn) {
                  var pn = en(En) - He,
                    $t = An(En);
                  if (Math.abs(pn - He) < dr || $t < dr) return nn(En);
                  En = Sn(En - pn / $t);
                }
                return nn(En);
              };
            return (hn.isStepper = !1), hn;
          },
          Br = function () {
            var W =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              st = W.stiff,
              St = st === void 0 ? 100 : st,
              Bt = W.damping,
              Jt = Bt === void 0 ? 8 : Bt,
              re = W.dt,
              he = re === void 0 ? 17 : re,
              ge = function (ze, en, nn) {
                var An = -(ze - en) * St,
                  Sn = nn * Jt,
                  hn = nn + ((An - Sn) * he) / 1e3,
                  Se = (nn * he) / 1e3 + ze;
                return Math.abs(Se - en) < dr && Math.abs(hn) < dr
                  ? [en, 0]
                  : [Se, hn];
              };
            return (ge.isStepper = !0), (ge.dt = he), ge;
          },
          $n = function () {
            for (
              var W = arguments.length, st = new Array(W), St = 0;
              St < W;
              St++
            )
              st[St] = arguments[St];
            var Bt = st[0];
            if (typeof Bt == "string")
              switch (Bt) {
                case "ease":
                case "ease-in-out":
                case "ease-out":
                case "ease-in":
                case "linear":
                  return er(Bt);
                case "spring":
                  return Br();
                default:
                  if (Bt.split("(")[0] === "cubic-bezier") return er(Bt);
                  tn(
                    !1,
                    "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s",
                    st,
                  );
              }
            return typeof Bt == "function"
              ? Bt
              : (tn(
                  !1,
                  "[configEasing]: first argument type should be function or string, instead received %s",
                  st,
                ),
                null);
          };
        function zn(T) {
          "@babel/helpers - typeof";
          return (
            (zn =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (W) {
                    return typeof W;
                  }
                : function (W) {
                    return W &&
                      typeof Symbol == "function" &&
                      W.constructor === Symbol &&
                      W !== Symbol.prototype
                      ? "symbol"
                      : typeof W;
                  }),
            zn(T)
          );
        }
        function Kn(T) {
          return xr(T) || nr(T) || Or(T) || Tr();
        }
        function Tr() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function nr(T) {
          if (
            (typeof Symbol < "u" && T[Symbol.iterator] != null) ||
            T["@@iterator"] != null
          )
            return Array.from(T);
        }
        function xr(T) {
          if (Array.isArray(T)) return Ar(T);
        }
        function rr(T, W) {
          var st = Object.keys(T);
          if (Object.getOwnPropertySymbols) {
            var St = Object.getOwnPropertySymbols(T);
            W &&
              (St = St.filter(function (Bt) {
                return Object.getOwnPropertyDescriptor(T, Bt).enumerable;
              })),
              st.push.apply(st, St);
          }
          return st;
        }
        function dn(T) {
          for (var W = 1; W < arguments.length; W++) {
            var st = arguments[W] != null ? arguments[W] : {};
            W % 2
              ? rr(Object(st), !0).forEach(function (St) {
                  Ln(T, St, st[St]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    T,
                    Object.getOwnPropertyDescriptors(st),
                  )
                : rr(Object(st)).forEach(function (St) {
                    Object.defineProperty(
                      T,
                      St,
                      Object.getOwnPropertyDescriptor(st, St),
                    );
                  });
          }
          return T;
        }
        function Ln(T, W, st) {
          return (
            (W = kn(W)),
            W in T
              ? Object.defineProperty(T, W, {
                  value: st,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (T[W] = st),
            T
          );
        }
        function kn(T) {
          var W = Qn(T, "string");
          return zn(W) === "symbol" ? W : String(W);
        }
        function Qn(T, W) {
          if (zn(T) !== "object" || T === null) return T;
          var st = T[Symbol.toPrimitive];
          if (st !== void 0) {
            var St = st.call(T, W || "default");
            if (zn(St) !== "object") return St;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (W === "string" ? String : Number)(T);
        }
        function Nr(T, W) {
          return wn(T) || Zr(T, W) || Or(T, W) || pi();
        }
        function pi() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Or(T, W) {
          if (T) {
            if (typeof T == "string") return Ar(T, W);
            var st = Object.prototype.toString.call(T).slice(8, -1);
            if (
              (st === "Object" && T.constructor && (st = T.constructor.name),
              st === "Map" || st === "Set")
            )
              return Array.from(T);
            if (
              st === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(st)
            )
              return Ar(T, W);
          }
        }
        function Ar(T, W) {
          (W == null || W > T.length) && (W = T.length);
          for (var st = 0, St = new Array(W); st < W; st++) St[st] = T[st];
          return St;
        }
        function Zr(T, W) {
          var st =
            T == null
              ? null
              : (typeof Symbol < "u" && T[Symbol.iterator]) || T["@@iterator"];
          if (st != null) {
            var St,
              Bt,
              Jt,
              re,
              he = [],
              ge = !0,
              Xe = !1;
            try {
              if (((Jt = (st = st.call(T)).next), W === 0)) {
                if (Object(st) !== st) return;
                ge = !1;
              } else
                for (
                  ;
                  !(ge = (St = Jt.call(st)).done) &&
                  (he.push(St.value), he.length !== W);
                  ge = !0
                );
            } catch (ze) {
              (Xe = !0), (Bt = ze);
            } finally {
              try {
                if (
                  !ge &&
                  st.return != null &&
                  ((re = st.return()), Object(re) !== re)
                )
                  return;
              } finally {
                if (Xe) throw Bt;
              }
            }
            return he;
          }
        }
        function wn(T) {
          if (Array.isArray(T)) return T;
        }
        var pr = function (W, st, St) {
            return W + (st - W) * St;
          },
          Pr = function (W) {
            var st = W.from,
              St = W.to;
            return st !== St;
          },
          ir = function T(W, st, St) {
            var Bt = qe(function (Jt, re) {
              if (Pr(re)) {
                var he = W(re.from, re.to, re.velocity),
                  ge = Nr(he, 2),
                  Xe = ge[0],
                  ze = ge[1];
                return dn(dn({}, re), {}, { from: Xe, velocity: ze });
              }
              return re;
            }, st);
            return St < 1
              ? qe(function (Jt, re) {
                  return Pr(re)
                    ? dn(
                        dn({}, re),
                        {},
                        {
                          velocity: pr(re.velocity, Bt[Jt].velocity, St),
                          from: pr(re.from, Bt[Jt].from, St),
                        },
                      )
                    : re;
                }, st)
              : T(W, Bt, St - 1);
          };
        const Lr = function (T, W, st, St, Bt) {
          var Jt = Le(T, W),
            re = Jt.reduce(function (Se, Re) {
              return dn(dn({}, Se), {}, Ln({}, Re, [T[Re], W[Re]]));
            }, {}),
            he = Jt.reduce(function (Se, Re) {
              return dn(
                dn({}, Se),
                {},
                Ln({}, Re, { from: T[Re], velocity: 0, to: W[Re] }),
              );
            }, {}),
            ge = -1,
            Xe,
            ze,
            en = function () {
              return null;
            },
            nn = function () {
              return qe(function (Re, He) {
                return He.from;
              }, he);
            },
            An = function () {
              return !Object.values(he).filter(Pr).length;
            },
            Sn = function (Re) {
              Xe || (Xe = Re);
              var He = Re - Xe,
                En = He / st.dt;
              (he = ir(st, he, En)),
                Bt(dn(dn(dn({}, T), W), nn(he))),
                (Xe = Re),
                An() || (ge = requestAnimationFrame(en));
            },
            hn = function (Re) {
              ze || (ze = Re);
              var He = (Re - ze) / St,
                En = qe(function (pn, $t) {
                  return pr.apply(void 0, Kn($t).concat([st(He)]));
                }, re);
              if ((Bt(dn(dn(dn({}, T), W), En)), He < 1))
                ge = requestAnimationFrame(en);
              else {
                var cn = qe(function (pn, $t) {
                  return pr.apply(void 0, Kn($t).concat([st(1)]));
                }, re);
                Bt(dn(dn(dn({}, T), W), cn));
              }
            };
          return (
            (en = st.isStepper ? Sn : hn),
            function () {
              return (
                requestAnimationFrame(en),
                function () {
                  cancelAnimationFrame(ge);
                }
              );
            }
          );
        };
        function ar(T) {
          "@babel/helpers - typeof";
          return (
            (ar =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (W) {
                    return typeof W;
                  }
                : function (W) {
                    return W &&
                      typeof Symbol == "function" &&
                      W.constructor === Symbol &&
                      W !== Symbol.prototype
                      ? "symbol"
                      : typeof W;
                  }),
            ar(T)
          );
        }
        var vi = [
          "children",
          "begin",
          "duration",
          "attributeName",
          "easing",
          "isActive",
          "steps",
          "from",
          "to",
          "canBegin",
          "onAnimationEnd",
          "shouldReAnimate",
          "onAnimationReStart",
        ];
        function Ur(T, W) {
          if (T == null) return {};
          var st = Ii(T, W),
            St,
            Bt;
          if (Object.getOwnPropertySymbols) {
            var Jt = Object.getOwnPropertySymbols(T);
            for (Bt = 0; Bt < Jt.length; Bt++)
              (St = Jt[Bt]),
                !(W.indexOf(St) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(T, St) &&
                  (st[St] = T[St]);
          }
          return st;
        }
        function Ii(T, W) {
          if (T == null) return {};
          var st = {},
            St = Object.keys(T),
            Bt,
            Jt;
          for (Jt = 0; Jt < St.length; Jt++)
            (Bt = St[Jt]), !(W.indexOf(Bt) >= 0) && (st[Bt] = T[Bt]);
          return st;
        }
        function Mr(T) {
          return Cr(T) || Bi(T) || Qr(T) || Ri();
        }
        function Ri() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function Qr(T, W) {
          if (T) {
            if (typeof T == "string") return yi(T, W);
            var st = Object.prototype.toString.call(T).slice(8, -1);
            if (
              (st === "Object" && T.constructor && (st = T.constructor.name),
              st === "Map" || st === "Set")
            )
              return Array.from(T);
            if (
              st === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(st)
            )
              return yi(T, W);
          }
        }
        function Bi(T) {
          if (
            (typeof Symbol < "u" && T[Symbol.iterator] != null) ||
            T["@@iterator"] != null
          )
            return Array.from(T);
        }
        function Cr(T) {
          if (Array.isArray(T)) return yi(T);
        }
        function yi(T, W) {
          (W == null || W > T.length) && (W = T.length);
          for (var st = 0, St = new Array(W); st < W; st++) St[st] = T[st];
          return St;
        }
        function Dr(T, W) {
          var st = Object.keys(T);
          if (Object.getOwnPropertySymbols) {
            var St = Object.getOwnPropertySymbols(T);
            W &&
              (St = St.filter(function (Bt) {
                return Object.getOwnPropertyDescriptor(T, Bt).enumerable;
              })),
              st.push.apply(st, St);
          }
          return st;
        }
        function Xn(T) {
          for (var W = 1; W < arguments.length; W++) {
            var st = arguments[W] != null ? arguments[W] : {};
            W % 2
              ? Dr(Object(st), !0).forEach(function (St) {
                  vr(T, St, st[St]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    T,
                    Object.getOwnPropertyDescriptors(st),
                  )
                : Dr(Object(st)).forEach(function (St) {
                    Object.defineProperty(
                      T,
                      St,
                      Object.getOwnPropertyDescriptor(st, St),
                    );
                  });
          }
          return T;
        }
        function vr(T, W, st) {
          return (
            (W = Er(W)),
            W in T
              ? Object.defineProperty(T, W, {
                  value: st,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (T[W] = st),
            T
          );
        }
        function Ni(T, W) {
          if (!(T instanceof W))
            throw new TypeError("Cannot call a class as a function");
        }
        function or(T, W) {
          for (var st = 0; st < W.length; st++) {
            var St = W[st];
            (St.enumerable = St.enumerable || !1),
              (St.configurable = !0),
              "value" in St && (St.writable = !0),
              Object.defineProperty(T, Er(St.key), St);
          }
        }
        function ur(T, W, st) {
          return (
            W && or(T.prototype, W),
            st && or(T, st),
            Object.defineProperty(T, "prototype", { writable: !1 }),
            T
          );
        }
        function Er(T) {
          var W = Wr(T, "string");
          return ar(W) === "symbol" ? W : String(W);
        }
        function Wr(T, W) {
          if (ar(T) !== "object" || T === null) return T;
          var st = T[Symbol.toPrimitive];
          if (st !== void 0) {
            var St = st.call(T, W || "default");
            if (ar(St) !== "object") return St;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (W === "string" ? String : Number)(T);
        }
        function wi(T, W) {
          if (typeof W != "function" && W !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (T.prototype = Object.create(W && W.prototype, {
            constructor: { value: T, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(T, "prototype", { writable: !1 }),
            W && lr(T, W);
        }
        function lr(T, W) {
          return (
            (lr = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (St, Bt) {
                  return (St.__proto__ = Bt), St;
                }),
            lr(T, W)
          );
        }
        function Si(T) {
          var W = Li();
          return function () {
            var St = ei(T),
              Bt;
            if (W) {
              var Jt = ei(this).constructor;
              Bt = Reflect.construct(St, arguments, Jt);
            } else Bt = St.apply(this, arguments);
            return qr(this, Bt);
          };
        }
        function qr(T, W) {
          if (W && (ar(W) === "object" || typeof W == "function")) return W;
          if (W !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return ti(T);
        }
        function ti(T) {
          if (T === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return T;
        }
        function Li() {
          if (
            typeof Reflect > "u" ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch {
            return !1;
          }
        }
        function ei(T) {
          return (
            (ei = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (st) {
                  return st.__proto__ || Object.getPrototypeOf(st);
                }),
            ei(T)
          );
        }
        var sr = (function (T) {
          wi(st, T);
          var W = Si(st);
          function st(St, Bt) {
            var Jt;
            Ni(this, st), (Jt = W.call(this, St, Bt));
            var re = Jt.props,
              he = re.isActive,
              ge = re.attributeName,
              Xe = re.from,
              ze = re.to,
              en = re.steps,
              nn = re.children,
              An = re.duration;
            if (
              ((Jt.handleStyleChange = Jt.handleStyleChange.bind(ti(Jt))),
              (Jt.changeStyle = Jt.changeStyle.bind(ti(Jt))),
              !he || An <= 0)
            )
              return (
                (Jt.state = { style: {} }),
                typeof nn == "function" && (Jt.state = { style: ze }),
                qr(Jt)
              );
            if (en && en.length) Jt.state = { style: en[0].style };
            else if (Xe) {
              if (typeof nn == "function")
                return (Jt.state = { style: Xe }), qr(Jt);
              Jt.state = { style: ge ? vr({}, ge, Xe) : Xe };
            } else Jt.state = { style: {} };
            return Jt;
          }
          return (
            ur(st, [
              {
                key: "componentDidMount",
                value: function () {
                  var Bt = this.props,
                    Jt = Bt.isActive,
                    re = Bt.canBegin;
                  (this.mounted = !0),
                    !(!Jt || !re) && this.runAnimation(this.props);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (Bt) {
                  var Jt = this.props,
                    re = Jt.isActive,
                    he = Jt.canBegin,
                    ge = Jt.attributeName,
                    Xe = Jt.shouldReAnimate,
                    ze = Jt.to,
                    en = Jt.from,
                    nn = this.state.style;
                  if (he) {
                    if (!re) {
                      var An = { style: ge ? vr({}, ge, ze) : ze };
                      this.state &&
                        nn &&
                        ((ge && nn[ge] !== ze) || (!ge && nn !== ze)) &&
                        this.setState(An);
                      return;
                    }
                    if (!(ct(Bt.to, ze) && Bt.canBegin && Bt.isActive)) {
                      var Sn = !Bt.canBegin || !Bt.isActive;
                      this.manager && this.manager.stop(),
                        this.stopJSAnimation && this.stopJSAnimation();
                      var hn = Sn || Xe ? en : Bt.to;
                      if (this.state && nn) {
                        var Se = { style: ge ? vr({}, ge, hn) : hn };
                        ((ge && nn[ge] !== hn) || (!ge && nn !== hn)) &&
                          this.setState(Se);
                      }
                      this.runAnimation(
                        Xn(Xn({}, this.props), {}, { from: hn, begin: 0 }),
                      );
                    }
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.mounted = !1;
                  var Bt = this.props.onAnimationEnd;
                  this.unSubscribe && this.unSubscribe(),
                    this.manager &&
                      (this.manager.stop(), (this.manager = null)),
                    this.stopJSAnimation && this.stopJSAnimation(),
                    Bt && Bt();
                },
              },
              {
                key: "handleStyleChange",
                value: function (Bt) {
                  this.changeStyle(Bt);
                },
              },
              {
                key: "changeStyle",
                value: function (Bt) {
                  this.mounted && this.setState({ style: Bt });
                },
              },
              {
                key: "runJSAnimation",
                value: function (Bt) {
                  var Jt = this,
                    re = Bt.from,
                    he = Bt.to,
                    ge = Bt.duration,
                    Xe = Bt.easing,
                    ze = Bt.begin,
                    en = Bt.onAnimationEnd,
                    nn = Bt.onAnimationStart,
                    An = Lr(re, he, $n(Xe), ge, this.changeStyle),
                    Sn = function () {
                      Jt.stopJSAnimation = An();
                    };
                  this.manager.start([nn, ze, Sn, ge, en]);
                },
              },
              {
                key: "runStepAnimation",
                value: function (Bt) {
                  var Jt = this,
                    re = Bt.steps,
                    he = Bt.begin,
                    ge = Bt.onAnimationStart,
                    Xe = re[0],
                    ze = Xe.style,
                    en = Xe.duration,
                    nn = en === void 0 ? 0 : en,
                    An = function (hn, Se, Re) {
                      if (Re === 0) return hn;
                      var He = Se.duration,
                        En = Se.easing,
                        cn = En === void 0 ? "ease" : En,
                        pn = Se.style,
                        $t = Se.properties,
                        Ie = Se.onAnimationEnd,
                        yr = Re > 0 ? re[Re - 1] : Se,
                        Kr = $t || Object.keys(pn);
                      if (typeof cn == "function" || cn === "spring")
                        return [].concat(Mr(hn), [
                          Jt.runJSAnimation.bind(Jt, {
                            from: yr.style,
                            to: pn,
                            duration: He,
                            easing: cn,
                          }),
                          He,
                        ]);
                      var ni = on(Kr, He, cn),
                        ri = Xn(
                          Xn(Xn({}, yr.style), pn),
                          {},
                          { transition: ni },
                        );
                      return [].concat(Mr(hn), [ri, He, Ie]).filter(Pe);
                    };
                  return this.manager.start(
                    [ge].concat(Mr(re.reduce(An, [ze, Math.max(nn, he)])), [
                      Bt.onAnimationEnd,
                    ]),
                  );
                },
              },
              {
                key: "runAnimation",
                value: function (Bt) {
                  this.manager || (this.manager = qt());
                  var Jt = Bt.begin,
                    re = Bt.duration,
                    he = Bt.attributeName,
                    ge = Bt.to,
                    Xe = Bt.easing,
                    ze = Bt.onAnimationStart,
                    en = Bt.onAnimationEnd,
                    nn = Bt.steps,
                    An = Bt.children,
                    Sn = this.manager;
                  if (
                    ((this.unSubscribe = Sn.subscribe(this.handleStyleChange)),
                    typeof Xe == "function" ||
                      typeof An == "function" ||
                      Xe === "spring")
                  ) {
                    this.runJSAnimation(Bt);
                    return;
                  }
                  if (nn.length > 1) {
                    this.runStepAnimation(Bt);
                    return;
                  }
                  var hn = he ? vr({}, he, ge) : ge,
                    Se = on(Object.keys(hn), re, Xe);
                  Sn.start([
                    ze,
                    Jt,
                    Xn(Xn({}, hn), {}, { transition: Se }),
                    re,
                    en,
                  ]);
                },
              },
              {
                key: "render",
                value: function () {
                  var Bt = this.props,
                    Jt = Bt.children,
                    re = Bt.begin,
                    he = Bt.duration,
                    ge = Bt.attributeName,
                    Xe = Bt.easing,
                    ze = Bt.isActive,
                    en = Bt.steps,
                    nn = Bt.from,
                    An = Bt.to,
                    Sn = Bt.canBegin,
                    hn = Bt.onAnimationEnd,
                    Se = Bt.shouldReAnimate,
                    Re = Bt.onAnimationReStart,
                    He = Ur(Bt, vi),
                    En = s.Children.count(Jt),
                    cn = this.state.style;
                  if (typeof Jt == "function") return Jt(cn);
                  if (!ze || En === 0 || he <= 0) return Jt;
                  var pn = function (Ie) {
                    var yr = Ie.props,
                      Kr = yr.style,
                      ni = Kr === void 0 ? {} : Kr,
                      ri = yr.className,
                      mi = (0, s.cloneElement)(
                        Ie,
                        Xn(
                          Xn({}, He),
                          {},
                          { style: Xn(Xn({}, ni), cn), className: ri },
                        ),
                      );
                    return mi;
                  };
                  return En === 1
                    ? pn(s.Children.only(Jt))
                    : s.createElement(
                        "div",
                        null,
                        s.Children.map(Jt, function ($t) {
                          return pn($t);
                        }),
                      );
                },
              },
            ]),
            st
          );
        })(s.PureComponent);
        (sr.displayName = "Animate"),
          (sr.defaultProps = {
            begin: 0,
            duration: 1e3,
            from: "",
            to: "",
            attributeName: "",
            easing: "ease",
            isActive: !0,
            canBegin: !0,
            steps: [],
            onAnimationEnd: function () {},
            onAnimationStart: function () {},
          }),
          (sr.propTypes = {
            from: K().oneOfType([K().object, K().string]),
            to: K().oneOfType([K().object, K().string]),
            attributeName: K().string,
            duration: K().number,
            begin: K().number,
            easing: K().oneOfType([K().string, K().func]),
            steps: K().arrayOf(
              K().shape({
                duration: K().number.isRequired,
                style: K().object.isRequired,
                easing: K().oneOfType([
                  K().oneOf([
                    "ease",
                    "ease-in",
                    "ease-out",
                    "ease-in-out",
                    "linear",
                  ]),
                  K().func,
                ]),
                properties: K().arrayOf("string"),
                onAnimationEnd: K().func,
              }),
            ),
            children: K().oneOfType([K().node, K().func]),
            isActive: K().bool,
            canBegin: K().bool,
            onAnimationEnd: K().func,
            shouldReAnimate: K().bool,
            onAnimationStart: K().func,
            onAnimationReStart: K().func,
          });
        const Ti = sr;
      },
      34164: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A: () => K });
        function s(q) {
          var U,
            Q,
            z = "";
          if (typeof q == "string" || typeof q == "number") z += q;
          else if (typeof q == "object")
            if (Array.isArray(q)) {
              var et = q.length;
              for (U = 0; U < et; U++)
                q[U] && (Q = s(q[U])) && (z && (z += " "), (z += Q));
            } else for (Q in q) q[Q] && (z && (z += " "), (z += Q));
          return z;
        }
        function rt() {
          for (var q, U, Q = 0, z = "", et = arguments.length; Q < et; Q++)
            (q = arguments[Q]) && (U = s(q)) && (z && (z += " "), (z += U));
          return z;
        }
        const K = rt;
      },
      25705: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { Ay: () => Mt, Qh: () => g });
        function s(o, p, b) {
          (o.prototype = p.prototype = b), (b.constructor = o);
        }
        function rt(o, p) {
          var b = Object.create(o.prototype);
          for (var R in p) b[R] = p[R];
          return b;
        }
        function K() {}
        var q = 0.7,
          U = 1 / q,
          Q = "\\s*([+-]?\\d+)\\s*",
          z = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          ot = /^#([0-9a-f]{3,8})$/,
          at = new RegExp(`^rgb\\(${Q},${Q},${Q}\\)$`),
          it = new RegExp(`^rgb\\(${et},${et},${et}\\)$`),
          F = new RegExp(`^rgba\\(${Q},${Q},${Q},${z}\\)$`),
          dt = new RegExp(`^rgba\\(${et},${et},${et},${z}\\)$`),
          V = new RegExp(`^hsl\\(${z},${et},${et}\\)$`),
          pt = new RegExp(`^hsla\\(${z},${et},${et},${z}\\)$`),
          Pt = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        s(K, Mt, {
          copy(o) {
            return Object.assign(new this.constructor(), this, o);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: L,
          formatHex: L,
          formatHex8: Kt,
          formatHsl: Dt,
          formatRgb: wt,
          toString: wt,
        });
        function L() {
          return this.rgb().formatHex();
        }
        function Kt() {
          return this.rgb().formatHex8();
        }
        function Dt() {
          return P(this).formatHsl();
        }
        function wt() {
          return this.rgb().formatRgb();
        }
        function Mt(o) {
          var p, b;
          return (
            (o = (o + "").trim().toLowerCase()),
            (p = ot.exec(o))
              ? ((b = p[1].length),
                (p = parseInt(p[1], 16)),
                b === 6
                  ? $(p)
                  : b === 3
                    ? new v(
                        ((p >> 8) & 15) | ((p >> 4) & 240),
                        ((p >> 4) & 15) | (p & 240),
                        ((p & 15) << 4) | (p & 15),
                        1,
                      )
                    : b === 8
                      ? w(
                          (p >> 24) & 255,
                          (p >> 16) & 255,
                          (p >> 8) & 255,
                          (p & 255) / 255,
                        )
                      : b === 4
                        ? w(
                            ((p >> 12) & 15) | ((p >> 8) & 240),
                            ((p >> 8) & 15) | ((p >> 4) & 240),
                            ((p >> 4) & 15) | (p & 240),
                            (((p & 15) << 4) | (p & 15)) / 255,
                          )
                        : null)
              : (p = at.exec(o))
                ? new v(p[1], p[2], p[3], 1)
                : (p = it.exec(o))
                  ? new v(
                      (p[1] * 255) / 100,
                      (p[2] * 255) / 100,
                      (p[3] * 255) / 100,
                      1,
                    )
                  : (p = F.exec(o))
                    ? w(p[1], p[2], p[3], p[4])
                    : (p = dt.exec(o))
                      ? w(
                          (p[1] * 255) / 100,
                          (p[2] * 255) / 100,
                          (p[3] * 255) / 100,
                          p[4],
                        )
                      : (p = V.exec(o))
                        ? bt(p[1], p[2] / 100, p[3] / 100, 1)
                        : (p = pt.exec(o))
                          ? bt(p[1], p[2] / 100, p[3] / 100, p[4])
                          : Pt.hasOwnProperty(o)
                            ? $(Pt[o])
                            : o === "transparent"
                              ? new v(NaN, NaN, NaN, 0)
                              : null
          );
        }
        function $(o) {
          return new v((o >> 16) & 255, (o >> 8) & 255, o & 255, 1);
        }
        function w(o, p, b, R) {
          return R <= 0 && (o = p = b = NaN), new v(o, p, b, R);
        }
        function M(o) {
          return (
            o instanceof K || (o = Mt(o)),
            o ? ((o = o.rgb()), new v(o.r, o.g, o.b, o.opacity)) : new v()
          );
        }
        function g(o, p, b, R) {
          return arguments.length === 1 ? M(o) : new v(o, p, b, R ?? 1);
        }
        function v(o, p, b, R) {
          (this.r = +o), (this.g = +p), (this.b = +b), (this.opacity = +R);
        }
        s(
          v,
          g,
          rt(K, {
            brighter(o) {
              return (
                (o = o == null ? U : Math.pow(U, o)),
                new v(this.r * o, this.g * o, this.b * o, this.opacity)
              );
            },
            darker(o) {
              return (
                (o = o == null ? q : Math.pow(q, o)),
                new v(this.r * o, this.g * o, this.b * o, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new v(B(this.r), B(this.g), B(this.b), C(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: ut,
            formatHex: ut,
            formatHex8: lt,
            formatRgb: Nt,
            toString: Nt,
          }),
        );
        function ut() {
          return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}`;
        }
        function lt() {
          return `#${nt(this.r)}${nt(this.g)}${nt(this.b)}${nt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
        }
        function Nt() {
          const o = C(this.opacity);
          return `${o === 1 ? "rgb(" : "rgba("}${B(this.r)}, ${B(this.g)}, ${B(this.b)}${o === 1 ? ")" : `, ${o})`}`;
        }
        function C(o) {
          return isNaN(o) ? 1 : Math.max(0, Math.min(1, o));
        }
        function B(o) {
          return Math.max(0, Math.min(255, Math.round(o) || 0));
        }
        function nt(o) {
          return (o = B(o)), (o < 16 ? "0" : "") + o.toString(16);
        }
        function bt(o, p, b, R) {
          return (
            R <= 0
              ? (o = p = b = NaN)
              : b <= 0 || b >= 1
                ? (o = p = NaN)
                : p <= 0 && (o = NaN),
            new S(o, p, b, R)
          );
        }
        function P(o) {
          if (o instanceof S) return new S(o.h, o.s, o.l, o.opacity);
          if ((o instanceof K || (o = Mt(o)), !o)) return new S();
          if (o instanceof S) return o;
          o = o.rgb();
          var p = o.r / 255,
            b = o.g / 255,
            R = o.b / 255,
            J = Math.min(p, b, R),
            Y = Math.max(p, b, R),
            It = NaN,
            Z = Y - J,
            vt = (Y + J) / 2;
          return (
            Z
              ? (p === Y
                  ? (It = (b - R) / Z + (b < R) * 6)
                  : b === Y
                    ? (It = (R - p) / Z + 2)
                    : (It = (p - b) / Z + 4),
                (Z /= vt < 0.5 ? Y + J : 2 - Y - J),
                (It *= 60))
              : (Z = vt > 0 && vt < 1 ? 0 : It),
            new S(It, Z, vt, o.opacity)
          );
        }
        function m(o, p, b, R) {
          return arguments.length === 1 ? P(o) : new S(o, p, b, R ?? 1);
        }
        function S(o, p, b, R) {
          (this.h = +o), (this.s = +p), (this.l = +b), (this.opacity = +R);
        }
        s(
          S,
          m,
          rt(K, {
            brighter(o) {
              return (
                (o = o == null ? U : Math.pow(U, o)),
                new S(this.h, this.s, this.l * o, this.opacity)
              );
            },
            darker(o) {
              return (
                (o = o == null ? q : Math.pow(q, o)),
                new S(this.h, this.s, this.l * o, this.opacity)
              );
            },
            rgb() {
              var o = (this.h % 360) + (this.h < 0) * 360,
                p = isNaN(o) || isNaN(this.s) ? 0 : this.s,
                b = this.l,
                R = b + (b < 0.5 ? b : 1 - b) * p,
                J = 2 * b - R;
              return new v(
                c(o >= 240 ? o - 240 : o + 120, J, R),
                c(o, J, R),
                c(o < 120 ? o + 240 : o - 120, J, R),
                this.opacity,
              );
            },
            clamp() {
              return new S(_(this.h), E(this.s), E(this.l), C(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              const o = C(this.opacity);
              return `${o === 1 ? "hsl(" : "hsla("}${_(this.h)}, ${E(this.s) * 100}%, ${E(this.l) * 100}%${o === 1 ? ")" : `, ${o})`}`;
            },
          }),
        );
        function _(o) {
          return (o = (o || 0) % 360), o < 0 ? o + 360 : o;
        }
        function E(o) {
          return Math.max(0, Math.min(1, o || 0));
        }
        function c(o, p, b) {
          return (
            (o < 60
              ? p + ((b - p) * o) / 60
              : o < 180
                ? b
                : o < 240
                  ? p + ((b - p) * (240 - o)) / 60
                  : p) * 255
          );
        }
      },
      47180: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A: () => s });
        const s = (rt) => () => rt;
      },
      55797: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A: () => s });
        function s(rt, K) {
          return (
            (rt = +rt),
            (K = +K),
            function (q) {
              return rt * (1 - q) + K * q;
            }
          );
        }
      },
      92789: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { Ay: () => it });
        var s = n(25705);
        function rt(pt, Pt, L, Kt, Dt) {
          var wt = pt * pt,
            Mt = wt * pt;
          return (
            ((1 - 3 * pt + 3 * wt - Mt) * Pt +
              (4 - 6 * wt + 3 * Mt) * L +
              (1 + 3 * pt + 3 * wt - 3 * Mt) * Kt +
              Mt * Dt) /
            6
          );
        }
        function K(pt) {
          var Pt = pt.length - 1;
          return function (L) {
            var Kt =
                L <= 0
                  ? (L = 0)
                  : L >= 1
                    ? ((L = 1), Pt - 1)
                    : Math.floor(L * Pt),
              Dt = pt[Kt],
              wt = pt[Kt + 1],
              Mt = Kt > 0 ? pt[Kt - 1] : 2 * Dt - wt,
              $ = Kt < Pt - 1 ? pt[Kt + 2] : 2 * wt - Dt;
            return rt((L - Kt / Pt) * Pt, Mt, Dt, wt, $);
          };
        }
        function q(pt) {
          var Pt = pt.length;
          return function (L) {
            var Kt = Math.floor(((L %= 1) < 0 ? ++L : L) * Pt),
              Dt = pt[(Kt + Pt - 1) % Pt],
              wt = pt[Kt % Pt],
              Mt = pt[(Kt + 1) % Pt],
              $ = pt[(Kt + 2) % Pt];
            return rt((L - Kt / Pt) * Pt, Dt, wt, Mt, $);
          };
        }
        var U = n(47180);
        function Q(pt, Pt) {
          return function (L) {
            return pt + L * Pt;
          };
        }
        function z(pt, Pt, L) {
          return (
            (pt = Math.pow(pt, L)),
            (Pt = Math.pow(Pt, L) - pt),
            (L = 1 / L),
            function (Kt) {
              return Math.pow(pt + Kt * Pt, L);
            }
          );
        }
        function et(pt, Pt) {
          var L = Pt - pt;
          return L
            ? Q(pt, L > 180 || L < -180 ? L - 360 * Math.round(L / 360) : L)
            : constant(isNaN(pt) ? Pt : pt);
        }
        function ot(pt) {
          return (pt = +pt) == 1
            ? at
            : function (Pt, L) {
                return L - Pt ? z(Pt, L, pt) : (0, U.A)(isNaN(Pt) ? L : Pt);
              };
        }
        function at(pt, Pt) {
          var L = Pt - pt;
          return L ? Q(pt, L) : (0, U.A)(isNaN(pt) ? Pt : pt);
        }
        const it = (function pt(Pt) {
          var L = ot(Pt);
          function Kt(Dt, wt) {
            var Mt = L((Dt = (0, s.Qh)(Dt)).r, (wt = (0, s.Qh)(wt)).r),
              $ = L(Dt.g, wt.g),
              w = L(Dt.b, wt.b),
              M = at(Dt.opacity, wt.opacity);
            return function (g) {
              return (
                (Dt.r = Mt(g)),
                (Dt.g = $(g)),
                (Dt.b = w(g)),
                (Dt.opacity = M(g)),
                Dt + ""
              );
            };
          }
          return (Kt.gamma = pt), Kt;
        })(1);
        function F(pt) {
          return function (Pt) {
            var L = Pt.length,
              Kt = new Array(L),
              Dt = new Array(L),
              wt = new Array(L),
              Mt,
              $;
            for (Mt = 0; Mt < L; ++Mt)
              ($ = (0, s.Qh)(Pt[Mt])),
                (Kt[Mt] = $.r || 0),
                (Dt[Mt] = $.g || 0),
                (wt[Mt] = $.b || 0);
            return (
              (Kt = pt(Kt)),
              (Dt = pt(Dt)),
              (wt = pt(wt)),
              ($.opacity = 1),
              function (w) {
                return ($.r = Kt(w)), ($.g = Dt(w)), ($.b = wt(w)), $ + "";
              }
            );
          };
        }
        var dt = F(K),
          V = F(q);
      },
      14553: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A: () => Q });
        var s = n(55797),
          rt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          K = new RegExp(rt.source, "g");
        function q(z) {
          return function () {
            return z;
          };
        }
        function U(z) {
          return function (et) {
            return z(et) + "";
          };
        }
        function Q(z, et) {
          var ot = (rt.lastIndex = K.lastIndex = 0),
            at,
            it,
            F,
            dt = -1,
            V = [],
            pt = [];
          for (
            z = z + "", et = et + "";
            (at = rt.exec(z)) && (it = K.exec(et));
          )
            (F = it.index) > ot &&
              ((F = et.slice(ot, F)), V[dt] ? (V[dt] += F) : (V[++dt] = F)),
              (at = at[0]) === (it = it[0])
                ? V[dt]
                  ? (V[dt] += it)
                  : (V[++dt] = it)
                : ((V[++dt] = null), pt.push({ i: dt, x: (0, s.A)(at, it) })),
              (ot = K.lastIndex);
          return (
            ot < et.length &&
              ((F = et.slice(ot)), V[dt] ? (V[dt] += F) : (V[++dt] = F)),
            V.length < 2
              ? pt[0]
                ? U(pt[0].x)
                : q(et)
              : ((et = pt.length),
                function (Pt) {
                  for (var L = 0, Kt; L < et; ++L) V[(Kt = pt[L]).i] = Kt.x(Pt);
                  return V.join("");
                })
          );
        }
      },
      28583: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A: () => q, z: () => Q });
        function s(z, et, ot) {
          (z = +z),
            (et = +et),
            (ot =
              (it = arguments.length) < 2
                ? ((et = z), (z = 0), 1)
                : it < 3
                  ? 1
                  : +ot);
          for (
            var at = -1,
              it = Math.max(0, Math.ceil((et - z) / ot)) | 0,
              F = new Array(it);
            ++at < it;
          )
            F[at] = z + at * ot;
          return F;
        }
        var rt = n(34777),
          K = n(97458);
        function q() {
          var z = (0, K.A)().unknown(void 0),
            et = z.domain,
            ot = z.range,
            at = 0,
            it = 1,
            F,
            dt,
            V = !1,
            pt = 0,
            Pt = 0,
            L = 0.5;
          delete z.unknown;
          function Kt() {
            var Dt = et().length,
              wt = it < at,
              Mt = wt ? it : at,
              $ = wt ? at : it;
            (F = ($ - Mt) / Math.max(1, Dt - pt + Pt * 2)),
              V && (F = Math.floor(F)),
              (Mt += ($ - Mt - F * (Dt - pt)) * L),
              (dt = F * (1 - pt)),
              V && ((Mt = Math.round(Mt)), (dt = Math.round(dt)));
            var w = s(Dt).map(function (M) {
              return Mt + F * M;
            });
            return ot(wt ? w.reverse() : w);
          }
          return (
            (z.domain = function (Dt) {
              return arguments.length ? (et(Dt), Kt()) : et();
            }),
            (z.range = function (Dt) {
              return arguments.length
                ? (([at, it] = Dt), (at = +at), (it = +it), Kt())
                : [at, it];
            }),
            (z.rangeRound = function (Dt) {
              return ([at, it] = Dt), (at = +at), (it = +it), (V = !0), Kt();
            }),
            (z.bandwidth = function () {
              return dt;
            }),
            (z.step = function () {
              return F;
            }),
            (z.round = function (Dt) {
              return arguments.length ? ((V = !!Dt), Kt()) : V;
            }),
            (z.padding = function (Dt) {
              return arguments.length
                ? ((pt = Math.min(1, (Pt = +Dt))), Kt())
                : pt;
            }),
            (z.paddingInner = function (Dt) {
              return arguments.length ? ((pt = Math.min(1, Dt)), Kt()) : pt;
            }),
            (z.paddingOuter = function (Dt) {
              return arguments.length ? ((Pt = +Dt), Kt()) : Pt;
            }),
            (z.align = function (Dt) {
              return arguments.length
                ? ((L = Math.max(0, Math.min(1, Dt))), Kt())
                : L;
            }),
            (z.copy = function () {
              return q(et(), [at, it])
                .round(V)
                .paddingInner(pt)
                .paddingOuter(Pt)
                .align(L);
            }),
            rt.C.apply(Kt(), arguments)
          );
        }
        function U(z) {
          var et = z.copy;
          return (
            (z.padding = z.paddingOuter),
            delete z.paddingInner,
            delete z.paddingOuter,
            (z.copy = function () {
              return U(et());
            }),
            z
          );
        }
        function Q() {
          return U(q.apply(null, arguments).paddingInner(1));
        }
      },
      34777: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { C: () => s, K: () => rt });
        function s(K, q) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.range(K);
              break;
            default:
              this.range(q).domain(K);
              break;
          }
          return this;
        }
        function rt(K, q) {
          switch (arguments.length) {
            case 0:
              break;
            case 1: {
              typeof K == "function" ? this.interpolator(K) : this.range(K);
              break;
            }
            default: {
              this.domain(K),
                typeof q == "function" ? this.interpolator(q) : this.range(q);
              break;
            }
          }
          return this;
        }
      },
      97458: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A: () => ot, h: () => et });
        class s extends Map {
          constructor(it, F = Q) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: F },
              }),
              it != null)
            )
              for (const [dt, V] of it) this.set(dt, V);
          }
          get(it) {
            return super.get(K(this, it));
          }
          has(it) {
            return super.has(K(this, it));
          }
          set(it, F) {
            return super.set(q(this, it), F);
          }
          delete(it) {
            return super.delete(U(this, it));
          }
        }
        class rt extends Set {
          constructor(it, F = Q) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: F },
              }),
              it != null)
            )
              for (const dt of it) this.add(dt);
          }
          has(it) {
            return super.has(K(this, it));
          }
          add(it) {
            return super.add(q(this, it));
          }
          delete(it) {
            return super.delete(U(this, it));
          }
        }
        function K({ _intern: at, _key: it }, F) {
          const dt = it(F);
          return at.has(dt) ? at.get(dt) : F;
        }
        function q({ _intern: at, _key: it }, F) {
          const dt = it(F);
          return at.has(dt) ? at.get(dt) : (at.set(dt, F), F);
        }
        function U({ _intern: at, _key: it }, F) {
          const dt = it(F);
          return at.has(dt) && ((F = at.get(dt)), at.delete(dt)), F;
        }
        function Q(at) {
          return at !== null && typeof at == "object" ? at.valueOf() : at;
        }
        var z = n(34777);
        const et = Symbol("implicit");
        function ot() {
          var at = new s(),
            it = [],
            F = [],
            dt = et;
          function V(pt) {
            let Pt = at.get(pt);
            if (Pt === void 0) {
              if (dt !== et) return dt;
              at.set(pt, (Pt = it.push(pt) - 1));
            }
            return F[Pt % F.length];
          }
          return (
            (V.domain = function (pt) {
              if (!arguments.length) return it.slice();
              (it = []), (at = new s());
              for (const Pt of pt) at.has(Pt) || at.set(Pt, it.push(Pt) - 1);
              return V;
            }),
            (V.range = function (pt) {
              return arguments.length ? ((F = Array.from(pt)), V) : F.slice();
            }),
            (V.unknown = function (pt) {
              return arguments.length ? ((dt = pt), V) : dt;
            }),
            (V.copy = function () {
              return ot(it, F).unknown(dt);
            }),
            z.C.apply(V, arguments),
            V
          );
        }
      },
      57949: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A: () => rt });
        var s = Array.prototype.slice;
        function rt(K) {
          return typeof K == "object" && "length" in K ? K : Array.from(K);
        }
      },
      94770: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { A: () => s });
        function s(rt) {
          return function () {
            return rt;
          };
        }
      },
      5823: (Rt, Ct, n) => {
        "use strict";
        n.d(Ct, { i: () => at });
        const s = Math.PI,
          rt = 2 * s,
          K = 1e-6,
          q = rt - K;
        function U(it) {
          this._ += it[0];
          for (let F = 1, dt = it.length; F < dt; ++F)
            this._ += arguments[F] + it[F];
        }
        function Q(it) {
          let F = Math.floor(it);
          if (!(F >= 0)) throw new Error(`invalid digits: ${it}`);
          if (F > 15) return U;
          const dt = 10 ** F;
          return function (V) {
            this._ += V[0];
            for (let pt = 1, Pt = V.length; pt < Pt; ++pt)
              this._ += Math.round(arguments[pt] * dt) / dt + V[pt];
          };
        }
        class z {
          constructor(F) {
            (this._x0 = this._y0 = this._x1 = this._y1 = null),
              (this._ = ""),
              (this._append = F == null ? U : Q(F));
          }
          moveTo(F, dt) {
            this
              ._append`M${(this._x0 = this._x1 = +F)},${(this._y0 = this._y1 = +dt)}`;
          }
          closePath() {
            this._x1 !== null &&
              ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
          }
          lineTo(F, dt) {
            this._append`L${(this._x1 = +F)},${(this._y1 = +dt)}`;
          }
          quadraticCurveTo(F, dt, V, pt) {
            this._append`Q${+F},${+dt},${(this._x1 = +V)},${(this._y1 = +pt)}`;
          }
          bezierCurveTo(F, dt, V, pt, Pt, L) {
            this
              ._append`C${+F},${+dt},${+V},${+pt},${(this._x1 = +Pt)},${(this._y1 = +L)}`;
          }
          arcTo(F, dt, V, pt, Pt) {
            if (
              ((F = +F), (dt = +dt), (V = +V), (pt = +pt), (Pt = +Pt), Pt < 0)
            )
              throw new Error(`negative radius: ${Pt}`);
            let L = this._x1,
              Kt = this._y1,
              Dt = V - F,
              wt = pt - dt,
              Mt = L - F,
              $ = Kt - dt,
              w = Mt * Mt + $ * $;
            if (this._x1 === null)
              this._append`M${(this._x1 = F)},${(this._y1 = dt)}`;
            else if (w > K)
              if (!(Math.abs($ * Dt - wt * Mt) > K) || !Pt)
                this._append`L${(this._x1 = F)},${(this._y1 = dt)}`;
              else {
                let M = V - L,
                  g = pt - Kt,
                  v = Dt * Dt + wt * wt,
                  ut = M * M + g * g,
                  lt = Math.sqrt(v),
                  Nt = Math.sqrt(w),
                  C =
                    Pt *
                    Math.tan((s - Math.acos((v + w - ut) / (2 * lt * Nt))) / 2),
                  B = C / Nt,
                  nt = C / lt;
                Math.abs(B - 1) > K &&
                  this._append`L${F + B * Mt},${dt + B * $}`,
                  this
                    ._append`A${Pt},${Pt},0,0,${+($ * M > Mt * g)},${(this._x1 = F + nt * Dt)},${(this._y1 = dt + nt * wt)}`;
              }
          }
          arc(F, dt, V, pt, Pt, L) {
            if (((F = +F), (dt = +dt), (V = +V), (L = !!L), V < 0))
              throw new Error(`negative radius: ${V}`);
            let Kt = V * Math.cos(pt),
              Dt = V * Math.sin(pt),
              wt = F + Kt,
              Mt = dt + Dt,
              $ = 1 ^ L,
              w = L ? pt - Pt : Pt - pt;
            this._x1 === null
              ? this._append`M${wt},${Mt}`
              : (Math.abs(this._x1 - wt) > K || Math.abs(this._y1 - Mt) > K) &&
                this._append`L${wt},${Mt}`,
              V &&
                (w < 0 && (w = (w % rt) + rt),
                w > q
                  ? this
                      ._append`A${V},${V},0,1,${$},${F - Kt},${dt - Dt}A${V},${V},0,1,${$},${(this._x1 = wt)},${(this._y1 = Mt)}`
                  : w > K &&
                    this
                      ._append`A${V},${V},0,${+(w >= s)},${$},${(this._x1 = F + V * Math.cos(Pt))},${(this._y1 = dt + V * Math.sin(Pt))}`);
          }
          rect(F, dt, V, pt) {
            this
              ._append`M${(this._x0 = this._x1 = +F)},${(this._y0 = this._y1 = +dt)}h${(V = +V)}v${+pt}h${-V}Z`;
          }
          toString() {
            return this._;
          }
        }
        function et() {
          return new z();
        }
        et.prototype = z.prototype;
        function ot(it = 3) {
          return new z(+it);
        }
        function at(it) {
          let F = 3;
          return (
            (it.digits = function (dt) {
              if (!arguments.length) return F;
              if (dt == null) F = null;
              else {
                const V = Math.floor(dt);
                if (!(V >= 0)) throw new RangeError(`invalid digits: ${dt}`);
                F = V;
              }
              return it;
            }),
            () => new z(F)
          );
        }
      },
    },
  ]);
})();
