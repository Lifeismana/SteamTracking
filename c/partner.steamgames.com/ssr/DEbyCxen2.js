var _ = _(_());
function _() {
  if (!navigator?.userAgent) return;
  let _ = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (_ && _.length == 2) return _[1];
}
var _ = _.createContext({}),
  _ = (_) => {
    let _ = _.useContext(_);
    return (
      _(
        _?.bSuppressAssert || _.IN_GAMEPADUI !== void 0,
        `Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.`,
      ),
      _
    );
  };
function _(_) {
  let { IN_GAMEPADUI: _, IN_DESKTOPUI: _, IN_VR: _, children: _ } = _,
    _ = _({
      bSuppressAssert: !0,
    }),
    _ = _()?.startsWith(`Gamepad VR`) ?? !1,
    _ = _.useMemo(
      () => ({
        IN_GAMEPADUI: _ ?? _?.IN_GAMEPADUI ?? _()?.startsWith(`Gamepad`) ?? !1,
        IN_DESKTOPUI: _ ?? _?.IN_DESKTOPUI ?? !1,
        IN_VR: _ ?? _?.IN_VR ?? _,
      }),
      [_, _, _, _, _],
    );
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_) {
  return _(_)?.IN_GAMEPADUI;
}
function _(_) {
  return _(_)?.IN_VR;
}
function _() {
  return _.PLATFORM == `windows`;
}
function _() {
  return _.PLATFORM == `macos`;
}
function _(_, _) {
  _ != null &&
    (typeof _ == `function` ? _(_) : `current` in _ && (_.current = _));
}
function _(..._) {
  return _.useCallback((_) => {
    for (let _ of _) _(_, _);
  }, _);
}
function _(..._) {
  if (!(!_ || _.length === 0))
    return _.length === 1
      ? _[0]
      : (_) =>
          _.forEach((_) => {
            if (_) typeof _ == `function` ? _(_) : (_.current = _);
            else return;
          });
}
function _(_, _) {
  let _ = _.useRef(void 0);
  return _.useCallback((_) => {
    _.current && _.current(), (_.current = _(_));
  }, _);
}
function _(_) {
  let _ = _.useRef(null);
  return {
    refWithValue: _,
    refForElement: _(_, _),
  };
}
function _(_, _) {
  let _ = _.useRef(!1);
  _.useLayoutEffect(
    () => () => {
      _.current && _(_, void 0);
    },
    [_],
  ),
    _.useLayoutEffect(() => {
      (_ || _.current) && (_(_, _), (_.current = !!_));
    }, [_, _]);
}
function _(_, _, _) {
  return _(
    (_) => {
      if (!(!_ || !_))
        return _.addEventListener(_, _, _), () => _.removeEventListener(_, _);
    },
    [_, _],
  );
}
function _(_, _, _, _) {
  _.useEffect(() => {
    if (!(!_ || !_))
      return _.addEventListener(_, _, _), () => _.removeEventListener(_, _, _);
  }, [_, _, _]);
}
function _(_, _, _, _) {
  return _(
    _,
    `message`,
    _.useCallback(
      function (_) {
        _.data === _ && _(_, _);
      },
      [_, _, _],
    ),
    _,
  );
}
function _(_) {
  let [_, _] = _.useState(document.documentElement[_]);
  return (
    _.useEffect(() => {
      function _() {
        _(document.documentElement[_]);
      }
      return (
        window.addEventListener(`resize`, _, {
          passive: !0,
        }),
        () => window.removeEventListener(`resize`, _)
      );
    }, [_]),
    _
  );
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
