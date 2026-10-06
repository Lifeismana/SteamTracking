/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [19433],
    {
      40648: (St, is, d) => {
        "use strict";
        d.d(is, { y5: () => Cs, c2: () => as });
        var B = d(35038),
          Kr = d(37400),
          Q = d(3367),
          X = d(58632),
          c = d.n(X),
          Ct = d(90626),
          K = d(20194),
          y = d(10349),
          Rt = d(40497),
          bs = d(71742),
          e = d(13018),
          L = d(60298),
          ts = d(98609),
          os = d(67705);
        class us {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              us.s_Singleton ||
                ((us.s_Singleton = new us()), us.s_Singleton.Init()),
              us.s_Singleton
            );
          }
          Init() {
            const _t = (0, os.Tc)(
              "partnerbrowse_webapi_token",
              "application_config",
            );
            (0, bs.wT)(!!_t, "require partnerbrowse_webapi_token"),
              (this.m_steamInterface = (0, L.p)(
                new e.D(ts.TS.WEBAPI_BASE_URL, _t),
              ));
          }
        }
        function ws() {
          return us.Get().GetPromotionTransport().GetServiceTransport();
        }
        function as(ss) {
          const _t = ws(),
            ls = Ct.useContext(Ss);
          return (0, K.I)(rl(ls, _t, ss));
        }
        function Es(ss) {
          const _t = usePartnerBrowseTransport(),
            ls = React.useContext(Ss);
          return useQueries({ queries: ss.map((ys) => rl(ls, _t, ys)) });
        }
        function Cs(ss) {
          return Rt.L.getQueryData([
            "StoreItemCountryRestriction",
            (0, y.wD)(ss),
          ]);
        }
        function tl(ss) {
          const { loadStoreItemCountryRestriction: _t, children: ls } = ss,
            ys = React.useMemo(
              () => ({ loadStoreItemCountryRestriction: _t }),
              [_t],
            );
          return React.createElement(Ss.Provider, { value: ys }, ls);
        }
        const Ss = Ct.createContext({
          loadStoreItemCountryRestriction: async (ss, _t) =>
            await sl(_t).load(ss),
        });
        function rl(ss, _t, ls) {
          return {
            queryKey: ["StoreItemCountryRestriction", (0, y.wD)(ls)],
            queryFn: () => ss.loadStoreItemCountryRestriction(ls, _t),
            enabled: !!ls,
          };
        }
        let gs;
        function sl(ss) {
          return (
            gs ||
              (gs = new (c())(
                async (_t) => {
                  const ls = B.w.Init(Kr.zo);
                  ls.Body().set_ids(_t.map((_s) => Q.O4.fromObject(_s)));
                  const ys = await Kr.BT.GetCountryRestrictions(ss, ls);
                  if (!ys.BSuccess())
                    throw `Failed to call store Item Country Restriction with details: ${ys.GetErrorMessage()}`;
                  const bl = new Map();
                  return (
                    ys
                      .Body()
                      .results()
                      .forEach((_s) => {
                        const wl = _s.toObject();
                        bl.set((0, y.wD)(wl.id), wl);
                      }),
                    _t.map((_s) => bl.get((0, y.wD)(_s)) ?? null)
                  );
                },
                { maxBatchSize: 100, cache: !1 },
              )),
            gs
          );
        }
      },
      1300: (St, is, d) => {
        "use strict";
        d.r(is), d.d(is, { default: () => cB });
        var B = d(7850),
          Kr = d(82791),
          Q = d(92757),
          X = d(96135),
          c = d(90626),
          Ct = d(3166),
          K = d(94794),
          y = d(18210),
          Rt = d(58534),
          bs = d(32288),
          e = d(35038),
          L = d(85599),
          ts = d(36707),
          os = d(68312),
          us = d(8323),
          ws = d(2801),
          as = d(36174),
          Es = d(84676),
          Cs = d(40648),
          tl = d(41635),
          Ss = d(29522),
          rl = d(40358),
          gs = d(72609);
        function sl(m, r) {
          const a = (0, Ss.$5)(r),
            { data: s } = (0, rl.J$)(a);
          return s && s.related_items
            ? (s.related_items.demo_appid &&
                s.related_items.demo_appid.includes(m)) ||
                (s.related_items.standalone_demo_appid &&
                  s.related_items.standalone_demo_appid.includes(m))
            : !1;
        }
        function ss(m) {
          const { parentAppId: r } = m;
          return (0, B.jsxs)("div", {
            className: (0, ts.A)(K.Warning, K.Critical),
            children: [
              (0, B.jsx)("p", {
                children: (0, y.we)(
                  "#App_Landing_DemoWishlist_Demo_NotVisible",
                ),
              }),
              (0, B.jsx)("p", {
                children: (0, y.oW)(
                  "#App_Landing_DemoWishlist_Demo_NotVisible_Publish",
                  (0, B.jsx)("a", {
                    href: `${gs.TS.PARTNER_BASE_URL}admin/game/editbyappid/${r}?activetab=tab_specialsettings#associated_demos`,
                    target: "_blank",
                  }),
                ),
              }),
            ],
          });
        }
        const _t = 7,
          ls = 7;
        function ys(m) {
          const { demoAppID: r, parentAppId: a } = m,
            [s, b] = c.useState(!1),
            [w, g] = c.useState(void 0),
            n = sl(r, a),
            [x, F] = c.useState(void 0),
            [U, I] = c.useState(0),
            $ = c.useCallback(() => I((k) => k + 1), []),
            Gt = (0, os.KV)();
          c.useEffect(() => {
            const k = new AbortController();
            return (
              (async () => {
                b(!1), g(void 0);
                const O = e.w.Init(bs.J6);
                O.Body().set_demo_appid(r), O.Body().set_appid(a);
                const f = await bs.nd.GetWishlistDemoEmailStatus(Gt, O);
                k.signal.aborted ||
                  (f.BSuccess() &&
                    (b(f.Body().can_fire()), g(f.Body().time_staged())));
              })(),
              () => k.abort()
            );
          }, [Gt, r, a, U]),
            c.useEffect(() => {
              let k = window.AppLandingRefreshCallbacks;
              k || ((k = new us.lu()), (window.AppLandingRefreshCallbacks = k));
              const Et = k.Register($);
              return () => Et.Unregister();
            }, [$]);
          const ot = s || x !== void 0,
            E = w + _t * as.Kp.PerDay,
            rs = !s && w && new Date(E * 1e3) > new Date();
          if (ot || rs) {
            const k = `${Ct.TS.PARTNER_BASE_URL}doc/marketing/wishlist`;
            return (0, B.jsxs)("div", {
              className: K.DemoWishlistCtn,
              children: [
                (0, B.jsxs)("div", {
                  className: K.Header,
                  children: [
                    (0, B.jsx)("h2", {
                      children: (0, y.we)("#App_Landing_DemoWishlist_Title"),
                    }),
                    (0, B.jsx)("a", {
                      className: K.DocumentationLink,
                      href: k,
                      children: (0, y.we)("#App_Landing_DemoWishlist_Link"),
                    }),
                  ],
                }),
                ot &&
                  (0, B.jsx)(bl, {
                    demoAppID: r,
                    parentAppId: a,
                    bSendEmailsSucceeded: x,
                    setSendEmailsSucceeded: F,
                    bIsDemoVisible: n,
                  }),
                ot && !n && (0, B.jsx)(ss, { demoAppID: r, parentAppId: a }),
                ot && rs && (0, B.jsx)("hr", { className: K.BothSeparator }),
                rs &&
                  (0, B.jsx)(wl, {
                    parentAppId: a,
                    timeStaged: w,
                    noticeVisibleToDate: E,
                  }),
              ],
            });
          }
        }
        function bl(m) {
          const {
              demoAppID: r,
              parentAppId: a,
              bIsDemoVisible: s,
              bSendEmailsSucceeded: b,
              setSendEmailsSucceeded: w,
            } = m,
            [g, n] = c.useState(!1),
            [x, F] = c.useState(!1),
            U = (0, os.KV)(),
            I = c.useCallback(async () => {
              F(!1), n(!0);
              try {
                const E = e.w.Init(bs.KP);
                E.Body().set_demo_appid(r), E.Body().set_appid(a);
                const rs = await bs.nd.QueueWishlistDemoEmailToFire(U, E);
                w(rs.BSuccess());
              } finally {
                n(!1);
              }
            }, [r, a, U, w]),
            { bLoading: $, rgWarnings: Gt } = _s(a, r),
            ot = Gt.every((E) => !E.bCritical);
          return (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsx)("div", {
                className: K.SubTitle,
                children: (0, y.we)("#App_Landing_DemoWishlist_SubTitle"),
              }),
              (0, B.jsx)("div", {
                className: K.Description,
                children: (0, B.jsx)("p", {
                  children: (0, y.we)("#App_Landing_DemoWishlist_Desc"),
                }),
              }),
              $
                ? (0, B.jsx)(L.t, {})
                : (0, B.jsxs)(B.Fragment, {
                    children: [
                      Gt.map((E) =>
                        (0, B.jsx)(
                          "div",
                          {
                            className: (0, ts.A)(
                              K.Warning,
                              E.bCritical && K.Critical,
                            ),
                            children: (0, B.jsx)("p", { children: E.sText }),
                          },
                          E.sText,
                        ),
                      ),
                      b === void 0 &&
                        (0, B.jsx)(B.Fragment, {
                          children: (0, B.jsxs)("div", {
                            className: K.ButtonRow,
                            children: [
                              (0, B.jsx)(Rt.$n, {
                                className: (0, ts.A)(
                                  "btn_green_steamui btn_border_2px btn_medium",
                                  K.ButtonDemoWishlistEmails,
                                ),
                                disabled: g || !ot || !s,
                                onClick: () => F(!0),
                                children: (0, B.jsx)("span", {
                                  children: (0, y.we)(
                                    "#App_Landing_DemoWishlist_SendEmailsButton",
                                  ),
                                }),
                              }),
                              g &&
                                (0, B.jsx)(L.t, {
                                  className: K.InProgressThrobber,
                                  size: "small",
                                }),
                            ],
                          }),
                        }),
                      b !== void 0 &&
                        (0, B.jsxs)("div", {
                          className: K.ButtonRow,
                          children: [
                            b &&
                              (0, B.jsx)("div", {
                                className: K.DemoWishlistSendSucceeded,
                                children: (0, y.we)(
                                  "#App_Landing_DemoWishlist_SendEmails_Succeeded",
                                ),
                              }),
                            !b &&
                              (0, B.jsx)("div", {
                                className: K.DemoWishlistSendFailed,
                                children: (0, y.we)(
                                  "#App_Landing_DemoWishlist_SendEmails_Failed",
                                ),
                              }),
                          ],
                        }),
                    ],
                  }),
              x &&
                (0, B.jsxs)(ws.mt, {
                  active: !0,
                  className: K.ControllerWizardModal,
                  children: [
                    (0, B.jsx)("h1", {
                      children: (0, y.we)(
                        "#App_Landing_DemoWishlist_Dialog_Header",
                      ),
                    }),
                    (0, B.jsxs)(Rt.nB, {
                      className: K.WizardBody,
                      children: [
                        (0, B.jsx)("div", {
                          children: (0, y.we)(
                            "#App_Landing_DemoWishlist_Dialog_Desc",
                          ),
                        }),
                        (0, B.jsx)("h2", {
                          children: (0, y.we)(
                            "#App_Landing_DemoWishlist_Dialog_ListTitle",
                          ),
                        }),
                        (0, B.jsx)("ul", {
                          children: (0, y.oW)(
                            "#App_Landing_DemoWishlist_Dialog_List",
                            (0, B.jsx)("li", {}),
                            (0, B.jsx)("b", {}),
                          ),
                        }),
                      ],
                    }),
                    (0, B.jsx)(Rt.CB, {
                      onOK: I,
                      strOKText: (0, y.we)(
                        "#App_Landing_DemoWishlist_Dialog_Confirm",
                      ),
                      onCancel: () => F(!1),
                      strCancelText: (0, y.we)(
                        "#App_Landing_DemoWishlist_Dialog_Cancel",
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function _s(m, r) {
          const a = (0, Cs.c2)({ appid: m }),
            s = (0, Cs.c2)({ appid: r }),
            [b] = (0, Es.t7)(m, { include_release: !0 }),
            w = a.isLoading || s.isLoading,
            g = a.isSuccess && s.isSuccess,
            [n, x, F, U] = c.useMemo(() => {
              if (!g) return [];
              const Y = (Bs) =>
                tl.lf(
                  Bs?.map((el) => el.toUpperCase()),
                  !0,
                );
              return [
                Y(a.data.allowed_countries),
                Y(a.data.restricted_countries)?.filter((Bs) => Bs != "XC"),
                Y(s.data.allowed_countries),
                Y(s.data.restricted_countries)?.filter((Bs) => Bs != "XC"),
              ];
            }, [g, s, a]);
          if (w) return { bLoading: !0, rgWarnings: [] };
          if (!g)
            return {
              bLoading: !1,
              rgWarnings: [
                {
                  sText: (0, y.we)(
                    "#App_Landing_DemoWishlist_CountryLoad_Failed",
                  ),
                  bCritical: !0,
                },
              ],
            };
          const I = [],
            $ = b && b.GetReleaseDateRTime(!0);
          $ &&
            $ > new Date().getTime() / 1e3 &&
            $ < new Date().getTime() / 1e3 + 14 * as.Kp.PerDay &&
            I.push({
              sText: (0, y.we)(
                "#App_Landing_DemoWishlist_ParentAppWarning",
                b.GetFormattedSteamReleaseDate(),
              ),
            });
          const ot = (Y, Bs) =>
              Y.length == 0 && Bs.length == 0
                ? "unrestricted"
                : Y.length > 0
                  ? "allow"
                  : "deny",
            E = ot(n, x),
            rs = ot(F, U),
            k = (Y, Bs) =>
              Y.length == 0 && Bs.length == 0
                ? (0, y.we)(
                    "#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Unrestricted",
                  )
                : Y.length > 0
                  ? (0, y.we)(
                      "#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Allow",
                      Y.join(", "),
                    )
                  : (0, y.we)(
                      "#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Deny",
                      Bs.join(", "),
                    ),
            Et = k(n, x),
            O = k(F, U);
          return (
            E == "unrestricted" ||
            rs == "unrestricted" ||
            n.length > 0 == F.length > 0
              ? Et != O &&
                I.push({
                  sText: (0, y.we)(
                    "#App_Landing_DemoWishlist_CountryRestrictions_Mismatch",
                    Et,
                    O,
                  ),
                })
              : I.push({
                  sText: (0, y.we)(
                    "#App_Landing_DemoWishlist_CountryRestrictionTypes_Mismatch",
                    Et,
                    O,
                  ),
                  bCritical: !0,
                }),
            { bLoading: !1, rgWarnings: I }
          );
        }
        function wl(m) {
          const { parentAppId: r, timeStaged: a, noticeVisibleToDate: s } = m,
            b = (U) =>
              `${U.getFullYear()}-${String(U.getMonth() + 1).padStart(2, "0")}-${String(U.getDate()).padStart(2, "0")}`,
            w = b(new Date((a - ls * as.Kp.PerDay) * 1e3)),
            g = b(new Date()),
            n = new Intl.DateTimeFormat(navigator.language, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(a * 1e3),
            x = new Intl.DateTimeFormat(navigator.language, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(s * 1e3),
            F = `${Ct.TS.STATS_BASE_URL}app/wishlist/${r}/?dateStart=${w}&dateEnd=${g}`;
          return (0, B.jsxs)("div", {
            className: K.Description,
            children: [
              (0, B.jsx)("p", {
                children: (0, y.we)(
                  "#App_Landing_DemoWishlist_SentRecently_Desc",
                  n,
                ),
              }),
              (0, B.jsx)("p", {
                children: (0, B.jsx)("a", {
                  href: F,
                  children: (0, y.we)(
                    "#App_Landing_DemoWishlist_SentRecently_ViewStats",
                  ),
                }),
              }),
              (0, B.jsx)("p", {
                className: K.Notice,
                children: (0, y.we)(
                  "#App_Landing_DemoWishlist_SentRecently_Notice",
                  x,
                ),
              }),
            ],
          });
        }
        var El = d(93964),
          Il = d(72604),
          Sl = d(41735),
          yl = d.n(Sl),
          $l = d(20194),
          ll = d(98609);
        function Rl(m, r, a) {
          const { isLoading: s, data: b } = (0, $l.I)({
            queryKey: ["usePartnerFinancialDailySummary", m, r, a],
            queryFn: async () => {
              const w = { partnerid: m, pastdays: r, appid: a },
                g = `${ll.TS.PARTNER_BASE_URL}financial/ajaxgetpartnersummary`,
                n = await yl().get(g, { params: w, withCredentials: !0 });
              return n?.data?.success != Il.R
                ? { daily_sales: [], summary_sales: {} }
                : n.data.data;
            },
            enabled: !!m && r >= 1,
          });
          return s ? null : b;
        }
        var ol = d(32671),
          Cl = d(61141),
          _l = d(58661),
          rm = d(73077),
          im = d(30230),
          am = d(20283),
          tm = d(90150),
          sm = d(25792),
          lm = d(71421),
          ul = d(58832),
          Z = d(19976),
          mm = d(24642);
        function Bm(m) {
          const { nPartnerID: r, nAppID: a } = m;
          return ll.iA.is_support
            ? (0, B.jsx)(em, { nPartnerID: r, nAppID: a })
            : null;
        }
        function em(m) {
          const { nPartnerID: r, nAppID: a } = m,
            [s, b] = (0, c.useState)(90),
            w = Rl(r, s, a);
          return !w || w.daily_sales?.length == 0
            ? null
            : (0, B.jsxs)("div", {
                className: (0, ts.A)(Z.AppDashboard, "valveOutline padded"),
                children: [
                  (0, B.jsx)("p", {
                    className: "valveh2",
                    children: "Valve Only:",
                  }),
                  (0, B.jsx)(wm, { nDaysInThePast: s, fnUpdateDaysInPast: b }),
                  (0, B.jsx)(zm, { stats: w }),
                  (0, B.jsx)(dm, { stats: w }),
                ],
              });
        }
        const bm = [
          { label: (0, y.we)("#PartnerStats_DayWeek"), data: 7 },
          { label: (0, y.we)("#PartnerStats_DayMonth"), data: 30 },
          { label: (0, y.we)("#PartnerStats_DayPeriod"), data: 90 },
        ];
        function wm(m) {
          const { nDaysInThePast: r, fnUpdateDaysInPast: a } = m;
          return (0, B.jsxs)("div", {
            className: Z.ModuleCtn,
            children: [
              (0, B.jsxs)("div", {
                className: Z.LeftAlign,
                children: [
                  (0, B.jsx)("div", {
                    className: Z.ModuleTitle,
                    children: (0, y.we)("#PartnerStats_DayLabel"),
                  }),
                  (0, B.jsx)(Rt.m, {
                    layout: "inline",
                    label: null,
                    rgOptions: bm,
                    selectedOption: r,
                    onChange: (s) => a(s.data),
                  }),
                ],
              }),
              (0, B.jsx)("div", {
                className: Z.ViewDetailLink,
                children: (0, B.jsx)("a", {
                  href: "#",
                  children: (0, y.we)("#PartnerStats_ViewDetail"),
                }),
              }),
            ],
          });
        }
        const um = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        });
        function Mm(...m) {
          let r = 0;
          return (
            m.forEach((a) => {
              r += Number.parseInt(a || "0") / 1e4;
            }),
            um.format(r)
          );
        }
        function zm(m) {
          const { stats: r } = m;
          return (0, B.jsxs)("div", {
            className: Z.HeaderCtn,
            children: [
              (0, B.jsxs)("div", {
                className: Z.StatGroup,
                children: [
                  (0, B.jsx)("div", {
                    className: Z.Header,
                    children: (0, y.we)("#PartnerStats_Header_Revenue"),
                  }),
                  (0, B.jsx)("div", {
                    className: Z.Numerals,
                    children: Mm(r.summary_sales.total_gross_sales_usdx100),
                  }),
                ],
              }),
              (0, B.jsxs)("div", {
                className: Z.StatGroup,
                children: [
                  (0, B.jsx)("div", {
                    className: Z.Header,
                    children: (0, y.we)("#PartnerStats_Header_Units"),
                  }),
                  (0, B.jsx)("div", {
                    className: Z.Numerals,
                    children: (0, mm.D)(
                      Number.parseInt(
                        r.summary_sales.steam_gross_units_sold || "0",
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function dm(m) {
          const { stats: r } = m,
            a = "total_gross_sales_usdx100",
            [s, b, w] = (0, c.useMemo)(() => {
              if (!r || r.daily_sales?.length == 0) return [0, 0, []];
              const g = ym(r.daily_sales, a);
              let n = 0,
                x = 0;
              return (
                g.forEach((F) => {
                  F.partner_stats_value > n && (n = F.partner_stats_value),
                    (x += F.partner_stats_value);
                }),
                [n, x, g.sort((F, U) => F.rtime - U.rtime)]
              );
            }, [r, a]);
          return !r || w.length == 0
            ? null
            : (0, B.jsx)("div", {
                className: Z.DashStatsContainer,
                children: (0, B.jsx)("div", {
                  className: Z.Chart,
                  children: (0, B.jsx)(sm.tH, {
                    children: (0, B.jsx)(cm, { Data: w, nPeak: s }),
                  }),
                }),
              });
        }
        function gm(m, r) {
          return m[r];
        }
        function ym(m, r) {
          const a = new Map();
          return (
            m.forEach((s) => {
              const b = s.rtime_date,
                w = Number.parseInt(gm(s.daily_summary_sales, r));
              w &&
                a.set(b, {
                  partner_stats_value: r.includes("usd") ? w / 1e4 : w,
                  rtime: b,
                  top_app_sales: s.top_app_sales,
                });
            }),
            Array.from(a.values())
          );
        }
        const cm = c.memo((m) => {
          const { Data: r, nPeak: a } = m,
            s = (0, c.useCallback)(
              (b, w) =>
                r.length > 20
                  ? r[w]?.partner_stats_value && w % 7 === 0
                    ? new Date(r[w].rtime * 1e3).toLocaleDateString(
                        y.pf.GetPreferredLocales(),
                        { month: "short", day: "numeric" },
                      )
                    : ""
                  : r[w]?.partner_stats_value
                    ? new Date(r[w].rtime * 1e3).toLocaleDateString(
                        y.pf.GetPreferredLocales(),
                        { month: "short", day: "numeric" },
                      )
                    : "",
              [r],
            );
          return (0, B.jsx)(ol.u, {
            width: "100%",
            height: "100%",
            children: (0, B.jsxs)(Cl.X, {
              data: r,
              margin: { top: 25, left: 0, right: 0, bottom: 0 },
              barGap: 10,
              children: [
                (0, B.jsx)("defs", {
                  children: (0, B.jsxs)("linearGradient", {
                    id: "bar_linear",
                    x1: "0",
                    x2: "0",
                    y1: "0",
                    y2: "1",
                    children: [
                      (0, B.jsx)("stop", { stopColor: "#1A9FFF" }),
                      (0, B.jsx)("stop", {
                        offset: "1",
                        stopColor: "#1A9FFF",
                        stopOpacity: "1",
                      }),
                    ],
                  }),
                }),
                (0, B.jsx)(_l.d, { vertical: !1, stroke: "#a0aab6" }),
                (0, B.jsx)(rm.h, {
                  tickFormatter: ul.Z2,
                  tick: { fill: "white" },
                  axisLine: !1,
                  orientation: "right",
                }),
                (0, B.jsx)(im.m, { content: (0, B.jsx)(Wm, {}) }),
                (0, B.jsx)(am.y, {
                  dataKey: "partner_stats_value",
                  fill: "url( #bar_linear )",
                }),
                (0, B.jsx)(tm.W, {
                  interval: 0,
                  tick: (0, B.jsx)(jm, {}),
                  tickFormatter: s,
                }),
              ],
            }),
          });
        });
        function jm(m) {
          const { x: r, y: a, payload: s } = m,
            b = m.tickFormatter(s.value, s.index);
          return (0, B.jsx)("g", {
            transform: `translate(${r},${a})`,
            children: (0, B.jsx)("text", {
              x: 0,
              y: 0,
              dy: 16,
              textAnchor: "middle",
              fill: "#FFFFFF",
              transform: "rotate(0)",
              fontSize: "11px",
              children: b,
            }),
          });
        }
        function Wm({ active: m, payload: r }) {
          if (m && r && r.length) {
            const a = r[0].payload,
              s = a.partner_stats_value;
            let b = s;
            return (
              a.top_app_sales.forEach((w) => {
                b -=
                  Number.parseInt(
                    w.app_summary_sales.total_gross_sales_usdx100,
                  ) / 1e4;
              }),
              (0, B.jsxs)(lm.t1, {
                className: Z.TooltipPartnerSummary,
                children: [
                  (0, B.jsx)("div", {
                    children: (0, y.we)(
                      "#PartnerStats_Tooltip_Date",
                      (0, y.TW)(a.rtime),
                    ),
                  }),
                  (0, B.jsx)("div", {
                    className: Z.LineItemsCtn,
                    children: (0, B.jsxs)("div", {
                      className: Z.ToolTipTable,
                      children: [
                        a.top_app_sales.map((w) => {
                          const n =
                            (Number.parseInt(
                              w.app_summary_sales.total_gross_sales_usdx100,
                            ) /
                              1e4 /
                              s) *
                            100;
                          return (0, B.jsx)(
                            nm,
                            {
                              appid: w.appid,
                              usdRevenue:
                                Number.parseInt(
                                  w.app_summary_sales.total_gross_sales_usdx100,
                                ) / 1e4,
                              nPercentage: n,
                            },
                            "app" + w.appid,
                          );
                        }),
                        b > 2 &&
                          (0, B.jsxs)("div", {
                            className: Z.ToolTipTableRow,
                            children: [
                              (0, B.jsx)("div", {
                                className: Z.ToolTipTableCell,
                                children: (0, y.we)(
                                  "#PartnerStats_Tooltip_Remaining",
                                ),
                              }),
                              (0, B.jsx)("div", {
                                className: Z.ToolTipTableCell,
                                children: (0, ul.Z2)(b),
                              }),
                              (0, B.jsxs)("div", {
                                className: Z.ToolTipTableCell,
                                children: [Math.round((b / s) * 100), "%"],
                              }),
                            ],
                          }),
                        (0, B.jsxs)("div", {
                          className: (0, ts.A)(Z.ToolTipTableRow, Z.TotalRow),
                          children: [
                            (0, B.jsx)("div", {
                              className: Z.ToolTipTableCell,
                              children: (0, y.we)(
                                "#PartnerStats_Tooltip_Total",
                              ),
                            }),
                            (0, B.jsx)("div", {
                              className: Z.ToolTipTableCell,
                              children: (0, ul.Z2)(s),
                            }),
                            (0, B.jsx)("div", {
                              className: Z.ToolTipTableCell,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              })
            );
          }
          return null;
        }
        function nm(m) {
          const { appid: r, usdRevenue: a, nPercentage: s } = m,
            [b] = (0, Es.t7)(r, {});
          return (0, B.jsxs)("div", {
            className: Z.ToolTipTableRow,
            children: [
              (0, B.jsx)("div", {
                className: Z.ToolTipTableCell,
                children: b?.GetName() || r,
              }),
              (0, B.jsx)("div", {
                className: Z.ToolTipTableCell,
                children: (0, ul.Z2)(a),
              }),
              (0, B.jsxs)("div", {
                className: Z.ToolTipTableCell,
                children: [Math.round(s), "%"],
              }),
            ],
          });
        }
        function Fm(m) {
          const { nAppId: r, strAppType: a } = m,
            s = (0, El.V)();
          return (
            (a == "Game" || a == "Application" || a == "DLC" || a == "Music") &&
            (0, B.jsx)(Bm, { nPartnerID: s, nAppID: r })
          );
        }
        function Um(m) {
          const { nAppId: r, nParentAppId: a, strAppType: s } = m;
          return (
            s == "Demo" && (0, B.jsx)(ys, { demoAppID: r, parentAppId: a })
          );
        }
        var xm = d(64916),
          Ms = d(85325),
          ml = d(24660),
          l = d(80613),
          t = d.n(l),
          i = d(75245);
        const Om = 0,
          hm = 1,
          fm = 2,
          Im = 3,
          PB = 4;
        function pB(m) {
          return "unknown EMarketBucketLevel ( " + m + " )";
        }
        function vB(m) {
          return "unknown EAssetPropertyType ( " + m + " )";
        }
        function qB(m) {
          return "unknown ETradeOfferState ( " + m + " )";
        }
        function AB(m) {
          return "unknown ETradeOfferConfirmationMethod ( " + m + " )";
        }
        class S extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.type || i.Sg(S.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    type: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    value: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    color: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    label: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(S.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new S();
            return S.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(S.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(S.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_DescriptionLine";
          }
        }
        class N extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.link || i.Sg(N.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    link: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = i.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(N.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new N();
            return N.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(N.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(N.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Action";
          }
        }
        class R extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.appid || i.Sg(R.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    category: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    internal_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_category_name: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    localized_tag_name: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    color: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(R.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new R();
            return R.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(R.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(R.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Tag";
          }
        }
        class Xr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.contained_items || i.Sg(Xr.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
                  fields: {
                    contained_items: { n: 1, c: o, r: !0, q: !0 },
                    search_tags: { n: 2, c: R, r: !0, q: !0 },
                  },
                }),
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = i.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Xr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Xr();
            return Xr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ContainerProperties";
          }
        }
        class o extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.classid || i.Sg(o.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    classid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(o.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new o();
            return o.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(o.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(o.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ClassIdentifiers";
          }
        }
        class V extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.appid || i.Sg(V.M()),
              l.Message.initialize(
                this,
                r,
                0,
                -1,
                [8, 10, 11, 12, 13, 21, 26],
                null,
              );
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    appid: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    classid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    currency: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    background_color: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    icon_url: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    icon_url_large: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    descriptions: { n: 8, c: S, r: !0, q: !0 },
                    tradable: { n: 9, br: i.qM.readBool, bw: i.gp.writeBool },
                    actions: { n: 10, c: N, r: !0, q: !0 },
                    owner_descriptions: { n: 11, c: S, r: !0, q: !0 },
                    owner_actions: { n: 12, c: N, r: !0, q: !0 },
                    fraudwarnings: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    name: { n: 14, br: i.qM.readString, bw: i.gp.writeString },
                    name_color: {
                      n: 15,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    type: { n: 16, br: i.qM.readString, bw: i.gp.writeString },
                    market_name: {
                      n: 17,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_hash_name: {
                      n: 18,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_fee: {
                      n: 19,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_fee_app: {
                      n: 28,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    contained_item: { n: 20, c: V },
                    market_actions: { n: 21, c: N, r: !0, q: !0 },
                    commodity: { n: 22, br: i.qM.readBool, bw: i.gp.writeBool },
                    market_tradable_restriction: {
                      n: 23,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    market_marketable_restriction: {
                      n: 24,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    marketable: {
                      n: 25,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    tags: { n: 26, c: R, r: !0, q: !0 },
                    item_expiration: {
                      n: 27,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_buy_country_restriction: {
                      n: 30,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_sell_country_restriction: {
                      n: 31,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    sealed: { n: 32, br: i.qM.readBool, bw: i.gp.writeBool },
                    container_properties: { n: 33, c: Xr },
                    market_bucket_group_name: {
                      n: 34,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_bucket_group_id: {
                      n: 35,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    sealed_type: {
                      n: 37,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    market_name_inside_group: {
                      n: 38,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    market_bucket_id: {
                      n: 39,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(V.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new V();
            return V.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(V.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(V.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Description";
          }
        }
        class H extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.propertyid || i.Sg(H.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    propertyid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    int_value: {
                      n: 2,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    float_value: {
                      n: 3,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    string_value: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(H.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new H();
            return H.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(H.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(H.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperty";
          }
        }
        class C extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.classid || i.Sg(C.M()),
              l.Message.initialize(this, r, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    classid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    standalone_properties: { n: 3, c: H, r: !0, q: !0 },
                    parent_relationship_properties: {
                      n: 4,
                      c: H,
                      r: !0,
                      q: !0,
                    },
                    nested_accessories: { n: 5, c: C, r: !0, q: !0 },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(C.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new C();
            return C.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(C.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(C.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetAccessory";
          }
        }
        class _ extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.appid || i.Sg(_.M()),
              l.Message.initialize(this, r, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    asset_properties: { n: 4, c: H, r: !0, q: !0 },
                    asset_accessories: { n: 5, c: C, r: !0, q: !0 },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(_.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new _();
            return _.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperties";
          }
        }
        class Yr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.id || i.Sg(Yr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yr.sm_m ||
                (Yr.sm_m = {
                  proto: Yr,
                  fields: {
                    id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    type: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    float_min: {
                      n: 4,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    float_max: {
                      n: 5,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    int_min: {
                      n: 6,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    int_max: {
                      n: 7,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    localized_label: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    hide_from_description: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Yr.sm_m
            );
          }
          static MBF() {
            return Yr.sm_mbf || (Yr.sm_mbf = i.w0(Yr.M())), Yr.sm_mbf;
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Yr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Yr();
            return Yr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetPropertySchema";
          }
        }
        class rr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.appid || i.Sg(rr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = i.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(rr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new rr();
            return rr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Request";
          }
        }
        class ir extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.property_schemas || i.Sg(ir.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: { property_schemas: { n: 1, c: Yr, r: !0, q: !0 } },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = i.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ir();
            return ir.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Response";
          }
        }
        class J extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.appid || i.Sg(J.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    classid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    currencyid: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    amount: {
                      n: 7,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    missing: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                    est_usd: {
                      n: 9,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = i.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(J.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new J();
            return J.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(J.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(J.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_Asset";
          }
        }
        class ar extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.steamid || i.Sg(ar.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    get_descriptions: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    get_asset_properties: {
                      n: 11,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    for_trade_offer_verification: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    filters: { n: 6, c: Zr },
                    start_assetid: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    count: { n: 9, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = i.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ar.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ar();
            return ar.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request";
          }
        }
        class Zr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.assetids || i.Sg(Zr.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
                  fields: {
                    assetids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                    currencyids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    tradable_only: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    marketable_only: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = i.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Zr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Zr();
            return Zr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
          }
        }
        class tr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.assets || i.Sg(tr.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    assets: { n: 1, c: J, r: !0, q: !0 },
                    descriptions: { n: 2, c: V, r: !0, q: !0 },
                    missing_assets: { n: 3, c: J, r: !0, q: !0 },
                    asset_properties: { n: 7, c: _, r: !0, q: !0 },
                    more_items: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    last_assetid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    total_inventory_count: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = i.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(tr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new tr();
            return tr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(tr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(tr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Response";
          }
        }
        class sr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.generate_new_token || i.Sg(sr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: {
                    generate_new_token: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = i.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(sr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new sr();
            return sr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Request";
          }
        }
        class lr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.trade_offer_access_token || i.Sg(lr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    trade_offer_access_token: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = i.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(lr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new lr();
            return lr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Response";
          }
        }
        class mr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.return_url || i.Sg(mr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    return_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = i.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(mr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new mr();
            return mr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
          }
        }
        class Br extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.url || i.Sg(Br.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    url: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = i.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Br.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Br();
            return Br.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
          }
        }
        class P extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.language || i.Sg(P.M()),
              l.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    classes: { n: 3, c: o, r: !0, q: !0 },
                    high_pri: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = i.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(P.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new P();
            return P.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(P.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(P.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Request";
          }
        }
        class p extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.descriptions || i.Sg(p.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: { descriptions: { n: 1, c: V, r: !0, q: !0 } },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(p.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new p();
            return p.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(p.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(p.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Response";
          }
        }
        var Kl;
        ((m) => {
          function r(g, n, x) {
            return g.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, e.I8)(ar, n, x),
              tr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetInventoryItemsWithDescriptions = r;
          function a(g, n, x) {
            return g.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, e.I8)(sr, n, x),
              lr,
              { ePrivilege: 1 },
            );
          }
          m.GetTradeOfferAccessToken = a;
          function s(g, n, x) {
            return g.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, e.I8)(mr, n, x),
              Br,
              { ePrivilege: 1 },
            );
          }
          m.ClientGetItemShopOverlayAuthURL = s;
          function b(g, n, x) {
            return g.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, e.I8)(P, n, x),
              p,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetClassInfo = b;
          function w(g, n, x) {
            return g.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, e.I8)(rr, n, x),
              ir,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetPropertySchema = w;
        })(Kl || (Kl = {}));
        class zs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return zs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new zs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new zs();
            return zs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return zs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              zs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_Generic_Response";
          }
        }
        class Vr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.appid || i.Sg(Vr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vr.sm_m ||
                (Vr.sm_m = {
                  proto: Vr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    force_context_list_refresh: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    add_app_if_doesnt_exist: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    num_new_items: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    num_removed_items: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = i.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Vr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Vr();
            return Vr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Vr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Vr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradePermissionsForApp_Request";
          }
        }
        class Jr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.can_receive || i.Sg(Jr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jr.sm_m ||
                (Jr.sm_m = {
                  proto: Jr,
                  fields: {
                    can_receive: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    can_send: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    exceeded_max_asset_count: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    app_missing: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    disabled_in_region: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Jr.sm_m
            );
          }
          static MBF() {
            return Jr.sm_mbf || (Jr.sm_mbf = i.w0(Jr.M())), Jr.sm_mbf;
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Jr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Jr();
            return Jr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradePermissionsForApp_Response";
          }
        }
        class Qr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.steamid || i.Sg(Qr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qr.sm_m ||
                (Qr.sm_m = {
                  proto: Qr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    show_private: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    cached_asset_count_only: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = i.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Qr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Qr();
            return Qr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Qr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Qr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEconSummary_Request";
          }
        }
        class Lr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.appid || i.Sg(Lr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lr.sm_m ||
                (Lr.sm_m = {
                  proto: Lr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    asset_count: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = i.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Lr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Lr();
            return Lr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AppSummary";
          }
        }
        class Tr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.apps || i.Sg(Tr.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    apps: { n: 1, c: Lr, r: !0, q: !0 },
                    num_trades: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_last_trade: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    steamid_last_trade_partner: {
                      n: 4,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    num_market_listings: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    num_market_transactions: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_last_market_sale: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    steamid_last_market_sale: {
                      n: 8,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    time_last_market_purchase: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    steamid_last_market_purchase: {
                      n: 10,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    num_trades_in_escrow: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_all_escrow_end: {
                      n: 12,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cached_data_needs_updating: {
                      n: 13,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    num_trade_partners: {
                      n: 14,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = i.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Tr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Tr();
            return Tr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Tr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Tr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEconSummary_Response";
          }
        }
        class kr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.steamid || i.Sg(kr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kr.sm_m ||
                (kr.sm_m = {
                  proto: kr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = i.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(kr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new kr();
            return kr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(kr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(kr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTopTradePartners_Request";
          }
        }
        class Nr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.steamid || i.Sg(Nr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    num_trades: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_first_trade: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_last_trade: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = i.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Nr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Nr();
            return Nr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_TopTradePartner";
          }
        }
        class Hr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.partners || i.Sg(Hr.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
                  fields: { partners: { n: 1, c: Nr, r: !0, q: !0 } },
                }),
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = i.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Hr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Hr();
            return Hr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTopTradePartners_Response";
          }
        }
        class Pr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.steamid || i.Sg(Pr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pr.sm_m ||
                (Pr.sm_m = {
                  proto: Pr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    time_banned_until: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_probation_until: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = i.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Pr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Pr();
            return Pr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Pr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Pr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_SetTradeBanTime_Request";
          }
        }
        class pr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.steamid || i.Sg(pr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pr.sm_m ||
                (pr.sm_m = {
                  proto: pr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    time_force_trusted_until: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              pr.sm_m
            );
          }
          static MBF() {
            return pr.sm_mbf || (pr.sm_mbf = i.w0(pr.M())), pr.sm_mbf;
          }
          toObject(r = !1) {
            return pr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(pr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new pr();
            return pr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(pr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(pr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_SetForceTradeTrustedTime_Request";
          }
        }
        class vr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.steamid_target || i.Sg(vr.M()),
              l.Message.initialize(this, r, 0, -1, [2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    steamid_target: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    items_to_give: { n: 2, c: J, r: !0, q: !0 },
                    items_to_receive: { n: 3, c: J, r: !0, q: !0 },
                    message: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    tradeofferid_countered: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    webcookie: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    trading_topic: { n: 7, c: qr },
                    trade_offer_access_token: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    from_realtime_trade: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    ip_sender: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    machine_authid_sender: {
                      n: 11,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    ip_target: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    machine_authid_target: {
                      n: 13,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = i.w0(vr.M())), vr.sm_mbf;
          }
          toObject(r = !1) {
            return vr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(vr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new vr();
            return vr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(vr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(vr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CreateTradeOffer_Request";
          }
        }
        class qr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.steamid_owner || i.Sg(qr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qr.sm_m ||
                (qr.sm_m = {
                  proto: qr,
                  fields: {
                    steamid_owner: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    forumtype: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    gidfeature: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    gidtopic: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = i.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(qr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new qr();
            return qr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(qr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(qr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CreateTradeOffer_Request_ForumTopicIdentifier";
          }
        }
        class Ar extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ar.prototype.tradeofferid || i.Sg(Ar.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ar.sm_m ||
                (Ar.sm_m = {
                  proto: Ar,
                  fields: {
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    trade_response: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Ar.sm_m
            );
          }
          static MBF() {
            return Ar.sm_mbf || (Ar.sm_mbf = i.w0(Ar.M())), Ar.sm_mbf;
          }
          toObject(r = !1) {
            return Ar.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ar.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ar();
            return Ar.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CreateTradeOffer_Response";
          }
        }
        class Dr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.steamid_target || i.Sg(Dr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    steamid_target: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    item_to_give: { n: 3, c: J },
                    webcookie: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = i.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(r = !1) {
            return Dr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Dr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Dr();
            return Dr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_SendGift_Request";
          }
        }
        class Gr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.tradeofferid || i.Sg(Gr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gr.sm_m ||
                (Gr.sm_m = {
                  proto: Gr,
                  fields: {
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    trade_response: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = i.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Gr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Gr();
            return Gr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_SendGift_Response";
          }
        }
        class Er extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.get_sent_offers || i.Sg(Er.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    get_sent_offers: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    get_received_offers: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    get_descriptions: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    active_only: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    historical_only: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    time_historical_cutoff: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cursor: {
                      n: 9,
                      d: 0,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = i.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Er.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Er();
            return Er.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffers_Request";
          }
        }
        class T extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.tradeofferid || i.Sg(T.M()),
              l.Message.initialize(this, r, 0, -1, [6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    accountid_other: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    message: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    expiration_time: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    trade_offer_state: {
                      n: 5,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    items_to_give: { n: 6, c: J, r: !0, q: !0 },
                    items_to_receive: { n: 7, c: J, r: !0, q: !0 },
                    is_our_offer: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    time_created: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_updated: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    tradeid: {
                      n: 11,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    from_real_time_trade: {
                      n: 12,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    escrow_end_date: {
                      n: 13,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    confirmation_method: {
                      n: 14,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    partner_confirmation_method: {
                      n: 15,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    eresult: {
                      n: 16,
                      d: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    delay_settlement: {
                      n: 17,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    settlement_date: {
                      n: 18,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(T.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new T();
            return T.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(T.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(T.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_TradeOffer";
          }
        }
        class Sr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.trade_offers_sent || i.Sg(Sr.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    trade_offers_sent: { n: 1, c: T, r: !0, q: !0 },
                    trade_offers_received: { n: 2, c: T, r: !0, q: !0 },
                    descriptions: { n: 3, c: V, r: !0, q: !0 },
                    next_cursor: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = i.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Sr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Sr();
            return Sr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffers_Response";
          }
        }
        class Rr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.steamid || i.Sg(Rr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rr.sm_m ||
                (Rr.sm_m = {
                  proto: Rr,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    tradeid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    trade_status: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = i.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Rr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Rr();
            return Rr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_TradeLeftEscrow_Request";
          }
        }
        class cs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return cs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new cs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new cs();
            return cs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return cs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              cs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_TradeLeftEscrow_Response";
          }
        }
        class or extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.steamid_target || i.Sg(or.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    steamid_target: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    trade_offer_access_token: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = i.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(or.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new or();
            return or.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHoldDurations_Request";
          }
        }
        class Cr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.my_escrow || i.Sg(Cr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Cr.sm_m ||
                (Cr.sm_m = {
                  proto: Cr,
                  fields: {
                    my_escrow: { n: 1, c: v },
                    their_escrow: { n: 2, c: v },
                    both_escrow: { n: 3, c: v },
                  },
                }),
              Cr.sm_m
            );
          }
          static MBF() {
            return Cr.sm_mbf || (Cr.sm_mbf = i.w0(Cr.M())), Cr.sm_mbf;
          }
          toObject(r = !1) {
            return Cr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Cr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Cr();
            return Cr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHoldDurations_Response";
          }
        }
        class v extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.escrow_end_duration_seconds || i.Sg(v.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    escrow_end_duration_seconds: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    escrow_end_date: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    escrow_end_date_rfc3339: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(v.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new v();
            return v.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(v.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(v.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHoldDurations_Response_Scenario";
          }
        }
        class _r extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.tradeofferid || i.Sg(_r.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    get_descriptions: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = i.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(_r.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new _r();
            return _r.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffer_Request";
          }
        }
        class ri extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ri.prototype.steamid || i.Sg(ri.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ri.sm_m ||
                (ri.sm_m = {
                  proto: ri,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    tradeofferid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ri.sm_m
            );
          }
          static MBF() {
            return ri.sm_mbf || (ri.sm_mbf = i.w0(ri.M())), ri.sm_mbf;
          }
          toObject(r = !1) {
            return ri.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ri.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ri.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ri();
            return ri.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ri.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ri.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferForAnyUser_Request";
          }
        }
        class er extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.offer || i.Sg(er.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    offer: { n: 1, c: T },
                    descriptions: { n: 2, c: V, r: !0, q: !0 },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = i.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(er.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new er();
            return er.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffer_Response";
          }
        }
        class ii extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ii.prototype.steamid || i.Sg(ii.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ii.sm_m ||
                (ii.sm_m = {
                  proto: ii,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    tradeofferid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    confirmation_code: {
                      n: 4,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              ii.sm_m
            );
          }
          static MBF() {
            return ii.sm_mbf || (ii.sm_mbf = i.w0(ii.M())), ii.sm_mbf;
          }
          toObject(r = !1) {
            return ii.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ii.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ii.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ii();
            return ii.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ii.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ii.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferForConfirmation_Request";
          }
        }
        class ai extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ai.prototype.offer || i.Sg(ai.M()),
              l.Message.initialize(this, r, 0, -1, [2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ai.sm_m ||
                (ai.sm_m = {
                  proto: ai,
                  fields: {
                    offer: { n: 1, c: T },
                    descriptions: { n: 2, c: V, r: !0, q: !0 },
                    asset_properties: { n: 3, c: _, r: !0, q: !0 },
                  },
                }),
              ai.sm_m
            );
          }
          static MBF() {
            return ai.sm_mbf || (ai.sm_mbf = i.w0(ai.M())), ai.sm_mbf;
          }
          toObject(r = !1) {
            return ai.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ai.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ai.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ai();
            return ai.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ai.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ai.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferForConfirmation_Response";
          }
        }
        class ti extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ti.prototype.tradeofferid || i.Sg(ti.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ti.sm_m ||
                (ti.sm_m = {
                  proto: ti,
                  fields: {
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    webcookie: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    ip: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    machine_authid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ti.sm_m
            );
          }
          static MBF() {
            return ti.sm_mbf || (ti.sm_mbf = i.w0(ti.M())), ti.sm_mbf;
          }
          toObject(r = !1) {
            return ti.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ti.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ti.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ti();
            return ti.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ti.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ti.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AcceptTradeOffer_Request";
          }
        }
        class si extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              si.prototype.tradeid || i.Sg(si.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              si.sm_m ||
                (si.sm_m = {
                  proto: si,
                  fields: {
                    tradeid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    trade_response: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              si.sm_m
            );
          }
          static MBF() {
            return si.sm_mbf || (si.sm_mbf = i.w0(si.M())), si.sm_mbf;
          }
          toObject(r = !1) {
            return si.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(si.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(si.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new si();
            return si.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(si.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(si.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AcceptTradeOffer_Response";
          }
        }
        class li extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              li.prototype.steamid || i.Sg(li.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              li.sm_m ||
                (li.sm_m = {
                  proto: li,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    tradeofferid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    confirmation_code: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    mid: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    cancel_offer: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    already_authed: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              li.sm_m
            );
          }
          static MBF() {
            return li.sm_mbf || (li.sm_mbf = i.w0(li.M())), li.sm_mbf;
          }
          toObject(r = !1) {
            return li.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(li.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(li.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new li();
            return li.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(li.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(li.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ConfirmTradeOffer_Request";
          }
        }
        class mi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mi.prototype.tradeid || i.Sg(mi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mi.sm_m ||
                (mi.sm_m = {
                  proto: mi,
                  fields: {
                    tradeid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    trade_response: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              mi.sm_m
            );
          }
          static MBF() {
            return mi.sm_mbf || (mi.sm_mbf = i.w0(mi.M())), mi.sm_mbf;
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(mi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(mi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new mi();
            return mi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(mi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(mi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ConfirmTradeOffer_Response";
          }
        }
        class Bi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bi.prototype.tradeofferid || i.Sg(Bi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bi.sm_m ||
                (Bi.sm_m = {
                  proto: Bi,
                  fields: {
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Bi.sm_m
            );
          }
          static MBF() {
            return Bi.sm_mbf || (Bi.sm_mbf = i.w0(Bi.M())), Bi.sm_mbf;
          }
          toObject(r = !1) {
            return Bi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Bi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Bi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Bi();
            return Bi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Bi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Bi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_DeclineTradeOffer_Request";
          }
        }
        class js extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return js.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new js();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new js();
            return js.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return js.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              js.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_DeclineTradeOffer_Response";
          }
        }
        class ei extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ei.prototype.tradeofferid || i.Sg(ei.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ei.sm_m ||
                (ei.sm_m = {
                  proto: ei,
                  fields: {
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ei.sm_m
            );
          }
          static MBF() {
            return ei.sm_mbf || (ei.sm_mbf = i.w0(ei.M())), ei.sm_mbf;
          }
          toObject(r = !1) {
            return ei.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ei.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ei.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ei();
            return ei.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ei.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ei.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelTradeOffer_Request";
          }
        }
        class Ws extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ws.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ws();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ws();
            return Ws.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ws.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ws.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelTradeOffer_Response";
          }
        }
        class bi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bi.prototype.steamid || i.Sg(bi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bi.sm_m ||
                (bi.sm_m = {
                  proto: bi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    add_trade_hold: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    escrow_only: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              bi.sm_m
            );
          }
          static MBF() {
            return bi.sm_mbf || (bi.sm_mbf = i.w0(bi.M())), bi.sm_mbf;
          }
          toObject(r = !1) {
            return bi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(bi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(bi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new bi();
            return bi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(bi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(bi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelAllTradeOffers_Request";
          }
        }
        class wi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wi.prototype.num_cancelled || i.Sg(wi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wi.sm_m ||
                (wi.sm_m = {
                  proto: wi,
                  fields: {
                    num_cancelled: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    num_escrow_cancelled: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    num_failures: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    num_escrow_failures: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              wi.sm_m
            );
          }
          static MBF() {
            return wi.sm_mbf || (wi.sm_mbf = i.w0(wi.M())), wi.sm_mbf;
          }
          toObject(r = !1) {
            return wi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(wi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(wi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new wi();
            return wi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(wi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(wi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelAllTradeOffers_Response";
          }
        }
        class ui extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ui.prototype.steamid || i.Sg(ui.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ui.sm_m ||
                (ui.sm_m = {
                  proto: ui,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    add_trade_hold: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    escrow_only: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              ui.sm_m
            );
          }
          static MBF() {
            return ui.sm_mbf || (ui.sm_mbf = i.w0(ui.M())), ui.sm_mbf;
          }
          toObject(r = !1) {
            return ui.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ui.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ui.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ui();
            return ui.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ui.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ui.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelAllTradeOffers_Notification";
          }
        }
        class Mi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mi.prototype.steamid_partya || i.Sg(Mi.M()),
              l.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mi.sm_m ||
                (Mi.sm_m = {
                  proto: Mi,
                  fields: {
                    steamid_partya: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    steamid_partyb: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    involved_apps: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Mi.sm_m
            );
          }
          static MBF() {
            return Mi.sm_mbf || (Mi.sm_mbf = i.w0(Mi.M())), Mi.sm_mbf;
          }
          toObject(r = !1) {
            return Mi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Mi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Mi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Mi();
            return Mi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Mi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Mi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_IsSafeToCommitTrade_Request";
          }
        }
        class zi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zi.prototype.time_last_visit || i.Sg(zi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zi.sm_m ||
                (zi.sm_m = {
                  proto: zi,
                  fields: {
                    time_last_visit: {
                      n: 1,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                  },
                }),
              zi.sm_m
            );
          }
          static MBF() {
            return zi.sm_mbf || (zi.sm_mbf = i.w0(zi.M())), zi.sm_mbf;
          }
          toObject(r = !1) {
            return zi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(zi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(zi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new zi();
            return zi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(zi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(zi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffersSummary_Request";
          }
        }
        class di extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              di.prototype.pending_received_count || i.Sg(di.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              di.sm_m ||
                (di.sm_m = {
                  proto: di,
                  fields: {
                    pending_received_count: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    new_received_count: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    updated_received_count: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    historical_received_count: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    pending_sent_count: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    newly_accepted_sent_count: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    updated_sent_count: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    historical_sent_count: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    escrow_received_count: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    escrow_sent_count: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    provisional: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              di.sm_m
            );
          }
          static MBF() {
            return di.sm_mbf || (di.sm_mbf = i.w0(di.M())), di.sm_mbf;
          }
          toObject(r = !1) {
            return di.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(di.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(di.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new di();
            return di.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(di.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(di.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffersSummary_Response";
          }
        }
        class gi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gi.prototype.max_trades || i.Sg(gi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gi.sm_m ||
                (gi.sm_m = {
                  proto: gi,
                  fields: {
                    max_trades: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    start_after_time: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    start_after_tradeid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    navigating_back: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    get_descriptions: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    include_failed: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    include_total: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              gi.sm_m
            );
          }
          static MBF() {
            return gi.sm_mbf || (gi.sm_mbf = i.w0(gi.M())), gi.sm_mbf;
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(gi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(gi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new gi();
            return gi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(gi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(gi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Request";
          }
        }
        class q extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.total_trades || i.Sg(q.M()),
              l.Message.initialize(this, r, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    total_trades: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    more: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    trades: { n: 3, c: yi, r: !0, q: !0 },
                    descriptions: { n: 4, c: V, r: !0, q: !0 },
                    devices: { n: 5, c: ji, r: !0, q: !0 },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = i.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(q.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new q();
            return q.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response";
          }
        }
        class yi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yi.prototype.tradeid || i.Sg(yi.M()),
              l.Message.initialize(this, r, 0, -1, [6, 7, 8, 9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yi.sm_m ||
                (yi.sm_m = {
                  proto: yi,
                  fields: {
                    tradeid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    steamid_other: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    time_init: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_escrow_end: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    status: { n: 5, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    assets_received: { n: 6, c: br, r: !0, q: !0 },
                    assets_given: { n: 7, c: br, r: !0, q: !0 },
                    currency_received: { n: 8, c: wr, r: !0, q: !0 },
                    currency_given: { n: 9, c: wr, r: !0, q: !0 },
                    time_settlement: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_mod: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rollback_trade: {
                      n: 12,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    trade_auth: { n: 13, c: ci },
                  },
                }),
              yi.sm_m
            );
          }
          static MBF() {
            return yi.sm_mbf || (yi.sm_mbf = i.w0(yi.M())), yi.sm_mbf;
          }
          toObject(r = !1) {
            return yi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(yi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(yi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new yi();
            return yi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(yi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(yi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_Trade";
          }
        }
        class br extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.appid || i.Sg(br.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    assetid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    amount: {
                      n: 4,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    classid: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    new_assetid: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    new_contextid: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    rollback_new_assetid: {
                      n: 9,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    rollback_new_contextid: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = i.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(br.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new br();
            return br.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_Trade_TradedAsset";
          }
        }
        class wr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.appid || i.Sg(wr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    currencyid: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    amount: {
                      n: 4,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    fee_amount: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    classid: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    new_currencyid: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    new_contextid: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    rollback_new_currencyid: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rollback_new_contextid: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = i.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(wr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new wr();
            return wr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_Trade_TradedCurrency";
          }
        }
        class ci extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ci.prototype.is_sender || i.Sg(ci.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ci.sm_m ||
                (ci.sm_m = {
                  proto: ci,
                  fields: {
                    is_sender: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    confirm_type: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    time_confirmed: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    country: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    state: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    city: { n: 6, br: i.qM.readString, bw: i.gp.writeString },
                    token_id: {
                      n: 7,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              ci.sm_m
            );
          }
          static MBF() {
            return ci.sm_mbf || (ci.sm_mbf = i.w0(ci.M())), ci.sm_mbf;
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ci.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ci.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ci();
            return ci.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ci.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ci.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_Trade_Authorization";
          }
        }
        class ji extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ji.prototype.token_id || i.Sg(ji.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ji.sm_m ||
                (ji.sm_m = {
                  proto: ji,
                  fields: {
                    token_id: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    first_authed: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    current_device: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    platform_type: {
                      n: 4,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    guard_type: {
                      n: 5,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    authentication_type: {
                      n: 6,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              ji.sm_m
            );
          }
          static MBF() {
            return ji.sm_mbf || (ji.sm_mbf = i.w0(ji.M())), ji.sm_mbf;
          }
          toObject(r = !1) {
            return ji.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ji.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ji.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ji();
            return ji.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ji.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ji.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_DeviceDetails";
          }
        }
        class Wi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wi.prototype.language || i.Sg(Wi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wi.sm_m ||
                (Wi.sm_m = {
                  proto: Wi,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Wi.sm_m
            );
          }
          static MBF() {
            return Wi.sm_mbf || (Wi.sm_mbf = i.w0(Wi.M())), Wi.sm_mbf;
          }
          toObject(r = !1) {
            return Wi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Wi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Wi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Wi();
            return Wi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Wi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Wi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetProvisionalTradeHistory_Request";
          }
        }
        class ni extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ni.prototype.tradeid || i.Sg(ni.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ni.sm_m ||
                (ni.sm_m = {
                  proto: ni,
                  fields: {
                    tradeid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    get_descriptions: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    language: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ni.sm_m
            );
          }
          static MBF() {
            return ni.sm_mbf || (ni.sm_mbf = i.w0(ni.M())), ni.sm_mbf;
          }
          toObject(r = !1) {
            return ni.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ni.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ni.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ni();
            return ni.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ni.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ni.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeStatus_Request";
          }
        }
        class ns extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ns.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ns();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ns();
            return ns.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ns.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ns.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CanUserTradeWithAnyone_Request";
          }
        }
        class ur extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.trade_response || i.Sg(ur.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    trade_response: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    allowed_to_trade: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    probation_default_time: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    probation_remaining: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = i.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ur.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ur();
            return ur.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CanUserTradeWithAnyone_Response";
          }
        }
        class Fi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fi.prototype.steamid || i.Sg(Fi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fi.sm_m ||
                (Fi.sm_m = {
                  proto: Fi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Fi.sm_m
            );
          }
          static MBF() {
            return Fi.sm_mbf || (Fi.sm_mbf = i.w0(Fi.M())), Fi.sm_mbf;
          }
          toObject(r = !1) {
            return Fi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Fi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Fi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Fi();
            return Fi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Fi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Fi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CanUserTradeWithPartner_Request";
          }
        }
        class Ui extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ui.prototype.trade_response || i.Sg(Ui.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ui.sm_m ||
                (Ui.sm_m = {
                  proto: Ui,
                  fields: {
                    trade_response: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    allowed_to_trade: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    steamguard_required_days: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    new_device_cooldown_days: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    default_password_reset_probation_days: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    password_reset_probation_days: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    default_email_change_probation_days: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    email_change_probation_days: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_allowed_to_trade: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ui.sm_m
            );
          }
          static MBF() {
            return Ui.sm_mbf || (Ui.sm_mbf = i.w0(Ui.M())), Ui.sm_mbf;
          }
          toObject(r = !1) {
            return Ui.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ui.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ui.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ui();
            return Ui.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ui.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ui.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CanUserTradeWithPartner_Response";
          }
        }
        class xi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xi.prototype.steamid || i.Sg(xi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xi.sm_m ||
                (xi.sm_m = {
                  proto: xi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              xi.sm_m
            );
          }
          static MBF() {
            return xi.sm_mbf || (xi.sm_mbf = i.w0(xi.M())), xi.sm_mbf;
          }
          toObject(r = !1) {
            return xi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(xi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(xi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new xi();
            return xi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(xi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(xi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetUserTradeEligibility_Request";
          }
        }
        class Oi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oi.prototype.steamid || i.Sg(Oi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oi.sm_m ||
                (Oi.sm_m = {
                  proto: Oi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              Oi.sm_m
            );
          }
          static MBF() {
            return Oi.sm_mbf || (Oi.sm_mbf = i.w0(Oi.M())), Oi.sm_mbf;
          }
          toObject(r = !1) {
            return Oi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Oi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Oi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Oi();
            return Oi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Oi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Oi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckTradePartnerTrustworthiness_Request";
          }
        }
        class hi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hi.prototype.abuse_score || i.Sg(hi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hi.sm_m ||
                (hi.sm_m = {
                  proto: hi,
                  fields: {
                    abuse_score: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    trade_abuse_score: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    keyword_abuse_score: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              hi.sm_m
            );
          }
          static MBF() {
            return hi.sm_mbf || (hi.sm_mbf = i.w0(hi.M())), hi.sm_mbf;
          }
          toObject(r = !1) {
            return hi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(hi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(hi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new hi();
            return hi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(hi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return hi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(hi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              hi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckTradePartnerTrustworthiness_Response";
          }
        }
        class fi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fi.prototype.steamid || i.Sg(fi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fi.sm_m ||
                (fi.sm_m = {
                  proto: fi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    trade_offer_access_token: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              fi.sm_m
            );
          }
          static MBF() {
            return fi.sm_mbf || (fi.sm_mbf = i.w0(fi.M())), fi.sm_mbf;
          }
          toObject(r = !1) {
            return fi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(fi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(fi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new fi();
            return fi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(fi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(fi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckTradeOfferAccessToken_Request";
          }
        }
        class Fs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Fs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Fs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Fs();
            return Fs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Fs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Fs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckTradeOfferAccessToken_Response";
          }
        }
        class Ii extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ii.prototype.steamid || i.Sg(Ii.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ii.sm_m ||
                (Ii.sm_m = {
                  proto: Ii,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    contextid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ii.sm_m
            );
          }
          static MBF() {
            return Ii.sm_mbf || (Ii.sm_mbf = i.w0(Ii.M())), Ii.sm_mbf;
          }
          toObject(r = !1) {
            return Ii.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ii.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ii.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ii();
            return Ii.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ii.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ii.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushInventoryCache_Request";
          }
        }
        class $i extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $i.prototype.success || i.Sg($i.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $i.sm_m ||
                ($i.sm_m = {
                  proto: $i,
                  fields: {
                    success: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              $i.sm_m
            );
          }
          static MBF() {
            return $i.sm_mbf || ($i.sm_mbf = i.w0($i.M())), $i.sm_mbf;
          }
          toObject(r = !1) {
            return $i.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT($i.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq($i.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new $i();
            return $i.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj($i.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return $i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0($i.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              $i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushInventoryCache_Response";
          }
        }
        class Ki extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ki.prototype.steamid || i.Sg(Ki.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ki.sm_m ||
                (Ki.sm_m = {
                  proto: Ki,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ki.sm_m
            );
          }
          static MBF() {
            return Ki.sm_mbf || (Ki.sm_mbf = i.w0(Ki.M())), Ki.sm_mbf;
          }
          toObject(r = !1) {
            return Ki.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ki.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ki.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ki();
            return Ki.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ki.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ki.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ki.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ki.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushInventoryServiceDBOs_Request";
          }
        }
        class Us extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Us.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Us();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Us();
            return Us.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Us.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Us.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushInventoryServiceDBOs_Response";
          }
        }
        class Xi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xi.prototype.appid || i.Sg(Xi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xi.sm_m ||
                (Xi.sm_m = {
                  proto: Xi,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Xi.sm_m
            );
          }
          static MBF() {
            return Xi.sm_mbf || (Xi.sm_mbf = i.w0(Xi.M())), Xi.sm_mbf;
          }
          toObject(r = !1) {
            return Xi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Xi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Xi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Xi();
            return Xi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Xi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Xi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushAssetAppearanceCache_Request";
          }
        }
        class xs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return xs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new xs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new xs();
            return xs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return xs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              xs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushAssetAppearanceCache_Response";
          }
        }
        class Yi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yi.prototype.appid || i.Sg(Yi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yi.sm_m ||
                (Yi.sm_m = {
                  proto: Yi,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Yi.sm_m
            );
          }
          static MBF() {
            return Yi.sm_mbf || (Yi.sm_mbf = i.w0(Yi.M())), Yi.sm_mbf;
          }
          toObject(r = !1) {
            return Yi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Yi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Yi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Yi();
            return Yi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Yi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Yi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushContextCache_Request";
          }
        }
        class Os extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Os.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Os();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Os();
            return Os.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Os.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Os.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushContextCache_Response";
          }
        }
        class Zi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zi.prototype.appid || i.Sg(Zi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zi.sm_m ||
                (Zi.sm_m = {
                  proto: Zi,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Zi.sm_m
            );
          }
          static MBF() {
            return Zi.sm_mbf || (Zi.sm_mbf = i.w0(Zi.M())), Zi.sm_mbf;
          }
          toObject(r = !1) {
            return Zi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Zi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Zi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Zi();
            return Zi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Zi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Zi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEconAppSettings_Request";
          }
        }
        class Vi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vi.prototype.appid || i.Sg(Vi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vi.sm_m ||
                (Vi.sm_m = {
                  proto: Vi,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    asset_class_version: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    context_version: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Vi.sm_m
            );
          }
          static MBF() {
            return Vi.sm_mbf || (Vi.sm_mbf = i.w0(Vi.M())), Vi.sm_mbf;
          }
          toObject(r = !1) {
            return Vi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Vi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Vi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Vi();
            return Vi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Vi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Vi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEconAppSettings_Response";
          }
        }
        class Ji extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ji.prototype.appid || i.Sg(Ji.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ji.sm_m ||
                (Ji.sm_m = {
                  proto: Ji,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Ji.sm_m
            );
          }
          static MBF() {
            return Ji.sm_mbf || (Ji.sm_mbf = i.w0(Ji.M())), Ji.sm_mbf;
          }
          toObject(r = !1) {
            return Ji.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ji.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ji.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ji();
            return Ji.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ji.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ji.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetItemShopPartnerToken_Request";
          }
        }
        class Qi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qi.prototype.token || i.Sg(Qi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qi.sm_m ||
                (Qi.sm_m = {
                  proto: Qi,
                  fields: {
                    token: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Qi.sm_m
            );
          }
          static MBF() {
            return Qi.sm_mbf || (Qi.sm_mbf = i.w0(Qi.M())), Qi.sm_mbf;
          }
          toObject(r = !1) {
            return Qi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Qi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Qi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Qi();
            return Qi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Qi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Qi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Qi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Qi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetItemShopPartnerToken_Response";
          }
        }
        class Li extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Li.prototype.appid || i.Sg(Li.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Li.sm_m ||
                (Li.sm_m = {
                  proto: Li,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    data: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    hmac: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Li.sm_m
            );
          }
          static MBF() {
            return Li.sm_mbf || (Li.sm_mbf = i.w0(Li.M())), Li.sm_mbf;
          }
          toObject(r = !1) {
            return Li.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Li.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Li.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Li();
            return Li.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Li.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Li.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckItemShopPartnerHMAC_Request";
          }
        }
        class Ti extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ti.prototype.ok || i.Sg(Ti.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ti.sm_m ||
                (Ti.sm_m = {
                  proto: Ti,
                  fields: {
                    ok: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Ti.sm_m
            );
          }
          static MBF() {
            return Ti.sm_mbf || (Ti.sm_mbf = i.w0(Ti.M())), Ti.sm_mbf;
          }
          toObject(r = !1) {
            return Ti.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ti.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ti.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ti();
            return Ti.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ti.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ti.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckItemShopPartnerHMAC_Response";
          }
        }
        class ki extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ki.prototype.overlay_auth_cookie || i.Sg(ki.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ki.sm_m ||
                (ki.sm_m = {
                  proto: ki,
                  fields: {
                    overlay_auth_cookie: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    cart: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    currency: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    total: { n: 5, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    sandbox: { n: 6, br: i.qM.readBool, bw: i.gp.writeBool },
                    referrer: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    language: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    itemshop_auth: {
                      n: 9,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ki.sm_m
            );
          }
          static MBF() {
            return ki.sm_mbf || (ki.sm_mbf = i.w0(ki.M())), ki.sm_mbf;
          }
          toObject(r = !1) {
            return ki.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ki.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ki.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ki();
            return ki.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ki.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ki.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ki.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ki.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_StartItemShopTxn_Request";
          }
        }
        class Ni extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ni.prototype.orderid || i.Sg(Ni.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ni.sm_m ||
                (Ni.sm_m = {
                  proto: Ni,
                  fields: {
                    orderid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    url: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    displaytext: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    transid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Ni.sm_m
            );
          }
          static MBF() {
            return Ni.sm_mbf || (Ni.sm_mbf = i.w0(Ni.M())), Ni.sm_mbf;
          }
          toObject(r = !1) {
            return Ni.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ni.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ni.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ni();
            return Ni.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ni.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ni.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_StartItemShopTxn_Response";
          }
        }
        class Hi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hi.prototype.overlay_auth_cookie || i.Sg(Hi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hi.sm_m ||
                (Hi.sm_m = {
                  proto: Hi,
                  fields: {
                    overlay_auth_cookie: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    sandbox: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    orderid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Hi.sm_m
            );
          }
          static MBF() {
            return Hi.sm_mbf || (Hi.sm_mbf = i.w0(Hi.M())), Hi.sm_mbf;
          }
          toObject(r = !1) {
            return Hi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Hi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Hi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Hi();
            return Hi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Hi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Hi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Hi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Hi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetItemShopTxnState_Request";
          }
        }
        class Pi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pi.prototype.state || i.Sg(Pi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pi.sm_m ||
                (Pi.sm_m = {
                  proto: Pi,
                  fields: {
                    state: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Pi.sm_m
            );
          }
          static MBF() {
            return Pi.sm_mbf || (Pi.sm_mbf = i.w0(Pi.M())), Pi.sm_mbf;
          }
          toObject(r = !1) {
            return Pi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Pi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Pi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Pi();
            return Pi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Pi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Pi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetItemShopTxnState_Response";
          }
        }
        class pi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pi.prototype.overlay_auth_cookie || i.Sg(pi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pi.sm_m ||
                (pi.sm_m = {
                  proto: pi,
                  fields: {
                    overlay_auth_cookie: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    sandbox: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    orderid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              pi.sm_m
            );
          }
          static MBF() {
            return pi.sm_mbf || (pi.sm_mbf = i.w0(pi.M())), pi.sm_mbf;
          }
          toObject(r = !1) {
            return pi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(pi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(pi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new pi();
            return pi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(pi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(pi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FinishItemShopTxn_Request";
          }
        }
        class hs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return hs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new hs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new hs();
            return hs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return hs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              hs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FinishItemShopTxn_Response";
          }
        }
        class vi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vi.prototype.overlay_auth_cookie || i.Sg(vi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vi.sm_m ||
                (vi.sm_m = {
                  proto: vi,
                  fields: {
                    overlay_auth_cookie: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    url: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    itemshop_auth: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              vi.sm_m
            );
          }
          static MBF() {
            return vi.sm_mbf || (vi.sm_mbf = i.w0(vi.M())), vi.sm_mbf;
          }
          toObject(r = !1) {
            return vi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(vi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(vi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new vi();
            return vi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(vi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(vi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_BuildItemShopReturnURL_Request";
          }
        }
        class qi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qi.prototype.url || i.Sg(qi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qi.sm_m ||
                (qi.sm_m = {
                  proto: qi,
                  fields: {
                    url: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              qi.sm_m
            );
          }
          static MBF() {
            return qi.sm_mbf || (qi.sm_mbf = i.w0(qi.M())), qi.sm_mbf;
          }
          toObject(r = !1) {
            return qi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(qi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(qi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new qi();
            return qi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(qi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return qi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(qi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              qi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_BuildItemShopReturnURL_Response";
          }
        }
        class Ai extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ai.prototype.appid || i.Sg(Ai.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ai.sm_m ||
                (Ai.sm_m = {
                  proto: Ai,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    gameitemid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Ai.sm_m
            );
          }
          static MBF() {
            return Ai.sm_mbf || (Ai.sm_mbf = i.w0(Ai.M())), Ai.sm_mbf;
          }
          toObject(r = !1) {
            return Ai.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ai.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ai.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ai();
            return Ai.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ai.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ai.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AppSupportsRefund_Request";
          }
        }
        class Di extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Di.prototype.supports_refunds || i.Sg(Di.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Di.sm_m ||
                (Di.sm_m = {
                  proto: Di,
                  fields: {
                    supports_refunds: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Di.sm_m
            );
          }
          static MBF() {
            return Di.sm_mbf || (Di.sm_mbf = i.w0(Di.M())), Di.sm_mbf;
          }
          toObject(r = !1) {
            return Di.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Di.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Di.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Di();
            return Di.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Di.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Di.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AppSupportsRefund_Response";
          }
        }
        class Gi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gi.prototype.steamid || i.Sg(Gi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gi.sm_m ||
                (Gi.sm_m = {
                  proto: Gi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    transactionid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    language: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Gi.sm_m
            );
          }
          static MBF() {
            return Gi.sm_mbf || (Gi.sm_mbf = i.w0(Gi.M())), Gi.sm_mbf;
          }
          toObject(r = !1) {
            return Gi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Gi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Gi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Gi();
            return Gi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Gi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Gi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_QueryRefundAllowed_Request";
          }
        }
        class Ei extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ei.prototype.allow_refund || i.Sg(Ei.M()),
              l.Message.initialize(this, r, 0, -1, [2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ei.sm_m ||
                (Ei.sm_m = {
                  proto: Ei,
                  fields: {
                    allow_refund: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    assets: { n: 2, c: Si, r: !0, q: !0 },
                    descriptions: { n: 3, c: V, r: !0, q: !0 },
                  },
                }),
              Ei.sm_m
            );
          }
          static MBF() {
            return Ei.sm_mbf || (Ei.sm_mbf = i.w0(Ei.M())), Ei.sm_mbf;
          }
          toObject(r = !1) {
            return Ei.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ei.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ei.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ei();
            return Ei.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ei.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ei.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_QueryRefundAllowed_Response";
          }
        }
        class Si extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Si.prototype.allow_refund || i.Sg(Si.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Si.sm_m ||
                (Si.sm_m = {
                  proto: Si,
                  fields: {
                    allow_refund: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    in_inventory: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    bundle: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    gameid: { n: 4, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    asset: { n: 5, c: J },
                    current_state: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_name: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Si.sm_m
            );
          }
          static MBF() {
            return Si.sm_mbf || (Si.sm_mbf = i.w0(Si.M())), Si.sm_mbf;
          }
          toObject(r = !1) {
            return Si.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Si.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Si.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Si();
            return Si.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Si.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Si.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_QueryRefundAllowed_Response_Asset";
          }
        }
        class Ri extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ri.prototype.steamid || i.Sg(Ri.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ri.sm_m ||
                (Ri.sm_m = {
                  proto: Ri,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    transactionid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    force: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Ri.sm_m
            );
          }
          static MBF() {
            return Ri.sm_mbf || (Ri.sm_mbf = i.w0(Ri.M())), Ri.sm_mbf;
          }
          toObject(r = !1) {
            return Ri.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ri.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ri.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ri();
            return Ri.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ri.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ri.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RefundPurchase_Request";
          }
        }
        class fs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return fs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new fs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new fs();
            return fs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return fs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              fs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RefundPurchase_Response";
          }
        }
        class oi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oi.prototype.steamid || i.Sg(oi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oi.sm_m ||
                (oi.sm_m = {
                  proto: oi,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    language: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              oi.sm_m
            );
          }
          static MBF() {
            return oi.sm_mbf || (oi.sm_mbf = i.w0(oi.M())), oi.sm_mbf;
          }
          toObject(r = !1) {
            return oi.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(oi.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(oi.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new oi();
            return oi.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(oi.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(oi.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEligibleOneOffRefunds_Request";
          }
        }
        class Ci extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ci.prototype.allow_refund || i.Sg(Ci.M()),
              l.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ci.sm_m ||
                (Ci.sm_m = {
                  proto: Ci,
                  fields: {
                    allow_refund: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    allow_ticket: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    assets: { n: 3, c: _i, r: !0, q: !0 },
                    descriptions: { n: 4, c: V, r: !0, q: !0 },
                  },
                }),
              Ci.sm_m
            );
          }
          static MBF() {
            return Ci.sm_mbf || (Ci.sm_mbf = i.w0(Ci.M())), Ci.sm_mbf;
          }
          toObject(r = !1) {
            return Ci.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ci.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ci.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ci();
            return Ci.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ci.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ci.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEligibleOneOffRefunds_Response";
          }
        }
        class _i extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _i.prototype.refundid || i.Sg(_i.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _i.sm_m ||
                (_i.sm_m = {
                  proto: _i,
                  fields: {
                    refundid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    parent_refundid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    allow_refund: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    refund_removes_item_from_inventory: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    refund_returns_item_to_inventory: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    refund_amount: {
                      n: 6,
                      br: i.qM.readInt64String,
                      bw: i.gp.writeInt64String,
                    },
                    refund_ecurrencycode: {
                      n: 7,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    related_microtxn_id: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    related_market_purchase_id: {
                      n: 9,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    related_trade_id: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    asset: { n: 11, c: J },
                    current_state: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    item_name: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    allow_ticket: {
                      n: 14,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    refund_complete: {
                      n: 15,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    refund_desired: {
                      n: 16,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              _i.sm_m
            );
          }
          static MBF() {
            return _i.sm_mbf || (_i.sm_mbf = i.w0(_i.M())), _i.sm_mbf;
          }
          toObject(r = !1) {
            return _i.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(_i.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_i.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new _i();
            return _i.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_i.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return _i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_i.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              _i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEligibleOneOffRefunds_Response_Asset";
          }
        }
        class ra extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ra.prototype.steamid || i.Sg(ra.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ra.sm_m ||
                (ra.sm_m = {
                  proto: ra,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    refundid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ra.sm_m
            );
          }
          static MBF() {
            return ra.sm_mbf || (ra.sm_mbf = i.w0(ra.M())), ra.sm_mbf;
          }
          toObject(r = !1) {
            return ra.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ra.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ra.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ra();
            return ra.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ra.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ra.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ra.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ra.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ProcessOneOffRefund_Request";
          }
        }
        class Is extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Is.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Is();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Is();
            return Is.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Is.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Is.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ProcessOneOffRefund_Response";
          }
        }
        class ia extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ia.prototype.classid || i.Sg(ia.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ia.sm_m ||
                (ia.sm_m = {
                  proto: ia,
                  fields: {
                    classid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    instanceid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ia.sm_m
            );
          }
          static MBF() {
            return ia.sm_mbf || (ia.sm_mbf = i.w0(ia.M())), ia.sm_mbf;
          }
          toObject(r = !1) {
            return ia.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ia.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ia.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ia();
            return ia.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ia.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ia.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ia.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ia.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassProperties_Request";
          }
        }
        class aa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              aa.prototype.properties || i.Sg(aa.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              aa.sm_m ||
                (aa.sm_m = {
                  proto: aa,
                  fields: { properties: { n: 1, c: ta, r: !0, q: !0 } },
                }),
              aa.sm_m
            );
          }
          static MBF() {
            return aa.sm_mbf || (aa.sm_mbf = i.w0(aa.M())), aa.sm_mbf;
          }
          toObject(r = !1) {
            return aa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(aa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(aa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new aa();
            return aa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(aa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return aa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(aa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              aa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassProperties_Response";
          }
        }
        class ta extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ta.prototype.property || i.Sg(ta.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ta.sm_m ||
                (ta.sm_m = {
                  proto: ta,
                  fields: {
                    property: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    value: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    instance: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              ta.sm_m
            );
          }
          static MBF() {
            return ta.sm_mbf || (ta.sm_mbf = i.w0(ta.M())), ta.sm_mbf;
          }
          toObject(r = !1) {
            return ta.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ta.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ta.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ta();
            return ta.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ta.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ta.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ta.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ta.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassProperties_Response_Property";
          }
        }
        class sa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sa.prototype.tradeid || i.Sg(sa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sa.sm_m ||
                (sa.sm_m = {
                  proto: sa,
                  fields: {
                    tradeid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    force: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    in_recovery: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              sa.sm_m
            );
          }
          static MBF() {
            return sa.sm_mbf || (sa.sm_mbf = i.w0(sa.M())), sa.sm_mbf;
          }
          toObject(r = !1) {
            return sa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(sa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(sa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new sa();
            return sa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(sa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return sa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(sa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              sa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RevertTrade_Request";
          }
        }
        class $s extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return $s.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new $s();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new $s();
            return $s.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return $s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              $s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RevertTrade_Response";
          }
        }
        class la extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              la.prototype.steamid || i.Sg(la.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              la.sm_m ||
                (la.sm_m = {
                  proto: la,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    force: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    account_recovery: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    deauth_all_devices: {
                      n: 4,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    apply_cooldown: {
                      n: 5,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              la.sm_m
            );
          }
          static MBF() {
            return la.sm_mbf || (la.sm_mbf = i.w0(la.M())), la.sm_mbf;
          }
          toObject(r = !1) {
            return la.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(la.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(la.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new la();
            return la.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(la.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return la.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(la.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              la.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RevertAllTrades_Request";
          }
        }
        class ma extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ma.prototype.trades || i.Sg(ma.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ma.sm_m ||
                (ma.sm_m = {
                  proto: ma,
                  fields: {
                    trades: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    errors: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    trade_offers: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    escrowed_trades: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ma.sm_m
            );
          }
          static MBF() {
            return ma.sm_mbf || (ma.sm_mbf = i.w0(ma.M())), ma.sm_mbf;
          }
          toObject(r = !1) {
            return ma.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ma.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ma.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ma();
            return ma.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ma.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ma.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ma.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ma.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RevertAllTrades_Response";
          }
        }
        class Ba extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ba.prototype.ack_type || i.Sg(Ba.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ba.sm_m ||
                (Ba.sm_m = {
                  proto: Ba,
                  fields: {
                    ack_type: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    acknowledge: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Ba.sm_m
            );
          }
          static MBF() {
            return Ba.sm_mbf || (Ba.sm_mbf = i.w0(Ba.M())), Ba.sm_mbf;
          }
          toObject(r = !1) {
            return Ba.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ba.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ba.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ba();
            return Ba.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ba.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ba.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ba.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ba.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AcknowledgeTradeUI_Request";
          }
        }
        class Ks extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ks.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ks();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ks();
            return Ks.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ks.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ks.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AcknowledgeTradeUI_Response";
          }
        }
        class Xs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Xs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Xs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Xs();
            return Xs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Xs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Xs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_NeedTradeUI_Request";
          }
        }
        class ea extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ea.prototype.needed_types || i.Sg(ea.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ea.sm_m ||
                (ea.sm_m = {
                  proto: ea,
                  fields: {
                    needed_types: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readInt32,
                      pbr: i.qM.readPackedInt32,
                      bw: i.gp.writeRepeatedInt32,
                    },
                  },
                }),
              ea.sm_m
            );
          }
          static MBF() {
            return ea.sm_mbf || (ea.sm_mbf = i.w0(ea.M())), ea.sm_mbf;
          }
          toObject(r = !1) {
            return ea.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ea.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ea.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ea();
            return ea.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ea.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ea.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ea.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ea.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_NeedTradeUI_Response";
          }
        }
        class ba extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ba.prototype.steamid || i.Sg(ba.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ba.sm_m ||
                (ba.sm_m = {
                  proto: ba,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    duration_seconds: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cooldown_type: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              ba.sm_m
            );
          }
          static MBF() {
            return ba.sm_mbf || (ba.sm_mbf = i.w0(ba.M())), ba.sm_mbf;
          }
          toObject(r = !1) {
            return ba.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ba.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ba.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ba();
            return ba.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ba.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ba.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ba.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ba.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ApplyTradeCooldown_Request";
          }
        }
        class Ys extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ys.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ys();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ys();
            return Ys.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ys.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ys.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ApplyTradeCooldown_Response";
          }
        }
        var Xl;
        ((m) => {
          function r(u, M, z) {
            return u.SendMsg(
              "Econ.GetTradePermissionsForApp#1",
              (0, e.I8)(Vr, M, z),
              Jr,
              { ePrivilege: 1 },
            );
          }
          m.GetTradePermissionsForApp = r;
          function a(u, M, z) {
            return u.SendMsg("Econ.GetEconSummary#1", (0, e.I8)(Qr, M, z), Tr, {
              ePrivilege: 0,
            });
          }
          m.GetEconSummary = a;
          function s(u, M, z) {
            return u.SendMsg(
              "Econ.GetTopTradePartners#1",
              (0, e.I8)(kr, M, z),
              Hr,
              { ePrivilege: 0 },
            );
          }
          m.GetTopTradePartners = s;
          function b(u, M, z) {
            return u.SendMsg(
              "Econ.SetTradeBanTime#1",
              (0, e.I8)(Pr, M, z),
              zs,
              { ePrivilege: 2 },
            );
          }
          m.SetTradeBanTime = b;
          function w(u, M, z) {
            return u.SendMsg(
              "Econ.SetForceTradeTrustedTime#1",
              (0, e.I8)(pr, M, z),
              zs,
              { ePrivilege: 0 },
            );
          }
          m.SetForceTradeTrustedTime = w;
          function g(u, M, z) {
            return u.SendMsg(
              "Econ.CreateTradeOffer#1",
              (0, e.I8)(vr, M, z),
              Ar,
              { ePrivilege: 1 },
            );
          }
          m.CreateTradeOffer = g;
          function n(u, M, z) {
            return u.SendMsg("Econ.SendGift#1", (0, e.I8)(Dr, M, z), Gr, {
              ePrivilege: 7,
              eWebAPIKeyRequirement: 5,
            });
          }
          m.SendGift = n;
          function x(u, M, z) {
            return u.SendMsg("Econ.GetTradeOffers#1", (0, e.I8)(Er, M, z), Sr, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          m.GetTradeOffers = x;
          function F(u, M, z) {
            return u.SendMsg("Econ.GetTradeOffer#1", (0, e.I8)(_r, M, z), er, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          m.GetTradeOffer = F;
          function U(u, M, z) {
            return u.SendMsg(
              "Econ.GetTradeOfferForAnyUser#1",
              (0, e.I8)(ri, M, z),
              er,
              { ePrivilege: 0 },
            );
          }
          m.GetTradeOfferForAnyUser = U;
          function I(u, M, z) {
            return u.SendMsg(
              "Econ.TradeLeftEscrow#1",
              (0, e.I8)(Rr, M, z),
              cs,
              { ePrivilege: 0 },
            );
          }
          m.TradeLeftEscrow = I;
          function $(u, M, z) {
            return u.SendMsg(
              "Econ.GetTradeHoldDurations#1",
              (0, e.I8)(or, M, z),
              Cr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetTradeHoldDurations = $;
          function Gt(u, M, z) {
            return u.SendMsg(
              "Econ.GetTradeOfferForConfirmation#1",
              (0, e.I8)(ii, M, z),
              ai,
              { ePrivilege: 0 },
            );
          }
          m.GetTradeOfferForConfirmation = Gt;
          function ot(u, M, z) {
            return u.SendMsg(
              "Econ.AcceptTradeOffer#1",
              (0, e.I8)(ti, M, z),
              si,
              { ePrivilege: 1 },
            );
          }
          m.AcceptTradeOffer = ot;
          function E(u, M, z) {
            return u.SendMsg(
              "Econ.ConfirmTradeOffer#1",
              (0, e.I8)(li, M, z),
              mi,
              { ePrivilege: 0 },
            );
          }
          m.ConfirmTradeOffer = E;
          function rs(u, M, z) {
            return u.SendMsg(
              "Econ.DeclineTradeOffer#1",
              (0, e.I8)(Bi, M, z),
              js,
              { ePrivilege: 1 },
            );
          }
          m.DeclineTradeOffer = rs;
          function k(u, M, z) {
            return u.SendMsg(
              "Econ.CancelTradeOffer#1",
              (0, e.I8)(ei, M, z),
              Ws,
              { ePrivilege: 1 },
            );
          }
          m.CancelTradeOffer = k;
          function Et(u, M, z) {
            return u.SendMsg(
              "Econ.CancelAllTradeOffers#1",
              (0, e.I8)(bi, M, z),
              wi,
              { ePrivilege: 2 },
            );
          }
          m.CancelAllTradeOffers = Et;
          function O(u, M) {
            return u.SendNotification(
              "Econ.NotifyCancelAllTradeOffers#1",
              (0, e.I8)(ui, M),
              { ePrivilege: 2 },
            );
          }
          m.NotifyCancelAllTradeOffers = O;
          function f(u, M, z) {
            return u.SendMsg(
              "Econ.IsSafeToCommitTrade#1",
              (0, e.I8)(Mi, M, z),
              zs,
              { ePrivilege: 0 },
            );
          }
          m.IsSafeToCommitTrade = f;
          function Y(u, M, z) {
            return u.SendMsg(
              "Econ.GetTradeOffersSummary#1",
              (0, e.I8)(zi, M, z),
              di,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetTradeOffersSummary = Y;
          function Bs(u, M, z) {
            return u.SendMsg("Econ.GetTradeHistory#1", (0, e.I8)(gi, M, z), q, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          m.GetTradeHistory = Bs;
          function el(u, M, z) {
            return u.SendMsg("Econ.GetTradeStatus#1", (0, e.I8)(ni, M, z), q, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          m.GetTradeStatus = el;
          function Wl(u, M, z) {
            return u.SendMsg(
              "Econ.GetProvisionalTradeHistory#1",
              (0, e.I8)(Wi, M, z),
              q,
              { ePrivilege: 1 },
            );
          }
          m.GetProvisionalTradeHistory = Wl;
          function nl(u, M, z) {
            return u.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, e.I8)(ar, M, z),
              tr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetInventoryItemsWithDescriptions = nl;
          function Fl(u, M, z) {
            return u.SendMsg(
              "Econ.CanUserTradeWithAnyone#1",
              (0, e.I8)(ns, M, z),
              ur,
              { ePrivilege: 1 },
            );
          }
          m.CanUserTradeWithAnyone = Fl;
          function Ul(u, M, z) {
            return u.SendMsg(
              "Econ.CanUserTradeWithPartner#1",
              (0, e.I8)(Fi, M, z),
              Ui,
              { ePrivilege: 1 },
            );
          }
          m.CanUserTradeWithPartner = Ul;
          function xl(u, M, z) {
            return u.SendMsg(
              "Econ.GetUserTradeEligibility#1",
              (0, e.I8)(xi, M, z),
              ur,
              { ePrivilege: 0 },
            );
          }
          m.GetUserTradeEligibility = xl;
          function Ol(u, M, z) {
            return u.SendMsg(
              "Econ.CheckTradePartnerTrustworthiness#1",
              (0, e.I8)(Oi, M, z),
              hi,
              { ePrivilege: 1 },
            );
          }
          m.CheckTradePartnerTrustworthiness = Ol;
          function hl(u, M, z) {
            return u.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, e.I8)(sr, M, z),
              lr,
              { ePrivilege: 1 },
            );
          }
          m.GetTradeOfferAccessToken = hl;
          function fl(u, M, z) {
            return u.SendMsg(
              "Econ.CheckTradeOfferAccessToken#1",
              (0, e.I8)(fi, M, z),
              Fs,
              { ePrivilege: 0 },
            );
          }
          m.CheckTradeOfferAccessToken = fl;
          function j(u, M, z) {
            return u.SendMsg(
              "Econ.FlushInventoryCache#1",
              (0, e.I8)(Ii, M, z),
              $i,
              { ePrivilege: 0, eWebAPIKeyRequirement: 5 },
            );
          }
          m.FlushInventoryCache = j;
          function W(u, M, z) {
            return u.SendMsg(
              "Econ.FlushInventoryServiceDBOs#1",
              (0, e.I8)(Ki, M, z),
              Us,
              { ePrivilege: 0 },
            );
          }
          m.FlushInventoryServiceDBOs = W;
          function h(u, M, z) {
            return u.SendMsg(
              "Econ.FlushAssetAppearanceCache#1",
              (0, e.I8)(Xi, M, z),
              xs,
              { ePrivilege: 7, eWebAPIKeyRequirement: 5 },
            );
          }
          m.FlushAssetAppearanceCache = h;
          function jB(u, M, z) {
            return u.SendMsg(
              "Econ.FlushContextCache#1",
              (0, e.I8)(Yi, M, z),
              Os,
              { ePrivilege: 7, eWebAPIKeyRequirement: 5 },
            );
          }
          m.FlushContextCache = jB;
          function WB(u, M, z) {
            return u.SendMsg(
              "Econ.GetEconAppSettings#1",
              (0, e.I8)(Zi, M, z),
              Vi,
              { ePrivilege: 7 },
            );
          }
          m.GetEconAppSettings = WB;
          function nB(u, M, z) {
            return u.SendMsg(
              "Econ.GetItemShopPartnerToken#1",
              (0, e.I8)(Ji, M, z),
              Qi,
              { ePrivilege: 0 },
            );
          }
          m.GetItemShopPartnerToken = nB;
          function FB(u, M, z) {
            return u.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, e.I8)(mr, M, z),
              Br,
              { ePrivilege: 1 },
            );
          }
          m.ClientGetItemShopOverlayAuthURL = FB;
          function UB(u, M, z) {
            return u.SendMsg(
              "Econ.CheckItemShopPartnerHMAC#1",
              (0, e.I8)(Li, M, z),
              Ti,
              { ePrivilege: 0 },
            );
          }
          m.CheckItemShopPartnerHMAC = UB;
          function xB(u, M, z) {
            return u.SendMsg(
              "Econ.StartItemShopTxn#1",
              (0, e.I8)(ki, M, z),
              Ni,
              { ePrivilege: 2 },
            );
          }
          m.StartItemShopTxn = xB;
          function OB(u, M, z) {
            return u.SendMsg(
              "Econ.GetItemShopTxnState#1",
              (0, e.I8)(Hi, M, z),
              Pi,
              { ePrivilege: 2 },
            );
          }
          m.GetItemShopTxnState = OB;
          function hB(u, M, z) {
            return u.SendMsg(
              "Econ.FinishItemShopTxn#1",
              (0, e.I8)(pi, M, z),
              hs,
              { ePrivilege: 2 },
            );
          }
          m.FinishItemShopTxn = hB;
          function fB(u, M, z) {
            return u.SendMsg(
              "Econ.BuildItemShopReturnURL#1",
              (0, e.I8)(vi, M, z),
              qi,
              { ePrivilege: 2 },
            );
          }
          m.BuildItemShopReturnURL = fB;
          function IB(u, M, z) {
            return u.SendMsg(
              "Econ.AppSupportsRefund#1",
              (0, e.I8)(Ai, M, z),
              Di,
              { ePrivilege: 0 },
            );
          }
          m.AppSupportsRefund = IB;
          function $B(u, M, z) {
            return u.SendMsg(
              "Econ.QueryRefundAllowed#1",
              (0, e.I8)(Gi, M, z),
              Ei,
              { ePrivilege: 0 },
            );
          }
          m.QueryRefundAllowed = $B;
          function KB(u, M, z) {
            return u.SendMsg("Econ.RefundPurchase#1", (0, e.I8)(Ri, M, z), fs, {
              ePrivilege: 0,
            });
          }
          m.RefundPurchase = KB;
          function XB(u, M, z) {
            return u.SendMsg(
              "Econ.GetEligibleOneOffRefunds#1",
              (0, e.I8)(oi, M, z),
              Ci,
              { ePrivilege: 0 },
            );
          }
          m.GetEligibleOneOffRefunds = XB;
          function YB(u, M, z) {
            return u.SendMsg(
              "Econ.ProcessOneOffRefund#1",
              (0, e.I8)(ra, M, z),
              Is,
              { ePrivilege: 0 },
            );
          }
          m.ProcessOneOffRefund = YB;
          function ZB(u, M, z) {
            return u.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, e.I8)(P, M, z),
              p,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetClassInfo = ZB;
          function VB(u, M, z) {
            return u.SendMsg(
              "Econ.GetAssetClassInfoInternal#1",
              (0, e.I8)(P, M, z),
              p,
              { ePrivilege: 0 },
            );
          }
          m.GetAssetClassInfoInternal = VB;
          function JB(u, M, z) {
            return u.SendMsg(
              "Econ.GetAssetClassProperties#1",
              (0, e.I8)(ia, M, z),
              aa,
              { ePrivilege: 0 },
            );
          }
          m.GetAssetClassProperties = JB;
          function QB(u, M, z) {
            return u.SendMsg("Econ.RevertTrade#1", (0, e.I8)(sa, M, z), $s, {
              ePrivilege: 1,
            });
          }
          m.RevertTrade = QB;
          function LB(u, M, z) {
            return u.SendMsg(
              "Econ.RevertAllTrades#1",
              (0, e.I8)(la, M, z),
              ma,
              { ePrivilege: 1 },
            );
          }
          m.RevertAllTrades = LB;
          function TB(u, M, z) {
            return u.SendMsg(
              "Econ.ApplyTradeCooldown#1",
              (0, e.I8)(ba, M, z),
              Ys,
              { ePrivilege: 1 },
            );
          }
          m.ApplyTradeCooldown = TB;
          function kB(u, M, z) {
            return u.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, e.I8)(rr, M, z),
              ir,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetPropertySchema = kB;
          function NB(u, M, z) {
            return u.SendMsg(
              "Econ.AcknowledgeTradeUI#1",
              (0, e.I8)(Ba, M, z),
              Ks,
              { ePrivilege: 1 },
            );
          }
          m.AcknowledgeTradeUI = NB;
          function HB(u, M, z) {
            return u.SendMsg("Econ.NeedTradeUI#1", (0, e.I8)(Xs, M, z), ea, {
              ePrivilege: 1,
            });
          }
          m.NeedTradeUI = HB;
        })(Xl || (Xl = {}));
        function $m(m) {
          const { rgAssetProperties: r, appid: a } = m,
            [s, b] = (0, c.useState)(""),
            [w, g] = (0, c.useState)(Km(r)),
            n = (I, $) => {
              const Gt = w.map((ot, E) => (E === I ? $ : ot));
              g(Gt);
            },
            x = () => {
              const I = w.slice();
              I.push({
                id: 0,
                name: "",
                type: Om,
                min: null,
                max: null,
                hide_from_description: !1,
              }),
                g(I);
            },
            F = (I) => {
              const $ = w.slice();
              $.splice(I, 1), g($);
            },
            U = async () => {
              b("");
              const I = new FormData();
              I.append("sessionid", (0, Ct.KC)()),
                I.append("asset_properties", JSON.stringify(w));
              const $ = await fetch(
                `${ll.TS.PARTNER_BASE_URL}apps/setassetpropertyschema/${a}`,
                { method: "POST", body: I, credentials: "same-origin" },
              );
              if (!$ || !$.ok) {
                b("Failed to save properties");
                return;
              }
              (await $.json()).success
                ? b("Saved successfully")
                : b("Failed to save properties");
            };
          return (0, B.jsxs)("div", {
            children: [
              (0, B.jsx)("div", {
                children: w.map((I, $) =>
                  (0, B.jsx)(
                    Xm,
                    {
                      schema: I,
                      index: $,
                      onUpdate: (Gt) => {
                        n($, Gt);
                      },
                      onRemove: (Gt) => F(Gt),
                    },
                    $,
                  ),
                ),
              }),
              (0, B.jsx)("div", {
                className: Ms.AddPropertyButton,
                children: (0, B.jsx)(Rt.$n, {
                  onClick: x,
                  children: "Add Property",
                }),
              }),
              (0, B.jsx)("div", {
                className: Ms.SaveButton,
                children: (0, B.jsx)(Rt.$n, { onClick: U, children: "Save" }),
              }),
              (0, B.jsx)("div", { className: Ms.StatusMessage, children: s }),
            ],
          });
        }
        function Km(m) {
          return m
            ? m.map((r) => ({
                id: Number(r.id),
                name: r.name,
                type: Number(r.type),
                min: r.min ? Number(r.min) : 0,
                max: r.max ? Number(r.max) : 0,
                hide_from_description: Number(r.hide_from_description) === 1,
              }))
            : [];
        }
        function Xm(m) {
          const { schema: r, index: a, onUpdate: s, onRemove: b } = m;
          return (0, B.jsxs)("div", {
            className: Ms.AssetPropertyRow,
            children: [
              (0, B.jsx)("div", { children: "ID" }),
              (0, B.jsx)(ml.BA, {
                className: Ms.PropertyID,
                type: "number",
                value: r.id !== 0 ? r.id : "",
                placeholder: "Property id",
                onChange: (F) => {
                  s({ ...r, id: F.target.valueAsNumber });
                },
              }),
              (0, B.jsx)("div", { children: "Name" }),
              (0, B.jsx)(ml.BA, {
                className: Ms.PropertyName,
                type: "text",
                value: r.name,
                placeholder: "Property name",
                onChange: (F) => {
                  s({ ...r, name: F.target.value });
                },
              }),
              (0, B.jsx)("div", { children: "Type" }),
              (0, B.jsx)(Ym, {
                propertyType: r.type,
                onUpdateType: (F) => {
                  s({ ...r, type: F });
                },
              }),
              (0, B.jsx)("div", { children: "Min" }),
              (0, B.jsx)(ml.BA, {
                className: Ms.PropertyRange,
                type: "number",
                value: r.min ?? "",
                placeholder: "Min value",
                onChange: (F) => {
                  s({ ...r, min: F.target.valueAsNumber });
                },
              }),
              (0, B.jsx)("div", { children: "Max" }),
              (0, B.jsx)(ml.BA, {
                className: Ms.PropertyRange,
                type: "number",
                value: r.max ?? "",
                placeholder: "Max value",
                onChange: (F) => {
                  s({ ...r, max: F.target.valueAsNumber });
                },
              }),
              (0, B.jsx)("div", { children: "Hide" }),
              (0, B.jsx)(ml.BA, {
                className: Ms.HideFromDescription,
                type: "checkbox",
                checked: r.hide_from_description,
                onChange: (F) => {
                  s({ ...r, hide_from_description: F.target.checked });
                },
              }),
              (0, B.jsx)(Rt.$n, {
                className: Ms.RemoveButton,
                onClick: () => b(a),
                children: "Remove",
              }),
            ],
          });
        }
        function Ym(m) {
          const { propertyType: r, onUpdateType: a } = m,
            s = [
              { label: "Integer", data: fm },
              { label: "Floating point", data: hm },
              { label: "String", data: Im },
            ],
            b = (w) => {
              a(w.data);
            };
          return (0, B.jsx)("div", {
            className: Ms.PropertyType,
            children: (0, B.jsx)(Rt.ZU, {
              strDefaultLabel: "Choose property type",
              controlled: !0,
              rgOptions: s,
              onChange: b,
              selectedOption: r,
            }),
          });
        }
        var il = d(65038),
          Yl = d(47997);
        const DB = 0,
          Zm = 1,
          GB = 2,
          EB = 3,
          SB = 4,
          RB = 5,
          oB = 6,
          CB = 7,
          _B = 8,
          re = 9,
          ie = 10,
          ae = 11,
          te = 12,
          se = 13,
          le = 14,
          me = 15,
          Be = 16,
          ee = 17,
          be = 18,
          we = 19,
          ue = 20,
          Me = 21,
          ze = 22;
        function de(m) {
          return "unknown EAppContentPurgeStatus ( " + m + " )";
        }
        function ge(m) {
          return "unknown EAppContentDetectionType ( " + m + " )";
        }
        function ye(m) {
          return "unknown EAppAntiCheatType ( " + m + " )";
        }
        function ce(m) {
          return "unknown EAppGameEngineType ( " + m + " )";
        }
        class wa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wa.prototype.type || i.Sg(wa.M()),
              l.Message.initialize(this, r, 0, -1, [13, 16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wa.sm_m ||
                (wa.sm_m = {
                  proto: wa,
                  fields: {
                    type: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    source_id: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    cell_id: { n: 3, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    load: { n: 4, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    weighted_load: {
                      n: 5,
                      br: i.qM.readFloat,
                      bw: i.gp.writeFloat,
                    },
                    num_entries_in_client_list: {
                      n: 6,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    steam_china_only: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    host: { n: 8, br: i.qM.readString, bw: i.gp.writeString },
                    vhost: { n: 9, br: i.qM.readString, bw: i.gp.writeString },
                    use_as_proxy: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    proxy_request_path_template: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    https_support: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    allowed_app_ids: {
                      n: 13,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    priority_class: {
                      n: 15,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    bypass_proxies_of_type: {
                      n: 16,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                    group: { n: 17, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              wa.sm_m
            );
          }
          static MBF() {
            return wa.sm_mbf || (wa.sm_mbf = i.w0(wa.M())), wa.sm_mbf;
          }
          toObject(r = !1) {
            return wa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(wa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(wa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new wa();
            return wa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(wa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return wa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(wa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              wa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_ServerInfo";
          }
        }
        class ua extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ua.prototype.type || i.Sg(ua.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ua.sm_m ||
                (ua.sm_m = {
                  proto: ua,
                  fields: {
                    type: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    source_id: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    hostname: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ua.sm_m
            );
          }
          static MBF() {
            return ua.sm_mbf || (ua.sm_mbf = i.w0(ua.M())), ua.sm_mbf;
          }
          toObject(r = !1) {
            return ua.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ua.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ua.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ua();
            return ua.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ua.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ua.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ua.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ua.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_ConnectedSteamPipeServerInfo";
          }
        }
        class Mr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.cell_id || i.Sg(Mr.M()),
              l.Message.initialize(this, r, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    cell_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    max_servers: {
                      n: 2,
                      d: 20,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    ip_override: {
                      n: 3,
                      d: "",
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    launcher_type: {
                      n: 4,
                      d: 0,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    ipv6_public: {
                      n: 5,
                      d: "",
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    current_connections: { n: 6, c: ua, r: !0, q: !0 },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = i.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Mr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Mr();
            return Mr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetServersForSteamPipe_Request";
          }
        }
        class zr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.servers || i.Sg(zr.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    servers: { n: 1, c: wa, r: !0, q: !0 },
                    no_change: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = i.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(zr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new zr();
            return zr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetServersForSteamPipe_Response";
          }
        }
        class dr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.appid || i.Sg(dr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    depotid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    source_manifestid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    target_manifestid: {
                      n: 4,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = i.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(dr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new dr();
            return dr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetDepotPatchInfo_Request";
          }
        }
        class gr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.is_available || i.Sg(gr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    is_available: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    patch_size: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    patched_chunks_size: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = i.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(gr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new gr();
            return gr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetDepotPatchInfo_Response";
          }
        }
        class yr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.cached_signature || i.Sg(yr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    cached_signature: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = i.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(yr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new yr();
            return yr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetClientUpdateHosts_Request";
          }
        }
        class cr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.hosts_kv || i.Sg(cr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    hosts_kv: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    valid_until_time: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    ip_country: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = i.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(cr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new cr();
            return cr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetClientUpdateHosts_Response";
          }
        }
        class jr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.app_id || i.Sg(jr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    depot_id: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    manifest_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    app_branch: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    branch_password_hash: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = i.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(jr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new jr();
            return jr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetManifestRequestCode_Request";
          }
        }
        class Wr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.manifest_request_code || i.Sg(Wr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    manifest_request_code: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = i.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Wr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Wr();
            return Wr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetManifestRequestCode_Response";
          }
        }
        class nr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.depot_id || i.Sg(nr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    host_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    app_id: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = i.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(nr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new nr();
            return nr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetCDNAuthToken_Request";
          }
        }
        class Fr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.token || i.Sg(Fr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fr.sm_m ||
                (Fr.sm_m = {
                  proto: Fr,
                  fields: {
                    token: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    expiration_time: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Fr.sm_m
            );
          }
          static MBF() {
            return Fr.sm_mbf || (Fr.sm_mbf = i.w0(Fr.M())), Fr.sm_mbf;
          }
          toObject(r = !1) {
            return Fr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Fr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Fr();
            return Fr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetCDNAuthToken_Response";
          }
        }
        class Ur extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.remote_client_id || i.Sg(Ur.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ur.sm_m ||
                (Ur.sm_m = {
                  proto: Ur,
                  fields: {
                    remote_client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    server_remote_client_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    app_id: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    current_build_id: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ur.sm_m
            );
          }
          static MBF() {
            return Ur.sm_mbf || (Ur.sm_mbf = i.w0(Ur.M())), Ur.sm_mbf;
          }
          toObject(r = !1) {
            return Ur.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ur.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ur();
            return Ur.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_RequestPeerContentServer_Request";
          }
        }
        class xr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.server_port || i.Sg(xr.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    server_port: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    installed_depots: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    access_token: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = i.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(xr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new xr();
            return xr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_RequestPeerContentServer_Response";
          }
        }
        class Or extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.remote_client_id || i.Sg(Or.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    remote_client_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    server_remote_client_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = i.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Or.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Or();
            return Or.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetPeerContentInfo_Request";
          }
        }
        class hr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.appids || i.Sg(hr.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    ip_public: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = i.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(hr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new hr();
            return hr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetPeerContentInfo_Response";
          }
        }
        class fr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.detection_type || i.Sg(fr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    detection_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = i.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(fr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new fr();
            return fr.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDepotContentDetection_GetAllDetectedAppContent_Request";
          }
        }
        class Ma extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ma.prototype.app_id || i.Sg(Ma.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ma.sm_m ||
                (Ma.sm_m = {
                  proto: Ma,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    depot_id: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    detected_content: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              Ma.sm_m
            );
          }
          static MBF() {
            return Ma.sm_mbf || (Ma.sm_mbf = i.w0(Ma.M())), Ma.sm_mbf;
          }
          toObject(r = !1) {
            return Ma.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ma.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ma.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ma();
            return Ma.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ma.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ma.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ma.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ma.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "DetectedAppContent";
          }
        }
        class Ir extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.detected_app_content || i.Sg(Ir.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
                  fields: {
                    detected_app_content: { n: 1, c: Ma, r: !0, q: !0 },
                  },
                }),
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = i.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ir.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ir();
            return Ir.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDepotContentDetection_GetAllDetectedAppContent_Response";
          }
        }
        var Zl;
        ((m) => {
          function r(x, F, U) {
            return x.SendMsg(
              "ContentServerDirectory.GetServersForSteamPipe#1",
              (0, e.I8)(Mr, F, U),
              zr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetServersForSteamPipe = r;
          function a(x, F, U) {
            return x.SendMsg(
              "ContentServerDirectory.GetDepotPatchInfo#1",
              (0, e.I8)(dr, F, U),
              gr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetDepotPatchInfo = a;
          function s(x, F, U) {
            return x.SendMsg(
              "ContentServerDirectory.GetClientUpdateHosts#1",
              (0, e.I8)(yr, F, U),
              cr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetClientUpdateHosts = s;
          function b(x, F, U) {
            return x.SendMsg(
              "ContentServerDirectory.GetManifestRequestCode#1",
              (0, e.I8)(jr, F, U),
              Wr,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          m.GetManifestRequestCode = b;
          function w(x, F, U) {
            return x.SendMsg(
              "ContentServerDirectory.GetCDNAuthToken#1",
              (0, e.I8)(nr, F, U),
              Fr,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          m.GetCDNAuthToken = w;
          function g(x, F, U) {
            return x.SendMsg(
              "ContentServerDirectory.RequestPeerContentServer#1",
              (0, e.I8)(Ur, F, U),
              xr,
              { ePrivilege: 1 },
            );
          }
          m.RequestPeerContentServer = g;
          function n(x, F, U) {
            return x.SendMsg(
              "ContentServerDirectory.GetPeerContentInfo#1",
              (0, e.I8)(Or, F, U),
              hr,
              { ePrivilege: 1 },
            );
          }
          m.GetPeerContentInfo = n;
        })(Zl || (Zl = {}));
        var Vl;
        ((m) => {
          function r(a, s, b) {
            return a.SendMsg(
              "DepotContentDetection.GetAllDetectedAppContent#1",
              (0, e.I8)(fr, s, b),
              Ir,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          m.GetAllDetectedAppContent = r;
        })(Vl || (Vl = {}));
        class Zs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Zs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Zs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Zs();
            return Zs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Zs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Zs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_ReloadOriginStorageInfo_Notification";
          }
        }
        class za extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              za.prototype.depot_id || i.Sg(za.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              za.sm_m ||
                (za.sm_m = {
                  proto: za,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    sha: { n: 2, br: i.qM.readBytes, bw: i.gp.writeBytes },
                    origin_id: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    eresult: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              za.sm_m
            );
          }
          static MBF() {
            return za.sm_mbf || (za.sm_mbf = i.w0(za.M())), za.sm_mbf;
          }
          toObject(r = !1) {
            return za.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(za.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(za.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new za();
            return za.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(za.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return za.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(za.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              za.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_CSFailedToReadChunkFromStorage_Notification";
          }
        }
        class da extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              da.prototype.app_id || i.Sg(da.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              da.sm_m ||
                (da.sm_m = {
                  proto: da,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              da.sm_m
            );
          }
          static MBF() {
            return da.sm_mbf || (da.sm_mbf = i.w0(da.M())), da.sm_mbf;
          }
          toObject(r = !1) {
            return da.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(da.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(da.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new da();
            return da.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(da.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return da.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(da.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              da.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppContentPurge_Request";
          }
        }
        class Vs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Vs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Vs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Vs();
            return Vs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Vs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Vs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppContentPurge_Response";
          }
        }
        class ga extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ga.prototype.app_id || i.Sg(ga.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ga.sm_m ||
                (ga.sm_m = {
                  proto: ga,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              ga.sm_m
            );
          }
          static MBF() {
            return ga.sm_mbf || (ga.sm_mbf = i.w0(ga.M())), ga.sm_mbf;
          }
          toObject(r = !1) {
            return ga.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ga.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ga.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ga();
            return ga.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ga.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ga.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ga.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ga.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppContentPurgeStatus_Request";
          }
        }
        class ya extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ya.prototype.app_id || i.Sg(ya.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ya.sm_m ||
                (ya.sm_m = {
                  proto: ya,
                  fields: {
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    status: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    accountid_requester: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    accountid_confirmer: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    time_requested: {
                      n: 5,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_confirmed: {
                      n: 6,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    time_ended: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ya.sm_m
            );
          }
          static MBF() {
            return ya.sm_mbf || (ya.sm_mbf = i.w0(ya.M())), ya.sm_mbf;
          }
          toObject(r = !1) {
            return ya.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ya.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ya.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ya();
            return ya.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ya.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ya.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ya.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ya.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppContentPurgeStatus_Response";
          }
        }
        class ca extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ca.prototype.depot_id || i.Sg(ca.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ca.sm_m ||
                (ca.sm_m = {
                  proto: ca,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ca.sm_m
            );
          }
          static MBF() {
            return ca.sm_mbf || (ca.sm_mbf = i.w0(ca.M())), ca.sm_mbf;
          }
          toObject(r = !1) {
            return ca.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ca.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ca.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ca();
            return ca.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ca.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ca.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ca.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ca.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_CSPurgeDepot_Notification";
          }
        }
        class ja extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ja.prototype.depot_id || i.Sg(ja.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ja.sm_m ||
                (ja.sm_m = {
                  proto: ja,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    sha: { n: 2, br: i.qM.readBytes, bw: i.gp.writeBytes },
                  },
                }),
              ja.sm_m
            );
          }
          static MBF() {
            return ja.sm_mbf || (ja.sm_mbf = i.w0(ja.M())), ja.sm_mbf;
          }
          toObject(r = !1) {
            return ja.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ja.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ja.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ja();
            return ja.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ja.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ja.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ja.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ja.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_NewChunkAnnouncement_Notification";
          }
        }
        class Wa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wa.prototype.depot_id || i.Sg(Wa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wa.sm_m ||
                (Wa.sm_m = {
                  proto: Wa,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Wa.sm_m
            );
          }
          static MBF() {
            return Wa.sm_mbf || (Wa.sm_mbf = i.w0(Wa.M())), Wa.sm_mbf;
          }
          toObject(r = !1) {
            return Wa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Wa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Wa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Wa();
            return Wa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Wa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Wa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Wa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Wa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_MDSFlushDepotCache_Notification";
          }
        }
        class na extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              na.prototype.depot_id || i.Sg(na.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              na.sm_m ||
                (na.sm_m = {
                  proto: na,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    manifestid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              na.sm_m
            );
          }
          static MBF() {
            return na.sm_mbf || (na.sm_mbf = i.w0(na.M())), na.sm_mbf;
          }
          toObject(r = !1) {
            return na.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(na.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(na.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new na();
            return na.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(na.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return na.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(na.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              na.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_MDSFlushManifestVersion_Notification";
          }
        }
        class $r extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.location_id || i.Sg($r.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    location_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    host: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    path: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    headers_for_put: { n: 4, c: Yl.$3 },
                    virtual_host: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    use_https: { n: 6, br: i.qM.readBool, bw: i.gp.writeBool },
                    storage_provider: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              $r.sm_m
            );
          }
          static MBF() {
            return $r.sm_mbf || ($r.sm_mbf = i.w0($r.M())), $r.sm_mbf;
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT($r.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new $r();
            return $r.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj($r.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0($r.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_ChunkStorageLocation";
          }
        }
        class Fa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fa.prototype.appid || i.Sg(Fa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fa.sm_m ||
                (Fa.sm_m = {
                  proto: Fa,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    depot_id: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    build_handle: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    sha: { n: 4, br: i.qM.readBytes, bw: i.gp.writeBytes },
                    compressed_size: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    need_encryption_key: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    compressed_md5: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Fa.sm_m
            );
          }
          static MBF() {
            return Fa.sm_mbf || (Fa.sm_mbf = i.w0(Fa.M())), Fa.sm_mbf;
          }
          toObject(r = !1) {
            return Fa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Fa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Fa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Fa();
            return Fa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Fa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Fa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Fa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Fa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkReceived_Request";
          }
        }
        class Ua extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ua.prototype.original_size || i.Sg(Ua.M()),
              l.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ua.sm_m ||
                (Ua.sm_m = {
                  proto: Ua,
                  fields: {
                    original_size: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    encryption_key: {
                      n: 2,
                      br: i.qM.readBytes,
                      bw: i.gp.writeBytes,
                    },
                    storage_locations: { n: 3, c: $r, r: !0, q: !0 },
                  },
                }),
              Ua.sm_m
            );
          }
          static MBF() {
            return Ua.sm_mbf || (Ua.sm_mbf = i.w0(Ua.M())), Ua.sm_mbf;
          }
          toObject(r = !1) {
            return Ua.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ua.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ua.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ua();
            return Ua.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ua.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ua.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ua.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ua.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkReceived_Response";
          }
        }
        class xa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xa.prototype.appid || i.Sg(xa.M()),
              l.Message.initialize(this, r, 0, -1, [7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xa.sm_m ||
                (xa.sm_m = {
                  proto: xa,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    depot_id: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    build_handle: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    sha: { n: 4, br: i.qM.readBytes, bw: i.gp.writeBytes },
                    compressed_crc: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    storage_locations: { n: 7, c: $r, r: !0, q: !0 },
                  },
                }),
              xa.sm_m
            );
          }
          static MBF() {
            return xa.sm_mbf || (xa.sm_mbf = i.w0(xa.M())), xa.sm_mbf;
          }
          toObject(r = !1) {
            return xa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(xa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(xa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new xa();
            return xa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(xa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return xa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(xa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              xa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkStored_Request";
          }
        }
        class Js extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Js.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Js();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Js();
            return Js.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Js.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Js.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkStored_Response";
          }
        }
        class Oa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oa.prototype.appid || i.Sg(Oa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oa.sm_m ||
                (Oa.sm_m = {
                  proto: Oa,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    depot_id: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    build_handle: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    sha: { n: 4, br: i.qM.readBytes, bw: i.gp.writeBytes },
                  },
                }),
              Oa.sm_m
            );
          }
          static MBF() {
            return Oa.sm_mbf || (Oa.sm_mbf = i.w0(Oa.M())), Oa.sm_mbf;
          }
          toObject(r = !1) {
            return Oa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Oa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Oa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Oa();
            return Oa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Oa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Oa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Oa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Oa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkStorageFailure_Notification";
          }
        }
        class ha extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ha.prototype.requests || i.Sg(ha.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ha.sm_m ||
                (ha.sm_m = {
                  proto: ha,
                  fields: { requests: { n: 1, c: fa, r: !0, q: !0 } },
                }),
              ha.sm_m
            );
          }
          static MBF() {
            return ha.sm_mbf || (ha.sm_mbf = i.w0(ha.M())), ha.sm_mbf;
          }
          toObject(r = !1) {
            return ha.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ha.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ha.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ha();
            return ha.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ha.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ha.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ha.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ha.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetCDNConfigurations_Request";
          }
        }
        class fa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fa.prototype.cdn_name || i.Sg(fa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fa.sm_m ||
                (fa.sm_m = {
                  proto: fa,
                  fields: {
                    cdn_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    timestamp: {
                      n: 2,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                  },
                }),
              fa.sm_m
            );
          }
          static MBF() {
            return fa.sm_mbf || (fa.sm_mbf = i.w0(fa.M())), fa.sm_mbf;
          }
          toObject(r = !1) {
            return fa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(fa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(fa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new fa();
            return fa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(fa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return fa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(fa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              fa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetCDNConfigurations_Request_CDNInfoRequest";
          }
        }
        class Ia extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ia.prototype.cdn_name || i.Sg(Ia.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ia.sm_m ||
                (Ia.sm_m = {
                  proto: Ia,
                  fields: {
                    cdn_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    timestamp: {
                      n: 2,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
                    config: { n: 3, br: i.qM.readBytes, bw: i.gp.writeBytes },
                  },
                }),
              Ia.sm_m
            );
          }
          static MBF() {
            return Ia.sm_mbf || (Ia.sm_mbf = i.w0(Ia.M())), Ia.sm_mbf;
          }
          toObject(r = !1) {
            return Ia.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ia.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ia.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ia();
            return Ia.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ia.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ia.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ia.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ia.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CDNConfigInfo";
          }
        }
        class $a extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $a.prototype.responses || i.Sg($a.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $a.sm_m ||
                ($a.sm_m = {
                  proto: $a,
                  fields: { responses: { n: 1, c: Ia, r: !0, q: !0 } },
                }),
              $a.sm_m
            );
          }
          static MBF() {
            return $a.sm_mbf || ($a.sm_mbf = i.w0($a.M())), $a.sm_mbf;
          }
          toObject(r = !1) {
            return $a.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT($a.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq($a.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new $a();
            return $a.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj($a.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return $a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0($a.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              $a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetCDNConfigurations_Response";
          }
        }
        class Ka extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ka.prototype.cdn_name || i.Sg(Ka.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ka.sm_m ||
                (Ka.sm_m = {
                  proto: Ka,
                  fields: {
                    cdn_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    config_file: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    change_notes: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Ka.sm_m
            );
          }
          static MBF() {
            return Ka.sm_mbf || (Ka.sm_mbf = i.w0(Ka.M())), Ka.sm_mbf;
          }
          toObject(r = !1) {
            return Ka.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ka.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ka.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ka();
            return Ka.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ka.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ka.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ka.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ka.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCDNConfig_Request";
          }
        }
        class Qs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Qs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Qs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Qs();
            return Qs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Qs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Qs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCDNConfig_Response";
          }
        }
        class Xa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xa.prototype.cdn_name || i.Sg(Xa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xa.sm_m ||
                (Xa.sm_m = {
                  proto: Xa,
                  fields: {
                    cdn_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    mbps_sent: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    mbps_recv: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cpu_percent: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cache_hit_percent: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Xa.sm_m
            );
          }
          static MBF() {
            return Xa.sm_mbf || (Xa.sm_mbf = i.w0(Xa.M())), Xa.sm_mbf;
          }
          toObject(r = !1) {
            return Xa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Xa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Xa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Xa();
            return Xa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Xa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Xa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Xa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Xa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCDNPerformanceStats_Request";
          }
        }
        class Ya extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ya.prototype.message || i.Sg(Ya.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ya.sm_m ||
                (Ya.sm_m = {
                  proto: Ya,
                  fields: {
                    message: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Ya.sm_m
            );
          }
          static MBF() {
            return Ya.sm_mbf || (Ya.sm_mbf = i.w0(Ya.M())), Ya.sm_mbf;
          }
          toObject(r = !1) {
            return Ya.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ya.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ya.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ya();
            return Ya.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ya.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ya.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ya.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ya.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCDNPerformanceStats_Response";
          }
        }
        class Za extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Za.prototype.stats || i.Sg(Za.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Za.sm_m ||
                (Za.sm_m = {
                  proto: Za,
                  fields: {
                    stats: { n: 1, c: Va, r: !0, q: !0 },
                    cdn_stats: { n: 2, c: Ja, r: !0, q: !0 },
                    steamcache_stats: { n: 3, c: Qa, r: !0, q: !0 },
                  },
                }),
              Za.sm_m
            );
          }
          static MBF() {
            return Za.sm_mbf || (Za.sm_mbf = i.w0(Za.M())), Za.sm_mbf;
          }
          toObject(r = !1) {
            return Za.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Za.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Za.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Za();
            return Za.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Za.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Za.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Za.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Za.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_ContentServerStats_Notification";
          }
        }
        class Va extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Va.prototype.cs_id || i.Sg(Va.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Va.sm_m ||
                (Va.sm_m = {
                  proto: Va,
                  fields: {
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    current_load: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_last_updated: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Va.sm_m
            );
          }
          static MBF() {
            return Va.sm_mbf || (Va.sm_mbf = i.w0(Va.M())), Va.sm_mbf;
          }
          toObject(r = !1) {
            return Va.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Va.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Va.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Va();
            return Va.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Va.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Va.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Va.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Va.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_ContentServerStats_Notification_Stats";
          }
        }
        class Ja extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ja.prototype.cdn_name || i.Sg(Ja.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ja.sm_m ||
                (Ja.sm_m = {
                  proto: Ja,
                  fields: {
                    cdn_name: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    current_load: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    rtime_last_updated: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ja.sm_m
            );
          }
          static MBF() {
            return Ja.sm_mbf || (Ja.sm_mbf = i.w0(Ja.M())), Ja.sm_mbf;
          }
          toObject(r = !1) {
            return Ja.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ja.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ja.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ja();
            return Ja.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ja.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ja.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ja.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ja.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_ContentServerStats_Notification_CDNStats";
          }
        }
        class Qa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qa.prototype.cache_id || i.Sg(Qa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qa.sm_m ||
                (Qa.sm_m = {
                  proto: Qa,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    current_load: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_last_updated: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    load_adjustment: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Qa.sm_m
            );
          }
          static MBF() {
            return Qa.sm_mbf || (Qa.sm_mbf = i.w0(Qa.M())), Qa.sm_mbf;
          }
          toObject(r = !1) {
            return Qa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Qa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Qa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Qa();
            return Qa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Qa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Qa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Qa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Qa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_ContentServerStats_Notification_SteamCacheStats";
          }
        }
        class La extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              La.prototype.stats || i.Sg(La.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              La.sm_m ||
                (La.sm_m = {
                  proto: La,
                  fields: { stats: { n: 1, c: Ta, r: !0, q: !0 } },
                }),
              La.sm_m
            );
          }
          static MBF() {
            return La.sm_mbf || (La.sm_mbf = i.w0(La.M())), La.sm_mbf;
          }
          toObject(r = !1) {
            return La.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(La.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(La.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new La();
            return La.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(La.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return La.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(La.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              La.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CMStats_Notification";
          }
        }
        class Ta extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ta.prototype.sysid_cm || i.Sg(Ta.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ta.sm_m ||
                (Ta.sm_m = {
                  proto: Ta,
                  fields: {
                    sysid_cm: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    current_load: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_last_updated: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Ta.sm_m
            );
          }
          static MBF() {
            return Ta.sm_mbf || (Ta.sm_mbf = i.w0(Ta.M())), Ta.sm_mbf;
          }
          toObject(r = !1) {
            return Ta.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ta.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ta.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ta();
            return Ta.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ta.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ta.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ta.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ta.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CMStats_Notification_Stats";
          }
        }
        class ka extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ka.prototype.anon_session_allowed_depots || i.Sg(ka.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ka.sm_m ||
                (ka.sm_m = {
                  proto: ka,
                  fields: {
                    anon_session_allowed_depots: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ka.sm_m
            );
          }
          static MBF() {
            return ka.sm_mbf || (ka.sm_mbf = i.w0(ka.M())), ka.sm_mbf;
          }
          toObject(r = !1) {
            return ka.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ka.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ka.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ka();
            return ka.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ka.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ka.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ka.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ka.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AnonymousDepots_Notification";
          }
        }
        class Na extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Na.prototype.depot_id || i.Sg(Na.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Na.sm_m ||
                (Na.sm_m = {
                  proto: Na,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    manifest_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    manifest_request_code: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Na.sm_m
            );
          }
          static MBF() {
            return Na.sm_mbf || (Na.sm_mbf = i.w0(Na.M())), Na.sm_mbf;
          }
          toObject(r = !1) {
            return Na.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Na.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Na.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Na();
            return Na.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Na.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Na.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Na.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Na.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CheckManifestRequestCode_Request";
          }
        }
        class Ha extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ha.prototype.is_valid || i.Sg(Ha.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ha.sm_m ||
                (Ha.sm_m = {
                  proto: Ha,
                  fields: {
                    is_valid: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              Ha.sm_m
            );
          }
          static MBF() {
            return Ha.sm_mbf || (Ha.sm_mbf = i.w0(Ha.M())), Ha.sm_mbf;
          }
          toObject(r = !1) {
            return Ha.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ha.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ha.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ha();
            return Ha.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ha.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ha.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ha.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ha.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CheckManifestRequestCode_Response";
          }
        }
        class Pa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pa.prototype.depot_id || i.Sg(Pa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pa.sm_m ||
                (Pa.sm_m = {
                  proto: Pa,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    manifest_id: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Pa.sm_m
            );
          }
          static MBF() {
            return Pa.sm_mbf || (Pa.sm_mbf = i.w0(Pa.M())), Pa.sm_mbf;
          }
          toObject(r = !1) {
            return Pa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Pa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Pa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Pa();
            return Pa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Pa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Pa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Pa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Pa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetManifestRequestCode_Request";
          }
        }
        class pa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pa.prototype.manifest_request_code || i.Sg(pa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pa.sm_m ||
                (pa.sm_m = {
                  proto: pa,
                  fields: {
                    manifest_request_code: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              pa.sm_m
            );
          }
          static MBF() {
            return pa.sm_mbf || (pa.sm_mbf = i.w0(pa.M())), pa.sm_mbf;
          }
          toObject(r = !1) {
            return pa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(pa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(pa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new pa();
            return pa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(pa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return pa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(pa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              pa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetManifestRequestCode_Response";
          }
        }
        class va extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              va.prototype.depot_id || i.Sg(va.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              va.sm_m ||
                (va.sm_m = {
                  proto: va,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              va.sm_m
            );
          }
          static MBF() {
            return va.sm_mbf || (va.sm_mbf = i.w0(va.M())), va.sm_mbf;
          }
          toObject(r = !1) {
            return va.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(va.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(va.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new va();
            return va.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(va.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return va.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(va.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              va.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_IsDepotAllowedSteamChina_Request";
          }
        }
        class qa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qa.prototype.is_allowed || i.Sg(qa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qa.sm_m ||
                (qa.sm_m = {
                  proto: qa,
                  fields: {
                    is_allowed: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              qa.sm_m
            );
          }
          static MBF() {
            return qa.sm_mbf || (qa.sm_mbf = i.w0(qa.M())), qa.sm_mbf;
          }
          toObject(r = !1) {
            return qa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(qa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(qa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new qa();
            return qa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(qa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return qa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(qa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              qa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_IsDepotAllowedSteamChina_Response";
          }
        }
        class Aa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Aa.prototype.depotid || i.Sg(Aa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Aa.sm_m ||
                (Aa.sm_m = {
                  proto: Aa,
                  fields: {
                    depotid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    sysid_sender: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    manifestid: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Aa.sm_m
            );
          }
          static MBF() {
            return Aa.sm_mbf || (Aa.sm_mbf = i.w0(Aa.M())), Aa.sm_mbf;
          }
          toObject(r = !1) {
            return Aa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Aa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Aa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Aa();
            return Aa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Aa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Aa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Aa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Aa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_InvalidateDepotMetadata_Notification";
          }
        }
        class A extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.cs_id || i.Sg(A.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    is_enabled: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    host_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    provider: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    cell_id: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    config_json: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 9, br: i.qM.readString, bw: i.gp.writeString },
                    ip_filter_list: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = i.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(A.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new A();
            return A.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(A.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(A.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SteamCSConfig";
          }
        }
        class Da extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Da.prototype.cs_id || i.Sg(Da.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Da.sm_m ||
                (Da.sm_m = {
                  proto: Da,
                  fields: {
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Da.sm_m
            );
          }
          static MBF() {
            return Da.sm_mbf || (Da.sm_mbf = i.w0(Da.M())), Da.sm_mbf;
          }
          toObject(r = !1) {
            return Da.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Da.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Da.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Da();
            return Da.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Da.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Da.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Da.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Da.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfig_Request";
          }
        }
        class Ga extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ga.prototype.config || i.Sg(Ga.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ga.sm_m ||
                (Ga.sm_m = { proto: Ga, fields: { config: { n: 1, c: A } } }),
              Ga.sm_m
            );
          }
          static MBF() {
            return Ga.sm_mbf || (Ga.sm_mbf = i.w0(Ga.M())), Ga.sm_mbf;
          }
          toObject(r = !1) {
            return Ga.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ga.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ga.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ga();
            return Ga.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ga.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ga.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ga.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ga.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfig_Response";
          }
        }
        class Ea extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ea.prototype.cs_id || i.Sg(Ea.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ea.sm_m ||
                (Ea.sm_m = {
                  proto: Ea,
                  fields: {
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    ip_ranges: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Ea.sm_m
            );
          }
          static MBF() {
            return Ea.sm_mbf || (Ea.sm_mbf = i.w0(Ea.M())), Ea.sm_mbf;
          }
          toObject(r = !1) {
            return Ea.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ea.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ea.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ea();
            return Ea.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ea.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ea.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ea.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ea.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCSIPFilterRanges_Request";
          }
        }
        class Sa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sa.prototype.cs_id || i.Sg(Sa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sa.sm_m ||
                (Sa.sm_m = {
                  proto: Sa,
                  fields: {
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    max_results: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Sa.sm_m
            );
          }
          static MBF() {
            return Sa.sm_mbf || (Sa.sm_mbf = i.w0(Sa.M())), Sa.sm_mbf;
          }
          toObject(r = !1) {
            return Sa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Sa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Sa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Sa();
            return Sa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Sa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Sa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Sa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Sa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfigHistory_Request";
          }
        }
        class Ra extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ra.prototype.history || i.Sg(Ra.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ra.sm_m ||
                (Ra.sm_m = {
                  proto: Ra,
                  fields: { history: { n: 1, c: oa, r: !0, q: !0 } },
                }),
              Ra.sm_m
            );
          }
          static MBF() {
            return Ra.sm_mbf || (Ra.sm_mbf = i.w0(Ra.M())), Ra.sm_mbf;
          }
          toObject(r = !1) {
            return Ra.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ra.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ra.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ra();
            return Ra.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ra.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ra.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ra.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ra.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfigHistory_Response";
          }
        }
        class oa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oa.prototype.timestamp || i.Sg(oa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oa.sm_m ||
                (oa.sm_m = {
                  proto: oa,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    steamid_actor: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    change_notes: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              oa.sm_m
            );
          }
          static MBF() {
            return oa.sm_mbf || (oa.sm_mbf = i.w0(oa.M())), oa.sm_mbf;
          }
          toObject(r = !1) {
            return oa.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(oa.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(oa.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new oa();
            return oa.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(oa.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return oa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(oa.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              oa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfigHistory_Response_HistoryEntry";
          }
        }
        class Ca extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ca.prototype.cs_id || i.Sg(Ca.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ca.sm_m ||
                (Ca.sm_m = {
                  proto: Ca,
                  fields: {
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    change_notes: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    config: { n: 3, c: A },
                  },
                }),
              Ca.sm_m
            );
          }
          static MBF() {
            return Ca.sm_mbf || (Ca.sm_mbf = i.w0(Ca.M())), Ca.sm_mbf;
          }
          toObject(r = !1) {
            return Ca.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ca.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ca.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ca();
            return Ca.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ca.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ca.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ca.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ca.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateSteamCSConfig_Request";
          }
        }
        class Ls extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ls.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ls();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ls();
            return Ls.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ls.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ls.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateSteamCSConfig_Response";
          }
        }
        class _a extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _a.prototype.config || i.Sg(_a.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _a.sm_m ||
                (_a.sm_m = { proto: _a, fields: { config: { n: 1, c: A } } }),
              _a.sm_m
            );
          }
          static MBF() {
            return _a.sm_mbf || (_a.sm_mbf = i.w0(_a.M())), _a.sm_mbf;
          }
          toObject(r = !1) {
            return _a.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(_a.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_a.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new _a();
            return _a.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_a.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return _a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_a.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              _a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SteamCSConfigUpdate_Notification";
          }
        }
        class Ts extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ts.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ts();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ts();
            return Ts.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ts.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ts.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCSIPFilterRanges_Response";
          }
        }
        class ks extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ks.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ks();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ks();
            return ks.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ks.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ks.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSNames_Request";
          }
        }
        class rt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rt.prototype.config_names || i.Sg(rt.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: { config_names: { n: 1, c: it, r: !0, q: !0 } },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = i.w0(rt.M())), rt.sm_mbf;
          }
          toObject(r = !1) {
            return rt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(rt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(rt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new rt();
            return rt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(rt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(rt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSNames_Response";
          }
        }
        class it extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              it.prototype.cs_id || i.Sg(it.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    provider: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    host_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    is_enabled: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    cell_id: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    max_mbps: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    serve_steampipe: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    serve_broadcast: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    serve_chat: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = i.w0(it.M())), it.sm_mbf;
          }
          toObject(r = !1) {
            return it.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(it.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(it.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new it();
            return it.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(it.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return it.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(it.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSNames_Response_ConfigNames";
          }
        }
        class at extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              at.prototype.provider || i.Sg(at.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    provider: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    host_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = i.w0(at.M())), at.sm_mbf;
          }
          toObject(r = !1) {
            return at.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(at.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(at.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new at();
            return at.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(at.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return at.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(at.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AllocateSteamCache_Request";
          }
        }
        class tt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tt.prototype.cache_id || i.Sg(tt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = i.w0(tt.M())), tt.sm_mbf;
          }
          toObject(r = !1) {
            return tt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(tt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(tt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new tt();
            return tt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(tt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(tt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AllocateSteamCache_Response";
          }
        }
        class D extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.cache_id || i.Sg(D.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    is_enabled: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    host_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    provider: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    cell_id: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    api_key_primary: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    api_key_secondary: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    config_json: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 9, br: i.qM.readString, bw: i.gp.writeString },
                    ip_filter_list: {
                      n: 10,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    timestamp: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = i.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(D.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new D();
            return D.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(D.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(D.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SteamCacheConfig";
          }
        }
        class Ns extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ns.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ns();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ns();
            return Ns.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ns.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ns.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNames_Request";
          }
        }
        class st extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              st.prototype.config_names || i.Sg(st.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { config_names: { n: 1, c: lt, r: !0, q: !0 } },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = i.w0(st.M())), st.sm_mbf;
          }
          toObject(r = !1) {
            return st.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(st.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(st.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new st();
            return st.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(st.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return st.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(st.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNames_Response";
          }
        }
        class lt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lt.prototype.cache_id || i.Sg(lt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    provider: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    host_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    is_enabled: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    cell_id: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    max_mbps: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    serve_steampipe: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    serve_broadcast: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    serve_chat: {
                      n: 10,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    https_support: {
                      n: 11,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    cache_group: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = i.w0(lt.M())), lt.sm_mbf;
          }
          toObject(r = !1) {
            return lt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(lt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(lt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new lt();
            return lt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(lt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(lt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNames_Response_ConfigNames";
          }
        }
        class mt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mt.prototype.cache_id || i.Sg(mt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = i.w0(mt.M())), mt.sm_mbf;
          }
          toObject(r = !1) {
            return mt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(mt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(mt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new mt();
            return mt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(mt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(mt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfig_Request";
          }
        }
        class Bt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bt.prototype.config || i.Sg(Bt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = { proto: Bt, fields: { config: { n: 1, c: D } } }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = i.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(r = !1) {
            return Bt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Bt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Bt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Bt();
            return Bt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Bt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Bt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfig_Response";
          }
        }
        class et extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              et.prototype.cache_id || i.Sg(et.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    max_results: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = i.w0(et.M())), et.sm_mbf;
          }
          toObject(r = !1) {
            return et.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(et.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(et.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new et();
            return et.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(et.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(et.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfigHistory_Request";
          }
        }
        class bt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bt.prototype.history || i.Sg(bt.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: { history: { n: 1, c: wt, r: !0, q: !0 } },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = i.w0(bt.M())), bt.sm_mbf;
          }
          toObject(r = !1) {
            return bt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(bt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(bt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new bt();
            return bt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(bt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(bt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfigHistory_Response";
          }
        }
        class wt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wt.prototype.timestamp || i.Sg(wt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    steamid_actor: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    change_notes: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = i.w0(wt.M())), wt.sm_mbf;
          }
          toObject(r = !1) {
            return wt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(wt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(wt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new wt();
            return wt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(wt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(wt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfigHistory_Response_HistoryEntry";
          }
        }
        class ut extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ut.prototype.cache_id || i.Sg(ut.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    change_notes: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    config: { n: 3, c: D },
                    omit_history_entry: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = i.w0(ut.M())), ut.sm_mbf;
          }
          toObject(r = !1) {
            return ut.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ut.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ut.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ut();
            return ut.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ut.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ut.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateSteamCacheConfig_Request";
          }
        }
        class Hs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Hs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Hs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Hs();
            return Hs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Hs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Hs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateSteamCacheConfig_Response";
          }
        }
        class Mt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mt.prototype.config || i.Sg(Mt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = { proto: Mt, fields: { config: { n: 1, c: D } } }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = i.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(r = !1) {
            return Mt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Mt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Mt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Mt();
            return Mt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Mt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Mt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SteamCacheConfigUpdate_Notification";
          }
        }
        class zt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zt.prototype.cache_id || i.Sg(zt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    primary_key: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    change_notes: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = i.w0(zt.M())), zt.sm_mbf;
          }
          toObject(r = !1) {
            return zt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(zt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(zt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new zt();
            return zt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(zt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(zt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_RevSteamCacheAPIKey_Request";
          }
        }
        class Ps extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ps.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ps();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ps();
            return Ps.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ps.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ps.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_RevSteamCacheAPIKey_Response";
          }
        }
        class dt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dt.prototype.provider || i.Sg(dt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    provider: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    host_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    serve_steampipe: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    serve_broadcast: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    serve_broadcastchat: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = i.w0(dt.M())), dt.sm_mbf;
          }
          toObject(r = !1) {
            return dt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(dt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(dt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new dt();
            return dt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(dt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(dt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AllocateOpenCache_Request";
          }
        }
        class gt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gt.prototype.cache_id || i.Sg(gt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = i.w0(gt.M())), gt.sm_mbf;
          }
          toObject(r = !1) {
            return gt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(gt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(gt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new gt();
            return gt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(gt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(gt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AllocateOpenCache_Response";
          }
        }
        class G extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.cache_id || i.Sg(G.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    is_enabled: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    host_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    provider: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    cell_id: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    config_json: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 7, br: i.qM.readString, bw: i.gp.writeString },
                    ip_filter_list: {
                      n: 8,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = i.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(G.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new G();
            return G.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(G.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(G.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_OpenCacheConfig";
          }
        }
        class ps extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ps.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new ps();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ps();
            return ps.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ps.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ps.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheNames_Request";
          }
        }
        class yt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yt.prototype.config_names || i.Sg(yt.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: { config_names: { n: 1, c: ct, r: !0, q: !0 } },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = i.w0(yt.M())), yt.sm_mbf;
          }
          toObject(r = !1) {
            return yt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(yt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(yt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new yt();
            return yt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(yt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(yt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheNames_Response";
          }
        }
        class ct extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ct.prototype.cache_id || i.Sg(ct.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    provider: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    host_name: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    is_enabled: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
                    serve_steampipe: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    serve_broadcast: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    serve_chat: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = i.w0(ct.M())), ct.sm_mbf;
          }
          toObject(r = !1) {
            return ct.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ct.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ct.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ct();
            return ct.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ct.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ct.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheNames_Response_ConfigNames";
          }
        }
        class jt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jt.prototype.cache_id || i.Sg(jt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = i.w0(jt.M())), jt.sm_mbf;
          }
          toObject(r = !1) {
            return jt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(jt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(jt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new jt();
            return jt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(jt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(jt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfig_Request";
          }
        }
        class Wt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wt.prototype.config || i.Sg(Wt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = { proto: Wt, fields: { config: { n: 1, c: G } } }),
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = i.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(r = !1) {
            return Wt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Wt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Wt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Wt();
            return Wt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Wt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Wt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfig_Response";
          }
        }
        class nt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nt.prototype.cache_id || i.Sg(nt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    max_results: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = i.w0(nt.M())), nt.sm_mbf;
          }
          toObject(r = !1) {
            return nt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(nt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(nt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new nt();
            return nt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(nt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(nt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfigHistory_Request";
          }
        }
        class Ft extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ft.prototype.history || i.Sg(Ft.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
                  fields: { history: { n: 1, c: Ut, r: !0, q: !0 } },
                }),
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = i.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(r = !1) {
            return Ft.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ft.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ft.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ft();
            return Ft.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ft.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ft.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfigHistory_Response";
          }
        }
        class Ut extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ut.prototype.timestamp || i.Sg(Ut.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    timestamp: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    steamid_actor: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    change_notes: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = i.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(r = !1) {
            return Ut.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ut.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ut.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ut();
            return Ut.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ut.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ut.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfigHistory_Response_HistoryEntry";
          }
        }
        class xt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xt.prototype.cache_id || i.Sg(xt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    change_notes: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    config: { n: 3, c: G },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = i.w0(xt.M())), xt.sm_mbf;
          }
          toObject(r = !1) {
            return xt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(xt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(xt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new xt();
            return xt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(xt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(xt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateOpenCacheConfig_Request";
          }
        }
        class vs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return vs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new vs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new vs();
            return vs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return vs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              vs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateOpenCacheConfig_Response";
          }
        }
        class Ot extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ot.prototype.config || i.Sg(Ot.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = { proto: Ot, fields: { config: { n: 1, c: G } } }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = i.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(r = !1) {
            return Ot.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ot.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ot.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ot();
            return Ot.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ot.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ot.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_OpenCacheConfigUpdate_Notification";
          }
        }
        class ht extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ht.prototype.cache_id || i.Sg(ht.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cache_key: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    change_notes: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    allowed_ip_blocks: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = i.w0(ht.M())), ht.sm_mbf;
          }
          toObject(r = !1) {
            return ht.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ht.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ht.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ht();
            return ht.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ht.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ht.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SetSteamCacheClientFilters_Request";
          }
        }
        class qs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return qs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new qs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new qs();
            return qs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return qs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              qs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SetSteamCacheClientFilters_Response";
          }
        }
        class ft extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ft.prototype.cache_id || i.Sg(ft.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cache_key: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    mbps_sent: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    mbps_recv: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cpu_percent: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cache_hit_percent: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    num_connected_ips: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    upstream_egress_utilization: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    upstream_peering_utilization: {
                      n: 9,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    upstream_transit_utilization: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = i.w0(ft.M())), ft.sm_mbf;
          }
          toObject(r = !1) {
            return ft.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ft.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ft.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new ft();
            return ft.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ft.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ft.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SetSteamCachePerformanceStats_Request";
          }
        }
        class It extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              It.prototype.load_calc_percent || i.Sg(It.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    load_calc_percent: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    config_json: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = i.w0(It.M())), It.sm_mbf;
          }
          toObject(r = !1) {
            return It.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(It.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(It.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new It();
            return It.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(It.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return It.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(It.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SetSteamCachePerformanceStats_Response";
          }
        }
        class $t extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $t.prototype.cache_id || i.Sg($t.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    cache_key: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = i.w0($t.M())), $t.sm_mbf;
          }
          toObject(r = !1) {
            return $t.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT($t.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq($t.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new $t();
            return $t.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj($t.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0($t.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNodeParams_Request";
          }
        }
        class Kt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kt.prototype.params_json || i.Sg(Kt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    params_json: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = i.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(r = !1) {
            return Kt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Kt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Kt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Kt();
            return Kt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Kt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Kt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNodeParams_Response";
          }
        }
        class Xt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xt.prototype.depotid || i.Sg(Xt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: {
                    depotid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    parentappid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    oslist: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = i.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(r = !1) {
            return Xt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Xt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Xt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Xt();
            return Xt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Xt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Xt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotDownloadBytesInfo";
          }
        }
        class Yt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yt.prototype.depots || i.Sg(Yt.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: { depots: { n: 1, c: Xt, r: !0, q: !0 } },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = i.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(r = !1) {
            return Yt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Yt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Yt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Yt();
            return Yt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Yt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Yt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_GetDepotDownloadBytes_Request";
          }
        }
        class Zt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zt.prototype.windows || i.Sg(Zt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: {
                    windows: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    macos: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    linux: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = i.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(r = !1) {
            return Zt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Zt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Zt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Zt();
            return Zt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Zt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Zt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_GetDepotDownloadBytes_Response";
          }
        }
        class Vt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vt.prototype.depot_id || i.Sg(Vt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    allow_creating_new_migration: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    restart_migration: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = i.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(r = !1) {
            return Vt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Vt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Vt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Vt();
            return Vt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Vt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Vt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_BeginOriginMigrationJob_Request";
          }
        }
        class As extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return As.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new As();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new As();
            return As.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return As.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              As.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_BeginOriginMigrationJob_Response";
          }
        }
        class Jt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jt.prototype.depot_id || i.Sg(Jt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    sha: { n: 2, br: i.qM.readBytes, bw: i.gp.writeBytes },
                    storage_provider_preference: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = i.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(r = !1) {
            return Jt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Jt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Jt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Jt();
            return Jt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Jt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Jt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_GetDepotChunkLocation_Request";
          }
        }
        class Qt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qt.prototype.cub_chunk || i.Sg(Qt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    cub_chunk: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    crc_chunk: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    url_host: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    url_path: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    use_https: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                    origin_id: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    storage_provider: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    request_headers: { n: 8, c: Yl.$3 },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = i.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(r = !1) {
            return Qt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Qt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Qt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Qt();
            return Qt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Qt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Qt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_GetDepotChunkLocation_Response";
          }
        }
        class Lt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lt.prototype.appid || i.Sg(Lt.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    betakeys: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readString,
                      bw: i.gp.writeRepeatedString,
                    },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = i.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(r = !1) {
            return Lt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Lt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Lt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Lt();
            return Lt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Lt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Lt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CBuildManagement_SetAppBuildSortOrder_Request";
          }
        }
        class Ds extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ds.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Ds();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ds();
            return Ds.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ds.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ds.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CBuildManagement_SetAppBuildSortOrder_Response";
          }
        }
        class Tt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tt.prototype.appid || i.Sg(Tt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    depot_id: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    manifest_id: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    branch: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = i.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(r = !1) {
            return Tt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Tt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Tt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Tt();
            return Tt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Tt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Tt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_ManifestAppBranchInfo_Request";
          }
        }
        class kt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kt.prototype.manifest_part_of_app_branch || i.Sg(kt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    manifest_part_of_app_branch: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    app_was_released_or_is_current_build: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    time_most_recent_release: {
                      n: 3,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = i.w0(kt.M())), kt.sm_mbf;
          }
          toObject(r = !1) {
            return kt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(kt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(kt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new kt();
            return kt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(kt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(kt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_ManifestAppBranchInfo_Response";
          }
        }
        class Nt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nt.prototype.appid || i.Sg(Nt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    buildid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = i.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(r = !1) {
            return Nt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Nt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Nt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Nt();
            return Nt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Nt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Nt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppBuildUpdated_Notification";
          }
        }
        class Ht extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ht.prototype.appid || i.Sg(Ht.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    buildid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    betakey: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    desc: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = i.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(r = !1) {
            return Ht.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Ht.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Ht.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Ht();
            return Ht.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Ht.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Ht.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CBuildManagement_SetAppBuildLiveConfirmed_Request";
          }
        }
        class Gs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Gs.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Gs();
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Gs();
            return Gs.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Gs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Gs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CBuildManagement_SetAppBuildLiveConfirmed_Response";
          }
        }
        class Pt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pt.prototype.property_type || i.Sg(Pt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    property_type: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    client_ip: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    client_region: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = i.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(r = !1) {
            return Pt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Pt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Pt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Pt();
            return Pt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Pt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Pt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetCDNForVideo_Request";
          }
        }
        class pt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pt.prototype.cdn_hostname || i.Sg(pt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    cdn_hostname: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = i.w0(pt.M())), pt.sm_mbf;
          }
          toObject(r = !1) {
            return pt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(pt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(pt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new pt();
            return pt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(pt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(pt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetCDNForVideo_Response";
          }
        }
        class vt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vt.prototype.property_type || i.Sg(vt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    property_type: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    cell_id: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    client_ip: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = i.w0(vt.M())), vt.sm_mbf;
          }
          toObject(r = !1) {
            return vt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(vt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(vt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new vt();
            return vt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(vt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(vt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_PickSingleContentServer_Request";
          }
        }
        class qt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qt.prototype.hostname || i.Sg(qt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: {
                    hostname: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    caching_proxy_host_and_prefix: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = i.w0(qt.M())), qt.sm_mbf;
          }
          toObject(r = !1) {
            return qt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(qt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(qt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new qt();
            return qt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(qt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(qt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_PickSingleContentServer_Response";
          }
        }
        class At extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              At.prototype.appid || i.Sg(At.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = i.w0(At.M())), At.sm_mbf;
          }
          toObject(r = !1) {
            return At.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(At.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(At.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new At();
            return At.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(At.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return At.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(At.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDepotContentDetection_GetDetectedContentSingleApp_Request";
          }
        }
        class Dt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dt.prototype.detected_anticheat || i.Sg(Dt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: {
                    detected_anticheat: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    detected_gameengine: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = i.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(r = !1) {
            return Dt.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Dt.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Dt.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (t().BinaryReader)(r),
              s = new Dt();
            return Dt.deserializeBinaryFromReader(s, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Dt.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (t().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Dt.M(), r, a);
          }
          serializeBase64String() {
            var r = new (t().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDepotContentDetection_GetDetectedContentSingleApp_Response";
          }
        }
        var Jl;
        ((m) => {
          function r(a, s, b) {
            return a.SendMsg(
              "BuildManagement.SetAppBuildLiveConfirmed#1",
              (0, e.I8)(Ht, s, b),
              Gs,
              { ePrivilege: 1 },
            );
          }
          m.SetAppBuildLiveConfirmed = r;
        })(Jl || (Jl = {}));
        var Ql;
        ((m) => {
          function r(O, f) {
            return O.SendNotification(
              "MDSAdmin.ReloadOriginStorageInfo#1",
              (0, e.I8)(Zs, f),
              { ePrivilege: 1 },
            );
          }
          m.ReloadOriginStorageInfo = r;
          function a(O, f) {
            return O.SendNotification(
              "MDSAdmin.CSFailedToReadChunkFromStorage#1",
              (0, e.I8)(za, f),
              { ePrivilege: 1 },
            );
          }
          m.CSFailedToReadChunkFromStorage = a;
          function s(O, f) {
            return O.SendNotification(
              "MDSAdmin.InvalidateDepotMetadata#1",
              (0, e.I8)(Aa, f),
              { ePrivilege: 1 },
            );
          }
          m.InvalidateDepotMetadata = s;
          function b(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.RequestAppContentPurge#1",
              (0, e.I8)(da, f, Y),
              Vs,
              { ePrivilege: 5 },
            );
          }
          m.RequestAppContentPurge = b;
          function w(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.GetAppContentPurgeStatus#1",
              (0, e.I8)(ga, f, Y),
              ya,
              { ePrivilege: 1 },
            );
          }
          m.GetAppContentPurgeStatus = w;
          function g(O, f) {
            return O.SendNotification(
              "MDSAdmin.CSPurgeDepot#1",
              (0, e.I8)(ca, f),
              { ePrivilege: 1 },
            );
          }
          m.CSPurgeDepot = g;
          function n(O, f) {
            return O.SendNotification(
              "MDSAdmin.NewChunkAnnouncement#1",
              (0, e.I8)(ja, f),
              { ePrivilege: 1 },
            );
          }
          m.NewChunkAnnouncement = n;
          function x(O, f) {
            return O.SendNotification(
              "MDSAdmin.MDSFlushDepotCache#1",
              (0, e.I8)(Wa, f),
              { ePrivilege: 1 },
            );
          }
          m.MDSFlushDepotCache = x;
          function F(O, f) {
            return O.SendNotification(
              "MDSAdmin.MDSFlushManifestVersion#1",
              (0, e.I8)(na, f),
              { ePrivilege: 1 },
            );
          }
          m.MDSFlushManifestVersion = F;
          function U(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.GetDepotDownloadBytes#1",
              (0, e.I8)(Yt, f, Y),
              Zt,
              { ePrivilege: 1 },
            );
          }
          m.GetDepotDownloadBytes = U;
          function I(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.BeginOriginMigrationJob#1",
              (0, e.I8)(Vt, f, Y),
              As,
              { ePrivilege: 1 },
            );
          }
          m.BeginOriginMigrationJob = I;
          function $(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.GetDepotChunkLocation#1",
              (0, e.I8)(Jt, f, Y),
              Qt,
              { ePrivilege: 1 },
            );
          }
          m.GetDepotChunkLocation = $;
          function Gt(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.SetAppBuildSortOrder#1",
              (0, e.I8)(Lt, f, Y),
              Ds,
              { ePrivilege: 1 },
            );
          }
          m.SetAppBuildSortOrder = Gt;
          function ot(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.GetManifestAppBranchInfo#1",
              (0, e.I8)(Tt, f, Y),
              kt,
              { ePrivilege: 1 },
            );
          }
          m.GetManifestAppBranchInfo = ot;
          function E(O, f) {
            return O.SendNotification(
              "MDSAdmin.AppBuildUpdated#1",
              (0, e.I8)(Nt, f),
              { ePrivilege: 1 },
            );
          }
          m.AppBuildUpdated = E;
          function rs(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.ChunkReceived#1",
              (0, e.I8)(Fa, f, Y),
              Ua,
              { ePrivilege: 1 },
            );
          }
          m.ChunkReceived = rs;
          function k(O, f, Y) {
            return O.SendMsg(
              "MDSAdmin.ChunkStored#1",
              (0, e.I8)(xa, f, Y),
              Js,
              { ePrivilege: 1 },
            );
          }
          m.ChunkStored = k;
          function Et(O, f) {
            return O.SendNotification(
              "MDSAdmin.ChunkStorageFailure#1",
              (0, e.I8)(Oa, f),
              { ePrivilege: 1 },
            );
          }
          m.ChunkStorageFailure = Et;
        })(Ql || (Ql = {}));
        var Ll;
        ((m) => {
          function r(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetCDNConfigurations#1",
              (0, e.I8)(ha, W, h),
              $a,
              { ePrivilege: 1 },
            );
          }
          m.GetCDNConfigurations = r;
          function a(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.UpdateCDNConfig#1",
              (0, e.I8)(Ka, W, h),
              Qs,
              { ePrivilege: 1 },
            );
          }
          m.UpdateCDNConfig = a;
          function s(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.UpdateCDNStats#1",
              (0, e.I8)(Xa, W, h),
              Ya,
              { ePrivilege: 1 },
            );
          }
          m.UpdateCDNStats = s;
          function b(j, W) {
            return j.SendNotification(
              "ContentServerConfig.ContentServerStatsBroadcast#1",
              (0, e.I8)(Za, W),
              { ePrivilege: 1 },
            );
          }
          m.ContentServerStatsBroadcast = b;
          function w(j, W) {
            return j.SendNotification(
              "ContentServerConfig.CMLoadBroadcast#1",
              (0, e.I8)(La, W),
              { ePrivilege: 1 },
            );
          }
          m.CMLoadBroadcast = w;
          function g(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCSConfig#1",
              (0, e.I8)(Da, W, h),
              Ga,
              { ePrivilege: 1 },
            );
          }
          m.GetSteamCSConfig = g;
          function n(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.UpdateSteamCSConfig#1",
              (0, e.I8)(Ca, W, h),
              Ls,
              { ePrivilege: 4 },
            );
          }
          m.UpdateSteamCSConfig = n;
          function x(j, W) {
            return j.SendNotification(
              "ContentServerConfig.SteamCSConfigUpdateNotification#1",
              (0, e.I8)(_a, W),
              { ePrivilege: 1 },
            );
          }
          m.SteamCSConfigUpdateNotification = x;
          function F(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCSConfigHistory#1",
              (0, e.I8)(Sa, W, h),
              Ra,
              { ePrivilege: 4 },
            );
          }
          m.GetSteamCSConfigHistory = F;
          function U(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.UpdateCSIPFilterRanges#1",
              (0, e.I8)(Ea, W, h),
              Ts,
              { ePrivilege: 1 },
            );
          }
          m.UpdateCSIPFilterRanges = U;
          function I(j, W) {
            return j.SendNotification(
              "ContentServerConfig.AnonymousDepotsBroadcast#1",
              (0, e.I8)(ka, W),
              { ePrivilege: 1 },
            );
          }
          m.AnonymousDepotsBroadcast = I;
          function $(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCSNames#1",
              (0, e.I8)(ks, W, h),
              rt,
              { ePrivilege: 1 },
            );
          }
          m.GetSteamCSNames = $;
          function Gt(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.AllocateSteamCacheNode#1",
              (0, e.I8)(at, W, h),
              tt,
              { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }
          m.AllocateSteamCacheNode = Gt;
          function ot(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCacheConfig#1",
              (0, e.I8)(mt, W, h),
              Bt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }
          m.GetSteamCacheConfig = ot;
          function E(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.UpdateSteamCacheConfig#1",
              (0, e.I8)(ut, W, h),
              Hs,
              { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }
          m.UpdateSteamCacheConfig = E;
          function rs(j, W) {
            return j.SendNotification(
              "ContentServerConfig.SteamCacheConfigUpdateNotification#1",
              (0, e.I8)(Mt, W),
              { ePrivilege: 1 },
            );
          }
          m.SteamCacheConfigUpdateNotification = rs;
          function k(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.RevSteamCacheAPIKey#1",
              (0, e.I8)(zt, W, h),
              Ps,
              { ePrivilege: 4 },
            );
          }
          m.RevSteamCacheAPIKey = k;
          function Et(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCacheConfigHistory#1",
              (0, e.I8)(et, W, h),
              bt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }
          m.GetSteamCacheConfigHistory = Et;
          function O(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCacheNames#1",
              (0, e.I8)(Ns, W, h),
              st,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 4 },
            );
          }
          m.GetSteamCacheNames = O;
          function f(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.AllocateOpenCacheNode#1",
              (0, e.I8)(dt, W, h),
              gt,
              { ePrivilege: 1 },
            );
          }
          m.AllocateOpenCacheNode = f;
          function Y(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetOpenCacheConfig#1",
              (0, e.I8)(jt, W, h),
              Wt,
              { ePrivilege: 1 },
            );
          }
          m.GetOpenCacheConfig = Y;
          function Bs(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.UpdateOpenCacheConfig#1",
              (0, e.I8)(xt, W, h),
              vs,
              { ePrivilege: 4 },
            );
          }
          m.UpdateOpenCacheConfig = Bs;
          function el(j, W) {
            return j.SendNotification(
              "ContentServerConfig.OpenCacheConfigUpdateNotification#1",
              (0, e.I8)(Ot, W),
              { ePrivilege: 1 },
            );
          }
          m.OpenCacheConfigUpdateNotification = el;
          function Wl(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetOpenCacheConfigHistory#1",
              (0, e.I8)(nt, W, h),
              Ft,
              { ePrivilege: 4 },
            );
          }
          m.GetOpenCacheConfigHistory = Wl;
          function nl(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetOpenCacheNames#1",
              (0, e.I8)(ps, W, h),
              yt,
              { ePrivilege: 1 },
            );
          }
          m.GetOpenCacheNames = nl;
          function Fl(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.SetSteamCacheClientFilters#1",
              (0, e.I8)(ht, W, h),
              qs,
              { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          m.SetSteamCacheClientFilters = Fl;
          function Ul(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.SetSteamCachePerformanceStats#1",
              (0, e.I8)(ft, W, h),
              It,
              { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          m.SetSteamCachePerformanceStats = Ul;
          function xl(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCacheNodeParams#1",
              (0, e.I8)($t, W, h),
              Kt,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetSteamCacheNodeParams = xl;
          function Ol(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.CheckManifestRequestCode#1",
              (0, e.I8)(Na, W, h),
              Ha,
              { ePrivilege: 1 },
            );
          }
          m.CheckManifestRequestCode = Ol;
          function hl(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.GetManifestRequestCode#1",
              (0, e.I8)(Pa, W, h),
              pa,
              { ePrivilege: 1 },
            );
          }
          m.GetManifestRequestCode = hl;
          function fl(j, W, h) {
            return j.SendMsg(
              "ContentServerConfig.IsDepotAllowedSteamChina#1",
              (0, e.I8)(va, W, h),
              qa,
              { ePrivilege: 1 },
            );
          }
          m.IsDepotAllowedSteamChina = fl;
        })(Ll || (Ll = {}));
        var Tl;
        ((m) => {
          function r(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.GetCDNForVideo#1",
              (0, e.I8)(Pt, I, $),
              pt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetCDNForVideo = r;
          function a(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.PickSingleContentServer#1",
              (0, e.I8)(vt, I, $),
              qt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.PickSingleContentServer = a;
          function s(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.GetServersForSteamPipe#1",
              (0, e.I8)(Mr, I, $),
              zr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetServersForSteamPipe = s;
          function b(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.GetDepotPatchInfo#1",
              (0, e.I8)(dr, I, $),
              gr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetDepotPatchInfo = b;
          function w(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.GetClientUpdateHosts#1",
              (0, e.I8)(yr, I, $),
              cr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetClientUpdateHosts = w;
          function g(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.GetManifestRequestCode#1",
              (0, e.I8)(jr, I, $),
              Wr,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          m.GetManifestRequestCode = g;
          function n(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.GetCDNAuthToken#1",
              (0, e.I8)(nr, I, $),
              Fr,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          m.GetCDNAuthToken = n;
          function x(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.RequestPeerContentServer#1",
              (0, e.I8)(Ur, I, $),
              xr,
              { ePrivilege: 1 },
            );
          }
          m.RequestPeerContentServer = x;
          function F(U, I, $) {
            return U.SendMsg(
              "ContentServerDirectory.GetPeerContentInfo#1",
              (0, e.I8)(Or, I, $),
              hr,
              { ePrivilege: 1 },
            );
          }
          m.GetPeerContentInfo = F;
        })(Tl || (Tl = {}));
        var kl;
        ((m) => {
          function r(s, b, w) {
            return s.SendMsg(
              "DepotContentDetection.GetAllDetectedAppContent#1",
              (0, e.I8)(fr, b, w),
              Ir,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          m.GetAllDetectedAppContent = r;
          function a(s, b, w) {
            return s.SendMsg(
              "DepotContentDetection.GetDetectedContentSingleApp#1",
              (0, e.I8)(At, b, w),
              Dt,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          m.GetDetectedContentSingleApp = a;
        })(kl || (kl = {}));
        var Vm = d(64238),
          Jm = d.n(Vm);
        function Qm(m, r, a) {
          const s = new Map();
          return (
            m.forEach((b) => {
              Object.entries(b.components).forEach(([w, g]) => {
                s.set(g, !1);
              });
            }),
            r.forEach((b) => {
              Object.entries(b.components).forEach(([w, g]) => {
                s.set(g, !1);
              });
            }),
            a.forEach((b, w) => {
              s.has(w) && s.set(w, b);
            }),
            s
          );
        }
        function Nl(m, r, a) {
          let s = !1;
          r.forEach((w) => {
            m.get(w) && (s = !0);
          });
          let b = !1;
          return (
            a.forEach((w) => {
              m.get(w) && (b = !0);
            }),
            s && b
          );
        }
        function Lm(m) {
          const {
              rgCommonRedistAllPlatforms: r,
              rgCommonRedistWindows: a,
              rgCheckedDepots: s,
              nDetectedGameEngine: b,
            } = m,
            w = (0, c.useMemo)(() => new Map(r), [r]),
            g = (0, c.useMemo)(() => new Map(a), [a]),
            [n, x] = (0, c.useState)(Qm(w, g, new Map(s))),
            [F, U] = (0, c.useMemo)(() => {
              const rs = [],
                k = [];
              return (
                g.forEach((Et) => {
                  Et.category == "directx"
                    ? Object.entries(Et.components).forEach(([O, f]) => {
                        rs.push(f);
                      })
                    : Et.category == "vc" &&
                      Object.entries(Et.components).forEach(([O, f]) => {
                        k.push(f);
                      });
                }),
                [rs, k]
              );
            }, [g]),
            [I, $] = (0, c.useState)(Nl(n, F, U)),
            Gt = (rs, k) => {
              const Et = new Map(n);
              Et.set(rs, k), x(Et), $(Nl(Et, F, U));
              const O = {};
              Et.forEach((f, Y) => {
                O[Y] = f ? 1 : 0;
              }),
                window.UpdateCommonRedistsReact(O);
            },
            ot = w.size > 0,
            E = b == Zm;
          return (0, B.jsxs)("div", {
            children: [
              ot &&
                (0, B.jsx)(Hl, {
                  name: (0, y.we)("#StoreAdmin_Platform_AllPlatforms"),
                  categories: w,
                  checkedState: n,
                  setChecked: Gt,
                }),
              E && (0, B.jsx)(Tm, { checked: I }),
              (0, B.jsx)(Hl, {
                name: (0, y.we)("#StoreAdmin_Platform_Windows"),
                categories: g,
                checkedState: n,
                setChecked: Gt,
              }),
            ],
          });
        }
        function Tm(m) {
          const { checked: r } = m;
          return (0, B.jsxs)("div", {
            className: il.DXVCNotice,
            children: [
              !r &&
                (0, B.jsx)("div", { className: il.DXVCNoticeIconUnchecked }),
              r && (0, B.jsx)("div", { className: il.DXVCNoticeIconChecked }),
              (0, B.jsx)("div", {
                className: Jm()(
                  il.DXVCNoticeText,
                  r ? il.DXVCNoticeTextChecked : il.DXVCNoticeTextUnchecked,
                ),
                children: (0, y.we)(
                  "#StoreAdmin_Game_Engine_Requires_DirectX_VC",
                  (0, y.we)("#StoreAdmin_GameEngine_Type_unreal"),
                ),
              }),
            ],
          });
        }
        function Hl(m) {
          const { name: r, categories: a, checkedState: s, setChecked: b } = m,
            w = (0, c.useMemo)(() => {
              let g = [];
              return (
                a.forEach((n, x) =>
                  g.push(
                    (0, B.jsx)(
                      km,
                      { name: x, category: n, checkedState: s, setChecked: b },
                      n.category,
                    ),
                  ),
                ),
                g
              );
            }, [a, s, b]);
          return (0, B.jsxs)("div", {
            className: "section",
            children: [
              (0, B.jsx)("h2", { children: r }),
              (0, B.jsx)("div", { className: "grayRule" }),
              ...w,
            ],
          });
        }
        function km(m) {
          const { name: r, category: a, checkedState: s, setChecked: b } = m,
            w = Object.entries(a.components).map(([g, n]) =>
              (0, B.jsx)(
                "li",
                {
                  children: (0, B.jsx)(Nm, {
                    name: g,
                    depotID: n,
                    checked: s.get(n),
                    setChecked: b,
                  }),
                },
                n,
              ),
            );
          return (0, B.jsxs)("div", {
            children: [
              (0, B.jsx)("div", { children: r }),
              (0, B.jsxs)("ul", { children: [...w] }),
            ],
          });
        }
        function Nm(m) {
          const { name: r, depotID: a, checked: s, setChecked: b } = m,
            w = (a == 228987 || a == 228986) && !s;
          return (0, B.jsxs)(B.Fragment, {
            children: [
              (0, B.jsx)("input", {
                id: a.toString(),
                type: "checkbox",
                checked: s,
                disabled: w,
                onChange: (g) => b(a, g.currentTarget.checked),
              }),
              (0, B.jsx)("label", { htmlFor: a.toString(), children: r }),
            ],
          });
        }
        var Hm = d(65596),
          Pm = d(40497),
          Pl = d(67705);
        function pl(m, r) {
          let a = [];
          switch (m) {
            case "image_large":
              r.item_image_large && a.push(r.item_image_large);
              break;
            case "image_small":
              r.item_image_small && a.push(r.item_image_small);
              break;
            case "movie_large":
              r.item_movie_webm && a.push(r.item_movie_webm),
                r.item_movie_mp4 && a.push(r.item_movie_mp4);
              break;
          }
          return a;
        }
        function vl(m, r) {
          return [`InProgressItemDefinition_${m}_${r}`];
        }
        function pm(m, r) {
          const a = (0, $l.I)({
            queryKey: vl(m, r),
            queryFn: async () => {
              const s = `${ll.TS.PARTNER_BASE_URL}communityitems/ajaxgetcommunityitemdef/${m}/${r}`,
                b = new FormData();
              b.append("sessionid", (0, Pl.KC)());
              const w = await yl().post(s, b, { withCredentials: !0 });
              return w?.status == 200 && w.data?.success == Il.R
                ? w.data.def
                : (console.error(
                    "useGetInProgressCommunityItemDefinition: ",
                    w?.data.error,
                  ),
                  null);
            },
            staleTime: 1 / 0,
            initialData: (0, Pl.Tc)("item_def", "application_config"),
          });
          return a.isLoading ? null : a.data;
        }
        function vm(m, r) {
          Pm.L.invalidateQueries({ queryKey: vl(m, r) });
        }
        var ds = d(14947),
          Ml = d(27066),
          qm = d(38410),
          ql = d(9472),
          Am = d(34592),
          Rs = d(51746),
          ms = d(72849),
          Dm = d(25279),
          Gm = Object.defineProperty,
          Em = Object.getOwnPropertyDescriptor,
          cl = (m, r, a, s) => {
            for (
              var b = s > 1 ? void 0 : s ? Em(r, a) : r, w = m.length - 1, g;
              w >= 0;
              w--
            )
              (g = m[w]) && (b = (s ? g(r, a, b) : g(b)) || b);
            return s && b && Gm(r, a, b), b;
          };
        class zl extends ql.q {
          m_currentImageOptionKey = void 0;
          m_fnGetImageOptions;
          constructor(r, a, s, b) {
            const w = (0, Rs.II)(s);
            super(r, r.name, a, s.src, w),
              (0, ds.Gn)(this),
              (this.m_fnGetImageOptions = b);
          }
          IsValidAssetType(r, a) {
            const s = a && a != this.fileType,
              b = this.IsFileTypeSupported(this.fileType),
              w = this.GetCurrentImageOption();
            let g = "";
            return (
              b
                ? s &&
                  (g = (0, y.we)("#ImageUpload_InvalidFormat", (0, Rs.EG)(a)))
                : (g = (0, y.we)("#ImageUpload_InvalidFormatSelected")),
              w || (g = (0, y.we)("#CommunityItems_NoValidAsset_Error")),
              w?.bDuplicateAssetType &&
                (g = (0, y.we)(
                  "#CommunityItems_DuplicateAssetType_Error",
                  w.fnGetLabelText(),
                )),
              { error: g, needsCrop: !1 }
            );
          }
          BIsOriginalMinimumDimensions(r) {
            return !0;
          }
          BIsVideo() {
            return Dm.Ho.includes(this.fileType);
          }
          GetResizeDimension() {}
          BSupportsLanguages() {
            return !1;
          }
          get ImageOptions() {
            return this.m_fnGetImageOptions().filter(
              (r) => this.filename === r.sKey,
            );
          }
          GetCurrentImageOptionKey() {
            return this.m_currentImageOptionKey;
          }
          GetCurrentImageOption() {
            const r = this.m_fnGetImageOptions();
            return this.m_currentImageOptionKey
              ? r.find((a) => a.sKey === this.m_currentImageOptionKey)
              : r.find((a) => this.filename === a.sKey);
          }
          SetCurrentImageOption(r) {
            this.m_currentImageOptionKey = r?.sKey;
          }
          FileTypeMatchesImageTypes(r) {
            switch (this.fileType) {
              case ms.bg.iS:
              case ms.bg.dU:
              case ms.bg.wD:
                return !0;
              default:
                return !1;
            }
          }
          IsFileTypeSupported(r) {
            switch (r) {
              case ms.bg.iS:
              case ms.bg.dU:
              case ms.bg.wD:
              case ms.bg.CK:
              case ms.bg.nn:
              case ms.bg.pJ:
                return !0;
              default:
                return !1;
            }
          }
        }
        cl([ds.sH], zl.prototype, "m_currentImageOptionKey", 2),
          cl([ds.EW], zl.prototype, "ImageOptions", 1),
          cl([ds.XI], zl.prototype, "SetCurrentImageOption", 1);
        var Sm = Object.defineProperty,
          Rm = Object.getOwnPropertyDescriptor,
          Bl = (m, r, a, s) => {
            for (
              var b = s > 1 ? void 0 : s ? Rm(r, a) : r, w = m.length - 1, g;
              w >= 0;
              w--
            )
              (g = m[w]) && (b = (s ? g(r, a, b) : g(b)) || b);
            return s && b && Sm(r, a, b), b;
          };
        class al extends qm.Vr {
          m_filesToUpload = ds.sH.array();
          m_strUploadPath = null;
          m_bSynchronousUpload = !1;
          m_rgAssetRequirements = [];
          constructor(r, a, s) {
            super(),
              (0, ds.Gn)(this),
              (this.m_strUploadPath = r),
              (this.m_bSynchronousUpload = a),
              (this.m_rgAssetRequirements = s);
          }
          GetUploadPath() {
            return this.m_strUploadPath;
          }
          SetUploadPath(r) {
            this.m_strUploadPath = r;
          }
          GetUploadImages() {
            return this.m_filesToUpload;
          }
          ClearImages() {
            this.m_filesToUpload = ds.sH.array();
          }
          DeleteUploadImage(r) {
            const a = this.m_filesToUpload.findIndex(
              (s) => r.file == s.file && r.uploadTime == s.uploadTime,
            );
            a >= 0 &&
              (this.m_filesToUpload.splice(a, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]));
          }
          BGetUploadsAreInSerial() {
            return this.m_bSynchronousUpload;
          }
          async AddImageForLanguage(r, a) {
            if ((0, Rs.aL)(r.type) || (0, Rs.Uz)(r.type)) {
              const s = await (0, Rs.zB)(r, (0, Rs.Uz)(r.type));
              if (s) {
                const b = new zl(r, a, s, () => this.GetImageOptions());
                return (
                  (this.m_filesToUpload = [...this.m_filesToUpload, b]), !0
                );
              }
            } else
              console.error(
                "Failed to determine file type, not image, video or subtitle",
                r,
                r.type,
              );
            return !1;
          }
          GetImageOptions() {
            let r = [],
              a = new Set();
            for (const s of this.m_filesToUpload.filter(
              (b) => b.status == "pending" || (0, ql.o)(b.status),
            ))
              this.m_rgAssetRequirements.forEach((b) => {
                s.width === b.width &&
                  s.height === b.height &&
                  b.accepted_filetypes.includes(s.fileType) &&
                  (r.push({
                    asset_type: b.asset_type,
                    sKey: s.filename,
                    fnGetLabelText: () => b.label,
                    width: s.width,
                    height: s.height,
                    bEnforceDimensions: !0,
                    bHiddenFromDropdown: !1,
                    bDuplicateAssetType: !!a.has(b.asset_type),
                  }),
                  a.add(b.asset_type));
              });
            return r;
          }
          async UploadSingleImage(r, a, s, b) {
            let w = null;
            const g = new FormData();
            g.append("assetfile", r.file, a),
              g.append("sessionid", (0, Ct.KC)());
            const n = r.GetCurrentImageOption();
            if ((g.append("strAssetType", n.asset_type), !(0, Rs.ab)(a)))
              return {
                bSuccess: !1,
                elErrorMessage:
                  "Invalid file extension, cannot determine mimetype",
              };
            try {
              w = await yl().post(this.m_strUploadPath, g, {
                withCredentials: !0,
                headers: { "Content-Type": "multipart/form-data" },
                cancelToken: b,
              });
            } catch (F) {
              console.error((0, Am.H)(F)?.strErrorMsg);
            }
            return !w.data || w.data.error
              ? {
                  bSuccess: !1,
                  elErrorMessage:
                    w.data.error ??
                    (0, y.we)("#CommunityItems_GenericUpload_Error"),
                }
              : { bSuccess: !0, result: w?.data };
          }
        }
        Bl([ds.sH], al.prototype, "m_filesToUpload", 2),
          Bl([Ml.o], al.prototype, "GetUploadImages", 1),
          Bl([Ml.o], al.prototype, "ClearImages", 1),
          Bl([Ml.o], al.prototype, "DeleteUploadImage", 1),
          Bl([Ml.o], al.prototype, "AddImageForLanguage", 1);
        var om = d(48127),
          Cm = d(32093);
        function _m(m) {
          const { appID: r, unItemType: a, rgAssetDefinitions: s } = m,
            b = c.useMemo(() => {
              const g =
                gs.TS.PARTNER_BASE_URL +
                `communityitems/ajaxuploadasset/${r}/${a}`;
              return new al(g, !0, s);
            }, [r, a, s]),
            w = (g) => {
              g.some((x) => x.bSuccess) && vm(r, a);
            };
          return (0, B.jsx)("div", {
            children: (0, B.jsx)(om.O9, {
              elOverrideDragAndDropText: (0, y.we)(
                "#CommunityItems_Upload_Instructions",
              ),
              imageUploader: b,
              rgRealmList: [Cm.TU.k_ESteamRealmGlobal],
              fnUploadComplete: w,
            }),
          });
        }
        var es = d(89925),
          rB = Object.defineProperty,
          iB = Object.getOwnPropertyDescriptor,
          Al = (m, r, a, s) => {
            for (
              var b = s > 1 ? void 0 : s ? iB(r, a) : r, w = m.length - 1, g;
              w >= 0;
              w--
            )
              (g = m[w]) && (b = (s ? g(r, a, b) : g(b)) || b);
            return s && b && rB(r, a, b), b;
          };
        class jl {
          m_ItemDefinition = null;
          m_ItemKV = null;
          constructor(r, a) {
            (0, ds.Gn)(this), this.LoadItemDefinition(r, a);
          }
          LoadItemDefinition(r, a) {
            r
              ? (this.m_ItemDefinition = {
                  item_type: r.item_type,
                  item_class: r.item_class,
                  item_description: r.item_description,
                  editor_accountid: r.editor_accountid,
                  deleted: r.deleted,
                  active: r.active,
                  appid: r.appid,
                  item_image_composed: r.item_image_composed,
                  item_image_large: r.item_image_large,
                  item_image_small: r.item_image_small,
                  item_key_values: r.item_key_values,
                  item_movie_mp4: r.item_movie_mp4,
                  item_movie_mp4_small: r.item_movie_mp4_small,
                  item_internal_name: r.item_name,
                  item_series: r.item_series,
                  item_movie_webm: r.item_movie_webm,
                  item_movie_webm_small: r.item_movie_webm_small,
                  item_image_composed_foil: r.item_image_composed_foil,
                  item_last_changed: r.item_last_changed,
                  broadcast_channel_id: r.broadcast_channel_id,
                })
              : (this.m_ItemDefinition = a),
              (this.m_ItemKV = JSON.parse(
                this.m_ItemDefinition.item_key_values,
              ));
          }
          get AppID() {
            return this.m_ItemDefinition.appid;
          }
          get BIsActive() {
            return this.m_ItemDefinition.active;
          }
          get ItemID() {
            return this.m_ItemDefinition.item_type;
          }
          get BIsDeleted() {
            return this.m_ItemDefinition.deleted;
          }
          get ItemClass() {
            return this.m_ItemDefinition.item_class;
          }
          get CommunityItemDef() {
            return this.m_ItemDefinition;
          }
        }
        Al([ds.sH], jl.prototype, "m_ItemDefinition", 2),
          Al([ds.sH], jl.prototype, "m_ItemKV", 2);
        function Dl(m, r) {
          return `${ll.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${m}/${r}`;
        }
        var aB = d(23386);
        function tB() {
          return [ms.bg.iS, ms.bg.dU, ms.bg.wD];
        }
        function sB() {
          return [ms.bg.nn, ms.bg.pJ];
        }
        function lB(m, r, a) {
          return m === aB.Tl ? mB : null;
        }
        const mB = [
            {
              asset_type: "movie_large",
              label: (0, y.we)("#CommunityItems_StartupMovie_Label_Video"),
              width: 1920,
              height: 1200,
              accepted_filetypes: sB(),
              is_video: !0,
              guidelines: [
                {
                  strHeader: (0, y.we)(
                    "#CommunityItems_StartupMovie_GuidelineVideo_Header",
                  ),
                  strIntro: (0, y.we)(
                    "#CommunityItems_StartupMovie_GuidelineVideo_Intro",
                  ),
                  rgBulletPoints: [
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_1",
                    ),
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_2",
                    ),
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_3",
                    ),
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_4",
                    ),
                  ],
                },
                {
                  strHeader: (0, y.we)(
                    "#CommunityItems_StartupMovie_GuidelineAudio_Header",
                  ),
                  strIntro: (0, y.we)(
                    "#CommunityItems_StartupMovie_GuidelineAudio_Intro",
                  ),
                  rgBulletPoints: [
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_1",
                    ),
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_2",
                    ),
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_3",
                    ),
                  ],
                },
              ],
            },
            {
              asset_type: "image_large",
              label: (0, y.we)("#CommunityItems_StartupMovie_Label_Poster"),
              width: 1920,
              height: 1200,
              accepted_filetypes: tB(),
              guidelines: [
                {
                  strHeader: (0, y.we)(
                    "#CommunityItems_StartupMovie_GuidelineImage_Header",
                  ),
                  strIntro: (0, y.we)(
                    "#CommunityItems_StartupMovie_GuidelineImage_Intro",
                  ),
                  rgBulletPoints: [
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_2",
                    ),
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_3",
                    ),
                    (0, y.we)(
                      "#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_1",
                    ),
                  ],
                },
              ],
            },
          ],
          dl = c.createContext(null),
          BB = ({ communityItem: m, assetDefs: r, children: a }) =>
            (0, B.jsx)(dl.Provider, {
              value: { communityItem: m, assetDefs: r },
              children: a,
            });
        function eB(m) {
          const { appID: r, unItemType: a } = m,
            s = pm(r, a);
          if (!s) return null;
          const b = new jl(s),
            w = lB(b.ItemClass, !1, !1);
          if (!w) return null;
          const g = (!b.BIsActive || gs.iA.is_support) && !b.BIsDeleted;
          return (0, B.jsx)(BB, {
            communityItem: b,
            assetDefs: w,
            children: (0, B.jsxs)("div", {
              className: es.AssetEditorContainer,
              children: [g && (0, B.jsx)(bB, {}), (0, B.jsx)(MB, {})],
            }),
          });
        }
        function bB() {
          const { communityItem: m, assetDefs: r } = c.useContext(dl),
            s = r
              .flatMap((b) => b.guidelines)
              .map((b, w) =>
                (0, B.jsx)(wB, { guideline: b }, `guideline_${w}`),
              );
          return (0, B.jsxs)("div", {
            className: es.AssetUploadSection,
            children: [
              (0, B.jsx)("div", {
                className: es.AssetGuidelinesSection,
                children: s,
              }),
              (0, B.jsx)(_m, {
                appID: m.AppID,
                unItemType: m.ItemID,
                rgAssetDefinitions: r,
              }),
            ],
          });
        }
        function wB(m) {
          const { guideline: r } = m;
          return (0, B.jsxs)("div", {
            className: es.GuidelineCtn,
            children: [
              (0, B.jsx)("div", {
                className: es.GuidelineHeader,
                children: r.strHeader,
              }),
              (0, B.jsx)("div", {
                className: es.GuidelineIntro,
                children: r.strIntro,
              }),
              r.rgBulletPoints?.length > 0 &&
                (0, B.jsx)(uB, { rgBulletPoints: r.rgBulletPoints }),
            ],
          });
        }
        function uB(m) {
          const { rgBulletPoints: r } = m,
            a = r.map((s, b) =>
              (0, B.jsx)("li", { children: s }, `bulletpoint_${b}`),
            );
          return (0, B.jsx)("ul", { children: a });
        }
        function MB() {
          const { communityItem: m, assetDefs: r } = c.useContext(dl),
            a = r.map((s) => (0, B.jsx)(zB, { assetDef: s }, s.asset_type));
          return (0, B.jsx)("div", {
            className: es.AssetTypesCtn,
            children: a,
          });
        }
        function zB(m) {
          const { assetDef: r } = m,
            { communityItem: a, assetDefs: s } = c.useContext(dl);
          return (0, B.jsxs)("div", {
            className: es.AssetEntryCtn,
            children: [
              (0, B.jsxs)("div", {
                className: es.AssetTitle,
                children: ["*", r.label],
              }),
              (0, B.jsx)("div", {
                className: es.AssetPreviewCtn,
                children: r.is_video
                  ? (0, B.jsx)(gB, {
                      rgSources: pl(r.asset_type, a.CommunityItemDef),
                      unAppID: a.AppID,
                    })
                  : (0, B.jsx)(dB, {
                      rgSources: pl(r.asset_type, a.CommunityItemDef),
                      unAppID: a.AppID,
                    }),
              }),
            ],
          });
        }
        function Gl() {
          return (0, B.jsx)("div", {
            className: es.PlaceholderAsset,
            children: (0, B.jsx)("div", {
              children: (0, y.we)("#CommunityItems_PlaceholderAsset_Missing"),
            }),
          });
        }
        function dB(m) {
          const { rgSources: r, unAppID: a } = m;
          return r.length
            ? (0, B.jsx)("img", {
                className: es.AssetPreview,
                src: Dl(a, r[0]),
              })
            : (0, B.jsx)(Gl, {});
        }
        function gB(m) {
          const { rgSources: r, unAppID: a } = m,
            s = c.useRef(void 0);
          if (
            (c.useEffect(() => {
              s.current && s.current.load();
            }, [r]),
            !r.length)
          )
            return (0, B.jsx)(Gl, {});
          const b = r.map((w, g) =>
            (0, B.jsx)(
              "source",
              { src: Dl(a, w), type: (0, Rs.ab)(w) },
              `video_${g}`,
            ),
          );
          return (0, B.jsx)("video", {
            ref: s,
            className: es.AssetPreview,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            controls: !0,
            children: b,
          });
        }
        function yB(m) {
          const {
              unAppID: r,
              bShowSteamChina: a,
              bHasCompletedContentSurvey: s,
            } = m,
            b = { appid: r },
            w = (0, Cs.c2)(b),
            [g, n, x] = c.useMemo(() => {
              if (!w || w.isLoading || !w.data) return ["", "", !1];
              let F = [...w.data.restricted_countries];
              return (
                a || (F = F.filter((U) => U !== "XC")),
                w.data.no_restrictions
                  ? ["", "", !1]
                  : [F?.join(", "), w.data.allowed_countries?.join(", "), !s]
              );
            }, [s, a, w]);
          return !n.length && !g.length
            ? (0, B.jsx)("div", {
                children: (0, y.we)("#AppLanding_RegionRestrictions_None"),
              })
            : (0, B.jsxs)(B.Fragment, {
                children: [
                  n.length > 0 &&
                    (0, B.jsx)("div", {
                      children: (0, y.we)(
                        "#AppLanding_RegionRestrictions_Allowed",
                        n,
                      ),
                    }),
                  g.length > 0 &&
                    (0, B.jsx)("div", {
                      children: (0, y.we)(
                        "#AppLanding_RegionRestrictions_Blocked",
                        g,
                      ),
                    }),
                  x &&
                    (0, B.jsx)("div", {
                      children: (0, y.oW)(
                        "#AppLanding_RegionRestrictions_ContentSurvey",
                        (0, B.jsx)("a", {
                          href: `${gs.TS.PARTNER_BASE_URL}/contentdescriptors/editsurvey/${r}`,
                        }),
                      ),
                    }),
                ],
              });
        }
        const gl = {
          CommunityItem: (m, r) => `/apps/communityitems/${m}/${r}`,
          AppLanding: (m) => `/apps/landing/${m}`,
          AppInstaller: (m) => `/apps/installer/${m}`,
          AppEconomy: (m) => `/apps/economy/${m}`,
        };
        function cB(m) {
          return (0, B.jsxs)(Q.dO, {
            children: [
              (0, B.jsx)(Q.qh, {
                path: gl.CommunityItem(":appid", ":itemtype"),
                render: (r) =>
                  (0, B.jsx)(X.X, {
                    config: {
                      "appadmin-profilecolors": (a) =>
                        (0, B.jsx)(Kr.Y, { ...a }),
                      "appadmin-communityitemassets": () =>
                        (0, B.jsx)(eB, {
                          appID: Number.parseInt(r.match.params.appid),
                          unItemType: Number.parseInt(r.match.params.itemtype),
                        }),
                    },
                  }),
              }),
              (0, B.jsx)(Q.qh, {
                path: gl.AppLanding(":appid"),
                render: (r) =>
                  (0, B.jsx)(X.X, {
                    config: {
                      "storeadmin-releasedateinfo": (a) =>
                        (0, B.jsx)(Hm.M, { ...a }),
                      "storeadmin-applanding-statsrollup": (a) =>
                        (0, B.jsx)(Fm, { ...a }),
                      "storeadmin-applanding-demowishlistemails": (a) =>
                        (0, B.jsx)(Um, { ...a }),
                      "storeadmin-editions-editor": (a) =>
                        (0, B.jsx)(xm.H, { ...a }),
                      "appadmin-restrictedcountries": (a) =>
                        (0, B.jsx)(yB, { ...a }),
                    },
                  }),
              }),
              (0, B.jsx)(Q.qh, {
                path: gl.AppInstaller(":appid"),
                render: (r) =>
                  (0, B.jsx)(X.X, {
                    config: {
                      "storeadmin-steamworksredist-edit": (a) =>
                        (0, B.jsx)(Lm, { ...a }),
                    },
                  }),
              }),
              (0, B.jsx)(Q.qh, {
                path: gl.AppEconomy(":appid"),
                render: (r) =>
                  (0, B.jsx)(X.X, {
                    config: {
                      "storeadmin-steamworkseconomy-propertyedit": (a) =>
                        (0, B.jsx)($m, { ...a }),
                    },
                  }),
              }),
            ],
          });
        }
      },
      58832: (St, is, d) => {
        "use strict";
        d.d(is, { E8: () => B, Z2: () => Kr, ct: () => Q });
        function B(X, c) {
          const Ct = new Date(X * 1e3),
            K = c ? new Date(c * 1e3) : new Date(Ct);
          c || K.setDate(Ct.getDate() + 6);
          const y = Ct.toLocaleString("en-US", { month: "short" }),
            Rt = Ct.getDate(),
            bs = K.toLocaleString("en-US", { month: "short" }),
            e = K.getDate();
          return y === bs ? `${y} ${Rt} - ${e}` : `${y} ${Rt} - ${bs} ${e}`;
        }
        function Kr(X) {
          let c = Q(X);
          return c.endsWith("M") || c.endsWith("K")
            ? `$${c}`
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(Number(c));
        }
        function Q(X) {
          let c;
          return (
            Math.abs(X) >= 1e6
              ? (c = (X / 1e6).toFixed(1) + "M")
              : Math.abs(X) >= 1e3
                ? (c = (X / 1e3).toFixed(1) + "K")
                : (c = X.toFixed(2)),
            c
          );
        }
      },
      28763: (St, is, d) => {
        "use strict";
        d.d(is, { M: () => Kr, o: () => B });
        const B = "America/Los_Angeles";
        function Kr(Q) {
          const c = d(87937).unix(Q).tz(B);
          return (
            c.seconds(0),
            c.minutes(0),
            c.hours(10),
            c.unix() < Q && c.hours(34),
            c.unix()
          );
        }
      },
      59432: (St, is, d) => {
        "use strict";
        d.d(is, { Gw: () => c, Lk: () => Ct, ai: () => X, mm: () => Q });
        var B = d(14947);
        const Kr = B.sH.box(void 0);
        function Q() {
          return Kr.get();
        }
        function X(K) {
          (0, B.h5)(() => Kr.set(K));
        }
        function c() {
          const K = Kr.get();
          return K || Math.floor(Date.now() / 1e3);
        }
        function Ct() {
          const K = Kr.get();
          return K ? new Date(K * 1e3) : new Date();
        }
      },
      23386: (St, is, d) => {
        "use strict";
        d.d(is, { Ed: () => L, Tl: () => Es, jE: () => Rt, xw: () => ws });
        const B = 0,
          Kr = 1,
          Q = 2,
          X = 3,
          c = 4,
          Ct = 5,
          K = 6,
          y = 7,
          Rt = 8,
          bs = 9,
          e = 10,
          L = 11,
          ts = 12,
          os = 13,
          us = 14,
          ws = 15,
          as = 16,
          Es = 17;
      },
      29522: (St, is, d) => {
        "use strict";
        d.d(is, { $5: () => y, _Z: () => X, h0: () => K, oc: () => Rt });
        var B = d(40358),
          Kr = d(3367),
          Q = d(90626);
        function X(e) {
          const { data: L } = (0, B.J$)(e);
          return (0, Q.useMemo)(
            () =>
              L
                ? L.item_type == Kr.c6.qI
                  ? [L.appid]
                  : L.included_appids || []
                : [],
            [L],
          );
        }
        function c(e) {
          if (!e?.length) return [];
          const L = e
            .map((ts) => ts.creator_clan_account_id)
            .filter((ts) => !!ts);
          return Array.from(new Set(L));
        }
        function Ct(e) {
          const { data: L } = useStoreItemDefaultInfo({ appid: e });
          return L?.appid || e;
        }
        function K(e) {
          const { data: L } = (0, B.J$)(e);
          return (0, Q.useMemo)(() => {
            if (L && L.related_items && L.related_items.parent_appid)
              return { appid: L.related_items.parent_appid };
          }, [L]);
        }
        function y(e) {
          return (0, Q.useMemo)(() => (e ? { appid: e } : void 0), [e]);
        }
        function Rt(e) {
          return (0, Q.useMemo)(() => (e ? { packageid: e } : void 0), [e]);
        }
        function bs(e) {
          return useMemo(() => (e ? { bundleid: e } : void 0), [e]);
        }
      },
      7582: (St, is, d) => {
        "use strict";
        d.d(is, { HD: () => y, P_: () => Rt, f1: () => os, sB: () => ts });
        var B = d(19367),
          Kr = d.n(B),
          Q = d(90626),
          X = d(59432),
          c = d(47689),
          Ct = d(77291);
        class K {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, X.mm)();
          }
          set nOverrideDateNow(as) {
            (0, X.ai)(as);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, X.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, X.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, X.mm)();
          }
          ParseDevOverrides(as) {
            if (!as || as.length == 0) return;
            new URLSearchParams(as[0] == "?" ? as.substring(1) : as).has("t");
          }
        }
        const y = new K();
        (0, Ct.V)("g_EventCalendarDevFeatures", y);
        function Rt(ws = 1) {
          const [as, Es] = Q.useState(() => L()),
            Cs = (0, c.m)("useTimeNowWithOverride"),
            tl = Q.useCallback(() => {
              Cs.token.reason || Es(L());
            }, []);
          return (
            Q.useEffect(() => {
              const Ss = 1e3 * ws,
                rl = Date.now() % Ss,
                gs = Ss - rl,
                sl = window.setTimeout(tl, gs);
              return () => {
                window.clearTimeout(sl);
              };
            }, [as, ws, tl]),
            as
          );
        }
        const e = Math.floor(new Date().getTime() / 1e3);
        function L() {
          const ws = Math.floor(Date.now() / 1e3);
          return y.nOverrideDateNow ? y.nOverrideDateNow + (ws - e) : ws;
        }
        function ts() {
          return y.nOverrideDateNow ?? e;
        }
        function os() {
          return Q.useMemo(() => ts(), []);
        }
        function us() {
          return React.useMemo(() => y.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      89925: (St) => {
        St.exports = {
          AssetEditorContainer: "_4-JJjL9KGe2duRZ5rEz3U",
          AssetUploadSection: "_1VEMIFHP70MbNWbb4u8tg1",
          AssetTypesCtn: "_20JMdaklg0nftyTQuo9sIj",
          AssetEntryCtn: "_3WKFF37v6B8RkdWSwoMKm8",
          AssetPreview: "vbwNI7DB9YCpONKEKNJdz",
          PlaceholderAsset: "_1dBf1uIxpYFOh3qoJO5pbm",
          AssetGuidelinesSection: "u1yBUQz2o0QPurem4vag_",
          GuidelineHeader: "_6EHaek-StehydaNbI15Ju",
          GuidelineCtn: "_3VIqbsJ49gYqALudZ26ocN",
        };
      },
      19976: (St) => {
        St.exports = {
          DashStatsContainerPlaceholder: "_2BvHwqhjDNBILY7HxYZ5fA",
          AppDashboard: "_3AZIiEfg9ySoDT99t5sFmp",
          ModuleCtn: "_2jVePp7nya3Nj-SFteMHaj",
          HeaderCtn: "-BcZBPWZjsiRyi3CtgICp",
          DashStatsContainer: "_2pZUWz9doUUVgJTIiA_5qb",
          Chart: "_2z00NeTIYdtaDdJPVZrLm2",
          Stats: "_2jxzC1AyBA_xxpsnV5l1uW",
          StatsTitle: "UzSNxw8oOZZcgW8SXBp54",
          StatSubtitle: "_24k9yBmCwJ4zrfjtg4_A3D",
          Concurrent: "_3W_8ES3hX7fVooWDlaL9Q-",
          Now: "_2QJ6AbiOJ3XddtA1cOYnCp",
          CurrentStats: "_4ImisFVqyptwO9u0G6-0g",
          TooltipPartnerSummary: "_2WuiD5rL3fQXyAI5CXaOiX",
          LineItemsCtn: "_2Vj424_xUjyMnNmBpDenLi",
          ToolTipTable: "_1CBlLckQLSqavhG2S5qNYb",
          ToolTipTableRow: "_1hcQcqAFKPCYQUGtHIcGn4",
          TotalRow: "_1esRSJn8rPckHux_JS4iQg",
          ToolTipTableCell: "iIyyn73ITYmBOzqghT5NY",
          LeftAlign: "mgkgnb7LlDnVJwX6L29YM",
          ModuleTitle: "_1_qWSYHWj0MC9ivPG5LNEJ",
          ViewDetailLink: "_3LC92YRlgqBty5woF3CakT",
          StatGroup: "_2H61dmCW7zg12hj9OKWviV",
          Header: "gpt4bNGeQpWFC9R3TR6gU",
          Numerals: "_1aa9BSk_Qolo1ZpNuEGUqD",
        };
      },
      94794: (St) => {
        St.exports = {
          Header: "_1bQX7P2Y0-P0L76HpRs8ja",
          DocumentationLink: "_1woLr1WtyhzQmCx76wefyd",
          ButtonRow: "hhKiVETpovtogU809-7KR",
          ButtonDemoWishlistEmails: "_3q_S6jZ-Blwza3dpSF9Acm",
          InProgressThrobber: "_2fDnYT0wJJb7Uhm8it2-3C",
          DemoWishlistSendSucceeded: "_2PuyJjgB2xDwKmMSsxRvu3",
          DemoWishlistSendFailed: "_1hR0C89XjqtEH35k45Hk3K",
          DemoWishlistCtn: "_3Ax_mRIzuRGqX9tC3_bj2O",
          SubTitle: "_3XtsyeY-yvsZzbeFM8W6he",
          Description: "_2ZnWqKQhBNy4WJOdh_koKE",
          Notice: "_3BXZcqko8cynfMLmKmVZnE",
          BothSeparator: "_1dKVa7D8UQ_ZCYd15ytJCs",
          Warning: "_2her9TWgTSxd1_dkifBNzQ",
          Critical: "Cg12GJi8oD1m6alI4x0WL",
        };
      },
      85325: (St) => {
        St.exports = {
          AssetPropertyRow: "_3jHP0Gad5cln72nkP0vb-f",
          PropertyID: "_3cw2JVquWr2I-c2of7tNua",
          PropertyName: "Ti0we0Ib-BYRdW0E0nKCD",
          PropertyType: "_3pMsDNbrX-VHmOENbalkBi",
          PropertyRange: "_26JPX8Ws9PoLYfaeG4y9iT",
          HideFromDescription: "_34NC2WwZsVuN2n-OnfXjd9",
          RemoveButton: "_1YTgFZBFg12u3CY2ZIDc5T",
          AddPropertyButton: "_2h4abqe3IOx7s2LPKUlQl3",
          SaveButton: "_3ZpekvHN1FCWYHIBN4NnS-",
          StatusMessage: "_2p_H_J7rCyd7Qnom3fN4nz",
        };
      },
      65038: (St) => {
        St.exports = {
          DXVCNotice: "_1lEWAwP0XsnKz4xXZjEm1g",
          DXVCNoticeIconChecked: "_1M3zzD_D17Aw3wgdWaxZc",
          DXVCNoticeIconUnchecked: "iqxf3QFYD1lcAxbZHLzmY",
          DXVCNoticeText: "_3ONSEhSufFHQjBTa-qt0m4",
          DXVCNoticeTextChecked: "QmKToaPU7N03P2p9VRlqH",
          DXVCNoticeTextUnchecked: "_12HPIcBaY3YHgYnARVwc8M",
        };
      },
      61738: (St, is, d) => {
        var B = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function Kr(X) {
          var c = Q(X);
          return d(c);
        }
        function Q(X) {
          if (!d.o(B, X)) {
            var c = new Error("Cannot find module '" + X + "'");
            throw ((c.code = "MODULE_NOT_FOUND"), c);
          }
          return B[X];
        }
        (Kr.keys = function () {
          return Object.keys(B);
        }),
          (Kr.resolve = Q),
          (St.exports = Kr),
          (Kr.id = 61738);
      },
    },
  ]);
})();
