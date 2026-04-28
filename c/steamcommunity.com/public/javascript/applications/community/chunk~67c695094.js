(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [7387],
  {
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
        GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
        Active: "_8XjrTFzaSA8ubHvHCu44L",
        GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
        GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
        GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
        VOWarning: "_3LaJynPDFfccGWUEtdltlt",
        StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
        StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
        StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = {};
      (_.arabic = () =>
        __webpack_require__._("chunkid").then(_._.bind(_, 6696, 19))),
        (_.brazilian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 58906, 19))),
        (_.bulgarian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 53473, 19))),
        (_.czech = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 83899, 19))),
        (_.danish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 84925, 19))),
        (_.dutch = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 69902, 19))),
        (_.english = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 80716, 19))),
        (_.finnish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 81663, 19))),
        (_.french = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 48484, 19))),
        (_.german = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 66810, 19))),
        (_.greek = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 13744, 19))),
        (_.hungarian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 62101, 19))),
        (_.indonesian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 68948, 19))),
        (_.italian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 2916, 19))),
        (_.japanese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 40195, 19))),
        (_.koreana = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 84259, 19))),
        (_.latam = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 24475, 19))),
        (_.norwegian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 36884, 19))),
        (_.polish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 15269, 19))),
        (_.portuguese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 96865, 19))),
        (_.romanian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 71391, 19))),
        (_.russian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 64933, 19))),
        (_.sc_schinese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 27503, 19))),
        (_.schinese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 44768, 19))),
        (_.spanish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 20876, 19))),
        (_.swedish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 75181, 19))),
        (_.tchinese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 89779, 19))),
        (_.thai = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 98970, 19))),
        (_.turkish = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 87996, 19))),
        (_.ukrainian = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 47306, 19))),
        (_.vietnamese = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 72539, 19)));
      const _ = (0, __webpack_require__("chunkid")._)(async function (_) {
        if (_[_]) return _[_]();
      });
      var _,
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        const _ = {
          year: "numeric",
          month: "short",
          day: "numeric",
          ..._,
        };
        return new Date(1e3 * _).toLocaleDateString((0, _._)(), _);
      }
      function _(_, _, _) {
        const _ = new Date(1e3 * _),
          _ = (0, _._)(),
          _ = {
            ...((null == _ ? void 0 : _.bForce24HourClock) ||
            (function (_) {
              const _ = new Date();
              return (
                _.setHours(15),
                _.toLocaleTimeString(_, {
                  hour: "numeric",
                }) ==
                  _.toLocaleTimeString(_, {
                    hour: "numeric",
                    hour12: !1,
                  })
              );
            })(_[0])
              ? {
                  hour: "numeric",
                  minute: "2-digit",
                  hourCycle: "h23",
                }
              : {
                  hour: "numeric",
                  minute: "2-digit",
                }),
            ..._,
          };
        return _.toLocaleTimeString(_, _);
      }
      function _(_, _, _) {
        return (
          (function (_, _ = !1, _ = !0) {
            const _ = {
              weekday: _ ? "long" : "short",
              day: "numeric",
              month: _ ? "long" : "short",
            };
            return _.toLocaleDateString((0, _._)(), _);
          })(new Date(1e3 * _), !1, !1) +
          " " +
          _(_, {
            bForce24HourClock: _,
          }) +
          " " +
          _
        );
      }
      function _(_) {
        const _ = Math.floor(_ / _._.PerYear),
          _ = Math.floor(_ / _._.PerMonth),
          _ = Math.floor((_ % _._.PerMonth) / _._.PerDay),
          _ = Math.floor((_ % _._.PerDay) / _._.PerHour),
          _ = Math.floor((_ % _._.PerHour) / _._.PerMinute);
        return (
          (_ %= _._.PerMinute),
          _ > 0
            ? _.Localize("#TimeRemaining_MoreThanOneYear")
            : _ > 0
              ? _.Localize("#TimeRemaining_MonthsDays", _, _)
              : _ > 0
                ? _.Localize(
                    "#TimeRemaining_DaysHoursMinutes",
                    _,
                    _.toString().padStart(2, "0"),
                    _.toString().padStart(2, "0"),
                  )
                : _ > 0
                  ? _.Localize(
                      "#TimeRemaining_HoursMinutesSeconds",
                      _.toString().padStart(2, "0"),
                      _.toString().padStart(2, "0"),
                      _.toString().padStart(2, "0"),
                    )
                  : _.Localize(
                      "#TimeRemaining_MinutesSeconds",
                      _.toString().padStart(2, "0"),
                      _.toString().padStart(2, "0"),
                    )
        );
      }
      !(function (_) {
        (_[(_.None = 0)] = "None"),
          (_[(_.Ago = 1)] = "Ago"),
          (_[(_.Remaining = 2)] = "Remaining");
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ = {
        PerYear: 31536e3,
        PerMonth: 2628e3,
        PerWeek: 604800,
        PerDay: 86400,
        PerHour: 3600,
        PerMinute: 60,
      };
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            tabs: _,
            bDisableRouting: _,
            startingTab: _,
            classNameCtn: _,
            classNameTab: _,
            classNameTabContent: _,
            preferredFocus: _,
            bVerticalTabs: _,
          } = _,
          _ = (0, _._)(),
          _ = (0, _._)(),
          [_, _] = (0, _.useState)(() => {
            var _;
            return (
              _ ||
              (!_ &&
              (0, _._)(_, "tab") &&
              null !== (_ = (0, _._)(_, "tab")) &&
              void 0 !== _
                ? _
                : "")
            );
          });
        (0, _.useEffect)(() => {
          if (!_.bDisableRouting && _) {
            const _ = (0, _._)(_, "tab");
            _ && _(_);
          }
        }, [_, _.key, _.bDisableRouting, _]);
        const _ = _.useCallback(
            (_) => {
              _(_.key),
                _ || (0, _._)(_, "tab", _.key),
                _.onClick && _.onClick(_);
            },
            [_, _],
          ),
          _ = _.filter((_) => !_.hidden);
        if (!_.length) return null;
        const _ = _.find((_) => _.key === _) || _[0],
          _ = _ ? (null != _ ? _ : _[0].key) : void 0,
          _ = (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                className: (0, _._)(
                  _().GraphicalAssetsTabs,
                  _ && _().GraphicalAssetsTabsVertical,
                  _,
                ),
                navEntryPreferPosition: _ ? _._.PREFERRED_CHILD : _._.FIRST,
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      tab: _,
                      OnTabClick: _,
                      classNameTab: _,
                      active: _.key === _.key,
                      preferredFocus: _ === _.key,
                    },
                    _.key,
                  ),
                ),
              }),
              _ &&
                (0, _.jsx)(_._, {
                  className: _,
                  children: _.contents,
                }),
            ],
          });
        return _
          ? (0, _.jsx)(_._, {
              className: (0, _._)(_().GraphicalAssetsTabsLayoutVertical),
              children: _,
            })
          : _;
      }
      function _(_) {
        const { statusType: _ = "success", children: _ } = _;
        let _ = "";
        return (
          "success" === _
            ? (_ = _().StatusSuccess)
            : "danger" === _
              ? (_ = _().StatusDanger)
              : "caution" === _ && (_ = _().StatusCaution),
          (0, _.jsx)("div", {
            className: (0, _._)(_().GraphicalAssetStatus, _),
            children: _,
          })
        );
      }
      function _(_) {
        const {
          tab: _,
          OnTabClick: _,
          classNameTab: _,
          active: _,
          preferredFocus: _,
        } = _;
        return (0, _.jsx)(_._, {
          condition: Boolean(_.statusToolTip || _.tooltip),
          wrap: (_) =>
            (0, _.jsx)(_._, {
              toolTipContent: _.statusToolTip || _.tooltip,
              children: _,
            }),
          children: (0, _.jsxs)(_._, {
            className: (0, _._)(
              _().GraphicalAssetsTab,
              _ && _().Active,
              _ && "ActiveTab",
              _,
            ),
            onActivate: () => __webpack_require__(_),
            preferredFocus: _,
            children: [
              Boolean(_.vo_warning) &&
                (0, _.jsx)(_._, {
                  toolTipContent: _.vo_warning,
                  children: (0, _.jsx)("div", {
                    className: _().VOWarning,
                    children: (0, _._)("#EventEditor_VOWarning"),
                  }),
                }),
              _.status,
              _.name,
            ],
          }),
        });
      }
    },
  },
]);
