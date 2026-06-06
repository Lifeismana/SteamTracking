var _ = _(_());
var _ = _(_()),
  _ = _.default.createContext({
    bForceShowCompatInfo: !1,
    bSteamOS: !1,
    bSteamDeck: !1,
  }),
  _ = () => _.default.useContext(_),
  _ = 0,
  _ = 1,
  _ = 2;
function _() {
  let { bForceShowCompatInfo: _, bSteamDeck: _, bSteamOS: _ } = _();
  return _
    ? _ || _ || _.FORCED_DISPLAY_MODE == "steamdeck"
      ? [!0, _]
      : [!0, _]
    : [!1, _];
}
function _(_) {
  let { _: _, className: _ } = _,
    { data: _ } = _(_);
  return _
    ? (0, _.jsx)(_, {
        category: _?.steam_deck_compat_category,
        className: _,
      })
    : null;
}
var _ = (_) => {
  let { category: _, className: _ } = _;
  if (!_) return null;
  let _ = _(_);
  return (0, _.jsxs)("div", {
    className: _(_, _),
    children: [
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {
        className: _,
      }),
    ],
  });
};
var _ = {
    [_.k_ESteamDeckCompatibilityCategory_Unsupported]: _,
    [_.k_ESteamDeckCompatibilityCategory_Playable]: _,
    [_.k_ESteamDeckCompatibilityCategory_Verified]: _,
    [_.k_ESteamDeckCompatibilityCategory_Unknown]: _,
  },
  _ = {
    [_.k_ESteamOSCompatibilityCategory_Unknown]: _,
    [_.k_ESteamOSCompatibilityCategory_Unsupported]: _,
    [_.k_ESteamOSCompatibilityCategory_Compatible]: _,
  };
function _(_) {
  return _[_] || _;
}
function _(_) {
  return _[_] || _;
}
var _ = {
  [_.k_ESteamDeckCompatibilityCategory_Verified]:
    "#DeckVerified_CategoryLabel_Verified",
  [_.k_ESteamDeckCompatibilityCategory_Playable]:
    "#DeckVerified_CategoryLabel_Playable",
  [_.k_ESteamDeckCompatibilityCategory_Unsupported]:
    "#DeckVerified_CategoryLabel_Unsupported",
  [_.k_ESteamDeckCompatibilityCategory_Unknown]:
    "#DeckVerified_CategoryLabel_Unknown",
};
var _ = {
  [_.k_ESteamOSCompatibilityCategory_Compatible]:
    "#SteamOS_CategoryLabel_Compatible",
  [_.k_ESteamOSCompatibilityCategory_Unsupported]:
    "#SteamOS_CategoryLabel_Unsupported",
  [_.k_ESteamOSCompatibilityCategory_Unknown]: "#SteamOS_CategoryLabel_Unknown",
};
var _ = {
  [_.k_ESteamDeckCompatibilityCategory_Verified]:
    "#DeckVerified_FilterLabel_Verified",
  [_.k_ESteamDeckCompatibilityCategory_Playable]:
    "#DeckVerified_FilterLabel_Verified_Playable",
  [_.k_ESteamDeckCompatibilityCategory_Unknown]:
    "#DeckVerified_FilterLabel_Verified_Playable_Unknown",
  [_.k_ESteamDeckCompatibilityCategory_Unsupported]:
    "#DeckVerified_FilterLabel_AllGames",
};
var _ = {
  [_.k_ESteamDeckCompatibilityCategory_Verified]:
    "#DeckVerified_FilterDescription_Verified",
  [_.k_ESteamDeckCompatibilityCategory_Playable]:
    "#DeckVerified_FilterDescription_Verified_Playable",
  [_.k_ESteamDeckCompatibilityCategory_Unknown]:
    "#DeckVerified_FilterDescription_Verified_Playable_Unknown",
  [_.k_ESteamDeckCompatibilityCategory_Unsupported]:
    "#DeckVerified_FilterDescription_AllGames",
};
var _ = {
  [_.k_ESteamOSCompatibilityCategory_Compatible]:
    "#SteamOS_FilterLabel_Compatible",
  [_.k_ESteamOSCompatibilityCategory_Unknown]:
    "#SteamOS_FilterLabel_Compatible_Unknown",
  [_.k_ESteamOSCompatibilityCategory_Unsupported]:
    "#SteamOS_FilterLabel_AllGames",
};
var _ = {
  [_.k_ESteamOSCompatibilityCategory_Compatible]:
    "#SteamOS_FilterDescription_Compatible",
  [_.k_ESteamOSCompatibilityCategory_Unknown]:
    "#SteamOS_FilterDescription_Compatible_Unknown",
  [_.k_ESteamOSCompatibilityCategory_Unsupported]:
    "#SteamOS_FilterDescription_AllGames",
};
export { _, _, _, _, _, _, _, _ };
