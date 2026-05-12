/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [140],
  {
    83077: (e) => {
      e.exports = {
        ModerateDialogCtn: "_3k-mgkTihlZAexAo8PpuRt",
        Flag: "_3dm-fM55uTgByZNQ-7FQKO",
        ReportList: "hnTX88aagY-cwkiefQvQx",
        ModerateCtn: "_2qBUNFM1eoRvT2ScOKJFUL",
        ModerationActionButtons: "_2xcVcE3CRCIKmxAjIyjoGj",
        ModerateLink: "_2LegBbkPqIlvkjCfpbo4V1",
        BottomButtons: "_1WHIJmT4YG0U0TGfx-u93k",
        OwnerDisputeCtn: "_2QWA5XBjtoSIM-_eLNiw2a",
        EditButton: "_1oiwHOMI9o4tYFhxPeBzdb",
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
        MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
      };
    },
    30770: (e) => {
      e.exports = {
        EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
        BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
        EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
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
        GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
        GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
        GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
        VOWarning: "_3LaJynPDFfccGWUEtdltlt",
        StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
        StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
        StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
      };
    },
    22: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          default: () => Ce,
          useAcquitForumComment: () => Le,
          useSanctionForumComment: () => Ie,
        });
      var r = n(7850),
        s = n(34410),
        i = n(90314),
        a = n(32754),
        o = n(90626),
        l = n(78327),
        c = n(9154),
        u = n(68255),
        d = n(37049),
        p = n(90182),
        m = n(28395),
        h = n(63987),
        g = n(15993),
        j = n(63275),
        _ = n(30770),
        B = n.n(_),
        v = n(45699),
        A = n(76217);
      function b(e) {
        const { subject: t, onClose: n } = e,
          [s, i] = (0, o.useState)(g.PV),
          a = (0, p.lY)(t.subject_type, t.subject_group_id, t.subject_id);
        return (0, r.jsxs)(A.Z, {
          className: B().EscalateSubjectDialogCtn,
          children: [
            (0, r.jsx)(A.Z, {
              children: m.T.Localize("#moderation_escalation_description"),
            }),
            (0, r.jsxs)("select", {
              className: B().EscalationLevelSelect,
              value: s,
              onChange: (e) => i(parseInt(e.target.value)),
              children: [
                (0, r.jsx)("option", {
                  value: g.HH,
                  children: m.T.Localize("#moderation_escalationlevel_any"),
                }),
                (0, r.jsx)("option", {
                  value: g.lp,
                  children: m.T.Localize(
                    "#moderation_escalationlevel_supervisor",
                  ),
                }),
                (0, r.jsx)("option", {
                  value: g.PV,
                  children: m.T.Localize("#moderation_escalationlevel_valve"),
                }),
              ],
            }),
            (0, r.jsxs)(A.Z, {
              className: B().BottomButtons,
              children: [
                (0, r.jsx)(v.fu, {
                  onClick: async () => {
                    await a.mutateAsync({ eNewLevel: s }), n();
                  },
                  children: m.T.Localize("#moderation_escalation_escalate"),
                }),
                (0, r.jsx)(v.fu, {
                  onClick: n,
                  children: j.u.Localize("#moderation_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      var x = n(64115),
        f = n(98580),
        y = n.n(f),
        S = n(55388),
        w = n(59884),
        M = n.n(w);
      function C(e) {
        const [t, n] = (0, o.useState)(null),
          [s, i] = (0, o.useState)([]),
          [a, l] = (0, o.useState)(!1),
          [c, u] = (0, o.useState)(!1);
        let d = e.reasons;
        for (const e of s) d = d[e].children;
        const p = null !== t ? (0, h.V$)(t) : null,
          m = null !== t ? (0, h.GA)(t) : null,
          g = () => {
            null !== t
              ? n(null)
              : 0 === s.length
                ? e.onSelect(null)
                : i(s.slice(0, -1));
          };
        return (0, r.jsxs)("div", {
          children: [
            null === t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    className: M().BlockList,
                    children: d.map((t, a) => {
                      const o = () => {
                        if ((0, h.Ju)(t)) {
                          const e = [...s];
                          e.push(a), i(e);
                        } else {
                          if (!(0, h.X$)(t))
                            throw new Error("This should be unreachable.");
                          (0, h.V$)(t.value) || (0, h.GA)(t.value)
                            ? n(t.value)
                            : e.onSelect(t.value);
                        }
                      };
                      return (0, h.Ur)(t)
                        ? (0, r.jsx)(
                            v.Ii,
                            {
                              className: M().BlockListItem,
                              href: t.url,
                              children: j.u.Localize(t.strLocToken),
                            },
                            t.url,
                          )
                        : (0, r.jsxs)(
                            A.Z,
                            {
                              onActivate: o,
                              className: M().BlockListItem,
                              children: [
                                (0, r.jsx)("span", {
                                  children: (0, h.Ju)(t)
                                    ? j.u.Localize(t.strLocToken)
                                    : (0, h.Jt)(t.value),
                                }),
                                (0, h.Ju)(t) &&
                                  (0, r.jsx)("span", { children: "▶" }),
                              ],
                            },
                            a,
                          );
                    }),
                  }),
                  (0, r.jsx)(S.n9, { onClick: g, children: "Back" }),
                ],
              }),
            null !== t &&
              (0, r.jsxs)("div", {
                className: M().BlockList,
                children: [
                  (0, r.jsx)("div", {
                    className: M().BlockListItem,
                    children: (0, h.Jt)(t),
                  }),
                  null !== p &&
                    (0, r.jsxs)("label", {
                      children: [
                        (0, r.jsx)("input", {
                          type: "checkbox",
                          checked: a,
                          onChange: (e) => l(e.target.checked),
                        }),
                        " Targeted at women",
                      ],
                    }),
                  null !== m &&
                    (0, r.jsxs)("label", {
                      children: [
                        (0, r.jsx)("input", {
                          type: "checkbox",
                          checked: c,
                          onChange: (e) => u(e.target.checked),
                        }),
                        " Deepfake",
                      ],
                    }),
                  (0, r.jsxs)("div", {
                    className: M().BottomButtons,
                    children: [
                      (0, r.jsx)(S.n9, { onClick: g, children: "Back" }),
                      (0, r.jsx)(S.n9, {
                        onClick: () => {
                          let n = t;
                          null !== n &&
                            (a && null !== (0, h.V$)(n) && (n = (0, h.V$)(n)),
                            c && null !== (0, h.GA)(n) && (n = (0, h.GA)(n)),
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
      var T,
        R,
        k = n(52038),
        z = n(81393),
        U = n(37085),
        F = n(88942),
        L = n(22837),
        I = n(80613),
        E = n.n(I),
        Q = n(89068),
        N = n(56545);
      class q extends I.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.quicktext_id || Q.Sg(q.M()),
            I.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: Q.qM.readUint32,
                    bw: Q.gp.writeUint32,
                  },
                  requires_update: {
                    n: 2,
                    br: Q.qM.readBool,
                    bw: Q.gp.writeBool,
                  },
                  title: { n: 3, br: Q.qM.readString, bw: Q.gp.writeString },
                  hidden: { n: 4, br: Q.qM.readBool, bw: Q.gp.writeBool },
                  approved: { n: 5, br: Q.qM.readBool, bw: Q.gp.writeBool },
                  help_request_types: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: Q.qM.readUint32,
                    pbr: Q.qM.readPackedUint32,
                    bw: Q.gp.writeRepeatedUint32,
                  },
                  content: { n: 7, c: O },
                  button_text: {
                    n: 8,
                    br: Q.qM.readString,
                    bw: Q.gp.writeString,
                  },
                  replacement: { n: 9, br: Q.qM.readBool, bw: Q.gp.writeBool },
                  payment_methods: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: Q.qM.readUint32,
                    pbr: Q.qM.readPackedUint32,
                    bw: Q.gp.writeRepeatedUint32,
                  },
                  appids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: Q.qM.readUint32,
                    pbr: Q.qM.readPackedUint32,
                    bw: Q.gp.writeRepeatedUint32,
                  },
                  escalation_level: {
                    n: 12,
                    br: Q.qM.readEnum,
                    bw: Q.gp.writeEnum,
                  },
                  partner_only: {
                    n: 13,
                    br: Q.qM.readBool,
                    bw: Q.gp.writeBool,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = Q.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return Q.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return Q.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (E().BinaryReader)(e),
            n = new q();
          return q.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Q.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (E().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Q.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (E().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickText";
        }
      }
      class O extends I.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.content || Q.Sg(O.M()),
            I.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  content: { n: 1, br: Q.qM.readString, bw: Q.gp.writeString },
                  major_revision: {
                    n: 2,
                    br: Q.qM.readUint32,
                    bw: Q.gp.writeUint32,
                  },
                  minor_revision: {
                    n: 3,
                    br: Q.qM.readUint32,
                    bw: Q.gp.writeUint32,
                  },
                  author: { n: 4, br: Q.qM.readUint32, bw: Q.gp.writeUint32 },
                  last_update: {
                    n: 5,
                    br: Q.qM.readUint32,
                    bw: Q.gp.writeUint32,
                  },
                  language: { n: 6, br: Q.qM.readInt32, bw: Q.gp.writeInt32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = Q.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return Q.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return Q.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (E().BinaryReader)(e),
            n = new O();
          return O.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Q.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (E().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Q.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (E().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickTextContent";
        }
      }
      class D extends I.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.quicktext_id || Q.Sg(D.M()),
            I.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: Q.qM.readUint32,
                    bw: Q.gp.writeUint32,
                  },
                  language: { n: 2, br: Q.qM.readString, bw: Q.gp.writeString },
                  from_sql: { n: 3, br: Q.qM.readBool, bw: Q.gp.writeBool },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = Q.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return Q.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return Q.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (E().BinaryReader)(e),
            n = new D();
          return D.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Q.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (E().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Q.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (E().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Request";
        }
      }
      class W extends I.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.quicktext || Q.Sg(W.M()),
            I.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  quicktext: { n: 1, c: q },
                  english_reference: { n: 2, c: O },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = Q.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return Q.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return Q.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (E().BinaryReader)(e),
            n = new W();
          return W.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Q.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (E().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Q.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (E().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Response";
        }
      }
      class P extends I.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || Q.Sg(P.M()),
            I.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: Q.qM.readUint32, bw: Q.gp.writeUint32 },
                  log_type: { n: 2, br: Q.qM.readString, bw: Q.gp.writeString },
                  version_string: {
                    n: 3,
                    br: Q.qM.readString,
                    bw: Q.gp.writeString,
                  },
                  log_contents: {
                    n: 4,
                    br: Q.qM.readString,
                    bw: Q.gp.writeString,
                  },
                  request_id: {
                    n: 5,
                    br: Q.qM.readUint64String,
                    bw: Q.gp.writeUint64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = Q.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return Q.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return Q.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (E().BinaryReader)(e),
            n = new P();
          return P.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Q.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (E().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Q.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (E().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Request";
        }
      }
      class G extends I.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.id || Q.Sg(G.M()),
            I.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  id: {
                    n: 1,
                    br: Q.qM.readUint64String,
                    bw: Q.gp.writeUint64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = Q.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return Q.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return Q.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (E().BinaryReader)(e),
            n = new G();
          return G.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Q.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (E().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Q.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (E().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Response";
        }
      }
      class K extends I.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.appid || Q.Sg(K.M()),
            I.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  appid: { n: 1, br: Q.qM.readUint32, bw: Q.gp.writeUint32 },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = Q.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return Q.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return Q.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (E().BinaryReader)(e),
            n = new K();
          return K.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Q.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (E().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Q.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new (E().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Request";
        }
      }
      class H extends I.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.request_id || Q.Sg(H.M()),
            I.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  request_id: {
                    n: 1,
                    br: Q.qM.readUint64String,
                    bw: Q.gp.writeUint64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = Q.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return Q.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return Q.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (E().BinaryReader)(e),
            n = new H();
          return H.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return Q.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (E().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          Q.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (E().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Response";
        }
      }
      !(function (e) {
        e.GetQuickText = function (e, t) {
          return e.SendMsg("SupportAgents.GetQuickText#1", (0, N.I8)(D, t), W, {
            bConstMethod: !0,
            ePrivilege: 5,
          });
        };
      })(T || (T = {})),
        (function (e) {
          (e.UploadUserApplicationLog = function (e, t) {
            return e.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, N.I8)(P, t),
              G,
              { ePrivilege: 1 },
            );
          }),
            (e.GetApplicationLogDemand = function (e, t) {
              return e.SendMsg(
                "HelpRequestLogs.GetApplicationLogDemand#1",
                (0, N.I8)(K, t),
                H,
                { ePrivilege: 1 },
              );
            });
        })(R || (R = {}));
      var J = n(23809);
      function V(e) {
        const [t, n] = (0, o.useState)(null),
          [s, i] = (0, o.useState)("main"),
          [a, c] = (0, o.useState)(!1),
          [u, d] = (0, o.useState)(!1),
          [p, g] = (0, o.useState)(null),
          [j, _] = (0, o.useState)(null),
          [B, v] = (0, o.useState)(null),
          [b, f] = (0, o.useState)(!1),
          [w, M] = (0, o.useState)(!1),
          [R, I] = (0, o.useState)(""),
          E = a || u || p || j || B || b || w,
          Q =
            ((q = e.authorSteamId),
            (0, F.I)({
              queryKey: ["get_primary_language_for_user", q],
              queryFn: async () => {
                const e = await fetch(
                    `${l.TS.COMMUNITY_BASE_URL}profiles/${q}/ajaxlanguagepreferences`,
                  ),
                  t = await e.json();
                if (t.success === U.R) return t.preferences;
                throw new Error(
                  "Failed GetPrimaryLanguageForUser. EResult: " + t.success,
                );
              },
            }));
        var q;
        let O = L.Bhc;
        if (Q.isSuccess) {
          const e = Q.data;
          void 0 !== e.pref_primary_language && -1 !== e.pref_primary_language
            ? (O = e.pref_primary_language)
            : void 0 !== e.last_logon_langauge &&
              -1 !== e.last_logon_langauge &&
              (O = e.last_logon_langauge);
        }
        const W = (function (e, t) {
          const n = (0, J.KV)();
          return (0, F.I)({
            queryKey: ["get_quick_text", e, t],
            queryFn: async () => {
              if (null == e || void 0 === t) return null;
              const r = N.w.Init(D);
              r.Body().set_quicktext_id(e),
                r.Body().set_language((0, L.LgB)(t));
              const s = await T.GetQuickText(n, r);
              if (s.GetEResult() !== U.R)
                throw new Error(
                  "useQuickText failed with EResult " + s.GetEResult(),
                );
              return s.Body().toObject();
            },
            enabled: void 0 !== e,
          });
        })((0, h.AH)(t), O);
        (0, o.useEffect)(() => {
          var e, t, n, r, s, i, a;
          I(
            null !==
              (a =
                null !==
                  (r =
                    null ===
                      (n =
                        null ===
                          (t =
                            null === (e = W.data) || void 0 === e
                              ? void 0
                              : e.quicktext) || void 0 === t
                          ? void 0
                          : t.content) || void 0 === n
                      ? void 0
                      : n.content) && void 0 !== r
                  ? r
                  : null ===
                        (i =
                          null === (s = W.data) || void 0 === s
                            ? void 0
                            : s.english_reference) || void 0 === i
                    ? void 0
                    : i.content) && void 0 !== a
              ? a
              : "",
          );
        }, [W.data, Q.data]);
        const P = !1,
          G = !1,
          K = !1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            "reason" === s &&
              (0, r.jsx)(C, {
                reasons: h.UL,
                onSelect: (e) => {
                  n(e), i("main");
                },
              }),
            "main" === s &&
              (0, r.jsxs)(A.Z, {
                children: [
                  (0, r.jsxs)(A.Z, {
                    className: y().SanctionForm,
                    children: [
                      (0, r.jsx)("label", {
                        htmlFor: "reason",
                        children: "Reason:",
                      }),
                      (0, r.jsx)("button", {
                        id: "reason",
                        className: y().ClickableText,
                        onClick: () => i("reason"),
                        children:
                          null === t
                            ? m.T.Localize(
                                "#commentsanctiondialog_selectreason",
                              )
                            : (0, h.Jt)(t),
                      }),
                      (0, r.jsxs)("label", {
                        className: y().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: a,
                            onChange: (e) => c(e.target.checked),
                          }),
                          " Delete",
                        ],
                      }),
                      (0, r.jsxs)("label", {
                        className: y().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: u,
                            onChange: (e) => d(e.target.checked),
                          }),
                          "Issue Warning",
                        ],
                      }),
                      (0, r.jsx)("label", {
                        htmlFor: "hubban",
                        children: "Ban from hub:",
                      }),
                      (0, r.jsxs)("select", {
                        id: "hubban",
                        onChange: (e) =>
                          g(
                            "0" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != p ? p : 0,
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
                      P,
                      (0, r.jsx)("label", {
                        htmlFor: "communityban",
                        children: "Ban from community:",
                      }),
                      (0, r.jsxs)("select", {
                        id: "communityban",
                        onChange: (e) =>
                          _(
                            "0" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != j ? j : 0,
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
                          v(
                            "-1" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != B ? B : -1,
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
                        className: y().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: b,
                            onChange: (e) => f(e.target.checked),
                          }),
                          " Permanent trade ban",
                        ],
                      }),
                      K,
                      "0" === e.subject.subject_id &&
                        (0, r.jsxs)("span", {
                          className: y().OneColumn,
                          children: [
                            (0, r.jsx)("input", {
                              type: "checkbox",
                              checked: w,
                              onChange: (e) => M(e.target.checked),
                            }),
                            " Mark as suspicious",
                          ],
                        }),
                      (0, r.jsx)("textarea", {
                        className: (0, k.A)(y().OneColumn, y().MessageTextArea),
                        placeholder: "Message to send",
                        value: R,
                        onChange: (e) => I(e.target.value),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(A.Z, {
                    className: y().BottomButtons,
                    children: [
                      (0, r.jsx)(S.Oh, {
                        onClick: e.onCancel,
                        children: "Cancel",
                      }),
                      (0, r.jsx)(S.n9, {
                        onClick: () => {
                          (0, z.wT)(
                            null !== t,
                            "eReason must be non-null to sanction",
                          );
                          const n = [];
                          a && n.push({ sanction: x.EF }),
                            u && n.push({ sanction: x.Cv }),
                            p && n.push({ sanction: x.ME, days: p }),
                            j && n.push({ sanction: x.sR, days: j }),
                            B && n.push({ sanction: x.bX, days: B }),
                            b && n.push({ sanction: x.Fh, days: -1 }),
                            w && n.push({ sanction: x.X5 }),
                            e.onOK(n, R.trim(), t);
                        },
                        disabled: null === t || !E,
                        children: "Sanction",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var Z = n(38135),
        X = n(84811),
        Y = n(83077),
        $ = n(62490),
        ee = n(55184),
        te = n(4340),
        ne = n(22797),
        re = n(62220),
        se = n(77490);
      const ie =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
        ae =
          n.p +
          "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
        oe =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
      function le(e) {
        const { rgSources: t, onIncrementalError: n, alt: s, ...i } = e,
          [a, l] = (0, o.useState)(0),
          c = t[a];
        return (0, r.jsx)("img", {
          onError: (e) => {
            l((e) => e + 1), null == n || n(e, c, a);
          },
          alt: s,
          ...i,
          src: c,
        });
      }
      var ce = n(8527),
        ue = n(64238),
        de = n.n(ue),
        pe = n(16339),
        me = n(99171);
      function he(e) {
        const {
            avatarURL: t,
            size: n,
            statusStyle: s,
            statusPosition: i,
            className: a,
            children: o,
            isOnline: l,
            isInGame: c,
            isWatchingBroadcast: u,
            isAwayOrSnooze: d,
            alt: p,
          } = e,
          m = [];
        return (
          t && m.push(t),
          m.push(
            (function (e) {
              switch (e) {
                case "X-Small":
                case "Small":
                  return (0, ce.YJ)(ie);
                case "Medium":
                case "MediumLarge":
                  return (0, ce.YJ)(oe);
                case "Large":
                case "X-Large":
                case "FillArea":
                  return (0, ce.YJ)(ae);
              }
            })(null != n ? n : "Medium"),
          ),
          (0, r.jsxs)("div", {
            className: de()(
              pe.AvatarHolder,
              {
                [pe.Offline]: !l,
                [pe.Online]: l,
                [pe.InGame]: c,
                [pe.WatchingBroadcast]: u,
                [pe.AwayOrSnooze]: d,
              },
              a,
            ),
            "data-size": n,
            "data-status-position": i,
            children: [
              (0, r.jsx)("div", { className: pe.AvatarStatus, style: s }),
              (0, r.jsx)(le, {
                className: de()(pe.Avatar),
                rgSources: m,
                draggable: !1,
                alt: p,
              }),
              o,
            ],
          })
        );
      }
      function ge(e) {
        var t, n, s, i, a, o, l;
        const {
          playerLinkDetails: c,
          animatedAvatar: u,
          avatarFrame: d,
          size: p,
          ...m
        } = e;
        let h = (0, me.t)(
          null === (t = c.public_data) || void 0 === t
            ? void 0
            : t.sha_digest_avatar,
          p,
        );
        return (
          (null === (n = null == u ? void 0 : u.image_small) || void 0 === n
            ? void 0
            : n.length) &&
            (h = ce.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + u.image_small),
          (0, r.jsx)(he, {
            avatarURL: h,
            size: p,
            isOnline:
              (null === (s = c.private_data) || void 0 === s
                ? void 0
                : s.persona_state) === L.UXk,
            isInGame:
              void 0 !==
              (null === (i = c.private_data) || void 0 === i
                ? void 0
                : i.game_id),
            isWatchingBroadcast:
              void 0 !==
              (null === (a = c.private_data) || void 0 === a
                ? void 0
                : a.watching_broadcast_accountid),
            isAwayOrSnooze:
              (null === (o = c.private_data) || void 0 === o
                ? void 0
                : o.persona_state) === L.PrD ||
              (null === (l = c.private_data) || void 0 === l
                ? void 0
                : l.persona_state) === L.vPz,
            ...m,
          })
        );
      }
      var je = n(20609);
      function _e(e) {
        const { subject: t } = e;
        return t ? (0, r.jsx)(ve, { ...e }) : (0, r.jsx)(Be, {});
      }
      function Be(e) {
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
                    children: m.T.Localize("#subjectauditlog_noentries"),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function ve(e) {
        var t, n, s, i, a;
        const { subject: o } = e,
          l = (0, p.Kt)(
            null == o ? void 0 : o.subject_type,
            null == o ? void 0 : o.subject_group_id,
            null == o ? void 0 : o.subject_id,
          ),
          c =
            null !==
              (s =
                null ===
                  (n =
                    null === (t = null == l ? void 0 : l.data) || void 0 === t
                      ? void 0
                      : t.entries) || void 0 === n
                  ? void 0
                  : n.length) && void 0 !== s
              ? s
              : 0;
        return (0, r.jsx)("div", {
          children:
            c > 0 &&
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
                    void 0 === l &&
                      (0, r.jsx)("tr", {
                        children: (0, r.jsx)("td", {
                          colSpan: 4,
                          children: m.T.Localize("#subjectauditlog_noentries"),
                        }),
                      }),
                    l &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          l.isLoading &&
                            (0, r.jsx)("tr", {
                              children: (0, r.jsx)("td", {
                                colSpan: 4,
                                children: (0, r.jsx)(ne.t, {}),
                              }),
                            }),
                          l.isError &&
                            (0, r.jsx)("tr", {
                              children: (0, r.jsx)("td", {
                                colSpan: 4,
                                children: m.T.Localize(
                                  "#subjectauditlog_error",
                                ),
                              }),
                            }),
                          l.isSuccess &&
                            0 === c &&
                            (0, r.jsx)("tr", {
                              children: (0, r.jsx)("td", {
                                colSpan: 4,
                                children: m.T.Localize(
                                  "#subjectauditlog_noentries",
                                ),
                              }),
                            }),
                          l.isSuccess &&
                            c > 0 &&
                            (null ===
                              (a =
                                null === (i = l.data) || void 0 === i
                                  ? void 0
                                  : i.entries) || void 0 === a
                              ? void 0
                              : a.map((e) =>
                                  (0, r.jsx)(Ae, { entry: e }, e.timestamp),
                                )),
                        ],
                      }),
                  ],
                }),
              ],
            }),
        });
      }
      function Ae(e) {
        var t, n;
        const { entry: s } = e,
          i = (0, re.jn)(s.actor_steamid);
        return i.isSuccess && i.data
          ? (0, r.jsxs)("tr", {
              children: [
                (0, r.jsx)("td", { children: (0, se.P0)(s.timestamp, !1, "") }),
                (0, r.jsxs)("td", {
                  children: [
                    (0, r.jsx)("a", {
                      href: `${l.TS.COMMUNITY_BASE_URL}profiles/${s.actor_steamid}`,
                      children: (0, r.jsx)("span", {
                        children:
                          null ===
                            (n =
                              null === (t = i.data) || void 0 === t
                                ? void 0
                                : t.public_data) || void 0 === n
                            ? void 0
                            : n.persona_name,
                      }),
                    }),
                    " ",
                    "(",
                    (0, r.jsx)("a", {
                      href: `/moderation/activity/${s.actor_steamid}`,
                      children: "activity",
                    }),
                    ")",
                  ],
                }),
                (0, r.jsxs)("td", {
                  children: [
                    (0, h.fg)(s.action),
                    s.automated_action &&
                      (0, r.jsx)(r.Fragment, { children: " (Automated)" }),
                  ],
                }),
                (0, r.jsx)("td", {
                  children: (0, r.jsx)(be, {
                    eAction: s.action,
                    jsonData: s.additional_json_data,
                  }),
                }),
              ],
            })
          : null;
      }
      function be(e) {
        const { eAction: t, jsonData: n } = e;
        let s = {};
        switch ((n && (s = JSON.parse(n)), t)) {
          case ee.Hd:
            return (0, r.jsxs)(r.Fragment, {
              children: ["Report ID: ", s.report_id],
            });
          case ee._F:
            return (0, r.jsxs)(r.Fragment, {
              children: [
                "Reason: ",
                (0, h.Jt)(s.reason),
                s.resolution !== i.CC &&
                  s.resolution !== i.S6 &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("br", {}),
                      "Resolution: ",
                      (0, h.l)(s.resolution),
                    ],
                  }),
                s.sanctions &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("br", {}),
                      "Sanctions: ",
                      s.sanctions.map(h.cB).join(", "),
                    ],
                  }),
              ],
            });
          case ee.Nu:
            return (0, r.jsxs)(r.Fragment, {
              children: ["Report ID: ", s.report_id],
            });
          case ee.XP:
            return (0, r.jsx)(r.Fragment, {
              children: JSON.stringify(s, null, "\t"),
            });
          case ee.YI:
            return (0, r.jsxs)(r.Fragment, {
              children: ["New level: ", (0, h.ar)(s.level)],
            });
          case ee._7:
            return (0, r.jsxs)(r.Fragment, {
              children: ["Report ID: ", s.report_id],
            });
          default:
            return null;
        }
      }
      function xe(e) {
        var t;
        const { subject: n } = e,
          s = n && n.reports && n.reports.length > 0;
        return (0, r.jsx)("table", {
          className: je.ContentReportsTable,
          children: (0, r.jsxs)("tbody", {
            children: [
              !s &&
                (0, r.jsx)("tr", {
                  children: (0, r.jsx)("td", {
                    colSpan: 4,
                    children: m.T.Localize("#contentreportslist_noreports"),
                  }),
                }),
              s &&
                (null === (t = n.reports) || void 0 === t
                  ? void 0
                  : t.map((e) => (0, r.jsx)(fe, { report: e }, e.report_id))),
            ],
          }),
        });
      }
      function fe(e) {
        var t, n;
        const { report: s } = e,
          a = (0, re.jn)(s.reporter_steamid);
        if (!a.isSuccess) return null;
        if (!(null === (t = a.data) || void 0 === t ? void 0 : t.public_data))
          return null;
        const o = !!s.time_disputed && s.dispute_resolved === i.z_,
          c =
            s.resolved !== i.z_ &&
            (!s.time_disputed || s.dispute_resolved !== i.z_),
          u = 0 !== s.time_dispute_resolved,
          d = s.resolved === i.CC;
        return (0, r.jsxs)("tr", {
          children: [
            (0, r.jsx)("td", { children: (0, se.P0)(s.time_reported, !1, "") }),
            (0, r.jsxs)("td", {
              children: [
                (0, r.jsx)("a", {
                  href: `${l.TS.COMMUNITY_BASE_URL}profiles/${s.reporter_steamid}`,
                  children: (0, r.jsx)(ge, {
                    playerLinkDetails: a.data,
                    size: "X-Small",
                    alt: "Reporter",
                  }),
                }),
                " ",
                (0, r.jsx)("a", {
                  href: `${l.TS.COMMUNITY_BASE_URL}profiles/${s.reporter_steamid}`,
                  children: (0, r.jsx)("span", {
                    children:
                      null === (n = a.data.public_data) || void 0 === n
                        ? void 0
                        : n.persona_name,
                  }),
                }),
              ],
            }),
            (0, r.jsx)("td", {
              children:
                s.report_reason !== te.OQ &&
                (0, r.jsx)("span", { children: (0, h.Jt)(s.report_reason) }),
            }),
            (0, r.jsxs)("td", {
              children: [
                d &&
                  !o &&
                  !u &&
                  (0, r.jsx)("span", {
                    children: m.T.Localize(
                      "#contentreportslist_acquitted_at",
                      (0, se.P0)(s.time_resolved, !1, ""),
                    ),
                  }),
                c &&
                  !d &&
                  !o &&
                  !u &&
                  (0, r.jsx)("span", {
                    children: m.T.Localize(
                      "#contentreportslist_resolved_at",
                      (0, se.P0)(s.time_resolved, !1, ""),
                    ),
                  }),
                o &&
                  !u &&
                  (0, r.jsx)("span", {
                    children: m.T.Localize(
                      "#contentreportslist_disputed_at",
                      (0, se.P0)(s.time_disputed, !1, ""),
                    ),
                  }),
                u &&
                  (0, r.jsx)("span", {
                    children: m.T.Localize(
                      "#contentreportslist_dispute_resolved_at",
                      (0, se.P0)(s.time_dispute_resolved, !1, ""),
                    ),
                  }),
                !o && (0, r.jsx)("span", { children: s.report_text }),
                o &&
                  (0, r.jsxs)("span", {
                    children: [
                      (0, r.jsx)("br", {}),
                      "Original: ",
                      s.report_text,
                      (0, r.jsx)("br", {}),
                      "Dispute: ",
                      s.dispute_details,
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      var ye = n(29385),
        Se = n(61739),
        we = n(60690),
        Me = n(12155);
      function Ce(e) {
        var t;
        const [n, i] = (0, o.useState)(!1),
          c = (0, p.kZ)(s.lN, e.topicId);
        let u;
        if (c.isSuccess)
          for (const n of null !== (t = c.data.subjects) && void 0 !== t
            ? t
            : [])
            n.subject_id === e.subjectId && (u = n);
        const d =
            u &&
            (u.unresolved_report_count > 0 || u.unresolved_dispute_count > 0),
          h = (0, r.jsx)("span", {
            className: Y.ModerateLink,
            children: (0, r.jsxs)("a", {
              onClick: () => i(!0),
              children: [
                d &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("img", {
                        className: Y.Flag,
                        src: `${l.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                      }),
                      " ",
                    ],
                  }),
                m.T.Localize("#commentsanctiondialog_moderate"),
              ],
            }),
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            n && (0, r.jsx)(Re, { onClose: () => i(!1), ...e, subject: u }),
            u &&
              (0, r.jsx)(a.Gq, {
                toolTipContent: (0, r.jsx)(Te, { subject: u }),
                direction: "bottom",
                nDelayShowMS: 0,
                children: h,
              }),
            !u && h,
          ],
        });
      }
      function Te(e) {
        const { subject: t } = e;
        if (!t || !t.reports) return null;
        const n = (0, $.D5)(t.reports, (e) => e.report_reason);
        return (
          n.sort((e, t) => e[1] - t[1]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                children: m.T.Localize("#reasonlist_title"),
              }),
              n.map(([e, t]) =>
                (0, r.jsx)(
                  "div",
                  {
                    children: m.T.Localize(
                      "#reasonlist_reasonwithcount",
                      (0, h.Jt)(e),
                      t,
                    ),
                  },
                  e,
                ),
              ),
            ],
          })
        );
      }
      function Re(e) {
        var t, n, a;
        const { subject: p } = e,
          [h, g] = (0, o.useState)("main"),
          j = Ie(e.clanSteamId, e.forumId, e.topicId, e.subjectId),
          _ = [
            {
              name: "History",
              key: "history",
              contents: (0, r.jsx)(X.tH, {
                children: (0, r.jsx)(_e, { subject: p }),
              }),
            },
            {
              name: "Reports",
              key: "reports",
              contents: (0, r.jsx)(X.tH, {
                children: (0, r.jsx)(xe, { subject: p }),
              }),
            },
          ];
        let B = 0,
          A = 0;
        if (p)
          for (const e of p.reports)
            e.time_resolved && !e.time_disputed && B++,
              e.time_dispute_resolved && A++;
        const x = {
            subject_type: s.lN,
            subject_group_id: e.topicId,
            subject_id: e.subjectId,
          },
          f = void 0 !== p && !p.owner_dispute_time && p.resolved === i.S6,
          y = void 0 !== p && !!p.owner_dispute_time;
        return (0, r.jsx)(d.w, {
          onlyPopoutIfNeeded: !0,
          popupHeight: 340,
          popupWidth: 640,
          strTitle: "Moderate subject",
          children: (0, r.jsx)(c.eV, {
            bAllowFullSize: !0,
            title: "Moderate",
            "aria-describedby": "moderate",
            onCancel: e.onClose,
            className: Y.ModerateDialog,
            children: (0, r.jsx)(u.f3, {
              children: (0, r.jsx)(u.a3, {
                children: (0, r.jsxs)("div", {
                  className: Y.ModerateDialogCtn,
                  children: [
                    "main" === h &&
                      (0, r.jsxs)("div", {
                        className: Y.ModerateCtn,
                        children: [
                          (0, r.jsxs)("div", {
                            className: Y.ModerationData,
                            children: [
                              (0, r.jsxs)("div", {
                                children: [
                                  null !==
                                    (t =
                                      null == p
                                        ? void 0
                                        : p.unresolved_report_count) &&
                                  void 0 !== t
                                    ? t
                                    : 0,
                                  " unresolved / ",
                                  B,
                                  " resolved / ",
                                  null !==
                                    (n =
                                      null == p
                                        ? void 0
                                        : p.unresolved_dispute_count) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                                  " disputed / ",
                                  A,
                                  " disputes resolved",
                                ],
                              }),
                              (0, r.jsx)(Z.V, { tabs: _ }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: Y.ModerationActionButtons,
                            children: [
                              (0, r.jsx)(Ue, {
                                ...e,
                                subject: p,
                                onClose: e.onClose,
                              }),
                              (0, r.jsx)(Fe, {
                                ...e,
                                subject: p,
                                onClose: e.onClose,
                              }),
                              e.subject &&
                                (0, r.jsx)(v.fu, {
                                  onClick: () => g("escalate"),
                                  children: m.T.Localize(
                                    "#moderation_escalation_escalate",
                                  ),
                                }),
                              (0, r.jsx)("button", {
                                onClick: () => g("sanction"),
                                children: "Sanction",
                              }),
                              !y &&
                                (0, r.jsx)("button", {
                                  disabled: !f,
                                  onClick: () => g("ownerdispute"),
                                  children: "Owner Dispute",
                                }),
                              y &&
                                (0, r.jsxs)("span", {
                                  children: [
                                    (0, r.jsx)("a", {
                                      href: `${l.TS.HELP_BASE_URL}tickermaster/ticket/${p.owner_dispute_details}`,
                                      children: m.T.Localize(
                                        "#moderation_already_owner_disputed",
                                      ),
                                    }),
                                    (0, r.jsx)("button", {
                                      onClick: () =>
                                        g("editownerdisputedetails"),
                                      className: Y.EditButton,
                                      children: (0, r.jsx)(Me.ffu, {}),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    "escalate" === h &&
                      (0, r.jsx)(b, { subject: x, onClose: () => g("main") }),
                    "sanction" === h &&
                      (0, r.jsx)(V, {
                        subject: x,
                        authorSteamId: e.authorSteamId,
                        onOK: async (t, n, r) => {
                          await j.mutateAsync({
                            eReason: r,
                            rgSanctions: t,
                            strNote: n,
                          }),
                            e.onClose(),
                            window.location.reload();
                        },
                        onCancel: () => g("main"),
                      }),
                    "ownerdispute" === h &&
                      (0, r.jsx)(ze, {
                        subject: x,
                        authorSteamId: e.authorSteamId,
                        onClose: () => g("main"),
                      }),
                    "editownerdisputedetails" === h &&
                      (0, r.jsx)(ke, {
                        subject: x,
                        onClose: () => g("main"),
                        currentDetails:
                          null !==
                            (a =
                              null == p ? void 0 : p.owner_dispute_details) &&
                          void 0 !== a
                            ? a
                            : "",
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function ke(e) {
        const { subject: t, onClose: n, currentDetails: s } = e,
          [i, a] = (0, o.useState)(s),
          l = (0, p.wy)(t.subject_type, t.subject_group_id, t.subject_id, i);
        return (0, r.jsxs)(A.Z, {
          children: [
            (0, r.jsxs)("label", {
              children: [
                m.T.Localize("#moderation_editownerdisputedetails_label"),
                (0, r.jsx)("input", {
                  type: "text",
                  value: i,
                  onChange: (e) => a(e.target.value),
                }),
              ],
            }),
            (0, r.jsxs)(A.Z, {
              className: Y.BottomButtons,
              children: [
                (0, r.jsx)(v.fu, {
                  onClick: async () => {
                    await l.mutateAsync(), n();
                  },
                  children: m.T.Localize(
                    "#moderation_editownerdisputedetails_save",
                  ),
                }),
                (0, r.jsx)(v.fu, {
                  onClick: n,
                  children: m.T.Localize("#moderation_ownerdispute_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      function ze(e) {
        const { authorSteamId: t, subject: n, onClose: s } = e,
          [i, a] = (0, o.useState)(""),
          l = (0, p.y4)(t, n.subject_type, n.subject_group_id, n.subject_id, i);
        return (0, r.jsxs)(A.Z, {
          className: Y.OwnerDisputeCtn,
          children: [
            (0, r.jsx)("div", {
              children: m.T.Localize("#moderation_ownerdispute_description"),
            }),
            (0, r.jsxs)("label", {
              children: [
                m.T.Localize("#moderation_ownerdispute_ticketmastercode"),
                " ",
                (0, r.jsx)("input", {
                  type: "text",
                  value: i,
                  onChange: (e) => a(e.target.value),
                }),
              ],
            }),
            (0, r.jsxs)(A.Z, {
              className: Y.BottomButtons,
              children: [
                (0, r.jsx)(v.fu, {
                  onClick: async () => {
                    await l.mutateAsync(), s();
                  },
                  children: m.T.Localize("#moderation_ownerdispute_dispute"),
                }),
                (0, r.jsx)(v.fu, {
                  onClick: s,
                  children: m.T.Localize("#moderation_ownerdispute_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      function Ue(e) {
        const { subject: t } = e,
          n = Le(e.clanSteamId, e.forumId, e.topicId, e.subjectId),
          s =
            t &&
            (t.unresolved_report_count > 0 ||
              t.unresolved_dispute_count > 0 ||
              (t.resolved === i.S6 && t.dispute_resolved !== i.CC) ||
              t.dispute_resolved === i.S6);
        return (0, r.jsx)("button", {
          onClick: async () => {
            await n.mutateAsync(), e.onClose();
          },
          disabled: !s,
          children: m.T.Localize("#moderation_actions_acquit"),
        });
      }
      function Fe(e) {
        const { subject: t } = e,
          n =
            t &&
            t.resolved !== i.z_ &&
            (t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0),
          a = (0, p.CS)(s.lN, e.topicId, e.subjectId);
        return (0, r.jsx)("button", {
          onClick: async () => {
            await a.mutateAsync({}), e.onClose();
          },
          disabled: !n,
          children: m.T.Localize("#moderation_actions_sustain"),
        });
      }
      function Le(e, t, n, r) {
        const i = (0, J.KV)(),
          a = (0, ye.jE)();
        return (0, Se.n)({
          mutationFn: async () => {
            const s = N.w.Init(we.Km);
            s.Body().set_steamid(e),
              s.Body().set_gidforum(t),
              s.Body().set_gidtopic(n),
              s.Body().set_gidpost(r);
            const a = await we.el.ResolveReportedPost(i, s);
            if (!a.BSuccess())
              throw new Error("Failed to acquit forum comment: " + a.GetEMsg());
            return a.Body();
          },
          onSuccess: async (e) => {
            await (0, p.iW)(a, s.lN, n, r);
          },
        });
      }
      function Ie(e, t, n, r) {
        const i = (0, J.KV)(),
          a = (0, ye.jE)();
        return (0, Se.n)({
          mutationFn: async (s) => {
            const a = N.w.Init(we.FD);
            a.Body().set_steamid(e),
              a.Body().set_gidforum(t),
              a.Body().set_gidtopic(n),
              a.Body().set_gidpost(r),
              a.Body().set_reason(s.eReason),
              a.Body().set_note(s.strNote);
            for (const e of s.rgSanctions) {
              const t = new we.RQ();
              t.set_sanction(e.sanction),
                void 0 !== e.days && t.set_days(e.days),
                a.Body().add_sanctions(t);
            }
            const o = await we.el.SanctionReportedPost(i, a);
            if (!o.BSuccess())
              throw new Error(
                "Failed to sanction forum comment: " + o.GetEResult(),
              );
            return o.Body();
          },
          onSuccess: async (e) => {
            await (0, p.iW)(a, s.lN, n, r);
          },
        });
      }
    },
    99171: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => i });
      var r = n(8527);
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function i(e, t) {
        let n = "0000000000000000000000000000000000000000";
        var i;
        "string" == typeof e
          ? (n = e)
          : e &&
            ((i = e),
            (n = [...i].map((e) => e.toString(16).padStart(2, "0")).join("")));
        let a = ".jpg";
        "0000000000000000000000000000000000000000" === n && (n = s),
          44 == n.length && ((a = n.slice(-4)), (n = n.slice(0, 40)));
        let o = r.TS.AVATAR_BASE_URL;
        switch (
          (o ||
            ((o = r.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (o += n.slice(0, 2) + "/")),
          (o += n),
          t)
        ) {
          case "X-Small":
          case "Small":
            break;
          case "Medium":
          case "MediumLarge":
            o += "_medium";
            break;
          case "Large":
          case "X-Large":
          case "FillArea":
            o += "_full";
        }
        return (o += a), o;
      }
    },
    11333: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => l, c: () => o });
      var r = n(78619),
        s = n(49845),
        i = n(58632),
        a = n.n(i);
      function o(e, t) {
        return new (a())(
          async (t) => {
            const n = [...t],
              s = await r.xt.GetPlayerLinkDetails(e, { steamids: n }),
              i = new Map();
            return (
              s
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  i.set(t.public_data.steamid, t);
                }),
              n.map((e) => {
                var t;
                return null !== (t = i.get(e)) && void 0 !== t ? t : null;
              })
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function l(e) {
        return (0, s.V)("PlayerLinkDetails", () => o(e));
      }
    },
    62220: (e, t, n) => {
      "use strict";
      n.d(t, { jn: () => c });
      var r = n(29233),
        s = n(8527),
        i = n(23809),
        a = n(88942),
        o = n(11333);
      function l(e) {
        return ["PlayerLinkDetails", e];
      }
      function c(e) {
        const t = (0, i.KV)(),
          n = (0, o.L)(t);
        return (0, a.I)(
          (function (e, t) {
            const n =
              "number" == typeof t
                ? r.b2
                    .InitFromAccountID(t, s.TS.EUNIVERSE)
                    .ConvertTo64BitString()
                : t;
            return {
              queryKey: l(n),
              queryFn: async () => {
                var t, r, s, i, a;
                if (n) {
                  const o = await e.load(n);
                  return (
                    null === (t = null == o ? void 0 : o.private_data) ||
                      void 0 === t ||
                      delete t.account_name,
                    null === (r = null == o ? void 0 : o.public_data) ||
                      void 0 === r ||
                      delete r.account_flags,
                    null === (s = null == o ? void 0 : o.public_data) ||
                      void 0 === s ||
                      delete s.ban_expires_time,
                    null === (i = null == o ? void 0 : o.public_data) ||
                      void 0 === i ||
                      delete i.privacy_state,
                    1 !==
                      (null === (a = null == o ? void 0 : o.public_data) ||
                      void 0 === a
                        ? void 0
                        : a.profile_state) &&
                      (null == o || delete o.private_data),
                    o
                  );
                }
                return null;
              },
              enabled: !!n,
            };
          })(n, e),
        );
      }
    },
    3049: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => i });
      var r = n(8527),
        s = n(13843);
      function i() {
        return (0, s.A)().languages.map((e) => {
          return 2 == (t = e.strISOCode).length && r.TS.COUNTRY
            ? `${t}-${r.TS.COUNTRY}`
            : t;
          var t;
        });
      }
    },
    49845: (e, t, n) => {
      "use strict";
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function s(...e) {
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
      var i = n(90626);
      n(7850);
      const a = (0, i.createContext)({ instances: {}, factories: {} });
      function o(e, t) {
        var n;
        const r = (0, i.useContext)(a),
          o = "string" == typeof e ? e : s(...e);
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
      n.d(t, { Bm: () => a, QD: () => o, f3: () => i, ip: () => l });
      var r = n(90626),
        s = n(92757);
      function i(e, t) {
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
        const s = new URLSearchParams(e.location.search.substring(1));
        if (null != n && null != n) {
          if (s.get(t) == n) return;
          s.set(t, n);
        } else {
          if (!s.has(t)) return;
          s.delete(t);
        }
        r
          ? e.replace(`?${s.toString()}`, { ...e.location.state })
          : e.push(`?${s.toString()}`);
      }
      function o(e, t) {
        const n = (0, s.W6)(),
          o = (0, s.zy)(),
          l = (0, r.useMemo)(() => {
            const n = i(o.search, e);
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
      function l(e, t, n = !1) {
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
    },
    38135: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => g, a: () => j });
      var r = n(7850),
        s = n(90626),
        i = n(52038),
        a = n(61859),
        o = n(95034),
        l = n(1990),
        c = n.n(l),
        u = n(32754),
        d = n(51272),
        p = n(76217),
        m = n(23310),
        h = n(92757);
      function g(e) {
        const {
            tabs: t,
            bDisableRouting: n,
            startingTab: a,
            classNameCtn: l,
            classNameTab: u,
            classNameTabContent: d,
            preferredFocus: g,
            bVerticalTabs: j,
          } = e,
          B = (0, h.zy)(),
          v = (0, h.W6)(),
          [A, b] = (0, s.useState)(() => {
            var e;
            return (
              a ||
              (!n &&
              (0, o.f3)(B, "tab") &&
              null !== (e = (0, o.f3)(B, "tab")) &&
              void 0 !== e
                ? e
                : "")
            );
          });
        (0, s.useEffect)(() => {
          if (!e.bDisableRouting && B) {
            const e = (0, o.f3)(B, "tab");
            e && b(e);
          }
        }, [B, B.key, e.bDisableRouting, b]);
        const x = s.useCallback(
            (e) => {
              b(e.key),
                n || (0, o.Bm)(v, "tab", e.key),
                e.onClick && e.onClick(e);
            },
            [n, v],
          ),
          f = t.filter((e) => !e.hidden);
        if (!f.length) return null;
        const y = f.find((e) => e.key === A) || f[0],
          S = g ? (null != a ? a : f[0].key) : void 0,
          w = (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(p.Z, {
                className: (0, i.A)(
                  c().GraphicalAssetsTabs,
                  j && c().GraphicalAssetsTabsVertical,
                  l,
                ),
                navEntryPreferPosition: g ? m.iU.PREFERRED_CHILD : m.iU.FIRST,
                children: f.map((e, t) =>
                  (0, r.jsx)(
                    _,
                    {
                      tab: e,
                      OnTabClick: x,
                      classNameTab: u,
                      active: e.key === y.key,
                      preferredFocus: S === e.key,
                    },
                    e.key,
                  ),
                ),
              }),
              y && (0, r.jsx)(p.Z, { className: d, children: y.contents }),
            ],
          });
        return j
          ? (0, r.jsx)(p.Z, {
              className: (0, i.A)(c().GraphicalAssetsTabsLayoutVertical),
              children: w,
            })
          : w;
      }
      function j(e) {
        const { statusType: t = "success", children: n } = e;
        let s = "";
        return (
          "success" === t
            ? (s = c().StatusSuccess)
            : "danger" === t
              ? (s = c().StatusDanger)
              : "caution" === t && (s = c().StatusCaution),
          (0, r.jsx)("div", {
            className: (0, i.A)(c().GraphicalAssetStatus, s),
            children: n,
          })
        );
      }
      function _(e) {
        const {
          tab: t,
          OnTabClick: n,
          classNameTab: s,
          active: o,
          preferredFocus: l,
        } = e;
        return (0, r.jsx)(d.e7, {
          condition: Boolean(t.statusToolTip || t.tooltip),
          wrap: (e) =>
            (0, r.jsx)(u.he, {
              toolTipContent: t.statusToolTip || t.tooltip,
              children: e,
            }),
          children: (0, r.jsxs)(p.Z, {
            className: (0, i.A)(
              c().GraphicalAssetsTab,
              o && c().Active,
              o && "ActiveTab",
              s,
            ),
            onActivate: () => n(t),
            preferredFocus: l,
            children: [
              Boolean(t.vo_warning) &&
                (0, r.jsx)(u.he, {
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
