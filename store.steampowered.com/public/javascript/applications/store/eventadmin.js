/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50970],
    {
      71698: (re, Ae, i) => {
        "use strict";
        i.d(Ae, { H: () => s, s: () => j });
        var e = i(90626),
          P = i(41623);
        let S = 0;
        function s(ce, k) {
          (0, e.useEffect)(() => {
            if (!(ce || k))
              return (
                S++,
                () => {
                  --S == 0 && (0, P.s)();
                }
              );
          }, [ce, k]);
        }
        function j(ce) {
          const [k, V] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const K = window.setTimeout(() => V(!0), ce);
            return () => window.clearTimeout(K);
          }, [ce]),
            s(k);
        }
      },
      94699: (re, Ae, i) => {
        "use strict";
        i.d(Ae, {
          w2: () => x,
          wN: () => T,
          Dw: () => O,
          vB: () => N,
          D$: () => e,
          bH: () => w,
        });
        var e = {};
        i.r(e), i.d(e, { w4: () => ce });
        var P = i(80613),
          S = i.n(P),
          s = i(75245),
          j = i(35038);
        const ce = 0,
          k = 1,
          V = 2,
          K = 3;
        function me(m) {
          return "unknown ENewsRecommendationState ( " + m + " )";
        }
        class U extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.gid || s.Sg(U.M()),
              P.Message.initialize(this, t, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    gid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    name: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                    type: {
                      n: 3,
                      d: 0,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    url: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                    associated_apps: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                    poll_interval: {
                      n: 6,
                      d: 300,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    kv_description: {
                      n: 7,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    kv_filter: {
                      n: 8,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    publish_to_clan_account_id: {
                      n: 9,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    language: {
                      n: 10,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    last_error: {
                      n: 11,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    last_update: {
                      n: 12,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    last_checked: {
                      n: 13,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = s.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(U.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new U();
            return U.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(U.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(U.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsFeedDef";
          }
        }
        class x extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              x.prototype.gid || s.Sg(x.M()),
              P.Message.initialize(this, t, 0, -1, [11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    gid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    news_feed_gid: {
                      n: 2,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    title: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                    url: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                    author: { n: 5, br: s.qM.readString, bw: s.gp.writeString },
                    rtime_date: {
                      n: 6,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    contents: {
                      n: 7,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    commited: { n: 8, br: s.qM.readBool, bw: s.gp.writeBool },
                    deleted: { n: 9, br: s.qM.readBool, bw: s.gp.writeBool },
                    tags: { n: 10, br: s.qM.readString, bw: s.gp.writeString },
                    appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                    recommendation_state: {
                      n: 12,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                    received_compensation: {
                      n: 13,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    received_for_free: {
                      n: 14,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    blurb: { n: 15, br: s.qM.readString, bw: s.gp.writeString },
                    event_subtitle: {
                      n: 16,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    event_summary: {
                      n: 17,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = s.w0(x.M())), x.sm_mbf;
          }
          toObject(t = !1) {
            return x.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(x.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(x.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new x();
            return x.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(x.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(x.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsFeedPostDef";
          }
        }
        class z extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              z.prototype.content || s.Sg(z.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    content: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    preserve_newlines: {
                      n: 2,
                      d: !1,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = s.w0(z.M())), z.sm_mbf;
          }
          toObject(t = !1) {
            return z.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(z.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(z.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new z();
            return z.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(z.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(z.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_ConvertHTMLToBBCode_Request";
          }
        }
        class H extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.converted_content || s.Sg(H.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    converted_content: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    found_html: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = s.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(H.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new H();
            return H.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(H.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(H.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_ConvertHTMLToBBCode_Response";
          }
        }
        class B extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              B.prototype.rss_message || s.Sg(B.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    rss_message: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    unique_id: {
                      n: 2,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    title: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                    desc: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                    jsondata: {
                      n: 5,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    post: { n: 6, c: x },
                    valid_post: { n: 7, br: s.qM.readBool, bw: s.gp.writeBool },
                    post_error_msg: {
                      n: 8,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
          }
          toObject(t = !1) {
            return B.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(B.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(B.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new B();
            return B.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(B.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return B.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(B.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNewsPartnerEventPreview";
          }
        }
        class O extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              O.prototype.rss_url || s.Sg(O.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    rss_url: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    lang: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = s.w0(O.M())), O.sm_mbf;
          }
          toObject(t = !1) {
            return O.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(O.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(O.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new O();
            return O.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(O.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(O.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PreviewPartnerEvents_Request";
          }
        }
        class Q extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.rss_url || s.Sg(Q.M()),
              P.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    rss_url: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    results: { n: 2, c: B, r: !0, q: !0 },
                    error_msg: {
                      n: 3,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = s.w0(Q.M())), Q.sm_mbf;
          }
          toObject(t = !1) {
            return Q.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(Q.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(Q.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new Q();
            return Q.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(Q.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(Q.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PreviewPartnerEvents_Response";
          }
        }
        class _ extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _.prototype.clan_account_id || s.Sg(_.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
          }
          toObject(t = !1) {
            return _.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(_.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(_.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new _();
            return _.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(_.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return _.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(_.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetNewsFeedByRepublishClan_Request";
          }
        }
        class J extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.feeds || s.Sg(J.M()),
              P.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: { feeds: { n: 1, c: U, r: !0, q: !0 } },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = s.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(J.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new J();
            return J.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(J.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(J.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetNewsFeedByRepublishClan_Response";
          }
        }
        class N extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              N.prototype.post || s.Sg(N.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    post: { n: 1, c: x },
                    draft: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = s.w0(N.M())), N.sm_mbf;
          }
          toObject(t = !1) {
            return N.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(N.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(N.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new N();
            return N.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(N.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(N.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PublishPartnerEvent_Request";
          }
        }
        class I extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.clan_event_gid || s.Sg(I.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    clan_event_gid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    news_post_gid: {
                      n: 2,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(I.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new I();
            return I.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(I.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(I.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_PublishPartnerEvent_Response";
          }
        }
        class T extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.news_feed_gid || s.Sg(T.M()),
              P.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    news_feed_gid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    start_index: {
                      n: 2,
                      d: 0,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    amount: {
                      n: 3,
                      d: 100,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = s.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(T.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new T();
            return T.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(T.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(T.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetBatchPublishedPartnerEvent_Request";
          }
        }
        class g extends P.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              g.prototype.clan_account_id || s.Sg(g.M()),
              P.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    clan_account_id: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    news_feed_gid: {
                      n: 2,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    clan_event_gid: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.qM.readFixed64String,
                      pbr: s.qM.readPackedFixed64String,
                      bw: s.gp.writeRepeatedFixed64String,
                    },
                    news_post_gid: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: s.qM.readFixed64String,
                      pbr: s.qM.readPackedFixed64String,
                      bw: s.gp.writeRepeatedFixed64String,
                    },
                    news_url: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: s.qM.readString,
                      bw: s.gp.writeRepeatedString,
                    },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
          }
          toObject(t = !1) {
            return g.toObject(t, this);
          }
          static toObject(t, l) {
            return s.BT(g.M(), t, l);
          }
          static fromObject(t) {
            return s.Uq(g.M(), t);
          }
          static deserializeBinary(t) {
            let l = new (S().BinaryReader)(t),
              p = new g();
            return g.deserializeBinaryFromReader(p, l);
          }
          static deserializeBinaryFromReader(t, l) {
            return s.zj(g.MBF(), t, l);
          }
          serializeBinary() {
            var t = new (S().BinaryWriter)();
            return g.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, l) {
            s.i0(g.M(), t, l);
          }
          serializeBase64String() {
            var t = new (S().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetBatchPublishedPartnerEvent_Response";
          }
        }
        var w;
        ((m) => {
          function t($, ue, ve) {
            return $.SendMsg(
              "News.ConvertHTMLToBBCode#1",
              (0, j.I8)(z, ue, ve),
              H,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          m.ConvertHTMLToBBCode = t;
          function l($, ue, ve) {
            return $.SendMsg(
              "News.PreviewPartnerEvents#1",
              (0, j.I8)(O, ue, ve),
              Q,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.PreviewPartnerEvents = l;
          function p($, ue, ve) {
            return $.SendMsg(
              "News.GetNewsFeedByRepublishClan#1",
              (0, j.I8)(_, ue, ve),
              J,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetNewsFeedByRepublishClan = p;
          function A($, ue, ve) {
            return $.SendMsg(
              "News.PublishPartnerEvent#1",
              (0, j.I8)(N, ue, ve),
              I,
              { ePrivilege: 1 },
            );
          }
          m.PublishPartnerEvent = A;
          function Y($, ue, ve) {
            return $.SendMsg(
              "News.GetBatchPublishedPartnerEvent#1",
              (0, j.I8)(T, ue, ve),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          m.GetBatchPublishedPartnerEvent = Y;
        })(w || (w = {}));
      },
      37656: (re, Ae, i) => {
        "use strict";
        i.d(Ae, { w: () => I });
        var e = i(41735),
          P = i.n(e),
          S = i(14947),
          s = i(65946),
          j = i(90626),
          ce = i(27066),
          k = i(8323),
          V = i(30096),
          K = i(3166),
          me = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          x = (T, g, w, m) => {
            for (
              var t = m > 1 ? void 0 : m ? U(g, w) : g, l = T.length - 1, p;
              l >= 0;
              l--
            )
              (p = T[l]) && (t = (m ? p(g, w, t) : p(t)) || t);
            return m && t && me(g, w, t), t;
          };
        const z = class $t {
          constructor() {
            (0, S.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const g = new $t();
            return (
              (g.giveaway_id = this.giveaway_id),
              (g.seconds_until_drawing = this.seconds_until_drawing),
              (g.rtime_start = this.rtime_start),
              (g.rtime_end = this.rtime_end),
              (g.closed = this.closed),
              (g.winner_count = this.winner_count),
              g
            );
          }
        };
        x([S.sH], z.prototype, "giveaway_id", 2),
          x([S.sH], z.prototype, "seconds_until_drawing", 2),
          x([S.sH], z.prototype, "rtime_start", 2),
          x([S.sH], z.prototype, "rtime_end", 2),
          x([S.sH], z.prototype, "closed", 2),
          x([S.sH], z.prototype, "winner_count", 2);
        let H = z;
        const B = class Je {
          constructor() {
            (0, S.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(g, w) {
            return g + "_" + w;
          }
          GetInfoByInstance(g, w) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(g, w),
            );
          }
          GetNextDrawChangeCallback(g) {
            return (
              this.m_mapNextDrawChangeCallback.has(g) ||
                this.m_mapNextDrawChangeCallback.set(g, new k.lu()),
              this.m_mapNextDrawChangeCallback.get(g)
            );
          }
          CopyToGiveaway(g, w) {
            w.closed != g.closed && (w.closed = g.closed),
              w.giveaway_id != g.giveaway_id && (w.giveaway_id = g.giveaway_id),
              w.rtime_start != g.rtime_start && (w.rtime_start = g.rtime_start),
              w.rtime_end != g.rtime_end && (w.rtime_end = g.rtime_end),
              w.winner_count != g.winner_count &&
                (w.winner_count = g.winner_count),
              w.seconds_until_drawing != g.seconds_until_drawing &&
                (w.seconds_until_drawing = g.seconds_until_drawing);
          }
          async ReloadGiveaway(g, w) {
            if (!g) return null;
            let m = K.TS.STORE_BASE_URL + "prizes/nextdraw/" + g,
              t = null,
              l = { origin: self.origin };
            return (
              (t = await P().get(m, { params: l })),
              (0, S.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(g) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(g, new H()),
                  this.CopyToGiveaway(
                    t.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(g),
                  ),
                  w !== void 0)
                ) {
                  const p = this.GetKey(g, w);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(p) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      p,
                      new H(),
                    ),
                    this.CopyToGiveaway(
                      t.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(p),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(g).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(g),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(g)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Je.s_Singleton ||
                ((Je.s_Singleton = new Je()), Je.s_Singleton.Init()),
              Je.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let g = (0, K.Tc)("giveawaynextdraw", "application_config");
              if (g && g.giveaway_id) {
                let w = new H();
                this.CopyToGiveaway(g, w),
                  this.m_mapGiveawayIDToNextDrawInfo.set(g.giveaway_id, w);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        x([S.sH], B.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          x([S.XI], B.prototype, "CopyToGiveaway", 1);
        let O = B;
        const Q = class Vt {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Vt.s_GlobalInstance),
              (Vt.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(g, w) {
            if ((this.ClearRefreshInterval(), !g.closed)) {
              let m =
                g.seconds_until_drawing <= 0 && g.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(w, m);
            }
          }
          SetupCountDown(g, w) {
            g > 0 && (this.m_intervalCountDownID = window.setInterval(w, 1e3));
          }
        };
        x([ce.o], Q.prototype, "ClearRefreshInterval", 1),
          x([ce.o], Q.prototype, "ClearCountDown", 1),
          x([ce.o], Q.prototype, "SetupRefreshDataInterval", 1),
          x([ce.o], Q.prototype, "SetupCountDown", 1);
        let _ = Q;
        function J(T, g) {
          const w = O.Get().GetInfoByInstance(T, g.m_myInstanceNumber);
          (w.seconds_until_drawing -= 1),
            w.seconds_until_drawing == 0 && g.ClearCountDown();
        }
        function N(T, g) {
          const w = O.Get().GetInfoByInstance(T, g.m_myInstanceNumber);
          w &&
            w.BIsValid() &&
            w.seconds_until_drawing <= 0 &&
            !w.closed &&
            (g.ClearCountDown(),
            O.Get()
              .ReloadGiveaway(T, g.m_myInstanceNumber)
              .then((m) => {
                g.SetupCountDown(m.seconds_until_drawing, () => J(T, g));
              }));
        }
        function I(T) {
          const [g] = (0, j.useState)(new _()),
            w = (0, V.CH)();
          (0, j.useEffect)(
            () => (
              O.Get()
                .ReloadGiveaway(T, g.m_myInstanceNumber)
                .then((A) => {
                  g.SetupRefreshDataInterval(A, () => N(T, g)),
                    g.SetupCountDown(A.seconds_until_drawing, () => J(T, g)),
                    w();
                }),
              () => {
                g.ClearRefreshInterval(), g.ClearCountDown();
              }
            ),
            [g, T, w],
          );
          const m = O.Get().GetInfoByInstance(T, g.m_myInstanceNumber),
            [t, l, p] = (0, s.q3)(() => [
              m?.winner_count,
              m?.closed,
              m?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !m || m.giveaway_id == null || !m.BStarted() || t === void 0,
            winner_count: t,
            closed: l,
            seconds_until_drawing: p,
          };
        }
      },
      57223: (re, Ae, i) => {
        "use strict";
        i.d(Ae, { A: () => m });
        var e = i(41735),
          P = i.n(e),
          S = i(14947),
          s = i(3166),
          j = i(3685),
          ce = i(35038),
          k = i(94699),
          V = i(99412),
          K = i(72604),
          me = i(76559),
          U = i(79118);
        function x(t) {
          return "unknown EMsg ( " + t + " )";
        }
        function z(t) {
          return "unknown EClientPersonaStateFlag ( " + t + " )";
        }
        function H(t) {
          return "unknown EMsgClanAccountFlags ( " + t + " )";
        }
        function B(t) {
          return "unknown ESteamReviewScore ( " + t + " )";
        }
        function O(t) {
          return "unknown ECodecUsagePlatform ( " + t + " )";
        }
        function Q(t) {
          return "unknown ECodecUsageReason ( " + t + " )";
        }
        var _ = i(71742),
          J = i(34592),
          N = Object.defineProperty,
          I = Object.getOwnPropertyDescriptor,
          T = (t, l, p, A) => {
            for (
              var Y = A > 1 ? void 0 : A ? I(l, p) : l, $ = t.length - 1, ue;
              $ >= 0;
              $--
            )
              (ue = t[$]) && (Y = (A ? ue(l, p, Y) : ue(Y)) || Y);
            return A && Y && N(l, p, Y), Y;
          };
        class g {
          m_clanAccountID;
          m_clanSteamID;
          m_strRSSFeedURL = void 0;
          m_strRSSGID = void 0;
          m_rtimeRSSLastChecked = void 0;
          m_nPollIntervalSeconds = void 0;
          m_eRSSFeedLanguage = void 0;
          m_eCuratorLanguage = void 0;
          m_mapURLToPosted = new Map();
          constructor(l) {
            (0, S.Gn)(this),
              (this.m_clanAccountID = l.clanid),
              (this.m_clanSteamID = me.b.InitFromClanID(this.m_clanAccountID)),
              (this.m_strRSSFeedURL = l.rss_feed_url),
              (this.m_strRSSGID = l.rss_feed_gid),
              (this.m_eRSSFeedLanguage = l.rss_feed_language),
              (this.m_rtimeRSSLastChecked = l.rss_feed_last_checked),
              (this.m_nPollIntervalSeconds = l.poll_interval),
              (this.m_eCuratorLanguage = l.curation_language);
          }
          GetFeedLanguageHandleUnset() {
            return this.m_eRSSFeedLanguage == V.xPp
              ? this.m_eCuratorLanguage == V.xPp
                ? V.Bhc
                : this.m_eCuratorLanguage
              : this.m_eRSSFeedLanguage;
          }
          GetCuratorLanguage() {
            return this.m_eCuratorLanguage == V.xPp
              ? V.Bhc
              : this.m_eCuratorLanguage;
          }
          BHasSavedRSSURL() {
            return !!this.m_strRSSFeedURL;
          }
          GetRSSUrl() {
            return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
          }
          GetRSSLastRtimeChecked() {
            return this.m_rtimeRSSLastChecked;
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          GetClanAccountID() {
            return this.m_clanAccountID;
          }
          BHasSetupFeed(l) {
            return !!this.m_strRSSGID && this.m_strRSSFeedURL === l;
          }
          BIsAutomationEnabled() {
            return this.m_nPollIntervalSeconds > 0;
          }
          BHasFeedGID() {
            return !!this.m_strRSSGID;
          }
          async PreviewPartnerEventsFromRSSFeed(l) {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "PreviewPartnerEventsFromRSSFeed: User not logged in",
                ),
                null
              );
            const p = ce.w.Init(k.Dw);
            p.Body().set_rss_url(l),
              p.Body().set_lang(this.GetFeedLanguageHandleUnset());
            let A = await k.bH.PreviewPartnerEvents(
              m.Get().GetCuratorTransport(),
              p,
            );
            return (
              A.GetEResult() != K.R &&
                console.error(
                  "PreviewPartnerEventsFromRSSFeed error: " +
                    A.GetEMsg() +
                    " " +
                    A.GetEResult(),
                ),
              A
            );
          }
          async FetchPublishedEvents(l = 100) {
            if (!this.BIsLoggedIn())
              return (
                console.error("FetchPublishedEvents: User not logged in"), null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "FetchPublishedEvents: Need to create a news feed first",
                ),
                null
              );
            const p = ce.w.Init(k.wN);
            p.Body().set_news_feed_gid(this.m_strRSSGID),
              p.Body().set_amount(l);
            let A = await k.bH.GetBatchPublishedPartnerEvent(
              m.Get().GetCuratorTransport(),
              p,
            );
            return (
              A.GetEResult() != K.R
                ? console.error(
                    "FetchPublishedEvents error: EMsg:" +
                      x(A.GetEMsg()) +
                      " EResult:" +
                      A.GetEResult() +
                      " msg:" +
                      A.Hdr().error_message(),
                  )
                : (0, S.h5)(() => {
                    for (let Y = 0; Y < A.Body().clan_event_gid().length; ++Y) {
                      let $ = {
                        url: A.Body().news_url()[Y],
                        clan_event_gid: A.Body().clan_event_gid()[Y],
                        news_post_gid: A.Body().news_post_gid()[Y],
                      };
                      this.m_mapURLToPosted.set($.url, $);
                    }
                  }),
              A
            );
          }
          MapArticleURLToClanEventGID(l) {
            let p = this.m_mapURLToPosted.get(l);
            if (p) return p.clan_event_gid;
          }
          BIsLoggedIn() {
            return s.iA.logged_in;
          }
          async CreateOrUpdateRSSNewFeed(l, p = 0) {
            let A = new FormData();
            A.append("sessionid", (0, s.KC)()),
              A.append("gid", this.m_strRSSGID),
              A.append("lang", "" + this.GetCuratorLanguage()),
              A.append("rss_url", l),
              A.append("polling_interval", "" + p);
            const Y =
              s.TS.STORE_BASE_URL +
              "curator/" +
              this.m_clanAccountID +
              "/admin/ajaxmanagerssfeed";
            let $ = await P().post(Y, A, { withCredentials: !0 });
            return (
              $.data.success == K.R &&
                (0, S.h5)(() => {
                  (this.m_strRSSGID = $.data.gid),
                    (this.m_strRSSFeedURL = l),
                    (this.m_nPollIntervalSeconds = p);
                }),
              $.data
            );
          }
          async UpdateAutomation(l) {
            return this.CreateOrUpdateRSSNewFeed(
              this.m_strRSSFeedURL,
              l ? 300 : 0,
            );
          }
          async CheckForNewUpdate() {
            if (this.m_strRSSGID) {
              let l = new FormData();
              l.append("sessionid", (0, s.KC)()),
                l.append("gid", this.m_strRSSGID);
              const p =
                s.TS.STORE_BASE_URL +
                "curator/" +
                this.m_clanAccountID +
                "/admin/ajaxcheckfornews";
              await P().post(p, l, { withCredentials: !0 });
            }
          }
          async CreatePost(l, p) {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: User not logged in",
                ),
                null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: Need to create a news feed first",
                ),
                null
              );
            let A = new k.w2();
            A.set_gid(l.post.gid),
              A.set_news_feed_gid(this.m_strRSSGID),
              A.set_title(l.post.title),
              A.set_url(l.post.url),
              A.set_author(l.post.author),
              A.set_rtime_date(l.post.rtime_date),
              A.set_contents(l.post.contents),
              A.set_commited(l.post.commited),
              A.set_deleted(l.post.deleted),
              A.set_tags(l.post.tags),
              A.set_appids(l.post.appids),
              A.set_recommendation_state(l.post.recommendation_state),
              A.set_received_for_free(l.post.received_for_free),
              A.set_received_compensation(l.post.received_compensation),
              A.set_blurb(l.post.blurb);
            const Y = ce.w.Init(k.vB);
            Y.Body().set_post(A), Y.Body().set_draft(p);
            let $ = await k.bH.PublishPartnerEvent(
              m.Get().GetCuratorTransport(),
              Y,
            );
            return (
              $.GetEResult() != K.R
                ? console.error(
                    "CreatePost error: " + $.GetEMsg() + " " + $.GetEResult(),
                  )
                : ((0, S.h5)(() => {
                    let ue = {
                      url: l.post.url,
                      clan_event_gid: $.Body().clan_event_gid(),
                      news_post_gid: $.Body().news_post_gid(),
                    };
                    this.m_mapURLToPosted.set(l.post.url, ue);
                  }),
                  U.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    this.m_clanSteamID,
                    $.Body().clan_event_gid(),
                    0,
                  )),
              $
            );
          }
        }
        T([S.sH], g.prototype, "m_strRSSFeedURL", 2),
          T([S.sH], g.prototype, "m_strRSSGID", 2),
          T([S.sH], g.prototype, "m_rtimeRSSLastChecked", 2),
          T([S.sH], g.prototype, "m_nPollIntervalSeconds", 2),
          T([S.sH], g.prototype, "m_eRSSFeedLanguage", 2),
          T([S.sH], g.prototype, "m_eCuratorLanguage", 2),
          T([S.sH], g.prototype, "m_mapURLToPosted", 2);
        const w = class Ze {
          constructor() {
            (0, S.Gn)(this);
          }
          static s_CuratorAdminStore;
          m_transport;
          m_mapClanAccountToAdmin = new Map();
          m_defaultAdmin = void 0;
          m_mapClanToEventRSSStats = new Map();
          m_setPendingClanInfo = new Set();
          m_PendingClanInfoPromise;
          m_PendingClanInfoResolve;
          m_cClanInfoRequestsInFlight = 0;
          GetCuratorTransport() {
            return (
              (0, _.wT)(
                this.m_transport,
                "Expects Transpoate to be initialized but it is now",
              ),
              this.m_transport
            );
          }
          GetDefaultAdmin() {
            return this.m_defaultAdmin;
          }
          GetRSSAdminStats(l) {
            return this.m_mapClanToEventRSSStats.get(l);
          }
          static Get() {
            return (
              Ze.s_CuratorAdminStore ||
                ((Ze.s_CuratorAdminStore = new Ze()),
                Ze.s_CuratorAdminStore.Init()),
              Ze.s_CuratorAdminStore
            );
          }
          Init() {
            let l = (0, s.Tc)("curatoradmin", "application_config");
            this.ValidateStoreDefault(l) &&
              ((this.m_defaultAdmin = new g(l)),
              this.m_mapClanAccountToAdmin.set(l.clanid, this.m_defaultAdmin)),
              this.ValidateWebAPI(l) &&
                (this.m_transport = new j.D(
                  s.TS.WEBAPI_BASE_URL,
                  l.webapi_token,
                ).GetServiceTransport());
          }
          ValidateStoreDefault(l) {
            const p = l;
            return p && typeof p == "object" && typeof p.clanid == "number";
          }
          ValidateWebAPI(l) {
            const p = l;
            return p && typeof p.webapi_token == "string";
          }
          BIsLoggedIn() {
            return s.iA.logged_in;
          }
          BHavePendingInfoRequests() {
            return (
              this.m_setPendingClanInfo.size > 0 ||
              this.m_cClanInfoRequestsInFlight > 0
            );
          }
          BIsLoadingClanID(l) {
            return this.m_setPendingClanInfo.has(l);
          }
          BHasClanIDLoaded(l) {
            return this.m_mapClanAccountToAdmin.has(l);
          }
          GetRSSAdminForClanAccountID(l) {
            return this.m_mapClanAccountToAdmin.get(l);
          }
          async QueueCuratorAdminInfoLoad(l) {
            return l
              ? this.m_mapClanAccountToAdmin.has(l)
                ? Promise.resolve()
                : (this.m_setPendingClanInfo.size ||
                    ((this.m_PendingClanInfoPromise = new Promise(
                      (p) => (this.m_PendingClanInfoResolve = p),
                    )),
                    window.setTimeout(() => this.FlushPendingClanInfo(), 25)),
                  this.m_setPendingClanInfo.add(l),
                  this.m_PendingClanInfoPromise)
              : ((0, _.wT)(!l, "unexpected clanid of zero or undefined: " + l),
                Promise.resolve());
          }
          async FlushPendingClanInfo() {
            const l = this.m_PendingClanInfoResolve,
              p = Array.from(this.m_setPendingClanInfo);
            (this.m_PendingClanInfoPromise = void 0),
              (this.m_PendingClanInfoResolve = void 0),
              this.m_setPendingClanInfo.clear(),
              await this.LoadBatchedClanRSSAdminInfo(p),
              l();
          }
          EnsureClanInfoLoaded(l) {
            const p = l.filter(
              (A) =>
                !this.m_mapClanAccountToAdmin.has(A) &&
                this.m_setPendingClanInfo.has(A),
            );
            return (
              p.forEach((A) => this.QueueCuratorAdminInfoLoad(A)),
              p.length > 0 && this.m_PendingClanInfoPromise
                ? this.m_PendingClanInfoPromise
                : Promise.resolve()
            );
          }
          async LoadBatchedClanRSSAdminInfo(l) {
            this.m_cClanInfoRequestsInFlight++;
            let p = l.filter((Y) => !this.m_mapClanAccountToAdmin.has(Y));
            const A = 50;
            for (; p.length > 0; ) {
              const Y = Math.min(A, p.length),
                $ = p.slice(0, Y);
              p = p.slice(Y);
              try {
                const ue =
                    s.TS.STORE_BASE_URL + "events_admin/ajaxgetrssadmininfo",
                  ve = { clanids: l },
                  xe = await P().get(ue, { params: ve, withCredentials: !0 });
                if (
                  xe &&
                  xe.data &&
                  xe.data.success == K.R &&
                  xe.data.rss_admin_infos &&
                  Array.isArray(xe.data.rss_admin_infos)
                )
                  (0, S.h5)(() => {
                    xe.data.rss_admin_infos.forEach((Ie) => {
                      this.m_mapClanAccountToAdmin.set(Ie.clanid, new g(Ie));
                    }),
                      xe.data.rss_event_stats.forEach((Ie) => {
                        this.m_mapClanToEventRSSStats.set(
                          Ie.clan_account_id,
                          Ie,
                        );
                      });
                  });
                else {
                  const Ie = (0, J.H)(xe.data || {});
                  console.error(
                    "LoadBatchedClanRSSAdminInfo error:" + Ie.strErrorMsg,
                    Ie,
                  );
                }
              } catch (ue) {
                const ve = (0, J.H)(ue);
                console.error(
                  "LoadBatchedClanRSSAdminInfo catched error:" + ve.strErrorMsg,
                  ve,
                );
              }
            }
            this.m_cClanInfoRequestsInFlight--;
          }
        };
        T([S.sH.shallow], w.prototype, "m_mapClanAccountToAdmin", 2),
          T([S.sH.shallow], w.prototype, "m_mapClanToEventRSSStats", 2);
        let m = w;
      },
      82559: (re, Ae, i) => {
        "use strict";
        i.d(Ae, { q: () => ae, A: () => we });
        var e = i(7850),
          P = i(41735),
          S = i.n(P),
          s = i(57223),
          j = i(3166),
          ce = i(76559);
        class k {
          static s_CuratorStore;
          m_mapClanToRecommendation = new Map();
          static Get() {
            return (
              k.s_CuratorStore ||
                ((k.s_CuratorStore = new k()),
                k.s_CuratorStore.Init(),
                (window.g_CuratorRecommendationStore = k.s_CuratorStore)),
              k.s_CuratorStore
            );
          }
          Init() {}
          GetReviewForApp(y, L) {
            if (this.m_mapClanToRecommendation.has(y.GetAccountID()))
              return this.m_mapClanToRecommendation
                .get(y.GetAccountID())
                .get(L);
          }
          BHasReviewForApp(y, L) {
            return !!this.GetReviewForApp(y, L);
          }
          BHasReviewForAppByClanAccount(y, L) {
            let E = ce.b.InitFromClanID(y);
            return !!this.GetReviewForApp(E, L);
          }
          async LoadAppRecommendation(y, L) {
            this.m_mapClanToRecommendation.has(y.GetAccountID()) ||
              this.m_mapClanToRecommendation.set(y.GetAccountID(), new Map());
            let E = this.m_mapClanToRecommendation.get(y.GetAccountID());
            const Z = [];
            if (
              (L.forEach((oe) => {
                E.has(oe) || Z.push(oe);
              }),
              Z.length > 0)
            ) {
              const oe =
                  j.TS.STORE_BASE_URL +
                  "curator/" +
                  y.GetAccountID() +
                  "/admin/ajaxgetrecbyapps",
                fe = await S().get(oe, {
                  params: {
                    appids: Z,
                    cc: j.TS.COUNTRY || "US",
                    l: j.TS.LANGUAGE,
                  },
                }),
                ge = fe && fe.data;
              ge &&
                ge.rec_app &&
                ge.rec_app.forEach((he) => {
                  E.set(Number(he.appid), he);
                });
            }
          }
        }
        var V = i(75844),
          K = i(90626),
          me = i(99412),
          U = i(72604),
          x = i(73259),
          z = i(94699),
          H = i(79118),
          B = i(16412),
          O = i(91424),
          Q = i(95695),
          _ = i.n(Q),
          J = i(12037),
          N = i(96538),
          I = i(88003),
          T = i(85599),
          g = i(53107),
          w = i(36707),
          m = i(82734),
          t = i(18210),
          l = i(34592),
          p = i(30096),
          A = i(71909),
          Y = i(41635),
          $ = i(48473),
          ue = i(56330),
          ve = i.n(ue),
          xe = i(53113),
          Ie = i(92264),
          Ne = Object.defineProperty,
          qe = Object.getOwnPropertyDescriptor,
          ee = (M, y, L, E) => {
            for (
              var Z = E > 1 ? void 0 : E ? qe(y, L) : y, oe = M.length - 1, fe;
              oe >= 0;
              oe--
            )
              (fe = M[oe]) && (Z = (E ? fe(y, L, Z) : fe(Z)) || Z);
            return E && Z && Ne(y, L, Z), Z;
          };
        let we = class extends K.Component {
          state = { strRssURL: s.A.Get().GetDefaultAdmin().GetRSSUrl() };
          m_Admin = s.A.Get().GetDefaultAdmin();
          OnChangeActualRSSURL(M) {
            this.setState({ strRssURL: M.target.value });
          }
          OnCreateOrSaveFeed(M) {
            M.preventDefault(),
              (0, I.pg)(
                (0, e.jsx)(We, {
                  strRSSUrl: this.state.strRssURL,
                  admin: this.m_Admin,
                }),
                (0, m.uX)(M),
              );
          }
          OnRevert(M) {
            M.preventDefault(),
              this.setState({ strRssURL: this.m_Admin.GetRSSUrl() });
          }
          render() {
            let M = this.state.strRssURL === this.m_Admin.GetRSSUrl();
            if (window.Prototype !== void 0)
              return window.location.reload(), null;
            const y = (0, me.x6o)(
                (0, me.LgB)(this.m_Admin.GetFeedLanguageHandleUnset()),
              ),
              L = s.A.Get().GetDefaultAdmin();
            return (0, e.jsxs)("div", {
              className: (0, w.A)(A.Ctn),
              children: [
                (0, e.jsxs)("div", {
                  className: "titleframe",
                  children: [
                    (0, e.jsx)("h4", {
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_title"),
                    }),
                    (0, e.jsx)("p", {
                      className: "subtitle",
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_desc"),
                    }),
                    (0, e.jsx)("p", {
                      children: (0, t.PP)(
                        "#CuratorAdmin_RSSFeed_doc_link",
                        (0, e.jsx)("a", {
                          href: "https://partner.steamgames.com/doc/store/news/rss",
                          target: "_blank",
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_doc_link_text",
                          ),
                        }),
                      ),
                    }),
                    (0, e.jsx)("p", {
                      className: A.DashboardBtn,
                      children: (0, e.jsx)(g.uU, {
                        href:
                          j.TS.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/",
                        className: (0, w.A)(_().Button, _().Primary),
                        children: (0, t.we)("#RSSManager_EventDashBoard"),
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: "darkframe",
                  children: [
                    (0, e.jsxs)("div", {
                      className: A.LanguageRow,
                      children: [
                        (0, e.jsx)("span", {
                          className: A.LanguageTitle,
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_lang_only",
                          ),
                        }),
                        (0, e.jsx)("span", {
                          className: A.LanguageSet,
                          children: y,
                        }),
                        (0, e.jsx)("a", {
                          href:
                            j.TS.COMMUNITY_BASE_URL +
                            "gid/" +
                            this.m_Admin
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/edit ",
                          target: "_blank",
                          className: (0, w.A)(_().Button, A.PreviewBtn),
                          children: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_edit_language",
                          ),
                        }),
                      ],
                    }),
                    this.m_Admin.GetFeedLanguageHandleUnset() !=
                      this.m_Admin.GetCuratorLanguage() &&
                      (0, e.jsx)("div", {
                        className: (0, w.A)(
                          A.LanguageRow,
                          ve().WarningIconLayout,
                        ),
                        children: (0, e.jsx)("span", {
                          className: A.LanguageTitle,
                          children: (0, t.we)(
                            "#CuratorAdmin_Curator_lang_only",
                            (0, t.we)(
                              "#Language_" +
                                (0, me.LgB)(this.m_Admin.GetCuratorLanguage()),
                            ),
                            y,
                          ),
                        }),
                      }),
                    (0, e.jsxs)("div", {
                      className: (0, w.A)(
                        _().FlexRowContainer,
                        A.UrlSettingCtn,
                      ),
                      children: [
                        (0, e.jsx)(B.pd, {
                          className: A.RssInpu,
                          type: "text",
                          name: "link_url",
                          id: "link_url",
                          value: this.state.strRssURL,
                          label: (0, t.we)("#CuratorAdmin_RSSFeed"),
                          placeholder: (0, t.we)(
                            "#CuratorAdmin_RSSFeed_placeholder",
                          ),
                          onChange: this.OnChangeActualRSSURL,
                          mustBeURL: !0,
                        }),
                        (0, e.jsx)("a", {
                          className: "btn_green_white_innerfade btn_medium",
                          onClick: this.OnCreateOrSaveFeed,
                          children: (0, e.jsx)("span", {
                            children: (0, t.we)(
                              M ? "#Button_Saved" : "#Button_Save",
                            ),
                          }),
                        }),
                        !M &&
                          (0, e.jsx)("a", {
                            onClick: this.OnRevert,
                            className: "btn_grey_white_innerfade btn_medium",
                            children: (0, t.we)("#Button_Revert"),
                          }),
                      ],
                    }),
                    (0, e.jsx)(se, { admin: L }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)(ae, {
                      strRssURL: this.state.strRssURL,
                      admin: L,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        ee([p.oI], we.prototype, "OnChangeActualRSSURL", 1),
          ee([p.oI], we.prototype, "OnCreateOrSaveFeed", 1),
          ee([p.oI], we.prototype, "OnRevert", 1),
          (we = ee([V.PA], we));
        let ae = class extends K.Component {
          state = { strParseRssURL: this.props.strRssURL, bLoadingPreview: !1 };
          m_cancelSignal = S().CancelToken.source();
          componentDidMount() {
            const { admin: M } = this.props;
            M.BHasFeedGID() &&
              M.BHasSavedRSSURL() &&
              M.GetRSSUrl() == this.props.strRssURL &&
              this.OnLoadPreview();
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "PreviewRSSViewAndControl component unmounted",
            );
          }
          RenderPreviews() {
            let M = this.props.admin,
              y = new Array();
            if (this.state.previews) {
              let L = this.state.previews;
              (L = L.sort((E, Z) => {
                let oe = M.MapArticleURLToClanEventGID(E.post.url),
                  fe = M.MapArticleURLToClanEventGID(Z.post.url),
                  ge = oe ? H.O3.GetClanEventModel(oe) : null,
                  he = fe ? H.O3.GetClanEventModel(fe) : null;
                return ge && he
                  ? he.postTime - ge.postTime
                  : ge
                    ? -1
                    : he
                      ? 1
                      : Z.post.rtime_date - E.post.rtime_date;
              })),
                L.forEach((E) => {
                  y.push(
                    (0, e.jsx)(
                      X,
                      {
                        newsData: E,
                        admin: M,
                        clanSteamID: M.GetClanSteamID(),
                        fnGetRSSUrl: this.GetRSSPreviewURL,
                      },
                      "id: " + E.unique_id,
                    ),
                  );
                });
            }
            return y;
          }
          GetRSSPreviewURL() {
            return this.state.strParseRssURL;
          }
          OnLoadPreview() {
            this.setState(
              {
                bLoadingPreview: !0,
                previews: void 0,
                strPreviewURL: this.props.strRssURL,
                strPreviewErrorMsg: void 0,
              },
              this.DoLoadPreview,
            );
          }
          async DoLoadPreview() {
            let M = this.props.admin,
              y = await M.PreviewPartnerEventsFromRSSFeed(this.props.strRssURL);
            if (y && y.GetEResult() == U.R) {
              let L = y.Body().toObject();
              this.setState(
                { strParseRssURL: L.rss_url, bLoadingPreview: !0 },
                async () => {
                  await M.FetchPublishedEvents(Math.max(100, L.results.length));
                  let E = new Array(),
                    Z = new Array();
                  if (
                    (L.results.forEach((oe) => {
                      let fe = M.MapArticleURLToClanEventGID(oe.post.url);
                      fe && E.push(fe),
                        oe.post.appids &&
                          oe.post.appids.length === 1 &&
                          oe.post.recommendation_state !== z.D$.w4 &&
                          Z.push(oe.post.appids[0]);
                    }),
                    E.length > 0 &&
                      (await H.O3.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                        E,
                        null,
                        this.m_cancelSignal,
                      )),
                    Z.length > 0)
                  ) {
                    const oe = M.GetClanSteamID();
                    await k.Get().LoadAppRecommendation(oe, Z);
                  }
                  this.setState({
                    previews: L.results,
                    bLoadingPreview: void 0,
                  });
                },
              );
            } else
              this.setState({
                bLoadingPreview: void 0,
                strPreviewErrorMsg: (0, t.we)(
                  "#Error_Description",
                  y.GetEResult(),
                  y.Hdr().error_message(),
                ),
              });
          }
          render() {
            const M = this.RenderPreviews();
            let y = this.props.admin;
            return (0, e.jsxs)("div", {
              children: [
                !this.state.bLoadingPreview &&
                  this.state.strPreviewURL !== this.props.strRssURL &&
                  (0, e.jsx)("div", {
                    className: A.PreviewListBtn,
                    children: (0, e.jsx)(B.$n, {
                      disabled: !B.pd.validateUrl(this.props.strRssURL),
                      onClick: this.OnLoadPreview,
                      children: (0, t.we)("#CuratorAdmin_RSSFeed_preview"),
                    }),
                  }),
                this.state.bLoadingPreview &&
                  (0, e.jsx)(T.t, {
                    string: (0, t.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                this.state.strPreviewErrorMsg &&
                  (0, e.jsx)("div", {
                    className: _().ErrorMsg,
                    children: this.state.strPreviewErrorMsg,
                  }),
                M.length > 0 &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("p", {
                        children: (0, t.we)(
                          "#RSSManager_PreviewInfo",
                          this.state.strPreviewURL,
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: A.PreviewListCtn,
                        children: M,
                      }),
                      (0, e.jsx)("p", {
                        className: A.DashboardBtn,
                        children: (0, e.jsx)(g.uU, {
                          href:
                            j.TS.COMMUNITY_BASE_URL +
                            "gid/" +
                            y.GetClanSteamID().ConvertTo64BitString() +
                            "/partnerevents/",
                          className: (0, w.A)(_().Button, _().Primary),
                          children: (0, t.we)("#RSSManager_EventDashBoard"),
                        }),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        ee([p.oI], ae.prototype, "GetRSSPreviewURL", 1),
          ee([p.oI], ae.prototype, "OnLoadPreview", 1),
          (ae = ee([V.PA], ae));
        let se = class extends K.Component {
          state = {};
          OnToggleChannelAutomation(M) {
            M
              ? (this.setState({ strErrorMessage: void 0 }),
                (0, I.pg)(
                  (0, e.jsx)(We, {
                    strRSSUrl: this.props.admin.GetRSSUrl(),
                    admin: this.props.admin,
                    bActivatePooling: !0,
                  }),
                  window,
                ))
              : this.setState(
                  {
                    strErrorMessage: void 0,
                    strReasonWaiting: (0, t.we)("#Saving"),
                  },
                  this.BDisableAutomation,
                );
          }
          async BDisableAutomation() {
            this.props.admin
              .UpdateAutomation(!1)
              .catch(() =>
                this.setState({
                  strErrorMessage: (0, t.we)(
                    "#RSSManager_Status_Automation_DisableFailed",
                  ),
                }),
              )
              .finally(() => this.setState({ strReasonWaiting: void 0 }));
          }
          async OnQueueScan(M) {
            this.setState({
              strReasonWaiting: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
            }),
              this.props.admin
                .CheckForNewUpdate()
                .then(() =>
                  (0, I.pg)(
                    (0, e.jsx)(N.o0, {
                      strTitle: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: (0, t.we)("#CuratorAdmin_RSSFeed_queued"),
                    }),
                    (0, m.uX)(M),
                  ),
                )
                .catch((y) =>
                  (0, I.pg)(
                    (0, e.jsx)(N.KG, {
                      strTitle: (0, t.we)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: (0, l.H)(y).strErrorMsg,
                    }),
                    (0, m.uX)(M),
                  ),
                )
                .finally(() => this.setState({ strReasonWaiting: void 0 }));
          }
          render() {
            return this.props.admin.BHasSavedRSSURL()
              ? (0, e.jsxs)("div", {
                  children: [
                    !!this.state.strReasonWaiting &&
                      (0, e.jsx)(T.t, {
                        size: "medium",
                        string: this.state.strReasonWaiting,
                      }),
                    !!this.state.strErrorMessage &&
                      (0, e.jsx)("div", {
                        className: A.Error,
                        children: this.state.strErrorMessage,
                      }),
                    (0, e.jsx)(B.RF, {
                      onChange: this.OnToggleChannelAutomation,
                      label: (0, t.we)("#RSSManager_Status_Automation_Desc"),
                      checked: this.props.admin.BIsAutomationEnabled(),
                      description: "",
                    }),
                    this.props.admin.BIsAutomationEnabled() &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, t.we)("#CuratorAdmin_RSSFeed_lastscanned"),
                          "\xA0",
                          (0, t.TW)(
                            this.props.admin.GetRSSLastRtimeChecked(),
                            !1,
                          ),
                          "\xA0 @ ",
                          (0, Ie.KC)(
                            this.props.admin.GetRSSLastRtimeChecked(),
                            { bForce24HourClock: !1 },
                          ),
                          "\xA0",
                          (0, e.jsx)("a", {
                            onClick: this.OnQueueScan,
                            children: (0, e.jsx)("span", {
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_scannow",
                              ),
                            }),
                          }),
                        ],
                      }),
                  ],
                })
              : null;
          }
        };
        ee([p.oI], se.prototype, "OnToggleChannelAutomation", 1),
          ee([p.oI], se.prototype, "OnQueueScan", 1),
          (se = ee([V.PA], se));
        let X = class extends K.Component {
          state = {
            clan_event_gid: this.props.admin.MapArticleURLToClanEventGID(
              this.props.newsData.post.url,
            ),
            bLoadingPartnerEvent:
              !!this.props.admin.MapArticleURLToClanEventGID(
                this.props.newsData.post.url,
              ),
          };
          componentDidMount() {
            this.DoPartnerEventLoad();
          }
          async DoPartnerEventLoad() {
            if (this.state.clan_event_gid) {
              let M = this.props.admin.GetClanSteamID(),
                y = H.O3.GetClanEventModel(this.state.clan_event_gid);
              y ||
                (y = await H.O3.LoadHiddenPartnerEvent(
                  M,
                  this.state.clan_event_gid,
                )),
                this.setState({
                  bLoadingPartnerEvent: !1,
                  existingEventModel: y,
                });
            }
          }
          OnOpenPreviewAsPartnerEvent(M) {
            const { newsData: y, clanSteamID: L } = this.props;
            let E = new x.lh();
            (E.GID = "PreviewPartnerEventRow_0"),
              (E.clanSteamID = L),
              (E.postTime = Date.now() / 1e3),
              (E.startTime = Date.now() / 1e3),
              (E.type = me.uYK),
              E.vecTags.push("auto_rssfeed"),
              E.vecTags.push("curator"),
              E.vecTags.push("curator_public"),
              E.name.set(me.Bhc, y.title),
              E.description.set(me.Bhc, y.desc),
              this.ValidateJSONDefault(y.jsondata) && (E.jsondata = y.jsondata),
              E.jsondata.read_more_link ||
                (E.jsondata.read_more_link = y.unique_id);
            let Z = this.props.admin.GetFeedLanguageHandleUnset();
            !E.jsondata.localized_summary &&
              y.post.event_summary &&
              ((E.jsondata.localized_summary = (0, Y.$Y)(
                E.jsondata.localized_summary,
                me.bP9,
                null,
              )),
              (E.jsondata.localized_summary[me.Bhc] = y.post.event_summary),
              Z != me.Bhc &&
                (E.jsondata.localized_summary[Z] = y.post.event_summary)),
              !E.jsondata.localized_subtitle &&
                y.post.event_subtitle &&
                ((E.jsondata.localized_subtitle = (0, Y.$Y)(
                  E.jsondata.localized_subtitle,
                  me.bP9,
                  null,
                )),
                (E.jsondata.localized_subtitle[me.Bhc] = y.post.event_subtitle),
                Z != me.Bhc &&
                  (E.jsondata.localized_subtitle[Z] = y.post.event_subtitle)),
              this.ShowModalEvent(E);
          }
          OnViewEvent() {
            this.ShowModalEvent(
              H.O3.GetClanEventModel(this.state.clan_event_gid),
            );
          }
          ShowModalEvent(M) {
            let y = document.getElementById("curator_header_area_ctn_id");
            y &&
              (M
                ? y.classList.add("curator_header_area_ctn_hideme")
                : y.classList.remove("curator_header_area_ctn_hideme")),
              this.setState({ eventModelForPreviewNow: M });
          }
          ValidateJSONDefault(M) {
            const y = M;
            return !!(y && !Array.isArray(y) && typeof y == "object");
          }
          OnPostNewsEvent(M) {
            const { newsData: y, fnGetRSSUrl: L } = this.props;
            (0, I.pg)(
              (0, e.jsx)(We, {
                newsData: y,
                admin: this.props.admin,
                strRSSUrl: L(),
                fnClanEventGID: this.OnClanEventCreateSuccess,
              }),
              (0, m.uX)(M),
            );
          }
          OnUpdateNewsEvent(M) {
            const { newsData: y, fnGetRSSUrl: L } = this.props;
            (0, I.pg)(
              (0, e.jsx)(We, {
                newsData: y,
                strRSSUrl: L(),
                admin: this.props.admin,
                fnClanEventGID: this.OnClanEventCreateSuccess,
                bUpdatePost: !0,
              }),
              (0, m.uX)(M),
            );
          }
          HideModalEvent() {
            this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
          }
          OnClanEventCreateSuccess(M) {
            this.setState(
              { clan_event_gid: M, bLoadingPartnerEvent: !0 },
              this.DoPartnerEventLoad,
            );
          }
          OnShowRawRSS(M) {
            const y = this.props.newsData.rss_message,
              L = (() => {
                const E = y.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
                if (!E) return y;
                const Z = E[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
                return Z ? (0, $.EK)(Z[0]) : E[0];
              })();
            (0, I.pg)(
              (0, e.jsx)(N.o0, {
                bAlertDialog: !0,
                strTitle: (0, t.we)("#RSSManager_PostEvent_ViewRaw"),
                children: (0, e.jsx)("textarea", {
                  className: A.RawRSS,
                  value: L,
                  disabled: !0,
                }),
              }),
              (0, m.uX)(M),
            );
          }
          render() {
            const { newsData: M } = this.props,
              {
                clan_event_gid: y,
                existingEventModel: L,
                bLoadingPartnerEvent: E,
              } = this.state;
            let Z = this.props.admin,
              oe = Z.GetClanSteamID(),
              fe = L && L.BIsStagedEvent(),
              ge =
                M.post.appids && M.post.appids.length == 1 && M.post.appids[0],
              he =
                M.post.recommendation_state !== z.D$.w4 &&
                ge &&
                k.Get().BHasReviewForApp(oe, ge),
              le = "";
            if (L) {
              const Qe =
                L.GetVisibilityStartTimeAndDateUnixSeconds() ||
                L.GetPostTimeAndDateUnixSeconds();
              le =
                (0, t.$z)(Qe) +
                " @ " +
                (0, Ie.KC)(Qe, { bForce24HourClock: !1 });
            }
            return (0, e.jsxs)("div", {
              className: (0, w.A)(
                A.PostCtn,
                y ? A.ActivePost : "",
                M.valid_post ? "" : A.ErrorPost,
              ),
              children: [
                (0, e.jsx)("span", {
                  className: A.PostTitle,
                  children: M.title,
                }),
                (0, e.jsx)("br", {}),
                !!L &&
                  (0, e.jsxs)(K.Fragment, {
                    children: [
                      !!L.BIsVisibleEvent() &&
                        (0, e.jsx)("span", {
                          className: A.PostDate,
                          children: (0, t.we)(
                            "#RSSManager_PostEvent_PostedDate",
                            le,
                          ),
                        }),
                      !L.BIsVisibleEvent() &&
                        (0, e.jsx)("span", {
                          className: (0, w.A)(
                            A.PostDraft,
                            fe ? A.PostStaged : "",
                          ),
                          children: (0, t.we)(
                            fe
                              ? "#RSSManager_PostEvent_Staged"
                              : "#RSSManager_PostEvent_Draft",
                            le,
                          ),
                        }),
                    ],
                  }),
                !!(!M.valid_post && M.post_error_msg) &&
                  (0, e.jsxs)("div", {
                    className: ve().ErrorStylesBackground,
                    children: [
                      (0, t.we)("#Error_Generic_Label"),
                      " ",
                      (0, t.we)(M.post_error_msg),
                    ],
                  }),
                (0, e.jsxs)("div", {
                  className: A.ButtonCtn,
                  children: [
                    y
                      ? (0, e.jsxs)(K.Fragment, {
                          children: [
                            E
                              ? (0, e.jsx)(T.t, {
                                  string: (0, t.we)("#Loading"),
                                  size: "small",
                                  position: "center",
                                })
                              : (0, e.jsx)("div", {
                                  onClick: this.OnViewEvent,
                                  className: (0, w.A)(_().Button, A.PreviewBtn),
                                  children: (0, t.we)(
                                    "#RSSManager_PostEvent_ViewEvent",
                                  ),
                                }),
                            (0, e.jsx)("a", {
                              className: (0, w.A)(_().Button, A.PreviewBtn),
                              href:
                                j.TS.COMMUNITY_BASE_URL +
                                "gid/" +
                                Z.GetClanSteamID().ConvertTo64BitString() +
                                "/partnerevents/edit/" +
                                this.state.clan_event_gid,
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_EditEvent",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              onClick: this.OnUpdateNewsEvent,
                              className: (0, w.A)(_().Button, A.PreviewBtn),
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_UpdateEvent",
                              ),
                            }),
                            he &&
                              (0, e.jsx)("a", {
                                className: (0, w.A)(_().Button, A.PreviewBtn),
                                href: (0, xe.k2)(
                                  j.TS.STORE_BASE_URL +
                                    "app/" +
                                    M.post.appids[0] +
                                    "/?curator_clanid=" +
                                    oe.GetAccountID(),
                                ),
                                children: (0, t.we)("#RSSManager_SeeReview"),
                              }),
                          ],
                        })
                      : (0, e.jsxs)(K.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              onClick: this.OnOpenPreviewAsPartnerEvent,
                              className: (0, w.A)(_().Button, A.PreviewBtn),
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_col_preview_event",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              onClick: this.OnPostNewsEvent,
                              className: (0, w.A)(_().Button, A.PreviewBtn),
                              children: (0, t.we)(
                                "#CuratorAdmin_RSSFeed_col_create_event",
                              ),
                            }),
                          ],
                        }),
                    !!(M.rss_message && M.rss_message.length > 0) &&
                      (0, e.jsx)("div", {
                        onClick: this.OnShowRawRSS,
                        className: A.ViewRaw,
                        children: (0, t.we)("#RSSManager_PostEvent_ViewRaw"),
                      }),
                    !!this.state.eventModelForPreviewNow &&
                      (0, e.jsx)(N.of, {
                        className: J.StoreHeaderAdjust,
                        children: (0, e.jsx)("div", {
                          children: (0, e.jsx)(O.H, {
                            event: this.state.eventModelForPreviewNow,
                            fnClose: this.HideModalEvent,
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        ee([p.oI], X.prototype, "DoPartnerEventLoad", 1),
          ee([p.oI], X.prototype, "OnOpenPreviewAsPartnerEvent", 1),
          ee([p.oI], X.prototype, "OnViewEvent", 1),
          ee([p.oI], X.prototype, "OnPostNewsEvent", 1),
          ee([p.oI], X.prototype, "OnUpdateNewsEvent", 1),
          ee([p.oI], X.prototype, "HideModalEvent", 1),
          ee([p.oI], X.prototype, "OnClanEventCreateSuccess", 1),
          ee([p.oI], X.prototype, "OnShowRawRSS", 1),
          (X = ee([V.PA], X));
        const W = class Kt extends K.Component {
          state = {
            initialState: Kt.DetermineStartState(this.props),
            step: Kt.DetermineStartState(this.props),
            bDraftMode: !0,
          };
          static DetermineStartState(y) {
            let L = y.admin.BHasSetupFeed(y.strRSSUrl);
            return !y.newsData || !L
              ? y.bActivatePooling
                ? "activate_feed"
                : y.admin.BHasSavedRSSURL()
                  ? "update_feed"
                  : "feed_missing"
              : y.bUpdatePost
                ? "update_post"
                : "create_post";
          }
          OnCreateNewsFeed() {
            this.setState({ step: "creating_feed" }, this.DoCreateNewsFeed);
          }
          async DoCreateNewsFeed() {
            let y = await this.props.admin.CreateOrUpdateRSSNewFeed(
              this.props.strRSSUrl,
              this.props.bActivatePooling ? 300 : 0,
            );
            y.success != U.R
              ? this.setState({
                  step: "failure",
                  eResult: y.success,
                  strErrorMessage: (0, t.we)("#RSSManager_PostEvent_Failure"),
                })
              : this.setState({
                  step: this.props.newsData ? "create_post" : "success",
                });
          }
          OnCreatePost() {
            this.setState({ step: "waiting_post" }, this.DoCreatePost);
          }
          async DoCreatePost() {
            let y = await this.props.admin.CreatePost(
              this.props.newsData,
              !!this.state.bDraftMode,
            );
            y.GetEResult() != U.R
              ? this.setState({
                  step: "failure",
                  eResult: y.GetEResult(),
                  strErrorMessage: (0, t.we)("#RSSManager_PostEvent_Failure"),
                })
              : (this.props.fnClanEventGID &&
                  this.props.fnClanEventGID(y.Body().clan_event_gid()),
                this.setState({
                  step: "success",
                  eventGID: y.Body().clan_event_gid(),
                }));
          }
          OnChangeDraftMode(y) {
            this.setState({ bDraftMode: y });
          }
          OnChangePermissionsCreateFeed(y) {
            this.setState({ bPermissions: y });
          }
          OnChangeConductCreateFeed(y) {
            this.setState({ bConduct: y });
          }
          GetStrTitle() {
            if (this.props.newsData)
              return (0, t.we)(
                this.props.bUpdatePost
                  ? "#RSSManager_PostEvent_UpdateEvent"
                  : "#RSSManager_PostEvent_Tilte",
              );
            switch (this.state.initialState) {
              case "feed_missing":
                return (0, t.we)("#RSSManager_PostEvent_CreateFeedTitle");
              default:
              case "update_feed":
                return (0, t.we)("#RSSManager_PostEvent_UpdateFeedTitle");
              case "activate_feed":
                return (0, t.we)("#RSSManager_Status_Automation_Activate");
            }
          }
          render() {
            const { strRSSUrl: y } = this.props;
            switch (this.state.step) {
              case "feed_missing":
              case "activate_feed":
              case "update_feed":
              default:
                return (0, e.jsx)(N.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(B.nB, {
                    children: [
                      (0, e.jsxs)(B.a3, {
                        children: [
                          this.props.newsData &&
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreateFeed_DuringPost",
                              ),
                            }),
                          this.state.step !== "activate_feed" &&
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreateFeed_Desc",
                                y,
                              ),
                            }),
                          (0, e.jsx)("div", {
                            children: (0, t.we)(
                              "#RSSManager_CreateFeed_Review",
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, e.jsx)(B.Yh, {
                              label: (0, t.we)(
                                "#RSSManager_CreateFeed_Permissions_v1",
                              ),
                              onChange: this.OnChangePermissionsCreateFeed,
                              checked: !!this.state.bPermissions,
                            }),
                          }),
                          (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)(B.Yh, {
                                label: (0, t.we)(
                                  "#RSSManager_CreateFeed_Conduct_v1",
                                ),
                                onChange: this.OnChangeConductCreateFeed,
                                checked: !!this.state.bConduct,
                              }),
                              (0, e.jsx)(g.uU, {
                                href: j.TS.STORE_BASE_URL + "online_conduct/",
                                children: (0, t.we)(
                                  "#RSSManager_CreateFeed_Conduct_Link",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsx)(B.wi, {
                        children: (0, e.jsx)(B.CB, {
                          bOKDisabled: !(
                            this.state.bPermissions && this.state.bConduct
                          ),
                          onOK: this.OnCreateNewsFeed,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "failure":
                return (0, e.jsx)(N.KG, {
                  strDescription: (0, t.we)("#RSSManager_PostEvent_Failure"),
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)("div", {
                    children: (0, t.we)(
                      "#Error_Description",
                      this.state.eResult,
                      this.state.strErrorMessage,
                    ),
                  }),
                });
              case "creating_feed":
              case "waiting_post":
                return (0, e.jsx)(N.o0, {
                  strTitle: this.GetStrTitle(),
                  strDescription: (0, t.we)("#RSSManager_PostEvent_InFlight"),
                  closeModal: this.props.closeModal,
                  children: (0, e.jsx)(T.t, { position: "center" }),
                });
              case "create_post":
                return (0, e.jsx)(N.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(B.nB, {
                    children: [
                      (0, e.jsx)(B.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_CreatePost",
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: A.DialogPostTitle,
                              children: this.props.newsData.title,
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              children: (0, e.jsx)(B.Yh, {
                                label: (0, t.we)(
                                  "#RSSManager_PostEvent_CreatePost_Draft",
                                ),
                                onChange: this.OnChangeDraftMode,
                                checked: !!this.state.bDraftMode,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, e.jsx)(B.wi, {
                        children: (0, e.jsx)(B.CB, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "update_post":
                return (0, e.jsx)(N.eV, {
                  title: this.GetStrTitle(),
                  children: (0, e.jsxs)(B.nB, {
                    children: [
                      (0, e.jsx)(B.a3, {
                        children: (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsx)("div", {
                              children: (0, t.we)(
                                "#RSSManager_PostEvent_UpdatePost",
                              ),
                            }),
                            (0, e.jsx)("br", {}),
                            (0, e.jsx)("div", {
                              className: A.DialogPostTitle,
                              children: this.props.newsData.title,
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }),
                      }),
                      (0, e.jsx)(B.wi, {
                        children: (0, e.jsx)(B.CB, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "success":
                return (0, e.jsx)(N.o0, {
                  strTitle: this.GetStrTitle(),
                  strDescription: (0, t.we)(
                    this.props.newsData
                      ? "#RSSManager_PostEvent_Success"
                      : "#RSSManager_PostEvent_Success_feed",
                  ),
                  closeModal: this.props.closeModal,
                  bAlertDialog: !0,
                  children:
                    !!this.state.eventGID &&
                    (0, e.jsx)("a", {
                      href:
                        j.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        this.props.admin
                          .GetClanSteamID()
                          .ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        this.state.eventGID,
                      children: (0, t.we)("#RSSManager_PostEvent_EventLink"),
                    }),
                });
            }
          }
        };
        ee([p.oI], W.prototype, "OnCreateNewsFeed", 1),
          ee([p.oI], W.prototype, "DoCreateNewsFeed", 1),
          ee([p.oI], W.prototype, "OnCreatePost", 1),
          ee([p.oI], W.prototype, "DoCreatePost", 1),
          ee([p.oI], W.prototype, "OnChangeDraftMode", 1),
          ee([p.oI], W.prototype, "OnChangePermissionsCreateFeed", 1),
          ee([p.oI], W.prototype, "OnChangeConductCreateFeed", 1),
          ee([p.oI], W.prototype, "GetStrTitle", 1);
        let We = W;
      },
      17809: (re, Ae, i) => {
        "use strict";
        i.d(Ae, { d: () => Ht });
        var e = i(7850),
          P = i(19367),
          S = i(90626),
          s = i(3685),
          j = i(85528),
          ce = i(7638),
          k = i(79118),
          V = i(18210),
          K = i(3166),
          me = i(75779),
          U = i(80902),
          x = i(72604),
          z = i(72609);
        function H() {
          return typeof self < "u" ? self.origin : "store";
        }
        async function B() {
          const v = new URLSearchParams(),
            h = H();
          h && v.set("origin", h);
          const b = `${z.TS.STORE_BASE_URL}saleaction/ajaxgetuserdeckcompatcounts?${v}`,
            R = await fetch(b);
          if (!R.ok) throw new Error(`${b} answered ${R.status}`);
          const G = await R.json();
          if (G?.success != x.R || !G.counts)
            throw new Error(`${b} answered EResult ${G?.success}`);
          return G.counts;
        }
        const O = 300 * 1e3;
        function Q() {
          return ["DeckCompatCounts"];
        }
        function _() {
          return { queryKey: Q(), queryFn: () => B(), staleTime: O, retry: !1 };
        }
        function J() {
          const { data: v } = (0, U.I)(_());
          return v;
        }
        function N(v, h) {
          switch (h) {
            case me.sd:
              return v?.playable;
            case me.V8:
              return v?.unsupported;
            default:
              return v?.verified;
          }
        }
        var I = i(70187),
          T = i(7379),
          g = i(64703),
          w = i(6878),
          m = i(99412),
          t = i(47610),
          l = i(18860),
          p = i(41635),
          A = i(25792),
          Y = i(85599),
          $ = i(5565);
        const ue = S.Fragment;
        function ve(v) {
          const {
              reservationPackageID: h,
              depositPackageID: b,
              bIsPreview: R,
              psuLessPackageID: G,
              strOutOfStockOverride: q,
              strDeliveryOverride: te,
              bDeliveryOverrideOnlyIfOutOfStock: Me,
              section: Be,
            } = v,
            { data: pe } = (0, t.DR)(h),
            { data: Ce } = (0, t.DR)(G),
            Pe = (0, S.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + h,
                  reservation_package: h,
                  deposit_package: b,
                  localized_reservation_desc: (0, p.$Y)([], m.bP9, null),
                  localized_out_of_stock_override: (0, p.$Y)(
                    [q || null],
                    m.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, p.$Y)(
                    [te || null],
                    m.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!Me,
                  psu_less_package: G,
                },
              ],
              [h, b, q, te, Me, G],
            );
          if (!pe || (G && !Ce))
            return (0, e.jsx)(Y.t, {
              string: (0, V.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const Ve = !z.iA.logged_in || !pe.account_restricted_from_purchasing,
            De =
              pe.reservation_state == l.G.k_EPurchaseReservationState_Reserved
                ? pe
                : void 0;
          return (0, e.jsxs)(A.tH, {
            children: [
              (0, e.jsx)(S.Suspense, {
                fallback: null,
                children: (0, e.jsx)(ue, {
                  bIsPreview: !!R,
                  rgReservationDef: Pe,
                }),
              }),
              !!pe.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Pe[0].unique_id,
                  children: [
                    (0, e.jsx)($.bk, {
                      reservationDef: Pe[0],
                      hardwareDetail: pe,
                      bPSULessModel: !1,
                      reservedHardwareDetail: De,
                    }),
                    Ve &&
                      (0, e.jsx)($.pc, {
                        section: Be,
                        reservationDef: Pe[0],
                        hardwareDetail: pe,
                        reservedHardwareDetail: De,
                      }),
                    Ce &&
                      Ce?.allow_purchase_in_country &&
                      (0, e.jsx)($.bk, {
                        reservationDef: Pe[0],
                        hardwareDetail: Ce,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        function xe(v) {
          if (v?.bDepositRequired) {
            if (
              v.rgDepositPackageInfo &&
              v.rgDepositPackageInfo?.length > 0 &&
              v.rgDepositPackageInfo.filter((h) => h.bVisible).length == 0 &&
              v?.rgReservationPackageInfo &&
              v?.rgReservationPackageInfo?.length > 0 &&
              v?.rgReservationPackageInfo.filter((h) => h.bVisible).length == 0
            )
              return !1;
          } else if (
            v?.rgReservationPackageInfo &&
            v?.rgReservationPackageInfo?.length > 0 &&
            v?.rgReservationPackageInfo.filter((h) => h.bVisible).length == 0
          )
            return !1;
          return !0;
        }
        var Ie = i(21035),
          Ne = i(72865),
          qe = i(73371),
          ee = i.n(qe),
          we = i(36707),
          ae = i(53041),
          se = i(10026),
          X = i.n(se),
          W = i(19298),
          We = i(11996),
          M = i(19047),
          y = i(36118),
          L = i(47689),
          E = i(89926),
          Z = i(32545),
          oe = i.n(Z);
        function fe(v) {
          const { appID: h, classOverride: b, styleOverride: R } = v,
            [G, q] = (0, S.useState)(!1),
            te = (0, L.m)("GameHoverFollowButton"),
            { elDialogElement: Me, fnShowLogonDialog: Be } = (0, E.l)(),
            pe = (0, We.Fh)(h),
            { mutateAsync: Ce } = (0, M.L)(h, !pe, void 0),
            Pe = async (Ve) => {
              Ve.preventDefault(),
                Ve.stopPropagation(),
                K.iA.logged_in
                  ? (q(!0), await Ce(), te.token.reason || q(!1))
                  : Be();
            };
          return (0, e.jsxs)(W.Z, {
            className: (0, we.A)(oe().FollowButton, b),
            onClick: Pe,
            style: R,
            children: [
              pe ? (0, e.jsx)(y.pPV, {}) : (0, e.jsx)(y.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, we.A)(
                  oe().FollowButtonText,
                  G && oe().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, V.we)(
                  pe ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              Me,
            ],
          });
        }
        function ge(v) {
          const { appid: h, color: b, bgcolor: R } = v,
            G = (0, Ne.n9)();
          return (0, e.jsx)(fe, {
            appID: h,
            classOverride: (0, we.A)(
              ee().FollowGameButtonNotTop,
              X().BBCodeFollowButton,
            ),
            styleOverride: { color: b, backgroundColor: R },
          });
        }
        function he(v) {
          const h = Number(v.args.appid);
          if (!h) return null;
          const b = (0, ae.O)(v.args.color, "black"),
            R = (0, ae.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(ge, { appid: h, color: b, bgcolor: R });
        }
        var le = i(20681),
          Qe = i(18657),
          mt = i.n(Qe),
          ut = i(63026);
        function St(v) {
          const { clanAccountID: h, color: b, bgcolor: R } = v;
          (0, le.mx)();
          const [G, q] = S.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, we.A)(mt().BBCodeFollowButton, G && mt().isHovered),
            onMouseEnter: () => q(!0),
            onMouseLeave: () => q(!1),
            children: (0, e.jsx)(ut.Q, {
              nCreatorAccountID: h,
              classOverride: ee().FollowGameButtonNotTop,
              styleOverride: { color: b, backgroundColor: R },
              followType: "group",
            }),
          });
        }
        function yt(v) {
          const { event: h } = v.context,
            b = Number(v.args.groupid) || h?.clanSteamID.GetAccountID();
          if (!b) return null;
          const R = (0, ae.O)(v.args.color, "black"),
            G = (0, ae.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(St, { clanAccountID: b, color: R, bgcolor: G });
        }
        var Ye = i(83482),
          gt = i(44267),
          At = i(9202),
          ht = i.n(At),
          et = i(29522);
        function xt(v) {
          const { appid: h, color: b, bgcolor: R } = v,
            G = (0, Ne.n9)(),
            q = (0, et.$5)(h),
            te = (0, Ye.L3)(G);
          return (0, e.jsx)("div", {
            className: ht().WishlistHoverCtn,
            children: (0, e.jsx)(gt.E, {
              snr: te,
              id: q,
              classOverride: (0, we.A)(
                ee().WishlistButtonNotTop,
                ht().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: b, backgroundColor: R },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function It(v) {
          const h = Number(v.args.appid);
          if (!h) return null;
          const b = (0, ae.O)(v.args.color, "black"),
            R = (0, ae.O)(v.args.bgcolor, "white");
          return (0, e.jsx)(xt, { appid: h, color: b, bgcolor: R });
        }
        let ze = null;
        function wt() {
          return (
            ze == null &&
              (ze = new Map([
                ["wishlist", { Constructor: It, autocloses: !1 }],
                ["followgroup", { Constructor: yt, autocloses: !1 }],
              ])),
            ze
          );
        }
        var Mt = i(37656),
          Re = i(29868),
          Le = i(24642);
        function Fe(v) {
          return v < 10 ? "0" + v : v;
        }
        function Ke(v) {
          const { giveawayid: h } = v,
            b = (0, Mt.w)(h),
            {
              bLoadingGiveawayInfo: R,
              winner_count: G,
              closed: q,
              seconds_until_drawing: te,
            } = b;
          return R
            ? null
            : (0, e.jsxs)("div", {
                className: Re.countdownCtn,
                children: [
                  !!q &&
                    (0, e.jsx)("div", {
                      className: Re.Closed,
                      children:
                        G > 0
                          ? (0, V.we)("#Giveaway_Closed", (0, Le.D)(G))
                          : (0, V.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !q &&
                    (0, e.jsxs)(S.Fragment, {
                      children: [
                        te <= 0
                          ? (0, e.jsxs)("div", {
                              className: Re.Throbber,
                              children: [
                                (0, e.jsx)(Y.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, V.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Re.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Re.CountDownTime,
                                  children:
                                    Fe(Math.floor(te / 60)) + ":" + Fe(te % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Re.CountDownText,
                                  children: [
                                    (0, V.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, V.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        G > 0 &&
                          (0, e.jsxs)("div", {
                            className: Re.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Re.WinnerCount,
                                children: (0, Le.D)(G),
                              }),
                              (0, e.jsx)("div", {
                                className: Re.WinnerText,
                                children: (0, V.we)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var tt = i(57646);
        function bt(v) {
          const h = Number(v.args.packageid);
          return h
            ? (0, e.jsx)(tt.eF, {
                packageID: h,
                display_style: (0, tt._w)(v.args.display),
              })
            : null;
        }
        function Ue(v) {
          const h = Number(v.args.packageid),
            b = Number(v.args.compareid);
          return !h || !b
            ? null
            : (0, e.jsx)(tt.hJ, { packageID: h, compareID: b });
        }
        var jt = i(88245),
          Et = i(35702),
          Dt = i(16412),
          Oe = i(92757),
          He = i(39256),
          Tt = i(4720),
          Bt = i(75110),
          nt = i(57810),
          je = i(36631),
          at = i(25533),
          Ge = i(81416);
        function Xe(v) {
          const { eventModel: h, nEventBadgeID: b } = v,
            R = (0, Et.fy)(b);
          if (R?.level > 0) {
            let G = R.level;
            if (h?.BHasSaleEnabled()) {
              const q = h.GetSaleSectionsByType("badge_progress");
              if (q?.length == 1) {
                const te = q[0].badge_progress;
                if (te?.event_badgeid == b && te?.granted_by_discovery_queue) {
                  const Me = te.levels[te.levels.length - 1].level;
                  return (0, e.jsx)(_e, {
                    eventModel: h,
                    nBadgeLevel: G,
                    nMaxLevel: Me,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Le.D)(G),
            });
          }
          return null;
        }
        function _e(v) {
          const { eventModel: h, nBadgeLevel: b, nMaxLevel: R } = v,
            G = S.useMemo(() => {
              const pe = h
                .GetSaleSections()
                .filter((Ce) => Ce.section_type == "discoveryqueue");
              return pe?.length > 0 ? pe[0] : null;
            }, [h]),
            { storePageFilter: q, eStoreDiscoveryQueueType: te } = S.useMemo(
              () => (0, Bt.lx)(h, G),
              [h, G],
            ),
            Me = (0, nt.Uf)(te, q),
            Be = Math.min(b + Me, R);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Le.D)(Be),
          });
        }
        function Se(v) {
          const { event: h } = v.context,
            b = Number.parseInt((0, I.j$)(v.args, "eventid"));
          return K.iA.logged_in && b
            ? (0, e.jsx)(Xe, { nEventBadgeID: b, eventModel: h })
            : null;
        }
        function Ct(v) {
          const { nDoorIndex: h, children: b } = v,
            R = (0, g.OM)(h),
            { fnOpenDoor: G } = (0, g.OC)(),
            [q, te] = S.useState(!1),
            [Me, Be] = S.useState(!1),
            { elDialogElement: pe, fnShowLogonDialog: Ce } = (0, E.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Dt.$n, {
                disabled: R,
                onClick: (Pe) => {
                  q ||
                    (K.iA.logged_in
                      ? (te(!0),
                        G(h, !0, null, !1)
                          .then((Ve) => {
                            Ve || Be(!0), te(!1);
                          })
                          .catch(() => {
                            Be(!0), te(!1);
                          }))
                      : Ce());
                },
                children: Me
                  ? (0, e.jsx)("div", {
                      children: (0, V.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!q && (0, e.jsx)(Y.t, { size: "small" }),
                        !!R && (0, e.jsx)(y.Jlk, {}),
                        b,
                      ],
                    }),
              }),
              pe,
            ],
          });
        }
        function vt(v) {
          const h = Number.parseInt((0, I.j$)(v.args)) || 0;
          return h >= 0 && h < 32
            ? (0, e.jsx)(Ct, { nDoorIndex: h, children: v.children })
            : null;
        }
        const Ee = (0, Oe.y)(at.H);
        function Rt(v) {
          const h = Number.parseInt((0, I.j$)(v.args)),
            { event: b, showErrorInfo: R } = v.context;
          if (h) {
            const G = b?.jsondata?.sale_sections?.findIndex(
              (q) => q.unique_id == h,
            );
            if (G >= 0) {
              const q = b.GetDayIndexFromEventStart();
              return (0, e.jsx)(je.Cs, {
                location: R ? je.HY : je.bs,
                children: (0, e.jsx)(Ee, {
                  event: b,
                  section: b.jsondata.sale_sections[G],
                  activeTab: new Tt.y(null, q),
                  language: v.language,
                  nSaleDayIndex: q,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: R
                    ? Ge.S.EPreviewMode_Enabled
                    : Ge.S.EPreviewMode_Disabled,
                }),
              });
            } else if (R)
              return (0, e.jsxs)("div", {
                className: He.ErrorDiv,
                children: ["Error could not find sale section ", h],
              });
          }
          return null;
        }
        let rt = null;
        function Lt() {
          return (
            rt == null &&
              (rt = new Map([
                ...Array.from(wt().entries()),
                [
                  "itemdef",
                  {
                    Constructor: Ot,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: he, autocloses: !1 }],
                ["deckcompatcount", { Constructor: Gt, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: Ft, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: C, autocloses: !1 }],
                ["price", { Constructor: bt, autocloses: !1 }],
                ["pricesavings", { Constructor: Ue, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: ke, autocloses: !1 }],
                ["chooseaccount", { Constructor: Ut, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: Se, autocloses: !1 }],
                ["optindoorquest", { Constructor: vt, autocloses: !1 }],
                ["classname", { Constructor: st, autocloses: !1 }],
                ["localize", { Constructor: $e, autocloses: !1 }],
                ["salesection", { Constructor: Rt, autocloses: !1 }],
                ["reservationbutton", { Constructor: ft, autocloses: !1 }],
              ])),
            rt
          );
        }
        function Ot(v) {
          const { event: h } = v.context,
            b = Number.parseInt((0, I.j$)(v.args, "appid")),
            R = Number.parseInt((0, I.j$)(v.args, "itemdefid")),
            G = Number.parseInt((0, I.j$)(v.args, "maxquantity")),
            q = (0, I.j$)(v.args, "calltoaction");
          return !(0, jt.gS)(b, R, !1) || !h
            ? (0, e.jsx)(Y.t, {
                size: "small",
                position: "center",
                string: (0, V.we)("#Loading"),
              })
            : (0, e.jsx)(Ie.f, {
                language: v.language,
                clanAccountID: h.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: b, nItemDefID: R, max_quantity: G },
                strCallToAction: q,
              });
        }
        function Gt(v) {
          const h = J();
          if (!h) return (0, e.jsx)(Y.t, { size: "small" });
          const b = Number.parseInt((0, I.j$)(v.args));
          return (0, e.jsx)("span", { children: (0, Le.D)(Number(N(h, b))) });
        }
        function Ft(v) {
          const h = (0, T.j)(K.iA.accountid, "library");
          if (!h) return (0, e.jsx)(Y.t, { size: "small" });
          const b = Number.parseInt((0, I.j$)(v.args));
          let R = h.verifiedList?.length || 0;
          switch (b) {
            case me.sd:
              R = h.playableList?.length || 0;
              break;
            case me.V8:
              R = h.unsupportedList?.length || 0;
              break;
            case me.YX:
              R = h.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Le.D)(Number(R)) });
        }
        function ke(v) {
          const h = Number.parseInt((0, I.j$)(v.args)),
            b =
              "hide" in v.args && !!Number.parseInt((0, I.j$)(v.args, "hide"));
          return h >= 0
            ? (0, e.jsx)(pt, { nDoorIndex: h, bHide: b, children: v.children })
            : null;
        }
        function pt(v) {
          const { nDoorIndex: h, bHide: b, children: R } = v,
            G = (0, g.OM)(h);
          return G == null
            ? null
            : (G && !b) || (!G && b)
              ? (0, e.jsx)(e.Fragment, { children: v.children })
              : null;
        }
        function Ut(v) {
          if (K.iA.logged_in) {
            const h = Number.parseInt((0, I.j$)(v.args)),
              b = Number.parseInt((0, I.j$)(v.args, "mod"));
            if (b > 0 && h < b && K.iA.accountid % b == h) return v.children;
          }
          return null;
        }
        function st(v) {
          const h = (0, I.j$)(v.args);
          return h?.trim().length > 0
            ? (0, e.jsx)("div", { className: h.trim(), children: v.children })
            : (0, e.jsx)(e.Fragment, { children: v.children });
        }
        function $e(v) {
          return (0, e.jsx)("span", {
            className: w.LocalizeBlock,
            children: (0, V.oW)(
              v.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function C(v) {
          let h = (0, I.j$)(v.args);
          return h
            ? (0, e.jsx)(Ke, { giveawayid: h })
            : (0, e.jsx)(S.Fragment, {});
        }
        function ft(v) {
          const { showErrorInfo: h, event: b } = v.context,
            R = Number.parseInt((0, I.j$)(v.args)),
            G = S.useMemo(() => {
              if (b)
                return b.jsondata.sale_sections?.find(
                  (q) =>
                    q.section_type == "vo_internal" &&
                    (q.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      q.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [b]);
          if (R && G) {
            const q = Number.parseInt((0, I.j$)(v.args, "depositpackageid")),
              te = Number.parseInt((0, I.j$)(v.args, "psulesspackageid")),
              Me = (0, I.j$)(v.args, "out_of_stock_override"),
              Be = (0, I.j$)(v.args, "delivery_override"),
              pe = (0, I.j$)(v.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(ve, {
              section: G,
              reservationPackageID: R,
              depositPackageID: q,
              psuLessPackageID: te,
              strOutOfStockOverride: Me,
              strDeliveryOverride: pe || Be,
              bDeliveryOverrideOnlyIfOutOfStock: !!pe,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        var Pt = i(71698),
          zt = i(82206);
        function Ht(v) {
          const { bSalePage: h } = v,
            [b, R] = S.useState(ce.KN.IsInitialized());
          return (
            (0, Pt.H)(b, h),
            S.useEffect(() => {
              j.Vw.Init(new s.D(K.TS.WEBAPI_BASE_URL)),
                k.O3.Init(),
                ce.KN.InitGlobal().then(() => R(!0));
            }, []),
            S.useEffect(() => {
              const G = (0, V.l4)();
              G && P.locale(G);
            }, []),
            b
              ? h
                ? (0, e.jsx)(zt.d3, { dictionary: Lt(), children: v.children })
                : v.children
              : null
          );
        }
      },
      52671: (re, Ae, i) => {
        "use strict";
        i.r(Ae), i.d(Ae, { default: () => V });
        var e = i(7850),
          P = i(90626),
          S = i(92757),
          s = i(82559),
          j = i(57223),
          ce = i(25792),
          k = i(7638);
        class V extends P.Component {
          state = { bIsLoading: !0 };
          async componentDidMount() {
            j.A.Get(),
              await k.KN.InitGlobal(),
              this.setState({ bIsLoading: !1 });
          }
          render() {
            return this.state.bIsLoading
              ? null
              : (0, e.jsx)(ce.tH, {
                  children: (0, e.jsxs)(S.dO, {
                    children: [
                      (0, e.jsx)(S.qh, {
                        exact: !0,
                        path: "/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss",
                        component: s.A,
                      }),
                      (0, e.jsx)(S.qh, { children: !1 }),
                    ],
                  }),
                });
          }
        }
      },
      87278: (re, Ae, i) => {
        "use strict";
        i.r(Ae), i.d(Ae, { default: () => ln });
        var e = i(7850),
          P = i(58732),
          S = i(57223),
          s = i(72604),
          j = i(3166),
          ce = i(41735),
          k = i.n(ce),
          V = i(34592);
        class K {
          static s_Singleton;
          m_rgRSSEnabledClans = [];
          GetAllRSSEnabledClans() {
            return this.m_rgRSSEnabledClans;
          }
          GetTrustedEnabledClans(n) {
            return this.m_rgRSSEnabledClans
              .filter((r) => r.is_trusted_press == n)
              .map((r) => r.clan_accoundid);
          }
          static Get() {
            return (
              K.s_Singleton ||
                ((K.s_Singleton = new K()), K.s_Singleton.Init()),
              K.s_Singleton
            );
          }
          Init() {
            let n = (0, j.Tc)("rssaccountinfo", "application_config");
            this.ValidateRSSAccountConfig(n) && (this.m_rgRSSEnabledClans = n);
          }
          ValidateRSSAccountConfig(n) {
            const r = n;
            return (
              r &&
              Array.isArray(r) &&
              r.length > 0 &&
              typeof r[0] == "object" &&
              typeof r[0].clan_accoundid == "number"
            );
          }
          async LoadKnownAllRSSInfo() {
            const n = new Array(),
              r = S.A.Get();
            this.m_rgRSSEnabledClans.forEach((o) => {
              r.BHasClanIDLoaded(o.clan_accoundid) ||
                n.push(r.QueueCuratorAdminInfoLoad(o.clan_accoundid));
            }),
              await Promise.all(n);
          }
          ExtractWithoutRSSAutomation() {
            const n = [],
              r = S.A.Get();
            return (
              this.m_rgRSSEnabledClans.forEach((o) => {
                const d = r.GetRSSAdminForClanAccountID(o.clan_accoundid);
                d && !d.BIsAutomationEnabled() && n.push(o.clan_accoundid);
              }),
              n
            );
          }
          async HintLoadAccounts() {}
          async ReindexClanEventsAndReloadAccount(n) {
            const r =
                j.TS.STORE_BASE_URL + "events_admin/ajaxflushandreindexrss",
              o = new FormData();
            o.set("sessionid", (0, j.KC)()), o.append("clanids", "" + n);
            try {
              if (
                (await k().post(r, o, { withCredentials: !0 }))?.data
                  ?.success == s.R
              )
                return !0;
            } catch (d) {
              const c = (0, V.H)(d);
              console.error(
                "Failed to ReindexClanEventsAndReloadAccount: " + c.strErrorMsg,
                c,
              );
            }
            return !1;
          }
        }
        var me = i(82559),
          U = i(75844),
          x = i(90626),
          z = i(92757),
          H = i(76559),
          B = i(813),
          O = i(16412),
          Q = i(25792),
          _ = i(60655),
          J = i(88003),
          N = i(36118),
          I = i(85599),
          T = i(71421),
          g = i(36707),
          w = i(82734),
          m = i(18210),
          t = i(52081),
          l = i.n(t),
          p = i(96538),
          A = i(2259),
          Y = i(24642);
        const $ = (a) => {
            const [n, r] = (0, x.useState)(!0);
            if (
              ((0, x.useEffect)(() => {
                (async () => (
                  B.ac.Init(), await K.Get().HintLoadAccounts(), r(!1)
                ))();
              }, []),
              n)
            )
              return (0, e.jsx)(I.t, {
                string: (0, m.we)("#Loading"),
                size: "medium",
              });
            const o = K.Get().GetTrustedEnabledClans(!0),
              d = K.Get().GetTrustedEnabledClans(!1);
            return (0, e.jsx)("div", {
              children: (0, e.jsxs)(Q.tH, {
                children: [
                  (0, e.jsx)("h1", {
                    children: (0, m.we)("#RSSModeration_Title"),
                  }),
                  (0, e.jsx)(ve, {}),
                  (0, e.jsx)(ee, {
                    rgClanIDs: K.Get()
                      .GetAllRSSEnabledClans()
                      .map((c) => c.clan_accoundid),
                  }),
                  (0, e.jsx)(xe, {
                    rgClanIDs: o,
                    strTitle: (0, m.we)("#RSSModeration_TrustTitle"),
                  }),
                  (0, e.jsx)(xe, {
                    rgClanIDs: d,
                    strTitle: (0, m.we)("#RSSModeration_RestTitle"),
                  }),
                ],
              }),
            });
          },
          ue = (0, z.y)($),
          ve = (0, U.PA)((a) => {
            const [n, r] = (0, x.useState)(!1),
              [o, d] = (0, x.useState)(void 0);
            return n
              ? (0, e.jsx)(I.t, {
                  string: (0, m.we)("#Loading"),
                  size: "medium",
                })
              : o !== void 0
                ? o.length > 0
                  ? (0, e.jsx)(xe, {
                      rgClanIDs: o,
                      strTitle: (0, m.we)("#RSSModeration_InactiveAutomation"),
                    })
                  : (0, e.jsx)("div", {
                      children: (0, m.we)(
                        "#RSSModreation_AllAutomationEnabled",
                      ),
                    })
                : (0, e.jsxs)(O.$n, {
                    onClick: async () => {
                      r(!0),
                        await K.Get().LoadKnownAllRSSInfo(),
                        d(K.Get().ExtractWithoutRSSAutomation()),
                        r(!1);
                    },
                    children: [(0, m.we)("#RSSModeration_FindInActive"), " "],
                  });
          }),
          xe = (a) => {
            const { rgClanIDs: n, strTitle: r } = a,
              [o, d] = (0, x.useState)(!1);
            let c = null;
            return (
              o || (c = n.map((u) => (0, e.jsx)(Ie, { clanAccountID: u }, u))),
              (0, e.jsxs)("div", {
                className: (0, g.A)(l().SectionContainer),
                children: [
                  (0, e.jsxs)("h2", {
                    className: (0, g.A)(l().ModSectionTitle),
                    onDoubleClick: () => d(!o),
                    children: [
                      r,
                      (0, e.jsx)("span", { children: "\xA0" }),
                      (0, e.jsx)(O.$n, {
                        className: l().ResizeButton,
                        onClick: () => d(!o),
                        children: o
                          ? (0, e.jsx)(N.hz4, {})
                          : (0, e.jsx)(N.Xjb, {}),
                      }),
                    ],
                  }),
                  o &&
                    (0, e.jsx)(O.$n, {
                      onClick: () => d(!1),
                      children: (0, m.we)("#Sale_ShowContents"),
                    }),
                  c,
                ],
              })
            );
          },
          Ie = (0, U.PA)((a) => {
            const { clanAccountID: n } = a;
            return B.ac.BHasClanInfoLoadedByAccountID(n) &&
              S.A.Get().BHasClanIDLoaded(n)
              ? (0, e.jsx)(qe, {
                  clanInfo: B.ac.GetClanInfoByClanAccountID(n),
                  rssAdminInfo: S.A.Get().GetRSSAdminForClanAccountID(n),
                })
              : (0, e.jsx)(Ne, { clanAccountID: n });
          }),
          Ne = (a) => {
            const { clanAccountID: n } = a,
              r = "500px",
              o = async () => {
                const c = H.b.InitFromClanID(n);
                await Promise.all([
                  B.ac.LoadClanInfoForClanSteamID(c),
                  S.A.Get().QueueCuratorAdminInfoLoad(n),
                ]);
              },
              d = (0, A.OO)(
                { onEnter: o },
                { rootMargin: `${r} 0px ${r} 0px` },
              );
            return (0, e.jsx)("div", {
              ref: d,
              className: l().TileContainer,
              children: (0, e.jsxs)("div", {
                children: [(0, m.we)("#Loading"), " - ", n],
              }),
            });
          },
          qe = (a) => {
            const { clanInfo: n, rssAdminInfo: r } = a,
              [o, d] = (0, x.useState)(!1),
              c = j.TS.STORE_BASE_URL + "newshub/group/" + n.clanAccountID,
              u =
                j.TS.STORE_BASE_URL +
                "curator/" +
                n.clanAccountID +
                "/admin/manage_rss",
              f = j.TS.COMMUNITY_BASE_URL + "group/" + n.clanAccountID,
              F =
                "https://steamsupport.valvesoftware.com/clan/overview/" +
                H.b.InitFromClanID(n.clanAccountID).ConvertTo64BitString(),
              ie = S.A.Get().GetRSSAdminStats(n.clanAccountID);
            return (0, e.jsxs)("div", {
              className: (0, g.A)(l().TileContainer),
              children: [
                (0, e.jsxs)("div", {
                  className: (0, g.A)(l().TileSpread),
                  children: [
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsxs)("div", {
                          children: [n.group_name, " - ", n.clanAccountID],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            (0, e.jsxs)("div", {
                              children: [
                                (0, m.we)("#CuratorAdmin_RSSFeed"),
                                ":",
                              ],
                            }),
                            (0, e.jsx)("a", {
                              href: r.GetRSSUrl(),
                              children: r.GetRSSUrl(),
                            }),
                          ],
                        }),
                        !!ie &&
                          (0, e.jsxs)("div", {
                            children: [
                              (0, e.jsx)("div", {
                                children: (0, m.we)(
                                  "#RSSModeration_TotalEvents",
                                  (0, Y.D)(ie.total_event_count),
                                ),
                              }),
                              (0, e.jsx)("div", {
                                children: (0, m.we)(
                                  "#RSSModeration_RSSEvents",
                                  (0, Y.D)(ie.rss_event_count),
                                ),
                              }),
                            ],
                          }),
                        (0, e.jsx)(O.$n, {
                          onClick: () => d(!o),
                          children: (0, m.we)(
                            o
                              ? "#Bbcode_Expand_Details_Expanded"
                              : "#Bbcode_Expand_Details_Collapsed",
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsxs)("ul", {
                        children: [
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: c,
                              children: (0, m.we)(
                                "#EventDisplay_NewsHubSubtitle",
                              ),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: u,
                              children: (0, m.we)(
                                "#CuratorAdmin_RSSFeed_title",
                              ),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: f,
                              children: (0, m.we)("#RSSModeration_GroupPage"),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: F,
                              children: (0, m.we)("#RSSModeration_SupportPage"),
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)(ee, {
                              rgClanIDs: [n.clanAccountID],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: l().CreatorCtn,
                      children: (0, e.jsx)(_.hA, {
                        bHideCreatorType: !0,
                        creatorID: {
                          name: null,
                          clan_account_id: n.clanAccountID,
                          type: "developer",
                        },
                        bSmallFormat: !0,
                      }),
                    }),
                  ],
                }),
                !!o &&
                  (0, e.jsx)(e.Fragment, {
                    children: r.BHasSavedRSSURL()
                      ? (0, e.jsx)(me.q, { strRssURL: r.GetRSSUrl(), admin: r })
                      : (0, e.jsx)("div", {
                          children: (0, m.we)("#RSSModeration_NoRSSFeed"),
                        }),
                  }),
              ],
            });
          },
          ee = (a) => {
            const n = (r) => {
              (0, J.pg)((0, e.jsx)(we, { ...a }), (0, w.uX)(r));
            };
            return (0, e.jsx)(T.he, {
              toolTipContent: (0, m.we)("#RSSModeration_ReindexAndReload_ttip"),
              children: (0, e.jsx)(O.$n, {
                onClick: n,
                children: (0, m.we)("#RSSModeration_ReindexAndReload"),
              }),
            });
          },
          we = (a) => {
            const [n, r] = (0, x.useState)(void 0),
              [o, d] = (0, x.useState)(!1),
              [c, u] = (0, x.useState)(void 0),
              f = () => a.closeModal && a.closeModal(),
              D = async () => {
                let F = 0;
                r(F);
                for (let ie = 0; ie < a.rgClanIDs.length; ++ie) {
                  let ne = a.rgClanIDs[ie];
                  if (await K.Get().ReindexClanEventsAndReloadAccount(ne))
                    (F += 1), r(F);
                  else {
                    u((0, m.we)("#Error_Generic_Label"));
                    break;
                  }
                }
                d(!0);
              };
            return (0, e.jsx)(p.x_, {
              onEscKeypress: f,
              children: (0, e.jsxs)(O.UC, {
                children: [
                  (0, e.jsxs)(O.Y9, {
                    children: [
                      " ",
                      (0, m.we)("#RSSModeration_ReindexAndReload"),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)(O.nB, {
                    children: [
                      (0, e.jsxs)(O.a3, {
                        children: [
                          n === void 0
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, m.we)(
                                      "#RSSModeration_Reindex_Verify",
                                      a.rgClanIDs.length,
                                    ),
                                  }),
                                  (0, e.jsx)(O.jn, {
                                    onClick: D,
                                    children: (0, m.we)("#Button_Continue"),
                                  }),
                                ],
                              })
                            : (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, m.we)(
                                      "#RSSModeration_Reindex_Action",
                                      n,
                                      a.rgClanIDs.length,
                                    ),
                                  }),
                                  o
                                    ? (0, e.jsx)("span", {
                                        children: (0, m.we)(
                                          "#EventEditor_ImportFromHTML_ConvertFinished",
                                        ),
                                      })
                                    : (0, e.jsx)(I.t, {
                                        size: "small",
                                        string: (0, m.we)("#Updating"),
                                      }),
                                ],
                              }),
                          !!c && (0, e.jsxs)("span", { children: [c, " "] }),
                        ],
                      }),
                      (0, e.jsx)(O.wi, {
                        children: (0, e.jsx)(O.$n, {
                          onClick: f,
                          children: (0, m.we)(
                            o ? "#Button_OK" : "#Button_Cancel",
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
        var ae = i(79118),
          se = i(30096),
          X = i(99412),
          W = i(14947),
          We = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          y = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? M(n, r) : n, c = a.length - 1, u;
              c >= 0;
              c--
            )
              (u = a[c]) && (d = (o ? u(n, r, d) : u(d)) || d);
            return o && d && We(n, r, d), d;
          };
        const L = class lt {
          static s_Singleton;
          m_mapEventGIDToSolrData = new Map();
          m_listEvents = new Array();
          BHasSolrEvent(n) {
            return this.m_mapEventGIDToSolrData.has(n);
          }
          GetAllSolrEvents() {
            return this.m_listEvents;
          }
          static Get() {
            return (
              lt.s_Singleton || (lt.s_Singleton = new lt()), lt.s_Singleton
            );
          }
          constructor() {
            (0, W.Gn)(this);
          }
          ClearAllSolrEvents() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          async LoadPartnerEventForQueryIncremental(
            n,
            r = 0,
            o = 10,
            d,
            c,
            u,
            f,
            D,
            F,
          ) {
            const ie = await this.GetLatestPartnerEvents(
              n,
              r,
              o,
              d,
              c,
              u,
              f,
              D,
              F,
            );
            let ne = new Array();
            return (
              (0, W.h5)(() => {
                ie.forEach((ye) => {
                  this.m_mapEventGIDToSolrData.has(ye.unique_id) ||
                    (ne.push(ye),
                    this.m_mapEventGIDToSolrData.set(ye.unique_id, ye),
                    this.m_listEvents.push(ye));
                });
              }),
              ne
            );
          }
          async GetLatestPartnerEvents(
            n,
            r = 0,
            o = 10,
            d,
            c,
            u,
            f,
            D,
            F,
            ie,
            ne,
            ye,
            de,
          ) {
            const be =
                j.TS.STORE_BASE_URL + "events_admin/ajaxgetlatestpartnerevents",
              Te = {
                page: r,
                count: o,
                date: f,
                appids: d === void 0 ? void 0 : d.join(","),
                required_tags: c === void 0 ? void 0 : c.join(","),
                exclude_tags: u === void 0 ? void 0 : u.join(","),
                eventtypefilter: D === void 0 ? void 0 : D.join(","),
                orderByVisibility: F || void 0,
                creator_home_clan_id: ie === void 0 ? void 0 : ie.join(","),
                showUnpublished: ye === void 0 ? void 0 : ye,
                sale_only: de === void 0 ? void 0 : de,
                term: ne === void 0 ? void 0 : ne,
              },
              kt = await k().get(be, {
                params: Te,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
            return kt.data ? kt.data.docs : [];
          }
        };
        y([W.sH], L.prototype, "m_mapEventGIDToSolrData", 2),
          y([W.sH], L.prototype, "m_listEvents", 2),
          y([W.XI], L.prototype, "ClearAllSolrEvents", 1);
        let E = L;
        var Z = i(9046),
          oe = Object.defineProperty,
          fe = Object.getOwnPropertyDescriptor,
          ge = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? fe(n, r) : n, c = a.length - 1, u;
              c >= 0;
              c--
            )
              (u = a[c]) && (d = (o ? u(n, r, d) : u(d)) || d);
            return o && d && oe(n, r, d), d;
          };
        class he {
          constructor() {
            (0, W.Gn)(this);
          }
          m_backfill = void 0;
          m_mapEventGIDProcessed = new Map();
          m_vecEventGID = new Array();
          m_bBackfillInProgress = !1;
          m_nProcessed = 0;
          m_nSuccesses = 0;
          m_nFailures = 0;
          m_nWarning = 0;
          m_nSkipped = 0;
          GetBackfill() {
            return this.m_backfill;
          }
          SetBackfill(n) {
            this.m_backfill = n;
          }
          StartBackfill(n) {
            (this.m_backfill = n), (this.m_bBackfillInProgress = !0);
          }
          CompleteBackfill(n) {
            (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
          }
          BIsBackkFillInProgress() {
            return this.m_bBackfillInProgress;
          }
          GetEventBackfillProgress() {
            return this.m_mapEventGIDProcessed;
          }
          CreateOrGetBackfillProgess(n) {
            return (
              this.m_mapEventGIDProcessed.has(n) ||
                (this.m_mapEventGIDProcessed.set(n, { bProcessing: !1 }),
                this.m_vecEventGID.push(n)),
              this.m_mapEventGIDProcessed.get(n)
            );
          }
          BHasProgress(n) {
            return this.m_mapEventGIDProcessed.has(n);
          }
          GetBackfillGIDs() {
            return this.m_vecEventGID;
          }
          CloseProgress(n, r) {
            (this.m_nProcessed += 1),
              r.bAlreadyProcessed || r.bSkipped
                ? (this.m_nSkipped += 1)
                : r.bSucceeded
                  ? (this.m_nSuccesses += 1)
                  : r.bFailed && (this.m_nFailures += 1),
              r.bWarning && (this.m_nWarning += 1),
              this.m_mapEventGIDProcessed.set(n, r);
          }
        }
        ge([W.sH], he.prototype, "m_backfill", 2),
          ge([W.sH], he.prototype, "m_mapEventGIDProcessed", 2),
          ge([W.sH], he.prototype, "m_bBackfillInProgress", 2),
          ge([W.sH], he.prototype, "m_nProcessed", 2),
          ge([W.sH], he.prototype, "m_nSuccesses", 2),
          ge([W.sH], he.prototype, "m_nFailures", 2),
          ge([W.sH], he.prototype, "m_nWarning", 2),
          ge([W.sH], he.prototype, "m_nSkipped", 2),
          ge([W.XI], he.prototype, "StartBackfill", 1),
          ge([W.XI], he.prototype, "CompleteBackfill", 1),
          ge([W.XI], he.prototype, "CloseProgress", 1);
        const le = new he();
        var Qe = i(45559),
          mt = i(25279),
          ut = i(56492),
          St = i(75909),
          yt = i(64),
          Ye = i(29630),
          gt = i(6658),
          At = Object.defineProperty,
          ht = Object.getOwnPropertyDescriptor,
          et = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? ht(n, r) : n, c = a.length - 1, u;
              c >= 0;
              c--
            )
              (u = a[c]) && (d = (o ? u(n, r, d) : u(d)) || d);
            return o && d && At(n, r, d), d;
          };
        const xt = 25,
          It = 5e3;
        let ze = class extends x.Component {
          m_cancelSignal = k().CancelToken.source();
          m_nImageID = 0;
          m_mapArtworkResizeSuccess = new Map();
          state = { eBackfillState: void 0 };
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventBackfillLanding component unmounted",
            );
          }
          OnArtworkResizeBackfill() {
            this.state.eBackfillState == null &&
              this.setState(
                { eBackfillState: "started" },
                this.BeginArtworkResize,
              );
          }
          BeginArtworkResize() {
            this.m_mapArtworkResizeSuccess.set("capsule", 0),
              this.m_mapArtworkResizeSuccess.set("spotlight", 0),
              this.m_mapArtworkResizeSuccess.set("background", 0),
              this.RunArtworkResizeBackfill()
                .then(() => this.setState({ eBackfillState: "success" }))
                .catch((a) => {
                  let n = (0, V.H)(a);
                  console.error(
                    "EventBackfillLanding: error " + n.strErrorMsg,
                    n,
                  ),
                    this.setState({ eBackfillState: "error" });
                });
          }
          async GetImageInfo(a, n, r = "") {
            const o = (0, gt.yh)(n),
              d = Ye.zU.GetHashFromHashAndExt(n) + r;
            return Ye.zU.AsyncGetImageResolution(
              a,
              d,
              o,
              this.m_cancelSignal,
              !0,
            );
          }
          HandleErrorFatal(a, n, r, o) {
            let d = (0, V.H)(n),
              c =
                "EventBackfillLanding: " +
                r +
                " on GID " +
                a +
                " : " +
                d.strErrorMsg;
            console.error(c, d),
              o
                ? ((o.bFailed = !0), (o.strMessage = c), le.CloseProgress(a, o))
                : le.CompleteBackfill("resize_image");
          }
          async HandleResizeForImageType(a, n, r, o, d) {
            for (let c = X.Bhc; c < a.length && c < X.bP9; ++c)
              if (a[c] && a[c].length > 0) {
                let u = a[c],
                  f = (0, gt.yh)(u);
                const D = new H.b(n.clan_steamid);
                if (f) {
                  let F = await this.GetImageInfo(D, u).catch(
                    (ie) => (
                      this.HandleErrorFatal(
                        null,
                        ie,
                        "GetImageInfo Original",
                        r,
                      ),
                      { height: 0, width: 0, success: s.zi }
                    ),
                  );
                  if (F.success == s.R && (0, mt.yu)(F.width, F.height, o, !0))
                    if (
                      (
                        await this.GetImageInfo(D, u, d).catch(
                          (ne) => (
                            this.HandleErrorFatal(
                              null,
                              ne,
                              "GetImageInfo Resize",
                              r,
                            ),
                            { height: 0, width: 0, success: s.zi }
                          ),
                        )
                      ).success == s.R
                    )
                      r.bAlreadyProcessed = !0;
                    else {
                      r.bProcessing = !0;
                      let ne = Ye.zU.GetHashFromHashAndExt(u),
                        ye = Ye.zU.GetExtStringFromHashAndExt(u),
                        de = (0, yt.K_)(o);
                      if (de)
                        try {
                          const be = await (0, St.bT)(
                            this.m_cancelSignal.token,
                            D,
                            ne,
                            ye,
                            de,
                          );
                          console.log("success on the resize request"),
                            be == de.length
                              ? ((r.bSucceeded = !0),
                                this.m_mapArtworkResizeSuccess.set(
                                  o,
                                  this.m_mapArtworkResizeSuccess.get(o) + 1,
                                ))
                              : ((r.bFailed = !0),
                                (r.strMessage =
                                  "Did not resize all: " +
                                  o +
                                  " " +
                                  be +
                                  " / " +
                                  de.length));
                        } catch (be) {
                          r.bFailed = !0;
                          let Te = (0, V.H)(be);
                          (r.strMessage = Te.strErrorMsg),
                            console.error("Resize: " + Te.strErrorMsg, Te);
                        }
                      else
                        (r.bFailed = !0),
                          console.error(
                            "Resize: resize request couldn't be determined from the artwork type",
                          );
                    }
                  else r.bSkipped = !0;
                } else r.bSkipped = !0;
              }
          }
          async RunArtworkResizeBackfill() {
            le.StartBackfill("resize_image");
            let a = 0;
            for (; le.BIsBackkFillInProgress(); ) {
              let n = await E.Get()
                .LoadPartnerEventForQueryIncremental(this.m_cancelSignal, a, xt)
                .catch((r) =>
                  this.HandleErrorFatal(
                    null,
                    r,
                    "LoadPartnerEventForQueryIncremental",
                  ),
                );
              if (!n || n.length == 0) {
                le.CompleteBackfill("resize_image"),
                  console.log("Compelted the backfill");
                break;
              }
              a += n.length;
              for (let r = 0; r < n.length; ++r) {
                let o = n[r],
                  d = le.CreateOrGetBackfillProgess(o.unique_id);
                if (!o.announcement_gid || o.announcement_gid.length == 0) {
                  (d.bSkipped = !0),
                    (d.bWarning = !0),
                    le.CloseProgress(o.unique_id, d);
                  continue;
                }
                if (
                  (await ae.O3.LoadPartnerEventFromAnnoucementGID(
                    Number(o.appid),
                    o.announcement_gid,
                    100,
                  ).catch((u) => {
                    this.HandleErrorFatal(
                      o.announcement_gid,
                      u,
                      "LoadPartnerEventFromAnnoucementGID",
                      d,
                    );
                  }),
                  d.bFailed)
                )
                  continue;
                let c = ae.O3.GetClanEventFromAnnouncementGID(
                  o.announcement_gid,
                );
                if (!c) {
                  (d.bFailed = !0),
                    (d.strMessage = "Failed to load the event: " + o.unique_id),
                    le.CloseProgress(o.unique_id, d);
                  continue;
                }
                if (d.bSucceeded || d.bFailed || d.bAlreadyProcessed) {
                  (d.bAlreadyProcessed = !0), le.CloseProgress(o.unique_id, d);
                  continue;
                }
                if (
                  ((d.bAnalysing = !0),
                  this.setState({
                    strInfo:
                      "Processing " +
                      le.GetBackfillGIDs().length +
                      " Appid: " +
                      c.appid +
                      " Event " +
                      c.GID +
                      " Title: " +
                      c.GetNameWithFallback(X.Bhc),
                  }),
                  c.jsondata && c.jsondata.localized_capsule_image)
                ) {
                  let u = c.jsondata.localized_capsule_image;
                  await this.HandleResizeForImageType(
                    u,
                    o,
                    d,
                    "capsule",
                    Z.wI.capsule_main,
                  ).catch((f) =>
                    this.HandleErrorFatal(
                      null,
                      f,
                      "HandleResizeForImageType capsule",
                      d,
                    ),
                  );
                }
                if (c.jsondata && c.jsondata.localized_title_image) {
                  let u = c.jsondata.localized_title_image;
                  await this.HandleResizeForImageType(
                    u,
                    o,
                    d,
                    "background",
                    Z.wI.background_mini,
                  ).catch((f) =>
                    this.HandleErrorFatal(
                      null,
                      f,
                      "HandleResizeForImageType background",
                      d,
                    ),
                  );
                }
                if (c.jsondata && c.jsondata.localized_spotlight_image) {
                  let u = c.jsondata.localized_spotlight_image;
                  await this.HandleResizeForImageType(
                    u,
                    o,
                    d,
                    "spotlight",
                    Z.wI.spotlight_main,
                  ).catch((f) =>
                    this.HandleErrorFatal(
                      null,
                      f,
                      "HandleResizeForImageType spotlight",
                      d,
                    ),
                  );
                }
                if (
                  (le.CloseProgress(o.unique_id, d),
                  !le.BIsBackkFillInProgress())
                )
                  break;
              }
              if (le.m_nFailures > It) {
                console.log("Hit too many errors, stoppinng the backfill");
                break;
              }
            }
          }
          RenderFailure() {
            let a = new Array();
            return (
              le.m_nFailures > 0 &&
                le.GetBackfillGIDs().forEach((n) => {
                  let r = le.GetEventBackfillProgress().get(n);
                  if (r && r.bFailed) {
                    let o = ae.O3.GetClanEventModel(n);
                    o &&
                      a.push(
                        (0, e.jsxs)(
                          "div",
                          {
                            children: [
                              (0, e.jsx)(ut.tj, {
                                eventModel: o,
                                route: ut.PH.k_eView,
                                children: o.GetNameWithFallback(X.Bhc),
                              }),
                              (0, e.jsx)("div", {
                                className: Qe.Error,
                                children: r.strMessage,
                              }),
                            ],
                          },
                          n,
                        ),
                      );
                  }
                }),
              a
            );
          }
          RenderResizeProgress() {
            let a = new Array();
            return (
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Capsule Resized: ",
                      this.m_mapArtworkResizeSuccess.get("capsule"),
                      " ",
                    ],
                  },
                  "res_capsule",
                ),
              ),
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Header Resized: ",
                      this.m_mapArtworkResizeSuccess.get("background"),
                      " ",
                    ],
                  },
                  "res_header",
                ),
              ),
              a.push(
                (0, e.jsxs)(
                  "div",
                  {
                    children: [
                      "Spotlight Resized: ",
                      this.m_mapArtworkResizeSuccess.get("spotlight"),
                      " ",
                    ],
                  },
                  "res_spotlightr",
                ),
              ),
              a
            );
          }
          render() {
            let a = this.RenderFailure(),
              n = this.m_mapArtworkResizeSuccess.has("capsule")
                ? this.RenderResizeProgress()
                : void 0;
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("h2", {
                  children: "Partner Events Backfill Processing Page",
                }),
                this.state.eBackfillState == null &&
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("button", {
                      onClick: this.OnArtworkResizeBackfill,
                      children: "Begin Artwork Resize Backfill",
                    }),
                  }),
                (0, e.jsx)("div", {
                  children: (0, e.jsx)("button", {
                    onClick: () => le.CompleteBackfill("resize_image"),
                    children: "Stop Backfill",
                  }),
                }),
                this.state.strInfo &&
                  (0, e.jsxs)("div", {
                    children: ["Processing: ", this.state.strInfo],
                  }),
                (0, e.jsxs)("div", {
                  children: ["Events Processed: ", le.m_nProcessed],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Succeeded: ", le.m_nSuccesses],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Warning: ", le.m_nWarning],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Failed: ", le.m_nFailures],
                }),
                (0, e.jsxs)("div", {
                  children: ["Events Skipped: ", le.m_nSkipped],
                }),
                a.length > 0 &&
                  (0, e.jsxs)(x.Fragment, {
                    children: [
                      (0, e.jsx)("h2", { children: "Failure Info" }),
                      a,
                    ],
                  }),
                !!n &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("h2", { children: "Resizing Actions" }),
                      n,
                    ],
                  }),
                this.state.eBackfillState == "started" &&
                  (0, e.jsx)(I.t, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress",
                  }),
              ],
            });
          }
        };
        et([se.oI], ze.prototype, "OnArtworkResizeBackfill", 1),
          et([se.oI], ze.prototype, "BeginArtworkResize", 1),
          (ze = et([U.PA], ze));
        var wt = i(65946),
          Mt = i(92298),
          Re = i.n(Mt),
          Le = i(5634),
          Fe = i(73259),
          Ke = i(71684),
          tt = Object.defineProperty,
          bt = Object.getOwnPropertyDescriptor,
          Ue = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? bt(n, r) : n, c = a.length - 1, u;
              c >= 0;
              c--
            )
              (u = a[c]) && (d = (o ? u(n, r, d) : u(d)) || d);
            return o && d && tt(n, r, d), d;
          };
        const jt = i(87937),
          Et = ["mod_reviewed", "auto_migrated"],
          Dt = 20,
          Oe = class dt {
            static s_Singleton;
            selectedTags = void 0;
            excludedTags = void 0;
            filterDate = void 0;
            filterDateAsString = void 0;
            eventsToLoadPerPaging = Dt;
            filterEventTypes = void 0;
            bOrderByVisibilityStartTime = !1;
            bUseCustomQuery = !1;
            static Get() {
              return (
                dt.s_Singleton || (dt.s_Singleton = new dt()), dt.s_Singleton
              );
            }
            constructor() {
              (0, W.Gn)(this);
            }
            Init(n) {
              const r = new URLSearchParams(window.location.search);
              let o;
              r.has("selectedTags") &&
                (o = r
                  .getAll("selectedTags")
                  .filter(Boolean)
                  .map((F) => ({ label: F, value: F })));
              let d = !1,
                c = Et.map((F) => ({ label: F, value: F }));
              r.has("excludedTags") &&
                ((c = r
                  .getAll("excludedTags")
                  .filter(Boolean)
                  .map((F) => ({ label: F, value: F }))),
                (d = c?.length > 0));
              let u;
              r.has("eventtype") &&
                (u = r
                  .getAll("eventtype")
                  .filter(Boolean)
                  .map((F) => {
                    const ie = Number.parseInt(r.get("eventtype"));
                    return { label: (0, Ke.rG)(ie), value: ie };
                  }));
              let f;
              r.has("filterDate") &&
                r.get("filterDate")?.length > 0 &&
                (f = jt.unix(Number(r.get("filterDate"))));
              let D = !1;
              r.has("orderByVisibility") &&
                r.get("orderByVisibility")?.length > 0 &&
                (D = !!r.get("orderByVisibility")),
                (0, W.h5)(() => {
                  (this.selectedTags = o),
                    (this.excludedTags = c),
                    (this.filterEventTypes = u),
                    (this.filterDate = f),
                    (this.bOrderByVisibilityStartTime = D),
                    (this.bUseCustomQuery =
                      (o && o.length > 0) || d || (u && u.length > 0));
                });
            }
          };
        Ue([W.sH], Oe.prototype, "selectedTags", 2),
          Ue([W.sH], Oe.prototype, "excludedTags", 2),
          Ue([W.sH], Oe.prototype, "filterDate", 2),
          Ue([W.sH], Oe.prototype, "filterDateAsString", 2),
          Ue([W.sH], Oe.prototype, "eventsToLoadPerPaging", 2),
          Ue([W.sH], Oe.prototype, "filterEventTypes", 2),
          Ue([W.sH], Oe.prototype, "bOrderByVisibilityStartTime", 2),
          Ue([W.sH], Oe.prototype, "bUseCustomQuery", 2);
        let He = Oe;
        var Tt = Object.defineProperty,
          Bt = Object.getOwnPropertyDescriptor,
          nt = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? Bt(n, r) : n, c = a.length - 1, u;
              c >= 0;
              c--
            )
              (u = a[c]) && (d = (o ? u(n, r, d) : u(d)) || d);
            return o && d && Tt(n, r, d), d;
          },
          je = ((a) => (
            (a[(a.k_ModReviewed = 0)] = "k_ModReviewed"),
            (a[(a.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
            (a[(a.k_ChangeEventType = 2)] = "k_ChangeEventType"),
            (a[(a.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
            (a[(a.k_ModReReviewed = 4)] = "k_ModReReviewed"),
            (a[(a.k_ModRemovedFromSteamChina = 5)] =
              "k_ModRemovedFromSteamChina"),
            (a[(a.k_ModFlagAdultOnlyContent = 6)] =
              "k_ModFlagAdultOnlyContent"),
            (a[(a.k_ModRemoveAdultOnlyContent = 7)] =
              "k_ModRemoveAdultOnlyContent"),
            (a[(a.k_ModFlagHalloweenEvent = 8)] = "k_ModFlagHalloweenEvent"),
            (a[(a.k_ModRemoveHalloweenEvent = 9)] =
              "k_ModRemoveHalloweenEvent"),
            a
          ))(je || {});
        const at = "ModAct";
        class Ge {
          m_moderator;
          m_rtWhen;
          m_action;
          m_newEventType;
          m_newTagAdded;
          ToModString() {
            let n =
              at +
              "_" +
              this.m_moderator +
              "_" +
              Math.floor(this.m_rtWhen) +
              "_" +
              this.m_action;
            switch (this.m_action) {
              case 2:
                n += "_" + this.m_newEventType;
                break;
              case 3:
                n += "_" + this.m_newTagAdded;
                break;
            }
            return n;
          }
          FromString(n) {
            let r = n.split("_");
            if (!r || r[0] !== at) return !1;
            switch (
              ((this.m_moderator = Number(r[1])),
              (this.m_rtWhen = Number(r[2])),
              (this.m_action = Number(r[3])),
              this.m_action)
            ) {
              case 2:
                this.m_newEventType = Number(r[4]);
                break;
              case 3:
                this.m_newTagAdded = r.slice(4).join("_");
                break;
            }
            return !0;
          }
          SetActionChangeEvent(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = 2),
              (this.m_newEventType = n),
              this
            );
          }
          SetReviewAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 0 : 1),
              this
            );
          }
          SetAdultOnlyContentAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 6 : 7),
              this
            );
          }
          SetHalloweenEventTypeAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 8 : 9),
              this
            );
          }
          SetReReviewAction(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = n ? 4 : 1),
              this
            );
          }
          static IsAuditAction(n) {
            return n.startsWith(at);
          }
          SetUpdateSeasonalTags(n) {
            return (
              (this.m_moderator = j.iA.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = 3),
              (this.m_newTagAdded = n),
              this
            );
          }
        }
        const Xe = class ct {
          static s_Singleton;
          m_mapEventGIDToSolrData = new Map();
          m_listEvents = new Array();
          BHasSolrEvent(n) {
            return this.m_mapEventGIDToSolrData.has(n);
          }
          GetAllSolrEvents() {
            return this.m_listEvents;
          }
          static Get() {
            return (
              ct.s_Singleton || (ct.s_Singleton = new ct()), ct.s_Singleton
            );
          }
          constructor() {
            (0, W.Gn)(this);
          }
          ClearAllSolrEvents() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          async LoadPartnerEventForModerationIncremental(n, r = 30) {
            const o =
              j.TS.STORE_BASE_URL +
              "events_admin/ajaxgetmoderationspecificpartnerevents";
            let d = 0;
            this.m_listEvents?.length &&
              (this.m_listEvents.forEach(
                (f) =>
                  (d = Math.max(
                    d,
                    Math.floor(Date.parse(f.last_modified_date) / 1e3),
                  )),
              ),
              this.m_listEvents.filter(
                (f) => Math.floor(Date.parse(f.last_modified_date) / 1e3) == d,
              ).length >= r && d++);
            const c = { start_time: d, count: r };
            try {
              const u = await k().get(o, {
                params: c,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
              if (n && n.token.reason) return [];
              if (u && u.data) {
                let f = new Array();
                return (
                  (0, W.h5)(() => {
                    u.data.docs.forEach((D) => {
                      this.m_mapEventGIDToSolrData.has(D.unique_id) ||
                        (f.push(D),
                        this.m_mapEventGIDToSolrData.set(D.unique_id, D),
                        this.m_listEvents.push(D));
                    });
                  }),
                  f
                );
              }
            } catch (u) {
              const f = (0, V.H)(u);
              console.error(
                "LoadPartnerEventForModerationIncremental failed:" +
                  f.strErrorMsg,
                f,
              );
            }
            return [];
          }
          async UpdateTagsOnPartnerEvent(n, r, o, d, c, u) {
            const f = j.TS.STORE_BASE_URL + "events_admin/ajaxupdatetags";
            let D = d.join(",");
            u && (d.length > 0 && (D += ","), (D += u.ToModString()));
            const F = new FormData();
            return (
              F.append("sessionid", (0, j.KC)()),
              F.append("clan_accountid", "" + r.GetAccountID()),
              F.append("gid_announcement", o),
              F.append("add_tags", D),
              F.append("remove_tags", c.join(",")),
              (
                await k().post(f, F, {
                  withCredentials: !0,
                  cancelToken: n.token,
                })
              ).data.tags
            );
          }
          async UpdatePartnerEventType(n, r, o, d) {
            const c = j.TS.STORE_BASE_URL + "events_admin/ajaxupdateeventtype",
              u = new FormData();
            u.append("sessionid", (0, j.KC)()),
              u.append("clan_accountid", "" + r.GetAccountID()),
              u.append("gid_event", o),
              u.append("new_event_type", "" + d),
              await k().post(c, u, {
                withCredentials: !0,
                cancelToken: n.token,
              });
          }
        };
        nt([W.sH], Xe.prototype, "m_mapEventGIDToSolrData", 2),
          nt([W.sH], Xe.prototype, "m_listEvents", 2),
          nt([W.XI], Xe.prototype, "ClearAllSolrEvents", 1);
        let _e = Xe;
        var Se = i(10142),
          Ct = i(91424),
          vt = i(92264),
          Ee = i(61311),
          Rt = i(35098);
        function rt(a) {
          const { accountID: n, locToken: r } = a,
            o = x.useMemo(() => H.b.InitFromAccountID(n), [n]),
            { data: d } = (0, Rt.js)(n);
          let c =
            "https://steamsupport.valvesoftware.com/account/overview/" +
            o.ConvertTo64BitString();
          return (0, e.jsx)("div", {
            children: (0, m.PP)(
              r,
              (0, e.jsx)("a", {
                href: c,
                target: j.TS.IN_CLIENT ? void 0 : "_blank",
                children: d
                  ? (0, e.jsx)(x.Fragment, { children: d.m_strPlayerName })
                  : (0, e.jsx)(x.Fragment, {
                      children: (0, e.jsx)("span", { children: n }),
                    }),
              }),
            ),
          });
        }
        function Lt(a) {
          const { modAction: n } = a,
            r =
              (0, m.TW)(n.m_rtWhen) +
              " @ " +
              (0, vt.KC)(n.m_rtWhen, { bForce24HourClock: !1 }),
            o = (0, e.jsx)(rt, {
              locToken: "#EventModTile_Moderator",
              accountID: n.m_moderator,
            });
          switch (n.m_action) {
            case je.k_ModReviewed:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, m.PP)(
                  "#EventModTile_Action_Reviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case je.k_ModUnreviewed:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, m.PP)(
                  "#EventModTile_Action_UnReviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case je.k_ChangeEventType:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, m.PP)(
                  "#EventModTile_Action_NewEventType",
                  (0, e.jsx)("span", { children: r }),
                  o,
                  (0, Ke.rG)(n.m_newEventType),
                ),
              });
            case je.k_UpdateSeasonTags:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, m.PP)(
                  "#EventModTile_Action_SeasonTagUpdate",
                  (0, e.jsx)("span", { children: r }),
                  o,
                  n.m_newTagAdded,
                ),
              });
            case je.k_ModReReviewed:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, m.PP)(
                  "#EventModTile_Action_ReReviewed",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case je.k_ModRemovedFromSteamChina:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, m.PP)(
                  "#EventModTile_Action_RemoveFromSC",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case je.k_ModFlagAdultOnlyContent:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, m.PP)(
                  "#EventModTile_Action_FlagAdultContent",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            case je.k_ModRemoveAdultOnlyContent:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: (0, m.PP)(
                  "#EventModTile_Action_RemoveAdultContent",
                  (0, e.jsx)("span", { children: r }),
                  o,
                ),
              });
            default:
              return (0, e.jsx)("div", {
                className: Ee.ModeratorAuditActionCtn,
                children: n.ToModString(),
              });
          }
        }
        function Ot(a) {
          const [n, r] = x.useState(!0),
            o = 3,
            d = (F) => {
              const { eventModel: ie } = a;
              return F.map((ne) => {
                const ye = new Ge();
                return (
                  ye.FromString(ne),
                  (0, e.jsx)(Lt, { modAction: ye }, ie.GID + ne)
                );
              });
            },
            { eventModel: c } = a;
          let u = c
            .GetAllTags()
            .filter((F) => Ge.IsAuditAction(F))
            .reverse();
          const f = u.length,
            D = u.length > o && n;
          return u.length == 0
            ? null
            : (D && (u = u.splice(0, o)),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h4", {
                    children: (0, m.we)("#EventModTile_Action_Title"),
                  }),
                  d(u),
                  D &&
                    (0, e.jsx)("a", {
                      onClick: () => r(!1),
                      className: Ee.ExpandModActions,
                      children: (0, m.we)("#EventModTile_Action_More", f - o),
                    }),
                  !D &&
                    f > o &&
                    (0, e.jsx)("a", {
                      onClick: () => r(!0),
                      className: Ee.ExpandModActions,
                      children: (0, m.we)("#EventModTile_Action_Hide"),
                    }),
                ],
              }));
        }
        var Gt = i(91376),
          Ft = i(95695),
          ke = i.n(Ft),
          pt = i(95414),
          Ut = i(13465),
          st = i(53107),
          $e = i(53113),
          C = i(961),
          ft = i(7582),
          Pt = i(29522),
          zt = i(88812),
          Ht = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          h = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? v(n, r) : n, c = a.length - 1, u;
              c >= 0;
              c--
            )
              (u = a[c]) && (d = (o ? u(n, r, d) : u(d)) || d);
            return o && d && Ht(n, r, d), d;
          };
        const b = i(87937),
          R = 500,
          G = 50,
          q = {
            bExhaustedEventList: !1,
            bInfiniteScrollLoading: !0,
            nLastFetchCompletedMS: 0,
          };
        let te = class extends x.Component {
          m_cancelSignal = k().CancelToken.source();
          m_refScroll = x.createRef();
          m_IntervalTimer = void 0;
          state = {
            bInfiniteScrollLoading: !1,
            bExhaustedEventList: !1,
            nLastFetchCompletedMS: 0,
          };
          m_nPage = 0;
          componentDidMount() {
            this.setState(
              { bInfiniteScrollLoading: !0 },
              this.LoadMoreModerationEvents,
            ),
              window.addEventListener("scroll", this.OnScroll, !0),
              He.Get().Init(this.props.history.location.search);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventModerationLanding component unmounted",
            ),
              window.removeEventListener("scroll", this.OnScroll),
              this.ClearTimer();
          }
          HandleUpdateQueryParameter() {
            const a = He.Get();
            if (a.bUseCustomQuery) {
              const {
                selectedTags: n,
                excludedTags: r,
                filterEventTypes: o,
                filterDate: d,
                bOrderByVisibilityStartTime: c,
              } = a;
              if (n || r || o || d || c) {
                const u = new URLSearchParams();
                n?.forEach((f) => u.append("selectedTags", f.value)),
                  r?.forEach((f) => u.append("excludedTags", f.value)),
                  o?.forEach((f) => u.append("eventtype", "" + f.value)),
                  d?.unix() > 0 && u.append("filterDate", "" + d.unix()),
                  c && u.append("orderByVisibility", "1"),
                  this.props.history.push(`?${u.toString()}`);
              } else this.props.history.push("?");
            }
          }
          ClearTimer() {
            this.m_IntervalTimer &&
              (window.clearInterval(this.m_IntervalTimer),
              (this.m_IntervalTimer = void 0));
          }
          HandleError(a) {
            let n = (0, V.H)(a);
            console.error("EventModerationLanding error: " + n.strErrorMsg, n),
              this.setState({
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !0,
                nLastFetchCompletedMS: Date.now(),
              });
          }
          async LoadMorePublicEventWithDelay() {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMoreModerationEvents,
              R,
            );
          }
          LoadMoreModerationEvents() {
            if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
              let a;
              const n = He.Get();
              if (n.bUseCustomQuery) {
                let r = n.filterEventTypes
                    ? n.filterEventTypes.map((c) => c.value)
                    : void 0,
                  o = n.selectedTags
                    ? n.selectedTags.map((c) => c.value)
                    : void 0,
                  d = n.excludedTags
                    ? n.excludedTags.map((c) => c.value)
                    : void 0;
                a = E.Get().LoadPartnerEventForQueryIncremental(
                  this.m_cancelSignal,
                  this.m_nPage,
                  n.eventsToLoadPerPaging,
                  [this.props.appid],
                  o,
                  d,
                  n.filterDate,
                  r,
                  n.bOrderByVisibilityStartTime,
                );
              } else
                a = _e
                  .Get()
                  .LoadPartnerEventForModerationIncremental(
                    this.m_cancelSignal,
                    n.eventsToLoadPerPaging,
                  );
              a.then((r) => {
                (this.m_nPage += n.eventsToLoadPerPaging),
                  this.setState({
                    bInfiniteScrollLoading: !1,
                    bExhaustedEventList: r.length == 0,
                    nLastFetchCompletedMS: Date.now(),
                  });
              }).catch((r) => this.HandleError(r));
            }
          }
          UpdateQueryParametersAndLoadMoreEvents() {
            this.HandleUpdateQueryParameter(), this.LoadMoreModerationEvents();
          }
          RenderTiles() {
            let a = new Array();
            return (
              (He.Get().bUseCustomQuery
                ? E.Get().GetAllSolrEvents()
                : _e.Get().GetAllSolrEvents()
              ).forEach((o) => {
                a.push((0, e.jsx)(De, { solrData: o }, o.unique_id));
              }),
              a
            );
          }
          OnScroll() {
            if (!this.m_refScroll || !this.m_refScroll.current) return;
            let a = this.m_refScroll.current;
            a &&
              (this.state.bExhaustedEventList ||
                this.state.bInfiniteScrollLoading ||
                (a.getBoundingClientRect().bottom <= window.innerHeight + G &&
                  (this.state.nLastFetchCompletedMS + R < Date.now()
                    ? this.setState(
                        { bInfiniteScrollLoading: !0 },
                        this.LoadMorePublicEventWithDelay,
                      )
                    : this.setState(
                        { bInfiniteScrollLoading: !0 },
                        this.LoadMoreModerationEvents,
                      ))));
          }
          RefetchAllEventTiles() {
            (this.m_nPage = 0),
              _e.Get().ClearAllSolrEvents(),
              E.Get().ClearAllSolrEvents(),
              this.setState(
                { ...q },
                this.UpdateQueryParametersAndLoadMoreEvents,
              );
          }
          render() {
            let a = this.RenderTiles();
            const n = He.Get();
            return (0, e.jsxs)("div", {
              className: C.ModerationContainer,
              ref: this.m_refScroll,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("h2", {
                      children: (0, m.we)("#EventModeration_Title"),
                    }),
                    (0, e.jsx)(Q.tH, {
                      children: (0, e.jsxs)("div", {
                        className: (0, g.A)(ke().FlexRowContainer),
                        children: [
                          (0, e.jsx)(Be, {
                            fnRequireRefetchEvents: this.RefetchAllEventTiles,
                          }),
                          !!n.bUseCustomQuery &&
                            (0, e.jsx)(pe, {
                              fnRequireRefetchEvents: this.RefetchAllEventTiles,
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, e.jsx)(Q.tH, { children: a }),
                this.state.bInfiniteScrollLoading &&
                  (0, e.jsx)(I.t, {
                    position: "center",
                    size: "medium",
                    string: (0, m.we)("#Loading"),
                  }),
              ],
            });
          }
        };
        h([se.oI], te.prototype, "HandleError", 1),
          h([se.oI], te.prototype, "LoadMorePublicEventWithDelay", 1),
          h([se.oI], te.prototype, "LoadMoreModerationEvents", 1),
          h([se.oI], te.prototype, "UpdateQueryParametersAndLoadMoreEvents", 1),
          h([se.oI], te.prototype, "OnScroll", 1),
          h([se.oI], te.prototype, "RefetchAllEventTiles", 1),
          (te = h([U.PA], te));
        const Me = (0, z.y)(te),
          Be = (0, U.PA)((a) => {
            const n = He.Get(),
              { fnRequireRefetchEvents: r } = a;
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: C.FilterContainer,
                  children: (0, e.jsx)(T.he, {
                    toolTipContent: (0, m.we)(
                      "#EventModeration_ShowCustomFilter_ttip",
                    ),
                    children: (0, e.jsx)(O.Yh, {
                      label: (0, m.we)("#EventModeration_ShowCustomFilter"),
                      checked: n.bUseCustomQuery,
                      onChange: (o) => {
                        (n.bUseCustomQuery = o), r();
                      },
                    }),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: C.FilterContainer,
                  children: [
                    (0, e.jsx)("label", {
                      htmlFor: "EventPerLoad",
                      children: (0, m.we)("#EventModeration_PerPageLoad"),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, e.jsx)("input", {
                        type: "number",
                        id: "EventPerLoad",
                        min: "10",
                        max: "200",
                        value: n.eventsToLoadPerPaging,
                        onChange: (o) => {
                          let d = Number.parseInt(o.currentTarget.value);
                          d &&
                            d > 0 &&
                            d != n.eventsToLoadPerPaging &&
                            (n.eventsToLoadPerPaging = d);
                        },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
          pe = (0, U.PA)((a) => {
            const n = He.Get(),
              { fnRequireRefetchEvents: r } = a,
              o = X.Zi8.map((f) => ({ value: f, label: (0, Ke.rG)(f) })).sort(
                (f, D) => f.label.localeCompare(D.label),
              ),
              d = Fe.FZ.map((f) => ({ value: f, label: f })).sort((f, D) =>
                f.label.localeCompare(D.label),
              ),
              c = { option: (f) => ({ ...f, color: "#444444" }) },
              u = (f) => {
                let D = new Date();
                return (
                  f.unix() <
                  b
                    .unix(D.getTime() / 1e3 + 3600 * 24)
                    .hour(0)
                    .seconds(0)
                    .minute(0)
                    .unix()
                );
              };
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsxs)("div", {
                  className: C.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, m.we)("#EventModeration_FilterByTag"),
                    }),
                    (0, e.jsx)(Le.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (f) => {
                        (n.selectedTags = f), r();
                      },
                      value: n.selectedTags,
                      options: d,
                      styles: c,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: C.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, m.we)(
                        "#EventModeration_FilterExcludeByTag",
                      ),
                    }),
                    (0, e.jsx)(Le.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (f) => {
                        (n.excludedTags = f), r();
                      },
                      value: n.excludedTags,
                      options: d,
                      styles: c,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: C.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, m.we)("#EventModeration_FilterToType"),
                    }),
                    (0, e.jsx)(Le.Ay, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (f) => {
                        (n.filterEventTypes = f), r();
                      },
                      value: n.filterEventTypes,
                      options: o,
                      styles: c,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: C.FilterContainer,
                  children: [
                    (0, e.jsx)("span", {
                      children: (0, m.we)("#EventModeration_FilterToDate"),
                    }),
                    (0, e.jsx)(Re(), {
                      timeFormat: !1,
                      onChange: (f) => {
                        if (typeof f == "string") {
                          let D = b(f, "M/D/YYYY", !0);
                          if (!D.isValid()) {
                            n.filterDateAsString = f;
                            return;
                          }
                          f = D;
                        }
                        n.filterDate != f &&
                          ((n.filterDateAsString = void 0),
                          (n.filterDate = f),
                          r());
                      },
                      value: n.filterDate,
                      isValidDate: u,
                      inputProps: {
                        placeholder: (0, m.we)("#EventModeration_PickDatee"),
                        className: C.TimeWidth,
                      },
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: C.FilterContainer,
                  children: [
                    (0, e.jsx)("input", {
                      type: "checkbox",
                      id: "VisibilityStart",
                      checked: n.bOrderByVisibilityStartTime,
                      onChange: (f) => {
                        (n.bOrderByVisibilityStartTime =
                          f.currentTarget.checked),
                          r();
                      },
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "VisibilityStart",
                      children: (0, m.we)(
                        "#EventModeration_OrderByFirstVisible",
                      ),
                    }),
                  ],
                }),
              ],
            });
          }),
          Ce = (0, U.PA)((a) => {
            const { onClick: n, event: r, bSaving: o } = a;
            let d = (0, m.we)("#EventModTile_Moderate_ClearReviewed"),
              c = C.EventModerateClearReview,
              u = !1;
            return (
              (0, Fe.Xx)(r) ||
                ((d = (0, m.we)("#EventModTile_Moderate_MarkReviewed")),
                (c = C.EventModerateMarkReview),
                (u = !0)),
              o &&
                ((d = (0, m.we)("#EventModTile_Moderate_Saving")),
                (c = C.EventModerateSaving)),
              (0, e.jsxs)("button", {
                className: (0, g.A)(ke().Button, C.Button, c),
                onClick: () => n(u),
                disabled: o,
                children: [o && (0, e.jsx)(I.t, { size: "small" }), d],
              })
            );
          }),
          Pe = (0, U.PA)((a) => {
            const { onClick: n, event: r, bSaving: o } = a,
              d = r.BHasTag("adult_only_content");
            let c = (0, m.we)(
              d
                ? "#EventModTile_Moderate_RemoveAdultContent"
                : "#EventModTile_Moderate_FlagAdultContent",
            );
            return (
              o && (c = (0, m.we)("#EventModTile_Moderate_Saving")),
              (0, e.jsxs)("button", {
                className: (0, g.A)(ke().Button, C.Button),
                onClick: () => n(!d),
                disabled: o,
                children: [o && (0, e.jsx)(I.t, { size: "small" }), c],
              })
            );
          });
        function Ve(a) {
          const { onClick: n, event: r, bSaving: o } = a,
            d = (0, wt.q3)(() => r.BHasTag("halloween"));
          let c = (0, m.we)(
            d
              ? "#EventModTile_Moderate_RemoveHalloweenFlag"
              : "#EventModTile_Moderate_FlagHalloween",
          );
          o && (c = (0, m.we)("#EventModTile_Moderate_Saving"));
          const u = ft.HD.GetTimeNowWithOverrideAsDate();
          return u.getMonth() >= 8 && u.getMonth() <= 10
            ? (0, e.jsxs)("button", {
                className: (0, g.A)(ke().Button, C.Button),
                onClick: () => n(!d),
                disabled: o,
                children: [o && (0, e.jsx)(I.t, { size: "small" }), c],
              })
            : null;
        }
        let De = class extends x.Component {
          state = {
            bLoadingEvent: !ae.O3.BHasClanEventModel(
              this.props.solrData.unique_id,
            ),
            bShowAsModal: !1,
            bSavingModeration: !1,
          };
          m_cancelSignal = k().CancelToken.source();
          componentDidMount() {
            const { solrData: a } = this.props,
              n = a.unique_id;
            ae.O3.BHasClanEventModel(n) ||
              ae.O3.LoadHiddenPartnerEvent(new H.b(a.clan_steamid), n)
                .then(() => this.setState({ bLoadingEvent: !1 }))
                .catch((r) => {
                  const o = (0, V.H)(r);
                  console.error(
                    "EventModerationTile: Event Load: " + o.strErrorMsg,
                    o,
                  ),
                    this.setState({ bLoadingEvent: !1 });
                });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventModerationTile component unmounted",
            );
          }
          ShowModalEvent(a) {
            const { solrData: n } = this.props,
              r = n.unique_id;
            !this.state.bLoadingEvent &&
              ae.O3.BHasClanEventModel(r) &&
              this.setState({ bShowAsModal: !0 }),
              a.preventDefault(),
              a.stopPropagation();
          }
          HideModalEvent() {
            this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
          }
          SetAdultContentState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = ae.O3.GetClanEventModel(r);
            if (!o) return;
            const d = o.BHasTag("adult_only_content");
            if (a === d) return;
            const c = new Array(),
              u = new Array();
            let f = new Ge().SetAdultOnlyContentAction(a);
            a ? c.push("adult_only_content") : u.push("adult_only_content"),
              this.UpdateTagsOnEvent(r, c, u, f);
          }
          SetHalloweenEventState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = ae.O3.GetClanEventModel(r);
            if (!o) return;
            const d = o.BHasTag("halloween");
            if (a === d) return;
            const c = new Array(),
              u = new Array();
            let f = new Ge().SetHalloweenEventTypeAction(a);
            a ? c.push("halloween") : u.push("halloween"),
              this.UpdateTagsOnEvent(r, c, u, f);
          }
          SetModeratedState(a) {
            if (this.state.bSavingModeration) return;
            const { solrData: n } = this.props,
              r = n.unique_id,
              o = ae.O3.GetClanEventModel(r);
            if (!o) return;
            const d = (0, Fe.Xx)(o);
            if (a === d) return;
            const c = new Array(),
              u = new Array();
            let f = new Ge().SetReviewAction(a);
            a
              ? (c.push("mod_reviewed"),
                u.push("mod_require_rereview"),
                o.BHasTag("mod_require_rereview") && f.SetReReviewAction(a))
              : c.push("mod_require_rereview"),
              this.UpdateTagsOnEvent(r, c, u, f);
          }
          UpdateTagsOnEvent(a, n, r, o) {
            const d = async () => {
              let c = ae.O3.GetClanEventModel(a);
              try {
                let u = await _e
                  .Get()
                  .UpdateTagsOnPartnerEvent(
                    this.m_cancelSignal,
                    c.clanSteamID,
                    c.AnnouncementGID,
                    n,
                    r,
                    o,
                  );
                c.vecTags = u;
              } catch (u) {
                let f = (0, V.H)(u);
                console.error("UpdateTagsOnPartnerEvent " + f.strErrorMsg, f);
              }
              this.setState({ bSavingModeration: !1 });
            };
            this.state.bSavingModeration ||
              this.setState({ bSavingModeration: !0 }, d);
          }
          OnChangeCategory(a) {
            const { solrData: n } = this.props;
            let r = ae.O3.GetClanEventModel(n.unique_id);
            (0, J.pg)((0, e.jsx)(it, { eventModel: r }), (0, w.uX)(a));
          }
          OnUpdateSeasonalTag(a) {
            const { solrData: n } = this.props;
            let r = ae.O3.GetClanEventModel(n.unique_id);
            (0, J.pg)((0, e.jsx)(ot, { eventModel: r }), (0, w.uX)(a));
          }
          render() {
            const { solrData: a } = this.props,
              n = a.unique_id,
              r = Number(a.appid);
            let o,
              d = (0, X.sfN)(j.TS.LANGUAGE),
              c = ae.O3.GetClanEventModel(n),
              u = null;
            c
              ? (this.state.bShowAsModal &&
                  (u = (0, e.jsx)(p.of, {
                    className: C.StoreHeaderAdjust,
                    children: (0, e.jsx)("div", {
                      children: (0, e.jsx)(Ct.H, {
                        event: c,
                        fnClose: this.HideModalEvent,
                      }),
                    }),
                  })),
                (o = (0, e.jsx)(Nt, { eventModel: c, lang: d })))
              : (o = (0, m.we)("#Loading"));
            const f = a.last_modified_date
                ? Date.parse(a.last_modified_date) / 1e3
                : 0,
              D = c ? c.type : Number(a.event_type),
              F = new H.b(a.clan_steamid),
              ie = r ? `app/${r}` : `group/${F.GetAccountID()}`,
              ne = `${j.TS.STORE_BASE_URL}news/${ie}/view/${a.announcement_gid}`,
              ye = !!(c && c.BHasTag("adult_only_content")),
              de = !!(c && c.BHasTag("halloween"));
            return (0, e.jsxs)(Q.tH, {
              children: [
                u,
                (0, e.jsxs)("div", {
                  className: (0, g.A)({ [C.Tile]: !0, [C.HalloweenEvent]: de }),
                  children: [
                    (0, e.jsx)("a", {
                      href: ne,
                      className: C.TileCapsule,
                      onClick: this.ShowModalEvent,
                      children: o,
                    }),
                    (0, e.jsxs)("div", {
                      className: C.TileDetails,
                      children: [
                        (0, e.jsxs)("div", {
                          className: C.DetailsLeft,
                          children: [
                            (0, e.jsx)("a", {
                              className: C.EventTitle,
                              href: ne,
                              onClick: this.ShowModalEvent,
                              children: a.event_name,
                            }),
                            (0, e.jsx)("div", {
                              className: (0, g.A)(
                                C.TileEventType,
                                D == X.DRF ? C.TileEventOtherType : "",
                              ),
                              children: c
                                ? c.GetCategoryAsString()
                                : a.event_type,
                            }),
                            ye &&
                              (0, e.jsx)("div", {
                                className: C.HasAdultContent,
                                children: (0, m.we)(
                                  "#EventModTile_HasAdultContent",
                                ),
                              }),
                            this.state.bLoadingEvent &&
                              (0, e.jsx)(I.t, {
                                size: "small",
                                string: (0, m.we)("#Loading"),
                              }),
                            (0, e.jsx)("div", {
                              className: C.ChannelInfo,
                              children: (0, e.jsx)(Jt, {
                                appid: r,
                                clanSteamID: new H.b(a.clan_steamid),
                              }),
                            }),
                          ],
                        }),
                        (0, e.jsx)("div", {
                          className: C.DetailsMiddle,
                          children:
                            c &&
                            (0, e.jsxs)(x.Fragment, {
                              children: [
                                (0, e.jsx)(Ce, {
                                  onClick: this.SetModeratedState,
                                  bSaving: this.state.bSavingModeration,
                                  event: c,
                                }),
                                (0, e.jsx)("button", {
                                  className: (0, g.A)(ke().Button, C.Button),
                                  onClick: this.OnChangeCategory,
                                  children: (0, m.we)(
                                    "#EventModTile_ChangeEventType",
                                  ),
                                }),
                                (0, e.jsx)(Pe, {
                                  onClick: this.SetAdultContentState,
                                  bSaving: this.state.bSavingModeration,
                                  event: c,
                                }),
                                (0, e.jsx)(Ve, {
                                  onClick: this.SetHalloweenEventState,
                                  bSaving: this.state.bSavingModeration,
                                  event: c,
                                }),
                                !!c.BHasTag("halloween2019candidate") &&
                                  (0, e.jsx)("button", {
                                    className: (0, g.A)(ke().Button),
                                    onClick: this.OnUpdateSeasonalTag,
                                    children: (0, m.we)(
                                      "#EventModTile_SeasonalTag",
                                    ),
                                  }),
                                (0, e.jsx)(Ot, { eventModel: c }),
                              ],
                            }),
                        }),
                        (0, e.jsxs)("div", {
                          className: C.DetailsRight,
                          children: [
                            (0, e.jsxs)("div", {
                              className: C.EventTimingBlock,
                              children: [
                                !!f &&
                                  (0, e.jsx)("div", {
                                    className: C.LastUpdateTime,
                                    children: (0, m.we)(
                                      "#EventModTile_LastModified",
                                      (0, m.TW)(f) +
                                        "@" +
                                        (0, vt.KC)(f, {
                                          bForce24HourClock: !1,
                                        }),
                                    ),
                                  }),
                                c &&
                                  (0, e.jsx)(Gt.j, {
                                    event: c,
                                    stylesmodule: C,
                                    nOverrideEndTime:
                                      c.GetEndTimeAndDateUnixSeconds(),
                                    nOverrideStartTime:
                                      c.GetStartTimeAndDateUnixSeconds(),
                                  }),
                              ],
                            }),
                            c &&
                              (0, e.jsx)(_t, {
                                event: c,
                                hidden: a.hidden,
                                published: a.published,
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
        };
        h([se.oI], De.prototype, "ShowModalEvent", 1),
          h([se.oI], De.prototype, "HideModalEvent", 1),
          h([se.oI], De.prototype, "SetAdultContentState", 1),
          h([se.oI], De.prototype, "SetHalloweenEventState", 1),
          h([se.oI], De.prototype, "SetModeratedState", 1),
          h([se.oI], De.prototype, "OnChangeCategory", 1),
          h([se.oI], De.prototype, "OnUpdateSeasonalTag", 1),
          (De = h([U.PA], De));
        function Nt(a) {
          const { eventModel: n, lang: r } = a,
            o = (0, zt.WC)(n, "capsule", r, Z.wI.capsule_main),
            d = n.BImageNeedScreenshotFallback("capsule", r);
          return o && o.length > 0
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(Ut.c, { rgSources: o }),
                  d &&
                    (0, e.jsx)("div", {
                      className: C.NoCapsuleFallback,
                      children: (0, m.we)("#EventModTile_FallbackImageText"),
                    }),
                ],
              })
            : (0, e.jsx)("div", {
                className: C.NoCapsule,
                children: (0, m.we)("#EventModTile_NoCapsule"),
              });
        }
        let Qt = class extends x.Component {
          state = { bDownloadingImages: !1, nLocLanguages: 0 };
          m_cancelSignal = k().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "ChangeEventTypeDialog component unmounted",
            );
          }
          CountLanguages(a) {
            let n = 0;
            if (a && a.length > 0)
              for (let r = 0; r < a.length && r < X.bP9; ++r)
                a[r] && a[r].length > 0 && (n += 1);
            return n;
          }
          componentDidMount() {
            const { event: a } = this.props;
            ae.O3.LoadClanEventLocalizationFromAnnouncementGID(
              a.clanSteamID,
              a.AnnouncementGID,
            )
              .then((n) => {
                this.m_cancelSignal.token.reason ||
                  this.setState({ nLocLanguages: n.length });
              })
              .catch((n) => {
                let r = (0, V.H)(n);
                console.error(
                  "EventInspection.LoadLoc : error " + r.strErrorMsg,
                  r,
                ),
                  this.m_cancelSignal.token.reason ||
                    this.setState({ nLocLanguages: -1 });
              });
          }
          render() {
            const { event: a } = this.props;
            let n = this.CountLanguages(a.jsondata.localized_title_image),
              r = this.CountLanguages(a.jsondata.localized_capsule_image),
              o = this.CountLanguages(a.jsondata.localized_spotlight_image),
              d = Math.max(
                this.CountLanguages(a.jsondata.localized_broadcast_left_image),
                this.CountLanguages(a.jsondata.localized_broadcast_right_image),
              ),
              c = n + r + o + d,
              u = this.CountLanguages(a.jsondata.localized_summary),
              f = this.CountLanguages(a.jsondata.localized_subtitle);
            return (0, e.jsxs)("div", {
              className: C.AnalysisCtn,
              children: [
                (0, e.jsx)("div", {
                  className: C.TileTitle,
                  children: (0, m.we)("#EventModTile_Analysis"),
                }),
                (0, e.jsx)("div", {
                  children: (0, m.we)(
                    "#EventModTile_Stats_Comments",
                    a.nCommentCount,
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, m.we)("#EventModTile_Stats_VoteUp", a.nVotesUp),
                }),
                (0, e.jsx)("div", {
                  children: (0, m.we)(
                    "#EventModTile_Stats_VoteDown",
                    a.nVotesDown,
                  ),
                }),
                !!n &&
                  (0, e.jsxs)("div", {
                    className: C.ArtHeader,
                    children: [
                      (0, m.we)("#EventModTile_ImageAnalysis_Header", n),
                      " ",
                    ],
                  }),
                !!r &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, m.we)("#EventModTile_ImageAnalysis_Capsule", r),
                      " ",
                    ],
                  }),
                !!o &&
                  (0, e.jsxs)("div", {
                    className: C.ArtSpotlight,
                    children: [
                      (0, m.we)("#EventModTile_ImageAnalysis_Spotlight", o),
                      " ",
                    ],
                  }),
                !!d &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, m.we)("#EventModTile_ImageAnalysis_Broadcast", d),
                      " ",
                    ],
                  }),
                c == 0 &&
                  (0, e.jsxs)("div", {
                    className: C.AnalysisMissing,
                    children: [
                      (0, m.we)("#EventModTile_ImageAnalysis_None"),
                      " ",
                    ],
                  }),
                this.state.nLocLanguages == 0 &&
                  (0, e.jsx)(I.t, {
                    size: "small",
                    string: (0, m.we)("#EventModTile_LoadingLocs"),
                  }),
                this.state.nLocLanguages > 0 &&
                  (0, e.jsx)("div", {
                    children: (0, m.we)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages,
                    ),
                  }),
                !!u &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, m.we)("#EventModTile_Languages_Summary", u),
                      " ",
                    ],
                  }),
                !!f &&
                  (0, e.jsxs)("div", {
                    children: [
                      (0, m.we)("#EventModTile_Languages_Subtitle", f),
                      " ",
                    ],
                  }),
              ],
            });
          }
        };
        Qt = h([U.PA], Qt);
        const Jt = (0, U.PA)((a) => {
          const { appid: n, clanSteamID: r } = a,
            o = (0, Pt.$5)(n),
            [d, c] = (0, x.useState)(!Se.A.Get().BHasApp(a.appid)),
            u = x.useRef(k().CancelToken.source());
          if (
            ((0, x.useEffect)(
              () => () =>
                u.current.cancel(
                  "EventModerationChannelInfo component unmounted",
                ),
              [],
            ),
            (0, x.useEffect)(() => {
              const { appid: f, clanSteamID: D } = a;
              ((f && !Se.A.Get().BHasApp(f)) ||
                (D && !B.ac.BHasClanInfoLoaded(D))) &&
                (async () => {
                  try {
                    await Promise.all([
                      Se.A.Get().QueueAppRequest(f, {
                        include_assets: !0,
                        include_release: !0,
                        include_screenshots: !0,
                      }),
                      D ? B.ac.LoadClanInfoForClanSteamID(D) : void 0,
                    ]);
                  } catch (ie) {
                    const ne = (0, V.H)(ie);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + ne.strErrorMsg,
                      ne,
                    );
                  } finally {
                    u.current.token.reason || c(!1);
                  }
                })();
            }, [a]),
            d)
          )
            return (0, e.jsx)(I.t, {
              size: "small",
              string: (0, m.we)("#EventModTile_AppInfoLoading"),
            });
          if (n) {
            const f = Se.A.Get().GetApp(n);
            return f
              ? (0, e.jsx)("div", {
                  className: C.TileAppInfo,
                  children: (0, e.jsxs)("div", {
                    className: C.TileAppInfoTitle,
                    children: [
                      (0, e.jsx)(pt.j, {
                        id: o,
                        children: (0, e.jsx)(st.uU, {
                          href: (0, $e.k2)(f.GetStorePageURL()),
                          children: (0, e.jsx)("img", {
                            className: C.TileAppInfoImage,
                            src: f.GetAssets().GetMainCapsuleURL(),
                          }),
                        }),
                      }),
                      (0, e.jsx)(pt.j, {
                        id: o,
                        children: (0, e.jsx)(st.uU, {
                          href: (0, $e.k2)(f.GetStorePageURL()),
                          children: (0, e.jsx)("div", {
                            children: f.GetName(),
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              : null;
          } else if (r) {
            const f = r.GetAccountID(),
              D = B.ac.GetClanInfoByClanAccountID(f);
            if (D && D.is_curator)
              return (0, e.jsx)("div", {
                className: C.TileAppInfo,
                children: (0, e.jsx)("div", {
                  className: C.TileAppInfoTitle,
                  children: (0, e.jsxs)(st.uU, {
                    href: (0, $e.k2)(
                      j.TS.STORE_BASE_URL + "/curator/" + f + "/",
                    ),
                    children: [
                      (0, e.jsx)("img", {
                        className: C.TileAppInfoImage,
                        src: D.avatar_full_url,
                      }),
                      (0, e.jsx)("div", {
                        children: (0, m.we)(
                          "#EventModTile_CuratorName",
                          D.group_name,
                        ),
                      }),
                    ],
                  }),
                }),
              });
          }
          return null;
        });
        let _t = class extends x.Component {
          render() {
            const { event: a, hidden: n, published: r } = this.props,
              o = n
                ? r
                  ? (0, m.we)("#EVentModTile_State_Staged")
                  : (0, m.we)("#EVentModTile_State_Draft")
                : (0, m.we)("#EVentModTile_State_Published"),
              d = (0, Fe.iy)(a),
              c = (0, Fe.A4)(a),
              u = (0, Fe.ZA)(a);
            let f =
                u && !a.BHasTag("hide_store") && !a.BHasTag("mod_hide_store"),
              D =
                d &&
                !a.BHasTag("hide_library_overview") &&
                !a.BHasTag("mod_hide_library_overview"),
              F =
                c &&
                !a.BHasTag("hide_library_detail") &&
                !a.BHasTag("mod_hide_library_detail");
            return (0, e.jsxs)("div", {
              className: C.VisibiltyCtn,
              children: [
                (0, e.jsx)("div", { className: C.TileTitle, children: o }),
                (0, e.jsx)("div", {
                  children: (0, m.we)(
                    "#EventModTile_Store_Visibility",
                    f
                      ? (0, m.we)("#WriteReview_Dialog_Yes")
                      : (0, m.we)("#WriteReview_Dialog_No"),
                    f
                      ? ""
                      : u
                        ? (0, m.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_store")
                          ? (0, m.we)("#EventModTime_Hidden_OptOut")
                          : (0, m.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, m.we)(
                    "#EventModTile_LibraryHome_Visibility",
                    D
                      ? (0, m.we)("#WriteReview_Dialog_Yes")
                      : (0, m.we)("#WriteReview_Dialog_No"),
                    D
                      ? ""
                      : u
                        ? (0, m.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_library_overview")
                          ? (0, m.we)("#EventModTime_Hidden_OptOut")
                          : (0, m.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                (0, e.jsx)("div", {
                  children: (0, m.we)(
                    "#EventModTile_LibraryDetail_Visibility",
                    F
                      ? (0, m.we)("#WriteReview_Dialog_Yes")
                      : (0, m.we)("#WriteReview_Dialog_No"),
                    F
                      ? ""
                      : u
                        ? (0, m.we)(
                            "#EventModTime_Hidden_EventType",
                            a.GetEventTypeAsString(),
                          )
                        : a.BHasTag("hide_library_detail")
                          ? (0, m.we)("#EventModTime_Hidden_OptOut")
                          : (0, m.we)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                a.BHasTag("enable_steam_china") &&
                  (0, e.jsx)("div", {
                    children: (0, m.we)("#EventModTile_SteamChina_Visibility"),
                  }),
                a.BHasTag("disable_steam_global") &&
                  (0, e.jsx)("div", {
                    children: (0, m.we)("#EventModTile_SteamGlobal_Hidden"),
                  }),
              ],
            });
          }
        };
        _t = h([U.PA], _t);
        let it = class extends x.Component {
          state = {
            bUpdating: !1,
            newCategoryOption: {
              label: (0, Ke.rG)(X.HFK),
              value: { eventType: X.HFK },
            },
          };
          m_cancelSignal = k().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "ChangeEventTypeDialog component unmounted",
            );
          }
          async ChangeCategoryForEvent() {
            const { eventModel: a, closeModal: n } = this.props;
            try {
              const r = this.state.newCategoryOption,
                o = r.value.eventType;
              await _e
                .Get()
                .UpdatePartnerEventType(
                  this.m_cancelSignal,
                  a.clanSteamID,
                  a.GID,
                  o,
                );
              const d = Fe.Ac,
                c = [];
              r.value.tags &&
                r.value.tags.forEach((f) => {
                  c.push(f);
                  const D = new Ge().SetUpdateSeasonalTags(f).ToModString();
                  c.push(D);
                });
              const u = await _e
                .Get()
                .UpdateTagsOnPartnerEvent(
                  this.m_cancelSignal,
                  a.clanSteamID,
                  a.GetAnnouncementGID(),
                  c,
                  d,
                  new Ge().SetActionChangeEvent(o),
                );
              (0, W.h5)(() => {
                (a.type = o), (a.vecTags = u);
              }),
                this.setState({ bUpdating: !1 }, n);
            } catch (r) {
              const o = (0, V.H)(r);
              console.error("ChangeEventTypeDialog error " + o.strErrorMsg, o),
                this.setState({ bUpdating: !1, strErrorMsg: o.strErrorMsg });
            }
          }
          OnChangeSelection(a) {
            this.setState({ newCategoryOption: a });
          }
          render() {
            const { eventModel: a, closeModal: n } = this.props,
              r = X.Zi8.filter(
                (c) => c == X.DRF || c == X.Y3j || c >= X.L0X,
              ).map((c) => {
                const u = { eventType: c };
                return (
                  c == X.Fwr && (u.tags = ["patchnotes"]),
                  { label: (0, Ke.rG)(c), value: u }
                );
              });
            r.push({
              label: (0, m.we)("#PartnerEvent_Curator_Group_Members"),
              value: {
                eventType: X.uYK,
                tags: ["curator", "curator_group_members"],
              },
            }),
              r.push({
                label: (0, m.we)("#PartnerEvent_Curator_Public"),
                value: {
                  eventType: X.uYK,
                  tags: ["curator", "curator_public"],
                },
              }),
              r.push({
                label: (0, m.we)("#PartnerEvent_SteamAwardNominations"),
                value: {
                  eventType: X.uYK,
                  tags: [
                    "steam_award_nomination_request",
                    "mod_hide_library_overview",
                  ],
                },
              }),
              r.push({
                label: (0, m.we)("#PartnerEvent_SteamAwardVoteRequest"),
                value: {
                  eventType: X.uYK,
                  tags: [
                    "steam_award_vote_request",
                    "mod_hide_library_overview",
                  ],
                },
              });
            const o = [
                {
                  value: { eventType: X.f4X, tags: ["halloween"] },
                  label: "Halloween: " + (0, m.we)("#PartnerEvent_15"),
                },
                {
                  value: { eventType: X.zA, tags: ["halloween"] },
                  label: "Halloween: " + (0, m.we)("#PartnerEvent_22"),
                },
                {
                  value: { eventType: X.y6, tags: ["halloween"] },
                  label: "Halloween: " + (0, m.we)("#PartnerEvent_23"),
                },
                {
                  value: { eventType: X.hGl, tags: ["halloween"] },
                  label: "Halloween: " + (0, m.we)("#PartnerEvent_24"),
                },
                {
                  value: { eventType: X.WNR, tags: ["halloween"] },
                  label: "Halloween: " + (0, m.we)("#PartnerEvent_35"),
                },
              ],
              d = ft.HD.GetTimeNowWithOverrideAsDate();
            return (
              d.getMonth() == 8 || d.getMonth() == 9
                ? r.unshift(...o)
                : r.push(...o),
              (0, e.jsx)(p.o0, {
                strTitle: (0, m.we)("#EventModTile_ChangeEventType"),
                strDescription: (0, m.we)(
                  "#EventModTile_ChangeEventType_Desc",
                  a.GetEventTypeAsString(),
                ),
                onCancel: n,
                onOK: () =>
                  this.setState({ bUpdating: !0 }, this.ChangeCategoryForEvent),
                children: (0, e.jsx)(x.Fragment, {
                  children: (0, e.jsxs)("div", {
                    className: C.CategoryChangeDialog,
                    children: [
                      (0, e.jsx)("br", {}),
                      this.state.bUpdating &&
                        (0, e.jsx)(I.t, { size: "small" }),
                      this.state.strErrorMsg &&
                        (0, e.jsxs)("div", {
                          children: [
                            (0, m.we)("#Chat_Settings_Error_ServerError"),
                            (0, e.jsx)("br", {}),
                            this.state.strErrorMsg,
                          ],
                        }),
                      (0, e.jsx)(Le.Ay, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: r,
                      }),
                    ],
                  }),
                }),
              })
            );
          }
        };
        h([se.oI], it.prototype, "ChangeCategoryForEvent", 1),
          h([se.oI], it.prototype, "OnChangeSelection", 1),
          (it = h([U.PA], it));
        class ot extends x.Component {
          state = {
            bUpdating: !1,
            bAccept: this.props.eventModel.BHasTag("halloween2019"),
            bHorror: this.props.eventModel.BHasTag("horror"),
            bCute: this.props.eventModel.BHasTag("cute"),
          };
          m_cancelSignal = k().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "UpdateSeasonalTagDialog component unmounted",
            );
          }
          ChangeAcceptance() {
            this.setState({ bAccept: !this.state.bAccept });
          }
          ChangeHorror() {
            this.setState({ bHorror: !this.state.bHorror });
          }
          ChangeCute() {
            this.setState({ bCute: !this.state.bCute });
          }
          async ApplyAction() {
            let n = new Array(),
              r = new Array();
            this.state.bAccept
              ? (n.push("halloween2019"), r.push("halloween2019reviewed"))
              : (r.push("halloween2019"), n.push("halloween2019reviewed")),
              this.state.bCute ? n.push("cute") : r.push("cute"),
              this.state.bHorror ? n.push("horror") : r.push("horror");
            try {
              const { eventModel: o } = this.props;
              let d = await _e
                .Get()
                .UpdateTagsOnPartnerEvent(
                  this.m_cancelSignal,
                  o.clanSteamID,
                  o.AnnouncementGID,
                  n,
                  r,
                  new Ge().SetUpdateSeasonalTags(
                    this.state.bAccept
                      ? "halloween2019"
                      : "halloween2019reviewed",
                  ),
                );
              (o.vecTags = d), this.props.closeModal();
            } catch (o) {
              let d = (0, V.H)(o);
              console.error("EventModerationTile " + d.strErrorMsg, d),
                this.setState({ strErrorMsg: d.strErrorMsg });
            }
          }
          render() {
            const { eventModel: n, closeModal: r } = this.props;
            return (0, e.jsx)(p.o0, {
              strTitle: (0, m.we)("#EventModTile_SeasonalTag"),
              onCancel: r,
              onOK: () => this.setState({ bUpdating: !0 }, this.ApplyAction),
              children: (0, e.jsx)(x.Fragment, {
                children: (0, e.jsxs)("div", {
                  className: C.CategoryChangeDialog,
                  children: [
                    (0, e.jsx)("input", {
                      id: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Acceptance",
                      children: (0, m.we)("#EventModTile_SeasonalTag_Desc"),
                    }),
                    (0, e.jsx)("div", {
                      children: (0, m.we)(
                        "#EventModTile_SeasonalTag_Desc_Secondary",
                      ),
                    }),
                    (0, e.jsx)("input", {
                      id: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Horror",
                      children: "Horror Tag",
                    }),
                    (0, e.jsx)("input", {
                      id: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute,
                    }),
                    (0, e.jsx)("label", {
                      htmlFor: "Cute",
                      children: "Cute Tag",
                    }),
                    this.state.bUpdating && (0, e.jsx)(I.t, { size: "small" }),
                    this.state.strErrorMsg &&
                      (0, e.jsxs)("div", {
                        children: [
                          (0, m.we)("#Chat_Settings_Error_ServerError"),
                          (0, e.jsx)("br", {}),
                          this.state.strErrorMsg,
                        ],
                      }),
                  ],
                }),
              }),
            });
          }
        }
        h([se.oI], ot.prototype, "ChangeAcceptance", 1),
          h([se.oI], ot.prototype, "ChangeHorror", 1),
          h([se.oI], ot.prototype, "ChangeCute", 1),
          h([se.oI], ot.prototype, "ApplyAction", 1);
        var Yt = i(56062),
          Zt = Object.defineProperty,
          qt = Object.getOwnPropertyDescriptor,
          en = (a, n, r, o) => {
            for (
              var d = o > 1 ? void 0 : o ? qt(n, r) : n, c = a.length - 1, u;
              c >= 0;
              c--
            )
              (u = a[c]) && (d = (o ? u(n, r, d) : u(d)) || d);
            return o && d && Zt(n, r, d), d;
          };
        let Wt = class extends x.Component {
          state = { bLoadingEvent: !0 };
          m_cancelSignal = k().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "SteamGameFestivalStoreDebug to unload ",
            );
          }
          async componentDidMount() {
            const { clanEventGID: a, clanAccountID: n } = this.props;
            if (
              (console.log(a, n, typeof a, typeof n),
              a && !ae.O3.BHasClanEventModel(a))
            ) {
              let r = H.b.InitFromClanID(Number.parseInt(n)),
                o = await ae.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  r,
                  a,
                  0,
                ),
                d = new Array(),
                c = new Array();
              if (o.BHasSaleEnabled()) {
                this.setState({
                  event: o,
                  bLoadingEvent: !1,
                  bLoadingApps: !0,
                  bLoadingDemos: !0,
                  bLoadingAssociatedDemoInfo: !0,
                });
                let u = new Map();
                o.jsondata.sale_sections.forEach((F) => {
                  F.section_type == "tabs" &&
                    F.tabs.forEach((ie) => {
                      ie.capsules.forEach((ne) => {
                        ne.type == "game" ||
                        ne.type == "application" ||
                        ne.type == "software"
                          ? u.has(ne.id) || (u.set(ne.id, !0), d.push(ne.id))
                          : u.has(ne.id) || (u.set(ne.id, !0), c.push(ne.id));
                      });
                    });
                });
                const f = {
                  include_assets: !0,
                  include_screenshots: !0,
                  include_release: !0,
                };
                await Se.A.Get().QueueMultipleAppRequests(d, f),
                  this.setState({
                    rgAppIDs: d,
                    rgUnknownTypeAppIDs: c,
                    bLoadingApps: !1,
                  }),
                  await Se.A.Get().QueueMultipleAppRequests(d, f),
                  this.setState({ bLoadingAssociatedDemoInfo: !1 });
                const D = d.flatMap(
                  (F) => Se.A.Get().GetApp(F)?.GetDemoAppIDs() ?? [],
                );
                await Se.A.Get().QueueMultipleAppRequests(D, f),
                  this.setState({ bLoadingDemos: !1 });
              } else this.setState({ bLoadingEvent: !1, rgAppIDs: d });
            } else this.setState({ bLoadingEvent: !1 });
          }
          render() {
            if (
              this.state.bLoadingEvent ||
              this.state.bLoadingDemos ||
              this.state.bLoadingApps ||
              this.state.bLoadingAssociatedDemoInfo
            )
              return (0, e.jsx)(I.t, {
                string:
                  (0, m.we)("#Loading") +
                  (this.state.bLoadingEvent
                    ? " Events"
                    : this.state.bLoadingApps
                      ? " Apps"
                      : this.state.bLoadingAssociatedDemoInfo
                        ? " Associated Demo Info"
                        : this.state.bLoadingDemos
                          ? " Demos"
                          : "done"),
                position: "center",
              });
            if (!this.state.event)
              return (0, e.jsx)("div", { children: " Failed to load event" });
            const { event: a } = this.state;
            if (!a.jsondata.bSaleEnabled)
              return (0, e.jsx)("div", { children: "Not a sale event" });
            let n = new Array(),
              r = new Array();
            this.state.rgAppIDs
              .filter((de) => !Se.A.Get().GetApp(de))
              .forEach((de) => {
                n.push(
                  (0, e.jsx)(
                    "div",
                    {
                      children: (0, e.jsx)("a", {
                        href: j.TS.STORE_BASE_URL + "app/" + de + "/?beta=1",
                        target: "_blank",
                        children: de,
                      }),
                    },
                    "missing: " + de,
                  ),
                ),
                  r.push(de);
              });
            const o = this.state.rgAppIDs.reduce(
                (de, be) => de + (Se.A.Get().GetApp(be)?.BHasDemo() ? 1 : 0),
                0,
              ),
              d = new Array();
            this.state.rgAppIDs.forEach((de) => {
              const be = Se.A.Get().GetApp(de);
              if (be && !be.BHasDemo()) {
                let Te = Se.A.Get().GetApp(de);
                d.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      children: [
                        Te?.GetAppType() == Yt.uE.ue &&
                          (0, e.jsx)("b", {
                            children:
                              "--Error: Sale Page has Demo AppID, based game --\xA0",
                          }),
                        Te?.GetName(),
                        " (",
                        de,
                        ")",
                        (0, e.jsx)("a", {
                          href: (0, $e.k2)(Te.GetStorePageURL() + "?beta=0"),
                          target: "_blank",
                          children: "Store Page",
                        }),
                        "\xA0",
                        (0, e.jsx)("a", {
                          href: j.TS.PARTNER_BASE_URL + "apps/landing/" + de,
                          target: "_blank",
                          children: "App Landing Page",
                        }),
                      ],
                    },
                    "missingdemo_" + de,
                  ),
                );
              }
            });
            let c = 0,
              u = 0,
              f = 0,
              D = 0,
              F = 0,
              ie = 0;
            this.state.rgAppIDs.forEach((de) => {
              let be = !1;
              const Te = Se.A.Get().GetApp(de);
              Te &&
                Te.BHasDemo() &&
                (Se.A.Get().GetApp(Te.GetDemoAppIDs()[0]).BIsComingSoon()
                  ? ((f += 1), (be = !0))
                  : (D += 1));
            });
            let ne = new Array(),
              ye = 0;
            return (
              this.state.rgAppIDs.forEach((de) => {
                Se.A.Get().GetApp(de)?.GetAppType() != Yt.uE.ue && (ye += 1);
              }),
              (0, e.jsxs)(Q.tH, {
                children: [
                  (0, e.jsx)("h1", {
                    children: a.GetNameWithFallback((0, X.sfN)(j.TS.LANGUAGE)),
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unique AppIDs:" }),
                      " ",
                      this.state.rgAppIDs.length,
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsxs)("b", {
                        children: ["Visible Apps in ", j.TS.COUNTRY, ":"],
                      }),
                      " ",
                      ye,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unknown AppID types:" }),
                      " ",
                      this.state.rgUnknownTypeAppIDs.length,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Missing AppIDs:" }),
                      " ",
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [(0, e.jsx)("b", { children: "Demos:" }), " ", o],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "Visible apps missing demo store:",
                      }),
                      " ",
                      d.length,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "CApplications Loaded:" }),
                      " ",
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "CApplication with Associated Demos:",
                      }),
                      " ",
                      c,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "\xA0\xA0Associated with store page but not released: ",
                      }),
                      " ",
                      F,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children: "CApplication with demo without association:",
                      }),
                      " ",
                      u,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "\xA0\xA0Released but not associated with store page: ",
                      }),
                      " ",
                      ie,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "CApplication missing:" }),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", {
                        children:
                          "CApplication without demo store and demo associations:",
                      }),
                      " ",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Released Demo: " }),
                      D,
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("b", { children: "Unreleased Demo: " }),
                      f,
                    ],
                  }),
                  (0, e.jsx)("hr", {}),
                  (0, e.jsx)("h2", { children: "Missing Appids:" }),
                  n,
                  (0, e.jsx)("h2", {
                    children:
                      "Missing BOTH demo list and associated demo on product page:",
                  }),
                  ne,
                  (0, e.jsx)("h2", {
                    children:
                      "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):",
                  }),
                  d,
                ],
              })
            );
          }
        };
        Wt = en([U.PA], Wt);
        var tn = i(3685),
          nn = i(71742),
          an = i(5827);
        function rn(a) {
          const [n, r] = (0, x.useState)(!1),
            [o] = (0, x.useState)(() => Xt()),
            d = (0, x.useMemo)(
              () => ({
                country: j.TS.COUNTRY,
                language: j.TS.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, x.useEffect)(() => (r(!0), sn(o)), [o]),
            n
              ? (0, x.createElement)(an.V3, {
                  context: d,
                  serviceTransportOverride: o.GetServiceTransport(),
                  children: a.children,
                })
              : null
          );
        }
        function dn(a) {
          const [n] = useState(() => Xt()),
            r = useMemo(
              () => ({
                country: Config.COUNTRY,
                language: Config.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: a.bIncludeUnpublished,
              }),
              [a.bIncludeUnpublished],
            );
          return createElement(StoreBrowseLoaderRoot, {
            context: r,
            serviceTransportOverride: n.GetServiceTransport(),
            children: a.children,
          });
        }
        function Xt() {
          const a = (0, j.Tc)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (
            (0, nn.wT)(!!a, "require partnerbrowse_webapi_token"),
            new tn.D(j.TS.WEBAPI_BASE_URL, a)
          );
        }
        function sn(a) {
          return Se.A.Initialize(
            a.GetServiceTransport(),
            j.iA.is_partner_member,
          );
        }
        var on = i(17809);
        const ln = () =>
          (0, e.jsx)(rn, {
            children: (0, e.jsx)(on.d, {
              children: (0, e.jsxs)(z.dO, {
                children: [
                  (0, e.jsx)(z.qh, {
                    path: P.B.EventGameFestivalDebug(),
                    render: (a) =>
                      (0, e.jsx)(Wt, {
                        ...a,
                        clanAccountID: a.match.params.clanacountid,
                        clanEventGID: a.match.params.claneventgid,
                      }),
                  }),
                  (0, e.jsx)(z.qh, {
                    exact: !0,
                    path: P.B.EventBackfill(),
                    render: (a) => (0, e.jsx)(ze, { ...a }),
                  }),
                  (0, e.jsx)(z.qh, {
                    path: P.B.EventRSSModeration(),
                    render: (a) => (0, e.jsx)(ue, { ...a }),
                  }),
                  (0, e.jsx)(z.qh, {
                    path: P.B.EventModeration(),
                    render: (a) =>
                      (0, e.jsx)(Me, {
                        ...a,
                        appid:
                          a.match.params.appid &&
                          Number.parseInt(a.match.params.appid),
                      }),
                  }),
                ],
              }),
            }),
          });
      },
      32545: (re) => {
        re.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      61311: (re) => {
        re.exports = {
          ModeratorAuditActionCtn: "f6z__AuHw6SOG9zsY2oKr",
          ExpandModActions: "_3nNMeqxuySIiNcmt7YEXb7",
        };
      },
      10026: (re) => {
        re.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (re) => {
        re.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (re) => {
        re.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      12037: (re) => {
        re.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
          BackgroundAnimation: "_295HzH0_Gg7fchG1zO9Km7",
          "ItemFocusAnim-darkerGrey-nocolor": "_291aUneSnsR7SSD43BPEYt",
          "ItemFocusAnim-darkerGrey": "_3T-aeBZd_novjXZhPEqJ_L",
          "ItemFocusAnim-darkGreySettings": "ekd5ku98aKtUXOuTnlUpj",
          "ItemFocusAnim-darkGrey": "peNld_fsioxlGFxQfdd8I",
          "ItemFocusAnim-grey": "_1433gddOHXCko3qPvXFRFS",
          "ItemFocusAnim-translucent-white-10": "_3ZEmb3nXVV6Jl3vO3gd3n2",
          "ItemFocusAnim-translucent-white-20": "EoCuk2lmX0KUPR7Ja5J0J",
          "ItemFocusAnimBorder-darkGrey": "_3FtKchinLpLv8OXrbvS81w",
          "ItemFocusAnim-green": "_23vh8vhEvEmJ5bnq2YZfx8",
          focusAnimation: "wTWp1KqP_zaAfiOc2ovCo",
          hoverAnimation: "_2knkM4Dk-kiPNpW81PgE0Y",
        };
      },
      9202: (re) => {
        re.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
      71909: (re) => {
        re.exports = {
          Ctn: "_1cSpOjJvmGfNyu_HSwichZ",
          RssInput: "_8NQ9LUIbLO71H08qAYXDd",
          PreviewListCtn: "HRcOMhFkaVvhc6JpjMSNL",
          PostCtn: "_3MI2hkWsuzXcyDAibpwe7B",
          PostTitle: "_1ZsnsCKJmsJuCu04nd93lM",
          ActivePost: "h-qBFnVYUuO1I4P-cSkTz",
          PostDate: "_2vXmupKkh6p2BaA0K6CB5O",
          ErrorPost: "aBLy2PQkdVwQn6JBG8BN8",
          PostDraft: "_10_gLIbT6bnwWVSfTW2WSX",
          PostStaged: "nNzd6ujTYg6p9F7pRvFWy",
          PreviewListBtn: "_3NT8sO_AexM1KIu_MODBhK",
          PreviewButtons: "_3lbycruUbHtprPAsZH1xvl",
          UrlSettingCtn: "iN4AtnUn7apNTMq-bbs1m",
          Error: "_1ZZ510SPBPFH5AkrGEHFfu",
          DialogPostTitle: "_1XamDYGOmN-CAK2C5na9a5",
          DashboardBtn: "_2Hlrm7BUntwygz545o3zQI",
          RawRSS: "_2mOAhPzeuYmAf5zGBOdp7F",
          ButtonCtn: "_13jSBmDO_a-9t1cIUiiQGm",
          PreviewBtn: "_3HssDlgWiXjyOyu8qdcc-K",
          ViewRaw: "_2jvHrB2MnyHMk3_BUfXjgt",
          LanguageRow: "g_9tLawSDdTk6NiUPTRzd",
          LanguageTitle: "_2jkBiax2j-5uGiCq-TfyS0",
          LanguageSet: "_2zsMrGyxcvlo1yieM1i0d8",
        };
      },
      52081: (re) => {
        re.exports = {
          SectionContainer: "_3P-ffy_ncZSHdpLyO6f0qi",
          ModSectionTitle: "_2lc8mXoJp_A_p2dgalucda",
          ResizeButton: "_29RNNuE5kdZltMEtl37JLr",
          TileContainer: "_2D4XHyOtJNCevYR8usMUTn",
          CreatorCtn: "GKustVJ6kwH-yfSnQEsoc",
          TileSpread: "_1s_ElWG5sLvC6jn5bmx5lY",
        };
      },
      45559: (re) => {
        re.exports = { Error: "_1eWgIJNhXTPC8_jGAIqKPo" };
      },
      961: (re) => {
        re.exports = {
          AnalysisCtn: "_1YGfWUDh8ed60wRQsWWNIF",
          AnalysisMissing: "rH1DtJyqgJLBkBSxST7Pr",
          ModerationContainer: "_4HRKpSC9YY7qtf41FvW0t",
          FilterContainer: "qY07Ts46PtC9f_CkGYbuw",
          Tile: "_3oU1yN2Yb-ZuT2P5rHAev9",
          DetailsMiddle: "VcJpZMvg6yg6gvjet_lOL",
          EventModerateMarkReview: "_1RqKA7hTv6bcBGrMlmJBgz",
          EventModerateMarkReReview: "qd-K7NHXOsYzDV3efizgo",
          HalloweenEvent: "_34-bq70a3KzZ-vVd1v8whZ",
          TileEventOtherType: "_3LUrW7wuVtojLL2n5z-MO5",
          TileCapsule: "_36tP88olexdONuQPMAH7wS",
          NoCapsuleFallback: "_16oQL8__nFx7gB4SyJaXss",
          NoCapsule: "_1onVFUCJL4w1GOc9-5H6Me",
          TileDetails: "_2mRup7CUbcaFul1JHh9EZE",
          DetailsLeft: "_1O0y5744ePZj3bJR1znj1i",
          EventTitle: "_3ahHdkXDTdAX8N8qrlTO2A",
          DetailsRight: "_2BaxWyhld4ybAPEQ6OWPMr",
          ArtHeader: "_38IkFA1-NC1J4Nksi3nRFA",
          ArtSpotlight: "_2oUPYZHA2_Ta4GuTcTZbgd",
          ModeratedFlagCtn: "_2JGGc489-CEXdtyThZ-oQB",
          TitleLink: "_1OG__rbIbfwvZHVxRtcncy",
          TileAppInfo: "_2IJ__vdWVbYb-buHnhzfnA",
          TileAppInfoTitle: "_2X75q8B3vbGNtefxcW3jV7",
          TileAppInfoImage: "_1rVmL1div0uHwyMqwlJixh",
          TileSplit: "aaFuCFgI5Fl32h2pWEEfN",
          TileTitle: "yJw1iGP3a49nfGpsJLTX",
          TimeWidth: "xSOgV1OP-kC1LOJB_U6Lh",
          CategoryChangeDialog: "_1VSAjVr5FVxM5XYWbK0drT",
          Button: "wu9KrcTvKBuVbK28hlB7O",
          RightSideTitles: "XDAwDPCqcUwPgADyyo1I3",
          DateAndTime: "_2cW9NG6Q7uWRVnhAwe3juu",
          StoreHeaderAdjust: "_3U7jaAVOEBb0gDtFK1AkVR",
          LastUpdateTime: "_2x7zHBXixihuRXX3Rjt_0s",
          EventTimingBlock: "_31d_RSG49SZFyfID3s5Z4G",
          TileEventType: "_1z1xtCOtqCzGGGDRR-dRFr",
          ChannelInfo: "H__RKLMfFToIYF83TuW3k",
          HasAdultContent: "_2PcmCd2KPADlMtBUq-mAxi",
        };
      },
    },
  ]);
})();
