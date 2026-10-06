/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [37102],
    {
      11038: (b, T, e) => {
        "use strict";
        e.r(T), e.d(T, { UGCBanDialogOnGlobalVariable: () => B });
        var t = e(7850),
          i = e(68031),
          M = e(15252),
          I = e(75083),
          y = e(1522),
          V = e(26072),
          S = e(86392),
          E = e(14432),
          p = e(64388),
          x = e(90626);
        function f(P) {
          return V.u.Localize("#moderation_ugcban_default_note", (0, S.Jt)(P));
        }
        function B() {
          const [P, N] = x.useState(null),
            [u, Y] = x.useState(null),
            [K, C] = x.useState(!1),
            [o, l] = x.useState("");
          if (
            (x.useEffect(
              () => (
                (window.ShowUGCBanDialog = (a, h) => {
                  Y(null),
                    C(!1),
                    l(""),
                    N({ cItems: a.length, fnOnConfirm: h });
                }),
                () => {
                  delete window.ShowUGCBanDialog;
                }
              ),
              [],
            ),
            !P)
          )
            return null;
          const g = () => N(null),
            c = () => {
              u === null || !o.trim() || (P.fnOnConfirm(u, o.trim()), g());
            },
            v = (a) => {
              a !== null &&
                ((!o.trim() || (u !== null && o === f(u))) && l(f(a)), Y(a)),
                C(!1);
            },
            j = P.cItems > 1 ? `Ban ${P.cItems} items` : "Ban item";
          return (0, t.jsxs)(p.s, {
            onClose: g,
            strTitle: j,
            children: [
              K && (0, t.jsx)(E.F, { reasons: (0, S.cd)(), onSelect: v }),
              !K &&
                (0, t.jsxs)(i.s, {
                  direction: "column",
                  gap: "2",
                  minWidth: "400px",
                  children: [
                    (0, t.jsxs)(i.s, {
                      direction: "row",
                      gap: "2",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, t.jsx)(M.EY, { children: "Select a reason:" }),
                        (0, t.jsx)(I.$, {
                          size: "1",
                          color: "dull",
                          onClick: () => C(!0),
                          children:
                            u === null ? "Click to select..." : (0, S.Jt)(u),
                        }),
                      ],
                    }),
                    (0, t.jsx)(M.EY, { children: "Note:" }),
                    (0, t.jsx)(y.f, {
                      value: o,
                      onTextChange: (a) => l(a),
                      maxLength: 256,
                    }),
                    (0, t.jsxs)(i.s, {
                      direction: "row",
                      gap: "2",
                      justify: "end",
                      marginTop: "3",
                      children: [
                        (0, t.jsx)(I.$, {
                          onClick: g,
                          color: "dull",
                          children: "Cancel",
                        }),
                        (0, t.jsx)(I.$, {
                          disabled: u === null || !o.trim(),
                          onClick: c,
                          children: "Ban",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
      },
      31832: (b, T, e) => {
        "use strict";
        e.r(T), e.d(T, { UGCModerationSubjectPanel: () => Z });
        var t = e(7850),
          i = e(15252),
          M = e(68031),
          I = e(75083),
          y = e(21663),
          V = e(64981),
          S = e(49527),
          E = e(72609),
          p = e(64388),
          x = e(90626),
          f = e(86067),
          B = e(13725),
          P = e(46085),
          N = e(86392),
          u = e(72524);
        const Y = 0,
          K = 1,
          C = 2,
          o = 3;
        var l = e(64238),
          g = e.n(l),
          c = e(93249),
          v = e.n(c);
        function j(n) {
          return !!n && n !== o;
        }
        function a(n) {
          return j(n.status)
            ? (0, t.jsxs)("span", {
                className: g()(v().Pill, n.className),
                children: [n.label, n.status === K && "?"],
              })
            : null;
        }
        function h(n) {
          return (0, t.jsx)(a, {
            status: n.status,
            className: v().TerrorismPill,
            label: "Terrorism",
          });
        }
        function z(n) {
          return (0, t.jsx)(a, {
            status: n.status,
            className: v().CSAMPill,
            label: "CSAM",
          });
        }
        function W(n) {
          return (0, t.jsx)(a, {
            status: n.status,
            className: v().ViolencePill,
            label: "Violent threat",
          });
        }
        function F(n) {
          const { subject: s } = n;
          return !j(s.terrorism_status) &&
            !j(s.csam_status) &&
            !j(s.credible_threat_of_violence_status)
            ? null
            : (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(h, { status: s.terrorism_status }),
                  (0, t.jsx)(z, { status: s.csam_status }),
                  (0, t.jsx)(W, {
                    status: s.credible_threat_of_violence_status,
                  }),
                ],
              });
        }
        function A(n) {
          return { subject_type: V.z8, published_file_id: n };
        }
        function R(n) {
          return (0, P.OI)(A(n));
        }
        function $(n) {
          var s, m, r;
          const U = (0, P.w3)(A(n.publishedFileID)),
            [G, Q] = (0, x.useState)(!1);
          if (U.isPending) return null;
          if (U.isError)
            return (0, t.jsx)(i.EY, {
              children: f.T.Localize("#ugcsubjectpanel_error"),
            });
          const L = (s = U.data.subjects) == null ? void 0 : s[0];
          return L
            ? (0, t.jsxs)(M.s, {
                direction: "column",
                gap: "1",
                children: [
                  (0, t.jsx)(i.EY, { children: (0, N.hl)(L) }),
                  (0, t.jsx)(F, { subject: L }),
                  (0, t.jsx)(i.EY, {
                    children: f.T.Localize(
                      "#forumsubjectlist_subjectreportsummary",
                      (m = L.unresolved_report_count) != null ? m : 0,
                      (r = L.unresolved_dispute_count) != null ? r : 0,
                    ),
                  }),
                  (0, t.jsxs)(M.s, {
                    direction: "row",
                    gap: "2",
                    children: [
                      (0, t.jsx)(I.$, {
                        size: "1",
                        color: "dull",
                        onClick: () => Q(!0),
                        children: f.T.Localize("#ugcsubjectpanel_history"),
                      }),
                      (0, t.jsx)(_, { subject: L }),
                      (0, t.jsx)(d, { subject: L }),
                    ],
                  }),
                  G && (0, t.jsx)(D, { subject: L, onClose: () => Q(!1) }),
                ],
              })
            : null;
        }
        function _(n) {
          const { subject: s } = n,
            m = (0, P.YL)(s.reported_content_id ? [s.reported_content_id] : []),
            r =
              !!s.assigned_moderator_steamid &&
              s.assigned_moderator_steamid !== "0";
          return !s.reported_content_id ||
            !r ||
            s.assigned_moderator_steamid !== E.iA.steamid
            ? null
            : (0, t.jsx)(I.$, {
                size: "1",
                color: "dull",
                loading: m.isPending,
                onClick: () => m.mutate(),
                children: f.T.Localize("#ugcsubjectpanel_release"),
              });
        }
        function d(n) {
          const { subject: s } = n,
            [m, r] = (0, x.useState)(!1);
          return !s.reported_content_id || s.resolved !== S.z_
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(I.$, {
                    size: "1",
                    color: "dull",
                    onClick: () => r(!0),
                    children: f.T.Localize("#moderation_escalation_escalate"),
                  }),
                  m &&
                    (0, t.jsx)(p.s, {
                      onClose: () => r(!1),
                      strTitle: f.T.Localize("#moderation_escalation_escalate"),
                      children: (0, t.jsx)(u.R, {
                        reportedContentID: s.reported_content_id,
                        onClose: () => r(!1),
                      }),
                    }),
                ],
              });
        }
        function D(n) {
          const { subject: s, onClose: m } = n,
            [r, U] = (0, x.useState)("reports");
          return (0, t.jsx)(p.s, {
            onClose: m,
            strTitle: f.T.Localize("#ugcsubjectpanel_dialogtitle"),
            children: (0, t.jsxs)(M.s, {
              direction: "column",
              gap: "2",
              children: [
                (0, t.jsxs)(y.I.Root, {
                  value: r,
                  onValueChange: (G) => U(G),
                  children: [
                    (0, t.jsx)(y.I.Item, {
                      value: "reports",
                      children: f.T.Localize("#ugcsubjectpanel_reports"),
                    }),
                    (0, t.jsx)(y.I.Item, {
                      value: "history",
                      children: f.T.Localize("#ugcsubjectpanel_history"),
                    }),
                  ],
                }),
                r === "reports" && (0, t.jsx)(B.lX, { subject: s }),
                r === "history" &&
                  (0, t.jsx)(B.B8, {
                    reportedContentID: s.reported_content_id,
                  }),
              ],
            }),
          });
        }
        var O = e(29385);
        function Z(n) {
          const { publishedFileID: s } = n,
            m = (0, O.jE)();
          return (
            (0, x.useEffect)(() => {
              const r = (U) => {
                var G;
                ((G = U.detail) == null ? void 0 : G.publishedFileID) == s &&
                  m.invalidateQueries({ queryKey: R(s) });
              };
              return (
                window.addEventListener("ugc-moderation-resolved", r),
                () => window.removeEventListener("ugc-moderation-resolved", r)
              );
            }, [m, s]),
            (0, t.jsx)($, { publishedFileID: s })
          );
        }
      },
      21663: (b, T, e) => {
        "use strict";
        e.d(T, { I: () => u });
        var t = e(7850),
          i = e(90626),
          M = e(86946),
          I = e(60351),
          y = e(71742),
          V = e(64238),
          S = e.n(V),
          E = e(53011),
          p = e.n(E),
          x = e(68031),
          f = e(80549);
        const B = (0, i.createContext)(null);
        function P(C) {
          const {
              variant: o,
              radius: l,
              size: g,
              status: c,
              children: v,
              value: j,
              onValueChange: a,
            } = C,
            [h, z] = (0, i.useState)({}),
            W = (0, i.useCallback)((_, d) => z((D) => ({ ...D, [d]: _ })), []),
            F = (0, i.useCallback)(
              (_, d) =>
                z((D) => {
                  const O = { ...D };
                  return O[d] === _ && delete O[d], O;
                }),
              [],
            ),
            A = (_) => {
              let d = 0;
              switch (_.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  d = 1;
                  break;
                case "ArrowLeft":
                  d = -1;
                  break;
              }
              if (d) {
                const D = Array.from(Object.values(h)).sort(K);
                let O;
                if (j === null) O = d > 0 ? 0 : D.length - 1;
                else {
                  const s = h[j],
                    m = D.findIndex((r) => r === s);
                  (0, y.wT)(
                    typeof m == "number",
                    "Could not find current segmented value position",
                  ),
                    (O = m + d);
                }
                const Z = D[O < 0 ? D.length + O : O % D.length],
                  n = Object.keys(h).find((s) => h[s] === Z);
                typeof n != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (a(n), _.stopPropagation(), _.preventDefault());
              }
            },
            R = (0, f.f)("SegmentedControl", o),
            $ = (0, i.useMemo)(
              () => ({
                value: j,
                onValueChange: a,
                register: W,
                unregister: F,
                radius: l,
                size: g,
              }),
              [j, a, W, F, l, g],
            );
          return (0, t.jsx)(M.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: R,
            radius: l,
            size: g,
            status: c,
            className: S()(E.SegmentedControlBox, E[`Variant-${R}`]),
            tabIndex: 0,
            onKeyDown: A,
            children: (0, t.jsx)(B.Provider, {
              value: $,
              children: (0, t.jsxs)(I.az, {
                className: E.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${l})` },
                children: [v, j !== null && (0, t.jsx)(Y, { radius: l })],
              }),
            }),
          });
        }
        function N(C) {
          const { value: o, children: l, disabled: g } = C,
            c = (0, i.useContext)(B),
            [v, j] = (0, i.useState)(),
            { register: a, unregister: h } = c || {};
          if (
            ((0, i.useEffect)(
              () => (!v || !a || !h ? () => {} : (a(v, o), () => h(v, o))),
              [a, h, o, v],
            ),
            !c)
          )
            return null;
          const { value: z, onValueChange: W, radius: F, size: A } = c,
            R = o === z,
            $ = (d) => {
              d.stopPropagation(), d.preventDefault(), !(R || g) && W(o);
            },
            _ = l === void 0 ? o : l;
          return (0, t.jsx)(x.s, {
            justify: "center",
            align: "center",
            ref: j,
            onClick: $,
            "data-selected": R ? "true" : "false",
            className: S()(E.Item, A && E[`Size-${A}`], g ? E.disabled : ""),
            children: _,
          });
        }
        function u(C) {
          const { options: o, getOptionLabel: l = (c) => c, ...g } = C;
          return (0, t.jsx)(u.Root, {
            ...g,
            children: o.map((c) =>
              (0, t.jsx)(u.Item, { value: c, children: l(c) }, c),
            ),
          });
        }
        (u.Item = N), (u.Root = P);
        function Y(C) {
          const { radius: o } = C;
          return (0, t.jsx)(I.az, {
            className: E.IndicatorPosition,
            children: (0, t.jsx)("div", { className: E.Indicator }),
          });
        }
        function K(C, o) {
          const l = C.compareDocumentPosition(o);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      53011: (b) => {
        b.exports = {
          SegmentedControlBox: "_3tuJ3SHrhBu16Q7GZBtKyt",
          Indicator: "_2OvUYpkiij1e7K-4vW8i9W",
          SegmentedControl: "_3XFGk1-WmLNC9KlGi7IYtN",
          IndicatorPosition: "_1Dgxrv7wtUW1EViSgrdMlA",
          Item: "_2aNlsjcdOdHOtP8uACA3bM",
          "Size-1": "_2Y43gK-c1jI0x35n45iZ0",
          "Size-3": "_3ohjaEz8PkzSzIrIZKEdt9",
          disabled: "_3gVhaCZ4k3QSnF9WhRZk5m",
          "Variant-basic": "d2NNa31iY_ztalFCMja9O",
          "Variant-inset": "_1FRhoIifZWCKbnl4jrnmG2",
          "Variant-inset-glass": "_1gVVovvLBjwCxSH4wWUabt",
          "Variant-dim": "_3qc1Re1q3AH_JYfN49uj8r",
        };
      },
      93249: (b) => {
        b.exports = {
          Pill: "_3EvT6MP5NCj5Ptsctv6H3A",
          TerrorismPill: "_2JGuTxE_EPq5pzUfrneLF-",
          CSAMPill: "_2GfEACqYfP_xZgMYtfZK9-",
          ViolencePill: "_2bDmZI3RxXA50zYGByOynN",
        };
      },
    },
  ]);
})();
