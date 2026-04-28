/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9672],
  {
    15392: (e) => {
      e.exports = {
        Link: "-HlDBB290kjpl61uUmRed",
        Banner: "_2bT8irkKNnA5sxFG3MUXzH",
        Big: "sGy-bB7uqEt4Hoe7U5iA1",
        Mobile: "mhii5hgMCQvO2tXOUdWPQ",
      };
    },
    40594: (e) => {
      e.exports = {
        ProgressBar: "_3szjUMH5QeRwtXAsLRcWt9",
        AnimateProgress: "_3DjdoQj5NoknowwV5t5JPN",
        loadingBarAnim: "_2SA1xV5w3BGirkDWosGYoX",
        Indeterminate: "_3G7KLhFOuTiHW-fGxtWtRs",
        Circular: "_3wMS41OoTPnZyEddTVwzy_",
        Full: "_3t_UEZDy1QxxcYfn3TTvD2",
      };
    },
    71109: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        DiscoveryQueueWidgetCtn: "_1LXqxVtAL8Lmy7J7rLSVit",
        WidgetText: "co4IP1iV1813n9UgG3h5f",
        WidgetCapsule: "ZyOLslFdmnVjR1OGpRaue",
        CloseButton: "bfN8kdqVDI58Ly1qiSuT_",
        Y: "_1FD7rgQVEqkzjDjzYa-1BC",
        BackgroundAnimation: "_1Z5QxYX1JW3xFfBP4Olbj8",
        "ItemFocusAnim-darkerGrey-nocolor": "_2-B-maYes-hWNZaATdM3tO",
        "ItemFocusAnim-darkerGrey": "_7SrvWzxxGnhg_rsCG_oIn",
        "ItemFocusAnim-darkGreySettings": "_2XbtC6kB1lhuX_TsQSZLwO",
        "ItemFocusAnim-darkGrey": "_1eAeT6Xs-BGjbRYdD0Wir2",
        "ItemFocusAnim-grey": "_3EzLQA3urt8YNbSeiYzqLQ",
        "ItemFocusAnim-translucent-white-10": "_3dWS2PSA5ggPqUc4QB-P1Z",
        "ItemFocusAnim-translucent-white-20": "_2qWHGTZs1PRzk_FzWgYwvS",
        "ItemFocusAnimBorder-darkGrey": "_1gEGV4txNqIr0COruFARVh",
        "ItemFocusAnim-green": "_1kT_vT6X_21tgdACN3MD1r",
        focusAnimation: "_2VIlPFJOxlK-lazFTkek7v",
        hoverAnimation: "I3jGaAXmpxTOQldGALnOQ",
      };
    },
    69409: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => p });
      var i = r(7850),
        n = r(90626),
        s = r(22837),
        a = r(38390),
        o = r(52038),
        l = r(61859),
        c = r(61336),
        d = r(78327),
        u = r(15392),
        m = r(27666);
      function p(e) {
        const { gidEvent: t } = e,
          r = (0, a.RR)(t),
          [p, g] = (0, n.useMemo)(() => {
            if (
              r?.jsondata?.localized_sale_product_banner?.length > 0 &&
              r?.jsondata?.localized_sale_product_mobile_banner?.length > 0
            ) {
              const e = (0, s.sf)(d.TS.LANGUAGE),
                t = l.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_banner,
                  e,
                ),
                i = l.NT.GetWithFallback(
                  r.jsondata.localized_sale_product_mobile_banner,
                  e,
                );
              if (t?.length > 0 && i?.length > 0)
                return [
                  m.z.GenerateURLFromHashAndExt(r.clanSteamID, t),
                  m.z.GenerateURLFromHashAndExt(r.clanSteamID, i),
                ];
            }
            return [null, null];
          }, [r]);
        return p?.length > 0 && g?.length > 0
          ? (0, i.jsxs)("a", {
              href: (0, c.k2)(r.GetSaleURL()),
              className: u.Link,
              children: [
                (0, i.jsx)("img", {
                  src: p,
                  className: (0, o.A)(u.Banner, u.Big),
                }),
                (0, i.jsx)("img", {
                  src: g,
                  className: (0, o.A)(u.Banner, u.Mobile),
                }),
              ],
            })
          : null;
      }
    },
    5907: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => Ee });
      var i = r(90626),
        n = r(7850),
        s = r(45699),
        a = r(76217),
        o = r(37788),
        l = r(23310),
        c = r(23809),
        d = r(62093),
        u = r(60014),
        m = r(13871),
        p = r(30894),
        g = r(93973),
        w = r(16021),
        b = r(55263),
        h = r(12155),
        _ = r(32630),
        y = r(4434),
        f = r(52038),
        B = r(61859),
        v = r(60778),
        S = r(25489),
        M = r(44691),
        x = r(78327),
        j = r(39199),
        R = r(40594);
      const I = ({ nPercent: e, size: t = 120, strokeWidth: r = 20 }) => {
        const i = (t - r) / 2,
          s = 2 * Math.PI * i,
          a = s - (e / 100) * s,
          o = 100 == e;
        return (0, n.jsx)("div", {
          className: (0, f.A)({ [R.Circular]: !0, [R.Full]: o }),
          children: (0, n.jsxs)("svg", {
            width: t,
            height: t,
            style: { transform: "rotate(-90deg)" },
            children: [
              (0, n.jsx)("circle", {
                cx: t / 2,
                cy: t / 2,
                r: i,
                stroke: "#0c131d",
                strokeWidth: r,
                fill: "none",
              }),
              (0, n.jsx)("circle", {
                cx: t / 2,
                cy: t / 2,
                r: i,
                stroke: "#1a9fff",
                strokeWidth: r,
                fill: "none",
                strokeDasharray: s,
                strokeDashoffset: a,
                style: { transition: "stroke-dashoffset 0.3s ease-in-out" },
              }),
            ],
          }),
        });
      };
      var A,
        D = r(22797),
        T = r(10224),
        z = r(60779),
        C = r(92834),
        F = r(3740),
        N = r(44986),
        q = r(32754),
        U = r(61336),
        W = r(20713),
        Q = r(40807),
        G = r(80902),
        O = r(1035),
        P = r(34181),
        k = r(17720),
        L = r(4796),
        E = r(8092),
        H = r(75279),
        Z = r(706),
        V = r(56545),
        K = r(80613),
        Y = r.n(K),
        X = r(89068);
      class $ extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.recommendationid || X.Sg($.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                  review_text: {
                    n: 2,
                    br: X.qM.readString,
                    bw: X.gp.writeString,
                  },
                  voted_up: { n: 3, br: X.qM.readBool, bw: X.gp.writeBool },
                  is_public: { n: 4, br: X.qM.readBool, bw: X.gp.writeBool },
                  language: { n: 5, br: X.qM.readString, bw: X.gp.writeString },
                  is_in_early_access: {
                    n: 6,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  received_compensation: {
                    n: 7,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  comments_disabled: {
                    n: 8,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  hide_in_steam_china: {
                    n: 9,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  saved_hardware_id: {
                    n: 10,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = X.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT($.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Request";
        }
      }
      class J extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Update_Response";
        }
      }
      class ee extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.saved_hardware_id || X.Sg(ee.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  saved_hardware_id: {
                    n: 1,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = X.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Request";
        }
      }
      class te extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.num_backfilled || X.Sg(te.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  num_backfilled: {
                    n: 1,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = X.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(te.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_BackfillSavedHardware_Response";
        }
      }
      class re extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.reaction_type || X.Sg(re.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  reaction_type: {
                    n: 1,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  count: { n: 2, br: X.qM.readUint32, bw: X.gp.writeUint32 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = X.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_LoyaltyReaction";
        }
      }
      class ie extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.id || X.Sg(ie.M()),
            K.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  id: { n: 1, br: X.qM.readEnum, bw: X.gp.writeEnum },
                  ranges: { n: 2, c: ne, r: !0, q: !0 },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = X.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag";
        }
      }
      class ne extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.start || X.Sg(ne.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  start: { n: 1, br: X.qM.readUint32, bw: X.gp.writeUint32 },
                  end: { n: 2, br: X.qM.readUint32, bw: X.gp.writeUint32 },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = X.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_Recommendation_Tag_Range";
        }
      }
      class se extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.recommendationid || X.Sg(se.M()),
            K.Message.initialize(this, e, 0, -1, [27, 40, 54], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  recommendationid: {
                    n: 1,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                  steamid: {
                    n: 2,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                  appid: { n: 3, br: X.qM.readUint32, bw: X.gp.writeUint32 },
                  review: { n: 4, br: X.qM.readString, bw: X.gp.writeString },
                  time_created: {
                    n: 5,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  time_updated: {
                    n: 6,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  votes_up: { n: 7, br: X.qM.readUint32, bw: X.gp.writeUint32 },
                  votes_down: {
                    n: 8,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  vote_score: { n: 9, br: X.qM.readFloat, bw: X.gp.writeFloat },
                  language: {
                    n: 10,
                    br: X.qM.readString,
                    bw: X.gp.writeString,
                  },
                  comment_count: {
                    n: 11,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  voted_up: { n: 12, br: X.qM.readBool, bw: X.gp.writeBool },
                  is_public: { n: 13, br: X.qM.readBool, bw: X.gp.writeBool },
                  moderator_hidden: {
                    n: 14,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  flagged_by_developer: {
                    n: 15,
                    br: X.qM.readEnum,
                    bw: X.gp.writeEnum,
                  },
                  report_score: {
                    n: 16,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  steamid_moderator: {
                    n: 17,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                  steamid_developer: {
                    n: 18,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                  steamid_dev_responder: {
                    n: 19,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                  developer_response: {
                    n: 20,
                    br: X.qM.readString,
                    bw: X.gp.writeString,
                  },
                  time_developer_responded: {
                    n: 21,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  developer_flag_cleared: {
                    n: 22,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  written_during_early_access: {
                    n: 23,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  votes_funny: {
                    n: 24,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  received_compensation: {
                    n: 25,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  unverified_purchase: {
                    n: 26,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  review_qualities: {
                    n: 27,
                    r: !0,
                    q: !0,
                    br: X.qM.readEnum,
                    pbr: X.qM.readPackedEnum,
                    bw: X.gp.writeRepeatedEnum,
                  },
                  weighted_vote_score: {
                    n: 28,
                    br: X.qM.readFloat,
                    bw: X.gp.writeFloat,
                  },
                  moderation_note: {
                    n: 29,
                    br: X.qM.readString,
                    bw: X.gp.writeString,
                  },
                  payment_method: {
                    n: 30,
                    br: X.qM.readInt32,
                    bw: X.gp.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 31,
                    br: X.qM.readInt32,
                    bw: X.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 32,
                    br: X.qM.readInt32,
                    bw: X.gp.writeInt32,
                  },
                  last_playtime: {
                    n: 33,
                    br: X.qM.readInt32,
                    bw: X.gp.writeInt32,
                  },
                  comments_disabled: {
                    n: 34,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  playtime_at_review: {
                    n: 35,
                    br: X.qM.readInt32,
                    bw: X.gp.writeInt32,
                  },
                  approved_for_china: {
                    n: 36,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  ban_check_result: {
                    n: 37,
                    br: X.qM.readEnum,
                    bw: X.gp.writeEnum,
                  },
                  refunded: { n: 38, br: X.qM.readBool, bw: X.gp.writeBool },
                  account_score_spend: {
                    n: 39,
                    br: X.qM.readInt32,
                    bw: X.gp.writeInt32,
                  },
                  reactions: { n: 40, c: re, r: !0, q: !0 },
                  ipaddress: {
                    n: 41,
                    br: X.qM.readString,
                    bw: X.gp.writeString,
                  },
                  hidden_in_steam_china: {
                    n: 42,
                    br: X.qM.readBool,
                    bw: X.gp.writeBool,
                  },
                  steam_china_location: {
                    n: 43,
                    br: X.qM.readString,
                    bw: X.gp.writeString,
                  },
                  category_ascii_pct: {
                    n: 44,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  category_meme_pct: {
                    n: 45,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  category_offtopic_pct: {
                    n: 46,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  category_uninformative_pct: {
                    n: 47,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  category_votefarming_pct: {
                    n: 48,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  deck_playtime_at_review: {
                    n: 49,
                    br: X.qM.readInt32,
                    bw: X.gp.writeInt32,
                  },
                  is_bot_review_pct: {
                    n: 50,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  positivity_pct: {
                    n: 51,
                    br: X.qM.readUint32,
                    bw: X.gp.writeUint32,
                  },
                  tags_with_ranges: { n: 54, c: ie, r: !0, q: !0 },
                  saved_hardware_id: {
                    n: 56,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                  hardware_cluster_id: {
                    n: 57,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = X.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "RecommendationDetails";
        }
      }
      class ae extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || X.Sg(ae.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: X.qM.readUint32, bw: X.gp.writeUint32 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = X.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Request";
        }
      }
      class oe extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.accountids_recommended || X.Sg(oe.M()),
            K.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  accountids_recommended: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: X.qM.readUint32,
                    pbr: X.qM.readPackedUint32,
                    bw: X.gp.writeRepeatedUint32,
                  },
                  accountids_not_recommended: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: X.qM.readUint32,
                    pbr: X.qM.readPackedUint32,
                    bw: X.gp.writeRepeatedUint32,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = X.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetFriendsRecommendedApp_Response";
        }
      }
      class le extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.requests || X.Sg(le.M()),
            K.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: { requests: { n: 1, c: ce, r: !0, q: !0 } },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = X.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(le.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request";
        }
      }
      class ce extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.steamid || X.Sg(ce.M()),
            K.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  steamid: {
                    n: 1,
                    br: X.qM.readUint64String,
                    bw: X.gp.writeUint64String,
                  },
                  appid: { n: 2, br: X.qM.readUint32, bw: X.gp.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = X.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest";
        }
      }
      class de extends K.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.recommendations || X.Sg(de.M()),
            K.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { recommendations: { n: 1, c: se, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = X.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return X.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return X.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (Y().BinaryReader)(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return X.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (Y().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          X.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new (Y().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CUserReviews_GetIndividualRecommendations_Response";
        }
      }
      !(function (e) {
        (e.Update = function (e, t) {
          return e.SendMsg("UserReviews.Update#1", (0, V.I8)($, t), J, {
            ePrivilege: 3,
          });
        }),
          (e.BackfillSavedHardware = function (e, t) {
            return e.SendMsg(
              "UserReviews.BackfillSavedHardware#1",
              (0, V.I8)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.GetFriendsRecommendedApp = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetFriendsRecommendedApp#1",
              (0, V.I8)(ae, t),
              oe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetIndividualRecommendations = function (e, t) {
            return e.SendMsg(
              "UserReviews.GetIndividualRecommendations#1",
              (0, V.I8)(le, t),
              de,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          });
      })(A || (A = {}));
      var ue = r(41735),
        me = r.n(ue),
        pe = r(3734);
      class ge {
        static async LoadFriendsRecommendedApp(e, t) {
          const r = V.w.Init(ae);
          r.Body().set_appid(t);
          const i = await A.GetFriendsRecommendedApp(e, r),
            n = i.GetEResult();
          if (1 == n) return i.Body().toObject();
          throw `Error ${n} failed to call GetFriendsRecommendedApp ${t}`;
        }
        static async LoadStoreRelevanceData(e) {
          let t = { appid: e },
            r = { arrSimilarPlayedApps: [], bRecommendedByIR: !1 };
          const i = (
            await me().get(
              `${x.TS.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              { params: t, withCredentials: !0, timeout: 1e4 },
            )
          ).data;
          return (
            i &&
              1 == i.success &&
              (i.results.similar_played_apps &&
                (r.arrSimilarPlayedApps = i.results.similar_played_apps.map(
                  (e) => ({
                    appid: e.appid,
                    playtimeForever: e.playtime_forever,
                  }),
                )),
              i.results.recommended_by_ir && (r.bRecommendedByIR = !0)),
            r
          );
        }
      }
      var we = r(57834),
        be = r.n(we),
        he = r(14336),
        _e = r(26505),
        ye = r(6083);
      const fe = new v.wd("AppRelevance").Debug;
      function Be(e) {
        const {
            appID: t,
            bShowAvatars: r,
            storeItem: s,
            bHideDescription: a,
            bShowCuratorInfo: o,
            bShowCreatorInfo: l,
          } = e,
          d = (0, _e.Nd)(t),
          u = (function (e) {
            const t = (0, c.KV)();
            return (0, G.I)({
              queryKey: ["AppRelevanceStore", "FriendsRecommended", e],
              queryFn: () => ge.LoadFriendsRecommendedApp(t, e),
              enabled: x.iA.logged_in,
            });
          })(t),
          m = (function (e) {
            return (0, G.I)({
              queryKey: ["AppRelevanceStore", "StoreRelevance", e],
              queryFn: () => ge.LoadStoreRelevanceData(e),
              enabled: x.iA.logged_in,
            });
          })(t),
          g = (function () {
            const { data: e } = (0, pe.PG)("App Relevance Store Top Sellers", {
              sort: 11,
              start: 0,
              count: 100,
            });
            return e;
          })(),
          b = (0, G.I)({
            queryKey: ["SimilarPlayedAppsLoad", t],
            queryFn: () =>
              w.A.Get().QueueMultipleAppRequests(
                m.data.arrSimilarPlayedApps?.map((e) => e.appid),
                { include_basic_info: !0, include_assets: !0 },
              ),
            enabled: m.isSuccess,
          }),
          h = (function (e, t) {
            const r = (0, i.useMemo)(
              () => p.Fm.Get().GetRecommendingCuratorsForApp(e) || [],
              [e],
            );
            return (0, G.I)({
              queryKey: ["RecommendingCurators", e],
              queryFn: () =>
                Promise.all(
                  r?.map((e) => L.ac.LoadClanInfoForClanAccountID(e)),
                ),
              enabled: !!t && r && r.length > 0,
            });
          })(t, o),
          _ = (0, i.useMemo)(() => {
            let e = [];
            return (
              s &&
                ((e = e.concat(
                  s
                    .GetAllFranchiseCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "franchise" })),
                )),
                (e = e.concat(
                  s
                    .GetAllDeveloperCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "developer" })),
                )),
                (e = e.concat(
                  s
                    .GetAllPublisherCreatorClans()
                    .map((e) => ({ nAccountID: e, type: "publisher" })),
                )),
                (e = e.filter((e) =>
                  p.Fm.Get().BIsFollowingCurator(e.nAccountID),
                ))),
              e
            );
          }, [s]),
          y = (0, G.I)({
            queryKey: ["FollowedCreators", t],
            queryFn: () =>
              L.ac
                .LoadClanInfoForClanAccountID(_[0].nAccountID)
                .then((e) => ({ clanInfo: e, type: _[0].type })),
            enabled: !!l && _ && _.length > 0,
          }),
          v = (0, G.I)({
            queryKey: ["PlayerSummaries", t, r],
            queryFn: async () => {
              let e = [],
                t = [],
                i = [];
              const n = r ? 10 : 1;
              for (
                let t = 0;
                t < u.data.accountids_recommended?.length && t < n;
                t++
              ) {
                const r = k.b.InitFromAccountID(
                  u.data.accountids_recommended[t],
                );
                e.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < d.data.in_wishlist?.length && e < n; e++) {
                const r = new k.b(d.data.in_wishlist[e].steamid);
                t.push(r.ConvertTo64BitString());
              }
              for (let e = 0; e < d.data.owns?.length && e < n; e++) {
                const t = new k.b(d.data.owns[e].steamid);
                i.push(t.ConvertTo64BitString());
              }
              return {
                rgRecommendedFriends: e,
                rgWishlistFriends: t,
                rgOwnedFriends: i,
              };
            },
            enabled: u.isSuccess && d.isSuccess,
          });
        if (
          !g ||
          b.isLoading ||
          m.isLoading ||
          u.isLoading ||
          d.isLoading ||
          h.isLoading ||
          y.isLoading ||
          v.isLoading
        )
          return (0, n.jsx)(D.t, { size: "medium", position: "center" });
        let S = [];
        m.isSuccess &&
          m.data.arrSimilarPlayedApps &&
          m.data.arrSimilarPlayedApps.forEach((e) => {
            const r = w.A.Get().GetApp(e.appid);
            r
              ? S.push(
                  (0, n.jsx)(
                    Me,
                    { lifetimePlaytime: e.playtimeForever, storeItem: r },
                    e.appid,
                  ),
                )
              : console.error("Failed to load store data ", t);
          });
        const M = g.GetItemIDs().findIndex((e) => e.appid === t),
          j = m.data?.bRecommendedByIR,
          R = S.length > 0,
          I = d.data?.owns?.length,
          A = d.data?.in_wishlist?.length,
          T = u.data?.accountids_recommended?.length;
        let z = 0;
        return (
          I > 0 && z++,
          A > 0 && z++,
          T > 0 && z++,
          j && z++,
          M >= 0 && z++,
          S.length > 0 && z++,
          o && h?.data?.length > 0 && z++,
          l && Boolean(y.data) && z++,
          fe(
            "FriendsOwned: ",
            I,
            " FriendsWishlisted: ",
            A,
            "cRecommended: ",
            T,
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              z > 0 &&
                (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className: be().WhyRelevant,
                      children: (0, B.we)("#DiscoveryQueue_WhyRelevant"),
                    }),
                    (0, n.jsxs)("div", {
                      role: "list",
                      className: be().RelevantCtn,
                      children: [
                        R &&
                          (0, n.jsx)(Ae, {
                            header: (0, B.we)("#DiscoveryQueue_SimilarGames"),
                            children: (0, n.jsx)("div", {
                              className: be().ReleventSimilarAppsCtn,
                              children: S,
                            }),
                          }),
                        o &&
                          h?.data?.length > 0 &&
                          (0, n.jsx)(Ae, {
                            header: (0, B.we)(
                              "#ContentHub_Recommendation_Curators",
                            ),
                            children: (0, n.jsx)("div", {
                              className: (0, f.A)(
                                be().ReleventSimilarAppsCtn,
                                be().RecommendingCuratorsCtn,
                              ),
                              children: h.data
                                .filter(Boolean)
                                .map((e) =>
                                  (0, n.jsx)(
                                    Se,
                                    { curator: e },
                                    "curator_" + e.clanAccountID,
                                  ),
                                ),
                            }),
                          }),
                        l &&
                          Boolean(y.data) &&
                          (0, n.jsx)(ve, { creatorInfo: y.data }),
                        M >= 0 &&
                          (0, n.jsx)(Ae, {
                            header: (0, B.um)(
                              "#DiscoveryQueue_TopSellers",
                              (0, ye.D)(M + 1),
                              (0, n.jsx)("span", {
                                className: be().RelevantTextBold,
                              }),
                            ),
                          }),
                        j &&
                          !R &&
                          (0, n.jsx)(Ae, {
                            header: (0, B.we)(
                              "#DiscoveryQueue_RecommendedByIR",
                            ),
                          }),
                        (0, n.jsx)(xe, {
                          bShowAvatars: r,
                          count: u.data?.accountids_recommended?.length,
                          locToken: "#DiscoveryQueue_FriendsRecommended",
                          arrSteamIDs: v.data?.rgRecommendedFriends,
                        }),
                        (0, n.jsx)(xe, {
                          bShowAvatars: r,
                          count: d.data?.owns?.length,
                          locToken: "#DiscoveryQueue_FriendsOwned",
                          arrSteamIDs: v.data?.rgOwnedFriends,
                        }),
                        (0, n.jsx)(xe, {
                          bShowAvatars: r,
                          count: d.data?.in_wishlist?.length,
                          locToken: "#DiscoveryQueue_FriendsWishlisted",
                          arrSteamIDs: v.data?.rgWishlistFriends,
                        }),
                      ],
                    }),
                  ],
                }),
              a && 0 != z
                ? (0, n.jsx)("div", { "aria-label": s.GetShortDescription() })
                : (0, n.jsx)("div", {
                    className: (0, f.A)(be().AppDescription, z && be().Divider),
                    children: s.GetShortDescription(),
                  }),
            ],
          })
        );
      }
      function ve(e) {
        const { creatorInfo: t } = e;
        if (!t) return null;
        let r;
        switch (t.type) {
          case "publisher":
            r = "#ContentHub_Recommendation_FollowedPublisher";
            break;
          case "developer":
            r = "#ContentHub_Recommendation_FollowedDeveloper";
            break;
          case "franchise":
            r = "#ContentHub_Recommendation_FollowedFranchise";
        }
        return r
          ? (0, n.jsx)(Ae, {
              header: (0, B.PP)(
                r,
                (0, n.jsx)("span", {
                  className: be().RelevantTextBold,
                  children: t.clanInfo?.group_name,
                }),
              ),
            })
          : null;
      }
      function Se(e) {
        const { curator: t } = e,
          { creatorHome: r } = (0, E.FV)(t?.clanAccountID);
        return t && r
          ? (0, n.jsx)(s.Ii, {
              href: r.GetCreatorHomeURL(null),
              children: (0, n.jsx)("img", { src: t.avatar_medium_url }),
            })
          : null;
      }
      function Me(e) {
        const { lifetimePlaytime: t, storeItem: r } = e,
          i = (0, H.DJ)(r);
        return (0, n.jsx)("div", {
          className: be().SimilarAppCtn,
          children: (0, n.jsx)(Z.Q, {
            id: i,
            bHidePrice: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: { minWidth: "320px", zIndex: 5e3 },
            },
            children: (0, n.jsx)("img", {
              className: be().SimilarAppImg,
              alt: r.GetName(),
              src: r.GetAssets().GetSmallCapsuleURL(),
            }),
          }),
        });
      }
      function xe(e) {
        const { arrSteamIDs: t, count: r, locToken: i, bShowAvatars: s } = e;
        return r
          ? 1 != r || s
            ? (0, n.jsx)(Ae, {
                header: (0, B.um)(
                  i,
                  r,
                  (0, n.jsx)("span", { className: be().RelevantTextBold }),
                ),
                children:
                  s &&
                  t.length > 0 &&
                  (0, n.jsx)("div", {
                    className: be().FriendAvatarsCtn,
                    children:
                      1 == r
                        ? (0, n.jsx)(Ie, { steamid: t[0] })
                        : (0, n.jsx)(Re, { arrSteamIDs: t }),
                  }),
              })
            : (0, n.jsx)(Ae, {
                header: (0, B.PP)(
                  i + "_Single",
                  (0, n.jsx)(je, { steamid: t[0] }),
                ),
              })
          : null;
      }
      function je(e) {
        const { steamid: t } = e,
          { data: r } = (0, he.js)(t);
        return r && r.m_bInitialized
          ? (0, n.jsx)("span", {
              "data-miniprofile": "s" + r.m_steamid.ConvertTo64BitString(),
              className: be().RelevantTextBold,
              children: r.m_strPlayerName,
            })
          : null;
      }
      function Re(e) {
        const { arrSteamIDs: t } = e,
          r = (0, he.DW)(t);
        return (0, n.jsx)(n.Fragment, {
          children: r.map(
            ({ data: e }) =>
              e &&
              (0, n.jsx)(
                O.i8,
                {
                  "data-miniprofile": "s" + e.m_steamid.ConvertTo64BitString(),
                  persona: e,
                  size: "Small",
                  statusPosition: "right",
                },
                e.m_steamid.ConvertTo64BitString(),
              ),
          ),
        });
      }
      function Ie(e) {
        const { steamid: t } = e,
          { data: r } = (0, he.js)(t);
        return r
          ? (0, n.jsxs)(a.Z, {
              className: be().FriendBlockCtn,
              "data-miniprofile": "s" + t,
              children: [
                (0, n.jsx)(O.i8, {
                  persona: r,
                  size: "Small",
                  statusPosition: "right",
                }),
                (0, n.jsx)(P.D, {
                  className: be().PersonaStatus,
                  persona: r,
                  eFriendRelationship: 3,
                  bIsSelf: !1,
                  strNickname: null,
                  bParenthesizeNicknames: !1,
                  bCompactView: !1,
                  bNoMask: !0,
                }),
              ],
            })
          : null;
      }
      function Ae(e) {
        const { children: t, header: r } = e;
        return (0, n.jsxs)("div", {
          className: be().RelevantItem,
          children: [
            (0, n.jsx)("div", {
              className: be().RelevantCheck,
              children: (0, n.jsx)(h.Jlk, {}),
            }),
            (0, n.jsxs)("div", {
              className: be().RelevantColumn,
              children: [
                (0, n.jsx)("div", {
                  className: be().ReleventText,
                  children: r,
                }),
                t,
              ],
            }),
          ],
        });
      }
      var De = r(43188),
        Te = r(24267),
        ze = r(35380);
      new v.wd("DiscoveryQueueApp").Debug;
      function Ce(e) {
        const {
            appID: t,
            nItemHeight: r,
            nItemWidth: s,
            selected: o,
            fnFocused: l,
            eStoreDiscoveryQueueType: c,
            storePageFilter: d,
            bPreferDemoStorePage: u,
            elVideo: p,
            elDetails: g,
            appAriaIDs: w,
          } = e,
          [h] = (0, b.t7)(t, De.Gy),
          _ = (0, x.Qn)(),
          y = (0, m.R7)(),
          v = y?.ownerWindow || window,
          S = Fe(h, c, d, u),
          { bIsIgnored: M, fnUpdateIgnored: j } = (0, De.TK)(t),
          { bIsWishlisted: R, fnUpdateWishlist: I } = (0, De.u4)(t),
          A = i.useRef(void 0);
        if (
          (i.useEffect(() => {
            o && A.current && A.current.focus({ preventScroll: !0 });
          }, [o]),
          !h)
        )
          return console.warn("Error: missing store item for appid ", t), null;
        const D = { width: s || void 0, height: r || void 0 };
        return (0, n.jsxs)(a.Z, {
          "aria-labelledby": (0, C.q)(
            w.nameId,
            w.tagsId,
            w.reviewId,
            w.relevanceId,
            w.buttonsId,
          ),
          ref: A,
          style: D,
          className: (0, f.A)(be().DiscoveryQueueApp, o && be().Selected),
          onOptionsActionDescription: R
            ? (0, B.we)("#DiscoveryQueue_RemoveFromWishlist")
            : (0, B.we)("#DiscoveryQueue_AddToWishlist"),
          onOptionsButton: I,
          onOKActionDescription: (0, B.we)("#DiscoveryQueue_ViewStorePage"),
          onOKButton: () => {
            v.location.href = S;
          },
          onSecondaryActionDescription: M
            ? (0, B.we)("#DiscoveryQueue_Undo")
            : (0, B.we)("#DiscoveryQueue_IgnoreLink"),
          onSecondaryButton: j,
          fnScrollIntoViewHandler: () => (l(), !0),
          children: [
            (0, n.jsx)("div", {
              className: (0, f.A)(be().IgnoredCtn, M && be().Active),
              children: (0, n.jsxs)("div", {
                className: (0, f.A)(be().IgnoredInfo, M && be().Active),
                children: [
                  (0, n.jsx)("div", {
                    className: be().IgnoredTitle,
                    children: (0, B.we)("#DiscoveryQueue_Ignored"),
                  }),
                  (0, n.jsx)("div", {
                    className: be().IgnoredDescription,
                    children: (0, B.we)("#DiscoveryQueue_IgnoredConfirmation"),
                  }),
                  (0, n.jsxs)(a.Z, {
                    className: (0, f.A)(
                      be().QueueButton,
                      be().UndoIgnoreButton,
                    ),
                    onClick: j,
                    children: [
                      _ &&
                        (0, n.jsx)(N.$m, {
                          button: W.g4.X,
                          type: N.wt.Light,
                          size: N.xY.Medium,
                        }),
                      (0, B.we)("#DiscoveryQueue_Undo"),
                    ],
                  }),
                ],
              }),
            }),
            p,
            g,
          ],
        });
      }
      function Fe(e, t, r, n) {
        const s = (0, u.n9)();
        return i.useMemo(() => {
          if (!e) return;
          const i = (0, j.Bk)(r),
            a = t >= 0 ? "?inqueue=" + t + (r ? "_" + i : "") : "",
            o = (0, u.bV)(s, e.GetStorePageURL(n) + a);
          return (0, U.NT)(o);
        }, [n, t, s, e, r]);
      }
      function Ne(e) {
        const {
            appID: t,
            bShowMinimizedDisplay: r,
            eStoreDiscoveryQueueType: i,
            storePageFilter: s,
            bPreferDemoStorePage: o,
            appAriaIDs: l,
          } = e,
          [c] = (0, b.t7)(t, De.Gy),
          d = (0, ze.$5)(t),
          { bIsIgnored: u, fnUpdateIgnored: m } = (0, De.TK)(t),
          { bIsWishlisted: p, fnUpdateWishlist: g } = (0, De.u4)(t),
          w = Fe(c, i, s, o),
          _ = (0, x.Qn)(),
          y = _;
        if (!c) return;
        const v = c.GetAssets().GetLibraryCapsuleURL(),
          S = c.GetAssets().GetHeaderURL();
        return (0, n.jsxs)(a.Z, {
          className: be().AppDetailsCtn,
          children: [
            (0, n.jsxs)("div", {
              className: be().AppDetailsCtnTop,
              children: [
                v &&
                  (0, n.jsxs)("a", {
                    className: (0, f.A)(be().CapsuleLink),
                    href: w,
                    children: [
                      (0, n.jsx)("img", {
                        className: be().AppLibraryHero,
                        src: v,
                      }),
                      S &&
                        (0, n.jsx)("img", {
                          className: be().AppHeader,
                          src: S,
                        }),
                    ],
                  }),
                (0, n.jsxs)("div", {
                  id: l.nameId,
                  className: be().RightColumn,
                  children: [
                    (0, n.jsx)("a", {
                      className: (0, f.A)(be().AppName),
                      href: w,
                      children: c.GetName(),
                    }),
                    (0, n.jsx)(F.N, { bSingleLineMode: !0, id: d }),
                  ],
                }),
                (0, n.jsx)(qe, {
                  rgTagIDs: c.GetTagIDs(),
                  ariaLabelID: l.tagsId,
                }),
                (0, n.jsx)("div", {
                  className: be().AppReviews,
                  id: l.reviewId,
                  children: (0, n.jsx)(Te.J, {
                    bShowTooltip: !0,
                    bTruncateTotalReviews: r,
                    id: d,
                  }),
                }),
                (0, n.jsx)("div", {
                  id: l.relevanceId,
                  className: be().AppRelevanceCtn,
                  children: (0, n.jsx)(Be, {
                    bHideDescription: _,
                    bShowAvatars: !r,
                    storeItem: c,
                    appID: t,
                  }),
                }),
              ],
            }),
            !_ &&
              (0, n.jsx)("div", {
                className: be().AppActionButtonsCtn,
                children: (0, n.jsx)("div", {
                  id: l.buttonsId,
                  className: be().AppActionJustButtonsCtn,
                  children: (0, n.jsxs)("div", {
                    className: be().ButtonsRowWrap,
                    children: [
                      c.BHasDemo() &&
                        (0, n.jsx)(Q.j, {
                          id: d,
                          className: (0, f.A)(
                            be().QueueButton,
                            be().Primary,
                            be().Launch,
                          ),
                        }),
                      (0, n.jsxs)("a", {
                        className: (0, f.A)(be().QueueButton, be().Primary),
                        href: w,
                        children: [
                          y &&
                            (0, n.jsx)(N.$m, {
                              button: W.g4.Y,
                              type: N.wt.Light,
                              size: N.xY.Medium,
                              additionalClassName: be().YGlyph,
                            }),
                          " ",
                          (0, B.we)("#DiscoveryQueue_ViewStorePage"),
                        ],
                      }),
                      (0, n.jsx)(q.he, {
                        toolTipContent: p
                          ? (0, B.we)("#RemoveFromWishlist_ttip")
                          : (0, B.we)("#AddToWishlist_ttip"),
                        children: (0, n.jsxs)(a.Z, {
                          "aria-label": p
                            ? (0, B.we)("#Sale_RemoveFromWishlist")
                            : (0, B.we)("#Sale_AddToWishlist"),
                          focusable: !0,
                          className: (0, f.A)(
                            be().QueueButton,
                            p && be().Active,
                          ),
                          onClick: g,
                          children: [
                            y &&
                              (0, n.jsx)(N.$m, {
                                button: W.g4.Y,
                                type: N.wt.Light,
                                size: N.xY.Medium,
                                additionalClassName: be().YGlyph,
                              }),
                            p ? (0, n.jsx)(h.qnF, {}) : (0, n.jsx)(h.T4m, {}),
                          ],
                        }),
                      }),
                      (0, n.jsx)(q.he, {
                        toolTipContent: (0, B.we)(
                          "#SaleTrailerCarousel_IgnoreLink_ttip",
                        ),
                        children: (0, n.jsx)(a.Z, {
                          "aria-label": (0, B.we)("#DiscoveryQueue_IgnoreLink"),
                          focusable: !0,
                          className: (0, f.A)(
                            be().QueueButton,
                            u && be().Active,
                          ),
                          onClick: m,
                          children: (0, n.jsx)(h.NtH, {}),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
          ],
        });
      }
      function qe(e) {
        const { rgTagIDs: t, ariaLabelID: r } = e,
          i = [...(0, De.W3)(t)].slice(0, 8);
        return (0, n.jsx)("div", {
          id: r,
          role: "list",
          className: be().AppTagsCtn,
          children: i.map((e) =>
            (0, n.jsx)(z.Fz, { className: be().TagEntry, tagID: e }, e),
          ),
        });
      }
      var Ue = r(60884),
        We = r(90511),
        Qe = r(17376);
      const Ge = new v.wd("DiscoveryQueueWizard").Debug,
        Oe = 1,
        Pe = 1400,
        ke = "discoveryqueue2022";
      async function Le(e, t, r, i) {
        let n = [],
          s = !1;
        try {
          const { appids: a, exhausted: o } = await j.aI
            .Get()
            .GetDiscoveryQueueAppsOfType(e, t, i);
          (n = [...a]),
            (s = o),
            r && -1 === n.findIndex((e) => e === r) && n.unshift(r),
            await w.A.Get().QueueMultipleAppRequests(n, { ...De.Gy, ...We.LB });
        } catch (e) {
          console.error("Failed getting discovery queue apps", e);
        }
        return { appids: n, exhausted: s };
      }
      function Ee(e) {
        const [t, r] = i.useState(!1),
          s = (0, c.KV)();
        return (
          (0, i.useEffect)(() => {
            j.aI.Init(s), r(!0);
          }, [s]),
          t ? (0, n.jsx)(He, { ...e }) : null
        );
      }
      function He(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            includeAppID: o,
            storePageFilter: c,
            bPreferDemoStorePage: g,
            bShowAOAutoPlayWarning: w,
          } = e,
          [b, v] = i.useState(0),
          [R, I] = i.useState(void 0),
          [A, D] = i.useState(0),
          z = (0, m.R7)(),
          C = z?.ownerWindow || window,
          F = (0, u.ru)(ke),
          [N, q] = i.useState(0),
          W = (0, d.b)();
        (0, M.E)("ArrowLeft", () => P(!1), !0, !0),
          (0, M.E)("Left", () => P(!1), !0, !0),
          (0, M.E)("ArrowRight", () => P(!0), !0, !0),
          (0, M.E)("Right", () => P(!0), !0, !0),
          (0, M.E)("Escape", () => r?.(), !0, !0),
          (0, M.E)("Esc", () => r?.(), !0, !0);
        const Q = i.useMemo(() => Boolean(C.innerWidth < Pe), [C]),
          { fnGetDiscoveryQueue: G, rgAppIDs: O } = (function (e, t, r) {
            const [n, s] = i.useState([]),
              a = (0, y.m)("DiscoveryQueueWizard"),
              o = async (i) => {
                let { appids: o } = await Le(e, !i, i && r, t);
                if (i && !o.length) {
                  let { appids: r } = await Le(e, !0, void 0, t);
                  o = r;
                }
                if (!a?.token?.reason) {
                  const e = [...(n ?? []), ...o, Oe];
                  s(e);
                }
                Ge("Loaded new discovery queue apps: ", o);
              };
            return { fnGetDiscoveryQueue: o, rgAppIDs: n };
          })(t, c, o);
        i.useEffect(() => {
          G(!0), p.Fm.Get().HintLoad();
        }, []),
          i.useEffect(() => {
            const e = O[b];
            e != R && (e && e != Oe && W.AddImpression(e, F), I(e));
          }, [W, b, R, O, F]);
        const P = (e) => {
          const t = S.OQ(b + (e ? 1 : -1), 0, O.length - 1);
          t != b &&
            (v(t), Ge("New selected index: ", t, " Prev selected index: ", b));
        };
        i.useEffect(() => {
          O?.length &&
            O[b] !== Oe &&
            (q((e) => e + 1),
            j.aI
              .Get()
              .SkipDiscoveryQueueItem(O[b], t, c)
              .then(() => q((e) => e - 1)));
        }, [t, b, O, c]),
          i.useEffect(() => {
            O.length != A &&
              (D(O.length), O.length > A && O[b] == Oe && v(b + 1));
          }, [A, b, O]);
        const [k] = i.useState(new Map()),
          L = (0, j.WX)(t, c),
          E = !(0, T.c5)() && b > 0,
          H = !(0, T.c5)() && b < O.length - 1,
          {
            refContainer: Z,
            bIsDragging: V,
            nDragOffset: K,
            nDragSelectedOffsetIndex: Y,
            handleTouchStart: X,
            handleTouchMove: $,
            handleTouchEnd: J,
          } = (function (e, t) {
            const r = i.useRef(null),
              [n, s] = i.useState(0),
              [a, o] = i.useState(!1),
              [l, c] = i.useState(0),
              d = i.useRef(0),
              u = 50,
              m = (e) => {
                o(!0), (d.current = e.touches[0].clientX), s(0), c(0);
              },
              p = (e) => {
                if (!a) return;
                const t = e.touches[0].clientX - d.current;
                s(t), c(n > u ? 1 : n < -u ? -1 : 0);
              },
              g = () => {
                a &&
                  (o(!1),
                  n > u
                    ? e((e) => Math.max(e - 1, 0))
                    : n < -u && e((e) => Math.min(e + 1, t - 1)),
                  s(0),
                  c(0));
              };
            return {
              refContainer: r,
              bIsDragging: a,
              nDragOffset: n,
              nDragSelectedOffsetIndex: l,
              handleTouchStart: m,
              handleTouchMove: p,
              handleTouchEnd: g,
            };
          })((e) => v(e), O.length),
          ee = (e) => S.W(b + e, O) && (S.LA(e, -1, 1) || V),
          te = (0, u.aL)(x.TS.STORE_BASE_URL + "explore?dq=widget"),
          re = O[b] !== Oe,
          { nQueueStart: ie, nCount: ne } = (function (e, t) {
            let r = 0;
            for (let i = 0; i < e; i++) t[i] == Oe && (r = i + 1);
            let i = 0;
            for (let r = e; r < t.length; r++) {
              if (t[r] == Oe) {
                i = r;
                break;
              }
              r == t.length - 1 && (i = t.length);
            }
            const n = i - r;
            return { nQueueStart: r, nQueueEnd: i, nCount: n };
          })(b, O);
        return (0, n.jsx)(_.Ay, {
          feature: ke,
          children: (0, n.jsx)(a.Z, {
            role: "dialog",
            focusable: !1,
            "flow-children": "column",
            className: be().DiscoveryQueueCarouselCtn,
            navEntryPreferPosition: l.iU.LAST,
            onCancelButton: () => r?.(),
            onCancelActionDescription: (0, B.we)("#Button_Close"),
            children: (0, n.jsxs)("div", {
              className: be().DiscoveryQueueWrapper,
              onClick: (e) => {
                e.target == e.currentTarget && (r?.(), e.stopPropagation());
              },
              children: [
                L.length > 0 &&
                  (0, n.jsx)(a.Z, {
                    "flow-children": "row",
                    className: be().DiscoveryQueueName,
                    children: L,
                  }),
                (0, n.jsxs)(a.Z, {
                  "flow-children": "row",
                  className: be().TopBarCtn,
                  children: [
                    (0, n.jsx)(a.Z, {
                      className: be().LearnMore,
                      children: (0, B.oW)(
                        "#DiscoveryQueue_LearnMore_Default",
                        (0, n.jsx)(s.Ii, {
                          className: be().LearnMoreLink,
                          href: (0, U.NT)(te),
                        }),
                      ),
                    }),
                    (0, n.jsx)(a.Z, {
                      className: be().ControlsCtn,
                      children: (0, n.jsx)(a.Z, {
                        focusable: !0,
                        className: be().QueueButton,
                        onClick: r,
                        "aria-label": (0, B.we)("#Button_Close"),
                        onActivate: () => r && r(),
                        children: (0, n.jsx)(h.X, {}),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(a.Z, {
                  role: "button",
                  "aria-label": (0, B.we)("#Carousel_Next"),
                  onClick: () => P(!1),
                  className: (0, f.A)(
                    be().QueueNavArrow,
                    be().LeftArrow,
                    E && be().Enable,
                  ),
                  children: (0, n.jsx)(h.l8x, { angle: 180 }),
                }),
                (0, n.jsx)(a.Z, {
                  role: "button",
                  "aria-label": (0, B.we)("#Carousel_Prev"),
                  onClick: () => P(!0),
                  className: (0, f.A)(
                    be().QueueNavArrow,
                    be().RightArrow,
                    H && be().Enable,
                  ),
                  children: (0, n.jsx)(h.l8x, { angle: 0 }),
                }),
                (0, n.jsx)(a.Z, {
                  ref: Z,
                  className: be().DiscoveryQueueItemsCtn,
                  focusable: !1,
                  onTouchStart: X,
                  onTouchMove: $,
                  onTouchEnd: J,
                  children: [-2, -1, 0, 1, 2].map((e) =>
                    (0, n.jsx)(
                      "div",
                      {
                        className: (0, f.A)({
                          [be().DiscoveryQueueItemPositioner]: !0,
                          [be().Dragging]: V,
                          [be().InRange]: ee(e),
                          [be().FarLeft]: -2 == e,
                          [be().Left]: -1 == e,
                          [be().Current]: 0 == e,
                          [be().Right]: 1 == e,
                          [be().FarRight]: 2 == e,
                          [be().Selected]: e + Y == 0,
                        }),
                        style: { "--dragOffsetX": `${K}px` },
                        children:
                          ee(e) &&
                          (0, n.jsx)(Ze, {
                            eStoreDiscoveryQueueType: t,
                            storePageFilter: c,
                            rgAppIDs: O,
                            index: b + e,
                            bShowMinimizedDisplay: Q,
                            selectedIndex: b,
                            bPreferDemoStorePage: Boolean(g),
                            mapViewedAppCount: k,
                            fnCloseModal: r,
                            fnLoadNextQueue: () => G(!1),
                            fnAdvance: P,
                            bSkipAppRequestPending: Boolean(0 != N),
                            showAOAutoPlayWarning: Boolean(w),
                          }),
                      },
                      b + e,
                    ),
                  ),
                }),
                (0, n.jsx)(Ue.A, {
                  className: (0, f.A)(!re && be().ProgressHidden),
                  showPriorAsActive: !0,
                  count: ne,
                  selectedIndex: b - ie,
                }),
              ],
            }),
          }),
        });
      }
      function Ze(e) {
        const {
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            rgAppIDs: s,
            index: a,
            bShowMinimizedDisplay: o,
            selectedIndex: l,
            bPreferDemoStorePage: c,
            mapViewedAppCount: d,
            fnCloseModal: u,
            fnLoadNextQueue: m,
            fnAdvance: p,
            bSkipAppRequestPending: g,
            showAOAutoPlayWarning: w,
          } = e,
          [b, h] = i.useState(!1),
          _ = {
            nameId: i.useId(),
            tagsId: i.useId(),
            reviewId: i.useId(),
            relevanceId: i.useId(),
            buttonsId: i.useId(),
          },
          y = () => {
            l != a && p(a > l);
          },
          f = l === a,
          B = i.useRef(f);
        if (
          (i.useEffect(() => {
            const e = B.current;
            if (((B.current = f), e && !f)) {
              h(!0);
              const e = setTimeout(() => h(!1), 500);
              return () => {
                clearTimeout(e);
              };
            }
          }, [f]),
          s[a] == Oe)
        ) {
          let n = 0;
          for (let e = a - 1; e >= 0; e--) s[e] == Oe && (n += 1);
          let o = 0;
          for (let e = a - 1; e >= 0 && s[e] !== Oe; e--) o++;
          return (
            d.has(n) ||
              d.set(n, j.aI.Get().GetTotalSkippedAppsForDiscoveryQueue(t, r)),
            (0, i.createElement)(Ve, {
              ...e,
              key: l,
              selected: f,
              lastCard: l == s.length - 1,
              fnLoadNextQueue: m,
              fnCloseModal: u,
              summaryCardIndex: n,
              eStoreDiscoveryQueueType: t,
              viewedAppCount: (d.get(n) || 0) + o,
              fnFocused: y,
              fnAdvance: () => p(!0),
              bSkipAppRequestPending: g,
            })
          );
        }
        const v = f || B.current || b;
        return (0, n.jsx)(Ce, {
          appAriaIDs: _,
          eStoreDiscoveryQueueType: t,
          storePageFilter: r,
          selected: f,
          appID: s[a],
          bPreferDemoStorePage: c,
          fnFocused: y,
          elVideo: (0, n.jsx)(De.y3, {
            appID: s[a],
            focused: v,
            showAOAutoPlayWarning: w,
          }),
          elDetails: (0, n.jsx)(Ne, {
            appID: s[a],
            bShowMinimizedDisplay: o,
            eStoreDiscoveryQueueType: t,
            storePageFilter: r,
            bPreferDemoStorePage: c,
            appAriaIDs: _,
          }),
        });
      }
      function Ve(e) {
        const {
            eStoreDiscoveryQueueType: t,
            fnCloseModal: r,
            summaryCardIndex: s,
            lastCard: o,
            selected: l,
            fnLoadNextQueue: c,
            storePageFilter: d,
            fnDisplaySummaryReward: m,
            viewedAppCount: w,
            fnFocused: b,
            fnAdvance: h,
            bSkipAppRequestPending: _,
          } = e,
          [v, S] = i.useState(!1),
          M = (0, x.Qn)(),
          R = (0, g.Qt)(2, x.TS.LANGUAGE, !1),
          [I, A] = i.useState(0),
          [D, T] = i.useState(0),
          { data: z } = (0, Qe.F0)();
        i.useEffect(() => {
          l &&
            !v &&
            z &&
            p.Fm.Get()
              .HintLoad()
              .then(() => {
                j.aI
                  .Get()
                  .LoadSkippedApps(t, d)
                  .then((e) => {
                    A(e.reduce((e, t) => (z.has(t) ? e + 1 : e), 0)),
                      T(
                        e.reduce(
                          (e, t) => (p.Fm.Get().BIsGameIgnored(t) ? e + 1 : e),
                          0,
                        ),
                      ),
                      S(!0);
                  });
              });
        }, [v, t, l, d, z]);
        const [C, F] = i.useState(!1),
          N = (0, j.IH)(t, d),
          q = (0, y.m)("DiscoveryQueueSummary"),
          W = async () => {
            o ? C || (F(!0), await c(), q?.token?.reason || F(!1)) : h();
          };
        return (0, n.jsxs)(Ke, {
          selected: l,
          fnFocused: b,
          fnOnContinue: W,
          fnCloseModal: r,
          bLoaded: v,
          children: [
            (0, n.jsxs)("div", {
              className: be().SummaryContentCtn,
              children: [
                (0, n.jsx)("div", {
                  className: be().SummaryTitle,
                  children: (0, B.we)("#DiscoveryQueue_SummaryTitle"),
                }),
                !N &&
                  l &&
                  R.data?.definition &&
                  (0, n.jsx)(Xe, {
                    bSkipAppRequestPending: _,
                    summaryCardIdx: s,
                  }),
                (0, n.jsx)("div", {
                  className: be().YourStats,
                  children: (0, B.we)("#DiscoveryQueue_YourStats"),
                }),
                (0, n.jsxs)(a.Z, {
                  "flow-children": "row",
                  className: be().SummaryGrid,
                  children: [
                    (0, n.jsxs)("div", {
                      className: be().GridItem,
                      children: [
                        (0, n.jsx)("div", {
                          className: be().GridTitle,
                          children: (0, B.we)("#DiscoveryQueue_ViewedCaps"),
                        }),
                        (0, n.jsx)("div", {
                          className: be().GridNumber,
                          children: (0, ye.D)(w),
                        }),
                        (0, n.jsx)("div", {
                          className: be().GridSubTitle,
                          children: (0, B.we)("#DiscoveryQueue_Titles"),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: be().GridItem,
                      children: [
                        (0, n.jsx)("div", {
                          className: be().GridTitle,
                          children: (0, B.we)("#DiscoveryQueue_WishlistedCaps"),
                        }),
                        (0, n.jsx)("div", {
                          className: be().GridNumber,
                          children: (0, ye.D)(I),
                        }),
                        (0, n.jsx)(u.Fh, {
                          className: (0, f.A)(be().GridSubTitle, be().TextLink),
                          href: (0, U.NT)(x.TS.STORE_BASE_URL + "wishlist"),
                          children: (0, B.we)("#DiscoveryQueue_ViewWishlist"),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: be().GridItem,
                      children: [
                        (0, n.jsx)("div", {
                          className: be().GridTitle,
                          children: (0, B.we)("#DiscoveryQueue_IgnoredCaps"),
                        }),
                        (0, n.jsx)("div", {
                          className: be().GridNumber,
                          children: (0, ye.D)(D),
                        }),
                        (0, n.jsx)(u.Fh, {
                          className: (0, f.A)(be().GridSubTitle, be().TextLink),
                          href: (0, U.NT)(
                            x.TS.STORE_BASE_URL + "account/notinterested",
                          ),
                          children: (0, B.we)("#DiscoveryQueue_ViewIgnored"),
                        }),
                      ],
                    }),
                  ],
                }),
                !M &&
                  (0, n.jsxs)(a.Z, {
                    className: be().SummaryActionButtonsCtn,
                    children: [
                      (0, n.jsx)(a.Z, {
                        className: (0, f.A)(be().QueueButton, be().Wide),
                        onClick: r,
                        children: (0, B.we)("#ActionButtonLabelDone"),
                      }),
                      !N &&
                        (0, n.jsx)(a.Z, {
                          className: (0, f.A)(
                            C && be().Disabled,
                            be().QueueButton,
                            be().Primary,
                            be().Wide,
                          ),
                          onClick: W,
                          children: C
                            ? (0, B.we)("#Loading")
                            : (0, B.we)("#Button_Continue"),
                        }),
                    ],
                  }),
              ],
            }),
            Boolean(!N) &&
              (0, n.jsx)(n.Fragment, { children: Boolean(m) && m(s + 1) }),
          ],
        });
      }
      function Ke(e) {
        const {
            children: t,
            selected: r,
            fnOnContinue: s,
            fnCloseModal: a,
            fnFocused: l,
            bLoaded: c,
          } = e,
          d = (0, u.aL)(x.TS.STORE_BASE_URL + "wishlist"),
          p = (0, m.R7)(),
          g = p?.ownerWindow || window,
          w = i.useRef(void 0);
        return (
          i.useEffect(() => {
            r && w.current && w.current.focus({ preventScroll: !0 });
          }, [r]),
          (0, n.jsx)(o.YZ, {
            ref: w,
            "aria-live": "polite",
            className: (0, f.A)(
              be().SummaryCtn,
              be().DiscoveryQueueApp,
              r && be().Selected,
            ),
            onOptionsActionDescription: (0, B.we)(
              "#DiscoveryQueue_ViewWishlist",
            ),
            onOptionsButton: () => {
              g.location.href = (0, U.NT)(d);
            },
            onOKActionDescription: (0, B.we)("#Button_Continue"),
            onOKButton: () => {
              s();
            },
            onCancelActionDescription: (0, B.we)("#ActionButtonLabelDone"),
            onCancelButton: () => a && a(),
            fnScrollIntoViewHandler: () => (l(), !0),
            children: c
              ? t
              : (0, n.jsx)(D.t, {
                  className: be().DiscoveryQueueThrobber,
                  msDelayAppear: 200,
                  size: "large",
                  position: "center",
                }),
          })
        );
      }
      function Ye() {
        return (0, n.jsx)(a.Z, {
          className: be().SaleRewardsCtn,
          children: (0, n.jsx)(D.t, { size: "large", position: "center" }),
        });
      }
      function Xe(e) {
        const { bSkipAppRequestPending: t, summaryCardIdx: r } = e;
        return t ? (0, n.jsx)(Ye, {}) : (0, n.jsx)($e, { summaryCardIdx: r });
      }
      function $e(e) {
        const { summaryCardIdx: t } = e,
          r = (0, g.os)(2, x.TS.LANGUAGE, !1, t.toString()),
          [i] = (0, b.t7)(r?.data?.current_def?.appid, {}),
          s = (0, x.Qn)();
        if (!r?.data?.current_def || !i?.GetName().length)
          return (0, n.jsx)(Ye, {});
        const o = r.data.num_items_earned,
          l = r.data.current_def.num_items_per_def,
          c = l - o,
          d = (o / l) * 100;
        return (0, n.jsxs)(a.Z, {
          className: be().SaleRewardsCtn,
          children: [
            (0, n.jsx)(I, { nPercent: d, size: 70, strokeWidth: 12 }),
            (0, n.jsxs)(a.Z, {
              className: be().RewardStatusCtn,
              children: [
                (0, n.jsx)("div", {
                  className: be().SaleRewardAppTitle,
                  children: (0, B.we)(
                    "#DiscoveryQueue_SaleStatus_Title" + (c ? "" : "_Complete"),
                    (0, ye.D)(o),
                    i.GetName(),
                  ),
                }),
                c > 0 &&
                  (0, n.jsx)("div", {
                    className: be().SaleRewardAppTitle,
                    children: (0, B.we)(
                      "#DiscoveryQueue_SaleStatus_Desc",
                      (0, ye.D)(c),
                      i.GetName(),
                    ),
                  }),
                !s &&
                  (0, n.jsx)("a", {
                    href: (0, U.NT)(
                      x.TS.COMMUNITY_BASE_URL + "my/itemcollection",
                    ),
                    children: (0, B.we)("#DiscoveryQueue_SaleStatus_Link"),
                  }),
              ],
            }),
          ],
        });
      }
    },
    47554: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => h });
      var i = r(7850),
        n = r(90626),
        s = r(12447),
        a = r(76217),
        o = r(39199),
        l = r(55263),
        c = r(95034),
        d = r(12155),
        u = r(26749),
        m = r(61859),
        p = r(71109),
        g = r.n(p),
        w = r(78327),
        b = r(90511);
      function h(e) {
        const { appID: t } = e,
          r = (0, u.G)(),
          [p] = (0, c.QD)("inqueue", "0"),
          [h, _] = (0, n.useState)(!1),
          [y] = (0, l.t7)(t, { include_assets: !0 }),
          f = n.useRef(void 0);
        n.useEffect(() => f.current?.Activate(!0), []);
        const B = (0, w.Qn)(),
          { eStoreDiscoveryQueueType: v, storePageFilter: S } =
            n.useMemo(() => {
              if (p?.length > 0) {
                const e = p.split("_"),
                  t = Number(e[0]);
                let r;
                return (
                  e.length > 1 && (r = (0, o.bz)(e[1])),
                  { eStoreDiscoveryQueueType: t, storePageFilter: r }
                );
              }
              return { eStoreDiscoveryQueueType: 0, storePageFilter: void 0 };
            }, [p]),
          { showDiscoveryQueue: M } = (0, b.GV)(v, {
            includeAppID: t,
            storePageFilter: S,
          }),
          x = n.useCallback(() => {
            _(!0);
          }, []),
          j = (0, o.WX)(v, S);
        return r && y
          ? h
            ? null
            : (0, i.jsx)(s.u, {
                navTreeRef: f,
                navID: "DiscoveryQueueAppWidget",
                children: (0, i.jsxs)(a.Z, {
                  focusable: !0,
                  className: g().DiscoveryQueueWidgetCtn,
                  onSecondaryButton: x,
                  onOKButton: M,
                  onOKActionDescription: (0, m.we)(
                    "#DiscoveryQueue_ResumeWizard",
                  ),
                  onSecondaryActionDescription: (0, m.we)("#Button_Close"),
                  children: [
                    (0, i.jsxs)("div", {
                      onClick: M,
                      className: g().WidgetText,
                      children: [
                        (0, i.jsx)(d.mcU, {}),
                        (0, m.we)("#DiscoveryQueue_ResumeWizard"),
                        j?.length > 0 && ": " + j,
                      ],
                    }),
                    !B &&
                      (0, i.jsx)("div", {
                        className: g().CloseButton,
                        onClick: x,
                        children: (0, i.jsx)(d.X, {}),
                      }),
                  ],
                }),
              })
          : null;
      }
    },
    6804: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => o });
      var i = r(7850),
        n = r(12447),
        s = r(96236),
        a = r(38405);
      function o() {
        return (0, i.jsx)(s.K, {
          placeholderHeight: "200px",
          rootMargin: "0px 0px 100% 0px",
          children: (0, i.jsx)(n.u, {
            navID: "DiscoveryQueueWidget",
            children: (0, i.jsx)(a.g, { eStoreDiscoveryQueueType: 0 }),
          }),
        });
      }
    },
    25054: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => m });
      var i = r(7850),
        n = r(90626),
        s = r(61859),
        a = r(26749),
        o = r(76217),
        l = r(78327),
        c = r(51706),
        d = r(738),
        u = r(90511);
      function m(e) {
        const t = (0, a.G)(),
          { showDiscoveryQueue: r } = (0, u.GV)(0),
          m = n.useCallback(() => {
            l.iA.logged_in
              ? r()
              : (0, d.pg)(
                  (0, i.jsx)(c.KG, {
                    onOK: () => {
                      window.location.href = `${l.TS.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
                    },
                    strOKButtonText: (0, s.we)(
                      "#DiscoveryQueue_Error_Login_Title",
                    ),
                    strDescription: (0, s.we)("#DiscoveryQueue_Error_Login"),
                    strTitle: (0, s.we)("#DiscoveryQueue_Error_Login_Title"),
                  }),
                  window,
                );
          }, [r]);
        return t
          ? (0, i.jsx)(o.Z, {
              children: (0, i.jsx)("a", {
                onClick: m,
                className: "experiment-button",
                children: (0, s.we)("#DiscoveryQueue_OpenWizard"),
              }),
            })
          : (0, i.jsx)("div", {
              className: "experiment-button-placeholder",
              children: " ",
            });
      }
    },
  },
]);
