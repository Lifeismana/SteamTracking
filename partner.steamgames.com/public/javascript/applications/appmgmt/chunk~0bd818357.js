/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [3388],
    {
      70512: (Ir, Qr, Fr) => {
        "use strict";
        Fr.d(Qr, {
          $J: () => s,
          pS: () => e,
          BL: () => M,
          Gr: () => d,
          J6: () => W,
          KP: () => O,
          jd: () => Vr,
          ku: () => j,
          fe: () => z,
          QV: () => Lr,
          Xm: () => vr,
          nd: () => Dr,
        });
        var Lr = {};
        Fr.r(Lr),
          Fr.d(Lr, {
            nC: () => Rr,
            Dx: () => _r,
            Ht: () => Cr,
            Y0: () => ri,
            lA: () => ii,
          });
        var vr = {};
        Fr.r(vr), Fr.d(vr, { d: () => ni, ok: () => ti, ex: () => ai });
        var t = Fr(80613),
          n = Fr.n(t),
          i = Fr(75245),
          f = Fr(35038),
          kr = Fr(13707),
          Ar = Fr(44420),
          qr = Fr(47997);
        const Oi = 0,
          ei = 1,
          hi = 2,
          Ei = 3,
          xi = 5,
          Fi = 6,
          Rr = 7,
          Cr = 8,
          Ni = 9,
          Zi = 10,
          Ui = 11,
          Vi = 12,
          _r = 13,
          ri = 14,
          ii = 15,
          Ji = 16,
          Xi = 1,
          Yi = 2,
          Ki = 3,
          $i = 4,
          Ti = 5,
          Hi = 6,
          ki = 7,
          Li = 8,
          vi = 9,
          Ii = 10,
          Qi = 11,
          Ai = 12,
          qi = 13,
          Di = 14,
          pi = 15,
          Pi = 16,
          Si = 17,
          Gi = 18,
          oi = 19,
          Ri = 20,
          Ci = 1e3,
          _i = 1001,
          ra = 1002,
          ia = 1003,
          ai = 1004,
          ni = 1005,
          ti = 1006,
          aa = 1007,
          na = 1008,
          ta = 1009;
        function la(B) {
          return "unknown EUserTagReportType ( " + B + " )";
        }
        function Ba(B) {
          return "unknown EStoreDiscoveryQueueType ( " + B + " )";
        }
        function ma(B) {
          return "unknown ENewReleaseNotificationState ( " + B + " )";
        }
        function ca(B) {
          return "unknown ENewReleaseNotificationType ( " + B + " )";
        }
        function ba(B) {
          return (
            "unknown EForceFeatureNotificationTargetSelection ( " + B + " )"
          );
        }
        function fa(B) {
          return (
            "unknown EForceFeatureNotificationAdditionalFilters ( " + B + " )"
          );
        }
        function wa(B) {
          return "unknown EDiscoveryQueueExperimentalCohort ( " + B + " )";
        }
        function da(B) {
          return "unknown EFeaturedAppType ( " + B + " )";
        }
        function Ma(B) {
          return "unknown EFeaturedAppBonusRoundGrantReason ( " + B + " )";
        }
        function za(B) {
          return "unknown EPlaytestStatus ( " + B + " )";
        }
        function ua(B) {
          return "unknown EAppReportType ( " + B + " )";
        }
        function ga(B) {
          return "unknown EUserReviewScorePreference ( " + B + " )";
        }
        function ya(B) {
          return "unknown EStoreUsabilityEvent ( " + B + " )";
        }
        function ja(B) {
          return "unknown EStoreUsabilityFrontPageScroll ( " + B + " )";
        }
        function sa(B) {
          return "unknown EPartnerLinkTrackingStoreLocation ( " + B + " )";
        }
        function Wa(B) {
          return "unknown EPartnerLinkTrackingBackfillSource ( " + B + " )";
        }
        function Oa(B) {
          return "unknown EPlaytestInviteStatus ( " + B + " )";
        }
        function ea(B) {
          return "unknown EPlaytestMembershipSource ( " + B + " )";
        }
        function ha(B) {
          return "unknown EPlaytestResetStatus ( " + B + " )";
        }
        function Ea(B) {
          return "unknown EPlaytestLicenseChangeType ( " + B + " )";
        }
        class h extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.activation_code || i.Sg(h.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    activation_code: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    purchase_platform: {
                      n: 2,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    is_request_from_client: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = i.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(h.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new h();
            return h.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(h.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(h.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_RegisterCDKey_Request";
          }
        }
        class E extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.transactionid || i.Sg(E.M()),
              t.Message.initialize(this, r, 0, -1, [18], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    transactionid: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    packageid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    purchase_status: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    result_detail: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    transaction_time: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    payment_method: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    base_price: {
                      n: 7,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    total_discount: {
                      n: 8,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    tax: {
                      n: 9,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    shipping: {
                      n: 10,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    currency_code: {
                      n: 11,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    country_code: {
                      n: 12,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    error_headline: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    error_string: {
                      n: 14,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    error_link_text: {
                      n: 15,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    error_link_url: {
                      n: 16,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    error_appid: {
                      n: 17,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    line_items: { n: 18, c: x, r: !0, q: !0 },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = i.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(E.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new E();
            return E.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(E.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(E.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_PurchaseReceiptInfo";
          }
        }
        class x extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.packageid || i.Sg(x.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    packageid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    line_item_description: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = i.w0(x.M())), x.sm_mbf;
          }
          toObject(r = !1) {
            return x.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(x.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new x();
            return x.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(x.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(x.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_PurchaseReceiptInfo_LineItem";
          }
        }
        class F extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.purchase_result_details || i.Sg(F.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    purchase_result_details: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    purchase_receipt_info: { n: 2, c: E },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = i.w0(F.M())), F.sm_mbf;
          }
          toObject(r = !1) {
            return F.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(F.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new F();
            return F.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(F.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(F.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_RegisterCDKey_Response";
          }
        }
        class N extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              N.prototype.language || i.Sg(N.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    language: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    country_code: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    favor_rarer_tags: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = i.w0(N.M())), N.sm_mbf;
          }
          toObject(r = !1) {
            return N.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(N.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(N.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new N();
            return N.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(N.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return N.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(N.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetRecommendedTagsForUser_Request";
          }
        }
        class Z extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Z.prototype.tags || i.Sg(Z.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Z.sm_m ||
                (Z.sm_m = {
                  proto: Z,
                  fields: { tags: { n: 1, c: U, r: !0, q: !0 } },
                }),
              Z.sm_m
            );
          }
          static MBF() {
            return Z.sm_mbf || (Z.sm_mbf = i.w0(Z.M())), Z.sm_mbf;
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Z.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Z();
            return Z.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetRecommendedTagsForUser_Response";
          }
        }
        class U extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              U.prototype.tagid || i.Sg(U.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    tagid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    weight: { n: 3, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = i.w0(U.M())), U.sm_mbf;
          }
          toObject(r = !1) {
            return U.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(U.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(U.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new U();
            return U.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(U.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return U.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(U.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetRecommendedTagsForUser_Response_Tag";
          }
        }
        class V extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              V.prototype.language || i.Sg(V.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
          }
          toObject(r = !1) {
            return V.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(V.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(V.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new V();
            return V.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(V.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return V.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(V.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetMostPopularTags_Request";
          }
        }
        class J extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              J.prototype.tags || i.Sg(J.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: { tags: { n: 1, c: X, r: !0, q: !0 } },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = i.w0(J.M())), J.sm_mbf;
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(J.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(J.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new J();
            return J.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(J.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(J.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetMostPopularTags_Response";
          }
        }
        class X extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              X.prototype.tagid || i.Sg(X.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    tagid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = i.w0(X.M())), X.sm_mbf;
          }
          toObject(r = !1) {
            return X.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(X.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(X.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new X();
            return X.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(X.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return X.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(X.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetMostPopularTags_Response_Tag";
          }
        }
        class Y extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Y.prototype.language || i.Sg(Y.M()),
              t.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    tagids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = i.w0(Y.M())), Y.sm_mbf;
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Y.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Y();
            return Y.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetLocalizedNameForTags_Request";
          }
        }
        class K extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              K.prototype.tags || i.Sg(K.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              K.sm_m ||
                (K.sm_m = {
                  proto: K,
                  fields: { tags: { n: 1, c: $, r: !0, q: !0 } },
                }),
              K.sm_m
            );
          }
          static MBF() {
            return K.sm_mbf || (K.sm_mbf = i.w0(K.M())), K.sm_mbf;
          }
          toObject(r = !1) {
            return K.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(K.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(K.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new K();
            return K.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(K.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return K.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(K.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetLocalizedNameForTags_Response";
          }
        }
        class $ extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              $.prototype.tagid || i.Sg($.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    tagid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    english_name: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    name: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                    normalized_name: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = i.w0($.M())), $.sm_mbf;
          }
          toObject(r = !1) {
            return $.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT($.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq($.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new $();
            return $.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj($.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return $.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0($.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetLocalizedNameForTags_Response_Tag";
          }
        }
        class d extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              d.prototype.language || i.Sg(d.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    language: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    have_version_hash: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = i.w0(d.M())), d.sm_mbf;
          }
          toObject(r = !1) {
            return d.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(d.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(d.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new d();
            return d.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(d.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return d.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(d.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetTagList_Request";
          }
        }
        class T extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.version_hash || i.Sg(T.M()),
              t.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    version_hash: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    tags: { n: 2, c: H, r: !0, q: !0 },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(T.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new T();
            return T.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(T.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(T.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetTagList_Response";
          }
        }
        class H extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              H.prototype.tagid || i.Sg(H.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    tagid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = i.w0(H.M())), H.sm_mbf;
          }
          toObject(r = !1) {
            return H.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(H.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(H.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new H();
            return H.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(H.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return H.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(H.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetTagList_Response_Tag";
          }
        }
        class w extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.os_win || i.Sg(w.M()),
              t.Message.initialize(this, r, 0, -1, [10, 16], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    os_win: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    os_mac: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                    os_linux: { n: 6, br: i.qM.readBool, bw: i.gp.writeBool },
                    full_controller_support: {
                      n: 7,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    native_steam_controller: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    include_coming_soon: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    excluded_tagids: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    exclude_early_access: {
                      n: 11,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    exclude_videos: {
                      n: 12,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    exclude_software: {
                      n: 13,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    exclude_dlc: {
                      n: 14,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    exclude_soundtracks: {
                      n: 15,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    featured_tagids: {
                      n: 16,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = i.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(w.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new w();
            return w.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(w.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(w.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreDiscoveryQueueSettings";
          }
        }
        class M extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.queue_type || i.Sg(M.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    queue_type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    country_code: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    rebuild_queue: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    settings_changed: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    settings: { n: 5, c: w },
                    rebuild_queue_if_stale: {
                      n: 6,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    ignore_user_preferences: {
                      n: 8,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    no_experimental_results: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    experimental_cohort: {
                      n: 10,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    debug_get_solr_query: {
                      n: 11,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    store_page_filter: { n: 12, c: kr.S7 },
                    context: { n: 13, c: Ar.TS },
                    data_request: { n: 14, c: Ar.gn },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = i.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(M.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new M();
            return M.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(M.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(M.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetDiscoveryQueue_Request";
          }
        }
        class k extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              k.prototype.appids || i.Sg(k.M()),
              t.Message.initialize(this, r, 0, -1, [1, 8], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    country_code: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    settings: { n: 3, c: w },
                    skipped: { n: 4, br: i.qM.readInt32, bw: i.gp.writeInt32 },
                    exhausted: { n: 5, br: i.qM.readBool, bw: i.gp.writeBool },
                    experimental_cohort: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    debug_solr_query: {
                      n: 7,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    store_items: { n: 8, c: Ar.vB, r: !0, q: !0 },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
          }
          toObject(r = !1) {
            return k.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(k.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(k.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new k();
            return k.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(k.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return k.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(k.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetDiscoveryQueue_Response";
          }
        }
        class L extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              L.prototype.queue_type || i.Sg(L.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    queue_type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    store_page_filter: { n: 2, c: kr.S7 },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = i.w0(L.M())), L.sm_mbf;
          }
          toObject(r = !1) {
            return L.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(L.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(L.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new L();
            return L.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(L.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return L.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(L.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetDiscoveryQueueSettings_Request";
          }
        }
        class v extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.country_code || i.Sg(v.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    country_code: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    settings: { n: 2, c: w },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(v.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new v();
            return v.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(v.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(v.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetDiscoveryQueueSettings_Response";
          }
        }
        class z extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.queue_type || i.Sg(z.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    queue_type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    store_page_filter: { n: 3, c: kr.S7 },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = i.w0(z.M())), z.sm_mbf;
          }
          toObject(r = !1) {
            return z.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(z.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new z();
            return z.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(z.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(z.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SkipDiscoveryQueueItem_Request";
          }
        }
        class Jr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Jr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Jr();
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Jr();
            return Jr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SkipDiscoveryQueueItem_Response";
          }
        }
        class I extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              I.prototype.appid || i.Sg(I.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    store_appid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    beta_appid: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = i.w0(I.M())), I.sm_mbf;
          }
          toObject(r = !1) {
            return I.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(I.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(I.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new I();
            return I.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(I.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return I.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(I.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserGameInterestState_Request";
          }
        }
        class Q extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Q.prototype.owned || i.Sg(Q.M()),
              t.Message.initialize(this, r, 0, -1, [5, 6, 7, 8, 10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    owned: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    wishlist: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    ignored: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                    following: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                    in_queues: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    queues_with_skip: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: i.qM.readEnum,
                      pbr: i.qM.readPackedEnum,
                      bw: i.gp.writeRepeatedEnum,
                    },
                    queue_items_remaining: {
                      n: 7,
                      r: !0,
                      q: !0,
                      br: i.qM.readInt32,
                      pbr: i.qM.readPackedInt32,
                      bw: i.gp.writeRepeatedInt32,
                    },
                    queue_items_next_appid: {
                      n: 8,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    temporarily_owned: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    queues: { n: 10, c: A, r: !0, q: !0 },
                    ignored_reason: {
                      n: 11,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    beta_status: {
                      n: 12,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = i.w0(Q.M())), Q.sm_mbf;
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Q.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Q();
            return Q.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserGameInterestState_Response";
          }
        }
        class A extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              A.prototype.type || i.Sg(A.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    skipped: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                    items_remaining: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    next_appid: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    experimental_cohort: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = i.w0(A.M())), A.sm_mbf;
          }
          toObject(r = !1) {
            return A.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(A.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(A.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new A();
            return A.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(A.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return A.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(A.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetUserGameInterestState_Response_InQueue";
          }
        }
        class q extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              q.prototype.steamid || i.Sg(q.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = i.w0(q.M())), q.sm_mbf;
          }
          toObject(r = !1) {
            return q.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(q.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(q.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new q();
            return q.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(q.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(q.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetGamesFollowed_Request";
          }
        }
        class D extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              D.prototype.appids || i.Sg(D.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = i.w0(D.M())), D.sm_mbf;
          }
          toObject(r = !1) {
            return D.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(D.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(D.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new D();
            return D.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(D.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return D.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(D.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetGamesFollowed_Response";
          }
        }
        class p extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              p.prototype.steamid || i.Sg(p.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
          }
          toObject(r = !1) {
            return p.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(p.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(p.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new p();
            return p.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(p.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return p.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(p.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetGamesFollowedCount_Request";
          }
        }
        class P extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.followed_game_count || i.Sg(P.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    followed_game_count: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = i.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(P.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new P();
            return P.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(P.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(P.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetGamesFollowedCount_Response";
          }
        }
        class S extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              S.prototype.appid || i.Sg(S.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    report_type: {
                      n: 2,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    report: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
          }
          toObject(r = !1) {
            return S.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(S.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(S.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new S();
            return S.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(S.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return S.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(S.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_ReportApp_Request";
          }
        }
        class Xr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Xr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Xr();
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Xr();
            return Xr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_ReportApp_Response";
          }
        }
        class u extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.primary_language || i.Sg(u.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    primary_language: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    secondary_languages: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    platform_windows: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    platform_mac: {
                      n: 4,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    platform_linux: {
                      n: 5,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    timestamp_updated: {
                      n: 8,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    hide_store_broadcast: {
                      n: 9,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    review_score_preference: {
                      n: 10,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    timestamp_content_descriptor_preferences_updated: {
                      n: 11,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    provide_deck_feedback: {
                      n: 12,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    additional_languages: {
                      n: 13,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    game_frame_rate_reporting: {
                      n: 14,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                    disable_microtrailers: {
                      n: 15,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    disable_animated_marketing: {
                      n: 16,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(u.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new u();
            return u.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(u.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(u.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_UserPreferences";
          }
        }
        class g extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              g.prototype.tags_to_exclude || i.Sg(g.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: { tags_to_exclude: { n: 1, c: G, r: !0, q: !0 } },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = i.w0(g.M())), g.sm_mbf;
          }
          toObject(r = !1) {
            return g.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(g.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(g.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new g();
            return g.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(g.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return g.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(g.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_UserTagPreferences";
          }
        }
        class G extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              G.prototype.tagid || i.Sg(G.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    tagid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    name: { n: 2, br: i.qM.readString, bw: i.gp.writeString },
                    timestamp_added: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = i.w0(G.M())), G.sm_mbf;
          }
          toObject(r = !1) {
            return G.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(G.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(G.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new G();
            return G.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(G.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return G.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(G.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_UserTagPreferences_Tag";
          }
        }
        class o extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              o.prototype.country_code || i.Sg(o.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    country_code: {
                      n: 1,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
          }
          toObject(r = !1) {
            return o.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(o.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(o.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new o();
            return o.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(o.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return o.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(o.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetStorePreferences_Request";
          }
        }
        class R extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              R.prototype.preferences || i.Sg(R.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    preferences: { n: 1, c: u },
                    tag_preferences: { n: 2, c: g },
                    content_descriptor_preferences: { n: 3, c: qr.u2 },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
          }
          toObject(r = !1) {
            return R.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(R.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(R.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new R();
            return R.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(R.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return R.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(R.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetStorePreferences_Response";
          }
        }
        class C extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              C.prototype.num_apps || i.Sg(C.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    num_apps: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    num_top_friends: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
          }
          toObject(r = !1) {
            return C.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(C.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(C.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new C();
            return C.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(C.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return C.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(C.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetTrendingAppsAmongFriends_Request";
          }
        }
        class _ extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              _.prototype.trending_apps || i.Sg(_.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: { trending_apps: { n: 1, c: rr, r: !0, q: !0 } },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
          }
          toObject(r = !1) {
            return _.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(_.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(_.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new _();
            return _.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(_.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return _.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(_.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetTrendingAppsAmongFriends_Response";
          }
        }
        class rr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              rr.prototype.appid || i.Sg(rr.M()),
              t.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    steamids_top_friends: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                    total_friends: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = i.w0(rr.M())), rr.sm_mbf;
          }
          toObject(r = !1) {
            return rr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(rr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(rr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new rr();
            return rr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(rr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(rr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
          }
        }
        class ir extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ir.prototype.packages_to_reserve || i.Sg(ir.M()),
              t.Message.initialize(this, r, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    packages_to_reserve: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    packages_to_unreserve: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                    country_code: {
                      n: 3,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = i.w0(ir.M())), ir.sm_mbf;
          }
          toObject(r = !1) {
            return ir.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ir.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ir.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new ir();
            return ir.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ir.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ir.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_UpdatePackageReservations_Request";
          }
        }
        class ar extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ar.prototype.reservation_status || i.Sg(ar.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    reservation_status: { n: 1, c: qr.ke, r: !0, q: !0 },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = i.w0(ar.M())), ar.sm_mbf;
          }
          toObject(r = !1) {
            return ar.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ar.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ar.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new ar();
            return ar.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ar.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ar.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_UpdatePackageReservations_Response";
          }
        }
        class y extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.edistributor || i.Sg(y.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    edistributor: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    product_identifier: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    start_queue_position: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_estimated_notification: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    localization_token: {
                      n: 5,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    accountid: {
                      n: 6,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    rtime_created: {
                      n: 7,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
          }
          toObject(r = !1) {
            return y.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(y.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new y();
            return y.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(y.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(y.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CReservationPositionMessage";
          }
        }
        class j extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.settings || i.Sg(j.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: { settings: { n: 1, c: y, r: !0, q: !0 } },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = i.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(j.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new j();
            return j.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(j.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(j.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetReservationPositionMessage_Request";
          }
        }
        class Yr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Yr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Yr();
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Yr();
            return Yr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_SetReservationPositionMessage_Response";
          }
        }
        class s extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              s.prototype.edistributor || i.Sg(s.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
                  fields: {
                    edistributor: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    product_identifier: {
                      n: 2,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                    start_queue_position: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = i.w0(s.M())), s.sm_mbf;
          }
          toObject(r = !1) {
            return s.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(s.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(s.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new s();
            return s.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(s.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return s.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(s.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_DeleteReservationPositionMessage_Request";
          }
        }
        class Kr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Kr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Kr();
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Kr();
            return Kr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Kr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Kr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_DeleteReservationPositionMessage_Response";
          }
        }
        class $r extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return $r.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new $r();
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new $r();
            return $r.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return $r.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              $r.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetAllReservationPositionMessages_Request";
          }
        }
        class nr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              nr.prototype.settings || i.Sg(nr.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nr.sm_m ||
                (nr.sm_m = {
                  proto: nr,
                  fields: { settings: { n: 1, c: y, r: !0, q: !0 } },
                }),
              nr.sm_m
            );
          }
          static MBF() {
            return nr.sm_mbf || (nr.sm_mbf = i.w0(nr.M())), nr.sm_mbf;
          }
          toObject(r = !1) {
            return nr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(nr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(nr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new nr();
            return nr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(nr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return nr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(nr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              nr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetAllReservationPositionMessages_Response";
          }
        }
        class Vr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Vr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Vr();
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Vr();
            return Vr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_ReloadAllReservationPositionMessages_Notification";
          }
        }
        class tr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              tr.prototype.accountid || i.Sg(tr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    accountid: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    browserid: {
                      n: 2,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    backfill_source: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = i.w0(tr.M())), tr.sm_mbf;
          }
          toObject(r = !1) {
            return tr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(tr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(tr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new tr();
            return tr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(tr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(tr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_MigratePartnerLinkTracking_Notification";
          }
        }
        class lr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              lr.prototype.appid || i.Sg(lr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lr.sm_m ||
                (lr.sm_m = {
                  proto: lr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    feedback: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    feedback_details: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              lr.sm_m
            );
          }
          static MBF() {
            return lr.sm_mbf || (lr.sm_mbf = i.w0(lr.M())), lr.sm_mbf;
          }
          toObject(r = !1) {
            return lr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(lr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(lr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new lr();
            return lr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(lr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(lr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamDeckCompatibility_SetFeedback_Request";
          }
        }
        class Tr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Tr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Tr();
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Tr();
            return Tr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamDeckCompatibility_SetFeedback_Response";
          }
        }
        class Br extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Br.prototype.appid || i.Sg(Br.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = i.w0(Br.M())), Br.sm_mbf;
          }
          toObject(r = !1) {
            return Br.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Br.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Br();
            return Br.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamDeckCompatibility_ShouldPrompt_Request";
          }
        }
        class mr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              mr.prototype.prompt || i.Sg(mr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    prompt: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                    feedback_eligible: {
                      n: 2,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    existing_feedback: {
                      n: 3,
                      br: i.qM.readEnum,
                      bw: i.gp.writeEnum,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = i.w0(mr.M())), mr.sm_mbf;
          }
          toObject(r = !1) {
            return mr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(mr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new mr();
            return mr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamDeckCompatibility_ShouldPrompt_Response";
          }
        }
        class W extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.appid || i.Sg(W.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    demo_appid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    allow_late_firing: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              W.sm_m
            );
          }
          static MBF() {
            return W.sm_mbf || (W.sm_mbf = i.w0(W.M())), W.sm_mbf;
          }
          toObject(r = !1) {
            return W.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(W.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new W();
            return W.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(W.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(W.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetWishlistDemoEmailStatus_Request";
          }
        }
        class cr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              cr.prototype.can_fire || i.Sg(cr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    can_fire: {
                      n: 1,
                      d: !1,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                    time_staged: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    demo_release_date: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = i.w0(cr.M())), cr.sm_mbf;
          }
          toObject(r = !1) {
            return cr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(cr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(cr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new cr();
            return cr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(cr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(cr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetWishlistDemoEmailStatus_Response";
          }
        }
        class O extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.appid || i.Sg(O.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    demo_appid: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    allow_late_firing: {
                      n: 3,
                      br: i.qM.readBool,
                      bw: i.gp.writeBool,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = i.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(O.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new O();
            return O.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(O.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(O.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_QueueWishlistDemoEmailToFire_Request";
          }
        }
        class Hr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Hr.toObject(r, this);
          }
          static toObject(r, a) {
            return r ? { $jspbMessageInstance: a } : {};
          }
          static fromObject(r) {
            return new Hr();
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Hr();
            return Hr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return r;
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {}
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_QueueWishlistDemoEmailToFire_Response";
          }
        }
        class e extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              e.prototype.steamid || i.Sg(e.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    steamid: {
                      n: 1,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    queue_type: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    store_page_filter: { n: 3, c: kr.S7 },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = i.w0(e.M())), e.sm_mbf;
          }
          toObject(r = !1) {
            return e.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(e.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(e.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new e();
            return e.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(e.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(e.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetDiscoveryQueueSkippedApps_Request";
          }
        }
        class br extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              br.prototype.appids || i.Sg(br.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = i.w0(br.M())), br.sm_mbf;
          }
          toObject(r = !1) {
            return br.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(br.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(br.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new br();
            return br.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(br.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return br.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(br.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_GetDiscoveryQueueSkippedApps_Response";
          }
        }
        class fr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              fr.prototype.preferences || i.Sg(fr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    preferences: { n: 1, c: u },
                    tag_preferences: { n: 2, c: g },
                    content_descriptor_preferences: { n: 3, c: qr.u2 },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = i.w0(fr.M())), fr.sm_mbf;
          }
          toObject(r = !1) {
            return fr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(fr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(fr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new fr();
            return fr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(fr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(fr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CStore_StorePreferencesChanged_Notification";
          }
        }
        class wr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              wr.prototype.appid || i.Sg(wr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = i.w0(wr.M())), wr.sm_mbf;
          }
          toObject(r = !1) {
            return wr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(wr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new wr();
            return wr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_RequestInvite_Request";
          }
        }
        class dr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              dr.prototype.invites_remaining || i.Sg(dr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    invites_remaining: {
                      n: 1,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    status: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = i.w0(dr.M())), dr.sm_mbf;
          }
          toObject(r = !1) {
            return dr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(dr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(dr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new dr();
            return dr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(dr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(dr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_RequestInvite_Response";
          }
        }
        class Mr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Mr.prototype.invite_ids || i.Sg(Mr.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mr.sm_m ||
                (Mr.sm_m = {
                  proto: Mr,
                  fields: {
                    invite_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint64String,
                      pbr: i.qM.readPackedUint64String,
                      bw: i.gp.writeRepeatedUint64String,
                    },
                    status: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  },
                }),
              Mr.sm_m
            );
          }
          static MBF() {
            return Mr.sm_mbf || (Mr.sm_mbf = i.w0(Mr.M())), Mr.sm_mbf;
          }
          toObject(r = !1) {
            return Mr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Mr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Mr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Mr();
            return Mr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Mr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Mr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_UpdateInvites_Request";
          }
        }
        class zr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              zr.prototype.invites_updated || i.Sg(zr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: {
                    invites_updated: {
                      n: 1,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = i.w0(zr.M())), zr.sm_mbf;
          }
          toObject(r = !1) {
            return zr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(zr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(zr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new zr();
            return zr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(zr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(zr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_UpdateInvites_Response";
          }
        }
        class ur extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              ur.prototype.invite_id || i.Sg(ur.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    invite_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = i.w0(ur.M())), ur.sm_mbf;
          }
          toObject(r = !1) {
            return ur.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(ur.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(ur.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new ur();
            return ur.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(ur.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(ur.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetInvites_Request";
          }
        }
        class gr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              gr.prototype.invites || i.Sg(gr.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: { invites: { n: 1, c: yr, r: !0, q: !0 } },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = i.w0(gr.M())), gr.sm_mbf;
          }
          toObject(r = !1) {
            return gr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(gr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(gr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new gr();
            return gr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(gr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(gr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetInvites_Response";
          }
        }
        class yr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              yr.prototype.invite_id || i.Sg(yr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yr.sm_m ||
                (yr.sm_m = {
                  proto: yr,
                  fields: {
                    invite_id: {
                      n: 1,
                      br: i.qM.readUint64String,
                      bw: i.gp.writeUint64String,
                    },
                    appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    steamid_inviter: {
                      n: 3,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    status: { n: 4, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    time_created: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    app_name: {
                      n: 6,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              yr.sm_m
            );
          }
          static MBF() {
            return yr.sm_mbf || (yr.sm_mbf = i.w0(yr.M())), yr.sm_mbf;
          }
          toObject(r = !1) {
            return yr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(yr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(yr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new yr();
            return yr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(yr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(yr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetInvites_Response_Invite";
          }
        }
        class jr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              jr.prototype.limit || i.Sg(jr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    limit: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    time_before: {
                      n: 2,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = i.w0(jr.M())), jr.sm_mbf;
          }
          toObject(r = !1) {
            return jr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(jr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(jr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new jr();
            return jr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(jr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(jr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetInviteHistory_Request";
          }
        }
        class sr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              sr.prototype.invites || i.Sg(sr.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: { invites: { n: 1, c: Wr, r: !0, q: !0 } },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = i.w0(sr.M())), sr.sm_mbf;
          }
          toObject(r = !1) {
            return sr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(sr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(sr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new sr();
            return sr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(sr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(sr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetInviteHistory_Response";
          }
        }
        class Wr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Wr.prototype.appid || i.Sg(Wr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wr.sm_m ||
                (Wr.sm_m = {
                  proto: Wr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    steamid_invited: {
                      n: 2,
                      br: i.qM.readFixed64String,
                      bw: i.gp.writeFixed64String,
                    },
                    time_created: {
                      n: 3,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    app_name: {
                      n: 4,
                      br: i.qM.readString,
                      bw: i.gp.writeString,
                    },
                  },
                }),
              Wr.sm_m
            );
          }
          static MBF() {
            return Wr.sm_mbf || (Wr.sm_mbf = i.w0(Wr.M())), Wr.sm_mbf;
          }
          toObject(r = !1) {
            return Wr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Wr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Wr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Wr();
            return Wr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Wr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Wr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Wr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Wr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetInviteHistory_Response_Invite";
          }
        }
        class Or extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Or.prototype.appid || i.Sg(Or.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = i.w0(Or.M())), Or.sm_mbf;
          }
          toObject(r = !1) {
            return Or.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Or.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Or.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Or();
            return Or.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Or.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Or.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetUserStatus_Request";
          }
        }
        class er extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              er.prototype.results || i.Sg(er.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: { results: { n: 1, c: hr, r: !0, q: !0 } },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = i.w0(er.M())), er.sm_mbf;
          }
          toObject(r = !1) {
            return er.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(er.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new er();
            return er.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetUserStatus_Response";
          }
        }
        class hr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              hr.prototype.appid || i.Sg(hr.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                    status: { n: 2, br: i.qM.readEnum, bw: i.gp.writeEnum },
                    invites_remaining: {
                      n: 3,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                    time_joined: {
                      n: 4,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    packageid: {
                      n: 5,
                      br: i.qM.readUint32,
                      bw: i.gp.writeUint32,
                    },
                    invites_sent: {
                      n: 6,
                      br: i.qM.readInt32,
                      bw: i.gp.writeInt32,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = i.w0(hr.M())), hr.sm_mbf;
          }
          toObject(r = !1) {
            return hr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(hr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(hr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new hr();
            return hr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(hr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(hr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetUserStatus_Response_AppStatus";
          }
        }
        class Er extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              Er.prototype.appid || i.Sg(Er.M()),
              t.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    appid: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = i.w0(Er.M())), Er.sm_mbf;
          }
          toObject(r = !1) {
            return Er.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(Er.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(Er.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new Er();
            return Er.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(Er.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(Er.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetInviteOptions_Request";
          }
        }
        class xr extends t.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              xr.prototype.ineligible_friends || i.Sg(xr.M()),
              t.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xr.sm_m ||
                (xr.sm_m = {
                  proto: xr,
                  fields: {
                    ineligible_friends: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: i.qM.readUint32,
                      pbr: i.qM.readPackedUint32,
                      bw: i.gp.writeRepeatedUint32,
                    },
                  },
                }),
              xr.sm_m
            );
          }
          static MBF() {
            return xr.sm_mbf || (xr.sm_mbf = i.w0(xr.M())), xr.sm_mbf;
          }
          toObject(r = !1) {
            return xr.toObject(r, this);
          }
          static toObject(r, a) {
            return i.BT(xr.M(), r, a);
          }
          static fromObject(r) {
            return i.Uq(xr.M(), r);
          }
          static deserializeBinary(r) {
            let a = new (n().BinaryReader)(r),
              l = new xr();
            return xr.deserializeBinaryFromReader(l, a);
          }
          static deserializeBinaryFromReader(r, a) {
            return i.zj(xr.MBF(), r, a);
          }
          serializeBinary() {
            var r = new (n().BinaryWriter)();
            return xr.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, a) {
            i.i0(xr.M(), r, a);
          }
          serializeBase64String() {
            var r = new (n().BinaryWriter)();
            return (
              xr.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytest_GetInviteOptions_Response";
          }
        }
        var Dr;
        ((B) => {
          function r(m, c, b) {
            return m.SendMsg("Store.RegisterCDKey#1", (0, f.I8)(h, c, b), F, {
              ePrivilege: 1,
            });
          }
          B.RegisterCDKey = r;
          function a(m, c, b) {
            return m.SendMsg(
              "Store.GetRecommendedTagsForUser#1",
              (0, f.I8)(N, c, b),
              Z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetRecommendedTagsForUser = a;
          function l(m, c, b) {
            return m.SendMsg(
              "Store.GetMostPopularTags#1",
              (0, f.I8)(V, c, b),
              J,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          B.GetMostPopularTags = l;
          function pr(m, c, b) {
            return m.SendMsg(
              "Store.GetLocalizedNameForTags#1",
              (0, f.I8)(Y, c, b),
              K,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          B.GetLocalizedNameForTags = pr;
          function Pr(m, c, b) {
            return m.SendMsg("Store.GetTagList#1", (0, f.I8)(d, c, b), T, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }
          B.GetTagList = Pr;
          function Sr(m, c, b) {
            return m.SendMsg(
              "Store.GetDiscoveryQueue#1",
              (0, f.I8)(M, c, b),
              k,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetDiscoveryQueue = Sr;
          function Nr(m, c, b) {
            return m.SendMsg(
              "Store.GetDiscoveryQueueSettings#1",
              (0, f.I8)(L, c, b),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetDiscoveryQueueSettings = Nr;
          function Zr(m, c, b) {
            return m.SendMsg(
              "Store.SkipDiscoveryQueueItem#1",
              (0, f.I8)(z, c, b),
              Jr,
              { ePrivilege: 1 },
            );
          }
          B.SkipDiscoveryQueueItem = Zr;
          function Ur(m, c, b) {
            return m.SendMsg(
              "Store.GetUserGameInterestState#1",
              (0, f.I8)(I, c, b),
              Q,
              { ePrivilege: 1 },
            );
          }
          B.GetUserGameInterestState = Ur;
          function li(m, c, b) {
            return m.SendMsg(
              "Store.GetGamesFollowed#1",
              (0, f.I8)(q, c, b),
              D,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          B.GetGamesFollowed = li;
          function Bi(m, c, b) {
            return m.SendMsg(
              "Store.GetGamesFollowedCount#1",
              (0, f.I8)(p, c, b),
              P,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          B.GetGamesFollowedCount = Bi;
          function mi(m, c, b) {
            return m.SendMsg(
              "Store.GetDiscoveryQueueSkippedApps#1",
              (0, f.I8)(e, c, b),
              br,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetDiscoveryQueueSkippedApps = mi;
          function ci(m, c, b) {
            return m.SendMsg("Store.ReportApp#1", (0, f.I8)(S, c, b), Xr, {
              ePrivilege: 3,
            });
          }
          B.ReportApp = ci;
          function bi(m, c, b) {
            return m.SendMsg(
              "Store.GetStorePreferences#1",
              (0, f.I8)(o, c, b),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetStorePreferences = bi;
          function fi(m, c, b) {
            return m.SendMsg(
              "Store.GetTrendingAppsAmongFriends#1",
              (0, f.I8)(C, c, b),
              _,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          B.GetTrendingAppsAmongFriends = fi;
          function wi(m, c) {
            return m.SendNotification(
              "Store.MigratePartnerLinkTracking#1",
              (0, f.I8)(tr, c),
              { ePrivilege: 1 },
            );
          }
          B.MigratePartnerLinkTracking = wi;
          function di(m, c, b) {
            return m.SendMsg(
              "Store.UpdatePackageReservations#1",
              (0, f.I8)(ir, c, b),
              ar,
              { ePrivilege: 1 },
            );
          }
          B.UpdatePackageReservations = di;
          function Mi(m, c, b) {
            return m.SendMsg(
              "Store.GetWishlistDemoEmailStatus#1",
              (0, f.I8)(W, c, b),
              cr,
              { ePrivilege: 1 },
            );
          }
          B.GetWishlistDemoEmailStatus = Mi;
          function zi(m, c, b) {
            return m.SendMsg(
              "Store.QueueWishlistDemoEmailToFire#1",
              (0, f.I8)(O, c, b),
              Hr,
              { ePrivilege: 1 },
            );
          }
          B.QueueWishlistDemoEmailToFire = zi;
          function ui(m, c, b) {
            return m.SendMsg(
              "Store.SetReservationPositionMessage#1",
              (0, f.I8)(j, c, b),
              Yr,
              { ePrivilege: 4 },
            );
          }
          B.SetReservationPositionMessage = ui;
          function gi(m, c, b) {
            return m.SendMsg(
              "Store.DeleteReservationPositionMessage#1",
              (0, f.I8)(s, c, b),
              Kr,
              { ePrivilege: 4 },
            );
          }
          B.DeleteReservationPositionMessage = gi;
          function yi(m, c, b) {
            return m.SendMsg(
              "Store.GetAllReservationPositionMessages#1",
              (0, f.I8)($r, c, b),
              nr,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          B.GetAllReservationPositionMessages = yi;
          function ji(m, c) {
            return m.SendNotification(
              "Store.ReloadAllReservationPositionMessages#1",
              (0, f.I8)(Vr, c),
              { ePrivilege: 4 },
            );
          }
          B.ReloadAllReservationPositionMessages = ji;
          function si(m, c, b) {
            return m.SendMsg(
              "Store.SetCompatibilityFeedback#1",
              (0, f.I8)(lr, c, b),
              Tr,
              { ePrivilege: 1 },
            );
          }
          B.SetCompatibilityFeedback = si;
          function Wi(m, c, b) {
            return m.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              (0, f.I8)(Br, c, b),
              mr,
              { ePrivilege: 1 },
            );
          }
          B.ShouldPromptForCompatibilityFeedback = Wi;
        })(Dr || (Dr = {}));
        var Gr;
        ((B) => {
          B.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: fr,
          };
        })(Gr || (Gr = {}));
        var or;
        ((B) => {
          function r(Nr, Zr, Ur) {
            return Nr.SendMsg(
              "Playtest.RequestInvite#1",
              (0, f.I8)(wr, Zr, Ur),
              dr,
              { ePrivilege: 1 },
            );
          }
          B.RequestInvite = r;
          function a(Nr, Zr, Ur) {
            return Nr.SendMsg(
              "Playtest.UpdateInvites#1",
              (0, f.I8)(Mr, Zr, Ur),
              zr,
              { ePrivilege: 1 },
            );
          }
          B.UpdateInvites = a;
          function l(Nr, Zr, Ur) {
            return Nr.SendMsg(
              "Playtest.GetInvites#1",
              (0, f.I8)(ur, Zr, Ur),
              gr,
              { ePrivilege: 1 },
            );
          }
          B.GetInvites = l;
          function pr(Nr, Zr, Ur) {
            return Nr.SendMsg(
              "Playtest.GetInviteHistory#1",
              (0, f.I8)(jr, Zr, Ur),
              sr,
              { ePrivilege: 1 },
            );
          }
          B.GetInviteHistory = pr;
          function Pr(Nr, Zr, Ur) {
            return Nr.SendMsg(
              "Playtest.GetUserStatus#1",
              (0, f.I8)(Or, Zr, Ur),
              er,
              { ePrivilege: 1 },
            );
          }
          B.GetUserStatus = Pr;
          function Sr(Nr, Zr, Ur) {
            return Nr.SendMsg(
              "Playtest.GetInviteOptions#1",
              (0, f.I8)(Er, Zr, Ur),
              xr,
              { ePrivilege: 1 },
            );
          }
          B.GetInviteOptions = Sr;
        })(or || (or = {}));
      },
      47689: (Ir, Qr, Fr) => {
        "use strict";
        Fr.d(Qr, { m: () => n });
        var Lr = Fr(41735),
          vr = Fr.n(Lr),
          t = Fr(90626);
        function n(i) {
          const f = t.useRef(vr().CancelToken.source());
          return (
            t.useEffect(() => {
              const kr = f.current;
              return () => kr.cancel(i ? `${i}: unmounting` : "unmounting");
            }, [i]),
            f.current
          );
        }
      },
      95695: (Ir) => {
        Ir.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
    },
  ]);
})();
