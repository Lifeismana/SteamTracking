var _ = 15,
  _ = 0;
var _ = _(_());
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              is_allowed: {
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
      return "ParentalApp";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.allowed_time_windows || _(_._()),
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
              allowed_time_windows: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              allowed_daily_minutes: {
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
      return "ParentalPlaytimeDay";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.apply_playtime_restrictions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              apply_playtime_restrictions: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              playtime_days: {
                _: 15,
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
      return "ParentalPlaytimeRestrictions";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.restrictions || _(_._()),
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
              restrictions: {
                _: 1,
                _: _,
              },
              rtime_expires: {
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
      return "ParentalTemporaryPlaytimeRestrictions";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5, 17, 18, 19], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              applist_base_id: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              applist_base_description: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              applist_base: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              applist_custom: {
                _: 5,
                _: _,
                _: !0,
                _: !0,
              },
              passwordhashtype: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              salt: {
                _: 7,
                _: _.readBytes,
                _: _.writeBytes,
              },
              passwordhash: {
                _: 8,
                _: _.readBytes,
                _: _.writeBytes,
              },
              is_enabled: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              enabled_features: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              recovery_email: {
                _: 11,
                _: _.readString,
                _: _.writeString,
              },
              is_site_license_lock: {
                _: 12,
                _: _.readBool,
                _: _.writeBool,
              },
              temporary_enabled_features: {
                _: 13,
                _: _.readUint32,
                _: _.writeUint32,
              },
              rtime_temporary_feature_expiration: {
                _: 14,
                _: _.readUint32,
                _: _.writeUint32,
              },
              playtime_restrictions: {
                _: 15,
                _: _,
              },
              temporary_playtime_restrictions: {
                _: 16,
                _: _,
              },
              excluded_store_content_descriptors: {
                _: 17,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              excluded_community_content_descriptors: {
                _: 18,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              utility_appids: {
                _: 19,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
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
      return "ParentalSettings";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requestid || _(_._()),
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
              requestid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              family_groupid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              steamid: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              features: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              time_requested: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              approved: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              steamid_responder: {
                _: 7,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              time_responded: {
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
      return "ParentalFeatureRequest";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requestid || _(_._()),
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
              requestid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              family_groupid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              steamid: {
                _: 3,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              current_playtime_restrictions: {
                _: 4,
                _: _,
              },
              time_expires: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              time_requested: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              approved: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              steamid_responder: {
                _: 8,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              time_responded: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              restrictions_approved: {
                _: 10,
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
      return "ParentalPlaytimeRequest";
    }
  };
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
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
              password: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              settings: {
                _: 2,
                _: _,
              },
              sessionid: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              enablecode: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              steamid: {
                _: 10,
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
      return "CParental_EnableParentalSettings_Request";
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
      return "CParental_EnableParentalSettings_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
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
              password: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              steamid: {
                _: 10,
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
      return "CParental_DisableParentalSettings_Request";
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
      return "CParental_DisableParentalSettings_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 10,
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
      return "CParental_GetParentalSettings_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.settings || _(_._()),
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
              settings: {
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
      return "CParental_GetParentalSettings_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.priority || _(_._()),
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
              priority: {
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
      return "CParental_GetSignedParentalSettings_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.serialized_settings || _(_._()),
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
              serialized_settings: {
                _: 1,
                _: _.readBytes,
                _: _.writeBytes,
              },
              signature: {
                _: 2,
                _: _.readBytes,
                _: _.writeBytes,
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
      return "CParental_GetSignedParentalSettings_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
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
              password: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              settings: {
                _: 2,
                _: _,
              },
              new_password: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              sessionid: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              steamid: {
                _: 10,
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
      return "CParental_SetParentalSettings_Request";
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
      return "CParental_SetParentalSettings_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.unlock_token || _(_._()),
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
              unlock_token: {
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
      return "CParental_ValidateToken_Request";
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
      return "CParental_ValidateToken_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
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
              password: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              session: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              send_unlock_on_success: {
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
      return "CParental_ValidatePassword_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.token || _(_._()),
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
              token: {
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
      return "CParental_ValidatePassword_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.session || _(_._()),
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
              session: {
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
      return "CParental_LockClient_Request";
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
      return "CParental_LockClient_Response";
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
      return "CParental_RequestRecoveryCode_Request";
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
      return "CParental_RequestRecoveryCode_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.features || _(_._()),
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
              features: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              steamid: {
                _: 10,
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
      return "CParental_RequestFeatureAccess_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requestid || _(_._()),
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
              requestid: {
                _: 1,
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
      return "CParental_RequestFeatureAccess_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.approve || _(_._()),
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
              approve: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              requestid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              features: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              duration: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              steamid: {
                _: 10,
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
      return "CParental_ApproveFeatureAccess_Request";
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
      return "CParental_ApproveFeatureAccess_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.time_expires || _(_._()),
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
              time_expires: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              current_playtime_restrictions: {
                _: 2,
                _: _,
              },
              steamid: {
                _: 10,
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
      return "CParental_RequestPlaytime_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requestid || _(_._()),
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
              requestid: {
                _: 1,
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
      return "CParental_RequestPlaytime_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.approve || _(_._()),
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
              approve: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              requestid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              restrictions_approved: {
                _: 3,
                _: _,
              },
              steamid: {
                _: 10,
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
      return "CParental_ApprovePlaytime_Request";
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
      return "CParental_ApprovePlaytime_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.rt_include_completed_since || _(_._()),
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
              rt_include_completed_since: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              family_groupid: {
                _: 2,
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
      return "CParental_GetRequests_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.feature_requests || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              feature_requests: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              playtime_requests: {
                _: 2,
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
      return "CParental_GetRequests_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.day_of_week || _(_._()),
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
              day_of_week: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              minutes_used: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              steamid: {
                _: 10,
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
      return "CParental_ReportPlaytimeAndNotify_Request";
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
      return "CParental_ReportPlaytimeAndNotify_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.serialized_settings || _(_._()),
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
              serialized_settings: {
                _: 1,
                _: _.readBytes,
                _: _.writeBytes,
              },
              signature: {
                _: 2,
                _: _.readBytes,
                _: _.writeBytes,
              },
              password: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              sessionid: {
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
      return "CParental_ParentalSettingsChange_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.password || _(_._()),
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
              password: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              sessionid: {
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
      return "CParental_ParentalUnlock_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sessionid || _(_._()),
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
              sessionid: {
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
      return "CParental_ParentalLock_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.day_of_week || _(_._()),
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
              day_of_week: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              minutes_used: {
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
      return "CParental_PlaytimeUsed_Notification";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("Parental.EnableParentalSettings#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.EnableParentalSettings = _;
  function _(_, _) {
    return _.SendMsg("Parental.DisableParentalSettings#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.DisableParentalSettings = _;
  function _(_, _) {
    return _.SendMsg("Parental.GetParentalSettings#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetParentalSettings = _;
  function _(_, _) {
    return _.SendMsg("Parental.GetSignedParentalSettings#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetSignedParentalSettings = _;
  function _(_, _) {
    return _.SendMsg("Parental.SetParentalSettings#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.SetParentalSettings = _;
  function _(_, _) {
    return _.SendMsg("Parental.ValidateToken#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ValidateToken = _;
  function _(_, _) {
    return _.SendMsg("Parental.ValidatePassword#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ValidatePassword = _;
  function _(_, _) {
    return _.SendMsg("Parental.LockClient#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.LockClient = _;
  function _(_, _) {
    return _.SendMsg("Parental.RequestRecoveryCode#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RequestRecoveryCode = _;
  function _(_, _) {
    return _.SendMsg("Parental.RequestFeatureAccess#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RequestFeatureAccess = _;
  function _(_, _) {
    return _.SendMsg("Parental.ApproveFeatureAccess#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ApproveFeatureAccess = _;
  function _(_, _) {
    return _.SendMsg("Parental.RequestPlaytime#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RequestPlaytime = _;
  function _(_, _) {
    return _.SendMsg("Parental.ApprovePlaytime#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ApprovePlaytime = _;
  function _(_, _) {
    return _.SendMsg("Parental.GetRequests#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetRequests = _;
  function _(_, _) {
    return _.SendMsg("Parental.ReportPlaytimeAndNotify#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ReportPlaytimeAndNotify = _;
})((_ ||= {}));
var _;
((_) => (
  (_.NotifySettingsChangeHandler = {
    name: "ParentalClient.NotifySettingsChange#1",
    request: _,
  }),
  (_.NotifyUnlockHandler = {
    name: "ParentalClient.NotifyUnlock#1",
    request: _,
  }),
  (_.NotifyLockHandler = {
    name: "ParentalClient.NotifyLock#1",
    request: _,
  }),
  (_.NotifyPlaytimeUsedHandler = {
    name: "ParentalClient.NotifyPlaytimeUsed#1",
    request: _,
  })
))((_ ||= {}));
var _ = _(_());
function _(_) {
  return ["parentalsettings", _];
}
function _(_) {
  let _ = _.applist_base.concat(_.applist_custom);
  return new Map(_.map((_) => [_.appid, _.is_allowed]));
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_steamid(_);
  let _ = await _.GetParentalSettings(_, _);
  if (_.GetEResult() != 1)
    throw new Error(`Error from GetParentalSettings: ${_.GetEResult()}`);
  let _ = _.Body().settings().toObject();
  if (!_.playtime_restrictions) {
    let _ = {
      apply_playtime_restrictions: !1,
      playtime_days: Array(7).fill({
        allowed_time_windows: BigInt(0xffffffffffff).toString(),
        allowed_daily_minutes: 1440,
      }),
    };
    _.playtime_restrictions = _;
  }
  let _ = _(_);
  return {
    settings: _,
    mapAppsAllowed: _,
  };
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: () => _(_, _),
    placeholderData: {
      settings: void 0,
      mapAppsAllowed: void 0,
    },
    ..._,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return ["validateparentaltoken", _, _];
}
function _() {
  let _ = _("clientsessionid"),
    _ = _("sessionid");
  return _ || _;
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _("steamparental"),
    _ = _(),
    _ = _,
    _ = _?.split("||") || [];
  _.length == 2 && (_ = _[1]);
  let _ = _ && _ !== "0" ? _ + "||" + _ : void 0,
    _ = _({
      queryKey: _(_, _),
      queryFn: async () => {
        if (!_) return 15;
        let _ = _.Init(_);
        return (
          _.Body().set_unlock_token(_),
          (await _.ValidateToken(_, _)).GetEResult()
        );
      },
    });
  return !_.isSuccess || _.data !== 1;
}
function _(_, _, _) {
  if (_ == _ || _ == null) return !1;
  if (!_) return !0;
  if (!_.is_enabled || !_) return !1;
  if (_ == _) return !0;
  let _ = _.enabled_features;
  return _ ? (_ & (1 << _)) == 0 : !0;
}
function _(_) {
  let _ = _(),
    { settings: _ } = _(_).data ?? {},
    _ = _();
  return _(_, _, _);
}
var _ = _(_(), 1);
var _ = class _ extends _.Message {
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
                _: _.readString,
                _: _.writeString,
              },
              value: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              color: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              label: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              name: {
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
      return "CEconItem_DescriptionLine";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.link || _(_._()),
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
              link: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              name: {
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
      return "CEconItem_Action";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              category: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              internal_name: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              localized_category_name: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              localized_tag_name: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              color: {
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
      return "CEconItem_Tag";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.contained_items || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              contained_items: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              search_tags: {
                _: 2,
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
      return "CEconItem_ContainerProperties";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.classid || _(_._()),
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
              classid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              instanceid: {
                _: 2,
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
      return "CEconItem_ClassIdentifiers";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
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
                _: _.readInt32,
                _: _.writeInt32,
              },
              classid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              instanceid: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              currency: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              background_color: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              icon_url: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              icon_url_large: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              descriptions: {
                _: 8,
                _: _,
                _: !0,
                _: !0,
              },
              tradable: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
              actions: {
                _: 10,
                _: _,
                _: !0,
                _: !0,
              },
              owner_descriptions: {
                _: 11,
                _: _,
                _: !0,
                _: !0,
              },
              owner_actions: {
                _: 12,
                _: _,
                _: !0,
                _: !0,
              },
              fraudwarnings: {
                _: 13,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              name: {
                _: 14,
                _: _.readString,
                _: _.writeString,
              },
              name_color: {
                _: 15,
                _: _.readString,
                _: _.writeString,
              },
              type: {
                _: 16,
                _: _.readString,
                _: _.writeString,
              },
              market_name: {
                _: 17,
                _: _.readString,
                _: _.writeString,
              },
              market_hash_name: {
                _: 18,
                _: _.readString,
                _: _.writeString,
              },
              market_fee: {
                _: 19,
                _: _.readString,
                _: _.writeString,
              },
              market_fee_app: {
                _: 28,
                _: _.readInt32,
                _: _.writeInt32,
              },
              contained_item: {
                _: 20,
                _: _,
              },
              market_actions: {
                _: 21,
                _: _,
                _: !0,
                _: !0,
              },
              commodity: {
                _: 22,
                _: _.readBool,
                _: _.writeBool,
              },
              market_tradable_restriction: {
                _: 23,
                _: _.readInt32,
                _: _.writeInt32,
              },
              market_marketable_restriction: {
                _: 24,
                _: _.readInt32,
                _: _.writeInt32,
              },
              marketable: {
                _: 25,
                _: _.readBool,
                _: _.writeBool,
              },
              tags: {
                _: 26,
                _: _,
                _: !0,
                _: !0,
              },
              item_expiration: {
                _: 27,
                _: _.readString,
                _: _.writeString,
              },
              market_buy_country_restriction: {
                _: 30,
                _: _.readString,
                _: _.writeString,
              },
              market_sell_country_restriction: {
                _: 31,
                _: _.readString,
                _: _.writeString,
              },
              sealed: {
                _: 32,
                _: _.readBool,
                _: _.writeBool,
              },
              container_properties: {
                _: 33,
                _: _,
              },
              market_bucket_group_name: {
                _: 34,
                _: _.readString,
                _: _.writeString,
              },
              market_bucket_group_id: {
                _: 35,
                _: _.readString,
                _: _.writeString,
              },
              sealed_type: {
                _: 37,
                _: _.readUint32,
                _: _.writeUint32,
              },
              market_name_inside_group: {
                _: 38,
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
      return "CEconItem_Description";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.propertyid || _(_._()),
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
              propertyid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              int_value: {
                _: 2,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              float_value: {
                _: 3,
                _: _.readFloat,
                _: _.writeFloat,
              },
              string_value: {
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
      return "CEconItem_AssetProperty";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.classid || _(_._()),
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
              classid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              instanceid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              standalone_properties: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              parent_relationship_properties: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              nested_accessories: {
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
      return "CEconItem_AssetAccessory";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null);
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
              contextid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              assetid: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              asset_properties: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              asset_accessories: {
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
      return "CEconItem_AssetProperties";
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
                _: _.readUint32,
                _: _.writeUint32,
              },
              name: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              float_min: {
                _: 4,
                _: _.readFloat,
                _: _.writeFloat,
              },
              float_max: {
                _: 5,
                _: _.readFloat,
                _: _.writeFloat,
              },
              int_min: {
                _: 6,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              int_max: {
                _: 7,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              localized_label: {
                _: 8,
                _: _.readString,
                _: _.writeString,
              },
              hide_from_description: {
                _: 9,
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
      return "CEconItem_AssetPropertySchema";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              language: {
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
      return "CEcon_GetAssetPropertySchema_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.property_schemas || _(_._()),
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
              property_schemas: {
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
      return "CEcon_GetAssetPropertySchema_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              contextid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              assetid: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              classid: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              instanceid: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              currencyid: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              amount: {
                _: 7,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              missing: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              est_usd: {
                _: 9,
                _: _.readInt64String,
                _: _.writeInt64String,
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
      return "CEcon_Asset";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              contextid: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              get_descriptions: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              get_asset_properties: {
                _: 11,
                _: _.readBool,
                _: _.writeBool,
              },
              for_trade_offer_verification: {
                _: 10,
                _: _.readBool,
                _: _.writeBool,
              },
              language: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              filters: {
                _: 6,
                _: _,
              },
              start_assetid: {
                _: 8,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              count: {
                _: 9,
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
      return "CEcon_GetInventoryItemsWithDescriptions_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.assetids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              assetids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readUint64String,
                pbr: _.readPackedUint64String,
                _: _.writeRepeatedUint64String,
              },
              currencyids: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              tradable_only: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              marketable_only: {
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
      return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.assets || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              assets: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              descriptions: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              missing_assets: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              asset_properties: {
                _: 7,
                _: _,
                _: !0,
                _: !0,
              },
              more_items: {
                _: 4,
                _: _.readBool,
                _: _.writeBool,
              },
              last_assetid: {
                _: 5,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              total_inventory_count: {
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
      return "CEcon_GetInventoryItemsWithDescriptions_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.generate_new_token || _(_._()),
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
              generate_new_token: {
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
      return "CEcon_GetTradeOfferAccessToken_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.trade_offer_access_token || _(_._()),
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
              trade_offer_access_token: {
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
      return "CEcon_GetTradeOfferAccessToken_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.return_url || _(_._()),
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
              return_url: {
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
      return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.url || _(_._()),
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
              url: {
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
      return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              language: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              classes: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              high_pri: {
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
      return "CEcon_GetAssetClassInfo_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.descriptions || _(_._()),
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
              descriptions: {
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
      return "CEcon_GetAssetClassInfo_Response";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("Econ.GetInventoryItemsWithDescriptions#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  _.GetInventoryItemsWithDescriptions = _;
  function _(_, _) {
    return _.SendMsg("Econ.GetTradeOfferAccessToken#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetTradeOfferAccessToken = _;
  function _(_, _) {
    return _.SendMsg("Econ.ClientGetItemShopOverlayAuthURL#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.ClientGetItemShopOverlayAuthURL = _;
  function _(_, _) {
    return _.SendMsg("Econ.GetAssetClassInfo#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetAssetClassInfo = _;
  function _(_, _) {
    return _.SendMsg("Econ.GetAssetPropertySchema#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetAssetPropertySchema = _;
})((_ ||= {}));
var _ = _(_()),
  _ = _(_());
var _ = _.default.createContext({
  staleTimeMs: 1 / 0,
});
var _ = (0, _.createContext)({
  errorMessage: null,
  setErrorMessage: (_) => {},
});
var _ = {
  8: "#FamilyManagement_ErrorInternalServerError",
  2: "#FamilyManagement_ErrorInternalServerError",
  10: "#FamilyManagement_ErrorInternalServerError",
  37: "#FamilyManagement_ErrorInternalServerError",
  15: "#FamilyManagement_AccessDenied",
  42: "#FamilyManagement_ErrorNoMatch",
  43: "#FamilyManagement_ErrorAccountDisabled",
  11: "#FamilyManagement_ErrorNoActiveInvite",
  45: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
  129: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
  25: "#FamilyManagement_ErrorLimitExceeded",
  96: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
  112: "#FamilyManagement_LimitedAccount_CreateFamily",
  84: {
    5: "#FamilyManagement_RateLimitExceeded_CreateFamily",
  },
  83: {
    5: "#FamilyManagement_RegionLocked_CreateFamily",
    2: "#FamilyManagement_RegionLocked_JoinFamily",
  },
  31: {
    2: "#FamilyManagement_Household_JoinFamily",
  },
  95: {
    5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
    2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
    8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
  },
  29: {
    2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
    4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
    8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
  },
  40: {
    4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
  },
};
function _(_, _) {
  return `${_.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
}
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.data || _(_._()),
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
              data: {
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
      return "AdditionalSubjectData";
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
                _: _.readString,
                _: _.writeString,
              },
              value: {
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
      return "AdditionalSubjectData_DataEntry";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.report_reason || _(_._()),
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
              report_reason: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              report_text: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              owner_steamid: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              language: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              subject_type: {
                _: 5,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 6,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 7,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              additional_subject_data: {
                _: 8,
                _: _,
              },
              detected_by_automation: {
                _: 9,
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
      return "CContentModeration_CreateContentReport_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.report_id || _(_._()),
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
              report_id: {
                _: 1,
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
      return "CContentModeration_CreateContentReport_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              start: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              count: {
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
      return "CContentModeration_GetReportsSubmittedByUser_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.report_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, [23, 24], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              report_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              reporter_steamid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              time_reported: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              report_reason: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              report_text: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              subject_type: {
                _: 6,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 7,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 8,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              resolved: {
                _: 9,
                _: _.readEnum,
                _: _.writeEnum,
              },
              time_resolved: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              resolver_steamid: {
                _: 11,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              time_notified: {
                _: 12,
                _: _.readUint32,
                _: _.writeUint32,
              },
              additional_subject_data: {
                _: 13,
                _: _,
              },
              time_disputed: {
                _: 14,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dispute_details: {
                _: 15,
                _: _.readString,
                _: _.writeString,
              },
              dispute_resolver_steamid: {
                _: 16,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              dispute_resolved: {
                _: 17,
                _: _.readEnum,
                _: _.writeEnum,
              },
              time_dispute_resolved: {
                _: 18,
                _: _.readUint32,
                _: _.writeUint32,
              },
              detected_by_automation: {
                _: 19,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
              resolved_by_automation: {
                _: 20,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
              },
              content_moderated_reason: {
                _: 21,
                _: _.readEnum,
                _: _.writeEnum,
              },
              dispute_resolved_reason: {
                _: 22,
                _: _.readEnum,
                _: _.writeEnum,
              },
              sanctions_applied: {
                _: 23,
                _: _,
                _: !0,
                _: !0,
              },
              sanctions_applied_on_dispute: {
                _: 24,
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
      return "ContentReport";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_report || _(_._()),
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
              content_report: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              total_count: {
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
      return "CContentModeration_GetReportsSubmittedByUser_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_type: {
                _: 2,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 4,
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
      return "CContentModeration_GetOneReportSubmittedByUser_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.content_report || _(_._()),
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
              content_report: {
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
      return "CContentModeration_GetOneReportSubmittedByUser_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
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
      return "CContentModeration_GetReportedSubjectsByOwner_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [13, 31, 32], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              owner_steam_id: {
                _: 4,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              language: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              resolved: {
                _: 6,
                _: _.readEnum,
                _: _.writeEnum,
              },
              time_resolved: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              unresolved_report_count: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              oldest_unresolved_report_time: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              resolver_steamid: {
                _: 10,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              assigned_moderator_steamid: {
                _: 11,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              time_claimed_by_moderator: {
                _: 12,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              reports: {
                _: 13,
                _: _,
                _: !0,
                _: !0,
              },
              additional_subject_data: {
                _: 14,
                _: _,
              },
              csam_status: {
                _: 15,
                _: _.readEnum,
                _: _.writeEnum,
              },
              terrorism_status: {
                _: 16,
                _: _.readEnum,
                _: _.writeEnum,
              },
              content_moderated_reason: {
                _: 17,
                _: _.readEnum,
                _: _.writeEnum,
              },
              unresolved_dispute_count: {
                _: 18,
                _: _.readUint32,
                _: _.writeUint32,
              },
              oldest_unresolved_dispute_time: {
                _: 19,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dispute_resolved_time: {
                _: 20,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dispute_resolver_steamid: {
                _: 21,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              dispute_resolved: {
                _: 22,
                _: _.readUint32,
                _: _.writeUint32,
              },
              dispute_resolved_reason: {
                _: 23,
                _: _.readUint32,
                _: _.writeUint32,
              },
              owner_dispute_time: {
                _: 24,
                _: _.readUint32,
                _: _.writeUint32,
              },
              owner_dispute_resolved_time: {
                _: 25,
                _: _.readUint32,
                _: _.writeUint32,
              },
              owner_dispute_details: {
                _: 26,
                _: _.readString,
                _: _.writeString,
              },
              required_moderator_level: {
                _: 27,
                _: _.readEnum,
                _: _.writeEnum,
              },
              resolved_by_automation: {
                _: 28,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
              },
              detected_by_automation: {
                _: 29,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
              credible_threat_of_violence_status: {
                _: 30,
                _: _.readEnum,
                _: _.writeEnum,
              },
              sanctions_applied: {
                _: 31,
                _: _,
                _: !0,
                _: !0,
              },
              sanctions_applied_after_dispute: {
                _: 32,
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
      return "ContentReportSubject";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject || _(_._()),
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
              subject: {
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
      return "CContentModeration_GetReportedSubjectsByOwner_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.accepted_subject_types || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              accepted_subject_types: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              support_company: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              accepted_languages: {
                _: 3,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              moderator_level: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              disputed: {
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
      return "CContentModeration_ClaimBatchForModeration_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.selected_subject_type || _(_._()),
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
              selected_subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject: {
                _: 2,
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
      return "CContentModeration_ClaimBatchForModeration_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
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
      return "CContentModeration_ReleaseClaimed_Request";
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
      return "CContentModeration_ReleaseClaimed_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
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
      return "CContentModeration_GetClaimed_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject || _(_._()),
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
              subject: {
                _: 2,
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
      return "CContentModeration_GetClaimed_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sanction || _(_._()),
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
              sanction: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              days: {
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
      return "ContentReportSubjectSanction";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              resolution: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              reason: {
                _: 5,
                _: _.readEnum,
                _: _.writeEnum,
              },
              note: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              resolved_by_automation: {
                _: 7,
                _: _.readEnum,
                _: _.writeEnum,
              },
              skip_lock: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              sanctions_applied: {
                _: 9,
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
      return "CContentModeration_ResolveSubject_Request";
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
      return "CContentModeration_ResolveSubject_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.report_id || _(_._()),
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
              report_id: {
                _: 1,
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
      return "CContentModeration_CancelContentReport_Request";
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
      return "CContentModeration_CancelContentReport_Response";
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
      return "CContentModeration_GetSubjectOverview_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.buckets || _(_._()),
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
              buckets: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              pending_for_any_moderator: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              pending_for_supervisor: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              pending_for_valve: {
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
      return "CContentModeration_GetSubjectOverview_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              unresolved_count: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              oldest_unresolved: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              unclaimed_count: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              oldest_disputed: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              disputed_count: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              unclaimed_disputed_count: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              pending_for_any_moderator: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              pending_for_supervisor: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              pending_for_valve: {
                _: 10,
                _: _.readUint32,
                _: _.writeUint32,
              },
              oldest_unresolved_for_any_moderator: {
                _: 11,
                _: _.readUint32,
                _: _.writeUint32,
              },
              oldest_unresolved_for_supervisor: {
                _: 12,
                _: _.readUint32,
                _: _.writeUint32,
              },
              oldest_unresolved_for_valve: {
                _: 13,
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
      return "CContentModeration_GetSubjectOverview_Response_Bucket";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              resolution: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              reason: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              note: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              resolved_by_automation: {
                _: 6,
                _: _.readEnum,
                _: _.writeEnum,
              },
              sanctions_applied: {
                _: 9,
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
      return "CContentModeration_ResolveSubjectGroup_Request";
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
      return "CContentModeration_ResolveSubjectGroup_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              required_level: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              reason: {
                _: 5,
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
      return "CContentModeration_EscalateSubject_Request";
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
      return "CContentModeration_EscalateSubject_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              csam_status: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              terrorism_status: {
                _: 5,
                _: _.readEnum,
                _: _.writeEnum,
              },
              credible_threat_of_violence_status: {
                _: 6,
                _: _.readEnum,
                _: _.writeEnum,
              },
              additional_subject_data: {
                _: 7,
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
      return "CContentModeration_UpdateSubject_Request";
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
      return "CContentModeration_UpdateSubject_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.report_id || _(_._()),
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
              report_id: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              details: {
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
      return "CContentModeration_DisputeModerationForReport_Request";
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
      return "CContentModeration_DisputeModerationForReport_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              details: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              steamid: {
                _: 5,
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
      return "CContentModeration_DisputeModerationForSubject_Request";
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
      return "CContentModeration_DisputeModerationForSubject_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              updated_resolution: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              updated_reason: {
                _: 5,
                _: _.readEnum,
                _: _.writeEnum,
              },
              updated_sanctions: {
                _: 6,
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
      return "CContentModeration_ResolveDisputedSubject_Request";
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
      return "CContentModeration_ResolveDisputedSubject_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
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
      return "CContentModeration_GetContentReportSubject_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject || _(_._()),
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
              subject: {
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
      return "CContentModeration_GetContentReportSubject_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
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
      return "CContentModeration_GetContentReportSubjectGroup_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subjects || _(_._()),
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
              subjects: {
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
      return "CContentModeration_GetContentReportSubjectGroup_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              action: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              automated_action: {
                _: 5,
                _: _.readBool,
                _: _.writeBool,
              },
              additional_json_data: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              actor_steamid: {
                _: 7,
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
      return "CContentModeration_WriteToAuditLog_Request";
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
      return "CContentModeration_WriteToAuditLog_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
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
      return "CContentModeration_GetAuditLog_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.entries || _(_._()),
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
              entries: {
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
      return "CContentModeration_GetAuditLog_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.timestamp || _(_._()),
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
              timestamp: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              actor_steamid: {
                _: 2,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              automated_action: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              action: {
                _: 4,
                _: _.readEnum,
                _: _.writeEnum,
              },
              additional_json_data: {
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
      return "CContentModeration_GetAuditLog_Response_AuditLogEntry";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
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
      return "CContentModeration_ReleaseSubject_Request";
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
      return "CContentModeration_ReleaseSubject_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
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
      return "CContentModeration_ClaimSubject_Request";
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
      return "CContentModeration_ClaimSubject_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
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
      return "CContentModeration_GetModeratorPreferences_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferred_level || _(_._()),
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
              preferred_level: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              enabled_subject_types: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
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
      return "CContentModeration_GetModeratorPreferences_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.preferred_level || _(_._()),
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
              preferred_level: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              enabled_subject_types: {
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
      return "CContentModeration_SetModeratorPreferences_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_types || _(_._()),
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
              subject_types: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
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
      return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
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
      return "CContentModeration_SetModeratorPreferences_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
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
              steamid: {
                _: 1,
                _: _.readFixed64String,
                _: _.writeFixed64String,
              },
              rt_start: {
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
      return "CContentModeration_GetModeratorActivity_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.activities || _(_._()),
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
              activities: {
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
      return "CContentModeration_GetModeratorActivity_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.subject_type || _(_._()),
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
              subject_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              subject_group_id: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              subject_id: {
                _: 3,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              timestamp: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              action: {
                _: 5,
                _: _.readEnum,
                _: _.writeEnum,
              },
              json_data: {
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
      return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("ContentModeration.CreateContentReport#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.CreateContentReport = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.CancelContentReport#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.CancelContentReport = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.GetReportsSubmittedByUser#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetReportsSubmittedByUser = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.GetOneReportSubmittedByUser#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetOneReportSubmittedByUser = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.GetReportedSubjectsByOwner#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetReportedSubjectsByOwner = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.ClaimBatchForModeration#1",
      _(_, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.ClaimBatchForModeration = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.ReleaseClaimed#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.ReleaseClaimed = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.GetClaimed#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  _.GetClaimed = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.ResolveSubject#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.ResolveSubject = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.ResolveSubjectGroup#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.ResolveSubjectGroup = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.GetSubjectOverview#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.GetSubjectOverview = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.EscalateSubject#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.EscalateSubject = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.UpdateSubject#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.UpdateSubject = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.DisputeModerationForReport#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.DisputeModerationForReport = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.DisputeModerationForSubject#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.DisputeModerationForSubject = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.ResolveDisputedSubject#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.ResolveDisputedSubject = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.GetContentReportSubject#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.GetContentReportSubject = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.GetContentReportSubjectGroup#1",
      _(_, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.GetContentReportSubjectGroup = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.WriteToAuditLog#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.WriteToAuditLog = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.GetAuditLog#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.GetAuditLog = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.ReleaseSubject#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.ReleaseSubject = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.ClaimSubject#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.ClaimSubject = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.GetModeratorPreferences#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 5,
      },
    );
  }
  _.GetModeratorPreferences = _;
  function _(_, _) {
    return _.SendMsg(
      "ContentModeration.SetModeratorPreferences#1",
      _(_, _),
      _,
      {
        ePrivilege: 5,
      },
    );
  }
  _.SetModeratorPreferences = _;
  function _(_, _) {
    return _.SendMsg("ContentModeration.GetModeratorActivity#1", _(_, _), _, {
      ePrivilege: 5,
    });
  }
  _.GetModeratorActivity = _;
})((_ ||= {}));
var _ = {
  11: {
    displayNameLoc: "#SteamNotification_HelpRequest_Author",
    titleLoc: "#SteamNotification_HelpRequest_Title",
    bodyLoc: (_) => ({
      locString: "#SteamNotification_HelpRequest_Body",
      params: [_.ticket],
    }),
    link: (_) => _.HELP_BASE_URL + "wizard/HelpRequest/" + _.ticket,
  },
  6: {
    displayNameLoc: "#SteamNotifications_MajorSale",
    titleLoc: (_) => ({
      locString: _.title,
    }),
    bodyLoc: (_) =>
      _() && _.link.includes("https://store.steampowered.com")
        ? "#SteamNotifications_MajorSale_SteamChina_Title"
        : _.body,
    image: (_) => _.image,
    link: (_) =>
      _() && _.link.includes("https://store.steampowered.com")
        ? _.link.replace("https://store.steampowered.com", _.STORE_BASE_URL)
        : _.link,
  },
  10: {
    displayNameLoc: (_) => _.display_name,
    titleLoc: (_) => _.title,
    bodyLoc: (_) => _.body,
    image: (_) => _.image,
    link: (_) => _.link,
  },
  14: {
    titleLoc: "#SteamNotification_ModeratorMessage_Title",
    link: (_) => _.COMMUNITY_BASE_URL + "my/moderatormessages/" + _.msgid,
  },
  28: {
    displayNameLoc: (_) =>
      _.is_limited_launch
        ? "#Notification_LimitedLaunchInviteTitle"
        : "#Notification_PlaytestInviteTitle",
    titleLoc: (_) =>
      _.is_limited_launch
        ? "#Notification_LimitedLaunchInviteBody"
        : "#Notification_PlaytestInviteBody",
    image: (_) => _.appid,
    link: (_) => _.STORE_BASE_URL + "account/gatedaccess?appid=" + _.appid,
  },
  30: {
    titleLoc: (_) => {
      switch (_.status) {
        case 1:
          return "#Notification_ReportedContentAction_Received";
        case 2:
          return "#Notification_ReportedContentAction_Sanctioned";
        case 3:
          return "#Notification_ReportedContentAction_Acquitted";
        case 4:
          return "#Notification_ReportedContentAction_DisputeReceived";
        case 5:
          return "#Notification_ReportedContentAction_DisputeSanctioned";
        case 6:
          return "#Notification_ReportedContentAction_DisputeAcquitted";
        default:
          return "#Notification_ReportedContentAction_Unknown";
      }
    },
    link: (_) =>
      `${_.COMMUNITY_BASE_URL}my/reportedcontent/${_.subject_type}-${_.subject_group_id}-${_.subject_id}`,
  },
};
function _(_) {
  if (_ !== void 0) return _[_];
}
function _(_) {
  return !!_(_);
}
var _ = {
  16: {
    steamidAttribute: "inviter",
    titleLoc: "#SteamNotifications_FamilyInviteTitle",
    bodyLoc: "#SteamNotifications_FamilyInviteBody",
    url: (_) =>
      `${_.STORE_BASE_URL}account/familymanagement/join?invitation=${_.familyid}`,
  },
  15: {
    steamidAttribute: "steamid",
    titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
    bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: "requestor_steamid",
    titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
    bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
    url: (_) => _(_.familyid, _.request_id),
  },
  19: {
    steamidAttribute: "responder_steamid",
    titleLoc: (_) =>
      _.action == 1
        ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
        : "",
    bodyLoc: (_) =>
      _.action == 1
        ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
        : "",
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: "steamid",
    titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
    bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  20: {
    steamidAttribute: "steamid_approver",
    titleLoc: (_) =>
      _.approved
        ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
        : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
    bodyLoc: (_) =>
      _.approved
        ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
        : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  21: {
    steamidAttribute: "steamid_approver",
    titleLoc: (_) =>
      _.approved
        ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
        : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
    bodyLoc: (_) =>
      _.approved
        ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
        : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
    url: () => `${_.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function _(_) {
  if (_ !== void 0) return _[_];
}
function _(_) {
  return !!_(_);
}
var _ = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function _(_) {
  return _.findIndex((_) => _ == _) != null;
}
function _(_) {
  return _.hidden ? !1 : _(_.notification_type) && _(_.body_data);
}
function _(_) {
  return _(_) || _(_) || _(_);
}
var _ = 3600 * 48,
  _ = 600,
  _ = !1,
  _ = new _("SteamNotificationStore"),
  _ = _.Debug,
  _ = _.Error,
  _ = _.Warning,
  _ = class {
    constructor() {
      _(this);
    }
    m_rgNotificationRollups = [];
    m_summary = _();
    m_bLoaded = !1;
    m_nUnviewed = 0;
    m_rgNotifyServerRead = [];
    m_rgNotifyServerHidden = [];
    m_keyNotifyServerRead = "";
    m_keyNotifyServerHidden = "";
    m_steamid;
    m_transport;
    m_rgUnreadNotificationIDs = [];
    m_rgNewRollupIDs = new Map();
    m_rgTestNotifications = [];
    m_currentNotificationsData = null;
    m_strRemoteClientID = "";
    m_eTargetClientType = 0;
    m_fnOnNotificationCallback = null;
    BHasNotificationsData() {
      return this.m_currentNotificationsData != null;
    }
    setTransport(_) {
      this.m_transport = _;
    }
    RegisterOnNotificationCallback(_) {
      this.m_fnOnNotificationCallback = _;
    }
    SetClientFilters(_, _ = 0) {
      (this.m_strRemoteClientID = _), (this.m_eTargetClientType = _);
    }
    NotifyServerNotificationsRead(_) {
      this.m_rgNotifyServerRead.push(..._), this.UpdateServer();
    }
    NotifyServerNotificationsHidden(_) {
      this.m_rgNotifyServerHidden.push(..._), this.UpdateServer();
    }
    BSendToCallbackAsNew(_) {
      return (
        !_.read &&
        !_(_) &&
        !this.m_rgUnreadNotificationIDs.includes(_.notification_id)
      );
    }
    Dev_AddTestNotification(_) {}
    Dev_UpdateTestNotificationReadState(_, _) {
      let _ = this.m_rgTestNotifications.findIndex(
        (_) => _.notification_id == _,
      );
      return _ !== -1 && this.m_rgTestNotifications[_].read != _
        ? ((this.m_rgTestNotifications[_].read = _), !0)
        : !1;
    }
    UpdateServer() {
      if (this.m_rgNotifyServerRead.length > 0) {
        let _ = _.Init(_);
        _.Body().set_notification_ids(this.m_rgNotifyServerRead),
          _.MarkNotificationsRead(this.m_transport, _) &&
            (this.m_rgNotifyServerRead = []);
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let _ = _.Init(_);
        _.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          _.HideNotification(this.m_transport, _) &&
            (this.m_rgNotifyServerHidden = []);
      }
    }
    MarkItemRead(_, _ = !1) {
      let _ = this.m_rgNotificationRollups.findIndex(
        (_) => _.item.notification_id == _,
      );
      if (_ === -1) {
        _
          ? this.NotifyServerNotificationsRead([_])
          : _(
              "Attempted to mark notification read that is not in the notification store",
            );
        return;
      }
      let _ = this.m_rgNotificationRollups[_];
      if (_.item.read) {
        _("Attempted to mark notification read that is already read");
        return;
      }
      if (((_.item.read = !0), _.rgunread?.length > 0)) {
        this.ReduceNewTotals(_.type, _.rgunread.length);
        let _ = [];
        _.rgunread.forEach((_) => {
          _.push(_);
        }),
          _.rgread.push(..._.rgunread),
          (_.rgunread = []),
          this.NotifyServerNotificationsRead(_);
      }
    }
    MarkItemHidden(_) {
      let _ = this.m_rgNotificationRollups.findIndex(
        (_) => _.item.notification_id == _,
      );
      if (_ === -1) {
        _(
          "Attempted to mark notification hidden that is not in the notification store",
        );
        return;
      }
      let _ = this.m_rgNotificationRollups[_];
      (_.item.hidden = !0),
        _.rgunread?.length > 0 &&
          this.ReduceNewTotals(_.type, _.rgunread?.length),
        this.NotifyServerNotificationsHidden([..._.rgunread, ..._.rgread]);
    }
    ReduceNewTotals(_, _) {
      _(this.m_summary, _, -_);
    }
    MarkAllItemsViewed() {
      let _ = _.Init(_);
      _.Body().set_remote_client_id(this.m_strRemoteClientID),
        _.Body().set_target_client_type(this.m_eTargetClientType),
        _.MarkNotificationsViewed(this.m_transport, _),
        (this.m_nUnviewed = 0);
    }
    MarkAllItemsRead(_) {
      let _ = [],
        _ = [],
        _ = 0,
        _ = _ ?? this.m_rgNotificationRollups;
      return (
        _.forEach((_, _) => {
          _.rgunread.length > 0 &&
            (_.rgunread.forEach((_) => {
              _.push(_);
            }),
            _.push(_));
        }),
        _.length > 0 &&
          ((this.m_summary = Object.assign(_(), {
            pending_gifts: this.m_summary.pending_gifts,
            pending_invites: this.m_summary.pending_invites,
            pending_family_invites: this.m_summary.pending_family_invites,
          })),
          _.forEach((_) => {
            let _ = _[_];
            (_.item.read = !0), (_.rgunread = []);
          }),
          this.NotifyServerNotificationsRead(_)),
        _.length + _
      );
    }
    ApplyNotificationsUpdate(_) {
      if (
        (_("ApplyNotificationsUpdate", _),
        !_ ||
          (!_.notifications?.length &&
            _.pending_friend_count === void 0 &&
            _.pending_gift_count === void 0))
      ) {
        _("Error: ApplyNotificationsUpdate was called with no data");
        return;
      }
      if (!this.m_currentNotificationsData) {
        _(
          "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
        );
        return;
      }
      let _ = this.m_currentNotificationsData;
      _.notifications?.forEach((_) => {
        let _ = _.notifications.findIndex(
          (_) => _.notification_id == _.notification_id,
        );
        _ != -1
          ? Object.assign(_.notifications[_], _)
          : _.notifications.push(_);
      }),
        _.pending_friend_count !== void 0 &&
          (this.m_currentNotificationsData.pending_friend_count =
            _.pending_friend_count),
        _.pending_gift_count !== void 0 &&
          (this.m_currentNotificationsData.pending_gift_count =
            _.pending_gift_count),
        _.pending_family_invite_count !== void 0 &&
          (this.m_currentNotificationsData.pending_family_invite_count =
            _.pending_family_invite_count),
        this.ProcessNotifications();
    }
    ProcessNewNotificationPayload(_) {
      (this.m_currentNotificationsData = JSON.parse(JSON.stringify(_))),
        this.ProcessNotifications();
    }
    ProcessNotifications() {
      let _ = [],
        _ = _(),
        _ = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((_) => {
          this.BExcludeClientTargetedNotification(_) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (_) => _ == _.notification_id,
              ) !== -1 &&
              (_.hidden = !0),
            _(_) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (_) => _ == _.notification_id,
                ) !== -1 &&
                (_.read = !0),
              _.read || _(_, _.notification_type, 1),
              _.viewed || _++,
              this.AddNotificationToRollups(_, _)));
        }),
        _.sort((_, _) => _.timestamp - _.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let _ of _)
          if (_.bSendToCallbackAsNew)
            this.m_rgNewRollupIDs.set(
              _.rollup_key,
              JSON.parse(JSON.stringify(_)),
            ),
              this.m_fnOnNotificationCallback(_, 0);
          else if (this.m_rgNewRollupIDs.has(_.rollup_key)) {
            let _ = this.m_rgNewRollupIDs.get(_.rollup_key);
            (_.item.read != _.item.read || _.item.viewed != _.item.viewed) &&
              (this.m_rgNewRollupIDs.set(
                _.rollup_key,
                JSON.parse(JSON.stringify(_)),
              ),
              this.m_fnOnNotificationCallback(_, 1));
          }
        for (let [_, _] of this.m_rgNewRollupIDs)
          _.findIndex((_) => _.rollup_key == _) == -1 &&
            (this.m_fnOnNotificationCallback(_, 2),
            this.m_rgNewRollupIDs.delete(_));
      }
      _.reverse(),
        (_.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (_.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (_.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = _.slice()),
        (this.m_summary = _),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = _);
    }
    BExcludeClientTargetedNotification(_) {
      let _ = _(_.body_data);
      return _
        ? _.remote_client_id && this.m_strRemoteClientID != _.remote_client_id
          ? !0
          : !!(
              _.target_client_types &&
              !(this.m_eTargetClientType & _.target_client_types)
            )
        : !1;
    }
    BReplaceRollupItem(_, _) {
      return _.read != _.read
        ? _.read
        : (_.read && _.read) || _.viewed == _.viewed
          ? _.timestamp < _.timestamp
          : !_.viewed && _.viewed
            ? !0
            : _.viewed && _.viewed
              ? _.viewed < _.viewed
              : !1;
    }
    AddNotificationToRollups(_, _) {
      let _ = this.BSendToCallbackAsNew(_);
      _ && this.m_rgUnreadNotificationIDs.push(_.notification_id);
      let _ = _.notification_type;
      switch (_) {
        case 3:
          {
            let _ = _(_);
            if (!_) return;
            let _ =
                "comment_" +
                _.owner_steam_id?.GetAccountID() +
                "_" +
                _.forum_id +
                "_" +
                _.topic_id,
              _ = _.findIndex((_) => _.rollup_key == _);
            if (_ == -1)
              _.push({
                type: _,
                rollup_key: _,
                item: _,
                rollup_count: 1,
                timestamp: _.timestamp,
                rgunread: _.read ? [] : [_.notification_id],
                rgread: _.read ? [_.notification_id] : [],
                bSendToCallbackAsNew: _,
                url: _(_),
              });
            else {
              let _ = _[_];
              this.BReplaceRollupItem(_, _.item) &&
                ((!_ || _.item.read) && (_.url = _(_)),
                (_.item = _),
                (_.timestamp = _.timestamp),
                (_.bSendToCallbackAsNew = _)),
                (_.rollup_count = _.rollup_count + 1),
                _.read
                  ? _.rgread.push(_.notification_id)
                  : _.rgunread.push(_.notification_id);
            }
            _.json_data?.app_id &&
              _.Get().QueueAppRequest(_.json_data.app_id, {
                include_assets: !0,
              });
          }
          break;
        case 4:
          let _ = _(_);
          if (_) {
            let _ = "item_" + _.appid;
            this.AddNotificationToRollupByAppID(_, _, _, _, _, _.appid);
          }
          break;
        case 12:
          let _ = _(_)?.appid.toString();
          if (_) {
            let _ = "asyncgame_" + _;
            this.AddNotificationToRollupByAppID(_, _, _, _, _, _);
          }
          break;
        case 30:
          let _ = _(_),
            _ = _?.report_id,
            _ = _?.subject_type,
            _ = _?.subject_group_id,
            _ = _?.subject_id,
            _ = `contentreport_${_}`,
            _ = _.findIndex((_) => _.rollup_key == _);
          if (_ == -1)
            _.push({
              type: _,
              rollup_key: _,
              item: _,
              rollup_count: 1,
              timestamp: _.timestamp,
              rgunread: _.read ? [] : [_.notification_id],
              rgread: _.read ? [_.notification_id] : [],
              bSendToCallbackAsNew: _,
              url: `${_.COMMUNITY_BASE_URL}my/reportedcontent/${_}-${_}-${_}`,
            });
          else {
            let _ = _[_];
            this.BReplaceRollupItem(_, _.item) &&
              ((!_ || _.item.read) &&
                (_.url = `${_.COMMUNITY_BASE_URL}my/reportedcontent/${_}-${_}-${_}`),
              (_.item = _),
              (_.timestamp = _.timestamp),
              (_.bSendToCallbackAsNew = _)),
              (_.rollup_count = _.rollup_count + 1),
              _.read
                ? _.rgread.push(_.notification_id)
                : _.rgunread.push(_.notification_id);
          }
          break;
        case 8:
          let _ = _(_)?.appid;
          _ &&
            _.Get().QueueAppRequest(_, {
              include_assets: !0,
            });
        default:
          _.push({
            type: _,
            rollup_key: _.notification_id,
            item: _,
            timestamp: _.timestamp,
            rgunread: _.read ? [] : [_.notification_id],
            rgread: _.read ? [_.notification_id] : [],
            bSendToCallbackAsNew: _,
          });
          break;
      }
    }
    AddNotificationToRollupByAppID(_, _, _, _, _, _) {
      let _ = _.findIndex((_) => _.rollup_key == _);
      if (_ == -1)
        _.push({
          type: _,
          rollup_key: _,
          item: _,
          rollup_count: 1,
          timestamp: _.timestamp,
          rgunread: _.read ? [] : [_.notification_id],
          rgread: _.read ? [_.notification_id] : [],
          bSendToCallbackAsNew: _,
        });
      else {
        let _ = _[_];
        this.BReplaceRollupItem(_, _.item) &&
          ((_.item = _),
          (_.timestamp = _.timestamp),
          (_.bSendToCallbackAsNew = _)),
          (_.rollup_count = _.rollup_count + 1),
          _.read
            ? _.rgread.push(_.notification_id)
            : _.rgunread.push(_.notification_id);
      }
      _.Get().QueueAppRequest(parseInt(_), {
        include_assets: !0,
      });
    }
  };
_([_], _.prototype, "m_rgNotificationRollups", 2),
  _([_], _.prototype, "m_summary", 2),
  _([_], _.prototype, "m_bLoaded", 2),
  _([_], _.prototype, "m_nUnviewed", 2),
  _([_], _.prototype, "ProcessNotifications", 1);
function _() {
  return {
    comments: 0,
    inventory_items: 0,
    invites: 0,
    gifts: 0,
    offline_messages: 0,
    trade_offers: 0,
    async_game_updates: 0,
    moderator_messages: 0,
    help_request_replies: 0,
    general: 0,
    wishlist: 0,
    pending_gifts: 0,
    pending_invites: 0,
    major_sale: 0,
    parental_feature_requests: 0,
    family_invites: 0,
    family_purchase_requests: 0,
    family_purchase_request_responses: 0,
    pending_family_invites: 0,
    parental_playtime_requests: 0,
    parental_feature_access_responses: 0,
    parental_playtime_responses: 0,
    requested_game_added: 0,
    playtest_invites: 0,
  };
}
async function _(_, _, _, _, _, _ = !0, _ = !1) {
  if (!_) throw new Error("Invalid steamid for GetSteamNotifications");
  let _ = _.Init(_);
  _.Body().set_language(_),
    _.Body().set_include_read(_),
    _.Body().set_include_pinned_counts(!0),
    _.Body().set_include_confirmation_count(_);
  let _ = await _.GetSteamNotifications(_, _);
  if (_.GetEResult() !== 1)
    throw (
      (_(
        `Received error from GetSteamNotifications. Result ${_.GetEResult()}. Transport ${_.Hdr().transport_error()}`,
      ),
      new Error(`Error from GetSteamNotifications: ${_.GetEResult()}`))
    );
  let _ = _.Body().toObject();
  return (
    _ &&
      (_.notifications = _.notifications?.filter(
        (_) => !_(_.notification_type, _, _),
      )),
    _
  );
}
async function _(_, _) {
  if (!_ || !_.steamid || !_.contextid || !_.appid || !_.assetid)
    return _("Item notification missing required attributes"), null;
  let _ = _.Init(_);
  _.Body().set_steamid(_.steamid),
    _.Body().set_contextid(_.contextid),
    _.Body().set_appid(parseInt(_.appid)),
    _.Body().set_get_descriptions(!0),
    _.Body().set_language(_.LANGUAGE);
  let _ = new _();
  _.add_assetids(_.assetid), _.Body().set_filters(_);
  let _ = await _.GetInventoryItemsWithDescriptions(_, _);
  if (_.GetEResult() !== 1)
    return (
      _("Request for steam item metadata did not succeed", _.GetEResult()), null
    );
  let _ = "",
    _ = await _.Get().QueueAppRequest(parseInt(_.appid), {});
  return (
    _ == 1
      ? (_ = _.Get().GetApp(parseInt(_.appid))?.GetName())
      : _("Failed getting app info", _),
    {
      app_name: _,
      item_data: _.Body().toObject().descriptions[0],
    }
  );
}
var _ = "ItemMetadata";
function _(_) {
  return [`${_}_${_?.steamid}_${_?.appid}_${_?.contextid}_${_?.assetid}`];
}
function _(_, _, _) {
  let _ = _(4, _.body_data);
  _.steamid = _;
  let _ = _({
    queryKey: _(_),
    queryFn: async () => _(_, _),
    staleTime: 1 / 0,
  });
  return _.isSuccess ? _.data : null;
}
function _(_) {
  let _ = `comment/${_.comment_type}/bounce/${_.owner_steam_id.ConvertTo64BitString()}/${_.forum_id}/?feature2=${_.topic_id}`;
  return _.last_post > 0 && (_ += "&tscn=" + (_.last_post - 1)), _;
}
function _(_) {
  return _.comment_type == 10;
}
function _(_) {
  return _?.bhas_friend;
}
function _(_) {
  return _.comment_type == 10;
}
function _(_) {
  return _(_) || _(_);
}
function _(_) {
  return _(_);
}
function _(_) {
  if (!_) return null;
  try {
    return JSON.parse(_);
  } catch {
    _("Steam notification in invalid format:", _);
  }
  return null;
}
function _(_) {
  return _(_.notification_type, _.body_data);
}
function _(_) {
  return _(_.type, _.item?.body_data);
}
function _(_, _) {
  let _ = _(_);
  if (!_) return null;
  switch (_) {
    case 2:
      return _.gifter_account;
    case 22:
      return {
        responder_steamid: _.responder_steamid,
        package_id: _.package_id,
        bundle_id: _.bundle_id,
      };
    case 9:
      return parseInt(_.sender);
    case 8:
      return {
        appid: _.appid,
        count: _.count ?? 1,
        appids: _.appids ?? [],
      };
    case 12:
      return !_.appid || !_.state || (_.state != 1 && _.state != 2)
        ? (_("Async game notification invalid data", _), null)
        : {
            appid: parseInt(_.appid),
            state: parseInt(_.state),
          };
    case 3:
      let _ = {
        owner_steam_id: _.owner_steam_id ? new _(_.owner_steam_id) : null,
        bclan_account: _(_.bclan_account),
        title: _.title,
        comment: _.text,
        time: _.last_post,
        comment_type: Number(_.type),
        topic_id: _.topic_id,
        forum_id: _.forum_id,
        account_steam_id: _.account_id
          ? _.InitFromAccountID(_.account_id)
          : null,
        bhas_friend: _(_.bhas_friend),
        bis_forum: _(_.bis_forum),
        last_post: _.last_post,
        bsubscribed: _(_.subscribed),
        bis_owner: _(_.bis_owner),
      };
      return (
        _.json_data &&
          (_.json_data = {
            app_id: parseInt(_.json_data.app_id),
            file_type: parseInt(_.json_data.file_type),
            title: _.json_data.title,
          }),
        _
      );
    case 5:
      return {
        requestorID: parseInt(_.requestor_id),
        state: _.state ? parseInt(_.state) : 0,
      };
    case 4:
      return {
        appid: parseInt(_.app_id),
        assetid: _.asset_id ?? "",
        contextid: _.context_id ?? "",
      };
    case 23:
      return {
        url: _.url ?? "",
        strGameName: _.content_app_name ?? "",
        mediaType: _.media_type ?? "clip",
        secDuration: parseFloat(_.duration_seconds ?? 0),
        nSize: parseInt(_.file_size ?? 0),
        strMachineName: _.machine_name,
        rtExpiration: _.expiration,
        thumbnailURL: _.thumbnail_url,
      };
    case 30:
      return {
        report_id: _.report_id ?? "",
        subject_type: _.subject_type ?? 0,
        subject_group_id: _.subject_group_id ?? "0",
        subject_id: _.subject_id ?? "0",
        status: _.status ?? 0,
      };
    default:
      return (
        _(
          "GetCustomNotificationDataByType called with unexpected type:" + _,
          _,
        ),
        null
      );
  }
}
function _(_) {
  if (typeof _ > "u") return !1;
  if (typeof _ == "number") return _ > 0;
  if (typeof _ == "string")
    switch (_.toLowerCase()?.trim()) {
      case "true":
      case "1":
        return !0;
      default:
        return !1;
    }
  return _("notification contained unexpected boolean value"), !1;
}
var _ = {
  0: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  1: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  2: {
    rollup_field: "gifts",
    eFeature: _,
  },
  3: {
    rollup_field: "comments",
    eFeature: 2,
  },
  4: {
    rollup_field: "inventory_items",
    eFeature: 3,
  },
  5: {
    rollup_field: "invites",
    eFeature: 4,
  },
  6: {
    rollup_field: "major_sale",
    eFeature: 1,
  },
  7: {
    rollup_field: void 0,
    eFeature: void 0,
  },
  8: {
    rollup_field: "wishlist",
    eFeature: 1,
  },
  9: {
    rollup_field: "trade_offers",
    eFeature: 6,
  },
  10: {
    rollup_field: "general",
    eFeature: _,
  },
  11: {
    rollup_field: "help_request_replies",
    eFeature: _,
  },
  12: {
    rollup_field: "async_game_updates",
    eFeature: _,
  },
  14: {
    rollup_field: "moderator_messages",
    eFeature: 2,
  },
  15: {
    rollup_field: "parental_feature_requests",
    eFeature: _,
  },
  16: {
    rollup_field: "family_invites",
    eFeature: _,
  },
  17: {
    rollup_field: "family_purchase_requests",
    eFeature: _,
  },
  18: {
    rollup_field: "parental_playtime_requests",
    eFeature: _,
  },
  19: {
    rollup_field: "family_purchase_request_responses",
    eFeature: _,
  },
  20: {
    rollup_field: "parental_feature_access_responses",
    eFeature: _,
  },
  21: {
    rollup_field: "parental_playtime_responses",
    eFeature: _,
  },
  22: {
    rollup_field: "requested_game_added",
    eFeature: _,
  },
  23: {
    rollup_field: void 0,
    eFeature: _,
  },
  24: {
    rollup_field: void 0,
    eFeature: _,
  },
  28: {
    rollup_field: "playtest_invites",
    eFeature: 1,
  },
  29: {
    rollup_field: void 0,
    eFeature: 6,
  },
  30: {
    rollup_field: void 0,
    eFeature: _,
  },
};
function _(_) {
  let _ = _[_];
  return _(!!_, `Missing notification type data for ${_}`), _;
}
function _(_, _, _) {
  if (!_) return !1;
  let _ = _(_);
  return _(_, _?.eFeature ?? _, _);
}
function _(_, _, _) {
  _(() => {
    let _ = _(_);
    _?.rollup_field && (_[_.rollup_field] = Math.max(0, _[_.rollup_field] + _));
  });
}
function _(_) {
  return !_.viewed || _.viewed + _ > _();
}
function _(_) {
  return _.viewed && _.viewed + _ < _();
}
var _ = {
  NotificationsMenu: "_9pxxQxgIeSs-",
  NotificationsMenuEntriesContainer: "_9iOH1Q-uKyk-",
  NotificationsMenuScrollable: "Opz4VIiguyE-",
  MenuScrollbarHidden: "mlJHp8oLBvE-",
  NotificationHeader: "_4eXplz8VvqA-",
  ResponsiveViewAll: "boBSDXKQiHQ-",
  AllNotificationsTitle: "CEJD-X7flrQ-",
  AllNotificationsButton: "rdozpnHvOb8-",
  NotificationsButton: "_99Vgt1ahI7Y-",
  SVGNotifications: "l5XI-YSDhPA-",
  Grey: "iN37A3Nzs1s-",
  Disabled: "cPe5BvEgNbw-",
  Green: "gCJ9prdd8bo-",
  AnimateBell: "CZDKF--ZM3c-",
  NotificationBellAnimation: "RjtsAQW-nCg-",
  NotificationBellUvula: "-THnGhhzqZw-",
  EmptyNotificationsCtn: "OHtwjMtZO28-",
  EmptyNotificationsTitle: "t7N3RcczvYw-",
  EmptyNotificationsBody: "oERBZh5ya08-",
};
var _ = _(_());
var _ = _(_());
function _(_) {
  if (!_) return;
  let _ = typeof _ == "string" ? _ : _.locString,
    _ = typeof _ == "string" ? [] : _.params || [];
  if (_) return _[0] !== "#" ? _ : _(_, ..._);
}
function _(_, _) {
  return _.default.useMemo(() => {
    if (_ === void 0) return null;
    let _ = _(_),
      _ = _(_);
    if (!_ || !_) return null;
    let _ =
        typeof _.displayNameLoc != "function"
          ? {
              locString: _.displayNameLoc,
            }
          : _.displayNameLoc(_),
      _ =
        typeof _.titleLoc != "function"
          ? {
              locString: _.titleLoc,
            }
          : _.titleLoc(_),
      _ =
        typeof _.bodyLoc != "function"
          ? {
              locString: _.bodyLoc,
            }
          : _.bodyLoc(_),
      _ = typeof _.image != "function" ? _.image : _.image(_),
      _ = typeof _.link != "function" ? _.link : _.link(_);
    return {
      display_name: _(_),
      title: _(_),
      body: _(_),
      image: _,
      link: _,
    };
  }, [_, _]);
}
function _(_, _) {
  return _.default.useMemo(() => {
    let _ = _(_),
      _ = _(_);
    if (!_) return null;
    let _ = typeof _.titleLoc == "string" ? _.titleLoc : _.titleLoc(_),
      _ = typeof _.bodyLoc == "string" ? _.bodyLoc : _.bodyLoc(_),
      _ = typeof _.url == "string" ? _.url : _.url(_),
      _ =
        typeof _.steamidAttribute == "string"
          ? _.steamidAttribute
          : _.steamidAttribute(_),
      _ = _ && _[_];
    return {
      strTitleLoc: _,
      strBodyLoc: _,
      strUrl: _,
      steamid: _,
    };
  }, [_, _]);
}
function _(_) {
  return _.default.useMemo(() => (_(_.type) ? _(_) : null), [_]);
}
var _ = _(_()),
  _ = _(_());
function _(_, _, _, _) {
  let _ = (0, _.useRef)(void 0),
    _ = (0, _.useRef)(void 0),
    _ = _();
  _.current = _;
  let [_, _] = (0, _.useState)(void 0),
    {
      include_assets: _,
      include_release: _,
      include_platforms: _,
      include_all_purchase_options: _,
      include_screenshots: _,
      include_trailers: _,
      include_ratings: _,
      include_tag_count: _,
      include_reviews: _,
      include_basic_info: _,
      include_supported_languages: _,
      include_full_description: _,
      include_included_items: _,
      include_assets_without_overrides: _,
      apply_user_filters: _,
      include_links: _,
    } = _;
  if (
    ((0, _.useEffect)(() => {
      let _ = {
          include_assets: _,
          include_release: _,
          include_platforms: _,
          include_all_purchase_options: _,
          include_screenshots: _,
          include_trailers: _,
          include_ratings: _,
          include_tag_count: _,
          include_reviews: _,
          include_basic_info: _,
          include_supported_languages: _,
          include_full_description: _,
          include_included_items: _,
          include_assets_without_overrides: _,
          apply_user_filters: _,
          include_links: _,
        },
        _ = null;
      return (
        !_ ||
          _ < 0 ||
          _.Get().BHasStoreItem(_, _, _) ||
          (_ !== void 0 && _ && _ == _.current) ||
          (_ !== _.current && (_(void 0), (_.current = _)),
          (_ = _.default.CancelToken.source()),
          _.Get()
            .QueueStoreItemRequest(_, _, _)
            .then((_) => {
              !_?.token.reason && _.current === _ && _(_ == 1), _();
            })),
        () => _?.cancel("useStoreItemCache: unmounting")
      );
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
    !_)
  )
    return [null, 2];
  if (_ === !1) return [void 0, 2];
  if (_.Get().BIsStoreItemMissing(_, _)) return [void 0, 2];
  if (!_.Get().BHasStoreItem(_, _, _)) return [void 0, 1];
  let _ = _.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
  return _ ? [_, 3] : [null, 2];
}
function _(_, _, _) {
  return _(_, 0, _, _);
}
function _(_, _, _) {
  let [_, _] = _(_, _, _),
    _;
  _?.GetStoreItemType() == 1 &&
    !_.GetAssets()?.GetHeaderURL() &&
    _?.GetIncludedAppIDs().length == 1 &&
    (_ = _.GetIncludedAppIDs()[0]);
  let [_, _] = _(_, _);
  return _ && _?.BIsVisible() ? [_, _] : [_, _];
}
var _ = {
  WebPinnedNotification: "Ho2Q8aj0bJU-",
};
var _ = _(_());
var _ = class {
  m_nLastUpdated = 0;
  m_mapLanguages = _.map();
  m_appid;
  m_fetching = null;
  constructor(_) {
    this.m_appid = _;
  }
  GetAppID() {
    return this.m_appid;
  }
  GetTokenList(_) {
    return this.m_mapLanguages.has(_) ? this.m_mapLanguages.get(_) : null;
  }
  Localize(_, _) {
    let _ = _.LANGUAGE,
      _ = this.GetTokenList(_),
      _ = _ != "english" ? this.GetTokenList("english") : null;
    return _(_, _, _, this.m_appid, _);
  }
  SubstituteParams(_, _) {
    let _ = _.LANGUAGE,
      _ = this.GetTokenList(_),
      _ = _ != "english" ? this.GetTokenList("english") : null;
    return _(_, _, _, this.m_appid, _);
  }
};
function _(_, _, _, _, _) {
  if (!_.startsWith("#"))
    return (
      console.log("Token doesn't start with #:", _, "appid", _, "tokens", _), ""
    );
  let _ = _;
  _ = _.toLowerCase();
  let _ = "";
  if (
    (_ && _.has(_) && (_ = _.get(_)), !_ && _ && _.has(_) && (_ = _.get(_)), _)
  )
    _ = _(_, _, _, _, _);
  else if (
    ((_ || _) &&
      console.log("No loc found for appid", _, _, "Tokens:", _, "Fallback:", _),
    _ && _.EUNIVERSE != 1)
  )
    return _;
  return _;
}
function _(_, _, _, _, _) {
  let _ = /{[A-za-z0-9_%#:]+}/g,
    _ = _.match(_);
  if (_)
    for (let _ of _) {
      let _ = _.slice(1, -1),
        _ = _(_, _),
        _ = _(_, _, _, _, _);
      if (!_) return "";
      _ = _.replace(_, _);
    }
  return (_ = _(_, _)), _;
}
function _(_, _) {
  let _ = /%[A-Za-z0-9_:]+%/g,
    _ = _.match(_);
  if (_)
    for (let _ of _) {
      let _ = _.slice(1, -1).toLowerCase(),
        _ = _.get(_);
      _ == null
        ? console.log("No rich presence found for", _)
        : (_ = _.replace(_, _));
    }
  return _;
}
var _ = 3600 * 24 * 7 * 2,
  _ = class {
    m_CMInterface;
    m_mapAppInfo = _.map();
    m_mapRichPresenceLoc = _.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new _();
    constructor() {
      _(this);
    }
    Init(_) {
      this.m_CMInterface = _;
    }
    BHavePendingAppInfoRequests() {
      return (
        this.m_setPendingAppInfo.size > 0 || this.m_cAppInfoRequestsInFlight > 0
      );
    }
    get CMInterface() {
      return this.m_CMInterface;
    }
    RegisterCallbackOnLoad(_) {
      if (!this.BHavePendingAppInfoRequests()) {
        _(!1, "Registering for callback on appinfo load, but nothing queued"),
          _();
        return;
      }
      this.m_fnCallbackOnAppInfoLoaded.Register(_);
    }
    IsLoadingAppID(_) {
      return this.m_setPendingAppInfo.has(_);
    }
    GetAppInfo(_) {
      if (
        (_(this.m_CMInterface, "CAppInfoStore.GetAppInfo called before Init"),
        !this.m_mapAppInfo.has(_))
      ) {
        let _ = new _(_);
        this.m_mapAppInfo.set(_, _), this.QueueAppInfoRequest(_);
      }
      return this.m_mapAppInfo.get(_);
    }
    QueueAppInfoRequest(_) {
      return _
        ? (this.m_setPendingAppInfo.size ||
            ((this.m_PendingAppInfoPromise = new Promise(
              (_) => (this.m_PendingAppInfoResolve = _),
            )),
            window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
          this.m_setPendingAppInfo.add(_),
          this.m_PendingAppInfoPromise)
        : Promise.resolve();
    }
    async FlushPendingAppInfo() {
      let _ = this.m_PendingAppInfoResolve,
        _ = Array.from(this.m_setPendingAppInfo);
      (this.m_PendingAppInfoPromise = void 0),
        (this.m_PendingAppInfoResolve = void 0),
        this.m_setPendingAppInfo.clear(),
        await this.LoadAppInfoBatch(_),
        _?.();
    }
    async LoadAppInfoBatch(_) {
      this.m_cAppInfoRequestsInFlight++;
      let _ = await this.LoadAppInfoBatchFromLocalCache(_);
      if (_.length) {
        console.log("Loading batch of App Info from Steam: ", _),
          await this.m_CMInterface?.WaitUntilLoggedOn();
        let _ = _.Init(_);
        _.Body().set_language(_(_.LANGUAGE));
        let _ = 50;
        for (; _.length > 0; ) {
          let _ = Math.min(_, _.length),
            _ = _.slice(0, _);
          (_ = _.slice(_)), _.Body().set_appids(_);
          let _ = await _.GetApps(this.m_CMInterface.GetServiceTransport(), _);
          _.GetEResult() == 1
            ? this.OnGetAppsResponse(_)
            : console.error(
                `Error when calling CommunityService.GetApps: EResult=${_.GetEResult()}, AppIDs:`,
                _,
              );
        }
      }
      --this.m_cAppInfoRequestsInFlight == 0 &&
        this.m_setPendingAppInfo.size == 0 &&
        (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
        this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
    }
    OnGetAppsResponse(_) {
      let _ = [];
      for (let _ of _.Body().apps()) {
        let _ = this.m_mapAppInfo.get(_.appid());
        _(_, `Got AppInfo response for unrequested AppID: ${_.appid()}`),
          _ &&
            ((_ = new _(_.appid())),
            _.DeserializeFromMessage(_),
            this.m_mapAppInfo.set(_.appid(), _),
            _.push(_));
      }
      this.SaveAppInfoBatchToLocalCache(_);
    }
    OnAppOverviewChange(_) {
      for (let _ of _) {
        let _ = new _(_.appid());
        _.DeserializeFromAppOverview(_),
          _.is_initialized && this.m_mapAppInfo.set(_.appid(), _);
      }
    }
    async EnsureAppInfoForAppIDs(_) {
      let _ = !1;
      return (
        _.forEach((_) => {
          let _ = this.m_mapAppInfo.get(_);
          if (_) {
            _.is_valid || (_ = !0);
            return;
          }
          (_ = new _(_)),
            this.m_mapAppInfo.set(_, _),
            this.QueueAppInfoRequest(_),
            (_ = !0);
        }),
        _ && this.m_PendingAppInfoPromise !== void 0
          ? this.m_PendingAppInfoPromise
          : Promise.resolve()
      );
    }
    SetCacheStorage(_) {
      this.m_CacheStorage = _;
    }
    GetCacheKeyForAppID(_) {
      return "APPINFO_" + _;
    }
    async LoadAppInfoBatchFromLocalCache(_) {
      if (!this.m_CacheStorage) return _;
      console.log("Loading batch of App Info from Local Cache: ", _);
      let _ = new Date(new Date().getTime() - _ * 1e3),
        _ = async (_) => {
          let _ = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(_),
          );
          if (!_) return _;
          let _ = this.m_mapAppInfo.get(_);
          return (
            _(
              _,
              "Didn't find AppInfo in our map when loading from cache but it should've been there?",
            ),
            _
              ? ((_ = new _(_)),
                _.DeserializeFromCacheObject(_),
                _.is_initialized
                  ? (this.m_mapAppInfo.set(_, _),
                    _.time_updated_from_server < _ ? _ : null)
                  : (console.warn(
                      "Failed to deserialize cached App Info: ",
                      _,
                      _,
                    ),
                    _))
              : _
          );
        },
        _ = _.map((_) => _(_));
      return (await Promise.all(_)).filter((_) => _ !== null);
    }
    async SaveAppInfoBatchToLocalCache(_) {
      if (this.m_CacheStorage) {
        console.log(
          "Saving batch of App Info to Local Cache: ",
          _.map((_) => _.appid),
        );
        for (let _ of _) {
          let _ = _.SerializeToCacheObject();
          _ &&
            this.m_CacheStorage.StoreObject(
              this.GetCacheKeyForAppID(_.appid),
              _,
            );
        }
      }
    }
    Localize(_, _, _) {
      let _ = this.GetRichPresenceLoc(_);
      return _
        ? _.Localize(_, _)
        : _.EUNIVERSE != 1
          ? (console.log(
              `Unable to find app localization information for app ${_} token ${_}, this may not have had a chance to load yet`,
            ),
            _)
          : "";
    }
    GetRichPresenceLoc(_) {
      if (this.m_mapRichPresenceLoc.has(_.toString())) {
        let _ = this.m_mapRichPresenceLoc.get(_.toString());
        return (
          _.m_nLastUpdated + 1e3 * 60 * _ < Date.now() &&
            this.QueueRichPresenceLocRequest(_),
          _
        );
      }
      let _ = new _(_);
      return (
        this.m_mapRichPresenceLoc.set(_.toString(), _),
        this.QueueRichPresenceLocRequest(_),
        _
      );
    }
    GetRichPresenceLocAsync(_) {
      let _ = this.GetRichPresenceLoc(_);
      return _.m_nLastUpdated ? Promise.resolve(_) : _.m_fetching;
    }
    OnRichPresenceLocUpdate(_, _) {
      _.m_nLastUpdated = Date.now();
      for (let _ of _) {
        let _ = _.language(),
          _ = _.m_mapLanguages.get(_);
        _
          ? _.clear()
          : (_.m_mapLanguages.set(_, new Map()), (_ = _.m_mapLanguages.get(_)));
        for (let _ of _.tokens()) _?.set(_.name().toLowerCase(), _.value());
      }
    }
    QueueRichPresenceLocRequest(_) {
      return (
        _.m_fetching ||
          ((_.m_fetching = this.m_CMInterface
            .WaitUntilLoggedOn()
            .then(() => {
              let _ = _.Init(_);
              return (
                _.Body().set_appid(_.GetAppID()),
                _.Body().set_language(_.LANGUAGE),
                _.GetAppRichPresenceLocalization(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                )
              );
            })
            .then(
              (_) => (
                (_.m_fetching = null),
                _.GetEResult() != 1
                  ? Promise.reject()
                  : (this.OnRichPresenceLocUpdate(_, _.Body().token_lists()),
                    Promise.resolve(_))
              ),
            )),
          _.m_fetching.catch(() => {
            _.m_fetching = null;
          })),
        _.m_fetching
      );
    }
  };
_([_], _.prototype, "OnGetAppsResponse", 1),
  _([_], _.prototype, "OnRichPresenceLocUpdate", 1);
var _ = new _();
var _ = class {
  m_steamid;
  m_bInitialized = !1;
  m_ePersonaState = 0;
  m_unGamePlayedAppID = 0;
  m_gameid = "0";
  m_unPersonaStateFlags = 0;
  m_strPlayerName = "";
  m_strAvatarHash = _;
  m_strAccountName = "";
  m_rtLastSeenOnline = 0;
  m_strGameExtraInfo = "";
  m_unGameServerIP = 0;
  m_unGameServerPort = 0;
  m_game_lobby_id = "";
  m_bPlayerNamePending = !1;
  m_bAvatarPending = !1;
  m_broadcastId = void 0;
  m_broadcastAccountId = void 0;
  m_broadcastAppId = void 0;
  m_broadcastViewerCount = void 0;
  m_strBroadcastTitle = void 0;
  m_bCommunityBanned = void 0;
  m_eGamingDeviceType = 0;
  m_mapRichPresence = _.map();
  m_bNameInitialized = !1;
  m_bStatusInitialized = !1;
  m_strProfileURL = void 0;
  constructor(_) {
    _(this), (this.m_steamid = _);
  }
  Reset() {
    (this.m_ePersonaState = 0),
      (this.m_unGamePlayedAppID = 0),
      (this.m_gameid = "0"),
      (this.m_strGameExtraInfo = ""),
      (this.m_unGameServerIP = 0),
      (this.m_unGameServerPort = 0),
      (this.m_game_lobby_id = ""),
      this.m_mapRichPresence.clear(),
      (this.m_broadcastId = void 0),
      (this.m_broadcastAccountId = void 0),
      (this.m_broadcastAppId = void 0),
      (this.m_broadcastViewerCount = void 0),
      (this.m_strBroadcastTitle = void 0),
      (this.m_eGamingDeviceType = 0);
  }
  GetAccountID() {
    return this.m_steamid.GetAccountID();
  }
  GetSteamIDAsString() {
    return this.m_steamid.ConvertTo64BitString();
  }
  get is_online() {
    return this.m_ePersonaState != 0 && this.m_ePersonaState != 7;
  }
  get is_ingame() {
    return (
      this.is_online && (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
    );
  }
  get is_watchingbroadcast() {
    return !!this.m_broadcastAccountId;
  }
  get is_in_nonsteam_game() {
    return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
  }
  get is_in_joinable_game() {
    return (
      this.has_joinable_game_flag ||
      this.is_in_valid_lobby ||
      this.has_server_ip
    );
  }
  get has_joinable_game_flag() {
    return ((this.m_unPersonaStateFlags ?? 0) & 2) != 0;
  }
  get connect_string() {
    return this.m_mapRichPresence.get("connect");
  }
  get is_in_valid_lobby() {
    return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
  }
  get has_server_ip() {
    return this.m_unGameServerIP != 0;
  }
  get is_awayOrSnooze() {
    return this.m_ePersonaState == 3 || this.m_ePersonaState == 4;
  }
  HasStateFlag(_) {
    return ((this.m_unPersonaStateFlags ?? 0) & _) != 0;
  }
  get last_seen_online() {
    return this.m_rtLastSeenOnline;
  }
  ClearStateOnDisconnect() {
    this.m_ePersonaState != 0 && this.Reset();
  }
  get is_golden() {
    return this.HasStateFlag(4);
  }
  GetCurrentGameName() {
    return this.m_strGameExtraInfo
      ? this.m_strGameExtraInfo
      : this.m_unGamePlayedAppID
        ? _.GetAppInfo(this.m_unGamePlayedAppID).name
        : "";
  }
  GetCurrentGameIconURL() {
    return this.m_unGamePlayedAppID
      ? _.GetAppInfo(this.m_unGamePlayedAppID).icon_url
      : "";
  }
  BIsAppInfoReady() {
    return this.m_unGamePlayedAppID
      ? _.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
      : !0;
  }
  HasCurrentGameRichPresence() {
    return this.m_mapRichPresence.has("steam_display");
  }
  HasRichPresenceForViewGameInfo() {
    return !!(
      this.m_mapRichPresence.has("status") ||
      this.m_mapRichPresence.has("connect") ||
      this.m_mapRichPresence.has("connect_private")
    );
  }
  GetCurrentGameRichPresence() {
    if (this.HasCurrentGameRichPresence()) {
      let _ = _.GetRichPresenceLoc(this.m_unGamePlayedAppID);
      if (_) {
        let _ = this.m_mapRichPresence.get("steam_display");
        return _.Localize(_, this.m_mapRichPresence);
      }
    } else if (this.HasStateFlag(8))
      return _("#PersonaStateRemotePlayTogether");
    return "";
  }
  GetCurrentGameStatus() {
    return (
      this.GetCurrentGameRichPresence() ||
      this.m_mapRichPresence.get("status") ||
      ""
    );
  }
  GetOfflineStatusUpdateRate() {
    if (this.last_seen_online == 0) return 3e4;
    let _ = 60,
      _ = _ * 60,
      _ = _ * 24,
      _ = 1e3,
      _ = _.CMInterface.GetServerRTime32() - this.last_seen_online;
    return _ > _ ? (_ *= _) : _ > 2 * _ ? (_ *= _) : (_ *= _ / 4), _;
  }
  GetOfflineStatusTime() {
    if (this.last_seen_online == 0) return _("#PersonaStateOffline");
    let _ = this.GetOfflineStatusUpdateRate();
    (!_.IN_MOBILE || _ <= 60) && _(_);
    let _ = _.CMInterface.GetServerRTime32() - this.last_seen_online;
    return _ < 60
      ? _("#PersonaStateLastSeen_JustNow")
      : _("#PersonaStateLastSeen", _(_));
  }
  GetLocalizedOnlineStatus() {
    switch (this.m_ePersonaState) {
      case 0:
      case 7:
        return this.GetOfflineStatusTime();
      case 1:
        return _("#PersonaStateOnline");
      case 2:
        return _("#PersonaStateBusy");
      case 3:
        return _("#PersonaStateAway");
      case 4:
        return _("#PersonaStateSnooze");
      case 5:
        return _("#PersonaStateLookingToTrade");
      case 6:
        return _("#PersonaStateLookingToPlay");
      default:
        return "";
    }
  }
  get has_public_party_beacon() {
    return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
  }
  get player_group() {
    return this.m_mapRichPresence.has("steam_player_group")
      ? this.m_mapRichPresence.get("steam_player_group")
      : "";
  }
  get player_group_size() {
    return this.m_mapRichPresence.has("steam_player_group_size")
      ? Number.parseInt(this.m_mapRichPresence.get("steam_player_group_size"))
      : 0;
  }
  get online_state() {
    return this.is_online
      ? this.is_ingame
        ? "in-game"
        : this.m_broadcastAccountId
          ? "watchingbroadcast"
          : "online"
      : "offline";
  }
  BHasAvatarSet() {
    return this.m_strAvatarHash != _;
  }
  get avatar_url() {
    return _(this.m_strAvatarHash);
  }
  get avatar_url_medium() {
    return _(this.m_strAvatarHash, "medium");
  }
  get avatar_url_full() {
    return _(this.m_strAvatarHash, "full");
  }
  static SortStatusComparator(_, _, _) {
    if (_.has_public_party_beacon) {
      if (!_.has_public_party_beacon) return -1;
    } else {
      if (_.has_public_party_beacon) return 1;
      if (_.is_ingame)
        if (_.is_ingame)
          if (_) {
            if (_.is_awayOrSnooze) {
              if (!_.is_awayOrSnooze) return 1;
            } else if (_.is_awayOrSnooze) return -1;
          } else return 0;
        else return -1;
      else if (_.is_ingame) return 1;
    }
    if (_.is_online) {
      if (!_.is_online) return -1;
    } else if (_.is_online) return 1;
    if (_) {
      if (_.is_awayOrSnooze) {
        if (!_.is_awayOrSnooze) return 1;
      } else if (_.is_awayOrSnooze) return -1;
    }
    return 0;
  }
  GetCommunityProfileURL() {
    return this.m_strProfileURL
      ? `${_.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
      : `${_.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
  }
};
_([_], _.prototype, "m_bInitialized", 2),
  _([_], _.prototype, "m_ePersonaState", 2),
  _([_], _.prototype, "m_unGamePlayedAppID", 2),
  _([_], _.prototype, "m_gameid", 2),
  _([_], _.prototype, "m_unPersonaStateFlags", 2),
  _([_], _.prototype, "m_strPlayerName", 2),
  _([_], _.prototype, "m_strAvatarHash", 2),
  _([_], _.prototype, "m_strAccountName", 2),
  _([_], _.prototype, "m_rtLastSeenOnline", 2),
  _([_], _.prototype, "m_strGameExtraInfo", 2),
  _([_], _.prototype, "m_unGameServerIP", 2),
  _([_], _.prototype, "m_unGameServerPort", 2),
  _([_], _.prototype, "m_game_lobby_id", 2),
  _([_], _.prototype, "m_bPlayerNamePending", 2),
  _([_], _.prototype, "m_bAvatarPending", 2),
  _([_], _.prototype, "m_broadcastId", 2),
  _([_], _.prototype, "m_broadcastAccountId", 2),
  _([_], _.prototype, "m_broadcastAppId", 2),
  _([_], _.prototype, "m_broadcastViewerCount", 2),
  _([_], _.prototype, "m_strBroadcastTitle", 2),
  _([_], _.prototype, "m_bCommunityBanned", 2),
  _([_], _.prototype, "m_eGamingDeviceType", 2),
  _([_], _.prototype, "m_bNameInitialized", 2);
function _(_) {
  let _ = _(),
    _ = _.default.useContext(_);
  return _(_(_, _, _));
}
var _ = _.default.createContext({
  loadPersonaState: async (_, _) => {
    if (_ == null) return null;
    let _ = await _(_).load(_.InitFromAccountID(_).ConvertTo64BitString());
    return _(_.InitFromAccountID(_), _);
  },
});
function _(_, _, _) {
  let _ = typeof _ == "string" ? new _(_).GetAccountID() : _;
  return {
    queryKey: ["PlayerSummary", _],
    queryFn: () => _.loadPersonaState(_, _),
    enabled: !!_,
  };
}
var _;
function _(_) {
  return (_ ??= _(_));
}
function _(_, _) {
  let _ = new _(_),
    _ = _?.public_data,
    _ = _?.private_data;
  return (
    (_.m_bInitialized = !!_),
    (_.m_ePersonaState = _?.persona_state ?? 0),
    (_.m_strAvatarHash = _?.sha_digest_avatar ? _(_.sha_digest_avatar) : _),
    (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
    (_.m_strAccountName = _?.account_name),
    _?.persona_state_flags &&
      (_.m_unPersonaStateFlags = _?.persona_state_flags),
    _?.game_id && (_.m_gameid = _?.game_id),
    _?.game_server_ip_address &&
      (_.m_unGameServerIP = _?.game_server_ip_address),
    _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id),
    _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info),
    _?.profile_url && (_.m_strProfileURL = _.profile_url),
    _
  );
}
var _ = _(_());
var _ = {
  "duration-app-launch": "800ms",
  loadinganimationiterationcount: "20",
  loadinganimationduration: "1s",
  StandardTemplateContainer: "_85JijfTGTG0-",
  "ItemFocusAnim-darkerGrey": "GnQCsUIcepE-",
  Timestamp: "_5JJqc6F8nRg-",
  StandardTemplate: "PYlz37FmVJw-",
  PinnedTemplate: "Yo2-GDCCBeI-",
  StandardLogoDimensions: "bCRodv2whPY-",
  Content: "pJLho-uUDpY-",
  Header: "NVDvWJ0MqkY-",
  Icon: "fQnGAfUkrzE-",
  Title: "_4r1rj40TM28-",
  StandardNotificationDescription: "_7Rp9tq9bPjk-",
  StandardNotificationSubText: "dLyTqUwAgrs-",
  Multiline: "_95m6KQbG1bc-",
  Count: "LkXauMuhbWs-",
  PinnedBody: "AlYGqiFwI24-",
  AllNotificationsTemplate: "w5AH5f-hF9E-",
  StandardTemplateDesktop: "V7KqGvJWgw8-",
  DesktopToastTemplate: "nIqc91u89eg-",
  PinnedTemplateWeb: "EnCbEP4QClw-",
  PinnedTemplateDesktop: "FIjnqWf2p0w-",
  AppLogo: "mVDJBhQNHOo-",
  AppLogoBackgroundImage: "QGiplV-5rbU-",
  MarkedRead: "uLS2sKU5wzc-",
  markReadBackground: "Rkr-g6was2M-",
  Unread: "vHKSq0jFWEA-",
  PlayerNickName: "a4fQxGyKQDM-",
  FullName: "-IRzduy2H1M-",
  IngameTitle: "ZuXbcgMwpPk-",
  OnlineTitle: "ESD-W1ngdPM-",
  GroupMessageTitle: "t-EvGbLbsYk-",
  GroupMessageUserName: "PqBJY-EdKfY-",
  GroupMessageBody: "_8SDkekJUJwA-",
  GroupMessageIcon: "fq2-lMZQpSQ-",
  Body: "MWt7KSaEP8w-",
  FriendInGameAppColor: "EG8JawpOL0w-",
  WishlistBlurImage: "_8wX3qPHhVIQ-",
  AvatarStatus: "CiV07LUrAPo-",
  IncomingCallToast: "FcQi1uY9-jQ-",
  ShortLogoDimensions: "_5ZFNyVuogZU-",
  LoadingTemplate: "kU7k-G8skc4-",
  Hide: "cdSRgmZMudM-",
  ShimmerLogo: "r8-eUCBidII-",
  ShimmerBody: "blCRrRkjUbQ-",
  ShimmerHeader: "CqaLW-E2tg8-",
  loading: "TiEL0eLbDU0-",
  BottomBar: "UP93-KigOrE-",
  NewIndicator: "_8AgFkgDV3LQ-",
  BackgroundAnimation: "_3oUPRczfisE-",
  "ItemFocusAnim-darkerGrey-nocolor": "reRnJkje-ZQ-",
  "ItemFocusAnim-darkGreySettings": "WjQoM2qF4KM-",
  "ItemFocusAnim-darkGrey": "SWu7NonFdkU-",
  "ItemFocusAnim-grey": "QJusGCvT-4Y-",
  "ItemFocusAnim-translucent-white-10": "P1r8QNNbNSM-",
  "ItemFocusAnim-translucent-white-20": "GqREDPxDbxM-",
  "ItemFocusAnimBorder-darkGrey": "Ad6X517YYro-",
  "ItemFocusAnim-green": "VEEAdWH5tZs-",
  focusAnimation: "ZW4-YnjuMks-",
  hoverAnimation: "XJOK6Bj-tjQ-",
};
var _ = _(_()),
  _ = !0;
function _(_) {
  let { onActivate: _, icon: _, body: _, eUIMode: _, classNames: _ } = _,
    _ = _,
    _ = _.PinnedTemplate;
  return (
    _ == 7
      ? (_ = _.PinnedTemplateDesktop)
      : _ == 3 && (_ = _.PinnedTemplateWeb),
    (_ = _(_, _)),
    (0, _.jsx)(_, {
      className: _,
      onActivate: _,
      children: (0, _.jsx)("div", {
        className: _.Content,
        children: (0, _.jsxs)("div", {
          className: _.PinnedBody,
          children: [
            (0, _.jsx)("span", {
              className: _.Icon,
              children: _,
            }),
            _,
          ],
        }),
      }),
    })
  );
}
function _(_) {
  let {
    count: _,
    icon: _,
    onActivate: _,
    strLocToken: _,
    bAlwaysShow: _,
    eUIMode: _,
    classNames: _,
    visible: _,
  } = _;
  if (!_ && !_) return null;
  let _ = _(_, _);
  return (0, _.jsx)(_, {
    icon: _,
    body: _,
    onActivate: _,
    eUIMode: _,
    classNames: _,
    visible: _,
  });
}
function _(_) {
  let {
      nUnread: _,
      location: _,
      eUIMode: _,
      bLoading: _,
      footer: _,
      bNewIndicator: _,
    } = _,
    [_, _] = _.default.useState(_ ? 1 : 0),
    [_, _] = _.default.useState(void 0);
  _.default.useEffect(() => {
    _ == 1 && !_ ? _(2) : _ == 2 && _ && _(1);
  }, [_, _]),
    _.default.useEffect(() => {
      let _ =
          parseInt(_.loadinganimationiterationcount) *
          parseInt(_.loadinganimationduration) *
          1e3,
        _ = window.setTimeout(() => _(0), _);
      return () => window.clearTimeout(_);
    }, []),
    _.default.useEffect(() => {
      _ && _ > 0 && _ !== _.Unread && _ != 2 && _ != 1
        ? _(_.Unread)
        : !_ && _ == _.Unread && _(_.MarkedRead);
    }, [_, _, _]);
  let _ = _.onActivate;
  _ || (_ = () => console.log("Missing activate function")),
    _ == 1 && (_ = void 0);
  let _ = _.StandardTemplate;
  _ == 4
    ? (_ = _.AllNotificationsTemplate)
    : _ == 2
      ? (_ = _.DesktopToastTemplate)
      : (_ == 7 || _ == 3) && (_ = _.StandardTemplateDesktop);
  let _ = null;
  if (_ != 0 && _ != 2 && _ != 1) {
    let _ = _ == 2 ? _.Hide : null;
    _ = (0, _.jsxs)("div", {
      className: _(_.LoadingTemplate, _),
      children: [
        (0, _.jsx)("div", {
          className: _(_.StandardLogoDimensions, _.ShimmerLogo),
        }),
        (0, _.jsxs)("div", {
          className: _.Content,
          children: [
            (0, _.jsx)("div", {
              className: _(_.Header, _.ShimmerHeader),
            }),
            (0, _.jsx)("div", {
              className: _(_.Body, _.ShimmerBody),
            }),
          ],
        }),
      ],
    });
  }
  return (0, _.jsxs)(_, {
    onActivate: _,
    className: _.StandardTemplateContainer,
    onOptionsButton: _.onOptionsButton,
    onOptionsActionDescription: _.onOptionsButtonDesc,
    children: [
      (0, _.jsxs)("div", {
        className: _(_, _),
        children: [
          (0, _.jsx)("div", {
            className: _.StandardLogoDimensions,
            children: _.logo,
          }),
          _.personaStatus &&
            (0, _.jsx)("div", {
              className: _(_.AvatarStatus, _.personaStatus),
            }),
          (0, _.jsx)("div", {
            className: _.Content,
            children: _.children,
          }),
          _,
          _ &&
            (0, _.jsx)(_, {
              location: _,
            }),
        ],
      }),
      _ || null,
    ],
  });
}
function _(_) {
  let { location: _ } = _;
  return !_ || _ != 3
    ? null
    : (0, _.jsx)("div", {
        className: _.NewIndicator,
        children: (0, _.jsx)(_, {}),
      });
}
function _(_) {
  let {
      icon: _,
      title: _,
      timestamp: _,
      location: _,
      fnRenderTimestamp: _,
    } = _,
    _ = !!_ && (_ == 3 || _ == 4),
    _;
  return (
    _ == 4 ? (_ = _) : (_ = _ ?? _),
    (0, _.jsxs)("div", {
      className: _.Header,
      children: [
        (0, _.jsx)(_, {
          icon: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            title: _,
          }),
        _ &&
          _({
            timestamp: _,
          }),
      ],
    })
  );
}
function _(_) {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !!_.icon &&
        (0, _.jsx)("div", {
          className: _.Icon,
          children: _.icon,
        }),
      " ",
    ],
  });
}
function _(_) {
  return (0, _.jsx)("div", {
    className: _.Title,
    children: _.title,
  });
}
function _(_) {
  let _ = _(_.StandardNotificationDescription, _.multiline && _.Multiline);
  return (0, _.jsx)("div", {
    className: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.StandardNotificationSubText, _.multiline && _.Multiline);
  return (0, _.jsx)("div", {
    className: _,
    children: _.children,
  });
}
function _(_) {
  if (_.timestamp === void 0) return null;
  let _ = new Date(),
    _ = new Date(_.timestamp * 1e3),
    _ = _(_.timestamp);
  return (
    _(_, _) || (_ = _(_.timestamp, !1, !1, !1) + " " + _),
    (0, _.jsx)("div", {
      className: _.Timestamp,
      children: _,
    })
  );
}
function _(_) {
  if (_.timestamp === void 0) return null;
  let _ = new Date(),
    _ = new Date(_.timestamp * 1e3),
    _ = _(_, _) ? _(_.timestamp) : _(_.timestamp, !1, !1, !1);
  return (0, _.jsx)("div", {
    className: _.Timestamp,
    children: _,
  });
}
var _ = _(_());
var _ = _(_());
function _(_) {
  return _ == 1;
}
function _(_, _) {
  return _.default.useCallback(
    (_) => {
      _ && _(_), _ && _();
    },
    [_, _],
  );
}
var _ = {
  "duration-app-launch": "800ms",
  loadinganimationiterationcount: "20",
  loadinganimationduration: "1s",
  StandardTemplateContainer: "iGcmAymzXfg-",
  "ItemFocusAnim-darkerGrey": "uYOeOR-OMTg-",
  Timestamp: "dX-aGU1ykGo-",
  StandardTemplate: "pptzs2myItU-",
  PinnedTemplate: "Ck1LX6ZgOMQ-",
  StandardLogoDimensions: "_3No1Y2QkYbg-",
  Content: "zJ-hMXzJLs4-",
  Header: "lkOc4m-boIo-",
  Icon: "-Lba8mkNoaw-",
  Title: "gj3eKK2jFnM-",
  StandardNotificationDescription: "IA2Kbrb4EFA-",
  StandardNotificationSubText: "h-TRgwo22RA-",
  Multiline: "gTIwtGdGT0Y-",
  Count: "BX--bdBXdPM-",
  PinnedBody: "-lzH3JQpvVw-",
  AllNotificationsTemplate: "_4sIw6-BRY3M-",
  StandardTemplateDesktop: "yx5i-OnqPZw-",
  DesktopToastTemplate: "FH5iZF6f6sU-",
  PinnedTemplateWeb: "ORVr5O0ouMU-",
  PinnedTemplateDesktop: "xocZ2rGjq4Q-",
  AppLogo: "m4FtGbHIiXc-",
  AppLogoBackgroundImage: "VCkTtTYnJV0-",
  MarkedRead: "qdclgsRR2jg-",
  markReadBackground: "JEsB-6eQkmU-",
  Unread: "xxHAj1ifjwM-",
  PlayerNickName: "uEeImQsnAGM-",
  FullName: "OeC4xRobRWY-",
  IngameTitle: "br0hKM-5drk-",
  OnlineTitle: "t1PUV7RXJrM-",
  GroupMessageTitle: "_7q-RiVC9pok-",
  GroupMessageUserName: "F8zeg0IXx7E-",
  GroupMessageBody: "GLj-TyWELTE-",
  GroupMessageIcon: "YyMYC-wpunw-",
  Body: "kSa7qLTcYG8-",
  FriendInGameAppColor: "_7zwXAnTCR4A-",
  WishlistBlurImage: "dh1JIDL2IDo-",
  AvatarStatus: "mvtcBdCapBU-",
  IncomingCallToast: "XNdWklso-xY-",
  ShortLogoDimensions: "pthzMLoe4PU-",
  LoadingTemplate: "DUBYHKU1fOI-",
  Hide: "nvxby3F3QKM-",
  ShimmerLogo: "_5gE6FDQagvg-",
  ShimmerBody: "jK6C1NO4tPs-",
  ShimmerHeader: "sB270EvfjEg-",
  loading: "XxdizQ4j-Wk-",
  BottomBar: "fDZbEgP-YNI-",
  NewIndicator: "VCvH4w9qpJI-",
  ShortTemplate: "eex8HJdE0y4-",
  TwoLine: "cfVQMsGSgCE-",
  FullWidth: "SK-bQm3x8tk-",
  BackgroundAnimation: "NVMM7FMSHIE-",
  "ItemFocusAnim-darkerGrey-nocolor": "JIP7y1MHc3k-",
  "ItemFocusAnim-darkGreySettings": "wPq0hCsHJSU-",
  "ItemFocusAnim-darkGrey": "_4jpS--H87-Q-",
  "ItemFocusAnim-grey": "m6dmyy8Nn7E-",
  "ItemFocusAnim-translucent-white-10": "bvaNTW8B-Pw-",
  "ItemFocusAnim-translucent-white-20": "BqDoWhmippE-",
  "ItemFocusAnimBorder-darkGrey": "BHsNfI3lXGA-",
  "ItemFocusAnim-green": "julHcVyLcOQ-",
  focusAnimation: "f-AiKKxiDS8-",
  hoverAnimation: "hhHZZcF89bs-",
};
var _ = _(_());
function _(_) {
  let {
      onActivate: _,
      onDismiss: _,
      logo: _,
      icon: _,
      title: _,
      body: _,
      personaStatus: _,
      className: _,
      singleLineOnly: _,
      fullWidth: _,
    } = _,
    _ = _(_, _),
    _ = (_) => {
      _.button == 1 && _ && _();
    };
  return (0, _.jsxs)(_, {
    className: _(_.ShortTemplate, !_ && _.TwoLine, _),
    onActivate: _,
    onMouseDown: _,
    children: [
      (0, _.jsx)("div", {
        className: _.ShortLogoDimensions,
        children: _,
      }),
      _.personaStatus &&
        (0, _.jsx)("div", {
          className: _(_.AvatarStatus, _),
        }),
      (0, _.jsxs)("div", {
        className: _(_.Content, _ && _.FullWidth),
        children: [
          (0, _.jsxs)("div", {
            className: _.Header,
            children: [
              !!_ &&
                (0, _.jsx)("div", {
                  className: _.Icon,
                  children: _,
                }),
              (0, _.jsx)("div", {
                className: _.Title,
                children: _,
              }),
            ],
          }),
          (0, _.jsx)("div", {
            className: _.Body,
            children: _,
          }),
        ],
      }),
    ],
  });
}
var _ = {
  "duration-app-launch": "800ms",
  loadinganimationiterationcount: "20",
  loadinganimationduration: "1s",
  StandardTemplateContainer: "idFwai-zy3k-",
  "ItemFocusAnim-darkerGrey": "qNZkq-xq0-A-",
  Timestamp: "_-07o-nqduEE-",
  StandardTemplate: "Y1egdlzjZuM-",
  PinnedTemplate: "iw82-kdOxWI-",
  StandardLogoDimensions: "_3-doHa7BKYg-",
  Content: "AVDHUZpgS5s-",
  Header: "KcRuB2soBCc-",
  Icon: "QT7ohlJMav4-",
  Title: "IsJMTXddcFI-",
  StandardNotificationDescription: "-ijDGHOT8O4-",
  StandardNotificationSubText: "bT365XPbYYY-",
  Multiline: "_1ttqRA8IrL4-",
  Count: "XH3OeZ4kxk8-",
  PinnedBody: "_6CsCKL6iob8-",
  AllNotificationsTemplate: "y--alX4sAGs-",
  StandardTemplateDesktop: "_8-XOfZRIS-g-",
  DesktopToastTemplate: "gcny8wiyDe0-",
  PinnedTemplateWeb: "_1n9lI486x3E-",
  PinnedTemplateDesktop: "_7goxf1PWs6E-",
  AppLogo: "LPQKptPLI9o-",
  AppLogoBackgroundImage: "z7WGIZ7aMvU-",
  MarkedRead: "FB5cJ2PdLis-",
  markReadBackground: "IXdOFYdo3nk-",
  Unread: "GbjVqBqhYS0-",
  PlayerNickName: "_5WMyvFyj9IM-",
  FullName: "_8b1WzRtPs0E-",
  IngameTitle: "LA7b2mKtrQQ-",
  OnlineTitle: "_3yjPWD3FLY4-",
  GroupMessageTitle: "NgqPmXzv1KU-",
  GroupMessageUserName: "XQYkn9CKz2A-",
  GroupMessageBody: "U-d7mDQaVqg-",
  GroupMessageIcon: "O91fmNxaNhM-",
  Body: "wFGic39MbMc-",
  FriendInGameAppColor: "G8KcM3cPOFo-",
  WishlistBlurImage: "tv17-vA-z6M-",
  AvatarStatus: "EAmWykiSWHE-",
  IncomingCallToast: "UIkd0eEQLz4-",
  ShortLogoDimensions: "drgem-tdOhw-",
  LoadingTemplate: "_0ilXNZi8yeA-",
  Hide: "AUEtTSpUux0-",
  ShimmerLogo: "ToWX9JjBeko-",
  ShimmerBody: "LBYdMQ-qbE0-",
  ShimmerHeader: "VfKtzM88BAo-",
  loading: "y1ElEVPqy-o-",
  BottomBar: "ZDNe4rWcs40-",
  NewIndicator: "japQ6LFaZNk-",
  AllNotificationsCommentPlus: "zv4yugfEwj4-",
  FriendIndicator: "PWdT6Kxw6LQ-",
  HideButton: "BRZl7o4lYNA-",
  SteamNotificationWrapper: "IzWO-o50u24-",
  BackgroundAnimation: "UQdtbjn5CaI-",
  "ItemFocusAnim-darkerGrey-nocolor": "PD6CSeqdrCA-",
  "ItemFocusAnim-darkGreySettings": "lQ25vKknIbg-",
  "ItemFocusAnim-darkGrey": "DYRmsgpoZ44-",
  "ItemFocusAnim-grey": "HNxenyHveoc-",
  "ItemFocusAnim-translucent-white-10": "_-4uE7EAkdQU-",
  "ItemFocusAnim-translucent-white-20": "gA7gQJvenY8-",
  "ItemFocusAnimBorder-darkGrey": "_3cpSBJr7Nvk-",
  "ItemFocusAnim-green": "w-cr6YC3ZDY-",
  focusAnimation: "BZcQYSdnpH0-",
  hoverAnimation: "_44i2N0J3GZw-",
};
var _ = _(_());
function _(_) {
  switch (_) {
    case 6:
      return (0, _.jsx)(_, {});
    case 11:
      return (0, _.jsx)(_, {});
    default:
      return (0, _.jsx)(_, {});
  }
}
function _(_) {
  let {
      fallbackLogo: _,
      app: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = typeof _?.image == "number",
    _ = _?.display_name ?? "",
    _ = _?.title ?? _?.body,
    _ = _?.title ? _.body : null,
    _ = _(_),
    _ = _ && !_,
    [_, _] = _.default.useState(!1),
    _ = () => _(!0),
    _ = null;
  if (_) _ = _(_, _, _);
  else {
    let _ = _ ? _.ShortLogoDimensions : _.StandardLogoDimensions;
    _ =
      _?.image && !_
        ? (0, _.jsx)("img", {
            className: _,
            src: _.image,
            onError: _,
          })
        : _;
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      displayName: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _("#SteamNotifications_TradeOffer_Title"),
    _ = _
      ? _("#SteamNotifications_TradeOffer_Body_Short", _ ?? "")
      : _("#SteamNotifications_TradeOffer_Body"),
    _ = _("#SteamNotifications_TradeOffer_Description", _ ?? ""),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
var _ = (_) => {
  let {
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _("#SteamNotifications_TradeReversal_Title"),
    _ = _
      ? _("#SteamNotifications_TradeReversal_Body_Short")
      : _("#SteamNotifications_TradeReversal_Body"),
    _ = _("#SteamNotifications_TradeReversal_Description");
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
};
function _(_) {
  let {
      senderName: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _
      ? _("#Notification_GiftReceived_Body_Short", _ ?? "")
      : _("#Notification_GiftReceived_Body"),
    _ = _ ? _("#Notification_GiftReceived_Description", _) : null,
    _ = _("#Notification_GiftReceived_Title"),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _.logo,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      requestorName: _,
      requestorAvatarURL: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = "";
  _ && _.state == 2
    ? (_ = _("#SteamNotifications_FriendInvite_Description_AwaitingResponse"))
    : _ && _.state == 3
      ? (_ = _("#SteamNotifications_FriendInvite_Description_Friends"))
      : _ && (_ = _("#SteamNotifications_FriendInvite_Description"));
  let [_, _] = _.default.useState(!1),
    _ = () => _(!0),
    _ = _;
  if (_ && !_) {
    let _ = _.state == 3 && _ != 1,
      _ = _ ? _.ShortLogoDimensions : _.StandardLogoDimensions;
    _ = (0, _.jsxs)(_, {
      style: {
        position: "relative",
      },
      children: [
        _ &&
          (0, _.jsx)(_, {
            className: _.FriendIndicator,
          }),
        (0, _.jsx)("img", {
          className: _,
          src: _,
          onError: _,
        }),
      ],
    });
  }
  let _ = _ || _("#SteamNotifications_FriendInvite_Body_Generic"),
    _ = !_;
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _("#Notification_FriendInvite_Title"),
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _("#Notification_FriendInvite_Title"),
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !_,
              children: _,
            }),
            !!_ &&
              (0, _.jsx)(_, {
                children: _,
              }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      itemState: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      nUnread: _,
      onHide: _,
    } = _,
    [_, _] = _.default.useState(!1),
    _ = () => _(!0),
    _ = _(_),
    _ = _;
  if (_?.item_data?.icon_url && !_) {
    let _ = `${_.COMMUNITY_CDN_URL}economy/image/${_.item_data.icon_url}`,
      _ = _.item_data.background_color
        ? "#" + _.item_data.background_color
        : null,
      _ = _ ? _.ShortLogoDimensions : _.StandardLogoDimensions;
    _ = (0, _.jsx)(_, {
      style: {
        position: "relative",
      },
      children: (0, _.jsx)("img", {
        className: _,
        style: {
          backgroundColor: _ ?? void 0,
          justifyContent: "center",
        },
        src: _,
        onError: _,
      }),
    });
  }
  let _ = parseInt(_.appid) == 753,
    _ = null;
  if (_ !== void 0 && _ > 1) {
    let _ = _ - 1;
    _
      ? (_ = _("#Notification_Item_RollupMore_Steam", _))
      : _?.app_name
        ? (_ = _("#Notification_Item_RollupMore_GameName", _, _.app_name))
        : (_ = _("#Notification_Item_RollupMore", _));
  } else
    _?.app_name &&
      (_ = _
        ? _.app_name
        : _("#Notification_Item_Single_GameName", _.app_name));
  let _ = _?.item_data?.name
      ? _.item_data.name
      : _("#Notification_Item_Body_Generic"),
    _ = !_ || !_.item_data;
  if (_) {
    let _ = "";
    return (
      _?.app_name
        ? (_ =
            _ > 1
              ? _("#Notification_Item_Body_Short_Plural", _?.app_name)
              : _("#Notification_Item_Body_Short", _?.app_name))
        : (_ = _("#Notification_Item_Body_Generic")),
      (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _("#Notification_ItemAnnouncement_Body"),
        body: _,
      })
    );
  }
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      logo: _,
      bLoading: _,
      ..._,
      children: [
        (0, _.jsx)(_, {
          icon: _,
          title: _("#Notification_ItemAnnouncement_TitleLong"),
          timestamp: _,
          location: _,
          fnRenderTimestamp: _,
        }),
        (0, _.jsx)(_, {
          multiline: !_,
          children: _,
        }),
        !!_ &&
          (0, _.jsx)(_, {
            children: _,
          }),
        _
          ? (0, _.jsx)(_, {
              onHide: _,
            })
          : null,
      ],
    }),
  });
}
function _(_) {
  let {
      fallbackLogo: _,
      app: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(_, _, _),
    _ = !_,
    _ = "";
  return (
    _.state == 1
      ? (_ =
          _ && _?.GetName()
            ? _("#SteamNotification_AsyncGame_Action_Short", _.GetName())
            : _("#SteamNotification_AsyncGame_Action"))
      : _.state == 2 &&
        (_ =
          _ && _?.GetName()
            ? _("#SteamNotification_AsyncGame_Done_Short", _.GetName())
            : _("#SteamNotification_AsyncGame_Done")),
    _
      ? (0, _.jsx)(_, {
          ..._,
          logo: _,
          icon: _.icon,
          title: _("#SteamNotification_AsyncGame_Title"),
          body: _,
        })
      : (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            logo: _,
            bLoading: _,
            ..._,
            children: [
              (0, _.jsx)(_, {
                icon: _,
                title: _("#SteamNotification_AsyncGame_Title"),
                timestamp: _,
                location: _,
                fnRenderTimestamp: _,
              }),
              (0, _.jsx)(_, {
                children: _,
              }),
              (0, _.jsx)(_, {
                children: _?.GetName(),
              }),
              _
                ? (0, _.jsx)(_, {
                    onHide: _,
                  })
                : null,
            ],
          }),
        })
  );
}
function _(_) {
  let {
      title: _,
      body: _,
      logoUrl: _,
      bDataLoading: _,
      icon: _,
      onHide: _,
      location: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onActivate: _,
      personaStatus: _,
    } = _,
    _ = _(_),
    _ = _ ? _.ShortLogoDimensions : _.StandardLogoDimensions,
    _ = (0, _.jsx)(_, {
      style: {
        position: "relative",
      },
      children: (0, _.jsx)("img", {
        className: _,
        style: {
          justifyContent: "center",
        },
        src: _,
      }),
    });
  return _
    ? (0, _.jsx)(_, {
        logo: _,
        icon: _.icon,
        title: _,
        body: _,
        onActivate: _,
        personaStatus: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          bLoading: _,
          onActivate: _,
          personaStatus: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              multiline: !0,
              children: _,
            }),
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      currentUserSteamID: _,
      fallbackLogo: _,
      postedByDisplayName: _,
      postedByAvatarURL: _,
      ownerDisplayName: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      nUnread: _,
      app: _,
      onHide: _,
      commentTitle: _,
      commentBody: _,
    } = _,
    _ = _,
    _ = _(_),
    [_, _] = _.default.useState(!1),
    _ = () => _(!0),
    [_, _] = _(_.bclan_account ? _.owner_steam_id?.GetAccountID() : void 0),
    _ = _(_) ? _ : null,
    _ = _(_) ? _ : null;
  _.comment_type == 10
    ? _.owner_steam_id?.ConvertTo64BitString() == _
      ? _ == 4 && _
        ? (_ = _("#SteamNotifications_Comment_Your_Profile_By", _))
        : (_ = _("#SteamNotifications_Comment_Your_Profile"))
      : _
        ? _ == 4 && _
          ? (_ = _("#SteamNotifications_Comment_Player_Profile_By", _, _))
          : (_ = _("#SteamNotifications_Comment_Player_Profile", _))
        : (_ = _("#SteamNotifications_Comment_Profile"))
    : _.comment_type == 5 && _.json_data?.file_type == 5
      ? _.owner_steam_id?.ConvertTo64BitString() == _
        ? _
          ? (_ = _(
              "#SteamNotifications_Comment_Your_Screenshot_Game",
              _.GetName(),
            ))
          : (_ = _("#SteamNotifications_Comment_Your_Screenshot"))
        : _
          ? (_ = _("#SteamNotifications_Comment_Screenshot_Game", _.GetName()))
          : (_ = _("#SteamNotifications_Comment_Screenshot"))
      : !_ && _.json_data?.title && (_ = _.json_data.title);
  let _ = null;
  _.comment_type == 7 && _.bis_forum && _
    ? (_ = (0, _.jsx)(_, {
        children: _("#SteamNotifications_Comment_NewDiscussion", _),
      }))
    : (_ = (0, _.jsxs)(_, {
        children: ['"', _, '"'],
      }));
  let _ = _("#SteamNotifications_Comment"),
    _ = null;
  if (_ !== void 0 && _ > 1) {
    let _ = "+" + (_ - 1);
    _ == 4
      ? (_ = (0, _.jsx)("div", {
          className: _.AllNotificationsCommentPlus,
          children: _,
        }))
      : (_ = _ + " " + _);
  }
  let _ = _;
  if (!_) {
    let _ = _ ? _.ShortLogoDimensions : _.StandardLogoDimensions;
    if (_ && _(_)) {
      let _ = _.bhas_friend && _ != 1;
      _ = (0, _.jsxs)("div", {
        style: {
          position: "relative",
        },
        children: [
          _ &&
            (0, _.jsx)(_, {
              className: _.FriendIndicator,
            }),
          (0, _.jsx)("img", {
            className: _,
            src: _,
            onError: _,
          }),
        ],
      });
    } else
      _?.avatar_medium_url &&
        (_ = (0, _.jsx)("img", {
          className: _,
          src: _.avatar_medium_url,
          onError: _,
        }));
  }
  return _
    ? (0, _.jsx)(_, {
        ..._,
        logo: _,
        icon: _.icon,
        title: _,
        body: _,
      })
    : (0, _.jsx)(_, {
        children: (0, _.jsxs)(_, {
          logo: _,
          ..._,
          children: [
            (0, _.jsx)(_, {
              icon: _,
              title: _,
              timestamp: _,
              location: _,
              fnRenderTimestamp: _,
            }),
            (0, _.jsx)(_, {
              children: _,
            }),
            _,
            _,
            _
              ? (0, _.jsx)(_, {
                  onHide: _,
                })
              : null,
          ],
        }),
      });
}
function _(_) {
  let {
      app: _,
      fallbackLogo: _,
      data: _,
      location: _,
      icon: _,
      timestamp: _,
      fnRenderTimestamp: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(_, _, _),
    _ = _.appid && !_,
    _ = "",
    _ = null;
  return (
    _
      ? ((_ = _.GetName()),
        _.count == 1
          ? _
            ? (_ = _(
                "#SteamNotifications_Wishlist_OnSale_Single_Short",
                (0, _.jsx)("span", {
                  children: _.GetName(),
                }),
                (0, _.jsx)("span", {
                  style: {
                    color: "#FFFFFF",
                  },
                  children: _.GetBestPurchasePriceFormatted(),
                }),
              ))
            : (_ = _(
                "#SteamNotifications_Wishlist_OnSale_Single",
                (0, _.jsx)("span", {
                  style: {
                    color: "#FFFFFF",
                  },
                  children: _.GetBestPurchasePriceFormatted(),
                }),
              ))
          : _.count == 2
            ? _
              ? (_ = _(
                  "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                  _.GetName(),
                ))
              : (_ = _("#SteamNotifications_Wishlist_OnSale_PlusOne"))
            : _
              ? (_ = _(
                  "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                  _.GetName(),
                  _.count - 1,
                ))
              : (_ = _(
                  "#SteamNotifications_Wishlist_OnSale_PlusMany",
                  _.count - 1,
                )))
      : (_ = _("#SteamNotifications_Wishlist_Generic")),
    _
      ? (0, _.jsx)(_, {
          ..._,
          logo: _,
          icon: _.icon,
          title: _("#SteamNotifications_Wishlist"),
          body: _,
        })
      : (0, _.jsx)(_, {
          children: (0, _.jsxs)(_, {
            logo: _,
            bLoading: _,
            ..._,
            children: [
              (0, _.jsx)(_, {
                icon: _,
                title: _("#SteamNotifications_Wishlist"),
                timestamp: _,
                location: _,
                fnRenderTimestamp: _,
              }),
              (0, _.jsx)(_, {
                multiline: !_,
                children: _,
              }),
              !!_ &&
                (0, _.jsx)(_, {
                  children: _,
                }),
              _
                ? (0, _.jsx)(_, {
                    onHide: _,
                  })
                : null,
            ],
          }),
        })
  );
}
function _(_, _, _ = !1) {
  let [_, _] = _.default.useState(!1),
    _ = () => _(!0);
  return !_ || _
    ? (0, _.jsx)(_, {
        style: {
          position: "relative",
        },
        children: _,
      })
    : _
      ? (0, _.jsx)(_, {
          style: {
            position: "relative",
          },
          children: (0, _.jsx)("img", {
            src: _?.GetAssets()?.GetCommunityIconURL(),
            className: _.ShortLogoDimensions,
            onError: _,
          }),
        })
      : (0, _.jsxs)(_, {
          style: {
            position: "relative",
          },
          children: [
            (0, _.jsx)("img", {
              className: _(_.WishlistBlurImage),
              src: _?.GetAssets()?.GetCommunityIconURL(),
              onError: _,
            }),
            (0, _.jsx)("img", {
              src: _?.GetAssets()?.GetCommunityIconURL(),
              onError: _,
              style: {
                position: "absolute",
                left: 7,
                top: 7,
                height: 32,
                width: 32,
              },
            }),
          ],
        });
}
function _(_) {
  let _ = (_) => {
      _.stopPropagation(), _.preventDefault();
    },
    _ = (_) => {
      _.onHide(), _.stopPropagation(), _.preventDefault();
    };
  return (0, _.jsx)("div", {
    className: _.HideButton,
    onClick: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {}),
  });
}
function _(_) {
  return (0, _.jsx)("div", {
    className: _.SteamNotificationWrapper,
    children: _.children,
  });
}
var _ = _(_()),
  _ = _(_());
var _ = _(_(), 1);
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
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
              language: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              type: {
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
      return "CSteamEngine_UpdateTextFilterDictionary_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
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
              language: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              type: {
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
      return "CSteamEngine_GetTextFilterDictionary_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.dictionary || _(_._()),
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
              dictionary: {
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
      return "CSteamEngine_GetTextFilterDictionary_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.language || _(_._()),
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
              language: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              type: {
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
      return "CSteamEngine_TextFilterDictionaryChanged_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.pid || _(_._()),
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
              pid: {
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
      return "CSteamEngine_GetGameIDForPID_Request";
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
      return "CSteamEngine_GetGameIDForPID_Response";
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
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              should_handle: {
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
      return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.search_term || _(_._()),
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
              search_term: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              max_results: {
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
      return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
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
              appids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
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
      return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
    }
  },
  _;
((_) => {
  _.UpdateTextFilterDictionaryHandler = {
    name: "SteamEngine.UpdateTextFilterDictionary#1",
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
            _.UpdateTextFilterDictionaryHandler,
            _,
          )
    );
  }
  _.RegisterForUpdateTextFilterDictionary = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamEngine.UpdateTextFilterDictionary#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.UpdateTextFilterDictionary = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamEngine.UpdateTextFilterDictionary#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgUpdateTextFilterDictionary = _),
    (_.GetTextFilterDictionaryHandler = {
      name: "SteamEngine.GetTextFilterDictionary#1",
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
        : _.SendMsg("SteamEngine.GetTextFilterDictionary#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetTextFilterDictionary = _;
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
        : _.SendMsg("SteamEngine.GetTextFilterDictionary#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgGetTextFilterDictionary = _),
    (_.NotifyTextFilterDictionaryChangedHandler = {
      name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
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
            _.NotifyTextFilterDictionaryChangedHandler,
            _,
          )
    );
  }
  _.RegisterForNotifyTextFilterDictionaryChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.NotifyTextFilterDictionaryChanged = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamEngine.NotifyTextFilterDictionaryChanged#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgNotifyTextFilterDictionaryChanged = _),
    (_.GetGameIDForPIDHandler = {
      name: "SteamEngine.GetGameIDForPID#1",
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
        : _.SendMsg("SteamEngine.GetGameIDForPID#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  _.GetGameIDForPID = _;
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
        : _.SendMsg("SteamEngine.GetGameIDForPID#1", _(_, _), _, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (_.SendMsgGetGameIDForPID = _),
    (_.SetOverlayEscapeKeyHandlingHandler = {
      name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
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
            _.SetOverlayEscapeKeyHandlingHandler,
            _,
          )
    );
  }
  _.RegisterForSetOverlayEscapeKeyHandling = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamEngine.SetOverlayEscapeKeyHandling#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SetOverlayEscapeKeyHandling = _;
  function _(_, _) {
    return (
      (_ = _ || _().GetDefaultTransport()),
      _ == null
        ? (console.error(
            "Transport Error: no transport is available for request",
          ),
          !1)
        : _.SendNotification(
            "SteamEngine.SetOverlayEscapeKeyHandling#1",
            _(_, _),
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  (_.SendMsgSetOverlayEscapeKeyHandling = _),
    (_.SearchAppDataCacheByStoreKeywordsHandler = {
      name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
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
            "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SearchAppDataCacheByStoreKeywords = _;
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
            "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
            _(_, _),
            _,
            {
              ePrivilege: 1,
              eClientExecutionSite: 2,
            },
          )
    );
  }
  _.SendMsgSearchAppDataCacheByStoreKeywords = _;
})((_ ||= {}));
function _() {
  return _.IN_MOBILE ? _ : _();
}
function _(_) {
  if (_ === "") return !1;
  try {
    return new RegExp("\\b(" + _ + ")\\b", "ugi"), !0;
  } catch {
    return (
      console.log(`'${_}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var _ = 3600,
  _ = "(1)",
  _ = class {
    m_WebUIServiceTransport;
    m_unAccountID;
    m_Transport = null;
    m_Storage = null;
    m_TextFilterPreferences = {
      eTextFilterSetting: 3,
      bIgnoreFriends: !1,
    };
    m_TextFilterWords;
    m_mapPlayerCache = new Map();
    m_strBannedWords = "";
    m_strProfanityWords = "";
    m_strCleanWords = "";
    m_strBannedPattern = "";
    m_strCleanPattern = "";
    m_regexBannedWords = null;
    m_regexCleanWords = null;
    m_bShownFilterTip = !1;
    m_bInitialized = !1;
    m_bFilterChangedWhileLoading = !1;
    m_bOngoingLoad = !1;
    m_DataAccess;
    constructor(_) {
      _(this);
      let _ = new _();
      (this.m_TextFilterPreferences = {
        eTextFilterSetting: _.text_filter_setting(),
        bIgnoreFriends: _.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new _()),
        (this.m_DataAccess = _);
    }
    async Init(_ = 0, _ = null, _ = null) {
      (this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = _),
        (this.m_unAccountID = _),
        (this.m_Transport = _),
        (this.m_Storage = _),
        (this.m_strBannedWords = ""),
        (this.m_strProfanityWords = ""),
        (this.m_strCleanWords = ""),
        this.InitSteamEngineLanguages(),
        await this.LoadFilter(),
        await this.LoadTextFilterPreferences(),
        await this.LoadTextFilterWords(),
        await this.RequestUpdatedSettings(),
        await _(() => !this.m_bOngoingLoad),
        await this.InitFiltersWithRetry();
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
          _.NotifyTextFilterDictionaryChangedHandler,
          this.OnTextFilterDictionaryChanged,
        ),
        this.InitSteamEngineLanguage(_.LANGUAGE),
        _.LANGUAGE !== "english" && this.InitSteamEngineLanguage("english"));
    }
    OnTextFilterDictionaryChanged(_) {
      return (
        this.m_bInitialized
          ? this.InitFiltersWithRetry()
          : (this.m_bFilterChangedWhileLoading = !0),
        1
      );
    }
    async InitFiltersWithRetry() {
      do
        (this.m_bFilterChangedWhileLoading = !1),
          (this.m_bInitialized = !1),
          (this.m_bOngoingLoad = !0),
          await this.LoadLanguages(),
          this.OnFilterDataChanged(),
          (this.m_bInitialized = !0);
      while (this.m_bFilterChangedWhileLoading);
      this.m_bOngoingLoad = !1;
    }
    InitSteamEngineLanguage(_) {
      let _ = _.Init(_);
      _.Body().set_language(_),
        _.Body().set_type("profanity"),
        _.SendMsgUpdateTextFilterDictionary(_, this.m_WebUIServiceTransport),
        _.Body().set_type("banned"),
        _.SendMsgUpdateTextFilterDictionary(_, this.m_WebUIServiceTransport);
    }
    GetSteamEngineTextFilterDictionary(_, _) {
      let _ = _.Init(_);
      return (
        _.Body().set_language(_),
        _.Body().set_type(_),
        _.SendMsgGetTextFilterDictionary(_, this.m_WebUIServiceTransport)
      );
    }
    GetStorageKey(_) {
      return _ + "_" + this.m_unAccountID;
    }
    async LoadTextFilterPreferences() {
      if (this.m_Storage) {
        let _ = await this.m_Storage.GetObject(
          this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
        );
        _ && (this.m_TextFilterPreferences = _);
      }
    }
    SaveTextFilterPreferences() {
      this.m_Storage &&
        this.m_Storage.StoreObject(
          this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
          this.m_TextFilterPreferences,
        );
    }
    ObfuscateString(_) {
      try {
        let _ = new TextEncoder().encode(_ + _);
        return _.fromByteArray(_);
      } catch {
        return "";
      }
    }
    DeobfuscateString(_) {
      try {
        let _ = _.toByteArray(_),
          _ = new TextDecoder().decode(_);
        return _.startsWith(_)
          ? ((_ = _.slice(_.length)), _)
          : (console.log(
              "DeobfuscateString given invalid base64 data, ignoring: " + _,
            ),
            "");
      } catch {
        return "";
      }
    }
    async LoadObfuscatedString(_) {
      if (this.m_Storage) {
        let _ = await this.m_Storage.GetString(this.GetStorageKey(_));
        if (_) return this.DeobfuscateString(_);
      }
      return null;
    }
    async SaveObfuscatedString(_, _) {
      this.m_Storage &&
        this.m_Storage.StoreString(
          this.GetStorageKey(_),
          this.ObfuscateString(_),
        );
    }
    async LoadTextFilterWords() {
      let _ = await this.LoadObfuscatedString(
        "CTextFilterStore_TextFilterWords",
      );
      if (_)
        try {
          this.m_TextFilterWords = _.fromObject(JSON.parse(_));
        } catch {
          console.warn("Error parsing cached text filter word list", _),
            (this.m_TextFilterWords = new _());
        }
    }
    SaveTextFilterWords() {
      this.SaveObfuscatedString(
        "CTextFilterStore_TextFilterWords",
        JSON.stringify(this.m_TextFilterWords.toObject()),
      );
    }
    async LoadFilter() {
      let _ = await this.LoadObfuscatedString(
          "CTextFilterStore_strBannedPattern",
        ),
        _ = await this.LoadObfuscatedString("CTextFilterStore_strCleanPattern");
      _ != null && _ != null && this.BRebuildFilter(_, _);
    }
    SaveFilter() {
      this.SaveObfuscatedString(
        "CTextFilterStore_strBannedPattern",
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          "CTextFilterStore_strCleanPattern",
          this.m_strCleanPattern,
        );
    }
    async RequestUpdatedSettings() {
      let _ = new _();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let _ = _.Init(_);
            _ = (await _.GetCommunityPreferences(this.m_Transport, _))
              .Body()
              .preferences();
          } else {
            let _ = {
                sessionid: _.SESSIONID,
                origin: _(),
              },
              _ = await _.default.get(
                _.COMMUNITY_BASE_URL + "textfilter/ajaxgetcommunitypreferences",
                {
                  params: _,
                  withCredentials: !0,
                },
              );
            _ = _.fromObject(_.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(_),
        _.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let _ = new _();
        if (_.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let _ = _.Init(_);
              _ = (await _.GetTextFilterWords(this.m_Transport, _))
                .Body()
                .words();
            } else {
              let _ = {
                  sessionid: _.SESSIONID,
                  origin: _(),
                },
                _ = await _.default.get(
                  _.COMMUNITY_BASE_URL +
                    "textfilter/ajaxgettextfiltercustomwords",
                  {
                    params: _,
                    withCredentials: !0,
                  },
                );
              _ = _.fromObject(_.data.words);
            }
          } catch {}
        this.UpdateTextFilterWords(_);
      }
    }
    UpdateCommunityPreferences(_) {
      let _ = !1;
      _.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          _.text_filter_setting()),
        (_ = !0)),
        _.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            _.text_filter_ignore_friends()),
          (_ = !0)),
        _ && this.SaveTextFilterPreferences();
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(_) {
      (this.m_TextFilterWords = _), this.SaveTextFilterWords();
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    async LoadLanguages(_ = 15) {
      (this.m_strBannedWords = ""),
        (this.m_strProfanityWords = ""),
        (this.m_strCleanWords = "");
      try {
        await this.LoadLanguage(_.LANGUAGE),
          _.LANGUAGE !== "english" && (await this.LoadLanguage("english"));
      } catch (_) {
        this.m_nLoadLanguagesRetryTimeout &&
          (_(
            !this.m_nLoadLanguagesRetryTimeout,
            "Got two concurrent calls to TextFilteringStore.LoadLanguages",
          ),
          window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
          (this.m_nLoadLanguagesRetryTimeout = void 0)),
          (_ = Math.min(_ * 2, _)),
          console.warn("LoadLanguages caught", _, "retry in", _, "seconds"),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(async () => {
            (this.m_nLoadLanguagesRetryTimeout = void 0),
              await this.LoadLanguages(_),
              this.OnFilterDataChanged();
          }, _ * 1e3));
      }
    }
    async LoadLanguage(_) {
      let _ = "1",
        _ = "",
        _ = !1;
      if (this.m_WebUIServiceTransport.BIsValid())
        try {
          {
            let _ = await this.GetSteamEngineTextFilterDictionary(_, "banned");
            this.m_strBannedWords += _.Body().dictionary();
          }
          {
            let _ = await this.GetSteamEngineTextFilterDictionary(
              _,
              "profanity",
            );
            this.m_strProfanityWords += _.Body().dictionary();
          }
          _ = !0;
        } catch (_) {
          console.warn("LoadLanguage caught while loading from cache:", _);
        }
      if (!_) {
        _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${_}&v=${_}&origin=${_()}`;
        {
          let _ = await _.default.get(_);
          this.m_strBannedWords += _.data;
        }
        _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${_}&v=${_}&origin=${_()}`;
        {
          let _ = await _.default.get(_);
          this.m_strProfanityWords += _.data;
        }
      }
      _ = `${_.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${_}&v=${_}&origin=${_()}`;
      {
        let _ = await _.default.get(_);
        this.m_strCleanWords += _.data;
      }
    }
    CreatePattern(_) {
      let _ = _.filter(function (_) {
        return _(_);
      });
      return _.length > 0 ? "\\b(" + _.join("|") + ")\\b" : "";
    }
    OnFilterDataChanged() {
      let _ = new RegExp(/\s*[\r\n]+\s*/g),
        _ = [],
        _ = [];
      switch (this.m_TextFilterPreferences.eTextFilterSetting) {
        case 0:
          break;
        case 3:
          break;
        case 2:
          _ = _.concat(this.m_strBannedWords.split(_));
          break;
        default:
          _ = _.concat(
            this.m_strProfanityWords.split(_),
            this.m_strBannedWords.split(_),
          );
          break;
      }
      (_ = _.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (_ = this.m_strCleanWords.split(_)),
        (_ = _.concat(this.m_TextFilterWords.text_filter_custom_clean_words()));
      let _ = this.CreatePattern(_),
        _ = this.CreatePattern(_);
      _ != "" && (_ = "^(" + _ + ")$"),
        this.BRebuildFilter(_, _) && this.SaveFilter();
    }
    BRebuildFilter(_, _) {
      if (_ === this.m_strBannedPattern && _ === this.m_strCleanPattern)
        return !1;
      if (
        ((this.m_regexBannedWords = null),
        (this.m_strBannedPattern = _),
        _ !== "")
      )
        try {
          this.m_regexBannedWords = new RegExp(_, "ugi");
        } catch (_) {
          console.warn("Couldn't compile textfilter bannedwords regex"),
            _().ReportError(
              new Error(`Couldn't compile textfilter bannedwords regex: ${_}`),
            ),
            (this.m_strBannedPattern = "");
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = _),
        _ !== "")
      )
        try {
          this.m_regexCleanWords = new RegExp(_, "ugi");
        } catch (_) {
          console.warn("Couldn't compile textfilter cleanwords regex"),
            _().ReportError(
              new Error(`Couldn't compile textfilter cleanwords regex: ${_}`),
            ),
            (this.m_strCleanPattern = "");
        }
      return !0;
    }
    CreateProfanityReplacement(_) {
      return "♥".repeat(_);
    }
    BHasFilter() {
      return this.m_regexBannedWords != null;
    }
    BShownFilterTip() {
      return this.m_bShownFilterTip;
    }
    SetFilterTipShown(_) {
      this.m_bShownFilterTip = _;
    }
    FilterText(_, _) {
      if (!this.m_regexBannedWords) return _;
      let _ = 0;
      return (
        typeof _ == "string" && _ !== ""
          ? (_ = new _(_).GetAccountID())
          : typeof _ == "number" && (_ = _),
        !_ ||
        _ == this.m_unAccountID ||
        (_ &&
          this.m_TextFilterPreferences.bIgnoreFriends &&
          this.m_DataAccess.BIsFriend(_))
          ? _
          : _.replace(this.m_regexBannedWords, (_) =>
              this.m_regexCleanWords && _.search(this.m_regexCleanWords) == 0
                ? _
                : this.CreateProfanityReplacement(_.length),
            )
      );
    }
  };
_([_], _.prototype, "m_TextFilterPreferences", 2),
  _([_], _.prototype, "m_mapPlayerCache", 2),
  _([_], _.prototype, "m_regexBannedWords", 2),
  _([_], _.prototype, "m_regexCleanWords", 2),
  _([_], _.prototype, "m_bInitialized", 2),
  _([_], _.prototype, "m_bFilterChangedWhileLoading", 2),
  _([_], _.prototype, "m_bOngoingLoad", 2),
  _([_], _.prototype, "Init", 1),
  _([_], _.prototype, "OnTextFilterDictionaryChanged", 1),
  _([_], _.prototype, "UpdateCommunityPreferences", 1),
  _([_], _.prototype, "BRebuildFilter", 1);
var _;
function _() {
  if (!_) {
    let _ = new Set(),
      _ = {
        sessionid: _.SESSIONID,
        origin: _(),
      };
    _.default
      .get(_.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
        params: _,
        withCredentials: !0,
      })
      .then((_) => {
        for (let _ of _.data.friendslist?.friends ?? [])
          _(_.efriendrelationship) && _.add(new _(_.ulfriendid).GetAccountID());
      }),
      (_ = (_) => _.has(_));
  }
  return _;
}
var _ = null,
  _ = !1;
function _() {
  return (
    _ ||
      (_ = new _({
        BIsFriend: _(),
      })),
    _
  );
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _(() => _().m_bInitialized);
  return (
    !_ && !_ && ((_ = !0), _.Init(_.accountid, _, _).finally(() => (_ = !1))),
    [_, _]
  );
}
var _ = _(_());
function _(_) {
  let _ = null;
  return _(_) ? (_ = _) : _(_) ? (_ = _) : _[_] && (_ = _[_]), _;
}
function _(_) {
  let { rollup: _, uimode: _, location: _ } = _,
    _ = _(_.type);
  return _
    ? (0, _.jsx)(_, {
        controller: "notification",
        method: _(_),
        submethod: _(_),
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_.item.notification_type, _.item.body_data),
    _ = typeof _?.image == "number",
    [_] = _(_ ? _.image : 0, {
      include_assets: !0,
    }),
    _ = _(_.type).replace("k_ESteamNotificationType_", "")?.toLowerCase(),
    _ = _(_?.link ?? "#", _),
    _ = () =>
      _(() => {
        _?.link && _ && window.location.assign(_);
      }, _.item),
    _ = (_) => _(() => {}, _.item, _);
  return (0, _.jsx)("a", {
    href: _?.link ? _ : "#",
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      icon: _(_.type),
      onActivate: _,
      fallbackLogo: (0, _.jsx)(_, {}),
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      app: _,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = `${_.COMMUNITY_BASE_URL}my/gamenotifications/`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    [_] = _(_.appid, {
      include_assets: !0,
    });
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      icon: (0, _.jsx)(_, {}),
      fallbackLogo: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      app: _,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      steamid: _,
      url: _,
      strTitleLoc: _,
      strBodyLoc: _,
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    { data: _ } = _(_),
    _ = (_) => _(() => {}, _.item, _),
    _ = () => _(() => window.location.assign(_), _.item);
  if (!_) return null;
  let _ = !_,
    _ = _(_, _?.m_strPlayerName ?? ""),
    _ = _(_, _?.m_strPlayerName ?? "");
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      title: _,
      body: _,
      bDataLoading: _,
      logoUrl: _?.avatar_url_medium,
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let _ = _(_.rollup.type, _.rollup.item.body_data);
  if (!_) return null;
  let { strTitleLoc: _, strBodyLoc: _, strUrl: _, steamid: _ } = _;
  return !_ || !_ || !_
    ? null
    : (0, _.jsx)(_, {
        steamid: _,
        url: _,
        strTitleLoc: _,
        strBodyLoc: _,
        ..._,
      });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = _(_),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/tradeoffers`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _.InitFromAccountID(_),
    { data: _ } = _(_.GetAccountID());
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      displayName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
var _ = (_) => {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = `${_.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: () => _(() => window.location.assign(_), _.item),
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
};
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/inventory/#pending_gifts`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    _ = _.InitFromAccountID(_),
    { data: _ } = _(_.GetAccountID());
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      logo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      senderName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    { data: _ } = _(_.responder_steamid),
    _ = _.package_id > 0 ? _.package_id : _.bundle_id,
    _ = _.package_id > 0 ? 1 : 2,
    [_] = _(_, _, {
      include_basic_info: !0,
      include_assets: !0,
    }),
    _ = _ ? `app/${_.GetAppID()}` : "",
    _ = `${_.STORE_BASE_URL}${_}`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = !_ || !_,
    _ = _("#SteamNotifications_RequestedGameAddedTitle"),
    _ = _
      ? _("#SteamNotifications_RequestedGameAddedBody", _.GetName() ?? "")
      : "";
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      title: _,
      body: _,
      bDataLoading: _,
      logoUrl: _?.avatar_url_medium,
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _(_.item, _, _),
    _ = _(_),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/inventory`;
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: (_) => _(() => {}, _.item, _),
    children: (0, _.jsx)(_, {
      icon: (0, _.jsx)(_, {}),
      fallbackLogo: (0, _.jsx)(_, {}),
      onActivate: () => _(() => window.location.assign(_), _.item),
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      itemState: _,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(),
    _ = `${_.COMMUNITY_BASE_URL}profiles/${_}/friends/pending`,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => _(() => {}, _.item, _),
    _ = _(_),
    { data: _ } = _(_.requestorID);
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      fallbackLogo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      requestorAvatarURL: _?.avatar_url_medium,
      requestorName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      onHide: _,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    _ = _(),
    _ = _.COMMUNITY_BASE_URL + _.url,
    _ = () => _(() => window.location.assign(_), _.item),
    _ = (_) => {
      _(() => {}, _.item, _);
    },
    _ = _(_) ? _?.account_steam_id?.GetAccountID() : null,
    { data: _ } = _(_),
    _ = _(_) ? _?.owner_steam_id?.GetAccountID() : null,
    { data: _ } = _(_),
    [_] = _(_.json_data?.app_id, {
      include_assets: !0,
    }),
    [_, _] = _(),
    _ = _ ? _.FilterText(_.account_steam_id.GetAccountID(), _.title) : "",
    _ = _ ? _.FilterText(_.account_steam_id.GetAccountID(), _.comment) : "";
  return (0, _.jsx)("a", {
    href: _,
    onMouseDown: _,
    children: (0, _.jsx)(_, {
      fallbackLogo: (0, _.jsx)(_, {}),
      icon: (0, _.jsx)(_, {}),
      onActivate: _,
      location: _,
      currentUserSteamID: _,
      eUIMode: _,
      data: _,
      timestamp: _.timestamp,
      nUnread: _.rgunread.length,
      postedByAvatarURL: _?.avatar_url_medium,
      postedByDisplayName: _?.m_strPlayerName,
      ownerDisplayName: _?.m_strPlayerName,
      bNewIndicator: _(_.item),
      app: _,
      onHide: _,
      commentTitle: _,
      commentBody: _,
      bLoading: !_,
    }),
  });
}
function _(_) {
  let {
      rollup: _,
      onNotificationClick: _,
      location: _,
      uimode: _,
      onHide: _,
    } = _,
    _ = _(_),
    [_] = _(_.appid, {
      include_assets: !0,
    }),
    [_, _] = (0, _.useState)(""),
    _ = _();
  return (
    (0, _.useEffect)(() => {
      if (_.count > 1 && _.appids?.length)
        return _(
          _.STORE_BASE_URL +
            `wishlist/profiles/${_}/?wng=${_.appids.toString()}#sort=discount`,
        );
      if (_) return _(_.GetStorePageURL());
      let _ = _.appid ? `?appid=${_.appid}` : "";
      _(_.STORE_BASE_URL + `wishlist/profiles/${_}/${_}#sort=discount`);
    }, [_, _, _]),
    (0, _.jsx)("a", {
      href: _,
      onMouseDown: (_) => _(() => {}, _.item, _),
      children: (0, _.jsx)(_, {
        fallbackLogo: (0, _.jsx)(_, {}),
        icon: (0, _.jsx)(_, {}),
        onActivate: () => _(() => window.location.assign(_), _.item),
        app: _,
        location: _,
        data: _,
        timestamp: _.timestamp,
        nUnread: _.rgunread.length,
        eUIMode: _,
        bNewIndicator: _(_.item),
        onHide: _,
      }),
    })
  );
}
function _(_) {
  let { url: _, count: _, icon: _, strLocToken: _, eFeature: _ } = _,
    _ = _(_);
  return !_ || _
    ? null
    : (0, _.jsx)("a", {
        href: _,
        className: _.WebPinnedNotification,
        children: (0, _.jsx)(_, {
          icon: (0, _.jsx)(_, {}),
          count: _,
          onActivate: () => window.location.assign(_),
          strLocToken: _,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var _ = {
  3: _,
  8: _,
  5: _,
  4: _,
  2: _,
  9: _,
  12: _,
  22: _,
  29: _,
};
var _ = _(_());
var _ = _(_()),
  _ = class _ extends _.Component {
    static GetScrollableClassname() {
      return "vt-scrollable";
    }
    m_observer = null;
    m_refElement = _.createRef();
    m_elTracked = null;
    m_bPreviouslyIntersecting = !1;
    BTriggerOnce() {
      return (this.props.trigger || "once") == "once";
    }
    GetBoundingClientRect() {
      return this.m_refElement.current
        ? this.m_refElement.current.getBoundingClientRect()
        : null;
    }
    DestroyObserver() {
      this.m_observer &&
        (this.m_observer.disconnect(),
        (this.m_observer = null),
        (this.m_elTracked = null));
    }
    componentWillUnmount() {
      this.DestroyObserver();
    }
    componentDidMount() {
      this.UpdateObserver(null);
    }
    componentDidUpdate(_) {
      this.UpdateObserver(_);
    }
    UpdateObserver(_) {
      if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
      this.m_observer &&
        _ &&
        (_.rootMargin != this.m_observer.rootMargin ||
          _.thresholds != this.m_observer.thresholds) &&
        this.DestroyObserver();
      let _ = this.m_refElement.current;
      if (
        (this.m_observer &&
          _ != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && _)
      ) {
        let _ = {
          root: this.FindScrollableAncestor(_),
        };
        this.props.rootMargin && (_.rootMargin = this.props.rootMargin),
          this.props.thresholds && (_.threshold = this.props.thresholds),
          (this.m_observer = _(_, this.OnIntersection, _));
      }
      this.m_observer &&
        _ &&
        _ != this.m_elTracked &&
        (this.m_observer.observe(_), (this.m_elTracked = _));
    }
    FindScrollableAncestor(_) {
      return _(_, (_) => {
        let _ = this.props.horizontal
          ? window.getComputedStyle(_).overflowX
          : window.getComputedStyle(_).overflowY;
        return !!(
          _ == "scroll" ||
          _ == "auto" ||
          _.classList.contains(_.GetScrollableClassname())
        );
      });
    }
    OnIntersection(_, _) {
      let _ = !1;
      for (let _ of _)
        if (_.isIntersecting) {
          _ = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != _ &&
        ((this.m_bPreviouslyIntersecting = _),
        this.props.onVisibilityChange && this.props.onVisibilityChange(_),
        _ && this.BTriggerOnce() && this.DestroyObserver());
    }
    render() {
      let {
        onVisibilityChange: _,
        rootMargin: _,
        trigger: _,
        horizontal: _,
        ..._
      } = this.props;
      return (0, _.jsx)("div", {
        ref: this.m_refElement,
        ..._,
        children: this.props.children,
      });
    }
  };
_([_], _.prototype, "OnIntersection", 1);
var _ = _;
var _ = _(_()),
  _ = new _(),
  _ = _(function (_) {
    let { bResponsiveHeader: _, notifications: _ } = _;
    _.m_bLoaded || _.ProcessNewNotificationPayload(_),
      _.default.useEffect(() => {
        _ && !_.m_bLoaded && _.ProcessNewNotificationPayload(_);
      }, [_]);
    let _ = _();
    (0, _.useEffect)(() => {
      _.setTransport(_), (window.RefreshSteamNotifications = () => _(_));
    }, [_]);
    let _ = _();
    return _
      ? (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        })
      : (0, _.jsx)(_, {
          nTotalUnviewed: _.nUnviewed,
        });
  });
function _() {
  return _(() => ({
    notifications: _.m_rgNotificationRollups,
    summary: _.m_summary,
    loaded: _.m_bLoaded,
    nUnviewed: _.m_nUnviewed,
  }));
}
function _() {
  let _ = _(),
    _ = _(),
    { data: _ } = _(_),
    _ = _(),
    _ = _?.settings;
  return _.notifications.filter((_) => !_(_.type, _, _) && !_(_.item));
}
function _(_) {
  let { nTotalUnviewed: _ } = _,
    _ = _.default.useRef(null),
    _ = _(),
    [_, _] = _.default.useState(_.AnimateBell);
  _.default.useEffect(() => {
    _.current ||
      ((_.current = _(
        (0, _.jsx)(_, {
          popupRef: _,
        }),
        document.getElementById("green_envelope_menu_root"),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: "GreenEnvelopeMenu",
        },
      )),
      _.current.Hide());
    let _ = document.getElementById("header_notification_link");
    _ && (_.style.cssText = "background-color: rgba(0,0,0,0)"),
      window.setTimeout(() => _(null), 2e3);
  }, []);
  let _ = () => {
      _.current?.visible ||
        (_.current?.Show(),
        _.findIndex((_) => !_.item.viewed) != -1 && _.MarkAllItemsViewed());
    },
    _ = _.default.useCallback(
      (_) => {
        !_ && _.current?.visible && _.current.Hide();
      },
      [_],
    );
  return (0, _.jsx)(_, {
    trigger: "repeated",
    onVisibilityChange: _,
    children: (0, _.jsx)("button", {
      onClick: _,
      _: "green_envelope_menu_root",
      className: _(_.NotificationsButton, _ ? _.Green : _.Grey, _),
      children: (0, _.jsx)(_, {
        className: _.SVGNotifications,
        "aria-label": _("#NotificationsMenu_Title"),
      }),
    }),
  });
}
var _ = (_) => {
    let { popupRef: _ } = _,
      _ = _.default.useRef(null),
      [_, _] = _.default.useState(!1);
    _.default.useEffect(() => {
      _(_.current != null && _.current?.scrollHeight > _.current?.clientHeight);
    }, [_.current?.scrollHeight, _]);
    let _ = _ ? void 0 : _.MenuScrollbarHidden;
    return (0, _.jsxs)("div", {
      className: _.NotificationsMenu,
      onClick: () => _?.current?.Hide(),
      children: [
        (0, _.jsx)(_, {}),
        (0, _.jsxs)("div", {
          className: _(_.NotificationsMenuScrollable, _),
          ref: _,
          children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
        }),
      ],
    });
  },
  _ = () => {
    let _ = `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications`;
    return (0, _.jsxs)("div", {
      className: _(_.NotificationHeader),
      children: [
        (0, _.jsx)("div", {
          className: _.AllNotificationsTitle,
          children: _("#NotificationsMenu_Title"),
        }),
        (0, _.jsx)("a", {
          href: _,
          children: (0, _.jsx)("div", {
            className: _.AllNotificationsButton,
            children: _("#NotificationsMenu_ViewAll"),
          }),
        }),
      ],
    });
  },
  _ = () => {
    let _ = `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications`;
    return (0, _.jsx)("div", {
      className: _(_.NotificationHeader, _.ResponsiveViewAll),
      children: (0, _.jsx)("a", {
        href: _,
        children: (0, _.jsx)("div", {
          className: _.AllNotificationsButton,
          children: _("#NotificationsMenu_ViewAll"),
        }),
      }),
    });
  };
function _(_, _, _) {
  !_.read &&
    (!_ || _.button == 0 || _.button == 1) &&
    _.notification_id &&
    _.MarkItemRead(_.notification_id),
    _();
}
function _() {
  let _ = _();
  return _.length == 0
    ? null
    : (0, _.jsx)("div", {
        className: _.NotificationsMenuEntriesContainer,
        children: _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              rollup: _,
              onNotificationClick: _,
              uimode: 3,
              location: 3,
            },
            _,
          ),
        ),
      });
}
var _ = [
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/inventory/#pending_gifts`,
    countItem: "pending_gifts",
    icon: _,
    strLocToken: "#Notification_NewGiftsPinned_Body",
    feature: 1,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/home/invites`,
    countItem: "pending_invites",
    icon: _,
    strLocToken: "#Notification_FriendInvitePinned_Body",
    feature: 4,
  },
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/notifications#comments`,
    countItem: "comments",
    icon: _,
    strLocToken: "#Notification_NewCommentPinned_Body",
    feature: 2,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/inventory`,
    countItem: "inventory_items",
    icon: _,
    strLocToken: "#Notification_NewItemAnnouncementPinned_Body",
    feature: 3,
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/tradeoffers`,
    countItem: "trade_offers",
    icon: _,
    strLocToken: "#Notification_NewTradeOffersPinned_Body",
    feature: 6,
  },
  {
    fnUrl: () =>
      `${_.COMMUNITY_BASE_URL}profiles/${_.steamid}/gamenotifications`,
    countItem: "async_game_updates",
    icon: _,
    strLocToken: "#Notification_NewAsyncGamePinned_Body",
  },
  {
    fnUrl: () => `${_.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: "moderator_messages",
    icon: _,
    strLocToken: "#Notification_NewModeratorMessagePinned_Body",
    feature: 2,
  },
  {
    fnUrl: () => `${_.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: "help_request_replies",
    icon: _,
    strLocToken: "#Notification_NewHelpRequestRepliesPinned_Body",
  },
  {
    fnUrl: () =>
      `${_.STORE_BASE_URL}account/familymanagement/join?ft=${_.steamid}`,
    countItem: "family_invites",
    icon: _,
    strLocToken: "#Notification_FamilyInvitePinned_Body",
  },
];
function _() {
  let _ = _();
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          url: _.fnUrl(),
          count: _.summary[_.countItem],
          icon: _.icon,
          strLocToken: _.strLocToken,
          eFeature: _.feature,
        },
        _.countItem,
      ),
    ),
  });
}
function _() {
  return (0, _.jsxs)("div", {
    className: _.EmptyNotificationsCtn,
    children: [
      (0, _.jsx)("div", {
        className: _.EmptyNotificationsTitle,
        children: _("#NotificationsList_EmptyTitle_New"),
      }),
      (0, _.jsx)("div", {
        className: _.EmptyNotificationsBody,
        children: _("#NotificationsList_EmptyBody"),
      }),
    ],
  });
}
var _ = _;
async function _(_) {
  let _ = null;
  try {
    _ = await _(_, _.steamid, _(_.LANGUAGE), void 0, !1, !1);
  } catch {}
  _ && _.ProcessNewNotificationPayload(_);
}
export { _ as GreenEnvelope, _ as default, _ as useSteamNotifications };
