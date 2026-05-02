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
    745: (e, t) => {
      "use strict";
      var n = Symbol.for("react.transitional.element"),
        o = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        r = Symbol.for("react.profiler"),
        a = Symbol.for("react.consumer"),
        c = Symbol.for("react.context"),
        l = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        h = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        m = Symbol.iterator;
      /**
       * @license React
       * react.production.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var g = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        p = Object.assign,
        _ = {};
      function f(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = _),
          (this.updater = n || g);
      }
      function v() {}
      function b(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = _),
          (this.updater = n || g);
      }
      (f.prototype.isReactComponent = {}),
        (f.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (f.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (v.prototype = f.prototype);
      var C = (b.prototype = new v());
      (C.constructor = b), p(C, f.prototype), (C.isPureReactComponent = !0);
      var A = Array.isArray,
        w = { H: null, A: null, T: null, S: null, V: null },
        S = Object.prototype.hasOwnProperty;
      function R(e, t, o, i, s, r) {
        return (
          (o = r.ref),
          {
            $$typeof: n,
            type: e,
            key: t,
            ref: void 0 !== o ? o : null,
            props: r,
          }
        );
      }
      function I(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var T = /\/+/g;
      function F(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? ((n = "" + e.key),
            (o = { "=": "=0", ":": "=2" }),
            "$" +
              n.replace(/[=:]/g, function (e) {
                return o[e];
              }))
          : t.toString(36);
        var n, o;
      }
      function N() {}
      function E(e, t, i, s, r) {
        var a = typeof e;
        ("undefined" !== a && "boolean" !== a) || (e = null);
        var c,
          l,
          u = !1;
        if (null === e) u = !0;
        else
          switch (a) {
            case "bigint":
            case "string":
            case "number":
              u = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case o:
                  u = !0;
                  break;
                case d:
                  return E((u = e._init)(e._payload), t, i, s, r);
              }
          }
        if (u)
          return (
            (r = r(e)),
            (u = "" === s ? "." + F(e, 0) : s),
            A(r)
              ? ((i = ""),
                null != u && (i = u.replace(T, "$&/") + "/"),
                E(r, t, i, "", function (e) {
                  return e;
                }))
              : null != r &&
                (I(r) &&
                  ((c = r),
                  (l =
                    i +
                    (null == r.key || (e && e.key === r.key)
                      ? ""
                      : ("" + r.key).replace(T, "$&/") + "/") +
                    u),
                  (r = R(c.type, l, void 0, 0, 0, c.props))),
                t.push(r)),
            1
          );
        u = 0;
        var h,
          g = "" === s ? "." : s + ":";
        if (A(e))
          for (var p = 0; p < e.length; p++)
            u += E((s = e[p]), t, i, (a = g + F(s, p)), r);
        else if (
          "function" ==
          typeof (p =
            null === (h = e) || "object" != typeof h
              ? null
              : "function" == typeof (h = (m && h[m]) || h["@@iterator"])
                ? h
                : null)
        )
          for (e = p.call(e), p = 0; !(s = e.next()).done; )
            u += E((s = s.value), t, i, (a = g + F(s, p++)), r);
        else if ("object" === a) {
          if ("function" == typeof e.then)
            return E(
              (function (e) {
                switch (e.status) {
                  case "fulfilled":
                    return e.value;
                  case "rejected":
                    throw e.reason;
                  default:
                    switch (
                      ("string" == typeof e.status
                        ? e.then(N, N)
                        : ((e.status = "pending"),
                          e.then(
                            function (t) {
                              "pending" === e.status &&
                                ((e.status = "fulfilled"), (e.value = t));
                            },
                            function (t) {
                              "pending" === e.status &&
                                ((e.status = "rejected"), (e.reason = t));
                            },
                          )),
                      e.status)
                    ) {
                      case "fulfilled":
                        return e.value;
                      case "rejected":
                        throw e.reason;
                    }
                }
                throw e;
              })(e),
              t,
              i,
              s,
              r,
            );
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead.",
            ))
          );
        }
        return u;
      }
      function D(e, t, n) {
        if (null == e) return e;
        var o = [],
          i = 0;
        return (
          E(e, o, "", "", function (e) {
            return t.call(n, e, i++);
          }),
          o
        );
      }
      function y(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var O =
        "function" == typeof reportError
          ? reportError
          : function (e) {
              if (
                "object" == typeof window &&
                "function" == typeof window.ErrorEvent
              ) {
                var t = new window.ErrorEvent("error", {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    "object" == typeof e &&
                    null !== e &&
                    "string" == typeof e.message
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                "object" == typeof process &&
                "function" == typeof process.emit
              )
                return void process.emit("uncaughtException", e);
              console.error(e);
            };
      function L() {}
    },
    696: (e, t, n) => {
      "use strict";
      n(745);
    },
    693: (e, t, n) => {
      "use strict";
      n.d(t, { InitializeGamepadNavigation: () => Et });
      var o,
        i = n(669),
        s = n.n(i),
        r = n(262);
      n(696);
      !(function (e) {
        (e[(e.GAMEPAD = 0)] = "GAMEPAD"),
          (e[(e.KEYBOARD = 1)] = "KEYBOARD"),
          (e[(e.APPLICATION = 2)] = "APPLICATION"),
          (e[(e.BROWSER = 3)] = "BROWSER"),
          (e[(e.AUTOFOCUS = 4)] = "AUTOFOCUS");
      })(o || (o = {}));
      let a = {
        [r.pR.OK]: "vgp_onok",
        [r.pR.CANCEL]: "vgp_oncancel",
        [r.pR.SECONDARY]: "vgp_onsecondaryaction",
        [r.pR.OPTIONS]: "vgp_onoptions",
        [r.pR.START]: "vgp_onmenu",
      };
      function c(e, t, n) {
        return (
          e.addEventListener(t, n),
          () =>
            (function (e, t, n) {
              e.removeEventListener(t, n);
            })(e, t, n)
        );
      }
      function l(e, t) {
        return c(e, "vgp_ondirection", h(t));
      }
      function u(e, t, n) {
        let o = e;
        if (!o || !o.ownerDocument || !o.ownerDocument.defaultView) return !0;
        let i = new o.ownerDocument.defaultView.CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n,
        });
        return o.dispatchEvent(i);
      }
      function h(e) {
        return (t) => {
          !1 !== e(t) && (t.stopPropagation(), t.preventDefault());
        };
      }
      function d(e) {
        const {
            onOKActionDescription: t,
            onCancelActionDescription: n,
            onSecondaryActionDescription: o,
            onOptionsActionDescription: i,
            onMenuActionDescription: s,
            actionDescriptionMap: a,
          } = e,
          c = { ...a };
        return (
          void 0 !== t && (c[r.pR.OK] = t),
          void 0 !== n && (c[r.pR.CANCEL] = n),
          void 0 !== o && (c[r.pR.SECONDARY] = o),
          void 0 !== i && (c[r.pR.OPTIONS] = i),
          void 0 !== s && (c[r.pR.START] = s),
          c
        );
      }
      var m = n(629),
        g = n(947),
        p = n(100),
        _ = n(519),
        f = n(398);
      class v {
        m_NavigationController;
        m_postMessage;
        m_bIsGamepadInputExternallyControlled = !1;
        constructor(e) {
          if (
            ((this.m_NavigationController = e),
            (0, _.Dp)("BrowserView.RegisterForMessageFromParent") &&
              (0, _.Dp)("BrowserView.PostMessageToParent"))
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
          let n = t?.Tree;
          return n || (n = e?.Tree), n && n.Controller.IsActiveFocusNavTree(n);
        }
        OnFocusChanged(e, t, n) {
          this.BFromActiveNavTree(t, n) &&
            this.OnActionDescriptionTargetChanged(n);
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
            for (let n = e; null != n; n = n.Parent)
              this.m_rgCallbackRegistrations.push(
                n.ActionDescriptionChangedCallbackList.Register(t).Unregister,
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
          let t = p.h.Basic;
          window.bSupportsGamepadUI && (t = p.h.Full),
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
      function b(e) {
        return null != e && void 0 !== e.focus;
      }
      (0, m.Cg)([g.o], v.prototype, "OnFocusChanged", null),
        (0, m.Cg)([g.o], v.prototype, "OnMessage", null),
        (0, m.Cg)([g.o], v.prototype, "PostPageUnloading", null);
      function C(e, t, n) {
        if ("childList" === e.type) {
          for (let n = 0; n < e.addedNodes.length; n++) {
            const o = e.addedNodes[n];
            if (o.nodeType === Node.ELEMENT_NODE) {
              const e = o;
              e.parentElement && t(e);
            }
          }
          for (let t = 0; t < e.removedNodes.length; t++) {
            const o = e.removedNodes[t];
            o.nodeType === Node.ELEMENT_NODE && n?.(o);
          }
        }
      }
      function A(e, t) {
        return (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e
        );
      }
      function w(e, t, n) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
      }
      function S() {
        return !!window.document;
      }
      let R;
      function I() {
        if (!S()) return R || (R = T()), R;
        let e = (function (e) {
          if (!S() || !window.document.cookie) return null;
          const t = document.cookie.match("(^|; )" + e + "=([^;]*)");
          return t && t[2] ? decodeURIComponent(t[2]) : null;
        })("sessionid");
        return e || (e = T()), e;
      }
      function T() {
        const e = (function () {
          let e = "";
          for (let t = 0; t < 24; t++) e += A(0, 35).toString(36);
          return e;
        })();
        return (
          (function (e, t, n, o) {
            if (!S()) return;
            o || (o = "/");
            let i = "";
            if (void 0 !== n && n) {
              const e = new Date();
              e.setTime(e.getTime() + 864e5 * n),
                (i = "; expires=" + e.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              i +
              ";path=" +
              o;
          })("sessionid", e, 0),
          e
        );
      }
      new Set();
      const F = {
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
          return I();
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
      class N extends r.nh {
        m_lastButtonDown = r.pR.INVALID;
        constructor(e) {
          super(),
            this.SetSourceType(r.Vz.KEYBOARD_SIMULATOR),
            e.addEventListener("keydown", this.OnKeyDown, { capture: !0 }),
            e.addEventListener("keyup", this.OnKeyUp, { capture: !0 }),
            e.addEventListener("blur", this.Reset);
        }
        OnKeyDown(e) {
          const t = this.TranslateKey(e);
          t != r.pR.INVALID &&
            (e.preventDefault(),
            e.stopPropagation(),
            t != this.m_lastButtonDown &&
              (this.Reset(),
              this.OnButtonDown(t),
              (this.m_lastButtonDown = t)));
        }
        OnKeyUp(e) {
          const t = this.TranslateKey(e);
          t != r.pR.INVALID &&
            (this.OnButtonUp(t),
            (this.m_lastButtonDown = r.pR.INVALID),
            e.preventDefault(),
            e.stopPropagation());
        }
        Reset() {
          this.m_lastButtonDown != r.pR.INVALID &&
            (this.OnButtonUp(this.m_lastButtonDown),
            (this.m_lastButtonDown = r.pR.INVALID));
        }
        GetKeycodeFromEvent(e) {
          return "linux" === F.PLATFORM && e.key.length > 1
            ? e.key || e.code
            : e.code || e.key;
        }
        BShouldSwallowEventForTextInputWorkaround(e) {
          if (
            !(
              b(e.target) &&
              ("INPUT" === e.target.nodeName ||
                "TEXTAREA" === e.target.nodeName ||
                e.target.hasAttribute("contenteditable"))
            )
          )
            return !1;
          if (e.target.hasAttribute("contenteditable")) return !0;
          const t = this.GetKeycodeFromEvent(e);
          let n = e.target;
          const o = Array.from(
            n.ownerDocument.getElementsByClassName("gpfocus"),
          ).some((e) =>
            Array.from(e.classList).some((e) => e.includes("virtualkeyboard")),
          );
          switch (t) {
            case "ArrowUp": {
              if (o) return !0;
              let t = n?.value.indexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t < (n?.selectionStart ?? 0)
              );
            }
            case "ArrowDown": {
              if (o) return !0;
              let t = n?.value.lastIndexOf("\n");
              return (
                "TEXTAREA" === e.target.nodeName &&
                t >= 0 &&
                t >= (n?.selectionStart ?? 0) &&
                (n?.selectionEnd ?? 0) < n?.value.length
              );
            }
            case "ArrowLeft":
              return (
                !!o ||
                ((n?.selectionStart ?? 0) > 0 && (n?.selectionEnd ?? 0) > 0)
              );
            case "ArrowRight":
              return (
                !!o ||
                ((n?.selectionStart ?? 0) < n?.value.length &&
                  (n?.selectionEnd ?? 0) < n?.value.length)
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
          if (e.altKey) return r.pR.INVALID;
          if (this.BShouldSwallowEventForTextInputWorkaround(e))
            return r.pR.INVALID;
          if (e.ctrlKey)
            if (e.shiftKey)
              switch (t) {
                case "Digit4":
                  return r.pR.TRIGGER_LEFT;
                case "Digit5":
                  return r.pR.TRIGGER_RIGHT;
                default:
                  return r.pR.INVALID;
              }
            else
              switch (t) {
                case "Digit1":
                  return r.pR.STEAM_GUIDE;
                case "Digit2":
                  return r.pR.STEAM_QUICK_MENU;
                case "Digit3":
                case "Digit9":
                  return r.pR.SELECT;
                case "Digit4":
                  return r.pR.BUMPER_LEFT;
                case "Digit5":
                  return r.pR.BUMPER_RIGHT;
                case "Digit6":
                  return r.pR.LSTICK_CLICK;
                case "Digit7":
                  return r.pR.RSTICK_CLICK;
                case "Digit8":
                  return r.pR.OPTIONS;
                case "Digit0":
                  return r.pR.START;
              }
          else if (!e.shiftKey)
            switch (t) {
              case "Escape":
                return r.pR.CANCEL;
              case "Enter":
                return r.pR.OK;
              case "Backspace":
                return r.pR.SECONDARY;
              case "ArrowUp":
                return r.pR.DIR_UP;
              case "ArrowDown":
                return r.pR.DIR_DOWN;
              case "ArrowLeft":
                return r.pR.DIR_LEFT;
              case "ArrowRight":
                return r.pR.DIR_RIGHT;
            }
          return r.pR.INVALID;
        }
      }
      (0, m.Cg)([g.o], N.prototype, "OnKeyDown", null),
        (0, m.Cg)([g.o], N.prototype, "OnKeyUp", null),
        (0, m.Cg)([g.o], N.prototype, "Reset", null);
      var E,
        D = n(10),
        y = n(866);
      class O {
        SyncStore(e) {
          return this.Subscribe(e).Unsubscribe;
        }
        GetValue() {
          return this.Value;
        }
      }
      (0, m.Cg)([g.o], O.prototype, "SyncStore", null),
        (0, m.Cg)([g.o], O.prototype, "GetValue", null);
      class L extends O {}
      class M extends L {
        m_callbacks;
        m_currentValue;
        m_fnEquals;
        constructor(e, t) {
          super(),
            (this.m_callbacks = new y.l()),
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
      function B(e, t) {
        return new M(e, t);
      }
      class P extends O {
        m_fnMap;
        m_originalSubscribableValue;
        m_mappedSubscribableValue;
        m_bMappedValueStale = !1;
        constructor(e, t, n) {
          super(),
            (this.m_originalSubscribableValue = e),
            (this.m_mappedSubscribableValue = new M(t(e.Value), n)),
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
      class G {
        m_schTimer;
        m_fnCallback;
        m_fnOnCancel;
        Schedule(e, t) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = t),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
        }
        AsyncSchedule(e, t) {
          return new Promise((n, o) => {
            this.Schedule(e, () => {
              t(), n();
            }),
              (this.m_fnOnCancel = o);
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
      (0, m.Cg)([g.o], G.prototype, "ScheduledInternal", null);
      class x {
        m_vecCallbacks = [];
        Push(e) {
          this.m_vecCallbacks.push(e);
        }
        PushArrayRemove(e, t) {
          this.m_vecCallbacks.push(() => D.x9(e, t));
        }
        Unregister() {
          for (const e of this.m_vecCallbacks) e();
          this.m_vecCallbacks = [];
        }
        GetUnregisterFunc() {
          return this.Unregister;
        }
      }
      (0, m.Cg)([g.o], x.prototype, "Unregister", null),
        (function (e) {
          (e[(e.Debug = 0)] = "Debug"),
            (e[(e.Info = 1)] = "Info"),
            (e[(e.Warning = 2)] = "Warning"),
            (e[(e.Error = 3)] = "Error");
        })(E || (E = {}));
      class k {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(e, t) {
          (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            U.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(E.Debug, ...e);
        }
        Info(...e) {
          this.Log(E.Info, ...e);
        }
        Warning(...e) {
          this.Log(E.Warning, ...e);
        }
        Error(...e) {
          this.Log(E.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(E.Error, "Assertion failed:", ...t);
        }
        IsDebugEnabled() {
          return U.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          const n = U.Get().IsDebugLogEnabled(this.m_sName);
          if (e == E.Debug && !n) return;
          let o = this.m_sName;
          const i = this.m_fnIdGenerator?.() ?? null;
          null != i && (o += " (" + i + ")");
          W(e, n, U.Get().IncludeBacktraceInLog, o, this.m_sName, ...t);
        }
      }
      (0, m.Cg)([g.o], k.prototype, "Debug", null),
        (0, m.Cg)([g.o], k.prototype, "Info", null),
        (0, m.Cg)([g.o], k.prototype, "Warning", null),
        (0, m.Cg)([g.o], k.prototype, "Error", null),
        (0, m.Cg)([g.o], k.prototype, "Assert", null);
      class U {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        m_setKnownDebugLogs = new Set();
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_SettingsChangedCallback = new y.l();
        m_bLoading = !0;
        constructor() {
          this.LoadSettings();
        }
        LogAsLogManager(...e) {
          W(
            E.Info,
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
            U.k_IncludeBacktraceInLog_StorageKey,
          );
          const t = e(U.k_EnabledLogNames_StorageKey);
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
            U.k_EnabledLogNames_StorageKey,
            JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
          ),
            localStorage.setItem(
              U.k_IncludeBacktraceInLog_StorageKey,
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
            null == window.g_LogManager && (window.g_LogManager = new U()),
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
      function W(e, t, n, o, i, ...s) {
        const r = (function (e) {
            let t = 0;
            for (let n = 0; n < e.length; n++)
              t = e.charCodeAt(n) + ((t << 5) - t);
            return [255 & t, (t >> 8) & 255, (t >> 16) & 255];
          })(i).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15))),
            ),
          ),
          a = (299 * (c = r)[0] + 587 * c[1] + 114 * c[2]) / 1e3 >= 128;
        var c;
        let l = o;
        n &&
          (l =
            (function (e) {
              switch (e) {
                case E.Debug:
                  return String.fromCodePoint(128027);
                case E.Info:
                  return String.fromCodePoint(8505);
                case E.Warning:
                  return String.fromCodePoint(9888);
                case E.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            l);
        const u =
            s.length >= 1 && "string" == typeof s[0] && s[0].includes("%c"),
          h = u && s.shift();
        let d;
        if (
          ((d = t
            ? [
                `%c${l}%c:${u ? " %c" + h : ""}`,
                `color: ${a ? "black" : "white"}; background: rgb(${r.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(u ? [""] : []),
                ...s,
              ]
            : s),
          n)
        )
          console.groupCollapsed(...d),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case E.Debug:
            case E.Info:
              console.log(...d);
              break;
            case E.Warning:
              console.warn(...d);
              break;
            case E.Error:
              console.clogerror
                ? console.clogerror(3, ...d)
                : console.error(...d);
          }
      }
      (window.DebugLogEnable = (...e) => U.Get().SetDebugLogsEnabled(!0, ...e)),
        (window.DebugLogDisable = (...e) =>
          U.Get().SetDebugLogsEnabled(!1, ...e)),
        (window.DebugLogEnableAll = () => U.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => U.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          U.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          U.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = () => U.Get().GetLogNames()),
        (window.DebugLogEnabled = (...e) => U.Get().PrintEnabledLogs(...e)),
        (window.EnableSteamConsole = (e = !0) =>
          U.Get().SetDebugLogEnabled("SteamClient", e));
      const V = { x: "y", y: "x" };
      function H(e, t, ...n) {
        console.assert
          ? 0 == n.length
            ? console.assert(!!e, t)
            : console.assert(!!e, t, ...n)
          : e || console.warn(t, ...n);
      }
      const K = new k("FocusHistory"),
        $ = K.Debug;
      class j {
        m_root;
        constructor(e) {
          this.m_root = e;
        }
        static SerializeNavState(e, t = !0, n = !0) {
          return {
            root: j.SerializeNavNode(e, t, n),
            bHadFocus: e.BFocusWithin() && e.Tree.BIsActiveWithinContext(),
          };
        }
        static SerializeNavNode(e, t = !0, n = !0) {
          let o;
          const [i, s] = e.GetChildren();
          i.length &&
            -1 != s &&
            t &&
            (o = i.map((e, t) => j.SerializeNavNode(e, t == s || n, n)));
          const r = { rgChildren: o };
          return (
            e.NavKey && (r.sNavKey = e.NavKey),
            -1 != s && (r.iActiveChild = s),
            r
          );
        }
        static RestoreSerializedNavState(e, t, n = 0) {
          const { root: i, bHadFocus: s } = t;
          e.Tree.Controller.RestoreHistoryTransaction(() => {
            j.RestoreSerializedNavNode(e, i),
              (1 == n || (0 == n && s)) && e.BTakeFocus(o.APPLICATION);
          });
        }
        static RestoreSerializedNavNode(e, t, n = 0) {
          const { sNavKey: o, iActiveChild: i = -1, rgChildren: s } = t;
          o && H(o == e.NavKey, "navkey mismatch"), e.SetActiveChild(i);
          const r = K.IsDebugEnabled()
            ? `[${e.Tree.id}]${(function (e) {
                if (0 == e) return "";
                let t = "";
                for (let n = 0; n < e; n++) t += "*";
                return (t += " "), t;
              })(n)}`
            : "";
          if (s && s.length) {
            const [t] = e.GetChildren();
            if (-1 != i && K.IsDebugEnabled()) {
              const n = s.length != t.length;
              $(
                `${r}Restoring node ${e.NavKey} which had active child ${i} of ${s.length}${n ? `- now ${t.length} children.` : ""}`,
              );
            }
            let o = new Map();
            t.forEach((e) => {
              e.NavKey && o.set(e.NavKey, e);
            });
            for (const e of s) {
              if (!e.sNavKey) continue;
              const t = o.get(e.sNavKey);
              t && j.RestoreSerializedNavNode(t, e, n + 1);
            }
            if (-1 != i && s[i]?.sNavKey) {
              const n = o.get(s[i].sNavKey);
              $(
                `${r}Restoring node ${e.NavKey}, child with focus: ${s[i].sNavKey} ${void 0 === n ? "MISSING!!" : ""}`,
              ),
                n && e.SetActiveChild(t.indexOf(n));
            }
            let a = 0,
              c = 0;
            for (; a < t.length && c < s.length; ) {
              for (; a < t.length && t[a].NavKey; ) a++;
              for (; c < s.length && s[c].sNavKey; ) c++;
              if (a >= t.length || c >= s.length) break;
              j.RestoreSerializedNavNode(t[a], s[c], n + 1), a++, c++;
            }
          }
        }
      }
      function z(e) {
        return j.SerializeNavState(e, !0, !1);
      }
      function Y(e, t, n = 0) {
        return j.RestoreSerializedNavState(e, t, n);
      }
      class X extends j {
        m_rgHistory = [];
        PushState() {
          this.m_rgHistory.push(j.SerializeNavState(this.m_root));
        }
        PopState(e = 0) {
          this.m_rgHistory.length &&
            j.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
        }
      }
      class q extends j {
        m_mapHistory = new Map();
        SaveState(e) {
          this.m_mapHistory.set(e, j.SerializeNavState(this.m_root));
        }
        RestoreState(e, t = 0) {
          const n = this.m_mapHistory.get(e);
          return (
            !!n &&
            (console.log(`Restoring history for state ${e}`),
            j.RestoreSerializedNavState(this.m_root, n, t),
            !0)
          );
        }
      }
      class Q {
        m_node;
        m_History;
        m_StateHistory;
        constructor(e) {
          this.m_node = e;
        }
        TakeFocus(e) {
          return this.m_node.BTakeFocus(e ? o.GAMEPAD : o.APPLICATION, e);
        }
        ParentTakeFocus(e) {
          this.m_node.Parent?.BTakeFocus(e ? o.GAMEPAD : o.APPLICATION, e);
        }
        ChildTakeFocus(e) {
          return this.m_node.BChildTakeFocus(e ? o.GAMEPAD : o.APPLICATION, e);
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
          this.m_History || (this.m_History = new X(this.m_node)),
            this.m_History.PushState();
        }
        PopState(e = 0) {
          this.m_History && this.m_History.PopState(e);
        }
        SaveState(e) {
          this.m_StateHistory || (this.m_StateHistory = new q(this.m_node)),
            this.m_StateHistory.SaveState(e);
        }
        RestoreState(e, t = 0) {
          return (
            !!this.m_StateHistory && this.m_StateHistory.RestoreState(e, t)
          );
        }
        GetFocusSnapshot() {
          return z(this.m_node);
        }
        RestoreFocusSnapshot(e, t = 0) {
          return Y(this.m_node, e, t);
        }
        NavTree() {
          return this.m_node.Tree;
        }
        Node() {
          return this.m_node;
        }
      }
      function J(e, t, n, o = 0.001) {
        return "x" == e
          ? t.right > n.left + o && t.left + o < n.right
          : "y" == e
            ? t.bottom > n.top + o && t.top + o < n.bottom
            : (H(!1, `Invalid axis ${e}`), !1);
      }
      function Z(e, t, n) {
        let o;
        return (
          "x" == e
            ? (o = Math.min(t.right, n.right) - Math.max(t.left, n.left))
            : "y" == e
              ? (o = Math.min(t.bottom, n.bottom) - Math.max(t.top, n.top))
              : (H(!1, `Invalid axis ${e}`), (o = 0)),
          o < 0 ? 0 : o
        );
      }
      function ee(e, t) {
        return "x" == e
          ? { min: t.left, max: t.right }
          : { min: t.top, max: t.bottom };
      }
      function te(e, t, n) {
        const o = t[e],
          i = ee(e, n);
        return o < i.min ? i.min - o : o > i.max ? o - i.max : 0;
      }
      function ne(e) {
        if (!e) return Me.NONE;
        const t = e.ownerDocument.defaultView,
          n = t.getComputedStyle(e);
        if ("flex" == n.display)
          switch (n.flexDirection) {
            case "row":
              return "wrap" == n.flexWrap ? Me.GRID : Me.ROW;
            case "row-reverse":
              return Me.ROW_REVERSE;
            case "column":
              return Me.COLUMN;
            case "column-reverse":
              return Me.COLUMN_REVERSE;
          }
        else {
          if ("grid" == n.display)
            return "none" !== n.gridTemplateAreas ? Me.GEOMETRIC : Me.GRID;
          if (e.childElementCount > 0) {
            const n = t.getComputedStyle(e.firstElementChild);
            if ("left" === n.float) return Me.ROW;
            if ("right" === n.float) return Me.ROW_REVERSE;
            if ("inline" === n.display || "inline-block" === n.display)
              return Me.GRID;
          }
        }
        return Me.COLUMN;
      }
      function oe(e) {
        switch (e) {
          case r.pR.DIR_UP:
          case r.pR.DIR_DOWN:
            return "y";
          case r.pR.DIR_LEFT:
          case r.pR.DIR_RIGHT:
            return "x";
          default:
            return;
        }
      }
      function ie(e, t, n) {
        const o = [],
          [i, s] = e.GetChildren(),
          r = e.GetActiveChild();
        let a;
        const c = r ? r.Element?.getBoundingClientRect() : null;
        if (r) {
          const e = ae(r, t, n);
          if (
            e &&
            !e.offScreen &&
            ((a = se(r, e, e.overlap, n)), a && !a.visibility.offScreen)
          )
            return a;
          e && o.push({ child: r, visibility: e });
        }
        const l = n || c;
        for (let e = 0; e < i.length; e++) {
          const n = i[e];
          if (n == r) continue;
          const s = ae(n, t, l ?? void 0);
          s && o.push({ child: n, visibility: s });
        }
        let u;
        o.sort(re);
        for (const e of o) {
          const { child: n, visibility: o } = e;
          if (o.offScreen && u) {
            if (!u.visibility.offScreen) break;
            if (o.distance && o.distance > u.visibility.distance) break;
          }
          const i = n == r ? a : se(n, o, o.overlap || t, l ?? void 0);
          i && (!u || re(i, u) < 0) && (u = i);
        }
        return u;
      }
      function se(e, t, n, o) {
        switch (e.GetFocusable()) {
          case "none":
            return;
          case "children":
            return ie(e, t.overlap || n, o);
          case "self":
            return { child: e, visibility: t };
        }
      }
      function re(e, t) {
        const n = e.visibility,
          o = t.visibility;
        return n.offScreen
          ? o.offScreen
            ? n.distance - o.distance
            : 1
          : o.offScreen
            ? -1
            : n.distance - o.distance;
      }
      function ae(e, t, n) {
        const o = e.Element?.getBoundingClientRect(),
          i = e.GetFocusable();
        let s;
        if ("none" == i || !o || !t) return null;
        if ("self" == i) {
          if (
            o.top < t.top ||
            o.right > t.right ||
            o.bottom > t.bottom ||
            o.left < t.left
          ) {
            const e = o.top + o.height / 2,
              n = o.left + o.width / 2;
            if (e < t.top) return { offScreen: "top", distance: t.top - e };
            if (n > t.right)
              return { offScreen: "right", distance: n - t.right };
            if (e > t.bottom)
              return { offScreen: "bottom", distance: e - t.bottom };
            if (n < t.left) return { offScreen: "left", distance: t.left - n };
          }
          n &&
            (s = (function (e, t) {
              let n = 0,
                o = 0;
              return (
                t.right < e.left
                  ? (n = e.left - t.right)
                  : t.left > e.right && (n = t.left - e.right),
                t.bottom < e.top
                  ? (o = e.top - t.bottom)
                  : t.top > e.bottom && (o = t.top - e.bottom),
                Math.sqrt(n * n + o * o)
              );
            })(o, n));
        } else if ("children" == i) {
          const n = e.Element;
          if (!n) return null;
          if (n.scrollHeight > o.height || n.scrollWidth > o.width) {
            const e = n.ownerDocument.defaultView.getComputedStyle(n);
            if ("visible" == e.overflowX || "visible" == e.overflowY)
              return { overlap: t };
          }
          if (o.bottom < t.top)
            return { offScreen: "top", distance: t.top - o.bottom };
          if (o.left > t.right)
            return { offScreen: "right", distance: o.left - t.right };
          if (o.top > t.bottom)
            return { offScreen: "bottom", distance: o.top - t.bottom };
          if (o.right < t.left)
            return { offScreen: "left", distance: t.left - o.right };
        }
        return {
          overlap: {
            top: Math.max(o.top, t.top),
            right: Math.min(o.right, t.right),
            bottom: Math.min(o.bottom, t.bottom),
            left: Math.max(o.left, t.left),
          },
          distance: s,
        };
      }
      function ce(e) {
        return null != e && void 0 !== e.focus;
      }
      function le(e, t) {
        let n = 0,
          o = 0;
        return (
          t.right < e.left
            ? (n = e.left - t.right)
            : t.left > e.right && (n = t.left - e.right),
          t.bottom < e.top
            ? (o = e.top - t.bottom)
            : t.top > e.bottom && (o = t.top - e.bottom),
          Math.sqrt(n * n + o * o)
        );
      }
      function ue(e) {
        let t;
        return e && (t = e.ownerDocument.defaultView), t;
      }
      function he(e, t) {
        let n = e?.parentElement;
        for (; n; ) {
          if (ce(n)) {
            const e = window.getComputedStyle(n);
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
          n = n.parentElement;
        }
        return ce(n) ? n : null;
      }
      function de(e, t) {
        if (!("ownerDocument" in e)) return !0;
        const n = e.ownerDocument.defaultView.getComputedStyle(e),
          o = "x" === t ? n.overflowX : n.overflowY;
        return "auto" === o || "scroll" === o;
      }
      class me {
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
          let n = t / this.m_options.msDuration;
          try {
            this.Update(e(n));
          } catch {}
          this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
        }
        ClearInterval() {
          this.m_bActive = !1;
        }
      }
      class ge extends me {
        m_fnCallback;
        constructor(e, t, n) {
          super(e, t), (this.m_fnCallback = n);
        }
        Update(e) {
          this.m_fnCallback(e);
        }
      }
      class pe extends me {
        m_object;
        m_propTargets;
        m_props = {};
        constructor(e, t, n) {
          super("ownerDocument" in e ? ue(e) : e, n),
            (this.m_object = e),
            (this.m_propTargets = t);
        }
        Start() {
          this.m_props = {};
          for (let e in this.m_propTargets) {
            let t = parseFloat(this.m_object[e]) || 0,
              n = this.m_propTargets[e];
            t != n && (this.m_props[e] = { start: t, end: n });
          }
          super.Start();
        }
        Update(e) {
          for (let t in this.m_props) {
            let n = this.m_props[t],
              o = n.start + (n.end - n.start) * e;
            this.m_object[t] = o;
          }
        }
      }
      const _e = new k("ScrollSnap").Debug;
      let fe = !1;
      let ve;
      function be(e) {
        if (!e) return { left: 0, top: 0, right: 0, bottom: 0 };
        if (!("ownerDocument" in e))
          return {
            left: 0,
            right: e.innerWidth,
            top: 0,
            bottom: e.innerHeight,
          };
        let t = 0,
          n = 0,
          o = e;
        for (; o; ) {
          if ("ownerDocument" in o) {
            const e = window.getComputedStyle(o);
            if ("fixed" === e.position || "sticky" === e.position) break;
          }
          (t += o.offsetTop), (n += o.offsetLeft), (o = o.offsetParent);
        }
        for (o = e?.parentElement; o; ) {
          const { scrollTop: e, scrollLeft: i } = ye(o);
          if (((t -= e), (n -= i), "ownerDocument" in o)) {
            const e = window.getComputedStyle(o);
            if ("fixed" === e.position || "sticky" === e.position) break;
          }
          o = o.parentElement;
        }
        return {
          left: n,
          top: t,
          right: n + e.offsetWidth,
          bottom: t + e.offsetHeight,
        };
      }
      function Ce(e, t) {
        return "x" == t
          ? [e.left, e.right, e.right - e.left]
          : [e.top, e.bottom, e.bottom - e.top];
      }
      function Ae(e, t, n, o) {
        let [i, s, r] = Ce(e, o),
          [a, c, l] = Ce(t, o),
          [u, h] = Ce(n, o);
        if (i < a && s > c) return 0;
        const d = i - u,
          m = s + h,
          g = r > l;
        return (d < a && !g) || (m > c && g)
          ? d - a
          : (d < a && g) || (m > c && !g)
            ? m - c
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
      function Re(e, t) {
        let n = (function (e) {
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
          left: Math.max(0, t.left + n.left),
          right: Math.max(0, t.right - n.right),
          top: Math.max(0, t.top + n.top),
          bottom: Math.max(0, t.bottom - n.bottom),
        };
      }
      function Ie(e) {
        return e > -1 && e < 1;
      }
      function Te(e, t, n, o, i) {
        _e(
          "----------------------------------------------------------------------------------",
        ),
          _e("Scrolling Into View:", t);
        let s = [],
          r = t,
          a = be(t),
          c = i ?? Number.MAX_VALUE;
        for (; r; ) {
          let e = he(r);
          e || (e = ue(r));
          let t = Se(r),
            n = Re(e, be(e)),
            l = De(e),
            u = { element: e, left: 0, top: 0 };
          if (
            (_e(
              "Checking scroll div",
              e,
              `scroll y:${l.scrollTop} of ${l.MaxScrollTop()}, x:${l.scrollLeft} of ${l.MaxScrollLeft()}, adjusted =>`,
              n,
              "target => ",
              a,
            ),
            (o && "y" != o) ||
              !de(e, "y") ||
              ((u.top = Ae(a, n, t, "y")),
              (u.top = w(u.top, -l.scrollTop, l.MaxScrollTop() - l.scrollTop)),
              i &&
                ((u.top = Math.min(c, Math.abs(u.top)) * (u.top < 0 ? -1 : 1)),
                (c -= Math.abs(u.top))),
              _e(`- checked y: ${u.top}`)),
            (o && "x" != o) ||
              !de(e, "x") ||
              ((u.left = Ae(a, n, t, "x")),
              (u.left = w(
                u.left,
                -l.scrollLeft,
                l.MaxScrollLeft() - l.scrollLeft,
              )),
              i &&
                ((u.left =
                  Math.min(c, Math.abs(u.left)) * (u.left < 0 ? -1 : 1)),
                (c -= Math.abs(u.left))),
              _e(`- checked x: ${u.left}`)),
            s.push(u),
            i && !c)
          )
            break;
          if (!("ownerDocument" in e)) break;
          const h = window.getComputedStyle(e);
          if ("fixed" === h.position || "sticky" === h.position) break;
          (r = e),
            (a = {
              top: a.top - u.top,
              right: a.right - u.left,
              bottom: a.bottom - u.top,
              left: a.left - u.left,
            });
        }
        let l = !1;
        for (let e of s) {
          if (Ie(e.left) && Ie(e.top)) continue;
          let t = De(e.element),
            o = t.scrollTop + e.top,
            i = t.scrollLeft + e.left;
          (i = w(i, 0, t.MaxScrollLeft())),
            (o = w(o, 0, t.MaxScrollTop())),
            (Ie(t.scrollLeft - i) && Ie(t.scrollTop - o)) ||
              (t.scrollTo({ left: i, top: o, behavior: n }),
              l || (_e("Scrolling:"), (l = !0)),
              _e(
                `- ${e.top},${e.left} => ${o}, ${i}, behavior: ${n}`,
                e.element,
              ));
        }
      }
      function Fe(e, t) {
        const { top: n, left: o, behavior: i } = t,
          s = De(e);
        s.scrollTo({
          top: s.scrollTop + (n ?? 0),
          left: s.scrollLeft + (o ?? 0),
          behavior: i,
        });
      }
      class Ne {
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
              n = e.top ?? this.scrollTop;
            let o = "sine";
            this.m_animation && (this.m_animation.Cancel(), (o = "linear"));
            if (
              Math.max(
                Math.abs(this.currentScrollTop - n),
                Math.abs(this.currentScrollLeft - t),
              ) > 0
            ) {
              const e = {
                msDuration: 200,
                timing: o,
                onComplete: this.ResetScrollState,
              };
              if (this.m_window) {
                const o = this.currentScrollLeft,
                  i = this.currentScrollTop;
                this.m_animation = new ge(this.m_window, e, (e) => {
                  this.m_window?.scrollTo({
                    left: o + (t - o) * e,
                    top: i + (n - i) * e,
                    behavior: "auto",
                  });
                });
              } else
                (this.m_element.style.scrollSnapType = "initial"),
                  (this.m_animation = new pe(
                    this.m_element,
                    { scrollTop: n, scrollLeft: t },
                    e,
                  ));
              (this.m_scrollLeftTarget = t),
                (this.m_scrollTopTarget = n),
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
      (0, m.Cg)([g.o], Ne.prototype, "ResetScrollState", null);
      const Ee = new WeakMap();
      function De(e) {
        let t = Ee.get(e);
        return t || ((t = new Ne(e)), Ee.set(e, t)), t;
      }
      function ye(e) {
        const t = Ee.get(e);
        return t
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
      }
      const Oe = new k("FocusNavigationMovement"),
        Le = Oe.Debug;
      var Me, Be, Pe, Ge;
      !(function (e) {
        (e[(e.NONE = 0)] = "NONE"),
          (e[(e.COLUMN = 1)] = "COLUMN"),
          (e[(e.ROW = 2)] = "ROW"),
          (e[(e.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
          (e[(e.ROW_REVERSE = 4)] = "ROW_REVERSE"),
          (e[(e.GRID = 5)] = "GRID"),
          (e[(e.GEOMETRIC = 6)] = "GEOMETRIC");
      })(Me || (Me = {})),
        (function (e) {
          (e[(e.FIRST = 0)] = "FIRST"),
            (e[(e.LAST = 1)] = "LAST"),
            (e[(e.MAINTAIN_X = 2)] = "MAINTAIN_X"),
            (e[(e.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
            (e[(e.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD");
        })(Be || (Be = {})),
        (function (e) {
          (e[(e.Standard = 0)] = "Standard"),
            (e[(e.NoTransform = 1)] = "NoTransform"),
            (e[(e.NoTransformSparseContent = 2)] = "NoTransformSparseContent");
        })(Pe || (Pe = {})),
        (function (e) {
          (e[(e.INVALID = 0)] = "INVALID"),
            (e[(e.FORWARD = 1)] = "FORWARD"),
            (e[(e.BACKWARD = 2)] = "BACKWARD");
        })(Ge || (Ge = {}));
      class xe {
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
        m_Focused = B(!1);
        m_FocusWithin = B(!1);
        m_ActionDescriptionsChangedCallbackList = new y.l();
        m_FocusableIfEmptyAncestor = null;
        m_rgNavigationHandlers = [];
        m_rgFocusHandlers = [];
        constructor(e, t, n) {
          (this.m_Tree = e),
            (this.m_Parent = t),
            (this.m_FocusRing = n),
            (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
        }
        CreateHandle() {
          return new Q(this);
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
            ((n = this.m_Properties?.actionDescriptionMap),
            (i = e?.actionDescriptionMap),
            !(null == n || null == i
              ? n === i
              : "object" == typeof n &&
                "object" == typeof i &&
                Object.keys(n).length === Object.keys(i).length &&
                Object.keys(n).every(
                  (e) => i.hasOwnProperty(e) && n[e] === i[e],
                )));
          var n, i;
          const s = this.m_Properties?.focusableIfEmpty,
            r = this.m_Properties?.noFocusRing;
          (this.m_Properties = e || {}),
            t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
            this.m_Properties.focusableIfEmpty && !s
              ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
              : !this.m_Properties.focusableIfEmpty &&
                s &&
                this.PropagateFocusableIfEmptyAncestorToDescendants(
                  this.m_FocusableIfEmptyAncestor,
                ),
            this.m_Properties.noFocusRing && !r && this.BHasFocus()
              ? this.m_FocusRing?.OnBlur(o.APPLICATION, this, this)
              : !this.m_Properties.noFocusRing &&
                r &&
                this.BHasFocus() &&
                this.m_FocusRing?.OnFocus(o.APPLICATION, this, this),
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
            for (const n in t) {
              const o = n;
              void 0 === e[o] && (e[o] = t[o]);
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
              (H(
                !this.m_ActiveChild && this.BFocusWithin(),
                "Invalid focus state in AddChild",
              ),
              this.SetActiveChild(this.m_rgChildren.length - 1));
        }
        OnMount(e) {
          (this.m_element = e),
            this.m_Parent
              ? this.m_Parent.AddChild(this)
              : H(this == this.m_Tree.Root, "Only root should have no parent"),
            (this.m_bMounted = !0),
            this.RegisterDOMEvents();
          const t =
              this.m_FocusableIfEmptyAncestor &&
              this.m_FocusableIfEmptyAncestor.BHasFocus(),
            n = this.m_Properties?.autoFocus || t;
          if (this.BWantsAutoFocus() || n) {
            let e = -1;
            this.m_rgChildren.length &&
              (this.EnsureChildrenSorted(),
              (e = this.m_rgChildren.findIndex((e) => e.BWantsAutoFocus()))),
              (this.m_Properties?.autoFocus || n || -1 !== e) &&
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
              H(
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
            (Le(
              `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? "will transfer to retain focus ancestor" : "will blur"}.`,
            ),
            e && this.Tree.DeferredFocus.RequestFocus(null),
            this.m_FocusableIfEmptyAncestor
              ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
              : this.BHasFocus() &&
                this.m_Tree.TransferFocus(o.APPLICATION, null)),
            this.UnregisterDOMEvents(),
            this.m_Parent
              ? this.m_Parent.RemoveChild(this)
              : H(this == this.m_Tree.Root, "Only root should have no parent");
        }
        RegisterDOMEvents() {
          !this.m_rgNavigationHandlers.length &&
            this.m_element &&
            (this.m_rgChildren.length >= 2 ||
              this.m_Properties?.layout != Me.NONE ||
              this.m_Properties.onMoveUp ||
              this.m_Properties.onMoveRight ||
              this.m_Properties.onMoveDown ||
              this.m_Properties.onMoveLeft) &&
            this.m_rgNavigationHandlers.push(
              l(this.m_element, this.OnNavigationEvent),
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
          H(-1 !== t, "Child was not found to remove"),
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
              const n = e.m_element,
                o = t.m_element;
              if (!n) return o ? 1 : 0;
              if (!o) return -1;
              const i = n.compareDocumentPosition(o);
              return i & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : i & Node.DOCUMENT_POSITION_FOLLOWING
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
                  Le(
                    "Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.",
                    this.m_element,
                    e.m_element,
                  ),
                  void this.m_Tree.TransferFocus(o.BROWSER, e)
                );
            }
            this.m_Tree.TransferFocus(o.BROWSER, this);
          }
        }
        OnDOMBlur(e) {
          this.BHasFocus() &&
            this.m_element?.ownerDocument.hasFocus() &&
            this.m_Tree.TransferFocus(o.BROWSER, null);
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
            childFocusDisabled: n,
            fnCanTakeFocus: o,
          } = this.m_Properties;
          return this.m_bMounted
            ? o && !o(this)
              ? "none"
              : e || (t && (n || 0 == this.m_rgChildren.length))
                ? "self"
                : !n && this.m_rgChildren.length
                  ? "children"
                  : "none"
            : "none";
        }
        BTakeFocus(e, t) {
          const n = this.FindFocusableNode(t);
          return this.InternalFocusDescendant(n, e, t);
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
          const n = this.FindFocusableDescendant(t);
          return this.InternalFocusDescendant(n, e, t);
        }
        BFocusFirstChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            -1,
            Ge.FORWARD,
            r.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        BFocusLastChild(e) {
          const t = this.FindNextFocusableChildInDirection(
            this.m_rgChildren.length,
            Ge.BACKWARD,
            r.pR.INVALID,
          );
          return this.InternalFocusDescendant(t, e);
        }
        FindFocusableDescendant(e, t) {
          const n = oe(e),
            { focusableIfEmpty: o, childFocusDisabled: i } =
              this.m_Properties ?? {};
          if (i) return null;
          if (this.m_rgChildren.length) {
            this.EnsureChildrenSorted();
            const { navEntryPreferPosition: i, resetNavOnEntry: s } =
              this.m_Properties ?? {};
            let r = this.GetActiveChildIndex();
            s && void 0 !== e && (r = -1);
            const a = this.GetLayout();
            let c, l;
            if (
              (this.IsValidChildIndex(r) ||
                (r =
                  r >= this.m_rgChildren.length ||
                  a == Me.ROW_REVERSE ||
                  a == Me.COLUMN_REVERSE ||
                  i == Be.LAST
                    ? this.m_rgChildren.length - 1
                    : 0),
              i == Be.MAINTAIN_X
                ? (l = "x")
                : i == Be.MAINTAIN_Y
                  ? (l = "y")
                  : a == Me.GEOMETRIC && n && (l = V[n]),
              (l || t) && n)
            ) {
              const o = this.m_Tree.GetLastFocusedNode();
              if (t || (o && l == V[n])) {
                const s =
                  t ||
                  this.AdjustRectForLastMovementOnTangentAxis(
                    o.GetBoundingRect(),
                    n,
                  );
                Le(
                  `Taking focus while preserving ${i && Be[i]} preserved: ${l} movement: ${n}, node:`,
                  s,
                ),
                  (c = this.FindClosestFocusableNodeToRect(e, s));
              } else if (l != V[n]) {
                const t = this.ComputeRelativeDirection(e, Me.GRID),
                  n = t == Ge.BACKWARD ? this.m_rgChildren.length : -1;
                c = this.FindNextFocusableChildInDirection(n, t, e);
              }
            } else if (i == Be.PREFERRED_CHILD) {
              let t = this.m_rgChildren;
              for (; t.length; ) {
                let n = [];
                for (const o of t) {
                  if (
                    ((c = o.BWantsPreferredFocus()
                      ? o.FindFocusableNode(e)
                      : void 0),
                    c)
                  )
                    return c;
                  n.push(...o.m_rgChildren);
                }
                t = n;
              }
            } else
              i == Be.LAST &&
                (c = this.FindNextFocusableChildInDirection(
                  r + 1,
                  Ge.BACKWARD,
                  e,
                ));
            return (
              c ||
                (c = this.FindNextFocusableChildInDirection(
                  r - 1,
                  Ge.FORWARD,
                  e,
                )),
              c ||
                (c = this.FindNextFocusableChildInDirection(r, Ge.BACKWARD, e)),
              c || (o ? this : null)
            );
          }
          return null;
        }
        BVisibleChildTakeFocus(e) {
          const t = this.Element?.ownerDocument?.defaultView ?? window,
            n = ie(this, {
              top: 0,
              left: 0,
              right: t.innerWidth,
              bottom: t.innerHeight,
            });
          return (
            Le(
              `Focusing visible child, best child match is ${n?.child?.Element?.className} - ${JSON.stringify(n?.visibility)}`,
            ),
            !!n && n.child.BTakeFocus(e)
          );
        }
        GetLayout() {
          if (this.m_Properties?.layout) return this.m_Properties.layout;
          if (this.m_rgChildren.length < 2) return Me.NONE;
          return ne(this.m_element);
        }
        OnNavigationEvent(e) {
          const t = e.detail.button;
          if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1))
            return !0;
          const {
            onMoveUp: n,
            onMoveRight: o,
            onMoveDown: i,
            onMoveLeft: s,
          } = this.m_Properties ?? {};
          let a = !1;
          switch (t) {
            case r.pR.DIR_UP:
              n && (a = n(e.detail, this));
              break;
            case r.pR.DIR_RIGHT:
              o && (a = o(e.detail, this));
              break;
            case r.pR.DIR_DOWN:
              i && (a = i(e.detail, this));
              break;
            case r.pR.DIR_LEFT:
              s && (a = s(e.detail, this));
          }
          return a;
        }
        InternalFocusDescendant(e, t, n) {
          return !!e && (this.m_Tree.TransferFocus(t, e, oe(n)), !0);
        }
        BTryInternalNavigation(e, t) {
          const n = this.GetLayout();
          let i,
            s = this.ComputeRelativeDirection(e, n);
          if (
            (Le(
              `Handling navigation event ${r.pR[e]} - ${Me[n]} - ${Ge[s]}`,
              this.m_element,
            ),
            s == Ge.INVALID)
          )
            return !1;
          if (this.m_Properties?.focusable && this.BHasFocus())
            return Le("Skipping navigation within focused element"), !1;
          if ((this.EnsureChildrenSorted(!0), n == Me.GRID))
            i = this.FindNextFocusableChildInGrid(
              this.GetActiveChildIndex(),
              s,
              e,
            );
          else if (n == Me.GEOMETRIC)
            i = this.FindNextFocusableChildGeometric(s, e);
          else {
            let t = this.GetActiveChildIndex();
            this.IsValidChildIndex(t) ||
              (t = s == Ge.FORWARD ? -1 : this.m_rgChildren.length),
              (i = this.FindNextFocusableChildInDirection(t, s, e));
          }
          if (i) {
            const n = oe(e);
            if (this.GetScrollIntoViewType() == Pe.NoTransformSparseContent) {
              const e = i.Element?.ownerDocument.defaultView;
              if (e) {
                const o =
                    ("y" == n ? e.innerHeight : e.innerWidth) /
                    (t ? 4.5 : 3.33),
                  r = be(i.Element);
                let a = !1;
                if (
                  ("y" == n
                    ? s == Ge.FORWARD
                      ? (a =
                          r.top > e.innerHeight && r.bottom > e.innerHeight + o)
                      : s == Ge.BACKWARD && (a = r.bottom < 0 && r.top < -o)
                    : "x" == n &&
                      (s == Ge.FORWARD
                        ? (a =
                            r.left > e.innerWidth && r.right > e.innerWidth + o)
                        : s == Ge.BACKWARD && (a = r.right < 0 && r.left < -o)),
                  a)
                )
                  return (
                    Le(`Element too far away, scrolling ${o} on ${n} axis `),
                    Te(i.Element, i.Element, "smooth", n, o),
                    !0
                  );
              }
            }
            return this.m_Tree.TransferFocus(o.GAMEPAD, i, n), !0;
          }
          return !1;
        }
        GetScrollIntoViewType() {
          return this.m_Properties?.scrollIntoViewType
            ? this.m_Properties.scrollIntoViewType
            : this.m_Parent
              ? this.m_Parent.GetScrollIntoViewType()
              : Pe.Standard;
        }
        GetRelativeDirection(e) {
          return this.ComputeRelativeDirection(e, this.GetLayout());
        }
        ComputeRelativeDirection(e, t) {
          let n = t == Me.ROW_REVERSE || t == Me.COLUMN_REVERSE;
          switch (t) {
            case Me.ROW:
            case Me.ROW_REVERSE:
              switch (e) {
                case r.pR.DIR_LEFT:
                  return n ? Ge.FORWARD : Ge.BACKWARD;
                case r.pR.DIR_RIGHT:
                  return n ? Ge.BACKWARD : Ge.FORWARD;
                default:
                  return Ge.INVALID;
              }
            case Me.COLUMN:
            case Me.COLUMN_REVERSE:
              switch (e) {
                case r.pR.DIR_UP:
                  return n ? Ge.FORWARD : Ge.BACKWARD;
                case r.pR.DIR_DOWN:
                  return n ? Ge.BACKWARD : Ge.FORWARD;
                default:
                  return Ge.INVALID;
              }
            case Me.GRID:
            case Me.GEOMETRIC:
              switch (e) {
                case r.pR.DIR_LEFT:
                case r.pR.DIR_UP:
                  return n ? Ge.FORWARD : Ge.BACKWARD;
                case r.pR.DIR_RIGHT:
                case r.pR.DIR_DOWN:
                  return n ? Ge.BACKWARD : Ge.FORWARD;
                default:
                  return Ge.INVALID;
              }
            default:
              return Ge.INVALID;
          }
        }
        AdvanceIndex(e, t) {
          return e + (t == Ge.FORWARD ? 1 : -1);
        }
        FindNextFocusableChildInDirection(e, t, n) {
          let o = t == Ge.FORWARD ? 1 : -1;
          for (let t = e + o; t >= 0 && t < this.m_rgChildren.length; t += o) {
            const e = this.m_rgChildren[t].FindFocusableNode(n);
            if (e) return e;
          }
          return null;
        }
        ScanChildren(e, t, n) {
          let o = t == Ge.FORWARD ? 1 : -1;
          for (let t = e; t >= 0 && t < this.m_rgChildren.length; t += o)
            if (n(this.m_rgChildren[t], t)) return t;
          return -1;
        }
        FindNextFocusableChildInGrid(e, t, n) {
          const o = n == r.pR.DIR_UP || n == r.pR.DIR_DOWN,
            i = this.GetLastFocusElement();
          if (!i || i == this.m_element)
            return (
              H(
                !1,
                "No active child for grid navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                i,
              ),
              this.FindFocusableDescendant(n)
            );
          let s = this.GetActiveDescendant().GetBoundingRect();
          if (
            ((n != r.pR.DIR_UP && n != r.pR.DIR_DOWN) ||
              (s = this.AdjustRectForLastMovementOnTangentAxis(s, "y")),
            o)
          ) {
            let o = e;
            for (; -1 != o; ) {
              const e = this.ScanChildren(
                this.AdvanceIndex(o, t),
                t,
                (e) => !J("y", s, e.GetBoundingRect()),
              );
              if (-1 != e) {
                const o = this.m_rgChildren[e].GetBoundingRect(),
                  i = this.FindClosestChildInNextAxiallyAlignedSet(
                    "x",
                    t,
                    n,
                    s,
                    e,
                    o,
                  );
                if (i) return i;
              }
              o = e;
            }
          } else {
            let o = t == Ge.FORWARD ? 1 : -1;
            for (
              let i = this.AdvanceIndex(e, t);
              i >= 0 && i < this.m_rgChildren.length;
              i += o
            ) {
              const e = this.m_rgChildren[i];
              if (!J("y", s, e.GetBoundingRect())) return null;
              let t = e.FindFocusableNode(n);
              if (t) return t;
            }
          }
          return null;
        }
        FindNextFocusableChildGeometric(e, t) {
          const n = this.GetLastFocusElement();
          if (!n || n == this.m_element)
            return (
              H(
                !1,
                "No active child for geometric navigation",
                this.m_iLastActiveChildIndex,
                this.m_rgChildren.length,
                n,
              ),
              this.FindFocusableDescendant(t)
            );
          const o = oe(t);
          if (!o) return null;
          const i = this.AdjustRectForLastMovementOnTangentAxis(
            this.GetActiveDescendant().GetBoundingRect(),
            o,
          );
          return this.FindClosetChildInDirection(o, i, e, t);
        }
        AdjustRectForLastMovementOnTangentAxis(e, t) {
          const n = this.m_Tree.GetLastFocusedMovementRect(V[t]);
          return n
            ? "x" == t
              ? { left: e.left, right: e.right, top: n.top, bottom: n.bottom }
              : { left: n.left, right: n.right, top: e.top, bottom: e.bottom }
            : e;
        }
        FindClosestFocusableNodeToRect(e, t) {
          const n = oe(e),
            o = n && V[n],
            i = [];
          for (const e of this.m_rgChildren) {
            const n = e.GetBoundingRect();
            if (n) {
              const s = le(t, n),
                r = o ? Z(o, t, n) : 0;
              i.push({ child: e, overlap: r, dist: s });
            }
          }
          i.sort((e, t) =>
            e.dist != t.dist ? e.dist - t.dist : t.overlap - e.overlap,
          );
          for (const { child: n } of i) {
            const o = n.FindFocusableNode(e, t);
            if (o) return o;
          }
          return null;
        }
        FindClosetChildInDirection(e, t, n, o) {
          Le(
            `Find child closest to rect, rect is at left ${t.left} top ${t.top} right ${t.right} bottom ${t.bottom}`,
          );
          const i = ee(e, t),
            s = [];
          for (const o of this.m_rgChildren) {
            const r = o.GetBoundingRect();
            if (r) {
              const a = ee(e, r);
              let c;
              (c = n == Ge.FORWARD ? a.min - i.max : i.min - a.max),
                c >= 0 && s.push({ child: o, overlap: Z(V[e], t, r), dist: c });
            }
          }
          if (
            (s.sort((e, t) => {
              if (e.overlap) {
                if (!t.overlap) return -1;
              } else if (t.overlap) return 1;
              const n = e.dist - t.dist;
              return n || t.overlap - e.overlap;
            }),
            Oe.IsDebugEnabled())
          ) {
            const e = s
              .slice(0, 3)
              .map(
                ({ dist: e, overlap: t, child: n }) =>
                  `[ node: ${n.m_element?.className} dist: ${e} overlap: ${t} ]`,
              );
            Le(`Found nodes on axis, top 3 (of ${s.length}: ${e.join(", ")}`);
          }
          for (const { child: e } of s) {
            const n = e.FindFocusableNode(o, t);
            if (n) return n;
          }
          return null;
        }
        FindClosestChildInNextAxiallyAlignedSet(e, t, n, o, i, s) {
          (!i || i < 0) && (i = 0);
          let r = [];
          if (!o) return null;
          const a = { x: (c = o).left, y: c.top };
          var c;
          this.ScanChildren(i, t, (t) => {
            const n = t.GetBoundingRect();
            return (
              !!n &&
              (!(!s || J(V[e], s, n)) ||
                (r.push({ child: t, overlap: Z(e, o, n), dist: te(e, a, n) }),
                !1))
            );
          }),
            t == Ge.BACKWARD && r.reverse(),
            r.sort((e, t) => {
              const n = t.overlap - e.overlap;
              return 0 != n ? n : e.dist - t.dist;
            });
          for (const { child: e } of r) {
            const t = e.FindFocusableNode(n, o);
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
          e instanceof xe
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
              ? (H(
                  !this.m_Tree.BUseVirtualFocus(),
                  "Virtual focus tree should not have browser focus",
                ),
                this.m_element?.focus({ preventScroll: !0 }))
              : this.m_Tree.BUseVirtualFocus() ||
                Le(
                  `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
                ),
            this.m_Tree.BIsActive() &&
              (function (e, t) {
                const n = e.Element;
                if (!n) return;
                let o = [
                  { node: e, eScrollType: e.m_Properties?.scrollIntoViewType },
                ];
                for (let t = e.Parent; t; t = t.Parent) {
                  const e = t.m_Properties?.scrollIntoViewWhenChildFocused,
                    n = t.m_Properties?.scrollIntoViewType;
                  if (e) {
                    const i = { node: t, eScrollType: n };
                    "force" === e ? (o = [i]) : o.push(i);
                  }
                  if (void 0 !== n)
                    for (
                      let e = o.length - 1;
                      e >= 0 && void 0 === o[e].eScrollType;
                      e--
                    )
                      o[e].eScrollType = n;
                }
                for (; o.length; ) {
                  let { node: n, eScrollType: i } = o.pop(),
                    s = 0 == o.length;
                  if (
                    (void 0 === i && (i = fe ? Pe.NoTransform : Pe.Standard),
                    n?.m_Properties?.fnScrollIntoViewHandler &&
                      !1 !== n.m_Properties.fnScrollIntoViewHandler(e, t, n))
                  )
                    continue;
                  const r = n.m_element,
                    a =
                      i == Pe.NoTransform ||
                      i == Pe.NoTransformSparseContent ||
                      !s;
                  if (t) {
                    const t = a ? be(r) : r.getBoundingClientRect();
                    let n = !1;
                    const o = Math.max(1.4 * (t.bottom - t.top), 40),
                      i = ve && performance.now() - ve < 500;
                    (i ||
                      t.bottom < -o ||
                      t.top > r.ownerDocument.defaultView.innerHeight + o) &&
                      ((n = !0),
                      i ||
                        _e(
                          `Disabling smooth scrolling, ${t.bottom} < ${-o}, ${t.top} > ${r.ownerDocument.defaultView.innerHeight} + ${o} `,
                        ));
                    let s = n ? "auto" : "smooth";
                    n && (ve = performance.now()),
                      e.Tree.Controller.BIsRestoringHistory() && (s = "auto"),
                      a
                        ? Te(0, r, s)
                        : r.scrollIntoView({ behavior: s, block: "nearest" });
                  } else
                    _e("No previous element for scrolling, will jump"),
                      a
                        ? Te(0, r, "auto")
                        : r?.scrollIntoView({
                            behavior: "auto",
                            block: "nearest",
                            inline: "nearest",
                          });
                }
              })(this, t);
        }
      }
      (0, m.Cg)([g.o], xe.prototype, "OnDOMFocus", null),
        (0, m.Cg)([g.o], xe.prototype, "OnDOMBlur", null),
        (0, m.Cg)([g.o], xe.prototype, "OnNavigationEvent", null);
      const ke = new k("FocusNavigation").Debug,
        Ue = new k("GamepadEvents").Debug;
      class We extends xe {
        m_wrappedTree;
        m_rgCallbackRegistrations = new x();
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
          ke(
            "Wrapped tree activated, " +
              (this.BHasFocus()
                ? "but we already have focus"
                : "transferring focus"),
          ),
            this.BHasFocus() || this.m_Tree.TransferFocus(o.APPLICATION, this);
        }
        OnWrappedTreeUnhandledButton(e) {
          return (
            Ue(
              `Propagating ${r.pR[e.detail.button]} event out of tree, firing at element:`,
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
      (0, m.Cg)([g.o], We.prototype, "OnWrappedTreeActivated", null),
        (0, m.Cg)([g.o], We.prototype, "OnWrappedTreeUnhandledButton", null);
      const Ve = new k("FocusHistory").Debug;
      function He(e) {
        const t = (t) => {
            Ve(
              `preserving state and suppressing focus for tree ${e.id} for navigation type ${t.navigationType}`,
            );
            const n = window.navigation.currentEntry?.getState() ?? {};
            if ("replace" != t.navigationType) {
              const t = z(e.Root);
              window.navigation.updateCurrentEntry({
                state: { ...n, [$e(e)]: t },
              });
            } else
              n[Ye] &&
                t.intercept({
                  async handler() {
                    const e = window.navigation.currentEntry?.getState() ?? {};
                    window.navigation.updateCurrentEntry({
                      state: { ...e, [Ye]: !0 },
                    });
                  },
                  focusReset: "manual",
                });
            e.DeferredFocus.SuppressFocus();
          },
          n = (t) => {
            Ke(e)
              ? e.DeferredFocus.Reset()
              : e.DeferredFocus.ExecuteQueuedFocus();
          },
          o = new x();
        return (
          window.navigation.addEventListener("navigate", t),
          o.Push(() => window.navigation.removeEventListener("navigate", t)),
          window.navigation.addEventListener("navigatesuccess", n),
          o.Push(() =>
            window.navigation.removeEventListener("navigatesuccess", n),
          ),
          (function () {
            if (!ze) {
              ze = new y.l();
              const e = performance.now(),
                t = (t) => {
                  "string" == typeof t.data &&
                    "FocusRestoreReady" == t.data &&
                    (Ve(
                      `Got FocusRestoreReady event from page after ${performance.now() - e}ms, will record in history.  ${ze.CountRegistered()} trees waiting.`,
                    ),
                    window.navigation.updateCurrentEntry({
                      state: {
                        ...window.navigation.currentEntry?.getState(),
                        [Ye]: !0,
                      },
                    }),
                    ze.Dispatch(),
                    ze.ClearAllCallbacks(),
                    window.clearTimeout(n));
                };
              window.addEventListener("message", t);
              const n = window.setTimeout(() => {
                ze.CountRegistered() &&
                  (console.warn(
                    "Waited 4000ms for FocusRestoreReady, proceeding",
                  ),
                  ze.Dispatch());
              }, 4e3);
            }
          })(),
          (function () {
            const e = window.navigation.currentEntry?.getState();
            return (
              Ve(`Wait for page? ${e?.[Ye] ? "wait" : "no"} `, e), !!e?.[Ye]
            );
          })()
            ? (function (e, t) {
                if (window.__bFocusRestoreReady) return void Ke(e);
                Ve(
                  `Wait for page enabled, suppressing focus in ${e.id} until we hear that page is ready`,
                ),
                  e.DeferredFocus.SuppressFocus();
                const n = je(e),
                  o = () => {
                    Ke(e, n)
                      ? e.DeferredFocus.Reset()
                      : e.DeferredFocus.ExecuteQueuedFocus();
                  },
                  i = ze.Register(o).Unregister;
                t.Push(i);
              })(e, o)
            : Ke(e),
          o.GetUnregisterFunc()
        );
      }
      function Ke(e, t) {
        const n = t ?? je(e);
        return (
          Ve(
            `Restoring focus state for ${e.id}, ${n ? "history available" : "no history"}`,
          ),
          !!n && (Y(e.Root, n, 0), !0)
        );
      }
      function $e(e) {
        return `FocusHistory_${e.id}`;
      }
      function je(e) {
        const t = window.navigation.currentEntry?.getState();
        return t?.[$e(e)];
      }
      let ze;
      const Ye = "FocusHistoryWaitForPage";
      const Xe = new k("FocusNavigation").Debug,
        qe = new k("GamepadEvents").Debug;
      class Qe {
        m_Controller;
        m_context;
        m_window;
        m_ParentNavTree;
        m_rgChildNavTrees = [];
        m_ID;
        m_valueIsMounted = B(!1);
        m_bIsEnabled = !1;
        m_tsLastActivated;
        m_Root;
        m_onActivateCallbacks = new y.l();
        m_onDeactivateCallbacks = new y.l();
        m_onActiveFocusStateChangedCallbacks = new y.l();
        m_onChildTreesChanged = new y.l();
        m_Properties;
        m_onGlobalButtonDown;
        m_rgOnUnhandledButton = [];
        m_rgGlobalButtonHandlers = [];
        constructor(e, t, n, o, i) {
          (this.m_Controller = e),
            (this.m_context = t),
            (this.m_ID = n),
            (this.m_ParentNavTree = o),
            (this.m_Root = new xe(this, null, null)),
            this.m_Root.SetProperties({ layout: Me.COLUMN }),
            (this.m_Properties = i);
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
          return new xe(this, e, t);
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
          let n = !1;
          t
            ? (n = this.Root.BVisibleChildTakeFocus(e))
            : this.m_lastFocusNode && (n = this.m_lastFocusNode.BTakeFocus(e)),
            n || (n = this.Root.BTakeFocus(e)),
            n || this.TransferFocus(e, this.Root);
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
          const n = new x();
          return (
            this.m_valueIsMounted.Set(!0),
            n.Push(() => this.m_valueIsMounted.Set(!1)),
            this.m_ParentNavTree &&
              n.Push(this.m_ParentNavTree.AddChildNavTree(this)),
            "navigationapi" == this.m_Properties.historyMode &&
              n.Push(He(this)),
            n.GetUnregisterFunc()
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
              D.x9(this.m_rgOnUnhandledButton, e);
            }
          );
        }
        RegisterGlobalButtonHandler(e, t, n) {
          const o = { button: e, fnCallback: t, description: n };
          return (
            this.m_rgGlobalButtonHandlers.push(o),
            this.UpdateRootActionDescriptionMap(),
            () => {
              D.x9(this.m_rgGlobalButtonHandlers, o),
                this.UpdateRootActionDescriptionMap();
            }
          );
        }
        UpdateRootActionDescriptionMap() {
          const e = {};
          for (const { button: t, description: n } of this
            .m_rgGlobalButtonHandlers)
            n && (e[t] = n);
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
          for (const { button: t, fnCallback: n } of this
            .m_rgGlobalButtonHandlers)
            if (t == e.detail.button && !1 !== n(e)) return !1;
          for (const t of this.m_rgOnUnhandledButton)
            if (!1 !== t(e)) return !1;
          return !0;
        }
        HandleButtonDownEventAsLogicalEvent(e) {
          let { bUnhandled: t, bHadLogicalEventMapping: n } = (function (e) {
            const t = [
              r.pR.DIR_UP,
              r.pR.DIR_DOWN,
              r.pR.DIR_LEFT,
              r.pR.DIR_RIGHT,
            ];
            let n = !0,
              o = !1,
              i = a[e.detail.button];
            return (
              i
                ? ((o = !0), (n = u(e.target, i, e.detail)))
                : -1 !== t.indexOf(e.detail.button) &&
                  ((o = !0), (n = u(e.target, "vgp_ondirection", e.detail))),
              { bUnhandled: n, bHadLogicalEventMapping: o }
            );
          })(e);
          return (
            qe(
              `Logical gamepad Event fired: ${r.pR[e.detail.button]}, had logical event: ${n}, was handled: ${!t}`,
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
              D.x9(this.m_rgChildNavTrees, e),
                this.OnChildTreesChangedCallbacks.Dispatch("remove", e);
            }
          );
        }
        TransferFocus(e, t, n) {
          this.m_Controller.BatchedUpdate(() =>
            this.TransferFocusInternal(e, t, n),
          );
        }
        TransferFocusInternal(e, t, n) {
          const i = this.m_lastFocusNode;
          if (
            i == t &&
            (this.m_bWasActiveForLastFocusChange || !this.BIsActive())
          )
            return;
          Xe(
            `Transfer focus in ${this.id}, source: ${e && o[e]}, from/to:`,
            i?.m_element,
            t?.m_element,
          );
          const s = { blurredNode: i, focusedNode: t, focusSource: e },
            r = (function (e, t) {
              if (!t || !e) return null;
              let n = t,
                o = e;
              for (; n.GetDepth() > o.GetDepth() && n.Parent; ) n = n.Parent;
              for (; o.GetDepth() > n.GetDepth() && o.Parent; ) o = o.Parent;
              for (; n != o && n && o; ) (n = n.Parent), (o = o.Parent);
              return n;
            })(i, t);
          if (i) {
            i.SetHasFocus(!1);
            for (let e = i; e && e != r; e = e.Parent) e.SetFocusWithin(!1);
          }
          if (t) {
            t.SetHasFocus(!0);
            for (let e = t; e && e != r; e = e.Parent) e.SetFocusWithin(!0);
          }
          let a = this.m_context.OnFocusChangeStart(e, this, i, t);
          t && t.SetDOMFocusAndScroll(e, i),
            i &&
              (u(i.Element, "vgp_onblur", s),
              !i.m_FocusRing ||
                (t && i.m_FocusRing == t.m_FocusRing) ||
                i.m_FocusRing.OnBlur(e, i, t)),
            t &&
              (u(t.Element, "vgp_onfocus", s),
              t.m_FocusRing &&
                (i && t.m_FocusRing == i.m_FocusRing
                  ? t.m_FocusRing.OnFocusChange(e, i, t)
                  : t.m_FocusRing.OnFocus(e, t, i))),
            (this.m_lastFocusNode = t),
            (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
            "x" == n
              ? this.m_lastFocusNodeXMovement.SetNode(t?.Element)
              : "y" == n
                ? this.m_lastFocusNodeYMovement.SetNode(t?.Element)
                : (this.m_lastFocusNodeXMovement.Reset(),
                  this.m_lastFocusNodeYMovement.Reset()),
            this.m_context.OnFocusChangeComplete(a);
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
        m_schExecuteQueuedFocus = new G();
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
              Xe(
                `DeferredFocus in ${this.m_tree.id} - focusing ${t ? "descendant of" : "node"} ${e.NavKey}`,
              ),
              t
                ? e.BChildTakeFocus(o.AUTOFOCUS) ||
                  this.m_tree.TransferFocus(o.AUTOFOCUS, e)
                : e.BTakeFocus(o.AUTOFOCUS) ||
                  this.m_tree.TakeFocus(o.AUTOFOCUS);
          }
        }
      }
      const et = new k("FocusNavigation").Debug;
      class tt {
        m_rootWindow;
        m_activeWindow;
        m_activeBrowserView;
        m_valueIsActive = B(!1);
        m_controller;
        m_rgGamepadNavigationTrees = [];
        m_LastActiveNavTree;
        m_LastActiveFocusNavTree;
        m_bMounted = !0;
        m_schDeferredActivate = new G();
        m_FocusChangedCallbacks = new y.l();
        m_NavTreeActivatedOrReactivatedCallbacks = new y.l();
        m_bIsGamepadInputSuppressed = !1;
        m_bVR = !1;
        constructor(e, t, n, o) {
          (this.m_controller = e),
            (this.m_rootWindow = t),
            (this.m_activeWindow = t),
            (this.m_bIsGamepadInputSuppressed = n),
            (this.m_bVR = o);
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
            let n = this.m_rgGamepadNavigationTrees.length - 1;
            n >= 0;
            n--
          ) {
            const o = this.m_rgGamepadNavigationTrees[n];
            if ((!t || o.BIsEnabled()) && o.Window == e) return o;
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
        SetActive(e, t, n = void 0) {
          this.m_controller.BatchedUpdate(() => {
            if (e && !this.m_controller.BCanActivateContext(this))
              return void et(
                `${this.LogName(t)} Skipping context activation due to CFocusNavWindowContext`,
              );
            const o = this.m_valueIsActive.Value != e;
            e
              ? ((this.m_activeWindow = t),
                (this.m_activeBrowserView = n),
                this.m_controller.OnContextActivated(this))
              : ((this.m_activeBrowserView = void 0),
                this.m_controller.OnContextDeactivated(this, !1)),
              this.m_valueIsActive.Set(e),
              o &&
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
          const n = this.m_LastActiveNavTree;
          n && D.x9(this.m_rgGamepadNavigationTrees, n),
            e || (e = this.FindNavTreeToActivate());
          const o = this.m_LastActiveFocusNavTree == e;
          e && D.x9(this.m_rgGamepadNavigationTrees, e),
            (this.m_LastActiveNavTree = e),
            (e && e.BUseVirtualFocus()) || (this.m_LastActiveFocusNavTree = e),
            et(
              `${this.LogName(e?.Window)} Move from nav tree ${n?.id} to nav tree ${e?.id} ${t ? "taking focus" : "no focus"}`,
            ),
            n && this.m_rgGamepadNavigationTrees.push(n),
            e &&
              (this.m_rgGamepadNavigationTrees.push(e),
              o ||
                !t ||
                e.DeferredFocus.BHasQueuedFocusNode() ||
                e.DeferredFocus.RequestFocus(e.Root),
              this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(e)),
            n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(e),
            e && !o && e.OnActivate(n);
        }
        BlurNavTree(e) {
          this.m_LastActiveNavTree == e && this.SetActiveNavTree(void 0, !0),
            D.x9(this.m_rgGamepadNavigationTrees, e),
            this.m_rgGamepadNavigationTrees.unshift(e);
        }
        async UnregisterGamepadNavigationTree(e) {
          D.x9(this.m_rgGamepadNavigationTrees, e),
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
        OnFocusChangeStart(e, t, n, o) {
          return (
            0 == this.m_iFocusChangeStack
              ? (this.m_ActiveFocusChange = {
                  source: e,
                  from: n || void 0,
                  to: o || void 0,
                })
              : this.m_ActiveFocusChange &&
                (!this.m_ActiveFocusChange.from &&
                  n &&
                  (this.m_ActiveFocusChange.from = n),
                o && (this.m_ActiveFocusChange.to = o)),
            this.m_iFocusChangeStack++
          );
        }
        OnFocusChangeComplete(e) {
          if (
            (this.m_iFocusChangeStack--,
            H(e == this.m_iFocusChangeStack, "out of order focus pop"),
            0 == this.m_iFocusChangeStack)
          ) {
            const {
              source: e,
              from: t,
              to: n,
            } = this.m_ActiveFocusChange ?? {};
            this.m_FocusChangedCallbacks.Dispatch(e, t, n);
          }
        }
        get NavigationSourceGlyphInfo() {
          return this.m_controller.NavigationSourceGlyphInfo;
        }
      }
      const nt = new k("FocusNavigation").Debug,
        ot = new k("FocusNavigation").Assert,
        it = "focus-nav-show-debug-focus-ring";
      function st(e, t) {
        return (
          e?.eActivationSourceType === t?.eActivationSourceType &&
          e?.nActiveGamepadIndex === t?.nActiveGamepadIndex &&
          e?.nLastActiveGamepadIndex === t?.nLastActiveGamepadIndex
        );
      }
      class rt {
        m_rgGamepadInputSources = [];
        m_DefaultContext;
        m_rgAllContexts = [];
        m_ActiveContext;
        m_LastActiveContext;
        m_ContextSetChangedCallbacks = new y.l();
        m_fnCatchAllGamepadInput = null;
        m_UnhandledButtonEventsCallbacks = new y.l();
        m_navigationSource = B(
          {
            eActivationSourceType: r.Vz.UNKNOWN,
            nActiveGamepadIndex: -1,
            nLastActiveGamepadIndex: -1,
          },
          st,
        );
        m_navigationSourceSupportsFocus = (function (e, t, n) {
          return new P(e, t, n);
        })(
          this.m_navigationSource,
          (e) =>
            e?.eActivationSourceType === r.Vz.GAMEPAD ||
            e?.eActivationSourceType === r.Vz.KEYBOARD_SIMULATOR,
        );
        m_bShowDebugFocusRing = B(!1);
        m_glyphInfo = B({ nControllerType: 4, nControllerStyle: 100 });
        m_bRestoringHistory = !1;
        m_fnGamepadEventUpdateBatcher = (e) => e();
        constructor() {
          window.FocusNavController = this;
        }
        Init() {
          this.m_bShowDebugFocusRing.Set("shown" == sessionStorage.getItem(it));
        }
        CreateContext(e, t, n) {
          const o = new tt(this, e, t, n);
          return (
            this.m_rgAllContexts.push(o),
            this.m_ContextSetChangedCallbacks.Dispatch(),
            o
          );
        }
        DestroyContext(e) {
          D.x9(this.m_rgAllContexts, e),
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
                nt(
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
              (nt(
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
                ? sessionStorage.setItem(it, "shown")
                : sessionStorage.removeItem(it);
            })(e);
        }
        GetShowDebugFocusRing() {
          return this.m_bShowDebugFocusRing;
        }
        RegisterInputSource(e) {
          let t = new x();
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
            e.GetSourceType() == r.Vz.GAMEPAD && this.UpdateSourceToGamepad(),
            t.GetUnregisterFunc()
          );
        }
        UpdateSourceToGamepad(e = !1) {
          (this.m_navigationSource.Value.eActivationSourceType ==
            r.Vz.UNKNOWN ||
            e) &&
            this.m_navigationSource.Set({
              ...this.m_navigationSource.Value,
              eActivationSourceType: r.Vz.GAMEPAD,
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
          let n;
          t && (n = this.GetActiveContext() ?? this.FindAnActiveContext()),
            this.OnButtonDown(
              e,
              r.Vz.GAMEPAD,
              -1,
              void 0,
              void 0,
              void 0,
              t,
              n,
              !0,
            ),
            this.OnButtonUp(
              e,
              r.Vz.GAMEPAD,
              -1,
              void 0,
              void 0,
              void 0,
              t,
              n,
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
            e === r.pR.STEAM_GUIDE ||
            e === r.pR.STEAM_QUICK_MENU ||
            e === r.pR.CANCEL
          );
        }
        GetEventTarget(e, t, n = !1) {
          let i = this.GetActiveContext();
          !i && n && (i = this.FindAnActiveContext());
          let s = i?.ActiveWindow?.document.activeElement;
          if (i?.m_LastActiveNavTree) {
            if (
              (t || (t = this.m_navigationSource?.Value?.eActivationSourceType),
              !(
                i.m_LastActiveNavTree.GetLastFocusedNode() ||
                (t != r.Vz.GAMEPAD && t != r.Vz.KEYBOARD_SIMULATOR) ||
                (nt(
                  `GetEventTarget: Context ${i.LogName()} tree ${i.m_LastActiveNavTree.id} has no focused node, ${n ? "finding one" : "will not find one"}`,
                ),
                n && i.m_LastActiveNavTree.TakeFocus(o.GAMEPAD, !0),
                this.BGlobalGamepadButton(e))
              ))
            )
              return [void 0, i];
            i.m_LastActiveNavTree.GetLastFocusedNode()
              ? (s = i.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
              : nt(
                  `GetEventTarget: Context ${i.LogName()} tree ${i.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
                );
          }
          return [s, i];
        }
        ChangeNavigationSource(e, t, n, o) {
          let i = this.m_navigationSource.Value,
            s = i.nLastActiveGamepadIndex;
          return (
            i.nActiveGamepadIndex &&
              i.nActiveGamepadIndex >= 0 &&
              (s = i.nActiveGamepadIndex),
            this.m_navigationSource.Set({
              eActivationSourceType: e,
              nActiveGamepadIndex: t,
              nLastActiveGamepadIndex: s,
            }),
            n &&
              o &&
              this.m_glyphInfo.Set({ nControllerType: n, nControllerStyle: o }),
            e != r.Vz.MOUSE &&
              (0, _.Dp)("Browser.HideCursorUntilMouseEvent") &&
              SteamClient.Browser.HideCursorUntilMouseEvent(),
            i.eActivationSourceType != e
          );
        }
        OnButtonActionInternal(e, t, n, o, i, s, a, c, l, h) {
          if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t))
            return void (
              e &&
              nt(
                "Ignoring button press - gamepad input is suppressed by parent window",
              )
            );
          ot(
            !!s == !!a,
            "Must set both overrideContext and overrideElement or neither",
          );
          let d = s,
            m = a;
          (null != d && null != m) || ([d, m] = this.GetEventTarget(t, n, e)),
            !m?.BIsGamepadInputSuppressed() || c
              ? (this.ChangeNavigationSource(n, o, l, h),
                e &&
                  nt(
                    `Firing ${r.pR[t]} in tree ${m?.m_LastActiveNavTree?.id} at `,
                    d,
                  ),
                this.BatchedUpdate(() =>
                  u(d, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
                    button: t,
                    source: n,
                    is_repeat: i,
                  }),
                ))
              : nt(
                  `Suppressing ${r.pR[t]} input on element ${d?.className} because tree ${m?.m_LastActiveNavTree?.id} has it disabled`,
                );
        }
        OnButtonDown(e, t, n, o, i, s, r, a, c) {
          this.OnButtonActionInternal(!0, e, t, n, o, r, a, c, i, s);
        }
        OnButtonUp(e, t, n, o, i, s, r, a, c) {
          this.OnButtonActionInternal(!1, e, t, n, !1, r, a, c, i, s);
        }
        BatchedUpdate(e) {
          this.m_fnGamepadEventUpdateBatcher(e);
        }
        OnNavigationTypeChange(e) {
          if (
            this.ChangeNavigationSource(e, -1) &&
            (document.hasFocus() || this.m_LastActiveContext?.BIsVR()) &&
            (e == r.Vz.MOUSE || e == r.Vz.TOUCH) &&
            this.m_ActiveContext?.m_LastActiveNavTree
          ) {
            const e =
                this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
              t = (function (e) {
                if (!b(e)) return !1;
                const t = e.tagName,
                  n = ((o = e), "INPUT" === o.nodeName ? e.type : void 0);
                var o;
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
                })(t, n);
              })(e?.Element)
                ? e
                : null;
            this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(
              o.APPLICATION,
              t,
            );
          }
        }
        NewGamepadNavigationTree(e, t, n, o) {
          return new Qe(this, e, t, n, o);
        }
        RegisterGamepadNavigationTree(e, t) {
          const n = e.WindowContext;
          n.AddNavTree(e);
          const o = e.MountNavTree(t);
          return (
            !e.Parent &&
              e.BIsEnabled() &&
              (this.BCanActivateContext(n) &&
                (this.m_LastActiveContext = this.m_ActiveContext = n),
              n.SetActiveNavTree(e, !0)),
            () => {
              n.UnregisterGamepadNavigationTree(e).then(() => o());
            }
          );
        }
        OnGamepadNavigationTreeActivated(e, t = !1) {
          e.WindowContext.SetActiveNavTree(e, t);
        }
        OnGamepadNavigationTreeFocused(e, t, n = !1) {
          const i = e.WindowContext;
          i != this.m_ActiveContext &&
            nt(`(${i.LogName(e.Window)}) Focus event in inactive window`),
            e != i.m_LastActiveFocusNavTree &&
              e != i.m_LastActiveNavTree &&
              (i.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
              e.GetParentEmbeddedNavTree() == i.m_LastActiveFocusNavTree
                ? t == o.AUTOFOCUS &&
                  i.m_LastActiveNavTree?.GetLastFocusedNode()
                  ? nt(
                      `There was an autofocus event in ${e.id}, but the active nav tree is ${i.m_LastActiveFocusNavTree?.id} and we already have something focused.  Source: ${t && o[t]}.`,
                    )
                  : (nt(
                      `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
                    ),
                    e.Activate())
                : nt(
                    `There was a focus event in ${e.id}, but the active nav tree is ${i.m_LastActiveFocusNavTree?.id} so it is being ignored.  Source: ${t && o[t]}.`,
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
          e && e.TakeFocus(o.APPLICATION);
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
      function at(e) {
        if (!e) return Me.NONE;
        switch (e) {
          case "column":
            return Me.COLUMN;
          case "column-reverse":
            return Me.COLUMN_REVERSE;
          case "row":
            return Me.ROW;
          case "row-reverse":
            return Me.ROW_REVERSE;
          case "grid":
            return Me.GRID;
          case "geometric":
            return Me.GEOMETRIC;
          default:
            return (
              (function (e, t, ...n) {
                H(!1, t, ...n);
              })(0, `Unhandled flow-children: ${e}`),
              Me.NONE
            );
        }
      }
      (0, m.Cg)([g.o], rt.prototype, "OnButtonDown", null),
        (0, m.Cg)([g.o], rt.prototype, "OnButtonUp", null),
        (0, m.Cg)([g.o], rt.prototype, "OnNavigationTypeChange", null);
      const ct = "VirtualKeyboardMessage";
      function lt(e) {
        return e && e.type === ct;
      }
      class ut {
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
          e == ct && this.InternalDispatchMessage(JSON.parse(t));
        }
        OnMessage(e) {
          this.InternalDispatchMessage(e.data);
        }
        InternalDispatchMessage(e) {
          lt(e) && e.message;
        }
        SendMessage(e) {
          const t = { type: "VirtualKeyboardMessage", ...e };
          (0, _.Dp)("BrowserView.PostMessageToParent")
            ? SteamClient.BrowserView.PostMessageToParent(
                t.type,
                JSON.stringify(t),
              )
            : this.m_ownerWindow &&
              (H(
                this.m_ownerWindow.parent &&
                  this.m_ownerWindow.parent != this.m_ownerWindow,
                "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
              ),
              this.m_ownerWindow.parent.postMessage(t, "*"));
        }
      }
      (0, m.Cg)([g.o], ut.prototype, "ShowVirtualKeyboard", null),
        (0, m.Cg)([g.o], ut.prototype, "ShowModalKeyboard", null),
        (0, m.Cg)([g.o], ut.prototype, "HideVirtualKeyboard", null),
        (0, m.Cg)([g.o], ut.prototype, "OnBrowserViewMessage", null),
        (0, m.Cg)([g.o], ut.prototype, "OnMessage", null);
      (0, m.Cg)(
        [g.o],
        class {
          m_showKeyboard;
          m_showModalKeyboard;
          m_hideKeyboard;
          constructor(e, t, n, o) {
            (this.m_showKeyboard = t),
              (this.m_showModalKeyboard = n),
              (this.m_hideKeyboard = o),
              e.on("message", this.OnMessage);
          }
          OnMessage(e, t, n) {
            if (e == ct) {
              const e = JSON.parse(t);
              if (lt(e))
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
      var ht = n(402),
        dt = n.n(ht);
      function mt(e) {
        let t = 0;
        e.children().each(function () {
          const e = s()(this),
            n = e.css("zIndex");
          "auto" === n
            ? e.css("zIndex", 0)
            : isNaN(parseInt(n)) || (t = Math.max(t, parseInt(n)));
        });
        const n = s()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(t || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let o,
          i,
          r = 0,
          a = 0,
          c = 0,
          l = 0;
        e.prepend(n);
        const u = (e) => {
            const t = e.GetBoundingRect(),
              o = n[0].getBoundingClientRect();
            return {
              left: t.x - o.x - 0,
              top: t.y - o.y - 0,
              height: t.height,
              width: t.width,
            };
          },
          h = (e, t) => {
            (r = t.left),
              (a = t.top),
              (c = t.height),
              (l = t.width),
              e.css({ left: r, top: a, height: c, width: l });
          },
          d = (e) => {
            if ((o && (o(), (o = void 0)), e && e.BWantsFocusRing())) {
              let t = s()("<div/>", {
                  "data-focusring": !0,
                  style: "position: absolute; pointer-events: none; ",
                  class: dt().FocusRing,
                }),
                d = u(e);
              h(t, d),
                n.append(t),
                (i = () =>
                  ((e, t) => {
                    if (e && e.BWantsFocusRing()) {
                      let n = u(e);
                      (n.left == r &&
                        n.top == a &&
                        n.height == c &&
                        n.width == l) ||
                        h(t, n);
                    }
                  })(e, t));
              let m = window.setInterval(i, 200),
                g = e.Tree.OnActiveStateChangedCallbacks.Register((e) => {
                  e ? t.show() : t.hide();
                });
              o = () => {
                window.clearInterval(m),
                  t.remove(),
                  (i = void 0),
                  g.Unregister();
              };
            }
          };
        return {
          OnBlur: () => d(null),
          OnFocus: (e, t) => d(t),
          OnFocusChange: (e, t, n) => d(n),
          OnForceMeasureFocusRing: () => i && i(),
        };
      }
      function gt(e) {
        return !!e.is_repeat;
      }
      Object.seal({ onMoveUp: pt, onMoveDown: pt }),
        Object.seal({ onMoveRight: pt, onMoveLeft: pt });
      function pt(e, t) {
        if (e.is_repeat) return !1;
        const n = t.GetRelativeDirection(e.button);
        return n == Ge.FORWARD
          ? t.BFocusFirstChild(o.GAMEPAD)
          : n == Ge.BACKWARD && t.BFocusLastChild(o.GAMEPAD);
      }
      function _t(e) {
        if (e) {
          const t = Function("event", e);
          return (e) => t.apply(e.currentTarget, [e]);
        }
        return null;
      }
      function ft() {
        return !0;
      }
      function vt(e) {
        return "BlockMovement" == e
          ? ft
          : "RepeatNavigationBoundary" == e
            ? gt
            : e
              ? Function("detail", e)
              : null;
      }
      function bt(e) {
        this.click(), e.stopPropagation();
      }
      function Ct(e) {
        s()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function At(e, t) {
        t ? s()(e).addClass("gpfocus") : s()(e).removeClass("gpfocus");
      }
      function wt(e) {
        const t = e.currentTarget;
        if (e.defaultPrevented || !b(t)) return !1;
        const n = e.detail.is_repeat ? 4.5 : 3.33,
          o = "smooth",
          i = t.ownerDocument,
          s = i.defaultView;
        switch (e.detail.button) {
          case r.pR.DIR_UP:
            if (s.scrollY > 3)
              return Fe(s, { top: -s.innerHeight / n, behavior: o }), !0;
            break;
          case r.pR.DIR_RIGHT:
            if (s.scrollX + s.innerWidth < i.body.clientWidth - 3)
              return Fe(s, { left: s.innerWidth / n, behavior: o }), !0;
            break;
          case r.pR.DIR_DOWN:
            if (s.scrollY + s.innerHeight < i.body.clientHeight - 3)
              return Fe(s, { top: s.innerHeight / n, behavior: o }), !0;
            break;
          case r.pR.DIR_LEFT:
            if (s.scrollX > 3)
              return Fe(s, { left: s.innerWidth / n, behavior: o }), !0;
        }
        return !1;
      }
      const St = new k("FocusNavigation").Debug;
      var Rt;
      !(function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NotNeeded = 1)] = "NotNeeded"),
          (e[(e.InReactTree = 2)] = "InReactTree");
      })(Rt || (Rt = {}));
      const It = new ut();
      let Tt,
        Ft = !1,
        Nt = null;
      function Et(e) {
        Ft ||
          ((Nt = new rt()),
          (Tt = new v(Nt)),
          Tt.RegisterForFocusChanged(Nt.GetDefaultContext()),
          It.Init(window),
          Tt.BIsGamepadInputExternallyControlled() || Nt.RegisterInputSource(e),
          (Tt.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            Nt.RegisterInputSource(new N(window)),
          (function (e) {
            s()("html").addClass("gpnav_active");
            const t = s()("body"),
              n = e.GetDefaultContext(),
              o = e.NewGamepadNavigationTree(n, "legacy", void 0, {
                historyMode: "navigationapi",
              });
            s()(window).on("touchstart mousedown focus", () =>
              n.OnActivate(window),
            ),
              s()(window).on("blur", () => n.OnDeactivate(window));
            const i = mt(t);
            (o.Root.m_FocusRing = i),
              o.Root.SetProperties({
                scrollIntoViewType: Pe.NoTransformSparseContent,
              }),
              o.SetIsEnabled(!0),
              o.OnActiveStateChangedCallbacks.Register((e) => {
                const t = o.GetLastFocusedNode();
                t?.Element && At(t.Element, e);
              }),
              Object.assign(window, {
                legacyWebFocusNavController: Nt,
                __nav_tree_root: o,
                __virtual_keyboard_client: It,
              }),
              yt.set(document.body, o.Root),
              Mt(document.body, o.Root),
              kt(void 0, !0),
              e.RegisterGamepadNavigationTree(o, window),
              n.OnMount(window),
              window.document.hasFocus() && n.OnActivate(window);
            s()(document.body).on("vgp_onbuttondown", function (e) {
              o.OnRootButtonDown(e.originalEvent);
            }),
              l(document.body, wt);
            new MutationObserver(Dt).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (function (e) {
                fe = e;
              })(!0),
              (function () {
                Object.assign(window, Kt),
                  window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
              })(),
              !1;
          })(Nt)),
          (Ft = !0);
      }
      function Dt(e) {
        for (const t of e) {
          const e = [],
            n = [];
          C(
            t,
            (t) => e.push(t),
            (e) => n.push(e),
          ),
            e.length && kt(s()(e)),
            n.length && xt(s()(n));
        }
      }
      const yt = new WeakMap(),
        Ot = new WeakMap();
      let Lt = [];
      function Mt(e, t) {
        if (t instanceof xe) {
          const n = t.GetDepth();
          Lt[n] || (Lt[n] = []), Lt[n].push([e, t]);
        }
        yt.set(e, t);
      }
      function Bt(e, t) {
        const n = Ot.has(e) ? Ot.get(e) : [];
        n.push(t), Ot.set(e, n);
      }
      function Pt(e) {
        return "jquery" in e
          ? yt.get(e[0]) || Rt.Unknown
          : yt.get(e) || Rt.Unknown;
      }
      function Gt(e) {
        return "jquery" in e ? yt.has(e[0]) : yt.has(e);
      }
      function xt(e) {
        e.find("*")
          .addBack()
          .each(function () {
            Ot.get(this)?.forEach((e) => e()),
              yt.delete(this),
              Ot.delete(this),
              s()(this).attr("data-nav-modal") && Ht(this);
          });
      }
      function kt(e, t = !1) {
        performance.now();
        const n =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        s()(n, e)
          .addBack(n)
          .each(function () {
            var e;
            Gt((e = this)) || Wt(e);
          }),
          (function () {
            for (let e = Lt.length - 1; e >= 0; e--)
              if (Lt[e])
                for (let [t, n] of Lt[e]) {
                  Bt(t, n.Tree.RegisterNavigationItem(n, t));
                  const e = s()(t).data("navTreeModal");
                  e &&
                    (s()(t).data(
                      "unregisterNavTree",
                      Nt.RegisterGamepadNavigationTree(e, window),
                    ),
                    e.Activate(!0));
                }
            Lt = [];
          })();
      }
      function Ut(e) {
        const t = s()(e.Element);
        return (
          !t.data("gpFocusDisabled") &&
          !(!t.is(":visible") || "hidden" == t.css("visibility")) &&
          (0 != t.outerWidth() ||
            0 != t.outerHeight() ||
            "hidden" !== t.css("overflow"))
        );
      }
      function Wt(e) {
        const t = s()(e),
          n = Vt(e);
        if (n instanceof We || n == Rt.InReactTree)
          return Mt(e, Rt.InReactTree), Rt.InReactTree;
        const i = n.Tree;
        let r,
          a = t.data("panel") || {},
          u = Ut;
        if (
          (t.attr("data-nav-modal")
            ? (r = (function (e, t) {
                const n = Nt.NewGamepadNavigationTree(
                    Nt.GetDefaultContext(),
                    "modal_dialog",
                    e,
                    { modal: !0 },
                  ),
                  o = mt(s()(t));
                return (
                  (n.Root.m_FocusRing = o),
                  n.Root.SetProperties({ focusableIfEmpty: !0 }),
                  s()(t).data("navTreeModal", n),
                  Mt(t, n.Root),
                  n.Root
                );
              })(i, e))
            : t.data("reactNavRoot")
              ? ((r = new We(t.data("reactNavRoot"), n)), (u = void 0))
              : (r = i.CreateNode(n, n.m_FocusRing)),
          "A" == e.tagName || "BUTTON" == e.tagName || "LABEL" == e.tagName)
        )
          (a.focusable = a.focusable ?? !0),
            (a.clickOnActivate = a.clickOnActivate ?? !0);
        else if ("INPUT" == e.tagName)
          switch (((a.focusable = a.focusable ?? !0), e.getAttribute("type"))) {
            case "radio":
            case "checkbox":
              a.clickOnActivate = a.clickOnActivate ?? !0;
              break;
            case "text":
            case "password":
              a.enableVirtualKeyboard = a.enableVirtualKeyboard ?? !0;
          }
        else
          "TEXTAREA" == e.tagName &&
            ((a.focusable = a.focusable ?? !0),
            (a.enableVirtualKeyboard = a.enableVirtualKeyboard ?? !0));
        const m = a["flow-children"];
        delete a["flow-children"];
        let {
            clickOnActivate: g,
            maintainX: p,
            maintainY: _,
            enableVirtualKeyboard: f,
            preferredChild: v,
            onOKActionDescription: b,
            onCancelActionDescription: C,
            onSecondaryActionDescription: A,
            onOptionsActionDescription: w,
            onMenuActionDescription: S,
            actionDescriptionMap: R,
            onOKButton: I,
            onCancelButton: T,
            onSecondaryButton: F,
            onOptionsButton: N,
            onMenuButton: E,
            onMoveUp: D,
            onMoveRight: y,
            onMoveDown: O,
            onMoveLeft: L,
            onGamepadDirection: M,
            bFocusRingRoot: B,
            type: P,
            ...G
          } = a,
          x = _t(I),
          k = _t(T),
          U = _t(F),
          W = _t(N),
          V = _t(E),
          H = _t(M);
        P || (P = "Panel"),
          "PanelGroup" == P &&
            ({ onOKButtonHandler: x, onCancelButtonHandler: k } = (function (
              e,
              t,
            ) {
              const {
                onOKButtonHandler: n,
                onCancelButtonHandler: i,
                navNode: s,
              } = e;
              return (
                (t.focusable = !1 !== t.focusable),
                {
                  onOKButtonHandler: (e) =>
                    !(
                      !s.BHasFocus() ||
                      !s.BChildTakeFocus(o.GAMEPAD, e.detail.button)
                    ) ||
                    (!!n && n(e)),
                  onCancelButtonHandler: (e) =>
                    !(
                      !s.BFocusWithin() ||
                      s.BHasFocus() ||
                      !s.BTakeFocus(o.GAMEPAD, e.detail.button)
                    ) ||
                    (!!i && i(e)),
                }
              );
            })(
              { onOKButtonHandler: x, onCancelButtonHandler: k, navNode: r },
              G,
            )),
          x &&
            Bt(
              t[0],
              (function (e, t) {
                return c(e, "vgp_onok", h(t));
              })(t[0], x),
            ),
          k &&
            Bt(
              t[0],
              (function (e, t) {
                return c(e, "vgp_oncancel", h(t));
              })(t[0], k),
            ),
          U &&
            A &&
            Bt(
              t[0],
              (function (e, t) {
                return c(e, "vgp_onsecondaryaction", h(t));
              })(t[0], U),
            ),
          W &&
            w &&
            Bt(
              t[0],
              (function (e, t) {
                return c(e, "vgp_onoptions", h(t));
              })(t[0], W),
            ),
          V &&
            S &&
            Bt(
              t[0],
              (function (e, t) {
                return c(e, "vgp_onmenu", h(t));
              })(t[0], V),
            ),
          H && Bt(t[0], l(t[0], H));
        const K = (function (e, t, n, o) {
            const i = {};
            return (
              e && (i.onMoveUp = vt(e)),
              t && (i.onMoveRight = vt(t)),
              n && (i.onMoveDown = vt(n)),
              o && (i.onMoveLeft = vt(o)),
              i
            );
          })(D, y, O, L),
          $ = m ? at(m) : Me.NONE;
        $ != Me.NONE && (G.layout = $),
          p
            ? (G.navEntryPreferPosition = Be.MAINTAIN_X)
            : _
              ? (G.navEntryPreferPosition = Be.MAINTAIN_Y)
              : v && (G.navEntryPreferPosition = Be.PREFERRED_CHILD),
          g &&
            (!1 !== G.focusable && (G.focusable = !0),
            t.on("vgp_onok", "firstChild" === g ? Ct : bt),
            t.attr("role") ||
              ("A" !== t.prop("tagName") && t.attr("role", "button")),
            Bt(e, () => {
              t.off("vgp_onok");
            })),
          f &&
            (t.on("vgp_onok.vkbindings", () => It.ShowVirtualKeyboard()),
            t.on("click.vkbindings", () => It.ShowVirtualKeyboard()),
            t.on("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != e &&
                It.HideVirtualKeyboard();
            }),
            Bt(e, () => {
              t.off(".vkbindings");
            })),
          G.focusable && void 0 === t.attr("tabIndex") && t.attr("tabIndex", 0),
          G.focusable && r.SubscribableHasFocus.Subscribe((t) => At(e, t)),
          B &&
            ((r.m_FocusRing = mt(t)),
            "static" == t.css("position") && t.css("position", "relative"));
        const j = {
          fnCanTakeFocus: u,
          actionDescriptionMap: d({
            onOKActionDescription: b,
            onCancelActionDescription: C,
            onSecondaryActionDescription: A,
            onOptionsActionDescription: w,
            onMenuActionDescription: S,
            actionDescriptionMap: R,
          }),
          ...K,
          ...G,
        };
        return r.SetProperties(j), Mt(e, r), r;
      }
      function Vt(e) {
        const t = e.parentElement;
        if (!t) return console.error("no parent"), null;
        let n = Pt(t);
        if (n == Rt.Unknown)
          n = (function (e) {
            let t = !1;
            switch (e.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                t = !0;
                break;
              case "DIV":
                if (ne(e) != Me.COLUMN) t = !0;
                else {
                  const n = ne(e.parentElement);
                  (n != Me.ROW && n != Me.ROW_REVERSE) || (t = !0);
                }
            }
            let n = Rt.NotNeeded;
            return t ? (n = Wt(e)) : Mt(e, n), n;
          })(t);
        else if (n == Rt.InReactTree) return n;
        return n instanceof xe ? n : Vt(t);
      }
      function Ht(e) {
        const t = s()(e).data("unregisterNavTree");
        console.assert(t, "missing unregister binding"),
          t(),
          s()(e).removeAttr("data-nav-modal"),
          s()(e).removeData("unregisterNavTree"),
          s()(e).removeClass("navTreeModal");
      }
      const Kt = {
        InstrumentFocusElements: kt,
        ForceUpdateFocusElements: function (e) {
          xt(s()(e)), kt(s()(e));
        },
        GPNavFocusChild: function (e) {
          let t = Pt(e[0]);
          return (
            t instanceof xe || (t = Vt(e[0])),
            t instanceof xe && t.BTakeFocus(o.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (e) {
          St("Showing element as modal", e);
          const t = s()(e),
            n = Gt(t);
          return (
            n &&
              (St(
                "Element already in DOM tree, forcibly re-instrumenting elements so they are parented to modal",
              ),
              xt(t)),
            t.attr("data-nav-modal", "true"),
            n && kt(t),
            () => Ht(e)
          );
        },
        GPShowVirtualKeyboard: function (e = !0) {
          e ? It.ShowVirtualKeyboard() : It.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (e, t) {
          const n = Pt(e);
          n instanceof xe &&
            n.SetProperties({ ...n.m_Properties, actionDescriptionMap: d(t) });
        },
      };
    },
    100: (e, t, n) => {
      "use strict";
      n.d(t, { T: () => o, h: () => i });
      const o = "GamepadInput";
      var i;
      !(function (e) {
        (e[(e.PageUnloading = 0)] = "PageUnloading"),
          (e[(e.Unknown = 1)] = "Unknown"),
          (e[(e.None = 2)] = "None"),
          (e[(e.Basic = 3)] = "Basic"),
          (e[(e.Full = 4)] = "Full");
      })(i || (i = {}));
    },
    398: (e, t, n) => {
      "use strict";
      n.d(t, { A7: () => r, Vp: () => a, n4: () => c });
      var o = n(629),
        i = n(947),
        s = n(100);
      class r {
        PostMessage(e) {}
        RegisterForMessage(e) {}
      }
      class a {
        m_fnCallback = void 0;
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(e) {
          this.m_fnCallback = e;
        }
        PostMessage(e) {
          let t = JSON.stringify(e);
          SteamClient.BrowserView.PostMessageToParent(s.T, t);
        }
        OnMessage(e, t) {
          if (e == s.T) {
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
      (0, o.Cg)([i.o], a.prototype, "OnMessage", null);
      class c {
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
          this.m_postWindow.postMessage({ gamepadMessage: s.T, args: t }, "*");
        }
        OnMessage(e) {
          let t = e?.data;
          if (t && t.gamepadMessage == s.T && t.args) {
            const e = JSON.parse(t.args);
            this.m_fnCallback(e);
          }
        }
      }
      (0, o.Cg)([i.o], c.prototype, "OnMessage", null);
    },
  },
]);
