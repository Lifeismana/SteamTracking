var _ = _(_()),
  _ = _(_(), 1),
  _ = class {
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
  };
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
var _ = new _(`ScrollSnap`).Debug;
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
export { _, _, _, _ };
