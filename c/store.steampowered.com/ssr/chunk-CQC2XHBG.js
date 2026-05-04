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
var _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
function _(_, _) {
  let _ = ".jpg";
  (!_ || _ === "0000000000000000000000000000000000000000") && (_ = _),
    _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40)));
  let _ = _.AVATAR_BASE_URL;
  return (
    _ ||
      ((_ = _.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
      (_ += _.substr(0, 2) + "/")),
    (_ += _),
    _ && _ != "small" && (_ += "_" + _),
    (_ += _),
    _
  );
}
var _ = 0,
  _ = "061818254b2c99ac49e6626adb128ed1282a392f";
var _ = 120,
  _ = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(_) {
      this.m_unAppID = _;
    }
    get appid() {
      return this.m_unAppID;
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    get is_valid() {
      return this.m_bInitialized && !!this.m_strName;
    }
    get name() {
      return this.m_strName;
    }
    get icon_url_no_default() {
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, _);
    }
    get time_updated_from_server() {
      return this.m_dtUpdatedFromServer;
    }
    get apptype() {
      return this.m_eAppType;
    }
    BIsApplicationOrTool() {
      return this.apptype == 4 || this.apptype == 2;
    }
    BuildAppURL(_, _) {
      return _
        ? _.MEDIA_CDN_COMMUNITY_URL +
            "images/apps/" +
            this.appid +
            "/" +
            _ +
            ".jpg"
        : _(_);
    }
    DeserializeFromMessage(_) {
      (this.m_bInitialized = !0),
        (this.m_strName = _.name()),
        (this.m_strIconURL = _.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = _.app_type());
    }
    DeserializeFromAppOverview(_) {
      _.icon_hash() && _.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = _.display_name()),
          (this.m_strIconURL = _.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = _.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(_) {
      try {
        (this.m_strName = _.strName),
          (this.m_strIconURL = _.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
          (this.m_eAppType = _.eAppType),
          (this.m_bInitialized = !0);
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        _(
          this.m_bInitialized,
          "Attempting to serialize an uninitialized AppInfo object for caching!",
        ),
        this.m_bInitialized
          ? {
              strName: this.m_strName,
              strIconURL: this.m_strIconURL,
              strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
              eAppType: this.m_eAppType,
            }
          : null
      );
    }
  };
var _ = class {
  constructor() {
    _(this);
  }
  m_mapCallbacks = new Map();
  m_rgRegisteredEMsgs = [];
  m_mapServiceMethodHandlers = new Map();
  m_rgRegisteredServiceMethodHandlers = [];
  m_ErrorReportingStore;
  InstallErrorReportingStore(_) {
    this.m_ErrorReportingStore = _;
  }
  DispatchMsgToHandlers(_, _) {
    let _ = _.GetEMsg();
    if (_ == 146) {
      let _ = _.Hdr().target_job_name();
      if (_) {
        let _ = this.m_mapServiceMethodHandlers.get(_);
        if (_) {
          this.DEBUG_LogMessageDispatch(_, _[0]);
          for (let _ of _)
            try {
              _.invoke(_, _);
            } catch (_) {
              _ instanceof Error && this.m_ErrorReportingStore
                ? this.m_ErrorReportingStore.ReportError(_)
                : console.error(
                    `MessageHandlers failed to dispatch message to handler (${_}): `,
                    _,
                  );
            }
          return !0;
        }
      }
    } else {
      let _ = this.m_mapCallbacks.get(_);
      if (_) {
        this.DEBUG_LogMessageDispatch(_, _[0]);
        for (let _ of _)
          try {
            _.invoke(_);
          } catch (_) {
            _ instanceof Error && this.m_ErrorReportingStore
              ? this.m_ErrorReportingStore.ReportError(_)
              : console.error(
                  "MessageHandlers failed to dispatch message to handler: ",
                  _,
                );
          }
        return !0;
      }
    }
    return !1;
  }
  DEBUG_LogMessageDispatch(_, _) {}
  get emsg_list() {
    return this.m_rgRegisteredEMsgs;
  }
  get servicemethod_list() {
    return this.m_rgRegisteredServiceMethodHandlers;
  }
  AddCallback(_, _, _) {
    let _ = this.m_mapCallbacks.get(_);
    return (
      _ ||
        ((_ = []),
        this.m_mapCallbacks.set(_, _),
        this.m_rgRegisteredEMsgs.push(_)),
      _.push({
        invoke: _,
        msgClass: _,
      }),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapCallbacks.get(_);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  AddServiceMethodHandler(_, _) {
    let _ = (_, _) => {
      let _ = _.InitFromMsg(_.request, _),
        _ = _.Init(_.response, 147),
        _ = _(_, _),
        _ = (_) => {
          _.Hdr().set_eresult(_), _(_);
        };
      _ instanceof Promise
        ? _.then(_).catch(() => {
            _(2);
          })
        : _(_);
    };
    return (
      this.m_mapServiceMethodHandlers.has(_.name)
        ? console.error("Duplicate registration for method " + _.name)
        : (this.m_mapServiceMethodHandlers.set(_.name, [
            {
              invoke: _,
              msgClass: _.request,
            },
          ]),
          this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapServiceMethodHandlers.get(_.name);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  AddServiceNotificationHandler(_, _) {
    let _ = (_, _) => {
        let _ = _.InitFromMsg(_.request, _);
        _(_);
      },
      _ = this.m_mapServiceMethodHandlers.get(_.name);
    return (
      _ ||
        ((_ = []),
        this.m_mapServiceMethodHandlers.set(_.name, _),
        this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
      _.push({
        invoke: _,
        msgClass: _.request,
      }),
      {
        invoke: _,
        unregister: () => {
          let _ = this.m_mapServiceMethodHandlers.get(_.name);
          if (_)
            for (let _ = 0; _ < _.length; _++)
              _[_].invoke == _ && (_.splice(_, 1), _--);
        },
      }
    );
  }
  RegisterBaseEMessageHandler(_, _) {
    return this.AddCallback(_, void 0, _);
  }
  RegisterEMessageHandler(_, _, _) {
    return this.AddCallback(_, _, (_) => {
      _(_.InitFromMsg(_, _));
    });
  }
  RegisterEMessageAction(_, _, _) {
    return this.AddCallback(_, _, (_) => {
      _(() => {
        _(_.InitFromMsg(_, _));
      });
    });
  }
  RegisterServiceNotificationHandler(_, _) {
    return this.AddServiceNotificationHandler(_, _);
  }
  RegisterServiceNotificationHandlerAction(_, _) {
    return this.AddServiceNotificationHandler(_, (_) => {
      let _;
      return (
        _(() => {
          _ = _(_);
        }),
        _
      );
    });
  }
  RegisterServiceMethodHandler(_, _) {
    return this.AddServiceMethodHandler(_, _);
  }
  RegisterServiceMethodHandlerAction(_, _) {
    return this.AddServiceMethodHandler(_, (_, _) => {
      let _;
      return (
        _(() => {
          _ = _(_, _);
        }),
        _
      );
    });
  }
};
_([_], _.prototype, "m_rgRegisteredEMsgs", 2),
  _([_], _.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.auth_key || _(_._()),
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
              auth_key: {
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
      return "CTransportAuth_Authenticate_Request";
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
      return "CTransportAuth_Authenticate_Response";
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
      return "CTransportAuth_StartShutdown_Notification";
    }
  },
  _;
((_) => {
  _.AuthenticateHandler = {
    name: "TransportAuth.Authenticate#1",
    request: _,
    response: _,
  };
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
        : _.SendMsg("TransportAuth.Authenticate#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.Authenticate = _;
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
        : _.SendMsg("TransportAuth.Authenticate#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  (_.SendMsgAuthenticate = _),
    (_.NotifyStartShutdownHandler = {
      name: "TransportAuth.NotifyStartShutdown#1",
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
        : _.RegisterServiceNotificationHandler(_.NotifyStartShutdownHandler, _)
    );
  }
  _.RegisterForNotifyStartShutdown = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification("TransportAuth.NotifyStartShutdown#1", _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.NotifyStartShutdown = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification("TransportAuth.NotifyStartShutdown#1", _(_, _), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  _.SendMsgNotifyStartShutdown = _;
})((_ ||= {}));
var _ = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new _("CWebSocketConnection", () => this.m_sName);
  m_bDisconnectRequested = !1;
  m_bConnecting = !1;
  m_fnOnMessageHandler;
  m_fnOnCloseHandler;
  m_fnOnReconnectStartHandler;
  m_fnOnReconnectFinishHandler;
  m_nConnectAttemptsMax;
  m_nConnectAttemptTimeoutMs;
  m_bReconnectOnFailure;
  m_nReconnectAttemptTimeoutMs;
  m_nReconnectAttemptsMax;
  constructor(_, _) {
    (this.m_sName = _),
      (this.m_fnOnMessageHandler = _.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = _.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        _.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        _.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = _.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = _.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = _.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = _.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs = _.nReconnectAttemptTimeoutMs ?? 1e4);
  }
  get name() {
    return this.m_sName;
  }
  async Connect(_) {
    return (
      (this.m_sURL = _),
      this.ConnectWithRetry(
        this.m_sURL,
        this.m_nConnectAttemptsMax,
        this.m_nConnectAttemptTimeoutMs,
      )
    );
  }
  async Reconnect() {
    return this.ConnectWithRetry(
      this.m_sURL,
      this.m_nReconnectAttemptsMax,
      this.m_nReconnectAttemptTimeoutMs,
    );
  }
  GetInterAttemptBackoffMs(_) {
    return _(_, 1, 5) * 1e3;
  }
  async ConnectWithRetry(_, _, _) {
    this.m_bConnecting = !0;
    let _ = 0;
    do {
      try {
        let _ = await this.ConnectToSocket(_, _);
        if (_.result == 1) return (this.m_bConnecting = !1), _;
        this.Log.Warning(`connect attempt failed: ${_.result} - ${_.message}`);
      } catch (_) {
        this.Log.Warning(`connect attempt failed: exception ${_.name} - ${_}`);
      }
      let _ = this.GetInterAttemptBackoffMs(_);
      this.Log.Info(`connect retry: attempt:${_}/${_} backoff:${_}`),
        await new Promise((_) => setTimeout(_, _)),
        (this.m_socket = null),
        (_ += 1);
    } while (_ < _);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      {
        result: 2,
        message: "not ready, exceeded retry count",
      }
    );
  }
  Disconnect() {
    this.Log.Info("disconnect requested"),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close();
  }
  PrepareForShutdown() {
    this.Log.Info("shutdown pending"), (this.m_bDisconnectRequested = !0);
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    if (
      (this.Log.Info("start reconnect"),
      (this.m_socket = null),
      this.m_fnOnReconnectStartHandler({
        connection: this,
      }),
      (await this.Reconnect()).result != 1)
    ) {
      this.Log.Warning("failed to re-connect to websocket after close"),
        this.m_fnOnReconnectFinishHandler({
          connection: this,
          eResult: 2,
        }),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !0,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    this.Log.Info("reconnect successful"),
      this.m_fnOnReconnectFinishHandler({
        connection: this,
        eResult: 1,
      });
  }
  async ConnectToSocket(_, _) {
    if (this.m_socket != null)
      return this.m_socket.readyState != WebSocket.OPEN
        ? (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          {
            result: 2,
            message: "websocket in an unexpected state",
          })
        : {
            result: 1,
            message: "ready",
          };
    try {
      this.m_socket = new WebSocket(_);
    } catch {
      return (
        this.Log.Warning("failed to initialize websocket connection"),
        {
          result: 35,
          message: "Failed to initialize websocket connection",
        }
      );
    }
    return (
      (this.m_socket.binaryType = "arraybuffer"),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, _))
        ? (this.Log.Info("connection ready"),
          {
            result: 1,
            message: "ready",
          })
        : (this.Log.Warning("failed to reach open state"),
          {
            result: 2,
            message: "failed to reach open state",
          })
    );
  }
  async WaitForSocketOpen(_, _) {
    if (_.readyState != WebSocket.CONNECTING)
      return _.readyState == WebSocket.OPEN;
    let _ = 100,
      _ = _ / _;
    for (; _.readyState == WebSocket.CONNECTING && _ > 0; )
      _--, await new Promise((_) => setTimeout(_, _));
    return _.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
  }
  OnSocketError(_) {
    this.Log.Warning("websocket error");
  }
  OnSocketOpen(_) {
    this.Log.Info("websocket open");
  }
  OnSocketClose(_) {
    if (this.m_bDisconnectRequested) {
      this.Log.Info("websocket closed"),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning("websocket unexpectedly closed");
    let _ = this.BShouldReconnect();
    this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: _,
    }),
      _ && this.StartReconnect();
  }
  async OnSocketMessage(_) {
    this.m_fnOnMessageHandler(_.data);
  }
  SendSerializedMessage(_) {
    try {
      return this.m_socket.send(_), 1;
    } catch {
      return 2;
    }
  }
};
_([_], _.prototype, "OnSocketError", 1),
  _([_], _.prototype, "OnSocketOpen", 1),
  _([_], _.prototype, "OnSocketClose", 1),
  _([_], _.prototype, "OnSocketMessage", 1);
var _ = "localhost",
  _ = new _("WebUITransport"),
  _ = class _ {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new _();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    static sm_ErrorReportingStore;
    static InstallErrorReportingStore(_) {
      this.sm_ErrorReportingStore = _;
    }
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 64 * 1024 * 1024;
    }
    ReportError(_) {
      _.Warning(_);
      let _ = _.sm_ErrorReportingStore;
      _ &&
        _.ReportError(new Error(_), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!_.IN_CLIENT) return;
      let _ = await SteamClient.WebUITransport.GetTransportInfo();
      (this.m_nMaximumMsgSizeBytes = _.nMaximumMsgSizeBytes),
        this.CreateConnection(1, "steamUI", _.portSteamUI, _.authKeySteamUI),
        this.CreateConnection(
          2,
          "clientdll",
          _.portClientdll,
          _.authKeyClientdll,
        ),
        _().SetDefaultTransport(this),
        _().SetDefaultHandlerRegistry(this.m_messageHandlers),
        _.RegisterForNotifyStartShutdown(this.OnStartShutdown);
    }
    get messageHandlers() {
      return this.m_messageHandlers;
    }
    SetStatusEventHandler(_) {
      this.m_fnOnStatusEventHandler = _;
    }
    SetReconnectErrorHandler(_) {
      this.m_fnOnReconnectErrorHandler = _;
    }
    CreateConnection(_, _, _, _) {
      let _ = {
          bReconnectOnFailure: !0,
          fnOnMessageHandler: this.OnWebsocketMessage,
          fnOnCloseHandler: this.OnWebsocketClose,
          fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
          fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
          nConnectAttemptsMax: 8,
          nConnectAttemptTimeoutMs: 1e4,
          nReconnectAttemptsMax: 8,
          nReconnectAttemptTimeoutMs: 1e4,
        },
        _ = {
          connection: new _(_, _),
          sUrl: `ws://${_}:${_}/transportsocket/`,
          sAuthKey: _,
          eClientExecutionSite: _,
        };
      this.m_mapConnectionDetails.set(_, _);
    }
    SendMsg(_, _, _, _) {
      return new Promise((_, _) => {
        let _ = _.eClientExecutionSite;
        if (_ == null || _ == 0) {
          _.Error(`SendMsg: Invalid client execution site: ${_}`),
            _(`Transport SendMsg: invalid client execution site ${_}`);
          return;
        }
        let _ = this.m_mapConnectionDetails.get(_);
        if (_ == null) {
          _.Error(
            `SendMsg: could not find connection for execution site: ${_}`,
          ),
            _(
              `Transport SendMsg: could not find connection for execution site ${_}`,
            );
          return;
        }
        let _ = _.connection;
        if (!_.BCanSendMessages()) {
          let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
          this.m_mapServiceCallErrorCount.set(_, _ + 1);
          let _ = `SendMsg: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
          _ == 1 && this.ReportError(_),
            _.Warning(_ + ` error count: ${_}`),
            _("Transport SendMsg: socket not ready");
          return;
        }
        let _ = this.m_iMsgSeq++;
        _.SetEMsg(146),
          _.Hdr().set_target_job_name(_),
          _.Hdr().set_jobid_source("" + _);
        let _ = _.Serialize();
        if (_.byteLength >= this.m_nMaximumMsgSizeBytes) {
          _.Error(
            `SendMsg: message exceeds maximum size: ${_.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let _ = _.Init(_);
          _.Hdr().set_eresult(2), _(_);
          return;
        }
        if (_.SendSerializedMessage(_) != 1) {
          _.Error("SendMsg: Failed to send message"),
            _("Transport SendMsg: failed to send message");
          return;
        }
        this.m_mapPendingMethodRequests.set(_, {
          m_iSeq: _,
          m_responseClass: _,
          m_fnCallback: _,
          m_fnError: _,
        });
      });
    }
    SendNotification(_, _, _) {
      let _ = _.eClientExecutionSite;
      if (_ == null || _ == 0)
        return (
          _.Error(`SendNotification: Invalid client execution site: ${_}`), !1
        );
      let _ = this.m_mapConnectionDetails.get(_);
      if (_ == null)
        return (
          _.Error(
            `SendNotification: could not find connection for execution site: ${_}`,
          ),
          !1
        );
      let _ = _.connection;
      if (!_.BCanSendMessages()) {
        let _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
        this.m_mapServiceCallErrorCount.set(_, _ + 1);
        let _ = `SendNotification: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
        return (
          _ == 1 && this.ReportError(_), _.Warning(_ + ` error count: ${_}`), !1
        );
      }
      return (
        _.SetEMsg(146),
        _.Hdr().set_target_job_name(_),
        _.SendSerializedMessage(_.Serialize()) == 1
      );
    }
    async ConnectToSite(_) {
      let _ = await _.connection.Connect(_.sUrl);
      return _.result != 1
        ? _
        : (await this.SendAuthMessage(_)).BSuccess()
          ? {
              result: 1,
              message: "connected",
            }
          : {
              result: 2,
              message: "client auth failed",
            };
    }
    async MakeReady() {
      let _ = [];
      for (let [_, _] of this.m_mapConnectionDetails)
        _.push(this.ConnectToSite(_));
      let _ = await Promise.all(_);
      (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
      for (let _ of _) if (_.result != 1) return _;
      return {
        result: 1,
        message: "ready",
      };
    }
    GetConnectionDetails(_) {
      for (let [_, _] of this.m_mapConnectionDetails)
        if (_.connection === _) return _;
      return (
        _.Error("GetConnectionDetails: failed to identify connection"), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let _ = !0;
      for (let [_, _] of this.m_mapConnectionDetails)
        _.connection.BCanSendMessages() || (_ = !1);
      this.m_fnOnStatusEventHandler({
        bConnected: _,
      });
    }
    OnWebsocketReconnectStart(_) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(_) {
      if ((this.DispatchTransportStatusUpdate(), _.eResult != 1)) {
        _.Warning("OnWebsocketReconnect: Failed to reconnect to steam client"),
          this.m_fnOnReconnectErrorHandler?.({});
        return;
      }
      this.FailAllPendingRequests();
      let _ = this.GetConnectionDetails(_.connection);
      _ && this.SendAuthMessage(_);
    }
    OnWebsocketClose(_) {
      _.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(_) {
      let _ = new _(_),
        _ = _.InitHeaderFromPacket(_);
      _.Hdr().jobid_target() && _.Hdr().jobid_target() !== _
        ? this.DispatchMethodResponse(_)
        : this.DispatchNotification(_);
    }
    DispatchMethodResponse(_) {
      let _ = parseInt(_.Hdr().jobid_target()),
        _ = this.m_mapPendingMethodRequests.get(_);
      if (_ == null) {
        _(!1, "Transport Error: no pending callback for request");
        return;
      }
      _(_ == _.m_iSeq, "Transport Error: mistmatched request sequence"),
        this.m_mapPendingMethodRequests.delete(_);
      let _ = _.InitFromMsg(_.m_responseClass, _);
      _.m_fnCallback(_);
    }
    DispatchNotification(_) {
      let _ = (_) => {
        _(!1, "Transport Error: A notification should not generate a response");
      };
      this.m_messageHandlers.DispatchMsgToHandlers(_, _);
    }
    FailAllPendingRequests() {
      for (let [_, _] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${_.m_responseClass.name}`,
        );
        let _ = _.Init(_.m_responseClass);
        _.Hdr().set_eresult(2), _.m_fnCallback(_);
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(_) {
      let _ = _.AuthenticateHandler.name,
        _ = {
          eClientExecutionSite: _.eClientExecutionSite,
        },
        _ = _.Init(_);
      return (
        _.Hdr().set_webui_auth_key(_.sAuthKey),
        await this.SendMsg(_, _, _.AuthenticateHandler.response, _)
      );
    }
    OnStartShutdown(_) {
      for (let [_, _] of this.m_mapConnectionDetails)
        _.connection.PrepareForShutdown();
      return 1;
    }
  };
_([_], _.prototype, "OnWebsocketReconnectStart", 1),
  _([_], _.prototype, "OnWebsocketReconnectFinish", 1),
  _([_], _.prototype, "OnWebsocketClose", 1),
  _([_], _.prototype, "OnWebsocketMessage", 1),
  _([_], _.prototype, "OnStartShutdown", 1);
var _ = _,
  _ = new _();
var _ = _(_());
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.original_hostname || _(_._()),
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
              original_hostname: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              actual_hostname: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              path: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              base_name: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              success: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              status_code: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              address_of_request_url: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              response_time_ms: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bytes_received: {
                _: 9,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              num_retries: {
                _: 10,
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
      return "CClientMetrics_ClientBootstrap_RequestInfo";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.launcher_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [7, 8], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              launcher_type: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              steam_realm: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              beta_name: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              download_completed: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              total_time_ms: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              manifest_requests: {
                _: 7,
                _: _,
                _: !0,
                _: !0,
              },
              package_requests: {
                _: 8,
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
      return "CClientMetrics_ClientBootstrap_Summary";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.class_100 || _(_._()),
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
              class_100: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_200: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_300: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_400: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_500: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              no_response: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              class_unknown: {
                _: 7,
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
      return "CClientMetrics_ContentDownloadResponse_Counts";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.hostname || _(_._()),
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
              hostname: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              source_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              counts: {
                _: 3,
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
      return "CClientMetrics_ContentDownloadResponse_HostCounts";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.hosts || _(_._()),
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
              hosts: {
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
      return "CClientMetrics_ContentDownloadResponse_Hosts";
    }
  };
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.raw_version || _(_._()),
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
              raw_version: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              requested_interface_type: {
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
      return "CClientMetrics_AppInterfaceCreation";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.interface_name || _(_._()),
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
              interface_name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              method_name: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              call_count: {
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
      return "CClientMetrics_AppInterfaceMethodCounts";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.game_id || _(_._()),
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
              game_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              interfaces_created: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              methods_called: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              session_length_seconds: {
                _: 4,
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
      return "CClientMetrics_AppInterfaceStats_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.protocol_tested || _(_._()),
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
              protocol_tested: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              connectivity_state: {
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
      return "CClientMetrics_IPv6Connectivity_Result";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cell_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              cell_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              results: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              private_ip_is_rfc6598: {
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
      return "CClientMetrics_IPv6Connectivity_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.product || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              product: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              version: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              routes: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              components: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              actions: {
                _: 5,
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
      return "CClientMetrics_ReportReactUsage_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.route || _(_._()),
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
              route: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              count: {
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
      return "CClientMetrics_ReportReactUsage_Notification_RouteData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.component || _(_._()),
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
              component: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              count: {
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
      return "CClientMetrics_ReportReactUsage_Notification_ComponentData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.action || _(_._()),
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
              action: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              count: {
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
      return "CClientMetrics_ReportReactUsage_Notification_ActionData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.product || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              product: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              version: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              errors: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              tags: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
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
      return "CClientMetrics_ReportClientError_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.identifier || _(_._()),
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
              identifier: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              message: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              count: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              context: {
                _: 4,
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
      return "CClientMetrics_ReportClientError_Notification_Error";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.type || _(_._()),
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
              type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              num_ops: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              num_bytes: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              busy_time_ms: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              idle_time_ms: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sum_run_time_ms: {
                _: 6,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              sum_wait_time_ms: {
                _: 7,
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
      return "CClientMetrics_SteamPipeWorkStats_Operation";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              depotid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              work_type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              operations: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              hardware_type: {
                _: 5,
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
      return "CClientMetrics_SteamPipeWorkStats_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.summary || _(_._()),
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
              summary: {
                _: 1,
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
      return "CClientMetrics_ClientBootstrap_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cell_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              cell_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              stats: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              throttling_kbps: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              os_type: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              device_type: {
                _: 5,
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
      return "CClientMetrics_DownloadRates_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.source_type || _(_._()),
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
              source_type: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              source_id: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bytes: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              host_name: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              microseconds: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              used_ipv6: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              proxied: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              used_http2: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              cache_hits: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              cache_misses: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              hit_bytes: {
                _: 11,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              miss_bytes: {
                _: 12,
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
      return "CClientMetrics_DownloadRates_Notification_StatsInfo";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.validation_result || _(_._()),
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
              validation_result: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              app_id: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              staged_files: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              user_initiated: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              early_out: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              chunks_scanned: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              chunks_corrupt: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bytes_scanned: {
                _: 8,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              chunk_bytes_corrupt: {
                _: 9,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              total_file_size_corrupt: {
                _: 10,
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
      return "CClientMetrics_ContentValidation_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.app_id || _(_._()),
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
              app_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              platform_type: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              preload: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              blocking_app_launch: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              files_uploaded: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              files_downloaded: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              files_deleted: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bytes_uploaded: {
                _: 8,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              bytes_downloaded: {
                _: 9,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_total: {
                _: 10,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_init_caches: {
                _: 11,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_validate_state: {
                _: 12,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_ac_launch: {
                _: 13,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_ac_prep_user_files: {
                _: 14,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_ac_exit: {
                _: 15,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_build_sync_list: {
                _: 16,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_delete_files: {
                _: 17,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_download_files: {
                _: 18,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              microsec_upload_files: {
                _: 19,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              hardware_type: {
                _: 20,
                _: _.readUint32,
                _: _.writeUint32,
              },
              files_managed: {
                _: 21,
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
      return "CClientMetrics_CloudAppSyncStats_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.cell_id || _(_._()),
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
              cell_id: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              data: {
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
      return "CClientMetrics_ContentDownloadResponse_Counts_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.eresult || _(_._()),
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
              eresult: {
                _: 1,
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              share_method: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              seconds: {
                _: 3,
                _: _.readFloat,
                _: _.writeFloat,
              },
              bytes: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gameid: {
                _: 5,
                _: _.readFixed64String,
                _: _.writeFixed64String,
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
      return "CClientMetrics_ClipShare_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.original_range_method || _(_._()),
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
              original_range_method: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              start: {
                _: 2,
                _: _,
              },
              end: {
                _: 3,
                _: _,
              },
              seconds: {
                _: 4,
                _: _.readFloat,
                _: _.writeFloat,
              },
              gameid: {
                _: 5,
                _: _.readFixed64String,
                _: _.writeFixed64String,
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
      return "CClientMetrics_ClipRange_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.original_range_method || _(_._()),
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
              original_range_method: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              latest_range_method: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              delta_ms: {
                _: 3,
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
      return "CClientMetrics_ClipRange_Notification_RelativeRangeEdge";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recording_type || _(_._()),
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
              recording_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              seconds: {
                _: 2,
                _: _.readFloat,
                _: _.writeFloat,
              },
              bytes: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              gameid: {
                _: 4,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              instant_clip: {
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
      return "CClientMetrics_EndGameRecording_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.frame_rates || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              frame_rates: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              system_info: {
                _: 3,
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
      return "CClientMetrics_GamePerformance_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.gameid || _(_._()),
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
              gameid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              frame_rate: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              session_seconds: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              framegen_frame_rate: {
                _: 4,
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
      return "CClientMetrics_GamePerformance_Notification_FrameRate";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.client_args || _(_._()),
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
              client_args: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              gpu_webview_regkey_disabled: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              suppress_gpu_chrome: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              browser_not_supported: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              hw_accel_video_regkey_disabled: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              mini_mode_enabled: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              fps_counter_enabled: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              library_low_bandwidth_mode_enabled: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              library_low_perf_mode_enabled: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              gr_mode: {
                _: 10,
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
      return "CClientMetrics_ReportClientArgs_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accessibility_desktop_ui_scale || _(_._()),
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
              accessibility_desktop_ui_scale: {
                _: 1,
                _: _.readFloat,
                _: _.writeFloat,
              },
              accessibility_screen_reader_enabled: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              accessibility_high_contrast_mode: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              accessibility_reduce_motion: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              accessibility_color_filter_name: {
                _: 5,
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
      return "CClientMetrics_ReportAccessibilitySettings_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.glibc_version_major || _(_._()),
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
              glibc_version_major: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              glibc_version_minor: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              account_type: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              launcher_type: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              game_server_appid: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              process_name: {
                _: 6,
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
      return "CClientMetrics_ReportLinuxStats_Notification";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientAppInterfaceStatsReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientAppInterfaceStatsReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientIPv6ConnectivityReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientIPv6ConnectivityReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.SteamPipeWorkStatsReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.SteamPipeWorkStatsReport = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportReactUsage#1", _(_, _), {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.ReportReactUsage = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportClientError#1", _(_, _), {
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.ReportClientError = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientBootstrapReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientBootstrapReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientDownloadRatesReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientDownloadRatesReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientContentValidationReport#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientContentValidationReport = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientCloudAppSyncStats#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientCloudAppSyncStats = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ClientDownloadResponseCodeCounts#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ClientDownloadResponseCodeCounts = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportClientArgs#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ReportClientArgs = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportLinuxStats#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ReportLinuxStats = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ReportAccessibilitySettings#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportAccessibilitySettings = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportClipShare#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ReportClipShare = _;
  function _(_, _) {
    return _.SendNotification("ClientMetrics.ReportClipRange#1", _(_, _), {
      ePrivilege: 1,
    });
  }
  _.ReportClipRange = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ReportEndGameRecording#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportEndGameRecording = _;
  function _(_, _) {
    return _.SendNotification(
      "ClientMetrics.ReportGamePerformance#1",
      _(_, _),
      {
        ePrivilege: 1,
      },
    );
  }
  _.ReportGamePerformance = _;
})((_ ||= {}));
var _ =
    window.addEventListener ||
    (global && global.addEventListener) ||
    (() => {}),
  _ = [],
  _ = (_, _, _) =>
    _.push({
      error: _,
      cCallsitesToIgnore: _,
      strComponentStack: _,
    }),
  _,
  _ = !0,
  _ = class extends Error {
    constructor(..._) {
      super(..._), (this.name = "Assertion Failed");
    }
  };
if (_) {
  let _ = console.assert;
  console.assert = (_, _, ..._) => {
    if (!_) {
      let _ = _();
      _(new _(_(_, ..._)), 2, _);
    }
    _.apply(console, [_, _, ..._]);
  };
  let _ = console.error;
  (console.error = (_, ..._) => {
    let _ = _();
    _(new Error(_(_, ..._)), 1, _), _.apply(console, [_, ..._]);
  }),
    (console.clogerror = (_, _, ..._) => {
      let _ = _();
      _(new Error(_(_, ..._)), _ + 1, _), _.apply(console, [_, ..._]);
    }),
    _("error", (_) => {
      _(_.error, 0);
    }),
    _("unhandledrejection", (_) => {
      _(_.reason, 0);
    }),
    (_ = window.setTimeout(() => {
      (_ = []), (_ = () => {});
    }, 30 * 1e3));
}
var _ = {
    cCallsitesToIgnore: 0,
    bIncludeMessageInIdentifier: !1,
  },
  _ = [
    "(localhost|127.0.0.1):(?!(80|443))",
    "chrome-extension://",
    "HTMLDivElement.onreset \\(/market",
    "/.millennium/Dist",
    "Millennium internal",
    "millenium",
    "Refused unauthorized RPC command",
  ];
function _() {
  try {
    let _ = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    if (_ && typeof _ == "object" && typeof _.getCurrentStack == "function") {
      let _ = _.getCurrentStack();
      if (typeof _ == "string") return _;
    }
  } catch {}
}
var _ = class {
  m_strProduct;
  m_strVersion;
  m_transport = null;
  m_rgErrorQueue = [];
  m_sendTimer = null;
  m_bReportingPaused = !1;
  m_pauseTimer = void 0;
  m_fnGetReportingInterval = _;
  m_fnGetReportTags = () => [];
  m_bEnabled = !0;
  m_bInitialized = !1;
  constructor(_ = !0) {
    _ &&
      (_
        ? (_.forEach(
            ({ error: _, cCallsitesToIgnore: _, strComponentStack: _ }) =>
              this.ReportError(_, {
                cCallsitesToIgnore: _,
                strComponentStack: _,
              }),
          ),
          (_ = (_, _, _) =>
            this.ReportError(_, {
              cCallsitesToIgnore: _,
              strComponentStack: _,
            })))
        : (_ = () => {}),
      (_ = []),
      clearTimeout(_)),
      window.setTimeout(() => {
        this.m_bInitialized ||
          ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
      }, 30 * 1e3);
  }
  Init(_, _, _, _ = {}) {
    (this.m_bInitialized = !0),
      (this.m_strProduct = _),
      (this.m_strVersion = _),
      (this.m_transport = _),
      _.fnGetReportingInterval &&
        (this.m_fnGetReportingInterval = _.fnGetReportingInterval),
      _.fnGetReportTags && (this.m_fnGetReportTags = _.fnGetReportTags),
      this.m_bEnabled ||
        (console.error(
          "Error reporting was initialized after being disabled, possibly dropping errors.",
        ),
        (this.m_bEnabled = !0)),
      this.m_rgErrorQueue.length &&
        (this.SendErrorReports(this.m_rgErrorQueue),
        (this.m_rgErrorQueue = []));
  }
  async ReportError(_, _) {
    if (!_)
      return (
        console.warn(
          "Failed to report error: ReportError() was called without an error to report.",
        ),
        null
      );
    try {
      let _ = {
        ..._,
        ..._,
      };
      if (!this.m_bEnabled || !_) return null;
      let _ = await _(_, _);
      return _
        ? (_.cCallsitesToIgnore && _.message.splice(1, _.cCallsitesToIgnore),
          _.strComponentStack && (_.strComponentStack = _.strComponentStack),
          this.SendErrorReport(_),
          _)
        : null;
    } catch (_) {
      return console.log(`Failed to report error: ${_}`), null;
    }
  }
  PauseReportingForDuration(_) {
    this.PauseReporting(),
      (this.m_pauseTimer = window.setTimeout(() => this.ResumeReporting(), _));
  }
  PauseReporting() {
    (this.m_bReportingPaused = !0), window.clearTimeout(this.m_pauseTimer);
  }
  ResumeReporting() {
    (this.m_bReportingPaused = !1),
      window.clearTimeout(this.m_pauseTimer),
      this.ScheduleSend();
  }
  BIsBlacklisted(_) {
    for (let _ of _.message) {
      let _ = JSON.stringify(_);
      for (let _ of _) {
        let _ = new RegExp(_);
        if (_.match(_))
          return console.warn("Report", _, "matched regex", _), !0;
      }
    }
    return !1;
  }
  SendErrorReport(_) {
    if (!this.BIsBlacklisted(_)) {
      if (!this.m_transport) {
        this.m_rgErrorQueue.push(_);
        return;
      }
      this.QueueReport(_);
    }
  }
  QueueReport(_) {
    this.m_rgErrorQueue.push(_), this.m_bReportingPaused || this.ScheduleSend();
  }
  ScheduleSend() {
    this.m_sendTimer ||
      (this.m_sendTimer = window.setTimeout(() => {
        this.SendErrorReports(this.m_rgErrorQueue),
          (this.m_rgErrorQueue = []),
          (this.m_sendTimer = null);
      }, this.m_fnGetReportingInterval()));
  }
  SendErrorReports(_) {
    if (!_ || !_.length) return;
    let _ = _.Init(_),
      _ = _.reduce(
        (_, _) => (
          _[_.identifier]
            ? _[_.identifier].count++
            : (_[_.identifier] = {
                report: _,
                count: 1,
              }),
          _
        ),
        {},
      ),
      _ = Object.keys(_).map((_) => {
        let { report: _, count: _ } = _[_],
          _ = new _();
        return (
          _.set_count(_),
          _.set_identifier(_.identifier + " " + _.identifierHash),
          _.set_message(JSON.stringify(_.message)),
          _.strComponentStack &&
            _.set_context(
              JSON.stringify({
                componentStack: _.strComponentStack,
              }),
            ),
          _
        );
      });
    _.Body().set_product(this.m_strProduct),
      _.Body().set_version(this.m_strVersion),
      _.Body().set_errors(_);
    for (let _ of this.m_fnGetReportTags()) _.Body().add_tags(_);
    _.ReportClientError(this.m_transport, _);
  }
  get version() {
    return this.m_strVersion;
  }
  get product() {
    return this.m_strProduct;
  }
  get reporting_enabled() {
    return _;
  }
};
function _(_, ..._) {
  return typeof _ == "string" && _.length === 0
    ? _
    : [_, ..._]
        .map((_) => {
          try {
            let _ = String(_);
            return _ == "[object Object]" && (_ = JSON.stringify(_)), _;
          } catch {
            return "[Stringify Error]";
          }
        })
        .join(", ");
}
var _ = /^\s*at .*(\S+:\d+|\(native\))/m,
  _ = /(^|@)\S+:\d+/,
  _ = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/,
  _ = !1;
function _(_, _) {
  try {
    return _.stack && _.stack.match(_)
      ? _(_, _)
      : _.stack && _.stack.match(_)
        ? _(_, _)
        : _.stack && _.stack.match(_)
          ? _(_, _)
          : (_ ||
              (console.warn(
                "Error reporter does not know how to parse generated stack:",
              ),
              console.warn(_.stack),
              (_ = !0)),
            null);
  } catch (_) {
    return console.warn(`Failed to normalize error stack: ${_}`), null;
  }
}
async function _(_, _) {
  let { cCallsitesToIgnore: _, bIncludeMessageInIdentifier: _ } = _,
    { message: _, stack: _ } = _,
    _ =
      _?.split(`
`) ?? [],
    _ = _.filter((_) => !!_.match(_)),
    _ = _(_[_]);
  _ && (_ = `${_} ${_}`);
  let _ = _.map((_) => {
    let _ = _.match(/(.*)\((.*):(\d+):(\d+)\)/);
    if (
      ((!_ || _.length != 5) && (_ = _.match(/(.*at )(http.*):(\d+):(\d+)/)),
      !_)
    )
      return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await _(_),
    message: _,
  };
}
function _(_) {
  return _(_(_));
}
function _(_) {
  let _ = _.lastIndexOf("?");
  if (_ === -1) return _;
  let _ = _.indexOf(":", _);
  return _ === -1 ? _ : _.slice(0, _) + _.slice(_);
}
function _(_) {
  let _ = "https://",
    _ = _.indexOf(_);
  if (_ === -1) return _;
  let _ = _.indexOf("/", _ + _.length);
  return _ === -1 ? _ : _.slice(0, _) + _.slice(_);
}
async function _(_, _) {
  let { cCallsitesToIgnore: _, bIncludeMessageInIdentifier: _ } = _,
    _ =
      _.stack?.split(`
`) ?? [],
    _ = _.filter((_) => !!_.match(_)),
    _ = _(_[_]);
  _ && (_ = `${_} ${_.message}`);
  let _ = _.map((_) => {
    let _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
    if (!_) return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await _(_),
    message: [_.message, ..._],
  };
}
async function _(_, _) {
  let { bIncludeMessageInIdentifier: _, cCallsitesToIgnore: _ } = _,
    _ =
      _.stack?.split(`
`) ?? [],
    _ = _[_],
    _ = _.split("/"),
    _ = _[_.length - 1];
  _.indexOf("@") > -1 && (_ = _.split("@")[0] + "@" + _),
    _ && (_ = `${_} ${_.message}`);
  let _ = _.map((_) => {
    let _ = _.match(/(.*@)?(.*):(\d+):(\d+)/);
    if (!_) return _;
    if (_.length === 5) {
      let [_, _, _, _, _] = _,
        _ = parseInt(_),
        _ = parseInt(_);
      if (!isNaN(_) && !isNaN(_)) return [_, _, _, _];
    }
    return _;
  }).filter((_) => !!_);
  return {
    identifier: _,
    identifierHash: await _(_),
    message: [_.message, ..._],
  };
}
var _,
  _ = () => (_ || _(new _()), _),
  _ = (_) => {
    (_ = _),
      _.InstallErrorReportingStore(_),
      _.InstallErrorReportingStore(_),
      _.InstallErrorReportingStore(_),
      _.InstallErrorReportingStore(_);
  };
async function _(_) {
  try {
    return (await _.GenerateSHA(_)).slice(0, 16);
  } catch {
    return "";
  }
}
function _() {
  return 1e3 * 10;
}
export { _, _, _, _, _, _, _, _ };
