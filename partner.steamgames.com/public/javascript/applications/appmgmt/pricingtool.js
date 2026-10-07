/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [31101],
    {
      31716: (ne, De, s) => {
        "use strict";
        s.r(De), s.d(De, { PricingRoutes: () => ce, default: () => Se });
        var r = s(7850),
          le = s(58732),
          fe = s(90783),
          B = s(17083),
          M = s(92757),
          j = s(26485),
          k = s(31886),
          f = s(37424),
          Pe = s(40396),
          a = s(90626),
          re = s(62092),
          O = s(58534),
          oe = s(88003),
          de = s(53107),
          ge = s(82734),
          l = s(18210),
          ye = s(3166),
          Ie = s(14578),
          _e = s.n(Ie),
          je = s(25792),
          Oe = s(71421),
          Ce = s(36707),
          ee = s(95146),
          I = s(71764),
          t = s(22886),
          e = s.n(t),
          n = s(31069),
          o = s(96434),
          i = s.n(o),
          u = s(78779),
          H = s(16666),
          se = s(32),
          ie = s(64238),
          C = s.n(ie),
          L = s(179),
          d = s(64641),
          q = s(42691),
          p = s(40441),
          y = s(20929),
          c = s(64868),
          G = s(2801),
          W = s(67829);
        function Q(g) {
          const {
              bCompactMode: P,
              setCompactMode: b,
              rgGridData: E,
              strPackageFilter: T,
              setPackageFilter: h,
              bFilterToBelowMinPrice: V,
              setFilterToBelowMinPrice: K,
            } = g,
            w = (0, a.useMemo)(
              () => E.filter((ve) => (0, f.Y5)(ve.packageID)).length,
              [E],
            );
          let X = a.useCallback(
            (ve) => {
              h(ve.data);
            },
            [h],
          );
          const ue = a.useMemo(
              () => [
                {
                  label: (0, l.we)(
                    "#PricingDashboard_ShowOnlyReleasedPackages",
                  ),
                  data: "released",
                },
                {
                  label: (0, l.we)("#PricingDashboard_ShowAllPackages"),
                  data: "all",
                },
                {
                  label: (0, l.we)(
                    "#PricingDashboard_ShowOnlyUnreleasedPackages",
                  ),
                  data: "unreleased",
                },
                {
                  label: (0, l.we)("#PricingDashboard_ShowOnlyChangedPackages"),
                  data: "changed",
                },
                {
                  label: (0, l.we)("#PricingDashboard_ShowSubmittedChanges"),
                  data: "proposed",
                },
              ],
              [],
            ),
            [pe, xe, ke] = (0, c.uD)();
          return (0, r.jsxs)("div", {
            className: e().GridHeaderButtons,
            children: [
              (0, r.jsx)(O.ZU, {
                rgOptions: ue,
                selectedOption: T,
                strDropDownClassName: e().Test,
                onChange: X,
                contextMenuPositionOptions: { bMatchWidth: !1 },
              }),
              !!(w || V) &&
                (0, r.jsx)("div", {
                  className: (0, Ce.A)(e().OptionCtn, e().PriceLowOption),
                  children: (0, r.jsx)(O.Yh, {
                    checked: V,
                    onChange: K,
                    label: (0, l.we)("#PricingDashboard_FilterToLowPrice", w),
                  }),
                }),
              (0, r.jsx)("div", {
                className: (0, Ce.A)(e().OptionCtn, e().CompactOption),
                children: (0, r.jsx)(O.Yh, {
                  checked: P,
                  onChange: b,
                  label: (0, l.we)(
                    "#PricingDashboard_ShowCompactModeCheckBoxLabel",
                  ),
                }),
              }),
              (0, r.jsx)("div", {
                className: (0, Ce.A)(e().OptionCtn),
                children: (0, r.jsx)(y.J, {}),
              }),
              (0, r.jsxs)("div", {
                className: (0, Ce.A)(e().OptionCtn),
                children: [
                  (0, r.jsx)(O.jn, {
                    onClick: xe,
                    children: (0, l.we)(
                      "#PricingDashboard_ApplyGuidelinesDialog_Button",
                    ),
                  }),
                  (0, r.jsx)(G.EN, {
                    active: pe,
                    children: (0, r.jsx)(W.i, { closeModal: ke }),
                  }),
                ],
              }),
            ],
          });
        }
        var ae = s(81246);
        function D(g) {
          return g.contains_game && g.contains_dlc
            ? "BOTH"
            : g.contains_game
              ? "GAME"
              : g.contains_dlc
                ? "DLC"
                : null;
        }
        function x(g, P, b) {
          const { rgSupportedPriceKeys: E } = (0, f.T7)();
          return a.useMemo(() => {
            const T = [];
            for (const h of g) {
              const V = /^-?[0-9]+$/.test(b.strSearchStringFromURL)
                ? parseInt(b.strSearchStringFromURL)
                : 0;
              if (h.packageid !== V) {
                if (P == "changed") {
                  if (!(0, f.iy)(h.packageid)) continue;
                } else if (P == "proposed") {
                  if (!(0, f.RO)(h.packageid)) continue;
                } else if (P == "released") {
                  if (!h.released) continue;
                } else if (P == "unreleased" && h.released) continue;
                if (
                  b?.bFilterToOnlyBelowMinimumPrice &&
                  !(0, f.Y5)(h.packageid)
                )
                  continue;
              }
              let K = h.grouped_app_name;
              K ||
                (h.appids.length > 1
                  ? (K = (0, l.we)(
                      "#PackageGrid_MultipleBaseGamesFoundForPackage",
                    ))
                  : (K = (0, l.we)("#PackageGrid_NoBaseGameFoundForPackage")));
              const w = {
                appids: h.appids.sort(),
                appName: K,
                packageID: h.packageid,
                packageName: h.package_name || "",
                packageType: D(h),
                released: h.released,
              };
              for (const X of E) w[X] = X;
              T.push(w);
            }
            return T;
          }, [b, g, E, P]);
        }
        function U(g) {
          const { column: P } = g,
            b = P.id,
            E = (0, f.XK)(b),
            T = (0, f.YB)(b);
          let h = () => (0, r.jsx)(v, { priceKey: b });
          return (0, r.jsxs)("div", {
            className: e().CurrencyHeader,
            children: [
              (0, r.jsx)(Oe.he, {
                toolTipContent: E,
                direction: "top",
                className: e().CurrencyAbbreviation,
                strTooltipClassname: e().HoverToolTip,
                children: (0, r.jsxs)("div", {
                  className: e().CurrencyNameCtn,
                  children: [
                    b,
                    (0, r.jsx)("span", {
                      className: e().CurrencyName,
                      children: E,
                    }),
                  ],
                }),
              }),
              T > 0 &&
                (0, r.jsx)(I.O, {
                  hoverKey: b,
                  className: e().CurrencyMore,
                  renderHover: h,
                }),
            ],
          });
        }
        function m(g) {
          const { row: P } = g;
          return (0, r.jsx)(ae.m2, {
            packageID: P.original.packageID,
            bShowCancel: !0,
          });
        }
        function A() {
          return a.useMemo(
            () =>
              (0, H.FB)().accessor("proposalState", {
                header: (0, l.we)(
                  "#PricingDashboard_Column_PriceProposalState",
                ),
                enableSorting: !1,
                cell: m,
                size: 200,
                meta: {
                  strHeaderTooltip: (0, l.we)(
                    "#PricingDashboard_Column_PriceProposalState_ttip",
                  ),
                },
              }),
            [],
          );
        }
        function Z(g) {
          const P = (0, ee.sF)(),
            b = (0, ee.uv)(),
            E = (0, ee.NP)(),
            T = (0, ee.ZN)(),
            h = (0, ee.mE)(!1),
            V = A(),
            { rgSupportedPriceKeys: K } = (0, f.T7)();
          return a.useMemo(() => {
            const w = [P, b, E, T, h, V];
            for (const X of K)
              w.push({
                accessorKey: X,
                size: g ? 72 : 200,
                enableSorting: !1,
                header: U,
                cell: n.sh,
              });
            return w;
          }, [P, b, E, T, h, V, K, g]);
        }
        function F(g) {
          const b = (0, f.Ci)()?.length ?? 0;
          return (0, r.jsx)("div", {
            className: (0, Ce.A)(e().PricingGridCtn, b > 0 && "PendingVisible"),
            children: (0, r.jsx)(S, { ...g }),
          });
        }
        const S = a.memo(function (P) {
          const { packageData: b } = P,
            [E, T] = a.useState(!1),
            h = a.useRef(null),
            [V, K] = (0, L.QD)("filter", "released"),
            [w, X] = (0, L.QD)("filter_below_min_price", !1),
            ue = new URLSearchParams(window.location.search),
            pe = ue.has(k.xi) ? decodeURIComponent(ue.get(k.xi)) : "",
            xe = Z(E),
            ke = x(b, V, {
              bFilterToOnlyBelowMinimumPrice: w,
              strSearchStringFromURL: pe,
            }),
            ve = (0, k.pV)(),
            Re = () => ve(h.current),
            Fe = (0, f.Zz)(),
            Ne = (0, u.cK)();
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(Q, {
                bCompactMode: E,
                setCompactMode: T,
                rgGridData: ke,
                strPackageFilter: V,
                setPackageFilter: K,
                bFilterToBelowMinPrice: w,
                setFilterToBelowMinPrice: X,
              }),
              (0, r.jsx)("div", {
                className: e().PricingGridWrapper,
                children: (0, r.jsx)("div", {
                  className: (0, Ce.A)(e().PricingGrid, E && "CompactMode"),
                  children: (0, r.jsxs)(je.tH, {
                    children: [
                      (0, r.jsx)(ee.rK, {
                        fnBLocalChangesExist: Fe,
                        fnWarnUser: Ne,
                        children: (0, r.jsx)(se.k, {
                          ref: h,
                          className: C()(
                            e().PricingGridTable,
                            "noGlobalButtonStyle",
                          ),
                          columns: xe,
                          data: ke,
                          getRowKey: (Le, Be) => Be.packageID,
                          stickyHeader: !0,
                          nItemHeight: 43,
                          nHeaderHeight: 63,
                          overscan: 12,
                          initialExpanded: !0,
                          initialSorting: [{ id: "appName", desc: !1 }],
                          initialColumnFilters: [
                            { id: "packageName", value: pe },
                          ],
                          initialGrouping: ["appName"],
                          initialColumnVisibility: {
                            packageType: !1,
                            appids: !1,
                          },
                          initialColumnPinning: {
                            left: [
                              "packageID",
                              "appName",
                              "packageName",
                              "proposalState",
                              "USD",
                            ],
                          },
                          onGroupingChange: Re,
                          onVisibleRowsChange: Re,
                          renderGroup: ee.IR,
                        }),
                      }),
                      (0, r.jsx)("br", {}),
                    ],
                  }),
                }),
              }),
            ],
          });
        });
        function v(g) {
          const { priceKey: P } = g,
            b = (0, f.XK)(P);
          let E = (0, f.mP)(P);
          return (0, r.jsx)("div", {
            className: i().PricePopout,
            children: (0, r.jsx)("div", {
              className: i().DetailRow,
              children: (0, r.jsx)("div", {
                className: i().DetailLabel,
                onClick: E,
                children: (0, l.we)("#PricingDashboard_RevertAllCurrency", b),
              }),
            }),
          });
        }
        var $ = s(19367),
          _ = s.n($),
          N = s(85599),
          z = s(22880),
          be = s(57581),
          R = s.n(be);
        function we(g) {
          const { closeModal: P } = g,
            b = (0, k.vs)(),
            E = _()().format("YYYY-MM-DDTHH-mm-ss"),
            T = (0, k.zt)(),
            h = (0, k.Yr)(),
            V = `prices_all_${b}_${E}.csv`,
            K = `prices_${b}_${E}.csv`,
            w = h.length == 0;
          return (0, r.jsxs)(G.o0, {
            bAllowFullSize: !1,
            closeModal: P,
            bAlertDialog: !0,
            strTitle: (0, l.we)("#PricingDashboard_ImportExportHeader"),
            children: [
              (0, l.we)("#PricingDashboard_ImportExport_GeneralInstructions"),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("a", {
                href: ye.TS.PARTNER_BASE_URL + "doc/store/pricing/csv",
                target: "_blank",
                children: (0, l.we)("#PricingDashboard_ImportExport_DocLink"),
              }),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("h3", {
                children: (0, l.we)("#PricingDashboard_SubtitleExport"),
              }),
              (0, r.jsx)("div", {
                className: R().Instructions,
                children: (0, l.we)(
                  "#PricingDashboard_ImportExport_DownloadInstructions",
                ),
              }),
              (0, r.jsxs)("div", {
                className: R().ButtonRows,
                children: [
                  h.length != T.length &&
                    (0, r.jsxs)("div", {
                      className: R().OptionCtn,
                      children: [
                        (0, r.jsx)("span", {
                          className: R().OptionDesc,
                          children: (0, l.we)(
                            "#PricingDashboard_ImportExport_DownloadVisible_Desc",
                          ),
                        }),
                        (0, r.jsxs)(O.$n, {
                          className: R().Button,
                          disabled: w,
                          onClick: () => J(h, K),
                          children: [
                            (0, l.we)(
                              "#PricingDashboard_ImportExport_DownloadVisible_Button",
                            ),
                            (0, r.jsx)("span", {
                              children: (0, l.we)(
                                "#PricingDashboard_PackageCount",
                                h.length,
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, r.jsxs)("div", {
                    className: R().OptionCtn,
                    children: [
                      (0, r.jsx)("span", {
                        className: R().OptionDesc,
                        children: (0, l.we)(
                          "#PricingDashboard_ImportExport_DownloadAll_Desc",
                        ),
                      }),
                      (0, r.jsxs)(O.$n, {
                        className: R().Button,
                        disabled: w,
                        onClick: () => J(T, V),
                        children: [
                          (0, l.we)(
                            "#PricingDashboard_ImportExport_DownloadAll_Button",
                          ),
                          (0, r.jsx)("span", {
                            children: (0, l.we)(
                              "#PricingDashboard_PackageCount",
                              T.length,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("br", {}),
              (0, r.jsx)("h3", {
                children: (0, l.we)("#PricingDashboard_SubtitleImport"),
              }),
              (0, r.jsx)("div", {
                className: R().Instructions,
                children: (0, l.we)(
                  "#PricingDashboard_ImportExport_UploadInstructions",
                ),
              }),
              (0, r.jsx)("div", {
                className: R().ButtonRows,
                children: (0, r.jsxs)("div", {
                  className: R().OptionCtn,
                  children: [
                    (0, r.jsx)("span", {
                      className: R().OptionDesc,
                      children: (0, l.we)(
                        "#PricingDashboard_ImportExport_Upload_Desc",
                      ),
                    }),
                    (0, r.jsx)(O.$n, {
                      className: R().Button,
                      disabled: w,
                      children: (0, r.jsxs)("label", {
                        className: R().ImportButtonLabel,
                        htmlFor: "import-price-input",
                        children: [
                          (0, l.we)(
                            "#PricingDashboard_ImportExport_Upload_Button",
                          ),
                          (0, r.jsx)("input", {
                            id: "import-price-input",
                            type: "file",
                            style: { display: "none" },
                            onChange: (X) => he(X, P),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function J(g, P) {
          const b = [],
            E = (0, f.U3)(),
            T = [(0, l.we)("#PackageGrid_Column_PackageName"), "ID"];
          for (const h of E) T.push(h);
          b.push(T);
          for (const h of g) {
            const K = [(0, k.ww)(h), h.toString()];
            for (const w of E) {
              const X = (0, f.FR)(h, w),
                ue = X ? (X / 100).toString() : "";
              K.push(ue);
            }
            b.push(K);
          }
          z.g.WriteCSVToFile(b, P);
        }
        async function he(g, P) {
          if (g.target.files.length >= 1) {
            const b = (0, ge.uX)(g),
              E = g.target.files[0],
              T = await z.g.ParseCSVFile(E);
            (0, oe.mK)(
              (0, r.jsx)(me, { strFilename: E.name, parseResult: T }),
              b,
            ),
              P();
          }
        }
        function Y(g, P) {
          let b = Number(g);
          return Number.isNaN(b) ? null : Math.round(b * 100);
        }
        function te(g, P, b, E) {
          const T = [],
            h = new Set(P),
            V = [];
          for (const K of g.data ?? []) {
            const w = Number(K.ID);
            if (h.has(w)) {
              T.push(w);
              for (const X of b) {
                const ue = K[X],
                  pe = !!ue?.length && Y(ue, X);
                if (!ue?.length || Number.isNaN(pe)) continue;
                const xe = E(w, X, pe);
                xe && V.push(xe);
              }
            }
          }
          return { rgPriceChanges: V, nPackagesImported: T.length };
        }
        function me(g) {
          const { closeModal: P, strFilename: b, parseResult: E } = g,
            T = (0, k.zt)(),
            h = (0, f.U3)(),
            V = (0, f.hm)(),
            [K, w] = a.useState(null),
            [X, ue] = a.useState();
          if (
            (a.useEffect(() => {
              const { rgPriceChanges: ve, nPackagesImported: Re } = te(
                E,
                T,
                h,
                V,
              );
              w(ve), ue(Re);
            }, [E, T, h, V]),
            K === null)
          )
            return (0, r.jsx)(N.t, { position: "center" });
          const pe = K.length > 0,
            xe = pe
              ? (0, l.we)("#PackageGrid_SaveChangesDialogButton")
              : (0, l.we)("#Button_Close"),
            ke = () => {
              pe && (0, oe.pg)((0, r.jsx)(u.Zg, {}), window);
            };
          return (0, r.jsxs)(G.o0, {
            strTitle: (0, l.we)(
              "#PricingDashboard_ImportExport_UploadProgressTitle",
            ),
            strDescription: (0, l.we)(
              "#PricingDashboard_ImportExport_UploadProgressDetails",
              X,
            ),
            bAlertDialog: !pe,
            strOKButtonText: xe,
            onOK: ke,
            strCancelButtonText: (0, l.we)("#Button_OK"),
            closeModal: P,
            children: [
              (0, r.jsx)("div", {
                className: R().ParseResultCount,
                children: (0, l.we)(
                  "#PricingDashboard_ImportExport_UploadResults",
                  K.length,
                ),
              }),
              pe &&
                (0, l.we)(
                  "#PricingDashboard_ImportExport_UploadNextStepInstructions",
                ),
              !!E.errors?.length &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)("div", {
                      className: R().ErrorHeader,
                      children: (0, l.we)(
                        "#PricingDashboard_ImportExport_UploadErrorsHeader",
                        E.errors?.length,
                      ),
                    }),
                    (0, r.jsx)("div", {
                      className: R().ParseErrors,
                      children: E.errors.map((ve, Re) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className: R().Error,
                            children: `${ve.row ?? "-"} ${ve.message}`,
                          },
                          `${ve.message}-${Re}`,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function Te(g) {
          (0, Pe.h)((0, f.Zz)());
          const P = (0, k.uw)(),
            b = "https://steamcommunity.com/groups/steamworks/discussions/29/",
            E = ye.TS.PARTNER_BASE_URL + "doc/store/pricing",
            T = ye.TS.HELP_BASE_URL + "wizard/HelpWithPublishing?issueid=920",
            h = (0, f.v4)(),
            V = (0, a.useMemo)(
              () => Array.from(new Set(h.map((w) => w.submitterID))),
              [h],
            ),
            K = (0, re.DW)(V);
          return (0, r.jsxs)("div", {
            className: _e().DashboardPage,
            children: [
              (0, r.jsxs)("div", {
                className: _e().DashTitle,
                children: [
                  (0, l.we)("#PricingDashboard_Title"),
                  (0, r.jsx)("div", { className: _e().FeedbackLinkCtn }),
                  (0, r.jsxs)("div", {
                    className: _e().ButtonGroup,
                    children: [
                      (0, r.jsx)(O.$n, {
                        onClick: (w) =>
                          (0, oe.pg)((0, r.jsx)(we, {}), (0, ge.uX)(w)),
                        children: (0, l.we)(
                          "#PricingDashboard_ImportExportButton",
                        ),
                      }),
                      (0, r.jsx)(O.$n, {
                        onClick: (w) => (0, de.EP)(w, E),
                        children: (0, l.we)(
                          "#PricingDashboard_DocumentationButton",
                        ),
                      }),
                      (0, r.jsx)(O.$n, {
                        onClick: (w) => (0, de.EP)(w, T),
                        children: (0, l.we)(
                          "#PricingDashboard_ContactUsButton",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              P.length == 0 &&
                (0, r.jsx)("div", {
                  className: _e().ErrorMessage,
                  children: (0, l.we)("#PricingDashboard_Error_NoPackages"),
                }),
              P.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(F, { packageData: P }),
                    (0, r.jsx)(u.BL, { bReloadPageOnSave: !1 }),
                  ],
                }),
            ],
          });
        }
        var Ae = s(61266),
          Ee = s(13401);
        const ce = { PricingDashboard: () => "/dashboard/:publisherid(\\d*)" };
        function Se(g) {
          return (0, r.jsx)(Ae.m, {
            children: (0, r.jsx)(Ee.jY, {
              children: (0, r.jsx)(B.Kd, {
                basename: (0, le.C)() + "pricing/",
                children: (0, r.jsxs)(M.dO, {
                  children: [
                    (0, r.jsx)(M.qh, {
                      exact: !0,
                      path: le.B.DiagData(),
                      render: (P) =>
                        (0, r.jsx)(j.z, {
                          ...P,
                          strConfigID: "application_config",
                        }),
                    }),
                    (0, r.jsx)(M.qh, {
                      path: ce.PricingDashboard(),
                      render: (P) => (0, r.jsx)(Te, {}),
                    }),
                    (0, r.jsx)(M.qh, { component: fe.a }),
                  ],
                }),
              }),
            }),
          });
        }
      },
      61266: (ne, De, s) => {
        "use strict";
        s.d(De, { T: () => Pe, m: () => f });
        var r = s(90626),
          le = s(13018),
          fe = s(60298),
          B = s(10142),
          M = s(71742),
          j = s(3166),
          k = s(14616);
        function f(O) {
          const [oe, de] = (0, r.useState)(!1),
            [ge] = (0, r.useState)(() => a()),
            l = (0, r.useMemo)(
              () => ({
                country: j.TS.COUNTRY,
                language: j.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, r.useEffect)(() => (de(!0), re(ge)), [ge]),
            oe
              ? (0, r.createElement)(k.V3, {
                  context: l,
                  serviceTransportOverride: ge.GetServiceTransport(),
                  children: O.children,
                })
              : null
          );
        }
        function Pe(O) {
          const [oe] = (0, r.useState)(() => a()),
            de = (0, r.useMemo)(
              () => ({
                country: j.TS.COUNTRY,
                language: j.TS.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: O.bIncludeUnpublished,
              }),
              [O.bIncludeUnpublished],
            );
          return (0, r.createElement)(k.V3, {
            context: de,
            serviceTransportOverride: oe.GetServiceTransport(),
            children: O.children,
          });
        }
        function a() {
          const O = (0, j.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, M.wT)(!!O, "require partnerbrowse_webapi_token"),
            (0, fe.p)(new le.D(j.TS.WEBAPI_BASE_URL, O))
          );
        }
        function re(O) {
          return B.A.Initialize(
            O.GetServiceTransport(),
            j.iA.is_partner_member,
          );
        }
      },
      22880: (ne, De, s) => {
        "use strict";
        s.d(De, { g: () => fe });
        var r = s(40323),
          le = s.n(r);
        class fe {
          static ParseCSVFile(M, j) {
            return new Promise((k, f) => {
              const a = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: k,
                error: (re) => f({ errors: [re] }),
                transformHeader: j,
              };
              le().parse(M, a);
            });
          }
          static ReadFile(M) {
            return new Promise((j, k) => {
              const f = new FileReader();
              (f.onload = (Pe) => j(f.result)), f.readAsText(M);
            });
          }
          static WriteFile(M, j) {
            let k = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(M, j);
            else {
              const f = window.URL.createObjectURL(M);
              k.href = f;
            }
            k.setAttribute("download", j), k.click();
            try {
              document.removeChild(k);
            } catch {}
          }
          static WriteCSVToFile(M, j, k, f) {
            const Pe = f
                ? le().unparse({ fields: f, data: M }, { header: !0 })
                : le().unparse(M, { header: !0 }),
              a = k == !0 ? ["\uFEFF" + Pe] : [Pe];
            fe.WriteFile(new Blob(a, { type: "text/csv:charset=utf-8;" }), j);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(M, j) {
            const k = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let f =
              "<" +
              k() +
              'xml version="1.0" encoding="UTF-8" ' +
              k() +
              `>
`;
            (f += new XMLSerializer().serializeToString(M)),
              fe.WriteFile(
                new Blob([f], { type: "application/xml:charset=utf-8;" }),
                j,
              );
          }
        }
      },
      42691: (ne) => {
        ne.exports = {
          DashboardPage: "_353rnPLVzyQBQhakxhkl7u",
          DashTitleBar: "_2m-_VofgoRb-uGQMrewYq3",
          DashTitle: "_1FK58fndqHlADYEX-58V0C",
          ConfidentialBanner: "_2H9KzQ8SQGvqGhbWidWzf4",
          Throbber: "_21EsxksQjCwl-Xz3TNuoPc",
          ErrorMessage: "_190uxu3FVS6Fx-IbDsfCyd",
          ButtonGroup: "_2peTiEFo27_zkZA0TzjnD4",
        };
      },
      40441: (ne) => {
        ne.exports = {
          EventDetails: "_3LMXjfy-EuA2ZWoW660vuc",
          Active: "_2BLece8YI3va6GD9JEUxjL",
          RestrictedEligibility: "_2lxTisamKtJUowDlNKSrzG",
          CollisionFreeDiscountEvent: "_15fBcZwmM-nap1QbkpRc2G",
          EventName: "_2bJFFj7RfHL_P4P-MJlzK4",
          EditEventLink: "_1XHd3t0XU1SfpsraST5Ovy",
          EventDates: "_2kY09NU8R-tjOVYmIwZ98B",
          EventDateRange: "_312igBJXB0MifodN4IBq1i",
          EventNumDays: "OAAVWKvssJLy0QM6mVcw6",
          EventLink: "VZ3pVxXbvFNzdGOkOrNGU",
          EventParticipationCtn: "_2iuUu1K5b1e71DnJKkBtHH",
          ParticipationDetails: "_2tr5XTQIvHNQiu4IZKMi7Z",
          Title: "_3mO71T0Q_migmtLfYRFb-6",
          Count: "_1pDZ1lHiN5RohGZxcDAyCK",
          Selected: "_36G76FOe3fZ8csab26PcL8",
          ParticipationToolTip: "_36hxaHrRvc7ct9bb0Aeza3",
          AppLink: "_3RF-6YnSS_2OpJmOo0BV6_",
          BasePrice: "_1a_LwvXaB11PNusz9GPz98",
          RelatedDiscount: "_12zwKFzckK0AkG-lS95iTK",
          DiscountGridDataColumn: "_1yW70vcAdwnrMIrVE8y03S",
          GridRowLoadingThrobber: "r2FLR3ukmK3cVbBV-j8Aa",
          CurrencyPicker: "_2Z65Kc_3FxlP0E15rMFuVC",
          RelatedInfoPicker: "O-95g3EzyTgFwNJ8ATC-e",
          RelatedInfoPickerCtn: "_2nnB1eMYflFLLmMAi7_jJV",
          CurrencyDropDown: "_2gGuz_TA8axLQOqAtwurFU",
          RelatedInfoDropDown: "_1jj2uEuCns_K_cIfGZcKl6",
          CurrencyDropDownItem: "_3wPHxQWhohHATqjvN6B2l3",
          RelatedInfoDropDownItem: "_1ORamDcYtEN8wS1voTsWE",
        };
      },
      22886: (ne) => {
        ne.exports = {
          PricingGridCtn: "_2j-z9aXG_KoPSY-SYZ0fkF",
          PricingGridWrapper: "_185dckQ4O6j7fFSauUkttX",
          PricingGrid: "fKA16ZB7sn97FP66zTggw",
          PricingGridDataColumn: "OVDCtDCCkCZr1my3nFNXX",
          GridHeaderButtons: "_1Z7LLb7cP6pLH8XwOgDkP",
          OptionCtn: "_1PrsCGcbjJ61fDm8stNJd2",
          PriceLowOption: "_39j_Zq7q7VRXEb-7tZMUSx",
          CurrencyHeader: "_1kvIFs23dRUETqkaH0d_RW",
          CurrencyNameCtn: "_1eoBYSPbVZ6MoUNDkL_xbp",
          CurrencyName: "_3ffEWbT5mrSdmmCBQsjpmC",
          CurrencyMore: "MltPJcBZanYmXvQaiTTTg",
          PricingGridTable: "_2xa-P-_4oTPXUvGstrnphV",
          HoverToolTip: "_1OS2vdfTf7vsWj8VhNKlXu",
        };
      },
      57581: (ne) => {
        ne.exports = {
          Instructions: "_2A9meAsgvbqtRE-WwcWklJ",
          ButtonRows: "_3BpoblG0qqkekq9SESFn1s",
          Button: "_3u7Vn4B-hH3ntVFvWBlMWP",
          ImportButtonLabel: "_3OJwY0KsAdtSzzFuOdWl8l",
          OptionCtn: "_3zj1IiybB-MxMlHawZLJeQ",
          OptionDesc: "_2QfyWyy2Z0gPCqVTApBKNV",
          ParseResultCount: "_1P_KJVQc3vmgxCssmhFas0",
          ErrorHeader: "_289pBSstep6RsTe3aedebA",
          ParseErrors: "_1VTD4841BG3WozX_i1yNEd",
        };
      },
      64641: (ne) => {
        ne.exports = {
          v6: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      40323: function (ne, De) {
        var s, r, le; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((fe, B) => {
          (r = []),
            (s = B),
            (le = typeof s == "function" ? s.apply(De, r) : s),
            le !== void 0 && (ne.exports = le);
        })(this, function fe() {
          var B =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : B !== void 0
                    ? B
                    : {},
            M,
            j = !B.document && !!B.postMessage,
            k = B.IS_PAPA_WORKER || !1,
            f = {},
            Pe = 0,
            a = {};
          function re(t) {
            (this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (e) {
                var n = Ce(e);
                (n.chunkSize = parseInt(n.chunkSize)),
                  e.step || e.chunk || (n.chunkSize = null),
                  (this._handle = new l(n)),
                  ((this._handle.streamer = this)._config = n);
              }.call(this, t),
              (this.parseChunk = function (e, n) {
                var o = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < o) {
                  let u = this._config.newline;
                  u ||
                    ((i = this._config.quoteChar || '"'),
                    (u = this._handle.guessLineEndings(e, i))),
                    (e = [...e.split(u).slice(o)].join(u));
                }
                this.isFirstChunk &&
                  I(this._config.beforeFirstChunk) &&
                  (i = this._config.beforeFirstChunk(e)) !== void 0 &&
                  (e = i),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var o = this._partialLine + e,
                  i =
                    ((this._partialLine = ""),
                    this._handle.parse(o, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((e = i.meta.cursor),
                    (o =
                      (this._finished ||
                        ((this._partialLine = o.substring(e - this._baseIndex)),
                        (this._baseIndex = e)),
                      i && i.data && (this._rowCount += i.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    k)
                  )
                    B.postMessage({
                      results: i,
                      workerId: a.WORKER_ID,
                      finished: o,
                    });
                  else if (I(this._config.chunk) && !n) {
                    if (
                      (this._config.chunk(i, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = i = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(i.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(i.errors)),
                      (this._completeResults.meta = i.meta)),
                    this._completed ||
                      !o ||
                      !I(this._config.complete) ||
                      (i && i.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    o || (i && i.meta.paused) || this._nextChunk(),
                    i
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (e) {
                I(this._config.error)
                  ? this._config.error(e)
                  : k &&
                    this._config.error &&
                    B.postMessage({
                      workerId: a.WORKER_ID,
                      error: e,
                      finished: !1,
                    });
              });
          }
          function O(t) {
            var e;
            (t = t || {}).chunkSize || (t.chunkSize = a.RemoteChunkSize),
              re.call(this, t),
              (this._nextChunk = j
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (n) {
                (this._input = n), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((e = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (e.withCredentials = this._config.withCredentials),
                    j ||
                      ((e.onload = ee(this._chunkLoaded, this)),
                      (e.onerror = ee(this._chunkError, this))),
                    e.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !j,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var n,
                      o = this._config.downloadRequestHeaders;
                    for (n in o) e.setRequestHeader(n, o[n]);
                  }
                  var i;
                  this._config.chunkSize &&
                    ((i = this._start + this._config.chunkSize - 1),
                    e.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + i,
                    ));
                  try {
                    e.send(this._config.downloadRequestBody);
                  } catch (u) {
                    this._chunkError(u.message);
                  }
                  j && e.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                e.readyState === 4 &&
                  (e.status < 200 || 400 <= e.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || e.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((n) =>
                            (n = n.getResponseHeader("Content-Range")) !== null
                              ? parseInt(n.substring(n.lastIndexOf("/") + 1))
                              : -1)(e)),
                      this.parseChunk(e.responseText)));
              }),
              (this._chunkError = function (n) {
                (n = e.statusText || n), this._sendError(new Error(n));
              });
          }
          function oe(t) {
            (t = t || {}).chunkSize || (t.chunkSize = a.LocalChunkSize),
              re.call(this, t);
            var e,
              n,
              o = typeof FileReader < "u";
            (this.stream = function (i) {
              (this._input = i),
                (n = i.slice || i.webkitSlice || i.mozSlice),
                o
                  ? (((e = new FileReader()).onload = ee(
                      this._chunkLoaded,
                      this,
                    )),
                    (e.onerror = ee(this._chunkError, this)))
                  : (e = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var i = this._input,
                  u =
                    (this._config.chunkSize &&
                      ((u = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (i = n.call(i, this._start, u))),
                    e.readAsText(i, this._config.encoding));
                o || this._chunkLoaded({ target: { result: u } });
              }),
              (this._chunkLoaded = function (i) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(i.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(e.error);
              });
          }
          function de(t) {
            var e;
            re.call(this, (t = t || {})),
              (this.stream = function (n) {
                return (e = n), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var n, o;
                if (!this._finished)
                  return (
                    (n = this._config.chunkSize),
                    (e = n
                      ? ((o = e.substring(0, n)), e.substring(n))
                      : ((o = e), "")),
                    (this._finished = !e),
                    this.parseChunk(o)
                  );
              });
          }
          function ge(t) {
            re.call(this, (t = t || {}));
            var e = [],
              n = !0,
              o = !1;
            (this.pause = function () {
              re.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                re.prototype.resume.apply(this, arguments),
                  this._input.resume();
              }),
              (this.stream = function (i) {
                (this._input = i),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                o && e.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  e.length ? this.parseChunk(e.shift()) : (n = !0);
              }),
              (this._streamData = ee(function (i) {
                try {
                  e.push(
                    typeof i == "string"
                      ? i
                      : i.toString(this._config.encoding),
                  ),
                    n &&
                      ((n = !1),
                      this._checkIsFinished(),
                      this.parseChunk(e.shift()));
                } catch (u) {
                  this._streamError(u);
                }
              }, this)),
              (this._streamError = ee(function (i) {
                this._streamCleanUp(), this._sendError(i);
              }, this)),
              (this._streamEnd = ee(function () {
                this._streamCleanUp(), (o = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = ee(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function l(t) {
            var e,
              n,
              o,
              i,
              u = Math.pow(2, 53),
              H = -u,
              se = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              ie =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              C = this,
              L = 0,
              d = 0,
              q = !1,
              p = !1,
              y = [],
              c = { data: [], errors: [], meta: {} };
            function G(D) {
              return t.skipEmptyLines === "greedy"
                ? D.join("").trim() === ""
                : D.length === 1 && D[0].length === 0;
            }
            function W() {
              if (
                (c &&
                  o &&
                  (ae(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      a.DefaultDelimiter +
                      "'",
                  ),
                  (o = !1)),
                t.skipEmptyLines &&
                  (c.data = c.data.filter(function (A) {
                    return !G(A);
                  })),
                Q())
              ) {
                let A = function (Z, F) {
                  I(t.transformHeader) && (Z = t.transformHeader(Z, F)),
                    y.push(Z);
                };
                var m = A;
                if (c)
                  if (Array.isArray(c.data[0])) {
                    for (var D = 0; Q() && D < c.data.length; D++)
                      c.data[D].forEach(A);
                    c.data.splice(0, 1);
                  } else c.data.forEach(A);
              }
              function x(A, Z) {
                for (var F = t.header ? {} : [], S = 0; S < A.length; S++) {
                  var v = S,
                    $ = A[S],
                    $ = ((_, N) =>
                      ((z) => (
                        t.dynamicTypingFunction &&
                          t.dynamicTyping[z] === void 0 &&
                          (t.dynamicTyping[z] = t.dynamicTypingFunction(z)),
                        (t.dynamicTyping[z] || t.dynamicTyping) === !0
                      ))(_)
                        ? N === "true" ||
                          N === "TRUE" ||
                          (N !== "false" &&
                            N !== "FALSE" &&
                            (((z) => {
                              if (
                                se.test(z) &&
                                ((z = parseFloat(z)), H < z && z < u)
                              )
                                return 1;
                            })(N)
                              ? parseFloat(N)
                              : ie.test(N)
                                ? new Date(N)
                                : N === ""
                                  ? null
                                  : N))
                        : N)(
                      (v = t.header
                        ? S >= y.length
                          ? "__parsed_extra"
                          : y[S]
                        : v),
                      ($ = t.transform ? t.transform($, v) : $),
                    );
                  v === "__parsed_extra"
                    ? ((F[v] = F[v] || []), F[v].push($))
                    : (F[v] = $);
                }
                return (
                  t.header &&
                    (S > y.length
                      ? ae(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            y.length +
                            " fields but parsed " +
                            S,
                          d + Z,
                        )
                      : S < y.length &&
                        ae(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            y.length +
                            " fields but parsed " +
                            S,
                          d + Z,
                        )),
                  F
                );
              }
              var U;
              c &&
                (t.header || t.dynamicTyping || t.transform) &&
                ((U = 1),
                !c.data.length || Array.isArray(c.data[0])
                  ? ((c.data = c.data.map(x)), (U = c.data.length))
                  : (c.data = x(c.data, 0)),
                t.header && c.meta && (c.meta.fields = y),
                (d += U));
            }
            function Q() {
              return t.header && y.length === 0;
            }
            function ae(D, x, U, m) {
              (D = { type: D, code: x, message: U }),
                m !== void 0 && (D.row = m),
                c.errors.push(D);
            }
            I(t.step) &&
              ((i = t.step),
              (t.step = function (D) {
                (c = D),
                  Q()
                    ? W()
                    : (W(),
                      c.data.length !== 0 &&
                        ((L += D.data.length),
                        t.preview && L > t.preview
                          ? n.abort()
                          : ((c.data = c.data[0]), i(c, C))));
              })),
              (this.parse = function (D, x, U) {
                var m = t.quoteChar || '"',
                  m =
                    (t.newline || (t.newline = this.guessLineEndings(D, m)),
                    (o = !1),
                    t.delimiter
                      ? I(t.delimiter) &&
                        ((t.delimiter = t.delimiter(D)),
                        (c.meta.delimiter = t.delimiter))
                      : ((m = ((A, Z, F, S, v) => {
                          var $, _, N, z;
                          v = v || [
                            ",",
                            "	",
                            "|",
                            ";",
                            a.RECORD_SEP,
                            a.UNIT_SEP,
                          ];
                          for (var be = 0; be < v.length; be++) {
                            for (
                              var R,
                                we = v[be],
                                J = 0,
                                he = 0,
                                Y = 0,
                                te =
                                  ((N = void 0),
                                  new Ie({
                                    comments: S,
                                    delimiter: we,
                                    newline: Z,
                                    preview: 10,
                                  }).parse(A)),
                                me = 0;
                              me < te.data.length;
                              me++
                            )
                              F && G(te.data[me])
                                ? Y++
                                : ((R = te.data[me].length),
                                  (he += R),
                                  N === void 0
                                    ? (N = R)
                                    : 0 < R &&
                                      ((J += Math.abs(R - N)), (N = R)));
                            0 < te.data.length && (he /= te.data.length - Y),
                              (_ === void 0 || J <= _) &&
                                (z === void 0 || z < he) &&
                                1.99 < he &&
                                ((_ = J), ($ = we), (z = he));
                          }
                          return {
                            successful: !!(t.delimiter = $),
                            bestDelimiter: $,
                          };
                        })(
                          D,
                          t.newline,
                          t.skipEmptyLines,
                          t.comments,
                          t.delimitersToGuess,
                        )).successful
                          ? (t.delimiter = m.bestDelimiter)
                          : ((o = !0), (t.delimiter = a.DefaultDelimiter)),
                        (c.meta.delimiter = t.delimiter)),
                    Ce(t));
                return (
                  t.preview && t.header && m.preview++,
                  (e = D),
                  (n = new Ie(m)),
                  (c = n.parse(e, x, U)),
                  W(),
                  q ? { meta: { paused: !0 } } : c || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return q;
              }),
              (this.pause = function () {
                (q = !0),
                  n.abort(),
                  (e = I(t.chunk) ? "" : e.substring(n.getCharIndex()));
              }),
              (this.resume = function () {
                C.streamer._halted
                  ? ((q = !1), C.streamer.parseChunk(e, !0))
                  : setTimeout(C.resume, 3);
              }),
              (this.aborted = function () {
                return p;
              }),
              (this.abort = function () {
                (p = !0),
                  n.abort(),
                  (c.meta.aborted = !0),
                  I(t.complete) && t.complete(c),
                  (e = "");
              }),
              (this.guessLineEndings = function (A, m) {
                A = A.substring(0, 1048576);
                var m = new RegExp(ye(m) + "([^]*?)" + ye(m), "gm"),
                  U = (A = A.replace(m, "")).split("\r"),
                  m = A.split(`
`),
                  A = 1 < m.length && m[0].length < U[0].length;
                if (U.length === 1 || A)
                  return `
`;
                for (var Z = 0, F = 0; F < U.length; F++)
                  U[F][0] ===
                    `
` && Z++;
                return Z >= U.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function ye(t) {
            return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function Ie(t) {
            var e = (t = t || {}).delimiter,
              n = t.newline,
              o = t.comments,
              i = t.step,
              u = t.preview,
              H = t.fastMode,
              se = null,
              ie = !1,
              C = t.quoteChar == null ? '"' : t.quoteChar,
              L = C;
            if (
              (t.escapeChar !== void 0 && (L = t.escapeChar),
              (typeof e != "string" || -1 < a.BAD_DELIMITERS.indexOf(e)) &&
                (e = ","),
              o === e)
            )
              throw new Error("Comment character same as delimiter");
            o === !0
              ? (o = "#")
              : (typeof o != "string" || -1 < a.BAD_DELIMITERS.indexOf(o)) &&
                (o = !1),
              n !==
                `
` &&
                n !== "\r" &&
                n !==
                  `\r
` &&
                (n = `
`);
            var d = 0,
              q = !1;
            (this.parse = function (p, y, c) {
              if (typeof p != "string")
                throw new Error("Input must be a string");
              var G = p.length,
                W = e.length,
                Q = n.length,
                ae = o.length,
                D = I(i),
                x = [],
                U = [],
                m = [],
                A = (d = 0);
              if (!p) return J();
              if (H || (H !== !1 && p.indexOf(C) === -1)) {
                for (var Z = p.split(n), F = 0; F < Z.length; F++) {
                  if (((m = Z[F]), (d += m.length), F !== Z.length - 1))
                    d += n.length;
                  else if (c) return J();
                  if (!o || m.substring(0, ae) !== o) {
                    if (D) {
                      if (((x = []), z(m.split(e)), he(), q)) return J();
                    } else z(m.split(e));
                    if (u && u <= F) return (x = x.slice(0, u)), J(!0);
                  }
                }
                return J();
              }
              for (
                var S = p.indexOf(e, d),
                  v = p.indexOf(n, d),
                  $ = new RegExp(ye(L) + ye(C), "g"),
                  _ = p.indexOf(C, d);
                ;
              )
                if (p[d] === C)
                  for (_ = d, d++; ; ) {
                    if ((_ = p.indexOf(C, _ + 1)) === -1)
                      return (
                        c ||
                          U.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: x.length,
                            index: d,
                          }),
                        R()
                      );
                    if (_ === G - 1) return R(p.substring(d, _).replace($, C));
                    if (C === L && p[_ + 1] === L) _++;
                    else if (C === L || _ === 0 || p[_ - 1] !== L) {
                      S !== -1 && S < _ + 1 && (S = p.indexOf(e, _ + 1));
                      var N = be(
                        (v =
                          v !== -1 && v < _ + 1 ? p.indexOf(n, _ + 1) : v) ===
                          -1
                          ? S
                          : Math.min(S, v),
                      );
                      if (p.substr(_ + 1 + N, W) === e) {
                        m.push(p.substring(d, _).replace($, C)),
                          p[(d = _ + 1 + N + W)] !== C && (_ = p.indexOf(C, d)),
                          (S = p.indexOf(e, d)),
                          (v = p.indexOf(n, d));
                        break;
                      }
                      if (
                        ((N = be(v)),
                        p.substring(_ + 1 + N, _ + 1 + N + Q) === n)
                      ) {
                        if (
                          (m.push(p.substring(d, _).replace($, C)),
                          we(_ + 1 + N + Q),
                          (S = p.indexOf(e, d)),
                          (_ = p.indexOf(C, d)),
                          D && (he(), q))
                        )
                          return J();
                        if (u && x.length >= u) return J(!0);
                        break;
                      }
                      U.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: x.length,
                        index: d,
                      }),
                        _++;
                    }
                  }
                else if (o && m.length === 0 && p.substring(d, d + ae) === o) {
                  if (v === -1) return J();
                  (d = v + Q), (v = p.indexOf(n, d)), (S = p.indexOf(e, d));
                } else if (S !== -1 && (S < v || v === -1))
                  m.push(p.substring(d, S)), (d = S + W), (S = p.indexOf(e, d));
                else {
                  if (v === -1) break;
                  if ((m.push(p.substring(d, v)), we(v + Q), D && (he(), q)))
                    return J();
                  if (u && x.length >= u) return J(!0);
                }
              return R();
              function z(Y) {
                x.push(Y), (A = d);
              }
              function be(Y) {
                var te = 0;
                return (te =
                  Y !== -1 && (Y = p.substring(_ + 1, Y)) && Y.trim() === ""
                    ? Y.length
                    : te);
              }
              function R(Y) {
                return (
                  c ||
                    (Y === void 0 && (Y = p.substring(d)),
                    m.push(Y),
                    (d = G),
                    z(m),
                    D && he()),
                  J()
                );
              }
              function we(Y) {
                (d = Y), z(m), (m = []), (v = p.indexOf(n, d));
              }
              function J(Y) {
                if (t.header && !y && x.length && !ie) {
                  var te = x[0],
                    me = Object.create(null),
                    Te = new Set(te);
                  let Ae = !1;
                  for (let Ee = 0; Ee < te.length; Ee++) {
                    let ce = te[Ee];
                    if (
                      me[
                        (ce = I(t.transformHeader)
                          ? t.transformHeader(ce, Ee)
                          : ce)
                      ]
                    ) {
                      let Se,
                        g = me[ce];
                      for (; (Se = ce + "_" + g), g++, Te.has(Se); );
                      Te.add(Se),
                        (te[Ee] = Se),
                        me[ce]++,
                        (Ae = !0),
                        ((se = se === null ? {} : se)[Se] = ce);
                    } else (me[ce] = 1), (te[Ee] = ce);
                    Te.add(ce);
                  }
                  Ae && console.warn("Duplicate headers found and renamed."),
                    (ie = !0);
                }
                return {
                  data: x,
                  errors: U,
                  meta: {
                    delimiter: e,
                    linebreak: n,
                    aborted: q,
                    truncated: !!Y,
                    cursor: A + (y || 0),
                    renamedHeaders: se,
                  },
                };
              }
              function he() {
                i(J()), (x = []), (U = []);
              }
            }),
              (this.abort = function () {
                q = !0;
              }),
              (this.getCharIndex = function () {
                return d;
              });
          }
          function _e(t) {
            var e = t.data,
              n = f[e.workerId],
              o = !1;
            if (e.error) n.userError(e.error, e.file);
            else if (e.results && e.results.data) {
              var i = {
                abort: function () {
                  (o = !0),
                    je(e.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: Oe,
                resume: Oe,
              };
              if (I(n.userStep)) {
                for (
                  var u = 0;
                  u < e.results.data.length &&
                  (n.userStep(
                    {
                      data: e.results.data[u],
                      errors: e.results.errors,
                      meta: e.results.meta,
                    },
                    i,
                  ),
                  !o);
                  u++
                );
                delete e.results;
              } else
                I(n.userChunk) &&
                  (n.userChunk(e.results, i, e.file), delete e.results);
            }
            e.finished && !o && je(e.workerId, e.results);
          }
          function je(t, e) {
            var n = f[t];
            I(n.userComplete) && n.userComplete(e), n.terminate(), delete f[t];
          }
          function Oe() {
            throw new Error("Not implemented.");
          }
          function Ce(t) {
            if (typeof t != "object" || t === null) return t;
            var e,
              n = Array.isArray(t) ? [] : {};
            for (e in t) n[e] = Ce(t[e]);
            return n;
          }
          function ee(t, e) {
            return function () {
              t.apply(e, arguments);
            };
          }
          function I(t) {
            return typeof t == "function";
          }
          return (
            (a.parse = function (t, e) {
              var n = (e = e || {}).dynamicTyping || !1;
              if (
                (I(n) && ((e.dynamicTypingFunction = n), (n = {})),
                (e.dynamicTyping = n),
                (e.transform = !!I(e.transform) && e.transform),
                !e.worker || !a.WORKERS_SUPPORTED)
              )
                return (
                  (n = null),
                  a.NODE_STREAM_INPUT,
                  typeof t == "string"
                    ? ((t = ((o) =>
                        o.charCodeAt(0) !== 65279 ? o : o.slice(1))(t)),
                      (n = new (e.download ? O : de)(e)))
                    : t.readable === !0 && I(t.read) && I(t.on)
                      ? (n = new ge(e))
                      : ((B.File && t instanceof File) ||
                          t instanceof Object) &&
                        (n = new oe(e)),
                  n.stream(t)
                );
              ((n = (() => {
                var o;
                return (
                  !!a.WORKERS_SUPPORTED &&
                  ((o = (() => {
                    var i = B.URL || B.webkitURL || null,
                      u = fe.toString();
                    return (
                      a.BLOB_URL ||
                      (a.BLOB_URL = i.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            u,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((o = new B.Worker(o)).onmessage = _e),
                  (o.id = Pe++),
                  (f[o.id] = o))
                );
              })()).userStep = e.step),
                (n.userChunk = e.chunk),
                (n.userComplete = e.complete),
                (n.userError = e.error),
                (e.step = I(e.step)),
                (e.chunk = I(e.chunk)),
                (e.complete = I(e.complete)),
                (e.error = I(e.error)),
                delete e.worker,
                n.postMessage({ input: t, config: e, workerId: n.id });
            }),
            (a.unparse = function (t, e) {
              var n = !1,
                o = !0,
                i = ",",
                u = `\r
`,
                H = '"',
                se = H + H,
                ie = !1,
                C = null,
                L = !1,
                d =
                  ((() => {
                    if (typeof e == "object") {
                      if (
                        (typeof e.delimiter != "string" ||
                          a.BAD_DELIMITERS.filter(function (y) {
                            return e.delimiter.indexOf(y) !== -1;
                          }).length ||
                          (i = e.delimiter),
                        (typeof e.quotes != "boolean" &&
                          typeof e.quotes != "function" &&
                          !Array.isArray(e.quotes)) ||
                          (n = e.quotes),
                        (typeof e.skipEmptyLines != "boolean" &&
                          typeof e.skipEmptyLines != "string") ||
                          (ie = e.skipEmptyLines),
                        typeof e.newline == "string" && (u = e.newline),
                        typeof e.quoteChar == "string" && (H = e.quoteChar),
                        typeof e.header == "boolean" && (o = e.header),
                        Array.isArray(e.columns))
                      ) {
                        if (e.columns.length === 0)
                          throw new Error("Option columns is empty");
                        C = e.columns;
                      }
                      e.escapeChar !== void 0 && (se = e.escapeChar + H),
                        e.escapeFormulae instanceof RegExp
                          ? (L = e.escapeFormulae)
                          : typeof e.escapeFormulae == "boolean" &&
                            e.escapeFormulae &&
                            (L = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(ye(H), "g"));
              if (
                (typeof t == "string" && (t = JSON.parse(t)), Array.isArray(t))
              ) {
                if (!t.length || Array.isArray(t[0])) return q(null, t, ie);
                if (typeof t[0] == "object")
                  return q(C || Object.keys(t[0]), t, ie);
              } else if (typeof t == "object")
                return (
                  typeof t.data == "string" && (t.data = JSON.parse(t.data)),
                  Array.isArray(t.data) &&
                    (t.fields || (t.fields = (t.meta && t.meta.fields) || C),
                    t.fields ||
                      (t.fields = Array.isArray(t.data[0])
                        ? t.fields
                        : typeof t.data[0] == "object"
                          ? Object.keys(t.data[0])
                          : []),
                    Array.isArray(t.data[0]) ||
                      typeof t.data[0] == "object" ||
                      (t.data = [t.data])),
                  q(t.fields || [], t.data || [], ie)
                );
              throw new Error("Unable to serialize unrecognized input");
              function q(y, c, G) {
                var W = "",
                  Q =
                    (typeof y == "string" && (y = JSON.parse(y)),
                    typeof c == "string" && (c = JSON.parse(c)),
                    Array.isArray(y) && 0 < y.length),
                  ae = !Array.isArray(c[0]);
                if (Q && o) {
                  for (var D = 0; D < y.length; D++)
                    0 < D && (W += i), (W += p(y[D], D));
                  0 < c.length && (W += u);
                }
                for (var x = 0; x < c.length; x++) {
                  var U = (Q ? y : c[x]).length,
                    m = !1,
                    A = Q ? Object.keys(c[x]).length === 0 : c[x].length === 0;
                  if (
                    (G &&
                      !Q &&
                      (m =
                        G === "greedy"
                          ? c[x].join("").trim() === ""
                          : c[x].length === 1 && c[x][0].length === 0),
                    G === "greedy" && Q)
                  ) {
                    for (var Z = [], F = 0; F < U; F++) {
                      var S = ae ? y[F] : F;
                      Z.push(c[x][S]);
                    }
                    m = Z.join("").trim() === "";
                  }
                  if (!m) {
                    for (var v = 0; v < U; v++) {
                      0 < v && !A && (W += i);
                      var $ = Q && ae ? y[v] : v;
                      W += p(c[x][$], v);
                    }
                    x < c.length - 1 && (!G || (0 < U && !A)) && (W += u);
                  }
                }
                return W;
              }
              function p(y, c) {
                var G, W;
                return y == null
                  ? ""
                  : y.constructor === Date
                    ? JSON.stringify(y).slice(1, 25)
                    : ((W = !1),
                      L &&
                        typeof y == "string" &&
                        L.test(y) &&
                        ((y = "'" + y), (W = !0)),
                      (G = y.toString().replace(d, se)),
                      (W =
                        W ||
                        n === !0 ||
                        (typeof n == "function" && n(y, c)) ||
                        (Array.isArray(n) && n[c]) ||
                        ((Q, ae) => {
                          for (var D = 0; D < ae.length; D++)
                            if (-1 < Q.indexOf(ae[D])) return !0;
                          return !1;
                        })(G, a.BAD_DELIMITERS) ||
                        -1 < G.indexOf(i) ||
                        G.charAt(0) === " " ||
                        G.charAt(G.length - 1) === " ")
                        ? H + G + H
                        : G);
              }
            }),
            (a.RECORD_SEP = ""),
            (a.UNIT_SEP = ""),
            (a.BYTE_ORDER_MARK = "\uFEFF"),
            (a.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              a.BYTE_ORDER_MARK,
            ]),
            (a.WORKERS_SUPPORTED = !j && !!B.Worker),
            (a.NODE_STREAM_INPUT = 1),
            (a.LocalChunkSize = 10485760),
            (a.RemoteChunkSize = 5242880),
            (a.DefaultDelimiter = ","),
            (a.Parser = Ie),
            (a.ParserHandle = l),
            (a.NetworkStreamer = O),
            (a.FileStreamer = oe),
            (a.StringStreamer = de),
            (a.ReadableStreamStreamer = ge),
            B.jQuery &&
              ((M = B.jQuery).fn.parse = function (t) {
                var e = t.config || {},
                  n = [];
                return (
                  this.each(function (u) {
                    if (
                      !(
                        M(this).prop("tagName").toUpperCase() === "INPUT" &&
                        M(this).attr("type").toLowerCase() === "file" &&
                        B.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var H = 0; H < this.files.length; H++)
                      n.push({
                        file: this.files[H],
                        inputElem: this,
                        instanceConfig: M.extend({}, e),
                      });
                  }),
                  o(),
                  this
                );
                function o() {
                  if (n.length === 0) I(t.complete) && t.complete();
                  else {
                    var u,
                      H,
                      se,
                      ie,
                      C = n[0];
                    if (I(t.before)) {
                      var L = t.before(C.file, C.inputElem);
                      if (typeof L == "object") {
                        if (L.action === "abort")
                          return (
                            (u = "AbortError"),
                            (H = C.file),
                            (se = C.inputElem),
                            (ie = L.reason),
                            void (I(t.error) && t.error({ name: u }, H, se, ie))
                          );
                        if (L.action === "skip") return void i();
                        typeof L.config == "object" &&
                          (C.instanceConfig = M.extend(
                            C.instanceConfig,
                            L.config,
                          ));
                      } else if (L === "skip") return void i();
                    }
                    var d = C.instanceConfig.complete;
                    (C.instanceConfig.complete = function (q) {
                      I(d) && d(q, C.file, C.inputElem), i();
                    }),
                      a.parse(C.file, C.instanceConfig);
                  }
                }
                function i() {
                  n.splice(0, 1), o();
                }
              }),
            k &&
              (B.onmessage = function (t) {
                (t = t.data),
                  a.WORKER_ID === void 0 && t && (a.WORKER_ID = t.workerId),
                  typeof t.input == "string"
                    ? B.postMessage({
                        workerId: a.WORKER_ID,
                        results: a.parse(t.input, t.config),
                        finished: !0,
                      })
                    : ((B.File && t.input instanceof File) ||
                        t.input instanceof Object) &&
                      (t = a.parse(t.input, t.config)) &&
                      B.postMessage({
                        workerId: a.WORKER_ID,
                        results: t,
                        finished: !0,
                      });
              }),
            ((O.prototype = Object.create(re.prototype)).constructor = O),
            ((oe.prototype = Object.create(re.prototype)).constructor = oe),
            ((de.prototype = Object.create(de.prototype)).constructor = de),
            ((ge.prototype = Object.create(re.prototype)).constructor = ge),
            a
          );
        });
      },
    },
  ]);
})();
