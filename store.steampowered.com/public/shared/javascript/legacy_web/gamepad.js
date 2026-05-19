/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [616],
  {
    402: (e) => {
      e.exports = {
        FocusRingRoot: "focusring_FocusRingRoot_3FIjY",
        FocusRing: "focusring_FocusRing_1wPpl",
        flash: "focusring_flash_1RqM3",
        growOutline: "focusring_growOutline_2o99S",
        fadeOutline: "focusring_fadeOutline_zn08h",
        blinker: "focusring_blinker_1aef_",
        DebugFocusRing: "focusring_DebugFocusRing_1uiTT",
        FocusRingOnHiddenItem: "focusring_FocusRingOnHiddenItem_2rIZm",
      };
    },
    932: (e, t, r) => {
      "use strict";
      r.d(t, { InitializeGamepadNavigation: () => ii });
      var i,
        n = r(669),
        a = r.n(n),
        s = r(200);
      r(696);
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER"),
          (e[(e.AUTOFOCUS = 4)] = "AUTOFOCUS");
      })(i || (i = {}));
      let o = {
        [s.pR.OK]: "vgp_onok",
        [s.pR.CANCEL]: "vgp_oncancel",
        [s.pR.SECONDARY]: "vgp_onsecondaryaction",
        [s.pR.OPTIONS]: "vgp_onoptions",
        [s.pR.START]: "vgp_onmenu",
      };
      function l(e, t, r) {
        return (
          e.addEventListener(t, r),
          () =>
            (function (e, t, r) {
              e.removeEventListener(t, r);
            })(e, t, r)
        );
      }
      function c(e, t) {
        return l(e, "vgp_ondirection", d(t));
      }
      function u(e, t, r) {
        let i = e;
        if (!i || !i.ownerDocument || !i.ownerDocument.defaultView) return !0;
        let n = new i.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: r,
        });
        return i.dispatchEvent(n);
      }
      function d(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function m(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: r,
            onSecondaryActionDescription: i,
            onOptionsActionDescription: n,
            onMenuActionDescription: a,
            actionDescriptionMap: o,
          } = e,
          l = { ...o };
        return (
          void 0 !== t && (l[s.pR.OK] = t),
          void 0 !== r && (l[s.pR.CANCEL] = r),
          void 0 !== i && (l[s.pR.SECONDARY] = i),
          void 0 !== n && (l[s.pR.OPTIONS] = n),
          void 0 !== a && (l[s.pR.START] = a),
          l
        );
      }
      var g = r(629),
        h = r(600),
        _ = r(67),
        p = r(736),
        f = r(263);
      class b {
        m_NavigationController;
        m_postMessage;
        m_bIsGamepadInputExternallyControlled = !1;
        constructor(e) {
          if (
            ((this.m_NavigationController = e),
            (0, p.Dp)("BrowserView.RegisterForMessageFromParent") &&
              (0, p.Dp)("BrowserView.PostMessageToParent"))
          )
            (this.m_bIsGamepadInputExternallyControlled = !0),
              (this.m_postMessage = new f.Vp()),
              this.m_NavigationController.UpdateSourceToGamepad();
          else {
            const e = window.top;
            e && e != window.self
              ? ((this.m_bIsGamepadInputExternallyControlled = !0),
                (this.m_postMessage = new f.n4(e)))
              : ((this.m_bIsGamepadInputExternallyControlled = !1),
                (this.m_postMessage = new f.A7()));
          }
          this.m_postMessage.RegisterForMessage(this.OnMessage),
            window.addEventListener("unload", this.PostPageUnloading),
            this.m_NavigationController.RegisterForUnhandledButtonDownEvents(
              (e) => this.PostButtonPressToSteam(e.detail.button),
            ),
            this.UpdateActionDescriptions({}),
            this.SendGameInputState("CGamepadWebBridgeClient constructor");
        }
        RegisterForFocusChanged(e) {
          return e.FocusChangedCallbacks.Register(this.OnFocusChanged)
            .Unregister;
        }
        BIsGamepadInputExternallyControlled() {
          return this.m_bIsGamepadInputExternallyControlled;
        }
        BFromActiveNavTree(e, t) {
          let r = t?.Tree;
          return r || (r = e?.Tree), r && r.Controller.IsActiveFocusNavTree(r);
        }
        OnFocusChanged(e, t, r) {
          this.BFromActiveNavTree(t, r) &&
            this.OnActionDescriptionTargetChanged(r);
        }
        UpdateActionDescriptions(e) {
          this.m_postMessage.PostMessage({
            type: "UpdateActionDescriptions",
            data: { descriptions: e },
          });
        }
        m_rgCallbackRegistrations = [];
        OnActionDescriptionTargetChanged(e) {
          if (
            (this.m_rgCallbackRegistrations.forEach((e) => e()),
            (this.m_rgCallbackRegistrations = []),
            e)
          ) {
            const t = () =>
              this.UpdateActionDescriptions(
                e.GetActiveActionDescriptions() ?? {},
              );
            t();
            for (let r = e; null != r; r = r.Parent)
              this.m_rgCallbackRegistrations.push(
                r.ActionDescriptionChangedCallbackList.Register(t).Unregister,
              );
          } else this.UpdateActionDescriptions({});
        }
        OnMessage(e) {
          switch (e.type) {
            case "TakeFocus":
              this.m_NavigationController.TakeFocusChangingIFrame();
              break;
            case "ForwardedGameEventDetail":
              this.m_NavigationController.DispatchVirtualGamepad(
                e.data.event,
                e.data.details,
              );
          }
        }
        SendGameInputState(e) {
          let t = _.h.Basic;
          window.bSupportsGamepadUI && (t = _.h.Full),
            this.m_postMessage.PostMessage({
              type: "GameInputState",
              data: { source: e, support: t },
            });
        }
        PostButtonPressToSteam(e) {
          this.m_postMessage.PostMessage({
            type: "ButtonPressed",
            data: { button: e },
          });
        }
        PostPageUnloading() {
          this.m_postMessage.PostMessage({
            type: "PageUnloading",
            data: { location: window.location.href },
          });
        }
      }
      function B(e) {
        return null != e && void 0 !== e.focus;
      }
      (0, g.Cg)([h.o], b.prototype, "OnFocusChanged", null),
        (0, g.Cg)([h.o], b.prototype, "OnMessage", null),
        (0, g.Cg)([h.o], b.prototype, "PostPageUnloading", null);
      function v(e, t, r) {
        if ("childList" === e.type) {
          for (let r = 0; r < e.addedNodes.length; r++) {
            const i = e.addedNodes[r];
            if (i.nodeType === Node.ELEMENT_NODE) {
              const e = i;
              e.parentElement && t(e);
            }
          }
          for (let t = 0; t < e.removedNodes.length; t++) {
            const i = e.removedNodes[t];
            i.nodeType === Node.ELEMENT_NODE && r?.(i);
          }
        }
      }
      function y(e, t) {
        return (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e
        );
      }
      function w(e, t, r) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(r, e));
      }
      function S() {
        return !!window.document;
      }
      let T;
      function C() {
        if (!S()) return T || (T = M()), T;
        let e = (function (e) {
          if (!S() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        })("sessionid");
        return e || (e = M()), e;
      }
      function M() {
        const e = (function () {
          let e = "";
          for (let t = 0; t < 24; t++) e += y(0, 35).toString(36);
          return e;
        })();
        return (
          (function (e, t, r, i) {
            if (!S()) return;
            i || (i = "/");
            let n = "";
            if (void 0 !== r && r) {
              const e = new Date();
              e.setTime(e.getTime() + 864e5 * r),
                (n = "; expires=" + e.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              n +
              ";path=" +
              i;
          })("sessionid", e, 0),
          e
        );
      }
      new Set();
      const I = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        AVATAR_BASE_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        CLAN_CDN_ASSET_URL: "",
        COMMUNITY_ASSETS_BASE_URL: "",
        VIDEO_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        BASE_URL_SHARED_CDN: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_CHECKOUT_BASE_URL: "",
        LOGIN_BASE_URL: "",
        SUPPORT_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        STORE_ITEM_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_MOBILE_WEBVIEW: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        TESLA: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        FROM_WEB: !1,
        WEBSITE_ID: "Unknown",
        get SESSIONID() {
          return C();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_STEAMUI: !1,
        IN_GAMEPADUI: !1,
        IN_STEAMUI_SHARED_CONTEXT: !1,
        FORCED_DISPLAY_MODE: void 0,
        ON_DECK: !1,
        ON_FRAME: !1,
        ON_STEAMOS: !1,
        IN_GAMESCOPE: !1,
        IN_LOGIN: !1,
        IN_LOGIN_REFRESH: !1,
        USE_LONGEST_LOC_STRING: !1,
        SILENT_STARTUP: !1,
        CLIENT_SESSION: 0,
        NOW: 0,
      };
      class R extends s.nh {
        m_lastButtonDown = s.pR.INVALID;
        constructor(e) {
          super(),
            this.SetSourceType(s.Vz.KEYBOARD_SIMULATOR),
            e.addEventListener("keydown", this.OnKeyDown, { capture: !0 }),
            e.addEventListener("keyup", this.OnKeyUp, { capture: !0 }),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          const t = this.TranslateKey(e);
          t != s.pR.INVALID &&
            (e.preventDefault(),
            e.stopPropagation(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t)));
        }
        OnKeyUp(e) {
          const t = this.TranslateKey(e);
          t != s.pR.INVALID &&
            (this.OnButtonUp(t),
            (this.m_lastButtonDown = s.pR.INVALID),
            e.preventDefault(),
            e.stopPropagation());
        }
        Reset() {
          this.m_lastButtonDown != s.pR.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = s.pR.INVALID));
        }
        GetKeycodeFromEvent(e) {
          return "linux" === I.PLATFORM && e.key.length > 1
            ? e.key || e.code
            : e.code || e.key;
        }
        BShouldSwallowEventForTextInputWorkaround(e) {
          if (
            !(
              B(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName ||
                e.target.hasAttribute("contenteditable"))
            )
          )
            return !1;
          if (e.target.hasAttribute("contenteditable")) return !0;
          const t = this.GetKeycodeFromEvent(e);
          let r = e.target;
          if ("range" === r.type) return !1;
          const i = Array.from(
            r.ownerDocument.getElementsByClassName("gpfocus"),
          ).some((e) =>
            Array.from(e.classList).some((e) => e.includes("virtualkeyboard")),
          );
          switch (t) {
            case "ArrowUp": {
              if (i) return !0;
              let t = r?.value.indexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t < (r?.selectionStart ?? 0)
              );
            }
            case "ArrowDown": {
              if (i) return !0;
              let t = r?.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t >= (r?.selectionStart ?? 0) &&
                (r?.selectionEnd ?? 0) < r?.value.length
              );
            }
            case "ArrowLeft":
              return (
                !!i ||
                ((r?.selectionStart ?? 0) > 0 && (r?.selectionEnd ?? 0) > 0)
              );
            case "ArrowRight":
              return (
                !!i ||
                ((r?.selectionStart ?? 0) < r?.value.length &&
                  (r?.selectionEnd ?? 0) < r?.value.length)
              );
            case "Enter":
            case "Backspace":
              return !0;
            default:
              return !1;
          }
        }
        TranslateKey(e) {
          const t = this.GetKeycodeFromEvent(e);
          if (e.altKey) return s.pR.INVALID;
          if (this.BShouldSwallowEventForTextInputWorkaround(e))
            return s.pR.INVALID;
          if (e.ctrlKey)
            if (e.shiftKey)
              switch (t) {
                case "Digit4":
                  return s.pR.TRIGGER_LEFT;
                case "Digit5":
                  return s.pR.TRIGGER_RIGHT;
                default:
                  return s.pR.INVALID;
              }
            else
              switch (t) {
                case "Digit1":
                  return s.pR.STEAM_GUIDE;
                case "Digit2":
                  return s.pR.STEAM_QUICK_MENU;
                case "Digit3":
                case "Digit9":
                  return s.pR.SELECT;
                case "Digit4":
                  return s.pR.BUMPER_LEFT;
                case "Digit5":
                  return s.pR.BUMPER_RIGHT;
                case "Digit6":
                  return s.pR.LSTICK_CLICK;
                case "Digit7":
                  return s.pR.RSTICK_CLICK;
                case "Digit8":
                  return s.pR.OPTIONS;
                case "Digit0":
                  return s.pR.START;
              }
          else if (!e.shiftKey)
            switch (t) {
              case "Escape":
                return s.pR.CANCEL;
              case "Enter":
                return s.pR.OK;
              case "Backspace":
                return s.pR.SECONDARY;
              case "ArrowUp":
                return s.pR.DIR_UP;
              case "ArrowDown":
                return s.pR.DIR_DOWN;
              case "ArrowLeft":
                return s.pR.DIR_LEFT;
              case "ArrowRight":
                return s.pR.DIR_RIGHT;
            }
          return s.pR.INVALID;
        }
      }
      (0, g.Cg)([h.o], R.prototype, "OnKeyDown", null),
        (0, g.Cg)([h.o], R.prototype, "OnKeyUp", null),
        (0, g.Cg)([h.o], R.prototype, "Reset", null);
      var A,
        F = r(793),
        E = r(607);
      class N {
        SyncStore(e) {
          return this.Subscribe(e).Unsubscribe;
        }
        GetValue() {
          return this.Value;
        }
      }
      (0, g.Cg)([h.o], N.prototype, "SyncStore", null),
        (0, g.Cg)([h.o], N.prototype, "GetValue", null);
      class D extends N {}
      class O extends D {
        m_callbacks;
        m_currentValue;
        m_fnEquals;
        constructor(e, t) {
          super(),
            (this.m_callbacks = new E.l()),
            (this.m_currentValue = e),
            (this.m_fnEquals = t);
        }
        Set(e) {
          if (this.m_fnEquals) {
            if (this.m_fnEquals(this.m_currentValue, e)) return !1;
          } else if (this.m_currentValue === e) return !1;
          return (this.m_currentValue = e), this.m_callbacks.Dispatch(e), !0;
        }
        get Value() {
          return this.m_currentValue;
        }
        Subscribe(e) {
          return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
        }
        get SubscriberCount() {
          return this.m_callbacks.CountRegistered();
        }
      }
      function P(e, t) {
        return new O(e, t);
      }
      class G extends N {
        m_fnMap;
        m_originalSubscribableValue;
        m_mappedSubscribableValue;
        m_bMappedValueStale = !1;
        constructor(e, t, r) {
          super(),
            (this.m_originalSubscribableValue = e),
            (this.m_mappedSubscribableValue = new O(t(e.Value), r)),
            (this.m_fnMap = t),
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
        Subscribe(e) {
          return this.m_mappedSubscribableValue.Subscribe(e);
        }
        UpdateMappedValue() {
          this.m_mappedSubscribableValue.Set(
            this.m_fnMap(this.m_originalSubscribableValue.Value),
          ),
            (this.m_bMappedValueStale = !1);
        }
      }
      class z {
        m_schTimer;
        m_fnCallback;
        m_fnOnCancel;
        Schedule(e, t) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = t),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
        }
        AsyncSchedule(e, t) {
          return new Promise((r, i) => {
            this.Schedule(e, () => {
              t(), r();
            }),
              (this.m_fnOnCancel = i);
          });
        }
        IsScheduled() {
          return void 0 !== this.m_schTimer;
        }
        Cancel() {
          if (this.m_schTimer) {
            const e = this.m_fnOnCancel;
            clearTimeout(this.m_schTimer), this.Reset(), e && e();
          }
        }
        Reset() {
          (this.m_schTimer = void 0),
            (this.m_fnCallback = void 0),
            (this.m_fnOnCancel = void 0);
        }
        ScheduledInternal() {
          const e = this.m_fnCallback;
          this.Reset(), e?.();
        }
      }
      (0, g.Cg)([h.o], z.prototype, "ScheduledInternal", null);
      class W {
        m_vecCallbacks = [];
        Push(e) {
          this.m_vecCallbacks.push(e);
        }
        PushArrayRemove(e, t) {
          this.m_vecCallbacks.push(() => F.x9(e, t));
        }
        Unregister() {
          for (const e of this.m_vecCallbacks) e();
          this.m_vecCallbacks = [];
        }
        GetUnregisterFunc() {
          return this.Unregister;
        }
      }
      (0, g.Cg)([h.o], W.prototype, "Unregister", null),
        (function (e) {
          (e[(e.Debug = 0)] = "Debug"),
            (e[(e.Info = 1)] = "Info"),
            (e[(e.Warning = 2)] = "Warning"),
            (e[(e.Error = 3)] = "Error");
        })(A || (A = {}));
      class L {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(e, t) {
          (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            x.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(A.Debug, ...e);
        }
        Info(...e) {
          this.Log(A.Info, ...e);
        }
        Warning(...e) {
          this.Log(A.Warning, ...e);
        }
        Error(...e) {
          this.Log(A.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(A.Error, "Assertion failed:", ...t);
        }
        IsDebugEnabled() {
          return x.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          const r = x.Get().IsDebugLogEnabled(this.m_sName);
          if (e == A.Debug && !r) return;
          let i = this.m_sName;
          const n = this.m_fnIdGenerator?.() ?? null;
          null != n && (i += " (" + n + ")");
          U(e, r, x.Get().IncludeBacktraceInLog, i, this.m_sName, ...t);
        }
      }
      (0, g.Cg)([h.o], L.prototype, "Debug", null),
        (0, g.Cg)([h.o], L.prototype, "Info", null),
        (0, g.Cg)([h.o], L.prototype, "Warning", null),
        (0, g.Cg)([h.o], L.prototype, "Error", null),
        (0, g.Cg)([h.o], L.prototype, "Assert", null);
      class x {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        m_setKnownDebugLogs = new Set();
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_SettingsChangedCallback = new E.l();
        m_bLoading = !0;
        constructor() {
          this.LoadSettings();
        }
        LogAsLogManager(...e) {
          U(
            A.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e,
          );
        }
        async LoadSettings() {
          const e = (e) => {
            try {
              const t = localStorage.getItem(e);
              return t ? JSON.parse(t) : void 0;
            } catch {
              return;
            }
          };
          this.m_bIncludeBacktraceInLog = !!e(
            x.k_IncludeBacktraceInLog_StorageKey,
          );
          const t = e(x.k_EnabledLogNames_StorageKey);
          if (Array.isArray(t)) {
            this.m_setEnabledDebugLogs = new Set(t);
            for (const e of t) this.m_setKnownDebugLogs.add(e);
            this.LogAsLogManager(
              "Loaded debug enabled log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
          } else 0;
          (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
        }
        async SaveSettings() {
          localStorage.setItem(
            x.k_EnabledLogNames_StorageKey,
            JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
          ),
            localStorage.setItem(
              x.k_IncludeBacktraceInLog_StorageKey,
              JSON.stringify(this.m_bIncludeBacktraceInLog),
            ),
            this.LogAsLogManager(
              "Saved enabled debug log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        PrintEnabledLogs(...e) {
          e &&
            e.length > 0 &&
            console.warn(
              `Use DebugLogEnable( '${e.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
            ),
            this.LogAsLogManager(
              "Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        static Get() {
          return (
            null == window.g_LogManager && (window.g_LogManager = new x()),
            window.g_LogManager
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_setKnownDebugLogs.values();
        }
        RegisterLogName(e) {
          this.m_setKnownDebugLogs.add(e);
        }
        IsLogName(e) {
          return this.m_setKnownDebugLogs.has(e);
        }
        IsDebugLogEnabled(e) {
          return this.m_setEnabledDebugLogs.has(e);
        }
        async ToggleDebugLogEnabled(e) {
          this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
        }
        async SetDebugLogEnabled(e, t) {
          this.IsLogName(e)
            ? (t
                ? this.m_setEnabledDebugLogs.add(e)
                : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              await this.SaveSettings())
            : console.warn(
                `No log named "${e}", available logs:`,
                this.GetLogNames(),
              );
        }
        async SetDebugLogsEnabled(e, ...t) {
          t.forEach((t) => this.SetDebugLogEnabled(t, e));
        }
        async SetAllDebugLogsEnabled(e) {
          (this.m_setEnabledDebugLogs = e
            ? new Set(this.m_setKnownDebugLogs)
            : new Set()),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        RegisterForSettingsChanges(e) {
          return this.m_SettingsChangedCallback.Register(e);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        async SetIncludeBacktraceInLog(e) {
          (this.m_bIncludeBacktraceInLog = e),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        GetLogNames() {
          return Array.from(this.LogNames).sort();
        }
      }
      function U(e, t, r, i, n, ...a) {
        const s = (function (e) {
            let t = 0;
            for (let r = 0; r < e.length; r++)
              t = e.charCodeAt(r) + ((t << 5) - t);
            return [255 & t, (t >> 8) & 255, (t >> 16) & 255];
          })(n).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15))),
            ),
          ),
          o = (299 * (l = s)[0] + 587 * l[1] + 114 * l[2]) / 1e3 >= 128;
        var l;
        let c = i;
        r &&
          (c =
            (function (e) {
              switch (e) {
                case A.Debug:
                  return String.fromCodePoint(128027);
                case A.Info:
                  return String.fromCodePoint(8505);
                case A.Warning:
                  return String.fromCodePoint(9888);
                case A.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            c);
        const u =
            a.length >= 1 && "string" == typeof a[0] && a[0].includes("%c"),
          d = u && a.shift();
        let m;
        if (
          ((m = t
            ? [
                `%c${c}%c:${u ? " %c" + d : ""}`,
                `color: ${o ? "black" : "white"}; background: rgb(${s.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(u ? [""] : []),
                ...a,
              ]
            : a),
          r)
        )
          console.groupCollapsed(...m),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case A.Debug:
            case A.Info:
              console.log(...m);
              break;
            case A.Warning:
              console.warn(...m);
              break;
            case A.Error:
              console.clogerror
                ? console.clogerror(3, ...m)
                : console.error(...m);
          }
      }
      (window.DebugLogEnable = (...e) => x.Get().SetDebugLogsEnabled(!0, ...e)),
        (window.DebugLogDisable = (...e) =>
          x.Get().SetDebugLogsEnabled(!1, ...e)),
        (window.DebugLogEnableAll = () => x.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => x.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          x.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          x.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = () => x.Get().GetLogNames()),
        (window.DebugLogEnabled = (...e) => x.Get().PrintEnabledLogs(...e)),
        (window.EnableSteamConsole = (e = !0) =>
          x.Get().SetDebugLogEnabled("SteamClient", e));
      const k = { x: "y", y: "x" };
      function j(e, t, ...r) {
        console.assert
          ? 0 == r.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...r)
          : e || console.warn(t, ...r);
      }
      const H = new L("FocusHistory"),
        V = H.Debug;
      class q {
        m_root;
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, r = !0) {
          return {
            root: q.SerializeNavNode(e, t, r),
            bHadFocus: e.BFocusWithin() && e.Tree.BIsActiveWithinContext(),
          };
        }
        static SerializeNavNode(e, t = !0, r = !0) {
          let i;
          const [n, a] = e.GetChildren();
          n.length &&
            -1 != a &&
            t &&
            (i = n.map((e, t) => q.SerializeNavNode(e, t == a || r, r)));
          const s = { rgChildren: i };
          return (
            e.NavKey && (s.sNavKey = e.NavKey),
            -1 != a && (s.iActiveChild = a),
            s
          );
        }
        static RestoreSerializedNavState(e, t, r = 0) {
          const { root: n, bHadFocus: a } = t;
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            q.RestoreSerializedNavNode(e, n),
              (1 == r || (0 == r && a)) && e.BTakeFocus(i.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t, r = 0) {
          const { sNavKey: i, iActiveChild: n = -1, rgChildren: a } = t;
          i && j(i == e.NavKey, "navkey mismatch"), e.SetActiveChild(n);
          const s = H.IsDebugEnabled()
            ? `[${e.Tree.id}]${(function (e) {
                if (0 == e) return "";
                let t = "";
                for (let r = 0; r < e; r++) t += "*";
                return (t += " "), t;
              })(r)}`
            : "";
          if (a && a.length) {
            const [t] = e.GetChildren();
            if (-1 != n && H.IsDebugEnabled()) {
              const r = a.length != t.length;
              V(
                `${s}Restoring node ${e.NavKey} which had active child ${n} of ${a.length}${r ? `- now ${t.length} children.` : ""}`,
              );
            }
            let i = new Map();
            t.forEach((e) => {
              e.NavKey && i.set(e.NavKey, e);
            });
            for (const e of a) {
              if (!e.sNavKey) continue;
              const t = i.get(e.sNavKey);
              t && q.RestoreSerializedNavNode(t, e, r + 1);
            }
            if (-1 != n && a[n]?.sNavKey) {
              const r = i.get(a[n].sNavKey);
              V(
                `${s}Restoring node ${e.NavKey}, child with focus: ${a[n].sNavKey} ${void 0 === r ? "MISSING!!" : ""}`,
              ),
                r && e.SetActiveChild(t.indexOf(r));
            }
            let o = 0,
              l = 0;
            for (; o < t.length && l < a.length; ) {
              for (; o < t.length && t[o].NavKey; ) o++;
              for (; l < a.length && a[l].sNavKey; ) l++;
              if (o >= t.length || l >= a.length) break;
              q.RestoreSerializedNavNode(t[o], a[l], r + 1), o++, l++;
            }
          }
        }
      }
      function K(e) {
        return q.SerializeNavState(e, !0, !1);
      }
      function $(e, t, r = 0) {
        return q.RestoreSerializedNavState(e, t, r);
      }
      class Q extends q {
        m_rgHistory = [];
        PushState() {
          this.m_rgHistory.push(q.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            q.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class Y extends q {
        m_mapHistory = new Map();
        SaveState(e) {
          this.m_mapHistory.set(e, q.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const r = this.m_mapHistory.get(e);
          return (
            !!r &&
            (console.log(`Restoring history for state ${e}`),
            q.RestoreSerializedNavState(this.m_root, r, t),
            !0)
          );
        }
      }
      class X {
        m_node;
        m_History;
        m_StateHistory;
        constructor(e) {
          this.m_node = e;
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          this.m_node.Parent?.BTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
        }
        ChildTakeFocus(e) {
          return this.m_node.BChildTakeFocus(e ? i.GAMEPAD : i.APPLICATION, e);
        }
        FocusVisibleChild(e) {
          return this.m_node.BVisibleChildTakeFocus(e);
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
          this.m_History || (this.m_History = new Q(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new Y(this.m_node)),
            this.m_StateHistory.SaveState(e);
        }
        RestoreState(e, t = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t)
          );
        }
        GetFocusSnapshot() {
          return K(this.m_node);
        }
        RestoreFocusSnapshot(e, t = 0) {
          return $(this.m_node, e, t);
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function J(e, t, r, i = 0.001) {
        return "x" == e
          ? t.right > r.left + i && t.left + i < r.right
          : "y" == e
            ? t.bottom > r.top + i && t.top + i < r.bottom
            : (j(!1, `Invalid axis ${e}`), !1);
      }
      function Z(e, t, r) {
        let i;
        return (
          "x" == e
            ? (i = Math.min(t.right, r.right) - Math.max(t.left, r.left))
            : "y" == e
              ? (i = Math.min(t.bottom, r.bottom) - Math.max(t.top, r.top))
              : (j(!1, `Invalid axis ${e}`), (i = 0)),
          i < 0 ? 0 : i
        );
      }
      function ee(e, t) {
        return "x" == e
          ? { min: t.left, max: t.right }
          : { min: t.top, max: t.bottom };
      }
      function te(e, t, r) {
        const i = t[e],
          n = ee(e, r);
        return i < n.min ? n.min - i : i > n.max ? i - n.max : 0;
      }
      function re(e) {
        if (!e) return Oe.NONE;
        const t = e.ownerDocument.defaultView,
          r = t.getComputedStyle(e);
        if ("flex" == r.display)
          switch (r.flexDirection) {
            case "row":
              return "wrap" == r.flexWrap ? Oe.GRID : Oe.ROW;
            case "row-reverse":
              return Oe.ROW_REVERSE;
            case "column":
              return Oe.COLUMN;
            case "column-reverse":
              return Oe.COLUMN_REVERSE;
          }
        else {
          if ("grid" == r.display)
            return "none" !== r.gridTemplateAreas ? Oe.GEOMETRIC : Oe.GRID;
          if (e.childElementCount > 0) {
            const r = t.getComputedStyle(e.firstElementChild);
            if ("left" === r.float) return Oe.ROW;
            if ("right" === r.float) return Oe.ROW_REVERSE;
            if ("inline" === r.display || "inline-block" === r.display)
              return Oe.GRID;
          }
        }
        return Oe.COLUMN;
      }
      function ie(e) {
        switch (e) {
          case s.pR.DIR_UP:
          case s.pR.DIR_DOWN:
            return "y";
          case s.pR.DIR_LEFT:
          case s.pR.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      function ne(e, t, r) {
        const i = [],
          [n, a] = e.GetChildren(),
          s = e.GetActiveChild();
        let o;
        const l = s ? s.Element?.getBoundingClientRect() : null;
        if (s) {
          const e = oe(s, t, r);
          if (
            e &&
            !e.offScreen &&
            ((o = ae(s, e, e.overlap, r)), o && !o.visibility.offScreen)
          )
            return o;
          e && i.push({ child: s, visibility: e });
        }
        const c = r || l;
        for (let e = 0; e < n.length; e++) {
          const r = n[e];
          if (r == s) continue;
          const a = oe(r, t, c ?? void 0);
          a && i.push({ child: r, visibility: a });
        }
        let u;
        i.sort(se);
        for (const e of i) {
          const { child: r, visibility: i } = e;
          if (i.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (i.distance && i.distance > u.visibility.distance) break;
          }
          const n = r == s ? o : ae(r, i, i.overlap || t, c ?? void 0);
          n && (!u || se(n, u) < 0) && (u = n);
        }
        return u;
      }
      function ae(e, t, r, i) {
        switch (e.GetFocusable()) {
          case "none":
            return;
          case "children":
            return ne(e, t.overlap || r, i);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function se(e, t) {
        const r = e.visibility,
          i = t.visibility;
        return r.offScreen
          ? i.offScreen
            ? r.distance - i.distance
            : 1
          : i.offScreen
            ? -1
            : r.distance - i.distance;
      }
      function oe(e, t, r) {
        const i = e.Element?.getBoundingClientRect(),
          n = e.GetFocusable();
        let a;
        if ("none" == n || !i || !t) return null;
        if ("self" == n) {
          if (
            i.top < t.top ||
            i.right > t.right ||
            i.bottom > t.bottom ||
            i.left < t.left
          ) {
            const e = i.top + i.height / 2,
              r = i.left + i.width / 2;
            if (e < t.top) return { offScreen: "top", distance: t.top - e };
            if (r > t.right)
              return { offScreen: "right", distance: r - t.right };
            if (e > t.bottom)
              return { offScreen: "bottom", distance: e - t.bottom };
            if (r < t.left) return { offScreen: "left", distance: t.left - r };
          }
          r &&
            (a = (function (e, t) {
              let r = 0,
                i = 0;
              return (
                t.right < e.left
                  ? (r = e.left - t.right)
                  : t.left > e.right && (r = t.left - e.right),
                t.bottom < e.top
                  ? (i = e.top - t.bottom)
                  : t.top > e.bottom && (i = t.top - e.bottom),
                Math.sqrt(r * r + i * i)
              );
            })(i, r));
        } else if ("children" == n) {
          const r = e.Element;
          if (!r) return null;
          if (r.scrollHeight > i.height || r.scrollWidth > i.width) {
            const e = r.ownerDocument.defaultView.getComputedStyle(r);
            if ("visible" == e.overflowX || "visible" == e.overflowY)
              return { overlap: t };
          }
          if (i.bottom < t.top)
            return { offScreen: "top", distance: t.top - i.bottom };
          if (i.left > t.right)
            return { offScreen: "right", distance: i.left - t.right };
          if (i.top > t.bottom)
            return { offScreen: "bottom", distance: i.top - t.bottom };
          if (i.right < t.left)
            return { offScreen: "left", distance: t.left - i.right };
        }
        return {
          overlap: {
            top: Math.max(i.top, t.top),
            right: Math.min(i.right, t.right),
            bottom: Math.min(i.bottom, t.bottom),
            left: Math.max(i.left, t.left),
          },
          distance: a,
        };
      }
      function le(e) {
        return null != e && void 0 !== e.focus;
      }
      function ce(e, t) {
        let r = 0,
          i = 0;
        return (
          t.right < e.left
            ? (r = e.left - t.right)
            : t.left > e.right && (r = t.left - e.right),
          t.bottom < e.top
            ? (i = e.top - t.bottom)
            : t.top > e.bottom && (i = t.top - e.bottom),
          Math.sqrt(r * r + i * i)
        );
      }
      function ue(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function de(e, t) {
        let r = e?.parentElement;
        for (; r; ) {
          if (le(r)) {
            const e = window.getComputedStyle(r);
            if ("fixed" == e.position || "sticky" == e.position) break;
            if (
              !(
                (t && "x" != t) ||
                ("scroll" != e.overflowX && "auto" != e.overflowX)
              )
            )
              break;
            if (
              !(
                (t && "y" != t) ||
                ("scroll" != e.overflowY && "auto" != e.overflowY)
              )
            )
              break;
          }
          r = r.parentElement;
        }
        return le(r) ? r : null;
      }
      function me(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const r = e.ownerDocument.defaultView.getComputedStyle(e),
          i = "x" === t ? r.overflowX : r.overflowY;
        return "auto" === i || "scroll" === i;
      }
      class ge {
        m_options;
        m_msStart;
        m_msEnd;
        m_bActive = !1;
        m_fnBoundAnimationFunc = void 0;
        m_window;
        constructor(e, t) {
          (this.m_window = e), (this.m_options = { timing: "sine", ...t });
        }
        Start() {
          let e;
          switch (
            ((this.m_msStart = performance.now()),
            (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
            this.m_options.timing)
          ) {
            case "linear":
              e = function (e) {
                return e;
              };
              break;
            case "cubic-in-out":
              e = function (e) {
                return e < 0.5
                  ? 4 * e * e * e
                  : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
              };
              break;
            default:
              e = function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              };
          }
          (this.m_bActive = !0),
            (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
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
        OnInterval(e) {
          if (!this.m_bActive) return;
          let t = performance.now() - this.m_msStart;
          if (t >= this.m_options.msDuration) return void this.End();
          let r = t / this.m_options.msDuration;
          try {
            this.Update(e(r));
          } catch {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class he extends ge {
        m_fnCallback;
        constructor(e, t, r) {
          super(e, t), (this.m_fnCallback = r);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class _e extends ge {
        m_object;
        m_propTargets;
        m_props = {};
        constructor(e, t, r) {
          super("ownerDocument" in e ? ue(e) : e, r),
            (this.m_object = e),
            (this.m_propTargets = t);
        }
        Start() {
          this.m_props = {};
          for (let e in this.m_propTargets) {
            let t = parseFloat(this.m_object[e]) || 0,
              r = this.m_propTargets[e];
            t != r && (this.m_props[e] = { start: t, end: r });
          }
          super.Start();
        }
        Update(e) {
          for (let t in this.m_props) {
            let r = this.m_props[t],
              i = r.start + (r.end - r.start) * e;
            this.m_object[t] = i;
          }
        }
      }
      const pe = new L("ScrollSnap").Debug;
      let fe = !1;
      let be;
      function Be(e) {
        if (!e) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in e))
          return {
            left: 0,
            right: e.innerWidth,
            top: 0,
            bottom: e.innerHeight,
          };
        let t = 0,
          r = 0,
          i = e;
        for (; i; ) {
          if ("ownerDocument" in i) {
            const e = window.getComputedStyle(i);
            if ("fixed" === e.position || "sticky" === e.position) break;
          }
          (t += i.offsetTop), (r += i.offsetLeft), (i = i.offsetParent);
        }
        for (i = e?.parentElement; i; ) {
          const { scrollTop: e, scrollLeft: n } = Ee(i);
          if (((t -= e), (r -= n), "ownerDocument" in i)) {
            const e = window.getComputedStyle(i);
            if ("fixed" === e.position || "sticky" === e.position) break;
          }
          i = i.parentElement;
        }
        return {
          left: r,
          top: t,
          right: r + e.offsetWidth,
          bottom: t + e.offsetHeight,
        };
      }
      function ve(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function ye(e, t, r, i) {
        let [n, a, s] = ve(e, i),
          [o, l, c] = ve(t, i),
          [u, d] = ve(r, i);
        if (n < o && a > l) return 0;
        const m = n - u,
          g = a + d,
          h = s > c;
        return (m < o && !h) || (g > l && h)
          ? m - o
          : (m < o && h) || (g > l && !h)
            ? g - l
            : 0;
      }
      function we(e) {
        return "auto" == e
          ? 0
          : e.endsWith("px")
            ? parseInt(e)
            : (console.log("Unsupported length", e), 0);
      }
      function Se(e) {
        if (!("ownerDocument" in e))
          return { left: 0, right: 0, top: 0, bottom: 0 };
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        return {
          left: we(t.scrollMarginLeft),
          right: we(t.scrollMarginRight),
          top: we(t.scrollMarginTop),
          bottom: we(t.scrollMarginBottom),
        };
      }
      function Te(e, t) {
        let r = (function (e) {
          let t;
          return (
            (t =
              "ownerDocument" in e
                ? e.ownerDocument.defaultView.getComputedStyle(e)
                : e.document.defaultView.getComputedStyle(
                    window.document.documentElement,
                  )),
            {
              left: we(t.scrollPaddingLeft),
              right: we(t.scrollPaddingRight),
              top: we(t.scrollPaddingTop),
              bottom: we(t.scrollPaddingBottom),
            }
          );
        })(e);
        return {
          left: Math.max(0, t.left + r.left),
          right: Math.max(0, t.right - r.right),
          top: Math.max(0, t.top + r.top),
          bottom: Math.max(0, t.bottom - r.bottom),
        };
      }
      function Ce(e) {
        return e > -1 && e < 1;
      }
      function Me(e, t, r, i, n) {
        pe(
          "----------------------------------------------------------------------------------",
        ),
          pe("Scrolling Into View:", t);
        let a = [],
          s = t,
          o = Be(t),
          l = n ?? Number.MAX_VALUE;
        for (; s; ) {
          let e = de(s);
          e || (e = ue(s));
          let t = Se(s),
            r = Te(e, Be(e)),
            c = Fe(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (pe(
              "Checking scroll div",
              e,
              `scroll y:${c.scrollTop} of ${c.MaxScrollTop()}, x:${c.scrollLeft} of ${c.MaxScrollLeft()}, adjusted =>`,
              r,
              "target => ",
              o,
            ),
            (i && "y" != i) ||
              !me(e, "y") ||
              ((u.top = ye(o, r, t, "y")),
              (u.top = w(u.top, -c.scrollTop, c.MaxScrollTop() - c.scrollTop)),
              n &&
                ((u.top = Math.min(l, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (l -= Math.abs(u.top))),
              pe(`- checked y: ${u.top}`)),
            (i && "x" != i) ||
              !me(e, "x") ||
              ((u.left = ye(o, r, t, "x")),
              (u.left = w(
                u.left,
                -c.scrollLeft,
                c.MaxScrollLeft() - c.scrollLeft,
              )),
              n &&
                ((u.left =
                  Math.min(l, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (l -= Math.abs(u.left))),
              pe(`- checked x: ${u.left}`)),
            a.push(u),
            n && !l)
          )
            break;
          if (!("ownerDocument" in e)) break;
          const d = window.getComputedStyle(e);
          if ("fixed" === d.position || "sticky" === d.position) break;
          (s = e),
            (o = {
              top: o.top - u.top,
              right: o.right - u.left,
              bottom: o.bottom - u.top,
              left: o.left - u.left,
            });
        }
        let c = !1;
        for (let e of a) {
          if (Ce(e.left) && Ce(e.top)) continue;
          let t = Fe(e.element),
            i = t.scrollTop + e.top,
            n = t.scrollLeft + e.left;
          (n = w(n, 0, t.MaxScrollLeft())),
            (i = w(i, 0, t.MaxScrollTop())),
            (Ce(t.scrollLeft - n) && Ce(t.scrollTop - i)) ||
              (t.scrollTo({ left: n, top: i, behavior: r }),
              c || (pe("Scrolling:"), (c = !0)),
              pe(
                `- ${e.top},${e.left} => ${i}, ${n}, behavior: ${r}`,
                e.element,
              ));
        }
      }
      function Ie(e, t) {
        const { top: r, left: i, behavior: n } = t,
          a = Fe(e);
        a.scrollTo({
          top: a.scrollTop + (r ?? 0),
          left: a.scrollLeft + (i ?? 0),
          behavior: n,
        });
      }
      class Re {
        m_element;
        m_fnOriginalScrollTo;
        m_window;
        m_scrollTopTarget = void 0;
        m_scrollLeftTarget = void 0;
        m_animation = void 0;
        constructor(e) {
          "ownerDocument" in e
            ? ((this.m_element = e),
              (this.m_fnOriginalScrollTo = e.scrollTo),
              (this.m_element.scrollTo = (e, t) => {
                "number" == typeof e
                  ? this.scrollTo({ left: e, top: t })
                  : this.scrollTo(e);
              }))
            : ((this.m_window = e),
              (this.m_element = e.document.documentElement));
        }
        ResetScrollState() {
          (this.m_scrollTopTarget = void 0),
            (this.m_scrollLeftTarget = void 0),
            this.m_window || (this.m_element.style.scrollSnapType = "");
        }
        scrollTo(e) {
          if ("smooth" != e?.behavior)
            this.m_animation &&
              (this.m_animation.Cancel(), (this.m_animation = void 0)),
              this.m_window
                ? this.m_window.scrollTo(e)
                : this.m_fnOriginalScrollTo?.apply(this.m_element, [e]),
              this.ResetScrollState();
          else {
            const t = e.left ?? this.scrollLeft,
              r = e.top ?? this.scrollTop;
            let i = "sine";
            this.m_animation && (this.m_animation.Cancel(), (i = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - r),
                Math.abs(this.currentScrollLeft - t),
              ) > 0
            ) {
              const e = {
                msDuration: 200,
                timing: i,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const i = this.currentScrollLeft,
                  n = this.currentScrollTop;
                this.m_animation = new he(this.m_window, e, (e) => {
                  this.m_window?.scrollTo({
                    left: i + (t - i) * e,
                    top: n + (r - n) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new _e(
                    this.m_element,
                    { scrollTop: r, scrollLeft: t },
                    e,
                  ));
              (this.m_scrollLeftTarget = t),
                (this.m_scrollTopTarget = r),
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
          return this.m_window
            ? this.m_window.scrollX
            : this.m_element.scrollLeft;
        }
        get currentScrollTop() {
          return this.m_window
            ? this.m_window.scrollY
            : this.m_element.scrollTop;
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
      }
      (0, g.Cg)([h.o], Re.prototype, "ResetScrollState", null);
      const Ae = new WeakMap();
      function Fe(e) {
        let t = Ae.get(e);
        return t || ((t = new Re(e)), Ae.set(e, t)), t;
      }
      function Ee(e) {
        const t = Ae.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const Ne = new L("FocusNavigationMovement"),
        De = Ne.Debug;
      var Oe, Pe, Ge, ze;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(Oe || (Oe = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(Pe || (Pe = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(Ge || (Ge = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(ze || (ze = {}));
      class We {
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
        m_Focused = P(!1);
        m_FocusWithin = P(!1);
        m_ActionDescriptionsChangedCallbackList = new E.l();
        m_FocusableIfEmptyAncestor = null;
        m_rgNavigationHandlers = [];
        m_rgFocusHandlers = [];
        constructor(e, t, r) {
          (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = r),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new X(this);
        }
        get Tree() {
          return this.m_Tree;
        }
        get NavKey() {
          return this.m_Properties?.navKey ? this.m_Properties.navKey : void 0;
        }
        get Element() {
          return this.m_element;
        }
        get Parent() {
          return this.m_Parent;
        }
        SetProperties(e) {
          const t =
            ((r = this.m_Properties?.actionDescriptionMap),
            (n = e?.actionDescriptionMap),
            !(null == r || null == n
              ? r === n
              : "object" == typeof r &&
                "object" == typeof n &&
                Object.keys(r).length === Object.keys(n).length &&
                Object.keys(r).every(
                  (e) => n.hasOwnProperty(e) && r[e] === n[e],
                )));
          var r, n;
          const a = this.m_Properties?.focusableIfEmpty,
            s = this.m_Properties?.noFocusRing;
          (this.m_Properties = e || {}),
            t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
            this.m_Properties.focusableIfEmpty && !a
              ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
              : !this.m_Properties.focusableIfEmpty &&
                a &&
                this.PropagateFocusableIfEmptyAncestorToDescendants(
                  this.m_FocusableIfEmptyAncestor,
                ),
            this.m_Properties.noFocusRing && !s && this.BHasFocus()
              ? this.m_FocusRing?.OnBlur(i.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                s &&
                this.BHasFocus() &&
                this.m_FocusRing?.OnFocus(i.APPLICATION, this, this),
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
        SetHasFocus(e) {
          this.m_Focused.Set(e);
        }
        SetFocusWithin(e) {
          this.m_FocusWithin.Set(e) &&
            this.m_Properties?.onFocusWithin &&
            this.m_Properties.onFocusWithin(e);
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
        BuildConsolidatedActionDescriptionMap(e) {
          const t = this.m_Properties?.actionDescriptionMap;
          if (t)
            for (const r in t) {
              const i = r;
              void 0 === e[i] && (e[i] = t[i]);
            }
          return this.m_Parent
            ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
            : this.m_Tree.GetParentEmbeddedNavTree()
              ? this.m_Tree
                  .GetParentEmbeddedNavTree()
                  .Root.BuildConsolidatedActionDescriptionMap(e)
              : e;
        }
        AddChild(e) {
          this.m_rgChildren.push(e),
            (this.m_bChildrenSorted = !1),
            this.m_element && this.RegisterDOMEvents(),
            this.m_Properties?.focusableIfEmpty
              ? e.SetFocusableIfEmptyAncestor(this)
              : this.m_FocusableIfEmptyAncestor &&
                e.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
            this.m_bMounted &&
              e.BFocusWithin() &&
              (j(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild",
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : j(this == this.m_Tree.Root, "Only root should have no parent"),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const t =
              this.m_FocusableIfEmptyAncestor &&
              this.m_FocusableIfEmptyAncestor.BHasFocus(),
            r = this.m_Properties?.autoFocus || t;
          if (this.BWantsAutoFocus() || r) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              (this.m_Properties?.autoFocus || r || -1 !== e) &&
                (this.SetActiveChild(e),
                !this.m_Parent || this.m_Parent.m_element
                  ? t
                    ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                      this.m_Tree.DeferredFocus.RequestFocus(
                        this.m_FocusableIfEmptyAncestor,
                        { bFocusDescendant: !0 },
                      )
                    : this.Tree.DeferredFocus.RequestFocus(this)
                  : (this.m_Parent.m_bAutoFocusChild = !0));
          } else if (this.m_rgChildren.length) {
            const e = this.m_rgChildren.findIndex((e) => e.BFocusWithin());
            -1 != e &&
              (this.SetActiveChild(e),
              j(
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
          const e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
          (this.BHasFocus() || e) &&
            (De(
              `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? "will transfer to retain focus ancestor" : "will blur"}.`,
            ),
            e && this.Tree.DeferredFocus.RequestFocus(null),
            this.m_FocusableIfEmptyAncestor
              ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
              : this.BHasFocus() &&
                this.m_Tree.TransferFocus(i.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : j(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            this.m_element &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties?.layout != Oe.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              c(this.m_element, this.OnNavigationEvent),
            ),
            (this.m_Properties?.focusable ||
              this.m_Properties?.focusableIfEmpty ||
              0 == this.m_rgChildren.length) &&
              (this.m_rgFocusHandlers.length ||
                (this.m_element?.addEventListener("focus", this.OnDOMFocus),
                this.m_element?.addEventListener("blur", this.OnDOMBlur),
                this.m_rgFocusHandlers.push(() => {
                  this.m_element?.removeEventListener("focus", this.OnDOMFocus),
                    this.m_element?.removeEventListener("blur", this.OnDOMBlur);
                })));
        }
        RemoveChild(e) {
          let t = this.m_rgChildren.indexOf(e);
          j(-1 !== t, "Child was not found to remove"),
            -1 !== t &&
              (this.m_ActiveChild == e && (this.m_ActiveChild = void 0),
              this.m_rgChildren.splice(t, 1));
        }
        UnregisterDOMEvents() {
          this.m_rgNavigationHandlers.forEach((e) => e()),
            (this.m_rgNavigationHandlers = []),
            this.m_rgFocusHandlers.forEach((e) => e()),
            (this.m_rgFocusHandlers = []);
        }
        GetActiveDescendant() {
          const e = this.GetActiveChild();
          return e ? e.GetActiveDescendant() : this;
        }
        IsValidChildIndex(e) {
          return e >= 0 && e < this.m_rgChildren.length;
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
              this.m_rgChildren[this.m_iLastActiveChildIndex] ==
                this.m_ActiveChild
            )
              return this.m_iLastActiveChildIndex;
            this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
              this.m_ActiveChild,
            );
          }
          return this.m_iLastActiveChildIndex;
        }
        EnsureChildrenSorted(e = !1) {
          (this.m_bChildrenSorted && !e) ||
            (this.m_rgChildren.sort((e, t) => {
              const r = e.m_element,
                i = t.m_element;
              if (!r) return i ? 1 : 0;
              if (!i) return -1;
              const n = r.compareDocumentPosition(i);
              return n & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : n & Node.DOCUMENT_POSITION_FOLLOWING
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
          const e = this.GetActiveChild();
          return e ? e.GetLastFocusElement() : this.m_element;
        }
        OnDOMFocus(e) {
          if (!this.BHasFocus()) {
            if ("children" == this.GetFocusable()) {
              const e = this.FindFocusableDescendant();
              if (e && e !== this)
                return (
                  De(
                    "Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.",
                    this.m_element,
                    e.m_element,
                  ),
                  void this.m_Tree.TransferFocus(i.BROWSER, e)
                );
            }
            this.m_Tree.TransferFocus(i.BROWSER, this);
          }
        }
        OnDOMBlur(e) {
          this.BHasFocus() &&
            this.m_element?.ownerDocument.hasFocus() &&
            this.m_Tree.TransferFocus(i.BROWSER, null);
        }
        UpdateParentActiveChild() {
          this.m_Parent &&
            (this.m_Parent.SetActiveChild(this),
            this.m_Parent.UpdateParentActiveChild());
        }
        GetFocusable() {
          const {
            focusable: e,
            focusableIfEmpty: t,
            childFocusDisabled: r,
            fnCanTakeFocus: i,
          } = this.m_Properties;
          return this.m_bMounted
            ? i && !i(this)
              ? "none"
              : e || (t && (r || 0 == this.m_rgChildren.length))
                ? "self"
                : !r && this.m_rgChildren.length
                  ? "children"
                  : "none"
            : "none";
        }
        BTakeFocus(e, t) {
          const r = this.FindFocusableNode(t);
          return this.InternalFocusDescendant(r, e, t);
        }
        FindFocusableNode(e, t) {
          switch (this.GetFocusable()) {
            case "none":
              return null;
            case "self":
              return this;
            case "children":
              return this.FindFocusableDescendant(e, t);
          }
        }
        BChildTakeFocus(e, t) {
          const r = this.FindFocusableDescendant(t);
          return this.InternalFocusDescendant(r, e, t);
        }
        BFocusFirstChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            -1,
            ze.FORWARD,
            s.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            ze.BACKWARD,
            s.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const r = ie(e),
            { focusableIfEmpty: i, childFocusDisabled: n } =
              this.m_Properties ?? {};
          if (n) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: n, resetNavOnEntry: a } =
              this.m_Properties ?? {};
            let s = this.GetActiveChildIndex();
            a && void 0 !== e && (s = -1);
            const o = this.GetLayout();
            let l, c;
            if (
              (this.IsValidChildIndex(s) ||
                (s =
                  s >= this.m_rgChildren.length ||
                  o == Oe.ROW_REVERSE ||
                  o == Oe.COLUMN_REVERSE ||
                  n == Pe.LAST
                    ? this.m_rgChildren.length - 1
                    : 0),
              n == Pe.MAINTAIN_X
                ? (c = "x")
                : n == Pe.MAINTAIN_Y
                  ? (c = "y")
                  : o == Oe.GEOMETRIC && r && (c = k[r]),
              (c || t) && r)
            ) {
              const i = this.m_Tree.GetLastFocusedNode();
              if (t || (i && c == k[r])) {
                const a =
                  t ||
                  this.AdjustRectForLastMovementOnTangentAxis(
                    i.GetBoundingRect(),
                    r,
                  );
                De(
                  `Taking focus while preserving ${n && Pe[n]} preserved: ${c} movement: ${r}, node:`,
                  a,
                ),
                  (l = this.FindClosestFocusableNodeToRect(e, a));
              } else if (c != k[r]) {
                const t = this.ComputeRelativeDirection(e, Oe.GRID),
                  r = t == ze.BACKWARD ? this.m_rgChildren.length : -1;
                l = this.FindNextFocusableChildInDirection(r, t, e);
              }
            } else if (n == Pe.PREFERRED_CHILD) {
              let t = this.m_rgChildren;
              for (; t.length; ) {
                let r = [];
                for (const i of t) {
                  if (
                    ((l = i.BWantsPreferredFocus()
                      ? i.FindFocusableNode(e)
                      : void 0),
                    l)
                  )
                    return l;
                  r.push(...i.m_rgChildren);
                }
                t = r;
              }
            } else
              n == Pe.LAST &&
                (l = this.FindNextFocusableChildInDirection(
                  s + 1,
                  ze.BACKWARD,
                  e,
                ));
            return (
              l ||
                (l = this.FindNextFocusableChildInDirection(
                  s - 1,
                  ze.FORWARD,
                  e,
                )),
              l ||
                (l = this.FindNextFocusableChildInDirection(s, ze.BACKWARD, e)),
              l || (i ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          const t = this.Element?.ownerDocument?.defaultView ?? window,
            r = ne(this, {
              top: 0,
              left: 0,
              right: t.innerWidth,
              bottom: t.innerHeight,
            });
          return (
            De(
              `Focusing visible child, best child match is ${r?.child?.Element?.className} - ${JSON.stringify(r?.visibility)}`,
            ),
            !!r && r.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties?.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return Oe.NONE;
          return re(this.m_element);
        }
        OnNavigationEvent(e) {
          const t = e.detail.button;
          if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1))
            return !0;
          const {
            onMoveUp: r,
            onMoveRight: i,
            onMoveDown: n,
            onMoveLeft: a,
          } = this.m_Properties ?? {};
          let o = !1;
          switch (t) {
            case s.pR.DIR_UP:
              r && (o = r(e.detail, this));
              break;
            case s.pR.DIR_RIGHT:
              i && (o = i(e.detail, this));
              break;
            case s.pR.DIR_DOWN:
              n && (o = n(e.detail, this));
              break;
            case s.pR.DIR_LEFT:
              a && (o = a(e.detail, this));
          }
          return o;
        }
        InternalFocusDescendant(e, t, r) {
          return !!e && (this.m_Tree.TransferFocus(t, e, ie(r)), !0);
        }
        BTryInternalNavigation(e, t) {
          const r = this.GetLayout();
          let n,
            a = this.ComputeRelativeDirection(e, r);
          if (
            (De(
              `Handling navigation event ${s.pR[e]} - ${Oe[r]} - ${ze[a]}`,
              this.m_element,
            ),
            a == ze.INVALID)
          )
            return !1;
          if (this.m_Properties?.focusable && this.BHasFocus())
            return De("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), r == Oe.GRID))
            n = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              a,
              e,
            );
          else if (r == Oe.GEOMETRIC)
            n = this.FindNextFocusableChildGeometric(a, e);
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = a == ze.FORWARD ? -1 : this.m_rgChildren.length),
              (n = this.FindNextFocusableChildInDirection(t, a, e));
          }
          if (n) {
            const r = ie(e);
            if (this.GetScrollIntoViewType() == Ge.NoTransformSparseContent) {
              const e = n.Element?.ownerDocument.defaultView;
              if (e) {
                const i =
                    ("y" == r ? e.innerHeight : e.innerWidth) /
                    (t ? 4.5 : 3.33),
                  s = Be(n.Element);
                let o = !1;
                if (
                  ("y" == r
                    ? a == ze.FORWARD
                      ? (o =
                          s.top > e.innerHeight && s.bottom > e.innerHeight + i)
                      : a == ze.BACKWARD && (o = s.bottom < 0 && s.top < -i)
                    : "x" == r &&
                      (a == ze.FORWARD
                        ? (o =
                            s.left > e.innerWidth && s.right > e.innerWidth + i)
                        : a == ze.BACKWARD && (o = s.right < 0 && s.left < -i)),
                  o)
                )
                  return (
                    De(`Element too far away, scrolling ${i} on ${r} axis `),
                    Me(n.Element, n.Element, "smooth", r, i),
                    !0
                  );
              }
            }
            return this.m_Tree.TransferFocus(i.GAMEPAD, n, r), !0;
          }
          return !1;
        }
        GetScrollIntoViewType() {
          return this.m_Properties?.scrollIntoViewType
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
              ? this.m_Parent.GetScrollIntoViewType()
              : Ge.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let r = t == Oe.ROW_REVERSE || t == Oe.COLUMN_REVERSE;
          switch (t) {
            case Oe.ROW:
            case Oe.ROW_REVERSE:
              switch (e) {
                case s.pR.DIR_LEFT:
                  return r ? ze.FORWARD : ze.BACKWARD;
                case s.pR.DIR_RIGHT:
                  return r ? ze.BACKWARD : ze.FORWARD;
                default:
                  return ze.INVALID;
              }
            case Oe.COLUMN:
            case Oe.COLUMN_REVERSE:
              switch (e) {
                case s.pR.DIR_UP:
                  return r ? ze.FORWARD : ze.BACKWARD;
                case s.pR.DIR_DOWN:
                  return r ? ze.BACKWARD : ze.FORWARD;
                default:
                  return ze.INVALID;
              }
            case Oe.GRID:
            case Oe.GEOMETRIC:
              switch (e) {
                case s.pR.DIR_LEFT:
                case s.pR.DIR_UP:
                  return r ? ze.FORWARD : ze.BACKWARD;
                case s.pR.DIR_RIGHT:
                case s.pR.DIR_DOWN:
                  return r ? ze.BACKWARD : ze.FORWARD;
                default:
                  return ze.INVALID;
              }
            default:
              return ze.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == ze.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, r) {
          let i = t == ze.FORWARD ? 1 : -1;
          for (let t = e + i; t >= 0 && t < this.m_rgChildren.length; t += i) {
            const e = this.m_rgChildren[t].FindFocusableNode(r);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, r) {
          let i = t == ze.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += i)
            if (r(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, r) {
          const i = r == s.pR.DIR_UP || r == s.pR.DIR_DOWN,
            n = this.GetLastFocusElement();
          if (!n || n == this.m_element)
            return (
              j(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                n,
              ),
              this.FindFocusableDescendant(r)
            );
          let a = this.GetActiveDescendant().GetBoundingRect();
          if (
            ((r != s.pR.DIR_UP && r != s.pR.DIR_DOWN) ||
              (a = this.AdjustRectForLastMovementOnTangentAxis(a, "y")),
            i)
          ) {
            let i = e;
            for (; -1 != i; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(i, t),
                t,
                (e) => !J("y", a, e.GetBoundingRect()),
              );
              if (-1 != e) {
                const i = this.m_rgChildren[e].GetBoundingRect(),
                  n = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    r,
                    a,
                    e,
                    i,
                  );
                if (n) return n;
              }
              i = e;
            }
          } else {
            let i = t == ze.FORWARD ? 1 : -1;
            for (
              let n = this.AdvanceIndex(e, t);
              n >= 0 && n < this.m_rgChildren.length;
              n += i
            ) {
              const e = this.m_rgChildren[n];
              if (!J("y", a, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(r);
              if (t) return t;
            }
          }
          return null;
        }
        FindNextFocusableChildGeometric(e, t) {
          const r = this.GetLastFocusElement();
          if (!r || r == this.m_element)
            return (
              j(
                !1,
                "No active child for geometric navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                r,
              ),
              this.FindFocusableDescendant(t)
            );
          const i = ie(t);
          if (!i) return null;
          const n = this.AdjustRectForLastMovementOnTangentAxis(
            this.GetActiveDescendant().GetBoundingRect(),
            i,
          );
          return this.FindClosetChildInDirection(i, n, e, t);
        }
        AdjustRectForLastMovementOnTangentAxis(e, t) {
          const r = this.m_Tree.GetLastFocusedMovementRect(k[t]);
          return r
            ? "x" == t
              ? { left: e.left, right: e.right, top: r.top, bottom: r.bottom }
              : { left: r.left, right: r.right, top: e.top, bottom: e.bottom }
            : e;
        }
        FindClosestFocusableNodeToRect(e, t) {
          const r = ie(e),
            i = r && k[r],
            n = [];
          for (const e of this.m_rgChildren) {
            const r = e.GetBoundingRect();
            if (r) {
              const a = ce(t, r),
                s = i ? Z(i, t, r) : 0;
              n.push({ child: e, overlap: s, dist: a });
            }
          }
          n.sort((e, t) =>
            e.dist != t.dist ? e.dist - t.dist : t.overlap - e.overlap,
          );
          for (const { child: r } of n) {
            const i = r.FindFocusableNode(e, t);
            if (i) return i;
          }
          return null;
        }
        FindClosetChildInDirection(e, t, r, i) {
          De(
            `Find child closest to rect, rect is at left ${t.left} top ${t.top} right ${t.right} bottom ${t.bottom}`,
          );
          const n = ee(e, t),
            a = [];
          for (const i of this.m_rgChildren) {
            const s = i.GetBoundingRect();
            if (s) {
              const o = ee(e, s);
              let l;
              (l = r == ze.FORWARD ? o.min - n.max : n.min - o.max),
                l >= 0 && a.push({ child: i, overlap: Z(k[e], t, s), dist: l });
            }
          }
          if (
            (a.sort((e, t) => {
              if (e.overlap) {
                if (!t.overlap) return -1;
              } else if (t.overlap) return 1;
              const r = e.dist - t.dist;
              return r || t.overlap - e.overlap;
            }),
            Ne.IsDebugEnabled())
          ) {
            const e = a
              .slice(0, 3)
              .map(
                ({ dist: e, overlap: t, child: r }) =>
                  `[ node: ${r.m_element?.className} dist: ${e} overlap: ${t} ]`,
              );
            De(`Found nodes on axis, top 3 (of ${a.length}: ${e.join(", ")}`);
          }
          for (const { child: e } of a) {
            const r = e.FindFocusableNode(i, t);
            if (r) return r;
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, r, i, n, a) {
          (!n || n < 0) && (n = 0);
          let s = [];
          if (!i) return null;
          const o = { x: (l = i).left, y: l.top };
          var l;
          this.ScanChildren(n, t, (t) => {
            const r = t.GetBoundingRect();
            return (
              !!r &&
              (!(!a || J(k[e], a, r)) ||
                (s.push({ child: t, overlap: Z(e, i, r), dist: te(e, o, r) }),
                !1))
            );
          }),
            t == ze.BACKWARD && s.reverse(),
            s.sort((e, t) => {
              const r = t.overlap - e.overlap;
              return 0 != r ? r : e.dist - t.dist;
            });
          for (const { child: e } of s) {
            const t = e.FindFocusableNode(r, i);
            if (t) return t;
          }
          return null;
        }
        GetChildren() {
          return (
            this.EnsureChildrenSorted(),
            [this.m_rgChildren, this.m_iLastActiveChildIndex]
          );
        }
        SetActiveChild(e) {
          e instanceof We
            ? (this.EnsureChildrenSorted(),
              (this.m_ActiveChild = e),
              (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(e)))
            : (this.IsValidChildIndex(e) &&
                (this.m_ActiveChild = this.m_rgChildren[e]),
              (this.m_iLastActiveChildIndex = e));
        }
        GetDepth() {
          return this.m_nDepth;
        }
        SetFocusableIfEmptyAncestor(e) {
          (this.m_FocusableIfEmptyAncestor = e),
            this.m_Properties?.focusableIfEmpty ||
              this.PropagateFocusableIfEmptyAncestorToDescendants(e);
        }
        PropagateFocusableIfEmptyAncestorToDescendants(e) {
          for (let t = 0; t < this.m_rgChildren.length; t++)
            this.m_rgChildren[t].SetFocusableIfEmptyAncestor(e);
        }
        OnFocusedDecendantRemoved(e) {
          this.m_Tree.DeferredFocus.RequestFocus(this, {
            bFocusDescendant: !0,
          });
        }
        SetDOMFocusAndScroll(e, t) {
          this.UpdateParentActiveChild(),
            this.m_Tree.OnChildActivated(e),
            this.m_Tree.BIsActiveFocus()
              ? (j(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus",
                ),
                this.m_element?.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                De(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
                ),
            this.m_Tree.BIsActive() &&
              (function (e, t) {
                const r = e.Element;
                if (!r) return;
                let i = [
                  { node: e, eScrollType: e.m_Properties?.scrollIntoViewType },
                ];
                for (let t = e.Parent; t; t = t.Parent) {
                  const e = t.m_Properties?.scrollIntoViewWhenChildFocused,
                    r = t.m_Properties?.scrollIntoViewType;
                  if (e) {
                    const n = { node: t, eScrollType: r };
                    "force" === e ? (i = [n]) : i.push(n);
                  }
                  if (void 0 !== r)
                    for (
                      let e = i.length - 1;
                      e >= 0 && void 0 === i[e].eScrollType;
                      e--
                    )
                      i[e].eScrollType = r;
                }
                for (; i.length; ) {
                  let { node: r, eScrollType: n } = i.pop(),
                    a = 0 == i.length;
                  if (
                    (void 0 === n && (n = fe ? Ge.NoTransform : Ge.Standard),
                    r?.m_Properties?.fnScrollIntoViewHandler &&
                      !1 !== r.m_Properties.fnScrollIntoViewHandler(e, t, r))
                  )
                    continue;
                  const s = r.m_element,
                    o =
                      n == Ge.NoTransform ||
                      n == Ge.NoTransformSparseContent ||
                      !a;
                  if (t) {
                    const t = o ? Be(s) : s.getBoundingClientRect();
                    let r = !1;
                    const i = Math.max(1.4 * (t.bottom - t.top), 40),
                      n = be && performance.now() - be < 500;
                    (n ||
                      t.bottom < -i ||
                      t.top > s.ownerDocument.defaultView.innerHeight + i) &&
                      ((r = !0),
                      n ||
                        pe(
                          `Disabling smooth scrolling, ${t.bottom} < ${-i}, ${t.top} > ${s.ownerDocument.defaultView.innerHeight} + ${i} `,
                        ));
                    let a = r ? "auto" : "smooth";
                    r && (be = performance.now()),
                      e.Tree.Controller.BIsRestoringHistory() && (a = "auto"),
                      o
                        ? Me(0, s, a)
                        : s.scrollIntoView({ behavior: a, block: "nearest" });
                  } else
                    pe("No previous element for scrolling, will jump"),
                      o
                        ? Me(0, s, "auto")
                        : s?.scrollIntoView({
                            behavior: "auto",
                            block: "nearest",
                            inline: "nearest",
                          });
                }
              })(this, t);
        }
      }
      (0, g.Cg)([h.o], We.prototype, "OnDOMFocus", null),
        (0, g.Cg)([h.o], We.prototype, "OnDOMBlur", null),
        (0, g.Cg)([h.o], We.prototype, "OnNavigationEvent", null);
      const Le = new L("FocusNavigation").Debug,
        xe = new L("GamepadEvents").Debug;
      class Ue extends We {
        m_wrappedTree;
        m_rgCallbackRegistrations = new W();
        constructor(e, t) {
          super(t.m_Tree, t, t.m_FocusRing),
            this.SetProperties({ navKey: `FocusNavTreeWrapper_${e}` });
        }
        OnMount(e) {
          super.OnMount(e), (e.__nav_wrapper = this);
          const t = e.__nav_tree;
          t && this.BindTree(t);
        }
        OnUnmount() {
          this.m_rgCallbackRegistrations.Unregister();
        }
        BindTree(e) {
          e.GetParentEmbeddedNavTree() &&
            ((this.m_wrappedTree = e),
            this.m_rgCallbackRegistrations.Push(
              e.OnActivateCallbacks.Register(this.OnWrappedTreeActivated)
                .Unregister,
            ),
            e.BIsActive() && this.OnWrappedTreeActivated(),
            this.m_rgCallbackRegistrations.Push(
              e.RegisterOnUnhandledButtonCallback(
                this.OnWrappedTreeUnhandledButton,
              ),
            ));
        }
        OnWrappedTreeActivated() {
          Le(
            "Wrapped tree activated, " +
              (this.BHasFocus()
                ? "but we already have focus"
                : "transferring focus"),
          ),
            this.BHasFocus() || this.m_Tree.TransferFocus(i.APPLICATION, this);
        }
        OnWrappedTreeUnhandledButton(e) {
          return (
            xe(
              `Propagating ${s.pR[e.detail.button]} event out of tree, firing at element:`,
              this.m_Parent?.Element,
            ),
            u(this.m_Parent?.Element, "vgp_onbuttondown", e.detail),
            !0
          );
        }
        SetDOMFocusAndScroll(e, t) {
          this.UpdateParentActiveChild(),
            this.m_wrappedTree?.BIsActive() ||
              (this.m_wrappedTree?.Activate(),
              this.m_wrappedTree?.TakeFocus(e));
        }
        SetProperties(e) {
          super.SetProperties({ ...e, noFocusRing: !0, focusable: !0 });
        }
      }
      (0, g.Cg)([h.o], Ue.prototype, "OnWrappedTreeActivated", null),
        (0, g.Cg)([h.o], Ue.prototype, "OnWrappedTreeUnhandledButton", null);
      const ke = new L("FocusHistory").Debug;
      function je(e) {
        const t = (t) => {
            ke(
              `preserving state and suppressing focus for tree ${e.id} for navigation type ${t.navigationType}`,
            );
            const r = window.navigation.currentEntry?.getState() ?? {};
            if ("replace" != t.navigationType) {
              const t = K(e.Root);
              window.navigation.updateCurrentEntry({
                state: { ...r, [Ve(e)]: t },
              });
            } else
              r[$e] &&
                t.intercept({
                  async handler() {
                    const e = window.navigation.currentEntry?.getState() ?? {};
                    window.navigation.updateCurrentEntry({
                      state: { ...e, [$e]: !0 },
                    });
                  },
                  focusReset: "manual",
                });
            e.DeferredFocus.SuppressFocus();
          },
          r = (t) => {
            He(e)
              ? e.DeferredFocus.Reset()
              : e.DeferredFocus.ExecuteQueuedFocus();
          },
          i = new W();
        return (
          window.navigation.addEventListener("navigate", t),
          i.Push(() => window.navigation.removeEventListener("navigate", t)),
          window.navigation.addEventListener("navigatesuccess", r),
          i.Push(() =>
            window.navigation.removeEventListener("navigatesuccess", r),
          ),
          (function () {
            if (!Ke) {
              Ke = new E.l();
              const e = performance.now(),
                t = (t) => {
                  "string" == typeof t.data &&
                    "FocusRestoreReady" == t.data &&
                    (ke(
                      `Got FocusRestoreReady event from page after ${performance.now() - e}ms, will record in history.  ${Ke.CountRegistered()} trees waiting.`,
                    ),
                    window.navigation.updateCurrentEntry({
                      state: {
                        ...window.navigation.currentEntry?.getState(),
                        [$e]: !0,
                      },
                    }),
                    Ke.Dispatch(),
                    Ke.ClearAllCallbacks(),
                    window.clearTimeout(r));
                };
              window.addEventListener("message", t);
              const r = window.setTimeout(() => {
                Ke.CountRegistered() &&
                  (console.warn(
                    "Waited 4000ms for FocusRestoreReady, proceeding",
                  ),
                  Ke.Dispatch());
              }, 4e3);
            }
          })(),
          (function () {
            const e = window.navigation.currentEntry?.getState();
            return (
              ke(`Wait for page? ${e?.[$e] ? "wait" : "no"} `, e), !!e?.[$e]
            );
          })()
            ? (function (e, t) {
                if (window.__bFocusRestoreReady) return void He(e);
                ke(
                  `Wait for page enabled, suppressing focus in ${e.id} until we hear that page is ready`,
                ),
                  e.DeferredFocus.SuppressFocus();
                const r = qe(e),
                  i = () => {
                    He(e, r)
                      ? e.DeferredFocus.Reset()
                      : e.DeferredFocus.ExecuteQueuedFocus();
                  },
                  n = Ke.Register(i).Unregister;
                t.Push(n);
              })(e, i)
            : He(e),
          i.GetUnregisterFunc()
        );
      }
      function He(e, t) {
        const r = t ?? qe(e);
        return (
          ke(
            `Restoring focus state for ${e.id}, ${r ? "history available" : "no history"}`,
          ),
          !!r && ($(e.Root, r, 0), !0)
        );
      }
      function Ve(e) {
        return `FocusHistory_${e.id}`;
      }
      function qe(e) {
        const t = window.navigation.currentEntry?.getState();
        return t?.[Ve(e)];
      }
      let Ke;
      const $e = "FocusHistoryWaitForPage";
      const Qe = new L("FocusNavigation").Debug,
        Ye = new L("GamepadEvents").Debug;
      class Xe {
        m_Controller;
        m_context;
        m_window;
        m_ParentNavTree;
        m_rgChildNavTrees = [];
        m_ID;
        m_valueIsMounted = P(!1);
        m_bIsEnabled = !1;
        m_tsLastActivated;
        m_Root;
        m_onActivateCallbacks = new E.l();
        m_onDeactivateCallbacks = new E.l();
        m_onActiveFocusStateChangedCallbacks = new E.l();
        m_onChildTreesChanged = new E.l();
        m_Properties;
        m_onGlobalButtonDown;
        m_rgOnUnhandledButton = [];
        m_rgGlobalButtonHandlers = [];
        constructor(e, t, r, i, n) {
          (this.m_Controller = e),
            (this.m_context = t),
            (this.m_ID = r),
            (this.m_ParentNavTree = i),
            (this.m_Root = new We(this, null, null)),
            this.m_Root.SetProperties({ layout: Oe.COLUMN }),
            (this.m_Properties = n);
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
          for (const e of this.m_rgChildNavTrees) {
            if (e.BIsModal() && e.BIsEnabled()) return e;
            const t = e.FindModalDescendant();
            if (t) return t;
          }
        }
        BIsContextActive() {
          return this.m_Controller.BIsInActiveContext(this);
        }
        CreateNode(e, t) {
          return new We(this, e, t);
        }
        RegisterNavigationItem(e, t) {
          return e.OnMount(t), () => e.OnUnmount();
        }
        OnChildActivated(e) {
          this.m_valueIsMounted.Value &&
            this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
        }
        m_lastFocusNode;
        m_bWasActiveForLastFocusChange;
        m_lastFocusNodeXMovement = new Je();
        m_lastFocusNodeYMovement = new Je();
        GetLastFocusedNode() {
          return this.m_lastFocusNode;
        }
        GetLastFocusedMovementRect(e) {
          return "x" == e
            ? this.m_lastFocusNodeXMovement.GetRect()
            : "y" == e
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
        OnActivate(e) {
          (this.m_tsLastActivated = performance.now()),
            this.m_onActivateCallbacks.Dispatch(this, e),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
          for (let e = this.m_lastFocusNode; e; e = e.Parent)
            e.SetFocusWithin(!0);
        }
        OnDeactivate(e) {
          this.m_onDeactivateCallbacks.Dispatch(this, e),
            this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
            (this.m_bWasActiveForLastFocusChange = !1);
          for (let e = this.m_lastFocusNode; e; e = e.Parent)
            e.SetFocusWithin(!1);
        }
        OnContextActiveStateChanged(e) {
          this.m_onActiveFocusStateChangedCallbacks.Dispatch(e, this);
        }
        IsActiveFocusNavTree() {
          return this.m_Controller.IsActiveFocusNavTree(this);
        }
        TakeFocus(e, t = !1) {
          let r = !1;
          t
            ? (r = this.Root.BVisibleChildTakeFocus(e))
            : this.m_lastFocusNode && (r = this.m_lastFocusNode.BTakeFocus(e)),
            r || (r = this.Root.BTakeFocus(e)),
            r || this.TransferFocus(e, this.Root);
        }
        Activate(e = !1) {
          this.m_Controller.OnGamepadNavigationTreeActivated(
            this.FindModalDescendant() ?? this,
            e,
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
        MountNavTree(e) {
          this.m_window = e;
          const t = this.m_Root.Element;
          (t.__nav_tree = this),
            t.__nav_wrapper && t.__nav_wrapper.BindTree(this);
          const r = new W();
          return (
            this.m_valueIsMounted.Set(!0),
            r.Push(() => this.m_valueIsMounted.Set(!1)),
            this.m_ParentNavTree &&
              r.Push(this.m_ParentNavTree.AddChildNavTree(this)),
            "navigationapi" == this.m_Properties.historyMode &&
              r.Push(je(this)),
            r.GetUnregisterFunc()
          );
        }
        SetIsEnabled(e) {
          this.m_bIsEnabled != e &&
            ((this.m_bIsEnabled = e),
            this.m_bIsEnabled || (this.m_tsLastActivated = void 0));
        }
        GetParentEmbeddedNavTree() {
          return this.m_Properties.bIsEmbeddedInLegacyTree
            ? this.m_ParentNavTree
            : void 0;
        }
        RegisterOnUnhandledButtonCallback(e) {
          return (
            this.m_rgOnUnhandledButton.push(e),
            () => {
              F.x9(this.m_rgOnUnhandledButton, e);
            }
          );
        }
        RegisterGlobalButtonHandler(e, t, r) {
          const i = { button: e, fnCallback: t, description: r };
          return (
            this.m_rgGlobalButtonHandlers.push(i),
            this.UpdateRootActionDescriptionMap(),
            () => {
              F.x9(this.m_rgGlobalButtonHandlers, i),
                this.UpdateRootActionDescriptionMap();
            }
          );
        }
        UpdateRootActionDescriptionMap() {
          const e = {};
          for (const { button: t, description: r } of this
            .m_rgGlobalButtonHandlers)
            r && (e[t] = r);
          this.m_Root.SetProperties({
            ...this.m_Root.m_Properties,
            actionDescriptionMap: e,
          });
        }
        SetOnGlobalButtonDown(e) {
          this.m_onGlobalButtonDown = e;
        }
        OnRootButtonDown(e) {
          for (let t = this; t; t = t.Parent)
            if (
              (t.m_onGlobalButtonDown && t.m_onGlobalButtonDown(e),
              e.cancelBubble)
            )
              return !1;
          return this.HandleButtonDownEventAsLogicalEvent(e);
        }
        TryRootButtonListeners(e) {
          for (const { button: t, fnCallback: r } of this
            .m_rgGlobalButtonHandlers)
            if (t == e.detail.button && !1 !== r(e)) return !1;
          for (const t of this.m_rgOnUnhandledButton)
            if (!1 !== t(e)) return !1;
          return !0;
        }
        HandleButtonDownEventAsLogicalEvent(e) {
          let { bUnhandled: t, bHadLogicalEventMapping: r } = (function (e) {
            const t = [
              s.pR.DIR_UP,
              s.pR.DIR_DOWN,
              s.pR.DIR_LEFT,
              s.pR.DIR_RIGHT,
            ];
            let r = !0,
              i = !1,
              n = o[e.detail.button];
            return (
              n
                ? ((i = !0), (r = u(e.target, n, e.detail)))
                : -1 !== t.indexOf(e.detail.button) &&
                  ((i = !0), (r = u(e.target, "vgp_ondirection", e.detail))),
              { bUnhandled: r, bHadLogicalEventMapping: i }
            );
          })(e);
          return (
            Ye(
              `Logical gamepad Event fired: ${s.pR[e.detail.button]}, had logical event: ${r}, was handled: ${!t}`,
            ),
            t && (t = this.TryRootButtonListeners(e)),
            t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
            e.stopPropagation(),
            t
          );
        }
        m_DeferredFocus = new Ze(this);
        get DeferredFocus() {
          return this.m_DeferredFocus;
        }
        AddChildNavTree(e) {
          return (
            this.m_rgChildNavTrees.push(e),
            this.OnChildTreesChangedCallbacks.Dispatch("add", e),
            () => {
              F.x9(this.m_rgChildNavTrees, e),
                this.OnChildTreesChangedCallbacks.Dispatch("remove", e);
            }
          );
        }
        TransferFocus(e, t, r) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(e, t, r),
          );
        }
        TransferFocusInternal(e, t, r) {
          const n = this.m_lastFocusNode;
          if (
            n == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          Qe(
            `Transfer focus in ${this.id}, source: ${e && i[e]}, from/to:`,
            n?.m_element,
            t?.m_element,
          );
          const a = { blurredNode: n, focusedNode: t, focusSource: e },
            s = (function (e, t) {
              if (!t || !e) return null;
              let r = t,
                i = e;
              for (; r.GetDepth() > i.GetDepth() && r.Parent; ) r = r.Parent;
              for (; i.GetDepth() > r.GetDepth() && i.Parent; ) i = i.Parent;
              for (; r != i && r && i; ) (r = r.Parent), (i = i.Parent);
              return r;
            })(n, t);
          if (n) {
            n.SetHasFocus(!1);
            for (let e = n; e && e != s; e = e.Parent) e.SetFocusWithin(!1);
          }
          if (t) {
            t.SetHasFocus(!0);
            for (let e = t; e && e != s; e = e.Parent) e.SetFocusWithin(!0);
          }
          let o = this.m_context.OnFocusChangeStart(e, this, n, t);
          t && t.SetDOMFocusAndScroll(e, n),
            n &&
              (u(n.Element, "vgp_onblur", a),
              !n.m_FocusRing ||
                (t && n.m_FocusRing == t.m_FocusRing) ||
                n.m_FocusRing.OnBlur(e, n, t)),
            t &&
              (u(t.Element, "vgp_onfocus", a),
              t.m_FocusRing &&
                (n && t.m_FocusRing == n.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, n, t)
                  : t.m_FocusRing.OnFocus(e, t, n))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == r
              ? this.m_lastFocusNodeXMovement.SetNode(t?.Element)
              : "y" == r
                ? this.m_lastFocusNodeYMovement.SetNode(t?.Element)
                : (this.m_lastFocusNodeXMovement.Reset(),
                  this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(o);
        }
      }
      class Je {
        m_element;
        m_rect;
        SetNode(e) {
          (this.m_element = e),
            (this.m_rect = e ? e.getBoundingClientRect() : void 0);
        }
        Reset() {
          this.SetNode(void 0);
        }
        GetRect() {
          return this.m_element?.isConnected
            ? this.m_element.getBoundingClientRect()
            : this.m_rect;
        }
      }
      class Ze {
        m_tree;
        m_target;
        m_interval;
        m_schExecuteQueuedFocus = new z();
        m_bSuppressed = !1;
        constructor(e) {
          this.m_tree = e;
        }
        RequestFocus(e, t) {
          e
            ? ((this.m_target = { ...t, node: e }),
              this.m_interval ||
                this.m_bSuppressed ||
                this.m_schExecuteQueuedFocus.Schedule(1, () => {
                  (this.m_interval = void 0), this.ExecuteQueuedFocus();
                }))
            : (this.m_target = void 0);
        }
        BHasQueuedFocusNode() {
          return !!this.m_target;
        }
        BIsQueuedFocusNode(e) {
          return this.m_target && this.m_target.node == e;
        }
        SuppressFocus() {
          (this.m_bSuppressed = !0), this.ClearInterval();
        }
        Reset() {
          (this.m_bSuppressed = !1),
            (this.m_target = void 0),
            this.ClearInterval();
        }
        ClearInterval() {
          this.m_schExecuteQueuedFocus.Cancel();
        }
        ExecuteQueuedFocus() {
          if (((this.m_bSuppressed = !1), this.m_target)) {
            const { node: e, bFocusDescendant: t } = this.m_target;
            (this.m_target = void 0),
              Qe(
                `DeferredFocus in ${this.m_tree.id} - focusing ${t ? "descendant of" : "node"} ${e.NavKey}`,
              ),
              t
                ? e.BChildTakeFocus(i.AUTOFOCUS) ||
                  this.m_tree.TransferFocus(i.AUTOFOCUS, e)
                : e.BTakeFocus(i.AUTOFOCUS) ||
                  this.m_tree.TakeFocus(i.AUTOFOCUS);
          }
        }
      }
      const et = new L("FocusNavigation").Debug;
      class tt {
        m_rootWindow;
        m_activeWindow;
        m_activeBrowserView;
        m_valueIsActive = P(!1);
        m_controller;
        m_rgGamepadNavigationTrees = [];
        m_LastActiveNavTree;
        m_LastActiveFocusNavTree;
        m_bMounted = !0;
        m_schDeferredActivate = new z();
        m_FocusChangedCallbacks = new E.l();
        m_NavTreeActivatedOrReactivatedCallbacks = new E.l();
        m_bIsGamepadInputSuppressed = !1;
        m_bVR = !1;
        constructor(e, t, r, i) {
          (this.m_controller = e),
            (this.m_rootWindow = t),
            (this.m_activeWindow = t),
            (this.m_bIsGamepadInputSuppressed = r),
            (this.m_bVR = i);
        }
        get RootWindow() {
          return this.m_rootWindow;
        }
        get ActiveWindow() {
          return this.m_activeWindow;
        }
        FindNavTreeInFocusedWindow() {
          for (
            let e = this.m_rgGamepadNavigationTrees.length - 1;
            e >= 0;
            e--
          ) {
            const t = this.m_rgGamepadNavigationTrees[e];
            if (t.Window?.document.hasFocus()) return t;
          }
        }
        FindNavTreeInWindow(e, t = !0) {
          for (
            let r = this.m_rgGamepadNavigationTrees.length - 1;
            r >= 0;
            r--
          ) {
            const i = this.m_rgGamepadNavigationTrees[r];
            if ((!t || i.BIsEnabled()) && i.Window == e) return i;
          }
        }
        OnMount(e) {
          e == this.m_rootWindow && (this.m_bMounted = !0);
        }
        Destroy(e) {
          e == this.m_rootWindow
            ? (et(`${this.LogName(e)} Destroying context for window`),
              (this.m_bMounted = !1),
              this.m_schDeferredActivate.Cancel(),
              this.SetActive(!1, e),
              this.m_controller.DestroyContext(this))
            : et(`${this.LogName(e)} Child window destroyed`);
        }
        SetActive(e, t, r = void 0) {
          this.m_controller.BatchedUpdate(() => {
            if (e && !this.m_controller.BCanActivateContext(this))
              return void et(
                `${this.LogName(t)} Skipping context activation due to CFocusNavWindowContext`,
              );
            const i = this.m_valueIsActive.Value != e;
            e
              ? ((this.m_activeWindow = t),
                (this.m_activeBrowserView = r),
                this.m_controller.OnContextActivated(this))
              : ((this.m_activeBrowserView = void 0),
                this.m_controller.OnContextDeactivated(this, !1)),
              this.m_valueIsActive.Set(e),
              i &&
                this.m_LastActiveFocusNavTree?.OnContextActiveStateChanged(e);
          });
        }
        OnActivate(e) {
          (this.BIsActive() &&
            this.m_activeWindow == e &&
            void 0 === this.m_activeBrowserView) ||
            (et(
              `${this.LogName(e)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
            ),
            this.SetActive(!0, e));
        }
        OnActivateBrowserView(e, t) {
          (this.BIsActive() &&
            this.m_activeWindow == e &&
            this.m_activeBrowserView == t) ||
            (et(`${this.LogName(e)} Browser View "${t}" activated in context`),
            this.SetActive(!0, e, t));
        }
        OnDeactivate(e) {
          this.m_activeWindow == e
            ? (et(`${this.LogName(e)} Deactivate context for window`),
              this.SetActive(!1, e))
            : et(
                `${this.LogName(e)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
              );
        }
        OnDeactivateBrowserView(e, t) {
          et(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
            this.m_activeBrowserView == t && this.SetActive(!1, e, t);
        }
        SetGamepadInputSuppressed(e) {
          this.m_bIsGamepadInputSuppressed = e;
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
        AddNavTree(e) {
          this.m_rgGamepadNavigationTrees.push(e);
        }
        LogName(e = void 0) {
          return e && this.m_rootWindow != e
            ? `(${this.m_rootWindow.name}) > (${e.name})`
            : `(${this.m_rootWindow.name})`;
        }
        FindNavTreeToActivate() {
          for (
            let e = this.m_rgGamepadNavigationTrees.length - 1;
            e >= 0;
            e--
          ) {
            const t = this.m_rgGamepadNavigationTrees[e];
            if (!t.BIsEnabled()) continue;
            return t.FindModalDescendant() ?? t;
          }
        }
        SetActiveNavTree(e, t = !1) {
          if (e && this.m_LastActiveNavTree == e)
            return void this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(
              e,
            );
          const r = this.m_LastActiveNavTree;
          r && F.x9(this.m_rgGamepadNavigationTrees, r),
            e || (e = this.FindNavTreeToActivate());
          const i = this.m_LastActiveFocusNavTree == e;
          e && F.x9(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            et(
              `${this.LogName(e?.Window)} Move from nav tree ${r?.id} to nav tree ${e?.id} ${t ? "taking focus" : "no focus"}`,
            ),
            r && this.m_rgGamepadNavigationTrees.push(r),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e),
              i ||
                !t ||
                e.DeferredFocus.BHasQueuedFocusNode() ||
                e.DeferredFocus.RequestFocus(e.Root),
              this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(e)),
            r && r != this.m_LastActiveFocusNavTree && r.OnDeactivate(e),
            e && !i && e.OnActivate(r);
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(void 0, !0),
            F.x9(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        async UnregisterGamepadNavigationTree(e) {
          F.x9(this.m_rgGamepadNavigationTrees, e),
            et(
              `(${this.m_rootWindow.name}) Unregister tree ${e?.id} ${this.m_LastActiveFocusNavTree == e ? "(was active)" : "(inactive)"}`,
            ),
            e.SetIsEnabled(!1),
            this.m_LastActiveNavTree == e &&
              this.m_bMounted &&
              (await this.m_schDeferredActivate.AsyncSchedule(1, () => {
                (this.m_LastActiveNavTree && this.m_LastActiveNavTree != e) ||
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
        OnFocusChangeStart(e, t, r, i) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = {
                  source: e,
                  from: r || void 0,
                  to: i || void 0,
                })
              : this.m_ActiveFocusChange &&
                (!this.m_ActiveFocusChange.from &&
                  r &&
                  (this.m_ActiveFocusChange.from = r),
                i && (this.m_ActiveFocusChange.to = i)),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          if (
            (this.m_iFocusChangeStack--,
            j(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const {
              source: e,
              from: t,
              to: r,
            } = this.m_ActiveFocusChange ?? {};
            this.m_FocusChangedCallbacks.Dispatch(e, t, r);
          }
        }
        get NavigationSourceGlyphInfo() {
          return this.m_controller.NavigationSourceGlyphInfo;
        }
      }
      var rt = r(663),
        it = r.n(rt);
      const nt = rt.BinaryReader.prototype,
        at = rt.BinaryWriter.prototype;
      function st(e) {
        const t = {},
          { fields: r } = e;
        for (const e in r) {
          const i = r[e];
          t[i.n] = i;
        }
        return t;
      }
      function ot(e, t) {
        const { proto: r, fields: i } = e,
          n = new r();
        if (null == t) return n;
        for (const e in i) {
          const { n: r, c: a, r: s, d: o, q: l } = i[e];
          if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
          const c = t[e];
          a
            ? s
              ? rt.Message.setRepeatedWrapperField(
                  n,
                  r,
                  Array.isArray(c) ? c.map((e) => a.fromObject(e)) : [],
                )
              : rt.Message.setWrapperField(n, r, a.fromObject(c))
            : rt.Message.setField(n, r, c);
        }
        return n;
      }
      function lt(e, t, r) {
        const { proto: i, fields: n } = e,
          a = {};
        for (const e in n) {
          const { n: i, c: s, r: o, d: l, q: c } = n[e];
          if (s)
            if (o)
              a[e] = rt.Message.toObjectList(
                rt.Message.getRepeatedWrapperField(r, s, i),
                s.toObject,
                t,
              );
            else {
              const n = rt.Message.getWrapperField(r, s, i, c ? 1 : 0);
              n && (a[e] = s.toObject(t, n));
            }
          else {
            const t = rt.Message.getFieldWithDefault(
              r,
              i,
              void 0 !== l ? l : null,
            );
            (null !== t || c) && (a[e] = t);
          }
        }
        return t && (a.$jspbMessageInstance = r), a;
      }
      function ct(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const i = e[r.getFieldNumber()];
          if (i) {
            const { n: e, c: n, r: a, d: s, q: o, br: l } = i;
            if (n) {
              const i = new n();
              r.readMessage(i, n.deserializeBinaryFromReader),
                a
                  ? rt.Message.addToRepeatedWrapperField(t, e, i, n)
                  : rt.Message.setWrapperField(t, e, i);
            } else if (l) {
              const i = l.call(r);
              a
                ? rt.Message.addToRepeatedField(t, e, i)
                : rt.Message.setField(t, e, i);
            } else
              console.assert(
                !!l,
                `Reader func not set for field number ${e} in class ${n}`,
              ),
                r.skipField();
          } else r.skipField();
        }
        return t;
      }
      function ut(e, t, r) {
        const { fields: i } = e;
        for (const e in i) {
          const { n, c: a, r: s, d: o, q: l, bw: c } = i[e];
          if (a)
            if (s) {
              const e = rt.Message.getRepeatedWrapperField(t, a, n);
              ((e && e.length) || l) &&
                r.writeRepeatedMessage(n, e, a.serializeBinaryToWriter);
            } else {
              const e = rt.Message.getWrapperField(t, a, n, l ? 1 : 0);
              e && r.writeMessage(n, e, a.serializeBinaryToWriter);
            }
          else if (c) {
            const e = rt.Message.getField(t, n);
            void 0 !== e && c.call(r, n, e);
          } else
            console.assert(
              !!c,
              `Writer func not set for field number ${n} in class ${a}`,
            );
        }
      }
      function dt(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const i = e.fields[r],
            { n, c: a, r: s, d: o, q: l } = i;
          Object.prototype.hasOwnProperty.call(i, "d")
            ? (t.prototype[r] = mt(rt.Message.getFieldWithDefault, n, o))
            : (t.prototype[r] = a
                ? s
                  ? mt(rt.Message.getRepeatedWrapperField, a, n)
                  : gt(a, n)
                : mt(rt.Message.getField, n)),
            (t.prototype[`set_${r}`] = ht(
              a
                ? s
                  ? rt.Message.setRepeatedWrapperField
                  : rt.Message.setWrapperField
                : rt.Message.setField,
              n,
            )),
            s && (t.prototype[`add_${r}`] = _t(n, a));
        }
      }
      function mt(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function gt(e, t) {
        return function (r = !0) {
          return rt.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function ht(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function _t(e, t) {
        return t
          ? function (r, i) {
              return rt.Message.addToRepeatedWrapperField(this, e, r, t, i);
            }
          : function (t, r) {
              rt.Message.addToRepeatedField(this, e, t, r);
            };
      }
      rt.Message;
      rt.Message;
      class pt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pt.prototype.dst_gcid_queue || dt(pt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  dst_gcid_queue: {
                    n: 1,
                    br: nt.readUint64String,
                    bw: at.writeUint64String,
                  },
                  dst_gc_dir_index: {
                    n: 2,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = st(pt.M())), pt.sm_mbf;
        }
        toObject(e = !1) {
          return pt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(pt.M(), e, t);
        }
        static fromObject(e) {
          return ot(pt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new pt();
          return pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(pt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(pt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgGCRoutingProtoBufHeader";
        }
      }
      class ft extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ft.prototype.steamid || dt(ft.M()),
            rt.Message.initialize(this, e, 0, -1, [27, 41], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  steamid: {
                    n: 1,
                    br: nt.readFixed64String,
                    bw: at.writeFixed64String,
                  },
                  client_sessionid: {
                    n: 2,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  routing_appid: {
                    n: 3,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  jobid_source: {
                    n: 10,
                    d: "18446744073709551615",
                    br: nt.readFixed64String,
                    bw: at.writeFixed64String,
                  },
                  jobid_target: {
                    n: 11,
                    d: "18446744073709551615",
                    br: nt.readFixed64String,
                    bw: at.writeFixed64String,
                  },
                  target_job_name: {
                    n: 12,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  seq_num: { n: 24, br: nt.readInt32, bw: at.writeInt32 },
                  eresult: { n: 13, d: 2, br: nt.readInt32, bw: at.writeInt32 },
                  error_message: {
                    n: 14,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  ip: { n: 15, br: nt.readUint32, bw: at.writeUint32 },
                  ip_v6: { n: 29, br: nt.readBytes, bw: at.writeBytes },
                  auth_account_flags: {
                    n: 16,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  token_source: {
                    n: 22,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  admin_spoofing_user: {
                    n: 23,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  transport_error: {
                    n: 17,
                    d: 1,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  messageid: {
                    n: 18,
                    d: "18446744073709551615",
                    br: nt.readUint64String,
                    bw: at.writeUint64String,
                  },
                  publisher_group_id: {
                    n: 19,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  sysid: { n: 20, br: nt.readUint32, bw: at.writeUint32 },
                  webapi_key_id: {
                    n: 25,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  is_from_external_source: {
                    n: 26,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  forward_to_sysid: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: nt.readUint32,
                    pbr: nt.readPackedUint32,
                    bw: at.writeRepeatedUint32,
                  },
                  cm_sysid: { n: 28, br: nt.readUint32, bw: at.writeUint32 },
                  launcher_type: {
                    n: 31,
                    d: 0,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  realm: { n: 32, d: 0, br: nt.readUint32, bw: at.writeUint32 },
                  timeout_ms: {
                    n: 33,
                    d: -1,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  debug_source: {
                    n: 34,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  debug_source_string_index: {
                    n: 35,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  token_id: {
                    n: 36,
                    br: nt.readUint64String,
                    bw: at.writeUint64String,
                  },
                  routing_gc: { n: 37, c: pt },
                  session_disposition: {
                    n: 38,
                    d: 0,
                    br: nt.readEnum,
                    bw: at.writeEnum,
                  },
                  wg_token: { n: 39, br: nt.readString, bw: at.writeString },
                  webui_auth_key: {
                    n: 40,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  exclude_client_sessionids: {
                    n: 41,
                    r: !0,
                    q: !0,
                    br: nt.readInt32,
                    pbr: nt.readPackedInt32,
                    bw: at.writeRepeatedInt32,
                  },
                  admin_request_spoofing_steamid: {
                    n: 43,
                    br: nt.readFixed64String,
                    bw: at.writeFixed64String,
                  },
                  is_valveds: { n: 44, br: nt.readBool, bw: at.writeBool },
                  trace_tag: {
                    n: 45,
                    br: nt.readFixed64String,
                    bw: at.writeFixed64String,
                  },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = st(ft.M())), ft.sm_mbf;
        }
        toObject(e = !1) {
          return ft.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ft.M(), e, t);
        }
        static fromObject(e) {
          return ot(ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ft();
          return ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgProtoBufHeader";
        }
      }
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      rt.Message;
      class bt {
        m_nOffset;
        m_nLength;
        m_viewPacket;
        m_rgubPacket;
        m_iGet;
        m_iPut;
        constructor(e, t = 0, r) {
          (this.m_nOffset = t || 0),
            e instanceof Uint8Array || e instanceof DataView
              ? ((this.m_nLength = r || e.byteLength - this.m_nOffset),
                (this.m_nOffset += e.byteOffset),
                (this.m_viewPacket = new DataView(
                  e.buffer,
                  this.m_nOffset,
                  this.m_nLength,
                )))
              : ((this.m_nLength = r || e.byteLength - this.m_nOffset),
                (this.m_viewPacket = new DataView(
                  e,
                  this.m_nOffset,
                  this.m_nLength,
                ))),
            (this.m_rgubPacket = new Uint8Array(
              this.m_viewPacket.buffer,
              this.m_viewPacket.byteOffset,
              this.m_viewPacket.byteLength,
            )),
            (this.m_iGet = 0),
            (this.m_iPut = 0);
        }
        TellGet() {
          return this.m_iGet + this.m_viewPacket.byteOffset;
        }
        GetPacket() {
          return this.m_viewPacket.buffer;
        }
        GetUint8() {
          return this.m_viewPacket.getUint8(this.m_iGet++);
        }
        GetUint32(e = !0) {
          const t = this.m_viewPacket.getUint32(this.m_iGet, e);
          return (this.m_iGet += 4), t;
        }
        SeekGetHead(e = 0) {
          this.m_iGet = e || 0;
        }
        SeekGetCurrent(e) {
          this.m_iGet += e;
        }
        TellPut() {
          return this.m_iPut + this.m_viewPacket.byteOffset;
        }
        TellMaxPut() {
          return this.m_viewPacket.byteLength;
        }
        PutUint8(e) {
          this.m_viewPacket.setUint8(this.m_iPut++, e);
        }
        PutUint32(e, t = !0) {
          this.m_viewPacket.setUint32(this.m_iPut, e, t), (this.m_iPut += 4);
        }
        PutBytes(e) {
          this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
        }
        SeekPut(e) {
          this.m_iPut += e;
        }
        GetCountBytesRemaining() {
          return this.m_viewPacket.byteLength - this.m_iGet;
        }
      }
      class Bt {
        static sm_ErrorReportingStore;
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        static InitHeaderFromPacket(e) {
          return new Bt(void 0, e);
        }
        m_eMsg;
        m_bValid;
        m_netPacket;
        m_cubHeader;
        m_header;
        m_body;
        constructor(e, t, r, i, n, a) {
          if (i)
            (this.m_eMsg = i.m_eMsg),
              (this.m_bValid = i.m_bValid),
              this.m_bValid &&
                ((this.m_netPacket = i.m_netPacket),
                (this.m_cubHeader = i.m_cubHeader),
                (this.m_header = i.m_header),
                this.InitForType(r));
          else {
            if (((this.m_header = new ft(null)), (this.m_bValid = !0), t))
              if (
                ((this.m_netPacket = t),
                this.m_netPacket.SeekGetHead(),
                (this.m_eMsg = this.m_netPacket.GetUint32()),
                2147483648 & this.m_eMsg)
              ) {
                (this.m_eMsg = 2147483647 & this.m_eMsg),
                  (this.m_cubHeader = this.m_netPacket.GetUint32());
                try {
                  ft.deserializeBinaryFromReader(
                    this.m_header,
                    new rt.BinaryReader(
                      this.m_netPacket.GetPacket(),
                      this.m_netPacket.TellGet(),
                      this.m_cubHeader,
                    ),
                  ),
                    this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                    r && this.InitForType(r);
                } catch (e) {
                  console.error("Exception deserializing protobuf", e),
                    (this.m_bValid = !1);
                }
              } else this.m_bValid = !1;
            else
              e && (this.m_eMsg = e),
                a && r
                  ? (this.m_body = r.fromObject(a))
                  : r && (this.m_body = new r());
            n && this.m_header.set_jobid_target(n.Hdr().jobid_target());
          }
        }
        InitForType(e) {
          (this.m_body = new e()),
            this.m_netPacket &&
              (this.m_netPacket.SeekGetHead(8 + this.m_cubHeader),
              this.ReadBodyFromBuffer(e, this.m_netPacket));
        }
        ReadBodyFromBuffer(e, t) {
          try {
            e.deserializeBinaryFromReader(
              this.m_body,
              new rt.BinaryReader(
                t.GetPacket(),
                t.TellGet(),
                t.GetCountBytesRemaining(),
              ),
            );
          } catch (e) {
            this.m_bValid = !1;
            const t = Bt.sm_ErrorReportingStore,
              r = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
            t &&
              t.ReportError(new Error(r), { bIncludeMessageInIdentifier: !0 }),
              console.warn(r),
              console.log(e.stack || e);
          }
        }
        BIsValid() {
          return this.m_bValid;
        }
        Body() {
          return this.m_body;
        }
        SetBodyJSON(e) {
          (e.toObject = () => e), (this.m_body = e);
        }
        Hdr() {
          return this.m_header;
        }
        GetEMsg() {
          return this.m_eMsg;
        }
        SetEMsg(e) {
          this.m_eMsg = e;
        }
        GetEResult() {
          return this.Hdr().eresult();
        }
        BSuccess() {
          return 1 == this.Hdr().eresult();
        }
        GetErrorMessage() {
          return this.Hdr().error_message()
            ? this.Hdr().error_message()
            : `eresult ${this.Hdr().eresult()}`;
        }
        Serialize() {
          const e = this.m_header.serializeBinary(),
            t = this.m_body.serializeBinary(),
            r = 2147483648 | this.m_eMsg,
            i = new Uint8Array(8 + e.length + t.length),
            n = new bt(i);
          return (
            n.PutUint32(r),
            n.PutUint32(e.length),
            n.PutBytes(e),
            n.PutBytes(t),
            i
          );
        }
        SerializeBody() {
          const e = this.m_body.serializeBinary(),
            t = new Uint8Array(e.length);
          return new bt(t).PutBytes(e), t;
        }
        DEBUG_ToObject() {
          return {};
        }
        DEBUG_LogToConsole() {
          0;
        }
      }
      class vt extends Bt {
        constructor(e, t = 0, r, i, n) {
          super(t, r, e, i, void 0, n);
        }
        static InitFromPacket(e, t) {
          return new vt(e, 0, t);
        }
        static InitFromMsg(e, t) {
          return new vt(e, void 0, void 0, t);
        }
        static Init(e, t) {
          return new vt(e, t);
        }
        static InitFromObject(e, t) {
          return new vt(e, void 0, void 0, void 0, t);
        }
        Body() {
          return super.Body();
        }
        SetBodyFields(e) {
          for (const t in e)
            Array.isArray(e[t])
              ? this.Body()[`add_${t}`] &&
                e[t].forEach((e) => {
                  this.Body()[`add_${t}`](e);
                })
              : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t]);
        }
      }
      function yt(e, t) {
        return t instanceof vt ? t : vt.InitFromObject(e, t);
      }
      const wt = new (class {
        m_transport = null;
        m_registry = null;
        SetDefaultTransport(e) {
          null != this.m_transport &&
            console.error(
              "Multiple attempts to set a default WebUI transport: overriding previous",
            ),
            (this.m_transport = e);
        }
        GetDefaultTransport() {
          return this.m_transport;
        }
        SetDefaultHandlerRegistry(e) {
          null != this.m_registry &&
            console.error(
              "Multiple attempts to set a default WebUI message handler registry: overriding previous",
            ),
            (this.m_registry = e);
        }
        GetDefaultHandlerRegistry() {
          return this.m_registry;
        }
      })();
      function St() {
        return wt;
      }
      class Tt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tt.prototype.controller_index || dt(Tt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tt.sm_m ||
              (Tt.sm_m = {
                proto: Tt,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  dpad_up: { n: 2, br: nt.readBool, bw: at.writeBool },
                  dpad_down: { n: 3, br: nt.readBool, bw: at.writeBool },
                  dpad_left: { n: 4, br: nt.readBool, bw: at.writeBool },
                  dpad_right: { n: 5, br: nt.readBool, bw: at.writeBool },
                  button_south: { n: 6, br: nt.readBool, bw: at.writeBool },
                  button_east: { n: 7, br: nt.readBool, bw: at.writeBool },
                  button_west: { n: 8, br: nt.readBool, bw: at.writeBool },
                  button_north: { n: 9, br: nt.readBool, bw: at.writeBool },
                  button_back_view: {
                    n: 10,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  button_start_options: {
                    n: 11,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  button_steam: { n: 12, br: nt.readBool, bw: at.writeBool },
                  button_quick_access: {
                    n: 13,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  button_mute_capture: {
                    n: 14,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  left_stick_click: {
                    n: 15,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  left_stick_touch: {
                    n: 16,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  left_stick_deflect: {
                    n: 17,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  right_stick_click: {
                    n: 18,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  right_stick_touch: {
                    n: 19,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  right_stick_deflect: {
                    n: 20,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  center_trackpad_touch: {
                    n: 21,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  center_trackpad_click: {
                    n: 22,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  left_trackpad_touch: {
                    n: 23,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  left_trackpad_click: {
                    n: 24,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  right_trackpad_touch: {
                    n: 25,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  right_trackpad_click: {
                    n: 26,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  left_bumper: { n: 27, br: nt.readBool, bw: at.writeBool },
                  left_trigger: { n: 28, br: nt.readBool, bw: at.writeBool },
                  l4: { n: 29, br: nt.readBool, bw: at.writeBool },
                  l5: { n: 30, br: nt.readBool, bw: at.writeBool },
                  left_aux: { n: 31, br: nt.readBool, bw: at.writeBool },
                  right_bumper: { n: 32, br: nt.readBool, bw: at.writeBool },
                  right_trigger: { n: 33, br: nt.readBool, bw: at.writeBool },
                  r4: { n: 34, br: nt.readBool, bw: at.writeBool },
                  r5: { n: 35, br: nt.readBool, bw: at.writeBool },
                  right_aux: { n: 36, br: nt.readBool, bw: at.writeBool },
                  button_state_bits: {
                    n: 37,
                    br: nt.readUint64String,
                    bw: at.writeUint64String,
                  },
                },
              }),
            Tt.sm_m
          );
        }
        static MBF() {
          return Tt.sm_mbf || (Tt.sm_mbf = st(Tt.M())), Tt.sm_mbf;
        }
        toObject(e = !1) {
          return Tt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Tt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Tt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Tt();
          return Tt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Tt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Tt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerButtonStateChanged_Notification";
        }
      }
      class Ct extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ct.prototype.x || dt(Ct.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ct.sm_m ||
              (Ct.sm_m = {
                proto: Ct,
                fields: {
                  x: { n: 1, br: nt.readFloat, bw: at.writeFloat },
                  y: { n: 2, br: nt.readFloat, bw: at.writeFloat },
                },
              }),
            Ct.sm_m
          );
        }
        static MBF() {
          return Ct.sm_mbf || (Ct.sm_mbf = st(Ct.M())), Ct.sm_mbf;
        }
        toObject(e = !1) {
          return Ct.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ct.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ct.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ct();
          return Ct.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ct.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ct.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ct.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerVector2";
        }
      }
      class Mt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mt.prototype.x || dt(Mt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mt.sm_m ||
              (Mt.sm_m = {
                proto: Mt,
                fields: {
                  x: { n: 1, br: nt.readFloat, bw: at.writeFloat },
                  y: { n: 2, br: nt.readFloat, bw: at.writeFloat },
                  z: { n: 3, br: nt.readFloat, bw: at.writeFloat },
                },
              }),
            Mt.sm_m
          );
        }
        static MBF() {
          return Mt.sm_mbf || (Mt.sm_mbf = st(Mt.M())), Mt.sm_mbf;
        }
        toObject(e = !1) {
          return Mt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Mt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Mt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Mt();
          return Mt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Mt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Mt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Mt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerVector3";
        }
      }
      class It extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            It.prototype.w || dt(It.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            It.sm_m ||
              (It.sm_m = {
                proto: It,
                fields: {
                  w: { n: 1, br: nt.readFloat, bw: at.writeFloat },
                  x: { n: 2, br: nt.readFloat, bw: at.writeFloat },
                  y: { n: 3, br: nt.readFloat, bw: at.writeFloat },
                  z: { n: 4, br: nt.readFloat, bw: at.writeFloat },
                },
              }),
            It.sm_m
          );
        }
        static MBF() {
          return It.sm_mbf || (It.sm_mbf = st(It.M())), It.sm_mbf;
        }
        toObject(e = !1) {
          return It.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(It.M(), e, t);
        }
        static fromObject(e) {
          return ot(It.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new It();
          return It.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(It.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(It.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return It.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerQuaternion";
        }
      }
      class Rt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rt.prototype.pitch || dt(Rt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rt.sm_m ||
              (Rt.sm_m = {
                proto: Rt,
                fields: {
                  pitch: { n: 1, br: nt.readFloat, bw: at.writeFloat },
                  yaw: { n: 2, br: nt.readFloat, bw: at.writeFloat },
                  roll: { n: 3, br: nt.readFloat, bw: at.writeFloat },
                },
              }),
            Rt.sm_m
          );
        }
        static MBF() {
          return Rt.sm_mbf || (Rt.sm_mbf = st(Rt.M())), Rt.sm_mbf;
        }
        toObject(e = !1) {
          return Rt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Rt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Rt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Rt();
          return Rt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Rt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Rt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ControllerGyroEulerAngles";
        }
      }
      class At extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            At.prototype.controller_index || dt(At.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            At.sm_m ||
              (At.sm_m = {
                proto: At,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  joystick_left: { n: 2, c: Ct },
                  joystick_right: { n: 3, c: Ct },
                  trackpad_left: { n: 4, c: Ct },
                  trackpad_right: { n: 5, c: Ct },
                  trackpad_center: { n: 6, c: Ct },
                  trackpad_pressure_left: {
                    n: 7,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  trackpad_pressure_right: {
                    n: 8,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  trigger_left: { n: 9, br: nt.readFloat, bw: at.writeFloat },
                  trigger_right: { n: 10, br: nt.readFloat, bw: at.writeFloat },
                },
              }),
            At.sm_m
          );
        }
        static MBF() {
          return At.sm_mbf || (At.sm_mbf = st(At.M())), At.sm_mbf;
        }
        toObject(e = !1) {
          return At.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(At.M(), e, t);
        }
        static fromObject(e) {
          return ot(At.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new At();
          return At.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(At.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(At.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return At.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAxesStateChange_Notification";
        }
      }
      class Ft extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ft.prototype.controller_index || dt(Ft.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ft.sm_m ||
              (Ft.sm_m = {
                proto: Ft,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  imu_index: { n: 2, br: nt.readUint32, bw: at.writeUint32 },
                  gyro_raw_quaternion: { n: 3, c: It },
                  gyro_filtered_quaternion: { n: 4, c: It },
                  imu_sensor_delta_time: {
                    n: 5,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  estimated_packet_rate: {
                    n: 6,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            Ft.sm_m
          );
        }
        static MBF() {
          return Ft.sm_mbf || (Ft.sm_mbf = st(Ft.M())), Ft.sm_mbf;
        }
        toObject(e = !1) {
          return Ft.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ft.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ft.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ft();
          return Ft.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ft.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ft.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ft.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroQuaternionChanged_Notification";
        }
      }
      class Et extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Et.prototype.controller_index || dt(Et.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Et.sm_m ||
              (Et.sm_m = {
                proto: Et,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  imu_index: { n: 2, br: nt.readUint32, bw: at.writeUint32 },
                  gyro_raw_speed: { n: 3, c: Rt },
                  gyro_filtered_speed: { n: 4, c: Rt },
                },
              }),
            Et.sm_m
          );
        }
        static MBF() {
          return Et.sm_mbf || (Et.sm_mbf = st(Et.M())), Et.sm_mbf;
        }
        toObject(e = !1) {
          return Et.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Et.M(), e, t);
        }
        static fromObject(e) {
          return ot(Et.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Et();
          return Et.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Et.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Et.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSpeedChanged_Notification";
        }
      }
      class Nt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nt.prototype.controller_index || dt(Nt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nt.sm_m ||
              (Nt.sm_m = {
                proto: Nt,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  imu_index: { n: 2, br: nt.readUint32, bw: at.writeUint32 },
                  acceleromter_1g: { n: 4, c: Mt },
                  trusted_gravity_1g: { n: 5, c: Mt },
                },
              }),
            Nt.sm_m
          );
        }
        static MBF() {
          return Nt.sm_mbf || (Nt.sm_mbf = st(Nt.M())), Nt.sm_mbf;
        }
        toObject(e = !1) {
          return Nt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Nt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Nt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Nt();
          return Nt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Nt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Nt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroAccelerometerChanged_Notification";
        }
      }
      class Dt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dt.prototype.controller_index || dt(Dt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dt.sm_m ||
              (Dt.sm_m = {
                proto: Dt,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  imu_index: { n: 2, br: nt.readUint32, bw: at.writeUint32 },
                  acceleromter_noise: {
                    n: 3,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  gyroscope_noise: {
                    n: 4,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  calibration_progress: {
                    n: 5,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  calibration_state: {
                    n: 6,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  gyroscope_noise_tolerance: {
                    n: 7,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  accelerometer_noise_tolerance: {
                    n: 8,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                },
              }),
            Dt.sm_m
          );
        }
        static MBF() {
          return Dt.sm_mbf || (Dt.sm_mbf = st(Dt.M())), Dt.sm_mbf;
        }
        toObject(e = !1) {
          return Dt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Dt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Dt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Dt();
          return Dt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Dt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Dt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Dt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroCalibration_Notification";
        }
      }
      class Ot extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ot.prototype.controller_index || dt(Ot.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ot.sm_m ||
              (Ot.sm_m = {
                proto: Ot,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  flow_mode: { n: 2, br: nt.readUint32, bw: at.writeUint32 },
                },
              }),
            Ot.sm_m
          );
        }
        static MBF() {
          return Ot.sm_mbf || (Ot.sm_mbf = st(Ot.M())), Ot.sm_mbf;
        }
        toObject(e = !1) {
          return Ot.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ot.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ot.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ot();
          return Ot.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ot.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ot.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ot.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerStateFlow_Request";
        }
      }
      class Pt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Pt();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Pt();
          return Pt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Pt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerStateFlow_Response";
        }
      }
      class Gt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gt.prototype.controller_index || dt(Gt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gt.sm_m ||
              (Gt.sm_m = {
                proto: Gt,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  side: { n: 2, br: nt.readInt32, bw: at.writeInt32 },
                },
              }),
            Gt.sm_m
          );
        }
        static MBF() {
          return Gt.sm_mbf || (Gt.sm_mbf = st(Gt.M())), Gt.sm_mbf;
        }
        toObject(e = !1) {
          return Gt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Gt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Gt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Gt();
          return Gt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Gt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Gt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Gt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSoftwareCalibration_Request";
        }
      }
      class zt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return zt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new zt();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new zt();
          return zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GyroSoftwareCalibration_Response";
        }
      }
      class Wt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wt.prototype.controller_index || dt(Wt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wt.sm_m ||
              (Wt.sm_m = {
                proto: Wt,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  dongle_index: { n: 2, br: nt.readUint32, bw: at.writeUint32 },
                  slot: { n: 3, br: nt.readUint32, bw: at.writeUint32 },
                },
              }),
            Wt.sm_m
          );
        }
        static MBF() {
          return Wt.sm_mbf || (Wt.sm_mbf = st(Wt.M())), Wt.sm_mbf;
        }
        toObject(e = !1) {
          return Wt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Wt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Wt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Wt();
          return Wt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Wt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Wt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Wt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonConnected_Request";
        }
      }
      class Lt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Lt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Lt();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Lt();
          return Lt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonConnected_Response";
        }
      }
      class xt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return xt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new xt();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new xt();
          return xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_SteamDonglesChanged_Notification";
        }
      }
      class Ut extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ut.prototype.controller_index || dt(Ut.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ut.sm_m ||
              (Ut.sm_m = {
                proto: Ut,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            Ut.sm_m
          );
        }
        static MBF() {
          return Ut.sm_mbf || (Ut.sm_mbf = st(Ut.M())), Ut.sm_mbf;
        }
        toObject(e = !1) {
          return Ut.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ut.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ut.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ut();
          return Ut.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ut.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ut.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ut.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_UnpairedTritonPluggedIn_Notification";
        }
      }
      class kt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kt.prototype.docked_puck_index || dt(kt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kt.sm_m ||
              (kt.sm_m = {
                proto: kt,
                fields: {
                  docked_puck_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            kt.sm_m
          );
        }
        static MBF() {
          return kt.sm_mbf || (kt.sm_mbf = st(kt.M())), kt.sm_mbf;
        }
        toObject(e = !1) {
          return kt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(kt.M(), e, t);
        }
        static fromObject(e) {
          return ot(kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new kt();
          return kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_UnpairedTritonDocked_Notification";
        }
      }
      class jt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            jt.prototype.docked_puck_index || dt(jt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            jt.sm_m ||
              (jt.sm_m = {
                proto: jt,
                fields: {
                  docked_puck_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            jt.sm_m
          );
        }
        static MBF() {
          return jt.sm_mbf || (jt.sm_mbf = st(jt.M())), jt.sm_mbf;
        }
        toObject(e = !1) {
          return jt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(jt.M(), e, t);
        }
        static fromObject(e) {
          return ot(jt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new jt();
          return jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(jt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(jt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_TritonUndocked_Notification";
        }
      }
      class Ht extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ht.prototype.controller_index || dt(Ht.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ht.sm_m ||
              (Ht.sm_m = {
                proto: Ht,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            Ht.sm_m
          );
        }
        static MBF() {
          return Ht.sm_mbf || (Ht.sm_mbf = st(Ht.M())), Ht.sm_mbf;
        }
        toObject(e = !1) {
          return Ht.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Ht.M(), e, t);
        }
        static fromObject(e) {
          return ot(Ht.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Ht();
          return Ht.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Ht.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Ht.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Ht.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerPairingChanged_Notification";
        }
      }
      class Vt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vt.prototype.docked_puck_index || dt(Vt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Vt.sm_m ||
              (Vt.sm_m = {
                proto: Vt,
                fields: {
                  docked_puck_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  target_dongle_index: {
                    n: 2,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            Vt.sm_m
          );
        }
        static MBF() {
          return Vt.sm_mbf || (Vt.sm_mbf = st(Vt.M())), Vt.sm_mbf;
        }
        toObject(e = !1) {
          return Vt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Vt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Vt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Vt();
          return Vt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Vt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Vt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Vt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonDocked_Request";
        }
      }
      class qt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new qt();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new qt();
          return qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_PairDongleTritonDocked_Response";
        }
      }
      class Kt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kt.prototype.include_bonds || dt(Kt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kt.sm_m ||
              (Kt.sm_m = {
                proto: Kt,
                fields: {
                  include_bonds: { n: 1, br: nt.readBool, bw: at.writeBool },
                },
              }),
            Kt.sm_m
          );
        }
        static MBF() {
          return Kt.sm_mbf || (Kt.sm_mbf = st(Kt.M())), Kt.sm_mbf;
        }
        toObject(e = !1) {
          return Kt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Kt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Kt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Kt();
          return Kt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Kt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Kt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Kt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Request";
        }
      }
      class $t extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $t.prototype.steam_controller_v1 || dt($t.M()),
            rt.Message.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $t.sm_m ||
              ($t.sm_m = {
                proto: $t,
                fields: {
                  steam_controller_v1: {
                    n: 1,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  ibex_internal: { n: 2, c: Qt, r: !0, q: !0 },
                  ibex_external: { n: 3, c: Qt, r: !0, q: !0 },
                },
              }),
            $t.sm_m
          );
        }
        static MBF() {
          return $t.sm_mbf || ($t.sm_mbf = st($t.M())), $t.sm_mbf;
        }
        toObject(e = !1) {
          return $t.toObject(e, this);
        }
        static toObject(e, t) {
          return lt($t.M(), e, t);
        }
        static fromObject(e) {
          return ot($t.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new $t();
          return $t.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct($t.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut($t.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return $t.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Response";
        }
      }
      class Qt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qt.prototype.index || dt(Qt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qt.sm_m ||
              (Qt.sm_m = {
                proto: Qt,
                fields: {
                  index: { n: 1, br: nt.readUint32, bw: at.writeUint32 },
                  dongle_serial_number: {
                    n: 2,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  paired_serial_number: {
                    n: 3,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  paired: { n: 4, br: nt.readBool, bw: at.writeBool },
                  docked: { n: 5, br: nt.readBool, bw: at.writeBool },
                },
              }),
            Qt.sm_m
          );
        }
        static MBF() {
          return Qt.sm_mbf || (Qt.sm_mbf = st(Qt.M())), Qt.sm_mbf;
        }
        toObject(e = !1) {
          return Qt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Qt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Qt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Qt();
          return Qt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Qt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Qt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Qt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetDongles_Response_Dongle";
        }
      }
      class Yt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Yt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Yt();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Yt();
          return Yt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Yt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ShouldTritonPairInOobe_Request";
        }
      }
      class Xt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Xt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Xt();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Xt();
          return Xt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Xt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_WaitInitialControllerStateEnumerated_Request";
        }
      }
      class Jt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Jt.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Jt();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Jt();
          return Jt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Jt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_WaitInitialControllerStateEnumerated_Response";
        }
      }
      class Zt extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zt.prototype.pair_type || dt(Zt.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Zt.sm_m ||
              (Zt.sm_m = {
                proto: Zt,
                fields: {
                  pair_type: { n: 1, br: nt.readEnum, bw: at.writeEnum },
                  controller_index: {
                    n: 2,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  dongle_index: { n: 3, br: nt.readUint32, bw: at.writeUint32 },
                },
              }),
            Zt.sm_m
          );
        }
        static MBF() {
          return Zt.sm_mbf || (Zt.sm_mbf = st(Zt.M())), Zt.sm_mbf;
        }
        toObject(e = !1) {
          return Zt.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Zt.M(), e, t);
        }
        static fromObject(e) {
          return ot(Zt.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Zt();
          return Zt.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Zt.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Zt.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Zt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ShouldTritonPairInOobe_Response";
        }
      }
      class er extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            er.prototype.controller_type || dt(er.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            er.sm_m ||
              (er.sm_m = {
                proto: er,
                fields: {
                  controller_type: {
                    n: 1,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  controller_style: {
                    n: 2,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  source: { n: 3, br: nt.readInt32, bw: at.writeInt32 },
                  input: { n: 4, br: nt.readInt32, bw: at.writeInt32 },
                },
              }),
            er.sm_m
          );
        }
        static MBF() {
          return er.sm_mbf || (er.sm_mbf = st(er.M())), er.sm_mbf;
        }
        toObject(e = !1) {
          return er.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(er.M(), e, t);
        }
        static fromObject(e) {
          return ot(er.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new er();
          return er.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(er.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(er.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CControllerOriginKey";
        }
      }
      class tr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tr.prototype.key || dt(tr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tr.sm_m ||
              (tr.sm_m = {
                proto: tr,
                fields: {
                  key: { n: 1, c: er },
                  localized_string: {
                    n: 2,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                },
              }),
            tr.sm_m
          );
        }
        static MBF() {
          return tr.sm_mbf || (tr.sm_mbf = st(tr.M())), tr.sm_mbf;
        }
        toObject(e = !1) {
          return tr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(tr.M(), e, t);
        }
        static fromObject(e) {
          return ot(tr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new tr();
          return tr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(tr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(tr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CControllerAccessibilityString";
        }
      }
      class rr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return rr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new rr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new rr();
          return rr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAccessibilityStrings_Request";
        }
      }
      class ir extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ir.prototype.strings || dt(ir.M()),
            rt.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ir.sm_m ||
              (ir.sm_m = {
                proto: ir,
                fields: { strings: { n: 1, c: tr, r: !0, q: !0 } },
              }),
            ir.sm_m
          );
        }
        static MBF() {
          return ir.sm_mbf || (ir.sm_mbf = st(ir.M())), ir.sm_mbf;
        }
        toObject(e = !1) {
          return ir.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ir.M(), e, t);
        }
        static fromObject(e) {
          return ot(ir.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ir();
          return ir.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ir.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ir.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerAccessibilityStrings_Response";
        }
      }
      class nr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nr.prototype.idx || dt(nr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nr.sm_m ||
              (nr.sm_m = {
                proto: nr,
                fields: {
                  idx: { n: 1, br: nt.readUint32, bw: at.writeUint32 },
                },
              }),
            nr.sm_m
          );
        }
        static MBF() {
          return nr.sm_mbf || (nr.sm_mbf = st(nr.M())), nr.sm_mbf;
        }
        toObject(e = !1) {
          return nr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(nr.M(), e, t);
        }
        static fromObject(e) {
          return ot(nr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new nr();
          return nr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(nr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(nr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerPowerMenu_Notification";
        }
      }
      class ar extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ar.prototype.controller_index || dt(ar.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ar.sm_m ||
              (ar.sm_m = {
                proto: ar,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            ar.sm_m
          );
        }
        static MBF() {
          return ar.sm_mbf || (ar.sm_mbf = st(ar.M())), ar.sm_mbf;
        }
        toObject(e = !1) {
          return ar.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(ar.M(), e, t);
        }
        static fromObject(e) {
          return ot(ar.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ar();
          return ar.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(ar.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(ar.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerDisconnected_Notification";
        }
      }
      class sr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            sr.prototype.controller_index || dt(sr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            sr.sm_m ||
              (sr.sm_m = {
                proto: sr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            sr.sm_m
          );
        }
        static MBF() {
          return sr.sm_mbf || (sr.sm_mbf = st(sr.M())), sr.sm_mbf;
        }
        toObject(e = !1) {
          return sr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(sr.M(), e, t);
        }
        static fromObject(e) {
          return ot(sr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new sr();
          return sr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(sr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(sr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Request";
        }
      }
      class or extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            or.prototype.slot || dt(or.M()),
            rt.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            or.sm_m ||
              (or.sm_m = {
                proto: or,
                fields: {
                  slot: { n: 1, c: lr, r: !0, q: !0 },
                  connection_type: { n: 2, br: nt.readEnum, bw: at.writeEnum },
                },
              }),
            or.sm_m
          );
        }
        static MBF() {
          return or.sm_mbf || (or.sm_mbf = st(or.M())), or.sm_mbf;
        }
        toObject(e = !1) {
          return or.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(or.M(), e, t);
        }
        static fromObject(e) {
          return ot(or.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new or();
          return or.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(or.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(or.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Response";
        }
      }
      class lr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lr.prototype.serial_number || dt(lr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lr.sm_m ||
              (lr.sm_m = {
                proto: lr,
                fields: {
                  serial_number: {
                    n: 1,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  active: { n: 2, br: nt.readBool, bw: at.writeBool },
                  type: { n: 3, br: nt.readEnum, bw: at.writeEnum },
                },
              }),
            lr.sm_m
          );
        }
        static MBF() {
          return lr.sm_mbf || (lr.sm_mbf = st(lr.M())), lr.sm_mbf;
        }
        toObject(e = !1) {
          return lr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(lr.M(), e, t);
        }
        static fromObject(e) {
          return ot(lr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new lr();
          return lr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(lr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(lr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetTritonPairingInfo_Response_Slot";
        }
      }
      class cr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            cr.prototype.controller_index || dt(cr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            cr.sm_m ||
              (cr.sm_m = {
                proto: cr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  slot_index: { n: 2, br: nt.readUint32, bw: at.writeUint32 },
                },
              }),
            cr.sm_m
          );
        }
        static MBF() {
          return cr.sm_mbf || (cr.sm_mbf = st(cr.M())), cr.sm_mbf;
        }
        toObject(e = !1) {
          return cr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(cr.M(), e, t);
        }
        static fromObject(e) {
          return ot(cr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new cr();
          return cr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(cr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(cr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetTritonPairingBond_Request";
        }
      }
      class ur extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ur.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ur();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new ur();
          return ur.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetTritonPairingBond_Response";
        }
      }
      class dr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dr.prototype.dongle_index || dt(dr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dr.sm_m ||
              (dr.sm_m = {
                proto: dr,
                fields: {
                  dongle_index: { n: 1, br: nt.readUint32, bw: at.writeUint32 },
                },
              }),
            dr.sm_m
          );
        }
        static MBF() {
          return dr.sm_mbf || (dr.sm_mbf = st(dr.M())), dr.sm_mbf;
        }
        toObject(e = !1) {
          return dr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(dr.M(), e, t);
        }
        static fromObject(e) {
          return ot(dr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new dr();
          return dr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(dr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(dr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetDonglePairingBond_Request";
        }
      }
      class mr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return mr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new mr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new mr();
          return mr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ForgetDonglePairingBond_Response";
        }
      }
      class gr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gr.prototype.serial_number || dt(gr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gr.sm_m ||
              (gr.sm_m = {
                proto: gr,
                fields: {
                  serial_number: {
                    n: 1,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                },
              }),
            gr.sm_m
          );
        }
        static MBF() {
          return gr.sm_mbf || (gr.sm_mbf = st(gr.M())), gr.sm_mbf;
        }
        toObject(e = !1) {
          return gr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(gr.M(), e, t);
        }
        static fromObject(e) {
          return ot(gr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new gr();
          return gr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(gr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(gr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerName_Request";
        }
      }
      class hr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hr.prototype.controller_name || dt(hr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            hr.sm_m ||
              (hr.sm_m = {
                proto: hr,
                fields: {
                  controller_name: {
                    n: 1,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                },
              }),
            hr.sm_m
          );
        }
        static MBF() {
          return hr.sm_mbf || (hr.sm_mbf = st(hr.M())), hr.sm_mbf;
        }
        toObject(e = !1) {
          return hr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(hr.M(), e, t);
        }
        static fromObject(e) {
          return ot(hr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new hr();
          return hr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(hr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(hr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerName_Response";
        }
      }
      class _r extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _r.prototype.controller_index || dt(_r.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _r.sm_m ||
              (_r.sm_m = {
                proto: _r,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  enable: { n: 2, br: nt.readBool, bw: at.writeBool },
                },
              }),
            _r.sm_m
          );
        }
        static MBF() {
          return _r.sm_mbf || (_r.sm_mbf = st(_r.M())), _r.sm_mbf;
        }
        toObject(e = !1) {
          return _r.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(_r.M(), e, t);
        }
        static fromObject(e) {
          return ot(_r.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new _r();
          return _r.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(_r.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(_r.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableDockedInput_Request";
        }
      }
      class pr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new pr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new pr();
          return pr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableDockedInput_Response";
        }
      }
      class fr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fr.prototype.controller_index || dt(fr.M()),
            rt.Message.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fr.sm_m ||
              (fr.sm_m = {
                proto: fr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  initialized: { n: 2, br: nt.readBool, bw: at.writeBool },
                  controller_type: {
                    n: 3,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  controller_style: {
                    n: 4,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  xinput_index: { n: 5, br: nt.readUint32, bw: at.writeUint32 },
                  is_wireless_steam_dongle: {
                    n: 6,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  vendor_id: { n: 7, br: nt.readUint32, bw: at.writeUint32 },
                  product_id: { n: 8, br: nt.readUint32, bw: at.writeUint32 },
                  capabilities: {
                    n: 9,
                    br: nt.readUint64String,
                    bw: at.writeUint64String,
                  },
                  firmware_version: {
                    n: 10,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  firmware_build_time: {
                    n: 11,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  serial_number: {
                    n: 12,
                    br: nt.readString,
                    bw: at.writeString,
                  },
                  cpu_id: { n: 13, br: nt.readString, bw: at.writeString },
                  name: { n: 14, br: nt.readString, bw: at.writeString },
                  is_remote_device: {
                    n: 15,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  is_bluetooth: { n: 16, br: nt.readBool, bw: at.writeBool },
                  has_touchscreen: { n: 17, br: nt.readBool, bw: at.writeBool },
                  mac_addr: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: nt.readString,
                    bw: at.writeRepeatedString,
                  },
                  battery_level: {
                    n: 19,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  is_charging: { n: 20, br: nt.readBool, bw: at.writeBool },
                  led_brightness: {
                    n: 21,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  led_saturation: {
                    n: 22,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  turn_on_sound: { n: 23, br: nt.readInt32, bw: at.writeInt32 },
                  turn_off_sound: {
                    n: 24,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  led_red: { n: 25, br: nt.readInt32, bw: at.writeInt32 },
                  led_green: { n: 26, br: nt.readInt32, bw: at.writeInt32 },
                  led_blue: { n: 27, br: nt.readInt32, bw: at.writeInt32 },
                  deadzone_left_stick: {
                    n: 28,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  deadzone_right_stick: {
                    n: 29,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  haptics_enabled: { n: 30, br: nt.readBool, bw: at.writeBool },
                  gyro_sw_antidrift_enabled: {
                    n: 31,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  gyro_one_euro_filter_enabled: {
                    n: 32,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  haptic_strength_left: {
                    n: 33,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  haptic_strength_right: {
                    n: 34,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  pad_pressure_curve_left: {
                    n: 35,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  pad_pressure_curve_right: {
                    n: 36,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  left_stick_touch_disable_lpad: {
                    n: 37,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  right_stick_touch_disable_rpad: {
                    n: 38,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  player_slot_led_setting: {
                    n: 39,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  has_nintendo_layout: {
                    n: 40,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  has_reversed_layout: {
                    n: 41,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  has_universal_face_button_glyphs: {
                    n: 42,
                    br: nt.readBool,
                    bw: at.writeBool,
                  },
                  gyro_stationary_tolerance: {
                    n: 43,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  accel_stationary_tolerance: {
                    n: 44,
                    br: nt.readFloat,
                    bw: at.writeFloat,
                  },
                  aux_capsense_threshold: {
                    n: 45,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  aux_capsense_hysterisis: {
                    n: 46,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                  rumble_setting: {
                    n: 47,
                    br: nt.readInt32,
                    bw: at.writeInt32,
                  },
                },
              }),
            fr.sm_m
          );
        }
        static MBF() {
          return fr.sm_mbf || (fr.sm_mbf = st(fr.M())), fr.sm_mbf;
        }
        toObject(e = !1) {
          return fr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(fr.M(), e, t);
        }
        static fromObject(e) {
          return ot(fr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new fr();
          return fr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(fr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(fr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_RawControllerDetailItem";
        }
      }
      class br extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return br.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new br();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new br();
          return br.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerListChanged_Notification";
        }
      }
      class Br extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Br.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Br();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Br();
          return Br.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerList_Request";
        }
      }
      class vr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vr.prototype.controllers || dt(vr.M()),
            rt.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vr.sm_m ||
              (vr.sm_m = {
                proto: vr,
                fields: { controllers: { n: 1, c: fr, r: !0, q: !0 } },
              }),
            vr.sm_m
          );
        }
        static MBF() {
          return vr.sm_mbf || (vr.sm_mbf = st(vr.M())), vr.sm_mbf;
        }
        toObject(e = !1) {
          return vr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(vr.M(), e, t);
        }
        static fromObject(e) {
          return ot(vr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new vr();
          return vr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(vr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(vr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_GetControllerList_Response";
        }
      }
      class yr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return yr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new yr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new yr();
          return yr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_FirstSteamControllerConnection_Notification";
        }
      }
      class wr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wr.prototype.period_ms || dt(wr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wr.sm_m ||
              (wr.sm_m = {
                proto: wr,
                fields: {
                  period_ms: { n: 1, br: nt.readInt32, bw: at.writeInt32 },
                  packets_sent: { n: 2, br: nt.readUint32, bw: at.writeUint32 },
                  packet_retransmissions: {
                    n: 3,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  interval_max_ms: {
                    n: 4,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  rssi_measure: { n: 5, br: nt.readInt32, bw: at.writeInt32 },
                  reason: { n: 6, br: nt.readUint32, bw: at.writeUint32 },
                  rf_channel: { n: 7, br: nt.readUint32, bw: at.writeUint32 },
                  backup_channel: {
                    n: 8,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                },
              }),
            wr.sm_m
          );
        }
        static MBF() {
          return wr.sm_mbf || (wr.sm_mbf = st(wr.M())), wr.sm_mbf;
        }
        toObject(e = !1) {
          return wr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(wr.M(), e, t);
        }
        static fromObject(e) {
          return ot(wr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new wr();
          return wr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(wr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(wr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CTritonQosStatus";
        }
      }
      class Sr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Sr.prototype.controller_index || dt(Sr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Sr.sm_m ||
              (Sr.sm_m = {
                proto: Sr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  status: { n: 2, c: wr },
                },
              }),
            Sr.sm_m
          );
        }
        static MBF() {
          return Sr.sm_mbf || (Sr.sm_mbf = st(Sr.M())), Sr.sm_mbf;
        }
        toObject(e = !1) {
          return Sr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Sr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Sr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Sr();
          return Sr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Sr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Sr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_TritonQos_Notification";
        }
      }
      class Tr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tr.prototype.controller_index || dt(Tr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tr.sm_m ||
              (Tr.sm_m = {
                proto: Tr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  enable: { n: 2, br: nt.readBool, bw: at.writeBool },
                },
              }),
            Tr.sm_m
          );
        }
        static MBF() {
          return Tr.sm_mbf || (Tr.sm_mbf = st(Tr.M())), Tr.sm_mbf;
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Tr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Tr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Tr();
          return Tr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Tr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Tr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableQosStatus_Request";
        }
      }
      class Cr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Cr.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Cr();
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Cr();
          return Cr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_EnableQosStatus_Response";
        }
      }
      class Mr extends rt.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mr.prototype.controller_index || dt(Mr.M()),
            rt.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mr.sm_m ||
              (Mr.sm_m = {
                proto: Mr,
                fields: {
                  controller_index: {
                    n: 1,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  battery_level: {
                    n: 2,
                    br: nt.readUint32,
                    bw: at.writeUint32,
                  },
                  charging: { n: 3, br: nt.readBool, bw: at.writeBool },
                },
              }),
            Mr.sm_m
          );
        }
        static MBF() {
          return Mr.sm_mbf || (Mr.sm_mbf = st(Mr.M())), Mr.sm_mbf;
        }
        toObject(e = !1) {
          return Mr.toObject(e, this);
        }
        static toObject(e, t) {
          return lt(Mr.M(), e, t);
        }
        static fromObject(e) {
          return ot(Mr.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (it().BinaryReader)(e),
            r = new Mr();
          return Mr.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return ct(Mr.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (it().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          ut(Mr.M(), e, t);
        }
        serializeBase64String() {
          var e = new (it().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamInputService_ControllerBatteryState_Notification";
        }
      }
      var Ir;
      !(function (e) {
        (e.NotifyButtonStateChangedHandler = {
          name: "SteamInputManager.NotifyButtonStateChanged#1",
          request: Tt,
        }),
          (e.RegisterForNotifyButtonStateChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyButtonStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyButtonStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyButtonStateChanged#1",
                  yt(Tt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyButtonStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyButtonStateChanged#1",
                  yt(Tt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyAxesStateChangedHandler = {
            name: "SteamInputManager.NotifyAxesStateChanged#1",
            request: At,
          }),
          (e.RegisterForNotifyAxesStateChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyAxesStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyAxesStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyAxesStateChanged#1",
                  yt(At, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyAxesStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyAxesStateChanged#1",
                  yt(At, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroQuaternionStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
            request: Ft,
          }),
          (e.RegisterForNotifyGyroQuaternionStateChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyGyroQuaternionStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyGyroQuaternionStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
                  yt(Ft, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroQuaternionStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroQuaternionStateChanged#1",
                  yt(Ft, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroSpeedStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroSpeedStateChanged#1",
            request: Et,
          }),
          (e.RegisterForNotifyGyroSpeedStateChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyGyroSpeedStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyGyroSpeedStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroSpeedStateChanged#1",
                  yt(Et, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroSpeedStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroSpeedStateChanged#1",
                  yt(Et, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroAccelerometerStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
            request: Nt,
          }),
          (e.RegisterForNotifyGyroAccelerometerStateChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyGyroAccelerometerStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyGyroAccelerometerStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
                  yt(Nt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroAccelerometerStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroAccelerometerStateChanged#1",
                  yt(Nt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyGyroCalibrationStateChangedHandler = {
            name: "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
            request: Dt,
          }),
          (e.RegisterForNotifyGyroCalibrationStateChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyGyroCalibrationStateChangedHandler,
                  t,
                );
          }),
          (e.NotifyGyroCalibrationStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
                  yt(Dt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyGyroCalibrationStateChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyGyroCalibrationStateChanged#1",
                  yt(Dt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerPowerMenuHandler = {
            name: "SteamInputManager.NotifyControllerPowerMenu#1",
            request: nr,
          }),
          (e.RegisterForNotifyControllerPowerMenu = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerPowerMenuHandler,
                  t,
                );
          }),
          (e.NotifyControllerPowerMenu = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPowerMenu#1",
                  yt(nr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerPowerMenu = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPowerMenu#1",
                  yt(nr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyUnpairedTritonPluggedInHandler = {
            name: "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
            request: Ut,
          }),
          (e.RegisterForNotifyUnpairedTritonPluggedIn = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyUnpairedTritonPluggedInHandler,
                  t,
                );
          }),
          (e.NotifyUnpairedTritonPluggedIn = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
                  yt(Ut, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyUnpairedTritonPluggedIn = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonPluggedIn#1",
                  yt(Ut, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyUnpairedTritonDockedHandler = {
            name: "SteamInputManager.NotifyUnpairedTritonDocked#1",
            request: kt,
          }),
          (e.RegisterForNotifyUnpairedTritonDocked = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyUnpairedTritonDockedHandler,
                  t,
                );
          }),
          (e.NotifyUnpairedTritonDocked = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonDocked#1",
                  yt(kt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyUnpairedTritonDocked = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyUnpairedTritonDocked#1",
                  yt(kt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTritonUndockedHandler = {
            name: "SteamInputManager.NotifyTritonUndocked#1",
            request: jt,
          }),
          (e.RegisterForNotifyTritonUndocked = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyTritonUndockedHandler,
                  t,
                );
          }),
          (e.NotifyTritonUndocked = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonUndocked#1",
                  yt(jt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTritonUndocked = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonUndocked#1",
                  yt(jt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifySteamDonglesChangedHandler = {
            name: "SteamInputManager.NotifySteamDonglesChanged#1",
            request: xt,
          }),
          (e.RegisterForNotifySteamDonglesChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifySteamDonglesChangedHandler,
                  t,
                );
          }),
          (e.NotifySteamDonglesChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifySteamDonglesChanged#1",
                  yt(xt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifySteamDonglesChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifySteamDonglesChanged#1",
                  yt(xt, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerDisconnectedHandler = {
            name: "SteamInputManager.NotifyControllerDisconnected#1",
            request: ar,
          }),
          (e.RegisterForNotifyControllerDisconnected = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerDisconnectedHandler,
                  t,
                );
          }),
          (e.NotifyControllerDisconnected = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerDisconnected#1",
                  yt(ar, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerDisconnected = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerDisconnected#1",
                  yt(ar, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerPairingChangedHandler = {
            name: "SteamInputManager.NotifyControllerPairingChanged#1",
            request: Ht,
          }),
          (e.RegisterForNotifyControllerPairingChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerPairingChangedHandler,
                  t,
                );
          }),
          (e.NotifyControllerPairingChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPairingChanged#1",
                  yt(Ht, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerPairingChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerPairingChanged#1",
                  yt(Ht, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerListChangedHandler = {
            name: "SteamInputManager.NotifyControllerListChanged#1",
            request: br,
          }),
          (e.RegisterForNotifyControllerListChanged = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerListChangedHandler,
                  t,
                );
          }),
          (e.NotifyControllerListChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerListChanged#1",
                  yt(br, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerListChanged = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerListChanged#1",
                  yt(br, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyControllerBatteryStateHandler = {
            name: "SteamInputManager.NotifyControllerBatteryState#1",
            request: Mr,
          }),
          (e.RegisterForNotifyControllerBatteryState = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyControllerBatteryStateHandler,
                  t,
                );
          }),
          (e.NotifyControllerBatteryState = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerBatteryState#1",
                  yt(Mr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyControllerBatteryState = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyControllerBatteryState#1",
                  yt(Mr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyFirstSteamControllerConnectionHandler = {
            name: "SteamInputManager.NotifyFirstSteamControllerConnection#1",
            request: yr,
          }),
          (e.RegisterForNotifyFirstSteamControllerConnection = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyFirstSteamControllerConnectionHandler,
                  t,
                );
          }),
          (e.NotifyFirstSteamControllerConnection = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyFirstSteamControllerConnection#1",
                  yt(yr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyFirstSteamControllerConnection = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyFirstSteamControllerConnection#1",
                  yt(yr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.NotifyTritonQosHandler = {
            name: "SteamInputManager.NotifyTritonQos#1",
            request: Sr,
          }),
          (e.RegisterForNotifyTritonQos = function (t, r) {
            return null == (r = r || St().GetDefaultHandlerRegistry())
              ? (console.error(
                  "Transport Error: no default registry is available for request",
                ),
                null)
              : r.RegisterServiceNotificationHandler(
                  e.NotifyTritonQosHandler,
                  t,
                );
          }),
          (e.NotifyTritonQos = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonQos#1",
                  yt(Sr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgNotifyTritonQos = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? (console.error(
                  "Transport Error: no transport is available for request",
                ),
                !1)
              : t.SendNotification(
                  "SteamInputManager.NotifyTritonQos#1",
                  yt(Sr, e),
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.StartControllerStateFlowHandler = {
            name: "SteamInputManager.StartControllerStateFlow#1",
            request: Ot,
            response: Pt,
          }),
          (e.StartControllerStateFlow = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartControllerStateFlow#1",
                  yt(Ot, e),
                  Pt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgStartControllerStateFlow = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartControllerStateFlow#1",
                  yt(Ot, e),
                  Pt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EndControllerStateFlowHandler = {
            name: "SteamInputManager.EndControllerStateFlow#1",
            request: Ot,
            response: Pt,
          }),
          (e.EndControllerStateFlow = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EndControllerStateFlow#1",
                  yt(Ot, e),
                  Pt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEndControllerStateFlow = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EndControllerStateFlow#1",
                  yt(Ot, e),
                  Pt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerAccessibilityStringsHandler = {
            name: "SteamInputManager.GetControllerAccessibilityStrings#1",
            request: rr,
            response: ir,
          }),
          (e.GetControllerAccessibilityStrings = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerAccessibilityStrings#1",
                  yt(rr, e),
                  ir,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerAccessibilityStrings = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerAccessibilityStrings#1",
                  yt(rr, e),
                  ir,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.StartGyroSoftwareCalibrationHandler = {
            name: "SteamInputManager.StartGyroSoftwareCalibration#1",
            request: Gt,
            response: zt,
          }),
          (e.StartGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartGyroSoftwareCalibration#1",
                  yt(Gt, e),
                  zt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgStartGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.StartGyroSoftwareCalibration#1",
                  yt(Gt, e),
                  zt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.CancelGyroSoftwareCalibrationHandler = {
            name: "SteamInputManager.CancelGyroSoftwareCalibration#1",
            request: Gt,
            response: zt,
          }),
          (e.CancelGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.CancelGyroSoftwareCalibration#1",
                  yt(Gt, e),
                  zt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgCancelGyroSoftwareCalibration = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.CancelGyroSoftwareCalibration#1",
                  yt(Gt, e),
                  zt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.PairDongleTritonConnectedHandler = {
            name: "SteamInputManager.PairDongleTritonConnected#1",
            request: Wt,
            response: Lt,
          }),
          (e.PairDongleTritonConnected = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.PairDongleTritonConnected#1",
                  yt(Wt, e),
                  Lt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgPairDongleTritonConnected = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.PairDongleTritonConnected#1",
                  yt(Wt, e),
                  Lt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.PairDongleTritonDockedHandler = {
            name: "SteamInputManager.PairDongleTritonDocked#1",
            request: Vt,
            response: qt,
          }),
          (e.PairDongleTritonDocked = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.PairDongleTritonDocked#1",
                  yt(Vt, e),
                  qt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgPairDongleTritonDocked = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.PairDongleTritonDocked#1",
                  yt(Vt, e),
                  qt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetDonglesHandler = {
            name: "SteamInputManager.GetDongles#1",
            request: Kt,
            response: $t,
          }),
          (e.GetDongles = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamInputManager.GetDongles#1", yt(Kt, e), $t, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.SendMsgGetDongles = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg("SteamInputManager.GetDongles#1", yt(Kt, e), $t, {
                  ePrivilege: 1,
                  eClientExecutionSite: 2,
                });
          }),
          (e.ShouldTritonPairInOobeHandler = {
            name: "SteamInputManager.ShouldTritonPairInOobe#1",
            request: Yt,
            response: Zt,
          }),
          (e.ShouldTritonPairInOobe = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ShouldTritonPairInOobe#1",
                  yt(Yt, e),
                  Zt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgShouldTritonPairInOobe = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ShouldTritonPairInOobe#1",
                  yt(Yt, e),
                  Zt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.WaitInitialControllerStateEnumeratedHandler = {
            name: "SteamInputManager.WaitInitialControllerStateEnumerated#1",
            request: Xt,
            response: Jt,
          }),
          (e.WaitInitialControllerStateEnumerated = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.WaitInitialControllerStateEnumerated#1",
                  yt(Xt, e),
                  Jt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgWaitInitialControllerStateEnumerated = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.WaitInitialControllerStateEnumerated#1",
                  yt(Xt, e),
                  Jt,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetTritonPairingInfoHandler = {
            name: "SteamInputManager.GetTritonPairingInfo#1",
            request: sr,
            response: or,
          }),
          (e.GetTritonPairingInfo = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetTritonPairingInfo#1",
                  yt(sr, e),
                  or,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetTritonPairingInfo = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetTritonPairingInfo#1",
                  yt(sr, e),
                  or,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.ForgetTritonPairingBondHandler = {
            name: "SteamInputManager.ForgetTritonPairingBond#1",
            request: cr,
            response: ur,
          }),
          (e.ForgetTritonPairingBond = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetTritonPairingBond#1",
                  yt(cr, e),
                  ur,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgForgetTritonPairingBond = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetTritonPairingBond#1",
                  yt(cr, e),
                  ur,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.ForgetDonglePairingBondHandler = {
            name: "SteamInputManager.ForgetDonglePairingBond#1",
            request: dr,
            response: mr,
          }),
          (e.ForgetDonglePairingBond = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetDonglePairingBond#1",
                  yt(dr, e),
                  mr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgForgetDonglePairingBond = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.ForgetDonglePairingBond#1",
                  yt(dr, e),
                  mr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerNameHandler = {
            name: "SteamInputManager.GetControllerName#1",
            request: gr,
            response: hr,
          }),
          (e.GetControllerName = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerName#1",
                  yt(gr, e),
                  hr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerName = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerName#1",
                  yt(gr, e),
                  hr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.GetControllerListHandler = {
            name: "SteamInputManager.GetControllerList#1",
            request: Br,
            response: vr,
          }),
          (e.GetControllerList = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerList#1",
                  yt(Br, e),
                  vr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgGetControllerList = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.GetControllerList#1",
                  yt(Br, e),
                  vr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EnableDockedInputHandler = {
            name: "SteamInputManager.EnableDockedInput#1",
            request: _r,
            response: pr,
          }),
          (e.EnableDockedInput = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableDockedInput#1",
                  yt(_r, e),
                  pr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEnableDockedInput = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableDockedInput#1",
                  yt(_r, e),
                  pr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.EnableQosStatusHandler = {
            name: "SteamInputManager.EnableQosStatus#1",
            request: Tr,
            response: Cr,
          }),
          (e.EnableQosStatus = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableQosStatus#1",
                  yt(Tr, e),
                  Cr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          }),
          (e.SendMsgEnableQosStatus = function (e, t) {
            return null == (t = t || St().GetDefaultTransport())
              ? new Promise((e, t) => {
                  console.error(
                    "Transport Error: no transport is available for request",
                  ),
                    t("Transport Error: no transport is available for request");
                })
              : t.SendMsg(
                  "SteamInputManager.EnableQosStatus#1",
                  yt(Tr, e),
                  Cr,
                  { ePrivilege: 1, eClientExecutionSite: 2 },
                );
          });
      })(Ir || (Ir = {}));
      var Rr;
      !(function (e) {
        (e[(e.k_EControllerBindingType_None = 0)] =
          "k_EControllerBindingType_None"),
          (e[(e.k_EControllerBindingType_Key = 1)] =
            "k_EControllerBindingType_Key"),
          (e[(e.k_EControllerBindingType_MouseButton = 2)] =
            "k_EControllerBindingType_MouseButton"),
          (e[(e.k_EControllerBindingType_Gamepad = 3)] =
            "k_EControllerBindingType_Gamepad"),
          (e[(e.k_EControllerBindingType_Mousewheel = 4)] =
            "k_EControllerBindingType_Mousewheel"),
          (e[(e.k_EControllerBindingType_Modeshift = 5)] =
            "k_EControllerBindingType_Modeshift"),
          (e[(e.k_EControllerBindingType_GameAction = 6)] =
            "k_EControllerBindingType_GameAction"),
          (e[(e.k_EControllerBindingType_ControllerAction = 7)] =
            "k_EControllerBindingType_ControllerAction");
      })(Rr || (Rr = {}));
      BigInt(1),
        BigInt(0),
        BigInt(1),
        BigInt(1),
        BigInt(1),
        BigInt(2),
        BigInt(1),
        BigInt(3),
        BigInt(1),
        BigInt(4),
        BigInt(1),
        BigInt(5),
        BigInt(1),
        BigInt(6),
        BigInt(1),
        BigInt(7),
        BigInt(1),
        BigInt(8),
        BigInt(1),
        BigInt(9),
        BigInt(1),
        BigInt(10),
        BigInt(1),
        BigInt(11),
        BigInt(1),
        BigInt(12),
        BigInt(1),
        BigInt(13),
        BigInt(1),
        BigInt(14),
        BigInt(1),
        BigInt(15),
        BigInt(1),
        BigInt(16),
        BigInt(1),
        BigInt(17),
        BigInt(1),
        BigInt(18),
        BigInt(1),
        BigInt(19),
        BigInt(1),
        BigInt(20),
        BigInt(1),
        BigInt(21),
        BigInt(1),
        BigInt(22),
        BigInt(1),
        BigInt(23),
        BigInt(1),
        BigInt(24),
        BigInt(1),
        BigInt(25),
        BigInt(1),
        BigInt(26),
        BigInt(1),
        BigInt(27),
        BigInt(1),
        BigInt(28),
        BigInt(1),
        BigInt(29),
        BigInt(1),
        BigInt(30),
        BigInt(1),
        BigInt(31),
        BigInt(1),
        BigInt(32),
        BigInt(1),
        BigInt(33),
        BigInt(1),
        BigInt(34),
        BigInt(1),
        BigInt(35),
        BigInt(1),
        BigInt(36),
        BigInt(1),
        BigInt(37),
        BigInt(1),
        BigInt(38),
        BigInt(1),
        BigInt(39);
      var Ar;
      !(function (e) {
        (e[(e.GAMEPAD_BUTTON_A = 0)] = "GAMEPAD_BUTTON_A"),
          (e[(e.GAMEPAD_BUTTON_B = 1)] = "GAMEPAD_BUTTON_B"),
          (e[(e.GAMEPAD_BUTTON_X = 2)] = "GAMEPAD_BUTTON_X"),
          (e[(e.GAMEPAD_BUTTON_Y = 3)] = "GAMEPAD_BUTTON_Y"),
          (e[(e.GAMEPAD_BUTTON_DPAD_UP = 4)] = "GAMEPAD_BUTTON_DPAD_UP"),
          (e[(e.GAMEPAD_BUTTON_DPAD_RIGHT = 5)] = "GAMEPAD_BUTTON_DPAD_RIGHT"),
          (e[(e.GAMEPAD_BUTTON_DPAD_DOWN = 6)] = "GAMEPAD_BUTTON_DPAD_DOWN"),
          (e[(e.GAMEPAD_BUTTON_DPAD_LEFT = 7)] = "GAMEPAD_BUTTON_DPAD_LEFT"),
          (e[(e.GAMEPAD_BUTTON_MENU = 8)] = "GAMEPAD_BUTTON_MENU"),
          (e[(e.GAMEPAD_BUTTON_VIEW = 9)] = "GAMEPAD_BUTTON_VIEW"),
          (e[(e.GAMEPAD_LEFTPAD_UP = 10)] = "GAMEPAD_LEFTPAD_UP"),
          (e[(e.GAMEPAD_LEFTPAD_DOWN = 11)] = "GAMEPAD_LEFTPAD_DOWN"),
          (e[(e.GAMEPAD_LEFTPAD_LEFT = 12)] = "GAMEPAD_LEFTPAD_LEFT"),
          (e[(e.GAMEPAD_LEFTPAD_RIGHT = 13)] = "GAMEPAD_LEFTPAD_RIGHT"),
          (e[(e.GAMEPAD_LEFTPAD_ANALOG = 14)] = "GAMEPAD_LEFTPAD_ANALOG"),
          (e[(e.GAMEPAD_RIGHTPAD_UP = 15)] = "GAMEPAD_RIGHTPAD_UP"),
          (e[(e.GAMEPAD_RIGHTPAD_DOWN = 16)] = "GAMEPAD_RIGHTPAD_DOWN"),
          (e[(e.GAMEPAD_RIGHTPAD_LEFT = 17)] = "GAMEPAD_RIGHTPAD_LEFT"),
          (e[(e.GAMEPAD_RIGHTPAD_RIGHT = 18)] = "GAMEPAD_RIGHTPAD_RIGHT"),
          (e[(e.GAMEPAD_RIGHTPAD_ANALOG = 19)] = "GAMEPAD_RIGHTPAD_ANALOG"),
          (e[(e.GAMEPAD_LEFTSTICK_UP = 20)] = "GAMEPAD_LEFTSTICK_UP"),
          (e[(e.GAMEPAD_LEFTSTICK_DOWN = 21)] = "GAMEPAD_LEFTSTICK_DOWN"),
          (e[(e.GAMEPAD_LEFTSTICK_LEFT = 22)] = "GAMEPAD_LEFTSTICK_LEFT"),
          (e[(e.GAMEPAD_LEFTSTICK_RIGHT = 23)] = "GAMEPAD_LEFTSTICK_RIGHT"),
          (e[(e.GAMEPAD_LEFTSTICK_ANALOG = 24)] = "GAMEPAD_LEFTSTICK_ANALOG"),
          (e[(e.GAMEPAD_LEFTSTICK_CLICK = 25)] = "GAMEPAD_LEFTSTICK_CLICK"),
          (e[(e.GAMEPAD_LTRIGGER_ANALOG = 26)] = "GAMEPAD_LTRIGGER_ANALOG"),
          (e[(e.GAMEPAD_RTRIGGER_ANALOG = 27)] = "GAMEPAD_RTRIGGER_ANALOG"),
          (e[(e.GAMEPAD_BUTTON_LTRIGGER = 28)] = "GAMEPAD_BUTTON_LTRIGGER"),
          (e[(e.GAMEPAD_BUTTON_RTRIGGER = 29)] = "GAMEPAD_BUTTON_RTRIGGER"),
          (e[(e.GAMEPAD_BUTTON_LSHOULDER = 30)] = "GAMEPAD_BUTTON_LSHOULDER"),
          (e[(e.GAMEPAD_BUTTON_RSHOULDER = 31)] = "GAMEPAD_BUTTON_RSHOULDER"),
          (e[(e.GAMEPAD_BUTTON_LBACK = 32)] = "GAMEPAD_BUTTON_LBACK"),
          (e[(e.GAMEPAD_BUTTON_RBACK = 33)] = "GAMEPAD_BUTTON_RBACK"),
          (e[(e.GAMEPAD_BUTTON_GUIDE = 34)] = "GAMEPAD_BUTTON_GUIDE"),
          (e[(e.GAMEPAD_BUTTON_SELECT = 35)] = "GAMEPAD_BUTTON_SELECT"),
          (e[(e.GAMEPAD_BUTTON_START = 36)] = "GAMEPAD_BUTTON_START"),
          (e[(e.GAMEPAD_BUTTON_LPAD_CLICKED = 37)] =
            "GAMEPAD_BUTTON_LPAD_CLICKED"),
          (e[(e.GAMEPAD_BUTTON_LPAD_TOUCH = 38)] = "GAMEPAD_BUTTON_LPAD_TOUCH"),
          (e[(e.GAMEPAD_BUTTON_RPAD_CLICKED = 39)] =
            "GAMEPAD_BUTTON_RPAD_CLICKED"),
          (e[(e.GAMEPAD_BUTTON_RPAD_TOUCH = 40)] = "GAMEPAD_BUTTON_RPAD_TOUCH"),
          (e[(e.GAMEPAD_RIGHTSTICK_CLICK = 41)] = "GAMEPAD_RIGHTSTICK_CLICK"),
          (e[(e.GAMEPAD_RIGHTSTICK_TOUCH = 42)] = "GAMEPAD_RIGHTSTICK_TOUCH"),
          (e[(e.GAMEPAD_LEFTSTICK_TOUCH = 43)] = "GAMEPAD_LEFTSTICK_TOUCH"),
          (e[(e.GAMEPAD_BUTTON_LBACK_UPPER = 44)] =
            "GAMEPAD_BUTTON_LBACK_UPPER"),
          (e[(e.GAMEPAD_BUTTON_RBACK_UPPER = 45)] =
            "GAMEPAD_BUTTON_RBACK_UPPER"),
          (e[(e.GAMEPAD_BUTTON_LAST = 46)] = "GAMEPAD_BUTTON_LAST"),
          (e[(e.GAMEPAD_ANALOG_SCROLL = 47)] = "GAMEPAD_ANALOG_SCROLL"),
          (e[(e.GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR = 48)] =
            "GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR"),
          (e[(e.GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR = 49)] =
            "GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR"),
          (e[(e.GAMEPAD_ANALOG_LAST = 50)] = "GAMEPAD_ANALOG_LAST");
      })(Ar || (Ar = {}));
      const Fr = new L("FocusNavigation").Debug,
        Er = new L("FocusNavigation").Assert,
        Nr = "focus-nav-show-debug-focus-ring";
      function Dr(e, t) {
        return (
          e?.eActivationSourceType === t?.eActivationSourceType &&
          e?.nActiveGamepadIndex === t?.nActiveGamepadIndex &&
          e?.nLastActiveGamepadIndex === t?.nLastActiveGamepadIndex
        );
      }
      class Or {
        m_rgGamepadInputSources = [];
        m_DefaultContext;
        m_rgAllContexts = [];
        m_ActiveContext;
        m_LastActiveContext;
        m_ContextSetChangedCallbacks = new E.l();
        m_fnCatchAllGamepadInput = null;
        m_UnhandledButtonEventsCallbacks = new E.l();
        m_navigationSource = P(
          {
            eActivationSourceType: s.Vz.UNKNOWN,
            nActiveGamepadIndex: -1,
            nLastActiveGamepadIndex: -1,
          },
          Dr,
        );
        m_navigationSourceSupportsFocus = (function (e, t, r) {
          return new G(e, t, r);
        })(
          this.m_navigationSource,
          (e) =>
            e?.eActivationSourceType === s.Vz.GAMEPAD ||
            e?.eActivationSourceType === s.Vz.KEYBOARD_SIMULATOR,
        );
        m_bShowDebugFocusRing = P(!1);
        m_glyphInfo = P({ nControllerType: 4, nControllerStyle: 100 });
        m_bRestoringHistory = !1;
        m_fnGamepadEventUpdateBatcher = (e) => e();
        constructor() {
          window.FocusNavController = this;
        }
        Init() {
          this.m_bShowDebugFocusRing.Set("shown" == sessionStorage.getItem(Nr));
        }
        CreateContext(e, t, r) {
          const i = new tt(this, e, t, r);
          return (
            this.m_rgAllContexts.push(i),
            setTimeout(() => this.m_ContextSetChangedCallbacks.Dispatch(), 0),
            i
          );
        }
        DestroyContext(e) {
          F.x9(this.m_rgAllContexts, e),
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
            (e) => e.BIsVR() && !e.BIsGamepadInputSuppressed(),
          );
        }
        FindContextForRootWindow(e) {
          return this.m_rgAllContexts?.find((t) => t.RootWindow == e);
        }
        BCanActivateContext(e) {
          return !!e && !(this.BHasVRGamepadNavigationContext() && !e.BIsVR());
        }
        FindAnActiveContext() {
          if (!this.m_ActiveContext && 0 != this.m_rgAllContexts.length) {
            console.warn("No active context; finding one");
            for (const e of this.m_rgAllContexts) {
              const t = e.FindNavTreeInFocusedWindow();
              if (t && this.BCanActivateContext(e)) {
                Fr(
                  `${e.LogName(t.Window)} Found a focused window; setting this context as active.`,
                ),
                  (this.m_ActiveContext = e),
                  this.m_ActiveContext.OnActivate(t.Window);
                break;
              }
            }
          }
          return (
            !this.m_ActiveContext &&
              this.m_LastActiveContext &&
              this.BCanActivateContext(this.m_LastActiveContext) &&
              (Fr(
                `Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
              ),
              (this.m_ActiveContext = this.m_LastActiveContext),
              this.m_ActiveContext.OnActivate(
                this.m_LastActiveContext.m_LastActiveFocusNavTree?.Window,
              )),
            this.m_ActiveContext
          );
        }
        SetShowDebugFocusRing(e) {
          this.m_bShowDebugFocusRing.Set(e),
            (function (e) {
              e
                ? sessionStorage.setItem(Nr, "shown")
                : sessionStorage.removeItem(Nr);
            })(e);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(e) {
          let t = new W();
          return (
            this.m_rgGamepadInputSources.push(e),
            t.PushArrayRemove(this.m_rgGamepadInputSources, e),
            t.Push(
              e.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister,
            ),
            t.Push(e.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
            t.Push(
              e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
                .Unregister,
            ),
            e.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? !1),
            t.Push(() => e.SetRepeatAllowed()),
            e.GetSourceType() == s.Vz.GAMEPAD && this.UpdateSourceToGamepad(),
            t.GetUnregisterFunc()
          );
        }
        UpdateSourceToGamepad(e = !1) {
          (this.m_navigationSource.Value.eActivationSourceType ==
            s.Vz.UNKNOWN ||
            e) &&
            this.m_navigationSource.Set({
              ...this.m_navigationSource.Value,
              eActivationSourceType: s.Vz.GAMEPAD,
            });
        }
        SetGamepadEventUpdateBatcher(e) {
          this.m_fnGamepadEventUpdateBatcher = e;
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
        DispatchVirtualButtonClick(e, t) {
          let r;
          t && (r = this.GetActiveContext() ?? this.FindAnActiveContext()),
            this.OnButtonDown(
              e,
              s.Vz.GAMEPAD,
              -1,
              void 0,
              void 0,
              void 0,
              t,
              r,
              !0,
            ),
            this.OnButtonUp(
              e,
              s.Vz.GAMEPAD,
              -1,
              void 0,
              void 0,
              void 0,
              t,
              r,
              !0,
            );
        }
        DispatchVirtualGamepad(e, t) {
          switch (e) {
            case "vgp_onbuttondown":
              this.OnButtonDown(t.button, t.source, -1, t.is_repeat);
              break;
            case "vgp_onbuttonup":
              this.OnButtonUp(t.button, t.source, -1);
          }
        }
        BGlobalGamepadButton(e) {
          return (
            e === s.pR.STEAM_GUIDE ||
            e === s.pR.STEAM_QUICK_MENU ||
            e === s.pR.CANCEL
          );
        }
        GetEventTarget(e, t, r = !1) {
          let n = this.GetActiveContext();
          !n && r && (n = this.FindAnActiveContext());
          let a = n?.ActiveWindow?.document.activeElement;
          if (n?.m_LastActiveNavTree) {
            if (
              (t || (t = this.m_navigationSource?.Value?.eActivationSourceType),
              !(
                n.m_LastActiveNavTree.GetLastFocusedNode() ||
                (t != s.Vz.GAMEPAD && t != s.Vz.KEYBOARD_SIMULATOR) ||
                (Fr(
                  `GetEventTarget: Context ${n.LogName()} tree ${n.m_LastActiveNavTree.id} has no focused node, ${r ? "finding one" : "will not find one"}`,
                ),
                r && n.m_LastActiveNavTree.TakeFocus(i.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              ))
            )
              return [void 0, n];
            n.m_LastActiveNavTree.GetLastFocusedNode()
              ? (a = n.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
              : Fr(
                  `GetEventTarget: Context ${n.LogName()} tree ${n.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
                );
          }
          return [a, n];
        }
        ChangeNavigationSource(e, t, r, i) {
          let n = this.m_navigationSource.Value,
            a = n.nLastActiveGamepadIndex;
          return (
            n.nActiveGamepadIndex &&
              n.nActiveGamepadIndex >= 0 &&
              (a = n.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: a,
            }),
            r &&
              i &&
              this.m_glyphInfo.Set({ nControllerType: r, nControllerStyle: i }),
            e != s.Vz.MOUSE &&
              (0, p.Dp)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent(),
            n.eActivationSourceType != e
          );
        }
        OnButtonActionInternal(e, t, r, i, n, a, o, l, c, d) {
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t))
            return void (
              e &&
              Fr(
                "Ignoring button press - gamepad input is suppressed by parent window",
              )
            );
          Er(
            !!a == !!o,
            "Must set both overrideContext and overrideElement or neither",
          );
          let m = a,
            g = o;
          (null != m && null != g) || ([m, g] = this.GetEventTarget(t, r, e)),
            !g?.BIsGamepadInputSuppressed() || l
              ? (this.ChangeNavigationSource(r, i, c, d),
                e &&
                  Fr(
                    `Firing ${s.pR[t]} in tree ${g?.m_LastActiveNavTree?.id} at `,
                    m,
                  ),
                this.BatchedUpdate(() =>
                  u(m, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
                    button: t,
                    source: r,
                    is_repeat: n,
                  }),
                ))
              : Fr(
                  `Suppressing ${s.pR[t]} input on element ${m?.className} because tree ${g?.m_LastActiveNavTree?.id} has it disabled`,
                );
        }
        OnButtonDown(e, t, r, i, n, a, s, o, l) {
          this.OnButtonActionInternal(!0, e, t, r, i, s, o, l, n, a);
        }
        OnButtonUp(e, t, r, i, n, a, s, o, l) {
          this.OnButtonActionInternal(!1, e, t, r, !1, s, o, l, n, a);
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          if (
            this.ChangeNavigationSource(e, -1) &&
            (document.hasFocus() || this.m_LastActiveContext?.BIsVR()) &&
            (e == s.Vz.MOUSE || e == s.Vz.TOUCH) &&
            this.m_ActiveContext?.m_LastActiveNavTree
          ) {
            const e =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              t = (function (e) {
                if (!B(e)) return !1;
                const t = e.tagName,
                  r = ((i = e), "INPUT" === i.nodeName ? e.type : void 0);
                var i;
                return (function (e, t) {
                  switch (e) {
                    case "TEXTAREA":
                      return !0;
                    case "INPUT":
                      switch (t) {
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
                })(t, r);
              })(e?.Element)
                ? e
                : null;
            this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(
              i.APPLICATION,
              t,
            );
          }
        }
        NewGamepadNavigationTree(e, t, r, i) {
          return new Xe(this, e, t, r, i);
        }
        RegisterGamepadNavigationTree(e, t) {
          const r = e.WindowContext;
          r.AddNavTree(e);
          const i = e.MountNavTree(t);
          return (
            !e.Parent &&
              e.BIsEnabled() &&
              (this.BCanActivateContext(r) &&
                (this.m_LastActiveContext = this.m_ActiveContext = r),
              r.SetActiveNavTree(e, !0)),
            () => {
              r.UnregisterGamepadNavigationTree(e).then(() => i());
            }
          );
        }
        OnGamepadNavigationTreeActivated(e, t = !1) {
          e.WindowContext.SetActiveNavTree(e, t);
        }
        OnGamepadNavigationTreeFocused(e, t, r = !1) {
          const n = e.WindowContext;
          n != this.m_ActiveContext &&
            Fr(`(${n.LogName(e.Window)}) Focus event in inactive window`),
            e != n.m_LastActiveFocusNavTree &&
              e != n.m_LastActiveNavTree &&
              (n.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
              e.GetParentEmbeddedNavTree() == n.m_LastActiveFocusNavTree
                ? t == i.AUTOFOCUS &&
                  n.m_LastActiveNavTree?.GetLastFocusedNode()
                  ? Fr(
                      `There was an autofocus event in ${e.id}, but the active nav tree is ${n.m_LastActiveFocusNavTree?.id} and we already have something focused.  Source: ${t && i[t]}.`,
                    )
                  : (Fr(
                      `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
                    ),
                    e.Activate())
                : Fr(
                    `There was a focus event in ${e.id}, but the active nav tree is ${n.m_LastActiveFocusNavTree?.id} so it is being ignored.  Source: ${t && i[t]}.`,
                  ));
        }
        BlurNavTree(e) {
          e.WindowContext.BlurNavTree(e);
        }
        IsActiveFocusNavTree(e) {
          return Boolean(
            e && e == this.m_ActiveContext?.m_LastActiveFocusNavTree,
          );
        }
        IsActiveNavTree(e) {
          return Boolean(e && e == this.m_ActiveContext?.m_LastActiveNavTree);
        }
        GetActiveNavTree() {
          return this.m_ActiveContext?.m_LastActiveNavTree;
        }
        BIsInActiveContext(e) {
          return Boolean(e && e.WindowContext == this.m_ActiveContext);
        }
        RegisterForUnhandledButtonDownEvents(e) {
          return this.m_UnhandledButtonEventsCallbacks.Register(e);
        }
        get ContextSetChangedCallbacks() {
          return this.m_ContextSetChangedCallbacks;
        }
        FireUnhandledGamepadEventCallbacks(e) {
          return (
            !this.m_UnhandledButtonEventsCallbacks.CountRegistered() ||
            (this.m_UnhandledButtonEventsCallbacks.Dispatch(e), !1)
          );
        }
        SetSuppressGamepadInput(e) {
          this.m_fnCatchAllGamepadInput = e ? () => !0 : null;
        }
        SetCatchAllGamepadInput(e) {
          this.m_fnCatchAllGamepadInput = e;
        }
        TakeFocusChangingIFrame() {
          window.focus();
          let e =
            this.m_ActiveContext?.m_LastActiveFocusNavTree ||
            this.m_ActiveContext?.m_LastActiveNavTree;
          e && e.TakeFocus(i.APPLICATION);
        }
        OnContextActivated(e) {
          (this.m_ActiveContext = e), (this.m_LastActiveContext = e);
        }
        OnContextDeactivated(e, t) {
          t &&
            (this.m_LastActiveContext == e &&
              (this.m_LastActiveContext = void 0),
            this.DestroyContext(e)),
            this.m_ActiveContext == e && (this.m_ActiveContext = void 0);
        }
        BIsRestoringHistory() {
          return this.m_bRestoringHistory;
        }
        async RestoreHistoryTransaction(e) {
          this.m_bRestoringHistory = !0;
          try {
            await e();
          } finally {
            this.m_bRestoringHistory = !1;
          }
        }
      }
      function Pr(e) {
        if (!e) return Oe.NONE;
        switch (e) {
          case "column":
            return Oe.COLUMN;
          case "column-reverse":
            return Oe.COLUMN_REVERSE;
          case "row":
            return Oe.ROW;
          case "row-reverse":
            return Oe.ROW_REVERSE;
          case "grid":
            return Oe.GRID;
          case "geometric":
            return Oe.GEOMETRIC;
          default:
            return (
              (function (e, t, ...r) {
                j(!1, t, ...r);
              })(0, `Unhandled flow-children: ${e}`),
              Oe.NONE
            );
        }
      }
      (0, g.Cg)([h.o], Or.prototype, "OnButtonDown", null),
        (0, g.Cg)([h.o], Or.prototype, "OnButtonUp", null),
        (0, g.Cg)([h.o], Or.prototype, "OnNavigationTypeChange", null);
      const Gr = "VirtualKeyboardMessage";
      function zr(e) {
        return e && e.type === Gr;
      }
      class Wr {
        m_ownerWindow;
        constructor() {}
        Init(e) {
          return (
            (this.m_ownerWindow = e),
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
          this.SendMessage({ message: "ShowVirtualKeyboard" });
        }
        ShowModalKeyboard() {
          this.SendMessage({ message: "ShowModalKeyboard" });
        }
        HideVirtualKeyboard(e) {
          this.SendMessage({ message: "HideVirtualKeyboard", msDelay: e });
        }
        OnBrowserViewMessage(e, t) {
          e == Gr && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          zr(e) && e.message;
        }
        SendMessage(e) {
          const t = { type: "VirtualKeyboardMessage", ...e };
          (0, p.Dp)("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                t.type,
                JSON.stringify(t),
              )
            : this.m_ownerWindow &&
              (j(
                this.m_ownerWindow.parent &&
                  this.m_ownerWindow.parent != this.m_ownerWindow,
                "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
              ),
              this.m_ownerWindow.parent.postMessage(t, "*"));
        }
      }
      (0, g.Cg)([h.o], Wr.prototype, "ShowVirtualKeyboard", null),
        (0, g.Cg)([h.o], Wr.prototype, "ShowModalKeyboard", null),
        (0, g.Cg)([h.o], Wr.prototype, "HideVirtualKeyboard", null),
        (0, g.Cg)([h.o], Wr.prototype, "OnBrowserViewMessage", null),
        (0, g.Cg)([h.o], Wr.prototype, "OnMessage", null);
      (0, g.Cg)(
        [h.o],
        class {
          m_showKeyboard;
          m_showModalKeyboard;
          m_hideKeyboard;
          constructor(e, t, r, i) {
            (this.m_showKeyboard = t),
              (this.m_showModalKeyboard = r),
              (this.m_hideKeyboard = i),
              e.on("message", this.OnMessage);
          }
          OnMessage(e, t, r) {
            if (e == Gr) {
              const e = JSON.parse(t);
              if (zr(e))
                switch (e.message) {
                  case "ShowVirtualKeyboard":
                    this.m_showKeyboard();
                    break;
                  case "ShowModalKeyboard":
                    this.m_showModalKeyboard();
                    break;
                  case "HideVirtualKeyboard":
                    this.m_hideKeyboard();
                }
            }
          }
        }.prototype,
        "OnMessage",
        null,
      );
      var Lr = r(402),
        xr = r.n(Lr);
      function Ur(e) {
        let t = 0;
        e.children().each(function () {
          const e = a()(this),
            r = e.css("zIndex");
          "auto" === r
            ? e.css("zIndex", 0)
            : isNaN(parseInt(r)) || (t = Math.max(t, parseInt(r)));
        });
        const r = a()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(t || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let i,
          n,
          s = 0,
          o = 0,
          l = 0,
          c = 0;
        e.prepend(r);
        const u = (e) => {
            const t = e.GetBoundingRect(),
              i = r[0].getBoundingClientRect();
            return {
              left: t.x - i.x - 0,
              top: t.y - i.y - 0,
              height: t.height,
              width: t.width,
            };
          },
          d = (e, t) => {
            (s = t.left),
              (o = t.top),
              (l = t.height),
              (c = t.width),
              e.css({ left: s, top: o, height: l, width: c });
          },
          m = (e) => {
            if ((i && (i(), (i = void 0)), e && e.BWantsFocusRing())) {
              let t = a()("<div/>", {
                  "data-focusring": !0,
                  style: "position: absolute; pointer-events: none; ",
                  class: xr().FocusRing,
                }),
                m = u(e);
              d(t, m),
                r.append(t),
                (n = () =>
                  ((e, t) => {
                    if (e && e.BWantsFocusRing()) {
                      let r = u(e);
                      (r.left == s &&
                        r.top == o &&
                        r.height == l &&
                        r.width == c) ||
                        d(t, r);
                    }
                  })(e, t));
              let g = window.setInterval(n, 200),
                h = e.Tree.OnActiveStateChangedCallbacks.Register((e) => {
                  e ? t.show() : t.hide();
                });
              i = () => {
                window.clearInterval(g),
                  t.remove(),
                  (n = void 0),
                  h.Unregister();
              };
            }
          };
        return {
          OnBlur: () => m(null),
          OnFocus: (e, t) => m(t),
          OnFocusChange: (e, t, r) => m(r),
          OnForceMeasureFocusRing: () => n && n(),
        };
      }
      function kr(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: jr, onMoveDown: jr }),
        Object.seal({ onMoveRight: jr, onMoveLeft: jr });
      function jr(e, t) {
        if (e.is_repeat) return !1;
        const r = t.GetRelativeDirection(e.button);
        return r == ze.FORWARD
          ? t.BFocusFirstChild(i.GAMEPAD)
          : r == ze.BACKWARD && t.BFocusLastChild(i.GAMEPAD);
      }
      function Hr(e) {
        if (e) {
          const t = Function("event", e);
          return (e) => t.apply(e.currentTarget, [e]);
        }
        return null;
      }
      function Vr() {
        return !0;
      }
      function qr(e) {
        return "BlockMovement" == e
          ? Vr
          : "RepeatNavigationBoundary" == e
            ? kr
            : e
              ? Function("detail", e)
              : null;
      }
      function Kr(e) {
        this.click(), e.stopPropagation();
      }
      function $r(e) {
        a()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function Qr(e, t) {
        t ? a()(e).addClass("gpfocus") : a()(e).removeClass("gpfocus");
      }
      function Yr(e) {
        const t = e.currentTarget;
        if (e.defaultPrevented || !B(t)) return !1;
        const r = e.detail.is_repeat ? 4.5 : 3.33,
          i = "smooth",
          n = t.ownerDocument,
          a = n.defaultView;
        switch (e.detail.button) {
          case s.pR.DIR_UP:
            if (a.scrollY > 3)
              return Ie(a, { top: -a.innerHeight / r, behavior: i }), !0;
            break;
          case s.pR.DIR_RIGHT:
            if (a.scrollX + a.innerWidth < n.body.clientWidth - 3)
              return Ie(a, { left: a.innerWidth / r, behavior: i }), !0;
            break;
          case s.pR.DIR_DOWN:
            if (a.scrollY + a.innerHeight < n.body.clientHeight - 3)
              return Ie(a, { top: a.innerHeight / r, behavior: i }), !0;
            break;
          case s.pR.DIR_LEFT:
            if (a.scrollX > 3)
              return Ie(a, { left: a.innerWidth / r, behavior: i }), !0;
        }
        return !1;
      }
      const Xr = new L("FocusNavigation").Debug;
      var Jr;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(Jr || (Jr = {}));
      const Zr = new Wr();
      let ei,
        ti = !1,
        ri = null;
      function ii(e) {
        ti ||
          ((ri = new Or()),
          (ei = new b(ri)),
          ei.RegisterForFocusChanged(ri.GetDefaultContext()),
          Zr.Init(window),
          ei.BIsGamepadInputExternallyControlled() || ri.RegisterInputSource(e),
          (ei.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            ri.RegisterInputSource(new R(window)),
          (function (e) {
            a()("html").addClass("gpnav_active");
            const t = a()("body"),
              r = e.GetDefaultContext(),
              i = e.NewGamepadNavigationTree(r, "legacy", void 0, {
                historyMode: "navigationapi",
              });
            a()(window).on("touchstart mousedown focus", () =>
              r.OnActivate(window),
            ),
              a()(window).on("blur", () => r.OnDeactivate(window));
            const n = Ur(t);
            (i.Root.m_FocusRing = n),
              i.Root.SetProperties({
                scrollIntoViewType: Ge.NoTransformSparseContent,
              }),
              i.SetIsEnabled(!0),
              i.OnActiveStateChangedCallbacks.Register((e) => {
                const t = i.GetLastFocusedNode();
                t?.Element && Qr(t.Element, e);
              }),
              Object.assign(window, {
                legacyWebFocusNavController: ri,
                __nav_tree_root: i,
                __virtual_keyboard_client: Zr,
              }),
              ai.set(document.body, i.Root),
              li(document.body, i.Root),
              gi(void 0, !0),
              e.RegisterGamepadNavigationTree(i, window),
              r.OnMount(window),
              window.document.hasFocus() && r.OnActivate(window);
            a()(document.body).on("vgp_onbuttondown", function (e) {
              i.OnRootButtonDown(e.originalEvent);
            }),
              c(document.body, Yr);
            new MutationObserver(ni).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (function (e) {
                fe = e;
              })(!0),
              (function () {
                Object.assign(window, bi),
                  window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
              })(),
              !1;
          })(ri)),
          (ti = !0);
      }
      function ni(e) {
        for (const t of e) {
          const e = [],
            r = [];
          v(
            t,
            (t) => e.push(t),
            (e) => r.push(e),
          ),
            e.length && gi(a()(e)),
            r.length && mi(a()(r));
        }
      }
      const ai = new WeakMap(),
        si = new WeakMap();
      let oi = [];
      function li(e, t) {
        if (t instanceof We) {
          const r = t.GetDepth();
          oi[r] || (oi[r] = []), oi[r].push([e, t]);
        }
        ai.set(e, t);
      }
      function ci(e, t) {
        const r = si.has(e) ? si.get(e) : [];
        r.push(t), si.set(e, r);
      }
      function ui(e) {
        return "jquery" in e
          ? ai.get(e[0]) || Jr.Unknown
          : ai.get(e) || Jr.Unknown;
      }
      function di(e) {
        return "jquery" in e ? ai.has(e[0]) : ai.has(e);
      }
      function mi(e) {
        e.find("*")
          .addBack()
          .each(function () {
            si.get(this)?.forEach((e) => e()),
              ai.delete(this),
              si.delete(this),
              a()(this).attr("data-nav-modal") && fi(this);
          });
      }
      function gi(e, t = !1) {
        performance.now();
        const r =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        a()(r, e)
          .addBack(r)
          .each(function () {
            var e;
            di((e = this)) || _i(e);
          }),
          (function () {
            for (let e = oi.length - 1; e >= 0; e--)
              if (oi[e])
                for (let [t, r] of oi[e]) {
                  ci(t, r.Tree.RegisterNavigationItem(r, t));
                  const e = a()(t).data("navTreeModal");
                  e &&
                    (a()(t).data(
                      "unregisterNavTree",
                      ri.RegisterGamepadNavigationTree(e, window),
                    ),
                    e.Activate(!0));
                }
            oi = [];
          })();
      }
      function hi(e) {
        const t = a()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          !(!t.is(":visible") || "hidden" == t.css("visibility")) &&
          (0 != t.outerWidth() ||
            0 != t.outerHeight() ||
            "hidden" !== t.css("overflow"))
        );
      }
      function _i(e) {
        const t = a()(e),
          r = pi(e);
        if (r instanceof Ue || r == Jr.InReactTree)
          return li(e, Jr.InReactTree), Jr.InReactTree;
        const n = r.Tree;
        let s,
          o = t.data("panel") || {},
          u = hi;
        if (
          (t.attr("data-nav-modal")
            ? (s = (function (e, t) {
                const r = ri.NewGamepadNavigationTree(
                    ri.GetDefaultContext(),
                    "modal_dialog",
                    e,
                    { modal: !0 },
                  ),
                  i = Ur(a()(t));
                return (
                  (r.Root.m_FocusRing = i),
                  r.Root.SetProperties({ focusableIfEmpty: !0 }),
                  a()(t).data("navTreeModal", r),
                  li(t, r.Root),
                  r.Root
                );
              })(n, e))
            : t.data("reactNavRoot")
              ? ((s = new Ue(t.data("reactNavRoot"), r)), (u = void 0))
              : (s = n.CreateNode(r, r.m_FocusRing)),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (o.focusable = o.focusable ?? !0),
            (o.clickOnActivate = o.clickOnActivate ?? !0);
        else if ("INPUT" == e.tagName)
          switch (((o.focusable = o.focusable ?? !0), e.getAttribute("type"))) {
            case "radio":
            case "checkbox":
              o.clickOnActivate = o.clickOnActivate ?? !0;
              break;
            case "text":
            case "password":
              o.enableVirtualKeyboard = o.enableVirtualKeyboard ?? !0;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((o.focusable = o.focusable ?? !0),
            (o.enableVirtualKeyboard = o.enableVirtualKeyboard ?? !0));
        const g = o["flow-children"];
        delete o["flow-children"];
        let {
            clickOnActivate: h,
            maintainX: _,
            maintainY: p,
            enableVirtualKeyboard: f,
            preferredChild: b,
            onOKActionDescription: B,
            onCancelActionDescription: v,
            onSecondaryActionDescription: y,
            onOptionsActionDescription: w,
            onMenuActionDescription: S,
            actionDescriptionMap: T,
            onOKButton: C,
            onCancelButton: M,
            onSecondaryButton: I,
            onOptionsButton: R,
            onMenuButton: A,
            onMoveUp: F,
            onMoveRight: E,
            onMoveDown: N,
            onMoveLeft: D,
            onGamepadDirection: O,
            bFocusRingRoot: P,
            type: G,
            ...z
          } = o,
          W = Hr(C),
          L = Hr(M),
          x = Hr(I),
          U = Hr(R),
          k = Hr(A),
          j = Hr(O);
        G || (G = "Panel"),
          "PanelGroup" == G &&
            ({ onOKButtonHandler: W, onCancelButtonHandler: L } = (function (
              e,
              t,
            ) {
              const {
                onOKButtonHandler: r,
                onCancelButtonHandler: n,
                navNode: a,
              } = e;
              return (
                (t.focusable = !1 !== t.focusable),
                {
                  onOKButtonHandler: (e) =>
                    !(
                      !a.BHasFocus() ||
                      !a.BChildTakeFocus(i.GAMEPAD, e.detail.button)
                    ) ||
                    (!!r && r(e)),
                  onCancelButtonHandler: (e) =>
                    !(
                      !a.BFocusWithin() ||
                      a.BHasFocus() ||
                      !a.BTakeFocus(i.GAMEPAD, e.detail.button)
                    ) ||
                    (!!n && n(e)),
                }
              );
            })(
              { onOKButtonHandler: W, onCancelButtonHandler: L, navNode: s },
              z,
            )),
          W &&
            ci(
              t[0],
              (function (e, t) {
                return l(e, "vgp_onok", d(t));
              })(t[0], W),
            ),
          L &&
            ci(
              t[0],
              (function (e, t) {
                return l(e, "vgp_oncancel", d(t));
              })(t[0], L),
            ),
          x &&
            y &&
            ci(
              t[0],
              (function (e, t) {
                return l(e, "vgp_onsecondaryaction", d(t));
              })(t[0], x),
            ),
          U &&
            w &&
            ci(
              t[0],
              (function (e, t) {
                return l(e, "vgp_onoptions", d(t));
              })(t[0], U),
            ),
          k &&
            S &&
            ci(
              t[0],
              (function (e, t) {
                return l(e, "vgp_onmenu", d(t));
              })(t[0], k),
            ),
          j && ci(t[0], c(t[0], j));
        const H = (function (e, t, r, i) {
            const n = {};
            return (
              e && (n.onMoveUp = qr(e)),
              t && (n.onMoveRight = qr(t)),
              r && (n.onMoveDown = qr(r)),
              i && (n.onMoveLeft = qr(i)),
              n
            );
          })(F, E, N, D),
          V = g ? Pr(g) : Oe.NONE;
        V != Oe.NONE && (z.layout = V),
          _
            ? (z.navEntryPreferPosition = Pe.MAINTAIN_X)
            : p
              ? (z.navEntryPreferPosition = Pe.MAINTAIN_Y)
              : b && (z.navEntryPreferPosition = Pe.PREFERRED_CHILD),
          h &&
            (!1 !== z.focusable && (z.focusable = !0),
            t.on("vgp_onok", "firstChild" === h ? $r : Kr),
            t.attr("role") ||
              ("A" !== t.prop("tagName") && t.attr("role", "button")),
            ci(e, () => {
              t.off("vgp_onok");
            })),
          f &&
            (t.on("vgp_onok.vkbindings", () => Zr.ShowVirtualKeyboard()),
            t.on("click.vkbindings", () => Zr.ShowVirtualKeyboard()),
            t.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                Zr.HideVirtualKeyboard();
            }),
            ci(e, () => {
              t.off(".vkbindings");
            })),
          z.focusable && void 0 === t.attr("tabIndex") && t.attr("tabIndex", 0),
          z.focusable && s.SubscribableHasFocus.Subscribe((t) => Qr(e, t)),
          P &&
            ((s.m_FocusRing = Ur(t)),
            "static" == t.css("position") && t.css("position", "relative"));
        const q = {
          fnCanTakeFocus: u,
          actionDescriptionMap: m({
            onOKActionDescription: B,
            onCancelActionDescription: v,
            onSecondaryActionDescription: y,
            onOptionsActionDescription: w,
            onMenuActionDescription: S,
            actionDescriptionMap: T,
          }),
          ...H,
          ...z,
        };
        return s.SetProperties(q), li(e, s), s;
      }
      function pi(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let r = ui(t);
        if (r == Jr.Unknown)
          r = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if (re(e) != Oe.COLUMN) t = !0;
                else {
                  const r = re(e.parentElement);
                  (r != Oe.ROW && r != Oe.ROW_REVERSE) || (t = !0);
                }
            }
            let r = Jr.NotNeeded;
            return t ? (r = _i(e)) : li(e, r), r;
          })(t);
        else if (r == Jr.InReactTree) return r;
        return r instanceof We ? r : pi(t);
      }
      function fi(e) {
        const t = a()(e).data("unregisterNavTree");
        console.assert(t, "missing unregister binding"),
          t(),
          a()(e).removeAttr("data-nav-modal"),
          a()(e).removeData("unregisterNavTree"),
          a()(e).removeClass("navTreeModal");
      }
      const bi = {
        InstrumentFocusElements: gi,
        ForceUpdateFocusElements: function (e) {
          mi(a()(e)), gi(a()(e));
        },
        GPNavFocusChild: function (e) {
          let t = ui(e[0]);
          return (
            t instanceof We || (t = pi(e[0])),
            t instanceof We && t.BTakeFocus(i.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          Xr("Showing element as modal", e);
          const t = a()(e),
            r = di(t);
          return (
            r &&
              (Xr(
                "Element already in DOM tree, forcibly re-instrumenting elements so they are parented to modal",
              ),
              mi(t)),
            t.attr("data-nav-modal", "true"),
            r && gi(t),
            () => fi(e)
          );
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? Zr.ShowVirtualKeyboard() : Zr.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const r = ui(e);
          r instanceof We &&
            r.SetProperties({ ...r.m_Properties, actionDescriptionMap: m(t) });
        },
      };
    },
    67: (e, t, r) => {
      "use strict";
      r.d(t, { T: () => i, h: () => n });
      const i = "GamepadInput";
      var n;
      !(function (e) {
        (e[(e.PageUnloading = 0)] = "PageUnloading"),
          (e[(e.Unknown = 1)] = "Unknown"),
          (e[(e.None = 2)] = "None"),
          (e[(e.Basic = 3)] = "Basic"),
          (e[(e.Full = 4)] = "Full");
      })(n || (n = {}));
    },
    263: (e, t, r) => {
      "use strict";
      r.d(t, { A7: () => s, Vp: () => o, n4: () => l });
      var i = r(629),
        n = r(600),
        a = r(67);
      class s {
        PostMessage(e) {}
        RegisterForMessage(e) {}
      }
      class o {
        m_fnCallback = void 0;
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(a.T, t);
        }
        OnMessage(e, t) {
          if (e == a.T) {
            const e = JSON.parse(t);
            this.m_fnCallback(e);
          } else if ("Checkout" == e) {
            let e = JSON.parse(t);
            if ("paypal_success" == e.action)
              try {
                window.OnPayPalSuccess(e.transid);
              } catch (e) {}
            else if ("paypal_cancel" == e.action)
              try {
                window.OnPayPalCancel(e.transid);
              } catch (e) {}
          } else if ("PinnedView" == e) {
            let e = JSON.parse(t);
            try {
              window.HandleOverlayWindowPinnedView(
                1 == e.bPinned,
                1 == e.bShowPinnedView,
              );
            } catch (e) {}
          }
        }
      }
      (0, i.Cg)([n.o], o.prototype, "OnMessage", null);
      class l {
        m_postWindow;
        m_fnCallback = void 0;
        constructor(e) {
          (this.m_postWindow = e),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          this.m_postWindow.postMessage({ gamepadMessage: a.T, args: t }, "*");
        }
        OnMessage(e) {
          let t = e?.data;
          if (t && t.gamepadMessage == a.T && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, i.Cg)([n.o], l.prototype, "OnMessage", null);
    },
  },
]);
