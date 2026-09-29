var _ = _(_()),
  _ = _(_()),
  _ = _(_());
function _(_) {
  try {
    if (!_ || typeof _ != `string`) return null;
    let _ = _.split(`.`);
    if (_.length !== 3) return null;
    let [_, _] = _,
      _ = _(_),
      _ = _(_);
    return !_ || !_
      ? null
      : {
          header: JSON.parse(_),
          body: JSON.parse(_),
        };
  } catch (_) {
    return (
      console.error(`Exception while attempting to decode token: "${_}"`), null
    );
  }
}
function _(_) {
  return _ ? _.body.exp : 0;
}
function _(_) {
  return _ ? _.body.nbf || _.body.iat : 0;
}
function _(_) {
  let _ = _(_),
    _ = _(_),
    _ = 900,
    _ = _ - _;
  return _ < 900 * 1.5 && (_ = _ <= 60 ? 0 : 60), _(_) - _ < Date.now() / 1e3;
}
var _ = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_strWebAPIBaseURL;
  m_webApiAccessToken = ``;
  m_bJsonMode = !1;
  m_strSpoofedSteamID = ``;
  m_bJWTToken = !1;
  m_fnRequestNewAccessToken;
  m_refreshAccessTokenPromise;
  m_dtLastExpireCheck = 0;
  constructor(_, _, _ = !1, _) {
    (this.m_strWebAPIBaseURL = _),
      (this.m_webApiAccessToken = _),
      (this.m_bJsonMode = _),
      (this.m_fnRequestNewAccessToken = _),
      (this.m_bJWTToken = _(_) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !0,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !0,
        }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, {
          bSendAuth: !1,
        }),
        SendNotification: this.SendNotification.bind(this, {
          bSendAuth: !1,
        }),
        MakeReady: this.MakeReady.bind(this),
      });
    let _ = _(`steamLoginSpoofSteamID`);
    _ && /[0-9]+/g.test(_) && (this.m_strSpoofedSteamID = _);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new _();
  }
  RTime32ToDate(_) {
    return new Date(_ * 1e3);
  }
  MakeReady() {
    return Promise.resolve({
      result: 1,
      message: `ready`,
    });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetWebAPIAccessToken() {
    return this.m_webApiAccessToken;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  async SendMsgAndAwaitResponse(_, _, _, _, _) {
    let _ = null;
    try {
      if (this.m_bJWTToken && _.bSendAuth) {
        let _ = Date.now() / 1e3;
        if (this.m_refreshAccessTokenPromise)
          await this.m_refreshAccessTokenPromise;
        else if (
          this.m_fnRequestNewAccessToken &&
          _ - this.m_dtLastExpireCheck > 60
        ) {
          this.m_dtLastExpireCheck = _;
          let _ = _(this.m_webApiAccessToken);
          _ &&
            _(_) &&
            ((this.m_refreshAccessTokenPromise =
              this.m_fnRequestNewAccessToken()),
            (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
            (this.m_refreshAccessTokenPromise = void 0));
        }
      }
      let _ = await this.Send(_, _, _, _);
      if (_.status != 200 || !_.data) throw Error(`Request Error`);
      if (
        ((_ = _.Init(_, 147)),
        _.headers &&
          (_.headers[`x-eresult`] &&
            _.Hdr().set_eresult(parseInt(_.headers[`x-eresult`])),
          _.headers[`x-error_message`] &&
            _.Hdr().set_error_message(_.headers[`x-error_message`])),
        this.m_bJsonMode)
      )
        _.SetBodyJSON(_.data.response);
      else {
        let _ = new _(_.data),
          _ = new _.BinaryReader(
            _.GetPacket(),
            _.TellGet(),
            _.GetCountBytesRemaining(),
          );
        _.deserializeBinaryFromReader(_.Body(), _);
      }
    } catch (_) {
      let _ =
          _ &&
          typeof _ == `object` &&
          `response` in _ &&
          _?.response?.status === 401,
        _ = _ ? `Unauthorized` : null;
      (_ = this.CreateFailedMsgProtobuf(_, 3, _)),
        _ &&
          !this.m_refreshAccessTokenPromise &&
          this.m_bJWTToken &&
          _.bSendAuth &&
          this.m_fnRequestNewAccessToken &&
          ((this.m_refreshAccessTokenPromise =
            this.m_fnRequestNewAccessToken()),
          (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
          (this.m_refreshAccessTokenPromise = void 0));
    }
    return _;
  }
  SendNotification(_, _, _, _) {
    return this.Send(_, _, _, _), !0;
  }
  Send(_, _, _, _) {
    let _ = this.CreateWebAPIURL(_);
    if (!_) throw `Couldn't find service name ` + _;
    let _ = _.SerializeBody(),
      _ = _.fromByteArray(_),
      _ = _?.eWebAPIKeyRequirement,
      _ = _?.ePrivilege == 0 && _ == 1,
      _ = {
        responseType: this.m_bJsonMode ? `json` : `arraybuffer`,
        params: {},
        headers: _?.bConstMethod
          ? {}
          : {
              "Content-Type": `multipart/form-data`,
            },
      };
    if (
      (!_.bSendAuth &&
        _ != 1 &&
        console.error(
          `Attempting to invoke service ${_} without auth, but auth is required.`,
        ),
      this.m_webApiAccessToken &&
        _.bSendAuth &&
        !_ &&
        ((_.params.access_token = this.m_webApiAccessToken),
        (_.params.spoof_steamid = this.m_strSpoofedSteamID)),
      _?.bConstMethod)
    )
      return (
        (_.params.origin = self.origin),
        this.m_bJsonMode
          ? (_.params.input_json = JSON.stringify(_.Body().toObject()))
          : (_.params.input_protobuf_encoded = _),
        _.default.get(_, _)
      );
    {
      let _ = new FormData();
      return (
        this.m_bJsonMode
          ? _.append(`input_json`, JSON.stringify(_.Body().toObject()))
          : _.append(`input_protobuf_encoded`, _),
        _.default.post(_, _, _)
      );
    }
  }
  CreateWebAPIURL(_) {
    let _ = _.match(/([^\.]+)\.(.+)#(\d+)/);
    return !_ || _.length != 4
      ? null
      : `${this.m_strWebAPIBaseURL}I${_[1]}Service/${_[2]}/v${_[3]}`;
  }
  CreateFailedMsgProtobuf(_, _, _) {
    let _ = _.Init(_);
    return (
      _.Hdr().set_eresult(2),
      _.Hdr().set_transport_error(_),
      _ && _.Hdr().set_error_message(_),
      _
    );
  }
};
_([_], _.prototype, `SendMsgAndAwaitResponse`, null),
  _([_], _.prototype, `SendNotification`, null),
  _([_], _.prototype, `Send`, null);
export { _ };
