/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [906],
    {
      61266: (p, E, a) => {
        "use strict";
        a.d(E, { T: () => I, m: () => j });
        var e = a(90626),
          P = a(13018),
          t = a(10142),
          A = a(71742),
          _ = a(3166),
          u = a(14616);
        function j(d) {
          const [v, M] = (0, e.useState)(!1),
            [x] = (0, e.useState)(() => T()),
            k = (0, e.useMemo)(
              () => ({
                country: _.TS.COUNTRY,
                language: _.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, e.useEffect)(() => (M(!0), B(x)), [x]),
            v
              ? (0, e.createElement)(u.V3, {
                  context: k,
                  serviceTransportOverride: x.GetServiceTransport(),
                  children: d.children,
                })
              : null
          );
        }
        function I(d) {
          const [v] = (0, e.useState)(() => T()),
            M = (0, e.useMemo)(
              () => ({
                country: _.TS.COUNTRY,
                language: _.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: d.bIncludeUnpublished,
              }),
              [d.bIncludeUnpublished],
            );
          return (0, e.createElement)(u.V3, {
            context: M,
            serviceTransportOverride: v.GetServiceTransport(),
            children: d.children,
          });
        }
        function T() {
          const d = (0, _.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, A.wT)(!!d, "require partnerbrowse_webapi_token"),
            new P.D(_.TS.WEBAPI_BASE_URL, d)
          );
        }
        function B(d) {
          return t.A.Initialize(
            d.GetServiceTransport(),
            _.iA.is_partner_member,
          );
        }
      },
      67536: (p, E, a) => {
        "use strict";
        a.r(E),
          a.d(E, {
            HardwarePerformance: () => N,
            default: () => Y,
            k_HardwareClusterID_Galileo: () => O,
            k_HardwareClusterID_Jupiter: () => R,
          });
        var e = a(7850),
          P = a(90626),
          t = a(7878),
          A = a.n(t),
          _ = a(32671),
          u = a(67406),
          j = a(90150),
          I = a(73077),
          T = a(30230),
          B = a(20283),
          d = a(75620),
          v = a(61141),
          M = a(58661),
          x = a(90865),
          k = a(24642),
          G = a(16114),
          z = a(61266),
          K = a(36707),
          Z = a(11243),
          r = a(39905),
          H = a(25792),
          V = a(19298),
          w = a(24660);
        const R = 3,
          O = 4;
        function Y(n) {
          const { dataprops: s, appId: i } = n;
          return !s?.framerate && !s?.feedback
            ? (0, e.jsx)(e.Fragment, {})
            : (0, e.jsx)(z.m, {
                children: (0, e.jsx)(H.tH, {
                  children: (0, e.jsx)(N, { appId: i, dataprops: s }),
                }),
              });
        }
        function N(n) {
          const { dataprops: s, appName: i } = n;
          return !s?.framerate && !s?.feedback
            ? (0, e.jsx)(e.Fragment, {})
            : (0, e.jsxs)("div", {
                className: t.PerformanceContainer,
                children: [
                  !!s?.framerate &&
                    (0, e.jsx)(X, {
                      appId: Number(n.appId),
                      appName: i,
                      frameRateData: s.framerate,
                    }),
                  !!s?.feedback &&
                    (0, e.jsx)(Q, {
                      appId: Number(n.appId),
                      feedbackData: s.feedback,
                    }),
                ],
              });
        }
        function Q(n) {
          const { feedbackData: s } = n;
          if (!s || !s.daily?.length)
            return (0, e.jsx)("div", {
              className: t.FrameRateContainer,
              children: (0, e.jsxs)("div", {
                className: t.DescriptionContainer,
                children: [
                  (0, e.jsx)("div", {
                    className: t.PerformanceSectionTitle,
                    children: r.Z.Localize(
                      "#GamePerformanceStats_CustomerFeedback",
                    ),
                  }),
                  (0, e.jsx)("div", {
                    children: r.Z.Localize("#GamePerformanceStats_NoData"),
                  }),
                ],
              }),
            });
          const i = [
              {
                fill: "#ffc82c",
                key: "disagree_performance",
                name: r.Z.Localize("#GamePerformanceStats_Performance"),
              },
              {
                fill: "#59bf40",
                key: "disagree_legibility",
                name: r.Z.Localize("#GamePerformanceStats_Legibility"),
              },
              {
                fill: "#1a9fff",
                key: "disagree_stability",
                name: r.Z.Localize("#GamePerformanceStats_Stability"),
              },
              {
                fill: "#ad66bb",
                key: "disagree_input",
                name: r.Z.Localize("#GamePerformanceStats_Input"),
              },
              {
                fill: "#dcdedf",
                key: "disagree_other",
                name: r.Z.Localize("#GamePerformanceStats_Other"),
              },
            ],
            l = Number(s.total?.agree) + Number(s.total?.disagree),
            f = (Number(s.total?.agree) / l) * 100,
            h = [...s.daily];
          return (0, e.jsxs)("div", {
            className: t.FeedbackContainer,
            children: [
              (0, e.jsxs)("div", {
                className: t.DescriptionContainer,
                children: [
                  (0, e.jsx)("div", {
                    className: t.PerformanceSectionTitle,
                    children: r.Z.Localize(
                      "#GamePerformanceStats_CustomerFeedback",
                    ),
                  }),
                  (0, e.jsx)(q, { nAgreePercent: f }),
                  (0, e.jsx)("div", {
                    children: r.Z.Localize(
                      "#GamePerformanceStats_NumberOfReports",
                      (0, k.D)(l),
                      s.daily.length,
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: t.DescriptionSection,
                    children: r.Z.LocalizeReact(
                      "#GamePerformanceStats_WhyDisagree",
                      (0, e.jsx)("span", {
                        children: r.Z.Localize(
                          "#GamePerformanceStats_DidNotAgree",
                        ),
                      }),
                      (0, e.jsx)("span", {
                        children: r.Z.Localize(
                          "#SteamDeckVerified_Category_Verified",
                        ),
                      }),
                    ),
                  }),
                  (0, e.jsx)(ee, { feedback: s }),
                ],
              }),
              (0, e.jsx)(_.u, {
                width: "100%",
                minWidth: 600,
                minHeight: 300,
                className: t.FeedbackChartContainer,
                children: (0, e.jsxs)(u.E, {
                  margin: { top: 25, left: 0, right: 0, bottom: 0 },
                  data: h.sort((m, F) => m.date - F.date),
                  children: [
                    (0, e.jsx)(j.W, {
                      dataKey: "date",
                      tickFormatter: S,
                      stroke: "white",
                    }),
                    (0, e.jsx)(I.h, {
                      stroke: "white",
                      domain: [() => 0, (m) => Math.max(m, 20)],
                    }),
                    (0, e.jsx)(T.m, { labelFormatter: S }),
                    i.map((m) =>
                      (0, e.jsx)(
                        B.y,
                        {
                          shape: (0, e.jsx)(ae, { fill: m.fill }),
                          fill: m.fill,
                          dataKey: m.key,
                          stackId: "day",
                          name: m.name,
                        },
                        m.key,
                      ),
                    ),
                    (0, e.jsx)(d.s, {}),
                  ],
                }),
              }),
            ],
          });
        }
        const D = new Map([
            [R, "LCD"],
            [O, "OLED"],
          ]),
          J = new Array(
            { name: D.get(O), key: D.get(O), contents: null },
            { name: D.get(R), key: D.get(R), contents: null },
          );
        function X(n) {
          const { appName: s, frameRateData: i } = n,
            [l, f] = P.useState(void 0),
            h = P.useMemo(() => {
              let c = [];
              return (
                i?.frame_rate_clusters &&
                  i?.frame_rate_clusters.length > 0 &&
                  i.frame_rate_clusters.forEach((o) => {
                    if (!o.clusterid || !D.get(o.clusterid)) return;
                    let b = {
                      tab: D.get(o.clusterid),
                      clusterid: o.clusterid ?? 0,
                      mean_frame_rate: o.mean_frame_rate,
                      report_days: o.report_days ?? 0,
                      data: [],
                    };
                    o.daily_frame_rates?.map((L) => {
                      const g = parseInt("" + L.mean_frame_rate),
                        W = parseInt("" + L.mean_frame_rate_stddev);
                      return b.data.push({
                        date: L.date,
                        mean: g,
                        range: [g + W, g - W],
                      });
                    }),
                      b.data.sort((L, g) => L.date - g.date),
                      c.push(b);
                  }),
                c
              );
            }, [i]),
            m = P.useMemo(() => {
              const c = D.get(O);
              return h.some((o) => o.tab == c && o.data.length > 0)
                ? c
                : (h.find((o) => o.data.length > 0)?.tab ?? c);
            }, [h]);
          if (!i?.frame_rate_clusters?.length)
            return (0, e.jsx)("div", {
              className: t.FrameRateContainer,
              children: (0, e.jsxs)("div", {
                className: t.DescriptionContainer,
                children: [
                  (0, e.jsx)("div", {
                    className: t.PerformanceSectionTitle,
                    children: r.Z.Localize(
                      "#GamePerformanceStats_AverageFrameRate_Title",
                    ),
                  }),
                  (0, e.jsx)("div", {
                    children: r.Z.Localize("#GamePerformanceStats_NoData"),
                  }),
                ],
              }),
            });
          let F = (0, e.jsx)("div", {
              children: r.Z.Localize("#GamePerformanceStats_NoData"),
            }),
            U;
          const y = l ?? m,
            C = h.find((c) => c.tab == y);
          if (C) {
            const c = Number(C.mean_frame_rate ?? 0).toFixed(0),
              o = (0, e.jsx)("span", {
                className: t.FrameRateValue,
                children: r.Z.Localize("#GamePerformanceStats_FPS", c),
              });
            (U = s
              ? r.Z.LocalizeReact(
                  "#GamePerformanceStats_AverageFrameRate_Device",
                  s,
                  y,
                  o,
                )
              : r.Z.LocalizeReact(
                  "#GamePerformanceStats_AverageFrameRate_ThisGame_Device",
                  y,
                  o,
                )),
              (F = (0, e.jsx)(_.u, {
                width: "100%",
                minWidth: 600,
                height: 300,
                children: (0, e.jsxs)(v.X, {
                  margin: { top: 25, left: 0, right: 0, bottom: 0 },
                  data: C.data,
                  children: [
                    (0, e.jsx)(M.d, { strokeDasharray: "3 3", color: "red" }),
                    (0, e.jsx)(j.W, {
                      dataKey: "date",
                      tickFormatter: S,
                      stroke: "white",
                    }),
                    (0, e.jsx)(I.h, {
                      stroke: "white",
                      domain: [() => 0, (b) => Math.max(b, 100)],
                    }),
                    (0, e.jsx)(T.m, { labelFormatter: S }),
                    (0, e.jsx)(x.N, {
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
          return (0, e.jsxs)("div", {
            className: t.FrameRateContainer,
            children: [
              (0, e.jsxs)("div", {
                className: t.DescriptionContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: t.PerformanceSectionTitle,
                    children: [
                      r.Z.Localize(
                        "#GamePerformanceStats_AverageFrameRate_Title",
                      ),
                      (0, e.jsx)("span", {
                        className: t.Beta,
                        children: r.Z.Localize("#NewToolTitleSuffix_Beta"),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { children: U }),
                  !!C?.report_days &&
                    (0, e.jsx)("div", {
                      className: t.DescriptionSection,
                      children: r.Z.Localize(
                        "#GamePerformanceStats_FrameRateDataBasedOn",
                        C?.report_days ?? 0,
                      ),
                    }),
                  (0, e.jsx)("div", {
                    className: t.DescriptionSection,
                    children: r.Z.Localize(
                      "#GamePerformanceStats_FrameRateMoreInfo",
                    ),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: t.TabContainer,
                children: [
                  (0, e.jsx)(V.Z, {
                    className: t.FrameRateTabs,
                    children: J.map((c) =>
                      (0, e.jsx)(
                        $,
                        {
                          active: c.key === y,
                          locToken: c.name,
                          onClick: () => f(c.key),
                        },
                        c.key,
                      ),
                    ),
                  }),
                  F,
                ],
              }),
            ],
          });
        }
        function $(n) {
          return (0, e.jsx)(w.Ii, {
            className: n.active ? t.TabActive : t.TabInactive,
            onClick: n.onClick,
            children: n.locToken,
          });
        }
        function S(n) {
          return (0, G._l)(n);
        }
        function q(n) {
          const { nAgreePercent: s } = n;
          return (0, e.jsxs)("div", {
            className: t.FeedbackAgree,
            children: [
              r.Z.LocalizeReact(
                "#GamePerformanceStats_Feedback_Agree",
                (0, e.jsx)("span", {
                  className: (0, K.A)(t.Percentage, t.DescriptionEmphasis),
                  children: r.Z.LocalizeReact(
                    "#GamePerformanceStats_Feedback_AgreePercentage",
                    s.toFixed(0),
                  ),
                }),
                (0, e.jsx)("span", {
                  children: r.Z.Localize(
                    "#SteamDeckVerified_Category_Verified",
                  ),
                }),
              ),
              (0, e.jsx)(Z.o, {
                tooltip: (0, e.jsx)("div", {
                  children: r.Z.Localize(
                    "#GamePerformanceStats_Feedback_PercentageTooltip",
                  ),
                }),
              }),
            ],
          });
        }
        function ee(n) {
          const { feedback: s } = n;
          let i = new Array(
            {
              display: r.Z.Localize("#GamePerformanceStats_Input"),
              value: s.total.disagree_input,
              class: t.FeedbackInput,
            },
            {
              display: r.Z.Localize("#GamePerformanceStats_Legibility"),
              value: s.total.disagree_legibility,
              class: t.FeedbackLegibility,
            },
            {
              display: r.Z.Localize("#GamePerformanceStats_Performance"),
              value: s.total.disagree_performance,
              class: t.FeedbackPerformance,
            },
            {
              display: r.Z.Localize("#GamePerformanceStats_Stability"),
              value: s.total.disagree_stability,
              class: t.FeedbackStability,
            },
            {
              display: r.Z.Localize("#GamePerformanceStats_Other"),
              value: s.total.disagree_other,
              class: t.FeedbackOther,
            },
          );
          return (
            i.sort((l, f) =>
              l.class == t.FeedbackOther ? 1 : f.value - l.value,
            ),
            (0, e.jsxs)("div", {
              className: t.FeedbackSummaryTable,
              children: [
                (0, e.jsx)("div", {
                  className: t.FeedbackTableHeader,
                  children: r.Z.Localize("#GamePerformance_Reason"),
                }),
                (0, e.jsx)("div", {
                  className: t.FeedbackTableHeader,
                  children: r.Z.Localize("#GamePerformance_NumResponses"),
                }),
                i.map((l, f) =>
                  (0, e.jsxs)(
                    P.Fragment,
                    {
                      children: [
                        (0, e.jsx)("div", {
                          className: l.class,
                          children: l.display,
                        }),
                        (0, e.jsx)("div", { children: l.value }),
                      ],
                    },
                    "reason_" + f,
                  ),
                ),
              ],
            })
          );
        }
        const ae = (n) => {
          const { fill: s, x: i, y: l, width: f, height: h } = n;
          return (0, e.jsx)("rect", {
            x: i,
            y: l,
            width: f,
            height: h,
            fill: s,
          });
        };
      },
      7878: (p) => {
        p.exports = {
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
      67406: (p, E, a) => {
        "use strict";
        a.d(E, { E: () => u });
        var e = a(98403),
          P = a(20283),
          t = a(90150),
          A = a(73077),
          _ = a(12260),
          u = (0, e.gu)({
            chartName: "BarChart",
            GraphicalChild: P.y,
            defaultTooltipEventType: "axis",
            validateTooltipEventTypes: ["axis", "item"],
            axisComponents: [
              { axisType: "xAxis", AxisComp: t.W },
              { axisType: "yAxis", AxisComp: A.h },
            ],
            formatAxisMap: _.pr,
          });
      },
    },
  ]);
})();
