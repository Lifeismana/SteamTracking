var _ = class {
  m_ActiveInputId;
  m_ActiveInputTimeout;
  m_config;
  constructor(_) {
    this.m_config = _;
  }
  Reset() {
    (this.m_ActiveInputId = void 0),
      this.m_ActiveInputTimeout != null &&
        (clearInterval(this.m_ActiveInputTimeout),
        (this.m_ActiveInputTimeout = void 0));
  }
  HandleInputButtonDown(_, _) {
    if (this.m_ActiveInputId !== _ && _ != null) {
      this.Reset(), (this.m_ActiveInputId = _);
      let _ = () => {
        this.m_ActiveInputTimeout = window.setInterval(() => {
          _();
        }, this.m_config.repeatInterval_ms);
      };
      this.m_config.firstRepeatInterval_ms == null ||
      this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
        ? _()
        : (this.m_ActiveInputTimeout = window.setTimeout(() => {
            _(), _();
          }, this.m_config.firstRepeatInterval_ms));
    }
  }
};
var _ = class {
  m_config;
  m_inputRepeatGenerator;
  m_repeatOnAxis = 0;
  m_fnRepeatAllowed = () => !0;
  constructor(_) {
    (this.m_config = _), (this.m_inputRepeatGenerator = new _(_));
  }
  Reset() {
    this.m_inputRepeatGenerator.Reset();
  }
  SetRepeatAllowed(_) {
    _ || (_ = () => !0), (this.m_fnRepeatAllowed = _);
  }
  HandleInputButtonDown(_, _, _) {
    this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(_)
      ? this.m_repeatOnAxis == 0 &&
        ((_ == 9 || _ == 10) && (this.m_repeatOnAxis = 2),
        (_ == 11 || _ == 12) && (this.m_repeatOnAxis = 1),
        _(),
        this.m_inputRepeatGenerator.HandleInputButtonDown(_, _))
      : (_(), this.m_inputRepeatGenerator.Reset());
  }
  HandleInputButtonUp(_) {
    if (this.m_config.inputsThatRepeat.has(_) && this.m_repeatOnAxis != 0) {
      let _ = _ == 9 || _ == 10,
        _ = _ == 11 || _ == 12;
      ((this.m_repeatOnAxis == 2 && _) || (this.m_repeatOnAxis == 1 && _)) &&
        ((this.m_repeatOnAxis = 0), this.m_inputRepeatGenerator.Reset());
    } else this.m_inputRepeatGenerator.Reset();
  }
};
var _ = ((_) => (
  (_[(_.INVALID = 0)] = "INVALID"),
  (_[(_._ = 1)] = "OK"),
  (_[(_.CANCEL = 2)] = "CANCEL"),
  (_[(_.SECONDARY = 3)] = "SECONDARY"),
  (_[(_.OPTIONS = 4)] = "OPTIONS"),
  (_[(_.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
  (_[(_.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
  (_[(_.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
  (_[(_.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
  (_[(_.DIR_UP = 9)] = "DIR_UP"),
  (_[(_.DIR_DOWN = 10)] = "DIR_DOWN"),
  (_[(_.DIR_LEFT = 11)] = "DIR_LEFT"),
  (_[(_.DIR_RIGHT = 12)] = "DIR_RIGHT"),
  (_[(_.SELECT = 13)] = "SELECT"),
  (_[(_.START = 14)] = "START"),
  (_[(_.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
  (_[(_.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
  (_[(_.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
  (_[(_.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
  (_[(_.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
  (_[(_.LPAD_CLICK = 20)] = "LPAD_CLICK"),
  (_[(_.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
  (_[(_.RPAD_CLICK = 22)] = "RPAD_CLICK"),
  (_[(_.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
  (_[(_.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
  (_[(_.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
  (_[(_.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
  (_[(_.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
  (_[(_.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU"),
  (_[(_.DUMMY_INPUT = 29)] = "DUMMY_INPUT"),
  _
))(_ || {});
var _ = class {
  m_OnGamepadDetectedCallbacks = new _();
  m_ButtonDownCallbacks = new _();
  m_ButtonUpCallbacks = new _();
  m_AnalogCallbacks = new _();
  m_NavigationTypeChangeCallbacks = new _();
  m_eNavigationSourceType;
  m_fLastActiveTime;
  m_nLastActiveControllerIndex = -1;
  m_ButtonRepeatHandler = new _({
    inputsThatRepeat: new Set([9, 10, 11, 12]),
    firstRepeatInterval_ms: 400,
    repeatInterval_ms: 50,
  });
  m_bGamepadDetected = !1;
  RegisterForGamepadDetected(_) {
    return this.m_OnGamepadDetectedCallbacks.Register(_);
  }
  RegisterForGamepadButtonDown(_) {
    return this.m_ButtonDownCallbacks.Register(_);
  }
  RegisterForGamepadButtonUp(_) {
    return this.m_ButtonUpCallbacks.Register(_);
  }
  RegisterForAnalog(_) {
    return this.m_AnalogCallbacks.Register(_);
  }
  RegisterForNavigationTypeChange(_) {
    return this.m_NavigationTypeChangeCallbacks.Register(_);
  }
  SetSourceType(_) {
    this.m_eNavigationSourceType = _;
  }
  GetSourceType() {
    return this.m_eNavigationSourceType;
  }
  SetControllerActive(_) {
    (this.m_nLastActiveControllerIndex = _),
      (this.m_fLastActiveTime = Date.now());
  }
  GetActiveControllerIndex() {
    return this.m_nLastActiveControllerIndex;
  }
  GetActiveControllerTime() {
    return this.m_fLastActiveTime;
  }
  SetRepeatAllowed(_) {
    this.m_ButtonRepeatHandler.SetRepeatAllowed(_);
  }
  OnGamepadDetected() {
    console.log("Gamepad detected"),
      (this.m_bGamepadDetected = !0),
      this.m_OnGamepadDetectedCallbacks.Dispatch();
  }
  OnButtonDown(_, _, _, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_ButtonRepeatHandler.HandleInputButtonDown(
        _,
        () => this.DispatchButtonDown(_, !1, _, _),
        () => this.DispatchButtonDown(_, !0, _, _),
      );
  }
  OnButtonUp(_, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_ButtonRepeatHandler.HandleInputButtonUp(_),
      this.m_ButtonUpCallbacks.Dispatch(
        _,
        this.m_eNavigationSourceType,
        this.m_nLastActiveControllerIndex,
      );
  }
  DispatchButtonDown(_, _, _, _) {
    this.m_ButtonDownCallbacks.Dispatch(
      _,
      this.m_eNavigationSourceType,
      this.m_nLastActiveControllerIndex,
      _,
      _,
      _,
    );
  }
  OnAnalogPad(_, _, _, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_AnalogCallbacks.Dispatch(
        _,
        this.m_nLastActiveControllerIndex,
        _,
        _,
      );
  }
  OnNavigationTypeChanged(_) {
    this.m_NavigationTypeChangeCallbacks.Dispatch(_);
  }
};
var _ = _(_(), 1),
  _ = ((_) => (
    (_[(_.GAMEPAD = 0)] = "GAMEPAD"),
    (_[(_.KEYBOARD = 1)] = "KEYBOARD"),
    (_[(_.APPLICATION = 2)] = "APPLICATION"),
    (_[(_.BROWSER = 3)] = "BROWSER"),
    (_[(_.AUTOFOCUS = 4)] = "AUTOFOCUS"),
    _
  ))(_ || {}),
  _ = {
    1: "vgp_onok",
    2: "vgp_oncancel",
    3: "vgp_onsecondaryaction",
    4: "vgp_onoptions",
    14: "vgp_onmenu",
  };
function _(_, _, _) {
  return _.addEventListener(_, _), () => _(_, _, _);
}
function _(_, _, _) {
  _.removeEventListener(_, _);
}
function _(_, _) {
  return _(_, "vgp_onbuttondown", _);
}
function _(_, _) {
  return _(_, "vgp_onbuttonup", _);
}
function _(_, _) {
  return _(_, "vgp_onok", _(_));
}
function _(_, _) {
  return _(_, "vgp_oncancel", _(_));
}
function _(_, _) {
  return _(_, "vgp_onsecondaryaction", _(_));
}
function _(_, _) {
  return _(_, "vgp_onoptions", _(_));
}
function _(_, _) {
  return _(_, "vgp_onmenu", _(_));
}
function _(_, _) {
  return _(_, "vgp_ondirection", _(_));
}
function _(_, _) {
  return _(_, "vgp_onfocus", _);
}
function _(_, _) {
  return _(_, "vgp_onblur", _);
}
function _(_, _, _) {
  let _ = _;
  if (!_ || !_.ownerDocument || !_.ownerDocument.defaultView) return !0;
  let _ = new _.ownerDocument.defaultView.CustomEvent(_, {
    bubbles: !0,
    cancelable: !0,
    detail: _,
  });
  return _.dispatchEvent(_);
}
function _(_) {
  let _ = [9, 10, 11, 12],
    _ = !0,
    _ = !1,
    _ = _[_.detail.button];
  return (
    _
      ? ((_ = !0), (_ = _(_.target, _, _.detail)))
      : _.indexOf(_.detail.button) !== -1 &&
        ((_ = !0), (_ = _(_.target, "vgp_ondirection", _.detail))),
    {
      bUnhandled: _,
      bHadLogicalEventMapping: _,
    }
  );
}
function _(_) {
  return (_) => {
    _(_) !== !1 && (_.stopPropagation(), _.preventDefault());
  };
}
function _(_) {
  let {
      onOKActionDescription: _,
      onCancelActionDescription: _,
      onSecondaryActionDescription: _,
      onOptionsActionDescription: _,
      onMenuActionDescription: _,
      actionDescriptionMap: _,
    } = _,
    _ = {
      ..._,
    };
  return (
    _ !== void 0 && (_[1] = _),
    _ !== void 0 && (_[2] = _),
    _ !== void 0 && (_[3] = _),
    _ !== void 0 && (_[4] = _),
    _ !== void 0 && (_[14] = _),
    _
  );
}
var _ = _(_(), 1);
function _() {
  let [, _] = _.useState(0);
  return _.useCallback(() => _((_) => _ + 1), []);
}
function _(_, _) {
  _.useLayoutEffect(() => {
    if (!_ || !_) return;
    let _ = _.Register(_);
    return () => _.Unregister();
  }, [_, _]);
}
function _(_) {
  return _;
}
function _() {}
function _(_) {
  return _.useSyncExternalStore(
    _ ? _.SyncStore : _,
    _ ? _.GetValue : _,
    _ ? _.GetValue : _,
  );
}
function _(_) {
  let _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _.current = _;
    }),
    _.current
  );
}
function _(_, _) {
  let [_, _] = _.useState(_);
  return (
    _.useEffect(() => {
      if (_) {
        _(!0);
        return;
      } else {
        let _ = window.setTimeout(() => _(!1), _);
        return () => window.clearTimeout(_);
      }
    }, [_, _]),
    _
  );
}
function _(_, _) {
  return _(_, _) || _;
}
function _(_ = !1) {
  let [_, _] = _.useState(_),
    _ = _.useCallback(() => _(!0), []),
    _ = _.useCallback(() => _(!1), []);
  return [_, _, _];
}
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || "",
      _ = _(_, ..._),
      _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
        ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
        : _;
    _.push(_);
  }
  return _.push(_.slice(_)), _.createElement(_.Fragment, null, ..._);
}
function _(_) {
  return !!(
    _.props &&
    typeof _.props == "object" &&
    "children" in _.props &&
    _.props.children
  );
}
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
function _(_, _) {
  return _ ? typeof _.SteamClient == "object" && _ in _.SteamClient : !1;
}
function _(_, _) {
  if (!_) return !1;
  let [_, _] = _.split(".", 2);
  return _ && _ && _(_, _) && _ in _.SteamClient[_];
}
function _(_) {
  return _(window, _);
}
function _(_) {
  return _ != null && _.focus !== void 0;
}
function _(_, _) {
  let _ = _;
  for (; _; ) {
    if (
      (_.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (_ = _.parentNode.host),
      _ == _)
    )
      return !0;
    _ = _.parentElement;
  }
  return !1;
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function _(_, _) {
  return {
    top: _.screenTop + _.top,
    bottom: _.screenTop + _.bottom,
    left: _.screenLeft + _.left,
    right: _.screenLeft + _.right,
  };
}
function _(_) {
  let _ = 1,
    _ = _;
  for (; _ != null && _.tagName != "HTML"; ) {
    let _ = getComputedStyle(_);
    if (_.zoom) {
      let _ = Number.parseFloat(_.zoom);
      isNaN(_) || (_ *= _);
    }
    _ = _.parentElement;
  }
  return _;
}
function _(_) {
  let _;
  return (
    _ && _(_.currentTarget) && (_ = _.currentTarget.ownerDocument.defaultView),
    _
  );
}
function _(_) {
  let _;
  return _ && (_ = _.ownerDocument.defaultView), _;
}
function _(_) {
  return _.nodeName === "INPUT";
}
function _(_, _) {
  switch (_) {
    case "TEXTAREA":
      return !0;
    case "INPUT":
      switch (_) {
        case "date":
        case "datetime-local":
        case "datetime":
        case "email":
        case "month":
        case "number":
        case "password":
        case "search":
        case "tel":
        case "text":
        case "time":
        case "url":
        case "week":
          return !0;
        default:
          return !1;
      }
    default:
      return !1;
  }
}
function _(_, _) {
  let _ = _?.parentElement;
  for (; _; ) {
    if (_(_)) {
      if (!_ || _ == "x") {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowX == "scroll" ||
          _.overflowX == "auto" ||
          _.position == "fixed"
        )
          break;
      }
      if (!_ || _ == "y") {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowY == "scroll" ||
          _.overflowY == "auto" ||
          _.position == "fixed"
        )
          break;
      }
    }
    _ = _.parentElement;
  }
  return _(_) ? _ : null;
}
function _(_, _) {
  let _ = _;
  for (; _; ) {
    if (_(_)) return _;
    _ = _.parentElement;
  }
}
function _() {
  return _(document);
}
function _(_) {
  let _ = {};
  return (
    _.querySelectorAll('link[rel="stylesheet"]').forEach((_) => {
      _[_.href] = _;
    }),
    _
  );
}
function _(_, _) {
  _(_.document, _, !0);
}
function _(_, _, _) {
  let _ = Object.assign({}, _),
    _ = _.getElementsByTagName("head")[0],
    _ = _.getElementsByTagName("link"),
    _ = _.length;
  for (let _ = 0; _ < _; ++_) {
    let _ = _[_];
    _[_.href] ? delete _[_.href] : _ && _.parentNode?.removeChild(_);
  }
  let _ = [];
  for (let _ in _) {
    let _ = _[_],
      _ = _.createElement("link");
    for (let _ = 0; _ < _.attributes.length; _++) {
      let _ = _.attributes.item(_);
      _.setAttribute(_.name, _.value);
    }
    _.push(_);
  }
  return _.prepend(..._), _;
}
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = class {
  m_sName;
  m_fnIdGenerator = void 0;
  constructor(_, _) {
    (this.m_sName = _), (this.m_fnIdGenerator = _), _.Get().RegisterLogName(_);
  }
  Debug(..._) {
    this.Log(0, ..._);
  }
  Info(..._) {
    this.Log(1, ..._);
  }
  Warning(..._) {
    this.Log(2, ..._);
  }
  Error(..._) {
    this.Log(3, ..._);
  }
  Assert(_, ..._) {
    _ || this.Log(3, "Assertion failed:", ..._);
  }
  IsDebugEnabled() {
    return _.Get().IsDebugLogEnabled(this.m_sName);
  }
  Log(_, ..._) {
    let _ = _.Get().IsDebugLogEnabled(this.m_sName);
    if (_ == 0 && !_) return;
    let _ = this.m_sName,
      _ = this.m_fnIdGenerator?.() ?? null;
    _ != null && (_ += " (" + _ + ")");
    let _ = _.Get().IncludeBacktraceInLog;
    _(_, _, _, _, this.m_sName, ..._);
  }
};
_([_], _.prototype, "Debug", 1),
  _([_], _.prototype, "Info", 1),
  _([_], _.prototype, "Warning", 1),
  _([_], _.prototype, "Error", 1),
  _([_], _.prototype, "Assert", 1);
var _ = class _ {
  static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
  static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_SettingsChangedCallback = new _();
  m_bLoading = !0;
  constructor() {
    this.LoadSettings();
  }
  LogAsLogManager(..._) {
    _(1, !0, this.IncludeBacktraceInLog, "LogManager", "LogManager", ..._);
  }
  async LoadSettings() {
    let _ = (_) => {
      try {
        let _ = localStorage.getItem(_);
        return _ ? JSON.parse(_) : void 0;
      } catch {
        return;
      }
    };
    this.m_bIncludeBacktraceInLog = !!_(_.k_IncludeBacktraceInLog_StorageKey);
    let _ = _(_.k_EnabledLogNames_StorageKey);
    if (Array.isArray(_)) {
      this.m_setEnabledDebugLogs = new Set(_);
      for (let _ of _) this.m_setKnownDebugLogs.add(_);
      this.LogAsLogManager(
        "Loaded debug enabled log names. Will print log messages for:",
        Array.from(this.m_setEnabledDebugLogs),
      );
    }
    (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
  }
  async SaveSettings() {
    localStorage.setItem(
      _.k_EnabledLogNames_StorageKey,
      JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
    ),
      localStorage.setItem(
        _.k_IncludeBacktraceInLog_StorageKey,
        JSON.stringify(this.m_bIncludeBacktraceInLog),
      ),
      this.LogAsLogManager(
        "Saved enabled debug log names. Will print log messages for:",
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  PrintEnabledLogs(..._) {
    _ &&
      _.length > 0 &&
      console.warn(
        `Use DebugLogEnable( '${_.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
      ),
      this.LogAsLogManager(
        "Will print log messages for:",
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  static Get() {
    return (
      window.g_LogManager == null && (window.g_LogManager = new _()),
      window.g_LogManager
    );
  }
  get Loading() {
    return this.m_bLoading;
  }
  get LogNames() {
    return this.m_setKnownDebugLogs.values();
  }
  RegisterLogName(_) {
    this.m_setKnownDebugLogs.add(_);
  }
  IsLogName(_) {
    return this.m_setKnownDebugLogs.has(_);
  }
  IsDebugLogEnabled(_) {
    return this.m_setEnabledDebugLogs.has(_);
  }
  async ToggleDebugLogEnabled(_) {
    this.SetDebugLogEnabled(_, !this.IsDebugLogEnabled(_));
  }
  async SetDebugLogEnabled(_, _) {
    if (!this.IsLogName(_)) {
      console.warn(`No log named "${_}", available logs:`, this.GetLogNames());
      return;
    }
    _
      ? this.m_setEnabledDebugLogs.add(_)
      : this.m_setEnabledDebugLogs.delete(_),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  async SetDebugLogsEnabled(_, ..._) {
    _.forEach((_) => this.SetDebugLogEnabled(_, _));
  }
  async SetAllDebugLogsEnabled(_) {
    (this.m_setEnabledDebugLogs = _
      ? new Set(this.m_setKnownDebugLogs)
      : new Set()),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  RegisterForSettingsChanges(_) {
    return this.m_SettingsChangedCallback.Register(_);
  }
  get IncludeBacktraceInLog() {
    return this.m_bIncludeBacktraceInLog;
  }
  async SetIncludeBacktraceInLog(_) {
    (this.m_bIncludeBacktraceInLog = _),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  GetLogNames() {
    return Array.from(this.LogNames).sort();
  }
};
function _(_) {
  let _ = 0;
  for (let _ = 0; _ < _.length; _++) _ = _.charCodeAt(_) + ((_ << 5) - _);
  return [(_ >> 0) & 255, (_ >> 8) & 255, (_ >> 16) & 255];
}
function _(_) {
  return (_[0] * 299 + _[1] * 587 + _[2] * 114) / 1e3 >= 128;
}
function _(_) {
  switch (_) {
    case 0:
      return String.fromCodePoint(128027);
    case 1:
      return String.fromCodePoint(8505);
    case 2:
      return String.fromCodePoint(9888);
    case 3:
      return String.fromCodePoint(128165);
  }
}
function _(_, _, _, _, _, ..._) {
  let _ = _(_).map((_, _) =>
      Math.round(
        Math.max(0, Math.min(255, ((_ / 255 - 0.5) * 0.8 + 0.15) * 255)),
      ),
    ),
    _ = _(_),
    _ = _;
  _ && (_ = _(_) + " " + _);
  let _ = _.length >= 1 && typeof _[0] == "string" && _[0].includes("%c"),
    _ = _ && _.shift(),
    _;
  if (
    (_
      ? (_ = [
          `%c${_}%c:${_ ? " %c" + _ : ""}`,
          `color: ${_ ? "black" : "white"}; background: rgb(${_.join(",")}); padding: 0 1ch; border-radius: 3px;`,
          "color: transparent; margin-right: -1ch",
          ...(_ ? [""] : []),
          ..._,
        ])
      : (_ = _),
    _)
  )
    console.groupCollapsed(..._),
      console.trace("Callstack"),
      console.groupEnd();
  else
    switch (_) {
      case 0:
      case 1:
        console.log(..._);
        break;
      case 2:
        console.warn(..._);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ..._) : console.error(..._);
        break;
    }
}
window.DebugLogEnable = (..._) => _.Get().SetDebugLogsEnabled(!0, ..._);
window.DebugLogDisable = (..._) => _.Get().SetDebugLogsEnabled(!1, ..._);
window.DebugLogEnableAll = () => _.Get().SetAllDebugLogsEnabled(!0);
window.DebugLogDisableAll = () => _.Get().SetAllDebugLogsEnabled(!1);
window.DebugLogEnableBacktrace = () => _.Get().SetIncludeBacktraceInLog(!0);
window.DebugLogDisableBacktrace = () => _.Get().SetIncludeBacktraceInLog(!1);
window.DebugLogNames = () => _.Get().GetLogNames();
window.DebugLogEnabled = (..._) => _.Get().PrintEnabledLogs(..._);
window.EnableSteamConsole = (_ = !0) =>
  _.Get().SetDebugLogEnabled("SteamClient", _);
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
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _.createContext(void 0);
function _(_) {
  let { controller: _ } = _;
  return (
    _.useEffect(() => {
      _.Init();
    }, [_]),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return _.useContext(_);
}
function _() {
  return _(_()?.GetShowDebugFocusRing()) ?? !1;
}
function _(_) {
  let _ = _();
  _.useEffect(() => {
    if (_) return _.RegisterInputSource(_);
  }, [_, _]);
}
var _ = {};
_(_, {
  k_eControllerStyle_ArcadeStick: () => _,
  k_eControllerStyle_Gamepad: () => _,
  k_eControllerStyle_Gamepad_8BitDo_Pro: () => _,
  k_eControllerStyle_Gamepad_8BitDo_SN30: () => _,
  k_eControllerStyle_Gamepad_8BitDo_Ultimate: () => _,
  k_eControllerStyle_Gamepad_FlyDigi_Apex: () => _,
  k_eControllerStyle_Gamepad_FlyDigi_Vader: () => _,
  k_eControllerStyle_Gamepad_GameCube: () => _,
  k_eControllerStyle_Handheld: () => _,
  k_eControllerStyle_Unknown: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3,
  _ = 4,
  _ = 5,
  _ = 6,
  _ = 7,
  _ = 50,
  _ = 100;
var _ = _(_(), 1);
var _ = class {
    m_transport = null;
    m_registry = null;
    SetDefaultTransport(_) {
      this.m_transport != null &&
        console.error(
          "Multiple attempts to set a default WebUI transport: overriding previous",
        ),
        (this.m_transport = _);
    }
    GetDefaultTransport() {
      return this.m_transport;
    }
    SetDefaultHandlerRegistry(_) {
      this.m_registry != null &&
        console.error(
          "Multiple attempts to set a default WebUI message handler registry: overriding previous",
        ),
        (this.m_registry = _);
    }
    GetDefaultHandlerRegistry() {
      return this.m_registry;
    }
  },
  _ = new _();
function _() {
  return _;
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dpad_up: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              dpad_down: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              dpad_left: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              dpad_right: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              button_south: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              button_east: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              button_west: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              button_north: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              button_back_view: {
                _: 10,
                _: _.readBool,
                _: _.writeBool,
              },
              button_start_options: {
                _: 11,
                _: _.readBool,
                _: _.writeBool,
              },
              button_steam: {
                _: 12,
                _: _.readBool,
                _: _.writeBool,
              },
              button_quick_access: {
                _: 13,
                _: _.readBool,
                _: _.writeBool,
              },
              button_mute_capture: {
                _: 14,
                _: _.readBool,
                _: _.writeBool,
              },
              left_stick_click: {
                _: 15,
                _: _.readBool,
                _: _.writeBool,
              },
              left_stick_touch: {
                _: 16,
                _: _.readBool,
                _: _.writeBool,
              },
              left_stick_deflect: {
                _: 17,
                _: _.readBool,
                _: _.writeBool,
              },
              right_stick_click: {
                _: 18,
                _: _.readBool,
                _: _.writeBool,
              },
              right_stick_touch: {
                _: 19,
                _: _.readBool,
                _: _.writeBool,
              },
              right_stick_deflect: {
                _: 20,
                _: _.readBool,
                _: _.writeBool,
              },
              center_trackpad_touch: {
                _: 21,
                _: _.readBool,
                _: _.writeBool,
              },
              center_trackpad_click: {
                _: 22,
                _: _.readBool,
                _: _.writeBool,
              },
              left_trackpad_touch: {
                _: 23,
                _: _.readBool,
                _: _.writeBool,
              },
              left_trackpad_click: {
                _: 24,
                _: _.readBool,
                _: _.writeBool,
              },
              right_trackpad_touch: {
                _: 25,
                _: _.readBool,
                _: _.writeBool,
              },
              right_trackpad_click: {
                _: 26,
                _: _.readBool,
                _: _.writeBool,
              },
              left_bumper: {
                _: 27,
                _: _.readBool,
                _: _.writeBool,
              },
              left_trigger: {
                _: 28,
                _: _.readBool,
                _: _.writeBool,
              },
              _: {
                _: 29,
                _: _.readBool,
                _: _.writeBool,
              },
              _: {
                _: 30,
                _: _.readBool,
                _: _.writeBool,
              },
              left_aux: {
                _: 31,
                _: _.readBool,
                _: _.writeBool,
              },
              right_bumper: {
                _: 32,
                _: _.readBool,
                _: _.writeBool,
              },
              right_trigger: {
                _: 33,
                _: _.readBool,
                _: _.writeBool,
              },
              _: {
                _: 34,
                _: _.readBool,
                _: _.writeBool,
              },
              _: {
                _: 35,
                _: _.readBool,
                _: _.writeBool,
              },
              right_aux: {
                _: 36,
                _: _.readBool,
                _: _.writeBool,
              },
              button_state_bits: {
                _: 37,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerButtonStateChanged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              _: {
                _: 1,
                _: _.readFloat,
                _: _.writeFloat,
              },
              _: {
                _: 2,
                _: _.readFloat,
                _: _.writeFloat,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "ControllerVector2";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              _: {
                _: 1,
                _: _.readFloat,
                _: _.writeFloat,
              },
              _: {
                _: 2,
                _: _.readFloat,
                _: _.writeFloat,
              },
              _: {
                _: 3,
                _: _.readFloat,
                _: _.writeFloat,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "ControllerVector3";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              _: {
                _: 1,
                _: _.readFloat,
                _: _.writeFloat,
              },
              _: {
                _: 2,
                _: _.readFloat,
                _: _.writeFloat,
              },
              _: {
                _: 3,
                _: _.readFloat,
                _: _.writeFloat,
              },
              _: {
                _: 4,
                _: _.readFloat,
                _: _.writeFloat,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "ControllerQuaternion";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.pitch || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              pitch: {
                _: 1,
                _: _.readFloat,
                _: _.writeFloat,
              },
              yaw: {
                _: 2,
                _: _.readFloat,
                _: _.writeFloat,
              },
              roll: {
                _: 3,
                _: _.readFloat,
                _: _.writeFloat,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "ControllerGyroEulerAngles";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              joystick_left: {
                _: 2,
                _: _,
              },
              joystick_right: {
                _: 3,
                _: _,
              },
              trackpad_left: {
                _: 4,
                _: _,
              },
              trackpad_right: {
                _: 5,
                _: _,
              },
              trackpad_center: {
                _: 6,
                _: _,
              },
              trackpad_pressure_left: {
                _: 7,
                _: _.readFloat,
                _: _.writeFloat,
              },
              trackpad_pressure_right: {
                _: 8,
                _: _.readFloat,
                _: _.writeFloat,
              },
              trigger_left: {
                _: 9,
                _: _.readFloat,
                _: _.writeFloat,
              },
              trigger_right: {
                _: 10,
                _: _.readFloat,
                _: _.writeFloat,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerAxesStateChange_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              imu_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              gyro_raw_quaternion: {
                _: 3,
                _: _,
              },
              gyro_filtered_quaternion: {
                _: 4,
                _: _,
              },
              imu_sensor_delta_time: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              estimated_packet_rate: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GyroQuaternionChanged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              imu_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              gyro_raw_speed: {
                _: 3,
                _: _,
              },
              gyro_filtered_speed: {
                _: 4,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GyroSpeedChanged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              imu_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              acceleromter_1g: {
                _: 4,
                _: _,
              },
              trusted_gravity_1g: {
                _: 5,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GyroAccelerometerChanged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              imu_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              acceleromter_noise: {
                _: 3,
                _: _.readFloat,
                _: _.writeFloat,
              },
              gyroscope_noise: {
                _: 4,
                _: _.readFloat,
                _: _.writeFloat,
              },
              calibration_progress: {
                _: 5,
                _: _.readFloat,
                _: _.writeFloat,
              },
              calibration_state: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              gyroscope_noise_tolerance: {
                _: 7,
                _: _.readFloat,
                _: _.writeFloat,
              },
              accelerometer_noise_tolerance: {
                _: 8,
                _: _.readFloat,
                _: _.writeFloat,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GyroCalibration_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              flow_mode: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerStateFlow_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerStateFlow_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              side: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GyroSoftwareCalibration_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GyroSoftwareCalibration_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dongle_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              slot: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_PairDongleTritonConnected_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_PairDongleTritonConnected_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_SteamDonglesChanged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_UnpairedTritonPluggedIn_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.docked_puck_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              docked_puck_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_UnpairedTritonDocked_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.docked_puck_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              docked_puck_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_TritonUndocked_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerPairingChanged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.docked_puck_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              docked_puck_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              target_dongle_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_PairDongleTritonDocked_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_PairDongleTritonDocked_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_bonds || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              include_bonds: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetDongles_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steam_controller_v1 || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              steam_controller_v1: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              ibex_internal: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              ibex_external: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetDongles_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dongle_serial_number: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              paired_serial_number: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              paired: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              docked: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetDongles_Response_Dongle";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ShouldTritonPairInOobe_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_WaitInitialControllerStateEnumerated_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_WaitInitialControllerStateEnumerated_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.pair_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              pair_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              controller_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dongle_index: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ShouldTritonPairInOobe_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_type: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              controller_style: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              source: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              input: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CControllerOriginKey";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.key || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              key: {
                _: 1,
                _: _,
              },
              localized_string: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CControllerAccessibilityString";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerAccessibilityStrings_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.strings || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              strings: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerAccessibilityStrings_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.idx || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              idx: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerPowerMenu_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerDisconnected_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetTritonPairingInfo_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.slot || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              slot: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              connection_type: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetTritonPairingInfo_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.serial_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              serial_number: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              active: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetTritonPairingInfo_Response_Slot";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              slot_index: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ForgetTritonPairingBond_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ForgetTritonPairingBond_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.dongle_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              dongle_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ForgetDonglePairingBond_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ForgetDonglePairingBond_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.serial_number || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              serial_number: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetControllerName_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_name || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetControllerName_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              enable: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_EnableDockedInput_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_EnableDockedInput_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, [18], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              initialized: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              controller_type: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              controller_style: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              xinput_index: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              is_wireless_steam_dongle: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              vendor_id: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              product_id: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              capabilities: {
                _: 9,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              firmware_version: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              firmware_build_time: {
                _: 11,
                _: _.readString,
                _: _.writeString,
              },
              serial_number: {
                _: 12,
                _: _.readString,
                _: _.writeString,
              },
              cpu_id: {
                _: 13,
                _: _.readString,
                _: _.writeString,
              },
              name: {
                _: 14,
                _: _.readString,
                _: _.writeString,
              },
              is_remote_device: {
                _: 15,
                _: _.readBool,
                _: _.writeBool,
              },
              is_bluetooth: {
                _: 16,
                _: _.readBool,
                _: _.writeBool,
              },
              has_touchscreen: {
                _: 17,
                _: _.readBool,
                _: _.writeBool,
              },
              mac_addr: {
                _: 18,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              battery_level: {
                _: 19,
                _: _.readUint32,
                _: _.writeUint32,
              },
              is_charging: {
                _: 20,
                _: _.readBool,
                _: _.writeBool,
              },
              led_brightness: {
                _: 21,
                _: _.readFloat,
                _: _.writeFloat,
              },
              led_saturation: {
                _: 22,
                _: _.readFloat,
                _: _.writeFloat,
              },
              turn_on_sound: {
                _: 23,
                _: _.readInt32,
                _: _.writeInt32,
              },
              turn_off_sound: {
                _: 24,
                _: _.readInt32,
                _: _.writeInt32,
              },
              led_red: {
                _: 25,
                _: _.readInt32,
                _: _.writeInt32,
              },
              led_green: {
                _: 26,
                _: _.readInt32,
                _: _.writeInt32,
              },
              led_blue: {
                _: 27,
                _: _.readInt32,
                _: _.writeInt32,
              },
              deadzone_left_stick: {
                _: 28,
                _: _.readInt32,
                _: _.writeInt32,
              },
              deadzone_right_stick: {
                _: 29,
                _: _.readInt32,
                _: _.writeInt32,
              },
              haptics_enabled: {
                _: 30,
                _: _.readBool,
                _: _.writeBool,
              },
              gyro_sw_antidrift_enabled: {
                _: 31,
                _: _.readBool,
                _: _.writeBool,
              },
              gyro_one_euro_filter_enabled: {
                _: 32,
                _: _.readBool,
                _: _.writeBool,
              },
              haptic_strength_left: {
                _: 33,
                _: _.readInt32,
                _: _.writeInt32,
              },
              haptic_strength_right: {
                _: 34,
                _: _.readInt32,
                _: _.writeInt32,
              },
              pad_pressure_curve_left: {
                _: 35,
                _: _.readFloat,
                _: _.writeFloat,
              },
              pad_pressure_curve_right: {
                _: 36,
                _: _.readFloat,
                _: _.writeFloat,
              },
              left_stick_touch_disable_lpad: {
                _: 37,
                _: _.readBool,
                _: _.writeBool,
              },
              right_stick_touch_disable_rpad: {
                _: 38,
                _: _.readBool,
                _: _.writeBool,
              },
              player_slot_led_setting: {
                _: 39,
                _: _.readInt32,
                _: _.writeInt32,
              },
              has_nintendo_layout: {
                _: 40,
                _: _.readBool,
                _: _.writeBool,
              },
              has_reversed_layout: {
                _: 41,
                _: _.readBool,
                _: _.writeBool,
              },
              has_universal_face_button_glyphs: {
                _: 42,
                _: _.readBool,
                _: _.writeBool,
              },
              gyro_stationary_tolerance: {
                _: 43,
                _: _.readFloat,
                _: _.writeFloat,
              },
              accel_stationary_tolerance: {
                _: 44,
                _: _.readFloat,
                _: _.writeFloat,
              },
              aux_capsense_threshold: {
                _: 45,
                _: _.readInt32,
                _: _.writeInt32,
              },
              aux_capsense_hysterisis: {
                _: 46,
                _: _.readInt32,
                _: _.writeInt32,
              },
              rumble_setting: {
                _: 47,
                _: _.readInt32,
                _: _.writeInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_RawControllerDetailItem";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerListChanged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetControllerList_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controllers || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controllers: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_GetControllerList_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_FirstSteamControllerConnection_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.period_ms || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              period_ms: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              packets_sent: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              packet_retransmissions: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              interval_max_ms: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rssi_measure: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              reason: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rf_channel: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              backup_channel: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CTritonQosStatus";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              status: {
                _: 2,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_TritonQos_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              enable: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_EnableQosStatus_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(), _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _
        ? {
            $jspbMessageInstance: _,
          }
        : {};
    }
    static fromObject(_) {
      return new _();
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_EnableQosStatus_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.controller_index || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              controller_index: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              battery_level: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              charging: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CSteamInputService_ControllerBatteryState_Notification";
    }
  },
  _;
((_) => {
  _.NotifyButtonStateChangedHandler = {
    name: "SteamInputManager.NotifyButtonStateChanged#1",
    request: _,
  };
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyButtonStateChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyButtonStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyButtonStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyButtonStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyButtonStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyButtonStateChanged = _),
    (_.NotifyAxesStateChangedHandler = {
      name: "SteamInputManager.NotifyAxesStateChanged#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyAxesStateChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyAxesStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyAxesStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyAxesStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyAxesStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyAxesStateChanged = _),
    (_.NotifyGyroQuaternionStateChangedHandler = {
      name: "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyGyroQuaternionStateChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyGyroQuaternionStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyGyroQuaternionStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyGyroQuaternionStateChanged = _),
    (_.NotifyGyroSpeedStateChangedHandler = {
      name: "SteamInputManager.NotifyGyroSpeedStateChanged#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyGyroSpeedStateChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyGyroSpeedStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyGyroSpeedStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyGyroSpeedStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyGyroSpeedStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyGyroSpeedStateChanged = _),
    (_.NotifyGyroAccelerometerStateChangedHandler = {
      name: "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyGyroAccelerometerStateChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyGyroAccelerometerStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyGyroAccelerometerStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyGyroAccelerometerStateChanged = _),
    (_.NotifyGyroCalibrationStateChangedHandler = {
      name: "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyGyroCalibrationStateChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyGyroCalibrationStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyGyroCalibrationStateChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyGyroCalibrationStateChanged = _),
    (_.NotifyControllerPowerMenuHandler = {
      name: "SteamInputManager.NotifyControllerPowerMenu#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyControllerPowerMenuHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyControllerPowerMenu = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerPowerMenu#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyControllerPowerMenu = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerPowerMenu#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyControllerPowerMenu = _),
    (_.NotifyUnpairedTritonPluggedInHandler = {
      name: "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyUnpairedTritonPluggedInHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyUnpairedTritonPluggedIn = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyUnpairedTritonPluggedIn = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyUnpairedTritonPluggedIn = _),
    (_.NotifyUnpairedTritonDockedHandler = {
      name: "SteamInputManager.NotifyUnpairedTritonDocked#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyUnpairedTritonDockedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyUnpairedTritonDocked = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyUnpairedTritonDocked#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyUnpairedTritonDocked = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyUnpairedTritonDocked#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyUnpairedTritonDocked = _),
    (_.NotifyTritonUndockedHandler = {
      name: "SteamInputManager.NotifyTritonUndocked#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyTritonUndockedHandler, _)
    );
  }
  _.RegisterForNotifyTritonUndocked = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyTritonUndocked#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyTritonUndocked = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyTritonUndocked#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyTritonUndocked = _),
    (_.NotifySteamDonglesChangedHandler = {
      name: "SteamInputManager.NotifySteamDonglesChanged#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifySteamDonglesChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifySteamDonglesChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifySteamDonglesChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifySteamDonglesChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifySteamDonglesChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifySteamDonglesChanged = _),
    (_.NotifyControllerDisconnectedHandler = {
      name: "SteamInputManager.NotifyControllerDisconnected#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyControllerDisconnectedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyControllerDisconnected = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerDisconnected#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyControllerDisconnected = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerDisconnected#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyControllerDisconnected = _),
    (_.NotifyControllerPairingChangedHandler = {
      name: "SteamInputManager.NotifyControllerPairingChanged#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyControllerPairingChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyControllerPairingChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerPairingChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyControllerPairingChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerPairingChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyControllerPairingChanged = _),
    (_.NotifyControllerListChangedHandler = {
      name: "SteamInputManager.NotifyControllerListChanged#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyControllerListChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyControllerListChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerListChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyControllerListChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerListChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyControllerListChanged = _),
    (_.NotifyControllerBatteryStateHandler = {
      name: "SteamInputManager.NotifyControllerBatteryState#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyControllerBatteryStateHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyControllerBatteryState = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerBatteryState#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyControllerBatteryState = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyControllerBatteryState#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyControllerBatteryState = _),
    (_.NotifyFirstSteamControllerConnectionHandler = {
      name: "SteamInputManager.NotifyFirstSteamControllerConnection#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(
            _.NotifyFirstSteamControllerConnectionHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyFirstSteamControllerConnection = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyFirstSteamControllerConnection#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyFirstSteamControllerConnection = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamInputManager.NotifyFirstSteamControllerConnection#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyFirstSteamControllerConnection = _),
    (_.NotifyTritonQosHandler = {
      name: "SteamInputManager.NotifyTritonQos#1",
      request: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultHandlerRegistry()),
      _ == null
        ? (console.error(
            "Transport Error: no default registry is available for request",
          ),
          null)
        : _.RegisterServiceNotificationHandler(_.NotifyTritonQosHandler, _)
    );
  }
  _.RegisterForNotifyTritonQos = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification("SteamInputManager.NotifyTritonQos#1", _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.NotifyTritonQos = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification("SteamInputManager.NotifyTritonQos#1", _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgNotifyTritonQos = _),
    (_.StartControllerStateFlowHandler = {
      name: "SteamInputManager.StartControllerStateFlow#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.StartControllerStateFlow#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.StartControllerStateFlow = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.StartControllerStateFlow#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgStartControllerStateFlow = _),
    (_.EndControllerStateFlowHandler = {
      name: "SteamInputManager.EndControllerStateFlow#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.EndControllerStateFlow#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.EndControllerStateFlow = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.EndControllerStateFlow#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgEndControllerStateFlow = _),
    (_.GetControllerAccessibilityStringsHandler = {
      name: "SteamInputManager.GetControllerAccessibilityStrings#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.GetControllerAccessibilityStrings#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.GetControllerAccessibilityStrings = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.GetControllerAccessibilityStrings#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgGetControllerAccessibilityStrings = _),
    (_.StartGyroSoftwareCalibrationHandler = {
      name: "SteamInputManager.StartGyroSoftwareCalibration#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.StartGyroSoftwareCalibration#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.StartGyroSoftwareCalibration = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.StartGyroSoftwareCalibration#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgStartGyroSoftwareCalibration = _),
    (_.CancelGyroSoftwareCalibrationHandler = {
      name: "SteamInputManager.CancelGyroSoftwareCalibration#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.CancelGyroSoftwareCalibration#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.CancelGyroSoftwareCalibration = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.CancelGyroSoftwareCalibration#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgCancelGyroSoftwareCalibration = _),
    (_.PairDongleTritonConnectedHandler = {
      name: "SteamInputManager.PairDongleTritonConnected#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.PairDongleTritonConnected#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.PairDongleTritonConnected = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.PairDongleTritonConnected#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgPairDongleTritonConnected = _),
    (_.PairDongleTritonDockedHandler = {
      name: "SteamInputManager.PairDongleTritonDocked#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.PairDongleTritonDocked#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.PairDongleTritonDocked = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.PairDongleTritonDocked#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgPairDongleTritonDocked = _),
    (_.GetDonglesHandler = {
      name: "SteamInputManager.GetDongles#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.GetDongles#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetDongles = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.GetDongles#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgGetDongles = _),
    (_.ShouldTritonPairInOobeHandler = {
      name: "SteamInputManager.ShouldTritonPairInOobe#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.ShouldTritonPairInOobe#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.ShouldTritonPairInOobe = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.ShouldTritonPairInOobe#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgShouldTritonPairInOobe = _),
    (_.WaitInitialControllerStateEnumeratedHandler = {
      name: "SteamInputManager.WaitInitialControllerStateEnumerated#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.WaitInitialControllerStateEnumerated#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.WaitInitialControllerStateEnumerated = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg(
            "SteamInputManager.WaitInitialControllerStateEnumerated#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgWaitInitialControllerStateEnumerated = _),
    (_.GetTritonPairingInfoHandler = {
      name: "SteamInputManager.GetTritonPairingInfo#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.GetTritonPairingInfo#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetTritonPairingInfo = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.GetTritonPairingInfo#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgGetTritonPairingInfo = _),
    (_.ForgetTritonPairingBondHandler = {
      name: "SteamInputManager.ForgetTritonPairingBond#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.ForgetTritonPairingBond#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.ForgetTritonPairingBond = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.ForgetTritonPairingBond#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgForgetTritonPairingBond = _),
    (_.ForgetDonglePairingBondHandler = {
      name: "SteamInputManager.ForgetDonglePairingBond#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.ForgetDonglePairingBond#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.ForgetDonglePairingBond = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.ForgetDonglePairingBond#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgForgetDonglePairingBond = _),
    (_.GetControllerNameHandler = {
      name: "SteamInputManager.GetControllerName#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.GetControllerName#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetControllerName = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.GetControllerName#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgGetControllerName = _),
    (_.GetControllerListHandler = {
      name: "SteamInputManager.GetControllerList#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.GetControllerList#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetControllerList = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.GetControllerList#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgGetControllerList = _),
    (_.EnableDockedInputHandler = {
      name: "SteamInputManager.EnableDockedInput#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.EnableDockedInput#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.EnableDockedInput = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.EnableDockedInput#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgEnableDockedInput = _),
    (_.EnableQosStatusHandler = {
      name: "SteamInputManager.EnableQosStatus#1",
      request: _,
      response: _,
    });
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.EnableQosStatus#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.EnableQosStatus = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? new Promise((_, _) => {
            console.error(
              "Transport Error: no transport is available for request",
            ),
              _("Transport Error: no transport is available for request");
          })
        : _.SendMsg("SteamInputManager.EnableQosStatus#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.SendMsgEnableQosStatus = _;
})((_ ||= {}));
var _ = 4;
var _ = {
  ATTRIBCAP_DIAMOND_BUTTONS: BigInt(1) << BigInt(0),
  ATTRIBCAP_DPAD_BUTTONS: BigInt(1) << BigInt(1),
  ATTRIBCAP_LEFTSTICK: BigInt(1) << BigInt(2),
  ATTRIBCAP_RIGHTSTICK: BigInt(1) << BigInt(3),
  ATTRIBCAP_THUMBSTICK_BUTTONS: BigInt(1) << BigInt(4),
  ATTRIBCAP_SHOULDER_BUTTONS: BigInt(1) << BigInt(5),
  ATTRIBCAP_ANALOG_TRIGGERS: BigInt(1) << BigInt(6),
  ATTRIBCAP_BACK_BUTTON: BigInt(1) << BigInt(7),
  ATTRIBCAP_START_BUTTON: BigInt(1) << BigInt(8),
  ATTRIBCAP_GUIDE_BUTTON: BigInt(1) << BigInt(9),
  ATTRIBCAP_GRIPS: BigInt(1) << BigInt(10),
  ATTRIBCAP_GYRO: BigInt(1) << BigInt(11),
  ATTRIBCAP_TRACKPAD: BigInt(1) << BigInt(12),
  ATTRIBCAP_HAPTICS: BigInt(1) << BigInt(13),
  ATTRIBCAP_RUMBLE: BigInt(1) << BigInt(14),
  ATTRIBCAP_PRESSURE: BigInt(1) << BigInt(15),
  ATTRIBCAP_LED: BigInt(1) << BigInt(16),
  ATTRIBCAP_LEDCOLOR: BigInt(1) << BigInt(17),
  ATTRIBCAP_UNCALIBRATED_IMU: BigInt(1) << BigInt(18),
  ATTRIBCAP_GENERATED_SERIAL_NUM: BigInt(1) << BigInt(19),
  ATTRIBCAP_SDL_BINDINGS: BigInt(1) << BigInt(20),
  ATTRIBCAP_EMULATED_RUMBLE: BigInt(1) << BigInt(21),
  ATTRIBCAP_UPPERGRIPS: BigInt(1) << BigInt(22),
  ATTRIBCAP_CAPTUREBUTTON: BigInt(1) << BigInt(23),
  ATTRIBCAP_CAPJOYSTICK: BigInt(1) << BigInt(24),
  ATTRIBCAP_CENTER_TRACKPAD: BigInt(1) << BigInt(25),
  ATTRIBCAP_NINTENDO_LAYOUT: BigInt(1) << BigInt(26),
  ATTRIBCAP_CANT_READ_GUIDEBUTTON: BigInt(1) << BigInt(27),
  ATTRIBCAP_GRIPS_FLIPPED: BigInt(1) << BigInt(28),
  ATTRIBCAP_PLAYER_LED: BigInt(1) << BigInt(29),
  ATTRIBCAP_AUX_CAPACITANCE: BigInt(1) << BigInt(30),
  ATTRIBCAP_MISC0_BUTTON: BigInt(1) << BigInt(31),
  ATTRIBCAP_MISC1_BUTTON: BigInt(1) << BigInt(32),
  ATTRIBCAP_MISC2_BUTTON: BigInt(1) << BigInt(33),
  ATTRIBCAP_MISC3_BUTTON: BigInt(1) << BigInt(34),
  ATTRIBCAP_MISC4_BUTTON: BigInt(1) << BigInt(35),
  ATTRIBCAP_MISC5_BUTTON: BigInt(1) << BigInt(36),
  ATTRIBCAP_MISC6_BUTTON: BigInt(1) << BigInt(37),
  ATTRIBCAP_MISC7_BUTTON: BigInt(1) << BigInt(38),
  ATTRIBCAP_GYRO_LEFT: BigInt(1) << BigInt(39),
};
var _ = _(_(), 1),
  _ = _.default.createContext({
    focusNavWindow: null,
    bSupportsFocus: !0,
  });
function _(_) {
  let {
      ownerWindow: _,
      refFocusNavContext: _,
      parentWindowContext: _,
      children: _,
      suppressGamepadInput: _ = !1,
    } = _,
    _ = _(),
    _ = _.default.useContext(_),
    _ = _(),
    [_] = _.default.useState(
      () => _ ?? _.focusNavWindow ?? _.CreateContext(_, _, _),
    ),
    _ = _(_.NavigationSourceSupportsFocus) ?? !1;
  _.default.useEffect(
    () => (
      _.OnMount(_),
      _.document.hasFocus() && _.OnActivate(_),
      () => {
        _.Destroy(_);
      }
    ),
    [_, _],
  ),
    _(_, _);
  let _ = _.default.useMemo(
    () => ({
      focusNavWindow: _,
      bSupportsFocus: _,
    }),
    [_, _],
  );
  return (0, _.jsxs)(_.Provider, {
    value: _,
    children: [
      !_?.BIsVR() &&
        (0, _.jsx)(_, {
          ownerWindow: _,
          context: _,
        }),
      _,
    ],
  });
}
function _(_) {
  let { ownerWindow: _, context: _ } = _,
    _ = _.default.useMemo(() => () => _.OnActivate(_), [_, _]),
    _ = _.default.useMemo(() => () => _.OnDeactivate(_), [_, _]);
  return (
    _(_, "touchstart", _, {
      capture: !0,
    }),
    _(_, "mousedown", _, {
      capture: !0,
    }),
    _(_, "focus", _),
    _(_?.document, "focusin", _),
    _(_, "blur", _),
    null
  );
}
function _() {
  return _.default.useContext(_)?.focusNavWindow;
}
function _(_ = !0) {
  return _.default.useContext(_)?.bSupportsFocus ?? _;
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
var _ = new _("FocusHistory"),
  _ = _.Debug,
  _ = 0,
  _ = 1;
var _ = class _ {
  m_root;
  constructor(_) {
    this.m_root = _;
  }
  static SerializeNavState(_, _ = !0, _ = !0) {
    return {
      root: _.SerializeNavNode(_, _, _),
      bHadFocus: _.BFocusWithin() && _.Tree.BIsActiveWithinContext(),
    };
  }
  static SerializeNavNode(_, _ = !0, _ = !0) {
    let _,
      [_, _] = _.GetChildren();
    _.length &&
      _ != -1 &&
      _ &&
      (_ = _.map((_, _) => _.SerializeNavNode(_, _ == _ || _, _)));
    let _ = {
      rgChildren: _,
    };
    return (
      _.NavKey && (_.sNavKey = _.NavKey), _ != -1 && (_.iActiveChild = _), _
    );
  }
  static RestoreSerializedNavState(_, _, _ = _) {
    let { root: _, bHadFocus: _ } = _;
    _.Tree.Controller.RestoreHistoryTransaction(() => {
      _.RestoreSerializedNavNode(_, _),
        (_ == _ || (_ == _ && _)) && _.BTakeFocus(2);
    });
  }
  static RestoreSerializedNavNode(_, _, _ = 0) {
    let { sNavKey: _, iActiveChild: _ = -1, rgChildren: _ } = _;
    _ && _(_ == _.NavKey, "navkey mismatch"), _.SetActiveChild(_);
    let _ = _.IsDebugEnabled() ? `[${_.Tree._}]${_(_)}` : "";
    if (_ && _.length) {
      let [_] = _.GetChildren();
      if (_ != -1 && _.IsDebugEnabled()) {
        let _ = _.length != _.length;
        _(
          `${_}Restoring node ${_.NavKey} which had active child ${_} of ${_.length}${_ ? `- now ${_.length} children.` : ""}`,
        );
      }
      let _ = new Map();
      _.forEach((_) => {
        _.NavKey && _.set(_.NavKey, _);
      });
      for (let _ of _) {
        if (!_.sNavKey) continue;
        let _ = _.get(_.sNavKey);
        _ && _.RestoreSerializedNavNode(_, _, _ + 1);
      }
      if (_ != -1 && _[_]?.sNavKey) {
        let _ = _.get(_[_].sNavKey);
        _(
          `${_}Restoring node ${_.NavKey}, child with focus: ${_[_].sNavKey} ${_ === void 0 ? "MISSING!!" : ""}`,
        ),
          _ && _.SetActiveChild(_.indexOf(_));
      }
      let _ = 0,
        _ = 0;
      for (; _ < _.length && _ < _.length; ) {
        for (; _ < _.length && _[_].NavKey; ) _++;
        for (; _ < _.length && _[_].sNavKey; ) _++;
        if (_ >= _.length || _ >= _.length) break;
        _.RestoreSerializedNavNode(_[_], _[_], _ + 1), _++, _++;
      }
    }
  }
};
function _(_) {
  return _.SerializeNavState(_, !0, !1);
}
function _(_, _, _ = _) {
  return _.RestoreSerializedNavState(_, _, _);
}
var _ = class extends _ {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(_.SerializeNavState(this.m_root));
    }
    PopState(_ = _) {
      this.m_rgHistory.length &&
        _.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), _);
    }
  },
  _ = class extends _ {
    m_mapHistory = new Map();
    SaveState(_) {
      this.m_mapHistory.set(_, _.SerializeNavState(this.m_root));
    }
    RestoreState(_, _ = _) {
      let _ = this.m_mapHistory.get(_);
      return _
        ? (console.log(`Restoring history for state ${_}`),
          _.RestoreSerializedNavState(this.m_root, _, _),
          !0)
        : !1;
    }
  };
function _(_) {
  if (_ == 0) return "";
  let _ = "";
  for (let _ = 0; _ < _; _++) _ += "*";
  return (_ += " "), _;
}
function _(_) {
  return _ != null && _.focus !== void 0;
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function _(_) {
  let _;
  return _ && (_ = _.ownerDocument.defaultView), _;
}
function _(_, _) {
  let _ = _?.parentElement;
  for (; _; ) {
    if (_(_)) {
      let _ = window.getComputedStyle(_);
      if (
        _.position == "fixed" ||
        _.position == "sticky" ||
        ((!_ || _ == "x") &&
          (_.overflowX == "scroll" || _.overflowX == "auto")) ||
        ((!_ || _ == "y") && (_.overflowY == "scroll" || _.overflowY == "auto"))
      )
        break;
    }
    _ = _.parentElement;
  }
  return _(_) ? _ : null;
}
function _(_, _) {
  if (!("ownerDocument" in _)) return !0;
  let _ = _.ownerDocument.defaultView.getComputedStyle(_),
    _ = _ === "x" ? _.overflowX : _.overflowY;
  return _ === "auto" || _ === "scroll";
}
var _ = {
  _: "y",
  _: "x",
};
function _() {
  return {
    _: 0,
    _: 0,
  };
}
function _(_, _) {
  return _._ * _._ + _._ * _._;
}
function _(_, _) {
  return {
    _: _._ - _._,
    _: _._ - _._,
  };
}
function _(_, _) {
  let _ = _(_, _);
  return Math.sqrt(_(_, _));
}
function _(_, _) {
  return _ == null || _ == null
    ? _ === _
    : typeof _ != "object" ||
        typeof _ != "object" ||
        Object.keys(_).length !== Object.keys(_).length
      ? !1
      : Object.keys(_).every((_) => _.hasOwnProperty(_) && _[_] === _[_]);
}
function _(_, _, _) {
  let _ = [],
    [_, _] = _.GetChildren(),
    _ = _.GetActiveChild(),
    _,
    _ = _ ? _.Element?.getBoundingClientRect() : null;
  if (_) {
    let _ = _(_, _, _);
    if (
      _ &&
      !_.offScreen &&
      ((_ = _(_, _, _.overlap, _)), _ && !_.visibility.offScreen)
    )
      return _;
    _ &&
      _.push({
        child: _,
        visibility: _,
      });
  }
  let _ = _ || _;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    if (_ == _) continue;
    let _ = _(_, _, _ ?? void 0);
    _ &&
      _.push({
        child: _,
        visibility: _,
      });
  }
  _.sort(_);
  let _;
  for (let _ of _) {
    let { child: _, visibility: _ } = _;
    if (
      _.offScreen &&
      _ &&
      (!_.visibility.offScreen ||
        (_.distance && _.distance > _.visibility.distance))
    )
      break;
    let _ = _ == _ ? _ : _(_, _, _.overlap || _, _ ?? void 0);
    _ && (!_ || _(_, _) < 0) && (_ = _);
  }
  return _;
}
function _(_, _, _, _) {
  switch (_.GetFocusable()) {
    case "none":
      return;
    case "children":
      return _(_, _.overlap || _, _);
    case "self":
      return {
        child: _,
        visibility: _,
      };
  }
}
function _(_, _) {
  let _ = _.visibility,
    _ = _.visibility;
  return _.offScreen
    ? _.offScreen
      ? _.distance - _.distance
      : 1
    : _.offScreen
      ? -1
      : _.distance - _.distance;
}
function _(_, _, _) {
  let _ = _.Element?.getBoundingClientRect(),
    _ = _.GetFocusable(),
    _;
  if (_ == "none" || !_ || !_) return null;
  if (_ == "self") {
    if (
      _.top < _.top ||
      _.right > _.right ||
      _.bottom > _.bottom ||
      _.left < _.left
    ) {
      let _ = _.top + _.height / 2,
        _ = _.left + _.width / 2;
      if (_ < _.top)
        return {
          offScreen: "top",
          distance: _.top - _,
        };
      if (_ > _.right)
        return {
          offScreen: "right",
          distance: _ - _.right,
        };
      if (_ > _.bottom)
        return {
          offScreen: "bottom",
          distance: _ - _.bottom,
        };
      if (_ < _.left)
        return {
          offScreen: "left",
          distance: _.left - _,
        };
    }
    _ && (_ = _(_, _));
  } else if (_ == "children") {
    let _ = _.Element;
    if (!_) return null;
    if (_.scrollHeight > _.height || _.scrollWidth > _.width) {
      let _ = _.ownerDocument.defaultView.getComputedStyle(_);
      if (_.overflowX == "visible" || _.overflowY == "visible")
        return {
          overlap: _,
        };
    }
    if (_.bottom < _.top)
      return {
        offScreen: "top",
        distance: _.top - _.bottom,
      };
    if (_.left > _.right)
      return {
        offScreen: "right",
        distance: _.left - _.right,
      };
    if (_.top > _.bottom)
      return {
        offScreen: "bottom",
        distance: _.top - _.bottom,
      };
    if (_.right < _.left)
      return {
        offScreen: "left",
        distance: _.left - _.right,
      };
  }
  return {
    overlap: {
      top: Math.max(_.top, _.top),
      right: Math.min(_.right, _.right),
      bottom: Math.min(_.bottom, _.bottom),
      left: Math.max(_.left, _.left),
    },
    distance: _,
  };
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
          timing: "sine",
          ..._,
        });
    }
    Start() {
      (this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration);
      let _;
      switch (this.m_options.timing) {
        case "linear":
          _ = function (_) {
            return _;
          };
          break;
        case "cubic-in-out":
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
      let _ = performance.now() - this.m_msStart,
        _ = !1;
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
    m_fnCallback;
    constructor(_, _, _) {
      super(_, _), (this.m_fnCallback = _);
    }
    Update(_) {
      this.m_fnCallback(_);
    }
  },
  _ = class extends _ {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(_, _, _) {
      super("ownerDocument" in _ ? _(_) : _, _),
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
var _ = new _("ScrollSnap").Debug,
  _ = !1;
var _ = 1.4,
  _,
  _ = 500;
function _(_, _, _) {
  let _ = _.Element;
  if (!_) return;
  let _ = [
    {
      node: _,
      eScrollType: _.m_Properties?.scrollIntoViewType,
    },
  ];
  for (let _ = _.Parent; _; _ = _.Parent) {
    let _ = _.m_Properties?.scrollIntoViewWhenChildFocused,
      _ = _.m_Properties?.scrollIntoViewType;
    if (_) {
      let _ = {
        node: _,
        eScrollType: _,
      };
      _ === "force" ? (_ = [_]) : _.push(_);
    }
    if (_ !== void 0)
      for (let _ = _.length - 1; _ >= 0 && _[_].eScrollType === void 0; _--)
        _[_].eScrollType = _;
  }
  for (; _.length; ) {
    let { node: _, eScrollType: _ } = _.pop(),
      _ = _.length == 0;
    if (
      (_ === void 0 && (_ ? (_ = 1) : (_ = 0)),
      _?.m_Properties?.fnScrollIntoViewHandler &&
        _.m_Properties.fnScrollIntoViewHandler(_, _, _) !== !1)
    )
      continue;
    let _ = _.m_element,
      _ = _ == 1 || _ == 2 || !_;
    if (!_ && _ !== 0)
      _("No previous element for scrolling, will jump"),
        _
          ? _(_, _, "auto")
          : _?.scrollIntoView({
              behavior: "auto",
              block: "nearest",
              inline: "nearest",
            });
    else {
      let _ = _ ? _(_) : _.getBoundingClientRect(),
        _ = !1,
        _ = Math.max((_.bottom - _.top) * _, 40),
        _ = _ && performance.now() - _ < _;
      (_ ||
        _.bottom < -_ ||
        _.top > _.ownerDocument.defaultView.innerHeight + _) &&
        ((_ = !0),
        _ ||
          _(
            `Disabling smooth scrolling, ${_.bottom} < ${-_}, ${_.top} > ${_.ownerDocument.defaultView.innerHeight} + ${_} `,
          ));
      let _ = _ ? "auto" : "smooth";
      _ && (_ = performance.now()),
        _.Tree.Controller.BIsRestoringHistory() && (_ = "auto"),
        _
          ? _(_, _, _)
          : _.scrollIntoView({
              behavior: _,
              block: "nearest",
            });
    }
  }
}
function _(_) {
  if (!_)
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
  if (!("ownerDocument" in _))
    return {
      left: 0,
      right: _.innerWidth,
      top: 0,
      bottom: _.innerHeight,
    };
  let _ = 0,
    _ = 0,
    _ = _;
  for (; _; ) {
    if ("ownerDocument" in _) {
      let _ = window.getComputedStyle(_);
      if (_.position === "fixed" || _.position === "sticky") break;
    }
    (_ += _.offsetTop), (_ += _.offsetLeft), (_ = _.offsetParent);
  }
  for (_ = _?.parentElement; _; ) {
    let { scrollTop: _, scrollLeft: _ } = _(_);
    if (((_ -= _), (_ -= _), "ownerDocument" in _)) {
      let _ = window.getComputedStyle(_);
      if (_.position === "fixed" || _.position === "sticky") break;
    }
    _ = _.parentElement;
  }
  return {
    left: _,
    top: _,
    right: _ + _.offsetWidth,
    bottom: _ + _.offsetHeight,
  };
}
function _(_, _) {
  return _ == "x"
    ? [_.left, _.right, _.right - _.left]
    : [_.top, _.bottom, _.bottom - _.top];
}
function _(_, _, _, _) {
  let [_, _, _] = _(_, _),
    [_, _, _] = _(_, _),
    [_, _] = _(_, _);
  if (_ < _ && _ > _) return 0;
  let _ = _ - _,
    _ = _ + _,
    _ = _ > _;
  return (_ < _ && !_) || (_ > _ && _)
    ? _ - _
    : (_ < _ && _) || (_ > _ && !_)
      ? _ - _
      : 0;
}
function _(_) {
  return _ == "auto"
    ? 0
    : _.endsWith("px")
      ? parseInt(_)
      : (console.log("Unsupported length", _), 0);
}
function _(_) {
  let _;
  return (
    "ownerDocument" in _
      ? (_ = _.ownerDocument.defaultView.getComputedStyle(_))
      : (_ = _.document.defaultView.getComputedStyle(
          window.document.documentElement,
        )),
    {
      left: _(_.scrollPaddingLeft),
      right: _(_.scrollPaddingRight),
      top: _(_.scrollPaddingTop),
      bottom: _(_.scrollPaddingBottom),
    }
  );
}
function _(_) {
  if (!("ownerDocument" in _))
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
  let _ = _.ownerDocument.defaultView.getComputedStyle(_);
  return {
    left: _(_.scrollMarginLeft),
    right: _(_.scrollMarginRight),
    top: _(_.scrollMarginTop),
    bottom: _(_.scrollMarginBottom),
  };
}
function _(_, _) {
  let _ = _(_);
  return {
    left: Math.max(0, _.left + _.left),
    right: Math.max(0, _.right - _.right),
    top: Math.max(0, _.top + _.top),
    bottom: Math.max(0, _.bottom - _.bottom),
  };
}
function _(_) {
  return _ > -1 && _ < 1;
}
function _(_, _, _, _, _) {
  _(
    "----------------------------------------------------------------------------------",
  ),
    _("Scrolling Into View:", _);
  let _ = [],
    _ = _,
    _ = _(_),
    _ = _ ?? Number.MAX_VALUE;
  for (; _; ) {
    let _ = _(_);
    _ || (_ = _(_));
    let _ = _(_),
      _ = _(_),
      _ = _(_, _),
      _ = _(_),
      _ = {
        element: _,
        left: 0,
        top: 0,
      };
    if (
      (_(
        "Checking scroll div",
        _,
        `scroll y:${_.scrollTop} of ${_.MaxScrollTop()}, x:${_.scrollLeft} of ${_.MaxScrollLeft()}, adjusted =>`,
        _,
        "target => ",
        _,
      ),
      (!_ || _ == "y") &&
        _(_, "y") &&
        ((_.top = _(_, _, _, "y")),
        (_.top = _.Clamp(_.top, -_.scrollTop, _.MaxScrollTop() - _.scrollTop)),
        _ &&
          ((_.top = Math.min(_, Math.abs(_.top)) * (_.top < 0 ? -1 : 1)),
          (_ -= Math.abs(_.top))),
        _(`- checked y: ${_.top}`)),
      (!_ || _ == "x") &&
        _(_, "x") &&
        ((_.left = _(_, _, _, "x")),
        (_.left = _.Clamp(
          _.left,
          -_.scrollLeft,
          _.MaxScrollLeft() - _.scrollLeft,
        )),
        _ &&
          ((_.left = Math.min(_, Math.abs(_.left)) * (_.left < 0 ? -1 : 1)),
          (_ -= Math.abs(_.left))),
        _(`- checked x: ${_.left}`)),
      _.push(_),
      (_ && !_) || !("ownerDocument" in _))
    )
      break;
    let _ = window.getComputedStyle(_);
    if (_.position === "fixed" || _.position === "sticky") break;
    (_ = _),
      (_ = {
        top: _.top - _.top,
        right: _.right - _.left,
        bottom: _.bottom - _.top,
        left: _.left - _.left,
      });
  }
  let _ = !1;
  for (let _ of _) {
    if (_(_.left) && _(_.top)) continue;
    let _ = _(_.element),
      _ = _.scrollTop + _.top,
      _ = _.scrollLeft + _.left;
    (_ = _.Clamp(_, 0, _.MaxScrollLeft())),
      (_ = _.Clamp(_, 0, _.MaxScrollTop())),
      !(_(_.scrollLeft - _) && _(_.scrollTop - _)) &&
        (_.scrollTo({
          left: _,
          top: _,
          behavior: _,
        }),
        _ || (_("Scrolling:"), (_ = !0)),
        _(`- ${_.top},${_.left} => ${_}, ${_}, behavior: ${_}`, _.element));
  }
}
var _ = class {
  m_element;
  m_fnOriginalScrollTo;
  m_window;
  m_scrollTopTarget = void 0;
  m_scrollLeftTarget = void 0;
  m_animation = void 0;
  constructor(_) {
    "ownerDocument" in _
      ? ((this.m_element = _),
        (this.m_fnOriginalScrollTo = _.scrollTo),
        (this.m_element.scrollTo = (_, _) => {
          typeof _ == "number"
            ? this.scrollTo({
                left: _,
                top: _,
              })
            : this.scrollTo(_);
        }))
      : ((this.m_window = _), (this.m_element = _.document.documentElement));
  }
  ResetScrollState() {
    (this.m_scrollTopTarget = void 0),
      (this.m_scrollLeftTarget = void 0),
      this.m_window || (this.m_element.style.scrollSnapType = "");
  }
  scrollTo(_) {
    if (_?.behavior != "smooth")
      this.m_animation &&
        (this.m_animation.Cancel(), (this.m_animation = void 0)),
        this.m_window
          ? this.m_window.scrollTo(_)
          : this.m_fnOriginalScrollTo?.apply(this.m_element, [_]),
        this.ResetScrollState();
    else {
      let _ = _.left ?? this.scrollLeft,
        _ = _.top ?? this.scrollTop,
        _ = "sine";
      if (
        (this.m_animation && (this.m_animation.Cancel(), (_ = "linear")),
        Math.max(
          Math.abs(this.currentScrollTop - _),
          Math.abs(this.currentScrollLeft - _),
        ) > 0)
      ) {
        let _ = {
          msDuration: 200,
          timing: _,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let _ = this.currentScrollLeft,
            _ = this.currentScrollTop;
          this.m_animation = new _(this.m_window, _, (_) => {
            this.m_window?.scrollTo({
              left: _ + (_ - _) * _,
              top: _ + (_ - _) * _,
              behavior: "auto",
            });
          });
        } else
          (this.m_element.style.scrollSnapType = "initial"),
            (this.m_animation = new _(
              this.m_element,
              {
                scrollTop: _,
                scrollLeft: _,
              },
              _,
            ));
        (this.m_scrollLeftTarget = _),
          (this.m_scrollTopTarget = _),
          this.m_animation.Start();
      }
    }
  }
  get clientWidth() {
    return this.m_window
      ? this.m_window.innerWidth
      : this.m_element.clientWidth;
  }
  get clientHeight() {
    return this.m_window
      ? this.m_window.innerHeight
      : this.m_element.clientHeight;
  }
  get currentScrollLeft() {
    return this.m_window ? this.m_window.scrollX : this.m_element.scrollLeft;
  }
  get currentScrollTop() {
    return this.m_window ? this.m_window.scrollY : this.m_element.scrollTop;
  }
  get scrollLeft() {
    return this.m_scrollLeftTarget ?? this.currentScrollLeft;
  }
  get scrollTop() {
    return this.m_scrollTopTarget ?? this.currentScrollTop;
  }
  get scrollWidth() {
    return this.m_element.scrollWidth;
  }
  get scrollHeight() {
    return this.m_element.scrollHeight;
  }
  MaxScrollTop() {
    return this.scrollHeight - this.clientHeight;
  }
  MaxScrollLeft() {
    return this.scrollWidth - this.clientWidth;
  }
};
_([_], _.prototype, "ResetScrollState", 1);
var _ = new WeakMap();
function _(_) {
  let _ = _.get(_);
  return _ || ((_ = new _(_)), _.set(_, _)), _;
}
function _(_) {
  let _ = _.get(_);
  return _
    ? {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      }
    : {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      };
}
var _ = new _("FocusNavigationMovement"),
  _ = _.Debug,
  _ = ((_) => (
    (_[(_.NONE = 0)] = "NONE"),
    (_[(_.COLUMN = 1)] = "COLUMN"),
    (_[(_.ROW = 2)] = "ROW"),
    (_[(_.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
    (_[(_.ROW_REVERSE = 4)] = "ROW_REVERSE"),
    (_[(_.GRID = 5)] = "GRID"),
    (_[(_.GEOMETRIC = 6)] = "GEOMETRIC"),
    _
  ))(_ || {}),
  _ = ((_) => (
    (_[(_.FIRST = 0)] = "FIRST"),
    (_[(_.LAST = 1)] = "LAST"),
    (_[(_.MAINTAIN_X = 2)] = "MAINTAIN_X"),
    (_[(_.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
    (_[(_.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD"),
    _
  ))(_ || {});
var _ = ((_) => (
    (_[(_.INVALID = 0)] = "INVALID"),
    (_[(_.FORWARD = 1)] = "FORWARD"),
    (_[(_.BACKWARD = 2)] = "BACKWARD"),
    _
  ))(_ || {}),
  _ = class _ {
    m_Tree;
    m_Parent;
    m_rgChildren = [];
    m_ActiveChild;
    m_iLastActiveChildIndex = -1;
    m_Properties;
    m_element;
    m_FocusRing;
    m_bChildrenSorted = !1;
    m_bAutoFocusChild = !1;
    m_bMounted = !1;
    m_nDepth;
    m_Focused = _(!1);
    m_FocusWithin = _(!1);
    m_ActionDescriptionsChangedCallbackList = new _();
    m_FocusableIfEmptyAncestor = null;
    m_rgNavigationHandlers = [];
    m_rgFocusHandlers = [];
    constructor(_, _, _) {
      (this.m_Tree = _),
        (this.m_Parent = _),
        (this.m_FocusRing = _),
        (this.m_nDepth = _ ? _.m_nDepth + 1 : 0);
    }
    CreateHandle() {
      return new _(this);
    }
    get Tree() {
      return this.m_Tree;
    }
    get NavKey() {
      if (this.m_Properties?.navKey) return this.m_Properties.navKey;
    }
    get Element() {
      return this.m_element;
    }
    get Parent() {
      return this.m_Parent;
    }
    SetProperties(_) {
      let _ = !_(
          this.m_Properties?.actionDescriptionMap,
          _?.actionDescriptionMap,
        ),
        _ = this.m_Properties?.focusableIfEmpty,
        _ = this.m_Properties?.noFocusRing;
      (this.m_Properties = _ || {}),
        _ && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.focusableIfEmpty && !_
          ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
          : !this.m_Properties.focusableIfEmpty &&
            _ &&
            this.PropagateFocusableIfEmptyAncestorToDescendants(
              this.m_FocusableIfEmptyAncestor,
            ),
        this.m_Properties.noFocusRing && !_ && this.BHasFocus()
          ? this.m_FocusRing?.OnBlur(2, this, this)
          : !this.m_Properties.noFocusRing &&
            _ &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(2, this, this),
        this.m_element && this.RegisterDOMEvents();
    }
    BWantsAutoFocus() {
      return this.m_Properties?.autoFocus || this.m_bAutoFocusChild;
    }
    BWantsPreferredFocus() {
      return this.m_Properties?.preferredFocus;
    }
    BWantsFocusRing() {
      return (
        !this.m_Properties?.noFocusRing ||
        this.m_Tree.Controller.GetShowDebugFocusRing().Value
      );
    }
    GetBoundingRect() {
      return this.m_element?.getBoundingClientRect();
    }
    SetHasFocus(_) {
      this.m_Focused.Set(_);
    }
    SetFocusWithin(_) {
      this.m_FocusWithin.Set(_) &&
        this.m_Properties?.onFocusWithin &&
        this.m_Properties.onFocusWithin(_);
    }
    get SubscribableHasFocus() {
      return this.m_Focused;
    }
    BHasFocus() {
      return this.m_Focused.Value;
    }
    get SubscribableFocusWithin() {
      return this.m_FocusWithin;
    }
    BFocusWithin() {
      return this.m_FocusWithin.Value;
    }
    ForceMeasureFocusRing() {
      this.m_FocusRing?.OnForceMeasureFocusRing();
    }
    get ActionDescriptionChangedCallbackList() {
      return this.m_ActionDescriptionsChangedCallbackList;
    }
    GetActiveActionDescriptions() {
      return this.BuildConsolidatedActionDescriptionMap({});
    }
    BuildConsolidatedActionDescriptionMap(_) {
      let _ = this.m_Properties?.actionDescriptionMap;
      if (_)
        for (let _ in _) {
          let _ = _;
          _[_] === void 0 && (_[_] = _[_]);
        }
      return this.m_Parent
        ? this.m_Parent.BuildConsolidatedActionDescriptionMap(_)
        : this.m_Tree.GetParentEmbeddedNavTree()
          ? this.m_Tree
              .GetParentEmbeddedNavTree()
              .Root.BuildConsolidatedActionDescriptionMap(_)
          : _;
    }
    AddChild(_) {
      this.m_rgChildren.push(_),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.focusableIfEmpty
          ? _.SetFocusableIfEmptyAncestor(this)
          : this.m_FocusableIfEmptyAncestor &&
            _.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
        this.m_bMounted &&
          _.BFocusWithin() &&
          (_(
            !this.m_ActiveChild && this.BFocusWithin(),
            "Invalid focus state in AddChild",
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1));
    }
    OnMount(_) {
      (this.m_element = _),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : _(this == this.m_Tree.Root, "Only root should have no parent"),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents();
      let _ =
          this.m_FocusableIfEmptyAncestor &&
          this.m_FocusableIfEmptyAncestor.BHasFocus(),
        _ = this.m_Properties?.autoFocus || _;
      if (this.BWantsAutoFocus() || _) {
        let _ = -1;
        this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (_ = this.m_rgChildren.findIndex((_) => _.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || _ || _ !== -1) &&
            (this.SetActiveChild(_),
            !this.m_Parent || this.m_Parent.m_element
              ? _
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_FocusableIfEmptyAncestor,
                    {
                      bFocusDescendant: !0,
                    },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0));
      } else if (this.m_rgChildren.length) {
        let _ = this.m_rgChildren.findIndex((_) => _.BFocusWithin());
        _ != -1 &&
          (this.SetActiveChild(_),
          _(
            this.BFocusWithin(),
            "Child has focus, we should be m_bFocusWithin",
          ));
      }
    }
    DEV_SetDebugPropsOnElement() {}
    OnUnmount() {
      this.m_Properties?.focusableIfEmpty &&
        this.PropagateFocusableIfEmptyAncestorToDescendants(
          this.m_FocusableIfEmptyAncestor,
        ),
        (this.m_bMounted = !1);
      let _ = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      (this.BHasFocus() || _) &&
        (_(
          `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? "will transfer to retain focus ancestor" : "will blur"}.`,
        ),
        _ && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_FocusableIfEmptyAncestor
          ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
          : this.BHasFocus() && this.m_Tree.TransferFocus(2, null)),
        this.UnregisterDOMEvents(),
        this.m_Parent
          ? this.m_Parent.RemoveChild(this)
          : _(this == this.m_Tree.Root, "Only root should have no parent");
    }
    RegisterDOMEvents() {
      !this.m_rgNavigationHandlers.length &&
        this.m_element &&
        (this.m_rgChildren.length >= 2 ||
          this.m_Properties?.layout != 0 ||
          this.m_Properties.onMoveUp ||
          this.m_Properties.onMoveRight ||
          this.m_Properties.onMoveDown ||
          this.m_Properties.onMoveLeft) &&
        this.m_rgNavigationHandlers.push(
          _(this.m_element, this.OnNavigationEvent),
        ),
        (this.m_Properties?.focusable ||
          this.m_Properties?.focusableIfEmpty ||
          this.m_rgChildren.length == 0) &&
          (this.m_rgFocusHandlers.length ||
            (this.m_element?.addEventListener("focus", this.OnDOMFocus),
            this.m_element?.addEventListener("blur", this.OnDOMBlur),
            this.m_rgFocusHandlers.push(() => {
              this.m_element?.removeEventListener("focus", this.OnDOMFocus),
                this.m_element?.removeEventListener("blur", this.OnDOMBlur);
            })));
    }
    RemoveChild(_) {
      let _ = this.m_rgChildren.indexOf(_);
      _(_ !== -1, "Child was not found to remove"),
        _ !== -1 &&
          (this.m_ActiveChild == _ && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(_, 1));
    }
    UnregisterDOMEvents() {
      this.m_rgNavigationHandlers.forEach((_) => _()),
        (this.m_rgNavigationHandlers = []),
        this.m_rgFocusHandlers.forEach((_) => _()),
        (this.m_rgFocusHandlers = []);
    }
    GetActiveDescendant() {
      let _ = this.GetActiveChild();
      return _ ? _.GetActiveDescendant() : this;
    }
    IsValidChildIndex(_) {
      return _ >= 0 && _ < this.m_rgChildren.length;
    }
    GetActiveChild() {
      return this.m_ActiveChild
        ? this.m_ActiveChild
        : (this.EnsureChildrenSorted(),
          this.IsValidChildIndex(this.m_iLastActiveChildIndex)
            ? this.m_rgChildren[this.m_iLastActiveChildIndex]
            : null);
    }
    GetActiveChildIndex() {
      if (this.m_ActiveChild) {
        if (
          this.IsValidChildIndex(this.m_iLastActiveChildIndex) &&
          this.m_rgChildren[this.m_iLastActiveChildIndex] == this.m_ActiveChild
        )
          return this.m_iLastActiveChildIndex;
        this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
          this.m_ActiveChild,
        );
      }
      return this.m_iLastActiveChildIndex;
    }
    EnsureChildrenSorted(_ = !1) {
      (!this.m_bChildrenSorted || _) &&
        (this.m_rgChildren.sort((_, _) => {
          let _ = _.m_element,
            _ = _.m_element;
          if (_) {
            if (!_) return -1;
          } else return _ ? 1 : 0;
          let _ = _.compareDocumentPosition(_);
          return _ & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : _ & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 0;
        }),
        this.m_ActiveChild &&
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
            this.m_ActiveChild,
          )),
        (this.m_bChildrenSorted = !0));
    }
    GetLastFocusElement() {
      let _ = this.GetActiveChild();
      return _ ? _.GetLastFocusElement() : this.m_element;
    }
    OnDOMFocus(_) {
      if (!this.BHasFocus()) {
        if (this.GetFocusable() == "children") {
          let _ = this.FindFocusableDescendant();
          if (_ && _ !== this) {
            _(
              "Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.",
              this.m_element,
              _.m_element,
            ),
              this.m_Tree.TransferFocus(3, _);
            return;
          }
        }
        this.m_Tree.TransferFocus(3, this);
      }
    }
    OnDOMBlur(_) {
      this.BHasFocus() &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(3, null);
    }
    UpdateParentActiveChild() {
      this.m_Parent &&
        (this.m_Parent.SetActiveChild(this),
        this.m_Parent.UpdateParentActiveChild());
    }
    GetFocusable() {
      let {
        focusable: _,
        focusableIfEmpty: _,
        childFocusDisabled: _,
        fnCanTakeFocus: _,
      } = this.m_Properties;
      return !this.m_bMounted || (_ && !_(this))
        ? "none"
        : _ || (_ && (_ || this.m_rgChildren.length == 0))
          ? "self"
          : !_ && this.m_rgChildren.length
            ? "children"
            : "none";
    }
    BTakeFocus(_, _) {
      let _ = this.FindFocusableNode(_);
      return this.InternalFocusDescendant(_, _, _);
    }
    FindFocusableNode(_, _) {
      switch (this.GetFocusable()) {
        case "none":
          return null;
        case "self":
          return this;
        case "children":
          return this.FindFocusableDescendant(_, _);
      }
    }
    BChildTakeFocus(_, _) {
      let _ = this.FindFocusableDescendant(_);
      return this.InternalFocusDescendant(_, _, _);
    }
    BFocusFirstChild(_) {
      let _ = this.FindNextFocusableChildInDirection(-1, 1, 0);
      return this.InternalFocusDescendant(_, _);
    }
    BFocusLastChild(_) {
      let _ = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        0,
      );
      return this.InternalFocusDescendant(_, _);
    }
    FindFocusableDescendant(_, _) {
      let _ = _(_),
        { focusableIfEmpty: _, childFocusDisabled: _ } =
          this.m_Properties ?? {};
      if (_) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: _, resetNavOnEntry: _ } =
            this.m_Properties ?? {},
          _ = this.GetActiveChildIndex();
        _ && _ !== void 0 && (_ = -1);
        let _ = this.GetLayout();
        this.IsValidChildIndex(_) ||
          (_ >= this.m_rgChildren.length || _ == 4 || _ == 3 || _ == 1
            ? (_ = this.m_rgChildren.length - 1)
            : (_ = 0));
        let _, _;
        if (
          (_ == 2 ? (_ = "x") : _ == 3 ? (_ = "y") : _ == 6 && _ && (_ = _[_]),
          (_ || _) && _)
        ) {
          let _ = this.m_Tree.GetLastFocusedNode();
          if (_ || (_ && _ == _[_])) {
            let _ =
              _ ||
              this.AdjustRectForLastMovementOnTangentAxis(
                _.GetBoundingRect(),
                _,
              );
            _(
              `Taking focus while preserving ${_ && _[_]} preserved: ${_} movement: ${_}, node:`,
              _,
            ),
              (_ = this.FindClosestFocusableNodeToRect(_, _));
          } else if (_ != _[_]) {
            let _ = this.ComputeRelativeDirection(_, 5),
              _ = _ == 2 ? this.m_rgChildren.length : -1;
            _ = this.FindNextFocusableChildInDirection(_, _, _);
          }
        } else if (_ == 4) {
          let _ = this.m_rgChildren;
          for (; _.length; ) {
            let _ = [];
            for (let _ of _) {
              if (
                ((_ = _.BWantsPreferredFocus()
                  ? _.FindFocusableNode(_)
                  : void 0),
                _)
              )
                return _;
              _.push(..._.m_rgChildren);
            }
            _ = _;
          }
        } else
          _ == 1 && (_ = this.FindNextFocusableChildInDirection(_ + 1, 2, _));
        return (
          _ || (_ = this.FindNextFocusableChildInDirection(_ - 1, 1, _)),
          _ || (_ = this.FindNextFocusableChildInDirection(_, 2, _)),
          _ || (_ ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(_) {
      let _ = this.Element?.ownerDocument?.defaultView ?? window,
        _ = {
          top: 0,
          left: 0,
          right: _.innerWidth,
          bottom: _.innerHeight,
        },
        _ = _(this, _);
      return (
        _(
          `Focusing visible child, best child match is ${_?.child?.Element?.className} - ${JSON.stringify(_?.visibility)}`,
        ),
        _ ? _.child.BTakeFocus(_) : !1
      );
    }
    GetLayout() {
      return this.m_Properties?.layout
        ? this.m_Properties.layout
        : this.m_rgChildren.length < 2
          ? 0
          : _(this.m_element);
    }
    OnNavigationEvent(_) {
      let _ = _.detail.button;
      if (this.BTryInternalNavigation(_, _.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: _,
          onMoveRight: _,
          onMoveDown: _,
          onMoveLeft: _,
        } = this.m_Properties ?? {},
        _ = !1;
      switch (_) {
        case 9:
          _ && (_ = _(_.detail, this));
          break;
        case 12:
          _ && (_ = _(_.detail, this));
          break;
        case 10:
          _ && (_ = _(_.detail, this));
          break;
        case 11:
          _ && (_ = _(_.detail, this));
          break;
      }
      return _;
    }
    InternalFocusDescendant(_, _, _) {
      return _ ? (this.m_Tree.TransferFocus(_, _, _(_)), !0) : !1;
    }
    BTryInternalNavigation(_, _) {
      let _ = this.GetLayout(),
        _ = this.ComputeRelativeDirection(_, _);
      if (
        (_(
          `Handling navigation event ${_[_]} - ${_[_]} - ${_[_]}`,
          this.m_element,
        ),
        _ == 0)
      )
        return !1;
      if (this.m_Properties?.focusable && this.BHasFocus())
        return _("Skipping navigation within focused element"), !1;
      this.EnsureChildrenSorted(!0);
      let _;
      if (_ == 5)
        _ = this.FindNextFocusableChildInGrid(this.GetActiveChildIndex(), _, _);
      else if (_ == 6) _ = this.FindNextFocusableChildGeometric(_, _);
      else {
        let _ = this.GetActiveChildIndex();
        this.IsValidChildIndex(_) ||
          (_ = _ == 1 ? -1 : this.m_rgChildren.length),
          (_ = this.FindNextFocusableChildInDirection(_, _, _));
      }
      if (_) {
        let _ = _(_);
        if (this.GetScrollIntoViewType() == 2) {
          let _ = _.Element?.ownerDocument.defaultView;
          if (_) {
            let _ =
                (_ == "y" ? _.innerHeight : _.innerWidth) / (_ ? 4.5 : 3.33),
              _ = _(_.Element),
              _ = !1;
            if (
              (_ == "y"
                ? _ == 1
                  ? (_ = _.top > _.innerHeight && _.bottom > _.innerHeight + _)
                  : _ == 2 && (_ = _.bottom < 0 && _.top < -_)
                : _ == "x" &&
                  (_ == 1
                    ? (_ = _.left > _.innerWidth && _.right > _.innerWidth + _)
                    : _ == 2 && (_ = _.right < 0 && _.left < -_)),
              _)
            )
              return (
                _(`Element too far away, scrolling ${_} on ${_} axis `),
                _(_.Element, _.Element, "smooth", _, _),
                !0
              );
          }
        }
        return this.m_Tree.TransferFocus(0, _, _), !0;
      } else return !1;
    }
    GetScrollIntoViewType() {
      return this.m_Properties?.scrollIntoViewType
        ? this.m_Properties.scrollIntoViewType
        : this.m_Parent
          ? this.m_Parent.GetScrollIntoViewType()
          : 0;
    }
    GetRelativeDirection(_) {
      return this.ComputeRelativeDirection(_, this.GetLayout());
    }
    ComputeRelativeDirection(_, _) {
      let _ = _ == 4 || _ == 3;
      switch (_) {
        case 2:
        case 4:
          switch (_) {
            case 11:
              return _ ? 1 : 2;
            case 12:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (_) {
            case 9:
              return _ ? 1 : 2;
            case 10:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        case 5:
        case 6:
          switch (_) {
            case 11:
            case 9:
              return _ ? 1 : 2;
            case 12:
            case 10:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        default:
          return 0;
      }
    }
    AdvanceIndex(_, _) {
      return _ + (_ == 1 ? 1 : -1);
    }
    FindNextFocusableChildInDirection(_, _, _) {
      let _ = _ == 1 ? 1 : -1;
      for (let _ = _ + _; _ >= 0 && _ < this.m_rgChildren.length; _ += _) {
        let _ = this.m_rgChildren[_].FindFocusableNode(_);
        if (_) return _;
      }
      return null;
    }
    ScanChildren(_, _, _) {
      let _ = _ == 1 ? 1 : -1;
      for (let _ = _; _ >= 0 && _ < this.m_rgChildren.length; _ += _)
        if (_(this.m_rgChildren[_], _)) return _;
      return -1;
    }
    FindNextFocusableChildInGrid(_, _, _) {
      let _ = _ == 9 || _ == 10,
        _ = this.GetLastFocusElement();
      if (!_ || _ == this.m_element)
        return (
          _(
            !1,
            "No active child for grid navigation",
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            _,
          ),
          this.FindFocusableDescendant(_)
        );
      let _ = this.GetActiveDescendant().GetBoundingRect();
      if (
        ((_ == 9 || _ == 10) &&
          (_ = this.AdjustRectForLastMovementOnTangentAxis(_, "y")),
        _)
      ) {
        let _ = _;
        for (; _ != -1; ) {
          let _ = this.ScanChildren(
            this.AdvanceIndex(_, _),
            _,
            (_) => !_("y", _, _.GetBoundingRect()),
          );
          if (_ != -1) {
            let _ = this.m_rgChildren[_].GetBoundingRect(),
              _ = this.FindClosestChildInNextAxiallyAlignedSet(
                "x",
                _,
                _,
                _,
                _,
                _,
              );
            if (_) return _;
          }
          _ = _;
        }
      } else {
        let _ = _ == 1 ? 1 : -1;
        for (
          let _ = this.AdvanceIndex(_, _);
          _ >= 0 && _ < this.m_rgChildren.length;
          _ += _
        ) {
          let _ = this.m_rgChildren[_];
          if (!_("y", _, _.GetBoundingRect())) return null;
          let _ = _.FindFocusableNode(_);
          if (_) return _;
        }
      }
      return null;
    }
    FindNextFocusableChildGeometric(_, _) {
      let _ = this.GetLastFocusElement();
      if (!_ || _ == this.m_element)
        return (
          _(
            !1,
            "No active child for geometric navigation",
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            _,
          ),
          this.FindFocusableDescendant(_)
        );
      let _ = _(_);
      if (!_) return null;
      let _ = this.AdjustRectForLastMovementOnTangentAxis(
        this.GetActiveDescendant().GetBoundingRect(),
        _,
      );
      return this.FindClosetChildInDirection(_, _, _, _);
    }
    AdjustRectForLastMovementOnTangentAxis(_, _) {
      let _ = this.m_Tree.GetLastFocusedMovementRect(_[_]);
      return _
        ? _ == "x"
          ? {
              left: _.left,
              right: _.right,
              top: _.top,
              bottom: _.bottom,
            }
          : {
              left: _.left,
              right: _.right,
              top: _.top,
              bottom: _.bottom,
            }
        : _;
    }
    FindClosestFocusableNodeToRect(_, _) {
      let _ = _(_),
        _ = _ && _[_],
        _ = [];
      for (let _ of this.m_rgChildren) {
        let _ = _.GetBoundingRect();
        if (_) {
          let _ = _(_, _),
            _ = _ ? _(_, _, _) : 0;
          _.push({
            child: _,
            overlap: _,
            dist: _,
          });
        }
      }
      _.sort((_, _) =>
        _.dist != _.dist ? _.dist - _.dist : _.overlap - _.overlap,
      );
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    FindClosetChildInDirection(_, _, _, _) {
      _(
        `Find child closest to rect, rect is at left ${_.left} top ${_.top} right ${_.right} bottom ${_.bottom}`,
      );
      let _ = _(_, _),
        _ = [];
      for (let _ of this.m_rgChildren) {
        let _ = _.GetBoundingRect();
        if (_) {
          let _ = _(_, _),
            _;
          _ == 1 ? (_ = _.min - _.max) : (_ = _.min - _.max),
            _ >= 0 &&
              _.push({
                child: _,
                overlap: _(_[_], _, _),
                dist: _,
              });
        }
      }
      if (
        (_.sort((_, _) => {
          if (_.overlap) {
            if (!_.overlap) return -1;
          } else if (_.overlap) return 1;
          let _ = _.dist - _.dist;
          return _ || _.overlap - _.overlap;
        }),
        _.IsDebugEnabled())
      ) {
        let _ = _.slice(0, 3).map(
          ({ dist: _, overlap: _, child: _ }) =>
            `[ node: ${_.m_element?.className} dist: ${_} overlap: ${_} ]`,
        );
        _(`Found nodes on axis, top 3 (of ${_.length}: ${_.join(", ")}`);
      }
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(_, _, _, _, _, _) {
      (!_ || _ < 0) && (_ = 0);
      let _ = [];
      if (!_) return null;
      let _ = _(_);
      this.ScanChildren(_, _, (_) => {
        let _ = _.GetBoundingRect();
        return _
          ? _ && !_(_[_], _, _)
            ? !0
            : (_.push({
                child: _,
                overlap: _(_, _, _),
                dist: _(_, _, _),
              }),
              !1)
          : !1;
      }),
        _ == 2 && _.reverse(),
        _.sort((_, _) => {
          let _ = _.overlap - _.overlap;
          return _ != 0 ? _ : _.dist - _.dist;
        });
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    GetChildren() {
      return (
        this.EnsureChildrenSorted(),
        [this.m_rgChildren, this.m_iLastActiveChildIndex]
      );
    }
    SetActiveChild(_) {
      _ instanceof _
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = _),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(_)))
        : (this.IsValidChildIndex(_) &&
            (this.m_ActiveChild = this.m_rgChildren[_]),
          (this.m_iLastActiveChildIndex = _));
    }
    GetDepth() {
      return this.m_nDepth;
    }
    SetFocusableIfEmptyAncestor(_) {
      (this.m_FocusableIfEmptyAncestor = _),
        this.m_Properties?.focusableIfEmpty ||
          this.PropagateFocusableIfEmptyAncestorToDescendants(_);
    }
    PropagateFocusableIfEmptyAncestorToDescendants(_) {
      for (let _ = 0; _ < this.m_rgChildren.length; _++)
        this.m_rgChildren[_].SetFocusableIfEmptyAncestor(_);
    }
    OnFocusedDecendantRemoved(_) {
      this.m_Tree.DeferredFocus.RequestFocus(this, {
        bFocusDescendant: !0,
      });
    }
    SetDOMFocusAndScroll(_, _) {
      this.UpdateParentActiveChild(),
        this.m_Tree.OnChildActivated(_),
        this.m_Tree.BIsActiveFocus()
          ? (_(
              !this.m_Tree.BUseVirtualFocus(),
              "Virtual focus tree should not have browser focus",
            ),
            this.m_element?.focus({
              preventScroll: !0,
            }))
          : this.m_Tree.BUseVirtualFocus() ||
            _(
              `Didn't move focus to element as tree ${this.m_Tree._} is not active focus tree`,
            ),
        this.m_Tree.BIsActive() && _(this, _, _);
    }
  };
_([_], _.prototype, "OnDOMFocus", 1),
  _([_], _.prototype, "OnDOMBlur", 1),
  _([_], _.prototype, "OnNavigationEvent", 1);
var _ = _;
var _ = new _("FocusHistory").Debug;
function _(_) {
  let _ = (_) => {
      _(
        `preserving state and suppressing focus for tree ${_._} for navigation type ${_.navigationType}`,
      );
      let _ = window.navigation.currentEntry?.getState() ?? {};
      if (_.navigationType != "replace") {
        let _ = _(_.Root);
        window.navigation.updateCurrentEntry({
          state: {
            ..._,
            [_(_)]: _,
          },
        });
      } else
        _[_] &&
          _.intercept({
            async handler() {
              let _ = _.destination.getState() ?? {},
                { [_(_)]: _, ..._ } = _;
              window.navigation.updateCurrentEntry({
                state: {
                  ..._,
                  [_]: !0,
                },
              });
            },
            focusReset: "manual",
          });
      _.DeferredFocus.SuppressFocus();
    },
    _ = (_) => {
      _(_) ? _.DeferredFocus.Reset() : _.DeferredFocus.ExecuteQueuedFocus();
    },
    _ = new _();
  return (
    window.navigation.addEventListener("navigate", _),
    _.Push(() => window.navigation.removeEventListener("navigate", _)),
    window.navigation.addEventListener("navigatesuccess", _),
    _.Push(() => window.navigation.removeEventListener("navigatesuccess", _)),
    _(),
    _() ? _(_, _) : _(_),
    _.GetUnregisterFunc()
  );
}
function _(_, _) {
  let _ = _ ?? _(_);
  return (
    _(
      `Restoring focus state for ${_._}, ${_ ? "history available" : "no history"}`,
    ),
    _ ? (_(_.Root, _, _), !0) : !1
  );
}
function _(_) {
  return `FocusHistory_${_._}`;
}
function _(_) {
  return window.navigation.currentEntry?.getState()?.[_(_)];
}
var _;
function _() {
  if (!_) {
    _ = new _();
    let _ = performance.now(),
      _ = (_) => {
        typeof _.data == "string" &&
          _.data == "FocusRestoreReady" &&
          (_(
            `Got FocusRestoreReady event from page after ${performance.now() - _}ms, will record in history.  ${_.CountRegistered()} trees waiting.`,
          ),
          _(),
          _.Dispatch(),
          _.ClearAllCallbacks(),
          window.clearTimeout(_));
      };
    window.addEventListener("message", _);
    let _ = window.setTimeout(() => {
      _.CountRegistered() &&
        (console.warn("Waited 4000ms for FocusRestoreReady, proceeding"),
        _.Dispatch());
    }, 4e3);
  }
}
function _(_, _) {
  if (window.__bFocusRestoreReady) {
    _(_);
    return;
  }
  _(
    `Wait for page enabled, suppressing focus in ${_._} until we hear that page is ready`,
  ),
    _.DeferredFocus.SuppressFocus();
  let _ = _(_),
    _ = () => {
      _(_, _) ? _.DeferredFocus.Reset() : _.DeferredFocus.ExecuteQueuedFocus();
    },
    _ = _.Register(_).Unregister;
  _.Push(_);
}
var _ = "FocusHistoryWaitForPage";
function _() {
  let _ = window.navigation.currentEntry?.getState();
  return _(`Wait for page? ${_?.[_] ? "wait" : "no"} `, _), !!_?.[_];
}
function _() {
  window.navigation.updateCurrentEntry({
    state: {
      ...window.navigation.currentEntry?.getState(),
      [_]: !0,
    },
  });
}
var _ = new _("FocusNavigation").Debug,
  _ = new _("GamepadEvents").Debug,
  _ = class {
    m_Controller;
    m_context;
    m_window;
    m_ParentNavTree;
    m_rgChildNavTrees = [];
    m_ID;
    m_valueIsMounted = _(!1);
    m_bIsEnabled = !1;
    m_tsLastActivated;
    m_Root;
    m_onActivateCallbacks = new _();
    m_onDeactivateCallbacks = new _();
    m_onActiveFocusStateChangedCallbacks = new _();
    m_onChildTreesChanged = new _();
    m_Properties;
    m_onGlobalButtonDown;
    m_rgOnUnhandledButton = [];
    m_rgGlobalButtonHandlers = [];
    constructor(_, _, _, _, _) {
      (this.m_Controller = _),
        (this.m_context = _),
        (this.m_ID = _),
        (this.m_ParentNavTree = _),
        (this.m_Root = new _(this, null, null)),
        this.m_Root.SetProperties({
          layout: 1,
        }),
        (this.m_Properties = _);
    }
    get id() {
      return this.m_ID;
    }
    get Parent() {
      return this.m_ParentNavTree;
    }
    get ChildTrees() {
      return this.m_rgChildNavTrees;
    }
    get Root() {
      return this.m_Root;
    }
    get Controller() {
      return this.m_Controller;
    }
    get WindowContext() {
      return this.m_context;
    }
    get Window() {
      return this.m_window;
    }
    BUseVirtualFocus() {
      return this.m_Properties.virtualFocus ?? !1;
    }
    BIsModal() {
      return this.m_Properties.modal ?? !1;
    }
    FindModalDescendant() {
      for (let _ of this.m_rgChildNavTrees) {
        if (_.BIsModal() && _.BIsEnabled()) return _;
        let _ = _.FindModalDescendant();
        if (_) return _;
      }
    }
    BIsContextActive() {
      return this.m_Controller.BIsInActiveContext(this);
    }
    CreateNode(_, _) {
      return new _(this, _, _);
    }
    RegisterNavigationItem(_, _) {
      return _.OnMount(_), () => _.OnUnmount();
    }
    OnChildActivated(_) {
      this.m_valueIsMounted.Value &&
        this.m_Controller.OnGamepadNavigationTreeFocused(this, _);
    }
    m_lastFocusNode;
    m_bWasActiveForLastFocusChange;
    m_lastFocusNodeXMovement = new _();
    m_lastFocusNodeYMovement = new _();
    GetLastFocusedNode() {
      return this.m_lastFocusNode;
    }
    GetLastFocusedMovementRect(_) {
      return _ == "x"
        ? this.m_lastFocusNodeXMovement.GetRect()
        : _ == "y"
          ? this.m_lastFocusNodeYMovement.GetRect()
          : void 0;
    }
    get OnActivateCallbacks() {
      return this.m_onActivateCallbacks;
    }
    get OnDeactivateCallbacks() {
      return this.m_onDeactivateCallbacks;
    }
    get OnChildTreesChangedCallbacks() {
      return this.m_onChildTreesChanged;
    }
    get OnActiveStateChangedCallbacks() {
      return this.m_onActiveFocusStateChangedCallbacks;
    }
    OnActivate(_) {
      (this.m_tsLastActivated = performance.now()),
        this.m_onActivateCallbacks.Dispatch(this, _),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
      for (let _ = this.m_lastFocusNode; _; _ = _.Parent) _.SetFocusWithin(!0);
    }
    OnDeactivate(_) {
      this.m_onDeactivateCallbacks.Dispatch(this, _),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
        (this.m_bWasActiveForLastFocusChange = !1);
      for (let _ = this.m_lastFocusNode; _; _ = _.Parent) _.SetFocusWithin(!1);
    }
    OnContextActiveStateChanged(_) {
      this.m_onActiveFocusStateChangedCallbacks.Dispatch(_, this);
    }
    IsActiveFocusNavTree() {
      return this.m_Controller.IsActiveFocusNavTree(this);
    }
    TakeFocus(_, _ = !1) {
      let _ = !1;
      _
        ? (_ = this.Root.BVisibleChildTakeFocus(_))
        : this.m_lastFocusNode && (_ = this.m_lastFocusNode.BTakeFocus(_)),
        _ || (_ = this.Root.BTakeFocus(_)),
        _ || this.TransferFocus(_, this.Root);
    }
    Activate(_ = !1) {
      this.m_Controller.OnGamepadNavigationTreeActivated(
        this.FindModalDescendant() ?? this,
        _,
      );
    }
    Deactivate() {
      this.m_Controller.BlurNavTree(this);
    }
    BIsEnabled() {
      return this.m_bIsEnabled;
    }
    get SubscribableIsMounted() {
      return this.m_valueIsMounted;
    }
    BIsActive() {
      return (
        this.m_valueIsMounted.Value &&
        (this.m_Controller.IsActiveNavTree(this) ||
          this.m_Controller.IsActiveFocusNavTree(this))
      );
    }
    BIsActiveFocus() {
      return (
        this.m_valueIsMounted.Value &&
        this.m_Controller.IsActiveFocusNavTree(this)
      );
    }
    BIsActiveWithinContext() {
      return (
        this.m_valueIsMounted.Value &&
        (this.m_context.m_LastActiveNavTree == this ||
          this.m_context.m_LastActiveFocusNavTree == this)
      );
    }
    GetTimeLastActivated() {
      return this.m_tsLastActivated;
    }
    MountNavTree(_) {
      this.m_window = _;
      let _ = this.m_Root.Element;
      (_.__nav_tree = this), _.__nav_wrapper && _.__nav_wrapper.BindTree(this);
      let _ = new _();
      return (
        this.m_valueIsMounted.Set(!0),
        _.Push(() => this.m_valueIsMounted.Set(!1)),
        this.m_ParentNavTree &&
          _.Push(this.m_ParentNavTree.AddChildNavTree(this)),
        this.m_Properties.historyMode == "navigationapi" && _.Push(_(this)),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(
          this.BIsActive(),
          this,
        ),
        _.GetUnregisterFunc()
      );
    }
    SetIsEnabled(_) {
      this.m_bIsEnabled != _ &&
        ((this.m_bIsEnabled = _),
        this.m_bIsEnabled || (this.m_tsLastActivated = void 0));
    }
    GetParentEmbeddedNavTree() {
      return this.m_Properties.bIsEmbeddedInLegacyTree
        ? this.m_ParentNavTree
        : void 0;
    }
    RegisterOnUnhandledButtonCallback(_) {
      return (
        this.m_rgOnUnhandledButton.push(_),
        () => {
          _.FindAndRemove(this.m_rgOnUnhandledButton, _);
        }
      );
    }
    RegisterGlobalButtonHandler(_, _, _) {
      let _ = {
        button: _,
        fnCallback: _,
        description: _,
      };
      return (
        this.m_rgGlobalButtonHandlers.push(_),
        this.UpdateRootActionDescriptionMap(),
        () => {
          _.FindAndRemove(this.m_rgGlobalButtonHandlers, _),
            this.UpdateRootActionDescriptionMap();
        }
      );
    }
    UpdateRootActionDescriptionMap() {
      let _ = {};
      for (let { button: _, description: _ } of this.m_rgGlobalButtonHandlers)
        _ && (_[_] = _);
      this.m_Root.SetProperties({
        ...this.m_Root.m_Properties,
        actionDescriptionMap: _,
      });
    }
    SetOnGlobalButtonDown(_) {
      this.m_onGlobalButtonDown = _;
    }
    OnRootButtonDown(_) {
      for (let _ = this; _; _ = _.Parent)
        if (
          (_.m_onGlobalButtonDown && _.m_onGlobalButtonDown(_), _.cancelBubble)
        )
          return !1;
      return this.HandleButtonDownEventAsLogicalEvent(_);
    }
    TryRootButtonListeners(_) {
      for (let { button: _, fnCallback: _ } of this.m_rgGlobalButtonHandlers)
        if (_ == _.detail.button && _(_) !== !1) return !1;
      for (let _ of this.m_rgOnUnhandledButton) if (_(_) !== !1) return !1;
      return !0;
    }
    HandleButtonDownEventAsLogicalEvent(_) {
      let { bUnhandled: _, bHadLogicalEventMapping: _ } = _(_);
      return (
        _(
          `Logical gamepad Event fired: ${_[_.detail.button]}, had logical event: ${_}, was handled: ${!_}`,
        ),
        _ && (_ = this.TryRootButtonListeners(_)),
        _ && (_ = this.m_Controller.FireUnhandledGamepadEventCallbacks(_)),
        _.stopPropagation(),
        _
      );
    }
    m_DeferredFocus = new _(this);
    get DeferredFocus() {
      return this.m_DeferredFocus;
    }
    AddChildNavTree(_) {
      return (
        this.m_rgChildNavTrees.push(_),
        this.OnChildTreesChangedCallbacks.Dispatch("add", _),
        () => {
          _.FindAndRemove(this.m_rgChildNavTrees, _),
            this.OnChildTreesChangedCallbacks.Dispatch("remove", _);
        }
      );
    }
    TransferFocus(_, _, _) {
      this.m_Controller.BatchedUpdate(() =>
        this.TransferFocusInternal(_, _, _),
      );
    }
    TransferFocusInternal(_, _, _) {
      let _ = this.m_lastFocusNode;
      if (_ == _ && (this.m_bWasActiveForLastFocusChange || !this.BIsActive()))
        return;
      _(
        `Transfer focus in ${this._}, source: ${_ && _[_]}, from/to:`,
        _?.m_element,
        _?.m_element,
      );
      let _ = {
          blurredNode: _,
          focusedNode: _,
          focusSource: _,
        },
        _ = _(_, _);
      if (_) {
        _.SetHasFocus(!1);
        for (let _ = _; _ && _ != _; _ = _.Parent) _.SetFocusWithin(!1);
      }
      if (_) {
        _.SetHasFocus(!0);
        for (let _ = _; _ && _ != _; _ = _.Parent) _.SetFocusWithin(!0);
      }
      let _ = this.m_context.OnFocusChangeStart(_, this, _, _);
      _ && _.SetDOMFocusAndScroll(_, _),
        _ &&
          (_(_.Element, "vgp_onblur", _),
          _.m_FocusRing &&
            (!_ || _.m_FocusRing != _.m_FocusRing) &&
            _.m_FocusRing.OnBlur(_, _, _)),
        _ &&
          (_(_.Element, "vgp_onfocus", _),
          _.m_FocusRing &&
            (_ && _.m_FocusRing == _.m_FocusRing
              ? _.m_FocusRing.OnFocusChange(_, _, _)
              : _.m_FocusRing.OnFocus(_, _, _))),
        (this.m_lastFocusNode = _),
        (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
        _ == "x"
          ? this.m_lastFocusNodeXMovement.SetNode(_?.Element)
          : _ == "y"
            ? this.m_lastFocusNodeYMovement.SetNode(_?.Element)
            : (this.m_lastFocusNodeXMovement.Reset(),
              this.m_lastFocusNodeYMovement.Reset()),
        this.m_context.OnFocusChangeComplete(_);
    }
  };
function _(_, _) {
  if (!_ || !_) return null;
  let _ = _,
    _ = _;
  for (; _.GetDepth() > _.GetDepth() && _.Parent; ) _ = _.Parent;
  for (; _.GetDepth() > _.GetDepth() && _.Parent; ) _ = _.Parent;
  for (; _ != _ && _ && _; ) (_ = _.Parent), (_ = _.Parent);
  return _;
}
var _ = class {
    m_element;
    m_rect;
    SetNode(_) {
      (this.m_element = _),
        (this.m_rect = _ ? _.getBoundingClientRect() : void 0);
    }
    Reset() {
      this.SetNode(void 0);
    }
    GetRect() {
      return this.m_element?.isConnected
        ? this.m_element.getBoundingClientRect()
        : this.m_rect;
    }
  },
  _ = class {
    m_tree;
    m_target;
    m_interval;
    m_schExecuteQueuedFocus = new _();
    m_bSuppressed = !1;
    constructor(_) {
      this.m_tree = _;
    }
    RequestFocus(_, _) {
      if (!_) {
        this.m_target = void 0;
        return;
      }
      (this.m_target = {
        ..._,
        node: _,
      }),
        !this.m_interval &&
          !this.m_bSuppressed &&
          this.m_schExecuteQueuedFocus.Schedule(1, () => {
            (this.m_interval = void 0), this.ExecuteQueuedFocus();
          });
    }
    BHasQueuedFocusNode() {
      return !!this.m_target;
    }
    BIsQueuedFocusNode(_) {
      return this.m_target && this.m_target.node == _;
    }
    SuppressFocus() {
      (this.m_bSuppressed = !0), this.ClearInterval();
    }
    Reset() {
      (this.m_bSuppressed = !1), (this.m_target = void 0), this.ClearInterval();
    }
    ClearInterval() {
      this.m_schExecuteQueuedFocus.Cancel();
    }
    ExecuteQueuedFocus() {
      if (((this.m_bSuppressed = !1), this.m_target)) {
        let { node: _, bFocusDescendant: _ } = this.m_target;
        (this.m_target = void 0),
          _(
            `DeferredFocus in ${this.m_tree._} - focusing ${_ ? "descendant of" : "node"} ${_.NavKey}`,
          ),
          _
            ? _.BChildTakeFocus(4) || this.m_tree.TransferFocus(4, _)
            : _.BTakeFocus(4) || this.m_tree.TakeFocus(4);
      }
    }
  };
var _ = new _("FocusNavigation").Debug,
  _ = class {
    m_rootWindow;
    m_activeWindow;
    m_activeBrowserView;
    m_valueIsActive = _(!1);
    m_controller;
    m_rgGamepadNavigationTrees = [];
    m_LastActiveNavTree;
    m_LastActiveFocusNavTree;
    m_bMounted = !0;
    m_schDeferredActivate = new _();
    m_FocusChangedCallbacks = new _();
    m_NavTreeActivatedOrReactivatedCallbacks = new _();
    m_bIsGamepadInputSuppressed = !1;
    m_bVR = !1;
    constructor(_, _, _, _) {
      (this.m_controller = _),
        (this.m_rootWindow = _),
        (this.m_activeWindow = _),
        (this.m_bIsGamepadInputSuppressed = _),
        (this.m_bVR = _);
    }
    get RootWindow() {
      return this.m_rootWindow;
    }
    get ActiveWindow() {
      return this.m_activeWindow;
    }
    FindNavTreeInFocusedWindow() {
      for (let _ = this.m_rgGamepadNavigationTrees.length - 1; _ >= 0; _--) {
        let _ = this.m_rgGamepadNavigationTrees[_];
        if (_.Window?.document.hasFocus()) return _;
      }
    }
    FindNavTreeInWindow(_, _ = !0) {
      for (let _ = this.m_rgGamepadNavigationTrees.length - 1; _ >= 0; _--) {
        let _ = this.m_rgGamepadNavigationTrees[_];
        if (!(_ && !_.BIsEnabled()) && _.Window == _) return _;
      }
    }
    OnMount(_) {
      _ == this.m_rootWindow && (this.m_bMounted = !0);
    }
    Destroy(_) {
      _ == this.m_rootWindow
        ? (_(`${this.LogName(_)} Destroying context for window`),
          (this.m_bMounted = !1),
          this.m_schDeferredActivate.Cancel(),
          this.SetActive(!1, _),
          this.m_controller.DestroyContext(this))
        : _(`${this.LogName(_)} Child window destroyed`);
    }
    SetActive(_, _, _ = void 0) {
      this.m_controller.BatchedUpdate(() => {
        if (_ && !this.m_controller.BCanActivateContext(this)) {
          _(
            `${this.LogName(_)} Skipping context activation due to CFocusNavWindowContext`,
          );
          return;
        }
        let _ = this.m_valueIsActive.Value != _;
        _
          ? ((this.m_activeWindow = _),
            (this.m_activeBrowserView = _),
            this.m_controller.OnContextActivated(this))
          : ((this.m_activeBrowserView = void 0),
            this.m_controller.OnContextDeactivated(this, !1)),
          this.m_valueIsActive.Set(_),
          _ && this.m_LastActiveFocusNavTree?.OnContextActiveStateChanged(_);
      });
    }
    OnActivate(_) {
      (this.BIsActive() &&
        this.m_activeWindow == _ &&
        this.m_activeBrowserView === void 0) ||
        (_(
          `${this.LogName(_)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
        ),
        this.SetActive(!0, _));
    }
    OnActivateBrowserView(_, _) {
      (this.BIsActive() &&
        this.m_activeWindow == _ &&
        this.m_activeBrowserView == _) ||
        (_(`${this.LogName(_)} Browser View "${_}" activated in context`),
        this.SetActive(!0, _, _));
    }
    OnDeactivate(_) {
      this.m_activeWindow == _
        ? (_(`${this.LogName(_)} Deactivate context for window`),
          this.SetActive(!1, _))
        : _(
            `${this.LogName(_)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
          );
    }
    OnDeactivateBrowserView(_, _) {
      _(`${this.LogName(_)} Browser View "${_}" deactivated in context`),
        this.m_activeBrowserView == _ && this.SetActive(!1, _, _);
    }
    SetGamepadInputSuppressed(_) {
      this.m_bIsGamepadInputSuppressed = _;
    }
    BIsGamepadInputSuppressed() {
      return this.m_bIsGamepadInputSuppressed;
    }
    BIsVR() {
      return this.m_bVR;
    }
    BIsActive() {
      return this.m_valueIsActive.Value;
    }
    get IsActive() {
      return this.m_valueIsActive;
    }
    AddNavTree(_) {
      this.m_rgGamepadNavigationTrees.push(_);
    }
    LogName(_ = void 0) {
      return _ && this.m_rootWindow != _
        ? `(${this.m_rootWindow.name}) > (${_.name})`
        : `(${this.m_rootWindow.name})`;
    }
    FindNavTreeToActivate() {
      for (let _ = this.m_rgGamepadNavigationTrees.length - 1; _ >= 0; _--) {
        let _ = this.m_rgGamepadNavigationTrees[_];
        if (!_.BIsEnabled()) continue;
        return _.FindModalDescendant() ?? _;
      }
    }
    SetActiveNavTree(_, _ = !1) {
      if (_ && this.m_LastActiveNavTree == _) {
        this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(_);
        return;
      }
      let _ = this.m_LastActiveNavTree;
      _ && _.FindAndRemove(this.m_rgGamepadNavigationTrees, _),
        _ || (_ = this.FindNavTreeToActivate());
      let _ = this.m_LastActiveFocusNavTree == _;
      _ && _.FindAndRemove(this.m_rgGamepadNavigationTrees, _),
        (this.m_LastActiveNavTree = _),
        (!_ || !_.BUseVirtualFocus()) && (this.m_LastActiveFocusNavTree = _),
        _(
          `${this.LogName(_?.Window)} Move from nav tree ${_?._} to nav tree ${_?._} ${_ ? "taking focus" : "no focus"}`,
        ),
        _ && this.m_rgGamepadNavigationTrees.push(_),
        _ &&
          (this.m_rgGamepadNavigationTrees.push(_),
          !_ &&
            _ &&
            !_.DeferredFocus.BHasQueuedFocusNode() &&
            _.DeferredFocus.RequestFocus(_.Root),
          this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(_)),
        _ && _ != this.m_LastActiveFocusNavTree && _.OnDeactivate(_),
        _ && !_ && _.OnActivate(_);
    }
    BlurNavTree(_) {
      this.m_LastActiveNavTree == _ && this.SetActiveNavTree(void 0, !0),
        _.FindAndRemove(this.m_rgGamepadNavigationTrees, _),
        this.m_rgGamepadNavigationTrees.unshift(_);
    }
    async UnregisterGamepadNavigationTree(_) {
      _.FindAndRemove(this.m_rgGamepadNavigationTrees, _),
        _(
          `(${this.m_rootWindow.name}) Unregister tree ${_?._} ${this.m_LastActiveFocusNavTree == _ ? "(was active)" : "(inactive)"}`,
        ),
        _.SetIsEnabled(!1),
        this.m_LastActiveNavTree == _ &&
          this.m_bMounted &&
          (await this.m_schDeferredActivate.AsyncSchedule(1, () => {
            (!this.m_LastActiveNavTree || this.m_LastActiveNavTree == _) &&
              this.SetActiveNavTree(void 0, !0);
          }));
    }
    get FocusChangedCallbacks() {
      return this.m_FocusChangedCallbacks;
    }
    get NavTreeActivatedOrReactivatedCallbacks() {
      return this.m_NavTreeActivatedOrReactivatedCallbacks;
    }
    m_iFocusChangeStack = 0;
    m_ActiveFocusChange;
    OnFocusChangeStart(_, _, _, _) {
      return (
        this.m_iFocusChangeStack == 0
          ? (this.m_ActiveFocusChange = {
              source: _,
              from: _ || void 0,
              _: _ || void 0,
            })
          : this.m_ActiveFocusChange &&
            (!this.m_ActiveFocusChange.from &&
              _ &&
              (this.m_ActiveFocusChange.from = _),
            _ && (this.m_ActiveFocusChange._ = _)),
        this.m_iFocusChangeStack++
      );
    }
    OnFocusChangeComplete(_) {
      if (
        (this.m_iFocusChangeStack--,
        _(_ == this.m_iFocusChangeStack, "out of order focus pop"),
        this.m_iFocusChangeStack == 0)
      ) {
        let { source: _, from: _, _: _ } = this.m_ActiveFocusChange ?? {};
        this.m_FocusChangedCallbacks.Dispatch(_, _, _);
      }
    }
    get NavigationSourceGlyphInfo() {
      return this.m_controller.NavigationSourceGlyphInfo;
    }
  };
var _ = new _("FocusNavigation").Debug,
  _ = new _("FocusNavigation").Assert,
  _ = "focus-nav-show-debug-focus-ring";
function _() {
  return sessionStorage.getItem(_) == "shown";
}
function _(_) {
  _ ? sessionStorage.setItem(_, "shown") : sessionStorage.removeItem(_);
}
function _(_, _) {
  return (
    _?.eActivationSourceType === _?.eActivationSourceType &&
    _?.nActiveGamepadIndex === _?.nActiveGamepadIndex &&
    _?.nLastActiveGamepadIndex === _?.nLastActiveGamepadIndex
  );
}
var _ = class {
  m_rgGamepadInputSources = [];
  m_DefaultContext;
  m_rgAllContexts = [];
  m_ActiveContext;
  m_LastActiveContext;
  m_ContextSetChangedCallbacks = new _();
  m_fnCatchAllGamepadInput = null;
  m_UnhandledButtonEventsCallbacks = new _();
  m_navigationSource = _(
    {
      eActivationSourceType: 0,
      nActiveGamepadIndex: -1,
      nLastActiveGamepadIndex: -1,
    },
    _,
  );
  m_navigationSourceSupportsFocus = _(
    this.m_navigationSource,
    (_) => _?.eActivationSourceType === 1 || _?.eActivationSourceType === 2,
  );
  m_bShowDebugFocusRing = _(!1);
  m_glyphInfo = _({
    nControllerType: _,
    nControllerStyle: _.k_eControllerStyle_Handheld,
  });
  m_bRestoringHistory = !1;
  m_fnGamepadEventUpdateBatcher = (_) => _();
  constructor() {
    window.FocusNavController = this;
  }
  Init() {
    this.m_bShowDebugFocusRing.Set(_());
  }
  CreateContext(_, _, _) {
    let _ = new _(this, _, _, _);
    return (
      this.m_rgAllContexts.push(_),
      setTimeout(() => this.m_ContextSetChangedCallbacks.Dispatch(), 0),
      _
    );
  }
  DestroyContext(_) {
    _.FindAndRemove(this.m_rgAllContexts, _),
      this.m_ContextSetChangedCallbacks.Dispatch();
  }
  GetDefaultContext() {
    return (
      this.m_DefaultContext ||
        (this.m_DefaultContext = this.CreateContext(window, !1, !1)),
      this.m_DefaultContext
    );
  }
  GetActiveContext() {
    return this.m_ActiveContext;
  }
  BHasVRGamepadNavigationContext() {
    return this.m_rgAllContexts?.some(
      (_) => _.BIsVR() && !_.BIsGamepadInputSuppressed(),
    );
  }
  FindContextForRootWindow(_) {
    return this.m_rgAllContexts?.find((_) => _.RootWindow == _);
  }
  BCanActivateContext(_) {
    return !(!_ || (this.BHasVRGamepadNavigationContext() && !_.BIsVR()));
  }
  FindAnActiveContext() {
    if (!this.m_ActiveContext && this.m_rgAllContexts.length != 0) {
      console.warn("No active context; finding one");
      for (let _ of this.m_rgAllContexts) {
        let _ = _.FindNavTreeInFocusedWindow();
        if (_ && this.BCanActivateContext(_)) {
          _(
            `${_.LogName(_.Window)} Found a focused window; setting this context as active.`,
          ),
            (this.m_ActiveContext = _),
            this.m_ActiveContext.OnActivate(_.Window);
          break;
        }
      }
    }
    return (
      !this.m_ActiveContext &&
        this.m_LastActiveContext &&
        this.BCanActivateContext(this.m_LastActiveContext) &&
        (_(
          `Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
        ),
        (this.m_ActiveContext = this.m_LastActiveContext),
        this.m_ActiveContext.OnActivate(
          this.m_LastActiveContext.m_LastActiveFocusNavTree?.Window,
        )),
      this.m_ActiveContext
    );
  }
  SetShowDebugFocusRing(_) {
    this.m_bShowDebugFocusRing.Set(_), _(_);
  }
  GetShowDebugFocusRing() {
    return this.m_bShowDebugFocusRing;
  }
  RegisterInputSource(_) {
    let _ = new _();
    return (
      this.m_rgGamepadInputSources.push(_),
      _.PushArrayRemove(this.m_rgGamepadInputSources, _),
      _.Push(_.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister),
      _.Push(_.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
      _.Push(
        _.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
          .Unregister,
      ),
      _.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? !1),
      _.Push(() => _.SetRepeatAllowed()),
      _.GetSourceType() == 1 && this.UpdateSourceToGamepad(),
      _.GetUnregisterFunc()
    );
  }
  UpdateSourceToGamepad(_ = !1) {
    (this.m_navigationSource.Value.eActivationSourceType == 0 || _) &&
      this.m_navigationSource.Set({
        ...this.m_navigationSource.Value,
        eActivationSourceType: 1,
      });
  }
  SetGamepadEventUpdateBatcher(_) {
    this.m_fnGamepadEventUpdateBatcher = _;
  }
  get NavigationSource() {
    return this.m_navigationSource;
  }
  get NavigationSourceSupportsFocus() {
    return this.m_navigationSourceSupportsFocus;
  }
  get NavigationSourceGlyphInfo() {
    return this.m_glyphInfo;
  }
  DispatchVirtualButtonClick(_, _) {
    let _;
    _ && (_ = this.GetActiveContext() ?? this.FindAnActiveContext()),
      this.OnButtonDown(_, 1, -1, void 0, void 0, void 0, _, _, !0),
      this.OnButtonUp(_, 1, -1, void 0, void 0, void 0, _, _, !0);
  }
  DispatchVirtualGamepad(_, _) {
    switch (_) {
      case "vgp_onbuttondown":
        this.OnButtonDown(_.button, _.source, -1, _.is_repeat);
        break;
      case "vgp_onbuttonup":
        this.OnButtonUp(_.button, _.source, -1);
        break;
    }
  }
  BGlobalGamepadButton(_) {
    return _ === 27 || _ === 28 || _ === 2;
  }
  GetEventTarget(_, _, _ = !1) {
    let _ = this.GetActiveContext();
    !_ && _ && (_ = this.FindAnActiveContext());
    let _ = _?.ActiveWindow?.document.activeElement;
    if (_?.m_LastActiveNavTree) {
      if (
        (_ || (_ = this.m_navigationSource?.Value?.eActivationSourceType),
        !_.m_LastActiveNavTree.GetLastFocusedNode() &&
          (_ == 1 || _ == 2) &&
          (_(
            `GetEventTarget: Context ${_.LogName()} tree ${_.m_LastActiveNavTree._} has no focused node, ${_ ? "finding one" : "will not find one"}`,
          ),
          _ && _.m_LastActiveNavTree.TakeFocus(0, !0),
          !this.BGlobalGamepadButton(_)))
      )
        return [void 0, _];
      _.m_LastActiveNavTree.GetLastFocusedNode()
        ? (_ = _.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
        : _(
            `GetEventTarget: Context ${_.LogName()} tree ${_.m_LastActiveNavTree._} still has no focused node - will fall back to document.activeElement`,
          );
    }
    return [_, _];
  }
  ChangeNavigationSource(_, _, _, _) {
    let _ = this.m_navigationSource.Value,
      _ = _.nLastActiveGamepadIndex;
    return (
      _.nActiveGamepadIndex &&
        _.nActiveGamepadIndex >= 0 &&
        (_ = _.nActiveGamepadIndex),
      this.m_navigationSource.Set({
        eActivationSourceType: _,
        nActiveGamepadIndex: _,
        nLastActiveGamepadIndex: _,
      }),
      _ &&
        _ &&
        this.m_glyphInfo.Set({
          nControllerType: _,
          nControllerStyle: _,
        }),
      _ != 3 &&
        _("Browser.HideCursorUntilMouseEvent") &&
        SteamClient.Browser.HideCursorUntilMouseEvent(),
      _.eActivationSourceType != _
    );
  }
  OnButtonActionInternal(_, _, _, _, _, _, _, _, _, _) {
    if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(_)) {
      _ &&
        _(
          "Ignoring button press - gamepad input is suppressed by parent window",
        );
      return;
    }
    _(
      !!_ == !!_,
      "Must set both overrideContext and overrideElement or neither",
    );
    let _ = _,
      _ = _;
    if (
      ((_ == null || _ == null) && ([_, _] = this.GetEventTarget(_, _, _)),
      _?.BIsGamepadInputSuppressed() && !_)
    ) {
      _(
        `Suppressing ${_[_]} input on element ${_?.className} because tree ${_?.m_LastActiveNavTree?._} has it disabled`,
      );
      return;
    }
    this.ChangeNavigationSource(_, _, _, _),
      _ && _(`Firing ${_[_]} in tree ${_?.m_LastActiveNavTree?._} at `, _),
      this.BatchedUpdate(() =>
        _(_, _ ? "vgp_onbuttondown" : "vgp_onbuttonup", {
          button: _,
          source: _,
          is_repeat: _,
        }),
      );
  }
  OnButtonDown(_, _, _, _, _, _, _, _, _) {
    this.OnButtonActionInternal(!0, _, _, _, _, _, _, _, _, _);
  }
  OnButtonUp(_, _, _, _, _, _, _, _, _) {
    this.OnButtonActionInternal(!1, _, _, _, !1, _, _, _, _, _);
  }
  BatchedUpdate(_) {
    this.m_fnGamepadEventUpdateBatcher(_);
  }
  OnNavigationTypeChange(_) {
    if (
      this.ChangeNavigationSource(_, -1) &&
      !(!document.hasFocus() && !this.m_LastActiveContext?.BIsVR()) &&
      (_ == 3 || _ == 4) &&
      this.m_ActiveContext?.m_LastActiveNavTree
    ) {
      let _ = this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
        _ = _(_?.Element) ? _ : null;
      this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(2, _);
    }
  }
  NewGamepadNavigationTree(_, _, _, _) {
    return new _(this, _, _, _, _);
  }
  RegisterGamepadNavigationTree(_, _) {
    let _ = _.WindowContext;
    _.AddNavTree(_);
    let _ = _.MountNavTree(_);
    return (
      !_.Parent &&
        _.BIsEnabled() &&
        (this.BCanActivateContext(_) &&
          (this.m_LastActiveContext = this.m_ActiveContext = _),
        _.SetActiveNavTree(_, !0)),
      () => {
        _.UnregisterGamepadNavigationTree(_).then(() => _());
      }
    );
  }
  OnGamepadNavigationTreeActivated(_, _ = !1) {
    _.WindowContext.SetActiveNavTree(_, _);
  }
  OnGamepadNavigationTreeFocused(_, _, _ = !1) {
    let _ = _.WindowContext;
    _ != this.m_ActiveContext &&
      _(`(${_.LogName(_.Window)}) Focus event in inactive window`),
      _ != _.m_LastActiveFocusNavTree &&
        _ != _.m_LastActiveNavTree &&
        (_.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == _ ||
        _.GetParentEmbeddedNavTree() == _.m_LastActiveFocusNavTree
          ? _ == 4 && _.m_LastActiveNavTree?.GetLastFocusedNode()
            ? _(
                `There was an autofocus event in ${_._}, but the active nav tree is ${_.m_LastActiveFocusNavTree?._} and we already have something focused.  Source: ${_ && _[_]}.`,
              )
            : (_(
                `There was a focus event in ${_._}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
              ),
              _.Activate())
          : _(
              `There was a focus event in ${_._}, but the active nav tree is ${_.m_LastActiveFocusNavTree?._} so it is being ignored.  Source: ${_ && _[_]}.`,
            ));
  }
  BlurNavTree(_) {
    _.WindowContext.BlurNavTree(_);
  }
  IsActiveFocusNavTree(_) {
    return !!(_ && _ == this.m_ActiveContext?.m_LastActiveFocusNavTree);
  }
  IsActiveNavTree(_) {
    return !!(_ && _ == this.m_ActiveContext?.m_LastActiveNavTree);
  }
  GetActiveNavTree() {
    return this.m_ActiveContext?.m_LastActiveNavTree;
  }
  BIsInActiveContext(_) {
    return !!(_ && _.WindowContext == this.m_ActiveContext);
  }
  RegisterForUnhandledButtonDownEvents(_) {
    return this.m_UnhandledButtonEventsCallbacks.Register(_);
  }
  get ContextSetChangedCallbacks() {
    return this.m_ContextSetChangedCallbacks;
  }
  FireUnhandledGamepadEventCallbacks(_) {
    return this.m_UnhandledButtonEventsCallbacks.CountRegistered()
      ? (this.m_UnhandledButtonEventsCallbacks.Dispatch(_), !1)
      : !0;
  }
  SetSuppressGamepadInput(_) {
    this.m_fnCatchAllGamepadInput = _ ? () => !0 : null;
  }
  SetCatchAllGamepadInput(_) {
    this.m_fnCatchAllGamepadInput = _;
  }
  TakeFocusChangingIFrame() {
    window.focus();
    let _ =
      this.m_ActiveContext?.m_LastActiveFocusNavTree ||
      this.m_ActiveContext?.m_LastActiveNavTree;
    _ && _.TakeFocus(2);
  }
  OnContextActivated(_) {
    (this.m_ActiveContext = _), (this.m_LastActiveContext = _);
  }
  OnContextDeactivated(_, _) {
    _ &&
      (this.m_LastActiveContext == _ && (this.m_LastActiveContext = void 0),
      this.DestroyContext(_)),
      this.m_ActiveContext == _ && (this.m_ActiveContext = void 0);
  }
  BIsRestoringHistory() {
    return this.m_bRestoringHistory;
  }
  async RestoreHistoryTransaction(_) {
    this.m_bRestoringHistory = !0;
    try {
      await _();
    } finally {
      this.m_bRestoringHistory = !1;
    }
  }
};
_([_], _.prototype, "OnButtonDown", 1),
  _([_], _.prototype, "OnButtonUp", 1),
  _([_], _.prototype, "OnNavigationTypeChange", 1);
function _(_) {
  if (!_(_)) return !1;
  let _ = _.tagName,
    _ = _(_) ? _.type : void 0;
  return _(_, _);
}
var _ = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(_) {
    this.m_node = _;
  }
  TakeFocus(_) {
    return this.m_node.BTakeFocus(_ ? 0 : 2, _);
  }
  ParentTakeFocus(_) {
    this.m_node.Parent?.BTakeFocus(_ ? 0 : 2, _);
  }
  ChildTakeFocus(_) {
    return this.m_node.BChildTakeFocus(_ ? 0 : 2, _);
  }
  FocusVisibleChild(_) {
    return this.m_node.BVisibleChildTakeFocus(_);
  }
  BHasFocus() {
    return this.m_node.BHasFocus();
  }
  BFocusWithin() {
    return this.m_node.BFocusWithin();
  }
  get NavKey() {
    return this.m_node.NavKey;
  }
  PushState() {
    this.m_History || (this.m_History = new _(this.m_node)),
      this.m_History.PushState();
  }
  PopState(_ = _) {
    this.m_History && this.m_History.PopState(_);
  }
  SaveState(_) {
    this.m_StateHistory || (this.m_StateHistory = new _(this.m_node)),
      this.m_StateHistory.SaveState(_);
  }
  RestoreState(_, _ = _) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(_, _) : !1;
  }
  GetFocusSnapshot() {
    return _(this.m_node);
  }
  RestoreFocusSnapshot(_, _ = _) {
    return _(this.m_node, _, _);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function _(_, _, _, _ = 0.001) {
  return _ == "x"
    ? _.right > _.left + _ && _.left + _ < _.right
    : _ == "y"
      ? _.bottom > _.top + _ && _.top + _ < _.bottom
      : (_(!1, `Invalid axis ${_}`), !1);
}
function _(_, _, _) {
  let _;
  return (
    _ == "x"
      ? (_ = Math.min(_.right, _.right) - Math.max(_.left, _.left))
      : _ == "y"
        ? (_ = Math.min(_.bottom, _.bottom) - Math.max(_.top, _.top))
        : (_(!1, `Invalid axis ${_}`), (_ = 0)),
    _ < 0 ? 0 : _
  );
}
function _(_, _) {
  return _ == "x"
    ? {
        min: _.left,
        max: _.right,
      }
    : {
        min: _.top,
        max: _.bottom,
      };
}
function _(_, _, _) {
  let _ = _[_],
    _ = _(_, _);
  return _ < _.min ? _.min - _ : _ > _.max ? _ - _.max : 0;
}
function _(_) {
  return {
    _: _.left,
    _: _.top,
  };
}
var _ = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function _(_) {
  if (!_) return 0;
  let _ = _.ownerDocument.defaultView,
    _ = _.getComputedStyle(_);
  if (_.display == "flex")
    switch (_.flexDirection) {
      case "row":
        return _.flexWrap == "wrap" ? 5 : 2;
      case "row-reverse":
        return 4;
      case "column":
        return 1;
      case "column-reverse":
        return 3;
    }
  else {
    if (_.display == "grid") return _.gridTemplateAreas !== "none" ? 6 : 5;
    if (_.childElementCount > 0) {
      let _ = _.getComputedStyle(_.firstElementChild);
      if (_.float === "left") return 2;
      if (_.float === "right") return 4;
      if (_.display === "inline" || _.display === "inline-block") return 5;
    }
  }
  return 1;
}
function _(_) {
  switch (_) {
    case 9:
    case 10:
      return "y";
    case 11:
    case 12:
      return "x";
    default:
      return;
  }
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
var _ = _(_(), 1);
function _(_) {
  return {
    ShowVirtualKeyboard: () => {},
    ShowModalKeyboard: () => {},
    SetAsCurrentVirtualKeyboardTarget: () => {},
    HideVirtualKeyboard: () => {},
    DelayHideVirtualKeyboard: () => {},
    BIsActive: () => !1,
    BIsElementValidForInput: () => !1,
  };
}
var _ = _.default.createContext(_);
function _(_) {
  let { factory: _, children: _ } = _,
    _ = _.default.useMemo(() => _.CreateVirtualKeyboardRef.bind(_), [_]);
  return _.default.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_, _) {
  let { onTextEntered: _, ..._ } = _,
    _ = _.default.useRef(null),
    _ = _.default.useRef({});
  Object.assign(_.current, {
    ..._,
    BIsElementValidForInput: () =>
      _.current && document.activeElement == _.current,
  });
  let _ = _(_.current),
    _ = _.default.useCallback(
      (_) => {
        if (!(!document.hasFocus() && document.activeElement == _.current)) {
          if (_.currentTarget != _.current) {
            console.warn(
              "keyboard got blur event, but it's not the active element",
            );
            return;
          }
          (!_.BIsActive() && !_.bInVR) || _.DelayHideVirtualKeyboard();
        }
      },
      [_],
    ),
    _ = _(
      (_) => {
        _.current = _;
        let _ = [];
        return (
          _ &&
            (_.addEventListener("focus", _.SetAsCurrentVirtualKeyboardTarget),
            _.push(() =>
              _.removeEventListener(
                "focus",
                _.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            _.addEventListener("click", _.ShowVirtualKeyboard),
            _.push(() => _.removeEventListener("click", _.ShowVirtualKeyboard)),
            _.push(_(_, _.ShowVirtualKeyboard)),
            _.push(_(_, _))),
          () => _.forEach((_) => _())
        );
      },
      [_, _],
    );
  return (
    _.default.useLayoutEffect(
      () => (
        _(_, {
          TakeFocusAndShowKeyboard: () => {
            let _ = _.current;
            _ &&
              (document.activeElement != _ && _.focus(),
              _.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            _.HideVirtualKeyboard();
          },
        }),
        () => _(_, null)
      ),
      [_, _],
    ),
    _
  );
}
function _(_) {
  let _ = _.default.useRef(void 0),
    _ = _.default.useContext(_);
  return _.current || (_.current = _(_ || {})), _.current;
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
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
