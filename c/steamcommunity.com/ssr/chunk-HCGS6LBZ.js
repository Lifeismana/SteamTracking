var _ = _(_(), 1);
var _ = "N4DF-pjLw8A-";
var _ = "QRg-pmKREH0-";
var _ = _(_(), 1);
function _(_) {
  let { details: _, className: _ } = _;
  return (0, _.useMemo)(() => {
    if (_.file_type == 1) return null;
    let _ = _.star_rating || -1,
      _ = [!1, !1, !1, !1, !1];
    for (let _ = 0; _ < _; ++_) _[_] = !0;
    return (0, _.jsx)(_, {
      className: _(_, _ == -1 && _),
      children: _.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            filled: _,
            className: _ ? _ : "",
          },
          _,
        ),
      ),
    });
  }, [_, _.file_type, _.star_rating]);
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "DV6-qfTT1HY-";
var _ = "AuHbR-HpyYg-";
var _ = "kLQINuOqqRk-";
var _ = "-h-24hJb3vM-";
var _ = "_608lprRkZlg-";
var _ = "bBtzPyl6nuY-";
var _ = "nCN0ymxWq0o-";
var _ = "xOimy4P39Gg-";
var _ = "isrPQbsDmu4-";
var _ = "tQsxk72lIV0-";
var _ = "gkfWwnEM32o-";
var _ = "Akhl4w9LmKk-";
var _ = "_0ED2WmlH-uY-";
var _ = "ouSEpyG3KPk-";
var _ = "_0FwDRZn6o2I-";
var _ = "_64TUyq35oGQ-";
var _ = "V-TglrMF3YY-";
var _ = "QnwwCwfxNe0-";
var _ = "_2gWMMaJ3-fQ-";
var _ = "SN-ezRktzRU-";
var _ = "kgG4nIhrZoU-";
var _ = "sGHCfuwOzrA-";
var _ = "ZuItuUW6wbA-";
var _ = "_2u-CXYgdzlo-";
var _ = "ytngwseR2jE-";
var _ = "ZNBA7PzLeas-";
var _ = "_5n8C6PyeXq8-";
var _ = "_8LcK6XOQGOs-";
var _ = "oTwwpJZZa-0-";
var _ = "N5sE26cvGKA-";
var _ = "WwXAMjaND98-";
var _ = "WraTymZMbqA-";
var _ = "SMT33YTtlvk-";
var _ = "y6QwltyQEdM-";
var _ = "LLqx1ozATnk-";
var _ = "eU5-MV-2cGg-";
var _ = "yIDj-7dpZ9E-";
var _ = "ZKaFvriA7TU-";
var _ = "_1-q2VaywILI-";
var _ = "pvmj3PqxOT4-";
var _ = "_9Xx1E2Gd668-";
var _ = "_8aVzMh2yWb0-";
var _ = "_2DP7DIL-o68-";
var _ = "jsbOFi7I2qw-";
var _ = "wXnTKUQ7ghw-";
var _ = "xlblibmgakI-";
var _ = "IWuRd9gm2ps-";
var _ = "_2qfvJ2pXZqA-";
var _ = "e0ByZLGE2w0-";
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "tmIrUKf-Mh8-";
var _ = "sDK5fonBQMA-";
var _ = "qynmFVP8-so-";
var _ = "HlDLa9SDu2Q-";
var _ = "_4QZPaDoCaZQ-";
var _ = "rQvmBxj2Kvg-";
var _ = "f-tHpODFWIA-";
var _ = "J1a9Og3P5J4-";
var _ = "O9xH7cOLbGE-";
var _ = "pEHf6eEYgQY-";
var _ = "IpMAtN7O4pk-";
var _ = "iOhDkaZ40nk-";
var _ = "RH-5-oAMCJk-";
var _ = "HHZOG9jofgk-";
var _ = "_8Sc9yZFl08k-";
var _ = "BfmIgp5hDLQ-";
var _ = "fHXMCfEI5NA-";
var _ = "_3rvey4VpXts-";
var _ = "F7cx0Xm3dO4-";
var _ = "CmHGWYJjMk0-";
var _ = "U-RsNSYD7PY-";
var _ = "KoN9cl3-i5Q-";
var _ = "QZAudVzEsAo-";
var _ = "a9ic5hZenXM-";
var _ = "lBX4CPPaMgM-";
var _ = "VVkQnratdmw-";
var _ = _(_(), 1);
var _ = class _ extends _.Message {
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
      return "CLoyaltyRewards_GetSummary_Request";
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
              timestamp_updated: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              auditid_highwater: {
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
      return "CLoyaltyRewards_GetSummary_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.points || _(_._()),
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
              points: {
                _: 1,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              points_earned: {
                _: 2,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              points_spent: {
                _: 3,
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
      return "CLoyaltyRewards_GetSummary_Response_Summary";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.amount || _(_._()),
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
              amount: {
                _: 1,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              ecurrency: {
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
      return "CLoyaltyRewards_GetPointsForSpend_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.points || _(_._()),
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
              points: {
                _: 1,
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
      return "CLoyaltyRewards_GetPointsForSpend_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.defid || _(_._()),
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
              defid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              expected_points_cost: {
                _: 2,
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
      return "CLoyaltyRewards_RedeemPoints_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.defid || _(_._()),
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
              defid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              num_levels: {
                _: 2,
                _: 1,
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
      return "CLoyaltyRewards_RedeemPointsForBadgeLevel_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.defid || _(_._()),
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
              defid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              communityitemid: {
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
      return "CLoyaltyRewards_RedeemPointsToUpgradeItem_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.communityitemid || _(_._()),
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
              communityitemid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              bundle_community_item_ids: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readUint64String,
                pbr: _.readPackedUint64String,
                _: _.writeRepeatedUint64String,
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
      return "CLoyaltyRewards_RedeemPoints_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.customization_type || _(_._()),
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
              customization_type: {
                _: 1,
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
      return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.purchaseid || _(_._()),
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
              purchaseid: {
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
      return "CLoyaltyRewards_RedeemPointsForProfileCustomization_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.customization_type || _(_._()),
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
              customization_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              new_level: {
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
      return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request";
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
      return "CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response";
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
              controller_code: {
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
      return "CLoyaltyRewards_RegisterForSteamDeckRewards_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.granted_profile_modifier || _(_._()),
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
              granted_profile_modifier: {
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
      return "CLoyaltyRewards_RegisterForSteamDeckRewards_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.target_type || _(_._()),
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
              target_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              targetid: {
                _: 2,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              reactionid: {
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
      return "CLoyaltyRewards_AddReaction_Request";
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
      return "CLoyaltyRewards_AddReaction_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.target_type || _(_._()),
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
              target_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              targetid: {
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
      return "CLoyaltyRewards_GetReactions_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactionids || _(_._()),
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
              reactionids: {
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
      return "CLoyaltyRewards_GetReactions_Response";
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
      return "CLoyaltyRewards_GetReactionsSummaryForUser_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.total || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4, 5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              total: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              user_reviews: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              ugc: {
                _: 3,
                _: _,
                _: !0,
                _: !0,
              },
              profile: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              forum_topics: {
                _: 5,
                _: _,
                _: !0,
                _: !0,
              },
              comments: {
                _: 6,
                _: _,
                _: !0,
                _: !0,
              },
              total_given: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              total_received: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              total_points_given: {
                _: 9,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              total_points_received: {
                _: 10,
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
      return "CLoyaltyRewards_GetReactionsSummaryForUser_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactionid || _(_._()),
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
              reactionid: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              given: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              received: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              points_given: {
                _: 4,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              points_received: {
                _: 5,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              purchaseable: {
                _: 6,
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
      return "CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.elanguage || _(_._()),
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
              elanguage: {
                _: 1,
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
      return "CLoyaltyRewards_GetReactionConfig_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactions || _(_._()),
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
              reactions: {
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
      return "CLoyaltyRewards_GetReactionConfig_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.reactionid || _(_._()),
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
              reactionid: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              points_cost: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              points_transferred: {
                _: 3,
                _: _.readUint32,
                _: _.writeUint32,
              },
              valid_target_types: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              valid_ugc_types: {
                _: 5,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              purchaseable: {
                _: 6,
                _: _.readBool,
                _: _.writeBool,
              },
              localized_title: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              localized_desc: {
                _: 8,
                _: _.readString,
                _: _.writeString,
              },
              available_until: {
                _: 9,
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
      return "CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig";
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
      return "CLoyaltyRewards_GetProfileCustomizationsConfig_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.points_cost || _(_._()),
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
              points_cost: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              upgrade_points_cost: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              purchasable_customization_types: {
                _: 3,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              upgradable_customization_types: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              max_slots_per_type: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              max_upgradable_level: {
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
      return "CLoyaltyRewards_GetProfileCustomizationsConfig_Response";
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
      return "CLoyaltyRewards_GetEligibleApps_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.apps || _(_._()),
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
              apps: {
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
      return "CLoyaltyRewards_GetEligibleApps_Response";
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
              has_items_anyone_can_purchase: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              event_app: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              hero_carousel_image: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              owned: {
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
      return "CLoyaltyRewards_GetEligibleApps_Response_EligibleApp";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
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
              appid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              defid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              type: {
                _: 3,
                _: _.readEnum,
                _: _.writeEnum,
              },
              community_item_class: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              community_item_type: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              point_cost: {
                _: 6,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              timestamp_created: {
                _: 7,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_updated: {
                _: 8,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_available: {
                _: 9,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_available_end: {
                _: 14,
                _: _.readUint32,
                _: _.writeUint32,
              },
              quantity: {
                _: 10,
                _: _.readInt64String,
                _: _.writeInt64String,
              },
              internal_description: {
                _: 11,
                _: _.readString,
                _: _.writeString,
              },
              active: {
                _: 12,
                _: _.readBool,
                _: _.writeBool,
              },
              community_item_data: {
                _: 13,
                _: _,
              },
              bundle_defids: {
                _: 15,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              usable_duration: {
                _: 16,
                _: _.readUint32,
                _: _.writeUint32,
              },
              bundle_discount: {
                _: 17,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_free_until: {
                _: 18,
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
      return "LoyaltyRewardDefinition";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_name || _(_._()),
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
              item_name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              item_title: {
                _: 2,
                _: _.readString,
                _: _.writeString,
              },
              item_description: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              item_image_small: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              item_image_large: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
              item_movie_webm: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              item_movie_mp4: {
                _: 7,
                _: _.readString,
                _: _.writeString,
              },
              item_movie_webm_small: {
                _: 10,
                _: _.readString,
                _: _.writeString,
              },
              item_movie_mp4_small: {
                _: 11,
                _: _.readString,
                _: _.writeString,
              },
              animated: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              badge_data: {
                _: 9,
                _: _,
                _: !0,
                _: !0,
              },
              profile_theme_id: {
                _: 12,
                _: _.readString,
                _: _.writeString,
              },
              tiled: {
                _: 13,
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
      return "LoyaltyRewardDefinition_CommunityItemData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.level || _(_._()),
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
              level: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              image: {
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
      return "LoyaltyRewardDefinition_BadgeData";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.bonusid || _(_._()),
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
              bonusid: {
                _: 1,
                _: _.readUint64String,
                _: _.writeUint64String,
              },
              appid: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              active: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              points: {
                _: 4,
                _: _.readInt32,
                _: _.writeInt32,
              },
              timestamp_start: {
                _: 5,
                _: _.readUint32,
                _: _.writeUint32,
              },
              timestamp_end: {
                _: 6,
                _: _.readUint32,
                _: _.writeUint32,
              },
              internal_description: {
                _: 7,
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
      return "LoyaltyRewardPurchaseBonus";
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
      return "CLoyaltyRewards_GetActivePurchaseBonuses_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.bonuses || _(_._()),
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
              bonuses: {
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
      return "CLoyaltyRewards_GetActivePurchaseBonuses_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appids || _(_._()),
        _.Message.initialize(
          this,
          _,
          0,
          -1,
          [1, 3, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
          null,
        );
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
              time_available: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              community_item_classes: {
                _: 3,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              language: {
                _: 4,
                _: _.readString,
                _: _.writeString,
              },
              count: {
                _: 5,
                _: _.readInt32,
                _: _.writeInt32,
              },
              cursor: {
                _: 6,
                _: _.readString,
                _: _.writeString,
              },
              sort: {
                _: 7,
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              sort_descending: {
                _: 8,
                _: !0,
                _: _.readBool,
                _: _.writeBool,
              },
              reward_types: {
                _: 9,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              excluded_community_item_classes: {
                _: 10,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              definitionids: {
                _: 11,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              filters: {
                _: 12,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              filter_match_all_category_tags: {
                _: 13,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              filter_match_any_category_tags: {
                _: 14,
                _: !0,
                _: !0,
                _: _.readString,
                _: _.writeRepeatedString,
              },
              contains_definitionids: {
                _: 15,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              include_direct_purchase_disabled: {
                _: 16,
                _: _.readBool,
                _: _.writeBool,
              },
              excluded_content_descriptors: {
                _: 17,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              excluded_appids: {
                _: 18,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              excluded_store_tagids: {
                _: 19,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              store_tagids: {
                _: 20,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              search_term: {
                _: 21,
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
      return "CLoyaltyRewards_QueryRewardItems_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.definitions || _(_._()),
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
              definitions: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              total_count: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              count: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              next_cursor: {
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
      return "CLoyaltyRewards_QueryRewardItems_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.requests || _(_._()),
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
              requests: {
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
      return "CLoyaltyRewards_BatchedQueryRewardItems_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.responses || _(_._()),
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
              responses: {
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
      return "CLoyaltyRewards_BatchedQueryRewardItems_Response";
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
                _: _.readInt32,
                _: _.writeInt32,
              },
              response: {
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
      return "CLoyaltyRewards_BatchedQueryRewardItems_Response_Response";
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
      return "CLoyaltyRewards_GetEquippedProfileItems_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.active_definitions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              active_definitions: {
                _: 1,
                _: _,
                _: !0,
                _: !0,
              },
              inactive_definitions: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              bundle_definitions: {
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
      return "CLoyaltyRewards_GetEquippedProfileItems_Response";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.GetPointsForSpend#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetPointsForSpend = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.GetSummary#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetSummary = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.RedeemPoints#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RedeemPoints = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.RedeemPointsForBadgeLevel#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RedeemPointsForBadgeLevel = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.RedeemPointsToUpgradeItem#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.RedeemPointsToUpgradeItem = _;
  function _(_, _) {
    return _.SendMsg(
      "LoyaltyRewards.RedeemPointsForProfileCustomization#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsForProfileCustomization = _;
  function _(_, _) {
    return _.SendMsg(
      "LoyaltyRewards.RedeemPointsForProfileCustomizationUpgrade#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RedeemPointsForProfileCustomizationUpgrade = _;
  function _(_, _) {
    return _.SendMsg(
      "LoyaltyRewards.RegisterForSteamDeckRewards#1",
      _(_, _),
      _,
      {
        ePrivilege: 1,
      },
    );
  }
  _.RegisterForSteamDeckRewards = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.AddReaction#1", _(_, _), _, {
      ePrivilege: 1,
    });
  }
  _.AddReaction = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.GetReactions#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetReactions = _;
  function _(_, _) {
    return _.SendMsg(
      "LoyaltyRewards.GetReactionsSummaryForUser#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetReactionsSummaryForUser = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.GetReactionConfig#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetReactionConfig = _;
  function _(_, _) {
    return _.SendMsg(
      "LoyaltyRewards.GetProfileCustomizationsConfig#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 0,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetProfileCustomizationsConfig = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.GetEligibleApps#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetEligibleApps = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.GetActivePurchaseBonuses#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetActivePurchaseBonuses = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.QueryRewardItems#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.QueryRewardItems = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.BatchedQueryRewardItems#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.BatchedQueryRewardItems = _;
  function _(_, _) {
    return _.SendMsg("LoyaltyRewards.GetEquippedProfileItems#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.GetEquippedProfileItems = _;
})((_ ||= {}));
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_());
var _ = "-KmHS-mm1UU-";
var _ = "KQd0DcAOawg-";
var _ = "Ela1EhSjZNw-";
var _ = _(_());
function _(_) {
  let { bShowDialog: _, setShowDialog: _ } = _,
    _ = `${_.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`,
    _ = `${_.STORE_BASE_URL}join/`,
    _ = `${_.HELP_BASE_URL}wizard/HelpWithAnonymousContentReport`;
  return (0, _.jsx)(_, {
    active: _,
    children: (0, _.jsxs)(_, {
      closeModal: () => _(!1),
      title: _.Localize("#anonymousreport_title"),
      children: [
        (0, _.jsx)(_, {
          className: _,
          children: _.Localize("#anonymousreport_description"),
        }),
        (0, _.jsx)(_, {
          className: _,
          children: _(
            _.Localize("#anonymousreport_footer"),
            (0, _.jsx)(_, {
              href: _,
            }),
          ),
        }),
        (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              href: _,
              children: (0, _.jsx)(_, {
                onClick: () => !1,
                children: _.Localize("#anonymousreport_signin"),
              }),
            }),
            (0, _.jsx)(_, {
              href: _,
              children: (0, _.jsx)(_, {
                onClick: () => !1,
                children: _.Localize("#anonymousreport_createaccount"),
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = _(_());
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) => {
      if (!_.logged_in) throw 21;
      let { targetid: _, targetType: _, nReactionId: _ } = _,
        _ = _.Init(_);
      _.Body().set_target_type(_),
        _.Body().set_targetid(_),
        _.Body().set_reactionid(_);
      let _ = await _.AddReaction(_, _);
      if (_.GetEResult() != 1) throw _.GetEResult();
    },
    onSuccess: () => {
      _.invalidateQueries({
        queryKey: ["UserPointBalance"],
      });
    },
  });
}
function _(_, _) {
  return _({
    queryKey: ["UserPointBalance"],
    queryFn: async () => {
      if (!_.logged_in) throw 21;
      let _ = _.steamid,
        _ = _.Init(_);
      _.Body().set_steamid(_);
      let _ = await _.GetSummary(_, _);
      if (_.GetEResult() == 1)
        return _.fromString(_.Body().toObject().summary?.points ?? "0");
      throw _.GetEResult();
    },
    enabled: _,
  });
}
function _(_, _) {
  return _({
    queryKey: ["AwardsConfiguration"],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_elanguage(_(_.LANGUAGE));
      let _ = await _.GetReactionConfig(_, _);
      if (_.GetEResult() == 1) {
        let _ = new Map(),
          _ = _.Body().toObject().reactions ?? [];
        for (let _ of _) _.reactionid && _.set(_.reactionid, _);
        return _;
      } else throw _.GetEResult();
    },
    enabled: _,
  });
}
function _(_, _, _, _) {
  return _({
    queryKey: ["UserReactions", _, _],
    queryFn: async () => {
      if (!_.logged_in) throw 21;
      let _ = _.Init(_);
      _.Body().set_target_type(_), _.Body().set_targetid(_);
      let _ = await _.GetReactions(_, _);
      if (_.GetEResult() == 1) return new Set(_.Body().reactionids());
      throw _.GetEResult();
    },
    enabled: _,
  });
}
var _ = _(_());
var _ = _(),
  _ = (_) => _(_, _),
  _ = _();
_.write = (_) => _(_, _);
var _ = _();
_.onStart = (_) => _(_, _);
var _ = _();
_.onFrame = (_) => _(_, _);
var _ = _();
_.onFinish = (_) => _(_, _);
var _ = [];
_.setTimeout = (_, _) => {
  let _ = _.now() + _,
    _ = () => {
      let _ = _.findIndex((_) => _.cancel == _);
      ~_ && _.splice(_, 1), (_ -= ~_ ? 1 : 0);
    },
    _ = {
      time: _,
      handler: _,
      cancel: _,
    };
  return _.splice(_(_), 0, _), (_ += 1), _(), _;
};
var _ = (_) => ~(~_.findIndex((_) => _.time > _) || ~_.length);
_.cancel = (_) => {
  _.delete(_), _.delete(_), _.delete(_), _.delete(_), _.delete(_);
};
_.sync = (_) => {
  (_ = !0), _.batchedUpdates(_), (_ = !1);
};
_.throttle = (_) => {
  let _;
  function _() {
    try {
      _(..._);
    } finally {
      _ = null;
    }
  }
  function _(..._) {
    (_ = _), _.onStart(_);
  }
  return (
    (_.handler = _),
    (_.cancel = () => {
      _.delete(_), (_ = null);
    }),
    _
  );
};
var _ = typeof window < "u" ? window.requestAnimationFrame : () => {};
_.use = (_) => (_ = _);
_.now = typeof performance < "u" ? () => performance.now() : Date.now;
_.batchedUpdates = (_) => _();
_.catch = console.error;
_.frameLoop = "always";
_.advance = () => {
  _.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand",
      )
    : _();
};
var _ = -1,
  _ = 0,
  _ = !1;
function _(_, _) {
  _ ? (_.delete(_), _(0)) : (_.add(_), _());
}
function _() {
  _ < 0 && ((_ = 0), _.frameLoop !== "demand" && _(_));
}
function _() {
  _ = -1;
}
function _() {
  ~_ && (_(_), _.batchedUpdates(_));
}
function _() {
  let _ = _;
  _ = _.now();
  let _ = _(_);
  if ((_ && (_(_.splice(0, _), (_) => _.handler()), (_ -= _)), !_)) {
    _();
    return;
  }
  _.flush(),
    _.flush(_ ? Math.min(64, _ - _) : 16.667),
    _.flush(),
    _.flush(),
    _.flush();
}
function _() {
  let _ = new Set(),
    _ = _;
  return {
    add(_) {
      (_ += _ == _ && !_.has(_) ? 1 : 0), _.add(_);
    },
    delete(_) {
      return (_ -= _ == _ && _.has(_) ? 1 : 0), _.delete(_);
    },
    flush(_) {
      _.size &&
        ((_ = new Set()),
        (_ -= _.size),
        _(_, (_) => _(_) && _.add(_)),
        (_ += _.size),
        (_ = _));
    },
  };
}
function _(_, _) {
  _.forEach((_) => {
    try {
      _(_);
    } catch (_) {
      _.catch(_);
    }
  });
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1);
var _ = Object.defineProperty,
  _ = (_, _) => {
    for (var _ in _)
      _(_, _, {
        get: _[_],
        enumerable: !0,
      });
  },
  _ = {};
_(_, {
  assign: () => _,
  colors: () => _,
  createStringInterpolator: () => _,
  skipAnimation: () => _,
  _: () => _,
  willAdvance: () => _,
});
function _() {}
var _ = (_, _, _) =>
    Object.defineProperty(_, _, {
      value: _,
      writable: !0,
      configurable: !0,
    }),
  _ = {
    arr: Array.isArray,
    obj: (_) => !!_ && _.constructor.name === "Object",
    fun: (_) => typeof _ == "function",
    str: (_) => typeof _ == "string",
    num: (_) => typeof _ == "number",
    und: (_) => _ === void 0,
  };
function _(_, _) {
  if (_.arr(_)) {
    if (!_.arr(_) || _.length !== _.length) return !1;
    for (let _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
    return !0;
  }
  return _ === _;
}
var _ = (_, _) => _.forEach(_);
function _(_, _, _) {
  if (_.arr(_)) {
    for (let _ = 0; _ < _.length; _++) _.call(_, _[_], `${_}`);
    return;
  }
  for (let _ in _) _.hasOwnProperty(_) && _.call(_, _[_], _);
}
var _ = (_) => (_.und(_) ? [] : _.arr(_) ? _ : [_]);
function _(_, _) {
  if (_.size) {
    let _ = Array.from(_);
    _.clear(), _(_, _);
  }
}
var _ = (_, ..._) => _(_, (_) => _(..._)),
  _ = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  _,
  _,
  _ = null,
  _ = !1,
  _ = _,
  _ = (_) => {
    _._ && (_ = _._),
      _.now && (_.now = _.now),
      _.colors !== void 0 && (_ = _.colors),
      _.skipAnimation != null && (_ = _.skipAnimation),
      _.createStringInterpolator && (_ = _.createStringInterpolator),
      _.requestAnimationFrame && _.use(_.requestAnimationFrame),
      _.batchedUpdates && (_.batchedUpdates = _.batchedUpdates),
      _.willAdvance && (_ = _.willAdvance),
      _.frameLoop && (_.frameLoop = _.frameLoop);
  },
  _ = new Set(),
  _ = [],
  _ = [],
  _ = 0,
  _ = {
    get idle() {
      return !_.size && !_.length;
    },
    start(_) {
      _ > _.priority ? (_.add(_), _.onStart(_)) : (_(_), _(_));
    },
    advance: _,
    sort(_) {
      if (_) _.onFrame(() => _.sort(_));
      else {
        let _ = _.indexOf(_);
        ~_ && (_.splice(_, 1), _(_));
      }
    },
    clear() {
      (_ = []), _.clear();
    },
  };
function _() {
  _.forEach(_), _.clear(), _(_);
}
function _(_) {
  _.includes(_) || _(_);
}
function _(_) {
  _.splice(
    _(_, (_) => _.priority > _.priority),
    0,
    _,
  );
}
function _(_) {
  let _ = _;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    (_ = _.priority), _.idle || (_(_), _.advance(_), _.idle || _.push(_));
  }
  return (_ = 0), (_ = _), (_.length = 0), (_ = _), _.length > 0;
}
function _(_, _) {
  let _ = _.findIndex(_);
  return _ < 0 ? _.length : _;
}
var _ = (_, _, _) => Math.min(Math.max(_, _), _),
  _ = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  _ = "[-+]?\\d*\\.?\\d+",
  _ = _ + "%";
function _(..._) {
  return "\\(\\s*(" + _.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var _ = new RegExp("rgb" + _(_, _, _)),
  _ = new RegExp("rgba" + _(_, _, _, _)),
  _ = new RegExp("hsl" + _(_, _, _)),
  _ = new RegExp("hsla" + _(_, _, _, _)),
  _ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  _ = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  _ = /^#([0-9a-fA-F]{6})$/,
  _ = /^#([0-9a-fA-F]{8})$/;
function _(_) {
  let _;
  return typeof _ == "number"
    ? _ >>> 0 === _ && _ >= 0 && _ <= 4294967295
      ? _
      : null
    : (_ = _.exec(_))
      ? parseInt(_[1] + "ff", 16) >>> 0
      : _ && _[_] !== void 0
        ? _[_]
        : (_ = _.exec(_))
          ? ((_(_[1]) << 24) | (_(_[2]) << 16) | (_(_[3]) << 8) | 255) >>> 0
          : (_ = _.exec(_))
            ? ((_(_[1]) << 24) | (_(_[2]) << 16) | (_(_[3]) << 8) | _(_[4])) >>>
              0
            : (_ = _.exec(_))
              ? parseInt(_[1] + _[1] + _[2] + _[2] + _[3] + _[3] + "ff", 16) >>>
                0
              : (_ = _.exec(_))
                ? parseInt(_[1], 16) >>> 0
                : (_ = _.exec(_))
                  ? parseInt(
                      _[1] + _[1] + _[2] + _[2] + _[3] + _[3] + _[4] + _[4],
                      16,
                    ) >>> 0
                  : (_ = _.exec(_))
                    ? (_(_(_[1]), _(_[2]), _(_[3])) | 255) >>> 0
                    : (_ = _.exec(_))
                      ? (_(_(_[1]), _(_[2]), _(_[3])) | _(_[4])) >>> 0
                      : null;
}
function _(_, _, _) {
  return (
    _ < 0 && (_ += 1),
    _ > 1 && (_ -= 1),
    _ < 1 / 6
      ? _ + (_ - _) * 6 * _
      : _ < 1 / 2
        ? _
        : _ < 2 / 3
          ? _ + (_ - _) * (2 / 3 - _) * 6
          : _
  );
}
function _(_, _, _) {
  let _ = _ < 0.5 ? _ * (1 + _) : _ + _ - _ * _,
    _ = 2 * _ - _,
    _ = _(_, _, _ + 1 / 3),
    _ = _(_, _, _),
    _ = _(_, _, _ - 1 / 3);
  return (
    (Math.round(_ * 255) << 24) |
    (Math.round(_ * 255) << 16) |
    (Math.round(_ * 255) << 8)
  );
}
function _(_) {
  let _ = parseInt(_, 10);
  return _ < 0 ? 0 : _ > 255 ? 255 : _;
}
function _(_) {
  return (((parseFloat(_) % 360) + 360) % 360) / 360;
}
function _(_) {
  let _ = parseFloat(_);
  return _ < 0 ? 0 : _ > 1 ? 255 : Math.round(_ * 255);
}
function _(_) {
  let _ = parseFloat(_);
  return _ < 0 ? 0 : _ > 100 ? 1 : _ / 100;
}
function _(_) {
  let _ = _(_);
  if (_ === null) return _;
  _ = _ || 0;
  let _ = (_ & 4278190080) >>> 24,
    _ = (_ & 16711680) >>> 16,
    _ = (_ & 65280) >>> 8,
    _ = (_ & 255) / 255;
  return `rgba(${_}, ${_}, ${_}, ${_})`;
}
var _ = (_, _, _) => {
  if (_.fun(_)) return _;
  if (_.arr(_))
    return _({
      range: _,
      output: _,
      extrapolate: _,
    });
  if (_.str(_.output[0])) return _(_);
  let _ = _,
    _ = _.output,
    _ = _.range || [0, 1],
    _ = _.extrapolateLeft || _.extrapolate || "extend",
    _ = _.extrapolateRight || _.extrapolate || "extend",
    _ = _.easing || ((_) => _);
  return (_) => {
    let _ = _(_, _);
    return _(_, _[_], _[_ + 1], _[_], _[_ + 1], _, _, _, _.map);
  };
};
function _(_, _, _, _, _, _, _, _, _) {
  let _ = _ ? _(_) : _;
  if (_ < _) {
    if (_ === "identity") return _;
    _ === "clamp" && (_ = _);
  }
  if (_ > _) {
    if (_ === "identity") return _;
    _ === "clamp" && (_ = _);
  }
  return _ === _
    ? _
    : _ === _
      ? _ <= _
        ? _
        : _
      : (_ === -1 / 0
          ? (_ = -_)
          : _ === 1 / 0
            ? (_ = _ - _)
            : (_ = (_ - _) / (_ - _)),
        (_ = _(_)),
        _ === -1 / 0
          ? (_ = -_)
          : _ === 1 / 0
            ? (_ = _ + _)
            : (_ = _ * (_ - _) + _),
        _);
}
function _(_, _) {
  for (var _ = 1; _ < _.length - 1 && !(_[_] >= _); ++_);
  return _ - 1;
}
var _ =
    (_, _ = "end") =>
    (_) => {
      _ = _ === "end" ? Math.min(_, 0.999) : Math.max(_, 0.001);
      let _ = _ * _,
        _ = _ === "end" ? Math.floor(_) : Math.ceil(_);
      return _(0, 1, _ / _);
    },
  _ = 1.70158,
  _ = _ * 1.525,
  _ = _ + 1,
  _ = (2 * Math._) / 3,
  _ = (2 * Math._) / 4.5,
  _ = (_) =>
    _ < 1 / 2.75
      ? 7.5625 * _ * _
      : _ < 2 / 2.75
        ? 7.5625 * (_ -= 1.5 / 2.75) * _ + 0.75
        : _ < 2.5 / 2.75
          ? 7.5625 * (_ -= 2.25 / 2.75) * _ + 0.9375
          : 7.5625 * (_ -= 2.625 / 2.75) * _ + 0.984375,
  _ = {
    linear: (_) => _,
    easeInQuad: (_) => _ * _,
    easeOutQuad: (_) => 1 - (1 - _) * (1 - _),
    easeInOutQuad: (_) =>
      _ < 0.5 ? 2 * _ * _ : 1 - Math.pow(-2 * _ + 2, 2) / 2,
    easeInCubic: (_) => _ * _ * _,
    easeOutCubic: (_) => 1 - Math.pow(1 - _, 3),
    easeInOutCubic: (_) =>
      _ < 0.5 ? 4 * _ * _ * _ : 1 - Math.pow(-2 * _ + 2, 3) / 2,
    easeInQuart: (_) => _ * _ * _ * _,
    easeOutQuart: (_) => 1 - Math.pow(1 - _, 4),
    easeInOutQuart: (_) =>
      _ < 0.5 ? 8 * _ * _ * _ * _ : 1 - Math.pow(-2 * _ + 2, 4) / 2,
    easeInQuint: (_) => _ * _ * _ * _ * _,
    easeOutQuint: (_) => 1 - Math.pow(1 - _, 5),
    easeInOutQuint: (_) =>
      _ < 0.5 ? 16 * _ * _ * _ * _ * _ : 1 - Math.pow(-2 * _ + 2, 5) / 2,
    easeInSine: (_) => 1 - Math.cos((_ * Math._) / 2),
    easeOutSine: (_) => Math.sin((_ * Math._) / 2),
    easeInOutSine: (_) => -(Math.cos(Math._ * _) - 1) / 2,
    easeInExpo: (_) => (_ === 0 ? 0 : Math.pow(2, 10 * _ - 10)),
    easeOutExpo: (_) => (_ === 1 ? 1 : 1 - Math.pow(2, -10 * _)),
    easeInOutExpo: (_) =>
      _ === 0
        ? 0
        : _ === 1
          ? 1
          : _ < 0.5
            ? Math.pow(2, 20 * _ - 10) / 2
            : (2 - Math.pow(2, -20 * _ + 10)) / 2,
    easeInCirc: (_) => 1 - Math.sqrt(1 - Math.pow(_, 2)),
    easeOutCirc: (_) => Math.sqrt(1 - Math.pow(_ - 1, 2)),
    easeInOutCirc: (_) =>
      _ < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * _, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * _ + 2, 2)) + 1) / 2,
    easeInBack: (_) => _ * _ * _ * _ - _ * _ * _,
    easeOutBack: (_) => 1 + _ * Math.pow(_ - 1, 3) + _ * Math.pow(_ - 1, 2),
    easeInOutBack: (_) =>
      _ < 0.5
        ? (Math.pow(2 * _, 2) * ((_ + 1) * 2 * _ - _)) / 2
        : (Math.pow(2 * _ - 2, 2) * ((_ + 1) * (_ * 2 - 2) + _) + 2) / 2,
    easeInElastic: (_) =>
      _ === 0
        ? 0
        : _ === 1
          ? 1
          : -Math.pow(2, 10 * _ - 10) * Math.sin((_ * 10 - 10.75) * _),
    easeOutElastic: (_) =>
      _ === 0
        ? 0
        : _ === 1
          ? 1
          : Math.pow(2, -10 * _) * Math.sin((_ * 10 - 0.75) * _) + 1,
    easeInOutElastic: (_) =>
      _ === 0
        ? 0
        : _ === 1
          ? 1
          : _ < 0.5
            ? -(Math.pow(2, 20 * _ - 10) * Math.sin((20 * _ - 11.125) * _)) / 2
            : (Math.pow(2, -20 * _ + 10) * Math.sin((20 * _ - 11.125) * _)) /
                2 +
              1,
    easeInBounce: (_) => 1 - _(1 - _),
    easeOutBounce: _,
    easeInOutBounce: (_) =>
      _ < 0.5 ? (1 - _(1 - 2 * _)) / 2 : (1 + _(2 * _ - 1)) / 2,
    steps: _,
  },
  _ = Symbol.for("FluidValue.get"),
  _ = Symbol.for("FluidValue.observers"),
  _ = (_) => !!(_ && _[_]),
  _ = (_) => (_ && _[_] ? _[_]() : _),
  _ = (_) => _[_] || null;
function _(_, _) {
  _.eventObserved ? _.eventObserved(_) : _(_);
}
function _(_, _) {
  let _ = _[_];
  _ &&
    _.forEach((_) => {
      _(_, _);
    });
}
var _ = class {
    constructor(_) {
      if (!_ && !(_ = this.get)) throw Error("Unknown getter");
      _(this, _);
    }
  },
  _ = (_, _) => _(_, _, _);
function _(_, _) {
  if (_[_]) {
    let _ = _[_];
    _ || _(_, _, (_ = new Set())),
      _.has(_) || (_.add(_), _.observerAdded && _.observerAdded(_.size, _));
  }
  return _;
}
function _(_, _) {
  let _ = _[_];
  if (_ && _.has(_)) {
    let _ = _.size - 1;
    _ ? _.delete(_) : (_[_] = null),
      _.observerRemoved && _.observerRemoved(_, _);
  }
}
var _ = (_, _, _) =>
    Object.defineProperty(_, _, {
      value: _,
      writable: !0,
      configurable: !0,
    }),
  _ = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  _ =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  _ = new RegExp(`(${_.source})(%|[a-z]+)`, "i"),
  _ = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  _ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  _ = (_) => {
    let [_, _] = _(_);
    if (!_ || _()) return _;
    let _ = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(_);
    if (_) return _.trim();
    if (_ && _.startsWith("--")) {
      let _ = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue(_);
      return _ || _;
    } else {
      if (_ && _.test(_)) return _(_);
      if (_) return _;
    }
    return _;
  },
  _ = (_) => {
    let _ = _.exec(_);
    if (!_) return [,];
    let [, _, _] = _;
    return [_, _];
  },
  _,
  _ = (_, _, _, _, _) =>
    `rgba(${Math.round(_)}, ${Math.round(_)}, ${Math.round(_)}, ${_})`,
  _ = (_) => {
    _ ||
      (_ = _
        ? new RegExp(`(${Object.keys(_).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    let _ = _.output.map((_) => _(_).replace(_, _).replace(_, _).replace(_, _)),
      _ = _.map((_) => _.match(_).map(Number)),
      _ = _[0]
        .map((_, _) =>
          _.map((_) => {
            if (!(_ in _))
              throw Error('The arity of each "output" value must be equal');
            return _[_];
          }),
        )
        .map((_) =>
          _({
            ..._,
            output: _,
          }),
        );
    return (_) => {
      let _ = !_.test(_[0]) && _.find((_) => _.test(_))?.replace(_, ""),
        _ = 0;
      return _[0].replace(_, () => `${_[_++](_)}${_ || ""}`).replace(_, _);
    };
  },
  _ = "react-spring: ",
  _ = (_) => {
    let _ = _,
      _ = !1;
    if (typeof _ != "function")
      throw new TypeError(`${_}once requires a function parameter`);
    return (..._) => {
      _ || (_(..._), (_ = !0));
    };
  },
  _ = _(console.warn);
function _() {
  _(`${_}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var _ = _(console.warn);
function _() {
  _(
    `${_}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
  );
}
function _(_) {
  return (
    _.str(_) &&
    (_[0] == "#" || /\d/.test(_) || (!_() && _.test(_)) || _ in (_ || {}))
  );
}
var _ = _() ? _.useEffect : _.useLayoutEffect,
  _ = () => {
    let _ = (0, _.useRef)(!1);
    return (
      _(
        () => (
          (_.current = !0),
          () => {
            _.current = !1;
          }
        ),
        [],
      ),
      _
    );
  };
function _() {
  let _ = (0, _.useState)()[1],
    _ = _();
  return () => {
    _.current && _(Math.random());
  };
}
var _ = (_) => (0, _.useEffect)(_, _),
  _ = [];
function _(_) {
  let _ = (0, _.useRef)(void 0);
  return (
    (0, _.useEffect)(() => {
      _.current = _;
    }),
    _.current
  );
}
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = Symbol.for("Animated:node"),
  _ = (_) => !!_ && _[_] === _,
  _ = (_) => _ && _[_],
  _ = (_, _) => _(_, _, _),
  _ = (_) => _ && _[_] && _[_].getPayload(),
  _ = class {
    constructor() {
      _(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  _ = class _ extends _ {
    constructor(_) {
      super(),
        (this._value = _),
        (this.done = !0),
        (this.durationProgress = 0),
        _.num(this._value) && (this.lastPosition = this._value);
    }
    static create(_) {
      return new _(_);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(_, _) {
      return (
        _.num(_) &&
          ((this.lastPosition = _),
          _ &&
            ((_ = Math.round(_ / _) * _),
            this.done && (this.lastPosition = _))),
        this._value === _ ? !1 : ((this._value = _), !0)
      );
    }
    reset() {
      let { done: _ } = this;
      (this.done = !1),
        _.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          _ && (this.lastVelocity = null),
          (this._ = null));
    }
  },
  _ = class _ extends _ {
    constructor(_) {
      super(0),
        (this._string = null),
        (this._toString = _({
          output: [_, _],
        }));
    }
    static create(_) {
      return new _(_);
    }
    getValue() {
      let _ = this._string;
      return _ ?? (this._string = this._toString(this._value));
    }
    setValue(_) {
      if (_.str(_)) {
        if (_ == this._string) return !1;
        (this._string = _), (this._value = 1);
      } else if (super.setValue(_)) this._string = null;
      else return !1;
      return !0;
    }
    reset(_) {
      _ &&
        (this._toString = _({
          output: [this.getValue(), _],
        })),
        (this._value = 0),
        super.reset();
    }
  },
  _ = {
    dependencies: null,
  },
  _ = class extends _ {
    constructor(_) {
      super(), (this.source = _), this.setValue(_);
    }
    getValue(_) {
      let _ = {};
      return (
        _(this.source, (_, _) => {
          _(_)
            ? (_[_] = _.getValue(_))
            : _(_)
              ? (_[_] = _(_))
              : _ || (_[_] = _);
        }),
        _
      );
    }
    setValue(_) {
      (this.source = _), (this.payload = this._makePayload(_));
    }
    reset() {
      this.payload && _(this.payload, (_) => _.reset());
    }
    _makePayload(_) {
      if (_) {
        let _ = new Set();
        return _(_, this._addToPayload, _), Array.from(_);
      }
    }
    _addToPayload(_) {
      _.dependencies && _(_) && _.dependencies.add(_);
      let _ = _(_);
      _ && _(_, (_) => this.add(_));
    }
  },
  _ = class _ extends _ {
    constructor(_) {
      super(_);
    }
    static create(_) {
      return new _(_);
    }
    getValue() {
      return this.source.map((_) => _.getValue());
    }
    setValue(_) {
      let _ = this.getPayload();
      return _.length == _.length
        ? _.map((_, _) => _.setValue(_[_])).some(Boolean)
        : (super.setValue(_.map(_)), !0);
    }
  };
function _(_) {
  return (_(_) ? _ : _).create(_);
}
function _(_) {
  let _ = _(_);
  return _ ? _.constructor : _.arr(_) ? _ : _(_) ? _ : _;
}
var _ = (_, _) => {
    let _ = !_.fun(_) || (_.prototype && _.prototype.isReactComponent);
    return (0, _.forwardRef)((_, _) => {
      let _ = (0, _.useRef)(null),
        _ =
          _ &&
          (0, _.useCallback)(
            (_) => {
              _.current = _(_, _);
            },
            [_],
          ),
        [_, _] = _(_, _),
        _ = _(),
        _ = () => {
          let _ = _.current;
          if (_ && !_) return;
          (_ ? _.applyAnimatedValues(_, _.getValue(!0)) : !1) === !1 && _();
        },
        _ = new _(_, _),
        _ = (0, _.useRef)(void 0);
      _(
        () => (
          (_.current = _),
          _(_, (_) => _(_, _)),
          () => {
            _.current &&
              (_(_.current.deps, (_) => _(_, _.current)),
              _.cancel(_.current.update));
          }
        ),
      ),
        (0, _.useEffect)(_, []),
        _(() => () => {
          let _ = _.current;
          _(_.deps, (_) => _(_, _));
        });
      let _ = _.getComponentProps(_.getValue());
      return _.createElement(_, {
        ..._,
        ref: _,
      });
    });
  },
  _ = class {
    constructor(_, _) {
      (this.update = _), (this.deps = _);
    }
    eventObserved(_) {
      _.type == "change" && _.write(this.update);
    }
  };
function _(_, _) {
  let _ = new Set();
  return (
    (_.dependencies = _),
    _.style &&
      (_ = {
        ..._,
        style: _.createAnimatedStyle(_.style),
      }),
    (_ = new _(_)),
    (_.dependencies = null),
    [_, _]
  );
}
function _(_, _) {
  return _ && (_.fun(_) ? _(_) : (_.current = _)), _;
}
var _ = Symbol.for("AnimatedComponent"),
  _ = (
    _,
    {
      applyAnimatedValues: _ = () => !1,
      createAnimatedStyle: _ = (_) => new _(_),
      getComponentProps: _ = (_) => _,
    } = {},
  ) => {
    let _ = {
        applyAnimatedValues: _,
        createAnimatedStyle: _,
        getComponentProps: _,
      },
      _ = (_) => {
        let _ = _(_) || "Anonymous";
        return (
          _.str(_)
            ? (_ = _[_] || (_[_] = _(_, _)))
            : (_ = _[_] || (_[_] = _(_, _))),
          (_.displayName = `Animated(${_})`),
          _
        );
      };
    return (
      _(_, (_, _) => {
        _.arr(_) && (_ = _(_)), (_[_] = _(_));
      }),
      {
        animated: _,
      }
    );
  },
  _ = (_) =>
    _.str(_)
      ? _
      : _ && _.str(_.displayName)
        ? _.displayName
        : (_.fun(_) && _.name) || null;
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_(), 1);
function _(_, ..._) {
  return _.fun(_) ? _(..._) : _;
}
var _ = (_, _) =>
    _ === !0 || !!(_ && _ && (_.fun(_) ? _(_) : _(_).includes(_))),
  _ = (_, _) => (_.obj(_) ? _ && _[_] : _),
  _ = (_, _) => (_.default === !0 ? _[_] : _.default ? _.default[_] : void 0),
  _ = (_) => _,
  _ = (_, _ = _) => {
    let _ = _;
    _.default && _.default !== !0 && ((_ = _.default), (_ = Object.keys(_)));
    let _ = {};
    for (let _ of _) {
      let _ = _(_[_], _);
      _.und(_) || (_[_] = _);
    }
    return _;
  },
  _ = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  _ = {
    config: 1,
    from: 1,
    _: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function _(_) {
  let _ = {},
    _ = 0;
  if (
    (_(_, (_, _) => {
      _[_] || ((_[_] = _), _++);
    }),
    _)
  )
    return _;
}
function _(_) {
  let _ = _(_);
  if (_) {
    let _ = {
      _: _,
    };
    return _(_, (_, _) => _ in _ || (_[_] = _)), _;
  }
  return {
    ..._,
  };
}
function _(_) {
  return (
    (_ = _(_)),
    _.arr(_)
      ? _.map(_)
      : _(_)
        ? _.createStringInterpolator({
            range: [0, 1],
            output: [_, _],
          })(1)
        : _
  );
}
function _(_) {
  for (let _ in _) return !0;
  return !1;
}
function _(_) {
  return _.fun(_) || (_.arr(_) && _.obj(_[0]));
}
function _(_, _) {
  _.ref?.delete(_), _?.delete(_);
}
function _(_, _) {
  _ && _.ref !== _ && (_.ref?.delete(_), _.add(_), (_.ref = _));
}
var _ = {
    default: {
      tension: 170,
      friction: 26,
    },
    gentle: {
      tension: 120,
      friction: 14,
    },
    wobbly: {
      tension: 180,
      friction: 12,
    },
    stiff: {
      tension: 210,
      friction: 20,
    },
    slow: {
      tension: 280,
      friction: 60,
    },
    molasses: {
      tension: 280,
      friction: 120,
    },
  },
  _ = {
    ..._.default,
    mass: 1,
    damping: 1,
    easing: _.linear,
    clamp: !1,
  },
  _ = class {
    constructor() {
      (this.velocity = 0), Object.assign(this, _);
    }
  };
function _(_, _, _) {
  _ &&
    ((_ = {
      ..._,
    }),
    _(_, _),
    (_ = {
      ..._,
      ..._,
    })),
    _(_, _),
    Object.assign(_, _);
  for (let _ in _) _[_] == null && (_[_] = _[_]);
  let { frequency: _, damping: _ } = _,
    { mass: _ } = _;
  return (
    _.und(_) ||
      (_ < 0.01 && (_ = 0.01),
      _ < 0 && (_ = 0),
      (_.tension = Math.pow((2 * Math._) / _, 2) * _),
      (_.friction = (4 * Math._ * _ * _) / _)),
    _
  );
}
function _(_, _) {
  if (!_.und(_.decay)) _.duration = void 0;
  else {
    let _ = !_.und(_.tension) || !_.und(_.friction);
    (_ || !_.und(_.frequency) || !_.und(_.damping) || !_.und(_.mass)) &&
      ((_.duration = void 0), (_.decay = void 0)),
      _ && (_.frequency = void 0);
  }
}
var _ = [],
  _ = class {
    constructor() {
      (this.changed = !1),
        (this.values = _),
        (this.toValues = null),
        (this.fromValues = _),
        (this.config = new _()),
        (this.immediate = !1);
    }
  };
function _(_, { key: _, props: _, defaultProps: _, state: _, actions: _ }) {
  return new Promise((_, _) => {
    let _,
      _,
      _ = _(_.cancel ?? _?.cancel, _);
    if (_) _();
    else {
      _.und(_.pause) || (_.paused = _(_.pause, _));
      let _ = _?.pause;
      _ !== !0 && (_ = _.paused || _(_, _)),
        (_ = _(_.delay || 0, _)),
        _ ? (_.resumeQueue.add(_), _.pause()) : (_.resume(), _());
    }
    function _() {
      _.resumeQueue.add(_),
        _.timeouts.delete(_),
        _.cancel(),
        (_ = _.time - _.now());
    }
    function _() {
      _ > 0 && !_.skipAnimation
        ? ((_.delayed = !0),
          (_ = _.setTimeout(_, _)),
          _.pauseQueue.add(_),
          _.timeouts.add(_))
        : _();
    }
    function _() {
      _.delayed && (_.delayed = !1),
        _.pauseQueue.delete(_),
        _.timeouts.delete(_),
        _ <= (_.cancelId || 0) && (_ = !0);
      try {
        _.start(
          {
            ..._,
            callId: _,
            cancel: _,
          },
          _,
        );
      } catch (_) {
        _(_);
      }
    }
  });
}
var _ = (_, _) =>
    _.length == 1
      ? _[0]
      : _.some((_) => _.cancelled)
        ? _(_.get())
        : _.every((_) => _.noop)
          ? _(_.get())
          : _(
              _.get(),
              _.every((_) => _.finished),
            ),
  _ = (_) => ({
    value: _,
    noop: !0,
    finished: !0,
    cancelled: !1,
  }),
  _ = (_, _, _ = !1) => ({
    value: _,
    finished: _,
    cancelled: _,
  }),
  _ = (_) => ({
    value: _,
    cancelled: !0,
    finished: !1,
  });
function _(_, _, _, _) {
  let { callId: _, parentId: _, onRest: _ } = _,
    { asyncTo: _, promise: _ } = _;
  return !_ && _ === _ && !_.reset
    ? _
    : (_.promise = (async () => {
        (_.asyncId = _), (_.asyncTo = _);
        let _ = _(_, (_, _) => (_ === "onRest" ? void 0 : _)),
          _,
          _,
          _ = new Promise((_, _) => ((_ = _), (_ = _))),
          _ = (_) => {
            let _ =
              (_ <= (_.cancelId || 0) && _(_)) || (_ !== _.asyncId && _(_, !1));
            if (_) throw ((_.result = _), _(_), _);
          },
          _ = (_, _) => {
            let _ = new _(),
              _ = new _();
            return (async () => {
              if (_.skipAnimation) throw (_(_), (_.result = _(_, !1)), _(_), _);
              _(_);
              let _ = _.obj(_)
                ? {
                    ..._,
                  }
                : {
                    ..._,
                    _: _,
                  };
              (_.parentId = _),
                _(_, (_, _) => {
                  _.und(_[_]) && (_[_] = _);
                });
              let _ = await _.start(_);
              return (
                _(_),
                _.paused &&
                  (await new Promise((_) => {
                    _.resumeQueue.add(_);
                  })),
                _
              );
            })();
          },
          _;
        if (_.skipAnimation) return _(_), _(_, !1);
        try {
          let _;
          _.arr(_)
            ? (_ = (async (_) => {
                for (let _ of _) await _(_);
              })(_))
            : (_ = Promise.resolve(_(_, _.stop.bind(_)))),
            await Promise.all([_.then(_), _]),
            (_ = _(_.get(), !0, !1));
        } catch (_) {
          if (_ instanceof _) _ = _.result;
          else if (_ instanceof _) _ = _.result;
          else throw _;
        } finally {
          _ == _.asyncId &&
            ((_.asyncId = _),
            (_.asyncTo = _ ? _ : void 0),
            (_.promise = _ ? _ : void 0));
        }
        return (
          _.fun(_) &&
            _.batchedUpdates(() => {
              _(_, _, _.item);
            }),
          _
        );
      })());
}
function _(_, _) {
  _(_.timeouts, (_) => _.cancel()),
    _.pauseQueue.clear(),
    _.resumeQueue.clear(),
    (_.asyncId = _.asyncTo = _.promise = void 0),
    _ && (_.cancelId = _);
}
var _ = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
      );
    }
  },
  _ = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
    }
  },
  _ = (_) => _ instanceof _,
  _ = 1,
  _ = class extends _ {
    constructor() {
      super(...arguments), (this._ = _++), (this._priority = 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(_) {
      this._priority != _ && ((this._priority = _), this._onPriorityChange(_));
    }
    get() {
      let _ = _(this);
      return _ && _.getValue();
    }
    to(..._) {
      return _._(this, _);
    }
    interpolate(..._) {
      return _(), _._(this, _);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(_) {
      _ == 1 && this._attach();
    }
    observerRemoved(_) {
      _ == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(_, _ = !1) {
      _(this, {
        type: "change",
        parent: this,
        value: _,
        idle: _,
      });
    }
    _onPriorityChange(_) {
      this.idle || _.sort(this),
        _(this, {
          type: "priority",
          parent: this,
          priority: _,
        });
    }
  },
  _ = Symbol.for("SpringPhase"),
  _ = 1,
  _ = 2,
  _ = 4,
  _ = (_) => (_[_] & _) > 0,
  _ = (_) => (_[_] & _) > 0,
  _ = (_) => (_[_] & _) > 0,
  _ = (_, _) => (_ ? (_[_] |= _ | _) : (_[_] &= ~_)),
  _ = (_, _) => (_ ? (_[_] |= _) : (_[_] &= ~_)),
  _ = class extends _ {
    constructor(_, _) {
      if (
        (super(),
        (this.animation = new _()),
        (this.defaultProps = {}),
        (this._state = {
          paused: !1,
          delayed: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._pendingCalls = new Set()),
        (this._lastCallId = 0),
        (this._lastToId = 0),
        (this._memoizedDuration = 0),
        !_.und(_) || !_.und(_))
      ) {
        let _ = _.obj(_)
          ? {
              ..._,
            }
          : {
              ..._,
              from: _,
            };
        _.und(_.default) && (_.default = !0), this.start(_);
      }
    }
    get idle() {
      return !(_(this) || this._state.asyncTo) || _(this);
    }
    get goal() {
      return _(this.animation._);
    }
    get velocity() {
      let _ = _(this);
      return _ instanceof _
        ? _.lastVelocity || 0
        : _.getPayload().map((_) => _.lastVelocity || 0);
    }
    get hasAnimated() {
      return _(this);
    }
    get isAnimating() {
      return _(this);
    }
    get isPaused() {
      return _(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(_) {
      let _ = !0,
        _ = !1,
        _ = this.animation,
        { toValues: _ } = _,
        { config: _ } = _,
        _ = _(_._);
      !_ && _(_._) && (_ = _(_(_._))),
        _.values.forEach((_, _) => {
          if (_.done) return;
          let _ = _.constructor == _ ? 1 : _ ? _[_].lastPosition : _[_],
            _ = _.immediate,
            _ = _;
          if (!_) {
            if (((_ = _.lastPosition), _.tension <= 0)) {
              _.done = !0;
              return;
            }
            let _ = (_.elapsedTime += _),
              _ = _.fromValues[_],
              _ =
                _._ != null
                  ? _._
                  : (_._ = _.arr(_.velocity) ? _.velocity[_] : _.velocity),
              _,
              _ =
                _.precision ||
                (_ == _ ? 0.005 : Math.min(1, Math.abs(_ - _) * 0.001));
            if (_.und(_.duration))
              if (_.decay) {
                let _ = _.decay === !0 ? 0.998 : _.decay,
                  _ = Math.exp(-(1 - _) * _);
                (_ = _ + (_ / (1 - _)) * (1 - _)),
                  (_ = Math.abs(_.lastPosition - _) <= _),
                  (_ = _ * _);
              } else {
                _ = _.lastVelocity == null ? _ : _.lastVelocity;
                let _ = _.restVelocity || _ / 10,
                  _ = _.clamp ? 0 : _.bounce,
                  _ = !_.und(_),
                  _ = _ == _ ? _._ > 0 : _ < _,
                  _,
                  _ = !1,
                  _ = 1,
                  _ = Math.ceil(_ / _);
                for (
                  let _ = 0;
                  _ < _ &&
                  ((_ = Math.abs(_) > _),
                  !(!_ && ((_ = Math.abs(_ - _) <= _), _)));
                  ++_
                ) {
                  _ &&
                    ((_ = _ == _ || _ > _ == _), _ && ((_ = -_ * _), (_ = _)));
                  let _ = -_.tension * 1e-6 * (_ - _),
                    _ = -_.friction * 0.001 * _,
                    _ = (_ + _) / _.mass;
                  (_ = _ + _ * _), (_ = _ + _ * _);
                }
              }
            else {
              let _ = 1;
              _.duration > 0 &&
                (this._memoizedDuration !== _.duration &&
                  ((this._memoizedDuration = _.duration),
                  _.durationProgress > 0 &&
                    ((_.elapsedTime = _.duration * _.durationProgress),
                    (_ = _.elapsedTime += _))),
                (_ = (_.progress || 0) + _ / this._memoizedDuration),
                (_ = _ > 1 ? 1 : _ < 0 ? 0 : _),
                (_.durationProgress = _)),
                (_ = _ + _.easing(_) * (_ - _)),
                (_ = (_ - _.lastPosition) / _),
                (_ = _ == 1);
            }
            (_.lastVelocity = _),
              Number.isNaN(_) &&
                (console.warn("Got NaN while animating:", this), (_ = !0));
          }
          _ && !_[_].done && (_ = !1),
            _ ? (_.done = !0) : (_ = !1),
            _.setValue(_, _.round) && (_ = !0);
        });
      let _ = _(this),
        _ = _.getValue();
      if (_) {
        let _ = _(_._);
        (_ !== _ || _) && !_.decay
          ? (_.setValue(_), this._onChange(_))
          : _ && _.decay && this._onChange(_),
          this._stop();
      } else _ && this._onChange(_);
    }
    set(_) {
      return (
        _.batchedUpdates(() => {
          this._stop(), this._focus(_), this._set(_);
        }),
        this
      );
    }
    pause() {
      this._update({
        pause: !0,
      });
    }
    resume() {
      this._update({
        pause: !1,
      });
    }
    finish() {
      if (_(this)) {
        let { _: _, config: _ } = this.animation;
        _.batchedUpdates(() => {
          this._onStart(), _.decay || this._set(_, !1), this._stop();
        });
      }
      return this;
    }
    update(_) {
      return (this.queue || (this.queue = [])).push(_), this;
    }
    start(_, _) {
      let _;
      return (
        _.und(_)
          ? ((_ = this.queue || []), (this.queue = []))
          : (_ = [
              _.obj(_)
                ? _
                : {
                    ..._,
                    _: _,
                  },
            ]),
        Promise.all(_.map((_) => this._update(_))).then((_) => _(this, _))
      );
    }
    stop(_) {
      let { _: _ } = this.animation;
      return (
        this._focus(this.get()),
        _(this._state, _ && this._lastCallId),
        _.batchedUpdates(() => this._stop(_, _)),
        this
      );
    }
    reset() {
      this._update({
        reset: !0,
      });
    }
    eventObserved(_) {
      _.type == "change"
        ? this._start()
        : _.type == "priority" && (this.priority = _.priority + 1);
    }
    _prepareNode(_) {
      let _ = this.key || "",
        { _: _, from: _ } = _;
      (_ = _.obj(_) ? _[_] : _),
        (_ == null || _(_)) && (_ = void 0),
        (_ = _.obj(_) ? _[_] : _),
        _ == null && (_ = void 0);
      let _ = {
        _: _,
        from: _,
      };
      return (
        _(this) ||
          (_.reverse && ([_, _] = [_, _]),
          (_ = _(_)),
          _.und(_) ? _(this) || this._set(_) : this._set(_)),
        _
      );
    }
    _update({ ..._ }, _) {
      let { key: _, defaultProps: _ } = this;
      _.default &&
        Object.assign(
          _,
          _(_, (_, _) => (/^on/.test(_) ? _(_, _) : _)),
        ),
        _(this, _, "onProps"),
        _(this, "onProps", _, this);
      let _ = this._prepareNode(_);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
        );
      let _ = this._state;
      return _(++this._lastCallId, {
        key: _,
        props: _,
        defaultProps: _,
        state: _,
        actions: {
          pause: () => {
            _(this) ||
              (_(this, !0),
              _(_.pauseQueue),
              _(this, "onPause", _(this, _(this, this.animation._)), this));
          },
          resume: () => {
            _(this) &&
              (_(this, !1),
              _(this) && this._resume(),
              _(_.resumeQueue),
              _(this, "onResume", _(this, _(this, this.animation._)), this));
          },
          start: this._merge.bind(this, _),
        },
      }).then((_) => {
        if (_.loop && _.finished && !(_ && _.noop)) {
          let _ = _(_);
          if (_) return this._update(_, !0);
        }
        return _;
      });
    }
    _merge(_, _, _) {
      if (_.cancel) return this.stop(!0), _(_(this));
      let _ = !_.und(_._),
        _ = !_.und(_.from);
      if (_ || _)
        if (_.callId > this._lastToId) this._lastToId = _.callId;
        else return _(_(this));
      let { key: _, defaultProps: _, animation: _ } = this,
        { _: _, from: _ } = _,
        { _: _ = _, from: _ = _ } = _;
      _ && !_ && (!_.default || _.und(_)) && (_ = _),
        _.reverse && ([_, _] = [_, _]);
      let _ = !_(_, _);
      _ && (_.from = _), (_ = _(_));
      let _ = !_(_, _);
      _ && this._focus(_);
      let _ = _(_._),
        { config: _ } = _,
        { decay: _, velocity: _ } = _;
      (_ || _) && (_.velocity = 0),
        _.config &&
          !_ &&
          _(_, _(_.config, _), _.config !== _.config ? _(_.config, _) : void 0);
      let _ = _(this);
      if (!_ || _.und(_)) return _(_(this, !0));
      let _ = _.und(_.reset) ? _ && !_.default : !_.und(_) && _(_.reset, _),
        _ = _ ? _ : this.get(),
        _ = _(_),
        _ = _.num(_) || _.arr(_) || _(_),
        _ = !_ && (!_ || _(_.immediate || _.immediate, _));
      if (_) {
        let _ = _(_);
        if (_ !== _.constructor)
          if (_) _ = this._set(_);
          else
            throw Error(
              `Cannot animate between ${_.constructor.name} and ${_.name}, as the "to" prop suggests`,
            );
      }
      let _ = _.constructor,
        _ = _(_),
        _ = !1;
      if (!_) {
        let _ = _ || (!_(this) && _);
        (_ || _) && ((_ = _(_(_), _)), (_ = !_)),
          ((!_(_.immediate, _) && !_) || !_(_.decay, _) || !_(_.velocity, _)) &&
            (_ = !0);
      }
      if (
        (_ && _(this) && (_.changed && !_ ? (_ = !0) : _ || this._stop(_)),
        !_ &&
          ((_ || _(_)) &&
            ((_.values = _.getPayload()),
            (_.toValues = _(_) ? null : _ == _ ? [1] : _(_))),
          _.immediate != _ && ((_.immediate = _), !_ && !_ && this._set(_)),
          _))
      ) {
        let { onRest: _ } = _;
        _(_, (_) => _(this, _, _));
        let _ = _(this, _(this, _));
        _(this._pendingCalls, _),
          this._pendingCalls.add(_),
          _.changed &&
            _.batchedUpdates(() => {
              (_.changed = !_),
                _?.(_, this),
                _ ? _(_.onRest, _) : _.onStart?.(_, this);
            });
      }
      _ && this._set(_),
        _
          ? _(_(_._, _, this._state, this))
          : _
            ? this._start()
            : _(this) && !_
              ? this._pendingCalls.add(_)
              : _(_(_));
    }
    _focus(_) {
      let _ = this.animation;
      _ !== _._ &&
        (_(this) && this._detach(), (_._ = _), _(this) && this._attach());
    }
    _attach() {
      let _ = 0,
        { _: _ } = this.animation;
      _(_) && (_(_, this), _(_) && (_ = _.priority + 1)), (this.priority = _);
    }
    _detach() {
      let { _: _ } = this.animation;
      _(_) && _(_, this);
    }
    _set(_, _ = !0) {
      let _ = _(_);
      if (!_.und(_)) {
        let _ = _(this);
        if (!_ || !_(_, _.getValue())) {
          let _ = _(_);
          !_ || _.constructor != _ ? _(this, _.create(_)) : _.setValue(_),
            _ &&
              _.batchedUpdates(() => {
                this._onChange(_, _);
              });
        }
      }
      return _(this);
    }
    _onStart() {
      let _ = this.animation;
      _.changed ||
        ((_.changed = !0), _(this, "onStart", _(this, _(this, _._)), this));
    }
    _onChange(_, _) {
      _ || (this._onStart(), _(this.animation.onChange, _, this)),
        _(this.defaultProps.onChange, _, this),
        super._onChange(_, _);
    }
    _start() {
      let _ = this.animation;
      _(this).reset(_(_._)),
        _.immediate || (_.fromValues = _.values.map((_) => _.lastPosition)),
        _(this) || (_(this, !0), _(this) || this._resume());
    }
    _resume() {
      _.skipAnimation ? this.finish() : _.start(this);
    }
    _stop(_, _) {
      if (_(this)) {
        _(this, !1);
        let _ = this.animation;
        _(_.values, (_) => {
          _.done = !0;
        }),
          _.toValues && (_.onChange = _.onPause = _.onResume = void 0),
          _(this, {
            type: "idle",
            parent: this,
          });
        let _ = _ ? _(this.get()) : _(this.get(), _(this, _ ?? _._));
        _(this._pendingCalls, _),
          _.changed && ((_.changed = !1), _(this, "onRest", _, this));
      }
    }
  };
function _(_, _) {
  let _ = _(_),
    _ = _(_.get());
  return _(_, _);
}
function _(_, _ = _.loop, _ = _._) {
  let _ = _(_);
  if (_) {
    let _ = _ !== !0 && _(_),
      _ = (_ || _).reverse,
      _ = !_ || _.reset;
    return _({
      ..._,
      loop: _,
      default: !1,
      pause: void 0,
      _: !_ || _(_) ? _ : void 0,
      from: _ ? _.from : void 0,
      reset: _,
      ..._,
    });
  }
}
function _(_) {
  let { _: _, from: _ } = (_ = _(_)),
    _ = new Set();
  return (
    _.obj(_) && _(_, _),
    _.obj(_) && _(_, _),
    (_.keys = _.size ? Array.from(_) : null),
    _
  );
}
function _(_) {
  let _ = _(_);
  return _.und(_.default) && (_.default = _(_)), _;
}
function _(_, _) {
  _(_, (_, _) => _ != null && _.add(_));
}
var _ = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function _(_, _, _) {
  _.animation[_] = _[_] !== _(_, _) ? _(_[_], _.key) : void 0;
}
function _(_, _, ..._) {
  _.animation[_]?.(..._), _.defaultProps[_]?.(..._);
}
var _ = ["onStart", "onChange", "onRest"],
  _ = 1,
  _ = class {
    constructor(_, _) {
      (this._ = _++),
        (this.springs = {}),
        (this.queue = []),
        (this._lastAsyncId = 0),
        (this._active = new Set()),
        (this._changed = new Set()),
        (this._started = !1),
        (this._state = {
          paused: !1,
          pauseQueue: new Set(),
          resumeQueue: new Set(),
          timeouts: new Set(),
        }),
        (this._events = {
          onStart: new Map(),
          onChange: new Map(),
          onRest: new Map(),
        }),
        (this._onFrame = this._onFrame.bind(this)),
        _ && (this._flush = _),
        _ &&
          this.start({
            default: !0,
            ..._,
          });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (_) => _.idle && !_.isDelayed && !_.isPaused,
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(_) {
      this._item = _;
    }
    get() {
      let _ = {};
      return this.each((_, _) => (_[_] = _.get())), _;
    }
    set(_) {
      for (let _ in _) {
        let _ = _[_];
        _.und(_) || this.springs[_].set(_);
      }
    }
    update(_) {
      return _ && this.queue.push(_(_)), this;
    }
    start(_) {
      let { queue: _ } = this;
      return (
        _ ? (_ = _(_).map(_)) : (this.queue = []),
        this._flush ? this._flush(this, _) : (_(this, _), _(this, _))
      );
    }
    stop(_, _) {
      if ((_ !== !!_ && (_ = _), _)) {
        let _ = this.springs;
        _(_(_), (_) => _[_].stop(!!_));
      } else _(this._state, this._lastAsyncId), this.each((_) => _.stop(!!_));
      return this;
    }
    pause(_) {
      if (_.und(_))
        this.start({
          pause: !0,
        });
      else {
        let _ = this.springs;
        _(_(_), (_) => _[_].pause());
      }
      return this;
    }
    resume(_) {
      if (_.und(_))
        this.start({
          pause: !1,
        });
      else {
        let _ = this.springs;
        _(_(_), (_) => _[_].resume());
      }
      return this;
    }
    each(_) {
      _(this.springs, _);
    }
    _onFrame() {
      let { onStart: _, onChange: _, onRest: _ } = this._events,
        _ = this._active.size > 0,
        _ = this._changed.size > 0;
      ((_ && !this._started) || (_ && !this._started)) &&
        ((this._started = !0),
        _(_, ([_, _]) => {
          (_.value = this.get()), _(_, this, this._item);
        }));
      let _ = !_ && this._started,
        _ = _ || (_ && _.size) ? this.get() : null;
      _ &&
        _.size &&
        _(_, ([_, _]) => {
          (_.value = _), _(_, this, this._item);
        }),
        _ &&
          ((this._started = !1),
          _(_, ([_, _]) => {
            (_.value = _), _(_, this, this._item);
          }));
    }
    eventObserved(_) {
      if (_.type == "change")
        this._changed.add(_.parent), _.idle || this._active.add(_.parent);
      else if (_.type == "idle") this._active.delete(_.parent);
      else return;
      _.onFrame(this._onFrame);
    }
  };
function _(_, _) {
  return Promise.all(_.map((_) => _(_, _))).then((_) => _(_, _));
}
async function _(_, _, _) {
  let { keys: _, _: _, from: _, loop: _, onRest: _, onResolve: _ } = _,
    _ = _.obj(_.default) && _.default;
  _ && (_.loop = !1), _ === !1 && (_._ = null), _ === !1 && (_.from = null);
  let _ = _.arr(_) || _.fun(_) ? _ : void 0;
  _
    ? ((_._ = void 0), (_.onRest = void 0), _ && (_.onRest = void 0))
    : _(_, (_) => {
        let _ = _[_];
        if (_.fun(_)) {
          let _ = _._events[_];
          (_[_] = ({ finished: _, cancelled: _ }) => {
            let _ = _.get(_);
            _
              ? (_ || (_.finished = !1), _ && (_.cancelled = !0))
              : _.set(_, {
                  value: null,
                  finished: _ || !1,
                  cancelled: _ || !1,
                });
          }),
            _ && (_[_] = _[_]);
        }
      });
  let _ = _._state;
  _.pause === !_.paused
    ? ((_.paused = _.pause), _(_.pause ? _.pauseQueue : _.resumeQueue))
    : _.paused && (_.pause = !0);
  let _ = (_ || Object.keys(_.springs)).map((_) => _.springs[_].start(_)),
    _ = _.cancel === !0 || _(_, "cancel") === !0;
  (_ || (_ && _.asyncId)) &&
    _.push(
      _(++_._lastAsyncId, {
        props: _,
        state: _,
        actions: {
          pause: _,
          resume: _,
          start(_, _) {
            _
              ? (_(_, _._lastAsyncId), _(_(_)))
              : ((_.onRest = _), _(_(_, _, _, _)));
          },
        },
      }),
    ),
    _.paused &&
      (await new Promise((_) => {
        _.resumeQueue.add(_);
      }));
  let _ = _(_, await Promise.all(_));
  if (_ && _.finished && !(_ && _.noop)) {
    let _ = _(_, _, _);
    if (_) return _(_, [_]), _(_, _, !0);
  }
  return _ && _.batchedUpdates(() => _(_, _, _.item)), _;
}
function _(_, _) {
  let _ = {
    ..._.springs,
  };
  return (
    _ &&
      _(_(_), (_) => {
        _.und(_.keys) && (_ = _(_)),
          _.obj(_._) ||
            (_ = {
              ..._,
              _: void 0,
            }),
          _(_, _, (_) => _(_));
      }),
    _(_, _),
    _
  );
}
function _(_, _) {
  _(_, (_, _) => {
    _.springs[_] || ((_.springs[_] = _), _(_, _));
  });
}
function _(_, _) {
  let _ = new _();
  return (_.key = _), _ && _(_, _), _;
}
function _(_, _, _) {
  _.keys &&
    _(_.keys, (_) => {
      (_[_] || (_[_] = _(_)))._prepareNode(_);
    });
}
function _(_, _) {
  _(_, (_) => {
    _(_.springs, _, (_) => _(_, _));
  });
}
var _ = _.createContext({
    pause: !1,
    immediate: !1,
  }),
  _ = () => {
    let _ = [],
      _ = function (_) {
        _();
        let _ = [];
        return (
          _(_, (_, _) => {
            if (_.und(_)) _.push(_.start());
            else {
              let _ = _(_, _, _);
              _ && _.push(_.start(_));
            }
          }),
          _
        );
      };
    (_.current = _),
      (_.add = function (_) {
        _.includes(_) || _.push(_);
      }),
      (_.delete = function (_) {
        let _ = _.indexOf(_);
        ~_ && _.splice(_, 1);
      }),
      (_.pause = function () {
        return _(_, (_) => _.pause(...arguments)), this;
      }),
      (_.resume = function () {
        return _(_, (_) => _.resume(...arguments)), this;
      }),
      (_.set = function (_) {
        _(_, (_, _) => {
          let _ = _.fun(_) ? _(_, _) : _;
          _ && _.set(_);
        });
      }),
      (_.start = function (_) {
        let _ = [];
        return (
          _(_, (_, _) => {
            if (_.und(_)) _.push(_.start());
            else {
              let _ = this._getProps(_, _, _);
              _ && _.push(_.start(_));
            }
          }),
          _
        );
      }),
      (_.stop = function () {
        return _(_, (_) => _.stop(...arguments)), this;
      }),
      (_.update = function (_) {
        return _(_, (_, _) => _.update(this._getProps(_, _, _))), this;
      });
    let _ = function (_, _, _) {
      return _.fun(_) ? _(_, _) : _;
    };
    return (_._getProps = _), _;
  };
function _(_, _, _) {
  let _ = _.fun(_) && _;
  _ && !_ && (_ = []);
  let _ = (0, _.useMemo)(() => (_ || arguments.length == 3 ? _() : void 0), []),
    _ = (0, _.useRef)(0),
    _ = _(),
    _ = (0, _.useMemo)(
      () => ({
        ctrls: [],
        queue: [],
        flush(_, _) {
          let _ = _(_, _);
          return _.current > 0 &&
            !_.queue.length &&
            !Object.keys(_).some((_) => !_.springs[_])
            ? _(_, _)
            : new Promise((_) => {
                _(_, _),
                  _.queue.push(() => {
                    _(_(_, _));
                  }),
                  _();
              });
        },
      }),
      [],
    ),
    _ = (0, _.useRef)([..._.ctrls]),
    _ = (0, _.useRef)([]),
    _ = _(_) || 0;
  (0, _.useMemo)(() => {
    _(_.current.slice(_, _), (_) => {
      _(_, _), _.stop(!0);
    }),
      (_.current.length = _),
      _(_, _);
  }, [_]),
    (0, _.useMemo)(() => {
      _(0, Math.min(_, _));
    }, _);
  function _(_, _) {
    for (let _ = _; _ < _; _++) {
      let _ = _.current[_] || (_.current[_] = new _(null, _.flush)),
        _ = _ ? _(_, _) : _[_];
      _ && (_.current[_] = _(_));
    }
  }
  let _ = _.current.map((_, _) => _(_, _.current[_])),
    _ = (0, _.useContext)(_),
    _ = _(_),
    _ = _ !== _ && _(_);
  _(() => {
    _.current++, (_.ctrls = _.current);
    let { queue: _ } = _;
    _.length && ((_.queue = []), _(_, (_) => _())),
      _(_.current, (_, _) => {
        _?.add(_),
          _ &&
            _.start({
              default: _,
            });
        let _ = _.current[_];
        _ && (_(_, _.ref), _.ref ? _.queue.push(_) : _.start(_));
      });
  }),
    _(() => () => {
      _(_.ctrls, (_) => _.stop(!0));
    });
  let _ = _.map((_) => ({
    ..._,
  }));
  return _ ? [_, _] : _;
}
function _(_, _) {
  let _ = _.fun(_),
    [[_], _] = _(1, _ ? _ : [_], _ ? _ || [] : _);
  return _ || arguments.length == 2 ? [_, _] : _;
}
var _ = class extends _ {
  constructor(_, _) {
    super(),
      (this.source = _),
      (this.idle = !0),
      (this._active = new Set()),
      (this.calc = _(..._));
    let _ = this._get(),
      _ = _(_);
    _(this, _.create(_));
  }
  advance(_) {
    let _ = this._get(),
      _ = this.get();
    _(_, _) || (_(this).setValue(_), this._onChange(_, this.idle)),
      !this.idle && _(this._active) && _(this);
  }
  _get() {
    let _ = _.arr(this.source) ? this.source.map(_) : _(_(this.source));
    return this.calc(..._);
  }
  _start() {
    this.idle &&
      !_(this._active) &&
      ((this.idle = !1),
      _(_(this), (_) => {
        _.done = !1;
      }),
      _.skipAnimation
        ? (_.batchedUpdates(() => this.advance()), _(this))
        : _.start(this));
  }
  _attach() {
    let _ = 1;
    _(_(this.source), (_) => {
      _(_) && _(_, this),
        _(_) &&
          (_.idle || this._active.add(_), (_ = Math.max(_, _.priority + 1)));
    }),
      (this.priority = _),
      this._start();
  }
  _detach() {
    _(_(this.source), (_) => {
      _(_) && _(_, this);
    }),
      this._active.clear(),
      _(this);
  }
  eventObserved(_) {
    _.type == "change"
      ? _.idle
        ? this.advance()
        : (this._active.add(_.parent), this._start())
      : _.type == "idle"
        ? this._active.delete(_.parent)
        : _.type == "priority" &&
          (this.priority = _(this.source).reduce(
            (_, _) => Math.max(_, (_(_) ? _.priority : 0) + 1),
            0,
          ));
  }
};
function _(_) {
  return _.idle !== !1;
}
function _(_) {
  return !_.size || Array.from(_).every(_);
}
function _(_) {
  _.idle ||
    ((_.idle = !0),
    _(_(_), (_) => {
      _.done = !0;
    }),
    _(_, {
      type: "idle",
      parent: _,
    }));
}
_.assign({
  createStringInterpolator: _,
  _: (_, _) => new _(_, _),
});
var _ = _.advance;
var _ = _(_(), 1);
var _ = /^--/;
function _(_, _) {
  return _ == null || typeof _ == "boolean" || _ === ""
    ? ""
    : typeof _ == "number" &&
        _ !== 0 &&
        !_.test(_) &&
        !(_.hasOwnProperty(_) && _[_])
      ? _ + "px"
      : ("" + _).trim();
}
var _ = {};
function _(_, _) {
  if (!_.nodeType || !_.setAttribute) return !1;
  let _ =
      _.nodeName === "filter" ||
      (_.parentNode && _.parentNode.nodeName === "filter"),
    {
      className: _,
      style: _,
      children: _,
      scrollTop: _,
      scrollLeft: _,
      viewBox: _,
      ..._
    } = _,
    _ = Object.values(_),
    _ = Object.keys(_).map((_) =>
      _ || _.hasAttribute(_)
        ? _
        : _[_] || (_[_] = _.replace(/([A-Z])/g, (_) => "-" + _.toLowerCase())),
    );
  _ !== void 0 && (_.textContent = _);
  for (let _ in _)
    if (_.hasOwnProperty(_)) {
      let _ = _(_, _[_]);
      _.test(_) ? _.style.setProperty(_, _) : (_.style[_] = _);
    }
  _.forEach((_, _) => {
    _.setAttribute(_, _[_]);
  }),
    _ !== void 0 && (_.className = _),
    _ !== void 0 && (_.scrollTop = _),
    _ !== void 0 && (_.scrollLeft = _),
    _ !== void 0 && _.setAttribute("viewBox", _);
}
var _ = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  _ = (_, _) => _ + _.charAt(0).toUpperCase() + _.substring(1),
  _ = ["Webkit", "Ms", "Moz", "O"];
_ = Object.keys(_).reduce(
  (_, _) => (_.forEach((_) => (_[_(_, _)] = _[_])), _),
  _,
);
var _ = /^(matrix|translate|scale|rotate|skew)/,
  _ = /^(translate)/,
  _ = /^(rotate|skew)/,
  _ = (_, _) => (_.num(_) && _ !== 0 ? _ + _ : _),
  _ = (_, _) =>
    _.arr(_)
      ? _.every((_) => _(_, _))
      : _.num(_)
        ? _ === _
        : parseFloat(_) === _,
  _ = class extends _ {
    constructor({ _: _, _: _, _: _, ..._ }) {
      let _ = [],
        _ = [];
      (_ || _ || _) &&
        (_.push([_ || 0, _ || 0, _ || 0]),
        _.push((_) => [
          `translate3d(${_.map((_) => _(_, "px")).join(",")})`,
          _(_, 0),
        ])),
        _(_, (_, _) => {
          if (_ === "transform")
            _.push([_ || ""]), _.push((_) => [_, _ === ""]);
          else if (_.test(_)) {
            if ((delete _[_], _.und(_))) return;
            let _ = _.test(_) ? "px" : _.test(_) ? "deg" : "";
            _.push(_(_)),
              _.push(
                _ === "rotate3d"
                  ? ([_, _, _, _]) => [
                      `rotate3d(${_},${_},${_},${_(_, _)})`,
                      _(_, 0),
                    ]
                  : (_) => [
                      `${_}(${_.map((_) => _(_, _)).join(",")})`,
                      _(_, _.startsWith("scale") ? 1 : 0),
                    ],
              );
          }
        }),
        _.length && (_.transform = new _(_, _)),
        super(_);
    }
  },
  _ = class extends _ {
    constructor(_, _) {
      super(), (this.inputs = _), (this.transforms = _), (this._value = null);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let _ = "",
        _ = !0;
      return (
        _(this.inputs, (_, _) => {
          let _ = _(_[0]),
            [_, _] = this.transforms[_](_.arr(_) ? _ : _.map(_));
          (_ += " " + _), (_ = _ && _);
        }),
        _ ? "none" : _
      );
    }
    observerAdded(_) {
      _ == 1 && _(this.inputs, (_) => _(_, (_) => _(_) && _(_, this)));
    }
    observerRemoved(_) {
      _ == 0 && _(this.inputs, (_) => _(_, (_) => _(_) && _(_, this)));
    }
    eventObserved(_) {
      _.type == "change" && (this._value = null), _(this, _);
    }
  },
  _ = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
_.assign({
  batchedUpdates: _.unstable_batchedUpdates,
  createStringInterpolator: _,
  colors: _,
});
var _ = _(_, {
    applyAnimatedValues: _,
    createAnimatedStyle: (_) => new _(_),
    getComponentProps: ({ scrollTop: _, scrollLeft: _, ..._ }) => _,
  }),
  _ = _.animated;
var _ = _(_()),
  _ = 8e3,
  _ = 200;
function _(_) {
  switch (_) {
    case 1:
      return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
    case 2:
      return `hsl(${51 + Math.random() * -16}, 93%, 54%)`;
    default:
      return `hsl(${Math.random() * 360}, 100%, 40%)`;
  }
}
function _(_) {
  return _ == 2 ? `hue-rotate(${360 + _(-30, 10)}deg)` : "";
}
function _(_, _) {
  let _ = [];
  if (!_) return _;
  let { width: _, height: _ } = _;
  for (let _ = 0; _ < _; _++) {
    let _ = Math.random(),
      _ = Math.random() * _,
      _ = Math.random() * _,
      _ = (Math.random() - 0.5) * 4 * Math._ * 20,
      _ = Math.random() + 0.5,
      _ = [Math.random() * _ - _ - 20, _ + 20 + Math.random() * _ * _],
      _ = _ <= 1e3 ? 1 : _ / 1e3,
      _ = _ * _ * (_ == 1 ? 2 : 1),
      _ = (Math.random() - 0.5) * _,
      _ = (Math.random() - 0.5) * _,
      _ = [_, _ + _],
      _ = _(_),
      _ = _(_);
    _.push({
      rotationCoefficient: _,
      rotationRatioY: _,
      rotationRatioX: _,
      rotationRatioZ: _,
      yRange: _,
      xRange: _,
      scale: _,
      colorHue: _,
      filter: _,
    });
  }
  return _;
}
function _(_, _, _) {
  let _ = _ == 0,
    {
      rotationCoefficient: _,
      rotationRatioY: _,
      rotationRatioX: _,
      rotationRatioZ: _,
      yRange: _,
      xRange: _,
      scale: _,
      colorHue: _,
      filter: _,
    } = _;
  return {
    backgroundColor: _,
    fill: _,
    filter: _,
    flRandom: 0,
    transform: _.interpolate((_) => {
      let _ = _ * _ * _,
        _ = _ * _ * _,
        _ = _ * _ * _,
        _ = _ * (_[1] - _[0]) + _[0];
      return `translate(${_ * (_[1] - _[0]) + _[0]}px, ${_}px) rotateY(${_}rad) rotateX(${_}rad) rotateZ(${_}rad) scale(${_})`;
    }),
  };
}
function _(_, _, _) {
  if (Math.random() > 0.1) return null;
  let {
    rotationCoefficient: _,
    rotationRatioZ: _,
    yRange: _,
    xRange: _,
    scale: _,
    colorHue: _,
    filter: _,
  } = _;
  return {
    backgroundColor: void 0,
    fill: _,
    filter: _,
    flRandom: Math.random(),
    transform: _.interpolate((_) => {
      let _ = ((_ * _) / 4) * _,
        _ = _ * (_[1] - _[0]) + _[0];
      return `translate(${_ * (_[1] - _[0]) + _[0]}px, ${_}px) rotateZ(${_}rad) scale(${_})`;
    }),
  };
}
var _ = (_, _) => {
    let { anim: _ } = _({
      anim: 1,
      from: {
        anim: 0,
      },
      config: {
        duration: _,
      },
    });
    return (0, _.useMemo)(() => {
      let _ = _(_, _),
        _ = _.map((_) => _(_, _, _)),
        _ = _.map((_) => _(_, _, _)).filter((_) => !!_);
      return {
        rgParticleStyles: _,
        rgStreamerStyles: _,
      };
    }, [_, _, _]);
  },
  _ = {
    position: "absolute",
    left: "50%",
    top: 0,
  },
  _ = {
    ..._,
    width: 10,
    height: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  _ = ({ eType: _ }) => {
    let _ = _ == 1,
      _ = _ == 2,
      [_, _] = _(),
      { rgParticleStyles: _, rgStreamerStyles: _ } = _(_, _),
      _;
    switch (_) {
      case 1:
        _ = _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              style: _,
            },
            _,
          ),
        );
        break;
      case 2:
        _ = _.map((_, _) =>
          _ % 2
            ? (0, _.jsx)(
                _,
                {
                  style: _,
                },
                _,
              )
            : (0, _.jsx)(
                _,
                {
                  style: _,
                },
                _,
              ),
        );
        break;
      case 0:
        _ = _.map((_, _) =>
          (0, _.jsx)(
            _,
            {
              style: _,
            },
            _,
          ),
        );
        break;
    }
    return (0, _.jsxs)("div", {
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      },
      ref: _,
      children: [
        _,
        _.map((_, _) =>
          _.flRandom > 0.5
            ? (0, _.jsx)(
                _,
                {
                  style: _,
                },
                _,
              )
            : (0, _.jsx)(
                _,
                {
                  style: _,
                },
                _,
              ),
        ),
      ],
    });
  },
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.div, {
      style: {
        ..._,
        ..._,
      },
    }),
  _ = ({ style: _ }) => {
    let [_] = (0, _.useState)(Math.floor(Math.random() * _.length)),
      _ = _[_];
    return (0, _.jsx)(_, {
      style: {
        ..._,
        ..._,
        backgroundColor: void 0,
      },
    });
  },
  _ = ({ style: _ }) => {
    let [_] = (0, _.useState)(Math.floor(Math.random() * _.length)),
      _ = _[_];
    return (0, _.jsx)(_, {
      style: {
        ..._,
        ..._,
        backgroundColor: void 0,
      },
    });
  },
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 48 102",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 5,
        height: 10,
        ..._,
      },
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M45.8382 77.0734L24 0L2.16179 77.0734C0.773631 79.3013 0 81.7786 0 84.3885C0 84.4894 0.00115761 84.5902 0.00346361 84.6908L0 84.703H0.00374963C0.23239 94.2845 10.8883 102 24 102C37.1117 102 47.7676 94.2845 47.9963 84.703H48L47.9965 84.6908C47.9988 84.5902 48 84.4894 48 84.3885C48 81.7786 47.2264 79.3013 45.8382 77.0734Z",
        fill: "#F7D51E",
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsxs)(_.svg, {
      viewBox: "0 0 50 39",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 7,
        ..._,
      },
      children: [
        (0, _.jsx)("path", {
          _: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
          fill: "#C4C4C4",
        }),
        (0, _.jsx)("path", {
          _: "M48.444 16.0525L32.7132 0.633915C20.0884 16.8827 7.13568 21.7989 0.597293 21.9904C7.33478 28.5984 14.1472 37.4728 14.1472 37.4728C31.6473 38.7751 44.3035 23.7352 48.444 16.0525Z",
          fill: _.fill,
        }),
      ],
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 68 69",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 10,
        ..._,
      },
      children: (0, _.jsx)("rect", {
        _: "34.6389",
        width: "48",
        height: "48",
        transform: "rotate(-45 0 34.6389)",
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 10,
        ..._,
      },
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M24 0L0 24L24 47.9999L48 24L24 0ZM23.7089 8.48533L8.48527 23.7089L23.7089 38.9325L38.9324 23.7089L23.7089 8.48533Z",
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 48 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 8,
        ..._,
      },
      children: (0, _.jsx)("ellipse", {
        _: "24",
        _: "15",
        _: "24",
        _: "15",
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 48 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 8,
        ..._,
      },
      children: (0, _.jsx)("ellipse", {
        _: "24",
        _: "15",
        _: "24",
        _: "15",
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 48 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 8,
        ..._,
      },
      children: (0, _.jsx)("ellipse", {
        _: "24",
        _: "15",
        _: "24",
        _: "15",
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 80 620",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 70,
        ..._,
      },
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M0.53418 0.446363C4.80788 7.96949 8.99436 15.2008 13.0073 22.1324C35.0383 60.1862 51.8397 89.2071 49.1318 107.895C48.8475 101.617 47.1164 95.1506 43.6182 89.4997C22.9652 56.1375 -2.34054 7.06674 0.53418 0.446363ZM56.8207 188.805C55.1885 180.279 48.7591 170.011 41.3806 161.521C37.204 156.715 9.25983 141.889 7.31883 141.711L7.31474 141.711L7.31468 141.71L7.31452 141.71L7.11268 139.174L6.5244 131.791L6.5251 131.791L6.52505 131.79L6.52672 131.791C34.8022 129.659 47.1567 121.526 49.1318 107.895C49.6795 119.989 44.859 131.385 36.9599 134.917C33.2606 136.571 29.1329 137.843 25.1609 138.813C32.3599 142.599 44.0294 149.927 51.5956 160.751C60.8324 173.966 58.2537 184.901 56.8207 188.805ZM14.1541 214.387C28.3318 211.43 49.5183 206.914 54.7559 200.428C57.1974 197.404 57.6912 193.352 56.8207 188.805C56.4544 189.804 56.163 190.342 56.163 190.342C50.7646 194.114 26.0806 200.624 11.3908 204.497L11.3906 204.497L11.3904 204.497C7.40758 205.548 4.15949 206.404 2.22967 206.96L2.67009 212.483L3.21786 219.36C12.4021 224.467 20.8538 228.732 28.2879 232.483C70.3706 253.717 79.8458 258.498 5.02032 306.544C5.02047 306.546 5.02063 306.548 5.02078 306.55C5.01989 306.548 5.019 306.547 5.01812 306.545C5.24371 309.369 5.53845 312.547 5.79092 315.269C5.89859 316.43 5.99858 317.508 6.08223 318.44C6.15188 319.464 6.19564 320.436 6.20554 321.424C6.20464 321.331 6.23688 321.223 6.30064 321.101C6.31949 321.398 6.32799 321.609 6.32408 321.719C6.27561 321.616 6.23528 321.518 6.20333 321.425C6.28038 321.817 6.31788 321.895 6.32408 321.719C7.33553 323.874 11.894 328.285 17.8731 334.069C41.6329 357.056 87.8264 401.748 23.0228 412.886C23.5764 419.833 23.1631 419.992 23.1631 419.992C23.1631 419.992 24.3205 419.752 26.2506 419.305C34.1052 423.989 55.3095 438.589 58.8169 442.625C66.1955 451.115 72.6248 461.382 74.2571 469.909C73.8908 470.907 73.5993 471.446 73.5993 471.446C68.4367 475.053 42.2327 481.635 25.7172 485.783L25.7152 485.783L25.7147 485.784L25.7135 485.784L25.7028 485.787C20.6602 487.053 16.5222 488.093 14.1645 488.751L13.6222 488.439L13.6585 488.894L13.653 488.896L13.6602 488.916L14.4124 498.36C47.1778 516.58 73.923 535.597 77.6114 557.121C77.1891 558.457 76.6366 559.776 75.9628 561.084C62.5946 587.039 41.1874 608.612 24.1016 619.88C66.6744 596.331 80.8095 575.784 77.6114 557.121C81.823 543.801 73.0945 528.757 42.6319 505.104L26.8056 496.013C27.3301 495.908 27.8664 495.802 28.4133 495.693L28.4153 495.693C43.5756 492.685 66.9267 488.052 72.1923 481.531C74.6338 478.508 75.1275 474.456 74.2571 469.909C75.69 466.004 78.2687 455.069 69.032 441.855C57.4339 425.262 36.1944 416.886 36.1944 416.886L35.6563 416.927C41.635 415.285 48.7178 413.074 54.4334 410.519C66.4332 405.154 68.2307 384.374 57.9941 367.838C51.515 357.372 43.7231 350.194 35.4751 342.596C27.6489 335.386 19.4122 327.798 11.4967 316.664C12.7089 315.779 14.0928 314.791 15.6091 313.709C40.2963 296.086 100.082 253.407 25.4758 221.439L14.1541 214.387Z",
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 203 295",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 20,
        ..._,
      },
      children: (0, _.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M104.427 22.6009L104.428 22.6013C125.146 59.4015 140.687 87.0059 133.282 102.839C134.662 95.3303 133.62 86.4659 129.246 79.1843C112.124 50.6796 91.1453 8.75528 93.5285 3.10091C97.2525 9.85693 100.914 16.3611 104.427 22.6009ZM142.726 166.38C141.373 159.096 136.043 150.323 129.926 143.069C127.078 139.691 110.154 127.651 103.342 123.396C101.494 123.638 100.371 123.725 100.371 123.725C100.371 123.725 100.713 123.589 100.254 117.655C119.247 116.187 129.407 111.125 133.282 102.839C131.985 109.898 128.547 115.759 123.726 117.978C120.124 119.637 116.182 120.838 112.579 121.699C116.941 123.721 130.418 130.653 138.395 142.414C146.052 153.705 143.914 163.045 142.726 166.38ZM103.389 188.664C103.824 188.575 104.268 188.484 104.721 188.392L104.722 188.392C117.291 185.827 136.649 181.876 141.015 176.307C143.039 173.725 143.448 170.264 142.726 166.38C142.423 167.232 142.181 167.693 142.181 167.693C137.901 170.772 116.177 176.387 102.486 179.926C98.3006 181.007 94.8659 181.895 92.9093 182.457L92.4596 182.191L92.4896 182.579C92.4878 182.58 92.486 182.58 92.4842 182.581L92.4914 182.602L93.1147 190.665C120.278 206.239 142.45 222.491 145.508 240.879C145.158 242.02 144.7 243.146 144.141 244.263C133.059 266.43 115.312 284.852 101.148 294.472C136.441 274.369 148.16 256.821 145.508 240.879C149 229.501 141.764 216.649 116.509 196.435L103.389 188.664Z",
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      viewBox: "0 0 48 39",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 8,
        ..._,
      },
      children: (0, _.jsx)("path", {
        _: "M33.8287 29.6914L24.9705 21.1201C23.199 24.5487 23.4612 24.5487 21.4282 27.9773C19.3952 31.4058 13.4557 29.6914 12.57 27.9773C7.25553 22.8344 10.7985 17.6914 12.57 15.9773C19.656 5.69155 36.5247 4.54869 48 5.69155C47.4095 4.54865 45.5199 1.92 42.6855 0.548571C39.1425 -1.16571 1.94169 0.548571 0.170191 14.2629C-1.60131 27.9771 10.7992 38.2629 21.4282 38.2629C29.9314 38.2629 33.2382 32.5486 33.8287 29.6914Z",
        fill: _.fill,
      }),
    }),
  _ = ({ style: _ }) =>
    (0, _.jsx)(_.svg, {
      width: "48",
      height: "35",
      viewBox: "0 0 48 35",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: 10,
        height: 7,
        ..._,
      },
      children: (0, _.jsx)("path", {
        _: "M48 0H0L24 35L48 0Z",
        fill: _.fill,
      }),
    }),
  _ = [_, _, _, _, _, _, _, _, _],
  _ = ({ style: _ }) =>
    (0, _.jsxs)(_.svg, {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      _: "0px",
      _: "0px",
      viewBox: "0 0 14.5 22",
      style: {
        width: 28,
        height: 28,
        ..._,
      },
      children: [
        (0, _.jsx)("path", {
          fill: "#fc1010",
          _: "M1.6,10.1c0,0-0.1,0-0.4-0.1C1,10,0.8,9.9,0.8,9.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,9c0.1-0.1,0.2-0.3,0.5-0.6C1.8,8.1,2,7.8,2.2,7.5c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2C2.6,7,2.7,6.8,2.8,6.5c0-0.1,0.1-0.2,0.1-0.3C3,6.1,3,6,3,5.9c0-0.2-0.1-0.4-0.2-0.5C2.6,5.3,2.4,5.3,2.1,5.3c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2V3.5l0.5-0.2C1.6,3.2,2,3.1,2.5,3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2C6.1,6.8,5.7,7.2,5.1,7.6h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8V9v0.3c0,0.2,0,0.4-0.1,0.5C6.6,10,6.5,10,6.2,10c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,10.1,1.6,10.1,1.6,10.1z",
        }),
        (0, _.jsx)("path", {
          fill: "#fc1010",
          _: "M9.8,10.3c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1C8.1,9.8,8,9.8,8,9.7L7.8,9.6c-0.1,0-0.1-0.1-0.2-0.1C7.4,9.3,7.2,9,7.1,8.6C7,8.3,6.9,8,6.9,7.6c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1C8.5,3.1,8.8,3,9.1,2.9c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4C14.2,8.6,14,9,13.7,9.3c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,10.3,9.9,10.3,9.8,10.3z M11.2,8.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3c-0.1-0.1-0.1-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,6.2C9.9,6.4,9.9,6.6,9.9,6.8c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,8.6,11.1,8.5,11.2,8.3z",
        }),
        (0, _.jsx)("path", {
          fill: "#fc1010",
          _: "M1.6,17.5c0,0-0.1,0-0.4-0.1c-0.2,0-0.4-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.2-0.2c0-0.2,0.1-0.4,0.3-0.6v0L1,16.4c0.1-0.1,0.2-0.3,0.5-0.6c0.2-0.2,0.4-0.5,0.7-0.9c0-0.1,0.1-0.1,0.1-0.2s0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.6c0-0.1,0.1-0.2,0.1-0.3C3,13.5,3,13.4,3,13.3c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.4-0.1-0.7-0.1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.4,0.1-0.7,0.3c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2,0-0.4-0.1-0.8l0-0.6l0-0.3l0-0.2v-0.1l0.5-0.2c0.4-0.1,0.9-0.2,1.3-0.3c0.5-0.1,0.9-0.1,1.4-0.1c0.4,0,0.8,0,1.1,0.1c0.4,0.1,0.7,0.2,0.9,0.4c0.6,0.4,0.9,1,0.9,1.8c0,0.4-0.1,0.8-0.4,1.2c-0.3,0.4-0.7,0.8-1.3,1.2h0.5h0.5c0.2,0,0.4,0,0.5,0c0.2,0.1,0.3,0.1,0.3,0.3c0,0.2,0,0.5,0,0.8v0.3v0.3c0,0.2,0,0.4-0.1,0.5c-0.1,0.1-0.3,0.2-0.5,0.2c0,0-0.1,0-0.2,0c-0.1,0-0.4,0-0.9,0H4H3.6H3.1H2.6C1.9,17.5,1.6,17.5,1.6,17.5z",
        }),
        (0, _.jsx)("path", {
          fill: "#fc1010",
          _: "M9.8,17.7c-0.1,0-0.2,0-0.3,0l-0.6-0.1c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0,0-0.1c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2-0.1-0.3-0.1L7.8,17c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.2-0.4-0.5-0.5-0.9C7,15.7,6.9,15.4,6.9,15c0-0.2,0-0.6,0-0.9c0-0.5,0-0.8,0.1-1.1c0-0.3,0.1-0.7,0.3-1.1c0.1,0,0.1-0.2,0.3-0.5c0,0,0.1-0.1,0.1-0.1s0-0.1,0.1-0.1c0,0,0,0,0-0.1s0-0.1,0.1-0.1c0.1,0,0.2-0.1,0.3-0.2c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.2-0.1,0.5-0.2,0.8-0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0,1.3,0.1c0.3,0,0.7,0.1,1.1,0.2c0,0,0.1,0,0.1,0c0.3,0.1,0.5,0.2,0.6,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1c0.1,0,0.2,0,0.3,0.1s0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.2,0.4c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.1,0,0.1,0s0,0,0,0.1c0,0.2,0.1,0.4,0.1,0.5c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.2,0.1,0.3l0,0.1l0,0.4v0.3c0,0.6,0,1.1-0.1,1.4c-0.1,0.5-0.3,0.9-0.7,1.2c-0.1,0.1-0.3,0.2-0.4,0.3l-0.4,0.3c-0.2,0.1-0.4,0.1-0.5,0.2l-0.5,0.2c-0.3,0-0.6,0-0.9,0.1c-0.3,0-0.6,0.1-0.9,0.1C9.9,17.7,9.9,17.7,9.8,17.7z M11.2,15.7c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.2l0-0.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.3-0.1-0.5c0-0.2-0.1-0.3-0.1-0.3c0-0.1,0-0.3-0.1-0.3C10.9,12,10.8,12,10.7,12c-0.2,0-0.4,0.1-0.5,0.4c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0.2,0,0.3L10,13.6c-0.1,0.2-0.1,0.4-0.1,0.6c0,0.3,0,0.5,0.1,0.8c0,0.1,0,0.2,0.1,0.4s0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0C10.9,16,11.1,15.9,11.2,15.7z",
        }),
      ],
    }),
  _ = ({ style: _ }) =>
    (0, _.jsxs)(_.svg, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 54 47.18",
      style: {
        width: 28,
        height: 28,
        ..._,
      },
      children: [
        (0, _.jsx)("polygon", {
          fill: "#60000e",
          points: "10.02 14.06 10.02 14.06 10.02 14.06 10.02 14.06",
        }),
        (0, _.jsx)("path", {
          fill: "#f93838",
          _: "M54,9.53A9.52,9.52,0,0,0,37.74,2.79a10.82,10.82,0,0,0-2.25,3.54,21.52,21.52,0,0,0-1.19,4.08A16.55,16.55,0,0,0,27,8.73h-.24a16.38,16.38,0,0,0-7,1.69,22.41,22.41,0,0,0-1.2-4.09,10.82,10.82,0,0,0-2.25-3.54A9.52,9.52,0,1,0,2.79,16.26h0a10.82,10.82,0,0,0,3.54,2.25,23.87,23.87,0,0,0,5,1.36,16.34,16.34,0,0,0-.94,5.48h0v0a16.57,16.57,0,0,0,4.92,11.81A7.36,7.36,0,0,1,17.05,40a10.5,10.5,0,0,0,10,7.15,10.38,10.38,0,0,0,6.17-2,10.57,10.57,0,0,0,3.77-5.11,7.48,7.48,0,0,1,1.79-2.89,16.66,16.66,0,0,0,4-17.3l.65-.12a22.44,22.44,0,0,0,4.31-1.24,10.82,10.82,0,0,0,3.54-2.25L50.9,16l.31.31A9.5,9.5,0,0,0,54,9.53ZM32.11,21.28a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.4,8.4,0,0,0-2.59-.39,8.59,8.59,0,0,0-2.43.34h0a.44.44,0,1,1-.26-.84Zm-7.88,8.64a9.27,9.27,0,0,1,2.68-.38,9.06,9.06,0,0,1,2.87.44.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27,8.35,8.35,0,0,0-2.59-.39,8.46,8.46,0,0,0-2.42.34h0a.44.44,0,1,1-.26-.84ZM24.31,33a.45.45,0,0,1,.54-.32l2.16.55,2.14-.55a.45.45,0,0,1,.54.32.44.44,0,0,1-.32.53l-2.25.58a.41.41,0,0,1-.22,0l-2.27-.58h0A.44.44,0,0,1,24.31,33ZM21.9,21.34a.44.44,0,0,1,.28.56.44.44,0,0,1-.56.27A8.35,8.35,0,0,0,19,21.78a8.46,8.46,0,0,0-2.42.34h0a.44.44,0,0,1-.26-.84A9.27,9.27,0,0,1,19,20.9,9.06,9.06,0,0,1,21.9,21.34Zm-1.6,8.08h0v0a.41.41,0,0,1,0-.1c0-.08-.06-.19-.12-.33a4.39,4.39,0,0,0-.47-.95,2.16,2.16,0,0,0-.43-.5,1.11,1.11,0,0,0-.24-.16.7.7,0,0,0-.25-.05.88.88,0,0,0-.29.05,1.82,1.82,0,0,0-.4.24,5,5,0,0,0-1.16,1.3.66.66,0,0,1-.92.17.65.65,0,0,1-.17-.91,7.44,7.44,0,0,1,1.1-1.32A3.45,3.45,0,0,1,18,26.13a2.21,2.21,0,0,1,.75-.14,2,2,0,0,1,.87.21,2.37,2.37,0,0,1,.66.49,4.41,4.41,0,0,1,.84,1.21,7.08,7.08,0,0,1,.3.72c.1.27.14.45.15.46h0a.67.67,0,0,1-.47.81A.66.66,0,0,1,20.3,29.42Zm12.19,8.86a4.18,4.18,0,0,1-.92.52,7.57,7.57,0,0,1-1.11,2.55A4.85,4.85,0,0,1,28.58,43a3.56,3.56,0,0,1-3.16,0,4.71,4.71,0,0,1-1.33-1,7.14,7.14,0,0,1-1.66-3.24,4.18,4.18,0,0,1-.92-.52.44.44,0,0,1-.1-.61.45.45,0,0,1,.62-.1,2.89,2.89,0,0,0,1.76.61,3,3,0,0,0,1.58-.47,4.28,4.28,0,0,0,1.26-1.31.43.43,0,0,1,.74,0,4.28,4.28,0,0,0,1.26,1.31,3,3,0,0,0,1.58.47A2.89,2.89,0,0,0,32,37.57h0a.45.45,0,0,1,.62.1A.44.44,0,0,1,32.49,38.28ZM38,29.07a.66.66,0,0,1-.92-.17,6.25,6.25,0,0,0-.9-1.09,2.25,2.25,0,0,0-.66-.45.88.88,0,0,0-.29-.05.58.58,0,0,0-.28.07,1,1,0,0,0-.31.23,3.29,3.29,0,0,0-.58.84c-.1.21-.19.42-.25.59s-.12.37-.13.38h0a.66.66,0,0,1-.8.47.67.67,0,0,1-.47-.81s.07-.25.2-.58a6.91,6.91,0,0,1,.59-1.2,3.66,3.66,0,0,1,.69-.79,2.3,2.3,0,0,1,.56-.35,1.82,1.82,0,0,1,.78-.17,2.21,2.21,0,0,1,.75.14,3,3,0,0,1,.73.41,6.6,6.6,0,0,1,1.46,1.62A.65.65,0,0,1,38,29.07Z",
        }),
        (0, _.jsx)("path", {
          fill: "#f93838",
          _: "M27,40.35c1.12,0,1.55-.37,1.89-1.53a4.17,4.17,0,0,1-.73-.37A5,5,0,0,1,27,37.39a5,5,0,0,1-1.16,1.06,4.17,4.17,0,0,1-.73.37C25.45,40,25.88,40.35,27,40.35Z",
        }),
      ],
    }),
  _ = [_, _];
function _() {
  let [_, _] = (0, _.useState)(null),
    _ = (0, _.useCallback)((_) => {
      _ &&
        typeof _.getBoundingClientRect == "function" &&
        _(_.getBoundingClientRect());
    }, []);
  return [_, _];
}
var _ = "_4kPIBstUx6w-";
var _ = "_7KKvXxR7j7A-";
var _ = "XMJPJvDesrA-";
var _ = "wAkfw3EhVi0-";
var _ = "zV50iVzlRfc-";
var _ = "zZQQsf-9DDQ-";
var _ = "WVfVYQTiR7A-";
var _ = "C4xbrC2t4H4-";
var _ = "_6QaWNuU0-Wk-";
var _ = "ISXBbB5zEII-";
var _ = "v1sMSP4Fr0E-";
var _ = "Gmk1sMD-Qdk-";
var _ = "idjQ-oT4m34-";
var _ = "PiTxzn-6aaQ-";
var _ = "DmKchhCidgI-";
var _ = "XM81N1AKM6g-";
var _ = "qK4dVdHNe3o-";
var _ = "bnhk1sIOjnM-";
var _ = "_95h-yhE-rhI-";
var _ = "bz0HrP0YM-I-";
var _ = "hYR0xjErbEg-";
var _ = "N9jxcoxs-Os-";
var _ = "qOmkLDVVLGM-";
var _ = "_12dvodV7GTs-";
var _ = "eOxZlcbuv44-";
var _ = "FRFf7So5JOs-";
var _ = "_4LNASOlHmew-";
var _ = "Nfe--FgJ75c-";
var _ = "_2sFq7yyPOZg-";
var _ = "CMbcgZiIDZ0-";
var _ = "Leh0sgLn-U0-";
var _ = "iCjOR0SapxM-";
var _ = "v13hC-Fd8yo-";
var _ = "_9z9X2sPF-0Y-";
var _ = "kkMtiFKGiio-";
var _ = "yq8I6qxNKKA-";
var _ = "-LeLJRmK3T0-";
var _ = "CnV9SQB3ALc-";
var _ = "_9PKwQylUydE-";
var _ = "tDTOPDvLoHQ-";
var _ = "bHQMrgqvH3Y-";
var _ = "SWTLiubofFA-";
var _ = "V5OQiiTljnM-";
var _ = _(_());
function _(_, _) {
  return `${_.STORE_CDN_URL}public/images/loyalty/reactions/${_ ? "animated" : "still"}/${_}.png`;
}
function _() {
  let _ = _();
  return _({
    queryKey: ["useGetReactionConfiguration"],
    queryFn: async () => {
      let _ = _.Init(_);
      _.Body().set_elanguage(_(_.LANGUAGE));
      let _ = await _.GetReactionConfig(_, _);
      return _.GetEResult() == 1
        ? _.Body().toObject().reactions
        : (console.error(
            `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${_.GetEResult()}`,
          ),
          null);
    },
    staleTime: 1 / 0,
  });
}
function _(_) {
  let _ = _();
  return (0, _.useMemo)(() => _?.data?.find((_) => _.reactionid === _), [_, _]);
}
var _ = "jzReq1o-xsU-";
var _ = _(_()),
  _ = (_) => {
    let { className: _, ..._ } = _;
    return (0, _.jsx)(_, {
      className: _(_, _),
      ..._,
    });
  };
var _ = _(_());
var _ = (_) =>
    (0, _.jsx)("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ..._,
      children: (0, _.jsx)("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        clipRule: "evenodd",
        _: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
      }),
    }),
  _ = class extends _.PureComponent {
    constructor(_) {
      super(_),
        (this.state = {
          bHovered: !1,
        });
    }
    handleMouseOver(_) {
      this.setState({
        bHovered: !0,
      });
    }
    handleMouseOut() {
      this.setState({
        bHovered: !1,
      });
    }
    render() {
      let _ = _(
        this.props.reactionType,
        this.props.bDisableAnimation == !1 &&
          (!!this.state.bHovered || !!this.props.bForceAnimated),
      );
      return (0, _.jsx)("img", {
        className: this.props.className,
        src: _,
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut,
      });
    }
  };
_([_], _.prototype, "handleMouseOver", 1),
  _([_], _.prototype, "handleMouseOut", 1);
function _(_, _, _) {
  let _ = [];
  return (
    _.forEach(function (_) {
      if (
        _.valid_target_types?.includes(_) &&
        !(!_.purchaseable || !_.reactionid)
      )
        switch (_) {
          case 1:
            _.push(_.reactionid);
            break;
          case 2:
            _ !== void 0 &&
              _.valid_ugc_types?.includes(_) &&
              _.push(_.reactionid);
            break;
          case 3:
            _.push(_.reactionid);
            break;
          case 4:
            _.push(_.reactionid);
            break;
          case 5:
            _.push(_.reactionid);
            break;
        }
    }),
    _
  );
}
var _ = class extends _.Component {
  static defaultProps = {
    targetType: 1,
  };
  constructor(_) {
    super(_),
      (window.fnLoyalty_ShowAwardModal = (_, _, _, _, _) => {
        _ || (_ = 0),
          this.setState({
            bShowModal: !0,
            fnSuccessFunc: _,
            targetid: _,
            ugcType: _,
            initialSelectedReaction: _,
            targetType: _,
          });
      }),
      (this.state = {
        bShowModal: !1,
        targetid: "",
        targetType: 0,
      });
  }
  render() {
    let {
      bShowModal: _,
      targetType: _,
      fnSuccessFunc: _,
      targetid: _,
      ugcType: _,
      initialSelectedReaction: _,
    } = this.state;
    return _
      ? (0, _.jsx)(
          _,
          {
            targetid: _,
            active: _,
            targetType: _ ?? 0,
            ugcType: _,
            onDismiss: () =>
              this.setState({
                bShowModal: !1,
              }),
            onSuccess: _,
            initialSelectedReaction: _,
          },
          _,
        )
      : null;
  }
};
function _(_) {
  let {
    targetType: _,
    targetid: _,
    bShowModal: _,
    ugcType: _,
    initialSelectedReaction: _,
    onDismiss: _,
    onSuccess: _,
  } = _;
  return (0, _.jsx)(
    _,
    {
      targetid: _,
      active: _,
      targetType: _,
      ugcType: _,
      onDismiss: _,
      onSuccess: _,
      initialSelectedReaction: _,
    },
    _,
  );
}
function _(_) {
  let {
      active: _,
      targetid: _,
      targetType: _,
      ugcType: _,
      initialSelectedReaction: _,
      onSuccess: _,
      onDismiss: _,
    } = _,
    [_, _] = _.useState(_ || 0),
    [_, _] = _.useState(0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(2),
    _ = _(),
    _ = _(),
    _ = _(!!_, _, _, _),
    _ = _(!!_, _),
    _ = _(!!_, _),
    _ = _(_),
    _ = _.isPending || _.isPending;
  async function _() {
    _ === null ||
      _ == 0 ||
      (_(2),
      await _.mutate(
        {
          targetid: _,
          targetType: _,
          nReactionId: _,
        },
        {
          onSuccess: () => {
            _(3),
              _(!0),
              setTimeout(() => {
                _ && _(_, _);
              }, 2e3);
          },
          onError: (_) => {
            _(4), _(_);
          },
        },
      ));
  }
  if (
    (_.useEffect(() => {
      _.error && (_(_.error), _(5));
    }, [_.error]),
    !_)
  )
    return null;
  let _ = _.data ?? new Map(),
    _ = _.data ?? new _(0),
    _ = _(_, _, _),
    _ = _ === 0 ? null : _.get(_),
    _ = _ ? _.points_cost : 0,
    _ = _ ? _.points_transferred : 0,
    _ = "";
  switch (_) {
    case 1:
      _ = _("#GrantAwardDescription_Review");
      break;
    case 2:
      _ = _("#GrantAwardDescription_UGC");
      break;
    case 3:
      _ = _("#GrantAwardDescription_Profile");
      break;
    case 4:
      _ = _("#GrantAwardDescription_ForumTopic");
      break;
    case 5:
      _ = _("#GrantAwardDescription_Comment");
      break;
  }
  let _;
  switch (_) {
    case 0:
      {
        let _ = _ === 0 || _.data?.has(_),
          _ = !_ || _.greaterThanOrEqual(_),
          _ = (0, _.jsx)(_, {
            onClick: () => _(1),
            disabled: _,
            focusable: !_,
            title: _(
              _ ? "#GrantAward_PromptTooltip" : "#GrantAward_SubmitTooltip",
            ),
            children: _(_ ? "#GrantAward_SelectAward" : "#GrantAward_Next"),
          });
        _ = (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              description: _,
            }),
            (0, _.jsx)(_, {}),
            _ &&
              (0, _.jsx)("div", {
                className: _,
                children: (0, _.jsx)("div", {
                  className: _(_, _),
                  children: (0, _.jsx)(_, {}),
                }),
              }),
            (0, _.jsx)(_, {
              className: _,
              scrollDirection: _ ? "x" : "y",
              "flow-children": "grid",
              children:
                !_ &&
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      autoFocus:
                        (_ === void 0 && _ == 0) ||
                        (_ === _ && !_.data?.has(_)),
                      reaction: _,
                      selected: _ === _ && !_.data?.has(_),
                      cost: _.get(_).points_cost,
                      alreadyAwarded: _.data?.has(_),
                      awardConfig: _.get(_),
                      onClick: () => {
                        _.data?.has(_) || _(_ === _ ? 0 : _);
                      },
                    },
                    _,
                  ),
                ),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              pointBalance: _,
              children:
                _ || _
                  ? _
                  : [
                      (0, _.jsx)(
                        "div",
                        {
                          className: _,
                          children: _(
                            "#GrantAward_CantAfford",
                            _(_.negate().add(_).toNumber()),
                          ),
                        },
                        "msg",
                      ),
                      (0, _.jsx)(
                        _,
                        {
                          href: `${_.STORE_BASE_URL}points/howitworks`,
                          children: (0, _.jsx)(
                            _,
                            {
                              children: _("#GrantAward_HowToGetPoints"),
                            },
                            "button",
                          ),
                        },
                        "button",
                      ),
                    ],
            }),
          ],
        });
      }
      break;
    case 1:
    case 2:
    case 3:
      {
        let _ = (0, _.jsxs)(_, {
          pointBalance: _,
          children: [
            (0, _.jsx)(_, {
              onClick: () => _(0),
              disabled: _ !== 1,
              children: _("#GrantAward_Back"),
            }),
            (0, _.jsx)(_, {
              onClick: _,
              title: _("#GrantAward_SubmitTooltip"),
              disabled: _ !== 1,
              children: _("#GrantAwardNowButton"),
            }),
          ],
        });
        _ === 3 &&
          (_ = (0, _.jsx)(_, {
            pointBalance: _,
            children: (0, _.jsx)(_, {
              onClick: _,
              children: _("#Button_Close"),
            }),
          })),
          (_ = (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                description: _,
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsxs)("div", {
                style: {
                  position: "relative",
                },
                children: [
                  (0, _.jsxs)("div", {
                    className: _(_, _ === 1 && _),
                    children: [
                      (0, _.jsx)(_, {
                        className: _,
                        reactionType: _,
                      }),
                      (0, _.jsxs)("div", {
                        className: _,
                        children: [
                          (0, _.jsx)("div", {
                            className: _,
                            children: _(
                              "#GrantAward_Confirm",
                              (0, _.jsx)(_, {
                                children: _(_),
                              }),
                              (0, _.jsx)("span", {
                                className: _,
                                children: _.data?.get(_)?.localized_title,
                              }),
                            ),
                          }),
                          _ > 0 &&
                            (0, _.jsx)("div", {
                              className: _,
                              children: _(
                                "#GrantAward_Confirm_Details",
                                (0, _.jsx)(_, {
                                  children: _(_),
                                }),
                                (0, _.jsx)("span", {
                                  className: _,
                                  children: _(
                                    "#GrantAward_Confirm_DetailsTimePeriod",
                                  ),
                                }),
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _(_, _ === 2 && _),
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsxs)("div", {
                    className: _(_, _ === 3 && _),
                    children: [
                      (0, _.jsx)(_, {
                        className: _,
                        reactionType: _,
                        bForceAnimated: !0,
                      }),
                      (0, _.jsx)("div", {
                        className: _,
                        children: _("#GrantAward_Success"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_, {}),
              _,
            ],
          }));
      }
      break;
    case 4:
      {
        let _ = "";
        switch (_) {
          case 10:
            _ = _("#GrantAwardError_Busy");
            break;
          case 32:
            _ = _("#GrantAwardError_PersistFailed");
            break;
          case 8:
            _ = _("#GrantAwardError_InvalidParam");
            break;
          case 42:
            _ = _("#GrantAwardError_NoMatch");
            break;
          case 107:
            _ = _("#GrantAwardError_InsufficientFunds");
            break;
          case 15:
            _ = _("#GrantAwardError_AccessDenied");
            break;
          case 21:
            _ = _("#GrantAwardError_NotLoggedOn");
            break;
          case 29:
            _ = _("#GrantAwardError_DuplicateRequest");
            break;
          default:
            _ = _("#GrantAwardError_Fail");
            break;
        }
        _ = (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              description: _,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)("div", {
              style: {
                position: "relative",
              },
              children: (0, _.jsx)("div", {
                className: _,
                children: (0, _.jsx)("div", {
                  className: _,
                  children: _,
                }),
              }),
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {
              pointBalance: _,
              children: (0, _.jsx)(_, {
                onClick: () => _(0),
                children: _("#GrantAward_Back"),
              }),
            }),
          ],
        });
      }
      break;
    case 5:
      {
        let _ = "";
        switch (_) {
          case 10:
            _ = _("#GrantAwardError_Busy");
            break;
          case 21:
            _ = _("#GrantAwardError_NotLoggedOn");
            break;
          default:
            _ = _("#GrantAwardError_LoadExistingReactions");
            break;
        }
        _ = (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              description: _,
            }),
            (0, _.jsx)(_, {}),
            (0, _.jsx)("div", {
              style: {
                position: "relative",
              },
              children: (0, _.jsx)("div", {
                className: _,
                children: (0, _.jsx)("div", {
                  className: _,
                  children: _,
                }),
              }),
            }),
            (0, _.jsx)(_, {}),
          ],
        });
      }
      break;
  }
  return (0, _.jsxs)(_, {
    className: _,
    active: _,
    onDismiss: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          eType: 0,
        }),
      _,
    ],
  });
}
var _ = ({ description: _ }) =>
  (0, _.jsxs)("div", {
    className: _,
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: _("#GrantAwardTitle"),
      }),
      (0, _.jsx)("div", {
        className: _,
        children: _,
      }),
    ],
  });
function _(_) {
  let { pointBalance: _, children: _ } = _,
    _ = _ && _(_.toNumber());
  return (0, _.jsxs)("div", {
    className: _,
    children: [
      (0, _.jsxs)("div", {
        className: _,
        children: [
          (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)(_, {
                className: _,
              }),
              (0, _.jsxs)("div", {
                className: _,
                children: [
                  (0, _.jsx)("div", {
                    className: _,
                    children: _("#YourBalance"),
                  }),
                  (0, _.jsx)("div", {
                    className: _,
                    children: _,
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)("a", {
              className: _,
              href: `${_.STORE_BASE_URL}points/howitworks`,
              children: _("#GrantAward_PointsLink"),
            }),
          }),
        ],
      }),
      (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsx)(_, {
          className: _,
          "flow-children": "row",
          children: _.Children.map(_, (_) =>
            (0, _.jsx)("div", {
              className: _,
              children: _,
            }),
          ),
        }),
      }),
    ],
  });
}
var _ = () =>
    (0, _.jsx)("div", {
      className: _,
    }),
  _ = class extends _.PureComponent {
    constructor(_) {
      super(_),
        (this.state = {
          bHovered: !1,
        });
    }
    handleMouseOver(_) {
      this.setState({
        bHovered: !0,
      });
    }
    handleMouseOut() {
      this.setState({
        bHovered: !1,
      });
    }
    render() {
      let {
        reaction: _,
        selected: _,
        alreadyAwarded: _,
        cost: _,
        autoFocus: _,
        awardConfig: _,
        ..._
      } = this.props;
      return (0, _.jsxs)(_, {
        type: "button",
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut,
        className: _(_, _ && _, _ && _),
        autoFocus: _,
        ..._,
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)(_, {
              reactionType: _,
              bForceAnimated: this.state.bHovered,
              bDisableAnimation: _,
            }),
          }),
          (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)("div", {
                className: _,
                children: _?.localized_title,
              }),
              (0, _.jsx)(_, {
                className: _,
                children: _(_ ?? 0),
              }),
            ],
          }),
          _ &&
            (0, _.jsx)(_, {
              className: _,
            }),
        ],
      });
    }
  };
_([_], _.prototype, "handleMouseOver", 1),
  _([_], _.prototype, "handleMouseOut", 1);
var _ = () =>
    (0, _.jsx)(_, {
      size: "large",
      className: _,
    }),
  _ = (_) => {
    let { children: _, className: _, ..._ } = _;
    return (0, _.jsxs)("span", {
      ..._,
      className: _(_, _),
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        _,
      ],
    });
  };
var _ = "nDIv9iK3Et4-";
var _ = "f-4MB0EYJZw-";
var _ = "G9-lsXOuads-";
var _ = "ETGZx3fpcuI-";
var _ = "fqYBKSrROvk-";
var _ = "_2laTKqJwaps-";
var _ = "E47-UmtRxQs-";
var _ = _(_());
function _(_) {
  let { eReactionID: _, nCount: _ } = _,
    _ = _(_);
  return _
    ? (0, _.jsxs)("div", {
        className: _,
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)("img", {
              src: _(_, !0),
              alt: _.localized_title,
            }),
          }),
          (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)("div", {
                className: _,
                children: _.localized_title,
              }),
              (0, _.jsx)("div", {
                className: _,
                children: _.localized_desc,
              }),
              !!_.points_transferred &&
                (0, _.jsx)("div", {
                  className: _,
                  children: _(
                    "#RewardsReaction_ToolTip_Points",
                    _(_.points_transferred),
                  ),
                }),
              !!_ &&
                (0, _.jsx)("div", {
                  className: _,
                  children: _("#RewardsReaction_ToolTip_Granted", _(_)),
                }),
            ],
          }),
        ],
      })
    : null;
}
var _ = _(_(), 1),
  _ = _(_(), 1);
function _() {
  let [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(void 0),
    _ = (0, _.useCallback)((_) => {
      let _ = _,
        _ = 2;
      switch (
        (_ instanceof _ ? (_ = _.eResult) : _.success && (_ = _.success), _)
      ) {
        case 15:
        case 24:
          _("#Workshop_Dialog_AccessDenied");
          break;
        case 16:
          _("#Workshop_Dialog_Timeout");
          break;
        case 25:
          _("#Workshop_Dialog_LimitExceeded");
          break;
        default:
          _(void 0);
          break;
      }
      _(!0);
    }, []),
    _ = (0, _.useMemo)(
      () =>
        (0, _.jsx)(_.Fragment, {
          children:
            _ &&
            (0, _.jsxs)(_, {
              strTitle: _.Localize("#Workshop_Dialog_Error"),
              onClose: () => _(!1),
              children: [
                (0, _.jsx)(_, {
                  children: _.Localize(_ ?? "#Workshop_Dialog_ErrorDesc"),
                }),
                (0, _.jsx)(_, {
                  justify: "end",
                  gap: "3",
                  align: "center",
                  marginTop: "3",
                  children: (0, _.jsx)(_, {
                    onClick: () => _(!1),
                    children: (0, _.jsx)("span", {
                      children: _.Localize("#Button_Close"),
                    }),
                  }),
                }),
              ],
            }),
        }),
      [_, _],
    );
  return (0, _.useMemo)(
    () => ({
      HandleMutationError: _,
      errorDialog: _,
    }),
    [_, _],
  );
}
var _ = "XUoopLoIxcM-";
var _ = "_3VFw4JObHL4-";
var _ = "qN-TZjVnH04-";
var _ = "ONMKtpSGRmE-";
var _ = "yXW7wST6vGw-";
var _ = "Aky2N50mWXM-";
var _ = "_386fC6qQx4o-";
var _ = "P-aAQef2qsM-";
var _ = "ngLfrc7RhW8-";
var _ = "CkoJ76XAEPM-";
var _ = "h3IAA9AAPYs-";
var _ = "r4keorurLUE-";
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "_1sAPHcxnhQQ-";
var _ = "iRGwWw2ITyU-";
var _ = "XVpzXyIalmw-";
var _ = "eQSziUKOD7U-";
var _ = "_2Oz3NX-AdsA-";
var _ = "oTfo3j7yiIU-";
var _ = "PpTVzf9-IJw-";
var _ = "Hj-aIRpuNqI-";
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_());
function _(_, _, _ = !0) {
  let _ = new URLSearchParams({
    ima: "fit",
    impolicy: "Letterbox",
    imcolor: "#000000",
  });
  return (
    _ && _.set("imw", Math.round(_).toString()),
    _ && _.set("imh", Math.round(_).toString()),
    !_ || !_ || !_ ? _.set("letterbox", "false") : _.set("letterbox", "true"),
    "?" + _.toString()
  );
}
var _ = {};
_(_, {
  IsLoaded: () => _,
  ItemHeight: () => _,
  ItemWidth: () => _,
  PreviewImage: () => _,
  PreviewImageLink: () => _,
  aspectratio_16x9: () => _,
  aspectratio_4x3: () => _,
  aspectratio_collection_background_image: () => _,
  aspectratio_square: () => _,
  default: () => _,
});
var _ = "288px";
var _ = "288px";
var _ = "_68RUj0Pwr4Q-";
var _ = "rKsVnKsUFJQ-";
var _ = "C-IafiYWwwA-";
var _ = "-eH0SAZCp5I-";
var _ = "wKhzrXtV8NE-";
var _ = "jsQQDPfZQ0s-";
var _ = "yH6dY4JHgMU-";
var _ = {
  ItemWidth: "288px",
  ItemHeight: "288px",
  PreviewImage: "_68RUj0Pwr4Q-",
  PreviewImageLink: "rKsVnKsUFJQ-",
  IsLoaded: "C-IafiYWwwA-",
  aspectratio_square: "-eH0SAZCp5I-",
  aspectratio_16x9: "wKhzrXtV8NE-",
  aspectratio_4x3: "jsQQDPfZQ0s-",
  aspectratio_collection_background_image: "yH6dY4JHgMU-",
};
var _ = _(_(), 1);
function _(_) {
  return (0, _.useMemo)(
    () =>
      _(_.short_description ?? "").replace(/(?:https?|ftp):\/\/[ \n\S]+/g, ""),
    [_.short_description],
  );
}
function _(_) {
  return _
    ? _.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=" + _
    : _.COMMUNITY_BASE_URL;
}
function _(_, _) {
  return (0, _.useMemo)(() => {
    let _ = new Map(),
      _ = _.declared_tags;
    switch (_) {
      case 1:
        _ = _.mtx_tags;
        break;
      case 0:
        _ = _.readytouse_tags;
        break;
      case 2:
        _ = _.collection_tags;
        break;
      case 4:
        _ = _.video_tags;
        break;
      case 11:
        _ = _.merch_tags;
        break;
    }
    return (
      _?.forEach((_) => {
        _.tags.forEach((_) => _.set(_.name, _));
      }),
      _
    );
  }, [_, _]);
}
function _(_, _) {
  let _ = (0, _.useContext)(_),
    _ = _(_, _);
  return (0, _.useMemo)(() => _.filter((_) => _.tag && _.has(_.tag)), [_, _]);
}
function _(_, _ = !0) {
  return _({
    queryKey: ["ugc_item_preview", _],
    queryFn: async () =>
      _.length == 0
        ? null
        : await _("/workshop/actions", "GetUGCDetailsForItemPreview", _),
    enabled: _,
    staleTime: 3600 * 1e3,
  });
}
var _ = _(_(), 1);
function _(_, _) {
  switch (_(_, _)) {
    case "square":
    default:
      return 1;
    case "16x9":
      return 16 / 9;
    case "4x3":
      return 4 / 3;
  }
}
function _(_, _) {
  switch (_) {
    case 1:
      if (_.aspect_ratio_curated_items?.length)
        return _.aspect_ratio_curated_items;
      break;
    case 0:
      if (_.aspect_ratio_readytouse_items?.length)
        return _.aspect_ratio_readytouse_items;
      break;
    case 2:
      return "square";
    case 4:
      return "4x3";
  }
  return _.aspect_ratio?.length
    ? _.aspect_ratio
    : _.usesquarethumbnails
      ? "square"
      : "4x3";
}
function _(_) {
  let { details: _, forcedWidth: _, className: _, ..._ } = _,
    _ = (0, _.useContext)(_),
    { setQuickViewItem: _ } = _() || {},
    _ = _ ?? parseInt(_),
    _ = parseInt(_),
    _ = _(_, _.file_type),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useRef)(null);
  switch (
    ((0, _.useEffect)(() => {
      _.current?.complete &&
        (_(),
        (_.current.naturalHeight == 0 || _.current.naturalWidth == 0) && _());
    }, [_, _]),
    _)
  ) {
    case "square":
      _ = _;
      break;
    case "16x9":
      _ = (_ * 9) / 16;
      break;
    case "4x3":
      _ = (_ * 3) / 4;
      break;
  }
  let _ = _.preview_url,
    _ = !_ || _ ? _() : `${_}${_(_, _, !_)}`;
  return (0, _.jsx)("div", {
    ..._,
    className: (0, _.default)(_, _, _[`aspectratio_${_}`], _ && _),
    children: (0, _.jsx)(_, {
      autoFocus: !1,
      className: _,
      _: _(_.publishedfileid),
      onOKActionDescription: _.Localize(
        "#Workshop_GamepadUIAction_ViewDetails",
      ),
      onSecondaryActionDescription: _.Localize(
        "#Workshop_GamepadUIAction_QuickView",
      ),
      onSecondaryButton: _ ? () => _(_.publishedfileid) : void 0,
      children: (0, _.jsx)(_, {
        ref: _,
        src: _,
        alt: _.title ?? "",
        onLoad: _,
        onError: _,
        loading: "lazy",
      }),
    }),
  });
}
var _ = _(_(), 1);
var _ = "zSSh2fwhC-U-";
var _ = "K492auqr8MI-";
var _ = "j0o2C8FUt1Y-";
var _ = "deUGLQhcPFM-";
var _ = "_6zTngo67XqU-";
var _ = "VBtc-GNVMqM-";
var _ = "O8zD8Rt3SnU-";
var _ = _(_(), 1);
function _(_) {
  let { details: _, className: _ } = _,
    _ = _.consumer_appid || _,
    _ = _.publishedfileid;
  return _(_, 1, _.file_type, _).data
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize("#Workshop_StatusIcon_TT_Subscribed"),
        direction: "right",
        nDelayShowMS: 100,
        children: (0, _.jsx)("div", {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { details: _, className: _ } = _,
    _ = _.consumer_appid,
    _ = _.publishedfileid;
  return _(_, 2, _.file_type, _).data
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize("#Workshop_StatusIcon_TT_Favorited"),
        direction: "right",
        nDelayShowMS: 100,
        children: (0, _.jsx)("div", {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {
            filled: !0,
          }),
        }),
      })
    : null;
}
function _(_) {
  let { details: _, className: _ } = _,
    _ = _.consumer_appid,
    _ = _.publishedfileid;
  return _(_, 3, _.file_type, _).data
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize("#Workshop_StatusIcon_TT_Played"),
        direction: "right",
        nDelayShowMS: 100,
        children: (0, _.jsx)("div", {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { details: _, className: _ } = _;
  return (_.flags ?? 0) & 2
    ? (0, _.jsx)(_, {
        toolTipContent: _.Localize("#Workshop_StatusIcon_TT_Incompatible"),
        direction: "right",
        nDelayShowMS: 100,
        children: (0, _.jsx)("div", {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {}),
        }),
      })
    : null;
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize("#Workshop_StatusIcon_TT_VotedDown"),
    direction: "right",
    nDelayShowMS: 100,
    children: (0, _.jsx)("div", {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize("#Workshop_StatusIcon_TT_VotedUp"),
    direction: "right",
    nDelayShowMS: 100,
    children: (0, _.jsx)("div", {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize("#Workshop_StatusIcon_TT_Reported"),
    direction: "right",
    nDelayShowMS: 100,
    children: (0, _.jsx)("div", {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize("#Workshop_StatusIcon_TT_BlockedCreator"),
    direction: "right",
    nDelayShowMS: 100,
    children: (0, _.jsx)("div", {
      className: (0, _.default)(_, _),
      children: (0, _.jsx)(_, {}),
    }),
  });
}
function _(_) {
  let { details: _, className: _ } = _;
  return !_.workshop_accepted
    ? null
    : (0, _.jsx)(_, {
        toolTipContent: _.Localize("#Workshop_StatusIcon_TT_Accepted"),
        direction: "right",
        nDelayShowMS: 100,
        children: (0, _.jsx)("div", {
          className: (0, _.default)(_, _),
          children: (0, _.jsx)(_, {}),
        }),
      });
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "bRnh6PiLM-I-";
var _ = "BgRIiTNqRTE-";
var _ = "qH5D-gLjGCk-";
var _ = "PoaeTcPGYW8-";
var _ = "_20GhQOFeMJ4-";
var _ = "Ig7GHLulS68-";
var _ = "QDZxzkEiVp4-";
var _ = "O4UgSDFcO8M-";
var _ = _(_(), 1);
function _(_) {
  return _({
    queryKey: ["useFriendsWhoFavoritedItem", _.publishedfileid],
    queryFn: async () =>
      await _(
        "/workshop/actions",
        "GetFriendsWhoFavoritedItem",
        _.consumer_appid,
        _.publishedfileid,
      ),
    staleTime: 3600 * 1e3,
  });
}
function _(_) {
  let { steamid: _ } = _,
    _ = _(_);
  if (!_.data) return;
  let _ = _.data?.public_data?.persona_name ?? "";
  return (0, _.jsx)(_, {
    playerLinkDetails: _.data,
    size: "X-Small",
    alt: _,
  });
}
function _(_) {
  let { details: _ } = _,
    _ = _(_);
  return _.data?.length
    ? (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            size: "2",
            children: _.LocalizePlural(
              "#Workshop_ItemTooltip_FriendsWhoFavorited",
              _.data.length,
            ),
          }),
          (0, _.jsx)(_, {
            direction: "row",
            gap: "1",
            children: _.data.map((_) =>
              (0, _.jsx)(
                _,
                {
                  steamid: _,
                },
                _,
              ),
            ),
          }),
        ],
      })
    : null;
}
function _(_) {
  let { details: _ } = _,
    _ = _(_),
    _ = _(_.tags ?? [], _.file_type);
  return (0, _.jsxs)("div", {
    className: (0, _.default)(_.TextToolTip, _),
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsx)(_, {
          size: "5",
          children: _.title,
        }),
      }),
      (0, _.jsx)("div", {
        className: _,
        children: _.length != 0 ? _ + "..." : "",
      }),
      (0, _.jsxs)(_, {
        direction: "column",
        className: _,
        children: [
          (0, _.jsx)(_, {
            children: _.Localize(
              "#Workshop_ItemDetails_TimestampCreated",
              _(_.time_created ?? 0),
              _(_.time_created ?? 0),
            ),
          }),
          _.time_created != _.time_updated &&
            (0, _.jsx)(_, {
              children: _.Localize(
                "#Workshop_ItemDetails_TimestampUpdated",
                _(_.time_updated ?? 0),
                _(_.time_updated ?? 0),
              ),
            }),
        ],
      }),
      _.length != 0 &&
        (0, _.jsx)(_, {
          gap: "1",
          marginTop: "1",
          wrap: "wrap",
          children: _.map((_) =>
            (0, _.jsx)(
              "div",
              {
                className: _,
                children: _.display_name,
              },
              _.tag,
            ),
          ),
        }),
      (0, _.jsx)(_, {
        details: _,
      }),
    ],
  });
}
function _(_) {
  let { details: _ } = _,
    {
      numChildItems: _,
      numChildCollections: _,
      rgChildIDs: _,
      rgChildCollectionIDs: _,
    } = _(_),
    _ = _(_);
  _.length != 0 && (_ += "...");
  let _ = 10,
    _ = 10;
  return (0, _.useMemo)(
    () =>
      (0, _.jsxs)("div", {
        className: (0, _.default)(_.TextToolTip, _),
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: _.title,
          }),
          (0, _.jsx)("div", {
            className: _,
            children: _,
          }),
          (0, _.jsxs)("div", {
            className: _,
            children: [
              _ != 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      children: _.LocalizePlural(
                        _ > _
                          ? "#Workshop_Collection_NumChildItems_MaxShown"
                          : "#Workshop_Collection_NumChildItems",
                        _,
                        _(_),
                        _,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      direction: "row",
                      gap: "1",
                      wrap: "wrap",
                      children: _.slice(0, _).map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            publishedfileid: _,
                            className: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
              _ != 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      children: _.LocalizePlural(
                        _ > _
                          ? "#Workshop_Collection_NumChildCollections_MaxShown"
                          : "#Workshop_Collection_NumChildCollections",
                        _,
                        _(_),
                        _,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      direction: "row",
                      gap: "1",
                      wrap: "wrap",
                      children: _.slice(0, _).map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            publishedfileid: _,
                            className: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          }),
          (0, _.jsx)(_, {
            details: _,
          }),
        ],
      }),
    [_, _, _, _, _, _],
  );
}
var _ = _(_(), 1);
function _(_) {
  return (0, _.useMemo)(() => {
    let _ = 0,
      _ = 0,
      _ = [],
      _ = [];
    _.children?.forEach((_) => {
      switch (_.file_type) {
        case 2:
          ++_, _.push(_);
          break;
        case 0:
        case 1:
        case 11:
          ++_, _.push(_);
          break;
      }
    });
    let _ = _.sort((_, _) => (_.sortorder ?? 0) - (_.sortorder ?? 0)).map(
        (_) => _.publishedfileid ?? "",
      ),
      _ = _.sort((_, _) => (_.sortorder ?? 0) - (_.sortorder ?? 0)).map(
        (_) => _.publishedfileid ?? "",
      );
    return {
      numChildItems: _,
      numChildCollections: _,
      rgChildIDs: _,
      rgChildCollectionIDs: _,
    };
  }, [_.children]);
}
function _(_) {
  let {
      publishedfileid: _,
      className: _,
      imageClassName: _,
      forcedWidth: _,
    } = _,
    _ = _(_, (_) => _("/workshop/actions", "GetUGCSummary", _)),
    _ = _(_, (..._) => _("/workshop/actions", "GetUserVoteSummary", ..._)),
    _ = (0, _.useMemo)(
      () =>
        _.data
          ? (0, _.jsx)(_, {
              details: _.data,
            })
          : null,
      [_.data],
    );
  if (!_ || !_.data)
    return (0, _.jsx)(_, {
      direction: "row",
      gap: "1",
      className: (0, _.default)(_, _),
      align: "center",
      children: (0, _.jsx)(
        "div",
        {
          className: _,
        },
        "preview_image",
      ),
    });
  let _ = _(_.data.file_type);
  return (0, _.jsx)(_, {
    hoverContent: _,
    popoverProps: {
      placement: "right-start",
      width: "content",
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      direction: "row",
      gap: "1",
      className: (0, _.default)(_, _, _.data?.vote_against && _),
      align: "center",
      children: [
        (0, _.jsx)(
          _,
          {
            details: _.data,
            className: _,
            forcedWidth: _ ?? 50,
          },
          "preview_image",
        ),
        (0, _.jsxs)(_, {
          direction: "row",
          className: _,
          children: [
            _ &&
              (0, _.jsx)(_, {
                details: _.data,
                className: _,
              }),
            (0, _.jsx)(_, {
              details: _.data,
              className: _,
            }),
            (0, _.jsx)(_, {
              details: _.data,
              className: _,
            }),
            _.data?.vote_for &&
              (0, _.jsx)(_, {
                className: _,
              }),
            _.data?.vote_against &&
              (0, _.jsx)(_, {
                className: _,
              }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let {
      publishedfileid: _,
      className: _,
      imageClassName: _,
      forcedWidth: _,
    } = _,
    _ = _(_, (_) => _("/workshop/actions", "GetUGCCollectionSummary", _)),
    _ = (0, _.useMemo)(
      () =>
        _.data
          ? (0, _.jsx)(_, {
              details: _.data,
            })
          : null,
      [_.data],
    );
  return !_ || !_.data
    ? (0, _.jsx)(_, {
        direction: "row",
        gap: "1",
        className: (0, _.default)(_, _),
        align: "center",
        children: (0, _.jsx)(
          "div",
          {
            className: _,
          },
          "preview_image",
        ),
      })
    : (0, _.jsx)(_, {
        hoverContent: _,
        popoverProps: {
          placement: "right-start",
          width: "content",
        },
        nDelayShowMS: 250,
        bTooltipMode: !0,
        children: (0, _.jsx)(_, {
          direction: "row",
          gap: "1",
          className: (0, _.default)(_, _),
          align: "center",
          children: (0, _.jsx)(
            _,
            {
              details: _.data,
              className: _,
              forcedWidth: _ ?? 50,
            },
            "preview_image",
          ),
        }),
      });
}
var _ = "QcQBiQ07EYI-";
var _ = "Ll8t9-pFhtA-";
var _ = "DpgHtASWdxg-";
var _ = "_49iUm91uV4g-";
var _ = _(_(), 1);
function _(_, _, _, _) {
  return _(_, _, _, _, (..._) =>
    _("/workshop/actions", "GetUserListStatus", ..._),
  );
}
function _(_, _) {
  let [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => _(!0), [_]),
    _ = (0, _.useCallback)(() => _(!1), [_]),
    _ = _.consumer_appid || _,
    _ = _.publishedfileid,
    _ = _(_, _, _.file_type, _),
    _ = _(_, _, _.file_type, _),
    _ = _.isFetched && _.data,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = (0, _.useCallback)(async () => {
      _.mutate(!_, {
        onError: _,
      });
    }, [_, _, _]);
  return {
    onMouseEnter: _,
    onMouseLeave: _,
    bHovered: _,
    bSubscribed: _,
    fnToggleWorkshopSubscription: _,
    errorDialog: _,
  };
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _(
        "/workshop/actions",
        "SetSubscriptionListFromCollection",
        _,
        _,
        _.publishedfileid,
        _.bAddOnly,
      ),
    onSuccess: (_) => {
      _ &&
        (_.invalidateQueries({
          queryKey: ["ugcliststatus", _, _],
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _("/workshop/actions", "UnsubscribeCollection", _.publishedfileid),
    onSuccess: (_) => {
      _ &&
        (_.invalidateQueries({
          queryKey: ["ugcliststatus", _, _],
        }),
        _.invalidateQueries({
          queryKey: _(_),
        }));
    },
  });
}
function _(_) {
  let { details: _, onSubscribe: _, onClose: _ } = _,
    { rgChildIDs: _ } = _(_),
    _ = _.consumer_appid || _,
    _ = _(_, 1, _.file_type, _.publishedfileid),
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = async () => {
      (await _.mutateAsync(void 0, {
        onError: _,
      })) && _();
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClose: _,
        children: (0, _.jsxs)(_, {
          background: "dull-7",
          padding: "3",
          radius: "md",
          className: _,
          children: [
            (0, _.jsx)(_, {
              size: {
                initial: "3",
                _: "5",
              },
              children: _.Localize("#Workshop_Dialog_ItemDependencies"),
            }),
            (0, _.jsxs)(_, {
              gap: "1",
              direction: "column",
              marginTop: "1",
              children: [
                (0, _.jsx)("div", {
                  children: _.Localize(
                    "#Workshop_Dialog_ItemDependencies_Desc1",
                  ),
                }),
                (0, _.jsx)("div", {
                  children: _.Localize(
                    "#Workshop_Dialog_ItemDependencies_Desc2",
                  ),
                }),
                (0, _.jsx)("div", {
                  children: _.Localize(
                    "#Workshop_Dialog_ItemDependencies_Desc3",
                  ),
                }),
                (0, _.jsx)(_, {
                  className: _,
                  direction: "row",
                  gap: "1",
                  wrap: "wrap",
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        publishedfileid: _,
                        className: _,
                        imageClassName: _,
                        forcedWidth: 100,
                      },
                      _,
                    ),
                  ),
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              justify: "end",
              gap: "3",
              align: "center",
              marginTop: "3",
              wrap: "wrap",
              children: [
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _.Localize(
                    "#Workshop_Dialog_SubscribeJustThisItem",
                  ),
                }),
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _.Localize("#Workshop_Dialog_SubscribeAll"),
                }),
                (0, _.jsx)(_, {
                  onClick: _,
                  color: "dull",
                  children: _.Localize("#Button_Cancel"),
                }),
              ],
            }),
          ],
        }),
      }),
      _,
    ],
  });
}
var _ = _(_(), 1);
function _(_) {
  let { details: _, size: _ } = _,
    _ = _(_.publishedfileid, (..._) =>
      _("/workshop/actions", "GetUserVoteSummary", ..._),
    ),
    _ = _(_.publishedfileid, (..._) =>
      _("/workshop/actions", "UpdateUserVote", ..._),
    ),
    _ = !!_.data?.vote_for,
    _ = !!_.data?.vote_against,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = async () => {
      _ ||
        (await _.mutate(!0, {
          onError: _,
        }));
    },
    _ = async () => {
      _ ||
        (await _.mutate(!1, {
          onError: _,
        }));
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)("div", {
        className: (0, _.default)(_, _ && _),
        children: (0, _.jsx)(_, {
          disabled: !_.logged_in,
          onClick: _,
          size: _,
          icon: !0,
          color: "dull",
          children: (0, _.jsx)(_, {}),
        }),
      }),
      (0, _.jsx)("div", {
        className: (0, _.default)(_, _ && _),
        children: (0, _.jsx)(_, {
          disabled: !_.logged_in,
          onClick: _,
          size: _,
          icon: !0,
          color: "dull",
          children: (0, _.jsx)(_, {}),
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    {
      bSubscribed: _,
      fnToggleWorkshopSubscription: _,
      bHovered: _,
      onMouseEnter: _,
      onMouseLeave: _,
      errorDialog: _,
    } = _(_, 1),
    [_, _] = (0, _.useState)(!1),
    _ = _
      ? "#Workshop_ItemDetails_Subscribed"
      : "#Workshop_ItemDetails_Subscribe",
    _ = _
      ? "#Workshop_ItemDetails_Unsubscribe"
      : "#Workshop_ItemDetails_Subscribe",
    _ = async () => {
      if (!_ && _.file_type == 0 && _.num_children != 0) {
        _(!0);
        return;
      }
      _();
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(
          _
            ? "#Workshop_ItemDetails_Unsubscribe_TT"
            : "#Workshop_ItemDetails_Subscribe_TT",
        ),
        direction: "top",
        children: (0, _.jsx)("div", {
          className: _,
          children: (0, _.jsxs)(_, {
            disabled: !_.logged_in,
            onClick: _,
            size: _,
            onMouseEnter: _,
            onMouseLeave: _,
            icon: !0,
            color: "dull",
            children: [
              _ && !_ && (0, _.jsx)(_, {}),
              _ && _ && (0, _.jsx)(_, {}),
              !_ && (0, _.jsx)(_, {}),
              !_ && _.Localize(_),
              _ && _.Localize(_),
            ],
          }),
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _,
          onSubscribe: () => {
            _(), _(!1);
          },
          onClose: () => _(!1),
        }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, className: _ } = _,
    {
      bSubscribed: _,
      fnToggleWorkshopSubscription: _,
      bHovered: _,
      onMouseEnter: _,
      onMouseLeave: _,
      errorDialog: _,
    } = _(_, 1),
    [_, _] = (0, _.useState)(!1),
    { data: _, refetch: _ } = _(_.publishedfileid, !1),
    _ = _
      ? "#Workshop_ItemDetails_Unsubscribe_TT"
      : "#Workshop_ItemDetails_Subscribe_TT",
    _ = async () => {
      if (!_ && _.file_type == 0) {
        if (_ === void 0) {
          if ((await _()).data?.num_children) {
            _(!0);
            return;
          }
        } else if (_?.num_children) {
          _(!0);
          return;
        }
      }
      _();
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize(_),
        direction: "right",
        nDelayShowMS: 250,
        children: (0, _.jsx)("div", {
          className: _,
          children: (0, _.jsxs)(_, {
            onClick: _,
            size: "1",
            onMouseEnter: _,
            onMouseLeave: _,
            children: [
              _ && !_ && (0, _.jsx)(_, {}),
              _ && _ && (0, _.jsx)(_, {}),
              !_ && (0, _.jsx)(_, {}),
            ],
          }),
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _ ?? _,
          onSubscribe: () => {
            _(), _(!1);
          },
          onClose: () => _(!1),
        }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = _.consumer_appid || _,
    _ = _.publishedfileid,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_, 1),
    _ = async (_) => {
      let _ = await _.mutate(
        {
          publishedfileid: _,
          bAddOnly: _,
        },
        {
          onError: _,
        },
      );
      _(!1);
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsxs)(_, {
          disabled: !_.logged_in,
          onClick: () => _(!0),
          size: _,
          icon: !0,
          color: "dull",
          children: [
            (0, _.jsx)(_, {}),
            _.Localize("#Workshop_Collection_SubscribeToAll"),
          ],
        }),
      }),
      _ &&
        (0, _.jsxs)(_, {
          strTitle: _.Localize("#Workshop_Dialog_CollectionSubscribe"),
          onClose: () => _(!1),
          children: [
            (0, _.jsx)(_, {
              children: _.Localize("#Workshop_Dialog_CollectionSubscribe_Desc"),
            }),
            (0, _.jsxs)(_, {
              justify: "end",
              gap: "3",
              align: "center",
              marginTop: "3",
              children: [
                (0, _.jsx)(_, {
                  onClick: () => _(!0),
                  autoFocus: !0,
                  children: _.Localize(
                    "#Workshop_Dialog_CollectionSubscribe_AddOnly",
                  ),
                }),
                (0, _.jsx)(_, {
                  onClick: () => _(!1),
                  children: _.Localize(
                    "#Workshop_Dialog_CollectionSubscribe_Overwrite",
                  ),
                }),
                (0, _.jsx)(_, {
                  onClick: () => _(!1),
                  children: (0, _.jsx)("span", {
                    children: _.Localize("#Button_Cancel"),
                  }),
                }),
              ],
            }),
          ],
        }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    _ = _.consumer_appid || _,
    _ = _.publishedfileid,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_, 1),
    _ = async () => {
      let _ = await _.mutate(
        {
          publishedfileid: _,
        },
        {
          onError: _,
        },
      );
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsxs)(_, {
          disabled: !_.logged_in,
          onClick: _,
          size: _,
          icon: !0,
          color: "dull",
          children: [
            (0, _.jsx)(_, {}),
            _.Localize("#Workshop_Collection_UnsubscribeFromAll"),
          ],
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    {
      bSubscribed: _,
      fnToggleWorkshopSubscription: _,
      bHovered: _,
      onMouseEnter: _,
      onMouseLeave: _,
      errorDialog: _,
    } = _(_, 2),
    _ = _
      ? "#Workshop_ItemDetails_Favorited"
      : "#Workshop_ItemDetails_Favorite",
    _ = _
      ? "#Workshop_ItemDetails_Unfavorite"
      : "#Workshop_ItemDetails_Favorite";
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _
          ? void 0
          : _.Localize("#Workshop_ItemDetails_Favorite_TT"),
        direction: "top",
        children: (0, _.jsx)("div", {
          className: _,
          children: (0, _.jsxs)(_, {
            disabled: !_.logged_in,
            onClick: _,
            size: _,
            onMouseEnter: _,
            onMouseLeave: _,
            icon: !0,
            color: "dull",
            children: [
              _ &&
                !_ &&
                (0, _.jsx)(_, {
                  filled: !0,
                }),
              _ && _ && (0, _.jsx)(_, {}),
              !_ && (0, _.jsx)(_, {}),
              !_ && _.Localize(_),
              _ && _.Localize(_),
            ],
          }),
        }),
      }),
      _,
    ],
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _("/workshop/actions", "ReportUGC", _, _.description, _.reason),
    onSuccess: (_) => {
      _ &&
        _.invalidateQueries({
          queryKey: ["ugcvote", _],
        });
    },
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    _ = _(_.publishedfileid, (..._) =>
      _("/workshop/actions", "GetUserVoteSummary", ..._),
    ),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(""),
    [_, _] = (0, _.useState)(0),
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_.publishedfileid),
    _ = async () => {
      await _.mutate({
        description: _,
        reason: _,
      }),
        _(!1);
    },
    _ = _,
    _ = (0, _.jsx)(_, {
      _: `${_.COMMUNITY_BASE_URL}dmca/create/${_.publishedfileid}`,
      children: _.Localize("#Workshop_Dialog_Report_Here"),
    }),
    _ = (0, _.jsx)(_, {
      _: `${_.COMMUNITY_BASE_URL}trademark/createtrademarkcomplaint/${_.publishedfileid}`,
      children: _.Localize("#Workshop_Dialog_Report_Here"),
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize("#Workshop_ItemDetails_Report_TT"),
        direction: "top",
        children: (0, _.jsx)("div", {
          className: (0, _.default)(_, _.data?.reported && _),
          children: (0, _.jsx)(_, {
            disabled: _.data?.reported,
            onClick: () => _(!0),
            size: _,
            icon: !0,
            color: "dull",
            children: (0, _.jsx)(_, {}),
          }),
        }),
      }),
      _ &&
        !_.logged_in &&
        (0, _.jsx)(_, {
          bShowDialog: !0,
          setShowDialog: _,
        }),
      _ &&
        _.logged_in &&
        (0, _.jsx)(_, {
          className: _,
          strTitle: _.Localize("#Workshop_Dialog_Report"),
          onClose: () => _(!1),
          children: (0, _.jsxs)(_, {
            direction: "column",
            gap: "2",
            children: [
              _ == 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      children: _.Localize(
                        "#Workshop_Dialog_Report_Reason_Desc",
                      ),
                    }),
                    (0, _.jsx)(_, {
                      reasons: _,
                      onSelect: (_) => _(_ ?? 0),
                    }),
                  ],
                }),
              _ != 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      children: _.Localize(
                        "#Workshop_Dialog_Report_Reason",
                        _(_),
                      ),
                    }),
                    (0, _.jsx)(_, {
                      children: _.Localize("#Workshop_Dialog_Report_Desc"),
                    }),
                    (0, _.jsx)(_, {
                      value: _,
                      onTextChange: _,
                    }),
                  ],
                }),
              (0, _.jsx)(_, {
                children: _.LocalizeReact(
                  "#Workshop_Dialog_Report_DMCA_Desc",
                  _,
                ),
              }),
              (0, _.jsx)(_, {
                children: _.LocalizeReact(
                  "#Workshop_Dialog_Report_Trademark_Desc",
                  _,
                ),
              }),
              (0, _.jsxs)(_, {
                justify: "end",
                gap: "3",
                align: "center",
                marginTop: "3",
                children: [
                  (0, _.jsx)(_, {
                    disabled: _.trim().length == 0 || _ == 0,
                    onClick: _,
                    autoFocus: !0,
                    children: _.Localize("#Button_OK"),
                  }),
                  (0, _.jsx)(_, {
                    onClick: () => _(!1),
                    children: (0, _.jsx)("span", {
                      children: _.Localize("#Button_Cancel"),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _, className: _, classNameReaction: _ } = _,
    [_, _] = (0, _.useState)(!0),
    _ = _(),
    [_, _, _] = _();
  if (!_.isSuccess || !_.reactions || _.reactions?.length == 0) return null;
  let _ = [],
    _ = 0;
  for (let _ of _.reactions) {
    let _ = _.data?.find((_) => _.reactionid == _.reactionid);
    _ &&
      (!_ || (_.length < 3 && _.purchaseable)
        ? _.push(_)
        : _.count && (_ += _.count));
  }
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)("div", {
        className: (0, _.default)(_),
        children: (0, _.jsx)(_, {
          disabled: !_.logged_in,
          onClick: _,
          size: _,
          icon: !0,
          color: "dull",
          children: (0, _.jsx)(_, {}),
        }),
      }),
      (0, _.jsx)(_, {
        targetType: 2,
        bShowModal: _,
        targetid: _.publishedfileid,
        ugcType: _.file_type ?? 0,
        onDismiss: _,
        onSuccess: () => {},
      }),
      _.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            className: _,
            details: _,
            reaction: _,
          },
          _.reactionid,
        ),
      ),
      _ &&
        _ > 0 &&
        (0, _.jsx)(_, {
          className: _,
          nReactions: _,
          onActivate: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  let { details: _, reaction: _, className: _ } = _,
    [_, _, _] = _(),
    _ = _(_.reactionid ?? 0);
  return _.reactionid
    ? (0, _.jsx)(_, {
        bDisabled: _,
        toolTipContent: (0, _.jsx)(_, {
          eReactionID: _.reactionid,
          nCount: _.count,
        }),
        direction: "top",
        children: (0, _.jsxs)(_, {
          className: (0, _.default)(_, _),
          onActivate: _,
          focusable: !0,
          children: [
            (0, _.jsx)(_, {
              targetType: 2,
              bShowModal: _,
              targetid: _.publishedfileid,
              ugcType: _.file_type ?? 0,
              onDismiss: _,
              initialSelectedReaction: _.reactionid,
              onSuccess: () => {},
            }),
            (0, _.jsx)("img", {
              className: _,
              src: _(_.reactionid, !1),
              alt: _?.localized_title,
            }),
            !!_.count &&
              (0, _.jsx)("div", {
                className: _,
                children: _(_.count),
              }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let { nReactions: _, onActivate: _, className: _ } = _;
  return (0, _.jsx)(_, {
    toolTipContent: _.Localize("#Workshop_ItemDetails_ShowAllReactions"),
    direction: "top",
    children: (0, _.jsxs)(_, {
      className: (0, _.default)(_, _),
      onActivate: _,
      children: [
        (0, _.jsx)("img", {
          className: _,
          src: _.STORE_BASE_URL + "public/shared/images/award_icon_blue.svg",
          alt: _.LocalizePlural("#Workshop_ItemDetails_ReactionCount", _, _(_)),
        }),
        (0, _.jsx)("div", {
          className: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  return _({
    queryKey: ["user_collections", _],
    queryFn: async () => await _("/workshop/actions", "GetUserCollections", _),
    staleTime: 3600 * 1e3,
  });
}
function _(_) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _("/workshop/actions", "CreateCollection", _, _.newCollectionTitle),
    onSuccess: (_) => {
      _.invalidateQueries({
        queryKey: ["user_collections", _],
      });
    },
  });
}
function _(_) {
  return _({
    mutationFn: async (_) =>
      _("/workshop/actions", "ModifyCollections", _, _.rgCollectionIDs, !0),
    onSuccess: (_) => {},
  });
}
function _(_) {
  let { details: _, onClose: _ } = _,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_.consumer_appid),
    [_, _] = (0, _.useState)([]),
    [_, _] = (0, _.useState)(""),
    _ = _(_.consumer_appid),
    _ = _(_.publishedfileid),
    _ = async () => {
      await _.mutate(
        {
          newCollectionTitle: _,
        },
        {
          onError: _,
        },
      );
    },
    _ = async () => {
      await _.mutate(
        {
          rgCollectionIDs: _,
        },
        {
          onError: _,
        },
      ),
        _();
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize("#Workshop_Dialog_AddToCollection"),
        onClose: _,
        children: [
          (0, _.jsxs)(_, {
            children: [
              _.data &&
                _.data.length == 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    _.Localize(
                      "#Workshop_Dialog_AddToCollection_NoSavedCollections_Desc",
                    ),
                    (0, _.jsx)(_, {
                      onTextChange: _,
                      value: _,
                      maxLength: 255,
                    }),
                  ],
                }),
              _.data &&
                _.data.length != 0 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.Localize(
                    "#Workshop_Dialog_AddToCollection_Desc",
                    _.title ?? "",
                  ),
                }),
            ],
          }),
          (0, _.jsx)(_, {
            children:
              _.data &&
              _.data.length != 0 &&
              (0, _.jsx)(_, {
                marginTop: "2",
                selected: _,
                onSelectedChange: _,
                direction: "column",
                children: _.data.map((_) =>
                  (0, _.jsx)(
                    _.Item,
                    {
                      value: _.publishedfileid,
                      children: _.title,
                    },
                    _.publishedfileid,
                  ),
                ),
              }),
          }),
          (0, _.jsxs)(_, {
            justify: "end",
            gap: "3",
            align: "center",
            marginTop: "3",
            children: [
              _.data &&
                _.data.length != 0 &&
                (0, _.jsx)(_, {
                  disabled: _.length == 0,
                  onClick: () => _(),
                  autoFocus: !0,
                  children: _.Localize("#Workshop_Dialog_AddToCollection_OK"),
                }),
              _.data &&
                _.data.length == 0 &&
                (0, _.jsx)(_, {
                  disabled: _.trim().length == 0,
                  onClick: () => _(),
                  autoFocus: !0,
                  children: _.Localize(
                    "#Workshop_Dialog_AddToCollection_Create",
                  ),
                }),
              (0, _.jsx)(_, {
                onClick: _,
                children: (0, _.jsx)("span", {
                  children: _.Localize("#Button_Cancel"),
                }),
              }),
            ],
          }),
        ],
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        toolTipContent: _.Localize("#Workshop_ItemDetails_AddToCollection_TT"),
        direction: "top",
        children: (0, _.jsx)("div", {
          className: _,
          children: (0, _.jsx)(_, {
            disabled: !_.logged_in,
            onClick: () => _(!0),
            size: _,
            icon: !0,
            color: "dull",
            children: _.Localize("#Workshop_ItemDetails_AddToCollection"),
          }),
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _,
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_, _) {
  let _ = _();
  return _({
    mutationFn: async (_) =>
      _(
        "/workshop/actions",
        "SaveCollectionToCollection",
        _,
        _,
        _.dstCollectionID,
        _.newCollectionTitle,
      ),
    onSuccess: (_) => {
      _.invalidateQueries({
        queryKey: ["user_collections", _],
      });
    },
  });
}
function _(_) {
  let { details: _, onClose: _ } = _,
    { errorDialog: _, HandleMutationError: _ } = _(),
    _ = _(_.consumer_appid),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(0),
    [_, _] = (0, _.useState)(""),
    { mutateAsync: _ } = _(_.consumer_appid, _.publishedfileid),
    _ = async () => {
      if (!_.data || _ >= _.data.length) return;
      let _ = "";
      if (_ == 2 && ((_ = _.data[_].publishedfileid), !_)) return;
      let _ = await _(
        {
          dstCollectionID: _,
          newCollectionTitle: _,
        },
        {
          onError: _,
        },
      );
      if ((_(), _ == 1 && _)) {
        let _ = _(_);
        window.location.href = _;
      }
    };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        strTitle: _.Localize("#Workshop_Dialog_SaveCollectionToCollection"),
        onClose: _,
        children: [
          (0, _.jsxs)(_, {
            children: [
              _ == 0 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.Localize(
                    "#Workshop_Dialog_SaveCollectionToCollection_Desc",
                  ),
                }),
              _ == 1 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.Localize(
                    "#Workshop_Dialog_SaveCollectionToCollection_NewPrompt",
                  ),
                }),
              _ == 2 &&
                (0, _.jsx)(_.Fragment, {
                  children: _.Localize(
                    "#Workshop_Dialog_SaveCollectionToCollection_Select",
                  ),
                }),
            ],
          }),
          (0, _.jsxs)(_, {
            children: [
              _ == 1 &&
                (0, _.jsx)(_, {
                  onTextChange: _,
                  value: _,
                  maxLength: 255,
                }),
              _ == 2 &&
                _.data &&
                _.data.length != 0 &&
                (0, _.jsx)(_, {
                  options: _.data,
                  getOptionLabel: (_) => _.title ?? "",
                  selectedValue: _.data[_],
                  onSelectionChange: (_) =>
                    _(
                      _.data.findIndex(
                        (_) => _.publishedfileid == _.publishedfileid,
                      ),
                    ),
                }),
            ],
          }),
          (0, _.jsxs)(_, {
            justify: "end",
            gap: "3",
            align: "center",
            marginTop: "3",
            children: [
              _ == 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      onClick: () => _(1),
                      autoFocus: !0,
                      children: _.Localize(
                        "#Workshop_Dialog_SaveCollectionToCollection_New",
                      ),
                    }),
                    (0, _.jsx)(_, {
                      disabled: !_.data || _.data.length == 0,
                      onClick: () => _(2),
                      children: _.Localize(
                        "#Workshop_Dialog_SaveCollectionToCollection_Existing",
                      ),
                    }),
                  ],
                }),
              _ == 1 &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)(_, {
                    disabled: _.trim().length == 0,
                    onClick: _,
                    children: _.Localize("#Button_OK"),
                  }),
                }),
              _ == 2 &&
                (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsx)(_, {
                    onClick: _,
                    children: _.Localize("#Button_OK"),
                  }),
                }),
              (0, _.jsx)(_, {
                onClick: _,
                children: (0, _.jsx)("span", {
                  children: _.Localize("#Button_Cancel"),
                }),
              }),
            ],
          }),
        ],
      }),
      _,
    ],
  });
}
function _(_) {
  let { details: _, size: _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsxs)(_, {
          disabled: !_.logged_in,
          onClick: () => _(!0),
          size: _,
          icon: !0,
          color: "dull",
          children: [
            (0, _.jsx)(_, {}),
            _.Localize("#Workshop_ItemDetails_SaveCollectionToCollection"),
          ],
        }),
      }),
      _ &&
        (0, _.jsx)(_, {
          details: _,
          onClose: () => _(!1),
        }),
    ],
  });
}
function _(_) {
  return _({
    queryKey: ["workshop_parents", _],
    queryFn: async () => await _("/workshop/actions", "GetParentsCounts", _),
    staleTime: 3600 * 1e3,
  });
}
function _(_) {
  let { details: _, size: _, onClick: _ } = _,
    _ = _(_.publishedfileid);
  return !_.data || !_.data.total_parent_items
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: (0, _.jsx)(_, {
          toolTipContent: _.Localize(
            "#Workshop_ItemDetails_ViewDependentItems_TT",
          ),
          direction: "top",
          children: (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsxs)(_, {
              onClick: _,
              size: _,
              icon: !0,
              color: "dull",
              children: [
                (0, _.jsx)(_, {}),
                _.Localize("#Workshop_ItemDetails_ViewDependentItems"),
              ],
            }),
          }),
        }),
      });
}
var _ = _(_(), 1);
function _(_) {
  let { details: _ } = _,
    { data: _ } = _(_.creator),
    _ = _(_) + `/myworkshopfiles/?appid=${_.consumer_appid}`,
    _ = _?.public_data?.persona_name;
  return !_ || !_
    ? (0, _.jsx)("div", {
        className: _,
        children: " ",
      })
    : (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsx)(_, {
          gamepadFocusable: !1,
          _: _,
          children: _.Localize("#Workshop_Browse_Author_Link", _),
        }),
      });
}
function _(_) {
  let { details: _ } = _,
    { setQuickViewItem: _ } = _();
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(_, {
      toolTipContent: _.Localize("#Workshop_Item_QuickView"),
      direction: "right",
      nDelayShowMS: 100,
      children: (0, _.jsx)(_, {
        className: _,
        onActivate: () => _(_.publishedfileid),
        children: (0, _.jsx)(_, {}),
      }),
    }),
  });
}
function _(_) {
  let { details: _, bEnlarged: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_.publishedfileid, (..._) =>
      _("/workshop/actions", "GetUserVoteSummary", ..._),
    ),
    _ = _((..._) => _("/workshop/actions", "GetCurrentUserFriendsList", ..._)),
    _ = _.logged_in && _(_.file_type),
    _ = _(_.consumer_appid, 1, _.file_type, _.publishedfileid),
    _ = _ && _.cansubscribefrombrowseview,
    _ = (0, _.jsx)(_, {
      details: _,
    }),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        _.star_rating == -1 &&
          _.Localize("#Workshop_ItemDetails_NotEnoughRatings"),
        (_.star_rating ?? 0) > -1 &&
          _.LocalizePlural(
            "#Workshop_ItemDetails_NumRatings",
            _.total_votes ?? 0,
            _(_.total_votes ?? 0),
          ),
      ],
    }),
    { preferences: _ } = _(),
    _ = !!_.data?.reported,
    _ = !!_.data?.vote_for,
    _ = !!_.data?.vote_against,
    _ = _?.data?.ignored.has(_.creator),
    _ =
      (_.bDimVotedUp && _) ||
      (_.bDimVotedDown && _) ||
      (_.bDimReported && _) ||
      (_.bDimSubscribed && _ && _.data) ||
      (_.bDimIgnoredCreator && _);
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _ && _, _ && _),
    children: [
      (0, _.jsx)(_, {
        hoverContent: _,
        popoverProps: {
          placement: "right-start",
          width: "content",
        },
        nDelayShowMS: 250,
        bTooltipMode: !0,
        children: (0, _.jsx)(_, {
          className: (0, _.default)(_, _ && _),
          details: _,
          forcedWidth: _ ? 1024 : void 0,
        }),
      }),
      (0, _.jsxs)("div", {
        className: _,
        children: [
          _ &&
            !_.IN_GAMEPADUI &&
            (0, _.jsx)(_, {
              details: _,
              className: _,
            }),
          (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  details: _,
                  className: _,
                }),
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  className: _,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: _,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: _,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: _,
                }),
            ],
          }),
          (0, _.jsx)(_, {
            toolTipContent: _,
            direction: "top",
            nBodyAlignment: 0,
            nDelayShowMS: 250,
            children: (0, _.jsx)(_, {
              details: _,
              className: _,
            }),
          }),
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)(_, {
              gamepadFocusable: !1,
              _: _(_.publishedfileid),
              children: _.title,
            }),
          }),
          (0, _.jsx)(_, {
            details: _,
          }),
          !_.IN_GAMEPADUI &&
            (0, _.jsx)(_, {
              details: _,
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { details: _ } = _,
    _ = _(_);
  _.length != 0 && (_ += "...");
  let { numChildItems: _, numChildCollections: _ } = _(_);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        details: _,
      }),
      (0, _.jsxs)("div", {
        className: _,
        children: [
          (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsxs)("div", {
                className: _,
                children: [
                  (0, _.jsx)("div", {
                    className: _,
                    children: (0, _.jsx)(_, {
                      gamepadFocusable: !1,
                      _: _(_.publishedfileid),
                      children: _.title,
                    }),
                  }),
                  (0, _.jsx)(_, {
                    details: _,
                  }),
                ],
              }),
              (0, _.jsxs)(_, {
                direction: "row",
                className: _,
                children: [
                  (0, _.jsx)(_, {
                    details: _,
                    className: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: _,
                    children: [
                      (0, _.jsx)(_, {
                        details: _,
                      }),
                      (0, _.jsx)(_, {
                        details: _,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, _.jsx)("div", {
            className: _,
            children: _,
          }),
          (0, _.jsxs)("div", {
            className: _,
            children: [
              _ != 0 &&
                (0, _.jsx)("div", {
                  children: _.LocalizePlural(
                    "#Workshop_Collection_NumChildItems",
                    _,
                    _(_),
                  ),
                }),
              _ != 0 &&
                (0, _.jsx)("div", {
                  children: _.LocalizePlural(
                    "#Workshop_Collection_NumChildCollections",
                    _,
                    _(_),
                  ),
                }),
            ],
          }),
          !_.IN_GAMEPADUI &&
            (0, _.jsx)(_, {
              details: _,
            }),
        ],
      }),
    ],
  });
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = _(_());
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      _: "M16.9038 18.5317L25 10.4356L21.4645 6.90002L9.83275 18.5317L21.4645 30.1635L25 26.6279L16.9038 18.5317Z",
    }),
  });
}
function _(_) {
  return (0, _.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "SVGIcon_Button",
    viewBox: "0 0 36 36",
    fill: "none",
    ..._,
    children: (0, _.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      _: "M18.0962 18.5317L10 10.4356L13.5355 6.90002L25.1673 18.5317L13.5355 30.1635L10 26.6279L18.0962 18.5317Z",
    }),
  });
}
var _ = {
  Spoiler: "d7DW-rn-R2I-",
};
var _ = _(_(), 1);
function _(_) {
  return (0, _.jsx)("span", {
    className: _.Spoiler,
    children: _.children,
  });
}
var _ = {
  Table: "_73m-Rmrdgkw-",
  NoBorder: "SBoSfn5TFWk-",
  TableRow: "snkwcf-K-TQ-",
  TableCell: "BMSSDGDgvHA-",
  EqualCells: "jmC14wBT7AI-",
};
var _ = _(_(), 1),
  _ = {
    table: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  };
function _(_) {
  let _ = _(_.args, "noborder"),
    _ = _(_.args, "equalcells"),
    _ = _(_.args, "colwidth");
  return (0, _.jsxs)("table", {
    className: _(_.Table, "BB_Table", _ && _.NoBorder, _ && _.EqualCells),
    children: [
      _ &&
        (0, _.jsx)("colgroup", {
          children: _.split(",").map((_, _) =>
            (0, _.jsx)(
              _,
              {
                width: _,
              },
              _,
            ),
          ),
        }),
      (0, _.jsx)("tbody", {
        children: _.children,
      }),
    ],
  });
}
function _(_) {
  let { width: _ } = _,
    _;
  return (
    _ &&
      parseInt(_) > 0 &&
      (_ = {
        width: `${_}px`,
      }),
    (0, _.jsx)("col", {
      style: _,
    })
  );
}
function _(_) {
  return (0, _.jsx)("tr", {
    className: _(_.TableRow, "BB_TableRow"),
    children: _.children,
  });
}
function _(_, _) {
  let _ = _(_.args, "width"),
    _ =
      _?.length != 0
        ? {
            width: _,
          }
        : void 0,
    _ = _(_.args, "colspan"),
    _ = _(_.args, "rowspan"),
    _ = {};
  return (
    _ && parseInt(_) > 1 && (_.colSpan = parseInt(_)),
    _ && parseInt(_) > 1 && (_.rowSpan = parseInt(_)),
    (0, _.jsx)(_, {
      className: _(_.TableCell, _ == "td" && "BB_TableData"),
      ..._,
      style: _,
      children: _.children,
    })
  );
}
function _(_) {
  return _("th", _);
}
function _(_) {
  return _("td", _);
}
var _ = _(_(), 1);
var _ = "-iFss7wPCns-";
var _ = _(_(), 1);
function _(_) {
  let _ = _(_.args) ?? _?.children?.toString();
  return (
    console.log(_.tagname + " => " + _),
    _
      ? (0, _.jsx)(_, {
          className: _,
          src: _,
          alt: _,
        })
      : null
  );
}
function _(_) {
  return null;
}
function _(_) {
  return (0, _.useMemo)(() => {
    let _ = (_) => new _(new _()),
      _ = {
        ..._,
        ..._,
        ..._,
        ..._,
        img: {
          Constructor: _.include_images ? _ : _,
          autocloses: !0,
        },
        url: {
          Constructor: _,
        },
        spoiler: {
          Constructor: _,
        },
      };
    return new _(_, _, _.LANGUAGE);
  }, [_]);
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "cwVSLdej-KM-";
var _ = "_4Gz-CkDZNb0-";
var _ = "vezX8szxVBA-";
var _ = "iUEmwVRQDxI-";
var _ = "UszZC-hJD90-";
var _ = "_6NUSzmvG-iE-";
var _ = "_528TPg1cCxQ-";
var _ = "s8iwgmJrXx0-";
var _ = "CYumDjdBWSE-";
var _ = "kUWcDg5pvRM-";
var _ = "OhTS-UkTNN4-";
var _ = "YoJUCx698b4-";
var _ = "iO5F0I6Jcho-";
var _ = "YEq-vD58xcY-";
var _ = "SMis5E-wVqQ-";
var _ = _(_(), 1);
function _(_) {
  let { preview: _, bActive: _, onSelect: _, ref: _ } = _;
  switch (_.preview_type) {
    case 0:
      {
        let _ = `${_.url}${_(160, 90)}`;
        return (0, _.jsx)(_, {
          ref: _,
          className: (0, _.default)(_, _ && _),
          onActivate: _,
          onMouseEnter: _,
          onFocus: _,
          children: (0, _.jsx)(_, {
            src: _,
            alt: _.filename ?? "",
            loading: "lazy",
          }),
        });
      }
      break;
    case 1:
      {
        let _ = `https://img.youtube.com/vi/${_.youtubevideoid}/default.jpg`;
        return (0, _.jsxs)(_, {
          ref: _,
          className: (0, _.default)(_, _ && _),
          onActivate: _,
          onMouseEnter: _,
          onFocus: _,
          children: [
            (0, _.jsx)(_, {
              src: _,
              className: _,
              alt: _.filename ?? "",
              loading: "lazy",
            }),
            (0, _.jsx)(_, {
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        });
      }
      break;
  }
  return null;
}
function _(_) {
  let { preview: _, width: _, height: _, bAutoPlay: _, nStartSeconds: _ } = _,
    _ =
      "https://www.youtube-nocookie.com/embed/" +
      _.youtubevideoid +
      "?fs=1&modestbranding=1&rel=0&playsinline=1" +
      (_ ? "&autoplay=1" : "") +
      (_ ? "&t=" + _ : "");
  return (0, _.jsx)("div", {
    className: _,
    children: (0, _.jsx)("iframe", {
      className: _,
      title: _.youtubevideoid,
      src: _,
      allowFullScreen: !0,
      width: _,
      height: _,
      frameBorder: 0,
    }),
  });
}
function _(_) {
  let { preview: _ } = _,
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      _(!1);
    }, [_.url]),
    (0, _.useEffect)(() => {
      _.current?.complete &&
        (_(),
        (_.current.naturalHeight == 0 || _.current.naturalWidth == 0) && _());
    }, [_, _]),
    (0, _.jsxs)(_.Fragment, {
      children: [
        (0, _.jsx)(_, {
          ref: _,
          className: (0, _.default)(_, !_ && _),
          src: _.url,
          alt: _.filename ?? "",
          onLoad: _,
          onError: _,
        }),
        !_ &&
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)(_, {
              size: "5",
            }),
          }),
      ],
    })
  );
}
function _(_) {
  let {
      details: _,
      preview: _,
      previewIndex: _,
      numPreviews: _,
      onPrevious: _,
      onNext: _,
      enlargedImageWidth: _,
    } = _,
    _ = (0, _.useContext)(_),
    _ = _(_, _.file_type),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useCallback)(() => {
      _(!0);
    }, []),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _.current?.complete &&
      (_(),
      (_.current.naturalHeight == 0 || _.current.naturalWidth == 0) && _());
  }, [_, _]),
    (0, _.useEffect)(() => {
      _.preview_type == 0
        ? _.current?.complete
          ? _()
          : (_(!1), _(!1))
        : _(!0);
    }, [_, _.preview_type, _.url]);
  let _ = _ ?? 740,
    _ = _ / _,
    _ = `${_.url}${_(_, _, !1)}`,
    _ = () => {
      _(!0);
    },
    _,
    _;
  switch (_.preview_type) {
    case 0:
      (_ = (0, _.jsx)(_, {
        ref: _,
        src: _,
        alt: _.filename ?? _,
        onLoad: _,
        onError: _,
      })),
        (_ = (0, _.jsx)(_, {
          preview: _,
        }));
      break;
    case 1:
      (_ = (0, _.jsx)(_, {
        preview: _,
        width: 288,
        height: 116,
      })),
        (_ = (0, _.jsx)(_, {
          preview: _,
          width: 1280,
          height: 720,
        }));
      break;
  }
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        className: (0, _.default)(_, !_ && _),
        onActivate: _,
        children: [
          _,
          !_ &&
            (0, _.jsx)("div", {
              className: _,
              children: (0, _.jsx)(_, {
                size: "5",
              }),
            }),
        ],
      }),
      _ &&
        (0, _.jsxs)(_, {
          className: (0, _.default)(_, !_ && _),
          onClose: () => _(!1),
          children: [
            _,
            (0, _.jsx)(_, {
              className: _,
              justify: "between",
              children: (0, _.jsxs)(_, {
                className: _,
                justify: "between",
                children: [
                  (0, _.jsx)(_, {
                    disabled: _ == null,
                    onClick: _,
                    icon: !0,
                    variant: "ghost",
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsxs)("div", {
                    children: [_(_ + 1), " / ", _(_)],
                  }),
                  (0, _.jsx)(_, {
                    disabled: _ == null,
                    onClick: _,
                    icon: !0,
                    variant: "ghost",
                    children: (0, _.jsx)(_, {}),
                  }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { details: _, className: _, enlargedImageWidth: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useMemo)(() => {
      let _ = {
          previewid: "",
          url: _.preview_url,
          filename: _.title,
          preview_type: 0,
        },
        _ = [...(_.previews ?? [])];
      return (
        _.url?.length != 0 && _.unshift(_),
        (_ =
          _.filter((_) => _.preview_type == 0 || _.preview_type == 1).sort(
            (_, _) => {
              if (_.preview_type != _.preview_type) {
                if (_.preview_type == 1) return -1;
                if (_.preview_type == 1) return 1;
              }
              return (_.sortorder ?? 0) - (_.sortorder ?? 0);
            },
          ) ?? []),
        _
      );
    }, [_.preview_url, _.title, _.previews]),
    _ = _.findIndex((_) => _.preview_type == 0),
    [_, _] = (0, _.useState)(_ >= 0 ? _ : 0),
    _ = (0, _.useRef)([]);
  (0, _.useEffect)(() => {
    let _ = _.current[_];
    _ &&
      _.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
  }, [_]);
  let [_, _] = (0, _.useState)(!1),
    _ = _(
      (0, _.useCallback)((_) => {
        _(_.isIntersecting);
      }, []),
      {
        rootMargin: "0px",
      },
    );
  (0, _.useEffect)(() => {
    if (_ || !_) return;
    let _ = setInterval(() => {
      let _ = _[_];
      if (_.preview_type != 0) return;
      let _ = _ === _.length - 1 ? 0 : _ + 1;
      for (_ = _[_]; _.preview_type != 0 && _ != _; )
        (_ = _ === _.length - 1 ? 0 : _ + 1), (_ = _[_]);
      _(_);
    }, 3e3);
    return () => clearInterval(_);
  }, [_, _, _, _]);
  let _ = () => {
      _(Math.max(_ - 1, 0));
    },
    _ = () => {
      _(Math.min(_ + 1, _.length - 1));
    },
    _ = (0, _.useId)();
  return _.length == 0
    ? (0, _.jsx)(_, {
        className: (0, _.default)(_, _),
        direction: "column",
        gap: "2",
        children: (0, _.jsx)(_, {
          details: _,
        }),
      })
    : (0, _.jsxs)(_, {
        className: (0, _.default)(_, _),
        direction: "column",
        gap: "2",
        ref: _,
        onMouseEnter: () => _(!0),
        onMouseLeave: () => _(!1),
        onFocus: () => _(!0),
        onBlur: () => _(!1),
        children: [
          (0, _.jsx)(_, {
            details: _,
            enlargedImageWidth: _,
            preview: _[_],
            previewIndex: _,
            numPreviews: _.length,
            onPrevious: _ != 0 ? _ : void 0,
            onNext: _ < _.length - 1 ? _ : void 0,
          }),
          _.length > 1 &&
            (0, _.jsx)(_, {
              className: _,
              gap: "2",
              marginBottom: "1",
              flexShrink: "0",
              children: _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    ref: (_) => {
                      _.current[_] = _;
                    },
                    preview: _,
                    bActive: _ == _,
                    onSelect: () => _(_),
                  },
                  _.previewid,
                ),
              ),
            }),
        ],
      });
}
var _ = "dXfyqsB-vXE-";
var _ = "_0VHtbDKeiZQ-";
var _ = "DXFx1cMTpLg-";
var _ = "zib7qOmJRh0-";
var _ = "ISp3Ed1YdPo-";
var _ = "MsQPxA-KNSI-";
var _ = "_7dKjFDqIq5c-";
var _ = "Ad4s9BGMIw8-";
var _ = "hOkSRJysG5U-";
var _ = "-jBnhBU0jc8-";
var _ = "pL7QhTreKb8-";
var _ = "m93XimXPi3Y-";
var _ = "jEleAlNckAE-";
var _ = "_8ay4GMtzGyI-";
var _ = "-DzwALZGdYA-";
var _ = "Djg90CGq7tw-";
var _ = "aL3e4--uJcI-";
var _ = "H-gEfGwK6QY-";
var _ = "TvZfSUtuiYk-";
var _ = "UlJ1J6qrkfE-";
var _ = "N-9KoUj08d0-";
var _ = "lf3HhUuuyDk-";
var _ = "wnyPsmhiXKE-";
var _ = "DLfm6D5MF3w-";
var _ = "MVf18zNZzjw-";
var _ = _(_(), 1);
function _(_) {
  return _({
    queryKey: ["GetUGCContributorData", _],
    queryFn: async () =>
      await _("/workshop/actions", "GetUGCContributorData", _, _.LANGUAGE),
    staleTime: 3600 * 1e3,
  });
}
function _(_) {
  let { contributor: _, appid: _ } = _,
    _ = _(_.steamid);
  if (!_.data) return;
  let _ = _(_.data) + `/myworkshopfiles/?appid=${_}`,
    _ = _.data?.public_data?.persona_name ?? "";
  return (0, _.jsx)(_, {
    toolTipContent: _,
    direction: "right",
    nDelayShowMS: 250,
    children: (0, _.jsx)(_, {
      _: _,
      children: (0, _.jsx)(_, {
        playerLinkDetails: _.data,
        size: "X-Small",
        alt: _,
      }),
    }),
  });
}
function _(_) {
  let { details: _ } = _,
    _ = _.publishedfileid,
    _ = _(_);
  if (!_.data) return null;
  let _ = {
    steamid: _.creator ?? "",
    split: 100,
    timeaccepted: _.time_created ?? 0,
  };
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.Localize("#Workshop_ItemDetails_CreatedBy"),
      _.data.contributors.length != 0 &&
        _.data.contributors.map((_) =>
          (0, _.jsx)(
            _,
            {
              contributor: _,
              appid: _.consumer_appid,
            },
            _.steamid,
          ),
        ),
      _.data.contributors.length == 0 &&
        (0, _.jsx)(_, {
          contributor: _,
          appid: _.consumer_appid,
        }),
    ],
  });
}
function _(_) {
  let { details: _, onSelectTag: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _(_.tags ?? [], _.file_type),
    _ = (_) => {
      _.tag &&
        (_(),
        _({
          required_tags: [_.tag],
          excluded_tags: [],
        }));
    };
  return _.length == 0
    ? null
    : (0, _.jsxs)(_, {
        direction: "column",
        paddingTop: "2",
        children: [
          (0, _.jsx)(_, {
            size: "4",
            children: _.Localize("#Workshop_ItemDetails_Tags_Title"),
          }),
          (0, _.jsx)(_, {
            className: _,
            gap: "1",
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  size: "1",
                  color: "dull",
                  onClick: () => _(_),
                  children: _.display_name ?? _.tag,
                },
                _.tag,
              ),
            ),
          }),
        ],
      });
}
function _(_) {
  let { details: _ } = _,
    {
      numChildItems: _,
      numChildCollections: _,
      rgChildIDs: _,
      rgChildCollectionIDs: _,
    } = _(_),
    _ = 102,
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => {
          let _ = Math.floor(_.contentRect.width / _) - 1;
          _(_);
        },
        [_],
      ),
    ),
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => {
          let _ = Math.floor(_.contentRect.width / _) - 1;
          _(_);
        },
        [_],
      ),
    ),
    _ = _.LocalizePlural("#Workshop_Collection_NumChildItems", _, _(_));
  _.file_type == 0 &&
    (_ = _.Localize("#Workshop_ItemDetails_ItemDependencies"));
  let _ = _.LocalizePlural("#Workshop_Collection_NumChildCollections", _, _(_));
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.length != 0 &&
        (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)("div", {
                children: _,
              }),
              (0, _.jsxs)(_, {
                className: _,
                direction: "row",
                gap: "1",
                ref: _,
                children: [
                  _.slice(0, _).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        publishedfileid: _,
                        className: _,
                        imageClassName: _,
                        forcedWidth: 100,
                      },
                      _,
                    ),
                  ),
                  _ < _ &&
                    (0, _.jsx)("div", {
                      className: _,
                      children: _.Localize(
                        "#Workshop_Collection_ViewMore",
                        _(_ - _),
                      ),
                    }),
                ],
              }),
            ],
          }),
        }),
      _.length != 0 &&
        (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)("div", {
                children: _,
              }),
              (0, _.jsxs)(_, {
                className: _,
                direction: "row",
                gap: "1",
                ref: _,
                children: [
                  _.slice(0, _).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        publishedfileid: _,
                        className: _,
                        imageClassName: _,
                        forcedWidth: 100,
                      },
                      _,
                    ),
                  ),
                  _ < _ &&
                    (0, _.jsx)("div", {
                      className: _,
                      children: _.Localize(
                        "#Workshop_Collection_ViewMore",
                        _(_ - _),
                      ),
                    }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function _(_) {
  let { appid: _ } = _,
    _ = _(`${_.STORE_BASE_URL}app/${_}/`),
    { data: _ } = _({
      appid: _,
    }),
    { data: _ } = _({
      appid: _,
    });
  if (!_ || !_) return null;
  let _ = _(_, "small_capsule");
  return (0, _.jsx)(_, {
    _: _,
    children: (0, _.jsx)(_, {
      src: _,
      alt: _.name ?? "",
    }),
  });
}
function _(_) {
  return _({
    queryKey: ["GetUGCAppRelationships", _],
    queryFn: async () =>
      await _("/workshop/actions", "GetUGCAppRelationships", _),
    staleTime: 3600 * 1e3,
  });
}
function _(_) {
  let { details: _ } = _,
    _ = _(_.publishedfileid),
    _ = (0, _.useMemo)(
      () => _.data?.filter((_) => _.relationship == 1) ?? [],
      [_.data],
    );
  return _.length == 0
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(_, {
          controller: "sharedfiles",
          method: "filedetails",
          children: [
            (0, _.jsx)("div", {
              children: _.Localize("#Workshop_ItemDetails_RequiredDLC_Desc"),
            }),
            (0, _.jsx)(_, {
              className: _,
              direction: "row",
              gap: "1",
              wrap: "wrap",
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _.appid ?? _,
                  },
                  _.appid,
                ),
              ),
            }),
          ],
        }),
      });
}
function _(_) {
  let { details: _, onClose: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _.publishedfileid,
    _ = _(_),
    _ = _(_.file_type),
    _ = _({
      include_images: !1,
    }),
    _ = (0, _.useMemo)(() => {
      if (!_.data?.file_description) return "";
      let _ = 500;
      if (_.data.file_description.length > _) {
        let _ = [..._.data.file_description].slice(0, _).join("") + "...";
        return _.ParseBBCode(_, null);
      }
      return _.data.file_description;
    }, [_.data?.file_description, _]),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)((_) => {
      let _ = _.target.scrollHeight > _.target.clientHeight;
      _(_);
    }, []),
    _ = _(_),
    _ = () => {
      _({
        section: "readytouseitems",
        childpublishedfileid: _.publishedfileid,
      }),
        _();
    };
  return (0, _.jsxs)(_, {
    className: _,
    direction: "column",
    children: [
      (0, _.jsx)(_, {
        className: _,
        onActivate: _,
        children: (0, _.jsx)(_, {}),
      }),
      _.data &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_, {
              className: _,
              direction: {
                initial: "column",
                _: "row",
              },
              gap: "4",
              children: [
                _.data &&
                  _.file_type != 2 &&
                  (0, _.jsx)(_, {
                    details: _.data,
                    className: _,
                  }),
                (0, _.jsxs)(_, {
                  className: _,
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, _.jsxs)(_, {
                      className: _,
                      justify: "between",
                      children: [
                        (0, _.jsx)(_, {
                          size: {
                            initial: "4",
                            _: "5",
                            _: "6",
                          },
                          children: (0, _.jsx)(_, {
                            _: _(_.publishedfileid),
                            children: _.title,
                          }),
                        }),
                        _.file_type != 1 &&
                          (0, _.jsxs)(_, {
                            direction: "column",
                            align: "end",
                            className: _,
                            children: [
                              (0, _.jsx)(_, {
                                details: _,
                                className: _,
                              }),
                              _.star_rating == -1 &&
                                _.Localize(
                                  "#Workshop_ItemDetails_NotEnoughRatings",
                                ),
                              (0, _.jsx)(_, {
                                size: {
                                  initial: "3",
                                  _: "4",
                                },
                                children:
                                  (_.star_rating ?? 0) > -1 &&
                                  _.LocalizePlural(
                                    "#Workshop_ItemDetails_NumRatings",
                                    _.total_votes ?? 0,
                                    _(_.total_votes ?? 0),
                                  ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      className: _,
                      gap: "1",
                      children: (0, _.jsx)(_, {
                        details: _,
                      }),
                    }),
                    (0, _.jsxs)(_, {
                      direction: "row",
                      gap: "4",
                      children: [
                        (0, _.jsxs)(_, {
                          direction: "column",
                          children: [
                            (0, _.jsx)(_, {
                              children: _.Localize(
                                "#Workshop_ItemDetails_TimestampCreated",
                                _(_.time_created ?? 0),
                                _(_.time_created ?? 0),
                              ),
                            }),
                            _.time_created != _.time_updated &&
                              (0, _.jsx)(_, {
                                children: _.Localize(
                                  "#Workshop_ItemDetails_TimestampUpdated",
                                  _(_.time_updated ?? 0),
                                  _(_.time_updated ?? 0),
                                ),
                              }),
                            _.file_type == 0 &&
                              _.file_size &&
                              (0, _.jsx)(_, {
                                children: _.Localize(
                                  "#Workshop_ItemDetails_FileSize",
                                  _(_.file_size, {
                                    nDigitsAfterDecimal: 3,
                                  }),
                                ),
                              }),
                          ],
                        }),
                        (0, _.jsxs)(_, {
                          direction: "column",
                          children: [
                            _.views != 0 &&
                              (0, _.jsx)(_, {
                                children: _.Localize(
                                  "#Workshop_ItemDetails_Stats_UniqueVisitors",
                                  _(_.views ?? 0),
                                ),
                              }),
                            _.subscriptions != 0 &&
                              (0, _.jsx)(_, {
                                children: _.Localize(
                                  "#Workshop_ItemDetails_Stats_CurrentSubscribers",
                                  _(_.subscriptions ?? 0),
                                ),
                              }),
                            _.favorited != 0 &&
                              (0, _.jsx)(_, {
                                children: _.Localize(
                                  "#Workshop_ItemDetails_Stats_CurrentFavorites",
                                  _(_.favorited ?? 0),
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      details: _,
                      onSelectTag: _,
                    }),
                    (0, _.jsxs)(_, {
                      gap: "1",
                      direction: "column",
                      paddingTop: "2",
                      className: (0, _.default)(_, _ && _),
                      ref: _,
                      children: [
                        _ &&
                          (0, _.jsx)(_, {
                            size: "4",
                            children: _.Localize(
                              "#Workshop_ItemDetails_Description_Title",
                            ),
                          }),
                        (0, _.jsx)(_, {
                          size: {
                            initial: "3",
                            _: "4",
                          },
                          children: _,
                        }),
                      ],
                    }),
                    (0, _.jsxs)(_, {
                      gap: "1",
                      direction: "column",
                      paddingTop: "1",
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          details: _.data ?? _,
                        }),
                        (0, _.jsx)(_, {
                          details: _.data ?? _,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              className: _,
              direction: "row",
              gap: "3",
              children: [
                (0, _.jsx)(_, {
                  details: _,
                  onClick: _,
                }),
                (0, _.jsxs)(_, {
                  direction: "row",
                  gap: "1",
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        details: _.data ?? _,
                        size: "2",
                      }),
                    (0, _.jsx)(_, {
                      details: _,
                      size: "2",
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  direction: "row",
                  gap: "1",
                  children: (0, _.jsx)(_, {
                    details: _,
                    size: "2",
                  }),
                }),
                (0, _.jsx)(_, {
                  details: _,
                  size: "2",
                }),
                (0, _.jsx)(_, {
                  details: _,
                  size: "2",
                }),
                (0, _.jsx)(_, {
                  details: _.data,
                  size: "2",
                  className: _,
                  classNameReaction: _,
                }),
              ],
            }),
          ],
        }),
      !_.data &&
        (0, _.jsx)(_, {
          justify: "center",
          align: "center",
          flexGrow: "1",
          children: (0, _.jsx)(_, {
            size: "5",
          }),
        }),
    ],
  });
}
function _(_) {
  let { rgDetails: _ } = _,
    { quickViewIndex: _, setQuickViewIndex: _, closeQuickView: _ } = _();
  if (_ < 0) return null;
  let _ = _[_];
  return (0, _.jsxs)(_.Root, {
    onClose: _,
    className: _,
    children: [
      (0, _.jsx)(_, {
        className: _,
        onActivate: _,
      }),
      (0, _.jsxs)(_, {
        className: _,
        gap: "5",
        direction: "row",
        children: [
          (0, _.jsx)(_, {
            color: "accent",
            variant: "ghost",
            disabled: _ == 0,
            onClick: () => _(_ - 1),
            size: "3",
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(
            _,
            {
              details: _,
              onClose: _,
            },
            _.publishedfileid,
          ),
          (0, _.jsx)(_, {
            color: "accent",
            variant: "ghost",
            disabled: _ == _.length - 1,
            onClick: () => _(_ + 1),
            size: "3",
            children: (0, _.jsx)(_, {}),
          }),
        ],
      }),
    ],
  });
}
var _ = _(_(), 1);
var _ = "oFlCqDkvcYo-";
var _ = "QgLhpKCelQA-";
var _ = "heK9iNtr1G8-";
var _ = _(_(), 1),
  _ = [
    "#Workshop_SearchTarget_All",
    "#Workshop_SearchTarget_Title",
    "#Workshop_SearchTarget_Description",
  ];
function _(_) {
  let { appName: _, bUseDebouncedValue: _ } = _,
    {
      onBrowseHandler: _,
      searchText: _,
      setSearchText: _,
      searchTextTarget: _,
      setSearchTextTarget: _,
    } = _(),
    _ = (0, _.useRef)(!1),
    _ = _.Localize("#Workshop_Menu_Search", _),
    _ = (_) => {
      _.preventDefault(),
        _({
          search_text: _,
        });
    },
    _ = (0, _.useCallback)(
      (_) => {
        _(_);
      },
      [_],
    ),
    _ = (0, _.useCallback)(() => {
      _({
        browse_sort: "toprated",
        search_text: "",
      });
    }, [_]),
    _ = (0, _.useCallback)(() => {
      _.current = !1;
    }, []),
    _ = (0, _.useCallback)(() => {
      _.current = !0;
    }, []),
    _ = _(_.trim(), {
      nTimeoutMS: 1e3,
      nTimeoutExtensionMS: 500,
      nMaxTimeoutExtensions: 100,
    });
  (0, _.useEffect)(() => {
    _.current &&
      _ &&
      (_.length != 0
        ? _({
            browse_sort: "textsearch",
            search_text: _,
          })
        : _({
            search_text: _,
          }));
  }, [_, _]);
  let _ = [0, 1, 2],
    _ = (_) => {
      _(_),
        _({
          search_text_target: _,
          page: 1,
        });
    },
    _ = (_) => _.Localize(_[_]),
    _ = _(),
    _ = ["left", "right", "collapsed"],
    _ = (_) => {
      _.setPreferences({
        filters_column: _,
      });
    },
    _ = (_) => {
      switch (_) {
        case "left":
          return _.Localize("#Workshop_FiltersMenu_State_Left");
        case "right":
          return _.Localize("#Workshop_FiltersMenu_State_Right");
        case "collapsed":
          return _.Localize("#Workshop_FiltersMenu_State_Collapsed");
      }
    },
    _ = (_) => {
      _.setPreferences(_);
    },
    [_, _] = (0, _.useState)(!1),
    _ = _.Localize("#Workshop_Search_Help_Example_Red"),
    _ = _.Localize("#Workshop_Search_Help_Example_Blue"),
    _ = _.Localize("#Workshop_Search_Help_Example_Green"),
    _ = _.Localize("#Workshop_Search_Help_Example_Room");
  return (0, _.jsxs)(_, {
    className: _,
    gap: "1",
    children: [
      (0, _.jsx)("form", {
        onSubmit: _,
        children: (0, _.jsx)(
          _,
          {
            name: "SearchInput",
            placeholder: _,
            value: _,
            onTextChange: _,
            onTextClear: _,
            onFocus: _,
            onBlur: _,
            maxLength: 64,
            clearable: !0,
          },
          "SearchText",
        ),
      }),
      (0, _.jsxs)(_.Root, {
        open: _,
        onOpenChange: _,
        interactions: {
          click: !0,
          hover: !1,
        },
        placement: {
          initial: "bottom-start",
          flip: !1,
        },
        children: [
          (0, _.jsx)(_.Anchor, {
            children: (0, _.jsx)(_, {
              onActivate: () => _(!0),
              className: _,
              children: (0, _.jsx)(_, {}),
            }),
          }),
          (0, _.jsx)(_.Positioner, {
            children: (0, _.jsx)(_.FocusManager, {
              children: (0, _.jsx)("div", {
                children: (0, _.jsx)(_, {
                  className: _,
                  gap: "2",
                  direction: "column",
                  children: (0, _.jsxs)(_, {
                    gap: "1",
                    direction: "column",
                    children: [
                      (0, _.jsx)(_, {
                        size: "4",
                        children: _.Localize(
                          "#Workshop_SearchTarget_MenuTitle",
                        ),
                      }),
                      (0, _.jsx)(_, {
                        options: _,
                        value: _,
                        onValueChange: _,
                        getOptionLabel: _,
                      }),
                      (0, _.jsxs)(_, {
                        marginTop: "3",
                        direction: "column",
                        children: [
                          (0, _.jsx)(_, {
                            size: "4",
                            children: _.LocalizeReact(
                              "#Workshop_Search_Help",
                              (0, _.jsx)("code", {
                                children: "AND",
                              }),
                              (0, _.jsx)("code", {
                                children: "OR",
                              }),
                              (0, _.jsx)("code", {
                                children: "NOT",
                              }),
                              (0, _.jsx)("code", {
                                children: "+",
                              }),
                              (0, _.jsx)("code", {
                                children: "-",
                              }),
                            ),
                          }),
                          (0, _.jsxs)("ul", {
                            children: [
                              (0, _.jsx)("li", {
                                children: _.LocalizeReact(
                                  "#Workshop_Search_Help_Example1",
                                  (0, _.jsxs)("code", {
                                    children: [_, " AND ", _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)("li", {
                                children: _.LocalizeReact(
                                  "#Workshop_Search_Help_Example2",
                                  (0, _.jsxs)("code", {
                                    children: [_, " OR ", _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)("li", {
                                children: _.LocalizeReact(
                                  "#Workshop_Search_Help_Example3",
                                  (0, _.jsxs)("code", {
                                    children: [_, " -", _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                            ],
                          }),
                          (0, _.jsx)(_, {
                            size: "4",
                            children: _.Localize(
                              "#Workshop_Search_Help_Advanced",
                            ),
                          }),
                          (0, _.jsxs)("ul", {
                            children: [
                              (0, _.jsx)("li", {
                                children: _.LocalizeReact(
                                  "#Workshop_Search_Help_AdvancedExample1",
                                  (0, _.jsxs)("code", {
                                    children: ["(", _, " OR ", _, ") AND ", _],
                                  }),
                                  _,
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)("li", {
                                children: _.LocalizeReact(
                                  "#Workshop_Search_Help_AdvancedExample2",
                                  (0, _.jsxs)("code", {
                                    children: [
                                      "(",
                                      _,
                                      " OR ",
                                      _,
                                      ") AND ",
                                      _,
                                      " -",
                                      _,
                                    ],
                                  }),
                                  _,
                                  _,
                                  _,
                                  _,
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
var _ = _(_(), 1),
  _ = _({
    Component: _,
    Actions: {
      Browse: _("OTEITVBA", "Browse"),
    },
  }),
  _ = (0, _.createContext)(void 0),
  _ = (_) => {
    let { results: _, children: _ } = _,
      [_, _] = (0, _.useState)(-1),
      _ = (0, _.useCallback)(
        (_) => {
          let _ = _.findIndex((_) => _.publishedfileid == _);
          _ != -1 && _(_);
        },
        [_],
      ),
      _ = (0, _.useMemo)(
        () => ({
          quickViewIndex: _,
          closeQuickView: () => _(-1),
          setQuickViewIndex: _,
          setQuickViewItem: _,
        }),
        [_, _],
      );
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: _,
    });
  },
  _ = () => (0, _.useContext)(_);
function _(_) {
  let { app: _, serverQuery: _ } = _.useLoaderData(),
    [_, _] = (0, _.useState)(() => _()?.workshopBrowseQuery ?? _),
    { setOnBrowseHandler: _, onSearchTextUpdatedExternally: _ } = _(),
    { preferences: _ } = _(),
    _ = _(),
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null),
    _ = _(
      (0, _.useCallback)((_) => {}, []),
      {
        threshold: [0],
      },
    ),
    _ = _(_, _),
    _ = (0, _.useCallback)(
      (_) => {
        _.current &&
          (_ || _ == "sm" || _ == "initial") &&
          _.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
          });
      },
      [_],
    ),
    _ = (0, _.useCallback)((_) => {
      let _ = new URL(window.location.href);
      (_.search = _(_).toString()),
        _(
          (_) => ({
            ..._,
            workshopBrowseQuery: _,
          }),
          _,
        ),
        _(_);
    }, []);
  _(
    (0, _.useCallback)(() => {
      let _ = _();
      _?.workshopBrowseQuery && _(_.workshopBrowseQuery);
    }, []),
  ),
    (0, _.useEffect)(() => {
      let _ = (_) => {
        let _ = {
          ..._,
          ..._,
        };
        switch (
          (_.childpublishedfileid
            ? ((_.page = 1),
              (_.special_filter = 0),
              (_.search_text = void 0),
              (_.required_tags = void 0),
              (_.excluded_tags = void 0),
              (_.date_range_created = void 0),
              (_.date_range_updated = void 0),
              (_.appids_required_for_use = void 0),
              (_.excluded_appids_required_for_use = void 0),
              _(""))
            : _.section
              ? ((_.page = 1),
                (_.special_filter = _.special_filter),
                (_.required_tags = _.required_tags),
                (_.excluded_tags = _.excluded_tags))
              : (_.search_text && _.search_text != _.search_text) ||
                  (_.search_text_target !== void 0 &&
                    _.search_text_target != _.search_text_target) ||
                  _.browse_sort
                ? (_.page = 1)
                : _.special_filter == 5 && (_.browse_sort = "reported"),
          (_.omitted_flags = void 0),
          _.browse_sort)
        ) {
          case "textsearch":
            break;
          case "accepted":
            _.special_filter != 1 && (_.browse_sort = "mostrecent");
            break;
          case "num_parent_items":
            _.special_filter != 6 && (_.browse_sort = "mostrecent");
            break;
          case "num_parent_collections":
            _.special_filter != 7 && (_.browse_sort = "mostrecent");
            break;
          case "reported":
            _.special_filter != 5 && (_.browse_sort = "mostrecent");
            break;
          default:
            (_.section == "mtxitems" || _.section == "collections") &&
              (_.omitted_flags = ["workshopaccepted"]);
            break;
        }
        _.special_filter == 1 && (_.omitted_flags = void 0),
          !_.search_text?.length &&
            _.browse_sort == "textsearch" &&
            (_.browse_sort = "trend"),
          _(_),
          _(!1);
      };
      return _(() => _), () => _(() => {});
    }, [_, _, _, _, _]);
  let _ = (0, _.useContext)(_),
    _ = _(_, _.Actions.Browse),
    _ = _.isSuccess
      ? _.data
      : {
          results: [],
          current_page: 1,
          total_pages: 0,
          total_count: 0,
          next_cursor: "",
        },
    _ = _(_.section ?? "readytouseitems", _),
    _;
  switch (_.section) {
    case "mtxitems":
      _ = _.Localize("#Workshop_Browsing_Mtx_Desc");
      break;
    case "readytouseitems":
      _ = _.Localize("#Workshop_Browsing_ReadyToUse_Desc");
      break;
    case "merchandise":
      _ = _.Localize("#Workshop_Browsing_Merchandise_Desc");
      break;
  }
  let _ = _.isLoading || _.isPlaceholderData;
  return (0, _.jsxs)(_, {
    minHeight: "calc( 75vh + 100px )",
    direction: "column",
    align: "center",
    children: [
      (0, _.jsx)("div", {
        ref: _,
      }),
      (0, _.jsx)("div", {
        className: (0, _.default)(_, _ && _),
        children: (0, _.jsxs)(_, {
          children: [
            (0, _.jsxs)(_, {
              direction: {
                initial: "column",
                _: "row",
              },
              align: "start",
              justify: "between",
              children: [
                (0, _.jsx)(_, {
                  size: {
                    initial: "4",
                    _: "5",
                  },
                  children: (0, _.jsxs)(_, {
                    gap: "3",
                    align: "center",
                    wrap: "wrap",
                    marginBottom: "1",
                    direction: "row",
                    children: [
                      _.Localize("#Workshop_Browsing", _),
                      _ &&
                        (0, _.jsx)("div", {
                          className: _,
                          children: _,
                        }),
                      _ &&
                        (0, _.jsx)(_, {
                          size: {
                            initial: "1",
                            _: "2",
                          },
                        }),
                    ],
                  }),
                }),
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
              ],
            }),
            (0, _.jsx)(_, {
              browseQuery: _,
              results: _,
            }),
            (_.filters_column == "left" || _.filters_column == "collapsed") &&
              (0, _.jsxs)(_, {
                justify: "between",
                wrap: "wrap",
                gap: "1",
                direction: "row",
                children: [
                  (0, _.jsx)(_, {
                    appName: _.name,
                    bUseDebouncedValue: !0,
                  }),
                  (0, _.jsx)(_, {
                    browseQuery: _,
                  }),
                  (0, _.jsx)(_, {
                    browseQuery: _,
                  }),
                ],
              }),
            _.filters_column == "right" &&
              (0, _.jsxs)(_, {
                justify: "end",
                wrap: "wrap",
                gap: "1",
                direction: "row",
                children: [
                  (0, _.jsx)(_, {
                    browseQuery: _,
                  }),
                  (0, _.jsx)(_, {
                    browseQuery: _,
                  }),
                  (0, _.jsx)(_, {
                    appName: _.name,
                    bUseDebouncedValue: !0,
                  }),
                ],
              }),
          ],
        }),
      }),
      (0, _.jsxs)(_, {
        direction: "row",
        gap: "5",
        width: "100%",
        marginTop: "3",
        children: [
          _.filters_column == "left" &&
            (0, _.jsx)(_, {
              browseQuery: _,
            }),
          (0, _.jsxs)(_, {
            results: _.results,
            children: [
              _.section == "collections" &&
                (0, _.jsx)(_, {
                  className: (0, _.default)(_, _ && _),
                  "flow-children": "grid",
                  children:
                    _.isSuccess &&
                    _.data.results.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          details: _,
                        },
                        _.publishedfileid,
                      ),
                    ),
                }),
              _.section !== "collections" &&
                (0, _.jsx)(_, {
                  className: (0, _.default)(_, _ && _),
                  "flow-children": "grid",
                  children:
                    _.isSuccess &&
                    _.data.results.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          details: _,
                        },
                        _.publishedfileid,
                      ),
                    ),
                }),
              (0, _.jsx)(_, {
                rgDetails: _.results,
              }),
            ],
          }),
          _.filters_column == "right" &&
            (0, _.jsx)(_, {
              browseQuery: _,
            }),
        ],
      }),
      (0, _.jsx)(_, {
        bLoading: _,
        browseQuery: _,
        results: _,
        onChangePage: () => _(!0),
      }),
    ],
  });
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _.appid || _;
  return (0, _.jsxs)("div", {
    className: _,
    children: [
      _.section == "collections" &&
        _.bCanCreateCollection &&
        (0, _.jsx)(_, {
          href: _.CreateCollection(_),
          size: "1",
          children: _.Localize("#Workshop_CreateCollection"),
        }),
      _.section == "merchandise" &&
        _.bCanCreateMerchandise &&
        (0, _.jsx)(_, {
          href: _.CreateMerchandise(_),
          size: "1",
          children: _.Localize("#Workshop_CreateMerchandise"),
        }),
      (0, _.jsx)(_, {}),
    ],
  });
}
function _(_) {
  let { onSearchTextUpdatedExternally: _, onBrowseHandler: _ } = _(),
    { search_text: _, search_text_target: _ } = _,
    _ = (0, _.useCallback)(() => {
      _({
        search_text: "",
        page: 1,
      }),
        _("");
    }, [_, _]),
    _ = "#Workshop_SearchResults_SearchText";
  switch (_) {
    case 1:
      _ = "#Workshop_SearchResults_SearchText_TitleOnly";
      break;
    case 2:
      _ = "#Workshop_SearchResults_SearchText_DescriptionOnly";
      break;
  }
  return (0, _.jsxs)(_, {
    onClick: _,
    color: "dull",
    size: "1",
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: _.Localize(_, _),
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    { childpublishedfileid: _, section: _ } = _,
    _ = _(_, (_) => _("/workshop/actions", "GetUGCSummary", _)),
    _ = (0, _.useCallback)(() => {
      _({
        childpublishedfileid: "",
        page: 1,
      });
    }, [_]),
    _ = _.Localize(
      _ == "collections"
        ? "#Workshop_SearchedForChild"
        : "#Workshop_SearchedForRequiredItem",
      _.data?.title ?? "",
    );
  return (0, _.jsxs)(_, {
    onClick: _,
    color: "dull",
    size: "1",
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: _,
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { special_filter: _, section: _ } = _,
    _ = (0, _.useContext)(_),
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useCallback)(() => {
      _({
        special_filter: void 0,
        page: 1,
      });
    }, [_]);
  return (0, _.jsxs)(_, {
    onClick: _,
    color: "dull",
    size: "1",
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: _(_, _, _),
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    _ = (0, _.useCallback)(() => {
      _({
        admin_view: !1,
        page: 1,
      });
    }, [_]);
  return (0, _.jsxs)(_, {
    onClick: _,
    color: "red",
    size: "1",
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: _.Localize("#Workshop_Admin_View"),
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    {
      category: _,
      tag: _,
      bRequired: _,
      rgRequiredTags: _,
      rgExcludedTags: _,
    } = _,
    _ = (0, _.useCallback)(() => {
      if (_) {
        let _ = _.filter((_) => _ !== _.name);
        _({
          required_tags: _,
          page: 1,
        });
      } else {
        let _ = _.filter((_) => _ !== _.name);
        _({
          excluded_tags: _,
          page: 1,
        });
      }
    }, [_, _, _, _.name, _]),
    _ =
      _.length != 0
        ? _.Localize("#Workshop_SearchResults_Tag", _, _.display_name ?? "")
        : _.display_name;
  return (0, _.jsx)("div", {
    className: _,
    children: (0, _.jsxs)(_, {
      onClick: _,
      color: "dull",
      size: "1",
      children: [
        !_ &&
          (0, _.jsx)(_, {
            className: (0, _.default)(_, _),
          }),
        _ &&
          (0, _.jsx)(_, {
            className: (0, _.default)(_, _),
          }),
        (0, _.jsx)("div", {
          className: _,
          children: _,
        }),
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    }),
  });
}
function _(_, _) {
  let _ = _.declared_tags;
  switch (_) {
    case "mtxitems":
      _ = _.mtx_tags;
      break;
    case "readytouseitems":
      _ = _.readytouse_tags;
      break;
    case "collections":
      _ = _.collection_tags;
      break;
    case "videos":
      _ = _.video_tags;
      break;
    case "merchandise":
      _ = _.merch_tags;
      break;
  }
  return _ ?? [];
}
function _(_) {
  let { section: _, rgRequiredTags: _, rgExcludedTags: _ } = _,
    _ = (0, _.useContext)(_);
  if (_.length == 0 && _.length == 0) return null;
  let _ = _(_, _);
  if (!_ || _.length == 0) return null;
  _.visible_admin_tags && _.concat(_.visible_admin_tags);
  let _ = [];
  for (let _ = 0; _ < _.length; ++_) {
    let _ = _[_];
    for (let _ = 0; _ < _.tags.length; ++_) {
      let _ = _.tags[_];
      _.findIndex((_) => _.name == _) != -1 &&
        _.push({
          tag: _,
          category: _.name ?? "",
          bRequired: !0,
        }),
        _.findIndex((_) => _.name == _) != -1 &&
          _.push({
            tag: _,
            category: _.name ?? "",
            bRequired: !1,
          });
    }
  }
  return _.length == 0
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              tag: _.tag,
              category: _.category,
              rgRequiredTags: _,
              rgExcludedTags: _,
              bRequired: _.bRequired,
            },
            _.tag._,
          ),
        ),
      });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    { flag: _, rgRequiredFlags: _ } = _,
    _ = (0, _.useCallback)(() => {
      let _ = _.filter((_) => _ !== _);
      _({
        required_flags: _,
        page: 1,
      });
    }, [_, _, _]),
    _;
  switch (_) {
    case "incompatible":
      _ = _.Localize("#Workshop_SearchResults_Flag_Incompatible");
      break;
    case "workshopaccepted":
      _ = _.Localize("#Workshop_SearchResults_Flag_Accepted");
      break;
  }
  return _
    ? (0, _.jsx)("div", {
        className: _,
        children: (0, _.jsxs)(_, {
          onClick: _,
          color: "dull",
          size: "1",
          children: [
            (0, _.jsx)(_, {
              className: _,
            }),
            _,
            (0, _.jsx)(_, {
              className: _,
            }),
          ],
        }),
      })
    : null;
}
function _(_) {
  let { rgRequiredFlags: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          flag: _,
          rgRequiredFlags: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { key_value: _, rgRequiredKeyValueTags: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useCallback)(() => {
      let _ = _.filter((_) => _ !== _);
      _({
        required_kv_tags: _,
        page: 1,
      });
    }, [_, _, _]),
    _ = _.Localize("#Workshop_SearchResults_KVTag", _.key, _.value);
  return (0, _.jsxs)(_, {
    onClick: _,
    color: "dull",
    size: "1",
    children: [
      _,
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { rgRequiredKeyValueTags: _ } = _;
  return (0, _.jsx)(_.Fragment, {
    children: _.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          key_value: _,
          rgRequiredKeyValueTags: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  let { appid: _, rgRequiredAppIDs: _, rgExcludedRequiredAppIDs: _ } = _,
    { onBrowseHandler: _ } = _(),
    { data: _ } = _({
      appid: _,
    }),
    _ = _.includes(_),
    _ = (0, _.useCallback)(() => {
      let _ = _?.filter((_) => _ !== _),
        _ = _?.filter((_) => _ !== _);
      _({
        appids_required_for_use: _,
        excluded_appids_required_for_use: _,
        page: 1,
      });
    }, [_, _, _, _]);
  if (!_?.name) return null;
  let _ = _.Localize("#Workshop_RequiredDLC_Filter", _?.name ?? _.toString());
  return (0, _.jsxs)(_, {
    onClick: _,
    color: "dull",
    size: "1",
    children: [
      !_ &&
        (0, _.jsx)(_, {
          className: (0, _.default)(_, _),
        }),
      _ &&
        (0, _.jsx)(_, {
          className: (0, _.default)(_, _),
        }),
      (0, _.jsx)("div", {
        className: _,
        children: _,
      }),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
}
function _(_) {
  let { rgRequiredAppIDs: _, rgExcludedRequiredAppIDs: _ } = _,
    { availableRequiredDLC: _ } = _.useLoaderData(),
    _ = _.filter(({ appid: _, count: _ }) => _.includes(_) || _.includes(_));
  return (0, _.jsx)(_.Fragment, {
    children: _.map(({ appid: _, count: _ }) =>
      (0, _.jsx)(
        _,
        {
          appid: _,
          rgRequiredAppIDs: _,
          rgExcludedRequiredAppIDs: _,
        },
        _,
      ),
    ),
  });
}
function _(_, _) {
  return !_ || ((_.timestamp_start || 0) == 0 && (_.timestamp_end || 0) == 0)
    ? null
    : _.timestamp_start != 0 && _.timestamp_end != 0
      ? _.Localize(
          _ + "_Between",
          _(_.timestamp_start || 0, {
            timeZone: "UTC",
          }),
          _(_.timestamp_end || 0, {
            timeZone: "UTC",
          }),
        )
      : _.timestamp_start != 0
        ? _.Localize(
            _ + "_After",
            _(_.timestamp_start || 0, {
              timeZone: "UTC",
            }),
          )
        : _.Localize(
            _ + "_Before",
            _(_.timestamp_end || 0, {
              timeZone: "UTC",
            }),
          );
}
function _(_) {
  let { onBrowseHandler: _, onSearchTextUpdatedExternally: _ } = _();
  return (0, _.jsx)(
    _,
    {
      onClick: () => {
        _({
          special_filter: 0,
          required_flags: [],
          omitted_flags: [],
          required_tags: [],
          excluded_tags: [],
          search_text: "",
          appids_required_for_use: [],
          excluded_appids_required_for_use: [],
          childpublishedfileid: void 0,
          page: 1,
        }),
          _("");
      },
      color: "dull",
      size: "1",
      children: _.Localize("#Workshop_Filters_ClearBtn"),
    },
    "saved_query",
  );
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = _.appid || _,
    [_, _] = (0, _.useState)(!1),
    _ = {
      queryid: "",
      query_name: _.Localize("#Workshop_Saved_Queries_Save_New"),
    },
    [_, _] = (0, _.useState)(_),
    [_, _] = (0, _.useState)(""),
    _ = _(_, (_) => _("/workshop/actions", "SavedWebQueries", _)),
    _ = _(_, (_, _) => _("/workshop/actions", "UpdateWebQuery", _, _)),
    _ = async () => {
      let _ = _(_);
      (_.query_name = _), (_.queryid = _.queryid);
      let _ = await _.mutateAsync(_);
      _(!1);
    },
    _ = (0, _.useCallback)((_) => {
      _(_);
    }, []),
    _ = (_) => {
      _(_);
      let _ = _.query_name ?? "";
      _(_.queryid?.length == 0 ? "" : _);
    },
    _ = _.data ?? [],
    _ = [_, ..._],
    _ = () => {
      _(!1);
    },
    _ = _.Localize("#Workshop_Saved_Queries_Update");
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(
        _,
        {
          onClick: () => _(!0),
          color: "blue",
          size: "1",
          children: _,
        },
        "saved_query",
      ),
      _ &&
        (0, _.jsxs)(_, {
          strTitle: _.Localize("#Workshop_Saved_Queries_Update"),
          onClose: _,
          children: [
            (0, _.jsxs)(_, {
              maxWidth: "500px",
              children: [
                (0, _.jsx)(_, {
                  _: "p",
                  children: _.Localize(
                    "#Workshop_Saved_Queries_Save_Desc_Long",
                  ),
                }),
                (0, _.jsx)(_, {
                  placeholder: _.Localize("#Workshop_Saved_Queries_Save_Title"),
                  value: _,
                  onTextChange: _,
                }),
                (0, _.jsx)(_, {
                  _: "p",
                  children: _.Localize("#Workshop_Saved_Queries_Save_Desc"),
                }),
                (0, _.jsx)(_, {
                  selectedValue: _,
                  onSelectionChange: _,
                  options: _,
                  getOptionLabel: (_) => _.query_name,
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              justify: "end",
              gap: "3",
              align: "center",
              marginTop: "3",
              children: [
                (0, _.jsx)(_, {
                  disabled: _.trim().length == 0,
                  onClick: _,
                  children: _.Localize("#Workshop_Saved_Queries_Save_Btn"),
                }),
                (0, _.jsx)(_, {
                  onClick: _,
                  children: _.Localize("#Button_Cancel"),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { browseQuery: _, results: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = () => {
      _({
        date_range_created: void 0,
        page: 1,
      });
    },
    _ = () => {
      _({
        date_range_updated: void 0,
        page: 1,
      });
    },
    _ = [];
  _.childpublishedfileid?.length &&
    _.push(
      (0, _.jsx)(
        _,
        {
          childpublishedfileid: _.childpublishedfileid ?? "",
          section: _.section ?? "collections",
        },
        "childpublishedfileid",
      ),
    ),
    _.search_text?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            search_text: _.search_text ?? "",
            search_text_target: _.search_text_target,
          },
          "search_text",
        ),
      ),
    (_.required_tags?.length || _.excluded_tags?.length) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            section: _.section,
            rgRequiredTags: _.required_tags ?? [],
            rgExcludedTags: _.excluded_tags ?? [],
          },
          "tags",
        ),
      ),
    _.required_flags?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            rgRequiredFlags: _.required_flags ?? [],
          },
          "flags",
        ),
      ),
    _.required_kv_tags?.length &&
      _.push(
        (0, _.jsx)(
          _,
          {
            rgRequiredKeyValueTags: _.required_kv_tags ?? [],
          },
          "kv_tags",
        ),
      ),
    _.special_filter &&
      _.section &&
      _.push(
        (0, _.jsx)(
          _,
          {
            special_filter: _.special_filter,
            section: _.section,
          },
          "special_filter",
        ),
      ),
    (_.appids_required_for_use?.length ||
      _.excluded_appids_required_for_use?.length) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            rgRequiredAppIDs: _.appids_required_for_use ?? [],
            rgExcludedRequiredAppIDs: _.excluded_appids_required_for_use ?? [],
          },
          "appids_required_for_use",
        ),
      ),
    _.admin_view && _.push((0, _.jsx)(_, {}, "admin_view"));
  {
    let _ = _("#Workshop_DateFilter_TimeCreated", _.date_range_created);
    _ &&
      _.push(
        (0, _.jsxs)(
          _,
          {
            onClick: _,
            color: "dull",
            size: "1",
            children: [
              _,
              (0, _.jsx)(_, {
                className: _,
              }),
            ],
          },
          "time_created",
        ),
      );
    let _ = _("#Workshop_DateFilter_TimeUpdated", _.date_range_updated);
    _ &&
      _.push(
        (0, _.jsxs)(
          _,
          {
            onClick: _,
            color: "dull",
            size: "1",
            children: [
              _,
              (0, _.jsx)(_, {
                className: _,
              }),
            ],
          },
          "time_updated",
        ),
      );
  }
  return (
    _.length != 0 &&
      _.logged_in &&
      (_.push(
        (0, _.jsx)(
          _,
          {
            browseQuery: _,
          },
          "saved_query",
        ),
      ),
      _.push((0, _.jsx)(_, {}, "clear"))),
    (0, _.jsx)("div", {
      className: _,
      children: (0, _.jsxs)(_, {
        dullColor: {
          8: "rgba(0,0,0,0.3)",
        },
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: _.LocalizePlural(
              "#Workshop_NumResults",
              _.total_count,
              _(_.total_count),
            ),
          }),
          _.length != 0 &&
            (0, _.jsx)(_, {
              className: _,
              "flow-children": "geometric",
              focusableIfEmpty: !0,
              children: _,
            }),
        ],
      }),
    })
  );
}
function _(_) {
  let { tag: _, rgRequiredTags: _, rgExcludedTags: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _.findIndex((_) => _ == _.name) != -1,
    _ = _.findIndex((_) => _ == _.name) != -1,
    _ = () => {
      let _ = _ ? _.filter((_) => _ !== _.name) : [..._, _.name],
        _ = _.filter((_) => _ !== _.name);
      _({
        required_tags: _,
        excluded_tags: _,
        page: 1,
      });
    },
    _ = () => {
      let _ = _.filter((_) => _ !== _.name),
        _ = _ ? _.filter((_) => _ !== _.name) : [..._, _.name];
      _({
        required_tags: _,
        excluded_tags: _,
        page: 1,
      });
    };
  return (0, _.jsxs)(_, {
    className: _,
    direction: "row",
    children: [
      (0, _.jsx)(_, {
        onActivate: _,
        className: (0, _.default)(_, _ && _),
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        onActivate: _,
        className: (0, _.default)(_, _ && _),
        children: (0, _.jsx)(_, {}),
      }),
      (0, _.jsx)(_, {
        focusable: !_.IN_GAMEPADUI,
        onActivate: _,
        children: _.display_name,
      }),
    ],
  });
}
function _(_) {
  let {
      category: _,
      browseQuery: _,
      strText: _,
      setVisibility: _,
      bVisible: _,
    } = _,
    { onBrowseHandler: _ } = _(),
    [_, _] = (0, _.useState)(!1),
    _ = _.required_tags || [],
    _ = () => {
      _(!1);
    },
    _ = () => {
      _(!0);
    },
    _ = _.external_url;
  if (_ && _.length != 0) {
    let _ = new URL(location.href),
      _ = new URLSearchParams();
    _.set("target_uri", "https://" + _.hostname + _.pathname),
      _.forEach((_, _) => _.set(`tags[${_}]`, _)),
      (_ += "?" + _.toString());
  }
  return (
    (0, _.useEffect)(() => {
      let _ = "https://" + new URL(_.external_url ?? "").hostname,
        _ = (_) => {
          if (_.origin !== _) return;
          let _ = JSON.parse(_.data);
          switch (_.method) {
            case "resize":
              break;
            case "setfilter":
              {
                let _ = _.tags;
                _({
                  required_tags: _,
                  page: 1,
                }),
                  _(!1);
              }
              break;
          }
        };
      return _.external_url?.length != 0
        ? (window.addEventListener("message", _),
          () => {
            window.removeEventListener("message", _);
          })
        : () => {};
    }, []),
    (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        onClose: _,
        children: (0, _.jsx)(_, {
          background: "dull-7",
          className: _,
          children: (0, _.jsx)("iframe", {
            scrolling: "no",
            className: (0, _.default)(_, _ && _),
            title: _,
            src: _,
            onLoad: _,
          }),
        }),
      }),
    })
  );
}
function _(_) {
  let { category: _, browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _.required_tags || [],
    _ = _.excluded_tags || [],
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      _(!0);
    },
    _ = (_) => {
      let _ = _.filter((_) => !_.tags.some((_) => _ == _.name)),
        _ = _.tags.find((_) => _._ == _);
      _.length != 0 && _ && _.push(_.name),
        _({
          required_tags: _,
          page: 1,
        });
    },
    _ = (_) => {
      if (_.length == 0) return _.Localize("#Workshop_Tag_NoneSpecified");
      let _ = _.tags.find((_) => _._ == _);
      return _
        ? (_.display_name ?? _.name)
        : _.Localize("#Workshop_Tag_NoneSpecified");
    },
    _ = ["", ..._.tags.map((_) => _._)];
  switch (_.htmlelement || "checkbox") {
    case "select": {
      let _ = _.tags.find((_) => _.find((_) => _.name == _));
      return (0, _.jsxs)("div", {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: _.name,
          }),
          (0, _.jsx)(_, {
            placement: {
              flip: !1,
            },
            selectedValue: _?._ ?? "",
            onSelectionChange: _,
            options: _,
            getOptionLabel: _,
          }),
        ],
      });
    }
    case "external_url": {
      let _ = _.Localize(_.external_url_button_text);
      return (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)(_, {
            onClick: _,
            size: "1",
            color: "dull",
            children: _,
          }),
          (0, _.jsx)(_, {
            category: _,
            browseQuery: _,
            setVisibility: _,
            bVisible: _,
            strText: _,
          }),
        ],
      });
    }
    default:
      return (0, _.jsxs)(_, {
        className: _,
        direction: "column",
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: _.name
              ? _.name
              : _.Localize("#Workshop_ItemDetails_Categories_Title"),
          }),
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)("div", {
              className: _,
              children: _.tags.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    tag: _,
                    rgRequiredTags: _,
                    rgExcludedTags: _,
                  },
                  _._,
                ),
              ),
            }),
          }),
        ],
      });
  }
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_.section, _);
  return !_ || _.length == 0
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              category: _,
              browseQuery: _,
            },
            _.name,
          ),
        ),
      });
}
var _ = [
  "#Workshop_SpecialFilter_None",
  "#Workshop_SpecialFilter_AcceptedForUse",
  "#Workshop_SpecialFilter_FavoritedByFriends",
  "#Workshop_SpecialFilter_CreatedByFriends",
  "#Workshop_SpecialFilter_CreatedByFollowed",
  "#Workshop_SpecialFilter_Reported",
  "#Workshop_SpecialFilter_ParentItems",
  "#Workshop_SpecialFilter_ParentCollections",
];
function _(_, _, _) {
  let _ = _[_];
  return (
    _ == 1 &&
      (_ == "merchandise"
        ? (_ = "#Workshop_AcceptedMerch")
        : _.accepted_for_game_text &&
          _.accepted_for_game_text.length != 0 &&
          (_ = _.accepted_for_game_text)),
    _.Localize(_)
  );
}
function _(_) {
  let { browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    _ = (_) => {
      let _;
      switch (_) {
        case 1:
          _ = "accepted";
          break;
        case 6:
          _ = "num_parent_items";
          break;
        case 7:
          _ = "num_parent_collections";
          break;
        case 5:
          _ = "reported";
          break;
      }
      _({
        special_filter: _,
        browse_sort: _,
        page: 1,
      });
    },
    _ = _(_.section ?? "readytouseitems", _.bIsAdmin);
  return _.length <= 1
    ? null
    : (0, _.jsxs)("div", {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: _.Localize("#Workshop_SpecialFilter_Desc"),
          }),
          (0, _.jsx)(_, {
            placement: {
              flip: !1,
            },
            selectedValue: _.special_filter ?? 0,
            onSelectionChange: _,
            options: _,
            getOptionLabel: (_) => _(_, _.section ?? "readytouseitems", _),
          }),
        ],
      });
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    { onBrowseHandler: _ } = _(),
    _ = _.bIsAdmin,
    _ = _.admin_view || !1,
    _ = () => {
      _({
        admin_view: !_,
        page: 1,
      });
    };
  if (!_) return null;
  let _ = _.visible_admin_tags || [];
  return (0, _.jsxs)("div", {
    className: _,
    children: [
      (0, _.jsxs)(_, {
        onActivate: _,
        className: _,
        children: [
          (0, _.jsx)("div", {
            className: (0, _.default)(_, _ && _),
            children: (0, _.jsx)(_, {}),
          }),
          _.Localize("#Workshop_Admin_View"),
        ],
      }),
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            category: _,
            browseQuery: _,
          },
          _.name,
        ),
      ),
    ],
  });
}
function _(_) {
  let { browseQuery: _ } = _,
    { workshopNumbers: _ } = _.useLoaderData(),
    { onBrowseHandler: _ } = _();
  if (_.total_incompatible == 0) return null;
  let _ = _.required_flags || [],
    _ = "incompatible",
    _ = _.findIndex((_) => _ == _) != -1,
    _ = () => {
      let _ = _ ? _.filter((_) => _ !== _) : [..._, _];
      _({
        required_flags: _,
        page: 1,
      });
    };
  switch (_.section) {
    case "merchandise":
    case "videos":
      return null;
  }
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: _.Localize("#Workshop_Flag_Incompatible_Checkbox_Desc"),
      }),
      (0, _.jsxs)(_, {
        onActivate: _,
        className: _,
        children: [
          (0, _.jsx)("div", {
            className: (0, _.default)(_, _ && _),
            children: (0, _.jsx)(_, {}),
          }),
          _.Localize("#Workshop_Flag_Incompatible_Checkbox"),
        ],
      }),
    ],
  });
}
function _(_) {
  let { appid: _, rgRequiredAppIDs: _, rgExcludedRequiredAppIDs: _ } = _,
    { onBrowseHandler: _ } = _(),
    { data: _ } = _({
      appid: _,
    }),
    _ = _?.includes(_),
    _ = _?.includes(_),
    _ = () => {
      let _ = _ ? _?.filter((_) => _ !== _) : [..._, _],
        _ = _.filter((_) => _ !== _);
      _({
        appids_required_for_use: _,
        excluded_appids_required_for_use: _,
        page: 1,
      });
    },
    _ = () => {
      let _ = _.filter((_) => _ !== _),
        _ = _ ? _.filter((_) => _ !== _) : [..._, _];
      _({
        appids_required_for_use: _,
        excluded_appids_required_for_use: _,
        page: 1,
      });
    };
  return !_ || !_.name?.length
    ? null
    : (0, _.jsxs)(_, {
        className: _,
        direction: "row",
        children: [
          (0, _.jsx)(_, {
            onActivate: _,
            className: (0, _.default)(_, _ && _),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            onActivate: _,
            className: (0, _.default)(_, _ && _),
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            focusable: !_.IN_GAMEPADUI,
            onActivate: _,
            children: _.name,
          }),
        ],
      });
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    { availableRequiredDLC: _, setOwnedApps: _ } = _.useLoaderData(),
    { onBrowseHandler: _ } = _(),
    _ = () => {
      let _ = _.filter(({ appid: _ }) => _ && _.has(_)).map(
        ({ appid: _ }) => _,
      );
      _({
        appids_required_for_use: _,
        excluded_appids_required_for_use: [],
      });
    },
    _ = () => {
      let _ = _.filter(({ appid: _ }) => !_ || !_.has(_)).map(
        ({ appid: _ }) => _,
      );
      _({
        appids_required_for_use: [],
        excluded_appids_required_for_use: _,
      });
    };
  return _.length == 0 || !_.feature_required_dlc
    ? null
    : (0, _.jsxs)(_, {
        className: (0, _.default)(_, _),
        children: [
          (0, _.jsx)("div", {
            className: _,
            children: _.Localize("#Workshop_RequiredDLC_Header"),
          }),
          _.logged_in &&
            (0, _.jsxs)(_, {
              gap: "1",
              width: "100%",
              children: [
                (0, _.jsx)(_, {
                  color: "dull",
                  size: "1",
                  onClick: _,
                  children: _.Localize("#Workshop_RequiredDLC_IncludeOwned"),
                }),
                (0, _.jsx)(_, {
                  color: "dull",
                  size: "1",
                  onClick: _,
                  children: _.Localize("#Workshop_RequiredDLC_ExcludeUnowned"),
                }),
              ],
            }),
          (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsx)("div", {
              className: _,
              children: _.map(({ appid: _, count: _ }) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    rgRequiredAppIDs: _.appids_required_for_use ?? [],
                    rgExcludedRequiredAppIDs:
                      _.excluded_appids_required_for_use ?? [],
                  },
                  _,
                ),
              ),
            }),
          }),
        ],
      });
}
function _(_) {
  return _ == 0
    ? void 0
    : _.Instant.fromEpochMilliseconds(_ * 1e3)
        .toZonedDateTimeISO("UTC")
        .toPlainDate();
}
function _(_) {
  return _ ? _.toZonedDateTime("UTC").toInstant().epochMilliseconds / 1e3 : 0;
}
function _(_) {
  let { date_range: _, fnOnUpdate: _ } = _,
    _ = _.timestamp_start || 0,
    _ = _.timestamp_end || 0,
    _ = _(_),
    _ = _(_),
    _ = _.Now.plainDateISO(),
    _ = _ && _.PlainDate.compare(_, _) == -1 ? _ : _,
    _ = _ ?? void 0,
    _ = (_) => {
      let _ = _(_);
      return _ == 0 || _ <= _;
    },
    _ = (_) => {
      let _ = _(_);
      return _ == 0 || _ >= _;
    },
    _ = (_) => {
      _(_(_), _);
    },
    _ = (_) => {
      _(_, _(_));
    };
  return (0, _.jsxs)("div", {
    className: _,
    children: [
      (0, _.jsxs)(_, {
        direction: "column",
        children: [
          _.Localize("#Workshop_DateFilter_Between"),
          (0, _.jsx)(_, {
            value: _,
            onValueChange: _,
            max: _,
            checkValidDate: _,
            clearable: !0,
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        direction: "column",
        children: [
          _.Localize("#Workshop_DateFilter_And"),
          (0, _.jsx)(_, {
            value: _,
            onValueChange: _,
            min: _,
            max: _,
            checkValidDate: _,
            clearable: !0,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      _(!_);
    },
    _ = _.date_range_created || {
      timestamp_start: 0,
      timestamp_end: 0,
    },
    _ = _.date_range_updated || {
      timestamp_start: 0,
      timestamp_end: 0,
    },
    _ = (_, _) => {
      _({
        date_range_created: {
          timestamp_start: _,
          timestamp_end: _,
        },
        page: 1,
      });
    },
    _ = (_, _) => {
      _({
        date_range_updated: {
          timestamp_start: _,
          timestamp_end: _,
        },
        page: 1,
      });
    };
  return (0, _.jsxs)("div", {
    children: [
      (0, _.jsx)(_, {
        onClick: _,
        children: _.Localize("#Workshop_DateFilter_FilterByDate"),
      }),
      _ &&
        (0, _.jsxs)("div", {
          className: (0, _.default)(_, _),
          children: [
            (0, _.jsx)("div", {
              className: _,
              children: _.Localize("#Workshop_DateFilter_TimeCreated"),
            }),
            (0, _.jsx)(_, {
              date_range: _,
              fnOnUpdate: _,
            }),
            (0, _.jsx)("div", {
              className: _,
              children: _.Localize("#Workshop_DateFilter_TimeUpdated"),
            }),
            (0, _.jsx)(_, {
              date_range: _,
              fnOnUpdate: _,
            }),
          ],
        }),
    ],
  });
}
function _(_) {
  let _ = _(),
    { browseQuery: _ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.jsxs)(_, {
      className: _,
      onActivate: () => {
        _(!_);
      },
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        _.Localize("#Workshop_ApplyFilters"),
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    }),
    _ = (0, _.useMemo)(
      () =>
        (0, _.jsx)("div", {
          children: (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsxs)(_, {
              className: _,
              "flow-children": "geometric",
              children: [
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
              ],
            }),
          }),
        }),
      [_],
    );
  return _ != "sm" && _ != "initial"
    ? (0, _.jsx)("div", {})
    : (0, _.jsxs)("div", {
        className: _,
        children: [
          !_.IN_GAMEPADUI &&
            (0, _.jsxs)(_.Root, {
              open: _,
              onOpenChange: _,
              interactions: {
                click: !0,
                focus: !0,
              },
              placement: {
                offset: 0,
                initial: "bottom-start",
                flip: !1,
              },
              children: [
                (0, _.jsx)(_.Anchor, {
                  children: _,
                }),
                (0, _.jsx)(_.Positioner, {
                  children: _,
                }),
              ],
            }),
          _.IN_GAMEPADUI &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                _,
                _ &&
                  (0, _.jsx)(_, {
                    active: !0,
                    children: (0, _.jsx)(_, {
                      onClose: () => _(!1),
                      children: _,
                    }),
                  }),
              ],
            }),
        ],
      });
}
function _(_) {
  let _ = _();
  if (_ == "sm" || _ == "initial") return null;
  let { browseQuery: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    "flow-children": "column",
    children: [
      (0, _.jsx)(_, {
        browseQuery: _,
      }),
      (0, _.jsx)(_, {
        browseQuery: _,
      }),
      (0, _.jsx)(_, {
        browseQuery: _,
      }),
      (0, _.jsx)(_, {
        browseQuery: _,
      }),
      (0, _.jsx)(_, {
        browseQuery: _,
      }),
      (0, _.jsx)(_, {
        browseQuery: _,
      }),
    ],
  });
}
var _ = {
  accepted: "#Workshop_BrowseSort_AcceptedTime",
  toprated: "#Workshop_BrowseSort_TopRated",
  mostrecent: "#Workshop_BrowseSort_MostRecent",
  trend: "#Workshop_BrowseSort_MostPopular",
  reported: "#Workshop_BrowseSort_Reported",
  torate: "#Workshop_BrowseSort_ToRate",
  totaluniquesubscribers: "#Workshop_BrowseSort_TotalUniqueSubscribers",
  totalvotes: "#Workshop_BrowseSort_TotalVotes",
  mostupvotes: "#Workshop_BrowseSort_MostUpVotes",
  textsearch: "#Workshop_BrowseSort_SearchRelevance",
  playtime_trend: "#Workshop_BrowseSort_Playtime",
  playtime_trend_total: "#Workshop_BrowseSort_PlaytimeTotal",
  playtime_average_trend: "#Workshop_BrowseSort_PlaytimeAverage",
  playtime_average_trend_total: "#Workshop_BrowseSort_PlaytimeAverageTotal",
  playtime_sessions_trend: "#Workshop_BrowseSort_PlaytimeSessions",
  playtime_sessions_lifetime: "#Workshop_BrowseSort_PlaytimeSessionsTotal",
  inappropriate_rating: "#Workshop_BrowseSort_Inappropriate",
  ban_content_check: "#Workshop_BrowseSort_BanContentCheck",
  lastupdated: "#Workshop_BrowseSort_LastUpdated",
  num_parent_items: "#Workshop_BrowseSort_NumParentItems",
  num_parent_collections: "#Workshop_BrowseSort_NumParentCollections",
  curatedadmin: "#Workshop_BrowseSort_CuratedAdmin",
  nominee: "#Workshop_BrowseSort_Nominee",
};
function _(_, _, _) {
  let _ = _[_];
  return _.Localize(_);
}
function _(_) {
  let _ = "#SharedFiles_Browse_Trend_Option_Week";
  switch (_) {
    case 1:
      _ = "#SharedFiles_Browse_Trend_Option_Today";
      break;
    case 7:
      _ = "#SharedFiles_Browse_Trend_Option_Week";
      break;
    case 30:
      _ = "#SharedFiles_Browse_Trend_Option_Month";
      break;
    case 90:
      _ = "#SharedFiles_Browse_Trend_Option_ThreeMonths";
      break;
    case 180:
      _ = "#SharedFiles_Browse_Trend_Option_SixMonths";
      break;
    case 365:
      _ = "#SharedFiles_Browse_Trend_Option_OneYear";
      break;
    case -1:
      _ = "#SharedFiles_Browse_Trend_Option_AllTime";
      break;
  }
  return _.Localize(_);
}
function _(_) {
  let { browseQuery: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useRef)(0),
    [_, _] = (0, _.useState)(!1),
    _ = () => {
      _(!_);
    },
    _ = _(_.browse_sort ?? "trend", _.section ?? "readytouseitems", _),
    _ = !1;
  switch (_.browse_sort) {
    case "trend":
    case "playtime_trend":
    case "playtime_average_trend":
    case "playtime_sessions_trend":
    case "mostupvotes":
      _ = !0;
      break;
  }
  if (_) {
    let _ = _(_.trend_days || 7);
    _ = _.Localize("#Workshop_BrowseSort_Combined", _, _);
  }
  let _ = (0, _.jsxs)(_, {
      className: _,
      onActivate: _,
      children: [
        (0, _.jsx)(_, {
          className: _,
        }),
        _,
        (0, _.jsx)(_, {
          className: _,
        }),
      ],
    }),
    _ = (0, _.useMemo)(
      () =>
        (0, _.jsx)("div", {
          children: (0, _.jsx)("div", {
            className: _,
            children: (0, _.jsxs)(_, {
              className: _,
              "flow-children": "geometric",
              children: [
                (0, _.jsx)(_, {
                  browseQuery: _,
                }),
                _ &&
                  (0, _.jsx)(_, {
                    browseQuery: _,
                  }),
              ],
            }),
          }),
        }),
      [_, _],
    );
  return (0, _.jsxs)("div", {
    className: _,
    children: [
      !_.IN_GAMEPADUI &&
        (0, _.jsxs)(_.Root, {
          open: _,
          onOpenChange: _,
          interactions: {
            click: !0,
            focus: !0,
          },
          placement: {
            offset: 0,
            initial: "bottom-end",
            flip: !1,
          },
          children: [
            (0, _.jsx)(_.Anchor, {
              children: _,
            }),
            (0, _.jsx)(_.Positioner, {
              children: _,
            }),
          ],
        }),
      _.IN_GAMEPADUI &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _,
            _ &&
              (0, _.jsx)(_, {
                active: !0,
                children: (0, _.jsx)(_, {
                  onClose: () => _(!1),
                  children: _,
                }),
              }),
          ],
        }),
    ],
  });
}
function _(_) {
  let { browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useContext)(_).bIsAdmin,
    _ = (_) => {
      _ == -1
        ? _({
            browse_sort: "toprated",
            trend_days: void 0,
            page: 1,
          })
        : _({
            trend_days: _,
            page: 1,
          });
    },
    _ = [];
  return (
    _.section === "mtxitems"
      ? (_ = _ ? [1, 7, 30, 90, 180, 365, -1] : [1])
      : (_ = [1, 7, 30, 90, 180, 365, -1]),
    (0, _.jsxs)("div", {
      className: _,
      children: [
        (0, _.jsx)("div", {
          className: _,
          children: _.Localize("#Workshop_BrowseSort_TimeFrame"),
        }),
        (0, _.jsx)(_, {
          options: _,
          value: _.trend_days || 7,
          onValueChange: _,
          getOptionLabel: _,
        }),
      ],
    })
  );
}
function _(_) {
  let { browseQuery: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = (0, _.useContext)(_),
    _ = (0, _.useContext)(_),
    _ = _.browse_sort || "trend",
    _ = _.bIsAdmin,
    _ = _(_.section ?? "readytouseitems", !1),
    _ = [..._];
  switch (
    (_ && (_ = [..._, ..._]),
    (_ = _.filter(
      (_) => (_ != "textsearch" || _.search_text?.length != 0) && _ != "torate",
    )),
    _.showplayeditemsfilter ||
      (_ = _.filter(
        (_) =>
          _ != "playtime_trend" &&
          _ != "playtime_average_trend" &&
          _ != "playtime_trend_total" &&
          _ != "playtime_average_trend_total" &&
          _ != "playtime_sessions_trend" &&
          _ != "playtime_sessions_lifetime",
      )),
    _.special_filter)
  ) {
    case 1:
      _ = _.filter((_) => _ != "toprated" && _ != "trend");
      break;
    case 6:
    case 7:
    case 5:
      break;
    default:
      _ = _.filter(
        (_) =>
          _ != "accepted" &&
          _ != "num_parent_items" &&
          _ != "num_parent_collections" &&
          _ != "reported",
      );
      break;
  }
  _ = [...new Set(_)];
  let _ = (_) => {
      _({
        browse_sort: _,
        page: 1,
      });
    },
    _ = (_) => {
      let _ = _(_, _.section ?? "readytouseitems", _);
      return _
        ? _.includes(_)
          ? _
          : _.Localize("#Workshop_BrowseSort_AdminOption", _)
        : _;
    };
  return (0, _.jsxs)(_, {
    className: _,
    direction: "column",
    children: [
      (0, _.jsx)("div", {
        className: _,
        children: _.Localize("#Workshop_BrowseSort_SortOrder"),
      }),
      (0, _.jsx)(_, {
        options: _,
        value: _,
        onValueChange: _,
        getOptionLabel: _,
      }),
    ],
  });
}
function _(_) {
  let { browseQuery: _, results: _ } = _;
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(_, {
      browseQuery: _,
      results: _,
    }),
  });
}
function _(_) {
  let { page: _, bLoading: _, onChangePage: _, bDisabled: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = () => {
      _ ||
        (_({
          page: _,
        }),
        _());
    };
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && _),
    onActivate: _,
    children: _(_),
  });
}
function _(_) {
  let { onBrowseHandler: _ } = _(),
    { browseQuery: _, results: _, bLoading: _, onChangePage: _ } = _,
    _ = _(),
    _ = [10, 15, 30, 50],
    _ = (_) => {
      _.setPreferences({
        numResultsPerPage: _,
      }),
        _({
          num_per_page: _,
          page: 1,
        }),
        _();
    },
    _ = (_) => {
      _ ||
        (_({
          page: (_.page ?? 1) + _,
        }),
        _());
    };
  if (_.results.length == 0) return null;
  let _ = Math.max(1, _.total_pages),
    _ = !1,
    _ = !1,
    _ = 1,
    _ = 1,
    _ = [];
  _ <= 7
    ? (_ = _)
    : (_.current_page - 3 > 1
        ? ((_ = !0), (_ = _.current_page - 2))
        : ((_ = !1), (_ = 1)),
      _.current_page + 3 < _
        ? ((_ = !0), (_ = _.current_page + 2))
        : ((_ = !1), (_ = _))),
    _ &&
      (_.push(
        (0, _.jsx)(_, {
          page: 1,
          bLoading: _,
          onChangePage: _,
        }),
      ),
      _.push(
        (0, _.jsx)("div", {
          children: "...",
        }),
      ));
  for (let _ = _; _ <= _; _++)
    _ > _,
      _ == _.current_page
        ? _.push(
            (0, _.jsx)(_, {
              page: _,
              bLoading: _,
              bDisabled: !0,
              onChangePage: _,
            }),
          )
        : _.push(
            (0, _.jsx)(_, {
              page: _,
              bLoading: _,
              onChangePage: _,
            }),
          );
  return (
    _ &&
      (_.push(
        (0, _.jsx)("div", {
          children: "...",
        }),
      ),
      _.push(
        (0, _.jsx)(_, {
          page: _,
          bLoading: _,
          onChangePage: _,
        }),
      )),
    (0, _.jsxs)(_, {
      className: _,
      direction: "row",
      children: [
        (0, _.jsxs)("div", {
          className: _,
          children: [
            _.Localize("#Workshop_NumPerPage"),
            (0, _.jsx)(_, {
              size: "1",
              onSelectionChange: _,
              selectedValue: _.num_per_page ?? 32,
              options: _,
            }),
          ],
        }),
        (0, _.jsxs)(_, {
          gap: "1",
          align: "center",
          direction: "row",
          children: [
            (0, _.jsx)(_, {
              color: _ ? "dull" : "accent",
              disabled: _.current_page <= 1,
              onClick: () => _(-1),
              size: "1",
              children: (0, _.jsx)(_, {
                direction: "left",
              }),
            }),
            (0, _.jsx)(_, {
              size: "4",
              children: (0, _.jsxs)(_, {
                gap: "2",
                direction: "row",
                children: [..._],
              }),
            }),
            (0, _.jsx)(_, {
              color: _ ? "dull" : "accent",
              disabled: _?.current_page >= _.total_pages,
              onClick: () => _(1),
              size: "1",
              children: (0, _.jsx)(_, {
                direction: "right",
              }),
            }),
          ],
        }),
      ],
    })
  );
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
};
