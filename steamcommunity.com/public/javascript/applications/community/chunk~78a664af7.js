/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [78010],
    {
      23582: (G, te, i) => {
        "use strict";
        i.d(te, { l: () => Ct });
        var t = i(7850),
          Q = i(86336),
          F = i(68031),
          W = i(15252),
          N = i(75083),
          V = i(24660),
          f = i(19298),
          C = i(86067),
          l = i(86392),
          u = i(13725),
          b = i(72524),
          A = i(99412),
          R = i(71742),
          H = i(72604),
          O = i(35038),
          P = i(64981),
          g = i(21113),
          z = i(20476),
          U = i(4806),
          d = i(80613),
          m = i.n(d),
          n = i(75245),
          de = Object.defineProperty,
          me = (r, e, s) =>
            e in r
              ? de(r, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (r[e] = s),
          E = (r, e, s) => me(r, typeof e != "symbol" ? e + "" : e, s);
        function pe(r) {
          return "unknown EHelpRequestType ( " + r + " )";
        }
        function Le(r) {
          return "unknown EHelpRequestState ( " + r + " )";
        }
        function Ie(r) {
          return "unknown EHelpRequestReviewState ( " + r + " )";
        }
        function J(r) {
          return "unknown EHelpRequestStatsRollupInterval ( " + r + " )";
        }
        function ge(r) {
          return "unknown EHelpRequestStatsResponderType ( " + r + " )";
        }
        function ke(r) {
          return "unknown EHelpIssue ( " + r + " )";
        }
        function ie(r) {
          return "unknown EHelpRequestEscalationLevel ( " + r + " )";
        }
        function Fe(r) {
          return "unknown EHelpRequestMsgType ( " + r + " )";
        }
        function $(r) {
          return "unknown EHelpRequestAction ( " + r + " )";
        }
        function Pe(r) {
          return "unknown EHelpRequestSortOrder ( " + r + " )";
        }
        function ae(r) {
          return "unknown EHelpRequestPOPType ( " + r + " )";
        }
        function qe(r) {
          return "unknown EAnnouncementPlacement ( " + r + " )";
        }
        function fe(r) {
          return "unknown ETickerCategoryLanguageRule ( " + r + " )";
        }
        function v(r) {
          return "unknown EPreapprovalResolution ( " + r + " )";
        }
        function at(r) {
          return "unknown EHelpRequestFeedbackCategory ( " + r + " )";
        }
        function Pt(r) {
          return "unknown EHelpRequestFeedbackTargetType ( " + r + " )";
        }
        function qt(r) {
          return "unknown EFeedbackState ( " + r + " )";
        }
        function Wt(r) {
          return "unknown ESupportActionSource ( " + r + " )";
        }
        function Ht(r) {
          return "unknown ERefundSupportAction ( " + r + " )";
        }
        const he = class y extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              y.prototype.quicktext_id || n.Sg(y.M()),
              d.Message.initialize(this, e, 0, -1, [6, 10, 11], null);
          }
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    requires_update: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    title: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                    hidden: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                    approved: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                    help_request_types: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    content: { n: 7, c: We },
                    button_text: {
                      n: 8,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    replacement: {
                      n: 9,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    payment_methods: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    escalation_level: {
                      n: 12,
                      br: n.qM.readEnum,
                      bw: n.gp.writeEnum,
                    },
                    partner_only: {
                      n: 13,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
          }
          toObject(e = !1) {
            return y.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(y.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(y.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new y();
            return y.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(y.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(y.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickText";
          }
        };
        E(he, "sm_m"), E(he, "sm_mbf");
        let ot = he;
        const ve = class S extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              S.prototype.content || n.Sg(S.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    content: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    major_revision: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    minor_revision: {
                      n: 3,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    author: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    last_update: {
                      n: 5,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    language: { n: 6, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
          }
          toObject(e = !1) {
            return S.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(S.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(S.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new S();
            return S.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(S.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(S.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportData_QuickTextContent";
          }
        };
        E(ve, "sm_m"), E(ve, "sm_mbf");
        let We = ve;
        const be = class j extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.quicktext_id || n.Sg(j.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    quicktext_id: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    language: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    from_sql: { n: 3, br: n.qM.readBool, bw: n.gp.writeBool },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = n.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(j.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new j();
            return j.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(j.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(j.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Request";
          }
        };
        E(be, "sm_m"), E(be, "sm_mbf");
        let He = be;
        const ye = class x extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              x.prototype.quicktext || n.Sg(x.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    quicktext: { n: 1, c: ot },
                    english_reference: { n: 2, c: We },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(x.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(x.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new x();
            return x.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(x.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(x.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSupportAgents_GetQuickText_Response";
          }
        };
        E(ye, "sm_m"), E(ye, "sm_mbf");
        let lt = ye;
        const Se = class B extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.appid || n.Sg(B.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                    log_type: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    version_string: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    log_contents: {
                      n: 4,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    request_id: {
                      n: 5,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(B.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new B();
            return B.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(B.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(B.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Request";
          }
        };
        E(Se, "sm_m"), E(Se, "sm_mbf");
        let ct = Se;
        const je = class M extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              M.prototype.id || n.Sg(M.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
          }
          toObject(e = !1) {
            return M.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(M.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(M.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new M();
            return M.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(M.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(M.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_UploadUserApplicationLog_Response";
          }
        };
        E(je, "sm_m"), E(je, "sm_mbf");
        let ut = je;
        const xe = class T extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              T.prototype.appid || n.Sg(T.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = n.w0(T.M())), T.sm_mbf;
          }
          toObject(e = !1) {
            return T.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(T.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(T.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new T();
            return T.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(T.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(T.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Request";
          }
        };
        E(xe, "sm_m"), E(xe, "sm_mbf");
        let dt = xe;
        const Be = class w extends d.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.request_id || n.Sg(w.M()),
              d.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    request_id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, s) {
            return n.BT(w.M(), e, s);
          }
          static fromObject(e) {
            return n.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let s = new (m().BinaryReader)(e),
              a = new w();
            return w.deserializeBinaryFromReader(a, s);
          }
          static deserializeBinaryFromReader(e, s) {
            return n.zj(w.MBF(), e, s);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, s) {
            n.i0(w.M(), e, s);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CHelpRequestLogs_GetApplicationLogDemand_Response";
          }
        };
        E(Be, "sm_m"), E(Be, "sm_mbf");
        let mt = Be;
        var Me;
        ((r) => {
          function e(s, a, p) {
            return s.SendMsg(
              "SupportAgents.GetQuickText#1",
              (0, O.I8)(He, a, p),
              lt,
              { bConstMethod: !0, ePrivilege: 5 },
            );
          }
          r.GetQuickText = e;
        })(Me || (Me = {}));
        var Ne;
        ((r) => {
          function e(a, p, h) {
            return a.SendMsg(
              "HelpRequestLogs.UploadUserApplicationLog#1",
              (0, O.I8)(ct, p, h),
              ut,
              { ePrivilege: 1 },
            );
          }
          r.UploadUserApplicationLog = e;
          function s(a, p, h) {
            return a.SendMsg(
              "HelpRequestLogs.GetApplicationLogDemand#1",
              (0, O.I8)(dt, p, h),
              mt,
              { ePrivilege: 1 },
            );
          }
          r.GetApplicationLogDemand = s;
        })(Ne || (Ne = {}));
        var pt = i(68312),
          Ge = i(66243),
          Qe = i(88942),
          D = i(90626),
          Te = i(56718),
          gt = i(85599),
          oe = i(36707),
          we = i(3166),
          ft = i(98580),
          L = i.n(ft),
          ht = i(14432);
        const vt = {
          [P.lN]: [g.lV, g.WA, g.XG, g.u1, g.Nd],
          [P.NC]: [g.rf, g.M6, g.WA, g.o8, g.Nd],
        };
        function bt(r) {
          var e;
          const [s, a] = (0, D.useState)(null),
            [p, h] = (0, D.useState)("main"),
            [c, Y] = (0, D.useState)(!1),
            [_, Ae] = (0, D.useState)(!1),
            [K, le] = (0, D.useState)(null),
            [I, Z] = (0, D.useState)(null),
            [k, ne] = (0, D.useState)(null),
            [se, ce] = (0, D.useState)(!1),
            [X, ue] = (0, D.useState)(!1),
            [ee, re] = (0, D.useState)(z.HH),
            [ze, Ke] = (0, D.useState)(""),
            Je =
              r.rtContentCreatedAt !== void 0
                ? (Date.now() / 1e3 - r.rtContentCreatedAt) / (30 * 86400)
                : !1,
            Ye =
              (e = r.subject.subject_type
                ? vt[r.subject.subject_type]
                : void 0) != null
                ? e
                : [],
            Ot = c || _ || K || I || k || se || X,
            Ue = St(r.authorSteamID);
          let De = A.Bhc;
          if (Ue.isSuccess) {
            const o = Ue.data;
            o.pref_primary_language !== void 0 && o.pref_primary_language !== -1
              ? (De = o.pref_primary_language)
              : o.last_logon_langauge !== void 0 &&
                o.last_logon_langauge !== -1 &&
                (De = o.last_logon_langauge);
          }
          const Lt = (0, l.AH)(s),
            Oe = yt(Lt, De);
          (0, D.useEffect)(() => {
            var o, et, tt, nt, st, rt, it;
            Ke(
              (it =
                (rt =
                  (tt =
                    (et = (o = Oe.data) == null ? void 0 : o.quicktext) == null
                      ? void 0
                      : et.content) == null
                    ? void 0
                    : tt.content) != null
                  ? rt
                  : (st =
                        (nt = Oe.data) == null
                          ? void 0
                          : nt.english_reference) == null
                    ? void 0
                    : st.content) != null
                ? it
                : "",
            );
          }, [Oe.data, Ue.data]);
          const Ze = !1,
            Xe = !1,
            $e = !1,
            It = async () => {
              (0, R.wT)(s !== null, "eReason must be non-null to sanction");
              const o = [];
              c && o.push({ sanction: U.EF }),
                _ && o.push({ sanction: U.Cv }),
                K && o.push({ sanction: U.ME, days: K }),
                I && o.push({ sanction: U.sR, days: I }),
                k && o.push({ sanction: U.bX, days: k }),
                se && o.push({ sanction: U.Fh, days: -1 }),
                X && o.push({ sanction: U.X5 }),
                ee === z.lp
                  ? o.push({ sanction: U.nw, escalate_to: z.lp })
                  : ee === z.PV &&
                    o.push({ sanction: U.nw, escalate_to: z.PV }),
                await r.sanctionMutation.mutateAsync({
                  sanctions: o,
                  message: ze.trim(),
                  reason: s,
                }),
                r.onSanction();
            },
            kt = (o) => {
              a(o), h("main");
            },
            Ft = (o) => {
              o ? (ue(!0), ne(7), a(g.rU)) : (ue(!1), ne(-1));
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              p === "reason" &&
                (0, t.jsx)(ht.F, { reasons: l.UL, onSelect: kt }),
              p === "main" &&
                (0, t.jsxs)(f.Z, {
                  children: [
                    (0, t.jsxs)(f.Z, {
                      className: L().SanctionForm,
                      children: [
                        r.sanctionMutation.isError &&
                          (0, t.jsxs)("div", {
                            className: (0, oe.A)(
                              L().OneColumn,
                              L().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Te.Q9b, {}),
                              " Error: ",
                              r.sanctionMutation.error.message,
                            ],
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "reason",
                          children: "Reason:",
                        }),
                        (0, t.jsx)("button", {
                          id: "reason",
                          className: L().ClickableText,
                          onClick: () => h("reason"),
                          children:
                            s === null
                              ? C.T.Localize(
                                  "#commentsanctiondialog_selectreason",
                                )
                              : (0, l.Jt)(s),
                        }),
                        Ye.length > 0 &&
                          (0, t.jsx)("div", {
                            className: L().QuickReasons,
                            children: Ye.map((o) =>
                              (0, t.jsx)(
                                N.$,
                                {
                                  onClick: () => a(s === o ? null : o),
                                  size: "1",
                                  variant: s === o ? "basic" : "dark",
                                  children: (0, l.Jt)(o),
                                },
                                o,
                              ),
                            ),
                          }),
                        (0, t.jsxs)("label", {
                          className: L().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: c,
                              onChange: (o) => Y(o.target.checked),
                            }),
                            " Delete",
                          ],
                        }),
                        (0, t.jsxs)("label", {
                          className: L().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: _,
                              onChange: (o) => Ae(o.target.checked),
                            }),
                            " Issue Warning",
                          ],
                        }),
                        Je &&
                          !!K &&
                          (0, t.jsxs)("div", {
                            className: (0, oe.A)(
                              L().OneColumn,
                              L().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Te.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        r.clanSteamID &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("label", {
                                htmlFor: "hubban",
                                children: "Ban from hub:",
                              }),
                              !Ze &&
                                (0, t.jsxs)("select", {
                                  id: "hubban",
                                  onChange: (o) =>
                                    le(
                                      o.target.value === "0"
                                        ? null
                                        : parseInt(o.target.value),
                                    ),
                                  value: K != null ? K : 0,
                                  children: [
                                    (0, t.jsx)("option", {
                                      value: "0",
                                      children: "Do not ban",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "1",
                                      children: "1 day",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "3",
                                      children: "3 days",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "7",
                                      children: "7 days",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "14",
                                      children: "14 days",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "30",
                                      children: "30 days",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "90",
                                      children: "3 months",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "365",
                                      children: "1 year",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "-1",
                                      children: "Permanent",
                                    }),
                                  ],
                                }),
                              Ze &&
                                (0, t.jsx)("div", {
                                  id: "hubban",
                                  children: "Already banned from hub",
                                }),
                            ],
                          }),
                        Je &&
                          !!I &&
                          (0, t.jsxs)("div", {
                            className: (0, oe.A)(
                              L().OneColumn,
                              L().ErrorMessage,
                            ),
                            children: [
                              (0, t.jsx)(Te.Q9b, {}),
                              " Content is older than 30 days. Are you sure you want to ban?",
                            ],
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "communityban",
                          children: "Ban from community:",
                        }),
                        !Xe &&
                          (0, t.jsxs)("select", {
                            id: "communityban",
                            onChange: (o) =>
                              Z(
                                o.target.value === "0"
                                  ? null
                                  : parseInt(o.target.value),
                              ),
                            value: I != null ? I : 0,
                            children: [
                              (0, t.jsx)("option", {
                                value: "0",
                                children: "Do not ban",
                              }),
                              (0, t.jsx)("option", {
                                value: "1",
                                children: "1 day",
                              }),
                              (0, t.jsx)("option", {
                                value: "3",
                                children: "3 days",
                              }),
                              (0, t.jsx)("option", {
                                value: "7",
                                children: "7 days",
                              }),
                              (0, t.jsx)("option", {
                                value: "14",
                                children: "14 days",
                              }),
                              (0, t.jsx)("option", {
                                value: "30",
                                children: "30 days",
                              }),
                              (0, t.jsx)("option", {
                                value: "90",
                                children: "3 months",
                              }),
                              (0, t.jsx)("option", {
                                value: "365",
                                children: "1 year",
                              }),
                              (0, t.jsx)("option", {
                                value: "-1",
                                children: "Permanent",
                              }),
                            ],
                          }),
                        Xe &&
                          (0, t.jsx)("div", {
                            id: "communityban",
                            children: "Already community banned.",
                          }),
                        (0, t.jsx)("label", {
                          htmlFor: "deletecomments",
                          children: "Delete comments since:",
                        }),
                        (0, t.jsxs)("select", {
                          id: "deletecomments",
                          disabled: X,
                          onChange: (o) =>
                            ne(
                              o.target.value === "-1"
                                ? null
                                : parseInt(o.target.value),
                            ),
                          value: k != null ? k : -1,
                          children: [
                            (0, t.jsx)("option", {
                              value: "-1",
                              children: "Do not delete",
                            }),
                            (0, t.jsx)("option", {
                              value: "1",
                              children: "1 day",
                            }),
                            (0, t.jsx)("option", {
                              value: "7",
                              children: "7 days",
                            }),
                            (0, t.jsx)("option", {
                              value: "14",
                              children: "14 days",
                            }),
                            (0, t.jsx)("option", {
                              value: "30",
                              children: "30 days",
                            }),
                            (0, t.jsx)("option", {
                              value: "0",
                              children: "All comments",
                            }),
                          ],
                        }),
                        !$e &&
                          (0, t.jsxs)("span", {
                            className: L().OneColumn,
                            children: [
                              (0, t.jsx)("input", {
                                type: "checkbox",
                                checked: se,
                                onChange: (o) => ce(o.target.checked),
                              }),
                              "\xA0Permanent trade ban",
                            ],
                          }),
                        $e &&
                          (0, t.jsx)("div", {
                            children: "Already trade banned.",
                          }),
                        (0, t.jsxs)("span", {
                          className: L().OneColumn,
                          children: [
                            (0, t.jsx)("input", {
                              type: "checkbox",
                              checked: X,
                              onChange: (o) => Ft(o.target.checked),
                            }),
                            "\xA0Mark as suspicious",
                          ],
                        }),
                        (0, t.jsx)("label", {
                          htmlFor: "escalateto",
                          children: "Escalate to",
                        }),
                        (0, t.jsxs)("select", {
                          id: "escalateto",
                          onChange: (o) => re(parseInt(o.target.value)),
                          value: ee,
                          children: [
                            (0, t.jsx)("option", {
                              value: z.HH,
                              children: "Do not escalate",
                            }),
                            (0, t.jsx)("option", {
                              value: z.lp,
                              children: "Supervisor",
                            }),
                            (0, t.jsx)("option", {
                              value: z.PV,
                              children: "Valve",
                            }),
                          ],
                        }),
                        (0, t.jsx)("textarea", {
                          className: (0, oe.A)(
                            L().OneColumn,
                            L().MessageTextArea,
                          ),
                          placeholder: "Message to send (required)",
                          value: ze,
                          onChange: (o) => Ke(o.target.value),
                        }),
                      ],
                    }),
                    (0, t.jsxs)(f.Z, {
                      className: L().BottomButtons,
                      children: [
                        r.sanctionMutation.isPending &&
                          (0, t.jsx)(gt.t, { size: "small" }),
                        !r.sanctionMutation.isPending &&
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)(Ge.Oh, {
                                onClick: r.onCancel,
                                children: "Cancel",
                              }),
                              (0, t.jsx)(Ge.n9, {
                                onClick: It,
                                disabled:
                                  s === null || !Ot || ze.trim().length === 0,
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
        function yt(r, e) {
          const s = (0, pt.KV)();
          return (0, Qe.I)({
            queryKey: ["get_quick_text", r, e],
            queryFn: async () => {
              if (r == null || e === void 0) return null;
              const a = O.w.Init(He);
              a.Body().set_quicktext_id(r),
                a.Body().set_language((0, A.LgB)(e));
              const p = await Me.GetQuickText(s, a);
              if (p.GetEResult() !== H.R)
                throw new Error(
                  "useQuickText failed with EResult " + p.GetEResult(),
                );
              return p.Body().toObject();
            },
            enabled: r !== void 0,
          });
        }
        function St(r) {
          return (0, Qe.I)({
            queryKey: ["get_primary_language_for_user", r],
            queryFn: async () => {
              if (r === "0" || !r) throw new Error("Invalid steamid");
              const s = await (
                await fetch(
                  `${we.TS.COMMUNITY_BASE_URL}profiles/${r}/ajaxlanguagepreferences`,
                )
              ).json();
              if (s.success === H.R) return s.preferences;
              throw new Error(
                "Failed GetPrimaryLanguageForUser. EResult: " + s.success,
              );
            },
          });
        }
        var Ce = i(46085),
          Ve = i(49527),
          _e = i(19316),
          Re = i(25792),
          jt = i(2801),
          xt = i(15568),
          Ee = i(36118),
          Bt = i(21418),
          Mt = i(71421),
          Tt = i(41635),
          wt = i(84670),
          q = i.n(wt);
        function Ct(r) {
          const { subject: e } = r,
            [s, a] = (0, D.useState)(!1),
            p =
              e &&
              (e.unresolved_report_count > 0 || e.unresolved_dispute_count > 0),
            h = (0, t.jsx)(Q.W, {
              onClick: () => a(!0),
              children: (0, t.jsxs)(F.s, {
                direction: "row",
                justify: "between",
                align: "baseline",
                gap: "1",
                children: [
                  p &&
                    (0, t.jsx)("img", {
                      className: q().Flag,
                      src: `${we.TS.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  C.T.Localize("#commentsanctiondialog_moderate"),
                  e &&
                    e.required_moderator_level === z.PV &&
                    (0, t.jsx)("span", {
                      className: q().ValveOnly,
                      children: "(VO)",
                    }),
                  e &&
                    e.required_moderator_level === z.lp &&
                    (0, t.jsx)("span", {
                      className: q().SupervisorOnly,
                      children: "(Supervisor)",
                    }),
                ],
              }),
            });
          return (0, t.jsxs)(t.Fragment, {
            children: [
              s && (0, t.jsx)(Et, { onClose: () => a(!1), ...r }),
              e &&
                (0, t.jsx)(Mt.Gq, {
                  toolTipContent: (0, t.jsx)(Rt, { subject: e }),
                  direction: "bottom",
                  nDelayShowMS: 0,
                  children: h,
                }),
              !e && h,
            ],
          });
        }
        function Rt(r) {
          const { subject: e } = r,
            s = (0, D.useMemo)(() => {
              var a;
              const p = (0, Tt.D5)(
                (a = e == null ? void 0 : e.reports) != null ? a : [],
                (h) => h.report_reason,
              );
              return p.sort((h, c) => h[1] - c[1]), p;
            }, [e.reports]);
          return s.length === 0
            ? null
            : (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    children: C.T.Localize("#reasonlist_title"),
                  }),
                  s.map(([a, p]) =>
                    (0, t.jsx)(
                      "div",
                      {
                        children: C.T.Localize(
                          "#reasonlist_reasonwithcount",
                          (0, l.Jt)(a),
                          p,
                        ),
                      },
                      a,
                    ),
                  ),
                ],
              });
        }
        function Et(r) {
          var e, s, a;
          const {
              sanctionMutation: p,
              acquitMutation: h,
              subject: c,
              eSubjectType: Y,
              gidComment: _,
              clanSteamID: Ae,
              authorSteamID: K,
              onClose: le,
            } = r,
            I = c == null ? void 0 : c.reported_content_id,
            [Z, k] = (0, D.useState)("main"),
            ne = [
              {
                name: "Reports",
                key: "reports",
                contents: (0, t.jsx)(Re.tH, {
                  children: (0, t.jsx)(u.lX, { subject: c }),
                }),
              },
              {
                name: "History",
                key: "history",
                contents: (0, t.jsx)(Re.tH, {
                  children: (0, t.jsx)(u.B8, { reportedContentID: I }),
                }),
              },
              {
                name: "Details",
                key: "details",
                contents: (0, t.jsx)(Re.tH, { children: r.children }),
              },
            ],
            se = () => {
              r.onClose(),
                window.location.href.split("#").length === 1 &&
                  _ !== l.Ie &&
                  (window.location.href += "#c" + _),
                window.location.reload();
            };
          let ce = 0,
            X = 0;
          if (c)
            for (const re of c.reports)
              re.time_resolved && !re.time_disputed && ce++,
                re.time_dispute_resolved && X++;
          const ue =
              !!(c != null && c.reported_content_id) &&
              !c.owner_dispute_time &&
              c.resolved === Ve.S6,
            ee = c !== void 0 && !!c.owner_dispute_time;
          return (0, t.jsx)(xt.wA, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: "Moderate subject",
            children: (0, t.jsx)(jt.eV, {
              bAllowFullSize: !0,
              title: "Moderate",
              "aria-describedby": "moderate",
              onCancel: r.onClose,
              className: q().ModerateDialog,
              children: (0, t.jsx)(_e.f3, {
                children: (0, t.jsx)(_e.a3, {
                  children: (0, t.jsxs)("div", {
                    className: q().ModerateDialogCtn,
                    children: [
                      Z === "main" &&
                        (0, t.jsxs)("div", {
                          className: q().ModerateCtn,
                          children: [
                            (0, t.jsxs)("div", {
                              className: q().ModerationData,
                              children: [
                                (0, t.jsxs)(W.EY, {
                                  as: "div",
                                  size: "3",
                                  contrast: "description",
                                  children: [
                                    (e =
                                      c == null
                                        ? void 0
                                        : c.unresolved_report_count) != null
                                      ? e
                                      : 0,
                                    " unresolved / ",
                                    ce,
                                    " resolved / ",
                                    (s =
                                      c == null
                                        ? void 0
                                        : c.unresolved_dispute_count) != null
                                      ? s
                                      : 0,
                                    " disputed / ",
                                    X,
                                    " disputes resolved",
                                  ],
                                }),
                                (0, t.jsx)(Bt.V, {
                                  tabs: ne,
                                  bDisableRouting: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: q().ModerationActionButtons,
                              children: [
                                (0, t.jsx)("button", {
                                  onClick: () => k("sanction"),
                                  children: (0, t.jsxs)(F.s, {
                                    direction: "row",
                                    justify: "center",
                                    align: "center",
                                    children: [
                                      (0, t.jsx)(Ee.X, {
                                        className: q().SanctionIcon,
                                      }),
                                      " Sanction",
                                    ],
                                  }),
                                }),
                                (0, t.jsx)(Ut, {
                                  subject: c,
                                  acquitMutation: h,
                                  onClose: le,
                                }),
                                (0, t.jsx)(Dt, { subject: c, onClose: le }),
                                (0, t.jsx)(V.fu, {
                                  disabled: !I,
                                  onClick: () => k("escalate"),
                                  children: C.T.Localize(
                                    "#moderation_escalation_escalate",
                                  ),
                                }),
                                !ee &&
                                  (0, t.jsx)("button", {
                                    disabled: !ue,
                                    onClick: () => k("ownerdispute"),
                                    children: "Owner Dispute",
                                  }),
                                ee &&
                                  (0, t.jsxs)("span", {
                                    children: [
                                      (0, t.jsx)("a", {
                                        href: `${we.TS.HELP_BASE_URL}tickermaster/ticket/${c.owner_dispute_details}`,
                                        children: (0, t.jsx)(W.EY, {
                                          size: "2",
                                          children: C.T.Localize(
                                            "#moderation_already_owner_disputed",
                                          ),
                                        }),
                                      }),
                                      (0, t.jsx)("button", {
                                        disabled: !I,
                                        onClick: () =>
                                          k("editownerdisputedetails"),
                                        className: q().EditButton,
                                        children: (0, t.jsx)(Ee.ffu, {}),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      Z === "escalate" &&
                        !!I &&
                        (0, t.jsx)(b.R, {
                          reportedContentID: I,
                          onClose: () => k("main"),
                        }),
                      Z === "sanction" &&
                        (0, t.jsx)(bt, {
                          subject: c != null ? c : { subject_type: Y },
                          clanSteamID: Ae,
                          authorSteamID: K,
                          sanctionMutation: p,
                          onSanction: se,
                          onCancel: () => k("main"),
                        }),
                      Z === "ownerdispute" &&
                        !!I &&
                        (0, t.jsx)(zt, {
                          reportedContentID: I,
                          onClose: () => k("main"),
                        }),
                      Z === "editownerdisputedetails" &&
                        !!I &&
                        (0, t.jsx)(At, {
                          reportedContentID: I,
                          onClose: () => k("main"),
                          currentDetails:
                            (a =
                              c == null ? void 0 : c.owner_dispute_details) !=
                            null
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
        function At(r) {
          const { reportedContentID: e, onClose: s, currentDetails: a } = r,
            [p, h] = (0, D.useState)(a),
            c = (0, Ce.wy)(e, p),
            Y = async () => {
              await c.mutateAsync(), s();
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("label", {
                children: [
                  (0, t.jsx)(W.EY, {
                    size: "2",
                    children: C.T.Localize(
                      "#moderation_editownerdisputedetails_label",
                    ),
                  }),
                  (0, t.jsx)("input", {
                    type: "text",
                    value: p,
                    onChange: (_) => h(_.target.value),
                  }),
                ],
              }),
              (0, t.jsxs)(F.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, t.jsx)(V.fu, {
                    onClick: Y,
                    children: C.T.Localize(
                      "#moderation_editownerdisputedetails_save",
                    ),
                  }),
                  (0, t.jsx)(N.$, {
                    onClick: s,
                    loading: c.isPending,
                    children: C.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function zt(r) {
          const { reportedContentID: e, onClose: s } = r,
            [a, p] = (0, D.useState)(""),
            h = (0, Ce.y4)(e, a),
            c = async () => {
              await h.mutateAsync(), s();
            };
          return (0, t.jsxs)(f.Z, {
            className: q().OwnerDisputeCtn,
            children: [
              (0, t.jsx)(W.EY, {
                as: "div",
                size: "2",
                children: C.T.Localize("#moderation_ownerdispute_description"),
              }),
              (0, t.jsxs)("label", {
                children: [
                  (0, t.jsx)(W.EY, {
                    size: "2",
                    children: C.T.Localize(
                      "#moderation_ownerdispute_ticketmastercode",
                    ),
                  }),
                  " ",
                  (0, t.jsx)("input", {
                    type: "text",
                    value: a,
                    onChange: (Y) => p(Y.target.value),
                  }),
                ],
              }),
              (0, t.jsxs)(F.s, {
                justify: "between",
                direction: "row",
                children: [
                  (0, t.jsx)(V.fu, {
                    onClick: c,
                    children: C.T.Localize("#moderation_ownerdispute_dispute"),
                  }),
                  (0, t.jsx)(V.fu, {
                    onClick: s,
                    children: C.T.Localize("#moderation_ownerdispute_cancel"),
                  }),
                ],
              }),
            ],
          });
        }
        function Ut(r) {
          const { acquitMutation: e, onClose: s, subject: a } = r,
            p =
              a &&
              (a.unresolved_report_count > 0 || a.unresolved_dispute_count > 0),
            h = async () => {
              await e.mutateAsync(void 0), s();
            };
          return (0, t.jsx)("button", {
            onClick: h,
            disabled: !p,
            children: (0, t.jsxs)(F.s, {
              direction: "row",
              justify: "center",
              align: "center",
              children: [
                (0, t.jsx)(Ee.jlt, { className: q().AcquitIcon }),
                " ",
                C.T.Localize("#moderation_actions_acquit"),
              ],
            }),
          });
        }
        function Dt(r) {
          const { subject: e, onClose: s } = r,
            a =
              !!(e != null && e.reported_content_id) &&
              e.resolved !== Ve.z_ &&
              (e.unresolved_dispute_count > 0 || e.unresolved_report_count > 0),
            p = (0, Ce.N8)(),
            h = async () => {
              e != null &&
                e.reported_content_id &&
                (await p.mutateAsync({
                  reportedContentID: e.reported_content_id,
                }),
                s());
            };
          return (0, t.jsx)("button", {
            onClick: h,
            disabled: !a,
            children: C.T.Localize("#moderation_actions_sustain"),
          });
        }
      },
      179: (G, te, i) => {
        "use strict";
        i.d(te, {
          Bm: () => W,
          QD: () => V,
          f3: () => F,
          iV: () => C,
          ip: () => f,
          le: () => N,
        });
        var t = i(90626),
          Q = i(92757);
        function F(l, u) {
          let b;
          if (typeof l == "string") b = l;
          else if ("location" in l) b = l.location.search;
          else if ("search" in l) b = l.search;
          else return;
          const A = new URLSearchParams(b.substring(1));
          if (A.has(u)) {
            const R = A.getAll(u);
            return R[R.length - 1];
          }
        }
        function W(l, u, b, A = !1) {
          const R = new URLSearchParams(l.location.search.substring(1));
          if (b != null && b != null) {
            if (R.get(u) == b) return;
            R.set(u, b);
          } else {
            if (!R.has(u)) return;
            R.delete(u);
          }
          A
            ? l.replace(`?${R.toString()}`, { ...l.location.state })
            : l.push(`?${R.toString()}`);
        }
        function N(l, u, b) {
          W(l, u, b, !0);
        }
        function V(l, u) {
          const b = (0, Q.W6)(),
            A = (0, Q.zy)(),
            R = (0, t.useMemo)(() => {
              const O = F(A.search, l);
              return O != null && O != null
                ? u != null && u != null
                  ? typeof u == "boolean"
                    ? u.constructor(O !== "false")
                    : u.constructor(O)
                  : O
                : u;
            }, [A.search, l, u]),
            H = (0, t.useCallback)(
              (O, P = !1) => {
                W(b, l, O != null && O != null ? String(O) : null, P);
              },
              [b, l],
            );
          return [R, H];
        }
        function f(l, u, b = !1) {
          const A = new URLSearchParams(l.location.search.substring(1));
          for (const R in u)
            if (u.hasOwnProperty(R)) {
              const H = u[R];
              A.delete(R), H != null && H != null && A.append(R, H);
            }
          b
            ? l.replace(`?${A.toString()}`, { ...l.location.state })
            : l.push(`?${A.toString()}`);
        }
        function C(l, u) {
          f(l, u, !0);
        }
      },
      21418: (G, te, i) => {
        "use strict";
        i.d(te, { V: () => R, a: () => H });
        var t = i(7850),
          Q = i(90626),
          F = i(36707),
          W = i(18210),
          N = i(179),
          V = i(1990),
          f = i.n(V),
          C = i(71421),
          l = i(53107),
          u = i(19298),
          b = i(20169),
          A = i(92757);
        function R(P) {
          const {
              tabs: g,
              bDisableRouting: z,
              startingTab: U,
              controlledTab: d,
              OnTabChanged: m,
              classNameCtn: n,
              classNameTab: de,
              classNameTabContent: me,
              preferredFocus: E,
              bVerticalTabs: pe,
              bSticky: Le,
              bChecklistMode: Ie,
            } = P,
            J = (0, A.zy)(),
            ge = (0, A.W6)(),
            [ke, ie] = (0, Q.useState)(() => {
              var v;
              return (
                U ||
                (!z && (0, N.f3)(J, "tab") && (v = (0, N.f3)(J, "tab")) != null
                  ? v
                  : "")
              );
            });
          (0, Q.useEffect)(() => {
            if (!P.bDisableRouting && J) {
              const v = (0, N.f3)(J, "tab");
              v && ie(v);
            }
          }, [J, J.key, P.bDisableRouting, ie]);
          const Fe = Q.useCallback(
              (v) => {
                ie(v.key),
                  z || (0, N.Bm)(ge, "tab", v.key),
                  m == null || m(v.key),
                  v.onClick && v.onClick(v);
              },
              [z, ge, m],
            ),
            $ = g.filter((v) => !v.hidden);
          if (!$.length) return null;
          const Pe = d != null ? d : ke,
            ae = $.find((v) => v.key === Pe) || $[0],
            qe = E ? (U != null ? U : $[0].key) : void 0,
            fe = (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(u.Z, {
                  className: (0, F.A)(
                    f().GraphicalAssetsTabs,
                    pe && f().GraphicalAssetsTabsVertical,
                    Ie && f().ChecklistMode,
                    Le && f().Sticky,
                    n,
                  ),
                  navEntryPreferPosition: E ? b.iU.PREFERRED_CHILD : b.iU.FIRST,
                  children: $.map((v, at) =>
                    (0, t.jsx)(
                      O,
                      {
                        tab: v,
                        OnTabClick: Fe,
                        classNameTab: de,
                        active: v.key === ae.key,
                        preferredFocus: qe === v.key,
                      },
                      v.key,
                    ),
                  ),
                }),
                ae && (0, t.jsx)(u.Z, { className: me, children: ae.contents }),
              ],
            });
          return pe
            ? (0, t.jsx)(u.Z, {
                className: (0, F.A)(f().GraphicalAssetsTabsLayoutVertical),
                children: fe,
              })
            : fe;
        }
        function H(P) {
          const {
            statusType: g = "success",
            bShowStatusBox: z,
            children: U,
          } = P;
          let d = "";
          return (
            g === "success"
              ? (d = f().StatusSuccess)
              : g === "danger"
                ? (d = f().StatusDanger)
                : g === "caution"
                  ? (d = f().StatusCaution)
                  : g === "info"
                    ? (d = f().StatusInfo)
                    : g === "incomplete" && (d = f().StatusIncomplete),
            (0, t.jsx)("div", {
              className: (0, F.A)(
                f().GraphicalAssetStatus,
                d,
                z ? f().checklistBox : "",
              ),
              children: U,
            })
          );
        }
        function O(P) {
          const {
            tab: g,
            OnTabClick: z,
            classNameTab: U,
            active: d,
            preferredFocus: m,
          } = P;
          return (0, t.jsx)(l.e7, {
            condition: !!(g.statusToolTip || g.tooltip),
            wrap: (n) =>
              (0, t.jsx)(C.he, {
                toolTipContent: g.statusToolTip || g.tooltip,
                children: n,
              }),
            children: (0, t.jsxs)(u.Z, {
              className: (0, F.A)(
                f().GraphicalAssetsTab,
                d && f().Active,
                d && "ActiveTab",
                U,
              ),
              onActivate: () => z(g),
              preferredFocus: m,
              children: [
                !!g.vo_warning &&
                  (0, t.jsx)(C.he, {
                    toolTipContent: g.vo_warning,
                    children: (0, t.jsx)("div", {
                      className: f().VOWarning,
                      children: (0, W.we)("#EventEditor_VOWarning"),
                    }),
                  }),
                g.status,
                g.name,
              ],
            }),
          });
        }
      },
      84670: (G) => {
        G.exports = {
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
      98580: (G) => {
        G.exports = {
          BottomButtons: "mdeaaJPcT9kJyTGau_Zr7",
          SanctionForm: "_33cLeNjYsBEX2T0-B9gc5G",
          OneColumn: "_2LTDR9F3yb80ONcUPcDxo1",
          QuickReasons: "_1VdNqwseupCqI68H-YwwZO",
          MessageTextArea: "_3IWpl3mfH9OFkiqMIh7WtY",
          ErrorMessage: "_3_dhawEOV-fztaXEftlfxJ",
        };
      },
      1990: (G) => {
        G.exports = {
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
