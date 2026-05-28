/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7043],
  {
    96434: (e) => {
      e.exports = {
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
    16180: (e) => {
      e.exports = {
        Option: "_3a3fNdwhCItYEc1SsUNP",
        RadioCircle: "_13ZbEe1M2PJ-21o9RTar64",
      };
    },
    65274: (e) => {
      e.exports = {
        Text: "f6hU22EA7Z8peFWZVBJU",
        Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
        "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
        "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
        "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
        "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
        "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
        "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
        "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
        "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
        "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
        TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
        TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
        LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
        WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
      };
    },
    31389: (e) => {
      e.exports = {
        PriceGuidelinesPicker: "_2skmsPR7jCBo5xHN2v_E6A",
        SelectionIndicator: "krnfTfrwAOa14We87yU4k",
        GuidelinesPanel: "_29sQa7P4ANi-KFpS_lkroj",
        GuidelinesDescription: "_3poXK_qmmnRcHLvBGFqi8h",
        GuidelinesGrid: "_1Kz7R_x889mAnYo3uORnzL",
        GridElement: "_1r_b9RJn1Ca6KSjtSm7RPF",
        CurrentPrice: "_3wZdsoh1-V6RQ2rsPkj-ga",
      };
    },
    65697: (e) => {
      e.exports = { PopoverMenu: "_2i2FUBZKGyiP5Sb6tuASpO" };
    },
    10754: (e, n, t) => {
      "use strict";
      t.d(n, {
        mK: () => N,
        Gy: () => y,
        sh: () => v,
        T6: () => w,
        yk: () => k,
        Ur: () => T,
      });
      var r = t(7850),
        i = t(48724),
        o = t(48174),
        s = t(82314),
        a = t(4160),
        c = t(68488),
        l = t(69423),
        d = t(9554),
        u = t(90626),
        h = t(16676),
        p = t(12155),
        g = t(32754),
        P = t(52038),
        m = t(61859),
        b = t(47184),
        f = t(96434),
        x = t.n(f),
        _ = t(14336);
      let D = null;
      function C(e) {
        const { packageID: n, strPriceKey: t } = e,
          {
            nPriceInCents: i,
            nPublishedPriceInCents: o,
            nProposedPriceInCents: s,
            nSuggestedPriceInCents: a,
            fnSetPrice: c,
          } = (0, l.xQ)(n, t),
          { nPriceInCents: d } = (0, l.xQ)(n, "USD"),
          u = !(!s || (o && s == o)),
          h = (0, l.d$)(n),
          p = h && N(h.rtSubmitted),
          { data: f } = (0, _.js)(h?.submitterID),
          C = f ? f.m_strPlayerName : h?.submitterID;
        return (o || u || a) && D == n + t
          ? (0, r.jsxs)("div", {
              className: x().PricePopout,
              children: [
                !!o &&
                  (0, r.jsxs)(g.he, {
                    className: x().DetailRow,
                    direction: "left",
                    toolTipContent: (0, m.we)(
                      "#PricingDashboard_CurrentPriceOnStore_ttip",
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: x().DetailLabel,
                        children: (0, m.we)(
                          "#PricingDashboard_CurrentPriceOnStore",
                        ),
                      }),
                      (0, r.jsx)("div", {
                        className: x().DetailPrice,
                        children: (0, l.Wx)(o, t).join(""),
                      }),
                      (0, r.jsx)(g.he, {
                        className: (0, P.A)(
                          x().DetailButton,
                          o == i && x().Disabled,
                        ),
                        onClick: () => c(o),
                        bDisabled: o == i,
                        toolTipContent: (0, m.we)(
                          "#PricingDashboard_UseThisOldPrice_ttip",
                        ),
                        children: (0, m.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                u &&
                  (0, r.jsxs)(g.he, {
                    className: x().DetailRow,
                    direction: "left",
                    toolTipContent: (0, m.we)(
                      "#PricingDashboard_ProposedPrice_ttip",
                      C,
                      p,
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: x().DetailLabel,
                        children: (0, m.we)("#PricingDashboard_ProposedPrice"),
                      }),
                      (0, r.jsx)("div", {
                        className: x().DetailPrice,
                        children: (0, l.Wx)(s, t).join(""),
                      }),
                      (0, r.jsx)(g.he, {
                        className: (0, P.A)(
                          x().DetailButton,
                          s == i && x().Disabled,
                        ),
                        onClick: () => c(s),
                        bDisabled: s == i,
                        toolTipContent: (0, m.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, m.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                !!a &&
                  (0, r.jsxs)(g.he, {
                    className: x().DetailRow,
                    direction: "left",
                    toolTipContent: b.g.Localize(
                      "#PricingDashboard_Method_SuggestedPrice_ttip",
                      (0, l.Wx)(d, "USD").join(""),
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: x().DetailLabel,
                        children: b.g.Localize(
                          "#PricingDashboard_Method_SuggestedPrice",
                        ),
                      }),
                      (0, r.jsx)("div", {
                        className: x().DetailPrice,
                        children: (0, l.Wx)(a, t).join(""),
                      }),
                      (0, r.jsx)(g.he, {
                        className: (0, P.A)(
                          x().DetailButton,
                          a == i && x().Disabled,
                        ),
                        onClick: () => c(a),
                        bDisabled: a == i,
                        toolTipContent: (0, m.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, m.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
              ],
            })
          : null;
      }
      function v(e) {
        const { cell: n, row: t } = e,
          o = t.original.packageID,
          s = n.getValue(),
          {
            nPriceInCents: a,
            nPublishedPriceInCents: p,
            nProposedPriceInCents: g,
            fnSetPrice: P,
          } = (0, l.xQ)(o, s),
          [m, b, f] = (0, l.Wx)(a, s),
          _ = (0, l.Gs)(s),
          v = u.useRef(void 0),
          { strClassName: T } = j(o, s),
          k = "USD" == s,
          N = g ?? p,
          L = a != N;
        return (0, r.jsxs)("div", {
          ref: v,
          onKeyDown: d.nm,
          className: T,
          children: [
            L && (0, r.jsx)(y, { nPriceInCents: a, nSavedPriceInCents: N }),
            (0, r.jsx)("div", { className: x().PricePrefix, children: m && m }),
            (0, r.jsx)(i.n, {
              menuTarget: (0, r.jsx)("div", {
                className: x().EditablePrice,
                children: (0, r.jsx)(h.pd, {
                  value: b,
                  className: x().PriceInput,
                  onChange: (e) => {
                    const n = e.target.value.replace(/[^0-9]/g, "");
                    let t = Number(n || 0);
                    if (Number.isNaN(t)) return;
                    _.bWholeUnitsOnly && (t *= 100);
                    const r = 2147483647;
                    t > r && (t = r), P(t);
                  },
                  onFocus: () => {
                    D = o + s;
                  },
                }),
              }),
              direction: "up",
              interactionMode: c.AV,
              dismissOnClick: !0,
              renderWhenClosed: !1,
              children: (0, r.jsx)(C, { packageID: o, strPriceKey: s }),
            }),
            (0, r.jsx)("div", { className: x().PriceSuffix, children: f && f }),
            k &&
              (0, r.jsx)(S, {
                packageID: o,
                appids: t.original.appids,
                bCanSetToFree: t.original.bCanSetToFree,
              }),
            (0, r.jsx)(w, { packageID: o, strPriceKey: s }),
          ],
        });
      }
      function S(e) {
        const { packageID: n, appids: t, bCanSetToFree: i } = e,
          { fnApplyGuidelines: a } = (0, o.gC)((0, l.$i)());
        return (0, r.jsx)(s.x, {
          fnGetUSDPriceInCents: () => (0, l.FR)(n, "USD"),
          fnOnUpdate: (e) => a(n, e),
          strDescription: b.g.Localize(
            "#PricingDashboard_GuidelinesPickerDescription_New",
          ),
          nPackageID: n,
          appids: t,
          bCanSetToFree: i,
        });
      }
      function w(e) {
        const { packageID: n, strPriceKey: t } = e,
          { strPriceWarning: i, bBadPrice: o, bShowWarningIcon: s } = j(n, t);
        return s
          ? (0, r.jsx)(g.he, {
              className: x().PriceAlert,
              strTooltipClassname: x().HoverToolTip,
              toolTipContent: i,
              direction: "top",
              children: (0, r.jsx)(p.eTF, {
                color: o ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            })
          : null;
      }
      const T = 2.25,
        k = 0.5;
      function j(e, n) {
        const {
            nPriceInCents: t,
            nPublishedPriceInCents: r,
            nProposedPriceInCents: i,
            nMinPriceInCents: o,
            nMaxPriceInCents: s,
            nMaxDiscountPercentage: c,
            nSuggestedPriceInCents: d,
          } = (0, l.xQ)(e, n),
          h = (0, l.d$)(e),
          p = "USD" == n,
          g = t != (i ?? r),
          b = t < o,
          f = !!s && t > s,
          _ = !!d && t > d * T,
          D = !!d && t < d * k,
          C = !!d && t < d && !!c,
          v = !!d && t == d && !!c;
        let S = !1;
        f
          ? (S = (0, m.we)("#PricingDashboard_PriceIncreaseDisallowed"))
          : b
            ? (S = (0, m.we)(
                "#PricingDashboard_PriceTooLow",
                (0, l.Wx)(o, n).join(""),
              ))
            : _
              ? (S = (0, m.we)(
                  "#PricingDashboard_PriceMuchHigherThanMethod",
                  (0, l.Wx)(d, n).join(""),
                ))
              : D && C
                ? (S = (0, m.we)(
                    "#PricingDashboard_PriceMuchLowerThanMethod_AndLimitDiscount",
                    (0, l.Wx)(d, n).join(""),
                    c,
                  ))
                : D
                  ? (S = (0, m.we)(
                      "#PricingDashboard_PriceMuchLowerThanMethod",
                      (0, l.Wx)(d, n).join(""),
                    ))
                  : C
                    ? (S = (0, m.we)(
                        "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                        c,
                      ))
                    : v && (S = (0, m.we)("#PricingDashboard_PriceCheap", c));
        const w = f || b,
          j = _ || D,
          y = w || j || C,
          N = !(g || !i || (r && i == r)),
          L = h?.eState == a.Zo,
          I = (0, P.A)(
            x().PriceCell,
            p && x().USD,
            g && x().ChangedLocally,
            N && x().ProposedPrice,
            L && x().ApprovedCanPublish,
            y && x().WarningPrice,
            j && x().SevereWarningPrice,
            w && x().BadPrice,
          );
        return u.useMemo(
          () => ({
            strPriceWarning: S,
            strClassName: I,
            bBadPrice: w,
            bShowSevereWarning: j,
            bShowWarningIcon: y,
          }),
          [S, I, w, j, y],
        );
      }
      function y(e) {
        const { nPriceInCents: n, nSavedPriceInCents: t } = e;
        let i = null,
          o = null,
          s = null,
          a = null;
        if (t) {
          const e = Math.ceil((100 * (n - t)) / t),
            c = n > t;
          (s = c
            ? (0, m.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, m.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (a = (0, P.A)(x().PriceChange, c && x().PriceIncrease)),
            (o = (0, r.jsx)("div", {
              className: x().PriceChangeArrow,
              children: (0, r.jsx)(p.i3G, { angle: c ? 0 : 180 }),
            })),
            (i = e + "%");
        } else
          (i = (0, m.we)("#PricingDashboard_PriceIsNew_Short")),
            (a = (0, P.A)(x().NewPrice));
        return (0, r.jsxs)(g.he, {
          className: a,
          strTooltipClassname: x().HoverToolTip,
          toolTipContent: s,
          direction: "top",
          children: [o, i],
        });
      }
      function N(e) {
        return new Date(1e3 * e).toLocaleString(m.pf.GetPreferredLocales(), {
          weekday: "long",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
      }
    },
    80797: (e, n, t) => {
      "use strict";
      t.d(n, { Q: () => o });
      var r = t(90626);
      function i(e, n, t) {
        return "function" == typeof e ? e(n, t) : r.cloneElement(e, n);
      }
      function o(e, n, t, r) {
        return i(e || n, t, r);
      }
    },
    20187: (e, n, t) => {
      "use strict";
      t.d(n, { Ae: () => h, EY: () => d, U6: () => u });
      var r = t(7850),
        i = t(55348),
        o = t(11526),
        s = t(75659),
        a = t(64238),
        c = t.n(a),
        l = t(65274);
      function d(e) {
        const { as: n = "span", ref: t, className: i, ...s } = e,
          a = n;
        return (0, r.jsx)(a, {
          ref: t,
          ...(0, o.mz)({ ...s, className: c()(l.Text, i) }, h),
        });
      }
      const u = [
          {
            prop: "weight",
            responsive: !0,
            className: l.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: l.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            responsive: !0,
            cssProperty: (e, n, t) => [
              "--text-color",
              (0, o.To)(e, (0, i.I)(n.contrast, t) ?? "body"),
            ],
          },
          {
            prop: "contrast",
            responsive: !0,
            cssProperty: (e, n, t) => [
              "--text-color",
              (0, o.To)((0, i.I)(n.color, t) ?? "text-body", e),
            ],
          },
          { prop: "truncate", className: l.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: l.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: l.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        h = [
          ...u,
          ...s.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => l[`TextSize-${e}`],
          },
        ];
    },
    48724: (e, n, t) => {
      "use strict";
      t.d(n, { n: () => u });
      var r = t(7850),
        i = t(68488),
        o = t(64238),
        s = t.n(o),
        a = t(90626),
        c = t(7445),
        l = t(76217);
      function d(e, n) {
        return (t) => {
          e?.(t), n?.(t);
        };
      }
      function u(e) {
        const {
            direction: n,
            interactionMode: t = i.aJ,
            ignoreHorizontal: o,
            ignoreVertical: u,
            dismissOnClick: h,
            menuTarget: p,
            className: g,
            children: P,
            renderWhenClosed: m = !0,
            ...b
          } = e,
          {
            isShowingMenu: f,
            triggerProps: x,
            menuProps: _,
            closeMenu: D,
          } = (0, i.Yz)(e),
          C = a.useRef(null),
          v = a.useRef(null);
        return (
          a.useEffect(() => {
            f
              ? v.current?.TakeFocus()
              : v.current?.BFocusWithin() && C.current?.TakeFocus();
          }, [f]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              a.cloneElement(p, {
                ...x,
                onMouseEnter: d(p.props.onMouseEnter, x.onMouseEnter),
                onMouseLeave: d(p.props.onMouseLeave, x.onMouseLeave),
                navRef: C,
              }),
              (0, r.jsx)(l.Z, {
                ...b,
                ..._,
                className: s()(_.className, g),
                navRef: v,
                onCancel: D,
                onFocusWithin: (e) => !e && D(),
                childFocusDisabled: !f,
                children: (0, r.jsx)(c.q, { children: (m || f) && P }),
              }),
            ],
          })
        );
      }
    },
    42836: (e, n, t) => {
      "use strict";
      t.d(n, { K: () => w, T: () => j });
      var r = t(7850),
        i = t(53965),
        o = t(90534),
        s = t(20187),
        a = t(90626),
        c = t(16180),
        l = t(83392),
        d = t(80797);
      function u(e) {
        const { children: n, ...t } = e;
        return (0, r.jsxs)(l.s, {
          cursor: "default",
          gap: "2",
          className: c.Option,
          ...t,
          children: [
            (0, r.jsx)("div", { className: c.RadioCircle }),
            (0, r.jsx)(s.EY, { children: n }),
          ],
        });
      }
      const h = Object.assign(
          function (e) {
            const {
              value: n,
              onValueChange: t,
              options: i,
              getOptionLabel: o,
              ...s
            } = e;
            return (0, r.jsx)(h.Root, {
              value: n,
              onValueChange: t,
              ...s,
              children: i.map((e) => {
                const n = o ? o(e) : e;
                return (0, r.jsx)(h.Option, { value: e, children: n }, n);
              }),
            });
          },
          {
            Root: function (e) {
              const { value: n, onValueChange: t, render: i, ...o } = e,
                s = (0, a.useRef)(null),
                c = (0, a.useCallback)((e, n) => {
                  if (!s.current) return;
                  const t = [...s.current.querySelectorAll("[data-radio-id]")];
                  if (0 !== t.length)
                    for (let r = 0; r < t.length; r++) {
                      const i = t[r];
                      if (!i.dataset.radioId) continue;
                      if (i.dataset.radioId === e) {
                        const e = t[(r + n + t.length) % t.length];
                        e.click(), e.focus();
                      }
                    }
                }, []),
                u = (0, a.useCallback)((e) => c(e, 1), [c]),
                h = (0, a.useCallback)((e) => c(e, -1), [c]),
                g = (0, a.useMemo)(
                  () => ({
                    value: n,
                    onValueChange: t,
                    onSelectNext: u,
                    onSelectPrev: h,
                  }),
                  [n, t, u, h],
                ),
                P = { role: "radiogroup", ref: s, ...o },
                m = (0, r.jsx)(l.s, {
                  direction: "column",
                  gap: "2",
                  role: "radiogroup",
                  ...o,
                }),
                b = (0, d.Q)(i, m, P);
              return (0, r.jsx)(p, { value: g, children: b });
            },
            Option: function (e) {
              const { value: n, ref: t, children: i, render: o } = e,
                s = (0, a.useContext)(p),
                c = (0, a.useId)();
              if (!s)
                return (
                  console.error(
                    "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
                  ),
                  null
                );
              const {
                  value: l,
                  onValueChange: h,
                  onSelectNext: g,
                  onSelectPrev: P,
                } = s,
                m = l === n,
                b = () => {
                  m || h(n);
                },
                f = {
                  role: "radio",
                  "aria-checked": m,
                  "data-radio-id": c,
                  onClick: b,
                  onKeyDown: (e) => {
                    switch (e.key) {
                      case " ":
                        b(), e.preventDefault(), e.stopPropagation();
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        g(c), e.preventDefault(), e.stopPropagation();
                        break;
                      case "ArrowLeft":
                      case "ArrowUp":
                        P(c), e.preventDefault(), e.stopPropagation();
                    }
                  },
                  tabIndex: m ? 0 : -1,
                  ref: t,
                  children: i,
                },
                x = (0, r.jsx)(u, {});
              return (0, d.Q)(o, x, f, { bSelected: m });
            },
          },
        ),
        p = (0, a.createContext)(null);
      var g,
        P = t(64753),
        m = t(9154),
        b = t(32754),
        f = t(24484),
        x = t(47184),
        _ = t(30470);
      !(function (e) {
        (e.k_FreeToPlay = "freetoplay"), (e.k_Free = "free");
      })(g || (g = {}));
      var D = t(8527),
        C = t(51614);
      var v = t(71298),
        S = t(47911);
      function w(e) {
        const {
            strButtonOverride: n,
            appids: t,
            nPackageID: o,
            onClick: s,
          } = e,
          a = j(),
          [c, l, d] = (0, P.uD)();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(b.Gq, {
              toolTipContent: a
                ? x.g.Localize("#FreeOnDemand_Button_ttip")
                : x.g.Localize("#FreeOnDemand_Button_disabled_ttip"),
              children: (0, r.jsx)(i.$, {
                onClick: () => {
                  s?.(), l();
                },
                color: "dull",
                children: n || x.g.Localize("#FreeOnDemand_Button"),
              }),
            }),
            (0, r.jsx)(m.EN, {
              active: c,
              children:
                a && t && 1 == t.length
                  ? (0, r.jsx)(T, {
                      closeModal: d,
                      nPackageID: o,
                      nAppID: t[0],
                    })
                  : (0, r.jsx)(k, { closeModal: d }),
            }),
          ],
        });
      }
      function T(e) {
        const { closeModal: n, nAppID: t, nPackageID: i } = e,
          [c, l] = (0, a.useState)(g.k_FreeToPlay),
          d = (function (e, n) {
            return (0, C.n)({
              mutationKey: ["settofree", n],
              mutationFn: async (t) => {
                const { displayOption: r, fnOnStoreSaveSucceed: i } = t;
                if (!e || !n) throw new Error("Invalid parameters provided");
                {
                  const n = new FormData();
                  if (
                    (n.set("sessionid", (0, f.KC)()),
                    n.set("appid", "" + e),
                    n.set(
                      "displaytext",
                      r == g.k_Free
                        ? "#PurchaseButton_Free"
                        : "#PurchaseButton_FreeToPlay",
                    ),
                    !(
                      await fetch(
                        `${D.TS.PARTNER_BASE_URL}store/ajaxupdatef2pstore`,
                        { method: "POST", credentials: "include", body: n },
                      )
                    ).ok)
                  )
                    throw new Error(
                      x.g.Localize("#FreeOnDemand_Store_Error", e),
                    );
                }
                i && i();
                {
                  const e = new FormData();
                  if (
                    (e.set("sessionid", (0, f.KC)()),
                    e.set("action", "save"),
                    e.set("billing_type", "12"),
                    !(
                      await fetch(
                        `${D.TS.PARTNER_BASE_URL}store/ajaxpackagesave/${n}`,
                        { method: "POST", credentials: "include", body: e },
                      )
                    ).ok)
                  )
                    throw new Error(
                      x.g.Localize("#FreeOnDemand_Package_Error", n),
                    );
                }
              },
            });
          })(t, i),
          u = (0, v.vs)();
        return u.bLoading
          ? (0, r.jsx)(v.Hh, {
              state: u,
              strDialogTitle: x.g.Localize("#FreeOnDemand_Title"),
              closeModal: () => {
                window.location.replace(
                  `${_.TS.PARTNER_BASE_URL}store/packagelanding/${i}`,
                ),
                  n();
              },
            })
          : (0, r.jsxs)(m.o0, {
              strTitle: x.g.Localize("#FreeOnDemand_Title"),
              strDescription: x.g.Localize("#FreeOnDemand_Desc"),
              strOKButtonText: x.g.Localize("#FreeOnDemand_Button_Confirm"),
              onCancel: n,
              onOK: async () => {
                try {
                  u.fnSetLoading(!0),
                    u.fnSetThrobber(
                      x.g.Localize("#FreeOnDemand_Convert_Store"),
                    ),
                    await d.mutateAsync({
                      displayOption: c,
                      fnOnStoreSaveSucceed: () => {
                        u.fnSetThrobber(
                          x.g.Localize("#FreeOnDemand_Convert_Package"),
                        );
                      },
                    }),
                    u.fnSetSuccess(!0),
                    u.fnSetStrSuccess(
                      x.g.Localize("#FreeOnDemand_ConvertSuccess"),
                    );
                } catch (e) {
                  u.fnSetError(!0),
                    u.fnSetStrError(
                      e instanceof Error
                        ? e.message
                        : S.Z.Localize("#Error_ErrorCommunicatingWithNetwork"),
                    );
                }
              },
              children: [
                (0, r.jsx)("br", {}),
                (0, r.jsxs)(o.az, {
                  paddingTop: "4",
                  children: [
                    (0, r.jsx)(s.EY, {
                      size: "4",
                      children: x.g.Localize("#FreeOnDemand_Radio"),
                    }),
                    (0, r.jsx)(o.az, {
                      padding: "4",
                      background: "greyneutral-6",
                      radius: "sm",
                      children: (0, r.jsx)(h, {
                        value: c,
                        options: [g.k_FreeToPlay, g.k_Free],
                        getOptionLabel: (e) =>
                          e == g.k_Free
                            ? x.g.Localize("#FreeOnDemand_Radio_Free")
                            : x.g.Localize("#FreeOnDemand_Radio_FreeToPlay"),
                        onValueChange: l,
                      }),
                    }),
                  ],
                }),
              ],
            });
      }
      function k(e) {
        const { closeModal: n } = e,
          t = `${_.TS.SUPPORT_BASE_URL}wizard/HelpWithPublishing?issueid=915`;
        return (0, r.jsxs)(m.KG, {
          strTitle: x.g.Localize("#FreeOnDemand_Title"),
          strDescription: x.g.Localize("#FreeOnDemand_Desc_NotPermitted"),
          closeModal: n,
          children: [
            (0, r.jsx)("br", {}),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("a", {
              href: t,
              target: "_blank",
              rel: "noreferrer",
              children: t,
            }),
          ],
        });
      }
      function j() {
        const [e] = (0, a.useState)(
          (0, f.Tc)("bCanSetFree", "application_config"),
        );
        return e;
      }
    },
    82314: (e, n, t) => {
      "use strict";
      t.d(n, { e: () => x, x: () => f });
      var r = t(7850),
        i = t(61459),
        o = t(88267),
        s = t(48724),
        a = t(48174),
        c = t(42836),
        l = t(68488),
        d = t(12155),
        u = t(52038),
        h = t(31389),
        p = t.n(h),
        g = t(90626),
        P = t(47184),
        m = t(53965),
        b = t(32754);
      function f(e) {
        const n = (0, r.jsx)("button", {
          className: p().PriceGuidelinesPicker,
          children: (0, r.jsx)(d.GB9, {}),
        });
        return (0, r.jsx)(_, { menuTarget: n, ...e });
      }
      function x(e) {
        const { strButton: n, strTooltip: t } = e,
          i = (0, r.jsxs)(m.$, {
            onClick: () => {},
            children: [
              (0, r.jsx)(b.Gq, {
                toolTipContent: t,
                children: (0, r.jsx)("span", { children: n }),
              }),
              (0, r.jsx)("div", {
                className: (0, u.A)(
                  p().SelectionIndicator,
                  "DialogDropDown_Arrow",
                ),
                children: (0, r.jsx)(d.GB9, {}),
              }),
            ],
          });
        return (0, r.jsx)(_, { menuTarget: i, ...e });
      }
      function _(e) {
        const { menuTarget: n } = e,
          t = g.useRef(null);
        return (0, r.jsx)(s.n, {
          menuTarget: n,
          direction: "down",
          interactionMode: l.k$,
          ref: t,
          children: (0, r.jsx)(D, { onSelect: () => t.current?.close(), ...e }),
        });
      }
      function D(e) {
        const {
            fnGetUSDPriceInCents: n,
            fnOnUpdate: t,
            strDescription: s,
            bCanSetToFree: l,
            nPackageID: d,
            onSelect: h,
            appids: g,
          } = e,
          m = (0, a.cT)(),
          b = n();
        if (!m) return null;
        const f = m.GetUSDPricePointsInCents();
        return (0, r.jsxs)("div", {
          className: p().GuidelinesPanel,
          children: [
            (0, r.jsx)("div", {
              className: p().GuidelinesDescription,
              children: s || P.g.Localize("#PricingGuideline_Default"),
            }),
            (0, r.jsxs)("div", {
              className: p().GuidelinesGrid,
              children: [
                void 0 !== l &&
                  (0, r.jsx)(
                    "div",
                    {
                      className: p().GridElement,
                      children: (0, r.jsx)(c.K, {
                        nPackageID: d,
                        strButtonOverride: P.g.Localize(
                          "#FreeOnDemand_InlineOption",
                        ),
                        appids: g,
                      }),
                    },
                    "settofree",
                  ),
                f.map((e) =>
                  (0, r.jsx)(
                    "button",
                    {
                      onClick: () => {
                        h(), t(e);
                      },
                      className: (0, u.A)({
                        [p().GridElement]: !0,
                        [p().CurrentPrice]: b == e,
                      }),
                      children: (0, i.x)(e, o.CS),
                    },
                    e,
                  ),
                ),
              ],
            }),
          ],
        });
      }
    },
    47184: (e, n, t) => {
      "use strict";
      t.d(n, { g: () => o });
      var r = t(13843);
      const i = {};
      (i.arabic = () => t.e(6873).then(t.t.bind(t, 46873, 19))),
        (i.brazilian = () => t.e(1365).then(t.t.bind(t, 1365, 19))),
        (i.bulgarian = () => t.e(3966).then(t.t.bind(t, 83966, 19))),
        (i.czech = () => t.e(1360).then(t.t.bind(t, 51360, 19))),
        (i.danish = () => t.e(8292).then(t.t.bind(t, 98292, 19))),
        (i.dutch = () => t.e(4993).then(t.t.bind(t, 44993, 19))),
        (i.english = () => t.e(3703).then(t.t.bind(t, 3703, 19))),
        (i.finnish = () => t.e(6376).then(t.t.bind(t, 86376, 19))),
        (i.french = () => t.e(7325).then(t.t.bind(t, 67325, 19))),
        (i.german = () => t.e(9263).then(t.t.bind(t, 69263, 19))),
        (i.greek = () => t.e(4399).then(t.t.bind(t, 14399, 19))),
        (i.hungarian = () => t.e(1706).then(t.t.bind(t, 91706, 19))),
        (i.indonesian = () => t.e(9341).then(t.t.bind(t, 69341, 19))),
        (i.italian = () => t.e(7511).then(t.t.bind(t, 97511, 19))),
        (i.japanese = () => t.e(330).then(t.t.bind(t, 40330, 19))),
        (i.koreana = () => t.e(6252).then(t.t.bind(t, 96252, 19))),
        (i.latam = () => t.e(204).then(t.t.bind(t, 90204, 19))),
        (i.norwegian = () => t.e(839).then(t.t.bind(t, 40839, 19))),
        (i.polish = () => t.e(8816).then(t.t.bind(t, 78816, 19))),
        (i.portuguese = () => t.e(8160).then(t.t.bind(t, 98160, 19))),
        (i.romanian = () => t.e(3546).then(t.t.bind(t, 73546, 19))),
        (i.russian = () => t.e(4302).then(t.t.bind(t, 84302, 19))),
        (i.schinese = () => t.e(6461).then(t.t.bind(t, 46461, 19))),
        (i.spanish = () => t.e(8167).then(t.t.bind(t, 18167, 19))),
        (i.swedish = () => t.e(2438).then(t.t.bind(t, 22438, 19))),
        (i.tchinese = () => t.e(6006).then(t.t.bind(t, 46006, 19))),
        (i.thai = () => t.e(6727).then(t.t.bind(t, 96727, 19))),
        (i.turkish = () => t.e(1639).then(t.t.bind(t, 51639, 19))),
        (i.ukrainian = () => t.e(4354).then(t.t.bind(t, 21973, 19))),
        (i.vietnamese = () => t.e(3946).then(t.t.bind(t, 53946, 19)));
      const o = (0, r.l)(async function (e) {
        if (i[e]) return i[e]();
      });
    },
    68488: (e, n, t) => {
      "use strict";
      t.d(n, { k$: () => c, AV: () => l, aJ: () => a, Yz: () => d });
      t(7850);
      var r = t(91934),
        i = (t(64238), t(90626)),
        o = t(56011),
        s = t(65697);
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (await t.e(8433).then(t.bind(t, 8433))).apply();
        }
      })();
      const a = 0,
        c = 1,
        l = 2;
      function d(e) {
        const {
            direction: n,
            ignoreHorizontal: t,
            ignoreVertical: d,
            dismissOnClick: u,
            interactionMode: h = a,
          } = e,
          p = (0, i.useRef)(null),
          g = (0, i.useRef)(!1),
          P = (0, i.useRef)(!1),
          m = (0, i.useRef)(null),
          [b, f] = (0, i.useState)(!1),
          [x, _] = (0, i.useMemo)(
            () =>
              (function (e) {
                const [n, t] = (0, r.x)(e, "-");
                return "left" === n || "right" === n ? [void 0, n] : [n, t];
              })(n),
            [n],
          ),
          D = (0, i.useCallback)(() => {
            if (!m.current || !p.current) return;
            const e = m.current.getBoundingClientRect(),
              n = p.current.getBoundingClientRect();
            let r = _;
            const i = m.current.matches(":dir(rtl)");
            i && ("left" === _ ? (r = "right") : "right" === _ && (r = "left")),
              p.current.style.setProperty("--parentWidth", `${e.width}px`),
              p.current.style.setProperty("--parentHeight", `${e.height}px`);
            let o = 0;
            if (!t) {
              if (n.width) {
                if ("left" === r) {
                  o = (x ? e.right : e.left) - n.width;
                }
                if ("right" === r) {
                  const t = x ? e.left : e.right;
                  o = document.documentElement.clientWidth - (t + n.width);
                }
                void 0 === r &&
                  (o = i
                    ? e.right - n.width
                    : document.documentElement.clientWidth -
                      (e.left + n.width)),
                  (o = Math.min(o, 0));
              }
              "left" === r
                ? x
                  ? ((p.current.style.left = "unset"),
                    (p.current.style.right = `${document.documentElement.clientWidth - e.right + o}px`))
                  : ((p.current.style.left = "unset"),
                    (p.current.style.right = `${document.documentElement.clientWidth - e.left + o}px`))
                : "right" === r
                  ? x
                    ? ((p.current.style.left = `${e.left + o}px`),
                      (p.current.style.right = "unset"))
                    : ((p.current.style.left = `${e.right + o}px`),
                      (p.current.style.right = "unset"))
                  : void 0 === r &&
                    (i
                      ? ((p.current.style.left = "unset"),
                        (p.current.style.right = `${document.documentElement.clientWidth - e.right + o}px`))
                      : ((p.current.style.left = `${e.left + o}px`),
                        (p.current.style.right = "unset")));
            }
            d ||
              ("down" === x
                ? ((p.current.style.top = `${e.bottom}px`),
                  (p.current.style.bottom = "unset"),
                  p.current.style.setProperty(
                    "--availableHeight",
                    document.documentElement.clientHeight - e.bottom + "px",
                  ))
                : "up" === x
                  ? ((p.current.style.top = "unset"),
                    (p.current.style.bottom =
                      document.documentElement.clientHeight - e.top + "px"),
                    p.current.style.setProperty(
                      "--availableHeight",
                      `${e.top}px`,
                    ))
                  : void 0 === x &&
                    ((p.current.style.top = `${e.top}px`),
                    (p.current.style.bottom = "unset"),
                    p.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.top + "px",
                    )));
          }, [_, t, d, x]),
          C = (0, i.useMemo)(() => {
            if (m.current) return (0, o._f)(m.current);
          }, [m.current]);
        (0, i.useEffect)(
          () =>
            b
              ? (p.current?.showPopover(),
                D(),
                C?.addEventListener("scroll", D),
                window.addEventListener("scroll", D),
                () => {
                  C?.removeEventListener("scroll", D),
                    window.addEventListener("scroll", D);
                })
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  p.current?.hidePopover(),
                () => {}),
          [b, D, C],
        );
        const v = (0, i.useCallback)(() => {
            D(), f(!0), (P.current = !0);
          }, [D]),
          S = (0, i.useCallback)(() => {
            (P.current = !1), g.current || f(!1);
          }, []),
          w = (0, i.useCallback)(() => {
            (g.current = !0), f(!0);
          }, []),
          T = (0, i.useCallback)(
            (e) => {
              p.current?.contains(e.target) && w();
            },
            [w],
          ),
          k = (0, i.useCallback)(
            (e) => {
              p.current?.contains(e.target) && w();
            },
            [w],
          ),
          j = (0, i.useCallback)(() => {
            (g.current = !1), P.current || f(!1);
          }, []),
          y = (0, i.useCallback)(
            (e) => {
              p.current?.contains(e.target) && j();
            },
            [j],
          ),
          N = (0, i.useCallback)(() => {
            j(), S();
          }, [j, S]),
          L = (0, i.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), b ? S() : v());
            },
            [S, v, b],
          ),
          I = (0, i.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                p.current?.contains(e.relatedTarget) ||
                S();
            },
            [S],
          ),
          E = (0, i.useCallback)(
            (e) => {
              h === l && v();
            },
            [h, v],
          ),
          O = (0, i.useCallback)(
            (e) => {
              const n =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                t = !e.relatedTarget && !g.current;
              (n || t) && (j(), f(!1));
            },
            [j],
          ),
          F = (0, i.useCallback)(
            (e) => {
              p.current?.contains(e.target) &&
                (b && u ? N() : g.current && v());
            },
            [N, u, b, v],
          ),
          M = (0, i.useCallback)(
            (e) => {
              p.current?.contains(e.target) &&
                ("Enter" === e.key && b && u ? N() : v(),
                "Escape" === e.key && b && (N(), e.stopPropagation()));
            },
            [N, u, b, v],
          );
        let R;
        h !== a || b
          ? h === c && (R = b ? S : v)
          : (R = (e) => {
              e.preventDefault(), v();
            });
        const z = {
            "aria-expanded": b,
            role: "button",
            onMouseEnter: h === a ? v : void 0,
            onMouseLeave: h === a ? S : void 0,
            onClick: R,
            ref: m,
            onKeyDown: L,
            onFocus: E,
            onBlur: I,
          },
          A = {
            popover: "manual",
            ref: p,
            onMouseEnter: k,
            onMouseLeave: y,
            onFocus: T,
            onBlur: O,
            onClick: F,
            onKeyDown: M,
            className: s.PopoverMenu,
          };
        return (
          (0, i.useImperativeHandle)(
            e.ref,
            () => ({ show: v, hide: S, close: N }),
            [v, S, N],
          ),
          { isShowingMenu: b, triggerProps: z, menuProps: A, closeMenu: N }
        );
      }
    },
  },
]);
