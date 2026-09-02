/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [10400],
    {
      65731: (dn, Fe, ve) => {
        ve.d(Fe, {
          Ap: () => rn,
          CC: () => xt,
          Yc: () => V,
          Yw: () => x,
          _X: () => kt,
          cL: () => Ie,
          gi: () => vt,
          q7: () => Gt,
        });
        var d = ve(90626);
        function ye(n, i) {
          var s = Object.keys(n);
          if (Object.getOwnPropertySymbols) {
            var e = Object.getOwnPropertySymbols(n);
            i &&
              (e = e.filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })),
              s.push.apply(s, e);
          }
          return s;
        }
        function q(n) {
          for (var i = 1; i < arguments.length; i++) {
            var s = arguments[i] != null ? arguments[i] : {};
            i % 2
              ? ye(Object(s), !0).forEach(function (e) {
                  m(n, e, s[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    n,
                    Object.getOwnPropertyDescriptors(s),
                  )
                : ye(Object(s)).forEach(function (e) {
                    Object.defineProperty(
                      n,
                      e,
                      Object.getOwnPropertyDescriptor(s, e),
                    );
                  });
          }
          return n;
        }
        function O(n, i) {
          if (!(n instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function ke(n, i) {
          for (var s = 0; s < i.length; s++) {
            var e = i[s];
            (e.enumerable = e.enumerable || !1),
              (e.configurable = !0),
              "value" in e && (e.writable = !0),
              Object.defineProperty(n, e.key, e);
          }
        }
        function _(n, i, s) {
          return (
            i && ke(n.prototype, i),
            s && ke(n, s),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            n
          );
        }
        function m(n, i, s) {
          return (
            i in n
              ? Object.defineProperty(n, i, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (n[i] = s),
            n
          );
        }
        function f() {
          return (f = Object.assign
            ? Object.assign.bind()
            : function (n) {
                for (var i = 1; i < arguments.length; i++) {
                  var s = arguments[i];
                  for (var e in s)
                    Object.prototype.hasOwnProperty.call(s, e) && (n[e] = s[e]);
                }
                return n;
              }).apply(this, arguments);
        }
        function w(n, i) {
          if (typeof i != "function" && i !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (n.prototype = Object.create(i && i.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            i && Oe(n, i);
        }
        function le(n) {
          return (le = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (i) {
                return i.__proto__ || Object.getPrototypeOf(i);
              })(n);
        }
        function Oe(n, i) {
          return (Oe = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (s, e) {
                return (s.__proto__ = e), s;
              })(n, i);
        }
        function We() {
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
        function He(n, i) {
          if (n == null) return {};
          var s,
            e,
            t = {},
            a = Object.keys(n);
          for (e = 0; e < a.length; e++)
            (s = a[e]), i.indexOf(s) >= 0 || (t[s] = n[s]);
          return t;
        }
        function k(n, i) {
          if (n == null) return {};
          var s,
            e,
            t = He(n, i);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(n);
            for (e = 0; e < a.length; e++)
              (s = a[e]),
                i.indexOf(s) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(n, s) &&
                    (t[s] = n[s]));
          }
          return t;
        }
        function p(n) {
          if (n === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return n;
        }
        function $e(n, i) {
          if (i && (typeof i == "object" || typeof i == "function")) return i;
          if (i !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return p(n);
        }
        function C(n) {
          var i = We();
          return function () {
            var s,
              e = le(n);
            if (i) {
              var t = le(this).constructor;
              s = Reflect.construct(e, arguments, t);
            } else s = e.apply(this, arguments);
            return $e(this, s);
          };
        }
        function ce(n) {
          return Ue(n) || Ye(n) || Ze(n) || Ve();
        }
        function Ue(n) {
          if (Array.isArray(n)) return ue(n);
        }
        function Ye(n) {
          if (
            (typeof Symbol < "u" && n[Symbol.iterator] != null) ||
            n["@@iterator"] != null
          )
            return Array.from(n);
        }
        function Ze(n, i) {
          if (n) {
            if (typeof n == "string") return ue(n, i);
            var s = Object.prototype.toString.call(n).slice(8, -1);
            return (
              s === "Object" && n.constructor && (s = n.constructor.name),
              s === "Map" || s === "Set"
                ? Array.from(n)
                : s === "Arguments" ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                  ? ue(n, i)
                  : void 0
            );
          }
        }
        function ue(n, i) {
          (i == null || i > n.length) && (i = n.length);
          for (var s = 0, e = new Array(i); s < i; s++) e[s] = n[s];
          return e;
        }
        function Ve() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function _e(n, i) {
          return (i = { exports: {} }), n(i, i.exports), i.exports;
        }
        function Te() {}
        function Ee() {}
        function g(n) {
          return n
            .map(function (i) {
              return i === !1 ? null : i;
            })
            .join(" ")
            .replace(/\s+/g, " ")
            .trim();
        }
        function we(n, i) {
          return ((100 / n) * i) / i;
        }
        function Ce(n, i) {
          return (100 * n) / i;
        }
        function P(n) {
          return "".concat(n, "%");
        }
        function $(n, i, s) {
          if (n === i) return !0;
          var e = N[pe(n)],
            t = N[pe(i)];
          return !(!e || e !== t) && e(n, i, s);
        }
        function Me(n) {
          return function (i, s, e) {
            if (!e) return n(i, s, []);
            for (var t, a = e.length; (t = e[--a]); )
              if (t[0] === i && t[1] === s) return !0;
            return n(i, s, e);
          };
        }
        function Xe(n, i, s) {
          var e = n.length;
          if (e !== i.length) return !1;
          for (s.push([n, i]); e--; ) if (!$(n[e], i[e], s)) return !1;
          return !0;
        }
        function Ke(n, i, s) {
          if (typeof n.equal == "function")
            return s.push([n, i]), n.equal(i, s);
          var e = Pe(n),
            t = Pe(i),
            a = e.length;
          if (a !== t.length) return !1;
          for (e.sort(), t.sort(); a--; ) if (e[a] !== t[a]) return !1;
          for (s.push([n, i]), a = e.length; a--; ) {
            var o = e[a];
            if (!$(n[o], i[o], s)) return !1;
          }
          return !0;
        }
        function Pe(n) {
          var i = [];
          for (var s in n) s !== "constructor" && i.push(s);
          return i;
        }
        function Ge(n) {
          return !!n && typeof n == "object";
        }
        function Qe(n) {
          var i = Object.prototype.toString.call(n);
          return i === "[object RegExp]" || i === "[object Date]" || Je(n);
        }
        function Je(n) {
          return n.$$typeof === St;
        }
        function et(n) {
          return Array.isArray(n) ? [] : {};
        }
        function W(n, i) {
          return i.clone !== !1 && i.isMergeableObject(n) ? z(et(n), n, i) : n;
        }
        function tt(n, i, s) {
          return n.concat(i).map(function (e) {
            return W(e, s);
          });
        }
        function nt(n, i) {
          if (!i.customMerge) return z;
          var s = i.customMerge(n);
          return typeof s == "function" ? s : z;
        }
        function it(n) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(n).filter(function (i) {
                return Object.propertyIsEnumerable.call(n, i);
              })
            : [];
        }
        function Ne(n) {
          return Object.keys(n).concat(it(n));
        }
        function xe(n, i) {
          try {
            return i in n;
          } catch {
            return !1;
          }
        }
        function rt(n, i) {
          return (
            xe(n, i) &&
            !(
              Object.hasOwnProperty.call(n, i) &&
              Object.propertyIsEnumerable.call(n, i)
            )
          );
        }
        function st(n, i, s) {
          var e = {};
          return (
            s.isMergeableObject(n) &&
              Ne(n).forEach(function (t) {
                e[t] = W(n[t], s);
              }),
            Ne(i).forEach(function (t) {
              rt(n, t) ||
                (xe(n, t) && s.isMergeableObject(i[t])
                  ? (e[t] = nt(t, s)(n[t], i[t], s))
                  : (e[t] = W(i[t], s)));
            }),
            e
          );
        }
        function z(n, i, s) {
          ((s = s || {}).arrayMerge = s.arrayMerge || tt),
            (s.isMergeableObject = s.isMergeableObject || ht),
            (s.cloneUnlessOtherwiseSpecified = W);
          var e = Array.isArray(i);
          return e === Array.isArray(n)
            ? e
              ? s.arrayMerge(n, i, s)
              : st(n, i, s)
            : W(i, s);
        }
        function x(n) {
          var i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : function () {
                    return {};
                  },
            s = (function (e) {
              function t(o, l) {
                var c;
                return (
                  O(this, t),
                  (c = a.call(this, o, l)),
                  (c.state = i(q({}, l.state))),
                  (c.updateStateProps = c.updateStateProps.bind(p(c))),
                  c
                );
              }
              w(t, e);
              var a = C(t);
              return (
                _(t, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      this.context.subscribe(this.updateStateProps);
                    },
                  },
                  {
                    key: "shouldComponentUpdate",
                    value: function (o, l) {
                      return !Ae(l, this.state) || !Ae(o, this.props);
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.context.unsubscribe(this.updateStateProps);
                    },
                  },
                  {
                    key: "updateStateProps",
                    value: function () {
                      this.setState(i(q({}, this.context.state)));
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var o = this,
                        l = this.props,
                        c = l.children,
                        u = k(l, yt),
                        b = Z(this.state, u, Y);
                      return d.createElement(
                        n,
                        f(
                          {
                            ref: function (h) {
                              o.instance = h;
                            },
                          },
                          b,
                          {
                            carouselStore: {
                              getStoreState: this.context.getStoreState,
                              masterSpinnerError:
                                this.context.masterSpinnerError,
                              masterSpinnerSuccess:
                                this.context.masterSpinnerSuccess,
                              setStoreState: this.context.setStoreState,
                              subscribeMasterSpinner:
                                this.context.subscribeMasterSpinner,
                              unsubscribeAllMasterSpinner:
                                this.context.unsubscribeAllMasterSpinner,
                              unsubscribeMasterSpinner:
                                this.context.unsubscribeMasterSpinner,
                            },
                          },
                        ),
                        c,
                      );
                    },
                  },
                ]),
                t
              );
            })(d.Component);
          return (
            m(s, "contextType", V),
            m(s, "propTypes", { children: T.children }),
            m(s, "defaultProps", { children: null }),
            s
          );
        }
        var at = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
          ot = at;
        Ee.resetWarningCache = Te;
        var lt = function () {
            function n(e, t, a, o, l, c) {
              if (c !== ot) {
                var u = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((u.name = "Invariant Violation"), u);
              }
            }
            function i() {
              return n;
            }
            n.isRequired = n;
            var s = {
              array: n,
              bigint: n,
              bool: n,
              func: n,
              number: n,
              object: n,
              string: n,
              symbol: n,
              any: n,
              arrayOf: i,
              element: n,
              elementType: n,
              instanceOf: i,
              node: n,
              objectOf: i,
              oneOf: i,
              oneOfType: i,
              shape: i,
              exact: i,
              checkPropTypes: Ee,
              resetWarningCache: Te,
            };
            return (s.PropTypes = s), s;
          },
          r = _e(function (n) {
            n.exports = lt();
          }),
          de = "loading",
          De = "success",
          je = "error",
          T = {
            children: r.oneOfType([r.arrayOf(r.node), r.node]),
            direction: r.oneOf(["forward", "backward"]),
            height: function (n, i) {
              var s = n[i];
              return n.orientation !== "vertical" ||
                (s !== null && typeof s == "number")
                ? null
                : new Error(
                    "Missing required property '".concat(
                      i,
                      "' when orientation is vertical.  You must supply a number representing the height in pixels",
                    ),
                  );
            },
            orientation: r.oneOf(["horizontal", "vertical"]),
            isBgImage: function (n, i) {
              return n[i] === !0 && n.tag === "img"
                ? new Error(
                    "HTML img elements should not have a backgroundImage.  Please use ".concat(
                      i,
                      " for other block-level HTML tags, like div, a, section, etc...",
                    ),
                  )
                : null;
            },
          },
          U = function (n) {
            var i = n.min,
              s = n.max,
              e = n.x;
            return Math.min(s, Math.max(i, e));
          },
          ct = function (n, i) {
            return i;
          },
          Y = {
            arrayMerge: ct,
            clone: !1,
            customMerge: function (n) {
              if (
                n === "$$typeof" ||
                n === "_owner" ||
                n === "_store" ||
                n === "ref" ||
                n === "key"
              )
                return function (i, s) {
                  return s;
                };
            },
          },
          ut = { buttonBack: "buttonBack___1mlaL" },
          dt = [
            "carouselStore",
            "className",
            "currentSlide",
            "disabled",
            "onClick",
            "step",
            "totalSlides",
            "visibleSlides",
            "infinite",
          ],
          he = (function (n) {
            function i(e) {
              var t;
              return (
                O(this, i),
                (t = s.call(this, e)),
                (t.handleOnClick = t.handleOnClick.bind(p(t))),
                t
              );
            }
            w(i, n);
            var s = C(i);
            return (
              _(
                i,
                [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props,
                        a = t.carouselStore,
                        o = t.currentSlide,
                        l = t.onClick,
                        c = t.step,
                        u = t.infinite,
                        b = t.visibleSlides,
                        h = t.totalSlides - b,
                        S = Math.max(o - c, 0);
                      u && (S = o === 0 ? h : S),
                        a.setStoreState(
                          { currentSlide: S, isPlaying: !1 },
                          l !== null && l.call(this, e),
                        );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = (e.carouselStore, e.className),
                        a =
                          (e.currentSlide,
                          e.disabled,
                          e.onClick,
                          e.step,
                          e.totalSlides,
                          e.visibleSlides,
                          e.infinite),
                        o = k(e, dt),
                        l = g([ut.buttonBack, "carousel__back-button", t]),
                        c = i.setDisabled(
                          this.props.disabled,
                          this.props.currentSlide,
                          a,
                        );
                      return d.createElement(
                        "button",
                        f(
                          {
                            type: "button",
                            "aria-label": "previous",
                            className: l,
                            onClick: this.handleOnClick,
                            disabled: c,
                          },
                          o,
                        ),
                        this.props.children,
                      );
                    },
                  },
                ],
                [
                  {
                    key: "setDisabled",
                    value: function (e, t, a) {
                      return e !== null ? e : t === 0 && !a;
                    },
                  },
                ],
              ),
              i
            );
          })(d.Component);
        m(he, "propTypes", {
          carouselStore: r.object.isRequired,
          children: T.children.isRequired,
          className: r.string,
          currentSlide: r.number.isRequired,
          disabled: r.bool,
          onClick: r.func,
          step: r.number.isRequired,
          totalSlides: r.number.isRequired,
          visibleSlides: r.number.isRequired,
          infinite: r.bool,
        }),
          m(he, "defaultProps", {
            className: null,
            disabled: null,
            onClick: null,
            infinite: !1,
          });
        var pe = _e(function (n, i) {
            var s = {}.toString,
              e = typeof window < "u" ? window.Node : Function;
            n.exports = i = function (a) {
              var o = typeof a;
              if (o != "object") return o;
              if (((o = t[s.call(a)]), o == "object"))
                return a instanceof Map
                  ? "map"
                  : a instanceof Set
                    ? "set"
                    : "object";
              if (o) return o;
              if (a instanceof e)
                switch (a.nodeType) {
                  case 1:
                    return "element";
                  case 3:
                    return "text-node";
                  case 9:
                    return "document";
                  case 11:
                    return "document-fragment";
                  default:
                    return "dom-node";
                }
            };
            var t = (i.types = {
              "[object Function]": "function",
              "[object Date]": "date",
              "[object RegExp]": "regexp",
              "[object Arguments]": "arguments",
              "[object Array]": "array",
              "[object Set]": "set",
              "[object String]": "string",
              "[object Null]": "null",
              "[object Undefined]": "undefined",
              "[object Number]": "number",
              "[object Boolean]": "boolean",
              "[object Object]": "object",
              "[object Map]": "map",
              "[object Text]": "text-node",
              "[object Uint8Array]": "bit-array",
              "[object Uint16Array]": "bit-array",
              "[object Uint32Array]": "bit-array",
              "[object Uint8ClampedArray]": "bit-array",
              "[object Error]": "error",
              "[object FormData]": "form-data",
              "[object File]": "file",
              "[object Blob]": "blob",
            });
          }),
          hn = pe.types,
          N = {};
        (N.number = function (n, i) {
          return n !== n && i !== i;
        }),
          (N.function = function (n, i, s) {
            return (
              n.toString() === i.toString() &&
              N.object(n, i, s) &&
              $(n.prototype, i.prototype)
            );
          }),
          (N.date = function (n, i) {
            return +n == +i;
          }),
          (N.regexp = function (n, i) {
            return n.toString() === i.toString();
          }),
          (N.element = function (n, i) {
            return n.outerHTML === i.outerHTML;
          }),
          (N.textnode = function (n, i) {
            return n.textContent === i.textContent;
          }),
          (N.arguments = N["bit-array"] = N.array = Me(Xe)),
          (N.object = Me(Ke));
        var Ae = $,
          ht = function (n) {
            return Ge(n) && !Qe(n);
          },
          pt = typeof Symbol == "function" && Symbol.for,
          St = pt ? Symbol.for("react.element") : 60103;
        z.all = function (n, i) {
          if (!Array.isArray(n))
            throw new Error("first argument should be an array");
          return n.reduce(function (s, e) {
            return z(s, e, i);
          }, {});
        };
        var bt = z,
          Z = bt,
          V = d.createContext(),
          Re = function n(i) {
            return (
              Object.freeze(i),
              Object.getOwnPropertyNames(i).forEach(function (s) {
                !i.hasOwnProperty(s) ||
                  i[s] === null ||
                  (typeof i[s] != "object" && typeof i[s] != "function") ||
                  Object.isFrozen(i[s]) ||
                  n(i[s]);
              }),
              i
            );
          },
          mt = { masterSpinnerFinished: !1 },
          ft = (function () {
            function n(i) {
              O(this, n),
                (this.state = Re(Z(mt, i, Y))),
                (this.subscriptions = []),
                (this.masterSpinnerSubscriptions = {}),
                (this.setStoreState = this.setStoreState.bind(this)),
                (this.getStoreState = this.getStoreState.bind(this)),
                (this.subscribe = this.subscribe.bind(this)),
                (this.unsubscribe = this.unsubscribe.bind(this)),
                (this.updateSubscribers = this.updateSubscribers.bind(this)),
                (this.subscribeMasterSpinner =
                  this.subscribeMasterSpinner.bind(this)),
                (this.unsubscribeMasterSpinner =
                  this.unsubscribeMasterSpinner.bind(this)),
                (this.unsubscribeAllMasterSpinner =
                  this.unsubscribeAllMasterSpinner.bind(this)),
                (this.masterSpinnerSuccess =
                  this.masterSpinnerSuccess.bind(this)),
                (this.masterSpinnerError = this.masterSpinnerError.bind(this));
            }
            return (
              _(n, [
                {
                  key: "setStoreState",
                  value: function (i, s) {
                    (this.state = Re(Z(this.state, i, Y))),
                      this.updateSubscribers(s);
                  },
                },
                {
                  key: "getStoreState",
                  value: function () {
                    return Z({}, this.state, Y);
                  },
                },
                {
                  key: "subscribe",
                  value: function (i) {
                    this.subscriptions.push(i);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (i) {
                    var s = this.subscriptions.indexOf(i);
                    s !== -1 && this.subscriptions.splice(s, 1);
                  },
                },
                {
                  key: "updateSubscribers",
                  value: function (i) {
                    this.subscriptions.forEach(function (s) {
                      return s();
                    }),
                      typeof i == "function" && i(this.getStoreState());
                  },
                },
                {
                  key: "subscribeMasterSpinner",
                  value: function (i) {
                    Object.keys(this.masterSpinnerSubscriptions).indexOf(i) ===
                      -1 &&
                      (this.masterSpinnerSubscriptions[i] = {
                        success: !1,
                        error: !1,
                        complete: !1,
                      });
                  },
                },
                {
                  key: "unsubscribeMasterSpinner",
                  value: function (i) {
                    return (
                      Object.keys(this.masterSpinnerSubscriptions).indexOf(
                        i,
                      ) !== -1 &&
                      (this.setMasterSpinnerFinished(),
                      delete this.masterSpinnerSubscriptions[i])
                    );
                  },
                },
                {
                  key: "unsubscribeAllMasterSpinner",
                  value: function () {
                    (this.masterSpinnerSubscriptions = {}),
                      this.setMasterSpinnerFinished();
                  },
                },
                {
                  key: "masterSpinnerSuccess",
                  value: function (i) {
                    (this.masterSpinnerSubscriptions[i].success = !0),
                      (this.masterSpinnerSubscriptions[i].complete = !0),
                      this.setMasterSpinnerFinished();
                  },
                },
                {
                  key: "masterSpinnerError",
                  value: function (i) {
                    (this.masterSpinnerSubscriptions[i].error = !0),
                      (this.masterSpinnerSubscriptions[i].complete = !0),
                      this.setMasterSpinnerFinished();
                  },
                },
                {
                  key: "setMasterSpinnerFinished",
                  value: function () {
                    this.setStoreState({
                      masterSpinnerFinished: this.isMasterSpinnerFinished(),
                    });
                  },
                },
                {
                  key: "isMasterSpinnerFinished",
                  value: function () {
                    var i = this;
                    return (
                      Object.keys(this.masterSpinnerSubscriptions).filter(
                        function (s) {
                          return (
                            i.masterSpinnerSubscriptions[s].complete !== !0
                          );
                        },
                      ).length === 0
                    );
                  },
                },
              ]),
              n
            );
          })(),
          gt = [
            "children",
            "className",
            "currentSlide",
            "disableAnimation",
            "disableKeyboard",
            "hasMasterSpinner",
            "interval",
            "isPageScrollLocked",
            "isPlaying",
            "lockOnWindowScroll",
            "naturalSlideHeight",
            "naturalSlideWidth",
            "orientation",
            "playDirection",
            "step",
            "dragStep",
            "tag",
            "totalSlides",
            "touchEnabled",
            "dragEnabled",
            "visibleSlides",
            "infinite",
            "isIntrinsicHeight",
          ],
          X,
          vt =
            ((X = (function (n) {
              function i(e) {
                var t;
                if (
                  (O(this, i),
                  (t = s.call(this, e)),
                  e.isIntrinsicHeight && e.orientation !== "horizontal")
                )
                  throw Error(
                    'isIntrinsicHeight can only be used in "horizontal" orientation. See Readme for more information.',
                  );
                var a = {
                  currentSlide: e.currentSlide,
                  disableAnimation: e.disableAnimation,
                  disableKeyboard: e.disableKeyboard,
                  hasMasterSpinner: e.hasMasterSpinner,
                  imageErrorCount: 0,
                  imageSuccessCount: 0,
                  interval: e.interval,
                  isPageScrollLocked: e.isPageScrollLocked,
                  isPlaying: e.isPlaying,
                  lockOnWindowScroll: e.lockOnWindowScroll,
                  masterSpinnerThreshold: 0,
                  naturalSlideHeight: e.naturalSlideHeight,
                  naturalSlideWidth: e.naturalSlideWidth,
                  orientation: e.orientation,
                  playDirection: e.playDirection,
                  privateUnDisableAnimation: !1,
                  slideSize: we(e.totalSlides, e.visibleSlides),
                  slideTraySize: Ce(e.totalSlides, e.visibleSlides),
                  step: e.step,
                  dragStep: e.dragStep,
                  totalSlides: e.totalSlides,
                  touchEnabled: e.touchEnabled,
                  dragEnabled: e.dragEnabled,
                  visibleSlides: e.visibleSlides,
                  infinite: e.infinite,
                  isIntrinsicHeight: e.isIntrinsicHeight,
                };
                return (t.carouselStore = new ft(a)), t;
              }
              w(i, n);
              var s = C(i);
              return (
                _(i, [
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      var t = this,
                        a = {};
                      [
                        "currentSlide",
                        "disableAnimation",
                        "disableKeyboard",
                        "hasMasterSpinner",
                        "interval",
                        "isPlaying",
                        "naturalSlideHeight",
                        "naturalSlideWidth",
                        "lockOnWindowScroll",
                        "orientation",
                        "playDirection",
                        "step",
                        "dragStep",
                        "totalSlides",
                        "touchEnabled",
                        "dragEnabled",
                        "visibleSlides",
                      ].forEach(function (o) {
                        e[o] !== t.props[o] && (a[o] = t.props[o]);
                      }),
                        this.props.currentSlide !== e.currentSlide &&
                          !this.props.disableAnimation &&
                          ((a.disableAnimation = !0),
                          (a.privateUnDisableAnimation = !0)),
                        (this.props.totalSlides === e.totalSlides &&
                          this.props.visibleSlides === e.visibleSlides) ||
                          ((a.slideSize = we(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          )),
                          (a.slideTraySize = Ce(
                            this.props.totalSlides,
                            this.props.visibleSlides,
                          ))),
                        this.carouselStore.state.currentSlide >=
                          this.props.totalSlides &&
                          (a.currentSlide = Math.max(
                            this.props.totalSlides - 1,
                            0,
                          )),
                        Object.keys(a).length > 0 &&
                          this.carouselStore.setStoreState(a);
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.carouselStore.unsubscribeAllMasterSpinner();
                    },
                  },
                  {
                    key: "getStore",
                    value: function () {
                      return this.carouselStore;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t =
                          (e.children,
                          e.className,
                          e.currentSlide,
                          e.disableAnimation,
                          e.disableKeyboard,
                          e.hasMasterSpinner,
                          e.interval,
                          e.isPageScrollLocked,
                          e.isPlaying,
                          e.lockOnWindowScroll,
                          e.naturalSlideHeight,
                          e.naturalSlideWidth,
                          e.orientation,
                          e.playDirection,
                          e.step,
                          e.dragStep,
                          e.tag),
                        a =
                          (e.totalSlides,
                          e.touchEnabled,
                          e.dragEnabled,
                          e.visibleSlides,
                          e.infinite,
                          e.isIntrinsicHeight,
                          k(e, gt)),
                        o = g(["carousel", this.props.className]);
                      return d.createElement(
                        t,
                        f({ className: o }, a),
                        d.createElement(
                          V.Provider,
                          { value: this.carouselStore },
                          this.props.children,
                        ),
                      );
                    },
                  },
                ]),
                i
              );
            })(d.Component)),
            m(X, "propTypes", {
              children: T.children.isRequired,
              className: r.string,
              currentSlide: r.number,
              disableAnimation: r.bool,
              disableKeyboard: r.bool,
              hasMasterSpinner: r.bool,
              interval: r.number,
              isPageScrollLocked: r.bool,
              isPlaying: r.bool,
              lockOnWindowScroll: r.bool,
              naturalSlideHeight: r.number.isRequired,
              naturalSlideWidth: r.number.isRequired,
              orientation: T.orientation,
              playDirection: T.direction,
              step: r.number,
              dragStep: r.number,
              tag: r.string,
              totalSlides: r.number.isRequired,
              touchEnabled: r.bool,
              dragEnabled: r.bool,
              visibleSlides: r.number,
              infinite: r.bool,
              isIntrinsicHeight: r.bool,
            }),
            m(X, "defaultProps", {
              className: null,
              currentSlide: 0,
              disableAnimation: !1,
              disableKeyboard: !1,
              hasMasterSpinner: !1,
              interval: 5e3,
              isPageScrollLocked: !1,
              isPlaying: !1,
              lockOnWindowScroll: !1,
              orientation: "horizontal",
              playDirection: "forward",
              step: 1,
              dragStep: 1,
              tag: "div",
              touchEnabled: !0,
              dragEnabled: !0,
              visibleSlides: 1,
              infinite: !1,
              isIntrinsicHeight: !1,
            }),
            X);
        V.Consumer;
        var yt = ["children"],
          kt = x(he, function (n) {
            return {
              currentSlide: n.currentSlide,
              step: n.step,
              totalSlides: n.totalSlides,
              visibleSlides: n.visibleSlides,
              infinite: n.infinite,
            };
          }),
          Ot = { buttonFirst: "buttonFirst___2rhFr" },
          _t = [
            "carouselStore",
            "className",
            "currentSlide",
            "disabled",
            "onClick",
            "totalSlides",
          ],
          K,
          Tt =
            ((K = (function (n) {
              function i() {
                var e;
                return (
                  O(this, i),
                  (e = s.call(this)),
                  (e.handleOnClick = e.handleOnClick.bind(p(e))),
                  e
                );
              }
              w(i, n);
              var s = C(i);
              return (
                _(i, [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props,
                        a = t.carouselStore,
                        o = t.onClick;
                      a.setStoreState(
                        { currentSlide: 0, isPlaying: !1 },
                        o !== null && o.call(this, e),
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = (e.carouselStore, e.className),
                        a = e.currentSlide,
                        o = e.disabled,
                        l = (e.onClick, e.totalSlides, k(e, _t)),
                        c = g([Ot.buttonFirst, "carousel__first-button", t]),
                        u = o !== null ? o : a === 0;
                      return d.createElement(
                        "button",
                        f(
                          {
                            type: "button",
                            "aria-label": "first",
                            className: c,
                            onClick: this.handleOnClick,
                            disabled: u,
                          },
                          l,
                        ),
                        this.props.children,
                      );
                    },
                  },
                ]),
                i
              );
            })(d.Component)),
            m(K, "propTypes", {
              carouselStore: r.object.isRequired,
              children: T.children.isRequired,
              className: r.string,
              currentSlide: r.number.isRequired,
              disabled: r.bool,
              onClick: r.func,
              totalSlides: r.number.isRequired,
            }),
            m(K, "defaultProps", {
              className: null,
              disabled: null,
              onClick: null,
            }),
            K),
          pn = x(Tt, function (n) {
            return { currentSlide: n.currentSlide, totalSlides: n.totalSlides };
          }),
          Et = { buttonLast: "buttonLast___2yuh0" },
          wt = [
            "carouselStore",
            "className",
            "currentSlide",
            "disabled",
            "onClick",
            "totalSlides",
            "visibleSlides",
          ],
          G,
          Ct =
            ((G = (function (n) {
              function i() {
                var e;
                return (
                  O(this, i),
                  (e = s.call(this)),
                  (e.handleOnClick = e.handleOnClick.bind(p(e))),
                  e
                );
              }
              w(i, n);
              var s = C(i);
              return (
                _(i, [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props,
                        a = t.carouselStore,
                        o = t.onClick,
                        l = t.totalSlides,
                        c = t.visibleSlides;
                      a.setStoreState(
                        { currentSlide: l - c, isPlaying: !1 },
                        o !== null && o.call(this, e),
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = (e.carouselStore, e.className),
                        a = e.currentSlide,
                        o = e.disabled,
                        l = (e.onClick, e.totalSlides),
                        c = e.visibleSlides,
                        u = k(e, wt),
                        b = g([Et.buttonLast, "carousel__last-button", t]),
                        h = o !== null ? o : a >= l - c;
                      return d.createElement(
                        "button",
                        f(
                          {
                            type: "button",
                            "aria-label": "last",
                            className: b,
                            onClick: this.handleOnClick,
                            disabled: h,
                          },
                          u,
                        ),
                        this.props.children,
                      );
                    },
                  },
                ]),
                i
              );
            })(d.Component)),
            m(G, "propTypes", {
              carouselStore: r.object.isRequired,
              children: T.children.isRequired,
              className: r.string,
              currentSlide: r.number.isRequired,
              disabled: r.bool,
              onClick: r.func,
              totalSlides: r.number.isRequired,
              visibleSlides: r.number.isRequired,
            }),
            m(G, "defaultProps", {
              className: null,
              disabled: null,
              onClick: null,
            }),
            G),
          Sn = x(Ct, function (n) {
            return {
              currentSlide: n.currentSlide,
              totalSlides: n.totalSlides,
              visibleSlides: n.visibleSlides,
            };
          }),
          Mt = { buttonNext: "buttonNext___2mOCa" },
          Pt = [
            "carouselStore",
            "className",
            "currentSlide",
            "disabled",
            "onClick",
            "step",
            "totalSlides",
            "visibleSlides",
            "infinite",
          ],
          Q,
          Nt =
            ((Q = (function (n) {
              function i(e) {
                var t;
                return (
                  O(this, i),
                  (t = s.call(this, e)),
                  (t.handleOnClick = t.handleOnClick.bind(p(t))),
                  t
                );
              }
              w(i, n);
              var s = C(i);
              return (
                _(
                  i,
                  [
                    {
                      key: "handleOnClick",
                      value: function (e) {
                        var t = this.props,
                          a = t.currentSlide,
                          o = t.onClick,
                          l = t.step,
                          c = t.carouselStore,
                          u = t.infinite,
                          b = t.totalSlides - t.visibleSlides,
                          h = l + a,
                          S = Math.min(h, b);
                        u && (S = b === a ? 0 : S),
                          c.setStoreState(
                            { currentSlide: S, isPlaying: !1 },
                            o !== null && o.call(this, e),
                          );
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.props,
                          t = (e.carouselStore, e.className),
                          a = e.currentSlide,
                          o = e.disabled,
                          l = (e.onClick, e.step, e.totalSlides),
                          c = e.visibleSlides,
                          u = e.infinite,
                          b = k(e, Pt),
                          h = g([Mt.buttonNext, "carousel__next-button", t]),
                          S = i.setDisabled(o, a, c, l, u);
                        return d.createElement(
                          "button",
                          f(
                            {
                              type: "button",
                              "aria-label": "next",
                              className: h,
                              onClick: this.handleOnClick,
                              disabled: S,
                            },
                            b,
                          ),
                          this.props.children,
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "setDisabled",
                      value: function (e, t, a, o, l) {
                        return e !== null ? e : t >= o - a && !l;
                      },
                    },
                  ],
                ),
                i
              );
            })(d.PureComponent)),
            m(Q, "propTypes", {
              carouselStore: r.object.isRequired,
              children: T.children.isRequired,
              className: r.string,
              currentSlide: r.number.isRequired,
              disabled: r.bool,
              onClick: r.func,
              step: r.number.isRequired,
              totalSlides: r.number.isRequired,
              visibleSlides: r.number.isRequired,
              infinite: r.bool,
            }),
            m(Q, "defaultProps", {
              className: null,
              disabled: null,
              onClick: null,
              infinite: !1,
            }),
            Q),
          xt = x(Nt, function (n) {
            return {
              currentSlide: n.currentSlide,
              step: n.step,
              totalSlides: n.totalSlides,
              visibleSlides: n.visibleSlides,
              infinite: n.infinite,
            };
          }),
          Dt = { buttonNext: "buttonNext___3Lm3s" },
          jt = [
            "carouselStore",
            "children",
            "childrenPaused",
            "childrenPlaying",
            "className",
            "isPlaying",
            "onClick",
          ],
          J,
          At =
            ((J = (function (n) {
              function i(e) {
                var t;
                return (
                  O(this, i),
                  (t = s.call(this, e)),
                  (t.handleOnClick = t.handleOnClick.bind(p(t))),
                  t
                );
              }
              w(i, n);
              var s = C(i);
              return (
                _(i, [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props.onClick;
                      this.props.carouselStore.setStoreState(
                        { isPlaying: !this.props.isPlaying },
                        t !== null && t.call(this, e),
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = (e.carouselStore, e.children, e.childrenPaused),
                        a = e.childrenPlaying,
                        o = e.className,
                        l = e.isPlaying,
                        c = (e.onClick, k(e, jt)),
                        u = g([Dt.buttonNext, "carousel__play-button", o]);
                      return d.createElement(
                        "button",
                        f(
                          {
                            type: "button",
                            "aria-label": "play",
                            className: u,
                            onClick: this.handleOnClick,
                          },
                          c,
                        ),
                        l && a,
                        !l && t,
                        this.props.children,
                      );
                    },
                  },
                ]),
                i
              );
            })(d.PureComponent)),
            m(J, "propTypes", {
              carouselStore: r.object.isRequired,
              children: r.node,
              childrenPaused: r.node,
              childrenPlaying: r.node,
              className: r.string,
              isPlaying: r.bool.isRequired,
              onClick: r.func,
            }),
            m(J, "defaultProps", {
              children: null,
              childrenPaused: null,
              childrenPlaying: null,
              className: null,
              onClick: null,
            }),
            J),
          bn = x(At, function (n) {
            return { isPlaying: n.isPlaying };
          }),
          Le = { dot: "dot___3c3SI" },
          Rt = [
            "carouselStore",
            "children",
            "className",
            "currentSlide",
            "disabled",
            "onClick",
            "selected",
            "slide",
            "totalSlides",
            "visibleSlides",
          ],
          ee,
          Lt =
            ((ee = (function (n) {
              function i(e) {
                var t;
                return (
                  O(this, i),
                  (t = s.call(this, e)),
                  (t.handleOnClick = t.handleOnClick.bind(p(t))),
                  t
                );
              }
              w(i, n);
              var s = C(i);
              return (
                _(i, [
                  {
                    key: "handleOnClick",
                    value: function (e) {
                      var t = this.props,
                        a = t.carouselStore,
                        o = t.onClick,
                        l = t.slide,
                        c = t.totalSlides,
                        u = t.visibleSlides,
                        b = l >= c - u ? c - u : l;
                      a.setStoreState(
                        { currentSlide: b, isPlaying: !1 },
                        o !== null && o.call(this, e),
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = (e.carouselStore, e.children, e.className),
                        a = e.currentSlide,
                        o = e.disabled,
                        l = (e.onClick, e.selected),
                        c = e.slide,
                        u = (e.totalSlides, e.visibleSlides),
                        b = k(e, Rt),
                        h = c >= a && c < a + u,
                        S = typeof l == "boolean" ? l : h,
                        E = h === !0,
                        j = typeof o == "boolean" ? o : E,
                        v = g([
                          Le.dot,
                          S && Le.dotSelected,
                          "carousel__dot",
                          "carousel__dot--".concat(c),
                          S && "carousel__dot--selected",
                          t,
                        ]);
                      return d.createElement(
                        "button",
                        f(
                          {
                            "aria-label": "slide dot",
                            type: "button",
                            onClick: this.handleOnClick,
                            className: v,
                            disabled: j,
                          },
                          b,
                        ),
                        this.props.children,
                      );
                    },
                  },
                ]),
                i
              );
            })(d.Component)),
            m(ee, "propTypes", {
              carouselStore: r.object.isRequired,
              children: T.children,
              className: r.string,
              currentSlide: r.number.isRequired,
              disabled: r.bool,
              onClick: r.func,
              selected: r.bool,
              slide: r.number.isRequired,
              totalSlides: r.number.isRequired,
              visibleSlides: r.number.isRequired,
            }),
            m(ee, "defaultProps", {
              children: null,
              className: null,
              disabled: null,
              onClick: null,
              selected: null,
            }),
            ee),
          Ie = x(Lt, function (n) {
            return {
              currentSlide: n.currentSlide,
              totalSlides: n.totalSlides,
              visibleSlides: n.visibleSlides,
            };
          }),
          It = {},
          qt = ["renderDots"],
          zt = [
            "carouselStore",
            "children",
            "className",
            "currentSlide",
            "dotNumbers",
            "totalSlides",
            "visibleSlides",
            "disableActiveDots",
            "showAsSelectedForCurrentSlideOnly",
            "renderDots",
          ],
          te,
          Bt =
            ((te = (function (n) {
              function i() {
                return O(this, i), s.apply(this, arguments);
              }
              w(i, n);
              var s = C(i);
              return (
                _(i, [
                  {
                    key: "renderDots",
                    value: function () {
                      var e = this.props,
                        t = e.currentSlide,
                        a = e.totalSlides,
                        o = e.visibleSlides,
                        l = e.disableActiveDots,
                        c = e.showAsSelectedForCurrentSlideOnly,
                        u = e.renderDots;
                      if (u) {
                        var b = this.props;
                        return b.renderDots, u(k(b, qt));
                      }
                      for (var h = [], S = 0; S < a; S += 1) {
                        var E = S >= t && S < t + o,
                          j = S === t,
                          v = c ? j : E,
                          M = S >= a - o ? a - o : S;
                        h.push(
                          d.createElement(
                            Ie,
                            {
                              key: S,
                              slide: M,
                              selected: v,
                              disabled: !!l && v,
                            },
                            d.createElement(
                              "span",
                              { className: g["carousel__dot-group-dot"] },
                              this.props.dotNumbers && S + 1,
                            ),
                          ),
                        );
                      }
                      return h;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = (e.carouselStore, e.children),
                        a = e.className,
                        o =
                          (e.currentSlide,
                          e.dotNumbers,
                          e.totalSlides,
                          e.visibleSlides,
                          e.disableActiveDots,
                          e.showAsSelectedForCurrentSlideOnly,
                          e.renderDots,
                          k(e, zt)),
                        l = g([It.DotGroup, "carousel__dot-group", a]);
                      return d.createElement(
                        "div",
                        f({ className: l }, o),
                        this.renderDots(),
                        t,
                      );
                    },
                  },
                ]),
                i
              );
            })(d.Component)),
            m(te, "propTypes", {
              children: T.children,
              className: r.string,
              currentSlide: r.number.isRequired,
              carouselStore: r.object.isRequired,
              totalSlides: r.number.isRequired,
              visibleSlides: r.number.isRequired,
              dotNumbers: r.bool,
              disableActiveDots: r.bool,
              showAsSelectedForCurrentSlideOnly: r.bool,
              renderDots: r.func,
            }),
            m(te, "defaultProps", {
              children: null,
              className: null,
              dotNumbers: !1,
              disableActiveDots: !0,
              showAsSelectedForCurrentSlideOnly: !1,
              renderDots: null,
            }),
            te),
          mn = x(Bt, function (n) {
            return {
              currentSlide: n.currentSlide,
              totalSlides: n.totalSlides,
              visibleSlides: n.visibleSlides,
            };
          }),
          H = { image: "image___xtQGH" },
          Ft = ["src", "alt"],
          Wt = [
            "carouselStore",
            "children",
            "className",
            "hasMasterSpinner",
            "isBgImage",
            "onError",
            "onLoad",
            "renderError",
            "renderLoading",
            "style",
            "tag",
          ],
          Se = (function (n) {
            function i(e) {
              var t;
              return (
                O(this, i),
                (t = s.call(this, e)),
                (t.state = { imageStatus: de }),
                (t.handleImageLoad = t.handleImageLoad.bind(p(t))),
                (t.handleImageError = t.handleImageError.bind(p(t))),
                (t.image = null),
                t
              );
            }
            w(i, n);
            var s = C(i);
            return (
              _(
                i,
                [
                  {
                    key: "componentDidMount",
                    value: function () {
                      i.subscribeMasterSpinner(this.props), this.initImage();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      e.src !== this.props.src &&
                        (i.unsubscribeMasterSpinner(e),
                        i.subscribeMasterSpinner(this.props),
                        this.initImage());
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      i.unsubscribeMasterSpinner(this.props),
                        this.image.removeEventListener(
                          "load",
                          this.handleImageLoad,
                        ),
                        this.image.removeEventListener(
                          "error",
                          this.handleImageError,
                        ),
                        (this.image = null);
                    },
                  },
                  {
                    key: "initImage",
                    value: function () {
                      if (
                        (this.setState({ imageStatus: de }),
                        (this.image = document.createElement("img")),
                        this.image.addEventListener(
                          "load",
                          this.handleImageLoad,
                          !1,
                        ),
                        this.image.addEventListener(
                          "error",
                          this.handleImageError,
                          !1,
                        ),
                        (this.image.src = this.props.src),
                        this.image.readyState || this.image.complete)
                      ) {
                        var e = this.image.src;
                        (this.image.src =
                          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
                          (this.image.src = e);
                      }
                    },
                  },
                  {
                    key: "handleImageLoad",
                    value: function (e) {
                      this.setState({ imageStatus: De }),
                        this.props.hasMasterSpinner &&
                          this.props.carouselStore.masterSpinnerSuccess(
                            this.props.src,
                          ),
                        this.props.onLoad && this.props.onLoad(e);
                    },
                  },
                  {
                    key: "handleImageError",
                    value: function (e) {
                      this.setState({ imageStatus: je }),
                        this.props.hasMasterSpinner &&
                          this.props.carouselStore.masterSpinnerError(
                            this.props.src,
                          ),
                        this.props.onError && this.props.onError(e);
                    },
                  },
                  {
                    key: "tempTag",
                    value: function () {
                      return this.props.tag === "img" ? "div" : this.props.tag;
                    },
                  },
                  {
                    key: "customRender",
                    value: function (e) {
                      return typeof this.props[e] == "function"
                        ? this.props[e]()
                        : this.props.children;
                    },
                  },
                  {
                    key: "renderLoading",
                    value: function (e) {
                      var t = this.tempTag(),
                        a = g([
                          H.image,
                          H.imageLoading,
                          "carousel__image",
                          this.props.isBgImage &&
                            "carousel__image--with-background",
                          "carousel__image--loading",
                          this.props.className,
                        ]);
                      return d.createElement(
                        t,
                        f({ className: a }, e),
                        this.customRender("renderLoading"),
                      );
                    },
                  },
                  {
                    key: "renderError",
                    value: function (e) {
                      var t = this.tempTag(),
                        a = g([
                          H.image,
                          H.imageError,
                          "carousel__image",
                          this.props.isBgImage &&
                            "carousel__image--with-background",
                          "carousel__image--error",
                          this.props.className,
                        ]);
                      return d.createElement(
                        t,
                        f({ className: a }, e),
                        this.customRender("renderError"),
                      );
                    },
                  },
                  {
                    key: "renderSuccess",
                    value: function (e) {
                      var t = this.props,
                        a = t.style,
                        o = t.tag,
                        l = g([
                          H.image,
                          "carousel__image",
                          this.props.isBgImage &&
                            "carousel__image--with-background",
                          "carousel__image--success",
                          this.props.className,
                        ]),
                        c = f({}, a),
                        u = e;
                      if (o !== "img") {
                        var b = e.src;
                        e.alt,
                          (u = k(e, Ft)),
                          (c = f({}, a, {
                            backgroundImage: 'url("'.concat(b, '")'),
                            backgroundSize: "cover",
                          }));
                      }
                      return d.createElement(
                        o,
                        f({ className: l, style: c }, u),
                        this.props.children,
                      );
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t =
                          (e.carouselStore,
                          e.children,
                          e.className,
                          e.hasMasterSpinner,
                          e.isBgImage,
                          e.onError,
                          e.onLoad,
                          e.renderError,
                          e.renderLoading,
                          e.style,
                          e.tag,
                          k(e, Wt));
                      switch (this.state.imageStatus) {
                        case de:
                          return this.renderLoading(t);
                        case De:
                          return this.renderSuccess(t);
                        case je:
                          return this.renderError(t);
                        default:
                          throw new Error(
                            "unknown value for this.state.imageStatus",
                          );
                      }
                    },
                  },
                ],
                [
                  {
                    key: "subscribeMasterSpinner",
                    value: function (e) {
                      e.hasMasterSpinner &&
                        e.carouselStore.subscribeMasterSpinner(e.src);
                    },
                  },
                  {
                    key: "unsubscribeMasterSpinner",
                    value: function (e) {
                      e.hasMasterSpinner &&
                        e.carouselStore.unsubscribeMasterSpinner(e.src);
                    },
                  },
                ],
              ),
              i
            );
          })(d.Component);
        m(Se, "propTypes", {
          alt: r.string,
          carouselStore: r.object.isRequired,
          children: T.children,
          className: r.string,
          hasMasterSpinner: r.bool.isRequired,
          isBgImage: T.isBgImage,
          onError: r.func,
          onLoad: r.func,
          renderError: r.func,
          renderLoading: r.func,
          src: r.string.isRequired,
          style: r.object,
          tag: r.string,
        }),
          m(Se, "defaultProps", {
            alt: "",
            children: null,
            className: null,
            isBgImage: !1,
            onError: null,
            onLoad: null,
            renderError: null,
            renderLoading: null,
            style: null,
            tag: "img",
          });
        var qe = x(Se, function (n) {
            return {
              hasMasterSpinner: n.hasMasterSpinner,
              orientation: n.orientation,
            };
          }),
          Ht = { spinner: "spinner___27VUp", spin: "spin___S3UuE" },
          $t = ["className"],
          ne,
          ze =
            ((ne = (function (n) {
              function i() {
                return O(this, i), s.apply(this, arguments);
              }
              w(i, n);
              var s = C(i);
              return (
                _(i, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.className,
                        a = k(e, $t),
                        o = g([Ht.spinner, "carousel__spinner", t]);
                      return d.createElement("div", f({ className: o }, a));
                    },
                  },
                ]),
                i
              );
            })(d.PureComponent)),
            m(ne, "propTypes", { className: r.string }),
            m(ne, "defaultProps", { className: null }),
            ne),
          B = {
            container: "container___2O72F",
            overlay: "overlay___IV4qY",
            hover: "hover___MYy31",
            zoom: "zoom___3kqYk",
            loading: "loading___1pvNI",
            imageLoadingSpinnerContainer:
              "imageLoadingSpinnerContainer___3UIPD",
          },
          Ut = [
            "alt",
            "bgImageProps",
            "bgImageTag",
            "carouselStore",
            "className",
            "imageClassName",
            "overlayClassName",
            "isPinchZoomEnabled",
            "spinner",
            "src",
            "srcZoomed",
            "tag",
          ],
          ie,
          Yt = 2,
          Zt = 3,
          Vt =
            ((ie = (function (n) {
              function i(e) {
                var t;
                return (
                  O(this, i),
                  (t = s.call(this, e)),
                  (t.state = {
                    isImageLoading: !0,
                    isImageLoadingError: !0,
                    isHovering: !1,
                    isZooming: !1,
                    x: null,
                    y: null,
                    scale: 1,
                  }),
                  (t.tpCache = {}),
                  (t.handleImageComplete = t.handleImageComplete.bind(p(t))),
                  (t.handleImageLoadError = t.handleImageLoadError.bind(p(t))),
                  (t.handleOnMouseMove = t.handleOnMouseMove.bind(p(t))),
                  (t.handleOnMouseOut = t.handleOnMouseOut.bind(p(t))),
                  (t.handleOnMouseOver = t.handleOnMouseOver.bind(p(t))),
                  (t.handleOnTouchEnd = t.handleOnTouchEnd.bind(p(t))),
                  (t.handleOnTouchMove = t.handleOnTouchMove.bind(p(t))),
                  (t.handleOnTouchStart = t.handleOnTouchStart.bind(p(t))),
                  t
                );
              }
              w(i, n);
              var s = C(i);
              return (
                _(
                  i,
                  [
                    {
                      key: "componentDidUpdate",
                      value: function (e, t) {
                        t.isZooming === !1 &&
                          this.state.isZooming === !0 &&
                          this.props.carouselStore.setStoreState({
                            isPageScrollLocked: !0,
                          }),
                          t.isZooming === !0 &&
                            this.state.isZooming === !1 &&
                            this.props.carouselStore.setStoreState({
                              isPageScrollLocked: !1,
                            });
                      },
                    },
                    {
                      key: "handleImageComplete",
                      value: function (e) {
                        this.setState({ isImageLoading: !1 }),
                          this.props &&
                            this.props.onLoad &&
                            this.props.onLoad(e);
                      },
                    },
                    {
                      key: "handleImageLoadError",
                      value: function (e) {
                        this.setState({
                          isImageLoadingError: !0,
                          isImageLoading: !1,
                        }),
                          this.props &&
                            this.props.onError &&
                            this.props.onError(e);
                      },
                    },
                    {
                      key: "handleOnMouseOver",
                      value: function () {
                        this.state.isZooming ||
                          this.setState({ isHovering: !0, scale: Yt });
                      },
                    },
                    {
                      key: "handleOnMouseOut",
                      value: function () {
                        this.state.isZooming ||
                          this.setState({ isHovering: !1, scale: 1 });
                      },
                    },
                    {
                      key: "handleOnMouseMove",
                      value: function (e) {
                        if (!this.state.isZooming) {
                          var t = P(
                              (e.nativeEvent.offsetX / e.target.offsetWidth) *
                                100,
                            ),
                            a = P(
                              (e.nativeEvent.offsetY / e.target.offsetHeight) *
                                100,
                            );
                          this.setState({ x: t, y: a });
                        }
                      },
                    },
                    {
                      key: "handleOnTouchStart",
                      value: function (e) {
                        var t = this;
                        this.props.isPinchZoomEnabled &&
                          (ce(e.targetTouches).forEach(function (a) {
                            t.tpCache[a.identifier] = {
                              clientX: a.clientX,
                              clientY: a.clientY,
                            };
                          }),
                          this.setState(function (a) {
                            return {
                              isZooming:
                                a.isZooming ||
                                Object.keys(t.tpCache).length > 1,
                            };
                          }));
                      },
                    },
                    {
                      key: "handleOnTouchMove",
                      value: function (e) {
                        var t = this;
                        if (this.state.isZooming) {
                          e.persist();
                          var a = ce(e.targetTouches)
                            .filter(function (M) {
                              return t.tpCache[M.identifier];
                            })
                            .slice(0, 2);
                          if (a.length === 2) {
                            e.stopPropagation();
                            var o = e.target.getBoundingClientRect(),
                              l = a[0].identifier,
                              c = a[1].identifier,
                              u = {
                                x1: this.tpCache[l].clientX,
                                y1: this.tpCache[l].clientY,
                                x2: this.tpCache[c].clientX,
                                y2: this.tpCache[c].clientY,
                              };
                            u.distance = i.distanceBetweenTwoTouches(q({}, u));
                            var b = i.midpointBetweenTwoTouches(q({}, u));
                            (u.cx = b.x), (u.cy = b.y);
                            var h = {
                              x1: a[0].clientX,
                              y1: a[0].clientY,
                              x2: a[1].clientX,
                              y2: a[1].clientY,
                            };
                            h.distance = i.distanceBetweenTwoTouches(q({}, h));
                            var S = i.midpointBetweenTwoTouches(q({}, h));
                            (h.cx = S.x), (h.cy = S.y);
                            var E = P(
                                U({
                                  min: 0,
                                  max: 100,
                                  x: ((h.cx - o.left) / o.width) * 100,
                                }),
                              ),
                              j = P(
                                U({
                                  min: 0,
                                  max: 100,
                                  x: ((h.cy - o.top) / o.height) * 100,
                                }),
                              ),
                              v = function (M) {
                                return U({
                                  min: 1,
                                  max: Zt,
                                  x: M.scale + (h.distance - u.distance) / 100,
                                });
                              };
                            this.setState(function (M) {
                              return {
                                isZooming: v(M) !== 1,
                                scale: v(M),
                                x: E,
                                y: j,
                              };
                            });
                          }
                        }
                      },
                    },
                    {
                      key: "handleOnTouchEnd",
                      value: function (e) {
                        var t = this;
                        this.props.isPinchZoomEnabled &&
                          (ce(e.changedTouches).forEach(function (a) {
                            delete t.tpCache[a.identifier];
                          }),
                          Object.keys(this.tpCache).length === 0 &&
                            this.setState({ isZooming: !1 }));
                      },
                    },
                    {
                      key: "renderLoading",
                      value: function () {
                        if (this.state.isImageLoading) {
                          var e = this.props.spinner;
                          return d.createElement(
                            "div",
                            {
                              className: g([
                                B.imageLoadingSpinnerContainer,
                                "carousel__image-loading-spinner-container",
                              ]),
                            },
                            e && e(),
                            !e && d.createElement(ze, null),
                          );
                        }
                        return null;
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.props,
                          t = e.alt,
                          a = e.bgImageProps,
                          o = e.bgImageTag,
                          l = (e.carouselStore, e.className),
                          c = e.imageClassName,
                          u = e.overlayClassName,
                          b = (e.isPinchZoomEnabled, e.spinner, e.src),
                          h = e.srcZoomed,
                          S = e.tag,
                          E = k(e, Ut),
                          j = g([B.container, l]),
                          v = g([B.image, "carousel__zoom-image", c]),
                          M = g([
                            B.overlay,
                            "carousel__zoom-image-overlay",
                            this.state.isHovering && B.hover,
                            this.state.isZooming && B.zoom,
                            this.state.isHovering &&
                              "carousel__zoom-image-overlay--hovering",
                            this.state.isZooming &&
                              "carousel__zoom-image-overlay--zooming",
                            u,
                          ]),
                          I = {};
                        return (
                          (this.state.isHovering || this.state.isZooming) &&
                            ((I.transformOrigin = ""
                              .concat(this.state.x, " ")
                              .concat(this.state.y)),
                            (I.transform = "scale(".concat(
                              this.state.scale,
                              ")",
                            ))),
                          d.createElement(
                            S,
                            f({ className: j }, E),
                            d.createElement(
                              qe,
                              f(
                                {
                                  alt: t,
                                  className: v,
                                  tag: o,
                                  src: b,
                                  onLoad: this.handleImageComplete,
                                  onError: this.handleImageLoadError,
                                },
                                a,
                              ),
                            ),
                            d.createElement(qe, {
                              className: M,
                              tag: "div",
                              src: h || b,
                              style: I,
                              isBgImage: !0,
                              onFocus: this.handleOnMouseOver,
                              onMouseOver: this.handleOnMouseOver,
                              onBlur: this.handleOnMouseOut,
                              onMouseOut: this.handleOnMouseOut,
                              onMouseMove: this.handleOnMouseMove,
                              onTouchStart: this.handleOnTouchStart,
                              onTouchEnd: this.handleOnTouchEnd,
                              onTouchMove: this.handleOnTouchMove,
                            }),
                            this.renderLoading(),
                          )
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "midpointBetweenTwoTouches",
                      value: function (e) {
                        var t = e.x1,
                          a = e.y1;
                        return { x: (t + e.x2) / 2, y: (a + e.y2) / 2 };
                      },
                    },
                    {
                      key: "distanceBetweenTwoTouches",
                      value: function (e) {
                        var t = e.x1,
                          a = e.y1,
                          o = e.x2,
                          l = e.y2;
                        return Math.sqrt(
                          Math.pow(o - t, 2) + Math.pow(l - a, 2),
                        );
                      },
                    },
                  ],
                ),
                i
              );
            })(d.Component)),
            m(ie, "propTypes", {
              alt: r.string,
              bgImageProps: r.object,
              bgImageTag: r.string,
              carouselStore: r.object.isRequired,
              className: r.string,
              imageClassName: r.string,
              overlayClassName: r.string,
              spinner: r.func,
              onLoad: r.func,
              onError: r.func,
              src: r.string.isRequired,
              srcZoomed: r.string,
              tag: r.string,
              isPinchZoomEnabled: r.bool,
            }),
            m(ie, "defaultProps", {
              alt: void 0,
              bgImageProps: {},
              bgImageTag: "div",
              className: null,
              imageClassName: null,
              overlayClassName: null,
              isPinchZoomEnabled: !0,
              spinner: null,
              onLoad: null,
              onError: null,
              srcZoomed: null,
              tag: "div",
            }),
            ie),
          fn = x(Vt, function () {
            return {};
          }),
          re = {
            slide: "slide___3-Nqo",
            slideHorizontal: "slideHorizontal___1NzNV",
            slideInner: "slideInner___2mfX9",
            focusRing: "focusRing___1airF",
          },
          Xt = [
            "ariaLabel",
            "carouselStore",
            "children",
            "className",
            "classNameHidden",
            "classNameVisible",
            "currentSlide",
            "index",
            "innerClassName",
            "innerTag",
            "naturalSlideHeight",
            "naturalSlideWidth",
            "onBlur",
            "onFocus",
            "orientation",
            "slideSize",
            "style",
            "tag",
            "totalSlides",
            "visibleSlides",
            "isIntrinsicHeight",
          ],
          se,
          Kt =
            ((se = (function (n) {
              function i(e) {
                var t;
                return (
                  O(this, i),
                  (t = s.call(this, e)),
                  (t.handleOnFocus = t.handleOnFocus.bind(p(t))),
                  (t.handleOnBlur = t.handleOnBlur.bind(p(t))),
                  (t.state = { focused: !1 }),
                  t
                );
              }
              w(i, n);
              var s = C(i);
              return (
                _(i, [
                  {
                    key: "isVisible",
                    value: function () {
                      var e = this.props,
                        t = e.currentSlide,
                        a = e.index,
                        o = e.visibleSlides;
                      return a >= t && a < t + o;
                    },
                  },
                  {
                    key: "handleOnFocus",
                    value: function (e) {
                      var t = this,
                        a = this.props.onFocus;
                      this.setState({ focused: !0 }, function () {
                        a !== null && a.call(t, e);
                      });
                    },
                  },
                  {
                    key: "handleOnBlur",
                    value: function (e) {
                      var t = this,
                        a = this.props.onBlur;
                      this.setState({ focused: !1 }, function () {
                        a !== null && a.call(t, e);
                      });
                    },
                  },
                  {
                    key: "renderFocusRing",
                    value: function () {
                      return this.state.focused
                        ? d.createElement("div", {
                            className: [
                              re.focusRing,
                              "carousel__slide-focus-ring",
                            ].join(" "),
                          })
                        : null;
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        a = t.ariaLabel,
                        o = (t.carouselStore, t.children, t.className),
                        l = t.classNameHidden,
                        c = t.classNameVisible,
                        u = (t.currentSlide, t.index, t.innerClassName),
                        b = t.innerTag,
                        h = t.naturalSlideHeight,
                        S = t.naturalSlideWidth,
                        E = (t.onBlur, t.onFocus, t.orientation),
                        j = t.slideSize,
                        v = t.style,
                        M = t.tag,
                        I = t.totalSlides,
                        be = (t.visibleSlides, t.isIntrinsicHeight),
                        me = k(t, Xt),
                        y = {};
                      E === "horizontal"
                        ? ((y.width = P(j)),
                          (y.paddingBottom = P((100 * h) / (S * I))))
                        : ((y.width = P(100)),
                          (y.paddingBottom = P((100 * h) / S)));
                      var oe = {};
                      be &&
                        (E === "horizontal"
                          ? (y.height = "unset")
                          : (y.width = "unset"),
                        (y.paddingBottom = "unset"),
                        (oe.position = "unset"));
                      var fe = f({}, y, v),
                        F = this.isVisible(),
                        A = g([
                          re.slide,
                          E === "horizontal" && re.slideHorizontal,
                          "carousel__slide",
                          this.state.focused && "carousel__slide--focused",
                          F && c,
                          F && "carousel__slide--visible",
                          !F && l,
                          !F && "carousel__slide--hidden",
                          o,
                        ]),
                        ge = g([re.slideInner, "carousel__inner-slide", u]);
                      return d.createElement(
                        M,
                        f(
                          {
                            ref: function (L) {
                              e.tagRef = L;
                            },
                            "aria-selected": this.isVisible(),
                            "aria-label": a,
                            role: this.props.role,
                            onFocus: this.handleOnFocus,
                            onBlur: this.handleOnBlur,
                            className: A,
                            style: fe,
                          },
                          me,
                        ),
                        d.createElement(
                          b,
                          {
                            ref: function (L) {
                              e.innerTagRef = L;
                            },
                            className: ge,
                            style: oe,
                          },
                          this.props.children,
                          this.renderFocusRing(),
                        ),
                      );
                    },
                  },
                ]),
                i
              );
            })(d.PureComponent)),
            m(se, "propTypes", {
              ariaLabel: r.string,
              carouselStore: r.object,
              children: T.children,
              className: r.string,
              classNameHidden: r.string,
              classNameVisible: r.string,
              currentSlide: r.number.isRequired,
              index: r.number.isRequired,
              innerClassName: r.string,
              innerTag: r.string,
              naturalSlideHeight: r.number.isRequired,
              naturalSlideWidth: r.number.isRequired,
              onBlur: r.func,
              onFocus: r.func,
              orientation: T.orientation.isRequired,
              slideSize: r.number.isRequired,
              role: r.string,
              style: r.object,
              tag: r.string,
              totalSlides: r.number.isRequired,
              visibleSlides: r.number.isRequired,
              isIntrinsicHeight: r.bool,
            }),
            m(se, "defaultProps", {
              ariaLabel: "slide",
              carouselStore: null,
              children: null,
              className: null,
              classNameHidden: null,
              classNameVisible: null,
              innerClassName: null,
              innerTag: "div",
              onBlur: null,
              onFocus: null,
              role: "option",
              style: {},
              tag: "div",
              isIntrinsicHeight: !1,
            }),
            se),
          Gt = x(Kt, function (n) {
            return {
              currentSlide: n.currentSlide,
              naturalSlideHeight: n.naturalSlideHeight,
              naturalSlideWidth: n.naturalSlideWidth,
              orientation: n.orientation,
              slideSize: n.slideSize,
              totalSlides: n.totalSlides,
              visibleSlides: n.visibleSlides,
              isIntrinsicHeight: n.isIntrinsicHeight,
            };
          }),
          Qt = (function () {
            function n() {
              O(this, n);
            }
            return (
              _(
                n,
                [
                  {
                    key: "parents",
                    value: function (i, s) {
                      return i.parentNode === null
                        ? s
                        : this.parents(i.parentNode, s.concat([i]));
                    },
                  },
                  {
                    key: "scrollParent",
                    value: function (i) {
                      for (
                        var s = this.parents(i.parentNode, []), e = 0;
                        e < s.length;
                        e += 1
                      )
                        if (n.scroll(s[e])) return s[e];
                      return (
                        document.scrollingElement || document.documentElement
                      );
                    },
                  },
                  {
                    key: "getScrollParent",
                    value: function (i) {
                      return n.isNodeValid(i) ? this.scrollParent(i) : null;
                    },
                  },
                ],
                [
                  {
                    key: "style",
                    value: function (i, s) {
                      return getComputedStyle(i, null).getPropertyValue(s);
                    },
                  },
                  {
                    key: "overflow",
                    value: function (i) {
                      return (
                        n.style(i, "overflow") +
                        n.style(i, "overflow-y") +
                        n.style(i, "overflow-x")
                      );
                    },
                  },
                  {
                    key: "scroll",
                    value: function (i) {
                      return /(auto|scroll)/.test(n.overflow(i));
                    },
                  },
                  {
                    key: "isNodeValid",
                    value: function (i) {
                      return (
                        i instanceof HTMLElement || i instanceof SVGElement
                      );
                    },
                  },
                ],
              ),
              n
            );
          })(),
          D = {
            horizontalSlider: "horizontalSlider___281Ls",
            touchDisabled: "touchDisabled___2qs4y",
            horizontalSliderTray: "horizontalSliderTray___1L-0W",
            verticalSlider: "verticalSlider___34ZFD",
            verticalSliderTray: "verticalSliderTray___267D8",
            verticalTray: "verticalTray___12Key",
            verticalSlideTrayWrap: "verticalSlideTrayWrap___2nO7o",
            sliderTray: "sliderTray___-vHFQ",
            sliderAnimation: "sliderAnimation___300FY",
            masterSpinnerContainer: "masterSpinnerContainer___1Z6hB",
          },
          Jt = [
            "ariaLabel",
            "carouselStore",
            "children",
            "className",
            "classNameAnimation",
            "classNameTray",
            "classNameTrayWrap",
            "currentSlide",
            "disableAnimation",
            "disableKeyboard",
            "dragEnabled",
            "hasMasterSpinner",
            "interval",
            "isPageScrollLocked",
            "isPlaying",
            "lockOnWindowScroll",
            "masterSpinnerFinished",
            "moveThreshold",
            "naturalSlideHeight",
            "naturalSlideWidth",
            "onMasterSpinner",
            "orientation",
            "playDirection",
            "privateUnDisableAnimation",
            "slideSize",
            "slideTraySize",
            "spinner",
            "style",
            "totalSlides",
            "touchEnabled",
            "trayProps",
            "trayTag",
            "visibleSlides",
            "isIntrinsicHeight",
          ],
          en = [
            "dragStep",
            "step",
            "infinite",
            "preventVerticalScrollOnTouch",
            "preventingVerticalScroll",
            "horizontalPixelThreshold",
            "verticalPixelThreshold",
          ],
          tn = [
            "className",
            "onClickCapture",
            "onMouseDown",
            "onTouchCancel",
            "onTouchEnd",
            "onTouchMove",
            "onTouchStart",
            "ref",
            "style",
          ],
          ae,
          nn =
            ((ae = (function (n) {
              function i(e) {
                var t;
                return (
                  O(this, i),
                  (t = s.call(this, e)),
                  (t.getSliderRef = t.getSliderRef.bind(p(t))),
                  (t.handleDocumentScroll = t.handleDocumentScroll.bind(p(t))),
                  (t.handleOnClickCapture = t.handleOnClickCapture.bind(p(t))),
                  (t.handleOnKeyDown = t.handleOnKeyDown.bind(p(t))),
                  (t.handleOnMouseDown = t.handleOnMouseDown.bind(p(t))),
                  (t.handleOnMouseMove = t.handleOnMouseMove.bind(p(t))),
                  (t.handleOnMouseUp = t.handleOnMouseUp.bind(p(t))),
                  (t.handleOnTouchCancel = t.handleOnTouchCancel.bind(p(t))),
                  (t.handleOnTouchEnd = t.handleOnTouchEnd.bind(p(t))),
                  (t.handleOnTouchMove = t.handleOnTouchMove.bind(p(t))),
                  (t.handleOnTouchStart = t.handleOnTouchStart.bind(p(t))),
                  (t.playBackward = t.playBackward.bind(p(t))),
                  (t.playForward = t.playForward.bind(p(t))),
                  (t.callCallback = t.callCallback.bind(p(t))),
                  (t.blockWindowScroll = t.blockWindowScroll.bind(p(t))),
                  (t.state = {
                    cancelNextClick: !1,
                    deltaX: 0,
                    deltaY: 0,
                    isBeingMouseDragged: !1,
                    isBeingTouchDragged: !1,
                    preventingVerticalScroll: !1,
                    startX: 0,
                    startY: 0,
                  }),
                  (t.interval = null),
                  (t.isDocumentScrolling = null),
                  (t.moveTimer = null),
                  (t.originalOverflow = null),
                  (t.scrollParent = null),
                  (t.scrollStopTimer = null),
                  t
                );
              }
              w(i, n);
              var s = C(i);
              return (
                _(
                  i,
                  [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.props.lockOnWindowScroll &&
                          window.addEventListener(
                            "scroll",
                            this.handleDocumentScroll,
                            !1,
                          ),
                          (this.props.touchEnabled ||
                            this.props.preventVerticalScrollOnTouch) &&
                            window.addEventListener(
                              "touchmove",
                              this.blockWindowScroll,
                              !1,
                            ),
                          document.documentElement.addEventListener(
                            "mouseleave",
                            this.handleOnMouseUp,
                            !1,
                          ),
                          document.documentElement.addEventListener(
                            "mousemove",
                            this.handleOnMouseMove,
                            !1,
                          ),
                          document.documentElement.addEventListener(
                            "mouseup",
                            this.handleOnMouseUp,
                            !1,
                          ),
                          this.props.isPlaying && this.play();
                      },
                    },
                    {
                      key: "componentDidUpdate",
                      value: function (e) {
                        !e.isPlaying && this.props.isPlaying && this.play(),
                          e.isPlaying && !this.props.isPlaying && this.stop(),
                          !e.isPageScrollLocked &&
                            this.props.isPageScrollLocked &&
                            this.lockScroll(),
                          e.isPageScrollLocked &&
                            !this.props.isPageScrollLocked &&
                            this.unlockScroll(),
                          e.privateUnDisableAnimation === !1 &&
                            this.props.privateUnDisableAnimation === !0 &&
                            this.props.carouselStore.setStoreState({
                              privateUnDisableAnimation: !1,
                              disableAnimation: !1,
                            });
                      },
                    },
                    {
                      key: "componentWillUnmount",
                      value: function () {
                        document.documentElement.removeEventListener(
                          "mouseleave",
                          this.handleOnMouseUp,
                          !1,
                        ),
                          document.documentElement.removeEventListener(
                            "mousemove",
                            this.handleOnMouseMove,
                            !1,
                          ),
                          document.documentElement.removeEventListener(
                            "mouseup",
                            this.handleOnMouseUp,
                            !1,
                          ),
                          window.removeEventListener(
                            "scroll",
                            this.handleDocumentScroll,
                            !1,
                          ),
                          window.removeEventListener(
                            "touchmove",
                            this.blockWindowScroll,
                            !1,
                          ),
                          this.stop(),
                          window.cancelAnimationFrame.call(
                            window,
                            this.moveTimer,
                          ),
                          window.clearTimeout(this.scrollStopTimer),
                          (this.isDocumentScrolling = null),
                          (this.moveTimer = null),
                          (this.scrollStopTimer = null);
                      },
                    },
                    {
                      key: "getSliderRef",
                      value: function (e) {
                        if (((this.sliderTrayElement = e), e && window)) {
                          var t = e.closest(".carousel");
                          t &&
                            (this.rtl =
                              window
                                .getComputedStyle(t, null)
                                .getPropertyValue("direction") === "rtl");
                        }
                      },
                    },
                    {
                      key: "fakeOnDragStart",
                      value: function (e) {
                        var t = e.screenX,
                          a = e.screenY,
                          o = e.touchDrag,
                          l = o !== void 0 && o,
                          c = e.mouseDrag,
                          u = c !== void 0 && c;
                        this.props.carouselStore.setStoreState({
                          isPlaying: !1,
                        }),
                          window.cancelAnimationFrame.call(
                            window,
                            this.moveTimer,
                          ),
                          this.props.orientation === "vertical" &&
                            this.props.carouselStore.setStoreState({
                              isPageScrollLocked: !0,
                            }),
                          this.setState({
                            isBeingTouchDragged: l,
                            isBeingMouseDragged: u,
                            startX: t,
                            startY: a,
                          });
                      },
                    },
                    {
                      key: "fakeOnDragMove",
                      value: function (e, t) {
                        var a = this;
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer,
                        ),
                          (this.moveTimer = window.requestAnimationFrame.call(
                            window,
                            function () {
                              a.setState(function (o) {
                                return {
                                  deltaX: (e - o.startX) * (a.rtl ? -1 : 1),
                                  deltaY: t - o.startY,
                                  preventingVerticalScroll:
                                    Math.abs(t - o.startY) <=
                                      a.props.verticalPixelThreshold &&
                                    Math.abs(e - o.startX) >=
                                      a.props.horizontalPixelThreshold,
                                };
                              });
                            },
                          ));
                      },
                    },
                    {
                      key: "fakeOnDragEnd",
                      value: function () {
                        window.cancelAnimationFrame.call(
                          window,
                          this.moveTimer,
                        ),
                          this.computeCurrentSlide(),
                          this.props.orientation === "vertical" &&
                            this.props.carouselStore.setStoreState({
                              isPageScrollLocked: !1,
                            }),
                          this.setState({
                            deltaX: 0,
                            deltaY: 0,
                            isBeingTouchDragged: !1,
                            isBeingMouseDragged: !1,
                          }),
                          (this.isDocumentScrolling =
                            !this.props.lockOnWindowScroll && null);
                      },
                    },
                    {
                      key: "callCallback",
                      value: function (e, t) {
                        var a = this.props.trayProps;
                        a &&
                          typeof a[e] == "function" &&
                          (t.persist(), a[e](t));
                      },
                    },
                    {
                      key: "handleOnMouseDown",
                      value: function (e) {
                        if (!this.props.dragEnabled)
                          return void this.callCallback("onMouseDown", e);
                        e.preventDefault(),
                          this.fakeOnDragStart({
                            screenX: e.screenX,
                            screenY: e.screenY,
                            mouseDrag: !0,
                          }),
                          this.callCallback("onMouseDown", e);
                      },
                    },
                    {
                      key: "handleOnMouseMove",
                      value: function (e) {
                        this.state.isBeingMouseDragged &&
                          (this.setState({ cancelNextClick: !0 }),
                          e.preventDefault(),
                          this.fakeOnDragMove(e.screenX, e.screenY));
                      },
                    },
                    {
                      key: "handleOnMouseUp",
                      value: function (e) {
                        this.state.isBeingMouseDragged &&
                          (e.preventDefault(), this.fakeOnDragEnd());
                      },
                    },
                    {
                      key: "handleOnClickCapture",
                      value: function (e) {
                        if (!this.state.cancelNextClick)
                          return void this.callCallback("onClickCapture", e);
                        e.preventDefault(),
                          this.setState({ cancelNextClick: !1 }),
                          this.callCallback("onClickCapture", e);
                      },
                    },
                    {
                      key: "handleOnTouchStart",
                      value: function (e) {
                        if (!this.props.touchEnabled)
                          return void this.callCallback("onTouchStart", e);
                        this.props.orientation === "vertical" &&
                          e.preventDefault();
                        var t = e.targetTouches[0];
                        this.fakeOnDragStart({
                          screenX: t.screenX,
                          screenY: t.screenY,
                          touchDrag: !0,
                        }),
                          this.callCallback("onTouchStart", e);
                      },
                    },
                    {
                      key: "handleDocumentScroll",
                      value: function () {
                        var e = this;
                        this.props.touchEnabled &&
                          ((this.isDocumentScrolling = !0),
                          window.clearTimeout(this.scrollStopTimer),
                          (this.scrollStopTimer = window.setTimeout(
                            function () {
                              e.isDocumentScrolling = !1;
                            },
                            66,
                          )));
                      },
                    },
                    {
                      key: "handleOnTouchMove",
                      value: function (e) {
                        if (
                          !this.props.touchEnabled ||
                          (this.props.lockOnWindowScroll &&
                            this.isDocumentScrolling)
                        )
                          return void this.callCallback("onTouchMove", e);
                        var t = e.targetTouches[0];
                        t &&
                          (this.fakeOnDragMove(t.screenX, t.screenY),
                          this.callCallback("onTouchMove", e));
                      },
                    },
                    {
                      key: "forward",
                      value: function () {
                        var e = this.props,
                          t = e.currentSlide,
                          a = e.step,
                          o = e.totalSlides,
                          l = e.visibleSlides;
                        return Math.min(t + a, o - l);
                      },
                    },
                    {
                      key: "backward",
                      value: function () {
                        var e = this.props,
                          t = e.currentSlide,
                          a = e.step;
                        return Math.max(t - a, 0);
                      },
                    },
                    {
                      key: "handleOnKeyDown",
                      value: function (e) {
                        var t = e.keyCode,
                          a = this.props,
                          o = a.carouselStore,
                          l = a.currentSlide,
                          c = a.disableKeyboard,
                          u = a.totalSlides,
                          b = a.visibleSlides,
                          h = {};
                        c === !0 ||
                          u <= b ||
                          (t === 37 &&
                            (e.preventDefault(),
                            this.focus(),
                            (h.currentSlide = Math.max(0, l - 1)),
                            (h.isPlaying = !1)),
                          t === 39 &&
                            (e.preventDefault(),
                            this.focus(),
                            (h.currentSlide = Math.min(u - b, l + 1)),
                            (h.isPlaying = !1)),
                          o.setStoreState(h));
                      },
                    },
                    {
                      key: "playForward",
                      value: function () {
                        var e = this.props,
                          t = e.carouselStore,
                          a = e.currentSlide;
                        t.setStoreState({
                          currentSlide:
                            this.forward() === a ? 0 : this.forward(),
                        });
                      },
                    },
                    {
                      key: "playBackward",
                      value: function () {
                        var e = this.props,
                          t = e.carouselStore,
                          a = e.currentSlide,
                          o = e.totalSlides,
                          l = e.visibleSlides;
                        t.setStoreState({
                          currentSlide:
                            this.backward() === a ? o - l : this.backward(),
                        });
                      },
                    },
                    {
                      key: "play",
                      value: function () {
                        var e = this.props.playDirection;
                        this.interval = setInterval(
                          e === "forward"
                            ? this.playForward
                            : this.playBackward,
                          this.props.interval,
                        );
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        window.clearInterval(this.interval),
                          (this.interval = null);
                      },
                    },
                    {
                      key: "lockScroll",
                      value: function () {
                        var e = new Qt();
                        (this.scrollParent = e.getScrollParent(
                          this.sliderTrayElement,
                        )),
                          this.scrollParent &&
                            ((this.originalOverflow =
                              this.originalOverflow ||
                              this.scrollParent.style.overflow),
                            (this.scrollParent.style.overflow = "hidden"));
                      },
                    },
                    {
                      key: "unlockScroll",
                      value: function () {
                        this.scrollParent &&
                          ((this.scrollParent.style.overflow =
                            this.originalOverflow),
                          (this.originalOverflow = null),
                          (this.scrollParent = null));
                      },
                    },
                    {
                      key: "blockWindowScroll",
                      value: function (e) {
                        this.state.preventingVerticalScroll &&
                          (e.preventDefault(), e.stopImmediatePropagation());
                      },
                    },
                    {
                      key: "computeCurrentSlide",
                      value: function () {
                        var e = i.slideSizeInPx(
                            this.props.orientation,
                            this.sliderTrayElement.clientWidth,
                            this.sliderTrayElement.clientHeight,
                            this.props.totalSlides,
                          ),
                          t = i.slidesMoved(
                            this.props.moveThreshold,
                            this.props.orientation,
                            this.state.deltaX,
                            this.state.deltaY,
                            e,
                            this.props.dragStep,
                          ),
                          a =
                            this.props.totalSlides -
                            Math.min(
                              this.props.totalSlides,
                              this.props.visibleSlides,
                            ),
                          o = U({
                            min: 0,
                            max: a,
                            x: this.props.currentSlide + t,
                          });
                        this.props.infinite &&
                          (this.props.currentSlide >= a && t > 0 && (o = 0),
                          this.props.currentSlide === 0 && t < 0 && (o = a)),
                          this.props.carouselStore.setStoreState({
                            currentSlide: o,
                          });
                      },
                    },
                    {
                      key: "focus",
                      value: function () {
                        this.sliderElement.focus();
                      },
                    },
                    {
                      key: "handleOnTouchEnd",
                      value: function (e) {
                        this.endTouchMove(), this.callCallback("onTouchEnd", e);
                      },
                    },
                    {
                      key: "handleOnTouchCancel",
                      value: function (e) {
                        this.endTouchMove(),
                          this.callCallback("onTouchCancel", e);
                      },
                    },
                    {
                      key: "endTouchMove",
                      value: function () {
                        this.props.touchEnabled && this.fakeOnDragEnd();
                      },
                    },
                    {
                      key: "renderMasterSpinner",
                      value: function () {
                        var e = this.props,
                          t = e.hasMasterSpinner,
                          a = e.masterSpinnerFinished,
                          o = e.spinner;
                        return t && !a
                          ? (typeof this.props.onMasterSpinner == "function" &&
                              this.props.onMasterSpinner(),
                            d.createElement(
                              "div",
                              {
                                className: g([
                                  D.masterSpinnerContainer,
                                  "carousel__master-spinner-container",
                                ]),
                              },
                              o && o(),
                              !o && d.createElement(ze, null),
                            ))
                          : null;
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.props,
                          a = t.ariaLabel,
                          o = (t.carouselStore, t.children),
                          l = t.className,
                          c = t.classNameAnimation,
                          u = t.classNameTray,
                          b = t.classNameTrayWrap,
                          h = t.currentSlide,
                          S = t.disableAnimation,
                          E =
                            (t.disableKeyboard,
                            t.dragEnabled,
                            t.hasMasterSpinner,
                            t.interval,
                            t.isPageScrollLocked,
                            t.isPlaying,
                            t.lockOnWindowScroll,
                            t.masterSpinnerFinished,
                            t.moveThreshold,
                            t.naturalSlideHeight),
                          j = t.naturalSlideWidth,
                          v = (t.onMasterSpinner, t.orientation),
                          M =
                            (t.playDirection,
                            t.privateUnDisableAnimation,
                            t.slideSize),
                          I = t.slideTraySize,
                          be = (t.spinner, t.style),
                          me = (t.totalSlides, t.touchEnabled),
                          y = t.trayProps,
                          oe = t.trayTag,
                          fe = t.visibleSlides,
                          F = t.isIntrinsicHeight,
                          A = k(t, Jt),
                          ge = f({}, be),
                          L = {};
                        v === "vertical" &&
                          ((L.height = 0),
                          (L.paddingBottom = P((100 * E * fe) / j)),
                          (L.width = P(100)));
                        var R = {},
                          Be = P(M * h * -1);
                        (this.state.isBeingTouchDragged ||
                          this.state.isBeingMouseDragged ||
                          S) &&
                          (R.transition = "none"),
                          F &&
                            ((R.display = "flex"), (R.alignItems = "stretch")),
                          v === "vertical"
                            ? ((R.transform = "translateY("
                                .concat(Be, ") translateY(")
                                .concat(this.state.deltaY, "px)")),
                              (R.width = P(100)),
                              (R.flexDirection = "column"))
                            : ((R.width = P(I)),
                              (R.transform = "translateX("
                                .concat(Be, ") translateX(")
                                .concat(this.state.deltaX, "px)")),
                              (R.flexDirection = "row"));
                        var sn = g([
                            v === "vertical"
                              ? D.verticalSlider
                              : D.horizontalSlider,
                            !me && D.touchDisabled,
                            "carousel__slider",
                            v === "vertical"
                              ? "carousel__slider--vertical"
                              : "carousel__slider--horizontal",
                            l,
                          ]),
                          an = g([
                            D.sliderTrayWrap,
                            "carousel__slider-tray-wrapper",
                            v === "vertical"
                              ? D.verticalSlideTrayWrap
                              : D.horizontalTrayWrap,
                            v === "vertical"
                              ? "carousel__slider-tray-wrap--vertical"
                              : "carousel__slider-tray-wrap--horizontal",
                            b,
                          ]),
                          on = g([
                            D.sliderTray,
                            c || D.sliderAnimation,
                            "carousel__slider-tray",
                            v === "vertical"
                              ? D.verticalTray
                              : D.horizontalTray,
                            v === "vertical"
                              ? "carousel__slider-tray--vertical"
                              : "carousel__slider-tray--horizontal",
                            u,
                          ]),
                          ln =
                            (A.dragStep,
                            A.step,
                            A.infinite,
                            A.preventVerticalScrollOnTouch,
                            A.preventingVerticalScroll,
                            A.horizontalPixelThreshold,
                            A.verticalPixelThreshold,
                            k(A, en)),
                          cn =
                            (y.className,
                            y.onClickCapture,
                            y.onMouseDown,
                            y.onTouchCancel,
                            y.onTouchEnd,
                            y.onTouchMove,
                            y.onTouchStart,
                            y.ref,
                            y.style,
                            k(y, tn));
                        return d.createElement(
                          "div",
                          f(
                            {
                              ref: function (un) {
                                e.sliderElement = un;
                              },
                              className: sn,
                              "aria-live": "polite",
                              "aria-label": a,
                              role: this.props.role,
                              style: ge,
                              onKeyDown: this.handleOnKeyDown,
                            },
                            ln,
                          ),
                          d.createElement(
                            "div",
                            { className: an, style: L },
                            d.createElement(
                              oe,
                              f(
                                {
                                  ref: this.getSliderRef,
                                  className: on,
                                  style: R,
                                  onTouchStart: this.handleOnTouchStart,
                                  onTouchMove: this.handleOnTouchMove,
                                  onTouchEnd: this.handleOnTouchEnd,
                                  onTouchCancel: this.handleOnTouchCancel,
                                  onMouseDown: this.handleOnMouseDown,
                                  onClickCapture: this.handleOnClickCapture,
                                },
                                cn,
                              ),
                              o,
                            ),
                            this.renderMasterSpinner(),
                          ),
                        );
                      },
                    },
                  ],
                  [
                    {
                      key: "slideSizeInPx",
                      value: function (e, t, a, o) {
                        return (e === "horizontal" ? t : a) / o;
                      },
                    },
                    {
                      key: "slidesMoved",
                      value: function (e, t, a, o, l, c) {
                        var u = t === "horizontal" ? a : o,
                          b = Math.abs(Math.round(u / l)),
                          h = Math.abs(u) >= l * e ? c : 0,
                          S = Math.max(h, b);
                        if (u < 0) return S;
                        var E = -S;
                        return E === 0 ? 0 : E;
                      },
                    },
                  ],
                ),
                i
              );
            })(d.Component)),
            m(ae, "propTypes", {
              ariaLabel: r.string,
              carouselStore: r.object.isRequired,
              children: r.node.isRequired,
              className: r.string,
              classNameAnimation: r.string,
              classNameTray: r.string,
              classNameTrayWrap: r.string,
              currentSlide: r.number.isRequired,
              disableAnimation: r.bool,
              disableKeyboard: r.bool,
              dragEnabled: r.bool.isRequired,
              dragStep: r.number,
              hasMasterSpinner: r.bool.isRequired,
              infinite: r.bool,
              interval: r.number.isRequired,
              isPageScrollLocked: r.bool.isRequired,
              isPlaying: r.bool.isRequired,
              lockOnWindowScroll: r.bool.isRequired,
              preventVerticalScrollOnTouch: r.bool,
              horizontalPixelThreshold: r.number,
              verticalPixelThreshold: r.number,
              masterSpinnerFinished: r.bool.isRequired,
              moveThreshold: r.number,
              naturalSlideHeight: r.number.isRequired,
              naturalSlideWidth: r.number.isRequired,
              onMasterSpinner: r.func,
              orientation: T.orientation.isRequired,
              playDirection: T.direction.isRequired,
              privateUnDisableAnimation: r.bool,
              role: r.string,
              slideSize: r.number.isRequired,
              slideTraySize: r.number.isRequired,
              spinner: r.func,
              step: r.number.isRequired,
              style: r.object,
              totalSlides: r.number.isRequired,
              touchEnabled: r.bool.isRequired,
              trayProps: r.shape({
                className: r.string,
                onClickCapture: r.func,
                onMouseDown: r.func,
                onTouchCancel: r.func,
                onTouchEnd: r.func,
                onTouchMove: r.func,
                onTouchStart: r.func,
                ref: r.shape({}),
                style: r.string,
              }),
              trayTag: r.string,
              visibleSlides: r.number,
              isIntrinsicHeight: r.bool,
            }),
            m(ae, "defaultProps", {
              ariaLabel: "slider",
              className: null,
              classNameAnimation: null,
              classNameTray: null,
              classNameTrayWrap: null,
              disableAnimation: !1,
              disableKeyboard: !1,
              dragStep: 1,
              infinite: !1,
              preventVerticalScrollOnTouch: !0,
              horizontalPixelThreshold: 15,
              verticalPixelThreshold: 10,
              moveThreshold: 0.1,
              onMasterSpinner: null,
              privateUnDisableAnimation: !1,
              role: "listbox",
              spinner: null,
              style: {},
              trayProps: {},
              trayTag: "div",
              visibleSlides: 1,
              isIntrinsicHeight: !1,
            }),
            ae),
          rn = x(nn, function (n) {
            return {
              currentSlide: n.currentSlide,
              disableAnimation: n.disableAnimation,
              privateUnDisableAnimation: n.privateUnDisableAnimation,
              disableKeyboard: n.disableKeyboard,
              dragEnabled: n.dragEnabled,
              hasMasterSpinner: n.hasMasterSpinner,
              infinite: n.infinite,
              interval: n.interval,
              isPageScrollLocked: n.isPageScrollLocked,
              isPlaying: n.isPlaying,
              lockOnWindowScroll: n.lockOnWindowScroll,
              preventingVerticalScroll: n.preventingVerticalScroll,
              masterSpinnerFinished: n.masterSpinnerFinished,
              naturalSlideHeight: n.naturalSlideHeight,
              naturalSlideWidth: n.naturalSlideWidth,
              orientation: n.orientation,
              playDirection: n.playDirection,
              slideSize: n.slideSize,
              slideTraySize: n.slideTraySize,
              step: n.step,
              dragStep: n.dragStep,
              totalSlides: n.totalSlides,
              touchEnabled: n.touchEnabled,
              visibleSlides: n.visibleSlides,
              isIntrinsicHeight: n.isIntrinsicHeight,
            };
          });
      },
    },
  ]);
})();
