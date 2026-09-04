/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [9433],
    {
      40648: (wr, R, w) => {
        "use strict";
        w.d(R, { y5: () => Ar, c2: () => H });
        var e = w(35038),
          N = w(37400),
          Q = w(44420),
          $ = w(58632),
          c = w.n($),
          D = w(90626),
          U = w(20194),
          g = w(10349),
          G = w(40497),
          X = w(71742),
          B = w(13018),
          E = w(98609),
          Ms = w(67705);
        class I {
          m_steamInterface;
          GetPromotionTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              I.s_Singleton ||
                ((I.s_Singleton = new I()), I.s_Singleton.Init()),
              I.s_Singleton
            );
          }
          Init() {
            const p = (0, Ms.Tc)(
              "partnerbrowse_webapi_token",
              "application_config",
            );
            (0, X.wT)(!!p, "require partnerbrowse_webapi_token"),
              (this.m_steamInterface = new B.D(E.TS.WEBAPI_BASE_URL, p));
          }
        }
        function V() {
          return I.Get().GetPromotionTransport().GetServiceTransport();
        }
        function H(k) {
          const p = V(),
            _ = D.useContext(ys);
          return (0, U.I)(wl(_, p, k));
        }
        function J(k) {
          const p = usePartnerBrowseTransport(),
            _ = React.useContext(ys);
          return useQueries({ queries: k.map((S) => wl(_, p, S)) });
        }
        function Ar(k) {
          return G.L.getQueryData([
            "StoreItemCountryRestriction",
            (0, g.wD)(k),
          ]);
        }
        function Fs(k) {
          const { loadStoreItemCountryRestriction: p, children: _ } = k,
            S = React.useMemo(
              () => ({ loadStoreItemCountryRestriction: p }),
              [p],
            );
          return React.createElement(ys.Provider, { value: S }, _);
        }
        const ys = D.createContext({
          loadStoreItemCountryRestriction: async (k, p) => await T(p).load(k),
        });
        function wl(k, p, _) {
          return {
            queryKey: ["StoreItemCountryRestriction", (0, g.wD)(_)],
            queryFn: () => k.loadStoreItemCountryRestriction(_, p),
            enabled: !!_,
          };
        }
        let L;
        function T(k) {
          return (
            L ||
              (L = new (c())(
                async (p) => {
                  const _ = e.w.Init(N.zo);
                  _.Body().set_ids(p.map((us) => Q.O4.fromObject(us)));
                  const S = await N.BT.GetCountryRestrictions(k, _);
                  if (!S.BSuccess())
                    throw `Failed to call store Item Country Restriction with details: ${S.GetErrorMessage()}`;
                  const gs = new Map();
                  return (
                    S.Body()
                      .results()
                      .forEach((us) => {
                        const Us = us.toObject();
                        gs.set((0, g.wD)(Us.id), Us);
                      }),
                    p.map((us) => gs.get((0, g.wD)(us)) ?? null)
                  );
                },
                { maxBatchSize: 100, cache: !1 },
              )),
            L
          );
        }
      },
      1300: (wr, R, w) => {
        "use strict";
        w.r(R), w.d(R, { default: () => je });
        var e = w(7850),
          N = w(82791),
          Q = w(92757),
          $ = w(96135),
          c = w(90626),
          D = w(3166),
          U = w(94794),
          g = w(18210),
          G = w(58534),
          X = w(70512),
          B = w(35038),
          E = w(85599),
          Ms = w(36707),
          I = w(68312),
          V = w(8323),
          H = w(2801),
          J = w(36174),
          Ar = w(84676),
          Fs = w(40648),
          ys = w(41635),
          wl = w(29522),
          L = w(40358),
          T = w(72609);
        function k(m, r) {
          const t = (0, wl.$5)(r),
            { data: s } = (0, L.J$)(t);
          return s && s.related_items
            ? (s.related_items.demo_appid &&
                s.related_items.demo_appid.includes(m)) ||
                (s.related_items.standalone_demo_appid &&
                  s.related_items.standalone_demo_appid.includes(m))
            : !1;
        }
        function p(m) {
          const { parentAppId: r } = m;
          return (0, e.jsxs)("div", {
            className: (0, Ms.A)(U.Warning, U.Critical),
            children: [
              (0, e.jsx)("p", {
                children: (0, g.we)(
                  "#App_Landing_DemoWishlist_Demo_NotVisible",
                ),
              }),
              (0, e.jsx)("p", {
                children: (0, g.oW)(
                  "#App_Landing_DemoWishlist_Demo_NotVisible_Publish",
                  (0, e.jsx)("a", {
                    href: `${T.TS.PARTNER_BASE_URL}admin/game/editbyappid/${r}?activetab=tab_specialsettings#associated_demos`,
                    target: "_blank",
                  }),
                ),
              }),
            ],
          });
        }
        const _ = 7,
          S = 7;
        function gs(m) {
          const { demoAppID: r, parentAppId: t } = m,
            [s, b] = c.useState(!1),
            [u, y] = c.useState(void 0),
            n = k(r, t),
            [O, F] = c.useState(void 0),
            [x, Y] = c.useState(0),
            Z = c.useCallback(() => Y((C) => C + 1), []),
            bs = (0, I.KV)();
          c.useEffect(() => {
            const C = new AbortController();
            return (
              (async () => {
                b(!1), y(void 0);
                const h = B.w.Init(X.J6);
                h.Body().set_demo_appid(r), h.Body().set_appid(t);
                const K = await X.nd.GetWishlistDemoEmailStatus(bs, h);
                C.signal.aborted ||
                  (K.BSuccess() &&
                    (b(K.Body().can_fire()), y(K.Body().time_staged())));
              })(),
              () => C.abort()
            );
          }, [bs, r, t, x]),
            c.useEffect(() => {
              let C = window.AppLandingRefreshCallbacks;
              C || ((C = new V.lu()), (window.AppLandingRefreshCallbacks = C));
              const ws = C.Register(Z);
              return () => ws.Unregister();
            }, [Z]);
          const ds = s || O !== void 0,
            br = u + _ * J.Kp.PerDay,
            zs = !s && u && new Date(br * 1e3) > new Date();
          if (ds || zs) {
            const C = `${D.TS.PARTNER_BASE_URL}doc/marketing/wishlist`;
            return (0, e.jsxs)("div", {
              className: U.DemoWishlistCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: U.Header,
                  children: [
                    (0, e.jsx)("h2", {
                      children: (0, g.we)("#App_Landing_DemoWishlist_Title"),
                    }),
                    (0, e.jsx)("a", {
                      className: U.DocumentationLink,
                      href: C,
                      children: (0, g.we)("#App_Landing_DemoWishlist_Link"),
                    }),
                  ],
                }),
                ds &&
                  (0, e.jsx)(us, {
                    demoAppID: r,
                    parentAppId: t,
                    bSendEmailsSucceeded: O,
                    setSendEmailsSucceeded: F,
                    bIsDemoVisible: n,
                  }),
                ds && !n && (0, e.jsx)(p, { demoAppID: r, parentAppId: t }),
                ds && zs && (0, e.jsx)("hr", { className: U.BothSeparator }),
                zs &&
                  (0, e.jsx)(Os, {
                    parentAppId: t,
                    timeStaged: u,
                    noticeVisibleToDate: br,
                  }),
              ],
            });
          }
        }
        function us(m) {
          const {
              demoAppID: r,
              parentAppId: t,
              bIsDemoVisible: s,
              bSendEmailsSucceeded: b,
              setSendEmailsSucceeded: u,
            } = m,
            [y, n] = c.useState(!1),
            [O, F] = c.useState(!1),
            x = (0, I.KV)(),
            Y = c.useCallback(async () => {
              F(!1), n(!0);
              try {
                const br = B.w.Init(X.KP);
                br.Body().set_demo_appid(r), br.Body().set_appid(t);
                const zs = await X.nd.QueueWishlistDemoEmailToFire(x, br);
                u(zs.BSuccess());
              } finally {
                n(!1);
              }
            }, [r, t, x, u]),
            { bLoading: Z, rgWarnings: bs } = Us(t, r),
            ds = bs.every((br) => !br.bCritical);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: U.SubTitle,
                children: (0, g.we)("#App_Landing_DemoWishlist_SubTitle"),
              }),
              (0, e.jsx)("div", {
                className: U.Description,
                children: (0, e.jsx)("p", {
                  children: (0, g.we)("#App_Landing_DemoWishlist_Desc"),
                }),
              }),
              Z
                ? (0, e.jsx)(E.t, {})
                : (0, e.jsxs)(e.Fragment, {
                    children: [
                      bs.map((br) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: (0, Ms.A)(
                              U.Warning,
                              br.bCritical && U.Critical,
                            ),
                            children: (0, e.jsx)("p", { children: br.sText }),
                          },
                          br.sText,
                        ),
                      ),
                      b === void 0 &&
                        (0, e.jsx)(e.Fragment, {
                          children: (0, e.jsxs)("div", {
                            className: U.ButtonRow,
                            children: [
                              (0, e.jsx)(G.$n, {
                                className: (0, Ms.A)(
                                  "btn_green_steamui btn_border_2px btn_medium",
                                  U.ButtonDemoWishlistEmails,
                                ),
                                disabled: y || !ds || !s,
                                onClick: () => F(!0),
                                children: (0, e.jsx)("span", {
                                  children: (0, g.we)(
                                    "#App_Landing_DemoWishlist_SendEmailsButton",
                                  ),
                                }),
                              }),
                              y &&
                                (0, e.jsx)(E.t, {
                                  className: U.InProgressThrobber,
                                  size: "small",
                                }),
                            ],
                          }),
                        }),
                      b !== void 0 &&
                        (0, e.jsxs)("div", {
                          className: U.ButtonRow,
                          children: [
                            b &&
                              (0, e.jsx)("div", {
                                className: U.DemoWishlistSendSucceeded,
                                children: (0, g.we)(
                                  "#App_Landing_DemoWishlist_SendEmails_Succeeded",
                                ),
                              }),
                            !b &&
                              (0, e.jsx)("div", {
                                className: U.DemoWishlistSendFailed,
                                children: (0, g.we)(
                                  "#App_Landing_DemoWishlist_SendEmails_Failed",
                                ),
                              }),
                          ],
                        }),
                    ],
                  }),
              O &&
                (0, e.jsxs)(H.mt, {
                  active: !0,
                  className: U.ControllerWizardModal,
                  children: [
                    (0, e.jsx)("h1", {
                      children: (0, g.we)(
                        "#App_Landing_DemoWishlist_Dialog_Header",
                      ),
                    }),
                    (0, e.jsxs)(G.nB, {
                      className: U.WizardBody,
                      children: [
                        (0, e.jsx)("div", {
                          children: (0, g.we)(
                            "#App_Landing_DemoWishlist_Dialog_Desc",
                          ),
                        }),
                        (0, e.jsx)("h2", {
                          children: (0, g.we)(
                            "#App_Landing_DemoWishlist_Dialog_ListTitle",
                          ),
                        }),
                        (0, e.jsx)("ul", {
                          children: (0, g.oW)(
                            "#App_Landing_DemoWishlist_Dialog_List",
                            (0, e.jsx)("li", {}),
                            (0, e.jsx)("b", {}),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)(G.CB, {
                      onOK: Y,
                      strOKText: (0, g.we)(
                        "#App_Landing_DemoWishlist_Dialog_Confirm",
                      ),
                      onCancel: () => F(!1),
                      strCancelText: (0, g.we)(
                        "#App_Landing_DemoWishlist_Dialog_Cancel",
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function Us(m, r) {
          const t = (0, Fs.c2)({ appid: m }),
            s = (0, Fs.c2)({ appid: r }),
            [b] = (0, Ar.t7)(m, { include_release: !0 }),
            u = t.isLoading || s.isLoading,
            y = t.isSuccess && s.isSuccess,
            [n, O, F, x] = c.useMemo(() => {
              if (!y) return [];
              const v = (js) =>
                ys.lf(
                  js?.map((Il) => Il.toUpperCase()),
                  !0,
                );
              return [
                v(t.data.allowed_countries),
                v(t.data.restricted_countries)?.filter((js) => js != "XC"),
                v(s.data.allowed_countries),
                v(s.data.restricted_countries)?.filter((js) => js != "XC"),
              ];
            }, [y, s, t]);
          if (u) return { bLoading: !0, rgWarnings: [] };
          if (!y)
            return {
              bLoading: !1,
              rgWarnings: [
                {
                  sText: (0, g.we)(
                    "#App_Landing_DemoWishlist_CountryLoad_Failed",
                  ),
                  bCritical: !0,
                },
              ],
            };
          const Y = [],
            Z = b && b.GetReleaseDateRTime(!0);
          Z &&
            Z > new Date().getTime() / 1e3 &&
            Z < new Date().getTime() / 1e3 + 14 * J.Kp.PerDay &&
            Y.push({
              sText: (0, g.we)(
                "#App_Landing_DemoWishlist_ParentAppWarning",
                b.GetFormattedSteamReleaseDate(),
              ),
            });
          const ds = (v, js) =>
              v.length == 0 && js.length == 0
                ? "unrestricted"
                : v.length > 0
                  ? "allow"
                  : "deny",
            br = ds(n, O),
            zs = ds(F, x),
            C = (v, js) =>
              v.length == 0 && js.length == 0
                ? (0, g.we)(
                    "#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Unrestricted",
                  )
                : v.length > 0
                  ? (0, g.we)(
                      "#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Allow",
                      v.join(", "),
                    )
                  : (0, g.we)(
                      "#App_Landing_DemoWishlist_CountryRestrictions_Mismatch_Deny",
                      js.join(", "),
                    ),
            ws = C(n, O),
            h = C(F, x);
          return (
            br == "unrestricted" ||
            zs == "unrestricted" ||
            n.length > 0 == F.length > 0
              ? ws != h &&
                Y.push({
                  sText: (0, g.we)(
                    "#App_Landing_DemoWishlist_CountryRestrictions_Mismatch",
                    ws,
                    h,
                  ),
                })
              : Y.push({
                  sText: (0, g.we)(
                    "#App_Landing_DemoWishlist_CountryRestrictionTypes_Mismatch",
                    ws,
                    h,
                  ),
                  bCritical: !0,
                }),
            { bLoading: !1, rgWarnings: Y }
          );
        }
        function Os(m) {
          const { parentAppId: r, timeStaged: t, noticeVisibleToDate: s } = m,
            b = (x) =>
              `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}`,
            u = b(new Date((t - S * J.Kp.PerDay) * 1e3)),
            y = b(new Date()),
            n = new Intl.DateTimeFormat(navigator.language, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(t * 1e3),
            O = new Intl.DateTimeFormat(navigator.language, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(s * 1e3),
            F = `${D.TS.STATS_BASE_URL}app/wishlist/${r}/?dateStart=${u}&dateEnd=${y}`;
          return (0, e.jsxs)("div", {
            className: U.Description,
            children: [
              (0, e.jsx)("p", {
                children: (0, g.we)(
                  "#App_Landing_DemoWishlist_SentRecently_Desc",
                  n,
                ),
              }),
              (0, e.jsx)("p", {
                children: (0, e.jsx)("a", {
                  href: F,
                  children: (0, g.we)(
                    "#App_Landing_DemoWishlist_SentRecently_ViewStats",
                  ),
                }),
              }),
              (0, e.jsx)("p", {
                className: U.Notice,
                children: (0, g.we)(
                  "#App_Landing_DemoWishlist_SentRecently_Notice",
                  O,
                ),
              }),
            ],
          });
        }
        var $s = w(93964),
          Ws = w(72604),
          Xs = w(41735),
          Vs = w.n(Xs),
          ul = w(20194),
          hs = w(98609);
        function Ml(m, r, t) {
          const { isLoading: s, data: b } = (0, ul.I)({
            queryKey: ["usePartnerFinancialDailySummary", m, r, t],
            queryFn: async () => {
              const u = { partnerid: m, pastdays: r, appid: t },
                y = `${hs.TS.PARTNER_BASE_URL}financial/ajaxgetpartnersummary`,
                n = await Vs().get(y, { params: u, withCredentials: !0 });
              return n?.data?.success != Ws.R
                ? { daily_sales: [], summary_sales: {} }
                : n.data.data;
            },
            enabled: !!m && r >= 1,
          });
          return s ? null : b;
        }
        var zl = w(32671),
          gl = w(61141),
          yl = w(58661),
          cl = w(73077),
          jl = w(30230),
          xl = w(20283),
          xs = w(90150),
          Wl = w(25792),
          nl = w(71421),
          Ys = w(58832),
          P = w(19976),
          Ol = w(24642);
        function Zl(m) {
          const { nPartnerID: r, nAppID: t } = m;
          return hs.iA.is_support
            ? (0, e.jsx)(bm, { nPartnerID: r, nAppID: t })
            : null;
        }
        function bm(m) {
          const { nPartnerID: r, nAppID: t } = m,
            [s, b] = (0, c.useState)(90),
            u = Ml(r, s, t);
          return !u || u.daily_sales?.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: (0, Ms.A)(P.AppDashboard, "valveOutline padded"),
                children: [
                  (0, e.jsx)("p", {
                    className: "valveh2",
                    children: "Valve Only:",
                  }),
                  (0, e.jsx)(um, { nDaysInThePast: s, fnUpdateDaysInPast: b }),
                  (0, e.jsx)(zm, { stats: u }),
                  (0, e.jsx)(gm, { stats: u }),
                ],
              });
        }
        const wm = [
          { label: (0, g.we)("#PartnerStats_DayWeek"), data: 7 },
          { label: (0, g.we)("#PartnerStats_DayMonth"), data: 30 },
          { label: (0, g.we)("#PartnerStats_DayPeriod"), data: 90 },
        ];
        function um(m) {
          const { nDaysInThePast: r, fnUpdateDaysInPast: t } = m;
          return (0, e.jsxs)("div", {
            className: P.ModuleCtn,
            children: [
              (0, e.jsxs)("div", {
                className: P.LeftAlign,
                children: [
                  (0, e.jsx)("div", {
                    className: P.ModuleTitle,
                    children: (0, g.we)("#PartnerStats_DayLabel"),
                  }),
                  (0, e.jsx)(G.m, {
                    layout: "inline",
                    label: null,
                    rgOptions: wm,
                    selectedOption: r,
                    onChange: (s) => t(s.data),
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: P.ViewDetailLink,
                children: (0, e.jsx)("a", {
                  href: "#",
                  children: (0, g.we)("#PartnerStats_ViewDetail"),
                }),
              }),
            ],
          });
        }
        const dm = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        });
        function Mm(...m) {
          let r = 0;
          return (
            m.forEach((t) => {
              r += Number.parseInt(t || "0") / 1e4;
            }),
            dm.format(r)
          );
        }
        function zm(m) {
          const { stats: r } = m;
          return (0, e.jsxs)("div", {
            className: P.HeaderCtn,
            children: [
              (0, e.jsxs)("div", {
                className: P.StatGroup,
                children: [
                  (0, e.jsx)("div", {
                    className: P.Header,
                    children: (0, g.we)("#PartnerStats_Header_Revenue"),
                  }),
                  (0, e.jsx)("div", {
                    className: P.Numerals,
                    children: Mm(r.summary_sales.total_gross_sales_usdx100),
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: P.StatGroup,
                children: [
                  (0, e.jsx)("div", {
                    className: P.Header,
                    children: (0, g.we)("#PartnerStats_Header_Units"),
                  }),
                  (0, e.jsx)("div", {
                    className: P.Numerals,
                    children: (0, Ol.D)(
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
        function gm(m) {
          const { stats: r } = m,
            t = "total_gross_sales_usdx100",
            [s, b, u] = (0, c.useMemo)(() => {
              if (!r || r.daily_sales?.length == 0) return [0, 0, []];
              const y = cm(r.daily_sales, t);
              let n = 0,
                O = 0;
              return (
                y.forEach((F) => {
                  F.partner_stats_value > n && (n = F.partner_stats_value),
                    (O += F.partner_stats_value);
                }),
                [n, O, y.sort((F, x) => F.rtime - x.rtime)]
              );
            }, [r, t]);
          return !r || u.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: P.DashStatsContainer,
                children: (0, e.jsx)("div", {
                  className: P.Chart,
                  children: (0, e.jsx)(Wl.tH, {
                    children: (0, e.jsx)(jm, { Data: u, nPeak: s }),
                  }),
                }),
              });
        }
        function ym(m, r) {
          return m[r];
        }
        function cm(m, r) {
          const t = new Map();
          return (
            m.forEach((s) => {
              const b = s.rtime_date,
                u = Number.parseInt(ym(s.daily_summary_sales, r));
              u &&
                t.set(b, {
                  partner_stats_value: r.includes("usd") ? u / 1e4 : u,
                  rtime: b,
                  top_app_sales: s.top_app_sales,
                });
            }),
            Array.from(t.values())
          );
        }
        const jm = c.memo((m) => {
          const { Data: r, nPeak: t } = m,
            s = (0, c.useCallback)(
              (b, u) =>
                r.length > 20
                  ? r[u]?.partner_stats_value && u % 7 === 0
                    ? new Date(r[u].rtime * 1e3).toLocaleDateString(
                        g.pf.GetPreferredLocales(),
                        { month: "short", day: "numeric" },
                      )
                    : ""
                  : r[u]?.partner_stats_value
                    ? new Date(r[u].rtime * 1e3).toLocaleDateString(
                        g.pf.GetPreferredLocales(),
                        { month: "short", day: "numeric" },
                      )
                    : "",
              [r],
            );
          return (0, e.jsx)(zl.u, {
            width: "100%",
            height: "100%",
            children: (0, e.jsxs)(gl.X, {
              data: r,
              margin: { top: 25, left: 0, right: 0, bottom: 0 },
              barGap: 10,
              children: [
                (0, e.jsx)("defs", {
                  children: (0, e.jsxs)("linearGradient", {
                    id: "bar_linear",
                    x1: "0",
                    x2: "0",
                    y1: "0",
                    y2: "1",
                    children: [
                      (0, e.jsx)("stop", { stopColor: "#1A9FFF" }),
                      (0, e.jsx)("stop", {
                        offset: "1",
                        stopColor: "#1A9FFF",
                        stopOpacity: "1",
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(yl.d, { vertical: !1, stroke: "#a0aab6" }),
                (0, e.jsx)(cl.h, {
                  tickFormatter: Ys.Z2,
                  tick: { fill: "white" },
                  axisLine: !1,
                  orientation: "right",
                }),
                (0, e.jsx)(jl.m, { content: (0, e.jsx)(nm, {}) }),
                (0, e.jsx)(xl.y, {
                  dataKey: "partner_stats_value",
                  fill: "url( #bar_linear )",
                }),
                (0, e.jsx)(xs.W, {
                  interval: 0,
                  tick: (0, e.jsx)(Wm, {}),
                  tickFormatter: s,
                }),
              ],
            }),
          });
        });
        function Wm(m) {
          const { x: r, y: t, payload: s } = m,
            b = m.tickFormatter(s.value, s.index);
          return (0, e.jsx)("g", {
            transform: `translate(${r},${t})`,
            children: (0, e.jsx)("text", {
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
        function nm({ active: m, payload: r }) {
          if (m && r && r.length) {
            const t = r[0].payload,
              s = t.partner_stats_value;
            let b = s;
            return (
              t.top_app_sales.forEach((u) => {
                b -=
                  Number.parseInt(
                    u.app_summary_sales.total_gross_sales_usdx100,
                  ) / 1e4;
              }),
              (0, e.jsxs)(nl.t1, {
                className: P.TooltipPartnerSummary,
                children: [
                  (0, e.jsx)("div", {
                    children: (0, g.we)(
                      "#PartnerStats_Tooltip_Date",
                      (0, g.TW)(t.rtime),
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: P.LineItemsCtn,
                    children: (0, e.jsxs)("div", {
                      className: P.ToolTipTable,
                      children: [
                        t.top_app_sales.map((u) => {
                          const n =
                            (Number.parseInt(
                              u.app_summary_sales.total_gross_sales_usdx100,
                            ) /
                              1e4 /
                              s) *
                            100;
                          return (0, e.jsx)(
                            Fm,
                            {
                              appid: u.appid,
                              usdRevenue:
                                Number.parseInt(
                                  u.app_summary_sales.total_gross_sales_usdx100,
                                ) / 1e4,
                              nPercentage: n,
                            },
                            "app" + u.appid,
                          );
                        }),
                        b > 2 &&
                          (0, e.jsxs)("div", {
                            className: P.ToolTipTableRow,
                            children: [
                              (0, e.jsx)("div", {
                                className: P.ToolTipTableCell,
                                children: (0, g.we)(
                                  "#PartnerStats_Tooltip_Remaining",
                                ),
                              }),
                              (0, e.jsx)("div", {
                                className: P.ToolTipTableCell,
                                children: (0, Ys.Z2)(b),
                              }),
                              (0, e.jsxs)("div", {
                                className: P.ToolTipTableCell,
                                children: [Math.round((b / s) * 100), "%"],
                              }),
                            ],
                          }),
                        (0, e.jsxs)("div", {
                          className: (0, Ms.A)(P.ToolTipTableRow, P.TotalRow),
                          children: [
                            (0, e.jsx)("div", {
                              className: P.ToolTipTableCell,
                              children: (0, g.we)(
                                "#PartnerStats_Tooltip_Total",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: P.ToolTipTableCell,
                              children: (0, Ys.Z2)(s),
                            }),
                            (0, e.jsx)("div", {
                              className: P.ToolTipTableCell,
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
        function Fm(m) {
          const { appid: r, usdRevenue: t, nPercentage: s } = m,
            [b] = (0, Ar.t7)(r, {});
          return (0, e.jsxs)("div", {
            className: P.ToolTipTableRow,
            children: [
              (0, e.jsx)("div", {
                className: P.ToolTipTableCell,
                children: b?.GetName() || r,
              }),
              (0, e.jsx)("div", {
                className: P.ToolTipTableCell,
                children: (0, Ys.Z2)(t),
              }),
              (0, e.jsxs)("div", {
                className: P.ToolTipTableCell,
                children: [Math.round(s), "%"],
              }),
            ],
          });
        }
        function Um(m) {
          const { nAppId: r, strAppType: t } = m,
            s = (0, $s.V)();
          return (
            (t == "Game" || t == "Application" || t == "DLC" || t == "Music") &&
            (0, e.jsx)(Zl, { nPartnerID: s, nAppID: r })
          );
        }
        function xm(m) {
          const { nAppId: r, nParentAppId: t, strAppType: s } = m;
          return (
            s == "Demo" && (0, e.jsx)(gs, { demoAppID: r, parentAppId: t })
          );
        }
        var Om = w(64916),
          fs = w(85325),
          hl = w(24660),
          l = w(80613),
          a = w.n(l),
          i = w(75245);
        const hm = 0,
          fm = 1,
          Im = 2,
          Km = 3,
          pe = 4;
        function ve(m) {
          return "unknown EMarketBucketLevel ( " + m + " )";
        }
        function qe(m) {
          return "unknown EAssetPropertyType ( " + m + " )";
        }
        function Ae(m) {
          return "unknown ETradeOfferState ( " + m + " )";
        }
        function De(m) {
          return "unknown ETradeOfferConfirmationMethod ( " + m + " )";
        }
        class ur extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.type || i.Sg(ur.M()),
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
                    type: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    value: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    color: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    label: { n: 4, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 5, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, t) {
            return i.BT(ur.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ur();
            return ur.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_DescriptionLine";
          }
        }
        class rr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.link || i.Sg(rr.M()),
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
                    link: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, t) {
            return i.BT(rr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new rr();
            return rr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Action";
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
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = i.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(dr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new dr();
            return dr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Tag";
          }
        }
        class Dr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dr.prototype.contained_items || i.Sg(Dr.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    contained_items: { n: 1, c: Mr, r: !0, q: !0 },
                    search_tags: { n: 2, c: dr, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(Dr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Dr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Dr();
            return Dr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Dr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Dr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ContainerProperties";
          }
        }
        class Mr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.classid || i.Sg(Mr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
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
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = i.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Mr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Mr();
            return Mr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_ClassIdentifiers";
          }
        }
        class q extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.appid || i.Sg(q.M()),
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
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
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
                    descriptions: { n: 8, c: ur, r: !0, q: !0 },
                    tradable: { n: 9, br: i.qM.readBool, bw: i.gp.writeBool },
                    actions: { n: 10, c: rr, r: !0, q: !0 },
                    owner_descriptions: { n: 11, c: ur, r: !0, q: !0 },
                    owner_actions: { n: 12, c: rr, r: !0, q: !0 },
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
                    contained_item: { n: 20, c: q },
                    market_actions: { n: 21, c: rr, r: !0, q: !0 },
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
                    tags: { n: 26, c: dr, r: !0, q: !0 },
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
                    container_properties: { n: 33, c: Dr },
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
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = i.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(q.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new q();
            return q.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(q.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(q.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_Description";
          }
        }
        class ir extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.propertyid || i.Sg(ir.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
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
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = i.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ir.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ir();
            return ir.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperty";
          }
        }
        class zr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.classid || i.Sg(zr.M()),
              l.Message.initialize(this, r, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
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
                    standalone_properties: { n: 3, c: ir, r: !0, q: !0 },
                    parent_relationship_properties: {
                      n: 4,
                      c: ir,
                      r: !0,
                      q: !0,
                    },
                    nested_accessories: { n: 5, c: zr, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(zr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new zr();
            return zr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetAccessory";
          }
        }
        class gr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.appid || i.Sg(gr.M()),
              l.Message.initialize(this, r, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
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
                    asset_properties: { n: 4, c: ir, r: !0, q: !0 },
                    asset_accessories: { n: 5, c: zr, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(gr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new gr();
            return gr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(gr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(gr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetProperties";
          }
        }
        class Gr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gr.prototype.id || i.Sg(Gr.M()),
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
              Gr.sm_m
            );
          }
          static MBF() {
            return Gr.sm_mbf || (Gr.sm_mbf = i.w0(Gr.M())), Gr.sm_mbf;
          }
          toObject(r = !1) {
            return Gr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Gr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Gr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Gr();
            return Gr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Gr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Gr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEconItem_AssetPropertySchema";
          }
        }
        class yr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.appid || i.Sg(yr.M()),
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
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    language: {
                      n: 2,
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
          static toObject(r, t) {
            return i.BT(yr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new yr();
            return yr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Request";
          }
        }
        class cr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.property_schemas || i.Sg(cr.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: { property_schemas: { n: 1, c: Gr, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(cr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new cr();
            return cr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(cr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(cr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetPropertySchema_Response";
          }
        }
        class A extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.appid || i.Sg(A.M()),
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
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = i.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(A.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new A();
            return A.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(A.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(A.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_Asset";
          }
        }
        class jr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.steamid || i.Sg(jr.M()),
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
                    filters: { n: 6, c: Er },
                    start_assetid: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    count: { n: 9, br: i.qM.readInt32, bw: i.gp.writeInt32 },
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
          static toObject(r, t) {
            return i.BT(jr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new jr();
            return jr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request";
          }
        }
        class Er extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.assetids || i.Sg(Er.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
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
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = i.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Er.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Er();
            return Er.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
          }
        }
        class Wr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.assets || i.Sg(Wr.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2, 3, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    assets: { n: 1, c: A, r: !0, q: !0 },
                    descriptions: { n: 2, c: q, r: !0, q: !0 },
                    missing_assets: { n: 3, c: A, r: !0, q: !0 },
                    asset_properties: { n: 7, c: gr, r: !0, q: !0 },
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
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = i.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Wr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Wr();
            return Wr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Wr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Wr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetInventoryItemsWithDescriptions_Response";
          }
        }
        class nr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.generate_new_token || i.Sg(nr.M()),
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
                    generate_new_token: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
          static toObject(r, t) {
            return i.BT(nr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new nr();
            return nr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Request";
          }
        }
        class Fr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fr.prototype.trade_offer_access_token || i.Sg(Fr.M()),
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
                    trade_offer_access_token: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(Fr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Fr();
            return Fr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferAccessToken_Response";
          }
        }
        class Ur extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ur.prototype.return_url || i.Sg(Ur.M()),
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
                    return_url: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(Ur.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ur.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ur();
            return Ur.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ur.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ur.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
          }
        }
        class xr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.url || i.Sg(xr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    url: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, t) {
            return i.BT(xr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new xr();
            return xr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
          }
        }
        class tr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.language || i.Sg(tr.M()),
              l.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    classes: { n: 3, c: Mr, r: !0, q: !0 },
                    high_pri: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, t) {
            return i.BT(tr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new tr();
            return tr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Request";
          }
        }
        class ar extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.descriptions || i.Sg(ar.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: { descriptions: { n: 1, c: q, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(ar.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ar();
            return ar.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ar.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ar.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Response";
          }
        }
        var ql;
        ((m) => {
          function r(y, n, O) {
            return y.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, B.I8)(jr, n, O),
              Wr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetInventoryItemsWithDescriptions = r;
          function t(y, n, O) {
            return y.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, B.I8)(nr, n, O),
              Fr,
              { ePrivilege: 1 },
            );
          }
          m.GetTradeOfferAccessToken = t;
          function s(y, n, O) {
            return y.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, B.I8)(Ur, n, O),
              xr,
              { ePrivilege: 1 },
            );
          }
          m.ClientGetItemShopOverlayAuthURL = s;
          function b(y, n, O) {
            return y.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, B.I8)(tr, n, O),
              ar,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetClassInfo = b;
          function u(y, n, O) {
            return y.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, B.I8)(yr, n, O),
              cr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetPropertySchema = u;
        })(ql || (ql = {}));
        class Is extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Is.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Is();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Is();
            return Is.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Is.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Is.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_Generic_Response";
          }
        }
        class Sr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sr.prototype.appid || i.Sg(Sr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
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
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = i.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(r = !1) {
            return Sr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Sr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Sr();
            return Sr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradePermissionsForApp_Request";
          }
        }
        class Rr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rr.prototype.can_receive || i.Sg(Rr.M()),
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
              Rr.sm_m
            );
          }
          static MBF() {
            return Rr.sm_mbf || (Rr.sm_mbf = i.w0(Rr.M())), Rr.sm_mbf;
          }
          toObject(r = !1) {
            return Rr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Rr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Rr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Rr();
            return Rr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Rr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Rr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradePermissionsForApp_Response";
          }
        }
        class or extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              or.prototype.steamid || i.Sg(or.M()),
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
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = i.w0(or.M())), or.sm_mbf;
          }
          toObject(r = !1) {
            return or.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(or.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new or();
            return or.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEconSummary_Request";
          }
        }
        class Cr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Cr.prototype.appid || i.Sg(Cr.M()),
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
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    asset_count: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
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
          static toObject(r, t) {
            return i.BT(Cr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Cr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Cr();
            return Cr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Cr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Cr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AppSummary";
          }
        }
        class _r extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _r.prototype.apps || i.Sg(_r.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _r.sm_m ||
                (_r.sm_m = {
                  proto: _r,
                  fields: {
                    apps: { n: 1, c: Cr, r: !0, q: !0 },
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
              _r.sm_m
            );
          }
          static MBF() {
            return _r.sm_mbf || (_r.sm_mbf = i.w0(_r.M())), _r.sm_mbf;
          }
          toObject(r = !1) {
            return _r.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(_r.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new _r();
            return _r.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEconSummary_Response";
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
          static toObject(r, t) {
            return i.BT(ri.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ri.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ri();
            return ri.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ri.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ri.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTopTradePartners_Request";
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
              ii.sm_m
            );
          }
          static MBF() {
            return ii.sm_mbf || (ii.sm_mbf = i.w0(ii.M())), ii.sm_mbf;
          }
          toObject(r = !1) {
            return ii.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ii.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ii.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ii();
            return ii.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ii.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ii.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_TopTradePartner";
          }
        }
        class ti extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ti.prototype.partners || i.Sg(ti.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ti.sm_m ||
                (ti.sm_m = {
                  proto: ti,
                  fields: { partners: { n: 1, c: ii, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(ti.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ti.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ti();
            return ti.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ti.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ti.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTopTradePartners_Response";
          }
        }
        class ai extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ai.prototype.steamid || i.Sg(ai.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ai.sm_m ||
                (ai.sm_m = {
                  proto: ai,
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
              ai.sm_m
            );
          }
          static MBF() {
            return ai.sm_mbf || (ai.sm_mbf = i.w0(ai.M())), ai.sm_mbf;
          }
          toObject(r = !1) {
            return ai.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ai.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ai.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ai();
            return ai.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ai.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ai.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_SetTradeBanTime_Request";
          }
        }
        class si extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              si.prototype.steamid || i.Sg(si.M()),
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
              si.sm_m
            );
          }
          static MBF() {
            return si.sm_mbf || (si.sm_mbf = i.w0(si.M())), si.sm_mbf;
          }
          toObject(r = !1) {
            return si.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(si.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(si.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new si();
            return si.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(si.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(si.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_SetForceTradeTrustedTime_Request";
          }
        }
        class li extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              li.prototype.steamid_target || i.Sg(li.M()),
              l.Message.initialize(this, r, 0, -1, [2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              li.sm_m ||
                (li.sm_m = {
                  proto: li,
                  fields: {
                    steamid_target: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    items_to_give: { n: 2, c: A, r: !0, q: !0 },
                    items_to_receive: { n: 3, c: A, r: !0, q: !0 },
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
                    trading_topic: { n: 7, c: mi },
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
              li.sm_m
            );
          }
          static MBF() {
            return li.sm_mbf || (li.sm_mbf = i.w0(li.M())), li.sm_mbf;
          }
          toObject(r = !1) {
            return li.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(li.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(li.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new li();
            return li.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(li.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(li.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CreateTradeOffer_Request";
          }
        }
        class mi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mi.prototype.steamid_owner || i.Sg(mi.M()),
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
              mi.sm_m
            );
          }
          static MBF() {
            return mi.sm_mbf || (mi.sm_mbf = i.w0(mi.M())), mi.sm_mbf;
          }
          toObject(r = !1) {
            return mi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(mi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(mi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new mi();
            return mi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(mi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(mi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CreateTradeOffer_Request_ForumTopicIdentifier";
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
                    trade_response: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 3, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(ei.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ei.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ei();
            return ei.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ei.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ei.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CreateTradeOffer_Response";
          }
        }
        class Bi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bi.prototype.steamid_target || i.Sg(Bi.M()),
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
                    steamid_target: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    item_to_give: { n: 3, c: A },
                    webcookie: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(Bi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Bi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Bi();
            return Bi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Bi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Bi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_SendGift_Request";
          }
        }
        class bi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bi.prototype.tradeofferid || i.Sg(bi.M()),
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
              bi.sm_m
            );
          }
          static MBF() {
            return bi.sm_mbf || (bi.sm_mbf = i.w0(bi.M())), bi.sm_mbf;
          }
          toObject(r = !1) {
            return bi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(bi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(bi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new bi();
            return bi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(bi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return bi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(bi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              bi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_SendGift_Response";
          }
        }
        class wi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wi.prototype.get_sent_offers || i.Sg(wi.M()),
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
              wi.sm_m
            );
          }
          static MBF() {
            return wi.sm_mbf || (wi.sm_mbf = i.w0(wi.M())), wi.sm_mbf;
          }
          toObject(r = !1) {
            return wi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(wi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(wi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new wi();
            return wi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(wi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(wi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffers_Request";
          }
        }
        class o extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.tradeofferid || i.Sg(o.M()),
              l.Message.initialize(this, r, 0, -1, [6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
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
                    items_to_give: { n: 6, c: A, r: !0, q: !0 },
                    items_to_receive: { n: 7, c: A, r: !0, q: !0 },
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
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(o.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new o();
            return o.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(o.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(o.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_TradeOffer";
          }
        }
        class ui extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ui.prototype.trade_offers_sent || i.Sg(ui.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ui.sm_m ||
                (ui.sm_m = {
                  proto: ui,
                  fields: {
                    trade_offers_sent: { n: 1, c: o, r: !0, q: !0 },
                    trade_offers_received: { n: 2, c: o, r: !0, q: !0 },
                    descriptions: { n: 3, c: q, r: !0, q: !0 },
                    next_cursor: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(ui.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ui.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ui();
            return ui.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ui.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ui.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffers_Response";
          }
        }
        class di extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              di.prototype.steamid || i.Sg(di.M()),
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
              di.sm_m
            );
          }
          static MBF() {
            return di.sm_mbf || (di.sm_mbf = i.w0(di.M())), di.sm_mbf;
          }
          toObject(r = !1) {
            return di.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(di.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(di.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new di();
            return di.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(di.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(di.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_TradeLeftEscrow_Request";
          }
        }
        class Zs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Zs.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Zs();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Zs();
            return Zs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_TradeLeftEscrow_Response";
          }
        }
        class Mi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mi.prototype.steamid_target || i.Sg(Mi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mi.sm_m ||
                (Mi.sm_m = {
                  proto: Mi,
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
              Mi.sm_m
            );
          }
          static MBF() {
            return Mi.sm_mbf || (Mi.sm_mbf = i.w0(Mi.M())), Mi.sm_mbf;
          }
          toObject(r = !1) {
            return Mi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Mi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Mi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Mi();
            return Mi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Mi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Mi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Mi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Mi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHoldDurations_Request";
          }
        }
        class zi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zi.prototype.my_escrow || i.Sg(zi.M()),
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
                    my_escrow: { n: 1, c: sr },
                    their_escrow: { n: 2, c: sr },
                    both_escrow: { n: 3, c: sr },
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
          static toObject(r, t) {
            return i.BT(zi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(zi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new zi();
            return zi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(zi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(zi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHoldDurations_Response";
          }
        }
        class sr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.escrow_end_duration_seconds || i.Sg(sr.M()),
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
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = i.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(sr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new sr();
            return sr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(sr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(sr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHoldDurations_Response_Scenario";
          }
        }
        class gi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gi.prototype.tradeofferid || i.Sg(gi.M()),
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
              gi.sm_m
            );
          }
          static MBF() {
            return gi.sm_mbf || (gi.sm_mbf = i.w0(gi.M())), gi.sm_mbf;
          }
          toObject(r = !1) {
            return gi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(gi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(gi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new gi();
            return gi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(gi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(gi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffer_Request";
          }
        }
        class yi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yi.prototype.steamid || i.Sg(yi.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yi.sm_m ||
                (yi.sm_m = {
                  proto: yi,
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
              yi.sm_m
            );
          }
          static MBF() {
            return yi.sm_mbf || (yi.sm_mbf = i.w0(yi.M())), yi.sm_mbf;
          }
          toObject(r = !1) {
            return yi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(yi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(yi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new yi();
            return yi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(yi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(yi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferForAnyUser_Request";
          }
        }
        class Or extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.offer || i.Sg(Or.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    offer: { n: 1, c: o },
                    descriptions: { n: 2, c: q, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(Or.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Or();
            return Or.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Or.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Or.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffer_Response";
          }
        }
        class ci extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ci.prototype.steamid || i.Sg(ci.M()),
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
              ci.sm_m
            );
          }
          static MBF() {
            return ci.sm_mbf || (ci.sm_mbf = i.w0(ci.M())), ci.sm_mbf;
          }
          toObject(r = !1) {
            return ci.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ci.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ci.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ci();
            return ci.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ci.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ci.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferForConfirmation_Request";
          }
        }
        class ji extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ji.prototype.offer || i.Sg(ji.M()),
              l.Message.initialize(this, r, 0, -1, [2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ji.sm_m ||
                (ji.sm_m = {
                  proto: ji,
                  fields: {
                    offer: { n: 1, c: o },
                    descriptions: { n: 2, c: q, r: !0, q: !0 },
                    asset_properties: { n: 3, c: gr, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(ji.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ji.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ji();
            return ji.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ji.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ji.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOfferForConfirmation_Response";
          }
        }
        class Wi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wi.prototype.tradeofferid || i.Sg(Wi.M()),
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
              Wi.sm_m
            );
          }
          static MBF() {
            return Wi.sm_mbf || (Wi.sm_mbf = i.w0(Wi.M())), Wi.sm_mbf;
          }
          toObject(r = !1) {
            return Wi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Wi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Wi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Wi();
            return Wi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Wi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Wi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AcceptTradeOffer_Request";
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
              ni.sm_m
            );
          }
          static MBF() {
            return ni.sm_mbf || (ni.sm_mbf = i.w0(ni.M())), ni.sm_mbf;
          }
          toObject(r = !1) {
            return ni.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ni.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ni.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ni();
            return ni.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ni.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ni.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AcceptTradeOffer_Response";
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
              Fi.sm_m
            );
          }
          static MBF() {
            return Fi.sm_mbf || (Fi.sm_mbf = i.w0(Fi.M())), Fi.sm_mbf;
          }
          toObject(r = !1) {
            return Fi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Fi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Fi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Fi();
            return Fi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Fi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Fi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ConfirmTradeOffer_Request";
          }
        }
        class Ui extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ui.prototype.tradeid || i.Sg(Ui.M()),
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
              Ui.sm_m
            );
          }
          static MBF() {
            return Ui.sm_mbf || (Ui.sm_mbf = i.w0(Ui.M())), Ui.sm_mbf;
          }
          toObject(r = !1) {
            return Ui.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ui.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ui.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ui();
            return Ui.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ui.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ui.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ui.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ui.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ConfirmTradeOffer_Response";
          }
        }
        class xi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xi.prototype.tradeofferid || i.Sg(xi.M()),
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
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(xi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(xi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new xi();
            return xi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(xi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(xi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_DeclineTradeOffer_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ls();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ls();
            return Ls.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ls.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ls.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_DeclineTradeOffer_Response";
          }
        }
        class Oi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oi.prototype.tradeofferid || i.Sg(Oi.M()),
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
                    tradeofferid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(Oi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Oi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Oi();
            return Oi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Oi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Oi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelTradeOffer_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Js();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Js();
            return Js.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Js.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Js.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelTradeOffer_Response";
          }
        }
        class hi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hi.prototype.steamid || i.Sg(hi.M()),
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
              hi.sm_m
            );
          }
          static MBF() {
            return hi.sm_mbf || (hi.sm_mbf = i.w0(hi.M())), hi.sm_mbf;
          }
          toObject(r = !1) {
            return hi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(hi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(hi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new hi();
            return hi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(hi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return hi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(hi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              hi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelAllTradeOffers_Request";
          }
        }
        class fi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fi.prototype.num_cancelled || i.Sg(fi.M()),
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
              fi.sm_m
            );
          }
          static MBF() {
            return fi.sm_mbf || (fi.sm_mbf = i.w0(fi.M())), fi.sm_mbf;
          }
          toObject(r = !1) {
            return fi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(fi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(fi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new fi();
            return fi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(fi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(fi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelAllTradeOffers_Response";
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
              Ii.sm_m
            );
          }
          static MBF() {
            return Ii.sm_mbf || (Ii.sm_mbf = i.w0(Ii.M())), Ii.sm_mbf;
          }
          toObject(r = !1) {
            return Ii.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ii.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ii.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ii();
            return Ii.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ii.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ii.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ii.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ii.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CancelAllTradeOffers_Notification";
          }
        }
        class Ki extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ki.prototype.steamid_partya || i.Sg(Ki.M()),
              l.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ki.sm_m ||
                (Ki.sm_m = {
                  proto: Ki,
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
              Ki.sm_m
            );
          }
          static MBF() {
            return Ki.sm_mbf || (Ki.sm_mbf = i.w0(Ki.M())), Ki.sm_mbf;
          }
          toObject(r = !1) {
            return Ki.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ki.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ki.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ki();
            return Ki.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ki.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ki.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ki.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ki.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_IsSafeToCommitTrade_Request";
          }
        }
        class $i extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $i.prototype.time_last_visit || i.Sg($i.M()),
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
                    time_last_visit: {
                      n: 1,
                      br: i.qM.readFixed32,
                      bw: i.gp.writeFixed32,
                    },
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
          static toObject(r, t) {
            return i.BT($i.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($i.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new $i();
            return $i.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($i.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($i.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffersSummary_Request";
          }
        }
        class Xi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xi.prototype.pending_received_count || i.Sg(Xi.M()),
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
              Xi.sm_m
            );
          }
          static MBF() {
            return Xi.sm_mbf || (Xi.sm_mbf = i.w0(Xi.M())), Xi.sm_mbf;
          }
          toObject(r = !1) {
            return Xi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Xi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Xi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Xi();
            return Xi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Xi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Xi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeOffersSummary_Response";
          }
        }
        class Vi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vi.prototype.max_trades || i.Sg(Vi.M()),
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
              Vi.sm_m
            );
          }
          static MBF() {
            return Vi.sm_mbf || (Vi.sm_mbf = i.w0(Vi.M())), Vi.sm_mbf;
          }
          toObject(r = !1) {
            return Vi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Vi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Vi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Vi();
            return Vi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Vi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Vi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Request";
          }
        }
        class lr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.total_trades || i.Sg(lr.M()),
              l.Message.initialize(this, r, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    total_trades: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    more: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    trades: { n: 3, c: Yi, r: !0, q: !0 },
                    descriptions: { n: 4, c: q, r: !0, q: !0 },
                    devices: { n: 5, c: Li, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(lr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new lr();
            return lr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response";
          }
        }
        class Yi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yi.prototype.tradeid || i.Sg(Yi.M()),
              l.Message.initialize(this, r, 0, -1, [6, 7, 8, 9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yi.sm_m ||
                (Yi.sm_m = {
                  proto: Yi,
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
                    assets_received: { n: 6, c: hr, r: !0, q: !0 },
                    assets_given: { n: 7, c: hr, r: !0, q: !0 },
                    currency_received: { n: 8, c: fr, r: !0, q: !0 },
                    currency_given: { n: 9, c: fr, r: !0, q: !0 },
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
                    trade_auth: { n: 13, c: Zi },
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
          static toObject(r, t) {
            return i.BT(Yi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Yi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Yi();
            return Yi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Yi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Yi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Yi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Yi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_Trade";
          }
        }
        class hr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.appid || i.Sg(hr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
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
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = i.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(hr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new hr();
            return hr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_Trade_TradedAsset";
          }
        }
        class fr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.appid || i.Sg(fr.M()),
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
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = i.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(fr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new fr();
            return fr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(fr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(fr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_Trade_TradedCurrency";
          }
        }
        class Zi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zi.prototype.is_sender || i.Sg(Zi.M()),
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
              Zi.sm_m
            );
          }
          static MBF() {
            return Zi.sm_mbf || (Zi.sm_mbf = i.w0(Zi.M())), Zi.sm_mbf;
          }
          toObject(r = !1) {
            return Zi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Zi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Zi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Zi();
            return Zi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Zi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Zi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_Trade_Authorization";
          }
        }
        class Li extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Li.prototype.token_id || i.Sg(Li.M()),
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
              Li.sm_m
            );
          }
          static MBF() {
            return Li.sm_mbf || (Li.sm_mbf = i.w0(Li.M())), Li.sm_mbf;
          }
          toObject(r = !1) {
            return Li.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Li.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Li.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Li();
            return Li.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Li.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Li.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Li.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Li.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeHistory_Response_DeviceDetails";
          }
        }
        class Ji extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ji.prototype.language || i.Sg(Ji.M()),
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
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
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
          static toObject(r, t) {
            return i.BT(Ji.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ji.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ji();
            return Ji.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ji.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ji.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ji.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ji.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetProvisionalTradeHistory_Request";
          }
        }
        class Qi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qi.prototype.tradeid || i.Sg(Qi.M()),
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
              Qi.sm_m
            );
          }
          static MBF() {
            return Qi.sm_mbf || (Qi.sm_mbf = i.w0(Qi.M())), Qi.sm_mbf;
          }
          toObject(r = !1) {
            return Qi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Qi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Qi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Qi();
            return Qi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Qi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Qi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetTradeStatus_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Qs();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Qs();
            return Qs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CanUserTradeWithAnyone_Request";
          }
        }
        class Ir extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ir.prototype.trade_response || i.Sg(Ir.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ir.sm_m ||
                (Ir.sm_m = {
                  proto: Ir,
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
              Ir.sm_m
            );
          }
          static MBF() {
            return Ir.sm_mbf || (Ir.sm_mbf = i.w0(Ir.M())), Ir.sm_mbf;
          }
          toObject(r = !1) {
            return Ir.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ir.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ir.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ir();
            return Ir.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ir.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ir.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CanUserTradeWithAnyone_Response";
          }
        }
        class Ti extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ti.prototype.steamid || i.Sg(Ti.M()),
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
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
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
          static toObject(r, t) {
            return i.BT(Ti.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ti.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ti();
            return Ti.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ti.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ti.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ti.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ti.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CanUserTradeWithPartner_Request";
          }
        }
        class ki extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ki.prototype.trade_response || i.Sg(ki.M()),
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
              ki.sm_m
            );
          }
          static MBF() {
            return ki.sm_mbf || (ki.sm_mbf = i.w0(ki.M())), ki.sm_mbf;
          }
          toObject(r = !1) {
            return ki.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ki.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ki.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ki();
            return ki.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ki.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ki.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ki.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ki.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CanUserTradeWithPartner_Response";
          }
        }
        class Ni extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ni.prototype.steamid || i.Sg(Ni.M()),
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
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
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
          static toObject(r, t) {
            return i.BT(Ni.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ni.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ni();
            return Ni.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ni.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ni.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ni.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ni.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetUserTradeEligibility_Request";
          }
        }
        class Pi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pi.prototype.steamid || i.Sg(Pi.M()),
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
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
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
          static toObject(r, t) {
            return i.BT(Pi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Pi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Pi();
            return Pi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Pi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Pi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckTradePartnerTrustworthiness_Request";
          }
        }
        class Hi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hi.prototype.abuse_score || i.Sg(Hi.M()),
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
              Hi.sm_m
            );
          }
          static MBF() {
            return Hi.sm_mbf || (Hi.sm_mbf = i.w0(Hi.M())), Hi.sm_mbf;
          }
          toObject(r = !1) {
            return Hi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Hi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Hi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Hi();
            return Hi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Hi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Hi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Hi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Hi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckTradePartnerTrustworthiness_Response";
          }
        }
        class pi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pi.prototype.steamid || i.Sg(pi.M()),
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
              pi.sm_m
            );
          }
          static MBF() {
            return pi.sm_mbf || (pi.sm_mbf = i.w0(pi.M())), pi.sm_mbf;
          }
          toObject(r = !1) {
            return pi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(pi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(pi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new pi();
            return pi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(pi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(pi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckTradeOfferAccessToken_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ts();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ts();
            return Ts.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ts.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ts.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckTradeOfferAccessToken_Response";
          }
        }
        class vi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vi.prototype.steamid || i.Sg(vi.M()),
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
              vi.sm_m
            );
          }
          static MBF() {
            return vi.sm_mbf || (vi.sm_mbf = i.w0(vi.M())), vi.sm_mbf;
          }
          toObject(r = !1) {
            return vi.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(vi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(vi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new vi();
            return vi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(vi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(vi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushInventoryCache_Request";
          }
        }
        class qi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qi.prototype.success || i.Sg(qi.M()),
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
                    success: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, t) {
            return i.BT(qi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(qi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new qi();
            return qi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(qi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(qi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushInventoryCache_Response";
          }
        }
        class Ai extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ai.prototype.steamid || i.Sg(Ai.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ai.sm_m ||
                (Ai.sm_m = {
                  proto: Ai,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(Ai.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ai.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ai();
            return Ai.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ai.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ai.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ai.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ai.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushInventoryServiceDBOs_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ks();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ks();
            return ks.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ks.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ks.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushInventoryServiceDBOs_Response";
          }
        }
        class Di extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Di.prototype.appid || i.Sg(Di.M()),
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
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(Di.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Di.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Di();
            return Di.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Di.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Di.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Di.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Di.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushAssetAppearanceCache_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ns();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ns();
            return Ns.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ns.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ns.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushAssetAppearanceCache_Response";
          }
        }
        class Gi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gi.prototype.appid || i.Sg(Gi.M()),
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
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(Gi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Gi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Gi();
            return Gi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Gi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Gi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushContextCache_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ps();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ps();
            return Ps.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ps.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ps.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FlushContextCache_Response";
          }
        }
        class Ei extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ei.prototype.appid || i.Sg(Ei.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ei.sm_m ||
                (Ei.sm_m = {
                  proto: Ei,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(Ei.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ei.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ei();
            return Ei.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ei.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ei.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ei.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ei.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEconAppSettings_Request";
          }
        }
        class Si extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Si.prototype.appid || i.Sg(Si.M()),
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
              Si.sm_m
            );
          }
          static MBF() {
            return Si.sm_mbf || (Si.sm_mbf = i.w0(Si.M())), Si.sm_mbf;
          }
          toObject(r = !1) {
            return Si.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Si.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Si.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Si();
            return Si.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Si.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Si.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Si.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Si.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEconAppSettings_Response";
          }
        }
        class Ri extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ri.prototype.appid || i.Sg(Ri.M()),
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
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(Ri.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ri.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ri();
            return Ri.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ri.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ri.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ri.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ri.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetItemShopPartnerToken_Request";
          }
        }
        class oi extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oi.prototype.token || i.Sg(oi.M()),
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
                    token: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, t) {
            return i.BT(oi.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(oi.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new oi();
            return oi.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(oi.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return oi.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(oi.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              oi.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetItemShopPartnerToken_Response";
          }
        }
        class Ci extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ci.prototype.appid || i.Sg(Ci.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ci.sm_m ||
                (Ci.sm_m = {
                  proto: Ci,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    data: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    hmac: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, t) {
            return i.BT(Ci.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ci.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ci();
            return Ci.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ci.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ci.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ci.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ci.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckItemShopPartnerHMAC_Request";
          }
        }
        class _i extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _i.prototype.ok || i.Sg(_i.M()),
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
                    ok: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, t) {
            return i.BT(_i.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_i.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new _i();
            return _i.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_i.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _i.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_i.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _i.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_CheckItemShopPartnerHMAC_Response";
          }
        }
        class rt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rt.prototype.overlay_auth_cookie || i.Sg(rt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
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
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = i.w0(rt.M())), rt.sm_mbf;
          }
          toObject(r = !1) {
            return rt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(rt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(rt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new rt();
            return rt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(rt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(rt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_StartItemShopTxn_Request";
          }
        }
        class it extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              it.prototype.orderid || i.Sg(it.M()),
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
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = i.w0(it.M())), it.sm_mbf;
          }
          toObject(r = !1) {
            return it.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(it.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(it.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new it();
            return it.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(it.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return it.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(it.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_StartItemShopTxn_Response";
          }
        }
        class tt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tt.prototype.overlay_auth_cookie || i.Sg(tt.M()),
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
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = i.w0(tt.M())), tt.sm_mbf;
          }
          toObject(r = !1) {
            return tt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(tt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(tt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new tt();
            return tt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(tt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(tt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetItemShopTxnState_Request";
          }
        }
        class at extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              at.prototype.state || i.Sg(at.M()),
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
                    state: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(at.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(at.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new at();
            return at.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(at.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return at.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(at.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetItemShopTxnState_Response";
          }
        }
        class st extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              st.prototype.overlay_auth_cookie || i.Sg(st.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
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
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = i.w0(st.M())), st.sm_mbf;
          }
          toObject(r = !1) {
            return st.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(st.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(st.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new st();
            return st.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(st.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return st.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(st.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FinishItemShopTxn_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Hs();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Hs();
            return Hs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Hs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Hs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_FinishItemShopTxn_Response";
          }
        }
        class lt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lt.prototype.overlay_auth_cookie || i.Sg(lt.M()),
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
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = i.w0(lt.M())), lt.sm_mbf;
          }
          toObject(r = !1) {
            return lt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(lt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(lt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new lt();
            return lt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(lt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(lt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_BuildItemShopReturnURL_Request";
          }
        }
        class mt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mt.prototype.url || i.Sg(mt.M()),
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
                    url: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
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
          static toObject(r, t) {
            return i.BT(mt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(mt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new mt();
            return mt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(mt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(mt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_BuildItemShopReturnURL_Response";
          }
        }
        class et extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              et.prototype.appid || i.Sg(et.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
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
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = i.w0(et.M())), et.sm_mbf;
          }
          toObject(r = !1) {
            return et.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(et.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(et.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new et();
            return et.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(et.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(et.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AppSupportsRefund_Request";
          }
        }
        class Bt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bt.prototype.supports_refunds || i.Sg(Bt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    supports_refunds: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = i.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(r = !1) {
            return Bt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Bt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Bt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Bt();
            return Bt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Bt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Bt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AppSupportsRefund_Response";
          }
        }
        class bt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              bt.prototype.steamid || i.Sg(bt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
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
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = i.w0(bt.M())), bt.sm_mbf;
          }
          toObject(r = !1) {
            return bt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(bt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(bt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new bt();
            return bt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(bt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(bt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_QueryRefundAllowed_Request";
          }
        }
        class wt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wt.prototype.allow_refund || i.Sg(wt.M()),
              l.Message.initialize(this, r, 0, -1, [2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    allow_refund: {
                      n: 1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    assets: { n: 2, c: ut, r: !0, q: !0 },
                    descriptions: { n: 3, c: q, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(wt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(wt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new wt();
            return wt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(wt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(wt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_QueryRefundAllowed_Response";
          }
        }
        class ut extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ut.prototype.allow_refund || i.Sg(ut.M()),
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
                    asset: { n: 5, c: A },
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
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = i.w0(ut.M())), ut.sm_mbf;
          }
          toObject(r = !1) {
            return ut.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ut.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ut.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ut();
            return ut.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ut.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ut.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_QueryRefundAllowed_Response_Asset";
          }
        }
        class dt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dt.prototype.steamid || i.Sg(dt.M()),
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
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = i.w0(dt.M())), dt.sm_mbf;
          }
          toObject(r = !1) {
            return dt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(dt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(dt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new dt();
            return dt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(dt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(dt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RefundPurchase_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ps();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ps();
            return ps.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ps.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ps.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RefundPurchase_Response";
          }
        }
        class Mt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mt.prototype.steamid || i.Sg(Mt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
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
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = i.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(r = !1) {
            return Mt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Mt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Mt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Mt();
            return Mt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Mt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Mt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEligibleOneOffRefunds_Request";
          }
        }
        class zt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zt.prototype.allow_refund || i.Sg(zt.M()),
              l.Message.initialize(this, r, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
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
                    assets: { n: 3, c: gt, r: !0, q: !0 },
                    descriptions: { n: 4, c: q, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(zt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(zt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new zt();
            return zt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(zt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(zt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEligibleOneOffRefunds_Response";
          }
        }
        class gt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gt.prototype.refundid || i.Sg(gt.M()),
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
                    asset: { n: 11, c: A },
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
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = i.w0(gt.M())), gt.sm_mbf;
          }
          toObject(r = !1) {
            return gt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(gt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(gt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new gt();
            return gt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(gt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(gt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetEligibleOneOffRefunds_Response_Asset";
          }
        }
        class yt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yt.prototype.steamid || i.Sg(yt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
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
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = i.w0(yt.M())), yt.sm_mbf;
          }
          toObject(r = !1) {
            return yt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(yt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(yt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new yt();
            return yt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(yt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(yt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ProcessOneOffRefund_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new vs();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new vs();
            return vs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ProcessOneOffRefund_Response";
          }
        }
        class ct extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ct.prototype.classid || i.Sg(ct.M()),
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
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = i.w0(ct.M())), ct.sm_mbf;
          }
          toObject(r = !1) {
            return ct.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ct.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ct.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ct();
            return ct.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ct.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ct.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassProperties_Request";
          }
        }
        class jt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jt.prototype.properties || i.Sg(jt.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: { properties: { n: 1, c: Wt, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(jt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(jt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new jt();
            return jt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(jt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(jt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassProperties_Response";
          }
        }
        class Wt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wt.prototype.property || i.Sg(Wt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
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
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = i.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(r = !1) {
            return Wt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Wt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Wt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Wt();
            return Wt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Wt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Wt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassProperties_Response_Property";
          }
        }
        class nt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nt.prototype.tradeid || i.Sg(nt.M()),
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
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = i.w0(nt.M())), nt.sm_mbf;
          }
          toObject(r = !1) {
            return nt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(nt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(nt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new nt();
            return nt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(nt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(nt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RevertTrade_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new qs();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new qs();
            return qs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RevertTrade_Response";
          }
        }
        class Ft extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ft.prototype.steamid || i.Sg(Ft.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
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
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = i.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(r = !1) {
            return Ft.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ft.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ft.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ft();
            return Ft.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ft.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ft.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RevertAllTrades_Request";
          }
        }
        class Ut extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ut.prototype.trades || i.Sg(Ut.M()),
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
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = i.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(r = !1) {
            return Ut.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ut.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ut.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ut();
            return Ut.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ut.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ut.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_RevertAllTrades_Response";
          }
        }
        class xt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xt.prototype.ack_type || i.Sg(xt.M()),
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
                    ack_type: { n: 1, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    acknowledge: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
          static toObject(r, t) {
            return i.BT(xt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(xt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new xt();
            return xt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(xt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(xt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AcknowledgeTradeUI_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new As();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new As();
            return As.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return As.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              As.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_AcknowledgeTradeUI_Response";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ds();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ds();
            return Ds.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ds.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ds.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_NeedTradeUI_Request";
          }
        }
        class Ot extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ot.prototype.needed_types || i.Sg(Ot.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
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
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = i.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(r = !1) {
            return Ot.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ot.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ot.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ot();
            return Ot.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ot.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ot.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_NeedTradeUI_Response";
          }
        }
        class ht extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ht.prototype.steamid || i.Sg(ht.M()),
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
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = i.w0(ht.M())), ht.sm_mbf;
          }
          toObject(r = !1) {
            return ht.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ht.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ht.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ht();
            return ht.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ht.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ht.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ApplyTradeCooldown_Request";
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
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Gs();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Gs();
            return Gs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_ApplyTradeCooldown_Response";
          }
        }
        var Al;
        ((m) => {
          function r(d, M, z) {
            return d.SendMsg(
              "Econ.GetTradePermissionsForApp#1",
              (0, B.I8)(Sr, M, z),
              Rr,
              { ePrivilege: 1 },
            );
          }
          m.GetTradePermissionsForApp = r;
          function t(d, M, z) {
            return d.SendMsg("Econ.GetEconSummary#1", (0, B.I8)(or, M, z), _r, {
              ePrivilege: 0,
            });
          }
          m.GetEconSummary = t;
          function s(d, M, z) {
            return d.SendMsg(
              "Econ.GetTopTradePartners#1",
              (0, B.I8)(ri, M, z),
              ti,
              { ePrivilege: 0 },
            );
          }
          m.GetTopTradePartners = s;
          function b(d, M, z) {
            return d.SendMsg(
              "Econ.SetTradeBanTime#1",
              (0, B.I8)(ai, M, z),
              Is,
              { ePrivilege: 2 },
            );
          }
          m.SetTradeBanTime = b;
          function u(d, M, z) {
            return d.SendMsg(
              "Econ.SetForceTradeTrustedTime#1",
              (0, B.I8)(si, M, z),
              Is,
              { ePrivilege: 0 },
            );
          }
          m.SetForceTradeTrustedTime = u;
          function y(d, M, z) {
            return d.SendMsg(
              "Econ.CreateTradeOffer#1",
              (0, B.I8)(li, M, z),
              ei,
              { ePrivilege: 1 },
            );
          }
          m.CreateTradeOffer = y;
          function n(d, M, z) {
            return d.SendMsg("Econ.SendGift#1", (0, B.I8)(Bi, M, z), bi, {
              ePrivilege: 7,
              eWebAPIKeyRequirement: 5,
            });
          }
          m.SendGift = n;
          function O(d, M, z) {
            return d.SendMsg("Econ.GetTradeOffers#1", (0, B.I8)(wi, M, z), ui, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          m.GetTradeOffers = O;
          function F(d, M, z) {
            return d.SendMsg("Econ.GetTradeOffer#1", (0, B.I8)(gi, M, z), Or, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          m.GetTradeOffer = F;
          function x(d, M, z) {
            return d.SendMsg(
              "Econ.GetTradeOfferForAnyUser#1",
              (0, B.I8)(yi, M, z),
              Or,
              { ePrivilege: 0 },
            );
          }
          m.GetTradeOfferForAnyUser = x;
          function Y(d, M, z) {
            return d.SendMsg(
              "Econ.TradeLeftEscrow#1",
              (0, B.I8)(di, M, z),
              Zs,
              { ePrivilege: 0 },
            );
          }
          m.TradeLeftEscrow = Y;
          function Z(d, M, z) {
            return d.SendMsg(
              "Econ.GetTradeHoldDurations#1",
              (0, B.I8)(Mi, M, z),
              zi,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetTradeHoldDurations = Z;
          function bs(d, M, z) {
            return d.SendMsg(
              "Econ.GetTradeOfferForConfirmation#1",
              (0, B.I8)(ci, M, z),
              ji,
              { ePrivilege: 0 },
            );
          }
          m.GetTradeOfferForConfirmation = bs;
          function ds(d, M, z) {
            return d.SendMsg(
              "Econ.AcceptTradeOffer#1",
              (0, B.I8)(Wi, M, z),
              ni,
              { ePrivilege: 1 },
            );
          }
          m.AcceptTradeOffer = ds;
          function br(d, M, z) {
            return d.SendMsg(
              "Econ.ConfirmTradeOffer#1",
              (0, B.I8)(Fi, M, z),
              Ui,
              { ePrivilege: 0 },
            );
          }
          m.ConfirmTradeOffer = br;
          function zs(d, M, z) {
            return d.SendMsg(
              "Econ.DeclineTradeOffer#1",
              (0, B.I8)(xi, M, z),
              Ls,
              { ePrivilege: 1 },
            );
          }
          m.DeclineTradeOffer = zs;
          function C(d, M, z) {
            return d.SendMsg(
              "Econ.CancelTradeOffer#1",
              (0, B.I8)(Oi, M, z),
              Js,
              { ePrivilege: 1 },
            );
          }
          m.CancelTradeOffer = C;
          function ws(d, M, z) {
            return d.SendMsg(
              "Econ.CancelAllTradeOffers#1",
              (0, B.I8)(hi, M, z),
              fi,
              { ePrivilege: 2 },
            );
          }
          m.CancelAllTradeOffers = ws;
          function h(d, M) {
            return d.SendNotification(
              "Econ.NotifyCancelAllTradeOffers#1",
              (0, B.I8)(Ii, M),
              { ePrivilege: 2 },
            );
          }
          m.NotifyCancelAllTradeOffers = h;
          function K(d, M, z) {
            return d.SendMsg(
              "Econ.IsSafeToCommitTrade#1",
              (0, B.I8)(Ki, M, z),
              Is,
              { ePrivilege: 0 },
            );
          }
          m.IsSafeToCommitTrade = K;
          function v(d, M, z) {
            return d.SendMsg(
              "Econ.GetTradeOffersSummary#1",
              (0, B.I8)($i, M, z),
              Xi,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetTradeOffersSummary = v;
          function js(d, M, z) {
            return d.SendMsg(
              "Econ.GetTradeHistory#1",
              (0, B.I8)(Vi, M, z),
              lr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetTradeHistory = js;
          function Il(d, M, z) {
            return d.SendMsg("Econ.GetTradeStatus#1", (0, B.I8)(Qi, M, z), lr, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          m.GetTradeStatus = Il;
          function Ql(d, M, z) {
            return d.SendMsg(
              "Econ.GetProvisionalTradeHistory#1",
              (0, B.I8)(Ji, M, z),
              lr,
              { ePrivilege: 1 },
            );
          }
          m.GetProvisionalTradeHistory = Ql;
          function Tl(d, M, z) {
            return d.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, B.I8)(jr, M, z),
              Wr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetInventoryItemsWithDescriptions = Tl;
          function kl(d, M, z) {
            return d.SendMsg(
              "Econ.CanUserTradeWithAnyone#1",
              (0, B.I8)(Qs, M, z),
              Ir,
              { ePrivilege: 1 },
            );
          }
          m.CanUserTradeWithAnyone = kl;
          function Nl(d, M, z) {
            return d.SendMsg(
              "Econ.CanUserTradeWithPartner#1",
              (0, B.I8)(Ti, M, z),
              ki,
              { ePrivilege: 1 },
            );
          }
          m.CanUserTradeWithPartner = Nl;
          function Pl(d, M, z) {
            return d.SendMsg(
              "Econ.GetUserTradeEligibility#1",
              (0, B.I8)(Ni, M, z),
              Ir,
              { ePrivilege: 0 },
            );
          }
          m.GetUserTradeEligibility = Pl;
          function Hl(d, M, z) {
            return d.SendMsg(
              "Econ.CheckTradePartnerTrustworthiness#1",
              (0, B.I8)(Pi, M, z),
              Hi,
              { ePrivilege: 1 },
            );
          }
          m.CheckTradePartnerTrustworthiness = Hl;
          function pl(d, M, z) {
            return d.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, B.I8)(nr, M, z),
              Fr,
              { ePrivilege: 1 },
            );
          }
          m.GetTradeOfferAccessToken = pl;
          function vl(d, M, z) {
            return d.SendMsg(
              "Econ.CheckTradeOfferAccessToken#1",
              (0, B.I8)(pi, M, z),
              Ts,
              { ePrivilege: 0 },
            );
          }
          m.CheckTradeOfferAccessToken = vl;
          function j(d, M, z) {
            return d.SendMsg(
              "Econ.FlushInventoryCache#1",
              (0, B.I8)(vi, M, z),
              qi,
              { ePrivilege: 0, eWebAPIKeyRequirement: 5 },
            );
          }
          m.FlushInventoryCache = j;
          function W(d, M, z) {
            return d.SendMsg(
              "Econ.FlushInventoryServiceDBOs#1",
              (0, B.I8)(Ai, M, z),
              ks,
              { ePrivilege: 0 },
            );
          }
          m.FlushInventoryServiceDBOs = W;
          function f(d, M, z) {
            return d.SendMsg(
              "Econ.FlushAssetAppearanceCache#1",
              (0, B.I8)(Di, M, z),
              Ns,
              { ePrivilege: 7, eWebAPIKeyRequirement: 5 },
            );
          }
          m.FlushAssetAppearanceCache = f;
          function We(d, M, z) {
            return d.SendMsg(
              "Econ.FlushContextCache#1",
              (0, B.I8)(Gi, M, z),
              Ps,
              { ePrivilege: 7, eWebAPIKeyRequirement: 5 },
            );
          }
          m.FlushContextCache = We;
          function ne(d, M, z) {
            return d.SendMsg(
              "Econ.GetEconAppSettings#1",
              (0, B.I8)(Ei, M, z),
              Si,
              { ePrivilege: 7 },
            );
          }
          m.GetEconAppSettings = ne;
          function Fe(d, M, z) {
            return d.SendMsg(
              "Econ.GetItemShopPartnerToken#1",
              (0, B.I8)(Ri, M, z),
              oi,
              { ePrivilege: 0 },
            );
          }
          m.GetItemShopPartnerToken = Fe;
          function Ue(d, M, z) {
            return d.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, B.I8)(Ur, M, z),
              xr,
              { ePrivilege: 1 },
            );
          }
          m.ClientGetItemShopOverlayAuthURL = Ue;
          function xe(d, M, z) {
            return d.SendMsg(
              "Econ.CheckItemShopPartnerHMAC#1",
              (0, B.I8)(Ci, M, z),
              _i,
              { ePrivilege: 0 },
            );
          }
          m.CheckItemShopPartnerHMAC = xe;
          function Oe(d, M, z) {
            return d.SendMsg(
              "Econ.StartItemShopTxn#1",
              (0, B.I8)(rt, M, z),
              it,
              { ePrivilege: 2 },
            );
          }
          m.StartItemShopTxn = Oe;
          function he(d, M, z) {
            return d.SendMsg(
              "Econ.GetItemShopTxnState#1",
              (0, B.I8)(tt, M, z),
              at,
              { ePrivilege: 2 },
            );
          }
          m.GetItemShopTxnState = he;
          function fe(d, M, z) {
            return d.SendMsg(
              "Econ.FinishItemShopTxn#1",
              (0, B.I8)(st, M, z),
              Hs,
              { ePrivilege: 2 },
            );
          }
          m.FinishItemShopTxn = fe;
          function Ie(d, M, z) {
            return d.SendMsg(
              "Econ.BuildItemShopReturnURL#1",
              (0, B.I8)(lt, M, z),
              mt,
              { ePrivilege: 2 },
            );
          }
          m.BuildItemShopReturnURL = Ie;
          function Ke(d, M, z) {
            return d.SendMsg(
              "Econ.AppSupportsRefund#1",
              (0, B.I8)(et, M, z),
              Bt,
              { ePrivilege: 0 },
            );
          }
          m.AppSupportsRefund = Ke;
          function $e(d, M, z) {
            return d.SendMsg(
              "Econ.QueryRefundAllowed#1",
              (0, B.I8)(bt, M, z),
              wt,
              { ePrivilege: 0 },
            );
          }
          m.QueryRefundAllowed = $e;
          function Xe(d, M, z) {
            return d.SendMsg("Econ.RefundPurchase#1", (0, B.I8)(dt, M, z), ps, {
              ePrivilege: 0,
            });
          }
          m.RefundPurchase = Xe;
          function Ve(d, M, z) {
            return d.SendMsg(
              "Econ.GetEligibleOneOffRefunds#1",
              (0, B.I8)(Mt, M, z),
              zt,
              { ePrivilege: 0 },
            );
          }
          m.GetEligibleOneOffRefunds = Ve;
          function Ye(d, M, z) {
            return d.SendMsg(
              "Econ.ProcessOneOffRefund#1",
              (0, B.I8)(yt, M, z),
              vs,
              { ePrivilege: 0 },
            );
          }
          m.ProcessOneOffRefund = Ye;
          function Ze(d, M, z) {
            return d.SendMsg(
              "Econ.GetAssetClassInfo#1",
              (0, B.I8)(tr, M, z),
              ar,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetClassInfo = Ze;
          function Le(d, M, z) {
            return d.SendMsg(
              "Econ.GetAssetClassInfoInternal#1",
              (0, B.I8)(tr, M, z),
              ar,
              { ePrivilege: 0 },
            );
          }
          m.GetAssetClassInfoInternal = Le;
          function Je(d, M, z) {
            return d.SendMsg(
              "Econ.GetAssetClassProperties#1",
              (0, B.I8)(ct, M, z),
              jt,
              { ePrivilege: 0 },
            );
          }
          m.GetAssetClassProperties = Je;
          function Qe(d, M, z) {
            return d.SendMsg("Econ.RevertTrade#1", (0, B.I8)(nt, M, z), qs, {
              ePrivilege: 1,
            });
          }
          m.RevertTrade = Qe;
          function Te(d, M, z) {
            return d.SendMsg(
              "Econ.RevertAllTrades#1",
              (0, B.I8)(Ft, M, z),
              Ut,
              { ePrivilege: 1 },
            );
          }
          m.RevertAllTrades = Te;
          function ke(d, M, z) {
            return d.SendMsg(
              "Econ.ApplyTradeCooldown#1",
              (0, B.I8)(ht, M, z),
              Gs,
              { ePrivilege: 1 },
            );
          }
          m.ApplyTradeCooldown = ke;
          function Ne(d, M, z) {
            return d.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, B.I8)(yr, M, z),
              cr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetAssetPropertySchema = Ne;
          function Pe(d, M, z) {
            return d.SendMsg(
              "Econ.AcknowledgeTradeUI#1",
              (0, B.I8)(xt, M, z),
              As,
              { ePrivilege: 1 },
            );
          }
          m.AcknowledgeTradeUI = Pe;
          function He(d, M, z) {
            return d.SendMsg("Econ.NeedTradeUI#1", (0, B.I8)(Ds, M, z), Ot, {
              ePrivilege: 1,
            });
          }
          m.NeedTradeUI = He;
        })(Al || (Al = {}));
        function $m(m) {
          const { rgAssetProperties: r, appid: t } = m,
            [s, b] = (0, c.useState)(""),
            [u, y] = (0, c.useState)(Xm(r)),
            n = (Y, Z) => {
              const bs = u.map((ds, br) => (br === Y ? Z : ds));
              y(bs);
            },
            O = () => {
              const Y = u.slice();
              Y.push({
                id: 0,
                name: "",
                type: hm,
                min: null,
                max: null,
                hide_from_description: !1,
              }),
                y(Y);
            },
            F = (Y) => {
              const Z = u.slice();
              Z.splice(Y, 1), y(Z);
            },
            x = async () => {
              b("");
              const Y = new FormData();
              Y.append("sessionid", (0, D.KC)()),
                Y.append("asset_properties", JSON.stringify(u));
              const Z = await fetch(
                `${hs.TS.PARTNER_BASE_URL}apps/setassetpropertyschema/${t}`,
                { method: "POST", body: Y, credentials: "same-origin" },
              );
              if (!Z || !Z.ok) {
                b("Failed to save properties");
                return;
              }
              (await Z.json()).success
                ? b("Saved successfully")
                : b("Failed to save properties");
            };
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", {
                children: u.map((Y, Z) =>
                  (0, e.jsx)(
                    Vm,
                    {
                      schema: Y,
                      index: Z,
                      onUpdate: (bs) => {
                        n(Z, bs);
                      },
                      onRemove: (bs) => F(bs),
                    },
                    Z,
                  ),
                ),
              }),
              (0, e.jsx)("div", {
                className: fs.AddPropertyButton,
                children: (0, e.jsx)(G.$n, {
                  onClick: O,
                  children: "Add Property",
                }),
              }),
              (0, e.jsx)("div", {
                className: fs.SaveButton,
                children: (0, e.jsx)(G.$n, { onClick: x, children: "Save" }),
              }),
              (0, e.jsx)("div", { className: fs.StatusMessage, children: s }),
            ],
          });
        }
        function Xm(m) {
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
        function Vm(m) {
          const { schema: r, index: t, onUpdate: s, onRemove: b } = m;
          return (0, e.jsxs)("div", {
            className: fs.AssetPropertyRow,
            children: [
              (0, e.jsx)("div", { children: "ID" }),
              (0, e.jsx)(hl.BA, {
                className: fs.PropertyID,
                type: "number",
                value: r.id !== 0 ? r.id : "",
                placeholder: "Property id",
                onChange: (F) => {
                  s({ ...r, id: F.target.valueAsNumber });
                },
              }),
              (0, e.jsx)("div", { children: "Name" }),
              (0, e.jsx)(hl.BA, {
                className: fs.PropertyName,
                type: "text",
                value: r.name,
                placeholder: "Property name",
                onChange: (F) => {
                  s({ ...r, name: F.target.value });
                },
              }),
              (0, e.jsx)("div", { children: "Type" }),
              (0, e.jsx)(Ym, {
                propertyType: r.type,
                onUpdateType: (F) => {
                  s({ ...r, type: F });
                },
              }),
              (0, e.jsx)("div", { children: "Min" }),
              (0, e.jsx)(hl.BA, {
                className: fs.PropertyRange,
                type: "number",
                value: r.min ?? "",
                placeholder: "Min value",
                onChange: (F) => {
                  s({ ...r, min: F.target.valueAsNumber });
                },
              }),
              (0, e.jsx)("div", { children: "Max" }),
              (0, e.jsx)(hl.BA, {
                className: fs.PropertyRange,
                type: "number",
                value: r.max ?? "",
                placeholder: "Max value",
                onChange: (F) => {
                  s({ ...r, max: F.target.valueAsNumber });
                },
              }),
              (0, e.jsx)("div", { children: "Hide" }),
              (0, e.jsx)(hl.BA, {
                className: fs.HideFromDescription,
                type: "checkbox",
                checked: r.hide_from_description,
                onChange: (F) => {
                  s({ ...r, hide_from_description: F.target.checked });
                },
              }),
              (0, e.jsx)(G.$n, {
                className: fs.RemoveButton,
                onClick: () => b(t),
                children: "Remove",
              }),
            ],
          });
        }
        function Ym(m) {
          const { propertyType: r, onUpdateType: t } = m,
            s = [
              { label: "Integer", data: Im },
              { label: "Floating point", data: fm },
              { label: "String", data: Km },
            ],
            b = (u) => {
              t(u.data);
            };
          return (0, e.jsx)("div", {
            className: fs.PropertyType,
            children: (0, e.jsx)(G.ZU, {
              strDefaultLabel: "Choose property type",
              controlled: !0,
              rgOptions: s,
              onChange: b,
              selectedOption: r,
            }),
          });
        }
        var Fl = w(65038),
          Dl = w(47997);
        const Ge = 0,
          Zm = 1,
          Ee = 2,
          Se = 3,
          Re = 4,
          oe = 5,
          Ce = 6,
          _e = 7,
          rB = 8,
          iB = 9,
          tB = 10,
          aB = 11,
          sB = 12,
          lB = 13,
          mB = 14,
          eB = 15,
          BB = 16,
          bB = 17,
          wB = 18,
          uB = 19,
          dB = 20,
          MB = 21,
          zB = 22;
        function gB(m) {
          return "unknown EAppContentPurgeStatus ( " + m + " )";
        }
        function yB(m) {
          return "unknown EAppContentDetectionType ( " + m + " )";
        }
        function cB(m) {
          return "unknown EAppAntiCheatType ( " + m + " )";
        }
        function jB(m) {
          return "unknown EAppGameEngineType ( " + m + " )";
        }
        class ft extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ft.prototype.type || i.Sg(ft.M()),
              l.Message.initialize(this, r, 0, -1, [13, 16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
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
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = i.w0(ft.M())), ft.sm_mbf;
          }
          toObject(r = !1) {
            return ft.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ft.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ft.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ft();
            return ft.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ft.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ft.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_ServerInfo";
          }
        }
        class It extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              It.prototype.type || i.Sg(It.M()),
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
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = i.w0(It.M())), It.sm_mbf;
          }
          toObject(r = !1) {
            return It.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(It.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(It.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new It();
            return It.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(It.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return It.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(It.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_ConnectedSteamPipeServerInfo";
          }
        }
        class Kr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kr.prototype.cell_id || i.Sg(Kr.M()),
              l.Message.initialize(this, r, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kr.sm_m ||
                (Kr.sm_m = {
                  proto: Kr,
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
                    current_connections: { n: 6, c: It, r: !0, q: !0 },
                  },
                }),
              Kr.sm_m
            );
          }
          static MBF() {
            return Kr.sm_mbf || (Kr.sm_mbf = i.w0(Kr.M())), Kr.sm_mbf;
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Kr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Kr();
            return Kr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetServersForSteamPipe_Request";
          }
        }
        class $r extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $r.prototype.servers || i.Sg($r.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $r.sm_m ||
                ($r.sm_m = {
                  proto: $r,
                  fields: {
                    servers: { n: 1, c: ft, r: !0, q: !0 },
                    no_change: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, t) {
            return i.BT($r.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($r.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new $r();
            return $r.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($r.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($r.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetServersForSteamPipe_Response";
          }
        }
        class Xr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xr.prototype.appid || i.Sg(Xr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xr.sm_m ||
                (Xr.sm_m = {
                  proto: Xr,
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
              Xr.sm_m
            );
          }
          static MBF() {
            return Xr.sm_mbf || (Xr.sm_mbf = i.w0(Xr.M())), Xr.sm_mbf;
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Xr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Xr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Xr();
            return Xr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Xr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Xr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetDepotPatchInfo_Request";
          }
        }
        class Vr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vr.prototype.is_available || i.Sg(Vr.M()),
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
              Vr.sm_m
            );
          }
          static MBF() {
            return Vr.sm_mbf || (Vr.sm_mbf = i.w0(Vr.M())), Vr.sm_mbf;
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Vr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Vr();
            return Vr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetDepotPatchInfo_Response";
          }
        }
        class Yr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yr.prototype.cached_signature || i.Sg(Yr.M()),
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
                    cached_signature: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(Yr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Yr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Yr();
            return Yr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Yr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Yr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetClientUpdateHosts_Request";
          }
        }
        class Zr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zr.prototype.hosts_kv || i.Sg(Zr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zr.sm_m ||
                (Zr.sm_m = {
                  proto: Zr,
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
              Zr.sm_m
            );
          }
          static MBF() {
            return Zr.sm_mbf || (Zr.sm_mbf = i.w0(Zr.M())), Zr.sm_mbf;
          }
          toObject(r = !1) {
            return Zr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Zr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Zr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Zr();
            return Zr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Zr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Zr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetClientUpdateHosts_Response";
          }
        }
        class Lr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lr.prototype.app_id || i.Sg(Lr.M()),
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
              Lr.sm_m
            );
          }
          static MBF() {
            return Lr.sm_mbf || (Lr.sm_mbf = i.w0(Lr.M())), Lr.sm_mbf;
          }
          toObject(r = !1) {
            return Lr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Lr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Lr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Lr();
            return Lr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Lr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Lr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetManifestRequestCode_Request";
          }
        }
        class Jr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Jr.prototype.manifest_request_code || i.Sg(Jr.M()),
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
                    manifest_request_code: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(Jr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Jr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Jr();
            return Jr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Jr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Jr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetManifestRequestCode_Response";
          }
        }
        class Qr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qr.prototype.depot_id || i.Sg(Qr.M()),
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
              Qr.sm_m
            );
          }
          static MBF() {
            return Qr.sm_mbf || (Qr.sm_mbf = i.w0(Qr.M())), Qr.sm_mbf;
          }
          toObject(r = !1) {
            return Qr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Qr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Qr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Qr();
            return Qr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Qr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Qr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetCDNAuthToken_Request";
          }
        }
        class Tr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Tr.prototype.token || i.Sg(Tr.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    token: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                    expiration_time: {
                      n: 2,
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
          static toObject(r, t) {
            return i.BT(Tr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Tr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Tr();
            return Tr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Tr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Tr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetCDNAuthToken_Response";
          }
        }
        class kr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kr.prototype.remote_client_id || i.Sg(kr.M()),
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
              kr.sm_m
            );
          }
          static MBF() {
            return kr.sm_mbf || (kr.sm_mbf = i.w0(kr.M())), kr.sm_mbf;
          }
          toObject(r = !1) {
            return kr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(kr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(kr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new kr();
            return kr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(kr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(kr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_RequestPeerContentServer_Request";
          }
        }
        class Nr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nr.prototype.server_port || i.Sg(Nr.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nr.sm_m ||
                (Nr.sm_m = {
                  proto: Nr,
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
              Nr.sm_m
            );
          }
          static MBF() {
            return Nr.sm_mbf || (Nr.sm_mbf = i.w0(Nr.M())), Nr.sm_mbf;
          }
          toObject(r = !1) {
            return Nr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Nr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Nr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Nr();
            return Nr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Nr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Nr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_RequestPeerContentServer_Response";
          }
        }
        class Pr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pr.prototype.remote_client_id || i.Sg(Pr.M()),
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
              Pr.sm_m
            );
          }
          static MBF() {
            return Pr.sm_mbf || (Pr.sm_mbf = i.w0(Pr.M())), Pr.sm_mbf;
          }
          toObject(r = !1) {
            return Pr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Pr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Pr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Pr();
            return Pr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Pr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Pr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetPeerContentInfo_Request";
          }
        }
        class Hr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Hr.prototype.appids || i.Sg(Hr.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Hr.sm_m ||
                (Hr.sm_m = {
                  proto: Hr,
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
              Hr.sm_m
            );
          }
          static MBF() {
            return Hr.sm_mbf || (Hr.sm_mbf = i.w0(Hr.M())), Hr.sm_mbf;
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Hr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Hr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Hr();
            return Hr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Hr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Hr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetPeerContentInfo_Response";
          }
        }
        class pr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pr.prototype.detection_type || i.Sg(pr.M()),
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
                    detection_type: {
                      n: 1,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
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
          static toObject(r, t) {
            return i.BT(pr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(pr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new pr();
            return pr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(pr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(pr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDepotContentDetection_GetAllDetectedAppContent_Request";
          }
        }
        class Kt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Kt.prototype.app_id || i.Sg(Kt.M()),
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
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = i.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(r = !1) {
            return Kt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Kt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Kt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Kt();
            return Kt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Kt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Kt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "DetectedAppContent";
          }
        }
        class vr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vr.prototype.detected_app_content || i.Sg(vr.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    detected_app_content: { n: 1, c: Kt, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(vr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(vr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new vr();
            return vr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(vr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(vr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDepotContentDetection_GetAllDetectedAppContent_Response";
          }
        }
        var Gl;
        ((m) => {
          function r(O, F, x) {
            return O.SendMsg(
              "ContentServerDirectory.GetServersForSteamPipe#1",
              (0, B.I8)(Kr, F, x),
              $r,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetServersForSteamPipe = r;
          function t(O, F, x) {
            return O.SendMsg(
              "ContentServerDirectory.GetDepotPatchInfo#1",
              (0, B.I8)(Xr, F, x),
              Vr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetDepotPatchInfo = t;
          function s(O, F, x) {
            return O.SendMsg(
              "ContentServerDirectory.GetClientUpdateHosts#1",
              (0, B.I8)(Yr, F, x),
              Zr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetClientUpdateHosts = s;
          function b(O, F, x) {
            return O.SendMsg(
              "ContentServerDirectory.GetManifestRequestCode#1",
              (0, B.I8)(Lr, F, x),
              Jr,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          m.GetManifestRequestCode = b;
          function u(O, F, x) {
            return O.SendMsg(
              "ContentServerDirectory.GetCDNAuthToken#1",
              (0, B.I8)(Qr, F, x),
              Tr,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          m.GetCDNAuthToken = u;
          function y(O, F, x) {
            return O.SendMsg(
              "ContentServerDirectory.RequestPeerContentServer#1",
              (0, B.I8)(kr, F, x),
              Nr,
              { ePrivilege: 1 },
            );
          }
          m.RequestPeerContentServer = y;
          function n(O, F, x) {
            return O.SendMsg(
              "ContentServerDirectory.GetPeerContentInfo#1",
              (0, B.I8)(Pr, F, x),
              Hr,
              { ePrivilege: 1 },
            );
          }
          m.GetPeerContentInfo = n;
        })(Gl || (Gl = {}));
        var El;
        ((m) => {
          function r(t, s, b) {
            return t.SendMsg(
              "DepotContentDetection.GetAllDetectedAppContent#1",
              (0, B.I8)(pr, s, b),
              vr,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          m.GetAllDetectedAppContent = r;
        })(El || (El = {}));
        class Es extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Es.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Es();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Es();
            return Es.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Es.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Es.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_ReloadOriginStorageInfo_Notification";
          }
        }
        class $t extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $t.prototype.depot_id || i.Sg($t.M()),
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
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = i.w0($t.M())), $t.sm_mbf;
          }
          toObject(r = !1) {
            return $t.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT($t.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($t.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new $t();
            return $t.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($t.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($t.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_CSFailedToReadChunkFromStorage_Notification";
          }
        }
        class Xt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xt.prototype.app_id || i.Sg(Xt.M()),
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
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(Xt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Xt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Xt();
            return Xt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Xt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Xt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppContentPurge_Request";
          }
        }
        class Ss extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Ss.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Ss();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ss();
            return Ss.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ss.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ss.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppContentPurge_Response";
          }
        }
        class Vt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Vt.prototype.app_id || i.Sg(Vt.M()),
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
                    app_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(Vt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Vt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Vt();
            return Vt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Vt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Vt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppContentPurgeStatus_Request";
          }
        }
        class Yt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Yt.prototype.app_id || i.Sg(Yt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
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
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = i.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(r = !1) {
            return Yt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Yt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Yt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Yt();
            return Yt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Yt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Yt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppContentPurgeStatus_Response";
          }
        }
        class Zt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Zt.prototype.depot_id || i.Sg(Zt.M()),
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
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(Zt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Zt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Zt();
            return Zt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Zt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Zt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_CSPurgeDepot_Notification";
          }
        }
        class Lt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Lt.prototype.depot_id || i.Sg(Lt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    sha: { n: 2, br: i.qM.readBytes, bw: i.gp.writeBytes },
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
          static toObject(r, t) {
            return i.BT(Lt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Lt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Lt();
            return Lt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Lt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Lt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_NewChunkAnnouncement_Notification";
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
          static toObject(r, t) {
            return i.BT(Jt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Jt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Jt();
            return Jt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Jt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Jt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_MDSFlushDepotCache_Notification";
          }
        }
        class Qt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Qt.prototype.depot_id || i.Sg(Qt.M()),
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
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = i.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(r = !1) {
            return Qt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Qt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Qt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Qt();
            return Qt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Qt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Qt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_MDSFlushManifestVersion_Notification";
          }
        }
        class qr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qr.prototype.location_id || i.Sg(qr.M()),
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
                    location_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    host: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    path: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    headers_for_put: { n: 4, c: Dl.$3 },
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
              qr.sm_m
            );
          }
          static MBF() {
            return qr.sm_mbf || (qr.sm_mbf = i.w0(qr.M())), qr.sm_mbf;
          }
          toObject(r = !1) {
            return qr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(qr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(qr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new qr();
            return qr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(qr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(qr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_ChunkStorageLocation";
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
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = i.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(r = !1) {
            return Tt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Tt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Tt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Tt();
            return Tt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Tt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Tt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkReceived_Request";
          }
        }
        class kt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              kt.prototype.original_size || i.Sg(kt.M()),
              l.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
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
                    storage_locations: { n: 3, c: qr, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(kt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(kt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new kt();
            return kt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(kt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(kt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkReceived_Response";
          }
        }
        class Nt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Nt.prototype.appid || i.Sg(Nt.M()),
              l.Message.initialize(this, r, 0, -1, [7], null);
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
                    storage_locations: { n: 7, c: qr, r: !0, q: !0 },
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
          static toObject(r, t) {
            return i.BT(Nt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Nt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Nt();
            return Nt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Nt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Nt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkStored_Request";
          }
        }
        class Rs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Rs.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Rs();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Rs();
            return Rs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Rs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Rs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkStored_Response";
          }
        }
        class Pt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pt.prototype.appid || i.Sg(Pt.M()),
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
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = i.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(r = !1) {
            return Pt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Pt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Pt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Pt();
            return Pt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Pt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Pt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotIngestChunkStorageFailure_Notification";
          }
        }
        class Ht extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ht.prototype.requests || i.Sg(Ht.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: { requests: { n: 1, c: pt, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(Ht.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ht.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ht();
            return Ht.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ht.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ht.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetCDNConfigurations_Request";
          }
        }
        class pt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pt.prototype.cdn_name || i.Sg(pt.M()),
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
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = i.w0(pt.M())), pt.sm_mbf;
          }
          toObject(r = !1) {
            return pt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(pt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(pt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new pt();
            return pt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(pt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(pt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetCDNConfigurations_Request_CDNInfoRequest";
          }
        }
        class vt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              vt.prototype.cdn_name || i.Sg(vt.M()),
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
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = i.w0(vt.M())), vt.sm_mbf;
          }
          toObject(r = !1) {
            return vt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(vt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(vt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new vt();
            return vt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(vt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(vt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CDNConfigInfo";
          }
        }
        class qt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qt.prototype.responses || i.Sg(qt.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: { responses: { n: 1, c: vt, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(qt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(qt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new qt();
            return qt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(qt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(qt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetCDNConfigurations_Response";
          }
        }
        class At extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              At.prototype.cdn_name || i.Sg(At.M()),
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
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = i.w0(At.M())), At.sm_mbf;
          }
          toObject(r = !1) {
            return At.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(At.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(At.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new At();
            return At.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(At.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return At.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(At.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCDNConfig_Request";
          }
        }
        class os extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return os.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new os();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new os();
            return os.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return os.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              os.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCDNConfig_Response";
          }
        }
        class Dt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Dt.prototype.cdn_name || i.Sg(Dt.M()),
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
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = i.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(r = !1) {
            return Dt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Dt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Dt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Dt();
            return Dt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Dt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Dt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCDNPerformanceStats_Request";
          }
        }
        class Gt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Gt.prototype.message || i.Sg(Gt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: {
                    message: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = i.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(r = !1) {
            return Gt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Gt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Gt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Gt();
            return Gt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Gt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Gt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCDNPerformanceStats_Response";
          }
        }
        class Et extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Et.prototype.stats || i.Sg(Et.M()),
              l.Message.initialize(this, r, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    stats: { n: 1, c: St, r: !0, q: !0 },
                    cdn_stats: { n: 2, c: Rt, r: !0, q: !0 },
                    steamcache_stats: { n: 3, c: ot, r: !0, q: !0 },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = i.w0(Et.M())), Et.sm_mbf;
          }
          toObject(r = !1) {
            return Et.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Et.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Et.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Et();
            return Et.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Et.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Et.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_ContentServerStats_Notification";
          }
        }
        class St extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              St.prototype.cs_id || i.Sg(St.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
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
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = i.w0(St.M())), St.sm_mbf;
          }
          toObject(r = !1) {
            return St.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(St.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(St.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new St();
            return St.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(St.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return St.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(St.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_ContentServerStats_Notification_Stats";
          }
        }
        class Rt extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Rt.prototype.cdn_name || i.Sg(Rt.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
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
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = i.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(r = !1) {
            return Rt.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Rt.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Rt.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Rt();
            return Rt.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Rt.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Rt.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_ContentServerStats_Notification_CDNStats";
          }
        }
        class ot extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ot.prototype.cache_id || i.Sg(ot.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
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
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = i.w0(ot.M())), ot.sm_mbf;
          }
          toObject(r = !1) {
            return ot.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ot.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ot.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ot();
            return ot.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ot.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ot.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_ContentServerStats_Notification_SteamCacheStats";
          }
        }
        class Ct extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ct.prototype.stats || i.Sg(Ct.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: { stats: { n: 1, c: _t, r: !0, q: !0 } },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = i.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(r = !1) {
            return Ct.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ct.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ct.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ct();
            return Ct.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ct.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ct.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CMStats_Notification";
          }
        }
        class _t extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _t.prototype.sysid_cm || i.Sg(_t.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
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
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = i.w0(_t.M())), _t.sm_mbf;
          }
          toObject(r = !1) {
            return _t.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(_t.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_t.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new _t();
            return _t.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_t.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_t.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CMStats_Notification_Stats";
          }
        }
        class ra extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ra.prototype.anon_session_allowed_depots || i.Sg(ra.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ra.sm_m ||
                (ra.sm_m = {
                  proto: ra,
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
              ra.sm_m
            );
          }
          static MBF() {
            return ra.sm_mbf || (ra.sm_mbf = i.w0(ra.M())), ra.sm_mbf;
          }
          toObject(r = !1) {
            return ra.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ra.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ra.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ra();
            return ra.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ra.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ra.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ra.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ra.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AnonymousDepots_Notification";
          }
        }
        class ia extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ia.prototype.depot_id || i.Sg(ia.M()),
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
              ia.sm_m
            );
          }
          static MBF() {
            return ia.sm_mbf || (ia.sm_mbf = i.w0(ia.M())), ia.sm_mbf;
          }
          toObject(r = !1) {
            return ia.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ia.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ia.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ia();
            return ia.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ia.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ia.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ia.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ia.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CheckManifestRequestCode_Request";
          }
        }
        class ta extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ta.prototype.is_valid || i.Sg(ta.M()),
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
                    is_valid: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, t) {
            return i.BT(ta.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ta.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ta();
            return ta.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ta.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ta.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ta.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ta.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_CheckManifestRequestCode_Response";
          }
        }
        class aa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              aa.prototype.depot_id || i.Sg(aa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              aa.sm_m ||
                (aa.sm_m = {
                  proto: aa,
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
              aa.sm_m
            );
          }
          static MBF() {
            return aa.sm_mbf || (aa.sm_mbf = i.w0(aa.M())), aa.sm_mbf;
          }
          toObject(r = !1) {
            return aa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(aa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(aa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new aa();
            return aa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(aa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return aa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(aa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              aa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetManifestRequestCode_Request";
          }
        }
        class sa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sa.prototype.manifest_request_code || i.Sg(sa.M()),
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
                    manifest_request_code: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
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
          static toObject(r, t) {
            return i.BT(sa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(sa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new sa();
            return sa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(sa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return sa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(sa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              sa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetManifestRequestCode_Response";
          }
        }
        class la extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              la.prototype.depot_id || i.Sg(la.M()),
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
                    depot_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(la.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(la.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new la();
            return la.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(la.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return la.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(la.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              la.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_IsDepotAllowedSteamChina_Request";
          }
        }
        class ma extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ma.prototype.is_allowed || i.Sg(ma.M()),
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
                    is_allowed: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
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
          static toObject(r, t) {
            return i.BT(ma.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ma.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ma();
            return ma.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ma.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ma.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ma.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ma.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_IsDepotAllowedSteamChina_Response";
          }
        }
        class ea extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ea.prototype.depotid || i.Sg(ea.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ea.sm_m ||
                (ea.sm_m = {
                  proto: ea,
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
              ea.sm_m
            );
          }
          static MBF() {
            return ea.sm_mbf || (ea.sm_mbf = i.w0(ea.M())), ea.sm_mbf;
          }
          toObject(r = !1) {
            return ea.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ea.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ea.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ea();
            return ea.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ea.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ea.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ea.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ea.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_InvalidateDepotMetadata_Notification";
          }
        }
        class mr extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.cs_id || i.Sg(mr.M()),
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
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = i.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(mr.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new mr();
            return mr.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(mr.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(mr.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SteamCSConfig";
          }
        }
        class Ba extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ba.prototype.cs_id || i.Sg(Ba.M()),
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
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
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
          static toObject(r, t) {
            return i.BT(Ba.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ba.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ba();
            return Ba.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ba.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ba.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ba.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ba.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfig_Request";
          }
        }
        class ba extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ba.prototype.config || i.Sg(ba.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ba.sm_m ||
                (ba.sm_m = { proto: ba, fields: { config: { n: 1, c: mr } } }),
              ba.sm_m
            );
          }
          static MBF() {
            return ba.sm_mbf || (ba.sm_mbf = i.w0(ba.M())), ba.sm_mbf;
          }
          toObject(r = !1) {
            return ba.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ba.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ba.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ba();
            return ba.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ba.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ba.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ba.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ba.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfig_Response";
          }
        }
        class wa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wa.prototype.cs_id || i.Sg(wa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wa.sm_m ||
                (wa.sm_m = {
                  proto: wa,
                  fields: {
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    ip_ranges: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
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
          static toObject(r, t) {
            return i.BT(wa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(wa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new wa();
            return wa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(wa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return wa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(wa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              wa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCSIPFilterRanges_Request";
          }
        }
        class ua extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ua.prototype.cs_id || i.Sg(ua.M()),
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
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    max_results: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
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
          static toObject(r, t) {
            return i.BT(ua.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ua.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ua();
            return ua.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ua.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ua.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ua.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ua.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfigHistory_Request";
          }
        }
        class da extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              da.prototype.history || i.Sg(da.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              da.sm_m ||
                (da.sm_m = {
                  proto: da,
                  fields: { history: { n: 1, c: Ma, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(da.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(da.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new da();
            return da.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(da.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return da.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(da.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              da.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfigHistory_Response";
          }
        }
        class Ma extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ma.prototype.timestamp || i.Sg(Ma.M()),
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
              Ma.sm_m
            );
          }
          static MBF() {
            return Ma.sm_mbf || (Ma.sm_mbf = i.w0(Ma.M())), Ma.sm_mbf;
          }
          toObject(r = !1) {
            return Ma.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ma.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ma.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ma();
            return Ma.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ma.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ma.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ma.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ma.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSConfigHistory_Response_HistoryEntry";
          }
        }
        class za extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              za.prototype.cs_id || i.Sg(za.M()),
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
                    cs_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    change_notes: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    config: { n: 3, c: mr },
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
          static toObject(r, t) {
            return i.BT(za.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(za.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new za();
            return za.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(za.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return za.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(za.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              za.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateSteamCSConfig_Request";
          }
        }
        class Cs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Cs.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Cs();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Cs();
            return Cs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Cs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Cs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateSteamCSConfig_Response";
          }
        }
        class ga extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ga.prototype.config || i.Sg(ga.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ga.sm_m ||
                (ga.sm_m = { proto: ga, fields: { config: { n: 1, c: mr } } }),
              ga.sm_m
            );
          }
          static MBF() {
            return ga.sm_mbf || (ga.sm_mbf = i.w0(ga.M())), ga.sm_mbf;
          }
          toObject(r = !1) {
            return ga.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ga.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ga.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ga();
            return ga.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ga.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ga.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ga.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ga.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SteamCSConfigUpdate_Notification";
          }
        }
        class _s extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return _s.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new _s();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new _s();
            return _s.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateCSIPFilterRanges_Response";
          }
        }
        class rl extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return rl.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new rl();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new rl();
            return rl.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return rl.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              rl.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSNames_Request";
          }
        }
        class ya extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ya.prototype.config_names || i.Sg(ya.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ya.sm_m ||
                (ya.sm_m = {
                  proto: ya,
                  fields: { config_names: { n: 1, c: ca, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(ya.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ya.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ya();
            return ya.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ya.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ya.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ya.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ya.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSNames_Response";
          }
        }
        class ca extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ca.prototype.cs_id || i.Sg(ca.M()),
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
              ca.sm_m
            );
          }
          static MBF() {
            return ca.sm_mbf || (ca.sm_mbf = i.w0(ca.M())), ca.sm_mbf;
          }
          toObject(r = !1) {
            return ca.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ca.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ca.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ca();
            return ca.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ca.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ca.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ca.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ca.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCSNames_Response_ConfigNames";
          }
        }
        class ja extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ja.prototype.provider || i.Sg(ja.M()),
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
              ja.sm_m
            );
          }
          static MBF() {
            return ja.sm_mbf || (ja.sm_mbf = i.w0(ja.M())), ja.sm_mbf;
          }
          toObject(r = !1) {
            return ja.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ja.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ja.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ja();
            return ja.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ja.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ja.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ja.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ja.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AllocateSteamCache_Request";
          }
        }
        class Wa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wa.prototype.cache_id || i.Sg(Wa.M()),
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
                    cache_id: {
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
          static toObject(r, t) {
            return i.BT(Wa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Wa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Wa();
            return Wa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Wa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Wa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Wa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Wa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AllocateSteamCache_Response";
          }
        }
        class er extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.cache_id || i.Sg(er.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
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
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = i.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(er.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new er();
            return er.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(er.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(er.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SteamCacheConfig";
          }
        }
        class il extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return il.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new il();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new il();
            return il.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return il.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              il.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNames_Request";
          }
        }
        class na extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              na.prototype.config_names || i.Sg(na.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              na.sm_m ||
                (na.sm_m = {
                  proto: na,
                  fields: { config_names: { n: 1, c: Fa, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(na.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(na.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new na();
            return na.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(na.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return na.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(na.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              na.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNames_Response";
          }
        }
        class Fa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Fa.prototype.cache_id || i.Sg(Fa.M()),
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
          static toObject(r, t) {
            return i.BT(Fa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Fa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Fa();
            return Fa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Fa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Fa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Fa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Fa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNames_Response_ConfigNames";
          }
        }
        class Ua extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ua.prototype.cache_id || i.Sg(Ua.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ua.sm_m ||
                (Ua.sm_m = {
                  proto: Ua,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
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
          static toObject(r, t) {
            return i.BT(Ua.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ua.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ua();
            return Ua.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ua.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ua.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ua.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ua.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfig_Request";
          }
        }
        class xa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xa.prototype.config || i.Sg(xa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xa.sm_m ||
                (xa.sm_m = { proto: xa, fields: { config: { n: 1, c: er } } }),
              xa.sm_m
            );
          }
          static MBF() {
            return xa.sm_mbf || (xa.sm_mbf = i.w0(xa.M())), xa.sm_mbf;
          }
          toObject(r = !1) {
            return xa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(xa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(xa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new xa();
            return xa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(xa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return xa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(xa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              xa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfig_Response";
          }
        }
        class Oa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Oa.prototype.cache_id || i.Sg(Oa.M()),
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
              Oa.sm_m
            );
          }
          static MBF() {
            return Oa.sm_mbf || (Oa.sm_mbf = i.w0(Oa.M())), Oa.sm_mbf;
          }
          toObject(r = !1) {
            return Oa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Oa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Oa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Oa();
            return Oa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Oa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Oa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Oa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Oa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfigHistory_Request";
          }
        }
        class ha extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ha.prototype.history || i.Sg(ha.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ha.sm_m ||
                (ha.sm_m = {
                  proto: ha,
                  fields: { history: { n: 1, c: fa, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(ha.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ha.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ha();
            return ha.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ha.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ha.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ha.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ha.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfigHistory_Response";
          }
        }
        class fa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fa.prototype.timestamp || i.Sg(fa.M()),
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
              fa.sm_m
            );
          }
          static MBF() {
            return fa.sm_mbf || (fa.sm_mbf = i.w0(fa.M())), fa.sm_mbf;
          }
          toObject(r = !1) {
            return fa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(fa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(fa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new fa();
            return fa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(fa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return fa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(fa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              fa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheConfigHistory_Response_HistoryEntry";
          }
        }
        class Ia extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ia.prototype.cache_id || i.Sg(Ia.M()),
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
                    config: { n: 3, c: er },
                    omit_history_entry: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
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
          static toObject(r, t) {
            return i.BT(Ia.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ia.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ia();
            return Ia.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ia.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ia.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ia.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ia.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateSteamCacheConfig_Request";
          }
        }
        class tl extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return tl.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new tl();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new tl();
            return tl.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return tl.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              tl.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateSteamCacheConfig_Response";
          }
        }
        class Ka extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ka.prototype.config || i.Sg(Ka.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ka.sm_m ||
                (Ka.sm_m = { proto: Ka, fields: { config: { n: 1, c: er } } }),
              Ka.sm_m
            );
          }
          static MBF() {
            return Ka.sm_mbf || (Ka.sm_mbf = i.w0(Ka.M())), Ka.sm_mbf;
          }
          toObject(r = !1) {
            return Ka.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ka.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ka.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ka();
            return Ka.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ka.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ka.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ka.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ka.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SteamCacheConfigUpdate_Notification";
          }
        }
        class $a extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $a.prototype.cache_id || i.Sg($a.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $a.sm_m ||
                ($a.sm_m = {
                  proto: $a,
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
              $a.sm_m
            );
          }
          static MBF() {
            return $a.sm_mbf || ($a.sm_mbf = i.w0($a.M())), $a.sm_mbf;
          }
          toObject(r = !1) {
            return $a.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT($a.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq($a.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new $a();
            return $a.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj($a.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return $a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0($a.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              $a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_RevSteamCacheAPIKey_Request";
          }
        }
        class al extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return al.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new al();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new al();
            return al.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return al.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              al.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_RevSteamCacheAPIKey_Response";
          }
        }
        class Xa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Xa.prototype.provider || i.Sg(Xa.M()),
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
              Xa.sm_m
            );
          }
          static MBF() {
            return Xa.sm_mbf || (Xa.sm_mbf = i.w0(Xa.M())), Xa.sm_mbf;
          }
          toObject(r = !1) {
            return Xa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Xa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Xa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Xa();
            return Xa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Xa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Xa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Xa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Xa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AllocateOpenCache_Request";
          }
        }
        class Va extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Va.prototype.cache_id || i.Sg(Va.M()),
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
                    cache_id: {
                      n: 1,
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
          static toObject(r, t) {
            return i.BT(Va.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Va.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Va();
            return Va.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Va.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Va.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Va.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Va.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_AllocateOpenCache_Response";
          }
        }
        class Br extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.cache_id || i.Sg(Br.M()),
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
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = i.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Br.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Br();
            return Br.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Br.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Br.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_OpenCacheConfig";
          }
        }
        class sl extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return sl.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new sl();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new sl();
            return sl.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return sl.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              sl.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheNames_Request";
          }
        }
        class Ya extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ya.prototype.config_names || i.Sg(Ya.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ya.sm_m ||
                (Ya.sm_m = {
                  proto: Ya,
                  fields: { config_names: { n: 1, c: Za, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(Ya.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ya.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ya();
            return Ya.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ya.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ya.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ya.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ya.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheNames_Response";
          }
        }
        class Za extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Za.prototype.cache_id || i.Sg(Za.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Za.sm_m ||
                (Za.sm_m = {
                  proto: Za,
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
              Za.sm_m
            );
          }
          static MBF() {
            return Za.sm_mbf || (Za.sm_mbf = i.w0(Za.M())), Za.sm_mbf;
          }
          toObject(r = !1) {
            return Za.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Za.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Za.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Za();
            return Za.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Za.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Za.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Za.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Za.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheNames_Response_ConfigNames";
          }
        }
        class La extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              La.prototype.cache_id || i.Sg(La.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              La.sm_m ||
                (La.sm_m = {
                  proto: La,
                  fields: {
                    cache_id: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
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
          static toObject(r, t) {
            return i.BT(La.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(La.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new La();
            return La.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(La.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return La.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(La.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              La.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfig_Request";
          }
        }
        class Ja extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ja.prototype.config || i.Sg(Ja.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ja.sm_m ||
                (Ja.sm_m = { proto: Ja, fields: { config: { n: 1, c: Br } } }),
              Ja.sm_m
            );
          }
          static MBF() {
            return Ja.sm_mbf || (Ja.sm_mbf = i.w0(Ja.M())), Ja.sm_mbf;
          }
          toObject(r = !1) {
            return Ja.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ja.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ja.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ja();
            return Ja.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ja.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ja.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ja.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ja.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfig_Response";
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
                    max_results: {
                      n: 2,
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
          static toObject(r, t) {
            return i.BT(Qa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Qa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Qa();
            return Qa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Qa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Qa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Qa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Qa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfigHistory_Request";
          }
        }
        class Ta extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ta.prototype.history || i.Sg(Ta.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ta.sm_m ||
                (Ta.sm_m = {
                  proto: Ta,
                  fields: { history: { n: 1, c: ka, r: !0, q: !0 } },
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
          static toObject(r, t) {
            return i.BT(Ta.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ta.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ta();
            return Ta.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ta.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ta.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ta.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ta.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfigHistory_Response";
          }
        }
        class ka extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ka.prototype.timestamp || i.Sg(ka.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ka.sm_m ||
                (ka.sm_m = {
                  proto: ka,
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
              ka.sm_m
            );
          }
          static MBF() {
            return ka.sm_mbf || (ka.sm_mbf = i.w0(ka.M())), ka.sm_mbf;
          }
          toObject(r = !1) {
            return ka.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ka.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ka.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ka();
            return ka.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ka.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ka.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ka.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ka.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetOpenCacheConfigHistory_Response_HistoryEntry";
          }
        }
        class Na extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Na.prototype.cache_id || i.Sg(Na.M()),
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
                    config: { n: 3, c: Br },
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
          static toObject(r, t) {
            return i.BT(Na.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Na.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Na();
            return Na.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Na.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Na.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Na.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Na.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateOpenCacheConfig_Request";
          }
        }
        class ll extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ll.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ll();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ll();
            return ll.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ll.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ll.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_UpdateOpenCacheConfig_Response";
          }
        }
        class Pa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Pa.prototype.config || i.Sg(Pa.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pa.sm_m ||
                (Pa.sm_m = { proto: Pa, fields: { config: { n: 1, c: Br } } }),
              Pa.sm_m
            );
          }
          static MBF() {
            return Pa.sm_mbf || (Pa.sm_mbf = i.w0(Pa.M())), Pa.sm_mbf;
          }
          toObject(r = !1) {
            return Pa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Pa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Pa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Pa();
            return Pa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Pa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Pa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Pa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Pa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_OpenCacheConfigUpdate_Notification";
          }
        }
        class Ha extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ha.prototype.cache_id || i.Sg(Ha.M()),
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
              Ha.sm_m
            );
          }
          static MBF() {
            return Ha.sm_mbf || (Ha.sm_mbf = i.w0(Ha.M())), Ha.sm_mbf;
          }
          toObject(r = !1) {
            return Ha.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ha.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ha.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ha();
            return Ha.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ha.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ha.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ha.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ha.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SetSteamCacheClientFilters_Request";
          }
        }
        class ml extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return ml.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new ml();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ml();
            return ml.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ml.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ml.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SetSteamCacheClientFilters_Response";
          }
        }
        class pa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              pa.prototype.cache_id || i.Sg(pa.M()),
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
              pa.sm_m
            );
          }
          static MBF() {
            return pa.sm_mbf || (pa.sm_mbf = i.w0(pa.M())), pa.sm_mbf;
          }
          toObject(r = !1) {
            return pa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(pa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(pa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new pa();
            return pa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(pa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return pa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(pa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              pa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SetSteamCachePerformanceStats_Request";
          }
        }
        class va extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              va.prototype.load_calc_percent || i.Sg(va.M()),
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
              va.sm_m
            );
          }
          static MBF() {
            return va.sm_mbf || (va.sm_mbf = i.w0(va.M())), va.sm_mbf;
          }
          toObject(r = !1) {
            return va.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(va.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(va.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new va();
            return va.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(va.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return va.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(va.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              va.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_SetSteamCachePerformanceStats_Response";
          }
        }
        class qa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              qa.prototype.cache_id || i.Sg(qa.M()),
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
              qa.sm_m
            );
          }
          static MBF() {
            return qa.sm_mbf || (qa.sm_mbf = i.w0(qa.M())), qa.sm_mbf;
          }
          toObject(r = !1) {
            return qa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(qa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(qa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new qa();
            return qa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(qa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return qa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(qa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              qa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNodeParams_Request";
          }
        }
        class Aa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Aa.prototype.params_json || i.Sg(Aa.M()),
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
                    params_json: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
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
          static toObject(r, t) {
            return i.BT(Aa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Aa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Aa();
            return Aa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Aa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Aa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Aa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Aa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerConfig_GetSteamCacheNodeParams_Response";
          }
        }
        class Da extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Da.prototype.depotid || i.Sg(Da.M()),
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
              Da.sm_m
            );
          }
          static MBF() {
            return Da.sm_mbf || (Da.sm_mbf = i.w0(Da.M())), Da.sm_mbf;
          }
          toObject(r = !1) {
            return Da.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Da.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Da.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Da();
            return Da.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Da.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Da.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Da.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Da.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_DepotDownloadBytesInfo";
          }
        }
        class Ga extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ga.prototype.depots || i.Sg(Ga.M()),
              l.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ga.sm_m ||
                (Ga.sm_m = {
                  proto: Ga,
                  fields: { depots: { n: 1, c: Da, r: !0, q: !0 } },
                }),
              Ga.sm_m
            );
          }
          static MBF() {
            return Ga.sm_mbf || (Ga.sm_mbf = i.w0(Ga.M())), Ga.sm_mbf;
          }
          toObject(r = !1) {
            return Ga.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ga.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ga.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ga();
            return Ga.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ga.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ga.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ga.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ga.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_GetDepotDownloadBytes_Request";
          }
        }
        class Ea extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ea.prototype.windows || i.Sg(Ea.M()),
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
              Ea.sm_m
            );
          }
          static MBF() {
            return Ea.sm_mbf || (Ea.sm_mbf = i.w0(Ea.M())), Ea.sm_mbf;
          }
          toObject(r = !1) {
            return Ea.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ea.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ea.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ea();
            return Ea.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ea.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ea.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ea.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ea.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_GetDepotDownloadBytes_Response";
          }
        }
        class Sa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Sa.prototype.depot_id || i.Sg(Sa.M()),
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
              Sa.sm_m
            );
          }
          static MBF() {
            return Sa.sm_mbf || (Sa.sm_mbf = i.w0(Sa.M())), Sa.sm_mbf;
          }
          toObject(r = !1) {
            return Sa.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Sa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Sa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Sa();
            return Sa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Sa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Sa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Sa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Sa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_BeginOriginMigrationJob_Request";
          }
        }
        class el extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return el.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new el();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new el();
            return el.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return el.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              el.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_BeginOriginMigrationJob_Response";
          }
        }
        class Ra extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ra.prototype.depot_id || i.Sg(Ra.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ra.sm_m ||
                (Ra.sm_m = {
                  proto: Ra,
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
              Ra.sm_m
            );
          }
          static MBF() {
            return Ra.sm_mbf || (Ra.sm_mbf = i.w0(Ra.M())), Ra.sm_mbf;
          }
          toObject(r = !1) {
            return Ra.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ra.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ra.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ra();
            return Ra.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ra.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ra.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ra.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ra.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_GetDepotChunkLocation_Request";
          }
        }
        class oa extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              oa.prototype.cub_chunk || i.Sg(oa.M()),
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
                    request_headers: { n: 8, c: Dl.$3 },
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
          static toObject(r, t) {
            return i.BT(oa.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(oa.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new oa();
            return oa.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(oa.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return oa.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(oa.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              oa.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_GetDepotChunkLocation_Response";
          }
        }
        class Ca extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Ca.prototype.appid || i.Sg(Ca.M()),
              l.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ca.sm_m ||
                (Ca.sm_m = {
                  proto: Ca,
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
              Ca.sm_m
            );
          }
          static MBF() {
            return Ca.sm_mbf || (Ca.sm_mbf = i.w0(Ca.M())), Ca.sm_mbf;
          }
          toObject(r = !1) {
            return Ca.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Ca.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Ca.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Ca();
            return Ca.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Ca.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Ca.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Ca.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Ca.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CBuildManagement_SetAppBuildSortOrder_Request";
          }
        }
        class Bl extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Bl.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new Bl();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Bl();
            return Bl.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Bl.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Bl.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CBuildManagement_SetAppBuildSortOrder_Response";
          }
        }
        class _a extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _a.prototype.appid || i.Sg(_a.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _a.sm_m ||
                (_a.sm_m = {
                  proto: _a,
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
              _a.sm_m
            );
          }
          static MBF() {
            return _a.sm_mbf || (_a.sm_mbf = i.w0(_a.M())), _a.sm_mbf;
          }
          toObject(r = !1) {
            return _a.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(_a.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(_a.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new _a();
            return _a.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(_a.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return _a.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(_a.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              _a.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_ManifestAppBranchInfo_Request";
          }
        }
        class rs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rs.prototype.manifest_part_of_app_branch || i.Sg(rs.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rs.sm_m ||
                (rs.sm_m = {
                  proto: rs,
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
              rs.sm_m
            );
          }
          static MBF() {
            return rs.sm_mbf || (rs.sm_mbf = i.w0(rs.M())), rs.sm_mbf;
          }
          toObject(r = !1) {
            return rs.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(rs.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(rs.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new rs();
            return rs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(rs.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return rs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(rs.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              rs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_ManifestAppBranchInfo_Response";
          }
        }
        class is extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              is.prototype.appid || i.Sg(is.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              is.sm_m ||
                (is.sm_m = {
                  proto: is,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    buildid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              is.sm_m
            );
          }
          static MBF() {
            return is.sm_mbf || (is.sm_mbf = i.w0(is.M())), is.sm_mbf;
          }
          toObject(r = !1) {
            return is.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(is.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(is.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new is();
            return is.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(is.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return is.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(is.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              is.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMDSAdmin_AppBuildUpdated_Notification";
          }
        }
        class ts extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ts.prototype.appid || i.Sg(ts.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ts.sm_m ||
                (ts.sm_m = {
                  proto: ts,
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
              ts.sm_m
            );
          }
          static MBF() {
            return ts.sm_mbf || (ts.sm_mbf = i.w0(ts.M())), ts.sm_mbf;
          }
          toObject(r = !1) {
            return ts.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ts.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ts.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ts();
            return ts.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ts.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ts.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ts.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ts.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CBuildManagement_SetAppBuildLiveConfirmed_Request";
          }
        }
        class bl extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return bl.toObject(r, this);
          }
          static toObject(r, t) {
            return r ? { $jspbMessageInstance: t } : {};
          }
          static fromObject(r) {
            return new bl();
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new bl();
            return bl.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return r;
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return bl.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {}
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              bl.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CBuildManagement_SetAppBuildLiveConfirmed_Response";
          }
        }
        class as extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              as.prototype.property_type || i.Sg(as.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              as.sm_m ||
                (as.sm_m = {
                  proto: as,
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
              as.sm_m
            );
          }
          static MBF() {
            return as.sm_mbf || (as.sm_mbf = i.w0(as.M())), as.sm_mbf;
          }
          toObject(r = !1) {
            return as.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(as.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(as.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new as();
            return as.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(as.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return as.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(as.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              as.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetCDNForVideo_Request";
          }
        }
        class ss extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ss.prototype.cdn_hostname || i.Sg(ss.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ss.sm_m ||
                (ss.sm_m = {
                  proto: ss,
                  fields: {
                    cdn_hostname: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ss.sm_m
            );
          }
          static MBF() {
            return ss.sm_mbf || (ss.sm_mbf = i.w0(ss.M())), ss.sm_mbf;
          }
          toObject(r = !1) {
            return ss.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ss.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ss.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ss();
            return ss.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ss.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ss.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ss.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ss.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_GetCDNForVideo_Response";
          }
        }
        class ls extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ls.prototype.property_type || i.Sg(ls.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ls.sm_m ||
                (ls.sm_m = {
                  proto: ls,
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
              ls.sm_m
            );
          }
          static MBF() {
            return ls.sm_mbf || (ls.sm_mbf = i.w0(ls.M())), ls.sm_mbf;
          }
          toObject(r = !1) {
            return ls.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ls.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ls.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ls();
            return ls.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ls.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ls.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ls.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ls.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_PickSingleContentServer_Request";
          }
        }
        class ms extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ms.prototype.hostname || i.Sg(ms.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ms.sm_m ||
                (ms.sm_m = {
                  proto: ms,
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
              ms.sm_m
            );
          }
          static MBF() {
            return ms.sm_mbf || (ms.sm_mbf = i.w0(ms.M())), ms.sm_mbf;
          }
          toObject(r = !1) {
            return ms.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(ms.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(ms.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new ms();
            return ms.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(ms.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return ms.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(ms.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              ms.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentServerDirectory_PickSingleContentServer_Response";
          }
        }
        class es extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              es.prototype.appid || i.Sg(es.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              es.sm_m ||
                (es.sm_m = {
                  proto: es,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              es.sm_m
            );
          }
          static MBF() {
            return es.sm_mbf || (es.sm_mbf = i.w0(es.M())), es.sm_mbf;
          }
          toObject(r = !1) {
            return es.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(es.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(es.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new es();
            return es.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(es.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return es.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(es.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              es.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDepotContentDetection_GetDetectedContentSingleApp_Request";
          }
        }
        class Bs extends l.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Bs.prototype.detected_anticheat || i.Sg(Bs.M()),
              l.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bs.sm_m ||
                (Bs.sm_m = {
                  proto: Bs,
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
              Bs.sm_m
            );
          }
          static MBF() {
            return Bs.sm_mbf || (Bs.sm_mbf = i.w0(Bs.M())), Bs.sm_mbf;
          }
          toObject(r = !1) {
            return Bs.toObject(r, this);
          }
          static toObject(r, t) {
            return i.BT(Bs.M(), r, t);
          }
          static fromObject(r) {
            return i.Uq(Bs.M(), r);
          }
          static deserializeBinary(r) {
            let t = new (a().BinaryReader)(r),
              s = new Bs();
            return Bs.deserializeBinaryFromReader(s, t);
          }
          static deserializeBinaryFromReader(r, t) {
            return i.zj(Bs.MBF(), r, t);
          }
          serializeBinary() {
            var r = new (a().BinaryWriter)();
            return Bs.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, t) {
            i.i0(Bs.M(), r, t);
          }
          serializeBase64String() {
            var r = new (a().BinaryWriter)();
            return (
              Bs.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CDepotContentDetection_GetDetectedContentSingleApp_Response";
          }
        }
        var Sl;
        ((m) => {
          function r(t, s, b) {
            return t.SendMsg(
              "BuildManagement.SetAppBuildLiveConfirmed#1",
              (0, B.I8)(ts, s, b),
              bl,
              { ePrivilege: 1 },
            );
          }
          m.SetAppBuildLiveConfirmed = r;
        })(Sl || (Sl = {}));
        var Rl;
        ((m) => {
          function r(h, K) {
            return h.SendNotification(
              "MDSAdmin.ReloadOriginStorageInfo#1",
              (0, B.I8)(Es, K),
              { ePrivilege: 1 },
            );
          }
          m.ReloadOriginStorageInfo = r;
          function t(h, K) {
            return h.SendNotification(
              "MDSAdmin.CSFailedToReadChunkFromStorage#1",
              (0, B.I8)($t, K),
              { ePrivilege: 1 },
            );
          }
          m.CSFailedToReadChunkFromStorage = t;
          function s(h, K) {
            return h.SendNotification(
              "MDSAdmin.InvalidateDepotMetadata#1",
              (0, B.I8)(ea, K),
              { ePrivilege: 1 },
            );
          }
          m.InvalidateDepotMetadata = s;
          function b(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.RequestAppContentPurge#1",
              (0, B.I8)(Xt, K, v),
              Ss,
              { ePrivilege: 5 },
            );
          }
          m.RequestAppContentPurge = b;
          function u(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.GetAppContentPurgeStatus#1",
              (0, B.I8)(Vt, K, v),
              Yt,
              { ePrivilege: 1 },
            );
          }
          m.GetAppContentPurgeStatus = u;
          function y(h, K) {
            return h.SendNotification(
              "MDSAdmin.CSPurgeDepot#1",
              (0, B.I8)(Zt, K),
              { ePrivilege: 1 },
            );
          }
          m.CSPurgeDepot = y;
          function n(h, K) {
            return h.SendNotification(
              "MDSAdmin.NewChunkAnnouncement#1",
              (0, B.I8)(Lt, K),
              { ePrivilege: 1 },
            );
          }
          m.NewChunkAnnouncement = n;
          function O(h, K) {
            return h.SendNotification(
              "MDSAdmin.MDSFlushDepotCache#1",
              (0, B.I8)(Jt, K),
              { ePrivilege: 1 },
            );
          }
          m.MDSFlushDepotCache = O;
          function F(h, K) {
            return h.SendNotification(
              "MDSAdmin.MDSFlushManifestVersion#1",
              (0, B.I8)(Qt, K),
              { ePrivilege: 1 },
            );
          }
          m.MDSFlushManifestVersion = F;
          function x(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.GetDepotDownloadBytes#1",
              (0, B.I8)(Ga, K, v),
              Ea,
              { ePrivilege: 1 },
            );
          }
          m.GetDepotDownloadBytes = x;
          function Y(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.BeginOriginMigrationJob#1",
              (0, B.I8)(Sa, K, v),
              el,
              { ePrivilege: 1 },
            );
          }
          m.BeginOriginMigrationJob = Y;
          function Z(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.GetDepotChunkLocation#1",
              (0, B.I8)(Ra, K, v),
              oa,
              { ePrivilege: 1 },
            );
          }
          m.GetDepotChunkLocation = Z;
          function bs(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.SetAppBuildSortOrder#1",
              (0, B.I8)(Ca, K, v),
              Bl,
              { ePrivilege: 1 },
            );
          }
          m.SetAppBuildSortOrder = bs;
          function ds(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.GetManifestAppBranchInfo#1",
              (0, B.I8)(_a, K, v),
              rs,
              { ePrivilege: 1 },
            );
          }
          m.GetManifestAppBranchInfo = ds;
          function br(h, K) {
            return h.SendNotification(
              "MDSAdmin.AppBuildUpdated#1",
              (0, B.I8)(is, K),
              { ePrivilege: 1 },
            );
          }
          m.AppBuildUpdated = br;
          function zs(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.ChunkReceived#1",
              (0, B.I8)(Tt, K, v),
              kt,
              { ePrivilege: 1 },
            );
          }
          m.ChunkReceived = zs;
          function C(h, K, v) {
            return h.SendMsg(
              "MDSAdmin.ChunkStored#1",
              (0, B.I8)(Nt, K, v),
              Rs,
              { ePrivilege: 1 },
            );
          }
          m.ChunkStored = C;
          function ws(h, K) {
            return h.SendNotification(
              "MDSAdmin.ChunkStorageFailure#1",
              (0, B.I8)(Pt, K),
              { ePrivilege: 1 },
            );
          }
          m.ChunkStorageFailure = ws;
        })(Rl || (Rl = {}));
        var ol;
        ((m) => {
          function r(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetCDNConfigurations#1",
              (0, B.I8)(Ht, W, f),
              qt,
              { ePrivilege: 1 },
            );
          }
          m.GetCDNConfigurations = r;
          function t(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.UpdateCDNConfig#1",
              (0, B.I8)(At, W, f),
              os,
              { ePrivilege: 1 },
            );
          }
          m.UpdateCDNConfig = t;
          function s(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.UpdateCDNStats#1",
              (0, B.I8)(Dt, W, f),
              Gt,
              { ePrivilege: 1 },
            );
          }
          m.UpdateCDNStats = s;
          function b(j, W) {
            return j.SendNotification(
              "ContentServerConfig.ContentServerStatsBroadcast#1",
              (0, B.I8)(Et, W),
              { ePrivilege: 1 },
            );
          }
          m.ContentServerStatsBroadcast = b;
          function u(j, W) {
            return j.SendNotification(
              "ContentServerConfig.CMLoadBroadcast#1",
              (0, B.I8)(Ct, W),
              { ePrivilege: 1 },
            );
          }
          m.CMLoadBroadcast = u;
          function y(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCSConfig#1",
              (0, B.I8)(Ba, W, f),
              ba,
              { ePrivilege: 1 },
            );
          }
          m.GetSteamCSConfig = y;
          function n(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.UpdateSteamCSConfig#1",
              (0, B.I8)(za, W, f),
              Cs,
              { ePrivilege: 4 },
            );
          }
          m.UpdateSteamCSConfig = n;
          function O(j, W) {
            return j.SendNotification(
              "ContentServerConfig.SteamCSConfigUpdateNotification#1",
              (0, B.I8)(ga, W),
              { ePrivilege: 1 },
            );
          }
          m.SteamCSConfigUpdateNotification = O;
          function F(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCSConfigHistory#1",
              (0, B.I8)(ua, W, f),
              da,
              { ePrivilege: 4 },
            );
          }
          m.GetSteamCSConfigHistory = F;
          function x(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.UpdateCSIPFilterRanges#1",
              (0, B.I8)(wa, W, f),
              _s,
              { ePrivilege: 1 },
            );
          }
          m.UpdateCSIPFilterRanges = x;
          function Y(j, W) {
            return j.SendNotification(
              "ContentServerConfig.AnonymousDepotsBroadcast#1",
              (0, B.I8)(ra, W),
              { ePrivilege: 1 },
            );
          }
          m.AnonymousDepotsBroadcast = Y;
          function Z(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCSNames#1",
              (0, B.I8)(rl, W, f),
              ya,
              { ePrivilege: 1 },
            );
          }
          m.GetSteamCSNames = Z;
          function bs(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.AllocateSteamCacheNode#1",
              (0, B.I8)(ja, W, f),
              Wa,
              { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }
          m.AllocateSteamCacheNode = bs;
          function ds(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCacheConfig#1",
              (0, B.I8)(Ua, W, f),
              xa,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }
          m.GetSteamCacheConfig = ds;
          function br(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.UpdateSteamCacheConfig#1",
              (0, B.I8)(Ia, W, f),
              tl,
              { ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }
          m.UpdateSteamCacheConfig = br;
          function zs(j, W) {
            return j.SendNotification(
              "ContentServerConfig.SteamCacheConfigUpdateNotification#1",
              (0, B.I8)(Ka, W),
              { ePrivilege: 1 },
            );
          }
          m.SteamCacheConfigUpdateNotification = zs;
          function C(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.RevSteamCacheAPIKey#1",
              (0, B.I8)($a, W, f),
              al,
              { ePrivilege: 4 },
            );
          }
          m.RevSteamCacheAPIKey = C;
          function ws(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCacheConfigHistory#1",
              (0, B.I8)(Oa, W, f),
              ha,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 4 },
            );
          }
          m.GetSteamCacheConfigHistory = ws;
          function h(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCacheNames#1",
              (0, B.I8)(il, W, f),
              na,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 4 },
            );
          }
          m.GetSteamCacheNames = h;
          function K(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.AllocateOpenCacheNode#1",
              (0, B.I8)(Xa, W, f),
              Va,
              { ePrivilege: 1 },
            );
          }
          m.AllocateOpenCacheNode = K;
          function v(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetOpenCacheConfig#1",
              (0, B.I8)(La, W, f),
              Ja,
              { ePrivilege: 1 },
            );
          }
          m.GetOpenCacheConfig = v;
          function js(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.UpdateOpenCacheConfig#1",
              (0, B.I8)(Na, W, f),
              ll,
              { ePrivilege: 4 },
            );
          }
          m.UpdateOpenCacheConfig = js;
          function Il(j, W) {
            return j.SendNotification(
              "ContentServerConfig.OpenCacheConfigUpdateNotification#1",
              (0, B.I8)(Pa, W),
              { ePrivilege: 1 },
            );
          }
          m.OpenCacheConfigUpdateNotification = Il;
          function Ql(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetOpenCacheConfigHistory#1",
              (0, B.I8)(Qa, W, f),
              Ta,
              { ePrivilege: 4 },
            );
          }
          m.GetOpenCacheConfigHistory = Ql;
          function Tl(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetOpenCacheNames#1",
              (0, B.I8)(sl, W, f),
              Ya,
              { ePrivilege: 1 },
            );
          }
          m.GetOpenCacheNames = Tl;
          function kl(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.SetSteamCacheClientFilters#1",
              (0, B.I8)(Ha, W, f),
              ml,
              { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          m.SetSteamCacheClientFilters = kl;
          function Nl(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.SetSteamCachePerformanceStats#1",
              (0, B.I8)(pa, W, f),
              va,
              { ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          m.SetSteamCachePerformanceStats = Nl;
          function Pl(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetSteamCacheNodeParams#1",
              (0, B.I8)(qa, W, f),
              Aa,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          m.GetSteamCacheNodeParams = Pl;
          function Hl(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.CheckManifestRequestCode#1",
              (0, B.I8)(ia, W, f),
              ta,
              { ePrivilege: 1 },
            );
          }
          m.CheckManifestRequestCode = Hl;
          function pl(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.GetManifestRequestCode#1",
              (0, B.I8)(aa, W, f),
              sa,
              { ePrivilege: 1 },
            );
          }
          m.GetManifestRequestCode = pl;
          function vl(j, W, f) {
            return j.SendMsg(
              "ContentServerConfig.IsDepotAllowedSteamChina#1",
              (0, B.I8)(la, W, f),
              ma,
              { ePrivilege: 1 },
            );
          }
          m.IsDepotAllowedSteamChina = vl;
        })(ol || (ol = {}));
        var Cl;
        ((m) => {
          function r(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.GetCDNForVideo#1",
              (0, B.I8)(as, Y, Z),
              ss,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetCDNForVideo = r;
          function t(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.PickSingleContentServer#1",
              (0, B.I8)(ls, Y, Z),
              ms,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.PickSingleContentServer = t;
          function s(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.GetServersForSteamPipe#1",
              (0, B.I8)(Kr, Y, Z),
              $r,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetServersForSteamPipe = s;
          function b(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.GetDepotPatchInfo#1",
              (0, B.I8)(Xr, Y, Z),
              Vr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetDepotPatchInfo = b;
          function u(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.GetClientUpdateHosts#1",
              (0, B.I8)(Yr, Y, Z),
              Zr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.GetClientUpdateHosts = u;
          function y(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.GetManifestRequestCode#1",
              (0, B.I8)(Lr, Y, Z),
              Jr,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          m.GetManifestRequestCode = y;
          function n(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.GetCDNAuthToken#1",
              (0, B.I8)(Qr, Y, Z),
              Tr,
              { bConstMethod: !0, ePrivilege: 2 },
            );
          }
          m.GetCDNAuthToken = n;
          function O(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.RequestPeerContentServer#1",
              (0, B.I8)(kr, Y, Z),
              Nr,
              { ePrivilege: 1 },
            );
          }
          m.RequestPeerContentServer = O;
          function F(x, Y, Z) {
            return x.SendMsg(
              "ContentServerDirectory.GetPeerContentInfo#1",
              (0, B.I8)(Pr, Y, Z),
              Hr,
              { ePrivilege: 1 },
            );
          }
          m.GetPeerContentInfo = F;
        })(Cl || (Cl = {}));
        var _l;
        ((m) => {
          function r(s, b, u) {
            return s.SendMsg(
              "DepotContentDetection.GetAllDetectedAppContent#1",
              (0, B.I8)(pr, b, u),
              vr,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          m.GetAllDetectedAppContent = r;
          function t(s, b, u) {
            return s.SendMsg(
              "DepotContentDetection.GetDetectedContentSingleApp#1",
              (0, B.I8)(es, b, u),
              Bs,
              { bConstMethod: !0, ePrivilege: 7 },
            );
          }
          m.GetDetectedContentSingleApp = t;
        })(_l || (_l = {}));
        var Lm = w(64238),
          Jm = w.n(Lm);
        function Qm(m, r, t) {
          const s = new Map();
          return (
            m.forEach((b) => {
              Object.entries(b.components).forEach(([u, y]) => {
                s.set(y, !1);
              });
            }),
            r.forEach((b) => {
              Object.entries(b.components).forEach(([u, y]) => {
                s.set(y, !1);
              });
            }),
            t.forEach((b, u) => {
              s.has(u) && s.set(u, b);
            }),
            s
          );
        }
        function rm(m, r, t) {
          let s = !1;
          r.forEach((u) => {
            m.get(u) && (s = !0);
          });
          let b = !1;
          return (
            t.forEach((u) => {
              m.get(u) && (b = !0);
            }),
            s && b
          );
        }
        function Tm(m) {
          const {
              rgCommonRedistAllPlatforms: r,
              rgCommonRedistWindows: t,
              rgCheckedDepots: s,
              nDetectedGameEngine: b,
            } = m,
            u = (0, c.useMemo)(() => new Map(r), [r]),
            y = (0, c.useMemo)(() => new Map(t), [t]),
            [n, O] = (0, c.useState)(Qm(u, y, new Map(s))),
            [F, x] = (0, c.useMemo)(() => {
              const zs = [],
                C = [];
              return (
                y.forEach((ws) => {
                  ws.category == "directx"
                    ? Object.entries(ws.components).forEach(([h, K]) => {
                        zs.push(K);
                      })
                    : ws.category == "vc" &&
                      Object.entries(ws.components).forEach(([h, K]) => {
                        C.push(K);
                      });
                }),
                [zs, C]
              );
            }, [y]),
            [Y, Z] = (0, c.useState)(rm(n, F, x)),
            bs = (zs, C) => {
              const ws = new Map(n);
              ws.set(zs, C), O(ws), Z(rm(ws, F, x));
              const h = {};
              ws.forEach((K, v) => {
                h[v] = K ? 1 : 0;
              }),
                window.UpdateCommonRedistsReact(h);
            },
            ds = u.size > 0,
            br = b == Zm;
          return (0, e.jsxs)("div", {
            children: [
              ds &&
                (0, e.jsx)(im, {
                  name: (0, g.we)("#StoreAdmin_Platform_AllPlatforms"),
                  categories: u,
                  checkedState: n,
                  setChecked: bs,
                }),
              br && (0, e.jsx)(km, { checked: Y }),
              (0, e.jsx)(im, {
                name: (0, g.we)("#StoreAdmin_Platform_Windows"),
                categories: y,
                checkedState: n,
                setChecked: bs,
              }),
            ],
          });
        }
        function km(m) {
          const { checked: r } = m;
          return (0, e.jsxs)("div", {
            className: Fl.DXVCNotice,
            children: [
              !r &&
                (0, e.jsx)("div", { className: Fl.DXVCNoticeIconUnchecked }),
              r && (0, e.jsx)("div", { className: Fl.DXVCNoticeIconChecked }),
              (0, e.jsx)("div", {
                className: Jm()(
                  Fl.DXVCNoticeText,
                  r ? Fl.DXVCNoticeTextChecked : Fl.DXVCNoticeTextUnchecked,
                ),
                children: (0, g.we)(
                  "#StoreAdmin_Game_Engine_Requires_DirectX_VC",
                  (0, g.we)("#StoreAdmin_GameEngine_Type_unreal"),
                ),
              }),
            ],
          });
        }
        function im(m) {
          const { name: r, categories: t, checkedState: s, setChecked: b } = m,
            u = (0, c.useMemo)(() => {
              let y = [];
              return (
                t.forEach((n, O) =>
                  y.push(
                    (0, e.jsx)(
                      Nm,
                      { name: O, category: n, checkedState: s, setChecked: b },
                      n.category,
                    ),
                  ),
                ),
                y
              );
            }, [t, s, b]);
          return (0, e.jsxs)("div", {
            className: "section",
            children: [
              (0, e.jsx)("h2", { children: r }),
              (0, e.jsx)("div", { className: "grayRule" }),
              ...u,
            ],
          });
        }
        function Nm(m) {
          const { name: r, category: t, checkedState: s, setChecked: b } = m,
            u = Object.entries(t.components).map(([y, n]) =>
              (0, e.jsx)(
                "li",
                {
                  children: (0, e.jsx)(Pm, {
                    name: y,
                    depotID: n,
                    checked: s.get(n),
                    setChecked: b,
                  }),
                },
                n,
              ),
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { children: r }),
              (0, e.jsxs)("ul", { children: [...u] }),
            ],
          });
        }
        function Pm(m) {
          const { name: r, depotID: t, checked: s, setChecked: b } = m,
            u = (t == 228987 || t == 228986) && !s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("input", {
                id: t.toString(),
                type: "checkbox",
                checked: s,
                disabled: u,
                onChange: (y) => b(t, y.currentTarget.checked),
              }),
              (0, e.jsx)("label", { htmlFor: t.toString(), children: r }),
            ],
          });
        }
        var Hm = w(65596),
          pm = w(40497),
          tm = w(67705);
        function am(m, r) {
          let t = [];
          switch (m) {
            case "image_large":
              r.item_image_large && t.push(r.item_image_large);
              break;
            case "image_small":
              r.item_image_small && t.push(r.item_image_small);
              break;
            case "movie_large":
              r.item_movie_webm && t.push(r.item_movie_webm),
                r.item_movie_mp4 && t.push(r.item_movie_mp4);
              break;
          }
          return t;
        }
        function sm(m, r) {
          return [`InProgressItemDefinition_${m}_${r}`];
        }
        function vm(m, r) {
          const t = (0, ul.I)({
            queryKey: sm(m, r),
            queryFn: async () => {
              const s = `${hs.TS.PARTNER_BASE_URL}communityitems/ajaxgetcommunityitemdef/${m}/${r}`,
                b = new FormData();
              b.append("sessionid", (0, tm.KC)());
              const u = await Vs().post(s, b, { withCredentials: !0 });
              return u?.status == 200 && u.data?.success == Ws.R
                ? u.data.def
                : (console.error(
                    "useGetInProgressCommunityItemDefinition: ",
                    u?.data.error,
                  ),
                  null);
            },
            staleTime: 1 / 0,
            initialData: (0, tm.Tc)("item_def", "application_config"),
          });
          return t.isLoading ? null : t.data;
        }
        function qm(m, r) {
          pm.L.invalidateQueries({ queryKey: sm(m, r) });
        }
        var Ks = w(14947),
          $l = w(27066),
          Am = w(38410),
          lm = w(9472),
          Dm = w(34592),
          dl = w(51746),
          cs = w(72849),
          Gm = w(25279),
          Em = Object.defineProperty,
          Sm = Object.getOwnPropertyDescriptor,
          Ll = (m, r, t, s) => {
            for (
              var b = s > 1 ? void 0 : s ? Sm(r, t) : r, u = m.length - 1, y;
              u >= 0;
              u--
            )
              (y = m[u]) && (b = (s ? y(r, t, b) : y(b)) || b);
            return s && b && Em(r, t, b), b;
          };
        class Xl extends lm.q {
          m_currentImageOptionKey = void 0;
          m_fnGetImageOptions;
          constructor(r, t, s, b) {
            const u = (0, dl.II)(s);
            super(r, r.name, t, s.src, u),
              (0, Ks.Gn)(this),
              (this.m_fnGetImageOptions = b);
          }
          IsValidAssetType(r, t) {
            const s = t && t != this.fileType,
              b = this.IsFileTypeSupported(this.fileType),
              u = this.GetCurrentImageOption();
            let y = "";
            return (
              b
                ? s &&
                  (y = (0, g.we)("#ImageUpload_InvalidFormat", (0, dl.EG)(t)))
                : (y = (0, g.we)("#ImageUpload_InvalidFormatSelected")),
              u || (y = (0, g.we)("#CommunityItems_NoValidAsset_Error")),
              u?.bDuplicateAssetType &&
                (y = (0, g.we)(
                  "#CommunityItems_DuplicateAssetType_Error",
                  u.fnGetLabelText(),
                )),
              { error: y, needsCrop: !1 }
            );
          }
          BIsOriginalMinimumDimensions(r) {
            return !0;
          }
          BIsVideo() {
            return Gm.Ho.includes(this.fileType);
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
              ? r.find((t) => t.sKey === this.m_currentImageOptionKey)
              : r.find((t) => this.filename === t.sKey);
          }
          SetCurrentImageOption(r) {
            this.m_currentImageOptionKey = r?.sKey;
          }
          FileTypeMatchesImageTypes(r) {
            switch (this.fileType) {
              case cs.bg.iS:
              case cs.bg.dU:
              case cs.bg.wD:
                return !0;
              default:
                return !1;
            }
          }
          IsFileTypeSupported(r) {
            switch (r) {
              case cs.bg.iS:
              case cs.bg.dU:
              case cs.bg.wD:
              case cs.bg.CK:
              case cs.bg.nn:
              case cs.bg.pJ:
                return !0;
              default:
                return !1;
            }
          }
        }
        Ll([Ks.sH], Xl.prototype, "m_currentImageOptionKey", 2),
          Ll([Ks.EW], Xl.prototype, "ImageOptions", 1),
          Ll([Ks.XI], Xl.prototype, "SetCurrentImageOption", 1);
        var Rm = Object.defineProperty,
          om = Object.getOwnPropertyDescriptor,
          fl = (m, r, t, s) => {
            for (
              var b = s > 1 ? void 0 : s ? om(r, t) : r, u = m.length - 1, y;
              u >= 0;
              u--
            )
              (y = m[u]) && (b = (s ? y(r, t, b) : y(b)) || b);
            return s && b && Rm(r, t, b), b;
          };
        class Ul extends Am.Vr {
          m_filesToUpload = Ks.sH.array();
          m_strUploadPath = null;
          m_bSynchronousUpload = !1;
          m_rgAssetRequirements = [];
          constructor(r, t, s) {
            super(),
              (0, Ks.Gn)(this),
              (this.m_strUploadPath = r),
              (this.m_bSynchronousUpload = t),
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
            this.m_filesToUpload = Ks.sH.array();
          }
          DeleteUploadImage(r) {
            const t = this.m_filesToUpload.findIndex(
              (s) => r.file == s.file && r.uploadTime == s.uploadTime,
            );
            t >= 0 &&
              (this.m_filesToUpload.splice(t, 1),
              (this.m_filesToUpload = [...this.m_filesToUpload]));
          }
          BGetUploadsAreInSerial() {
            return this.m_bSynchronousUpload;
          }
          async AddImageForLanguage(r, t) {
            if ((0, dl.aL)(r.type) || (0, dl.Uz)(r.type)) {
              const s = await (0, dl.zB)(r, (0, dl.Uz)(r.type));
              if (s) {
                const b = new Xl(r, t, s, () => this.GetImageOptions());
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
              t = new Set();
            for (const s of this.m_filesToUpload.filter(
              (b) => b.status == "pending" || (0, lm.o)(b.status),
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
                    bDuplicateAssetType: !!t.has(b.asset_type),
                  }),
                  t.add(b.asset_type));
              });
            return r;
          }
          async UploadSingleImage(r, t, s, b) {
            let u = null;
            const y = new FormData();
            y.append("assetfile", r.file, t),
              y.append("sessionid", (0, D.KC)());
            const n = r.GetCurrentImageOption();
            if ((y.append("strAssetType", n.asset_type), !(0, dl.ab)(t)))
              return {
                bSuccess: !1,
                elErrorMessage:
                  "Invalid file extension, cannot determine mimetype",
              };
            try {
              u = await Vs().post(this.m_strUploadPath, y, {
                withCredentials: !0,
                headers: { "Content-Type": "multipart/form-data" },
                cancelToken: b,
              });
            } catch (F) {
              console.error((0, Dm.H)(F)?.strErrorMsg);
            }
            return !u.data || u.data.error
              ? {
                  bSuccess: !1,
                  elErrorMessage:
                    u.data.error ??
                    (0, g.we)("#CommunityItems_GenericUpload_Error"),
                }
              : { bSuccess: !0, result: u?.data };
          }
        }
        fl([Ks.sH], Ul.prototype, "m_filesToUpload", 2),
          fl([$l.o], Ul.prototype, "GetUploadImages", 1),
          fl([$l.o], Ul.prototype, "ClearImages", 1),
          fl([$l.o], Ul.prototype, "DeleteUploadImage", 1),
          fl([$l.o], Ul.prototype, "AddImageForLanguage", 1);
        var Cm = w(48127),
          _m = w(32093);
        function re(m) {
          const { appID: r, unItemType: t, rgAssetDefinitions: s } = m,
            b = c.useMemo(() => {
              const y =
                T.TS.PARTNER_BASE_URL +
                `communityitems/ajaxuploadasset/${r}/${t}`;
              return new Ul(y, !0, s);
            }, [r, t, s]),
            u = (y) => {
              y.some((O) => O.bSuccess) && qm(r, t);
            };
          return (0, e.jsx)("div", {
            children: (0, e.jsx)(Cm.O9, {
              elOverrideDragAndDropText: (0, g.we)(
                "#CommunityItems_Upload_Instructions",
              ),
              imageUploader: b,
              rgRealmList: [_m.TU.k_ESteamRealmGlobal],
              fnUploadComplete: u,
            }),
          });
        }
        var ns = w(89925),
          ie = Object.defineProperty,
          te = Object.getOwnPropertyDescriptor,
          mm = (m, r, t, s) => {
            for (
              var b = s > 1 ? void 0 : s ? te(r, t) : r, u = m.length - 1, y;
              u >= 0;
              u--
            )
              (y = m[u]) && (b = (s ? y(r, t, b) : y(b)) || b);
            return s && b && ie(r, t, b), b;
          };
        class Jl {
          m_ItemDefinition = null;
          m_ItemKV = null;
          constructor(r, t) {
            (0, Ks.Gn)(this), this.LoadItemDefinition(r, t);
          }
          LoadItemDefinition(r, t) {
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
              : (this.m_ItemDefinition = t),
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
        mm([Ks.sH], Jl.prototype, "m_ItemDefinition", 2),
          mm([Ks.sH], Jl.prototype, "m_ItemKV", 2);
        function em(m, r) {
          return `${hs.TS.COMMUNITY_ASSETS_BASE_URL}images/items/${m}/${r}`;
        }
        var ae = w(23386);
        function se() {
          return [cs.bg.iS, cs.bg.dU, cs.bg.wD];
        }
        function le() {
          return [cs.bg.nn, cs.bg.pJ];
        }
        function me(m, r, t) {
          return m === ae.Tl ? ee : null;
        }
        const ee = [
            {
              asset_type: "movie_large",
              label: (0, g.we)("#CommunityItems_StartupMovie_Label_Video"),
              width: 1920,
              height: 1200,
              accepted_filetypes: le(),
              is_video: !0,
              guidelines: [
                {
                  strHeader: (0, g.we)(
                    "#CommunityItems_StartupMovie_GuidelineVideo_Header",
                  ),
                  strIntro: (0, g.we)(
                    "#CommunityItems_StartupMovie_GuidelineVideo_Intro",
                  ),
                  rgBulletPoints: [
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_1",
                    ),
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_2",
                    ),
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_3",
                    ),
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineVideo_BulletPoint_4",
                    ),
                  ],
                },
                {
                  strHeader: (0, g.we)(
                    "#CommunityItems_StartupMovie_GuidelineAudio_Header",
                  ),
                  strIntro: (0, g.we)(
                    "#CommunityItems_StartupMovie_GuidelineAudio_Intro",
                  ),
                  rgBulletPoints: [
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_1",
                    ),
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_2",
                    ),
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineAudio_BulletPoint_3",
                    ),
                  ],
                },
              ],
            },
            {
              asset_type: "image_large",
              label: (0, g.we)("#CommunityItems_StartupMovie_Label_Poster"),
              width: 1920,
              height: 1200,
              accepted_filetypes: se(),
              guidelines: [
                {
                  strHeader: (0, g.we)(
                    "#CommunityItems_StartupMovie_GuidelineImage_Header",
                  ),
                  strIntro: (0, g.we)(
                    "#CommunityItems_StartupMovie_GuidelineImage_Intro",
                  ),
                  rgBulletPoints: [
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_2",
                    ),
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_3",
                    ),
                    (0, g.we)(
                      "#CommunityItems_StartupMovie_GuidelineImage_BulletPoint_1",
                    ),
                  ],
                },
              ],
            },
          ],
          Vl = c.createContext(null),
          Be = ({ communityItem: m, assetDefs: r, children: t }) =>
            (0, e.jsx)(Vl.Provider, {
              value: { communityItem: m, assetDefs: r },
              children: t,
            });
        function be(m) {
          const { appID: r, unItemType: t } = m,
            s = vm(r, t);
          if (!s) return null;
          const b = new Jl(s),
            u = me(b.ItemClass, !1, !1);
          if (!u) return null;
          const y = (!b.BIsActive || T.iA.is_support) && !b.BIsDeleted;
          return (0, e.jsx)(Be, {
            communityItem: b,
            assetDefs: u,
            children: (0, e.jsxs)("div", {
              className: ns.AssetEditorContainer,
              children: [y && (0, e.jsx)(we, {}), (0, e.jsx)(Me, {})],
            }),
          });
        }
        function we() {
          const { communityItem: m, assetDefs: r } = c.useContext(Vl),
            s = r
              .flatMap((b) => b.guidelines)
              .map((b, u) =>
                (0, e.jsx)(ue, { guideline: b }, `guideline_${u}`),
              );
          return (0, e.jsxs)("div", {
            className: ns.AssetUploadSection,
            children: [
              (0, e.jsx)("div", {
                className: ns.AssetGuidelinesSection,
                children: s,
              }),
              (0, e.jsx)(re, {
                appID: m.AppID,
                unItemType: m.ItemID,
                rgAssetDefinitions: r,
              }),
            ],
          });
        }
        function ue(m) {
          const { guideline: r } = m;
          return (0, e.jsxs)("div", {
            className: ns.GuidelineCtn,
            children: [
              (0, e.jsx)("div", {
                className: ns.GuidelineHeader,
                children: r.strHeader,
              }),
              (0, e.jsx)("div", {
                className: ns.GuidelineIntro,
                children: r.strIntro,
              }),
              r.rgBulletPoints?.length > 0 &&
                (0, e.jsx)(de, { rgBulletPoints: r.rgBulletPoints }),
            ],
          });
        }
        function de(m) {
          const { rgBulletPoints: r } = m,
            t = r.map((s, b) =>
              (0, e.jsx)("li", { children: s }, `bulletpoint_${b}`),
            );
          return (0, e.jsx)("ul", { children: t });
        }
        function Me() {
          const { communityItem: m, assetDefs: r } = c.useContext(Vl),
            t = r.map((s) => (0, e.jsx)(ze, { assetDef: s }, s.asset_type));
          return (0, e.jsx)("div", {
            className: ns.AssetTypesCtn,
            children: t,
          });
        }
        function ze(m) {
          const { assetDef: r } = m,
            { communityItem: t, assetDefs: s } = c.useContext(Vl);
          return (0, e.jsxs)("div", {
            className: ns.AssetEntryCtn,
            children: [
              (0, e.jsxs)("div", {
                className: ns.AssetTitle,
                children: ["*", r.label],
              }),
              (0, e.jsx)("div", {
                className: ns.AssetPreviewCtn,
                children: r.is_video
                  ? (0, e.jsx)(ye, {
                      rgSources: am(r.asset_type, t.CommunityItemDef),
                      unAppID: t.AppID,
                    })
                  : (0, e.jsx)(ge, {
                      rgSources: am(r.asset_type, t.CommunityItemDef),
                      unAppID: t.AppID,
                    }),
              }),
            ],
          });
        }
        function Bm() {
          return (0, e.jsx)("div", {
            className: ns.PlaceholderAsset,
            children: (0, e.jsx)("div", {
              children: (0, g.we)("#CommunityItems_PlaceholderAsset_Missing"),
            }),
          });
        }
        function ge(m) {
          const { rgSources: r, unAppID: t } = m;
          return r.length
            ? (0, e.jsx)("img", {
                className: ns.AssetPreview,
                src: em(t, r[0]),
              })
            : (0, e.jsx)(Bm, {});
        }
        function ye(m) {
          const { rgSources: r, unAppID: t } = m,
            s = c.useRef(void 0);
          if (
            (c.useEffect(() => {
              s.current && s.current.load();
            }, [r]),
            !r.length)
          )
            return (0, e.jsx)(Bm, {});
          const b = r.map((u, y) =>
            (0, e.jsx)(
              "source",
              { src: em(t, u), type: (0, dl.ab)(u) },
              `video_${y}`,
            ),
          );
          return (0, e.jsx)("video", {
            ref: s,
            className: ns.AssetPreview,
            autoPlay: !0,
            loop: !0,
            muted: !0,
            playsInline: !0,
            controls: !0,
            children: b,
          });
        }
        function ce(m) {
          const {
              unAppID: r,
              bShowSteamChina: t,
              bHasCompletedContentSurvey: s,
            } = m,
            b = { appid: r },
            u = (0, Fs.c2)(b),
            [y, n, O] = c.useMemo(() => {
              if (!u || u.isLoading || !u.data) return ["", "", !1];
              let F = [...u.data.restricted_countries];
              return (
                t || (F = F.filter((x) => x !== "XC")),
                u.data.no_restrictions
                  ? ["", "", !1]
                  : [F?.join(", "), u.data.allowed_countries?.join(", "), !s]
              );
            }, [s, t, u]);
          return !n.length && !y.length
            ? (0, e.jsx)("div", {
                children: (0, g.we)("#AppLanding_RegionRestrictions_None"),
              })
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  n.length > 0 &&
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AppLanding_RegionRestrictions_Allowed",
                        n,
                      ),
                    }),
                  y.length > 0 &&
                    (0, e.jsx)("div", {
                      children: (0, g.we)(
                        "#AppLanding_RegionRestrictions_Blocked",
                        y,
                      ),
                    }),
                  O &&
                    (0, e.jsx)("div", {
                      children: (0, g.oW)(
                        "#AppLanding_RegionRestrictions_ContentSurvey",
                        (0, e.jsx)("a", {
                          href: `${T.TS.PARTNER_BASE_URL}/contentdescriptors/editsurvey/${r}`,
                        }),
                      ),
                    }),
                ],
              });
        }
        const Yl = {
          CommunityItem: (m, r) => `/apps/communityitems/${m}/${r}`,
          AppLanding: (m) => `/apps/landing/${m}`,
          AppInstaller: (m) => `/apps/installer/${m}`,
          AppEconomy: (m) => `/apps/economy/${m}`,
        };
        function je(m) {
          return (0, e.jsxs)(Q.dO, {
            children: [
              (0, e.jsx)(Q.qh, {
                path: Yl.CommunityItem(":appid", ":itemtype"),
                render: (r) =>
                  (0, e.jsx)($.X, {
                    config: {
                      "appadmin-profilecolors": (t) =>
                        (0, e.jsx)(N.Y, { ...t }),
                      "appadmin-communityitemassets": () =>
                        (0, e.jsx)(be, {
                          appID: Number.parseInt(r.match.params.appid),
                          unItemType: Number.parseInt(r.match.params.itemtype),
                        }),
                    },
                  }),
              }),
              (0, e.jsx)(Q.qh, {
                path: Yl.AppLanding(":appid"),
                render: (r) =>
                  (0, e.jsx)($.X, {
                    config: {
                      "storeadmin-releasedateinfo": (t) =>
                        (0, e.jsx)(Hm.M, { ...t }),
                      "storeadmin-applanding-statsrollup": (t) =>
                        (0, e.jsx)(Um, { ...t }),
                      "storeadmin-applanding-demowishlistemails": (t) =>
                        (0, e.jsx)(xm, { ...t }),
                      "storeadmin-editions-editor": (t) =>
                        (0, e.jsx)(Om.H, { ...t }),
                      "appadmin-restrictedcountries": (t) =>
                        (0, e.jsx)(ce, { ...t }),
                    },
                  }),
              }),
              (0, e.jsx)(Q.qh, {
                path: Yl.AppInstaller(":appid"),
                render: (r) =>
                  (0, e.jsx)($.X, {
                    config: {
                      "storeadmin-steamworksredist-edit": (t) =>
                        (0, e.jsx)(Tm, { ...t }),
                    },
                  }),
              }),
              (0, e.jsx)(Q.qh, {
                path: Yl.AppEconomy(":appid"),
                render: (r) =>
                  (0, e.jsx)($.X, {
                    config: {
                      "storeadmin-steamworkseconomy-propertyedit": (t) =>
                        (0, e.jsx)($m, { ...t }),
                    },
                  }),
              }),
            ],
          });
        }
      },
      58832: (wr, R, w) => {
        "use strict";
        w.d(R, { E8: () => e, Z2: () => N, ct: () => Q });
        function e($, c) {
          const D = new Date($ * 1e3),
            U = c ? new Date(c * 1e3) : new Date(D);
          c || U.setDate(D.getDate() + 6);
          const g = D.toLocaleString("en-US", { month: "short" }),
            G = D.getDate(),
            X = U.toLocaleString("en-US", { month: "short" }),
            B = U.getDate();
          return g === X ? `${g} ${G} - ${B}` : `${g} ${G} - ${X} ${B}`;
        }
        function N($) {
          let c = Q($);
          return c.endsWith("M") || c.endsWith("K")
            ? `$${c}`
            : new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(Number(c));
        }
        function Q($) {
          let c;
          return (
            Math.abs($) >= 1e6
              ? (c = ($ / 1e6).toFixed(1) + "M")
              : Math.abs($) >= 1e3
                ? (c = ($ / 1e3).toFixed(1) + "K")
                : (c = $.toFixed(2)),
            c
          );
        }
      },
      28763: (wr, R, w) => {
        "use strict";
        w.d(R, { M: () => N, o: () => e });
        const e = "America/Los_Angeles";
        function N(Q) {
          const c = w(87937).unix(Q).tz(e);
          return (
            c.seconds(0),
            c.minutes(0),
            c.hours(10),
            c.unix() < Q && c.hours(34),
            c.unix()
          );
        }
      },
      7742: (wr, R, w) => {
        "use strict";
        w.d(R, { x0: () => N, yI: () => Q });
        async function e($) {
          try {
            return await $;
          } catch (c) {
            console.error(c);
            return;
          }
        }
        function N() {
          let $, c;
          return {
            promise: new Promise((U, g) => {
              ($ = U), (c = g);
            }),
            resolve: $,
            reject: c,
          };
        }
        function Q($) {
          return new Promise((c) => setTimeout(c, $));
        }
      },
      23386: (wr, R, w) => {
        "use strict";
        w.d(R, { Ed: () => E, Tl: () => Ar, jE: () => G, xw: () => H });
        const e = 0,
          N = 1,
          Q = 2,
          $ = 3,
          c = 4,
          D = 5,
          U = 6,
          g = 7,
          G = 8,
          X = 9,
          B = 10,
          E = 11,
          Ms = 12,
          I = 13,
          V = 14,
          H = 15,
          J = 16,
          Ar = 17;
      },
      29522: (wr, R, w) => {
        "use strict";
        w.d(R, { $5: () => U, _Z: () => $, h0: () => D });
        var e = w(40358),
          N = w(44420),
          Q = w(90626);
        function $(X) {
          const { data: B } = (0, e.J$)(X);
          return (0, Q.useMemo)(
            () =>
              B
                ? B.item_type == N.c6.qI
                  ? [B.appid]
                  : B.included_appids || []
                : [],
            [B],
          );
        }
        function c(X) {
          if (!X?.length) return [];
          const B = X.map((E) => E.creator_clan_account_id).filter((E) => !!E);
          return Array.from(new Set(B));
        }
        function D(X) {
          const { data: B } = (0, e.J$)(X);
          return (0, Q.useMemo)(() => {
            if (B && B.related_items && B.related_items.parent_appid)
              return { appid: B.related_items.parent_appid };
          }, [B]);
        }
        function U(X) {
          return (0, Q.useMemo)(() => (X ? { appid: X } : void 0), [X]);
        }
        function g(X) {
          return useMemo(() => (X ? { packageid: X } : void 0), [X]);
        }
        function G(X) {
          return useMemo(() => (X ? { bundleid: X } : void 0), [X]);
        }
      },
      88034: (wr, R, w) => {
        "use strict";
        w.d(R, { Gw: () => c, Lk: () => D, ai: () => $, mm: () => Q });
        var e = w(14947);
        const N = e.sH.box(void 0);
        function Q() {
          return N.get();
        }
        function $(U) {
          (0, e.h5)(() => N.set(U));
        }
        function c() {
          const U = N.get();
          return U || Math.floor(Date.now() / 1e3);
        }
        function D() {
          const U = N.get();
          return U ? new Date(U * 1e3) : new Date();
        }
      },
      50109: (wr, R, w) => {
        "use strict";
        w.d(R, { E: () => Ms, O: () => E });
        var e = w(14947),
          N = w(65946),
          Q = w(99412),
          $ = w(41635),
          c = w(27066),
          D = w(3166),
          U = w(38585),
          g = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          X = (I, V, H, J) => {
            for (
              var Ar = J > 1 ? void 0 : J ? G(V, H) : V, Fs = I.length - 1, ys;
              Fs >= 0;
              Fs--
            )
              (ys = I[Fs]) && (Ar = (J ? ys(V, H, Ar) : ys(Ar)) || Ar);
            return J && Ar && g(V, H, Ar), Ar;
          };
        const B = class Kl {
          m_eCurLang = (0, Q.sfN)(D.TS.LANGUAGE);
          m_rgHasData = (0, $.$Y)([], Q.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new U.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(V) {
            return this.m_eCurLang != V
              ? ((this.m_eCurLang = V), this.GetCallback().Dispatch(V), !0)
              : !1;
          }
          SetHasLanguage(V) {
            V.forEach((H, J) => {
              this.m_rgHasData[J] != H && (this.m_rgHasData[J] = H);
            });
          }
          BHasLanguageData(V) {
            return this.m_rgHasData[V];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(V) {
            V != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = V);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              Kl.s_globalSingletonStore ||
                (Kl.s_globalSingletonStore = new Kl()),
              Kl.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        X([e.sH], B.prototype, "m_eCurLang", 2),
          X([e.sH], B.prototype, "m_rgHasData", 2),
          X([e.sH], B.prototype, "m_bHasLocalizationContext", 2),
          X([c.o], B.prototype, "GetCurEditLanguage", 1),
          X([c.o], B.prototype, "SetCurEditLanguage", 1),
          X([e.XI.bound], B.prototype, "SetHasLanguage", 1),
          X([c.o], B.prototype, "BHasLanguageData", 1);
        let E = B;
        function Ms() {
          return (0, N.q3)(() => E.Get().GetCurEditLanguage());
        }
      },
      7582: (wr, R, w) => {
        "use strict";
        w.d(R, { HD: () => g, P_: () => G, f1: () => I, sB: () => Ms });
        var e = w(19367),
          N = w.n(e),
          Q = w(90626),
          $ = w(88034),
          c = w(47689),
          D = w(77291);
        class U {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, $.mm)();
          }
          set nOverrideDateNow(J) {
            (0, $.ai)(J);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, $.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, $.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, $.mm)();
          }
          ParseDevOverrides(J) {
            if (!J || J.length == 0) return;
            new URLSearchParams(J[0] == "?" ? J.substring(1) : J).has("t");
          }
        }
        const g = new U();
        (0, D.V)("g_EventCalendarDevFeatures", g);
        function G(H = 1) {
          const [J, Ar] = Q.useState(() => E()),
            Fs = (0, c.m)("useTimeNowWithOverride"),
            ys = Q.useCallback(() => {
              Fs.token.reason || Ar(E());
            }, []);
          return (
            Q.useEffect(() => {
              const wl = 1e3 * H,
                L = Date.now() % wl,
                T = wl - L,
                k = window.setTimeout(ys, T);
              return () => {
                window.clearTimeout(k);
              };
            }, [J, H, ys]),
            J
          );
        }
        const B = Math.floor(new Date().getTime() / 1e3);
        function E() {
          const H = Math.floor(Date.now() / 1e3);
          return g.nOverrideDateNow ? g.nOverrideDateNow + (H - B) : H;
        }
        function Ms() {
          return g.nOverrideDateNow ?? B;
        }
        function I() {
          return Q.useMemo(() => Ms(), []);
        }
        function V() {
          return React.useMemo(() => g.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      84676: (wr, R, w) => {
        "use strict";
        w.d(R, {
          G6: () => E,
          Gg: () => V,
          MS: () => Fs,
          Ow: () => I,
          Sq: () => G,
          eR: () => X,
          gF: () => ys,
          ik: () => B,
          t7: () => Ms,
          zX: () => Ar,
        });
        var e = w(41735),
          N = w.n(e),
          Q = w(90626),
          $ = w(72604),
          c = w(44420),
          D = w(54963),
          U = w(10142);
        function g(L, T, k = !0) {
          const p = k
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            _ = k || CStoreItemCache.Get().BHasStoreItem(L, T, p) ? L : null,
            [S, gs] = E(_, T, p),
            [us, Us] = useState(null),
            [Os, $s] = E(us, T, p);
          useEffect(() => {
            S?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              Us(S.GetParentAppID());
          }, [S]);
          let Ws = S?.GetShortDescription()
            ? StripBBCodeTags(S.GetShortDescription())
            : "";
          (!Ws || Ws.length === 0) &&
            Os &&
            (Ws = Os?.GetShortDescription()
              ? StripBBCodeTags(Os.GetShortDescription())
              : "");
          const Xs = gs == B && (!us || $s == B);
          return [Ws, Xs];
        }
        const G = 1,
          X = 2,
          B = 3;
        function E(L, T, k, p) {
          const _ = (0, Q.useRef)(void 0),
            S = (0, Q.useRef)(void 0),
            gs = (0, D.CH)();
          _.current = L;
          const [us, Us] = (0, Q.useState)(void 0),
            {
              include_assets: Os,
              include_release: $s,
              include_platforms: Ws,
              include_all_purchase_options: Xs,
              include_screenshots: Vs,
              include_trailers: ul,
              include_ratings: hs,
              include_tag_count: Ml,
              include_reviews: zl,
              include_basic_info: gl,
              include_supported_languages: yl,
              include_full_description: cl,
              include_included_items: jl,
              include_assets_without_overrides: xl,
              apply_user_filters: xs,
              include_links: Wl,
              include_extra_details: nl,
            } = k;
          if (
            ((0, Q.useEffect)(() => {
              const P = {
                include_assets: Os,
                include_release: $s,
                include_platforms: Ws,
                include_all_purchase_options: Xs,
                include_screenshots: Vs,
                include_trailers: ul,
                include_ratings: hs,
                include_tag_count: Ml,
                include_reviews: zl,
                include_basic_info: gl,
                include_supported_languages: yl,
                include_full_description: cl,
                include_included_items: jl,
                include_assets_without_overrides: xl,
                apply_user_filters: xs,
                include_links: Wl,
                include_extra_details: nl,
              };
              let Ol = null;
              return (
                !L ||
                  L < 0 ||
                  U.A.Get().BHasStoreItem(L, T, P) ||
                  (us !== void 0 && p && p == S.current) ||
                  (p !== S.current && (Us(void 0), (S.current = p)),
                  (Ol = N().CancelToken.source()),
                  U.A.Get()
                    .QueueStoreItemRequest(L, T, P)
                    .then((Zl) => {
                      !Ol?.token.reason && _.current === L && Us(Zl == $.R),
                        gs();
                    })),
                () => Ol?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              L,
              T,
              p,
              us,
              Os,
              $s,
              Ws,
              Xs,
              Vs,
              ul,
              hs,
              Ml,
              zl,
              gl,
              yl,
              cl,
              jl,
              xl,
              xs,
              Wl,
              nl,
              gs,
            ]),
            !L)
          )
            return [null, X];
          if (us === !1) return [void 0, X];
          if (U.A.Get().BIsStoreItemMissing(L, T)) return [void 0, X];
          if (!U.A.Get().BHasStoreItem(L, T, k)) return [void 0, G];
          const Ys = U.A.Get().GetStoreItemWithLegacyVisibilityCheck(L, T);
          return Ys ? [Ys, B] : [null, X];
        }
        function Ms(L, T, k) {
          return E(L, c.c6.qI, T, k);
        }
        function I(L, T, k) {
          return E(L, c.c6.xO, T, k);
        }
        function V(L, T, k) {
          return E(L, c.c6.RD, T, k);
        }
        function H(L, T, k) {
          const [p, _] = E(L, T, k);
          let S;
          p?.GetStoreItemType() == EStoreItemType.k_EStoreItemType_Package &&
            !p.GetAssets()?.GetHeaderURL() &&
            p?.GetIncludedAppIDs().length == 1 &&
            (S = p.GetIncludedAppIDs()[0]);
          const [gs, us] = Ms(S, k);
          return S && gs?.BIsVisible() ? [gs, us] : [p, _];
        }
        function J(L, T, k, p) {
          const _ = (0, D.CH)(),
            {
              include_assets: S,
              include_release: gs,
              include_platforms: us,
              include_all_purchase_options: Us,
              include_screenshots: Os,
              include_trailers: $s,
              include_ratings: Ws,
              include_tag_count: Xs,
              include_reviews: Vs,
              include_basic_info: ul,
              include_supported_languages: hs,
              include_full_description: Ml,
              include_included_items: zl,
              include_assets_without_overrides: gl,
              apply_user_filters: yl,
              include_links: cl,
              include_extra_details: jl,
            } = k;
          return (
            (0, Q.useEffect)(() => {
              if (!L || L.length == 0) return;
              const xs = {
                  include_assets: S,
                  include_release: gs,
                  include_platforms: us,
                  include_all_purchase_options: Us,
                  include_screenshots: Os,
                  include_trailers: $s,
                  include_ratings: Ws,
                  include_tag_count: Xs,
                  include_reviews: Vs,
                  include_basic_info: ul,
                  include_supported_languages: hs,
                  include_full_description: Ml,
                  include_included_items: zl,
                  include_assets_without_overrides: gl,
                  apply_user_filters: yl,
                  include_links: cl,
                  include_extra_details: jl,
                },
                Wl = L.filter(
                  (P) =>
                    !(
                      U.A.Get().BHasStoreItem(P, T, xs) ||
                      U.A.Get().BIsStoreItemMissing(P, T)
                    ),
                );
              if (Wl.length == 0) return;
              const nl = N().CancelToken.source(),
                Ys = Wl.map((P) => U.A.Get().QueueStoreItemRequest(P, T, xs));
              return (
                Promise.all(Ys).then(() => {
                  nl.token.reason || _();
                }),
                () => nl.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              L,
              T,
              p,
              _,
              S,
              gs,
              us,
              Us,
              Os,
              $s,
              Ws,
              Xs,
              Vs,
              ul,
              hs,
              Ml,
              zl,
              gl,
              yl,
              cl,
              jl,
            ]),
            L
              ? L.every(
                  (xs) =>
                    U.A.Get().BHasStoreItem(xs, T, k) ||
                    U.A.Get().BIsStoreItemMissing(xs, T),
                )
                ? L.every((xs) =>
                    U.A.Get().GetStoreItemWithLegacyVisibilityCheck(xs, T),
                  )
                  ? B
                  : X
                : G
              : X
          );
        }
        function Ar(L, T, k) {
          return J(L, c.c6.qI, T, k);
        }
        function Fs(L, T, k) {
          return J(L, c.c6.xO, T, k);
        }
        function ys(L, T, k) {
          return J(L, c.c6.RD, T, k);
        }
        function wl() {
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      51746: (wr, R, w) => {
        "use strict";
        w.d(R, {
          EG: () => c,
          II: () => E,
          N1: () => Ms,
          S2: () => X,
          Uz: () => G,
          aL: () => g,
          ab: () => Q,
          qR: () => $,
          zB: () => B,
        });
        var e = w(7742),
          N = w(72849);
        function Q(I) {
          const V = I.toLowerCase();
          if (V.endsWith(".jpg") || V.endsWith(".jpeg")) return "image/jpeg";
          if (V.endsWith(".png")) return "image/png";
          if (V.endsWith(".gif")) return "image/gif";
          if (V.endsWith(".mp4")) return "video/mp4";
          if (V.endsWith(".webm")) return "video/webm";
          if (V.endsWith(".srt")) return "text/srt";
          if (V.endsWith(".vtt")) return "text/vtt";
          if (V.endsWith(".webp")) return "image/webp";
        }
        function $(I) {
          switch (I) {
            case "image/jpeg":
              return ".jpg";
            case "image/png":
              return ".png";
            case "image/gif":
              return ".gif";
            case "video/mp4":
              return ".mp4";
            case "video/webm":
              return ".webm";
            case "text/vtt":
              return ".vtt";
            case "text/srt":
              return ".srt";
            case "image/webp":
              return ".webp";
          }
          return (
            console.error(
              "ConvertMimeTypeToExtension:Unexepected mime type ",
              I,
            ),
            ".jpg"
          );
        }
        function c(I) {
          switch (I) {
            case N.bg.iS:
              return ".jpg";
            case N.bg.CK:
              return ".gif";
            case N.bg.dU:
              return ".png";
            case N.bg.pJ:
              return ".webm";
            case N.bg.nn:
              return ".mp4";
            case N.bg.pi:
              return ".srt";
            case N.bg.k7:
              return ".vtt";
            case N.bg.wD:
              return ".webp";
          }
        }
        function D(I) {
          const V = (0, e.x0)(),
            H = new Image();
          return (
            (H.onload = () => V.resolve(H)),
            (H.onerror = (J) => {
              console.error("LoadImage failed to load the image, details", J),
                V.resolve(void 0);
            }),
            (H.src = I),
            V.promise
          );
        }
        function U(I) {
          const V = (0, e.x0)(),
            H = document.createElement("video");
          return (
            (H.preload = "metadata"),
            H.addEventListener("loadedmetadata", () => V.resolve(H)),
            (H.onerror = (J) => {
              console.error("LoadVideo failed to load the video, details", J),
                V.resolve(void 0);
            }),
            (H.src = I),
            V.promise
          );
        }
        function g(I) {
          return I.startsWith("image/");
        }
        function G(I) {
          return I.startsWith("video/");
        }
        function X(I, V) {
          return V ? U(I) : D(I);
        }
        async function B(I, V) {
          if (V) return U(URL.createObjectURL(I));
          {
            const H = (0, e.x0)(),
              J = new FileReader();
            (J.onload = () => H.resolve(J.result ?? void 0)),
              (J.onerror = () => {
                console.error(
                  "GetMediaElementFromFile failed to load the image, details",
                  J.error,
                ),
                  H.resolve(void 0);
              }),
              J.readAsDataURL(I);
            const Ar = await H.promise;
            return Ar ? D(Ar.toString()) : void 0;
          }
        }
        function E(I) {
          return I
            ? I instanceof HTMLVideoElement
              ? { width: I.videoWidth, height: I.videoHeight }
              : { width: I.width, height: I.height }
            : { width: 0, height: 0 };
        }
        function Ms(I, V) {
          if (!V) return I;
          const H = new Set([
            "content-length",
            "host",
            "origin",
            "referer",
            "user-agent",
            "cookie",
            "set-cookie",
            "connection",
            "upgrade",
          ]);
          for (const J of V)
            H.has(J.name.toLowerCase()) || (I[J.name] = J.value);
          return I;
        }
      },
      89925: (wr) => {
        wr.exports = {
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
      19976: (wr) => {
        wr.exports = {
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
      94794: (wr) => {
        wr.exports = {
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
      85325: (wr) => {
        wr.exports = {
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
      65038: (wr) => {
        wr.exports = {
          DXVCNotice: "_1lEWAwP0XsnKz4xXZjEm1g",
          DXVCNoticeIconChecked: "_1M3zzD_D17Aw3wgdWaxZc",
          DXVCNoticeIconUnchecked: "iqxf3QFYD1lcAxbZHLzmY",
          DXVCNoticeText: "_3ONSEhSufFHQjBTa-qt0m4",
          DXVCNoticeTextChecked: "QmKToaPU7N03P2p9VRlqH",
          DXVCNoticeTextUnchecked: "_12HPIcBaY3YHgYnARVwc8M",
        };
      },
      61738: (wr, R, w) => {
        var e = {
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
        function N($) {
          var c = Q($);
          return w(c);
        }
        function Q($) {
          if (!w.o(e, $)) {
            var c = new Error("Cannot find module '" + $ + "'");
            throw ((c.code = "MODULE_NOT_FOUND"), c);
          }
          return e[$];
        }
        (N.keys = function () {
          return Object.keys(e);
        }),
          (N.resolve = Q),
          (wr.exports = N),
          (N.id = 61738);
      },
    },
  ]);
})();
