var _ = _((_) => {
  "use strict";
  var _ = _(),
    _ = _();
  function _(_, _) {
    return (_ === _ && (_ !== 0 || 1 / _ === 1 / _)) || (_ !== _ && _ !== _);
  }
  var _ = typeof Object._ == "function" ? Object._ : _,
    _ = _.useSyncExternalStore,
    _ = _.useRef,
    _ = _.useEffect,
    _ = _.useMemo,
    _ = _.useDebugValue;
  _.useSyncExternalStoreWithSelector = function (_, _, _, _, _) {
    var _ = _(null);
    if (_.current === null) {
      var _ = {
        hasValue: !1,
        value: null,
      };
      _.current = _;
    } else _ = _.current;
    _ = _(
      function () {
        function _(_) {
          if (!_) {
            if (((_ = !0), (_ = _), (_ = _(_)), _ !== void 0 && _.hasValue)) {
              var _ = _.value;
              if (_(_, _)) return (_ = _);
            }
            return (_ = _);
          }
          if (((_ = _), _(_, _))) return _;
          var _ = _(_);
          return _ !== void 0 && _(_, _) ? ((_ = _), _) : ((_ = _), (_ = _));
        }
        var _ = !1,
          _,
          _,
          _ = _ === void 0 ? null : _;
        return [
          function () {
            return _(_());
          },
          _ === null
            ? void 0
            : function () {
                return _(_());
              },
        ];
      },
      [_, _, _, _],
    );
    var _ = _(_, _[0], _[1]);
    return (
      _(
        function () {
          (_.hasValue = !0), (_.value = _);
        },
        [_],
      ),
      _(_),
      _
    );
  };
});
var _ = _((_, _) => {
  "use strict";
  _.exports = _();
});
var _ = _((_) => {
  "use strict";
  var _ = Symbol.for("react.element"),
    _ = Symbol.for("react.portal"),
    _ = Symbol.for("react.fragment"),
    _ = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    _ = Symbol.for("react.provider"),
    _ = Symbol.for("react.context"),
    _ = Symbol.for("react.server_context"),
    _ = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    _ = Symbol.for("react.suspense_list"),
    _ = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    _ = Symbol.for("react.offscreen"),
    _;
  _ = Symbol.for("react.module.reference");
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
  _.ContextConsumer = _;
  _.ContextProvider = _;
  _.Element = _;
  _.ForwardRef = _;
  _.Fragment = _;
  _.Lazy = _;
  _.Memo = _;
  _.Portal = _;
  _.Profiler = _;
  _.StrictMode = _;
  _.Suspense = _;
  _.SuspenseList = _;
  _.isAsyncMode = function () {
    return !1;
  };
  _.isConcurrentMode = function () {
    return !1;
  };
  _.isContextConsumer = function (_) {
    return _(_) === _;
  };
  _.isContextProvider = function (_) {
    return _(_) === _;
  };
  _.isElement = function (_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === _;
  };
  _.isForwardRef = function (_) {
    return _(_) === _;
  };
  _.isFragment = function (_) {
    return _(_) === _;
  };
  _.isLazy = function (_) {
    return _(_) === _;
  };
  _.isMemo = function (_) {
    return _(_) === _;
  };
  _.isPortal = function (_) {
    return _(_) === _;
  };
  _.isProfiler = function (_) {
    return _(_) === _;
  };
  _.isStrictMode = function (_) {
    return _(_) === _;
  };
  _.isSuspense = function (_) {
    return _(_) === _;
  };
  _.isSuspenseList = function (_) {
    return _(_) === _;
  };
  _.isValidElementType = function (_) {
    return (
      typeof _ == "string" ||
      typeof _ == "function" ||
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
          _.getModuleId !== void 0))
    );
  };
  _.typeOf = _;
});
var _ = _((_, _) => {
  "use strict";
  _.exports = _();
});
export { _, _ };
