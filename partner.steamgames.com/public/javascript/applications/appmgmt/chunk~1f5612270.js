/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3912],
  {
    85274: (e) => {
      e.exports = { MoreDots: "_2YpW8SafRsHDfQIUT2DzUP" };
    },
    14578: (e) => {
      e.exports = {
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
    12917: (e) => {
      e.exports = {
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
    18715: (e) => {
      e.exports = {
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
    95582: (e, i, r) => {
      "use strict";
      r.d(i, { i: () => u });
      var s = r(7850),
        a = r(83800),
        n = r(69423),
        o = r(9154),
        t = r(61859),
        l = r(78327),
        c = r(14578),
        d = r.n(c),
        P = r(7929);
      function u(e) {
        const { closeModal: i, fnOnApply: r, singlePackage: c } = e,
          u = (0, n._A)();
        return (0, s.jsxs)(o.o0, {
          closeModal: i,
          bAlertDialog: !0,
          strTitle: P.g.Localize("#PricingDashboard_ApplyConversion_Method"),
          onOK: () => {
            u(), r && r();
          },
          strOKButtonText: c
            ? (0, t.we)("#PricingDashboard_ApplyGuidelines_Button_Single")
            : (0, t.we)("#PricingDashboard_ApplyGuidelines_Button"),
          children: [
            (0, s.jsx)("div", {
              className: d().Instructions,
              children: P.g.Localize(
                "#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions",
              ),
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("a", {
              href: l.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
              target: "_blank",
              children: (0, t.we)("#PricingDashboard_ApplyGuidelines_Link"),
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)("br", {}),
            !c &&
              (0, s.jsx)("div", {
                className: d().Instructions,
                children: (0, t.we)(
                  "#PricingDashboard_ApplyGuidelines_Instructions2",
                ),
              }),
            (0, s.jsx)("div", {
              className: d().Instructions,
              children: (0, t.we)(
                "#PricingDashboard_ApplyGuidelines_Assurance",
              ),
            }),
            (0, s.jsx)("br", {}),
            (0, s.jsx)(a.J, { bHideTour: !0 }),
          ],
        });
      }
    },
    61311: (e, i, r) => {
      "use strict";
      r.d(i, { t: () => _ });
      var s = r(7850),
        a = r(96745),
        n = r(69423),
        o = r(90626),
        t = r(16676),
        l = r(12155),
        c = r(32754),
        d = r(52038),
        P = r(61859),
        u = r(10754),
        g = r(18715),
        h = r.n(g);
      function _(e) {
        const { rgLocalPriceOverrides: i } = e,
          [r, a] = o.useState(i.length < 9);
        return (0, s.jsx)("div", {
          className: h().SeeDetailsSection,
          children: r
            ? (0, s.jsx)("div", {
                className: h().PriceOverrideSummaryList,
                children: i.map((e) =>
                  (0, s.jsx)(
                    b,
                    { override: e },
                    `${e.packageID}_${e.strPriceKey}`,
                  ),
                ),
              })
            : (0, s.jsx)(t.$n, {
                onClick: () => a(!0),
                className: h().SeeDetailsButton,
                children: (0, P.we)("#PackageGrid_SeePendingChanges"),
              }),
        });
      }
      function b(e) {
        const { override: i } = e,
          {
            packageID: r,
            strPriceKey: o,
            nPriceInCents: t,
            nOldPriceInCents: P,
          } = i,
          g = (0, a.ww)(r),
          [_, b, p] = (0, n.Wx)(P, o),
          [v, x, D] = (0, n.Wx)(t, o),
          w = (0, n.XK)(o),
          { nMinPriceInCents: j, nMaxPriceInCents: C } = (0, n.tn)(r, o),
          m = t < j || (!!C && t > C);
        return (0, s.jsxs)("div", {
          className: (0, d.A)(h().PriceOverrideSummary),
          children: [
            (0, s.jsx)(c.he, {
              toolTipContent: w,
              direction: "top",
              className: h().Currency,
              strTooltipClassname: h().HoverToolTip,
              children: o,
            }),
            (0, s.jsx)(c.he, {
              toolTipContent: `${r}: ${g}`,
              direction: "overlay",
              className: h().PackageName,
              strTooltipClassname: h().HoverToolTip,
              children: g,
            }),
            m
              ? (0, s.jsx)(u.T6, { packageID: r, strPriceKey: o })
              : (0, s.jsx)(u.Gy, { nPriceInCents: t, nSavedPriceInCents: P }),
            (0, s.jsxs)("div", {
              className: h().OldPriceCtn,
              children: [
                (0, s.jsx)("div", { className: h().PricePrefix, children: _ }),
                (0, s.jsx)("span", { className: h().OldPrice, children: b }),
                (0, s.jsx)("div", { className: h().PriceSuffix, children: p }),
              ],
            }),
            (0, s.jsx)("span", {
              className: h().ChangeArrow,
              children: (0, s.jsx)(l.i3G, { angle: 90 }),
            }),
            (0, s.jsxs)("div", {
              className: h().NewPriceCtn,
              children: [
                (0, s.jsx)("div", { className: h().PricePrefix, children: _ }),
                (0, s.jsx)("span", { className: h().NewPrice, children: x }),
                (0, s.jsx)("div", { className: h().PriceSuffix, children: p }),
              ],
            }),
          ],
        });
      }
    },
    74267: (e, i, r) => {
      "use strict";
      r.d(i, { O: () => u });
      var s = r(7850),
        a = r(90626),
        n = r(85274),
        o = r.n(n),
        t = r(12155),
        l = r(52038),
        c = r(49771),
        d = r(6336);
      const P = new c.MX("price-grid-cell-popout-elements");
      function u(e) {
        let { hoverKey: i, className: r, renderHover: n } = e,
          c = (0, l.A)(o().MoreDots, r),
          u = a.useRef(void 0),
          g = a.useCallback(() => {
            P.HideElement(u.current.ownerDocument, i);
          }, [i]);
        return (0, s.jsx)("div", {
          ref: u,
          tabIndex: -1,
          className: c,
          onFocus: (e) => {
            e.target.focus();
            let r = (0, s.jsx)(d.g, {
              target: u.current,
              direction: "top",
              bEnablePointerEvents: !0,
              nBodyDistance: 0,
              onClick: g,
              children: n(),
            });
            P.ShowElement(u.current.ownerDocument, r, i);
          },
          onBlur: () => {
            P.HideElement(u.current.ownerDocument, i, 100);
          },
          children: (0, s.jsx)(t.faJ, {}),
        });
      }
    },
    86762: (e, i, r) => {
      "use strict";
      r.d(i, { m2: () => B, QD: () => M, RW: () => R });
      var s,
        a,
        n = r(7850),
        o = r(20187),
        t = r(69423),
        l = r(10754),
        c = r(41103),
        d = r(61859),
        P = r(4160),
        u = r(52038),
        g = r(32754),
        h = r(74267),
        _ = r(12917),
        b = r.n(_),
        p = r(37085),
        v = r(90626),
        x = r(9154),
        D = r(22797),
        w = r(51272),
        j = r(18715),
        C = r.n(j),
        m = r(48996),
        S = r(44165),
        f = r(87924),
        N = r(61311);
      function I(e) {
        const { closeModal: i, packageID: r, bPackageVisible: o } = e,
          l = (0, t.FX)(r),
          c = l.some((e) => e.nPriceInCents > e.nOldPriceInCents),
          P = (function (e, i) {
            let [r, s] = v.useState(void 0);
            const n = (0, m.zq)(),
              o = (0, S.P_)(60);
            if (
              (v.useEffect(() => {
                i &&
                  (s(void 0),
                  n([e], void 0, 6e4).then(async (e) => {
                    s(e);
                  }));
              }, [i, e, s, n]),
              !i)
            )
              return a.OK;
            if (null == r) return a.Loading;
            if (r != p.R) return a.FailedToLoad;
            const t = (0, m.qN)(e);
            return t.every((e) => e.rtStartDate > o + f.nu || e.rtEndDate < o)
              ? a.OK
              : a.RequiresCooldown;
          })(r, c),
          { fnPublish: u, ePublishState: g } = (function (e) {
            const i = (0, t.h4)(),
              [r, a] = v.useState(s.Idle);
            let n = v.useCallback(async () => {
              a(s.Loading);
              (await i(e)).success == p.R ? a(s.OK) : a(s.Failed);
            }, [a, i, e]);
            return { fnPublish: n, ePublishState: r };
          })(r);
        let h;
        if (P == a.FailedToLoad)
          h = (0, d.oW)(
            "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
            (0, n.jsx)("div", {}),
            (0, n.jsx)("div", {}),
          );
        else if (P == a.RequiresCooldown) {
          let e = (0, n.jsx)(w.uU, {
            href: "https://partner.steamgames.com/doc/store/pricing",
          });
          h = (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                children: (0, d.we)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError1",
                ),
              }),
              (0, n.jsx)("div", {
                children: (0, d.oW)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError2",
                  e,
                ),
              }),
              (0, n.jsx)("div", {
                children: (0, d.we)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError3",
                ),
              }),
              (0, n.jsx)("div", {
                children: (0, n.jsxs)("ol", {
                  children: [
                    (0, n.jsx)("li", {
                      children: (0, d.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownError3a",
                      ),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, d.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownError3b",
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        } else
          g == s.Failed &&
            (h = (0, d.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
              (0, n.jsx)("div", {}),
              (0, n.jsx)("div", {}),
            ));
        if (h) {
          let e = (0, d.we)(
            o
              ? "#PricingDashboard_PriceProposal_Publish_Title"
              : "#PricingDashboard_StageNewPrices_title",
          );
          return (
            P == a.RequiresCooldown &&
              (e = (0, d.we)(
                "#PricingDashboard_PriceProposal_Publish_CantPublishTitle",
              )),
            (0, n.jsx)(x.o0, {
              strTitle: e,
              bAlertDialog: !0,
              onOK: i,
              onCancel: i,
              closeModal: i,
              children: (0, n.jsx)("div", {
                className: C().PublishErrorDialog,
                children: h,
              }),
            })
          );
        }
        let _ = P == a.Loading || g == s.Loading;
        return (0, n.jsxs)(x.o0, {
          strTitle: (0, d.we)(
            o
              ? "#PricingDashboard_PriceProposal_Publish_Title"
              : "#PricingDashboard_StageNewPrices_title",
          ),
          bAlertDialog: !1,
          strOKButtonText: (0, d.we)(
            o
              ? "#PricingDashboard_PriceProposal_Publish_Button"
              : "#PricingDashboard_StageNewPrices_ok",
          ),
          bOKDisabled: _,
          bCancelDisabled: _,
          bDestructiveWarning: !0,
          onOK: u,
          onCancel: i,
          closeModal: i,
          children: [
            _ && (0, n.jsx)(D.t, { position: "center" }),
            !_ &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, d.Yp)(
                    o
                      ? "#PricingDashboard_PriceProposal_Publish_Explanation"
                      : "#PricingDashboard_StageNewPrices_desc_Timing",
                    l.length,
                  ),
                  !o &&
                    (0, n.jsx)("div", {
                      className: C().StageNote,
                      children: (0, d.we)(
                        "#PricingDashboard_StageNewPrices_NoStoreChange",
                      ),
                    }),
                  o &&
                    c &&
                    (0, n.jsx)("div", {
                      className: C().PublishWarning,
                      children: (0, d.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                      ),
                    }),
                  (0, n.jsx)(N.t, { rgLocalPriceOverrides: l }),
                ],
              }),
          ],
        });
      }
      !(function (e) {
        (e[(e.Idle = 0)] = "Idle"),
          (e[(e.Loading = 1)] = "Loading"),
          (e[(e.OK = 2)] = "OK"),
          (e[(e.Failed = 3)] = "Failed");
      })(s || (s = {})),
        (function (e) {
          (e[(e.Idle = 0)] = "Idle"),
            (e[(e.Loading = 1)] = "Loading"),
            (e[(e.OK = 2)] = "OK"),
            (e[(e.FailedToLoad = 3)] = "FailedToLoad"),
            (e[(e.RequiresCooldown = 4)] = "RequiresCooldown");
        })(a || (a = {}));
      var O = r(64753),
        T = r(16676),
        k = r(96434),
        A = r.n(k),
        y = r(96745);
      function B(e) {
        const { packageID: i, bShowCancel: r } = e,
          s = (0, t.XB)(i),
          a = (0, t.d$)(i),
          o = a && (0, l.mK)(a.rtSubmitted),
          [_, p] = (0, c.Hl)(a?.submitterID),
          v = p ? p.persona_name : a?.submitterID;
        let x = "PackageMore_" + i,
          D = null,
          w = null,
          j = null;
        s
          ? ((D = b().NeedsReview),
            (j = (0, d.we)("#PricingDashboard_PriceProposal_NeedsReview_ttip")),
            (w = (0, d.we)("#PricingDashboard_PriceProposal_NeedsReview")))
          : a?.eState == P.Al && a.bPartnerWillPublish
            ? ((D = b().PartnerWillPublish),
              (j = (0, d.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                v,
                o,
              )),
              (w = (0, d.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
              )))
            : a?.eState != P.Al || a.bPartnerWillPublish
              ? a?.eState == P.Zo
                ? ((D = b().ApprovedCanPublish),
                  (j = (0, d.we)(
                    "#PricingDashboard_PriceProposal_Approved_ttip",
                  )),
                  (w = (0, n.jsx)(E, { packageID: i })))
                : ((D = b().NoProposalsInFlight),
                  (j = (0, d.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight_ttip",
                  )),
                  (w = (0, d.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight",
                  )))
              : ((D = b().AutoPublish),
                (j = (0, d.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip",
                  v,
                  o,
                )),
                (w = (0, n.jsxs)("div", {
                  children: [
                    (0, d.we)(
                      "#PricingDashboard_PriceProposal_WaitingForReview",
                    ),
                    (0, n.jsx)("br", {}),
                    (0, n.jsx)("span", {
                      children: (0, d.we)(
                        "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish",
                      ),
                    }),
                  ],
                })));
        let C = r && (s || !!a);
        return (0, n.jsxs)("div", {
          className: (0, u.A)(b().ProposalState, D),
          children: [
            (0, n.jsxs)(g.he, {
              toolTipContent: j,
              className: b().StateText,
              children: [
                (0, n.jsx)("div", { className: b().ProposalStateKey }),
                w,
              ],
            }),
            C &&
              (0, n.jsx)(h.O, {
                hoverKey: x,
                className: b().PackageMore,
                renderHover: () => (0, n.jsx)(K, { packageID: i }),
              }),
          ],
        });
      }
      function W(e) {
        const i = (0, t.d$)(e),
          r = (0, y.E1)(e);
        return i
          ? i.eState == P.Zo
            ? r
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
            : i.bPartnerWillPublish
              ? {
                  bApproved: !1,
                  strLabel: "#PricingDashboard_ProposedPrice_Status_InReview",
                  strMessage: r
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
      function R(e) {
        const i = W(e.packageID);
        return i
          ? (0, n.jsx)(o.EY, {
              size: "4",
              color: i.bApproved ? "text-success" : "text-warning",
              children: (0, d.we)(i.strMessage),
            })
          : null;
      }
      function M(e) {
        const i = W(e.packageID);
        return i
          ? (0, n.jsx)(o.EY, {
              size: "3",
              color: i.bApproved ? "text-success" : "text-warning",
              children: (0, d.we)(i.strLabel),
            })
          : null;
      }
      function E(e) {
        const { packageID: i } = e,
          [r, s, a] = (0, O.uD)(),
          o = (0, y.E1)(i);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(T.jn, {
              onClick: s,
              children: (0, d.we)(
                o
                  ? "#PricingDashboard_PriceProposal_PublishDialog_Button"
                  : "#PricingDashboard_StageNewPrices",
              ),
            }),
            (0, n.jsx)(x.EN, {
              active: r,
              children: (0, n.jsx)(I, {
                packageID: i,
                bPackageVisible: o,
                closeModal: a,
              }),
            }),
          ],
        });
      }
      function K(e) {
        const { packageID: i } = e,
          r = (0, t.XB)(i);
        let s = (0, t.T_)(i);
        const a = (0, t.d$)(i);
        let o = (0, t.fr)(i);
        return (0, n.jsx)("div", {
          className: A().PricePopout,
          children: (0, n.jsxs)("div", {
            className: A().DetailRow,
            children: [
              r &&
                (0, n.jsx)("div", {
                  className: A().DetailLabel,
                  onClick: s,
                  children: (0, d.we)("#PricingDashboard_RevertAllPackage"),
                }),
              !!a &&
                (0, n.jsx)("div", {
                  className: A().DetailLabel,
                  onClick: o,
                  children: (0, d.we)("#PricingDashboard_CancelPriceProposal"),
                }),
            ],
          }),
        });
      }
    },
    40818: (e, i, r) => {
      "use strict";
      r.d(i, { Zg: () => k, BL: () => I, cK: () => O });
      var s = r(7850),
        a = r(37085),
        n = r(64753),
        o = r(48996),
        t = r(96745),
        l = r(69423),
        c = r(90626),
        d = r(44165),
        P = r(16676),
        u = r(9154),
        g = r(738),
        h = r(12155),
        _ = r(22797),
        b = r(51272),
        p = r(4434),
        v = r(52038),
        x = r(56011),
        D = r(61859),
        w = r(14771),
        j = r(61311);
      function C(e) {
        const { closeModal: i } = e,
          r = (0, l.Ci)(),
          a = (0, l.NC)();
        return (0, s.jsxs)(u.o0, {
          strTitle: (0, D.we)("#PackageGrid_DiscardChangesTitle"),
          strOKButtonText: (0, D.we)("#PackageGrid_DiscardChangesButton"),
          onOK: a,
          bDestructiveWarning: !0,
          closeModal: i,
          children: [
            (0, D.Yp)("#PricingDashboard_DiscardChangesExplanation", r.length),
            (0, s.jsx)(j.t, { rgLocalPriceOverrides: r }),
          ],
        });
      }
      var m = r(18715),
        S = r.n(m);
      const f = 30,
        N = 40;
      function I(e) {
        const { bReloadPageOnSave: i } = e,
          r = (0, l.Ci)();
        let a = r?.length ?? 0,
          o = a > 0;
        const [t, c, d] = (0, n.uD)(),
          [g, h, _] = (0, n.uD)();
        return (0, s.jsxs)("div", {
          className: (0, v.A)(S().ToolbarInfo, o && S().Visible),
          children: [
            (0, s.jsx)("div", {
              className: S().ChangeCount,
              children: (0, D.Yp)("#PackageGrid_PendingChangeCount", a),
            }),
            (0, s.jsxs)("div", {
              className: S().Buttons,
              children: [
                (0, s.jsx)(P.$n, {
                  onClick: c,
                  disabled: 0 == a,
                  className: (0, v.A)(S().Button, S().SaveButton),
                  children: (0, D.we)("#PackageGrid_SaveChangesDialogButton"),
                }),
                (0, s.jsx)(u.EN, {
                  active: t,
                  children: (0, s.jsx)(k, {
                    closeModal: d,
                    bReloadPageOnSave: i,
                  }),
                }),
                (0, s.jsx)(P.$n, {
                  className: S().Button,
                  onClick: h,
                  children: (0, D.we)(
                    "#PackageGrid_DiscardChangesDialogButton",
                  ),
                }),
                (0, s.jsx)(u.EN, {
                  active: g,
                  children: (0, s.jsx)(C, { closeModal: _ }),
                }),
              ],
            }),
          ],
        });
      }
      function O() {
        return c.useCallback(
          (e, i) =>
            (0, g.pg)((0, s.jsx)(k, { strContinueUrl: i }), (0, x.uX)(e)),
          [],
        );
      }
      function T(e) {
        return e
          .filter((e) => e.nPriceInCents > e.nOldPriceInCents)
          .map((e) => e.packageID);
      }
      function k(e) {
        const { closeModal: i, strContinueUrl: r, bReloadPageOnSave: n } = e,
          h = (0, l.Ci)(),
          _ = (0, l.NC)(),
          [p, v] = c.useState(void 0),
          x = (function (e) {
            let [i, r] = c.useState(void 0);
            const s = (0, o.zq)(),
              n = (0, d.P_)(60);
            return (
              c.useEffect(() => {
                r(void 0);
                let i = T(e);
                i.length > 0
                  ? s(i, void 0, 6e4).then((e) => {
                      r(e);
                    })
                  : r(a.R);
              }, [r, e, s]),
              c.useMemo(() => {
                if (void 0 === i) return null;
                if (i != a.R) return { days: 0, loadFailed: !0 };
                let r = Number.MAX_SAFE_INTEGER,
                  s = T(e);
                for (let e of s) {
                  const i = (0, o.qN)(e);
                  for (const e of i) {
                    if (e.rtStartDate < n) continue;
                    let i = Math.floor((e.rtStartDate - n) / w.Kp.PerDay);
                    r = Math.min(r, i);
                  }
                }
                return { days: r, loadFailed: !1 };
              }, [i, n, e])
            );
          })(h);
        if (!x) return null;
        const C = !!r,
          m = (0, D.we)(
            C
              ? "#PackageGrid_NavigationWarning_Title"
              : "#PricingDashboard_SavePricesTitle",
          ),
          f = (0, D.Yp)("#PricingDashboard_SavePricesExplanation", h.length);
        if (x.loadFailed)
          return (0, s.jsx)(u.o0, {
            strTitle: m,
            bAlertDialog: !0,
            onOK: i,
            onCancel: i,
            closeModal: i,
            children: (0, s.jsx)("div", {
              className: S().PublishErrorDialog,
              children: (0, D.oW)(
                "#PricingDashboard_SavePrices_FailedToLoad",
                (0, s.jsx)("div", {}),
                (0, s.jsx)("div", {}),
              ),
            }),
          });
        let N = !1,
          I = !1,
          O = new Set(),
          k = new Set();
        for (const e of h) {
          const { nMinPriceInCents: i, nMaxPriceInCents: r } = (0, l.tn)(
            e.packageID,
            e.strPriceKey,
          );
          (N = N || e.nPriceInCents < i),
            (I = I || (!!r && e.nPriceInCents > r)),
            e.nPriceInCents > e.nOldPriceInCents && O.add(e.strPriceKey),
            k.add(e.packageID);
        }
        const W = Array.from(O);
        let R,
          M = (0, l.ww)(k);
        if (M.length > 0) {
          let e = M.map((e) => (0, t.ww)(e));
          R = (0, D.we)("#PricingDashboad_RequiredPrices", e.join(", "));
        }
        const E = N || I,
          K = E || void 0 === p || 0 != M.length,
          L = (e) => {
            r
              ? (window.location.href = r)
              : n && !e && window.location.reload();
          },
          F = () => {
            void 0 !== p
              ? (e.closeModal(),
                (0, g.pg)(
                  (0, s.jsx)(B, { bAutoPublish: p, fnOnSuccess: L }),
                  window,
                ))
              : console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
          };
        let G = (0, s.jsx)(b.uU, {
          href: "https://partner.steamgames.com/doc/store/pricing",
        });
        return (0, s.jsx)(u.eV, {
          title: m,
          onOK: F,
          onCancel: e.closeModal,
          bDestructiveWarning: C,
          closeModal: i,
          children: (0, s.jsxs)(P.nB, {
            className: S().SaveDialogBody,
            children: [
              (0, s.jsxs)(P.a3, {
                className: S().SaveDialogBodyText,
                children: [
                  C &&
                    (0, s.jsx)("div", {
                      className: S().NavigationWarning,
                      children: (0, D.we)("#PackageGrid_NavigationWarning"),
                    }),
                  f,
                  E &&
                    (0, s.jsxs)("div", {
                      className: S().PricePreviewWarning,
                      children: [
                        " ",
                        (0, D.oW)("#PricingDashboard_PreviewWarning", G),
                        " ",
                      ],
                    }),
                  R &&
                    (0, s.jsxs)("div", {
                      className: S().PricePreviewWarning,
                      children: [" ", R, " "],
                    }),
                  (0, s.jsx)(j.t, { rgLocalPriceOverrides: h }),
                  (0, s.jsx)(A, {
                    rgIncreasedPriceKeys: W,
                    nextDiscount: x.days,
                  }),
                  (0, s.jsx)(y, {
                    value: p,
                    onChange: v,
                    nextDiscount: x.days,
                  }),
                ],
              }),
              (0, s.jsx)(P.wi, {
                children: C
                  ? (0, s.jsx)(P.VQ, {
                      strOKText: (0, D.we)("#Button_Save"),
                      onOK: F,
                      bOKDisabled: K,
                      strUpdateText: (0, D.we)(
                        "#PackageGrid_NavigateWithoutSavingButton",
                      ),
                      onUpdate: () => {
                        _(), e.closeModal(), L(!0);
                      },
                      onCancel: e.closeModal,
                    })
                  : (0, s.jsx)(P.CB, {
                      strOKText: (0, D.we)("#Button_Save"),
                      onOK: F,
                      bOKDisabled: K,
                      onCancel: e.closeModal,
                    }),
              }),
            ],
          }),
        });
      }
      function A(e) {
        let i,
          { rgIncreasedPriceKeys: r, nextDiscount: a } = e;
        return 0 == r.length
          ? null
          : ((i =
              a < f
                ? (0, D.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                    f,
                  )
                : a < N
                  ? (0, D.we)(
                      "#PricingDashboard_SavePrice_FutureDiscountSoon",
                      a,
                      f,
                    )
                  : (0, D.we)(
                      "#PricingDashboard_SavePrice_CooldownWarning",
                      f,
                    )),
            (0, s.jsxs)("div", {
              className: S().PriceChangeSaveWarning,
              children: [
                (0, s.jsx)("div", {
                  className: S().PriceChangeSaveWarningArrow,
                  children: (0, s.jsx)(h.i3G, { angle: 0 }),
                }),
                (0, s.jsxs)("div", {
                  className: S().PriceChangeSaveWarningText,
                  children: [
                    (0, s.jsxs)("div", {
                      className: S().HigherPriceWarning,
                      children: [" ", i, " "],
                    }),
                    (0, s.jsx)("div", {
                      className: S().IncreasedCurrencies,
                      children: (0, D.Yp)(
                        "#PricingDashboard_SavePrice_IncreasedCurrencies",
                        r.length,
                        r.join(", "),
                      ),
                    }),
                  ],
                }),
              ],
            }));
      }
      function y(e) {
        let { value: i, onChange: r } = e,
          a = e.nextDiscount <= f;
        return (0, s.jsxs)("div", {
          className: S().AutoPublishCheckBox,
          children: [
            (0, s.jsx)(P.Od, {
              className: S().RadioButtons,
              checked: !1 === i,
              onChange: () => r(!1),
              label: (0, D.we)("#PricingDashboard_AutoPublish_Disabled"),
            }),
            (0, s.jsx)(P.Od, {
              className: S().RadioButtons,
              checked: !0 === i,
              disabled: a,
              onChange: () => r(!0),
              label: (0, D.we)("#PricingDashboard_AutoPublish_Enabled"),
            }),
          ],
        });
      }
      function B(e) {
        const { closeModal: i, bAutoPublish: r, fnOnSuccess: n } = e,
          o = (0, l.Ci)(),
          t = (0, l.Bt)(),
          d = (0, p.m)("SaveProgressDialog"),
          [P, g] = c.useState(0),
          [h, b] = c.useState(null),
          v = !r;
        return (
          c.useEffect(() => {
            (async () => {
              const e = Array.from(new Set(o.map((e) => e.packageID)));
              for (let i = 0; i < e.length; i++) {
                g(i);
                const r = e[i],
                  s = await t(r, v, d);
                if (d.token.reason) return;
                if (s.success != a.R)
                  return void b(
                    s.msg ?? (0, D.we)("#PricingDashboard_SavePricesError"),
                  );
              }
              g(e.length), n(), i();
            })();
          }, []),
          (0, s.jsx)(u.o0, {
            strTitle: (0, D.we)("#PackageGrid_SaveInProgress"),
            bAlertDialog: !!h,
            strOKButtonText: h
              ? (0, D.we)("#Button_Close")
              : (0, D.we)("#Button_OK"),
            onOK: h ? i : n,
            onCancel: () => {
              d.cancel("cancelled by user");
            },
            closeModal: i,
            bDestructiveWarning: !0,
            children:
              h ??
              (0, s.jsx)(_.t, {
                position: "center",
                string: (0, D.we)("#PricingDashboard_Progress", P),
              }),
          })
        );
      }
    },
    83800: (e, i, r) => {
      "use strict";
      r.d(i, { J: () => o });
      var s = r(7850),
        a = r(90626);
      const n = a.lazy(() =>
          Promise.all([r.e(4781), r.e(1194)]).then(r.bind(r, 81194)),
        ),
        o = n
          ? function (e) {
              return (0, s.jsx)(a.Suspense, {
                fallback: null,
                children: (0, s.jsx)(n, { ...e }),
              });
            }
          : (e) => null;
    },
    4434: (e, i, r) => {
      "use strict";
      r.d(i, { m: () => o });
      var s = r(41735),
        a = r.n(s),
        n = r(90626);
      function o(e) {
        const i = n.useRef(a().CancelToken.source());
        return (
          n.useEffect(() => {
            const r = i.current;
            return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          i.current
        );
      }
    },
  },
]);
