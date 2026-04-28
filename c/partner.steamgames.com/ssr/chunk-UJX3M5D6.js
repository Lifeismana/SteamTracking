var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1);
var _ = class {
    m_fnCallbackOnPlaySound = new _();
    m_fnCallbackOnSuppressSound = new _();
    RegisterCallbackOnPlaySound(_) {
      return this.m_fnCallbackOnPlaySound.Register(_);
    }
    PlayNavSound(_, _) {
      this.m_fnCallbackOnPlaySound.Dispatch(_, _);
    }
    RegisterCallbackOnSuppressNavImminentSound(_) {
      return this.m_fnCallbackOnSuppressSound.Register(_);
    }
    SuppressImminentNavSound() {
      this.m_fnCallbackOnSuppressSound.Dispatch();
    }
  },
  _ = new _();
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = new _("GamepadEvents").Debug;
function _(_, _, _) {
  _ === void 0 &&
    (_ = [
      _.onButtonDown,
      _.onButtonUp,
      _.onOKButton,
      _.onCancelButton,
      _.onSecondaryButton,
      _.onOptionsButton,
      _.onMenuButton,
      _.onGamepadDirection,
      _.onGamepadFocus,
      _.onGamepadBlur,
    ]),
    _.default.useEffect(() => {
      let _ = _.current,
        _ = [];
      return (
        _ &&
          (_.onButtonDown && _.push(_(_, _.onButtonDown)),
          _.onButtonUp && _.push(_(_, _.onButtonUp)),
          _.onOKButton && _.push(_(_, _.onOKButton)),
          _.onCancelButton && _.push(_(_, _.onCancelButton)),
          _.onSecondaryButton && _.push(_(_, _.onSecondaryButton)),
          _.onOptionsButton && _.push(_(_, _.onOptionsButton)),
          _.onMenuButton && _.push(_(_, _.onMenuButton)),
          _.onGamepadDirection && _.push(_(_, _.onGamepadDirection)),
          _.onGamepadFocus && _.push(_(_, _.onGamepadFocus)),
          _.onGamepadBlur && _.push(_(_, _.onGamepadBlur))),
        () => _.forEach((_) => _())
      );
    }, _);
}
function _(_) {
  return _.stopPropagation(), !1;
}
function _(_, _, _) {
  let { onButtonDown: _, ..._ } = _,
    _ = _.default.useCallback(
      (_) => {
        _ && _(_),
          _(
            "Gamepad Event fired:",
            _.detail.button,
            ", handled:",
            _ != null,
            ", propagation stopped:",
            _.cancelBubble,
          ),
          !_.cancelBubble && _.OnRootButtonDown(_);
      },
      [_, _],
    );
  _(_, _),
    _(
      {
        onButtonDown: _,
        onButtonUp: _,
        onOKButton: _,
        onCancelButton: _,
        onSecondaryButton: _,
        onOptionsButton: _,
        onMenuButton: _,
        onGamepadDirection: _,
        onGamepadFocus: _,
        onGamepadBlur: _,
      },
      _,
      [_],
    );
}
var _ = _(_(), 1);
function _() {
  return _.default.createRef();
}
var _ = _("div", {
    bDOMElementFocusByDefault: !1,
  }),
  _ = _("button", {
    bActivateByDefault: (_) => _.type === "submit",
  }),
  _ = _("a", {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  _ = _.default.forwardRef(function (_, _) {
    let { href: _ = "#", ..._ } = _;
    return (0, _.jsx)(_, {
      ref: _,
      href: _,
      ..._,
    });
  }),
  _ = _("input"),
  _ = _("textarea"),
  _ = _("img", {
    bDOMElementFocusByDefault: !1,
  }),
  _ = _("label", {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  _ = _("section", {
    bFocusableByDefault: !1,
  }),
  _ = _("form", {
    bFocusableByDefault: !1,
  });
function _(_, _, _ = !1) {
  _.default.useEffect(() => {
    let _ = _.current;
    _ && (_ ? _.Activate(_) : _.Deactivate());
  }, [_, _, _]);
}
function _(_) {
  if (!_) return 0;
  switch (_) {
    case "column":
      return 1;
    case "column-reverse":
      return 3;
    case "row":
      return 2;
    case "row-reverse":
      return 4;
    case "grid":
      return 5;
    case "geometric":
      return 6;
    default:
      return _(_, `Unhandled flow-children: ${_}`), 0;
  }
}
function _(_) {
  let {
    onEnterKeyPress: _,
    strEnterKeyLabel: _,
    onKeyboardNavOut: _,
    onKeyboardShow: _,
    onKeyboardFullyVisible: _,
    onTextEntered: _,
    BIsElementValidForInput: _,
    ..._
  } = _;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: _,
      strEnterKeyLabel: _,
      onKeyboardNavOut: _,
      onKeyboardShow: _,
      onKeyboardFullyVisible: _,
      onTextEntered: _,
      BIsElementValidForInput: _,
    },
    props: _,
  };
}
var _ = _(_(), 1),
  _ = _.createContext(null),
  _ = _.createContext(_);
function _(_, _) {
  let _ = _.useRef(null);
  return (
    _ &&
      (!_.current || _.current.m_Parent != _) &&
      (_.current = _.Tree.CreateNode(_, _)),
    _.current
  );
}
function _(_) {
  let { navRef: _, ..._ } = _,
    _ = _.useRef(null),
    _ = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    _ = _(_, _);
  return (
    _.useLayoutEffect(() => {
      _ && _.SetProperties(_);
    }),
    _.useLayoutEffect(() => {
      if (!_) return;
      let _ = _.Tree.RegisterNavigationItem(_, _.current);
      return () => {
        _();
      };
    }, [_, _, _]),
    _.useLayoutEffect(() => {
      if (!(!_ || !_)) return _(_, _.CreateHandle()), () => _(_, null);
    }, [_, _]),
    {
      ref: _,
      node: _,
    }
  );
}
function _(_) {
  let {
      onButtonDown: _,
      onButtonUp: _,
      onOKButton: _,
      onCancelButton: _,
      onSecondaryButton: _,
      onOptionsButton: _,
      onGamepadDirection: _,
      onGamepadFocus: _,
      onGamepadBlur: _,
      onMenuButton: _,
      onOKActionDescription: _,
      onCancelActionDescription: _,
      onSecondaryActionDescription: _,
      onOptionsActionDescription: _,
      onMenuActionDescription: _,
      actionDescriptionMap: _,
      ..._
    } = _,
    _ = {};
  _ !== void 0 && (_.onButtonDown = _),
    _ !== void 0 && (_.onButtonUp = _),
    _ !== void 0 && (_.onOKButton = _),
    _ !== void 0 && (_.onCancelButton = _),
    _ !== void 0 && (_.onSecondaryButton = _),
    _ !== void 0 && (_.onOptionsButton = _),
    _ !== void 0 && (_.onMenuButton = _),
    _ !== void 0 && (_.onGamepadDirection = _),
    _ !== void 0 && (_.onGamepadFocus = _),
    _ !== void 0 && (_.onGamepadBlur = _);
  let _ = _({
    onOKActionDescription: _,
    onCancelActionDescription: _,
    onSecondaryActionDescription: _,
    onOptionsActionDescription: _,
    onMenuActionDescription: _,
    actionDescriptionMap: _,
  });
  return {
    gamepadEvents: _,
    actionDescriptions: _,
    props: _,
  };
}
function _(_) {
  let {
      autoFocus: _,
      preferredFocus: _,
      disableNavSounds: _,
      fnCanTakeFocus: _,
      childFocusDisabled: _,
      focusableIfEmpty: _,
      onFocusWithin: _,
      navKey: _,
      noFocusRing: _,
      focusable: _,
      navRef: _,
      actionDescriptionMap: _,
      onMoveUp: _,
      onMoveRight: _,
      onMoveDown: _,
      onMoveLeft: _,
      navEntryPreferPosition: _,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewType: _,
      resetNavOnEntry: _,
      ..._
    } = _,
    { gamepadEvents: _, actionDescriptions: _, props: _ } = _(_),
    _ = {
      autoFocus: _,
      preferredFocus: _,
      disableNavSounds: _,
      fnCanTakeFocus: _,
      childFocusDisabled: _,
      focusableIfEmpty: _,
      onFocusWithin: _,
      navKey: _,
      noFocusRing: _,
      focusable: _,
      navRef: _,
      onMoveUp: _,
      onMoveRight: _,
      onMoveDown: _,
      onMoveLeft: _,
      navEntryPreferPosition: _,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewType: _,
      resetNavOnEntry: _,
      actionDescriptionMap: {
        ..._,
        ..._,
      },
    };
  return {
    elemProps: _,
    navOptions: _,
    gamepadEvents: _,
  };
}
function _(_) {
  return function (_) {
    let {
        focusClassName: _,
        focusWithinClassName: _,
        bFocusableByDefault: _,
        className: _,
        divRef: _,
        node: _,
        tabIndex: _,
        children: _,
        ..._
      } = _,
      _ = _(),
      _ = _(_.SubscribableHasFocus) && _,
      _ = _(_.SubscribableFocusWithin) && _,
      {
        bActiveTree: _,
        bActiveTreeWithinContext: _,
        bDisableFocusClasses: _,
        bIsMounted: _,
      } = _(),
      _ = _ && !_,
      _ = _ && !_ && (_ !== void 0 || _);
    return _.createElement(
      _,
      {
        ..._,
        className: (0, _.default)(_, _ && _ && _, _ && _ && _),
        tabIndex: _ ? -1 : _,
        ref: _,
      },
      _,
    );
  };
}
var _ = _("div");
function _(_) {
  return _.PlayNavSound(21), _(_.currentTarget) && _.currentTarget.click(), !0;
}
var _ = _.createContext(void 0),
  _ = _.Provider;
function _(_, _, _, _, _) {
  let {
      elemProps: { focusClassName: _, children: _, "flow-children": _, ..._ },
      navOptions: _,
      gamepadEvents: _,
    } = _(_),
    {
      bFocusableByDefault: _ = !0,
      bActivateByDefault: _ = !1,
      bDOMElementFocusByDefault: _ = _,
    } = _ || {};
  _.focusable === void 0 && !_.disabled && _ && (_.focusable = !0);
  let _ = _(_),
    { ref: _, node: _ } = _({
      layout: _,
      ..._,
    });
  _.onOKButton ||
    ((("onClick" in _ && _.onClick) || (_ && (_ === !0 || _(_)))) &&
      (_.onOKButton = _)),
    _.focusable && !_
      ? (_.tabIndex = _.tabIndex || 0)
      : !_.focusable && _ && (_.tabIndex = _.tabIndex ?? -1),
    _(_, _);
  let _ = _(_, _),
    _ = (0, _.useContext)(_)?.Component,
    _ = {
      ..._,
    };
  return (
    "onClick" in _ && (_.role ??= "button"),
    _
      ? ((_ = {
          ..._,
          divRef: _,
          node: _,
          focusClassName: (0, _.default)(_, "gpfocus"),
          focusWithinClassName: "gpfocuswithin",
          bFocusableByDefault: _,
          className: (0, _.default)(_.className, "Focusable"),
        }),
        (0, _.jsx)(_.Provider, {
          value: _,
          children: _
            ? _.createElement(
                _,
                {
                  ..._,
                  Component: _,
                },
                _,
              )
            : _.createElement(_, _, _),
        }))
      : _.createElement(
          _,
          {
            ..._,
            ref: _,
            className: (0, _.default)(_.className, "Focusable"),
          },
          _,
        )
  );
}
function _(_, _) {
  let _ = _(_);
  return _.forwardRef(function (_, _) {
    return _(_, _, _, _, _);
  });
}
function _(_) {
  let _ = _(_);
  return _.forwardRef(function (_, _) {
    let {
        virtualKeyboardProps: _,
        props: { refKeyboardHandle: _, ..._ },
      } = _(_),
      _ = _(_, _),
      _ = _(_, _);
    return _(_, _, _, _);
  });
}
var _ = _(_(), 1),
  _ = _.default.forwardRef(function (_, _) {
    let {
        navID: _,
        onActivated: _,
        onDeactivated: _,
        navTreeRef: _,
        enabled: _,
        modal: _,
        virtualFocus: _,
        historyMode: _,
        parentEmbeddedNavTree: _,
        onGlobalButtonDown: _,
        disableFocusClasses: _,
        disabledRoot: _,
        "flow-children": _,
        ..._
      } = _,
      { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_);
    return _()
      ? (0, _.jsx)(_, {
          navID: _,
          onActivated: _,
          onDeactivated: _,
          navTreeRef: _,
          enabled: _,
          modal: _,
          virtualFocus: _,
          historyMode: _,
          parentEmbeddedNavTree: _,
          onGlobalButtonDown: _,
          disableFocusClasses: _,
          disabledRoot: _,
          "flow-children": _,
          ..._,
          ..._,
          children: (0, _.jsx)("div", {
            ..._,
            ref: _,
          }),
        })
      : (0, _.jsx)("div", {
          ..._,
          ref: _,
        });
  });
function _(_) {
  let {
      navID: _,
      onActivated: _,
      onDeactivated: _,
      navTreeRef: _,
      enabled: _ = !0,
      modal: _ = !1,
      virtualFocus: _ = !1,
      historyMode: _,
      children: _,
      parentEmbeddedNavTree: _,
      onGlobalButtonDown: _,
      disableFocusClasses: _ = !1,
      disabledRoot: _ = !1,
      "flow-children": _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_),
    { refDiv: _, tree: _ } = _({
      navID: _,
      parentEmbeddedNavTree: _,
      disabledRoot: _,
      enabled: _,
      onGlobalButtonDown: _,
      navTreeRef: _,
      virtualFocus: _,
      modal: _,
      historyMode: _,
    });
  _(_.OnActivateCallbacks, _),
    _(_.OnDeactivateCallbacks, _),
    _(_, _, _),
    _.default.useLayoutEffect(() => {
      let _ = _(_);
      _.Root.SetProperties({
        ..._,
        layout: _,
      });
    });
  let _ = _(_, _.props.ref);
  return (0, _.jsx)(_, {
    tree: _ ? null : _,
    disableFocusClasses: _ || _,
    children: (0, _.jsx)(_.Provider, {
      value: _ ? null : _.Root,
      children: _.default.cloneElement(_, {
        _: _,
        "data-react-nav-root": _,
        ref: _,
      }),
    }),
  });
}
function _(_) {
  let {
      navID: _,
      parentEmbeddedNavTree: _,
      disabledRoot: _,
      enabled: _,
      navTreeRef: _,
      onGlobalButtonDown: _,
      ..._
    } = _,
    _ = _(),
    _ = _() || _.GetDefaultContext(),
    _ = _.default.useContext(_),
    [_] = _.default.useState(() =>
      _.NewGamepadNavigationTree(_, _, _ ?? _?.Tree, {
        ..._,
        bIsEmbeddedInLegacyTree: !!_,
      }),
    ),
    _ = _.default.useRef(null);
  return (
    _.SetOnGlobalButtonDown(_),
    _.default.useEffect(
      () => _.RegisterNavigationItem(_.Root, _.current),
      [_, _],
    ),
    _.default.useEffect(() => {
      _.SetIsEnabled(_);
    }, [_, _]),
    _.default.useEffect(() => {
      if (!_)
        return _.RegisterGamepadNavigationTree(
          _,
          _.current.ownerDocument.defaultView,
        );
    }, [_, _, _]),
    _.default.useEffect(() => (_(_, _), () => _(_, null)), [_, _]),
    {
      refDiv: _,
      tree: _,
    }
  );
}
var _ = _.default.createContext({
  bActiveTree: !1,
  bActiveTreeWithinContext: !1,
  bDisableFocusClasses: !1,
  bIsMounted: !1,
});
function _(_) {
  let { tree: _, disableFocusClasses: _ = !1, children: _ } = _,
    [_, _] = _.default.useState(_?.BIsActive() || !1),
    [_, _] = _.default.useState(_?.BIsActiveWithinContext() || !1),
    _ = _(_?.SubscribableIsMounted) ?? !1;
  _.default.useEffect(() => {
    if (!_) {
      _(!1), _(!1);
      return;
    }
    return (
      _(_.BIsActive()),
      _(_.BIsActiveWithinContext()),
      _.OnActiveStateChangedCallbacks.Register(() => {
        _(_.BIsActive()), _(_.BIsActiveWithinContext());
      }).Unregister
    );
  }, [_]);
  let _ = _.default.useMemo(
    () => ({
      bActiveTree: _,
      bActiveTreeWithinContext: _,
      bDisableFocusClasses: _,
      bIsMounted: _,
    }),
    [_, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.default.useContext(_);
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
