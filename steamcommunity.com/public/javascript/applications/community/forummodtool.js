/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [140],
  {
    83077: (e) => {
      e.exports = {
        Flag: "_3dm-fM55uTgByZNQ-7FQKO",
        ReportList: "hnTX88aagY-cwkiefQvQx",
        ModerateCtn: "_2qBUNFM1eoRvT2ScOKJFUL",
        ModerationActionButtons: "_2xcVcE3CRCIKmxAjIyjoGj",
        ModerateLink: "_2LegBbkPqIlvkjCfpbo4V1",
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
    22: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          default: () => xe,
          useAcquitForumComment: () => Me,
          useSanctionForumComment: () => we,
        });
      var r = n(7850),
        i = n(32754),
        s = n(90626),
        a = n(78327),
        o = n(9154),
        l = n(68255),
        c = n(37049),
        u = n(90182),
        d = n(28395),
        m = n(63987),
        p = n(63275),
        g = n(30770),
        h = n.n(g),
        j = n(45699),
        B = n(76217);
      function A(e) {
        const { subject: t, onClose: n } = e,
          [i, a] = (0, s.useState)(10),
          o = (0, u.lY)(t.subject_type, t.subject_group_id, t.subject_id);
        return (0, r.jsxs)(B.Z, {
          className: h().EscalateSubjectDialogCtn,
          children: [
            (0, r.jsx)(B.Z, {
              children: d.T.Localize("#moderation_escalation_description"),
            }),
            (0, r.jsxs)("select", {
              className: h().EscalationLevelSelect,
              value: i,
              onChange: (e) => a(parseInt(e.target.value)),
              children: [
                (0, r.jsx)("option", {
                  value: 0,
                  children: d.T.Localize("#moderation_escalationlevel_any"),
                }),
                (0, r.jsx)("option", {
                  value: 1,
                  children: d.T.Localize(
                    "#moderation_escalationlevel_supervisor",
                  ),
                }),
                (0, r.jsx)("option", {
                  value: 10,
                  children: d.T.Localize("#moderation_escalationlevel_valve"),
                }),
              ],
            }),
            (0, r.jsxs)(B.Z, {
              className: h().BottomButtons,
              children: [
                (0, r.jsx)(j.fu, {
                  onClick: async () => {
                    await o.mutateAsync({ eNewLevel: i }), n();
                  },
                  children: d.T.Localize("#moderation_escalation_escalate"),
                }),
                (0, r.jsx)(j.fu, {
                  onClick: n,
                  children: p.u.Localize("#moderation_cancel"),
                }),
              ],
            }),
          ],
        });
      }
      var v = n(98580),
        _ = n.n(v),
        x = n(55388),
        f = n(59884),
        b = n.n(f);
      function y(e) {
        const [t, n] = (0, s.useState)(null),
          [i, a] = (0, s.useState)([]),
          [o, l] = (0, s.useState)(!1),
          [c, u] = (0, s.useState)(!1);
        let d = e.reasons;
        for (const e of i) d = d[e].children;
        const g = null !== t ? (0, m.V$)(t) : null,
          h = null !== t ? (0, m.GA)(t) : null,
          A = () => {
            null !== t
              ? n(null)
              : 0 === i.length
                ? e.onSelect(null)
                : a(i.slice(0, -1));
          };
        return (0, r.jsxs)("div", {
          children: [
            null === t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    className: b().BlockList,
                    children: d.map((t, s) => {
                      const o = () => {
                        if ((0, m.Ju)(t)) {
                          const e = [...i];
                          e.push(s), a(e);
                        } else {
                          if (!(0, m.X$)(t))
                            throw new Error("This should be unreachable.");
                          (0, m.V$)(t.value) || (0, m.GA)(t.value)
                            ? n(t.value)
                            : e.onSelect(t.value);
                        }
                      };
                      return (0, m.Ur)(t)
                        ? (0, r.jsx)(
                            j.Ii,
                            {
                              className: b().BlockListItem,
                              href: t.url,
                              children: p.u.Localize(t.strLocToken),
                            },
                            t.url,
                          )
                        : (0, r.jsxs)(
                            B.Z,
                            {
                              onActivate: o,
                              className: b().BlockListItem,
                              children: [
                                (0, r.jsx)("span", {
                                  children: (0, m.Ju)(t)
                                    ? p.u.Localize(t.strLocToken)
                                    : (0, m.Jt)(t.value),
                                }),
                                (0, m.Ju)(t) &&
                                  (0, r.jsx)("span", { children: "▶" }),
                              ],
                            },
                            s,
                          );
                    }),
                  }),
                  (0, r.jsx)(x.n9, { onClick: A, children: "Back" }),
                ],
              }),
            null !== t &&
              (0, r.jsxs)("div", {
                className: b().BlockList,
                children: [
                  (0, r.jsx)("div", {
                    className: b().BlockListItem,
                    children: (0, m.Jt)(t),
                  }),
                  null !== g &&
                    (0, r.jsxs)("label", {
                      children: [
                        (0, r.jsx)("input", {
                          type: "checkbox",
                          checked: o,
                          onChange: (e) => l(e.target.checked),
                        }),
                        " Targeted at women",
                      ],
                    }),
                  null !== h &&
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
                    className: b().BottomButtons,
                    children: [
                      (0, r.jsx)(x.n9, { onClick: A, children: "Back" }),
                      (0, r.jsx)(x.n9, {
                        onClick: () => {
                          let n = t;
                          null !== n &&
                            (o && null !== (0, m.V$)(n) && (n = (0, m.V$)(n)),
                            c && null !== (0, m.GA)(n) && (n = (0, m.GA)(n)),
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
      var S,
        M,
        w = n(52038),
        C = n(81393),
        T = n(88942),
        R = n(96762),
        z = n(80613),
        U = n.n(z),
        k = n(89068),
        F = n(56545);
      class Q extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.quicktext_id || k.Sg(Q.M()),
            z.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: k.qM.readUint32,
                    bw: k.gp.writeUint32,
                  },
                  requires_update: {
                    n: 2,
                    br: k.qM.readBool,
                    bw: k.gp.writeBool,
                  },
                  title: { n: 3, br: k.qM.readString, bw: k.gp.writeString },
                  hidden: { n: 4, br: k.qM.readBool, bw: k.gp.writeBool },
                  approved: { n: 5, br: k.qM.readBool, bw: k.gp.writeBool },
                  help_request_types: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: k.qM.readUint32,
                    pbr: k.qM.readPackedUint32,
                    bw: k.gp.writeRepeatedUint32,
                  },
                  content: { n: 7, c: L },
                  button_text: {
                    n: 8,
                    br: k.qM.readString,
                    bw: k.gp.writeString,
                  },
                  replacement: { n: 9, br: k.qM.readBool, bw: k.gp.writeBool },
                  payment_methods: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: k.qM.readUint32,
                    pbr: k.qM.readPackedUint32,
                    bw: k.gp.writeRepeatedUint32,
                  },
                  appids: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: k.qM.readUint32,
                    pbr: k.qM.readPackedUint32,
                    bw: k.gp.writeRepeatedUint32,
                  },
                  escalation_level: {
                    n: 12,
                    br: k.qM.readEnum,
                    bw: k.gp.writeEnum,
                  },
                  partner_only: {
                    n: 13,
                    br: k.qM.readBool,
                    bw: k.gp.writeBool,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = k.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return k.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return k.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (U().BinaryReader)(e),
            n = new Q();
          return Q.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (U().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (U().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickText";
        }
      }
      class L extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.content || k.Sg(L.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  content: { n: 1, br: k.qM.readString, bw: k.gp.writeString },
                  major_revision: {
                    n: 2,
                    br: k.qM.readUint32,
                    bw: k.gp.writeUint32,
                  },
                  minor_revision: {
                    n: 3,
                    br: k.qM.readUint32,
                    bw: k.gp.writeUint32,
                  },
                  author: { n: 4, br: k.qM.readUint32, bw: k.gp.writeUint32 },
                  last_update: {
                    n: 5,
                    br: k.qM.readUint32,
                    bw: k.gp.writeUint32,
                  },
                  language: { n: 6, br: k.qM.readInt32, bw: k.gp.writeInt32 },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = k.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return k.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return k.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (U().BinaryReader)(e),
            n = new L();
          return L.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (U().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (U().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportData_QuickTextContent";
        }
      }
      class I extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.quicktext_id || k.Sg(I.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  quicktext_id: {
                    n: 1,
                    br: k.qM.readUint32,
                    bw: k.gp.writeUint32,
                  },
                  language: { n: 2, br: k.qM.readString, bw: k.gp.writeString },
                  from_sql: { n: 3, br: k.qM.readBool, bw: k.gp.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = k.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return k.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return k.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (U().BinaryReader)(e),
            n = new I();
          return I.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (U().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (U().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Request";
        }
      }
      class q extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.quicktext || k.Sg(q.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  quicktext: { n: 1, c: Q },
                  english_reference: { n: 2, c: L },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = k.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return k.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return k.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (U().BinaryReader)(e),
            n = new q();
          return q.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (U().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new (U().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSupportAgents_GetQuickText_Response";
        }
      }
      class E extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.appid || k.Sg(E.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: k.qM.readUint32, bw: k.gp.writeUint32 },
                  log_type: { n: 2, br: k.qM.readString, bw: k.gp.writeString },
                  version_string: {
                    n: 3,
                    br: k.qM.readString,
                    bw: k.gp.writeString,
                  },
                  log_contents: {
                    n: 4,
                    br: k.qM.readString,
                    bw: k.gp.writeString,
                  },
                  request_id: {
                    n: 5,
                    br: k.qM.readUint64String,
                    bw: k.gp.writeUint64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = k.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return k.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return k.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (U().BinaryReader)(e),
            n = new E();
          return E.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (U().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (U().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Request";
        }
      }
      class O extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.id || k.Sg(O.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  id: {
                    n: 1,
                    br: k.qM.readUint64String,
                    bw: k.gp.writeUint64String,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = k.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return k.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return k.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (U().BinaryReader)(e),
            n = new O();
          return O.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (U().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (U().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_UploadUserApplicationLog_Response";
        }
      }
      class N extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.appid || k.Sg(N.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  appid: { n: 1, br: k.qM.readUint32, bw: k.gp.writeUint32 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = k.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return k.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return k.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (U().BinaryReader)(e),
            n = new N();
          return N.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (U().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new (U().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Request";
        }
      }
      class W extends z.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.request_id || k.Sg(W.M()),
            z.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  request_id: {
                    n: 1,
                    br: k.qM.readUint64String,
                    bw: k.gp.writeUint64String,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = k.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return k.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return k.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (U().BinaryReader)(e),
            n = new W();
          return W.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (U().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (U().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHelpRequestLogs_GetApplicationLogDemand_Response";
        }
      }
      !(function (e) {
        e.GetQuickText = function (e, t) {
          return e.SendMsg("SupportAgents.GetQuickText#1", (0, F.I8)(I, t), q, {
            bConstMethod: !0,
            ePrivilege: 5,
          });
        };
      })(S || (S = {})),
        (function (e) {
          (e.UploadUserApplicationLog = function (e, t) {
            return e.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, F.I8)(E, t),
              O,
              { ePrivilege: 1 },
            );
          }),
            (e.GetApplicationLogDemand = function (e, t) {
              return e.SendMsg(
                "HelpRequestLogs.GetApplicationLogDemand#1",
                (0, F.I8)(N, t),
                W,
                { ePrivilege: 1 },
              );
            });
        })(M || (M = {}));
      var D = n(23809);
      function K(e) {
        const [t, n] = (0, s.useState)(null),
          [i, o] = (0, s.useState)("main"),
          [l, c] = (0, s.useState)(!1),
          [u, p] = (0, s.useState)(!1),
          [g, h] = (0, s.useState)(null),
          [j, A] = (0, s.useState)(null),
          [v, f] = (0, s.useState)(null),
          [b, M] = (0, s.useState)(!1),
          [z, U] = (0, s.useState)(!1),
          [k, Q] = (0, s.useState)(""),
          L = l || u || g || j || v || b || z,
          q =
            ((E = e.authorSteamId),
            (0, T.I)({
              queryKey: ["get_primary_language_for_user", E],
              queryFn: async () => {
                const e = await fetch(
                    `${a.TS.COMMUNITY_BASE_URL}profiles/${E}/ajaxlanguagepreferences`,
                  ),
                  t = await e.json();
                if (1 === t.success) return t.preferences;
                throw new Error(
                  "Failed GetPrimaryLanguageForUser. EResult: " + t.success,
                );
              },
            }));
        var E;
        let O = 0;
        if (q.isSuccess) {
          const e = q.data;
          void 0 !== e.pref_primary_language && -1 !== e.pref_primary_language
            ? (O = e.pref_primary_language)
            : void 0 !== e.last_logon_langauge &&
              -1 !== e.last_logon_langauge &&
              (O = e.last_logon_langauge);
        }
        const N = (function (e, t) {
          const n = (0, D.KV)();
          return (0, T.I)({
            queryKey: ["get_quick_text", e, t],
            queryFn: async () => {
              if (null == e || void 0 === t) return null;
              const r = F.w.Init(I);
              r.Body().set_quicktext_id(e), r.Body().set_language((0, R.cE)(t));
              const i = await S.GetQuickText(n, r);
              if (1 !== i.GetEResult())
                throw new Error(
                  "useQuickText failed with EResult " + i.GetEResult(),
                );
              return i.Body().toObject();
            },
            enabled: void 0 !== e,
          });
        })((0, m.AH)(t), O);
        (0, s.useEffect)(() => {
          var e, t, n, r, i, s, a;
          Q(
            null !==
              (a =
                null !==
                  (r =
                    null ===
                      (n =
                        null ===
                          (t =
                            null === (e = N.data) || void 0 === e
                              ? void 0
                              : e.quicktext) || void 0 === t
                          ? void 0
                          : t.content) || void 0 === n
                      ? void 0
                      : n.content) && void 0 !== r
                  ? r
                  : null ===
                        (s =
                          null === (i = N.data) || void 0 === i
                            ? void 0
                            : i.english_reference) || void 0 === s
                    ? void 0
                    : s.content) && void 0 !== a
              ? a
              : "",
          );
        }, [N.data, q.data]);
        const W = !1,
          K = !1,
          P = !1;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            "reason" === i &&
              (0, r.jsx)(y, {
                reasons: m.UL,
                onSelect: (e) => {
                  n(e), o("main");
                },
              }),
            "main" === i &&
              (0, r.jsxs)(B.Z, {
                children: [
                  (0, r.jsxs)(B.Z, {
                    className: _().SanctionForm,
                    children: [
                      (0, r.jsx)("label", {
                        htmlFor: "reason",
                        children: "Reason:",
                      }),
                      (0, r.jsx)("button", {
                        id: "reason",
                        className: _().ClickableText,
                        onClick: () => o("reason"),
                        children:
                          null === t
                            ? d.T.Localize(
                                "#commentsanctiondialog_selectreason",
                              )
                            : (0, m.Jt)(t),
                      }),
                      (0, r.jsxs)("label", {
                        className: _().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: l,
                            onChange: (e) => c(e.target.checked),
                          }),
                          " Delete",
                        ],
                      }),
                      (0, r.jsxs)("label", {
                        className: _().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: u,
                            onChange: (e) => p(e.target.checked),
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
                          h(
                            "0" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != g ? g : 0,
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
                      W,
                      (0, r.jsx)("label", {
                        htmlFor: "communityban",
                        children: "Ban from community:",
                      }),
                      (0, r.jsxs)("select", {
                        id: "communityban",
                        onChange: (e) =>
                          A(
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
                      K,
                      (0, r.jsx)("label", {
                        htmlFor: "deletecomments",
                        children: "Delete comments since:",
                      }),
                      (0, r.jsxs)("select", {
                        id: "deletecomments",
                        disabled: z,
                        onChange: (e) =>
                          f(
                            "-1" === e.target.value
                              ? null
                              : parseInt(e.target.value),
                          ),
                        value: null != v ? v : -1,
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
                        className: _().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: b,
                            onChange: (e) => M(e.target.checked),
                          }),
                          " Permanent trade ban",
                        ],
                      }),
                      P,
                      (0, r.jsxs)("span", {
                        className: _().OneColumn,
                        children: [
                          (0, r.jsx)("input", {
                            type: "checkbox",
                            checked: z,
                            onChange: (e) => U(e.target.checked),
                          }),
                          " Mark as suspicious",
                        ],
                      }),
                      (0, r.jsx)("textarea", {
                        className: (0, w.A)(_().OneColumn, _().MessageTextArea),
                        placeholder: "Message to send",
                        value: k,
                        onChange: (e) => Q(e.target.value),
                      }),
                    ],
                  }),
                  (0, r.jsxs)(B.Z, {
                    className: _().BottomButtons,
                    children: [
                      (0, r.jsx)(x.Oh, {
                        onClick: e.onCancel,
                        children: "Cancel",
                      }),
                      (0, r.jsx)(x.n9, {
                        onClick: () => {
                          (0, C.wT)(
                            null !== t,
                            "eReason must be non-null to sanction",
                          );
                          const n = [];
                          l && n.push({ sanction: 1 }),
                            u && n.push({ sanction: 8 }),
                            g && n.push({ sanction: 3, days: g }),
                            j && n.push({ sanction: 2, days: j }),
                            v && n.push({ sanction: 5, days: v }),
                            b && n.push({ sanction: 4, days: -1 }),
                            z && n.push({ sanction: 7 }),
                            e.onOK(n, k.trim(), t);
                        },
                        disabled: null === t || !L,
                        children: "Sanction",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
      var P = n(38135),
        J = n(84811),
        H = n(83077),
        G = n(62490),
        V = n(22797),
        Z = n(62220),
        Y = n(77490),
        X = n(17083);
      const $ =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
        ee =
          n.p +
          "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
        te =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
      function ne(e) {
        const { rgSources: t, onIncrementalError: n, alt: i, ...a } = e,
          [o, l] = (0, s.useState)(0),
          c = t[o];
        return (0, r.jsx)("img", {
          onError: (e) => {
            l((e) => e + 1), null == n || n(e, c, o);
          },
          alt: i,
          ...a,
          src: c,
        });
      }
      var re = n(8527),
        ie = n(64238),
        se = n.n(ie),
        ae = n(16339),
        oe = n(99171);
      function le(e) {
        const {
            avatarURL: t,
            size: n,
            statusStyle: i,
            statusPosition: s,
            className: a,
            children: o,
            isOnline: l,
            isInGame: c,
            isWatchingBroadcast: u,
            isAwayOrSnooze: d,
            alt: m,
          } = e,
          p = [];
        return (
          t && p.push(t),
          p.push(
            (function (e) {
              switch (e) {
                case "X-Small":
                case "Small":
                  return (0, re.YJ)($);
                case "Medium":
                case "MediumLarge":
                  return (0, re.YJ)(te);
                case "Large":
                case "X-Large":
                case "FillArea":
                  return (0, re.YJ)(ee);
              }
            })(null != n ? n : "Medium"),
          ),
          (0, r.jsxs)("div", {
            className: se()(
              ae.AvatarHolder,
              {
                [ae.Offline]: !l,
                [ae.Online]: l,
                [ae.InGame]: c,
                [ae.WatchingBroadcast]: u,
                [ae.AwayOrSnooze]: d,
              },
              a,
            ),
            "data-size": n,
            "data-status-position": s,
            children: [
              (0, r.jsx)("div", { className: ae.AvatarStatus, style: i }),
              (0, r.jsx)(ne, {
                className: se()(ae.Avatar),
                rgSources: p,
                draggable: !1,
                alt: m,
              }),
              o,
            ],
          })
        );
      }
      function ce(e) {
        var t, n, i, s, a, o, l;
        const {
          playerLinkDetails: c,
          animatedAvatar: u,
          avatarFrame: d,
          size: m,
          ...p
        } = e;
        let g = (0, oe.t)(
          null === (t = c.public_data) || void 0 === t
            ? void 0
            : t.sha_digest_avatar,
          m,
        );
        return (
          (null === (n = null == u ? void 0 : u.image_small) || void 0 === n
            ? void 0
            : n.length) &&
            (g = re.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + u.image_small),
          (0, r.jsx)(le, {
            avatarURL: g,
            size: m,
            isOnline:
              1 ===
              (null === (i = c.private_data) || void 0 === i
                ? void 0
                : i.persona_state),
            isInGame:
              void 0 !==
              (null === (s = c.private_data) || void 0 === s
                ? void 0
                : s.game_id),
            isWatchingBroadcast:
              void 0 !==
              (null === (a = c.private_data) || void 0 === a
                ? void 0
                : a.watching_broadcast_accountid),
            isAwayOrSnooze:
              3 ===
                (null === (o = c.private_data) || void 0 === o
                  ? void 0
                  : o.persona_state) ||
              4 ===
                (null === (l = c.private_data) || void 0 === l
                  ? void 0
                  : l.persona_state),
            ...p,
          })
        );
      }
      var ue = n(20609);
      function de(e) {
        const { subject: t } = e;
        return t ? (0, r.jsx)(pe, { ...e }) : (0, r.jsx)(me, {});
      }
      function me(e) {
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
                    children: d.T.Localize("#subjectauditlog_noentries"),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function pe(e) {
        var t, n, i, s, a;
        const { subject: o } = e,
          l = (0, u.Kt)(
            null == o ? void 0 : o.subject_type,
            null == o ? void 0 : o.subject_group_id,
            null == o ? void 0 : o.subject_id,
          ),
          c =
            null !==
              (i =
                null ===
                  (n =
                    null === (t = null == l ? void 0 : l.data) || void 0 === t
                      ? void 0
                      : t.entries) || void 0 === n
                  ? void 0
                  : n.length) && void 0 !== i
              ? i
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
                          children: d.T.Localize("#subjectauditlog_noentries"),
                        }),
                      }),
                    l &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          l.isLoading &&
                            (0, r.jsx)("tr", {
                              children: (0, r.jsx)("td", {
                                colSpan: 4,
                                children: (0, r.jsx)(V.t, {}),
                              }),
                            }),
                          l.isError &&
                            (0, r.jsx)("tr", {
                              children: (0, r.jsx)("td", {
                                colSpan: 4,
                                children: d.T.Localize(
                                  "#subjectauditlog_error",
                                ),
                              }),
                            }),
                          l.isSuccess &&
                            0 === c &&
                            (0, r.jsx)("tr", {
                              children: (0, r.jsx)("td", {
                                colSpan: 4,
                                children: d.T.Localize(
                                  "#subjectauditlog_noentries",
                                ),
                              }),
                            }),
                          l.isSuccess &&
                            c > 0 &&
                            (null ===
                              (a =
                                null === (s = l.data) || void 0 === s
                                  ? void 0
                                  : s.entries) || void 0 === a
                              ? void 0
                              : a.map((e) =>
                                  (0, r.jsx)(ge, { entry: e }, e.timestamp),
                                )),
                        ],
                      }),
                  ],
                }),
              ],
            }),
        });
      }
      function ge(e) {
        var t, n;
        const { entry: i } = e,
          s = (0, Z.jn)(i.actor_steamid);
        return s.isSuccess && s.data
          ? (0, r.jsxs)("tr", {
              children: [
                (0, r.jsx)("td", { children: (0, Y.P0)(i.timestamp, !1, "") }),
                (0, r.jsxs)("td", {
                  children: [
                    (0, r.jsx)("a", {
                      href: `${a.TS.COMMUNITY_BASE_URL}profiles/${i.actor_steamid}`,
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
                    (0, m.fg)(i.action),
                    i.automated_action &&
                      (0, r.jsx)(r.Fragment, { children: " (Automated)" }),
                  ],
                }),
                (0, r.jsx)("td", {
                  children: (0, r.jsx)(he, {
                    eAction: i.action,
                    jsonData: i.additional_json_data,
                  }),
                }),
              ],
            })
          : null;
      }
      function he(e) {
        const { eAction: t, jsonData: n } = e;
        let i = {};
        switch ((n && (i = JSON.parse(n)), t)) {
          case 1:
          case 4:
          case 7:
            return (0, r.jsxs)(r.Fragment, {
              children: ["Report ID: ", i.report_id],
            });
          case 2:
            return (0, r.jsxs)(r.Fragment, {
              children: [
                "Reason: ",
                (0, m.Jt)(i.reason),
                1 !== i.resolution &&
                  14 !== i.resolution &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("br", {}),
                      "Resolution: ",
                      (0, m.l)(i.resolution),
                    ],
                  }),
                i.sanctions &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("br", {}),
                      "Sanctions: ",
                      i.sanctions.map(m.cB).join(", "),
                    ],
                  }),
              ],
            });
          case 5:
            return (0, r.jsxs)(r.Fragment, {
              children: [
                "is_csam" in i &&
                  (0, r.jsxs)(r.Fragment, {
                    children: ["Set CSAM to ", i.is_csam],
                  }),
                "is_terrorism" in i &&
                  (0, r.jsxs)(r.Fragment, {
                    children: ["Set terrorist content to ", i.is_terrorism],
                  }),
              ],
            });
          case 6:
            return (0, r.jsxs)(r.Fragment, {
              children: ["New level: ", (0, m.ar)(i.level)],
            });
          default:
            return null;
        }
      }
      function je(e) {
        var t;
        const { subject: n } = e,
          i = n && n.reports && n.reports.length > 0;
        return (0, r.jsx)("table", {
          className: ue.ContentReportsTable,
          children: (0, r.jsxs)("tbody", {
            children: [
              !i &&
                (0, r.jsx)("tr", {
                  children: (0, r.jsx)("td", {
                    colSpan: 4,
                    children: d.T.Localize("#contentreportslist_noreports"),
                  }),
                }),
              i &&
                (null === (t = n.reports) || void 0 === t
                  ? void 0
                  : t.map((e) => (0, r.jsx)(Be, { report: e }, e.report_id))),
            ],
          }),
        });
      }
      function Be(e) {
        var t, n;
        const { report: i } = e,
          s = (0, Z.jn)(i.reporter_steamid);
        if (!s.isSuccess) return null;
        if (!(null === (t = s.data) || void 0 === t ? void 0 : t.public_data))
          return null;
        const o = !!i.time_disputed && 0 === i.dispute_resolved,
          l =
            0 !== i.resolved && (!i.time_disputed || 0 !== i.dispute_resolved),
          c = 0 !== i.time_dispute_resolved,
          u = 1 === i.resolved;
        return (0, r.jsxs)("tr", {
          children: [
            (0, r.jsx)("td", { children: (0, Y.P0)(i.time_reported, !1, "") }),
            (0, r.jsxs)("td", {
              children: [
                (0, r.jsx)(X.N_, {
                  to: `${a.TS.COMMUNITY_BASE_URL}profiles/${i.reporter_steamid}`,
                  children: (0, r.jsx)(ce, {
                    playerLinkDetails: s.data,
                    size: "X-Small",
                    alt: "Reporter",
                  }),
                }),
                " ",
                (0, r.jsx)(X.N_, {
                  to: `${a.TS.COMMUNITY_BASE_URL}profiles/${i.reporter_steamid}`,
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
                2 !== i.report_reason &&
                (0, r.jsx)("span", { children: (0, m.Jt)(i.report_reason) }),
            }),
            (0, r.jsxs)("td", {
              children: [
                u &&
                  !o &&
                  !c &&
                  (0, r.jsx)("span", {
                    children: d.T.Localize(
                      "#contentreportslist_acquitted_at",
                      (0, Y.P0)(i.time_resolved, !1, ""),
                    ),
                  }),
                l &&
                  !u &&
                  !o &&
                  !c &&
                  (0, r.jsx)("span", {
                    children: d.T.Localize(
                      "#contentreportslist_resolved_at",
                      (0, Y.P0)(i.time_resolved, !1, ""),
                    ),
                  }),
                o &&
                  !c &&
                  (0, r.jsx)("span", {
                    children: d.T.Localize(
                      "#contentreportslist_disputed_at",
                      (0, Y.P0)(i.time_disputed, !1, ""),
                    ),
                  }),
                c &&
                  (0, r.jsx)("span", {
                    children: d.T.Localize(
                      "#contentreportslist_dispute_resolved_at",
                      (0, Y.P0)(i.time_dispute_resolved, !1, ""),
                    ),
                  }),
                !o && (0, r.jsx)("span", { children: i.report_text }),
                o &&
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
      var Ae = n(29385),
        ve = n(61739),
        _e = n(60690);
      function xe(e) {
        const [t, n] = (0, s.useState)(!1),
          o = (0, u.kZ)(1, e.topicId);
        let l = null;
        if (o.isSuccess)
          for (const t of o.data.subjects)
            t.subject_id === e.subjectId && (l = t);
        const c =
            l &&
            (l.unresolved_report_count > 0 || l.unresolved_dispute_count > 0),
          m = (0, r.jsx)("span", {
            className: H.ModerateLink,
            children: (0, r.jsxs)("a", {
              onClick: () => n(!0),
              children: [
                c &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("img", {
                        className: H.Flag,
                        src: `${a.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                      }),
                      " ",
                    ],
                  }),
                d.T.Localize("#commentsanctiondialog_moderate"),
              ],
            }),
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            t && (0, r.jsx)(be, { onClose: () => n(!1), ...e, subject: l }),
            l &&
              (0, r.jsx)(i.Gq, {
                toolTipContent: (0, r.jsx)(fe, { subject: l }),
                direction: "bottom",
                nDelayShowMS: 0,
                children: m,
              }),
            !l && m,
          ],
        });
      }
      function fe(e) {
        const { subject: t } = e;
        if (!t || !t.reports) return null;
        const n = (0, G.D5)(t.reports, (e) => e.report_reason);
        return (
          n.sort((e, t) => e[1] - t[1]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("div", {
                children: d.T.Localize("#reasonlist_title"),
              }),
              n.map(([e, t]) =>
                (0, r.jsx)(
                  "div",
                  {
                    children: d.T.Localize(
                      "#reasonlist_reasonwithcount",
                      (0, m.Jt)(e),
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
      function be(e) {
        var t, n;
        const { subject: i } = e,
          [a, u] = (0, s.useState)("main"),
          m = we(e.clanSteamId, e.forumId, e.topicId, e.subjectId),
          p = [
            {
              name: "History",
              key: "history",
              contents: (0, r.jsx)(J.tH, {
                children: (0, r.jsx)(de, { subject: i }),
              }),
            },
            {
              name: "Reports",
              key: "reports",
              contents: (0, r.jsx)(J.tH, {
                children: (0, r.jsx)(je, { subject: i }),
              }),
            },
          ];
        let g = 0,
          h = 0;
        if (i)
          for (const e of i.reports)
            e.time_resolved && !e.time_disputed && g++,
              e.time_dispute_resolved && h++;
        return (0, r.jsx)(c.w, {
          onlyPopoutIfNeeded: !0,
          popupHeight: 340,
          popupWidth: 640,
          strTitle: "Moderate subject",
          children: (0, r.jsx)(o.eV, {
            bAllowFullSize: !0,
            title: "Moderate",
            "aria-describedby": "moderate",
            onCancel: e.onClose,
            className: H.ModerateDialog,
            children: (0, r.jsx)(l.f3, {
              children: (0, r.jsx)(l.a3, {
                children: (0, r.jsxs)("div", {
                  style: { display: "contents" },
                  children: [
                    "main" === a &&
                      (0, r.jsxs)("div", {
                        className: H.ModerateCtn,
                        children: [
                          (0, r.jsxs)("div", {
                            className: H.ModerationData,
                            children: [
                              (0, r.jsxs)("div", {
                                children: [
                                  null !==
                                    (t =
                                      null == i
                                        ? void 0
                                        : i.unresolved_report_count) &&
                                  void 0 !== t
                                    ? t
                                    : 0,
                                  " unresolved / ",
                                  g,
                                  " resolved / ",
                                  null !==
                                    (n =
                                      null == i
                                        ? void 0
                                        : i.unresolved_dispute_count) &&
                                  void 0 !== n
                                    ? n
                                    : 0,
                                  " disputed / ",
                                  h,
                                  " disputes resolved",
                                ],
                              }),
                              (0, r.jsx)(P.V, { tabs: p }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: H.ModerationActionButtons,
                            children: [
                              (0, r.jsx)(ye, {
                                ...e,
                                subject: i,
                                onClose: e.onClose,
                              }),
                              (0, r.jsx)(Se, {
                                ...e,
                                subject: i,
                                onClose: e.onClose,
                              }),
                              e.subject &&
                                (0, r.jsx)(j.fu, {
                                  onClick: () => u("escalate"),
                                  children: d.T.Localize(
                                    "#moderation_escalation_escalate",
                                  ),
                                }),
                              (0, r.jsx)("button", {
                                onClick: () => u("sanction"),
                                children: "Sanction",
                              }),
                            ],
                          }),
                        ],
                      }),
                    "escalate" === a &&
                      (0, r.jsx)(A, { subject: i, onClose: () => u("main") }),
                    "sanction" === a &&
                      (0, r.jsx)(K, {
                        subject: i,
                        authorSteamId: e.authorSteamId,
                        onOK: async (t, n, r) => {
                          await m.mutateAsync({
                            eReason: r,
                            rgSanctions: t,
                            strNote: n,
                          }),
                            e.onClose(),
                            window.location.reload();
                        },
                        onCancel: () => u("main"),
                      }),
                  ],
                }),
              }),
            }),
          }),
        });
      }
      function ye(e) {
        const { subject: t } = e,
          n = Me(e.clanSteamId, e.forumId, e.topicId, e.subjectId),
          i =
            t &&
            (t.unresolved_report_count > 0 ||
              t.unresolved_dispute_count > 0 ||
              (14 === t.resolved && 1 !== t.dispute_resolved) ||
              14 === t.dispute_resolved);
        return (0, r.jsx)("button", {
          onClick: async () => {
            await n.mutateAsync(), e.onClose();
          },
          disabled: !i,
          children: d.T.Localize("#moderation_actions_acquit"),
        });
      }
      function Se(e) {
        const { subject: t } = e,
          n =
            t &&
            0 !== t.resolved &&
            (t.unresolved_dispute_count > 0 || t.unresolved_report_count > 0),
          i = (0, u.CS)(1, e.topicId, e.subjectId);
        return (0, r.jsx)("button", {
          onClick: async () => {
            await i.mutateAsync({}), e.onClose();
          },
          disabled: !n,
          children: d.T.Localize("#moderation_actions_sustain"),
        });
      }
      function Me(e, t, n, r) {
        const i = (0, D.KV)(),
          s = (0, Ae.jE)();
        return (0, ve.n)({
          mutationFn: async () => {
            const s = F.w.Init(_e.Km);
            s.Body().set_steamid(e),
              s.Body().set_gidforum(t),
              s.Body().set_gidtopic(n),
              s.Body().set_gidpost(r);
            const a = await _e.el.ResolveReportedPost(i, s);
            if (!a.BSuccess())
              throw new Error("Failed to acquit forum comment: " + a.GetEMsg());
            return a.Body();
          },
          onSuccess: async (e) => {
            await (0, u.iW)(s, 1, n, r);
          },
        });
      }
      function we(e, t, n, r) {
        const i = (0, D.KV)(),
          s = (0, Ae.jE)();
        return (0, ve.n)({
          mutationFn: async (s) => {
            const a = F.w.Init(_e.FD);
            a.Body().set_steamid(e),
              a.Body().set_gidforum(t),
              a.Body().set_gidtopic(n),
              a.Body().set_gidpost(r),
              a.Body().set_reason(s.eReason),
              a.Body().set_note(s.strNote);
            for (const e of s.rgSanctions) {
              const t = new _e.RQ();
              t.set_sanction(e.sanction),
                void 0 !== e.days && t.set_days(e.days),
                a.Body().add_sanctions(t);
            }
            const o = await _e.el.SanctionReportedPost(i, a);
            if (!o.BSuccess())
              throw new Error(
                "Failed to sanction forum comment: " + o.GetEResult(),
              );
            return o.Body();
          },
          onSuccess: async (e) => {
            await (0, u.iW)(s, 1, n, r);
          },
        });
      }
    },
    99171: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => s });
      var r = n(8527);
      const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let n = "0000000000000000000000000000000000000000";
        var s;
        "string" == typeof e
          ? (n = e)
          : e &&
            ((s = e),
            (n = [...s].map((e) => e.toString(16).padStart(2, "0")).join("")));
        let a = ".jpg";
        "0000000000000000000000000000000000000000" === n && (n = i),
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
      var r = n(37735),
        i = n(49845),
        s = n(58632),
        a = n.n(s);
      function o(e, t) {
        return new (a())(
          async (t) => {
            const n = [...t],
              i = await r.xt.GetPlayerLinkDetails(e, { steamids: n }),
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
    62220: (e, t, n) => {
      "use strict";
      n.d(t, { jn: () => c });
      var r = n(29233),
        i = n(8527),
        s = n(23809),
        a = n(88942),
        o = n(11333);
      function l(e) {
        return ["PlayerLinkDetails", e];
      }
      function c(e) {
        const t = (0, s.KV)(),
          n = (0, o.L)(t);
        return (0, a.I)(
          (function (e, t) {
            const n =
              "number" == typeof t
                ? r.b2
                    .InitFromAccountID(t, i.TS.EUNIVERSE)
                    .ConvertTo64BitString()
                : t;
            return {
              queryKey: l(n),
              queryFn: async () => {
                var t, r, i, s, a;
                if (n) {
                  const o = await e.load(n);
                  return (
                    null === (t = null == o ? void 0 : o.private_data) ||
                      void 0 === t ||
                      delete t.account_name,
                    null === (r = null == o ? void 0 : o.public_data) ||
                      void 0 === r ||
                      delete r.account_flags,
                    null === (i = null == o ? void 0 : o.public_data) ||
                      void 0 === i ||
                      delete i.ban_expires_time,
                    null === (s = null == o ? void 0 : o.public_data) ||
                      void 0 === s ||
                      delete s.privacy_state,
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
      n.d(t, { J: () => s });
      var r = n(8527),
        i = n(48891);
      function s() {
        return (0, i.A)().languages.map((e) => {
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
      n.d(t, { Bm: () => a, QD: () => o, f3: () => s, ip: () => l });
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
      function o(e, t) {
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
  },
]);
