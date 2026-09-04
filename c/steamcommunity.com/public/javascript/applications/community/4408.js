(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [4408],
  {
    chunkid: (module) => {
      module.exports = {
        TOCLink: "_2bD720Zjxza1mHMOZ6URrU",
        LearnMoreLink: "_2njnWu1if_8cDnjWtpuBMQ",
        Terms: "_2oU42aqXAKCuhoH2GmPkWD",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          ShuffleActions: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        var _;
        const {
            hardwareDetail: _,
            reservationAdvancedSettings: _,
            storeItemReleaseInfo: _,
            bShuffleInProgress: _,
            bHasSomeReservation: _,
          } = _,
          [_, _] = (0, _._)(() => [
            null == _ ? void 0 : _.collection_rtime_end,
            null == _ ? void 0 : _.collection_time_learn_more_url,
          ]),
          [_, _] = (0, _.useState)({}),
          _ = (0, _.useCallback)(
            (_) => {
              _((_) => ({
                ..._,
                [_.packageid]: _,
              }));
            },
            [_],
          ),
          _ = (0, _._)(_);
        if (_)
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.expecteddate_str),
            children: [
              _._.Localize(
                _
                  ? "#Reservation_Pool_InProgress_Joined"
                  : "#Reservation_Pool_InProgress_NotJoined",
              ),
              _ &&
                (0, _.jsx)("a", {
                  className: _().LearnMoreLink,
                  href: _,
                  children: _._.Localize("#Button_Learn"),
                }),
            ],
          });
        const _ = (0, _._)(_.reservation_state),
          _ = !!_ && !!_.collection_time_term_and_conditions_url,
          _ = null !== (_ = _[_.packageid]) && void 0 !== _ ? _ : !_;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)("div", {
              className: (0, _._)(_.expecteddate_str),
              children: [
                _._.LocalizeReact(
                  "#Reservation_InPool_Message",
                  _
                    ? (0, _.jsx)(_._, {
                        rtime: _,
                      })
                    : _,
                ),
                _ &&
                  (0, _.jsx)("a", {
                    className: _().LearnMoreLink,
                    href: _,
                    children: _._.Localize("#Button_Learn"),
                  }),
              ],
            }),
            _ &&
              (0, _.jsx)(
                _._,
                {
                  checked: _ || _,
                  onChange: _,
                  "data-checkbox": "",
                  disabled: _,
                  children: (0, _.jsxs)("div", {
                    className: _().Terms,
                    children: [
                      " ",
                      (0, _._)(
                        _._.Localize("#Reservation_JoinPool_Terms"),
                        (0, _.jsx)("a", {
                          href: _.collection_time_term_and_conditions_url,
                          className: _().TOCLink,
                          onClick: (_) => _.stopPropagation(),
                        }),
                      ),
                    ],
                  }),
                },
                _.packageid,
              ),
            _._.logged_in
              ? (0, _.jsx)(_, {
                  hardwareDetail: _,
                  bUserAcceptedTerms: !_ || _,
                  onLeaveShuffleList: () => _(!1),
                })
              : (0, _.jsx)("div", {
                  className: (0, _._)(_.reserverow),
                  children: (0, _.jsx)(_._, {
                    label: _._.Localize("#Reservation_Pool_NotSignedIn"),
                    strDialogDesc: _._.Localize(
                      "#Reservation_Pool_NotSignedIn_Desc",
                    ),
                  }),
                }),
          ],
        });
      }
      function _(_) {
        const {
          hardwareDetail: _,
          bUserAcceptedTerms: _,
          onLeaveShuffleList: _,
        } = _;
        switch (_.reservation_state) {
          case _._.k_EPurchaseReservationState_NotReserved:
          case _._.k_EPurchaseReservationState_Consumed:
          case _._.k_EPurchaseReservationState_Cancelled:
            return (0, _.jsx)(_._, {
              toolTipContent: _
                ? void 0
                : _._.Localize("#Reservation_JoinPool_ClickTerms"),
              children: (0, _.jsx)(_._, {
                bInputDisabled: !_,
                packageid: _.packageid,
                label: _._.Localize("#Reservation_JoinPool"),
              }),
            });
          case _._.k_EPurchaseReservationState_Reserved:
          case _._.k_EPurchaseReservationState_Allocated:
          default:
            return (0, _.jsx)(_._, {
              packageid: _.packageid,
              strAction: _._.Localize("#Reservation_Cancel_Pool"),
              strDesc: _._.Localize("#Reservation_Cancel_Pool_Desc"),
              onCancelSucceeded: _,
            });
          case _._.k_EPurchaseReservationState_UnavailableRegion:
            return (0, _.jsx)(_._, {});
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { rtime: _ } = _;
        return _
          ? (0, _.jsx)(_._, {
              dateAndTime: _,
              bSingleLine: !0,
            })
          : null;
      }
      function _(_) {
        const { rtime: _, onValueChange: _, label: _, tooltip: _ } = _;
        let _;
        return (
          _ > 0 &&
            (_ = (0, _.jsx)(_, {
              rtime: _,
            })),
          (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                children: [
                  _,
                  _ &&
                    (0, _.jsx)(_._, {
                      tooltip: _,
                    }),
                ],
              }),
              (0, _.jsx)(_._, {
                value: _,
                valueToString: (_) => _.toString(),
                valueFromString: (_) => Number.parseInt(_),
                clearable: !1,
                onValueChange: (_) => {
                  __webpack_require__(Number(_));
                },
                afterContent: _,
              }),
            ],
          })
        );
      }
    },
  },
]);
