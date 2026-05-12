/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [596],
  {
    79821: (e, t, a) => {
      a.d(t, { Kl: () => r, Yj: () => l, iH: () => i, zV: () => c });
      const r = [
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "smalltext",
          "b",
          "u",
          "hr",
          "i",
          "emoticon",
          "dynamiclink",
          "img",
          "strike",
          "spoiler",
          "noparse",
          "url",
          "list",
          "olist",
          "*",
          "quote",
          "pullquote",
          "code",
          "table",
          "tr",
          "td",
          "th",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "sticker",
          "price",
          "pricesavings",
          "trailer",
          "speaker",
          "doclink",
          "video",
          "vod",
          "youtubeorvideo",
          "giveawayeligible",
          "claimitem",
          "packagepurchaseable",
          "actiondialog",
          "uploadfilebutton",
          "docimg",
          "meetsteamsessiongroup",
          "meetsteamscheduleview",
          "center",
          "c",
          "expand",
          "remindme",
          "calendarevent",
          "color",
          "bgcolor",
          "userpolls",
        ],
        i = [
          "h1",
          "h2",
          "h3",
          "b",
          "u",
          "i",
          "strike",
          "spoiler",
          "noparse",
          "url",
        ],
        n = [
          "img",
          "carousel",
          "previewyoutube",
          "looping_media",
          "roomeffect",
          "video",
          "vod",
          "trailer",
          "youtubeorvideo",
          "docimg",
        ];
      r.filter((e) => !n.includes(e));
      let s;
      function o(e) {
        return e
          ? e.map((e) => ("*" == e ? "\\*" : e)).join("|")
          : (s || (s = o(r)), s);
      }
      function l(e, t = null, a = " ") {
        const r = new RegExp(
          "\\[(" + o(t) + ")\\b[^\\]]*\\].*?\\[/\\1\\]",
          "gi",
        );
        return e.replace(r, a);
      }
      function c(e, t = null, a = "") {
        const r = "\\[\\/?(?:" + o(t) + "){1,}.*?]";
        return e.replace(new RegExp(r, "gi"), a);
      }
    },
    7221: (e, t, a) => {
      a.d(t, { pb: () => i, wI: () => r });
      var r;
      !(function (e) {
        (e.full = ""),
          (e.background_main = "_960x311"),
          (e.background_mini = "_480x156"),
          (e.capsule_main = "_400x225"),
          (e.spotlight_main = "_1054x230");
      })(r || (r = {}));
      const i = [
        "localized_image_group",
        "link_capsule",
        "product_mobile_banner_override",
        "product_banner_override",
        "sale_section_title",
        "schedule_track_art",
        "localized_background_art",
      ];
    },
    3577: (e, t, a) => {
      function r() {
        let e, t;
        return {
          promise: new Promise((a, r) => {
            (e = a), (t = r);
          }),
          resolve: e,
          reject: t,
        };
      }
      a.d(t, { x0: () => r });
    },
    75682: (e, t, a) => {
      a.d(t, {
        $N: () => F,
        CX: () => P,
        Dp: () => M,
        wz: () => D,
        qX: () => w,
        cD: () => S,
        yX: () => T,
        Q5: () => r,
        Ji: () => n,
        Xs: () => i,
        AH: () => H,
        zF: () => W,
      });
      var r = {};
      a.r(r), a.d(r, { qZ: () => d });
      var i = {};
      a.r(i), a.d(i, { bV: () => _, O8: () => m, x1: () => u });
      var n = {};
      a.r(n), a.d(n, { HW: () => p, MU: () => h, qP: () => y, RU: () => g });
      var s = a(80613),
        o = a.n(s),
        l = a(89068),
        c = a(56545);
      const d = 0,
        m = 1,
        u = 2,
        _ = 3,
        p = 0,
        g = 3,
        h = 6,
        y = 7;
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.voteid || l.Sg(b.M()),
            s.Message.initialize(this, e, 0, -1, [5, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  voteid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  active: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  start_time: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_time: { n: 4, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  app_discounts: { n: 5, c: v, r: !0, q: !0 },
                  grouped_vote_options: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  groups: { n: 7, c: f, r: !0, q: !0 },
                  internal_name: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localization: { n: 9, c: B },
                  reveal_time: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  release_date_min: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  winner_appid: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  flag: { n: 13, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  release_date_max: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_type: {
                    n: 15,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = l.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new b();
          return b.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition";
        }
      }
      class v extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.appid || l.Sg(v.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  discount: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = l.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new v();
          return v.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_AppDefinition";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.groupid || l.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  groupid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  group_name: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  app_discounts: { n: 3, c: v, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new f();
          return f.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_GroupDefinition";
        }
      }
      class B extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.title || l.Sg(B.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  title: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  title_linebreak: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  title_award: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  award_description: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = l.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new B();
          return B.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_VoteDefinition_Localization";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.language || l.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  sale_appid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new S();
          return S.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Request";
        }
      }
      class E extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.votes || l.Sg(E.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  votes: { n: 1, c: b, r: !0, q: !0 },
                  labor_of_love_winners: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = l.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new E();
          return E.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetVoteDefinitions_Response";
        }
      }
      class I extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.voteid || l.Sg(I.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  voteid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = l.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new I();
          return I.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "SteamAwardsUserVote";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.sale_appid || l.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  sale_appid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new w();
          return w.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Request";
        }
      }
      class G extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.user_votes || l.Sg(G.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { user_votes: { n: 1, c: I, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = l.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new G();
          return G.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserVotes_Response";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.voteid || l.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  voteid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  sale_appid: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new T();
          return T.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Request";
        }
      }
      class A extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.user_votes || l.Sg(A.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { user_votes: { n: 1, c: I, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = l.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new A();
          return A.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetVote_Response";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.category_id || l.Sg(z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  last_updated: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = l.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new z();
          return z.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwardsNomination";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new M();
          return M.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Request";
        }
      }
      class C extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.nominations || l.Sg(C.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { nominations: { n: 1, c: z, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = l.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new C();
          return C.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetUserNominations_Response";
        }
      }
      class j extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.steamid || l.Sg(j.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  code: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = l.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new j();
          return j.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetOtherUserNominations_Request";
        }
      }
      class D extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.category_id || l.Sg(D.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  nominated_id: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  source: { n: 3, br: l.qM.readEnum, bw: l.gp.writeEnum },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = l.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new D();
          return D.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Request";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.nominations || l.Sg(R.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { nominations: { n: 1, c: z, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = l.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new R();
          return R.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_Nominate_Response";
        }
      }
      class F extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.category_id || l.Sg(F.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  category_id: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = l.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new F();
          return F.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Request";
        }
      }
      class L extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.played_app || l.Sg(L.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  played_app: { n: 1, c: U, r: !0, q: !0 },
                  suggested_events: { n: 2, c: O, r: !0, q: !0 },
                  suggested_apps: { n: 3, c: x, r: !0, q: !0 },
                  debug_query: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = l.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new L();
          return L.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response";
        }
      }
      class U extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || l.Sg(U.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  playtime: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = l.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new U();
          return U.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_PlayedApps";
        }
      }
      class O extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.clanid || l.Sg(O.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  clanid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  appid: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = l.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new O();
          return O.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent";
        }
      }
      class x extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.appid || l.Sg(x.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = l.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new x();
          return x.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationRecommendations_Response_SuggestedApp";
        }
      }
      class P extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.generate_new || l.Sg(P.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  generate_new: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = l.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new P();
          return P.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Request";
        }
      }
      class k extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.code || l.Sg(k.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  code: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = l.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            a = new k();
          return k.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamAwards_GetNominationShareLink_Response";
        }
      }
      var W, H;
      !(function (e) {
        (e.GetVoteDefinitions = function (e, t) {
          return e.SendMsg(
            "StoreSales.GetVoteDefinitions#1",
            (0, c.I8)(S, t),
            E,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.SetVote = function (e, t) {
            return e.SendMsg("StoreSales.SetVote#1", (0, c.I8)(T, t), A, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserVotes = function (e, t) {
            return e.SendMsg("StoreSales.GetUserVotes#1", (0, c.I8)(w, t), G, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          });
      })(W || (W = {})),
        (function (e) {
          (e.GetUserNominations = function (e, t) {
            return e.SendMsg(
              "SteamAwards.GetUserNominations#1",
              (0, c.I8)(M, t),
              C,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
            (e.GetOtherUserNominations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetOtherUserNominations#1",
                (0, c.I8)(j, t),
                C,
                { bConstMethod: !0, ePrivilege: 2 },
              );
            }),
            (e.Nominate = function (e, t) {
              return e.SendMsg("SteamAwards.Nominate#1", (0, c.I8)(D, t), R, {
                bConstMethod: !0,
                ePrivilege: 1,
              });
            }),
            (e.GetNominationRecommendations = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationRecommendations#1",
                (0, c.I8)(F, t),
                L,
                { bConstMethod: !0, ePrivilege: 1 },
              );
            }),
            (e.GetNominationShareLink = function (e, t) {
              return e.SendMsg(
                "SteamAwards.GetNominationShareLink#1",
                (0, c.I8)(P, t),
                k,
                { ePrivilege: 1 },
              );
            });
        })(H || (H = {}));
    },
    12611: (e, t, a) => {
      a.d(t, { eg: () => i, lw: () => r, qR: () => n });
      const r = "{STEAM_CLAN_IMAGE}",
        i = "{STEAM_CLAN_LOC_IMAGE}",
        n = "{STEAM_APP_IMAGE}";
    },
    62641: (e, t, a) => {
      a.d(t, {
        FZ: () => ue,
        A4: () => j,
        iy: () => M,
        ZA: () => U,
        Dn: () => O,
        CU: () => ae,
        Ay: () => te,
        ye: () => ee,
        Fo: () => ie,
        G$: () => ne,
        Xx: () => x,
        DJ: () => ce,
        G6: () => se,
        zv: () => P,
        IS: () => V,
        GE: () => q,
        yX: () => N,
        w: () => oe,
        EE: () => H,
        Zf: () => Q,
        jR: () => $,
        Ac: () => _e,
        lh: () => he,
        Hc: () => le,
        mz: () => K,
        qQ: () => X,
        MW: () => J,
        W2: () => Y,
        Pm: () => re,
        qR: () => Z,
        _B: () => k,
        j3: () => ye,
        Yw: () => W,
        zK: () => F,
        DU: () => R,
        cB: () => de,
      });
      var r = a(34629),
        i = a(79821),
        n = a(2160),
        s = a(22837),
        o = a(75682),
        l = a(14947);
      const c = {
        bBroadcastEnabled: !1,
        broadcastChatSetting: "hide",
        default_broadcast_title: "#Broadcast_default_title_dev",
        localized_broadcast_title: new Array(s.bP9),
        localized_broadcast_left_image: new Array(s.bP9),
        localized_broadcast_right_image: new Array(s.bP9),
        broadcast_whitelist: [],
      };
      var d = a(17720),
        m = a(27666),
        u = a(7221),
        _ = a(27939),
        p = a(68359),
        g = a(4796),
        h = a(67165),
        y = a(44165),
        b = a(16021),
        v = a(81393),
        f = a(61859),
        B = a(25489),
        S = a(27543),
        E = a(41338),
        I = a(14771),
        w = a(78327),
        G = a(6419);
      (0, r.Cg)(
        [G.o],
        class {
          m_eventModel;
          m_entry;
          constructor(e, t) {
            (this.m_eventModel = e), (this.m_entry = t);
          }
          GetEventStartTime() {
            return this.m_entry.rtime_start_specific
              ? this.m_entry.rtime_start_specific
              : (this.m_eventModel.startTime ?? 0) +
                  (this.m_entry.delta_from_event_start_seconds ?? 0);
          }
        }.prototype,
        "GetEventStartTime",
        null,
      );
      var T = a(61336);
      const A = 99999;
      const z = [
        s.u0,
        s.zeJ,
        s.Fa4,
        s.Aav,
        s.SRb,
        s.zA,
        s.y6,
        s.hGl,
        s.WNR,
        s.pIh,
        s.izQ,
        s.uYK,
        s.f4X,
        s.zcX,
        s.yhO,
      ];
      function M(e) {
        return (
          z.some((t) => t == e.GetEventType()) &&
          !e.BHasTag("steam_award_nomination_request") &&
          !e.BHasTag("curator")
        );
      }
      const C = [s.HRy, s.LOv, s.HFK];
      function j(e) {
        return !C.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      s.Fwr, s.HFK;
      const D = [
        s.L0X,
        s.KDJ,
        s.HRy,
        s.C$4,
        s.zA,
        s.y6,
        s.hGl,
        s.pIh,
        s.izQ,
        s.I5b,
        s.LOv,
        s.WNR,
      ];
      new Set(D);
      const R = 593110,
        F = [R, 766, 221410],
        L = [s.Fwr, s.HFK];
      function U(e) {
        return !L.some((t) => t == e.GetEventType()) && !e.BHasTag("curator");
      }
      function O(e) {
        const t = 60 * I.Kp.PerDay;
        return (
          e.BIsVisibleEvent() &&
          e.BIsOGGEvent() &&
          (e.rtime32_last_modified ?? 0) > y.HD.GetTimeNowWithOverride() - t &&
          !x(e)
        );
      }
      function x(e) {
        return e.BHasTag("mod_reviewed") && !e.BHasTag("mod_require_rereview");
      }
      var P;
      function k(e) {
        switch (e) {
          case "links":
          case "itemdef":
            return { nMaxItemsPerRow: 5, nItemMinimumWidth: 200 };
          case "contenthubspecials":
            return { nMaxItemsPerRow: 3, nItemMinimumWidth: 306 };
          default:
            return { nMaxItemsPerRow: 4, nItemMinimumWidth: 280 };
        }
      }
      !(function (e) {
        (e[(e.k_EEventStateUnpublished = 0)] = "k_EEventStateUnpublished"),
          (e[(e.k_EEventStateStaged = 1)] = "k_EEventStateStaged"),
          (e[(e.k_EEventStateVisible = 2)] = "k_EEventStateVisible"),
          (e[(e.k_EEventStateUnlisted = 3)] = "k_EEventStateUnlisted");
      })(P || (P = {}));
      const W = "bordered";
      var H, q, N, V, Q, $;
      function Y(e) {
        return e && !!e.show_as_carousel && !e.enable_faceted_browsing;
      }
      function X(e) {
        return e.carousel_rows || 1;
      }
      function J(e) {
        return e.cap_item_count || 0;
      }
      function K(e) {
        return e.cap_section_row_count && e.cap_section_row_count > 0
          ? e.cap_section_row_count
          : "trailercarousel" == e.section_type
            ? 1
            : e.cap_section_content
              ? 4
              : 0;
      }
      function Z(e) {
        return Boolean(e?.store_filter)
          ? JSON.stringify(e.store_filter)
          : void 0;
      }
      function ee(e) {
        switch (e) {
          case "items":
          case "trailercarousel":
          case "crosspromotesalepage":
          case "creator_list":
          case "calendar":
            return !0;
        }
        return !1;
      }
      function te(e) {
        switch (e) {
          case "items":
          case "crosspromotesalepage":
          case "creator_list":
            return !0;
        }
        return !1;
      }
      function ae(e, t = !1) {
        return (
          !(
            !e ||
            !(function (e) {
              switch (e) {
                case "items":
                case "trailercarousel":
                case "crosspromotesalepage":
                case "creator_list":
                case "calendar":
                case "events":
                case "sale_events":
                case "contenthubspecials":
                  return !0;
              }
              return !1;
            })(e.section_type)
          ) &&
          (t
            ? !!e.sale_tag_filter?.clauses?.length || !!e.smart_section
            : !!e.smart_section && null != e.smart_section_type)
        );
      }
      function re(e) {
        return ae(e) ? e?.smart_section_type : void 0;
      }
      function ie(e, t) {
        if (!e.BIsNextFest() || ee(t.section_type) || ae(t)) return !1;
        return (
          ((e.jsondata.sale_ml_recommender_delay_hours &&
            (e.startTime ?? 0) +
              e.jsondata.sale_ml_recommender_delay_hours * I.Kp.PerHour -
              new Date().getTime() / 1e3) ??
            0) > 0
        );
      }
      function ne(e, t) {
        return !!t.use_random_order || !!ie(e, t);
      }
      !(function (e) {
        (e[(e.k_EStoreFilterClauseTypeOr = 0)] = "k_EStoreFilterClauseTypeOr"),
          (e[(e.k_EStoreFilterClauseTypeAnd = 1)] =
            "k_EStoreFilterClauseTypeAnd"),
          (e[(e.k_EStoreFilterClauseTypeStoreTag = 2)] =
            "k_EStoreFilterClauseTypeStoreTag"),
          (e[(e.k_EStoreFilterClauseTypeFeatureTag = 3)] =
            "k_EStoreFilterClauseTypeFeatureTag"),
          (e[(e.k_EStoreFilterClauseTypeLanguage = 4)] =
            "k_EStoreFilterClauseTypeLanguage"),
          (e[(e.k_EStoreFilterClauseTypeContentDescriptor = 5)] =
            "k_EStoreFilterClauseTypeContentDescriptor"),
          (e[(e.k_EStoreFilterClauseTypePrice = 6)] =
            "k_EStoreFilterClauseTypePrice"),
          (e[(e.k_EStoreFilterClauseTypeAppType = 7)] =
            "k_EStoreFilterClauseTypeAppType");
      })(H || (H = {})),
        (function (e) {
          (e[(e.k_ESaleTagFilter = 0)] = "k_ESaleTagFilter"),
            (e[(e.k_ELanguage = 1)] = "k_ELanguage"),
            (e[(e.k_EContentDescriptor = 2)] = "k_EContentDescriptor"),
            (e[(e.k_EUserPreference = 3)] = "k_EUserPreference"),
            (e[(e.k_EPrice = 4)] = "k_EPrice"),
            (e[(e.k_EAppType = 5)] = "k_EAppType");
        })(q || (q = {})),
        (function (e) {
          (e[(e.k_EHideOwnedItems = 0)] = "k_EHideOwnedItems"),
            (e[(e.k_EHideWishlistedItems = 1)] = "k_EHideWishlistedItems"),
            (e[(e.k_EHideIgnoredItems = 2)] = "k_EHideIgnoredItems");
        })(N || (N = {})),
        (function (e) {
          (e[(e.k_ESortFacetsByName = 0)] = "k_ESortFacetsByName"),
            (e[(e.k_ESortFacetsByMatchCount = 1)] =
              "k_ESortFacetsByMatchCount"),
            (e[(e.k_ESortFacetsManually = 2)] = "k_ESortFacetsManually");
        })(V || (V = {})),
        (function (e) {
          (e.Steam = "Steam"),
            (e.Facebook = "Facebook"),
            (e.Twitter = "Twitter"),
            (e.Reddit = "Reddit");
        })(Q || (Q = {})),
        (function (e) {
          (e.Summary = "summary"),
            (e.SummaryLargeImage = "summary_large_image");
        })($ || ($ = {}));
      const se = {
        capsules: [],
        events: [],
        links: [],
        localized_label: new Array(s.bP9),
        localized_label_image: new Array(s.bP9),
        default_label: "#Sale_default_label",
        section_type: "unselected_empty",
      };
      var oe;
      function le(e) {
        return {
          arrowFill: e?.sale_carousel_arrow_color,
          arrowStyle: e?.sale_carousel_arrow_style,
          breadcrumbActiveColor: e?.sale_carousel_active_breadcrumb_color,
          breadcrumbColor: e?.sale_carousel_breadcrumb_color,
          breadcrumbStyle: e?.sale_carousel_breadcrumb_style,
        };
      }
      !(function (e) {
        (e[(e.k_ETaggedItems = 0)] = "k_ETaggedItems"),
          (e[(e.k_EContentHub = 1)] = "k_EContentHub");
      })(oe || (oe = {}));
      const ce = {
          localized_subtitle: new Array(s.bP9),
          localized_summary: new Array(s.bP9),
          localized_title_image: new Array(s.bP9),
          localized_capsule_image: new Array(s.bP9),
          bSaleEnabled: !1,
          sale_show_creator: !1,
          sale_sections: [],
          sale_browsemore_text: "",
          sale_browsemore_url: "",
          sale_browsemore_color: "",
          sale_browsemore_bgcolor: "",
          localized_sale_header: new Array(s.bP9),
          localized_sale_overlay: new Array(s.bP9),
          localized_sale_product_banner: new Array(s.bP9),
          localized_sale_product_mobile_banner: new Array(s.bP9),
          localized_sale_logo: new Array(s.bP9),
          sale_font: "",
          sale_background_color: "",
          sale_header_offset: 530,
          referenced_appids: [],
          ...c,
          bScheduleEnabled: !1,
          scheduleEntries: [],
        },
        de = "old_announce_",
        me = [
          "workshop",
          "patchnotes",
          "contenthub",
          "skip_megaphone",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
          "enable_steam_china",
          "disable_steam_global",
          "adult_only_content",
          "stablechannel",
          "betachannel",
          "previewchannel",
        ],
        ue = [
          "steam_blog_featured",
          "workshop",
          "steam_blog",
          "blog",
          "audience_followers",
          "steamvr",
          "patchnotes",
          "steam_library_beta",
          "hide_library_overview",
          "mod_hide_library_overview",
          "hide_library_detail",
          "mod_hide_library_detail",
          "hide_store",
          "mod_hide_store",
          "halloween2019candidate",
          "halloween2019",
          "halloween2019reviewed",
          "horror",
          "cute",
          "halloween",
          "mod_reviewed",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "curator",
          "curator_group_members",
          "curator_public",
          "mod_require_rereview",
          "auto_rssfeed",
          "auto_migrated",
          "enable_steam_china",
          "disable_steam_global",
          "skip_megaphone",
          "seasonal_sale_featuring",
          "show_library_demo_detail",
          "clear_library_demo_detail",
          "repost_source_possible",
          "autocreate_promotools",
          "vo_marketing_message",
        ],
        _e = [
          "patchnotes",
          "steam_award_nomination_request",
          "steam_award_vote_request",
          "mod_hide_library_overview",
          "steam_game_festival_artist_statement",
          "steam_game_festival_office_hour",
          "steam_game_festival_broadcast",
          "halloween",
          "curator",
          "curator_group_members",
          "curator_public",
          "audience_followers",
        ],
        pe = [s.HRy, s.LOv, s.HFK],
        ge = [
          s.L0X,
          s.KDJ,
          s.HRy,
          s.C$4,
          s.zA,
          s.y6,
          s.hGl,
          s.pIh,
          s.izQ,
          s.I5b,
          s.LOv,
          s.WNR,
        ];
      class he {
        constructor() {
          (0, l.Gn)(this);
        }
        GID = void 0;
        AnnouncementGID = void 0;
        clanSteamID = new d.b();
        forumTopicGID = void 0;
        type = s.DRF;
        appid = 0;
        name = new Map();
        description = new Map();
        timestamp_loc_updated = new Map();
        createTime = void 0;
        startTime = void 0;
        endTime = void 0;
        visibilityStartTime = void 0;
        visibilityEndTime = void 0;
        m_nBuildID = void 0;
        m_strBuildBranch = void 0;
        postTime = void 0;
        visibility_state = P.k_EEventStateUnpublished;
        broadcaster = void 0;
        jsondata = ce;
        nCommentCount = 0;
        nVotesUp = 0;
        nVotesDown = 0;
        comment_type;
        gidfeature;
        gidfeature2;
        featured_app_tagid;
        bOldAnnouncement = !1;
        announcementClanSteamID = void 0;
        loadedAllLanguages = !1;
        bLoaded = !1;
        deleteInProgress = !1;
        vecTags = new Array();
        creator_steamid;
        last_update_steamid = void 0;
        rtime32_last_modified = void 0;
        rtime32_last_solr_search_col_updated = void 0;
        rtime32_last_local_modification = void 0;
        rtime32_moderator_reviewed = void 0;
        video_preview_type = void 0;
        video_preview_id = void 0;
        has_live_stream;
        live_stream_viewer_count;
        m_overrideCurrentDay = void 0;
        BIsPartnerEvent() {
          return !this.bOldAnnouncement && Boolean(this.GID);
        }
        static FromJSON(e) {
          let t = new he(),
            a = JSON.parse(e);
          return (
            Object.assign(t, a),
            (t.name = new Map(a.name)),
            (t.description = new Map(a.description)),
            (t.vecTags = new Array(a.vecTags)),
            (t.clanSteamID = new d.b(a.clanSteamID)),
            (0, v.wT)(
              t.clanSteamID && t.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " + t.clanSteamID.ConvertTo64BitString(),
            ),
            a.broadcaster &&
              ((t.broadcaster = new d.b(a.broadcaster)),
              (0, v.wT)(
                t.broadcaster && t.broadcaster.BIsValid(),
                "Invalid Broadcast SteamID: " +
                  t.broadcaster.ConvertTo64BitString(),
              )),
            t
          );
        }
        toJSON(e) {
          let t = new Object();
          return (
            Object.assign(t, this),
            (t.name = Array.from(this.name)),
            (t.description = Array.from(this.description)),
            (t.tags = Array.from(this.vecTags)),
            (t.clanSteamID = this.clanSteamID.ConvertTo64BitString()),
            this.broadcaster &&
              (t.broadcaster = this.broadcaster.ConvertTo64BitString()),
            t
          );
        }
        clone(e = !1) {
          let t = new he();
          if (
            ((t.GID = this.GID),
            (t.AnnouncementGID = this.AnnouncementGID),
            (t.clanSteamID = this.clanSteamID),
            (t.bOldAnnouncement = this.bOldAnnouncement),
            (t.nCommentCount = this.nCommentCount),
            (t.nVotesUp = this.nVotesUp),
            (t.nVotesDown = this.nVotesDown),
            (t.forumTopicGID = this.forumTopicGID),
            (t.comment_type = this.comment_type),
            (t.gidfeature = this.gidfeature),
            (t.gidfeature2 = this.gidfeature2),
            (t.featured_app_tagid = this.featured_app_tagid),
            (t.creator_steamid = this.creator_steamid),
            (t.last_update_steamid = this.last_update_steamid),
            (t.rtime32_last_modified = this.rtime32_last_modified),
            (t.rtime32_last_solr_search_col_updated =
              this.rtime32_last_solr_search_col_updated),
            (t.rtime32_moderator_reviewed = this.rtime32_moderator_reviewed),
            (t.type = this.type),
            (t.appid = this.appid),
            (t.name = new Map()),
            this.name.forEach((e, a) => {
              t.name.set(a, e);
            }),
            (t.description = new Map()),
            this.description.forEach((e, a) => {
              t.description.set(a, e);
            }),
            (t.timestamp_loc_updated = new Map()),
            this.timestamp_loc_updated.forEach((e, a) => {
              t.timestamp_loc_updated.set(a, e);
            }),
            (t.createTime = Math.floor(Date.now() / 1e3)),
            (t.startTime = this.startTime),
            (t.endTime = this.endTime),
            (t.visibilityStartTime = this.visibilityStartTime),
            (t.visibilityEndTime = this.visibilityEndTime),
            (t.postTime = this.postTime),
            (t.visibility_state = this.visibility_state),
            (t.loadedAllLanguages = this.loadedAllLanguages),
            (t.bLoaded = this.bLoaded),
            (t.broadcaster = this.broadcaster
              ? new d.b(this.broadcaster.ConvertTo64BitString())
              : void 0),
            (t.jsondata = JSON.parse(JSON.stringify(this.jsondata))),
            (t.vecTags = new Array()),
            e
              ? ((t.m_nBuildID = this.m_nBuildID),
                (t.m_strBuildBranch = this.m_strBuildBranch),
                this.vecTags.forEach((e) => t.vecTags.push(e)))
              : this.vecTags.forEach((e) => {
                  me.includes(e) && t.vecTags.push(e);
                }),
            t.jsondata.email_setting)
          ) {
            let e = 100;
            for (let a of t.jsondata.email_setting.sections)
              a.unique_id || ((a.unique_id = `email_section_${e}`), e++);
          }
          return t;
        }
        GetLastReferencedSaleDayFromCapsules(e, t) {
          let a = t;
          return (
            e?.forEach((e) => {
              void 0 !== e.visibility_index &&
                (a =
                  void 0 === a
                    ? e.visibility_index
                    : Math.max(a, e.visibility_index));
            }),
            a
          );
        }
        GetLastReferencedSaleDay() {
          let e;
          for (const t of this.GetSaleSections())
            if ("tabs" === t.section_type) {
              if ((t.tabs?.length ?? 0) > 0)
                for (const a of t.tabs ?? [])
                  e = this.GetLastReferencedSaleDayFromCapsules(a.capsules, e);
            } else e = this.GetLastReferencedSaleDayFromCapsules(t.capsules, e);
          return (
            (this.jsondata.sale_num_headers ?? 0) > 1 &&
              (null == e || e < (this.jsondata.sale_num_headers ?? 0)) &&
              (e = this.jsondata.sale_num_headers),
            e
          );
        }
        GetDayIndexFromEventStart() {
          let e = 0;
          const t = y.HD.GetTimeNowWithOverride();
          void 0 !== this.startTime &&
            t >= this.startTime &&
            (e = Math.floor((t - this.startTime) / 86400)),
            void 0 !== this.m_overrideCurrentDay &&
              this.m_overrideCurrentDay >= 0 &&
              (e = this.m_overrideCurrentDay);
          const a = this.GetLastReferencedSaleDay() || 0;
          return Math.min(e, a);
        }
        GetNameWithFallback(e) {
          const t = f.A0.GetELanguageFallback(e);
          return this.name.get(e) || this.name.get(t);
        }
        GetGameTitle(e) {
          return b.A.Get().GetApp(this.appid)?.GetName();
        }
        BInRealmGlobal() {
          return !this.BHasTag("disable_steam_global");
        }
        BInRealmChina() {
          return this.BHasTag("enable_steam_china");
        }
        BIsLanguageValidForRealms(e) {
          return (
            !(
              !this.BInRealmGlobal() ||
              !f.A0.IsELanguageValidInRealm(e, n.TU.k_ESteamRealmGlobal)
            ) ||
            !(
              !this.BInRealmChina() ||
              !f.A0.IsELanguageValidInRealm(e, n.TU.k_ESteamRealmChina)
            )
          );
        }
        GetImgArray(e) {
          let t = [];
          if (
            (("background" !== e && "localized_title_image" != e) ||
              (t = this.jsondata.localized_title_image),
            "capsule" === e)
          )
            t = this.jsondata.localized_capsule_image;
          else if ("spotlight" === e)
            t = this.jsondata.localized_spotlight_image;
          else if ("email_full" === e || "email_centered" === e)
            t = this.jsondata.email_setting
              ? this.jsondata.email_setting.sections[0].localized_image
              : [];
          else if ("broadcast_left" === e)
            t = this.jsondata.localized_broadcast_left_image;
          else if ("broadcast_right" === e)
            t = this.jsondata.localized_broadcast_right_image;
          else if ("sale_header" === e)
            if ((this.jsondata.sale_num_headers ?? 0) > 1) {
              const e = Math.min(
                (this.jsondata.sale_num_headers ?? 0) - 1,
                this.GetDayIndexFromEventStart(),
              );
              t = this.jsondata.localized_per_day_sales_header?.[e];
            } else t = this.jsondata.localized_sale_header;
          else
            "sale_logo" === e
              ? (t = this.jsondata.localized_sale_logo)
              : "sale_overlay" === e
                ? (t = this.jsondata.localized_sale_overlay)
                : u.pb.includes(e)
                  ? (t = p.R.GetAllLocalizedGroupImageHashAndExts())
                  : "product_banner" === e
                    ? (t = this.jsondata.localized_sale_product_banner)
                    : "product_mobile_banner" === e
                      ? (t = this.jsondata.localized_sale_product_mobile_banner)
                      : "bestofyear_banner" === e
                        ? (t = this.jsondata.localized_bestofyear_banner)
                        : "bestofyear_banner_mobile" === e
                          ? (t =
                              this.jsondata.localized_bestofyear_banner_mobile)
                          : "localized_store_app_spotlight" === e
                            ? (t = this.jsondata.localized_store_app_spotlight)
                            : "localized_store_app_spotlight_mobile" === e &&
                              (t =
                                this.jsondata
                                  .localized_store_app_spotlight_mobile);
          return t;
        }
        GetImageURL(e, t = s.Bhc, a = u.wI.full) {
          const r = this.GetImgArray(e),
            i = r && r.length > t && null != r[t];
          return i && r[t]?.startsWith("http")
            ? r[t]
            : i
              ? m.z.GenerateURLFromHashAndExt(this.clanSteamID, r[t] ?? "", a)
              : void 0;
        }
        GetImageHash(e, t = s.Bhc) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t]
            ? a[t].substr(0, a[t].length - 4)
            : null;
        }
        GetImageHashAndExt(e, t = s.Bhc) {
          let a = this.GetImgArray(e);
          return a && a.length > t && null != a[t] ? a[t] : null;
        }
        BHasSomeImage(e) {
          let t = this.GetImgArray(e);
          return !!t && t.some((e) => null != e && e.length > 0);
        }
        BHasImage(e, t) {
          let a = this.GetImgArray(e);
          return !!a && a.length > t && null != a[t];
        }
        BHasAnnouncementGID() {
          return (
            null !== this.AnnouncementGID &&
            void 0 !== this.AnnouncementGID &&
            this.AnnouncementGID.length > 1
          );
        }
        GetAnnouncementGID() {
          return this.AnnouncementGID;
        }
        BHasForumTopicGID() {
          return (
            null !== this.forumTopicGID &&
            void 0 !== this.forumTopicGID &&
            this.forumTopicGID.length > 1
          );
        }
        GetForumTopicURL() {
          if (!this.BHasForumTopicGID()) return "";
          if (this.appid)
            return (
              w.TS.COMMUNITY_BASE_URL +
              "app/" +
              this.appid +
              "/eventcomments/" +
              this.forumTopicGID
            );
          {
            const e = g.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && e.vanity_url)
              return (
                w.TS.COMMUNITY_BASE_URL +
                "groups/" +
                e.vanity_url +
                "/eventcomments/" +
                this.forumTopicGID
              );
          }
          return (
            w.TS.COMMUNITY_BASE_URL +
            "gid/" +
            this.clanSteamID.ConvertTo64BitString() +
            "/eventcomments/" +
            this.forumTopicGID
          );
        }
        BIsEventInFuture() {
          return y.HD.GetTimeNowWithOverride() < (this.startTime ?? 0);
        }
        BHasEventEnded() {
          return (this.endTime ?? 0) < y.HD.GetTimeNowWithOverride();
        }
        UpdateVoteCount(e, t) {
          "up" == e
            ? (this.nVotesUp = (0, B.OQ)(
                this.nVotesUp + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ))
            : "down" == e &&
              (this.nVotesDown = (0, B.OQ)(
                this.nVotesDown + t,
                0,
                Number.MAX_SAFE_INTEGER,
              ));
        }
        GetImageFromBeginningOfDescription(e, t) {
          let a = this.GetDescriptionWithFallback(e);
          if (a) {
            let e = a.indexOf("[img]");
            if (-1 !== e && e < t) {
              e += 5;
              let t = a.indexOf("[/img]", e);
              if (-1 != t) {
                let r = a.substring(e, t).trim();
                if (0 != r.length) return m.z.ReplacementTokenToClanImageURL(r);
              }
            }
          }
          return null;
        }
        GetAppIDOrReferenceAppID() {
          return this.appid
            ? this.appid
            : this.jsondata?.referenced_appids?.[0];
        }
        GetImageURLWithFallback(e, t, a = u.wI.full, r = !0) {
          const i = this.GetImageURL(e, t, a);
          if (i && i.trim().length > 0) return i;
          const n = f.A0.GetELanguageFallback(t);
          if (t != n) {
            const t = this.GetImageURL(e, n, a);
            if (t && t.trim().length > 0) return t;
          }
          const s = g.ac.GetClanInfoByClanAccountID(
            this.clanSteamID.GetAccountID(),
          );
          if ("capsule" == e) {
            let e = this.GetImageFromBeginningOfDescription(
              t,
              Number.MAX_VALUE,
            );
            if (e && (r || (0, T.ZF)(e))) return e;
            let a = this.appid;
            if (!a && s && ((s.is_creator_home && !s.is_ogg) || s.is_curator)) {
              if (!this.jsondata?.referenced_appids?.length)
                return s.avatar_full_url;
              a = this.jsondata.referenced_appids[0];
            }
            b.A.Get().QueueAppRequest(a, { include_assets: !0 });
            const i = b.A.Get().GetApp(a);
            return i &&
              i.BContainDataRequest({ include_assets: !0 }) &&
              i.GetAssets()
              ? i.GetAssets()?.GetMainCapsuleURL()
              : s?.avatar_full_url
                ? s.avatar_full_url
                : w.TS.STORE_ICON_BASE_URL + a + "/header.jpg";
          }
          return "background" == e &&
            s &&
            ((s.is_creator_home && !s.is_ogg) || s.is_curator)
            ? s.creator_page_bg_url
            : this.GetFallbackArtworkScreenshot();
        }
        GetFallbackArtworkScreenshot() {
          if (this.appid) {
            b.A.Get().QueueAppRequest(this.appid, { include_screenshots: !0 });
            const e = b.A.Get().GetApp(this.appid);
            let t = Number(
                this.bOldAnnouncement
                  ? this.AnnouncementGID
                  : null == this.GID
                    ? 0
                    : this.GID,
              ),
              a = e?.GetScreenshots(e.BHasAgeSafeScreenshots());
            return a && a.length > 1 ? ((t %= a.length), a[t]) : "";
          }
          if (this.clanSteamID && this.GetEventType() != s.ajI) {
            const e = g.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            );
            if (e && ((e.is_creator_home && !e.is_ogg) || e.is_curator))
              return e.avatar_full_url;
          }
          return "";
        }
        BImageNeedScreenshotFallback(e, t) {
          let a = this.GetImageURL(e, t);
          if (!a || 0 == a.length) {
            const r = f.A0.GetELanguageFallback(t);
            t != r && (a = this.GetImageURL(e, r));
          }
          return !a || 0 == a.length;
        }
        GetImageForSizeAsArrayWithFallback(e, t, a, r) {
          let i = new Array();
          if (!this.BImageNeedScreenshotFallback(e, t)) {
            const r = this.GetImageURLWithFallback(e, t, a);
            if ((r && i.push(r), a != u.wI.full)) {
              const a = this.GetImageURLWithFallback(e, t, u.wI.full);
              a && i.push(a);
            }
          }
          const n = this.GetFallbackArtworkScreenshot();
          return n && !r && i.push(n), i;
        }
        GetDescriptionWithFallback(e) {
          const t = f.A0.GetELanguageFallback(e);
          return this.description.get(e) || this.description.get(t);
        }
        BIsImageSafeForAllAges(e, t) {
          const a = g.ac.GetClanInfoByClanAccountID(
              this.clanSteamID.GetAccountID(),
            ),
            r = f.A0.GetELanguageFallback(t);
          return (
            null != this.GetImageURL(e, t) ||
            (t != r && null != this.GetImageURL(e, r)) ||
            (this.appid &&
              b.A.Get().GetApp(this.appid)?.BHasAgeSafeScreenshots()) ||
            (!this.appid &&
              a &&
              ((a.is_creator_home && !a.is_ogg) || a.is_curator))
          );
        }
        BIsVisibleEvent() {
          let e = Math.floor(y.HD.GetTimeNowWithOverride());
          return (
            this.visibility_state == P.k_EEventStateUnlisted ||
            (this.visibility_state == P.k_EEventStateVisible &&
              e > (this.visibilityStartTime ?? 0) &&
              ((this.visibilityEndTime ?? 0) < 10 ||
                e < (this.visibilityEndTime ?? 0)))
          );
        }
        BIsStagedEvent() {
          return this.visibility_state == P.k_EEventStateStaged;
        }
        BIsUnlistedEvent() {
          return this.visibility_state == P.k_EEventStateUnlisted;
        }
        GetStartTimeAndDateUnixSeconds() {
          return this.startTime ?? 0;
        }
        GetEndTimeAndDateUnixSeconds() {
          return this.endTime ?? 0;
        }
        GetPostTimeAndDateUnixSeconds() {
          return this.postTime ?? 0;
        }
        GetVisibilityStartTimeAndDateUnixSeconds() {
          return this.visibilityStartTime ?? 0;
        }
        BIsEventActionEnabled() {
          return (
            !!this.jsondata.action_end_time &&
            (this.jsondata.action_end_time > y.HD.GetTimeNowWithOverride() ||
              (1575396e3 == this.jsondata.action_end_time &&
                1606845600 > y.HD.GetTimeNowWithOverride()))
          );
        }
        BHasSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return !1;
          let t = this.jsondata.localized_subtitle[e];
          return null != t && "" != t;
        }
        GetSubTitle(e) {
          if (
            !this.jsondata ||
            !this.jsondata.localized_subtitle ||
            e >= this.jsondata.localized_subtitle.length
          )
            return "";
          let t = this.jsondata.localized_subtitle[e];
          return t || "";
        }
        GetSubTitleWithLanguageFallback(e) {
          return this.jsondata
            ? f.NT.GetWithFallback(this.jsondata.localized_subtitle, e)
            : "";
        }
        GetSubTitleWithSummaryFallback(e) {
          return (
            f.NT.GetWithFallback(this.jsondata?.localized_subtitle, e) ||
            he.GenerateSummaryFromText(this.GetDescriptionWithFallback(e))
          );
        }
        GetSummaryWithFallback(e, t) {
          return (
            f.NT.GetWithFallback(this.jsondata?.localized_summary, e) ||
            he.GenerateSummaryFromText(this.GetDescriptionWithFallback(e), t)
          );
        }
        GetSummary(e) {
          return f.NT.Get(this.jsondata?.localized_summary ?? [], e);
        }
        BHasSummary(e) {
          return Boolean(this.GetSummary(e));
        }
        static GenerateSummaryFromText(e, t) {
          return e && 0 != e.trim().length
            ? ((e = (0, i.Yj)(e, [
                "img",
                "h1",
                "h2",
                "h3",
                "spoiler",
                "table",
                "previewyoutube",
                "looping_media",
                "roomeffect",
                "sticker",
              ])),
              (e = (0, i.zV)(e, ["p"], " ")),
              (e = (0, i.zV)(e)),
              (e = (0, E.aX)(e)),
              (0, E.bC)(e, t || 180))
            : "";
        }
        BHasTag(e) {
          return -1 != this.vecTags.indexOf(e);
        }
        BHasTagStartingWith(e) {
          return this.vecTags.some((t) => t?.startsWith(e));
        }
        BIsOGGEvent() {
          return Boolean(this.appid) && this.appid > 0;
        }
        BShowLibrarySpotlight(e) {
          if (!e) return Boolean(this.jsondata.library_spotlight);
          if (!this.jsondata.library_spotlight) return !1;
          if (pe.includes(this.type)) return !1;
          const t = new Date().getTime() / 1e3;
          return (
            !(ge.includes(this.type) && this.endTime && t > this.endTime) &&
            !(this.startTime && t > this.startTime + 60 * I.Kp.PerDay)
          );
        }
        BShowLibrarySpotlightText() {
          return Boolean(this.jsondata.library_spotlight_text);
        }
        BHasBroadcastEnabled() {
          return !!this.jsondata.bBroadcastEnabled;
        }
        BEventCanShowBroadcastWidget(e) {
          if (this.jsondata.bSaleEnabled) return this.BHasBroadcastEnabled();
          const t = y.HD.GetTimeNowWithOverride(),
            a = this.endTime ? this.endTime : t + 3600;
          return (
            this.BHasBroadcastEnabled() &&
            !!this.jsondata.broadcast_whitelist &&
            this.jsondata.broadcast_whitelist.length > 0 &&
            (e || ((this.startTime ?? 0) - 600 <= t && t < a))
          );
        }
        BHasBroadcastForceBanner() {
          return !!this.jsondata.broadcast_force_banner;
        }
        BSaleShowBroadcastAtTopOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "broadcast" == e.section_type,
            )
          );
        }
        BSaleShowCuratorRecommendationAtBottomOfPage() {
          return !(
            this.jsondata.sale_sections &&
            this.jsondata.sale_sections.some(
              (e) => "curator_recommendation" == e.section_type,
            )
          );
        }
        GetBroadcastChatVisibility() {
          return this.jsondata.broadcastChatSetting || "hide";
        }
        GetBroadcastTitle(e) {
          return (
            f.NT.GetWithFallback(this.jsondata.localized_broadcast_title, e) ||
            (0, f.we)(
              this.jsondata.default_broadcast_title ??
                "#Broadcast_default_title_dev",
            )
          );
        }
        GetBroadcastWhitelist() {
          return this.jsondata.broadcast_whitelist ?? [];
        }
        GetBroadcastWhitelistAsSteamIDs() {
          return (
            this.jsondata.broadcast_whitelist?.map((e) =>
              d.b.InitFromAccountID(e).ConvertTo64BitString(),
            ) ?? []
          );
        }
        BIsBroadcastAccountIDWhiteListed(e) {
          return (this.jsondata.broadcast_whitelist || []).includes(Number(e));
        }
        BHasSaleEnabled() {
          return !!this.jsondata.bSaleEnabled;
        }
        BHasSaleVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_vanity_id)
          );
        }
        GetSaleVanity() {
          return this.jsondata.sale_vanity_id ?? "";
        }
        BHasSaleUpdateLandingPageVanity() {
          return (
            !!this.jsondata.bSaleEnabled &&
            Boolean(this.jsondata.sale_update_landing_page_vanity_id)
          );
        }
        GetSaleUpdateLandingPageVanity() {
          return this.jsondata.sale_update_landing_page_vanity_id ?? "";
        }
        GetSaleURL() {
          if (!this.jsondata.bSaleEnabled) return null;
          if (this.jsondata.sale_update_landing_page_vanity_id)
            return (
              w.TS.STORE_BASE_URL +
              `app${this.appid}/landing/${this.jsondata.sale_update_landing_page_vanity_id}`
            );
          if (!Boolean(this.jsondata.sale_vanity_id))
            return (
              w.TS.STORE_BASE_URL +
              "newshub/" +
              (this.appid
                ? "app/" + this.appid
                : "group/" + this.clanSteamID.GetAccountID()) +
              "/view/" +
              this.GID
            );
          if (this.BUsesContentHubForItemSource()) {
            const e = this.jsondata.source_content_hub;
            return e
              ? "string" == typeof e
                ? w.TS.STORE_BASE_URL + "category/" + e
                : "category" == e.type
                  ? w.TS.STORE_BASE_URL + "category/" + e.category
                  : "tags" == e.type
                    ? w.TS.STORE_BASE_URL +
                      "tags/" +
                      ((0, f.l4)() || "en") +
                      "/" +
                      e.tagid
                    : "freetoplay" == e.type
                      ? w.TS.STORE_BASE_URL + "genre/Free%20to%20Play/"
                      : "earlyaccess" == e.type
                        ? w.TS.STORE_BASE_URL + "genre/Early%20Access/"
                        : w.TS.STORE_BASE_URL + e.type
              : w.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
          }
          if (!this.jsondata.sale_vanity_id_valve_approved_for_sale_subpath) {
            if (h.pF.BHasCreatorHomeLoaded(this.clanSteamID)) {
              const e = h.pF.GetCreatorHome(this.clanSteamID);
              return (
                e?.GetCreatorHomeURL("developer") +
                "sale/" +
                this.jsondata.sale_vanity_id
              );
            }
            return (
              w.TS.STORE_BASE_URL +
              "curator/" +
              this.clanSteamID.GetAccountID() +
              "/sale/" +
              this.jsondata.sale_vanity_id
            );
          }
          return w.TS.STORE_BASE_URL + "sale/" + this.jsondata.sale_vanity_id;
        }
        BHasEmailEnabled() {
          return (
            !!this.jsondata.email_setting && this.jsondata.email_setting.bEnable
          );
        }
        GetSaleSections() {
          return this.jsondata.sale_sections ?? [];
        }
        GenerateDynamicSaleSections(e, t, a, r) {
          const i = [],
            n = {
              section_type: "unselected_empty",
              capsules: [],
              events: [],
              links: [],
              localized_label: [],
              default_label: "",
            };
          let s = 100009;
          return (
            e &&
              i.push({
                ...n,
                section_type: "footer_self_creator_home",
                unique_id: s++,
                curator_clan_id: this.clanSteamID.GetAccountID(),
              }),
            t &&
              i.push({
                ...n,
                section_type: "footer_browse_more",
                unique_id: s++,
              }),
            r &&
              i.push(this.GenerateDynamicCreatorHomeItemBrowserSection(s++, n)),
            a &&
              i.push({
                ...n,
                section_type: "footer_default_social_share",
                unique_id: s++,
              }),
            i
          );
        }
        GetSaleSectionIncludingFooterSections() {
          const e = this.jsondata?.sale_show_creator,
            t = this.jsondata.sale_browse_more_button,
            a =
              0 == this.GetSaleSectionsByType("social_share").length &&
              !this.jsondata.sale_default_social_media_disabled,
            r = this.GetEventType() == s.ajI;
          return e || t || a || r
            ? [
                ...this.GetSaleSections(),
                ...this.GenerateDynamicSaleSections(!!e, !!t, a, r),
              ]
            : this.GetSaleSections();
        }
        GetSaleSectionByID(e) {
          if (e > A) {
            return this.GenerateDynamicSaleSections(!0, !0, !0, !0).find(
              (t) => t.unique_id == e,
            );
          }
          return this.jsondata.sale_sections?.find((t) => t.unique_id == e);
        }
        GetSaleSectionCount() {
          return this.jsondata.sale_sections?.length ?? 0;
        }
        GetSaleSectionsByType(e) {
          return (
            this.jsondata.sale_sections?.filter((t) => t.section_type == e) ??
            []
          );
        }
        GetLastUpdateTime() {
          return this.rtime32_last_modified ?? 0;
        }
        GetLastUpdaterSteamIDStr() {
          return this.last_update_steamid ?? "";
        }
        GetSaleSectionFirstMatchByType(e) {
          const t = this.jsondata.sale_sections?.length ?? 0;
          if (0 != t)
            for (let a = 0; a < t; ++a)
              if (this.jsondata.sale_sections[a].section_type === e)
                return this.jsondata.sale_sections[a];
        }
        static AccumulateCapsuleListIDs(e, t, a, r) {
          e &&
            e.forEach((e) => {
              if (e) {
                e.type && t.has(e.type) && ((r && !r(e.id)) || a.add(e.id));
              }
            });
        }
        GetSaleItemOfType(e, t) {
          if (!this.jsondata.sale_sections) return new Set();
          const a = new Set(e),
            r = new Set();
          if (
            ((0, v.wT)(
              !this.jsondata.bOptimizedForSize,
              "Cannot find all items in optimized json",
            ),
            this.jsondata.bOptimizedForSize && "dev" == w.TS.WEB_UNIVERSE)
          )
            throw new Error(
              "GetSaleOfItemType called on a truncated jsondata.",
            );
          return (
            this.jsondata.tagged_items?.forEach((e) => {
              he.AccumulateCapsuleListIDs([e.capsule], a, r, t);
            }),
            this.jsondata.sale_sections.forEach((e) => {
              if (ee(e.section_type))
                he.AccumulateCapsuleListIDs(e.capsules, a, r, t);
              else if ("tabs" === e.section_type && e.tabs)
                for (const i of e.tabs)
                  he.AccumulateCapsuleListIDs(i.capsules, a, r, t);
            }),
            r
          );
        }
        GetSaleItemCountOfType(e, t) {
          return this.GetSaleItemOfType(e, t).size;
        }
        GetSaleFeaturedAppsCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemosCount(e) {
          return this.GetSaleItemCountOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundlesCount(e) {
          return this.GetSaleItemCountOfType(["bundle"], e);
        }
        GetSaleFeaturedPackagesCount(e) {
          return this.GetSaleItemCountOfType(["sub"], e);
        }
        GetSaleFeaturedApps(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music"],
            e,
          );
        }
        GetSaleFeaturedAppsAndDemos(e) {
          return this.GetSaleItemOfType(
            ["game", "application", "software", "dlc", "music", "demo"],
            e,
          );
        }
        GetSaleFeaturedBundles(e) {
          return this.GetSaleItemOfType(["bundle"], e);
        }
        GetSaleFeaturedPackages(e) {
          return this.GetSaleItemOfType(["sub"], e);
        }
        GetTaggedItems() {
          return this.jsondata.tagged_items || [];
        }
        BHasScheduleEnabled() {
          return this.jsondata.bScheduleEnabled;
        }
        GetEventType() {
          return this.type;
        }
        GetEventTypeAsString() {
          return (0, S.rG)(this.type);
        }
        GetCategoryAsString(e) {
          return this.BHasTag("steam_award_nomination_request")
            ? (0, f.we)("#PartnerEvent_SteamAwardNominations")
            : this.BHasTag("steam_award_vote_request")
              ? (0, f.we)("#PartnerEvent_SteamAwardVoteRequest")
              : this.BHasTag("steam_game_festival_artist_statement")
                ? (0, f.we)("#PartnerEvent_SteamGameFestival_ArtistState")
                : this.BHasTag("steam_game_festival_office_hour")
                  ? (0, f.we)("#PartnerEvent_SteamGameFestival_OfficeHour")
                  : this.BHasTag("steam_game_festival_broadcast") ||
                      (this.BHasTagStartingWith("sale_nextfest_") &&
                        this.type == s.KDJ)
                    ? (0, f.we)("#PartnerEvent_SteamGameFestival_Broadcast")
                    : this.BHasTag("vo_marketing_message") && e
                      ? (0, f.we)("#PartnerEvent_MM_MajorUpdate")
                      : this.GetEventTypeAsString();
        }
        GetAllTags() {
          return this.vecTags;
        }
        BMatchesAllTags(e) {
          let t = !0;
          return (
            e?.forEach((e) => {
              this.vecTags.includes(e) || (t = !1);
            }),
            t
          );
        }
        BAllowedSteamStoreSpotlight() {
          return Boolean(this.jsondata.store_spotlight);
        }
        BHasLibaryHomeSpotlight() {
          return Boolean(this.jsondata.library_home_spotlight);
        }
        BHasSaleProductBanners() {
          return (
            !!this.jsondata.bSaleEnabled &&
            (this.BHasSomeImage("product_banner") ||
              this.BHasSomeImage("product_banner_override"))
          );
        }
        GetSteamAwardCategory() {
          return this.jsondata.steam_award_category_suggestion ?? o.Q5.qZ;
        }
        GetSteamAwardNomineeCategories() {
          return this.jsondata.steam_award_category_voteids ?? [];
        }
        BIsLockedToGameOwners() {
          return Boolean(
            this.jsondata.ownership_requirement_info?.bLockedToAppOwners,
          );
        }
        GetRequiredAppIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredAppIDs
            : [];
        }
        GetRequiredPackageIDs() {
          return this.jsondata.ownership_requirement_info
            ? this.jsondata.ownership_requirement_info.rgRequiredPackageIDs
            : [];
        }
        BUseSubscriptionLayout() {
          return !!this.jsondata.sale_use_subscription_layout;
        }
        BIsLockedToPartnerAppRights() {
          return Boolean(
            this.jsondata.app_right_requirement_info?.bLockedToPartnerAppRights,
          );
        }
        GetRequiredPartnerAppRights() {
          return this.jsondata.app_right_requirement_info;
        }
        GetValveAccessLog() {
          return Array.isArray(this.jsondata.valve_access_log)
            ? this.jsondata.valve_access_log
            : [];
        }
        BUsesContentHubForItemSource() {
          return (
            this.jsondata.item_source_type === oe.k_EContentHub &&
            Boolean(this.jsondata.source_content_hub)
          );
        }
        GetContentHubType() {
          return this.BUsesContentHubForItemSource()
            ? null == this.jsondata.source_content_hub
              ? "games"
              : "string" == typeof this.jsondata.source_content_hub
                ? "category"
                : this.jsondata.source_content_hub.type
            : void 0;
        }
        GetContentHubCategory() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? this.jsondata.source_content_hub
              : this.jsondata.source_content_hub.category;
        }
        GetContentHubTag() {
          return null == this.jsondata.source_content_hub
            ? void 0
            : "string" == typeof this.jsondata.source_content_hub
              ? 0
              : this.jsondata.source_content_hub.tagid;
        }
        GetContentHub() {
          return "string" == typeof this.jsondata.source_content_hub
            ? { type: "category", category: this.jsondata.source_content_hub }
            : this.jsondata.source_content_hub;
        }
        BContentHubDiscountedOnly() {
          return !!this.jsondata.content_hub_discounted_only;
        }
        BIsBackgroundImageGroupingEnabled() {
          return !!this.jsondata.sale_background_img_groups?.enabled;
        }
        GetSalePageGroupDefinition() {
          return this.jsondata.sale_background_img_groups;
        }
        GetSalePageBackgroundImageGroupCount() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? (this.jsondata.sale_background_img_groups.groups?.length ?? 0)
            : 0;
        }
        GetAllSalePageGroups() {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups
            : [];
        }
        GetSalePageBackgroundGroup(e) {
          return this.jsondata.sale_background_img_groups?.enabled
            ? this.jsondata.sale_background_img_groups.groups?.[e]
            : void 0;
        }
        GetIncludedRealmList() {
          const e = new Array();
          return (
            this.BInRealmGlobal() && e.push(n.TU.k_ESteamRealmGlobal),
            this.BInRealmChina() && e.push(n.TU.k_ESteamRealmChina),
            (0, v.wT)(
              e.length > 0,
              `Event ${this.GID} is currently configured so that no realms are valid for display. Either enable Steam China or Global to address this issue`,
            ),
            e
          );
        }
        BIsValidForRealm(e) {
          return this.GetIncludedRealmList().includes(e);
        }
        BIsNextFest() {
          const e = this.jsondata.sale_vanity_id;
          return (
            new d.b(this.clanSteamID).GetAccountID() == _.GU &&
            e &&
            e.toLowerCase().startsWith("nextfest")
          );
        }
        GenerateDynamicCreatorHomeItemBrowserSection(e, t) {
          return {
            ...t,
            section_type: "sale_item_browser",
            unique_id: e,
            item_browse_section_data: {
              enable_search: !0,
              tabs: [
                "all_released",
                "popularpurchased",
                "all_upcoming",
                "discounted",
              ],
              prefer_assets_without_overrides: !1,
            },
            prefer_assets_without_overrides: !1,
            enable_faceted_browsing:
              (h.pF.GetCreatorHome(this.clanSteamID)?.GetAppIDList().length ??
                0) >= 7,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            background_gradient_top: "#0000006b",
            background_gradient_bottom: "#0000006b",
            facet_sort_order: 1,
            cap_item_count: 24,
            show_more_count: 48,
            facet_auto_generate_options: {
              only_facets: [
                { loc_token: "#App_Taxonomy_Survey_QSuperGenreTitle" },
                {
                  loc_token: "#AppTypeLabelTitle",
                  only_values: [
                    "#AppTypeLabel_game",
                    "#AppTypeLabel_dlc",
                    "#AppTypeLabel_demo",
                    "#AppTypeLabel_music",
                  ],
                  initially_selected_values: ["#AppTypeLabel_game"],
                },
                { loc_token: "#Sale_Preferences" },
              ],
              initially_expanded_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
              prioritized_facets: [
                "#AppTypeLabelTitle",
                "#App_Taxonomy_Survey_QSuperGenreTitle",
              ],
            },
          };
        }
      }
      function ye(e) {
        return e?.replace(/[()]/g, "\\$&");
      }
      (0, r.Cg)([l.sH], he.prototype, "GID", void 0),
        (0, r.Cg)([l.sH], he.prototype, "AnnouncementGID", void 0),
        (0, r.Cg)([l.sH], he.prototype, "forumTopicGID", void 0),
        (0, r.Cg)([l.sH], he.prototype, "type", void 0),
        (0, r.Cg)([l.sH], he.prototype, "appid", void 0),
        (0, r.Cg)([l.sH], he.prototype, "name", void 0),
        (0, r.Cg)([l.sH], he.prototype, "description", void 0),
        (0, r.Cg)([l.sH], he.prototype, "timestamp_loc_updated", void 0),
        (0, r.Cg)([l.sH], he.prototype, "startTime", void 0),
        (0, r.Cg)([l.sH], he.prototype, "endTime", void 0),
        (0, r.Cg)([l.sH], he.prototype, "visibilityStartTime", void 0),
        (0, r.Cg)([l.sH], he.prototype, "visibilityEndTime", void 0),
        (0, r.Cg)([l.sH], he.prototype, "m_nBuildID", void 0),
        (0, r.Cg)([l.sH], he.prototype, "m_strBuildBranch", void 0),
        (0, r.Cg)([l.sH], he.prototype, "postTime", void 0),
        (0, r.Cg)([l.sH], he.prototype, "visibility_state", void 0),
        (0, r.Cg)([l.sH], he.prototype, "broadcaster", void 0),
        (0, r.Cg)([l.sH], he.prototype, "jsondata", void 0),
        (0, r.Cg)([l.sH], he.prototype, "nCommentCount", void 0),
        (0, r.Cg)([l.sH], he.prototype, "nVotesUp", void 0),
        (0, r.Cg)([l.sH], he.prototype, "nVotesDown", void 0),
        (0, r.Cg)([l.sH], he.prototype, "bOldAnnouncement", void 0),
        (0, r.Cg)([l.sH], he.prototype, "announcementClanSteamID", void 0),
        (0, r.Cg)([l.sH], he.prototype, "loadedAllLanguages", void 0),
        (0, r.Cg)([l.sH], he.prototype, "bLoaded", void 0),
        (0, r.Cg)([l.sH], he.prototype, "deleteInProgress", void 0),
        (0, r.Cg)([l.sH], he.prototype, "vecTags", void 0),
        (0, r.Cg)([l.sH], he.prototype, "last_update_steamid", void 0),
        (0, r.Cg)([l.sH], he.prototype, "rtime32_last_modified", void 0),
        (0, r.Cg)(
          [l.sH],
          he.prototype,
          "rtime32_last_solr_search_col_updated",
          void 0,
        ),
        (0, r.Cg)(
          [l.sH],
          he.prototype,
          "rtime32_last_local_modification",
          void 0,
        ),
        (0, r.Cg)([l.sH], he.prototype, "rtime32_moderator_reviewed", void 0),
        (0, r.Cg)([l.sH], he.prototype, "video_preview_type", void 0),
        (0, r.Cg)([l.sH], he.prototype, "video_preview_id", void 0),
        (0, r.Cg)([l.sH], he.prototype, "m_overrideCurrentDay", void 0);
    },
    38390: (e, t, a) => {
      a.d(t, { B9: () => d, RR: () => c, hE: () => m });
      var r = a(90626),
        i = a(37085),
        n = a(6379),
        s = a(4434),
        o = a(17720),
        l = (a(78327), a(17690), a(61859));
      a(41735), a(68797);
      function c(e) {
        const [t, a] = (0, r.useState)(() => n.O3.GetClanEventModel(e)),
          i = (0, s.m)("usePartnerEventByEventGID");
        return (
          (0, r.useEffect)(() => {
            e &&
              t?.GID != e &&
              (n.O3.Init(),
              n.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                [e],
                [],
                i,
              ).then((t) => {
                1 != t?.length || t[0].GID != e || i.token.reason || a(t[0]);
              }));
          }, [e, t, i]),
          t
        );
      }
      function d(e, t, a) {
        const [l, c] = (0, r.useState)(t ? n.O3.GetClanEventModel(t) : void 0),
          [d, m] = (0, r.useState)(!!e && !!t),
          [u, _] = (0, r.useState)(),
          [p, g] = (0, r.useState)(i.R),
          h = (0, s.m)("usePartnerEventByClanAccountAndEventGID");
        return (
          (0, r.useEffect)(() => {
            (async () => {
              try {
                if (l?.GID != t && t && e) {
                  n.O3.Init();
                  const r = o.b.InitFromClanID(e);
                  let s;
                  try {
                    s =
                      await n.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                        r,
                        t,
                        0,
                        a,
                      );
                  } catch (e) {
                    _(e?.response?.data?.err_msg),
                      g(e?.response?.data?.success || i.zi);
                  }
                  h.token.reason || c(s);
                }
              } finally {
                m(!1);
              }
            })();
          }, [e, t, l, a, h]),
          { eventModel: l, bLoading: d, sErrorMessage: u, eResult: p }
        );
      }
      function m(e) {
        let t = "" + e;
        const a = l.A0.GetELanguageFallback(e);
        return e != a && (t += "_" + a), t;
      }
    },
    27666: (e, t, a) => {
      a.d(t, { z: () => p });
      var r = a(7221),
        i = a(22837),
        n = a(37085),
        s = a(3577),
        o = a(34214),
        l = a(12611),
        c = a(17720),
        d = a(81393),
        m = a(68797),
        u = a(82817),
        _ = a(8527);
      const p = {
        GetBaseURL: () => `${_.TS.CLAN_CDN_ASSET_URL}images/`,
        GetBaseURLV2: () => `${_.TS.CLAN_CDN_ASSET_URL}locimages/`,
        ReplacementTokenToClanImageURL(e) {
          return (e = e.replace(l.lw, this.GetBaseURL())).replace(
            "http://",
            "https://",
          );
        },
        ExtractHashFromBBCodeURL(e) {
          const t =
            /\/(?<clanid>[0-9]+)\/(?<filename>[0-9a-f]*)(?<extension>\.[^\.]*)$/.exec(
              e,
            );
          return t?.groups
            ? [t.groups.filename, parseInt(t.groups.clanid)]
            : [void 0, void 0];
        },
        GetExtensionString: (e) =>
          (null != e.file_type ? (0, u.EG)(e.file_type) : null) ?? ".jpg",
        GetHashAndExt(e) {
          return e ? e.image_hash + this.GetExtensionString(e) : null;
        },
        GetThumbHashAndExt(e) {
          return e ? e.thumbnail_hash + this.GetExtensionString(e) : null;
        },
        GetHashFromHashAndExt(e) {
          let t = e.substring(e.lastIndexOf("."));
          return e.substring(0, e.length - t.length);
        },
        GetExtStringFromHashAndExt: (e) => e.substring(e.lastIndexOf(".")),
        GenerateURLFromHashAndExt(e, t, a = r.wI.full) {
          return this.GenerateURLFromHashAndExtAndLang(e, t, a, i.xPp, void 0);
        },
        GenerateURLFromHashAndExtAndLang(e, t, a = r.wI.full, n, s) {
          e instanceof c.b && (e = e.GetAccountID());
          let o = this.GetBaseURL();
          const l = null != n && n != i.xPp;
          if (a != r.wI.full || l) {
            let r = t.substring(t.lastIndexOf(".")),
              c = t.substring(0, t.length - r.length);
            return l && n != i.Bhc && "localized_image_group" == s
              ? o + e + "/" + c + "/" + (0, i.x6o)((0, i.LgB)(n)) + r
              : o + e + "/" + c + a + r;
          }
          return o + e + "/" + t;
        },
        GetHashAndExtFromURL(e) {
          let t = this.GetBaseURL();
          return e?.startsWith(t)
            ? -1 == (e = e.substring(t.length)).indexOf("/")
              ? null
              : (e = e.substring(e.indexOf("/") + 1))
            : null;
        },
        GenerateEditableURLFromHashAndExt(e, t, a) {
          let r =
            _.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/showclanimage/?image_hash_and_ext=" +
            t;
          return a && (r += "&lang=" + a), r;
        },
        GetMimeType: (e) => (0, u.ab)(e),
        async AsyncGetImageResolution(e, t, a, r, i) {
          const n = t + this.GetExtensionString({ file_type: a }),
            s = this.GenerateEditableURLFromHashAndExt(e, n);
          return await this.AsyncGetImageResolutionInternal(s, r, i);
        },
        async AsyncGetImageResolutionInternal(e, t, a) {
          const r = (0, s.x0)();
          let i = new Image();
          (i.crossOrigin = "anonymous"),
            (i.onerror = (t) => {
              const i = { success: n.zi };
              a ||
                ((i.err_msg =
                  "Load fail on url " +
                  e +
                  " with error: " +
                  (0, m.H)(t).strErrorMsg),
                console.error(i.err_msg)),
                (i.success = n.zi),
                r.resolve(i);
            }),
            (i.onload = () => {
              const t = { success: n.zi };
              (t.width = i.width),
                (t.height = i.height),
                (0, d.wT)(
                  t.width > 0 && t.height > 0,
                  "unexpected image resolution discovered for strURL: " + e,
                ),
                (t.success = n.R),
                r.resolve(t);
            }),
            (i.src = e),
            t.token.promise.catch(() => {
              const e = { success: n.zi };
              return (i.onload = () => {}), (e.success = n.e9), e;
            });
          const o = new Promise((e, t) => setTimeout(() => t(), 1e4));
          let l;
          try {
            l = await Promise.race([o, r.promise]);
          } catch {
            l = { success: n._3, err_msg: "We timed out processing images" };
          }
          return l;
        },
        BIsClanImageVideo: (e) =>
          e.file_type == o.bg.nn || e.file_type == o.bg.pJ,
      };
    },
    68359: (e, t, a) => {
      a.d(t, { R: () => g });
      var r = a(34629),
        i = a(37085),
        n = a(22837),
        s = a(41735),
        o = a.n(s),
        l = a(14947),
        c = a(17720),
        d = a(62490),
        m = a(78327),
        u = a(7221),
        _ = a(27666);
      class p {
        m_curLocImageGroup = null;
        m_curLocImageGroupType = null;
        constructor() {
          (0, l.Gn)(this),
            "dev" == m.TS.WEB_UNIVERSE && (window.g_ClanImageStore = this);
        }
        static async BDoesClanImageFileExistsOnCDNOrOrigin(e, t, a, r) {
          let n =
              m.TS.COMMUNITY_BASE_URL +
              "gid/" +
              t.ConvertTo64BitString() +
              "/hasclanimagefile",
            s = { image_hash_and_ext: a, lang: "" + r };
          return (
            (await o().get(n, { params: s, cancelToken: e && e.token })).data
              .success == i.R
          );
        }
        SetPrimaryImageForImageGroup(e, t) {
          (this.m_curLocImageGroup &&
            this.m_curLocImageGroup.primaryImage.imageid == e.imageid &&
            t == this.m_curLocImageGroupType) ||
            ((this.m_curLocImageGroup = {
              primaryImage: e,
              localized_images: [],
            }),
            (this.m_curLocImageGroupType = t),
            (this.m_curLocImageGroup.localized_images = (0, d.$Y)(
              this.m_curLocImageGroup.localized_images,
              n.bP9,
              null,
            )));
        }
        GetPrimaryImageForImageGroup() {
          return this.m_curLocImageGroup?.primaryImage;
        }
        ClearImageGroup() {
          (this.m_curLocImageGroup = null),
            (this.m_curLocImageGroupType = null);
        }
        GetLocalizedImageGroupForEdit() {
          return this.m_curLocImageGroup;
        }
        GetLocalizedImageGroupForEditAsURL(e, t) {
          if (this.m_curLocImageGroup) {
            let a = this.m_curLocImageGroup.primaryImage;
            return this.m_curLocImageGroup.localized_images[t]
              ? this.m_curLocImageGroup.localized_images[t]
              : _.z.GenerateURLFromHashAndExt(e, _.z.GetHashAndExt(a) ?? "");
          }
          return null;
        }
        async DetermineAvailableLocalizationForGroup(e) {
          if (!this.m_curLocImageGroup) return;
          const t = this.m_curLocImageGroup.primaryImage,
            a = c.b.InitFromClanID(t.clanAccountID),
            r = _.z.GetHashAndExt(t) ?? "",
            i = [];
          for (let t = n.Bhc; t < n.bP9; ++t)
            i.push(p.BDoesClanImageFileExistsOnCDNOrOrigin(e, a, r, t));
          const s = await Promise.all(i);
          (0, l.h5)(() => {
            for (let e = n.Bhc; e < n.bP9; ++e)
              s[e] &&
                (this.m_curLocImageGroup.localized_images[e] =
                  _.z.GenerateURLFromHashAndExtAndLang(
                    a,
                    r,
                    u.wI.full,
                    e,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
          });
        }
        SetLocalizedImageGroupAtLang(e, t, a) {
          this.m_curLocImageGroup &&
            (this.m_curLocImageGroup.localized_images[e] = a
              ? _.z.GenerateURLFromHashAndExtAndLang(
                  t,
                  a,
                  u.wI.full,
                  e,
                  this.m_curLocImageGroupType ?? void 0,
                )
              : null);
        }
        AddLocalizeImageUploaded(e, t) {
          if (!this.m_curLocImageGroup) return;
          let a = this.m_curLocImageGroup.primaryImage;
          if (a?.image_hash == e) {
            const e = c.b.InitFromClanID(a.clanAccountID),
              r = _.z.GetHashAndExt(a);
            r &&
              (this.m_curLocImageGroup.localized_images[t] =
                _.z.GenerateURLFromHashAndExtAndLang(
                  e,
                  r,
                  u.wI.full,
                  t,
                  this.m_curLocImageGroupType ?? void 0,
                ));
          }
        }
        GetAllLocalizedGroupImages() {
          return (
            (this.m_curLocImageGroup &&
              this.m_curLocImageGroup.localized_images) ||
            []
          );
        }
        GetAllLocalizedGroupImageHashAndExts() {
          return this.GetAllLocalizedGroupImages()
            .filter(Boolean)
            .map((e) => _.z.GetHashAndExtFromURL(e));
        }
      }
      (0, r.Cg)([l.sH], p.prototype, "m_curLocImageGroup", void 0);
      const g = new p();
    },
    6379: (e, t, a) => {
      a.d(t, { ZQ: () => w, O3: () => G, MX: () => T, dB: () => A });
      var r = a(34629),
        i = a(41735),
        n = a.n(i),
        s = a(14947),
        o = a(31561),
        l = a(22837),
        c = a(37085),
        d = a(62641),
        m = a(17720),
        u = a(55563),
        _ = a(62490),
        p = a(81393),
        g = a(68797),
        h = a(6144),
        y = a(41338),
        b = a(78327),
        v = a(90626),
        f = a(84933),
        B = a(38390);
      function S(e) {
        return (
          (null == e.gid || null == e.gid || "0" == e.gid) &&
          !!e.announcement_body &&
          "0" != e.announcement_body.gid
        );
      }
      function E(e) {
        return S(e) ? d.cB + e.announcement_body?.gid : e.gid;
      }
      class I {
        appid;
        date;
        can_play;
        playtime;
        announcementid;
        constructor(e) {
          (0, p.wT)(
            "number" == typeof e.appid,
            "AJAX updated app returned a non-numeric AppID! Did the PHP change?",
          ),
            (this.appid = e.appid),
            (this.date = e.date),
            (this.can_play = e.can_play),
            (this.playtime = e.playtime),
            (this.announcementid = e.announcementid);
        }
      }
      class w {
        constructor(e = !1) {
          (0, s.Gn)(this), (this.m_bOnlySummary = e);
        }
        m_bOnlySummary = !1;
        m_mapExistingEvents = new Map();
        m_mapEventUpdateCallback = new Map();
        m_mapAnnouncementBodyToEvent = new Map();
        m_mapClanToGIDs = new Map();
        m_mapAppIDToGIDs = new Map();
        m_mapAdjacentAnnouncementGIDs = new Map();
        m_mapUpdatedApps = new Map();
        m_tsUpdatedAppsQueryTime = 0;
        m_rgQueuedEventsClanIDs = new Array();
        m_rgQueuedEventsUniqueIDs = new Array();
        m_rgQueuedEventsForEditFlags = new Array();
        m_QueuedEventTimeout = new h.LU();
        m_PendingInfoPromise;
        m_PendingInfoResolve;
        m_bLoadedFromConfig = !1;
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, u.v)("PartnerEventStore");
            this.ValidateStoreDefault(e) &&
              e.forEach((e) => {
                if (e) {
                  let t = new m.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    this.m_mapExistingEvents.set(
                      d.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let t = (0, b.Fd)("partnereventstore", "application_config");
            this.ValidateStoreDefault(t) &&
              t.forEach((e) => {
                if (e) {
                  let t = new m.b(e.clan_steamid);
                  const a = this.InsertEventModelFromClanEventData(t, e);
                  e.announcement_body &&
                    !this.m_mapExistingEvents.has(
                      d.cB + e.announcement_body.gid,
                    ) &&
                    this.m_mapExistingEvents.set(
                      d.cB + e.announcement_body.gid,
                      a,
                    );
                }
              });
            let a = (0, b.Fd)("partnereventadjacents", "application_config");
            this.ValidateAdjacentEvent(a) &&
              (("dev" != b.TS.WEB_UNIVERSE && "beta" != b.TS.WEB_UNIVERSE) ||
                console.log(
                  "DEV_DEBUG: CPartnerEventStore loading adjacents gids payload: " +
                    a.length,
                ),
              a.forEach((e) => {
                e &&
                  this.m_mapAdjacentAnnouncementGIDs.set(
                    e.announcementGID,
                    e.adjacents,
                  );
              })),
              "dev" == b.TS.WEB_UNIVERSE &&
                console.log(
                  "PartnerEventStore Loaded events: " +
                    this.m_mapExistingEvents.size +
                    " with adjacent info: " +
                    this.m_mapExistingEvents.size,
                ),
              (this.m_bLoadedFromConfig = !0);
          }
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              t[0] &&
              "object" == typeof t[0]
            ) &&
            ("string" == typeof t[0].gid ||
              ("object" == typeof t[0].announcement_body &&
                "string" == typeof t[0].announcement_body.gid))
          );
        }
        ValidateAdjacentEvent(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "string" == typeof t[0].announcementGID &&
              Array.isArray(t[0].adjacents) &&
            (0 == t[0].adjacents.length || "string" == typeof t[0].adjacents[0])
          );
        }
        GetPartnerEventChangeCallback(e) {
          let t = this.m_mapEventUpdateCallback.get(e);
          return (
            t ||
              (this.m_mapEventUpdateCallback.set(e, new h.lu()),
              (t = this.m_mapEventUpdateCallback.get(e))),
            t
          );
        }
        GetClanEventGIDs(e) {
          let t = this.m_mapClanToGIDs.get(e.GetAccountID());
          return t || [];
        }
        GetClanEventGIDsForApp(e) {
          let t = this.m_mapAppIDToGIDs.get(e);
          return t || [];
        }
        GetClanEventModel(e) {
          return this.m_mapExistingEvents.get(e);
        }
        BHasClanEventModel(e) {
          return this.m_mapExistingEvents.has(e);
        }
        BHasClanAnnouncementGID(e) {
          if (this.m_mapAnnouncementBodyToEvent.has(e)) {
            const t = this.m_mapAnnouncementBodyToEvent.get(e);
            return !!t && this.BHasClanEventModel(t);
          }
          return !1;
        }
        GetClanEventGIDFromAnnouncementGID(e) {
          return this.m_mapAnnouncementBodyToEvent.get(e);
        }
        GetClanEventFromAnnouncementGID(e) {
          const t = this.m_mapAnnouncementBodyToEvent.get(e);
          return t ? this.m_mapExistingEvents.get(t) : void 0;
        }
        DefaultEventSortFunction(e, t) {
          return e.startTime == t.startTime
            ? (0, y.kd)(e.GID ?? "", t.GID ?? "")
            : (t.startTime ?? 0) - (e.startTime ?? 0);
        }
        RegisterClanEvents(e) {
          if (e)
            for (const t of e) {
              const e = E(t);
              if (!this.m_mapExistingEvents.has(e)) {
                const e = new m.b(t.clan_steamid);
                this.InsertEventModelFromClanEventData(e, t);
              }
            }
        }
        GetRankedClanEvents(e, t) {
          let a = [],
            r = e
              ? this.GetClanEventGIDs(e)
              : t
                ? this.GetClanEventGIDsForApp(t)
                : void 0;
          if (!r || 0 == r.length) return a;
          for (let e of r) {
            let t = this.GetClanEventModel(e);
            t && a.push(t);
          }
          return a.sort(this.DefaultEventSortFunction), a;
        }
        InsertEventModelFromClanEventData(e, t) {
          const a = (function (e, t) {
            let a = new d.lh();
            if (
              ((a.clanSteamID = e),
              (0, p.wT)(
                a.clanSteamID && a.clanSteamID.BIsValid(),
                "Invalid Clan SteamID: " +
                  a.clanSteamID.ConvertTo64BitString() +
                  " " +
                  b.TS.EUNIVERSE,
              ),
              (a.GID = E(t)),
              (a.bOldAnnouncement = S(t)),
              (a.appid = t.appid ?? 0),
              (a.createTime = t.rtime_created),
              (a.startTime = t.rtime32_start_time),
              (a.endTime = t.rtime32_end_time),
              (a.visibilityStartTime = t.rtime32_visibility_start),
              (a.visibilityEndTime = t.rtime32_visibility_end),
              (a.loadedAllLanguages = !1),
              (a.type = t.event_type ?? l.DRF),
              (a.nVotesUp = t.votes_up ?? 0),
              (a.nVotesDown = t.votes_down ?? 0),
              (a.comment_type = t.comment_type),
              (a.gidfeature = t.gidfeature),
              (a.gidfeature2 = t.gidfeature2),
              (a.featured_app_tagid = t.featured_app_tagid),
              (a.vecTags = new Array()),
              (a.creator_steamid = t.creator_steamid),
              (a.last_update_steamid = t.last_update_steamid),
              (a.rtime32_last_modified = t.rtime32_last_modified),
              (a.rtime32_moderator_reviewed = t.rtime_mod_reviewed),
              (a.video_preview_type = t.video_preview_type),
              (a.video_preview_id = t.video_preview_id),
              (a.has_live_stream = t.has_live_stream),
              (a.live_stream_viewer_count = t.live_stream_viewer_count),
              (a.m_nBuildID = t.build_id),
              (a.m_strBuildBranch = t.build_branch),
              t.announcement_body)
            ) {
              let e = t.announcement_body;
              (a.AnnouncementGID = e.gid),
                a.name.set(e.language, e.headline),
                a.description.set(e.language, e.body),
                a.timestamp_loc_updated.clear(),
                (a.forumTopicGID = e.forum_topic_id),
                (a.nCommentCount = e.commentcount),
                (a.postTime = e.posttime),
                a.bOldAnnouncement && !e.hidden && (a.startTime = e.posttime),
                (a.announcementClanSteamID = new m.b(e.clanid)),
                e.tags &&
                  e.tags.length > 0 &&
                  e.tags.forEach((e) => a.vecTags.push(e)),
                !a.rtime32_last_solr_search_col_updated &&
                  a.rtime32_last_modified &&
                  ((a.rtime32_last_solr_search_col_updated =
                    a.rtime32_last_modified),
                  (a.rtime32_last_modified = e.updatetime));
            } else
              (a.AnnouncementGID = "0"),
                (a.forumTopicGID = t.forum_topic_id),
                a.name.clear(),
                a.description.clear(),
                a.timestamp_loc_updated.clear(),
                (a.postTime = t.rtime32_start_time),
                (a.nCommentCount = t.comment_count ?? 0),
                a.name.set(l.Bhc, t.event_name ?? ""),
                a.description.set(l.Bhc, t.event_notes ?? "");
            t.broadcaster_accountid &&
              (a.broadcaster = new m.b(t.broadcaster_accountid));
            const r = d.DJ;
            try {
              a.jsondata = {
                ...r,
                ...(t.jsondata ? JSON.parse(t.jsondata) : void 0),
              };
            } catch (e) {
              const t = (0, g.H)(e);
              throw (
                (console.error(
                  "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                    t.strErrorMsg,
                  t,
                ),
                e)
              );
            }
            if (
              ((a.jsondata.localized_capsule_image = (0, _.$Y)(
                a.jsondata.localized_capsule_image || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_title_image = (0, _.$Y)(
                a.jsondata.localized_title_image || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_subtitle = (0, _.$Y)(
                a.jsondata.localized_subtitle || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_summary = (0, _.$Y)(
                a.jsondata.localized_summary || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_broadcast_title = (0, _.$Y)(
                a.jsondata.localized_broadcast_title || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_broadcast_left_image = (0, _.$Y)(
                a.jsondata.localized_broadcast_left_image || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_broadcast_right_image = (0, _.$Y)(
                a.jsondata.localized_broadcast_right_image || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_sale_header = (0, _.$Y)(
                a.jsondata.localized_sale_header || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_sale_overlay = (0, _.$Y)(
                a.jsondata.localized_sale_overlay || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_sale_product_banner = (0, _.$Y)(
                a.jsondata.localized_sale_product_banner || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_sale_product_mobile_banner = (0, _.$Y)(
                a.jsondata.localized_sale_product_mobile_banner || [],
                l.bP9,
                null,
              )),
              (a.jsondata.localized_sale_logo = (0, _.$Y)(
                a.jsondata.localized_sale_logo || [],
                l.bP9,
                null,
              )),
              void 0 !== a.jsondata.sale_num_headers &&
                a.jsondata.localized_per_day_sales_header)
            )
              for (let e = 0; e < a.jsondata.sale_num_headers; ++e)
                a.jsondata.localized_per_day_sales_header[e] = (0, _.$Y)(
                  a.jsondata.localized_per_day_sales_header[e],
                  l.bP9,
                  null,
                );
            return (
              a.jsondata.sale_sections &&
                a.jsondata.sale_sections.forEach((e, t) => {
                  e.localized_label &&
                    (e.localized_label = (0, _.$Y)(
                      e.localized_label,
                      l.bP9,
                      null,
                    )),
                    "trailercarousel" === e.section_type &&
                      (e.show_as_carousel = !1),
                    (a.jsondata.sale_sections[t] = { ...d.G6, ...e });
                }),
              a.jsondata.email_setting &&
                a.jsondata.email_setting.sections &&
                a.jsondata.email_setting.sections.forEach((e) => {
                  void 0 !== e.localized_headline &&
                    null !== e.localized_headline &&
                    (e.localized_headline = (0, _.$Y)(
                      e.localized_headline,
                      l.bP9,
                      null,
                    )),
                    void 0 !== e.localized_body &&
                      null !== e.localized_body &&
                      (e.localized_body = (0, _.$Y)(
                        e.localized_body,
                        l.bP9,
                        null,
                      )),
                    void 0 !== e.localized_image &&
                      null !== e.localized_image &&
                      (e.localized_image = (0, _.$Y)(
                        e.localized_image,
                        l.bP9,
                        null,
                      ));
                }),
              a.jsondata.localized_title_image.forEach((e, t) => {
                if (null != e && "http" == e.substr(0, 4)) {
                  let r = e.lastIndexOf("/"),
                    i = e.substr(r + 1);
                  a.jsondata.localized_title_image[t] = i;
                }
              }),
              t.published
                ? t.unlisted
                  ? (a.visibility_state = d.zv.k_EEventStateUnlisted)
                  : t.hidden
                    ? (a.visibility_state = d.zv.k_EEventStateStaged)
                    : (a.visibility_state = d.zv.k_EEventStateVisible)
                : (a.visibility_state = d.zv.k_EEventStateUnpublished),
              a
            );
          })(e, t);
          return (
            this.InsertUniqueEventGID(e.GetAccountID(), a.appid, a.GID),
            this.m_mapExistingEvents.set(a.GID, a),
            a.AnnouncementGID &&
              a.AnnouncementGID.length > 1 &&
              this.m_mapAnnouncementBodyToEvent.set(a.AnnouncementGID, a.GID),
            (a.bLoaded = !0),
            a
          );
        }
        HelperInitializeNumSalesHeaderArray(e) {
          if ((e.jsondata.sale_num_headers ?? 0) > 1) {
            e.jsondata.localized_per_day_sales_header = [];
            for (let t = 0; t < (e.jsondata.sale_num_headers ?? 0); ++t)
              e.jsondata.localized_per_day_sales_header.push(
                (0, _.$Y)([], l.bP9, null),
              );
            e.m_overrideCurrentDay = 0;
          } else e.m_overrideCurrentDay = void 0;
        }
        GetAllClanEvents(e) {
          let t = new Array();
          return (
            this.m_mapClanToGIDs.has(e.GetAccountID()) &&
              this.m_mapClanToGIDs.get(e.GetAccountID()).forEach((e) => {
                let a = this.m_mapExistingEvents.get(e);
                a && t.push(a);
              }),
            t
          );
        }
        async QueueLoadPartnerEvent(e, t, a) {
          if (this.m_mapExistingEvents.has(t)) return;
          this.m_rgQueuedEventsClanIDs.push(e),
            this.m_rgQueuedEventsUniqueIDs.push(t),
            this.m_rgQueuedEventsForEditFlags.push(Boolean(a)),
            this.m_PendingInfoPromise ||
              (this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              ));
          const r = this.m_PendingInfoPromise,
            i = () => {
              const e = this.m_PendingInfoResolve,
                t = this.m_rgQueuedEventsClanIDs,
                a = this.m_rgQueuedEventsUniqueIDs,
                r = this.m_rgQueuedEventsForEditFlags;
              (this.m_PendingInfoPromise = void 0),
                (this.m_rgQueuedEventsClanIDs = new Array()),
                (this.m_rgQueuedEventsUniqueIDs = new Array()),
                (this.m_rgQueuedEventsForEditFlags = new Array()),
                this.InternalLoadPartnerEventList(t, a, r).then(() => e?.());
            };
          if (this.m_rgQueuedEventsClanIDs.length >= 30)
            this.m_QueuedEventTimeout.Cancel(), i();
          else if (!this.m_QueuedEventTimeout.IsScheduled()) {
            const e = 50;
            this.m_QueuedEventTimeout.Schedule(e, i);
          }
          return r;
        }
        async InternalLoadPartnerEventList(e, t, a) {
          let r = a.some((e) => e);
          const i =
              b.TS.STORE_BASE_URL +
              (r
                ? "events/ajaxgeteventdetailsforedit/"
                : "events/ajaxgeteventdetails/"),
            s = (0, B.hE)((0, l.sfN)(b.TS.LANGUAGE)),
            o = {
              clanid_list: e.join(","),
              uniqueid_list: t.join(","),
              lang_list: s,
              origin: self.origin,
            };
          try {
            const e = await n().get(i, { params: o, withCredentials: r });
            this.RegisterClanEvents(e.data.events);
          } catch (e) {
            let t = (0, g.H)(e);
            console.error("GetEventDetails hit error " + t.strErrorMsg, t);
          }
        }
        async LoadAdjacentPartnerEvents(e, t, a, r, i, n, s) {
          return this.InternalLoadAdjacentPartnerEvents(
            e,
            void 0,
            t,
            a,
            r,
            i,
            n,
            s,
          );
        }
        async LoadAdjacentPartnerEventsByAnnouncement(e, t, a, r, i, n, s) {
          return this.InternalLoadAdjacentPartnerEvents(
            void 0,
            e,
            t,
            a,
            r,
            i,
            n,
            s,
          );
        }
        async LoadAdjacentPartnerEventsByEvent(e, t, a, r, i, n, s) {
          const o = t || e.clanSteamID;
          return e.bOldAnnouncement
            ? this.InternalLoadAdjacentPartnerEvents(
                void 0,
                e.AnnouncementGID,
                o,
                a,
                r,
                i,
                n,
                s,
              )
            : this.InternalLoadAdjacentPartnerEvents(
                e.GID,
                e.AnnouncementGID,
                o,
                a,
                r,
                i,
                n,
                s,
              );
        }
        async InternalLoadAdjacentPartnerEvents(e, t, a, r, i, o, d, u) {
          let _ = new Array();
          if (t && this.m_mapAdjacentAnnouncementGIDs.has(t)) {
            let e = this.m_mapAdjacentAnnouncementGIDs.get(t),
              a = new Array();
            if (
              (e?.forEach((e) => {
                if (this.m_mapAnnouncementBodyToEvent.has(e)) {
                  let t = this.m_mapAnnouncementBodyToEvent.get(e);
                  t &&
                    this.m_mapExistingEvents.get(t) &&
                    _.push(this.m_mapExistingEvents.get(t));
                } else a.push(e);
              }),
              a.length > 0)
            ) {
              (
                await this.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                  void 0,
                  a,
                  u,
                )
              ).forEach((e) => _.push(e));
            }
          } else {
            let h =
              b.TS.STORE_BASE_URL + "events/ajaxgetadjacentpartnerevents/";
            const y = (0, B.hE)((0, l.sfN)(b.TS.LANGUAGE));
            d?.only_summaries &&
              !this.m_bOnlySummary &&
              ((0, p.wT)(
                this.m_bOnlySummary,
                "Only Summary: Incorrect parameter passed in, unsetting",
              ),
              (d.only_summaries = void 0));
            let v = {
              clan_accountid: a ? a.GetAccountID() : void 0,
              appid: r,
              count_before: i,
              count_after: o,
              gidevent: e,
              gidannouncement: t,
              lang_list: y,
              rtime_oldestevent: d ? d.rtime_oldestevent : void 0,
              require_tags:
                d && d.require_tags ? d.require_tags.join(",") : void 0,
              exclude_tags:
                d && d.exclude_tags ? d.exclude_tags.join(",") : void 0,
              require_no_tags: d ? d.require_no_tags : void 0,
              event_type_filter:
                d && d.event_type_filter
                  ? d.event_type_filter.join(",")
                  : void 0,
              exclude_event_types:
                d && d.exclude_event_types
                  ? d.exclude_event_types.join(",")
                  : void 0,
              only_summaries: d && !!d.only_summaries,
              origin: self.origin,
            };
            try {
              let i = await n().get(h, { params: v, cancelToken: u?.token });
              if (i?.data?.success == c.R)
                (0, s.h5)(() => {
                  for (let e of i.data.events) {
                    let t = E(e);
                    if (!this.m_mapExistingEvents.has(t)) {
                      let t = new m.b(e.clan_steamid);
                      this.InsertEventModelFromClanEventData(a || t, e);
                    }
                    _.push(this.m_mapExistingEvents.get(t));
                  }
                  if (0 == _.length)
                    if (e && this.BHasClanEventModel(e))
                      this.m_mapExistingEvents.get(e) &&
                        _.push(this.m_mapExistingEvents.get(e));
                    else if (t && this.BHasClanAnnouncementGID(t)) {
                      const e = this.GetClanEventFromAnnouncementGID(t);
                      e && _.push(e);
                    }
                });
              else {
                let e = (0, g.H)(i?.data);
                console.error(
                  "LoadAdjacentPartnerEvents Success but empty response:" +
                    r +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              let t = (0, g.H)(e);
              t.errorCode != c.e9 &&
                console.error(
                  "LoadAdjacentPartnerEvents hit error on appid:" +
                    r +
                    " clanAccount:" +
                    (a ? a.GetAccountID() : 0) +
                    " " +
                    t.strErrorMsg,
                  t,
                );
            }
          }
          return _;
        }
        async LoadPartnerEventsPageable(e, t, a = 0, r = 0, i) {
          let o = new Array(),
            l = b.TS.STORE_BASE_URL + "events/ajaxgetpartnereventspageable/",
            c = {
              clan_accountid: e ? e.GetAccountID() : void 0,
              appid: t,
              offset: a,
              count: r,
              l: b.TS.LANGUAGE,
              origin: self.origin,
              exclude_tags: i && i.length > 0 ? i?.join(",") : void 0,
            };
          try {
            let e = await n().get(l, { params: c });
            (0, s.h5)(() => {
              for (let t of e.data.events) {
                let e = E(t);
                if (!this.m_mapExistingEvents.has(e)) {
                  let e = new m.b(t.clan_steamid);
                  this.InsertEventModelFromClanEventData(e, t);
                }
                o.push(this.m_mapExistingEvents.get(e));
              }
            });
          } catch (e) {
            console.error(
              "LoadClanEventInDateRange hit error " + (0, g.H)(e).strErrorMsg,
            );
          }
          return o;
        }
        async GetBestEventsForCurrentUser(e, t, a) {
          let r = new Array(),
            i = {
              l: b.TS.LANGUAGE,
              include_steam_blog: !0,
              filter_to_played_within_days: e,
              include_only_game_updates: t,
            },
            o = b.TS.STORE_BASE_URL + "events/ajaxgetbesteventsforuser",
            l = await n().get(o, {
              params: i,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
          if (!l.data?.events) {
            let e = l.data?.err_msg || "";
            throw new Error(
              `GetBestEventsForCurrentUser request failed (${e})`,
            );
          }
          return (
            (0, s.h5)(() => {
              for (let e of l.data.events) {
                let t = E(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new m.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                let a = {
                  nAppPriority: e.nAppPriority,
                  bPossibleTakeOver: e.bPossibleTakeOver,
                  event: this.m_mapExistingEvents.get(t),
                };
                r.push(a);
              }
            }),
            r
          );
        }
        async LoadImportantEventsAroundToday(e, t, a, r, i, o) {
          let l = new Array(),
            c = new Array();
          c.push({ priority: 0, appids: t }),
            a && c.push({ priority: 1, appids: a }),
            r && c.push({ priority: 2, appids: r });
          let d = {
              count: e,
              strAppIDPriority: JSON.stringify({ prioritized_apps: c }),
              filterToEventTypes: o ? o.toString() : "",
              l: b.TS.LANGUAGE,
            },
            u = b.TS.STORE_BASE_URL + "events/ajaxgettodayboundedevents",
            _ = await n().get(u, {
              params: d,
              withCredentials: !0,
              cancelToken: i.token,
            });
          return (
            (0, s.h5)(() => {
              for (let e of _.data.events) {
                let t = E(e);
                if (!this.m_mapExistingEvents.has(t)) {
                  let t = new m.b(e.clan_steamid);
                  this.InsertEventModelFromClanEventData(t, e);
                }
                l.push(this.m_mapExistingEvents.get(t));
              }
            }),
            l
          );
        }
        InsertUniqueEventGID(e, t, a) {
          let r = this.m_mapClanToGIDs.get(e);
          r ||
            (this.m_mapClanToGIDs.set(e, new Array()),
            (r = this.m_mapClanToGIDs.get(e)));
          let i = this.m_mapAppIDToGIDs.get(t);
          i ||
            (this.m_mapAppIDToGIDs.set(t, new Array()),
            (i = this.m_mapAppIDToGIDs.get(t))),
            -1 == r.indexOf(a) && (r.push(a), i.push(a));
        }
        ResetModel() {}
        async DeleteClanEvent(e, t) {
          this.m_mapExistingEvents.has(t) &&
            (this.m_mapExistingEvents.get(t).deleteInProgress = !0);
          let a = new URLSearchParams();
          a.append("sessionid", b.TS.SESSIONID),
            a.append("bDelete", "1"),
            a.append("gid", t);
          const r = await n().post(
            b.TS.COMMUNITY_BASE_URL +
              "/gid/" +
              e.ConvertTo64BitString() +
              "/ajaxcreateupdatedeletepartnerevents/",
            a,
          );
          return this.RemoveGIDFromList(e, t), r.data;
        }
        RemoveGIDFromList(e, t) {
          if (
            (this.m_mapExistingEvents.delete(t),
            this.m_mapClanToGIDs.has(e.GetAccountID()))
          ) {
            let a = this.m_mapClanToGIDs.get(e.GetAccountID()),
              r = a.indexOf(t);
            r >= 0 && a.splice(r, 1);
          }
        }
        FlushEventFromCache(e, t) {
          if (e && this.m_mapExistingEvents.has(e)) {
            if (!t) {
              t = this.m_mapExistingEvents.get(e).AnnouncementGID;
            }
            this.m_mapExistingEvents.delete(e);
          }
          if (
            t &&
            (this.m_mapExistingEvents.has(d.cB + t) &&
              this.m_mapExistingEvents.delete(d.cB + t),
            this.m_mapAnnouncementBodyToEvent.has(t))
          ) {
            const e = this.m_mapAnnouncementBodyToEvent.get(t);
            e &&
              this.m_mapExistingEvents.has(e) &&
              this.m_mapExistingEvents.delete(e),
              this.m_mapAnnouncementBodyToEvent.delete(t);
          }
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
          e,
          t,
          a,
          r,
          i,
          s = !1,
        ) {
          let o = (0, B.hE)(s ? l.Bhc : (0, l.sfN)(b.TS.LANGUAGE)),
            c = {
              appid: t,
              clan_accountid: e ? e.GetAccountID() : void 0,
              announcement_gid: r,
              event_gid: a,
              lang_list: o,
              last_modified_time: i || 0,
              origin: self.origin,
              for_edit: s,
              only_summary: this.m_bOnlySummary,
            },
            d = null,
            u = null;
          if (s) {
            const a = (0, b.yK)();
            "community" === a
              ? ((u = b.TS.COMMUNITY_BASE_URL),
                (u += e ? "gid/" + e.ConvertTo64BitString() : "ogg/" + t),
                (u += "/"))
              : (u =
                  "partnerweb" === a
                    ? b.TS.PARTNER_BASE_URL + "sales/"
                    : b.TS.STORE_BASE_URL + "events/"),
              (u += "ajaxgetpartnereventforedit"),
              (d = { params: c, withCredentials: !0 });
          } else
            (u = b.TS.STORE_BASE_URL + "events/ajaxgetpartnerevent"),
              (d = { params: c, withCredentials: !1 });
          let _ = (await n().get(u, d)).data.event,
            g = E(_);
          if (
            !this.m_mapExistingEvents.has(g) ||
            (this.m_mapExistingEvents.get(g).rtime32_last_modified ?? 0) <
              (_.rtime32_last_modified ?? 0) ||
            (this.m_mapExistingEvents.get(g).rtime32_moderator_reviewed ?? 0) <
              (_.rtime_mod_reviewed ?? 0)
          ) {
            (0, p.wT)(
              _.clan_steamid,
              "ClanSteamID is missing from data we received",
            );
            let e = new m.b(_.clan_steamid);
            this.InsertEventModelFromClanEventData(e, _);
          }
          return this.m_mapExistingEvents.get(g);
        }
        async InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
          e,
          t,
          a,
          r,
          i,
          n,
        ) {
          if (a && this.m_mapExistingEvents.has(a))
            return this.m_mapExistingEvents.get(a);
          if (r) {
            if (this.m_mapExistingEvents.has(d.cB + r))
              return this.m_mapExistingEvents.get(d.cB + r);
            if (this.m_mapAnnouncementBodyToEvent.has(r)) {
              const e = this.m_mapAnnouncementBodyToEvent.get(r);
              if (e && this.m_mapExistingEvents.has(e))
                return this.m_mapExistingEvents.get(e);
            }
          }
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            t,
            a,
            r,
            i,
            n,
          );
        }
        async LoadPartnerEventFromAnnoucementGID(e, t, a, r) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            void 0,
            t,
            a,
            r,
          );
        }
        async LoadPartnerEventFromAnnoucementGIDAndClanSteamID(e, t, a, r) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            void 0,
            t,
            a,
            r,
          );
        }
        async LoadPartnerEventFromClanEventGID(e, t, a, r) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            void 0,
            e,
            t,
            void 0,
            a,
            r,
          );
        }
        async LoadPartnerEventFromClanEventGIDAndClanSteamID(e, t, a, r) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            void 0,
            t,
            void 0,
            a,
            r,
          );
        }
        async LoadPartnerEventGeneric(e, t, a, r, i) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGIDCached(
            e,
            t,
            a,
            r,
            i,
          );
        }
        async LoadHiddenPartnerEvent(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            t,
            void 0,
            0,
            !0,
          );
        }
        async LoadHiddenPartnerEventByAnnouncementGID(e, t) {
          return this.InternalLoadPartnerEventFromClanEventOrClanAnnouncementGID(
            e,
            void 0,
            void 0,
            t,
            0,
            !0,
          );
        }
        async HintLoadImportantUpdates() {
          const e = (0, o.tB)(36e5);
          if (e != this.m_tsUpdatedAppsQueryTime) {
            this.m_tsUpdatedAppsQueryTime = e;
            const t = { page: 1, numPerPage: 500, includeAnnouncements: !1 },
              a = b.TS.STORE_BASE_URL + "updated/ajaxgetmyappsraw",
              r = await n().get(a, { params: t, withCredentials: !0 });
            r.data.apps &&
              r.data.apps.length > 0 &&
              (0, s.h5)(() => {
                const e = new Map(r.data.apps?.map((e) => [e.appid, new I(e)]));
                this.m_mapUpdatedApps = e;
              });
          }
          return this.m_mapUpdatedApps;
        }
        GetAppImportantUpdate(e) {
          return (
            this.HintLoadImportantUpdates().catch((e) => {
              console.log("UpdatedApps failed to load: ", e.response?.data);
            }),
            this.m_mapUpdatedApps && this.m_mapUpdatedApps.get(e)
          );
        }
        async LoadClanEventLocalizationFromAnnouncementGID(e, t) {
          let a =
            b.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.ConvertTo64BitString() +
            "/announcements/ajaxgetlocalization/" +
            t;
          return (await n().get(a)).data.localization;
        }
        async LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(e, t, a) {
          const r = new Array(),
            i = b.TS.STORE_BASE_URL + "events/ajaxgetbatchedpartnerevent/",
            o = (0, B.hE)((0, l.sfN)(b.TS.LANGUAGE));
          let c = null,
            d = null;
          if (e) {
            let t = new Array();
            e.forEach((e) => {
              this.m_mapExistingEvents.has(e)
                ? r.push(this.m_mapExistingEvents.get(e))
                : t.push(e);
            }),
              t.sort(),
              (c = t);
          }
          if (t) {
            let e = new Array();
            t.forEach((t) => {
              if (
                this.m_mapAnnouncementBodyToEvent.has(t) &&
                this.m_mapAnnouncementBodyToEvent.get(t) &&
                this.m_mapExistingEvents.has(
                  this.m_mapAnnouncementBodyToEvent.get(t),
                )
              ) {
                let e = this.m_mapAnnouncementBodyToEvent.get(t);
                if (e) {
                  const t = this.m_mapExistingEvents.get(e);
                  t && r.push(t);
                }
              } else e.push(t);
            }),
              e.sort(),
              (d = e);
          }
          if (!c && !d) return r;
          const u = new Array();
          for (; (c?.length ?? 0) > 0 || (d?.length ?? 0) > 0; ) {
            let e = {
              event_gids:
                (c?.length ?? 0) > 0 ? c?.splice(0, 100).join(",") : void 0,
              announcement_gids:
                (d?.length ?? 0) > 0 ? d?.splice(0, 100).join(",") : void 0,
              lang_list: o,
              origin: self.origin,
            };
            u.push(
              n().get(i, { params: e, cancelToken: a ? a.token : void 0 }),
            );
          }
          try {
            const e = await Promise.all([...u]);
            let t = 0;
            (0, s.h5)(() =>
              e.forEach((e) => {
                if (e && e.data && e.data.events)
                  for (let t of e.data.events) {
                    let e = E(t);
                    if (!this.m_mapExistingEvents.has(e)) {
                      let e = new m.b(t.clan_steamid);
                      this.InsertEventModelFromClanEventData(e, t);
                    }
                    r.push(this.m_mapExistingEvents.get(e));
                  }
                else {
                  const t = (0, g.H)(e);
                  console.error(
                    "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs partial processing hit error " +
                      t.strErrorMsg,
                    t,
                  );
                }
                t += 1;
              }),
            );
          } catch (e) {
            const t = (0, g.H)(e);
            console.error(
              "LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs hit error " +
                t.strErrorMsg,
              t,
            );
          }
          return r;
        }
        async SavePartnerEventSaleAssets(e, t, a, r) {
          let i = null;
          if (!this.m_mapExistingEvents.has(t)) return !1;
          try {
            const s = `${b.TS.PARTNER_BASE_URL}promotion/sales/ajaxsaveasset/${e}`,
              o = new FormData();
            o.append("sessionid", b.TS.SESSIONID),
              o.append("gidclanevent", t),
              o.append("json", JSON.stringify(a)),
              o.append("pageStyles", JSON.stringify(r));
            const l = await n().post(s, o, { withCredentials: !0 });
            if (l?.data?.success == c.R) {
              const e = this.m_mapExistingEvents.get(t);
              if (e && e.jsondata)
                for (const t in a)
                  if (a.hasOwnProperty(t) && a[t]) {
                    const r = t,
                      i = a[r];
                    void 0 !== i && void 0 !== r && (e.jsondata[r] = i);
                  }
              return this.GetPartnerEventChangeCallback(t).Dispatch(e), !0;
            }
            i = (0, g.H)(l);
          } catch (e) {
            i = (0, g.H)(e);
          }
          return (
            console.error(
              "CPartnerEventStore.SavePartnerEventSaleAssets failed: " +
                i?.strErrorMsg,
              i,
            ),
            !1
          );
        }
        BIsSummaryOnlyStore() {
          return this.m_bOnlySummary;
        }
      }
      (0, r.Cg)([s.sH], w.prototype, "m_mapExistingEvents", void 0),
        (0, r.Cg)([s.sH], w.prototype, "m_mapAnnouncementBodyToEvent", void 0),
        (0, r.Cg)([s.sH], w.prototype, "m_mapClanToGIDs", void 0),
        (0, r.Cg)([s.sH], w.prototype, "m_mapAppIDToGIDs", void 0),
        (0, r.Cg)([s.sH], w.prototype, "m_mapUpdatedApps", void 0),
        (0, r.Cg)([s.XI], w.prototype, "Init", null),
        (0, r.Cg)([f.oI], w.prototype, "GetPartnerEventChangeCallback", null),
        (0, r.Cg)([s.XI], w.prototype, "RegisterClanEvents", null),
        (0, r.Cg)(
          [s.XI],
          w.prototype,
          "InsertEventModelFromClanEventData",
          null,
        ),
        (0, r.Cg)([s.XI], w.prototype, "DeleteClanEvent", null),
        (0, r.Cg)([s.XI], w.prototype, "RemoveGIDFromList", null),
        (0, r.Cg)([s.XI], w.prototype, "FlushEventFromCache", null),
        (0, r.Cg)([f.oI], w.prototype, "SavePartnerEventSaleAssets", null);
      const G = new w();
      window.g_PartnerEventStore = G;
      const T = new w(!0);
      function A(e, t, a = !1) {
        const [r, i] = (0, v.useState)(() => G.GetClanEventModel(t)),
          [n, s] = (0, v.useState)(!0),
          o = (0, v.useMemo)(() => m.b.InitFromClanID(e), [e]);
        return (
          (0, v.useEffect)(() => {
            !r &&
              e > 0 &&
              (G.Init(),
              G.LoadPartnerEventFromClanEventGIDAndClanSteamID(o, t, 0, a)
                .then(i)
                .finally(() => s(!1)));
          }, [o, t, r, e, a]),
          (0, f.hL)(a ? G.GetPartnerEventChangeCallback(t) : void 0, i),
          { eventModel: r, bLoading: n }
        );
      }
      window.g_PartnerEventSummaryStore = T;
    },
    55563: (e, t, a) => {
      function r(e) {
        return window.StoreDefaults ? window.StoreDefaults[e] : void 0;
      }
      a.d(t, { v: () => r });
    },
    82817: (e, t, a) => {
      a.d(t, {
        EG: () => s,
        II: () => u,
        Uz: () => d,
        aL: () => c,
        ab: () => n,
        zB: () => m,
      });
      var r = a(3577),
        i = a(34214);
      function n(e) {
        const t = e.toLowerCase();
        return t.endsWith(".jpg") || t.endsWith(".jpeg")
          ? "image/jpeg"
          : t.endsWith(".png")
            ? "image/png"
            : t.endsWith(".gif")
              ? "image/gif"
              : t.endsWith(".mp4")
                ? "video/mp4"
                : t.endsWith(".webm")
                  ? "video/webm"
                  : t.endsWith(".srt")
                    ? "text/srt"
                    : t.endsWith(".vtt")
                      ? "text/vtt"
                      : t.endsWith(".webp")
                        ? "image/webp"
                        : void 0;
      }
      function s(e) {
        switch (e) {
          case i.bg.iS:
            return ".jpg";
          case i.bg.CK:
            return ".gif";
          case i.bg.dU:
            return ".png";
          case i.bg.pJ:
            return ".webm";
          case i.bg.nn:
            return ".mp4";
          case i.bg.pi:
            return ".srt";
          case i.bg.k7:
            return ".vtt";
          case i.bg.wD:
            return ".webp";
        }
      }
      function o(e) {
        const t = (0, r.x0)(),
          a = new Image();
        return (
          (a.onload = () => t.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadImage failed to load the image, details", e),
              t.resolve(void 0);
          }),
          (a.src = e),
          t.promise
        );
      }
      function l(e) {
        const t = (0, r.x0)(),
          a = document.createElement("video");
        return (
          (a.preload = "metadata"),
          a.addEventListener("loadedmetadata", () => t.resolve(a)),
          (a.onerror = (e) => {
            console.error("LoadVideo failed to load the video, details", e),
              t.resolve(void 0);
          }),
          (a.src = e),
          t.promise
        );
      }
      function c(e) {
        return e.startsWith("image/");
      }
      function d(e) {
        return e.startsWith("video/");
      }
      async function m(e, t) {
        if (t) return l(URL.createObjectURL(e));
        {
          const t = (0, r.x0)(),
            a = new FileReader();
          (a.onload = () => t.resolve(a.result ?? void 0)),
            (a.onerror = () => {
              console.error(
                "GetMediaElementFromFile failed to load the image, details",
                a.error,
              ),
                t.resolve(void 0);
            }),
            a.readAsDataURL(e);
          const i = await t.promise;
          if (!i) return;
          return o(i.toString());
        }
      }
      function u(e) {
        return e
          ? e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : { width: e.width, height: e.height }
          : { width: 0, height: 0 };
      }
    },
    27543: (e, t, a) => {
      a.d(t, { JS: () => n, rG: () => s });
      var r = a(22837),
        i = a(61859);
      function n(e) {
        switch (e) {
          case r.Aqr:
          case r.I5b:
          case r.jO6:
          case r.Y3j:
          case r.Bb7:
          case r.TiP:
          case r.EPt:
          case r.E3D:
          case r.L0X:
          case r.KDJ:
          case r.Fa4:
          case r.Aav:
          case r.SRb:
          case r.HRy:
          case r.C$4:
          case r.zA:
          case r.y6:
          case r.hGl:
          case r.WNR:
          case r.pIh:
          case r.izQ:
          case r.LOv:
          case r.zcX:
          case r.DRF:
          case r.HFK:
            return !0;
        }
        return !1;
      }
      function s(e) {
        let t = "#PartnerEvent_" + e,
          a = (0, i.we)(t);
        return a != t ? a : (0, i.we)("#PartnerEvent_Other");
      }
    },
  },
]);
