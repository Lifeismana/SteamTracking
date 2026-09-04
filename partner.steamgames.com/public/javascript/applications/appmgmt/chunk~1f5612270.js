/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [3912],
    {
      67829: (M, N, s) => {
        "use strict";
        s.d(N, { i: () => E });
        var e = s(7850),
          b = s(20929),
          g = s(37424),
          I = s(2801),
          f = s(18210),
          n = s(3166),
          v = s(14578),
          y = s.n(v),
          C = s(58033);
        function E(U) {
          const { closeModal: t, fnOnApply: w, singlePackage: W } = U,
            B = (0, g._A)();
          return (0, e.jsxs)(I.o0, {
            closeModal: t,
            bAlertDialog: !0,
            strTitle: C.g.Localize("#PricingDashboard_ApplyConversion_Method"),
            onOK: () => {
              B(), w && w();
            },
            strOKButtonText: W
              ? (0, f.we)("#PricingDashboard_ApplyGuidelines_Button_Single")
              : (0, f.we)("#PricingDashboard_ApplyGuidelines_Button"),
            children: [
              (0, e.jsx)("div", {
                className: y().Instructions,
                children: C.g.Localize(
                  "#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions",
                ),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("a", {
                href: n.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
                target: "_blank",
                children: (0, f.we)("#PricingDashboard_ApplyGuidelines_Link"),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
              !W &&
                (0, e.jsx)("div", {
                  className: y().Instructions,
                  children: (0, f.we)(
                    "#PricingDashboard_ApplyGuidelines_Instructions2",
                  ),
                }),
              (0, e.jsx)("div", {
                className: y().Instructions,
                children: (0, f.we)(
                  "#PricingDashboard_ApplyGuidelines_Assurance",
                ),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(b.J, { bHideTour: !0 }),
            ],
          });
        }
      },
      1912: (M, N, s) => {
        "use strict";
        s.d(N, { t: () => w });
        var e = s(7850),
          b = s(31886),
          g = s(37424),
          I = s(90626),
          f = s(58534),
          n = s(36118),
          v = s(71421),
          y = s(36707),
          C = s(18210),
          E = s(31069),
          U = s(18715),
          t = s.n(U);
        function w(B) {
          const { rgLocalPriceOverrides: O } = B,
            L = 9,
            [i, T] = I.useState(O.length < L);
          return (0, e.jsx)("div", {
            className: t().SeeDetailsSection,
            children: i
              ? (0, e.jsx)("div", {
                  className: t().PriceOverrideSummaryList,
                  children: O.map((A) =>
                    (0, e.jsx)(
                      W,
                      { override: A },
                      `${A.packageID}_${A.strPriceKey}`,
                    ),
                  ),
                })
              : (0, e.jsx)(f.$n, {
                  onClick: () => T(!0),
                  className: t().SeeDetailsButton,
                  children: (0, C.we)("#PackageGrid_SeePendingChanges"),
                }),
          });
        }
        function W(B) {
          const { override: O } = B,
            {
              packageID: L,
              strPriceKey: i,
              nPriceInCents: T,
              nOldPriceInCents: A,
            } = O,
            X = (0, b.ww)(L),
            [Z, u, F] = (0, g.Wx)(A, i),
            [ee, $, se] = (0, g.Wx)(T, i),
            Y = (0, g.XK)(i),
            { nMinPriceInCents: Q, nMaxPriceInCents: V } = (0, g.tn)(L, i),
            q = T < Q,
            J = !!V && T > V,
            k = q || J;
          return (0, e.jsxs)("div", {
            className: (0, y.A)(t().PriceOverrideSummary),
            children: [
              (0, e.jsx)(v.he, {
                toolTipContent: Y,
                direction: "top",
                className: t().Currency,
                strTooltipClassname: t().HoverToolTip,
                children: i,
              }),
              (0, e.jsx)(v.he, {
                toolTipContent: `${L}: ${X}`,
                direction: "overlay",
                className: t().PackageName,
                strTooltipClassname: t().HoverToolTip,
                children: X,
              }),
              k
                ? (0, e.jsx)(E.T6, { packageID: L, strPriceKey: i })
                : (0, e.jsx)(E.Gy, { nPriceInCents: T, nSavedPriceInCents: A }),
              (0, e.jsxs)("div", {
                className: t().OldPriceCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: t().PricePrefix,
                    children: Z,
                  }),
                  (0, e.jsx)("span", { className: t().OldPrice, children: u }),
                  (0, e.jsx)("div", {
                    className: t().PriceSuffix,
                    children: F,
                  }),
                ],
              }),
              (0, e.jsx)("span", {
                className: t().ChangeArrow,
                children: (0, e.jsx)(n.i3G, { angle: 90 }),
              }),
              (0, e.jsxs)("div", {
                className: t().NewPriceCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: t().PricePrefix,
                    children: Z,
                  }),
                  (0, e.jsx)("span", { className: t().NewPrice, children: $ }),
                  (0, e.jsx)("div", {
                    className: t().PriceSuffix,
                    children: F,
                  }),
                ],
              }),
            ],
          });
        }
      },
      71764: (M, N, s) => {
        "use strict";
        s.d(N, { O: () => E });
        var e = s(7850),
          b = s(90626),
          g = s(85274),
          I = s.n(g),
          f = s(36118),
          n = s(36707),
          v = s(1960),
          y = s(561);
        const C = new v.MX("price-grid-cell-popout-elements");
        function E(U) {
          let { hoverKey: t, className: w, renderHover: W } = U,
            B = (0, n.A)(I().MoreDots, w),
            O = b.useRef(void 0),
            L = b.useCallback(() => {
              C.HideElement(O.current.ownerDocument, t);
            }, [t]);
          const i = (A) => {
              A.target.focus();
              let X = (0, e.jsx)(y.g, {
                target: O.current,
                direction: "top",
                bEnablePointerEvents: !0,
                nBodyDistance: 0,
                onClick: L,
                children: W(),
              });
              C.ShowElement(O.current.ownerDocument, X, t);
            },
            T = () => {
              C.HideElement(O.current.ownerDocument, t, 100);
            };
          return (0, e.jsx)("div", {
            ref: O,
            tabIndex: -1,
            className: B,
            onFocus: i,
            onBlur: T,
            children: (0, e.jsx)(f.faJ, {}),
          });
        }
      },
      81246: (M, N, s) => {
        "use strict";
        s.d(N, { m2: () => P, QD: () => D, RW: () => h });
        var e = s(7850),
          b = s(15252),
          g = s(37424),
          I = s(31069),
          f = s(87108),
          n = s(18210),
          v = s(61075),
          y = s(36707),
          C = s(71421),
          E = s(71764),
          U = s(12917),
          t = s.n(U),
          w = s(72604),
          W = s(90626),
          B = s(2801),
          O = s(85599),
          L = s(53107),
          i = s(18715),
          T = s.n(i),
          A = s(15659),
          X = s(7582),
          Z = s(55541),
          u = s(1912);
        function F(a) {
          const { closeModal: r, packageID: d, bPackageVisible: o } = a,
            c = (0, g.FX)(d),
            p = c.some((x) => x.nPriceInCents > x.nOldPriceInCents),
            R = Y(d, p),
            { fnPublish: H, ePublishState: m } = $(d);
          let _;
          if (R == 3)
            _ = (0, n.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
              (0, e.jsx)("div", {}),
              (0, e.jsx)("div", {}),
            );
          else if (R == 4) {
            let x = (0, e.jsx)(L.uU, {
              href: "https://partner.steamgames.com/doc/store/pricing",
            });
            _ = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  children: (0, n.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError1",
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, n.oW)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError2",
                    x,
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, n.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError3",
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, e.jsxs)("ol", {
                    children: [
                      (0, e.jsx)("li", {
                        children: (0, n.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownError3a",
                        ),
                      }),
                      (0, e.jsx)("li", {
                        children: (0, n.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownError3b",
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            });
          } else
            m == 3 &&
              (_ = (0, n.oW)(
                "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
                (0, e.jsx)("div", {}),
                (0, e.jsx)("div", {}),
              ));
          if (_) {
            let x = (0, n.we)(
              o
                ? "#PricingDashboard_PriceProposal_Publish_Title"
                : "#PricingDashboard_StageNewPrices_title",
            );
            return (
              R == 4 &&
                (x = (0, n.we)(
                  "#PricingDashboard_PriceProposal_Publish_CantPublishTitle",
                )),
              (0, e.jsx)(B.o0, {
                strTitle: x,
                bAlertDialog: !0,
                onOK: r,
                onCancel: r,
                closeModal: r,
                children: (0, e.jsx)("div", {
                  className: T().PublishErrorDialog,
                  children: _,
                }),
              })
            );
          }
          let S = R == 1 || m == 1;
          return (0, e.jsxs)(B.o0, {
            strTitle: (0, n.we)(
              o
                ? "#PricingDashboard_PriceProposal_Publish_Title"
                : "#PricingDashboard_StageNewPrices_title",
            ),
            bAlertDialog: !1,
            strOKButtonText: (0, n.we)(
              o
                ? "#PricingDashboard_PriceProposal_Publish_Button"
                : "#PricingDashboard_StageNewPrices_ok",
            ),
            bOKDisabled: S,
            bCancelDisabled: S,
            bDestructiveWarning: !0,
            onOK: H,
            onCancel: r,
            closeModal: r,
            children: [
              S && (0, e.jsx)(O.t, { position: "center" }),
              !S &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, n.Yp)(
                      o
                        ? "#PricingDashboard_PriceProposal_Publish_Explanation"
                        : "#PricingDashboard_StageNewPrices_desc_Timing",
                      c.length,
                    ),
                    !o &&
                      (0, e.jsx)("div", {
                        className: T().StageNote,
                        children: (0, n.we)(
                          "#PricingDashboard_StageNewPrices_NoStoreChange",
                        ),
                      }),
                    o &&
                      p &&
                      (0, e.jsx)("div", {
                        className: T().PublishWarning,
                        children: (0, n.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                        ),
                      }),
                    (0, e.jsx)(u.t, { rgLocalPriceOverrides: c }),
                  ],
                }),
            ],
          });
        }
        var ee = ((a) => (
          (a[(a.Idle = 0)] = "Idle"),
          (a[(a.Loading = 1)] = "Loading"),
          (a[(a.OK = 2)] = "OK"),
          (a[(a.Failed = 3)] = "Failed"),
          a
        ))(ee || {});
        function $(a) {
          const r = (0, g.h4)(),
            [d, o] = W.useState(0);
          return {
            fnPublish: W.useCallback(async () => {
              if ((o(1), (await r(a)).success != w.R)) {
                o(3);
                return;
              }
              o(2);
            }, [o, r, a]),
            ePublishState: d,
          };
        }
        var se = ((a) => (
          (a[(a.Idle = 0)] = "Idle"),
          (a[(a.Loading = 1)] = "Loading"),
          (a[(a.OK = 2)] = "OK"),
          (a[(a.FailedToLoad = 3)] = "FailedToLoad"),
          (a[(a.RequiresCooldown = 4)] = "RequiresCooldown"),
          a
        ))(se || {});
        function Y(a, r) {
          let [d, o] = W.useState(void 0);
          const c = (0, A.zq)(),
            p = (0, X.P_)(60);
          return (
            W.useEffect(() => {
              r &&
                (o(void 0),
                c([a], void 0, 60 * 1e3).then(async (m) => {
                  o(m);
                }));
            }, [r, a, o, c]),
            r
              ? d == null
                ? 1
                : d != w.R
                  ? 3
                  : (0, A.qN)(a).every(
                        (m) => m.rtStartDate > p + Z.nu || m.rtEndDate < p,
                      )
                    ? 2
                    : 4
              : 2
          );
        }
        var Q = s(64868),
          V = s(58534),
          q = s(96434),
          J = s.n(q),
          k = s(31886);
        function P(a) {
          const { packageID: r, bShowCancel: d } = a,
            o = (0, g.XB)(r),
            c = (0, g.d$)(r),
            p = c && (0, I.mK)(c.rtSubmitted),
            [R, H] = (0, f.Hl)(c?.submitterID),
            m = H ? H.persona_name : c?.submitterID;
          let _ = "PackageMore_" + r,
            S = null,
            x = null,
            z = null;
          o
            ? ((S = t().NeedsReview),
              (z = (0, n.we)(
                "#PricingDashboard_PriceProposal_NeedsReview_ttip",
              )),
              (x = (0, n.we)("#PricingDashboard_PriceProposal_NeedsReview")))
            : c?.eState == v.Al && c.bPartnerWillPublish
              ? ((S = t().PartnerWillPublish),
                (z = (0, n.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                  m,
                  p,
                )),
                (x = (0, n.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
                )))
              : c?.eState == v.Al && !c.bPartnerWillPublish
                ? ((S = t().AutoPublish),
                  (z = (0, n.we)(
                    "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip",
                    m,
                    p,
                  )),
                  (x = (0, e.jsxs)("div", {
                    children: [
                      (0, n.we)(
                        "#PricingDashboard_PriceProposal_WaitingForReview",
                      ),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("span", {
                        children: (0, n.we)(
                          "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish",
                        ),
                      }),
                    ],
                  })))
                : c?.eState == v.Zo
                  ? ((S = t().ApprovedCanPublish),
                    (z = (0, n.we)(
                      "#PricingDashboard_PriceProposal_Approved_ttip",
                    )),
                    (x = (0, e.jsx)(j, { packageID: r })))
                  : ((S = t().NoProposalsInFlight),
                    (z = (0, n.we)(
                      "#PricingDashboard_PriceProposal_NoneInFlight_ttip",
                    )),
                    (x = (0, n.we)(
                      "#PricingDashboard_PriceProposal_NoneInFlight",
                    )));
          let ae = () => (0, e.jsx)(G, { packageID: r }),
            ne = d && (o || !!c);
          return (0, e.jsxs)("div", {
            className: (0, y.A)(t().ProposalState, S),
            children: [
              (0, e.jsxs)(C.he, {
                toolTipContent: z,
                className: t().StateText,
                children: [
                  (0, e.jsx)("div", { className: t().ProposalStateKey }),
                  x,
                ],
              }),
              ne &&
                (0, e.jsx)(E.O, {
                  hoverKey: _,
                  className: t().PackageMore,
                  renderHover: ae,
                }),
            ],
          });
        }
        function l(a) {
          const r = (0, g.d$)(a),
            d = (0, k.E1)(a);
          return r
            ? r.eState == v.Zo
              ? d
                ? {
                    bApproved: !0,
                    strLabel: "#PricingDashboard_ProposedPrice_Status_Approved",
                    strMessage:
                      "#PricingDashboard_ProposedPrice_CallOut_Approved",
                  }
                : {
                    bApproved: !0,
                    strLabel:
                      "#PricingDashboard_ProposedPrice_Status_Approved_Stage",
                    strMessage:
                      "#PricingDashboard_ProposedPrice_CallOut_Approved_Stage",
                  }
              : r.bPartnerWillPublish
                ? {
                    bApproved: !1,
                    strLabel: "#PricingDashboard_ProposedPrice_Status_InReview",
                    strMessage: d
                      ? "#PricingDashboard_ProposedPrice_CallOut_InReview"
                      : "#PricingDashboard_ProposedPrice_CallOut_InReview_Stage",
                  }
                : {
                    bApproved: !1,
                    strLabel:
                      "#PricingDashboard_ProposedPrice_Status_InReview_AutoPublish",
                    strMessage:
                      "#PricingDashboard_ProposedPrice_CallOut_InReview_AutoPublish",
                  }
            : null;
        }
        function h(a) {
          const r = l(a.packageID);
          return r
            ? (0, e.jsx)(b.EY, {
                size: "4",
                color: r.bApproved ? "text-success" : "text-warning",
                children: (0, n.we)(r.strMessage),
              })
            : null;
        }
        function D(a) {
          const r = l(a.packageID);
          return r
            ? (0, e.jsx)(b.EY, {
                size: "3",
                color: r.bApproved ? "text-success" : "text-warning",
                children: (0, n.we)(r.strLabel),
              })
            : null;
        }
        function j(a) {
          const { packageID: r } = a,
            [d, o, c] = (0, Q.uD)(),
            p = (0, k.E1)(r);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(V.jn, {
                onClick: o,
                children: (0, n.we)(
                  p
                    ? "#PricingDashboard_PriceProposal_PublishDialog_Button"
                    : "#PricingDashboard_StageNewPrices",
                ),
              }),
              (0, e.jsx)(B.EN, {
                active: d,
                children: (0, e.jsx)(F, {
                  packageID: r,
                  bPackageVisible: p,
                  closeModal: c,
                }),
              }),
            ],
          });
        }
        function G(a) {
          const { packageID: r } = a,
            d = (0, g.XB)(r);
          let o = (0, g.T_)(r);
          const c = (0, g.d$)(r);
          let p = (0, g.fr)(r);
          return (0, e.jsx)("div", {
            className: J().PricePopout,
            children: (0, e.jsxs)("div", {
              className: J().DetailRow,
              children: [
                d &&
                  (0, e.jsx)("div", {
                    className: J().DetailLabel,
                    onClick: o,
                    children: (0, n.we)("#PricingDashboard_RevertAllPackage"),
                  }),
                !!c &&
                  (0, e.jsx)("div", {
                    className: J().DetailLabel,
                    onClick: p,
                    children: (0, n.we)(
                      "#PricingDashboard_CancelPriceProposal",
                    ),
                  }),
              ],
            }),
          });
        }
      },
      78779: (M, N, s) => {
        "use strict";
        s.d(N, { Zg: () => V, BL: () => $, cK: () => se });
        var e = s(7850),
          b = s(72604),
          g = s(64868),
          I = s(15659),
          f = s(31886),
          n = s(37424),
          v = s(90626),
          y = s(7582),
          C = s(58534),
          E = s(2801),
          U = s(88003),
          t = s(36118),
          w = s(85599),
          W = s(53107),
          B = s(47689),
          O = s(36707),
          L = s(82734),
          i = s(18210),
          T = s(36174),
          A = s(1912);
        function X(P) {
          const { closeModal: l } = P,
            h = (0, n.Ci)(),
            D = (0, n.NC)();
          return (0, e.jsxs)(E.o0, {
            strTitle: (0, i.we)("#PackageGrid_DiscardChangesTitle"),
            strOKButtonText: (0, i.we)("#PackageGrid_DiscardChangesButton"),
            onOK: D,
            bDestructiveWarning: !0,
            closeModal: l,
            children: [
              (0, i.Yp)(
                "#PricingDashboard_DiscardChangesExplanation",
                h.length,
              ),
              (0, e.jsx)(A.t, { rgLocalPriceOverrides: h }),
            ],
          });
        }
        var Z = s(18715),
          u = s.n(Z);
        const F = 30,
          ee = 40;
        function $(P) {
          const { bReloadPageOnSave: l } = P;
          let D = (0, n.Ci)()?.length ?? 0,
            j = D > 0;
          const [G, a, r] = (0, g.uD)(),
            [d, o, c] = (0, g.uD)();
          return (0, e.jsxs)("div", {
            className: (0, O.A)(u().ToolbarInfo, j && u().Visible),
            children: [
              (0, e.jsx)("div", {
                className: u().ChangeCount,
                children: (0, i.Yp)("#PackageGrid_PendingChangeCount", D),
              }),
              (0, e.jsxs)("div", {
                className: u().Buttons,
                children: [
                  (0, e.jsx)(C.$n, {
                    onClick: a,
                    disabled: D == 0,
                    className: (0, O.A)(u().Button, u().SaveButton),
                    children: (0, i.we)("#PackageGrid_SaveChangesDialogButton"),
                  }),
                  (0, e.jsx)(E.EN, {
                    active: G,
                    children: (0, e.jsx)(V, {
                      closeModal: r,
                      bReloadPageOnSave: l,
                    }),
                  }),
                  (0, e.jsx)(C.$n, {
                    className: u().Button,
                    onClick: o,
                    children: (0, i.we)(
                      "#PackageGrid_DiscardChangesDialogButton",
                    ),
                  }),
                  (0, e.jsx)(E.EN, {
                    active: d,
                    children: (0, e.jsx)(X, { closeModal: c }),
                  }),
                ],
              }),
            ],
          });
        }
        function se() {
          return v.useCallback(
            (P, l) =>
              (0, U.pg)((0, e.jsx)(V, { strContinueUrl: l }), (0, L.uX)(P)),
            [],
          );
        }
        function Y(P) {
          return P.filter((l) => l.nPriceInCents > l.nOldPriceInCents).map(
            (l) => l.packageID,
          );
        }
        function Q(P) {
          let [l, h] = v.useState(void 0);
          const D = (0, I.zq)(),
            j = (0, y.P_)(60);
          return (
            v.useEffect(() => {
              h(void 0);
              let a = Y(P);
              a.length > 0
                ? D(a, void 0, 60 * 1e3).then((r) => {
                    h(r);
                  })
                : h(b.R);
            }, [h, P, D]),
            v.useMemo(() => {
              if (l === void 0) return null;
              if (l != b.R) return { days: 0, loadFailed: !0 };
              let a = Number.MAX_SAFE_INTEGER,
                r = Y(P);
              for (let d of r) {
                const o = (0, I.qN)(d);
                for (const c of o) {
                  if (c.rtStartDate < j) continue;
                  let p = Math.floor((c.rtStartDate - j) / T.Kp.PerDay);
                  a = Math.min(a, p);
                }
              }
              return { days: a, loadFailed: !1 };
            }, [l, j, P])
          );
        }
        function V(P) {
          const { closeModal: l, strContinueUrl: h, bReloadPageOnSave: D } = P,
            j = (0, n.Ci)(),
            G = (0, n.NC)(),
            [a, r] = v.useState(void 0),
            d = Q(j);
          if (!d) return null;
          const o = !!h,
            c = (0, i.we)(
              o
                ? "#PackageGrid_NavigationWarning_Title"
                : "#PricingDashboard_SavePricesTitle",
            ),
            p = (0, i.Yp)("#PricingDashboard_SavePricesExplanation", j.length);
          if (d.loadFailed)
            return (0, e.jsx)(E.o0, {
              strTitle: c,
              bAlertDialog: !0,
              onOK: l,
              onCancel: l,
              closeModal: l,
              children: (0, e.jsx)("div", {
                className: u().PublishErrorDialog,
                children: (0, i.oW)(
                  "#PricingDashboard_SavePrices_FailedToLoad",
                  (0, e.jsx)("div", {}),
                  (0, e.jsx)("div", {}),
                ),
              }),
            });
          let R = !1,
            H = !1,
            m = new Set(),
            _ = new Set();
          for (const K of j) {
            const { nMinPriceInCents: ie, nMaxPriceInCents: oe } = (0, n.tn)(
              K.packageID,
              K.strPriceKey,
            );
            (R = R || K.nPriceInCents < ie),
              (H = H || (!!oe && K.nPriceInCents > oe)),
              K.nPriceInCents > K.nOldPriceInCents && m.add(K.strPriceKey),
              _.add(K.packageID);
          }
          const S = Array.from(m);
          let x = (0, n.ww)(_),
            z;
          if (x.length > 0) {
            let K = x.map((ie) => (0, f.ww)(ie));
            z = (0, i.we)("#PricingDashboad_RequiredPrices", K.join(", "));
          }
          const ae = R || H,
            ne = ae || a === void 0 || x.length != 0,
            te = (K) => {
              h
                ? (window.location.href = h)
                : D && !K && window.location.reload();
            },
            re = () => {
              if (a === void 0) {
                console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
                return;
              }
              P.closeModal(),
                (0, U.pg)(
                  (0, e.jsx)(k, { bAutoPublish: a, fnOnSuccess: te }),
                  window,
                );
            },
            le = () => {
              G(), P.closeModal(), te(!0);
            };
          let ce = (0, e.jsx)(W.uU, {
            href: "https://partner.steamgames.com/doc/store/pricing",
          });
          return (0, e.jsx)(E.eV, {
            title: c,
            onOK: re,
            onCancel: P.closeModal,
            bDestructiveWarning: o,
            closeModal: l,
            children: (0, e.jsxs)(C.nB, {
              className: u().SaveDialogBody,
              children: [
                (0, e.jsxs)(C.a3, {
                  className: u().SaveDialogBodyText,
                  children: [
                    o &&
                      (0, e.jsx)("div", {
                        className: u().NavigationWarning,
                        children: (0, i.we)("#PackageGrid_NavigationWarning"),
                      }),
                    p,
                    ae &&
                      (0, e.jsxs)("div", {
                        className: u().PricePreviewWarning,
                        children: [
                          " ",
                          (0, i.oW)("#PricingDashboard_PreviewWarning", ce),
                          " ",
                        ],
                      }),
                    z &&
                      (0, e.jsxs)("div", {
                        className: u().PricePreviewWarning,
                        children: [" ", z, " "],
                      }),
                    (0, e.jsx)(A.t, { rgLocalPriceOverrides: j }),
                    (0, e.jsx)(q, {
                      rgIncreasedPriceKeys: S,
                      nextDiscount: d.days,
                    }),
                    (0, e.jsx)(J, {
                      value: a,
                      onChange: r,
                      nextDiscount: d.days,
                    }),
                  ],
                }),
                (0, e.jsx)(C.wi, {
                  children: o
                    ? (0, e.jsx)(C.VQ, {
                        strOKText: (0, i.we)("#Button_Save"),
                        onOK: re,
                        bOKDisabled: ne,
                        strUpdateText: (0, i.we)(
                          "#PackageGrid_NavigateWithoutSavingButton",
                        ),
                        onUpdate: le,
                        onCancel: P.closeModal,
                      })
                    : (0, e.jsx)(C.CB, {
                        strOKText: (0, i.we)("#Button_Save"),
                        onOK: re,
                        bOKDisabled: ne,
                        onCancel: P.closeModal,
                      }),
                }),
              ],
            }),
          });
        }
        function q(P) {
          let { rgIncreasedPriceKeys: l, nextDiscount: h } = P;
          if (l.length == 0) return null;
          let D;
          return (
            h < F
              ? (D = (0, i.we)(
                  "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                  F,
                ))
              : h < ee
                ? (D = (0, i.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountSoon",
                    h,
                    F,
                  ))
                : (D = (0, i.we)(
                    "#PricingDashboard_SavePrice_CooldownWarning",
                    F,
                  )),
            (0, e.jsxs)("div", {
              className: u().PriceChangeSaveWarning,
              children: [
                (0, e.jsx)("div", {
                  className: u().PriceChangeSaveWarningArrow,
                  children: (0, e.jsx)(t.i3G, { angle: 0 }),
                }),
                (0, e.jsxs)("div", {
                  className: u().PriceChangeSaveWarningText,
                  children: [
                    (0, e.jsxs)("div", {
                      className: u().HigherPriceWarning,
                      children: [" ", D, " "],
                    }),
                    (0, e.jsx)("div", {
                      className: u().IncreasedCurrencies,
                      children: (0, i.Yp)(
                        "#PricingDashboard_SavePrice_IncreasedCurrencies",
                        l.length,
                        l.join(", "),
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function J(P) {
          let { value: l, onChange: h } = P,
            D = () => h(!0),
            j = () => h(!1),
            G = P.nextDiscount <= F;
          return (0, e.jsxs)("div", {
            className: u().AutoPublishCheckBox,
            children: [
              (0, e.jsx)(C.Od, {
                className: u().RadioButtons,
                checked: l === !1,
                onChange: j,
                label: (0, i.we)("#PricingDashboard_AutoPublish_Disabled"),
              }),
              (0, e.jsx)(C.Od, {
                className: u().RadioButtons,
                checked: l === !0,
                disabled: G,
                onChange: D,
                label: (0, i.we)("#PricingDashboard_AutoPublish_Enabled"),
              }),
            ],
          });
        }
        function k(P) {
          const { closeModal: l, bAutoPublish: h, fnOnSuccess: D } = P,
            j = (0, n.Ci)(),
            G = (0, n.Bt)(),
            a = (0, B.m)("SaveProgressDialog"),
            [r, d] = v.useState(0),
            [o, c] = v.useState(null),
            p = () => {
              a.cancel("cancelled by user");
            },
            R = !h;
          return (
            v.useEffect(() => {
              (async () => {
                const m = Array.from(new Set(j.map((_) => _.packageID)));
                for (let _ = 0; _ < m.length; _++) {
                  d(_);
                  const S = m[_],
                    x = await G(S, R, a);
                  if (a.token.reason) return;
                  if (x.success != b.R) {
                    c(x.msg ?? (0, i.we)("#PricingDashboard_SavePricesError"));
                    return;
                  }
                }
                d(m.length), D(), l();
              })();
            }, []),
            (0, e.jsx)(E.o0, {
              strTitle: (0, i.we)("#PackageGrid_SaveInProgress"),
              bAlertDialog: !!o,
              strOKButtonText: o
                ? (0, i.we)("#Button_Close")
                : (0, i.we)("#Button_OK"),
              onOK: o ? l : D,
              onCancel: p,
              closeModal: l,
              bDestructiveWarning: !0,
              children:
                o ??
                (0, e.jsx)(w.t, {
                  position: "center",
                  string: (0, i.we)("#PricingDashboard_Progress", r),
                }),
            })
          );
        }
      },
      20929: (M, N, s) => {
        "use strict";
        s.d(N, { J: () => I });
        var e = s(7850),
          b = s(90626);
        const g = b.lazy(() =>
            Promise.all([s.e(4781), s.e(7049)]).then(s.bind(s, 47049)),
          ),
          I = g
            ? function (n) {
                return (0, e.jsx)(b.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(g, { ...n }),
                });
              }
            : (f) => null;
      },
      47689: (M, N, s) => {
        "use strict";
        s.d(N, { m: () => I });
        var e = s(41735),
          b = s.n(e),
          g = s(90626);
        function I(f) {
          const n = g.useRef(b().CancelToken.source());
          return (
            g.useEffect(() => {
              const v = n.current;
              return () => v.cancel(f ? `${f}: unmounting` : "unmounting");
            }, [f]),
            n.current
          );
        }
      },
      85274: (M) => {
        M.exports = { MoreDots: "_2YpW8SafRsHDfQIUT2DzUP" };
      },
      14578: (M) => {
        M.exports = {
          DashboardPage: "fIACD2DrXOfPgZ6liaz8B",
          DashTitle: "_3GHz1lE76l_ye03FVZIvgV",
          FeedbackLinkCtn: "_5ZCWmtTzUDQzZXxIFLcJV",
          FeedbackLink: "_24sFT4JkcUPwf83Xisqf8S",
          Throbber: "TigTTJlvb1clyomjKsIBB",
          ErrorMessage: "_3_i0aP__RVwi1gJ__9YGNW",
          ButtonGroup: "WBwvg-Enwb-imQG96DiIT",
          Instructions: "_1mz7G9y8aBLOijzO3pLvAb",
        };
      },
      12917: (M) => {
        M.exports = {
          ProposalState: "_2Nd7LF--awWj2FO3O38Q4w",
          StateText: "_3POGYMAOwtuQfvsv42OXjV",
          ProposalStateKey: "_2Gw9ij-kw4HpOxG8diPOus",
          NoProposalsInFlight: "_1cDvzWJuU6haVGL7Z1WH-9",
          NeedsReview: "iEo6Irsly_5PaIVdrTyqo",
          AutoPublish: "_3I1P9wlHAcJOWgXZSLOP1E",
          PartnerWillPublish: "_1BiCvGXIG2jVfTmfWVnI3v",
          ApprovedCanPublish: "_2IXtgCjbz_IKB0I-Tv-Srl",
        };
      },
      18715: (M) => {
        M.exports = {
          ToolbarInfo: "_1bPMNcsgqa-akKYfelwilP",
          Visible: "CLKT9CFoyEByzdSrgSzE2",
          ChangeCount: "_1fN8w-ElZiiZadq4F6P5wa",
          ProposalStatus: "_1IKd3SFdr5z6DcVWi1hpQC",
          Buttons: "_1krNhBmPJ7AUIp1iDga0kZ",
          Button: "_2JjzuIkHTgXpX-jui_X86Y",
          SaveButton: "_16sHrIsuZRMMARr_H1gSdR",
          NavigationWarning: "_3lm-HapxTM6gKnYv9iTdLb",
          PricePreviewWarning: "IxZAjD6UWfP6qIUU-JIsp",
          SeeDetailsSection: "_36-JCOAm-RV4rsa1HaZ6hW",
          SeeDetailsButton: "_4aHIWNtAHpL3bTZwenwHu",
          PriceOverrideSummaryList: "_3Y8X4CF7L7ZC8hcC2hifte",
          OldPriceCtn: "_2UeXRoaw5cyxoKiX1z-UPr",
          NewPriceCtn: "_1m40GB0ETh3SuJZ2LE2sfV",
          PriceOverrideSummary: "_30js1WCUw1w9H1D5b7C6MM",
          PackageName: "IcOXTFPlAJBUR4q-zhkFy",
          OldPrice: "_1lyzsqwRX3rG1Mf9tox1wP",
          NewPrice: "nEEX41c5gybgdvLW6zvqS",
          Currency: "_3EgiMInHUeD5E64oBAlcGh",
          PricePrefix: "_2suSE-R__jkqEnC0uhKab2",
          PriceSuffix: "_3uRmhNxxanVPbMW-mXvDF-",
          ChangeArrow: "_3Pb94yxnhDGCL9T-Ro78tD",
          SaveDialogBody: "_2bTmcbLVmzj6utxsIMOxye",
          SaveDialogBodyText: "_3Ohx3u827GiwnZx2UU4z-M",
          AutoPublishCheckBox: "_2tKL7PU3207ZNtgoGUwiFJ",
          RadioButtons: "_3lsh2Yw2Hmc3kamU1eJyJJ",
          PublishError: "k_qc0NeY8sBathGlH4yet",
          PublishWarning: "_3uUgrMwDoXiX2PEyRHiF9g",
          StageNote: "dpMou_xbI8FCjsLTXKet7",
          PublishErrorDialog: "_381pEpkUlOe9X-z-1msxGm",
          HoverToolTip: "_1yXHpORUurTNRsHpzalvwp",
          PriceChangeSaveWarning: "_2lTJ7-iyFOMpIaZ-p6yDvd",
          PriceChangeSaveWarningArrow: "B3-IB6jhKQuhRCYOH9Zd5",
          PriceChangeSaveWarningText: "_2LN01zxswJjZ2gBihNCUsI",
          IncreasedCurrencies: "_13GstIJtNo2RVdUkwJtDSd",
        };
      },
    },
  ]);
})();
