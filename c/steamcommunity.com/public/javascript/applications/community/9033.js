"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9033],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { value: _, onValueChange: _, label: _, tooltip: _ } = _,
          [_, _] = (0, _.useState)(void 0);
        let _;
        return (
          ((_ && _.length > 0) || _) &&
            (_ =
              void 0 === _
                ? (0, _.jsx)("span", {
                    children: _._.LocalizeReact(
                      "#SteamURLAccepted",
                      (0, _.jsx)(_._, {
                        color: "green-8",
                      }),
                    ),
                  })
                : (0, _.jsx)("span", {
                    children: _._.Localize("#SteamURLInvalid"),
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
                value: null != _ ? _ : _,
                valueToString: (_) => _,
                valueFromString: (_) => _,
                clearable: !1,
                checkValidText: () => void 0 === _,
                onValueChange: (_) => {
                  Boolean(
                    ((null == _ ? void 0 : _.length) > 8 &&
                      (null == _
                        ? void 0
                        : _.startsWith("https://store.steampowered.com/"))) ||
                      (null == _
                        ? void 0
                        : _.startsWith("https://steamcommunity.com/")) ||
                      (null == _
                        ? void 0
                        : _.startsWith("https://help.steampowered.com/")),
                  )
                    ? (__webpack_require__(_), _(void 0))
                    : _(_);
                },
                afterContent: _,
              }),
            ],
          })
        );
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const { settings: _, fnOnUpdate: _ } = _,
          [_, _] = (0, _.useState)(!!_),
          [_, _, _, _] = (0, _._)(() => {
            var _, _, _, _;
            return [
              null !==
                (_ =
                  null == _
                    ? void 0
                    : _.collection_time_term_and_conditions_url) && void 0 !== _
                ? _
                : "",
              null !== (_ = null == _ ? void 0 : _.collection_rtime_end) &&
              void 0 !== _
                ? _
                : 0,
              null !==
                (_ = null == _ ? void 0 : _.collection_time_learn_more_url) &&
              void 0 !== _
                ? _
                : "",
              null !== (_ = null == _ ? void 0 : _.waiting_learn_more_url) &&
              void 0 !== _
                ? _
                : "",
            ];
          });
        return _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_._, {
                  children: "Shuffle Settings",
                }),
                (0, _.jsx)("hr", {}),
                (0, _.jsx)(_, {
                  label: "Shuffle Pool Terms and Conditions URLs",
                  tooltip:
                    "Host this on the store, community or help wiki. If provided, then joining the pool requires accepting these terms.",
                  value: _,
                  onValueChange: (_) => {
                    const _ = _
                      ? {
                          ..._,
                        }
                      : {};
                    (_.collection_time_term_and_conditions_url = _),
                      __webpack_require__(_);
                  },
                }),
                (0, _.jsx)(_, {
                  label: "Shuffle Pool Learn More URL",
                  tooltip:
                    "Host this on the hardware blog or help site FAQ. Help regular people understand whats going on.",
                  value: _,
                  onValueChange: (_) => {
                    const _ = _
                      ? {
                          ..._,
                        }
                      : {};
                    (_.collection_time_learn_more_url = _),
                      __webpack_require__(_);
                  },
                }),
                (0, _.jsx)(_._, {
                  label: "Unix Epoch Time Shuffle Closes",
                  tooltip:
                    "This will be displayed to the user, they can enter the shuffle upto this point. Purely for display purpose. Switching out of shuffle is control by server; if not provided we use release date of the hardware item instead",
                  rtime: _,
                  onValueChange: (_) => {
                    const _ = _
                      ? {
                          ..._,
                        }
                      : {};
                    (_.collection_rtime_end = _), __webpack_require__(_);
                  },
                }),
                (0, _.jsx)(_._, {
                  children: "Waitlist Settings",
                }),
                (0, _.jsx)("hr", {}),
                (0, _.jsx)(_, {
                  label: "Waitlist 'Learn More' Url",
                  tooltip:
                    "Details about the waiting list for the Steam user to read.",
                  value: _,
                  onValueChange: (_) => {
                    const _ = _
                      ? {
                          ..._,
                        }
                      : {};
                    (_.waiting_learn_more_url = _), __webpack_require__(_);
                  },
                }),
              ],
            })
          : (0, _.jsxs)(_._, {
              gap: "1",
              direction: "column",
              children: [
                (0, _.jsx)(_._, {
                  size: "4",
                  children: "Enable Advanced Settings",
                }),
                (0, _.jsx)(_._, {
                  checked: _,
                  onChange: (_) => _(!0),
                }),
              ],
            });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
