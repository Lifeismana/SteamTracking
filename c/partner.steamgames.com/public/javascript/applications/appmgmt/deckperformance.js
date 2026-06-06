(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [906],
  {
    chunkid: (module) => {
      module.exports = {
        PerformanceContainer: "_3SS4MYcpRbsOo9iGYIYFTr",
        FeedbackContainer: "_3cVL8Lt1OMroMTVCMlr_1o",
        FrameRateContainer: "_3iH3NPfTuZEgKkeMZSIHMN",
        DescriptionContainer: "_1XOEGQOlJQVwkWxEVhS-U2",
        DescriptionSection: "_1C4uPBMaD8hewNntz_uA3F",
        PerformanceSectionTitle: "_3RgwExAFwWbutDA-nZwOCK",
        DescriptionDetails: "nL0dzsDcGMBJXrt6KYm5N",
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const [_, _] = (0, _.useState)(!1),
          [_] = (0, _.useState)(() =>
            (function () {
              const _ = (0, _._)(
                "partnerbrowse_webapi_token",
                "application_config",
              );
              (0, _._)(Boolean(_), "require partnerbrowse_webapi_token");
              const _ = new _._(_._.WEBAPI_BASE_URL, _);
              ("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: Initializing CStoreItemCache with access token",
                  _,
                );
              return _;
            })(),
          ),
          _ = (0, _.useMemo)(
            () => ({
              country: _._.COUNTRY,
              language: _._.LANGUAGE,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, _.useEffect)(
            () => (
              __webpack_require__(!0),
              (function (_) {
                return _._.Initialize(
                  _.GetServiceTransport(),
                  _._.is_partner_member,
                );
              })(_)
            ),
            [_],
          ),
          _
            ? (0, _.createElement)(_._, {
                context: _,
                serviceTransportOverride: _.GetServiceTransport(),
                children: _.children,
              })
            : null
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          HardwarePerformance: () => _,
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { dataprops: _, appId: _ } = _;
        return _?.framerate || _?.feedback
          ? (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                appId: _,
                dataprops: _,
              }),
            })
          : (0, _.jsx)(_.Fragment, {});
      }
      function _(_) {
        const { dataprops: _, appName: _ } = _;
        return _?.framerate || _?.feedback
          ? (0, _.jsxs)("div", {
              className: _.PerformanceContainer,
              children: [
                Boolean(_?.framerate) &&
                  (0, _.jsx)(_, {
                    appId: Number(_.appId),
                    appName: _,
                    frameRateData: _.framerate,
                  }),
                Boolean(_?.feedback) &&
                  (0, _.jsx)(_, {
                    appId: Number(_.appId),
                    feedbackData: _.feedback,
                  }),
              ],
            })
          : (0, _.jsx)(_.Fragment, {});
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
                  __webpack_require__.map((_) =>
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
      function _(_) {
        const { appId: _, appName: _, frameRateData: _ } = _,
          _ = _.useMemo(() => {
            let _ = [];
            return (
              _?.frame_rate_clusters &&
                _?.frame_rate_clusters.length > 0 &&
                _.frame_rate_clusters[0].daily_frame_rates?.map((_) => {
                  const _ = parseInt("" + _.mean_frame_rate),
                    _ = parseInt("" + _.mean_frame_rate_stddev);
                  return _.push({
                    date: _.date,
                    mean: _,
                    range: [_ + _, _ - _],
                  });
                }),
              _.sort((_, _) => _.date - _.date)
            );
          }, [_]);
        if (!_ || !_.frame_rate_clusters?.length)
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
        const _ = _.frame_rate_clusters[0],
          _ = Number(_.mean_frame_rate).toFixed(0),
          _ = (0, _.jsx)("span", {
            className: _.FrameRateValue,
            children: _._.Localize("#GamePerformanceStats_FPS", _),
          }),
          _ = _
            ? _._.LocalizeReact("#GamePerformanceStats_AverageFrameRate", _, _)
            : _._.LocalizeReact(
                "#GamePerformanceStats_AverageFrameRate_ThisGame",
                _,
              );
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
                (0, _.jsx)("div", {
                  className: _.DescriptionSection,
                  children: _._.Localize(
                    "#GamePerformanceStats_FrameRateDataBasedOn",
                    _.report_days,
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
            (0, _.jsx)(_._, {
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
                data: _,
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
            }),
          ],
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
                children: _._.Localize("#SteamDeckVerified_Category_Verified"),
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
          __webpack_require__.sort((_, _) =>
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
              __webpack_require__.map((_, _) =>
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
  },
]);
