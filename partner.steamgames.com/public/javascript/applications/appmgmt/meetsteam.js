/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [6762],
    {
      5419: (Ee, it, p) => {
        "use strict";
        p.r(it), p.d(it, { MeetSteamRoutes: () => ct, default: () => Fs });
        var e = p(7850),
          Ge = p(58732),
          v = p(90626),
          ee = p(17083),
          ue = p(92757),
          Te = p(61266),
          qe = p(26485),
          Me = p(90783),
          O = p(25792),
          k = p(95695),
          te = p.n(k),
          $e = p(21418),
          Ke = p(45737),
          X = p.n(Ke),
          Ie = p(67705),
          ae = p(99412),
          ge = p(72604),
          Le = p(35038),
          Oe = p(68450),
          Fe = p(64868),
          we = p(20194),
          _e = p(75233),
          Pe = p(41735),
          Q = p.n(Pe),
          l = p(76559),
          o = p(3166),
          g = p(91916),
          D = p(40772),
          T = p(7582),
          W = p(179);
        function le(s, t = !1) {
          const [n, r = "00:00:00"] = s.trim().split(/\s+/),
            [a, i, c] = n.split("-").map(Number),
            [d, h, m] = r.split(":").map(Number),
            x = t
              ? Date.UTC(a, i - 1, c, d, h, m ?? 0)
              : new Date(a, i - 1, c, d, h, m ?? 0).getTime();
          return Math.floor(x / 1e3);
        }
        function pe() {
          const [s] = v.useState(() =>
              (0, o.Tc)("events_list", "application_config"),
            ),
            [t] = (0, W.QD)("filter"),
            n = (0, T.f1)(),
            [r, a] = v.useMemo(() => {
              let c = new Array(),
                d = new Array();
              return (
                s.forEach((h) => {
                  h.endtime && le(h.endtime) < n ? d.push(h) : c.push(h);
                }),
                [d, c]
              );
            }, [s, n]),
            i = (0, v.useMemo)(
              () => s.find((c) => c.id === t?.toLocaleLowerCase()),
              [s, t],
            );
          return { rgOldEvents: r, rgEvents: a, selectConference: i };
        }
        function xe(s) {
          return ["usePartnerRevAndBestAppSlow", s];
        }
        async function K(s) {
          const t = `${o.TS.PARTNER_BASE_URL}/meetsteam/ajaxfetchpartnerdetails`,
            n = { sessionid: (0, o.KC)(), partnerid: s };
          return (await Q().get(t, { params: n }))?.data?.data;
        }
        function ne(s) {
          const t = (0, we.I)({
            queryKey: xe(s),
            queryFn: async () => K(s),
            enabled: !!s,
          });
          return t.isLoading ? null : t.data;
        }
        function G(s, t) {
          return s.getQueryData(["usePartnerRevAndBestAppSlow", t]);
        }
        function de(s, t, n) {
          return (0, we.I)({
            queryKey: ["useMeetSteamGetAllRegistration", t, n],
            queryFn: async () => {
              const a = Le.w.Init(Oe.q3);
              a.Body().set_clan_event_gid(t);
              const i = await Oe.ZK.GetRegistrations(s, a);
              return i.BSuccess()
                ? i
                    .Body()
                    .registrations()
                    .map((c) => c.toObject())
                : [];
            },
            enabled: t != null && n != 0,
          });
        }
        function V(s) {
          const t = (0, we.I)({
            queryKey: ["useMeetSteamSaleOperators"],
            queryFn: async () => {
              const n = Le.w.Init(Oe.Rl),
                r = new Date();
              r.setFullYear(r.getFullYear() - 2),
                n.Body().set_rt_oldest_date(0);
              const a = await Oe.ZK.GetSaleEventOrganizers(s, n);
              return a.BSuccess()
                ? a
                    .Body()
                    .info()
                    .map((i) => i.toObject())
                : [];
            },
          });
          return t.isLoading ? null : t.data;
        }
        function Y(s) {
          const [t, n] = (0, v.useState)(!1),
            [r, a] = (0, v.useState)(0),
            i = (0, _e.jE)();
          return (
            (0, v.useEffect)(() => {
              (async () => {
                let d = 0;
                for (const h of s) {
                  const m = h.results.partner_id,
                    x = new l.b(h.steamid).GetAccountID();
                  await Promise.all([
                    (0, g.qG)(m),
                    i.prefetchQuery({
                      queryKey: xe(m),
                      queryFn: async () => K(m),
                    }),
                    (0, D.PQ)(i, m),
                  ]),
                    ++d,
                    a(d);
                }
                n(!0);
              })();
            }, [i, s]),
            { bComplete: t, nCount: r }
          );
        }
        var B = p(19367),
          E = p.n(B),
          f = p(48421),
          j = p(53275),
          A = p(63854),
          u = p(58534),
          w = p(99690),
          b = p(49628),
          C = p(1880),
          N = p(69168),
          I = p(85599),
          $ = p(11243),
          L = p(36707),
          z = p(41502),
          S = p(18210),
          U = p(92264),
          H = p(98609),
          ie = p(30565),
          se = p.n(ie);
        function Se(s) {
          const t = Be();
          return (0, e.jsx)("div", {
            children: (0, e.jsx)("ol", {
              children: Array.from(t.entries()).map(([n, r]) =>
                (0, e.jsx)(
                  "li",
                  {
                    children: (0, e.jsx)("a", {
                      href: `${o.TS.PARTNER_BASE_URL}meetsteam/surveyresults/${n}`,
                      target: "_blank",
                      children: r,
                    }),
                  },
                  n,
                ),
              ),
            }),
          });
        }
        function Be() {
          const [s] = (0, v.useState)(() => {
            const t = (0, o.Tc)("survey_list", "application_config") || {},
              n = new Map();
            for (const r of Object.keys(t)) n.set(r, t[r]);
            return n;
          });
          return s;
        }
        function oe() {
          const [s, t] = (0, v.useState)(location.search);
          return (
            (0, v.useEffect)(() => {
              function n(r) {
                r.data === "urlchange" && t(location.search);
              }
              return (
                window.addEventListener("message", n),
                () => {
                  window.removeEventListener("message", n);
                }
              );
            }, []),
            s
          );
        }
        function ve(s, t) {
          const n = oe(),
            r = (0, v.useMemo)(() => {
              const h = new URLSearchParams(n.substring(1)).get(s);
              return h != null
                ? t != null
                  ? typeof t == "boolean"
                    ? t.constructor(h !== "false")
                    : t.constructor(h)
                  : h
                : t;
            }, [s, t, n]),
            [a, i] = (0, v.useState)(r),
            c = v.useCallback(
              (d, h = !1) => {
                const m = new URLSearchParams(n.substring(1));
                if (d != null) {
                  if (m.get(s) == d) return;
                  m.set(s, String(d));
                } else {
                  if (!m.has(s)) return;
                  m.delete(s);
                }
                h
                  ? history.replaceState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${m}`),
                    )
                  : history.pushState(
                      history.state,
                      "",
                      decodeURIComponent(`${window.location.pathname}?${m}`),
                    ),
                  (0, v.startTransition)(() => {
                    i(d), window.postMessage("urlchange");
                  });
              },
              [s, n],
            );
          return [a, c];
        }
        const re = v.createContext(void 0);
        function q(s) {
          const { children: t } = s,
            [n, r] = ve("showpastevents", !1);
          return (0, e.jsx)(re.Provider, {
            value: { bShowArchived: n, setShowArchived: r },
            children: t,
          });
        }
        const fe = () => {
          const s = (0, v.useContext)(re);
          if (!s)
            throw new Error(
              "useMeetSteamArchived must be used within MeetSteamArchivedProvider",
            );
          return s;
        };
        var ze = p(34283),
          je = p.n(ze),
          ye = p(34592),
          ce = p(22880),
          he = p(63348),
          be = p(54407),
          me = p(71742),
          ft = p(13018);
        class Ve {
          m_steamInterface;
          GetSaleFeatureTransport() {
            return this.m_steamInterface;
          }
          static s_Singleton;
          static Get() {
            return (
              Ve.s_Singleton ||
                ((Ve.s_Singleton = new Ve()), Ve.s_Singleton.Init()),
              Ve.s_Singleton
            );
          }
          Init() {
            const t = (0, Ie.Tc)("store_feature_token", "application_config");
            (0, me.wT)(!!t, "require store_feature_token"),
              (this.m_steamInterface = new ft.D(H.TS.WEBAPI_BASE_URL, t));
          }
        }
        function Re() {
          return Ve.Get().GetSaleFeatureTransport().GetServiceTransport();
        }
        var Ye = p(24642),
          Qe = p(72609);
        async function dt(s) {
          const t = `${Qe.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetpartnersforaccount?accountid=${s}`,
            n = await fetch(t);
          if (!n.ok)
            throw new Error(`Failed to read the partner list for account ${s}`);
          const r = await n.json();
          if (r.success != ge.R)
            throw new Error(
              `Failed to read the partner list for account ${s}: ${r.msg}`,
            );
          return r.partners ?? [];
        }
        function pt(s) {
          return (0, we.I)({
            queryKey: ["MeetSteamPartnersForAccount", s],
            queryFn: () => dt(s),
            enabled: s > 0,
          });
        }
        function vt(s, t) {
          const [n, r] = useState(s),
            a = ut(n, {
              nTimeoutMS: t,
              nTimeoutExtensionMS: t,
              nMaxTimeoutExtensions: 1 / 0,
            });
          return [n, a, r];
        }
        function ut(s, t = {}) {
          const {
              nTimeoutMS: n = 350,
              nTimeoutExtensionMS: r = 125,
              nMaxTimeoutExtensions: a = 3,
            } = t,
            [i, c] = v.useState(s),
            d = v.useRef(void 0);
          return (
            v.useEffect(() => {
              const h = performance.now();
              d.current
                ? h - d.current.tsLastChange < a * n &&
                  (d.current.tsScheduledTimeout = Math.max(
                    performance.now() + r,
                    d.current.tsScheduledTimeout,
                  ))
                : (d.current = {
                    tsLastChange: h,
                    tsScheduledTimeout: performance.now() + n,
                  });
              const m = d.current.tsScheduledTimeout - performance.now(),
                x = window.setTimeout(() => {
                  (d.current = void 0), c(s);
                }, m);
              return () => window.clearTimeout(x);
            }, [s, n, r, a]),
            i
          );
        }
        function xt(s) {
          const t = s.trim();
          if (!/^\d+$/.test(t)) return 0;
          if (Number(t) > 4294967295) {
            const n = new l.b(t);
            return n.BIsValid() && n.BIsIndividualAccount()
              ? n.GetAccountID()
              : 0;
          }
          return Number(t);
        }
        function et(s) {
          const { hideModal: t, gid: n } = s,
            [r, a] = (0, v.useState)(!1),
            [i, c] = (0, v.useState)(null),
            [d, h] = v.useState(""),
            [m, x] = v.useState(""),
            [R, y] = v.useState(""),
            [F, M] = v.useState(!1),
            P = ut(d),
            J = xt(P),
            De = !!P.trim() && !J,
            Xe = Re(),
            st = pt(J),
            Ne = st.data,
            Ae = (0, we.I)({
              queryKey: ["MeetSteamInviteDirectDialog", n, J],
              queryFn: async () => {
                const ke = {
                    steamid: l.b.InitFromAccountID(J).ConvertTo64BitString(),
                    gid: n,
                    type: he.Dk.rV,
                  },
                  rt = await he.Nl.GetUserActionData(Xe, ke);
                return rt.BSuccess() && rt.Body().jsondata()
                  ? JSON.parse(rt.Body().jsondata())
                  : {};
              },
              enabled: !!n && J > 0,
            });
          v.useEffect(() => {
            if (!Ae.isLoading && Ae.isSuccess) {
              const ke = Ne?.length == 1 ? Ne[0].partnerid.toString() : "";
              x(Ae.data.partner_id ? Ae.data.partner_id.toString() : ke),
                y(Ae.data.email_override ?? ""),
                M(Ae.data.allow_registration_if_full ?? !1);
            }
          }, [Ae.isLoading, Ae.isSuccess, Ae.data, Ne]);
          const Bs = async () => {
            a(!0);
            const ke = Number.parseInt(m) > 0 ? Number.parseInt(m) : 0,
              rt = await mt(
                n,
                [
                  {
                    nAccountID: J,
                    nPartnerID: ke,
                    strEmailOverride: R,
                    bAllowRegistrationIfFull: F,
                  },
                ],
                !0,
              ),
              tn = rt && rt.success == ge.R;
            tn || c("We hit error during invite, check console: " + rt?.msg),
              a(!1),
              Ae.refetch(),
              tn && t();
          };
          return (0, e.jsxs)(C.o0, {
            strTitle: "Invite User",
            bOKDisabled: !J || r || Ae.isLoading,
            onOK: Bs,
            onCancel: t,
            children: [
              !!i &&
                (0, e.jsx)("div", {
                  className: k.ErrorStylesWithIcon,
                  children: i,
                }),
              !r &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      children:
                        "Saving sends an invitation email to this account only, and only if it has not been sent one for this event already. It does not send the invitation emails queued for anyone else. Use the Invitation And Registration Status dialog for those.",
                    }),
                    (0, e.jsx)(u.pd, {
                      type: "text",
                      label: "Account ID or Steam ID",
                      description:
                        "Accepts either the 32-bit account id or the 64-bit steam id",
                      onChange: (ke) => h(ke.currentTarget.value),
                      value: d,
                    }),
                    De &&
                      (0, e.jsx)("div", {
                        className: k.ErrorStylesWithIcon,
                        children: "That is not a valid account id or steam id.",
                      }),
                    J != 0 && (0, e.jsx)(tt, { nAccountID: J }),
                    J != 0 &&
                      !Ae.isLoading &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(u.pd, {
                            type: "number",
                            label: "Partner ID (optional)",
                            onChange: (ke) => x(ke.currentTarget.value),
                            value: m,
                          }),
                          (0, e.jsx)(St, {
                            rgPartners: Ne,
                            bLoading: st.isLoading,
                            bFailed: st.isError,
                            strPartnerID: m,
                            SetPartnerID: x,
                          }),
                          (0, e.jsx)(u.pd, {
                            type: "text",
                            label: "Email override (optional)",
                            onChange: (ke) => y(ke.currentTarget.value.trim()),
                            value: R,
                          }),
                          (0, e.jsx)(u.Yh, {
                            controlled: !0,
                            checked: F,
                            onChange: M,
                            label: "Allow if registration is full",
                          }),
                        ],
                      }),
                  ],
                }),
              r &&
                (0, e.jsx)(I.t, {
                  size: "small",
                  position: "center",
                  string: (0, S.we)("#Saving"),
                }),
              Ae.isLoading &&
                (0, e.jsx)(I.t, {
                  size: "small",
                  position: "center",
                  string: (0, S.we)("#Loading"),
                }),
            ],
          });
        }
        function tt(s) {
          const { nAccountID: t } = s,
            [n, r] = (0, be.KT)(t);
          if (r)
            return (0, e.jsx)(I.t, {
              size: "small",
              position: "center",
              string: (0, S.we)("#Loading"),
            });
          if (!n)
            return (0, e.jsx)("div", {
              className: k.ErrorStylesWithIcon,
              children: `We could not find an account for ${t}.`,
            });
          const a = l.b.InitFromAccountID(t).ConvertTo64BitString();
          return (0, e.jsxs)("div", {
            className: je().AccountSummary,
            children: [
              (0, e.jsx)("img", {
                className: je().AccountAvatar,
                src: n.avatar_url?.replace(/\.jpg$/, "_medium.jpg"),
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("div", {
                    className: je().AccountPersonaName,
                    children: n.persona_name,
                  }),
                  (0, e.jsx)("a", {
                    href: `${H.TS.SUPPORT_BASE_URL}account/overview/${a}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: `Account ${t} / SteamID ${a}`,
                  }),
                ],
              }),
            ],
          });
        }
        function St(s) {
          const {
            rgPartners: t,
            bLoading: n,
            bFailed: r,
            strPartnerID: a,
            SetPartnerID: i,
          } = s;
          return n
            ? (0, e.jsx)(I.t, {
                size: "small",
                position: "center",
                string: "Looking up partner membership",
              })
            : r
              ? (0, e.jsx)("div", {
                  className: je().PartnerListHeader,
                  children:
                    "We could not look up partner membership, enter the partner id above.",
                })
              : !t || t.length == 0
                ? (0, e.jsx)("div", {
                    className: je().PartnerListHeader,
                    children: "This account is not a member of any partner.",
                  })
                : (0, e.jsxs)("div", {
                    className: je().PartnerList,
                    children: [
                      (0, e.jsx)("div", {
                        className: je().PartnerListHeader,
                        children: "Member of, click to use:",
                      }),
                      t.map((c) =>
                        (0, e.jsxs)(
                          "a",
                          {
                            href: "#",
                            className: (0, L.A)(
                              je().PartnerListRow,
                              c.partnerid.toString() == a
                                ? je().PartnerListRowSelected
                                : "",
                            ),
                            onClick: (d) => {
                              d.preventDefault(), i(c.partnerid.toString());
                            },
                            children: [c.partner_name, " (", c.partnerid, ")"],
                          },
                          c.partnerid,
                        ),
                      ),
                    ],
                  });
        }
        function ht(s) {
          const { hideModal: t, gid: n } = s,
            [r, a] = (0, v.useState)(null),
            [i, c] = (0, v.useState)(!1),
            [d, h] = (0, v.useState)(null),
            [m, x] = (0, v.useState)(null),
            [R, y] = (0, v.useState)(null),
            F = async () => {
              c(!0);
              const P = await mt(n, r, !1);
              P?.success == ge.R
                ? (x(P.rgInvitedAccounts.length), y(P.rgSkippedAccounts.length))
                : h("We hit error during invite, check console: " + P?.msg),
                c(!1);
            },
            M = () => {
              x(null), y(null), c(!1), a(null), t();
            };
          return (0, e.jsxs)(C.o0, {
            strTitle: "Invite Users",
            bOKDisabled: !r || r.length == 0 || m != null,
            strCancelButtonText: m !== null ? "Close" : "Cancel",
            onOK: F,
            onCancel: M,
            children: [
              !!d &&
                (0, e.jsx)("div", {
                  className: k.ErrorStylesWithIcon,
                  children: d,
                }),
              m != null &&
                (0, e.jsxs)("div", {
                  children: [
                    "Invited ",
                    (0, Ye.D)(m),
                    " accounts, skipped previously invited ",
                    (0, Ye.D)(R),
                  ],
                }),
              i &&
                (0, e.jsx)(I.t, {
                  size: "small",
                  position: "center",
                  string: (0, S.we)("#Saving"),
                }),
              (0, e.jsx)("div", {
                children:
                  "Saving sends an invitation email to the accounts imported here that have not been sent one for this event already. It does not send the invitation emails queued for anyone else on the event.",
              }),
              r == null
                ? (0, e.jsx)(lt, { setInvites: a })
                : (0, e.jsx)(jt, { rgInvites: r }),
            ],
          });
        }
        function jt(s) {
          const { rgInvites: t } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                children: ["Total Invites Parsed: ", t.length, " "],
              }),
              (0, e.jsxs)("table", {
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", { children: "AccountID" }),
                        (0, e.jsx)("th", { children: "PartnerID" }),
                        (0, e.jsx)("th", { children: "Email Override" }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: t.map((n, r) =>
                      (0, e.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, e.jsx)("td", { children: n.nAccountID }),
                            (0, e.jsx)("td", { children: n.nPartnerID }),
                            (0, e.jsx)("td", { children: n.strEmailOverride }),
                          ],
                        },
                        "invite" + n.nAccountID + "_" + r,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function lt(s) {
          const { setInvites: t } = s;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: "Format for CSV File, please use the template below:",
              }),
              (0, e.jsxs)("ul", {
                children: [
                  (0, e.jsxs)("li", {
                    children: [
                      (0, e.jsx)("b", { children: "nAccountID" }),
                      " - required, 32-bit integer value, not the 64-bit steam id",
                    ],
                  }),
                  (0, e.jsxs)("li", {
                    children: [
                      (0, e.jsx)("b", { children: "nPartnerID" }),
                      " - (preferred for biz contact)",
                    ],
                  }),
                  (0, e.jsxs)("li", {
                    children: [
                      (0, e.jsx)("b", { children: "strOverrideEmail" }),
                      " - (optional, we wil use the email associated with the account and partner or the steamid itself)",
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("a", {
                href: "#",
                onClick: async (n) => {
                  n.preventDefault(), n.stopPropagation();
                  const r = [];
                  r.push(["nAccountID", "nPartnerID", "strEmailOverride"]),
                    r.push(["388445686", "1", "adils@valvesoftware.com"]),
                    ce.g.WriteCSVToFile(r, "invite_template.csv");
                },
                children: "Download Template Example",
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(u.$n, {
                children: (0, e.jsxs)("label", {
                  className: je().ImportButtonLabel,
                  htmlFor: "import-discount-input",
                  children: [
                    "Choose CSV File",
                    (0, e.jsx)("input", {
                      id: "import-discount-input",
                      type: "file",
                      style: { display: "none" },
                      onChange: async (n) => {
                        if (n.target.files.length >= 1) {
                          const r = n.target.files[0],
                            a = await ce.g.ParseCSVFile(r);
                          if (a?.data) {
                            const i = new Array();
                            a.data.forEach((c) => {
                              if (c.nAccountID) {
                                const d = {
                                  nAccountID: Number.parseInt(c.nAccountID),
                                };
                                c.nPartnerID &&
                                  (d.nPartnerID = Number.parseInt(
                                    c.nPartnerID,
                                  )),
                                  c.strEmailOverride &&
                                    (d.strEmailOverride = c.strEmailOverride),
                                  i.push(d);
                              }
                            }),
                              t(i);
                          }
                        }
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        async function mt(s, t, n) {
          const r = t.map((m) => m.nAccountID).join(","),
            a = t.map((m) => m.nPartnerID).join(","),
            i = t.map((m) => m.strEmailOverride).join(","),
            c = t
              .map((m) => (m.bAllowRegistrationIfFull ? "1" : "0"))
              .join(",");
          let d = new FormData();
          d.append("sessionid", (0, o.KC)()),
            d.append("gid", s),
            d.append("accounts", r),
            d.append("partnerids", a),
            d.append("emailoverride", i),
            d.append("allowregistrationiffull", c),
            d.append("forceupdate", n ? "1" : "0");
          const h = `${H.TS.PARTNER_BASE_URL}/meetsteam/ajaxinviteusers`;
          try {
            const m = await Q().post(h, d, { withCredentials: !0 });
            if (m?.data?.success != ge.R) {
              let x = (0, ye.H)(m);
              console.error(
                "DisplayPartnerEventRow error: " + x.strErrorMsg,
                x,
              );
            }
            return m?.data;
          } catch (m) {
            let x = (0, ye.H)(m);
            console.error("DisplayPartnerEventRow error: " + x.strErrorMsg, x);
          }
          return null;
        }
        var _ = p(16666),
          Z = p(32),
          Ce = p(54806),
          Ue = p(58632),
          nt = p.n(Ue);
        function Pt(s) {
          const t = Re(),
            n = v.useContext(yt),
            r = (0, we.I)(Lt(n, t, s));
          return r.isLoading ? null : r.data;
        }
        function Nt(s) {
          const t = Re(),
            n = v.useContext(yt);
          return (0, Ce.E)({ queries: s.map((r) => Lt(n, t, r)) });
        }
        function Os(s) {
          return ReactQueryClient.getQueryData([
            "MeetSteamAllRegistrationStatus",
            s,
          ]);
        }
        function _s(s) {
          const { loadMeetSteamAllRegistration: t, children: n } = s,
            r = React.useMemo(() => ({ loadMeetSteamAllRegistration: t }), [t]);
          return React.createElement(yt.Provider, { value: r }, n);
        }
        const yt = v.createContext({
          loadMeetSteamAllRegistration: async (s, t) => await nn(s).load(t),
        });
        function Lt(s, t, n) {
          return {
            queryKey: ["MeetSteamAllRegistrationStatus", n],
            queryFn: () => s.loadMeetSteamAllRegistration(t, n),
            enabled: !!n,
          };
        }
        let Et;
        function nn(s) {
          return (
            Et ||
              (Et = new (nt())(
                async (t) => {
                  const n = Le.w.Init(he.j3);
                  n.Body().set_gids([...t]), n.Body().set_type(he.Dk.rV);
                  const r = await he.Nl.GetMultipleUserActionData(s, n);
                  if (!r.BSuccess())
                    throw `Failed to call GetMultipleUserActionData with details: ${r.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    r
                      .Body()
                      .entries()
                      .forEach((i) => {
                        try {
                          const c = JSON.parse(i.jsondata());
                          if (!("steamid" in c) || !c.steamid) {
                            c.steamid = i.steamid();
                            const h = new l.b(c.steamid);
                            c.accountid = h.GetAccountID();
                          }
                          const d = i.gid();
                          return (
                            a.has(d) ? a.get(d).push(c) : a.set(d, [c]), [c]
                          );
                        } catch {
                          throw `Failed to parse GetMultipleUserActionData with details: ${i.steamid()}`;
                        }
                      }),
                    t.map((i) => a.get(i) ?? null)
                  );
                },
                { maxBatchSize: 5 },
              )),
            Et
          );
        }
        var Ft = p(40497);
        function Bt(s, t) {
          const n = (0, A.a)(),
            r = v.useContext(Ct),
            a = (0, we.I)(Ot(r, n, s, t));
          return a.isLoading ? null : a.data;
        }
        function sn(s, t) {
          const n = (0, A.a)(),
            r = v.useContext(Ct);
          return (0, Ce.E)({ queries: s.map((a, i) => Ot(r, n, a, t[i])) });
        }
        function Rt(s, t) {
          return Ft.L.getQueryData(["PartnerEmailAndName", s, t]);
        }
        function zs(s) {
          const { loadPartnerEmailAndName: t, children: n } = s,
            r = React.useMemo(() => ({ loadPartnerEmailAndName: t }), [t]);
          return React.createElement(Ct.Provider, { value: r }, n);
        }
        const Ct = v.createContext({
          loadPartnerEmailAndName: async (s, t, n) =>
            await rn(s).load({ accountID: t, partnerID: n }),
        });
        function Ot(s, t, n, r) {
          return {
            queryKey: ["PartnerEmailAndName", n, r],
            queryFn: () => s.loadPartnerEmailAndName(t, n, r),
            enabled: !!n || !!r,
          };
        }
        let At;
        function rn(s) {
          return (
            At ||
              (At = new (nt())(
                async (t) => {
                  const n = Le.w.Init(Oe.g9);
                  n.Body().set_accountids(t.map((i) => i.accountID)),
                    n.Body().set_partnerids(t.map((i) => i.partnerID));
                  const r = await Oe.ZK.GetBatchPartnerEmailAndName(s, n);
                  if (!r.BSuccess())
                    throw `Failed to call GetBatchPartnerEmailAndName with details: ${r.GetErrorMessage()}`;
                  const a = new Map();
                  return (
                    r
                      .Body()
                      .info()
                      .forEach((i) => {
                        a.set(
                          "" + i.accountid() + "_" + i.partnerid(),
                          i.toObject(),
                        );
                      }),
                    t.map(
                      (i) =>
                        a.get("" + i.accountID + "_" + i.partnerID) ?? null,
                    )
                  );
                },
                { maxBatchSize: 100 },
              )),
            At
          );
        }
        function an(s) {
          const { rgEventGIDs: t } = s,
            [n, r, a] = (0, Fe.uD)(),
            [i, c] = (0, v.useState)(null);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("span", { children: " | " }),
              (0, e.jsx)("a", {
                href: "#",
                onClick: (d) => {
                  d.preventDefault(), d.stopPropagation(), r();
                },
                children: "Analyse Top Partner Coverage",
              }),
              (0, e.jsx)(N.E, {
                active: n,
                children: (0, e.jsx)(O.tH, {
                  children: (0, e.jsx)(C.o0, {
                    closeModal: a,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      i == null
                        ? (0, e.jsx)(kt, {
                            rgEventGIDs: t,
                            fnSelectedEvents: c,
                          })
                        : (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)(ln, { rgGidMeetSteamEvents: i }),
                              (0, e.jsx)(u.$n, {
                                onClick: () => c(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        const gt = (0, _.FB)();
        function _t(s) {
          return (
            (s = s?.filter(
              (t, n) =>
                n == 0 ||
                !s.slice(0, n).some((r) => r.accountid == t.accountid),
            )),
            s
              ?.map(
                (t) =>
                  t.name ||
                  Rt(t.accountid, t.partner_id)?.realname ||
                  t.accountid,
              )
              .join(",") || ""
          );
        }
        function zt(s) {
          return _t(s.cell.getValue());
        }
        function on(s, t) {
          const n = Nt(t),
            [r, a, i] = (0, v.useMemo)(() => {
              if (n.filter((R) => !R.isLoading).length != n.length)
                return [null, [], []];
              const d = new Map(),
                h = new Set(s),
                m = new Map();
              n.forEach((R) =>
                R.data.forEach((y) => {
                  if (
                    h.has(y.partner_id) &&
                    (m.has(y.partner_id)
                      ? m.get(y.partner_id).push(y)
                      : m.set(y.partner_id, [y]),
                    !y.name)
                  ) {
                    const F = y.accountid;
                    d.set(`${F}_${y.partner_id}`, {
                      accountID: F,
                      partnerID: y.partner_id,
                    });
                  }
                }),
              );
              const x = Array.from(d.values());
              return [m, x.map((R) => R.accountID), x.map((R) => R.partnerID)];
            }, [n, s]),
            c = sn(a, i);
          return c.filter((d) => !d.isLoading).length == c.length ? r : null;
        }
        function ln(s) {
          const { rgGidMeetSteamEvents: t } = s,
            n = dn(),
            r = (0, g.vh)(n),
            a = on(n, t),
            i = (0, v.useMemo)(() => {
              if (!r || !a) return null;
              const h = [];
              return (
                n.forEach((m) => {
                  const x = a.get(m);
                  h.push({
                    partner_id: m,
                    partner_name: (0, g.Yd)(m)?.name || "Unknown",
                    invitations:
                      x?.filter(
                        (R) =>
                          R.invited &&
                          !Object.keys(R).some((y) =>
                            y.startsWith("registration_emailed"),
                          ),
                      ) || [],
                    registrations:
                      x?.filter((R) =>
                        Object.keys(R).some((y) =>
                          y.startsWith("registration_emailed"),
                        ),
                      ) || [],
                  });
                }),
                h
              );
            }, [r, a, n]),
            c = (0, v.useMemo)(
              () => [
                gt.accessor("partner_id", { header: "Partner ID", size: 100 }),
                gt.accessor("partner_name", {
                  header: "Partner Name",
                  size: 300,
                }),
                gt.accessor("invitations", {
                  header: "Invitations",
                  cell: zt,
                  size: 300,
                }),
                gt.accessor("registrations", {
                  header: "Registered to Attend",
                  cell: zt,
                  size: 300,
                }),
              ],
              [],
            );
          function d() {
            const h = [],
              m = [];
            for (const R of c) m.push(R.header);
            h.push(m);
            for (const R of i) {
              const y = [];
              for (const F of c) {
                const M = R[F.accessorKey];
                y.push(
                  F.accessorKey == "invitations" ||
                    F.accessorKey == "registrations"
                    ? _t(M)
                    : M.toString(),
                );
              }
              h.push(y);
            }
            ce.g.WriteCSVToFile(h, "partneranalysis.csv");
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(u.JU, { children: "Partner Analysis" }),
              i
                ? (0, e.jsxs)(O.tH, {
                    children: [
                      (0, e.jsx)(u.$n, {
                        id: "download-csv",
                        onClick: d,
                        style: { width: "120px" },
                        children: "Download CSV",
                      }),
                      (0, e.jsx)(Z.k, {
                        columns: c,
                        data: i,
                        getRowKey: (h) => h,
                        stickyHeader: !0,
                        nItemHeight: 28,
                        overscan: n.length,
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)(u.$n, {
                        id: "download-csv",
                        onClick: d,
                        style: { width: "120px" },
                        children: "Download CSV",
                      }),
                    ],
                  })
                : (0, e.jsx)(I.t, {
                    string: (0, S.we)("#Loading"),
                    position: "center",
                  }),
            ],
          });
        }
        function kt(s) {
          const { rgEventGIDs: t, fnSelectedEvents: n } = s,
            [r, a] = (0, v.useState)([]),
            { bShowArchived: i, setShowArchived: c } = fe(),
            { bIsLoading: d, events: h } = (0, f.PB)(t),
            m = (0, v.useMemo)(() => {
              const x = Math.floor(new Date().getTime() / 1e3);
              return i && h ? [...h] : h?.filter((y) => y.endTime >= x);
            }, [h, i]);
          return d
            ? (0, e.jsx)(I.t, { string: "Loading..." })
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(u.Yh, {
                    checked: i,
                    onChange: c,
                    label: "Show Past Events",
                  }),
                  (0, e.jsx)(u.JU, { children: "Choose Events" }),
                  m.map((x) =>
                    (0, e.jsx)(
                      cn,
                      { gidClanEvent: x.GID, rgSelected: r, fnSetSelected: a },
                      x.GID,
                    ),
                  ),
                  (0, e.jsx)(u.$n, {
                    disabled: r.length == 0,
                    onClick: () => n(r),
                    children: "Continue",
                  }),
                ],
              });
        }
        function cn(s) {
          const { gidClanEvent: t, rgSelected: n, fnSetSelected: r } = s,
            i = (0, f.RR)(t).GetNameWithFallback(ae.Bhc);
          return (0, e.jsx)(u.Yh, {
            label: i,
            checked: n.includes(t),
            onChange: (c) => {
              const d = n.indexOf(t),
                h = d >= 0;
              c && !h
                ? r([...n, t])
                : !c && h && r([...n.slice(0, d), ...n.slice(d + 1)]);
            },
          });
        }
        function dn() {
          const [s] = (0, v.useState)(() =>
            (0, Ie.Tc)("partners_to_verify", "application_config"),
          );
          return s;
        }
        var It = p(16114),
          Je = p(20117),
          un = p(30603),
          Gt = p.n(un);
        function hn(s) {
          const { hideModal: t, gid: n } = s,
            r = Pt(n),
            a = (0, _e.jE)(),
            [i, c] = (0, v.useMemo)(
              () =>
                r
                  ? [
                      r.length,
                      r.filter(
                        (d) =>
                          !d.invitation_emailed &&
                          !d.invite_registration_auto_create,
                      ).length,
                    ]
                  : [0, 0],
              [r],
            );
          return (0, e.jsxs)(C.o0, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription:
              "Every account with an invitation or a registration on this event, and where each one is. Rows with no invite are people who registered themselves from the registration link; they are never sent an invitation email.",
            strTitle: "Invitation And Registration Status",
            children: [
              !r &&
                (0, e.jsx)(I.t, {
                  size: "medium",
                  position: "center",
                  string: (0, S.we)("#Loading"),
                }),
              r &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        "There are ",
                        i,
                        " invitation/registration records.",
                      ],
                    }),
                    c > 0 &&
                      (0, e.jsxs)(u.$n, {
                        onClick: async () => {
                          await xn(a, n);
                        },
                        children: [
                          c,
                          " invitation emails are queued for this event. Send them all now?",
                        ],
                      }),
                    (0, e.jsxs)("table", {
                      children: [
                        (0, e.jsx)("thead", {
                          children: (0, e.jsxs)("tr", {
                            children: [
                              (0, e.jsx)("th", { children: "SteamID" }),
                              (0, e.jsx)("th", { children: "Name" }),
                              (0, e.jsx)("th", { children: "invited" }),
                              (0, e.jsx)("th", { children: "Invite Emailed" }),
                              (0, e.jsx)("th", { children: "Partner" }),
                              (0, e.jsx)("th", { children: "Email Override" }),
                            ],
                          }),
                        }),
                        (0, e.jsx)("tbody", {
                          children: r?.map((d) =>
                            (0, e.jsx)(mn, { reg: d }, "regentry_" + d.steamid),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function mn(s) {
          const { reg: t } = s,
            [n] = (0, g.UA)(t.partner_id);
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", { children: t.steamid }),
              (0, e.jsx)("td", { children: t.name }),
              (0, e.jsx)("td", { children: t.invited ? "YES" : "" }),
              (0, e.jsx)("td", { children: t.invitation_emailed ? "YES" : "" }),
              (0, e.jsxs)("td", {
                children: [n?.name, " (", t.partner_id, ")"],
              }),
              (0, e.jsx)("td", { children: t.email_override }),
            ],
          });
        }
        function gn(s) {
          const { hideModal: t, gid: n, title: r, group: a, session: i } = s,
            c = (0, A.a)(),
            d = Pt(n),
            h = de(c, n, a?.group_id),
            [m, x] = (0, v.useMemo)(() => {
              const y = h?.data?.filter((P) => P.session_id == i.id),
                F = new Map(),
                M = new Map();
              return (
                y?.forEach((P) => {
                  const J = new Je.b2(P.steamid).GetAccountID();
                  if ((F.set(J, P), P.jsondata)) {
                    const De = JSON.parse(P.jsondata);
                    De.pre_event_partner_questions &&
                      M.set(J, De.pre_event_partner_questions);
                  }
                }),
                [F, M]
              );
            }, [i, h]),
            R = d?.filter((y) => m.has(new Je.b2(y.steamid).GetAccountID()));
          return (0, e.jsxs)(C.o0, {
            bAlertDialog: !0,
            bAllowFullSize: !0,
            bDisableBackgroundDismiss: !0,
            closeModal: t,
            strDescription: "Show who is registered for this session",
            strTitle: "Session Registration",
            children: [
              (0, e.jsx)("div", {
                className: Gt().ExportToCSV,
                children: (0, e.jsx)("a", {
                  onClick: () => fn(a, i, r, R, m, x),
                  children: "Export to CSV",
                }),
              }),
              (0, e.jsxs)("table", {
                className: Gt().Table,
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", { children: "SteamID" }),
                        (0, e.jsx)("th", { children: "Name" }),
                        (0, e.jsx)("th", { children: "Invited" }),
                        (0, e.jsx)("th", { children: "Partner" }),
                        (0, e.jsx)("th", { children: "Game" }),
                        (0, e.jsx)("th", { children: "Email Override" }),
                        (0, e.jsxs)("th", {
                          children: [
                            "Guest Count ",
                            (0, e.jsx)($.o, {
                              tooltip:
                                "Additional guests, doesn't include main registrant",
                            }),
                          ],
                        }),
                        (0, e.jsx)("th", {
                          children: "Reg Confirm Email Sent",
                        }),
                        a.ask_registration_question &&
                          (0, e.jsx)("th", { children: "Answer" }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: R?.flatMap((y) => {
                      const F = new Je.b2(y.steamid).GetAccountID(),
                        M = [
                          (0, e.jsx)(
                            pn,
                            {
                              group: a,
                              regInfo: m.get(F),
                              inviteInfo: y,
                              preRegQuestions: x.get(F),
                            },
                            "regrow" + y.steamid,
                          ),
                        ];
                      for (let P = 0; P < y.guest_names?.length; P++)
                        M.push(
                          (0, e.jsx)(
                            vn,
                            { guestName: y.guest_names[P] },
                            "regguestrow" + y.steamid + "_" + P,
                          ),
                        );
                      return M;
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function fn(s, t, n, r, a, i) {
          const c = [],
            d = [
              "SteamID",
              "Name",
              "Invited",
              "Partner",
              "Game",
              "Email Override",
              "Guest Count",
              "Reg Confirmation Email Sent",
            ];
          s.ask_registration_question && d.push("Pre Reg Answer"),
            c.push(d),
            r.forEach((m) => {
              const x = [],
                R = m.partner_id ? (0, g.Yd)(m.partner_id) : void 0;
              x.push("" + m.steamid),
                x.push(m.name),
                x.push(m.invited ? "YES" : ""),
                x.push(R ? `${R?.name} (${m.partner_id})` : ""),
                x.push(m.game ? `Game: ${m.game}` : ""),
                x.push(m.email_override),
                x.push(
                  "" + (m.guests_registered ? m.guests_registered - 1 : 0),
                );
              const y = new Je.b2(m.steamid);
              if (a.has(y.GetAccountID())) {
                const F = a.get(y.GetAccountID()),
                  M = $t(F, m);
                if (M) {
                  const P = new Date(M * 1e3)
                    .toISOString()
                    .replace("T", " ")
                    .split(".")[0];
                  x.push(P);
                } else x.push("");
              } else x.push("");
              if (s.ask_registration_question) {
                const F = i
                  .get(y.GetAccountID())
                  ?.find((M) => M.group_id == s.group_id);
                F && x.push(F.question);
              }
              c.push(x);
              for (let F = 0; F < m.guest_names?.length; F++) {
                const M = [];
                M.push("(guest)"), M.push(m.guest_names[F]), c.push(M);
              }
            });
          const h =
            `meetsteam_${n}_${(0, S.TW)(t.rtime_start)}_at_${(0, It.KC)(t.rtime_start)}.csv`.replace(
              /[ <>:"/\\|?*\x00-\x1F]/g,
              "_",
            );
          ce.g.WriteCSVToFile(c, h);
        }
        function $t(s, t) {
          const n = `registration_emailed_${s.group_id}_${s.session_id}`;
          let r = null;
          return n in t && (r = t[n]), r;
        }
        function pn(s) {
          const { inviteInfo: t, regInfo: n, group: r, preRegQuestions: a } = s,
            [i] = (0, g.UA)(t.partner_id),
            c = $t(n, t);
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", { children: t.steamid }),
              (0, e.jsx)("td", { children: t.name }),
              (0, e.jsx)("td", { children: t.invited ? "YES" : "" }),
              (0, e.jsx)("td", { children: i?.name ?? `(${t.partner_id})` }),
              (0, e.jsx)("td", { children: t.game ? `Game: ${t.game}` : "" }),
              (0, e.jsx)("td", { children: t.email_override }),
              (0, e.jsx)("td", {
                children: n.guests_registered ? n.guests_registered - 1 : 0,
              }),
              (0, e.jsx)("td", { children: c ? (0, S.TW)(c) : "" }),
              r.ask_registration_question &&
                (0, e.jsx)("td", {
                  children:
                    a?.find((d) => d.group_id == r.group_id)?.question || "",
                }),
            ],
          });
        }
        function vn(s) {
          const { guestName: t } = s;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", { children: "(guest)" }),
              (0, e.jsx)("td", { children: t }),
            ],
          });
        }
        async function xn(s, t) {
          let n = new FormData();
          n.append("sessionid", (0, o.KC)()), n.append("gid", t);
          const r = `${H.TS.PARTNER_BASE_URL}/meetsteam/ajaxsendinviteemails`;
          try {
            const a = await Q().post(r, n, { withCredentials: !0 });
            if (a?.data?.success != ge.R) {
              let i = (0, ye.H)(a);
              console.error("AsyncSendInviteEmails error: " + i.strErrorMsg, i);
            }
            return (
              s.invalidateQueries({
                queryKey: ["useMeetSteamAllRegistrationStatus", t],
              }),
              a?.data
            );
          } catch (a) {
            let i = (0, ye.H)(a);
            console.error("AsyncSendInviteEmails error: " + i.strErrorMsg, i);
          }
          return null;
        }
        var Vt = p(40299),
          at = p(55298);
        async function Sn(s) {
          const t = { sessionid: (0, Ie.KC)(), gids: s },
            n = `${Qe.TS.PARTNER_BASE_URL}meetsteam/admin/ajaxgetregistrations`,
            r = await fetch(n, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(t),
            });
          if (!r.ok)
            throw new Error(
              `Failed to read registrations for gids ${s.join(",")}`,
            );
          const a = await r.json();
          if (a.success != ge.R)
            throw new Error(
              `Failed to read registrations for gids ${s.join(",")}: ${a.msg}`,
            );
          return a.lists ?? [];
        }
        function jn(s) {
          return (0, we.I)({
            queryKey: [],
            queryFn: async () => await Sn(s),
            enabled: s && s.length > 0,
          });
        }
        function ks(s) {
          return ["MeetSteamGetRegistration", ...(s || []).sort()];
        }
        function yn(s) {
          const { rgEventGIDs: t } = s,
            [n, r, a] = (0, Fe.uD)(),
            [i, c] = (0, v.useState)(null);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("span", { children: " | " }),
              (0, e.jsx)("a", {
                href: "#",
                onClick: (d) => {
                  d.preventDefault(), d.stopPropagation(), r();
                },
                children: "Show Registration Across Events",
              }),
              (0, e.jsx)(N.E, {
                active: n,
                children: (0, e.jsx)(O.tH, {
                  children: (0, e.jsx)(C.o0, {
                    closeModal: a,
                    bAllowFullSize: !0,
                    bDisableBackgroundDismiss: !0,
                    children:
                      i == null
                        ? (0, e.jsx)(kt, {
                            rgEventGIDs: t,
                            fnSelectedEvents: c,
                          })
                        : (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)(Rn, { rgGidMeetSteamEvents: i }),
                              (0, e.jsx)(u.$n, {
                                onClick: () => c(null),
                                children: "Reset Selection",
                              }),
                            ],
                          }),
                  }),
                }),
              }),
            ],
          });
        }
        function En(s) {
          const t = Nt(s),
            n = (0, at.qh)(),
            { bIsLoading: r, events: a } = (0, f.PB)(s),
            { data: i } = jn(s),
            [c, d, h] = (0, v.useMemo)(() => {
              if (
                r ||
                !i ||
                i.length == 0 ||
                t.filter((M) => !M.isLoading).length != t.length
              )
                return [null, null, null];
              const x = new Array(),
                R = new Set(),
                y = new Map();
              t.forEach((M) => {
                M.data.forEach((P) => {
                  P.guests_registered > 0 &&
                    (x.push(P), P.partner_id && R.add(P.partner_id));
                });
              });
              const F = new Map();
              return (
                a.forEach((M) => {
                  M.jsondata.meet_steam_groups?.forEach((P) => {
                    P.sessions?.forEach((J) => {
                      F.set(
                        `${M.GID}_${P.group_id}_${J.id}`,
                        `${P.localized_session_title[ae.Bhc]}@${(0, It.TW)(J.rtime_start)} ${(0, It.KC)(J.rtime_start)}`,
                      );
                    });
                  });
                }),
                i.forEach((M) => {
                  M.rgRegistrations.forEach((P) => {
                    const De = new l.b(P.steamid).GetAccountID(),
                      Xe =
                        F.get(`${M.gid}_${P.group_id}_${P.session_id}`) ||
                        `${P.group_id}:${P.session_id}`;
                    y.has(De) ? y.set(De, y.get(De) + `,${Xe}`) : y.set(De, Xe);
                  });
                }),
                [Array.from(R), x, y]
              );
            }, [t, r, i, a]);
          return (0, D.fI)(c)
            ? {
                rgAllRegistrations: d,
                rgPartnerIDs: c,
                rgValveAccounts: n,
                rgMapAccountToSessionTimes: h,
              }
            : {
                rgAllRegistrations: void 0,
                rgPartnerIDs: void 0,
                rgValveAccounts: void 0,
                rgMapAccountToSessionTimes: void 0,
              };
        }
        const He = (0, _.FB)();
        function Rn(s) {
          const { rgGidMeetSteamEvents: t } = s,
            {
              rgAllRegistrations: n,
              rgPartnerIDs: r,
              rgValveAccounts: a,
              rgMapAccountToSessionTimes: i,
            } = En(t),
            c = (0, g.vh)(r),
            d = (0, v.useMemo)(() => {
              if (!c || !n || !a || !i) return null;
              const m = new Map();
              a.forEach((R) => m.set(R.id, R));
              const x = [];
              return (
                n.forEach((R) => {
                  const y = (0, g.Yd)(R.partner_id),
                    F = (0, D.Gl)(R.partner_id);
                  x.push({
                    partner_id: R.partner_id ? "" + R.partner_id : "",
                    partner_name: y?.name || "Unknown",
                    name: R.name,
                    game: R.game || "",
                    accountid: R.accountid,
                    email: R.email_override,
                    guest_registrated: R.guests_registered - 1,
                    guest_names:
                      R.guest_names?.length > 0 ? R.guest_names.join(",") : "",
                    business_contact:
                      F && F.length > 0
                        ? F.filter((M) => M.is_business_contact)
                            .map((M) => {
                              const P = new l.b(M.steamid);
                              return (
                                m.get(P.GetAccountID())?.displayName ||
                                M.steamid
                              );
                            })
                            .join(",")
                        : "",
                    sessions: i.get(R.accountid) || "missing data",
                  });
                }),
                x
              );
            }, [c, n, a, i]),
            h = Ut();
          return !c || !r || !d
            ? (0, e.jsx)(I.t, { string: (0, S.we)("#Loading") })
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(u.JU, { children: "Registations" }),
                  d
                    ? (0, e.jsxs)(O.tH, {
                        children: [
                          (0, e.jsx)(Ht, { rgData: d }),
                          (0, e.jsx)(Z.k, {
                            columns: h,
                            data: d,
                            getRowKey: (m) => m,
                            stickyHeader: !0,
                            nItemHeight: 28,
                            overscan: r.length,
                          }),
                          (0, e.jsx)("br", {}),
                          (0, e.jsx)(Ht, { rgData: d }),
                        ],
                      })
                    : (0, e.jsx)(I.t, {
                        string: (0, S.we)("#Loading"),
                        position: "center",
                      }),
                ],
              });
        }
        function Ut() {
          return (0, v.useMemo)(
            () => [
              He.accessor("name", { header: "Name", size: 200 }),
              He.accessor("accountid", { header: "Account ID", size: 150 }),
              He.accessor("email", { header: "Email", size: 150 }),
              He.accessor("guest_registrated", {
                header: "Guest Count",
                size: 100,
              }),
              He.accessor("guest_names", {
                header: "Guest's Names",
                size: 100,
              }),
              He.accessor("partner_id", { header: "Partner ID", size: 100 }),
              He.accessor("partner_name", {
                header: "Partner Name",
                size: 300,
              }),
              He.accessor("game", { header: "Game Name", size: 150 }),
              He.accessor("business_contact", {
                header: "Business Contact",
                size: 150,
              }),
              He.accessor("sessions", { header: "Sessions", size: 150 }),
            ],
            [],
          );
        }
        function Ht(s) {
          const { rgData: t } = s,
            n = Ut();
          return (0, e.jsx)(u.$n, {
            id: "download-csv",
            onClick: () =>
              (0, Vt.K)(
                "registrationdump.csv",
                t,
                n.map((r) => ({
                  accessorKey: r.accessorKey,
                  header:
                    typeof r.header == "string"
                      ? r.header
                      : (r.accessorKey ?? ""),
                })),
              ),
            style: { width: "120px" },
            children: "Download CSV",
          });
        }
        const Wt = v.createContext(void 0);
        function Cn(s) {
          const { children: t } = s,
            [n, r] = ve("search", ""),
            [a, i] = (0, v.useState)(() => n || ""),
            c = (0, v.useCallback)(
              (h) => {
                i(h), r(h || void 0, !0);
              },
              [r],
            ),
            d = (0, v.useMemo)(() => ({ strSearch: a, setSearch: c }), [a, c]);
          return (0, e.jsx)(Wt.Provider, { value: d, children: t });
        }
        const Kt = () => {
          const s = (0, v.useContext)(Wt);
          if (!s)
            throw new Error(
              "useMeetSteamSearch must be used within MeetSteamSearchProvider",
            );
          return s;
        };
        function An(s, t) {
          const n = t?.trim().toLowerCase();
          return n ? !!s && s.toLowerCase().includes(n) : !0;
        }
        function In(s, t) {
          const n = t?.trim().toLowerCase();
          if (!s || !n) return [{ strText: s || "", bMatch: !1 }];
          const r = new Array(),
            a = s.toLowerCase();
          let i = 0;
          for (let c = a.indexOf(n); c >= 0; c = a.indexOf(n, i))
            c > i && r.push({ strText: s.slice(i, c), bMatch: !1 }),
              r.push({ strText: s.slice(c, c + n.length), bMatch: !0 }),
              (i = c + n.length);
          return i < s.length && r.push({ strText: s.slice(i), bMatch: !1 }), r;
        }
        function wt(s) {
          const { text: t } = s,
            { strSearch: n } = Kt(),
            r = (0, v.useMemo)(() => In(t, n), [t, n]);
          return (0, e.jsx)(e.Fragment, {
            children: r.map((a, i) =>
              a.bMatch
                ? (0, e.jsx)(
                    "span",
                    { className: se().SearchMatch, children: a.strText },
                    i,
                  )
                : (0, e.jsx)(v.Fragment, { children: a.strText }, i),
            ),
          });
        }
        function wn(s) {
          const t = l.b.InitFromClanID((0, b.H)()),
            n = _n(),
            { bShowArchived: r, setShowArchived: a } = fe(),
            { strSearch: i, setSearch: c } = Kt(),
            { bIsLoading: d, events: h } = (0, f.PB)(n),
            {
              rgEventsByMonth: m,
              cEvents: x,
              cMatchingEvents: R,
            } = v.useMemo(() => {
              if (!h)
                return {
                  rgEventsByMonth: null,
                  cEvents: 0,
                  cMatchingEvents: 0,
                };
              const y =
                  r && h
                    ? [...h]
                    : h?.filter((P) => P.endTime >= new Date().getTime() / 1e3),
                F = y.filter((P) => bn(P, i)),
                M = Array.from(
                  (0, z.bv)(F, (P) => (0, z.J2)(new Date(P.startTime * 1e3))),
                );
              return (
                M?.sort((P) => -P[0]),
                {
                  rgEventsByMonth: M,
                  cEvents: y.length,
                  cMatchingEvents: F.length,
                }
              );
            }, [h, r, i]);
          return d
            ? (0, e.jsx)(I.t, {})
            : m
              ? (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("a", {
                          href: `${H.TS.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/partnerevents/`,
                          children: "Open Meet Steam Event Dashboard",
                        }),
                        (0, e.jsx)(an, { rgEventGIDs: n }),
                        (0, e.jsx)(yn, { rgEventGIDs: n }),
                      ],
                    }),
                    (0, e.jsx)(u.Yh, {
                      checked: r,
                      onChange: a,
                      label: "Show Past Events",
                    }),
                    (0, e.jsxs)("div", {
                      className: se().SearchLine,
                      children: [
                        (0, e.jsx)(u.pd, {
                          type: "text",
                          placeholder: "Search events",
                          tooltip:
                            "In-memory search of the event id, title and description, and of the session group titles, descriptions and intended audience",
                          value: i,
                          onChange: (y) => c(y?.currentTarget?.value || ""),
                        }),
                        !!i.trim() &&
                          (0, e.jsxs)("div", {
                            className: se().SearchSummary,
                            children: [
                              "Showing ",
                              R,
                              " of ",
                              x,
                              " events \xA0",
                              (0, e.jsx)("a", {
                                href: "#",
                                onClick: (y) => {
                                  y.preventDefault(), c("");
                                },
                                children: "Clear",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, e.jsx)("hr", {}),
                    m.map((y) =>
                      (0, e.jsx)(
                        Dn,
                        { month: new Date(y[0] * 1e3), events: y[1] },
                        y[0],
                      ),
                    ),
                  ],
                })
              : null;
        }
        function bn(s, t) {
          if (!t?.trim()) return !0;
          const n = [
            s.GID,
            s.GetNameWithFallback(ae.Bhc),
            s.GetDescriptionWithFallback(ae.Bhc),
          ];
          return (
            s.jsondata.meet_steam_groups?.forEach((r) => {
              n.push(S.NT.GetWithFallback(r.localized_session_title, ae.Bhc)),
                n.push(
                  S.NT.GetWithFallback(r.localized_session_description, ae.Bhc),
                ),
                n.push(
                  S.NT.GetWithFallback(r.localized_intended_audience, ae.Bhc),
                ),
                n.push(S.NT.GetWithFallback(r.localized_sesssion_faq, ae.Bhc));
            }),
            n.some((r) => An(r, t))
          );
        }
        function Dn(s) {
          const { month: t, events: n } = s,
            r = v.useMemo(() => [...n].sort((c) => -c.startTime), [n]),
            a = { year: "numeric", month: "long" },
            i = new Intl.DateTimeFormat(navigator.language, a).format(t);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { className: se().MonthTitle, children: i }),
              (0, e.jsx)("div", {
                className: se().MonthEvents,
                children: r.map((c) => (0, e.jsx)(Tn, { oEvent: c }, c.GID)),
              }),
            ],
          });
        }
        function Tn(s) {
          const { oEvent: t } = s,
            n = t.GID,
            r = l.b.InitFromClanID((0, b.H)()),
            a = (0, A.a)(),
            i = (0, j.my)(a, (0, b.H)(), n),
            c = i.isSuccess ? i.data : null,
            d = t.GetNameWithFallback(ae.Bhc),
            h = (0, v.useMemo)(() => {
              const m = new Array();
              return (
                t.jsondata.meet_steam_groups?.forEach((x) => {
                  x.sessions.forEach((R, y) => {
                    m.push({ group: x, session: R, firstSession: y == 0 });
                  });
                }),
                m
              );
            }, [t.jsondata.meet_steam_groups]);
          return (0, e.jsxs)("div", {
            className: se().EventRow,
            children: [
              (0, e.jsxs)("div", {
                className: se().EventMainDetails,
                children: [
                  (0, e.jsxs)("div", {
                    className: se().TitleLine,
                    children: [
                      (0, e.jsx)("div", {
                        className: se().Title,
                        children: (0, e.jsx)(wt, { text: d }),
                      }),
                      (0, e.jsx)("div", {
                        className: se().StartDate,
                        children: (0, S.TW)(t?.startTime),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: se().ActionLine,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("a", {
                          href: `${H.TS.COMMUNITY_BASE_URL}gid/${r.ConvertTo64BitString()}/partnerevents/edit/${n}`,
                          children: "Edit",
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        children: [
                          "\xA0|\xA0",
                          (0, e.jsx)("a", {
                            href: `${H.TS.STORE_BASE_URL}meetsteam/${n}`,
                            children: "View",
                          }),
                        ],
                      }),
                      !!(
                        t.BIsUnlistedEvent() &&
                        t.jsondata.meet_steam_groups?.length > 0
                      ) &&
                        (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)(Fn, { gid: n }),
                            "\xA0|\xA0",
                            (0, e.jsx)("a", {
                              href: `${H.TS.STORE_BASE_URL}meetsteam/attendance?gid=${n}&accountid=${H.iA.accountid}`,
                              children: "QR Page",
                            }),
                            "\xA0|\xA0",
                            (0, e.jsx)("a", {
                              href: `${H.TS.STORE_BASE_URL}meetsteam/attendeelist?gid=${n}`,
                              children: "Attendance List",
                            }),
                            (0, e.jsx)(Mn, { gid: n }),
                            (0, e.jsx)(Nn, { gid: n }),
                            (0, e.jsx)(Pn, { gid: n }),
                            (0, e.jsx)(Ln, { gid: n }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                children: (0, e.jsxs)("table", {
                  className: "landingTable",
                  children: [
                    (0, e.jsx)("thead", {
                      children: (0, e.jsxs)("tr", {
                        children: [
                          (0, e.jsx)("th", { children: "Group" }),
                          (0, e.jsx)("th", { children: "Session Start" }),
                          (0, e.jsx)("th", { children: "Session Duration" }),
                          (0, e.jsx)("th", { children: "Seats" }),
                          (0, e.jsx)("th", {
                            style: { width: "50px" },
                            children: "Registered",
                          }),
                          (0, e.jsx)("th", {
                            style: { width: "50px" },
                            children: "Guests",
                          }),
                          (0, e.jsx)("th", {
                            style: { width: "100px" },
                            children: "Details",
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsxs)("tbody", {
                      children: [
                        (0, e.jsxs)("tr", {
                          children: [
                            h.length > 0
                              ? (0, e.jsx)(
                                  Yt,
                                  {
                                    gid: n,
                                    group: h[0].group,
                                    session: h[0].session,
                                    rgAvailability: c,
                                  },
                                  h[0].session.id,
                                )
                              : (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("td", { children: "None" }),
                                    (0, e.jsx)("td", {}),
                                    (0, e.jsx)("td", {}),
                                    (0, e.jsx)("td", {}),
                                    (0, e.jsx)("td", {}),
                                    (0, e.jsx)("td", {}),
                                  ],
                                }),
                            (0, e.jsx)("td", {
                              children:
                                !(
                                  t?.BIsUnlistedEvent() &&
                                  t.jsondata.meet_steam_groups?.length > 0
                                ) &&
                                (0, e.jsx)("div", {
                                  children:
                                    "Invite Disabled. Event need to publish into Unlisted State",
                                }),
                            }),
                          ],
                        }),
                        h
                          .filter((m, x) => x > 0)
                          .map((m) =>
                            (0, e.jsx)(
                              "tr",
                              {
                                children: (0, e.jsx)(Yt, {
                                  group: m.group,
                                  gid: n,
                                  session: m.session,
                                  rgAvailability: c,
                                  firstSession: m.firstSession,
                                }),
                              },
                              m.session.id,
                            ),
                          ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function Mn(s) {
          const { gid: t } = s,
            n = Be();
          return Array.from(n.keys()).includes(t)
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  "\xA0|\xA0",
                  (0, e.jsx)("a", {
                    href: `${H.TS.PARTNER_BASE_URL}meetsteam/survey/${t}`,
                    children: "Survey",
                  }),
                ],
              })
            : null;
        }
        function Pn(s) {
          const { gid: t } = s,
            [n, r, a] = (0, Fe.uD)();
          return (0, e.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, e.jsxs)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), r();
                },
                children: [
                  "Invite via CSV",
                  (0, e.jsx)($.o, {
                    tooltip:
                      "This will email invitee and show the users on the dashboard (if not already invited).  We need csv with accountid,partnerid,email_override (optional)",
                  }),
                ],
              }),
              (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(N.E, {
                  active: n,
                  children: (0, e.jsx)(ht, { hideModal: a, gid: t }),
                }),
              }),
            ],
          });
        }
        function Nn(s) {
          const { gid: t } = s,
            [n, r, a] = (0, Fe.uD)();
          return (0, e.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, e.jsx)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), r();
                },
                children: "Invite",
              }),
              (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(N.E, {
                  active: n,
                  children: (0, e.jsx)(et, { hideModal: a, gid: t }),
                }),
              }),
            ],
          });
        }
        function Ln(s) {
          const { gid: t } = s,
            [n, r, a] = (0, Fe.uD)();
          return (0, e.jsxs)("div", {
            children: [
              "\xA0|\xA0",
              (0, e.jsx)("a", {
                href: "#",
                onClick: (i) => {
                  i.preventDefault(), i.stopPropagation(), r();
                },
                children: "Show Invites",
              }),
              (0, e.jsx)(O.tH, {
                children: (0, e.jsx)(N.E, {
                  active: n,
                  children: (0, e.jsx)(hn, { hideModal: a, gid: t }),
                }),
              }),
            ],
          });
        }
        function Fn(s) {
          const { gid: t } = s,
            n = (0, A.a)(),
            [r, a] = (0, v.useState)(!1),
            [i, c] = (0, v.useState)(null);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("a", {
                href: "#",
                onClick: async (d) => {
                  d.preventDefault(), d.stopPropagation(), a(!0);
                  const h = await Bn(n, t);
                  c(h);
                },
                children: "Email Self",
              }),
              (0, e.jsx)(N.E, {
                active: r,
                children: (0, e.jsxs)(C.o0, {
                  bAlertDialog: !0,
                  strTitle: "Test Emails",
                  closeModal: () => {
                    a(!1), c(null);
                  },
                  onOK: () => {},
                  children: [
                    (0, e.jsx)("div", {
                      children:
                        "This will temporarily register and then de-register you from the event as a way to test the email sending code.",
                    }),
                    i == null &&
                      (0, e.jsx)(I.t, { string: (0, S.we)("#Loading") }),
                    i == ge.R &&
                      (0, e.jsx)("div", { children: "Test Emails Sent" }),
                    !!(i && i != ge.R) &&
                      (0, e.jsx)("div", {
                        children: "Email Failed to Send. Check console",
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        async function Bn(s, t) {
          const n = Le.w.Init(Oe.VI),
            r = l.b.InitFromClanID((0, b.H)());
          n.Body().set_clan_event_gid(t),
            n.Body().set_steamid(r.ConvertTo64BitString());
          const a = await Oe.ZK.TestFireEmails(s, n);
          return console.log("test fire", a), a.GetEResult();
        }
        function On(s, t) {
          const n = E().unix(s),
            r = E().unix(s).tz(t),
            a = r.utcOffset() - n.utcOffset(),
            i = new Date((s + a * 60) * 1e3),
            c = new Date(),
            d =
              i.getFullYear() == c.getFullYear()
                ? (0, U.$w)(i, !1, !1)
                : (0, U._9)(i, !1, !1),
            h = (0, U.KC)(s + a * 60);
          return `${d} ${h} ${r.format("z")}`;
        }
        function Yt(s) {
          const {
              gid: t,
              group: n,
              rgAvailability: r,
              session: a,
              firstSession: i = !0,
            } = s,
            c = S.NT.GetWithFallback(n?.localized_session_title, ae.Bhc),
            d = S.NT.GetWithFallback(n?.localized_session_description, ae.Bhc),
            h = S.NT.GetWithFallback(n?.localized_intended_audience, ae.Bhc),
            m = r?.find(
              (Ne) => Ne.group_id == n.group_id && Ne.session_id == a.id,
            ),
            [x, R, y] = (0, Fe.uD)(),
            F = (0, A.a)(),
            M = de(F, t, n?.group_id);
          let P = Math.min((m?.guest_count / a.max_capacity) * 100, 100),
            J = m?.guest_count > 0 ? `${P}%` : "0%",
            De = m?.guest_count >= a.max_capacity;
          const Xe = Intl.DateTimeFormat().resolvedOptions().timeZone,
            st =
              a.location_type === "in_person"
                ? (a.in_person_time_zone ?? w.hh)
                : Xe;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              i && n
                ? (0, e.jsxs)("td", {
                    children: [
                      (0, e.jsx)(wt, { text: c }),
                      (0, e.jsx)($.o, { tooltip: d }),
                      !!h &&
                        (0, e.jsx)("div", {
                          children: (0, e.jsx)(wt, { text: h }),
                        }),
                    ],
                  })
                : (0, e.jsx)("td", {}),
              (0, e.jsx)("td", {
                children: (0, e.jsx)("span", {
                  children: On(a.rtime_start, st),
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, U.IH)(a.rtime_end - a.rtime_start),
              }),
              (0, e.jsxs)("td", {
                children: [
                  m?.guest_count || 0,
                  " / ",
                  a.max_capacity,
                  (0, e.jsx)("br", {}),
                  (0, e.jsx)("div", {
                    className: se().CapacityBarMax,
                    children: (0, e.jsx)("div", {
                      className: (0, L.A)(
                        se().CapacityBarCurrent,
                        De ? se().Full : "",
                      ),
                      style: { width: J },
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("td", {
                children:
                  M.isSuccess &&
                  (0, e.jsx)(e.Fragment, {
                    children: M.data?.filter((Ne) => Ne.session_id == a.id)
                      .length,
                  }),
              }),
              (0, e.jsx)("td", {
                children:
                  M.isSuccess &&
                  (0, e.jsx)(e.Fragment, {
                    children: M.data
                      ?.filter((Ne) => Ne.session_id == a.id)
                      .reduce((Ne, Ae) => Ne + Ae.guests_registered - 1, 0),
                  }),
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)(u.$n, { onClick: R, children: "Details" }),
                  (0, e.jsx)(O.tH, {
                    children: (0, e.jsx)(N.E, {
                      active: x,
                      children: (0, e.jsx)(gn, {
                        gid: t,
                        title: c,
                        group: n,
                        session: a,
                        hideModal: y,
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _n() {
          const [s] = (0, v.useState)(() =>
            (0, Ie.Tc)("event_gids", "application_config"),
          );
          return s;
        }
        var zn = p(29522),
          kn = p(40358),
          Ze = p(30131),
          Gn = p(10142),
          $n = p(94352),
          bt = p(12932);
        function Vn(s) {
          const { rgEvents: t } = pe(),
            n = Qn(),
            [r, a] = (0, v.useState)(""),
            i = o.TS.PARTNER_BASE_URL + "meetsteam",
            c = (0, v.useMemo)(() => {
              const d = new Map();
              return (
                n.forEach((h) => {
                  h.results?.attending?.forEach((m) => {
                    d.has(m) ? d.set(m, d.get(m) + 1) : d.set(m, 1);
                  });
                }),
                d
              );
            }, [n]);
          return (0, e.jsxs)("div", {
            className: se().EventList,
            children: [
              (0, e.jsx)(u.pd, {
                type: "text",
                value: r,
                onChange: (d) => a(d.currentTarget.value.trim()),
                label: "Filter",
              }),
              (0, e.jsxs)("div", {
                children: [
                  "Total Survey Responses: ",
                  (0, Ye.D)(n?.length || 0),
                ],
              }),
              (0, e.jsxs)("div", {
                children: [
                  "Link to partner-facing survey: ",
                  (0, e.jsx)("a", { href: i, children: i }),
                ],
              }),
              t
                .filter(
                  (d) =>
                    r.length == 0 || d.name.includes(r) || d.id.includes(r),
                )
                .map((d) =>
                  (0, e.jsx)(
                    Un,
                    {
                      conf: d,
                      nInterestCount: c.get(d.id) ?? 0,
                      rgSurveyInterest: n,
                    },
                    d.id,
                  ),
                ),
              (0, e.jsx)(Jn, { rgSurveyInterest: n }),
            ],
          });
        }
        function Un(s) {
          const { conf: t, nInterestCount: n, rgSurveyInterest: r } = s;
          return (0, e.jsx)(bt.qx, {
            title: `${t.name} in ${t.place} around ${t.time}: Interest: ${(0, Ye.D)(n)}`,
            bStartMinimized: !0,
            children: (0, e.jsx)(Hn, { conf: t, rgSurveyInterest: r }),
          });
        }
        function Qt(s) {
          if (typeof s == "number") return s;
          const t = s.slice(-1).toUpperCase(),
            n = parseFloat(s.slice(0, -1));
          switch (t) {
            case "K":
              return n * 1e3;
            case "M":
              return n * 1e6;
            case "B":
              return n * 1e9;
            default:
              return parseFloat(s);
          }
        }
        function Hn(s) {
          const { conf: t, rgSurveyInterest: n } = s,
            r = (0, v.useMemo)(
              () => n.filter((d) => d.results?.attending?.includes(t.id)),
              [t, n],
            ),
            a = (0, at.qh)(),
            { bComplete: i, nCount: c } = Y(r);
          return i
            ? a?.length
              ? !r || r.length == 0
                ? (0, e.jsx)("div", { children: "No users with interest" })
                : (0, e.jsx)(Wn, { conf: t, rgSurveyInterest: r })
              : (0, e.jsx)(I.t, {
                  position: "center",
                  string:
                    "Loading Valve Account info (this shouldn't take long)",
                })
            : (0, e.jsx)(I.t, {
                position: "center",
                string: `Loading ${c} of ${r.length}`,
              });
        }
        function Wn(s) {
          const { conf: t, rgSurveyInterest: n } = s,
            r = (0, _e.jE)();
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(u.$n, {
                onClick: () => {
                  const a = [];
                  a.push([
                    "AccountID",
                    "Partner ID",
                    "Valve Partner Contacts",
                    "Email Override",
                    "Account Name",
                    "Name",
                    "Have you met steam",
                    "Survey Time",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Best AppID Name",
                    "Long Term Sales Rank",
                  ]),
                    n.forEach((c) => {
                      const d = [],
                        h = new Je.b2(c.steamid);
                      d.push("" + h.GetAccountID());
                      const m = (0, Ze.z0)(h.GetAccountID()),
                        x = c.results.partner_id;
                      d.push("" + x);
                      const R = (0, D.N6)(x).map(
                        (J) => (0, at.YA)(r, J)?.displayName || "" + J,
                      );
                      d.push(R.join("|"));
                      const y = c.results.email_override || "";
                      d.push("" + y),
                        d.push(m?.m_strPlayerName ? m.m_strPlayerName : "");
                      const F = Rt(h.GetAccountID(), x);
                      if (
                        (d.push(F ? F.realname : ""),
                        d.push(c.results.have_you_met_steam ? "yes" : "no"),
                        c.results.submit_time)
                      ) {
                        const J = c.results.submit_time,
                          De = new Date(J * 1e3)
                            .toISOString()
                            .replace("T", " ")
                            .split(".")[0];
                        d.push(De);
                      } else d.push("");
                      d.push("" + c.results.attending?.length),
                        d.push(c.results.country_code),
                        d.push(
                          c.results.preferred_language
                            ? (0, ae.LgB)(c.results.preferred_language)
                            : "",
                        );
                      const M = (0, g.Yd)(x);
                      d.push(M ? M.name : "");
                      const P = G(r, x);
                      P
                        ? (d.push("" + Qt(P.strGrossUSD)),
                          d.push("" + P.nBestAppID),
                          d.push(Gn.A.Get().GetApp(P.nBestAppID)?.GetName()),
                          d.push("" + P.nBestAppLongTermSalesRank))
                        : (d.push(""), d.push(""), d.push(""), d.push("")),
                        a.push(d);
                    });
                  const i =
                    t.name.replace(" ", "_") + "_conference_interest.csv";
                  ce.g.WriteCSVToFile(a, i);
                },
                children: "Export to CSV",
              }),
              (0, e.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", { children: "Name and Email" }),
                        (0, e.jsx)("th", { children: "Have you met steam?" }),
                        (0, e.jsx)("th", { children: "Partner" }),
                        (0, e.jsx)("th", { children: "Valve Contacts" }),
                        (0, e.jsx)("th", { children: "Partner Revenue" }),
                        (0, e.jsx)("th", { children: "Biggest Game" }),
                        (0, e.jsx)("th", { children: "Long Term Sales Rank" }),
                        (0, e.jsx)("th", { children: "Attending count?" }),
                        (0, e.jsx)("th", { children: "Alt Language" }),
                        (0, e.jsx)("th", { children: "Country" }),
                        (0, e.jsx)("th", { children: "Submit Survey Time" }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: n.map((a) =>
                      (0, e.jsx)(
                        Kn,
                        {
                          strsteamid: a.steamid,
                          partnerID: a.results.partner_id,
                          registration: a.results,
                        },
                        t.id + "_" + a.steamid,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Kn(s) {
          const { partnerID: t, registration: n } = s;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", { children: (0, e.jsx)(Jt, { ...s }) }),
              (0, e.jsx)("td", { children: n.have_you_met_steam ? "" : "NO" }),
              (0, e.jsx)(Zt, { nPartnerID: t }),
              (0, e.jsx)("td", { children: n.attending.length }),
              (0, e.jsx)("td", {
                children:
                  n.english_not_good && n.preferred_language
                    ? (0, ae.LgB)(n.preferred_language)
                    : "",
              }),
              (0, e.jsx)("td", { children: n.country_code }),
              (0, e.jsx)("td", { children: (0, S.TW)(n.submit_time) }),
            ],
          });
        }
        function Jt(s) {
          const { strsteamid: t, partnerID: n, registration: r } = s,
            a = (0, Ze.hW)(t),
            i = new Je.b2(t),
            c = Bt(i.GetAccountID(), n),
            d = c?.realname || a.data?.m_strPlayerName;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("span", { children: d }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("span", { children: r.email_override || c?.email }),
            ],
          });
        }
        function Zt(s) {
          const { nPartnerID: t } = s,
            [n] = (0, g.UA)(t),
            r = ne(t),
            a = (0, D.Z4)(t),
            i = (0, _e.jE)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("td", { children: n ? n?.name + ` (${t})` : t }),
              (0, e.jsx)("td", {
                children: a
                  ?.map((c) => (0, at.YA)(i, c)?.displayName || "" + c)
                  .join(","),
              }),
              (0, e.jsxs)("td", { children: ["$", r?.strGrossUSD] }),
              (0, e.jsx)("td", {
                children:
                  r?.nBestAppID > 0
                    ? (0, e.jsx)(Yn, { appid: r?.nBestAppID })
                    : "N/A",
              }),
              (0, e.jsx)("td", { children: r?.nBestAppLongTermSalesRank }),
            ],
          });
        }
        const Gs = {};
        function Yn(s) {
          const { appid: t } = s,
            n = (0, zn.$5)(t),
            { data: r } = (0, kn.J$)(n);
          return (0, e.jsx)($n.Q, {
            id: n,
            children: (0, e.jsx)("span", { children: r?.name || t }),
          });
        }
        function Qn() {
          const [s] = (0, v.useState)(() =>
            (0, Ie.Tc)("interest_results", "application_config"),
          );
          return (0, v.useMemo)(
            () => s.map((t) => ((t.results = JSON.parse(t.jsondata)), t)),
            [s],
          );
        }
        function Jn(s) {
          const { rgSurveyInterest: t } = s,
            n = (0, _e.jE)(),
            r = (0, at.qh)(),
            a = (0, v.useMemo)(
              () => t.filter((i) => i.results?.suggestion?.trim().length > 0),
              [t],
            );
          return (0, e.jsxs)(bt.qx, {
            title: `Alternative Suggestions (${a.length})`,
            bStartMinimized: !0,
            children: [
              (0, e.jsx)(u.$n, {
                onClick: () => {
                  const i = [];
                  i.push([
                    "AccountID",
                    "Partner ID",
                    "Email Override",
                    "Account Name",
                    "name",
                    "Attending Other Event Count",
                    "Country",
                    "Alt Language",
                    "Partner Name",
                    "Gross USD",
                    "Best AppID",
                    "Long Term Sales Rank",
                    "Suggestion",
                  ]),
                    a.forEach((d) => {
                      const h = [],
                        m = new Je.b2(d.steamid);
                      h.push("" + m.GetAccountID());
                      const x = (0, Ze.z0)(m.GetAccountID()),
                        R = d.results.partner_id;
                      h.push("" + R);
                      const y = d.results.email_override || "";
                      h.push("" + y),
                        h.push(x?.m_strPlayerName ? x.m_strPlayerName : "");
                      const F = Rt(m.GetAccountID(), R);
                      h.push(F ? F.realname : ""),
                        h.push("" + d.results.attending?.length),
                        h.push(d.results.country_code),
                        h.push(
                          d.results.preferred_language
                            ? (0, ae.LgB)(d.results.preferred_language)
                            : "",
                        );
                      const M = (0, g.Yd)(R);
                      h.push(M ? M.name : "");
                      const P = G(n, R);
                      P
                        ? (h.push("" + Qt(P.strGrossUSD)),
                          h.push("" + P.nBestAppID),
                          h.push("" + P.nBestAppLongTermSalesRank))
                        : (h.push(""), h.push(""), h.push("")),
                        h.push(d.results.suggestion),
                        i.push(h);
                    }),
                    ce.g.WriteCSVToFile(i, "suggestsion.csv");
                },
                children:
                  "Export to CSV (wait until the table populates fully)",
              }),
              (0, e.jsxs)("table", {
                className: "landingTable",
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", { children: "Name and Email" }),
                        (0, e.jsx)("th", { children: "Partner" }),
                        (0, e.jsx)("th", { children: "Valve Contacts" }),
                        (0, e.jsx)("th", { children: "Partner Revenue" }),
                        (0, e.jsx)("th", { children: "Biggest Game" }),
                        (0, e.jsx)("th", { children: "Long Term Sales Rank" }),
                        (0, e.jsx)("th", { children: "Suggestions" }),
                      ],
                    }),
                  }),
                  (0, e.jsx)("tbody", {
                    children: a.map((i) =>
                      (0, e.jsx)(Zn, { survey: i }, "suggested" + i.steamid),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function Zn(s) {
          const { survey: t } = s,
            n = new Je.b2(t.steamid);
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsx)(Jt, {
                  strsteamid: t.steamid,
                  partnerID: t.results.partner_id,
                  registration: t.results,
                }),
              }),
              (0, e.jsx)(Zt, { nPartnerID: t.results.partner_id }),
              (0, e.jsx)("td", { children: t.results.suggestion.trim() }),
            ],
          });
        }
        function Xn(s) {
          const t = v.useContext(Dt);
          return (0, we.I)(Xt(t, s));
        }
        function $s(s) {
          const t = React.useContext(Dt);
          return useQueries({ queries: s.map((n) => Xt(t, n)) });
        }
        function qn(s) {
          return Ft.L.getQueryData(["UserEmailAndLangs", s]);
        }
        function Vs(s) {
          const { loadUserEmailAndLangs: t, children: n } = s,
            r = React.useMemo(() => ({ loadUserEmailAndLangs: t }), [t]);
          return React.createElement(Dt.Provider, { value: r }, n);
        }
        const Dt = v.createContext({
          loadUserEmailAndLangs: async (s) => await es().load(s),
        });
        function Xt(s, t) {
          return {
            queryKey: ["UserEmailAndLangs", t],
            queryFn: () => s.loadUserEmailAndLangs(t),
            enabled: !!t,
          };
        }
        let Tt;
        function es() {
          return (
            Tt ||
              (Tt = new (nt())(
                async (s) => {
                  const t = `${o.TS.PARTNER_BASE_URL}meetsteam/ajaxbatchgetuseremails`,
                    n = { sessionid: (0, o.KC)(), strAccountIDs: s.join(",") },
                    r = await Q().get(t, { params: n, withCredentials: !0 });
                  if (!r || r?.status != 200 || r?.data?.success != ge.R)
                    throw `Failed to load app to user email and langs: ${((0, ye.H))(r).strErrorMsg}`;
                  const a = new Map();
                  return (
                    r.data.users.forEach((i) => {
                      const c = new l.b(i.steamid);
                      a.set(c.GetAccountID(), i);
                    }),
                    s.map((i) => a.get(i) ?? null)
                  );
                },
                { maxBatchSize: 100 },
              )),
            Tt
          );
        }
        var ts = p(54963),
          ns = p(84346);
        function ss(s) {
          const t = (0, A.a)(),
            n = (0, at.qh)(),
            r = V(t),
            a = (0, v.useMemo)(() => {
              if (!r || !n) return null;
              const i = new Set(n.map((c) => c.id));
              return r
                .filter((c) => !i.has(c.accountid))
                .sort(
                  (c, d) =>
                    d.clan_event_gids?.length - c.clan_event_gids.length,
                );
            }, [r, n]);
          return a
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsxs)(u.$n, {
                    onClick: () => {
                      const i = [];
                      i.push([
                        "User Name",
                        "account id",
                        "Email",
                        "Event Count",
                      ]),
                        a.forEach((d) => {
                          const h = (0, Ze.z0)(d.accountid),
                            m = qn(d.accountid);
                          i.push([
                            h?.m_strPlayerName || "",
                            "" + d.accountid,
                            m?.email_address || "",
                            d.clan_event_gids?.length.toLocaleString(
                              (0, ns.J)(),
                            ),
                          ]);
                        }),
                        ce.g.WriteCSVToFile(i, "sale_operators.csv");
                    },
                    children: [
                      "CSV Export",
                      (0, e.jsx)($.o, {
                        tooltip:
                          "Wait until the page finishes loading before export",
                      }),
                    ],
                  }),
                  (0, e.jsxs)("table", {
                    children: [
                      (0, e.jsx)("thead", {
                        children: (0, e.jsxs)("tr", {
                          children: [
                            (0, e.jsx)("th", { children: "User" }),
                            (0, e.jsx)("th", { children: "Email" }),
                            (0, e.jsx)("th", { children: "Events" }),
                          ],
                        }),
                      }),
                      (0, e.jsx)("tbody", {
                        children: a.map((i) =>
                          (0, e.jsx)(rs, { organizer: i }, i.accountid),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, e.jsx)(I.t, {
                string: (0, S.we)("#Loading"),
                size: "medium",
              });
        }
        function rs(s) {
          const { organizer: t } = s,
            n = (0, v.useMemo)(
              () => l.b.InitFromAccountID(t.accountid).ConvertTo64BitString(),
              [t],
            ),
            r = (0, Ze.hW)(n),
            a = Xn(t.accountid),
            i = r.data?.m_strPlayerName || "";
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsxs)("td", { children: [i, " (", t.accountid, ")"] }),
              (0, e.jsx)("td", { children: a?.data?.email_address }),
              (0, e.jsx)("td", {
                children: (0, e.jsx)(is, {
                  name: i,
                  rgClanEventGIDs: t.clan_event_gids,
                }),
              }),
            ],
          });
        }
        function is(s) {
          const { name: t, rgClanEventGIDs: n } = s,
            [r, a, i] = (0, ts.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(u.$n, {
                onClick: a,
                children: ["See ", (0, Ye.D)(n.length), " Events"],
              }),
              (0, e.jsx)(N.E, {
                active: r,
                children: (0, e.jsx)(C.o0, {
                  bAlertDialog: !0,
                  closeModal: i,
                  strTitle: `${t}'s Events`,
                  children: n.map((c) => (0, e.jsx)(as, { gid: c }, c)),
                }),
              }),
            ],
          });
        }
        function as(s) {
          const { gid: t } = s,
            n = (0, f.RR)(t);
          return n
            ? (0, e.jsxs)("a", {
                href: `${H.TS.COMMUNITY_BASE_URL}gid/${n.clanSteamID.ConvertTo64BitString()}/partnerevents/edit/${t}`,
                target: "_blank",
                children: [
                  (0, e.jsx)("div", {
                    children: n.GetNameWithFallback(ae.Bhc),
                  }),
                  (0, e.jsx)("img", { src: n.GetImageURL("capsule", ae.Bhc) }),
                ],
              })
            : (0, e.jsxs)("div", { children: ["Loading ", t] });
        }
        function os(s) {
          const t = (r) =>
              window.sessionStorage.setItem("meetsteamadmin", `?tab=${r.key}`),
            n = [
              {
                name: "Interest Survey Results",
                key: "survey",
                contents: (0, e.jsx)(O.tH, { children: (0, e.jsx)(Vn, {}) }),
                onClick: t,
              },
              {
                name: "Event Management",
                key: "event",
                contents: (0, e.jsx)(O.tH, { children: (0, e.jsx)(wn, {}) }),
                onClick: t,
              },
              {
                name: "Sale Operators",
                key: "saleops",
                contents: (0, e.jsx)(O.tH, { children: (0, e.jsx)(ss, {}) }),
                onClick: t,
              },
              {
                name: "Post Event Surveys",
                key: "postsurvey",
                contents: (0, e.jsx)(O.tH, { children: (0, e.jsx)(Se, {}) }),
                onClick: t,
              },
            ];
          return (0, e.jsx)(q, {
            children: (0, e.jsx)(Cn, {
              children: (0, e.jsxs)("div", {
                className: X().AdminPageCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: X().PageTitle,
                    children: [
                      "Meet Steam Admin Dashboard ",
                      (0, Ie.Fd)("current_year", "application_config"),
                    ],
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)($e.V, { tabs: n }),
                  (0, e.jsx)("div", { className: te().ClearThings }),
                  (0, e.jsx)("br", {}),
                ],
              }),
            }),
          });
        }
        var ls = p(65946),
          cs = p(19324),
          ds = p(24806),
          qt = p(56330),
          us = p(85761),
          We = p.n(us);
        function hs(s) {
          const t = vs(),
            n = xs(),
            { data: r } = (0, Ze.js)(o.iA.accountid),
            [a, i] = (0, v.useState)(!1),
            [c, d] = (0, v.useState)(!1),
            [h, m] = (0, v.useState)(!1),
            [x, R] = (0, v.useState)(() => JSON.parse(JSON.stringify(n)));
          return t
            ? !r || r.m_bPlayerNamePending
              ? (0, e.jsx)(I.t, {
                  size: "medium",
                  position: "center",
                  string: (0, S.we)("#Loading"),
                })
              : (0, e.jsxs)("div", {
                  className: (0, L.A)(X().AdminPageCtn, We().Ctn),
                  children: [
                    (0, e.jsx)("div", {
                      className: X().PageTitle,
                      children: (0, S.we)("#MeetSteam_MainTitle"),
                    }),
                    (0, e.jsx)("hr", {}),
                    (0, e.jsx)("div", {
                      className: X().ColumnCtn,
                      children: (0, e.jsxs)("div", {
                        className: X().LeftCol,
                        children: [
                          (0, e.jsxs)("div", {
                            className: X().SectionCtn,
                            children: [
                              (0, e.jsxs)("h1", {
                                children: [
                                  " ",
                                  (0, S.PP)(
                                    "#MeetSteam_Intro",
                                    r.m_strPlayerName,
                                    (0, e.jsx)("br", {}),
                                  ),
                                ],
                              }),
                              (0, e.jsx)("p", {
                                className: X().IntroText,
                                children: (0, S.we)("#MeetSteam_Desc1"),
                              }),
                            ],
                          }),
                          (0, e.jsx)("div", {
                            className: X().SectionCtn,
                            children: (0, e.jsx)(fs, {
                              oRegistration: x,
                              fnSetRegistration: R,
                            }),
                          }),
                          (0, e.jsx)("div", {
                            className: X().SectionCtn,
                            children: (0, e.jsx)(ms, {
                              oRegistration: x,
                              fnSetRegistration: R,
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            className: (0, L.A)(X().SectionCtn, X().ActionBar),
                            children: [
                              (0, e.jsx)(u.jn, {
                                onClick: async () => {
                                  d(!0), i(!1), m(!1);
                                  const y = `${o.TS.PARTNER_BASE_URL}meetsteam/ajaxregisterinterest`,
                                    F = new FormData();
                                  F.append("sessionid", (0, o.KC)()),
                                    F.append(
                                      "registrationJson",
                                      JSON.stringify(x),
                                    );
                                  try {
                                    const M = await Q().post(y, F, {
                                      withCredentials: !0,
                                    });
                                    M.data.success != ge.R
                                      ? (console.error(
                                          "MeetSteamLanding failed " +
                                            M.data.success,
                                        ),
                                        i(!0))
                                      : m(!0);
                                  } catch (M) {
                                    console.error(
                                      "MeetSteamLanding failed caught",
                                      M,
                                    );
                                  }
                                  d(!1);
                                },
                                children: (0, S.we)("#Button_Submit"),
                              }),
                              c &&
                                (0, e.jsx)(I.t, {
                                  size: "medium",
                                  position: "center",
                                  string: (0, S.we)("#Saving"),
                                }),
                              h &&
                                (0, e.jsx)("div", {
                                  children: (0, S.we)("#Button_Saved"),
                                }),
                              a &&
                                (0, e.jsx)("div", {
                                  className: qt.ErrorStylesWithIcon,
                                  children: (0, S.we)(
                                    "#Error_ErrorCommunicatingWithNetwork",
                                  ),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                })
            : (0, e.jsx)("div", {
                className: We().Ctn,
                children: (0, S.we)("#MeetSteam_closed"),
              });
        }
        function ms(s) {
          const { oRegistration: t, fnSetRegistration: n } = s,
            { rgEvents: r, rgOldEvents: a, selectConference: i } = pe();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("h1", {
                children: (0, S.we)("#MeetSteam_Events_Interest"),
              }),
              (0, e.jsx)("p", {
                children: (0, S.PP)(
                  "#MeetSteam_Events_title",
                  (0, o.Tc)("meet_steam_year", "application_config") || "2025",
                ),
              }),
              (0, e.jsxs)("p", {
                children: [
                  (0, e.jsx)("span", {
                    className: We().Indicator,
                    children: "*",
                  }),
                  " ",
                  (0, S.PP)("#MeetSteam_Events_desc"),
                ],
              }),
              !!i &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("hr", {}),
                    (0, e.jsx)("p", {
                      children: (0, S.we)("#MeetSteam_ConferenceOrg"),
                    }),
                    (0, e.jsx)(Mt, { ...s, rgConference: [i] }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)("hr", {}),
                    (0, e.jsx)("h2", {
                      children: (0, S.we)("#MeetSteam_OtherConference"),
                    }),
                  ],
                }),
              (0, e.jsx)(Mt, { ...s, rgConference: r }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(u.pd, {
                type: "text",
                value: t.suggestion || "",
                onChange: (c) => n({ ...t, suggestion: c.currentTarget.value }),
                label: (0, S.we)("#MeetSteam_others"),
              }),
              a?.length > 0 &&
                (0, e.jsx)(bt.qx, {
                  bStartMinimized: !0,
                  title: (0, S.we)("#MeetSteam_PastEvents", a.length),
                  children: (0, e.jsx)(Mt, { ...s, rgConference: a }),
                }),
            ],
          });
        }
        function Mt(s) {
          const { rgConference: t } = s;
          return (0, e.jsxs)("table", {
            children: [
              (0, e.jsx)("thead", {
                children: (0, e.jsxs)("tr", {
                  children: [
                    (0, e.jsx)("th", {}),
                    (0, e.jsx)("th", {}),
                    (0, e.jsx)("th", {}),
                    (0, e.jsx)("th", {}),
                  ],
                }),
              }),
              (0, e.jsx)("tbody", {
                children: t.map((n) =>
                  (0, e.jsxs)(
                    "tr",
                    {
                      children: [
                        (0, e.jsx)("td", {
                          children: n.attending
                            ? (0, e.jsx)("span", {
                                className: We().Indicator,
                                children: "*",
                              })
                            : "",
                        }),
                        (0, e.jsxs)("td", {
                          children: [
                            (0, e.jsx)("div", { children: n.name }),
                            (0, e.jsx)("div", { children: n.place }),
                          ],
                        }),
                        (0, e.jsx)("td", {
                          children: (0, e.jsx)("div", { children: n.time }),
                        }),
                        (0, e.jsx)("td", {
                          children: (0, e.jsx)(gs, { ...s, conf: n }),
                        }),
                      ],
                    },
                    n.id,
                  ),
                ),
              }),
            ],
          });
        }
        function gs(s) {
          const { oRegistration: t, fnSetRegistration: n, conf: r } = s;
          return (0, e.jsx)(u.Yh, {
            checked: t.attending?.includes(r.id),
            onChange: (a) => {
              let i = t.attending ? [...t.attending] : [];
              a && !i.includes(r.id)
                ? (i.push(r.id), n({ ...t, attending: i }))
                : !a &&
                  i.includes(r.id) &&
                  (i.splice(i.indexOf(r.id), 1), n({ ...t, attending: i }));
            },
            tooltip: (0, S.we)("#MeetSteam_attend_ttip"),
          });
        }
        function fs(s) {
          const { oRegistration: t, fnSetRegistration: n } = s,
            r = (0, Ze.js)(o.iA.accountid),
            a = ys(t?.partner_id),
            [i, c] = (0, v.useState)(
              () => !!((t.email_override && t.email_override != a) || !a),
            ),
            [d, h, m] = (0, ls.q3)(() => [
              !t.have_you_met_steam,
              !!t.english_not_good,
              t.preferred_language,
            ]);
          return r.data
            ? (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h1", { children: (0, S.we)("#MeetSteam_You") }),
                  (0, e.jsx)("p", {
                    children: (0, S.we)("#MeetSteam_You_Desc"),
                  }),
                  (0, e.jsx)(ps, {
                    nPartnerID: t.partner_id,
                    label: (0, S.we)("#MeetSteam_You_Company"),
                    setPartnerID: (x) => n({ ...t, partner_id: x }),
                  }),
                  (0, e.jsxs)("div", {
                    className: We().EmailInfoRow,
                    children: [
                      (0, e.jsx)("div", {
                        className: We().EmailField,
                        children: (0, e.jsx)(u.pd, {
                          type: "string",
                          label: (0, S.we)("#MeetSteam_You_Email"),
                          disabled: !i,
                          value: t.email_override || a || "",
                          placeholder: (0, S.we)("#MeetSteam_You_EmailMissing"),
                          mustBeEmail: !0,
                          onChange: (x) =>
                            n({ ...t, email_override: x.currentTarget.value }),
                        }),
                      }),
                      !i &&
                        (0, e.jsx)(u.Yh, {
                          checked: i,
                          onChange: c,
                          label: (0, S.we)("#MeetSteam_You_Update"),
                          tooltip: (0, S.we)("#MeetSteam_You_Update_ttip"),
                        }),
                    ],
                  }),
                  (0, e.jsx)(u.JU, {
                    children: (0, S.we)("#MeetSteam_NeverMet"),
                  }),
                  (0, e.jsx)(u.Yh, {
                    label: (0, S.we)("#MeetSteam_NeverMetNo"),
                    checked: d,
                    onChange: (x) => n({ ...t, have_you_met_steam: !x }),
                  }),
                  (0, e.jsx)(u.JU, {
                    children: (0, S.we)("#MeetSteam_CapabableEnglish"),
                  }),
                  (0, e.jsxs)("div", {
                    className: We().RadioButtonCtn,
                    children: [
                      (0, e.jsx)(u.Od, {
                        className: We().RadioButtons,
                        checked: !h,
                        onChange: (x) =>
                          x &&
                          n({
                            ...t,
                            english_not_good: void 0,
                            preferred_language: void 0,
                          }),
                        label: (0, S.we)("#MeetSteam_CapabableEnglish_Yes"),
                      }),
                      (0, e.jsx)(u.Od, {
                        className: We().RadioButtons,
                        checked: h,
                        onChange: (x) =>
                          x &&
                          n({
                            ...t,
                            english_not_good: !0,
                            preferred_language: (0, ae.sfN)(o.TS.LANGUAGE),
                          }),
                        label: (0, S.we)("#MeetSteam_CapabableEnglish_No"),
                      }),
                    ],
                  }),
                  h &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        (0, e.jsx)(u.JU, {
                          children: (0, S.we)("#MeetSteam_LanguagePref"),
                        }),
                        (0, e.jsx)(ds.Ng, {
                          selectedLang: m,
                          bAllowUnsetOption: !1,
                          strTooltip: (0, S.we)("#MeetSteam_LanguagePref_ttip"),
                          fnOnLanguageChanged: (x) =>
                            n({ ...t, preferred_language: x }),
                        }),
                      ],
                    }),
                ],
              })
            : (0, e.jsx)(I.t, {
                size: "medium",
                position: "center",
                string: (0, S.we)("#Loading"),
              });
        }
        function ps(s) {
          const { nPartnerID: t, setPartnerID: n, label: r } = s,
            a = (0, cs.c)(o.iA.accountid);
          if (!a)
            return (0, e.jsx)(I.t, {
              size: "small",
              position: "center",
              string: (0, S.we)("#Loading"),
            });
          if (a.length == 1) return null;
          const i = [];
          return (
            a.forEach((c) =>
              i.push({ label: c?.partner_name, data: c.partnerid }),
            ),
            (0, e.jsx)(u.m, {
              layout: "inline",
              label: r,
              rgOptions: i,
              selectedOption: t,
              onChange: (c) => {
                n(c.data);
              },
            })
          );
        }
        function vs() {
          const [s] = (0, v.useState)(() =>
            (0, o.Tc)("registration_open", "application_config"),
          );
          return s;
        }
        function xs() {
          const [s] = (0, v.useState)(
            () => (0, o.Tc)("user_reg", "application_config") || {},
          );
          return s;
        }
        function Ss() {
          const [s] = (0, v.useState)(
            () => (0, o.Tc)("partner_user_email", "application_config") || "",
          );
          return s;
        }
        function js() {
          const [s] = (0, v.useState)(() =>
            (0, o.Tc)("primary_partner_id", "application_config"),
          );
          return s;
        }
        function ys(s) {
          const t = Ss(),
            n = js(),
            r = Bt(o.iA.accountid, s != n ? s : null);
          return s == n ? t : r?.email;
        }
        var Es = p(65804),
          Rs = p(13038),
          Cs = p.n(Rs);
        function As(s) {
          const { data: t } = (0, Ze.js)(o.iA.accountid),
            n = Is(),
            r = ws(),
            [a, i] = (0, v.useState)(() => r || ""),
            { surveyGID: c } = (0, ue.g)(),
            [d, h] = (0, v.useState)(!1),
            [m, x] = (0, v.useState)(!1),
            [R, y] = (0, v.useState)(!1);
          return !t || t.m_bPlayerNamePending
            ? (0, e.jsx)(I.t, {
                size: "medium",
                position: "center",
                string: (0, S.we)("#Loading"),
              })
            : (0, e.jsxs)("div", {
                className: (0, L.A)(X().AdminPageCtn, Cs().Ctn),
                children: [
                  (0, e.jsx)("div", {
                    className: X().PageTitle,
                    children: (0, S.we)("#MeetSteam_PostSurvey_Title", n),
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)("div", {
                    className: X().ColumnCtn,
                    children: (0, e.jsxs)("div", {
                      className: X().LeftCol,
                      children: [
                        (0, e.jsxs)("div", {
                          className: X().SectionCtn,
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, S.we)(
                                "#MeetSteam_PostSurvey_Question",
                              ),
                            }),
                            (0, e.jsx)("textarea", {
                              rows: 10,
                              onChange: (F) => i(F.currentTarget.value),
                              value: a,
                              autoFocus: !0,
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, L.A)(X().SectionCtn, X().ActionBar),
                          children: [
                            (0, e.jsx)(u.jn, {
                              onClick: async () => {
                                x(!0), h(!1), y(!1);
                                const F = `${o.TS.PARTNER_BASE_URL}meetsteam/ajaxsubmitsurvey/${c}`,
                                  M = new FormData();
                                M.append("gid", c),
                                  M.append("sessionid", (0, o.KC)());
                                let P = {
                                  gid: c,
                                  simple_response: a,
                                  submit_time: Math.floor(
                                    new Date().getTime() / 1e3,
                                  ),
                                };
                                M.append("surveyjson", JSON.stringify(P));
                                try {
                                  const J = await Q().post(F, M, {
                                    withCredentials: !0,
                                  });
                                  J.data.success != ge.R
                                    ? (console.error(
                                        "MeetSteamLanding failed " +
                                          J.data.success,
                                      ),
                                      h(!0))
                                    : y(!0);
                                } catch (J) {
                                  console.error(
                                    "MeetSteamLanding failed caught",
                                    J,
                                  );
                                }
                                x(!1);
                              },
                              children: (0, S.we)("#Button_Submit"),
                            }),
                            m &&
                              (0, e.jsx)(I.t, {
                                size: "medium",
                                position: "center",
                                string: (0, S.we)("#Saving"),
                              }),
                            R &&
                              (0, e.jsx)("div", {
                                children: (0, S.we)("#Button_Saved"),
                              }),
                            d &&
                              (0, e.jsx)("div", {
                                className: qt.ErrorStylesWithIcon,
                                children: (0, S.we)(
                                  "#Error_ErrorCommunicatingWithNetwork",
                                ),
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              });
        }
        function Is() {
          const [s] = (0, v.useState)(
            () => (0, o.Tc)("survey_event_name", "application_config") || "",
          );
          return s;
        }
        function ws() {
          const [s] = (0, v.useState)(
            () => (0, o.Tc)("survey_data", "application_config") || "",
          );
          return s;
        }
        var en = p(65532);
        function bs(s) {
          const t = Ns(),
            n = Ls(),
            r = Ms(),
            { surveyGID: a } = (0, ue.g)(),
            { bIsLoading: i, events: c } = (0, f.PB)(t),
            [d, h] = (0, v.useMemo)(
              () => [
                n
                  .map((R) => {
                    const y = new l.b(R.steamid);
                    if (r.has(y.GetAccountID())) {
                      const F = r.get(y.GetAccountID());
                      return JSON.parse(F[0].jsondata).partner_id;
                    }
                    return null;
                  })
                  .filter(Boolean),
                n.map((R) => new l.b(R.steamid).GetAccountID()),
              ],
              [r, n],
            ),
            m = (0, g.vh)(d),
            x = (0, be.B3)(h);
          return i || !m || !x
            ? (0, e.jsx)(I.t, {
                string: "Loading Event, Partner and User Info",
              })
            : (0, e.jsx)(Ds, {
                rgSurveyResults: n,
                mapAccountsToReg: r,
                meetSteamEvents: c,
              });
        }
        const ot = (0, _.FB)();
        function Ds(s) {
          const {
              rgSurveyResults: t,
              mapAccountsToReg: n,
              meetSteamEvents: r,
            } = s,
            a = (0, v.useMemo)(() => {
              if (!t) return null;
              const c = new Map();
              r.forEach((h) => c.set(h.GID, h));
              const d = [];
              return (
                t.forEach((h) => {
                  const m = JSON.parse(h.jsondata),
                    x = new l.b(h.steamid);
                  let R = {
                    feedback: m.simple_response,
                    accountid: x.GetAccountID(),
                  };
                  if (n.has(x.GetAccountID())) {
                    const y = n.get(x.GetAccountID()),
                      F = JSON.parse(y[0].jsondata);
                    (R.partner_id = F.partner_id),
                      (R.email = F.email_override),
                      (R.name = F.name),
                      (R.registrations = "");
                    const M = (0, g.Yd)(F.partner_id);
                    M && (R.partner_name = M.name),
                      y.forEach((P) => {
                        const J = c.get(P.gidEvent);
                        if (J) {
                          const Xe = J.jsondata.meet_steam_groups.find(
                            (st) => st.group_id === P.group_id,
                          ).localized_session_title[ae.Bhc];
                          R.registrations.length > 0 &&
                            (R.registrations += "|"),
                            (R.registrations += Xe);
                        }
                      });
                  } else {
                    const y = (0, be.CF)(x.GetAccountID());
                    y && (R.name = y.persona_name);
                  }
                  d.push(R);
                }),
                d
              );
            }, [n, r, t]),
            i = (0, v.useMemo)(
              () => [
                ot.accessor("name", { header: "Name", size: 150 }),
                ot.accessor("feedback", {
                  header: "Feedback",
                  size: 500,
                  cell: en.Gb,
                }),
                ot.accessor("registrations", {
                  header: "Sessions",
                  size: 200,
                  cell: Ts,
                }),
                ot.accessor("accountid", { header: "Account ID", size: 150 }),
                ot.accessor("email", { header: "Email", size: 150 }),
                ot.accessor("partner_name", {
                  header: "Partner Name",
                  size: 200,
                }),
              ],
              [],
            );
          return a
            ? (0, e.jsx)(O.tH, {
                children: (0, e.jsxs)("div", {
                  className: X().AdminPageCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: X().PageTitle,
                      children: "Survey Results",
                    }),
                    (0, e.jsx)("hr", {}),
                    (0, e.jsx)(u.$n, {
                      id: "download-csv",
                      onClick: () =>
                        (0, Vt.K)(
                          "meetsteam_survey_results.csv",
                          a,
                          i.map((c) => ({
                            accessorKey: c.accessorKey,
                            header:
                              typeof c.header == "string"
                                ? c.header
                                : (c.accessorKey ?? ""),
                          })),
                        ),
                      style: { width: "120px" },
                      children: "Download CSV",
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)(Z.k, {
                      columns: i,
                      data: a,
                      getRowKey: (c) => c,
                      stickyHeader: !0,
                      nItemHeight: 28,
                      overscan: a.length,
                    }),
                  ],
                }),
              })
            : (0, e.jsx)(I.t, { string: (0, S.we)("#Loading") });
        }
        function Ts(s) {
          return s.getValue()?.length > 0
            ? (0, e.jsx)(en.DP, { text: s.getValue(), regExp: /\|/ })
            : "";
        }
        function Ms() {
          const s = Ps();
          return (0, v.useMemo)(() => {
            const n = new Map();
            return (
              s.forEach((r, a) => {
                r.forEach((i) => {
                  const c = new l.b(i.steamid);
                  n.has(c.GetAccountID()) || n.set(c.GetAccountID(), []),
                    (i.gidEvent = a),
                    n.get(c.GetAccountID()).push(i);
                });
              }),
              n
            );
          }, [s]);
        }
        function Ps() {
          const [s] = (0, v.useState)(() => {
            const t = new Map(),
              n = (0, o.Tc)("registration_by_gid", "application_config") || {};
            for (const r in n) {
              const a = n[r];
              t.set(r, a);
            }
            return t;
          });
          return s;
        }
        function Ns() {
          const [s] = (0, v.useState)(
            () => (0, o.Tc)("event_gids", "application_config") || [],
          );
          return s;
        }
        function Ls() {
          const [s] = (0, v.useState)(
            () => (0, o.Tc)("survey_results", "application_config") || [],
          );
          return s;
        }
        const ct = {
          YearlySurvery: (s = ":year") => `/${s}`,
          PostEventSurvey: (s = ":surveyGID") => `/survey/${s}`,
          AdminDashboard: () => "/admin",
          PostEventSurveyResults: (s = ":surveyGID") => `/surveyresults/${s}`,
        };
        function Fs(s) {
          return (
            (0, v.useEffect)(() => {
              Es.O3.Init();
            }, []),
            (0, e.jsx)(Te.m, {
              children: (0, e.jsx)(ee.Kd, {
                basename: (0, Ge.C)() + "meetsteam/",
                children: (0, e.jsxs)(ue.dO, {
                  children: [
                    (0, e.jsx)(ue.qh, {
                      exact: !0,
                      path: Ge.B.DiagData(),
                      render: (t) =>
                        (0, e.jsx)(qe.z, {
                          ...t,
                          strConfigID: "application_config",
                        }),
                    }),
                    (0, e.jsx)(ue.qh, {
                      exact: !0,
                      path: ct.AdminDashboard(),
                      component: os,
                    }),
                    (0, e.jsx)(ue.qh, {
                      exact: !0,
                      path: ct.YearlySurvery(":year(\\d+)"),
                      component: hs,
                    }),
                    (0, e.jsx)(ue.qh, {
                      exact: !0,
                      path: ct.PostEventSurvey(":surveyGID(\\d+)"),
                      component: As,
                    }),
                    (0, e.jsx)(ue.qh, {
                      exact: !0,
                      path: ct.PostEventSurveyResults(":surveyGID(\\d+)"),
                      component: bs,
                    }),
                    (0, e.jsx)(ue.qh, { component: Me.a }),
                  ],
                }),
              }),
            })
          );
        }
      },
      32: (Ee, it, p) => {
        "use strict";
        p.d(it, { k: () => le });
        var e = p(7850),
          Ge = p(18938),
          v = p(67796),
          ee = p(16666),
          ue = p(92148),
          Te = p(59366),
          qe = p(64238),
          Me = p.n(qe),
          O = p(90626),
          k = p(31718),
          te = p.n(k),
          $e = p(19298),
          Ke = p(20169),
          X = p(79089),
          Ie = p(33902);
        const ae = O.memo(function (f) {
          const {
              virtualizer: j,
              bDynamic: A,
              scrollAlign: u,
              bNativeScrollIntoView: w,
              idx: b,
              rowGap: C,
              renderItem: N,
            } = f,
            I = O.useCallback(
              ($, L, z) => (j.scrollToIndex(b, { align: u }), !0),
              [j, b, u],
            );
          return (0, e.jsx)($e.Z, {
            ref: A ? j.measureElement : void 0,
            navKey: `VirtualizedListIndex-${b}`,
            "data-index": b,
            fnScrollIntoViewHandler: w ? void 0 : I,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: C },
            children: N(b),
          });
        });
        function ge(E) {
          return (0, Ge.QS)(
            (f) => {
              if (!f) return;
              const j = new f.ownerDocument.defaultView.ResizeObserver((w) => {
                E(w[0]);
              });
              let A = [],
                u = f;
              for (; u && u != null; )
                j.observe(u), A.push(u), (u = u.parentElement);
              return () => {
                A.forEach((w) => j.unobserve(w));
              };
            },
            [E],
          );
        }
        function Le(E, f) {
          const j = E.getBoundingClientRect().top;
          return f
            ? j - f.getBoundingClientRect().top - f.clientTop + f.scrollTop
            : j + (E.ownerDocument.defaultView?.scrollY ?? 0);
        }
        const Oe = O.forwardRef(function (f, j) {
          const {
              nRows: A,
              nItemHeight: u,
              nRowGap: w,
              overscan: b,
              renderItem: C,
              bDynamic: N,
              measureElement: I,
              className: $,
              forceVirtualizeType: L,
              hintVirtualizeType: z,
              scrollAlign: S,
              bNativeScrollIntoView: U,
              initialOffset: H,
              onOffsetChange: ie,
              ...se
            } = f,
            [Se, Be] = (0, O.useState)(L ?? z),
            [oe, ve] = O.useState(),
            [re, q] = O.useState(),
            fe = O.useRef(null),
            ze = O.useCallback(
              (he) => {
                if (!he) return;
                const be = (0, X._f)(he, "y"),
                  me = Le(he, L == "window" ? null : be);
                (0, O.startTransition)(() => {
                  L != "window" && ve(be || void 0),
                    q(me),
                    L || Be(be ? "element" : "window");
                });
              },
              [L],
            ),
            je = ge((he) => {
              if (!fe.current) return;
              const be = Le(fe.current, oe);
              (0, O.startTransition)(() => {
                q(be);
              });
            }),
            ye = (0, Ge.Ue)(ze, fe, je, j),
            ce = {
              nRows: A,
              nItemHeight: u,
              nRowGap: w,
              overscan: b,
              renderItem: C,
              bDynamic: N,
              measureElement: I,
              forceVirtualizeType: L,
              hintVirtualizeType: z,
              scrollAlign: S,
              bNativeScrollIntoView: U,
              initialOffset: H,
              onOffsetChange: ie,
            };
          return (0, e.jsx)($e.Z, {
            className: $,
            ref: ye,
            ...se,
            children: (0, e.jsxs)(O.Suspense, {
              children: [
                Se === "element" &&
                  (0, e.jsx)(_e, {
                    ...ce,
                    nScrollMargin: re || 0,
                    elScrollable: oe,
                  }),
                Se === "window" && (0, e.jsx)(we, { ...ce, nScrollMargin: re }),
              ],
            }),
          });
        });
        function Fe(E, f, j) {
          O.useEffect(() => {
            j ||
              (0, O.startTransition)(() => {
                E.measure();
              });
          }, [E, f, j]);
        }
        function we(E) {
          const {
              nScrollMargin: f,
              nRows: j,
              nItemHeight: A,
              nRowGap: u = 10,
              overscan: w = 6,
              initialOffset: b,
              onOffsetChange: C,
              measureElement: N,
              bDynamic: I,
            } = E,
            $ = (0, Ie.d)(),
            L = A + u,
            z = (0, ue.XW)({
              count: j,
              scrollMargin: f,
              estimateSize: O.useCallback(() => L, [L]),
              measureElement: N,
              overscan: w,
              initialOffset: b ?? (() => window.scrollY),
              initialRect: void 0,
              observeElementOffset: l,
              observeElementRect: o,
              onChange(S, U) {
                C?.(S.scrollOffset);
              },
            });
          return (
            (z.shouldAdjustScrollPositionOnItemSizeChange = (S) =>
              f !== void 0 && S.start < (z.scrollOffset ?? 0)),
            Fe(z, L, I),
            (0, e.jsx)(Pe, { ...E, virtualizer: z })
          );
        }
        function _e(E) {
          const {
              nRows: f,
              nScrollMargin: j,
              elScrollable: A,
              nItemHeight: u,
              nRowGap: w = 10,
              overscan: b = 6,
              initialOffset: C,
              onOffsetChange: N,
              measureElement: I,
              bDynamic: $,
            } = E,
            L = u + w,
            z = (0, Ie.d)(),
            S = (0, ue.Te)({
              count: f,
              scrollMargin: j,
              getScrollElement: () => (
                A &&
                  S.scrollElement !== A &&
                  C === void 0 &&
                  (S.scrollOffset = A.scrollTop),
                A ?? null
              ),
              estimateSize: O.useCallback(() => L, [L]),
              measureElement: I,
              overscan: b,
              initialRect: A
                ? void 0
                : {
                    height: z.viewportHeight?.value ?? 1e3,
                    width: z.viewportWidth?.value ?? 1e3,
                  },
              initialOffset: C,
              observeElementOffset: l,
              observeElementRect: g,
              onChange(U, H) {
                N?.(U.scrollOffset);
              },
            });
          return (
            (S.shouldAdjustScrollPositionOnItemSizeChange = (U) =>
              A !== void 0 && U.start < (S.scrollOffset ?? 0)),
            Fe(S, L, $),
            (0, e.jsx)(Pe, { ...E, virtualizer: S })
          );
        }
        function Pe(E) {
          const {
              virtualizer: f,
              nRowGap: j,
              renderItem: A,
              bDynamic: u,
              scrollAlign: w = "center",
              bNativeScrollIntoView: b,
            } = E,
            C = f.getVirtualItems(),
            N = C.length ? C[0].start - f.options.scrollMargin : 0,
            I = Math.max(0, f.getTotalSize());
          return (0, e.jsx)($e.Z, {
            "flow-children": "column",
            navEntryPreferPosition: Ke.iU.MAINTAIN_Y,
            style: { height: `${I}px`, width: "100%", position: "relative" },
            children: (0, e.jsx)("div", {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${N}px )`,
              },
              children: C.map(($) =>
                (0, e.jsx)(
                  ae,
                  {
                    virtualizer: f,
                    bDynamic: u,
                    scrollAlign: w,
                    bNativeScrollIntoView: b,
                    idx: $.index,
                    rowGap: j,
                    renderItem: A,
                  },
                  $.key,
                ),
              ),
            }),
          });
        }
        function Q(E) {
          return (...f) => {
            queueMicrotask(() => {
              (0, O.startTransition)(() => {
                E(...f);
              });
            });
          };
        }
        function l(E, f) {
          const j = E.scrollElement;
          if (!j) return;
          let A;
          "scrollX" in j
            ? (A = Q((b) =>
                f(j[E.options.horizontal ? "scrollX" : "scrollY"], b),
              ))
            : (A = Q((b) =>
                f(j[E.options.horizontal ? "scrollLeft" : "scrollTop"], b),
              ));
          const u = () => A(!0),
            w = () => A(!1);
          return (
            w(),
            j.addEventListener("scroll", u, { passive: !0 }),
            j.addEventListener("scrollend", w, { passive: !0 }),
            () => {
              j.removeEventListener("scroll", u),
                j.removeEventListener("scrollend", w);
            }
          );
        }
        function o(E, f) {
          const j = E.scrollElement;
          if (!j) return;
          const A = Q(() => f({ width: j.innerWidth, height: j.innerHeight }));
          return (
            A(),
            j.addEventListener("resize", A, { passive: !0 }),
            () => {
              j.removeEventListener("resize", A);
            }
          );
        }
        function g(E, f) {
          const j = E.scrollElement;
          if (!j) return;
          const A = Q((b) =>
            f({ width: Math.round(b.width), height: Math.round(b.height) }),
          );
          A(j.getBoundingClientRect());
          const u = j.ownerDocument.defaultView;
          if (!u?.ResizeObserver) return () => {};
          const w = new u.ResizeObserver((b) => {
            if (b[0]?.borderBoxSize[0]) {
              A({
                width: b[0].borderBoxSize[0].inlineSize,
                height: b[0].borderBoxSize[0].blockSize,
              });
              return;
            }
            A(j.getBoundingClientRect());
          });
          return (
            w.observe(j, { box: "border-box" }),
            () => {
              w.unobserve(j);
            }
          );
        }
        var D = p(11243);
        const T = O.createContext(void 0);
        function W(E) {
          const { table: f, setColumnSizeOverride: j } = E,
            A = (0, O.useRef)(f);
          A.current = f;
          const u = (0, O.useMemo)(
            () => ({ table: A.current, setColumnSizeOverride: j }),
            [j],
          );
          return (0, e.jsx)(T.Provider, { value: u, children: E.children });
        }
        const le = O.forwardRef(function (f, j) {
          const {
              data: A,
              columns: u,
              className: w,
              width: b,
              height: C,
              nScrollMargin: N,
              nItemHeight: I,
              nHeaderHeight: $,
              overscan: L = 6,
              stickyHeader: z,
              getRowKey: S,
              initialSorting: U,
              initialColumnFilters: H,
              initialGrouping: ie,
              initialExpanded: se,
              initialColumnPinning: Se,
              initialColumnVisibility: Be,
              onGroupingChange: oe,
              onVisibleRowsChange: ve,
              renderGroup: re,
              virtualizeType: q = "element",
            } = f,
            fe = (0, O.useRef)(null),
            [ze, je] = (0, O.useState)({}),
            [ye, ce] = (0, O.useState)({}),
            he = u.map((_) =>
              "accessorKey" in _
                ? { ..._, filterFn: ze[_.accessorKey] ?? _.filterFn }
                : _,
            ),
            be = he.map((_) => {
              let Z = ye[_.id];
              return (
                Z === void 0 && "accessorKey" in _ && (Z = ye[_.accessorKey]),
                (Z ??= _.size),
                { ..._, size: Z }
              );
            }),
            me = (0, v.N4)({
              data: A,
              columns: be,
              defaultColumn: { minSize: 60, maxSize: 800 },
              initialState: {
                sorting: U,
                grouping: ie ?? [],
                expanded: se,
                columnPinning: Se ?? {},
                columnFilters: H,
                columnVisibility: Be,
              },
              getCoreRowModel: (0, ee.HT)(),
              getSortedRowModel: (0, ee.h5)(),
              getFilteredRowModel: (0, ee.hM)(),
              getGroupedRowModel: (0, ee.cU)(),
              columnResizeMode: "onChange",
            }),
            { rows: ft, flatRows: Ve } = me.getRowModel(),
            Re = ft.flatMap((_) => (_.getIsExpanded() ? [_, ..._.subRows] : _)),
            Ye = me.getState().grouping;
          (0, O.useEffect)(() => {
            oe?.(Ye);
          }, [oe, Ye]),
            (0, O.useEffect)(() => {
              ve?.(Re);
            }, [ve, Re.length]);
          const Qe = (0, ue.Te)({
              count: Re.length,
              scrollMargin: N,
              getScrollElement: O.useCallback(
                () => (q === "element" ? tt.current : window),
                [q],
              ),
              scrollToFn(_, Z, Ce) {
                return q === "window"
                  ? (0, Te.e8)(_, Z, Ce)
                  : (0, Te.Ox)(_, Z, Ce);
              },
              estimateSize: O.useCallback(() => I, [I]),
              overscan: L,
              initialRect: void 0,
              observeElementOffset: l,
              observeElementRect(_, Z) {
                return q === "window" ? o(_, Z) : g(_, Z);
              },
              getItemKey(_) {
                const Z = Re[_];
                return `${Z.parentId ?? ""}${S(_, Z.original)}`;
              },
            }),
            dt = (0, O.useRef)(0),
            pt = O.useMemo(() => {
              const _ = me.getFlatHeaders(),
                Z = {};
              for (let Ce = 0; Ce < _.length; Ce++) {
                const Ue = _[Ce];
                (Z[`--header-${Ue.id}-size`] = `${Ue.getSize()}px`),
                  (Z[`--col-${Ue.column.id}-size`] =
                    `${Ue.column.getSize()}px`);
              }
              return (dt.current += 1), Z;
            }, [me.getState().columnSizingInfo, me.getState().columnSizing, u]);
          O.useEffect(() => {
            (0, O.startTransition)(() => {
              Qe.measure();
            });
          }, [Qe, I]);
          const vt = Qe.getVirtualItems(),
            ut = vt[0]?.start ?? 0,
            xt = Qe.getTotalSize(),
            et = (0, ue.Te)({
              estimateSize(_) {
                return Re[0]?.getVisibleCells()[_].column.getSize() ?? 0;
              },
              count: Re[0]?.getVisibleCells().length ?? 0,
              overscan: 6,
              horizontal: !0,
              getScrollElement: O.useCallback(
                () => (q === "element" ? tt.current : window),
                [q],
              ),
              scrollToFn(_, Z, Ce) {
                return q === "window"
                  ? (0, Te.e8)(_, Z, Ce)
                  : (0, Te.Ox)(_, Z, Ce);
              },
              rangeExtractor(_) {
                const Z = Re[0]?.getVisibleCells() ?? [],
                  Ce = new Set((0, Te.vp)(_));
                return (
                  Z.forEach((Ue, nt) => {
                    Ue.column.getIsPinned() && Ce.add(nt);
                  }),
                  Array.from(Ce).sort((Ue, nt) => Ue - nt)
                );
              },
              observeElementOffset: l,
              observeElementRect(_, Z) {
                return q === "window" ? o(_, Z) : g(_, Z);
              },
            });
          (0, O.useEffect)(() => {
            et.measure();
          }, [dt.current]),
            (0, O.useImperativeHandle)(
              j,
              () => ({
                getData() {
                  return Ve.map((_) => _.original);
                },
                getVisibleRows() {
                  return Re;
                },
                getState: me.getState,
                getColumns: me.getAllColumns,
                getColumnDefs() {
                  return he;
                },
                setColumnFilters: me.setColumnFilters,
                resetColumnFilters: me.resetColumnFilters,
                setColumnFilterFnOverride: je,
                getColumnFilterFnOverride() {
                  return ze;
                },
                getContainerElement() {
                  return tt.current;
                },
                getTableElement() {
                  return fe.current;
                },
                scrollToColumn(_, Z) {
                  et.scrollToIndex(_.getIndex(), Z);
                },
              }),
              [
                Ve,
                Re,
                me.setColumnFilters,
                me.resetColumnFilters,
                me.getState,
                me.getAllColumns,
                ze,
                he,
                et,
              ],
            );
          const tt = (0, O.useRef)(null),
            St = z ? ($ ?? 0) : 0;
          let ht = 0;
          const jt = Re[0]?.getVisibleCells(),
            lt = et.getVirtualItems(),
            mt = lt[lt.length - 1]?.end;
          for (const _ of lt)
            jt[_.index]?.column.getIsPinned() && (ht += _.size);
          return (0, e.jsx)(W, {
            table: me,
            setColumnSizeOverride: ce,
            children: (0, e.jsx)("div", {
              className: w,
              ref: tt,
              style: {
                width: b,
                height: C,
                overflow: q === "element" ? "auto" : void 0,
                maxWidth: "fit-content",
                scrollPadding: `${St}px 0 0 ${ht}px`,
              },
              children: (0, e.jsxs)("div", {
                role: "table",
                ref: fe,
                "aria-rowcount": A.length,
                style: {
                  minHeight: xt,
                  width: me.getTotalSize(),
                  "--virtualPos": `${ut}px`,
                  ...pt,
                },
                children: [
                  me
                    .getHeaderGroups()
                    .map((_) =>
                      (0, e.jsx)(
                        xe,
                        { group: _, sticky: z, nHeaderHeight: $ },
                        _.id,
                      ),
                    ),
                  vt.map((_) =>
                    (0, e.jsx)(
                      K,
                      {
                        row: Re[_.index],
                        size: _.size,
                        rowVirtualizer: et,
                        index: _.index,
                        measureRef: Qe.measureElement,
                        scrollContainerRef: tt,
                        nItemHeight: I,
                        renderGroup: re,
                        rowEnd: mt,
                      },
                      _.key,
                    ),
                  ),
                ],
              }),
            }),
          });
        });
        function pe(E) {
          const f = E.getIsPinned(),
            j = f === "left" && E.getIsLastColumn("left"),
            A = f === "right" && E.getIsFirstColumn("right");
          return {
            borderRight: j
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
            borderLeft: A
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
            left: f === "left" ? `${E.getStart("left")}px` : void 0,
            right: f === "right" ? `${E.getAfter("right")}px` : void 0,
            position: f ? "sticky" : "relative",
            minWidth: E.getSize(),
            zIndex: f ? 1 : 0,
          };
        }
        function xe(E) {
          const { group: f, sticky: j, nHeaderHeight: A } = E;
          return (0, e.jsx)("div", {
            role: "row",
            className: Me()(
              te().FancyTableRow,
              te().FancyTableHeader,
              j && te().StickyHeader,
            ),
            children: f.headers.map((u, w) => {
              const b = f.headers[w - 1],
                C = {},
                N = u.column.getIsSorted();
              N &&
                !u.column.columnDef.meta?.bDisableSortButton &&
                (C["aria-sort"] = N === "asc" ? "ascending" : "descending");
              let I = "div";
              return (
                u.column.getCanSort() &&
                  !u.column.columnDef.meta?.bDisableSortButton &&
                  ((I = "button"),
                  (C.onClick = u.column.getToggleSortingHandler())),
                (0, e.jsx)(
                  de,
                  {
                    header: u,
                    prevHeader: b,
                    HeaderElement: I,
                    nHeaderHeight: A,
                    sortDirection: N,
                    strTooltip: u.column.columnDef.meta?.strHeaderTooltip,
                    conditionalProps: C,
                  },
                  u.id,
                )
              );
            }),
          });
        }
        const K = O.memo(function (f) {
          const {
            row: j,
            size: A,
            rowVirtualizer: u,
            measureRef: w,
            index: b,
            nItemHeight: C,
            renderGroup: N,
          } = f;
          return (0, e.jsx)("div", {
            role: "row",
            className: Me()(
              te().FancyTableRow,
              j.getCanExpand() && te().ExpandableRow,
            ),
            style: {
              minHeight: j.getCanExpand() ? void 0 : `${A}px`,
              transform: "translateY(var(--virtualPos))",
            },
            "data-even": b % 2 === 0,
            "data-index": b,
            ref: w,
            children: (0, e.jsx)(ne, {
              row: j,
              rowVirtualizer: u,
              nItemHeight: C,
              renderGroup: N,
            }),
          });
        });
        function ne(E) {
          const { row: f, rowVirtualizer: j, renderGroup: A } = E;
          if (f.getCanExpand()) {
            const N = A ?? (() => f.groupingValue);
            return (0, e.jsxs)("button", {
              className: te().RowGroup,
              "aria-expanded": f.getIsExpanded(),
              onClick: f.getToggleExpandedHandler(),
              children: [
                (0, e.jsx)("div", { className: te().GroupExpandIndicator }),
                N(f),
              ],
            });
          }
          const u = j.getVirtualItems(),
            w = f.getVisibleCells();
          let b = 0,
            C;
          return (0, e.jsx)(e.Fragment, {
            children: u.map((N) => {
              const I = w[N.index],
                $ = I.column.getIsPinned();
              return (
                $ ? (b += N.size) : C === void 0 && (C = N.start),
                (0, e.jsx)(
                  V,
                  {
                    cell: I,
                    rowVirtualizer: j,
                    index: N.index,
                    transform: $ ? void 0 : `translateX(${C - b}px)`,
                  },
                  I.id,
                )
              );
            }),
          });
        }
        function G(E, f) {
          const j = (0, O.useContext)(T),
            A = E.columnDef.meta?.bGrowToFit,
            u = E.id,
            w = A ? E.getSize() : 0,
            b = E.getIsSorted();
          (0, O.useLayoutEffect)(() => {
            if (!A || !f.current) return;
            const C = f.current?.scrollWidth;
            if (!C) return;
            const N = f.current.getBoundingClientRect().width,
              I = window.getComputedStyle(f.current);
            let $ = C;
            if (C > N) {
              if (I.paddingLeft) {
                let L = parseInt(I.paddingLeft);
                isNaN(L) || ($ += L);
              }
              if (I.paddingRight) {
                let L = parseInt(I.paddingRight);
                isNaN(L) || ($ += L);
              }
            }
            $ > w &&
              j.setColumnSizeOverride((L) => (L[u] > $ ? L : { ...L, [u]: $ }));
          }, [A, u, j, w, f, b]);
        }
        function de(E) {
          const {
              header: f,
              prevHeader: j,
              HeaderElement: A,
              nHeaderHeight: u,
              sortDirection: w,
              strTooltip: b,
              conditionalProps: C,
            } = E,
            N = (0, O.useRef)(null);
          return (
            G(f.column, N),
            (0, e.jsxs)(
              A,
              {
                role: "columnheader",
                ref: N,
                "data-pinned": !!f.column.getIsPinned(),
                className: Me()(
                  te().ColumnHeader,
                  A === "button" && te().SortButton,
                  f.column.columnDef.meta?.headerClassname,
                ),
                style: {
                  width: `var(--header-${f.id}-size)`,
                  height: u !== void 0 ? `${u}px` : void 0,
                  ...pe(f.column),
                },
                ...C,
                children: [
                  j?.column.getCanResize() &&
                    (0, e.jsx)("div", {
                      role: "presentation",
                      onDoubleClick: () => j.column.resetSize(),
                      onMouseDown: j.getResizeHandler(),
                      onTouchStart: j.getResizeHandler(),
                      onClick: (I) => I.stopPropagation(),
                      className: Me()(te().ResizeHandle, te().PrevResizeHandle),
                    }),
                  f.isPlaceholder
                    ? null
                    : (0, v.Kv)(f.column.columnDef.header, f.getContext()),
                  b && (0, e.jsx)(D.o, { tooltip: b }),
                  w &&
                    !f.column.columnDef.meta?.bDisableSortButton &&
                    (0, e.jsx)("div", { className: te().SortIndicator }),
                  f.column.getCanResize() &&
                    (0, e.jsx)("div", {
                      role: "presentation",
                      onDoubleClick: () => f.column.resetSize(),
                      onMouseDown: f.getResizeHandler(),
                      onTouchStart: f.getResizeHandler(),
                      onClick: (I) => I.stopPropagation(),
                      className: Me()(
                        te().ResizeHandle,
                        f.column.getIsResizing() && te().IsResizing,
                      ),
                    }),
                ],
              },
              f.id,
            )
          );
        }
        function V(E) {
          const { cell: f, rowVirtualizer: j, index: A, transform: u } = E,
            w = O.useRef(null),
            b = (0, Ge.XB)(w, j.measure);
          return (
            G(f.column, w),
            (0, e.jsx)("div", {
              className: Me()(
                te().FancyTableCell,
                f.column.columnDef.meta?.cellClassname,
              ),
              "data-index": A,
              "data-table-column-id": f.column.id,
              ref: b,
              style: {
                width: `var(--col-${f.column.id}-size)`,
                transform: u,
                ...pe(f.column),
              },
              children: (0, e.jsx)(B, {
                CellComponent: f.column.columnDef.cell,
                context: f.getContext(),
              }),
            })
          );
        }
        function Y(E) {
          return (0, v.Kv)(E.CellComponent, E.context);
        }
        const B = O.memo(
          Y,
          (E, f) => E.context.getValue() === f.context.getValue(),
        );
      },
      30565: (Ee) => {
        Ee.exports = {
          EventList: "_3iKeBOMuwqPC87BLxvCKll",
          EventRow: "_3HCTdN7N0hxyB7WCoQkX-l",
          EventMainDetails: "_12wSR9wtG84Yh4obIARUAy",
          Title: "_1bLTz07sQnRA0DjTpjXCza",
          StartDate: "_6accgtG1qR7tHFL1wnO58",
          TitleLine: "_3VdcJeFNzpiS6C6nzlzZfv",
          ActionLine: "_2T7-EVSiD7wt3kh-UtbFwJ",
          SearchLine: "_3WR8L9DXe8JRgcUuBlzxCV",
          SearchSummary: "_2ZYKXsT05br_fBl6Al_Ok2",
          SearchMatch: "_3NPtUvJyTjDkKKBkXpmMMh",
          CapacityBarMax: "_1LKv33ip1CbofO_817Nx6_",
          CapacityBarCurrent: "_3lS1D6vNLfl6RVGdhdgWTY",
          Full: "ndEhtgivpXhCilYDnAAVe",
          MonthTitle: "_2OGsXaLxpf_2IFP6hi2egn",
          MonthEvents: "_3dLuE6Vg6u_xDsbtxjzVLZ",
        };
      },
      34283: (Ee) => {
        Ee.exports = {
          ImportButtonLabel: "_1QCMW1MwEkiLeTlmhMvSs_",
          AccountSummary: "_3ASk__24cRSvf749cMDwat",
          AccountAvatar: "_2xoRnY-a7zMtF4eXy564LW",
          AccountPersonaName: "_13y5R1N5OAhnGi8UjBv9ZK",
          PartnerList: "_EdCW3WiSPTQsVts-RIeJ",
          PartnerListHeader: "_4TErK934px6TrK1V9JGoD",
          PartnerListRow: "CZqR_ufpzWTsB5Z6N9Zut",
          PartnerListRowSelected: "_2d0ftwVO6CThilpy0rp1mx",
        };
      },
      85761: (Ee) => {
        Ee.exports = {
          Ctn: "_8n9wPNrWDu91tlwBW9bHt",
          Indicator: "_355XkH0xfIpJF1YsMX7I7k",
          EmailInfoRow: "_3bta6oovSNKe3Nv2b67SmP",
          EmailField: "_1E-g4exFlAQhvXDqspYTR0",
          RadioButtons: "_1ZG5Z9nFYtYu3B7aksbG67",
          RadioButtonCtn: "_3AoiDJJ1RWLAWBwcOjgm3f",
        };
      },
      13038: (Ee) => {
        Ee.exports = {
          Ctn: "_1olTwzPkPjzL36u0WgyDG0",
          Indicator: "_3d0cYrmQzzda_P3DQ994kX",
        };
      },
      30603: (Ee) => {
        Ee.exports = {
          ExportToCSV: "_2QfZu5-7jOdld1h2nYbca8",
          Table: "_2JSoC65mCQdxh-B_srjUjf",
        };
      },
      31718: (Ee) => {
        Ee.exports = {
          FancyTableRow: "_36QJs1BZ3so19Xl2es3ihH",
          ExpandableRow: "g86xV6xEGOZ54uRvK3oQ4",
          FancyTableHeader: "_2mHaS291U0AFO1q99AVdLy",
          StickyHeader: "_4y4yrbyr89wNqTGLp049k",
          FancyTableCell: "_3m5AH2HSnsvjImS7uUpvxv",
          SortButton: "_2xr81ssapVQO5aalcANmCk",
          ColumnHeader: "_2XdcqH-eLWVp_qatDebc6J",
          ResizeHandle: "USh_UNRX22s8Wml0mCY3M",
          PrevResizeHandle: "_3wzyEuMO8BdQHAkXnneNRR",
          SortIndicator: "_6z0ftV9RCqbZFmC4EOzYZ",
          GroupExpandIndicator: "_3I86V1lT4xbDJ6FDjMIaMq",
          RowGroup: "_uckWydn-lyPGWjFKZ4Tm",
        };
      },
      40323: function (Ee, it) {
        var p, e, Ge; /* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
        ((v, ee) => {
          (e = []),
            (p = ee),
            (Ge = typeof p == "function" ? p.apply(it, e) : p),
            Ge !== void 0 && (Ee.exports = Ge);
        })(this, function v() {
          var ee =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : ee !== void 0
                    ? ee
                    : {},
            ue,
            Te = !ee.document && !!ee.postMessage,
            qe = ee.IS_PAPA_WORKER || !1,
            Me = {},
            O = 0,
            k = {};
          function te(l) {
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
              function (o) {
                var g = _e(o);
                (g.chunkSize = parseInt(g.chunkSize)),
                  o.step || o.chunk || (g.chunkSize = null),
                  (this._handle = new ae(g)),
                  ((this._handle.streamer = this)._config = g);
              }.call(this, l),
              (this.parseChunk = function (o, g) {
                var D = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < D) {
                  let W = this._config.newline;
                  W ||
                    ((T = this._config.quoteChar || '"'),
                    (W = this._handle.guessLineEndings(o, T))),
                    (o = [...o.split(W).slice(D)].join(W));
                }
                this.isFirstChunk &&
                  Q(this._config.beforeFirstChunk) &&
                  (T = this._config.beforeFirstChunk(o)) !== void 0 &&
                  (o = T),
                  (this.isFirstChunk = !1),
                  (this._halted = !1);
                var D = this._partialLine + o,
                  T =
                    ((this._partialLine = ""),
                    this._handle.parse(D, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((o = T.meta.cursor),
                    (D =
                      (this._finished ||
                        ((this._partialLine = D.substring(o - this._baseIndex)),
                        (this._baseIndex = o)),
                      T && T.data && (this._rowCount += T.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    qe)
                  )
                    ee.postMessage({
                      results: T,
                      workerId: k.WORKER_ID,
                      finished: D,
                    });
                  else if (Q(this._config.chunk) && !g) {
                    if (
                      (this._config.chunk(T, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = T = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(T.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(T.errors)),
                      (this._completeResults.meta = T.meta)),
                    this._completed ||
                      !D ||
                      !Q(this._config.complete) ||
                      (T && T.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    D || (T && T.meta.paused) || this._nextChunk(),
                    T
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (o) {
                Q(this._config.error)
                  ? this._config.error(o)
                  : qe &&
                    this._config.error &&
                    ee.postMessage({
                      workerId: k.WORKER_ID,
                      error: o,
                      finished: !1,
                    });
              });
          }
          function $e(l) {
            var o;
            (l = l || {}).chunkSize || (l.chunkSize = k.RemoteChunkSize),
              te.call(this, l),
              (this._nextChunk = Te
                ? function () {
                    this._readChunk(), this._chunkLoaded();
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (g) {
                (this._input = g), this._nextChunk();
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((o = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (o.withCredentials = this._config.withCredentials),
                    Te ||
                      ((o.onload = Pe(this._chunkLoaded, this)),
                      (o.onerror = Pe(this._chunkError, this))),
                    o.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !Te,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var g,
                      D = this._config.downloadRequestHeaders;
                    for (g in D) o.setRequestHeader(g, D[g]);
                  }
                  var T;
                  this._config.chunkSize &&
                    ((T = this._start + this._config.chunkSize - 1),
                    o.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + T,
                    ));
                  try {
                    o.send(this._config.downloadRequestBody);
                  } catch (W) {
                    this._chunkError(W.message);
                  }
                  Te && o.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                o.readyState === 4 &&
                  (o.status < 200 || 400 <= o.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || o.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((g) =>
                            (g = g.getResponseHeader("Content-Range")) !== null
                              ? parseInt(g.substring(g.lastIndexOf("/") + 1))
                              : -1)(o)),
                      this.parseChunk(o.responseText)));
              }),
              (this._chunkError = function (g) {
                (g = o.statusText || g), this._sendError(new Error(g));
              });
          }
          function Ke(l) {
            (l = l || {}).chunkSize || (l.chunkSize = k.LocalChunkSize),
              te.call(this, l);
            var o,
              g,
              D = typeof FileReader < "u";
            (this.stream = function (T) {
              (this._input = T),
                (g = T.slice || T.webkitSlice || T.mozSlice),
                D
                  ? (((o = new FileReader()).onload = Pe(
                      this._chunkLoaded,
                      this,
                    )),
                    (o.onerror = Pe(this._chunkError, this)))
                  : (o = new FileReaderSync()),
                this._nextChunk();
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var T = this._input,
                  W =
                    (this._config.chunkSize &&
                      ((W = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (T = g.call(T, this._start, W))),
                    o.readAsText(T, this._config.encoding));
                D || this._chunkLoaded({ target: { result: W } });
              }),
              (this._chunkLoaded = function (T) {
                (this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(T.target.result);
              }),
              (this._chunkError = function () {
                this._sendError(o.error);
              });
          }
          function X(l) {
            var o;
            te.call(this, (l = l || {})),
              (this.stream = function (g) {
                return (o = g), this._nextChunk();
              }),
              (this._nextChunk = function () {
                var g, D;
                if (!this._finished)
                  return (
                    (g = this._config.chunkSize),
                    (o = g
                      ? ((D = o.substring(0, g)), o.substring(g))
                      : ((D = o), "")),
                    (this._finished = !o),
                    this.parseChunk(D)
                  );
              });
          }
          function Ie(l) {
            te.call(this, (l = l || {}));
            var o = [],
              g = !0,
              D = !1;
            (this.pause = function () {
              te.prototype.pause.apply(this, arguments), this._input.pause();
            }),
              (this.resume = function () {
                te.prototype.resume.apply(this, arguments),
                  this._input.resume();
              }),
              (this.stream = function (T) {
                (this._input = T),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError);
              }),
              (this._checkIsFinished = function () {
                D && o.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                this._checkIsFinished(),
                  o.length ? this.parseChunk(o.shift()) : (g = !0);
              }),
              (this._streamData = Pe(function (T) {
                try {
                  o.push(
                    typeof T == "string"
                      ? T
                      : T.toString(this._config.encoding),
                  ),
                    g &&
                      ((g = !1),
                      this._checkIsFinished(),
                      this.parseChunk(o.shift()));
                } catch (W) {
                  this._streamError(W);
                }
              }, this)),
              (this._streamError = Pe(function (T) {
                this._streamCleanUp(), this._sendError(T);
              }, this)),
              (this._streamEnd = Pe(function () {
                this._streamCleanUp(), (D = !0), this._streamData("");
              }, this)),
              (this._streamCleanUp = Pe(function () {
                this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError);
              }, this));
          }
          function ae(l) {
            var o,
              g,
              D,
              T,
              W = Math.pow(2, 53),
              le = -W,
              pe = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              xe =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              K = this,
              ne = 0,
              G = 0,
              de = !1,
              V = !1,
              Y = [],
              B = { data: [], errors: [], meta: {} };
            function E(u) {
              return l.skipEmptyLines === "greedy"
                ? u.join("").trim() === ""
                : u.length === 1 && u[0].length === 0;
            }
            function f() {
              if (
                (B &&
                  D &&
                  (A(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      k.DefaultDelimiter +
                      "'",
                  ),
                  (D = !1)),
                l.skipEmptyLines &&
                  (B.data = B.data.filter(function (N) {
                    return !E(N);
                  })),
                j())
              ) {
                let N = function (I, $) {
                  Q(l.transformHeader) && (I = l.transformHeader(I, $)),
                    Y.push(I);
                };
                var C = N;
                if (B)
                  if (Array.isArray(B.data[0])) {
                    for (var u = 0; j() && u < B.data.length; u++)
                      B.data[u].forEach(N);
                    B.data.splice(0, 1);
                  } else B.data.forEach(N);
              }
              function w(N, I) {
                for (var $ = l.header ? {} : [], L = 0; L < N.length; L++) {
                  var z = L,
                    S = N[L],
                    S = ((U, H) =>
                      ((ie) => (
                        l.dynamicTypingFunction &&
                          l.dynamicTyping[ie] === void 0 &&
                          (l.dynamicTyping[ie] = l.dynamicTypingFunction(ie)),
                        (l.dynamicTyping[ie] || l.dynamicTyping) === !0
                      ))(U)
                        ? H === "true" ||
                          H === "TRUE" ||
                          (H !== "false" &&
                            H !== "FALSE" &&
                            (((ie) => {
                              if (
                                pe.test(ie) &&
                                ((ie = parseFloat(ie)), le < ie && ie < W)
                              )
                                return 1;
                            })(H)
                              ? parseFloat(H)
                              : xe.test(H)
                                ? new Date(H)
                                : H === ""
                                  ? null
                                  : H))
                        : H)(
                      (z = l.header
                        ? L >= Y.length
                          ? "__parsed_extra"
                          : Y[L]
                        : z),
                      (S = l.transform ? l.transform(S, z) : S),
                    );
                  z === "__parsed_extra"
                    ? (($[z] = $[z] || []), $[z].push(S))
                    : ($[z] = S);
                }
                return (
                  l.header &&
                    (L > Y.length
                      ? A(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            Y.length +
                            " fields but parsed " +
                            L,
                          G + I,
                        )
                      : L < Y.length &&
                        A(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            Y.length +
                            " fields but parsed " +
                            L,
                          G + I,
                        )),
                  $
                );
              }
              var b;
              B &&
                (l.header || l.dynamicTyping || l.transform) &&
                ((b = 1),
                !B.data.length || Array.isArray(B.data[0])
                  ? ((B.data = B.data.map(w)), (b = B.data.length))
                  : (B.data = w(B.data, 0)),
                l.header && B.meta && (B.meta.fields = Y),
                (G += b));
            }
            function j() {
              return l.header && Y.length === 0;
            }
            function A(u, w, b, C) {
              (u = { type: u, code: w, message: b }),
                C !== void 0 && (u.row = C),
                B.errors.push(u);
            }
            Q(l.step) &&
              ((T = l.step),
              (l.step = function (u) {
                (B = u),
                  j()
                    ? f()
                    : (f(),
                      B.data.length !== 0 &&
                        ((ne += u.data.length),
                        l.preview && ne > l.preview
                          ? g.abort()
                          : ((B.data = B.data[0]), T(B, K))));
              })),
              (this.parse = function (u, w, b) {
                var C = l.quoteChar || '"',
                  C =
                    (l.newline || (l.newline = this.guessLineEndings(u, C)),
                    (D = !1),
                    l.delimiter
                      ? Q(l.delimiter) &&
                        ((l.delimiter = l.delimiter(u)),
                        (B.meta.delimiter = l.delimiter))
                      : ((C = ((N, I, $, L, z) => {
                          var S, U, H, ie;
                          z = z || [
                            ",",
                            "	",
                            "|",
                            ";",
                            k.RECORD_SEP,
                            k.UNIT_SEP,
                          ];
                          for (var se = 0; se < z.length; se++) {
                            for (
                              var Se,
                                Be = z[se],
                                oe = 0,
                                ve = 0,
                                re = 0,
                                q =
                                  ((H = void 0),
                                  new Le({
                                    comments: L,
                                    delimiter: Be,
                                    newline: I,
                                    preview: 10,
                                  }).parse(N)),
                                fe = 0;
                              fe < q.data.length;
                              fe++
                            )
                              $ && E(q.data[fe])
                                ? re++
                                : ((Se = q.data[fe].length),
                                  (ve += Se),
                                  H === void 0
                                    ? (H = Se)
                                    : 0 < Se &&
                                      ((oe += Math.abs(Se - H)), (H = Se)));
                            0 < q.data.length && (ve /= q.data.length - re),
                              (U === void 0 || oe <= U) &&
                                (ie === void 0 || ie < ve) &&
                                1.99 < ve &&
                                ((U = oe), (S = Be), (ie = ve));
                          }
                          return {
                            successful: !!(l.delimiter = S),
                            bestDelimiter: S,
                          };
                        })(
                          u,
                          l.newline,
                          l.skipEmptyLines,
                          l.comments,
                          l.delimitersToGuess,
                        )).successful
                          ? (l.delimiter = C.bestDelimiter)
                          : ((D = !0), (l.delimiter = k.DefaultDelimiter)),
                        (B.meta.delimiter = l.delimiter)),
                    _e(l));
                return (
                  l.preview && l.header && C.preview++,
                  (o = u),
                  (g = new Le(C)),
                  (B = g.parse(o, w, b)),
                  f(),
                  de ? { meta: { paused: !0 } } : B || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return de;
              }),
              (this.pause = function () {
                (de = !0),
                  g.abort(),
                  (o = Q(l.chunk) ? "" : o.substring(g.getCharIndex()));
              }),
              (this.resume = function () {
                K.streamer._halted
                  ? ((de = !1), K.streamer.parseChunk(o, !0))
                  : setTimeout(K.resume, 3);
              }),
              (this.aborted = function () {
                return V;
              }),
              (this.abort = function () {
                (V = !0),
                  g.abort(),
                  (B.meta.aborted = !0),
                  Q(l.complete) && l.complete(B),
                  (o = "");
              }),
              (this.guessLineEndings = function (N, C) {
                N = N.substring(0, 1048576);
                var C = new RegExp(ge(C) + "([^]*?)" + ge(C), "gm"),
                  b = (N = N.replace(C, "")).split("\r"),
                  C = N.split(`
`),
                  N = 1 < C.length && C[0].length < b[0].length;
                if (b.length === 1 || N)
                  return `
`;
                for (var I = 0, $ = 0; $ < b.length; $++)
                  b[$][0] ===
                    `
` && I++;
                return I >= b.length / 2
                  ? `\r
`
                  : "\r";
              });
          }
          function ge(l) {
            return l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function Le(l) {
            var o = (l = l || {}).delimiter,
              g = l.newline,
              D = l.comments,
              T = l.step,
              W = l.preview,
              le = l.fastMode,
              pe = null,
              xe = !1,
              K = l.quoteChar == null ? '"' : l.quoteChar,
              ne = K;
            if (
              (l.escapeChar !== void 0 && (ne = l.escapeChar),
              (typeof o != "string" || -1 < k.BAD_DELIMITERS.indexOf(o)) &&
                (o = ","),
              D === o)
            )
              throw new Error("Comment character same as delimiter");
            D === !0
              ? (D = "#")
              : (typeof D != "string" || -1 < k.BAD_DELIMITERS.indexOf(D)) &&
                (D = !1),
              g !==
                `
` &&
                g !== "\r" &&
                g !==
                  `\r
` &&
                (g = `
`);
            var G = 0,
              de = !1;
            (this.parse = function (V, Y, B) {
              if (typeof V != "string")
                throw new Error("Input must be a string");
              var E = V.length,
                f = o.length,
                j = g.length,
                A = D.length,
                u = Q(T),
                w = [],
                b = [],
                C = [],
                N = (G = 0);
              if (!V) return oe();
              if (le || (le !== !1 && V.indexOf(K) === -1)) {
                for (var I = V.split(g), $ = 0; $ < I.length; $++) {
                  if (((C = I[$]), (G += C.length), $ !== I.length - 1))
                    G += g.length;
                  else if (B) return oe();
                  if (!D || C.substring(0, A) !== D) {
                    if (u) {
                      if (((w = []), ie(C.split(o)), ve(), de)) return oe();
                    } else ie(C.split(o));
                    if (W && W <= $) return (w = w.slice(0, W)), oe(!0);
                  }
                }
                return oe();
              }
              for (
                var L = V.indexOf(o, G),
                  z = V.indexOf(g, G),
                  S = new RegExp(ge(ne) + ge(K), "g"),
                  U = V.indexOf(K, G);
                ;
              )
                if (V[G] === K)
                  for (U = G, G++; ; ) {
                    if ((U = V.indexOf(K, U + 1)) === -1)
                      return (
                        B ||
                          b.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: w.length,
                            index: G,
                          }),
                        Se()
                      );
                    if (U === E - 1) return Se(V.substring(G, U).replace(S, K));
                    if (K === ne && V[U + 1] === ne) U++;
                    else if (K === ne || U === 0 || V[U - 1] !== ne) {
                      L !== -1 && L < U + 1 && (L = V.indexOf(o, U + 1));
                      var H = se(
                        (z =
                          z !== -1 && z < U + 1 ? V.indexOf(g, U + 1) : z) ===
                          -1
                          ? L
                          : Math.min(L, z),
                      );
                      if (V.substr(U + 1 + H, f) === o) {
                        C.push(V.substring(G, U).replace(S, K)),
                          V[(G = U + 1 + H + f)] !== K && (U = V.indexOf(K, G)),
                          (L = V.indexOf(o, G)),
                          (z = V.indexOf(g, G));
                        break;
                      }
                      if (
                        ((H = se(z)),
                        V.substring(U + 1 + H, U + 1 + H + j) === g)
                      ) {
                        if (
                          (C.push(V.substring(G, U).replace(S, K)),
                          Be(U + 1 + H + j),
                          (L = V.indexOf(o, G)),
                          (U = V.indexOf(K, G)),
                          u && (ve(), de))
                        )
                          return oe();
                        if (W && w.length >= W) return oe(!0);
                        break;
                      }
                      b.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: w.length,
                        index: G,
                      }),
                        U++;
                    }
                  }
                else if (D && C.length === 0 && V.substring(G, G + A) === D) {
                  if (z === -1) return oe();
                  (G = z + j), (z = V.indexOf(g, G)), (L = V.indexOf(o, G));
                } else if (L !== -1 && (L < z || z === -1))
                  C.push(V.substring(G, L)), (G = L + f), (L = V.indexOf(o, G));
                else {
                  if (z === -1) break;
                  if ((C.push(V.substring(G, z)), Be(z + j), u && (ve(), de)))
                    return oe();
                  if (W && w.length >= W) return oe(!0);
                }
              return Se();
              function ie(re) {
                w.push(re), (N = G);
              }
              function se(re) {
                var q = 0;
                return (q =
                  re !== -1 && (re = V.substring(U + 1, re)) && re.trim() === ""
                    ? re.length
                    : q);
              }
              function Se(re) {
                return (
                  B ||
                    (re === void 0 && (re = V.substring(G)),
                    C.push(re),
                    (G = E),
                    ie(C),
                    u && ve()),
                  oe()
                );
              }
              function Be(re) {
                (G = re), ie(C), (C = []), (z = V.indexOf(g, G));
              }
              function oe(re) {
                if (l.header && !Y && w.length && !xe) {
                  var q = w[0],
                    fe = Object.create(null),
                    ze = new Set(q);
                  let je = !1;
                  for (let ye = 0; ye < q.length; ye++) {
                    let ce = q[ye];
                    if (
                      fe[
                        (ce = Q(l.transformHeader)
                          ? l.transformHeader(ce, ye)
                          : ce)
                      ]
                    ) {
                      let he,
                        be = fe[ce];
                      for (; (he = ce + "_" + be), be++, ze.has(he); );
                      ze.add(he),
                        (q[ye] = he),
                        fe[ce]++,
                        (je = !0),
                        ((pe = pe === null ? {} : pe)[he] = ce);
                    } else (fe[ce] = 1), (q[ye] = ce);
                    ze.add(ce);
                  }
                  je && console.warn("Duplicate headers found and renamed."),
                    (xe = !0);
                }
                return {
                  data: w,
                  errors: b,
                  meta: {
                    delimiter: o,
                    linebreak: g,
                    aborted: de,
                    truncated: !!re,
                    cursor: N + (Y || 0),
                    renamedHeaders: pe,
                  },
                };
              }
              function ve() {
                T(oe()), (w = []), (b = []);
              }
            }),
              (this.abort = function () {
                de = !0;
              }),
              (this.getCharIndex = function () {
                return G;
              });
          }
          function Oe(l) {
            var o = l.data,
              g = Me[o.workerId],
              D = !1;
            if (o.error) g.userError(o.error, o.file);
            else if (o.results && o.results.data) {
              var T = {
                abort: function () {
                  (D = !0),
                    Fe(o.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    });
                },
                pause: we,
                resume: we,
              };
              if (Q(g.userStep)) {
                for (
                  var W = 0;
                  W < o.results.data.length &&
                  (g.userStep(
                    {
                      data: o.results.data[W],
                      errors: o.results.errors,
                      meta: o.results.meta,
                    },
                    T,
                  ),
                  !D);
                  W++
                );
                delete o.results;
              } else
                Q(g.userChunk) &&
                  (g.userChunk(o.results, T, o.file), delete o.results);
            }
            o.finished && !D && Fe(o.workerId, o.results);
          }
          function Fe(l, o) {
            var g = Me[l];
            Q(g.userComplete) && g.userComplete(o), g.terminate(), delete Me[l];
          }
          function we() {
            throw new Error("Not implemented.");
          }
          function _e(l) {
            if (typeof l != "object" || l === null) return l;
            var o,
              g = Array.isArray(l) ? [] : {};
            for (o in l) g[o] = _e(l[o]);
            return g;
          }
          function Pe(l, o) {
            return function () {
              l.apply(o, arguments);
            };
          }
          function Q(l) {
            return typeof l == "function";
          }
          return (
            (k.parse = function (l, o) {
              var g = (o = o || {}).dynamicTyping || !1;
              if (
                (Q(g) && ((o.dynamicTypingFunction = g), (g = {})),
                (o.dynamicTyping = g),
                (o.transform = !!Q(o.transform) && o.transform),
                !o.worker || !k.WORKERS_SUPPORTED)
              )
                return (
                  (g = null),
                  k.NODE_STREAM_INPUT,
                  typeof l == "string"
                    ? ((l = ((D) =>
                        D.charCodeAt(0) !== 65279 ? D : D.slice(1))(l)),
                      (g = new (o.download ? $e : X)(o)))
                    : l.readable === !0 && Q(l.read) && Q(l.on)
                      ? (g = new Ie(o))
                      : ((ee.File && l instanceof File) ||
                          l instanceof Object) &&
                        (g = new Ke(o)),
                  g.stream(l)
                );
              ((g = (() => {
                var D;
                return (
                  !!k.WORKERS_SUPPORTED &&
                  ((D = (() => {
                    var T = ee.URL || ee.webkitURL || null,
                      W = v.toString();
                    return (
                      k.BLOB_URL ||
                      (k.BLOB_URL = T.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            W,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((D = new ee.Worker(D)).onmessage = Oe),
                  (D.id = O++),
                  (Me[D.id] = D))
                );
              })()).userStep = o.step),
                (g.userChunk = o.chunk),
                (g.userComplete = o.complete),
                (g.userError = o.error),
                (o.step = Q(o.step)),
                (o.chunk = Q(o.chunk)),
                (o.complete = Q(o.complete)),
                (o.error = Q(o.error)),
                delete o.worker,
                g.postMessage({ input: l, config: o, workerId: g.id });
            }),
            (k.unparse = function (l, o) {
              var g = !1,
                D = !0,
                T = ",",
                W = `\r
`,
                le = '"',
                pe = le + le,
                xe = !1,
                K = null,
                ne = !1,
                G =
                  ((() => {
                    if (typeof o == "object") {
                      if (
                        (typeof o.delimiter != "string" ||
                          k.BAD_DELIMITERS.filter(function (Y) {
                            return o.delimiter.indexOf(Y) !== -1;
                          }).length ||
                          (T = o.delimiter),
                        (typeof o.quotes != "boolean" &&
                          typeof o.quotes != "function" &&
                          !Array.isArray(o.quotes)) ||
                          (g = o.quotes),
                        (typeof o.skipEmptyLines != "boolean" &&
                          typeof o.skipEmptyLines != "string") ||
                          (xe = o.skipEmptyLines),
                        typeof o.newline == "string" && (W = o.newline),
                        typeof o.quoteChar == "string" && (le = o.quoteChar),
                        typeof o.header == "boolean" && (D = o.header),
                        Array.isArray(o.columns))
                      ) {
                        if (o.columns.length === 0)
                          throw new Error("Option columns is empty");
                        K = o.columns;
                      }
                      o.escapeChar !== void 0 && (pe = o.escapeChar + le),
                        o.escapeFormulae instanceof RegExp
                          ? (ne = o.escapeFormulae)
                          : typeof o.escapeFormulae == "boolean" &&
                            o.escapeFormulae &&
                            (ne = /^[=+\-@\t\r].*$/);
                    }
                  })(),
                  new RegExp(ge(le), "g"));
              if (
                (typeof l == "string" && (l = JSON.parse(l)), Array.isArray(l))
              ) {
                if (!l.length || Array.isArray(l[0])) return de(null, l, xe);
                if (typeof l[0] == "object")
                  return de(K || Object.keys(l[0]), l, xe);
              } else if (typeof l == "object")
                return (
                  typeof l.data == "string" && (l.data = JSON.parse(l.data)),
                  Array.isArray(l.data) &&
                    (l.fields || (l.fields = (l.meta && l.meta.fields) || K),
                    l.fields ||
                      (l.fields = Array.isArray(l.data[0])
                        ? l.fields
                        : typeof l.data[0] == "object"
                          ? Object.keys(l.data[0])
                          : []),
                    Array.isArray(l.data[0]) ||
                      typeof l.data[0] == "object" ||
                      (l.data = [l.data])),
                  de(l.fields || [], l.data || [], xe)
                );
              throw new Error("Unable to serialize unrecognized input");
              function de(Y, B, E) {
                var f = "",
                  j =
                    (typeof Y == "string" && (Y = JSON.parse(Y)),
                    typeof B == "string" && (B = JSON.parse(B)),
                    Array.isArray(Y) && 0 < Y.length),
                  A = !Array.isArray(B[0]);
                if (j && D) {
                  for (var u = 0; u < Y.length; u++)
                    0 < u && (f += T), (f += V(Y[u], u));
                  0 < B.length && (f += W);
                }
                for (var w = 0; w < B.length; w++) {
                  var b = (j ? Y : B[w]).length,
                    C = !1,
                    N = j ? Object.keys(B[w]).length === 0 : B[w].length === 0;
                  if (
                    (E &&
                      !j &&
                      (C =
                        E === "greedy"
                          ? B[w].join("").trim() === ""
                          : B[w].length === 1 && B[w][0].length === 0),
                    E === "greedy" && j)
                  ) {
                    for (var I = [], $ = 0; $ < b; $++) {
                      var L = A ? Y[$] : $;
                      I.push(B[w][L]);
                    }
                    C = I.join("").trim() === "";
                  }
                  if (!C) {
                    for (var z = 0; z < b; z++) {
                      0 < z && !N && (f += T);
                      var S = j && A ? Y[z] : z;
                      f += V(B[w][S], z);
                    }
                    w < B.length - 1 && (!E || (0 < b && !N)) && (f += W);
                  }
                }
                return f;
              }
              function V(Y, B) {
                var E, f;
                return Y == null
                  ? ""
                  : Y.constructor === Date
                    ? JSON.stringify(Y).slice(1, 25)
                    : ((f = !1),
                      ne &&
                        typeof Y == "string" &&
                        ne.test(Y) &&
                        ((Y = "'" + Y), (f = !0)),
                      (E = Y.toString().replace(G, pe)),
                      (f =
                        f ||
                        g === !0 ||
                        (typeof g == "function" && g(Y, B)) ||
                        (Array.isArray(g) && g[B]) ||
                        ((j, A) => {
                          for (var u = 0; u < A.length; u++)
                            if (-1 < j.indexOf(A[u])) return !0;
                          return !1;
                        })(E, k.BAD_DELIMITERS) ||
                        -1 < E.indexOf(T) ||
                        E.charAt(0) === " " ||
                        E.charAt(E.length - 1) === " ")
                        ? le + E + le
                        : E);
              }
            }),
            (k.RECORD_SEP = ""),
            (k.UNIT_SEP = ""),
            (k.BYTE_ORDER_MARK = "\uFEFF"),
            (k.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              k.BYTE_ORDER_MARK,
            ]),
            (k.WORKERS_SUPPORTED = !Te && !!ee.Worker),
            (k.NODE_STREAM_INPUT = 1),
            (k.LocalChunkSize = 10485760),
            (k.RemoteChunkSize = 5242880),
            (k.DefaultDelimiter = ","),
            (k.Parser = Le),
            (k.ParserHandle = ae),
            (k.NetworkStreamer = $e),
            (k.FileStreamer = Ke),
            (k.StringStreamer = X),
            (k.ReadableStreamStreamer = Ie),
            ee.jQuery &&
              ((ue = ee.jQuery).fn.parse = function (l) {
                var o = l.config || {},
                  g = [];
                return (
                  this.each(function (W) {
                    if (
                      !(
                        ue(this).prop("tagName").toUpperCase() === "INPUT" &&
                        ue(this).attr("type").toLowerCase() === "file" &&
                        ee.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var le = 0; le < this.files.length; le++)
                      g.push({
                        file: this.files[le],
                        inputElem: this,
                        instanceConfig: ue.extend({}, o),
                      });
                  }),
                  D(),
                  this
                );
                function D() {
                  if (g.length === 0) Q(l.complete) && l.complete();
                  else {
                    var W,
                      le,
                      pe,
                      xe,
                      K = g[0];
                    if (Q(l.before)) {
                      var ne = l.before(K.file, K.inputElem);
                      if (typeof ne == "object") {
                        if (ne.action === "abort")
                          return (
                            (W = "AbortError"),
                            (le = K.file),
                            (pe = K.inputElem),
                            (xe = ne.reason),
                            void (
                              Q(l.error) && l.error({ name: W }, le, pe, xe)
                            )
                          );
                        if (ne.action === "skip") return void T();
                        typeof ne.config == "object" &&
                          (K.instanceConfig = ue.extend(
                            K.instanceConfig,
                            ne.config,
                          ));
                      } else if (ne === "skip") return void T();
                    }
                    var G = K.instanceConfig.complete;
                    (K.instanceConfig.complete = function (de) {
                      Q(G) && G(de, K.file, K.inputElem), T();
                    }),
                      k.parse(K.file, K.instanceConfig);
                  }
                }
                function T() {
                  g.splice(0, 1), D();
                }
              }),
            qe &&
              (ee.onmessage = function (l) {
                (l = l.data),
                  k.WORKER_ID === void 0 && l && (k.WORKER_ID = l.workerId),
                  typeof l.input == "string"
                    ? ee.postMessage({
                        workerId: k.WORKER_ID,
                        results: k.parse(l.input, l.config),
                        finished: !0,
                      })
                    : ((ee.File && l.input instanceof File) ||
                        l.input instanceof Object) &&
                      (l = k.parse(l.input, l.config)) &&
                      ee.postMessage({
                        workerId: k.WORKER_ID,
                        results: l,
                        finished: !0,
                      });
              }),
            (($e.prototype = Object.create(te.prototype)).constructor = $e),
            ((Ke.prototype = Object.create(te.prototype)).constructor = Ke),
            ((X.prototype = Object.create(X.prototype)).constructor = X),
            ((Ie.prototype = Object.create(te.prototype)).constructor = Ie),
            k
          );
        });
      },
    },
  ]);
})();
