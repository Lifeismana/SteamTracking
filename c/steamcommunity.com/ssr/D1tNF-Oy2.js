var _ = _(_(), 1),
  _ = `PC-T-1dYXe4-`,
  _ = `HoPMNUPOwr8-`,
  _ = _();
function _(_) {
  let { value: _, onValueChange: _, options: _, getOptionLabel: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    value: _,
    onValueChange: _,
    ..._,
    children: _.map((_) => {
      let _ = _ ? _(_) : _;
      return (0, _.jsx)(
        _.Option,
        {
          value: _,
          children: _,
        },
        _,
      );
    }),
  });
}
function _(_) {
  let { value: _, onValueChange: _, render: _, ..._ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)((_, _) => {
      if (!_.current) return;
      let _ = [..._.current.querySelectorAll(`[data-radio-id]`)];
      if (_.length !== 0)
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          if (_.dataset.radioId && _.dataset.radioId === _) {
            let _ = _[(_ + _ + _.length) % _.length];
            _.click(), _.focus();
          }
        }
    }, []),
    _ = (0, _.useCallback)((_) => _(_, 1), [_]),
    _ = (0, _.useCallback)((_) => _(_, -1), [_]),
    _ = (0, _.useMemo)(
      () => ({
        value: _,
        onValueChange: _,
        onSelectNext: _,
        onSelectPrev: _,
      }),
      [_, _, _, _],
    ),
    _ = {
      role: `radiogroup`,
      ref: _,
      ..._,
    },
    _ = _(
      _,
      (0, _.jsx)(_, {
        direction: `column`,
        gap: `2`,
        role: `radiogroup`,
        ..._,
      }),
      _,
    );
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { value: _, ref: _, children: _, render: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useId)();
  if (!_)
    return (
      console.error(
        `<RadioGroup.Option> must be rendered within a <RadioGroup.Root>`,
      ),
      null
    );
  let { value: _, onValueChange: _, onSelectNext: _, onSelectPrev: _ } = _,
    _ = _ === _,
    _ = () => {
      _ || _(_);
    };
  return _(
    _,
    (0, _.jsx)(_, {}),
    {
      role: `radio`,
      "aria-checked": _,
      "data-radio-id": _,
      onClick: _,
      onKeyDown: (_) => {
        switch (_.key) {
          case ` `:
            _(), _.preventDefault(), _.stopPropagation();
            break;
          case `ArrowRight`:
          case `ArrowDown`:
            _(_), _.preventDefault(), _.stopPropagation();
            break;
          case `ArrowLeft`:
          case `ArrowUp`:
            _(_), _.preventDefault(), _.stopPropagation();
            break;
        }
      },
      tabIndex: _ ? 0 : -1,
      ref: _,
      children: _,
    },
    {
      bSelected: _,
    },
  );
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    cursor: `default`,
    gap: `2`,
    className: _,
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
var _ = Object.assign(_, {
    Root: _,
    Option: _,
  }),
  _ = (0, _.createContext)(null),
  _ = _(_(), 1),
  _ = `UNowfeldbNg-`,
  _ = `hIuyWTKvAow-`,
  _ = `tYCWuqm2E-A-`,
  _ = `Yd0pZ1PLSk0-`,
  _ = `T0szdMMjqYs-`,
  _ = `kjJIGFdaMmQ-`,
  _ = `_61MokN1NYBE-`,
  _ = `CNVbvjQ6ajc-`,
  _ = `dFQsz3Wt3-0-`,
  _ = `MF-NOtRcYFc-`,
  _ = `Sw3NXcvOA4Y-`,
  _ = `Frzkb5XE-n8-`,
  _ = `o14JIlvi52E-`,
  _ = `UEWCsjQUwf4-`,
  _ = `N2xb8hd8IUY-`,
  _ = `G-Hg05Q3k74-`,
  _ = `okqHAoX2fxk-`,
  _ = `eJ8bRcenpT8-`,
  _ = `otbpD5L-0AE-`,
  _ = `HP0gIdHVPOI-`,
  _ = `cFH83xfcYkA-`,
  _ = `C5HtJDneLfY-`;
function _(_) {
  let { details: _ } = _,
    { data: _ } = _(_.creator),
    _ = _(_) + `/myworkshopfiles/?appid=${_.consumer_appid}`,
    _ = _?.public_data?.persona_name;
  return !_ || !_
    ? (0, _.jsx)(`div`, {
        className: _,
        children: `\xA0`,
      })
    : (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          gamepadFocusable: !1,
          _: _,
          children: _.Localize(`#Workshop_Browse_Author_Link`, _),
        }),
      });
}
function _(_) {
  let { details: _ } = _,
    { setQuickViewItem: _ } = _();
  return (0, _.jsx)(_.Fragment, {
    children: (0, _.jsx)(_, {
      toolTipContent: _.Localize(`#Workshop_Item_QuickView`),
      direction: `right`,
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
      _(`/workshop/actions`, `GetUserVoteSummary`, ..._),
    ),
    _ = _((..._) => _(`/workshop/actions`, `GetCurrentUserFriendsList`, ..._)),
    _ = _.logged_in && _(_.file_type),
    _ = _(_.consumer_appid, 1, _.file_type, _.publishedfileid),
    _ = _ && _.cansubscribefrombrowseview,
    _ = (0, _.jsx)(_, {
      details: _,
    }),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        _.star_rating == _.k_NotEnoughRatings &&
          _.Localize(`#Workshop_ItemDetails_NotEnoughRatings`),
        (_.star_rating ?? 0) > _.k_NotEnoughRatings &&
          _.LocalizePlural(
            `#Workshop_ItemDetails_NumRatings`,
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
    className: (0, _.default)(_, _ && `hQAQZRtPRUc-`, _ && `_4689JT-he2o-`),
    children: [
      (0, _.jsx)(_, {
        hoverContent: _,
        popoverProps: {
          placement: `right-start`,
          width: `content`,
        },
        nDelayShowMS: 250,
        bTooltipMode: !0,
        children: (0, _.jsx)(_, {
          className: (0, _.default)(_, _ && `hQAQZRtPRUc-`),
          details: _,
          forcedWidth: _ ? 1024 : void 0,
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(_, {
                details: _,
                className: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  details: _,
                  className: `TArgjJMgAxI-`,
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
                  className: `I4wDZC7HFQ0-`,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: `hs0g5InegGM-`,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: `hfgNPx20Ie4-`,
                }),
              _ &&
                (0, _.jsx)(_, {
                  className: `ZqNGeDS-pVc-`,
                }),
            ],
          }),
          (0, _.jsx)(_, {
            toolTipContent: _,
            direction: `top`,
            nBodyAlignment: 0,
            nDelayShowMS: 250,
            children: (0, _.jsx)(_, {
              details: _,
              className: _,
            }),
          }),
          (0, _.jsx)(`div`, {
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
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              _ &&
                !_.IN_GAMEPADUI &&
                (0, _.jsx)(_, {
                  details: _,
                  className: `-YJTG5mf4Mw-`,
                }),
              !_.IN_GAMEPADUI &&
                (0, _.jsx)(_, {
                  details: _,
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
var _ = (function (_) {
  return (
    (_[(_.k_RatingsData = 0)] = `k_RatingsData`),
    (_[(_.k_SubscriberData = 1)] = `k_SubscriberData`),
    (_[(_.k_LastUpdated = 2)] = `k_LastUpdated`),
    (_[(_.k_TimeCreated = 3)] = `k_TimeCreated`),
    (_[(_.k_PlaytimeData = 4)] = `k_PlaytimeData`),
    _
  );
})({});
function _(_) {
  let { details: _, rgAdditionalInfo: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _(_.publishedfileid, (..._) =>
      _(`/workshop/actions`, `GetUserVoteSummary`, ..._),
    ),
    _ = _((..._) => _(`/workshop/actions`, `GetCurrentUserFriendsList`, ..._)),
    _ = _.logged_in && _(_.file_type),
    _ = _(_.consumer_appid, 1, _.file_type, _.publishedfileid),
    _ = _ && _.cansubscribefrombrowseview,
    _ = (0, _.jsx)(_, {
      details: _,
    }),
    _ = (0, _.jsxs)(_.Fragment, {
      children: [
        _.star_rating == _.k_NotEnoughRatings &&
          _.Localize(`#Workshop_ItemDetails_NotEnoughRatings`),
        (_.star_rating ?? 0) > _.k_NotEnoughRatings &&
          _.LocalizePlural(
            `#Workshop_ItemDetails_NumRatings`,
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
  return (0, _.jsx)(_, {
    hoverContent: _,
    popoverProps: {
      placement: `right-start`,
      width: `content`,
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      className: (0, _.default)(_, _ && `_4689JT-he2o-`),
      children: [
        (0, _.jsx)(_, {
          className: (0, _.default)(_),
          details: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      className: _,
                      truncate: !0,
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
                  direction: `row`,
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      toolTipContent: _,
                      direction: `top`,
                      nBodyAlignment: 0,
                      nDelayShowMS: 250,
                      children: (0, _.jsx)(_, {
                        details: _,
                        className: _,
                      }),
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        (0, _.jsx)(_, {
                          details: _,
                          className: _,
                        }),
                        _ &&
                          (0, _.jsx)(_, {
                            details: _,
                            className: `TArgjJMgAxI-`,
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
                            className: `I4wDZC7HFQ0-`,
                          }),
                        _ &&
                          (0, _.jsx)(_, {
                            className: `hs0g5InegGM-`,
                          }),
                        _ &&
                          (0, _.jsx)(_, {
                            className: `hfgNPx20Ie4-`,
                          }),
                        _ &&
                          (0, _.jsx)(_, {
                            className: `ZqNGeDS-pVc-`,
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(_, {
              details: _,
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _?.map((_) => {
                switch (_) {
                  case 0:
                    return _;
                  case 3:
                    return (
                      _.Localize(`#Workshop_ItemDetails_TimestampCreated`) +
                      ` ` +
                      _(_.time_created ?? 0)
                    );
                  case 2:
                    return (
                      _.Localize(`#Workshop_ItemDetails_TimestampUpdated`) +
                      ` ` +
                      _(_.time_updated ?? 0)
                    );
                  case 1:
                    return (
                      _.Localize(
                        `#Workshop_ItemDetails_Stats_CurrentSubscribers`,
                      ) +
                      ` ` +
                      _(_.lifetime_subscriptions ?? 0)
                    );
                  case 4:
                    return (
                      _.Localize(
                        `#Workshop_ItemDetails_Stats_LifetimePlaytimeSessions`,
                      ) +
                      ` ` +
                      _(
                        _.lifetime_playtime_sessions
                          ? parseInt(_.lifetime_playtime_sessions)
                          : 0,
                      )
                    );
                }
              }),
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ &&
                  !_.IN_GAMEPADUI &&
                  (0, _.jsx)(_, {
                    details: _,
                    className: `-YJTG5mf4Mw-`,
                  }),
                !_.IN_GAMEPADUI &&
                  (0, _.jsx)(_, {
                    details: _,
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _(_) {
  let { details: _ } = _,
    { onBrowseHandler: _ } = _(),
    _ = _(_.tags ?? [], _.file_type),
    _ = (_) => {
      _.tag &&
        _({
          required_tags: [_.tag],
          excluded_tags: [],
        });
    };
  return _.length == 0
    ? null
    : (0, _.jsx)(_, {
        className: _,
        gap: `1`,
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              size: `1`,
              color: `dull`,
              onClick: () => _(_),
              children: _.display_name ?? _.tag,
            },
            _.tag,
          ),
        ),
      });
}
function _(_) {
  let { details: _ } = _,
    _ = _(_);
  _.length != 0 && (_ += `...`);
  let { numChildItems: _, numChildCollections: _ } = _(_);
  return (0, _.jsx)(_, {
    hoverContent: (0, _.jsx)(_, {
      details: _,
    }),
    popoverProps: {
      placement: `right-start`,
      width: `content`,
    },
    nDelayShowMS: 250,
    bTooltipMode: !0,
    children: (0, _.jsxs)(_, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          className: _,
          details: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsxs)(`div`, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      className: _,
                      truncate: !0,
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
                  direction: `row`,
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      details: _,
                      className: _,
                    }),
                    (0, _.jsxs)(`div`, {
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
            (0, _.jsx)(`div`, {
              className: _,
              children: _,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                _ != 0 &&
                  (0, _.jsx)(`div`, {
                    children: _.LocalizePlural(
                      `#Workshop_Collection_NumChildItems`,
                      _,
                      _(_),
                    ),
                  }),
                _ != 0 &&
                  (0, _.jsx)(`div`, {
                    children: _.LocalizePlural(
                      `#Workshop_Collection_NumChildCollections`,
                      _,
                      _(_),
                    ),
                  }),
              ],
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children:
                !_.IN_GAMEPADUI &&
                (0, _.jsx)(_, {
                  details: _,
                }),
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = `FARNJOhoPVw-`,
  _ = `ElNPWiho-mM-`,
  _ = `Mf04Mo5zORY-`,
  _ = `snLzX5LThtA-`,
  _ = `IJ1w5GUmBkU-`,
  _ = `G1UlW-HtkuA-`,
  _ = `BnJse4Jtj94-`,
  _ = `_9JBx6tfYpwc-`,
  _ = `dvp8BlxrmPk-`,
  _ = `Mf5YrU7S1dM-`,
  _ = `yJQP5CPJ-kQ-`;
function _(_) {
  return _({
    queryKey: [`GetUGCContributorData`, _],
    enabled: !1,
    staleTime: 1 / 0,
  });
}
function _(_) {
  let { contributor: _, appid: _, bLastContributor: _ } = _,
    _ = _(_.steamid);
  if (!_.data) return;
  let _ = _(_.data) + `/myworkshopfiles/?appid=${_}`,
    _ = _.data?.public_data?.persona_name ?? ``;
  return (0, _.jsxs)(`span`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        _: _,
        children: _,
      }),
      _ == 0 && `,`,
    ],
  });
}
function _(_) {
  let { details: _ } = _,
    _ = _.publishedfileid,
    _ = _(_);
  if (!_.data) return null;
  let _ = {
    steamid: _.creator ?? ``,
    split: 100,
    timeaccepted: _.time_created ?? 0,
  };
  return (0, _.jsxs)(_, {
    direction: `row`,
    gap: `1`,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _.Localize(`#Workshop_ItemDetails_CreatedBy`),
      }),
      _.data.contributors.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            contributor: _,
            appid: _.consumer_appid,
            bLastContributor: _ == _.data.contributors.length - 1,
          },
          _.steamid,
        ),
      ),
      _.data.contributors.length == 0 &&
        (0, _.jsx)(_, {
          contributor: _,
          appid: _.consumer_appid,
          bLastContributor: !0,
        }),
    ],
  });
}
function _(_) {
  let { dataTitle: _, dataValue: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
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
        direction: `column`,
        paddingTop: `3`,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Workshop_ItemDetails_Tags_Title`),
          }),
          (0, _.jsx)(_, {
            className: _,
            gap: `1`,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  size: `1`,
                  color: `dull`,
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
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => {
          let _ = Math.floor(_.contentRect.width / 102) - 1;
          _(_);
        },
        [102],
      ),
    ),
    [_, _] = (0, _.useState)(0),
    _ = _(
      (0, _.useCallback)(
        (_) => {
          let _ = Math.floor(_.contentRect.width / 102) - 1;
          _(_);
        },
        [102],
      ),
    ),
    _ = _.LocalizePlural(`#Workshop_Collection_NumChildItems`, _, _(_));
  _.file_type == 0 &&
    (_ = _.Localize(`#Workshop_ItemDetails_ItemDependencies`));
  let _ = _.LocalizePlural(`#Workshop_Collection_NumChildCollections`, _, _(_));
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.length != 0 &&
        (0, _.jsx)(_.Fragment, {
          children: (0, _.jsxs)(`div`, {
            className: `_2VK8hAwlDEs-`,
            children: [
              (0, _.jsx)(`div`, {
                className: `G1UlW-HtkuA-`,
                children: _,
              }),
              (0, _.jsxs)(_, {
                className: `K9zqQ-ov-0s-`,
                direction: `row`,
                gap: `1`,
                ref: _,
                children: [
                  _.slice(0, _).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        publishedfileid: _,
                        className: `SiYGAgf68UA-`,
                        imageClassName: `gYa60zhNWGg-`,
                        forcedWidth: 100,
                      },
                      _,
                    ),
                  ),
                  _ < _ &&
                    (0, _.jsx)(`div`, {
                      className: `mthASJ0xzwI-`,
                      children: _.Localize(
                        `#Workshop_Collection_ViewMore`,
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
          children: (0, _.jsxs)(`div`, {
            className: `_2VK8hAwlDEs-`,
            children: [
              (0, _.jsx)(`div`, {
                className: `G1UlW-HtkuA-`,
                children: _,
              }),
              (0, _.jsxs)(_, {
                className: `K9zqQ-ov-0s-`,
                direction: `row`,
                gap: `1`,
                ref: _,
                children: [
                  _.slice(0, _).map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        publishedfileid: _,
                        className: `SiYGAgf68UA-`,
                        imageClassName: `gYa60zhNWGg-`,
                        forcedWidth: 100,
                      },
                      _,
                    ),
                  ),
                  _ < _ &&
                    (0, _.jsx)(`div`, {
                      className: `mthASJ0xzwI-`,
                      children: _.Localize(
                        `#Workshop_Collection_ViewMore`,
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
  return !_ || !_
    ? null
    : (0, _.jsx)(_, {
        _: _,
        children: (0, _.jsx)(_, {
          src: _(_, `small_capsule`),
          alt: _.name ?? ``,
        }),
      });
}
function _(_) {
  return _({
    queryKey: [`GetUGCAppRelationships`, _],
    queryFn: async () =>
      await _(`/workshop/actions`, `GetUGCAppRelationships`, _),
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
          controller: `sharedfiles`,
          method: `filedetails`,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.Localize(`#Workshop_ItemDetails_RequiredDLC_Desc`),
            }),
            (0, _.jsx)(_, {
              className: _,
              direction: `row`,
              gap: `1`,
              wrap: `wrap`,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _.appid ?? 0,
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
      if (!_.data?.file_description) return ``;
      if (_.data.file_description.length > 500) {
        let _ = [..._.data.file_description].slice(0, 500).join(``) + `...`;
        return _.ParseBBCode(_, null);
      }
      return _.data.file_description;
    }, [_.data?.file_description, _]),
    [_, _] = (0, _.useState)(!1),
    _ = _(
      (0, _.useCallback)((_) => {
        let _ = _.target.scrollHeight > _.target.clientHeight;
        _(_);
      }, []),
    );
  return (0, _.jsxs)(_, {
    className: _,
    direction: `column`,
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
              className: `_12HeSvxAVxw-`,
              direction: {
                initial: `column`,
                _: `row`,
              },
              gap: `5`,
              children: [
                _.data &&
                  _.file_type != 2 &&
                  (0, _.jsx)(_, {
                    details: _.data,
                    className: `PG8eWT98j-E-`,
                  }),
                (0, _.jsxs)(_, {
                  className: `ZF1OEu-0zDw-`,
                  direction: `column`,
                  gap: `1`,
                  children: [
                    (0, _.jsxs)(_, {
                      className: `ICgWfpvzXq0-`,
                      justify: `between`,
                      children: [
                        (0, _.jsx)(_, {
                          size: {
                            initial: `5`,
                            _: `6`,
                            _: `7`,
                          },
                          weight: `heavy`,
                          children: (0, _.jsx)(_, {
                            _: _(_.publishedfileid),
                            children: _.title,
                          }),
                        }),
                        _.file_type != 1 &&
                          (0, _.jsxs)(_, {
                            direction: `column`,
                            align: `end`,
                            className: `_0WLDCeFS89w-`,
                            children: [
                              (0, _.jsx)(_, {
                                details: _,
                                className: `K3iOPiZMgPo-`,
                              }),
                              _.star_rating == _.k_NotEnoughRatings &&
                                _.Localize(
                                  `#Workshop_ItemDetails_NotEnoughRatings`,
                                ),
                              (0, _.jsx)(_, {
                                size: {
                                  initial: `3`,
                                  _: `4`,
                                },
                                children:
                                  (_.star_rating ?? 0) > _.k_NotEnoughRatings &&
                                  _.LocalizePlural(
                                    `#Workshop_ItemDetails_NumRatings`,
                                    _.total_votes ?? 0,
                                    _(_.total_votes ?? 0),
                                  ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      className: `pdi9awCQLWQ-`,
                      gap: `1`,
                      children: (0, _.jsx)(_, {
                        details: _,
                      }),
                    }),
                    (0, _.jsxs)(_, {
                      direction: `row`,
                      gap: `8`,
                      paddingTop: `3`,
                      className: `B0grrs7WUy0-`,
                      children: [
                        (0, _.jsxs)(`div`, {
                          className: `uKb55YlDtVY-`,
                          children: [
                            (0, _.jsx)(_, {
                              dataTitle: _.Localize(
                                `#Workshop_ItemDetails_TimestampCreated`,
                              ),
                              dataValue: _(_.time_created ?? 0),
                            }),
                            _.time_created != _.time_updated &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_TimestampUpdated`,
                                ),
                                dataValue: _(_.time_updated ?? 0),
                              }),
                            _.file_type == 0 &&
                              _.file_size &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_FileSize`,
                                ),
                                dataValue: _(_.file_size, {
                                  nDigitsAfterDecimal: 3,
                                }),
                              }),
                          ],
                        }),
                        (0, _.jsxs)(`div`, {
                          className: `uKb55YlDtVY-`,
                          children: [
                            _.views != 0 &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_Stats_UniqueVisitors`,
                                ),
                                dataValue: _(_.views ?? 0),
                              }),
                            _.subscriptions != 0 &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_Stats_CurrentSubscribers`,
                                ),
                                dataValue: _(_.subscriptions ?? 0),
                              }),
                            _.favorited != 0 &&
                              (0, _.jsx)(_, {
                                dataTitle: _.Localize(
                                  `#Workshop_ItemDetails_Stats_CurrentFavorites`,
                                ),
                                dataValue: _(_.favorited ?? 0),
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      details: _,
                      onSelectTag: _,
                    }),
                    (0, _.jsx)(_, {
                      gap: `1`,
                      direction: `column`,
                      paddingTop: `3`,
                      className: (0, _.default)(
                        `_3xNZB2yM8Qc-`,
                        _ && `WNFzFMvJ3V4-`,
                      ),
                      ref: _,
                      children:
                        _ &&
                        (0, _.jsx)(_, {
                          size: {
                            initial: `3`,
                            _: `4`,
                          },
                          children: _,
                        }),
                    }),
                    (0, _.jsxs)(_, {
                      gap: `1`,
                      direction: `column`,
                      paddingTop: `3`,
                      className: `zzv0VHl-hZg-`,
                      children: [
                        (0, _.jsx)(_, {
                          details: _.data ?? _,
                        }),
                        (0, _.jsx)(_, {
                          details: _.data ?? _,
                        }),
                        (0, _.jsx)(_, {
                          details: _,
                          onClick: () => {
                            _({
                              section: `readytouseitems`,
                              childpublishedfileid: _.publishedfileid,
                            }),
                              _();
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              className: `vLpNamDBSBE-`,
              direction: `row`,
              gap: `3`,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    direction: `row`,
                    gap: `1`,
                    children: (0, _.jsx)(_, {
                      details: _.data ?? _,
                      size: `2`,
                    }),
                  }),
                (0, _.jsxs)(_, {
                  direction: `row`,
                  gap: `1`,
                  children: [
                    (0, _.jsx)(_, {
                      details: _,
                      size: `2`,
                    }),
                    (0, _.jsx)(_, {
                      details: _,
                      size: `2`,
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  details: _,
                  size: `2`,
                }),
                (0, _.jsx)(_, {
                  details: _,
                  size: `2`,
                }),
                (0, _.jsx)(_, {
                  details: _.data,
                  size: `2`,
                  className: `E2ONW5pdzp8-`,
                  classNameReaction: `bFR2YZzwFQ8-`,
                }),
              ],
            }),
          ],
        }),
      !_.data &&
        (0, _.jsx)(_, {
          justify: `center`,
          align: `center`,
          flexGrow: `1`,
          children: (0, _.jsx)(_, {
            size: `5`,
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
        gap: `5`,
        direction: `row`,
        children: [
          (0, _.jsx)(_, {
            color: `accent`,
            variant: `ghost`,
            disabled: _ == 0,
            onClick: () => _(_ - 1),
            size: `3`,
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
            color: `accent`,
            variant: `ghost`,
            disabled: _ == _.length - 1,
            onClick: () => _(_ + 1),
            size: `3`,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      }),
    ],
  });
}
var _ = `U5oHEUJR3KU-`,
  _ = `zsG6BJvEtlU-`,
  _ = `hBHIQ0nx1yU-`,
  _ = [
    `#Workshop_SearchTarget_All`,
    `#Workshop_SearchTarget_Title`,
    `#Workshop_SearchTarget_Description`,
  ];
function _(_) {
  let { appName: _, bUseDebouncedValue: _, navRef: _ } = _,
    {
      onBrowseHandler: _,
      searchText: _,
      setSearchText: _,
      searchTextTarget: _,
      setSearchTextTarget: _,
    } = _(),
    _ = (0, _.useRef)(!1),
    _ = _.Localize(`#Workshop_Menu_Search`, _),
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
        browse_sort: `toprated`,
        search_text: ``,
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
      (_.length == 0
        ? _({
            search_text: _,
          })
        : _({
            browse_sort: `textsearch`,
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
    _ = (_) => _.Localize(_[_]);
  _();
  let [_, _] = (0, _.useState)(!1),
    _ = _.Localize(`#Workshop_Search_Help_Example_Red`),
    _ = _.Localize(`#Workshop_Search_Help_Example_Blue`),
    _ = _.Localize(`#Workshop_Search_Help_Example_Green`),
    _ = _.Localize(`#Workshop_Search_Help_Example_Room`);
  return (0, _.jsxs)(_, {
    className: _,
    gap: `1`,
    navProps: {
      navRef: _,
    },
    children: [
      (0, _.jsx)(`form`, {
        onSubmit: _,
        children: (0, _.jsx)(
          _,
          {
            name: `SearchInput`,
            placeholder: _,
            value: _,
            onTextChange: _,
            onTextClear: _,
            onFocus: _,
            onBlur: _,
            maxLength: 64,
            clearable: !0,
          },
          `SearchText`,
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
          initial: `bottom-start`,
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
              children: (0, _.jsx)(`div`, {
                children: (0, _.jsx)(_, {
                  className: _,
                  gap: `2`,
                  direction: `column`,
                  children: (0, _.jsxs)(_, {
                    gap: `1`,
                    direction: `column`,
                    children: [
                      (0, _.jsx)(_, {
                        size: `4`,
                        children: _.Localize(
                          `#Workshop_SearchTarget_MenuTitle`,
                        ),
                      }),
                      (0, _.jsx)(_, {
                        options: _,
                        value: _,
                        onValueChange: _,
                        getOptionLabel: _,
                      }),
                      (0, _.jsxs)(_, {
                        marginTop: `3`,
                        direction: `column`,
                        children: [
                          (0, _.jsx)(_, {
                            size: `4`,
                            children: _.LocalizeReact(
                              `#Workshop_Search_Help`,
                              (0, _.jsx)(`code`, {
                                children: `AND`,
                              }),
                              (0, _.jsx)(`code`, {
                                children: `OR`,
                              }),
                              (0, _.jsx)(`code`, {
                                children: `NOT`,
                              }),
                              (0, _.jsx)(`code`, {
                                children: `+`,
                              }),
                              (0, _.jsx)(`code`, {
                                children: `-`,
                              }),
                            ),
                          }),
                          (0, _.jsxs)(`ul`, {
                            children: [
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_Example1`,
                                  (0, _.jsxs)(`code`, {
                                    children: [_, ` AND `, _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_Example2`,
                                  (0, _.jsxs)(`code`, {
                                    children: [_, ` OR `, _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_Example3`,
                                  (0, _.jsxs)(`code`, {
                                    children: [_, ` -`, _],
                                  }),
                                  _,
                                  _,
                                ),
                              }),
                            ],
                          }),
                          (0, _.jsx)(_, {
                            size: `4`,
                            children: _.Localize(
                              `#Workshop_Search_Help_Advanced`,
                            ),
                          }),
                          (0, _.jsxs)(`ul`, {
                            children: [
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_AdvancedExample1`,
                                  (0, _.jsxs)(`code`, {
                                    children: [`(`, _, ` OR `, _, `) AND `, _],
                                  }),
                                  _,
                                  _,
                                  _,
                                ),
                              }),
                              (0, _.jsx)(`li`, {
                                children: _.LocalizeReact(
                                  `#Workshop_Search_Help_AdvancedExample2`,
                                  (0, _.jsxs)(`code`, {
                                    children: [
                                      `(`,
                                      _,
                                      ` OR `,
                                      _,
                                      `) AND `,
                                      _,
                                      ` -`,
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
export { _, _, _, _, _, _, _ };
