/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7043],
    {
      31069: ($, V, e) => {
        "use strict";
        e.d(V, {
          mK: () => T,
          Gy: () => h,
          sh: () => E,
          T6: () => v,
          yk: () => j,
          Ur: () => P,
        });
        var n = e(7850),
          r = e(67227),
          G = e(93357),
          d = e(83465),
          U = e(61075),
          z = e(83069),
          C = e(37424),
          K = e(601),
          b = e(90626),
          B = e(58534),
          a = e(36118),
          I = e(71421),
          M = e(36707),
          g = e(18210),
          A = e(58033),
          W = e(96434),
          s = e.n(W),
          H = e(30131);
        let N = null;
        function p(c) {
          N = c;
        }
        function i(c) {
          const { packageID: t, strPriceKey: l } = c,
            {
              nPriceInCents: f,
              nPublishedPriceInCents: m,
              nProposedPriceInCents: S,
              nSuggestedPriceInCents: y,
              fnSetPrice: R,
            } = (0, C.xQ)(t, l),
            { nPriceInCents: D } = (0, C.xQ)(t, "USD"),
            Y = !!S && (!m || S != m),
            Q = (0, C.d$)(t),
            _ = Q && T(Q.rtSubmitted),
            { data: J } = (0, H.js)(Q?.submitterID),
            Z = J ? J.m_strPlayerName : Q?.submitterID,
            w = Q?.eState == U.Zo;
          return (!m && !Y && !y) || N != t + l
            ? null
            : (0, n.jsxs)("div", {
                className: s().PricePopout,
                children: [
                  !!m &&
                    (0, n.jsxs)(I.he, {
                      className: s().DetailRow,
                      direction: "left",
                      toolTipContent: (0, g.we)(
                        "#PricingDashboard_CurrentPriceOnStore_ttip",
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className: s().DetailLabel,
                          children: (0, g.we)(
                            "#PricingDashboard_CurrentPriceOnStore",
                          ),
                        }),
                        (0, n.jsx)("div", {
                          className: s().DetailPrice,
                          children: (0, C.Wx)(m, l).join(""),
                        }),
                        (0, n.jsx)(I.he, {
                          className: (0, M.A)(
                            s().DetailButton,
                            m == f && s().Disabled,
                          ),
                          onClick: () => R(m),
                          bDisabled: m == f,
                          toolTipContent: (0, g.we)(
                            "#PricingDashboard_UseThisOldPrice_ttip",
                          ),
                          children: (0, g.we)(
                            "#PricingDashboard_UseThisPrice_Button",
                          ),
                        }),
                      ],
                    }),
                  Y &&
                    (0, n.jsxs)(I.he, {
                      className: s().DetailRow,
                      direction: "left",
                      toolTipContent: w
                        ? (0, g.we)("#PricingDashboard_ApprovedPrice_ttip")
                        : (0, g.we)(
                            "#PricingDashboard_ProposedPrice_ttip",
                            Z,
                            _,
                          ),
                      children: [
                        (0, n.jsx)("div", {
                          className: s().DetailLabel,
                          children: (0, g.we)(
                            w
                              ? "#PricingDashboard_ApprovedPrice"
                              : "#PricingDashboard_ProposedPrice",
                          ),
                        }),
                        (0, n.jsx)("div", {
                          className: s().DetailPrice,
                          children: (0, C.Wx)(S, l).join(""),
                        }),
                        (0, n.jsx)(I.he, {
                          className: (0, M.A)(
                            s().DetailButton,
                            S == f && s().Disabled,
                          ),
                          onClick: () => R(S),
                          bDisabled: S == f,
                          toolTipContent: (0, g.we)(
                            "#PricingDashboard_UseThisNewPrice_ttip",
                          ),
                          children: (0, g.we)(
                            "#PricingDashboard_UseThisPrice_Button",
                          ),
                        }),
                      ],
                    }),
                  !!y &&
                    (0, n.jsxs)(I.he, {
                      className: s().DetailRow,
                      direction: "left",
                      toolTipContent: A.g.Localize(
                        "#PricingDashboard_Method_SuggestedPrice_ttip",
                        (0, C.Wx)(D, "USD").join(""),
                      ),
                      children: [
                        (0, n.jsx)("div", {
                          className: s().DetailLabel,
                          children: A.g.Localize(
                            "#PricingDashboard_Method_SuggestedPrice",
                          ),
                        }),
                        (0, n.jsx)("div", {
                          className: s().DetailPrice,
                          children: (0, C.Wx)(y, l).join(""),
                        }),
                        (0, n.jsx)(I.he, {
                          className: (0, M.A)(
                            s().DetailButton,
                            y == f && s().Disabled,
                          ),
                          onClick: () => R(y),
                          bDisabled: y == f,
                          toolTipContent: (0, g.we)(
                            "#PricingDashboard_UseThisNewPrice_ttip",
                          ),
                          children: (0, g.we)(
                            "#PricingDashboard_UseThisPrice_Button",
                          ),
                        }),
                      ],
                    }),
                ],
              });
        }
        function E(c) {
          const { cell: t, row: l } = c,
            f = l.original.packageID,
            m = t.getValue(),
            {
              nPriceInCents: S,
              nPublishedPriceInCents: y,
              nProposedPriceInCents: R,
              fnSetPrice: D,
            } = (0, C.xQ)(f, m),
            [Y, Q, _] = (0, C.Wx)(S, m),
            J = (0, C.Gs)(m),
            Z = b.useRef(void 0),
            w = (L) => {
              const X = L.target.value.replace(/[^0-9]/g, "");
              let O = Number(X || 0);
              if (Number.isNaN(O)) return;
              J.bWholeUnitsOnly && (O *= 100);
              const ne = 2147483647;
              O > ne && (O = ne), D(O);
            },
            { strClassName: k } = x(f, m),
            ee = m == "USD",
            q = R ?? y,
            o = S != q;
          return (0, n.jsxs)("div", {
            ref: Z,
            onKeyDown: K.nm,
            className: k,
            children: [
              o && (0, n.jsx)(h, { nPriceInCents: S, nSavedPriceInCents: q }),
              (0, n.jsx)("div", {
                className: s().PricePrefix,
                children: Y && Y,
              }),
              (0, n.jsx)(r.n, {
                menuTarget: (0, n.jsx)("div", {
                  className: s().EditablePrice,
                  children: (0, n.jsx)(B.pd, {
                    value: Q,
                    className: s().PriceInput,
                    onChange: w,
                    onFocus: () => p(f + m),
                  }),
                }),
                direction: "up",
                interactionMode: z.AV,
                dismissOnClick: !0,
                renderWhenClosed: !1,
                children: (0, n.jsx)(i, { packageID: f, strPriceKey: m }),
              }),
              (0, n.jsx)("div", {
                className: s().PriceSuffix,
                children: _ && _,
              }),
              ee &&
                (0, n.jsx)(u, {
                  packageID: f,
                  appids: l.original.appids,
                  bCanSetToFree: l.original.bCanSetToFree,
                }),
              (0, n.jsx)(v, { packageID: f, strPriceKey: m }),
            ],
          });
        }
        function u(c) {
          const { packageID: t, appids: l, bCanSetToFree: f } = c,
            { fnApplyGuidelines: m } = (0, G.gC)((0, C.$i)());
          return (0, n.jsx)(d.x, {
            fnGetUSDPriceInCents: () => (0, C.FR)(t, "USD"),
            fnOnUpdate: (S) => m(t, S),
            strDescription: A.g.Localize(
              "#PricingDashboard_GuidelinesPickerDescription_New",
            ),
            nPackageID: t,
            appids: l,
            bCanSetToFree: f,
          });
        }
        function v(c) {
          const { packageID: t, strPriceKey: l } = c,
            { strPriceWarning: f, bBadPrice: m, bShowWarningIcon: S } = x(t, l);
          return S
            ? (0, n.jsx)(I.he, {
                className: s().PriceAlert,
                strTooltipClassname: s().HoverToolTip,
                toolTipContent: f,
                direction: "top",
                children: (0, n.jsx)(a.eTF, {
                  color: m ? "rgb(194, 45, 0)" : "#e5af37",
                }),
              })
            : null;
        }
        const P = 2.25,
          j = 0.5;
        function x(c, t) {
          const {
              nPriceInCents: l,
              nPublishedPriceInCents: f,
              nProposedPriceInCents: m,
              nMinPriceInCents: S,
              nMaxPriceInCents: y,
              nMaxDiscountPercentage: R,
              nSuggestedPriceInCents: D,
            } = (0, C.xQ)(c, t),
            Y = (0, C.d$)(c),
            Q = t == "USD",
            J = l != (m ?? f),
            Z = l < S,
            w = !!y && l > y,
            k = !!D && l > D * P,
            ee = !!D && l < D * j,
            q = !!D && l < D && !!R,
            o = !!D && l == D && !!R;
          let L = !1;
          w
            ? (L = (0, g.we)("#PricingDashboard_PriceIncreaseDisallowed"))
            : Z && !J
              ? (L = (0, g.we)("#PricingDashboard_PriceTooLow_Grandfathered"))
              : Z
                ? (L = (0, g.we)(
                    "#PricingDashboard_PriceTooLow",
                    (0, C.Wx)(S, t).join(""),
                  ))
                : k
                  ? (L = (0, g.we)(
                      "#PricingDashboard_PriceMuchHigherThanMethod",
                      (0, C.Wx)(D, t).join(""),
                    ))
                  : ee && q
                    ? (L = (0, g.we)(
                        "#PricingDashboard_PriceMuchLowerThanMethod_AndLimitDiscount",
                        (0, C.Wx)(D, t).join(""),
                        R,
                      ))
                    : ee
                      ? (L = (0, g.we)(
                          "#PricingDashboard_PriceMuchLowerThanMethod",
                          (0, C.Wx)(D, t).join(""),
                        ))
                      : q
                        ? (L = (0, g.we)(
                            "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                            R,
                          ))
                        : o &&
                          (L = (0, g.we)("#PricingDashboard_PriceCheap", R));
          const F = w || Z,
            X = k || ee,
            O = F || X || q,
            ne = !J && !!m && (!f || m != f),
            oe = Y?.eState == U.Zo,
            te = (0, M.A)(
              s().PriceCell,
              Q && s().USD,
              J && s().ChangedLocally,
              ne && s().ProposedPrice,
              oe && s().ApprovedCanPublish,
              O && s().WarningPrice,
              X && s().SevereWarningPrice,
              F && s().BadPrice,
            );
          return b.useMemo(
            () => ({
              strPriceWarning: L,
              strClassName: te,
              bBadPrice: F,
              bShowSevereWarning: X,
              bShowWarningIcon: O,
            }),
            [L, te, F, X, O],
          );
        }
        function h(c) {
          const { nPriceInCents: t, nSavedPriceInCents: l } = c;
          let f = null,
            m = null,
            S = null,
            y = null;
          if (!l)
            (f = (0, g.we)("#PricingDashboard_PriceIsNew_Short")),
              (y = (0, M.A)(s().NewPrice));
          else {
            const R = Math.ceil((100 * (t - l)) / l),
              D = t > l;
            (S = D
              ? (0, g.we)("#PricingDashboard_PriceIncreaseBy", R + "%")
              : (0, g.we)("#PricingDashboard_PriceLowerBy", R + "%")),
              (y = (0, M.A)(s().PriceChange, D && s().PriceIncrease)),
              (m = (0, n.jsx)("div", {
                className: s().PriceChangeArrow,
                children: (0, n.jsx)(a.i3G, { angle: D ? 0 : 180 }),
              })),
              (f = R + "%");
          }
          return (0, n.jsxs)(I.he, {
            className: y,
            strTooltipClassname: s().HoverToolTip,
            toolTipContent: S,
            direction: "top",
            children: [m, f],
          });
        }
        function T(c) {
          const t = {
            weekday: "long",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
          };
          return new Date(c * 1e3).toLocaleString(
            g.pf.GetPreferredLocales(),
            t,
          );
        }
      },
      67227: ($, V, e) => {
        "use strict";
        e.d(V, { n: () => B });
        var n = e(7850),
          r = e(18938),
          G = e(83069),
          d = e(64238),
          U = e.n(d),
          z = e(90626),
          C = e(54130),
          K = e(19298);
        function b(a, I) {
          return (M) => {
            a?.(M), I?.(M);
          };
        }
        function B(a) {
          const {
              direction: I,
              interactionMode: M = G.aJ,
              ignoreHorizontal: g,
              ignoreVertical: A,
              dismissOnClick: W,
              menuTarget: s,
              className: H,
              children: N,
              renderWhenClosed: p = !0,
              ...i
            } = a,
            {
              isShowingMenu: E,
              triggerProps: u,
              menuProps: v,
              closeMenu: P,
            } = (0, G.Yz)(a),
            j = z.useRef(null),
            x = (0, r.Ue)(j, s.props.navRef),
            h = z.useRef(null);
          return (
            z.useEffect(() => {
              E
                ? h.current?.TakeFocus()
                : h.current?.BFocusWithin() && j.current?.TakeFocus();
            }, [E]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                z.cloneElement(s, {
                  ...u,
                  onMouseEnter: b(s.props.onMouseEnter, u.onMouseEnter),
                  onMouseLeave: b(s.props.onMouseLeave, u.onMouseLeave),
                  navRef: x,
                }),
                (0, n.jsx)(K.Z, {
                  ...i,
                  ...v,
                  className: U()(v.className, H),
                  navRef: h,
                  onCancel: P,
                  onFocusWithin: (T) => !T && P(),
                  childFocusDisabled: !E,
                  children: (0, n.jsx)(C.q, { children: (p || E) && N }),
                }),
              ],
            })
          );
        }
      },
      93621: ($, V, e) => {
        "use strict";
        e.d(V, { K: () => N, T: () => E });
        var n = e(7850),
          r = e(79611),
          G = e(60351),
          d = e(15252),
          U = e(98254),
          z = e(64868),
          C = e(90626),
          K = e(2801),
          b = e(71421),
          B = e(67705),
          a = e(58033),
          I = e(98609),
          M = ((u) => (
            (u.k_FreeToPlay = "freetoplay"), (u.k_Free = "free"), u
          ))(M || {}),
          g = e(72609),
          A = e(51614);
        function W(u, v) {
          return (0, A.n)({
            mutationKey: ["settofree", v],
            mutationFn: async (P) => {
              const { displayOption: j, fnOnStoreSaveSucceed: x } = P;
              if (!u || !v) throw new Error("Invalid parameters provided");
              {
                const h = new FormData();
                if (
                  (h.set("sessionid", (0, B.KC)()),
                  h.set("appid", "" + u),
                  h.set(
                    "displaytext",
                    j == M.k_Free
                      ? "#PurchaseButton_Free"
                      : "#PurchaseButton_FreeToPlay",
                  ),
                  !(
                    await fetch(
                      `${g.TS.PARTNER_BASE_URL}store/ajaxupdatef2pstore`,
                      { method: "POST", credentials: "include", body: h },
                    )
                  ).ok)
                )
                  throw new Error(a.g.Localize("#FreeOnDemand_Store_Error", u));
              }
              x && x();
              {
                const h = new FormData();
                if (
                  (h.set("sessionid", (0, B.KC)()),
                  h.set("action", "save"),
                  h.set("billing_type", "12"),
                  !(
                    await fetch(
                      `${g.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${v}`,
                      { method: "POST", credentials: "include", body: h },
                    )
                  ).ok)
                )
                  throw new Error(
                    a.g.Localize("#FreeOnDemand_Package_Error", v),
                  );
              }
            },
          });
        }
        var s = e(73191),
          H = e(39905);
        function N(u) {
          const {
              strButtonOverride: v,
              appids: P,
              nPackageID: j,
              onClick: x,
            } = u,
            h = E(),
            [T, c, t] = (0, z.uD)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(b.Gq, {
                toolTipContent: h
                  ? a.g.Localize("#FreeOnDemand_Button_ttip")
                  : a.g.Localize("#FreeOnDemand_Button_disabled_ttip"),
                children: (0, n.jsx)(r.$, {
                  onClick: () => {
                    x?.(), c();
                  },
                  color: "dull",
                  children: v || a.g.Localize("#FreeOnDemand_Button"),
                }),
              }),
              (0, n.jsx)(K.EN, {
                active: T,
                children:
                  h && P && P.length == 1
                    ? (0, n.jsx)(p, {
                        closeModal: t,
                        nPackageID: j,
                        nAppID: P[0],
                      })
                    : (0, n.jsx)(i, { closeModal: t }),
              }),
            ],
          });
        }
        function p(u) {
          const { closeModal: v, nAppID: P, nPackageID: j } = u,
            [x, h] = (0, C.useState)(M.k_FreeToPlay),
            T = W(P, j),
            c = (0, s.vs)();
          return c.bLoading
            ? (0, n.jsx)(s.Hh, {
                state: c,
                strDialogTitle: a.g.Localize("#FreeOnDemand_Title"),
                closeModal: () => {
                  window.location.replace(
                    `${I.TS.PARTNER_BASE_URL}store/packagelanding/${j}`,
                  ),
                    v();
                },
              })
            : (0, n.jsxs)(K.o0, {
                strTitle: a.g.Localize("#FreeOnDemand_Title"),
                strDescription: a.g.Localize("#FreeOnDemand_Desc"),
                strOKButtonText: a.g.Localize("#FreeOnDemand_Button_Confirm"),
                onCancel: v,
                onOK: async () => {
                  try {
                    c.fnSetLoading(!0),
                      c.fnSetThrobber(
                        a.g.Localize("#FreeOnDemand_Convert_Store"),
                      ),
                      await T.mutateAsync({
                        displayOption: x,
                        fnOnStoreSaveSucceed: () => {
                          c.fnSetThrobber(
                            a.g.Localize("#FreeOnDemand_Convert_Package"),
                          );
                        },
                      }),
                      c.fnSetSuccess(!0),
                      c.fnSetStrSuccess(
                        a.g.Localize("#FreeOnDemand_ConvertSuccess"),
                      );
                  } catch (t) {
                    c.fnSetError(!0),
                      c.fnSetStrError(
                        t instanceof Error
                          ? t.message
                          : H.Z.Localize(
                              "#Error_ErrorCommunicatingWithNetwork",
                            ),
                      );
                  }
                },
                children: [
                  (0, n.jsx)("br", {}),
                  (0, n.jsxs)(G.az, {
                    paddingTop: "4",
                    children: [
                      (0, n.jsx)(d.EY, {
                        size: "4",
                        children: a.g.Localize("#FreeOnDemand_Radio"),
                      }),
                      (0, n.jsx)(G.az, {
                        padding: "4",
                        background: "greyneutral-6",
                        radius: "sm",
                        children: (0, n.jsx)(U.z, {
                          value: x,
                          options: [M.k_FreeToPlay, M.k_Free],
                          getOptionLabel: (t) =>
                            t == M.k_Free
                              ? a.g.Localize("#FreeOnDemand_Radio_Free")
                              : a.g.Localize("#FreeOnDemand_Radio_FreeToPlay"),
                          onValueChange: h,
                        }),
                      }),
                    ],
                  }),
                ],
              });
        }
        function i(u) {
          const { closeModal: v } = u,
            P = `${I.TS.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
          return (0, n.jsxs)(K.KG, {
            strTitle: a.g.Localize("#FreeOnDemand_Title"),
            strDescription: a.g.Localize("#FreeOnDemand_Desc_NotPermitted"),
            closeModal: v,
            children: [
              (0, n.jsx)("br", {}),
              (0, n.jsx)("br", {}),
              (0, n.jsx)("a", {
                href: P,
                target: "_blank",
                rel: "noreferrer",
                children: P,
              }),
            ],
          });
        }
        function E() {
          const [u] = (0, C.useState)(
            (0, B.Tc)("bCanSetFree", "application_config"),
          );
          return u;
        }
      },
      83465: ($, V, e) => {
        "use strict";
        e.d(V, { e: () => s, x: () => W });
        var n = e(7850),
          r = e(1706),
          G = e(34104),
          d = e(67227),
          U = e(93357),
          z = e(93621),
          C = e(83069),
          K = e(36118),
          b = e(36707),
          B = e(31389),
          a = e.n(B),
          I = e(90626),
          M = e(58033),
          g = e(79611),
          A = e(71421);
        function W(p) {
          const i = (0, n.jsx)("button", {
            className: a().PriceGuidelinesPicker,
            children: (0, n.jsx)(K.GB9, {}),
          });
          return (0, n.jsx)(H, { menuTarget: i, ...p });
        }
        function s(p) {
          const { strButton: i, strTooltip: E } = p,
            u = (0, n.jsxs)(g.$, {
              onClick: () => {},
              children: [
                (0, n.jsx)(A.Gq, {
                  toolTipContent: E,
                  children: (0, n.jsx)("span", { children: i }),
                }),
                (0, n.jsx)("div", {
                  className: (0, b.A)(
                    a().SelectionIndicator,
                    "DialogDropDown_Arrow",
                  ),
                  children: (0, n.jsx)(K.GB9, {}),
                }),
              ],
            });
          return (0, n.jsx)(H, { menuTarget: u, ...p });
        }
        function H(p) {
          const { menuTarget: i } = p,
            E = I.useRef(null);
          return (0, n.jsx)(d.n, {
            menuTarget: i,
            direction: "down",
            interactionMode: C.k$,
            ref: E,
            children: (0, n.jsx)(N, {
              onSelect: () => E.current?.close(),
              ...p,
            }),
          });
        }
        function N(p) {
          const {
              fnGetUSDPriceInCents: i,
              fnOnUpdate: E,
              strDescription: u,
              bCanSetToFree: v,
              nPackageID: P,
              onSelect: j,
              appids: x,
            } = p,
            h = (0, U.cT)(),
            T = i();
          if (!h) return null;
          const c = h.GetUSDPricePointsInCents();
          return (0, n.jsxs)("div", {
            className: a().GuidelinesPanel,
            children: [
              (0, n.jsx)("div", {
                className: a().GuidelinesDescription,
                children: u || M.g.Localize("#PricingGuideline_Default"),
              }),
              (0, n.jsxs)("div", {
                className: a().GuidelinesGrid,
                children: [
                  v !== void 0 &&
                    (0, n.jsx)(
                      "div",
                      {
                        className: a().GridElement,
                        children: (0, n.jsx)(z.K, {
                          nPackageID: P,
                          strButtonOverride: M.g.Localize(
                            "#FreeOnDemand_InlineOption",
                          ),
                          appids: x,
                        }),
                      },
                      "settofree",
                    ),
                  c.map((t) =>
                    (0, n.jsx)(
                      "button",
                      {
                        onClick: () => {
                          j(), E(t);
                        },
                        className: (0, b.A)({
                          [a().GridElement]: !0,
                          [a().CurrentPrice]: T == t,
                        }),
                        children: (0, r.x)(t, G.CS),
                      },
                      t,
                    ),
                  ),
                ],
              }),
            ],
          });
        }
      },
      58033: ($, V, e) => {
        "use strict";
        e.d(V, { g: () => d });
        var n = e(31275);
        const r = {};
        (r.arabic = () => e.e(2944).then(e.t.bind(e, 2944, 19))),
          (r.brazilian = () => e.e(8898).then(e.t.bind(e, 48898, 19))),
          (r.bulgarian = () => e.e(6825).then(e.t.bind(e, 6825, 19))),
          (r.czech = () => e.e(8323).then(e.t.bind(e, 38323, 19))),
          (r.danish = () => e.e(4341).then(e.t.bind(e, 64341, 19))),
          (r.dutch = () => e.e(9606).then(e.t.bind(e, 39606, 19))),
          (r.english = () => e.e(2692).then(e.t.bind(e, 42692, 19))),
          (r.finnish = () => e.e(7239).then(e.t.bind(e, 87239, 19))),
          (r.french = () => e.e(5516).then(e.t.bind(e, 25516, 19))),
          (r.german = () => e.e(3714).then(e.t.bind(e, 63714, 19))),
          (r.greek = () => e.e(3656).then(e.t.bind(e, 8894, 19))),
          (r.hungarian = () => e.e(9469).then(e.t.bind(e, 59469, 19))),
          (r.indonesian = () => e.e(7644).then(e.t.bind(e, 7644, 19))),
          (r.italian = () => e.e(1724).then(e.t.bind(e, 1724, 19))),
          (r.japanese = () => e.e(4731).then(e.t.bind(e, 34731, 19))),
          (r.koreana = () => e.e(4219).then(e.t.bind(e, 14219, 19))),
          (r.latam = () => e.e(3059).then(e.t.bind(e, 83059, 19))),
          (r.malay = () => e.e(7036).then(e.t.bind(e, 57036, 19))),
          (r.norwegian = () => e.e(2220).then(e.t.bind(e, 62220, 19))),
          (r.polish = () => e.e(5501).then(e.t.bind(e, 35501, 19))),
          (r.portuguese = () => e.e(9977).then(e.t.bind(e, 69977, 19))),
          (r.romanian = () => e.e(7175).then(e.t.bind(e, 57175, 19))),
          (r.russian = () => e.e(3757).then(e.t.bind(e, 13757, 19))),
          (r.schinese = () => e.e(216).then(e.t.bind(e, 80216, 19))),
          (r.spanish = () => e.e(4036).then(e.t.bind(e, 34036, 19))),
          (r.swedish = () => e.e(9365).then(e.t.bind(e, 59365, 19))),
          (r.tchinese = () => e.e(4763).then(e.t.bind(e, 54763, 19))),
          (r.thai = () => e.e(5666).then(e.t.bind(e, 65666, 19))),
          (r.turkish = () => e.e(8052).then(e.t.bind(e, 38052, 19))),
          (r.ukrainian = () => e.e(290).then(e.t.bind(e, 50290, 19))),
          (r.vietnamese = () => e.e(9008).then(e.t.bind(e, 56627, 19)));
        async function G(U) {
          if (r[U]) return r[U]();
        }
        const d = (0, n.l)(G);
      },
      83069: ($, V, e) => {
        "use strict";
        e.d(V, { k$: () => a, AV: () => I, aJ: () => B, Yz: () => M });
        var n = e(7850),
          r = e(14807),
          G = e(64238),
          d = e(90626),
          U = e(82734),
          z = e(65697);
        function C() {
          return !(
            typeof HTMLElement < "u" &&
            typeof HTMLElement.prototype == "object" &&
            "popover" in HTMLElement.prototype
          );
        }
        async function K() {
          C() && (await e.e(8433).then(e.bind(e, 8433))).apply();
        }
        K();
        function b(A) {
          const [W, s] = (0, r.x)(A, "-");
          return W === "left" || W === "right" ? [void 0, W] : [W, s];
        }
        const B = 0,
          a = 1,
          I = 2;
        function M(A) {
          const {
              direction: W,
              ignoreHorizontal: s,
              ignoreVertical: H,
              dismissOnClick: N,
              interactionMode: p = B,
            } = A,
            i = (0, d.useRef)(null),
            E = (0, d.useRef)(!1),
            u = (0, d.useRef)(!1),
            v = (0, d.useRef)(null),
            [P, j] = (0, d.useState)(!1),
            [x, h] = (0, d.useMemo)(() => b(W), [W]),
            T = (0, d.useCallback)(() => {
              if (!v.current || !i.current) return;
              const o = v.current.getBoundingClientRect(),
                L = i.current.getBoundingClientRect();
              let F = h;
              const X = v.current.matches(":dir(rtl)");
              X &&
                (h === "left" ? (F = "right") : h === "right" && (F = "left")),
                i.current.style.setProperty("--parentWidth", `${o.width}px`),
                i.current.style.setProperty("--parentHeight", `${o.height}px`);
              let O = 0;
              if (!s) {
                if (L.width) {
                  if (
                    (F === "left" && (O = (x ? o.right : o.left) - L.width),
                    F === "right")
                  ) {
                    const ne = x ? o.left : o.right;
                    O = document.body.clientWidth - (ne + L.width);
                  }
                  F === void 0 &&
                    (X
                      ? (O = o.right - L.width)
                      : (O = document.body.clientWidth - (o.left + L.width))),
                    (O = Math.min(O, 0));
                }
                F === "left"
                  ? x
                    ? ((i.current.style.left = "unset"),
                      (i.current.style.right = `${document.body.clientWidth - o.right + O}px`))
                    : ((i.current.style.left = "unset"),
                      (i.current.style.right = `${document.body.clientWidth - o.left + O}px`))
                  : F === "right"
                    ? x
                      ? ((i.current.style.left = `${o.left + O}px`),
                        (i.current.style.right = "unset"))
                      : ((i.current.style.left = `${o.right + O}px`),
                        (i.current.style.right = "unset"))
                    : F === void 0 &&
                      (X
                        ? ((i.current.style.left = "unset"),
                          (i.current.style.right = `${document.body.clientWidth - o.right + O}px`))
                        : ((i.current.style.left = `${o.left + O}px`),
                          (i.current.style.right = "unset")));
              }
              H ||
                (x === "down"
                  ? ((i.current.style.top = `${o.bottom}px`),
                    (i.current.style.bottom = "unset"),
                    i.current.style.setProperty(
                      "--availableHeight",
                      `${document.documentElement.clientHeight - o.bottom}px`,
                    ))
                  : x === "up"
                    ? ((i.current.style.top = "unset"),
                      (i.current.style.bottom = `${document.documentElement.clientHeight - o.top}px`),
                      i.current.style.setProperty(
                        "--availableHeight",
                        `${o.top}px`,
                      ))
                    : x === void 0 &&
                      ((i.current.style.top = `${o.top}px`),
                      (i.current.style.bottom = "unset"),
                      i.current.style.setProperty(
                        "--availableHeight",
                        `${document.documentElement.clientHeight - o.top}px`,
                      )));
            }, [h, s, H, x]),
            c = (0, d.useMemo)(() => {
              if (v.current) return (0, U._f)(v.current);
            }, [v.current]);
          (0, d.useEffect)(
            () =>
              P
                ? (i.current?.showPopover(),
                  T(),
                  c?.addEventListener("scroll", T),
                  window.addEventListener("scroll", T),
                  () => {
                    c?.removeEventListener("scroll", T),
                      window.addEventListener("scroll", T);
                  })
                : (window.sessionStorage.getItem("DEBUG_StickyContextMenus") !=
                    "true" && i.current?.hidePopover(),
                  () => {}),
            [P, T, c],
          );
          const t = (0, d.useCallback)(() => {
              T(), j(!0), (u.current = !0);
            }, [T]),
            l = (0, d.useCallback)(() => {
              (u.current = !1), E.current || j(!1);
            }, []),
            f = (0, d.useCallback)(() => {
              (E.current = !0), j(!0);
            }, []),
            m = (0, d.useCallback)(
              (o) => {
                i.current?.contains(o.target) && f();
              },
              [f],
            ),
            S = (0, d.useCallback)(
              (o) => {
                i.current?.contains(o.target) && f();
              },
              [f],
            ),
            y = (0, d.useCallback)(() => {
              (E.current = !1), u.current || j(!1);
            }, []),
            R = (0, d.useCallback)(
              (o) => {
                i.current?.contains(o.target) && y();
              },
              [y],
            ),
            D = (0, d.useCallback)(() => {
              y(), l();
            }, [y, l]),
            Y = (0, d.useCallback)(
              (o) => {
                o.key === "Enter" && (o.preventDefault(), P ? l() : t());
              },
              [l, t, P],
            ),
            Q = (0, d.useCallback)(
              (o) => {
                !o.currentTarget.contains(o.relatedTarget) &&
                  !i.current?.contains(o.relatedTarget) &&
                  l();
              },
              [l],
            ),
            _ = (0, d.useCallback)(
              (o) => {
                p === I && t();
              },
              [p, t],
            ),
            J = (0, d.useCallback)(
              (o) => {
                const L =
                    o.relatedTarget &&
                    !o.currentTarget.contains(o.relatedTarget),
                  F = !o.relatedTarget && !E.current;
                (L || F) && (y(), j(!1));
              },
              [y],
            ),
            Z = (0, d.useCallback)(
              (o) => {
                i.current?.contains(o.target) &&
                  (P && N ? D() : E.current && t());
              },
              [D, N, P, t],
            ),
            w = (0, d.useCallback)(
              (o) => {
                i.current?.contains(o.target) &&
                  (o.key === "Enter" && P && N ? D() : t(),
                  o.key === "Escape" && P && (D(), o.stopPropagation()));
              },
              [D, N, P, t],
            );
          let k;
          p === B && !P
            ? (k = (o) => {
                o.preventDefault(), t();
              })
            : p === a && (k = P ? l : t);
          const ee = {
              "aria-expanded": P,
              role: "button",
              onMouseEnter: p === B ? t : void 0,
              onMouseLeave: p === B ? l : void 0,
              onClick: k,
              ref: v,
              onKeyDown: Y,
              onFocus: _,
              onBlur: Q,
            },
            q = {
              popover: "manual",
              ref: i,
              onMouseEnter: S,
              onMouseLeave: R,
              onFocus: m,
              onBlur: J,
              onClick: Z,
              onKeyDown: w,
              className: z.PopoverMenu,
            };
          return (
            (0, d.useImperativeHandle)(
              A.ref,
              () => ({ show: t, hide: l, close: D }),
              [t, l, D],
            ),
            { isShowingMenu: P, triggerProps: ee, menuProps: q, closeMenu: D }
          );
        }
        function g(A) {
          const {
              direction: W,
              interactionMode: s = B,
              ignoreHorizontal: H,
              ignoreVertical: N,
              dismissOnClick: p,
              menuTarget: i,
              className: E,
              children: u,
              as: v = "div",
              renderWhenClosed: P = !0,
              ref: j,
              ...x
            } = A,
            { triggerProps: h, menuProps: T, isShowingMenu: c } = M(A);
          if (!u || Children.toArray(u).length === 0) return i;
          const t = v;
          return jsxs(Fragment, {
            children: [
              cloneElement(i, h),
              jsx(t, {
                ...T,
                className: classNames(T.className, E),
                ...x,
                children: (P || c) && u,
              }),
            ],
          });
        }
      },
      96434: ($) => {
        $.exports = {
          PriceCell: "_1sKIcxV1HaEWCa1x_sSuVT",
          PricePrefix: "gPcNwuh4LJPmwRZrAbrA5",
          PriceSuffix: "_3AEJb3AH01qQaG89JOYAh4",
          PackagePricingContext: "_3_niTWrZ8h834BjbLqyByP",
          EditablePrice: "pm5xM6Dyy-9XY0g9TpjX1",
          PriceInput: "_1PcwXjG-2t5JOJuL7yhOYG",
          USD: "_1C7qRJ6YdGWEwEK4QsMRUX",
          ProposedPrice: "rVkmDwpTOXR4DqdBdbiPf",
          ApprovedCanPublish: "_1JBd8mxmIpyOChqhkSKSUg",
          ChangedLocally: "_5mvGWs3IDSRLfxvHx8wig",
          WarningPrice: "_1Qd5uW_BK8PBDJiDBjDCPN",
          SevereWarningPrice: "_1o6zP8gegcka6hdQA2lJjv",
          BadPrice: "_18aiu0HZznAMnGQfWExtTm",
          PriceChange: "w-K7qF60ELXWtEjymcY68",
          NewPrice: "_3sgbtvMYimrD0kSs3VCoPx",
          PriceAlert: "_2eadUvk4zK7FL9FFvy3Gd2",
          PriceChangeArrow: "_1z0l2rhYAxXf6M_tgnczgZ",
          PriceIncrease: "_2jQyP7o7hbWM4EhAkKLAks",
          PricePopout: "_1AoyzK2lSPVwQJoIYEjFbR",
          DetailRow: "_3P_fJH02fBcdGM2etenWu7",
          DetailLabel: "_3RXb3FOdpsOt-aVMvfnb6W",
          DetailPrice: "_2k3CVLd6A1QAixKOkfGx6P",
          DetailButton: "_3ILP7OdXtGjDaSvJqI81RV",
          Disabled: "_3mZHsQVQB8w84OblleAq68",
          HoverToolTip: "_36qS74l1tXSXwGdyfIFQ-G",
        };
      },
      31389: ($) => {
        $.exports = {
          PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
          SelectionIndicator: "krnfTfrwAOa14We87yU4k",
          GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
          GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
          GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
          GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
          CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
        };
      },
      65697: ($) => {
        $.exports = { PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO" };
      },
    },
  ]);
})();
