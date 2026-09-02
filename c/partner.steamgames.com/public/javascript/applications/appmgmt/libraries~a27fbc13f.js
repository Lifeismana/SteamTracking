"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [1997],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ["x1", "y1", "x2", "y2", "key"],
          _ = ["offset"];
        function _(_) {
          "@babel/helpers - typeof";
          return (
            (_ =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (_) {
                    return typeof _;
                  }
                : function (_) {
                    return _ &&
                      typeof Symbol == "function" &&
                      _.constructor === Symbol &&
                      _ !== Symbol.prototype
                      ? "symbol"
                      : typeof _;
                  }),
            _(_)
          );
        }
        function _(_, _) {
          var _ = Object.keys(_);
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(_);
            _ &&
              (_ = _.filter(function (_) {
                return Object.getOwnPropertyDescriptor(_, _).enumerable;
              })),
              _.push.apply(_, _);
          }
          return _;
        }
        function _(_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_] != null ? arguments[_] : {};
            _ % 2
              ? _(Object(_), !0).forEach(function (_) {
                  _(_, _, _[_]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    _,
                    Object.getOwnPropertyDescriptors(_),
                  )
                : _(Object(_)).forEach(function (_) {
                    Object.defineProperty(
                      _,
                      _,
                      Object.getOwnPropertyDescriptor(_, _),
                    );
                  });
          }
          return _;
        }
        function _(_, _, _) {
          return (
            (_ = _(_)),
            _ in _
              ? Object.defineProperty(_, _, {
                  value: _,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (_[_] = _),
            _
          );
        }
        function _(_) {
          var _ = _(_, "string");
          return _(_) == "symbol" ? _ : _ + "";
        }
        function _(_, _) {
          if (_(_) != "object" || !_) return _;
          var _ = _[Symbol.toPrimitive];
          if (_ !== void 0) {
            var _ = _.call(_, _ || "default");
            if (_(_) != "object") return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (_ === "string" ? String : Number)(_);
        }
        function _() {
          return (
            (_ = Object.assign
              ? Object.assign.bind()
              : function (_) {
                  for (var _ = 1; _ < arguments.length; _++) {
                    var _ = arguments[_];
                    for (var _ in _)
                      Object.prototype.hasOwnProperty.call(_, _) &&
                        (_[_] = _[_]);
                  }
                  return _;
                }),
            _.apply(this, arguments)
          );
        }
        function _(_, _) {
          if (_ == null) return {};
          var _ = _(_, _),
            _,
            _;
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(_);
            for (_ = 0; _ < _.length; _++)
              (_ = _[_]),
                !(_.indexOf(_) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(_, _) &&
                  (_[_] = _[_]);
          }
          return _;
        }
        function _(_, _) {
          if (_ == null) return {};
          var _ = {};
          for (var _ in _)
            if (Object.prototype.hasOwnProperty.call(_, _)) {
              if (_.indexOf(_) >= 0) continue;
              _[_] = _[_];
            }
          return _;
        }
        var _ = function (_) {
          var _ = _.fill;
          if (!_ || _ === "none") return null;
          var _ = _.fillOpacity,
            _ = _._,
            _ = _._,
            _ = _.width,
            _ = _.height,
            _ = _._;
          return _.createElement("rect", {
            _: _,
            _: _,
            _: _,
            width: _,
            height: _,
            stroke: "none",
            fill: _,
            fillOpacity: _,
            className: "recharts-cartesian-grid-bg",
          });
        };
        function _(_, _) {
          var _;
          if (_.isValidElement(_)) _ = _.cloneElement(_, _);
          else if (_()(_)) _ = _(_);
          else {
            var _ = _._,
              _ = _._,
              _ = _._,
              _ = _._,
              _ = _.key,
              _ = _(_, _),
              _ = (0, _._)(_, !1),
              _ = _.offset,
              _ = _(_, _);
            _ = _.createElement(
              "line",
              _({}, _, {
                _: _,
                _: _,
                _: _,
                _: _,
                fill: "none",
                key: _,
              }),
            );
          }
          return _;
        }
        function _(_) {
          var _ = _._,
            _ = _.width,
            _ = _.horizontal,
            _ = _ === void 0 ? !0 : _,
            _ = _.horizontalPoints;
          if (!_ || !_ || !_.length) return null;
          var _ = _.map(function (_, _) {
            var _ = _(
              _({}, _),
              {},
              {
                _: _,
                _: _,
                _: _ + _,
                _: _,
                key: "line-".concat(_),
                index: _,
              },
            );
            return _(_, _);
          });
          return _.createElement(
            "g",
            {
              className: "recharts-cartesian-grid-horizontal",
            },
            _,
          );
        }
        function _(_) {
          var _ = _._,
            _ = _.height,
            _ = _.vertical,
            _ = _ === void 0 ? !0 : _,
            _ = _.verticalPoints;
          if (!_ || !_ || !_.length) return null;
          var _ = _.map(function (_, _) {
            var _ = _(
              _({}, _),
              {},
              {
                _: _,
                _: _,
                _: _,
                _: _ + _,
                key: "line-".concat(_),
                index: _,
              },
            );
            return _(_, _);
          });
          return _.createElement(
            "g",
            {
              className: "recharts-cartesian-grid-vertical",
            },
            _,
          );
        }
        function _(_) {
          var _ = _.horizontalFill,
            _ = _.fillOpacity,
            _ = _._,
            _ = _._,
            _ = _.width,
            _ = _.height,
            _ = _.horizontalPoints,
            _ = _.horizontal,
            _ = _ === void 0 ? !0 : _;
          if (!_ || !_ || !_.length) return null;
          var _ = _.map(function (_) {
            return Math.round(_ + _ - _);
          }).sort(function (_, _) {
            return _ - _;
          });
          _ !== _[0] && _.unshift(0);
          var _ = _.map(function (_, _) {
            var _ = !_[_ + 1],
              _ = _ ? _ + _ - _ : _[_ + 1] - _;
            if (_ <= 0) return null;
            var _ = _ % _.length;
            return _.createElement("rect", {
              key: "react-".concat(_),
              _: _,
              _: _,
              height: _,
              width: _,
              stroke: "none",
              fill: _[_],
              fillOpacity: _,
              className: "recharts-cartesian-grid-bg",
            });
          });
          return _.createElement(
            "g",
            {
              className: "recharts-cartesian-gridstripes-horizontal",
            },
            _,
          );
        }
        function _(_) {
          var _ = _.vertical,
            _ = _ === void 0 ? !0 : _,
            _ = _.verticalFill,
            _ = _.fillOpacity,
            _ = _._,
            _ = _._,
            _ = _.width,
            _ = _.height,
            _ = _.verticalPoints;
          if (!_ || !_ || !_.length) return null;
          var _ = _.map(function (_) {
            return Math.round(_ + _ - _);
          }).sort(function (_, _) {
            return _ - _;
          });
          _ !== _[0] && _.unshift(0);
          var _ = _.map(function (_, _) {
            var _ = !_[_ + 1],
              _ = _ ? _ + _ - _ : _[_ + 1] - _;
            if (_ <= 0) return null;
            var _ = _ % _.length;
            return _.createElement("rect", {
              key: "react-".concat(_),
              _: _,
              _: _,
              width: _,
              height: _,
              stroke: "none",
              fill: _[_],
              fillOpacity: _,
              className: "recharts-cartesian-grid-bg",
            });
          });
          return _.createElement(
            "g",
            {
              className: "recharts-cartesian-gridstripes-vertical",
            },
            _,
          );
        }
        var _ = function (_, _) {
            var _ = _.xAxis,
              _ = _.width,
              _ = _.height,
              _ = _.offset;
            return (0, _._)(
              (0, _._)(
                _(
                  _(_({}, _._.defaultProps), _),
                  {},
                  {
                    ticks: (0, _._)(_, !0),
                    viewBox: {
                      _: 0,
                      _: 0,
                      width: _,
                      height: _,
                    },
                  },
                ),
              ),
              _.left,
              _.left + _.width,
              _,
            );
          },
          _ = function (_, _) {
            var _ = _.yAxis,
              _ = _.width,
              _ = _.height,
              _ = _.offset;
            return (0, _._)(
              (0, _._)(
                _(
                  _(_({}, _._.defaultProps), _),
                  {},
                  {
                    ticks: (0, _._)(_, !0),
                    viewBox: {
                      _: 0,
                      _: 0,
                      width: _,
                      height: _,
                    },
                  },
                ),
              ),
              _.top,
              _.top + _.height,
              _,
            );
          },
          _ = {
            horizontal: !0,
            vertical: !0,
            horizontalPoints: [],
            verticalPoints: [],
            stroke: "#ccc",
            fill: "none",
            verticalFill: [],
            horizontalFill: [],
          };
        function _(_) {
          var _,
            _,
            _,
            _,
            _,
            _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _(
              _({}, _),
              {},
              {
                stroke: (_ = _.stroke) !== null && _ !== void 0 ? _ : _.stroke,
                fill: (_ = _.fill) !== null && _ !== void 0 ? _ : _.fill,
                horizontal:
                  (_ = _.horizontal) !== null && _ !== void 0
                    ? _
                    : _.horizontal,
                horizontalFill:
                  (_ = _.horizontalFill) !== null && _ !== void 0
                    ? _
                    : _.horizontalFill,
                vertical:
                  (_ = _.vertical) !== null && _ !== void 0 ? _ : _.vertical,
                verticalFill:
                  (_ = _.verticalFill) !== null && _ !== void 0
                    ? _
                    : _.verticalFill,
                _: (0, _._)(_._) ? _._ : _.left,
                _: (0, _._)(_._) ? _._ : _.top,
                width: (0, _._)(_.width) ? _.width : _.width,
                height: (0, _._)(_.height) ? _.height : _.height,
              },
            ),
            _ = _._,
            _ = _._,
            _ = _.width,
            _ = _.height,
            _ = _.syncWithTicks,
            _ = _.horizontalValues,
            _ = _.verticalValues,
            _ = (0, _._)(),
            _ = (0, _._)();
          if (
            !(0, _._)(_) ||
            _ <= 0 ||
            !(0, _._)(_) ||
            _ <= 0 ||
            !(0, _._)(_) ||
            _ !== +_ ||
            !(0, _._)(_) ||
            _ !== +_
          )
            return null;
          var _ = _.verticalCoordinatesGenerator || _,
            _ = _.horizontalCoordinatesGenerator || _,
            _ = _.horizontalPoints,
            _ = _.verticalPoints;
          if ((!_ || !_.length) && _()(_)) {
            var _ = _ && _.length,
              _ = _(
                {
                  yAxis: _
                    ? _(
                        _({}, _),
                        {},
                        {
                          ticks: _ ? _ : _.ticks,
                        },
                      )
                    : void 0,
                  width: _,
                  height: _,
                  offset: _,
                },
                _ ? !0 : _,
              );
            (0, _._)(
              Array.isArray(_),
              "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(
                _(_),
                "]",
              ),
            ),
              Array.isArray(_) && (_ = _);
          }
          if ((!_ || !_.length) && _()(_)) {
            var _ = _ && _.length,
              _ = _(
                {
                  xAxis: _
                    ? _(
                        _({}, _),
                        {},
                        {
                          ticks: _ ? _ : _.ticks,
                        },
                      )
                    : void 0,
                  width: _,
                  height: _,
                  offset: _,
                },
                _ ? !0 : _,
              );
            (0, _._)(
              Array.isArray(_),
              "verticalCoordinatesGenerator should return Array but instead it returned [".concat(
                _(_),
                "]",
              ),
            ),
              Array.isArray(_) && (_ = _);
          }
          return _.createElement(
            "g",
            {
              className: "recharts-cartesian-grid",
            },
            _.createElement(_, {
              fill: _.fill,
              fillOpacity: _.fillOpacity,
              _: _._,
              _: _._,
              width: _.width,
              height: _.height,
              _: _._,
            }),
            _.createElement(
              _,
              _({}, _, {
                offset: _,
                horizontalPoints: _,
                xAxis: _,
                yAxis: _,
              }),
            ),
            _.createElement(
              _,
              _({}, _, {
                offset: _,
                verticalPoints: _,
                xAxis: _,
                yAxis: _,
              }),
            ),
            _.createElement(
              _,
              _({}, _, {
                horizontalPoints: _,
              }),
            ),
            _.createElement(
              _,
              _({}, _, {
                verticalPoints: _,
              }),
            ),
          );
        }
        _.displayName = "CartesianGrid";
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"],
          _ = ["key"],
          _;
        function _(_) {
          "@babel/helpers - typeof";
          return (
            (_ =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (_) {
                    return typeof _;
                  }
                : function (_) {
                    return _ &&
                      typeof Symbol == "function" &&
                      _.constructor === Symbol &&
                      _ !== Symbol.prototype
                      ? "symbol"
                      : typeof _;
                  }),
            _(_)
          );
        }
        function _(_, _) {
          if (_ == null) return {};
          var _ = _(_, _),
            _,
            _;
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(_);
            for (_ = 0; _ < _.length; _++)
              (_ = _[_]),
                !(_.indexOf(_) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(_, _) &&
                  (_[_] = _[_]);
          }
          return _;
        }
        function _(_, _) {
          if (_ == null) return {};
          var _ = {};
          for (var _ in _)
            if (Object.prototype.hasOwnProperty.call(_, _)) {
              if (_.indexOf(_) >= 0) continue;
              _[_] = _[_];
            }
          return _;
        }
        function _() {
          return (
            (_ = Object.assign
              ? Object.assign.bind()
              : function (_) {
                  for (var _ = 1; _ < arguments.length; _++) {
                    var _ = arguments[_];
                    for (var _ in _)
                      Object.prototype.hasOwnProperty.call(_, _) &&
                        (_[_] = _[_]);
                  }
                  return _;
                }),
            _.apply(this, arguments)
          );
        }
        function _(_, _) {
          var _ = Object.keys(_);
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(_);
            _ &&
              (_ = _.filter(function (_) {
                return Object.getOwnPropertyDescriptor(_, _).enumerable;
              })),
              _.push.apply(_, _);
          }
          return _;
        }
        function _(_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_] != null ? arguments[_] : {};
            _ % 2
              ? _(Object(_), !0).forEach(function (_) {
                  _(_, _, _[_]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    _,
                    Object.getOwnPropertyDescriptors(_),
                  )
                : _(Object(_)).forEach(function (_) {
                    Object.defineProperty(
                      _,
                      _,
                      Object.getOwnPropertyDescriptor(_, _),
                    );
                  });
          }
          return _;
        }
        function _(_, _) {
          if (!(_ instanceof _))
            throw new TypeError("Cannot call a class as a function");
        }
        function _(_, _) {
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_];
            (_.enumerable = _.enumerable || !1),
              (_.configurable = !0),
              "value" in _ && (_.writable = !0),
              Object.defineProperty(_, _(_.key), _);
          }
        }
        function _(_, _, _) {
          return (
            _ && _(_.prototype, _),
            _ && _(_, _),
            Object.defineProperty(_, "prototype", {
              writable: !1,
            }),
            _
          );
        }
        function _(_, _, _) {
          return (
            (_ = _(_)),
            _(
              _,
              _()
                ? Reflect.construct(_, _ || [], _(_).constructor)
                : _.apply(_, _),
            )
          );
        }
        function _(_, _) {
          if (_ && (_(_) === "object" || typeof _ == "function")) return _;
          if (_ !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return _(_);
        }
        function _(_) {
          if (_ === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return _;
        }
        function _() {
          try {
            var _ = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (_ = function () {
            return !!_;
          })();
        }
        function _(_) {
          return (
            (_ = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (_) {
                  return _.__proto__ || Object.getPrototypeOf(_);
                }),
            _(_)
          );
        }
        function _(_, _) {
          if (typeof _ != "function" && _ !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (_.prototype = Object.create(_ && _.prototype, {
            constructor: {
              value: _,
              writable: !0,
              configurable: !0,
            },
          })),
            Object.defineProperty(_, "prototype", {
              writable: !1,
            }),
            _ && _(_, _);
        }
        function _(_, _) {
          return (
            (_ = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (_, _) {
                  return (_.__proto__ = _), _;
                }),
            _(_, _)
          );
        }
        function _(_, _, _) {
          return (
            (_ = _(_)),
            _ in _
              ? Object.defineProperty(_, _, {
                  value: _,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (_[_] = _),
            _
          );
        }
        function _(_) {
          var _ = _(_, "string");
          return _(_) == "symbol" ? _ : _ + "";
        }
        function _(_, _) {
          if (_(_) != "object" || !_) return _;
          var _ = _[Symbol.toPrimitive];
          if (_ !== void 0) {
            var _ = _.call(_, _ || "default");
            if (_(_) != "object") return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (_ === "string" ? String : Number)(_);
        }
        var _ = (function (_) {
          function _() {
            var _;
            _(this, _);
            for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
              _[_] = arguments[_];
            return (
              (_ = _(this, _, [].concat(_))),
              _(_, "state", {
                isAnimationFinished: !0,
              }),
              _(_, "id", (0, _._)("recharts-area-")),
              _(_, "handleAnimationEnd", function () {
                var _ = _.props.onAnimationEnd;
                _.setState({
                  isAnimationFinished: !0,
                }),
                  _()(_) && _();
              }),
              _(_, "handleAnimationStart", function () {
                var _ = _.props.onAnimationStart;
                _.setState({
                  isAnimationFinished: !1,
                }),
                  _()(_) && _();
              }),
              _
            );
          }
          return (
            _(_, _),
            _(
              _,
              [
                {
                  key: "renderDots",
                  value: function (_, _, _) {
                    var _ = this.props.isAnimationActive,
                      _ = this.state.isAnimationFinished;
                    if (_ && !_) return null;
                    var _ = this.props,
                      _ = _.dot,
                      _ = _.points,
                      _ = _.dataKey,
                      _ = (0, _._)(this.props, !1),
                      _ = (0, _._)(_, !0),
                      _ = _.map(function (_, _) {
                        var _ = _(
                          _(
                            _(
                              {
                                key: "dot-".concat(_),
                                _: 3,
                              },
                              _,
                            ),
                            _,
                          ),
                          {},
                          {
                            index: _,
                            _: _._,
                            _: _._,
                            dataKey: _,
                            value: _.value,
                            payload: _.payload,
                            points: _,
                          },
                        );
                        return _.renderDotItem(_, _);
                      }),
                      _ = {
                        clipPath: _
                          ? "url(#clipPath-"
                              .concat(_ ? "" : "dots-")
                              .concat(_, ")")
                          : null,
                      };
                    return _.createElement(
                      _._,
                      _(
                        {
                          className: "recharts-area-dots",
                        },
                        _,
                      ),
                      _,
                    );
                  },
                },
                {
                  key: "renderHorizontalRect",
                  value: function (_) {
                    var _ = this.props,
                      _ = _.baseLine,
                      _ = _.points,
                      _ = _.strokeWidth,
                      _ = _[0]._,
                      _ = _[_.length - 1]._,
                      _ = _ * Math.abs(_ - _),
                      _ = _()(
                        _.map(function (_) {
                          return _._ || 0;
                        }),
                      );
                    return (
                      (0, _._)(_) && typeof _ == "number"
                        ? (_ = Math.max(_, _))
                        : _ &&
                          Array.isArray(_) &&
                          _.length &&
                          (_ = Math.max(
                            _()(
                              _.map(function (_) {
                                return _._ || 0;
                              }),
                            ),
                            _,
                          )),
                      (0, _._)(_)
                        ? _.createElement("rect", {
                            _: _ < _ ? _ : _ - _,
                            _: 0,
                            width: _,
                            height: Math.floor(
                              _ + (_ ? parseInt("".concat(_), 10) : 1),
                            ),
                          })
                        : null
                    );
                  },
                },
                {
                  key: "renderVerticalRect",
                  value: function (_) {
                    var _ = this.props,
                      _ = _.baseLine,
                      _ = _.points,
                      _ = _.strokeWidth,
                      _ = _[0]._,
                      _ = _[_.length - 1]._,
                      _ = _ * Math.abs(_ - _),
                      _ = _()(
                        _.map(function (_) {
                          return _._ || 0;
                        }),
                      );
                    return (
                      (0, _._)(_) && typeof _ == "number"
                        ? (_ = Math.max(_, _))
                        : _ &&
                          Array.isArray(_) &&
                          _.length &&
                          (_ = Math.max(
                            _()(
                              _.map(function (_) {
                                return _._ || 0;
                              }),
                            ),
                            _,
                          )),
                      (0, _._)(_)
                        ? _.createElement("rect", {
                            _: 0,
                            _: _ < _ ? _ : _ - _,
                            width: _ + (_ ? parseInt("".concat(_), 10) : 1),
                            height: Math.floor(_),
                          })
                        : null
                    );
                  },
                },
                {
                  key: "renderClipRect",
                  value: function (_) {
                    var _ = this.props.layout;
                    return _ === "vertical"
                      ? this.renderVerticalRect(_)
                      : this.renderHorizontalRect(_);
                  },
                },
                {
                  key: "renderAreaStatically",
                  value: function (_, _, _, _) {
                    var _ = this.props,
                      _ = _.layout,
                      _ = _.type,
                      _ = _.stroke,
                      _ = _.connectNulls,
                      _ = _.isRange,
                      _ = _.ref,
                      _ = _(_, _);
                    return _.createElement(
                      _._,
                      {
                        clipPath: _ ? "url(#clipPath-".concat(_, ")") : null,
                      },
                      _.createElement(
                        _._,
                        _({}, (0, _._)(_, !0), {
                          points: _,
                          connectNulls: _,
                          type: _,
                          baseLine: _,
                          layout: _,
                          stroke: "none",
                          className: "recharts-area-area",
                        }),
                      ),
                      _ !== "none" &&
                        _.createElement(
                          _._,
                          _({}, (0, _._)(this.props, !1), {
                            className: "recharts-area-curve",
                            layout: _,
                            type: _,
                            connectNulls: _,
                            fill: "none",
                            points: _,
                          }),
                        ),
                      _ !== "none" &&
                        _ &&
                        _.createElement(
                          _._,
                          _({}, (0, _._)(this.props, !1), {
                            className: "recharts-area-curve",
                            layout: _,
                            type: _,
                            connectNulls: _,
                            fill: "none",
                            points: _,
                          }),
                        ),
                    );
                  },
                },
                {
                  key: "renderAreaWithAnimation",
                  value: function (_, _) {
                    var _ = this,
                      _ = this.props,
                      _ = _.points,
                      _ = _.baseLine,
                      _ = _.isAnimationActive,
                      _ = _.animationBegin,
                      _ = _.animationDuration,
                      _ = _.animationEasing,
                      _ = _.animationId,
                      _ = this.state,
                      _ = _.prevPoints,
                      _ = _.prevBaseLine;
                    return _.createElement(
                      _._,
                      {
                        begin: _,
                        duration: _,
                        isActive: _,
                        easing: _,
                        from: {
                          _: 0,
                        },
                        _: {
                          _: 1,
                        },
                        key: "area-".concat(_),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (_) {
                        var _ = _._;
                        if (_) {
                          var _ = _.length / _.length,
                            _ = _.map(function (_, _) {
                              var _ = Math.floor(_ * _);
                              if (_[_]) {
                                var _ = _[_],
                                  _ = (0, _._)(_._, _._),
                                  _ = (0, _._)(_._, _._);
                                return _(
                                  _({}, _),
                                  {},
                                  {
                                    _: _(_),
                                    _: _(_),
                                  },
                                );
                              }
                              return _;
                            }),
                            _;
                          if ((0, _._)(_) && typeof _ == "number") {
                            var _ = (0, _._)(_, _);
                            _ = _(_);
                          } else if (_()(_) || _()(_)) {
                            var _ = (0, _._)(_, 0);
                            _ = _(_);
                          } else
                            _ = _.map(function (_, _) {
                              var _ = Math.floor(_ * _);
                              if (_[_]) {
                                var _ = _[_],
                                  _ = (0, _._)(_._, _._),
                                  _ = (0, _._)(_._, _._);
                                return _(
                                  _({}, _),
                                  {},
                                  {
                                    _: _(_),
                                    _: _(_),
                                  },
                                );
                              }
                              return _;
                            });
                          return _.renderAreaStatically(_, _, _, _);
                        }
                        return _.createElement(
                          _._,
                          null,
                          _.createElement(
                            "defs",
                            null,
                            _.createElement(
                              "clipPath",
                              {
                                _: "animationClipPath-".concat(_),
                              },
                              _.renderClipRect(_),
                            ),
                          ),
                          _.createElement(
                            _._,
                            {
                              clipPath: "url(#animationClipPath-".concat(
                                _,
                                ")",
                              ),
                            },
                            _.renderAreaStatically(_, _, _, _),
                          ),
                        );
                      },
                    );
                  },
                },
                {
                  key: "renderArea",
                  value: function (_, _) {
                    var _ = this.props,
                      _ = _.points,
                      _ = _.baseLine,
                      _ = _.isAnimationActive,
                      _ = this.state,
                      _ = _.prevPoints,
                      _ = _.prevBaseLine,
                      _ = _.totalLength;
                    return _ &&
                      _ &&
                      _.length &&
                      ((!_ && _ > 0) || !_()(_, _) || !_()(_, _))
                      ? this.renderAreaWithAnimation(_, _)
                      : this.renderAreaStatically(_, _, _, _);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _,
                      _ = this.props,
                      _ = _.hide,
                      _ = _.dot,
                      _ = _.points,
                      _ = _.className,
                      _ = _.top,
                      _ = _.left,
                      _ = _.xAxis,
                      _ = _.yAxis,
                      _ = _.width,
                      _ = _.height,
                      _ = _.isAnimationActive,
                      _ = _._;
                    if (_ || !_ || !_.length) return null;
                    var _ = this.state.isAnimationFinished,
                      _ = _.length === 1,
                      _ = (0, _._)("recharts-area", _),
                      _ = _ && _.allowDataOverflow,
                      _ = _ && _.allowDataOverflow,
                      _ = _ || _,
                      _ = _()(_) ? this._ : _,
                      _ =
                        (_ = (0, _._)(_, !1)) !== null && _ !== void 0
                          ? _
                          : {
                              _: 3,
                              strokeWidth: 2,
                            },
                      _ = _._,
                      _ = _ === void 0 ? 3 : _,
                      _ = _.strokeWidth,
                      _ = _ === void 0 ? 2 : _,
                      _ = (0, _._)(_) ? _ : {},
                      _ = _.clipDot,
                      _ = _ === void 0 ? !0 : _,
                      _ = _ * 2 + _;
                    return _.createElement(
                      _._,
                      {
                        className: _,
                      },
                      _ || _
                        ? _.createElement(
                            "defs",
                            null,
                            _.createElement(
                              "clipPath",
                              {
                                _: "clipPath-".concat(_),
                              },
                              _.createElement("rect", {
                                _: _ ? _ : _ - _ / 2,
                                _: _ ? _ : _ - _ / 2,
                                width: _ ? _ : _ * 2,
                                height: _ ? _ : _ * 2,
                              }),
                            ),
                            !_ &&
                              _.createElement(
                                "clipPath",
                                {
                                  _: "clipPath-dots-".concat(_),
                                },
                                _.createElement("rect", {
                                  _: _ - _ / 2,
                                  _: _ - _ / 2,
                                  width: _ + _,
                                  height: _ + _,
                                }),
                              ),
                          )
                        : null,
                      _ ? null : this.renderArea(_, _),
                      (_ || _) && this.renderDots(_, _, _),
                      (!_ || _) && _._.renderCallByParent(this.props, _),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (_, _) {
                    return _.animationId !== _.prevAnimationId
                      ? {
                          prevAnimationId: _.animationId,
                          curPoints: _.points,
                          curBaseLine: _.baseLine,
                          prevPoints: _.curPoints,
                          prevBaseLine: _.curBaseLine,
                        }
                      : _.points !== _.curPoints || _.baseLine !== _.curBaseLine
                        ? {
                            curPoints: _.points,
                            curBaseLine: _.baseLine,
                          }
                        : null;
                  },
                },
              ],
            )
          );
        })(_.PureComponent);
        (_ = _),
          _(_, "displayName", "Area"),
          _(_, "defaultProps", {
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
            isAnimationActive: !_._.isSsr,
            animationBegin: 0,
            animationDuration: 1500,
            animationEasing: "ease",
          }),
          _(_, "getBaseValue", function (_, _, _, _) {
            var _ = _.layout,
              _ = _.baseValue,
              _ = _.props.baseValue,
              _ = _ ?? _;
            if ((0, _._)(_) && typeof _ == "number") return _;
            var _ = _ === "horizontal" ? _ : _,
              _ = _.scale.domain();
            if (_.type === "number") {
              var _ = Math.max(_[0], _[1]),
                _ = Math.min(_[0], _[1]);
              return _ === "dataMin"
                ? _
                : _ === "dataMax" || _ < 0
                  ? _
                  : Math.max(Math.min(_[0], _[1]), 0);
            }
            return _ === "dataMin" ? _[0] : _ === "dataMax" ? _[1] : _[0];
          }),
          _(_, "getComposedData", function (_) {
            var _ = _.props,
              _ = _.item,
              _ = _.xAxis,
              _ = _.yAxis,
              _ = _.xAxisTicks,
              _ = _.yAxisTicks,
              _ = _.bandSize,
              _ = _.dataKey,
              _ = _.stackedData,
              _ = _.dataStartIndex,
              _ = _.displayedData,
              _ = _.offset,
              _ = _.layout,
              _ = _ && _.length,
              _ = _.getBaseValue(_, _, _, _),
              _ = _ === "horizontal",
              _ = !1,
              _ = _.map(function (_, _) {
                var _;
                _
                  ? (_ = _[_ + _])
                  : ((_ = (0, _._)(_, _)),
                    Array.isArray(_) ? (_ = !0) : (_ = [_, _]));
                var _ = _[1] == null || (_ && (0, _._)(_, _) == null);
                return _
                  ? {
                      _: (0, _._)({
                        axis: _,
                        ticks: _,
                        bandSize: _,
                        entry: _,
                        index: _,
                      }),
                      _: _ ? null : _.scale(_[1]),
                      value: _,
                      payload: _,
                    }
                  : {
                      _: _ ? null : _.scale(_[1]),
                      _: (0, _._)({
                        axis: _,
                        ticks: _,
                        bandSize: _,
                        entry: _,
                        index: _,
                      }),
                      value: _,
                      payload: _,
                    };
              }),
              _;
            return (
              _ || _
                ? (_ = _.map(function (_) {
                    var _ = Array.isArray(_.value) ? _.value[0] : null;
                    return _
                      ? {
                          _: _._,
                          _: _ != null && _._ != null ? _.scale(_) : null,
                        }
                      : {
                          _: _ != null ? _.scale(_) : null,
                          _: _._,
                        };
                  }))
                : (_ = _ ? _.scale(_) : _.scale(_)),
              _(
                {
                  points: _,
                  baseLine: _,
                  layout: _,
                  isRange: _,
                },
                _,
              )
            );
          }),
          _(_, "renderDotItem", function (_, _) {
            var _;
            if (_.isValidElement(_)) _ = _.cloneElement(_, _);
            else if (_()(_)) _ = _(_);
            else {
              var _ = (0, _._)(
                  "recharts-area-dot",
                  typeof _ != "boolean" ? _.className : "",
                ),
                _ = _.key,
                _ = _(_, _);
              _ = _.createElement(
                _._,
                _({}, _, {
                  key: _,
                  className: _,
                }),
              );
            }
            return _;
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          "@babel/helpers - typeof";
          return (
            (_ =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (_) {
                    return typeof _;
                  }
                : function (_) {
                    return _ &&
                      typeof Symbol == "function" &&
                      _.constructor === Symbol &&
                      _ !== Symbol.prototype
                      ? "symbol"
                      : typeof _;
                  }),
            _(_)
          );
        }
        function _(_, _) {
          if (!(_ instanceof _))
            throw new TypeError("Cannot call a class as a function");
        }
        function _(_, _) {
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_];
            (_.enumerable = _.enumerable || !1),
              (_.configurable = !0),
              "value" in _ && (_.writable = !0),
              Object.defineProperty(_, _(_.key), _);
          }
        }
        function _(_, _, _) {
          return (
            _ && _(_.prototype, _),
            _ && _(_, _),
            Object.defineProperty(_, "prototype", {
              writable: !1,
            }),
            _
          );
        }
        function _(_, _, _) {
          return (
            (_ = _(_)),
            _(
              _,
              _()
                ? Reflect.construct(_, _ || [], _(_).constructor)
                : _.apply(_, _),
            )
          );
        }
        function _(_, _) {
          if (_ && (_(_) === "object" || typeof _ == "function")) return _;
          if (_ !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return _(_);
        }
        function _(_) {
          if (_ === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return _;
        }
        function _() {
          try {
            var _ = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (_ = function () {
            return !!_;
          })();
        }
        function _(_) {
          return (
            (_ = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (_) {
                  return _.__proto__ || Object.getPrototypeOf(_);
                }),
            _(_)
          );
        }
        function _(_, _) {
          if (typeof _ != "function" && _ !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (_.prototype = Object.create(_ && _.prototype, {
            constructor: {
              value: _,
              writable: !0,
              configurable: !0,
            },
          })),
            Object.defineProperty(_, "prototype", {
              writable: !1,
            }),
            _ && _(_, _);
        }
        function _(_, _) {
          return (
            (_ = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (_, _) {
                  return (_.__proto__ = _), _;
                }),
            _(_, _)
          );
        }
        function _(_, _, _) {
          return (
            (_ = _(_)),
            _ in _
              ? Object.defineProperty(_, _, {
                  value: _,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (_[_] = _),
            _
          );
        }
        function _(_) {
          var _ = _(_, "string");
          return _(_) == "symbol" ? _ : _ + "";
        }
        function _(_, _) {
          if (_(_) != "object" || !_) return _;
          var _ = _[Symbol.toPrimitive];
          if (_ !== void 0) {
            var _ = _.call(_, _ || "default");
            if (_(_) != "object") return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (_ === "string" ? String : Number)(_);
        }
        var _ = (function (_) {
          function _() {
            return _(this, _), _(this, _, arguments);
          }
          return (
            _(_, _),
            _(_, [
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ])
          );
        })(_.Component);
        _(_, "displayName", "ZAxis"),
          _(_, "defaultProps", {
            zAxisId: 0,
            range: [64, 64],
            scale: "auto",
            type: "number",
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ["option", "isActive"];
        function _() {
          return (
            (_ = Object.assign
              ? Object.assign.bind()
              : function (_) {
                  for (var _ = 1; _ < arguments.length; _++) {
                    var _ = arguments[_];
                    for (var _ in _)
                      Object.prototype.hasOwnProperty.call(_, _) &&
                        (_[_] = _[_]);
                  }
                  return _;
                }),
            _.apply(this, arguments)
          );
        }
        function _(_, _) {
          if (_ == null) return {};
          var _ = _(_, _),
            _,
            _;
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(_);
            for (_ = 0; _ < _.length; _++)
              (_ = _[_]),
                !(_.indexOf(_) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(_, _) &&
                  (_[_] = _[_]);
          }
          return _;
        }
        function _(_, _) {
          if (_ == null) return {};
          var _ = {};
          for (var _ in _)
            if (Object.prototype.hasOwnProperty.call(_, _)) {
              if (_.indexOf(_) >= 0) continue;
              _[_] = _[_];
            }
          return _;
        }
        function _(_) {
          var _ = _.option,
            _ = _.isActive,
            _ = _(_, _);
          return typeof _ == "string"
            ? _.createElement(
                _._,
                _(
                  {
                    option: _.createElement(
                      _._,
                      _(
                        {
                          type: _,
                        },
                        _,
                      ),
                    ),
                    isActive: _,
                    shapeType: "symbols",
                  },
                  _,
                ),
              )
            : _.createElement(
                _._,
                _(
                  {
                    option: _,
                    isActive: _,
                    shapeType: "symbols",
                  },
                  _,
                ),
              );
        }
        var _;
        function _(_) {
          "@babel/helpers - typeof";
          return (
            (_ =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (_) {
                    return typeof _;
                  }
                : function (_) {
                    return _ &&
                      typeof Symbol == "function" &&
                      _.constructor === Symbol &&
                      _ !== Symbol.prototype
                      ? "symbol"
                      : typeof _;
                  }),
            _(_)
          );
        }
        function _() {
          return (
            (_ = Object.assign
              ? Object.assign.bind()
              : function (_) {
                  for (var _ = 1; _ < arguments.length; _++) {
                    var _ = arguments[_];
                    for (var _ in _)
                      Object.prototype.hasOwnProperty.call(_, _) &&
                        (_[_] = _[_]);
                  }
                  return _;
                }),
            _.apply(this, arguments)
          );
        }
        function _(_, _) {
          var _ = Object.keys(_);
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(_);
            _ &&
              (_ = _.filter(function (_) {
                return Object.getOwnPropertyDescriptor(_, _).enumerable;
              })),
              _.push.apply(_, _);
          }
          return _;
        }
        function _(_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_] != null ? arguments[_] : {};
            _ % 2
              ? _(Object(_), !0).forEach(function (_) {
                  _(_, _, _[_]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    _,
                    Object.getOwnPropertyDescriptors(_),
                  )
                : _(Object(_)).forEach(function (_) {
                    Object.defineProperty(
                      _,
                      _,
                      Object.getOwnPropertyDescriptor(_, _),
                    );
                  });
          }
          return _;
        }
        function _(_, _) {
          if (!(_ instanceof _))
            throw new TypeError("Cannot call a class as a function");
        }
        function _(_, _) {
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_];
            (_.enumerable = _.enumerable || !1),
              (_.configurable = !0),
              "value" in _ && (_.writable = !0),
              Object.defineProperty(_, _(_.key), _);
          }
        }
        function _(_, _, _) {
          return (
            _ && _(_.prototype, _),
            _ && _(_, _),
            Object.defineProperty(_, "prototype", {
              writable: !1,
            }),
            _
          );
        }
        function _(_, _, _) {
          return (
            (_ = _(_)),
            _(
              _,
              _()
                ? Reflect.construct(_, _ || [], _(_).constructor)
                : _.apply(_, _),
            )
          );
        }
        function _(_, _) {
          if (_ && (_(_) === "object" || typeof _ == "function")) return _;
          if (_ !== void 0)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return _(_);
        }
        function _(_) {
          if (_ === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return _;
        }
        function _() {
          try {
            var _ = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch {}
          return (_ = function () {
            return !!_;
          })();
        }
        function _(_) {
          return (
            (_ = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (_) {
                  return _.__proto__ || Object.getPrototypeOf(_);
                }),
            _(_)
          );
        }
        function _(_, _) {
          if (typeof _ != "function" && _ !== null)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (_.prototype = Object.create(_ && _.prototype, {
            constructor: {
              value: _,
              writable: !0,
              configurable: !0,
            },
          })),
            Object.defineProperty(_, "prototype", {
              writable: !1,
            }),
            _ && _(_, _);
        }
        function _(_, _) {
          return (
            (_ = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (_, _) {
                  return (_.__proto__ = _), _;
                }),
            _(_, _)
          );
        }
        function _(_, _, _) {
          return (
            (_ = _(_)),
            _ in _
              ? Object.defineProperty(_, _, {
                  value: _,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (_[_] = _),
            _
          );
        }
        function _(_) {
          var _ = _(_, "string");
          return _(_) == "symbol" ? _ : _ + "";
        }
        function _(_, _) {
          if (_(_) != "object" || !_) return _;
          var _ = _[Symbol.toPrimitive];
          if (_ !== void 0) {
            var _ = _.call(_, _ || "default");
            if (_(_) != "object") return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (_ === "string" ? String : Number)(_);
        }
        var _ = (function (_) {
          function _() {
            var _;
            _(this, _);
            for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
              _[_] = arguments[_];
            return (
              (_ = _(this, _, [].concat(_))),
              _(_, "state", {
                isAnimationFinished: !1,
              }),
              _(_, "handleAnimationEnd", function () {
                _.setState({
                  isAnimationFinished: !0,
                });
              }),
              _(_, "handleAnimationStart", function () {
                _.setState({
                  isAnimationFinished: !1,
                });
              }),
              _(_, "id", (0, _._)("recharts-scatter-")),
              _
            );
          }
          return (
            _(_, _),
            _(
              _,
              [
                {
                  key: "renderSymbolsStatically",
                  value: function (_) {
                    var _ = this,
                      _ = this.props,
                      _ = _.shape,
                      _ = _.activeShape,
                      _ = _.activeIndex,
                      _ = (0, _._)(this.props, !1);
                    return _.map(function (_, _) {
                      var _ = _ === _,
                        _ = _ ? _ : _,
                        _ = _(_({}, _), _);
                      return _.createElement(
                        _._,
                        _(
                          {
                            className: "recharts-scatter-symbol",
                            key: "symbol-"
                              .concat(_?._, "-")
                              .concat(_?._, "-")
                              .concat(_?.size, "-")
                              .concat(_),
                          },
                          (0, _._)(_.props, _, _),
                          {
                            role: "img",
                          },
                        ),
                        _.createElement(
                          _,
                          _(
                            {
                              option: _,
                              isActive: _,
                              key: "symbol-".concat(_),
                            },
                            _,
                          ),
                        ),
                      );
                    });
                  },
                },
                {
                  key: "renderSymbolsWithAnimation",
                  value: function () {
                    var _ = this,
                      _ = this.props,
                      _ = _.points,
                      _ = _.isAnimationActive,
                      _ = _.animationBegin,
                      _ = _.animationDuration,
                      _ = _.animationEasing,
                      _ = _.animationId,
                      _ = this.state.prevPoints;
                    return _.createElement(
                      _._,
                      {
                        begin: _,
                        duration: _,
                        isActive: _,
                        easing: _,
                        from: {
                          _: 0,
                        },
                        _: {
                          _: 1,
                        },
                        key: "pie-".concat(_),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart,
                      },
                      function (_) {
                        var _ = _._,
                          _ = _.map(function (_, _) {
                            var _ = _ && _[_];
                            if (_) {
                              var _ = (0, _._)(_._, _._),
                                _ = (0, _._)(_._, _._),
                                _ = (0, _._)(_.size, _.size);
                              return _(
                                _({}, _),
                                {},
                                {
                                  _: _(_),
                                  _: _(_),
                                  size: _(_),
                                },
                              );
                            }
                            var _ = (0, _._)(0, _.size);
                            return _(
                              _({}, _),
                              {},
                              {
                                size: _(_),
                              },
                            );
                          });
                        return _.createElement(
                          _._,
                          null,
                          _.renderSymbolsStatically(_),
                        );
                      },
                    );
                  },
                },
                {
                  key: "renderSymbols",
                  value: function () {
                    var _ = this.props,
                      _ = _.points,
                      _ = _.isAnimationActive,
                      _ = this.state.prevPoints;
                    return _ && _ && _.length && (!_ || !_()(_, _))
                      ? this.renderSymbolsWithAnimation()
                      : this.renderSymbolsStatically(_);
                  },
                },
                {
                  key: "renderErrorBar",
                  value: function () {
                    var _ = this.props.isAnimationActive;
                    if (_ && !this.state.isAnimationFinished) return null;
                    var _ = this.props,
                      _ = _.points,
                      _ = _.xAxis,
                      _ = _.yAxis,
                      _ = _.children,
                      _ = (0, _._)(_, _._);
                    return _
                      ? _.map(function (_, _) {
                          var _ = _.props,
                            _ = _.direction,
                            _ = _.dataKey;
                          return _.cloneElement(_, {
                            key: "".concat(_, "-").concat(_, "-").concat(_[_]),
                            data: _,
                            xAxis: _,
                            yAxis: _,
                            layout: _ === "x" ? "vertical" : "horizontal",
                            dataPointFormatter: function (_, _) {
                              return {
                                _: _._,
                                _: _._,
                                value: _ === "x" ? +_.node._ : +_.node._,
                                errorVal: (0, _._)(_, _),
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
                    var _ = this.props,
                      _ = _.points,
                      _ = _.line,
                      _ = _.lineType,
                      _ = _.lineJointType,
                      _ = (0, _._)(this.props, !1),
                      _ = (0, _._)(_, !1),
                      _,
                      _;
                    if (_ === "joint")
                      _ = _.map(function (_) {
                        return {
                          _: _._,
                          _: _._,
                        };
                      });
                    else if (_ === "fitting") {
                      var _ = (0, _._)(_),
                        _ = _.xmin,
                        _ = _.xmax,
                        _ = _._,
                        _ = _._,
                        _ = function (_) {
                          return _ * _ + _;
                        };
                      _ = [
                        {
                          _: _,
                          _: _(_),
                        },
                        {
                          _: _,
                          _: _(_),
                        },
                      ];
                    }
                    var _ = _(
                      _(
                        _({}, _),
                        {},
                        {
                          fill: "none",
                          stroke: _ && _.fill,
                        },
                        _,
                      ),
                      {},
                      {
                        points: _,
                      },
                    );
                    return (
                      _.isValidElement(_)
                        ? (_ = _.cloneElement(_, _))
                        : _()(_)
                          ? (_ = _(_))
                          : (_ = _.createElement(
                              _._,
                              _({}, _, {
                                type: _,
                              }),
                            )),
                      _.createElement(
                        _._,
                        {
                          className: "recharts-scatter-line",
                          key: "recharts-scatter-line",
                        },
                        _,
                      )
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var _ = this.props,
                      _ = _.hide,
                      _ = _.points,
                      _ = _.line,
                      _ = _.className,
                      _ = _.xAxis,
                      _ = _.yAxis,
                      _ = _.left,
                      _ = _.top,
                      _ = _.width,
                      _ = _.height,
                      _ = _._,
                      _ = _.isAnimationActive;
                    if (_ || !_ || !_.length) return null;
                    var _ = this.state.isAnimationFinished,
                      _ = (0, _._)("recharts-scatter", _),
                      _ = _ && _.allowDataOverflow,
                      _ = _ && _.allowDataOverflow,
                      _ = _ || _,
                      _ = _()(_) ? this._ : _;
                    return _.createElement(
                      _._,
                      {
                        className: _,
                        clipPath: _ ? "url(#clipPath-".concat(_, ")") : null,
                      },
                      _ || _
                        ? _.createElement(
                            "defs",
                            null,
                            _.createElement(
                              "clipPath",
                              {
                                _: "clipPath-".concat(_),
                              },
                              _.createElement("rect", {
                                _: _ ? _ : _ - _ / 2,
                                _: _ ? _ : _ - _ / 2,
                                width: _ ? _ : _ * 2,
                                height: _ ? _ : _ * 2,
                              }),
                            ),
                          )
                        : null,
                      _ && this.renderLine(),
                      this.renderErrorBar(),
                      _.createElement(
                        _._,
                        {
                          key: "recharts-scatter-symbols",
                        },
                        this.renderSymbols(),
                      ),
                      (!_ || _) && _._.renderCallByParent(this.props, _),
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (_, _) {
                    return _.animationId !== _.prevAnimationId
                      ? {
                          prevAnimationId: _.animationId,
                          curPoints: _.points,
                          prevPoints: _.curPoints,
                        }
                      : _.points !== _.curPoints
                        ? {
                            curPoints: _.points,
                          }
                        : null;
                  },
                },
              ],
            )
          );
        })(_.PureComponent);
        (_ = _),
          _(_, "displayName", "Scatter"),
          _(_, "defaultProps", {
            xAxisId: 0,
            yAxisId: 0,
            zAxisId: 0,
            legendType: "circle",
            lineType: "joint",
            lineJointType: "linear",
            data: [],
            shape: "circle",
            hide: !1,
            isAnimationActive: !_._.isSsr,
            animationBegin: 0,
            animationDuration: 400,
            animationEasing: "linear",
          }),
          _(_, "getComposedData", function (_) {
            var _ = _.xAxis,
              _ = _.yAxis,
              _ = _.zAxis,
              _ = _.item,
              _ = _.displayedData,
              _ = _.xAxisTicks,
              _ = _.yAxisTicks,
              _ = _.offset,
              _ = _.props.tooltipType,
              _ = (0, _._)(_.props.children, _._),
              _ = _()(_.dataKey) ? _.props.dataKey : _.dataKey,
              _ = _()(_.dataKey) ? _.props.dataKey : _.dataKey,
              _ = _ && _.dataKey,
              _ = _ ? _.range : _.defaultProps.range,
              _ = _ && _[0],
              _ = _.scale.bandwidth ? _.scale.bandwidth() : 0,
              _ = _.scale.bandwidth ? _.scale.bandwidth() : 0,
              _ = _.map(function (_, _) {
                var _ = (0, _._)(_, _),
                  _ = (0, _._)(_, _),
                  _ = (!_()(_) && (0, _._)(_, _)) || "-",
                  _ = [
                    {
                      name: _()(_.dataKey) ? _.props.name : _.name || _.dataKey,
                      unit: _.unit || "",
                      value: _,
                      payload: _,
                      dataKey: _,
                      type: _,
                    },
                    {
                      name: _()(_.dataKey) ? _.props.name : _.name || _.dataKey,
                      unit: _.unit || "",
                      value: _,
                      payload: _,
                      dataKey: _,
                      type: _,
                    },
                  ];
                _ !== "-" &&
                  _.push({
                    name: _.name || _.dataKey,
                    unit: _.unit || "",
                    value: _,
                    payload: _,
                    dataKey: _,
                    type: _,
                  });
                var _ = (0, _._)({
                    axis: _,
                    ticks: _,
                    bandSize: _,
                    entry: _,
                    index: _,
                    dataKey: _,
                  }),
                  _ = (0, _._)({
                    axis: _,
                    ticks: _,
                    bandSize: _,
                    entry: _,
                    index: _,
                    dataKey: _,
                  }),
                  _ = _ !== "-" ? _.scale(_) : _,
                  _ = Math.sqrt(Math.max(_, 0) / Math._);
                return _(
                  _({}, _),
                  {},
                  {
                    _: _,
                    _: _,
                    _: _ - _,
                    _: _ - _,
                    xAxis: _,
                    yAxis: _,
                    zAxis: _,
                    width: 2 * _,
                    height: 2 * _,
                    size: _,
                    node: {
                      _: _,
                      _: _,
                      _: _,
                    },
                    tooltipPayload: _,
                    tooltipPosition: {
                      _: _,
                      _: _,
                    },
                    payload: _,
                  },
                  _ && _[_] && _[_].props,
                );
              });
            return _(
              {
                points: _,
              },
              _,
            );
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = (0, _._)({
            chartName: "ComposedChart",
            GraphicalChild: [_._, _, _._, _],
            axisComponents: [
              {
                axisType: "xAxis",
                AxisComp: _._,
              },
              {
                axisType: "yAxis",
                AxisComp: _._,
              },
              {
                axisType: "zAxis",
                AxisComp: _,
              },
            ],
            formatAxisMap: _._,
          });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          "@babel/helpers - typeof";
          return (
            (_ =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (_) {
                    return typeof _;
                  }
                : function (_) {
                    return _ &&
                      typeof Symbol == "function" &&
                      _.constructor === Symbol &&
                      _ !== Symbol.prototype
                      ? "symbol"
                      : typeof _;
                  }),
            _(_)
          );
        }
        function _(_, _) {
          var _ = Object.keys(_);
          if (Object.getOwnPropertySymbols) {
            var _ = Object.getOwnPropertySymbols(_);
            _ &&
              (_ = _.filter(function (_) {
                return Object.getOwnPropertyDescriptor(_, _).enumerable;
              })),
              _.push.apply(_, _);
          }
          return _;
        }
        function _(_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_] != null ? arguments[_] : {};
            _ % 2
              ? _(Object(_), !0).forEach(function (_) {
                  _(_, _, _[_]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    _,
                    Object.getOwnPropertyDescriptors(_),
                  )
                : _(Object(_)).forEach(function (_) {
                    Object.defineProperty(
                      _,
                      _,
                      Object.getOwnPropertyDescriptor(_, _),
                    );
                  });
          }
          return _;
        }
        function _(_, _, _) {
          return (
            (_ = _(_)),
            _ in _
              ? Object.defineProperty(_, _, {
                  value: _,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (_[_] = _),
            _
          );
        }
        function _(_) {
          var _ = _(_, "string");
          return _(_) == "symbol" ? _ : _ + "";
        }
        function _(_, _) {
          if (_(_) != "object" || !_) return _;
          var _ = _[Symbol.toPrimitive];
          if (_ !== void 0) {
            var _ = _.call(_, _ || "default");
            if (_(_) != "object") return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (_ === "string" ? String : Number)(_);
        }
        function _(_, _) {
          return _(_) || _(_, _) || _(_, _) || _();
        }
        function _() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function _(_, _) {
          if (_) {
            if (typeof _ == "string") return _(_, _);
            var _ = Object.prototype.toString.call(_).slice(8, -1);
            if (
              (_ === "Object" && _.constructor && (_ = _.constructor.name),
              _ === "Map" || _ === "Set")
            )
              return Array.from(_);
            if (
              _ === "Arguments" ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
            )
              return _(_, _);
          }
        }
        function _(_, _) {
          (_ == null || _ > _.length) && (_ = _.length);
          for (var _ = 0, _ = new Array(_); _ < _; _++) _[_] = _[_];
          return _;
        }
        function _(_, _) {
          var _ =
            _ == null
              ? null
              : (typeof Symbol < "u" && _[Symbol.iterator]) || _["@@iterator"];
          if (_ != null) {
            var _,
              _,
              _,
              _,
              _ = [],
              _ = !0,
              _ = !1;
            try {
              if (((_ = (_ = _.call(_)).next), _ === 0)) {
                if (Object(_) !== _) return;
                _ = !1;
              } else
                for (
                  ;
                  !(_ = (_ = _.call(_)).done) &&
                  (_.push(_.value), _.length !== _);
                  _ = !0
                );
            } catch (_) {
              (_ = !0), (_ = _);
            } finally {
              try {
                if (
                  !_ &&
                  _.return != null &&
                  ((_ = _.return()), Object(_) !== _)
                )
                  return;
              } finally {
                if (_) throw _;
              }
            }
            return _;
          }
        }
        function _(_) {
          if (Array.isArray(_)) return _;
        }
        var _ = (0, _.forwardRef)(function (_, _) {
          var _ = _.aspect,
            _ = _.initialDimension,
            _ =
              _ === void 0
                ? {
                    width: -1,
                    height: -1,
                  }
                : _,
            _ = _.width,
            _ = _ === void 0 ? "100%" : _,
            _ = _.height,
            _ = _ === void 0 ? "100%" : _,
            _ = _.minWidth,
            _ = _ === void 0 ? 0 : _,
            _ = _.minHeight,
            _ = _.maxHeight,
            _ = _.children,
            _ = _.debounce,
            _ = _ === void 0 ? 0 : _,
            _ = _._,
            _ = _.className,
            _ = _.onResize,
            _ = _.style,
            _ = _ === void 0 ? {} : _,
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)();
          (_.current = _),
            (0, _.useImperativeHandle)(_, function () {
              return Object.defineProperty(_.current, "current", {
                get: function () {
                  return (
                    console.warn(
                      "The usage of ref.current.current is deprecated and will no longer be supported.",
                    ),
                    _.current
                  );
                },
                configurable: !0,
              });
            });
          var _ = (0, _.useState)({
              containerWidth: _.width,
              containerHeight: _.height,
            }),
            _ = _(_, 2),
            _ = _[0],
            _ = _[1],
            _ = (0, _.useCallback)(function (_, _) {
              _(function (_) {
                var _ = Math.round(_),
                  _ = Math.round(_);
                return _.containerWidth === _ && _.containerHeight === _
                  ? _
                  : {
                      containerWidth: _,
                      containerHeight: _,
                    };
              });
            }, []);
          (0, _.useEffect)(
            function () {
              var _ = function (_) {
                var _,
                  _ = _[0].contentRect,
                  _ = _.width,
                  _ = _.height;
                _(_, _),
                  (_ = _.current) === null || _ === void 0 || _.call(_, _, _);
              };
              _ > 0 &&
                (_ = _()(_, _, {
                  trailing: !0,
                  leading: !1,
                }));
              var _ = new ResizeObserver(_),
                _ = _.current.getBoundingClientRect(),
                _ = _.width,
                _ = _.height;
              return (
                _(_, _),
                _.observe(_.current),
                function () {
                  _.disconnect();
                }
              );
            },
            [_, _],
          );
          var _ = (0, _.useMemo)(
            function () {
              var _ = _.containerWidth,
                _ = _.containerHeight;
              if (_ < 0 || _ < 0) return null;
              (0, _._)(
                (0, _._)(_) || (0, _._)(_),
                `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
                _,
                _,
              ),
                (0, _._)(
                  !_ || _ > 0,
                  "The aspect(%s) must be greater than zero.",
                  _,
                );
              var _ = (0, _._)(_) ? _ : _,
                _ = (0, _._)(_) ? _ : _;
              _ &&
                _ > 0 &&
                (_ ? (_ = _ / _) : _ && (_ = _ * _), _ && _ > _ && (_ = _)),
                (0, _._)(
                  _ > 0 || _ > 0,
                  `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
                  _,
                  _,
                  _,
                  _,
                  _,
                  _,
                  _,
                );
              var _ = !Array.isArray(_) && (0, _._)(_.type).endsWith("Chart");
              return _.Children.map(_, function (_) {
                return _.isValidElement(_)
                  ? (0, _.cloneElement)(
                      _,
                      _(
                        {
                          width: _,
                          height: _,
                        },
                        _
                          ? {
                              style: _(
                                {
                                  height: "100%",
                                  width: "100%",
                                  maxHeight: _,
                                  maxWidth: _,
                                },
                                _.props.style,
                              ),
                            }
                          : {},
                      ),
                    )
                  : _;
              });
            },
            [_, _, _, _, _, _, _, _],
          );
          return _.createElement(
            "div",
            {
              _: _ ? "".concat(_) : void 0,
              className: (0, _._)("recharts-responsive-container", _),
              style: _(
                _({}, _),
                {},
                {
                  width: _,
                  height: _,
                  minWidth: _,
                  minHeight: _,
                  maxHeight: _,
                },
              ),
              ref: _,
            },
            _,
          );
        });
      },
    },
  ]);
})();
