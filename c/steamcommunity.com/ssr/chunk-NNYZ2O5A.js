var _ = _((_) => {
  "use strict";
  _.byteLength = _;
  _.toByteArray = _;
  _.fromByteArray = _;
  var _ = [],
    _ = [],
    _ = typeof Uint8Array < "u" ? Uint8Array : Array,
    _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (_ = 0, _ = _.length; _ < _; ++_) (_[_] = _[_]), (_[_.charCodeAt(_)] = _);
  var _, _;
  _[45] = 62;
  _[95] = 63;
  function _(_) {
    var _ = _.length;
    if (_ % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var _ = _.indexOf("=");
    _ === -1 && (_ = _);
    var _ = _ === _ ? 0 : 4 - (_ % 4);
    return [_, _];
  }
  function _(_) {
    var _ = _(_),
      _ = _[0],
      _ = _[1];
    return ((_ + _) * 3) / 4 - _;
  }
  function _(_, _, _) {
    return ((_ + _) * 3) / 4 - _;
  }
  function _(_) {
    var _,
      _ = _(_),
      _ = _[0],
      _ = _[1],
      _ = new _(_(_, _, _)),
      _ = 0,
      _ = _ > 0 ? _ - 4 : _,
      _;
    for (_ = 0; _ < _; _ += 4)
      (_ =
        (_[_.charCodeAt(_)] << 18) |
        (_[_.charCodeAt(_ + 1)] << 12) |
        (_[_.charCodeAt(_ + 2)] << 6) |
        _[_.charCodeAt(_ + 3)]),
        (_[_++] = (_ >> 16) & 255),
        (_[_++] = (_ >> 8) & 255),
        (_[_++] = _ & 255);
    return (
      _ === 2 &&
        ((_ = (_[_.charCodeAt(_)] << 2) | (_[_.charCodeAt(_ + 1)] >> 4)),
        (_[_++] = _ & 255)),
      _ === 1 &&
        ((_ =
          (_[_.charCodeAt(_)] << 10) |
          (_[_.charCodeAt(_ + 1)] << 4) |
          (_[_.charCodeAt(_ + 2)] >> 2)),
        (_[_++] = (_ >> 8) & 255),
        (_[_++] = _ & 255)),
      _
    );
  }
  function _(_) {
    return _[(_ >> 18) & 63] + _[(_ >> 12) & 63] + _[(_ >> 6) & 63] + _[_ & 63];
  }
  function _(_, _, _) {
    for (var _, _ = [], _ = _; _ < _; _ += 3)
      (_ =
        ((_[_] << 16) & 16711680) +
        ((_[_ + 1] << 8) & 65280) +
        (_[_ + 2] & 255)),
        _.push(_(_));
    return _.join("");
  }
  function _(_) {
    for (
      var _, _ = _.length, _ = _ % 3, _ = [], _ = 16383, _ = 0, _ = _ - _;
      _ < _;
      _ += _
    )
      _.push(_(_, _, _ + _ > _ ? _ : _ + _));
    return (
      _ === 1
        ? ((_ = _[_ - 1]), _.push(_[_ >> 2] + _[(_ << 4) & 63] + "=="))
        : _ === 2 &&
          ((_ = (_[_ - 2] << 8) + _[_ - 1]),
          _.push(_[_ >> 10] + _[(_ >> 4) & 63] + _[(_ << 2) & 63] + "=")),
      _.join("")
    );
  }
});
var _ = {};
_(_, {
  k_ESupportPartnerSupport: () => _,
  k_ESupportPermissions_AccessAgentMetrics: () => _,
  k_ESupportPermissions_AccountTermination: () => _,
  k_ESupportPermissions_AdvancedPartnerTools: () => _,
  k_ESupportPermissions_BillingInfo: () => _,
  k_ESupportPermissions_BulkRefundTool: () => _,
  k_ESupportPermissions_CSGOTools: () => _,
  k_ESupportPermissions_CallLogging: () => _,
  k_ESupportPermissions_ChangeAccountName: () => _,
  k_ESupportPermissions_CreditCardSearch: () => _,
  k_ESupportPermissions_CsVacNetDataLabeling: () => _,
  k_ESupportPermissions_CsVideoReview: () => _,
  k_ESupportPermissions_DeleteAndPurgeAvatars: () => _,
  k_ESupportPermissions_DepotScanReview: () => _,
  k_ESupportPermissions_EditQuicktexts: () => _,
  k_ESupportPermissions_EscalatedGroupAndForumModeration: () => _,
  k_ESupportPermissions_FraudTools: () => _,
  k_ESupportPermissions_GameGrant: () => _,
  k_ESupportPermissions_GroupAndForumModeration: () => _,
  k_ESupportPermissions_Invalid: () => _,
  k_ESupportPermissions_ItemGrant: () => _,
  k_ESupportPermissions_LocalizationAdvanceAccess: () => _,
  k_ESupportPermissions_LocalizationAssetTools: () => _,
  k_ESupportPermissions_ManageCSItems: () => _,
  k_ESupportPermissions_ModerateChat: () => _,
  k_ESupportPermissions_ModerateEvents: () => _,
  k_ESupportPermissions_ModerateUGC: () => _,
  k_ESupportPermissions_ModerationSupervisor: () => _,
  k_ESupportPermissions_OptInOperations: () => _,
  k_ESupportPermissions_PartnerAppReadonlyAccess: () => _,
  k_ESupportPermissions_PartnerDeckCompatReadOnly: () => _,
  k_ESupportPermissions_PartnerHardwareRequests: () => _,
  k_ESupportPermissions_SaleTechEvents: () => _,
  k_ESupportPermissions_SendHighValueSupportShipments: () => _,
  k_ESupportPermissions_SendSupportShipments: () => _,
  k_ESupportPermissions_SupportToolAccess: () => _,
  k_ESupportPermissions_UpdatePurchaseReservations: () => _,
  k_ESupportPermissions_WalletGrant: () => _,
  k_ESupportUserSupport: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3,
  _ = 4,
  _ = 5,
  _ = 6,
  _ = 7,
  _ = 8,
  _ = 9,
  _ = 10,
  _ = 11,
  _ = 12,
  _ = 13,
  _ = 14,
  _ = 15,
  _ = 16,
  _ = 17,
  _ = 18,
  _ = 19,
  _ = 20,
  _ = 21,
  _ = 22,
  _ = 23,
  _ = 24,
  _ = 25,
  _ = 26,
  _ = 27,
  _ = 28,
  _ = 29,
  _ = 30,
  _ = 31,
  _ = 32,
  _ = 33,
  _ = 34,
  _ = 35,
  _ = 36,
  _ = 37,
  _ = 38;
var _ = {};
_(_, {
  k_EProtoPrivAccountOptional: () => _,
  k_EProtoPrivAuthAccount: () => _,
  k_EProtoPrivAuthAccountAdmin: () => _,
  k_EProtoPrivAuthAccountCommunityNotBlocked: () => _,
  k_EProtoPrivAuthAccountGlobalModerator: () => _,
  k_EProtoPrivAuthAccountMemberPublisher: () => _,
  k_EProtoPrivAuthAccountPublisherAdmin: () => _,
  k_EProtoPrivAuthAccountPublisherOwnsApp: () => _,
  k_EProtoPrivAuthAccountSupervisor: () => _,
  k_EProtoPrivAuthAccountSupport: () => _,
  k_EProtoPrivAuthAccountValveStatsAccess: () => _,
  k_EProtoPrivInvalid: () => _,
  k_EProtoPrivIsValveHostedDedicatedServer: () => _,
  k_EProtoPrivMax: () => _,
  k_EProtoPrivNone: () => _,
  k_EProtoPrivWeakAuthAccount: () => _,
});
var _ = -1,
  _ = 0,
  _ = 1,
  _ = 2,
  _ = 3,
  _ = 4,
  _ = 5,
  _ = 6,
  _ = 7,
  _ = 8,
  _ = 9,
  _ = 10,
  _ = 11,
  _ = 12,
  _ = 13,
  _ = 14;
var _ = {};
_(_, {
  k_EProtoWebAPIKeyAdmin: () => _,
  k_EProtoWebAPIKeyAny: () => _,
  k_EProtoWebAPIKeyNone: () => _,
  k_EProtoWebAPIKeyNotAccepted: () => _,
  k_EProtoWebAPIKeyPublisher: () => _,
  k_EProtoWebAPIKeyPublisherOwnsApp: () => _,
  k_EProtoWebAPIKeySpecificKey_VideoProcessingBot: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3,
  _ = 4,
  _ = 5,
  _ = 6;
export { _, _, _, _ };
