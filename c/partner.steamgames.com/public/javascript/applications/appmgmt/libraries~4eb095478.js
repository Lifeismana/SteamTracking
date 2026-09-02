"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [1784],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = _.createContext(null);
        const _ = null;
        function _(_) {
          _();
        }
        var _ = _,
          _ = function (_) {
            return (_ = _);
          },
          _ = function () {
            return _;
          };
        function _() {
          var _ = _(),
            _ = null,
            _ = null;
          return {
            clear: function () {
              (_ = null), (_ = null);
            },
            notify: function () {
              _(function () {
                for (var _ = _; _; ) _.callback(), (_ = _.next);
              });
            },
            get: function () {
              for (var _ = [], _ = _; _; ) _.push(_), (_ = _.next);
              return _;
            },
            subscribe: function (_) {
              var _ = !0,
                _ = (_ = {
                  callback: _,
                  next: null,
                  prev: _,
                });
              return (
                _.prev ? (_.prev.next = _) : (_ = _),
                function () {
                  !_ ||
                    _ === null ||
                    ((_ = !1),
                    _.next ? (_.next.prev = _.prev) : (_ = _.prev),
                    _.prev ? (_.prev.next = _.next) : (_ = _.next));
                }
              );
            },
          };
        }
        var _ = {
          notify: function () {},
          get: function () {
            return [];
          },
        };
        function _(_, _) {
          var _,
            _ = _;
          function _(_) {
            return _(), _.subscribe(_);
          }
          function _() {
            _.notify();
          }
          function _() {
            _.onStateChange && _.onStateChange();
          }
          function _() {
            return !!_;
          }
          function _() {
            _ || ((_ = _ ? _.addNestedSub(_) : _.subscribe(_)), (_ = _()));
          }
          function _() {
            _ && (_(), (_ = void 0), _.clear(), (_ = _));
          }
          var _ = {
            addNestedSub: _,
            notifyNestedSubs: _,
            handleChangeWrapper: _,
            isSubscribed: _,
            trySubscribe: _,
            tryUnsubscribe: _,
            getListeners: function () {
              return _;
            },
          };
          return _;
        }
        var _ =
          typeof window < "u" &&
          typeof window.document < "u" &&
          typeof window.document.createElement < "u"
            ? _.useLayoutEffect
            : _.useEffect;
        function _(_) {
          var _ = _.store,
            _ = _.context,
            _ = _.children,
            _ = (0, _.useMemo)(
              function () {
                var _ = _(_);
                return {
                  store: _,
                  subscription: _,
                };
              },
              [_],
            ),
            _ = (0, _.useMemo)(
              function () {
                return _.getState();
              },
              [_],
            );
          _(
            function () {
              var _ = _.subscription;
              return (
                (_.onStateChange = _.notifyNestedSubs),
                _.trySubscribe(),
                _ !== _.getState() && _.notifyNestedSubs(),
                function () {
                  _.tryUnsubscribe(), (_.onStateChange = null);
                }
              );
            },
            [_, _],
          );
          var _ = _ || _;
          return _.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        const _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = [
            "getDisplayName",
            "methodName",
            "renderCountProp",
            "shouldHandleStateChanges",
            "storeKey",
            "withRef",
            "forwardRef",
            "context",
          ],
          _ = ["reactReduxForwardedRef"],
          _ = [],
          _ = [null, null],
          _ = function (_) {
            try {
              return JSON.stringify(_);
            } catch {
              return String(_);
            }
          };
        function _(_, _) {
          var _ = _[1];
          return [_.payload, _ + 1];
        }
        function _(_, _, _) {
          _(function () {
            return _.apply(void 0, _);
          }, _);
        }
        function _(_, _, _, _, _, _, _) {
          (_.current = _),
            (_.current = _),
            (_.current = !1),
            _.current && ((_.current = null), _());
        }
        function _(_, _, _, _, _, _, _, _, _, _) {
          if (_) {
            var _ = !1,
              _ = null,
              _ = function () {
                if (!_) {
                  var _ = _.getState(),
                    _,
                    _;
                  try {
                    _ = _(_, _.current);
                  } catch (_) {
                    (_ = _), (_ = _);
                  }
                  _ || (_ = null),
                    _ === _.current
                      ? _.current || _()
                      : ((_.current = _),
                        (_.current = _),
                        (_.current = !0),
                        _({
                          type: "STORE_UPDATED",
                          payload: {
                            error: _,
                          },
                        }));
                }
              };
            (_.onStateChange = _), _.trySubscribe(), _();
            var _ = function () {
              if (((_ = !0), _.tryUnsubscribe(), (_.onStateChange = null), _))
                throw _;
            };
            return _;
          }
        }
        var _ = function () {
          return [null, 0];
        };
        function _(_, _) {
          _ === void 0 && (_ = {});
          var _ = _,
            _ = _.getDisplayName,
            _ =
              _ === void 0
                ? function (_) {
                    return "ConnectAdvanced(" + _ + ")";
                  }
                : _,
            _ = _.methodName,
            _ = _ === void 0 ? "connectAdvanced" : _,
            _ = _.renderCountProp,
            _ = _ === void 0 ? void 0 : _,
            _ = _.shouldHandleStateChanges,
            _ = _ === void 0 ? !0 : _,
            _ = _.storeKey,
            _ = _ === void 0 ? "store" : _,
            _ = _.withRef,
            _ = _ === void 0 ? !1 : _,
            _ = _.forwardRef,
            _ = _ === void 0 ? !1 : _,
            _ = _.context,
            _ = _ === void 0 ? _ : _,
            _ = (0, _._)(_, _);
          if (0) var _;
          var _ = _;
          return function (_) {
            var _ = _.displayName || _.name || "Component",
              _ = _(_),
              _ = (0, _._)({}, _, {
                getDisplayName: _,
                methodName: _,
                renderCountProp: _,
                shouldHandleStateChanges: _,
                storeKey: _,
                displayName: _,
                wrappedComponentName: _,
                WrappedComponent: _,
              }),
              _ = _.pure;
            function _(_) {
              return _(_.dispatch, _);
            }
            var _ = _
              ? _.useMemo
              : function (_) {
                  return _();
                };
            function _(_) {
              var _ = (0, _.useMemo)(
                  function () {
                    var _ = _.reactReduxForwardedRef,
                      _ = (0, _._)(_, _);
                    return [_.context, _, _];
                  },
                  [_],
                ),
                _ = _[0],
                _ = _[1],
                _ = _[2],
                _ = (0, _.useMemo)(
                  function () {
                    return _ &&
                      _.Consumer &&
                      (0, _.isContextConsumer)(
                        _.createElement(_.Consumer, null),
                      )
                      ? _
                      : _;
                  },
                  [_, _],
                ),
                _ = (0, _.useContext)(_),
                _ = !!_.store && !!_.store.getState && !!_.store.dispatch,
                _ = !!_ && !!_.store,
                _ = _ ? _.store : _.store,
                _ = (0, _.useMemo)(
                  function () {
                    return _(_);
                  },
                  [_],
                ),
                _ = (0, _.useMemo)(
                  function () {
                    if (!_) return _;
                    var _ = _(_, _ ? null : _.subscription),
                      _ = _.notifyNestedSubs.bind(_);
                    return [_, _];
                  },
                  [_, _, _],
                ),
                _ = _[0],
                _ = _[1],
                _ = (0, _.useMemo)(
                  function () {
                    return _
                      ? _
                      : (0, _._)({}, _, {
                          subscription: _,
                        });
                  },
                  [_, _, _],
                ),
                _ = (0, _.useReducer)(_, _, _),
                _ = _[0],
                _ = _[0],
                _ = _[1];
              if (_ && _.error) throw _.error;
              var _ = (0, _.useRef)(),
                _ = (0, _.useRef)(_),
                _ = (0, _.useRef)(),
                _ = (0, _.useRef)(!1),
                _ = _(
                  function () {
                    return _.current && _ === _.current
                      ? _.current
                      : _(_.getState(), _);
                  },
                  [_, _, _],
                );
              _(_, [_, _, _, _, _, _, _]),
                _(_, [_, _, _, _, _, _, _, _, _, _], [_, _, _]);
              var _ = (0, _.useMemo)(
                  function () {
                    return _.createElement(
                      _,
                      (0, _._)({}, _, {
                        ref: _,
                      }),
                    );
                  },
                  [_, _, _],
                ),
                _ = (0, _.useMemo)(
                  function () {
                    return _
                      ? _.createElement(
                          _.Provider,
                          {
                            value: _,
                          },
                          _,
                        )
                      : _;
                  },
                  [_, _, _],
                );
              return _;
            }
            var _ = _ ? _.memo(_) : _;
            if (
              ((_.WrappedComponent = _), (_.displayName = _.displayName = _), _)
            ) {
              var _ = _.forwardRef(function (_, _) {
                return _.createElement(
                  _,
                  (0, _._)({}, _, {
                    reactReduxForwardedRef: _,
                  }),
                );
              });
              return (_.displayName = _), (_.WrappedComponent = _), _()(_, _);
            }
            return _()(_, _);
          };
        }
        function _(_, _) {
          return _ === _
            ? _ !== 0 || _ !== 0 || 1 / _ === 1 / _
            : _ !== _ && _ !== _;
        }
        function _(_, _) {
          if (_(_, _)) return !0;
          if (
            typeof _ != "object" ||
            _ === null ||
            typeof _ != "object" ||
            _ === null
          )
            return !1;
          var _ = Object.keys(_),
            _ = Object.keys(_);
          if (_.length !== _.length) return !1;
          for (var _ = 0; _ < _.length; _++)
            if (
              !Object.prototype.hasOwnProperty.call(_, _[_]) ||
              !_(_[_[_]], _[_[_]])
            )
              return !1;
          return !0;
        }
        function _(_, _) {
          var _ = {},
            _ = function (_) {
              var _ = _[_];
              typeof _ == "function" &&
                (_[_] = function () {
                  return _(_.apply(void 0, arguments));
                });
            };
          for (var _ in _) _(_);
          return _;
        }
        function _(_) {
          return function (_, _) {
            var _ = _(_, _);
            function _() {
              return _;
            }
            return (_.dependsOnOwnProps = !1), _;
          };
        }
        function _(_) {
          return _.dependsOnOwnProps !== null && _.dependsOnOwnProps !== void 0
            ? !!_.dependsOnOwnProps
            : _.length !== 1;
        }
        function _(_, _) {
          return function (_, _) {
            var _ = _.displayName,
              _ = function (_, _) {
                return _.dependsOnOwnProps
                  ? _.mapToProps(_, _)
                  : _.mapToProps(_);
              };
            return (
              (_.dependsOnOwnProps = !0),
              (_.mapToProps = function (_, _) {
                (_.mapToProps = _), (_.dependsOnOwnProps = _(_));
                var _ = _(_, _);
                return (
                  typeof _ == "function" &&
                    ((_.mapToProps = _),
                    (_.dependsOnOwnProps = _(_)),
                    (_ = _(_, _))),
                  _
                );
              }),
              _
            );
          };
        }
        function _(_) {
          return typeof _ == "function" ? _(_, "mapDispatchToProps") : void 0;
        }
        function _(_) {
          return _
            ? void 0
            : _(function (_) {
                return {
                  dispatch: _,
                };
              });
        }
        function _(_) {
          return _ && typeof _ == "object"
            ? _(function (_) {
                return _(_, _);
              })
            : void 0;
        }
        const _ = [_, _, _];
        function _(_) {
          return typeof _ == "function" ? _(_, "mapStateToProps") : void 0;
        }
        function _(_) {
          return _
            ? void 0
            : _(function () {
                return {};
              });
        }
        const _ = [_, _];
        function _(_, _, _) {
          return (0, _._)({}, _, _, _);
        }
        function _(_) {
          return function (_, _) {
            var _ = _.displayName,
              _ = _.pure,
              _ = _.areMergedPropsEqual,
              _ = !1,
              _;
            return function (_, _, _) {
              var _ = _(_, _, _);
              return _ ? (!_ || !_(_, _)) && (_ = _) : ((_ = !0), (_ = _)), _;
            };
          };
        }
        function _(_) {
          return typeof _ == "function" ? _(_) : void 0;
        }
        function _(_) {
          return _
            ? void 0
            : function () {
                return _;
              };
        }
        const _ = [_, _];
        var _ = [
          "initMapStateToProps",
          "initMapDispatchToProps",
          "initMergeProps",
        ];
        function _(_, _, _, _) {
          return function (_, _) {
            return _(_(_, _), _(_, _), _);
          };
        }
        function _(_, _, _, _, _) {
          var _ = _.areStatesEqual,
            _ = _.areOwnPropsEqual,
            _ = _.areStatePropsEqual,
            _ = !1,
            _,
            _,
            _,
            _,
            _;
          function _(_, _) {
            return (
              (_ = _),
              (_ = _),
              (_ = _(_, _)),
              (_ = _(_, _)),
              (_ = _(_, _, _)),
              (_ = !0),
              _
            );
          }
          function _() {
            return (
              (_ = _(_, _)),
              _.dependsOnOwnProps && (_ = _(_, _)),
              (_ = _(_, _, _)),
              _
            );
          }
          function _() {
            return (
              _.dependsOnOwnProps && (_ = _(_, _)),
              _.dependsOnOwnProps && (_ = _(_, _)),
              (_ = _(_, _, _)),
              _
            );
          }
          function _() {
            var _ = _(_, _),
              _ = !_(_, _);
            return (_ = _), _ && (_ = _(_, _, _)), _;
          }
          function _(_, _) {
            var _ = !_(_, _),
              _ = !_(_, _, _, _);
            return (_ = _), (_ = _), _ && _ ? _() : _ ? _() : _ ? _() : _;
          }
          return function (_, _) {
            return _ ? _(_, _) : _(_, _);
          };
        }
        function _(_, _) {
          var _ = _.initMapStateToProps,
            _ = _.initMapDispatchToProps,
            _ = _.initMergeProps,
            _ = (0, _._)(_, _),
            _ = _(_, _),
            _ = _(_, _),
            _ = _(_, _),
            _ = _.pure ? _ : _;
          return _(_, _, _, _, _);
        }
        var _ = [
          "pure",
          "areStatesEqual",
          "areOwnPropsEqual",
          "areStatePropsEqual",
          "areMergedPropsEqual",
        ];
        function _(_, _, _) {
          for (var _ = _.length - 1; _ >= 0; _--) {
            var _ = _[_](_);
            if (_) return _;
          }
          return function (_, _) {
            throw new Error(
              "Invalid value of type " +
                typeof _ +
                " for " +
                _ +
                " argument when connecting component " +
                _.wrappedComponentName +
                ".",
            );
          };
        }
        function _(_, _) {
          return _ === _;
        }
        function _(_) {
          var _ = _ === void 0 ? {} : _,
            _ = _.connectHOC,
            _ = _ === void 0 ? _ : _,
            _ = _.mapStateToPropsFactories,
            _ = _ === void 0 ? _ : _,
            _ = _.mapDispatchToPropsFactories,
            _ = _ === void 0 ? _ : _,
            _ = _.mergePropsFactories,
            _ = _ === void 0 ? _ : _,
            _ = _.selectorFactory,
            _ = _ === void 0 ? _ : _;
          return function (_, _, _, _) {
            _ === void 0 && (_ = {});
            var _ = _,
              _ = _.pure,
              _ = _ === void 0 ? !0 : _,
              _ = _.areStatesEqual,
              _ = _ === void 0 ? _ : _,
              _ = _.areOwnPropsEqual,
              _ = _ === void 0 ? _ : _,
              _ = _.areStatePropsEqual,
              _ = _ === void 0 ? _ : _,
              _ = _.areMergedPropsEqual,
              _ = _ === void 0 ? _ : _,
              _ = (0, _._)(_, _),
              _ = _(_, _, "mapStateToProps"),
              _ = _(_, _, "mapDispatchToProps"),
              _ = _(_, _, "mergeProps");
            return _(
              _,
              (0, _._)(
                {
                  methodName: "connect",
                  getDisplayName: function (_) {
                    return "Connect(" + _ + ")";
                  },
                  shouldHandleStateChanges: !!_,
                  initMapStateToProps: _,
                  initMapDispatchToProps: _,
                  initMergeProps: _,
                  pure: _,
                  areStatesEqual: _,
                  areOwnPropsEqual: _,
                  areStatePropsEqual: _,
                  areMergedPropsEqual: _,
                },
                _,
              ),
            );
          };
        }
        const _ = _();
        function _() {
          var _ = useContext(ReactReduxContext);
          return _;
        }
        function _(_) {
          _ === void 0 && (_ = ReactReduxContext);
          var _ =
            _ === ReactReduxContext
              ? useDefaultReduxContext
              : function () {
                  return useContext(_);
                };
          return function () {
            var _ = _(),
              _ = _.store;
            return _;
          };
        }
        var _ = null;
        function _(_) {
          _ === void 0 && (_ = ReactReduxContext);
          var _ =
            _ === ReactReduxContext ? useDefaultStore : createStoreHook(_);
          return function () {
            var _ = _();
            return _.dispatch;
          };
        }
        var _ = null,
          _ = function (_, _) {
            return _ === _;
          };
        function _(_, _, _, _) {
          var _ = useReducer(function (_) {
              return _ + 1;
            }, 0),
            _ = _[1],
            _ = useMemo(
              function () {
                return createSubscription(_, _);
              },
              [_, _],
            ),
            _ = useRef(),
            _ = useRef(),
            _ = useRef(),
            _ = useRef(),
            _ = _.getState(),
            _;
          try {
            if (_ !== _.current || _ !== _.current || _.current) {
              var _ = _(_);
              _.current === void 0 || !_(_, _.current)
                ? (_ = _)
                : (_ = _.current);
            } else _ = _.current;
          } catch (_) {
            throw (
              (_.current &&
                (_.message +=
                  `
The error may be correlated with this previous error:
` +
                  _.current.stack +
                  `

`),
              _)
            );
          }
          return (
            useIsomorphicLayoutEffect(function () {
              (_.current = _),
                (_.current = _),
                (_.current = _),
                (_.current = void 0);
            }),
            useIsomorphicLayoutEffect(
              function () {
                function _() {
                  try {
                    var _ = _.getState();
                    if (_ === _.current) return;
                    var _ = _.current(_);
                    if (_(_, _.current)) return;
                    (_.current = _), (_.current = _);
                  } catch (_) {
                    _.current = _;
                  }
                  _();
                }
                return (
                  (_.onStateChange = _),
                  _.trySubscribe(),
                  _(),
                  function () {
                    return _.tryUnsubscribe();
                  }
                );
              },
              [_, _],
            ),
            _
          );
        }
        function _(_) {
          _ === void 0 && (_ = ReactReduxContext);
          var _ =
            _ === ReactReduxContext
              ? useDefaultReduxContext
              : function () {
                  return useContext(_);
                };
          return function (_, _) {
            _ === void 0 && (_ = _);
            var _ = _(),
              _ = _.store,
              _ = _.subscription,
              _ = _(_, _, _, _);
            return useDebugValue(_), _;
          };
        }
        var _ = null,
          _ = __webpack_require__("chunkid");
        _(_.unstable_batchedUpdates);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ =
            Number.isNaN ||
            function (_) {
              return typeof _ == "number" && _ !== _;
            };
        function _(_, _) {
          return !!(_ === _ || (_(_) && _(_)));
        }
        function _(_, _) {
          if (_.length !== _.length) return !1;
          for (var _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
          return !0;
        }
        function _(_, _) {
          _ === void 0 && (_ = _);
          var _,
            _ = [],
            _,
            _ = !1;
          function _() {
            for (var _ = [], _ = 0; _ < arguments.length; _++)
              _[_] = arguments[_];
            return (
              (_ && _ === this && _(_, _)) ||
                ((_ = _.apply(this, _)), (_ = !0), (_ = this), (_ = _)),
              _
            );
          }
          return _;
        }
        const _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = !0,
          _ = /[ \t]{2,}/g,
          _ = /^[ \t]*/gm,
          _ = function (_) {
            return _.replace(_, " ").replace(_, "").trim();
          },
          _ = function (_) {
            return _(
              `
  %creact-beautiful-dnd

  %c` +
                _(_) +
                `

  %c\u{1F477}\u200D This is a development only message. It will be removed in production builds.
`,
            );
          },
          _ = function (_) {
            return [
              _(_),
              "color: #00C584; font-size: 1.2em; font-weight: bold;",
              "line-height: 1.5",
              "color: #723874;",
            ];
          },
          _ = "__react-beautiful-dnd-disable-dev-warnings";
        function _(_, _) {
          var _;
          _ ||
            (typeof window < "u" && window[_]) ||
            (_ = console)[_].apply(_, _(_));
        }
        var _ = _.bind(null, "warn"),
          _ = _.bind(null, "error");
        function _() {}
        function _(_, _) {
          return (0, _._)({}, _, {}, _);
        }
        function _(_, _, _) {
          var _ = _.map(function (_) {
            var _ = _(_, _.options);
            return (
              _.addEventListener(_.eventName, _._, _),
              function () {
                _.removeEventListener(_.eventName, _._, _);
              }
            );
          });
          return function () {
            _.forEach(function (_) {
              _();
            });
          };
        }
        var _ = !0,
          _ = "Invariant failed";
        function _(_) {
          this.message = _;
        }
        _.prototype.toString = function () {
          return this.message;
        };
        function _(_, _) {
          if (!_) throw _ ? new _(_) : new _(_ + ": " + (_ || ""));
        }
        var _ = (function (_) {
            (0, _._)(_, _);
            function _() {
              for (
                var _, _ = arguments.length, _ = new Array(_), _ = 0;
                _ < _;
                _++
              )
                _[_] = arguments[_];
              return (
                (_ = _.call.apply(_, [this].concat(_)) || this),
                (_.callbacks = null),
                (_.unbind = _),
                (_.onWindowError = function (_) {
                  var _ = _.getCallbacks();
                  _.isDragging() && _.tryAbort();
                  var _ = _.error;
                  _ instanceof _ && _.preventDefault();
                }),
                (_.getCallbacks = function () {
                  if (!_.callbacks)
                    throw new Error(
                      "Unable to find AppCallbacks in <ErrorBoundary/>",
                    );
                  return _.callbacks;
                }),
                (_.setCallbacks = function (_) {
                  _.callbacks = _;
                }),
                _
              );
            }
            var _ = _.prototype;
            return (
              (_.componentDidMount = function () {
                this.unbind = _(window, [
                  {
                    eventName: "error",
                    _: this.onWindowError,
                  },
                ]);
              }),
              (_.componentDidCatch = function (_) {
                if (_ instanceof _) {
                  this.setState({});
                  return;
                }
                throw _;
              }),
              (_.componentWillUnmount = function () {
                this.unbind();
              }),
              (_.render = function () {
                return this.props.children(this.setCallbacks);
              }),
              _
            );
          })(_.Component),
          _ = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
          _ = function (_) {
            return _ + 1;
          },
          _ = function (_) {
            return (
              `
  You have lifted an item in position ` +
              _(_.source.index) +
              `
`
            );
          },
          _ = function (_, _) {
            var _ = _.droppableId === _.droppableId,
              _ = _(_.index),
              _ = _(_.index);
            return _
              ? `
      You have moved the item from position ` +
                  _ +
                  `
      to position ` +
                  _ +
                  `
    `
              : `
    You have moved the item from position ` +
                  _ +
                  `
    in list ` +
                  _.droppableId +
                  `
    to list ` +
                  _.droppableId +
                  `
    in position ` +
                  _ +
                  `
  `;
          },
          _ = function (_, _, _) {
            var _ = _.droppableId === _.droppableId;
            return _
              ? `
      The item ` +
                  _ +
                  `
      has been combined with ` +
                  _.draggableId
              : `
      The item ` +
                  _ +
                  `
      in list ` +
                  _.droppableId +
                  `
      has been combined with ` +
                  _.draggableId +
                  `
      in list ` +
                  _.droppableId +
                  `
    `;
          },
          _ = function (_) {
            var _ = _.destination;
            if (_) return _(_.source, _);
            var _ = _.combine;
            return _
              ? _(_.draggableId, _.source, _)
              : "You are over an area that cannot be dropped on";
          },
          _ = function (_) {
            return (
              `
  The item has returned to its starting position
  of ` +
              _(_.index) +
              `
`
            );
          },
          _ = function (_) {
            if (_.reason === "CANCEL")
              return (
                `
      Movement cancelled.
      ` +
                _(_.source) +
                `
    `
              );
            var _ = _.destination,
              _ = _.combine;
            return _
              ? `
      You have dropped the item.
      ` +
                  _(_.source, _) +
                  `
    `
              : _
                ? `
      You have dropped the item.
      ` +
                  _(_.draggableId, _.source, _) +
                  `
    `
                : `
    The item has been dropped while not over a drop area.
    ` +
                  _(_.source) +
                  `
  `;
          },
          _ = {
            dragHandleUsageInstructions: _,
            onDragStart: _,
            onDragUpdate: _,
            onDragEnd: _,
          },
          _ = {
            _: 0,
            _: 0,
          },
          _ = function (_, _) {
            return {
              _: _._ + _._,
              _: _._ + _._,
            };
          },
          _ = function (_, _) {
            return {
              _: _._ - _._,
              _: _._ - _._,
            };
          },
          _ = function (_, _) {
            return _._ === _._ && _._ === _._;
          },
          _ = function (_) {
            return {
              _: _._ !== 0 ? -_._ : 0,
              _: _._ !== 0 ? -_._ : 0,
            };
          },
          _ = function (_, _, _) {
            var _;
            return (
              _ === void 0 && (_ = 0),
              (_ = {}),
              (_[_] = _),
              (_[_ === "x" ? "y" : "x"] = _),
              _
            );
          },
          _ = function (_, _) {
            return Math.sqrt(Math.pow(_._ - _._, 2) + Math.pow(_._ - _._, 2));
          },
          _ = function (_, _) {
            return Math.min.apply(
              Math,
              _.map(function (_) {
                return _(_, _);
              }),
            );
          },
          _ = function (_) {
            return function (_) {
              return {
                _: _(_._),
                _: _(_._),
              };
            };
          },
          _ = function (_, _) {
            var _ = (0, _._)({
              top: Math.max(_.top, _.top),
              right: Math.min(_.right, _.right),
              bottom: Math.min(_.bottom, _.bottom),
              left: Math.max(_.left, _.left),
            });
            return _.width <= 0 || _.height <= 0 ? null : _;
          },
          _ = function (_, _) {
            return {
              top: _.top + _._,
              left: _.left + _._,
              bottom: _.bottom + _._,
              right: _.right + _._,
            };
          },
          _ = function (_) {
            return [
              {
                _: _.left,
                _: _.top,
              },
              {
                _: _.right,
                _: _.top,
              },
              {
                _: _.left,
                _: _.bottom,
              },
              {
                _: _.right,
                _: _.bottom,
              },
            ];
          },
          _ = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          _ = function (_, _) {
            return _ ? _(_, _.scroll.diff.displacement) : _;
          },
          _ = function (_, _, _) {
            if (_ && _.increasedBy) {
              var _;
              return (0, _._)(
                {},
                _,
                ((_ = {}), (_[_.end] = _[_.end] + _.increasedBy[_.line]), _),
              );
            }
            return _;
          },
          _ = function (_, _) {
            return _ && _.shouldClipSubject
              ? _(_.pageMarginBox, _)
              : (0, _._)(_);
          },
          _ = function (_) {
            var _ = _.page,
              _ = _.withPlaceholder,
              _ = _.axis,
              _ = _.frame,
              _ = _(_.marginBox, _),
              _ = _(_, _, _),
              _ = _(_, _);
            return {
              page: _,
              withPlaceholder: _,
              active: _,
            };
          },
          _ = function (_, _) {
            _.frame || _(!1);
            var _ = _.frame,
              _ = _(_, _.scroll.initial),
              _ = _(_),
              _ = (0, _._)({}, _, {
                scroll: {
                  initial: _.scroll.initial,
                  current: _,
                  diff: {
                    value: _,
                    displacement: _,
                  },
                  max: _.scroll.max,
                },
              }),
              _ = _({
                page: _.subject.page,
                withPlaceholder: _.subject.withPlaceholder,
                axis: _.axis,
                frame: _,
              }),
              _ = (0, _._)({}, _, {
                frame: _,
                subject: _,
              });
            return _;
          };
        function _(_) {
          return Number.isInteger
            ? Number.isInteger(_)
            : typeof _ == "number" && isFinite(_) && Math.floor(_) === _;
        }
        function _(_) {
          return Object.values
            ? Object.values(_)
            : Object.keys(_).map(function (_) {
                return _[_];
              });
        }
        function _(_, _) {
          if (_.findIndex) return _.findIndex(_);
          for (var _ = 0; _ < _.length; _++) if (_(_[_])) return _;
          return -1;
        }
        function _(_, _) {
          if (_.find) return _.find(_);
          var _ = _(_, _);
          if (_ !== -1) return _[_];
        }
        function _(_) {
          return Array.prototype.slice.call(_);
        }
        var _ = _(function (_) {
            return _.reduce(function (_, _) {
              return (_[_.descriptor._] = _), _;
            }, {});
          }),
          _ = _(function (_) {
            return _.reduce(function (_, _) {
              return (_[_.descriptor._] = _), _;
            }, {});
          }),
          _ = _(function (_) {
            return _(_);
          }),
          _ = _(function (_) {
            return _(_);
          }),
          _ = _(function (_, _) {
            var _ = _(_)
              .filter(function (_) {
                return _ === _.descriptor.droppableId;
              })
              .sort(function (_, _) {
                return _.descriptor.index - _.descriptor.index;
              });
            return _;
          });
        function _(_) {
          return _._ && _._.type === "REORDER" ? _._.destination : null;
        }
        function _(_) {
          return _._ && _._.type === "COMBINE" ? _._.combine : null;
        }
        var _ = _(function (_, _) {
            return _.filter(function (_) {
              return _.descriptor._ !== _.descriptor._;
            });
          }),
          _ = function (_) {
            var _ = _.isMovingForward,
              _ = _.draggable,
              _ = _.destination,
              _ = _.insideDestination,
              _ = _.previousImpact;
            if (!_.isCombineEnabled) return null;
            var _ = _(_);
            if (!_) return null;
            function _(_) {
              var _ = {
                type: "COMBINE",
                combine: {
                  draggableId: _,
                  droppableId: _.descriptor._,
                },
              };
              return (0, _._)({}, _, {
                _: _,
              });
            }
            var _ = _.displaced.all,
              _ = _.length ? _[0] : null;
            if (_) return _ ? _(_) : null;
            var _ = _(_, _);
            if (!_) {
              if (!_.length) return null;
              var _ = _[_.length - 1];
              return _(_.descriptor._);
            }
            var _ = _(_, function (_) {
              return _.descriptor._ === _;
            });
            _ === -1 && _(!1);
            var _ = _ - 1;
            if (_ < 0) return null;
            var _ = _[_];
            return _(_.descriptor._);
          },
          _ = function (_, _) {
            return _.descriptor.droppableId === _.descriptor._;
          },
          _ = {
            point: _,
            value: 0,
          },
          _ = {
            invisible: {},
            visible: {},
            all: [],
          },
          _ = {
            displaced: _,
            displacedBy: _,
            _: null,
          },
          _ = function (_, _) {
            return function (_) {
              return _ <= _ && _ <= _;
            };
          },
          _ = function (_) {
            var _ = _(_.top, _.bottom),
              _ = _(_.left, _.right);
            return function (_) {
              var _ = _(_.top) && _(_.bottom) && _(_.left) && _(_.right);
              if (_) return !0;
              var _ = _(_.top) || _(_.bottom),
                _ = _(_.left) || _(_.right),
                _ = _ && _;
              if (_) return !0;
              var _ = _.top < _.top && _.bottom > _.bottom,
                _ = _.left < _.left && _.right > _.right,
                _ = _ && _;
              if (_) return !0;
              var _ = (_ && _) || (_ && _);
              return _;
            };
          },
          _ = function (_) {
            var _ = _(_.top, _.bottom),
              _ = _(_.left, _.right);
            return function (_) {
              var _ = _(_.top) && _(_.bottom) && _(_.left) && _(_.right);
              return _;
            };
          },
          _ = {
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
          _ = {
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
          _ = function (_) {
            return function (_) {
              var _ = _(_.top, _.bottom),
                _ = _(_.left, _.right);
              return function (_) {
                return _ === _
                  ? _(_.top) && _(_.bottom)
                  : _(_.left) && _(_.right);
              };
            };
          },
          _ = function (_, _) {
            var _ = _.frame ? _.frame.scroll.diff.displacement : _;
            return _(_, _);
          },
          _ = function (_, _, _) {
            return _.subject.active ? _(_.subject.active)(_) : !1;
          },
          _ = function (_, _, _) {
            return _(_)(_);
          },
          _ = function (_) {
            var _ = _.target,
              _ = _.destination,
              _ = _.viewport,
              _ = _.withDroppableDisplacement,
              _ = _.isVisibleThroughFrameFn,
              _ = _ ? _(_, _) : _;
            return _(_, _, _) && _(_, _, _);
          },
          _ = function (_) {
            return _(
              (0, _._)({}, _, {
                isVisibleThroughFrameFn: _,
              }),
            );
          },
          _ = function (_) {
            return _(
              (0, _._)({}, _, {
                isVisibleThroughFrameFn: _,
              }),
            );
          },
          _ = function (_) {
            return _(
              (0, _._)({}, _, {
                isVisibleThroughFrameFn: _(_.destination.axis),
              }),
            );
          },
          _ = function (_, _, _) {
            if (typeof _ == "boolean") return _;
            if (!_) return !0;
            var _ = _.invisible,
              _ = _.visible;
            if (_[_]) return !1;
            var _ = _[_];
            return _ ? _.shouldAnimate : !0;
          };
        function _(_, _) {
          var _ = _.page.marginBox,
            _ = {
              top: _.point._,
              right: 0,
              bottom: 0,
              left: _.point._,
            };
          return (0, _._)((0, _._)(_, _));
        }
        function _(_) {
          var _ = _.afterDragging,
            _ = _.destination,
            _ = _.displacedBy,
            _ = _.viewport,
            _ = _.forceShouldAnimate,
            _ = _.last;
          return _.reduce(
            function (_, _) {
              var _ = _(_, _),
                _ = _.descriptor._;
              _.all.push(_);
              var _ = _({
                target: _,
                destination: _,
                viewport: _,
                withDroppableDisplacement: !0,
              });
              if (!_) return (_.invisible[_.descriptor._] = !0), _;
              var _ = _(_, _, _),
                _ = {
                  draggableId: _,
                  shouldAnimate: _,
                };
              return (_.visible[_] = _), _;
            },
            {
              all: [],
              visible: {},
              invisible: {},
            },
          );
        }
        function _(_, _) {
          if (!_.length) return 0;
          var _ = _[_.length - 1].descriptor.index;
          return _.inHomeList ? _ : _ + 1;
        }
        function _(_) {
          var _ = _.insideDestination,
            _ = _.inHomeList,
            _ = _.displacedBy,
            _ = _.destination,
            _ = _(_, {
              inHomeList: _,
            });
          return {
            displaced: _,
            displacedBy: _,
            _: {
              type: "REORDER",
              destination: {
                droppableId: _.descriptor._,
                index: _,
              },
            },
          };
        }
        function _(_) {
          var _ = _.draggable,
            _ = _.insideDestination,
            _ = _.destination,
            _ = _.viewport,
            _ = _.displacedBy,
            _ = _.last,
            _ = _.index,
            _ = _.forceShouldAnimate,
            _ = _(_, _);
          if (_ == null)
            return _({
              insideDestination: _,
              inHomeList: _,
              displacedBy: _,
              destination: _,
            });
          var _ = _(_, function (_) {
            return _.descriptor.index === _;
          });
          if (!_)
            return _({
              insideDestination: _,
              inHomeList: _,
              displacedBy: _,
              destination: _,
            });
          var _ = _(_, _),
            _ = _.indexOf(_),
            _ = _.slice(_),
            _ = _({
              afterDragging: _,
              destination: _,
              displacedBy: _,
              last: _,
              viewport: _.frame,
              forceShouldAnimate: _,
            });
          return {
            displaced: _,
            displacedBy: _,
            _: {
              type: "REORDER",
              destination: {
                droppableId: _.descriptor._,
                index: _,
              },
            },
          };
        }
        function _(_, _) {
          return !!_.effected[_];
        }
        var _ = function (_) {
            var _ = _.isMovingForward,
              _ = _.destination,
              _ = _.draggables,
              _ = _.combine,
              _ = _.afterCritical;
            if (!_.isCombineEnabled) return null;
            var _ = _.draggableId,
              _ = _[_],
              _ = _.descriptor.index,
              _ = _(_, _);
            return _ ? (_ ? _ : _ - 1) : _ ? _ + 1 : _;
          },
          _ = function (_) {
            var _ = _.isMovingForward,
              _ = _.isInHomeList,
              _ = _.insideDestination,
              _ = _.location;
            if (!_.length) return null;
            var _ = _.index,
              _ = _ ? _ + 1 : _ - 1,
              _ = _[0].descriptor.index,
              _ = _[_.length - 1].descriptor.index,
              _ = _ ? _ : _ + 1;
            return _ < _ || _ > _ ? null : _;
          },
          _ = function (_) {
            var _ = _.isMovingForward,
              _ = _.isInHomeList,
              _ = _.draggable,
              _ = _.draggables,
              _ = _.destination,
              _ = _.insideDestination,
              _ = _.previousImpact,
              _ = _.viewport,
              _ = _.afterCritical,
              _ = _._;
            if ((_ || _(!1), _.type === "REORDER")) {
              var _ = _({
                isMovingForward: _,
                isInHomeList: _,
                location: _.destination,
                insideDestination: _,
              });
              return _ == null
                ? null
                : _({
                    draggable: _,
                    insideDestination: _,
                    destination: _,
                    viewport: _,
                    last: _.displaced,
                    displacedBy: _.displacedBy,
                    index: _,
                  });
            }
            var _ = _({
              isMovingForward: _,
              destination: _,
              displaced: _.displaced,
              draggables: _,
              combine: _.combine,
              afterCritical: _,
            });
            return _ == null
              ? null
              : _({
                  draggable: _,
                  insideDestination: _,
                  destination: _,
                  viewport: _,
                  last: _.displaced,
                  displacedBy: _.displacedBy,
                  index: _,
                });
          },
          _ = function (_) {
            var _ = _.displaced,
              _ = _.afterCritical,
              _ = _.combineWith,
              _ = _.displacedBy,
              _ = !!(_.visible[_] || _.invisible[_]);
            return _(_, _) ? (_ ? _ : _(_.point)) : _ ? _.point : _;
          },
          _ = function (_) {
            var _ = _.afterCritical,
              _ = _.impact,
              _ = _.draggables,
              _ = _(_);
            _ || _(!1);
            var _ = _.draggableId,
              _ = _[_].page.borderBox.center,
              _ = _({
                displaced: _.displaced,
                afterCritical: _,
                combineWith: _,
                displacedBy: _.displacedBy,
              });
            return _(_, _);
          },
          _ = function (_, _) {
            return _.margin[_.start] + _.borderBox[_.size] / 2;
          },
          _ = function (_, _) {
            return _.margin[_.end] + _.borderBox[_.size] / 2;
          },
          _ = function (_, _, _) {
            return (
              _[_.crossAxisStart] +
              _.margin[_.crossAxisStart] +
              _.borderBox[_.crossAxisSize] / 2
            );
          },
          _ = function (_) {
            var _ = _.axis,
              _ = _.moveRelativeTo,
              _ = _.isMoving;
            return _(
              _.line,
              _.marginBox[_.end] + _(_, _),
              _(_, _.marginBox, _),
            );
          },
          _ = function (_) {
            var _ = _.axis,
              _ = _.moveRelativeTo,
              _ = _.isMoving;
            return _(
              _.line,
              _.marginBox[_.start] - _(_, _),
              _(_, _.marginBox, _),
            );
          },
          _ = function (_) {
            var _ = _.axis,
              _ = _.moveInto,
              _ = _.isMoving;
            return _(
              _.line,
              _.contentBox[_.start] + _(_, _),
              _(_, _.contentBox, _),
            );
          },
          _ = function (_) {
            var _ = _.impact,
              _ = _.draggable,
              _ = _.draggables,
              _ = _.droppable,
              _ = _.afterCritical,
              _ = _(_.descriptor._, _),
              _ = _.page,
              _ = _.axis;
            if (!_.length)
              return _({
                axis: _,
                moveInto: _.page,
                isMoving: _,
              });
            var _ = _.displaced,
              _ = _.displacedBy,
              _ = _.all[0];
            if (_) {
              var _ = _[_];
              if (_(_, _))
                return _({
                  axis: _,
                  moveRelativeTo: _.page,
                  isMoving: _,
                });
              var _ = (0, _._)(_.page, _.point);
              return _({
                axis: _,
                moveRelativeTo: _,
                isMoving: _,
              });
            }
            var _ = _[_.length - 1];
            if (_.descriptor._ === _.descriptor._) return _.borderBox.center;
            if (_(_.descriptor._, _)) {
              var _ = (0, _._)(_.page, _(_.displacedBy.point));
              return _({
                axis: _,
                moveRelativeTo: _,
                isMoving: _,
              });
            }
            return _({
              axis: _,
              moveRelativeTo: _.page,
              isMoving: _,
            });
          },
          _ = function (_, _) {
            var _ = _.frame;
            return _ ? _(_, _.scroll.diff.displacement) : _;
          },
          _ = function (_) {
            var _ = _.impact,
              _ = _.draggable,
              _ = _.droppable,
              _ = _.draggables,
              _ = _.afterCritical,
              _ = _.page.borderBox.center,
              _ = _._;
            return !_ || !_
              ? _
              : _.type === "REORDER"
                ? _({
                    impact: _,
                    draggable: _,
                    draggables: _,
                    droppable: _,
                    afterCritical: _,
                  })
                : _({
                    impact: _,
                    draggables: _,
                    afterCritical: _,
                  });
          },
          _ = function (_) {
            var _ = _(_),
              _ = _.droppable,
              _ = _ ? _(_, _) : _;
            return _;
          },
          _ = function (_, _) {
            var _ = _(_, _.scroll.initial),
              _ = _(_),
              _ = (0, _._)({
                top: _._,
                bottom: _._ + _.frame.height,
                left: _._,
                right: _._ + _.frame.width,
              }),
              _ = {
                frame: _,
                scroll: {
                  initial: _.scroll.initial,
                  max: _.scroll.max,
                  current: _,
                  diff: {
                    value: _,
                    displacement: _,
                  },
                },
              };
            return _;
          };
        function _(_, _) {
          return _.map(function (_) {
            return _[_];
          });
        }
        function _(_, _) {
          for (var _ = 0; _ < _.length; _++) {
            var _ = _[_].visible[_];
            if (_) return _;
          }
          return null;
        }
        var _ = function (_) {
            var _ = _.impact,
              _ = _.viewport,
              _ = _.destination,
              _ = _.draggables,
              _ = _.maxScrollChange,
              _ = _(_, _(_.scroll.current, _)),
              _ = _.frame ? _(_, _(_.frame.scroll.current, _)) : _,
              _ = _.displaced,
              _ = _({
                afterDragging: _(_.all, _),
                destination: _,
                displacedBy: _.displacedBy,
                viewport: _.frame,
                last: _,
                forceShouldAnimate: !1,
              }),
              _ = _({
                afterDragging: _(_.all, _),
                destination: _,
                displacedBy: _.displacedBy,
                viewport: _.frame,
                last: _,
                forceShouldAnimate: !1,
              }),
              _ = {},
              _ = {},
              _ = [_, _, _];
            _.all.forEach(function (_) {
              var _ = _(_, _);
              if (_) {
                _[_] = _;
                return;
              }
              _[_] = !0;
            });
            var _ = (0, _._)({}, _, {
              displaced: {
                all: _.all,
                invisible: _,
                visible: _,
              },
            });
            return _;
          },
          _ = function (_, _) {
            return _(_.scroll.diff.displacement, _);
          },
          _ = function (_) {
            var _ = _.pageBorderBoxCenter,
              _ = _.draggable,
              _ = _.viewport,
              _ = _(_, _),
              _ = _(_, _.page.borderBox.center);
            return _(_.client.borderBox.center, _);
          },
          _ = function (_) {
            var _ = _.draggable,
              _ = _.destination,
              _ = _.newPageBorderBoxCenter,
              _ = _.viewport,
              _ = _.withDroppableDisplacement,
              _ = _.onlyOnMainAxis,
              _ = _ === void 0 ? !1 : _,
              _ = _(_, _.page.borderBox.center),
              _ = _(_.page.borderBox, _),
              _ = {
                target: _,
                destination: _,
                withDroppableDisplacement: _,
                viewport: _,
              };
            return _ ? _(_) : _(_);
          },
          _ = function (_) {
            var _ = _.isMovingForward,
              _ = _.draggable,
              _ = _.destination,
              _ = _.draggables,
              _ = _.previousImpact,
              _ = _.viewport,
              _ = _.previousPageBorderBoxCenter,
              _ = _.previousClientSelection,
              _ = _.afterCritical;
            if (!_.isEnabled) return null;
            var _ = _(_.descriptor._, _),
              _ = _(_, _),
              _ =
                _({
                  isMovingForward: _,
                  draggable: _,
                  destination: _,
                  insideDestination: _,
                  previousImpact: _,
                }) ||
                _({
                  isMovingForward: _,
                  isInHomeList: _,
                  draggable: _,
                  draggables: _,
                  destination: _,
                  insideDestination: _,
                  previousImpact: _,
                  viewport: _,
                  afterCritical: _,
                });
            if (!_) return null;
            var _ = _({
                impact: _,
                draggable: _,
                droppable: _,
                draggables: _,
                afterCritical: _,
              }),
              _ = _({
                draggable: _,
                destination: _,
                newPageBorderBoxCenter: _,
                viewport: _.frame,
                withDroppableDisplacement: !1,
                onlyOnMainAxis: !0,
              });
            if (_) {
              var _ = _({
                pageBorderBoxCenter: _,
                draggable: _,
                viewport: _,
              });
              return {
                clientSelection: _,
                impact: _,
                scrollJumpRequest: null,
              };
            }
            var _ = _(_, _),
              _ = _({
                impact: _,
                viewport: _,
                destination: _,
                draggables: _,
                maxScrollChange: _,
              });
            return {
              clientSelection: _,
              impact: _,
              scrollJumpRequest: _,
            };
          },
          _ = function (_) {
            var _ = _.subject.active;
            return _ || _(!1), _;
          },
          _ = function (_) {
            var _ = _.isMovingForward,
              _ = _.pageBorderBoxCenter,
              _ = _.source,
              _ = _.droppables,
              _ = _.viewport,
              _ = _.subject.active;
            if (!_) return null;
            var _ = _.axis,
              _ = _(_[_.start], _[_.end]),
              _ = _(_)
                .filter(function (_) {
                  return _ !== _;
                })
                .filter(function (_) {
                  return _.isEnabled;
                })
                .filter(function (_) {
                  return !!_.subject.active;
                })
                .filter(function (_) {
                  return _(_.frame)(_(_));
                })
                .filter(function (_) {
                  var _ = _(_);
                  return _
                    ? _[_.crossAxisEnd] < _[_.crossAxisEnd]
                    : _[_.crossAxisStart] < _[_.crossAxisStart];
                })
                .filter(function (_) {
                  var _ = _(_),
                    _ = _(_[_.start], _[_.end]);
                  return (
                    _(_[_.start]) || _(_[_.end]) || _(_[_.start]) || _(_[_.end])
                  );
                })
                .sort(function (_, _) {
                  var _ = _(_)[_.crossAxisStart],
                    _ = _(_)[_.crossAxisStart];
                  return _ ? _ - _ : _ - _;
                })
                .filter(function (_, _, _) {
                  return _(_)[_.crossAxisStart] === _(_[0])[_.crossAxisStart];
                });
            if (!_.length) return null;
            if (_.length === 1) return _[0];
            var _ = _.filter(function (_) {
              var _ = _(_(_)[_.start], _(_)[_.end]);
              return _(_[_.line]);
            });
            return _.length === 1
              ? _[0]
              : _.length > 1
                ? _.sort(function (_, _) {
                    return _(_)[_.start] - _(_)[_.start];
                  })[0]
                : _.sort(function (_, _) {
                    var _ = _(_, _(_(_))),
                      _ = _(_, _(_(_)));
                    return _ !== _ ? _ - _ : _(_)[_.start] - _(_)[_.start];
                  })[0];
          },
          _ = function (_, _) {
            var _ = _.page.borderBox.center;
            return _(_.descriptor._, _) ? _(_, _.displacedBy.point) : _;
          },
          _ = function (_, _) {
            var _ = _.page.borderBox;
            return _(_.descriptor._, _) ? _(_, _(_.displacedBy.point)) : _;
          },
          _ = function (_) {
            var _ = _.pageBorderBoxCenter,
              _ = _.viewport,
              _ = _.destination,
              _ = _.insideDestination,
              _ = _.afterCritical,
              _ = _.filter(function (_) {
                return _({
                  target: _(_, _),
                  destination: _,
                  viewport: _.frame,
                  withDroppableDisplacement: !0,
                });
              }).sort(function (_, _) {
                var _ = _(_, _(_, _(_, _))),
                  _ = _(_, _(_, _(_, _)));
                return _ < _
                  ? -1
                  : _ < _
                    ? 1
                    : _.descriptor.index - _.descriptor.index;
              });
            return _[0] || null;
          },
          _ = _(function (_, _) {
            var _ = _[_.line];
            return {
              value: _,
              point: _(_.line, _),
            };
          }),
          _ = function (_, _, _) {
            var _ = _.axis;
            if (_.descriptor.mode === "virtual") return _(_.line, _[_.line]);
            var _ = _.subject.page.contentBox[_.size],
              _ = _(_.descriptor._, _),
              _ = _.reduce(function (_, _) {
                return _ + _.client.marginBox[_.size];
              }, 0),
              _ = _ + _[_.line],
              _ = _ - _;
            return _ <= 0 ? null : _(_.line, _);
          },
          _ = function (_, _) {
            return (0, _._)({}, _, {
              scroll: (0, _._)({}, _.scroll, {
                max: _,
              }),
            });
          },
          _ = function (_, _, _) {
            var _ = _.frame;
            _(_, _) && _(!1), _.subject.withPlaceholder && _(!1);
            var _ = _(_.axis, _.displaceBy).point,
              _ = _(_, _, _),
              _ = {
                placeholderSize: _,
                increasedBy: _,
                oldFrameMaxScroll: _.frame ? _.frame.scroll.max : null,
              };
            if (!_) {
              var _ = _({
                page: _.subject.page,
                withPlaceholder: _,
                axis: _.axis,
                frame: _.frame,
              });
              return (0, _._)({}, _, {
                subject: _,
              });
            }
            var _ = _ ? _(_.scroll.max, _) : _.scroll.max,
              _ = _(_, _),
              _ = _({
                page: _.subject.page,
                withPlaceholder: _,
                axis: _.axis,
                frame: _,
              });
            return (0, _._)({}, _, {
              subject: _,
              frame: _,
            });
          },
          _ = function (_) {
            var _ = _.subject.withPlaceholder;
            _ || _(!1);
            var _ = _.frame;
            if (!_) {
              var _ = _({
                page: _.subject.page,
                axis: _.axis,
                frame: null,
                withPlaceholder: null,
              });
              return (0, _._)({}, _, {
                subject: _,
              });
            }
            var _ = _.oldFrameMaxScroll;
            _ || _(!1);
            var _ = _(_, _),
              _ = _({
                page: _.subject.page,
                axis: _.axis,
                frame: _,
                withPlaceholder: null,
              });
            return (0, _._)({}, _, {
              subject: _,
              frame: _,
            });
          },
          _ = function (_) {
            var _ = _.previousPageBorderBoxCenter,
              _ = _.moveRelativeTo,
              _ = _.insideDestination,
              _ = _.draggable,
              _ = _.draggables,
              _ = _.destination,
              _ = _.viewport,
              _ = _.afterCritical;
            if (!_) {
              if (_.length) return null;
              var _ = {
                  displaced: _,
                  displacedBy: _,
                  _: {
                    type: "REORDER",
                    destination: {
                      droppableId: _.descriptor._,
                      index: 0,
                    },
                  },
                },
                _ = _({
                  impact: _,
                  draggable: _,
                  droppable: _,
                  draggables: _,
                  afterCritical: _,
                }),
                _ = _(_, _) ? _ : _(_, _, _),
                _ = _({
                  draggable: _,
                  destination: _,
                  newPageBorderBoxCenter: _,
                  viewport: _.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                });
              return _ ? _ : null;
            }
            var _ = _[_.axis.line] <= _.page.borderBox.center[_.axis.line],
              _ = (function () {
                var _ = _.descriptor.index;
                return _.descriptor._ === _.descriptor._ || _ ? _ : _ + 1;
              })(),
              _ = _(_.axis, _.displaceBy);
            return _({
              draggable: _,
              insideDestination: _,
              destination: _,
              viewport: _,
              displacedBy: _,
              last: _,
              index: _,
            });
          },
          _ = function (_) {
            var _ = _.isMovingForward,
              _ = _.previousPageBorderBoxCenter,
              _ = _.draggable,
              _ = _.isOver,
              _ = _.draggables,
              _ = _.droppables,
              _ = _.viewport,
              _ = _.afterCritical,
              _ = _({
                isMovingForward: _,
                pageBorderBoxCenter: _,
                source: _,
                droppables: _,
                viewport: _,
              });
            if (!_) return null;
            var _ = _(_.descriptor._, _),
              _ = _({
                pageBorderBoxCenter: _,
                viewport: _,
                destination: _,
                insideDestination: _,
                afterCritical: _,
              }),
              _ = _({
                previousPageBorderBoxCenter: _,
                destination: _,
                draggable: _,
                draggables: _,
                moveRelativeTo: _,
                insideDestination: _,
                viewport: _,
                afterCritical: _,
              });
            if (!_) return null;
            var _ = _({
                impact: _,
                draggable: _,
                droppable: _,
                draggables: _,
                afterCritical: _,
              }),
              _ = _({
                pageBorderBoxCenter: _,
                draggable: _,
                viewport: _,
              });
            return {
              clientSelection: _,
              impact: _,
              scrollJumpRequest: null,
            };
          },
          _ = function (_) {
            var _ = _._;
            return _
              ? _.type === "REORDER"
                ? _.destination.droppableId
                : _.combine.droppableId
              : null;
          },
          _ = function (_, _) {
            var _ = _(_);
            return _ ? _[_] : null;
          },
          _ = function (_) {
            var _ = _.state,
              _ = _.type,
              _ = _(_.impact, _.dimensions.droppables),
              _ = !!_,
              _ = _.dimensions.droppables[_.critical.droppable._],
              _ = _ || _,
              _ = _.axis.direction,
              _ =
                (_ === "vertical" && (_ === "MOVE_UP" || _ === "MOVE_DOWN")) ||
                (_ === "horizontal" &&
                  (_ === "MOVE_LEFT" || _ === "MOVE_RIGHT"));
            if (_ && !_) return null;
            var _ = _ === "MOVE_DOWN" || _ === "MOVE_RIGHT",
              _ = _.dimensions.draggables[_.critical.draggable._],
              _ = _.current.page.borderBoxCenter,
              _ = _.dimensions,
              _ = _.draggables,
              _ = _.droppables;
            return _
              ? _({
                  isMovingForward: _,
                  previousPageBorderBoxCenter: _,
                  draggable: _,
                  destination: _,
                  draggables: _,
                  viewport: _.viewport,
                  previousClientSelection: _.current.client.selection,
                  previousImpact: _.impact,
                  afterCritical: _.afterCritical,
                })
              : _({
                  isMovingForward: _,
                  previousPageBorderBoxCenter: _,
                  draggable: _,
                  isOver: _,
                  draggables: _,
                  droppables: _,
                  viewport: _.viewport,
                  afterCritical: _.afterCritical,
                });
          };
        function _(_) {
          return _.phase === "DRAGGING" || _.phase === "COLLECTING";
        }
        function _(_) {
          var _ = _(_.top, _.bottom),
            _ = _(_.left, _.right);
          return function (_) {
            return _(_._) && _(_._);
          };
        }
        function _(_, _) {
          return (
            _.left < _.right &&
            _.right > _.left &&
            _.top < _.bottom &&
            _.bottom > _.top
          );
        }
        function _(_) {
          var _ = _.pageBorderBox,
            _ = _.draggable,
            _ = _.candidates,
            _ = _.page.borderBox.center,
            _ = _.map(function (_) {
              var _ = _.axis,
                _ = _(
                  _.axis.line,
                  _.center[_.line],
                  _.page.borderBox.center[_.crossAxisLine],
                );
              return {
                _: _.descriptor._,
                distance: _(_, _),
              };
            }).sort(function (_, _) {
              return _.distance - _.distance;
            });
          return _[0] ? _[0]._ : null;
        }
        function _(_) {
          var _ = _.pageBorderBox,
            _ = _.draggable,
            _ = _.droppables,
            _ = _(_).filter(function (_) {
              if (!_.isEnabled) return !1;
              var _ = _.subject.active;
              if (!_ || !_(_, _)) return !1;
              if (_(_)(_.center)) return !0;
              var _ = _.axis,
                _ = _.center[_.crossAxisLine],
                _ = _[_.crossAxisStart],
                _ = _[_.crossAxisEnd],
                _ = _(_[_.crossAxisStart], _[_.crossAxisEnd]),
                _ = _(_),
                _ = _(_);
              return !_ && !_ ? !0 : _ ? _ < _ : _ > _;
            });
          return _.length
            ? _.length === 1
              ? _[0].descriptor._
              : _({
                  pageBorderBox: _,
                  draggable: _,
                  candidates: _,
                })
            : null;
        }
        var _ = function (_, _) {
            return (0, _._)(_(_, _));
          },
          _ = function (_, _) {
            var _ = _.frame;
            return _ ? _(_, _.scroll.diff.value) : _;
          };
        function _(_) {
          var _ = _.displaced,
            _ = _._;
          return !!(_.visible[_] || _.invisible[_]);
        }
        function _(_) {
          var _ = _.draggable,
            _ = _.closest,
            _ = _.inHomeList;
          return _
            ? _ && _.descriptor.index > _.descriptor.index
              ? _.descriptor.index - 1
              : _.descriptor.index
            : null;
        }
        var _ = function (_) {
            var _ = _.pageBorderBoxWithDroppableScroll,
              _ = _.draggable,
              _ = _.destination,
              _ = _.insideDestination,
              _ = _.last,
              _ = _.viewport,
              _ = _.afterCritical,
              _ = _.axis,
              _ = _(_.axis, _.displaceBy),
              _ = _.value,
              _ = _[_.start],
              _ = _[_.end],
              _ = _(_, _),
              _ = _(_, function (_) {
                var _ = _.descriptor._,
                  _ = _.page.borderBox.center[_.line],
                  _ = _(_, _),
                  _ = _({
                    displaced: _,
                    _: _,
                  });
                return _ ? (_ ? _ <= _ : _ < _ - _) : _ ? _ <= _ + _ : _ < _;
              }),
              _ = _({
                draggable: _,
                closest: _,
                inHomeList: _(_, _),
              });
            return _({
              draggable: _,
              insideDestination: _,
              destination: _,
              viewport: _,
              last: _,
              displacedBy: _,
              index: _,
            });
          },
          _ = 4,
          _ = function (_) {
            var _ = _.draggable,
              _ = _.pageBorderBoxWithDroppableScroll,
              _ = _.previousImpact,
              _ = _.destination,
              _ = _.insideDestination,
              _ = _.afterCritical;
            if (!_.isCombineEnabled) return null;
            var _ = _.axis,
              _ = _(_.axis, _.displaceBy),
              _ = _.value,
              _ = _[_.start],
              _ = _[_.end],
              _ = _(_, _),
              _ = _(_, function (_) {
                var _ = _.descriptor._,
                  _ = _.page.borderBox,
                  _ = _[_.size],
                  _ = _ / _,
                  _ = _(_, _),
                  _ = _({
                    displaced: _.displaced,
                    _: _,
                  });
                return _
                  ? _
                    ? _ > _[_.start] + _ && _ < _[_.end] - _
                    : _ > _[_.start] - _ + _ && _ < _[_.end] - _ - _
                  : _
                    ? _ > _[_.start] + _ + _ && _ < _[_.end] + _ - _
                    : _ > _[_.start] + _ && _ < _[_.end] - _;
              });
            if (!_) return null;
            var _ = {
              displacedBy: _,
              displaced: _.displaced,
              _: {
                type: "COMBINE",
                combine: {
                  draggableId: _.descriptor._,
                  droppableId: _.descriptor._,
                },
              },
            };
            return _;
          },
          _ = function (_) {
            var _ = _.pageOffset,
              _ = _.draggable,
              _ = _.draggables,
              _ = _.droppables,
              _ = _.previousImpact,
              _ = _.viewport,
              _ = _.afterCritical,
              _ = _(_.page.borderBox, _),
              _ = _({
                pageBorderBox: _,
                draggable: _,
                droppables: _,
              });
            if (!_) return _;
            var _ = _[_],
              _ = _(_.descriptor._, _),
              _ = _(_, _);
            return (
              _({
                pageBorderBoxWithDroppableScroll: _,
                draggable: _,
                previousImpact: _,
                destination: _,
                insideDestination: _,
                afterCritical: _,
              }) ||
              _({
                pageBorderBoxWithDroppableScroll: _,
                draggable: _,
                destination: _,
                insideDestination: _,
                last: _.displaced,
                viewport: _,
                afterCritical: _,
              })
            );
          },
          _ = function (_, _) {
            var _;
            return (0, _._)({}, _, ((_ = {}), (_[_.descriptor._] = _), _));
          },
          _ = function (_) {
            var _ = _.previousImpact,
              _ = _.impact,
              _ = _.droppables,
              _ = _(_),
              _ = _(_);
            if (!_ || _ === _) return _;
            var _ = _[_];
            if (!_.subject.withPlaceholder) return _;
            var _ = _(_);
            return _(_, _);
          },
          _ = function (_) {
            var _ = _.draggable,
              _ = _.draggables,
              _ = _.droppables,
              _ = _.previousImpact,
              _ = _.impact,
              _ = _({
                previousImpact: _,
                impact: _,
                droppables: _,
              }),
              _ = _(_);
            if (!_) return _;
            var _ = _[_];
            if (_(_, _) || _.subject.withPlaceholder) return _;
            var _ = _(_, _, _);
            return _(_, _);
          },
          _ = function (_) {
            var _ = _.state,
              _ = _.clientSelection,
              _ = _.dimensions,
              _ = _.viewport,
              _ = _.impact,
              _ = _.scrollJumpRequest,
              _ = _ || _.viewport,
              _ = _ || _.dimensions,
              _ = _ || _.current.client.selection,
              _ = _(_, _.initial.client.selection),
              _ = {
                offset: _,
                selection: _,
                borderBoxCenter: _(_.initial.client.borderBoxCenter, _),
              },
              _ = {
                selection: _(_.selection, _.scroll.current),
                borderBoxCenter: _(_.borderBoxCenter, _.scroll.current),
                offset: _(_.offset, _.scroll.diff.value),
              },
              _ = {
                client: _,
                page: _,
              };
            if (_.phase === "COLLECTING")
              return (0, _._)(
                {
                  phase: "COLLECTING",
                },
                _,
                {
                  dimensions: _,
                  viewport: _,
                  current: _,
                },
              );
            var _ = _.draggables[_.critical.draggable._],
              _ =
                _ ||
                _({
                  pageOffset: _.offset,
                  draggable: _,
                  draggables: _.draggables,
                  droppables: _.droppables,
                  previousImpact: _.impact,
                  viewport: _,
                  afterCritical: _.afterCritical,
                }),
              _ = _({
                draggable: _,
                impact: _,
                previousImpact: _.impact,
                draggables: _.draggables,
                droppables: _.droppables,
              }),
              _ = (0, _._)({}, _, {
                current: _,
                dimensions: {
                  draggables: _.draggables,
                  droppables: _,
                },
                impact: _,
                viewport: _,
                scrollJumpRequest: _ || null,
                forceShouldAnimate: _ ? !1 : null,
              });
            return _;
          };
        function _(_, _) {
          return _.map(function (_) {
            return _[_];
          });
        }
        var _ = function (_) {
            var _ = _.impact,
              _ = _.viewport,
              _ = _.draggables,
              _ = _.destination,
              _ = _.forceShouldAnimate,
              _ = _.displaced,
              _ = _(_.all, _),
              _ = _({
                afterDragging: _,
                destination: _,
                displacedBy: _.displacedBy,
                viewport: _.frame,
                forceShouldAnimate: _,
                last: _,
              });
            return (0, _._)({}, _, {
              displaced: _,
            });
          },
          _ = function (_) {
            var _ = _.impact,
              _ = _.draggable,
              _ = _.droppable,
              _ = _.draggables,
              _ = _.viewport,
              _ = _.afterCritical,
              _ = _({
                impact: _,
                draggable: _,
                draggables: _,
                droppable: _,
                afterCritical: _,
              });
            return _({
              pageBorderBoxCenter: _,
              draggable: _,
              viewport: _,
            });
          },
          _ = function (_) {
            var _ = _.state,
              _ = _.dimensions,
              _ = _.viewport;
            _.movementMode !== "SNAP" && _(!1);
            var _ = _.impact,
              _ = _ || _.viewport,
              _ = _ || _.dimensions,
              _ = _.draggables,
              _ = _.droppables,
              _ = _[_.critical.draggable._],
              _ = _(_);
            _ || _(!1);
            var _ = _[_],
              _ = _({
                impact: _,
                viewport: _,
                destination: _,
                draggables: _,
              }),
              _ = _({
                impact: _,
                draggable: _,
                droppable: _,
                draggables: _,
                viewport: _,
                afterCritical: _.afterCritical,
              });
            return _({
              impact: _,
              clientSelection: _,
              state: _,
              dimensions: _,
              viewport: _,
            });
          },
          _ = function (_) {
            return {
              index: _.index,
              droppableId: _.droppableId,
            };
          },
          _ = function (_) {
            var _ = _.draggable,
              _ = _.home,
              _ = _.draggables,
              _ = _.viewport,
              _ = _(_.axis, _.displaceBy),
              _ = _(_.descriptor._, _),
              _ = _.indexOf(_);
            _ === -1 && _(!1);
            var _ = _.slice(_ + 1),
              _ = _.reduce(function (_, _) {
                return (_[_.descriptor._] = !0), _;
              }, {}),
              _ = {
                inVirtualList: _.descriptor.mode === "virtual",
                displacedBy: _,
                effected: _,
              },
              _ = _({
                afterDragging: _,
                destination: _,
                displacedBy: _,
                last: null,
                viewport: _.frame,
                forceShouldAnimate: !1,
              }),
              _ = {
                displaced: _,
                displacedBy: _,
                _: {
                  type: "REORDER",
                  destination: _(_.descriptor),
                },
              };
            return {
              impact: _,
              afterCritical: _,
            };
          },
          _ = function (_, _) {
            return {
              draggables: _.draggables,
              droppables: _(_.droppables, _),
            };
          },
          _ = function (_) {},
          _ = function (_) {},
          _ = function (_) {
            var _ = _.draggable,
              _ = _.offset,
              _ = _.initialWindowScroll,
              _ = (0, _._)(_.client, _),
              _ = (0, _._)(_, _),
              _ = (0, _._)({}, _, {
                placeholder: (0, _._)({}, _.placeholder, {
                  client: _,
                }),
                client: _,
                page: _,
              });
            return _;
          },
          _ = function (_) {
            var _ = _.frame;
            return _ || _(!1), _;
          },
          _ = function (_) {
            var _ = _.additions,
              _ = _.updatedDroppables,
              _ = _.viewport,
              _ = _.scroll.diff.value;
            return _.map(function (_) {
              var _ = _.descriptor.droppableId,
                _ = _[_],
                _ = _(_),
                _ = _.scroll.diff.value,
                _ = _(_, _),
                _ = _({
                  draggable: _,
                  offset: _,
                  initialWindowScroll: _.scroll.initial,
                });
              return _;
            });
          },
          _ = function (_) {
            var _ = _.state,
              _ = _.published;
            _();
            var _ = _.modified.map(function (_) {
                var _ = _.dimensions.droppables[_.droppableId],
                  _ = _(_, _.scroll);
                return _;
              }),
              _ = (0, _._)({}, _.dimensions.droppables, {}, _(_)),
              _ = _(
                _({
                  additions: _.additions,
                  updatedDroppables: _,
                  viewport: _.viewport,
                }),
              ),
              _ = (0, _._)({}, _.dimensions.draggables, {}, _);
            _.removals.forEach(function (_) {
              delete _[_];
            });
            var _ = {
                droppables: _,
                draggables: _,
              },
              _ = _(_.impact),
              _ = _ ? _.droppables[_] : null,
              _ = _.draggables[_.critical.draggable._],
              _ = _.droppables[_.critical.droppable._],
              _ = _({
                draggable: _,
                home: _,
                draggables: _,
                viewport: _.viewport,
              }),
              _ = _.impact,
              _ = _.afterCritical,
              _ = _ && _.isCombineEnabled ? _.impact : _,
              _ = _({
                pageOffset: _.current.page.offset,
                draggable: _.draggables[_.critical.draggable._],
                draggables: _.draggables,
                droppables: _.droppables,
                previousImpact: _,
                viewport: _.viewport,
                afterCritical: _,
              });
            _();
            var _ = (0, _._)(
              {
                phase: "DRAGGING",
              },
              _,
              {
                phase: "DRAGGING",
                impact: _,
                onLiftImpact: _,
                dimensions: _,
                afterCritical: _,
                forceShouldAnimate: !1,
              },
            );
            if (_.phase === "COLLECTING") return _;
            var _ = (0, _._)(
              {
                phase: "DROP_PENDING",
              },
              _,
              {
                phase: "DROP_PENDING",
                reason: _.reason,
                isWaiting: !1,
              },
            );
            return _;
          },
          _ = function (_) {
            return _.movementMode === "SNAP";
          },
          _ = function (_, _, _) {
            var _ = _(_.dimensions, _);
            return !_(_) || _
              ? _({
                  state: _,
                  dimensions: _,
                })
              : _({
                  state: _,
                  dimensions: _,
                });
          };
        function _(_) {
          return _.isDragging && _.movementMode === "SNAP"
            ? (0, _._)(
                {
                  phase: "DRAGGING",
                },
                _,
                {
                  scrollJumpRequest: null,
                },
              )
            : _;
        }
        var _ = {
            phase: "IDLE",
            completed: null,
            shouldFlush: !1,
          },
          _ = function (_, _) {
            if ((_ === void 0 && (_ = _), _.type === "FLUSH"))
              return (0, _._)({}, _, {
                shouldFlush: !0,
              });
            if (_.type === "INITIAL_PUBLISH") {
              _.phase !== "IDLE" && _(!1);
              var _ = _.payload,
                _ = _.critical,
                _ = _.clientSelection,
                _ = _.viewport,
                _ = _.dimensions,
                _ = _.movementMode,
                _ = _.draggables[_.draggable._],
                _ = _.droppables[_.droppable._],
                _ = {
                  selection: _,
                  borderBoxCenter: _.client.borderBox.center,
                  offset: _,
                },
                _ = {
                  client: _,
                  page: {
                    selection: _(_.selection, _.scroll.initial),
                    borderBoxCenter: _(_.selection, _.scroll.initial),
                    offset: _(_.selection, _.scroll.diff.value),
                  },
                },
                _ = _(_.droppables).every(function (_) {
                  return !_.isFixedOnPage;
                }),
                _ = _({
                  draggable: _,
                  home: _,
                  draggables: _.draggables,
                  viewport: _,
                }),
                _ = _.impact,
                _ = _.afterCritical,
                _ = {
                  phase: "DRAGGING",
                  isDragging: !0,
                  critical: _,
                  movementMode: _,
                  dimensions: _,
                  initial: _,
                  current: _,
                  isWindowScrollAllowed: _,
                  impact: _,
                  afterCritical: _,
                  onLiftImpact: _,
                  viewport: _,
                  scrollJumpRequest: null,
                  forceShouldAnimate: null,
                };
              return _;
            }
            if (_.type === "COLLECTION_STARTING") {
              if (_.phase === "COLLECTING" || _.phase === "DROP_PENDING")
                return _;
              _.phase !== "DRAGGING" && _(!1);
              var _ = (0, _._)(
                {
                  phase: "COLLECTING",
                },
                _,
                {
                  phase: "COLLECTING",
                },
              );
              return _;
            }
            if (_.type === "PUBLISH_WHILE_DRAGGING")
              return (
                _.phase === "COLLECTING" || _.phase === "DROP_PENDING" || _(!1),
                _({
                  state: _,
                  published: _.payload,
                })
              );
            if (_.type === "MOVE") {
              if (_.phase === "DROP_PENDING") return _;
              _(_) || _(!1);
              var _ = _.payload.client;
              return _(_, _.current.client.selection)
                ? _
                : _({
                    state: _,
                    clientSelection: _,
                    impact: _(_) ? _.impact : null,
                  });
            }
            if (_.type === "UPDATE_DROPPABLE_SCROLL") {
              if (_.phase === "DROP_PENDING" || _.phase === "COLLECTING")
                return _(_);
              _(_) || _(!1);
              var _ = _.payload,
                _ = _._,
                _ = _.newScroll,
                _ = _.dimensions.droppables[_];
              if (!_) return _;
              var _ = _(_, _);
              return _(_, _, !1);
            }
            if (_.type === "UPDATE_DROPPABLE_IS_ENABLED") {
              if (_.phase === "DROP_PENDING") return _;
              _(_) || _(!1);
              var _ = _.payload,
                _ = _._,
                _ = _.isEnabled,
                _ = _.dimensions.droppables[_];
              _ || _(!1), _.isEnabled === _ && _(!1);
              var _ = (0, _._)({}, _, {
                isEnabled: _,
              });
              return _(_, _, !0);
            }
            if (_.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
              if (_.phase === "DROP_PENDING") return _;
              _(_) || _(!1);
              var _ = _.payload,
                _ = _._,
                _ = _.isCombineEnabled,
                _ = _.dimensions.droppables[_];
              _ || _(!1), _.isCombineEnabled === _ && _(!1);
              var _ = (0, _._)({}, _, {
                isCombineEnabled: _,
              });
              return _(_, _, !0);
            }
            if (_.type === "MOVE_BY_WINDOW_SCROLL") {
              if (_.phase === "DROP_PENDING" || _.phase === "DROP_ANIMATING")
                return _;
              _(_) || _(!1), _.isWindowScrollAllowed || _(!1);
              var _ = _.payload.newScroll;
              if (_(_.viewport.scroll.current, _)) return _(_);
              var _ = _(_.viewport, _);
              return _(_)
                ? _({
                    state: _,
                    viewport: _,
                  })
                : _({
                    state: _,
                    viewport: _,
                  });
            }
            if (_.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
              if (!_(_)) return _;
              var _ = _.payload.maxScroll;
              if (_(_, _.viewport.scroll.max)) return _;
              var _ = (0, _._)({}, _.viewport, {
                scroll: (0, _._)({}, _.viewport.scroll, {
                  max: _,
                }),
              });
              return (0, _._)(
                {
                  phase: "DRAGGING",
                },
                _,
                {
                  viewport: _,
                },
              );
            }
            if (
              _.type === "MOVE_UP" ||
              _.type === "MOVE_DOWN" ||
              _.type === "MOVE_LEFT" ||
              _.type === "MOVE_RIGHT"
            ) {
              if (_.phase === "COLLECTING" || _.phase === "DROP_PENDING")
                return _;
              _.phase !== "DRAGGING" && _(!1);
              var _ = _({
                state: _,
                type: _.type,
              });
              return _
                ? _({
                    state: _,
                    impact: _.impact,
                    clientSelection: _.clientSelection,
                    scrollJumpRequest: _.scrollJumpRequest,
                  })
                : _;
            }
            if (_.type === "DROP_PENDING") {
              var _ = _.payload.reason;
              _.phase !== "COLLECTING" && _(!1);
              var _ = (0, _._)(
                {
                  phase: "DROP_PENDING",
                },
                _,
                {
                  phase: "DROP_PENDING",
                  isWaiting: !0,
                  reason: _,
                },
              );
              return _;
            }
            if (_.type === "DROP_ANIMATE") {
              var _ = _.payload,
                _ = _.completed,
                _ = _.dropDuration,
                _ = _.newHomeClientOffset;
              _.phase === "DRAGGING" || _.phase === "DROP_PENDING" || _(!1);
              var _ = {
                phase: "DROP_ANIMATING",
                completed: _,
                dropDuration: _,
                newHomeClientOffset: _,
                dimensions: _.dimensions,
              };
              return _;
            }
            if (_.type === "DROP_COMPLETE") {
              var _ = _.payload.completed;
              return {
                phase: "IDLE",
                completed: _,
                shouldFlush: !1,
              };
            }
            return _;
          },
          _ = function (_) {
            return {
              type: "BEFORE_INITIAL_CAPTURE",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "LIFT",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "INITIAL_PUBLISH",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "PUBLISH_WHILE_DRAGGING",
              payload: _,
            };
          },
          _ = function () {
            return {
              type: "COLLECTION_STARTING",
              payload: null,
            };
          },
          _ = function (_) {
            return {
              type: "UPDATE_DROPPABLE_SCROLL",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "UPDATE_DROPPABLE_IS_ENABLED",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "MOVE",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "MOVE_BY_WINDOW_SCROLL",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "UPDATE_VIEWPORT_MAX_SCROLL",
              payload: _,
            };
          },
          _ = function () {
            return {
              type: "MOVE_UP",
              payload: null,
            };
          },
          _ = function () {
            return {
              type: "MOVE_DOWN",
              payload: null,
            };
          },
          _ = function () {
            return {
              type: "MOVE_RIGHT",
              payload: null,
            };
          },
          _ = function () {
            return {
              type: "MOVE_LEFT",
              payload: null,
            };
          },
          _ = function () {
            return {
              type: "FLUSH",
              payload: null,
            };
          },
          _ = function (_) {
            return {
              type: "DROP_ANIMATE",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "DROP_COMPLETE",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "DROP",
              payload: _,
            };
          },
          _ = function (_) {
            return {
              type: "DROP_PENDING",
              payload: _,
            };
          },
          _ = function () {
            return {
              type: "DROP_ANIMATION_FINISHED",
              payload: null,
            };
          };
        function _(_) {
          if (!(_.length <= 1)) {
            for (
              var _ = _.map(function (_) {
                  return _.descriptor.index;
                }),
                _ = {},
                _ = 1;
              _ < _.length;
              _++
            ) {
              var _ = _[_],
                _ = _[_ - 1];
              _ !== _ + 1 && (_[_] = !0);
            }
            if (Object.keys(_).length)
              var _ = _.map(function (_) {
                var _ = !!_[_];
                return _ ? "[\u{1F525}" + _ + "]" : "" + _;
              }).join(", ");
          }
        }
        function _(_, _) {
          if (0) var _;
        }
        var _ = function (_) {
            return function (_) {
              var _ = _.getState,
                _ = _.dispatch;
              return function (_) {
                return function (_) {
                  if (_.type !== "LIFT") {
                    _(_);
                    return;
                  }
                  var _ = _.payload,
                    _ = _._,
                    _ = _.clientSelection,
                    _ = _.movementMode,
                    _ = _();
                  _.phase === "DROP_ANIMATING" &&
                    _(
                      _({
                        completed: _.completed,
                      }),
                    ),
                    _().phase !== "IDLE" && _(!1),
                    _(_()),
                    _(
                      _({
                        draggableId: _,
                        movementMode: _,
                      }),
                    );
                  var _ = {
                      shouldPublishImmediately: _ === "SNAP",
                    },
                    _ = {
                      draggableId: _,
                      scrollOptions: _,
                    },
                    _ = _.startPublishing(_),
                    _ = _.critical,
                    _ = _.dimensions,
                    _ = _.viewport;
                  _(_, _),
                    _(
                      _({
                        critical: _,
                        dimensions: _,
                        clientSelection: _,
                        movementMode: _,
                        viewport: _,
                      }),
                    );
                };
              };
            };
          },
          _ = function (_) {
            return function () {
              return function (_) {
                return function (_) {
                  _.type === "INITIAL_PUBLISH" && _.dragging(),
                    _.type === "DROP_ANIMATE" &&
                      _.dropping(_.payload.completed.result.reason),
                    (_.type === "FLUSH" || _.type === "DROP_COMPLETE") &&
                      _.resting(),
                    _(_);
                };
              };
            };
          },
          _ = {
            outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
            drop: "cubic-bezier(.2,1,.1,1)",
          },
          _ = {
            opacity: {
              drop: 0,
              combining: 0.7,
            },
            scale: {
              drop: 0.75,
            },
          },
          _ = {
            outOfTheWay: 0.2,
            minDropTime: 0.33,
            maxDropTime: 0.55,
          },
          _ = _.outOfTheWay + "s " + _.outOfTheWay,
          _ = {
            fluid: "opacity " + _,
            snap: "transform " + _ + ", opacity " + _,
            drop: function (_) {
              var _ = _ + "s " + _.drop;
              return "transform " + _ + ", opacity " + _;
            },
            outOfTheWay: "transform " + _,
            placeholder: "height " + _ + ", width " + _ + ", margin " + _,
          },
          _ = function (_) {
            return _(_, _) ? null : "translate(" + _._ + "px, " + _._ + "px)";
          },
          _ = {
            moveTo: _,
            drop: function (_, _) {
              var _ = _(_);
              return _ ? (_ ? _ + " scale(" + _.scale.drop + ")" : _) : null;
            },
          },
          _ = _.minDropTime,
          _ = _.maxDropTime,
          _ = _ - _,
          _ = 1500,
          _ = 0.6,
          _ = function (_) {
            var _ = _.current,
              _ = _.destination,
              _ = _.reason,
              _ = _(_, _);
            if (_ <= 0) return _;
            if (_ >= _) return _;
            var _ = _ / _,
              _ = _ + _ * _,
              _ = _ === "CANCEL" ? _ * _ : _;
            return Number(_.toFixed(2));
          },
          _ = function (_) {
            var _ = _.impact,
              _ = _.draggable,
              _ = _.dimensions,
              _ = _.viewport,
              _ = _.afterCritical,
              _ = _.draggables,
              _ = _.droppables,
              _ = _(_),
              _ = _ ? _[_] : null,
              _ = _[_.descriptor.droppableId],
              _ = _({
                impact: _,
                draggable: _,
                draggables: _,
                afterCritical: _,
                droppable: _ || _,
                viewport: _,
              }),
              _ = _(_, _.client.borderBox.center);
            return _;
          },
          _ = function (_) {
            var _ = _.draggables,
              _ = _.reason,
              _ = _.lastImpact,
              _ = _.home,
              _ = _.viewport,
              _ = _.onLiftImpact;
            if (!_._ || _ !== "DROP") {
              var _ = _({
                draggables: _,
                impact: _,
                destination: _,
                viewport: _,
                forceShouldAnimate: !0,
              });
              return {
                impact: _,
                didDropInsideDroppable: !1,
              };
            }
            if (_._.type === "REORDER")
              return {
                impact: _,
                didDropInsideDroppable: !0,
              };
            var _ = (0, _._)({}, _, {
              displaced: _,
            });
            return {
              impact: _,
              didDropInsideDroppable: !0,
            };
          },
          _ = function (_) {
            var _ = _.getState,
              _ = _.dispatch;
            return function (_) {
              return function (_) {
                if (_.type !== "DROP") {
                  _(_);
                  return;
                }
                var _ = _(),
                  _ = _.payload.reason;
                if (_.phase === "COLLECTING") {
                  _(
                    _({
                      reason: _,
                    }),
                  );
                  return;
                }
                if (_.phase !== "IDLE") {
                  var _ = _.phase === "DROP_PENDING" && _.isWaiting;
                  _ && _(!1),
                    _.phase === "DRAGGING" ||
                      _.phase === "DROP_PENDING" ||
                      _(!1);
                  var _ = _.critical,
                    _ = _.dimensions,
                    _ = _.draggables[_.critical.draggable._],
                    _ = _({
                      reason: _,
                      lastImpact: _.impact,
                      afterCritical: _.afterCritical,
                      onLiftImpact: _.onLiftImpact,
                      home: _.dimensions.droppables[_.critical.droppable._],
                      viewport: _.viewport,
                      draggables: _.dimensions.draggables,
                    }),
                    _ = _.impact,
                    _ = _.didDropInsideDroppable,
                    _ = _ ? _(_) : null,
                    _ = _ ? _(_) : null,
                    _ = {
                      index: _.draggable.index,
                      droppableId: _.droppable._,
                    },
                    _ = {
                      draggableId: _.descriptor._,
                      type: _.descriptor.type,
                      source: _,
                      reason: _,
                      mode: _.movementMode,
                      destination: _,
                      combine: _,
                    },
                    _ = _({
                      impact: _,
                      draggable: _,
                      dimensions: _,
                      viewport: _.viewport,
                      afterCritical: _.afterCritical,
                    }),
                    _ = {
                      critical: _.critical,
                      afterCritical: _.afterCritical,
                      result: _,
                      impact: _,
                    },
                    _ = !_(_.current.client.offset, _) || !!_.combine;
                  if (!_) {
                    _(
                      _({
                        completed: _,
                      }),
                    );
                    return;
                  }
                  var _ = _({
                      current: _.current.client.offset,
                      destination: _,
                      reason: _,
                    }),
                    _ = {
                      newHomeClientOffset: _,
                      dropDuration: _,
                      completed: _,
                    };
                  _(_(_));
                }
              };
            };
          },
          _ = function (_) {
            return {
              _: _.pageXOffset,
              _: _.pageYOffset,
            };
          };
        function _(_) {
          return {
            eventName: "scroll",
            options: {
              passive: !0,
              capture: !1,
            },
            _: function (_) {
              (_.target !== window && _.target !== window.document) || _();
            },
          };
        }
        function _(_) {
          var _ = _.onWindowScroll;
          function _() {
            _(_());
          }
          var _ = (0, _._)(_),
            _ = _(_),
            _ = _;
          function _() {
            return _ !== _;
          }
          function _() {
            _() && _(!1), (_ = _(window, [_]));
          }
          function _() {
            _() || _(!1), _.cancel(), _(), (_ = _);
          }
          return {
            start: _,
            stop: _,
            isActive: _,
          };
        }
        var _ = function (_) {
            return (
              _.type === "DROP_COMPLETE" ||
              _.type === "DROP_ANIMATE" ||
              _.type === "FLUSH"
            );
          },
          _ = function (_) {
            var _ = _({
              onWindowScroll: function (_) {
                _.dispatch(
                  _({
                    newScroll: _,
                  }),
                );
              },
            });
            return function (_) {
              return function (_) {
                !_.isActive() && _.type === "INITIAL_PUBLISH" && _.start(),
                  _.isActive() && _(_) && _.stop(),
                  _(_);
              };
            };
          },
          _ = function (_) {
            var _ = !1,
              _ = !1,
              _ = setTimeout(function () {
                _ = !0;
              }),
              _ = function (_) {
                _ || _ || ((_ = !0), _(_), clearTimeout(_));
              };
            return (
              (_.wasCalled = function () {
                return _;
              }),
              _
            );
          },
          _ = function () {
            var _ = [],
              _ = function (_) {
                var _ = _(_, function (_) {
                  return _.timerId === _;
                });
                _ === -1 && _(!1);
                var _ = _.splice(_, 1),
                  _ = _[0];
                _.callback();
              },
              _ = function (_) {
                var _ = setTimeout(function () {
                    return _(_);
                  }),
                  _ = {
                    timerId: _,
                    callback: _,
                  };
                _.push(_);
              },
              _ = function () {
                if (_.length) {
                  var _ = [].concat(_);
                  (_.length = 0),
                    _.forEach(function (_) {
                      clearTimeout(_.timerId), _.callback();
                    });
                }
              };
            return {
              add: _,
              flush: _,
            };
          },
          _ = function (_, _) {
            return _ == null && _ == null
              ? !0
              : _ == null || _ == null
                ? !1
                : _.droppableId === _.droppableId && _.index === _.index;
          },
          _ = function (_, _) {
            return _ == null && _ == null
              ? !0
              : _ == null || _ == null
                ? !1
                : _.draggableId === _.draggableId &&
                  _.droppableId === _.droppableId;
          },
          _ = function (_, _) {
            if (_ === _) return !0;
            var _ =
                _.draggable._ === _.draggable._ &&
                _.draggable.droppableId === _.draggable.droppableId &&
                _.draggable.type === _.draggable.type &&
                _.draggable.index === _.draggable.index,
              _ =
                _.droppable._ === _.droppable._ &&
                _.droppable.type === _.droppable.type;
            return _ && _;
          },
          _ = function (_, _) {
            _(), _(), _();
          },
          _ = function (_, _) {
            return {
              draggableId: _.draggable._,
              type: _.droppable.type,
              source: {
                droppableId: _.droppable._,
                index: _.draggable.index,
              },
              mode: _,
            };
          },
          _ = function (_, _, _, _) {
            if (!_) {
              _(_(_));
              return;
            }
            var _ = _(_),
              _ = {
                announce: _,
              };
            _(_, _), _.wasCalled() || _(_(_));
          },
          _ = function (_, _) {
            var _ = _(),
              _ = null,
              _ = function (_, _) {
                _ && _(!1),
                  _("onBeforeCapture", function () {
                    var _ = _().onBeforeCapture;
                    if (_) {
                      var _ = {
                        draggableId: _,
                        mode: _,
                      };
                      _(_);
                    }
                  });
              },
              _ = function (_, _) {
                _ && _(!1),
                  _("onBeforeDragStart", function () {
                    var _ = _().onBeforeDragStart;
                    _ && _(_(_, _));
                  });
              },
              _ = function (_, _) {
                _ && _(!1);
                var _ = _(_, _);
                (_ = {
                  mode: _,
                  lastCritical: _,
                  lastLocation: _.source,
                  lastCombine: null,
                }),
                  _.add(function () {
                    _("onDragStart", function () {
                      return _(_().onDragStart, _, _, _.onDragStart);
                    });
                  });
              },
              _ = function (_, _) {
                var _ = _(_),
                  _ = _(_);
                _ || _(!1);
                var _ = !_(_, _.lastCritical);
                _ && (_.lastCritical = _);
                var _ = !_(_.lastLocation, _);
                _ && (_.lastLocation = _);
                var _ = !_(_.lastCombine, _);
                if ((_ && (_.lastCombine = _), !(!_ && !_ && !_))) {
                  var _ = (0, _._)({}, _(_, _.mode), {
                    combine: _,
                    destination: _,
                  });
                  _.add(function () {
                    _("onDragUpdate", function () {
                      return _(_().onDragUpdate, _, _, _.onDragUpdate);
                    });
                  });
                }
              },
              _ = function () {
                _ || _(!1), _.flush();
              },
              _ = function (_) {
                _ || _(!1),
                  (_ = null),
                  _("onDragEnd", function () {
                    return _(_().onDragEnd, _, _, _.onDragEnd);
                  });
              },
              _ = function () {
                if (_) {
                  var _ = (0, _._)({}, _(_.lastCritical, _.mode), {
                    combine: null,
                    destination: null,
                    reason: "CANCEL",
                  });
                  _(_);
                }
              };
            return {
              beforeCapture: _,
              beforeStart: _,
              start: _,
              update: _,
              flush: _,
              drop: _,
              abort: _,
            };
          },
          _ = function (_, _) {
            var _ = _(_, _);
            return function (_) {
              return function (_) {
                return function (_) {
                  if (_.type === "BEFORE_INITIAL_CAPTURE") {
                    _.beforeCapture(
                      _.payload.draggableId,
                      _.payload.movementMode,
                    );
                    return;
                  }
                  if (_.type === "INITIAL_PUBLISH") {
                    var _ = _.payload.critical;
                    _.beforeStart(_, _.payload.movementMode),
                      _(_),
                      _.start(_, _.payload.movementMode);
                    return;
                  }
                  if (_.type === "DROP_COMPLETE") {
                    var _ = _.payload.completed.result;
                    _.flush(), _(_), _.drop(_);
                    return;
                  }
                  if ((_(_), _.type === "FLUSH")) {
                    _.abort();
                    return;
                  }
                  var _ = _.getState();
                  _.phase === "DRAGGING" && _.update(_.critical, _.impact);
                };
              };
            };
          },
          _ = function (_) {
            return function (_) {
              return function (_) {
                if (_.type !== "DROP_ANIMATION_FINISHED") {
                  _(_);
                  return;
                }
                var _ = _.getState();
                _.phase !== "DROP_ANIMATING" && _(!1),
                  _.dispatch(
                    _({
                      completed: _.completed,
                    }),
                  );
              };
            };
          },
          _ = function (_) {
            var _ = null,
              _ = null;
            function _() {
              _ && (cancelAnimationFrame(_), (_ = null)),
                _ && (_(), (_ = null));
            }
            return function (_) {
              return function (_) {
                if (
                  ((_.type === "FLUSH" ||
                    _.type === "DROP_COMPLETE" ||
                    _.type === "DROP_ANIMATION_FINISHED") &&
                    _(),
                  _(_),
                  _.type === "DROP_ANIMATE")
                ) {
                  var _ = {
                    eventName: "scroll",
                    options: {
                      capture: !0,
                      passive: !1,
                      once: !0,
                    },
                    _: function () {
                      var _ = _.getState();
                      _.phase === "DROP_ANIMATING" && _.dispatch(_());
                    },
                  };
                  _ = requestAnimationFrame(function () {
                    (_ = null), (_ = _(window, [_]));
                  });
                }
              };
            };
          },
          _ = function (_) {
            return function () {
              return function (_) {
                return function (_) {
                  (_.type === "DROP_COMPLETE" ||
                    _.type === "FLUSH" ||
                    _.type === "DROP_ANIMATE") &&
                    _.stopPublishing(),
                    _(_);
                };
              };
            };
          },
          _ = function (_) {
            var _ = !1;
            return function () {
              return function (_) {
                return function (_) {
                  if (_.type === "INITIAL_PUBLISH") {
                    (_ = !0),
                      _.tryRecordFocus(_.payload.critical.draggable._),
                      _(_),
                      _.tryRestoreFocusRecorded();
                    return;
                  }
                  if ((_(_), !!_)) {
                    if (_.type === "FLUSH") {
                      (_ = !1), _.tryRestoreFocusRecorded();
                      return;
                    }
                    if (_.type === "DROP_COMPLETE") {
                      _ = !1;
                      var _ = _.payload.completed.result;
                      _.combine &&
                        _.tryShiftRecord(_.draggableId, _.combine.draggableId),
                        _.tryRestoreFocusRecorded();
                    }
                  }
                };
              };
            };
          },
          _ = function (_) {
            return (
              _.type === "DROP_COMPLETE" ||
              _.type === "DROP_ANIMATE" ||
              _.type === "FLUSH"
            );
          },
          _ = function (_) {
            return function (_) {
              return function (_) {
                return function (_) {
                  if (_(_)) {
                    _.stop(), _(_);
                    return;
                  }
                  if (_.type === "INITIAL_PUBLISH") {
                    _(_);
                    var _ = _.getState();
                    _.phase !== "DRAGGING" && _(!1), _.start(_);
                    return;
                  }
                  _(_), _.scroll(_.getState());
                };
              };
            };
          },
          _ = function (_) {
            return function (_) {
              return function (_) {
                if ((_(_), _.type === "PUBLISH_WHILE_DRAGGING")) {
                  var _ = _.getState();
                  _.phase === "DROP_PENDING" &&
                    (_.isWaiting ||
                      _.dispatch(
                        _({
                          reason: _.reason,
                        }),
                      ));
                }
              };
            };
          },
          _ = _._,
          _ = function (_) {
            var _ = _.dimensionMarshal,
              _ = _.focusMarshal,
              _ = _.styleMarshal,
              _ = _.getResponders,
              _ = _.announce,
              _ = _.autoScroller;
            return (0, _._)(
              _,
              _((0, _._)(_(_), _(_), _(_), _, _, _, _, _(_), _, _(_), _(_, _))),
            );
          },
          _ = function () {
            return {
              additions: {},
              removals: {},
              modified: {},
            };
          };
        function _(_) {
          var _ = _.registry,
            _ = _.callbacks,
            _ = _(),
            _ = null,
            _ = function () {
              _ ||
                (_.collectionStarting(),
                (_ = requestAnimationFrame(function () {
                  (_ = null), _();
                  var _ = _,
                    _ = _.additions,
                    _ = _.removals,
                    _ = _.modified,
                    _ = Object.keys(_)
                      .map(function (_) {
                        return _.draggable.getById(_).getDimension(_);
                      })
                      .sort(function (_, _) {
                        return _.descriptor.index - _.descriptor.index;
                      }),
                    _ = Object.keys(_).map(function (_) {
                      var _ = _.droppable.getById(_),
                        _ = _.callbacks.getScrollWhileDragging();
                      return {
                        droppableId: _,
                        scroll: _,
                      };
                    }),
                    _ = {
                      additions: _,
                      removals: Object.keys(_),
                      modified: _,
                    };
                  (_ = _()), _(), _.publish(_);
                })));
            },
            _ = function (_) {
              var _ = _.descriptor._;
              (_.additions[_] = _),
                (_.modified[_.descriptor.droppableId] = !0),
                _.removals[_] && delete _.removals[_],
                _();
            },
            _ = function (_) {
              var _ = _.descriptor;
              (_.removals[_._] = !0),
                (_.modified[_.droppableId] = !0),
                _.additions[_._] && delete _.additions[_._],
                _();
            },
            _ = function () {
              _ && (cancelAnimationFrame(_), (_ = null), (_ = _()));
            };
          return {
            add: _,
            remove: _,
            stop: _,
          };
        }
        var _ = function (_) {
            var _ = _.scrollHeight,
              _ = _.scrollWidth,
              _ = _.height,
              _ = _.width,
              _ = _(
                {
                  _: _,
                  _: _,
                },
                {
                  _: _,
                  _: _,
                },
              ),
              _ = {
                _: Math.max(0, _._),
                _: Math.max(0, _._),
              };
            return _;
          },
          _ = function (_) {
            var _ = _.document.documentElement;
            return _ || _(!1), _;
          },
          _ = function (_) {
            var _ = _(_),
              _ = _({
                scrollHeight: _.scrollHeight,
                scrollWidth: _.scrollWidth,
                width: _.clientWidth,
                height: _.clientHeight,
              });
            return _;
          },
          _ = function (_) {
            var _ = _(_),
              _ = _(_),
              _ = _._,
              _ = _._,
              _ = _(_),
              _ = _.clientWidth,
              _ = _.clientHeight,
              _ = _ + _,
              _ = _ + _,
              _ = (0, _._)({
                top: _,
                left: _,
                right: _,
                bottom: _,
              }),
              _ = {
                frame: _,
                scroll: {
                  initial: _,
                  current: _,
                  max: _,
                  diff: {
                    value: _,
                    displacement: _,
                  },
                },
              };
            return _;
          },
          _ = function (_) {
            var _ = _.windowToUse,
              _ = _.critical,
              _ = _.scrollOptions,
              _ = _.registry;
            _();
            var _ = _(_),
              _ = _.scroll.current,
              _ = _.droppable,
              _ = _.droppable.getAllByType(_.type).map(function (_) {
                return _.callbacks.getDimensionAndWatchScroll(_, _);
              }),
              _ = _.draggable.getAllByType(_.draggable.type).map(function (_) {
                return _.getDimension(_);
              }),
              _ = {
                draggables: _(_),
                droppables: _(_),
              };
            _();
            var _ = {
              dimensions: _,
              critical: _,
              viewport: _,
            };
            return _;
          };
        function _(_, _, _) {
          if (_.descriptor._ === _._ || _.descriptor.type !== _.type) return !1;
          var _ = _.droppable.getById(_.descriptor.droppableId);
          return _.descriptor.mode === "virtual";
        }
        var _ = function (_, _, _) {
            var _ = null,
              _ = _({
                callbacks: {
                  publish: _.publishWhileDragging,
                  collectionStarting: _.collectionStarting,
                },
                registry: _,
              }),
              _ = function (_, _) {
                _.droppable.exists(_) || _(!1),
                  _ &&
                    _.updateDroppableIsEnabled({
                      _: _,
                      isEnabled: _,
                    });
              },
              _ = function (_, _) {
                _ &&
                  (_.droppable.exists(_) || _(!1),
                  _.updateDroppableIsCombineEnabled({
                    _: _,
                    isCombineEnabled: _,
                  }));
              },
              _ = function (_, _) {
                _ &&
                  (_.droppable.exists(_) || _(!1),
                  _.updateDroppableScroll({
                    _: _,
                    newScroll: _,
                  }));
              },
              _ = function (_, _) {
                _ && _.droppable.getById(_).callbacks.scroll(_);
              },
              _ = function () {
                if (_) {
                  _.stop();
                  var _ = _.critical.droppable;
                  _.droppable.getAllByType(_.type).forEach(function (_) {
                    return _.callbacks.dragStopped();
                  }),
                    _.unsubscribe(),
                    (_ = null);
                }
              },
              _ = function (_) {
                _ || _(!1);
                var _ = _.critical.draggable;
                _.type === "ADDITION" && _(_, _, _.value) && _.add(_.value),
                  _.type === "REMOVAL" && _(_, _, _.value) && _.remove(_.value);
              },
              _ = function (_) {
                _ && _(!1);
                var _ = _.draggable.getById(_.draggableId),
                  _ = _.droppable.getById(_.descriptor.droppableId),
                  _ = {
                    draggable: _.descriptor,
                    droppable: _.descriptor,
                  },
                  _ = _.subscribe(_);
                return (
                  (_ = {
                    critical: _,
                    unsubscribe: _,
                  }),
                  _({
                    windowToUse: _,
                    critical: _,
                    registry: _,
                    scrollOptions: _.scrollOptions,
                  })
                );
              },
              _ = {
                updateDroppableIsEnabled: _,
                updateDroppableIsCombineEnabled: _,
                scrollDroppable: _,
                updateDroppableScroll: _,
                startPublishing: _,
                stopPublishing: _,
              };
            return _;
          },
          _ = function (_, _) {
            return _.phase === "IDLE"
              ? !0
              : _.phase !== "DROP_ANIMATING" ||
                  _.completed.result.draggableId === _
                ? !1
                : _.completed.result.reason === "DROP";
          },
          _ = function (_) {
            window.scrollBy(_._, _._);
          },
          _ = _(function (_) {
            return _(_).filter(function (_) {
              return !(!_.isEnabled || !_.frame);
            });
          }),
          _ = function (_, _) {
            var _ = _(_(_), function (_) {
              return _.frame || _(!1), _(_.frame.pageMarginBox)(_);
            });
            return _;
          },
          _ = function (_) {
            var _ = _.center,
              _ = _.destination,
              _ = _.droppables;
            if (_) {
              var _ = _[_];
              return _.frame ? _ : null;
            }
            var _ = _(_, _);
            return _;
          },
          _ = {
            startFromPercentage: 0.25,
            maxScrollAtPercentage: 0.05,
            maxPixelScroll: 28,
            ease: function (_) {
              return Math.pow(_, 2);
            },
            durationDampening: {
              stopDampeningAt: 1200,
              accelerateAt: 360,
            },
          },
          _ = function (_, _) {
            var _ = _[_.size] * _.startFromPercentage,
              _ = _[_.size] * _.maxScrollAtPercentage,
              _ = {
                startScrollingFrom: _,
                maxScrollValueAt: _,
              };
            return _;
          },
          _ = function (_) {
            var _ = _.startOfRange,
              _ = _.endOfRange,
              _ = _.current,
              _ = _ - _;
            if (_ === 0) return 0;
            var _ = _ - _,
              _ = _ / _;
            return _;
          },
          _ = 1,
          _ = function (_, _) {
            if (_ > _.startScrollingFrom) return 0;
            if (_ <= _.maxScrollValueAt) return _.maxPixelScroll;
            if (_ === _.startScrollingFrom) return _;
            var _ = _({
                startOfRange: _.maxScrollValueAt,
                endOfRange: _.startScrollingFrom,
                current: _,
              }),
              _ = 1 - _,
              _ = _.maxPixelScroll * _.ease(_);
            return Math.ceil(_);
          },
          _ = _.durationDampening.accelerateAt,
          _ = _.durationDampening.stopDampeningAt,
          _ = function (_, _) {
            var _ = _,
              _ = _,
              _ = Date.now(),
              _ = _ - _;
            if (_ >= _) return _;
            if (_ < _) return _;
            var _ = _({
                startOfRange: _,
                endOfRange: _,
                current: _,
              }),
              _ = _ * _.ease(_);
            return Math.ceil(_);
          },
          _ = function (_) {
            var _ = _.distanceToEdge,
              _ = _.thresholds,
              _ = _.dragStartTime,
              _ = _.shouldUseTimeDampening,
              _ = _(_, _);
            return _ === 0 ? 0 : _ ? Math.max(_(_, _), _) : _;
          },
          _ = function (_) {
            var _ = _.container,
              _ = _.distanceToEdges,
              _ = _.dragStartTime,
              _ = _.axis,
              _ = _.shouldUseTimeDampening,
              _ = _(_, _),
              _ = _[_.end] < _[_.start];
            return _
              ? _({
                  distanceToEdge: _[_.end],
                  thresholds: _,
                  dragStartTime: _,
                  shouldUseTimeDampening: _,
                })
              : -1 *
                  _({
                    distanceToEdge: _[_.start],
                    thresholds: _,
                    dragStartTime: _,
                    shouldUseTimeDampening: _,
                  });
          },
          _ = function (_) {
            var _ = _.container,
              _ = _.subject,
              _ = _.proposedScroll,
              _ = _.height > _.height,
              _ = _.width > _.width;
            return !_ && !_
              ? _
              : _ && _
                ? null
                : {
                    _: _ ? 0 : _._,
                    _: _ ? 0 : _._,
                  };
          },
          _ = _(function (_) {
            return _ === 0 ? 0 : _;
          }),
          _ = function (_) {
            var _ = _.dragStartTime,
              _ = _.container,
              _ = _.subject,
              _ = _.center,
              _ = _.shouldUseTimeDampening,
              _ = {
                top: _._ - _.top,
                right: _.right - _._,
                bottom: _.bottom - _._,
                left: _._ - _.left,
              },
              _ = _({
                container: _,
                distanceToEdges: _,
                dragStartTime: _,
                axis: _,
                shouldUseTimeDampening: _,
              }),
              _ = _({
                container: _,
                distanceToEdges: _,
                dragStartTime: _,
                axis: _,
                shouldUseTimeDampening: _,
              }),
              _ = _({
                _: _,
                _: _,
              });
            if (_(_, _)) return null;
            var _ = _({
              container: _,
              subject: _,
              proposedScroll: _,
            });
            return _ ? (_(_, _) ? null : _) : null;
          },
          _ = _(function (_) {
            return _ === 0 ? 0 : _ > 0 ? 1 : -1;
          }),
          _ = (function () {
            var _ = function (_, _) {
              return _ < 0 ? _ : _ > _ ? _ - _ : 0;
            };
            return function (_) {
              var _ = _.current,
                _ = _.max,
                _ = _.change,
                _ = _(_, _),
                _ = {
                  _: _(_._, _._),
                  _: _(_._, _._),
                };
              return _(_, _) ? null : _;
            };
          })(),
          _ = function (_) {
            var _ = _.max,
              _ = _.current,
              _ = _.change,
              _ = {
                _: Math.max(_._, _._),
                _: Math.max(_._, _._),
              },
              _ = _(_),
              _ = _({
                max: _,
                current: _,
                change: _,
              });
            return !_ || (_._ !== 0 && _._ === 0) || (_._ !== 0 && _._ === 0);
          },
          _ = function (_, _) {
            return _({
              current: _.scroll.current,
              max: _.scroll.max,
              change: _,
            });
          },
          _ = function (_, _) {
            if (!_(_, _)) return null;
            var _ = _.scroll.max,
              _ = _.scroll.current;
            return _({
              current: _,
              max: _,
              change: _,
            });
          },
          _ = function (_, _) {
            var _ = _.frame;
            return _
              ? _({
                  current: _.scroll.current,
                  max: _.scroll.max,
                  change: _,
                })
              : !1;
          },
          _ = function (_, _) {
            var _ = _.frame;
            return !_ || !_(_, _)
              ? null
              : _({
                  current: _.scroll.current,
                  max: _.scroll.max,
                  change: _,
                });
          },
          _ = function (_) {
            var _ = _.viewport,
              _ = _.subject,
              _ = _.center,
              _ = _.dragStartTime,
              _ = _.shouldUseTimeDampening,
              _ = _({
                dragStartTime: _,
                container: _.frame,
                subject: _,
                center: _,
                shouldUseTimeDampening: _,
              });
            return _ && _(_, _) ? _ : null;
          },
          _ = function (_) {
            var _ = _.droppable,
              _ = _.subject,
              _ = _.center,
              _ = _.dragStartTime,
              _ = _.shouldUseTimeDampening,
              _ = _.frame;
            if (!_) return null;
            var _ = _({
              dragStartTime: _,
              container: _.pageMarginBox,
              subject: _,
              center: _,
              shouldUseTimeDampening: _,
            });
            return _ && _(_, _) ? _ : null;
          },
          _ = function (_) {
            var _ = _.state,
              _ = _.dragStartTime,
              _ = _.shouldUseTimeDampening,
              _ = _.scrollWindow,
              _ = _.scrollDroppable,
              _ = _.current.page.borderBoxCenter,
              _ = _.dimensions.draggables[_.critical.draggable._],
              _ = _.page.marginBox;
            if (_.isWindowScrollAllowed) {
              var _ = _.viewport,
                _ = _({
                  dragStartTime: _,
                  viewport: _,
                  subject: _,
                  center: _,
                  shouldUseTimeDampening: _,
                });
              if (_) {
                _(_);
                return;
              }
            }
            var _ = _({
              center: _,
              destination: _(_.impact),
              droppables: _.dimensions.droppables,
            });
            if (_) {
              var _ = _({
                dragStartTime: _,
                droppable: _,
                subject: _,
                center: _,
                shouldUseTimeDampening: _,
              });
              _ && _(_.descriptor._, _);
            }
          },
          _ = function (_) {
            var _ = _.scrollWindow,
              _ = _.scrollDroppable,
              _ = (0, _._)(_),
              _ = (0, _._)(_),
              _ = null,
              _ = function (_) {
                _ || _(!1);
                var _ = _,
                  _ = _.shouldUseTimeDampening,
                  _ = _.dragStartTime;
                _({
                  state: _,
                  scrollWindow: _,
                  scrollDroppable: _,
                  dragStartTime: _,
                  shouldUseTimeDampening: _,
                });
              },
              _ = function (_) {
                _(), _ && _(!1);
                var _ = Date.now(),
                  _ = !1,
                  _ = function () {
                    _ = !0;
                  };
                _({
                  state: _,
                  dragStartTime: 0,
                  shouldUseTimeDampening: !1,
                  scrollWindow: _,
                  scrollDroppable: _,
                }),
                  (_ = {
                    dragStartTime: _,
                    shouldUseTimeDampening: _,
                  }),
                  _(),
                  _ && _(_);
              },
              _ = function () {
                _ && (_.cancel(), _.cancel(), (_ = null));
              };
            return {
              start: _,
              stop: _,
              scroll: _,
            };
          },
          _ = function (_) {
            var _ = _.move,
              _ = _.scrollDroppable,
              _ = _.scrollWindow,
              _ = function (_, _) {
                var _ = _(_.current.client.selection, _);
                _({
                  client: _,
                });
              },
              _ = function (_, _) {
                if (!_(_, _)) return _;
                var _ = _(_, _);
                if (!_) return _(_.descriptor._, _), null;
                var _ = _(_, _);
                _(_.descriptor._, _);
                var _ = _(_, _);
                return _;
              },
              _ = function (_, _, _) {
                if (!_ || !_(_, _)) return _;
                var _ = _(_, _);
                if (!_) return _(_), null;
                var _ = _(_, _);
                _(_);
                var _ = _(_, _);
                return _;
              },
              _ = function (_) {
                var _ = _.scrollJumpRequest;
                if (_) {
                  var _ = _(_.impact);
                  _ || _(!1);
                  var _ = _(_.dimensions.droppables[_], _);
                  if (_) {
                    var _ = _.viewport,
                      _ = _(_.isWindowScrollAllowed, _, _);
                    _ && _(_, _);
                  }
                }
              };
            return _;
          },
          _ = function (_) {
            var _ = _.scrollDroppable,
              _ = _.scrollWindow,
              _ = _.move,
              _ = _({
                scrollWindow: _,
                scrollDroppable: _,
              }),
              _ = _({
                move: _,
                scrollWindow: _,
                scrollDroppable: _,
              }),
              _ = function (_) {
                if (_.phase === "DRAGGING") {
                  if (_.movementMode === "FLUID") {
                    _.scroll(_);
                    return;
                  }
                  _.scrollJumpRequest && _(_);
                }
              },
              _ = {
                scroll: _,
                start: _.start,
                stop: _.stop,
              };
            return _;
          },
          _ = "data-rbd",
          _ = (function () {
            var _ = _ + "-drag-handle";
            return {
              base: _,
              draggableId: _ + "-draggable-id",
              contextId: _ + "-context-id",
            };
          })(),
          _ = (function () {
            var _ = _ + "-draggable";
            return {
              base: _,
              contextId: _ + "-context-id",
              _: _ + "-id",
            };
          })(),
          _ = (function () {
            var _ = _ + "-droppable";
            return {
              base: _,
              contextId: _ + "-context-id",
              _: _ + "-id",
            };
          })(),
          _ = {
            contextId: _ + "-scroll-container-context-id",
          },
          _ = function (_) {
            return function (_) {
              return "[" + _ + '="' + _ + '"]';
            };
          },
          _ = function (_, _) {
            return _.map(function (_) {
              var _ = _.styles[_];
              return _ ? _.selector + " { " + _ + " }" : "";
            }).join(" ");
          },
          _ = "pointer-events: none;",
          _ = function (_) {
            var _ = _(_),
              _ = (function () {
                var _ = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
                return {
                  selector: _(_.contextId),
                  styles: {
                    always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                    resting: _,
                    dragging: _,
                    dropAnimating: _,
                  },
                };
              })(),
              _ = (function () {
                var _ =
                  `
      transition: ` +
                  _.outOfTheWay +
                  `;
    `;
                return {
                  selector: _(_.contextId),
                  styles: {
                    dragging: _,
                    dropAnimating: _,
                    userCancel: _,
                  },
                };
              })(),
              _ = {
                selector: _(_.contextId),
                styles: {
                  always: "overflow-anchor: none;",
                },
              },
              _ = {
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
              _ = [_, _, _, _];
            return {
              always: _(_, "always"),
              resting: _(_, "resting"),
              dragging: _(_, "dragging"),
              dropAnimating: _(_, "dropAnimating"),
              userCancel: _(_, "userCancel"),
            };
          },
          _ =
            typeof window < "u" &&
            typeof window.document < "u" &&
            typeof window.document.createElement < "u"
              ? _.useLayoutEffect
              : _.useEffect,
          _ = function (_) {
            var _ = _ || document.querySelector("head");
            return _ || _(!1), _;
          },
          _ = function (_) {
            var _ = document.createElement("style");
            return _ && _.setAttribute("nonce", _), (_.type = "text/css"), _;
          };
        function _(_, _, _) {
          var _ = (0, _._)(
              function () {
                return _(_);
              },
              [_],
            ),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            _ = (0, _._)(
              _(function (_) {
                var _ = _.current;
                _ || _(!1), (_.textContent = _);
              }),
              [],
            ),
            _ = (0, _._)(function (_) {
              var _ = _.current;
              _ || _(!1), (_.textContent = _);
            }, []);
          _(
            function () {
              (!_.current && !_.current) || _(!1);
              var _ = _(_),
                _ = _(_);
              (_.current = _),
                (_.current = _),
                _.setAttribute(_ + "-always", _),
                _.setAttribute(_ + "-dynamic", _);
              var _ = _(_);
              return (
                _.appendChild(_),
                _.appendChild(_),
                _(_.always),
                _(_.resting),
                function () {
                  var _ = function (_) {
                    var _ = _.current;
                    _ || _(!1), _.removeChild(_), (_.current = null);
                  };
                  _(_), _(_);
                }
              );
            },
            [_, _, _, _.always, _.resting, _, _],
          );
          var _ = (0, _._)(
              function () {
                return _(_.dragging);
              },
              [_, _.dragging],
            ),
            _ = (0, _._)(
              function (_) {
                if (_ === "DROP") {
                  _(_.dropAnimating);
                  return;
                }
                _(_.userCancel);
              },
              [_, _.dropAnimating, _.userCancel],
            ),
            _ = (0, _._)(
              function () {
                _.current && _(_.resting);
              },
              [_, _.resting],
            ),
            _ = (0, _._)(
              function () {
                return {
                  dragging: _,
                  dropping: _,
                  resting: _,
                };
              },
              [_, _, _],
            );
          return _;
        }
        function _(_) {
          var _ = _.composedPath && _.composedPath()[0];
          return _ || _.target;
        }
        function _(_) {
          var _ = _ && _.composedPath && _.composedPath()[0],
            _ = _ && _.getRootNode();
          return _ || document;
        }
        function _(_, _, _) {
          var _ = _ && _.getRootNode(),
            _ = _ && _.querySelectorAll ? _ : document,
            _ = _(_.querySelectorAll(_)),
            _ = _(_, _);
          return !_ && _.host ? _(_.host, _, _) : _;
        }
        var _ = function (_) {
          return _ && _.ownerDocument ? _.ownerDocument.defaultView : window;
        };
        function _(_) {
          return _ instanceof _(_).HTMLElement;
        }
        function _(_, _, _) {
          var _ = "[" + _.contextId + '="' + _ + '"]',
            _ = _(_, _, function (_) {
              return _.getAttribute(_.draggableId) === _;
            });
          return !_ || !_(_) ? null : _;
        }
        function _(_) {
          var _ = (0, _.useRef)({}),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(!1),
            _ = (0, _._)(function (_, _) {
              var _ = {
                _: _,
                focus: _,
              };
              return (
                (_.current[_] = _),
                function () {
                  var _ = _.current,
                    _ = _[_];
                  _ !== _ && delete _[_];
                }
              );
            }, []),
            _ = (0, _._)(
              function (_) {
                var _ = _(_, _);
                _ && _ !== document.activeElement && _.focus();
              },
              [_],
            ),
            _ = (0, _._)(function (_, _) {
              _.current === _ && (_.current = _);
            }, []),
            _ = (0, _._)(
              function () {
                _.current ||
                  (_.current &&
                    (_.current = requestAnimationFrame(function () {
                      _.current = null;
                      var _ = _.current;
                      _ && _(_);
                    })));
              },
              [_],
            ),
            _ = (0, _._)(function (_) {
              _.current = null;
              var _ = document.activeElement;
              _ && _.getAttribute(_.draggableId) === _ && (_.current = _);
            }, []);
          _(function () {
            return (
              (_.current = !0),
              function () {
                _.current = !1;
                var _ = _.current;
                _ && cancelAnimationFrame(_);
              }
            );
          }, []);
          var _ = (0, _._)(
            function () {
              return {
                register: _,
                tryRecordFocus: _,
                tryRestoreFocusRecorded: _,
                tryShiftRecord: _,
              };
            },
            [_, _, _, _],
          );
          return _;
        }
        function _() {
          var _ = {
              draggables: {},
              droppables: {},
            },
            _ = [];
          function _(_) {
            return (
              _.push(_),
              function () {
                var _ = _.indexOf(_);
                _ !== -1 && _.splice(_, 1);
              }
            );
          }
          function _(_) {
            _.length &&
              _.forEach(function (_) {
                return _(_);
              });
          }
          function _(_) {
            return _.draggables[_] || null;
          }
          function _(_) {
            var _ = _(_);
            return _ || _(!1), _;
          }
          var _ = {
            register: function (_) {
              (_.draggables[_.descriptor._] = _),
                _({
                  type: "ADDITION",
                  value: _,
                });
            },
            update: function (_, _) {
              var _ = _.draggables[_.descriptor._];
              _ &&
                _.uniqueId === _.uniqueId &&
                (delete _.draggables[_.descriptor._],
                (_.draggables[_.descriptor._] = _));
            },
            unregister: function (_) {
              var _ = _.descriptor._,
                _ = _(_);
              _ &&
                _.uniqueId === _.uniqueId &&
                (delete _.draggables[_],
                _({
                  type: "REMOVAL",
                  value: _,
                }));
            },
            getById: _,
            findById: _,
            exists: function (_) {
              return !!_(_);
            },
            getAllByType: function (_) {
              return _(_.draggables).filter(function (_) {
                return _.descriptor.type === _;
              });
            },
          };
          function _(_) {
            return _.droppables[_] || null;
          }
          function _(_) {
            var _ = _(_);
            return _ || _(!1), _;
          }
          var _ = {
            register: function (_) {
              _.droppables[_.descriptor._] = _;
            },
            unregister: function (_) {
              var _ = _(_.descriptor._);
              _ &&
                _.uniqueId === _.uniqueId &&
                delete _.droppables[_.descriptor._];
            },
            getById: _,
            findById: _,
            exists: function (_) {
              return !!_(_);
            },
            getAllByType: function (_) {
              return _(_.droppables).filter(function (_) {
                return _.descriptor.type === _;
              });
            },
          };
          function _() {
            (_.draggables = {}), (_.droppables = {}), (_.length = 0);
          }
          return {
            draggable: _,
            droppable: _,
            subscribe: _,
            clean: _,
          };
        }
        function _() {
          var _ = (0, _._)(_, []);
          return (
            (0, _.useEffect)(
              function () {
                return function () {
                  requestAnimationFrame(_.clean);
                };
              },
              [_],
            ),
            _
          );
        }
        var _ = _.createContext(null),
          _ = function () {
            var _ = document.body;
            return _ || _(!1), _;
          },
          _ = {
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
          _ = function (_) {
            return "rbd-announcement-" + _;
          };
        function _(_) {
          var _ = (0, _._)(
              function () {
                return _(_);
              },
              [_],
            ),
            _ = (0, _.useRef)(null);
          (0, _.useEffect)(
            function () {
              var _ = document.createElement("div");
              return (
                (_.current = _),
                (_._ = _),
                _.setAttribute("aria-live", "assertive"),
                _.setAttribute("aria-atomic", "true"),
                (0, _._)(_.style, _),
                _().appendChild(_),
                function () {
                  setTimeout(function () {
                    var _ = _();
                    _.contains(_) && _.removeChild(_),
                      _ === _.current && (_.current = null);
                  });
                }
              );
            },
            [_],
          );
          var _ = (0, _._)(function (_) {
            var _ = _.current;
            if (_) {
              _.textContent = _;
              return;
            }
          }, []);
          return _;
        }
        var _ = 0,
          _ = {
            separator: "::",
          };
        function _() {
          _ = 0;
        }
        function _(_, _) {
          return (
            _ === void 0 && (_ = _),
            (0, _._)(
              function () {
                return "" + _ + _.separator + _++;
              },
              [_.separator, _],
            )
          );
        }
        function _(_) {
          var _ = _.contextId,
            _ = _.uniqueId;
          return "rbd-hidden-text-" + _ + "-" + _;
        }
        function _(_) {
          var _ = _.contextId,
            _ = _.text,
            _ = _("hidden-text", {
              separator: "-",
            }),
            _ = (0, _._)(
              function () {
                return _({
                  contextId: _,
                  uniqueId: _,
                });
              },
              [_, _],
            );
          return (
            (0, _.useEffect)(
              function () {
                var _ = document.createElement("div");
                return (
                  (_._ = _),
                  (_.textContent = _),
                  (_.style.display = "none"),
                  _().appendChild(_),
                  function () {
                    var _ = _();
                    _.contains(_) && _.removeChild(_);
                  }
                );
              },
              [_, _],
            ),
            _
          );
        }
        var _ = _.createContext(null),
          _ = {
            react: "^16.8.5 || ^17.0.0 || ^18.0.0",
            "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
          },
          _ = /(\d+)\.(\d+)\.(\d+)/,
          _ = function (_) {
            var _ = _.exec(_);
            _ == null && _(!1);
            var _ = Number(_[1]),
              _ = Number(_[2]),
              _ = Number(_[3]);
            return {
              major: _,
              minor: _,
              patch: _,
              raw: _,
            };
          },
          _ = function (_, _) {
            return _.major > _.major
              ? !0
              : _.major < _.major
                ? !1
                : _.minor > _.minor
                  ? !0
                  : _.minor < _.minor
                    ? !1
                    : _.patch >= _.patch;
          },
          _ = function (_, _) {
            var _ = _(_),
              _ = _(_);
            _(_, _);
          },
          _ = `
  We expect a html5 doctype: <!doctype html>
  This is to ensure consistent browser layout and measurement

  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md
`,
          _ = function (_) {
            var _ = _.doctype;
            _ && (_.name.toLowerCase(), _.publicId);
          };
        function _(_) {}
        function _(_, _) {}
        function _() {
          _(function () {
            _(_.react, _.version), _(document);
          }, []);
        }
        function _(_) {
          var _ = (0, _.useRef)(_);
          return (
            (0, _.useEffect)(function () {
              _.current = _;
            }),
            _
          );
        }
        function _() {
          var _ = null;
          function _() {
            return !!_;
          }
          function _(_) {
            return _ === _;
          }
          function _(_) {
            _ && _(!1);
            var _ = {
              abandon: _,
            };
            return (_ = _), _;
          }
          function _() {
            _ || _(!1), (_ = null);
          }
          function _() {
            _ && (_.abandon(), _());
          }
          return {
            isClaimed: _,
            isActive: _,
            claim: _,
            release: _,
            tryAbandon: _,
          };
        }
        var _ = 9,
          _ = 13,
          _ = 27,
          _ = 32,
          _ = 33,
          _ = 34,
          _ = 35,
          _ = 36,
          _ = 37,
          _ = 38,
          _ = 39,
          _ = 40,
          _,
          _ = ((_ = {}), (_[_] = !0), (_[_] = !0), _),
          _ = function (_) {
            _[_.keyCode] && _.preventDefault();
          },
          _ = (function () {
            var _ = "visibilitychange";
            if (typeof document > "u") return _;
            var _ = [_, "ms" + _, "webkit" + _, "moz" + _, "o" + _],
              _ = _(_, function (_) {
                return "on" + _ in document;
              });
            return _ || _;
          })(),
          _ = 0,
          _ = 5;
        function _(_, _) {
          return Math.abs(_._ - _._) >= _ || Math.abs(_._ - _._) >= _;
        }
        var _ = {
          type: "IDLE",
        };
        function _(_) {
          var _ = _.cancel,
            _ = _.completed,
            _ = _.getPhase,
            _ = _.setPhase;
          return [
            {
              eventName: "mousemove",
              _: function (_) {
                var _ = _.button,
                  _ = _.clientX,
                  _ = _.clientY;
                if (_ === _) {
                  var _ = {
                      _: _,
                      _: _,
                    },
                    _ = _();
                  if (_.type === "DRAGGING") {
                    _.preventDefault(), _.actions.move(_);
                    return;
                  }
                  _.type !== "PENDING" && _(!1);
                  var _ = _.point;
                  if (_(_, _)) {
                    _.preventDefault();
                    var _ = _.actions.fluidLift(_);
                    _({
                      type: "DRAGGING",
                      actions: _,
                    });
                  }
                }
              },
            },
            {
              eventName: "mouseup",
              _: function (_) {
                var _ = _();
                if (_.type !== "DRAGGING") {
                  _();
                  return;
                }
                _.preventDefault(),
                  _.actions.drop({
                    shouldBlockNextClick: !0,
                  }),
                  _();
              },
            },
            {
              eventName: "mousedown",
              _: function (_) {
                _().type === "DRAGGING" && _.preventDefault(), _();
              },
            },
            {
              eventName: "keydown",
              _: function (_) {
                var _ = _();
                if (_.type === "PENDING") {
                  _();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _();
                  return;
                }
                _(_);
              },
            },
            {
              eventName: "resize",
              _: _,
            },
            {
              eventName: "scroll",
              options: {
                passive: !0,
                capture: !1,
              },
              _: function () {
                _().type === "PENDING" && _();
              },
            },
            {
              eventName: "webkitmouseforcedown",
              _: function (_) {
                var _ = _();
                if (
                  (_.type === "IDLE" && _(!1),
                  _.actions.shouldRespectForcePress())
                ) {
                  _();
                  return;
                }
                _.preventDefault();
              },
            },
            {
              eventName: _,
              _: _,
            },
          ];
        }
        function _(_) {
          var _ = (0, _.useRef)(_),
            _ = (0, _.useRef)(_),
            _ = (0, _._)(
              function () {
                return {
                  eventName: "mousedown",
                  _: function (_) {
                    if (
                      !_.defaultPrevented &&
                      _.button === _ &&
                      !(_.ctrlKey || _.metaKey || _.shiftKey || _.altKey)
                    ) {
                      var _ = _.findClosestDraggableId(_);
                      if (_) {
                        var _ = _.tryGetLock(_, _, {
                          sourceEvent: _,
                        });
                        if (_) {
                          _.preventDefault();
                          var _ = {
                            _: _.clientX,
                            _: _.clientY,
                          };
                          _.current(), _(_, _);
                        }
                      }
                    }
                  },
                };
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                return {
                  eventName: "webkitmouseforcewillbegin",
                  _: function (_) {
                    if (!_.defaultPrevented) {
                      var _ = _.findClosestDraggableId(_);
                      if (_) {
                        var _ = _.findOptionsForDraggable(_);
                        _ &&
                          (_.shouldRespectForcePress ||
                            (_.canGetLock(_) && _.preventDefault()));
                      }
                    }
                  },
                };
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                var _ = {
                  passive: !1,
                  capture: !0,
                };
                _.current = _(_.getWindow(), [_, _], _);
              },
              [_, _, _],
            ),
            _ = (0, _._)(
              function () {
                var _ = _.current;
                _.type !== "IDLE" && ((_.current = _), _.current(), _());
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                var _ = _.current;
                _(),
                  _.type === "DRAGGING" &&
                    _.actions.cancel({
                      shouldBlockNextClick: !0,
                    }),
                  _.type === "PENDING" && _.actions.abort();
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                var _ = {
                    capture: !0,
                    passive: !1,
                  },
                  _ = _({
                    cancel: _,
                    completed: _,
                    getPhase: function () {
                      return _.current;
                    },
                    setPhase: function (_) {
                      _.current = _;
                    },
                  });
                _.current = _(_.getWindow(), _, _);
              },
              [_, _, _],
            ),
            _ = (0, _._)(
              function (_, _) {
                _.current.type !== "IDLE" && _(!1),
                  (_.current = {
                    type: "PENDING",
                    point: _,
                    actions: _,
                  }),
                  _();
              },
              [_],
            );
          _(
            function () {
              return (
                _(),
                function () {
                  _.current();
                }
              );
            },
            [_],
          );
        }
        var _;
        function _() {}
        var _ =
          ((_ = {}), (_[_] = !0), (_[_] = !0), (_[_] = !0), (_[_] = !0), _);
        function _(_, _) {
          function _() {
            _(), _.cancel();
          }
          function _() {
            _(), _.drop();
          }
          return [
            {
              eventName: "keydown",
              _: function (_) {
                if (_.keyCode === _) {
                  _.preventDefault(), _();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _.moveDown();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _.moveUp();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _.moveRight();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _.moveLeft();
                  return;
                }
                if (_[_.keyCode]) {
                  _.preventDefault();
                  return;
                }
                _(_);
              },
            },
            {
              eventName: "mousedown",
              _: _,
            },
            {
              eventName: "mouseup",
              _: _,
            },
            {
              eventName: "click",
              _: _,
            },
            {
              eventName: "touchstart",
              _: _,
            },
            {
              eventName: "resize",
              _: _,
            },
            {
              eventName: "wheel",
              _: _,
              options: {
                passive: !0,
              },
            },
            {
              eventName: _,
              _: _,
            },
          ];
        }
        function _(_) {
          var _ = (0, _.useRef)(_),
            _ = (0, _._)(
              function () {
                return {
                  eventName: "keydown",
                  _: function (_) {
                    if (_.defaultPrevented || _.keyCode !== _) return;
                    var _ = _.findClosestDraggableId(_);
                    if (!_) return;
                    var _ = _.tryGetLock(_, _, {
                      sourceEvent: _,
                    });
                    if (!_) return;
                    _.preventDefault();
                    var _ = !0,
                      _ = _.snapLift();
                    _.current();
                    function _() {
                      _ || _(!1), (_ = !1), _.current(), _();
                    }
                    _.current = _(_.getWindow(), _(_, _), {
                      capture: !0,
                      passive: !1,
                    });
                  },
                };
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                var _ = {
                  passive: !1,
                  capture: !0,
                };
                _.current = _(_.getWindow(), [_], _);
              },
              [_, _],
            );
          _(
            function () {
              return (
                _(),
                function () {
                  _.current();
                }
              );
            },
            [_],
          );
        }
        var _ = {
            type: "IDLE",
          },
          _ = 120,
          _ = 0.15;
        function _(_) {
          var _ = _.cancel,
            _ = _.getPhase;
          return [
            {
              eventName: "orientationchange",
              _: _,
            },
            {
              eventName: "resize",
              _: _,
            },
            {
              eventName: "contextmenu",
              _: function (_) {
                _.preventDefault();
              },
            },
            {
              eventName: "keydown",
              _: function (_) {
                if (_().type !== "DRAGGING") {
                  _();
                  return;
                }
                _.keyCode === _ && _.preventDefault(), _();
              },
            },
            {
              eventName: _,
              _: _,
            },
          ];
        }
        function _(_) {
          var _ = _.cancel,
            _ = _.completed,
            _ = _.getPhase;
          return [
            {
              eventName: "touchmove",
              options: {
                capture: !1,
              },
              _: function (_) {
                var _ = _();
                if (_.type !== "DRAGGING") {
                  _();
                  return;
                }
                _.hasMoved = !0;
                var _ = _.touches[0],
                  _ = _.clientX,
                  _ = _.clientY,
                  _ = {
                    _: _,
                    _: _,
                  };
                _.preventDefault(), _.actions.move(_);
              },
            },
            {
              eventName: "touchend",
              _: function (_) {
                var _ = _();
                if (_.type !== "DRAGGING") {
                  _();
                  return;
                }
                _.preventDefault(),
                  _.actions.drop({
                    shouldBlockNextClick: !0,
                  }),
                  _();
              },
            },
            {
              eventName: "touchcancel",
              _: function (_) {
                if (_().type !== "DRAGGING") {
                  _();
                  return;
                }
                _.preventDefault(), _();
              },
            },
            {
              eventName: "touchforcechange",
              _: function (_) {
                var _ = _();
                _.type === "IDLE" && _(!1);
                var _ = _.touches[0];
                if (_) {
                  var _ = _.force >= _;
                  if (_) {
                    var _ = _.actions.shouldRespectForcePress();
                    if (_.type === "PENDING") {
                      _ && _();
                      return;
                    }
                    if (_) {
                      if (_.hasMoved) {
                        _.preventDefault();
                        return;
                      }
                      _();
                      return;
                    }
                    _.preventDefault();
                  }
                }
              },
            },
            {
              eventName: _,
              _: _,
            },
          ];
        }
        function _(_) {
          var _ = (0, _.useRef)(_),
            _ = (0, _.useRef)(_),
            _ = (0, _._)(function () {
              return _.current;
            }, []),
            _ = (0, _._)(function (_) {
              _.current = _;
            }, []),
            _ = (0, _._)(
              function () {
                return {
                  eventName: "touchstart",
                  _: function (_) {
                    if (!_.defaultPrevented) {
                      var _ = _.findClosestDraggableId(_);
                      if (_) {
                        var _ = _.tryGetLock(_, _, {
                          sourceEvent: _,
                        });
                        if (_) {
                          var _ = _.touches[0],
                            _ = _.clientX,
                            _ = _.clientY,
                            _ = {
                              _: _,
                              _: _,
                            };
                          _.current(), _(_, _);
                        }
                      }
                    }
                  },
                };
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                var _ = {
                  capture: !0,
                  passive: !1,
                };
                _.current = _(_.getWindow(), [_], _);
              },
              [_, _],
            ),
            _ = (0, _._)(
              function () {
                var _ = _.current;
                _.type !== "IDLE" &&
                  (_.type === "PENDING" && clearTimeout(_.longPressTimerId),
                  _(_),
                  _.current(),
                  _());
              },
              [_, _],
            ),
            _ = (0, _._)(
              function () {
                var _ = _.current;
                _(),
                  _.type === "DRAGGING" &&
                    _.actions.cancel({
                      shouldBlockNextClick: !0,
                    }),
                  _.type === "PENDING" && _.actions.abort();
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                var _ = {
                    capture: !0,
                    passive: !1,
                  },
                  _ = {
                    cancel: _,
                    completed: _,
                    getPhase: _,
                  },
                  _ = _(_.getWindow(), _(_), _),
                  _ = _(_.getWindow(), _(_), _);
                _.current = function () {
                  _(), _();
                };
              },
              [_, _, _, _],
            ),
            _ = (0, _._)(
              function () {
                var _ = _();
                _.type !== "PENDING" && _(!1);
                var _ = _.actions.fluidLift(_.point);
                _({
                  type: "DRAGGING",
                  actions: _,
                  hasMoved: !1,
                });
              },
              [_, _],
            ),
            _ = (0, _._)(
              function (_, _) {
                _().type !== "IDLE" && _(!1);
                var _ = setTimeout(_, _);
                _({
                  type: "PENDING",
                  point: _,
                  actions: _,
                  longPressTimerId: _,
                }),
                  _();
              },
              [_, _, _, _],
            );
          _(
            function () {
              return (
                _(),
                function () {
                  _.current();
                  var _ = _();
                  _.type === "PENDING" &&
                    (clearTimeout(_.longPressTimerId), _(_));
                }
              );
            },
            [_, _, _],
          ),
            _(
              function () {
                var _ = _(_.getWindow(), [
                  {
                    eventName: "touchmove",
                    _: function () {},
                    options: {
                      capture: !1,
                      passive: !1,
                    },
                  },
                ]);
                return _;
              },
              [_],
            );
        }
        function _(_) {}
        var _ = {
          input: !0,
          button: !0,
          textarea: !0,
          select: !0,
          option: !0,
          optgroup: !0,
          video: !0,
          audio: !0,
        };
        function _(_, _) {
          if (_ == null) return !1;
          var _ = !!_[_.tagName.toLowerCase()];
          if (_) return !0;
          var _ = _.getAttribute("contenteditable");
          return _ === "true" || _ === ""
            ? !0
            : _ === _
              ? !1
              : _(_, _.parentElement);
        }
        function _(_, _) {
          var _ = _(_);
          return _(_) ? _(_, _) : !1;
        }
        var _ = function (_) {
          return (0, _._)(_.getBoundingClientRect()).center;
        };
        function _(_) {
          return _ instanceof _(_).Element;
        }
        var _ = (function () {
          var _ = "matches";
          if (typeof document > "u") return _;
          var _ = [_, "msMatchesSelector", "webkitMatchesSelector"],
            _ = _(_, function (_) {
              return _ in Element.prototype;
            });
          return _ || _;
        })();
        function _(_, _) {
          return _ == null ? null : _[_](_) ? _ : _(_.parentElement, _);
        }
        function _(_, _) {
          return _.closest ? _.closest(_) : _(_, _);
        }
        function _(_, _) {
          if (!_ || _ === document || _ === window) return null;
          var _ = _(_, _);
          if (_) return _;
          var _ = _.getRootNode();
          return _(_.host, _);
        }
        function _(_) {
          return "[" + _.contextId + '="' + _ + '"]';
        }
        function _(_, _) {
          var _ = _(_);
          if (!_(_)) return null;
          var _ = _(_),
            _ = _(_, _);
          return !_ || !_(_) ? null : _;
        }
        function _(_, _) {
          var _ = _(_, _);
          return _ ? _.getAttribute(_.draggableId) : null;
        }
        function _(_, _, _) {
          var _ = "[" + _.contextId + '="' + _ + '"]',
            _ = _(_, _, function (_) {
              return _.getAttribute(_._) === _;
            });
          return !_ || !_(_) ? null : _;
        }
        function _(_) {
          _.preventDefault();
        }
        function _(_) {
          var _ = _.expected,
            _ = _.phase,
            _ = _.isLockActive,
            _ = _.shouldWarn;
          return !(!_() || _ !== _);
        }
        function _(_) {
          var _ = _.lockAPI,
            _ = _.store,
            _ = _.registry,
            _ = _.draggableId;
          if (_.isClaimed()) return !1;
          var _ = _.draggable.findById(_);
          return !(!_ || !_.options.isEnabled || !_(_.getState(), _));
        }
        function _(_) {
          var _ = _.lockAPI,
            _ = _.contextId,
            _ = _.store,
            _ = _.registry,
            _ = _.draggableId,
            _ = _.forceSensorStop,
            _ = _.sourceEvent,
            _ = _({
              lockAPI: _,
              store: _,
              registry: _,
              draggableId: _,
            });
          if (!_) return null;
          var _ = _.draggable.getById(_),
            _ = _(_, _.descriptor._, _(_));
          if (!_ || (_ && !_.options.canDragInteractiveElements && _(_, _)))
            return null;
          var _ = _.claim(_ || _),
            _ = "PRE_DRAG";
          function _() {
            return _.options.shouldRespectForcePress;
          }
          function _() {
            return _.isActive(_);
          }
          function _(_, _) {
            _({
              expected: _,
              phase: _,
              isLockActive: _,
              shouldWarn: !0,
            }) && _.dispatch(_());
          }
          var _ = _.bind(null, "DRAGGING");
          function _(_) {
            function _() {
              _.release(), (_ = "COMPLETED");
            }
            _ !== "PRE_DRAG" && (_(), _ !== "PRE_DRAG" && _(!1)),
              _.dispatch(_(_.liftActionArgs)),
              (_ = "DRAGGING");
            function _(_, _) {
              if (
                (_ === void 0 &&
                  (_ = {
                    shouldBlockNextClick: !1,
                  }),
                _.cleanup(),
                _.shouldBlockNextClick)
              ) {
                var _ = _(window, [
                  {
                    eventName: "click",
                    _: _,
                    options: {
                      once: !0,
                      passive: !1,
                      capture: !0,
                    },
                  },
                ]);
                setTimeout(_);
              }
              _(),
                _.dispatch(
                  _({
                    reason: _,
                  }),
                );
            }
            return (0, _._)(
              {
                isActive: function () {
                  return _({
                    expected: "DRAGGING",
                    phase: _,
                    isLockActive: _,
                    shouldWarn: !1,
                  });
                },
                shouldRespectForcePress: _,
                drop: function (_) {
                  return _("DROP", _);
                },
                cancel: function (_) {
                  return _("CANCEL", _);
                },
              },
              _.actions,
            );
          }
          function _(_) {
            var _ = (0, _._)(function (_) {
                _(function () {
                  return _({
                    client: _,
                  });
                });
              }),
              _ = _({
                liftActionArgs: {
                  _: _,
                  clientSelection: _,
                  movementMode: "FLUID",
                },
                cleanup: function () {
                  return _.cancel();
                },
                actions: {
                  move: _,
                },
              });
            return (0, _._)({}, _, {
              move: _,
            });
          }
          function _() {
            var _ = {
              moveUp: function () {
                return _(_);
              },
              moveRight: function () {
                return _(_);
              },
              moveDown: function () {
                return _(_);
              },
              moveLeft: function () {
                return _(_);
              },
            };
            return _({
              liftActionArgs: {
                _: _,
                clientSelection: _(_),
                movementMode: "SNAP",
              },
              cleanup: _,
              actions: _,
            });
          }
          function _() {
            var _ = _({
              expected: "PRE_DRAG",
              phase: _,
              isLockActive: _,
              shouldWarn: !0,
            });
            _ && _.release();
          }
          var _ = {
            isActive: function () {
              return _({
                expected: "PRE_DRAG",
                phase: _,
                isLockActive: _,
                shouldWarn: !1,
              });
            },
            shouldRespectForcePress: _,
            fluidLift: _,
            snapLift: _,
            abort: _,
          };
          return _;
        }
        var _ = [_, _, _];
        function _(_) {
          var _ = _.contextId,
            _ = _.store,
            _ = _.registry,
            _ = _.customSensors,
            _ = _.enableDefaultSensors,
            _ = _.windowToUse,
            _ = [].concat(_ ? _ : [], _ || []),
            _ = (0, _.useState)(function () {
              return _();
            })[0],
            _ = (0, _._)(
              function (_, _) {
                _.isDragging && !_.isDragging && _.tryAbandon();
              },
              [_],
            );
          _(
            function () {
              var _ = _.getState(),
                _ = _.subscribe(function () {
                  var _ = _.getState();
                  _(_, _), (_ = _);
                });
              return _;
            },
            [_, _, _],
          ),
            _(
              function () {
                return _.tryAbandon;
              },
              [_.tryAbandon],
            );
          var _ = (0, _._)(
              function (_) {
                return _({
                  lockAPI: _,
                  registry: _,
                  store: _,
                  draggableId: _,
                });
              },
              [_, _, _],
            ),
            _ = (0, _._)(
              function (_, _, _) {
                return _({
                  lockAPI: _,
                  registry: _,
                  contextId: _,
                  store: _,
                  draggableId: _,
                  forceSensorStop: _,
                  sourceEvent: _ && _.sourceEvent ? _.sourceEvent : null,
                });
              },
              [_, _, _, _],
            ),
            _ = (0, _._)(
              function (_) {
                return _(_, _);
              },
              [_],
            ),
            _ = (0, _._)(
              function (_) {
                var _ = _.draggable.findById(_);
                return _ ? _.options : null;
              },
              [_.draggable],
            ),
            _ = (0, _._)(
              function () {
                _.isClaimed() &&
                  (_.tryAbandon(),
                  _.getState().phase !== "IDLE" && _.dispatch(_()));
              },
              [_, _],
            ),
            _ = (0, _._)(_.isClaimed, [_]),
            _ = (0, _._)(
              function () {
                return _;
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                return {
                  canGetLock: _,
                  tryGetLock: _,
                  findClosestDraggableId: _,
                  findOptionsForDraggable: _,
                  tryReleaseLock: _,
                  isLockClaimed: _,
                  getWindow: _,
                };
              },
              [_, _, _, _, _, _, _],
            );
          _(_);
          for (var _ = 0; _ < _.length; _++) _[_](_);
        }
        var _ = function (_) {
          return {
            onBeforeCapture: _.onBeforeCapture,
            onBeforeDragStart: _.onBeforeDragStart,
            onDragStart: _.onDragStart,
            onDragEnd: _.onDragEnd,
            onDragUpdate: _.onDragUpdate,
          };
        };
        function _(_) {
          return _.current || _(!1), _.current;
        }
        function _(_) {
          var _ = _.contextId,
            _ = _.setCallbacks,
            _ = _.sensors,
            _ = _.nonce,
            _ = _.dragHandleUsageInstructions,
            _ = (0, _.useRef)(null),
            [_, _] = _.useState(),
            _ = _.useMemo(
              function () {
                return _ ? _.ownerDocument.defaultView : window;
              },
              [_],
            );
          _();
          var _ = _(_),
            _ = (0, _._)(
              function () {
                return _(_.current);
              },
              [_],
            ),
            _ = _(_),
            _ = _({
              contextId: _,
              text: _,
            }),
            _ = _(_, _, _.stylesInsertionPoint),
            _ = (0, _._)(function (_) {
              _(_).dispatch(_);
            }, []),
            _ = (0, _._)(
              function () {
                return (0, _._)(
                  {
                    publishWhileDragging: _,
                    updateDroppableScroll: _,
                    updateDroppableIsEnabled: _,
                    updateDroppableIsCombineEnabled: _,
                    collectionStarting: _,
                  },
                  _,
                );
              },
              [_],
            ),
            _ = _(),
            _ = (0, _._)(
              function () {
                return _(_, _, _);
              },
              [_, _, _],
            ),
            _ = (0, _._)(
              function () {
                return _(
                  (0, _._)(
                    {
                      scrollWindow: _,
                      scrollDroppable: _.scrollDroppable,
                    },
                    (0, _._)(
                      {
                        move: _,
                      },
                      _,
                    ),
                  ),
                );
              },
              [_.scrollDroppable, _],
            ),
            _ = _(_),
            _ = (0, _._)(
              function () {
                return _({
                  announce: _,
                  autoScroller: _,
                  dimensionMarshal: _,
                  focusMarshal: _,
                  getResponders: _,
                  styleMarshal: _,
                });
              },
              [_, _, _, _, _, _],
            );
          _ && (_.current = _);
          var _ = (0, _._)(function () {
              var _ = _(_),
                _ = _.getState();
              _.phase !== "IDLE" && _.dispatch(_());
            }, []),
            _ = (0, _._)(function () {
              var _ = _(_).getState();
              return _.isDragging || _.phase === "DROP_ANIMATING";
            }, []),
            _ = (0, _._)(
              function () {
                return {
                  isDragging: _,
                  tryAbort: _,
                };
              },
              [_, _],
            );
          _(_);
          var _ = (0, _._)(function (_) {
              return _(_(_).getState(), _);
            }, []),
            _ = (0, _._)(function () {
              return _(_(_).getState());
            }, []),
            _ = (0, _._)(
              function () {
                return {
                  marshal: _,
                  focus: _,
                  contextId: _,
                  canLift: _,
                  isMovementAllowed: _,
                  dragHandleUsageInstructionsId: _,
                  registry: _,
                };
              },
              [_, _, _, _, _, _, _],
            );
          return (
            _({
              contextId: _,
              store: _,
              registry: _,
              customSensors: _,
              enableDefaultSensors: _.enableDefaultSensors !== !1,
              windowToUse: _,
            }),
            (0, _.useEffect)(
              function () {
                return _;
              },
              [_],
            ),
            _.createElement(
              _.Provider,
              {
                value: _,
              },
              _.createElement("div", {
                ref: _,
              }),
              _ &&
                _.createElement(
                  _,
                  {
                    context: _,
                    store: _,
                  },
                  _.children,
                ),
            )
          );
        }
        var _ = 0;
        function _() {
          _ = 0;
        }
        function _() {
          return (0, _._)(function () {
            return "" + _++;
          }, []);
        }
        function _() {
          _(), _();
        }
        function _(_) {
          var _ = _(),
            _ = _.dragHandleUsageInstructions || _.dragHandleUsageInstructions;
          return _.createElement(_, null, function (_) {
            return _.createElement(
              _,
              {
                nonce: _.nonce,
                contextId: _,
                setCallbacks: _,
                dragHandleUsageInstructions: _,
                enableDefaultSensors: _.enableDefaultSensors,
                sensors: _.sensors,
                onBeforeCapture: _.onBeforeCapture,
                onBeforeDragStart: _.onBeforeDragStart,
                onDragStart: _.onDragStart,
                onDragUpdate: _.onDragUpdate,
                onDragEnd: _.onDragEnd,
                stylesInsertionPoint: _.stylesInsertionPoint,
              },
              _.children,
            );
          });
        }
        var _ = function (_) {
            return function (_) {
              return _ === _;
            };
          },
          _ = _("scroll"),
          _ = _("auto"),
          _ = _("visible"),
          _ = function (_, _) {
            return _(_.overflowX) || _(_.overflowY);
          },
          _ = function (_, _) {
            return _(_.overflowX) && _(_.overflowY);
          },
          _ = function (_) {
            var _ = _.ownerDocument.defaultView.getComputedStyle(_),
              _ = {
                overflowX: _.overflowX,
                overflowY: _.overflowY,
              };
            return _(_, _) || _(_, _);
          },
          _ = function () {
            return !1;
            var _, _, _, _;
          },
          _ = function _(_) {
            return _ == null
              ? null
              : _ === document.body
                ? _()
                  ? _
                  : null
                : _ === document.documentElement
                  ? null
                  : _(_)
                    ? _
                    : _(_.parentElement);
          },
          _ = function (_) {
            if (_) var _ = _(_.parentElement);
          },
          _ = function (_) {
            return {
              _: _.scrollLeft,
              _: _.scrollTop,
            };
          },
          _ = function _(_) {
            if (!_) return !1;
            var _ = _.ownerDocument.defaultView.getComputedStyle(_);
            return _.position === "fixed" ? !0 : _(_.parentElement);
          },
          _ = function (_) {
            var _ = _(_),
              _ = _(_);
            return {
              closestScrollable: _,
              isFixedOnPage: _,
            };
          },
          _ = function (_) {
            var _ = _.descriptor,
              _ = _.isEnabled,
              _ = _.isCombineEnabled,
              _ = _.isFixedOnPage,
              _ = _.direction,
              _ = _.client,
              _ = _.page,
              _ = _.closest,
              _ = (function () {
                if (!_) return null;
                var _ = _.scrollSize,
                  _ = _.client,
                  _ = _({
                    scrollHeight: _.scrollHeight,
                    scrollWidth: _.scrollWidth,
                    height: _.paddingBox.height,
                    width: _.paddingBox.width,
                  });
                return {
                  pageMarginBox: _.page.marginBox,
                  frameClient: _,
                  scrollSize: _,
                  shouldClipSubject: _.shouldClipSubject,
                  scroll: {
                    initial: _.scroll,
                    current: _.scroll,
                    max: _,
                    diff: {
                      value: _,
                      displacement: _,
                    },
                  },
                };
              })(),
              _ = _ === "vertical" ? _ : _,
              _ = _({
                page: _,
                withPlaceholder: null,
                axis: _,
                frame: _,
              }),
              _ = {
                descriptor: _,
                isCombineEnabled: _,
                isFixedOnPage: _,
                axis: _,
                isEnabled: _,
                client: _,
                page: _,
                frame: _,
                subject: _,
              };
            return _;
          },
          _ = function (_, _) {
            var _ = (0, _._)(_);
            if (!_ || _ !== _) return _;
            var _ = _.paddingBox.top - _.scrollTop,
              _ = _.paddingBox.left - _.scrollLeft,
              _ = _ + _.scrollHeight,
              _ = _ + _.scrollWidth,
              _ = {
                top: _,
                right: _,
                bottom: _,
                left: _,
              },
              _ = (0, _._)(_, _.border),
              _ = (0, _._)({
                borderBox: _,
                margin: _.margin,
                border: _.border,
                padding: _.padding,
              });
            return _;
          },
          _ = function (_) {
            var _ = _.ref,
              _ = _.descriptor,
              _ = _.env,
              _ = _.windowScroll,
              _ = _.direction,
              _ = _.isDropDisabled,
              _ = _.isCombineEnabled,
              _ = _.shouldClipSubject,
              _ = _.closestScrollable,
              _ = _(_, _),
              _ = (0, _._)(_, _),
              _ = (function () {
                if (!_) return null;
                var _ = (0, _._)(_),
                  _ = {
                    scrollHeight: _.scrollHeight,
                    scrollWidth: _.scrollWidth,
                  };
                return {
                  client: _,
                  page: (0, _._)(_, _),
                  scroll: _(_),
                  scrollSize: _,
                  shouldClipSubject: _,
                };
              })(),
              _ = _({
                descriptor: _,
                isEnabled: !_,
                isCombineEnabled: _,
                isFixedOnPage: _.isFixedOnPage,
                direction: _,
                client: _,
                page: _,
                closest: _,
              });
            return _;
          },
          _ = {
            passive: !1,
          },
          _ = {
            passive: !0,
          },
          _ = function (_) {
            return _.shouldPublishImmediately ? _ : _;
          };
        function _(_) {
          var _ = (0, _.useContext)(_);
          return _ || _(!1), _;
        }
        var _ = function (_) {
          return (_ && _.env.closestScrollable) || null;
        };
        function _(_) {
          var _ = (0, _.useRef)(null),
            _ = _(_),
            _ = _("droppable"),
            _ = _.registry,
            _ = _.marshal,
            _ = _(_),
            _ = (0, _._)(
              function () {
                return {
                  _: _.droppableId,
                  type: _.type,
                  mode: _.mode,
                };
              },
              [_.droppableId, _.mode, _.type],
            ),
            _ = (0, _.useRef)(_),
            _ = (0, _._)(
              function () {
                return _(function (_, _) {
                  _.current || _(!1);
                  var _ = {
                    _,
                    _: _,
                  };
                  _.updateDroppableScroll(_._, _);
                });
              },
              [_._, _],
            ),
            _ = (0, _._)(function () {
              var _ = _.current;
              return !_ || !_.env.closestScrollable
                ? _
                : _(_.env.closestScrollable);
            }, []),
            _ = (0, _._)(
              function () {
                var _ = _();
                _(_._, _._);
              },
              [_, _],
            ),
            _ = (0, _._)(
              function () {
                return (0, _._)(_);
              },
              [_],
            ),
            _ = (0, _._)(
              function () {
                var _ = _.current,
                  _ = _(_);
                (_ && _) || _(!1);
                var _ = _.scrollOptions;
                if (_.shouldPublishImmediately) {
                  _();
                  return;
                }
                _();
              },
              [_, _],
            ),
            _ = (0, _._)(
              function (_, _) {
                _.current && _(!1);
                var _ = _.current,
                  _ = _.getDroppableRef();
                _ || _(!1);
                var _ = _(_),
                  _ = {
                    ref: _,
                    descriptor: _,
                    env: _,
                    scrollOptions: _,
                  };
                _.current = _;
                var _ = _({
                    ref: _,
                    descriptor: _,
                    env: _,
                    windowScroll: _,
                    direction: _.direction,
                    isDropDisabled: _.isDropDisabled,
                    isCombineEnabled: _.isCombineEnabled,
                    shouldClipSubject: !_.ignoreContainerClipping,
                  }),
                  _ = _.closestScrollable;
                return (
                  _ &&
                    (_.setAttribute(_.contextId, _.contextId),
                    _.addEventListener("scroll", _, _(_.scrollOptions))),
                  _
                );
              },
              [_.contextId, _, _, _],
            ),
            _ = (0, _._)(function () {
              var _ = _.current,
                _ = _(_);
              return (_ && _) || _(!1), _(_);
            }, []),
            _ = (0, _._)(
              function () {
                var _ = _.current;
                _ || _(!1);
                var _ = _(_);
                (_.current = null),
                  _ &&
                    (_.cancel(),
                    _.removeAttribute(_.contextId),
                    _.removeEventListener("scroll", _, _(_.scrollOptions)));
              },
              [_, _],
            ),
            _ = (0, _._)(function (_) {
              var _ = _.current;
              _ || _(!1);
              var _ = _(_);
              _ || _(!1), (_.scrollTop += _._), (_.scrollLeft += _._);
            }, []),
            _ = (0, _._)(
              function () {
                return {
                  getDimensionAndWatchScroll: _,
                  getScrollWhileDragging: _,
                  dragStopped: _,
                  scroll: _,
                };
              },
              [_, _, _, _],
            ),
            _ = (0, _._)(
              function () {
                return {
                  uniqueId: _,
                  descriptor: _,
                  callbacks: _,
                };
              },
              [_, _, _],
            );
          _(
            function () {
              return (
                (_.current = _.descriptor),
                _.droppable.register(_),
                function () {
                  _.current && _(), _.droppable.unregister(_);
                }
              );
            },
            [_, _, _, _, _, _.droppable],
          ),
            _(
              function () {
                _.current &&
                  _.updateDroppableIsEnabled(_.current._, !_.isDropDisabled);
              },
              [_.isDropDisabled, _],
            ),
            _(
              function () {
                _.current &&
                  _.updateDroppableIsCombineEnabled(
                    _.current._,
                    _.isCombineEnabled,
                  );
              },
              [_.isCombineEnabled, _],
            );
        }
        function _() {}
        var _ = {
            width: 0,
            height: 0,
            margin: _,
          },
          _ = function (_) {
            var _ = _.isAnimatingOpenOnMount,
              _ = _.placeholder,
              _ = _.animate;
            return _ || _ === "close"
              ? _
              : {
                  height: _.client.borderBox.height,
                  width: _.client.borderBox.width,
                  margin: _.client.margin,
                };
          },
          _ = function (_) {
            var _ = _.isAnimatingOpenOnMount,
              _ = _.placeholder,
              _ = _.animate,
              _ = _({
                isAnimatingOpenOnMount: _,
                placeholder: _,
                animate: _,
              });
            return {
              display: _.display,
              boxSizing: "border-box",
              width: _.width,
              height: _.height,
              marginTop: _.margin.top,
              marginRight: _.margin.right,
              marginBottom: _.margin.bottom,
              marginLeft: _.margin.left,
              flexShrink: "0",
              flexGrow: "0",
              pointerEvents: "none",
              transition: _ !== "none" ? _.placeholder : null,
            };
          };
        function _(_) {
          var _ = (0, _.useRef)(null),
            _ = (0, _._)(function () {
              _.current && (clearTimeout(_.current), (_.current = null));
            }, []),
            _ = _.animate,
            _ = _.onTransitionEnd,
            _ = _.onClose,
            _ = _.contextId,
            _ = (0, _.useState)(_.animate === "open"),
            _ = _[0],
            _ = _[1];
          (0, _.useEffect)(
            function () {
              return _
                ? _ !== "open"
                  ? (_(), _(!1), _)
                  : _.current
                    ? _
                    : ((_.current = setTimeout(function () {
                        (_.current = null), _(!1);
                      })),
                      _)
                : _;
            },
            [_, _, _],
          );
          var _ = (0, _._)(
              function (_) {
                _.propertyName === "height" && (_(), _ === "close" && _());
              },
              [_, _, _],
            ),
            _ = _({
              isAnimatingOpenOnMount: _,
              animate: _.animate,
              placeholder: _.placeholder,
            });
          return _.createElement(_.placeholder.tagName, {
            style: _,
            "data-rbd-placeholder-context-id": _,
            onTransitionEnd: _,
            ref: _.innerRef,
          });
        }
        var _ = _.memo(_),
          _ = _.createContext(null);
        function _(_) {
          (_ && _(_)) || _(!1);
        }
        function _(_) {
          return typeof _ == "boolean";
        }
        function _(_, _) {
          _.forEach(function (_) {
            return _(_);
          });
        }
        var _ = [
            function (_) {
              var _ = _.props;
              _.droppableId || _(!1), typeof _.droppableId != "string" && _(!1);
            },
            function (_) {
              var _ = _.props;
              _(_.isDropDisabled) || _(!1),
                _(_.isCombineEnabled) || _(!1),
                _(_.ignoreContainerClipping) || _(!1);
            },
            function (_) {
              var _ = _.getDroppableRef;
              _(_());
            },
          ],
          _ = [
            function (_) {
              var _ = _.props,
                _ = _.getPlaceholderRef;
              if (_.placeholder) var _ = _();
            },
          ],
          _ = [
            function (_) {
              var _ = _.props;
              _.renderClone || _(!1);
            },
            function (_) {
              var _ = _.getPlaceholderRef;
              _() && _(!1);
            },
          ];
        function _(_) {
          _(function () {
            _(_, _),
              _.props.mode === "standard" && _(_, _),
              _.props.mode === "virtual" && _(_, _);
          });
        }
        var _ = (function (_) {
            (0, _._)(_, _);
            function _() {
              for (
                var _, _ = arguments.length, _ = new Array(_), _ = 0;
                _ < _;
                _++
              )
                _[_] = arguments[_];
              return (
                (_ = _.call.apply(_, [this].concat(_)) || this),
                (_.state = {
                  isVisible: !!_.props._,
                  data: _.props._,
                  animate: _.props.shouldAnimate && _.props._ ? "open" : "none",
                }),
                (_.onClose = function () {
                  _.state.animate === "close" &&
                    _.setState({
                      isVisible: !1,
                    });
                }),
                _
              );
            }
            _.getDerivedStateFromProps = function (_, _) {
              return _.shouldAnimate
                ? _._
                  ? {
                      isVisible: !0,
                      data: _._,
                      animate: "open",
                    }
                  : _.isVisible
                    ? {
                        isVisible: !0,
                        data: _.data,
                        animate: "close",
                      }
                    : {
                        isVisible: !1,
                        animate: "close",
                        data: null,
                      }
                : {
                    isVisible: !!_._,
                    data: _._,
                    animate: "none",
                  };
            };
            var _ = _.prototype;
            return (
              (_.render = function () {
                if (!this.state.isVisible) return null;
                var _ = {
                  onClose: this.onClose,
                  data: this.state.data,
                  animate: this.state.animate,
                };
                return this.props.children(_);
              }),
              _
            );
          })(_.PureComponent),
          _ = {
            dragging: 5e3,
            dropAnimating: 4500,
          },
          _ = function (_, _) {
            return _ ? _.drop(_.duration) : _ ? _.snap : _.fluid;
          },
          _ = function (_, _) {
            return _ ? (_ ? _.opacity.drop : _.opacity.combining) : null;
          },
          _ = function (_) {
            return _.forceShouldAnimate != null
              ? _.forceShouldAnimate
              : _.mode === "SNAP";
          };
        function _(_) {
          var _ = _.dimension,
            _ = _.client,
            _ = _.offset,
            _ = _.combineWith,
            _ = _.dropping,
            _ = !!_,
            _ = _(_),
            _ = !!_,
            _ = _ ? _.drop(_, _) : _.moveTo(_),
            _ = {
              position: "fixed",
              top: _.marginBox.top,
              left: _.marginBox.left,
              boxSizing: "border-box",
              width: _.borderBox.width,
              height: _.borderBox.height,
              transition: _(_, _),
              transform: _,
              opacity: _(_, _),
              zIndex: _ ? _.dropAnimating : _.dragging,
              pointerEvents: "none",
            };
          return _;
        }
        function _(_) {
          return {
            transform: _.moveTo(_.offset),
            transition: _.shouldAnimateDisplacement ? null : "none",
          };
        }
        function _(_) {
          return _.type === "DRAGGING" ? _(_) : _(_);
        }
        function _(_, _, _) {
          _ === void 0 && (_ = _);
          var _ = window.getComputedStyle(_),
            _ = _.getBoundingClientRect(),
            _ = (0, _._)(_, _),
            _ = (0, _._)(_, _),
            _ = {
              client: _,
              tagName: _.tagName.toLowerCase(),
              display: _.display,
            },
            _ = {
              _: _.marginBox.width,
              _: _.marginBox.height,
            },
            _ = {
              descriptor: _,
              placeholder: _,
              displaceBy: _,
              client: _,
              page: _,
            };
          return _;
        }
        function _(_) {
          var _ = _("draggable"),
            _ = _.descriptor,
            _ = _.registry,
            _ = _.getDraggableRef,
            _ = _.canDragInteractiveElements,
            _ = _.shouldRespectForcePress,
            _ = _.isEnabled,
            _ = (0, _._)(
              function () {
                return {
                  canDragInteractiveElements: _,
                  shouldRespectForcePress: _,
                  isEnabled: _,
                };
              },
              [_, _, _],
            ),
            _ = (0, _._)(
              function (_) {
                var _ = _();
                return _ || _(!1), _(_, _, _);
              },
              [_, _],
            ),
            _ = (0, _._)(
              function () {
                return {
                  uniqueId: _,
                  descriptor: _,
                  options: _,
                  getDimension: _,
                };
              },
              [_, _, _, _],
            ),
            _ = (0, _.useRef)(_),
            _ = (0, _.useRef)(!0);
          _(
            function () {
              return (
                _.draggable.register(_.current),
                function () {
                  return _.draggable.unregister(_.current);
                }
              );
            },
            [_.draggable],
          ),
            _(
              function () {
                if (_.current) {
                  _.current = !1;
                  return;
                }
                var _ = _.current;
                (_.current = _), _.draggable.update(_, _);
              },
              [_, _.draggable],
            );
        }
        function _(_, _, _) {
          _(function () {
            function _(_) {
              return "Draggable[id: " + _ + "]: ";
            }
            var _ = _.draggableId;
            _ || _(!1),
              typeof _ != "string" && _(!1),
              _(_.index) || _(!1),
              _.mapped.type !== "DRAGGING" &&
                (_(_()), _.isEnabled && (_(_, _, _()) || _(!1)));
          });
        }
        function _(_) {}
        function _(_) {
          _.preventDefault();
        }
        function _(_) {
          var _ = (0, _.useRef)(null),
            _ = (0, _._)(function (_) {
              _.current = _;
            }, []),
            _ = (0, _._)(function () {
              return _.current;
            }, []),
            _ = _(_),
            _ = _.contextId,
            _ = _.dragHandleUsageInstructionsId,
            _ = _.registry,
            _ = _(_),
            _ = _.type,
            _ = _.droppableId,
            _ = (0, _._)(
              function () {
                return {
                  _: _.draggableId,
                  index: _.index,
                  type: _,
                  droppableId: _,
                };
              },
              [_.draggableId, _.index, _, _],
            ),
            _ = _.children,
            _ = _.draggableId,
            _ = _.isEnabled,
            _ = _.shouldRespectForcePress,
            _ = _.canDragInteractiveElements,
            _ = _.isClone,
            _ = _.mapped,
            _ = _.dropAnimationFinished;
          if ((_(_, _, _), _(_), !_)) {
            var _ = (0, _._)(
              function () {
                return {
                  descriptor: _,
                  registry: _,
                  getDraggableRef: _,
                  canDragInteractiveElements: _,
                  shouldRespectForcePress: _,
                  isEnabled: _,
                };
              },
              [_, _, _, _, _, _],
            );
            _(_);
          }
          var _ = (0, _._)(
              function () {
                return _
                  ? {
                      tabIndex: 0,
                      role: "button",
                      "aria-describedby": _,
                      "data-rbd-drag-handle-draggable-id": _,
                      "data-rbd-drag-handle-context-id": _,
                      draggable: !1,
                      onDragStart: _,
                    }
                  : null;
              },
              [_, _, _, _],
            ),
            _ = (0, _._)(
              function (_) {
                _.type === "DRAGGING" &&
                  _.dropping &&
                  _.propertyName === "transform" &&
                  _();
              },
              [_, _],
            ),
            _ = (0, _._)(
              function () {
                var _ = _(_),
                  _ = _.type === "DRAGGING" && _.dropping ? _ : null,
                  _ = {
                    innerRef: _,
                    draggableProps: {
                      "data-rbd-draggable-context-id": _,
                      "data-rbd-draggable-id": _,
                      style: _,
                      onTransitionEnd: _,
                    },
                    dragHandleProps: _,
                  };
                return _;
              },
              [_, _, _, _, _, _],
            ),
            _ = (0, _._)(
              function () {
                return {
                  draggableId: _._,
                  type: _.type,
                  source: {
                    index: _.index,
                    droppableId: _.droppableId,
                  },
                };
              },
              [_.droppableId, _._, _.index, _.type],
            );
          return _(_, _.snapshot, _);
        }
        var _ = function (_, _) {
            return _ === _;
          },
          _ = function (_) {
            var _ = _.combine,
              _ = _.destination;
            return _ ? _.droppableId : _ ? _.droppableId : null;
          },
          _ = function (_) {
            return _.combine ? _.combine.draggableId : null;
          },
          _ = function (_) {
            return _._ && _._.type === "COMBINE"
              ? _._.combine.draggableId
              : null;
          };
        function _() {
          var _ = _(function (_, _) {
              return {
                _: _,
                _: _,
              };
            }),
            _ = _(function (_, _, _, _, _) {
              return {
                isDragging: !0,
                isClone: _,
                isDropAnimating: !!_,
                dropAnimation: _,
                mode: _,
                draggingOver: _,
                combineWith: _,
                combineTargetFor: null,
              };
            }),
            _ = _(function (_, _, _, _, _, _, _) {
              return {
                mapped: {
                  type: "DRAGGING",
                  dropping: null,
                  draggingOver: _,
                  combineWith: _,
                  mode: _,
                  offset: _,
                  dimension: _,
                  forceShouldAnimate: _,
                  snapshot: _(_, _, _, _, null),
                },
              };
            }),
            _ = function (_, _) {
              if (_.isDragging) {
                if (_.critical.draggable._ !== _.draggableId) return null;
                var _ = _.current.client.offset,
                  _ = _.dimensions.draggables[_.draggableId],
                  _ = _(_.impact),
                  _ = _(_.impact),
                  _ = _.forceShouldAnimate;
                return _(_(_._, _._), _.movementMode, _, _.isClone, _, _, _);
              }
              if (_.phase === "DROP_ANIMATING") {
                var _ = _.completed;
                if (_.result.draggableId !== _.draggableId) return null;
                var _ = _.isClone,
                  _ = _.dimensions.draggables[_.draggableId],
                  _ = _.result,
                  _ = _.mode,
                  _ = _(_),
                  _ = _(_),
                  _ = _.dropDuration,
                  _ = {
                    duration: _,
                    curve: _.drop,
                    moveTo: _.newHomeClientOffset,
                    opacity: _ ? _.opacity.drop : null,
                    scale: _ ? _.scale.drop : null,
                  };
                return {
                  mapped: {
                    type: "DRAGGING",
                    offset: _.newHomeClientOffset,
                    dimension: _,
                    dropping: _,
                    draggingOver: _,
                    combineWith: _,
                    mode: _,
                    forceShouldAnimate: null,
                    snapshot: _(_, _, _, _, _),
                  },
                };
              }
              return null;
            };
          return _;
        }
        function _(_) {
          return {
            isDragging: !1,
            isDropAnimating: !1,
            isClone: !1,
            dropAnimation: null,
            mode: null,
            draggingOver: null,
            combineTargetFor: _,
            combineWith: null,
          };
        }
        var _ = {
          mapped: {
            type: "SECONDARY",
            offset: _,
            combineTargetFor: null,
            shouldAnimateDisplacement: !0,
            snapshot: _(null),
          },
        };
        function _() {
          var _ = _(function (_, _) {
              return {
                _: _,
                _: _,
              };
            }),
            _ = _(_),
            _ = _(function (_, _, _) {
              return (
                _ === void 0 && (_ = null),
                {
                  mapped: {
                    type: "SECONDARY",
                    offset: _,
                    combineTargetFor: _,
                    shouldAnimateDisplacement: _,
                    snapshot: _(_),
                  },
                }
              );
            }),
            _ = function (_) {
              return _ ? _(_, _, !0) : null;
            },
            _ = function (_, _, _, _) {
              var _ = _.displaced.visible[_],
                _ = !!(_.inVirtualList && _.effected[_]),
                _ = _(_),
                _ = _ && _.draggableId === _ ? _ : null;
              if (!_) {
                if (!_) return _(_);
                if (_.displaced.invisible[_]) return null;
                var _ = _(_.displacedBy.point),
                  _ = _(_._, _._);
                return _(_, _, !0);
              }
              if (_) return _(_);
              var _ = _.displacedBy.point,
                _ = _(_._, _._);
              return _(_, _, _.shouldAnimate);
            },
            _ = function (_, _) {
              if (_.isDragging)
                return _.critical.draggable._ === _.draggableId
                  ? null
                  : _(
                      _.draggableId,
                      _.critical.draggable._,
                      _.impact,
                      _.afterCritical,
                    );
              if (_.phase === "DROP_ANIMATING") {
                var _ = _.completed;
                return _.result.draggableId === _.draggableId
                  ? null
                  : _(
                      _.draggableId,
                      _.result.draggableId,
                      _.impact,
                      _.afterCritical,
                    );
              }
              return null;
            };
          return _;
        }
        var _ = function () {
            var _ = _(),
              _ = _(),
              _ = function (_, _) {
                return _(_, _) || _(_, _) || _;
              };
            return _;
          },
          _ = {
            dropAnimationFinished: _,
          },
          _ = _(_, _, null, {
            context: _,
            pure: !0,
            areStatePropsEqual: _,
          })(_);
        function _(_) {
          var _ = _(_),
            _ = _.isUsingCloneFor;
          return _ === _.draggableId && !_.isClone
            ? null
            : _.createElement(_, _);
        }
        function _(_) {
          var _ = typeof _.isDragDisabled == "boolean" ? !_.isDragDisabled : !0,
            _ = !!_.disableInteractiveElementBlocking,
            _ = !!_.shouldRespectForcePress;
          return _.createElement(
            _,
            (0, _._)({}, _, {
              isClone: !1,
              isEnabled: _,
              canDragInteractiveElements: _,
              shouldRespectForcePress: _,
            }),
          );
        }
        function _(_) {
          var _ = (0, _.useContext)(_);
          _ || _(!1);
          var _ = _.contextId,
            _ = _.isMovementAllowed,
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            _ = _.children,
            _ = _.droppableId,
            _ = _.type,
            _ = _.mode,
            _ = _.direction,
            _ = _.ignoreContainerClipping,
            _ = _.isDropDisabled,
            _ = _.isCombineEnabled,
            _ = _.snapshot,
            _ = _.useClone,
            _ = _.updateViewportMaxScroll,
            _ = _.getContainerForClone,
            _ = (0, _._)(function () {
              return _.current;
            }, []),
            _ = (0, _._)(function (_) {
              _.current = _;
            }, []),
            _ = (0, _._)(function () {
              return _.current;
            }, []),
            _ = (0, _._)(function (_) {
              _.current = _;
            }, []);
          _({
            props: _,
            getDroppableRef: _,
            getPlaceholderRef: _,
          });
          var _ = (0, _._)(
            function () {
              if (_()) {
                var _;
                _({
                  maxScroll: _(
                    ((_ = _.current) == null
                      ? void 0
                      : _.ownerDocument.defaultView) || window,
                  ),
                });
              }
            },
            [_, _],
          );
          _({
            droppableId: _,
            type: _,
            mode: _,
            direction: _,
            isDropDisabled: _,
            isCombineEnabled: _,
            ignoreContainerClipping: _,
            getDroppableRef: _,
          });
          var _ = _.createElement(
              _,
              {
                _: _.placeholder,
                shouldAnimate: _.shouldAnimatePlaceholder,
              },
              function (_) {
                var _ = _.onClose,
                  _ = _.data,
                  _ = _.animate;
                return _.createElement(_, {
                  placeholder: _,
                  onClose: _,
                  innerRef: _,
                  animate: _,
                  contextId: _,
                  onTransitionEnd: _,
                });
              },
            ),
            _ = (0, _._)(
              function () {
                return {
                  innerRef: _,
                  placeholder: _,
                  droppableProps: {
                    "data-rbd-droppable-id": _,
                    "data-rbd-droppable-context-id": _,
                  },
                };
              },
              [_, _, _, _],
            ),
            _ = _ ? _.dragging.draggableId : null,
            _ = (0, _._)(
              function () {
                return {
                  droppableId: _,
                  type: _,
                  isUsingCloneFor: _,
                };
              },
              [_, _, _],
            );
          function _() {
            if (!_) return null;
            var _ = _.dragging,
              _ = _.render,
              _ = _.createElement(
                _,
                {
                  draggableId: _.draggableId,
                  index: _.source.index,
                  isClone: !0,
                  isEnabled: !0,
                  shouldRespectForcePress: !1,
                  canDragInteractiveElements: !0,
                },
                function (_, _) {
                  return _(_, _, _);
                },
              );
            return _.createPortal(_, _());
          }
          return _.createElement(
            _.Provider,
            {
              value: _,
            },
            _(_, _),
            _(),
          );
        }
        var _ = function (_, _) {
            return _ === _.droppable.type;
          },
          _ = function (_, _) {
            return _.draggables[_.draggable._];
          },
          _ = function () {
            var _ = {
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
              _ = (0, _._)({}, _, {
                shouldAnimatePlaceholder: !1,
              }),
              _ = _(function (_) {
                return {
                  draggableId: _._,
                  type: _.type,
                  source: {
                    index: _.index,
                    droppableId: _.droppableId,
                  },
                };
              }),
              _ = _(function (_, _, _, _, _, _) {
                var _ = _.descriptor._,
                  _ = _.descriptor.droppableId === _;
                if (_) {
                  var _ = _
                      ? {
                          render: _,
                          dragging: _(_.descriptor),
                        }
                      : null,
                    _ = {
                      isDraggingOver: _,
                      draggingOverWith: _ ? _ : null,
                      draggingFromThisWith: _,
                      isUsingPlaceholder: !0,
                    };
                  return {
                    placeholder: _.placeholder,
                    shouldAnimatePlaceholder: !1,
                    snapshot: _,
                    useClone: _,
                  };
                }
                if (!_) return _;
                if (!_) return _;
                var _ = {
                  isDraggingOver: _,
                  draggingOverWith: _,
                  draggingFromThisWith: null,
                  isUsingPlaceholder: !0,
                };
                return {
                  placeholder: _.placeholder,
                  shouldAnimatePlaceholder: !0,
                  snapshot: _,
                  useClone: null,
                };
              }),
              _ = function (_, _) {
                var _ = _.droppableId,
                  _ = _.type,
                  _ = !_.isDropDisabled,
                  _ = _.renderClone;
                if (_.isDragging) {
                  var _ = _.critical;
                  if (!_(_, _)) return _;
                  var _ = _(_, _.dimensions),
                    _ = _(_.impact) === _;
                  return _(_, _, _, _, _, _);
                }
                if (_.phase === "DROP_ANIMATING") {
                  var _ = _.completed;
                  if (!_(_, _.critical)) return _;
                  var _ = _(_.critical, _.dimensions);
                  return _(_, _, _(_.result) === _, _(_.impact) === _, _, _);
                }
                if (_.phase === "IDLE" && _.completed && !_.shouldFlush) {
                  var _ = _.completed;
                  if (!_(_, _.critical)) return _;
                  var _ = _(_.impact) === _,
                    _ = !!(_.impact._ && _.impact._.type === "COMBINE"),
                    _ = _.critical.droppable._ === _;
                  return _ ? (_ ? _ : _) : _ ? _ : _;
                }
                return _;
              };
            return _;
          },
          _ = {
            updateViewportMaxScroll: _,
          };
        function _() {
          return document.body || _(!1), document.body;
        }
        var _ = {
            mode: "standard",
            type: "DEFAULT",
            direction: "vertical",
            isDropDisabled: !1,
            isCombineEnabled: !1,
            ignoreContainerClipping: !1,
            renderClone: null,
            getContainerForClone: _,
          },
          _ = _(_, _, null, {
            context: _,
            pure: !0,
            areStatePropsEqual: _,
          })(_);
        _.defaultProps = _;
      },
      chunkid: (_, _) => {
        var _;
        var _ = 60103,
          _ = 60106,
          _ = 60107,
          _ = 60108,
          _ = 60114,
          _ = 60109,
          _ = 60110,
          _ = 60112,
          _ = 60113,
          _ = 60120,
          _ = 60115,
          _ = 60116,
          _ = 60121,
          _ = 60122,
          _ = 60117,
          _ = 60129,
          _ = 60131;
        if (typeof Symbol == "function" && Symbol.for) {
          var _ = Symbol.for;
          (_ = _("react.element")),
            (_ = _("react.portal")),
            (_ = _("react.fragment")),
            (_ = _("react.strict_mode")),
            (_ = _("react.profiler")),
            (_ = _("react.provider")),
            (_ = _("react.context")),
            (_ = _("react.forward_ref")),
            (_ = _("react.suspense")),
            (_ = _("react.suspense_list")),
            (_ = _("react.memo")),
            (_ = _("react.lazy")),
            (_ = _("react.block")),
            (_ = _("react.server.block")),
            (_ = _("react.fundamental")),
            (_ = _("react.debug_trace_mode")),
            (_ = _("react.legacy_hidden"));
        }
        function _(_) {
          if (typeof _ == "object" && _ !== null) {
            var _ = _.$$typeof;
            switch (_) {
              case _:
                switch (((_ = _.type), _)) {
                  case _:
                  case _:
                  case _:
                  case _:
                  case _:
                    return _;
                  default:
                    switch (((_ = _ && _.$$typeof), _)) {
                      case _:
                      case _:
                      case _:
                      case _:
                      case _:
                        return _;
                      default:
                        return _;
                    }
                }
              case _:
                return _;
            }
          }
        }
        var _ = _,
          _ = _,
          _ = _,
          _ = _,
          _ = _,
          _ = _,
          _ = _,
          _ = _,
          _ = _,
          _ = _;
        (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = function () {
            return !1;
          }),
          (_ = function () {
            return !1;
          }),
          (_.isContextConsumer = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return typeof _ == "object" && _ !== null && _.$$typeof === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return (
              typeof _ == "string" ||
              typeof _ == "function" ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              (typeof _ == "object" &&
                _ !== null &&
                (_.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _[0] === _))
            );
          }),
          (_ = _);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        module.exports = __webpack_require__("chunkid");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return (
            (_ = (0, _._)(_)) in _
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
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
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
                  (0, _._)(_, _, _[_]);
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
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          if ((0, _._)(_) != "object" || !_) return _;
          var _ = _[Symbol.toPrimitive];
          if (_ !== void 0) {
            var _ = _.call(_, _ || "default");
            if ((0, _._)(_) != "object") return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (_ === "string" ? String : Number)(_);
        }
        function _(_) {
          var _ = _(_, "string");
          return (0, _._)(_) == "symbol" ? _ : _ + "";
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(module_exports, {
          _: () => _,
        });
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
      },
    },
  ]);
})();
