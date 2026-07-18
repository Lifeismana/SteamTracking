var _ = _(_(), 1);
var _ = {};
_(_, {
  k_EPrivacyCookiePreferenceState_AllowAll: () => _,
  k_EPrivacyCookiePreferenceState_Customized: () => _,
  k_EPrivacyCookiePreferenceState_DefaultAllowAll: () => _,
  k_EPrivacyCookiePreferenceState_DefaultRejectAll: () => _,
  k_EPrivacyCookiePreferenceState_RejectAll: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3,
  _ = 4;
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.version || _(_._()),
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
              version: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              preference_state: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              content_customization: {
                _: 3,
                _: _,
              },
              valve_analytics: {
                _: 4,
                _: _,
              },
              third_party_analytics: {
                _: 5,
                _: _,
              },
              third_party_content: {
                _: 6,
                _: _,
              },
              utm_enabled: {
                _: 7,
                _: !0,
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
      return "CAccountPrivacyCookiePreferences";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recentapps || _(_._()),
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
              recentapps: {
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
      return "CAccountPrivacyCookiePreferences_ContentCustomization";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.product_impressions_tracking || _(_._()),
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
              product_impressions_tracking: {
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
      return "CAccountPrivacyCookiePreferences_ValveAnalytics";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.google_analytics || _(_._()),
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
              google_analytics: {
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
      return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.youtube || _(_._()),
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
              youtube: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              vimeo: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              sketchfab: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              twitter: {
                _: 4,
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
      return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
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
      return "CAccountPrivacy_GetCookiePreferences_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferences || _(_._()),
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
              preferences: {
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
      return "CAccountPrivacy_GetCookiePreferences_Response";
    }
  },
  _;
((_) => {
  function _(_, _, _) {
    return _.SendMsg("AccountPrivacy.GetCookiePreferences#1", _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetCookiePreferences = _;
})((_ ||= {}));
function _(_) {
  if (!document.cookie) return;
  let _ = document.cookie.match("(^|; )" + _.name + "=([^;]*)");
  if (_ && _[2]) return decodeURIComponent(_[2]);
}
function _(_, _) {
  if (!document.cookie || !_(_)) return;
  let _ = _.options?.path ?? "/",
    _ = "";
  _.options?.expires
    ? (_ += ";expires=" + _.options.expires.toUTCString())
    : _.options?.maxAge &&
      (_ += ";max-age=" + Math.floor(_.options.maxAge / 1e3)),
    _.options?.secure && (_ += ";secure"),
    (document.cookie =
      encodeURIComponent(_.name) +
      "=" +
      encodeURIComponent(_) +
      _ +
      ";path=" +
      _);
}
function _(_) {
  return _(
    {
      ..._,
      options: {
        ..._.options,
        expires: new Date(0),
      },
    },
    "",
  );
}
function _() {
  return window.SSR?.renderContext?.cookiePrefs;
}
function _(_) {
  if (_.preferenceControls.isTechnicallyNecessary) return !0;
  let _ = _();
  if (!_) return !1;
  switch (_.preference_state) {
    case _.k_EPrivacyCookiePreferenceState_AllowAll:
    case _.k_EPrivacyCookiePreferenceState_DefaultAllowAll:
      return !0;
    case _.k_EPrivacyCookiePreferenceState_RejectAll:
    case _.k_EPrivacyCookiePreferenceState_DefaultRejectAll:
      return !1;
  }
  return (
    "IsAllowed" in _.preferenceControls && _.preferenceControls.IsAllowed(_)
  );
}
var _ = {
  name: "cookieSettings",
  options: {
    secure: !0,
    httpOnly: !1,
    path: "/",
    sameSite: "none",
    maxAge: 1e3 * 3600 * 24 * 365,
  },
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
};
var _ = {
  name: "steamDidLoginRefresh",
  options: {
    secure: !0,
    httpOnly: !0,
    path: "/",
    sameSite: "none",
    maxAge: 5 * 1e3,
  },
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
};
var _ = {
  name: "strResponsiveViewPrefs",
  options: {
    maxAge: 365 * 24 * 60 * 60 * 1e3,
  },
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
};
var _ = {
  name: "shoppingCartGID",
  options: {
    path: "/",
    secure: !0,
    maxAge: 1e3 * 3600 * 24 * 7,
  },
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
};
var _ = {
    name: "steamLoginSpoofSteamID",
    options: {
      path: "/",
      secure: !0,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    name: "browserid",
    options: {
      path: "/",
      secure: !0,
      maxAge: 3600 * 24 * 7 * 365,
      sameSite: "none",
    },
    preferenceControls: {
      isTechnicallyNecessary: !1,
      IsAllowed(_) {
        return _.valve_analytics?.product_impressions_tracking ?? !1;
      },
    },
  },
  _ = {
    name: "clientHints",
    options: {
      path: "/",
      secure: !0,
      httpOnly: !1,
      maxAge: 3600 * 24 * 7 * 365,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  },
  _ = {
    name: "webTradeEligibility",
    options: {
      path: "/",
      secure: !0,
      httpOnly: !0,
      maxAge: 3600 * 24 * 1,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
export { _, _, _, _, _ };
