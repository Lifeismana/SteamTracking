(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [906],
    {
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, _.useEffect)(() => (_(!0), _(_)), [_]),
            _
              ? (0, _.createElement)(_._, {
                  context: _,
                  serviceTransportOverride: _.GetServiceTransport(),
                  children: _.children,
                })
              : null
          );
        }
        function _(_) {
          const [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: _.bIncludeUnpublished,
              }),
              [_.bIncludeUnpublished],
            );
          return (0, _.createElement)(_._, {
            context: _,
            serviceTransportOverride: _.GetServiceTransport(),
            children: _.children,
          });
        }
        function _() {
          const _ = (0, _._)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, _._)(!!_, "require partnerbrowse_webapi_token"),
            new _._(_._.WEBAPI_BASE_URL, _)
          );
        }
        function _(_) {
          return _._.Initialize(_.GetServiceTransport(), _._.is_partner_member);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            HardwarePerformance: () => _,
            default: () => _,
            k_HardwareClusterID_Galileo: () => _,
            k_HardwareClusterID_Jupiter: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          _ = __webpack_require__("chunkid");
        const _ = 3,
          _ = 4;
        function _(_) {
          const { dataprops: _, appId: _ } = _;
          return !_?.framerate && !_?.feedback
            ? (0, _.jsx)(_.Fragment, {})
            : (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_, {
                    appId: _,
                    dataprops: _,
                  }),
                }),
              });
        }
        function _(_) {
          const { dataprops: _, appName: _ } = _;
          return !_?.framerate && !_?.feedback
            ? (0, _.jsx)(_.Fragment, {})
            : (0, _.jsxs)("div", {
                className: _.PerformanceContainer,
                children: [
                  !!_?.framerate &&
                    (0, _.jsx)(_, {
                      appId: Number(_.appId),
                      appName: _,
                      frameRateData: _.framerate,
                    }),
                  !!_?.feedback &&
                    (0, _.jsx)(_, {
                      appId: Number(_.appId),
                      feedbackData: _.feedback,
                    }),
                ],
              });
        }
        function _(_) {
          const { feedbackData: _ } = _;
          if (!_ || !_.daily?.length)
            return (0, _.jsx)("div", {
              className: _.FrameRateContainer,
              children: (0, _.jsxs)("div", {
                className: _.DescriptionContainer,
                children: [
                  (0, _.jsx)("div", {
                    className: _.PerformanceSectionTitle,
                    children: _._.Localize(
                      "#GamePerformanceStats_CustomerFeedback",
                    ),
                  }),
                  (0, _.jsx)("div", {
                    children: _._.Localize("#GamePerformanceStats_NoData"),
                  }),
                ],
              }),
            });
          const _ = [
              {
                fill: "#ffc82c",
                key: "disagree_performance",
                name: _._.Localize("#GamePerformanceStats_Performance"),
              },
              {
                fill: "#59bf40",
                key: "disagree_legibility",
                name: _._.Localize("#GamePerformanceStats_Legibility"),
              },
              {
                fill: "#1a9fff",
                key: "disagree_stability",
                name: _._.Localize("#GamePerformanceStats_Stability"),
              },
              {
                fill: "#ad66bb",
                key: "disagree_input",
                name: _._.Localize("#GamePerformanceStats_Input"),
              },
              {
                fill: "#dcdedf",
                key: "disagree_other",
                name: _._.Localize("#GamePerformanceStats_Other"),
              },
            ],
            _ = Number(_.total?.agree) + Number(_.total?.disagree),
            _ = (Number(_.total?.agree) / _) * 100,
            _ = [..._.daily];
          return (0, _.jsxs)("div", {
            className: _.FeedbackContainer,
            children: [
              (0, _.jsxs)("div", {
                className: _.DescriptionContainer,
                children: [
                  (0, _.jsx)("div", {
                    className: _.PerformanceSectionTitle,
                    children: _._.Localize(
                      "#GamePerformanceStats_CustomerFeedback",
                    ),
                  }),
                  (0, _.jsx)(_, {
                    nAgreePercent: _,
                  }),
                  (0, _.jsx)("div", {
                    children: _._.Localize(
                      "#GamePerformanceStats_NumberOfReports",
                      (0, _._)(_),
                      _.daily.length,
                    ),
                  }),
                  (0, _.jsx)("div", {
                    className: _.DescriptionSection,
                    children: _._.LocalizeReact(
                      "#GamePerformanceStats_WhyDisagree",
                      (0, _.jsx)("span", {
                        children: _._.Localize(
                          "#GamePerformanceStats_DidNotAgree",
                        ),
                      }),
                      (0, _.jsx)("span", {
                        children: _._.Localize(
                          "#SteamDeckVerified_Category_Verified",
                        ),
                      }),
                    ),
                  }),
                  (0, _.jsx)(_, {
                    feedback: _,
                  }),
                ],
              }),
              (0, _.jsx)(_._, {
                width: "100%",
                minWidth: 600,
                minHeight: 300,
                className: _.FeedbackChartContainer,
                children: (0, _.jsxs)(_._, {
                  margin: {
                    top: 25,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  data: _.sort((_, _) => _.date - _.date),
                  children: [
                    (0, _.jsx)(_._, {
                      dataKey: "date",
                      tickFormatter: _,
                      stroke: "white",
                    }),
                    (0, _.jsx)(_._, {
                      stroke: "white",
                      domain: [() => 0, (_) => Math.max(_, 20)],
                    }),
                    (0, _.jsx)(_._, {
                      labelFormatter: _,
                    }),
                    _.map((_) =>
                      (0, _.jsx)(
                        _._,
                        {
                          shape: (0, _.jsx)(_, {
                            fill: _.fill,
                          }),
                          fill: _.fill,
                          dataKey: _.key,
                          stackId: "day",
                          name: _.name,
                        },
                        _.key,
                      ),
                    ),
                    (0, _.jsx)(_._, {}),
                  ],
                }),
              }),
            ],
          });
        }
        const _ = new Map([
            [_, "LCD"],
            [_, "OLED"],
          ]),
          _ = new Array(
            {
              name: _.get(_),
              key: _.get(_),
              contents: null,
            },
            {
              name: _.get(_),
              key: _.get(_),
              contents: null,
            },
          );
        function _(_) {
          const { appName: _, frameRateData: _ } = _,
            [_, _] = _.useState(void 0),
            _ = _.useMemo(() => {
              let _ = [];
              return (
                _?.frame_rate_clusters &&
                  _?.frame_rate_clusters.length > 0 &&
                  _.frame_rate_clusters.forEach((_) => {
                    if (!_.clusterid || !_.get(_.clusterid)) return;
                    let _ = {
                      tab: _.get(_.clusterid),
                      clusterid: _.clusterid ?? 0,
                      mean_frame_rate: _.mean_frame_rate,
                      report_days: _.report_days ?? 0,
                      data: [],
                    };
                    _.daily_frame_rates?.map((_) => {
                      const _ = parseInt("" + _.mean_frame_rate),
                        _ = parseInt("" + _.mean_frame_rate_stddev);
                      return _.data.push({
                        date: _.date,
                        mean: _,
                        range: [_ + _, _ - _],
                      });
                    }),
                      _.data.sort((_, _) => _.date - _.date),
                      _.push(_);
                  }),
                _
              );
            }, [_]),
            _ = _.useMemo(() => {
              const _ = _.get(_);
              return _.some((_) => _.tab == _ && _.data.length > 0)
                ? _
                : (_.find((_) => _.data.length > 0)?.tab ?? _);
            }, [_]);
          if (!_?.frame_rate_clusters?.length)
            return (0, _.jsx)("div", {
              className: _.FrameRateContainer,
              children: (0, _.jsxs)("div", {
                className: _.DescriptionContainer,
                children: [
                  (0, _.jsx)("div", {
                    className: _.PerformanceSectionTitle,
                    children: _._.Localize(
                      "#GamePerformanceStats_AverageFrameRate_Title",
                    ),
                  }),
                  (0, _.jsx)("div", {
                    children: _._.Localize("#GamePerformanceStats_NoData"),
                  }),
                ],
              }),
            });
          let _ = (0, _.jsx)("div", {
              children: _._.Localize("#GamePerformanceStats_NoData"),
            }),
            _;
          const _ = _ ?? _,
            _ = _.find((_) => _.tab == _);
          if (_) {
            const _ = Number(_.mean_frame_rate ?? 0).toFixed(0),
              _ = (0, _.jsx)("span", {
                className: _.FrameRateValue,
                children: _._.Localize("#GamePerformanceStats_FPS", _),
              });
            (_ = _
              ? _._.LocalizeReact(
                  "#GamePerformanceStats_AverageFrameRate_Device",
                  _,
                  _,
                  _,
                )
              : _._.LocalizeReact(
                  "#GamePerformanceStats_AverageFrameRate_ThisGame_Device",
                  _,
                  _,
                )),
              (_ = (0, _.jsx)(_._, {
                width: "100%",
                minWidth: 600,
                height: 300,
                children: (0, _.jsxs)(_._, {
                  margin: {
                    top: 25,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  },
                  data: _.data,
                  children: [
                    (0, _.jsx)(_._, {
                      strokeDasharray: "3 3",
                      color: "red",
                    }),
                    (0, _.jsx)(_._, {
                      dataKey: "date",
                      tickFormatter: _,
                      stroke: "white",
                    }),
                    (0, _.jsx)(_._, {
                      stroke: "white",
                      domain: [() => 0, (_) => Math.max(_, 100)],
                    }),
                    (0, _.jsx)(_._, {
                      labelFormatter: _,
                    }),
                    (0, _.jsx)(_._, {
                      type: "natural",
                      dataKey: "mean",
                      name: "average",
                      stroke: "#4477EE",
                    }),
                    !1,
                  ],
                }),
              }));
          }
          return (0, _.jsxs)("div", {
            className: _.FrameRateContainer,
            children: [
              (0, _.jsxs)("div", {
                className: _.DescriptionContainer,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.PerformanceSectionTitle,
                    children: [
                      _._.Localize(
                        "#GamePerformanceStats_AverageFrameRate_Title",
                      ),
                      (0, _.jsx)("span", {
                        className: _.Beta,
                        children: _._.Localize("#NewToolTitleSuffix_Beta"),
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    children: _,
                  }),
                  !!_?.report_days &&
                    (0, _.jsx)("div", {
                      className: _.DescriptionSection,
                      children: _._.Localize(
                        "#GamePerformanceStats_FrameRateDataBasedOn",
                        _?.report_days ?? 0,
                      ),
                    }),
                  (0, _.jsx)("div", {
                    className: _.DescriptionSection,
                    children: _._.Localize(
                      "#GamePerformanceStats_FrameRateMoreInfo",
                    ),
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.TabContainer,
                children: [
                  (0, _.jsx)(_._, {
                    className: _.FrameRateTabs,
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          active: _.key === _,
                          locToken: _.name,
                          onClick: () => _(_.key),
                        },
                        _.key,
                      ),
                    ),
                  }),
                  _,
                ],
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            className: _.active ? _.TabActive : _.TabInactive,
            onClick: _.onClick,
            children: _.locToken,
          });
        }
        function _(_) {
          return (0, _._)(_);
        }
        function _(_) {
          const { nAgreePercent: _ } = _;
          return (0, _.jsxs)("div", {
            className: _.FeedbackAgree,
            children: [
              _._.LocalizeReact(
                "#GamePerformanceStats_Feedback_Agree",
                (0, _.jsx)("span", {
                  className: (0, _._)(_.Percentage, _.DescriptionEmphasis),
                  children: _._.LocalizeReact(
                    "#GamePerformanceStats_Feedback_AgreePercentage",
                    _.toFixed(0),
                  ),
                }),
                (0, _.jsx)("span", {
                  children: _._.Localize(
                    "#SteamDeckVerified_Category_Verified",
                  ),
                }),
              ),
              (0, _.jsx)(_._, {
                tooltip: (0, _.jsx)("div", {
                  children: _._.Localize(
                    "#GamePerformanceStats_Feedback_PercentageTooltip",
                  ),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { feedback: _ } = _;
          let _ = new Array(
            {
              display: _._.Localize("#GamePerformanceStats_Input"),
              value: _.total.disagree_input,
              class: _.FeedbackInput,
            },
            {
              display: _._.Localize("#GamePerformanceStats_Legibility"),
              value: _.total.disagree_legibility,
              class: _.FeedbackLegibility,
            },
            {
              display: _._.Localize("#GamePerformanceStats_Performance"),
              value: _.total.disagree_performance,
              class: _.FeedbackPerformance,
            },
            {
              display: _._.Localize("#GamePerformanceStats_Stability"),
              value: _.total.disagree_stability,
              class: _.FeedbackStability,
            },
            {
              display: _._.Localize("#GamePerformanceStats_Other"),
              value: _.total.disagree_other,
              class: _.FeedbackOther,
            },
          );
          return (
            _.sort((_, _) =>
              _.class == _.FeedbackOther ? 1 : _.value - _.value,
            ),
            (0, _.jsxs)("div", {
              className: _.FeedbackSummaryTable,
              children: [
                (0, _.jsx)("div", {
                  className: _.FeedbackTableHeader,
                  children: _._.Localize("#GamePerformance_Reason"),
                }),
                (0, _.jsx)("div", {
                  className: _.FeedbackTableHeader,
                  children: _._.Localize("#GamePerformance_NumResponses"),
                }),
                _.map((_, _) =>
                  (0, _.jsxs)(
                    _.Fragment,
                    {
                      children: [
                        (0, _.jsx)("div", {
                          className: _.class,
                          children: _.display,
                        }),
                        (0, _.jsx)("div", {
                          children: _.value,
                        }),
                      ],
                    },
                    "reason_" + _,
                  ),
                ),
              ],
            })
          );
        }
        const _ = (_) => {
          const { fill: _, _: _, _: _, width: _, height: _ } = _;
          return (0, _.jsx)("rect", {
            _: _,
            _: _,
            width: _,
            height: _,
            fill: _,
          });
        };
      },
      chunkid: (module) => {
        module.exports = {
          PerformanceContainer: "_3SS4MYcpRbsOo9iGYIYFTr",
          FeedbackContainer: "_3cVL8Lt1OMroMTVCMlr_1o",
          FrameRateContainer: "_3iH3NPfTuZEgKkeMZSIHMN",
          DescriptionContainer: "_1XOEGQOlJQVwkWxEVhS-U2",
          DescriptionSection: "_1C4uPBMaD8hewNntz_uA3F",
          PerformanceSectionTitle: "_3RgwExAFwWbutDA-nZwOCK",
          DescriptionDetails: "nL0dzsDcGMBJXrt6KYm5N",
          TabContainer: "F0acTKwTPFIdDYfsMFzbD",
          FrameRateValue: "_2B6juattDAX-hilEh3Rt_B",
          DescriptionEmphasis: "ina27Iss3Cu6uQV6muq16",
          FeedbackAgree: "_1hAFmIlqGPHT1w7at0haFP",
          Percentage: "_37Q42KiUq40QU4jHr7ABSq",
          Beta: "_2tlJ__d3Y6cO8vwDClUB_C",
          FeedbackSummaryTable: "IjK2dzEOTlknwfRiGZs_-",
          FeedbackPerformance: "_1w05HAsWlfzr6UkMnXzd7F",
          FeedbackLegibility: "_2X08Zf_f23vHyJAxwwf-TO",
          FeedbackStability: "Mqd_gJMUlMmJ4UMXHVew_",
          FeedbackInput: "O_CUn7Mt_mLUBjBALiV7I",
          FeedbackOther: "_2qfV7V9Hcm-IbWZ2jMulQX",
          FeedbackTableHeader: "_2RNTmni7sGrUo6vvhW9r9l",
          FeedbackChartContainer: "_2h_JKiy1-oqTL5oobp5fGl",
          FrameRateTabs: "_2WkkV2Wg0u_3QDy9g6Q4yY",
          TabActive: "_78FuQRakVNuz-fNPKM9m_",
          TabInactive: "_2Hr7ssx_b-MrYZee0bQcdh",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = (0, _._)({
            chartName: "BarChart",
            GraphicalChild: _._,
            defaultTooltipEventType: "axis",
            validateTooltipEventTypes: ["axis", "item"],
            axisComponents: [
              {
                axisType: "xAxis",
                AxisComp: _._,
              },
              {
                axisType: "yAxis",
                AxisComp: _._,
              },
            ],
            formatAxisMap: _._,
          });
      },
    },
  ]);
})();
