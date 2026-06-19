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
      r.d(i, { i: () => u });
      var a = r(7850),
        n = r(83800),
        s = r(69423),
        o = r(9154),
        l = r(61859),
        t = r(78327),
        c = r(14578),
        d = r.n(c),
        P = r(7929);
      function u(e) {
        const { closeModal: i, fnOnApply: r, singlePackage: c } = e,
          u = (0, s._A)();
        return (0, a.jsxs)(o.o0, {
          closeModal: i,
          bAlertDialog: !0,
          strTitle: P.g.Localize("#PricingDashboard_ApplyConversion_Method"),
          onOK: () => {
            u(), r && r();
          },
          strOKButtonText: c
            ? (0, l.we)("#PricingDashboard_ApplyGuidelines_Button_Single")
            : (0, l.we)("#PricingDashboard_ApplyGuidelines_Button"),
          children: [
            (0, a.jsx)("div", {
              className: d().Instructions,
              children: P.g.Localize(
                "#PricingDashboard_ApplyGuidelines_Instructions_MultiOptions",
              ),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("a", {
              href: t.TS.PARTNER_BASE_URL + "doc/store/pricing#5",
              target: "_blank",
              children: (0, l.we)("#PricingDashboard_ApplyGuidelines_Link"),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)("br", {}),
            !c &&
              (0, a.jsx)("div", {
                className: d().Instructions,
                children: (0, l.we)(
                  "#PricingDashboard_ApplyGuidelines_Instructions2",
                ),
              }),
            (0, a.jsx)("div", {
              className: d().Instructions,
              children: (0, l.we)(
                "#PricingDashboard_ApplyGuidelines_Assurance",
              ),
            }),
            (0, a.jsx)("br", {}),
            (0, a.jsx)(n.J, { bHideTour: !0 }),
          ],
        });
      }
    },
    61311: (e, i, r) => {
      "use strict";
      r.d(i, { t: () => _ });
      var a = r(7850),
        n = r(96745),
        s = r(69423),
        o = r(90626),
        l = r(16676),
        t = r(12155),
        c = r(32754),
        d = r(52038),
        P = r(61859),
        u = r(10754),
        h = r(18715),
        g = r.n(h);
      function _(e) {
        const { rgLocalPriceOverrides: i } = e,
          [r, n] = o.useState(i.length < 9);
        return (0, a.jsx)("div", {
          className: g().SeeDetailsSection,
          children: r
            ? (0, a.jsx)("div", {
                className: g().PriceOverrideSummaryList,
                children: i.map((e) =>
                  (0, a.jsx)(
                    b,
                    { override: e },
                    `${e.packageID}_${e.strPriceKey}`,
                  ),
                ),
              })
            : (0, a.jsx)(l.$n, {
                onClick: () => n(!0),
                className: g().SeeDetailsButton,
                children: (0, P.we)("#PackageGrid_SeePendingChanges"),
              }),
        });
      }
      function b(e) {
        const { override: i } = e,
          {
            packageID: r,
            strPriceKey: o,
            nPriceInCents: l,
            nOldPriceInCents: P,
          } = i,
          h = (0, n.ww)(r),
          [_, b, v] = (0, s.Wx)(P, o),
          [x, p, D] = (0, s.Wx)(l, o),
          w = (0, s.XK)(o),
          { nMinPriceInCents: j, nMaxPriceInCents: m } = (0, s.tn)(r, o),
          C = l < j || (!!m && l > m);
        return (0, a.jsxs)("div", {
          className: (0, d.A)(g().PriceOverrideSummary),
          children: [
            (0, a.jsx)(c.he, {
              toolTipContent: w,
              direction: "top",
              className: g().Currency,
              strTooltipClassname: g().HoverToolTip,
              children: o,
            }),
            (0, a.jsx)(c.he, {
              toolTipContent: `${r}: ${h}`,
              direction: "overlay",
              className: g().PackageName,
              strTooltipClassname: g().HoverToolTip,
              children: h,
            }),
            C
              ? (0, a.jsx)(u.T6, { packageID: r, strPriceKey: o })
              : (0, a.jsx)(u.Gy, { nPriceInCents: l, nSavedPriceInCents: P }),
            (0, a.jsxs)("div", {
              className: g().OldPriceCtn,
              children: [
                (0, a.jsx)("div", { className: g().PricePrefix, children: _ }),
                (0, a.jsx)("span", { className: g().OldPrice, children: b }),
                (0, a.jsx)("div", { className: g().PriceSuffix, children: v }),
              ],
            }),
            (0, a.jsx)("span", {
              className: g().ChangeArrow,
              children: (0, a.jsx)(t.i3G, { angle: 90 }),
            }),
            (0, a.jsxs)("div", {
              className: g().NewPriceCtn,
              children: [
                (0, a.jsx)("div", { className: g().PricePrefix, children: _ }),
                (0, a.jsx)("span", { className: g().NewPrice, children: p }),
                (0, a.jsx)("div", { className: g().PriceSuffix, children: v }),
              ],
            }),
          ],
        });
      }
    },
    74267: (e, i, r) => {
      "use strict";
      r.d(i, { O: () => u });
      var a = r(7850),
        n = r(90626),
        s = r(85274),
        o = r.n(s),
        l = r(12155),
        t = r(52038),
        c = r(49771),
        d = r(6336);
      const P = new c.MX("price-grid-cell-popout-elements");
      function u(e) {
        let { hoverKey: i, className: r, renderHover: s } = e,
          c = (0, t.A)(o().MoreDots, r),
          u = n.useRef(void 0),
          h = n.useCallback(() => {
            P.HideElement(u.current.ownerDocument, i);
          }, [i]);
        return (0, a.jsx)("div", {
          ref: u,
          tabIndex: -1,
          className: c,
          onFocus: (e) => {
            e.target.focus();
            let r = (0, a.jsx)(d.g, {
              target: u.current,
              direction: "top",
              bEnablePointerEvents: !0,
              nBodyDistance: 0,
              onClick: h,
              children: s(),
            });
            P.ShowElement(u.current.ownerDocument, r, i);
          },
          onBlur: () => {
            P.HideElement(u.current.ownerDocument, i, 100);
          },
          children: (0, a.jsx)(l.faJ, {}),
        });
      }
    },
    86762: (e, i, r) => {
      "use strict";
      r.d(i, { m: () => B });
      var a,
        n,
        s = r(7850),
        o = r(69423),
        l = r(10754),
        t = r(41103),
        c = r(61859),
        d = r(4160),
        P = r(52038),
        u = r(32754),
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
        const { closeModal: i, packageID: r, bPackageVisible: l } = e,
          t = (0, o.FX)(r),
          d = t.some((e) => e.nPriceInCents > e.nOldPriceInCents),
          P = (function (e, i) {
            let [r, a] = v.useState(void 0);
            const s = (0, m.zq)(),
              o = (0, C.P_)(60);
            if (
              (v.useEffect(() => {
                i &&
                  (a(void 0),
                  s([e], void 0, 6e4).then(async (e) => {
                    a(e);
                  }));
              }, [i, e, a, s]),
              !i)
            )
              return n.OK;
            if (null == r) return n.Loading;
            if (r != b.R) return n.FailedToLoad;
            const l = (0, m.qN)(e);
            return l.every((e) => e.rtStartDate > o + f.nu || e.rtEndDate < o)
              ? n.OK
              : n.RequiresCooldown;
          })(r, d),
          { fnPublish: u, ePublishState: h } = (function (e) {
            const i = (0, o.h4)(),
              [r, n] = v.useState(a.Idle);
            let s = v.useCallback(async () => {
              n(a.Loading);
              (await i(e)).success == b.R ? n(a.OK) : n(a.Failed);
            }, [n, i, e]);
            return { fnPublish: s, ePublishState: r };
          })(r);
        let g;
        if (P == n.FailedToLoad)
          g = (0, c.oW)(
            "#PricingDashboard_PriceProposal_Publish_FailedToLoad",
            (0, s.jsx)("div", {}),
            (0, s.jsx)("div", {}),
          );
        else if (P == n.RequiresCooldown) {
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
          h == a.Failed &&
            (g = (0, c.oW)(
              "#PricingDashboard_PriceProposal_Publish_FailedToPublish",
              (0, s.jsx)("div", {}),
              (0, s.jsx)("div", {}),
            ));
        if (g) {
          let e = (0, c.we)(
            l
              ? "#PricingDashboard_PriceProposal_Publish_Title"
              : "#PricingDashboard_StageNewPrices_title",
          );
          return (
            P == n.RequiresCooldown &&
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
        let _ = P == n.Loading || h == a.Loading;
        return (0, s.jsxs)(x.o0, {
          strTitle: (0, c.we)(
            l
              ? "#PricingDashboard_PriceProposal_Publish_Title"
              : "#PricingDashboard_StageNewPrices_title",
          ),
          bAlertDialog: !1,
          strOKButtonText: (0, c.we)(
            l
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
            _ && (0, s.jsx)(p.t, { position: "center" }),
            !_ &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, c.Yp)(
                    l
                      ? "#PricingDashboard_PriceProposal_Publish_Explanation"
                      : "#PricingDashboard_StageNewPrices_desc",
                    t.length,
                  ),
                  l &&
                    d &&
                    (0, s.jsx)("div", {
                      className: j().PublishWarning,
                      children: (0, c.we)(
                        "#PricingDashboard_PriceProposal_Publish_CooldownWarning",
                      ),
                    }),
                  (0, s.jsx)(S.t, { rgLocalPriceOverrides: t }),
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
      })(a || (a = {})),
        (function (e) {
          (e[(e.Idle = 0)] = "Idle"),
            (e[(e.Loading = 1)] = "Loading"),
            (e[(e.OK = 2)] = "OK"),
            (e[(e.FailedToLoad = 3)] = "FailedToLoad"),
            (e[(e.RequiresCooldown = 4)] = "RequiresCooldown");
        })(n || (n = {}));
      var I = r(64753),
        O = r(16676),
        T = r(96434),
        k = r.n(T),
        y = r(39777);
      function B(e) {
        const { packageID: i, bShowCancel: r } = e,
          a = (0, o.XB)(i),
          n = (0, o.d$)(i),
          g = n && (0, l.mK)(n.rtSubmitted),
          [b, v] = (0, t.Hl)(n?.submitterID),
          x = v ? v.persona_name : n?.submitterID;
        let p = "PackageMore_" + i,
          D = null,
          w = null,
          j = null;
        a
          ? ((D = _().NeedsReview),
            (j = (0, c.we)("#PricingDashboard_PriceProposal_NeedsReview_ttip")),
            (w = (0, c.we)("#PricingDashboard_PriceProposal_NeedsReview")))
          : n?.eState == d.Al && n.bPartnerWillPublish
            ? ((D = _().PartnerWillPublish),
              (j = (0, c.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish_ttip",
                x,
                g,
              )),
              (w = (0, c.we)(
                "#PricingDashboard_PriceProposal_WaitingForReview_PartnerWillPublish",
              )))
            : n?.eState != d.Al || n.bPartnerWillPublish
              ? n?.eState == d.Zo
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
        let m = r && (a || !!n);
        return (0, s.jsxs)("div", {
          className: (0, P.A)(_().ProposalState, D),
          children: [
            (0, s.jsxs)(u.he, {
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
          [r, a, n] = (0, I.uD)(),
          { data: o } = (0, y.by)({ packageid: i }),
          l = Boolean(o);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(O.jn, {
              onClick: a,
              children: (0, c.we)(
                l
                  ? "#PricingDashboard_PriceProposal_PublishDialog_Button"
                  : "#PricingDashboard_StageNewPrices",
              ),
            }),
            (0, s.jsx)(x.EN, {
              active: r,
              children: (0, s.jsx)(N, {
                packageID: i,
                bPackageVisible: l,
                closeModal: n,
              }),
            }),
          ],
        });
      }
      function W(e) {
        const { packageID: i } = e,
          r = (0, o.XB)(i);
        let a = (0, o.T_)(i);
        const n = (0, o.d$)(i);
        let l = (0, o.fr)(i);
        return (0, s.jsx)("div", {
          className: k().PricePopout,
          children: (0, s.jsxs)("div", {
            className: k().DetailRow,
            children: [
              r &&
                (0, s.jsx)("div", {
                  className: k().DetailLabel,
                  onClick: a,
                  children: (0, c.we)("#PricingDashboard_RevertAllPackage"),
                }),
              !!n &&
                (0, s.jsx)("div", {
                  className: k().DetailLabel,
                  onClick: l,
                  children: (0, c.we)("#PricingDashboard_CancelPriceProposal"),
                }),
            ],
          }),
        });
      }
    },
    40818: (e, i, r) => {
      "use strict";
      r.d(i, { Zg: () => k, BL: () => I, cK: () => O });
      var a = r(7850),
        n = r(37085),
        s = r(64753),
        o = r(48996),
        l = r(96745),
        t = r(69423),
        c = r(90626),
        d = r(44165),
        P = r(16676),
        u = r(9154),
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
          r = (0, t.Ci)(),
          n = (0, t.NC)();
        return (0, a.jsxs)(u.o0, {
          strTitle: (0, D.we)("#PackageGrid_DiscardChangesTitle"),
          strOKButtonText: (0, D.we)("#PackageGrid_DiscardChangesButton"),
          onOK: n,
          bDestructiveWarning: !0,
          closeModal: i,
          children: [
            (0, D.Yp)("#PricingDashboard_DiscardChangesExplanation", r.length),
            (0, a.jsx)(j.t, { rgLocalPriceOverrides: r }),
          ],
        });
      }
      var C = r(18715),
        f = r.n(C);
      const S = 30,
        N = 40;
      function I(e) {
        const { bReloadPageOnSave: i } = e,
          r = (0, t.Ci)();
        let n = r?.length ?? 0,
          o = n > 0;
        const [l, c, d] = (0, s.uD)(),
          [h, g, _] = (0, s.uD)();
        return (0, a.jsxs)("div", {
          className: (0, x.A)(f().ToolbarInfo, o && f().Visible),
          children: [
            (0, a.jsx)("div", {
              className: f().ChangeCount,
              children: (0, D.Yp)("#PackageGrid_PendingChangeCount", n),
            }),
            (0, a.jsxs)("div", {
              className: f().Buttons,
              children: [
                (0, a.jsx)(P.$n, {
                  onClick: c,
                  disabled: 0 == n,
                  className: (0, x.A)(f().Button, f().SaveButton),
                  children: (0, D.we)("#PackageGrid_SaveChangesDialogButton"),
                }),
                (0, a.jsx)(u.EN, {
                  active: l,
                  children: (0, a.jsx)(k, {
                    closeModal: d,
                    bReloadPageOnSave: i,
                  }),
                }),
                (0, a.jsx)(P.$n, {
                  className: f().Button,
                  onClick: g,
                  children: (0, D.we)(
                    "#PackageGrid_DiscardChangesDialogButton",
                  ),
                }),
                (0, a.jsx)(u.EN, {
                  active: h,
                  children: (0, a.jsx)(m, { closeModal: _ }),
                }),
              ],
            }),
          ],
        });
      }
      function O() {
        return c.useCallback(
          (e, i) =>
            (0, h.pg)((0, a.jsx)(k, { strContinueUrl: i }), (0, p.uX)(e)),
          [],
        );
      }
      function T(e) {
        return e
          .filter((e) => e.nPriceInCents > e.nOldPriceInCents)
          .map((e) => e.packageID);
      }
      function k(e) {
        const { closeModal: i, strContinueUrl: r, bReloadPageOnSave: s } = e,
          g = (0, t.Ci)(),
          _ = (0, t.NC)(),
          [v, x] = c.useState(void 0),
          p = (function (e) {
            let [i, r] = c.useState(void 0);
            const a = (0, o.zq)(),
              s = (0, d.P_)(60);
            return (
              c.useEffect(() => {
                r(void 0);
                let i = T(e);
                i.length > 0
                  ? a(i, void 0, 6e4).then((e) => {
                      r(e);
                    })
                  : r(n.R);
              }, [r, e, a]),
              c.useMemo(() => {
                if (void 0 === i) return null;
                if (i != n.R) return { days: 0, loadFailed: !0 };
                let r = Number.MAX_SAFE_INTEGER,
                  a = T(e);
                for (let e of a) {
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
          return (0, a.jsx)(u.o0, {
            strTitle: C,
            bAlertDialog: !0,
            onOK: i,
            onCancel: i,
            closeModal: i,
            children: (0, a.jsx)("div", {
              className: f().PublishErrorDialog,
              children: (0, D.oW)(
                "#PricingDashboard_SavePrices_FailedToLoad",
                (0, a.jsx)("div", {}),
                (0, a.jsx)("div", {}),
              ),
            }),
          });
        let N = !1,
          I = !1,
          O = !1,
          k = new Set();
        for (const e of g) {
          const { nMinPriceInCents: i, nMaxPriceInCents: r } = (0, t.tn)(
            e.packageID,
            e.strPriceKey,
          );
          (N = N || e.nPriceInCents < i),
            (I = I || (!!r && e.nPriceInCents > r)),
            (O = O || e.nPriceInCents > e.nOldPriceInCents),
            k.add(e.packageID);
        }
        let W,
          M = (0, t.ww)(k);
        if (M.length > 0) {
          let e = M.map((e) => (0, l.ww)(e));
          W = (0, D.we)("#PricingDashboad_RequiredPrices", e.join(", "));
        }
        const E = N || I,
          R = E || void 0 === v || 0 != M.length,
          F = (e) => {
            r
              ? (window.location.href = r)
              : s && !e && window.location.reload();
          },
          K = () => {
            void 0 !== v
              ? (e.closeModal(),
                (0, h.pg)(
                  (0, a.jsx)(A, { bAutoPublish: v, fnOnSuccess: F }),
                  window,
                ))
              : console.error(
                  "Pricing:SaveChangesDialog auto publish undefined",
                );
          };
        let L = (0, a.jsx)(b.uU, {
          href: "https://partner.steamgames.com/doc/store/pricing",
        });
        return (0, a.jsx)(u.eV, {
          title: C,
          onOK: K,
          onCancel: e.closeModal,
          bDestructiveWarning: m,
          closeModal: i,
          children: (0, a.jsxs)(P.nB, {
            className: f().SaveDialogBody,
            children: [
              (0, a.jsxs)(P.a3, {
                className: f().SaveDialogBodyText,
                children: [
                  m &&
                    (0, a.jsx)("div", {
                      className: f().NavigationWarning,
                      children: (0, D.we)("#PackageGrid_NavigationWarning"),
                    }),
                  S,
                  E &&
                    (0, a.jsxs)("div", {
                      className: f().PricePreviewWarning,
                      children: [
                        " ",
                        (0, D.oW)("#PricingDashboard_PreviewWarning", L),
                        " ",
                      ],
                    }),
                  W &&
                    (0, a.jsxs)("div", {
                      className: f().PricePreviewWarning,
                      children: [" ", W, " "],
                    }),
                  (0, a.jsx)(j.t, { rgLocalPriceOverrides: g }),
                  (0, a.jsx)(y, { priceIncrease: O, nextDiscount: p.days }),
                  (0, a.jsx)(B, {
                    value: v,
                    onChange: x,
                    nextDiscount: p.days,
                  }),
                ],
              }),
              (0, a.jsx)(P.wi, {
                children: m
                  ? (0, a.jsx)(P.VQ, {
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
                  : (0, a.jsx)(P.CB, {
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
          { priceIncrease: r, nextDiscount: n } = e;
        return r
          ? ((i =
              n < S
                ? (0, D.we)(
                    "#PricingDashboard_SavePrice_FutureDiscountTooSoon",
                    S,
                  )
                : n < N
                  ? (0, D.we)(
                      "#PricingDashboard_SavePrice_FutureDiscountSoon",
                      n,
                      S,
                    )
                  : (0, D.we)(
                      "#PricingDashboard_SavePrice_CooldownWarning",
                      S,
                    )),
            (0, a.jsxs)("div", {
              className: f().PriceChangeSaveWarning,
              children: [
                (0, a.jsx)("div", {
                  className: f().PriceChangeSaveWarningArrow,
                  children: (0, a.jsx)(g.i3G, { angle: 0 }),
                }),
                (0, a.jsxs)("div", {
                  className: f().HigherPriceWarning,
                  children: [" ", i, " "],
                }),
              ],
            }))
          : null;
      }
      function B(e) {
        let { value: i, onChange: r } = e,
          n = e.nextDiscount <= S;
        return (0, a.jsxs)("div", {
          className: f().AutoPublishCheckBox,
          children: [
            (0, a.jsx)(P.Od, {
              className: f().RadioButtons,
              checked: !1 === i,
              onChange: () => r(!1),
              label: (0, D.we)("#PricingDashboard_AutoPublish_Disabled"),
            }),
            (0, a.jsx)(P.Od, {
              className: f().RadioButtons,
              checked: !0 === i,
              disabled: n,
              onChange: () => r(!0),
              label: (0, D.we)("#PricingDashboard_AutoPublish_Enabled"),
            }),
          ],
        });
      }
      function A(e) {
        const { closeModal: i, bAutoPublish: r, fnOnSuccess: s } = e,
          o = (0, t.Ci)(),
          l = (0, t.Bt)(),
          d = (0, v.m)("SaveProgressDialog"),
          [P, h] = c.useState(0),
          [g, b] = c.useState(null),
          x = !r;
        return (
          c.useEffect(() => {
            (async () => {
              const e = Array.from(new Set(o.map((e) => e.packageID)));
              for (let i = 0; i < e.length; i++) {
                h(i);
                const r = e[i],
                  a = await l(r, x, d);
                if (d.token.reason) return;
                if (a.success != n.R)
                  return void b(
                    a.msg ?? (0, D.we)("#PricingDashboard_SavePricesError"),
                  );
              }
              h(e.length), s(), i();
            })();
          }, []),
          (0, a.jsx)(u.o0, {
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
              (0, a.jsx)(_.t, {
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
      var a = r(7850),
        n = r(90626);
      const s = n.lazy(() =>
          Promise.all([r.e(4781), r.e(1194)]).then(r.bind(r, 58813)),
        ),
        o = s
          ? function (e) {
              return (0, a.jsx)(n.Suspense, {
                fallback: null,
                children: (0, a.jsx)(s, { ...e }),
              });
            }
          : (e) => null;
    },
  },
]);
