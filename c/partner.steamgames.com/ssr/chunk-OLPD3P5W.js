var _ = _(_(), 1);
var _ = "GamepadInput";
var _ = "Checkout",
  _ = "PinnedView",
  _ = class {
    PostMessage(_) {}
    RegisterForMessage(_) {}
  },
  _ = class {
    m_fnCallback = void 0;
    constructor() {
      SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
    }
    RegisterForMessage(_) {
      this.m_fnCallback = _;
    }
    PostMessage(_) {
      let _ = JSON.stringify(_);
      SteamClient.BrowserView.PostMessageToParent(_, _);
    }
    OnMessage(_, _) {
      if (_ == _) {
        let _ = JSON.parse(_);
        this.m_fnCallback(_);
      } else if (_ == _) {
        let _ = JSON.parse(_);
        if (_.action == "paypal_success")
          try {
            window.OnPayPalSuccess(_.transid);
          } catch {}
        else if (_.action == "paypal_cancel")
          try {
            window.OnPayPalCancel(_.transid);
          } catch {}
      } else if (_ == _) {
        let _ = JSON.parse(_);
        try {
          window.HandleOverlayWindowPinnedView(
            _.bPinned == !0,
            _.bShowPinnedView == !0,
          );
        } catch {}
      }
    }
  };
_([_], _.prototype, "OnMessage", 1);
var _ = class {
  m_postWindow;
  m_fnCallback = void 0;
  constructor(_) {
    (this.m_postWindow = _), window.addEventListener("message", this.OnMessage);
  }
  RegisterForMessage(_) {
    this.m_fnCallback = _;
  }
  PostMessage(_) {
    let _ = JSON.stringify(_);
    this.m_postWindow.postMessage(
      {
        gamepadMessage: _,
        args: _,
      },
      "*",
    );
  }
  OnMessage(_) {
    let _ = _?.data;
    if (_ && _.gamepadMessage == _ && _.args) {
      let _ = JSON.parse(_.args);
      this.m_fnCallback(_);
    }
  }
};
_([_], _.prototype, "OnMessage", 1);
var _ = class {
  m_NavigationController;
  m_postMessage;
  m_bIsGamepadInputExternallyControlled = !1;
  constructor(_) {
    if (((this.m_NavigationController = _), _()))
      (this.m_bIsGamepadInputExternallyControlled = !0),
        (this.m_postMessage = new _()),
        this.m_NavigationController.UpdateSourceToGamepad();
    else {
      let _ = window.top;
      _ && _ != window.self
        ? ((this.m_bIsGamepadInputExternallyControlled = !0),
          (this.m_postMessage = new _(_)))
        : ((this.m_bIsGamepadInputExternallyControlled = !1),
          (this.m_postMessage = new _()));
    }
    this.m_postMessage.RegisterForMessage(this.OnMessage),
      window.addEventListener("unload", this.PostPageUnloading),
      this.m_NavigationController.RegisterForUnhandledButtonDownEvents((_) =>
        this.PostButtonPressToSteam(_.detail.button),
      ),
      this.UpdateActionDescriptions({}),
      this.SendGameInputState("CGamepadWebBridgeClient constructor");
  }
  RegisterForFocusChanged(_) {
    return _.FocusChangedCallbacks.Register(this.OnFocusChanged).Unregister;
  }
  BIsGamepadInputExternallyControlled() {
    return this.m_bIsGamepadInputExternallyControlled;
  }
  BFromActiveNavTree(_, _) {
    let _ = _?.Tree;
    return _ || (_ = _?.Tree), _ && _.Controller.IsActiveFocusNavTree(_);
  }
  OnFocusChanged(_, _, _) {
    this.BFromActiveNavTree(_, _) && this.OnActionDescriptionTargetChanged(_);
  }
  UpdateActionDescriptions(_) {
    this.m_postMessage.PostMessage({
      type: "UpdateActionDescriptions",
      data: {
        descriptions: _,
      },
    });
  }
  m_rgCallbackRegistrations = [];
  OnActionDescriptionTargetChanged(_) {
    if (
      (this.m_rgCallbackRegistrations.forEach((_) => _()),
      (this.m_rgCallbackRegistrations = []),
      _)
    ) {
      let _ = () =>
        this.UpdateActionDescriptions(_.GetActiveActionDescriptions() ?? {});
      _();
      for (let _ = _; _ != null; _ = _.Parent)
        this.m_rgCallbackRegistrations.push(
          _.ActionDescriptionChangedCallbackList.Register(_).Unregister,
        );
    } else this.UpdateActionDescriptions({});
  }
  OnMessage(_) {
    switch (_.type) {
      case "TakeFocus":
        this.m_NavigationController.TakeFocusChangingIFrame();
        break;
      case "ForwardedGameEventDetail":
        this.m_NavigationController.DispatchVirtualGamepad(
          _.data.event,
          _.data.details,
        );
        break;
    }
  }
  SendGameInputState(_) {
    let _ = 3;
    window.bSupportsGamepadUI && (_ = 4),
      this.m_postMessage.PostMessage({
        type: "GameInputState",
        data: {
          source: _,
          support: _,
        },
      });
  }
  PostButtonPressToSteam(_) {
    this.m_postMessage.PostMessage({
      type: "ButtonPressed",
      data: {
        button: _,
      },
    });
  }
  PostPageUnloading() {
    this.m_postMessage.PostMessage({
      type: "PageUnloading",
      data: {
        location: window.location.href,
      },
    });
  }
};
_([_], _.prototype, "OnFocusChanged", 1),
  _([_], _.prototype, "OnMessage", 1),
  _([_], _.prototype, "PostPageUnloading", 1);
function _() {
  return (
    _("BrowserView.RegisterForMessageFromParent") &&
    _("BrowserView.PostMessageToParent")
  );
}
var _ = [
    {
      index: 0,
      type: 1,
      category: "action",
    },
    {
      index: 1,
      type: 2,
      category: "action",
    },
    {
      index: 2,
      type: 3,
      category: "action",
    },
    {
      index: 3,
      type: 4,
      category: "action",
    },
    {
      index: 4,
      type: 5,
      category: "action",
    },
    {
      index: 5,
      type: 6,
      category: "action",
    },
    {
      index: 6,
      type: 7,
      category: "action",
    },
    {
      index: 7,
      type: 8,
      category: "action",
    },
    {
      index: 8,
      type: 13,
      category: "action",
    },
    {
      index: 9,
      type: 14,
      category: "action",
    },
    {
      index: 10,
      type: 15,
      category: "action",
    },
    {
      index: 11,
      type: 16,
      category: "action",
    },
    {
      index: 12,
      type: 9,
      category: "navigation",
    },
    {
      index: 13,
      type: 10,
      category: "navigation",
    },
    {
      index: 14,
      type: 11,
      category: "navigation",
    },
    {
      index: 15,
      type: 12,
      category: "navigation",
    },
    {
      index: 16,
      type: 27,
      category: "action",
    },
    {
      index: 17,
      type: 13,
      category: "action",
    },
  ],
  _ = class extends _ {
    m_rgGamepadStatus = [];
    constructor() {
      super(),
        this.SetSourceType(1),
        window.addEventListener("gamepadconnected", (_) => {
          this.m_bGamepadDetected ||
            (this.OnGamepadDetected(), this.PollGamepads());
        });
    }
    PollGamepads() {
      let _ = navigator.getGamepads(),
        _ = !1;
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (!_) continue;
        this.m_rgGamepadStatus[_] ||
          (this.m_rgGamepadStatus[_] = {
            buttons: [],
          });
        let _ = this.m_rgGamepadStatus[_];
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            _ = _.index;
          _.buttons[_] &&
            (_.buttons[_].pressed
              ? ((_ = !0),
                _.buttons[_] ||
                  ((_.buttons[_] = !0), this.OnButtonDown(_.type)))
              : _.buttons[_] && (this.OnButtonUp(_.type), (_.buttons[_] = !1)));
        }
      }
      requestAnimationFrame(this.PollGamepads);
    }
  };
_([_], _.prototype, "PollGamepads", 1);
var _ = class extends _ {
  m_lastButtonDown = 0;
  constructor(_) {
    super(),
      this.SetSourceType(2),
      _.addEventListener("keydown", this.OnKeyDown, {
        capture: !0,
      }),
      _.addEventListener("keyup", this.OnKeyUp, {
        capture: !0,
      }),
      _.addEventListener("blur", this.Reset);
  }
  OnKeyDown(_) {
    let _ = this.TranslateKey(_);
    _ != 0 &&
      (_.preventDefault(),
      _.stopPropagation(),
      _ != this.m_lastButtonDown &&
        (this.Reset(), this.OnButtonDown(_), (this.m_lastButtonDown = _)));
  }
  OnKeyUp(_) {
    let _ = this.TranslateKey(_);
    _ != 0 &&
      (this.OnButtonUp(_),
      (this.m_lastButtonDown = 0),
      _.preventDefault(),
      _.stopPropagation());
  }
  Reset() {
    this.m_lastButtonDown != 0 &&
      (this.OnButtonUp(this.m_lastButtonDown), (this.m_lastButtonDown = 0));
  }
  GetKeycodeFromEvent(_) {
    return _.PLATFORM === "linux" && _.key.length > 1
      ? _.key || _.code
      : _.code || _.key;
  }
  BShouldSwallowEventForTextInputWorkaround(_) {
    if (
      !(
        _(_.target) &&
        (_.target.nodeName === "INPUT" ||
          _.target.nodeName === "TEXTAREA" ||
          _.target.hasAttribute("contenteditable"))
      )
    )
      return !1;
    if (_.target.hasAttribute("contenteditable")) return !0;
    let _ = this.GetKeycodeFromEvent(_),
      _ = _.target,
      _ = Array.from(_.ownerDocument.getElementsByClassName("gpfocus")).some(
        (_) =>
          Array.from(_.classList).some((_) => _.includes("virtualkeyboard")),
      );
    switch (_) {
      case "ArrowUp": {
        if (_) return !0;
        let _ = _?.value.indexOf(`
`);
        return (
          _.target.nodeName === "TEXTAREA" &&
          _ >= 0 &&
          _ < (_?.selectionStart ?? 0)
        );
      }
      case "ArrowDown": {
        if (_) return !0;
        let _ = _?.value.lastIndexOf(`
`);
        return (
          _.target.nodeName === "TEXTAREA" &&
          _ >= 0 &&
          _ >= (_?.selectionStart ?? 0) &&
          (_?.selectionEnd ?? 0) < _?.value.length
        );
      }
      case "ArrowLeft":
        return _
          ? !0
          : (_?.selectionStart ?? 0) > 0 && (_?.selectionEnd ?? 0) > 0;
      case "ArrowRight":
        return _
          ? !0
          : (_?.selectionStart ?? 0) < _?.value.length &&
              (_?.selectionEnd ?? 0) < _?.value.length;
      case "Enter":
        return !0;
      case "Backspace":
        return !0;
      default:
        return !1;
    }
  }
  TranslateKey(_) {
    let _ = this.GetKeycodeFromEvent(_);
    if (_.altKey) return 0;
    if (this.BShouldSwallowEventForTextInputWorkaround(_)) return 0;
    if (_.ctrlKey)
      if (_.shiftKey)
        switch (_) {
          case "Digit4":
            return 7;
          case "Digit5":
            return 8;
          default:
            return 0;
        }
      else
        switch (_) {
          case "Digit1":
            return 27;
          case "Digit2":
            return 28;
          case "Digit3":
            return 13;
          case "Digit4":
            return 5;
          case "Digit5":
            return 6;
          case "Digit6":
            return 15;
          case "Digit7":
            return 16;
          case "Digit8":
            return 4;
          case "Digit9":
            return 13;
          case "Digit0":
            return 14;
        }
    else if (!_.shiftKey)
      switch (_) {
        case "Escape":
          return 2;
        case "Enter":
          return 1;
        case "Backspace":
          return 3;
        case "ArrowUp":
          return 9;
        case "ArrowDown":
          return 10;
        case "ArrowLeft":
          return 11;
        case "ArrowRight":
          return 12;
      }
    return 0;
  }
};
_([_], _.prototype, "OnKeyDown", 1),
  _([_], _.prototype, "OnKeyUp", 1),
  _([_], _.prototype, "Reset", 1);
var _ = class extends _ {
  m_nAccumulatedMouseMovement = 0;
  m_bFirstMouseUpdate = !0;
  m_nLastScreenX;
  m_nLastScreenY;
  m_lastButtonDown = 0;
  constructor(_) {
    super(),
      this.SetSourceType(3),
      _.addEventListener("mousedown", this.OnMouseDown),
      _.addEventListener("mouseup", this.OnMouseUp),
      _.addEventListener("mousemove", this.OnMouseMove),
      _.addEventListener("blur", this.Reset);
  }
  TranslateKey(_) {
    return _.button === 3 ? 2 : 0;
  }
  OnMouseDown(_) {
    if (_.defaultPrevented) return;
    let _ = this.TranslateKey(_);
    _ != 0 &&
      (_.preventDefault(),
      _ != this.m_lastButtonDown &&
        (this.Reset(), this.OnButtonDown(_), (this.m_lastButtonDown = _)),
      this.OnNavigationTypeChanged(3));
  }
  OnMouseUp(_) {
    let _ = this.TranslateKey(_);
    _ != 0 &&
      (this.OnButtonUp(_), (this.m_lastButtonDown = 0), _.preventDefault());
  }
  OnMouseMove(_) {
    if (!_.defaultPrevented) {
      if (this.m_bFirstMouseUpdate) {
        (this.m_nLastScreenX = _.screenX),
          (this.m_nLastScreenY = _.screenY),
          (this.m_bFirstMouseUpdate = !1);
        return;
      }
      (this.m_nAccumulatedMouseMovement +=
        Math.abs(_.screenX - this.m_nLastScreenX) +
        Math.abs(_.screenY - this.m_nLastScreenY)),
        this.m_nAccumulatedMouseMovement > 500 &&
          (this.Reset(), this.OnNavigationTypeChanged(3));
    }
  }
  Reset() {
    (this.m_nAccumulatedMouseMovement = 0),
      (this.m_bFirstMouseUpdate = !0),
      this.m_lastButtonDown != 0 &&
        (this.OnButtonUp(this.m_lastButtonDown), (this.m_lastButtonDown = 0));
  }
};
_([_], _.prototype, "TranslateKey", 1),
  _([_], _.prototype, "OnMouseDown", 1),
  _([_], _.prototype, "OnMouseUp", 1),
  _([_], _.prototype, "OnMouseMove", 1),
  _([_], _.prototype, "Reset", 1);
var _ = class extends _ {
  constructor(_) {
    super(),
      this.SetSourceType(4),
      _.addEventListener("touchstart", this.OnTouchStart),
      _.addEventListener("touchend", this.OnTouchEnd);
  }
  OnTouchStart(_) {
    _.defaultPrevented || this.OnNavigationTypeChanged(4);
  }
  OnTouchEnd(_) {
    _.defaultPrevented || this.OnNavigationTypeChanged(4);
  }
};
_([_], _.prototype, "OnTouchStart", 1), _([_], _.prototype, "OnTouchEnd", 1);
var _ = "VirtualKeyboardMessage";
function _(_) {
  return _ && _.type === _;
}
var _ = class {
  m_ownerWindow;
  constructor() {}
  Init(_) {
    return (
      (this.m_ownerWindow = _),
      this.m_ownerWindow.addEventListener("message", this.OnMessage),
      () => {
        this.m_ownerWindow.removeEventListener("message", this.OnMessage),
          (this.m_ownerWindow = void 0);
      }
    );
  }
  CreateVirtualKeyboardRef() {
    return {
      ShowVirtualKeyboard: this.ShowVirtualKeyboard,
      ShowModalKeyboard: this.ShowModalKeyboard,
      SetAsCurrentVirtualKeyboardTarget: () => {},
      HideVirtualKeyboard: this.HideVirtualKeyboard,
      DelayHideVirtualKeyboard: this.HideVirtualKeyboard,
      BIsActive: () => !0,
      BIsElementValidForInput: () => !0,
    };
  }
  ShowVirtualKeyboard() {
    this.SendMessage({
      message: "ShowVirtualKeyboard",
    });
  }
  ShowModalKeyboard() {
    this.SendMessage({
      message: "ShowModalKeyboard",
    });
  }
  HideVirtualKeyboard(_) {
    this.SendMessage({
      message: "HideVirtualKeyboard",
      msDelay: _,
    });
  }
  OnBrowserViewMessage(_, _) {
    _ == _ && this.InternalDispatchMessage(JSON.parse(_));
  }
  OnMessage(_) {
    this.InternalDispatchMessage(_.data);
  }
  InternalDispatchMessage(_) {
    _(_) && _.message;
  }
  SendMessage(_) {
    let _ = {
      type: "VirtualKeyboardMessage",
      ..._,
    };
    _("BrowserView.PostMessageToParent")
      ? SteamClient.BrowserView.PostMessageToParent(_.type, JSON.stringify(_))
      : this.m_ownerWindow &&
        (_(
          this.m_ownerWindow.parent &&
            this.m_ownerWindow.parent != this.m_ownerWindow,
          "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
        ),
        this.m_ownerWindow.parent.postMessage(_, "*"));
  }
};
_([_], _.prototype, "ShowVirtualKeyboard", 1),
  _([_], _.prototype, "ShowModalKeyboard", 1),
  _([_], _.prototype, "HideVirtualKeyboard", 1),
  _([_], _.prototype, "OnBrowserViewMessage", 1),
  _([_], _.prototype, "OnMessage", 1);
var _ = class {
  m_showKeyboard;
  m_showModalKeyboard;
  m_hideKeyboard;
  constructor(_, _, _, _) {
    (this.m_showKeyboard = _),
      (this.m_showModalKeyboard = _),
      (this.m_hideKeyboard = _),
      _._("message", this.OnMessage);
  }
  OnMessage(_, _, _) {
    if (_ == _) {
      let _ = JSON.parse(_);
      if (_(_))
        switch (_.message) {
          case "ShowVirtualKeyboard":
            this.m_showKeyboard();
            break;
          case "ShowModalKeyboard":
            this.m_showModalKeyboard();
            break;
          case "HideVirtualKeyboard":
            this.m_hideKeyboard();
            break;
        }
    }
  }
};
_([_], _.prototype, "OnMessage", 1);
var _ = _(_(), 1);
function _(_) {
  let _ = _(),
    [_] = _.useState(() => {
      let _ = new _();
      return _ && _.UpdateSourceToGamepad(), _;
    }),
    [_, _] = _.useState(),
    [_] = _.useState(() => new _()),
    [_, _] = _.useState(void 0);
  return (
    _.useEffect(() => {
      if (_ && !_) {
        let _ = new _(_);
        _(_), _(_.BIsGamepadInputExternallyControlled());
      }
    }, [_, _, _]),
    _.useEffect(() => {
      if (_) return _.Init(window);
    }, [_, _]),
    (0, _.jsxs)(_, {
      controller: _,
      children: [
        _ === !1 && _ === !0 && (0, _.jsx)(_, {}),
        (_ === !0 || _ === !0) && (0, _.jsx)(_, {}),
        _ && (0, _.jsx)(_, {}),
        (0, _.jsxs)(_, {
          ownerWindow: window,
          children: [
            _ &&
              (0, _.jsx)(_, {
                bridge: _,
              }),
            (0, _.jsx)(_, {
              factory: _,
              children: _.children,
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { bridge: _ } = _,
    _ = _();
  return (
    _.useEffect(() => {
      if (!(!_ || !_)) return _.RegisterForFocusChanged(_);
    }, [_, _]),
    null
  );
}
function _() {
  let [_] = _.useState(() => new _());
  return _(_), null;
}
function _(_) {
  let [_, _] = _.useState(void 0);
  _.useEffect(() => _(new _(window)), [_]), _(_);
}
function _() {
  return _(_), null;
}
function _() {
  return _(_), _(_), null;
}
export { _ };
