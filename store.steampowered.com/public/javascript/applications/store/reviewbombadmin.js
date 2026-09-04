/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [54372],
    {
      68376: (I, N, s) => {
        "use strict";
        s.r(N), s.d(N, { ReviewBombAdminDialog: () => ie });
        var e = s(7850),
          o = s(90626),
          P = s(79611),
          V = s(24660),
          W = s(43828),
          b = s(96538),
          Z = s(85599),
          F = s(19730),
          S = s(9682),
          K = s(72609),
          X = s(80902),
          q = s(75233),
          _ = s(51614),
          M = s(22932),
          U = s(3166),
          L = s(27986);
        const T = [
          { eType: S.mJ.r5, strLabel: "Off-topic" },
          { eType: S.mJ._Q, strLabel: "Pending Internal Valve Review" },
          { eType: S.mJ.FB, strLabel: "Testing Only" },
        ];
        function ee(n) {
          return T.find((t) => t.eType == n)?.strLabel ?? `Type ${n}`;
        }
        function $(n) {
          return n
            ? M.fE.Instant.fromEpochMilliseconds(n * 1e3)
                .toZonedDateTimeISO("UTC")
                .toPlainDate()
            : null;
        }
        function Q(n) {
          return ["reviewbombperiods", n];
        }
        function te(n) {
          return (0, X.I)({
            queryKey: Q(n),
            queryFn: () =>
              (0, L.$f)(
                `${K.TS.STORE_BASE_URL}ajaxmanagereviewanomalies/${n}/`,
                "ajaxmanagereviewanomalies",
                { sessionid: (0, U.KC)() },
              ),
            enabled: !!n,
          });
        }
        function ne(n) {
          const t = (0, q.jE)();
          return (0, _.n)({
            mutationFn: async (a) => {
              const r = { sessionid: (0, U.KC)(), action: a.action };
              a.action != "add" && (r.id = a.strID),
                a.action != "remove" &&
                  ((r.start_date = a.strStartDate),
                  (r.end_date = a.strEndDate),
                  (r.internal_comment = a.strInternalComment),
                  (r.type = a.eType)),
                await (0, L.$f)(
                  `${K.TS.STORE_BASE_URL}handlereviewanomaly/${n}/`,
                  "handlereviewanomaly",
                  r,
                );
            },
            onSuccess: () => {
              t.invalidateQueries({ queryKey: Q(n) });
            },
          });
        }
        var x = s(16412),
          oe = s(68414),
          c = s.n(oe);
        const k = "YYYY-MM-DD",
          Y = "Internal Comment";
        function G(n) {
          try {
            return M.fE.PlainDate.from(n), !0;
          } catch {
            return !1;
          }
        }
        function J(n) {
          return n ? ($(n)?.toString() ?? "") : "";
        }
        function se(n) {
          const { period: t, onSubmit: a, onClose: r } = n,
            [d, v] = o.useState(() => J(t?.nStartDate)),
            [m, C] = o.useState(() => J(t?.nEndDate)),
            [h, y] = o.useState(t?.strInternalComment ?? ""),
            [j, p] = o.useState(t?.eType ?? T[0].eType),
            E = o.useMemo(
              () => T.map((l) => ({ label: l.strLabel, data: l.eType })),
              [],
            ),
            O = G(d),
            A = !m || G(m),
            D = O && A && h.trim().length > 0,
            f = o.useCallback((l) => v(l.target.value), []),
            g = o.useCallback((l) => C(l.target.value), []),
            w = o.useCallback((l) => y(l.target.value), []),
            B = o.useCallback((l) => p(l.data), []),
            R = o.useCallback(() => {
              D &&
                (a({
                  strStartDate: d,
                  strEndDate: m,
                  strInternalComment: h,
                  eType: j,
                }),
                r());
            }, [D, d, m, h, j, a, r]),
            i = o.useId(),
            u = x.Dm(i, { label: Y });
          return (0, e.jsxs)(b.o0, {
            className: c().ReviewBombPeriodDialog,
            strTitle: t
              ? "Update Review Anomaly Period"
              : "Add New Review Anomaly Period",
            strOKButtonText: t ? "Update" : "Add",
            bOKDisabled: !D,
            onOK: R,
            onCancel: r,
            closeModal: r,
            children: [
              (0, e.jsx)(x.FO, {
                label: "Start Date (UTC)",
                description: k,
                value: d,
                onChange: f,
              }),
              (0, e.jsx)(x.FO, {
                label: "End Date (UTC)",
                description: `${k}, or empty for no end`,
                value: m,
                onChange: g,
              }),
              (0, e.jsx)(x.m, {
                label: "Type",
                "aria-label": "Type",
                controlled: !0,
                rgOptions: E,
                selectedOption: j,
                onChange: B,
              }),
              (0, e.jsx)(x.D0, {
                accessibilityId: i,
                label: Y,
                childrenLayout: "below",
                childrenContainerWidth: "max",
                children: (0, e.jsx)(x.Cl, {
                  className: c().TextArea,
                  ...u,
                  value: h,
                  onChange: w,
                  nMinHeight: 100,
                }),
              }),
            ],
          });
        }
        function z(n, t = "") {
          return $(n)?.toString() ?? t;
        }
        function H(n) {
          const { nTotal: t, nFromNonSteamPurchase: a } = n;
          return (0, e.jsxs)(e.Fragment, {
            children: [(0, F.Dq)(t - a), " [", (0, F.Dq)(t), "]"],
          });
        }
        function ae(n) {
          const { period: t } = n;
          return t.strPersonaName
            ? t.strProfileURL
              ? (0, e.jsx)(V.Ii, {
                  href: t.strProfileURL,
                  children: t.strPersonaName,
                })
              : (0, e.jsx)(e.Fragment, { children: t.strPersonaName })
            : (0, e.jsx)(e.Fragment, { children: "Automated" });
        }
        function re(n) {
          const { period: t, onEdit: a, onRemove: r } = n,
            d = o.useCallback(() => a(t), [a, t]),
            v = o.useCallback(() => r(t), [r, t]);
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", { children: t.strID }),
              (0, e.jsx)("td", { children: z(t.nStartDate) }),
              (0, e.jsx)("td", { children: z(t.nEndDate, "No End Set") }),
              (0, e.jsx)("td", { children: ee(t.eType) }),
              (0, e.jsx)("td", {
                className: c().Comment,
                children: (0, e.jsx)(W.h, { text: t.strInternalComment }),
              }),
              (0, e.jsx)("td", { children: (0, e.jsx)(ae, { period: t }) }),
              (0, e.jsx)("td", {
                children: (0, e.jsx)(H, {
                  nTotal: t.nRecommendationsUp,
                  nFromNonSteamPurchase:
                    t.nRecommendationsUpFromNonSteamPurchase,
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsx)(H, {
                  nTotal: t.nRecommendationsDown,
                  nFromNonSteamPurchase:
                    t.nRecommendationsDownFromNonSteamPurchase,
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: c().Actions,
                  children: [
                    (0, e.jsx)(P.$, {
                      size: "1",
                      onClick: d,
                      children: "Edit",
                    }),
                    (0, e.jsx)(P.$, {
                      size: "1",
                      color: "error",
                      onClick: v,
                      children: "Remove",
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function ie(n) {
          const { appid: t, onClose: a } = n,
            r = te(t),
            d = ne(t),
            [v, m] = o.useState(void 0),
            [C, h] = o.useState(void 0),
            [y, j] = o.useState(""),
            p = o.useCallback(() => m(null), []),
            E = o.useCallback((i) => m(i), []),
            O = o.useCallback((i) => h(i), []),
            A = o.useCallback(() => m(void 0), []),
            D = o.useCallback(() => h(void 0), []),
            f = o.useCallback(() => j(""), []),
            g = o.useCallback((i, u) => {
              j(
                `Failed to ${i} the review anomaly period. ${u instanceof Error ? u.message : String(u)}`,
              );
            }, []),
            w = o.useCallback(
              (i) => {
                const u = v,
                  l = u
                    ? { action: "update", strID: u.strID, ...i }
                    : { action: "add", ...i };
                d.mutate(l, { onError: (le) => g(u ? "update" : "add", le) });
              },
              [v, d, g],
            ),
            B = o.useCallback(() => {
              C &&
                (d.mutate(
                  { action: "remove", strID: C.strID },
                  { onError: (i) => g("remove", i) },
                ),
                h(void 0));
            }, [C, d, g]),
            R = r.data?.rgPeriods;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(b.o0, {
                bAlertDialog: !0,
                bAllowFullSize: !0,
                className: c().ReviewBombAdminDialog,
                strTitle: "Manage Review Anomalies",
                closeModal: a,
                onOK: a,
                onCancel: a,
                children: [
                  r.isPending && (0, e.jsx)(Z.t, {}),
                  r.isError &&
                    (0, e.jsx)("div", {
                      className: c().LoadError,
                      children:
                        "Could not load this app's review anomaly periods.",
                    }),
                  R &&
                    (0, e.jsxs)("div", {
                      className: c().Body,
                      children: [
                        (0, e.jsxs)("table", {
                          className: c().Periods,
                          children: [
                            (0, e.jsx)("thead", {
                              children: (0, e.jsxs)("tr", {
                                children: [
                                  (0, e.jsx)("th", { children: "ID" }),
                                  (0, e.jsx)("th", { children: "Start" }),
                                  (0, e.jsx)("th", { children: "End" }),
                                  (0, e.jsx)("th", { children: "Type" }),
                                  (0, e.jsx)("th", {
                                    children: "Internal Comment",
                                  }),
                                  (0, e.jsx)("th", { children: "Account" }),
                                  (0, e.jsx)("th", {
                                    children: "Positive Reviews",
                                  }),
                                  (0, e.jsx)("th", {
                                    children: "Negative Reviews",
                                  }),
                                  (0, e.jsx)("th", { children: "\xA0" }),
                                ],
                              }),
                            }),
                            (0, e.jsx)("tbody", {
                              children: R.map((i) =>
                                (0, e.jsx)(
                                  re,
                                  { period: i, onEdit: E, onRemove: O },
                                  i.strID,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: c().AddPeriod,
                          children: (0, e.jsx)(P.$, {
                            variant: "vibrant",
                            onClick: p,
                            children: "Add New Review Bomb Period",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              (0, e.jsx)(b.EN, {
                active: v !== void 0,
                children: (0, e.jsx)(se, {
                  period: v ?? void 0,
                  onSubmit: w,
                  onClose: A,
                }),
              }),
              (0, e.jsx)(b.EN, {
                active: !!C,
                children: (0, e.jsx)(b.o0, {
                  bDestructiveWarning: !0,
                  strTitle: "Remove Review Anomaly Period?",
                  strDescription: `Are you sure you want to remove this review anomaly period? ID: ${C?.strID ?? ""}`,
                  strOKButtonText: "Remove",
                  closeModal: D,
                  onOK: B,
                  onCancel: D,
                }),
              }),
              (0, e.jsx)(b.EN, {
                active: !!y,
                children: (0, e.jsx)(b.KG, {
                  strTitle: "Error",
                  strDescription: y,
                  closeModal: f,
                  onOK: f,
                }),
              }),
            ],
          });
        }
      },
      68414: (I) => {
        I.exports = {
          ReviewBombAdminDialog: "_2lQDxwhbNHmjH31B0a0KoB",
          Body: "XKjt8Kz4bhyBqZxrpK6Af",
          LoadError: "_1ogvTDnbFU4B1hC_s3YUO4",
          Periods: "D82hqMsJhf-6K4RjqShxR",
          Comment: "_3CGYGrKOKn3bIhllSfG4Jq",
          Actions: "npmKyDMK0Cpqi24QIg-gm",
          AddPeriod: "_2o1AY27gzyCbobL2jKfptD",
          ReviewBombPeriodDialog: "_3lipsNsbncd2aIAQ_4CTQR",
          TextArea: "_286KkCsK27JmtcD6E1MF4w",
        };
      },
    },
  ]);
})();
