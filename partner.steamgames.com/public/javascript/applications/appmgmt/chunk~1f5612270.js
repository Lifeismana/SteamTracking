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
        PublishErrorDialog: "_381pEpkUlOe9X-z-1msxGm",
        HoverToolTip: "_1yXHpORUurTNRsHpzalvwp",
        PriceChangeSaveWarning: "_2lTJ7-iyFOMpIaZ-p6yDvd",
        PriceChangeSaveWarningArrow: "B3-IB6jhKQuhRCYOH9Zd5",
      };
    },
    95582: (e, i, r) => {
      "use strict";
      r.d(i, { i: () => P });
      var n = r(7850),
        a = r(83800),
        s = r(69423),
        o = r(9154),
        t = r(61859),
        l = r(78327),
        c = r(14578),
        d = r.n(c),
        u = r(7929);
      function P(e) {
        const { closeModal: i, fnOnApply: r, singlePackage: c } = e,
          P = (0, s._A)();
        return (0, n.jsxs)(o.o0, {
          closeModal: i,
          bAlertDialog: !0,
          strTitle: u.g.Localize("#PricingDashboard_ApplyConversion_Method"),
          onOK: () => {
            P(), r && r();
          },
          strOKButtonText: c
            ? (0, t.we)("#PricingDashboard_ApplyGuidelines_Button_Single")
            : (0, t.we)("#PricingDashboard_ApplyGuidelines_Button"),
          children: [
            (0, n.jsx)("div", {
              className: d().Instructions,
              children: u.g.Localize(
                "#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions",
              ),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("a", {
              href: l.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
              target: "_blank",
              children: (0, t.we)("#PricingDashboard_ApplyGuidelines_Link"),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)("br", {}),
            !c &&
              (0, n.jsx)("div", {
                className: d().Instructions,
                children: (0, t.we)(
                  "#PricingDashboard_ApplyGuidelines_Instructions2",
                ),
              }),
            (0, n.jsx)("div", {
              className: d().Instructions,
              children: (0, t.we)(
                "#PricingDashboard_ApplyGuidelines_Assurance",
              ),
            }),
            (0, n.jsx)("br", {}),
            (0, n.jsx)(a.J, { bHideTour: !0 }),
          ],
        });
      }
    },
    61311: (e, i, r) => {
      "use strict";
      r.d(i, { t: () => _ });
      var n = r(7850),
        a = r(96745),
        s = r(69423),
        o = r(90626),
        t = r(16676),
        l = r(12155),
        c = r(32754),
        d = r(52038),
        u = r(61859),
        P = r(10754),
        h = r(18715),
        g = r.n(h);
      function _(e) {
        const { rgLocalPriceOverrides: i } = e,
          [r, a] = o.useState(i.length < 9);
        return (0, n.jsx)("div", {
          className: g().SeeDetailsSection,
          children: r
            ? (0, n.jsx)("div", {
                className: g().PriceOverrideSummaryList,
                children: i.map((e) =>
                  (0, n.jsx)(
                    b,
                    { override: e },
                    `${e.packageID}_${e.strPriceKey}`,
                  ),
                ),
              })
            : (0, n.jsx)(t.$n, {
                onClick: () => a(!0),
                className: g().SeeDetailsButton,
                children: (0, u.we)("#PackageGrid_SeePendingChanges"),
              }),
        });
      }
      function b(e) {
        const { override: i } = e,
          {
            packageID: r,
            strPriceKey: o,
            nPriceInCents: t,
            nOldPriceInCents: u,
          } = i,
          h = (0, a.ww)(r),
          [_, b, v] = (0, s.Wx)(u, o),
          [x, p, D] = (0, s.Wx)(t, o),
          w = (0, s.XK)(o),
          { nMinPriceInCents: j, nMaxPriceInCents: m } = (0, s.tn)(r, o),
          C = t < j || (!!m && t > m);
        return (0, n.jsxs)("div", {
          className: (0, d.A)(g().PriceOverrideSummary),
          children: [
            (0, n.jsx)(c.he, {
              toolTipContent: w,
              direction: "top",
              className: g().Currency,
              strTooltipClassname: g().HoverToolTip,
              children: o,
            }),
            (0, n.jsx)(c.he, {
              toolTipContent: `${r}: ${h}`,
              direction: "overlay",
              className: g().PackageName,
              strTooltipClassname: g().HoverToolTip,
              children: h,
            }),
            C
              ? (0, n.jsx)(P.T6, { packageID: r, strPriceKey: o })
              : (0, n.jsx)(P.Gy, { nPriceInCents: t, nSavedPriceInCents: u }),
            (0, n.jsxs)("div", {
              className: g().OldPriceCtn,
              children: [
                (0, n.jsx)("div", { className: g().PricePrefix, children: _ }),
                (0, n.jsx)("span", { className: g().OldPrice, children: b }),
                (0, n.jsx)("div", { className: g().PriceSuffix, children: v }),
              ],
            }),
            (0, n.jsx)("span", {
              className: g().ChangeArrow,
              children: (0, n.jsx)(l.i3G, { angle: 90 }),
            }),
            (0, n.jsxs)("div", {
              className: g().NewPriceCtn,
              children: [
                (0, n.jsx)("div", { className: g().PricePrefix, children: _ }),
                (0, n.jsx)("span", { className: g().NewPrice, children: p }),
                (0, n.jsx)("div", { className: g().PriceSuffix, children: v }),
              ],
            }),
          ],
        });
      }
    },
    74267: (e, i, r) => {
      "use strict";
      r.d(i, { O: () => P });
      var n = r(7850),
        a = r(90626),
        s = r(85274),
        o = r.n(s),
        t = r(12155),
        l = r(52038),
        c = r(49771),
        d = r(6336);
      const u = new c.MX("price-grid-cell-popout-elements");
      function P(e) {
        let { hoverKey: i, className: r, renderHover: s } = e,
          c = (0, l.A)(o().MoreDots, r),
          P = a.useRef(void 0),
          h = a.useCallback(() => {
            u.HideElement(P.current.ownerDocument, i);
          }, [i]);
        return (0, n.jsx)("div", {
          ref: P,
          tabIndex: -1,
          className: c,
          onFocus: (e) => {
            e.target.focus();
            let r = (0, n.jsx)(d.g, {
              target: P.current,
              direction: "top",
              bEnablePointerEvents: !0,
              nBodyDistance: 0,
              onClick: h,
              children: s(),
            });
            u.ShowElement(P.current.ownerDocument, r, i);
          },
          onBlur: () => {
            u.HideElement(P.current.ownerDocument, i, 100);
          },
          children: (0, n.jsx)(t.faJ, {}),
        });
      }
    },
    86762: (e, i, r) => {
      "use strict";
      r.d(i, { m: () => B });
      var n,
        a,
        s = r(7850),
        o = r(69423),
        t = r(10754),
        l = r(41103),
        c = r(61859),
        d = r(4160),
        u = r(52038),
        P = r(32754),
        h = r(74267),
        g = r(12917),
        _ = r.n(g),
        b = r(37085),
        v = r(90626),
        x = r(9154),
        p = r(22797),
        D = r(51272),
        w = r(18715),
        j = r.n(w),
        m = r(48996),
        C = r(44165),
        f = r(87924),
        S = r(61311);
      function N(e) {
        const { closeModal: i, packageID: r, bPackageVisible: t } = e,
          l = (0, o.FX)(r),
          d = l.some((e) => e.nPriceInCents > e.nOldPriceInCents),
          u = (function (e, i) {
            let [r, n] = v.useState(void 0);
            const s = (0, m.zq)(),
              o = (0, C.P_)(60);
            if (
              (v.useEffect(() => {
                i &&
                  (n(void 0),
                  s([e], void 0, 6e4).then(async (e) => {
                    n(e);
                  }));
              }, [i, e, n, s]),
              !i)
            )
              return a.OK;
            if (null == r) return a.Loading;
            if (r != b.R) return a.FailedToLoad;
            const t = (0, m.qN)(e);
            return t.every((e) => e.rtStartDate > o + f.nu || e.rtEndDate < o)
              ? a.OK
              : a.RequiresCooldown;
          })(r, d),
          { fnPublish: P, ePublishState: h } = (function (e) {
            const i = (0, o.h4)(),
              [r, a] = v.useState(n.Idle);
            let s = v.useCallback(async () => {
              a(n.Loading);
              (await i(e)).success == b.R ? a(n.OK) : a(n.Failed);
            }, [a, i, e]);
            return { fnPublish: s, ePublishState: r };
          })(r);
        let g;
        if (u == a.FailedToLoad)
          g = (0, c.oW)(
            "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
            (0, s.jsx)("div", {}),
            (0, s.jsx)("div", {}),
          );
        else if (u == a.RequiresCooldown) {
          let e = (0, s.jsx)(D.uU, {
            href: "https://partner.steamgames.com/doc/store/pricing",
          });
          g = (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                children: (0, c.we)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError1",
                ),
              }),
              (0, s.jsx)("div", {
                children: (0, c.oW)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError2",
                  e,
                ),
              }),
              (0, s.jsx)("div", {
                children: (0, c.we)(
                  "#PricingDashboard_PriceProposal_Publish_CooldownError3",
                ),
              }),
              (0, s.jsx)("div", {
                children: (0, s.jsxs)("ol", {
                  children: [
                    (0, s.jsx)("li", {
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownError3a",
                      ),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownError3b",
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        } else
          h == n.Failed &&
            (g = (0, c.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
              (0, s.jsx)("div", {}),
              (0, s.jsx)("div", {}),
            ));
        if (g) {
          let e = (0, c.we)(
            t
              ? "#PricingDashboard_PriceProposal_Publish_Title"
              : "#PricingDashboard_StageNewPrices_title",
          );
          return (
            u == a.RequiresCooldown &&
              (e = (0, c.we)(
                "#PricingDashboard_PriceProposal_Publish_CantPublishTitle",
              )),
            (0, s.jsx)(x.o0, {
              strTitle: e,
              bAlertDialog: !0,
              onOK: i,
              onCancel: i,
              closeModal: i,
              children: (0, s.jsx)("div", {
                className: j().PublishErrorDialog,
                children: g,
              }),
            })
          );
        }
        let _ = u == a.Loading || h == n.Loading;
        return (0, s.jsxs)(x.o0, {
          strTitle: (0, c.we)(
            t
              ? "#PricingDashboard_PriceProposal_Publish_Title"
              : "#PricingDashboard_StageNewPrices_title",
          ),
          bAlertDialog: !1,
          strOKButtonText: (0, c.we)(
            t
              ? "#PricingDashboard_PriceProposal_Publish_Button"
              : "#PricingDashboard_StageNewPrices_ok",
          ),
          bOKDisabled: _,
          bCancelDisabled: _,
          bDestructiveWarning: !0,
          onOK: P,
          onCancel: i,
          closeModal: i,
          children: [
            _ && (0, s.jsx)(p.t, { position: "center" }),
            !_ &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, c.Yp)(
                    t
                      ? "#PricingDashboard_PriceProposal_Publish_Explanation"
                      : "#PricingDashboard_StageNewPrices_desc",
                    l.length,
                  ),
                  t &&
                    d &&
                    (0, s.jsx)("div", {
                      className: j().PublishWarning,
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                      ),
                    }),
                  (0, s.jsx)(S.t, { rgLocalPriceOverrides: l }),
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
      })(n || (n = {})),
        (function (e) {
          (e[(e.Idle = 0)] = "Idle"),
            (e[(e.Loading = 1)] = "Loading"),
            (e[(e.OK = 2)] = "OK"),
            (e[(e.FailedToLoad = 3)] = "FailedToLoad"),
            (e[(e.RequiresCooldown = 4)] = "RequiresCooldown");
        })(a || (a = {}));
      var I = r(64753),
        T = r(16676),
        O = r(96434),
        k = r.n(O),
        y = r(39777);
      function B(e) {
        const { packageID: i, bShowCancel: r } = e,
          n = (0, o.XB)(i),
          a = (0, o.d$)(i),
          g = a && (0, t.mK)(a.rtSubmitted),
          [b, v] = (0, l.Hl)(a?.submitterID),
          x = v ? v.persona_name : a?.submitterID;
        let p = "PackageMore_" + i,
          D = null,
          w = null,
          j = null;
        n
          ? ((D = _().NeedsReview),
            (j = (0, c.we)("#PricingDashboard_PriceProposal_NeedsReview_ttip")),
            (w = (0, c.we)("#PricingDashboard_PriceProposal_NeedsReview")))
          : a?.eState == d.Al && a.bPartnerWillPublish
            ? ((D = _().PartnerWillPublish),
              (j = (0, c.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                x,
                g,
              )),
              (w = (0, c.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
              )))
            : a?.eState != d.Al || a.bPartnerWillPublish
              ? a?.eState == d.Zo
                ? ((D = _().ApprovedCanPublish),
                  (j = (0, c.we)(
                    "#PricingDashboard_PriceProposal_Approved_ttip",
                  )),
                  (w = (0, s.jsx)(A, { packageID: i })))
                : ((D = _().NoProposalsInFlight),
                  (j = (0, c.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight_ttip",
                  )),
                  (w = (0, c.we)(
                    "#PricingDashboard_PriceProposal_NoneInFlight",
                  )))
              : ((D = _().AutoPublish),
                (j = (0, c.we)(
                  "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish_ttip",
                  x,
                  g,
                )),
                (w = (0, s.jsxs)("div", {
                  children: [
                    (0, c.we)(
                      "#PricingDashboard_PriceProposal_WaitingForReview",
                    ),
                    (0, s.jsx)("br", {}),
                    (0, s.jsx)("span", {
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_WaitingForReview_AutoPublish",
                      ),
                    }),
                  ],
                })));
        let m = r && (n || !!a);
        return (0, s.jsxs)("div", {
          className: (0, u.A)(_().ProposalState, D),
          children: [
            (0, s.jsxs)(P.he, {
              toolTipContent: j,
              className: _().StateText,
              children: [
                (0, s.jsx)("div", { className: _().ProposalStateKey }),
                w,
              ],
            }),
            m &&
              (0, s.jsx)(h.O, {
                hoverKey: p,
                className: _().PackageMore,
                renderHover: () => (0, s.jsx)(W, { packageID: i }),
              }),
          ],
        });
      }
      function A(e) {
        const { packageID: i } = e,
          [r, n, a] = (0, I.uD)(),
          { data: o } = (0, y.by)({ packageid: i }),
          t = Boolean(o);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(T.jn, {
              onClick: n,
              children: (0, c.we)(
                t
                  ? "#PricingDashboard_PriceProposal_PublishDialog_Button"
                  : "#PricingDashboard_StageNewPrices",
              ),
            }),
            (0, s.jsx)(x.EN, {
              active: r,
              children: (0, s.jsx)(N, {
                packageID: i,
                bPackageVisible: t,
                closeModal: a,
              }),
            }),
          ],
        });
      }
      function W(e) {
        const { packageID: i } = e,
          r = (0, o.XB)(i);
        let n = (0, o.T_)(i);
        const a = (0, o.d$)(i);
        let t = (0, o.fr)(i);
        return (0, s.jsx)("div", {
          className: k().PricePopout,
          children: (0, s.jsxs)("div", {
            className: k().DetailRow,
            children: [
              r &&
                (0, s.jsx)("div", {
                  className: k().DetailLabel,
                  onClick: n,
                  children: (0, c.we)("#PricingDashboard_RevertAllPackage"),
                }),
              !!a &&
                (0, s.jsx)("div", {
                  className: k().DetailLabel,
                  onClick: t,
                  children: (0, c.we)("#PricingDashboard_CancelPriceProposal"),
                }),
            ],
          }),
        });
      }
    },
    40818: (e, i, r) => {
      "use strict";
      r.d(i, { Zg: () => k, BL: () => I, cK: () => T });
      var n = r(7850),
        a = r(37085),
        s = r(64753),
        o = r(48996),
        t = r(96745),
        l = r(69423),
        c = r(90626),
        d = r(44165),
        u = r(16676),
        P = r(9154),
        h = r(738),
        g = r(12155),
        _ = r(22797),
        b = r(51272),
        v = r(4434),
        x = r(52038),
        p = r(56011),
        D = r(61859),
        w = r(14771),
        j = r(61311);
      function m(e) {
        const { closeModal: i } = e,
          r = (0, l.Ci)(),
          a = (0, l.NC)();
        return (0, n.jsxs)(P.o0, {
          strTitle: (0, D.we)("#PackageGrid_DiscardChangesTitle"),
          strOKButtonText: (0, D.we)("#PackageGrid_DiscardChangesButton"),
          onOK: a,
          bDestructiveWarning: !0,
          closeModal: i,
          children: [
            (0, D.Yp)("#PricingDashboard_DiscardChangesExplanation", r.length),
            (0, n.jsx)(j.t, { rgLocalPriceOverrides: r }),
          ],
        });
      }
      var C = r(18715),
        f = r.n(C);
      const S = 30,
        N = 40;
      function I(e) {
        const { bReloadPageOnSave: i } = e,
          r = (0, l.Ci)();
        let a = r?.length ?? 0,
          o = a > 0;
        const [t, c, d] = (0, s.uD)(),
          [h, g, _] = (0, s.uD)();
        return (0, n.jsxs)("div", {
          className: (0, x.A)(f().ToolbarInfo, o && f().Visible),
          children: [
            (0, n.jsx)("div", {
              className: f().ChangeCount,
              children: (0, D.Yp)("#PackageGrid_PendingChangeCount", a),
            }),
            (0, n.jsxs)("div", {
              className: f().Buttons,
              children: [
                (0, n.jsx)(u.$n, {
                  onClick: c,
                  disabled: 0 == a,
                  className: (0, x.A)(f().Button, f().SaveButton),
                  children: (0, D.we)("#PackageGrid_SaveChangesDialogButton"),
                }),
                (0, n.jsx)(P.EN, {
                  active: t,
                  children: (0, n.jsx)(k, {
                    closeModal: d,
                    bReloadPageOnSave: i,
                  }),
                }),
                (0, n.jsx)(u.$n, {
                  className: f().Button,
                  onClick: g,
                  children: (0, D.we)(
                    "#PackageGrid_DiscardChangesDialogButton",
                  ),
                }),
                (0, n.jsx)(P.EN, {
                  active: h,
                  children: (0, n.jsx)(m, { closeModal: _ }),
                }),
              ],
            }),
          ],
        });
      }
      function T() {
        return c.useCallback(
          (e, i) =>
            (0, h.pg)((0, n.jsx)(k, { strContinueUrl: i }), (0, p.uX)(e)),
          [],
        );
      }
      function O(e) {
        return e
          .filter((e) => e.nPriceInCents > e.nOldPriceInCents)
          .map((e) => e.packageID);
      }
      function k(e) {
        const { closeModal: i, strContinueUrl: r, bReloadPageOnSave: s } = e,
          g = (0, l.Ci)(),
          _ = (0, l.NC)(),
          [v, x] = c.useState(void 0),
          p = (function (e) {
            let [i, r] = c.useState(void 0);
            const n = (0, o.zq)(),
              s = (0, d.P_)(60);
            return (
              c.useEffect(() => {
                r(void 0);
                let i = O(e);
                i.length > 0
                  ? n(i, void 0, 6e4).then((e) => {
                      r(e);
                    })
                  : r(a.R);
              }, [r, e, n]),
              c.useMemo(() => {
                if (void 0 === i) return null;
                if (i != a.R) return { days: 0, loadFailed: !0 };
                let r = Number.MAX_SAFE_INTEGER,
                  n = O(e);
                for (let e of n) {
                  const i = (0, o.qN)(e);
                  for (const e of i) {
                    if (e.rtStartDate < s) continue;
                    let i = Math.floor((e.rtStartDate - s) / w.Kp.PerDay);
                    r = Math.min(r, i);
                  }
                }
                return { days: r, loadFailed: !1 };
              }, [i, s, e])
            );
          })(g);
        if (!p) return null;
        const m = !!r,
          C = (0, D.we)(
            m
              ? "#PackageGrid_NavigationWarning_Title"
              : "#PricingDashboard_SavePricesTitle",
          ),
          S = (0, D.Yp)("#PricingDashboard_SavePricesExplanation", g.length);
        if (p.loadFailed)
          return (0, n.jsx)(P.o0, {
            strTitle: C,
            bAlertDialog: !0,
            onOK: i,
            onCancel: i,
            closeModal: i,
            children: (0, n.jsx)("div", {
              className: f().PublishErrorDialog,
              children: (0, D.oW)(
                "#PricingDashboard_SavePrices_FailedToLoad",
                (0, n.jsx)("div", {}),
                (0, n.jsx)("div", {}),
              ),
            }),
          });
        let N = !1,
          I = !1,
          T = !1,
          k = new Set();
        for (const e of g) {
          const { nMinPriceInCents: i, nMaxPriceInCents: r } = (0, l.tn)(
            e.packageID,
            e.strPriceKey,
          );
          (N = N || e.nPriceInCents < i),
            (I = I || (!!r && e.nPriceInCents > r)),
            (T = T || e.nPriceInCents > e.nOldPriceInCents),
            k.add(e.packageID);
        }
        let W,
          E = (0, l.ww)(k);
        if (E.length > 0) {
          let e = E.map((e) => (0, t.ww)(e));
          W = (0, D.we)("#PricingDashboad_RequiredPrices", e.join(", "));
        }
        const M = N || I,
          R = M || void 0 === v || 0 != E.length,
          F = (e) => {
            r
              ? (window.location.href = r)
              : s && !e && window.location.reload();
          },
          K = () => {
            void 0 !== v
              ? (e.closeModal(),
                (0, h.pg)(
                  (0, n.jsx)(A, { bAutoPublish: v, fnOnSuccess: F }),
                  window,
                ))
              : console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
          };
        let L = (0, n.jsx)(b.uU, {
          href: "https://partner.steamgames.com/doc/store/pricing",
        });
        return (0, n.jsx)(P.eV, {
          title: C,
          onOK: K,
          onCancel: e.closeModal,
          bDestructiveWarning: m,
          closeModal: i,
          children: (0, n.jsxs)(u.nB, {
            className: f().SaveDialogBody,
            children: [
              (0, n.jsxs)(u.a3, {
                className: f().SaveDialogBodyText,
                children: [
                  m &&
                    (0, n.jsx)("div", {
                      className: f().NavigationWarning,
                      children: (0, D.we)("#PackageGrid_NavigationWarning"),
                    }),
                  S,
                  M &&
                    (0, n.jsxs)("div", {
                      className: f().PricePreviewWarning,
                      children: [
                        " ",
                        (0, D.oW)("#PricingDashboard_PreviewWarning", L),
                        " ",
                      ],
                    }),
                  W &&
                    (0, n.jsxs)("div", {
                      className: f().PricePreviewWarning,
                      children: [" ", W, " "],
                    }),
                  (0, n.jsx)(j.t, { rgLocalPriceOverrides: g }),
                  (0, n.jsx)(y, { priceIncrease: T, nextDiscount: p.days }),
                  (0, n.jsx)(B, {
                    value: v,
                    onChange: x,
                    nextDiscount: p.days,
                  }),
                ],
              }),
              (0, n.jsx)(u.wi, {
                children: m
                  ? (0, n.jsx)(u.VQ, {
                      strOKText: (0, D.we)("#Button_Save"),
                      onOK: K,
                      bOKDisabled: R,
                      strUpdateText: (0, D.we)(
                        "#PackageGrid_NavigateWithoutSavingButton",
                      ),
                      onUpdate: () => {
                        _(), e.closeModal(), F(!0);
                      },
                      onCancel: e.closeModal,
                    })
                  : (0, n.jsx)(u.CB, {
                      strOKText: (0, D.we)("#Button_Save"),
                      onOK: K,
                      bOKDisabled: R,
                      onCancel: e.closeModal,
                    }),
              }),
            ],
          }),
        });
      }
      function y(e) {
        let i,
          { priceIncrease: r, nextDiscount: a } = e;
        return r
          ? ((i =
              a < S
                ? (0, D.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                    S,
                  )
                : a < N
                  ? (0, D.we)(
                      "#PricingDashboard_SavePrice_FutureDiscountSoon",
                      a,
                      S,
                    )
                  : (0, D.we)(
                      "#PricingDashboard_SavePrice_CooldownWarning",
                      S,
                    )),
            (0, n.jsxs)("div", {
              className: f().PriceChangeSaveWarning,
              children: [
                (0, n.jsx)("div", {
                  className: f().PriceChangeSaveWarningArrow,
                  children: (0, n.jsx)(g.i3G, { angle: 0 }),
                }),
                (0, n.jsxs)("div", {
                  className: f().HigherPriceWarning,
                  children: [" ", i, " "],
                }),
              ],
            }))
          : null;
      }
      function B(e) {
        let { value: i, onChange: r } = e,
          a = e.nextDiscount <= S;
        return (0, n.jsxs)("div", {
          className: f().AutoPublishCheckBox,
          children: [
            (0, n.jsx)(u.Od, {
              className: f().RadioButtons,
              checked: !1 === i,
              onChange: () => r(!1),
              label: (0, D.we)("#PricingDashboard_AutoPublish_Disabled"),
            }),
            (0, n.jsx)(u.Od, {
              className: f().RadioButtons,
              checked: !0 === i,
              disabled: a,
              onChange: () => r(!0),
              label: (0, D.we)("#PricingDashboard_AutoPublish_Enabled"),
            }),
          ],
        });
      }
      function A(e) {
        const { closeModal: i, bAutoPublish: r, fnOnSuccess: s } = e,
          o = (0, l.Ci)(),
          t = (0, l.Bt)(),
          d = (0, v.m)("SaveProgressDialog"),
          [u, h] = c.useState(0),
          [g, b] = c.useState(null),
          x = !r;
        return (
          c.useEffect(() => {
            (async () => {
              const e = Array.from(new Set(o.map((e) => e.packageID)));
              for (let i = 0; i < e.length; i++) {
                h(i);
                const r = e[i],
                  n = await t(r, x, d);
                if (d.token.reason) return;
                if (n.success != a.R)
                  return void b(
                    n.msg ?? (0, D.we)("#PricingDashboard_SavePricesError"),
                  );
              }
              h(e.length), s(), i();
            })();
          }, []),
          (0, n.jsx)(P.o0, {
            strTitle: (0, D.we)("#PackageGrid_SaveInProgress"),
            bAlertDialog: !!g,
            strOKButtonText: g
              ? (0, D.we)("#Button_Close")
              : (0, D.we)("#Button_OK"),
            onOK: g ? i : s,
            onCancel: () => {
              d.cancel("cancelled by user");
            },
            closeModal: i,
            bDestructiveWarning: !0,
            children:
              g ??
              (0, n.jsx)(_.t, {
                position: "center",
                string: (0, D.we)("#PricingDashboard_Progress", u),
              }),
          })
        );
      }
    },
    83800: (e, i, r) => {
      "use strict";
      r.d(i, { J: () => o });
      var n = r(7850),
        a = r(90626);
      const s = a.lazy(() =>
          Promise.all([r.e(4781), r.e(1194)]).then(r.bind(r, 81194)),
        ),
        o = s
          ? function (e) {
              return (0, n.jsx)(a.Suspense, {
                fallback: null,
                children: (0, n.jsx)(s, { ...e }),
              });
            }
          : (e) => null;
    },
    4434: (e, i, r) => {
      "use strict";
      r.d(i, { m: () => o });
      var n = r(41735),
        a = r.n(n),
        s = r(90626);
      function o(e) {
        const i = s.useRef(a().CancelToken.source());
        return (
          s.useEffect(() => {
            const r = i.current;
            return () => r.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          i.current
        );
      }
    },
  },
]);
