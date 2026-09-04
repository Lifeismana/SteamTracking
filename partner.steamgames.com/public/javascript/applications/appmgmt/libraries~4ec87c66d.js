/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [1084],
    {
      67406: (le, ne, R) => {
        "use strict";
        R.d(ne, { E: () => K });
        var Y = R(98403),
          Z = R(20283),
          te = R(90150),
          B = R(73077),
          U = R(12260),
          K = (0, Y.gu)({
            chartName: "BarChart",
            GraphicalChild: Z.y,
            defaultTooltipEventType: "axis",
            validateTooltipEventTypes: ["axis", "item"],
            axisComponents: [
              { axisType: "xAxis", AxisComp: te.W },
              { axisType: "yAxis", AxisComp: B.h },
            ],
            formatAxisMap: U.pr,
          });
      },
      62759: (le, ne, R) => {
        "use strict";
        R.d(ne, { b: () => K });
        var Y = R(98403),
          Z = R(90865),
          te = R(90150),
          B = R(73077),
          U = R(12260),
          K = (0, Y.gu)({
            chartName: "LineChart",
            GraphicalChild: Z.N,
            axisComponents: [
              { axisType: "xAxis", AxisComp: te.W },
              { axisType: "yAxis", AxisComp: B.h },
            ],
            formatAxisMap: U.pr,
          });
      },
      22586: function (le) {
        (function (ne, R) {
          le.exports = R();
        })(this, function () {
          "use strict";
          return function (ne, R, Y) {
            R.prototype.isBetween = function (Z, te, B, U) {
              var K = Y(Z),
                ee = Y(te),
                V = (U = U || "()")[0] === "(",
                d = U[1] === ")";
              return (
                ((V ? this.isAfter(K, B) : !this.isBefore(K, B)) &&
                  (d ? this.isBefore(ee, B) : !this.isAfter(ee, B))) ||
                ((V ? this.isBefore(K, B) : !this.isAfter(K, B)) &&
                  (d ? this.isAfter(ee, B) : !this.isBefore(ee, B)))
              );
            };
          };
        });
      },
      20237: function (le) {
        (function (ne, R) {
          le.exports = R();
        })(this, function () {
          "use strict";
          return function (ne, R) {
            R.prototype.isSameOrAfter = function (Y, Z) {
              return this.isSame(Y, Z) || this.isAfter(Y, Z);
            };
          };
        });
      },
      83632: function (le) {
        (function (ne, R) {
          le.exports = R();
        })(this, function () {
          "use strict";
          return function (ne, R) {
            R.prototype.isSameOrBefore = function (Y, Z) {
              return this.isSame(Y, Z) || this.isBefore(Y, Z);
            };
          };
        });
      },
      43334: function (le) {
        (function (ne, R) {
          le.exports = R();
        })(this, function () {
          "use strict";
          return function (ne, R, Y) {
            var Z = R.prototype,
              te = function (V) {
                return V && (V.indexOf ? V : V.s);
              },
              B = function (V, d, Re, be, _) {
                var se = V.name ? V : V.$locale(),
                  Te = te(se[d]),
                  De = te(se[Re]),
                  ce =
                    Te ||
                    De.map(function (Ne) {
                      return Ne.slice(0, be);
                    });
                if (!_) return ce;
                var it = se.weekStart;
                return ce.map(function (Ne, st) {
                  return ce[(st + (it || 0)) % 7];
                });
              },
              U = function () {
                return Y.Ls[Y.locale()];
              },
              K = function (V, d) {
                return (
                  V.formats[d] ||
                  (function (Re) {
                    return Re.replace(
                      /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                      function (be, _, se) {
                        return _ || se.slice(1);
                      },
                    );
                  })(V.formats[d.toUpperCase()])
                );
              },
              ee = function () {
                var V = this;
                return {
                  months: function (d) {
                    return d ? d.format("MMMM") : B(V, "months");
                  },
                  monthsShort: function (d) {
                    return d
                      ? d.format("MMM")
                      : B(V, "monthsShort", "months", 3);
                  },
                  firstDayOfWeek: function () {
                    return V.$locale().weekStart || 0;
                  },
                  weekdays: function (d) {
                    return d ? d.format("dddd") : B(V, "weekdays");
                  },
                  weekdaysMin: function (d) {
                    return d
                      ? d.format("dd")
                      : B(V, "weekdaysMin", "weekdays", 2);
                  },
                  weekdaysShort: function (d) {
                    return d
                      ? d.format("ddd")
                      : B(V, "weekdaysShort", "weekdays", 3);
                  },
                  longDateFormat: function (d) {
                    return K(V.$locale(), d);
                  },
                  meridiem: this.$locale().meridiem,
                  ordinal: this.$locale().ordinal,
                };
              };
            (Z.localeData = function () {
              return ee.bind(this)();
            }),
              (Y.localeData = function () {
                var V = U();
                return {
                  firstDayOfWeek: function () {
                    return V.weekStart || 0;
                  },
                  weekdays: function () {
                    return Y.weekdays();
                  },
                  weekdaysShort: function () {
                    return Y.weekdaysShort();
                  },
                  weekdaysMin: function () {
                    return Y.weekdaysMin();
                  },
                  months: function () {
                    return Y.months();
                  },
                  monthsShort: function () {
                    return Y.monthsShort();
                  },
                  longDateFormat: function (d) {
                    return K(V, d);
                  },
                  meridiem: V.meridiem,
                  ordinal: V.ordinal,
                };
              }),
              (Y.months = function () {
                return B(U(), "months");
              }),
              (Y.monthsShort = function () {
                return B(U(), "monthsShort", "months", 3);
              }),
              (Y.weekdays = function (V) {
                return B(U(), "weekdays", null, null, V);
              }),
              (Y.weekdaysShort = function (V) {
                return B(U(), "weekdaysShort", "weekdays", 3, V);
              }),
              (Y.weekdaysMin = function (V) {
                return B(U(), "weekdaysMin", "weekdays", 2, V);
              });
          };
        });
      },
      39920: function (le) {
        (function (ne, R) {
          le.exports = R();
        })(this, function () {
          "use strict";
          var ne = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          };
          return function (R, Y, Z) {
            var te = Y.prototype,
              B = te.format;
            (Z.en.formats = ne),
              (te.format = function (U) {
                U === void 0 && (U = "YYYY-MM-DDTHH:mm:ssZ");
                var K = this.$locale().formats,
                  ee = (function (V, d) {
                    return V.replace(
                      /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
                      function (Re, be, _) {
                        var se = _ && _.toUpperCase();
                        return (
                          be ||
                          d[_] ||
                          ne[_] ||
                          d[se].replace(
                            /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                            function (Te, De, ce) {
                              return De || ce.slice(1);
                            },
                          )
                        );
                      },
                    );
                  })(U, K === void 0 ? {} : K);
                return B.call(this, ee);
              });
          };
        });
      },
      4042: function (le) {
        (function (ne, R) {
          le.exports = R();
        })(this, function () {
          "use strict";
          return function (ne, R, Y) {
            var Z = function (te, B) {
              if (
                !B ||
                !B.length ||
                (B.length === 1 && !B[0]) ||
                (B.length === 1 && Array.isArray(B[0]) && !B[0].length)
              )
                return null;
              var U;
              B.length === 1 && B[0].length > 0 && (B = B[0]),
                (U = (B = B.filter(function (ee) {
                  return ee;
                }))[0]);
              for (var K = 1; K < B.length; K += 1)
                (B[K].isValid() && !B[K][te](U)) || (U = B[K]);
              return U;
            };
            (Y.max = function () {
              var te = [].slice.call(arguments, 0);
              return Z("isAfter", te);
            }),
              (Y.min = function () {
                var te = [].slice.call(arguments, 0);
                return Z("isBefore", te);
              });
          };
        });
      },
      14240: function (le) {
        (function (ne, R) {
          le.exports = R();
        })(this, function () {
          "use strict";
          var ne = "minute",
            R = /[+-]\d\d(?::?\d\d)?/g,
            Y = /([+-]|\d\d)/g;
          return function (Z, te, B) {
            var U = te.prototype;
            (B.utc = function (_) {
              var se = { date: _, utc: !0, args: arguments };
              return new te(se);
            }),
              (U.utc = function (_) {
                var se = B(this.toDate(), { locale: this.$L, utc: !0 });
                return _ ? se.add(this.utcOffset(), ne) : se;
              }),
              (U.local = function () {
                return B(this.toDate(), { locale: this.$L, utc: !1 });
              });
            var K = U.parse;
            U.parse = function (_) {
              _.utc && (this.$u = !0),
                this.$utils().u(_.$offset) || (this.$offset = _.$offset),
                K.call(this, _);
            };
            var ee = U.init;
            U.init = function () {
              if (this.$u) {
                var _ = this.$d;
                (this.$y = _.getUTCFullYear()),
                  (this.$M = _.getUTCMonth()),
                  (this.$D = _.getUTCDate()),
                  (this.$W = _.getUTCDay()),
                  (this.$H = _.getUTCHours()),
                  (this.$m = _.getUTCMinutes()),
                  (this.$s = _.getUTCSeconds()),
                  (this.$ms = _.getUTCMilliseconds());
              } else ee.call(this);
            };
            var V = U.utcOffset;
            U.utcOffset = function (_, se) {
              var Te = this.$utils().u;
              if (Te(_))
                return this.$u
                  ? 0
                  : Te(this.$offset)
                    ? V.call(this)
                    : this.$offset;
              if (
                typeof _ == "string" &&
                ((_ = (function (Ne) {
                  Ne === void 0 && (Ne = "");
                  var st = Ne.match(R);
                  if (!st) return null;
                  var wt = ("" + st[0]).match(Y) || ["-", 0, 0],
                    tn = wt[0],
                    Ve = 60 * +wt[1] + +wt[2];
                  return Ve === 0 ? 0 : tn === "+" ? Ve : -Ve;
                })(_)),
                _ === null)
              )
                return this;
              var De = Math.abs(_) <= 16 ? 60 * _ : _;
              if (De === 0) return this.utc(se);
              var ce = this.clone();
              if (se) return (ce.$offset = De), (ce.$u = !1), ce;
              var it = this.$u
                ? this.toDate().getTimezoneOffset()
                : -1 * this.utcOffset();
              return (
                ((ce = this.local().add(De + it, ne)).$offset = De),
                (ce.$x.$localOffset = it),
                ce
              );
            };
            var d = U.format;
            (U.format = function (_) {
              var se = _ || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
              return d.call(this, se);
            }),
              (U.valueOf = function () {
                var _ = this.$utils().u(this.$offset)
                  ? 0
                  : this.$offset +
                    (this.$x.$localOffset || this.$d.getTimezoneOffset());
                return this.$d.valueOf() - 6e4 * _;
              }),
              (U.isUTC = function () {
                return !!this.$u;
              }),
              (U.toISOString = function () {
                return this.toDate().toISOString();
              }),
              (U.toString = function () {
                return this.toDate().toUTCString();
              });
            var Re = U.toDate;
            U.toDate = function (_) {
              return _ === "s" && this.$offset
                ? B(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
                : Re.call(this);
            };
            var be = U.diff;
            U.diff = function (_, se, Te) {
              if (_ && this.$u === _.$u) return be.call(this, _, se, Te);
              var De = this.local(),
                ce = B(_).local();
              return be.call(De, ce, se, Te);
            };
          };
        });
      },
      38921: (le) => {
        "use strict";
        var ne = function (R, Y, Z, te, B, U, K, ee) {
          if (!R) {
            var V;
            if (Y === void 0)
              V = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.",
              );
            else {
              var d = [Z, te, B, U, K, ee],
                Re = 0;
              (V = new Error(
                Y.replace(/%s/g, function () {
                  return d[Re++];
                }),
              )),
                (V.name = "Invariant Violation");
            }
            throw ((V.framesToPop = 1), V);
          }
        };
        le.exports = ne;
      },
      84974: (le, ne, R) => {
        "use strict";
        R.d(ne, { Vv: () => Yf, Pp: () => pe, ye: () => Xf });
        var Y = R(54883),
          Z = R(2829),
          te = R(11052),
          B = R(30549),
          U = R(50181),
          K = R(35549),
          ee = R(96101),
          V = R(15596),
          d = R(90626),
          Re = R(38921),
          be = R.n(Re),
          _ = function () {};
        function se(e, t) {
          return function (r, n) {
            if (r[n] !== void 0 && !r[e])
              return new Error(
                "You have provided a `" +
                  n +
                  "` prop to `" +
                  t +
                  "` " +
                  ("without an `" +
                    e +
                    "` handler prop. This will render a read-only field. ") +
                  ("If the field should be mutable use `" + ce(n) + "`. ") +
                  ("Otherwise, set `" + e + "`."),
              );
          };
        }
        function Te(e, t) {
          var r = {};
          return (
            Object.keys(e).forEach(function (n) {
              if (((r[ce(n)] = _), 0)) var a;
            }),
            r
          );
        }
        function De(e, t) {
          return e[t] !== void 0;
        }
        function ce(e) {
          return "default" + e.charAt(0).toUpperCase() + e.substr(1);
        }
        function it(e) {
          return (
            !!e &&
            (typeof e != "function" ||
              (e.prototype && e.prototype.isReactComponent))
          );
        }
        function Ne(e) {
          var t = st(e, "string");
          return typeof t == "symbol" ? t : String(t);
        }
        function st(e, t) {
          if (typeof e != "object" || e === null) return e;
          var r = e[Symbol.toPrimitive];
          if (r !== void 0) {
            var n = r.call(e, t || "default");
            if (typeof n != "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (t === "string" ? String : Number)(e);
        }
        function wt(e, t, r) {
          var n = useRef(e !== void 0),
            a = useState(t),
            o = a[0],
            s = a[1],
            i = e !== void 0,
            l = n.current;
          return (
            (n.current = i),
            !i && l && o !== t && s(t),
            [
              i ? e : o,
              useCallback(
                function (c) {
                  for (
                    var u = arguments.length,
                      f = new Array(u > 1 ? u - 1 : 0),
                      v = 1;
                    v < u;
                    v++
                  )
                    f[v - 1] = arguments[v];
                  r && r.apply(void 0, [c].concat(f)), s(c);
                },
                [r],
              ),
            ]
          );
        }
        function tn(e, t) {
          return Object.keys(t).reduce(function (r, n) {
            var a,
              o = r,
              s = o[Utils.defaultKey(n)],
              i = o[n],
              l = _objectWithoutPropertiesLoose(
                o,
                [Utils.defaultKey(n), n].map(Ne),
              ),
              c = t[n],
              u = wt(i, s, e[c]),
              f = u[0],
              v = u[1];
            return _extends({}, l, ((a = {}), (a[n] = f), (a[c] = v), a));
          }, e);
        }
        var Ve = R(81115),
          ue = R(58584),
          lo = R(42891);
        function rn() {
          var e = this.constructor.getDerivedStateFromProps(
            this.props,
            this.state,
          );
          e != null && this.setState(e);
        }
        function nn(e) {
          function t(r) {
            var n = this.constructor.getDerivedStateFromProps(e, r);
            return n ?? null;
          }
          this.setState(t.bind(this));
        }
        function an(e, t) {
          try {
            var r = this.props,
              n = this.state;
            (this.props = e),
              (this.state = t),
              (this.__reactInternalSnapshotFlag = !0),
              (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
                r,
                n,
              ));
          } finally {
            (this.props = r), (this.state = n);
          }
        }
        (rn.__suppressDeprecationWarning = !0),
          (nn.__suppressDeprecationWarning = !0),
          (an.__suppressDeprecationWarning = !0);
        function co(e) {
          var t = e.prototype;
          if (!t || !t.isReactComponent)
            throw new Error("Can only polyfill class components");
          if (
            typeof e.getDerivedStateFromProps != "function" &&
            typeof t.getSnapshotBeforeUpdate != "function"
          )
            return e;
          var r = null,
            n = null,
            a = null;
          if (
            (typeof t.componentWillMount == "function"
              ? (r = "componentWillMount")
              : typeof t.UNSAFE_componentWillMount == "function" &&
                (r = "UNSAFE_componentWillMount"),
            typeof t.componentWillReceiveProps == "function"
              ? (n = "componentWillReceiveProps")
              : typeof t.UNSAFE_componentWillReceiveProps == "function" &&
                (n = "UNSAFE_componentWillReceiveProps"),
            typeof t.componentWillUpdate == "function"
              ? (a = "componentWillUpdate")
              : typeof t.UNSAFE_componentWillUpdate == "function" &&
                (a = "UNSAFE_componentWillUpdate"),
            r !== null || n !== null || a !== null)
          ) {
            var o = e.displayName || e.name,
              s =
                typeof e.getDerivedStateFromProps == "function"
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
            throw Error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

` +
                o +
                " uses " +
                s +
                " but also contains the following legacy lifecycles:" +
                (r !== null
                  ? `
  ` + r
                  : "") +
                (n !== null
                  ? `
  ` + n
                  : "") +
                (a !== null
                  ? `
  ` + a
                  : "") +
                `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`,
            );
          }
          if (
            (typeof e.getDerivedStateFromProps == "function" &&
              ((t.componentWillMount = rn), (t.componentWillReceiveProps = nn)),
            typeof t.getSnapshotBeforeUpdate == "function")
          ) {
            if (typeof t.componentDidUpdate != "function")
              throw new Error(
                "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
              );
            t.componentWillUpdate = an;
            var i = t.componentDidUpdate;
            t.componentDidUpdate = function (c, u, f) {
              var v = this.__reactInternalSnapshotFlag
                ? this.__reactInternalSnapshot
                : f;
              i.call(this, c, u, v);
            };
          }
          return e;
        }
        var uo = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
        function on(e, t, r) {
          r === void 0 && (r = []);
          var n = e.displayName || e.name || "Component",
            a = it(e),
            o = Object.keys(t),
            s = o.map(ce);
          a || !r.length || be()(!1);
          var i = (function (c) {
            (0, lo.A)(u, c);
            function u() {
              for (
                var v, m = arguments.length, g = new Array(m), h = 0;
                h < m;
                h++
              )
                g[h] = arguments[h];
              (v = c.call.apply(c, [this].concat(g)) || this),
                (v.handlers = Object.create(null)),
                o.forEach(function (D) {
                  var E = t[D],
                    M = function (O) {
                      if (v.props[E]) {
                        var x;
                        v._notifying = !0;
                        for (
                          var F = arguments.length,
                            $ = new Array(F > 1 ? F - 1 : 0),
                            W = 1;
                          W < F;
                          W++
                        )
                          $[W - 1] = arguments[W];
                        (x = v.props)[E].apply(x, [O].concat($)),
                          (v._notifying = !1);
                      }
                      v.unmounted ||
                        v.setState(function (N) {
                          var I,
                            z = N.values;
                          return {
                            values: (0, ue.A)(
                              Object.create(null),
                              z,
                              ((I = {}), (I[D] = O), I),
                            ),
                          };
                        });
                    };
                  v.handlers[E] = M;
                }),
                r.length &&
                  (v.attachRef = function (D) {
                    v.inner = D;
                  });
              var y = Object.create(null);
              return (
                o.forEach(function (D) {
                  y[D] = v.props[ce(D)];
                }),
                (v.state = { values: y, prevProps: {} }),
                v
              );
            }
            var f = u.prototype;
            return (
              (f.shouldComponentUpdate = function () {
                return !this._notifying;
              }),
              (u.getDerivedStateFromProps = function (m, g) {
                var h = g.values,
                  y = g.prevProps,
                  D = {
                    values: (0, ue.A)(Object.create(null), h),
                    prevProps: {},
                  };
                return (
                  o.forEach(function (E) {
                    (D.prevProps[E] = m[E]),
                      !De(m, E) && De(y, E) && (D.values[E] = m[ce(E)]);
                  }),
                  D
                );
              }),
              (f.componentWillUnmount = function () {
                this.unmounted = !0;
              }),
              (f.render = function () {
                var m = this,
                  g = this.props,
                  h = g.innerRef,
                  y = (0, Ve.A)(g, ["innerRef"]);
                s.forEach(function (E) {
                  delete y[E];
                });
                var D = {};
                return (
                  o.forEach(function (E) {
                    var M = m.props[E];
                    D[E] = M !== void 0 ? M : m.state.values[E];
                  }),
                  d.createElement(
                    e,
                    (0, ue.A)({}, y, D, this.handlers, {
                      ref: h || this.attachRef,
                    }),
                  )
                );
              }),
              u
            );
          })(d.Component);
          co(i),
            (i.displayName = "Uncontrolled(" + n + ")"),
            (i.propTypes = (0, ue.A)({ innerRef: function () {} }, Te(t, n))),
            r.forEach(function (c) {
              i.prototype[c] = function () {
                var f;
                return (f = this.inner)[c].apply(f, arguments);
              };
            });
          var l = i;
          return (
            d.forwardRef &&
              ((l = d.forwardRef(function (c, u) {
                return d.createElement(
                  i,
                  (0, ue.A)({}, c, {
                    innerRef: u,
                    __source: { fileName: uo, lineNumber: 128 },
                    __self: this,
                  }),
                );
              })),
              (l.propTypes = i.propTypes)),
            (l.ControlledComponent = e),
            (l.deferControlTo = function (c, u, f) {
              return u === void 0 && (u = {}), on(c, (0, ue.A)({}, t, u), f);
            }),
            l
          );
        }
        var fe = R(34164),
          fo = R(61410),
          L = R.n(fo),
          Ht = "milliseconds",
          bt = "seconds",
          Dt = "minutes",
          At = "hours",
          Ke = "day",
          lt = "week",
          Et = "month",
          _e = "year",
          Ge = "decade",
          Xe = "century",
          sn = {
            milliseconds: 1,
            seconds: 1e3,
            minutes: 60 * 1e3,
            hours: 3600 * 1e3,
            day: 1440 * 60 * 1e3,
            week: 10080 * 60 * 1e3,
          },
          vo = { month: 1, year: 12, decade: 120, century: 1200 };
        function mo(e) {
          return [31, po(e), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
        function po(e) {
          return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0 ? 29 : 28;
        }
        function Ce(e, t, r) {
          switch (((e = new Date(e)), r)) {
            case Ht:
            case bt:
            case Dt:
            case At:
            case Ke:
            case lt:
              return ho(e, t * sn[r]);
            case Et:
            case _e:
            case Ge:
            case Xe:
              return go(e, t * vo[r]);
          }
          throw new TypeError('Invalid units: "' + r + '"');
        }
        function ho(e, t) {
          var r = new Date(+e + t);
          return yo(e, r);
        }
        function go(e, t) {
          var r = e.getFullYear(),
            n = e.getMonth(),
            a = e.getDate(),
            o = r * 12 + n + t,
            s = Math.trunc(o / 12),
            i = o % 12,
            l = Math.min(a, mo(s)[i]),
            c = new Date(e);
          return c.setFullYear(s), c.setDate(1), c.setMonth(i), c.setDate(l), c;
        }
        function yo(e, t) {
          var r = e.getTimezoneOffset(),
            n = t.getTimezoneOffset(),
            a = n - r;
          return new Date(+t + a * sn.minutes);
        }
        function Ut(e, t, r) {
          return Ce(e, -t, r);
        }
        function me(e, t, r) {
          switch (((e = new Date(e)), t)) {
            case Xe:
            case Ge:
            case _e:
              e = hr(e, 0);
            case Et:
              e = Eo(e, 1);
            case lt:
            case Ke:
              e = Kt(e, 0);
            case At:
              e = Mt(e, 0);
            case Dt:
              e = Vt(e, 0);
            case bt:
              e = jt(e, 0);
          }
          return (
            t === Ge && (e = Ut(e, ct(e) % 10, "year")),
            t === Xe && (e = Ut(e, ct(e) % 100, "year")),
            t === lt && (e = So(e, 0, r)),
            e
          );
        }
        function mr(e, t, r) {
          switch (((e = new Date(e)), (e = me(e, t, r)), t)) {
            case Xe:
            case Ge:
            case _e:
            case Et:
            case lt:
              (e = Ce(e, 1, t)),
                (e = Ut(e, 1, Ke)),
                e.setHours(23, 59, 59, 999);
              break;
            case Ke:
              e.setHours(23, 59, 59, 999);
              break;
            case At:
            case Dt:
            case bt:
              (e = Ce(e, 1, t)), (e = Ut(e, 1, Ht));
          }
          return e;
        }
        var Je = ut(function (e, t) {
            return e === t;
          }),
          ln = ut(function (e, t) {
            return e !== t;
          }),
          pr = ut(function (e, t) {
            return e > t;
          }),
          Yt = ut(function (e, t) {
            return e >= t;
          }),
          cn = ut(function (e, t) {
            return e < t;
          }),
          St = ut(function (e, t) {
            return e <= t;
          });
        function wo() {
          return new Date(Math.min.apply(Math, arguments));
        }
        function bo() {
          return new Date(Math.max.apply(Math, arguments));
        }
        function Do(e, t, r, n) {
          return (n = n || "day"), (!t || Yt(e, t, n)) && (!r || St(e, r, n));
        }
        var jt = Le("Milliseconds"),
          Vt = Le("Seconds"),
          Mt = Le("Minutes"),
          Kt = Le("Hours"),
          Ao = Le("Day"),
          Eo = Le("Date"),
          hr = Le("Month"),
          ct = Le("FullYear");
        function Md(e, t) {
          return t === void 0 ? ct(me(e, Ge)) : Ce(e, t + 10, _e);
        }
        function Od(e, t) {
          return t === void 0 ? ct(me(e, Xe)) : Ce(e, t + 100, _e);
        }
        function So(e, t, r) {
          var n = (Ao(e) + 7 - (r || 0)) % 7;
          return t === void 0 ? n : Ce(e, t - n, Ke);
        }
        function Rd(e, t, r, n) {
          var a, o, s;
          switch (r) {
            case Ht:
            case bt:
            case Dt:
            case At:
            case Ke:
            case lt:
              a = t.getTime() - e.getTime();
              break;
            case Et:
            case _e:
            case Ge:
            case Xe:
              a = (ct(t) - ct(e)) * 12 + hr(t) - hr(e);
              break;
            default:
              throw new TypeError('Invalid units: "' + r + '"');
          }
          switch (r) {
            case Ht:
              o = 1;
              break;
            case bt:
              o = 1e3;
              break;
            case Dt:
              o = 1e3 * 60;
              break;
            case At:
              o = 1e3 * 60 * 60;
              break;
            case Ke:
              o = 1e3 * 60 * 60 * 24;
              break;
            case lt:
              o = 1e3 * 60 * 60 * 24 * 7;
              break;
            case Et:
              o = 1;
              break;
            case _e:
              o = 12;
              break;
            case Ge:
              o = 120;
              break;
            case Xe:
              o = 1200;
              break;
            default:
              throw new TypeError('Invalid units: "' + r + '"');
          }
          return (s = a / o), n ? s : Math.round(s);
        }
        function Le(e) {
          var t = (function (r) {
            switch (r) {
              case "Milliseconds":
                return 36e5;
              case "Seconds":
                return 3600;
              case "Minutes":
                return 60;
              case "Hours":
                return 1;
              default:
                return null;
            }
          })(e);
          return function (r, n) {
            if (n === void 0) return r["get" + e]();
            var a = new Date(r);
            return (
              a["set" + e](n),
              t &&
                a["get" + e]() != n &&
                (e === "Hours" ||
                  (n >= t &&
                    a.getHours() - r.getHours() < Math.floor(n / t))) &&
                a["set" + e](n + t),
              a
            );
          };
        }
        function ut(e) {
          return function (t, r, n) {
            return e(+me(t, n), +me(r, n));
          };
        }
        var Ze = R(55635),
          Mo = R(8950);
        function Oo(e, t, r) {
          var n = -1,
            a = e.length;
          t < 0 && (t = -t > a ? 0 : a + t),
            (r = r > a ? a : r),
            r < 0 && (r += a),
            (a = t > r ? 0 : (r - t) >>> 0),
            (t >>>= 0);
          for (var o = Array(a); ++n < a; ) o[n] = e[n + t];
          return o;
        }
        const un = Oo;
        var Ot = R(7e4),
          Ro = R(55205),
          fn = 1 / 0,
          To = 17976931348623157e292;
        function Co(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = (0, Ro.A)(e)), e === fn || e === -fn)) {
            var t = e < 0 ? -1 : 1;
            return t * To;
          }
          return e === e ? e : 0;
        }
        const _t = Co;
        function xo(e) {
          var t = _t(e),
            r = t % 1;
          return t === t ? (r ? t - r : t) : 0;
        }
        const dn = xo;
        var Po = Math.ceil,
          Fo = Math.max;
        function $o(e, t, r) {
          (r ? (0, Ot.A)(e, t, r) : t === void 0)
            ? (t = 1)
            : (t = Fo(dn(t), 0));
          var n = e == null ? 0 : e.length;
          if (!n || t < 1) return [];
          for (var a = 0, o = 0, s = Array(Po(n / t)); a < n; )
            s[o++] = un(e, a, (a += t));
          return s;
        }
        const ko = $o;
        function Rt(e) {
          return (e && e.ownerDocument) || document;
        }
        function No(e) {
          var t = Rt(e);
          return (t && t.defaultView) || window;
        }
        function Lo(e, t) {
          return No(e).getComputedStyle(e, t);
        }
        var zo = /([A-Z])/g;
        function Wo(e) {
          return e.replace(zo, "-$1").toLowerCase();
        }
        var Io = /^ms-/;
        function Gt(e) {
          return Wo(e).replace(Io, "-ms-");
        }
        var Bo =
          /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
        function Ho(e) {
          return !!(e && Bo.test(e));
        }
        function Uo(e, t) {
          var r = "",
            n = "";
          if (typeof t == "string")
            return (
              e.style.getPropertyValue(Gt(t)) || Lo(e).getPropertyValue(Gt(t))
            );
          Object.keys(t).forEach(function (a) {
            var o = t[a];
            !o && o !== 0
              ? e.style.removeProperty(Gt(a))
              : Ho(a)
                ? (n += a + "(" + o + ") ")
                : (r += Gt(a) + ": " + o + ";");
          }),
            n && (r += "transform: " + n + ";"),
            (e.style.cssText += ";" + r);
        }
        const ft = Uo;
        function Tt(e, t) {
          if (e.contains) return e.contains(t);
          if (e.compareDocumentPosition)
            return e === t || !!(e.compareDocumentPosition(t) & 16);
        }
        function Yo(e) {
          return "nodeType" in e && e.nodeType === document.DOCUMENT_NODE;
        }
        function gr(e) {
          return "window" in e && e.window === e
            ? e
            : (Yo(e) && e.defaultView) || !1;
        }
        function vn(e) {
          var t = e === "pageXOffset" ? "scrollLeft" : "scrollTop";
          function r(n, a) {
            var o = gr(n);
            if (a === void 0) return o ? o[e] : n[t];
            o ? o.scrollTo(o[e], a) : (n[t] = a);
          }
          return r;
        }
        const mn = vn("pageXOffset"),
          pn = vn("pageYOffset");
        function Qe(e) {
          var t = Rt(e),
            r = { top: 0, left: 0, height: 0, width: 0 },
            n = t && t.documentElement;
          return (
            !n ||
              !Tt(n, e) ||
              (e.getBoundingClientRect !== void 0 &&
                (r = e.getBoundingClientRect()),
              (r = {
                top: r.top + pn(n) - (n.clientTop || 0),
                left: r.left + mn(n) - (n.clientLeft || 0),
                width: r.width,
                height: r.height,
              })),
            r
          );
        }
        var jo = function (t) {
          return !!t && "offsetParent" in t;
        };
        function Vo(e) {
          for (
            var t = Rt(e), r = e && e.offsetParent;
            jo(r) && r.nodeName !== "HTML" && ft(r, "position") === "static";
          )
            r = r.offsetParent;
          return r || t.documentElement;
        }
        var Ko = function (t) {
          return t.nodeName && t.nodeName.toLowerCase();
        };
        function hn(e, t) {
          var r = { top: 0, left: 0 },
            n;
          if (ft(e, "position") === "fixed") n = e.getBoundingClientRect();
          else {
            var a = t || Vo(e);
            (n = Qe(e)), Ko(a) !== "html" && (r = Qe(a));
            var o = String(ft(a, "borderTopWidth") || 0);
            r.top += parseInt(o, 10) - pn(a) || 0;
            var s = String(ft(a, "borderLeftWidth") || 0);
            r.left += parseInt(s, 10) - mn(a) || 0;
          }
          var i = String(ft(e, "marginTop") || 0),
            l = String(ft(e, "marginLeft") || 0);
          return (0, ue.A)({}, n, {
            top: n.top - r.top - (parseInt(i, 10) || 0),
            left: n.left - r.left - (parseInt(l, 10) || 0),
          });
        }
        const yr = !!(
          typeof window < "u" &&
          window.document &&
          window.document.createElement
        );
        var gn = new Date().getTime();
        function _o(e) {
          var t = new Date().getTime(),
            r = Math.max(0, 16 - (t - gn)),
            n = setTimeout(e, r);
          return (gn = t), n;
        }
        var Go = ["", "webkit", "moz", "o", "ms"],
          wr = "clearTimeout",
          br = _o,
          yn = function (t, r) {
            return (
              t + (t ? r[0].toUpperCase() + r.substr(1) : r) + "AnimationFrame"
            );
          };
        yr &&
          Go.some(function (e) {
            var t = yn(e, "request");
            return (
              t in window &&
                ((wr = yn(e, "cancel")),
                (br = function (n) {
                  return window[t](n);
                })),
              !!br
            );
          });
        var wn = function (t) {
            typeof window[wr] == "function" && window[wr](t);
          },
          bn = br,
          Dn = R(72739);
        function An() {
          return (0, d.useState)(null);
        }
        const En = (e) =>
          !e || typeof e == "function"
            ? e
            : (t) => {
                e.current = t;
              };
        function Xo(e, t) {
          const r = En(e),
            n = En(t);
          return (a) => {
            r && r(a), n && n(a);
          };
        }
        function Jo(e, t) {
          return (0, d.useMemo)(() => Xo(e, t), [e, t]);
        }
        const Zo = Jo;
        var ge = "top",
          Ee = "bottom",
          Se = "right",
          ye = "left",
          Dr = "auto",
          Ct = [ge, Ee, Se, ye],
          dt = "start",
          xt = "end",
          Qo = "clippingParents",
          Sn = "viewport",
          Pt = "popper",
          qo = "reference",
          Mn = Ct.reduce(function (e, t) {
            return e.concat([t + "-" + dt, t + "-" + xt]);
          }, []),
          Ar = [].concat(Ct, [Dr]).reduce(function (e, t) {
            return e.concat([t, t + "-" + dt, t + "-" + xt]);
          }, []),
          ei = "beforeRead",
          ti = "read",
          ri = "afterRead",
          ni = "beforeMain",
          ai = "main",
          oi = "afterMain",
          ii = "beforeWrite",
          si = "write",
          li = "afterWrite",
          ci = [ei, ti, ri, ni, ai, oi, ii, si, li];
        function ui() {
          const e = (0, d.useRef)(!0),
            t = (0, d.useRef)(() => e.current);
          return (
            (0, d.useEffect)(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              [],
            ),
            t.current
          );
        }
        function fi(e) {
          const t = ui();
          return [
            e[0],
            (0, d.useCallback)(
              (r) => {
                if (t()) return e[1](r);
              },
              [t, e[1]],
            ),
          ];
        }
        const di = fi;
        function xe(e) {
          return e.split("-")[0];
        }
        function Ae(e) {
          if (e == null) return window;
          if (e.toString() !== "[object Window]") {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
          }
          return e;
        }
        function qe(e) {
          var t = Ae(e).Element;
          return e instanceof t || e instanceof Element;
        }
        function Pe(e) {
          var t = Ae(e).HTMLElement;
          return e instanceof t || e instanceof HTMLElement;
        }
        function Er(e) {
          if (typeof ShadowRoot > "u") return !1;
          var t = Ae(e).ShadowRoot;
          return e instanceof t || e instanceof ShadowRoot;
        }
        var et = Math.max,
          Xt = Math.min,
          vt = Math.round;
        function Sr() {
          var e = navigator.userAgentData;
          return e != null && e.brands && Array.isArray(e.brands)
            ? e.brands
                .map(function (t) {
                  return t.brand + "/" + t.version;
                })
                .join(" ")
            : navigator.userAgent;
        }
        function On() {
          return !/^((?!chrome|android).)*safari/i.test(Sr());
        }
        function mt(e, t, r) {
          t === void 0 && (t = !1), r === void 0 && (r = !1);
          var n = e.getBoundingClientRect(),
            a = 1,
            o = 1;
          t &&
            Pe(e) &&
            ((a = (e.offsetWidth > 0 && vt(n.width) / e.offsetWidth) || 1),
            (o = (e.offsetHeight > 0 && vt(n.height) / e.offsetHeight) || 1));
          var s = qe(e) ? Ae(e) : window,
            i = s.visualViewport,
            l = !On() && r,
            c = (n.left + (l && i ? i.offsetLeft : 0)) / a,
            u = (n.top + (l && i ? i.offsetTop : 0)) / o,
            f = n.width / a,
            v = n.height / o;
          return {
            width: f,
            height: v,
            top: u,
            right: c + f,
            bottom: u + v,
            left: c,
            x: c,
            y: u,
          };
        }
        function Mr(e) {
          var t = mt(e),
            r = e.offsetWidth,
            n = e.offsetHeight;
          return (
            Math.abs(t.width - r) <= 1 && (r = t.width),
            Math.abs(t.height - n) <= 1 && (n = t.height),
            { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
          );
        }
        function Rn(e, t) {
          var r = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;
          if (r && Er(r)) {
            var n = t;
            do {
              if (n && e.isSameNode(n)) return !0;
              n = n.parentNode || n.host;
            } while (n);
          }
          return !1;
        }
        function ze(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function ke(e) {
          return Ae(e).getComputedStyle(e);
        }
        function vi(e) {
          return ["table", "td", "th"].indexOf(ze(e)) >= 0;
        }
        function We(e) {
          return ((qe(e) ? e.ownerDocument : e.document) || window.document)
            .documentElement;
        }
        function Jt(e) {
          return ze(e) === "html"
            ? e
            : e.assignedSlot ||
                e.parentNode ||
                (Er(e) ? e.host : null) ||
                We(e);
        }
        function Tn(e) {
          return !Pe(e) || ke(e).position === "fixed" ? null : e.offsetParent;
        }
        function mi(e) {
          var t = /firefox/i.test(Sr()),
            r = /Trident/i.test(Sr());
          if (r && Pe(e)) {
            var n = ke(e);
            if (n.position === "fixed") return null;
          }
          var a = Jt(e);
          for (
            Er(a) && (a = a.host);
            Pe(a) && ["html", "body"].indexOf(ze(a)) < 0;
          ) {
            var o = ke(a);
            if (
              o.transform !== "none" ||
              o.perspective !== "none" ||
              o.contain === "paint" ||
              ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
              (t && o.willChange === "filter") ||
              (t && o.filter && o.filter !== "none")
            )
              return a;
            a = a.parentNode;
          }
          return null;
        }
        function Ft(e) {
          for (
            var t = Ae(e), r = Tn(e);
            r && vi(r) && ke(r).position === "static";
          )
            r = Tn(r);
          return r &&
            (ze(r) === "html" ||
              (ze(r) === "body" && ke(r).position === "static"))
            ? t
            : r || mi(e) || t;
        }
        function Or(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        function $t(e, t, r) {
          return et(e, Xt(t, r));
        }
        function pi(e, t, r) {
          var n = $t(e, t, r);
          return n > r ? r : n;
        }
        function Cn() {
          return { top: 0, right: 0, bottom: 0, left: 0 };
        }
        function xn(e) {
          return Object.assign({}, Cn(), e);
        }
        function Pn(e, t) {
          return t.reduce(function (r, n) {
            return (r[n] = e), r;
          }, {});
        }
        var hi = function (t, r) {
          return (
            (t =
              typeof t == "function"
                ? t(Object.assign({}, r.rects, { placement: r.placement }))
                : t),
            xn(typeof t != "number" ? t : Pn(t, Ct))
          );
        };
        function gi(e) {
          var t,
            r = e.state,
            n = e.name,
            a = e.options,
            o = r.elements.arrow,
            s = r.modifiersData.popperOffsets,
            i = xe(r.placement),
            l = Or(i),
            c = [ye, Se].indexOf(i) >= 0,
            u = c ? "height" : "width";
          if (!(!o || !s)) {
            var f = hi(a.padding, r),
              v = Mr(o),
              m = l === "y" ? ge : ye,
              g = l === "y" ? Ee : Se,
              h =
                r.rects.reference[u] +
                r.rects.reference[l] -
                s[l] -
                r.rects.popper[u],
              y = s[l] - r.rects.reference[l],
              D = Ft(o),
              E = D
                ? l === "y"
                  ? D.clientHeight || 0
                  : D.clientWidth || 0
                : 0,
              M = h / 2 - y / 2,
              S = f[m],
              O = E - v[u] - f[g],
              x = E / 2 - v[u] / 2 + M,
              F = $t(S, x, O),
              $ = l;
            r.modifiersData[n] =
              ((t = {}), (t[$] = F), (t.centerOffset = F - x), t);
          }
        }
        function yi(e) {
          var t = e.state,
            r = e.options,
            n = r.element,
            a = n === void 0 ? "[data-popper-arrow]" : n;
          a != null &&
            ((typeof a == "string" &&
              ((a = t.elements.popper.querySelector(a)), !a)) ||
              (Rn(t.elements.popper, a) && (t.elements.arrow = a)));
        }
        const wi = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: gi,
          effect: yi,
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        };
        function pt(e) {
          return e.split("-")[1];
        }
        var bi = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function Di(e, t) {
          var r = e.x,
            n = e.y,
            a = t.devicePixelRatio || 1;
          return { x: vt(r * a) / a || 0, y: vt(n * a) / a || 0 };
        }
        function Fn(e) {
          var t,
            r = e.popper,
            n = e.popperRect,
            a = e.placement,
            o = e.variation,
            s = e.offsets,
            i = e.position,
            l = e.gpuAcceleration,
            c = e.adaptive,
            u = e.roundOffsets,
            f = e.isFixed,
            v = s.x,
            m = v === void 0 ? 0 : v,
            g = s.y,
            h = g === void 0 ? 0 : g,
            y = typeof u == "function" ? u({ x: m, y: h }) : { x: m, y: h };
          (m = y.x), (h = y.y);
          var D = s.hasOwnProperty("x"),
            E = s.hasOwnProperty("y"),
            M = ye,
            S = ge,
            O = window;
          if (c) {
            var x = Ft(r),
              F = "clientHeight",
              $ = "clientWidth";
            if (
              (x === Ae(r) &&
                ((x = We(r)),
                ke(x).position !== "static" &&
                  i === "absolute" &&
                  ((F = "scrollHeight"), ($ = "scrollWidth"))),
              (x = x),
              a === ge || ((a === ye || a === Se) && o === xt))
            ) {
              S = Ee;
              var W =
                f && x === O && O.visualViewport
                  ? O.visualViewport.height
                  : x[F];
              (h -= W - n.height), (h *= l ? 1 : -1);
            }
            if (a === ye || ((a === ge || a === Ee) && o === xt)) {
              M = Se;
              var N =
                f && x === O && O.visualViewport
                  ? O.visualViewport.width
                  : x[$];
              (m -= N - n.width), (m *= l ? 1 : -1);
            }
          }
          var I = Object.assign({ position: i }, c && bi),
            z = u === !0 ? Di({ x: m, y: h }, Ae(r)) : { x: m, y: h };
          if (((m = z.x), (h = z.y), l)) {
            var j;
            return Object.assign(
              {},
              I,
              ((j = {}),
              (j[S] = E ? "0" : ""),
              (j[M] = D ? "0" : ""),
              (j.transform =
                (O.devicePixelRatio || 1) <= 1
                  ? "translate(" + m + "px, " + h + "px)"
                  : "translate3d(" + m + "px, " + h + "px, 0)"),
              j),
            );
          }
          return Object.assign(
            {},
            I,
            ((t = {}),
            (t[S] = E ? h + "px" : ""),
            (t[M] = D ? m + "px" : ""),
            (t.transform = ""),
            t),
          );
        }
        function Ai(e) {
          var t = e.state,
            r = e.options,
            n = r.gpuAcceleration,
            a = n === void 0 ? !0 : n,
            o = r.adaptive,
            s = o === void 0 ? !0 : o,
            i = r.roundOffsets,
            l = i === void 0 ? !0 : i,
            c = {
              placement: xe(t.placement),
              variation: pt(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: a,
              isFixed: t.options.strategy === "fixed",
            };
          t.modifiersData.popperOffsets != null &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              Fn(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: s,
                  roundOffsets: l,
                }),
              ),
            )),
            t.modifiersData.arrow != null &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                Fn(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  }),
                ),
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        }
        const Ei = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: Ai,
          data: {},
        };
        var Zt = { passive: !0 };
        function Si(e) {
          var t = e.state,
            r = e.instance,
            n = e.options,
            a = n.scroll,
            o = a === void 0 ? !0 : a,
            s = n.resize,
            i = s === void 0 ? !0 : s,
            l = Ae(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            o &&
              c.forEach(function (u) {
                u.addEventListener("scroll", r.update, Zt);
              }),
            i && l.addEventListener("resize", r.update, Zt),
            function () {
              o &&
                c.forEach(function (u) {
                  u.removeEventListener("scroll", r.update, Zt);
                }),
                i && l.removeEventListener("resize", r.update, Zt);
            }
          );
        }
        const Mi = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: Si,
          data: {},
        };
        var Oi = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function Qt(e) {
          return e.replace(/left|right|bottom|top/g, function (t) {
            return Oi[t];
          });
        }
        var Ri = { start: "end", end: "start" };
        function $n(e) {
          return e.replace(/start|end/g, function (t) {
            return Ri[t];
          });
        }
        function Rr(e) {
          var t = Ae(e),
            r = t.pageXOffset,
            n = t.pageYOffset;
          return { scrollLeft: r, scrollTop: n };
        }
        function Tr(e) {
          return mt(We(e)).left + Rr(e).scrollLeft;
        }
        function Ti(e, t) {
          var r = Ae(e),
            n = We(e),
            a = r.visualViewport,
            o = n.clientWidth,
            s = n.clientHeight,
            i = 0,
            l = 0;
          if (a) {
            (o = a.width), (s = a.height);
            var c = On();
            (c || (!c && t === "fixed")) &&
              ((i = a.offsetLeft), (l = a.offsetTop));
          }
          return { width: o, height: s, x: i + Tr(e), y: l };
        }
        function Ci(e) {
          var t,
            r = We(e),
            n = Rr(e),
            a = (t = e.ownerDocument) == null ? void 0 : t.body,
            o = et(
              r.scrollWidth,
              r.clientWidth,
              a ? a.scrollWidth : 0,
              a ? a.clientWidth : 0,
            ),
            s = et(
              r.scrollHeight,
              r.clientHeight,
              a ? a.scrollHeight : 0,
              a ? a.clientHeight : 0,
            ),
            i = -n.scrollLeft + Tr(e),
            l = -n.scrollTop;
          return (
            ke(a || r).direction === "rtl" &&
              (i += et(r.clientWidth, a ? a.clientWidth : 0) - o),
            { width: o, height: s, x: i, y: l }
          );
        }
        function Cr(e) {
          var t = ke(e),
            r = t.overflow,
            n = t.overflowX,
            a = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(r + a + n);
        }
        function kn(e) {
          return ["html", "body", "#document"].indexOf(ze(e)) >= 0
            ? e.ownerDocument.body
            : Pe(e) && Cr(e)
              ? e
              : kn(Jt(e));
        }
        function kt(e, t) {
          var r;
          t === void 0 && (t = []);
          var n = kn(e),
            a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
            o = Ae(n),
            s = a ? [o].concat(o.visualViewport || [], Cr(n) ? n : []) : n,
            i = t.concat(s);
          return a ? i : i.concat(kt(Jt(s)));
        }
        function xr(e) {
          return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
          });
        }
        function xi(e, t) {
          var r = mt(e, !1, t === "fixed");
          return (
            (r.top = r.top + e.clientTop),
            (r.left = r.left + e.clientLeft),
            (r.bottom = r.top + e.clientHeight),
            (r.right = r.left + e.clientWidth),
            (r.width = e.clientWidth),
            (r.height = e.clientHeight),
            (r.x = r.left),
            (r.y = r.top),
            r
          );
        }
        function Nn(e, t, r) {
          return t === Sn ? xr(Ti(e, r)) : qe(t) ? xi(t, r) : xr(Ci(We(e)));
        }
        function Pi(e) {
          var t = kt(Jt(e)),
            r = ["absolute", "fixed"].indexOf(ke(e).position) >= 0,
            n = r && Pe(e) ? Ft(e) : e;
          return qe(n)
            ? t.filter(function (a) {
                return qe(a) && Rn(a, n) && ze(a) !== "body";
              })
            : [];
        }
        function Fi(e, t, r, n) {
          var a = t === "clippingParents" ? Pi(e) : [].concat(t),
            o = [].concat(a, [r]),
            s = o[0],
            i = o.reduce(
              function (l, c) {
                var u = Nn(e, c, n);
                return (
                  (l.top = et(u.top, l.top)),
                  (l.right = Xt(u.right, l.right)),
                  (l.bottom = Xt(u.bottom, l.bottom)),
                  (l.left = et(u.left, l.left)),
                  l
                );
              },
              Nn(e, s, n),
            );
          return (
            (i.width = i.right - i.left),
            (i.height = i.bottom - i.top),
            (i.x = i.left),
            (i.y = i.top),
            i
          );
        }
        function Ln(e) {
          var t = e.reference,
            r = e.element,
            n = e.placement,
            a = n ? xe(n) : null,
            o = n ? pt(n) : null,
            s = t.x + t.width / 2 - r.width / 2,
            i = t.y + t.height / 2 - r.height / 2,
            l;
          switch (a) {
            case ge:
              l = { x: s, y: t.y - r.height };
              break;
            case Ee:
              l = { x: s, y: t.y + t.height };
              break;
            case Se:
              l = { x: t.x + t.width, y: i };
              break;
            case ye:
              l = { x: t.x - r.width, y: i };
              break;
            default:
              l = { x: t.x, y: t.y };
          }
          var c = a ? Or(a) : null;
          if (c != null) {
            var u = c === "y" ? "height" : "width";
            switch (o) {
              case dt:
                l[c] = l[c] - (t[u] / 2 - r[u] / 2);
                break;
              case xt:
                l[c] = l[c] + (t[u] / 2 - r[u] / 2);
                break;
              default:
            }
          }
          return l;
        }
        function Nt(e, t) {
          t === void 0 && (t = {});
          var r = t,
            n = r.placement,
            a = n === void 0 ? e.placement : n,
            o = r.strategy,
            s = o === void 0 ? e.strategy : o,
            i = r.boundary,
            l = i === void 0 ? Qo : i,
            c = r.rootBoundary,
            u = c === void 0 ? Sn : c,
            f = r.elementContext,
            v = f === void 0 ? Pt : f,
            m = r.altBoundary,
            g = m === void 0 ? !1 : m,
            h = r.padding,
            y = h === void 0 ? 0 : h,
            D = xn(typeof y != "number" ? y : Pn(y, Ct)),
            E = v === Pt ? qo : Pt,
            M = e.rects.popper,
            S = e.elements[g ? E : v],
            O = Fi(
              qe(S) ? S : S.contextElement || We(e.elements.popper),
              l,
              u,
              s,
            ),
            x = mt(e.elements.reference),
            F = Ln({
              reference: x,
              element: M,
              strategy: "absolute",
              placement: a,
            }),
            $ = xr(Object.assign({}, M, F)),
            W = v === Pt ? $ : x,
            N = {
              top: O.top - W.top + D.top,
              bottom: W.bottom - O.bottom + D.bottom,
              left: O.left - W.left + D.left,
              right: W.right - O.right + D.right,
            },
            I = e.modifiersData.offset;
          if (v === Pt && I) {
            var z = I[a];
            Object.keys(N).forEach(function (j) {
              var G = [Se, Ee].indexOf(j) >= 0 ? 1 : -1,
                Q = [ge, Ee].indexOf(j) >= 0 ? "y" : "x";
              N[j] += z[Q] * G;
            });
          }
          return N;
        }
        function $i(e, t) {
          t === void 0 && (t = {});
          var r = t,
            n = r.placement,
            a = r.boundary,
            o = r.rootBoundary,
            s = r.padding,
            i = r.flipVariations,
            l = r.allowedAutoPlacements,
            c = l === void 0 ? Ar : l,
            u = pt(n),
            f = u
              ? i
                ? Mn
                : Mn.filter(function (g) {
                    return pt(g) === u;
                  })
              : Ct,
            v = f.filter(function (g) {
              return c.indexOf(g) >= 0;
            });
          v.length === 0 && (v = f);
          var m = v.reduce(function (g, h) {
            return (
              (g[h] = Nt(e, {
                placement: h,
                boundary: a,
                rootBoundary: o,
                padding: s,
              })[xe(h)]),
              g
            );
          }, {});
          return Object.keys(m).sort(function (g, h) {
            return m[g] - m[h];
          });
        }
        function ki(e) {
          if (xe(e) === Dr) return [];
          var t = Qt(e);
          return [$n(e), t, $n(t)];
        }
        function Ni(e) {
          var t = e.state,
            r = e.options,
            n = e.name;
          if (!t.modifiersData[n]._skip) {
            for (
              var a = r.mainAxis,
                o = a === void 0 ? !0 : a,
                s = r.altAxis,
                i = s === void 0 ? !0 : s,
                l = r.fallbackPlacements,
                c = r.padding,
                u = r.boundary,
                f = r.rootBoundary,
                v = r.altBoundary,
                m = r.flipVariations,
                g = m === void 0 ? !0 : m,
                h = r.allowedAutoPlacements,
                y = t.options.placement,
                D = xe(y),
                E = D === y,
                M = l || (E || !g ? [Qt(y)] : ki(y)),
                S = [y].concat(M).reduce(function (p, b) {
                  return p.concat(
                    xe(b) === Dr
                      ? $i(t, {
                          placement: b,
                          boundary: u,
                          rootBoundary: f,
                          padding: c,
                          flipVariations: g,
                          allowedAutoPlacements: h,
                        })
                      : b,
                  );
                }, []),
                O = t.rects.reference,
                x = t.rects.popper,
                F = new Map(),
                $ = !0,
                W = S[0],
                N = 0;
              N < S.length;
              N++
            ) {
              var I = S[N],
                z = xe(I),
                j = pt(I) === dt,
                G = [ge, Ee].indexOf(z) >= 0,
                Q = G ? "width" : "height",
                J = Nt(t, {
                  placement: I,
                  boundary: u,
                  rootBoundary: f,
                  altBoundary: v,
                  padding: c,
                }),
                q = G ? (j ? Se : ye) : j ? Ee : ge;
              O[Q] > x[Q] && (q = Qt(q));
              var oe = Qt(q),
                de = [];
              if (
                (o && de.push(J[z] <= 0),
                i && de.push(J[q] <= 0, J[oe] <= 0),
                de.every(function (p) {
                  return p;
                }))
              ) {
                (W = I), ($ = !1);
                break;
              }
              F.set(I, de);
            }
            if ($)
              for (
                var k = g ? 3 : 1,
                  w = function (b) {
                    var C = S.find(function (P) {
                      var H = F.get(P);
                      if (H)
                        return H.slice(0, b).every(function (X) {
                          return X;
                        });
                    });
                    if (C) return (W = C), "break";
                  },
                  A = k;
                A > 0;
                A--
              ) {
                var T = w(A);
                if (T === "break") break;
              }
            t.placement !== W &&
              ((t.modifiersData[n]._skip = !0),
              (t.placement = W),
              (t.reset = !0));
          }
        }
        const Li = {
          name: "flip",
          enabled: !0,
          phase: "main",
          fn: Ni,
          requiresIfExists: ["offset"],
          data: { _skip: !1 },
        };
        function zn(e, t, r) {
          return (
            r === void 0 && (r = { x: 0, y: 0 }),
            {
              top: e.top - t.height - r.y,
              right: e.right - t.width + r.x,
              bottom: e.bottom - t.height + r.y,
              left: e.left - t.width - r.x,
            }
          );
        }
        function Wn(e) {
          return [ge, Se, Ee, ye].some(function (t) {
            return e[t] >= 0;
          });
        }
        function zi(e) {
          var t = e.state,
            r = e.name,
            n = t.rects.reference,
            a = t.rects.popper,
            o = t.modifiersData.preventOverflow,
            s = Nt(t, { elementContext: "reference" }),
            i = Nt(t, { altBoundary: !0 }),
            l = zn(s, n),
            c = zn(i, a, o),
            u = Wn(l),
            f = Wn(c);
          (t.modifiersData[r] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: f,
          }),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-reference-hidden": u,
              "data-popper-escaped": f,
            }));
        }
        const Wi = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: zi,
        };
        function Ii(e, t, r) {
          var n = xe(e),
            a = [ye, ge].indexOf(n) >= 0 ? -1 : 1,
            o =
              typeof r == "function"
                ? r(Object.assign({}, t, { placement: e }))
                : r,
            s = o[0],
            i = o[1];
          return (
            (s = s || 0),
            (i = (i || 0) * a),
            [ye, Se].indexOf(n) >= 0 ? { x: i, y: s } : { x: s, y: i }
          );
        }
        function Bi(e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            a = r.offset,
            o = a === void 0 ? [0, 0] : a,
            s = Ar.reduce(function (u, f) {
              return (u[f] = Ii(f, t.rects, o)), u;
            }, {}),
            i = s[t.placement],
            l = i.x,
            c = i.y;
          t.modifiersData.popperOffsets != null &&
            ((t.modifiersData.popperOffsets.x += l),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[n] = s);
        }
        const Hi = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: Bi,
        };
        function Ui(e) {
          var t = e.state,
            r = e.name;
          t.modifiersData[r] = Ln({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        }
        const Yi = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: Ui,
          data: {},
        };
        function ji(e) {
          return e === "x" ? "y" : "x";
        }
        function Vi(e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            a = r.mainAxis,
            o = a === void 0 ? !0 : a,
            s = r.altAxis,
            i = s === void 0 ? !1 : s,
            l = r.boundary,
            c = r.rootBoundary,
            u = r.altBoundary,
            f = r.padding,
            v = r.tether,
            m = v === void 0 ? !0 : v,
            g = r.tetherOffset,
            h = g === void 0 ? 0 : g,
            y = Nt(t, {
              boundary: l,
              rootBoundary: c,
              padding: f,
              altBoundary: u,
            }),
            D = xe(t.placement),
            E = pt(t.placement),
            M = !E,
            S = Or(D),
            O = ji(S),
            x = t.modifiersData.popperOffsets,
            F = t.rects.reference,
            $ = t.rects.popper,
            W =
              typeof h == "function"
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            N =
              typeof W == "number"
                ? { mainAxis: W, altAxis: W }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, W),
            I = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            z = { x: 0, y: 0 };
          if (x) {
            if (o) {
              var j,
                G = S === "y" ? ge : ye,
                Q = S === "y" ? Ee : Se,
                J = S === "y" ? "height" : "width",
                q = x[S],
                oe = q + y[G],
                de = q - y[Q],
                k = m ? -$[J] / 2 : 0,
                w = E === dt ? F[J] : $[J],
                A = E === dt ? -$[J] : -F[J],
                T = t.elements.arrow,
                p = m && T ? Mr(T) : { width: 0, height: 0 },
                b = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : Cn(),
                C = b[G],
                P = b[Q],
                H = $t(0, F[J], p[J]),
                X = M
                  ? F[J] / 2 - k - H - C - N.mainAxis
                  : w - H - C - N.mainAxis,
                re = M
                  ? -F[J] / 2 + k + H + P + N.mainAxis
                  : A + H + P + N.mainAxis,
                ve = t.elements.arrow && Ft(t.elements.arrow),
                Oe = ve
                  ? S === "y"
                    ? ve.clientTop || 0
                    : ve.clientLeft || 0
                  : 0,
                $e = (j = I?.[S]) != null ? j : 0,
                at = q + X - $e - Oe,
                qr = q + re - $e,
                eo = $t(m ? Xt(oe, at) : oe, q, m ? et(de, qr) : de);
              (x[S] = eo), (z[S] = eo - q);
            }
            if (i) {
              var to,
                Ed = S === "x" ? ge : ye,
                Sd = S === "x" ? Ee : Se,
                ot = x[O],
                vr = O === "y" ? "height" : "width",
                ro = ot + y[Ed],
                no = ot - y[Sd],
                en = [ge, ye].indexOf(D) !== -1,
                ao = (to = I?.[O]) != null ? to : 0,
                oo = en ? ro : ot - F[vr] - $[vr] - ao + N.altAxis,
                io = en ? ot + F[vr] + $[vr] - ao - N.altAxis : no,
                so =
                  m && en ? pi(oo, ot, io) : $t(m ? oo : ro, ot, m ? io : no);
              (x[O] = so), (z[O] = so - ot);
            }
            t.modifiersData[n] = z;
          }
        }
        const Ki = {
          name: "preventOverflow",
          enabled: !0,
          phase: "main",
          fn: Vi,
          requiresIfExists: ["offset"],
        };
        function _i(e) {
          return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
        }
        function Gi(e) {
          return e === Ae(e) || !Pe(e) ? Rr(e) : _i(e);
        }
        function Xi(e) {
          var t = e.getBoundingClientRect(),
            r = vt(t.width) / e.offsetWidth || 1,
            n = vt(t.height) / e.offsetHeight || 1;
          return r !== 1 || n !== 1;
        }
        function Ji(e, t, r) {
          r === void 0 && (r = !1);
          var n = Pe(t),
            a = Pe(t) && Xi(t),
            o = We(t),
            s = mt(e, a, r),
            i = { scrollLeft: 0, scrollTop: 0 },
            l = { x: 0, y: 0 };
          return (
            (n || (!n && !r)) &&
              ((ze(t) !== "body" || Cr(o)) && (i = Gi(t)),
              Pe(t)
                ? ((l = mt(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
                : o && (l.x = Tr(o))),
            {
              x: s.left + i.scrollLeft - l.x,
              y: s.top + i.scrollTop - l.y,
              width: s.width,
              height: s.height,
            }
          );
        }
        function Zi(e) {
          var t = new Map(),
            r = new Set(),
            n = [];
          e.forEach(function (o) {
            t.set(o.name, o);
          });
          function a(o) {
            r.add(o.name);
            var s = [].concat(o.requires || [], o.requiresIfExists || []);
            s.forEach(function (i) {
              if (!r.has(i)) {
                var l = t.get(i);
                l && a(l);
              }
            }),
              n.push(o);
          }
          return (
            e.forEach(function (o) {
              r.has(o.name) || a(o);
            }),
            n
          );
        }
        function Qi(e) {
          var t = Zi(e);
          return ci.reduce(function (r, n) {
            return r.concat(
              t.filter(function (a) {
                return a.phase === n;
              }),
            );
          }, []);
        }
        function qi(e) {
          var t;
          return function () {
            return (
              t ||
                (t = new Promise(function (r) {
                  Promise.resolve().then(function () {
                    (t = void 0), r(e());
                  });
                })),
              t
            );
          };
        }
        function es(e) {
          var t = e.reduce(function (r, n) {
            var a = r[n.name];
            return (
              (r[n.name] = a
                ? Object.assign({}, a, n, {
                    options: Object.assign({}, a.options, n.options),
                    data: Object.assign({}, a.data, n.data),
                  })
                : n),
              r
            );
          }, {});
          return Object.keys(t).map(function (r) {
            return t[r];
          });
        }
        var In = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Bn() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return !t.some(function (n) {
            return !(n && typeof n.getBoundingClientRect == "function");
          });
        }
        function ts(e) {
          e === void 0 && (e = {});
          var t = e,
            r = t.defaultModifiers,
            n = r === void 0 ? [] : r,
            a = t.defaultOptions,
            o = a === void 0 ? In : a;
          return function (i, l, c) {
            c === void 0 && (c = o);
            var u = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, In, o),
                modifiersData: {},
                elements: { reference: i, popper: l },
                attributes: {},
                styles: {},
              },
              f = [],
              v = !1,
              m = {
                state: u,
                setOptions: function (D) {
                  var E = typeof D == "function" ? D(u.options) : D;
                  h(),
                    (u.options = Object.assign({}, o, u.options, E)),
                    (u.scrollParents = {
                      reference: qe(i)
                        ? kt(i)
                        : i.contextElement
                          ? kt(i.contextElement)
                          : [],
                      popper: kt(l),
                    });
                  var M = Qi(es([].concat(n, u.options.modifiers)));
                  return (
                    (u.orderedModifiers = M.filter(function (S) {
                      return S.enabled;
                    })),
                    g(),
                    m.update()
                  );
                },
                forceUpdate: function () {
                  if (!v) {
                    var D = u.elements,
                      E = D.reference,
                      M = D.popper;
                    if (Bn(E, M)) {
                      (u.rects = {
                        reference: Ji(E, Ft(M), u.options.strategy === "fixed"),
                        popper: Mr(M),
                      }),
                        (u.reset = !1),
                        (u.placement = u.options.placement),
                        u.orderedModifiers.forEach(function (N) {
                          return (u.modifiersData[N.name] = Object.assign(
                            {},
                            N.data,
                          ));
                        });
                      for (var S = 0; S < u.orderedModifiers.length; S++) {
                        if (u.reset === !0) {
                          (u.reset = !1), (S = -1);
                          continue;
                        }
                        var O = u.orderedModifiers[S],
                          x = O.fn,
                          F = O.options,
                          $ = F === void 0 ? {} : F,
                          W = O.name;
                        typeof x == "function" &&
                          (u =
                            x({ state: u, options: $, name: W, instance: m }) ||
                            u);
                      }
                    }
                  }
                },
                update: qi(function () {
                  return new Promise(function (y) {
                    m.forceUpdate(), y(u);
                  });
                }),
                destroy: function () {
                  h(), (v = !0);
                },
              };
            if (!Bn(i, l)) return m;
            m.setOptions(c).then(function (y) {
              !v && c.onFirstUpdate && c.onFirstUpdate(y);
            });
            function g() {
              u.orderedModifiers.forEach(function (y) {
                var D = y.name,
                  E = y.options,
                  M = E === void 0 ? {} : E,
                  S = y.effect;
                if (typeof S == "function") {
                  var O = S({ state: u, name: D, instance: m, options: M }),
                    x = function () {};
                  f.push(O || x);
                }
              });
            }
            function h() {
              f.forEach(function (y) {
                return y();
              }),
                (f = []);
            }
            return m;
          };
        }
        var Td = null,
          rs = ts({ defaultModifiers: [Wi, Yi, Ei, Mi, Hi, Li, Ki, wi] }),
          Hn = function (t) {
            return {
              position: t,
              top: "0",
              left: "0",
              opacity: "0",
              pointerEvents: "none",
            };
          },
          ns = { name: "applyStyles", enabled: !1 },
          as = {
            name: "ariaDescribedBy",
            enabled: !0,
            phase: "afterWrite",
            effect: function (t) {
              var r = t.state;
              return function () {
                var n = r.elements,
                  a = n.reference,
                  o = n.popper;
                if ("removeAttribute" in a) {
                  var s = (a.getAttribute("aria-describedby") || "")
                    .split(",")
                    .filter(function (i) {
                      return i.trim() !== o.id;
                    });
                  s.length
                    ? a.setAttribute("aria-describedby", s.join(","))
                    : a.removeAttribute("aria-describedby");
                }
              };
            },
            fn: function (t) {
              var r,
                n = t.state,
                a = n.elements,
                o = a.popper,
                s = a.reference,
                i =
                  (r = o.getAttribute("role")) == null
                    ? void 0
                    : r.toLowerCase();
              if (o.id && i === "tooltip" && "setAttribute" in s) {
                var l = s.getAttribute("aria-describedby");
                if (l && l.split(",").indexOf(o.id) !== -1) return;
                s.setAttribute("aria-describedby", l ? l + "," + o.id : o.id);
              }
            },
          },
          os = [];
        function is(e, t, r) {
          var n = r === void 0 ? {} : r,
            a = n.enabled,
            o = a === void 0 ? !0 : a,
            s = n.placement,
            i = s === void 0 ? "bottom" : s,
            l = n.strategy,
            c = l === void 0 ? "absolute" : l,
            u = n.modifiers,
            f = u === void 0 ? os : u,
            v = (0, Ve.A)(n, ["enabled", "placement", "strategy", "modifiers"]),
            m = (0, d.useRef)(),
            g = (0, d.useCallback)(function () {
              var S;
              (S = m.current) == null || S.update();
            }, []),
            h = (0, d.useCallback)(function () {
              var S;
              (S = m.current) == null || S.forceUpdate();
            }, []),
            y = di(
              (0, d.useState)({
                placement: i,
                update: g,
                forceUpdate: h,
                attributes: {},
                styles: { popper: Hn(c), arrow: {} },
              }),
            ),
            D = y[0],
            E = y[1],
            M = (0, d.useMemo)(
              function () {
                return {
                  name: "updateStateModifier",
                  enabled: !0,
                  phase: "write",
                  requires: ["computeStyles"],
                  fn: function (O) {
                    var x = O.state,
                      F = {},
                      $ = {};
                    Object.keys(x.elements).forEach(function (W) {
                      (F[W] = x.styles[W]), ($[W] = x.attributes[W]);
                    }),
                      E({
                        state: x,
                        styles: F,
                        attributes: $,
                        update: g,
                        forceUpdate: h,
                        placement: x.placement,
                      });
                  },
                };
              },
              [g, h, E],
            );
          return (
            (0, d.useEffect)(
              function () {
                !m.current ||
                  !o ||
                  m.current.setOptions({
                    placement: i,
                    strategy: c,
                    modifiers: [].concat(f, [M, ns]),
                  });
              },
              [c, i, M, o],
            ),
            (0, d.useEffect)(
              function () {
                if (!(!o || e == null || t == null))
                  return (
                    (m.current = rs(
                      e,
                      t,
                      (0, ue.A)({}, v, {
                        placement: i,
                        strategy: c,
                        modifiers: [].concat(f, [as, M]),
                      }),
                    )),
                    function () {
                      m.current != null &&
                        (m.current.destroy(),
                        (m.current = void 0),
                        E(function (S) {
                          return (0, ue.A)({}, S, {
                            attributes: {},
                            styles: { popper: Hn(c) },
                          });
                        }));
                    }
                  );
              },
              [o, e, t],
            ),
            D
          );
        }
        const ss = is;
        var Pr = !1,
          Fr = !1;
        try {
          var $r = {
            get passive() {
              return (Pr = !0);
            },
            get once() {
              return (Fr = Pr = !0);
            },
          };
          yr &&
            (window.addEventListener("test", $r, $r),
            window.removeEventListener("test", $r, !0));
        } catch {}
        function ls(e, t, r, n) {
          if (n && typeof n != "boolean" && !Fr) {
            var a = n.once,
              o = n.capture,
              s = r;
            !Fr &&
              a &&
              ((s =
                r.__once ||
                function i(l) {
                  this.removeEventListener(t, i, o), r.call(this, l);
                }),
              (r.__once = s)),
              e.addEventListener(t, s, Pr ? n : o);
          }
          e.addEventListener(t, r, n);
        }
        const cs = ls;
        function us(e, t, r, n) {
          var a = n && typeof n != "boolean" ? n.capture : n;
          e.removeEventListener(t, r, a),
            r.__once && e.removeEventListener(t, r.__once, a);
        }
        const fs = us;
        function ds(e, t, r, n) {
          return (
            cs(e, t, r, n),
            function () {
              fs(e, t, r, n);
            }
          );
        }
        const Lt = ds;
        function vs(e) {
          const t = (0, d.useRef)(e);
          return (
            (0, d.useEffect)(() => {
              t.current = e;
            }, [e]),
            t
          );
        }
        const ms = vs;
        function Un(e) {
          const t = ms(e);
          return (0, d.useCallback)(
            function (...r) {
              return t.current && t.current(...r);
            },
            [t],
          );
        }
        var ps = R(67501),
          hs = R.n(ps);
        function gs(e) {
          return e && "setState" in e ? Dn.findDOMNode(e) : (e ?? null);
        }
        const ys = function (e) {
          return Rt(gs(e));
        };
        var ws = 27,
          Yn = function () {};
        function bs(e) {
          return e.button === 0;
        }
        function Ds(e) {
          return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
        }
        var jn = function (t) {
          return t && ("current" in t ? t.current : t);
        };
        function As(e, t, r) {
          var n = r === void 0 ? {} : r,
            a = n.disabled,
            o = n.clickTrigger,
            s = o === void 0 ? "click" : o,
            i = (0, d.useRef)(!1),
            l = t || Yn,
            c = (0, d.useCallback)(
              function (v) {
                var m,
                  g = jn(e);
                hs()(
                  !!g,
                  "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node",
                ),
                  (i.current =
                    !g ||
                    Ds(v) ||
                    !bs(v) ||
                    !!Tt(
                      g,
                      (m =
                        v.composedPath == null
                          ? void 0
                          : v.composedPath()[0]) != null
                        ? m
                        : v.target,
                    ));
              },
              [e],
            ),
            u = Un(function (v) {
              i.current || l(v);
            }),
            f = Un(function (v) {
              v.keyCode === ws && l(v);
            });
          (0, d.useEffect)(
            function () {
              if (!(a || e == null)) {
                var v = window.event,
                  m = ys(jn(e)),
                  g = Lt(m, s, c, !0),
                  h = Lt(m, s, function (E) {
                    if (E === v) {
                      v = void 0;
                      return;
                    }
                    u(E);
                  }),
                  y = Lt(m, "keyup", function (E) {
                    if (E === v) {
                      v = void 0;
                      return;
                    }
                    f(E);
                  }),
                  D = [];
                return (
                  "ontouchstart" in m.documentElement &&
                    (D = [].slice.call(m.body.children).map(function (E) {
                      return Lt(E, "mousemove", Yn);
                    })),
                  function () {
                    g(),
                      h(),
                      y(),
                      D.forEach(function (E) {
                        return E();
                      });
                  }
                );
              }
            },
            [e, a, s, c, u, f],
          );
        }
        const Es = As;
        var kr = function (t) {
          var r;
          return typeof document > "u"
            ? null
            : t == null
              ? Rt().body
              : (typeof t == "function" && (t = t()),
                t && "current" in t && (t = t.current),
                ((r = t) != null && r.nodeType && t) || null);
        };
        function Vn(e, t) {
          var r = (0, d.useState)(function () {
              return kr(e);
            }),
            n = r[0],
            a = r[1];
          if (!n) {
            var o = kr(e);
            o && a(o);
          }
          return (
            (0, d.useEffect)(
              function () {
                t && n && t(n);
              },
              [t, n],
            ),
            (0, d.useEffect)(
              function () {
                var s = kr(e);
                s !== n && a(s);
              },
              [e, n],
            ),
            n
          );
        }
        function Ss(e) {
          var t = {};
          return Array.isArray(e)
            ? (e?.forEach(function (r) {
                t[r.name] = r;
              }),
              t)
            : e || t;
        }
        function Ms(e) {
          return (
            e === void 0 && (e = {}),
            Array.isArray(e)
              ? e
              : Object.keys(e).map(function (t) {
                  return (e[t].name = t), e[t];
                })
          );
        }
        function Os(e) {
          var t,
            r,
            n,
            a,
            o = e.enabled,
            s = e.enableEvents,
            i = e.placement,
            l = e.flip,
            c = e.offset,
            u = e.fixed,
            f = e.containerPadding,
            v = e.arrowElement,
            m = e.popperConfig,
            g = m === void 0 ? {} : m,
            h = Ss(g.modifiers);
          return (0, ue.A)({}, g, {
            placement: i,
            enabled: o,
            strategy: u ? "fixed" : g.strategy,
            modifiers: Ms(
              (0, ue.A)({}, h, {
                eventListeners: { enabled: s },
                preventOverflow: (0, ue.A)({}, h.preventOverflow, {
                  options: f
                    ? (0, ue.A)(
                        { padding: f },
                        (t = h.preventOverflow) == null ? void 0 : t.options,
                      )
                    : (r = h.preventOverflow) == null
                      ? void 0
                      : r.options,
                }),
                offset: {
                  options: (0, ue.A)(
                    { offset: c },
                    (n = h.offset) == null ? void 0 : n.options,
                  ),
                },
                arrow: (0, ue.A)({}, h.arrow, {
                  enabled: !!v,
                  options: (0, ue.A)(
                    {},
                    (a = h.arrow) == null ? void 0 : a.options,
                    { element: v },
                  ),
                }),
                flip: (0, ue.A)({ enabled: !!l }, h.flip),
              }),
            ),
          });
        }
        var Nr = d.forwardRef(function (e, t) {
          var r = e.flip,
            n = e.offset,
            a = e.placement,
            o = e.containerPadding,
            s = o === void 0 ? 5 : o,
            i = e.popperConfig,
            l = i === void 0 ? {} : i,
            c = e.transition,
            u = An(),
            f = u[0],
            v = u[1],
            m = An(),
            g = m[0],
            h = m[1],
            y = Zo(v, t),
            D = Vn(e.container),
            E = Vn(e.target),
            M = (0, d.useState)(!e.show),
            S = M[0],
            O = M[1],
            x = ss(
              E,
              f,
              Os({
                placement: a,
                enableEvents: !!e.show,
                containerPadding: s || 5,
                flip: r,
                offset: n,
                arrowElement: g,
                popperConfig: l,
              }),
            ),
            F = x.styles,
            $ = x.attributes,
            W = (0, Ve.A)(x, ["styles", "attributes"]);
          e.show ? S && O(!1) : !e.transition && !S && O(!0);
          var N = function () {
              O(!0), e.onExited && e.onExited.apply(e, arguments);
            },
            I = e.show || (c && !S);
          if (
            (Es(f, e.onHide, {
              disabled: !e.rootClose || e.rootCloseDisabled,
              clickTrigger: e.rootCloseEvent,
            }),
            !I)
          )
            return null;
          var z = e.children(
            (0, ue.A)({}, W, {
              show: !!e.show,
              props: (0, ue.A)({}, $.popper, { style: F.popper, ref: y }),
              arrowProps: (0, ue.A)({}, $.arrow, { style: F.arrow, ref: h }),
            }),
          );
          if (c) {
            var j = e.onExit,
              G = e.onExiting,
              Q = e.onEnter,
              J = e.onEntering,
              q = e.onEntered;
            z = d.createElement(
              c,
              {
                in: e.show,
                appear: !0,
                onExit: j,
                onExiting: G,
                onExited: N,
                onEnter: Q,
                onEntering: J,
                onEntered: q,
              },
              z,
            );
          }
          return D ? Dn.createPortal(z, D) : null;
        });
        (Nr.displayName = "Overlay"),
          (Nr.propTypes = {
            show: L().bool,
            placement: L().oneOf(Ar),
            target: L().any,
            container: L().any,
            flip: L().bool,
            children: L().func.isRequired,
            containerPadding: L().number,
            popperConfig: L().object,
            rootClose: L().bool,
            rootCloseEvent: L().oneOf(["click", "mousedown"]),
            rootCloseDisabled: L().bool,
            onHide: function (t) {
              for (
                var r = arguments.length,
                  n = new Array(r > 1 ? r - 1 : 0),
                  a = 1;
                a < r;
                a++
              )
                n[a - 1] = arguments[a];
              if (t.rootClose) {
                var o;
                return (o = L().func).isRequired.apply(o, [t].concat(n));
              }
              return L().func.apply(L(), [t].concat(n));
            },
            transition: L().elementType,
            onEnter: L().func,
            onEntering: L().func,
            onEntered: L().func,
            onExit: L().func,
            onExiting: L().func,
            onExited: L().func,
          });
        const Rs = Nr;
        var Ts = R(13964);
        function Cs(e, t) {
          return (0, Ts.A)(e, t);
        }
        const xs = Cs;
        function Lr(e, t) {
          var r = gr(e);
          return r ? r.innerHeight : t ? e.clientHeight : Qe(e).height;
        }
        var Ps = Function.prototype.bind.call(
          Function.prototype.call,
          [].slice,
        );
        function Fs(e, t) {
          return Ps(e.querySelectorAll(t));
        }
        var zr;
        function $s(e, t) {
          if (!zr) {
            var r = document.body,
              n =
                r.matches ||
                r.matchesSelector ||
                r.webkitMatchesSelector ||
                r.mozMatchesSelector ||
                r.msMatchesSelector;
            zr = function (o, s) {
              return n.call(o, s);
            };
          }
          return zr(e, t);
        }
        function Kn(e, t, r) {
          e.closest && !r && e.closest(t);
          var n = e;
          do {
            if ($s(n, t)) return n;
            n = n.parentElement;
          } while (n && n !== r && n.nodeType === document.ELEMENT_NODE);
          return null;
        }
        function ks(e, t, r, n) {
          for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
            if (t(e[o], o, e)) return o;
          return -1;
        }
        const Ns = ks;
        var qt = R(17267),
          Ls = Math.max;
        function zs(e, t, r) {
          var n = e == null ? 0 : e.length;
          if (!n) return -1;
          var a = r == null ? 0 : dn(r);
          return a < 0 && (a = Ls(n + a, 0)), Ns(e, (0, qt.A)(t, 3), a);
        }
        const Ws = zs;
        var Is = Math.ceil,
          Bs = Math.max;
        function Hs(e, t, r, n) {
          for (
            var a = -1, o = Bs(Is((t - e) / (r || 1)), 0), s = Array(o);
            o--;
          )
            (s[n ? o : ++a] = e), (e += r);
          return s;
        }
        const Us = Hs;
        function Ys(e) {
          return function (t, r, n) {
            return (
              n &&
                typeof n != "number" &&
                (0, Ot.A)(t, r, n) &&
                (r = n = void 0),
              (t = _t(t)),
              r === void 0 ? ((r = t), (t = 0)) : (r = _t(r)),
              (n = n === void 0 ? (t < r ? 1 : -1) : _t(n)),
              Us(t, r, n, e)
            );
          };
        }
        var js = Ys();
        const Vs = js;
        var _n =
          Number.isNaN ||
          function (t) {
            return typeof t == "number" && t !== t;
          };
        function Ks(e, t) {
          return !!(e === t || (_n(e) && _n(t)));
        }
        function _s(e, t) {
          if (e.length !== t.length) return !1;
          for (var r = 0; r < e.length; r++) if (!Ks(e[r], t[r])) return !1;
          return !0;
        }
        function Gn(e, t) {
          t === void 0 && (t = _s);
          var r = null;
          function n() {
            for (var a = [], o = 0; o < arguments.length; o++)
              a[o] = arguments[o];
            if (r && r.lastThis === this && t(a, r.lastArgs))
              return r.lastResult;
            var s = e.apply(this, a);
            return (r = { lastResult: s, lastArgs: a, lastThis: this }), s;
          }
          return (
            (n.clear = function () {
              r = null;
            }),
            n
          );
        }
        var Gs = R(59913),
          Xn = R(17488),
          er = R(35953),
          Xs = R(47546),
          tr = R(27761),
          Jn = er.A ? er.A.isConcatSpreadable : void 0;
        function Js(e) {
          return (0, tr.A)(e) || (0, Xs.A)(e) || !!(Jn && e && e[Jn]);
        }
        const Zs = Js;
        function Zn(e, t, r, n, a) {
          var o = -1,
            s = e.length;
          for (r || (r = Zs), a || (a = []); ++o < s; ) {
            var i = e[o];
            t > 0 && r(i)
              ? t > 1
                ? Zn(i, t - 1, r, n, a)
                : (0, Xn.A)(a, i)
              : n || (a[a.length] = i);
          }
          return a;
        }
        const Qn = Zn;
        var rr = R(4516),
          qn = R(78350),
          Qs = R(64600);
        function qs(e, t) {
          var r = e.length;
          for (e.sort(t); r--; ) e[r] = e[r].value;
          return e;
        }
        const el = qs;
        var Wr = R(93365),
          ea = R(73914);
        function tl(e, t) {
          if (e !== t) {
            var r = e !== void 0,
              n = e === null,
              a = e === e,
              o = (0, ea.A)(e),
              s = t !== void 0,
              i = t === null,
              l = t === t,
              c = (0, ea.A)(t);
            if (
              (!i && !c && !o && e > t) ||
              (o && s && l && !i && !c) ||
              (n && s && l) ||
              (!r && l) ||
              !a
            )
              return 1;
            if (
              (!n && !o && !c && e < t) ||
              (c && r && a && !n && !o) ||
              (i && r && a) ||
              (!s && a) ||
              !l
            )
              return -1;
          }
          return 0;
        }
        const rl = tl;
        function nl(e, t, r) {
          for (
            var n = -1,
              a = e.criteria,
              o = t.criteria,
              s = a.length,
              i = r.length;
            ++n < s;
          ) {
            var l = rl(a[n], o[n]);
            if (l) {
              if (n >= i) return l;
              var c = r[n];
              return l * (c == "desc" ? -1 : 1);
            }
          }
          return e.index - t.index;
        }
        const al = nl;
        var ol = R(41040);
        function il(e, t, r) {
          t.length
            ? (t = (0, rr.A)(t, function (o) {
                return (0, tr.A)(o)
                  ? function (s) {
                      return (0, qn.A)(s, o.length === 1 ? o[0] : o);
                    }
                  : o;
              }))
            : (t = [ol.A]);
          var n = -1;
          t = (0, rr.A)(t, (0, Wr.A)(qt.A));
          var a = (0, Qs.A)(e, function (o, s, i) {
            var l = (0, rr.A)(t, function (c) {
              return c(o);
            });
            return { criteria: l, index: ++n, value: o };
          });
          return el(a, function (o, s) {
            return al(o, s, r);
          });
        }
        const sl = il;
        var ta = R(83270),
          ll = (0, ta.A)(function (e, t) {
            if (e == null) return [];
            var r = t.length;
            return (
              r > 1 && (0, Ot.A)(e, t[0], t[1])
                ? (t = [])
                : r > 2 && (0, Ot.A)(t[0], t[1], t[2]) && (t = [t[0]]),
              sl(e, Qn(t, 1), [])
            );
          });
        const cl = ll;
        var nr;
        function ra(e) {
          if (((!nr && nr !== 0) || e) && yr) {
            var t = document.createElement("div");
            (t.style.position = "absolute"),
              (t.style.top = "-9999px"),
              (t.style.width = "50px"),
              (t.style.height = "50px"),
              (t.style.overflow = "scroll"),
              document.body.appendChild(t),
              (nr = t.offsetWidth - t.clientWidth),
              document.body.removeChild(t);
          }
          return nr;
        }
        function Ir(e, t) {
          var r = gr(e);
          return r ? r.innerWidth : t ? e.clientWidth : Qe(e).width;
        }
        var ul = R(87537),
          fl = R(76805),
          dl = R(78296),
          vl = R(79474);
        function na(e) {
          return (0, ul.A)(e) || (0, fl.A)(e) || (0, dl.A)(e) || (0, vl.A)();
        }
        var ml = R(39234),
          pl = R(16673),
          hl = R(9175),
          aa = R(13217),
          gl = R(99763),
          zt = R(84207),
          oa = R(74603);
        function yl(e, t) {
          return e && (0, zt.A)(t, (0, oa.A)(t), e);
        }
        const wl = yl;
        var ar = R(70158);
        function bl(e, t) {
          return e && (0, zt.A)(t, (0, ar.A)(t), e);
        }
        const Dl = bl;
        var Al = R(4685),
          El = R(80335),
          ia = R(25606);
        function Sl(e, t) {
          return (0, zt.A)(e, (0, ia.A)(e), t);
        }
        const Ml = Sl;
        var sa = R(57695),
          Ol = R(72097),
          Rl = Object.getOwnPropertySymbols,
          Tl = Rl
            ? function (e) {
                for (var t = []; e; )
                  (0, Xn.A)(t, (0, ia.A)(e)), (e = (0, sa.A)(e));
                return t;
              }
            : Ol.A;
        const la = Tl;
        function Cl(e, t) {
          return (0, zt.A)(e, la(e), t);
        }
        const xl = Cl;
        var Pl = R(81218),
          Fl = R(80647);
        function $l(e) {
          return (0, Fl.A)(e, ar.A, la);
        }
        const ca = $l;
        var Br = R(14645),
          kl = Object.prototype,
          Nl = kl.hasOwnProperty;
        function Ll(e) {
          var t = e.length,
            r = new e.constructor(t);
          return (
            t &&
              typeof e[0] == "string" &&
              Nl.call(e, "index") &&
              ((r.index = e.index), (r.input = e.input)),
            r
          );
        }
        const zl = Ll;
        var ua = R(18277);
        function Wl(e, t) {
          var r = t ? (0, ua.A)(e.buffer) : e.buffer;
          return new e.constructor(r, e.byteOffset, e.byteLength);
        }
        const Il = Wl;
        var Bl = /\w*$/;
        function Hl(e) {
          var t = new e.constructor(e.source, Bl.exec(e));
          return (t.lastIndex = e.lastIndex), t;
        }
        const Ul = Hl;
        var fa = er.A ? er.A.prototype : void 0,
          da = fa ? fa.valueOf : void 0;
        function Yl(e) {
          return da ? Object(da.call(e)) : {};
        }
        const jl = Yl;
        var Vl = R(12649),
          Kl = "[object Boolean]",
          _l = "[object Date]",
          Gl = "[object Map]",
          Xl = "[object Number]",
          Jl = "[object RegExp]",
          Zl = "[object Set]",
          Ql = "[object String]",
          ql = "[object Symbol]",
          ec = "[object ArrayBuffer]",
          tc = "[object DataView]",
          rc = "[object Float32Array]",
          nc = "[object Float64Array]",
          ac = "[object Int8Array]",
          oc = "[object Int16Array]",
          ic = "[object Int32Array]",
          sc = "[object Uint8Array]",
          lc = "[object Uint8ClampedArray]",
          cc = "[object Uint16Array]",
          uc = "[object Uint32Array]";
        function fc(e, t, r) {
          var n = e.constructor;
          switch (t) {
            case ec:
              return (0, ua.A)(e);
            case Kl:
            case _l:
              return new n(+e);
            case tc:
              return Il(e, r);
            case rc:
            case nc:
            case ac:
            case oc:
            case ic:
            case sc:
            case lc:
            case cc:
            case uc:
              return (0, Vl.A)(e, r);
            case Gl:
              return new n();
            case Xl:
            case Ql:
              return new n(e);
            case Jl:
              return Ul(e);
            case Zl:
              return new n();
            case ql:
              return jl(e);
          }
        }
        const dc = fc;
        var vc = R(43577),
          va = R(6314),
          ma = R(83658),
          mc = "[object Map]";
        function pc(e) {
          return (0, ma.A)(e) && (0, Br.A)(e) == mc;
        }
        const hc = pc;
        var or = R(23785),
          pa = or.A && or.A.isMap,
          gc = pa ? (0, Wr.A)(pa) : hc;
        const yc = gc;
        var ha = R(35181),
          wc = "[object Set]";
        function bc(e) {
          return (0, ma.A)(e) && (0, Br.A)(e) == wc;
        }
        const Dc = bc;
        var ga = or.A && or.A.isSet,
          Ac = ga ? (0, Wr.A)(ga) : Dc;
        const Ec = Ac;
        var Sc = 1,
          Mc = 2,
          Oc = 4,
          ya = "[object Arguments]",
          Rc = "[object Array]",
          Tc = "[object Boolean]",
          Cc = "[object Date]",
          xc = "[object Error]",
          wa = "[object Function]",
          Pc = "[object GeneratorFunction]",
          Fc = "[object Map]",
          $c = "[object Number]",
          ba = "[object Object]",
          kc = "[object RegExp]",
          Nc = "[object Set]",
          Lc = "[object String]",
          zc = "[object Symbol]",
          Wc = "[object WeakMap]",
          Ic = "[object ArrayBuffer]",
          Bc = "[object DataView]",
          Hc = "[object Float32Array]",
          Uc = "[object Float64Array]",
          Yc = "[object Int8Array]",
          jc = "[object Int16Array]",
          Vc = "[object Int32Array]",
          Kc = "[object Uint8Array]",
          _c = "[object Uint8ClampedArray]",
          Gc = "[object Uint16Array]",
          Xc = "[object Uint32Array]",
          ae = {};
        (ae[ya] =
          ae[Rc] =
          ae[Ic] =
          ae[Bc] =
          ae[Tc] =
          ae[Cc] =
          ae[Hc] =
          ae[Uc] =
          ae[Yc] =
          ae[jc] =
          ae[Vc] =
          ae[Fc] =
          ae[$c] =
          ae[ba] =
          ae[kc] =
          ae[Nc] =
          ae[Lc] =
          ae[zc] =
          ae[Kc] =
          ae[_c] =
          ae[Gc] =
          ae[Xc] =
            !0),
          (ae[xc] = ae[wa] = ae[Wc] = !1);
        function ir(e, t, r, n, a, o) {
          var s,
            i = t & Sc,
            l = t & Mc,
            c = t & Oc;
          if ((r && (s = a ? r(e, n, a, o) : r(e)), s !== void 0)) return s;
          if (!(0, ha.A)(e)) return e;
          var u = (0, tr.A)(e);
          if (u) {
            if (((s = zl(e)), !i)) return (0, El.A)(e, s);
          } else {
            var f = (0, Br.A)(e),
              v = f == wa || f == Pc;
            if ((0, va.A)(e)) return (0, Al.A)(e, i);
            if (f == ba || f == ya || (v && !a)) {
              if (((s = l || v ? {} : (0, vc.A)(e)), !i))
                return l ? xl(e, Dl(s, e)) : Ml(e, wl(s, e));
            } else {
              if (!ae[f]) return a ? e : {};
              s = dc(e, f, i);
            }
          }
          o || (o = new hl.A());
          var m = o.get(e);
          if (m) return m;
          o.set(e, s),
            Ec(e)
              ? e.forEach(function (y) {
                  s.add(ir(y, t, r, y, e, o));
                })
              : yc(e) &&
                e.forEach(function (y, D) {
                  s.set(D, ir(y, t, r, D, e, o));
                });
          var g = c ? (l ? ca : Pl.A) : l ? ar.A : oa.A,
            h = u ? void 0 : g(e);
          return (
            (0, aa.A)(h || e, function (y, D) {
              h && ((D = y), (y = e[D])), (0, gl.A)(s, D, ir(y, t, r, D, e, o));
            }),
            s
          );
        }
        const Jc = ir;
        var Da = R(1931);
        function Zc(e) {
          var t = e == null ? 0 : e.length;
          return t ? e[t - 1] : void 0;
        }
        const Qc = Zc;
        function qc(e, t) {
          return t.length < 2 ? e : (0, qn.A)(e, un(t, 0, -1));
        }
        const eu = qc;
        var tu = R(5269);
        function ru(e, t) {
          return (
            (t = (0, Da.A)(t, e)),
            (e = eu(e, t)),
            e == null || delete e[(0, tu.A)(Qc(t))]
          );
        }
        const nu = ru;
        var au = R(77011);
        function ou(e) {
          return (0, au.A)(e) ? void 0 : e;
        }
        const iu = ou;
        function su(e) {
          var t = e == null ? 0 : e.length;
          return t ? Qn(e, 1) : [];
        }
        const lu = su;
        var cu = R(75702),
          uu = R(99660);
        function fu(e) {
          return (0, uu.A)((0, cu.A)(e, void 0, lu), e + "");
        }
        const du = fu;
        var vu = 1,
          mu = 2,
          pu = 4,
          hu = du(function (e, t) {
            var r = {};
            if (e == null) return r;
            var n = !1;
            (t = (0, rr.A)(t, function (o) {
              return (o = (0, Da.A)(o, e)), n || (n = o.length > 1), o;
            })),
              (0, zt.A)(e, ca(e), r),
              n && (r = Jc(r, vu | mu | pu, iu));
            for (var a = t.length; a--; ) nu(r, t[a]);
            return r;
          });
        const gu = hu;
        var yu = R(58760),
          Aa = Object.prototype,
          wu = Aa.hasOwnProperty,
          bu = (0, ta.A)(function (e, t) {
            e = Object(e);
            var r = -1,
              n = t.length,
              a = n > 2 ? t[2] : void 0;
            for (a && (0, Ot.A)(t[0], t[1], a) && (n = 1); ++r < n; )
              for (
                var o = t[r], s = (0, ar.A)(o), i = -1, l = s.length;
                ++i < l;
              ) {
                var c = s[i],
                  u = e[c];
                (u === void 0 || ((0, yu.A)(u, Aa[c]) && !wu.call(e, c))) &&
                  (e[c] = o[c]);
              }
            return e;
          });
        const Du = bu;
        var Au = R(5536),
          Ea = R(25665),
          Eu = R(30186),
          Su = R(48693);
        function Mu(e, t, r) {
          var n = (0, tr.A)(e),
            a = n || (0, va.A)(e) || (0, Su.A)(e);
          if (((t = (0, qt.A)(t, 4)), r == null)) {
            var o = e && e.constructor;
            a
              ? (r = n ? new o() : [])
              : (0, ha.A)(e)
                ? (r = (0, Eu.A)(o) ? (0, Au.A)((0, sa.A)(e)) : {})
                : (r = {});
          }
          return (
            (a ? aa.A : Ea.A)(e, function (s, i, l) {
              return t(r, s, i, l);
            }),
            r
          );
        }
        const Ou = Mu;
        var Ru = R(63376);
        function Tu(e, t) {
          var r = {};
          return (
            (t = (0, qt.A)(t, 3)),
            (0, Ea.A)(e, function (n, a, o) {
              (0, Ru.A)(r, a, t(n, a, o));
            }),
            r
          );
        }
        const Cu = Tu;
        var xd = R(22586),
          Pd = R(20237),
          Fd = R(83632),
          $d = R(43334),
          kd = R(39920),
          Nd = R(4042),
          Ld = R(14240);
        function Me(e) {
          return e.children;
        }
        var we = {
            PREVIOUS: "PREV",
            NEXT: "NEXT",
            TODAY: "TODAY",
            DATE: "DATE",
          },
          pe = {
            MONTH: "month",
            WEEK: "week",
            WORK_WEEK: "work_week",
            DAY: "day",
            AGENDA: "agenda",
          },
          Sa = Object.keys(pe).map(function (e) {
            return pe[e];
          });
        L().oneOfType([L().string, L().func]),
          L().any,
          L().func,
          L().oneOfType([
            L().arrayOf(L().oneOf(Sa)),
            L().objectOf(function (e, t) {
              var r = Sa.indexOf(t) !== -1 && typeof e[t] == "boolean";
              if (r) return null;
              for (
                var n = arguments.length,
                  a = new Array(n > 2 ? n - 2 : 0),
                  o = 2;
                o < n;
                o++
              )
                a[o - 2] = arguments[o];
              return L().elementType.apply(L(), [e, t].concat(a));
            }),
          ]),
          L().oneOfType([L().oneOf(["overlap", "no-overlap"]), L().func]);
        function ie(e, t) {
          e && e.apply(null, [].concat(t));
        }
        var Ma = {
          seconds: 1e3,
          minutes: 1e3 * 60,
          hours: 1e3 * 60 * 60,
          day: 1e3 * 60 * 60 * 24,
        };
        function Oa(e, t) {
          var r = me(e, "month");
          return me(r, "week", t.startOfWeek());
        }
        function Ra(e, t) {
          var r = mr(e, "month");
          return mr(r, "week", t.startOfWeek());
        }
        function xu(e, t) {
          for (var r = Oa(e, t), n = Ra(e, t), a = []; St(r, n, "day"); )
            a.push(r), (r = Ce(r, 1, "day"));
          return a;
        }
        function Hr(e, t) {
          var r = me(e, t);
          return Je(r, e) ? r : Ce(r, 1, t);
        }
        function Pu(e, t) {
          for (
            var r =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : "day",
              n = e,
              a = [];
            St(n, t, r);
          )
            a.push(n), (n = Ce(n, 1, r));
          return a;
        }
        function Fu(e, t) {
          return t == null && e == null
            ? null
            : (t == null && (t = new Date()),
              e == null && (e = new Date()),
              (e = me(e, "day")),
              (e = Kt(e, Kt(t))),
              (e = Mt(e, Mt(t))),
              (e = Vt(e, Vt(t))),
              jt(e, jt(t)));
        }
        function Ta(e) {
          return Kt(e) === 0 && Mt(e) === 0 && Vt(e) === 0 && jt(e) === 0;
        }
        function Wt(e, t, r) {
          return !r || r === "milliseconds"
            ? Math.abs(+e - +t)
            : Math.round(Math.abs(+me(e, r) / Ma[r] - +me(t, r) / Ma[r]));
        }
        var $u = L().oneOfType([L().string, L().func]);
        function ku(e, t, r, n, a) {
          var o = typeof n == "function" ? n(r, a, e) : t.call(e, r, n, a);
          return (
            be()(
              o == null || typeof o == "string",
              "`localizer format(..)` must return a string, null, or undefined",
            ),
            o
          );
        }
        function Nu(e, t, r) {
          return new Date(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            0,
            t + r,
            0,
            0,
          );
        }
        function Ur(e, t) {
          return e.getTimezoneOffset() - t.getTimezoneOffset();
        }
        function Lu(e, t) {
          return Wt(e, t, "minutes") + Ur(e, t);
        }
        function zu(e) {
          var t = me(e, "day");
          return Wt(t, e, "minutes") + Ur(t, e);
        }
        function Wu(e, t) {
          return cn(e, t, "day");
        }
        function Iu(e, t, r) {
          var n = Je(e, t, "minutes");
          return n ? Yt(t, r, "minutes") : pr(t, r, "minutes");
        }
        function Bu(e) {
          var t = e.evtA,
            r = t.start,
            n = t.end,
            a = t.allDay,
            o = e.evtB,
            s = o.start,
            i = o.end,
            l = o.allDay,
            c = +me(r, "day") - +me(s, "day"),
            u = Wt(r, Hr(n, "day"), "day"),
            f = Wt(s, Hr(i, "day"), "day");
          return (
            c ||
            Math.max(f, 1) - Math.max(u, 1) ||
            !!l - !!a ||
            +r - +s ||
            +n - +i
          );
        }
        function Hu(e) {
          var t = e.event,
            r = t.start,
            n = t.end,
            a = e.range,
            o = a.start,
            s = a.end,
            i = me(r, "day"),
            l = St(i, s, "day"),
            c = ln(i, n, "minutes"),
            u = c ? pr(n, o, "minutes") : Yt(n, o, "minutes");
          return l && u;
        }
        function Uu(e, t) {
          return Je(e, t, "day");
        }
        function Yu(e, t) {
          return Ta(e) && Ta(t);
        }
        var ht = (0, U.A)(function e(t) {
          var r = this;
          (0, B.A)(this, e),
            be()(
              typeof t.format == "function",
              "date localizer `format(..)` must be a function",
            ),
            be()(
              typeof t.firstOfWeek == "function",
              "date localizer `firstOfWeek(..)` must be a function",
            ),
            (this.propType = t.propType || $u),
            (this.formats = t.formats),
            (this.format = function () {
              for (
                var n = arguments.length, a = new Array(n), o = 0;
                o < n;
                o++
              )
                a[o] = arguments[o];
              return ku.apply(void 0, [r, t.format].concat(a));
            }),
            (this.startOfWeek = t.firstOfWeek),
            (this.merge = t.merge || Fu),
            (this.inRange = t.inRange || Do),
            (this.lt = t.lt || cn),
            (this.lte = t.lte || St),
            (this.gt = t.gt || pr),
            (this.gte = t.gte || Yt),
            (this.eq = t.eq || Je),
            (this.neq = t.neq || ln),
            (this.startOf = t.startOf || me),
            (this.endOf = t.endOf || mr),
            (this.add = t.add || Ce),
            (this.range = t.range || Pu),
            (this.diff = t.diff || Wt),
            (this.ceil = t.ceil || Hr),
            (this.min = t.min || wo),
            (this.max = t.max || bo),
            (this.minutes = t.minutes || Mt),
            (this.firstVisibleDay = t.firstVisibleDay || Oa),
            (this.lastVisibleDay = t.lastVisibleDay || Ra),
            (this.visibleDays = t.visibleDays || xu),
            (this.getSlotDate = t.getSlotDate || Nu),
            (this.getTimezoneOffset =
              t.getTimezoneOffset ||
              function (n) {
                return n.getTimezoneOffset();
              }),
            (this.getDstOffset = t.getDstOffset || Ur),
            (this.getTotalMin = t.getTotalMin || Lu),
            (this.getMinutesFromMidnight = t.getMinutesFromMidnight || zu),
            (this.continuesPrior = t.continuesPrior || Wu),
            (this.continuesAfter = t.continuesAfter || Iu),
            (this.sortEvents = t.sortEvents || Bu),
            (this.inEventRange = t.inEventRange || Hu),
            (this.isSameDate = t.isSameDate || Uu),
            (this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || Yu),
            (this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0);
        });
        function ju(e, t, r, n) {
          var a = (0, Y.A)((0, Y.A)({}, e.formats), r);
          return (0, Y.A)(
            (0, Y.A)({}, e),
            {},
            {
              messages: n,
              startOfWeek: function () {
                return e.startOfWeek(t);
              },
              format: function (s, i) {
                return e.format(s, a[i] || i, t);
              },
            },
          );
        }
        var Vu = {
          date: "Date",
          time: "Time",
          event: "Event",
          allDay: "All Day",
          week: "Week",
          work_week: "Work Week",
          day: "Day",
          month: "Month",
          previous: "Back",
          next: "Next",
          yesterday: "Yesterday",
          tomorrow: "Tomorrow",
          today: "Today",
          agenda: "Agenda",
          noEventsInRange: "There are no events in this range.",
          showMore: function (t) {
            return "+".concat(t, " more");
          },
        };
        function Ku(e) {
          return (0, Y.A)((0, Y.A)({}, Vu), e);
        }
        function _u(e) {
          var t = e.ref,
            r = e.callback;
          (0, d.useEffect)(
            function () {
              var n = function (o) {
                t.current && !t.current.contains(o.target) && r();
              };
              return (
                document.addEventListener("mousedown", n),
                function () {
                  document.removeEventListener("mousedown", n);
                }
              );
            },
            [t, r],
          );
        }
        var Gu = [
            "style",
            "className",
            "event",
            "selected",
            "isAllDay",
            "onSelect",
            "onDoubleClick",
            "onKeyPress",
            "localizer",
            "continuesPrior",
            "continuesAfter",
            "accessors",
            "getters",
            "children",
            "components",
            "slotStart",
            "slotEnd",
          ],
          Ca = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r() {
              return (0, B.A)(this, r), t.apply(this, arguments);
            }
            return (
              (0, U.A)(r, [
                {
                  key: "render",
                  value: function () {
                    var a = this.props,
                      o = a.style,
                      s = a.className,
                      i = a.event,
                      l = a.selected,
                      c = a.isAllDay,
                      u = a.onSelect,
                      f = a.onDoubleClick,
                      v = a.onKeyPress,
                      m = a.localizer,
                      g = a.continuesPrior,
                      h = a.continuesAfter,
                      y = a.accessors,
                      D = a.getters,
                      E = a.children,
                      M = a.components,
                      S = M.event,
                      O = M.eventWrapper,
                      x = a.slotStart,
                      F = a.slotEnd,
                      $ = (0, Z.A)(a, Gu);
                    delete $.resizable;
                    var W = y.title(i),
                      N = y.tooltip(i),
                      I = y.end(i),
                      z = y.start(i),
                      j = y.allDay(i),
                      G = c || j || m.diff(z, m.ceil(I, "day"), "day") > 1,
                      Q = D.eventProp(i, z, I, l),
                      J = d.createElement(
                        "div",
                        { className: "rbc-event-content", title: N || void 0 },
                        S
                          ? d.createElement(S, {
                              event: i,
                              continuesPrior: g,
                              continuesAfter: h,
                              title: W,
                              isAllDay: j,
                              localizer: m,
                              slotStart: x,
                              slotEnd: F,
                            })
                          : W,
                      );
                    return d.createElement(
                      O,
                      Object.assign({}, this.props, { type: "date" }),
                      d.createElement(
                        "div",
                        Object.assign({}, $, {
                          tabIndex: 0,
                          style: (0, Y.A)((0, Y.A)({}, Q.style), o),
                          className: (0, fe.A)("rbc-event", s, Q.className, {
                            "rbc-selected": l,
                            "rbc-event-allday": G,
                            "rbc-event-continues-prior": g,
                            "rbc-event-continues-after": h,
                          }),
                          onClick: function (oe) {
                            return u && u(i, oe);
                          },
                          onDoubleClick: function (oe) {
                            return f && f(i, oe);
                          },
                          onKeyPress: function (oe) {
                            return v && v(i, oe);
                          },
                        }),
                        typeof E == "function" ? E(J) : J,
                      ),
                    );
                  },
                },
              ]),
              r
            );
          })(d.Component);
        function sr(e, t) {
          return !e || t == null ? !1 : xs(e, t);
        }
        function xa(e, t) {
          var r = e.right - e.left,
            n = r / t;
          return n;
        }
        function Pa(e, t, r, n) {
          var a = xa(e, n);
          return r
            ? n - 1 - Math.floor((t - e.left) / a)
            : Math.floor((t - e.left) / a);
        }
        function Xu(e, t) {
          var r = t.x,
            n = t.y;
          return n >= e.top && n <= e.bottom && r >= e.left && r <= e.right;
        }
        function Ju(e, t, r, n, a) {
          var o = -1,
            s = -1,
            i = n - 1,
            l = xa(t, n),
            c = Pa(t, r.x, a, n),
            u = t.top < r.y && t.bottom > r.y,
            f = t.top < e.y && t.bottom > e.y,
            v = e.y > t.bottom,
            m = t.top > e.y,
            g = r.top < t.top && r.bottom > t.bottom;
          return (
            g && ((o = 0), (s = i)),
            u && (m ? ((o = 0), (s = c)) : v && ((o = c), (s = i))),
            f &&
              ((o = s =
                a
                  ? i - Math.floor((e.x - t.left) / l)
                  : Math.floor((e.x - t.left) / l)),
              u ? (c < o ? (o = c) : (s = c)) : e.y < r.y ? (s = i) : (o = 0)),
            { startIdx: o, endIdx: s }
          );
        }
        function Zu(e) {
          var t = e.target,
            r = e.offset,
            n = e.container,
            a = e.box,
            o = Qe(t),
            s = o.top,
            i = o.left,
            l = o.width,
            c = o.height,
            u = Qe(n),
            f = u.top,
            v = u.left,
            m = u.width,
            g = u.height,
            h = Qe(a),
            y = h.width,
            D = h.height,
            E = f + g,
            M = v + m,
            S = s + D,
            O = i + y,
            x = r.x,
            F = r.y,
            $ = S > E ? s - D - F : s + F + c,
            W = O > M ? i + x - y + l : i + x;
          return { topOffset: $, leftOffset: W };
        }
        function Qu(e) {
          var t = e.containerRef,
            r = e.accessors,
            n = e.getters,
            a = e.selected,
            o = e.components,
            s = e.localizer,
            i = e.position,
            l = e.show,
            c = e.events,
            u = e.slotStart,
            f = e.slotEnd,
            v = e.onSelect,
            m = e.onDoubleClick,
            g = e.onKeyPress,
            h = e.handleDragStart,
            y = e.popperRef,
            D = e.target,
            E = e.offset;
          _u({ ref: y, callback: l }),
            (0, d.useLayoutEffect)(
              function () {
                var O = Zu({
                    target: D,
                    offset: E,
                    container: t.current,
                    box: y.current,
                  }),
                  x = O.topOffset,
                  F = O.leftOffset;
                (y.current.style.top = "".concat(x, "px")),
                  (y.current.style.left = "".concat(F, "px"));
              },
              [E.x, E.y, D],
            );
          var M = i.width,
            S = { minWidth: M + M / 2 };
          return d.createElement(
            "div",
            { style: S, className: "rbc-overlay", ref: y },
            d.createElement(
              "div",
              { className: "rbc-overlay-header" },
              s.format(u, "dayHeaderFormat"),
            ),
            c.map(function (O, x) {
              return d.createElement(Ca, {
                key: x,
                type: "popup",
                localizer: s,
                event: O,
                getters: n,
                onSelect: v,
                accessors: r,
                components: o,
                onDoubleClick: m,
                onKeyPress: g,
                continuesPrior: s.lt(r.end(O), u, "day"),
                continuesAfter: s.gte(r.start(O), f, "day"),
                slotStart: u,
                slotEnd: f,
                selected: sr(O, a),
                draggable: !0,
                onDragStart: function () {
                  return h(O);
                },
                onDragEnd: function () {
                  return l();
                },
              });
            }),
          );
        }
        var Fa = d.forwardRef(function (e, t) {
          return d.createElement(Qu, Object.assign({}, e, { popperRef: t }));
        });
        Fa.propTypes = {
          accessors: L().object.isRequired,
          getters: L().object.isRequired,
          selected: L().object,
          components: L().object.isRequired,
          localizer: L().object.isRequired,
          position: L().object.isRequired,
          show: L().func.isRequired,
          events: L().array.isRequired,
          slotStart: L().instanceOf(Date).isRequired,
          slotEnd: L().instanceOf(Date),
          onSelect: L().func,
          onDoubleClick: L().func,
          onKeyPress: L().func,
          handleDragStart: L().func,
          style: L().object,
          offset: L().shape({ x: L().number, y: L().number }),
        };
        function qu(e) {
          var t = e.containerRef,
            r = e.popupOffset,
            n = r === void 0 ? 5 : r,
            a = e.overlay,
            o = e.accessors,
            s = e.localizer,
            i = e.components,
            l = e.getters,
            c = e.selected,
            u = e.handleSelectEvent,
            f = e.handleDoubleClickEvent,
            v = e.handleKeyPressEvent,
            m = e.handleDragStart,
            g = e.onHide,
            h = e.overlayDisplay,
            y = (0, d.useRef)(null);
          if (!a.position) return null;
          var D = n;
          isNaN(n) || (D = { x: n, y: n });
          var E = a.position,
            M = a.events,
            S = a.date,
            O = a.end;
          return d.createElement(
            Rs,
            {
              rootClose: !0,
              flip: !0,
              show: !0,
              placement: "bottom",
              onHide: g,
              target: a.target,
            },
            function (x) {
              var F = x.props;
              return d.createElement(
                Fa,
                Object.assign({}, F, {
                  containerRef: t,
                  ref: y,
                  target: a.target,
                  offset: D,
                  accessors: o,
                  getters: l,
                  selected: c,
                  components: i,
                  localizer: s,
                  position: E,
                  show: h,
                  events: M,
                  slotStart: S,
                  slotEnd: O,
                  onSelect: u,
                  onDoubleClick: f,
                  onKeyPress: v,
                  handleDragStart: m,
                }),
              );
            },
          );
        }
        var Yr = d.forwardRef(function (e, t) {
          return d.createElement(qu, Object.assign({}, e, { containerRef: t }));
        });
        Yr.propTypes = {
          popupOffset: L().oneOfType([
            L().number,
            L().shape({ x: L().number, y: L().number }),
          ]),
          overlay: L().shape({
            position: L().object,
            events: L().array,
            date: L().instanceOf(Date),
            end: L().instanceOf(Date),
          }),
          accessors: L().object.isRequired,
          localizer: L().object.isRequired,
          components: L().object.isRequired,
          getters: L().object.isRequired,
          selected: L().object,
          handleSelectEvent: L().func,
          handleDoubleClickEvent: L().func,
          handleKeyPressEvent: L().func,
          handleDragStart: L().func,
          onHide: L().func,
          overlayDisplay: L().func,
        };
        function he(e, t) {
          var r =
            arguments.length > 2 && arguments[2] !== void 0
              ? arguments[2]
              : document;
          return Lt(r, e, t, { passive: !1 });
        }
        function ef(e, t, r) {
          return !e || Tt(e, document.elementFromPoint(t, r));
        }
        function tf(e, t) {
          var r = t.clientX,
            n = t.clientY,
            a = document.elementFromPoint(r, n);
          return Kn(a, ".rbc-event", e);
        }
        function rf(e, t) {
          var r = t.clientX,
            n = t.clientY,
            a = document.elementFromPoint(r, n);
          return Kn(a, ".rbc-show-more", e);
        }
        function lr(e, t) {
          return !!tf(e, t);
        }
        function nf(e, t) {
          return !!rf(e, t);
        }
        function gt(e) {
          var t = e;
          return (
            e.touches && e.touches.length && (t = e.touches[0]),
            {
              clientX: t.clientX,
              clientY: t.clientY,
              pageX: t.pageX,
              pageY: t.pageY,
            }
          );
        }
        var $a = 5,
          af = 250,
          ka = (function () {
            function e(t) {
              var r =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                n = r.global,
                a = n === void 0 ? !1 : n,
                o = r.longPressThreshold,
                s = o === void 0 ? 250 : o,
                i = r.validContainers,
                l = i === void 0 ? [] : i;
              (0, B.A)(this, e),
                (this.isDetached = !1),
                (this.container = t),
                (this.globalMouse = !t || a),
                (this.longPressThreshold = s),
                (this.validContainers = l),
                (this._listeners = Object.create(null)),
                (this._handleInitialEvent =
                  this._handleInitialEvent.bind(this)),
                (this._handleMoveEvent = this._handleMoveEvent.bind(this)),
                (this._handleTerminatingEvent =
                  this._handleTerminatingEvent.bind(this)),
                (this._keyListener = this._keyListener.bind(this)),
                (this._dropFromOutsideListener =
                  this._dropFromOutsideListener.bind(this)),
                (this._dragOverFromOutsideListener =
                  this._dragOverFromOutsideListener.bind(this)),
                (this._removeTouchMoveWindowListener = he(
                  "touchmove",
                  function () {},
                  window,
                )),
                (this._removeKeyDownListener = he(
                  "keydown",
                  this._keyListener,
                )),
                (this._removeKeyUpListener = he("keyup", this._keyListener)),
                (this._removeDropFromOutsideListener = he(
                  "drop",
                  this._dropFromOutsideListener,
                )),
                (this._removeDragOverFromOutsideListener = he(
                  "dragover",
                  this._dragOverFromOutsideListener,
                )),
                this._addInitialEventListener();
            }
            return (
              (0, U.A)(e, [
                {
                  key: "on",
                  value: function (r, n) {
                    var a = this._listeners[r] || (this._listeners[r] = []);
                    return (
                      a.push(n),
                      {
                        remove: function () {
                          var s = a.indexOf(n);
                          s !== -1 && a.splice(s, 1);
                        },
                      }
                    );
                  },
                },
                {
                  key: "emit",
                  value: function (r) {
                    for (
                      var n = arguments.length,
                        a = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      a[o - 1] = arguments[o];
                    var s,
                      i = this._listeners[r] || [];
                    return (
                      i.forEach(function (l) {
                        s === void 0 && (s = l.apply(void 0, a));
                      }),
                      s
                    );
                  },
                },
                {
                  key: "teardown",
                  value: function () {
                    (this.isDetached = !0),
                      (this._listeners = Object.create(null)),
                      this._removeTouchMoveWindowListener &&
                        this._removeTouchMoveWindowListener(),
                      this._removeInitialEventListener &&
                        this._removeInitialEventListener(),
                      this._removeEndListener && this._removeEndListener(),
                      this._onEscListener && this._onEscListener(),
                      this._removeMoveListener && this._removeMoveListener(),
                      this._removeKeyUpListener && this._removeKeyUpListener(),
                      this._removeKeyDownListener &&
                        this._removeKeyDownListener(),
                      this._removeDropFromOutsideListener &&
                        this._removeDropFromOutsideListener(),
                      this._removeDragOverFromOutsideListener &&
                        this._removeDragOverFromOutsideListener();
                  },
                },
                {
                  key: "isSelected",
                  value: function (r) {
                    var n = this._selectRect;
                    return !n || !this.selecting ? !1 : Na(n, tt(r));
                  },
                },
                {
                  key: "filter",
                  value: function (r) {
                    var n = this._selectRect;
                    return !n || !this.selecting
                      ? []
                      : r.filter(this.isSelected, this);
                  },
                },
                {
                  key: "_addLongPressListener",
                  value: function (r, n) {
                    var a = this,
                      o = null,
                      s = null,
                      i = null,
                      l = function (v) {
                        (o = setTimeout(function () {
                          u(), r(v);
                        }, a.longPressThreshold)),
                          (s = he("touchmove", function () {
                            return u();
                          })),
                          (i = he("touchend", function () {
                            return u();
                          }));
                      },
                      c = he("touchstart", l),
                      u = function () {
                        o && clearTimeout(o),
                          s && s(),
                          i && i(),
                          (o = null),
                          (s = null),
                          (i = null);
                      };
                    return (
                      n && l(n),
                      function () {
                        u(), c();
                      }
                    );
                  },
                },
                {
                  key: "_addInitialEventListener",
                  value: function () {
                    var r = this,
                      n = he("mousedown", function (o) {
                        r._removeInitialEventListener(),
                          r._handleInitialEvent(o),
                          (r._removeInitialEventListener = he(
                            "mousedown",
                            r._handleInitialEvent,
                          ));
                      }),
                      a = he("touchstart", function (o) {
                        r._removeInitialEventListener(),
                          (r._removeInitialEventListener =
                            r._addLongPressListener(r._handleInitialEvent, o));
                      });
                    this._removeInitialEventListener = function () {
                      n(), a();
                    };
                  },
                },
                {
                  key: "_dropFromOutsideListener",
                  value: function (r) {
                    var n = gt(r),
                      a = n.pageX,
                      o = n.pageY,
                      s = n.clientX,
                      i = n.clientY;
                    this.emit("dropFromOutside", {
                      x: a,
                      y: o,
                      clientX: s,
                      clientY: i,
                    }),
                      r.preventDefault();
                  },
                },
                {
                  key: "_dragOverFromOutsideListener",
                  value: function (r) {
                    var n = gt(r),
                      a = n.pageX,
                      o = n.pageY,
                      s = n.clientX,
                      i = n.clientY;
                    this.emit("dragOverFromOutside", {
                      x: a,
                      y: o,
                      clientX: s,
                      clientY: i,
                    }),
                      r.preventDefault();
                  },
                },
                {
                  key: "_handleInitialEvent",
                  value: function (r) {
                    if (!this.isDetached) {
                      var n = gt(r),
                        a = n.clientX,
                        o = n.clientY,
                        s = n.pageX,
                        i = n.pageY,
                        l = this.container(),
                        c,
                        u;
                      if (!(r.which === 3 || r.button === 2 || !ef(l, a, o))) {
                        if (!this.globalMouse && l && !Tt(l, r.target)) {
                          var f = of(0),
                            v = f.top,
                            m = f.left,
                            g = f.bottom,
                            h = f.right;
                          if (
                            ((u = tt(l)),
                            (c = Na(
                              {
                                top: u.top - v,
                                left: u.left - m,
                                bottom: u.bottom + g,
                                right: u.right + h,
                              },
                              { top: i, left: s },
                            )),
                            !c)
                          )
                            return;
                        }
                        var y = this.emit(
                          "beforeSelect",
                          (this._initialEventData = {
                            isTouch: /^touch/.test(r.type),
                            x: s,
                            y: i,
                            clientX: a,
                            clientY: o,
                          }),
                        );
                        if (y !== !1)
                          switch (r.type) {
                            case "mousedown":
                              (this._removeEndListener = he(
                                "mouseup",
                                this._handleTerminatingEvent,
                              )),
                                (this._onEscListener = he(
                                  "keydown",
                                  this._handleTerminatingEvent,
                                )),
                                (this._removeMoveListener = he(
                                  "mousemove",
                                  this._handleMoveEvent,
                                ));
                              break;
                            case "touchstart":
                              this._handleMoveEvent(r),
                                (this._removeEndListener = he(
                                  "touchend",
                                  this._handleTerminatingEvent,
                                )),
                                (this._removeMoveListener = he(
                                  "touchmove",
                                  this._handleMoveEvent,
                                ));
                              break;
                          }
                      }
                    }
                  },
                },
                {
                  key: "_isWithinValidContainer",
                  value: function (r) {
                    var n = r.target,
                      a = this.validContainers;
                    return !a || !a.length || !n
                      ? !0
                      : a.some(function (o) {
                          return !!n.closest(o);
                        });
                  },
                },
                {
                  key: "_handleTerminatingEvent",
                  value: function (r) {
                    var n = gt(r),
                      a = n.pageX,
                      o = n.pageY;
                    if (
                      ((this.selecting = !1),
                      this._removeEndListener && this._removeEndListener(),
                      this._removeMoveListener && this._removeMoveListener(),
                      !!this._initialEventData)
                    ) {
                      var s = !this.container || Tt(this.container(), r.target),
                        i = this._isWithinValidContainer(r),
                        l = this._selectRect,
                        c = this.isClick(a, o);
                      return (
                        (this._initialEventData = null),
                        r.key === "Escape" || !i
                          ? this.emit("reset")
                          : c && s
                            ? this._handleClickEvent(r)
                            : c
                              ? this.emit("reset")
                              : this.emit("select", l)
                      );
                    }
                  },
                },
                {
                  key: "_handleClickEvent",
                  value: function (r) {
                    var n = gt(r),
                      a = n.pageX,
                      o = n.pageY,
                      s = n.clientX,
                      i = n.clientY,
                      l = new Date().getTime();
                    return this._lastClickData &&
                      l - this._lastClickData.timestamp < af
                      ? ((this._lastClickData = null),
                        this.emit("doubleClick", {
                          x: a,
                          y: o,
                          clientX: s,
                          clientY: i,
                        }))
                      : ((this._lastClickData = { timestamp: l }),
                        this.emit("click", {
                          x: a,
                          y: o,
                          clientX: s,
                          clientY: i,
                        }));
                  },
                },
                {
                  key: "_handleMoveEvent",
                  value: function (r) {
                    if (!(this._initialEventData === null || this.isDetached)) {
                      var n = this._initialEventData,
                        a = n.x,
                        o = n.y,
                        s = gt(r),
                        i = s.pageX,
                        l = s.pageY,
                        c = Math.abs(a - i),
                        u = Math.abs(o - l),
                        f = Math.min(i, a),
                        v = Math.min(l, o),
                        m = this.selecting;
                      (this.isClick(i, l) && !m && !(c || u)) ||
                        ((this.selecting = !0),
                        (this._selectRect = {
                          top: v,
                          left: f,
                          x: i,
                          y: l,
                          right: f + c,
                          bottom: v + u,
                        }),
                        m || this.emit("selectStart", this._initialEventData),
                        this.isClick(i, l) ||
                          this.emit("selecting", this._selectRect),
                        r.preventDefault());
                    }
                  },
                },
                {
                  key: "_keyListener",
                  value: function (r) {
                    this.ctrl = r.metaKey || r.ctrlKey;
                  },
                },
                {
                  key: "isClick",
                  value: function (r, n) {
                    var a = this._initialEventData,
                      o = a.x,
                      s = a.y,
                      i = a.isTouch;
                    return !i && Math.abs(r - o) <= $a && Math.abs(n - s) <= $a;
                  },
                },
              ]),
              e
            );
          })();
        function of() {
          var e =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return (
            (0, te.A)(e) !== "object" &&
              (e = { top: e, left: e, right: e, bottom: e }),
            e
          );
        }
        function Na(e, t) {
          var r =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : 0,
            n = tt(e),
            a = n.top,
            o = n.left,
            s = n.right,
            i = s === void 0 ? o : s,
            l = n.bottom,
            c = l === void 0 ? a : l,
            u = tt(t),
            f = u.top,
            v = u.left,
            m = u.right,
            g = m === void 0 ? v : m,
            h = u.bottom,
            y = h === void 0 ? f : h;
          return !(c - r < f || a + r > y || i - r < v || o + r > g);
        }
        function tt(e) {
          if (!e.getBoundingClientRect) return e;
          var t = e.getBoundingClientRect(),
            r = t.left + La("left"),
            n = t.top + La("top");
          return {
            top: n,
            left: r,
            right: (e.offsetWidth || 0) + r,
            bottom: (e.offsetHeight || 0) + n,
          };
        }
        function La(e) {
          if (e === "left")
            return window.pageXOffset || document.body.scrollLeft || 0;
          if (e === "top")
            return window.pageYOffset || document.body.scrollTop || 0;
        }
        var sf = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r(n, a) {
              var o;
              return (
                (0, B.A)(this, r),
                (o = t.call(this, n, a)),
                (o.state = { selecting: !1 }),
                (o.containerRef = (0, d.createRef)()),
                o
              );
            }
            return (
              (0, U.A)(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.props.selectable && this._selectable();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this._teardownSelectable();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (a) {
                    !a.selectable &&
                      this.props.selectable &&
                      this._selectable(),
                      a.selectable &&
                        !this.props.selectable &&
                        this._teardownSelectable();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var a = this.props,
                      o = a.range,
                      s = a.getNow,
                      i = a.getters,
                      l = a.date,
                      c = a.components.dateCellWrapper,
                      u = a.localizer,
                      f = this.state,
                      v = f.selecting,
                      m = f.startIdx,
                      g = f.endIdx,
                      h = s();
                    return d.createElement(
                      "div",
                      { className: "rbc-row-bg", ref: this.containerRef },
                      o.map(function (y, D) {
                        var E = v && D >= m && D <= g,
                          M = i.dayProp(y),
                          S = M.className,
                          O = M.style;
                        return d.createElement(
                          c,
                          { key: D, value: y, range: o },
                          d.createElement("div", {
                            style: O,
                            className: (0, fe.A)(
                              "rbc-day-bg",
                              S,
                              E && "rbc-selected-cell",
                              u.isSameDate(y, h) && "rbc-today",
                              l && u.neq(l, y, "month") && "rbc-off-range-bg",
                            ),
                          }),
                        );
                      }),
                    );
                  },
                },
                {
                  key: "_selectable",
                  value: function () {
                    var a = this,
                      o = this.containerRef.current,
                      s = (this._selector = new ka(this.props.container, {
                        longPressThreshold: this.props.longPressThreshold,
                      })),
                      i = function (c, u) {
                        if (!lr(o, c) && !nf(o, c)) {
                          var f = tt(o),
                            v = a.props,
                            m = v.range,
                            g = v.rtl;
                          if (Xu(f, c)) {
                            var h = Pa(f, c.x, g, m.length);
                            a._selectSlot({
                              startIdx: h,
                              endIdx: h,
                              action: u,
                              box: c,
                            });
                          }
                        }
                        (a._initial = {}), a.setState({ selecting: !1 });
                      };
                    s.on("selecting", function (l) {
                      var c = a.props,
                        u = c.range,
                        f = c.rtl,
                        v = -1,
                        m = -1;
                      if (
                        (a.state.selecting ||
                          (ie(a.props.onSelectStart, [l]),
                          (a._initial = { x: l.x, y: l.y })),
                        s.isSelected(o))
                      ) {
                        var g = tt(o),
                          h = Ju(a._initial, g, l, u.length, f);
                        (v = h.startIdx), (m = h.endIdx);
                      }
                      a.setState({ selecting: !0, startIdx: v, endIdx: m });
                    }),
                      s.on("beforeSelect", function (l) {
                        if (a.props.selectable === "ignoreEvents")
                          return !lr(a.containerRef.current, l);
                      }),
                      s.on("click", function (l) {
                        return i(l, "click");
                      }),
                      s.on("doubleClick", function (l) {
                        return i(l, "doubleClick");
                      }),
                      s.on("select", function (l) {
                        a._selectSlot(
                          (0, Y.A)(
                            (0, Y.A)({}, a.state),
                            {},
                            { action: "select", bounds: l },
                          ),
                        ),
                          (a._initial = {}),
                          a.setState({ selecting: !1 }),
                          ie(a.props.onSelectEnd, [a.state]);
                      });
                  },
                },
                {
                  key: "_teardownSelectable",
                  value: function () {
                    this._selector &&
                      (this._selector.teardown(), (this._selector = null));
                  },
                },
                {
                  key: "_selectSlot",
                  value: function (a) {
                    var o = a.endIdx,
                      s = a.startIdx,
                      i = a.action,
                      l = a.bounds,
                      c = a.box;
                    o !== -1 &&
                      s !== -1 &&
                      this.props.onSelectSlot &&
                      this.props.onSelectSlot({
                        start: s,
                        end: o,
                        action: i,
                        bounds: l,
                        box: c,
                        resourceId: this.props.resourceId,
                      });
                  },
                },
              ]),
              r
            );
          })(d.Component),
          Fe = {
            propTypes: {
              slotMetrics: L().object.isRequired,
              selected: L().object,
              isAllDay: L().bool,
              accessors: L().object.isRequired,
              localizer: L().object.isRequired,
              components: L().object.isRequired,
              getters: L().object.isRequired,
              onSelect: L().func,
              onDoubleClick: L().func,
              onKeyPress: L().func,
            },
            defaultProps: { segments: [], selected: {} },
            renderEvent: function (t, r) {
              var n = t.selected;
              t.isAllDay;
              var a = t.accessors,
                o = t.getters,
                s = t.onSelect,
                i = t.onDoubleClick,
                l = t.onKeyPress,
                c = t.localizer,
                u = t.slotMetrics,
                f = t.components,
                v = t.resizable,
                m = u.continuesPrior(r),
                g = u.continuesAfter(r);
              return d.createElement(Ca, {
                event: r,
                getters: o,
                localizer: c,
                accessors: a,
                components: f,
                onSelect: s,
                onDoubleClick: i,
                onKeyPress: l,
                continuesPrior: m,
                continuesAfter: g,
                slotStart: u.first,
                slotEnd: u.last,
                selected: sr(r, n),
                resizable: v,
              });
            },
            renderSpan: function (t, r, n) {
              var a =
                  arguments.length > 3 && arguments[3] !== void 0
                    ? arguments[3]
                    : " ",
                o = (Math.abs(r) / t) * 100 + "%";
              return d.createElement(
                "div",
                {
                  key: n,
                  className: "rbc-row-segment",
                  style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o },
                },
                a,
              );
            },
          },
          za = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r() {
              return (0, B.A)(this, r), t.apply(this, arguments);
            }
            return (
              (0, U.A)(r, [
                {
                  key: "render",
                  value: function () {
                    var a = this,
                      o = this.props,
                      s = o.segments,
                      i = o.slotMetrics.slots,
                      l = o.className,
                      c = 1;
                    return d.createElement(
                      "div",
                      { className: (0, fe.A)(l, "rbc-row") },
                      s.reduce(function (u, f, v) {
                        var m = f.event,
                          g = f.left,
                          h = f.right,
                          y = f.span,
                          D = "_lvl_" + v,
                          E = g - c,
                          M = Fe.renderEvent(a.props, m);
                        return (
                          E &&
                            u.push(Fe.renderSpan(i, E, "".concat(D, "_gap"))),
                          u.push(Fe.renderSpan(i, y, D, M)),
                          (c = h + 1),
                          u
                        );
                      }, []),
                    );
                  },
                },
              ]),
              r
            );
          })(d.Component);
        za.defaultProps = (0, Y.A)({}, Fe.defaultProps);
        function Wa(e) {
          var t = e.dateRange,
            r = e.unit,
            n = r === void 0 ? "day" : r,
            a = e.localizer;
          return { first: t[0], last: a.add(t[t.length - 1], 1, n) };
        }
        function lf(e, t, r, n) {
          var a = Wa({ dateRange: t, localizer: n }),
            o = a.first,
            s = a.last,
            i = n.diff(o, s, "day"),
            l = n.max(n.startOf(r.start(e), "day"), o),
            c = n.min(n.ceil(r.end(e), "day"), s),
            u = Ws(t, function (v) {
              return n.isSameDate(v, l);
            }),
            f = n.diff(l, c, "day");
          return (
            (f = Math.min(f, i)),
            (f = Math.max(f - n.segmentOffset, 1)),
            { event: e, span: f, left: u + 1, right: Math.max(u + f, 1) }
          );
        }
        function Ia(e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 1 / 0,
            r,
            n,
            a,
            o = [],
            s = [];
          for (r = 0; r < e.length; r++) {
            for (a = e[r], n = 0; n < o.length && cf(a, o[n]); n++);
            n >= t ? s.push(a) : (o[n] || (o[n] = [])).push(a);
          }
          for (r = 0; r < o.length; r++)
            o[r].sort(function (i, l) {
              return i.left - l.left;
            });
          return { levels: o, extra: s };
        }
        function It(e, t, r, n, a) {
          var o = { start: n.start(e), end: n.end(e) },
            s = { start: t, end: r };
          return a.inEventRange({ event: o, range: s });
        }
        function cf(e, t) {
          return t.some(function (r) {
            return r.left <= e.right && r.right >= e.left;
          });
        }
        function Ba(e, t, r, n) {
          var a = { start: r.start(e), end: r.end(e), allDay: r.allDay(e) },
            o = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
          return n.sortEvents({ evtA: a, evtB: o });
        }
        var Ha = function (t, r) {
            return t.left <= r && t.right >= r;
          },
          Ua = function (t, r) {
            return t.filter(function (n) {
              return Ha(n, r);
            }).length;
          },
          Ya = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r() {
              return (0, B.A)(this, r), t.apply(this, arguments);
            }
            return (
              (0, U.A)(r, [
                {
                  key: "render",
                  value: function () {
                    for (
                      var a = this.props,
                        o = a.segments,
                        s = a.slotMetrics.slots,
                        i = Ia(o).levels[0],
                        l = 1,
                        c = 1,
                        u = [];
                      l <= s;
                    ) {
                      var f = "_lvl_" + l,
                        v =
                          i.filter(function (M) {
                            return Ha(M, l);
                          })[0] || {},
                        m = v.event,
                        g = v.left,
                        h = v.right,
                        y = v.span;
                      if (!m) {
                        l++;
                        continue;
                      }
                      var D = Math.max(0, g - c);
                      if (this.canRenderSlotEvent(g, y)) {
                        var E = Fe.renderEvent(this.props, m);
                        D && u.push(Fe.renderSpan(s, D, f + "_gap")),
                          u.push(Fe.renderSpan(s, y, f, E)),
                          (c = l = h + 1);
                      } else
                        D && u.push(Fe.renderSpan(s, D, f + "_gap")),
                          u.push(
                            Fe.renderSpan(s, 1, f, this.renderShowMore(o, l)),
                          ),
                          (c = l = l + 1);
                    }
                    return d.createElement("div", { className: "rbc-row" }, u);
                  },
                },
                {
                  key: "canRenderSlotEvent",
                  value: function (a, o) {
                    var s = this.props.segments;
                    return Vs(a, a + o).every(function (i) {
                      var l = Ua(s, i);
                      return l === 1;
                    });
                  },
                },
                {
                  key: "renderShowMore",
                  value: function (a, o) {
                    var s = this,
                      i = this.props.localizer,
                      l = Ua(a, o);
                    return l
                      ? d.createElement(
                          "button",
                          {
                            type: "button",
                            key: "sm_" + o,
                            className: (0, fe.A)(
                              "rbc-button-link",
                              "rbc-show-more",
                            ),
                            onClick: function (u) {
                              return s.showMore(o, u);
                            },
                          },
                          i.messages.showMore(l),
                        )
                      : !1;
                  },
                },
                {
                  key: "showMore",
                  value: function (a, o) {
                    o.preventDefault(),
                      o.stopPropagation(),
                      this.props.onShowMore(a, o.target);
                  },
                },
              ]),
              r
            );
          })(d.Component);
        Ya.defaultProps = (0, Y.A)({}, Fe.defaultProps);
        var uf = function (t) {
            var r = t.children;
            return d.createElement(
              "div",
              { className: "rbc-row-content-scroll-container" },
              r,
            );
          },
          ff = function (t, r) {
            return t.left <= r && t.right >= r;
          },
          df = function (t, r) {
            return t[0].range === r[0].range && t[0].events === r[0].events;
          };
        function ja() {
          return Gn(function (e) {
            for (
              var t = e.range,
                r = e.events,
                n = e.maxRows,
                a = e.minRows,
                o = e.accessors,
                s = e.localizer,
                i = Wa({ dateRange: t, localizer: s }),
                l = i.first,
                c = i.last,
                u = r.map(function (h) {
                  return lf(h, t, o, s);
                }),
                f = Ia(u, Math.max(n - 1, 1)),
                v = f.levels,
                m = f.extra,
                g = m.length > 0 ? a - 1 : a;
              v.length < g;
            )
              v.push([]);
            return {
              first: l,
              last: c,
              levels: v,
              extra: m,
              range: t,
              slots: t.length,
              clone: function (y) {
                var D = ja();
                return D((0, Y.A)((0, Y.A)({}, e), y));
              },
              getDateForSlot: function (y) {
                return t[y];
              },
              getSlotForDate: function (y) {
                return t.find(function (D) {
                  return s.isSameDate(D, y);
                });
              },
              getEventsForSlot: function (y) {
                return u
                  .filter(function (D) {
                    return ff(D, y);
                  })
                  .map(function (D) {
                    return D.event;
                  });
              },
              continuesPrior: function (y) {
                return s.continuesPrior(o.start(y), l);
              },
              continuesAfter: function (y) {
                var D = o.start(y),
                  E = o.end(y);
                return s.continuesAfter(D, E, c);
              },
            };
          }, df);
        }
        var cr = (function (e) {
          (0, K.A)(r, e);
          var t = (0, ee.A)(r);
          function r() {
            var n;
            (0, B.A)(this, r);
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s];
            return (
              (n = t.call.apply(t, [this].concat(o))),
              (n.handleSelectSlot = function (i) {
                var l = n.props,
                  c = l.range,
                  u = l.onSelectSlot;
                u(c.slice(i.start, i.end + 1), i);
              }),
              (n.handleShowMore = function (i, l) {
                var c = n.props,
                  u = c.range,
                  f = c.onShowMore,
                  v = n.slotMetrics(n.props),
                  m = Fs(n.containerRef.current, ".rbc-row-bg")[0],
                  g;
                m && (g = m.children[i - 1]);
                var h = v.getEventsForSlot(i);
                f(h, u[i - 1], g, i, l);
              }),
              (n.getContainer = function () {
                var i = n.props.container;
                return i ? i() : n.containerRef.current;
              }),
              (n.renderHeadingCell = function (i, l) {
                var c = n.props,
                  u = c.renderHeader,
                  f = c.getNow,
                  v = c.localizer;
                return u({
                  date: i,
                  key: "header_".concat(l),
                  className: (0, fe.A)(
                    "rbc-date-cell",
                    v.isSameDate(i, f()) && "rbc-now",
                  ),
                });
              }),
              (n.renderDummy = function () {
                var i = n.props,
                  l = i.className,
                  c = i.range,
                  u = i.renderHeader,
                  f = i.showAllEvents;
                return d.createElement(
                  "div",
                  { className: l, ref: n.containerRef },
                  d.createElement(
                    "div",
                    {
                      className: (0, fe.A)(
                        "rbc-row-content",
                        f && "rbc-row-content-scrollable",
                      ),
                    },
                    u &&
                      d.createElement(
                        "div",
                        { className: "rbc-row", ref: n.headingRowRef },
                        c.map(n.renderHeadingCell),
                      ),
                    d.createElement(
                      "div",
                      { className: "rbc-row", ref: n.eventRowRef },
                      d.createElement(
                        "div",
                        { className: "rbc-row-segment" },
                        d.createElement(
                          "div",
                          { className: "rbc-event" },
                          d.createElement(
                            "div",
                            { className: "rbc-event-content" },
                            "\xA0",
                          ),
                        ),
                      ),
                    ),
                  ),
                );
              }),
              (n.containerRef = (0, d.createRef)()),
              (n.headingRowRef = (0, d.createRef)()),
              (n.eventRowRef = (0, d.createRef)()),
              (n.slotMetrics = ja()),
              n
            );
          }
          return (
            (0, U.A)(r, [
              {
                key: "getRowLimit",
                value: function () {
                  var a,
                    o = Lr(this.eventRowRef.current),
                    s =
                      (a = this.headingRowRef) !== null &&
                      a !== void 0 &&
                      a.current
                        ? Lr(this.headingRowRef.current)
                        : 0,
                    i = Lr(this.containerRef.current) - s;
                  return Math.max(Math.floor(i / o), 1);
                },
              },
              {
                key: "render",
                value: function () {
                  var a = this.props,
                    o = a.date,
                    s = a.rtl,
                    i = a.range,
                    l = a.className,
                    c = a.selected,
                    u = a.selectable,
                    f = a.renderForMeasure,
                    v = a.accessors,
                    m = a.getters,
                    g = a.components,
                    h = a.getNow,
                    y = a.renderHeader,
                    D = a.onSelect,
                    E = a.localizer,
                    M = a.onSelectStart,
                    S = a.onSelectEnd,
                    O = a.onDoubleClick,
                    x = a.onKeyPress,
                    F = a.resourceId,
                    $ = a.longPressThreshold,
                    W = a.isAllDay,
                    N = a.resizable,
                    I = a.showAllEvents;
                  if (f) return this.renderDummy();
                  var z = this.slotMetrics(this.props),
                    j = z.levels,
                    G = z.extra,
                    Q = I ? uf : Me,
                    J = g.weekWrapper,
                    q = {
                      selected: c,
                      accessors: v,
                      getters: m,
                      localizer: E,
                      components: g,
                      onSelect: D,
                      onDoubleClick: O,
                      onKeyPress: x,
                      resourceId: F,
                      slotMetrics: z,
                      resizable: N,
                    };
                  return d.createElement(
                    "div",
                    { className: l, role: "rowgroup", ref: this.containerRef },
                    d.createElement(sf, {
                      localizer: E,
                      date: o,
                      getNow: h,
                      rtl: s,
                      range: i,
                      selectable: u,
                      container: this.getContainer,
                      getters: m,
                      onSelectStart: M,
                      onSelectEnd: S,
                      onSelectSlot: this.handleSelectSlot,
                      components: g,
                      longPressThreshold: $,
                      resourceId: F,
                    }),
                    d.createElement(
                      "div",
                      {
                        className: (0, fe.A)(
                          "rbc-row-content",
                          I && "rbc-row-content-scrollable",
                        ),
                        role: "row",
                      },
                      y &&
                        d.createElement(
                          "div",
                          { className: "rbc-row ", ref: this.headingRowRef },
                          i.map(this.renderHeadingCell),
                        ),
                      d.createElement(
                        Q,
                        null,
                        d.createElement(
                          J,
                          Object.assign({ isAllDay: W }, q, {
                            rtl: this.props.rtl,
                          }),
                          j.map(function (oe, de) {
                            return d.createElement(
                              za,
                              Object.assign({ key: de, segments: oe }, q),
                            );
                          }),
                          !!G.length &&
                            d.createElement(
                              Ya,
                              Object.assign(
                                {
                                  segments: G,
                                  onShowMore: this.handleShowMore,
                                },
                                q,
                              ),
                            ),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
        cr.defaultProps = { minRows: 0, maxRows: 1 / 0 };
        var Va = function (t) {
            var r = t.label;
            return d.createElement(
              "span",
              { role: "columnheader", "aria-sort": "none" },
              r,
            );
          },
          vf = function (t) {
            var r = t.label,
              n = t.drilldownView,
              a = t.onDrillDown;
            return n
              ? d.createElement(
                  "button",
                  {
                    type: "button",
                    className: "rbc-button-link",
                    onClick: a,
                    role: "cell",
                  },
                  r,
                )
              : d.createElement("span", null, r);
          },
          mf = ["date", "className"],
          pf = function (t, r, n, a, o) {
            return t.filter(function (s) {
              return It(s, r, n, a, o);
            });
          },
          ur = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r() {
              var n;
              (0, B.A)(this, r);
              for (
                var a = arguments.length, o = new Array(a), s = 0;
                s < a;
                s++
              )
                o[s] = arguments[s];
              return (
                (n = t.call.apply(t, [this].concat(o))),
                (n.getContainer = function () {
                  return n.containerRef.current;
                }),
                (n.renderWeek = function (i, l) {
                  var c = n.props,
                    u = c.events,
                    f = c.components,
                    v = c.selectable,
                    m = c.getNow,
                    g = c.selected,
                    h = c.date,
                    y = c.localizer,
                    D = c.longPressThreshold,
                    E = c.accessors,
                    M = c.getters,
                    S = c.showAllEvents,
                    O = n.state,
                    x = O.needLimitMeasure,
                    F = O.rowLimit,
                    $ = pf((0, Mo.A)(u), i[0], i[i.length - 1], E, y);
                  return (
                    $.sort(function (W, N) {
                      return Ba(W, N, E, y);
                    }),
                    d.createElement(cr, {
                      key: l,
                      ref: l === 0 ? n.slotRowRef : void 0,
                      container: n.getContainer,
                      className: "rbc-month-row",
                      getNow: m,
                      date: h,
                      range: i,
                      events: $,
                      maxRows: S ? 1 / 0 : F,
                      selected: g,
                      selectable: v,
                      components: f,
                      accessors: E,
                      getters: M,
                      localizer: y,
                      renderHeader: n.readerDateHeading,
                      renderForMeasure: x,
                      onShowMore: n.handleShowMore,
                      onSelect: n.handleSelectEvent,
                      onDoubleClick: n.handleDoubleClickEvent,
                      onKeyPress: n.handleKeyPressEvent,
                      onSelectSlot: n.handleSelectSlot,
                      longPressThreshold: D,
                      rtl: n.props.rtl,
                      resizable: n.props.resizable,
                      showAllEvents: S,
                    })
                  );
                }),
                (n.readerDateHeading = function (i) {
                  var l = i.date,
                    c = i.className,
                    u = (0, Z.A)(i, mf),
                    f = n.props,
                    v = f.date,
                    m = f.getDrilldownView,
                    g = f.localizer,
                    h = g.neq(l, v, "month"),
                    y = g.isSameDate(l, v),
                    D = m(l),
                    E = g.format(l, "dateFormat"),
                    M = n.props.components.dateHeader || vf;
                  return d.createElement(
                    "div",
                    Object.assign({}, u, {
                      className: (0, fe.A)(
                        c,
                        h && "rbc-off-range",
                        y && "rbc-current",
                      ),
                      role: "cell",
                    }),
                    d.createElement(M, {
                      label: E,
                      date: l,
                      drilldownView: D,
                      isOffRange: h,
                      onDrillDown: function (O) {
                        return n.handleHeadingClick(l, D, O);
                      },
                    }),
                  );
                }),
                (n.handleSelectSlot = function (i, l) {
                  (n._pendingSelection = n._pendingSelection.concat(i)),
                    clearTimeout(n._selectTimer),
                    (n._selectTimer = setTimeout(function () {
                      return n.selectDates(l);
                    }));
                }),
                (n.handleHeadingClick = function (i, l, c) {
                  c.preventDefault(),
                    n.clearSelection(),
                    ie(n.props.onDrillDown, [i, l]);
                }),
                (n.handleSelectEvent = function () {
                  n.clearSelection();
                  for (
                    var i = arguments.length, l = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c];
                  ie(n.props.onSelectEvent, l);
                }),
                (n.handleDoubleClickEvent = function () {
                  n.clearSelection();
                  for (
                    var i = arguments.length, l = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c];
                  ie(n.props.onDoubleClickEvent, l);
                }),
                (n.handleKeyPressEvent = function () {
                  n.clearSelection();
                  for (
                    var i = arguments.length, l = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c];
                  ie(n.props.onKeyPressEvent, l);
                }),
                (n.handleShowMore = function (i, l, c, u, f) {
                  var v = n.props,
                    m = v.popup,
                    g = v.onDrillDown,
                    h = v.onShowMore,
                    y = v.getDrilldownView,
                    D = v.doShowMoreDrillDown;
                  if ((n.clearSelection(), m)) {
                    var E = hn(c, n.containerRef.current);
                    n.setState({
                      overlay: { date: l, events: i, position: E, target: f },
                    });
                  } else D && ie(g, [l, y(l) || pe.DAY]);
                  ie(h, [i, l, u]);
                }),
                (n.overlayDisplay = function () {
                  n.setState({ overlay: null });
                }),
                (n.state = { rowLimit: 5, needLimitMeasure: !0, date: null }),
                (n.containerRef = (0, d.createRef)()),
                (n.slotRowRef = (0, d.createRef)()),
                (n._bgRows = []),
                (n._pendingSelection = []),
                n
              );
            }
            return (
              (0, U.A)(
                r,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var a = this,
                        o;
                      this.state.needLimitMeasure &&
                        this.measureRowLimit(this.props),
                        window.addEventListener(
                          "resize",
                          (this._resizeListener = function () {
                            o ||
                              bn(function () {
                                (o = !1), a.setState({ needLimitMeasure: !0 });
                              });
                          }),
                          !1,
                        );
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function () {
                      this.state.needLimitMeasure &&
                        this.measureRowLimit(this.props);
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      window.removeEventListener(
                        "resize",
                        this._resizeListener,
                        !1,
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var a = this.props,
                        o = a.date,
                        s = a.localizer,
                        i = a.className,
                        l = s.visibleDays(o, s),
                        c = ko(l, 7);
                      return (
                        (this._weekCount = c.length),
                        d.createElement(
                          "div",
                          {
                            className: (0, fe.A)("rbc-month-view", i),
                            role: "table",
                            "aria-label": "Month View",
                            ref: this.containerRef,
                          },
                          d.createElement(
                            "div",
                            {
                              className: "rbc-row rbc-month-header",
                              role: "row",
                            },
                            this.renderHeaders(c[0]),
                          ),
                          c.map(this.renderWeek),
                          this.props.popup && this.renderOverlay(),
                        )
                      );
                    },
                  },
                  {
                    key: "renderHeaders",
                    value: function (a) {
                      var o = this.props,
                        s = o.localizer,
                        i = o.components,
                        l = a[0],
                        c = a[a.length - 1],
                        u = i.header || Va;
                      return s.range(l, c, "day").map(function (f, v) {
                        return d.createElement(
                          "div",
                          { key: "header_" + v, className: "rbc-header" },
                          d.createElement(u, {
                            date: f,
                            localizer: s,
                            label: s.format(f, "weekdayFormat"),
                          }),
                        );
                      });
                    },
                  },
                  {
                    key: "renderOverlay",
                    value: function () {
                      var a,
                        o,
                        s = this,
                        i =
                          (a =
                            (o = this.state) === null || o === void 0
                              ? void 0
                              : o.overlay) !== null && a !== void 0
                            ? a
                            : {},
                        l = this.props,
                        c = l.accessors,
                        u = l.localizer,
                        f = l.components,
                        v = l.getters,
                        m = l.selected,
                        g = l.popupOffset,
                        h = l.handleDragStart,
                        y = function () {
                          return s.setState({ overlay: null });
                        };
                      return d.createElement(Yr, {
                        overlay: i,
                        accessors: c,
                        localizer: u,
                        components: f,
                        getters: v,
                        selected: m,
                        popupOffset: g,
                        ref: this.containerRef,
                        handleKeyPressEvent: this.handleKeyPressEvent,
                        handleSelectEvent: this.handleSelectEvent,
                        handleDoubleClickEvent: this.handleDoubleClickEvent,
                        handleDragStart: h,
                        show: !!i.position,
                        overlayDisplay: this.overlayDisplay,
                        onHide: y,
                      });
                    },
                  },
                  {
                    key: "measureRowLimit",
                    value: function () {
                      this.setState({
                        needLimitMeasure: !1,
                        rowLimit: this.slotRowRef.current.getRowLimit(),
                      });
                    },
                  },
                  {
                    key: "selectDates",
                    value: function (a) {
                      var o = this._pendingSelection.slice();
                      (this._pendingSelection = []),
                        o.sort(function (l, c) {
                          return +l - +c;
                        });
                      var s = new Date(o[0]),
                        i = new Date(o[o.length - 1]);
                      i.setDate(o[o.length - 1].getDate() + 1),
                        ie(this.props.onSelectSlot, {
                          slots: o,
                          start: s,
                          end: i,
                          action: a.action,
                          bounds: a.bounds,
                          box: a.box,
                        });
                    },
                  },
                  {
                    key: "clearSelection",
                    value: function () {
                      clearTimeout(this._selectTimer),
                        (this._pendingSelection = []);
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (a, o) {
                      var s = a.date,
                        i = a.localizer;
                      return {
                        date: s,
                        needLimitMeasure: i.neq(s, o.date, "month"),
                      };
                    },
                  },
                ],
              ),
              r
            );
          })(d.Component);
        (ur.range = function (e, t) {
          var r = t.localizer,
            n = r.firstVisibleDay(e, r),
            a = r.lastVisibleDay(e, r);
          return { start: n, end: a };
        }),
          (ur.navigate = function (e, t, r) {
            var n = r.localizer;
            switch (t) {
              case we.PREVIOUS:
                return n.add(e, -1, "month");
              case we.NEXT:
                return n.add(e, 1, "month");
              default:
                return e;
            }
          }),
          (ur.title = function (e, t) {
            var r = t.localizer;
            return r.format(e, "monthHeaderFormat");
          });
        var Ka = function (t) {
          var r = t.min,
            n = t.max,
            a = t.step,
            o = t.slots,
            s = t.localizer;
          return (
            "".concat(+s.startOf(r, "minutes")) +
            "".concat(+s.startOf(n, "minutes")) +
            "".concat(a, "-").concat(o)
          );
        };
        function jr(e) {
          for (
            var t = e.min,
              r = e.max,
              n = e.step,
              a = e.timeslots,
              o = e.localizer,
              s = Ka({ start: t, end: r, step: n, timeslots: a, localizer: o }),
              i = 1 + o.getTotalMin(t, r),
              l = o.getMinutesFromMidnight(t),
              c = Math.ceil((i - 1) / (n * a)),
              u = c * a,
              f = new Array(c),
              v = new Array(u),
              m = 0;
            m < c;
            m++
          ) {
            f[m] = new Array(a);
            for (var g = 0; g < a; g++) {
              var h = m * a + g,
                y = h * n;
              v[h] = f[m][g] = o.getSlotDate(t, l, y);
            }
          }
          var D = v.length * n;
          v.push(o.getSlotDate(t, l, D));
          function E(M) {
            var S = o.diff(t, M, "minutes") + o.getDstOffset(t, M);
            return Math.min(S, i);
          }
          return {
            groups: f,
            update: function (S) {
              return Ka(S) !== s ? jr(S) : this;
            },
            dateIsInGroup: function (S, O) {
              var x = f[O + 1];
              return o.inRange(S, f[O][0], x ? x[0] : r, "minutes");
            },
            nextSlot: function (S) {
              var O = v[Math.min(v.indexOf(S) + 1, v.length - 1)];
              return O === S && (O = o.add(S, n, "minutes")), O;
            },
            closestSlotToPosition: function (S) {
              var O = Math.min(v.length - 1, Math.max(0, Math.floor(S * u)));
              return v[O];
            },
            closestSlotFromPoint: function (S, O) {
              var x = Math.abs(O.top - O.bottom);
              return this.closestSlotToPosition((S.y - O.top) / x);
            },
            closestSlotFromDate: function (S) {
              var O =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : 0;
              if (o.lt(S, t, "minutes")) return v[0];
              if (o.gt(S, r, "minutes")) return v[v.length - 1];
              var x = o.diff(t, S, "minutes");
              return v[(x - (x % n)) / n + O];
            },
            startsBeforeDay: function (S) {
              return o.lt(S, t, "day");
            },
            startsAfterDay: function (S) {
              return o.gt(S, r, "day");
            },
            startsBefore: function (S) {
              return o.lt(o.merge(t, S), t, "minutes");
            },
            startsAfter: function (S) {
              return o.gt(o.merge(r, S), r, "minutes");
            },
            getRange: function (S, O, x, F) {
              x || (S = o.min(r, o.max(t, S))),
                F || (O = o.min(r, o.max(t, O)));
              var $ = E(S),
                W = E(O),
                N =
                  W > n * u && !o.eq(r, O)
                    ? (($ - n) / (n * u)) * 100
                    : ($ / (n * u)) * 100;
              return {
                top: N,
                height: (W / (n * u)) * 100 - N,
                start: E(S),
                startDate: S,
                end: E(O),
                endDate: O,
              };
            },
            getCurrentTimePosition: function (S) {
              var O = E(S),
                x = (O / (n * u)) * 100;
              return x;
            },
          };
        }
        var hf = (function () {
          function e(t, r) {
            var n = r.accessors,
              a = r.slotMetrics;
            (0, B.A)(this, e);
            var o = a.getRange(n.start(t), n.end(t)),
              s = o.start,
              i = o.startDate,
              l = o.end,
              c = o.endDate,
              u = o.top,
              f = o.height;
            (this.start = s),
              (this.end = l),
              (this.startMs = +i),
              (this.endMs = +c),
              (this.top = u),
              (this.height = f),
              (this.data = t);
          }
          return (
            (0, U.A)(e, [
              {
                key: "_width",
                get: function () {
                  if (this.rows) {
                    var r =
                      this.rows.reduce(function (a, o) {
                        return Math.max(a, o.leaves.length + 1);
                      }, 0) + 1;
                    return 100 / r;
                  }
                  if (this.leaves) {
                    var n = 100 - this.container._width;
                    return n / (this.leaves.length + 1);
                  }
                  return this.row._width;
                },
              },
              {
                key: "width",
                get: function () {
                  var r = this._width,
                    n = Math.min(100, this._width * 1.7);
                  if (this.rows) return n;
                  if (this.leaves) return this.leaves.length > 0 ? n : r;
                  var a = this.row.leaves,
                    o = a.indexOf(this);
                  return o === a.length - 1 ? r : n;
                },
              },
              {
                key: "xOffset",
                get: function () {
                  if (this.rows) return 0;
                  if (this.leaves) return this.container._width;
                  var r = this.row,
                    n = r.leaves,
                    a = r.xOffset,
                    o = r._width,
                    s = n.indexOf(this) + 1;
                  return a + s * o;
                },
              },
            ]),
            e
          );
        })();
        function gf(e, t, r) {
          return (
            Math.abs(t.start - e.start) < r ||
            (t.start > e.start && t.start < e.end)
          );
        }
        function yf(e) {
          for (
            var t = cl(e, [
                "startMs",
                function (i) {
                  return -i.endMs;
                },
              ]),
              r = [];
            t.length > 0;
          ) {
            var n = t.shift();
            r.push(n);
            for (var a = 0; a < t.length; a++) {
              var o = t[a];
              if (!(n.endMs > o.startMs)) {
                if (a > 0) {
                  var s = t.splice(a, 1)[0];
                  r.push(s);
                }
                break;
              }
            }
          }
          return r;
        }
        function _a(e) {
          for (
            var t = e.events,
              r = e.minimumStartDifference,
              n = e.slotMetrics,
              a = e.accessors,
              o = t.map(function (u) {
                return new hf(u, { slotMetrics: n, accessors: a });
              }),
              s = yf(o),
              i = [],
              l = function () {
                var f = s[c],
                  v = i.find(function (h) {
                    return h.end > f.start || Math.abs(f.start - h.start) < r;
                  });
                if (!v) return (f.rows = []), i.push(f), 1;
                f.container = v;
                for (var m = null, g = v.rows.length - 1; !m && g >= 0; g--)
                  gf(v.rows[g], f, r) && (m = v.rows[g]);
                m
                  ? (m.leaves.push(f), (f.row = m))
                  : ((f.leaves = []), v.rows.push(f));
              },
              c = 0;
            c < s.length;
            c++
          )
            l();
          return s.map(function (u) {
            return {
              event: u.data,
              style: {
                top: u.top,
                height: u.height,
                width: u.width,
                xOffset: Math.max(0, u.xOffset),
              },
            };
          });
        }
        function Ga(e, t, r) {
          for (var n = 0; n < e.friends.length; ++n)
            if (!(r.indexOf(e.friends[n]) > -1)) {
              (t = t > e.friends[n].idx ? t : e.friends[n].idx),
                r.push(e.friends[n]);
              var a = Ga(e.friends[n], t, r);
              t = t > a ? t : a;
            }
          return t;
        }
        function wf(e) {
          var t = e.events,
            r = e.minimumStartDifference,
            n = e.slotMetrics,
            a = e.accessors,
            o = _a({
              events: t,
              minimumStartDifference: r,
              slotMetrics: n,
              accessors: a,
            });
          o.sort(function (Q, J) {
            return (
              (Q = Q.style),
              (J = J.style),
              Q.top !== J.top
                ? Q.top > J.top
                  ? 1
                  : -1
                : Q.top + Q.height < J.top + J.height
                  ? 1
                  : -1
            );
          });
          for (var s = 0; s < o.length; ++s)
            (o[s].friends = []),
              delete o[s].style.left,
              delete o[s].style.left,
              delete o[s].idx,
              delete o[s].size;
          for (var i = 0; i < o.length - 1; ++i)
            for (
              var l = o[i],
                c = l.style.top,
                u = l.style.top + l.style.height,
                f = i + 1;
              f < o.length;
              ++f
            ) {
              var v = o[f],
                m = v.style.top,
                g = v.style.top + v.style.height;
              ((m >= c && g <= u) || (g > c && g <= u) || (m >= c && m < u)) &&
                (l.friends.push(v), v.friends.push(l));
            }
          for (var h = 0; h < o.length; ++h) {
            for (var y = o[h], D = [], E = 0; E < 100; ++E) D.push(1);
            for (var M = 0; M < y.friends.length; ++M)
              y.friends[M].idx !== void 0 && (D[y.friends[M].idx] = 0);
            y.idx = D.indexOf(1);
          }
          for (var S = 0; S < o.length; ++S) {
            var O = 0;
            if (!o[S].size) {
              var x = [],
                F = Ga(o[S], 0, x);
              (O = 100 / (F + 1)), (o[S].size = O);
              for (var $ = 0; $ < x.length; ++$) x[$].size = O;
            }
          }
          for (var W = 0; W < o.length; ++W) {
            var N = o[W];
            N.style.left = N.idx * N.size;
            for (var I = 0, z = 0; z < N.friends.length; ++z) {
              var j = N.friends[z].idx;
              I = I > j ? I : j;
            }
            I <= N.idx && (N.size = 100 - N.idx * N.size);
            var G = N.idx === 0 ? 0 : 3;
            (N.style.width = "calc(".concat(N.size, "% - ").concat(G, "px)")),
              (N.style.height = "calc(".concat(N.style.height, "% - 2px)")),
              (N.style.xOffset = "calc("
                .concat(N.style.left, "% + ")
                .concat(G, "px)"));
          }
          return o;
        }
        var Xa = { overlap: _a, "no-overlap": wf };
        function bf(e) {
          return !!(e && e.constructor && e.call && e.apply);
        }
        function Df(e) {
          e.events, e.minimumStartDifference, e.slotMetrics, e.accessors;
          var t = e.dayLayoutAlgorithm,
            r = t;
          return t in Xa && (r = Xa[t]), bf(r) ? r.apply(this, arguments) : [];
        }
        var Ja = (function (e) {
          (0, K.A)(r, e);
          var t = (0, ee.A)(r);
          function r() {
            return (0, B.A)(this, r), t.apply(this, arguments);
          }
          return (
            (0, U.A)(r, [
              {
                key: "render",
                value: function () {
                  var a = this.props,
                    o = a.renderSlot,
                    s = a.resource,
                    i = a.group,
                    l = a.getters,
                    c = a.components,
                    u = c === void 0 ? {} : c,
                    f = u.timeSlotWrapper,
                    v = f === void 0 ? Me : f,
                    m = l ? l.slotGroupProp(i) : {};
                  return d.createElement(
                    "div",
                    Object.assign({ className: "rbc-timeslot-group" }, m),
                    i.map(function (g, h) {
                      var y = l ? l.slotProp(g, s) : {};
                      return d.createElement(
                        v,
                        { key: h, value: g, resource: s },
                        d.createElement(
                          "div",
                          Object.assign({}, y, {
                            className: (0, fe.A)("rbc-time-slot", y.className),
                          }),
                          o && o(g, h),
                        ),
                      );
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
        function rt(e) {
          return typeof e == "string" ? e : e + "%";
        }
        function Af(e) {
          var t = e.style,
            r = e.className,
            n = e.event,
            a = e.accessors,
            o = e.rtl,
            s = e.selected,
            i = e.label,
            l = e.continuesPrior,
            c = e.continuesAfter,
            u = e.getters,
            f = e.onClick,
            v = e.onDoubleClick,
            m = e.isBackgroundEvent,
            g = e.onKeyPress,
            h = e.components,
            y = h.event,
            D = h.eventWrapper,
            E = a.title(n),
            M = a.tooltip(n),
            S = a.end(n),
            O = a.start(n),
            x = u.eventProp(n, O, S, s),
            F = t.height,
            $ = t.top,
            W = t.width,
            N = t.xOffset,
            I = [
              d.createElement(
                "div",
                { key: "1", className: "rbc-event-label" },
                i,
              ),
              d.createElement(
                "div",
                { key: "2", className: "rbc-event-content" },
                y ? d.createElement(y, { event: n, title: E }) : E,
              ),
            ],
            z = m
              ? (0, Y.A)(
                  (0, Y.A)({}, x.style),
                  {},
                  (0, Ze.A)(
                    {
                      top: rt($),
                      height: rt(F),
                      width: "calc(".concat(W, " + 10px)"),
                    },
                    o ? "right" : "left",
                    rt(Math.max(0, N)),
                  ),
                )
              : (0, Y.A)(
                  (0, Y.A)({}, x.style),
                  {},
                  (0, Ze.A)(
                    { top: rt($), width: rt(W), height: rt(F) },
                    o ? "right" : "left",
                    rt(N),
                  ),
                );
          return d.createElement(
            D,
            Object.assign({ type: "time" }, e),
            d.createElement(
              "div",
              {
                role: "button",
                tabIndex: 0,
                onClick: f,
                onDoubleClick: v,
                style: z,
                onKeyPress: g,
                title: M ? (typeof i == "string" ? i + ": " : "") + M : void 0,
                className: (0, fe.A)(
                  m ? "rbc-background-event" : "rbc-event",
                  r,
                  x.className,
                  {
                    "rbc-selected": s,
                    "rbc-event-continues-earlier": l,
                    "rbc-event-continues-later": c,
                  },
                ),
              },
              I,
            ),
          );
        }
        var Ef = function (t) {
            var r = t.children,
              n = t.className,
              a = t.style,
              o = t.innerRef;
            return d.createElement(
              "div",
              { className: n, style: a, ref: o },
              r,
            );
          },
          Sf = d.forwardRef(function (e, t) {
            return d.createElement(Ef, Object.assign({}, e, { innerRef: t }));
          }),
          Mf = ["dayProp"],
          Of = ["eventContainerWrapper"],
          Za = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r() {
              var n;
              (0, B.A)(this, r);
              for (
                var a = arguments.length, o = new Array(a), s = 0;
                s < a;
                s++
              )
                o[s] = arguments[s];
              return (
                (n = t.call.apply(t, [this].concat(o))),
                (n.state = { selecting: !1, timeIndicatorPosition: null }),
                (n.intervalTriggered = !1),
                (n.renderEvents = function (i) {
                  var l = i.events,
                    c = i.isBackgroundEvent,
                    u = n.props,
                    f = u.rtl,
                    v = u.selected,
                    m = u.accessors,
                    g = u.localizer,
                    h = u.getters,
                    y = u.components,
                    D = u.step,
                    E = u.timeslots,
                    M = u.dayLayoutAlgorithm,
                    S = u.resizable,
                    O = (0, Gs.A)(n),
                    x = O.slotMetrics,
                    F = g.messages,
                    $ = Df({
                      events: l,
                      accessors: m,
                      slotMetrics: x,
                      minimumStartDifference: Math.ceil((D * E) / 2),
                      dayLayoutAlgorithm: M,
                    });
                  return $.map(function (W, N) {
                    var I = W.event,
                      z = W.style,
                      j = m.end(I),
                      G = m.start(I),
                      Q = "eventTimeRangeFormat",
                      J,
                      q = x.startsBeforeDay(G),
                      oe = x.startsAfterDay(j);
                    q
                      ? (Q = "eventTimeRangeEndFormat")
                      : oe && (Q = "eventTimeRangeStartFormat"),
                      q && oe
                        ? (J = F.allDay)
                        : (J = g.format({ start: G, end: j }, Q));
                    var de = q || x.startsBefore(G),
                      k = oe || x.startsAfter(j);
                    return d.createElement(Af, {
                      style: z,
                      event: I,
                      label: J,
                      key: "evt_" + N,
                      getters: h,
                      rtl: f,
                      components: y,
                      continuesPrior: de,
                      continuesAfter: k,
                      accessors: m,
                      resource: n.props.resource,
                      selected: sr(I, v),
                      onClick: function (A) {
                        return n._select(
                          (0, Y.A)(
                            (0, Y.A)({}, I),
                            {},
                            { sourceResource: n.props.resource },
                          ),
                          A,
                        );
                      },
                      onDoubleClick: function (A) {
                        return n._doubleClick(I, A);
                      },
                      isBackgroundEvent: c,
                      onKeyPress: function (A) {
                        return n._keyPress(I, A);
                      },
                      resizable: S,
                    });
                  });
                }),
                (n._selectable = function () {
                  var i = n.containerRef.current,
                    l = n.props,
                    c = l.longPressThreshold,
                    u = l.localizer,
                    f = (n._selector = new ka(
                      function () {
                        return i;
                      },
                      { longPressThreshold: c },
                    )),
                    v = function (y) {
                      var D = n.props.onSelecting,
                        E = n.state || {},
                        M = m(y),
                        S = M.startDate,
                        O = M.endDate;
                      (D &&
                        ((u.eq(E.startDate, S, "minutes") &&
                          u.eq(E.endDate, O, "minutes")) ||
                          D({
                            start: S,
                            end: O,
                            resourceId: n.props.resource,
                          }) === !1)) ||
                        ((n.state.start !== M.start ||
                          n.state.end !== M.end ||
                          n.state.selecting !== M.selecting) &&
                          n.setState(M));
                    },
                    m = function (y) {
                      var D = n.slotMetrics.closestSlotFromPoint(y, tt(i));
                      n.state.selecting || (n._initialSlot = D);
                      var E = n._initialSlot;
                      u.lte(E, D)
                        ? (D = n.slotMetrics.nextSlot(D))
                        : u.gt(E, D) && (E = n.slotMetrics.nextSlot(E));
                      var M = n.slotMetrics.getRange(u.min(E, D), u.max(E, D));
                      return (0, Y.A)(
                        (0, Y.A)({}, M),
                        {},
                        {
                          selecting: !0,
                          top: "".concat(M.top, "%"),
                          height: "".concat(M.height, "%"),
                        },
                      );
                    },
                    g = function (y, D) {
                      if (!lr(n.containerRef.current, y)) {
                        var E = m(y),
                          M = E.startDate,
                          S = E.endDate;
                        n._selectSlot({
                          startDate: M,
                          endDate: S,
                          action: D,
                          box: y,
                        });
                      }
                      n.setState({ selecting: !1 });
                    };
                  f.on("selecting", v),
                    f.on("selectStart", v),
                    f.on("beforeSelect", function (h) {
                      if (n.props.selectable === "ignoreEvents")
                        return !lr(n.containerRef.current, h);
                    }),
                    f.on("click", function (h) {
                      return g(h, "click");
                    }),
                    f.on("doubleClick", function (h) {
                      return g(h, "doubleClick");
                    }),
                    f.on("select", function (h) {
                      n.state.selecting &&
                        (n._selectSlot(
                          (0, Y.A)(
                            (0, Y.A)({}, n.state),
                            {},
                            { action: "select", bounds: h },
                          ),
                        ),
                        n.setState({ selecting: !1 }));
                    }),
                    f.on("reset", function () {
                      n.state.selecting && n.setState({ selecting: !1 });
                    });
                }),
                (n._teardownSelectable = function () {
                  n._selector && (n._selector.teardown(), (n._selector = null));
                }),
                (n._selectSlot = function (i) {
                  for (
                    var l = i.startDate,
                      c = i.endDate,
                      u = i.action,
                      f = i.bounds,
                      v = i.box,
                      m = l,
                      g = [];
                    n.props.localizer.lte(m, c);
                  )
                    g.push(m), (m = new Date(+m + n.props.step * 60 * 1e3));
                  ie(n.props.onSelectSlot, {
                    slots: g,
                    start: l,
                    end: c,
                    resourceId: n.props.resource,
                    action: u,
                    bounds: f,
                    box: v,
                  });
                }),
                (n._select = function () {
                  for (
                    var i = arguments.length, l = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c];
                  ie(n.props.onSelectEvent, l);
                }),
                (n._doubleClick = function () {
                  for (
                    var i = arguments.length, l = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c];
                  ie(n.props.onDoubleClickEvent, l);
                }),
                (n._keyPress = function () {
                  for (
                    var i = arguments.length, l = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    l[c] = arguments[c];
                  ie(n.props.onKeyPressEvent, l);
                }),
                (n.slotMetrics = jr(n.props)),
                (n.containerRef = (0, d.createRef)()),
                n
              );
            }
            return (
              (0, U.A)(r, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.props.selectable && this._selectable(),
                      this.props.isNow &&
                        this.setTimeIndicatorPositionUpdateInterval();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this._teardownSelectable(),
                      this.clearTimeIndicatorInterval();
                  },
                },
                {
                  key: "UNSAFE_componentWillReceiveProps",
                  value: function (a) {
                    a.selectable &&
                      !this.props.selectable &&
                      this._selectable(),
                      !a.selectable &&
                        this.props.selectable &&
                        this._teardownSelectable(),
                      (this.slotMetrics = this.slotMetrics.update(a));
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (a, o) {
                    var s = this.props,
                      i = s.getNow,
                      l = s.isNow,
                      c = s.localizer,
                      u = s.date,
                      f = s.min,
                      v = s.max,
                      m = c.neq(a.getNow(), i(), "minutes");
                    if (a.isNow !== l || m) {
                      if ((this.clearTimeIndicatorInterval(), l)) {
                        var g =
                          !m &&
                          c.eq(a.date, u, "minutes") &&
                          o.timeIndicatorPosition ===
                            this.state.timeIndicatorPosition;
                        this.setTimeIndicatorPositionUpdateInterval(g);
                      }
                    } else
                      l &&
                        (c.neq(a.min, f, "minutes") ||
                          c.neq(a.max, v, "minutes")) &&
                        this.positionTimeIndicator();
                  },
                },
                {
                  key: "setTimeIndicatorPositionUpdateInterval",
                  value: function () {
                    var a = this,
                      o =
                        arguments.length > 0 && arguments[0] !== void 0
                          ? arguments[0]
                          : !1;
                    !this.intervalTriggered &&
                      !o &&
                      this.positionTimeIndicator(),
                      (this._timeIndicatorTimeout = window.setTimeout(
                        function () {
                          (a.intervalTriggered = !0),
                            a.positionTimeIndicator(),
                            a.setTimeIndicatorPositionUpdateInterval();
                        },
                        6e4,
                      ));
                  },
                },
                {
                  key: "clearTimeIndicatorInterval",
                  value: function () {
                    (this.intervalTriggered = !1),
                      window.clearTimeout(this._timeIndicatorTimeout);
                  },
                },
                {
                  key: "positionTimeIndicator",
                  value: function () {
                    var a = this.props,
                      o = a.min,
                      s = a.max,
                      i = a.getNow,
                      l = i();
                    if (l >= o && l <= s) {
                      var c = this.slotMetrics.getCurrentTimePosition(l);
                      (this.intervalTriggered = !0),
                        this.setState({ timeIndicatorPosition: c });
                    } else this.clearTimeIndicatorInterval();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var a = this.props,
                      o = a.date,
                      s = a.max,
                      i = a.rtl,
                      l = a.isNow,
                      c = a.resource,
                      u = a.accessors,
                      f = a.localizer,
                      v = a.getters,
                      m = v.dayProp,
                      g = (0, Z.A)(v, Mf),
                      h = a.components,
                      y = h.eventContainerWrapper,
                      D = (0, Z.A)(h, Of),
                      E = this.slotMetrics,
                      M = this.state,
                      S = M.selecting,
                      O = M.top,
                      x = M.height,
                      F = M.startDate,
                      $ = M.endDate,
                      W = { start: F, end: $ },
                      N = m(s),
                      I = N.className,
                      z = N.style,
                      j = D.dayColumnWrapper || Sf;
                    return d.createElement(
                      j,
                      {
                        ref: this.containerRef,
                        date: o,
                        style: z,
                        className: (0, fe.A)(
                          I,
                          "rbc-day-slot",
                          "rbc-time-column",
                          l && "rbc-now",
                          l && "rbc-today",
                          S && "rbc-slot-selecting",
                        ),
                        slotMetrics: E,
                      },
                      E.groups.map(function (G, Q) {
                        return d.createElement(Ja, {
                          key: Q,
                          group: G,
                          resource: c,
                          getters: g,
                          components: D,
                        });
                      }),
                      d.createElement(
                        y,
                        {
                          localizer: f,
                          resource: c,
                          accessors: u,
                          getters: g,
                          components: D,
                          slotMetrics: E,
                        },
                        d.createElement(
                          "div",
                          {
                            className: (0, fe.A)(
                              "rbc-events-container",
                              i && "rtl",
                            ),
                          },
                          this.renderEvents({
                            events: this.props.backgroundEvents,
                            isBackgroundEvent: !0,
                          }),
                          this.renderEvents({ events: this.props.events }),
                        ),
                      ),
                      S &&
                        d.createElement(
                          "div",
                          {
                            className: "rbc-slot-selection",
                            style: { top: O, height: x },
                          },
                          d.createElement(
                            "span",
                            null,
                            f.format(W, "selectRangeFormat"),
                          ),
                        ),
                      l &&
                        this.intervalTriggered &&
                        d.createElement("div", {
                          className: "rbc-current-time-indicator",
                          style: {
                            top: "".concat(
                              this.state.timeIndicatorPosition,
                              "%",
                            ),
                          },
                        }),
                    );
                  },
                },
              ]),
              r
            );
          })(d.Component);
        Za.defaultProps = { dragThroughEvents: !0, timeslots: 2 };
        function Rf(e) {
          var t = e.min,
            r = e.max,
            n = e.localizer;
          return n.getTimezoneOffset(t) !== n.getTimezoneOffset(r)
            ? { start: n.add(t, -1, "day"), end: n.add(r, -1, "day") }
            : { start: t, end: r };
        }
        var Tf = function (t) {
            var r = t.min,
              n = t.max,
              a = t.timeslots,
              o = t.step,
              s = t.localizer,
              i = t.getNow,
              l = t.resource,
              c = t.components,
              u = t.getters,
              f = t.gutterRef,
              v = c.timeGutterWrapper,
              m = (0, d.useMemo)(
                function () {
                  return Rf({ min: r, max: n, localizer: s });
                },
                [r?.toISOString(), n?.toISOString(), s],
              ),
              g = m.start,
              h = m.end,
              y = (0, d.useState)(
                jr({ min: g, max: h, timeslots: a, step: o, localizer: s }),
              ),
              D = (0, V.A)(y, 2),
              E = D[0],
              M = D[1];
            (0, d.useEffect)(
              function () {
                E &&
                  M(
                    E.update({
                      min: g,
                      max: h,
                      timeslots: a,
                      step: o,
                      localizer: s,
                    }),
                  );
              },
              [g?.toISOString(), h?.toISOString(), a, o],
            );
            var S = (0, d.useCallback)(
              function (O, x) {
                if (x) return null;
                var F = E.dateIsInGroup(i(), x);
                return d.createElement(
                  "span",
                  { className: (0, fe.A)("rbc-label", F && "rbc-now") },
                  s.format(O, "timeGutterFormat"),
                );
              },
              [E, s, i],
            );
            return d.createElement(
              v,
              { slotMetrics: E },
              d.createElement(
                "div",
                { className: "rbc-time-gutter rbc-time-column", ref: f },
                E.groups.map(function (O, x) {
                  return d.createElement(Ja, {
                    key: x,
                    group: O,
                    resource: l,
                    components: c,
                    renderSlot: S,
                    getters: u,
                  });
                }),
              ),
            );
          },
          Cf = d.forwardRef(function (e, t) {
            return d.createElement(Tf, Object.assign({ gutterRef: t }, e));
          }),
          xf = function (t) {
            var r = t.label;
            return d.createElement(d.Fragment, null, r);
          },
          Pf = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r() {
              var n;
              (0, B.A)(this, r);
              for (
                var a = arguments.length, o = new Array(a), s = 0;
                s < a;
                s++
              )
                o[s] = arguments[s];
              return (
                (n = t.call.apply(t, [this].concat(o))),
                (n.handleHeaderClick = function (i, l, c) {
                  c.preventDefault(), ie(n.props.onDrillDown, [i, l]);
                }),
                (n.renderRow = function (i) {
                  var l = n.props,
                    c = l.events,
                    u = l.rtl,
                    f = l.selectable,
                    v = l.getNow,
                    m = l.range,
                    g = l.getters,
                    h = l.localizer,
                    y = l.accessors,
                    D = l.components,
                    E = l.resizable,
                    M = y.resourceId(i),
                    S = i
                      ? c.filter(function (O) {
                          return y.resource(O) === M;
                        })
                      : c;
                  return d.createElement(cr, {
                    isAllDay: !0,
                    rtl: u,
                    getNow: v,
                    minRows: 2,
                    maxRows: n.props.allDayMaxRows + 1,
                    range: m,
                    events: S,
                    resourceId: M,
                    className: "rbc-allday-cell",
                    selectable: f,
                    selected: n.props.selected,
                    components: D,
                    accessors: y,
                    getters: g,
                    localizer: h,
                    onSelect: n.props.onSelectEvent,
                    onShowMore: n.props.onShowMore,
                    onDoubleClick: n.props.onDoubleClickEvent,
                    onKeyPress: n.props.onKeyPressEvent,
                    onSelectSlot: n.props.onSelectSlot,
                    longPressThreshold: n.props.longPressThreshold,
                    resizable: E,
                  });
                }),
                n
              );
            }
            return (
              (0, U.A)(r, [
                {
                  key: "renderHeaderCells",
                  value: function (a) {
                    var o = this,
                      s = this.props,
                      i = s.localizer,
                      l = s.getDrilldownView,
                      c = s.getNow,
                      u = s.getters.dayProp,
                      f = s.components.header,
                      v = f === void 0 ? Va : f,
                      m = c();
                    return a.map(function (g, h) {
                      var y = l(g),
                        D = i.format(g, "dayFormat"),
                        E = u(g),
                        M = E.className,
                        S = E.style,
                        O = d.createElement(v, {
                          date: g,
                          label: D,
                          localizer: i,
                        });
                      return d.createElement(
                        "div",
                        {
                          key: h,
                          style: S,
                          className: (0, fe.A)(
                            "rbc-header",
                            M,
                            i.isSameDate(g, m) && "rbc-today",
                          ),
                        },
                        y
                          ? d.createElement(
                              "button",
                              {
                                type: "button",
                                className: "rbc-button-link",
                                onClick: function (F) {
                                  return o.handleHeaderClick(g, y, F);
                                },
                              },
                              O,
                            )
                          : d.createElement("span", null, O),
                      );
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var a = this,
                      o = this.props,
                      s = o.width,
                      i = o.rtl,
                      l = o.resources,
                      c = o.range,
                      u = o.events,
                      f = o.getNow,
                      v = o.accessors,
                      m = o.selectable,
                      g = o.components,
                      h = o.getters,
                      y = o.scrollRef,
                      D = o.localizer,
                      E = o.isOverflowing,
                      M = o.components,
                      S = M.timeGutterHeader,
                      O = M.resourceHeader,
                      x = O === void 0 ? xf : O,
                      F = o.resizable,
                      $ = {};
                    E &&
                      ($[i ? "marginLeft" : "marginRight"] = "".concat(
                        ra() - 1,
                        "px",
                      ));
                    var W = l.groupEvents(u);
                    return d.createElement(
                      "div",
                      {
                        style: $,
                        ref: y,
                        className: (0, fe.A)(
                          "rbc-time-header",
                          E && "rbc-overflowing",
                        ),
                      },
                      d.createElement(
                        "div",
                        {
                          className: "rbc-label rbc-time-header-gutter",
                          style: { width: s, minWidth: s, maxWidth: s },
                        },
                        S && d.createElement(S, null),
                      ),
                      l.map(function (N, I) {
                        var z = (0, V.A)(N, 2),
                          j = z[0],
                          G = z[1];
                        return d.createElement(
                          "div",
                          { className: "rbc-time-header-content", key: j || I },
                          G &&
                            d.createElement(
                              "div",
                              {
                                className: "rbc-row rbc-row-resource",
                                key: "resource_".concat(I),
                              },
                              d.createElement(
                                "div",
                                { className: "rbc-header" },
                                d.createElement(x, {
                                  index: I,
                                  label: v.resourceTitle(G),
                                  resource: G,
                                }),
                              ),
                            ),
                          d.createElement(
                            "div",
                            {
                              className: "rbc-row rbc-time-header-cell".concat(
                                c.length <= 1
                                  ? " rbc-time-header-cell-single-day"
                                  : "",
                              ),
                            },
                            a.renderHeaderCells(c),
                          ),
                          d.createElement(cr, {
                            isAllDay: !0,
                            rtl: i,
                            getNow: f,
                            minRows: 2,
                            maxRows: a.props.allDayMaxRows + 1,
                            range: c,
                            events: W.get(j) || [],
                            resourceId: G && j,
                            className: "rbc-allday-cell",
                            selectable: m,
                            selected: a.props.selected,
                            components: g,
                            accessors: v,
                            getters: h,
                            localizer: D,
                            onSelect: a.props.onSelectEvent,
                            onShowMore: a.props.onShowMore,
                            onDoubleClick: a.props.onDoubleClickEvent,
                            onKeyPress: a.props.onKeyPressEvent,
                            onSelectSlot: a.props.onSelectSlot,
                            longPressThreshold: a.props.longPressThreshold,
                            resizable: F,
                          }),
                        );
                      }),
                    );
                  },
                },
              ]),
              r
            );
          })(d.Component),
          Vr = {};
        function Ff(e, t) {
          return {
            map: function (n) {
              return e
                ? e.map(function (a, o) {
                    return n([t.resourceId(a), a], o);
                  })
                : [n([Vr, null], 0)];
            },
            groupEvents: function (n) {
              var a = new Map();
              return e
                ? (n.forEach(function (o) {
                    var s = t.resource(o) || Vr;
                    if (Array.isArray(s))
                      s.forEach(function (l) {
                        var c = a.get(l) || [];
                        c.push(o), a.set(l, c);
                      });
                    else {
                      var i = a.get(s) || [];
                      i.push(o), a.set(s, i);
                    }
                  }),
                  a)
                : (a.set(Vr, n), a);
            },
          };
        }
        var yt = (function (e) {
          (0, K.A)(r, e);
          var t = (0, ee.A)(r);
          function r(n) {
            var a;
            return (
              (0, B.A)(this, r),
              (a = t.call(this, n)),
              (a.handleScroll = function (o) {
                a.scrollRef.current &&
                  (a.scrollRef.current.scrollLeft = o.target.scrollLeft);
              }),
              (a.handleResize = function () {
                wn(a.rafHandle), (a.rafHandle = bn(a.checkOverflow));
              }),
              (a.handleKeyPressEvent = function () {
                a.clearSelection();
                for (
                  var o = arguments.length, s = new Array(o), i = 0;
                  i < o;
                  i++
                )
                  s[i] = arguments[i];
                ie(a.props.onKeyPressEvent, s);
              }),
              (a.handleSelectEvent = function () {
                a.clearSelection();
                for (
                  var o = arguments.length, s = new Array(o), i = 0;
                  i < o;
                  i++
                )
                  s[i] = arguments[i];
                ie(a.props.onSelectEvent, s);
              }),
              (a.handleDoubleClickEvent = function () {
                a.clearSelection();
                for (
                  var o = arguments.length, s = new Array(o), i = 0;
                  i < o;
                  i++
                )
                  s[i] = arguments[i];
                ie(a.props.onDoubleClickEvent, s);
              }),
              (a.handleShowMore = function (o, s, i, l, c) {
                var u = a.props,
                  f = u.popup,
                  v = u.onDrillDown,
                  m = u.onShowMore,
                  g = u.getDrilldownView,
                  h = u.doShowMoreDrillDown;
                if ((a.clearSelection(), f)) {
                  var y = hn(i, a.containerRef.current);
                  a.setState({
                    overlay: {
                      date: s,
                      events: o,
                      position: (0, Y.A)(
                        (0, Y.A)({}, y),
                        {},
                        { width: "200px" },
                      ),
                      target: c,
                    },
                  });
                } else h && ie(v, [s, g(s) || pe.DAY]);
                ie(m, [o, s, l]);
              }),
              (a.handleSelectAllDaySlot = function (o, s) {
                var i = a.props.onSelectSlot,
                  l = new Date(o[0]),
                  c = new Date(o[o.length - 1]);
                c.setDate(o[o.length - 1].getDate() + 1),
                  ie(i, {
                    slots: o,
                    start: l,
                    end: c,
                    action: s.action,
                    resourceId: s.resourceId,
                  });
              }),
              (a.overlayDisplay = function () {
                a.setState({ overlay: null });
              }),
              (a.checkOverflow = function () {
                if (!a._updatingOverflow) {
                  var o = a.contentRef.current;
                  if (o != null && o.scrollHeight) {
                    var s = o.scrollHeight > o.clientHeight;
                    a.state.isOverflowing !== s &&
                      ((a._updatingOverflow = !0),
                      a.setState({ isOverflowing: s }, function () {
                        a._updatingOverflow = !1;
                      }));
                  }
                }
              }),
              (a.memoizedResources = Gn(function (o, s) {
                return Ff(o, s);
              })),
              (a.state = { gutterWidth: void 0, isOverflowing: null }),
              (a.scrollRef = d.createRef()),
              (a.contentRef = d.createRef()),
              (a.containerRef = d.createRef()),
              (a._scrollRatio = null),
              (a.gutterRef = (0, d.createRef)()),
              a
            );
          }
          return (
            (0, U.A)(r, [
              {
                key: "getSnapshotBeforeUpdate",
                value: function () {
                  return this.checkOverflow(), null;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.props.width == null && this.measureGutter(),
                    this.calculateScroll(),
                    this.applyScroll(),
                    window.addEventListener("resize", this.handleResize);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.handleResize),
                    wn(this.rafHandle),
                    this.measureGutterAnimationFrameRequest &&
                      window.cancelAnimationFrame(
                        this.measureGutterAnimationFrameRequest,
                      );
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.applyScroll();
                },
              },
              {
                key: "renderEvents",
                value: function (a, o, s, i) {
                  var l = this,
                    c = this.props,
                    u = c.min,
                    f = c.max,
                    v = c.components,
                    m = c.accessors,
                    g = c.localizer,
                    h = c.dayLayoutAlgorithm,
                    y = this.memoizedResources(this.props.resources, m),
                    D = y.groupEvents(o),
                    E = y.groupEvents(s);
                  return y.map(function (M, S) {
                    var O = (0, V.A)(M, 2),
                      x = O[0],
                      F = O[1];
                    return a.map(function ($, W) {
                      var N = (D.get(x) || []).filter(function (z) {
                          return g.inRange($, m.start(z), m.end(z), "day");
                        }),
                        I = (E.get(x) || []).filter(function (z) {
                          return g.inRange($, m.start(z), m.end(z), "day");
                        });
                      return d.createElement(
                        Za,
                        Object.assign({}, l.props, {
                          localizer: g,
                          min: g.merge($, u),
                          max: g.merge($, f),
                          resource: F && x,
                          components: v,
                          isNow: g.isSameDate($, i),
                          key: S + "-" + W,
                          date: $,
                          events: N,
                          backgroundEvents: I,
                          dayLayoutAlgorithm: h,
                        }),
                      );
                    });
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var a,
                    o = this.props,
                    s = o.events,
                    i = o.backgroundEvents,
                    l = o.range,
                    c = o.width,
                    u = o.rtl,
                    f = o.selected,
                    v = o.getNow,
                    m = o.resources,
                    g = o.components,
                    h = o.accessors,
                    y = o.getters,
                    D = o.localizer,
                    E = o.min,
                    M = o.max,
                    S = o.showMultiDayTimes,
                    O = o.longPressThreshold,
                    x = o.resizable;
                  c = c || this.state.gutterWidth;
                  var F = l[0],
                    $ = l[l.length - 1];
                  this.slots = l.length;
                  var W = [],
                    N = [],
                    I = [];
                  return (
                    s.forEach(function (z) {
                      if (It(z, F, $, h, D)) {
                        var j = h.start(z),
                          G = h.end(z);
                        h.allDay(z) ||
                        D.startAndEndAreDateOnly(j, G) ||
                        (!S && !D.isSameDate(j, G))
                          ? W.push(z)
                          : N.push(z);
                      }
                    }),
                    i.forEach(function (z) {
                      It(z, F, $, h, D) && I.push(z);
                    }),
                    W.sort(function (z, j) {
                      return Ba(z, j, h, D);
                    }),
                    d.createElement(
                      "div",
                      {
                        className: (0, fe.A)(
                          "rbc-time-view",
                          m && "rbc-time-view-resources",
                        ),
                        ref: this.containerRef,
                      },
                      d.createElement(Pf, {
                        range: l,
                        events: W,
                        width: c,
                        rtl: u,
                        getNow: v,
                        localizer: D,
                        selected: f,
                        allDayMaxRows: this.props.showAllEvents
                          ? 1 / 0
                          : (a = this.props.allDayMaxRows) !== null &&
                              a !== void 0
                            ? a
                            : 1 / 0,
                        resources: this.memoizedResources(m, h),
                        selectable: this.props.selectable,
                        accessors: h,
                        getters: y,
                        components: g,
                        scrollRef: this.scrollRef,
                        isOverflowing: this.state.isOverflowing,
                        longPressThreshold: O,
                        onSelectSlot: this.handleSelectAllDaySlot,
                        onSelectEvent: this.handleSelectEvent,
                        onShowMore: this.handleShowMore,
                        onDoubleClickEvent: this.props.onDoubleClickEvent,
                        onKeyPressEvent: this.props.onKeyPressEvent,
                        onDrillDown: this.props.onDrillDown,
                        getDrilldownView: this.props.getDrilldownView,
                        resizable: x,
                      }),
                      this.props.popup && this.renderOverlay(),
                      d.createElement(
                        "div",
                        {
                          ref: this.contentRef,
                          className: "rbc-time-content",
                          onScroll: this.handleScroll,
                        },
                        d.createElement(Cf, {
                          date: F,
                          ref: this.gutterRef,
                          localizer: D,
                          min: D.merge(F, E),
                          max: D.merge(F, M),
                          step: this.props.step,
                          getNow: this.props.getNow,
                          timeslots: this.props.timeslots,
                          components: g,
                          className: "rbc-time-gutter",
                          getters: y,
                        }),
                        this.renderEvents(l, N, I, v()),
                      ),
                    )
                  );
                },
              },
              {
                key: "renderOverlay",
                value: function () {
                  var a,
                    o,
                    s = this,
                    i =
                      (a =
                        (o = this.state) === null || o === void 0
                          ? void 0
                          : o.overlay) !== null && a !== void 0
                        ? a
                        : {},
                    l = this.props,
                    c = l.accessors,
                    u = l.localizer,
                    f = l.components,
                    v = l.getters,
                    m = l.selected,
                    g = l.popupOffset,
                    h = l.handleDragStart,
                    y = function () {
                      return s.setState({ overlay: null });
                    };
                  return d.createElement(Yr, {
                    overlay: i,
                    accessors: c,
                    localizer: u,
                    components: f,
                    getters: v,
                    selected: m,
                    popupOffset: g,
                    ref: this.containerRef,
                    handleKeyPressEvent: this.handleKeyPressEvent,
                    handleSelectEvent: this.handleSelectEvent,
                    handleDoubleClickEvent: this.handleDoubleClickEvent,
                    handleDragStart: h,
                    show: !!i.position,
                    overlayDisplay: this.overlayDisplay,
                    onHide: y,
                  });
                },
              },
              {
                key: "clearSelection",
                value: function () {
                  clearTimeout(this._selectTimer),
                    (this._pendingSelection = []);
                },
              },
              {
                key: "measureGutter",
                value: function () {
                  var a = this;
                  this.measureGutterAnimationFrameRequest &&
                    window.cancelAnimationFrame(
                      this.measureGutterAnimationFrameRequest,
                    ),
                    (this.measureGutterAnimationFrameRequest =
                      window.requestAnimationFrame(function () {
                        var o,
                          s =
                            (o = a.gutterRef) !== null &&
                            o !== void 0 &&
                            o.current
                              ? Ir(a.gutterRef.current)
                              : void 0;
                        s &&
                          a.state.gutterWidth !== s &&
                          a.setState({ gutterWidth: s });
                      }));
                },
              },
              {
                key: "applyScroll",
                value: function () {
                  if (
                    this._scrollRatio != null &&
                    this.props.enableAutoScroll === !0
                  ) {
                    var a = this.contentRef.current;
                    (a.scrollTop = a.scrollHeight * this._scrollRatio),
                      (this._scrollRatio = null);
                  }
                },
              },
              {
                key: "calculateScroll",
                value: function () {
                  var a =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : this.props,
                    o = a.min,
                    s = a.max,
                    i = a.scrollToTime,
                    l = a.localizer,
                    c = l.diff(l.merge(i, o), i, "milliseconds"),
                    u = l.diff(o, s, "milliseconds");
                  this._scrollRatio = c / u;
                },
              },
            ]),
            r
          );
        })(d.Component);
        yt.defaultProps = { step: 30, timeslots: 2 };
        var $f = [
            "date",
            "localizer",
            "min",
            "max",
            "scrollToTime",
            "enableAutoScroll",
          ],
          fr = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r() {
              return (0, B.A)(this, r), t.apply(this, arguments);
            }
            return (
              (0, U.A)(r, [
                {
                  key: "render",
                  value: function () {
                    var a = this.props,
                      o = a.date,
                      s = a.localizer,
                      i = a.min,
                      l = i === void 0 ? s.startOf(new Date(), "day") : i,
                      c = a.max,
                      u = c === void 0 ? s.endOf(new Date(), "day") : c,
                      f = a.scrollToTime,
                      v = f === void 0 ? s.startOf(new Date(), "day") : f,
                      m = a.enableAutoScroll,
                      g = m === void 0 ? !0 : m,
                      h = (0, Z.A)(a, $f),
                      y = r.range(o, { localizer: s });
                    return d.createElement(
                      yt,
                      Object.assign({}, h, {
                        range: y,
                        eventOffset: 10,
                        localizer: s,
                        min: l,
                        max: u,
                        scrollToTime: v,
                        enableAutoScroll: g,
                      }),
                    );
                  },
                },
              ]),
              r
            );
          })(d.Component);
        (fr.range = function (e, t) {
          var r = t.localizer;
          return [r.startOf(e, "day")];
        }),
          (fr.navigate = function (e, t, r) {
            var n = r.localizer;
            switch (t) {
              case we.PREVIOUS:
                return n.add(e, -1, "day");
              case we.NEXT:
                return n.add(e, 1, "day");
              default:
                return e;
            }
          }),
          (fr.title = function (e, t) {
            var r = t.localizer;
            return r.format(e, "dayHeaderFormat");
          });
        var kf = [
            "date",
            "localizer",
            "min",
            "max",
            "scrollToTime",
            "enableAutoScroll",
          ],
          Ie = (function (e) {
            (0, K.A)(r, e);
            var t = (0, ee.A)(r);
            function r() {
              return (0, B.A)(this, r), t.apply(this, arguments);
            }
            return (
              (0, U.A)(r, [
                {
                  key: "render",
                  value: function () {
                    var a = this.props,
                      o = a.date,
                      s = a.localizer,
                      i = a.min,
                      l = i === void 0 ? s.startOf(new Date(), "day") : i,
                      c = a.max,
                      u = c === void 0 ? s.endOf(new Date(), "day") : c,
                      f = a.scrollToTime,
                      v = f === void 0 ? s.startOf(new Date(), "day") : f,
                      m = a.enableAutoScroll,
                      g = m === void 0 ? !0 : m,
                      h = (0, Z.A)(a, kf),
                      y = r.range(o, this.props);
                    return d.createElement(
                      yt,
                      Object.assign({}, h, {
                        range: y,
                        eventOffset: 15,
                        localizer: s,
                        min: l,
                        max: u,
                        scrollToTime: v,
                        enableAutoScroll: g,
                      }),
                    );
                  },
                },
              ]),
              r
            );
          })(d.Component);
        (Ie.defaultProps = yt.defaultProps),
          (Ie.navigate = function (e, t, r) {
            var n = r.localizer;
            switch (t) {
              case we.PREVIOUS:
                return n.add(e, -1, "week");
              case we.NEXT:
                return n.add(e, 1, "week");
              default:
                return e;
            }
          }),
          (Ie.range = function (e, t) {
            var r = t.localizer,
              n = r.startOfWeek(),
              a = r.startOf(e, "week", n),
              o = r.endOf(e, "week", n);
            return r.range(a, o);
          }),
          (Ie.title = function (e, t) {
            var r = t.localizer,
              n = Ie.range(e, { localizer: r }),
              a = na(n),
              o = a[0],
              s = a.slice(1);
            return r.format({ start: o, end: s.pop() }, "dayRangeHeaderFormat");
          });
        var Nf = [
          "date",
          "localizer",
          "min",
          "max",
          "scrollToTime",
          "enableAutoScroll",
        ];
        function Kr(e, t) {
          return Ie.range(e, t).filter(function (r) {
            return [6, 0].indexOf(r.getDay()) === -1;
          });
        }
        var Bt = (function (e) {
          (0, K.A)(r, e);
          var t = (0, ee.A)(r);
          function r() {
            return (0, B.A)(this, r), t.apply(this, arguments);
          }
          return (
            (0, U.A)(r, [
              {
                key: "render",
                value: function () {
                  var a = this.props,
                    o = a.date,
                    s = a.localizer,
                    i = a.min,
                    l = i === void 0 ? s.startOf(new Date(), "day") : i,
                    c = a.max,
                    u = c === void 0 ? s.endOf(new Date(), "day") : c,
                    f = a.scrollToTime,
                    v = f === void 0 ? s.startOf(new Date(), "day") : f,
                    m = a.enableAutoScroll,
                    g = m === void 0 ? !0 : m,
                    h = (0, Z.A)(a, Nf),
                    y = Kr(o, this.props);
                  return d.createElement(
                    yt,
                    Object.assign({}, h, {
                      range: y,
                      eventOffset: 15,
                      localizer: s,
                      min: l,
                      max: u,
                      scrollToTime: v,
                      enableAutoScroll: g,
                    }),
                  );
                },
              },
            ]),
            r
          );
        })(d.Component);
        (Bt.defaultProps = yt.defaultProps),
          (Bt.range = Kr),
          (Bt.navigate = Ie.navigate),
          (Bt.title = function (e, t) {
            var r = t.localizer,
              n = Kr(e, { localizer: r }),
              a = na(n),
              o = a[0],
              s = a.slice(1);
            return r.format({ start: o, end: s.pop() }, "dayRangeHeaderFormat");
          });
        function Be(e) {
          var t = e.accessors,
            r = e.components,
            n = e.date,
            a = e.events,
            o = e.getters,
            s = e.length,
            i = e.localizer,
            l = e.onDoubleClickEvent,
            c = e.onSelectEvent,
            u = e.selected,
            f = (0, d.useRef)(null),
            v = (0, d.useRef)(null),
            m = (0, d.useRef)(null),
            g = (0, d.useRef)(null),
            h = (0, d.useRef)(null);
          (0, d.useEffect)(function () {
            E();
          });
          var y = function (F, $, W) {
              var N = r.event,
                I = r.date;
              return (
                ($ = $.filter(function (z) {
                  return It(z, i.startOf(F, "day"), i.endOf(F, "day"), t, i);
                })),
                $.map(function (z, j) {
                  var G = t.title(z),
                    Q = t.end(z),
                    J = t.start(z),
                    q = o.eventProp(z, J, Q, sr(z, u)),
                    oe = j === 0 && i.format(F, "agendaDateFormat"),
                    de =
                      j === 0
                        ? d.createElement(
                            "td",
                            {
                              rowSpan: $.length,
                              className: "rbc-agenda-date-cell",
                            },
                            I ? d.createElement(I, { day: F, label: oe }) : oe,
                          )
                        : !1;
                  return d.createElement(
                    "tr",
                    {
                      key: W + "_" + j,
                      className: q.className,
                      style: q.style,
                    },
                    de,
                    d.createElement(
                      "td",
                      { className: "rbc-agenda-time-cell" },
                      D(F, z),
                    ),
                    d.createElement(
                      "td",
                      {
                        className: "rbc-agenda-event-cell",
                        onClick: function (w) {
                          return c && c(z, w);
                        },
                        onDoubleClick: function (w) {
                          return l && l(z, w);
                        },
                      },
                      N ? d.createElement(N, { event: z, title: G }) : G,
                    ),
                  );
                }, [])
              );
            },
            D = function (F, $) {
              var W = "",
                N = r.time,
                I = i.messages.allDay,
                z = t.end($),
                j = t.start($);
              return (
                t.allDay($) ||
                  (i.eq(j, z)
                    ? (I = i.format(j, "agendaTimeFormat"))
                    : i.isSameDate(j, z)
                      ? (I = i.format(
                          { start: j, end: z },
                          "agendaTimeRangeFormat",
                        ))
                      : i.isSameDate(F, j)
                        ? (I = i.format(j, "agendaTimeFormat"))
                        : i.isSameDate(F, z) &&
                          (I = i.format(z, "agendaTimeFormat"))),
                i.gt(F, j, "day") && (W = "rbc-continues-prior"),
                i.lt(F, z, "day") && (W += " rbc-continues-after"),
                d.createElement(
                  "span",
                  { className: W.trim() },
                  N ? d.createElement(N, { event: $, day: F, label: I }) : I,
                )
              );
            },
            E = function () {
              if (h.current) {
                var F = f.current,
                  $ = h.current.firstChild;
                if ($) {
                  var W = g.current.scrollHeight > g.current.clientHeight,
                    N = [],
                    I = N;
                  (N = [Ir($.children[0]), Ir($.children[1])]),
                    (I[0] !== N[0] || I[1] !== N[1]) &&
                      ((v.current.style.width = N[0] + "px"),
                      (m.current.style.width = N[1] + "px")),
                    W
                      ? ((0, ml.A)(F, "rbc-header-overflowing"),
                        (F.style.marginRight = ra() + "px"))
                      : (0, pl.A)(F, "rbc-header-overflowing");
                }
              }
            },
            M = i.messages,
            S = i.add(n, s, "day"),
            O = i.range(n, S, "day");
          return (
            (a = a.filter(function (x) {
              return It(x, i.startOf(n, "day"), i.endOf(S, "day"), t, i);
            })),
            a.sort(function (x, F) {
              return +t.start(x) - +t.start(F);
            }),
            d.createElement(
              "div",
              { className: "rbc-agenda-view" },
              a.length !== 0
                ? d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(
                      "table",
                      { ref: f, className: "rbc-agenda-table" },
                      d.createElement(
                        "thead",
                        null,
                        d.createElement(
                          "tr",
                          null,
                          d.createElement(
                            "th",
                            { className: "rbc-header", ref: v },
                            M.date,
                          ),
                          d.createElement(
                            "th",
                            { className: "rbc-header", ref: m },
                            M.time,
                          ),
                          d.createElement(
                            "th",
                            { className: "rbc-header" },
                            M.event,
                          ),
                        ),
                      ),
                    ),
                    d.createElement(
                      "div",
                      { className: "rbc-agenda-content", ref: g },
                      d.createElement(
                        "table",
                        { className: "rbc-agenda-table" },
                        d.createElement(
                          "tbody",
                          { ref: h },
                          O.map(function (x, F) {
                            return y(x, a, F);
                          }),
                        ),
                      ),
                    ),
                  )
                : d.createElement(
                    "span",
                    { className: "rbc-agenda-empty" },
                    M.noEventsInRange,
                  ),
            )
          );
        }
        (Be.defaultProps = { length: 30 }),
          (Be.range = function (e, t) {
            var r = t.length,
              n = r === void 0 ? Be.defaultProps.length : r,
              a = t.localizer,
              o = a.add(e, n, "day");
            return { start: e, end: o };
          }),
          (Be.navigate = function (e, t, r) {
            var n = r.length,
              a = n === void 0 ? Be.defaultProps.length : n,
              o = r.localizer;
            switch (t) {
              case we.PREVIOUS:
                return o.add(e, -a, "day");
              case we.NEXT:
                return o.add(e, a, "day");
              default:
                return e;
            }
          }),
          (Be.title = function (e, t) {
            var r = t.length,
              n = r === void 0 ? Be.defaultProps.length : r,
              a = t.localizer,
              o = a.add(e, n, "day");
            return a.format({ start: e, end: o }, "agendaHeaderFormat");
          });
        var nt,
          dr =
            ((nt = {}),
            (0, Ze.A)(nt, pe.MONTH, ur),
            (0, Ze.A)(nt, pe.WEEK, Ie),
            (0, Ze.A)(nt, pe.WORK_WEEK, Bt),
            (0, Ze.A)(nt, pe.DAY, fr),
            (0, Ze.A)(nt, pe.AGENDA, Be),
            nt),
          Lf = ["action", "date", "today"];
        function zf(e, t) {
          var r = t.action,
            n = t.date,
            a = t.today,
            o = (0, Z.A)(t, Lf);
          switch (((e = typeof e == "string" ? dr[e] : e), r)) {
            case we.TODAY:
              n = a || new Date();
              break;
            case we.DATE:
              break;
            default:
              be()(
                e && typeof e.navigate == "function",
                "Calendar View components must implement a static `.navigate(date, action)` method.s",
              ),
                (n = e.navigate(n, r, o));
          }
          return n;
        }
        var Wf = (function (e) {
          (0, K.A)(r, e);
          var t = (0, ee.A)(r);
          function r() {
            var n;
            (0, B.A)(this, r);
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s];
            return (
              (n = t.call.apply(t, [this].concat(o))),
              (n.navigate = function (i) {
                n.props.onNavigate(i);
              }),
              (n.view = function (i) {
                n.props.onView(i);
              }),
              n
            );
          }
          return (
            (0, U.A)(r, [
              {
                key: "render",
                value: function () {
                  var a = this.props,
                    o = a.localizer.messages,
                    s = a.label;
                  return d.createElement(
                    "div",
                    { className: "rbc-toolbar" },
                    d.createElement(
                      "span",
                      { className: "rbc-btn-group" },
                      d.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: this.navigate.bind(null, we.TODAY),
                        },
                        o.today,
                      ),
                      d.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: this.navigate.bind(null, we.PREVIOUS),
                        },
                        o.previous,
                      ),
                      d.createElement(
                        "button",
                        {
                          type: "button",
                          onClick: this.navigate.bind(null, we.NEXT),
                        },
                        o.next,
                      ),
                    ),
                    d.createElement(
                      "span",
                      { className: "rbc-toolbar-label" },
                      s,
                    ),
                    d.createElement(
                      "span",
                      { className: "rbc-btn-group" },
                      this.viewNamesGroup(o),
                    ),
                  );
                },
              },
              {
                key: "viewNamesGroup",
                value: function (a) {
                  var o = this,
                    s = this.props.views,
                    i = this.props.view;
                  if (s.length > 1)
                    return s.map(function (l) {
                      return d.createElement(
                        "button",
                        {
                          type: "button",
                          key: l,
                          className: (0, fe.A)({ "rbc-active": i === l }),
                          onClick: o.view.bind(null, l),
                        },
                        a[l],
                      );
                    });
                },
              },
            ]),
            r
          );
        })(d.Component);
        function If(e, t) {
          var r = null;
          return (
            typeof t == "function"
              ? (r = t(e))
              : typeof t == "string" &&
                (0, te.A)(e) === "object" &&
                e != null &&
                t in e &&
                (r = e[t]),
            r
          );
        }
        var He = function (t) {
            return function (r) {
              return If(r, t);
            };
          },
          Bf = ["view", "date", "getNow", "onNavigate"],
          Hf = [
            "view",
            "toolbar",
            "events",
            "backgroundEvents",
            "style",
            "className",
            "elementProps",
            "date",
            "getNow",
            "length",
            "showMultiDayTimes",
            "onShowMore",
            "doShowMoreDrillDown",
            "components",
            "formats",
            "messages",
            "culture",
          ];
        function Qa(e) {
          if (Array.isArray(e)) return e;
          for (var t = [], r = 0, n = Object.entries(e); r < n.length; r++) {
            var a = (0, V.A)(n[r], 2),
              o = a[0],
              s = a[1];
            s && t.push(o);
          }
          return t;
        }
        function Uf(e, t) {
          var r = t.views,
            n = Qa(r);
          return n.indexOf(e) !== -1;
        }
        var qa = (function (e) {
          (0, K.A)(r, e);
          var t = (0, ee.A)(r);
          function r() {
            var n;
            (0, B.A)(this, r);
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
              o[s] = arguments[s];
            return (
              (n = t.call.apply(t, [this].concat(o))),
              (n.getViews = function () {
                var i = n.props.views;
                return Array.isArray(i)
                  ? Ou(
                      i,
                      function (l, c) {
                        return (l[c] = dr[c]);
                      },
                      {},
                    )
                  : (0, te.A)(i) === "object"
                    ? Cu(i, function (l, c) {
                        return l === !0 ? dr[c] : l;
                      })
                    : dr;
              }),
              (n.getView = function () {
                var i = n.getViews();
                return i[n.props.view];
              }),
              (n.getDrilldownView = function (i) {
                var l = n.props,
                  c = l.view,
                  u = l.drilldownView,
                  f = l.getDrilldownView;
                return f ? f(i, c, Object.keys(n.getViews())) : u;
              }),
              (n.handleRangeChange = function (i, l, c) {
                var u = n.props,
                  f = u.onRangeChange,
                  v = u.localizer;
                f && l.range && f(l.range(i, { localizer: v }), c);
              }),
              (n.handleNavigate = function (i, l) {
                var c = n.props,
                  u = c.view,
                  f = c.date,
                  v = c.getNow,
                  m = c.onNavigate,
                  g = (0, Z.A)(c, Bf),
                  h = n.getView(),
                  y = v();
                (f = zf(
                  h,
                  (0, Y.A)(
                    (0, Y.A)({}, g),
                    {},
                    { action: i, date: l || f || y, today: y },
                  ),
                )),
                  m(f, u, i),
                  n.handleRangeChange(f, h);
              }),
              (n.handleViewChange = function (i) {
                i !== n.props.view && Uf(i, n.props) && n.props.onView(i);
                var l = n.getViews();
                n.handleRangeChange(n.props.date || n.props.getNow(), l[i], i);
              }),
              (n.handleSelectEvent = function () {
                for (
                  var i = arguments.length, l = new Array(i), c = 0;
                  c < i;
                  c++
                )
                  l[c] = arguments[c];
                ie(n.props.onSelectEvent, l);
              }),
              (n.handleDoubleClickEvent = function () {
                for (
                  var i = arguments.length, l = new Array(i), c = 0;
                  c < i;
                  c++
                )
                  l[c] = arguments[c];
                ie(n.props.onDoubleClickEvent, l);
              }),
              (n.handleKeyPressEvent = function () {
                for (
                  var i = arguments.length, l = new Array(i), c = 0;
                  c < i;
                  c++
                )
                  l[c] = arguments[c];
                ie(n.props.onKeyPressEvent, l);
              }),
              (n.handleSelectSlot = function (i) {
                ie(n.props.onSelectSlot, i);
              }),
              (n.handleDrillDown = function (i, l) {
                var c = n.props.onDrillDown;
                if (c) {
                  c(i, l, n.drilldownView);
                  return;
                }
                l && n.handleViewChange(l), n.handleNavigate(we.DATE, i);
              }),
              (n.state = { context: r.getContext(n.props) }),
              n
            );
          }
          return (
            (0, U.A)(
              r,
              [
                {
                  key: "render",
                  value: function () {
                    var a = this.props,
                      o = a.view,
                      s = a.toolbar,
                      i = a.events,
                      l = a.backgroundEvents,
                      c = a.style,
                      u = a.className,
                      f = a.elementProps,
                      v = a.date,
                      m = a.getNow,
                      g = a.length,
                      h = a.showMultiDayTimes,
                      y = a.onShowMore,
                      D = a.doShowMoreDrillDown;
                    a.components, a.formats, a.messages, a.culture;
                    var E = (0, Z.A)(a, Hf);
                    v = v || m();
                    var M = this.getView(),
                      S = this.state.context,
                      O = S.accessors,
                      x = S.components,
                      F = S.getters,
                      $ = S.localizer,
                      W = S.viewNames,
                      N = x.toolbar || Wf,
                      I = M.title(v, { localizer: $, length: g });
                    return d.createElement(
                      "div",
                      Object.assign({}, f, {
                        className: (0, fe.A)(
                          u,
                          "rbc-calendar",
                          E.rtl && "rbc-rtl",
                        ),
                        style: c,
                      }),
                      s &&
                        d.createElement(N, {
                          date: v,
                          view: o,
                          views: W,
                          label: I,
                          onView: this.handleViewChange,
                          onNavigate: this.handleNavigate,
                          localizer: $,
                        }),
                      d.createElement(
                        M,
                        Object.assign({}, E, {
                          events: i,
                          backgroundEvents: l,
                          date: v,
                          getNow: m,
                          length: g,
                          localizer: $,
                          getters: F,
                          components: x,
                          accessors: O,
                          showMultiDayTimes: h,
                          getDrilldownView: this.getDrilldownView,
                          onNavigate: this.handleNavigate,
                          onDrillDown: this.handleDrillDown,
                          onSelectEvent: this.handleSelectEvent,
                          onDoubleClickEvent: this.handleDoubleClickEvent,
                          onKeyPressEvent: this.handleKeyPressEvent,
                          onSelectSlot: this.handleSelectSlot,
                          onShowMore: y,
                          doShowMoreDrillDown: D,
                        }),
                      ),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (a) {
                    return { context: r.getContext(a) };
                  },
                },
                {
                  key: "getContext",
                  value: function (a) {
                    var o = a.startAccessor,
                      s = a.endAccessor,
                      i = a.allDayAccessor,
                      l = a.tooltipAccessor,
                      c = a.titleAccessor,
                      u = a.resourceAccessor,
                      f = a.resourceIdAccessor,
                      v = a.resourceTitleAccessor,
                      m = a.eventPropGetter,
                      g = a.backgroundEventPropGetter,
                      h = a.slotPropGetter,
                      y = a.slotGroupPropGetter,
                      D = a.dayPropGetter,
                      E = a.view,
                      M = a.views,
                      S = a.localizer,
                      O = a.culture,
                      x = a.messages,
                      F = x === void 0 ? {} : x,
                      $ = a.components,
                      W = $ === void 0 ? {} : $,
                      N = a.formats,
                      I = N === void 0 ? {} : N,
                      z = Qa(M),
                      j = Ku(F);
                    return {
                      viewNames: z,
                      localizer: ju(S, O, I, j),
                      getters: {
                        eventProp: function () {
                          return (m && m.apply(void 0, arguments)) || {};
                        },
                        backgroundEventProp: function () {
                          return (g && g.apply(void 0, arguments)) || {};
                        },
                        slotProp: function () {
                          return (h && h.apply(void 0, arguments)) || {};
                        },
                        slotGroupProp: function () {
                          return (y && y.apply(void 0, arguments)) || {};
                        },
                        dayProp: function () {
                          return (D && D.apply(void 0, arguments)) || {};
                        },
                      },
                      components: Du(W[E] || {}, gu(W, z), {
                        eventWrapper: Me,
                        backgroundEventWrapper: Me,
                        eventContainerWrapper: Me,
                        dateCellWrapper: Me,
                        weekWrapper: Me,
                        timeSlotWrapper: Me,
                        timeGutterWrapper: Me,
                      }),
                      accessors: {
                        start: He(o),
                        end: He(s),
                        allDay: He(i),
                        tooltip: He(l),
                        title: He(c),
                        resource: He(u),
                        resourceId: He(f),
                        resourceTitle: He(v),
                      },
                    };
                  },
                },
              ],
            ),
            r
          );
        })(d.Component);
        qa.defaultProps = {
          events: [],
          backgroundEvents: [],
          elementProps: {},
          popup: !1,
          toolbar: !0,
          view: pe.MONTH,
          views: [pe.MONTH, pe.WEEK, pe.DAY, pe.AGENDA],
          step: 30,
          length: 30,
          allDayMaxRows: 1 / 0,
          doShowMoreDrillDown: !0,
          drilldownView: pe.DAY,
          titleAccessor: "title",
          tooltipAccessor: "title",
          allDayAccessor: "allDay",
          startAccessor: "start",
          endAccessor: "end",
          resourceAccessor: "resourceId",
          resourceIdAccessor: "id",
          resourceTitleAccessor: "title",
          longPressThreshold: 250,
          getNow: function () {
            return new Date();
          },
          dayLayoutAlgorithm: "overlap",
        };
        var Yf = on(qa, {
            view: "onView",
            date: "onNavigate",
            selected: "onSelectEvent",
          }),
          jf = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return (
              n.format(a, "MMMM DD", r) +
              " \u2013 " +
              n.format(o, n.eq(a, o, "month") ? "DD" : "MMMM DD", r)
            );
          },
          Vf = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return n.format(a, "L", r) + " \u2013 " + n.format(o, "L", r);
          },
          _r = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return n.format(a, "LT", r) + " \u2013 " + n.format(o, "LT", r);
          },
          Kf = function (t, r, n) {
            var a = t.start;
            return n.format(a, "LT", r) + " \u2013 ";
          },
          _f = function (t, r, n) {
            var a = t.end;
            return " \u2013 " + n.format(a, "LT", r);
          },
          Gf = {
            dateFormat: "DD",
            dayFormat: "DD ddd",
            weekdayFormat: "ddd",
            selectRangeFormat: _r,
            eventTimeRangeFormat: _r,
            eventTimeRangeStartFormat: Kf,
            eventTimeRangeEndFormat: _f,
            timeGutterFormat: "LT",
            monthHeaderFormat: "MMMM YYYY",
            dayHeaderFormat: "dddd MMM DD",
            dayRangeHeaderFormat: jf,
            agendaHeaderFormat: Vf,
            agendaDateFormat: "ddd MMM DD",
            agendaTimeFormat: "LT",
            agendaTimeRangeFormat: _r,
          };
        function Ue(e) {
          var t = e && e.toLowerCase();
          return t === "FullYear" ? (t = "year") : t || (t = void 0), t;
        }
        function Xf(e) {
          var t = function (w, A) {
            return A ? w.locale(A) : w;
          };
          function r(k) {
            return e(k).toDate().getTimezoneOffset();
          }
          function n(k, w) {
            var A,
              T,
              p = e(k).local(),
              b = e(w).local();
            if (!e.tz)
              return (
                p.toDate().getTimezoneOffset() - b.toDate().getTimezoneOffset()
              );
            var C =
                (A =
                  p == null || (T = p._z) === null || T === void 0
                    ? void 0
                    : T.name) !== null && A !== void 0
                  ? A
                  : e.tz.guess(),
              P = e.tz.zone(C).utcOffset(+p),
              H = e.tz.zone(C).utcOffset(+b);
            return P - H;
          }
          function a(k) {
            var w = e(k).startOf("day");
            return n(w, k);
          }
          function o(k, w, A) {
            var T = Ue(A),
              p = T ? e(k).startOf(T) : e(k),
              b = T ? e(w).startOf(T) : e(w);
            return [p, b, T];
          }
          function s() {
            var k =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : null,
              w = arguments.length > 1 ? arguments[1] : void 0,
              A = Ue(w);
            return A ? e(k).startOf(A).toDate() : e(k).toDate();
          }
          function i() {
            var k =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : null,
              w = arguments.length > 1 ? arguments[1] : void 0,
              A = Ue(w);
            return A ? e(k).endOf(A).toDate() : e(k).toDate();
          }
          function l(k, w, A) {
            var T = o(k, w, A),
              p = (0, V.A)(T, 3),
              b = p[0],
              C = p[1],
              P = p[2];
            return b.isSame(C, P);
          }
          function c(k, w, A) {
            return !l(k, w, A);
          }
          function u(k, w, A) {
            var T = o(k, w, A),
              p = (0, V.A)(T, 3),
              b = p[0],
              C = p[1],
              P = p[2];
            return b.isAfter(C, P);
          }
          function f(k, w, A) {
            var T = o(k, w, A),
              p = (0, V.A)(T, 3),
              b = p[0],
              C = p[1],
              P = p[2];
            return b.isBefore(C, P);
          }
          function v(k, w, A) {
            var T = o(k, w, A),
              p = (0, V.A)(T, 3),
              b = p[0],
              C = p[1],
              P = p[2];
            return b.isSameOrBefore(C, P);
          }
          function m(k, w, A) {
            var T = o(k, w, A),
              p = (0, V.A)(T, 3),
              b = p[0],
              C = p[1],
              P = p[2];
            return b.isSameOrBefore(C, P);
          }
          function g(k, w, A) {
            var T =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : "day",
              p = Ue(T),
              b = e(k),
              C = e(w),
              P = e(A);
            return b.isBetween(C, P, p, "[]");
          }
          function h(k, w) {
            var A = e(k),
              T = e(w),
              p = e.min(A, T);
            return p.toDate();
          }
          function y(k, w) {
            var A = e(k),
              T = e(w),
              p = e.max(A, T);
            return p.toDate();
          }
          function D(k, w) {
            if (!k && !w) return null;
            var A = e(w).format("HH:mm:ss"),
              T = e(k).startOf("day").format("MM/DD/YYYY");
            return e(
              "".concat(T, " ").concat(A),
              "MM/DD/YYYY HH:mm:ss",
            ).toDate();
          }
          function E(k, w, A) {
            var T = Ue(A);
            return e(k).add(w, T).toDate();
          }
          function M(k, w) {
            for (
              var A =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : "day",
                T = Ue(A),
                p = e(k).toDate(),
                b = [];
              m(p, w);
            )
              b.push(p), (p = E(p, 1, T));
            return b;
          }
          function S(k, w) {
            var A = Ue(w),
              T = s(k, A);
            return l(T, k) ? T : E(T, 1, A);
          }
          function O(k, w) {
            var A =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : "day",
              T = Ue(A),
              p = e(k),
              b = e(w);
            return b.diff(p, T);
          }
          function x(k) {
            var w = e(k);
            return w.minutes();
          }
          function F(k) {
            var w = k ? e.localeData(k) : e.localeData();
            return w ? w.firstDayOfWeek() : 0;
          }
          function $(k) {
            return e(k).startOf("month").startOf("week").toDate();
          }
          function W(k) {
            return e(k).endOf("month").endOf("week").toDate();
          }
          function N(k) {
            for (var w = $(k), A = W(k), T = []; m(w, A); )
              T.push(w), (w = E(w, 1, "d"));
            return T;
          }
          function I(k, w, A) {
            return e(k)
              .startOf("day")
              .minute(w + A)
              .toDate();
          }
          function z(k, w) {
            return O(k, w, "minutes");
          }
          function j(k) {
            var w = e(k).startOf("day"),
              A = e(k);
            return A.diff(w, "minutes") + a(k);
          }
          function G(k, w) {
            var A = e(k),
              T = e(w);
            return A.isBefore(T, "day");
          }
          function Q(k, w, A) {
            var T = e(w),
              p = e(A);
            return T.isSameOrAfter(p, "minutes");
          }
          function J(k) {
            var w = k.evtA,
              A = w.start,
              T = w.end,
              p = w.allDay,
              b = k.evtB,
              C = b.start,
              P = b.end,
              H = b.allDay,
              X = +s(A, "day") - +s(C, "day"),
              re = O(A, S(T, "day"), "day"),
              ve = O(C, S(P, "day"), "day");
            return (
              X ||
              Math.max(ve, 1) - Math.max(re, 1) ||
              !!H - !!p ||
              +A - +C ||
              +T - +P
            );
          }
          function q(k) {
            var w = k.event,
              A = w.start,
              T = w.end,
              p = k.range,
              b = p.start,
              C = p.end,
              P = e(A).startOf("day"),
              H = e(T),
              X = e(b),
              re = e(C),
              ve = P.isSameOrBefore(re, "day"),
              Oe = !P.isSame(H, "minutes"),
              $e = Oe ? H.isAfter(X, "minutes") : H.isSameOrAfter(X, "minutes");
            return ve && $e;
          }
          function oe(k, w) {
            var A = e(k),
              T = e(w);
            return A.isSame(T, "day");
          }
          function de() {
            var k = new Date(),
              w = /-/.test(k.toString()) ? "-" : "",
              A = k.getTimezoneOffset(),
              T = Number("".concat(w).concat(Math.abs(A))),
              p = e().utcOffset();
            return p > T ? 1 : 0;
          }
          return new ht({
            formats: Gf,
            firstOfWeek: F,
            firstVisibleDay: $,
            lastVisibleDay: W,
            visibleDays: N,
            format: function (w, A, T) {
              return t(e(w), T).format(A);
            },
            lt: f,
            lte: m,
            gt: u,
            gte: v,
            eq: l,
            neq: c,
            merge: D,
            inRange: g,
            startOf: s,
            endOf: i,
            range: M,
            add: E,
            diff: O,
            ceil: S,
            min: h,
            max: y,
            minutes: x,
            getSlotDate: I,
            getTimezoneOffset: r,
            getDstOffset: n,
            getTotalMin: z,
            getMinutesFromMidnight: j,
            continuesPrior: G,
            continuesAfter: Q,
            sortEvents: J,
            inEventRange: q,
            isSameDate: oe,
            browserTZOffset: de,
          });
        }
        function Jf(e) {
          return /s$/.test(e) ? e : e + "s";
        }
        var Zf = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return (
              n.format(a, "MMMM dd", r) +
              " \u2013 " +
              n.format(o, n.eq(a, o, "month") ? "dd" : "MMMM dd", r)
            );
          },
          Qf = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return n.format(a, "D", r) + " \u2013 " + n.format(o, "D", r);
          },
          Gr = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return n.format(a, "t", r) + " \u2013 " + n.format(o, "t", r);
          },
          qf = function (t, r, n) {
            var a = t.start;
            return n.format(a, "t", r) + " \u2013 ";
          },
          ed = function (t, r, n) {
            var a = t.end;
            return " \u2013 " + n.format(a, "t", r);
          },
          td = {
            dateFormat: "dd",
            dayFormat: "dd EEE",
            weekdayFormat: "EEE",
            selectRangeFormat: Gr,
            eventTimeRangeFormat: Gr,
            eventTimeRangeStartFormat: qf,
            eventTimeRangeEndFormat: ed,
            timeGutterFormat: "t",
            monthHeaderFormat: "MMMM yyyy",
            dayHeaderFormat: "EEEE MMM dd",
            dayRangeHeaderFormat: Zf,
            agendaHeaderFormat: Qf,
            agendaDateFormat: "EEE MMM dd",
            agendaTimeFormat: "t",
            agendaTimeRangeFormat: Gr,
          };
        function Ye(e) {
          var t = e && Jf(e.toLowerCase());
          return t === "FullYear" ? (t = "year") : t || (t = void 0), t;
        }
        function zd(e) {
          var t =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            r = t.firstDayOfWeek,
            n = r === void 0 ? 7 : r;
          function a(p, b) {
            return e.fromJSDate(p).toFormat(b);
          }
          function o(p, b, C) {
            return e.fromJSDate(p).setLocale(b).toFormat(C);
          }
          function s(p, b, C) {
            var P = Ye(C),
              H = P ? e.fromJSDate(p).startOf(P) : e.fromJSDate(p),
              X = P ? e.fromJSDate(b).startOf(P) : e.fromJSDate(b);
            return [H, X, P];
          }
          function i(p) {
            var b = p.weekday;
            if (b === n) return p.startOf("day");
            if (n === 1) return p.startOf("week");
            var C = n === 7 ? b : b + (7 - n);
            return p.minus({ day: C }).startOf("day");
          }
          function l(p) {
            var b = p.weekday,
              C = n === 1 ? 7 : n - 1;
            if (b === C) return p.endOf("day");
            if (n === 1) return p.endOf("week");
            var P = n > C ? p.plus({ day: n - C }) : p;
            return P.set({ weekday: C }).endOf("day");
          }
          function c() {
            var p =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Date(),
              b = arguments.length > 1 ? arguments[1] : void 0,
              C = Ye(b);
            if (C) {
              var P = e.fromJSDate(p);
              return C.includes("week") ? i(P) : P.startOf(C);
            }
            return e.fromJSDate(p);
          }
          function u() {
            return n;
          }
          function f() {
            var p =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Date(),
              b = arguments.length > 1 ? arguments[1] : void 0;
            return c(p, b).toJSDate();
          }
          function v() {
            var p =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Date(),
              b = arguments.length > 1 ? arguments[1] : void 0,
              C = Ye(b);
            if (C) {
              var P = e.fromJSDate(p);
              return C.includes("week") ? l(P) : P.endOf(C);
            }
            return e.fromJSDate(p);
          }
          function m() {
            var p =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Date(),
              b = arguments.length > 1 ? arguments[1] : void 0;
            return v(p, b).toJSDate();
          }
          function g(p, b, C) {
            var P = s(p, b, C),
              H = _slicedToArray(P, 2),
              X = H[0],
              re = H[1];
            return +X == +re;
          }
          function h(p, b, C) {
            return !g(p, b, C);
          }
          function y(p, b, C) {
            var P = s(p, b, C),
              H = _slicedToArray(P, 2),
              X = H[0],
              re = H[1];
            return +X > +re;
          }
          function D(p, b, C) {
            var P = s(p, b, C),
              H = _slicedToArray(P, 2),
              X = H[0],
              re = H[1];
            return +X < +re;
          }
          function E(p, b, C) {
            var P = s(p, b, C),
              H = _slicedToArray(P, 2),
              X = H[0],
              re = H[1];
            return +X >= +re;
          }
          function M(p, b, C) {
            var P = s(p, b, C),
              H = _slicedToArray(P, 2),
              X = H[0],
              re = H[1];
            return +X <= +re;
          }
          function S(p, b, C) {
            var P =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : "day",
              H = Ye(P),
              X = c(p, H),
              re = c(b, H),
              ve = c(C, H);
            return +X >= +re && +X <= +ve;
          }
          function O(p, b) {
            var C = e.fromJSDate(p),
              P = e.fromJSDate(b),
              H = e.min(C, P);
            return H.toJSDate();
          }
          function x(p, b) {
            var C = e.fromJSDate(p),
              P = e.fromJSDate(b),
              H = e.max(C, P);
            return H.toJSDate();
          }
          function F(p, b) {
            if (!p && !b) return null;
            var C = e.fromJSDate(b),
              P = c(p, "day");
            return P.set({
              hour: C.hour,
              minute: C.minute,
              second: C.second,
              millisecond: C.millisecond,
            }).toJSDate();
          }
          function $(p, b, C) {
            var P = Ye(C);
            return e
              .fromJSDate(p)
              .plus(_defineProperty({}, P, b))
              .toJSDate();
          }
          function W(p, b) {
            for (
              var C =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : "day",
                P = Ye(C),
                H = e.fromJSDate(p).toJSDate(),
                X = [];
              M(H, b);
            )
              X.push(H), (H = $(H, 1, P));
            return X;
          }
          function N(p, b) {
            var C = Ye(b),
              P = f(p, C);
            return g(P, p) ? P : $(P, 1, C);
          }
          function I(p, b) {
            var C =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : "day",
              P = Ye(C),
              H = e.fromJSDate(p),
              X = e.fromJSDate(b);
            return Math.floor(
              X.diff(H, P, { conversionAccuracy: "longterm" }).toObject()[P],
            );
          }
          function z(p) {
            var b = c(p, "month");
            return i(b).toJSDate();
          }
          function j(p) {
            var b = v(p, "month");
            return l(b).toJSDate();
          }
          function G(p) {
            for (var b = z(p), C = j(p), P = []; M(b, C); )
              P.push(b), (b = $(b, 1, "day"));
            return P;
          }
          function Q(p, b, C) {
            return c(p, "day")
              .set({ minutes: b + C })
              .toJSDate();
          }
          function J(p, b) {
            return I(p, b, "minutes");
          }
          function q(p) {
            var b = c(p, "day"),
              C = e.fromJSDate(p);
            return Math.round(
              C.diff(b, "minutes", {
                conversionAccuracy: "longterm",
              }).toObject().minutes,
            );
          }
          function oe(p, b) {
            return D(p, b);
          }
          function de(p, b, C) {
            return E(b, C);
          }
          function k(p) {
            var b = p.evtA,
              C = b.start,
              P = b.end,
              H = b.allDay,
              X = p.evtB,
              re = X.start,
              ve = X.end,
              Oe = X.allDay,
              $e = +f(C, "day") - +f(re, "day"),
              at = I(C, N(P, "day"), "day"),
              qr = I(re, N(ve, "day"), "day");
            return (
              $e ||
              Math.max(qr, 1) - Math.max(at, 1) ||
              !!Oe - !!H ||
              +C - +re ||
              +P - +ve
            );
          }
          function w(p) {
            var b = p.event,
              C = b.start,
              P = b.end,
              H = p.range,
              X = H.start,
              re = H.end,
              ve = f(C, "day"),
              Oe = M(ve, re, "day"),
              $e = h(ve, P, "minutes"),
              at = $e ? y(P, X, "minutes") : E(P, X, "minutes");
            return Oe && at;
          }
          function A(p, b) {
            var C = e.fromJSDate(p),
              P = e.fromJSDate(b);
            return C.hasSame(P, "day");
          }
          function T() {
            var p = new Date(),
              b = /-/.test(p.toString()) ? "-" : "",
              C = p.getTimezoneOffset(),
              P = Number("".concat(b).concat(Math.abs(C))),
              H = e.local().offset;
            return H > P ? 1 : 0;
          }
          return new ht({
            format: function (b, C, P) {
              return P ? o(b, P, C) : a(b, C);
            },
            formats: td,
            firstOfWeek: u,
            firstVisibleDay: z,
            lastVisibleDay: j,
            visibleDays: G,
            lt: D,
            lte: M,
            gt: y,
            gte: E,
            eq: g,
            neq: h,
            merge: F,
            inRange: S,
            startOf: f,
            endOf: m,
            range: W,
            add: $,
            diff: I,
            ceil: N,
            min: O,
            max: x,
            getSlotDate: Q,
            getTotalMin: J,
            getMinutesFromMidnight: q,
            continuesPrior: oe,
            continuesAfter: de,
            sortEvents: k,
            inEventRange: w,
            isSameDate: A,
            browserTZOffset: T,
          });
        }
        var rd = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return n.format(a, "d", r) + " \u2013 " + n.format(o, "d", r);
          },
          Xr = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return n.format(a, "t", r) + " \u2013 " + n.format(o, "t", r);
          },
          nd = function (t, r, n) {
            var a = t.start;
            return n.format(a, "t", r) + " \u2013 ";
          },
          ad = function (t, r, n) {
            var a = t.end;
            return " \u2013 " + n.format(a, "t", r);
          },
          od = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return (
              n.format(a, "MMM dd", r) +
              " \u2013 " +
              n.format(o, Je(a, o, "month") ? "dd" : "MMM dd", r)
            );
          },
          id = {
            dateFormat: "dd",
            dayFormat: "ddd dd/MM",
            weekdayFormat: "ddd",
            selectRangeFormat: Xr,
            eventTimeRangeFormat: Xr,
            eventTimeRangeStartFormat: nd,
            eventTimeRangeEndFormat: ad,
            timeGutterFormat: "t",
            monthHeaderFormat: "Y",
            dayHeaderFormat: "dddd MMM dd",
            dayRangeHeaderFormat: od,
            agendaHeaderFormat: rd,
            agendaDateFormat: "ddd MMM dd",
            agendaTimeFormat: "t",
            agendaTimeRangeFormat: Xr,
          };
        function sd(e) {
          function t(n) {
            return n ? e.findClosestCulture(n) : e.culture();
          }
          function r(n) {
            return (n = t(n)), (n && n.calendar.firstDay) || 0;
          }
          return new ht({
            firstOfWeek: r,
            formats: id,
            format: function (a, o, s) {
              return e.format(a, o, s);
            },
          });
        }
        var ld = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return (
              n.format(a, { date: "short" }, r) +
              " \u2013 " +
              n.format(o, { date: "short" }, r)
            );
          },
          Jr = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return (
              n.format(a, { time: "short" }, r) +
              " \u2013 " +
              n.format(o, { time: "short" }, r)
            );
          },
          cd = function (t, r, n) {
            var a = t.start;
            return n.format(a, { time: "short" }, r) + " \u2013 ";
          },
          ud = function (t, r, n) {
            var a = t.end;
            return " \u2013 " + n.format(a, { time: "short" }, r);
          },
          fd = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return (
              n.format(a, "MMM dd", r) +
              " \u2013 " +
              n.format(o, Je(a, o, "month") ? "dd" : "MMM dd", r)
            );
          },
          dd = {
            dateFormat: "dd",
            dayFormat: "eee dd/MM",
            weekdayFormat: "eee",
            selectRangeFormat: Jr,
            eventTimeRangeFormat: Jr,
            eventTimeRangeStartFormat: cd,
            eventTimeRangeEndFormat: ud,
            timeGutterFormat: { time: "short" },
            monthHeaderFormat: "MMMM yyyy",
            dayHeaderFormat: "eeee MMM dd",
            dayRangeHeaderFormat: fd,
            agendaHeaderFormat: ld,
            agendaDateFormat: "eee MMM dd",
            agendaTimeFormat: { time: "short" },
            agendaTimeRangeFormat: Jr,
          };
        function Wd(e) {
          var t = function (a) {
            return a ? e(a) : e;
          };
          function r(n) {
            try {
              var a = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
                o = t(n).cldr,
                s = o.attributes.territory,
                i = o.get("supplemental").weekData,
                l = i.firstDay[s || "001"];
              return a.indexOf(l);
            } catch {
              var c = new Date(),
                u = Math.max(
                  parseInt(t(n).formatDate(c, { raw: "e" }), 10) - 1,
                  0,
                );
              return Math.abs(c.getDay() - u);
            }
          }
          return e.load
            ? new ht({
                firstOfWeek: r,
                formats: dd,
                format: function (a, o, s) {
                  return (
                    (o = typeof o == "string" ? { raw: o } : o),
                    t(s).formatDate(a, o)
                  );
                },
              })
            : sd(e);
        }
        var vd = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return ""
              .concat(n.format(a, "P", r), " \u2013 ")
              .concat(n.format(o, "P", r));
          },
          Zr = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return ""
              .concat(n.format(a, "p", r), " \u2013 ")
              .concat(n.format(o, "p", r));
          },
          md = function (t, r, n) {
            var a = t.start;
            return "".concat(n.format(a, "h:mma", r), " \u2013 ");
          },
          pd = function (t, r, n) {
            var a = t.end;
            return " \u2013 ".concat(n.format(a, "h:mma", r));
          },
          hd = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return ""
              .concat(n.format(a, "MMMM dd", r), " \u2013 ")
              .concat(n.format(o, Je(a, o, "month") ? "dd" : "MMMM dd", r));
          },
          gd = {
            dateFormat: "dd",
            dayFormat: "dd eee",
            weekdayFormat: "cccc",
            selectRangeFormat: Zr,
            eventTimeRangeFormat: Zr,
            eventTimeRangeStartFormat: md,
            eventTimeRangeEndFormat: pd,
            timeGutterFormat: "p",
            monthHeaderFormat: "MMMM yyyy",
            dayHeaderFormat: "cccc MMM dd",
            dayRangeHeaderFormat: hd,
            agendaHeaderFormat: vd,
            agendaDateFormat: "ccc MMM dd",
            agendaTimeFormat: "p",
            agendaTimeRangeFormat: Zr,
          },
          Id = function (t) {
            var r = t.startOfWeek,
              n = t.getDay,
              a = t.format,
              o = t.locales;
            return new ht({
              formats: gd,
              firstOfWeek: function (i) {
                return n(r(new Date(), { locale: o[i] }));
              },
              format: function (i, l, c) {
                return a(new Date(i), l, { locale: o[c] });
              },
            });
          },
          yd = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return (
              n.format(a, "MMMM DD", r) +
              " \u2013 " +
              n.format(o, n.eq(a, o, "month") ? "DD" : "MMMM DD", r)
            );
          },
          wd = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return n.format(a, "L", r) + " \u2013 " + n.format(o, "L", r);
          },
          Qr = function (t, r, n) {
            var a = t.start,
              o = t.end;
            return n.format(a, "LT", r) + " \u2013 " + n.format(o, "LT", r);
          },
          bd = function (t, r, n) {
            var a = t.start;
            return n.format(a, "LT", r) + " \u2013 ";
          },
          Dd = function (t, r, n) {
            var a = t.end;
            return " \u2013 " + n.format(a, "LT", r);
          },
          Ad = {
            dateFormat: "DD",
            dayFormat: "DD ddd",
            weekdayFormat: "ddd",
            selectRangeFormat: Qr,
            eventTimeRangeFormat: Qr,
            eventTimeRangeStartFormat: bd,
            eventTimeRangeEndFormat: Dd,
            timeGutterFormat: "LT",
            monthHeaderFormat: "MMMM YYYY",
            dayHeaderFormat: "dddd MMM DD",
            dayRangeHeaderFormat: yd,
            agendaHeaderFormat: wd,
            agendaDateFormat: "ddd MMM DD",
            agendaTimeFormat: "LT",
            agendaTimeRangeFormat: Qr,
          };
        function je(e) {
          var t = e && e.toLowerCase();
          return t === "FullYear" ? (t = "year") : t || (t = void 0), t;
        }
        function Bd(e) {
          e.extend(isBetween),
            e.extend(isSameOrAfter),
            e.extend(isSameOrBefore),
            e.extend(localeData),
            e.extend(localizedFormat),
            e.extend(minMax),
            e.extend(utc);
          var t = function (A, T) {
              return T ? A.locale(T) : A;
            },
            r = e.tz ? e.tz : e;
          function n(w) {
            return r(w).toDate().getTimezoneOffset();
          }
          function a(w, A) {
            var T,
              p = r(w),
              b = r(A);
            if (!r.tz)
              return (
                p.toDate().getTimezoneOffset() - b.toDate().getTimezoneOffset()
              );
            var C =
                (T = p.tz().$x.$timezone) !== null && T !== void 0
                  ? T
                  : e.tz.guess(),
              P = -r.tz(+p, C).utcOffset(),
              H = -r.tz(+b, C).utcOffset();
            return P - H;
          }
          function o(w) {
            var A = r(w).startOf("day");
            return a(A, w);
          }
          function s(w, A, T) {
            var p = je(T),
              b = p ? r(w).startOf(p) : r(w),
              C = p ? r(A).startOf(p) : r(A);
            return [b, C, p];
          }
          function i() {
            var w =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : null,
              A = arguments.length > 1 ? arguments[1] : void 0,
              T = je(A);
            return T ? r(w).startOf(T).toDate() : r(w).toDate();
          }
          function l() {
            var w =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : null,
              A = arguments.length > 1 ? arguments[1] : void 0,
              T = je(A);
            return T ? r(w).endOf(T).toDate() : r(w).toDate();
          }
          function c(w, A, T) {
            var p = s(w, A, T),
              b = _slicedToArray(p, 3),
              C = b[0],
              P = b[1],
              H = b[2];
            return C.isSame(P, H);
          }
          function u(w, A, T) {
            return !c(w, A, T);
          }
          function f(w, A, T) {
            var p = s(w, A, T),
              b = _slicedToArray(p, 3),
              C = b[0],
              P = b[1],
              H = b[2];
            return C.isAfter(P, H);
          }
          function v(w, A, T) {
            var p = s(w, A, T),
              b = _slicedToArray(p, 3),
              C = b[0],
              P = b[1],
              H = b[2];
            return C.isBefore(P, H);
          }
          function m(w, A, T) {
            var p = s(w, A, T),
              b = _slicedToArray(p, 3),
              C = b[0],
              P = b[1],
              H = b[2];
            return C.isSameOrBefore(P, H);
          }
          function g(w, A, T) {
            var p = s(w, A, T),
              b = _slicedToArray(p, 3),
              C = b[0],
              P = b[1],
              H = b[2];
            return C.isSameOrBefore(P, H);
          }
          function h(w, A, T) {
            var p =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : "day",
              b = je(p),
              C = r(w),
              P = r(A),
              H = r(T);
            return C.isBetween(P, H, b, "[]");
          }
          function y(w, A) {
            var T = r(w),
              p = r(A),
              b = e.min(T, p);
            return b.toDate();
          }
          function D(w, A) {
            var T = r(w),
              p = r(A),
              b = e.max(T, p);
            return b.toDate();
          }
          function E(w, A) {
            if (!w && !A) return null;
            var T = r(A).format("HH:mm:ss"),
              p = r(w).startOf("day").format("MM/DD/YYYY");
            return e(
              "".concat(p, " ").concat(T),
              "MM/DD/YYYY HH:mm:ss",
            ).toDate();
          }
          function M(w, A, T) {
            var p = je(T);
            return r(w).add(A, p).toDate();
          }
          function S(w, A) {
            for (
              var T =
                  arguments.length > 2 && arguments[2] !== void 0
                    ? arguments[2]
                    : "day",
                p = je(T),
                b = r(w).toDate(),
                C = [];
              g(b, A);
            )
              C.push(b), (b = M(b, 1, p));
            return C;
          }
          function O(w, A) {
            var T = je(A),
              p = i(w, T);
            return c(p, w) ? p : M(p, 1, T);
          }
          function x(w, A) {
            var T =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : "day",
              p = je(T),
              b = r(w),
              C = r(A);
            return C.diff(b, p);
          }
          function F(w) {
            var A = r(w);
            return A.minutes();
          }
          function $(w) {
            var A = w ? e.localeData(w) : e.localeData();
            return A ? A.firstDayOfWeek() : 0;
          }
          function W(w) {
            return r(w).startOf("month").startOf("week").toDate();
          }
          function N(w) {
            return r(w).endOf("month").endOf("week").toDate();
          }
          function I(w) {
            for (var A = W(w), T = N(w), p = []; g(A, T); )
              p.push(A), (A = M(A, 1, "d"));
            return p;
          }
          function z(w, A, T) {
            return r(w)
              .startOf("day")
              .minute(A + T)
              .toDate();
          }
          function j(w, A) {
            return x(w, A, "minutes");
          }
          function G(w) {
            var A = r(w).startOf("day"),
              T = r(w);
            return T.diff(A, "minutes") + o(w);
          }
          function Q(w, A) {
            var T = r(w),
              p = r(A);
            return T.isBefore(p, "day");
          }
          function J(w, A, T) {
            var p = r(A),
              b = r(T);
            return p.isSameOrAfter(b, "minutes");
          }
          function q(w) {
            var A = w.evtA,
              T = A.start,
              p = A.end,
              b = A.allDay,
              C = w.evtB,
              P = C.start,
              H = C.end,
              X = C.allDay,
              re = +i(T, "day") - +i(P, "day"),
              ve = x(T, O(p, "day"), "day"),
              Oe = x(P, O(H, "day"), "day");
            return (
              re ||
              Math.max(Oe, 1) - Math.max(ve, 1) ||
              !!X - !!b ||
              +T - +P ||
              +p - +H
            );
          }
          function oe(w) {
            var A = w.event,
              T = A.start,
              p = A.end,
              b = w.range,
              C = b.start,
              P = b.end,
              H = r(T).startOf("day"),
              X = r(p),
              re = r(C),
              ve = r(P),
              Oe = H.isSameOrBefore(ve, "day"),
              $e = !H.isSame(X, "minutes"),
              at = $e
                ? X.isAfter(re, "minutes")
                : X.isSameOrAfter(re, "minutes");
            return Oe && at;
          }
          function de(w, A) {
            var T = r(w),
              p = r(A);
            return T.isSame(p, "day");
          }
          function k() {
            var w = new Date(),
              A = /-/.test(w.toString()) ? "-" : "",
              T = w.getTimezoneOffset(),
              p = Number("".concat(A).concat(Math.abs(T))),
              b = r().utcOffset();
            return b > p ? 1 : 0;
          }
          return new ht({
            formats: Ad,
            firstOfWeek: $,
            firstVisibleDay: W,
            lastVisibleDay: N,
            visibleDays: I,
            format: function (A, T, p) {
              return t(r(A), p).format(T);
            },
            lt: v,
            lte: g,
            gt: f,
            gte: m,
            eq: c,
            neq: u,
            merge: E,
            inRange: h,
            startOf: i,
            endOf: l,
            range: S,
            add: M,
            diff: x,
            ceil: O,
            min: y,
            max: D,
            minutes: F,
            getSlotDate: z,
            getTimezoneOffset: n,
            getDstOffset: a,
            getTotalMin: j,
            getMinutesFromMidnight: G,
            continuesPrior: Q,
            continuesAfter: J,
            sortEvents: q,
            inEventRange: oe,
            isSameDate: de,
            browserTZOffset: k,
          });
        }
        var Hd = { eventWrapper: Me, timeSlotWrapper: Me, dateCellWrapper: Me };
      },
      67501: (le) => {
        "use strict";
        var ne = !1,
          R = function () {};
        if (ne) {
          var Y = function (te, B) {
            var U = arguments.length;
            B = new Array(U > 1 ? U - 1 : 0);
            for (var K = 1; K < U; K++) B[K - 1] = arguments[K];
            var ee = 0,
              V =
                "Warning: " +
                te.replace(/%s/g, function () {
                  return B[ee++];
                });
            typeof console < "u" && console.error(V);
            try {
              throw new Error(V);
            } catch {}
          };
          R = function (Z, te, B) {
            var U = arguments.length;
            B = new Array(U > 2 ? U - 2 : 0);
            for (var K = 2; K < U; K++) B[K - 2] = arguments[K];
            if (te === void 0)
              throw new Error(
                "`warning(condition, format, ...args)` requires a warning message argument",
              );
            Z || Y.apply(null, [te].concat(B));
          };
        }
        le.exports = R;
      },
    },
  ]);
})();
