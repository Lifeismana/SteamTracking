/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [33912],
    {
      67829: (M, N, s) => {
        "use strict";
        s.d(N, { i: () => E });
        var e = s(7850),
          b = s(20929),
          h = s(37424),
          S = s(2801),
          p = s(18210),
          a = s(3166),
          C = s(14578),
          w = s.n(C),
          f = s(58033);
        function E(U) {
          const { closeModal: t, fnOnApply: R, singlePackage: A } = U,
            W = (0, h._A)();
          return (0, e.jsxs)(S.o0, {
            closeModal: t,
            bAlertDialog: !0,
            strTitle: f.g.Localize("#PricingDashboard_ApplyConversion_Method"),
            onOK: () => {
              W(), R && R();
            },
            strOKButtonText: A
              ? (0, p.we)("#PricingDashboard_ApplyGuidelines_Button_Single")
              : (0, p.we)("#PricingDashboard_ApplyGuidelines_Button"),
            children: [
              (0, e.jsx)("div", {
                className: w().Instructions,
                children: f.g.Localize(
                  "#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions",
                ),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("a", {
                href: a.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
                target: "_blank",
                children: (0, p.we)("#PricingDashboard_ApplyGuidelines_Link"),
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
              !A &&
                (0, e.jsx)("div", {
                  className: w().Instructions,
                  children: (0, p.we)(
                    "#PricingDashboard_ApplyGuidelines_Instructions2",
                  ),
                }),
              (0, e.jsx)("div", {
                className: w().Instructions,
                children: (0, p.we)(
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
        s.d(N, { t: () => R });
        var e = s(7850),
          b = s(31886),
          h = s(37424),
          S = s(90626),
          p = s(58534),
          a = s(36118),
          C = s(71421),
          w = s(36707),
          f = s(18210),
          E = s(31069),
          U = s(18715),
          t = s.n(U);
        function R(W) {
          const { rgLocalPriceOverrides: O } = W,
            L = 9,
            [i, I] = S.useState(O.length < L);
          return (0, e.jsx)("div", {
            className: t().SeeDetailsSection,
            children: i
              ? (0, e.jsx)("div", {
                  className: t().PriceOverrideSummaryList,
                  children: O.map((T) =>
                    (0, e.jsx)(
                      A,
                      { override: T },
                      `${T.packageID}_${T.strPriceKey}`,
                    ),
                  ),
                })
              : (0, e.jsx)(p.$n, {
                  onClick: () => I(!0),
                  className: t().SeeDetailsButton,
                  children: (0, f.we)("#PackageGrid_SeePendingChanges"),
                }),
          });
        }
        function A(W) {
          const { override: O } = W,
            {
              packageID: L,
              strPriceKey: i,
              nPriceInCents: I,
              nOldPriceInCents: T,
            } = O,
            z = (0, b.ww)(L),
            [X, g, F] = (0, h.Wx)(T, i),
            [ee, Y, se] = (0, h.Wx)(I, i),
            J = (0, h.XK)(i),
            { nMinPriceInCents: $, nMaxPriceInCents: Z } = (0, h.tn)(L, i),
            Q = I < $,
            G = !!Z && I > Z,
            k = Q || G;
          return (0, e.jsxs)("div", {
            className: (0, w.A)(t().PriceOverrideSummary),
            children: [
              (0, e.jsx)(C.he, {
                toolTipContent: J,
                direction: "top",
                className: t().Currency,
                strTooltipClassname: t().HoverToolTip,
                children: i,
              }),
              (0, e.jsx)(C.he, {
                toolTipContent: `${L}: ${z}`,
                direction: "overlay",
                className: t().PackageName,
                strTooltipClassname: t().HoverToolTip,
                children: z,
              }),
              k
                ? (0, e.jsx)(E.T6, { packageID: L, strPriceKey: i })
                : (0, e.jsx)(E.Gy, { nPriceInCents: I, nSavedPriceInCents: T }),
              (0, e.jsxs)("div", {
                className: t().OldPriceCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: t().PricePrefix,
                    children: X,
                  }),
                  (0, e.jsx)("span", { className: t().OldPrice, children: g }),
                  (0, e.jsx)("div", {
                    className: t().PriceSuffix,
                    children: F,
                  }),
                ],
              }),
              (0, e.jsx)("span", {
                className: t().ChangeArrow,
                children: (0, e.jsx)(a.i3G, { angle: 90 }),
              }),
              (0, e.jsxs)("div", {
                className: t().NewPriceCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: t().PricePrefix,
                    children: X,
                  }),
                  (0, e.jsx)("span", { className: t().NewPrice, children: Y }),
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
          h = s(85274),
          S = s.n(h),
          p = s(36118),
          a = s(36707),
          C = s(1960),
          w = s(561);
        const f = new C.MX("price-grid-cell-popout-elements");
        function E(U) {
          let { hoverKey: t, className: R, renderHover: A } = U,
            W = (0, a.A)(S().MoreDots, R),
            O = b.useRef(void 0),
            L = b.useCallback(() => {
              f.HideElement(O.current.ownerDocument, t);
            }, [t]);
          const i = (T) => {
              T.target.focus();
              let z = (0, e.jsx)(w.g, {
                target: O.current,
                direction: "top",
                bEnablePointerEvents: !0,
                nBodyDistance: 0,
                onClick: L,
                children: A(),
              });
              f.ShowElement(O.current.ownerDocument, z, t);
            },
            I = () => {
              f.HideElement(O.current.ownerDocument, t, 100);
            };
          return (0, e.jsx)("div", {
            ref: O,
            tabIndex: -1,
            className: W,
            onFocus: i,
            onBlur: I,
            children: (0, e.jsx)(p.faJ, {}),
          });
        }
      },
      81246: (M, N, s) => {
        "use strict";
        s.d(N, { m2: () => ie, QD: () => o, RW: () => P });
        var e = s(7850),
          b = s(15252),
          h = s(37424),
          S = s(31069),
          p = s(87108),
          a = s(18210),
          C = s(61075),
          w = s(36707),
          f = s(71421),
          E = s(71764),
          U = s(12917),
          t = s.n(U),
          R = s(72604),
          A = s(90626),
          W = s(2801),
          O = s(85599),
          L = s(53107),
          i = s(18715),
          I = s.n(i),
          T = s(15659),
          z = s(7582),
          X = s(55541),
          g = s(1912);
        function F(n) {
          const { closeModal: r, packageID: l, bPackageVisible: d } = n,
            c = (0, h.FX)(l),
            u = c.some((x) => x.nPriceInCents > x.nOldPriceInCents),
            j = J(l, u),
            { fnPublish: K, ePublishState: _ } = Y(l);
          let y;
          if (j == 3)
            y = (0, a.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
              (0, e.jsx)("div", {}),
              (0, e.jsx)("div", {}),
            );
          else if (j == 4) {
            let x = (0, e.jsx)(L.uU, {
              href: "https://partner.steamgames.com/doc/store/pricing",
            });
            y = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  children: (0, a.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError1",
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, a.oW)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError2",
                    x,
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, a.we)(
                    "#PricingDashboard_PriceProposal_Publish_CooldownError3",
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, e.jsxs)("ol", {
                    children: [
                      (0, e.jsx)("li", {
                        children: (0, a.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownError3a",
                        ),
                      }),
                      (0, e.jsx)("li", {
                        children: (0, a.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownError3b",
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            });
          } else
            _ == 3 &&
              (y = (0, a.oW)(
                "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
                (0, e.jsx)("div", {}),
                (0, e.jsx)("div", {}),
              ));
          if (y) {
            let x = (0, a.we)(
              d
                ? "#PricingDashboard_PriceProposal_Publish_Title"
                : "#PricingDashboard_StageNewPrices_title",
            );
            return (
              j == 4 &&
                (x = (0, a.we)(
                  "#PricingDashboard_PriceProposal_Publish_CantPublishTitle",
                )),
              (0, e.jsx)(W.o0, {
                strTitle: x,
                bAlertDialog: !0,
                onOK: r,
                onCancel: r,
                closeModal: r,
                children: (0, e.jsx)("div", {
                  className: I().PublishErrorDialog,
                  children: y,
                }),
              })
            );
          }
          let m = j == 1 || _ == 1;
          return (0, e.jsxs)(W.o0, {
            strTitle: (0, a.we)(
              d
                ? "#PricingDashboard_PriceProposal_Publish_Title"
                : "#PricingDashboard_StageNewPrices_title",
            ),
            bAlertDialog: !1,
            strOKButtonText: (0, a.we)(
              d
                ? "#PricingDashboard_PriceProposal_Publish_Button"
                : "#PricingDashboard_StageNewPrices_ok",
            ),
            bOKDisabled: m,
            bCancelDisabled: m,
            bDestructiveWarning: !0,
            onOK: K,
            onCancel: r,
            closeModal: r,
            children: [
              m && (0, e.jsx)(O.t, { position: "center" }),
              !m &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, a.Yp)(
                      d
                        ? "#PricingDashboard_PriceProposal_Publish_Explanation"
                        : "#PricingDashboard_StageNewPrices_desc_Timing",
                      c.length,
                    ),
                    !d &&
                      (0, e.jsx)("div", {
                        className: I().StageNote,
                        children: (0, a.we)(
                          "#PricingDashboard_StageNewPrices_NoStoreChange",
                        ),
                      }),
                    d &&
                      u &&
                      (0, e.jsx)("div", {
                        className: I().PublishWarning,
                        children: (0, a.we)(
                          "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                        ),
                      }),
                    (0, e.jsx)(g.t, { rgLocalPriceOverrides: c }),
                  ],
                }),
            ],
          });
        }
        var ee = ((n) => (
          (n[(n.Idle = 0)] = "Idle"),
          (n[(n.Loading = 1)] = "Loading"),
          (n[(n.OK = 2)] = "OK"),
          (n[(n.Failed = 3)] = "Failed"),
          n
        ))(ee || {});
        function Y(n) {
          const r = (0, h.h4)(),
            [l, d] = A.useState(0);
          return {
            fnPublish: A.useCallback(async () => {
              if ((d(1), (await r(n)).success != R.R)) {
                d(3);
                return;
              }
              d(2);
            }, [d, r, n]),
            ePublishState: l,
          };
        }
        var se = ((n) => (
          (n[(n.Idle = 0)] = "Idle"),
          (n[(n.Loading = 1)] = "Loading"),
          (n[(n.OK = 2)] = "OK"),
          (n[(n.FailedToLoad = 3)] = "FailedToLoad"),
          (n[(n.RequiresCooldown = 4)] = "RequiresCooldown"),
          n
        ))(se || {});
        function J(n, r) {
          let [l, d] = A.useState(void 0);
          const c = (0, T.zq)(),
            u = (0, z.P_)(60);
          return (
            A.useEffect(() => {
              r &&
                (d(void 0),
                c([n], void 0, 60 * 1e3).then(async (_) => {
                  d(_);
                }));
            }, [r, n, d, c]),
            r
              ? l == null
                ? 1
                : l != R.R
                  ? 3
                  : (0, T.qN)(n).every(
                        (_) => _.rtStartDate > u + X.nu || _.rtEndDate < u,
                      )
                    ? 2
                    : 4
              : 2
          );
        }
        var $ = s(64868),
          Z = s(58534),
          Q = s(96434),
          G = s.n(Q),
          k = s(31886);
        function ie(n) {
          const { packageID: r, bShowCancel: l } = n,
            d = (0, h.XB)(r),
            c = (0, h.d$)(r),
            u = c && (0, S.mK)(c.rtSubmitted),
            [j, K] = (0, p.Hl)(c?.submitterID),
            _ = K ? K.persona_name : c?.submitterID;
          let y = "PackageMore_" + r,
            m = null,
            x = null,
            B = null;
          d
            ? ((m = t().NeedsReview),
              (B = (0, a.we)(
                "#PricingDashboard_PriceProposal_NeedsReview_ttip",
              )),
              (x = (0, a.we)("#PricingDashboard_PriceProposal_NeedsReview")))
            : c?.eState == C.Al && c.bPartnerWillPublish
              ? ((m = t().PartnerWillPublish),
                (B = (0, a.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                  _,
                  u,
                )),
                (x = (0, a.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
                )))
              : c?.eState == C.Al && !c.bPartnerWillPublish
                ? ((m = t().AutoPublish),
                  (B = (0, a.we)(
                    "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip",
                    _,
                    u,
                  )),
                  (x = (0, e.jsxs)("div", {
                    children: [
                      (0, a.we)(
                        "#PricingDashboard_PriceProposal_WaitingForReview",
                      ),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("span", {
                        children: (0, a.we)(
                          "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish",
                        ),
                      }),
                    ],
                  })))
                : c?.eState == C.Zo
                  ? ((m = t().ApprovedCanPublish),
                    (B = (0, a.we)(
                      "#PricingDashboard_PriceProposal_Approved_ttip",
                    )),
                    (x = (0, e.jsx)(v, { packageID: r })))
                  : ((m = t().NoProposalsInFlight),
                    (B = (0, a.we)(
                      "#PricingDashboard_PriceProposal_NoneInFlight_ttip",
                    )),
                    (x = (0, a.we)(
                      "#PricingDashboard_PriceProposal_NoneInFlight",
                    )));
          let V = () => (0, e.jsx)(D, { packageID: r }),
            re = l && (d || !!c);
          return (0, e.jsxs)("div", {
            className: (0, w.A)(t().ProposalState, m),
            children: [
              (0, e.jsxs)(f.he, {
                toolTipContent: B,
                className: t().StateText,
                children: [
                  (0, e.jsx)("div", { className: t().ProposalStateKey }),
                  x,
                ],
              }),
              re &&
                (0, e.jsx)(E.O, {
                  hoverKey: y,
                  className: t().PackageMore,
                  renderHover: V,
                }),
            ],
          });
        }
        function ne(n) {
          const r = (0, h.d$)(n),
            l = (0, k.E1)(n);
          return r
            ? r.eState == C.Zo
              ? l
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
                    strMessage: l
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
        function P(n) {
          const r = ne(n.packageID);
          return r
            ? (0, e.jsx)(b.EY, {
                size: "4",
                color: r.bApproved ? "text-success" : "text-warning",
                children: (0, a.we)(r.strMessage),
              })
            : null;
        }
        function o(n) {
          const r = ne(n.packageID);
          return r
            ? (0, e.jsx)(b.EY, {
                size: "3",
                color: r.bApproved ? "text-success" : "text-warning",
                children: (0, a.we)(r.strLabel),
              })
            : null;
        }
        function v(n) {
          const { packageID: r } = n,
            [l, d, c] = (0, $.uD)(),
            u = (0, k.E1)(r);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Z.jn, {
                onClick: d,
                children: (0, a.we)(
                  u
                    ? "#PricingDashboard_PriceProposal_PublishDialog_Button"
                    : "#PricingDashboard_StageNewPrices",
                ),
              }),
              (0, e.jsx)(W.EN, {
                active: l,
                children: (0, e.jsx)(F, {
                  packageID: r,
                  bPackageVisible: u,
                  closeModal: c,
                }),
              }),
            ],
          });
        }
        function D(n) {
          const { packageID: r } = n,
            l = (0, h.XB)(r);
          let d = (0, h.T_)(r);
          const c = (0, h.d$)(r);
          let u = (0, h.fr)(r);
          return (0, e.jsx)("div", {
            className: G().PricePopout,
            children: (0, e.jsxs)("div", {
              className: G().DetailRow,
              children: [
                l &&
                  (0, e.jsx)("div", {
                    className: G().DetailLabel,
                    onClick: d,
                    children: (0, a.we)("#PricingDashboard_RevertAllPackage"),
                  }),
                !!c &&
                  (0, e.jsx)("div", {
                    className: G().DetailLabel,
                    onClick: u,
                    children: (0, a.we)(
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
        s.d(N, { Zg: () => G, BL: () => Y, cK: () => se });
        var e = s(7850),
          b = s(72604),
          h = s(64868),
          S = s(15659),
          p = s(31886),
          a = s(37424),
          C = s(90626),
          w = s(7582),
          f = s(58534),
          E = s(2801),
          U = s(88003),
          t = s(36118),
          R = s(85599),
          A = s(53107),
          W = s(47689),
          O = s(36707),
          L = s(82734),
          i = s(18210),
          I = s(36174),
          T = s(1912);
        function z(P) {
          const { closeModal: o } = P,
            v = (0, a.Ci)(),
            D = (0, a.NC)();
          return (0, e.jsxs)(E.o0, {
            strTitle: (0, i.we)("#PackageGrid_DiscardChangesTitle"),
            strOKButtonText: (0, i.we)("#PackageGrid_DiscardChangesButton"),
            onOK: D,
            bDestructiveWarning: !0,
            closeModal: o,
            children: [
              (0, i.Yp)(
                "#PricingDashboard_DiscardChangesExplanation",
                v.length,
              ),
              (0, e.jsx)(T.t, { rgLocalPriceOverrides: v }),
            ],
          });
        }
        var X = s(18715),
          g = s.n(X);
        const F = 30,
          ee = 40;
        function Y(P) {
          const { bReloadPageOnSave: o } = P;
          let D = (0, a.Ci)()?.length ?? 0,
            n = D > 0;
          const [r, l, d] = (0, h.uD)(),
            [c, u, j] = (0, h.uD)();
          return (0, e.jsxs)("div", {
            className: (0, O.A)(g().ToolbarInfo, n && g().Visible),
            children: [
              (0, e.jsx)("div", {
                className: g().ChangeCount,
                children: (0, i.Yp)("#PackageGrid_PendingChangeCount", D),
              }),
              (0, e.jsxs)("div", {
                className: g().Buttons,
                children: [
                  (0, e.jsx)(f.$n, {
                    onClick: l,
                    disabled: D == 0,
                    className: (0, O.A)(g().Button, g().SaveButton),
                    children: (0, i.we)("#PackageGrid_SaveChangesDialogButton"),
                  }),
                  (0, e.jsx)(E.EN, {
                    active: r,
                    children: (0, e.jsx)(G, {
                      closeModal: d,
                      bReloadPageOnSave: o,
                    }),
                  }),
                  (0, e.jsx)(f.$n, {
                    className: g().Button,
                    onClick: u,
                    children: (0, i.we)(
                      "#PackageGrid_DiscardChangesDialogButton",
                    ),
                  }),
                  (0, e.jsx)(E.EN, {
                    active: c,
                    children: (0, e.jsx)(z, { closeModal: j }),
                  }),
                ],
              }),
            ],
          });
        }
        function se() {
          return C.useCallback(
            (P, o) =>
              (0, U.pg)((0, e.jsx)(G, { strContinueUrl: o }), (0, L.uX)(P)),
            [],
          );
        }
        function J(P) {
          return P.filter((o) => o.nPriceInCents > o.nOldPriceInCents).map(
            (o) => o.packageID,
          );
        }
        function $(P) {
          let [o, v] = C.useState(void 0);
          const D = (0, S.zq)(),
            n = (0, w.P_)(60);
          return (
            C.useEffect(() => {
              v(void 0);
              let l = J(P);
              l.length > 0
                ? D(l, void 0, 60 * 1e3).then((d) => {
                    v(d);
                  })
                : v(b.R);
            }, [v, P, D]),
            C.useMemo(() => {
              if (o === void 0) return null;
              if (o != b.R) return { days: 0, loadFailed: !0 };
              let l = Number.MAX_SAFE_INTEGER,
                d = J(P);
              for (let c of d) {
                const u = (0, S.qN)(c);
                for (const j of u) {
                  if (j.rtStartDate < n) continue;
                  let K = Math.floor((j.rtStartDate - n) / I.Kp.PerDay);
                  l = Math.min(l, K);
                }
              }
              return { days: l, loadFailed: !1 };
            }, [o, n, P])
          );
        }
        const Z = 5;
        function Q(P) {
          const { rgViolations: o } = P;
          if (o.length == 0) return null;
          const v = o.slice(0, Z),
            D = o.length - v.length,
            n = (0, e.jsx)(A.uU, {
              href: "https://partner.steamgames.com/doc/store/pricing",
            });
          return (0, e.jsxs)("div", {
            className: g().PricePreviewWarning,
            children: [
              v.map((r) =>
                (0, e.jsx)(
                  "div",
                  {
                    className: g().PricePreviewWarningLine,
                    children: (0, i.we)(
                      r.bTooLow
                        ? "#PricingDashboard_PreviewWarning_TooLow"
                        : "#PricingDashboard_PreviewWarning_TooHigh",
                      (0, p.ww)(r.packageID),
                      r.strPriceKey,
                      (0, a.Wx)(r.nPriceInCents, r.strPriceKey).join(""),
                      (0, a.Wx)(r.nLimitInCents, r.strPriceKey).join(""),
                    ),
                  },
                  `${r.packageID}_${r.strPriceKey}`,
                ),
              ),
              D > 0 &&
                (0, e.jsx)("div", {
                  className: g().PricePreviewWarningLine,
                  children: (0, i.Yp)(
                    "#PricingDashboard_PreviewWarning_MorePriceProblems",
                    D,
                  ),
                }),
              (0, e.jsx)("div", {
                className: g().PricePreviewWarningLine,
                children: (0, i.oW)(
                  "#PricingDashboard_PreviewWarning_SeeRules",
                  n,
                ),
              }),
            ],
          });
        }
        function G(P) {
          const { closeModal: o, strContinueUrl: v, bReloadPageOnSave: D } = P,
            n = (0, a.Ci)(),
            r = (0, a.NC)(),
            [l, d] = C.useState(void 0),
            c = $(n);
          if (!c) return null;
          const u = !!v,
            j = (0, i.we)(
              u
                ? "#PackageGrid_NavigationWarning_Title"
                : "#PricingDashboard_SavePricesTitle",
            ),
            K = (0, i.Yp)("#PricingDashboard_SavePricesExplanation", n.length);
          if (c.loadFailed)
            return (0, e.jsx)(E.o0, {
              strTitle: j,
              bAlertDialog: !0,
              onOK: o,
              onCancel: o,
              closeModal: o,
              children: (0, e.jsx)("div", {
                className: g().PublishErrorDialog,
                children: (0, i.oW)(
                  "#PricingDashboard_SavePrices_FailedToLoad",
                  (0, e.jsx)("div", {}),
                  (0, e.jsx)("div", {}),
                ),
              }),
            });
          let _ = [],
            y = new Set(),
            m = new Set();
          for (const H of n) {
            const { packageID: q, strPriceKey: oe, nPriceInCents: ae } = H,
              { nMinPriceInCents: de, nMaxPriceInCents: le } = (0, a.tn)(q, oe);
            ae < de
              ? _.push({
                  packageID: q,
                  strPriceKey: oe,
                  nPriceInCents: ae,
                  nLimitInCents: de,
                  bTooLow: !0,
                })
              : le &&
                ae > le &&
                _.push({
                  packageID: q,
                  strPriceKey: oe,
                  nPriceInCents: ae,
                  nLimitInCents: le,
                  bTooLow: !1,
                }),
              H.nPriceInCents > H.nOldPriceInCents && y.add(H.strPriceKey),
              m.add(H.packageID);
          }
          const x = Array.from(y);
          let B = (0, a.ww)(m),
            V;
          if (B.length > 0) {
            let H = B.map((q) => (0, p.ww)(q));
            V = (0, i.we)("#PricingDashboad_RequiredPrices", H.join(", "));
          }
          const re = _.length > 0 || l === void 0 || B.length != 0,
            ce = (H) => {
              v
                ? (window.location.href = v)
                : D && !H && window.location.reload();
            },
            te = () => {
              if (l === void 0) {
                console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
                return;
              }
              P.closeModal(),
                (0, U.pg)(
                  (0, e.jsx)(ne, { bAutoPublish: l, fnOnSuccess: ce }),
                  window,
                );
            },
            Pe = () => {
              r(), P.closeModal(), ce(!0);
            };
          return (0, e.jsx)(E.eV, {
            title: j,
            onOK: te,
            onCancel: P.closeModal,
            bDestructiveWarning: u,
            closeModal: o,
            children: (0, e.jsxs)(f.nB, {
              className: g().SaveDialogBody,
              children: [
                (0, e.jsxs)(f.a3, {
                  className: g().SaveDialogBodyText,
                  children: [
                    u &&
                      (0, e.jsx)("div", {
                        className: g().NavigationWarning,
                        children: (0, i.we)("#PackageGrid_NavigationWarning"),
                      }),
                    K,
                    (0, e.jsx)(Q, { rgViolations: _ }),
                    V &&
                      (0, e.jsxs)("div", {
                        className: g().PricePreviewWarning,
                        children: [" ", V, " "],
                      }),
                    (0, e.jsx)(T.t, { rgLocalPriceOverrides: n }),
                    (0, e.jsx)(k, {
                      rgIncreasedPriceKeys: x,
                      nextDiscount: c.days,
                    }),
                    (0, e.jsx)(ie, {
                      value: l,
                      onChange: d,
                      nextDiscount: c.days,
                    }),
                  ],
                }),
                (0, e.jsx)(f.wi, {
                  children: u
                    ? (0, e.jsx)(f.VQ, {
                        strOKText: (0, i.we)("#Button_Save"),
                        onOK: te,
                        bOKDisabled: re,
                        strUpdateText: (0, i.we)(
                          "#PackageGrid_NavigateWithoutSavingButton",
                        ),
                        onUpdate: Pe,
                        onCancel: P.closeModal,
                      })
                    : (0, e.jsx)(f.CB, {
                        strOKText: (0, i.we)("#Button_Save"),
                        onOK: te,
                        bOKDisabled: re,
                        onCancel: P.closeModal,
                      }),
                }),
              ],
            }),
          });
        }
        function k(P) {
          let { rgIncreasedPriceKeys: o, nextDiscount: v } = P;
          if (o.length == 0) return null;
          let D;
          return (
            v < F
              ? (D = (0, i.we)(
                  "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                  F,
                ))
              : v < ee
                ? (D = (0, i.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountSoon",
                    v,
                    F,
                  ))
                : (D = (0, i.we)(
                    "#PricingDashboard_SavePrice_CooldownWarning",
                    F,
                  )),
            (0, e.jsxs)("div", {
              className: g().PriceChangeSaveWarning,
              children: [
                (0, e.jsx)("div", {
                  className: g().PriceChangeSaveWarningArrow,
                  children: (0, e.jsx)(t.i3G, { angle: 0 }),
                }),
                (0, e.jsxs)("div", {
                  className: g().PriceChangeSaveWarningText,
                  children: [
                    (0, e.jsxs)("div", {
                      className: g().HigherPriceWarning,
                      children: [" ", D, " "],
                    }),
                    (0, e.jsx)("div", {
                      className: g().IncreasedCurrencies,
                      children: (0, i.Yp)(
                        "#PricingDashboard_SavePrice_IncreasedCurrencies",
                        o.length,
                        o.join(", "),
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function ie(P) {
          let { value: o, onChange: v } = P,
            D = () => v(!0),
            n = () => v(!1),
            r = P.nextDiscount <= F;
          return (0, e.jsxs)("div", {
            className: g().AutoPublishCheckBox,
            children: [
              (0, e.jsx)(f.Od, {
                className: g().RadioButtons,
                checked: o === !1,
                onChange: n,
                label: (0, i.we)("#PricingDashboard_AutoPublish_Disabled"),
              }),
              (0, e.jsx)(f.Od, {
                className: g().RadioButtons,
                checked: o === !0,
                disabled: r,
                onChange: D,
                label: (0, i.we)("#PricingDashboard_AutoPublish_Enabled"),
              }),
            ],
          });
        }
        function ne(P) {
          const { closeModal: o, bAutoPublish: v, fnOnSuccess: D } = P,
            n = (0, a.Ci)(),
            r = (0, a.Bt)(),
            l = (0, W.m)("SaveProgressDialog"),
            [d, c] = C.useState(0),
            [u, j] = C.useState(null),
            K = () => {
              l.cancel("cancelled by user");
            },
            _ = !v;
          return (
            C.useEffect(() => {
              (async () => {
                const m = Array.from(new Set(n.map((x) => x.packageID)));
                for (let x = 0; x < m.length; x++) {
                  c(x);
                  const B = m[x],
                    V = await r(B, _, l);
                  if (l.token.reason) return;
                  if (V.success != b.R) {
                    j(V.msg ?? (0, i.we)("#PricingDashboard_SavePricesError"));
                    return;
                  }
                }
                c(m.length), D(), o();
              })();
            }, []),
            (0, e.jsx)(E.o0, {
              strTitle: (0, i.we)("#PackageGrid_SaveInProgress"),
              bAlertDialog: !!u,
              strOKButtonText: u
                ? (0, i.we)("#Button_Close")
                : (0, i.we)("#Button_OK"),
              onOK: u ? o : D,
              onCancel: K,
              closeModal: o,
              bDestructiveWarning: !0,
              children:
                u ??
                (0, e.jsx)(R.t, {
                  position: "center",
                  string: (0, i.we)("#PricingDashboard_Progress", d),
                }),
            })
          );
        }
      },
      20929: (M, N, s) => {
        "use strict";
        s.d(N, { J: () => S });
        var e = s(7850),
          b = s(90626);
        const h = b.lazy(() =>
            Promise.all([s.e(94781), s.e(47049)]).then(s.bind(s, 47049)),
          ),
          S = h
            ? function (a) {
                return (0, e.jsx)(b.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(h, { ...a }),
                });
              }
            : (p) => null;
      },
      47689: (M, N, s) => {
        "use strict";
        s.d(N, { m: () => S });
        var e = s(41735),
          b = s.n(e),
          h = s(90626);
        function S(p) {
          const a = h.useRef(b().CancelToken.source());
          return (
            h.useEffect(() => {
              const C = a.current;
              return () => C.cancel(p ? `${p}: unmounting` : "unmounting");
            }, [p]),
            a.current
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
          PricePreviewWarningLine: "_1Fr6wQhuDghGzMFD8XxFWR",
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
