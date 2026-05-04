var _ = _(_());
var _ = _(_()),
  _ = _.default.createContext({
    bForceShowCompatInfo: !1,
    bSteamOS: !1,
    bSteamDeck: !1,
  }),
  _ = () => _.default.useContext(_);
function _() {
  let { bForceShowCompatInfo: _, bSteamDeck: _, bSteamOS: _ } = _();
  return _ && !_ ? [!0, 2] : _ || _ || _.ON_DECK ? [!0, 1] : [!1, 0];
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
    1: _,
    2: _,
    3: _,
    0: _,
  },
  _ = {
    0: _,
    1: _,
    2: _,
  };
function _(_) {
  return _[_] || _;
}
function _(_) {
  return _[_] || _;
}
var _ = {
  3: "#DeckVerified_CategoryLabel_Verified",
  2: "#DeckVerified_CategoryLabel_Playable",
  1: "#DeckVerified_CategoryLabel_Unsupported",
  0: "#DeckVerified_CategoryLabel_Unknown",
};
var _ = {
  2: "#SteamOS_CategoryLabel_Compatible",
  1: "#SteamOS_CategoryLabel_Unsupported",
  0: "#SteamOS_CategoryLabel_Unknown",
};
var _ = {
  3: "#DeckVerified_FilterLabel_Verified",
  2: "#DeckVerified_FilterLabel_Verified_Playable",
  0: "#DeckVerified_FilterLabel_Verified_Playable_Unknown",
  1: "#DeckVerified_FilterLabel_AllGames",
};
var _ = {
  3: "#DeckVerified_FilterDescription_Verified",
  2: "#DeckVerified_FilterDescription_Verified_Playable",
  0: "#DeckVerified_FilterDescription_Verified_Playable_Unknown",
  1: "#DeckVerified_FilterDescription_AllGames",
};
var _ = {
  2: "#SteamOS_FilterLabel_Compatible",
  0: "#SteamOS_FilterLabel_Compatible_Unknown",
  1: "#SteamOS_FilterLabel_AllGames",
};
var _ = {
  2: "#SteamOS_FilterDescription_Compatible",
  0: "#SteamOS_FilterDescription_Compatible_Unknown",
  1: "#SteamOS_FilterDescription_AllGames",
};
export { _, _, _, _, _ };
