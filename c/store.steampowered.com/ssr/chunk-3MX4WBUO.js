var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = {
  FocusRingRoot: "zMwifnPqWAI-",
  FocusRing: "G7jPexLcZ14-",
  flash: "FLDEa7rRhyY-",
  growOutline: "nWDadfKww6s-",
  fadeOutline: "N5-VUB--qfQ-",
  blinker: "ppcisOXf8KU-",
  DebugFocusRing: "wakyoxMBdvA-",
  FocusRingOnHiddenItem: "Ubvx1pqfMh8-",
};
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = new _("FocusNavigation").Debug;
function _(_) {
  let { children: _, disableFocusRing: _, ..._ } = _,
    [_, _] = _.default.useState({
      bFocusWithin: !1,
      navTarget: null,
      prevTarget: null,
    }),
    _ = _.default.useRef(null),
    _ = _.default.useMemo(
      () => ({
        OnBlur: (_, _, _) => {
          _({
            bFocusWithin: !1,
            navTarget: null,
            prevTarget: null,
          });
        },
        OnFocus: (_, _, _) => {
          _({
            bFocusWithin: !0,
            navTarget: _,
            prevTarget: null,
          });
        },
        OnFocusChange: (_, _, _) => {
          _({
            bFocusWithin: !0,
            navTarget: _,
            prevTarget: _,
          });
        },
        OnForceMeasureFocusRing: () => {
          _.current?.MeasureElementAndUpdate();
        },
      }),
      [_],
    );
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          ..._,
          ..._,
          refMeasure: _,
        }),
      (0, _.jsx)(_.Provider, {
        value: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let {
      rootClassName: _,
      className: _,
      bFocusWithin: _,
      navTarget: _,
      refMeasure: _,
    } = _,
    [_, _] = _.default.useState(null),
    _ = _(),
    _ = _(),
    _ = _(!1);
  return !_ && !_
    ? null
    : (0, _.jsx)("div", {
        className: (0, _.default)(_.FocusRingRoot, _),
        ref: _,
        children: (0, _.jsx)(_, {
          refMeasure: _,
          className: (0, _.default)(_, _ && _.DebugFocusRing),
          bFocusWithin: _ && (_ || _),
          navTarget: _,
          elContainer: _,
          bDebug: _,
        }),
      });
}
function _(_) {
  let {
      className: _,
      bFocusWithin: _,
      navTarget: _,
      elContainer: _,
      bDebug: _,
      refMeasure: _,
    } = _,
    [_, _] = _.default.useState(null),
    [_, _] = _.default.useReducer((_) => _ + 1, 0),
    [_, _] = _.default.useReducer((_) => _ + 1, 0);
  _(
    _,
    _.default.useMemo(
      () => ({
        MeasureElementAndUpdate: _,
      }),
      [],
    ),
  );
  let { bActiveTree: _, bDisableFocusClasses: _ } = _(),
    _ = _ && !_,
    _ = _(_, _),
    _ = _.default.useCallback(() => {
      if (!_ || !_.BWantsFocusRing() || !_ || !_) {
        _(null);
        return;
      }
      let _ = _.GetBoundingRect(),
        _ = _.getBoundingClientRect(),
        _ = {
          left: _._ - _._,
          top: _._ - _._,
          height: _.height,
          width: _.width,
        };
      _((_) =>
        !_ ||
        _.left != _.left ||
        _.top != _.top ||
        _.height != _.height ||
        _.width != _.width
          ? _
          : _,
      );
    }, [_, _, _]);
  _.default.useLayoutEffect(() => _(), [_]),
    _.default.useLayoutEffect(() => {
      _();
    }, [_]);
  let _ = _;
  return (
    _ && _ && (_.BWantsFocusRing() || (_ = !1)),
    _.default.useEffect(() => {
      if (!_) return;
      let _ = performance.now(),
        _,
        _ = () => {
          _(), performance.now() - _ <= 500 && (_ = requestAnimationFrame(_));
        };
      return _(), () => cancelAnimationFrame(_);
    }, [_, _, _, _]),
    !_ || !_
      ? null
      : (0, _.createElement)(_, {
          ..._,
          key: _,
          className: (0, _.default)(_, _ && _.FocusRingOnHiddenItem),
          target: _,
        })
  );
}
function _(_) {
  let { className: _, left: _, top: _, height: _, width: _, target: _ } = _,
    _ = 0,
    _ = {
      left: (_ ?? 0) - _ + "px",
      top: (_ ?? 0) - _ + "px",
      height: _ + "px",
      width: _ + "px",
    };
  return (0, _.jsx)("div", {
    className: (0, _.default)(_.FocusRing, _),
    style: _,
  });
}
function _(_, _) {
  let [_, _] = _.default.useState(!1);
  return (
    (0, _.useEffect)(() => {
      if (_ && _) {
        let _ = _.GetBoundingRect(),
          _ = _.Element,
          _ = _.ownerDocument.defaultView,
          _ = (_) =>
            _.getComputedStyle(_).display == "none" ||
            (_?.width == 0 && _.height == 0 && _._ == 0 && _._ == 0);
        for (; _(_) && _?.parentElement; )
          (_ = _.parentElement), (_ = _.getBoundingClientRect());
        let _ = _.Element != _;
        _(
          (_) => (
            _ &&
              _ != _ &&
              _(
                "Focused on hidden item: ",
                _.Element,
                ". Closest visible ancestor: ",
                _,
              ),
            _
          ),
        );
      }
    }, [_, _]),
    _
  );
}
export { _ };
