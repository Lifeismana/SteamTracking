var _ = _(_(), 1);
var _ = _.createContext(void 0),
  _ = _.Provider,
  _ = () => {
    let _ = _.useContext(_);
    if (!_)
      throw new Error(
        "called useActiveServiceTransportContext outside of ServiceTransportProvider",
      );
    return _;
  };
function _(_) {
  let { useStorage: _, children: _ } = _,
    _,
    _;
  if ("useActiveCMInterface" in _) _ = _ = _.useActiveCMInterface;
  else if ("useActiveSteamInterface" in _) _ = _.useActiveSteamInterface;
  else
    return (
      _(
        _,
        "neither useActiveCMInterface nor useActiveSteamInterface were provided",
      ),
      _
    );
  let _ = _.useMemo(
    () => ({
      useActiveSteamInterface: _,
      useActiveCMInterface: _,
      useStorage: _,
    }),
    [_, _, _],
  );
  return _.createElement(
    _,
    {
      value: _,
    },
    _,
  );
}
var _ = () => _().useActiveSteamInterface()?.GetServiceTransport();
var _ = () => _().useStorage();
var _ = {};
_(_, {
  k_ESteamOSCompatibilityCategory_Compatible: () => _,
  k_ESteamOSCompatibilityCategory_Unknown: () => _,
  k_ESteamOSCompatibilityCategory_Unsupported: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2;
var _ = {};
_(_, {
  k_ESteamDeckCompatibilityCategory_Playable: () => _,
  k_ESteamDeckCompatibilityCategory_Unknown: () => _,
  k_ESteamDeckCompatibilityCategory_Unsupported: () => _,
  k_ESteamDeckCompatibilityCategory_Verified: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3;
var _ = {};
_(_, {
  k_EAppTestType_BuildReview: () => _,
  k_EAppTestType_SteamChinaPlatformOperator_BuildReview: () => _,
  k_EAppTestType_SteamChinaPlatformOperator_StorePageReview: () => _,
  k_EAppTestType_SteamChina_BuildReview: () => _,
  k_EAppTestType_SteamChina_StorePageReview: () => _,
  k_EAppTestType_SteamDeckCompatibilityReview: () => _,
  k_EAppTestType_SteamFrameCompatibilityReview: () => _,
  k_EAppTestType_StorePageReview: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3,
  _ = 4,
  _ = 5,
  _ = 6,
  _ = 7;
var _ = {};
_(_, {
  k_EPersonaStateFlag_ClientTypeMobile: () => _,
  k_EPersonaStateFlag_ClientTypeTenfoot: () => _,
  k_EPersonaStateFlag_ClientTypeVR: () => _,
  k_EPersonaStateFlag_ClientTypeWeb: () => _,
  k_EPersonaStateFlag_Golden: () => _,
  k_EPersonaStateFlag_HasRichPresence: () => _,
  k_EPersonaStateFlag_InJoinableGame: () => _,
  k_EPersonaStateFlag_LaunchTypeCompatTool: () => _,
  k_EPersonaStateFlag_LaunchTypeGamepad: () => _,
  k_EPersonaStateFlag_RemotePlayTogether: () => _,
});
var _ = 1,
  _ = 2,
  _ = 4,
  _ = 8,
  _ = 256,
  _ = 512,
  _ = 1024,
  _ = 2048,
  _ = 4096,
  _ = 8192;
var _ = {};
_(_, {
  k_ESteamOSCompatibilityResultDisplayType_Compatible: () => _,
  k_ESteamOSCompatibilityResultDisplayType_Informational: () => _,
  k_ESteamOSCompatibilityResultDisplayType_Invisible: () => _,
  k_ESteamOSCompatibilityResultDisplayType_Unsupported: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3;
var _ = {};
_(_, {
  k_ESteamDeckCompatibilityResultDisplayType_Informational: () => _,
  k_ESteamDeckCompatibilityResultDisplayType_Invisible: () => _,
  k_ESteamDeckCompatibilityResultDisplayType_Playable: () => _,
  k_ESteamDeckCompatibilityResultDisplayType_Unsupported: () => _,
  k_ESteamDeckCompatibilityResultDisplayType_Verified: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3,
  _ = 4;
var _ = {};
_(_, {
  k_ECommentThreadTypeClan: () => _,
  k_ECommentThreadTypeClanAnnouncement: () => _,
  k_ECommentThreadTypeClanCuratedApp: () => _,
  k_ECommentThreadTypeClanEvent: () => _,
  k_ECommentThreadTypeForumTopic: () => _,
  k_ECommentThreadTypeInvalid: () => _,
  k_ECommentThreadTypeMax: () => _,
  k_ECommentThreadTypeModeratorMessage: () => _,
  k_ECommentThreadTypeNewsPost: () => _,
  k_ECommentThreadTypeProfile: () => _,
  k_ECommentThreadTypePublishedFile_Announcement: () => _,
  k_ECommentThreadTypePublishedFile_Developer: () => _,
  k_ECommentThreadTypePublishedFile_Public: () => _,
  k_ECommentThreadTypeQAndASession: () => _,
  k_ECommentThreadTypeRecommendation: () => _,
  k_ECommentThreadTypeScreenshot_Deprecated: () => _,
  k_ECommentThreadTypeTest: () => _,
  k_ECommentThreadTypeUserReceivedNewGame: () => _,
  k_ECommentThreadTypeUserStatusPublished: () => _,
  k_ECommentThreadTypeVideo_Deprecated: () => _,
  k_ECommentThreadTypeWorkshopAccount_Developer: () => _,
  k_ECommentThreadTypeWorkshopAccount_Public: () => _,
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
  _ = 21;
var _ = {};
_(_, {
  k_EAsyncGameSessionUserStateDone: () => _,
  k_EAsyncGameSessionUserStateReadyForAction: () => _,
  k_EAsyncGameSessionUserStateUnknown: () => _,
  k_EAsyncGameSessionUserStateWaitingForOthers: () => _,
});
var _ = -1,
  _ = 0,
  _ = 1,
  _ = 2;
var _ = {};
_(_, {
  k_EAppTypeApplication: () => _,
  k_EAppTypeBeta: () => _,
  k_EAppTypeComic: () => _,
  k_EAppTypeConfig: () => _,
  k_EAppTypeDLC: () => _,
  k_EAppTypeDemo: () => _,
  k_EAppTypeDepotOnly: () => _,
  k_EAppTypeDeprected: () => _,
  k_EAppTypeDriver: () => _,
  k_EAppTypeFranchise: () => _,
  k_EAppTypeGame: () => _,
  k_EAppTypeGuide: () => _,
  k_EAppTypeHardware: () => _,
  k_EAppTypeInvalid: () => _,
  k_EAppTypeMusicAlbum: () => _,
  k_EAppTypePlugin: () => _,
  k_EAppTypeSeries: () => _,
  k_EAppTypeShortcut: () => _,
  k_EAppTypeTool: () => _,
  k_EAppTypeVideo: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 4,
  _ = 8,
  _ = 16,
  _ = 32,
  _ = 64,
  _ = 128,
  _ = 256,
  _ = 512,
  _ = 1024,
  _ = 2048,
  _ = 4096,
  _ = 8192,
  _ = 16384,
  _ = 32768,
  _ = 65536,
  _ = 1073741824,
  _ = -2147483648;
var _ = {};
_(_, {
  k_EResolutionAutomation_FullyAutomated: () => _,
  k_EResolutionAutomation_MAX: () => _,
  k_EResolutionAutomation_Manual: () => _,
  k_EResolutionAutomation_PartiallyAutomated: () => _,
});
var _ = 0,
  _ = 1,
  _ = 2,
  _ = 3;
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
