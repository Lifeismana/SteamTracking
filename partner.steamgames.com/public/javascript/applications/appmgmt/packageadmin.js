/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [8590],
    {
      161: (D, K, n) => {
        "use strict";
        n.r(K), n.d(K, { default: () => nt });
        var t = n(7850),
          R = n(90626),
          $ = n(92757);
        let X = { PriceEdit: (s) => `/packages/pricing/${s}` };
        var J = n(90783),
          Z = n(96135),
          T = n(68031),
          f = n(15252),
          F = n(79611),
          sn = n(16666),
          u = n(32),
          S = n(34104),
          L = n(93357),
          E = n(61075),
          O = n(20929),
          a = n(58033),
          U = n(31275);
        const i = {};
        (i.arabic = () => n.e(3347).then(n.t.bind(n, 33347, 19))),
          (i.brazilian = () => n.e(3183).then(n.t.bind(n, 13183, 19))),
          (i.bulgarian = () => n.e(5400).then(n.t.bind(n, 55400, 19))),
          (i.czech = () => n.e(8942).then(n.t.bind(n, 48942, 19))),
          (i.danish = () => n.e(6306).then(n.t.bind(n, 16306, 19))),
          (i.dutch = () => n.e(2199).then(n.t.bind(n, 22199, 19))),
          (i.english = () => n.e(2781).then(n.t.bind(n, 52781, 19))),
          (i.finnish = () => n.e(2746).then(n.t.bind(n, 72746, 19))),
          (i.french = () => n.e(9427).then(n.t.bind(n, 59427, 19))),
          (i.german = () => n.e(5585).then(n.t.bind(n, 35585, 19))),
          (i.greek = () => n.e(8157).then(n.t.bind(n, 68157, 19))),
          (i.hungarian = () => n.e(6204).then(n.t.bind(n, 36204, 19))),
          (i.indonesian = () => n.e(367).then(n.t.bind(n, 90367, 19))),
          (i.italian = () => n.e(2061).then(n.t.bind(n, 2061, 19))),
          (i.japanese = () => n.e(4124).then(n.t.bind(n, 64124, 19))),
          (i.koreana = () => n.e(6614).then(n.t.bind(n, 76614, 19))),
          (i.latam = () => n.e(8542).then(n.t.bind(n, 98542, 19))),
          (i.malay = () => n.e(4797).then(n.t.bind(n, 64797, 19))),
          (i.norwegian = () => n.e(7841).then(n.t.bind(n, 27841, 19))),
          (i.polish = () => n.e(9894).then(n.t.bind(n, 19894, 19))),
          (i.portuguese = () => n.e(7806).then(n.t.bind(n, 97806, 19))),
          (i.romanian = () => n.e(2224).then(n.t.bind(n, 22224, 19))),
          (i.russian = () => n.e(5544).then(n.t.bind(n, 35544, 19))),
          (i.schinese = () => n.e(8875).then(n.t.bind(n, 58875, 19))),
          (i.spanish = () => n.e(1661).then(n.t.bind(n, 91661, 19))),
          (i.swedish = () => n.e(4140).then(n.t.bind(n, 4140, 19))),
          (i.tchinese = () => n.e(7208).then(n.t.bind(n, 87208, 19))),
          (i.thai = () => n.e(4925).then(n.t.bind(n, 54925, 19))),
          (i.turkish = () => n.e(4885).then(n.t.bind(n, 64885, 19))),
          (i.ukrainian = () => n.e(9271).then(n.t.bind(n, 89271, 19))),
          (i.vietnamese = () => n.e(5404).then(n.t.bind(n, 35404, 19)));
        async function hn(s) {
          if (i[s]) return i[s]();
        }
        var A = n(33220);
        const en = (0, U.l)(hn);
        function Pn(s) {
          return en.Localize(`#CurrencyCodeDescription_${(0, A.M1)(s)}`);
        }
        var ln = n(11243);
        function p(s) {
          return Pn(s.getValue());
        }
        function Cn(s) {
          const o = s.getValue(),
            l = (0, A.mG)(o),
            g = en.Localize(`#Region_Pricing_Tooltip_${l}`);
          return (0, t.jsxs)("span", {
            children: [l, " ", (0, t.jsx)(ln.o, { tooltip: g })],
          });
        }
        var vn = n(83465),
          xn = n(32232),
          H = n.n(xn),
          b = n(64868),
          mn = n(64238),
          N = n.n(mn),
          fn = n(31886),
          cn = n(90247),
          k = n(13401),
          Sn = n(93621),
          d = n(37424),
          yn = n(71742);
        function jn(s, o, l) {
          const g = (0, k.Bb)(),
            P = (0, Sn.T)();
          return (0, R.useMemo)(() => {
            let C = new Array(),
              r = new Array(),
              v = new Array();
            if (s) {
              const x = (0, A.pd)(S.CS).toUpperCase(),
                j = (0, d.Dl)(o, x) || (0, d.Oc)(o, x) || (0, d.mv)(o, x);
              for (let c = S.CS; c < S.mh; ++c) {
                if (!s.BIsSupportCurrencyAndOrRegion(c)) continue;
                const h = (0, A.pd)(c).toUpperCase(),
                  y = (0, d.mv)(o, h),
                  B = (0, d.Oc)(o, h),
                  Y = (0, d.Dl)(o, h),
                  on = s.GetScaledRecommendedPrice(j, c, void 0, g).price;
                C.push({
                  packageID: o,
                  strPriceKey: h,
                  eCurrencyCode: c,
                  eRegionCode: void 0,
                  strCountryOverride: void 0,
                  nPublishedPrice: y,
                  nProposedPrice: B,
                  nLocalPrice: Y,
                  nSuggestedPrice: on,
                  bCanSetToFree: !!P,
                  appids: l,
                });
              }
              for (let c = cn._S; c < cn.Hc; ++c) {
                if (!s.BIsSupportCurrencyAndOrRegion(S.CS, c)) continue;
                const h = (0, A.pd)(S.CS, c).toUpperCase(),
                  y = (0, d.mv)(o, h),
                  B = (0, d.Oc)(o, h),
                  Y = (0, d.Dl)(o, h),
                  on = s.GetScaledRecommendedPrice(j, S.CS, c, g).price;
                r.push({
                  packageID: o,
                  strPriceKey: h,
                  eCurrencyCode: S.CS,
                  eRegionCode: c,
                  strCountryOverride: void 0,
                  nPublishedPrice: y,
                  nProposedPrice: B,
                  nLocalPrice: Y,
                  nSuggestedPrice: on,
                  bCanSetToFree: !1,
                  appids: l,
                });
              }
              const z = (0, d.Y2)(o);
              z.length > 0 &&
                z.forEach((c) => {
                  const { eCurrencyCode: h, strCountryCode: y } = (0, A.gM)(c),
                    B = (0, A.rt)(y);
                  (0, yn.wT)(
                    h == B,
                    `Unexpected currency ${h} for country ${y} when expecting ${B} `,
                  );
                  const Y = (0, d.Oc)(o, c);
                  v.push({
                    packageID: o,
                    strPriceKey: c,
                    eCurrencyCode: h,
                    eRegionCode: void 0,
                    strCountryOverride: y,
                    nPublishedPrice: (0, d.oL)(o, c),
                    nProposedPrice: Y,
                    nLocalPrice: (0, d.Dl)(o, c),
                    nSuggestedPrice: void 0,
                    bCanSetToFree: !1,
                    appids: l,
                  });
                });
            }
            return {
              rgCurrencyRows: C,
              rgRegionRows: r,
              rgCountryOverrideRows: v,
            };
          }, [s, o, P, g, l]);
        }
        function tt(s, o) {
          const l = useActiveConversionMethod(),
            g =
              ECurrencyCodeToProposedCurrencyCode(
                k_ECurrencyCodeUSD,
              ).toUpperCase(),
            P = usePriceInCurrency(o, g).nPriceInCents;
          let C = !1;
          if (s && P > 0) {
            for (let r = k_ECurrencyCodeGBP; r < k_ECurrencyCodeMax; ++r) {
              if (!s.BIsSupportCurrencyAndOrRegion(r)) continue;
              const v = ECurrencyCodeToProposedCurrencyCode(r).toUpperCase(),
                x = PricingStore_GetPublishedPrice(o, v),
                j = PricingStore_GetProposedPrice(o, v),
                z = PricingStore_GetLocalOverridePrice(o, v),
                c = s.GetScaledRecommendedPrice(P, r, void 0, l).price;
              C ||= c != (z ?? j ?? x);
            }
            for (let r = k_ERegionCodeCIS; r < k_ERegionCodeMax; ++r) {
              if (!s.BIsSupportCurrencyAndOrRegion(k_ECurrencyCodeUSD, r))
                continue;
              const v = ECurrencyCodeToProposedCurrencyCode(
                  k_ECurrencyCodeUSD,
                  r,
                ).toUpperCase(),
                x = PricingStore_GetPublishedPrice(o, v),
                j = PricingStore_GetProposedPrice(o, v),
                z = PricingStore_GetLocalOverridePrice(o, v),
                c = s.GetScaledRecommendedPrice(
                  P,
                  k_ECurrencyCodeUSD,
                  r,
                  l,
                ).price;
              C ||= c != (z ?? j ?? x);
            }
          }
          return C;
        }
        var Rn = n(25792),
          w = n(2801),
          m = n(18210),
          zn = n(95146),
          Dn = n(40396),
          un = n(67829),
          Ln = n(31069),
          En = n(96434),
          q = n.n(En),
          _ = n(81246),
          dn = n(78779),
          W = n(60351),
          nn = n(86336),
          V = n(72609);
        function Tn(s) {
          const o = `${V.TS.PARTNER_BASE_URL}doc/finance/taxfaq`;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(W.az, {
                paddingBottom: "4",
                children: [
                  (0, t.jsx)(f.EY, {
                    as: "p",
                    size: "4",
                    color: "text-body",
                    contrast: "subtitle",
                    children: a.g.Localize("#SinglePricingPackage_Intro_1"),
                  }),
                  (0, t.jsx)(f.EY, {
                    as: "p",
                    size: "4",
                    color: "text-body",
                    contrast: "subtitle",
                    children: a.g.Localize("#SinglePricingPackage_Intro_2"),
                  }),
                  (0, t.jsx)(f.EY, {
                    size: "4",
                    color: "text-body",
                    contrast: "subtitle",
                    children: (0, t.jsxs)("ol", {
                      children: [
                        (0, t.jsx)("li", {
                          children: a.g.Localize(
                            "#SinglePricingPackage_Intro_2a",
                          ),
                        }),
                        (0, t.jsx)("li", {
                          children: a.g.Localize(
                            "#SinglePricingPackage_Intro_2b",
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(W.az, {
                paddingBottom: "4",
                children: (0, t.jsx)(f.EY, {
                  children: a.g.LocalizeReact(
                    "#SinglePricingPackage_Desc_2",
                    (0, t.jsx)(nn.Y, {
                      href: o,
                      children: a.g.LocalizeReact(
                        "#SinglePricingPackage_Desc_2_Link",
                      ),
                    }),
                  ),
                }),
              }),
              (0, t.jsx)(W.az, {
                children: (0, t.jsx)(f.EY, {
                  children: a.g.Localize("#SinglePricingPackage_Desc_3"),
                }),
              }),
            ],
          });
        }
        const e = {};
        (e.arabic = () => n.e(7062).then(n.t.bind(n, 67062, 19))),
          (e.brazilian = () => n.e(6144).then(n.t.bind(n, 56144, 19))),
          (e.bulgarian = () => n.e(9311).then(n.t.bind(n, 79311, 19))),
          (e.czech = () => n.e(949).then(n.t.bind(n, 20949, 19))),
          (e.danish = () => n.e(8935).then(n.t.bind(n, 98935, 19))),
          (e.dutch = () => n.e(8064).then(n.t.bind(n, 78064, 19))),
          (e.english = () => n.e(7110).then(n.t.bind(n, 17110, 19))),
          (e.finnish = () => n.e(2581).then(n.t.bind(n, 2581, 19))),
          (e.french = () => n.e(9078).then(n.t.bind(n, 39078, 19))),
          (e.german = () => n.e(6840).then(n.t.bind(n, 6840, 19))),
          (e.greek = () => n.e(9242).then(n.t.bind(n, 69242, 19))),
          (e.hungarian = () => n.e(3595).then(n.t.bind(n, 13595, 19))),
          (e.indonesian = () => n.e(2666).then(n.t.bind(n, 52666, 19))),
          (e.italian = () => n.e(9814).then(n.t.bind(n, 69814, 19))),
          (e.japanese = () => n.e(2329).then(n.t.bind(n, 22329, 19))),
          (e.koreana = () => n.e(33).then(n.t.bind(n, 60033, 19))),
          (e.latam = () => n.e(2313).then(n.t.bind(n, 32313, 19))),
          (e.malay = () => n.e(2805).then(n.t.bind(n, 35186, 19))),
          (e.norwegian = () => n.e(6498).then(n.t.bind(n, 86498, 19))),
          (e.polish = () => n.e(5383).then(n.t.bind(n, 5383, 19))),
          (e.portuguese = () => n.e(3451).then(n.t.bind(n, 93451, 19))),
          (e.romanian = () => n.e(7265).then(n.t.bind(n, 47265, 19))),
          (e.russian = () => n.e(2115).then(n.t.bind(n, 22115, 19))),
          (e.schinese = () => n.e(4698).then(n.t.bind(n, 64698, 19))),
          (e.spanish = () => n.e(4230).then(n.t.bind(n, 64230, 19))),
          (e.swedish = () => n.e(3999).then(n.t.bind(n, 83999, 19))),
          (e.tchinese = () => n.e(3465).then(n.t.bind(n, 23465, 19))),
          (e.thai = () => n.e(4692).then(n.t.bind(n, 74692, 19))),
          (e.turkish = () => n.e(9430).then(n.t.bind(n, 89430, 19))),
          (e.ukrainian = () => n.e(3792).then(n.t.bind(n, 73792, 19))),
          (e.vietnamese = () => n.e(1305).then(n.t.bind(n, 21305, 19)));
        async function Un(s) {
          if (e[s]) return e[s]();
        }
        const An = (0, U.l)(Un);
        function Mn(s) {
          return An.Localize(`#Steam_Country_${s}`);
        }
        var an = n(1706),
          Q = n(36707),
          On = n(88152),
          I = n.n(On),
          Nn = n(7608);
        function Hn(s) {
          return s.getValue() == -1 || !s.getValue()
            ? "--"
            : (0, an.x)(s.getValue(), s.row.original.eCurrencyCode);
        }
        function In(s) {
          const o = s.row.original;
          if (o.nProposedPrice == -1 || !o.nProposedPrice) return "--";
          const l = !o.nPublishedPrice;
          return (0, t.jsx)("span", {
            className: (0, Q.A)({
              [I().NewPrice]: l,
              [I().HigherPrice]: !l && o.nProposedPrice > o.nPublishedPrice,
              [I().LowerPrice]: !l && o.nProposedPrice < o.nPublishedPrice,
            }),
            children: (0, an.x)(o.nProposedPrice, o.eCurrencyCode),
          });
        }
        function Bn(s) {
          return Mn(s.row.original.strCountryOverride);
        }
        function Fn(s) {
          const {
              packageID: o,
              strPriceKey: l,
              eRegionCode: g,
              eCurrencyCode: P,
            } = s.row.original,
            { nPriceInCents: C, nProposedPriceInCents: r } = (0, d.xQ)(o, l),
            v = (0, k.Bb)(),
            x = (0, L.cT)(),
            j = (0, A.pd)(S.CS).toUpperCase(),
            z = (0, d.Dl)(o, j) || (0, d.Oc)(o, j) || (0, d.mv)(o, j),
            { nGuidelinesLevel: c } = (0, Nn.$)(x, v, z, P, g),
            h = (0, d.Ao)(l, C ?? r, c, !0);
          return h == -1 || !h
            ? "--"
            : (0, t.jsxs)("span", {
                className: (0, Q.A)({}),
                children: [h, " %"],
              });
        }
        var rn = n(39049),
          Gn = n(8928),
          Yn = n(69289);
        function ot(s) {
          const { depth: o } = useContext(tn);
          return jsx(tn.Provider, {
            value: { depth: o + 1 },
            children: jsx(Box, { ...s }),
          });
        }
        const tn = R.createContext({ depth: 0 });
        function Kn() {
          return (0, R.useContext)(tn).depth;
        }
        var $n = n(3877);
        function gn(s) {
          const { level: o = "auto", className: l, color: g } = s,
            P = Kn(),
            C = Vn(o, P);
          return (0, t.jsx)(C, {
            ...(0, Yn.mz)(
              { ...s, className: N()((0, $n.T)(), rn.Heading, l) },
              Wn,
            ),
          });
        }
        const Wn = [
          ...f.U6,
          ...Gn.L,
          {
            prop: "size",
            responsive: !0,
            className: (s) => rn[`HeadingSize-${s}`],
          },
        ];
        function Vn(s, o) {
          if (s === "auto" && o === 0) return "h1";
          const l = s === "auto" ? o.toString() : s;
          return /^[1-6]$/.test(l)
            ? "h" + l
            : s === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${l}".`,
                ),
                "h1");
        }
        function Qn(s) {
          const { nPackageID: o } = s;
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)(T.s, {
                direction: "column",
                align: "start",
                paddingBottom: "4",
                children: [
                  (0, t.jsx)(F.v, {
                    href: `${V.TS.PARTNER_BASE_URL}pricing/dashboard/?pn=${o}`,
                    children: a.g.Localize("#SinglePackagePricing_Right_Edit"),
                  }),
                  (0, t.jsx)(f.EY, {
                    children: a.g.Localize(
                      "#SinglePackagePricing_Right_Edit_desc",
                    ),
                  }),
                ],
              }),
              (0, t.jsxs)(T.s, {
                direction: "column",
                paddingBottom: "4",
                children: [
                  (0, t.jsx)(gn, {
                    size: "7",
                    children: a.g.Localize(
                      "#SinglePackagePricing_Right_Help_Title",
                    ),
                  }),
                  (0, t.jsx)(f.EY, {
                    children: a.g.Localize(
                      "#SinglePackagePricing_Right_Help_Desc",
                    ),
                  }),
                  (0, t.jsx)(nn.Y, {
                    href: `${V.TS.PARTNER_BASE_URL}doc/store/pricing`,
                    children: a.g.Localize("#SinglePackagePricing_Right_Link"),
                  }),
                ],
              }),
              (0, t.jsxs)(T.s, {
                direction: "column",
                children: [
                  (0, t.jsx)(gn, {
                    size: "7",
                    children: a.g.Localize("#SinglePackagePricing_Right_FAQ"),
                  }),
                  (0, t.jsxs)(W.az, {
                    children: [
                      (0, t.jsx)(f.EY, {
                        size: "4",
                        weight: "medium",
                        children: a.g.Localize(
                          "#SinglePackagePricing_Right_FAQ_switching",
                        ),
                      }),
                      (0, t.jsx)("br", {}),
                      (0, t.jsx)(f.EY, {
                        children: a.g.LocalizeReact(
                          "#SinglePackagePricing_Right_FAQ_switching_answer",
                          (0, t.jsx)(nn.Y, {
                            href: `${V.TS.PARTNER_BASE_URL}wizard/HelpWithPublishing?issueid=915`,
                            children: a.g.Localize(
                              "#SinglePackagePricing_Right_FAQ_switching_answer_link",
                            ),
                          }),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var Xn = n(18715),
          G = n.n(Xn),
          Jn = n(58534),
          Zn = n(85599);
        function pn(s) {
          const { nPackageID: o } = s,
            l = (0, d.d$)(o),
            [g, P, C] = (0, b.uD)(),
            r = (0, d.fr)(o),
            [v, x] = (0, R.useState)(!1);
          return l
            ? (0, t.jsxs)("div", {
                className: (0, Q.A)(G().ToolbarInfo, G().Visible),
                children: [
                  (0, t.jsx)("div", {
                    className: G().ProposalStatus,
                    children: (0, t.jsx)(_.QD, { packageID: o }),
                  }),
                  (0, t.jsxs)("div", {
                    className: G().Buttons,
                    children: [
                      (0, t.jsx)(_.m2, { packageID: o, bShowCancel: !1 }),
                      (0, t.jsx)(Jn.$n, {
                        onClick: P,
                        className: (0, Q.A)(G().Button),
                        children: (0, m.we)(
                          "#PricingDashboard_CancelPriceProposal",
                        ),
                      }),
                      (0, t.jsx)(w.EN, {
                        active: g,
                        children: (0, t.jsx)(w.o0, {
                          strTitle: (0, m.we)(
                            "#PricingDashboard_CancelPriceProposal",
                          ),
                          strDescription: (0, m.we)("#Dialog_AreYouSure"),
                          closeModal: C,
                          onOK: async () => {
                            x(!0), await r(), x(!1), window.location.reload();
                          },
                          children:
                            v &&
                            (0, t.jsx)(Zn.t, {
                              string: (0, m.we)("#ImageUpload_Processing"),
                            }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        const M = (0, sn.FB)();
        function bn(s) {
          const { nPackageID: o, appids: l } = s,
            g = (0, d.Zz)();
          (0, Dn.h)(g);
          const P = (0, dn.cK)(),
            C = Number.parseInt(o),
            r = (0, L.cT)();
          return (0, t.jsx)(Rn.tH, {
            children: (0, t.jsxs)(zn.rK, {
              fnBLocalChangesExist: g,
              fnWarnUser: P,
              children: [
                (0, t.jsxs)("div", {
                  className: "adminTwoColCtn",
                  children: [
                    (0, t.jsx)("div", {
                      className: "adminLeftCol",
                      children: (0, t.jsx)("div", {
                        className: "colSection",
                        children: (0, t.jsx)(Tn, {}),
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "adminRightCol",
                      children: (0, t.jsx)("div", {
                        className: "panel",
                        children: (0, t.jsx)(Qn, { nPackageID: C }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "",
                  children: (0, t.jsx)(kn, {
                    nPackageID: C,
                    appids: l.map(Number.parseInt),
                  }),
                }),
              ],
            }),
          });
        }
        function kn(s) {
          const { nPackageID: o, appids: l } = s,
            g = (0, L.cT)(),
            {
              rgCurrencyRows: P,
              rgRegionRows: C,
              rgCountryOverrideRows: r,
            } = jn(g, o, l),
            v = (0, d.d$)(o),
            x = !!v,
            j = v?.eState == E.Zo,
            { fnApplyGuidelines: z } = (0, L.gC)((0, d.$i)());
          (0, R.useEffect)(() => {
            (0, fn.Sm)([o]);
          }, [o]);
          const c = [
            M.accessor("nPublishedPrice", {
              header: (0, m.we)("#PackagePricing_Col_CurPrice"),
              meta: { cellClassname: N()(I().CurrentPrice) },
              size: 120,
              cell: Hn,
            }),
            M.accessor(x ? "nProposedPrice" : "strPriceKey", {
              header: (0, m.we)(
                j
                  ? "#PackagePricing_Col_Approved"
                  : "#PackagePricing_Col_Proposal",
              ),
              meta: { cellClassname: N()(I().ProposedPrice) },
              size: 280,
              cell: x ? In : Ln.sh,
            }),
            M.accessor(x ? "nProposedPrice" : "strPriceKey", {
              header: (0, m.we)("#PackagePricing_Col_MaxDiscount"),
              meta: {
                cellClassname: N()(I().MaxDiscount),
                strHeaderTooltip: (0, m.we)(
                  "#PackagePricing_Col_MaxDiscount_ttip",
                ),
              },
              size: 150,
              cell: Fn,
            }),
          ];
          return P.length == 0 || C.length == 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  x
                    ? (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("div", {
                          className: "colSection",
                          children: (0, t.jsx)(_.RW, { packageID: o }),
                        }),
                      })
                    : (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsx)("div", {
                          className: "colSection",
                          children: (0, t.jsxs)(T.s, {
                            direction: "row",
                            gap: "5",
                            children: [
                              (0, t.jsx)(O.J, {
                                fnConversionMethodSelected: (h) => {
                                  z(o, (0, d.FR)(o, "USD"), h);
                                },
                              }),
                              (0, t.jsxs)(T.s, {
                                direction: "column",
                                children: [
                                  (0, t.jsx)(f.EY, {
                                    size: "3",
                                    children: a.g.Localize(
                                      "#PricingDashboard_Select_Price",
                                    ),
                                  }),
                                  (0, t.jsx)(wn, { usdRow: P[S.CS] }),
                                ],
                              }),
                              (0, t.jsxs)(T.s, {
                                direction: "column",
                                align: "start",
                                children: [
                                  (0, t.jsxs)(f.EY, {
                                    size: "3",
                                    children: [
                                      (0, m.we)(
                                        "#PricingDashboard_ApplyGuidelinesDialog_Context_Short",
                                      ),
                                      (0, t.jsx)(ln.o, {
                                        tooltip: (0, m.we)(
                                          "#PricingDashboard_ApplyGuidelinesDialog_Context",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)(qn, {
                                    nPackageID: o,
                                    oPricingGuideline: g,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                  (0, t.jsxs)("div", {
                    className: "colSection",
                    children: [
                      (0, t.jsx)(u.k, {
                        data: P,
                        className: N()(
                          H().DefaultFancyTable,
                          H().NoColumnBorders,
                          q().PackagePricingContext,
                        ),
                        columns: [
                          M.accessor("eCurrencyCode", {
                            header: (0, m.we)("#PackagePricing_Col_Currency"),
                            size: 200,
                            cell: p,
                          }),
                          ...c,
                        ],
                        getRowKey: (h, y) => `${y.eCurrencyCode}`,
                        nItemHeight: 20,
                        stickyHeader: !0,
                      }),
                      (0, t.jsx)(u.k, {
                        data: C,
                        className: N()(
                          H().DefaultFancyTable,
                          H().NoColumnBorders,
                          q().PackagePricingContext,
                        ),
                        columns: [
                          M.accessor("eRegionCode", {
                            header: (0, m.we)("#PackagePricing_Col_Region"),
                            size: 200,
                            cell: Cn,
                          }),
                          M.accessor("eCurrencyCode", {
                            header: (0, m.we)("#PackagePricing_Col_Currency"),
                            size: 100,
                            cell: p,
                          }),
                          ...c,
                        ],
                        getRowKey: (h, y) => `${y.eRegionCode}`,
                        nItemHeight: 20,
                        stickyHeader: !0,
                      }),
                      r.length > 0 &&
                        (0, t.jsx)(u.k, {
                          data: r,
                          className: N()(
                            H().DefaultFancyTable,
                            H().NoColumnBorders,
                            q().PackagePricingContext,
                          ),
                          columns: [
                            M.accessor("strCountryOverride", {
                              header: (0, m.we)("#PackagePricing_Col_Country"),
                              size: 200,
                              cell: Bn,
                            }),
                            M.accessor("eCurrencyCode", {
                              header: (0, m.we)("#PackagePricing_Col_Currency"),
                              size: 100,
                              cell: p,
                            }),
                            ...c,
                          ],
                          getRowKey: (h, y) => `${y.strCountryOverride}`,
                          nItemHeight: 20,
                          stickyHeader: !0,
                        }),
                      (0, t.jsx)(dn.BL, { bReloadPageOnSave: !0 }),
                      (0, t.jsx)(pn, { nPackageID: o }),
                    ],
                  }),
                ],
              });
        }
        function wn(s) {
          const { usdRow: o } = s,
            { fnApplyGuidelines: l } = (0, L.gC)((0, d.$i)());
          return (0, t.jsx)(vn.e, {
            strButton: a.g.Localize("#PricingDashboard_Select_Price_button"),
            strTooltip: a.g.Localize(
              "#PricingDashboard_Select_Price_button_ttip",
            ),
            fnGetUSDPriceInCents: () => (0, d.FR)(o.packageID, "USD"),
            fnOnUpdate: (g) => l(o.packageID, g),
            strDescription: a.g.Localize(
              "#PricingDashboard_GuidelinesPickerDescription_New",
            ),
            appids: o.appids,
            nPackageID: o.packageID,
            bCanSetToFree: o.bCanSetToFree,
          });
        }
        function qn(s) {
          const { nPackageID: o, oPricingGuideline: l } = s,
            [g, P, C] = (0, b.uD)(),
            r = (0, b.CH)();
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(F.$, {
                onClick: P,
                children: (0, m.we)(
                  "#PricingDashboard_ApplyGuidelinesDialog_Button",
                ),
              }),
              (0, t.jsx)(w.EN, {
                active: g,
                children: (0, t.jsx)(un.i, {
                  closeModal: C,
                  fnOnApply: r,
                  singlePackage: !0,
                }),
              }),
            ],
          });
        }
        var _n = n(30985);
        function nt(s) {
          return (
            R.use((0, _n.u)()),
            (0, t.jsx)($.dO, {
              children: (0, t.jsxs)(k.jY, {
                children: [
                  (0, t.jsx)($.qh, {
                    path: X.PriceEdit(":packageid"),
                    children: (0, t.jsx)(Z.X, {
                      config: {
                        "packageadmin-price-editor": (o) =>
                          (0, t.jsx)(bn, { ...o }),
                      },
                    }),
                  }),
                  (0, t.jsx)($.qh, { component: J.a }),
                ],
              }),
            })
          );
        }
      },
      86336: (D, K, n) => {
        "use strict";
        n.d(K, { Y: () => f });
        var t = n(7850),
          R = n(50122),
          $ = n.n(R),
          X = n(15252),
          J = n(69289),
          Z = n(24660),
          T = n(3166);
        function f(u) {
          const { underline: S = "auto", focusable: L, navProps: E, ...O } = u,
            a = (0, T.Qn)(),
            U = L ?? E?.focusable ?? !!O.href,
            i = (0, J.mz)({ ...O, underline: S, className: R.TextLink }, F);
          return a && (U || E)
            ? (0, t.jsx)(Z.Ii, { ...i, ...(E || {}), focusable: U })
            : (0, t.jsx)("a", { ...i });
        }
        const F = [
          ...X.Ae,
          { prop: "underline", className: (u) => R[`Underline-${u}`] },
        ];
        function sn(u) {
          const { underline: S = "auto", focusable: L, navProps: E, ...O } = u,
            a = useInGamepadUI(),
            U = L ?? E?.focusable ?? !!O.onClick,
            i = jsx("span", {
              role: "button",
              ...useResolveProps(
                { ...O, underline: S, className: styles.TextLinkButton },
                F,
              ),
            });
          return a && (U || E)
            ? jsx(FocusElement, { ...(E || {}), focusable: U, children: i })
            : i;
        }
      },
      88152: (D) => {
        D.exports = {
          NewPrice: "_3xrKIJ4u3oGwIbDNHLiE3U",
          HigherPrice: "rdMe4z7G3RiS3aOmPBXjp",
          LowerPrice: "HFkBG6GEWlzLQZ3MWCZfy",
          FlexColGroup: "_98APa3FIHhT6HoHQPTdP-",
          CurrentPrice: "_2GBqA5FVPnXDKN337UQTQF",
          ProposedPrice: "_1lW7HuIHz1dVNCRWv6gDDu",
          MaxDiscount: "x7PYG4YYyYUVdJCTlosQh",
          PriceUpdateOptionsGroup: "_29xcvKUrOD3qIkctp2Fo_N",
          FreeSettingCtn: "_1kDnDjWEynufWnYI9AFl3l",
        };
      },
      39049: (D) => {
        D.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      50122: (D) => {
        D.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      32232: (D) => {
        D.exports = {
          DefaultFancyTable: "_3OVilOdb2tSBtG90cwqGUo",
          NoColumnBorders: "_3C2djc2HxWtHJaUqVq-cKt",
        };
      },
    },
  ]);
})();
