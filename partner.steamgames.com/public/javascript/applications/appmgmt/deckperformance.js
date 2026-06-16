/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [906],
  {
    7878: (e) => {
      e.exports = {
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
    67406: (e, a, t) => {
      "use strict";
      t.d(a, { E: () => l });
      var r = t(98403),
        i = t(20283),
        s = t(90150),
        n = t(73077),
        c = t(12260),
        l = (0, r.gu)({
          chartName: "BarChart",
          GraphicalChild: i.y,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: s.W },
            { axisType: "yAxis", AxisComp: n.h },
          ],
          formatAxisMap: c.pr,
        });
    },
    11577: (e, a, t) => {
      "use strict";
      t.d(a, { m: () => o });
      var r = t(90626),
        i = t(96059),
        s = t(16021),
        n = t(81393),
        c = t(78327),
        l = t(63664);
      function o(e) {
        const [a, t] = (0, r.useState)(!1),
          [o] = (0, r.useState)(() =>
            (function () {
              const e = (0, c.Tc)(
                "partnerbrowse_webapi_token",
                "application_config",
              );
              (0, n.wT)(Boolean(e), "require partnerbrowse_webapi_token");
              const a = new i.D(c.TS.WEBAPI_BASE_URL, e);
              ("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: Initializing CStoreItemCache with access token",
                  e,
                );
              return a;
            })(),
          ),
          m = (0, r.useMemo)(
            () => ({
              country: c.TS.COUNTRY,
              language: c.TS.LANGUAGE,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, r.useEffect)(
            () => (
              t(!0),
              (function (e) {
                return s.A.Initialize(
                  e.GetServiceTransport(),
                  c.iA.is_partner_member,
                );
              })(o)
            ),
            [o],
          ),
          a
            ? (0, r.createElement)(l.V3, {
                context: m,
                serviceTransportOverride: o.GetServiceTransport(),
                children: e.children,
              })
            : null
        );
      }
    },
    42103: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { HardwarePerformance: () => y, default: () => v });
      var r = t(7850),
        i = t(90626),
        s = t(7878),
        n = t(32671),
        c = t(67406),
        l = t(90150),
        o = t(73077),
        m = t(30230),
        d = t(20283),
        f = t(75620),
        _ = t(61141),
        p = t(58661),
        h = t(90865),
        u = t(6083),
        x = t(67361),
        b = t(11577),
        g = t(52038),
        j = t(26408),
        k = t(47911),
        S = t(84811);
      function v(e) {
        const { dataprops: a, appId: t } = e;
        return a?.framerate || a?.feedback
          ? (0, r.jsx)(b.m, {
              children: (0, r.jsx)(S.tH, {
                children: (0, r.jsx)(y, { appId: t, dataprops: a }),
              }),
            })
          : (0, r.jsx)(r.Fragment, {});
      }
      function y(e) {
        const { dataprops: a, appName: t } = e;
        return a?.framerate || a?.feedback
          ? (0, r.jsxs)("div", {
              className: s.PerformanceContainer,
              children: [
                Boolean(a?.framerate) &&
                  (0, r.jsx)(P, {
                    appId: Number(e.appId),
                    appName: t,
                    frameRateData: a.framerate,
                  }),
                Boolean(a?.feedback) &&
                  (0, r.jsx)(F, {
                    appId: Number(e.appId),
                    feedbackData: a.feedback,
                  }),
              ],
            })
          : (0, r.jsx)(r.Fragment, {});
      }
      function F(e) {
        const { feedbackData: a } = e;
        if (!a || !a.daily?.length)
          return (0, r.jsx)("div", {
            className: s.FrameRateContainer,
            children: (0, r.jsxs)("div", {
              className: s.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: s.PerformanceSectionTitle,
                  children: k.Z.Localize(
                    "#GamePerformanceStats_CustomerFeedback",
                  ),
                }),
                (0, r.jsx)("div", {
                  children: k.Z.Localize("#GamePerformanceStats_NoData"),
                }),
              ],
            }),
          });
        const t = [
            {
              fill: "#ffc82c",
              key: "disagree_performance",
              name: k.Z.Localize("#GamePerformanceStats_Performance"),
            },
            {
              fill: "#59bf40",
              key: "disagree_legibility",
              name: k.Z.Localize("#GamePerformanceStats_Legibility"),
            },
            {
              fill: "#1a9fff",
              key: "disagree_stability",
              name: k.Z.Localize("#GamePerformanceStats_Stability"),
            },
            {
              fill: "#ad66bb",
              key: "disagree_input",
              name: k.Z.Localize("#GamePerformanceStats_Input"),
            },
            {
              fill: "#dcdedf",
              key: "disagree_other",
              name: k.Z.Localize("#GamePerformanceStats_Other"),
            },
          ],
          i = Number(a.total?.agree) + Number(a.total?.disagree),
          _ = (Number(a.total?.agree) / i) * 100,
          p = [...a.daily];
        return (0, r.jsxs)("div", {
          className: s.FeedbackContainer,
          children: [
            (0, r.jsxs)("div", {
              className: s.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: s.PerformanceSectionTitle,
                  children: k.Z.Localize(
                    "#GamePerformanceStats_CustomerFeedback",
                  ),
                }),
                (0, r.jsx)(L, { nAgreePercent: _ }),
                (0, r.jsx)("div", {
                  children: k.Z.Localize(
                    "#GamePerformanceStats_NumberOfReports",
                    (0, u.D)(i),
                    a.daily.length,
                  ),
                }),
                (0, r.jsx)("div", {
                  className: s.DescriptionSection,
                  children: k.Z.LocalizeReact(
                    "#GamePerformanceStats_WhyDisagree",
                    (0, r.jsx)("span", {
                      children: k.Z.Localize(
                        "#GamePerformanceStats_DidNotAgree",
                      ),
                    }),
                    (0, r.jsx)("span", {
                      children: k.Z.Localize(
                        "#SteamDeckVerified_Category_Verified",
                      ),
                    }),
                  ),
                }),
                (0, r.jsx)(G, { feedback: a }),
              ],
            }),
            (0, r.jsx)(n.u, {
              width: "100%",
              minWidth: 600,
              minHeight: 300,
              className: s.FeedbackChartContainer,
              children: (0, r.jsxs)(c.E, {
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                data: p.sort((e, a) => e.date - a.date),
                children: [
                  (0, r.jsx)(l.W, {
                    dataKey: "date",
                    tickFormatter: N,
                    stroke: "white",
                  }),
                  (0, r.jsx)(o.h, {
                    stroke: "white",
                    domain: [() => 0, (e) => Math.max(e, 20)],
                  }),
                  (0, r.jsx)(m.m, { labelFormatter: N }),
                  t.map((e) =>
                    (0, r.jsx)(
                      d.y,
                      {
                        shape: (0, r.jsx)(T, { fill: e.fill }),
                        fill: e.fill,
                        dataKey: e.key,
                        stackId: "day",
                        name: e.name,
                      },
                      e.key,
                    ),
                  ),
                  (0, r.jsx)(f.s, {}),
                ],
              }),
            }),
          ],
        });
      }
      function P(e) {
        const { appId: a, appName: t, frameRateData: c } = e,
          d = i.useMemo(() => {
            let e = [];
            return (
              c?.frame_rate_clusters &&
                c?.frame_rate_clusters.length > 0 &&
                c.frame_rate_clusters[0].daily_frame_rates?.map((a) => {
                  const t = parseInt("" + a.mean_frame_rate),
                    r = parseInt("" + a.mean_frame_rate_stddev);
                  return e.push({
                    date: a.date,
                    mean: t,
                    range: [t + r, t - r],
                  });
                }),
              e.sort((e, a) => e.date - a.date)
            );
          }, [c]);
        if (!c || !c.frame_rate_clusters?.length)
          return (0, r.jsx)("div", {
            className: s.FrameRateContainer,
            children: (0, r.jsxs)("div", {
              className: s.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: s.PerformanceSectionTitle,
                  children: k.Z.Localize(
                    "#GamePerformanceStats_AverageFrameRate_Title",
                  ),
                }),
                (0, r.jsx)("div", {
                  children: k.Z.Localize("#GamePerformanceStats_NoData"),
                }),
              ],
            }),
          });
        const f = c.frame_rate_clusters[0],
          u = Number(f.mean_frame_rate).toFixed(0),
          x = (0, r.jsx)("span", {
            className: s.FrameRateValue,
            children: k.Z.Localize("#GamePerformanceStats_FPS", u),
          }),
          b = t
            ? k.Z.LocalizeReact("#GamePerformanceStats_AverageFrameRate", t, x)
            : k.Z.LocalizeReact(
                "#GamePerformanceStats_AverageFrameRate_ThisGame",
                x,
              );
        return (0, r.jsxs)("div", {
          className: s.FrameRateContainer,
          children: [
            (0, r.jsxs)("div", {
              className: s.DescriptionContainer,
              children: [
                (0, r.jsxs)("div", {
                  className: s.PerformanceSectionTitle,
                  children: [
                    k.Z.Localize(
                      "#GamePerformanceStats_AverageFrameRate_Title",
                    ),
                    (0, r.jsx)("span", {
                      className: s.Beta,
                      children: k.Z.Localize("#NewToolTitleSuffix_Beta"),
                    }),
                  ],
                }),
                (0, r.jsx)("div", { children: b }),
                (0, r.jsx)("div", {
                  className: s.DescriptionSection,
                  children: k.Z.Localize(
                    "#GamePerformanceStats_FrameRateDataBasedOn",
                    f.report_days,
                  ),
                }),
                (0, r.jsx)("div", {
                  className: s.DescriptionSection,
                  children: k.Z.Localize(
                    "#GamePerformanceStats_FrameRateMoreInfo",
                  ),
                }),
              ],
            }),
            (0, r.jsx)(n.u, {
              width: "100%",
              minWidth: 600,
              height: 300,
              children: (0, r.jsxs)(_.X, {
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                data: d,
                children: [
                  (0, r.jsx)(p.d, { strokeDasharray: "3 3", color: "red" }),
                  (0, r.jsx)(l.W, {
                    dataKey: "date",
                    tickFormatter: N,
                    stroke: "white",
                  }),
                  (0, r.jsx)(o.h, { stroke: "white" }),
                  (0, r.jsx)(m.m, { labelFormatter: N }),
                  (0, r.jsx)(h.N, {
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
      function N(e) {
        return (0, x._l)(e);
      }
      function L(e) {
        const { nAgreePercent: a } = e;
        return (0, r.jsxs)("div", {
          className: s.FeedbackAgree,
          children: [
            k.Z.LocalizeReact(
              "#GamePerformanceStats_Feedback_Agree",
              (0, r.jsx)("span", {
                className: (0, g.A)(s.Percentage, s.DescriptionEmphasis),
                children: k.Z.LocalizeReact(
                  "#GamePerformanceStats_Feedback_AgreePercentage",
                  a.toFixed(0),
                ),
              }),
              (0, r.jsx)("span", {
                children: k.Z.Localize("#SteamDeckVerified_Category_Verified"),
              }),
            ),
            (0, r.jsx)(j.o, {
              tooltip: (0, r.jsx)("div", {
                children: k.Z.Localize(
                  "#GamePerformanceStats_Feedback_PercentageTooltip",
                ),
              }),
            }),
          ],
        });
      }
      function G(e) {
        const { feedback: a } = e;
        let t = new Array(
          {
            display: k.Z.Localize("#GamePerformanceStats_Input"),
            value: a.total.disagree_input,
            class: s.FeedbackInput,
          },
          {
            display: k.Z.Localize("#GamePerformanceStats_Legibility"),
            value: a.total.disagree_legibility,
            class: s.FeedbackLegibility,
          },
          {
            display: k.Z.Localize("#GamePerformanceStats_Performance"),
            value: a.total.disagree_performance,
            class: s.FeedbackPerformance,
          },
          {
            display: k.Z.Localize("#GamePerformanceStats_Stability"),
            value: a.total.disagree_stability,
            class: s.FeedbackStability,
          },
          {
            display: k.Z.Localize("#GamePerformanceStats_Other"),
            value: a.total.disagree_other,
            class: s.FeedbackOther,
          },
        );
        return (
          t.sort((e, a) =>
            e.class == s.FeedbackOther ? 1 : a.value - e.value,
          ),
          (0, r.jsxs)("div", {
            className: s.FeedbackSummaryTable,
            children: [
              (0, r.jsx)("div", {
                className: s.FeedbackTableHeader,
                children: k.Z.Localize("#GamePerformance_Reason"),
              }),
              (0, r.jsx)("div", {
                className: s.FeedbackTableHeader,
                children: k.Z.Localize("#GamePerformance_NumResponses"),
              }),
              t.map((e, a) =>
                (0, r.jsxs)(
                  i.Fragment,
                  {
                    children: [
                      (0, r.jsx)("div", {
                        className: e.class,
                        children: e.display,
                      }),
                      (0, r.jsx)("div", { children: e.value }),
                    ],
                  },
                  "reason_" + a,
                ),
              ),
            ],
          })
        );
      }
      const T = (e) => {
        const { fill: a, x: t, y: i, width: s, height: n } = e;
        return (0, r.jsx)("rect", { x: t, y: i, width: s, height: n, fill: a });
      };
    },
  },
]);
