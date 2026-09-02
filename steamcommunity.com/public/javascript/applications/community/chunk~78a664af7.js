/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8010],
    {
      25614: (Q, G, n) => {
        "use strict";
        n.d(G, { l: () => St });
        var e = n(7850),
          l = n(86067),
          v = n(86392),
          z = n(80151),
          B = n(49527),
          F = n(21113),
          m = n(46085),
          U = n(85599),
          c = n(85978),
          p = n(16114),
          f = n(3166),
          o = n(30986),
          u = n(20609),
          h = n.n(u);
        function x(a) {
          const { subject: t } = a;
          return t ? (0, e.jsx)(O, { ...a }) : (0, e.jsx)(P, {});
        }
        function P(a) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)("table", {
              children: [
                (0, e.jsx)("thead", {
                  children: (0, e.jsxs)("tr", {
                    children: [
                      (0, e.jsx)("th", { children: "Date" }),
                      (0, e.jsx)("th", { children: "Actor" }),
                      (0, e.jsx)("th", { children: "Action" }),
                      (0, e.jsx)("th", { children: "Details" }),
                    ],
                  }),
                }),
                (0, e.jsx)("tbody", {
                  children: (0, e.jsx)("tr", {
                    children: (0, e.jsx)("td", {
                      colSpan: 4,
                      children: l.T.Localize("#subjectauditlog_noentries"),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function O(a) {
          var t, s, i, A, M;
          const { subject: _ } = a,
            w = (0, m.Kt)(
              _ == null ? void 0 : _.subject_type,
              _ == null ? void 0 : _.subject_group_id,
              _ == null ? void 0 : _.subject_id,
            ),
            q =
              (i =
                (s =
                  (t = w == null ? void 0 : w.data) == null
                    ? void 0
                    : t.entries) == null
                  ? void 0
                  : s.length) != null
                ? i
                : 0,
            se =
              (M = (A = w.data) == null ? void 0 : A.entries) != null ? M : [];
          return (
            se.sort((de, oe) => oe.timestamp - de.timestamp),
            (0, e.jsx)("div", {
              children:
                q > 0 &&
                (0, e.jsxs)("table", {
                  children: [
                    (0, e.jsx)("thead", {
                      children: (0, e.jsxs)("tr", {
                        children: [
                          (0, e.jsx)("th", { children: "Date" }),
                          (0, e.jsx)("th", { children: "Actor" }),
                          (0, e.jsx)("th", { children: "Action" }),
                          (0, e.jsx)("th", { children: "Details" }),
                        ],
                      }),
                    }),
                    (0, e.jsxs)("tbody", {
                      children: [
                        w === void 0 &&
                          (0, e.jsx)("tr", {
                            children: (0, e.jsx)("td", {
                              colSpan: 4,
                              children: l.T.Localize(
                                "#subjectauditlog_noentries",
                              ),
                            }),
                          }),
                        w &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              w.isLoading &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(U.t, {}),
                                  }),
                                }),
                              w.isError &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: l.T.Localize(
                                      "#subjectauditlog_error",
                                    ),
                                  }),
                                }),
                              w.isSuccess &&
                                q === 0 &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: l.T.Localize(
                                      "#subjectauditlog_noentries",
                                    ),
                                  }),
                                }),
                              w.isSuccess &&
                                q > 0 &&
                                se.map((de) =>
                                  (0, e.jsx)(ae, { entry: de }, de.timestamp),
                                ),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            })
          );
        }
        function ae(a) {
          var t, s;
          const { entry: i } = a,
            A = (0, c.jn)(i.actor_steamid);
          return !A.isSuccess || !A.data
            ? null
            : (0, e.jsxs)("tr", {
                children: [
                  (0, e.jsx)("td", {
                    children: (0, p.P0)(i.timestamp, !1, ""),
                  }),
                  (0, e.jsxs)("td", {
                    children: [
                      (0, e.jsx)("a", {
                        href: `${f.TS.COMMUNITY_BASE_URL}profiles/${i.actor_steamid}`,
                        children: (0, e.jsx)("span", {
                          children:
                            (s =
                              (t = A.data) == null ? void 0 : t.public_data) ==
                            null
                              ? void 0
                              : s.persona_name,
                        }),
                      }),
                      " ",
                      "(",
                      (0, e.jsx)("a", {
                        href: `/moderation/activity/${i.actor_steamid}`,
                        children: "activity",
                      }),
                      ")",
                    ],
                  }),
                  (0, e.jsxs)("td", {
                    children: [
                      (0, v.fg)(i.action),
                      i.automated_action &&
                        (0, e.jsx)(e.Fragment, { children: "\xA0(Automated)" }),
                    ],
                  }),
                  (0, e.jsx)("td", {
                    children: (0, e.jsx)(D, {
                      eAction: i.action,
                      jsonData: i.additional_json_data,
                    }),
                  }),
                ],
              });
        }
        function D(a) {
          const { eAction: t, jsonData: s } = a;
          let i = {};
          switch ((s && (i = JSON.parse(s)), t)) {
            case z.Hd:
              return (0, e.jsxs)(e.Fragment, {
                children: ["Report ID: ", i.report_id],
              });
            case z._F:
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  "Reason: ",
                  (0, v.Jt)(i.reason),
                  i.resolution !== B.CC &&
                    i.resolution !== B.S6 &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Resolution: ",
                        (0, v.l)(i.resolution),
                      ],
                    }),
                  i.sanctions &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Sanctions: ",
                        i.sanctions.map(v.cB).join(", "),
                      ],
                    }),
                ],
              });
            case z.Nu:
              return (0, e.jsxs)(e.Fragment, {
                children: ["Report ID: ", i.report_id],
              });
            case z.XP:
              return (0, e.jsx)(e.Fragment, {
                children: JSON.stringify(i, null, "	"),
              });
            case z.YI:
              return (0, e.jsxs)(e.Fragment, {
                children: ["New level: ", (0, v.ar)(i.level)],
              });
            case z._7:
              return (0, e.jsxs)(e.Fragment, {
                children: ["Report ID: ", i.report_id],
              });
            default:
              return null;
          }
        }
        function S(a) {
          var t;
          const { subject: s } = a,
            i = s && s.reports && s.reports.length > 0;
          return (0, e.jsx)("table", {
            className: h().ContentReportsTable,
            children: (0, e.jsxs)("tbody", {
              children: [
                !i &&
                  (0, e.jsx)("tr", {
                    children: (0, e.jsx)("td", {
                      colSpan: 4,
                      children: l.T.Localize("#contentreportslist_noreports"),
                    }),
                  }),
                i &&
                  ((t = s.reports) == null
                    ? void 0
                    : t.map((A) => (0, e.jsx)(W, { report: A }, A.report_id))),
              ],
            }),
          });
        }
        function W(a) {
          var t, s;
          const { report: i } = a,
            A = (0, c.jn)(i.reporter_steamid);
          if (!A.isSuccess || !((t = A.data) != null && t.public_data))
            return null;
          const M = !!i.time_disputed && i.dispute_resolved === B.z_,
            _ =
              i.resolved !== B.z_ &&
              (!i.time_disputed || i.dispute_resolved !== B.z_),
            w = i.time_dispute_resolved !== 0,
            q = i.resolved === B.CC;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, p.P0)(i.time_reported, !1, ""),
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)("a", {
                    href: `${f.TS.COMMUNITY_BASE_URL}profiles/${i.reporter_steamid}`,
                    children: (0, e.jsx)(o.wm, {
                      playerLinkDetails: A.data,
                      size: "X-Small",
                      alt: "Reporter",
                    }),
                  }),
                  "\xA0",
                  (0, e.jsx)("a", {
                    href: `${f.TS.COMMUNITY_BASE_URL}profiles/${i.reporter_steamid}`,
                    children: (0, e.jsx)("span", {
                      children:
                        (s = A.data.public_data) == null
                          ? void 0
                          : s.persona_name,
                    }),
                  }),
                ],
              }),
              (0, e.jsx)("td", {
                children:
                  i.report_reason !== F.OQ &&
                  (0, e.jsx)("span", { children: (0, v.Jt)(i.report_reason) }),
              }),
              (0, e.jsxs)("td", {
                children: [
                  q &&
                    !M &&
                    !w &&
                    (0, e.jsx)("span", {
                      children: l.T.Localize(
                        "#contentreportslist_acquitted_at",
                        (0, p.P0)(i.time_resolved, !1, ""),
                      ),
                    }),
                  _ &&
                    !q &&
                    !M &&
                    !w &&
                    (0, e.jsx)("span", {
                      children: l.T.Localize(
                        "#contentreportslist_resolved_at",
                        (0, p.P0)(i.time_resolved, !1, ""),
                      ),
                    }),
                  M &&
                    !w &&
                    (0, e.jsx)("span", {
                      children: l.T.Localize(
                        "#contentreportslist_disputed_at",
                        (0, p.P0)(i.time_disputed, !1, ""),
                      ),
                    }),
                  w &&
                    (0, e.jsx)("span", {
                      children: l.T.Localize(
                        "#contentreportslist_dispute_resolved_at",
                        (0, p.P0)(i.time_dispute_resolved, !1, ""),
                      ),
                    }),
                  !M && (0, e.jsx)("span", { children: i.report_text }),
                  M &&
                    (0, e.jsxs)("span", {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Original: ",
                        i.report_text,
                        (0, e.jsx)("br", {}),
                        "Dispute: ",
                        i.dispute_details,
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        var L = n(20476),
          E = n(90626),
          k = n(26072),
          le = n(30770),
          y = n.n(le),
          d = n(24660),
          g = n(19298),
          j = n(68031),
          C = n(75083);
        function T(a) {
          const { subject: t, onClose: s } = a,
            [i, A] = (0, E.useState)(L.PV),
            M = (0, m.lY)(t.subject_type, t.subject_group_id, t.subject_id),
            _ = (0, E.useRef)(null),
            w = async () => {
              var q;
              const se = (q = _.current) == null ? void 0 : q.value;
              await M.mutateAsync({ eNewLevel: i, strNote: se }), s();
            };
          return (0, e.jsxs)(g.Z, {
            className: y().EscalateSubjectDialogCtn,
            children: [
              (0, e.jsx)(g.Z, {
                children: l.T.Localize("#moderation_escalation_description"),
              }),
              (0, e.jsxs)("select", {
                className: y().EscalationLevelSelect,
                value: i,
                onChange: (q) => A(parseInt(q.target.value)),
                children: [
                  (0, e.jsx)("option", {
                    value: L.HH,
                    children: l.T.Localize("#moderation_escalationlevel_any"),
                  }),
                  (0, e.jsx)("option", {
                    value: L.lp,
                    children: l.T.Localize(
                      "#moderation_escalationlevel_supervisor",
                    ),
                  }),
                  (0, e.jsx)("option", {
                    value: L.PV,
                    children: l.T.Localize("#moderation_escalationlevel_valve"),
                  }),
                ],
              }),
              (0, e.jsx)("label", {
                children: l.T.Localize("#moderation_escalation_escalationnote"),
              }),
              (0, e.jsx)(d.dO, { className: y().ReasonTextArea, ref: _ }),
              (0, e.jsxs)(j.s, {
                direction: "row",
                justify: "end",
                children: [
                  (0, e.jsx)(d.fu, {
                    onClick: s,
                    children: k.u.Localize("#moderation_cancel"),
                  }),
                  (0, e.jsx)(C.$, {
                    onClick: w,
                    loading: M.isPending,
                    children: l.T.Localize("#moderation_escalation_escalate"),
                  }),
                ],
              }),
            ],
          });
        }
        var b = n(4806),
          ne = n(98580),
          K = n.n(ne),
          ve = n(59884),
          me = n.n(ve),
          he = n(66243);
        function Ae(a) {
          const [t, s] = (0, E.useState)(null),
            [i, A] = (0, E.useState)([]),
            [M, _] = (0, E.useState)(!1),
            [w, q] = (0, E.useState)(!1);
          let se = a.reasons;
          for (const I of i) se = se[I].children;
          const de = t !== null ? (0, v.V$)(t) : null,
            oe = t !== null ? (0, v.GA)(t) : null,
            ce = () => {
              t !== null
                ? s(null)
                : i.length === 0
                  ? a.onSelect(null)
                  : A(i.slice(0, -1));
            },
            pe = () => {
              let I = t;
              I !== null &&
                (M && (0, v.V$)(I) !== null && (I = (0, v.V$)(I)),
                w && (0, v.GA)(I) !== null && (I = (0, v.GA)(I)),
                a.onSelect(I));
            };
          return (0, e.jsxs)("div", {
            children: [
              t === null &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: me().BlockList,
                      children: se.map((I, fe) => {
                        const ye = () => {
                          if ((0, v.Ju)(I)) {
                            const ge = [...i];
                            ge.push(fe), A(ge);
                          } else if ((0, v.X$)(I))
                            (0, v.V$)(I.value) || (0, v.GA)(I.value)
                              ? s(I.value)
                              : a.onSelect(I.value);
                          else throw new Error("This should be unreachable.");
                        };
                        return (0, v.Ur)(I)
                          ? (0, e.jsx)(
                              d.Ii,
                              {
                                className: me().BlockListItem,
                                href: I.url,
                                children: k.u.Localize(I.strLocToken),
                              },
                              I.url,
                            )
                          : (0, e.jsxs)(
                              g.Z,
                              {
                                onActivate: ye,
                                className: me().BlockListItem,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, v.Ju)(I)
                                      ? k.u.Localize(I.strLocToken)
                                      : (0, v.Jt)(I.value),
                                  }),
                                  (0, v.Ju)(I) &&
                                    (0, e.jsx)("span", { children: "\u25B6" }),
                                ],
                              },
                              fe,
                            );
                      }),
                    }),
                    (0, e.jsx)(he.n9, { onClick: ce, children: "Back" }),
                  ],
                }),
              t !== null &&
                (0, e.jsxs)("div", {
                  className: me().BlockList,
                  children: [
                    (0, e.jsx)("div", {
                      className: me().BlockListItem,
                      children: (0, v.Jt)(t),
                    }),
                    de !== null &&
                      (0, e.jsxs)("label", {
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            checked: M,
                            onChange: (I) => _(I.target.checked),
                          }),
                          " Targeted at women",
                        ],
                      }),
                    oe !== null &&
                      (0, e.jsxs)("label", {
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            checked: w,
                            onChange: (I) => q(I.target.checked),
                          }),
                          " Deepfake",
                        ],
                      }),
                    (0, e.jsxs)("div", {
                      className: me().BottomButtons,
                      children: [
                        (0, e.jsx)(he.n9, { onClick: ce, children: "Back" }),
                        (0, e.jsx)(he.n9, {
                          onClick: pe,
                          children: "Continue",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        var H = n(36707),
          Fe = n(71742),
          Qe = n(72604),
          We = n(88942),
          ke = n(99412),
          re = n(80613),
          N = n.n(re),
          r = n(75245),
          Be = n(35038),
          at = Object.defineProperty,
          rt = (a, t, s) =>
            t in a
              ? at(a, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (a[t] = s),
          ie = (a, t, s) => rt(a, typeof t != "symbol" ? t + "" : t, s);
        function Pt(a) {
          return "unknown EHelpRequestType ( " + a + " )";
        }
        function Ot(a) {
          return "unknown EHelpRequestState ( " + a + " )";
        }
        function It(a) {
          return "unknown EHelpRequestReviewState ( " + a + " )";
        }
        function zt(a) {
          return "unknown EHelpRequestStatsRollupInterval ( " + a + " )";
        }
        function Ft(a) {
          return "unknown EHelpRequestStatsResponderType ( " + a + " )";
        }
        function Qt(a) {
          return "unknown EHelpIssue ( " + a + " )";
        }
        function Wt(a) {
          return "unknown EHelpRequestEscalationLevel ( " + a + " )";
        }
        function kt(a) {
          return "unknown EHelpRequestMsgType ( " + a + " )";
        }
        function Kt(a) {
          return "unknown EHelpRequestAction ( " + a + " )";
        }
        function Ht(a) {
          return "unknown EHelpRequestSortOrder ( " + a + " )";
        }
        function Nt(a) {
          return "unknown EHelpRequestPOPType ( " + a + " )";
        }
        function Gt(a) {
          return "unknown EAnnouncementPlacement ( " + a + " )";
        }
        function qt(a) {
          return "unknown ETickerCategoryLanguageRule ( " + a + " )";
        }
        function Vt(a) {
          return "unknown EPreapprovalResolution ( " + a + " )";
        }
        function Jt(a) {
          return "unknown EHelpRequestFeedbackCategory ( " + a + " )";
        }
        function Zt(a) {
          return "unknown EHelpRequestFeedbackTargetType ( " + a + " )";
        }
        function Xt(a) {
          return "unknown EFeedbackState ( " + a + " )";
        }
        function Yt(a) {
          return "unknown ESupportActionSource ( " + a + " )";
        }
        function $t(a) {
          return "unknown ERefundSupportAction ( " + a + " )";
        }
        const Se = class V extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.quicktext_id || r.Sg(V.M()),
              re.Message.initialize(this, t, 0, -1, [6, 10, 11], null);
          }
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    requires_update: {
                      n: 2,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    title: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    hidden: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    approved: { n: 5, br: r.qM.readBool, bw: r.gp.writeBool },
                    help_request_types: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    content: { n: 7, c: Ke },
                    button_text: {
                      n: 8,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    replacement: {
                      n: 9,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    payment_methods: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: r.qM.readUint32,
                      pbr: r.qM.readPackedUint32,
                      bw: r.gp.writeRepeatedUint32,
                    },
                    escalation_level: {
                      n: 12,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    partner_only: {
                      n: 13,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = r.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(V.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (N().BinaryReader)(t),
              i = new V();
            return V.deserializeBinaryFromReader(i, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(V.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(V.M(), t, s);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        };
        ie(Se, "sm_m"), ie(Se, "sm_mbf");
        let it = Se;
        const be = class J extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.content || r.Sg(J.M()),
              re.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    content: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    major_revision: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    minor_revision: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    author: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    last_update: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    language: { n: 6, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = r.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(J.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (N().BinaryReader)(t),
              i = new J();
            return J.deserializeBinaryFromReader(i, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(J.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(J.M(), t, s);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        };
        ie(be, "sm_m"), ie(be, "sm_mbf");
        let Ke = be;
        const _e = class Z extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Z.prototype.quicktext_id || r.Sg(Z.M()),
              re.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    language: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    from_sql: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = r.w0(Z.M())), Z.sm_mbf;
          }
          toObject(t = !1) {
            return Z.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Z.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Z.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (N().BinaryReader)(t),
              i = new Z();
            return Z.deserializeBinaryFromReader(i, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Z.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Z.M(), t, s);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        };
        ie(_e, "sm_m"), ie(_e, "sm_mbf");
        let He = _e;
        const Re = class X extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.quicktext || r.Sg(X.M()),
              re.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    quicktext: { n: 1, c: it },
                    english_reference: { n: 2, c: Ke },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(X.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (N().BinaryReader)(t),
              i = new X();
            return X.deserializeBinaryFromReader(i, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(X.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(X.M(), t, s);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        };
        ie(Re, "sm_m"), ie(Re, "sm_mbf");
        let ot = Re;
        const Ee = class Y extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.appid || r.Sg(Y.M()),
              re.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    log_type: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    version_string: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    log_contents: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    request_id: {
                      n: 5,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Y.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (N().BinaryReader)(t),
              i = new Y();
            return Y.deserializeBinaryFromReader(i, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Y.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Y.M(), t, s);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        };
        ie(Ee, "sm_m"), ie(Ee, "sm_mbf");
        let lt = Ee;
        const Te = class $ extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.id || r.Sg($.M()),
              re.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT($.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (N().BinaryReader)(t),
              i = new $();
            return $.deserializeBinaryFromReader(i, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj($.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0($.M(), t, s);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        };
        ie(Te, "sm_m"), ie(Te, "sm_mbf");
        let ct = Te;
        const Ce = class ee extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ee.prototype.appid || r.Sg(ee.M()),
              re.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = r.w0(ee.M())), ee.sm_mbf;
          }
          toObject(t = !1) {
            return ee.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ee.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ee.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (N().BinaryReader)(t),
              i = new ee();
            return ee.deserializeBinaryFromReader(i, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ee.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ee.M(), t, s);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        };
        ie(Ce, "sm_m"), ie(Ce, "sm_mbf");
        let ut = Ce;
        const Me = class te extends re.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              te.prototype.request_id || r.Sg(te.M()),
              re.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    request_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = r.w0(te.M())), te.sm_mbf;
          }
          toObject(t = !1) {
            return te.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(te.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(te.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (N().BinaryReader)(t),
              i = new te();
            return te.deserializeBinaryFromReader(i, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(te.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (N().BinaryWriter)();
            return te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(te.M(), t, s);
          }
          serializeBase64String() {
            var t = new (N().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        };
        ie(Me, "sm_m"), ie(Me, "sm_mbf");
        let dt = Me;
        var De;
        ((a) => {
          function t(s, i, A) {
            return s.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, Be.I8)(He, i, A),
              ot,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          a.GetQuickText = t;
        })(De || (De = {}));
        var Ne;
        ((a) => {
          function t(i, A, M) {
            return i.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, Be.I8)(lt, A, M),
              ct,
              { ePrivilege: 1 },
            );
          }
          a.UploadUserApplicationLog = t;
          function s(i, A, M) {
            return i.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, Be.I8)(ut, A, M),
              dt,
              { ePrivilege: 1 },
            );
          }
          a.GetApplicationLogDemand = s;
        })(Ne || (Ne = {}));
        var mt = n(68312),
          Le = n(56718);
        function pt(a) {
          const [t, s] = (0, E.useState)(null),
            [i, A] = (0, E.useState)("main"),
            [M, _] = (0, E.useState)(!1),
            [w, q] = (0, E.useState)(!1),
            [se, de] = (0, E.useState)(null),
            [oe, ce] = (0, E.useState)(null),
            [pe, I] = (0, E.useState)(null),
            [fe, ye] = (0, E.useState)(!1),
            [ge, xe] = (0, E.useState)(!1),
            [je, Mt] = (0, E.useState)(L.HH),
            [Pe, qe] = (0, E.useState)(""),
            Ve =
              a.rtContentCreatedAt !== void 0
                ? (Date.now() / 1e3 - a.rtContentCreatedAt) / (30 * 86400)
                : !1,
            Dt = M || w || se || oe || pe || fe || ge,
            Oe = gt(a.authorSteamID);
          let Ie = ke.Bhc;
          if (Oe.isSuccess) {
            const R = Oe.data;
            R.pref_primary_language !== void 0 && R.pref_primary_language !== -1
              ? (Ie = R.pref_primary_language)
              : R.last_logon_langauge !== void 0 &&
                R.last_logon_langauge !== -1 &&
                (Ie = R.last_logon_langauge);
          }
          const Lt = (0, v.AH)(t),
            ze = ft(Lt, Ie);
          (0, E.useEffect)(() => {
            var R, Ye, $e, et, tt, nt, st;
            qe(
              (st =
                (nt =
                  ($e =
                    (Ye = (R = ze.data) == null ? void 0 : R.quicktext) == null
                      ? void 0
                      : Ye.content) == null
                    ? void 0
                    : $e.content) != null
                  ? nt
                  : (tt =
                        (et = ze.data) == null
                          ? void 0
                          : et.english_reference) == null
                    ? void 0
                    : tt.content) != null
                ? st
                : "",
            );
          }, [ze.data, Oe.data]);
          const Je = !1,
            Ze = !1,
            Xe = !1,
            wt = async () => {
              (0, Fe.wT)(t !== null, "eReason must be non-null to sanction");
              const R = [];
              M && R.push({ sanction: b.EF }),
                w && R.push({ sanction: b.Cv }),
                se && R.push({ sanction: b.ME, days: se }),
                oe && R.push({ sanction: b.sR, days: oe }),
                pe && R.push({ sanction: b.bX, days: pe }),
                fe && R.push({ sanction: b.Fh, days: -1 }),
                ge && R.push({ sanction: b.X5 }),
                je === L.lp
                  ? R.push({ sanction: b.nw, escalate_to: L.lp })
                  : je === L.PV &&
                    R.push({ sanction: b.nw, escalate_to: L.PV }),
                await a.sanctionMutation.mutateAsync({
                  sanctions: R,
                  message: Pe.trim(),
                  reason: t,
                }),
                a.onSanction();
            },
            Ut = (R) => {
              s(R), A("main");
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              i === "reason" && (0, e.jsx)(Ae, { reasons: v.UL, onSelect: Ut }),
              i === "main" &&
                (0, e.jsxs)(g.Z, {
                  children: [
                    (0, e.jsxs)(g.Z, {
                      className: K().SanctionForm,
                      children: [
                        a.sanctionMutation.isError &&
                          (0, e.jsxs)("div", {
                            className: (0, H.A)(
                              K().OneColumn,
                              K().ErrorMessage,
                            ),
                            children: [
                              (0, e.jsx)(Le.Q9b, {}),
                              " Error: ",
                              a.sanctionMutation.error.message,
                            ],
                          }),
                        (0, e.jsx)("label", {
                          htmlFor: "reason",
                          children: "Reason:",
                        }),
                        (0, e.jsx)("button", {
                          id: "reason",
                          className: K().ClickableText,
                          onClick: () => A("reason"),
                          children:
                            t === null
                              ? l.T.Localize(
                                  "#commentsanctiondialog_selectreason",
                                )
                              : (0, v.Jt)(t),
                        }),
                        (0, e.jsxs)("label", {
                          className: K().OneColumn,
                          children: [
                            (0, e.jsx)("input", {
                              type: "checkbox",
                              checked: M,
                              onChange: (R) => _(R.target.checked),
                            }),
                            " Delete",
                          ],
                        }),
                        (0, e.jsxs)("label", {
                          className: K().OneColumn,
                          children: [
                            (0, e.jsx)("input", {
                              type: "checkbox",
                              checked: w,
                              onChange: (R) => q(R.target.checked),
                            }),
                            " Issue Warning",
                          ],
                        }),
                        Ve &&
                          !!se &&
                          (0, e.jsxs)("div", {
                            className: (0, H.A)(
                              K().OneColumn,
                              K().ErrorMessage,
                            ),
                            children: [
                              (0, e.jsx)(Le.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        a.clanSteamID &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("label", {
                                htmlFor: "hubban",
                                children: "Ban from hub:",
                              }),
                              !Je &&
                                (0, e.jsxs)("select", {
                                  id: "hubban",
                                  onChange: (R) =>
                                    de(
                                      R.target.value === "0"
                                        ? null
                                        : parseInt(R.target.value),
                                    ),
                                  value: se != null ? se : 0,
                                  children: [
                                    (0, e.jsx)("option", {
                                      value: "0",
                                      children: "Do not ban",
                                    }),
                                    (0, e.jsx)("option", {
                                      value: "1",
                                      children: "1 day",
                                    }),
                                    (0, e.jsx)("option", {
                                      value: "3",
                                      children: "3 days",
                                    }),
                                    (0, e.jsx)("option", {
                                      value: "7",
                                      children: "7 days",
                                    }),
                                    (0, e.jsx)("option", {
                                      value: "14",
                                      children: "14 days",
                                    }),
                                    (0, e.jsx)("option", {
                                      value: "30",
                                      children: "30 days",
                                    }),
                                    (0, e.jsx)("option", {
                                      value: "90",
                                      children: "3 months",
                                    }),
                                    (0, e.jsx)("option", {
                                      value: "365",
                                      children: "1 year",
                                    }),
                                    (0, e.jsx)("option", {
                                      value: "-1",
                                      children: "Permanent",
                                    }),
                                  ],
                                }),
                              Je &&
                                (0, e.jsx)("div", {
                                  id: "hubban",
                                  children: "Already banned from hub",
                                }),
                            ],
                          }),
                        Ve &&
                          !!oe &&
                          (0, e.jsxs)("div", {
                            className: (0, H.A)(
                              K().OneColumn,
                              K().ErrorMessage,
                            ),
                            children: [
                              (0, e.jsx)(Le.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        (0, e.jsx)("label", {
                          htmlFor: "communityban",
                          children: "Ban from community:",
                        }),
                        !Ze &&
                          (0, e.jsxs)("select", {
                            id: "communityban",
                            onChange: (R) =>
                              ce(
                                R.target.value === "0"
                                  ? null
                                  : parseInt(R.target.value),
                              ),
                            value: oe != null ? oe : 0,
                            children: [
                              (0, e.jsx)("option", {
                                value: "0",
                                children: "Do not ban",
                              }),
                              (0, e.jsx)("option", {
                                value: "1",
                                children: "1 day",
                              }),
                              (0, e.jsx)("option", {
                                value: "3",
                                children: "3 days",
                              }),
                              (0, e.jsx)("option", {
                                value: "7",
                                children: "7 days",
                              }),
                              (0, e.jsx)("option", {
                                value: "14",
                                children: "14 days",
                              }),
                              (0, e.jsx)("option", {
                                value: "30",
                                children: "30 days",
                              }),
                              (0, e.jsx)("option", {
                                value: "90",
                                children: "3 months",
                              }),
                              (0, e.jsx)("option", {
                                value: "365",
                                children: "1 year",
                              }),
                              (0, e.jsx)("option", {
                                value: "-1",
                                children: "Permanent",
                              }),
                            ],
                          }),
                        Ze &&
                          (0, e.jsx)("div", {
                            id: "communityban",
                            children: "Already community banned.",
                          }),
                        (0, e.jsx)("label", {
                          htmlFor: "deletecomments",
                          children: "Delete comments since:",
                        }),
                        (0, e.jsxs)("select", {
                          id: "deletecomments",
                          disabled: ge,
                          onChange: (R) =>
                            I(
                              R.target.value === "-1"
                                ? null
                                : parseInt(R.target.value),
                            ),
                          value: pe != null ? pe : -1,
                          children: [
                            (0, e.jsx)("option", {
                              value: "-1",
                              children: "Do not delete",
                            }),
                            (0, e.jsx)("option", {
                              value: "1",
                              children: "1 day",
                            }),
                            (0, e.jsx)("option", {
                              value: "7",
                              children: "7 days",
                            }),
                            (0, e.jsx)("option", {
                              value: "14",
                              children: "14 days",
                            }),
                            (0, e.jsx)("option", {
                              value: "30",
                              children: "30 days",
                            }),
                            (0, e.jsx)("option", {
                              value: "0",
                              children: "All comments",
                            }),
                          ],
                        }),
                        !Xe &&
                          (0, e.jsxs)("span", {
                            className: K().OneColumn,
                            children: [
                              (0, e.jsx)("input", {
                                type: "checkbox",
                                checked: fe,
                                onChange: (R) => ye(R.target.checked),
                              }),
                              "\xA0Permanent trade ban",
                            ],
                          }),
                        Xe &&
                          (0, e.jsx)("div", {
                            children: "Already trade banned.",
                          }),
                        (0, e.jsxs)("span", {
                          className: K().OneColumn,
                          children: [
                            (0, e.jsx)("input", {
                              type: "checkbox",
                              checked: ge,
                              onChange: (R) => xe(R.target.checked),
                            }),
                            "\xA0Mark as suspicious",
                          ],
                        }),
                        (0, e.jsx)("label", {
                          htmlFor: "escalateto",
                          children: "Escalate to",
                        }),
                        (0, e.jsxs)("select", {
                          id: "escalateto",
                          onChange: (R) => Mt(parseInt(R.target.value)),
                          value: je,
                          children: [
                            (0, e.jsx)("option", {
                              value: L.HH,
                              children: "Do not escalate",
                            }),
                            (0, e.jsx)("option", {
                              value: L.lp,
                              children: "Supervisor",
                            }),
                            (0, e.jsx)("option", {
                              value: L.PV,
                              children: "Valve",
                            }),
                          ],
                        }),
                        (0, e.jsx)("textarea", {
                          className: (0, H.A)(
                            K().OneColumn,
                            K().MessageTextArea,
                          ),
                          placeholder: "Message to send (required)",
                          value: Pe,
                          onChange: (R) => qe(R.target.value),
                        }),
                      ],
                    }),
                    (0, e.jsxs)(g.Z, {
                      className: K().BottomButtons,
                      children: [
                        a.sanctionMutation.isPending &&
                          (0, e.jsx)(U.t, { size: "small" }),
                        !a.sanctionMutation.isPending &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)(he.Oh, {
                                onClick: a.onCancel,
                                children: "Cancel",
                              }),
                              (0, e.jsx)(he.n9, {
                                onClick: wt,
                                disabled:
                                  t === null || !Dt || Pe.trim().length === 0,
                                children: "Sanction",
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
        function ft(a, t) {
          const s = (0, mt.KV)();
          return (0, We.I)({
            queryKey: ["get_quick_text", a, t],
            queryFn: async () => {
              if (a == null || t === void 0) return null;
              const i = Be.w.Init(He);
              i.Body().set_quicktext_id(a),
                i.Body().set_language((0, ke.LgB)(t));
              const A = await De.GetQuickText(s, i);
              if (A.GetEResult() !== Qe.R)
                throw new Error(
                  "useQuickText failed with EResult " + A.GetEResult(),
                );
              return A.Body().toObject();
            },
            enabled: a !== void 0,
          });
        }
        function gt(a) {
          return (0, We.I)({
            queryKey: ["get_primary_language_for_user", a],
            queryFn: async () => {
              if (a === "0" || !a) throw new Error("Invalid steamid");
              const s = await (
                await fetch(
                  `${f.TS.COMMUNITY_BASE_URL}profiles/${a}/ajaxlanguagepreferences`,
                )
              ).json();
              if (s.success === Qe.R) return s.preferences;
              throw new Error(
                "Failed GetPrimaryLanguageForUser. EResult: " + s.success,
              );
            },
          });
        }
        var vt = n(71421),
          ht = n(41635),
          jt = n(84670),
          ue = n.n(jt),
          we = n(25792),
          yt = n(2801),
          At = n(15568),
          Bt = n(21418),
          Ge = n(19316),
          Ue = n(36118),
          xt = n(86336);
        function St(a) {
          const { subject: t } = a,
            [s, i] = (0, E.useState)(!1),
            A =
              t &&
              (t.unresolved_report_count > 0 || t.unresolved_dispute_count > 0),
            M = (0, e.jsx)(xt.W, {
              onClick: () => i(!0),
              children: (0, e.jsxs)(j.s, {
                direction: "row",
                justify: "between",
                align: "baseline",
                gap: "1",
                children: [
                  A &&
                    (0, e.jsx)("img", {
                      className: ue().Flag,
                      src: `${f.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  l.T.Localize("#commentsanctiondialog_moderate"),
                  t &&
                    t.required_moderator_level === L.PV &&
                    (0, e.jsx)("span", {
                      className: ue().ValveOnly,
                      children: "(VO)",
                    }),
                  t &&
                    t.required_moderator_level === L.lp &&
                    (0, e.jsx)("span", {
                      className: ue().SupervisorOnly,
                      children: "(Supervisor)",
                    }),
                ],
              }),
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              s && (0, e.jsx)(_t, { onClose: () => i(!1), ...a }),
              t &&
                (0, e.jsx)(vt.Gq, {
                  toolTipContent: (0, e.jsx)(bt, { subject: t }),
                  direction: "bottom",
                  nDelayShowMS: 0,
                  children: M,
                }),
              !t && M,
            ],
          });
        }
        function bt(a) {
          const { subject: t } = a,
            s = (0, E.useMemo)(() => {
              var i;
              const A = (0, ht.D5)(
                (i = t == null ? void 0 : t.reports) != null ? i : [],
                (M) => M.report_reason,
              );
              return A.sort((M, _) => M[1] - _[1]), A;
            }, [t.reports]);
          return s.length === 0
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    children: l.T.Localize("#reasonlist_title"),
                  }),
                  s.map(([i, A]) =>
                    (0, e.jsx)(
                      "div",
                      {
                        children: l.T.Localize(
                          "#reasonlist_reasonwithcount",
                          (0, v.Jt)(i),
                          A,
                        ),
                      },
                      i,
                    ),
                  ),
                ],
              });
        }
        function _t(a) {
          var t, s, i;
          const {
              sanctionMutation: A,
              acquitMutation: M,
              subject: _,
              subjectKey: w,
              clanSteamID: q,
              authorSteamID: se,
              onClose: de,
            } = a,
            [oe, ce] = (0, E.useState)("main"),
            pe = [
              {
                name: "Reports",
                key: "reports",
                contents: (0, e.jsx)(we.tH, {
                  children: (0, e.jsx)(S, { subject: _ }),
                }),
              },
              {
                name: "History",
                key: "history",
                contents: (0, e.jsx)(we.tH, {
                  children: (0, e.jsx)(x, { subject: _ }),
                }),
              },
              {
                name: "Details",
                key: "details",
                contents: (0, e.jsx)(we.tH, { children: a.children }),
              },
            ],
            I = () => {
              a.onClose(),
                window.location.href.split("#").length === 1 &&
                  w.subject_id !== "0" &&
                  (window.location.href += "#c" + w.subject_id),
                window.location.reload();
            };
          let fe = 0,
            ye = 0;
          if (_)
            for (const je of _.reports)
              je.time_resolved && !je.time_disputed && fe++,
                je.time_dispute_resolved && ye++;
          const ge =
              _ !== void 0 && !_.owner_dispute_time && _.resolved === B.S6,
            xe = _ !== void 0 && !!_.owner_dispute_time;
          return (0, e.jsx)(At.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: "Moderate subject",
            children: (0, e.jsx)(yt.eV, {
              bAllowFullSize: !0,
              title: "Moderate",
              "aria-describedby": "moderate",
              onCancel: a.onClose,
              className: ue().ModerateDialog,
              children: (0, e.jsx)(Ge.f3, {
                children: (0, e.jsx)(Ge.a3, {
                  children: (0, e.jsxs)("div", {
                    className: ue().ModerateDialogCtn,
                    children: [
                      oe === "main" &&
                        (0, e.jsxs)("div", {
                          className: ue().ModerateCtn,
                          children: [
                            (0, e.jsxs)("div", {
                              className: ue().ModerationData,
                              children: [
                                (0, e.jsxs)("div", {
                                  children: [
                                    (t =
                                      _ == null
                                        ? void 0
                                        : _.unresolved_report_count) != null
                                      ? t
                                      : 0,
                                    " unresolved / ",
                                    fe,
                                    " resolved / ",
                                    (s =
                                      _ == null
                                        ? void 0
                                        : _.unresolved_dispute_count) != null
                                      ? s
                                      : 0,
                                    " disputed / ",
                                    ye,
                                    " disputes resolved",
                                  ],
                                }),
                                (0, e.jsx)(Bt.V, { tabs: pe }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: ue().ModerationActionButtons,
                              children: [
                                (0, e.jsx)("button", {
                                  onClick: () => ce("sanction"),
                                  children: (0, e.jsxs)(j.s, {
                                    direction: "row",
                                    justify: "center",
                                    align: "center",
                                    children: [
                                      (0, e.jsx)(Ue.X, {
                                        className: ue().SanctionIcon,
                                      }),
                                      " Sanction",
                                    ],
                                  }),
                                }),
                                (0, e.jsx)(Tt, {
                                  subject: _,
                                  acquitMutation: M,
                                  onClose: de,
                                }),
                                (0, e.jsx)(Ct, {
                                  ...a,
                                  subject: _,
                                  onClose: de,
                                }),
                                (0, e.jsx)(d.fu, {
                                  disabled: !a.subject,
                                  onClick: () => ce("escalate"),
                                  children: l.T.Localize(
                                    "#moderation_escalation_escalate",
                                  ),
                                }),
                                !xe &&
                                  (0, e.jsx)("button", {
                                    disabled: !ge,
                                    onClick: () => ce("ownerdispute"),
                                    children: "Owner Dispute",
                                  }),
                                xe &&
                                  (0, e.jsxs)("span", {
                                    children: [
                                      (0, e.jsx)("a", {
                                        href: `${f.TS.HELP_BASE_URL}tickermaster/ticket/${_.owner_dispute_details}`,
                                        children: l.T.Localize(
                                          "#moderation_already_owner_disputed",
                                        ),
                                      }),
                                      (0, e.jsx)("button", {
                                        onClick: () =>
                                          ce("editownerdisputedetails"),
                                        className: ue().EditButton,
                                        children: (0, e.jsx)(Ue.ffu, {}),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      oe === "escalate" &&
                        (0, e.jsx)(T, {
                          subject: w,
                          onClose: () => ce("main"),
                        }),
                      oe === "sanction" &&
                        (0, e.jsx)(pt, {
                          subject: w,
                          clanSteamID: q,
                          authorSteamID: se,
                          sanctionMutation: A,
                          onSanction: I,
                          onCancel: () => ce("main"),
                        }),
                      oe === "ownerdispute" &&
                        (0, e.jsx)(Et, {
                          subject: w,
                          authorSteamId: se,
                          onClose: () => ce("main"),
                        }),
                      oe === "editownerdisputedetails" &&
                        (0, e.jsx)(Rt, {
                          subject: w,
                          onClose: () => ce("main"),
                          currentDetails:
                            (i =
                              _ == null ? void 0 : _.owner_dispute_details) !=
                            null
                              ? i
                              : "",
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }
        function Rt(a) {
          const { subject: t, onClose: s, currentDetails: i } = a,
            [A, M] = (0, E.useState)(i),
            _ = (0, m.wy)(t.subject_type, t.subject_group_id, t.subject_id, A),
            w = async () => {
              await _.mutateAsync(), s();
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("label", {
                children: [
                  l.T.Localize("#moderation_editownerdisputedetails_label"),
                  (0, e.jsx)("input", {
                    type: "text",
                    value: A,
                    onChange: (q) => M(q.target.value),
                  }),
                ],
              }),
              (0, e.jsxs)(j.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, e.jsx)(d.fu, {
                    onClick: w,
                    children: l.T.Localize(
                      "#moderation_editownerdisputedetails_save",
                    ),
                  }),
                  (0, e.jsx)(C.$, {
                    onClick: s,
                    loading: _.isPending,
                    children: l.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function Et(a) {
          const { authorSteamId: t, subject: s, onClose: i } = a,
            [A, M] = (0, E.useState)(""),
            _ = (0, m.y4)(
              t,
              s.subject_type,
              s.subject_group_id,
              s.subject_id,
              A,
            ),
            w = async () => {
              await _.mutateAsync(), i();
            };
          return (0, e.jsxs)(g.Z, {
            className: ue().OwnerDisputeCtn,
            children: [
              (0, e.jsx)("div", {
                children: l.T.Localize("#moderation_ownerdispute_description"),
              }),
              (0, e.jsxs)("label", {
                children: [
                  l.T.Localize("#moderation_ownerdispute_ticketmastercode"),
                  " ",
                  (0, e.jsx)("input", {
                    type: "text",
                    value: A,
                    onChange: (q) => M(q.target.value),
                  }),
                ],
              }),
              (0, e.jsxs)(j.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, e.jsx)(d.fu, {
                    onClick: w,
                    children: l.T.Localize("#moderation_ownerdispute_dispute"),
                  }),
                  (0, e.jsx)(d.fu, {
                    onClick: i,
                    children: l.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function Tt(a) {
          const { acquitMutation: t, onClose: s, subject: i } = a,
            A =
              i &&
              (i.unresolved_report_count > 0 || i.unresolved_dispute_count > 0),
            M = async () => {
              await t.mutateAsync(void 0), s();
            };
          return (0, e.jsx)("button", {
            onClick: M,
            disabled: !A,
            children: (0, e.jsxs)(j.s, {
              direction: "row",
              justify: "center",
              align: "center",
              children: [
                (0, e.jsx)(Ue.jlt, { className: ue().AcquitIcon }),
                " ",
                l.T.Localize("#moderation_actions_acquit"),
              ],
            }),
          });
        }
        function Ct(a) {
          const { subject: t, subjectKey: s, onClose: i } = a,
            A =
              t &&
              t.resolved !== B.z_ &&
              (t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0),
            M = (0, m.N8)(),
            _ = async () => {
              await M.mutateAsync({
                eSubjectType: s.subject_type,
                ulSubjectGroupID: s.subject_group_id,
                ulSubjectID: s.subject_id,
              }),
                i();
            };
          return (0, e.jsx)("button", {
            onClick: _,
            disabled: !A,
            children: l.T.Localize("#moderation_actions_sustain"),
          });
        }
      },
      76105: (Q, G, n) => {
        "use strict";
        n.d(G, { t: () => v });
        var e = n(72609);
        const l = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function v(B, F) {
          let m = "0000000000000000000000000000000000000000";
          typeof B == "string" ? (m = B) : B && (m = z(B) || m);
          let U = ".jpg";
          m === "0000000000000000000000000000000000000000" && (m = l),
            m.length == 44 && ((U = m.slice(-4)), (m = m.slice(0, 40)));
          let c = e.TS.AVATAR_BASE_URL;
          switch (
            (c ||
              ((c = e.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (c += m.slice(0, 2) + "/")),
            (c += m),
            F)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              c += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              c += "_full";
              break;
          }
          return (c += U), c;
        }
        function z(B) {
          return B
            ? (typeof B[Symbol.iterator] == "function"
                ? Array.from(B)
                : Object.values(B).filter((m) => typeof m == "number")
              )
                .map((m) => m.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
      },
      30986: (Q, G, n) => {
        "use strict";
        n.d(G, { Ul: () => u, wm: () => x });
        var e = n(7850);
        const l =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          v =
            n.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
          z =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
        var B = n(99412),
          F = n(90626);
        function m(D) {
          const { rgSources: S, onIncrementalError: W, alt: L, ...E } = D,
            [k, le] = (0, F.useState)(0),
            y = S[k];
          return (0, e.jsx)("img", {
            onError: (d) => {
              le((g) => g + 1), W == null || W(d, y, k);
            },
            alt: L,
            ...E,
            src: y,
          });
        }
        var U = n(72609),
          c = n(64238),
          p = n.n(c),
          f = n(16339),
          o = n(76105);
        function u(D) {
          const {
              avatarURL: S,
              size: W,
              statusStyle: L,
              statusPosition: E,
              className: k,
              children: le,
              isOnline: y,
              isInGame: d,
              isWatchingBroadcast: g,
              isAwayOrSnooze: j,
              alt: C,
            } = D,
            T = [];
          return (
            S && T.push(S),
            T.push(ae(W != null ? W : "Medium")),
            (0, e.jsxs)("div", {
              className: p()(
                f.AvatarHolder,
                {
                  [f.Offline]: !y,
                  [f.Online]: y,
                  [f.InGame]: d,
                  [f.WatchingBroadcast]: g,
                  [f.AwayOrSnooze]: j,
                },
                k,
              ),
              "data-size": W,
              "data-status-position": E,
              children: [
                (0, e.jsx)("div", { className: f.AvatarStatus, style: L }),
                (0, e.jsx)(m, {
                  className: p()(f.Avatar),
                  rgSources: T,
                  draggable: !1,
                  alt: C,
                }),
                le,
              ],
            })
          );
        }
        function h(D) {
          const {
            profileItem: S,
            className: W,
            bDisableAnimation: L,
            ...E
          } = D;
          if (!S || !S.image_small || S.image_small.length == 0) return null;
          let k = L ? S.image_large : S.image_small;
          return (
            k || (k = S.image_small),
            k.startsWith("https://") ||
              (k = Config.MEDIA_CDN_COMMUNITY_URL + "images/" + k),
            jsx("div", {
              className: classNames(styles.AvatarFrame, W),
              ...E,
              children: jsx("img", {
                className: styles.AvatarFrameImg,
                src: k,
                alt: "",
                role: "presentation",
              }),
            })
          );
        }
        function x(D) {
          var S, W, L, E, k, le, y;
          const {
            playerLinkDetails: d,
            animatedAvatar: g,
            avatarFrame: j,
            size: C,
            ...T
          } = D;
          let b = (0, o.t)(
            (S = d.public_data) == null ? void 0 : S.sha_digest_avatar,
            C,
          );
          return (
            (W = g == null ? void 0 : g.image_small) != null &&
              W.length &&
              (b = U.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + g.image_small),
            (0, e.jsx)(u, {
              avatarURL: b,
              size: C,
              isOnline:
                ((L = d.private_data) == null ? void 0 : L.persona_state) ===
                B.UXk,
              isInGame:
                ((E = d.private_data) == null ? void 0 : E.game_id) !== void 0,
              isWatchingBroadcast:
                ((k = d.private_data) == null
                  ? void 0
                  : k.watching_broadcast_accountid) !== void 0,
              isAwayOrSnooze:
                ((le = d.private_data) == null ? void 0 : le.persona_state) ===
                  B.PrD ||
                ((y = d.private_data) == null ? void 0 : y.persona_state) ===
                  B.vPz,
              ...T,
            })
          );
        }
        function P(D, S) {
          const [W, L] = useState(D !== "None");
          return (
            useEffect(() => {
              if ((L(D !== "None"), D === "None" || D === "Infinite")) return;
              let E;
              switch (D) {
                case "Short":
                  E = 2500;
                  break;
                case "Medium":
                  E = 5e3;
                  break;
                case "Long":
                  E = 1e4;
                  break;
              }
              const k = setTimeout(() => {
                L(S);
              }, E);
              return () => {
                clearTimeout(k);
              };
            }, [D, S]),
            W
          );
        }
        function O(D) {
          var S, W;
          const {
              loopDuration: L = "Infinite",
              bParentHovered: E,
              bLimitProfileFrameAnimationTime: k,
              className: le,
              ...y
            } = D,
            [d, g] = useState(!1),
            j = P(L, d),
            C = useProfileItemsEquipped(
              y.playerLinkDetails.public_data.steamid,
            );
          return jsx("div", {
            className: le,
            onMouseEnter: () => g(!0),
            onMouseLeave: () => g(!1),
            children: jsx(x, {
              ...y,
              animatedAvatar: j
                ? (S = C.data) == null
                  ? void 0
                  : S.animated_avatar
                : void 0,
              children: jsx(h, {
                profileItem: (W = C.data) == null ? void 0 : W.avatar_frame,
                bDisableAnimation: k && !j,
              }),
            }),
          });
        }
        function ae(D) {
          switch (D) {
            case "X-Small":
            case "Small":
              return (0, U.YJ)(l);
            case "Medium":
            case "MediumLarge":
              return (0, U.YJ)(z);
            case "Large":
            case "X-Large":
            case "FillArea":
              return (0, U.YJ)(v);
          }
        }
      },
      15252: (Q, G, n) => {
        "use strict";
        n.d(G, { Ae: () => f, EY: () => c, U6: () => p });
        var e = n(7850),
          l = n(1039),
          v = n(69289),
          z = n(8928),
          B = n(64238),
          F = n.n(B),
          m = n(65274),
          U = n.n(m);
        function c(o) {
          const { as: u = "span", ref: h, className: x, ...P } = o,
            O = u;
          return (0, e.jsx)(O, {
            ref: h,
            ...(0, v.mz)({ ...P, className: F()(m.Text, x) }, f),
          });
        }
        const p = [
            {
              prop: "weight",
              responsive: !0,
              className: m.TextWeight,
              cssProperty: (o) => ["--text-weight", `var(--font-weight-${o})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: m.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (o, u, h) => {
                var x;
                return [
                  "--text-color",
                  (0, v.To)(
                    o,
                    (x = (0, l.I)(u.contrast, h)) != null ? x : "body",
                  ),
                ];
              },
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (o, u, h) => {
                var x;
                return [
                  "--text-color",
                  (0, v.To)(
                    (x = (0, l.I)(u.color, h)) != null ? x : "text-body",
                    o,
                  ),
                ];
              },
            },
            { prop: "truncate", className: m.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: m.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: m.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          f = [
            ...p,
            ...z.L,
            {
              prop: "size",
              responsive: !0,
              className: (o) => m[`TextSize-${o}`],
            },
          ];
      },
      86336: (Q, G, n) => {
        "use strict";
        n.d(G, { W: () => f, Y: () => c });
        var e = n(7850),
          l = n(50122),
          v = n.n(l),
          z = n(15252),
          B = n(69289),
          F = n(24660),
          m = n(70182),
          U = n(3166);
        function c(o) {
          var u;
          const { underline: h = "auto", focusable: x, navProps: P, ...O } = o,
            ae = (0, U.Qn)(),
            D =
              (u = x != null ? x : P == null ? void 0 : P.focusable) != null
                ? u
                : !!O.href,
            S = (0, B.mz)({ ...O, underline: h, className: l.TextLink }, p);
          return ae && (D || P)
            ? (0, e.jsx)(F.Ii, { ...S, ...(P || {}), focusable: D })
            : (0, e.jsx)("a", { ...S });
        }
        const p = [
          ...z.Ae,
          { prop: "underline", className: (o) => l[`Underline-${o}`] },
        ];
        function f(o) {
          var u;
          const { underline: h = "auto", focusable: x, navProps: P, ...O } = o,
            ae = (0, U.Qn)(),
            D =
              (u = x != null ? x : P == null ? void 0 : P.focusable) != null
                ? u
                : !!O.onClick,
            S = (0, e.jsx)("span", {
              role: "button",
              ...(0, B.mz)(
                { ...O, underline: h, className: l.TextLinkButton },
                p,
              ),
            });
          return ae && (D || P)
            ? (0, e.jsx)(m.J, { ...(P || {}), focusable: D, children: S })
            : S;
        }
      },
      15860: (Q, G, n) => {
        "use strict";
        n.d(G, { L: () => F, c: () => B });
        var e = n(75916),
          l = n(76617),
          v = n(58632),
          z = n.n(v);
        function B(m, U) {
          return new (z())(
            async (c) => {
              const p = [...c],
                f = await e.xtC.GetPlayerLinkDetails(m, { steamids: p }),
                o = new Map();
              return (
                f
                  .Body()
                  .accounts()
                  .forEach((u) => {
                    const h = u.toObject();
                    o.set(h.public_data.steamid, h);
                  }),
                p.map((u) => {
                  var h;
                  return (h = o.get(u)) != null ? h : null;
                })
              );
            },
            { maxBatchSize: 100, cache: !1, ...U },
          );
        }
        function F(m) {
          return (0, l.V)("PlayerLinkDetails", () => B(m));
        }
      },
      85978: (Q, G, n) => {
        "use strict";
        n.d(G, { jn: () => p });
        var e = n(72609),
          l = n(68312),
          v = n(20117),
          z = n(88942),
          B = n(15860);
        const F = 1;
        function m(o) {
          var u, h, x, P, O;
          return (
            (u = o == null ? void 0 : o.private_data) == null ||
              delete u.account_name,
            (h = o == null ? void 0 : o.public_data) == null ||
              delete h.account_flags,
            (x = o == null ? void 0 : o.public_data) == null ||
              delete x.ban_expires_time,
            (P = o == null ? void 0 : o.public_data) == null ||
              delete P.privacy_state,
            ((O = o == null ? void 0 : o.public_data) == null
              ? void 0
              : O.profile_state) !== F &&
              (o == null || delete o.private_data),
            o
          );
        }
        function U(o) {
          return ["PlayerLinkDetails", o];
        }
        function c(o, u) {
          const h =
            typeof u == "number"
              ? v.b2.InitFromAccountID(u, e.TS.EUNIVERSE).ConvertTo64BitString()
              : u;
          return {
            queryKey: U(h),
            queryFn: async () => {
              if (h) {
                const x = await o.load(h);
                return m(x);
              }
              return null;
            },
            enabled: !!h,
          };
        }
        function p(o) {
          const u = (0, l.KV)(),
            h = (0, B.L)(u);
          return (0, z.I)(c(h, o));
        }
        function f(o, u) {
          u.forEach((h) => {
            var x;
            (x = h == null ? void 0 : h.public_data) != null &&
              x.steamid &&
              o.setQueryData(U(h.public_data.steamid), h);
          });
        }
      },
      46085: (Q, G, n) => {
        "use strict";
        n.d(G, {
          EC: () => k,
          KQ: () => L,
          Kt: () => P,
          N8: () => ae,
          c3: () => le,
          iW: () => f,
          kZ: () => h,
          lY: () => O,
          wy: () => S,
          y4: () => D,
        });
        var e = n(35038),
          l = n(16277),
          v = n(68312),
          z = n(88942),
          B = n(29385),
          F = n(61739),
          m = n(72604),
          U = n(98112);
        const c = "get_content_report_subject_group",
          p = "get_content_report_subject_audit_log";
        async function f(y, d, g, j) {
          return Promise.all([
            y.invalidateQueries({ queryKey: [c, d, g] }),
            y.invalidateQueries({ queryKey: [p, d, g, j] }),
          ]);
        }
        async function o(y, d, g) {
          return Promise.all([
            y.invalidateQueries({ queryKey: [c, d, g] }),
            y.invalidateQueries({ queryKey: [p, d, g] }),
          ]);
        }
        function u(y, d, g) {
          return {
            queryKey: [c, d, g],
            queryFn: async () => {
              const j = e.w.Init(l.ge);
              j.Body().set_subject_type(d), j.Body().set_subject_group_id(g);
              const C = await l.fL.GetContentReportSubjectGroup(y, j);
              if (!C.BSuccess())
                throw new Error(
                  "Failed in GetContentReportSubjectGroup, EResult: " +
                    C.GetEResult(),
                );
              return C.Body().toObject();
            },
          };
        }
        function h(y, d) {
          const g = (0, v.KV)();
          return (0, z.I)(u(g, y, d));
        }
        function x(y, d, g, j) {
          return {
            queryKey: [p, d, g, j],
            queryFn: async () => {
              if (d === void 0 || g === void 0 || j === void 0) return;
              const C = e.w.Init(l.Ru);
              return (
                C.Body().set_subject_type(d),
                C.Body().set_subject_group_id(g),
                C.Body().set_subject_id(j),
                (await l.fL.GetAuditLog(y, C)).Body().toObject()
              );
            },
          };
        }
        function P(y, d, g) {
          const j = (0, v.KV)();
          return (0, z.I)(x(j, y, d, g));
        }
        function O(y, d, g) {
          const j = (0, v.KV)(),
            C = (0, B.jE)();
          return (0, F.n)({
            mutationFn: async (T) => {
              const b = e.w.Init(l.u5);
              b.Body().set_subject_type(y),
                b.Body().set_subject_group_id(d),
                b.Body().set_subject_id(g),
                b.Body().set_required_level(T.eNewLevel),
                T.eReason && b.Body().set_reason(T.eReason),
                T.strNote && b.Body().set_note(T.strNote);
              const ne = await l.fL.EscalateSubject(j, b);
              if (ne.GetEResult() !== m.R)
                throw new Error(`Failed to escalate subject: ${ne.GetEMsg()}`);
            },
            onSuccess: async (T, b) => {
              await Promise.all([
                f(C, y, d, g),
                C.invalidateQueries({ queryKey: ["get_claimed"] }),
                C.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function ae() {
          const y = (0, v.KV)(),
            d = (0, B.jE)();
          return (0, F.n)({
            mutationFn: async (g) => {
              const j = e.w.Init(l.j);
              j.Body().set_subject_type(g.eSubjectType),
                j.Body().set_subject_group_id(g.ulSubjectGroupID),
                j.Body().set_subject_id(g.ulSubjectID);
              const C = await l.fL.SustainModeration(y, j);
            },
            onSuccess: async (g, j) => {
              await d.invalidateQueries({ queryKey: ["get_claimed"] }),
                await f(d, j.eSubjectType, j.ulSubjectGroupID, j.ulSubjectID);
            },
          });
        }
        function D(y, d, g, j, C) {
          const T = (0, v.KV)(),
            b = (0, B.jE)();
          return (0, F.n)({
            mutationFn: async () => {
              const ne = e.w.Init(l.ZV);
              ne.Body().set_steamid(y),
                ne.Body().set_subject_type(d),
                ne.Body().set_subject_group_id(g),
                ne.Body().set_subject_id(j),
                ne.Body().set_details(C);
              const K = await l.fL.DisputeModerationForSubject(T, ne);
            },
            onSuccess: async () => {
              await f(b, d, g, j);
            },
          });
        }
        function S(y, d, g, j) {
          const C = (0, B.jE)(),
            T = (0, v.KV)();
          return (0, F.n)({
            mutationFn: async () => {
              const b = e.w.Init(l.zF);
              b.Body().set_subject_type(y),
                b.Body().set_subject_group_id(d),
                b.Body().set_subject_id(g),
                b.Body().set_owner_dispute_details(j);
              const ne = await l.fL.UpdateSubject(T, b);
              if (!ne.BSuccess()) throw new Error("EResult " + ne.GetEResult());
            },
            onSuccess: async () => {
              await f(C, y, d, g);
            },
          });
        }
        function W(y, d) {
          return {
            queryKey: ["reporterstats", d],
            queryFn: async () => {
              const g = e.w.Init(l.KD);
              g.Body().set_steamid(d);
              const j = await l.fL.GetReporterStats(y, g);
              if (!j.BSuccess()) throw new Error("EResult " + j.GetEResult());
              return j.Body().toObject();
            },
          };
        }
        function L(y) {
          const d = (0, v.KV)();
          return (0, z.I)(W(d, y));
        }
        function E(y, d) {
          const g = useActiveServiceTransport(),
            j = useQueryClient();
          return useMutation({
            mutationFn: async (C) => {
              const T = CProtoBufMsg.Init(
                CContentModeration_UpdateSubjectGroup_Request,
              );
              T.Body().set_subject_type(y),
                T.Body().set_subject_group_id(d),
                T.Body().set_new_subject_group_id(C.ulNewSubjectGroupID),
                T.Body().set_additional_subject_data(
                  C.rgNewAdditionalSubjectData,
                );
              const b = await ContentModerationService.UpdateSubjectGroup(g, T);
              if (!T.BSuccess())
                throw new Error(
                  "UpdateSubjectGroup returned EResult " + b.GetEResult(),
                );
            },
            onSuccess: async (C, T) => {
              await o(j, y, d), await o(j, y, T.ulNewSubjectGroupID);
            },
          });
        }
        function k(y, d, g) {
          const j = (0, v.KV)(),
            C = (0, B.jE)();
          return (0, F.n)({
            mutationFn: async (T) => {
              const b = e.w.Init(U.Er);
              b.Body().set_steamid(y),
                b.Body().set_comment_thread_id(d),
                b.Body().set_gidcomment(g),
                b.Body().set_reason(T.reason),
                b.Body().set_note(T.message);
              for (const K of T.sanctions) {
                const ve = new U.u6();
                ve.set_sanction(K.sanction),
                  K.days && ve.set_days(K.days),
                  b.Body().add_sanctions(ve);
              }
              const ne = await U.BE.SanctionComment(j, b);
              if (!ne.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${ne.GetEResult()} (${ne.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await C.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function le(y, d, g) {
          const j = (0, v.KV)(),
            C = (0, B.jE)();
          return (0, F.n)({
            mutationFn: async () => {
              const T = e.w.Init(U.RX);
              T.Body().set_steamid(y),
                T.Body().set_comment_thread_id(d),
                T.Body().set_gidcomment(g),
                T.Body().set_report_action(U.du.Pn),
                T.Body().set_resolve(!0),
                await U.Vi.UpdateCommentReportState(j, T);
            },
            onSuccess: async () => {
              await C.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      76617: (Q, G, n) => {
        "use strict";
        n.d(G, { V: () => U });
        function e(c) {
          return Object.prototype.toString.call(c) === "[object Object]";
        }
        function l(c) {
          if (!e(c)) return !1;
          const p = c.constructor;
          if (typeof p == "undefined") return !0;
          const f = p.prototype;
          return !(
            !e(f) || !Object.prototype.hasOwnProperty.call(f, "isPrototypeOf")
          );
        }
        function v(...c) {
          return JSON.stringify(c, (p, f) => {
            if (l(f)) {
              const o = {};
              return (
                Object.keys(f)
                  .sort()
                  .forEach((u) => {
                    o[u] = f[u];
                  }),
                o
              );
            }
            return f;
          });
        }
        var z = n(90626),
          B = n(7850);
        const F = (0, z.createContext)({ instances: {}, factories: {} });
        function m(c) {
          const { name: p, fnFactory: f, children: o } = c,
            u = React.useContext(F),
            [h] = useState({}),
            x = useMemo(
              () => ({
                instances: h,
                factories: { ...u.factories, [p]: f },
                parent: u,
              }),
              [h, p, u],
            );
          return jsx(F.Provider, { value: x, children: o });
        }
        function U(c, p) {
          var f;
          const o = (0, z.useContext)(F),
            u = typeof c == "string" ? c : v(...c);
          let h = o;
          for (; h; ) {
            if (u in h.instances) return h.instances[u];
            if (u in h.factories) break;
            h = h.parent;
          }
          const P = (
            (f = h == null ? void 0 : h.factories[u]) != null ? f : p
          )();
          return ((h != null ? h : o).instances[u] = P), P;
        }
      },
      179: (Q, G, n) => {
        "use strict";
        n.d(G, {
          Bm: () => z,
          QD: () => F,
          f3: () => v,
          iV: () => U,
          ip: () => m,
          le: () => B,
        });
        var e = n(90626),
          l = n(92757);
        function v(c, p) {
          let f;
          if (typeof c == "string") f = c;
          else if ("location" in c) f = c.location.search;
          else if ("search" in c) f = c.search;
          else return;
          const o = new URLSearchParams(f.substring(1));
          if (o.has(p)) {
            const u = o.getAll(p);
            return u[u.length - 1];
          }
        }
        function z(c, p, f, o = !1) {
          const u = new URLSearchParams(c.location.search.substring(1));
          if (f != null && f != null) {
            if (u.get(p) == f) return;
            u.set(p, f);
          } else {
            if (!u.has(p)) return;
            u.delete(p);
          }
          o
            ? c.replace(`?${u.toString()}`, { ...c.location.state })
            : c.push(`?${u.toString()}`);
        }
        function B(c, p, f) {
          z(c, p, f, !0);
        }
        function F(c, p) {
          const f = (0, l.W6)(),
            o = (0, l.zy)(),
            u = (0, e.useMemo)(() => {
              const x = v(o.search, c);
              return x != null && x != null
                ? p != null && p != null
                  ? typeof p == "boolean"
                    ? p.constructor(x !== "false")
                    : p.constructor(x)
                  : x
                : p;
            }, [o.search, c, p]),
            h = (0, e.useCallback)(
              (x, P = !1) => {
                z(f, c, x != null && x != null ? String(x) : null, P);
              },
              [f, c],
            );
          return [u, h];
        }
        function m(c, p, f = !1) {
          const o = new URLSearchParams(c.location.search.substring(1));
          for (const u in p)
            if (p.hasOwnProperty(u)) {
              const h = p[u];
              o.delete(u), h != null && h != null && o.append(u, h);
            }
          f
            ? c.replace(`?${o.toString()}`, { ...c.location.state })
            : c.push(`?${o.toString()}`);
        }
        function U(c, p) {
          m(c, p, !0);
        }
      },
      21418: (Q, G, n) => {
        "use strict";
        n.d(G, { V: () => u, a: () => h });
        var e = n(7850),
          l = n(90626),
          v = n(36707),
          z = n(18210),
          B = n(179),
          F = n(1990),
          m = n.n(F),
          U = n(71421),
          c = n(53107),
          p = n(19298),
          f = n(72976),
          o = n(92757);
        function u(P) {
          const {
              tabs: O,
              bDisableRouting: ae,
              startingTab: D,
              controlledTab: S,
              OnTabChanged: W,
              classNameCtn: L,
              classNameTab: E,
              classNameTabContent: k,
              preferredFocus: le,
              bVerticalTabs: y,
              bSticky: d,
              bChecklistMode: g,
            } = P,
            j = (0, o.zy)(),
            C = (0, o.W6)(),
            [T, b] = (0, l.useState)(() => {
              var H;
              return (
                D ||
                (!ae && (0, B.f3)(j, "tab") && (H = (0, B.f3)(j, "tab")) != null
                  ? H
                  : "")
              );
            });
          (0, l.useEffect)(() => {
            if (!P.bDisableRouting && j) {
              const H = (0, B.f3)(j, "tab");
              H && b(H);
            }
          }, [j, j.key, P.bDisableRouting, b]);
          const ne = l.useCallback(
              (H) => {
                b(H.key),
                  ae || (0, B.Bm)(C, "tab", H.key),
                  W == null || W(H.key),
                  H.onClick && H.onClick(H);
              },
              [ae, C, W],
            ),
            K = O.filter((H) => !H.hidden);
          if (!K.length) return null;
          const ve = S != null ? S : T,
            me = K.find((H) => H.key === ve) || K[0],
            he = le ? (D != null ? D : K[0].key) : void 0,
            Ae = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(p.Z, {
                  className: (0, v.A)(
                    m().GraphicalAssetsTabs,
                    y && m().GraphicalAssetsTabsVertical,
                    g && m().ChecklistMode,
                    d && m().Sticky,
                    L,
                  ),
                  navEntryPreferPosition: le
                    ? f.iU.PREFERRED_CHILD
                    : f.iU.FIRST,
                  children: K.map((H, Fe) =>
                    (0, e.jsx)(
                      x,
                      {
                        tab: H,
                        OnTabClick: ne,
                        classNameTab: E,
                        active: H.key === me.key,
                        preferredFocus: he === H.key,
                      },
                      H.key,
                    ),
                  ),
                }),
                me && (0, e.jsx)(p.Z, { className: k, children: me.contents }),
              ],
            });
          return y
            ? (0, e.jsx)(p.Z, {
                className: (0, v.A)(m().GraphicalAssetsTabsLayoutVertical),
                children: Ae,
              })
            : Ae;
        }
        function h(P) {
          const {
            statusType: O = "success",
            bShowStatusBox: ae,
            children: D,
          } = P;
          let S = "";
          return (
            O === "success"
              ? (S = m().StatusSuccess)
              : O === "danger"
                ? (S = m().StatusDanger)
                : O === "caution"
                  ? (S = m().StatusCaution)
                  : O === "info"
                    ? (S = m().StatusInfo)
                    : O === "incomplete" && (S = m().StatusIncomplete),
            (0, e.jsx)("div", {
              className: (0, v.A)(
                m().GraphicalAssetStatus,
                S,
                ae ? m().checklistBox : "",
              ),
              children: D,
            })
          );
        }
        function x(P) {
          const {
            tab: O,
            OnTabClick: ae,
            classNameTab: D,
            active: S,
            preferredFocus: W,
          } = P;
          return (0, e.jsx)(c.e7, {
            condition: !!(O.statusToolTip || O.tooltip),
            wrap: (L) =>
              (0, e.jsx)(U.he, {
                toolTipContent: O.statusToolTip || O.tooltip,
                children: L,
              }),
            children: (0, e.jsxs)(p.Z, {
              className: (0, v.A)(
                m().GraphicalAssetsTab,
                S && m().Active,
                S && "ActiveTab",
                D,
              ),
              onActivate: () => ae(O),
              preferredFocus: W,
              children: [
                !!O.vo_warning &&
                  (0, e.jsx)(U.he, {
                    toolTipContent: O.vo_warning,
                    children: (0, e.jsx)("div", {
                      className: m().VOWarning,
                      children: (0, z.we)("#EventEditor_VOWarning"),
                    }),
                  }),
                O.status,
                O.name,
              ],
            }),
          });
        }
      },
      84670: (Q) => {
        Q.exports = {
          ModerateDialogCtn: "_1JFB_3Ek9uIS-ml-7C1V3",
          Flag: "_24i0Jj7bXsdJSJdDY0a4e9",
          ModerateCtn: "_2f8lQGhpOdBN1nDokNV-_v",
          ModerationActionButtons: "_3vIg4OosURoc-guanZbMot",
          OwnerDisputeCtn: "_3o0wdHIoLEIVk2tOl2OyB1",
          EditButton: "MtttYfwYqnHlqj832CGXL",
          ValveOnly: "_1mtaTCIJfR1JZhSZpaPzUo",
          SupervisorOnly: "_2dWYzwO95xQRO7W66aSsH7",
          AcquitIcon: "HA6Hw6Hc332GoPbma_9sZ",
          SanctionIcon: "_3WS1gYqe89ISF4mi7dvtBU",
        };
      },
      16339: (Q) => {
        Q.exports = {
          AvatarHolder: "_1_sHcxv9rQdANehiviVZR4",
          Avatar: "_3qaudpkfSKoxlwfA-deQLX",
          Offline: "_2G4b7NcQECHtFR_D28hqQG",
          Online: "_2-QtgoeBaZrzBPhoKaud5x",
          AvatarStatus: "_3pbKzT087jaL2EeQO1qsaR",
          InGame: "_2K3Q_r66P06VLgIPo-DYsv",
          AwayOrSnooze: "_3VrE4NMh7NJt0aKikAbOA3",
          WatchingBroadcast: "FhCJhs583_Ocqm0UT9y_d",
          AvatarFrame: "_3ZPXpi9X8K-n17XiGgTMdU",
          AvatarFrameImg: "Uk4DBWxeyo7Tn8SAl8afe",
        };
      },
      65274: (Q) => {
        Q.exports = {
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
      50122: (Q) => {
        Q.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      98580: (Q) => {
        Q.exports = {
          BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
          SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
          OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
          MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
          ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
        };
      },
      30770: (Q) => {
        Q.exports = {
          EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
          BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
          EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
          ReasonTextArea: "_2Y0347paZ_xn2vI7jgBpkJ",
        };
      },
      59884: (Q) => {
        Q.exports = {
          BlockList: "F2uRfcfN3gZAD8WCNOVq6",
          BlockListItem: "eti_An9vsSQWyfrrZgqZO",
          DefaultItem: "zvsH8nLNLnBES_qChiT1v",
        };
      },
      20609: (Q) => {
        Q.exports = { ContentReportsTable: "vOw0zIvYhKvicImwO2-XL" };
      },
      1990: (Q) => {
        Q.exports = {
          narrowWidth: "500px",
          GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
          GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
          Active: "_8XjrTFzaSA8ubHvHCu44L",
          Sticky: "_3dlxz6KBJpvmA-qsVAzxs8",
          GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
          GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
          ChecklistMode: "_3blAkLFfSQrJjGklUKOP7e",
          GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
          checklistBox: "_1idkU7IA8dDPOIbsU-dRkJ",
          StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
          VOWarning: "_3LaJynPDFfccGWUEtdltlt",
          StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
          StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
          StatusInfo: "_38gm-PDPbi6lw1-aiH81HR",
          StatusIncomplete: "ZGxYVjsUSjHLRHIWkx4-L",
        };
      },
    },
  ]);
})();
