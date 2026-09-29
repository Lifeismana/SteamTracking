/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [37102],
  {
    53011: (e) => {
      e.exports = {
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
    93249: (e) => {
      e.exports = {
        Pill: "_3EvT6MP5NCj5Ptsctv6H3A",
        TerrorismPill: "_2JGuTxE_EPq5pzUfrneLF-",
        CSAMPill: "_2GfEACqYfP_xZgMYtfZK9-",
        ViolencePill: "_2bDmZI3RxXA50zYGByOynN",
      };
    },
    56677: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { UGCBanDialogOnGlobalVariable: () => _ });
      var s = n(7850),
        r = n(83392),
        l = n(20187),
        i = n(48474),
        o = n(58157),
        a = n(65843),
        c = n(63987),
        u = n(56061),
        d = n(56456),
        j = n(90626);
      function m(e) {
        return a.u.Localize("#moderation_ugcban_default_note", (0, c.Jt)(e));
      }
      function _() {
        const [e, t] = j.useState(null),
          [n, a] = j.useState(null),
          [_, h] = j.useState(!1),
          [x, f] = j.useState("");
        if (
          (j.useEffect(
            () => (
              (window.ShowUGCBanDialog = (e, n) => {
                a(null), h(!1), f(""), t({ cItems: e.length, fnOnConfirm: n });
              }),
              () => {
                delete window.ShowUGCBanDialog;
              }
            ),
            [],
          ),
          !e)
        )
          return null;
        const g = () => t(null),
          b = e.cItems > 1 ? `Ban ${e.cItems} items` : "Ban item";
        return (0, s.jsxs)(d.s, {
          onClose: g,
          strTitle: b,
          children: [
            _ &&
              (0, s.jsx)(u.F, {
                reasons: (0, c.cd)(),
                onSelect: (e) => {
                  null !== e &&
                    ((!x.trim() || (null !== n && x === m(n))) && f(m(e)),
                    a(e)),
                    h(!1);
                },
              }),
            !_ &&
              (0, s.jsxs)(r.s, {
                direction: "column",
                gap: "2",
                minWidth: "400px",
                children: [
                  (0, s.jsxs)(r.s, {
                    direction: "row",
                    gap: "2",
                    align: "center",
                    marginBottom: "2",
                    children: [
                      (0, s.jsx)(l.EY, { children: "Select a reason:" }),
                      (0, s.jsx)(i.$, {
                        size: "1",
                        color: "dull",
                        onClick: () => h(!0),
                        children:
                          null === n ? "Click to select..." : (0, c.Jt)(n),
                      }),
                    ],
                  }),
                  (0, s.jsx)(l.EY, { children: "Note:" }),
                  (0, s.jsx)(o.f, {
                    value: x,
                    onTextChange: (e) => f(e),
                    maxLength: 256,
                  }),
                  (0, s.jsxs)(r.s, {
                    direction: "row",
                    gap: "2",
                    justify: "end",
                    marginTop: "3",
                    children: [
                      (0, s.jsx)(i.$, {
                        onClick: g,
                        color: "dull",
                        children: "Cancel",
                      }),
                      (0, s.jsx)(i.$, {
                        disabled: null === n || !x.trim(),
                        onClick: () => {
                          null !== n &&
                            x.trim() &&
                            (e.fnOnConfirm(n, x.trim()), g());
                        },
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
    86590: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { UGCModerationSubjectPanel: () => A });
      var s = n(7850),
        r = n(20187),
        l = n(83392),
        i = n(48474),
        o = n(86632),
        a = n(34410),
        c = n(90314),
        u = n(66418),
        d = n(56456),
        j = n(90626),
        m = n(43224),
        _ = n(12542),
        h = n(90182),
        x = n(63987),
        f = n(75187);
      const g = 1,
        b = 3;
      var p = n(64238),
        C = n.n(p),
        v = n(93249),
        I = n.n(v);
      function S(e) {
        return !!e && e !== b;
      }
      function z(e) {
        return S(e.status)
          ? (0, s.jsxs)("span", {
              className: C()(I().Pill, e.className),
              children: [e.label, e.status === g && "?"],
            })
          : null;
      }
      function N(e) {
        return (0, s.jsx)(z, {
          status: e.status,
          className: I().TerrorismPill,
          label: "Terrorism",
        });
      }
      function P(e) {
        return (0, s.jsx)(z, {
          status: e.status,
          className: I().CSAMPill,
          label: "CSAM",
        });
      }
      function w(e) {
        return (0, s.jsx)(z, {
          status: e.status,
          className: I().ViolencePill,
          label: "Violent threat",
        });
      }
      function E(e) {
        const { subject: t } = e;
        return S(t.terrorism_status) ||
          S(t.csam_status) ||
          S(t.credible_threat_of_violence_status)
          ? (0, s.jsxs)("div", {
              children: [
                (0, s.jsx)(N, { status: t.terrorism_status }),
                (0, s.jsx)(P, { status: t.csam_status }),
                (0, s.jsx)(w, { status: t.credible_threat_of_violence_status }),
              ],
            })
          : null;
      }
      function T(e) {
        return { subject_type: a.z8, published_file_id: e };
      }
      function k(e) {
        return (0, h.OI)(T(e));
      }
      function y(e) {
        var t, n, o;
        const a = (0, h.w3)(T(e.publishedFileID)),
          [c, u] = (0, j.useState)(!1);
        if (a.isPending) return null;
        if (a.isError)
          return (0, s.jsx)(r.EY, {
            children: m.T.Localize("#ugcsubjectpanel_error"),
          });
        const d =
          null === (t = a.data.subjects) || void 0 === t ? void 0 : t[0];
        return d
          ? (0, s.jsxs)(l.s, {
              direction: "column",
              gap: "1",
              children: [
                (0, s.jsx)(r.EY, { children: (0, x.hl)(d) }),
                (0, s.jsx)(E, { subject: d }),
                (0, s.jsx)(r.EY, {
                  children: m.T.Localize(
                    "#forumsubjectlist_subjectreportsummary",
                    null !== (n = d.unresolved_report_count) && void 0 !== n
                      ? n
                      : 0,
                    null !== (o = d.unresolved_dispute_count) && void 0 !== o
                      ? o
                      : 0,
                  ),
                }),
                (0, s.jsxs)(l.s, {
                  direction: "row",
                  gap: "2",
                  children: [
                    (0, s.jsx)(i.$, {
                      size: "1",
                      color: "dull",
                      onClick: () => u(!0),
                      children: m.T.Localize("#ugcsubjectpanel_history"),
                    }),
                    (0, s.jsx)(L, { subject: d }),
                    (0, s.jsx)(O, { subject: d }),
                  ],
                }),
                c && (0, s.jsx)(D, { subject: d, onClose: () => u(!1) }),
              ],
            })
          : null;
      }
      function L(e) {
        const { subject: t } = e,
          n = (0, h.YL)(t.reported_content_id ? [t.reported_content_id] : []),
          r =
            !!t.assigned_moderator_steamid &&
            "0" !== t.assigned_moderator_steamid;
        return t.reported_content_id &&
          r &&
          t.assigned_moderator_steamid === u.iA.steamid
          ? (0, s.jsx)(i.$, {
              size: "1",
              color: "dull",
              loading: n.isPending,
              onClick: () => n.mutate(),
              children: m.T.Localize("#ugcsubjectpanel_release"),
            })
          : null;
      }
      function O(e) {
        const { subject: t } = e,
          [n, r] = (0, j.useState)(!1);
        return t.reported_content_id && t.resolved === c.z_
          ? (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(i.$, {
                  size: "1",
                  color: "dull",
                  onClick: () => r(!0),
                  children: m.T.Localize("#moderation_escalation_escalate"),
                }),
                n &&
                  (0, s.jsx)(d.s, {
                    onClose: () => r(!1),
                    strTitle: m.T.Localize("#moderation_escalation_escalate"),
                    children: (0, s.jsx)(f.R, {
                      reportedContentID: t.reported_content_id,
                      onClose: () => r(!1),
                    }),
                  }),
              ],
            })
          : null;
      }
      function D(e) {
        const { subject: t, onClose: n } = e,
          [r, i] = (0, j.useState)("reports");
        return (0, s.jsx)(d.s, {
          onClose: n,
          strTitle: m.T.Localize("#ugcsubjectpanel_dialogtitle"),
          children: (0, s.jsxs)(l.s, {
            direction: "column",
            gap: "2",
            children: [
              (0, s.jsxs)(o.I.Root, {
                value: r,
                onValueChange: (e) => i(e),
                children: [
                  (0, s.jsx)(o.I.Item, {
                    value: "reports",
                    children: m.T.Localize("#ugcsubjectpanel_reports"),
                  }),
                  (0, s.jsx)(o.I.Item, {
                    value: "history",
                    children: m.T.Localize("#ugcsubjectpanel_history"),
                  }),
                ],
              }),
              "reports" === r && (0, s.jsx)(_.lX, { subject: t }),
              "history" === r &&
                (0, s.jsx)(_.B8, { reportedContentID: t.reported_content_id }),
            ],
          }),
        });
      }
      var V = n(29385);
      function A(e) {
        const { publishedFileID: t } = e,
          n = (0, V.jE)();
        return (
          (0, j.useEffect)(() => {
            const e = (e) => {
              var s;
              (null === (s = e.detail) || void 0 === s
                ? void 0
                : s.publishedFileID) == t &&
                n.invalidateQueries({ queryKey: k(t) });
            };
            return (
              window.addEventListener("ugc-moderation-resolved", e),
              () => window.removeEventListener("ugc-moderation-resolved", e)
            );
          }, [n, t]),
          (0, s.jsx)(y, { publishedFileID: t })
        );
      }
    },
    86632: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => _ });
      var s = n(7850),
        r = n(90626),
        l = n(61023),
        i = n(90534),
        o = n(81393),
        a = n(64238),
        c = n.n(a),
        u = n(53011),
        d = n(83392),
        j = n(66922);
      const m = (0, r.createContext)(null);
      function _(e) {
        const { options: t, getOptionLabel: n = (e) => e, ...r } = e;
        return (0, s.jsx)(_.Root, {
          ...r,
          children: t.map((e) =>
            (0, s.jsx)(_.Item, { value: e, children: n(e) }, e),
          ),
        });
      }
      function h(e) {
        const { radius: t } = e;
        return (0, s.jsx)(i.az, {
          className: u.IndicatorPosition,
          children: (0, s.jsx)("div", { className: u.Indicator }),
        });
      }
      function x(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : n & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
      }
      (_.Item = function (e) {
        const { value: t, children: n, disabled: l } = e,
          i = (0, r.useContext)(m),
          [o, a] = (0, r.useState)(),
          { register: j, unregister: _ } = i || {};
        if (
          ((0, r.useEffect)(
            () => (o && j && _ ? (j(o, t), () => _(o, t)) : () => {}),
            [j, _, t, o],
          ),
          !i)
        )
          return null;
        const { value: h, onValueChange: x, radius: f, size: g } = i,
          b = t === h,
          p = void 0 === n ? t : n;
        return (0, s.jsx)(d.s, {
          justify: "center",
          align: "center",
          ref: a,
          onClick: (e) => {
            e.stopPropagation(), e.preventDefault(), b || l || x(t);
          },
          "data-selected": b ? "true" : "false",
          className: c()(u.Item, g && u[`Size-${g}`], l ? u.disabled : ""),
          children: p,
        });
      }),
        (_.Root = function (e) {
          const {
              variant: t,
              radius: n,
              size: a,
              status: d,
              children: _,
              value: f,
              onValueChange: g,
            } = e,
            [b, p] = (0, r.useState)({}),
            C = (0, r.useCallback)((e, t) => p((n) => ({ ...n, [t]: e })), []),
            v = (0, r.useCallback)(
              (e, t) =>
                p((n) => {
                  const s = { ...n };
                  return s[t] === e && delete s[t], s;
                }),
              [],
            ),
            I = (0, j.f)("SegmentedControl", t),
            S = (0, r.useMemo)(
              () => ({
                value: f,
                onValueChange: g,
                register: C,
                unregister: v,
                radius: n,
                size: a,
              }),
              [f, g, C, v, n, a],
            );
          return (0, s.jsx)(l.j, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: I,
            radius: n,
            size: a,
            status: d,
            className: c()(u.SegmentedControlBox, u[`Variant-${I}`]),
            tabIndex: 0,
            onKeyDown: (e) => {
              let t = 0;
              switch (e.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  t = 1;
                  break;
                case "ArrowLeft":
                  t = -1;
              }
              if (t) {
                const n = Array.from(Object.values(b)).sort(x);
                let s;
                if (null === f) s = t > 0 ? 0 : n.length - 1;
                else {
                  const e = b[f],
                    r = n.findIndex((t) => t === e);
                  (0, o.wT)(
                    "number" == typeof r,
                    "Could not find current segmented value position",
                  ),
                    (s = r + t);
                }
                const r = n[s < 0 ? n.length + s : s % n.length],
                  l = Object.keys(b).find((e) => b[e] === r);
                "string" != typeof l
                  ? console.error("Could not find next segmeneted value")
                  : (g(l), e.stopPropagation(), e.preventDefault());
              }
            },
            children: (0, s.jsx)(m.Provider, {
              value: S,
              children: (0, s.jsxs)(i.az, {
                className: u.SegmentedControl,
                style: { "--outer-radius": `var(--radius-${n})` },
                children: [_, null !== f && (0, s.jsx)(h, { radius: n })],
              }),
            }),
          });
        });
    },
  },
]);
