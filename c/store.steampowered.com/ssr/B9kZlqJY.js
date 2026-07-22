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
function _(_, _) {
  (_.prototype = Object.create(_.prototype)),
    (_.prototype.constructor = _),
    _(_, _);
}
var _ = _(_()),
  _ = _(_());
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _) ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(null, arguments)
  );
}
var _ = `Invariant failed`;
function _(_, _) {
  if (!_) throw Error(_);
}
typeof window < `u` && window.document && window.document.createElement;
var _ = _((_, _) => {
    _.exports =
      Array.isArray ||
      function (_) {
        return Object.prototype.toString.call(_) == `[object Array]`;
      };
  }),
  _ = _((_, _) => {
    var _ = _();
    (_.exports = _),
      (_.exports.parse = _),
      (_.exports.compile = _),
      (_.exports.tokensToFunction = _),
      (_.exports.tokensToRegExp = _);
    var _ = new RegExp(
      [
        `(\\\\.)`,
        `([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))`,
      ].join(`|`),
      `g`,
    );
    function _(_, _) {
      for (
        var _ = [], _ = 0, _ = 0, _ = ``, _ = (_ && _.delimiter) || `/`, _;
        (_ = _.exec(_)) != null;
      ) {
        var _ = _[0],
          _ = _[1],
          _ = _.index;
        if (((_ += _.slice(_, _)), (_ = _ + _.length), _)) {
          _ += _[1];
          continue;
        }
        var _ = _[_],
          _ = _[2],
          _ = _[3],
          _ = _[4],
          _ = _[5],
          _ = _[6],
          _ = _[7];
        _ &&= (_.push(_), ``);
        var _ = _ != null && _ != null && _ !== _,
          _ = _ === `+` || _ === `*`,
          _ = _ === `?` || _ === `*`,
          _ = _ || _,
          _ = _ || _,
          _ = _ || (typeof _[_.length - 1] == `string` ? _[_.length - 1] : ``);
        _.push({
          name: _ || _++,
          prefix: _ || ``,
          delimiter: _,
          optional: _,
          repeat: _,
          partial: _,
          asterisk: !!_,
          pattern: _ ? _(_) : _ ? `.*` : _(_, _),
        });
      }
      return _ < _.length && (_ += _.substr(_)), _ && _.push(_), _;
    }
    function _(_, _) {
      return !_ || _.indexOf(_) > -1
        ? `[^` + _(_) + `]+?`
        : _(_) + `|(?:(?!` + _(_) + `)[^` + _(_) + `])+?`;
    }
    function _(_, _) {
      return _(_(_, _), _);
    }
    function _(_) {
      return encodeURI(_).replace(/[\/?#]/g, function (_) {
        return `%` + _.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function _(_) {
      return encodeURI(_).replace(/[?#]/g, function (_) {
        return `%` + _.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function _(_, _) {
      for (var _ = Array(_.length), _ = 0; _ < _.length; _++)
        typeof _[_] == `object` &&
          (_[_] = RegExp(`^(?:` + _[_].pattern + `)$`, _(_)));
      return function (_, _) {
        for (
          var _ = ``,
            _ = _ || {},
            _ = (_ || {}).pretty ? _ : encodeURIComponent,
            _ = 0;
          _ < _.length;
          _++
        ) {
          var _ = _[_];
          if (typeof _ == `string`) {
            _ += _;
            continue;
          }
          var _ = _[_.name],
            _;
          if (_ == null)
            if (_.optional) {
              _.partial && (_ += _.prefix);
              continue;
            } else throw TypeError(`Expected "` + _.name + `" to be defined`);
          if (_(_)) {
            if (!_.repeat)
              throw TypeError(
                `Expected "` +
                  _.name +
                  '" to not repeat, but received `' +
                  JSON.stringify(_) +
                  "`",
              );
            if (_.length === 0) {
              if (_.optional) continue;
              throw TypeError(`Expected "` + _.name + `" to not be empty`);
            }
            for (var _ = 0; _ < _.length; _++) {
              if (((_ = _(_[_])), !_[_].test(_)))
                throw TypeError(
                  `Expected all "` +
                    _.name +
                    `" to match "` +
                    _.pattern +
                    '", but received `' +
                    JSON.stringify(_) +
                    "`",
                );
              _ += (_ === 0 ? _.prefix : _.delimiter) + _;
            }
            continue;
          }
          if (((_ = _.asterisk ? _(_) : _(_)), !_[_].test(_)))
            throw TypeError(
              `Expected "` +
                _.name +
                `" to match "` +
                _.pattern +
                `", but received "` +
                _ +
                `"`,
            );
          _ += _.prefix + _;
        }
        return _;
      };
    }
    function _(_) {
      return _.replace(/([.+*?=^!:${}()[\]|\/\\])/g, `\\$1`);
    }
    function _(_) {
      return _.replace(/([=!:$\/()])/g, `\\$1`);
    }
    function _(_, _) {
      return (_.keys = _), _;
    }
    function _(_) {
      return _ && _.sensitive ? `` : `i`;
    }
    function _(_, _) {
      var _ = _.source.match(/\((?!\?)/g);
      if (_)
        for (var _ = 0; _ < _.length; _++)
          _.push({
            name: _,
            prefix: null,
            delimiter: null,
            optional: !1,
            repeat: !1,
            partial: !1,
            asterisk: !1,
            pattern: null,
          });
      return _(_, _);
    }
    function _(_, _, _) {
      for (var _ = [], _ = 0; _ < _.length; _++) _.push(_(_[_], _, _).source);
      return _(RegExp(`(?:` + _.join(`|`) + `)`, _(_)), _);
    }
    function _(_, _, _) {
      return _(_(_, _), _, _);
    }
    function _(_, _, _) {
      _(_) || ((_ = _ || _), (_ = [])), (_ ||= {});
      for (
        var _ = _.strict, _ = _.end !== !1, _ = ``, _ = 0;
        _ < _.length;
        _++
      ) {
        var _ = _[_];
        if (typeof _ == `string`) _ += _(_);
        else {
          var _ = _(_.prefix),
            _ = `(?:` + _.pattern + `)`;
          _.push(_),
            _.repeat && (_ += `(?:` + _ + _ + `)*`),
            (_ = _.optional
              ? _.partial
                ? _ + `(` + _ + `)?`
                : `(?:` + _ + `(` + _ + `))?`
              : _ + `(` + _ + `)`),
            (_ += _);
        }
      }
      var _ = _(_.delimiter || `/`),
        _ = _.slice(-_.length) === _;
      return (
        _ || (_ = (_ ? _.slice(0, -_.length) : _) + `(?:` + _ + `(?=$))?`),
        _ ? (_ += `$`) : (_ += _ && _ ? `` : `(?=` + _ + `|$)`),
        _(RegExp(`^` + _, _(_)), _)
      );
    }
    function _(_, _, _) {
      return (
        _(_) || ((_ = _ || _), (_ = [])),
        (_ ||= {}),
        _ instanceof RegExp ? _(_, _) : _(_) ? _(_, _, _) : _(_, _, _)
      );
    }
  }),
  _ = _((_) => {
    typeof Symbol == `function` && Symbol.for;
  }),
  _ = _((_, _) => {
    _.exports = _();
  });
_(), _();
function _(_, _) {
  if (_ == null) return {};
  var _ = {};
  for (var _ in _)
    if ({}.hasOwnProperty.call(_, _)) {
      if (_.indexOf(_) !== -1) continue;
      _[_] = _[_];
    }
  return _;
}
var _ = _((_) => {
    var _ = typeof Symbol == `function` && Symbol.for,
      _ = _ ? Symbol.for(`react.element`) : 60103,
      _ = _ ? Symbol.for(`react.portal`) : 60106,
      _ = _ ? Symbol.for(`react.fragment`) : 60107,
      _ = _ ? Symbol.for(`react.strict_mode`) : 60108,
      _ = _ ? Symbol.for(`react.profiler`) : 60114,
      _ = _ ? Symbol.for(`react.provider`) : 60109,
      _ = _ ? Symbol.for(`react.context`) : 60110,
      _ = _ ? Symbol.for(`react.async_mode`) : 60111,
      _ = _ ? Symbol.for(`react.concurrent_mode`) : 60111,
      _ = _ ? Symbol.for(`react.forward_ref`) : 60112,
      _ = _ ? Symbol.for(`react.suspense`) : 60113,
      _ = _ ? Symbol.for(`react.suspense_list`) : 60120,
      _ = _ ? Symbol.for(`react.memo`) : 60115,
      _ = _ ? Symbol.for(`react.lazy`) : 60116,
      _ = _ ? Symbol.for(`react.block`) : 60121,
      _ = _ ? Symbol.for(`react.fundamental`) : 60117,
      _ = _ ? Symbol.for(`react.responder`) : 60118,
      _ = _ ? Symbol.for(`react.scope`) : 60119;
    function _(_) {
      if (typeof _ == `object` && _) {
        var _ = _.$$typeof;
        switch (_) {
          case _:
            switch (((_ = _.type), _)) {
              case _:
              case _:
              case _:
              case _:
              case _:
              case _:
                return _;
              default:
                switch (((_ &&= _.$$typeof), _)) {
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
    function _(_) {
      return _(_) === _;
    }
    (_.AsyncMode = _),
      (_.ConcurrentMode = _),
      (_.ContextConsumer = _),
      (_.ContextProvider = _),
      (_.Element = _),
      (_.ForwardRef = _),
      (_.Fragment = _),
      (_.Lazy = _),
      (_.Memo = _),
      (_.Portal = _),
      (_.Profiler = _),
      (_.StrictMode = _),
      (_.Suspense = _),
      (_.isAsyncMode = function (_) {
        return _(_) || _(_) === _;
      }),
      (_.isConcurrentMode = _),
      (_.isContextConsumer = function (_) {
        return _(_) === _;
      }),
      (_.isContextProvider = function (_) {
        return _(_) === _;
      }),
      (_.isElement = function (_) {
        return typeof _ == `object` && !!_ && _.$$typeof === _;
      }),
      (_.isForwardRef = function (_) {
        return _(_) === _;
      }),
      (_.isFragment = function (_) {
        return _(_) === _;
      }),
      (_.isLazy = function (_) {
        return _(_) === _;
      }),
      (_.isMemo = function (_) {
        return _(_) === _;
      }),
      (_.isPortal = function (_) {
        return _(_) === _;
      }),
      (_.isProfiler = function (_) {
        return _(_) === _;
      }),
      (_.isStrictMode = function (_) {
        return _(_) === _;
      }),
      (_.isSuspense = function (_) {
        return _(_) === _;
      }),
      (_.isValidElementType = function (_) {
        return (
          typeof _ == `string` ||
          typeof _ == `function` ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          _ === _ ||
          (typeof _ == `object` &&
            !!_ &&
            (_.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _ ||
              _.$$typeof === _))
        );
      }),
      (_.typeOf = _);
  }),
  _ = _((_, _) => {
    _.exports = _();
  }),
  _ = _((_, _) => {
    var _ = _(),
      _ = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      _ = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      _ = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      },
      _ = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      _ = {};
    (_[_.ForwardRef] = _), (_[_.Memo] = _);
    function _(_) {
      return _.isMemo(_) ? _ : _[_.$$typeof] || _;
    }
    var _ = Object.defineProperty,
      _ = Object.getOwnPropertyNames,
      _ = Object.getOwnPropertySymbols,
      _ = Object.getOwnPropertyDescriptor,
      _ = Object.getPrototypeOf,
      _ = Object.prototype;
    function _(_, _, _) {
      if (typeof _ != `string`) {
        if (_) {
          var _ = _(_);
          _ && _ !== _ && _(_, _, _);
        }
        var _ = _(_);
        _ && (_ = _.concat(_(_)));
        for (var _ = _(_), _ = _(_), _ = 0; _ < _.length; ++_) {
          var _ = _[_];
          if (!_[_] && !(_ && _[_]) && !(_ && _[_]) && !(_ && _[_])) {
            var _ = _(_, _);
            try {
              _(_, _, _);
            } catch {}
          }
        }
      }
      return _;
    }
    _.exports = _;
  });
_();
var _ = 1073741823,
  _ =
    typeof globalThis < `u`
      ? globalThis
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
function _() {
  var _ = `__global_unique_id__`;
  return (_[_] = (_[_] || 0) + 1);
}
function _(_, _) {
  return _ === _ ? _ !== 0 || 1 / _ == 1 / _ : _ !== _ && _ !== _;
}
function _(_) {
  var _ = [];
  return {
    _: function (_) {
      _.push(_);
    },
    off: function (_) {
      _ = _.filter(function (_) {
        return _ !== _;
      });
    },
    get: function () {
      return _;
    },
    set: function (_, _) {
      (_ = _),
        _.forEach(function (_) {
          return _(_, _);
        });
    },
  };
}
function _(_) {
  return Array.isArray(_) ? _[0] : _;
}
function _(_, _) {
  var _,
    _,
    _ = `__create-react-context-` + _() + `__`,
    _ = (function (_) {
      _(_, _);
      function _() {
        var _,
          _ = [...arguments];
        return (
          (_ = _.call.apply(_, [this].concat(_)) || this),
          (_.emitter = _(_.props.value)),
          _
        );
      }
      var _ = _.prototype;
      return (
        (_.getChildContext = function () {
          var _;
          return (_ = {}), (_[_] = this.emitter), _;
        }),
        (_.componentWillReceiveProps = function (_) {
          if (this.props.value !== _.value) {
            var _ = this.props.value,
              _ = _.value,
              _;
            _(_, _)
              ? (_ = 0)
              : ((_ = typeof _ == `function` ? _(_, _) : _),
                (_ |= 0),
                _ !== 0 && this.emitter.set(_.value, _));
          }
        }),
        (_.render = function () {
          return this.props.children;
        }),
        _
      );
    })(_.Component);
  _.childContextTypes = ((_ = {}), (_[_] = _.default.object.isRequired), _);
  var _ = (function (_) {
    _(_, _);
    function _() {
      var _,
        _ = [...arguments];
      return (
        (_ = _.call.apply(_, [this].concat(_)) || this),
        (_.observedBits = void 0),
        (_.state = {
          value: _.getValue(),
        }),
        (_.onUpdate = function (_, _) {
          (_.observedBits | 0) & _ &&
            _.setState({
              value: _.getValue(),
            });
        }),
        _
      );
    }
    var _ = _.prototype;
    return (
      (_.componentWillReceiveProps = function (_) {
        var _ = _.observedBits;
        this.observedBits = _ ?? _;
      }),
      (_.componentDidMount = function () {
        this.context[_] && this.context[_]._(this.onUpdate);
        var _ = this.props.observedBits;
        this.observedBits = _ ?? _;
      }),
      (_.componentWillUnmount = function () {
        this.context[_] && this.context[_].off(this.onUpdate);
      }),
      (_.getValue = function () {
        return this.context[_] ? this.context[_].get() : _;
      }),
      (_.render = function () {
        return _(this.props.children)(this.state.value);
      }),
      _
    );
  })(_.Component);
  return (
    (_.contextTypes = ((_ = {}), (_[_] = _.default.object), _)),
    {
      Provider: _,
      Consumer: _,
    }
  );
}
var _ = _.createContext || _,
  _ = function (_) {
    var _ = _();
    return (_.displayName = _), _;
  },
  _ = _(`Router-History`),
  _ = _(`Router`);
_.Component, _.Component, _.Component, _.Component, _.Component, _.Component;
var _ = _.useContext;
function _() {
  return _(_);
}
function _() {
  return _(_).location;
}
var _ = _(_(), 1);
function _(_, _, _) {
  let _ = `${_}_HistoryValue`,
    _ = _(),
    _ = _(),
    _ = (_.state && _.state[_]) ?? _,
    _ = _.useRef(!1),
    _ = _.useRef(void 0),
    _ = _.useRef(void 0),
    _ = _.useCallback(
      (_) => {
        if (_.current && ((_.current = _), !_.current)) {
          let _ = _.location.pathname;
          _.current = window.setTimeout(() => {
            _.location.pathname == _ &&
              (!_.location.state || _.location.state[_] != _.current) &&
              _.replace(_.location.pathname, {
                ...(_.location.state || {}),
                [_]: _.current,
              }),
              (_.current = void 0);
          }, _);
        }
      },
      [_, _, _],
    );
  return (
    _.useEffect(() => {
      _.current = !0;
    }, []),
    [_, _]
  );
}
var _ = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(_, _) {
      (this.m_window = _),
        (this.m_options = {
          timing: `sine`,
          ..._,
        });
    }
    Start() {
      (this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration);
      let _;
      switch (this.m_options.timing) {
        case `linear`:
          _ = function (_) {
            return _;
          };
          break;
        case `cubic-in-out`:
          _ = function (_) {
            return _ < 0.5
              ? 4 * _ * _ * _
              : (_ - 1) * (2 * _ - 2) * (2 * _ - 2) + 1;
          };
          break;
        default:
          _ = function (_) {
            return 0.5 - Math.cos(_ * Math._) / 2;
          };
          break;
      }
      (this.m_bActive = !0),
        (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, _)),
        this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    BIsActive() {
      return this.m_bActive;
    }
    End() {
      if (this.m_bActive) {
        try {
          this.Update(1);
        } catch {}
        this.ClearInterval(), this.FireOnComplete();
      }
    }
    FireOnComplete() {
      this.m_options.onComplete && this.m_options.onComplete();
    }
    Cancel() {
      this.m_bActive = !1;
    }
    OnInterval(_) {
      if (!this.m_bActive) return;
      let _ = performance.now() - this.m_msStart;
      if (_ >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let _ = _ / this.m_options.msDuration;
      try {
        this.Update(_(_));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  _ = class extends _ {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(_, _, _) {
      super(`ownerDocument` in _ ? _(_) : _, _),
        (this.m_object = _),
        (this.m_propTargets = _);
    }
    Start() {
      this.m_props = {};
      for (let _ in this.m_propTargets) {
        let _ = parseFloat(this.m_object[_]) || 0,
          _ = this.m_propTargets[_];
        _ != _ &&
          (this.m_props[_] = {
            start: _,
            end: _,
          });
      }
      super.Start();
    }
    Update(_) {
      for (let _ in this.m_props) {
        let _ = this.m_props[_],
          _ = _.start + (_.end - _.start) * _;
        this.m_object[_] = _;
      }
    }
  },
  _ = new _(`ScrollSnap`).Debug;
function _(_, _) {
  let _ = _.useRef(void 0);
  return _.useCallback(
    (_, _) => {
      let _ = `sine`;
      if ((_.current && (_.current.Cancel(), (_ = `linear`)), !_.current))
        return;
      _ === void 0 && (_ = _.current.scrollTop),
        _ === void 0 && (_ = _.current.scrollLeft);
      let _ = Math.max(
        Math.abs(_.current.scrollTop - _),
        Math.abs(_.current.scrollLeft - _),
      );
      if (_ > 0) {
        let _ = Math.max(Math.min((_ / 1e3) * 200, 500), 300);
        (_.current = new _(
          _.current,
          {
            scrollTop: _,
            scrollLeft: _,
          },
          {
            msDuration: _,
            timing: _,
            onComplete: _,
          },
        )),
          _.current.Start();
      } else _ && _();
    },
    [_, _],
  );
}
function _(_, _ = `smooth`, _, _) {
  let _ = (_ ?? 30) / 100,
    _ = _.useRef(void 0),
    _ = _.useRef(void 0),
    _ = _.useCallback(() => {
      (_.current = void 0), (_.current = void 0);
    }, []),
    _ = _(_, _);
  return _.useCallback(
    (_) => {
      if ((_ && !_(_)) || _.defaultPrevented || !_.current) return !1;
      let {
          scrollTop: _,
          scrollHeight: _,
          clientHeight: _,
          scrollLeft: _,
          scrollWidth: _,
          clientWidth: _,
        } = _.current,
        _ = _.current ?? _,
        _ = _.current ?? _;
      switch (_.detail.button) {
        case _.DIR_UP:
          if (_ <= 2) return !1;
          _.current = Math.max(0, _ - _ * _);
          break;
        case _.DIR_DOWN:
          if (_ >= _ - _ - 2) return !1;
          _.current = Math.min(_ - _, _ + _ * _);
          break;
        case _.DIR_LEFT:
          if (_ <= 2) return !1;
          _.current = Math.max(0, _ - _ * _);
          break;
        case _.DIR_RIGHT:
          if (_ >= _ - _ - 2) return !1;
          _.current = Math.min(_ - _, _ + _ * _);
          break;
        default:
          return !1;
      }
      return (
        _(
          `ScrollOnGamepadDirection top:${_.current} left:${_.current}, behavior:${_ ?? `auto`} `,
          _.current,
        ),
        !_ || _ == `smooth`
          ? _(_.current, _.current)
          : (_.current.scrollTo({
              top: _.current,
              left: _.current,
              behavior: `auto`,
            }),
            _()),
        !0
      );
    },
    [_, _, _, _, _, _],
  );
}
function _() {
  let _ = _.useRef({
      width: 0,
      height: 0,
    }),
    _ = _.useRef(null);
  return {
    ref: _(
      _.useCallback(
        (_) => {
          if (!_.current?.BFocusWithin()) return;
          let _ = Math.round(_.contentRect.width),
            _ = Math.round(_.contentRect.height),
            _ = Math.abs(_ - _.current.width),
            _ = Math.abs(_ - _.current.height);
          (_ >= 1 || _ >= 1) &&
            ((_.current = {
              width: _,
              height: _,
            }),
            _(
              `KeepFocusedElementInViewOnResize scrolling focused element into view due to resize of`,
              _.target,
            ),
            _.current.Node()?.GetLastFocusElement()?.scrollIntoView({
              behavior: `auto`,
              block: `nearest`,
            }));
        },
        [_],
      ),
    ),
    navRef: _,
  };
}
var _ = `_2oQB5BDiIHE-`,
  _ = `_8OIq-O1HNVY-`,
  _ = `dptNgjXd-pQ-`,
  _ = `eoMaLPlEw68-`,
  _ = _(),
  _ = _.forwardRef(function (_, _) {
    let {
        scrollDirection: _,
        scrollPaddingTop: _,
        scrollPaddingRight: _,
        scrollPaddingBottom: _,
        scrollPaddingLeft: _,
        className: _,
        children: _,
        style: _,
        ..._
      } = _,
      _;
    switch (_) {
      case `x`:
        _ = _;
        break;
      case `both`:
        _ = _;
        break;
      default:
        _ = _;
        break;
    }
    let _ = {
      ..._,
    };
    (_ || _ === 0) && (_.scrollPaddingTop = _),
      (_ || _ === 0) && (_.scrollPaddingRight = _),
      (_ || _ === 0) && (_.scrollPaddingBottom = _),
      (_ || _ === 0) && (_.scrollPaddingLeft = _);
    let { ref: _, navRef: _ } = _(),
      _ = _(_, _.navRef),
      _ = _(_, _);
    return (0, _.jsx)(_, {
      ..._,
      style: _,
      className: (0, _.default)(_, _, _),
      ref: _,
      navRef: _,
      children: (0, _.jsx)(_, {
        children: _,
      }),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    let { scrollStepPercent: _, scrollBehavior: _, ..._ } = _,
      _ = _.useRef(null),
      _ = _(
        _,
        _,
        _,
        _.useCallback((_) => _.currentTarget != _.target, []),
      ),
      _ = _(_, _);
    return (0, _.jsx)(_, {
      ..._,
      onGamepadDirection: _,
      ref: _,
      scrollIntoViewType: _.NoTransformSparseContent,
    });
  });
_.forwardRef(function (_, _) {
  let { name: _, msScrollRestoreDelay: _, onScroll: _, ..._ } = _;
  return (0, _.jsx)(_, {
    name: _,
    msScrollRestoreDelay: _,
    parentOnScroll: _,
    refDiv: _,
    children: (_, _) =>
      (0, _.jsx)(_, {
        ..._,
        onScroll: _,
        ref: _,
      }),
  });
}),
  _.forwardRef(function (_, _) {
    let { name: _, msScrollRestoreDelay: _, onScroll: _, ..._ } = _;
    return (0, _.jsx)(_, {
      name: _,
      msScrollRestoreDelay: _,
      parentOnScroll: _,
      refDiv: _,
      children: (_, _) =>
        (0, _.jsx)(_, {
          ..._,
          onScroll: _,
          ref: _,
        }),
    });
  });
function _(_) {
  let {
      name: _,
      msScrollRestoreDelay: _,
      parentOnScroll: _,
      refDiv: _,
      children: _,
    } = _,
    [_, _] = _(`${_}ScrollTop`, 250, 0),
    [_, _] = _(`${_}ScrollLeft`, 250, 0),
    _ = _.useRef(0),
    _ = _.useRef(0),
    _ = _.useRef(void 0),
    _ = _.useCallback(
      (_) => {
        let { scrollTop: _, scrollLeft: _ } = _.currentTarget;
        _(_), (_.current = _), _(_), (_.current = _), _ && _(_);
      },
      [_, _, _],
    );
  _.useLayoutEffect(() => {
    let _ = function () {
      _.current &&
        (_(
          _.current.scrollHeight >= _,
          `Element is ${_.current.scrollHeight} high but trying to restore scrollTop of ${_}, element may need more time to lay out.`,
          _.current,
        ),
        (_.current = _),
        (_.current = _),
        _.current.scrollTo({
          top: _,
          left: _,
          behavior: `auto`,
        }),
        _.current.dispatchEvent(new UIEvent(`scroll`)));
    };
    (_ != _.current || _ != _.current) && (_ ? window.setTimeout(_, _) : _());
  }, [_, _, _]);
  let _ = _(_, _);
  return _.useMemo(() => _(_, _), [_, _, _]);
}
export { _, _, _, _, _, _, _, _, _, _, _ };
