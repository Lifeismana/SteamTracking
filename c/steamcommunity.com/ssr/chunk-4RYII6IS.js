var _ = _(_());
var _ = !1,
  _ = !1,
  _ = !1,
  _ = !1,
  _ = !1,
  _ = !1,
  _ = !1;
function _() {
  return _ || _(), _;
}
function _() {
  return _ || _(), _;
}
function _() {
  return _() || _();
}
function _() {
  if (!navigator?.userAgent) return;
  let _ = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (_ && _.length == 2) return _[1];
}
function _(_, _) {
  return !!(
    (window &&
      window.location &&
      window.location.href &&
      window.location.href.match("[?&]" + _ + "=")) ||
    (typeof navigator < "u" &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf(_.toLowerCase()) != -1)
  );
}
function _() {
  let _ = navigator,
    _ = _ && _.maxTouchPoints && _.maxTouchPoints > 1;
  (_ = _("Valve Steam Tenfoot", "force_tenfoot_client_view")),
    (_ = _("Valve Steam GameOverlay", "force_overlay_view")),
    (_ = _ || _("Valve Steam Client", "force_client_view")),
    (_ = _("macintosh", "force_mac_view")),
    (_ =
      _("iphone", "force_ios_view") ||
      _("ipad", "force_ios_view") ||
      _("ipod", "force_ios_view") ||
      (_("macintosh", "force_ios_view") && _)),
    (_ = _("android", "force_android_view")),
    (_ = !0);
}
var _ = _.default.createContext({}),
  _ = (_) => {
    let _ = _.default.useContext(_);
    return (
      _(
        _?.bSuppressAssert || _.IN_GAMEPADUI !== void 0,
        "Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.",
      ),
      _
    );
  };
function _(_) {
  let { IN_GAMEPADUI: _, IN_DESKTOPUI: _, IN_VR: _, children: _ } = _,
    _ = _({
      bSuppressAssert: !0,
    }),
    _ = _()?.startsWith("Gamepad VR"),
    _ = _.default.useMemo(
      () => ({
        IN_GAMEPADUI: _ ?? _?.IN_GAMEPADUI ?? _.IN_GAMEPADUI,
        IN_DESKTOPUI: _ ?? _?.IN_DESKTOPUI ?? !1,
        IN_VR: _ ?? _?.IN_VR ?? _,
      }),
      [_, _, _, _, _],
    );
  return _.default.createElement(
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
  return _(_)?.IN_DESKTOPUI;
}
function _(_) {
  return _(_)?.IN_VR;
}
function _() {
  return _.EREALM === 2;
}
function _() {
  return _.PLATFORM == "windows";
}
function _() {
  return _.PLATFORM == "macos";
}
function _() {
  return _.PLATFORM == "linux";
}
function _() {
  return _.IN_CHROMEOS;
}
function _() {
  return _.ON_STEAMOS;
}
function _(_, _) {
  return _.length != 0 && _.startsWith(_);
}
var _ = "unknown";
function _() {
  if (!window || !window.location || !window.location.href)
    return console.warn("Unable to determine base url!"), _;
  let _ = window.location.href;
  return _(_, _.STORE_BASE_URL)
    ? _.STORE_BASE_URL
    : _(_, _.COMMUNITY_BASE_URL)
      ? _.COMMUNITY_BASE_URL
      : _(_, _.CHAT_BASE_URL)
        ? _.CHAT_BASE_URL
        : _(_, _.PARTNER_BASE_URL)
          ? _.PARTNER_BASE_URL
          : _(_, _.HELP_BASE_URL)
            ? _.HELP_BASE_URL
            : _(_, _.STEAMTV_BASE_URL)
              ? _.STEAMTV_BASE_URL
              : _(_, _.STATS_BASE_URL)
                ? _.STATS_BASE_URL
                : _(_, _.INTERNAL_STATS_BASE_URL)
                  ? _.INTERNAL_STATS_BASE_URL
                  : _(_, _.STORE_CHECKOUT_BASE_URL)
                    ? _.STORE_CHECKOUT_BASE_URL
                    : _(_, "https://steamloopback.host")
                      ? "https://steamloopback.host"
                      : "";
}
function _() {
  return "community";
}
var _ = class {
  SyncStore(_) {
    return this.Subscribe(_).Unsubscribe;
  }
  GetValue() {
    return this.Value;
  }
};
_([_], _.prototype, "SyncStore", 1), _([_], _.prototype, "GetValue", 1);
var _ = class extends _ {},
  _ = class extends _ {
    m_callbacks;
    m_currentValue;
    m_fnEquals;
    constructor(_, _) {
      super(),
        (this.m_callbacks = new _()),
        (this.m_currentValue = _),
        (this.m_fnEquals = _);
    }
    Set(_) {
      if (this.m_fnEquals) {
        if (this.m_fnEquals(this.m_currentValue, _)) return !1;
      } else if (this.m_currentValue === _) return !1;
      return (this.m_currentValue = _), this.m_callbacks.Dispatch(_), !0;
    }
    get Value() {
      return this.m_currentValue;
    }
    Subscribe(_) {
      return {
        Unsubscribe: this.m_callbacks.Register(_).Unregister,
      };
    }
    get SubscriberCount() {
      return this.m_callbacks.CountRegistered();
    }
  };
function _(_, _) {
  return new _(_, _);
}
var _ = class extends _ {
  m_fnMap;
  m_originalSubscribableValue;
  m_mappedSubscribableValue;
  m_bMappedValueStale = !1;
  constructor(_, _, _) {
    super(),
      (this.m_originalSubscribableValue = _),
      (this.m_mappedSubscribableValue = new _(_(_.Value), _)),
      (this.m_fnMap = _),
      this.m_originalSubscribableValue.Subscribe(() => {
        this.m_mappedSubscribableValue.SubscriberCount > 0
          ? this.UpdateMappedValue()
          : (this.m_bMappedValueStale = !0);
      });
  }
  get Value() {
    return (
      this.m_bMappedValueStale && this.UpdateMappedValue(),
      this.m_mappedSubscribableValue.Value
    );
  }
  Subscribe(_) {
    return this.m_mappedSubscribableValue.Subscribe(_);
  }
  UpdateMappedValue() {
    this.m_mappedSubscribableValue.Set(
      this.m_fnMap(this.m_originalSubscribableValue.Value),
    ),
      (this.m_bMappedValueStale = !1);
  }
};
function _(_, _, _) {
  return new _(_, _, _);
}
var _ = class {
  m_schTimer;
  m_fnCallback;
  m_fnOnCancel;
  Schedule(_, _) {
    this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = _),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, _));
  }
  AsyncSchedule(_, _) {
    return new Promise((_, _) => {
      this.Schedule(_, () => {
        _(), _();
      }),
        (this.m_fnOnCancel = _);
    });
  }
  IsScheduled() {
    return this.m_schTimer !== void 0;
  }
  Cancel() {
    if (this.m_schTimer) {
      let _ = this.m_fnOnCancel;
      clearTimeout(this.m_schTimer), this.Reset(), _ && _();
    }
  }
  Reset() {
    (this.m_schTimer = void 0),
      (this.m_fnCallback = void 0),
      (this.m_fnOnCancel = void 0);
  }
  ScheduledInternal() {
    let _ = this.m_fnCallback;
    this.Reset(), _?.();
  }
};
_([_], _.prototype, "ScheduledInternal", 1);
var _ = class {
  m_vecCallbacks = [];
  Push(_) {
    this.m_vecCallbacks.push(_);
  }
  PushArrayRemove(_, _) {
    this.m_vecCallbacks.push(() => _(_, _));
  }
  Unregister() {
    for (let _ of this.m_vecCallbacks) _();
    this.m_vecCallbacks = [];
  }
  GetUnregisterFunc() {
    return this.Unregister;
  }
};
_([_], _.prototype, "Unregister", 1);
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
