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
        mK: () => j,
        Gy: () => k,
        sh: () => D,
        T6: () => S,
        yk: () => w,
        Ur: () => v,
      });
      var r = t(7850),
        i = t(13578),
        o = t(48174),
        s = t(82314),
        a = t(17084),
        c = t(9554),
        l = t(90626),
        d = t(16676),
        u = t(12155),
        h = t(32754),
        p = t(52038),
        g = t(61859),
        P = t(47184),
        m = t(96434),
        f = t.n(m),
        b = t(14336);
      let x = null;
      function _(e) {
        const { packageID: n, strPriceKey: t } = e,
          {
            nPriceInCents: i,
            nPublishedPriceInCents: o,
            nProposedPriceInCents: s,
            nSuggestedPriceInCents: c,
            fnSetPrice: l,
          } = (0, a.xQ)(n, t),
          { nPriceInCents: d } = (0, a.xQ)(n, "USD"),
          u = !(!s || (o && s == o)),
          m = (0, a.d$)(n),
          _ = m && j(m.rtSubmitted),
          { data: D } = (0, b.js)(m?.submitterID),
          C = D ? D.m_strPlayerName : m?.submitterID;
        return (o || u || c) && x == n + t
          ? (0, r.jsxs)("div", {
              className: f().PricePopout,
              children: [
                !!o &&
                  (0, r.jsxs)(h.he, {
                    className: f().DetailRow,
                    direction: "left",
                    toolTipContent: (0, g.we)(
                      "#PricingDashboard_CurrentPriceOnStore_ttip",
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: f().DetailLabel,
                        children: (0, g.we)(
                          "#PricingDashboard_CurrentPriceOnStore",
                        ),
                      }),
                      (0, r.jsx)("div", {
                        className: f().DetailPrice,
                        children: (0, a.Wx)(o, t).join(""),
                      }),
                      (0, r.jsx)(h.he, {
                        className: (0, p.A)(
                          f().DetailButton,
                          o == i && f().Disabled,
                        ),
                        onClick: () => l(o),
                        bDisabled: o == i,
                        toolTipContent: (0, g.we)(
                          "#PricingDashboard_UseThisOldPrice_ttip",
                        ),
                        children: (0, g.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                u &&
                  (0, r.jsxs)(h.he, {
                    className: f().DetailRow,
                    direction: "left",
                    toolTipContent: (0, g.we)(
                      "#PricingDashboard_ProposedPrice_ttip",
                      C,
                      _,
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: f().DetailLabel,
                        children: (0, g.we)("#PricingDashboard_ProposedPrice"),
                      }),
                      (0, r.jsx)("div", {
                        className: f().DetailPrice,
                        children: (0, a.Wx)(s, t).join(""),
                      }),
                      (0, r.jsx)(h.he, {
                        className: (0, p.A)(
                          f().DetailButton,
                          s == i && f().Disabled,
                        ),
                        onClick: () => l(s),
                        bDisabled: s == i,
                        toolTipContent: (0, g.we)(
                          "#PricingDashboard_UseThisNewPrice_ttip",
                        ),
                        children: (0, g.we)(
                          "#PricingDashboard_UseThisPrice_Button",
                        ),
                      }),
                    ],
                  }),
                !!c &&
                  (0, r.jsxs)(h.he, {
                    className: f().DetailRow,
                    direction: "left",
                    toolTipContent: P.g.Localize(
                      "#PricingDashboard_Method_SuggestedPrice_ttip",
                      (0, a.Wx)(d, "USD").join(""),
                    ),
                    children: [
                      (0, r.jsx)("div", {
                        className: f().DetailLabel,
                        children: P.g.Localize(
                          "#PricingDashboard_Method_SuggestedPrice",
                        ),
                      }),
                      (0, r.jsx)("div", {
                        className: f().DetailPrice,
                        children: (0, a.Wx)(c, t).join(""),
                      }),
                      (0, r.jsx)(h.he, {
                        className: (0, p.A)(
                          f().DetailButton,
                          c == i && f().Disabled,
                        ),
                        onClick: () => l(c),
                        bDisabled: c == i,
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
            })
          : null;
      }
      function D(e) {
        const { cell: n, row: t } = e,
          o = t.original.packageID,
          s = n.getValue(),
          {
            nPriceInCents: u,
            nPublishedPriceInCents: h,
            nProposedPriceInCents: p,
            fnSetPrice: g,
          } = (0, a.xQ)(o, s),
          [P, m, b] = (0, a.Wx)(u, s),
          D = (0, a.Gs)(s),
          v = l.useRef(void 0),
          { strClassName: w } = T(o, s),
          j = "USD" == s,
          y = p ?? h,
          N = u != y;
        return (0, r.jsxs)("div", {
          ref: v,
          onKeyDown: c.nm,
          className: w,
          children: [
            N && (0, r.jsx)(k, { nPriceInCents: u, nSavedPriceInCents: y }),
            (0, r.jsx)("div", { className: f().PricePrefix, children: P && P }),
            (0, r.jsx)(i.n, {
              menuTarget: (0, r.jsx)("div", {
                className: f().EditablePrice,
                children: (0, r.jsx)(d.pd, {
                  value: m,
                  className: f().PriceInput,
                  onChange: (e) => {
                    const n = e.target.value.replace(/[^0-9]/g, "");
                    let t = Number(n || 0);
                    if (Number.isNaN(t)) return;
                    D.bWholeUnitsOnly && (t *= 100);
                    const r = 2147483647;
                    t > r && (t = r), g(t);
                  },
                  onFocus: () => {
                    x = o + s;
                  },
                }),
              }),
              direction: "up",
              interactionMode: 2,
              dismissOnClick: !0,
              renderWhenClosed: !1,
              children: (0, r.jsx)(_, { packageID: o, strPriceKey: s }),
            }),
            (0, r.jsx)("div", { className: f().PriceSuffix, children: b && b }),
            j &&
              (0, r.jsx)(C, {
                packageID: o,
                appids: t.original.appids,
                bCanSetToFree: t.original.bCanSetToFree,
              }),
            (0, r.jsx)(S, { packageID: o, strPriceKey: s }),
          ],
        });
      }
      function C(e) {
        const { packageID: n, appids: t, bCanSetToFree: i } = e,
          { fnApplyGuidelines: c } = (0, o.gC)((0, a.$i)());
        return (0, r.jsx)(s.x, {
          fnGetUSDPriceInCents: () => (0, a.FR)(n, "USD"),
          fnOnUpdate: (e) => c(n, e),
          strDescription: P.g.Localize(
            "#PricingDashboard_GuidelinesPickerDescription_New",
          ),
          nPackageID: n,
          appids: t,
          bCanSetToFree: i,
        });
      }
      function S(e) {
        const { packageID: n, strPriceKey: t } = e,
          { strPriceWarning: i, bBadPrice: o, bShowWarningIcon: s } = T(n, t);
        return s
          ? (0, r.jsx)(h.he, {
              className: f().PriceAlert,
              strTooltipClassname: f().HoverToolTip,
              toolTipContent: i,
              direction: "top",
              children: (0, r.jsx)(u.eTF, {
                color: o ? "rgb(194, 45, 0)" : "#e5af37",
              }),
            })
          : null;
      }
      const v = 2,
        w = 0.5;
      function T(e, n) {
        const {
            nPriceInCents: t,
            nPublishedPriceInCents: r,
            nProposedPriceInCents: i,
            nMinPriceInCents: o,
            nMaxPriceInCents: s,
            nMaxDiscountPercentage: c,
            nSuggestedPriceInCents: d,
          } = (0, a.xQ)(e, n),
          u = (0, a.d$)(e),
          h = "USD" == n,
          P = t != (i ?? r),
          m = t < o,
          b = !!s && t > s,
          x = !!d && t > d * v,
          _ = !!d && t < d * w,
          D = !!d && t < d && !!c,
          C = !!d && t == d && !!c,
          S =
            (b && (0, g.we)("#PricingDashboard_PriceIncreaseDisallowed")) ||
            (m &&
              (0, g.we)(
                "#PricingDashboard_PriceTooLow",
                (0, a.Wx)(o, n).join(""),
              )) ||
            (x &&
              (0, g.we)(
                "#PricingDashboard_PriceMuchHigherThanMethod",
                (0, a.Wx)(d, n).join(""),
              )) ||
            (x && !1) ||
            (_ &&
              (0, g.we)(
                "#PricingDashboard_PriceMuchLowerThanMethod",
                (0, a.Wx)(d, n).join(""),
              )) ||
            (_ && !1) ||
            (D &&
              (0, g.we)(
                "#PricingDashboard_PriceCheapAndLowerThanGuidelines",
                c,
              )) ||
            (C && (0, g.we)("#PricingDashboard_PriceCheap", c)),
          T = b || m,
          k = x || _,
          j = T || k || D,
          y = !(P || !i || (r && i == r)),
          N = 4 == u?.eState,
          E = (0, p.A)(
            f().PriceCell,
            h && f().USD,
            P && f().ChangedLocally,
            y && f().ProposedPrice,
            N && f().ApprovedCanPublish,
            j && f().WarningPrice,
            k && f().SevereWarningPrice,
            T && f().BadPrice,
          );
        return l.useMemo(
          () => ({
            strPriceWarning: S,
            strClassName: E,
            bBadPrice: T,
            bShowSevereWarning: k,
            bShowWarningIcon: j,
          }),
          [S, E, T, k, j],
        );
      }
      function k(e) {
        const { nPriceInCents: n, nSavedPriceInCents: t } = e;
        let i = null,
          o = null,
          s = null,
          a = null;
        if (t) {
          const e = Math.ceil((100 * (n - t)) / t),
            c = n > t;
          (s = c
            ? (0, g.we)("#PricingDashboard_PriceIncreaseBy", e + "%")
            : (0, g.we)("#PricingDashboard_PriceLowerBy", e + "%")),
            (a = (0, p.A)(f().PriceChange, c && f().PriceIncrease)),
            (o = (0, r.jsx)("div", {
              className: f().PriceChangeArrow,
              children: (0, r.jsx)(u.i3G, { angle: c ? 0 : 180 }),
            })),
            (i = e + "%");
        } else
          (i = (0, g.we)("#PricingDashboard_PriceIsNew_Short")),
            (a = (0, p.A)(f().NewPrice));
        return (0, r.jsxs)(h.he, {
          className: a,
          strTooltipClassname: f().HoverToolTip,
          toolTipContent: s,
          direction: "top",
          children: [o, i],
        });
      }
      function j(e) {
        return new Date(1e3 * e).toLocaleString(g.pf.GetPreferredLocales(), {
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
      t.d(n, { Ae: () => u, EY: () => l, U6: () => d });
      var r = t(7850),
        i = t(41324),
        o = t(75659),
        s = t(64238),
        a = t.n(s),
        c = t(65274);
      function l(e) {
        const { as: n = "span", ref: t, className: o, ...s } = e,
          l = n;
        return (0, r.jsx)(l, {
          ref: t,
          ...(0, i.mz)({ ...s, className: a()(c.Text, o) }, u),
        });
      }
      const d = [
          {
            prop: "weight",
            responsive: !0,
            className: c.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: c.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            cssProperty: (e, n) => [
              "--text-color",
              (0, i.To)(e, n.contrast ?? "body"),
            ],
          },
          {
            prop: "contrast",
            cssProperty: (e, n) => [
              "--text-color",
              (0, i.To)(n.color ?? "text-body", e),
            ],
          },
          { prop: "truncate", className: c.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: c.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: c.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        u = [
          ...d,
          ...o.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => c[`TextSize-${e}`],
          },
        ];
    },
    13578: (e, n, t) => {
      "use strict";
      t.d(n, { n: () => g });
      var r = t(7850),
        i = t(91934),
        o = t(64238),
        s = t.n(o),
        a = t(90626),
        c = t(56011),
        l = t(65697);
      function d(e) {
        const {
            direction: n,
            ignoreHorizontal: t,
            ignoreVertical: r,
            dismissOnClick: o,
            interactionMode: s = 0,
          } = e,
          d = (0, a.useRef)(null),
          u = (0, a.useRef)(!1),
          h = (0, a.useRef)(!1),
          p = (0, a.useRef)(null),
          [g, P] = (0, a.useState)(!1),
          [m, f] = (0, a.useMemo)(
            () =>
              (function (e) {
                const [n, t] = (0, i.x)(e, "-");
                return "left" === n || "right" === n ? [void 0, n] : [n, t];
              })(n),
            [n],
          ),
          b = (0, a.useCallback)(() => {
            if (!p.current || !d.current) return;
            const e = p.current.getBoundingClientRect(),
              n = d.current.getBoundingClientRect();
            let i = f;
            const o = p.current.matches(":dir(rtl)");
            o && ("left" === f ? (i = "right") : "right" === f && (i = "left")),
              d.current.style.setProperty("--parentWidth", `${e.width}px`),
              d.current.style.setProperty("--parentHeight", `${e.height}px`);
            let s = 0;
            if (!t) {
              if (n.width) {
                if ("left" === i) {
                  s = (m ? e.right : e.left) - n.width;
                }
                if ("right" === i) {
                  const t = m ? e.left : e.right;
                  s = document.documentElement.clientWidth - (t + n.width);
                }
                void 0 === i &&
                  (s = o
                    ? e.right - n.width
                    : document.documentElement.clientWidth -
                      (e.left + n.width)),
                  (s = Math.min(s, 0));
              }
              "left" === i
                ? m
                  ? ((d.current.style.left = "unset"),
                    (d.current.style.right = `${document.documentElement.clientWidth - e.right + s}px`))
                  : ((d.current.style.left = "unset"),
                    (d.current.style.right = `${document.documentElement.clientWidth - e.left + s}px`))
                : "right" === i
                  ? m
                    ? ((d.current.style.left = `${e.left + s}px`),
                      (d.current.style.right = "unset"))
                    : ((d.current.style.left = `${e.right + s}px`),
                      (d.current.style.right = "unset"))
                  : void 0 === i &&
                    (o
                      ? ((d.current.style.left = "unset"),
                        (d.current.style.right = `${document.documentElement.clientWidth - e.right + s}px`))
                      : ((d.current.style.left = `${e.left + s}px`),
                        (d.current.style.right = "unset")));
            }
            r ||
              ("down" === m
                ? ((d.current.style.top = `${e.bottom}px`),
                  (d.current.style.bottom = "unset"),
                  d.current.style.setProperty(
                    "--availableHeight",
                    document.documentElement.clientHeight - e.bottom + "px",
                  ))
                : "up" === m
                  ? ((d.current.style.top = "unset"),
                    (d.current.style.bottom =
                      document.documentElement.clientHeight - e.top + "px"),
                    d.current.style.setProperty(
                      "--availableHeight",
                      `${e.top}px`,
                    ))
                  : void 0 === m &&
                    ((d.current.style.top = `${e.top}px`),
                    (d.current.style.bottom = "unset"),
                    d.current.style.setProperty(
                      "--availableHeight",
                      document.documentElement.clientHeight - e.top + "px",
                    )));
          }, [f, t, r, m]),
          x = (0, a.useMemo)(() => {
            if (p.current) return (0, c._f)(p.current);
          }, [p.current]);
        (0, a.useEffect)(
          () =>
            g
              ? (d.current?.showPopover(),
                b(),
                x?.addEventListener("scroll", b),
                window.addEventListener("scroll", b),
                () => {
                  x?.removeEventListener("scroll", b),
                    window.addEventListener("scroll", b);
                })
              : ("true" !=
                  window.sessionStorage.getItem("DEBUG_StickyContextMenus") &&
                  d.current?.hidePopover(),
                () => {}),
          [g, b, x],
        );
        const _ = (0, a.useCallback)(() => {
            b(), P(!0), (h.current = !0);
          }, [b]),
          D = (0, a.useCallback)(() => {
            (h.current = !1), u.current || P(!1);
          }, []),
          C = (0, a.useCallback)(() => {
            (u.current = !0), P(!0);
          }, []),
          S = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) && C();
            },
            [C],
          ),
          v = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) && C();
            },
            [C],
          ),
          w = (0, a.useCallback)(() => {
            (u.current = !1), h.current || P(!1);
          }, []),
          T = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) && w();
            },
            [w],
          ),
          k = (0, a.useCallback)(() => {
            w(), D();
          }, [w, D]),
          j = (0, a.useCallback)(
            (e) => {
              "Enter" === e.key && (e.preventDefault(), g ? D() : _());
            },
            [D, _, g],
          ),
          y = (0, a.useCallback)(
            (e) => {
              e.currentTarget.contains(e.relatedTarget) ||
                d.current?.contains(e.relatedTarget) ||
                D();
            },
            [D],
          ),
          N = (0, a.useCallback)(
            (e) => {
              2 === s && _();
            },
            [s, _],
          ),
          E = (0, a.useCallback)(
            (e) => {
              const n =
                  e.relatedTarget && !e.currentTarget.contains(e.relatedTarget),
                t = !e.relatedTarget && !u.current;
              (n || t) && (w(), P(!1));
            },
            [w],
          ),
          I = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) &&
                (g && o ? k() : u.current && _());
            },
            [k, o, g, _],
          ),
          L = (0, a.useCallback)(
            (e) => {
              d.current?.contains(e.target) &&
                ("Enter" === e.key && g && o ? k() : _(),
                "Escape" === e.key && g && (k(), e.stopPropagation()));
            },
            [k, o, g, _],
          );
        let O;
        0 !== s || g
          ? 1 === s && (O = g ? D : _)
          : (O = (e) => {
              e.preventDefault(), _();
            });
        const F = {
            "aria-expanded": g,
            role: "button",
            onMouseEnter: 0 === s ? _ : void 0,
            onMouseLeave: 0 === s ? D : void 0,
            onClick: O,
            ref: p,
            onKeyDown: j,
            onFocus: N,
            onBlur: y,
          },
          R = {
            popover: "manual",
            ref: d,
            onMouseEnter: v,
            onMouseLeave: T,
            onFocus: S,
            onBlur: E,
            onClick: I,
            onKeyDown: L,
            className: l.PopoverMenu,
          };
        return (
          (0, a.useImperativeHandle)(
            e.ref,
            () => ({ show: _, hide: D, close: k }),
            [_, D, k],
          ),
          { isShowingMenu: g, triggerProps: F, menuProps: R, closeMenu: k }
        );
      }
      !(async function () {
        if (
          "undefined" == typeof HTMLElement ||
          "object" != typeof HTMLElement.prototype ||
          !("popover" in HTMLElement.prototype)
        ) {
          (await t.e(8433).then(t.bind(t, 8433))).apply();
        }
      })();
      var u = t(7445),
        h = t(76217);
      function p(e, n) {
        return (t) => {
          e?.(t), n?.(t);
        };
      }
      function g(e) {
        const {
            direction: n,
            interactionMode: t = 0,
            ignoreHorizontal: i,
            ignoreVertical: o,
            dismissOnClick: c,
            menuTarget: l,
            className: g,
            children: P,
            renderWhenClosed: m = !0,
            ...f
          } = e,
          {
            isShowingMenu: b,
            triggerProps: x,
            menuProps: _,
            closeMenu: D,
          } = d(e),
          C = a.useRef(null),
          S = a.useRef(null);
        return (
          a.useEffect(() => {
            b
              ? S.current?.TakeFocus()
              : S.current?.BFocusWithin() && C.current?.TakeFocus();
          }, [b]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              a.cloneElement(l, {
                ...x,
                onMouseEnter: p(l.props.onMouseEnter, x.onMouseEnter),
                onMouseLeave: p(l.props.onMouseLeave, x.onMouseLeave),
                navRef: C,
              }),
              (0, r.jsx)(h.Z, {
                ...f,
                ..._,
                className: s()(_.className, g),
                navRef: S,
                onCancel: D,
                onFocusWithin: (e) => !e && D(),
                childFocusDisabled: !b,
                children: (0, r.jsx)(u.q, { children: (m || b) && P }),
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
                f = (0, d.Q)(i, m, P);
              return (0, r.jsx)(p, { value: g, children: f });
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
                f = () => {
                  m || h(n);
                },
                b = {
                  role: "radio",
                  "aria-checked": m,
                  "data-radio-id": c,
                  onClick: f,
                  onKeyDown: (e) => {
                    switch (e.key) {
                      case " ":
                        f(), e.preventDefault(), e.stopPropagation();
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
              return (0, d.Q)(o, x, b, { bSelected: m });
            },
          },
        ),
        p = (0, a.createContext)(null);
      var g,
        P = t(64753),
        m = t(9154),
        f = t(32754),
        b = t(24484),
        x = t(47184),
        _ = t(30470);
      !(function (e) {
        (e.k_FreeToPlay = "freetoplay"), (e.k_Free = "free");
      })(g || (g = {}));
      var D = t(8527),
        C = t(51614);
      var S = t(71298),
        v = t(47911);
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
            (0, r.jsx)(f.Gq, {
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
                    (n.set("sessionid", (0, b.KC)()),
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
                    (e.set("sessionid", (0, b.KC)()),
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
          u = (0, S.vs)();
        return u.bLoading
          ? (0, r.jsx)(S.Hh, {
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
                        : v.Z.Localize("#Error_ErrorCommunicatingWithNetwork"),
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
          (0, b.Tc)("bCanSetFree", "application_config"),
        );
        return e;
      }
    },
    82314: (e, n, t) => {
      "use strict";
      t.d(n, { e: () => b, x: () => f });
      var r = t(7850),
        i = t(61459),
        o = t(88267),
        s = t(13578),
        a = t(48174),
        c = t(42836),
        l = t(12155),
        d = t(52038),
        u = t(31389),
        h = t.n(u),
        p = t(90626),
        g = t(47184),
        P = t(53965),
        m = t(32754);
      function f(e) {
        const n = (0, r.jsx)("button", {
          className: h().PriceGuidelinesPicker,
          children: (0, r.jsx)(l.GB9, {}),
        });
        return (0, r.jsx)(x, { menuTarget: n, ...e });
      }
      function b(e) {
        const { strButton: n, strTooltip: t } = e,
          i = (0, r.jsxs)(P.$, {
            onClick: () => {},
            children: [
              (0, r.jsx)(m.Gq, {
                toolTipContent: t,
                children: (0, r.jsx)("span", { children: n }),
              }),
              (0, r.jsx)("div", {
                className: (0, d.A)(
                  h().SelectionIndicator,
                  "DialogDropDown_Arrow",
                ),
                children: (0, r.jsx)(l.GB9, {}),
              }),
            ],
          });
        return (0, r.jsx)(x, { menuTarget: i, ...e });
      }
      function x(e) {
        const { menuTarget: n } = e,
          t = p.useRef(null);
        return (0, r.jsx)(s.n, {
          menuTarget: n,
          direction: "down",
          interactionMode: 1,
          ref: t,
          children: (0, r.jsx)(_, { onSelect: () => t.current?.close(), ...e }),
        });
      }
      function _(e) {
        const {
            fnGetUSDPriceInCents: n,
            fnOnUpdate: t,
            strDescription: s,
            bCanSetToFree: l,
            nPackageID: u,
            onSelect: p,
            appids: P,
          } = e,
          m = (0, a.cT)(),
          f = n();
        if (!m) return null;
        const b = m.GetUSDPricePointsInCents();
        return (0, r.jsxs)("div", {
          className: h().GuidelinesPanel,
          children: [
            (0, r.jsx)("div", {
              className: h().GuidelinesDescription,
              children: s || g.g.Localize("#PricingGuideline_Default"),
            }),
            (0, r.jsxs)("div", {
              className: h().GuidelinesGrid,
              children: [
                void 0 !== l &&
                  (0, r.jsx)(
                    "div",
                    {
                      className: h().GridElement,
                      children: (0, r.jsx)(c.K, {
                        nPackageID: u,
                        strButtonOverride: g.g.Localize(
                          "#FreeOnDemand_InlineOption",
                        ),
                        appids: P,
                      }),
                    },
                    "settofree",
                  ),
                b.map((e) =>
                  (0, r.jsx)(
                    "button",
                    {
                      onClick: () => {
                        p(), t(e);
                      },
                      className: (0, d.A)({
                        [h().GridElement]: !0,
                        [h().CurrentPrice]: f == e,
                      }),
                      children: (0, i.x)(e, o.AI.k_ECurrencyCodeUSD),
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
      var r = t(48891);
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
  },
]);
