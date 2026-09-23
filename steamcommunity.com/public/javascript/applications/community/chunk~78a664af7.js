/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8010],
  {
    84670: (e) => {
      e.exports = {
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
    16339: (e) => {
      e.exports = {
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
    98580: (e) => {
      e.exports = {
        BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
        SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
        OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
        QuickReasons: "_1VdNqwseupCqI68H-YwwZO",
        MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
        ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
      };
    },
    30770: (e) => {
      e.exports = {
        EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
        BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
        EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
        ReasonTextArea: "_2Y0347paZ_xn2vI7jgBpkJ",
      };
    },
    59884: (e) => {
      e.exports = {
        BlockList: "F2uRfcfN3gZAD8WCNOVq6",
        BlockListItem: "eti_An9vsSQWyfrrZgqZO",
        DefaultItem: "zvsH8nLNLnBES_qChiT1v",
      };
    },
    20609: (e) => {
      e.exports = { ContentReportsTable: "vOw0zIvYhKvicImwO2-XL" };
    },
    1990: (e) => {
      e.exports = {
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
    25215: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => Ae });
      var r = n(7850),
        i = n(28491),
        s = n(83392),
        a = n(48474),
        o = n(45699),
        l = n(76217),
        c = n(43224),
        d = n(63987),
        u = n(55184),
        p = n(90314),
        m = n(4340),
        h = n(90182),
        g = n(22797),
        _ = n(18519),
        j = n(39832),
        v = n(78327),
        y = n(98682),
        B = n(20609),
        x = n.n(B);
      function A(e) {
        const { reportedContentID: t } = e;
        return t ? (0, r.jsx)(b, { ...e }) : (0, r.jsx)(f, {});
      }
      function f(e) {
        return (0, r.jsx)("div", {
          children: (0, r.jsxs)("table", {
            children: [
              (0, r.jsx)("thead", {
                children: (0, r.jsxs)("tr", {
                  children: [
                    (0, r.jsx)("th", { children: "Date" }),
                    (0, r.jsx)("th", { children: "Actor" }),
                    (0, r.jsx)("th", { children: "Action" }),
                    (0, r.jsx)("th", { children: "Details" }),
                  ],
                }),
              }),
              (0, r.jsx)("tbody", {
                children: (0, r.jsx)("tr", {
                  children: (0, r.jsx)("td", {
                    colSpan: 4,
                    children: c.T.Localize("#subjectauditlog_noentries"),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function b(e) {
        var t, n, i, s, a;
        const o = (0, h.Kt)(e.reportedContentID),
          l =
            null !==
              (i =
                null ===
                  (n =
                    null === (t = null == o ? void 0 : o.data) || void 0 === t
                      ? void 0
                      : t.entries) || void 0 === n
                  ? void 0
                  : n.length) && void 0 !== i
              ? i
              : 0,
          d =
            null !==
              (a =
                null === (s = o.data) || void 0 === s ? void 0 : s.entries) &&
            void 0 !== a
              ? a
              : [];
        return (
          d.sort((e, t) => t.timestamp - e.timestamp),
          (0, r.jsx)("div", {
            children:
              l > 0 &&
              (0, r.jsxs)("table", {
                children: [
                  (0, r.jsx)("thead", {
                    children: (0, r.jsxs)("tr", {
                      children: [
                        (0, r.jsx)("th", { children: "Date" }),
                        (0, r.jsx)("th", { children: "Actor" }),
                        (0, r.jsx)("th", { children: "Action" }),
                        (0, r.jsx)("th", { children: "Details" }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)("tbody", {
                    children: [
                      void 0 === o &&
                        (0, r.jsx)("tr", {
                          children: (0, r.jsx)("td", {
                            colSpan: 4,
                            children: c.T.Localize(
                              "#subjectauditlog_noentries",
                            ),
                          }),
                        }),
                      o &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            o.isLoading &&
                              (0, r.jsx)("tr", {
                                children: (0, r.jsx)("td", {
                                  colSpan: 4,
                                  children: (0, r.jsx)(g.t, {}),
                                }),
                              }),
                            o.isError &&
                              (0, r.jsx)("tr", {
                                children: (0, r.jsx)("td", {
                                  colSpan: 4,
                                  children: c.T.Localize(
                                    "#subjectauditlog_error",
                                  ),
                                }),
                              }),
                            o.isSuccess &&
                              0 === l &&
                              (0, r.jsx)("tr", {
                                children: (0, r.jsx)("td", {
                                  colSpan: 4,
                                  children: c.T.Localize(
                                    "#subjectauditlog_noentries",
                                  ),
                                }),
                              }),
                            o.isSuccess &&
                              l > 0 &&
                              d.map((e) =>
                                (0, r.jsx)(w, { entry: e }, e.timestamp),
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
      function w(e) {
        var t, n;
        const { entry: i } = e,
          s = (0, _.jn)(i.actor_steamid);
        return s.isSuccess && s.data
          ? (0, r.jsxs)("tr", {
              children: [
                (0, r.jsx)("td", { children: (0, j.P0)(i.timestamp, !1, "") }),
                (0, r.jsxs)("td", {
                  children: [
                    (0, r.jsx)("a", {
                      href: `${v.TS.COMMUNITY_BASE_URL}profiles/${i.actor_steamid}`,
                      children: (0, r.jsx)("span", {
                        children:
                          null ===
                            (n =
                              null === (t = s.data) || void 0 === t
                                ? void 0
                                : t.public_data) || void 0 === n
                            ? void 0
                            : n.persona_name,
                      }),
                    }),
                    " ",
                    "(",
                    (0, r.jsx)("a", {
                      href: `/moderation/activity/${i.actor_steamid}`,
                      children: "activity",
                    }),
                    ")",
                  ],
                }),
                (0, r.jsxs)("td", {
                  children: [
                    (0, d.fg)(i.action),
                    i.automated_action &&
                      (0, r.jsx)(r.Fragment, { children: " (Automated)" }),
                  ],
                }),
                (0, r.jsx)("td", {
                  children: (0, r.jsx)(S, {
                    eAction: i.action,
                    jsonData: i.additional_json_data,
                  }),
                }),
              ],
            })
          : null;
      }
      function S(e) {
        const { eAction: t, jsonData: n } = e;
        let i = {};
        switch ((n && (i = JSON.parse(n)), t)) {
          case u.Hd:
            return (0, r.jsxs)(r.Fragment, {
              children: ["Report ID: ", i.report_id],
            });
          case u._F:
            return (0, r.jsxs)(r.Fragment, {
              children: [
                "Reason: ",
                (0, d.Jt)(i.reason),
                i.resolution !== p.CC &&
                  i.resolution !== p.S6 &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("br", {}),
                      "Resolution: ",
                      (0, d.l)(i.resolution),
                    ],
                  }),
                i.sanctions &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("br", {}),
                      "Sanctions: ",
                      i.sanctions.map(d.cB).join(", "),
                    ],
                  }),
              ],
            });
          case u.Nu:
            return (0, r.jsxs)(r.Fragment, {
              children: ["Report ID: ", i.report_id],
            });
          case u.XP:
            return (0, r.jsx)(r.Fragment, {
              children: JSON.stringify(i, null, "\t"),
            });
          case u.YI:
            return (0, r.jsxs)(r.Fragment, {
              children: ["New level: ", (0, d.ar)(i.level)],
            });
          case u._7:
            return (0, r.jsxs)(r.Fragment, {
              children: ["Report ID: ", i.report_id],
            });
          default:
            return null;
        }
      }
      function C(e) {
        var t;
        const { subject: n } = e,
          i = n && n.reports && n.reports.length > 0;
        return (0, r.jsx)("table", {
          className: x().ContentReportsTable,
          children: (0, r.jsxs)("tbody", {
            children: [
              !i &&
                (0, r.jsx)("tr", {
                  children: (0, r.jsx)("td", {
                    colSpan: 4,
                    children: c.T.Localize("#contentreportslist_noreports"),
                  }),
                }),
              i &&
                (null === (t = n.reports) || void 0 === t
                  ? void 0
                  : t.map((e) => (0, r.jsx)(M, { report: e }, e.report_id))),
            ],
          }),
        });
      }
      function M(e) {
        var t, n;
        const { report: i } = e,
          s = (0, _.jn)(i.reporter_steamid);
        if (!s.isSuccess) return null;
        if (!(null === (t = s.data) || void 0 === t ? void 0 : t.public_data))
          return null;
        const a = !!i.time_disputed && i.dispute_resolved === p.z_,
          o =
            i.resolved !== p.z_ &&
            (!i.time_disputed || i.dispute_resolved !== p.z_),
          l = 0 !== i.time_dispute_resolved,
          u = i.resolved === p.CC;
        return (0, r.jsxs)("tr", {
          children: [
            (0, r.jsx)("td", { children: (0, j.P0)(i.time_reported, !1, "") }),
            (0, r.jsxs)("td", {
              children: [
                (0, r.jsx)("a", {
                  href: `${v.TS.COMMUNITY_BASE_URL}profiles/${i.reporter_steamid}`,
                  children: (0, r.jsx)(y.wm, {
                    playerLinkDetails: s.data,
                    size: "X-Small",
                    alt: "Reporter",
                  }),
                }),
                " ",
                (0, r.jsx)("a", {
                  href: `${v.TS.COMMUNITY_BASE_URL}profiles/${i.reporter_steamid}`,
                  children: (0, r.jsx)("span", {
                    children:
                      null === (n = s.data.public_data) || void 0 === n
                        ? void 0
                        : n.persona_name,
                  }),
                }),
              ],
            }),
            (0, r.jsx)("td", {
              children:
                i.report_reason !== m.OQ &&
                (0, r.jsx)("span", { children: (0, d.Jt)(i.report_reason) }),
            }),
            (0, r.jsxs)("td", {
              children: [
                u &&
                  !a &&
                  !l &&
                  (0, r.jsx)("span", {
                    children: c.T.Localize(
                      "#contentreportslist_acquitted_at",
                      (0, j.P0)(i.time_resolved, !1, ""),
                    ),
                  }),
                o &&
                  !u &&
                  !a &&
                  !l &&
                  (0, r.jsx)("span", {
                    children: c.T.Localize(
                      "#contentreportslist_resolved_at",
                      (0, j.P0)(i.time_resolved, !1, ""),
                    ),
                  }),
                a &&
                  !l &&
                  (0, r.jsx)("span", {
                    children: c.T.Localize(
                      "#contentreportslist_disputed_at",
                      (0, j.P0)(i.time_disputed, !1, ""),
                    ),
                  }),
                l &&
                  (0, r.jsx)("span", {
                    children: c.T.Localize(
                      "#contentreportslist_dispute_resolved_at",
                      (0, j.P0)(i.time_dispute_resolved, !1, ""),
                    ),
                  }),
                !a && (0, r.jsx)("span", { children: i.report_text }),
                a &&
                  (0, r.jsxs)("span", {
                    children: [
                      (0, r.jsx)("br", {}),
                      "Original: ",
                      i.report_text,
                      (0, r.jsx)("br", {}),
                      "Dispute: ",
                      i.dispute_details,
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var T = n(15993),
        R = n(90626),
        k = n(65843),
        E = n(30770),
        z = n.n(E);
      function I(e) {
        const { reportedContentID: t, onClose: n } = e,
          [i, d] = (0, R.useState)(T.PV),
          u = (0, h.lY)(t),
          p = (0, R.useRef)(null);
        return (0, r.jsxs)(l.Z, {
          className: z().EscalateSubjectDialogCtn,
          children: [
            (0, r.jsx)(l.Z, {
              children: c.T.Localize("#moderation_escalation_description"),
            }),
            (0, r.jsxs)("select", {
              className: z().EscalationLevelSelect,
              value: i,
              onChange: (e) => d(parseInt(e.target.value)),
              children: [
                (0, r.jsx)("option", {
                  value: T.HH,
                  children: c.T.Localize("#moderation_escalationlevel_any"),
                }),
                (0, r.jsx)("option", {
                  value: T.lp,
                  children: c.T.Localize(
                    "#moderation_escalationlevel_supervisor",
                  ),
                }),
                (0, r.jsx)("option", {
                  value: T.PV,
                  children: c.T.Localize("#moderation_escalationlevel_valve"),
                }),
              ],
            }),
            (0, r.jsx)("label", {
              children: c.T.Localize("#moderation_escalation_escalationnote"),
            }),
            (0, r.jsx)(o.dO, { className: z().ReasonTextArea, ref: p }),
            (0, r.jsxs)(s.s, {
              direction: "row",
              justify: "end",
              children: [
                (0, r.jsx)(o.fu, {
                  onClick: n,
                  children: k.u.Localize("#moderation_cancel"),
                }),
                (0, r.jsx)(a.$, {
                  onClick: async () => {
                    var e;
                    const t =
                      null === (e = p.current) || void 0 === e
                        ? void 0
                        : e.value;
                    await u.mutateAsync({ eNewLevel: i, strNote: t }), n();
                  },
                  loading: u.isPending,
                  children: c.T.Localize("#moderation_escalation_escalate"),
                }),
              ],
            }),
          ],
        });
      }
      var U,
        L,
        F = n(22837),
        q = n(81393),
        Q = n(37085),
        D = n(56545),
        O = n(34410),
        N = n(64115),
        W = n(80613),
        P = n.n(W),
        K = n(89068);
      class V extends W.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.quicktext_id || K.Sg(V.M()),
            W.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  requires_update: {
                    n: 2,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                  title: { n: 3, br: K.qM.readString, bw: K.gp.writeString },
                  hidden: { n: 4, br: K.qM.readBool, bw: K.gp.writeBool },
                  approved: { n: 5, br: K.qM.readBool, bw: K.gp.writeBool },
                  help_request_types: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: K.qM.readUint32,
                    pbr: K.qM.readPackedUint32,
                    bw: K.gp.writeRepeatedUint32,
                  },
                  content: { n: 7, c: G },
                  button_text: {
                    n: 8,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  replacement: { n: 9, br: K.qM.readBool, bw: K.gp.writeBool },
                  payment_methods: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: K.qM.readUint32,
                    pbr: K.qM.readPackedUint32,
                    bw: K.gp.writeRepeatedUint32,
                  },
                  appids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: K.qM.readUint32,
                    pbr: K.qM.readPackedUint32,
                    bw: K.gp.writeRepeatedUint32,
                  },
                  escalation_level: {
                    n: 12,
                    br: K.qM.readEnum,
                    bw: K.gp.writeEnum,
                  },
                  partner_only: {
                    n: 13,
                    br: K.qM.readBool,
                    bw: K.gp.writeBool,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = K.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (P().BinaryReader)(e),
            n = new V();
          return V.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (P().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (P().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickText";
        }
      }
      class G extends W.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.content || K.Sg(G.M()),
            W.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  content: { n: 1, br: K.qM.readString, bw: K.gp.writeString },
                  major_revision: {
                    n: 2,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  minor_revision: {
                    n: 3,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  author: { n: 4, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                  last_update: {
                    n: 5,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  language: { n: 6, br: K.qM.readInt32, bw: K.gp.writeInt32 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = K.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (P().BinaryReader)(e),
            n = new G();
          return G.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (P().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (P().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickTextContent";
        }
      }
      class H extends W.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.quicktext_id || K.Sg(H.M()),
            W.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: K.qM.readUint32,
                    bw: K.gp.writeUint32,
                  },
                  language: { n: 2, br: K.qM.readString, bw: K.gp.writeString },
                  from_sql: { n: 3, br: K.qM.readBool, bw: K.gp.writeBool },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = K.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (P().BinaryReader)(e),
            n = new H();
          return H.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (P().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (P().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Request";
        }
      }
      class J extends W.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.quicktext || K.Sg(J.M()),
            W.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  quicktext: { n: 1, c: V },
                  english_reference: { n: 2, c: G },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = K.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (P().BinaryReader)(e),
            n = new J();
          return J.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (P().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new (P().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Response";
        }
      }
      class Z extends W.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.appid || K.Sg(Z.M()),
            W.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  appid: { n: 1, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                  log_type: { n: 2, br: K.qM.readString, bw: K.gp.writeString },
                  version_string: {
                    n: 3,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  log_contents: {
                    n: 4,
                    br: K.qM.readString,
                    bw: K.gp.writeString,
                  },
                  request_id: {
                    n: 5,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = K.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (P().BinaryReader)(e),
            n = new Z();
          return Z.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (P().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (P().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Request";
        }
      }
      class X extends W.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.id || K.Sg(X.M()),
            W.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  id: {
                    n: 1,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = K.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(X.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (P().BinaryReader)(e),
            n = new X();
          return X.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (P().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new (P().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Response";
        }
      }
      class Y extends W.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.appid || K.Sg(Y.M()),
            W.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  appid: { n: 1, br: K.qM.readUint32, bw: K.gp.writeUint32 },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = K.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (P().BinaryReader)(e),
            n = new Y();
          return Y.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (P().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (P().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Request";
        }
      }
      class $ extends W.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.request_id || K.Sg($.M()),
            W.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  request_id: {
                    n: 1,
                    br: K.qM.readUint64String,
                    bw: K.gp.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = K.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return K.BT($.M(), e, t);
        }
        static fromObject(e) {
          return K.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (P().BinaryReader)(e),
            n = new $();
          return $.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return K.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (P().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          K.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (P().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Response";
        }
      }
      !(function (e) {
        e.GetQuickText = function (e, t, n) {
          return e.SendMsg(
            "SupportAgents.GetQuickText#1",
            (0, D.I8)(H, t, n),
            J,
            { bConstMethod: !0, ePrivilege: 5 },
          );
        };
      })(U || (U = {})),
        (function (e) {
          (e.UploadUserApplicationLog = function (e, t, n) {
            return e.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, D.I8)(Z, t, n),
              X,
              { ePrivilege: 1 },
            );
          }),
            (e.GetApplicationLogDemand = function (e, t, n) {
              return e.SendMsg(
                "HelpRequestLogs.GetApplicationLogDemand#1",
                (0, D.I8)(Y, t, n),
                $,
                { ePrivilege: 1 },
              );
            });
        })(L || (L = {}));
      var ee = n(23809),
        te = n(55388),
        ne = n(88942),
        re = n(4869),
        ie = n(52038),
        se = n(98580),
        ae = n.n(se),
        oe = n(59884),
        le = n.n(oe);
      function ce(e) {
        const [t, n] = (0, R.useState)(null),
          [i, s] = (0, R.useState)([]),
          [a, c] = (0, R.useState)(!1),
          [u, p] = (0, R.useState)(!1);
        let m = e.reasons;
        for (const e of i) m = m[e].children;
        const h = null !== t ? (0, d.V$)(t) : null,
          g = null !== t ? (0, d.GA)(t) : null,
          _ = () => {
            null !== t
              ? n(null)
              : 0 === i.length
                ? e.onSelect(null)
                : s(i.slice(0, -1));
          };
        return (0, r.jsxs)("div", {
          children: [
            null === t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    className: le().BlockList,
                    children: m.map((t, a) => {
                      const c = () => {
                        if ((0, d.Ju)(t)) {
                          const e = [...i];
                          e.push(a), s(e);
                        } else {
                          if (!(0, d.X$)(t))
                            throw new Error("This should be unreachable.");
                          (0, d.V$)(t.value) || (0, d.GA)(t.value)
                            ? n(t.value)
                            : e.onSelect(t.value);
                        }
                      };
                      return (0, d.Ur)(t)
                        ? (0, r.jsx)(
                            o.Ii,
                            {
                              className: le().BlockListItem,
                              href: t.url,
                              children: k.u.Localize(t.strLocToken),
                            },
                            t.url,
                          )
                        : (0, r.jsxs)(
                            l.Z,
                            {
                              onActivate: c,
                              className: le().BlockListItem,
                              children: [
                                (0, r.jsx)("span", {
                                  children: (0, d.Ju)(t)
                                    ? k.u.Localize(t.strLocToken)
                                    : (0, d.Jt)(t.value),
                                }),
                                (0, d.Ju)(t) &&
                                  (0, r.jsx)("span", { children: "▶" }),
                              ],
                            },
                            a,
                          );
                    }),
                  }),
                  (0, r.jsx)(te.n9, { onClick: _, children: "Back" }),
                ],
              }),
            null !== t &&
              (0, r.jsxs)("div", {
                className: le().BlockList,
                children: [
                  (0, r.jsx)("div", {
                    className: le().BlockListItem,
                    children: (0, d.Jt)(t),
                  }),
                  null !== h &&
                    (0, r.jsxs)("label", {
                      children: [
                        (0, r.jsx)("input", {
                          type: "checkbox",
                          checked: a,
                          onChange: (e) => c(e.target.checked),
                        }),
                        " Targeted at women",
                      ],
                    }),
                  null !== g &&
                    (0, r.jsxs)("label", {
                      children: [
                        (0, r.jsx)("input", {
                          type: "checkbox",
                          checked: u,
                          onChange: (e) => p(e.target.checked),
                        }),
                        " Deepfake",
                      ],
                    }),
                  (0, r.jsxs)("div", {
                    className: le().BottomButtons,
                    children: [
                      (0, r.jsx)(te.n9, { onClick: _, children: "Back" }),
                      (0, r.jsx)(te.n9, {
                        onClick: () => {
                          let n = t;
                          null !== n &&
                            (a && null !== (0, d.V$)(n) && (n = (0, d.V$)(n)),
                            u && null !== (0, d.GA)(n) && (n = (0, d.GA)(n)),
                            e.onSelect(n));
                        },
                        children: "Continue",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      const de = {
        [O.lN]: [m.lV, m.WA, m.XG, m.u1, m.Nd],
        [O.NC]: [m.rf, m.M6, m.WA, m.o8, m.Nd],
      };
      function ue(e) {
        var t;
        const [n, i] = (0, R.useState)(null),
          [s, o] = (0, R.useState)("main"),
          [u, p] = (0, R.useState)(!1),
          [m, h] = (0, R.useState)(!1),
          [_, j] = (0, R.useState)(null),
          [y, B] = (0, R.useState)(null),
          [x, A] = (0, R.useState)(null),
          [f, b] = (0, R.useState)(!1),
          [w, S] = (0, R.useState)(!1),
          [C, M] = (0, R.useState)(T.HH),
          [k, E] = (0, R.useState)(""),
          z =
            void 0 !== e.rtContentCreatedAt &&
            (Date.now() / 1e3 - e.rtContentCreatedAt) / 2592e3,
          I =
            null !==
              (t = e.subject.subject_type
                ? de[e.subject.subject_type]
                : void 0) && void 0 !== t
              ? t
              : [],
          L = u || m || _ || y || x || f || w,
          O =
            ((W = e.authorSteamID),
            (0, ne.I)({
              queryKey: ["get_primary_language_for_user", W],
              queryFn: async () => {
                if ("0" === W || !W) throw new Error("Invalid steamid");
                const e = await fetch(
                    `${v.TS.COMMUNITY_BASE_URL}profiles/${W}/ajaxlanguagepreferences`,
                  ),
                  t = await e.json();
                if (t.success === Q.R) return t.preferences;
                throw new Error(
                  "Failed GetPrimaryLanguageForUser. EResult: " + t.success,
                );
              },
            }));
        var W;
        let P = F.Bhc;
        if (O.isSuccess) {
          const e = O.data;
          void 0 !== e.pref_primary_language && -1 !== e.pref_primary_language
            ? (P = e.pref_primary_language)
            : void 0 !== e.last_logon_langauge &&
              -1 !== e.last_logon_langauge &&
              (P = e.last_logon_langauge);
        }
        const K = (function (e, t) {
          const n = (0, ee.KV)();
          return (0, ne.I)({
            queryKey: ["get_quick_text", e, t],
            queryFn: async () => {
              if (null == e || void 0 === t) return null;
              const r = D.w.Init(H);
              r.Body().set_quicktext_id(e),
                r.Body().set_language((0, F.LgB)(t));
              const i = await U.GetQuickText(n, r);
              if (i.GetEResult() !== Q.R)
                throw new Error(
                  "useQuickText failed with EResult " + i.GetEResult(),
                );
              return i.Body().toObject();
            },
            enabled: void 0 !== e,
          });
        })((0, d.AH)(n), P);
        (0, R.useEffect)(() => {
          var e, t, n, r, i, s, a;
          E(
            null !==
              (a =
                null !==
                  (r =
                    null ===
                      (n =
                        null ===
                          (t =
                            null === (e = K.data) || void 0 === e
                              ? void 0
                              : e.quicktext) || void 0 === t
                          ? void 0
                          : t.content) || void 0 === n
                      ? void 0
                      : n.content) && void 0 !== r
                  ? r
                  : null ===
                        (s =
                          null === (i = K.data) || void 0 === i
                            ? void 0
                            : i.english_reference) || void 0 === s
                    ? void 0
                    : s.content) && void 0 !== a
              ? a
              : "",
          );
        }, [K.data, O.data]);
        const V = !1,
          G = !1,
          J = !1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            "reason" === s &&
              (0, r.jsx)(ce, {
                reasons: d.UL,
                onSelect: (e) => {
                  i(e), o("main");
                },
              }),
            "main" === s &&
              (0, r.jsxs)(l.Z, {
                children: [
                  (0, r.jsxs)(l.Z, {
                    className: ae().SanctionForm,
                    children: [
                      e.sanctionMutation.isError &&
                        (0, r.jsxs)("div", {
                          className: (0, ie.A)(
                            ae().OneColumn,
                            ae().ErrorMessage,
                          ),
                          children: [
                            (0, r.jsx)(re.Q9b, {}),
                            " Error: ",
                            e.sanctionMutation.error.message,
                          ],
                        }),
                      (0, r.jsx)("label", {
                        htmlFor: "reason",
                        children: "Reason:",
                      }),
                      (0, r.jsx)("button", {
                        id: "reason",
                        className: ae().ClickableText,
                        onClick: () => o("reason"),
                        children:
                          null === n
                            ? c.T.Localize(
                                "#commentsanctiondialog_selectreason",
                              )
                            : (0, d.Jt)(n),
                      }),
                      I.length > 0 &&
                        (0, r.jsx)("div", {
                          className: ae().QuickReasons,
                          children: I.map((e) =>
                            (0, r.jsx)(
                              a.$,
                              {
                                onClick: () => i(n === e ? null : e),
                                size: "1",
                                variant: n === e ? "basic" : "dark",
                                children: (0, d.Jt)(e),
                              },
                              e,
                            ),
                          ),
                        }),
                      (0, r.jsxs)("label", {
                        className: ae().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: u,
                            onChange: (e) => p(e.target.checked),
                          }),
                          " Delete",
                        ],
                      }),
                      (0, r.jsxs)("label", {
                        className: ae().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: m,
                            onChange: (e) => h(e.target.checked),
                          }),
                          " Issue Warning",
                        ],
                      }),
                      z &&
                        !!_ &&
                        (0, r.jsxs)("div", {
                          className: (0, ie.A)(
                            ae().OneColumn,
                            ae().ErrorMessage,
                          ),
                          children: [
                            (0, r.jsx)(re.Q9b, {}),
                            " Content is older than 30 days. Are you sure you want to ban?",
                          ],
                        }),
                      e.clanSteamID &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("label", {
                              htmlFor: "hubban",
                              children: "Ban from hub:",
                            }),
                            (0, r.jsxs)("select", {
                              id: "hubban",
                              onChange: (e) =>
                                j(
                                  "0" === e.target.value
                                    ? null
                                    : parseInt(e.target.value),
                                ),
                              value: null != _ ? _ : 0,
                              children: [
                                (0, r.jsx)("option", {
                                  value: "0",
                                  children: "Do not ban",
                                }),
                                (0, r.jsx)("option", {
                                  value: "1",
                                  children: "1 day",
                                }),
                                (0, r.jsx)("option", {
                                  value: "3",
                                  children: "3 days",
                                }),
                                (0, r.jsx)("option", {
                                  value: "7",
                                  children: "7 days",
                                }),
                                (0, r.jsx)("option", {
                                  value: "14",
                                  children: "14 days",
                                }),
                                (0, r.jsx)("option", {
                                  value: "30",
                                  children: "30 days",
                                }),
                                (0, r.jsx)("option", {
                                  value: "90",
                                  children: "3 months",
                                }),
                                (0, r.jsx)("option", {
                                  value: "365",
                                  children: "1 year",
                                }),
                                (0, r.jsx)("option", {
                                  value: "-1",
                                  children: "Permanent",
                                }),
                              ],
                            }),
                            V,
                          ],
                        }),
                      z &&
                        !!y &&
                        (0, r.jsxs)("div", {
                          className: (0, ie.A)(
                            ae().OneColumn,
                            ae().ErrorMessage,
                          ),
                          children: [
                            (0, r.jsx)(re.Q9b, {}),
                            " Content is older than 30 days. Are you sure you want to ban?",
                          ],
                        }),
                      (0, r.jsx)("label", {
                        htmlFor: "communityban",
                        children: "Ban from community:",
                      }),
                      (0, r.jsxs)("select", {
                        id: "communityban",
                        onChange: (e) =>
                          B(
                            "0" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != y ? y : 0,
                        children: [
                          (0, r.jsx)("option", {
                            value: "0",
                            children: "Do not ban",
                          }),
                          (0, r.jsx)("option", {
                            value: "1",
                            children: "1 day",
                          }),
                          (0, r.jsx)("option", {
                            value: "3",
                            children: "3 days",
                          }),
                          (0, r.jsx)("option", {
                            value: "7",
                            children: "7 days",
                          }),
                          (0, r.jsx)("option", {
                            value: "14",
                            children: "14 days",
                          }),
                          (0, r.jsx)("option", {
                            value: "30",
                            children: "30 days",
                          }),
                          (0, r.jsx)("option", {
                            value: "90",
                            children: "3 months",
                          }),
                          (0, r.jsx)("option", {
                            value: "365",
                            children: "1 year",
                          }),
                          (0, r.jsx)("option", {
                            value: "-1",
                            children: "Permanent",
                          }),
                        ],
                      }),
                      G,
                      (0, r.jsx)("label", {
                        htmlFor: "deletecomments",
                        children: "Delete comments since:",
                      }),
                      (0, r.jsxs)("select", {
                        id: "deletecomments",
                        disabled: w,
                        onChange: (e) =>
                          A(
                            "-1" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != x ? x : -1,
                        children: [
                          (0, r.jsx)("option", {
                            value: "-1",
                            children: "Do not delete",
                          }),
                          (0, r.jsx)("option", {
                            value: "1",
                            children: "1 day",
                          }),
                          (0, r.jsx)("option", {
                            value: "7",
                            children: "7 days",
                          }),
                          (0, r.jsx)("option", {
                            value: "14",
                            children: "14 days",
                          }),
                          (0, r.jsx)("option", {
                            value: "30",
                            children: "30 days",
                          }),
                          (0, r.jsx)("option", {
                            value: "0",
                            children: "All comments",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("span", {
                        className: ae().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: f,
                            onChange: (e) => b(e.target.checked),
                          }),
                          " Permanent trade ban",
                        ],
                      }),
                      J,
                      (0, r.jsxs)("span", {
                        className: ae().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: w,
                            onChange: (e) => S(e.target.checked),
                          }),
                          " Mark as suspicious",
                        ],
                      }),
                      (0, r.jsx)("label", {
                        htmlFor: "escalateto",
                        children: "Escalate to",
                      }),
                      (0, r.jsxs)("select", {
                        id: "escalateto",
                        onChange: (e) => M(parseInt(e.target.value)),
                        value: C,
                        children: [
                          (0, r.jsx)("option", {
                            value: T.HH,
                            children: "Do not escalate",
                          }),
                          (0, r.jsx)("option", {
                            value: T.lp,
                            children: "Supervisor",
                          }),
                          (0, r.jsx)("option", {
                            value: T.PV,
                            children: "Valve",
                          }),
                        ],
                      }),
                      (0, r.jsx)("textarea", {
                        className: (0, ie.A)(
                          ae().OneColumn,
                          ae().MessageTextArea,
                        ),
                        placeholder: "Message to send (required)",
                        value: k,
                        onChange: (e) => E(e.target.value),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(l.Z, {
                    className: ae().BottomButtons,
                    children: [
                      e.sanctionMutation.isPending &&
                        (0, r.jsx)(g.t, { size: "small" }),
                      !e.sanctionMutation.isPending &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(te.Oh, {
                              onClick: e.onCancel,
                              children: "Cancel",
                            }),
                            (0, r.jsx)(te.n9, {
                              onClick: async () => {
                                (0, q.wT)(
                                  null !== n,
                                  "eReason must be non-null to sanction",
                                );
                                const t = [];
                                u && t.push({ sanction: N.EF }),
                                  m && t.push({ sanction: N.Cv }),
                                  _ && t.push({ sanction: N.ME, days: _ }),
                                  y && t.push({ sanction: N.sR, days: y }),
                                  x && t.push({ sanction: N.bX, days: x }),
                                  f && t.push({ sanction: N.Fh, days: -1 }),
                                  w && t.push({ sanction: N.X5 }),
                                  C === T.lp
                                    ? t.push({
                                        sanction: N.nw,
                                        escalate_to: T.lp,
                                      })
                                    : C === T.PV &&
                                      t.push({
                                        sanction: N.nw,
                                        escalate_to: T.PV,
                                      }),
                                  await e.sanctionMutation.mutateAsync({
                                    sanctions: t,
                                    message: k.trim(),
                                    reason: n,
                                  }),
                                  e.onSanction();
                              },
                              disabled:
                                null === n || !L || 0 === k.trim().length,
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
      var pe = n(68255),
        me = n(84811),
        he = n(9154),
        ge = n(37049),
        _e = n(12155),
        je = n(38135),
        ve = n(32754),
        ye = n(62490),
        Be = n(84670),
        xe = n.n(Be);
      function Ae(e) {
        const { subject: t } = e,
          [n, a] = (0, R.useState)(!1),
          o =
            t &&
            (t.unresolved_report_count > 0 || t.unresolved_dispute_count > 0),
          l = (0, r.jsx)(i.W, {
            onClick: () => a(!0),
            children: (0, r.jsxs)(s.s, {
              direction: "row",
              justify: "between",
              align: "baseline",
              gap: "1",
              children: [
                o &&
                  (0, r.jsx)("img", {
                    className: xe().Flag,
                    src: `${v.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                  }),
                c.T.Localize("#commentsanctiondialog_moderate"),
                t &&
                  t.required_moderator_level === T.PV &&
                  (0, r.jsx)("span", {
                    className: xe().ValveOnly,
                    children: "(VO)",
                  }),
                t &&
                  t.required_moderator_level === T.lp &&
                  (0, r.jsx)("span", {
                    className: xe().SupervisorOnly,
                    children: "(Supervisor)",
                  }),
              ],
            }),
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            n && (0, r.jsx)(be, { onClose: () => a(!1), ...e }),
            t &&
              (0, r.jsx)(ve.Gq, {
                toolTipContent: (0, r.jsx)(fe, { subject: t }),
                direction: "bottom",
                nDelayShowMS: 0,
                children: l,
              }),
            !t && l,
          ],
        });
      }
      function fe(e) {
        const { subject: t } = e,
          n = (0, R.useMemo)(() => {
            var e;
            const n = (0, ye.D5)(
              null !== (e = null == t ? void 0 : t.reports) && void 0 !== e
                ? e
                : [],
              (e) => e.report_reason,
            );
            return n.sort((e, t) => e[1] - t[1]), n;
          }, [t.reports]);
        return 0 === n.length
          ? null
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  children: c.T.Localize("#reasonlist_title"),
                }),
                n.map(([e, t]) =>
                  (0, r.jsx)(
                    "div",
                    {
                      children: c.T.Localize(
                        "#reasonlist_reasonwithcount",
                        (0, d.Jt)(e),
                        t,
                      ),
                    },
                    e,
                  ),
                ),
              ],
            });
      }
      function be(e) {
        var t, n, i;
        const {
            sanctionMutation: a,
            acquitMutation: l,
            subject: u,
            eSubjectType: m,
            gidComment: h,
            clanSteamID: g,
            authorSteamID: _,
            onClose: j,
          } = e,
          y = null == u ? void 0 : u.reported_content_id,
          [B, x] = (0, R.useState)("main"),
          f = [
            {
              name: "Reports",
              key: "reports",
              contents: (0, r.jsx)(me.tH, {
                children: (0, r.jsx)(C, { subject: u }),
              }),
            },
            {
              name: "History",
              key: "history",
              contents: (0, r.jsx)(me.tH, {
                children: (0, r.jsx)(A, { reportedContentID: y }),
              }),
            },
            {
              name: "Details",
              key: "details",
              contents: (0, r.jsx)(me.tH, { children: e.children }),
            },
          ];
        let b = 0,
          w = 0;
        if (u)
          for (const e of u.reports)
            e.time_resolved && !e.time_disputed && b++,
              e.time_dispute_resolved && w++;
        const S =
            !!(null == u ? void 0 : u.reported_content_id) &&
            !u.owner_dispute_time &&
            u.resolved === p.S6,
          M = void 0 !== u && !!u.owner_dispute_time;
        return (0, r.jsx)(ge.wA, {
          onlyPopoutIfNeeded: !0,
          popupHeight: 340,
          popupWidth: 640,
          strTitle: "Moderate subject",
          children: (0, r.jsx)(he.eV, {
            bAllowFullSize: !0,
            title: "Moderate",
            "aria-describedby": "moderate",
            onCancel: e.onClose,
            className: xe().ModerateDialog,
            children: (0, r.jsx)(pe.f3, {
              children: (0, r.jsx)(pe.a3, {
                children: (0, r.jsxs)("div", {
                  className: xe().ModerateDialogCtn,
                  children: [
                    "main" === B &&
                      (0, r.jsxs)("div", {
                        className: xe().ModerateCtn,
                        children: [
                          (0, r.jsxs)("div", {
                            className: xe().ModerationData,
                            children: [
                              (0, r.jsxs)("div", {
                                children: [
                                  null !==
                                    (t =
                                      null == u
                                        ? void 0
                                        : u.unresolved_report_count) &&
                                  void 0 !== t
                                    ? t
                                    : 0,
                                  " unresolved / ",
                                  b,
                                  " resolved / ",
                                  null !==
                                    (n =
                                      null == u
                                        ? void 0
                                        : u.unresolved_dispute_count) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                                  " disputed / ",
                                  w,
                                  " disputes resolved",
                                ],
                              }),
                              (0, r.jsx)(je.V, { tabs: f }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: xe().ModerationActionButtons,
                            children: [
                              (0, r.jsx)("button", {
                                onClick: () => x("sanction"),
                                children: (0, r.jsxs)(s.s, {
                                  direction: "row",
                                  justify: "center",
                                  align: "center",
                                  children: [
                                    (0, r.jsx)(_e.X, {
                                      className: xe().SanctionIcon,
                                    }),
                                    " Sanction",
                                  ],
                                }),
                              }),
                              (0, r.jsx)(Ce, {
                                subject: u,
                                acquitMutation: l,
                                onClose: j,
                              }),
                              (0, r.jsx)(Me, { subject: u, onClose: j }),
                              (0, r.jsx)(o.fu, {
                                disabled: !y,
                                onClick: () => x("escalate"),
                                children: c.T.Localize(
                                  "#moderation_escalation_escalate",
                                ),
                              }),
                              !M &&
                                (0, r.jsx)("button", {
                                  disabled: !S,
                                  onClick: () => x("ownerdispute"),
                                  children: "Owner Dispute",
                                }),
                              M &&
                                (0, r.jsxs)("span", {
                                  children: [
                                    (0, r.jsx)("a", {
                                      href: `${v.TS.HELP_BASE_URL}tickermaster/ticket/${u.owner_dispute_details}`,
                                      children: c.T.Localize(
                                        "#moderation_already_owner_disputed",
                                      ),
                                    }),
                                    (0, r.jsx)("button", {
                                      disabled: !y,
                                      onClick: () =>
                                        x("editownerdisputedetails"),
                                      className: xe().EditButton,
                                      children: (0, r.jsx)(_e.ffu, {}),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    "escalate" === B &&
                      !!y &&
                      (0, r.jsx)(I, {
                        reportedContentID: y,
                        onClose: () => x("main"),
                      }),
                    "sanction" === B &&
                      (0, r.jsx)(ue, {
                        subject: null != u ? u : { subject_type: m },
                        clanSteamID: g,
                        authorSteamID: _,
                        sanctionMutation: a,
                        onSanction: () => {
                          e.onClose(),
                            1 === window.location.href.split("#").length &&
                              h !== d.Ie &&
                              (window.location.href += "#c" + h),
                            window.location.reload();
                        },
                        onCancel: () => x("main"),
                      }),
                    "ownerdispute" === B &&
                      !!y &&
                      (0, r.jsx)(Se, {
                        reportedContentID: y,
                        onClose: () => x("main"),
                      }),
                    "editownerdisputedetails" === B &&
                      !!y &&
                      (0, r.jsx)(we, {
                        reportedContentID: y,
                        onClose: () => x("main"),
                        currentDetails:
                          null !==
                            (i =
                              null == u ? void 0 : u.owner_dispute_details) &&
                          void 0 !== i
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
      function we(e) {
        const { reportedContentID: t, onClose: n, currentDetails: i } = e,
          [l, d] = (0, R.useState)(i),
          u = (0, h.wy)(t, l);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)("label", {
              children: [
                c.T.Localize("#moderation_editownerdisputedetails_label"),
                (0, r.jsx)("input", {
                  type: "text",
                  value: l,
                  onChange: (e) => d(e.target.value),
                }),
              ],
            }),
            (0, r.jsxs)(s.s, {
              justify: "between",
              direction: "row",
              children: [
                (0, r.jsx)(o.fu, {
                  onClick: async () => {
                    await u.mutateAsync(), n();
                  },
                  children: c.T.Localize(
                    "#moderation_editownerdisputedetails_save",
                  ),
                }),
                (0, r.jsx)(a.$, {
                  onClick: n,
                  loading: u.isPending,
                  children: c.T.Localize("#moderation_ownerdispute_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      function Se(e) {
        const { reportedContentID: t, onClose: n } = e,
          [i, a] = (0, R.useState)(""),
          d = (0, h.y4)(t, i);
        return (0, r.jsxs)(l.Z, {
          className: xe().OwnerDisputeCtn,
          children: [
            (0, r.jsx)("div", {
              children: c.T.Localize("#moderation_ownerdispute_description"),
            }),
            (0, r.jsxs)("label", {
              children: [
                c.T.Localize("#moderation_ownerdispute_ticketmastercode"),
                " ",
                (0, r.jsx)("input", {
                  type: "text",
                  value: i,
                  onChange: (e) => a(e.target.value),
                }),
              ],
            }),
            (0, r.jsxs)(s.s, {
              justify: "between",
              direction: "row",
              children: [
                (0, r.jsx)(o.fu, {
                  onClick: async () => {
                    await d.mutateAsync(), n();
                  },
                  children: c.T.Localize("#moderation_ownerdispute_dispute"),
                }),
                (0, r.jsx)(o.fu, {
                  onClick: n,
                  children: c.T.Localize("#moderation_ownerdispute_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      function Ce(e) {
        const { acquitMutation: t, onClose: n, subject: i } = e,
          a =
            i &&
            (i.unresolved_report_count > 0 || i.unresolved_dispute_count > 0);
        return (0, r.jsx)("button", {
          onClick: async () => {
            await t.mutateAsync(void 0), n();
          },
          disabled: !a,
          children: (0, r.jsxs)(s.s, {
            direction: "row",
            justify: "center",
            align: "center",
            children: [
              (0, r.jsx)(_e.jlt, { className: xe().AcquitIcon }),
              " ",
              c.T.Localize("#moderation_actions_acquit"),
            ],
          }),
        });
      }
      function Me(e) {
        const { subject: t, onClose: n } = e,
          i =
            !!(null == t ? void 0 : t.reported_content_id) &&
            t.resolved !== p.z_ &&
            (t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0),
          s = (0, h.N8)();
        return (0, r.jsx)("button", {
          onClick: async () => {
            (null == t ? void 0 : t.reported_content_id) &&
              (await s.mutateAsync({
                reportedContentID: t.reported_content_id,
              }),
              n());
          },
          disabled: !i,
          children: c.T.Localize("#moderation_actions_sustain"),
        });
      }
    },
    99171: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => s });
      var r = n(66418);
      const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let n = "0000000000000000000000000000000000000000";
        "string" == typeof e
          ? (n = e)
          : e &&
            (n =
              (function (e) {
                if (!e) return "";
                return (
                  "function" == typeof e[Symbol.iterator]
                    ? Array.from(e)
                    : Object.values(e).filter((e) => "number" == typeof e)
                )
                  .map((e) => e.toString(16).padStart(2, "0"))
                  .join("");
              })(e) || n);
        let s = ".jpg";
        "0000000000000000000000000000000000000000" === n && (n = i),
          44 == n.length && ((s = n.slice(-4)), (n = n.slice(0, 40)));
        let a = r.TS.AVATAR_BASE_URL;
        switch (
          (a ||
            ((a = r.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += n.slice(0, 2) + "/")),
          (a += n),
          t)
        ) {
          case "X-Small":
          case "Small":
            break;
          case "Medium":
          case "MediumLarge":
            a += "_medium";
            break;
          case "Large":
          case "X-Large":
          case "FillArea":
            a += "_full";
        }
        return (a += s), a;
      }
    },
    98682: (e, t, n) => {
      "use strict";
      n.d(t, { Ul: () => g, wm: () => _ });
      var r = n(7850);
      const i =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
        s =
          n.p +
          "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
        a =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
      var o = n(22837),
        l = n(90626);
      function c(e) {
        const { rgSources: t, onIncrementalError: n, alt: i, ...s } = e,
          [a, o] = (0, l.useState)(0),
          c = t[a];
        return (0, r.jsx)("img", {
          onError: (e) => {
            o((e) => e + 1), null == n || n(e, c, a);
          },
          alt: i,
          ...s,
          src: c,
        });
      }
      var d = n(66418),
        u = n(64238),
        p = n.n(u),
        m = n(16339),
        h = n(99171);
      function g(e) {
        const {
            avatarURL: t,
            size: n,
            statusStyle: o,
            statusPosition: l,
            className: u,
            children: h,
            isOnline: g,
            isInGame: _,
            isWatchingBroadcast: j,
            isAwayOrSnooze: v,
            alt: y,
          } = e,
          B = [];
        return (
          t && B.push(t),
          B.push(
            (function (e) {
              switch (e) {
                case "X-Small":
                case "Small":
                  return (0, d.YJ)(i);
                case "Medium":
                case "MediumLarge":
                  return (0, d.YJ)(a);
                case "Large":
                case "X-Large":
                case "FillArea":
                  return (0, d.YJ)(s);
              }
            })(null != n ? n : "Medium"),
          ),
          (0, r.jsxs)("div", {
            className: p()(
              m.AvatarHolder,
              {
                [m.Offline]: !g,
                [m.Online]: g,
                [m.InGame]: _,
                [m.WatchingBroadcast]: j,
                [m.AwayOrSnooze]: v,
              },
              u,
            ),
            "data-size": n,
            "data-status-position": l,
            children: [
              (0, r.jsx)("div", { className: m.AvatarStatus, style: o }),
              (0, r.jsx)(c, {
                className: p()(m.Avatar),
                rgSources: B,
                draggable: !1,
                alt: y,
              }),
              h,
            ],
          })
        );
      }
      function _(e) {
        var t, n, i, s, a, l, c;
        const {
          playerLinkDetails: u,
          animatedAvatar: p,
          avatarFrame: m,
          size: _,
          ...j
        } = e;
        let v = (0, h.t)(
          null === (t = u.public_data) || void 0 === t
            ? void 0
            : t.sha_digest_avatar,
          _,
        );
        return (
          (null === (n = null == p ? void 0 : p.image_small) || void 0 === n
            ? void 0
            : n.length) &&
            (v = d.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + p.image_small),
          (0, r.jsx)(g, {
            avatarURL: v,
            size: _,
            isOnline:
              (null === (i = u.private_data) || void 0 === i
                ? void 0
                : i.persona_state) === o.UXk,
            isInGame:
              void 0 !==
              (null === (s = u.private_data) || void 0 === s
                ? void 0
                : s.game_id),
            isWatchingBroadcast:
              void 0 !==
              (null === (a = u.private_data) || void 0 === a
                ? void 0
                : a.watching_broadcast_accountid),
            isAwayOrSnooze:
              (null === (l = u.private_data) || void 0 === l
                ? void 0
                : l.persona_state) === o.PrD ||
              (null === (c = u.private_data) || void 0 === c
                ? void 0
                : c.persona_state) === o.vPz,
            ...j,
          })
        );
      }
    },
    11333: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => l, c: () => o });
      var r = n(78619),
        i = n(49845),
        s = n(58632),
        a = n.n(s);
      function o(e, t) {
        return new (a())(
          async (t) => {
            const n = [...t],
              i = await r.xtC.GetPlayerLinkDetails(e, { steamids: n }),
              s = new Map();
            return (
              i
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  s.set(t.public_data.steamid, t);
                }),
              n.map((e) => {
                var t;
                return null !== (t = s.get(e)) && void 0 !== t ? t : null;
              })
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function l(e) {
        return (0, i.V)("PlayerLinkDetails", () => o(e));
      }
    },
    18519: (e, t, n) => {
      "use strict";
      n.d(t, { jn: () => u });
      var r = n(66418),
        i = n(23809),
        s = n(29233),
        a = n(88942),
        o = n(11333);
      const l = 1;
      function c(e) {
        return ["PlayerLinkDetails", e];
      }
      function d(e, t) {
        const n =
          "number" == typeof t
            ? s.b2.InitFromAccountID(t, r.TS.EUNIVERSE).ConvertTo64BitString()
            : t;
        return {
          queryKey: c(n),
          queryFn: async () => {
            if (n) {
              return (function (e) {
                var t, n, r, i, s;
                return (
                  null === (t = null == e ? void 0 : e.private_data) ||
                    void 0 === t ||
                    delete t.account_name,
                  null === (n = null == e ? void 0 : e.public_data) ||
                    void 0 === n ||
                    delete n.account_flags,
                  null === (r = null == e ? void 0 : e.public_data) ||
                    void 0 === r ||
                    delete r.ban_expires_time,
                  null === (i = null == e ? void 0 : e.public_data) ||
                    void 0 === i ||
                    delete i.privacy_state,
                  (null === (s = null == e ? void 0 : e.public_data) ||
                  void 0 === s
                    ? void 0
                    : s.profile_state) !== l &&
                    (null == e || delete e.private_data),
                  e
                );
              })(await e.load(n));
            }
            return null;
          },
          enabled: !!n,
        };
      }
      function u(e) {
        const t = (0, i.KV)(),
          n = (0, o.L)(t);
        return (0, a.I)(d(n, e));
      }
    },
    90182: (e, t, n) => {
      "use strict";
      n.d(t, {
        EC: () => b,
        KQ: () => f,
        Kt: () => v,
        Ky: () => _,
        N8: () => B,
        c3: () => w,
        lY: () => y,
        w3: () => j,
        wy: () => A,
        y4: () => x,
      });
      var r = n(37085),
        i = n(56545),
        s = n(43261),
        a = n(99164),
        o = n(23809),
        l = n(88942),
        c = n(29385),
        d = n(61739),
        u = n(63987);
      const p = "get_reported_content",
        m = (e) => [p, JSON.stringify(e)],
        h = (e) => ["get_reported_content_by_id", e],
        g = (e) => ["get_reported_content_audit_log", e];
      async function _(e, t) {
        return Promise.all([
          e.invalidateQueries({ queryKey: [p], exact: !1 }),
          e.invalidateQueries({ queryKey: h(t) }),
          e.invalidateQueries({ queryKey: g(t) }),
        ]);
      }
      function j(e) {
        const t = (0, o.KV)();
        return (0, l.I)(
          (function (e, t) {
            return {
              queryKey: m(t),
              enabled: (0, u.NX)(t),
              queryFn: async () => {
                const n = i.w.Init(a.Mw);
                n.Body().set_coordinates(a.UC.fromObject(t));
                const r = await a.fL.GetReportedContent(e, n);
                if (!r.BSuccess())
                  throw new Error(
                    "Failed in GetReportedContent, EResult: " + r.GetEResult(),
                  );
                return r.Body().toObject();
              },
            };
          })(t, e),
        );
      }
      function v(e) {
        const t = (0, o.KV)();
        return (0, l.I)(
          (function (e, t) {
            return {
              queryKey: g(t),
              queryFn: async () => {
                if (!t) return;
                const n = i.w.Init(a.v5);
                return (
                  n.Body().set_reported_content_id(t),
                  (await a.fL.GetAuditLogByID(e, n)).Body().toObject()
                );
              },
            };
          })(t, e),
        );
      }
      function y(e) {
        const t = (0, o.KV)(),
          n = (0, c.jE)();
        return (0, d.n)({
          mutationFn: async (n) => {
            const s = i.w.Init(a.Qi);
            s.Body().set_reported_content_id(e),
              s.Body().set_new_level(n.eNewLevel),
              n.eReason && s.Body().set_reason(n.eReason),
              n.strNote && s.Body().set_note(n.strNote);
            const o = await a.fL.EscalateSubjectByID(t, s);
            if (o.GetEResult() !== r.R)
              throw new Error(`Failed to escalate subject: ${o.GetEMsg()}`);
          },
          onSuccess: async () => {
            await Promise.all([
              _(n, e),
              n.invalidateQueries({ queryKey: ["get_claimed"] }),
              n.invalidateQueries({ queryKey: ["get_subject_overview"] }),
            ]);
          },
        });
      }
      function B() {
        const e = (0, o.KV)(),
          t = (0, c.jE)();
        return (0, d.n)({
          mutationFn: async (t) => {
            const n = i.w.Init(a.Nr);
            n.Body().set_reported_content_id(t.reportedContentID);
            const r = await a.fL.SustainModerationByID(e, n);
            if (!r.BSuccess()) throw new Error("EResult " + r.GetEResult());
          },
          onSuccess: async (e, n) => {
            await _(t, n.reportedContentID),
              await t.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
      function x(e, t) {
        const n = (0, o.KV)(),
          r = (0, c.jE)();
        return (0, d.n)({
          mutationFn: async () => {
            const r = i.w.Init(a.LW);
            r.Body().set_reported_content_id(e), r.Body().set_details(t);
            const s = await a.fL.OwnerDisputeModeration(n, r);
            if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
          },
          onSuccess: async () => {
            await _(r, e);
          },
        });
      }
      function A(e, t) {
        const n = (0, c.jE)(),
          r = (0, o.KV)();
        return (0, d.n)({
          mutationFn: async () => {
            const n = i.w.Init(a.ps);
            n.Body().set_reported_content_id(e),
              n.Body().set_owner_dispute_details(t);
            const s = await a.fL.UpdateSubjectByID(r, n);
            if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
          },
          onSuccess: async () => {
            await _(n, e);
          },
        });
      }
      function f(e) {
        const t = (0, o.KV)();
        return (0, l.I)(
          (function (e, t) {
            return {
              queryKey: ["reporterstats", t],
              queryFn: async () => {
                const n = i.w.Init(a.KD);
                n.Body().set_steamid(t);
                const r = await a.fL.GetReporterStats(e, n);
                if (!r.BSuccess()) throw new Error("EResult " + r.GetEResult());
                return r.Body().toObject();
              },
            };
          })(t, e),
        );
      }
      function b(e, t, n) {
        const r = (0, o.KV)(),
          a = (0, c.jE)();
        return (0, d.n)({
          mutationFn: async (a) => {
            const o = i.w.Init(s.Er);
            o.Body().set_steamid(e),
              o.Body().set_comment_thread_id(t),
              o.Body().set_gidcomment(n),
              o.Body().set_reason(a.reason),
              o.Body().set_note(a.message);
            for (const e of a.sanctions) {
              const t = new s.u6();
              t.set_sanction(e.sanction),
                e.days && t.set_days(e.days),
                o.Body().add_sanctions(t);
            }
            const l = await s.BE.SanctionComment(r, o);
            if (!l.BSuccess())
              throw new Error(
                `SanctionComment failed. EResult: ${l.GetEResult()} (${l.GetErrorMessage()})`,
              );
          },
          onSuccess: async () => {
            await a.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
      function w(e, t, n) {
        const r = (0, o.KV)(),
          a = (0, c.jE)();
        return (0, d.n)({
          mutationFn: async () => {
            const a = i.w.Init(s.RX);
            a.Body().set_steamid(e),
              a.Body().set_comment_thread_id(t),
              a.Body().set_gidcomment(n),
              a.Body().set_report_action(s.du.Pn),
              a.Body().set_resolve(!0),
              await s.Vi.UpdateCommentReportState(r, a);
          },
          onSuccess: async () => {
            await a.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
    },
    49845: (e, t, n) => {
      "use strict";
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function i(...e) {
        return JSON.stringify(e, (e, t) => {
          if (
            (function (e) {
              if (!r(e)) return !1;
              const t = e.constructor;
              if (void 0 === t) return !0;
              const n = t.prototype;
              return (
                !!r(n) &&
                !!Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
              );
            })(t)
          ) {
            const e = {};
            return (
              Object.keys(t)
                .sort()
                .forEach((n) => {
                  e[n] = t[n];
                }),
              e
            );
          }
          return t;
        });
      }
      n.d(t, { V: () => o });
      var s = n(90626);
      n(7850);
      const a = (0, s.createContext)({ instances: {}, factories: {} });
      function o(e, t) {
        var n;
        const r = (0, s.useContext)(a),
          o = "string" == typeof e ? e : i(...e);
        let l = r;
        for (; l; ) {
          if (o in l.instances) return l.instances[o];
          if (o in l.factories) break;
          l = l.parent;
        }
        const c = (
          null !== (n = null == l ? void 0 : l.factories[o]) && void 0 !== n
            ? n
            : t
        )();
        return ((null != l ? l : r).instances[o] = c), c;
      }
    },
    95034: (e, t, n) => {
      "use strict";
      n.d(t, {
        Bm: () => a,
        QD: () => l,
        f3: () => s,
        iV: () => d,
        ip: () => c,
        le: () => o,
      });
      var r = n(90626),
        i = n(92757);
      function s(e, t) {
        let n;
        if ("string" == typeof e) n = e;
        else if ("location" in e) n = e.location.search;
        else {
          if (!("search" in e)) return;
          n = e.search;
        }
        const r = new URLSearchParams(n.substring(1));
        if (r.has(t)) {
          const e = r.getAll(t);
          return e[e.length - 1];
        }
      }
      function a(e, t, n, r = !1) {
        const i = new URLSearchParams(e.location.search.substring(1));
        if (null != n && null != n) {
          if (i.get(t) == n) return;
          i.set(t, n);
        } else {
          if (!i.has(t)) return;
          i.delete(t);
        }
        r
          ? e.replace(`?${i.toString()}`, { ...e.location.state })
          : e.push(`?${i.toString()}`);
      }
      function o(e, t, n) {
        a(e, t, n, !0);
      }
      function l(e, t) {
        const n = (0, i.W6)(),
          o = (0, i.zy)(),
          l = (0, r.useMemo)(() => {
            const n = s(o.search, e);
            return null != n && null != n
              ? null != t && null != t
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [o.search, e, t]),
          c = (0, r.useCallback)(
            (t, r = !1) => {
              a(n, e, null != t && null != t ? String(t) : null, r);
            },
            [n, e],
          );
        return [l, c];
      }
      function c(e, t, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            r.delete(e), null != n && null != n && r.append(e, n);
          }
        n
          ? e.replace(`?${r.toString()}`, { ...e.location.state })
          : e.push(`?${r.toString()}`);
      }
      function d(e, t) {
        c(e, t, !0);
      }
    },
    38135: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => g, a: () => _ });
      var r = n(7850),
        i = n(90626),
        s = n(52038),
        a = n(61859),
        o = n(95034),
        l = n(1990),
        c = n.n(l),
        d = n(32754),
        u = n(51272),
        p = n(76217),
        m = n(84143),
        h = n(92757);
      function g(e) {
        const {
            tabs: t,
            bDisableRouting: n,
            startingTab: a,
            controlledTab: l,
            OnTabChanged: d,
            classNameCtn: u,
            classNameTab: g,
            classNameTabContent: _,
            preferredFocus: v,
            bVerticalTabs: y,
            bSticky: B,
            bChecklistMode: x,
          } = e,
          A = (0, h.zy)(),
          f = (0, h.W6)(),
          [b, w] = (0, i.useState)(() => {
            var e;
            return (
              a ||
              (!n &&
              (0, o.f3)(A, "tab") &&
              null !== (e = (0, o.f3)(A, "tab")) &&
              void 0 !== e
                ? e
                : "")
            );
          });
        (0, i.useEffect)(() => {
          if (!e.bDisableRouting && A) {
            const e = (0, o.f3)(A, "tab");
            e && w(e);
          }
        }, [A, A.key, e.bDisableRouting, w]);
        const S = i.useCallback(
            (e) => {
              w(e.key),
                n || (0, o.Bm)(f, "tab", e.key),
                null == d || d(e.key),
                e.onClick && e.onClick(e);
            },
            [n, f, d],
          ),
          C = t.filter((e) => !e.hidden);
        if (!C.length) return null;
        const M = null != l ? l : b,
          T = C.find((e) => e.key === M) || C[0],
          R = v ? (null != a ? a : C[0].key) : void 0,
          k = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(p.Z, {
                className: (0, s.A)(
                  c().GraphicalAssetsTabs,
                  y && c().GraphicalAssetsTabsVertical,
                  x && c().ChecklistMode,
                  B && c().Sticky,
                  u,
                ),
                navEntryPreferPosition: v ? m.iU.PREFERRED_CHILD : m.iU.FIRST,
                children: C.map((e, t) =>
                  (0, r.jsx)(
                    j,
                    {
                      tab: e,
                      OnTabClick: S,
                      classNameTab: g,
                      active: e.key === T.key,
                      preferredFocus: R === e.key,
                    },
                    e.key,
                  ),
                ),
              }),
              T && (0, r.jsx)(p.Z, { className: _, children: T.contents }),
            ],
          });
        return y
          ? (0, r.jsx)(p.Z, {
              className: (0, s.A)(c().GraphicalAssetsTabsLayoutVertical),
              children: k,
            })
          : k;
      }
      function _(e) {
        const { statusType: t = "success", bShowStatusBox: n, children: i } = e;
        let a = "";
        return (
          "success" === t
            ? (a = c().StatusSuccess)
            : "danger" === t
              ? (a = c().StatusDanger)
              : "caution" === t
                ? (a = c().StatusCaution)
                : "info" === t
                  ? (a = c().StatusInfo)
                  : "incomplete" === t && (a = c().StatusIncomplete),
          (0, r.jsx)("div", {
            className: (0, s.A)(
              c().GraphicalAssetStatus,
              a,
              n ? c().checklistBox : "",
            ),
            children: i,
          })
        );
      }
      function j(e) {
        const {
          tab: t,
          OnTabClick: n,
          classNameTab: i,
          active: o,
          preferredFocus: l,
        } = e;
        return (0, r.jsx)(u.e7, {
          condition: Boolean(t.statusToolTip || t.tooltip),
          wrap: (e) =>
            (0, r.jsx)(d.he, {
              toolTipContent: t.statusToolTip || t.tooltip,
              children: e,
            }),
          children: (0, r.jsxs)(p.Z, {
            className: (0, s.A)(
              c().GraphicalAssetsTab,
              o && c().Active,
              o && "ActiveTab",
              i,
            ),
            onActivate: () => n(t),
            preferredFocus: l,
            children: [
              Boolean(t.vo_warning) &&
                (0, r.jsx)(d.he, {
                  toolTipContent: t.vo_warning,
                  children: (0, r.jsx)("div", {
                    className: c().VOWarning,
                    children: (0, a.we)("#EventEditor_VOWarning"),
                  }),
                }),
              t.status,
              t.name,
            ],
          }),
        });
      }
    },
  },
]);
